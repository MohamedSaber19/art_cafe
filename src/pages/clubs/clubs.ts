import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SessiondetailsPage } from "../sessiondetails/sessiondetails";
import { BookPage } from "../book/book";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
/**
 * Generated class for the ClubsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-clubs',
  templateUrl: 'clubs.html',
})
export class ClubsPage {
  myZayed: any;
  myMaadi: any;
  zayed: any;
  maadi: any;
  choice: string;
  dates: { day: string; date: string; color: string; }[];
  sessions: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public spinnerDialog:SpinnerDialog) {
    this.choice = "Cairo";
    this.myMaadi=[];
    this.myZayed=[];
  }

  ionViewDidEnter() {
    this.spinnerDialog.show('Loading...');
    console.log('ionViewDidLoad AllprogramsPage');
    this.http.get('http://artcafe.bit68.com/clubs').map(res => res.json()).subscribe(data => {
      this.spinnerDialog.hide();
      console.log(data)
      this.sessions=data;
      for(var x=0;x<data.length;x++){
        data[x].color="danger";
        this.sessions=data;
      }
      this.maadi=data.Maadi;
      this.zayed=data.Zayed;
    }, err => {
      this.spinnerDialog.hide();
      console.log(err);
      alert(err);
    });
  }
  // sessDet(s) {
  //   this.navCtrl.push(BookPage, { data: s });
  // }
  pickDate(e) {
    console.log(e);
    this.myMaadi=e.Maadi;
    this.myZayed=e.Zayed;
    console.log('maadi->',this.myMaadi,'','zayed->', this.myZayed);
    for (var x = 0; x < this.sessions.length; x++) {
      this.sessions[x].color = 'danger'
    }
    e.color = "light";
    console.log(e.day, e.date);
  }
  goBook(sess) {
    console.log(sess);
    this.navCtrl.push(BookPage, { dataa: sess });
  }

}
