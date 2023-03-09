import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-alarm',
  templateUrl: './card-alarm.component.html',
  styleUrls: ['./card-alarm.component.scss'],
})
export class CardAlarmComponent  implements OnInit {

  @Input() alarmTitle: string = 'Mi alarma';
  @Input() alarmCategory: string = 'Citas Medicas';
  @Input() alarmHour: string = '15:15 02/03/2023';
  @Input() alarmStatus: boolean = true;

  constructor() { }

  ngOnInit() {}

}
