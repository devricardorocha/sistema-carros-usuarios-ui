import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.users = [];
    this.userService.getUsers().subscribe(response => {
      this.users = response;
    })
  }

  addNewUser() {
    this.router.navigate(['/users/new']);
  }

  delete(userId: number) {
    this.userService.delete(userId).subscribe(() => {
      this.messageService.add({ severity: 'info', summary: 'Usuário removido' });
      setTimeout(() => {
        this.messageService.clear();
        this.getAllUsers();
      }, 3000);
    })
  }

  deleteUserAfterConfirmation(id: number) {
    this.confirmationService.confirm({
      message: 'A ação não poderá ser desfeita',
      header: 'Remover usuário?',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: "none",
      acceptLabel: "Sim",
      rejectIcon: "none",
      rejectLabel: "Não",
      rejectButtonStyleClass: "p-button-text",
      accept: () => this.delete(id)
    });
  }

  goToUserArea() {
    this.router.navigate(['users/me']);
  }

}
