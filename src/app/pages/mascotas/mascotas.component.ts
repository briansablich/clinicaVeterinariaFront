import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../services/mascota.service';

@Component({
  selector: 'app-mascotas',
  imports: [],
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
