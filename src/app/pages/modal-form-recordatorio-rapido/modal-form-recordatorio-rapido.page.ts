import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertasService } from 'src/app/services/alertas.service';

@Component({
  selector: 'app-modal-form-recordatorio-rapido',
  templateUrl: './modal-form-recordatorio-rapido.page.html',
  styleUrls: ['./modal-form-recordatorio-rapido.page.scss'],
})
export class ModalFormRecordatorioRapidoPage implements OnInit {

  tiempoTotal:number = 0;
  constructor(private _modalCtrl:ModalController,
              private _alertaService:AlertasService) { }

  ngOnInit() {
  }


  crearRecordatorioRapido(){
    if(this.tiempoTotal == 0){
      return
    }
    this._alertaService.showLoading('Configurando alarma...')
    this._modalCtrl.dismiss({
      ok:true,
      msg:`Recordatorio rápido sonará en ${this.tiempoTotal} min.`
    })
  }

  sumarTiempo(mins:number){
    this.tiempoTotal = this.tiempoTotal + mins;
  }

  restTiempo(){
    this.tiempoTotal = 0;
  }

  cancelar(){
    this._modalCtrl.dismiss();
  }

}
