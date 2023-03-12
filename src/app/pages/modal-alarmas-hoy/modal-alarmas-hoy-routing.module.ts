import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAlarmasHoyPage } from './modal-alarmas-hoy.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAlarmasHoyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAlarmasHoyPageRoutingModule {}
