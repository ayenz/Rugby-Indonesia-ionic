
import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-teamphotos',
  templateUrl: 'teamphotos.html'
})
export class Teamphotos {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public alerCtrl: AlertController) { }

  doConfirm() {
   let confirm = this.alerCtrl.create({
     title: 'Use this Camera?',
     message: 'Do you agree to use this Camera to take a teammate photos?',
     buttons: [
       {
         text: 'Disagree',
         handler: () => {
           console.log('Disagree clicked');
         }
       },
       {
         text: 'Agree',
         handler: () => {
           console.log('Agree clicked');
         }
       }
     ]
   });
   confirm.present()
 }


}
