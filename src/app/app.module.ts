import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppService } from './app.service';
import { UserDetailModule } from './user-detail/user-detail.module';
import { SharedModule } from './shared/shared.module';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UserDetailModule,
    SharedModule,
    TableModule,
    PanelModule,
    AvatarModule 
  ],
  providers: [ AppService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
