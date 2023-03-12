import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/services/alertas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  iconPassword:string = 'eye-off-outline';
  inputType:string = 'password';

  constructor(private _fb:FormBuilder,
              private _router:Router,
              private _alertasService: AlertasService) { }

  ngOnInit() {
  }

  formLogin:FormGroup = this._fb.group({
    email:['invitado@uniandes.edu.co',[Validators.required]],
    password:['PaSsWordTest',[Validators.required]]
  });


  login(){

    if(this.formLogin.invalid){
      this.formLogin.markAllAsTouched()
      return
    }
    this._router.navigateByUrl('/main/tabs/alarmas')
    this._alertasService.presentToast('top','Bienveido a Appalarmas')
  }

  campoValido(campo:string){
    return this.formLogin.controls[campo].errors && this.formLogin.controls[campo].touched
  }

  mostrarClave(){
    this.iconPassword = this.iconPassword==='eye-off-outline'?'eye-outline':'eye-off-outline';
    this.inputType = this.inputType==='password'?'text':'password';
  }

}
