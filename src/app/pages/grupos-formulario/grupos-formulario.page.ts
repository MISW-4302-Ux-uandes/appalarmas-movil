import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertasService } from 'src/app/services/alertas.service';

@Component({
  selector: 'app-grupos-formulario',
  templateUrl: './grupos-formulario.page.html',
  styleUrls: ['./grupos-formulario.page.scss'],
})
export class GruposFormularioPage implements OnInit {

  @Input() valor:string|null = null;
  @Input() tipo:string='';
  titulo:string = 'Nueva Categoría';

  constructor(private _modalCtrl:ModalController, private _fb: FormBuilder, private _alertasService:AlertasService, private _alertas: AlertasService) { }

  formNuevoGrupo: FormGroup = this._fb.group({
    titulo:[,[Validators.required]]
  })

  ngOnInit() {
    if(this.tipo == 'Editar'){
      this.formNuevoGrupo.controls['titulo'].setValue(this.valor);
      this.titulo = 'Editar Categoría';
    }
  }

  cerrarModal(){
    this._modalCtrl.dismiss()
  }

  crearNuevoGrupo() {
    if(this.formNuevoGrupo.invalid){
      this.formNuevoGrupo.markAllAsTouched()
      return
    }
    if(this.tipo == 'Editar'){
      this._alertas.presentToast('bottom', 'Categoría actualizada', 3000)
    }else{
      this._alertas.presentToast('bottom', 'Categoría creada', 3000)
    }
    this._modalCtrl.dismiss({});
  }

  campoValido(campo:string){
    return this.formNuevoGrupo.controls[campo].errors && this.formNuevoGrupo.controls[campo].touched
  }

}
