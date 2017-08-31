import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
/**
 * Generated class for the BookingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-booking',
  template:''
})
export class BookingPage implements AfterViewInit {
@ViewChild('loadSite')
loadSite:ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) { 
  }

  loadBrowserUrl(){
    const options: InAppBrowserOptions = {
      zoom: 'no',
      location: 'yes',
      hardwareback: 'yes',
      toolbar: 'yes'
    }
    const browser = this.iab.create('http://dlprocuts.salonme.com/sheduler/manage/category/3/event/82','_self', options);
    browser.close();
  }
  ionViewWillEnter(){
     this. loadBrowserUrl();
  }
  ionViewDidLoad() {
    this. loadBrowserUrl();
    console.log('ionViewDidLoad BookingPage');
  }

  ngAfterViewInit() {

  }

}
