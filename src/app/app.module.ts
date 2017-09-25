import { SocialSharing } from '@ionic-native/social-sharing';
import { OneSignal } from '@ionic-native/onesignal';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {GoogleCardLayout2} from '../components/list-view/google-card/layout-2/google-card-layout-2';

import {Toast} from "@ionic-native/toast";
import {BookingPage} from "../pages/booking/booking";
import {AboutPage} from "../pages/about/about";
import {IntroPage} from "../pages/intro/intro";
import { SocialPage } from '../pages/social/social';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GoogleCardLayout2,
    BookingPage,
    AboutPage,
    IntroPage,
    SocialPage,
    SocialPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GoogleCardLayout2,
    BookingPage,
    IntroPage,
    SocialPage
  ],
  providers: [
    StatusBar,
    Toast,
    SplashScreen,
    InAppBrowser,
    OneSignal,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
