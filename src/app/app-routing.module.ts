import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './index/index.module#IndexPageModule' },
  { path: 'index', loadChildren: './index/index.module#IndexPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'localizacion', loadChildren: './localizacion/localizacion.module#LocalizacionPageModule' },
  { path: 'conociendo', loadChildren: './conociendo/conociendo.module#ConociendoPageModule' },
  { path: 'imagen', loadChildren: './imagen/imagen.module#ImagenPageModule' },
  { path: 'control', loadChildren: './control/control.module#ControlPageModule' },
  { path: 'prueba', loadChildren: './prueba/prueba.module#PruebaPageModule' },
  { path: 'entrada', loadChildren: './entrada/entrada.module#EntradaPageModule' },
  { path: 'galeria', loadChildren: './galeria/galeria.module#GaleriaPageModule' }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
