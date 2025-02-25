import { Injectable } from '@angular/core';
import Duenio from '../models/Duenio';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DuenioService {

  private readonly urlRead = "http://localhost:8080/duenio/traer"
  duenios: Duenio[];

  constructor(private http: HttpClient) {
    this.duenios = [];
  }

  getDuenios() {
    return this.http.get<Duenio[]>(this.urlRead);
  }

  insertDuenio(duenio: Duenio):void {
    console.log(duenio.nombre);
  }

}
