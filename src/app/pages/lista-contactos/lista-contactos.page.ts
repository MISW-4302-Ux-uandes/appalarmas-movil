import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertasService } from '../../services/alertas.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.page.html',
  styleUrls: ['./lista-contactos.page.scss'],
})
export class ListaContactosPage implements OnInit {

  constructor(private _modalCtrl:ModalController, private _alertas: AlertasService) { }

  ngOnInit() {
  }

  async cerrarModal() {
    this._modalCtrl.dismiss()
  }

  async agregarIntegrantes() {
    this._alertas.presentToast('bottom', 'Grupo actualizado: se agregaron/quitaron integrantes', 3000)
    this._modalCtrl.dismiss({});
  }

}
