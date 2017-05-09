import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Nav, NavParams, Loading, LoadingController } from 'ionic-angular';
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
  @ViewChild('myCanvas1') myCanvas1:ElementRef;
dataURL1:string = 'asd';
  base64Image:string;
  dataURL:string = 'asd';
  frame:string;
  loading:Loading;
  path:string;
  lastImage:string;
  json:any;
  htt:Http;
  navi:any;

  constructor(public http:Http, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl:LoadingController, public nav:Nav) {
    this.navi = nav;
    this.base64Image = navParams.get('base64');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditphotosPage');
  }

  uploadImage() {
    var url = 'https://ri-admin.azurewebsites.net/indonesianrugby/photos/upload.json';
    var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    var options = new RequestOptions({headers: headers});

    this.loading = this.loadingCtrl.create({
      content: 'Uploading...',
    });
    this.loading.present();
    this.ngAfterViewInit();
    this.dataURL = this.dataURL.replace(/^data:image\/[a-z]+;base64,/, "");
    var dat = 'userId=frameoo&photo=' + this.dataURL;
    this.http.post(url, dat, options).subscribe(res => {
      this.json = res.json()
      if(this.json.status="ok"){
        this.loading.dismissAll();
        this.moveTeam();
      }
    });
  }

  ngAfterViewInit() {
    let context: CanvasRenderingContext2D = this.myCanvas.nativeElement.getContext("2d");
    let context1: CanvasRenderingContext2D = this.myCanvas1.nativeElement.getContext("2d");
    let base_image = new Image();
    let base_image1 = new Image();
    let frameoo = new Image();
    frameoo.src = this.frame;
    base_image.onload = function(){
      context.drawImage(base_image, 0, 0, 327, 400);
      context.drawImage(frameoo, 0, 0, 327, 400);
    };

    base_image1.onload = function(){
      context1.drawImage(base_image, 0, 0, 400, 400);
      context1.drawImage(frameoo, 0, 0, 400, 400);
    };
    base_image.src = this.base64Image;
    base_image1.src = this.base64Image;
    this.dataURL = this.myCanvas1.nativeElement.toDataURL();
    this.dataURL1 = this.myCanvas.nativeElement.toDataURL();
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

  moveTeam(){
    this.navi.setRoot(Teamphotos);
  }
}
