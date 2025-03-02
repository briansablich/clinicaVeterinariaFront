import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../services/mascota.service';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-mascotas',
  imports: [RouterLink, RouterModule],
  templateUrl: './mascotas.component.html',
  styleUrl: './mascotas.component.css'
})
export class MascotasComponent implements OnInit {

  constructor(public mascotaService: MascotaService) {

  }

  ngOnInit(): void {
    this.getMascotas();
  }

  getMascotas() {
    this.mascotaService.getMascotas().subscribe({
      next: (data) => {
        this.mascotaService.mascotas = data;
      },
      error: (e) => {
        console.log(e);
      }
    })

    this.mascotaService.duenios.forEach(d => {
      d.listaMascotas.forEach(mascota => {
        this.mascotaService.mascotas.forEach(m => {
          if (m.idMascota === mascota.idMascota) {
            m.duenio = { idDuenio: d.idDuenio, nombre: d.nombre, apellido: d.apellido, celular: d.celular, dni: d.dni, listaMascotas: [] };

            mascota.duenio = d;

            console.log(d.apellido);
          }
        });
      });
    });
  }

  deleteMascota(idMascota: number) {
    this.mascotaService.mascotas = this.mascotaService.mascotas.filter(m => m.idMascota !== idMascota);
    this.mascotaService.deleteMascota(idMascota).subscribe({
      next: (data) => {
        console.log(data);
        this.getMascotas();
      },
      error: (e) => {
        console.log(e);
      }
    })
  }

}
