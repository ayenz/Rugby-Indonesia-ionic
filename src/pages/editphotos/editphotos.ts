import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Nav, NavParams, ToastController, Loading, LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Teamphotos } from '../../pages/teamphotos/teamphotos';

/*
  Generated class for the Editphotos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var cordova:any;
@Component({
  selector: 'page-editphotos',
  templateUrl: 'editPhotos.html'
})
export class Editphotos {
  @ViewChild('myCanvas') myCanvas:ElementRef;
  base64Image:string;
  dataURL:string = 'asd';
  frame:string;
  loading:Loading;
  path:string;
  lastImage:string;
  json:any;
  htt:Http;
  navi:any;

  constructor(public http:Http, public navCtrl: NavController, public navParams: NavParams, public toastCtrl:ToastController, public loadingCtrl:LoadingController, public nav:Nav) {
    //this.htt=http;
    this.json = 'asd';
    this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/photos/list.json')
    .subscribe(res => this.json = res.json());
    this.presentToast(JSON.stringify(this.json));
    this.navi = nav;
    this.base64Image = navParams.get('base64');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditphotosPage');
  }

  uploadImage() {
    this.presentToast('upload');
  // Destination URL
  var url = 'https://ri-admin.azurewebsites.net/indonesianrugby/photos/upload.json';
  // File for Upload
  this.path = '';
  //this.path = cordova.file.dataDirectory + this.base64Image;
  console.log(this.path);

  //const fileTransfer = new Transfer();
  var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
  var options = new RequestOptions({ headers: headers});

  this.loading = this.loadingCtrl.create({
      content: 'Uploading...',
    });
    this.loading.present();
    this.ngAfterViewInit();
    this.dataURL = this.dataURL.replace(/^data:image\/[a-z]+;base64,/, "");
    var data = {
      userId: 'frameoo',
      photo: 'asd=='
    };
    var dat = 'userId=asd&photo=' + this.dataURL;

    this.http.post(url, dat, options).subscribe(res => this.json = res.json());
    console.log('asd' + JSON.stringify(this.json));
    //this.presentToast(this.json);
    // while(this.json=='asd'){
    // }
    this.loading.dismissAll();
    // this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/photos/list.json')
    // .subscribe(res => this.json = res.json());
    this.presentToast(JSON.stringify(this.json));
    //this.moveTeam();



  // // Use the FileTransfer to upload the image
  // fileTransfer.upload(this.base64Image, url, options, true).then(data => {
  //   this.loading.dismissAll()
  //   this.presentToast('Image succesful uploaded.');
  // }, err => {
  //   this.loading.dismissAll()
  //   this.presentToast("ERROR " + JSON.stringify(err));
  //
  // });


  }


  ngAfterViewInit() { // wait for the view to init before using the element
    let context: CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext("2d");
    // happy drawing from here on
    // context.fillStyle = 'blue';
    // context.fillRect(10, 10, 150, 150);
    let base_image = new Image();
    let frameoo = new Image();
    frameoo.src = this.frame;
    base_image.onload = function(){
      context.drawImage(base_image, 0, 0, 400, 400);
      context.drawImage(frameoo, 0, 0);
    };
    base_image.src = this.base64Image;
    this.dataURL = this.myCanvas.nativeElement.toDataURL();
    this.presentToast(JSON.stringify(this.json));
    //this.presentToast(this.base64Image);
  }

  selectFrame(frame:string){
    if(frame==='frame01'){
      this.frame = "assets/img/frame01.png";
      this.ngAfterViewInit();
    }
    else if(frame==='frame02'){
      this.frame = "assets/img/frame02.png";
      this.ngAfterViewInit();
    }
    else if(frame==='frame03'){
      this.frame = "assets/img/frame03.png";
      this.ngAfterViewInit();
    }
    else if(frame==='frame04'){
      this.frame = "assets/img/frame04.png";
      this.ngAfterViewInit();
    }
    else if(frame==='frame05'){
      this.frame = "assets/img/frame05.png";
      this.ngAfterViewInit();
    }
    else if(frame==='frame06'){
      this.frame = "assets/img/frame06.png";
      this.ngAfterViewInit();
    }
    else if(frame==='frame07'){
      this.frame = "assets/img/frame07.png";
      this.ngAfterViewInit();
    }
    else if(frame==='frame08'){
      this.frame = "assets/img/frame08.png";
      this.ngAfterViewInit();
    }
    else if(frame==='frame09'){
      this.frame = "assets/img/frame09.png";
      this.ngAfterViewInit();
    }
    else if(frame==='frame10'){
      this.frame = "assets/img/frame10.png";
      this.ngAfterViewInit();
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

  moveTeam(){
    this.navi.setRoot(Teamphotos);
  }

}
