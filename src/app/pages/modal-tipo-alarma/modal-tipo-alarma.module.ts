import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalTipoAlarmaPageRoutingModule } from './modal-tipo-alarma-routing.module';

import { ModalTipoAlarmaPage } from './modal-tipo-alarma.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalTipoAlarmaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalTipoAlarmaPage]
})
export class ModalTipoAlarmaPageModule {}
