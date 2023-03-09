import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { CardAlarmComponent } from './card-alarm/card-alarm.component';
import { CardFilterComponent } from './card-filter/card-filter.component';


@NgModule({
  declarations: [
    HeaderComponent,
    CardAlarmComponent,
    CardFilterComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    HeaderComponent,
    CardAlarmComponent,
    CardFilterComponent
  ]
})
export class ComponentsModule { }
