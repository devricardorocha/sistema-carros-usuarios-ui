import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import moment from 'moment';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {

  userId: number = 0;
  maxDate: Date = new Date();
  birthday: Date = new Date();

  userFormGroup = {
    firstName: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(255)
      ]
    }),
    lastName: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(255)
      ]
    }),
    birthday: new FormControl(moment().format('dd/mm/yy'), {
      nonNullable: true,
      validators: [
        Validators.required
      ]
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(255),
        Validators.email
      ]
    }),
    login: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(21)
      ]
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
        Validators.pattern('^[a-zA-Z0-9]*$')
      ]
    }),
    phone: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(11),
        Validators.pattern('^[0-9]*$')
      ]
    }),
    created: new FormControl('', {
      nonNullable: true,
      validators: []
    })
  }

  userForm = this.formBuilder.group(this.userFormGroup);

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private location: Location,
    private userService: UserService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
  }

  createUser(): any {
    const userToPost = {
      birthday: moment(this.userForm.get('birthday')?.value).format('yy-mm-dd'),
      ...this.userForm.value
    };
    return this.userService.create(userToPost).subscribe(user => {
      this.messageService.add({
        severity: 'success',
        summary: 'Usuário salvo com sucesso'
      });
      this.redirectAfterAWhile();
    }, (response) => {
      this.messageService.add({
        severity: 'error',
        summary: 'Usuário não foi salvo',
        detail: response.error.message
      });
      this.clearMessagesAfterAWhile();
    });
  }

  clearMessagesAfterAWhile() {
    this.executeActionAfterAWhile(() => this.messageService.clear())
  }

  redirectAfterAWhile() {
    this.executeActionAfterAWhile(() => this.router.navigate(['/app/users']))
  }

  executeActionAfterAWhile(action: Function) {
    setTimeout(() => {
      action();
    }, 3000);
  }

  back() {
    this.location.back();
  }
}
