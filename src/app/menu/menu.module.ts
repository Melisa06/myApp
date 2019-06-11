import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children : [
      {
        path :'reglas', 
        children :[
          {
            path:'',
            loadChildren :'../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path :'tab2',
        children :[
          {
            path :'',
            loadChildren : '../localizacion/localizacion.module#LocalizacionPageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path :'conociendo', 
        children:[
          {
            path :'', 
            loadChildren : '../conociendo/conociendo.module#ConociendoPageModule'
          }
        ]
      }, 
      {
        path :'imagen', 
        children :[
          {
            path :'', 
            loadChildren: '../control/control.module#ControlPageModule'
          }
        ]
      }
      
    ]
    }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
