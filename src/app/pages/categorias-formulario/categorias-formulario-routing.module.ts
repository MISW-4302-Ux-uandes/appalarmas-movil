import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasFormularioPage } from './categorias-formulario.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriasFormularioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasFormularioPageRoutingModule {}
