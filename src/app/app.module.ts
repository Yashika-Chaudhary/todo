import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  ErrorHandler } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddPage } from '../pages/add/add';
import { DetailPage } from '../pages/detail/detail';
import { Data } from '../providers/data/data';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPage,
    DetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPage,
    DetailPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data,

  ]
})
export class AppModule {}
