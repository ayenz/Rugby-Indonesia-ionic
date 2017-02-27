import { Component } from '@angular/core';
<<<<<<< HEAD
import { Http } from '@angular/http';
=======
import {News} from '../news/news';
>>>>>>> 37f42aed26a799887e80780603cc04c6e51750d8
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-rugbyclubs',
  templateUrl: 'rugbyclubs.html'
})

export class Rugbyclubs {
<<<<<<< HEAD
posts: any;
selectedItem: any;
icons: string[];
items: Array<{title: string, note: string, icon: string}>;
=======
  news=News;
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }
>>>>>>> 37f42aed26a799887e80780603cc04c6e51750d8

  constructor(private http:Http) {
  this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/clubs/list.json')
          .subscribe(res => this.posts = res.json());
  }
}
