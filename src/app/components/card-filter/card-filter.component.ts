import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-filter',
  templateUrl: './card-filter.component.html',
  styleUrls: ['./card-filter.component.scss'],
})
export class CardFilterComponent  implements OnInit {

@Input() title:string = '';
@Input() totalAlarms:number = 0;
@Input() icon:string = '';

  constructor() { }

  ngOnInit() {}

}
