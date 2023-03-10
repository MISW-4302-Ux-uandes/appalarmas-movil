import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
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
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
