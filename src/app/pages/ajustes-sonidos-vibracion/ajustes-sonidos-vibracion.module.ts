import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjustesSonidosVibracionPageRoutingModule } from './ajustes-sonidos-vibracion-routing.module';

import { AjustesSonidosVibracionPage } from './ajustes-sonidos-vibracion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjustesSonidosVibracionPageRoutingModule
  ],
  declarations: [AjustesSonidosVibracionPage]
})
export class AjustesSonidosVibracionPageModule {}
