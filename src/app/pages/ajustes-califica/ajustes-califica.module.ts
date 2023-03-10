import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjustesCalificaPageRoutingModule } from './ajustes-califica-routing.module';

import { AjustesCalificaPage } from './ajustes-califica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjustesCalificaPageRoutingModule
  ],
  declarations: [AjustesCalificaPage]
})
export class AjustesCalificaPageModule {}
