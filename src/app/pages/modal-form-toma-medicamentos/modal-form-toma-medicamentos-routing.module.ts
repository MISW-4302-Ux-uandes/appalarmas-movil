import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalFormTomaMedicamentosPage } from './modal-form-toma-medicamentos.page';

const routes: Routes = [
  {
    path: '',
    component: ModalFormTomaMedicamentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalFormTomaMedicamentosPageRoutingModule {}
