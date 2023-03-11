import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(private _toastCtrl: ToastController,
              private _loadingCtrl:LoadingController) { }

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
}
