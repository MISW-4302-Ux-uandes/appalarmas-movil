import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriasFormularioPageRoutingModule } from './categorias-formulario-routing.module';

import { CategoriasFormularioPage } from './categorias-formulario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriasFormularioPageRoutingModule
  ],
  declarations: [CategoriasFormularioPage]
})
export class CategoriasFormularioPageModule {}
