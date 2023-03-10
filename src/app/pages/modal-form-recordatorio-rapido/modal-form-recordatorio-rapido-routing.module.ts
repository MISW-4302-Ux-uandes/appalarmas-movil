import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalFormRecordatorioRapidoPage } from './modal-form-recordatorio-rapido.page';

const routes: Routes = [
  {
    path: '',
    component: ModalFormRecordatorioRapidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalFormRecordatorioRapidoPageRoutingModule {}
