import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  tabs = TabsPage;
  constructor(public navcltr : NavController) { }

  ngOnInit() {
  }
 /**
   * metodo para dar accesoa a la aplicación 
   */
  menu(){
    this.navcltr.navigateForward('/menu');
}//close function menu

}
