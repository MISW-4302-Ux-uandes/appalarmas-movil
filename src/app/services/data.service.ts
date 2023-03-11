import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alarma } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient) { }

  /*getDataAlarmas(): Promise<Alarma[]>{
    return  new Promise(resolve =>{
      this._http.get<Alarma[]>('/assets/data/data-alarmas.json').subscribe({
        next: d =>{
          resolve(d)
        },
        error: e=>{
          resolve(e)
        }
      })
    })
  }*/

  getDataAlarmas():Observable<Alarma[]>{
    return this._http.get<Alarma[]>('/assets/data/data-alarmas.json');
  }
}
