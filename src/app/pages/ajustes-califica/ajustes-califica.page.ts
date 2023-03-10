import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ajustes-califica',
  templateUrl: './ajustes-califica.page.html',
  styleUrls: ['./ajustes-califica.page.scss'],
})
export class AjustesCalificaPage implements OnInit {

  constructor(private _modalCtrl:ModalController) { }

  ngOnInit() {
  }

  cerrarModal() {
    this._modalCtrl.dismiss()
  }

}
