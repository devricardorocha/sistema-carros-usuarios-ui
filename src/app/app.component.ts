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
    // this.appService.getUsers().subscribe(response => {
    //   this.users = response.map(user => ({
    //     ...user, birthday: new Date(user.birthday).toLocaleDateString('pt-BR')
    //   }));
      
    //   if (this.users && this.users.length > 0)
    //     this.selectedUser = this.users[0];
    // })

    this.users = [
        {
            "id": 1,
            "firstName": "Alice",
            "lastName": "Silva",
            "email": "alice.silva@example.com",
            "birthday": "1990-01-15",
            "login": "alice_silva",
            "phone": "81123456789",
            "created": "2024-06-26",
            "lastLogin": "2024-06-26T10:28:19.875117"
        },
        {
            "id": 2,
            "firstName": "Bruno",
            "lastName": "Costa",
            "email": "bruno.costa@example.com",
            "birthday": "1985-05-23",
            "login": "bruno_costa",
            "phone": "81987654321",
            "created": "2024-06-26",
            "lastLogin": "2024-06-26T10:28:19.875117"
        },
        {
            "id": 3,
            "firstName": "Carla",
            "lastName": "Souza",
            "email": "carla.souza@example.com",
            "birthday": "1992-09-30",
            "login": "carla_souza",
            "phone": "81456789123",
            "created": "2024-06-26",
            "lastLogin": "2024-06-26T10:28:19.875117"
        }
    ];

    if (this.users && this.users.length > 0)
      this.selectedUser = this.users[0];
  }

  onSelectUser(user: any): void {
    this.selectedUser = user;
  }
}
