import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AjustesPerfilPage } from '../ajustes-perfil/ajustes-perfil.page';
import { AjustesSonidosVibracionPage } from '../ajustes-sonidos-vibracion/ajustes-sonidos-vibracion.page';
import { AjustesTemaPage } from '../ajustes-tema/ajustes-tema.page';
import { AjustesCalificaPage } from '../ajustes-califica/ajustes-califica.page';


@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  constructor( private _modalCtrl:ModalController ) { }

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
    const modal = await this._modalCtrl.create({
      component: AjustesTemaPage
    });
    await modal.present();
  }

  async verCalificacion() {
    const modal = await this._modalCtrl.create({
      component: AjustesCalificaPage
    });
    await modal.present();
  }

}
