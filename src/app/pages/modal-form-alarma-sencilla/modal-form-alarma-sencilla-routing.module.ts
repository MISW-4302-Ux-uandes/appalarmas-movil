import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalFormAlarmaSencillaPage } from './modal-form-alarma-sencilla.page';

const routes: Routes = [
  {
    path: '',
    component: ModalFormAlarmaSencillaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalFormAlarmaSencillaPageRoutingModule {}
