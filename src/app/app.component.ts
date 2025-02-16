import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

/* 
-Home
-Lista de dueños
-Lista de mascotas (con filtro por raza)
-Mascota detalle (MascoDuenioDTO con idmascota)
-Crear mascota
-Crear dueño
*/

export class AppComponent {
}
