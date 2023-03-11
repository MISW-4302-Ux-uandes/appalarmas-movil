import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-quick-reminder',
  templateUrl: './card-quick-reminder.component.html',
  styleUrls: ['./card-quick-reminder.component.scss'],
})
export class CardQuickReminderComponent  implements OnInit {

  @Input() texto:string = '';

  constructor() { }

  ngOnInit() {}

}
