import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalFormAlarmaSencillaPage } from 'src/app/pages/modal-form-alarma-sencilla/modal-form-alarma-sencilla.page';
import { ModalFormCitaMedicaPage } from 'src/app/pages/modal-form-cita-medica/modal-form-cita-medica.page';
import { ModalFormRecordatorioRapidoPage } from 'src/app/pages/modal-form-recordatorio-rapido/modal-form-recordatorio-rapido.page';
import { ModalFormTomaMedicamentosPage } from 'src/app/pages/modal-form-toma-medicamentos/modal-form-toma-medicamentos.page';
import { ModalTipoAlarmaPage } from 'src/app/pages/modal-tipo-alarma/modal-tipo-alarma.page';

@Component({
  selector: 'app-card-alarm-type',
  templateUrl: './card-alarm-type.component.html',
  styleUrls: ['./card-alarm-type.component.scss'],
})
export class CardAlarmTypeComponent  implements OnInit {

  @Input() titulo:string = '';
  @Input() redirectTo:string = '';
  @Input() descripcion:string = '';
  @Input() seccion:string = '';

  constructor(private _modalCtrl:ModalController) { }

  ngOnInit() {}

  async seleccionarTipoAlarma(redirectTo:string){

    switch(redirectTo){
      case 'tipoAlarma':
        const modalTipo = await this._modalCtrl.create({
          component: ModalTipoAlarmaPage
        });
        await modalTipo.present();
        break;
      case 'formAlarmaSencilla':
        const modalAlarmaSencilla = await this._modalCtrl.create({
          component: ModalFormAlarmaSencillaPage
        });
        await modalAlarmaSencilla.present();
        break;
      case 'formCitaMedica':
        const modalCitaMedica = await this._modalCtrl.create({
          component: ModalFormCitaMedicaPage
        });
        await modalCitaMedica.present();
        break;
      case 'formTomaMedicamentos':
        const modalTomaMedicamentos = await this._modalCtrl.create({
          component: ModalFormTomaMedicamentosPage
        });
        await modalTomaMedicamentos.present();
        break;
      case 'formRecordatorio':
        const modalRecordatorioRapido = await this._modalCtrl.create({
          component: ModalFormRecordatorioRapidoPage
        });
        await modalRecordatorioRapido.present();
        break;
      default:
        console.log('opción no valida!');
        break;
    }



  }

}
