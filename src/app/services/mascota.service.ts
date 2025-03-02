import { Injectable } from '@angular/core';
import Mascota from '../models/Mascota';
import { HttpClient } from '@angular/common/http';
import Duenio from '../models/Duenio';
import { DuenioService } from './duenio.service';
import MascoDuenioDTO from '../models/MascoDuenioDTO';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  private readonly urlRead = "http://localhost:8080/mascotas/traer";
  private readonly urlCreate = "http://localhost:8080/mascotas/crear";
  private readonly urlDelete = "http://localhost:8080/mascotas/eliminar/";
  private readonly urlReadMascoDuenio = "http://localhost:8080/mascotas/traerporid?idmascota=";
  private readonly urlReadMascotaPorId = "http://localhost:8080/mascotas/traermascotaporid?idmascota=";

  mascotas: Mascota[];
  duenios: Duenio[];

  constructor(private http: HttpClient, public duenioService: DuenioService) {
    this.mascotas = [];
    this.duenios = [];
    this.duenioService.getDuenios().subscribe({
      next: (dataDuenio) => {
        this.duenios = dataDuenio;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  getMascotas() {
    return this.http.get<Mascota[]>(this.urlRead);
  }

  insertMascota(mascota: Mascota) {
    return this.http.post(this.urlCreate, mascota);
  }

  deleteMascota(idMascota: number) {
    return this.http.delete<any>(this.urlDelete + idMascota)
  }

  getMascoDuenioDTO(idMascota: number){
    return this.http.get<MascoDuenioDTO>(this.urlReadMascoDuenio + idMascota);
  }

  getMascotaPorId(idmascota: number){
    return this.http.get<Mascota>(this.urlReadMascotaPorId + idmascota);
  }

}
