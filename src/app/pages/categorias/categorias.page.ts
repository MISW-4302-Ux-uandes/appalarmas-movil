import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CategoriasFormularioPage } from '../categorias-formulario/categorias-formulario.page';

import { AlertasService } from 'src/app/services/alertas.service';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  handlerMessage = '';

  constructor( private _modalCtrl:ModalController,
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

  eliminarCategoria(txt:string){
    const header = '¿Borrar categoría ' + txt + '?';
    const confimation = 'Categoría eliminada';
    this._alertaCtrl.alertConfirmation(header,confimation)
  }

}
