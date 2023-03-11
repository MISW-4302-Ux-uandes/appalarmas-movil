import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalListaAlarmasPageRoutingModule } from './modal-lista-alarmas-routing.module';

import { ModalListaAlarmasPage } from './modal-lista-alarmas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalListaAlarmasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalListaAlarmasPage]
})
export class ModalListaAlarmasPageModule {}
