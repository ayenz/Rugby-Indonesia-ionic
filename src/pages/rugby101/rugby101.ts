import { Component } from '@angular/core';
import { News } from '../news/news';
import { Deeplinks } from 'ionic-native';

@Component({
  selector: 'page-rugby101',
  templateUrl: 'rugby101.html'
})
export class Rugby101 {
  homePage = News;
  constructor() {

  }

}
