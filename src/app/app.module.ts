import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginLayout1 }  from "../components/login/layout-1/login-layout-1";
import {RegisterLayout1} from '../components/register/layout-1/register-layout-1';
import {GoogleCardLayout2} from '../components/list-view/google-card/layout-2/google-card-layout-2';

import {Toast} from "@ionic-native/toast";
import {BookingPage} from "../pages/booking/booking";
import {ContactPage} from "../pages/contact/contact";
import {AboutPage} from "../pages/about/about";
import {IntroPage} from "../pages/intro/intro";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginLayout1,
    GoogleCardLayout2,
    BookingPage,
    ContactPage,
    AboutPage,
    IntroPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginLayout1,
    GoogleCardLayout2,
    BookingPage,
    ContactPage,
    AboutPage,
    IntroPage
  ],
  providers: [
    StatusBar,
    Toast,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
