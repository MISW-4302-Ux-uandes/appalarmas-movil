import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalTipoAlarmaPage } from '../modal-tipo-alarma/modal-tipo-alarma.page';

@Component({
  selector: 'app-lista-grupos-contactos',
  templateUrl: './lista-grupos-contactos.page.html',
  styleUrls: ['./lista-grupos-contactos.page.scss'],
})
export class ListaGruposContactosPage implements OnInit {

  segmento:string ='contactos'
  constructor(private _modalCtrl:ModalController) { }

  ngOnInit() {
  }

  cerrarModal(){
    this._modalCtrl.dismiss();
  }

  async agregarIntegrantes(){
    const modalTipo = await this._modalCtrl.create({
      component: ModalTipoAlarmaPage
    });
    await modalTipo.present();
    modalTipo.onDidDismiss().then(
      ({data})=>{
        if(data){this._modalCtrl.dismiss({ok:true,msg:data.msg})}
      })
  }

  segmentChanged(event:any){
    const segment = event.detail.value
    if(segment==='contactos'){
      this.segmento = 'contactos'
    }else{
      this.segmento = 'grupos'
    }
  }
}
