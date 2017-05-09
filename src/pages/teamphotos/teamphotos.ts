import { Component } from '@angular/core';
import { AlertController, NavController, ToastController, Nav, Loading, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Camera} from 'ionic-native';
import { Editphotos } from '../editphotos/editphotos';

declare var cordova:any;
@Component({
  selector: 'page-teamphotos',
  templateUrl: 'teamphotos.html'
})
export class Teamphotos {
  jsonItems: any;
  lastImage: string = null;
  htt:any;
  base64Image:string;
  navi:any;
  loading:Loading;

  constructor(public alerCtrl: AlertController, public http:Http, public toastCtrl:ToastController, public navCtrl:NavController, public nav:Nav, public loadingCtrl:LoadingController) {
    this.loading = this.loadingCtrl.create({
      content: 'Please Wait...',
    });
    this.loading.present();
    this.navi = nav;
    this.htt = http;
    this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/photos/list.json')
    .subscribe(res => {
      this.jsonItems = res.json()
      if(this.jsonItems.status="ok"){
        this.loading.dismissAll();
      }
  });
}

openCamera() {
  let confirm = this.alerCtrl.create({
    title: 'Use this Camera?',
    message: 'Do you agree to use this Camera to take a photo?',
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
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 400,
            targetHeight: 400,
            saveToPhotoAlbum: true,
            correctOrientation:true
          }).then((imageData) => {
            this.base64Image = 'data:image/jpeg;base64,' + imageData;
            this.lastImage = this.base64Image;
            this.navCtrl.push(Editphotos, {base64: this.lastImage});
          }, (err) => {
            console.log(err);
          });
        }
      }
    ]
  });
  confirm.present()
}

useGallery() {
  let confirm = this.alerCtrl.create({
    title: 'Upload from gallery?',
    message: 'Do you agree to use gallery to upload your photo?',
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
          Camera.getPicture({
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            targetWidth: 400,
            targetHeight: 400
          }).then((imageData) => {
            this.base64Image = 'data:image/png;base64,' + imageData;
            this.lastImage = this.base64Image;
            this.navCtrl.push(Editphotos, {base64: this.lastImage});
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
