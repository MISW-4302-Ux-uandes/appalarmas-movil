import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjustesSonidosVibracionPage } from './ajustes-sonidos-vibracion.page';

const routes: Routes = [
  {
    path: '',
    component: AjustesSonidosVibracionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjustesSonidosVibracionPageRoutingModule {}
