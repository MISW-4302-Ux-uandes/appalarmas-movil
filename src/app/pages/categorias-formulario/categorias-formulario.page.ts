import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertasService } from 'src/app/services/alertas.service';


@Component({
  selector: 'app-categorias-formulario',
  templateUrl: './categorias-formulario.page.html',
  styleUrls: ['./categorias-formulario.page.scss'],
})
export class CategoriasFormularioPage implements OnInit {

  @Input() valor:string|null = null;
  @Input() tipo:string='';
  titulo:string = 'Nueva Categoría';

  constructor(private _modalCtrl:ModalController, private _fb: FormBuilder, private _alertasService:AlertasService, private _alertas: AlertasService) { }

  formNuevaCategoria: FormGroup = this._fb.group({
    titulo:[,[Validators.required]]
  })

  ngOnInit() {
    if(this.tipo == 'Editar'){
      this.formNuevaCategoria.controls['titulo'].setValue(this.valor);
      this.titulo = 'Editar Categoría';
    }
  }

  cerrarModal(){
    this._modalCtrl.dismiss()
  }

  crearNuevaCategoria() {
    if(this.formNuevaCategoria.invalid){
      this.formNuevaCategoria.markAllAsTouched()
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
    return this.formNuevaCategoria.controls[campo].errors && this.formNuevaCategoria.controls[campo].touched
  }

}
