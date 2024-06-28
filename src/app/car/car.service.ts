import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';
import { Observable } from 'rxjs';

const API_CARS = '/api/cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(API_CARS, this.httpOptions);
  }

  create(car: Car): Observable<Car> {
    return this.http.post<Car>(API_CARS, car, this.httpOptions);
  }

  delete(id: number): any {
    return this.http.delete(`${API_CARS}/${id}`, this.httpOptions);
  }

}
