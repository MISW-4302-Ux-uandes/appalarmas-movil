import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AlertasService } from 'src/app/services/alertas.service';

@Component({
  selector: 'app-modal-form-alarma-sencilla',
  templateUrl: './modal-form-alarma-sencilla.page.html',
  styleUrls: ['./modal-form-alarma-sencilla.page.scss'],
})
export class ModalFormAlarmaSencillaPage implements OnInit {

  hora:string = '';
  today = new Date().toISOString();
  constructor(private _fb: FormBuilder,
              private _modalCtrl:ModalController,
              private _alertasService:AlertasService) { }

  formAlarmaSencilla: FormGroup = this._fb.group({
    titulo:[,[Validators.required]],
    fecha: [, [Validators.required]],
    hora:[,[Validators.required]],
    frecuencia:[,[Validators.required]],
    tono:[,[Validators.required]],
    volSonido:[50,Validators.required],
    notas:[]
  })

  ngOnInit() {
  }

  crearAlarmaSencilla(){
    if(this.formAlarmaSencilla.invalid){
      this.formAlarmaSencilla.markAllAsTouched()
      return
    }
    this._alertasService.showLoading('Configurando alarma...')
    this._modalCtrl.dismiss({
      ok:true,
      msg:'Alarma sencilla creada correctamente'
    });

  }

  campoValido(campo:string){
    return this.formAlarmaSencilla.controls[campo].errors && this.formAlarmaSencilla.controls[campo].touched
  }

  cancelar(){
    this._modalCtrl.dismiss();
  }

  obtenerFecha(event:any){
    this.formAlarmaSencilla.controls['fecha'].setValue(event.detail.value.substring(0,10))
  }

  obtenerTiempo(event:any){
    const valorHora = event.detail.value;
    this.formAlarmaSencilla.controls['hora'].setValue(valorHora.substring(11,16))
    this.hora = valorHora
  }

}
