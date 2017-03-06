import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { Http } from '@angular/http';
import { Camera, File, Transfer, FilePath } from 'ionic-native';

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

  public base64Image:string;

  constructor(public alerCtrl: AlertController, public http:Http, public toastCtrl:ToastController){
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
              destinationType: Camera.DestinationType.FILE_URI,
              sourceType: Camera.PictureSourceType.CAMERA,
              targetWidth: 800,
              targetHeight: 800,
              saveToPhotoAlbum: true
            }).then((imageData) => {
              // imageData is either a base64 encoded string or a file URI
              // If it's base64:
              this.base64Image = 'data:image/png;base64,' + imageData;
              this.lastImage = this.base64Image;
              this.uploadImage();
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
              			destinationType: Camera.DestinationType.FILE_URI,
              			sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
              targetWidth: 800,
              targetHeight: 800
            }).then((imageData) => {
              this.base64Image = 'data:image/png;base64,' + imageData;
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
    this.presentToast(this.path);
  }
}

presentToast(text) {
  let toast = this.toastCtrl.create({
    message: text,
    duration: 3000,
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

  uploadImage() {
  // Destination URL
  var url = "https://ri-admin.azurewebsites.net/indonesianrugby/photos/upload.json";
  // File for Upload
  this.path = 'asd';
  this.path = cordova.file.dataDirectory + this.base64Image;
  console.log(this.path);
  // File name only
  var filename = this.lastImage;

  var options = {
    fileKey: "file",
    fileName: filename,
    chunkedMode: false,
    mimeType: "multipart/form-data",
    params : {'fileName': filename}
  };
  const fileTransfer = new Transfer();

  // Use the FileTransfer to upload the image
  fileTransfer.upload(this.path, url, options).then(data => {
    this.presentToast('Image succesful uploaded.');
  }, err => {
    this.presentToast('Error while uploading file.');
  });
}
}
