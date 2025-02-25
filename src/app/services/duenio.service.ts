import { Injectable } from '@angular/core';
import Duenio from '../models/Duenio';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DuenioService {

  private readonly urlRead = "http://localhost:8080/duenio/traer"
  private readonly urlCreate = "http://localhost:8080/duenio/crear"
  

  duenios: Duenio[];

  constructor(private http: HttpClient) {
    this.duenios = [];
  }

  getDuenios() {
    return this.http.get<Duenio[]>(this.urlRead);
  }

  insertDuenio(duenio: Duenio) {
    return this.http.post<Duenio>(this.urlCreate, duenio);
  }

}
