import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelModule } from 'primeng/panel';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserService } from './user/user.service';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { MessageModule } from 'primeng/message';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { FullNamePipe } from './pipes/full-name.pipe';
import { UserFormComponent } from './user/user-form/user-form.component';
import { TooltipModule } from 'primeng/tooltip';
import { AuthInterceptor } from './auth/auth.interceptor';
import { LoginComponent } from './auth/login/login.component';
import { SplitterModule } from 'primeng/splitter';
import { CarListComponent } from './car/car-list/car-list.component';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    AppComponent,
    FullNamePipe,
    PhoneNumberPipe,
    UserDetailComponent,
    UserFormComponent,
    UserListComponent,
    LoginComponent,
    CarListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    PanelModule,
    TableModule,
    InputTextModule,
    CardModule,
    ReactiveFormsModule,
    CalendarModule,
    MessageModule,
    MessagesModule,
    ConfirmDialogModule,
    ToastModule,
    TooltipModule,
    SplitterModule,
    ToolbarModule,
    DialogModule,
    InputNumberModule
  ],
  exports: [ 
    AppComponent,
   ],
  providers: [ 
    UserService,
    MessageService,
    ConfirmationService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
