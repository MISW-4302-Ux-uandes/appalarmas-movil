import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlarmasPageRoutingModule } from './alarmas-routing.module';

import { AlarmasPage } from './alarmas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlarmasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AlarmasPage],
})
export class AlarmasPageModule {}
