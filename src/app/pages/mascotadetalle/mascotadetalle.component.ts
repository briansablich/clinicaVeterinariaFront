import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MascotaService } from '../../services/mascota.service';
import MascoDuenioDTO from '../../models/MascoDuenioDTO';

@Component({
  selector: 'app-mascotadetalle',
  imports: [RouterLink],
  templateUrl: './mascotadetalle.component.html',
  styleUrl: './mascotadetalle.component.css'
})
export class MascotadetalleComponent implements OnInit{

  mascoDuenioDTO: MascoDuenioDTO = {} as MascoDuenioDTO;

  constructor(private route: ActivatedRoute, public mascotaService: MascotaService){
  }

  ngOnInit(): void {
    this.mascotaService.getMascoDuenioDTO(this.route.snapshot.params['id']).subscribe({
      next:(data) => {
        this.mascoDuenioDTO = data;
      },
      error: (e) => {
        console.log(e);
      }
    })
  }
}
