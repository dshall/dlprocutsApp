import { Component, AfterViewInit, ViewChild, } from '@angular/core';
import { NavController, Platform, Content, FabButton } from 'ionic-angular';
// import { Geolocation } from '@ionic-native/geolocation';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls:['/src/home/home.scss']

})

export class HomePage implements AfterViewInit {
  @ViewChild(Content)
  content: Content;
  @ViewChild(FabButton)
  fabButton: FabButton;
  items: any = {};
  constructor(public navCtrl: NavController, private iab: InAppBrowser, 
     public platform: Platform, private socialSharing: SocialSharing) {//, public loadingCtrl: LoadingController 
      this.items = [
        {
          id: 1,
          title: 'Barbershop',
          titleHeader: 'DL PROCUTS BARBERSHOP',
          description: 'DL PRO CUT has a team of professional, experienced, and skilled barbers. Schedule your next' +
          ' appointment with us.',
          image: 'assets/images/background/barber.jpg',
          button: 'MAKE BOOKING'
        },
        {
          id: 2,
          title: 'Salon',
          titleHeader: 'DL STYLIST',
          description: 'A hair salon meeting the needs of current trends. Specialized in hair care and treatment.',
          image: 'assets/images/background/blowdry-hair.jpg',
          button: 'EXPLORE'
        },
        {
          id: 3,
          title: 'Salon',
          titleHeader: 'DL DOMINICAN SALON',
          description: 'DL Pro Cuts Dominican stylists specializes blow outs for all different hair types, hair styles, hair care and much more.',
          image: 'assets/images/background/stylist.png',
          button: 'MAKE BOOKING'
        }
    ]

  }

      onEvent(item) {
        if(item.id == 1) {
          let site_url = 'http://dlprocuts.salonme.com/sheduler/manage/category/3/event/82';
           this. loadBrowserUrl(site_url);
        }
        if (item.id == 2) {
           let site_url = 'http://www.dlblowdrybar.com/';
           this. loadBrowserUrl(site_url);
         }
        if (item.id == 3) {
           let site_url = 'http://dlprocuts.salonme.com/sheduler/manage/category/3/event/82';
           this. loadBrowserUrl(site_url);
         }
      }

      loadBrowserUrl(url){
        const options: InAppBrowserOptions = {
          zoom: 'no',
          location: 'yes',
          hardwareback: 'yes',
          toolbar: 'yes',
          closebuttoncaption: 'DONE?'
        }
        this.platform.ready().then(()=>
      {
        this.iab.create(`${url}`,'_self', options);
        // browser.close();
      });
      }

      share() {
        if(this.platform.is('cordova')){
          this.socialSharing.share('Book Your Next Appointment with DLprocut Barbershop & Beauty Salon', 'DLprocut Barbershop & Beauty Salon', 'http://dlprocuts.com');          
        }
      }
      ngAfterViewInit() {
        this.content.ionScroll.subscribe((d) => {
            this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
        });
    }

}
