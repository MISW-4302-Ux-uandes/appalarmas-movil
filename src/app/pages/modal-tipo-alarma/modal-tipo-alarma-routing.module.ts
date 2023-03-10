import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalTipoAlarmaPage } from './modal-tipo-alarma.page';

const routes: Routes = [
  {
    path: '',
    component: ModalTipoAlarmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalTipoAlarmaPageRoutingModule {}
