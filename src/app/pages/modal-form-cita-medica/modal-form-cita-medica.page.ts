import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AlertasService } from 'src/app/services/alertas.service';

@Component({
  selector: 'app-modal-form-cita-medica',
  templateUrl: './modal-form-cita-medica.page.html',
  styleUrls: ['./modal-form-cita-medica.page.scss'],
})
export class ModalFormCitaMedicaPage implements OnInit {

  hora:string = '';
  today = new Date().toISOString();

  pacientes:string[]=[
    'David Castro G',
    'Nelson Barreto',
    'Pepito Perez'
  ]

  medicos:string[]=[
    'Agustin Correo',
    'Sergio Bennedeti',
    'Marcela Giraldo'
  ]

  centrosMedicos:string[]=[
    'Calle 26',
    'Portal Norte',
    'Restrepo'
  ]

  especialidades:string[]=[
    'Odontología',
    'Medicina General',
    'Psicología',
    'Urología',
    'Pediatria'
  ]
  constructor(private _fb:FormBuilder,
              private _modalCtrl:ModalController,
              private _alertasService:AlertasService) { }

  ngOnInit() {
  }

  formAlarmaCitaMedica:FormGroup = this._fb.group({
    titulo:[,[Validators.required]],
    fecha: [, [Validators.required]],
    hora:[,[Validators.required]],
    paciente:[,[Validators.required]],
    centroMedico:[],
    consultorio:[],
    medico:[],
    especialidad:[],
    notas:[],
    preparacionEspecial:[]
  });


  crearAlarmaCitaMedica(){

    if(this.formAlarmaCitaMedica.invalid){
      this.formAlarmaCitaMedica.markAllAsTouched()
      return
    }
    this._alertasService.showLoading('Configurando alarma...')
    this._modalCtrl.dismiss({
      ok:true,
      msg:'Alarma cita médica creada correctamente'
    });

  }

  campoValido(campo:string){
    return this.formAlarmaCitaMedica.controls[campo].errors && this.formAlarmaCitaMedica.controls[campo].touched
  }

  obtenerFecha(event:any){
    this.formAlarmaCitaMedica.controls['fecha'].setValue(event.detail.value?.substring(0,10))
  }

  obtenerTiempo(event:any){
    const valorHora = event.detail.value;
    this.formAlarmaCitaMedica.controls['hora'].setValue(valorHora?.substring(11,16))
    this.hora = valorHora
  }

  cancelar(){
    this._modalCtrl.dismiss();
  }

}
