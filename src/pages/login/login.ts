import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  page: any;
  params: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: Toast) {
    this.page = navParams.get('page');

    this.params.data = {
      "username"        : "Username",
      "password"        : "Password",
      "register"        : "Register",
      "login"           : "Login",
      "skip"            : "Skip",
      "logo"            : "assets/images/logo/dlprcutsIcon_300x300.png"
    }

    this.params.events = {
      onLogin: function(params) {
        if (window.location.hostname === "localhost") {
          console.log('onLogin:' + JSON.stringify(params));
        } else {
          toast.show('onLogin:' + JSON.stringify(params), '1000', 'bottom').subscribe(toast => { });
        }
      },
      onRegister: function(params) {
        if (window.location.hostname === "localhost") {
          console.log('onRegister:' + JSON.stringify(params));
        } else {
          toast.show('onRegister:' + JSON.stringify(params), '1000', 'bottom').subscribe(toast => { });
        }
      },
      onSkip: function(params) {
        if (window.location.hostname === "localhost") {
          console.log('onSkip:' + JSON.stringify(params));
        } else {
          toast.show('onSkip:' + JSON.stringify(params), '1000', 'bottom').subscribe(toast => { });
        }
      },
      onFacebook: function(params) {
        if (window.location.hostname === "localhost") {
          console.log('onFacebook:' + JSON.stringify(params));
        } else {
          toast.show('onFacebook:' + JSON.stringify(params), '1000', 'bottom').subscribe(toast => { });
        }
      },
      onTwitter: function(params) {
        if (window.location.hostname === "localhost") {
          console.log('onTwitter:' + JSON.stringify(params));
        } else {
          toast.show('onTwitter:' + JSON.stringify(params), '1000', 'bottom').subscribe(toast => { });
        }
      },
      onGoogle: function(params) {
        if (window.location.hostname === "localhost") {
          console.log('onGoogle:' + JSON.stringify(params));
        } else {
          toast.show('onGoogle:' + JSON.stringify(params), '1000', 'bottom').subscribe(toast => { });
        }
      },
      onPinterest: function(params) {
        if (window.location.hostname === "localhost") {
          console.log('onPinterest:' + JSON.stringify(params));
        } else {
          toast.show('onPinterest:' + JSON.stringify(params), '1000', 'bottom').subscribe(toast => { });
        }
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
