import { Component } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

declare var cordova:any;
@Component({
  selector: 'page-fixtures',
  templateUrl: 'fixtures.html'
})
export class Fixtures {
  posts: any[];
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public http: Http) {
    this.http.get('https://ri-admin.azurewebsites.net/indonesianrugby/fixtures/list.json/').map((res:Response) => res.json()).subscribe((data) => {
		console.log(data);
		this.posts = data;
	})
	//console.log(post[1]);
  }

  GoToLink(url){
  cordova.InAppBrowser.open(url, '_blank', "location=true");
  cordova.InAppBrowser.show();
  }
}
