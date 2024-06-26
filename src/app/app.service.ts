import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_USERS = '/api/users';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get<any[]>(API_USERS, { headers });
  }
}
