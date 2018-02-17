import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CheckoutPage } from "../checkout/checkout";
import { Storage } from '@ionic/storage';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { InAppBrowser, InAppBrowserEvent } from '@ionic-native/in-app-browser';
import { ProfilePage } from '../profile/profile';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
/**
 * Generated class for the SessiondetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-sessiondetails',
  templateUrl: 'sessiondetails.html',
})
export class SessiondetailsPage {
  SpinnerDialog: any;
  myToken: any;
  selectedDate: any;
  mySession: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,public storage:Storage,private iab: InAppBrowser,public spinnerDialog:SpinnerDialog) {
    this.mySession=this.navParams.get('data');
    this.selectedDate=this.mySession.single_time_date;
    this.storage.get('user_info').then((val) => {
      this.myToken=JSON.parse(val).token;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SessiondetailsPage');
  }
confrimBooking(){
  this.spinnerDialog.show('Loading...');
  // this.navCtrl.push(CheckoutPage,{data:m});
  this.http.get('http://artcafe.bit68.com/book_club/?token=' + this.myToken + '&class_id=' + this.mySession.id + '&selected_date=' + this.selectedDate).map(res => res.json()).subscribe(data => {
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
}
