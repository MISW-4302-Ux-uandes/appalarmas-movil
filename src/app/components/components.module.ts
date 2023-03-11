import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { CardAlarmComponent } from './card-alarm/card-alarm.component';
import { CardFilterComponent } from './card-filter/card-filter.component';
import { CardAlarmTypeComponent } from './card-alarm-type/card-alarm-type.component';
import { HeaderModalComponent } from './header-modal/header-modal.component';
import { CardQuickReminderComponent } from './card-quick-reminder/card-quick-reminder.component';


@NgModule({
  declarations: [
    HeaderComponent,
    CardAlarmComponent,
    CardFilterComponent,
    CardAlarmTypeComponent,
    HeaderModalComponent,
    CardQuickReminderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    HeaderComponent,
    CardAlarmComponent,
    CardFilterComponent,
    CardAlarmTypeComponent,
    HeaderModalComponent,
    CardQuickReminderComponent
  ]
})
export class ComponentsModule { }
