import { Component, OnInit } from '@angular/core';
import { DuenioService } from '../../services/duenio.service';

@Component({
  selector: 'app-duenios',
  imports: [],
  templateUrl: './duenios.component.html',
  styleUrl: './duenios.component.css'
})
export class DueniosComponent implements OnInit {
  
  constructor(public duenioService: DuenioService){

  }

  ngOnInit(): void {
    this.getDuenios();
  }

  getDuenios() {
    this.duenioService.getDuenios().subscribe({
      next:(data) =>{
        this.duenioService.duenios = data;
      },
      error: (e) => {
        console.log(e);
      }
    })
  }

}
