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
<<<<<<< HEAD
            .subscribe(res => this.posts = res.json());
=======
            .subscribe(res => this.jsonItems = res.json());
>>>>>>> 37f42aed26a799887e80780603cc04c6e51750d8
  }
}
