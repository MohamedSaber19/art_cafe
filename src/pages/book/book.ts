import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CheckoutclubPage } from '../checkoutclub/checkoutclub';
import { Storage } from '@ionic/storage';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { InAppBrowser, InAppBrowserEvent } from '@ionic-native/in-app-browser';
import { ProfilePage } from '../profile/profile';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
/**
 * Generated class for the BookPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {
  myToken: string;
  selectedDate: string;
  myBooking: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,public storage:Storage,private iab: InAppBrowser,public spinnerDialog:SpinnerDialog) {
    this.myBooking = this.navParams.get('dataa');
    console.log(this.myBooking);
    // this.selectedDate=this.myBooking.single_time_date;
    this.storage.get('user_info').then((val) => {
      this.myToken=JSON.parse(val).token;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookPage');
  }
  check(c) {
    this.spinnerDialog.show('Loading...');
    this.http.get('http://artcafe.bit68.com/book_club/?token=' + this.myToken + '&club_id=' + this.myBooking.id + '&selected_date=' + c.start_time).map(res => res.json()).subscribe(data => {
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
