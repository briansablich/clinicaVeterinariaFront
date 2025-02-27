import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MascotaService } from '../../services/mascota.service';

@Component({
  selector: 'app-crearmascota',
  imports: [ReactiveFormsModule],
  templateUrl: './crearmascota.component.html',
  styleUrl: './crearmascota.component.css'
})
export class CrearmascotaComponent {
  mascotaForm: FormGroup;
  nombre: FormControl;
  especie: FormControl;
  raza: FormControl;
  color: FormControl;

  constructor(private mascotaService: MascotaService) {

    this.nombre = new FormControl('', Validators.required);
    this.especie = new FormControl('', Validators.required);
    this.raza = new FormControl('', Validators.required);
    this.color = new FormControl('', Validators.required);

    this.mascotaForm = new FormGroup({
      nombre: this.nombre,
      especie: this.especie,
      raza: this.raza,
      color: this.color
    })
  }

  insertMascota(): void {
    this.mascotaService.insertMascota(this.mascotaForm.value).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (e) => {
        console.log(e);
      }
    })
    this.mascotaForm.reset();
  }
}
