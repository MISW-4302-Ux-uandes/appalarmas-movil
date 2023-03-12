import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertasService } from 'src/app/services/alertas.service';
import { ModalAlarmaParaPage } from '../modal-alarma-para/modal-alarma-para.page';

@Component({
  selector: 'app-modal-alarmas-hoy',
  templateUrl: './modal-alarmas-hoy.page.html',
  styleUrls: ['./modal-alarmas-hoy.page.scss'],
})
export class ModalAlarmasHoyPage implements OnInit {

  constructor(private _modalCtrl:ModalController, private _alertas:AlertasService) { }

  ngOnInit() {
  }

  async mostrarModalAlarmaPara(){
    const modal = await this._modalCtrl.create({
      component: ModalAlarmaParaPage
    });
    await modal.present();
    const r = await modal.onDidDismiss()
    if(r.data){
      this._alertas.presentToast('bottom',r.data?.msg,3000)
    }
  }
}
