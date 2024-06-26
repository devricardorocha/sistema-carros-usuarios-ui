import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';

@NgModule({
  declarations: [ PhoneNumberPipe ],
  imports: [
    CommonModule,
  ],
  exports: [ 
    PhoneNumberPipe, 
    CommonModule, ]
})
export class SharedModule { }
