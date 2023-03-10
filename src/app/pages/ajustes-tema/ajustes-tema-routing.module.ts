import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjustesTemaPage } from './ajustes-tema.page';

const routes: Routes = [
  {
    path: '',
    component: AjustesTemaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjustesTemaPageRoutingModule {}
