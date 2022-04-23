import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioNuevoPeliComponent } from './components/formulario-nuevo-peli/formulario-nuevo-peli.component';
import { ListaPeliculasComponent } from './components/lista-peliculas/lista-peliculas.component';

const routes: Routes = [
  { path: 'crear', component: FormularioNuevoPeliComponent },
  { path: 'listado', component: ListaPeliculasComponent },
  { path: '', component: ListaPeliculasComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
