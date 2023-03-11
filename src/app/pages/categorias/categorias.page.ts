import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CategoriasFormularioPage } from '../categorias-formulario/categorias-formulario.page';

import { AlertController } from '@ionic/angular';
import { AlertasService } from 'src/app/services/alertas.service';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  handlerMessage = '';

  constructor( private _modalCtrl:ModalController,
              private alertController: AlertController,
              private _alertaCtrl: AlertasService ) { }

  ngOnInit() {

  }

  async crearNuevaCategoria() {
    const modal = await this._modalCtrl.create({
      component: CategoriasFormularioPage,
      componentProps:{
        tipo:'Crear'
      }
    });
    await modal.present();
  }

  async editCategoria(txt:string) {
    const modal = await this._modalCtrl.create({
      component: CategoriasFormularioPage,
      componentProps:{
        tipo:'Editar',
        valor: txt
      }
    });
    await modal.present();
  }

  async eliminaCategoria(txt:string) {
    const alert = await this.alertController.create({
      header: '¿Borrar categoría ' + txt + '?',
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
            this._alertaCtrl.presentToast('bottom','Categoría eliminada')
          },
        },
      ],
    });

    await alert.present();
  }



}
