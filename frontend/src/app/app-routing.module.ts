import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { RutasComponent } from './rutas/rutas.component';
import { PagEstComponent } from './pag-est/pag-est.component';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'categorias', component:CategoriasComponent},
  {path: 'rutas/:categoria', component:RutasComponent},
  {path: 'pag-est/:id_rutas', component:PagEstComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
