import { Injectable } from '@angular/core';
import { Observable, from, of, switchMap, concatMap, mergeMap, timer } from 'rxjs';
import { map, bufferCount } from 'rxjs/operators';

import { ForecastRestService } from '@rest/forecast';
import { UsersRestService, UserModel } from '@rest/users';

import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly storageCollectionKey = 'users.collection';
  private readonly storageUserKey = (id: string) => `users.${id}`;
  private readonly millisecondsInMinute = 60000;
  private readonly updateForecastInterval = this.millisecondsInMinute * 5;

  constructor(
    private readonly storageService: StorageService,
    private readonly forecastRest: ForecastRestService,
    private readonly usersRest: UsersRestService
  ) {}

  get(items = 20) {
    return this.makeUsersStream(this.usersRest.get(items), items);
  }

  getSaved() {
    const collection = this.storageService.get<string[]>(this.storageCollectionKey) || [];
    const items = collection
      .map(id => this.storageUserKey(id))
      .map(key => this.storageService.get<UserModel>(key))
      .filter(user => !!user) as UserModel[];

    return this.makeUsersStream(of(items), items.length);
  }

  save(user: UserModel) {
    const key = this.storageUserKey(user.id);
    const collection = this.storageService.get<string[]>(this.storageCollectionKey) || [];
    const fromStore = this.storageService.get<UserModel>(key);
    if (fromStore || collection.includes(user.id)) {
      return;
    }
    this.storageService.set(this.storageCollectionKey, [...collection, user.id]);
    this.storageService.set(key, user);
  }

  private makeUsersStream(users$: Observable<UserModel[]>, items: number) {
    return users$
      .pipe(
        switchMap(users => {
          return timer(0, this.updateForecastInterval)
            .pipe(
              mergeMap(() => from(users))
            );
        }),
        concatMap(user => {
          return this.forecastRest.get(user.latitude, user.longitude)
            .pipe(
              map(forecast => ({ user, forecast }))
            );
        }),
        bufferCount(items)
      );
  }
}
