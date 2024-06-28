import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(phoneNumber: string): string {
    const pattern = phoneNumber?.length > 10 ?
      /^(\d{2})(\d{5})(\d{4})$/ : /^(\d{2})(\d{4})(\d{4})$/;
    const match = phoneNumber.match(pattern);
    return match ? `(${match[1]}) ${match[2]}-${match[3]}` : phoneNumber;
  }
}