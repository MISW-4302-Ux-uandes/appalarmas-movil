import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriasFormularioPageRoutingModule } from './categorias-formulario-routing.module';

import { CategoriasFormularioPage } from './categorias-formulario.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    CategoriasFormularioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CategoriasFormularioPage]
})
export class CategoriasFormularioPageModule {}
