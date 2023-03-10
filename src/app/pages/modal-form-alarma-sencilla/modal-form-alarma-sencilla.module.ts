import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalFormAlarmaSencillaPageRoutingModule } from './modal-form-alarma-sencilla-routing.module';

import { ModalFormAlarmaSencillaPage } from './modal-form-alarma-sencilla.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModalFormAlarmaSencillaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalFormAlarmaSencillaPage]
})
export class ModalFormAlarmaSencillaPageModule {}
