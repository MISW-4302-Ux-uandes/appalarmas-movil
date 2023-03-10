import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalFormRecordatorioRapidoPageRoutingModule } from './modal-form-recordatorio-rapido-routing.module';

import { ModalFormRecordatorioRapidoPage } from './modal-form-recordatorio-rapido.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalFormRecordatorioRapidoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalFormRecordatorioRapidoPage]
})
export class ModalFormRecordatorioRapidoPageModule {}
