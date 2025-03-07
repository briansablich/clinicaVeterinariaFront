import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MascotaService } from '../../services/mascota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DuenioService } from '../../services/duenio.service';
import Duenio from '../../models/Duenio';

@Component({
  selector: 'app-crearmascota',
  imports: [ReactiveFormsModule],
  templateUrl: './crearmascota.component.html',
  styleUrl: './crearmascota.component.css'
})
export class CrearmascotaComponent implements OnInit {
  mascotaForm: FormGroup;
  idMascota: FormControl;
  nombre: FormControl;
  especie: FormControl;
  raza: FormControl;
  color: FormControl;
  //idDuenio: FormControl;
  idMascotaTraer: number | null = null;
  duenios: Duenio[] = [];


  constructor(private mascotaService: MascotaService,
    private route: ActivatedRoute,
    private duenioService: DuenioService) {

    this.idMascota = new FormControl();
    this.nombre = new FormControl('', Validators.required);
    this.especie = new FormControl('', Validators.required);
    this.raza = new FormControl('', Validators.required);
    this.color = new FormControl('', Validators.required);
    //this.idDuenio = new FormControl('');

    this.mascotaForm = new FormGroup({
      idMascota: this.idMascota,
      nombre: this.nombre,
      especie: this.especie,
      raza: this.raza,
      color: this.color
      //idDuenio: new FormControl()
    })
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      if (params.get('idmascota')) {
        this.idMascotaTraer = Number(params.get('idmascota'));
        this.getMascotaPorId(this.idMascotaTraer);
      }
    });
    this.getDuenios();
  }

  insertMascota(): void {
    this.mascotaService.insertMascota(this.mascotaForm.value).subscribe({
      next: (mascotaData) => {
        console.log(mascotaData);
      },
      error: (e) => {
        console.log(e);
      }
    })
    console.log(this.mascotaForm.value)
    this.mascotaForm.reset();
  }

  getMascotaPorId(idmascotaTraer: number) {
    this.mascotaService.getMascotaPorId(idmascotaTraer).subscribe({
      next: (mascotaData) => {
        if (!mascotaData) {
          console.log("No se encontró una mascota con este ID");
          return;
        }
        this.mascotaForm.patchValue(mascotaData);
      },
      error: (e) => {
        console.log("Error al obtener la mascota:", e);
      }
    });
  }

  getDuenios(){
    this.duenioService.getDuenios().subscribe({
      next: (data) => {
        this.duenios = data;
      },
      error: (e) => {
        console.log(e);
      }
    })
  }

}
