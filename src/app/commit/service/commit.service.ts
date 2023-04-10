import { Injectable } from '@angular/core';
import { userApi } from 'src/api/user.api';

@Injectable({
  providedIn: 'root',
})
export class CommitService {
  constructor(private userApi: userApi) {}
  getCommits(owner: string, repo: string) {
    return this.userApi.getCommits(owner, repo);
  }
  getUser(userName: string) {
    return this.userApi.getUser(userName);
  }
}
