import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

interface tipoAlarma {
  titulo:string;
  redirectTo:string;
  descripcion:string;

}

@Component({
  selector: 'app-modal-alarma-para',
  templateUrl: './modal-alarma-para.page.html',
  styleUrls: ['./modal-alarma-para.page.scss'],
})
export class ModalAlarmaParaPage implements OnInit {

  tiposDeAlarmas: tipoAlarma[]=[
    {
      titulo: 'Yo mismo',
      descripcion: 'Use esta opción para asuntos personales o cualquier acción que deba realizar de manera individual',
      redirectTo:'tipoAlarma',

    },
    {
      titulo: 'Contacto o grupo',
      descripcion: 'Use esta opción para actividades grupales como eventos, reuniones, fiestas o cualquier otro tipo de evento, bien con una persona o grupo de amigos',
      redirectTo:'participantes',

    }
  ]
  constructor(private _modalCtrl:ModalController) { }

  ngOnInit() {
  }

  cerrarModal(){
    this._modalCtrl.dismiss();
  }

}
