import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, OnDestroy {

  isAuthenticated: boolean | null = false;
  isAuthenticatedSubscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private authService: AuthService
  ){}
  
  ngOnInit(): void {
    this.isAuthenticatedSubscription = this.authService.observableIsAuthenticated()
    .subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
      console.log('isAuthenticated', isAuthenticated);
    });
  }

  ngOnDestroy(): void {
    this.isAuthenticatedSubscription.unsubscribe();
  }

  goHome() {
    this.router.navigate(['/app']);
  }

  logout() {
    this.authService.logout();
    this.goHome();
  }

}
