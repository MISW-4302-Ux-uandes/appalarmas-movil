import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AlertasService } from 'src/app/services/alertas.service';

@Component({
  selector: 'app-modal-form-toma-medicamentos',
  templateUrl: './modal-form-toma-medicamentos.page.html',
  styleUrls: ['./modal-form-toma-medicamentos.page.scss'],
})
export class ModalFormTomaMedicamentosPage implements OnInit {

  horaInicio:string = '';
  horaFin:string = '';
  today = new Date().toISOString();
  unidades: string[]=[
    'ml',
    'g',
    'ug/mcg',
    'ul',
    'ugotas',
    'oz',
    'cda',
  ]

  frecuencias:string[] = [
    '1 hora',
    '2 horas',
    '4 horas',
    '6 horas',
    '8 horas',
    '12 horas',
    '1 día',
  ]

  constructor(private _fb:FormBuilder,
              private _modalCtrl:ModalController,
              private _alertasService: AlertasService) { }

  ngOnInit() {

  }

  formTomaMedicamentos: FormGroup = this._fb.group({
    titulo:[,[Validators.required]],
    fechaInicio: [, [Validators.required]],
    horaInicio:[,[Validators.required]],
    fechaFin: [, [Validators.required]],
    horaFin:[,[Validators.required]],
    medicamento:[,[Validators.required]],
    dosificacion:[,Validators.required],
    unidades:[,Validators.required],
    notas: [],
    esFormulado:[]
  });

  crearAlarmaTomaMedicamentos(){

    if(this.formTomaMedicamentos.invalid){
        this.formTomaMedicamentos.markAllAsTouched()
        return
    }
    this._alertasService.showLoading('Configurando alarma...')
    this._modalCtrl.dismiss({
      ok:true,
      msg:'Alarma toma de medicamentos creada correctamente'
    });

  }

  campoValido(campo:string){
    return this.formTomaMedicamentos.controls[campo].errors && this.formTomaMedicamentos.controls[campo].touched
  }

  obtenerFecha(event:any,campo:string){
    this.formTomaMedicamentos.controls[campo].setValue(event.detail.value?.substring(0,10))
  }

  obtenerTiempo(event:any,campo:string){
    const valorHora = event.detail.value;
    this.formTomaMedicamentos.controls[campo].setValue(valorHora?.substring(11,16));
    if(campo == 'horaInicio'){
      this.horaInicio = valorHora
    }
    if(campo == 'horaFin'){
      this.horaFin = valorHora
    }
  }

  cancelar(){
    this._modalCtrl.dismiss();
  }

}
