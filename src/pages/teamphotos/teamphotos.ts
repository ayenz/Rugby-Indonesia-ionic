import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Camera } from 'ionic-native';


@Component({
  selector: 'page-teamphotos',
  templateUrl: 'teamphotos.html'
})
export class Teamphotos {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  jsonItems: any;
  public base64Image:string;

  constructor(public alerCtrl: AlertController, private http:Http){
    this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/photos/list.json')
    .subscribe(res => this.jsonItems = res.json());
    console.log(this.jsonItems);
  }

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
            //  console.log('Agree clicked
            Camera.getPicture({
              destinationType: Camera.DestinationType.DATA_URL,
              targetWidth: 1000,
              targetHeight: 1000
            }).then((imageData) => {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64:
              this.base64Image = 'data:image/jpeg;base64,' + imageData;
            }, (err) => {
              console.log(err);
            });
          }
        }
      ]
    });
    confirm.present()
  }
}
