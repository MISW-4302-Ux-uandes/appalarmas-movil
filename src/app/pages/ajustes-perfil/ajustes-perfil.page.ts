import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ajustes-perfil',
  templateUrl: './ajustes-perfil.page.html',
  styleUrls: ['./ajustes-perfil.page.scss'],
})
export class AjustesPerfilPage implements OnInit {

  constructor(private _modalCtrl:ModalController, private _router:Router) { }

  ngOnInit() {
  }

  cerrarModal() {
    this._modalCtrl.dismiss()
  }

  login(){
    this._modalCtrl.dismiss();
    this._router.navigateByUrl("login");

  }

}
