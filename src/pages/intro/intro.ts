import { HomePage } from './../home/home';
import { NavController, Nav } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';

@Component(
    {
        templateUrl:'intro.html',
    
    }
)
export class IntroPage {
    // @ViewChild(Nav) navCtrl: Nav;
    constructor(private navCtrl: NavController) {}

    slides = [
        {
          title: "Welcome to DLprocuts Barbershop &amp; Salon!",
          description: "<p><b>Dlprocuts</b> keeps you in touch with style and grace. Our wellness professionals have years of well rounded experience and focused on precise details to achieve an authentic look.</p>",
          image: "assets/images/background/dl-procuts-barbershop.jpg",
        },
        {
          title: "Dl Dominican Blowdry Bar",
          description: "<p><b>Dlblowdry Bar</b> is a dominican hair salon that speciaized in styling and hair care for all hair types. Experience a celebrity finish when you leave.</p>",
          image: "assets/images/gallery/salon/hairstyle.jpg",
        },
        {
          title: "Listen To Live Stream Music",
          description: "<p>We keep you entertained with the music You love</p>",
          image: "assets/images/background/music/dj-radio.jpg",
        }
      ];

      goToHomePage(){
        this.navCtrl.setRoot(HomePage);
      }
}
