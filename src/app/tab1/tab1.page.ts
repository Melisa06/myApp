import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  constructor(private iap : InAppBrowser) { }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
/**
 * Metodo para abrir pagina web 
 */
openBlank(){
  this.iap.create('https://www.uteq.edu.mx/Alumno/Default.aspx?gI2Sr=73', '_blank', {
    location : 'no',
  });
}
}