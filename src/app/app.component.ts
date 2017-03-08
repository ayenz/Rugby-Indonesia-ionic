import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { News } from '../pages/news/news';
import { Fixtures } from '../pages/fixtures/fixtures';
import { Teamphotos } from '../pages/teamphotos/teamphotos';
import { Rugby101 } from '../pages/rugby101/rugby101';
import { Rugbyclubs } from '../pages/rugbyclubs/rugbyclubs';
import { Deeplinks } from 'ionic-native';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = News;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'News', component: News , icon: 'paper'},
      { title: 'Fixtures & Results', component: Fixtures, icon: 'clipboard' },
      { title: 'Teammate Photos', component: Teamphotos, icon: 'image' },
      { title: 'Rugby 101', component: Rugby101 , icon: 'football'},
      { title: 'Rugby Clubs', component: Rugbyclubs , icon: 'people'}
    ];

    Deeplinks.route({
    '/home' : News
    }).subscribe((match) => {
    console.log('Successfully matched route', match);
  }, (nomatch) => {
    console.error('Got a deeplink that didn\'t match', nomatch);
  });


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  home(){
    		this.nav.setRoot(News);

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
