import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjustesSonidosVibracionPageRoutingModule } from './ajustes-sonidos-vibracion-routing.module';

import { AjustesSonidosVibracionPage } from './ajustes-sonidos-vibracion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjustesSonidosVibracionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AjustesSonidosVibracionPage]
})
export class AjustesSonidosVibracionPageModule {}
