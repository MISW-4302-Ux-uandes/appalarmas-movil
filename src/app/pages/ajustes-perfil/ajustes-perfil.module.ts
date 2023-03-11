import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjustesPerfilPageRoutingModule } from './ajustes-perfil-routing.module';

import { AjustesPerfilPage } from './ajustes-perfil.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjustesPerfilPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AjustesPerfilPage]
})
export class AjustesPerfilPageModule {}
