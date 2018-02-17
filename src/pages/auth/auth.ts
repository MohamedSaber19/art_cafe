import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from "../login/login";
import { SignupPage } from "../signup/signup";
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
/**
 * Generated class for the AuthPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
export class AuthPage {
//   options : InAppBrowserOptions = {
//     location : 'yes',//Or 'no' 
//     hidden : 'no', //Or  'yes'
//     clearcache : 'yes',
//     clearsessioncache : 'yes',
//     zoom : 'yes',//Android only ,shows browser zoom controls 
//     hardwareback : 'yes',
//     mediaPlaybackRequiresUserAction : 'no',
//     shouldPauseOnSuspend : 'no', //Android only 
//     closebuttoncaption : 'Close', //iOS only
//     disallowoverscroll : 'no', //iOS only 
//     toolbar : 'yes', //iOS only 
//     enableViewportScale : 'no', //iOS only 
//     allowInlineMediaPlayback : 'no',//iOS only 
//     presentationstyle : 'pagesheet',//iOS only 
//     fullscreen : 'yes',//Windows only    
// };
  constructor(public navCtrl: NavController,public storage:Storage, public navParams: NavParams,private iab: InAppBrowser) {
   
    this.storage.get('user_info').then((val) => {
      if (val) {
        this.navCtrl.setRoot(TabsPage);
      }
    })
  }
  
        
  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthPage');
  }
doLog(){
  this.navCtrl.push(LoginPage);
}
doReg(){
  this.navCtrl.push(SignupPage);
}
// openInBrowser(){
//   this.browser.show();
// }
}
