import { Injectable } from '@angular/core';
import { userApi } from 'src/api/user.api';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  private imgUrl!: string;
  constructor(private userApi: userApi) {}

  getRepoByName(userName: string) {
    return this.userApi.getRepoByUsername(userName);
  }

  setImgUrl(imgUrl: string) {
    this.imgUrl = imgUrl;
  }

  getImgUrl() {
    return this.imgUrl;
  }
}
