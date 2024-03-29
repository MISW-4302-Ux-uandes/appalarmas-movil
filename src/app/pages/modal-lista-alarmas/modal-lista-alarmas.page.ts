import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Alarma } from 'src/app/interfaces/interfaces';
import { AlertasService } from 'src/app/services/alertas.service';
import { DataService } from 'src/app/services/data.service';
import { ModalAlarmaParaPage } from '../modal-alarma-para/modal-alarma-para.page';

@Component({
  selector: 'app-modal-lista-alarmas',
  templateUrl: './modal-lista-alarmas.page.html',
  styleUrls: ['./modal-lista-alarmas.page.scss'],
})
export class ModalListaAlarmasPage implements OnInit {

  dataAlarmas:Alarma[] =   [{
    titulo: "Trabajo",
    categoria:"Alarma Sencilla",
    fecha:"13:00 2023-03-22",
    activa: true
  },
  {
    titulo: "Reunion Sprint",
    categoria:"Recordatorio ràpido",
    fecha:"15:15 2023-03-24",
    activa: true
  },
  {
    titulo: "Cita Daniel",
    categoria:"Cita mèdica",
    fecha:"08:20 2023-03-22",
    activa: true
  },
  {
    titulo: "Cita mamá",
    categoria:"Cita médica",
    fecha:"15:15 2023-03-24",
    activa: false
  },
]
  dataFiltered:Alarma[] = [];
  //data: Observable<Alarma[]>;
  constructor(private _modalCtrl: ModalController, private _alertasService:AlertasService) {
    //this.data = this._dataService.getDataAlarmas()
  }

  ngOnInit() {

    //console.log(this.data)
    this.filterData('activas')
  }

  cerrarModal(){
    this._modalCtrl.dismiss();
  }

  segmentChanged(event:any){
    const segment = event.detail.value;

    this.filterData(segment);
  }

  filterData(filter:string){
    if(filter === 'inactivas'){
      this.dataFiltered = this.dataAlarmas.filter(a=> a.activa == false)
    }else{
      this.dataFiltered = this.dataAlarmas.filter(a=> a.activa == true)

    }
  }

  async mostrarModalAlarmaPara(){
    const modal = await this._modalCtrl.create({
      component: ModalAlarmaParaPage
    });
    await modal.present();
    const r = await modal.onDidDismiss().then()

    if(r.data){
      this._alertasService.presentToast('bottom',r.data?.msg,3000)
    }
  }

}
