import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GruposFormularioPage } from '../grupos-formulario/grupos-formulario.page';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.page.html',
  styleUrls: ['./grupos.page.scss'],
})
export class GruposPage implements OnInit {

  constructor(private _modalCtrl:ModalController) { }

  ngOnInit() {
  }

  async crearNuevoGrupo() {
    const modal = await this._modalCtrl.create({
      component: GruposFormularioPage
    });
    await modal.present();
  }

}
