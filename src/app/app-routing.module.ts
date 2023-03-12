import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tipo-alarma',
    loadChildren: () => import('./pages/modal-tipo-alarma/modal-tipo-alarma.module').then( m => m.ModalTipoAlarmaPageModule)
  },
  {
    path: 'modal-alarma-para',
    loadChildren: () => import('./pages/modal-alarma-para/modal-alarma-para.module').then( m => m.ModalAlarmaParaPageModule)
  },
  {
    path: 'modal-form-alarma-sencilla',
    loadChildren: () => import('./pages/modal-form-alarma-sencilla/modal-form-alarma-sencilla.module').then( m => m.ModalFormAlarmaSencillaPageModule)
  },
  {
    path: 'modal-form-cita-medica',
    loadChildren: () => import('./pages/modal-form-cita-medica/modal-form-cita-medica.module').then( m => m.ModalFormCitaMedicaPageModule)
  },
  {
    path: 'modal-form-toma-medicamentos',
    loadChildren: () => import('./pages/modal-form-toma-medicamentos/modal-form-toma-medicamentos.module').then( m => m.ModalFormTomaMedicamentosPageModule)
  },
  {
    path: 'modal-form-recordatorio-rapido',
    loadChildren: () => import('./pages/modal-form-recordatorio-rapido/modal-form-recordatorio-rapido.module').then( m => m.ModalFormRecordatorioRapidoPageModule)
  },
  {
    path: 'ajustes-perfil',
    loadChildren: () => import('./pages/ajustes-perfil/ajustes-perfil.module').then( m => m.AjustesPerfilPageModule)
  },
  {
    path: 'ajustes-sonidos-vibracion',
    loadChildren: () => import('./pages/ajustes-sonidos-vibracion/ajustes-sonidos-vibracion.module').then( m => m.AjustesSonidosVibracionPageModule)
  },
  {
    path: 'ajustes-tema',
    loadChildren: () => import('./pages/ajustes-tema/ajustes-tema.module').then( m => m.AjustesTemaPageModule)
  },
  {
    path: 'ajustes-califica',
    loadChildren: () => import('./pages/ajustes-califica/ajustes-califica.module').then( m => m.AjustesCalificaPageModule)
  },
  {
    path: 'categorias-formulario',
    loadChildren: () => import('./pages/categorias-formulario/categorias-formulario.module').then( m => m.CategoriasFormularioPageModule)
  },
  {
    path: 'modal-lista-alarmas',
    loadChildren: () => import('./pages/modal-lista-alarmas/modal-lista-alarmas.module').then( m => m.ModalListaAlarmasPageModule)
  },
  {
    path: 'grupos-formulario',
    loadChildren: () => import('./pages/grupos-formulario/grupos-formulario.module').then( m => m.GruposFormularioPageModule)
  },  {
    path: 'lista-contactos',
    loadChildren: () => import('./pages/lista-contactos/lista-contactos.module').then( m => m.ListaContactosPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
