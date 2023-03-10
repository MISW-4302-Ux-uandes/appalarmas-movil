import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAlarmaParaPageRoutingModule } from './modal-alarma-para-routing.module';

import { ModalAlarmaParaPage } from './modal-alarma-para.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAlarmaParaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalAlarmaParaPage]
})
export class ModalAlarmaParaPageModule {}
