import { Component } from '@angular/core';
import { Loading, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})

export class News {
  jsonItems: any;
  loading:Loading;
  constructor(private http:Http, public loadingCtrl:LoadingController) {
    this.loading = this.loadingCtrl.create({
      content: 'Please Wait...',
    });
    this.loading.present();

    this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/news/list.json')
    .subscribe(res => {this.jsonItems = res.json()
      if(this.jsonItems[0].img !=''){
        this.loading.dismissAll();
      }
    });
  }
}
