import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DuenioService } from '../../services/duenio.service';

@Component({
  selector: 'app-crearduenio',
  imports: [ReactiveFormsModule],
  templateUrl: './crearduenio.component.html',
  styleUrl: './crearduenio.component.css'
})
export class CrearduenioComponent {
  duenioForm: FormGroup;
  nombre: FormControl;
  apellido: FormControl;
  dni: FormControl;
  celular: FormControl;

  constructor(private duenioService: DuenioService) {

    this.nombre = new FormControl('', Validators.required);
    this.apellido = new FormControl('', Validators.required);
    this.dni = new FormControl('', [Validators.required, Validators.min(0), Validators.max(100000000)]);
    this.celular = new FormControl('', [Validators.required, Validators.maxLength(10)]);

    this.duenioForm = new FormGroup({
      nombre: this.nombre,
      apellido: this.apellido,
      dni: this.dni,
      celular: this.celular
    })
  }

  insertDuenio(): void {
    this.duenioService.insertDuenio(this.duenioForm.value).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (e) => {
        console.log(e);
      }
    })
    this.duenioForm.reset();
  }

}
