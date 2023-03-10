import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

interface tipoAlarma {
  titulo:string;
  redirectTo:string;
  descripcion:string;
}

@Component({
  selector: 'app-modal-tipo-alarma',
  templateUrl: './modal-tipo-alarma.page.html',
  styleUrls: ['./modal-tipo-alarma.page.scss'],
})
export class ModalTipoAlarmaPage implements OnInit {

  tiposDeAlarmas: tipoAlarma[]=[
    {
      titulo: 'Alarma sencilla',
      descripcion: 'Utilice esta alarma para actividades como despertarse, ir al colegio por sus hijos o recordar la realización de una actividad',
      redirectTo:'formAlarmaSencilla',

    },
    {
      titulo: 'Cita médica',
      descripcion: 'Utilice esta alarma para recordar una cita médica en la que podrá establecer la especialidad médica, el centro médico y otros datos relevantes.',
      redirectTo:'formCitaMedica',

    },
    {
      titulo: 'Toma medicamentos',
      descripcion: 'Utilice esta alarma para recordar la toma de un medicamento y su dosificación.Especialmente útil si debe tomar varios medicamentos',
      redirectTo:'formTomaMedicamentos',

    },
    {
      titulo: 'Recordatorio rápido',
      descripcion: 'Utilice esta alarma rápida para eventos esporádicos y no muy prolongados en el tiempo, como realizar una llamada, recordar una reunión urgente, etc.',
      redirectTo:'formRecordatorio',

    }
  ]
  constructor(private _modalCtrl:ModalController) { }

  ngOnInit() {
  }

  cerrarModal(){
    this._modalCtrl.dismiss();
  }

}
