import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-categorias-formulario',
  templateUrl: './categorias-formulario.page.html',
  styleUrls: ['./categorias-formulario.page.scss'],
})
export class CategoriasFormularioPage implements OnInit {

  constructor(private _modalCtrl:ModalController, private _fb: FormBuilder) { }
 
  formNuevaCategoria: FormGroup = this._fb.group({
    titulo:[,[Validators.required]]
  })

  ngOnInit() {
  }

  cerrarModal(){
    this._modalCtrl.dismiss()
  }

  crearNuevaCategoria() {
    return
  }

}
