import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { AjustesPerfilPage } from '../ajustes-perfil/ajustes-perfil.page';
import { AjustesSonidosVibracionPage } from '../ajustes-sonidos-vibracion/ajustes-sonidos-vibracion.page';
import { AjustesCalificaPage } from '../ajustes-califica/ajustes-califica.page';
import { AlertasService } from 'src/app/services/alertas.service';


@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  constructor( private _modalCtrl:ModalController,
               private _actionSheetCtrl:ActionSheetController,
               private _alertasService: AlertasService ) { }

  ngOnInit() {
  }

  async verPerfil() {
    const modal = await this._modalCtrl.create({
      component: AjustesPerfilPage
    });
    await modal.present();

  }

  async verSonidoVibracion() {
    const modal = await this._modalCtrl.create({
      component: AjustesSonidosVibracionPage
    });
    await modal.present();
  }

  async verTema() {
    const actionSheet = await this._actionSheetCtrl.create({
      header: 'Elegir tema',
      //subHeader: 'Elegir tema',
      buttons: [
        {
          text: 'Luz',
          data: {
            action: 'luz',
          },
        },
        {
          text: 'Oscuro',
          data: {
            action: 'oscuro',
          },
        },
        {
          text: 'Utilizar la configuración del dispositivo',
          data: {
            action: 'configuración del dispositivo',
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancelar',
          },
        },
      ],
    });

    await actionSheet.present();

    const {data} = await actionSheet.onDidDismiss();
    if(data.action !== 'cancelar'){
      this._alertasService.presentToast('bottom',`Tema ${data.action} establecido`)
    }

  }

  async verCalificacion() {
    const modal = await this._modalCtrl.create({
      component: AjustesCalificaPage
    });
    await modal.present();
  }

}
