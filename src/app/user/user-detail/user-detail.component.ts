import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {

  user: User | null = null;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    if (!this.user) {
      this.userService.me().subscribe(response => {
        this.user = {
          ...response,
          birthday: new Date(response.birthday!).toLocaleDateString('pt-BR')
        };
      })
    }
  }



}
