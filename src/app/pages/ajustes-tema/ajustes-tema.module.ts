import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjustesTemaPageRoutingModule } from './ajustes-tema-routing.module';

import { AjustesTemaPage } from './ajustes-tema.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjustesTemaPageRoutingModule
  ],
  declarations: [AjustesTemaPage]
})
export class AjustesTemaPageModule {}
