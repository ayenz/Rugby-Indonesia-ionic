import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})

export class News {
  jsonItems: any;

  constructor(private http:Http) {
    this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/news/list.json')
            .subscribe(res => this.jsonItems = res.json());
  }
}
