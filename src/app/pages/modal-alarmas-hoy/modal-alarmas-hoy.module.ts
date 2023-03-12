import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAlarmasHoyPageRoutingModule } from './modal-alarmas-hoy-routing.module';

import { ModalAlarmasHoyPage } from './modal-alarmas-hoy.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAlarmasHoyPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalAlarmasHoyPage]
})
export class ModalAlarmasHoyPageModule {}
