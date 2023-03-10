import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ajustes-sonidos-vibracion',
  templateUrl: './ajustes-sonidos-vibracion.page.html',
  styleUrls: ['./ajustes-sonidos-vibracion.page.scss'],
})
export class AjustesSonidosVibracionPage implements OnInit {

  constructor(private _modalCtrl:ModalController) { }

  ngOnInit() {
  }

  cerrarModal() {
    this._modalCtrl.dismiss()
  }

}
