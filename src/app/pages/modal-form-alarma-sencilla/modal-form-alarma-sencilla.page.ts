import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-form-alarma-sencilla',
  templateUrl: './modal-form-alarma-sencilla.page.html',
  styleUrls: ['./modal-form-alarma-sencilla.page.scss'],
})
export class ModalFormAlarmaSencillaPage implements OnInit {


  constructor(private _fb: FormBuilder, private _modalCtrl:ModalController) { }

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
    console.log('Submit: ',this.formAlarmaSencilla.value)
    if(this.formAlarmaSencilla.invalid){
      this.formAlarmaSencilla.markAllAsTouched()
      return
    }
  }

  campoValido(campo:string){
    return this.formAlarmaSencilla.controls[campo].errors && this.formAlarmaSencilla.controls[campo].touched
  }

  cancelar(){
    this._modalCtrl.dismiss();
  }

  mostrarCalendario(){
    console.log('Show modal')
  }

  mostrarTiempo(){
    console.log('Show hora')
  }

}
