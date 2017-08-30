import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Toast} from "@ionic-native/toast";
// import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls:['/style.css']

})
export class HomePage {
  params: any = {};
  constructor(public navCtrl: NavController, private toast: Toast) {
    this.params.data = {
      items: [
        {
          id: 1,
          title: 'Barbershop',
          titleHeader: 'DL BARBERSHOP',
          description: 'DL Pro Cuts is about a way of life. Schedule your next' +
          ' appointment with us and you will find true satisfaction with any of the variety of services we offer.',
          image: 'assets/images/background/barber.jpg',
          button: 'MAKE BOOKING'
        },
        {
          id: 2,
          title: 'The Dominican Blowdry Bar',
          titleHeader: 'DL BLOWDRY BAR SALON',
          description: 'A hair salon meeting the needs of current trends. Specialized in hair care and treatment.',
          image: 'assets/images/gallery/salon/hairstyle.jpg',
          button: 'EXPLORE'
        },
        {
          id: 3,
          title: 'Listen to Live Radio Now',
          titleHeader: 'DL RADIO',
          description: 'Experience a taste of great musical mix from our popular DJ while your stylist prepare you with the best look.',
          image: 'assets/images/background/music/dj-radio.jpg',
          button: 'EXPLORE'
        }
        ]
    }

    this.params.events = {
      'onItemClick': function(item: any) {
        if (window.location.hostname === "localhost") {
          console.log(item);
        } else {
          toast.show(item.title, '1000', 'bottom').subscribe(toast => { });
        }
      },
      'onExplore': function(item: any) {
        if (this.items.id ===  1) {
           console.log("DL barbershop");
        }
        if (this.items.id ===  2) {
          console.log("DL blowdry salon");
       }
       if (this.items.id ===  3) {
        console.log("DL radio");
     }
        toast.show("Explore", '1000', 'bottom').subscribe(toast => { });

      },
      'onShare': function(item: any) {
        if (window.location.hostname === "localhost") {
          console.log("Share");
        } else {
          toast.show("Share", '1000', 'bottom').subscribe(toast => { });
        }
      },
      'onLike': function(item: any) {
        if (window.location.hostname === "localhost") {
          console.log("onLike");
        } else {
          toast.show("onLike", '1000', 'bottom').subscribe(toast => { });
        }
      },
      'onFavorite': function(item: any) {
        if (window.location.hostname === "localhost") {
          console.log("onFavorite");
        } else {
          toast.show("onFavorite", '1000', 'bottom').subscribe(toast => { });
        }
      },
      'onFab': function(item: any) {
        if (window.location.hostname === "localhost") {
          console.log("Fab");
        } else {
          toast.show("Fab", '1000', 'bottom').subscribe(toast => { });
        }
      },
    }
  }
}
