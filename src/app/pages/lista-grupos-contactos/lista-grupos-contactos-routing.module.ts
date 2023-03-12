import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaGruposContactosPage } from './lista-grupos-contactos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaGruposContactosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaGruposContactosPageRoutingModule {}
