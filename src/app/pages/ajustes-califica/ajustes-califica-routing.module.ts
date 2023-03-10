import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjustesCalificaPage } from './ajustes-califica.page';

const routes: Routes = [
  {
    path: '',
    component: AjustesCalificaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjustesCalificaPageRoutingModule {}
