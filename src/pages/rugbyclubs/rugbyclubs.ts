import { Component } from '@angular/core';
import { Loading, LoadingController } from 'ionic-angular';
import {News} from '../news/news';
import {Http } from '@angular/http';

@Component({
  selector: 'page-rugbyclubs',
  templateUrl: 'rugbyclubs.html'
})

export class Rugbyclubs {
  posts :any;
  news=News;
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  loading:Loading;

  constructor(private http:Http, public loadingCtrl:LoadingController) {
    this.loading = this.loadingCtrl.create({
      content: 'Please Wait...',
    });
    this.loading.present();
    this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/clubs/list.json')
    .subscribe(res => {this.posts = res.json()
      if(this.posts[0].img!=''){
        this.loading.dismissAll();
      }
    });
  }
}
