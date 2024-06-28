import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginFormGroup = {
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
        Validators.maxLength(255),
        Validators.pattern('^[a-zA-Z0-9]*$')
      ]
    })
  }

  loginForm = this.formBuilder.group(this.loginFormGroup);

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) { }


  doLogin(): any {
    return this.authService.login(this.loginForm.value).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Usuário autenticado com sucesso'
      });
      this.redirectAfterAWhile();
    }, (response) => {
      this.messageService.add({
        severity: 'error',
        summary: 'Não foi possível logar no sistema',
        detail: response.error.message
      });
      this.clearMessagesAfterAWhile();
    });
  }

  clearMessagesAfterAWhile() {
    this.executeActionAfterAWhile(() => this.messageService.clear())
  }

  redirectAfterAWhile() {
    this.executeActionAfterAWhile(() => this.router.navigate(['/users/me']))
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
