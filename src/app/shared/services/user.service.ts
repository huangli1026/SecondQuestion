import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://api.github.com/search/users?q=';

  constructor(private http: HttpClient) { }

  searchUsers(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${username}`);
  }
}
