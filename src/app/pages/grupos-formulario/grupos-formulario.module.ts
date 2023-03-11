import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GruposFormularioPageRoutingModule } from './grupos-formulario-routing.module';

import { GruposFormularioPage } from './grupos-formulario.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GruposFormularioPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [GruposFormularioPage]
})
export class GruposFormularioPageModule {}
