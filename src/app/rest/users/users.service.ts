import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { UsersResponse } from './users-response.interface';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersRestService {
  constructor(private readonly httpClient: HttpClient) {}

  get(items: number) {
    const url = this.genUrl(items);
    return this.httpClient.get<UsersResponse>(url)
      .pipe(
        map(({ results }) => {
          return results.map(({ id, email, gender, picture, location, name }) => new UserModel({
            email,
            gender,
            id: id.value,
            picture: picture.large,
            city: location.city,
            country: location.country,
            name: `${name.title} ${name.first} ${name.last}`,
            latitude: location.coordinates.latitude,
            longitude: location.coordinates.longitude
          }));
        })
      );
  }

  private genUrl(items: number) {
    return `https://randomuser.me/api/?results=${items}`;
  }
}
