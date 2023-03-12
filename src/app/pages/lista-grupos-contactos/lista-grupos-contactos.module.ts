import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaGruposContactosPageRoutingModule } from './lista-grupos-contactos-routing.module';

import { ListaGruposContactosPage } from './lista-grupos-contactos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaGruposContactosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListaGruposContactosPage]
})
export class ListaGruposContactosPageModule {}
