import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SessiondetailsPage } from "../sessiondetails/sessiondetails";
import { DropinsPage } from "../dropins/dropins";
import { AddeventPage } from "../addevent/addevent";

/**
 * Generated class for the SessionsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-sessions',
  templateUrl: 'sessions.html',
})
export class SessionsPage {
  dates: {
    day: string;
    date: string;
    color: string;
  }[];
  sessions: {
    name: string;
    img: string;
  }[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sessions = [
      { name: 'First Session', img: 'img/sess1.jpg' },
      { name: 'Second Session', img: 'img/sess2.jpg' },
      { name: 'Third Session', img: 'img/sess3.jpg' }
    ]
    this.dates = [
      { day: 'Mon', date: '15/5', color: 'danger' },
      { day: 'Tue', date: '16/5', color: 'danger' },
      { day: 'Wed', date: '17/5', color: 'danger' },
      { day: 'Thu', date: '18/5', color: 'danger' },
      { day: 'Fri', date: '19/5', color: 'danger' },
      { day: 'Sat', date: '20/5', color: 'danger' },
      { day: 'Sun', date: '21/5', color: 'danger' },
      { day: 'Mon', date: '22/5', color: 'danger' },
      { day: 'Tue', date: '23/5', color: 'danger' },
      { day: 'Wed', date: '24/5', color: 'danger' },
      { day: 'Thu', date: '25/5', color: 'danger' },
      { day: 'Fri', date: '26/5', color: 'danger' },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SessionsPage');
  }
  sessDet(s) {
    this.navCtrl.push(SessiondetailsPage, { data: s });
  }
  pickDate(e) {
    for (var x = 0; x < this.dates.length; x++) {
      this.dates[x].color = 'danger'
    }
    e.color = "dark";
    console.log(e.day, e.date);
  }
  goDrop() {
    this.navCtrl.push(DropinsPage);
  }
  addEvent() {
    this.navCtrl.push(AddeventPage);
  }
}
