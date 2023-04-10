import { Injectable } from '@angular/core';
import { userApi } from 'src/api/user.api';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private userApi: userApi) {}

  getUserByName(username: string, page: number) {
    return this.userApi.getUserByUsername(username, page);
  }
}
