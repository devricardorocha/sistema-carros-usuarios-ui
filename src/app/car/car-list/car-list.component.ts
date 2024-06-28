import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car.model';
import { CarService } from '../car.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import moment from 'moment';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent implements OnInit {

  cars: Car[] = [];
  carDialog: boolean = false;

  carFormGroup = {
    model: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(255)
      ]
    }),
    year: new FormControl(moment().year(), {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(1990),
        Validators.max(moment().year()),
      ]
    }),
    licensePlate: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(8)
      ]
    }),
    color: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(21)
      ]
    })
  }

  carForm = this.formBuilder.group(this.carFormGroup);

  constructor(
    private carService: CarService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this.getAllCars();
  }

  getAllCars() {
    this.cars = [];
    this.carService.getCars().subscribe(response => {
      this.cars = response;
    })
  }

  openNew() {
    this.carDialog = true;
  }

  addNewCar() {
    this.carService.create(this.carForm.value).subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Carro salvo com sucesso'
      });
      this.hideDialog();
      this.getAllCars();
    }, (response) => {
      this.messageService.add({
        severity: 'error',
        summary: 'Carro não foi salvo',
        detail: response.error.message
      });
    });
  }

  hideDialog() {
    this.carDialog = false;
  }

  delete(carId: number) {
    this.carService.delete(carId).subscribe(() => {
      this.messageService.add({ severity: 'info', summary: 'Carro removido' });
      this.getAllCars();
      setTimeout(() => {
        this.messageService.clear();
      }, 3000);
    })
  }

  deleteCarAfterConfirmation(id: number) {
    this.confirmationService.confirm({
      message: 'A ação não poderá ser desfeita',
      header: 'Remover carro?',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: "none",
      acceptLabel: "Sim",
      rejectIcon: "none",
      rejectLabel: "Não",
      rejectButtonStyleClass: "p-button-text",
      accept: () => this.delete(id)
    });
  }

}
