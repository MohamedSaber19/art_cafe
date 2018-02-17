import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ClassdetailsPage } from "../classdetails/classdetails";
import { SessiondetailsPage } from "../sessiondetails/sessiondetails";
import { BookPage } from "../book/book";
import { SubcatPage } from "../subcat/subcat";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
/**
 * Generated class for the EventsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  dropins: { name: string; img: string; time: string; }[];


  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public spinnerDialog:SpinnerDialog) {
    // this.dropins = [
    //   { name: 'Birthdays', img: 'img/sess3.jpg', time: '10 Aug , 02:00 PM' },
    //   { name: 'Marriage', img: 'img/sess2.jpg', time: '10 Aug , 06:00 PM' },
    //   { name: 'Engagements', img: 'img/sess1.jpg', time: '10 Aug , 09:00 PM' },
    // ];
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad AllprogramsPage');
    this.spinnerDialog.show('Loading...');
    this.http.get('http://artcafe.bit68.com/events').map(res => res.json()).subscribe(data => {
      this.spinnerDialog.hide();
      console.log(data)
      this.dropins=data;
    }, err => {
      this.spinnerDialog.hide();
      alert(err);
      console.log(err);
    });
  }
  addEvent() {
    this.navCtrl.push(EventsPage);
  }
  sessDet(s) {
    this.navCtrl.push(SessiondetailsPage, { data: s });
  }
  catDet(c) {
    this.navCtrl.push(SubcatPage, { data: c });
  }
  goBook(s) {
    this.navCtrl.push(BookPage, { data: s });
  }
}
