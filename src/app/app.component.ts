import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

/* 
-Lista de dueños
-Lista de mascotas (con filtro por raza)
-Mascota detalle (MascoDuenioDTO con idmascota)
-Crear mascota
-Crear dueño
*/

export class AppComponent {
}
