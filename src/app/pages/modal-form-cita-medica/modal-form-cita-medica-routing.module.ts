import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalFormCitaMedicaPage } from './modal-form-cita-medica.page';

const routes: Routes = [
  {
    path: '',
    component: ModalFormCitaMedicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalFormCitaMedicaPageRoutingModule {}
