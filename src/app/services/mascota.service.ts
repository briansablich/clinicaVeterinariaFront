import { Injectable } from '@angular/core';
import Mascota from '../models/Mascota';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  private readonly urlRead = "http://localhost:8080/mascotas/traer";
  private readonly urlCreate = "http://localhost:8080/mascotas/crear";
  //private readonly urlCreate = "http://localhost:8080/mascotas/crear";

  mascotas: Mascota[];

  constructor(private http: HttpClient) {
    this.mascotas = [];
  }

  getMascotas() {
    return this.http.get<Mascota[]>(this.urlRead);
  }

  insertMascota(mascota: Mascota) {
    return this.http.post(this.urlCreate, mascota);
  }

  deleteMascota(idMascota: number){

  }

}
