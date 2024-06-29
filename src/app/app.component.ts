import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  authenticated: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.isUserAuthenticated();
  }

  isUserAuthenticated() {
    this.authenticated = this.authService.isAuthenticated();
  }

  goHome() {
    this.router.navigate(['/app']);
  }

  logout() {
    this.authService.logout();
    this.isUserAuthenticated();
    this.goHome();
  }

}
