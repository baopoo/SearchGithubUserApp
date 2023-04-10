import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRepoResponse, IRepository, ISearchResponse } from './user.dto';
import { ICommit } from './user.dto';

@Injectable({
  providedIn: 'root',
})
export class userApi {
  constructor(private http: HttpClient) {}

  getUserByUsername(username: string, page: number): Observable<IRepoResponse> {
    return this.http.get<IRepoResponse>(
      `https://api.github.com/search/users?per_page=10&q=${username}&page=${page}`
    );
  }

  getRepoByUsername(username: string): Observable<IRepository> {
    return this.http.get<IRepository>(
      `https://api.github.com/users/${username}/repos?per_page=100`
    );
  }

  getCommits(owner: string, repo: string): Observable<ICommit> {
    return this.http.get<ICommit>(
      `https://api.github.com/repos/${owner}/${repo}/commits?per_page=10`
    );
  }

  getUser(userName: string) {
    return this.http.get(` https://api.github.com/users/${userName}`);
  }
}
