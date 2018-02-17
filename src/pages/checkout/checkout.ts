import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { NewcardPage } from '../newcard/newcard';
/**
 * Generated class for the CheckoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  selectedDate: string;
  myToken: Promise<void>;
  myBooking: any;
  checkedIdx=0;
  
    options = [
      'Cash On Delivery',
      'Credit Card 1',
      'Credit Card 2',
      'Credit Card 3',
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public storage:Storage,public alertCtrl:AlertController) {
    this.myBooking=this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
    this.storage.get('user_info').then((val)=>{
      this.myToken=JSON.parse(val).token;
    })
  }
  book(c){
    // this.http.get('http://artcafe.bit68.com/book_class/?token=' + this.myToken + '&class_id=' + c.id + '&selected_date=' + this.selectedDate).map(res => res.json()).subscribe(data => {
    //   console.log(data);
    //   let alert = this.alertCtrl.create({
    //     title: 'Booking Event',
    //     subTitle: 'Your request has been submitted , the booking is in process just wait for a confirmation Email within 2 days!',
    //     buttons: ['OK']
    //   });
    //   alert.present();
    // }, err => {
    //   console.log(err);
    // });

    let alert = this.alertCtrl.create({
      title: 'Booking Event',
      subTitle: 'Your request has been submitted , the booking is in process just wait for a confirmation Email within 2 days!',
      buttons: ['OK']
    });
    alert.present();
  }
  newCard(){
    this.navCtrl.push(NewcardPage);
  }
}
