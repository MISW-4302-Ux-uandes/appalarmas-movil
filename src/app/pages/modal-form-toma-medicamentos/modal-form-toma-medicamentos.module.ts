import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalFormTomaMedicamentosPageRoutingModule } from './modal-form-toma-medicamentos-routing.module';

import { ModalFormTomaMedicamentosPage } from './modal-form-toma-medicamentos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ModalFormTomaMedicamentosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalFormTomaMedicamentosPage]
})
export class ModalFormTomaMedicamentosPageModule {}
