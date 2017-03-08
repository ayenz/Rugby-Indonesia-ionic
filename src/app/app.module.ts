import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { News } from '../pages/news/news';
import { Fixtures } from '../pages/fixtures/fixtures';
import { Teamphotos } from '../pages/teamphotos/teamphotos';
import { Rugby101 } from '../pages/rugby101/rugby101';
import { Rugbyclubs } from '../pages/rugbyclubs/rugbyclubs';
import {Editphotos} from '../pages/editphotos/editphotos';

@NgModule({
  declarations: [
    MyApp,
    News,
    Fixtures,
    Teamphotos,
    Rugby101,
    Rugbyclubs,
    Editphotos
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    News,
    Fixtures,
    Teamphotos,
    Rugby101,
    Rugbyclubs,
    Editphotos
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
