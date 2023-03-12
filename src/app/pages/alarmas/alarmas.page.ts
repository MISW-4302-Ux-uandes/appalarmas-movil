import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertasService } from 'src/app/services/alertas.service';
import { CategoriasFormularioPage } from '../categorias-formulario/categorias-formulario.page';
import { GruposFormularioPage } from '../grupos-formulario/grupos-formulario.page';
import { ModalAlarmaParaPage } from '../modal-alarma-para/modal-alarma-para.page';
import { ModalAlarmasHoyPage } from '../modal-alarmas-hoy/modal-alarmas-hoy.page';
import { ModalListaAlarmasPage } from '../modal-lista-alarmas/modal-lista-alarmas.page';


@Component({
  selector: 'app-alarmas',
  templateUrl: './alarmas.page.html',
  styleUrls: ['./alarmas.page.scss'],
})
export class AlarmasPage implements OnInit {

  constructor(private _modalCtrl: ModalController,
              private _alertas: AlertasService,) { }

  ngOnInit() {
  }

  async mostrarModalAlarmaPara(){
    const modal = await this._modalCtrl.create({
      component: ModalAlarmaParaPage
    });
    await modal.present();
    const r = await modal.onDidDismiss()
    if(r.data){
      this._alertas.presentToast('bottom',r.data?.msg,3000)
    }
  }

  async verListaAlarmas(){
    const modalListaAlarmas = await this._modalCtrl.create({
      component: ModalListaAlarmasPage
    });
    await modalListaAlarmas.present();
  }

  async verAlarmasHoy(){
    const modalAlarmasHoy = await this._modalCtrl.create({
      component: ModalAlarmasHoyPage
    });
    await modalAlarmasHoy.present();
  }

  async modalNuevaCategoria(){
    const modalCrearCategoria = await this._modalCtrl.create({
      component: CategoriasFormularioPage
    });
    await modalCrearCategoria.present();
  }

  async modalNuevoGrupo(){
    const modalCrearGrupo = await this._modalCtrl.create({
      component: GruposFormularioPage
    });
    await modalCrearGrupo.present();
  }

}
