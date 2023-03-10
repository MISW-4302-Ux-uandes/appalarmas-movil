import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ajustes-tema',
  templateUrl: './ajustes-tema.page.html',
  styleUrls: ['./ajustes-tema.page.scss'],
})
export class AjustesTemaPage implements OnInit {

  constructor(private _modalCtrl:ModalController) { }

  ngOnInit() {
  }

  cerrarModal() {
    this._modalCtrl.dismiss()
  }

}
