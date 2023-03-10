import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalFormCitaMedicaPageRoutingModule } from './modal-form-cita-medica-routing.module';

import { ModalFormCitaMedicaPage } from './modal-form-cita-medica.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalFormCitaMedicaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalFormCitaMedicaPage]
})
export class ModalFormCitaMedicaPageModule {}
