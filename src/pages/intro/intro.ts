import { HomePage } from './../home/home';
import { NavController, Nav } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';

@Component(
    {
        templateUrl:'intro.html',
    
    }
)
export class IntroPage {
    constructor(private navCtrl: NavController) {}

    slides = [
        {
          title: "DL Pro Cuts Barbershop Salon",
          description: "<p><b>Dlprocuts</b>DL PRO CUT has a team of professional, experienced, and skilled barbers and stylists who are apart of your  community. We specialize in all hair types, provide a professional family-friendly atmosphere and our customers are # 1</p>",
          image: "assets/images/background/dl-procuts-barbershop.jpg",
        },
        {
          title: "DL Stylist ",
          description: "<p><b>Dlblowdry Bar</b> Our professional team of stylists specializes in all the lastest types of weaves, lace fronts wigs, finger waves, pony tails,  short hair styles, natural hair care, locs, braids, cornrows, jerry curls, relaxers, hair color and many more. Experience a  a celebrity finish when you leave!</p>",
          image: "assets/images/background/stylist.jpg",
        },
        {
          title: "DL Dominican Salon",
          description: "<p>DL Pro Cuts Dominican stylists specializes blow outs for all different hair types, treatments, relaxers, hair color, wash and set and many more. Our Stylists are trained to evaluate your hair and to educate you on how to strengthen, grow and nourish your looks.</p>",
          image: "assets/images/background/music/blowdry.jpg",
        }
      ];

      goToHomePage(){
        this.navCtrl.setRoot(HomePage);
      }
}
