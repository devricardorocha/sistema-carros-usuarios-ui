import { NgModule } from '@angular/core';
import { UserDetailComponent } from './user-detail.component';
import { SharedModule } from '../shared/shared.module';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    UserDetailComponent
  ],
  imports: [
    SharedModule,
    CardModule
  ],
  exports: [ UserDetailComponent ]
})
export class UserDetailModule { }
