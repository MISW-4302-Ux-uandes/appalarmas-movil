import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAlarmaParaPage } from './modal-alarma-para.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAlarmaParaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAlarmaParaPageRoutingModule {}
