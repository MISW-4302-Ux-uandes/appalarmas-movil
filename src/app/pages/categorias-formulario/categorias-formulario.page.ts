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
  
  @Input("value") value = '';

  constructor(private _modalCtrl:ModalController, private _fb: FormBuilder, private _alertasService:AlertasService, private _alertas: AlertasService) { }
 
  formNuevaCategoria: FormGroup = this._fb.group({
    titulo:[,[Validators.required]]
  })

  ngOnInit() {
    
  }

  cerrarModal(){
    this._modalCtrl.dismiss()
  }

  crearNuevaCategoria() {
    if(this.formNuevaCategoria.invalid){
      this.formNuevaCategoria.markAllAsTouched()
      return
    }

    this._alertas.presentToast('bottom', 'Categoría creada', 3000)
    this._modalCtrl.dismiss({
      ok:true,
      msg:'Categoría creada'
    });
  }

}
