import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ajustes-tema',
  templateUrl: './ajustes-tema.page.html',
  styleUrls: ['./ajustes-tema.page.scss'],
})
export class AjustesTemaPage implements OnInit {

  constructor(private _modalCtrl:ModalController, private alertController: AlertController) { }

  ngOnInit() {
  }

  cerrarModal() {
    this._modalCtrl.dismiss()
  }

  async luzAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Clic',
      message: 'Modo luz',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async oscuroAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Clic',
      message: 'Modo oscuro',
      buttons: ['OK'],
    });
    await alert.present();
  }
  async configAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Clic',
      message: 'Configuración sistema',
      buttons: ['OK'],
    });
    await alert.present();
  }

}
