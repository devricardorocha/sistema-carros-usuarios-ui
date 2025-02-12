import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthCredentials } from '../models/auth-credentials.model';

const API_LOGIN = 'api/signin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=utf-8',
        'Accept': 'application/json;charset=utf-8'
      })
  };

  constructor(
    private http: HttpClient,
    private router: Router
) {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      this.tokenSubject.next(token);
    }
  }

  login(credentials: AuthCredentials): Observable<any> {
    return this.http.post<any>(API_LOGIN, credentials, this.httpOptions).pipe(
      tap(response => {
        localStorage.setItem('jwtToken', response.token);
        this.tokenSubject.next(response.token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
    this.tokenSubject.next(null);
    this.router.navigate(['/app/login']);
  }

  get token(): string | null {
    return this.tokenSubject.value;
  }

  isAuthenticated(): boolean {
    return !!this.tokenSubject.value;
  }
}
