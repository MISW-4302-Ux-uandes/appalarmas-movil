import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CategoriasFormularioPage } from '../categorias-formulario/categorias-formulario.page';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  constructor( private _modalCtrl:ModalController ) { }

  ngOnInit() {
  }


  async crearNuevaCategoria() {
    const modal = await this._modalCtrl.create({
      component: CategoriasFormularioPage
    });
    await modal.present();
  }

}
