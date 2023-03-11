import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertasService } from 'src/app/services/alertas.service';
import { ModalAlarmaParaPage } from '../modal-alarma-para/modal-alarma-para.page';


@Component({
  selector: 'app-alarmas',
  templateUrl: './alarmas.page.html',
  styleUrls: ['./alarmas.page.scss'],
})
export class AlarmasPage implements OnInit {

  constructor(private _modalCtrl: ModalController,
              private _alertas: AlertasService,) { }

  ngOnInit() {
  }

  async mostrarModalAlarmaPara(){
    const modal = await this._modalCtrl.create({
      component: ModalAlarmaParaPage
    });
    await modal.present();
    const r = await modal.onDidDismiss()
    this._alertas.presentToast('bottom',r.data.msg,3000)
  }

}
