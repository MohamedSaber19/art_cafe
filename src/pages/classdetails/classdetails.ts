import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { CheckoutPage } from '../checkout/checkout';
import { InAppBrowser, InAppBrowserEvent } from '@ionic-native/in-app-browser';
import { ProfilePage } from '../profile/profile';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
/**
 * Generated class for the ClassdetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-classdetails',
  templateUrl: 'classdetails.html',
})
export class ClassdetailsPage {
  selectedDate: string;
  myToken: string;
  myClass: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public alertCtrl: AlertController,public storage:Storage,private iab: InAppBrowser,public spinnerDialog:SpinnerDialog) {
    
    this.myClass = navParams.get('data');
    console.log(this.myClass);
    this.selectedDate=this.myClass.single_time_date;
    this.storage.get('user_info').then((val) => {
      this.myToken=JSON.parse(val).token;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassdetailsPage');
  }
  bookClass(c){
    this.spinnerDialog.show('Loading...');
    this.http.get('http://artcafe.bit68.com/book_class/?token=' + this.myToken + '&class_id=' + this.myClass.id ).map(res => res.json()).subscribe(data => {
      this.spinnerDialog.hide();
      console.log(data);
      const browser = this.iab.create(data.iframe_url,'_blank');
      browser.on("exit").subscribe((event: InAppBrowserEvent) => { 
        console.log(event);
        this.navCtrl.setRoot(ProfilePage);
      })
    }, err => {
      this.spinnerDialog.hide();
      console.log(err);
      alert(err);
    });
  }
  
  // bookClass(c) {
  //   this.navCtrl.push(CheckoutPage, { data: c });
  // }

}
