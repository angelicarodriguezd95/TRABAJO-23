import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './principal/busqueda/busqueda.component';
import { FormularioComponent } from './principal/formulario/formulario.component';
import { VistaComponent } from './principal/vista/vista.component';
import { ComponentesComponent } from './principal/componentes/componentes.component';
import { OperacionesComponent } from './principal/operaciones/operaciones.component';

const routes: Routes = [
  {path: 'vista', component : VistaComponent},
  {path: 'formulario', component : FormularioComponent},
  {path: 'busqueda', component : BusquedaComponent},
  {path: 'componentes', component : ComponentesComponent},
  {path: 'operaciones', component : OperacionesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
