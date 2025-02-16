import { Routes } from '@angular/router';
import { DueniosComponent } from './pages/duenios/duenios.component';
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import { MascotadetalleComponent } from './pages/mascotadetalle/mascotadetalle.component';
import { CrearmascotaComponent } from './pages/crearmascota/crearmascota.component';
import { CrearduenioComponent } from './pages/crearduenio/crearduenio.component';

export const routes: Routes = [
    {path: '', component: DueniosComponent},
    {path: 'mascotas', component: MascotasComponent},
    {path: 'mascotas/detalle', component: MascotadetalleComponent},
    {path: 'crearmascota', component: CrearmascotaComponent},
    {path: 'crearduenio', component: CrearduenioComponent}
];
