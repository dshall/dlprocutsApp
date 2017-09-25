import { IntroPage } from './../pages/intro/intro';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {BookingPage} from "../pages/booking/booking";
import { OneSignal } from '@ionic-native/onesignal';

// import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = IntroPage;

  pages: Array<any>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, 
  public oneSignal: OneSignal) {
    this.initializeApp();
    if (this.platform.is('cordova')) {
      this.oneSignal.startInit('ffa2dd6c-2390-4b94-be10-0795436ec24c','852367622119');

              // OneSignal Code start:
    // Enable to debug issues:
    // window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

    var notificationOpenedCallback = function(jsonData) {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    };

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe(() => {
      // do something when notification is received
      alert(notificationOpenedCallback);
     });
     
     this.oneSignal.handleNotificationOpened().subscribe(() => {
       // do something when a notification is opened
     });
     
     this.oneSignal.endInit();
    } else {
      console.log("Cannot run one signal in browser");
      // Cordova not accessible, add mock data if necessary
    }

    // used for an example of ngFor and navigation
    this.pages = [
      {"title" : "Home", "theme"  : "listViews",  "icon" : " icon-star-circle", "listView" : true, component: HomePage},
      {"title" : "Book Now", "theme"  : "listViews",  "icon" : "icon-calendar-check", "listView" : true, component: BookingPage},
      // {"title" : "Shop", "theme"  : "listViews",  "icon" : " icon-cart", "listView" : false, component: ShopPage},
    ];



  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
