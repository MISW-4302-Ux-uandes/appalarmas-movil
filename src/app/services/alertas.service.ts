import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(private _toastCtrl: ToastController,
              private _loadingCtrl:LoadingController,
              private _alertCtrl:AlertController) { }

  async presentToast(position: 'top' | 'middle' | 'bottom', msg:string, duration:number=2000) {
    const toast = await this._toastCtrl.create({
      message: msg,
      duration: duration,
      position: position
    });

    await toast.present();
  }

  async showLoading(msg:string,duration:number=1000) {
    const loading = await this._loadingCtrl.create({
      message: msg,
      duration: duration,
      spinner:'circles',
    });

    loading.present();

  }

  async alertConfirmation(texto:string,textoConfirmacion:string) {
    const alert = await this._alertCtrl.create({
      header: texto,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            //this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.presentToast('bottom',textoConfirmacion)
          },
        },
      ],
    });

    await alert.present();
  }
}
