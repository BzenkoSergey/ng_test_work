import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  get<T>(key: string) {
    const json = localStorage.getItem(key);
    if (!json) {
      return;
    }
    return JSON.parse(json) as T;
  }

  set<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  delete(key: string) {
    localStorage.removeItem(key);
  }
}
