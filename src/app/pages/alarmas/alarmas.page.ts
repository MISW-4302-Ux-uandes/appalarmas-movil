import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalAlarmaParaPage } from '../modal-alarma-para/modal-alarma-para.page';


@Component({
  selector: 'app-alarmas',
  templateUrl: './alarmas.page.html',
  styleUrls: ['./alarmas.page.scss'],
})
export class AlarmasPage implements OnInit {

  constructor(private _modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async mostrarModalAlarmaPara(){
    const modal = await this._modalCtrl.create({
      component: ModalAlarmaParaPage
    });
    await modal.present();
  }

}
