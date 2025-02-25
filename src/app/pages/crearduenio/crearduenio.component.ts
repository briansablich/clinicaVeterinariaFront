import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DuenioService } from '../../services/duenio.service';
import Duenio from '../../models/Duenio';

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

  constructor(private duenioService: DuenioService){
    this.nombre = new FormControl('');
    this.apellido = new FormControl('');
    this.dni = new FormControl('');
    this.celular = new FormControl('');

    this.duenioForm = new FormGroup({
      nombre: this.nombre,
      apellido: this.apellido,
      dni: this.dni,
      celular: this.celular
    })
  }

  insertDuenio(): void{
    const duenio: Duenio = this.duenioForm.value;
    console.log(duenio);
    this.duenioService.insertDuenio(duenio);
  }

}
