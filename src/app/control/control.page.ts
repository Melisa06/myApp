import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-control',
  templateUrl: './control.page.html',
  styleUrls: ['./control.page.scss'],
})
export class ControlPage implements OnInit {
  character;
  
  constructor( public navCltr:NavController) {
  }

  ngOnInit() {
  }

prueba(){
  this.navCltr.navigateForward('/imagen');
}

medios(){
  this.navCltr.navigateForward('/prueba');
}

entrada(){
  this.navCltr.navigateForward('/entrada');
}
galeria(){
  this.navCltr.navigateForward('/galeria');
}

}
