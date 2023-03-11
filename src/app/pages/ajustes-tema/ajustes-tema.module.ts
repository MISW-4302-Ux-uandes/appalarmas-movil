import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjustesTemaPageRoutingModule } from './ajustes-tema-routing.module';

import { AjustesTemaPage } from './ajustes-tema.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjustesTemaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AjustesTemaPage]
})
export class AjustesTemaPageModule {}
