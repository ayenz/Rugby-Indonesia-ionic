import { Component } from '@angular/core';
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

  constructor(private http:Http) {
  this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/clubs/list.json')
          .subscribe(res => this.posts = res.json());
  }
}
