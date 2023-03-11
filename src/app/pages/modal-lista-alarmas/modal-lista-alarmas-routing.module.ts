import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalListaAlarmasPage } from './modal-lista-alarmas.page';

const routes: Routes = [
  {
    path: '',
    component: ModalListaAlarmasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalListaAlarmasPageRoutingModule {}
