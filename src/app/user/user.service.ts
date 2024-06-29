import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const API_USERS = '/api/users';
const API_ME = '/api/me';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=utf-8',
        'Accept': 'application/json;charset=utf-8'
      })
  };

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(API_USERS, this.httpOptions);
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(API_USERS, user, this.httpOptions);
  }

  delete(id: number): any {
    return this.http.delete(`${API_USERS}/${id}`, this.httpOptions);
  }

  me(): Observable<User> {
    return this.http.get(API_ME, this.httpOptions);
  }
}
