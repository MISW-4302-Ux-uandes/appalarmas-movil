import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaContactosPageRoutingModule } from './lista-contactos-routing.module';

import { ListaContactosPage } from './lista-contactos.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaContactosPageRoutingModule,
    ComponentsModule

  ],
  declarations: [ListaContactosPage]
})
export class ListaContactosPageModule {}
