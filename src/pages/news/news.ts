import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})

export class News {
  posts: any;
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public http: Http) {
  this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/news/list.json')
          .subscribe(res => this.posts = res.json());
  }
}
