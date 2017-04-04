import { Component } from '@angular/core';
import { AlertController, NavController, ToastController, LoadingController, Loading, Nav } from 'ionic-angular';
import { Http } from '@angular/http';
import { Camera, File, Transfer, FilePath } from 'ionic-native';
import { Editphotos } from '../editphotos/editphotos';

declare var cordova:any;
@Component({
  selector: 'page-teamphotos',
  templateUrl: 'teamphotos.html'
})
export class Teamphotos {

  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  jsonItems: any;

  lastImage: string = null;
  loading: Loading;
  path:string = null;
  htt:any;
  public base64Image:string;
  json:any;
  navi:any;

  constructor(public alerCtrl: AlertController, public http:Http, public toastCtrl:ToastController, public loadingCtrl:LoadingController, public navCtrl:NavController, public nav:Nav){
    this.navi = nav;
    this.htt = http;
    this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/photos/list.json')
    .subscribe(res => this.jsonItems = res.json());
    console.log(this.jsonItems);
  }



  openCamera() {
  console.log(cordova.file);
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
              quality: 50,
              destinationType: Camera.DestinationType.DATA_URL,
              sourceType: Camera.PictureSourceType.CAMERA,
              encodingType: Camera.EncodingType.JPEG,
              targetWidth: 400,
              targetHeight: 400,
              saveToPhotoAlbum: true,
              correctOrientation:true
            }).then((imageData) => {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64:
              this.base64Image = 'data:image/jpeg;base64,' + imageData;
              this.lastImage = this.base64Image;
              this.navCtrl.push(Editphotos, {base64: this.lastImage});
              //this.moveEdit();
              //this.uploadImage();
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
      message: 'Do you agree to use gallery to upload your photos?',
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

  pathForImage(img) {
  if (img === null) {

  } else {
    this.path = 'asd';
    this.path = cordova.file.dataDirectory + img;
  }
}

presentToast(text) {
  let toast = this.toastCtrl.create({
    message: text,
    duration: 5000,
    position: 'top'
  });
  toast.present();
}


  copyFileToLocalDir(namePath, currentName, base64Image) {
  File.copyFile(namePath, currentName, cordova.file.dataDirectory, base64Image).then(success => {
    this.lastImage = base64Image;
  }, error => {
    this.presentToast('Error while storing file.');
  });
}


  moveEdit(){
    this.navi.setRoot(Editphotos);
  }
}
