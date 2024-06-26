import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  users: any[] = [];
  selectedUser: any = null;

  constructor(
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.appService.getUsers().subscribe(response => {
      this.users = response.map(user => ({
        ...user, birthday: new Date(user.birthday).toLocaleDateString('pt-BR')
      }));
      
      if (this.users && this.users.length > 0)
        this.selectedUser = this.users[0];
    })

    if (this.users && this.users.length > 0)
      this.selectedUser = this.users[0];
  }

  onSelectUser(user: any): void {
    this.selectedUser = user;
  }
}
