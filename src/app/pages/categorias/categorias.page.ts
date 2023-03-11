import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CategoriasFormularioPage } from '../categorias-formulario/categorias-formulario.page';

import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';

  constructor( private _modalCtrl:ModalController, private alertController: AlertController ) { }

  ngOnInit() {
  }


  async crearNuevaCategoria() {
    const modal = await this._modalCtrl.create({
      component: CategoriasFormularioPage
    });
    await modal.present();
  }

  async editCategoria(txt:string) {
    const modal = await this._modalCtrl.create({
      component: CategoriasFormularioPage,
      componentProps:{
        value: txt
      }
    });
    await modal.present();
  }

  async eliminaCategoria(txt:string) {
    const alert = await this.alertController.create({
      header: '¿Borrar categoría ' + txt + '?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  

}
