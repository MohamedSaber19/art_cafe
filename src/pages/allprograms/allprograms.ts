import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProgramdetailsPage } from "../programdetails/programdetails";
import { AddeventPage } from "../addevent/addevent";
import { SessiondetailsPage } from "../sessiondetails/sessiondetails";
import { ClassdetailsPage } from "../classdetails/classdetails";
import { BookPage } from "../book/book";

/**
 * Generated class for the AllprogramsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-allprograms',
  templateUrl: 'allprograms.html',
})
export class AllprogramsPage {
  sessions: { name: string; img: string; instructor: string; time: string; }[];
  classes: { name: string; img: string; instructor: string; time: string; }[];

  dates: { day: string; date: string; color: string; }[];
  
  choice: string;
  dropins: { name: string; img: string; }[];
  

 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.classes = [
      { name: 'First Class', img: 'img/sess1.jpg',instructor:'Ahmed Ali',time:'1:00 PM' },
      { name: 'Second Class', img: 'img/sess2.jpg',instructor:'Hamdy Karam',time:'4:00 PM' },
      { name: 'Third Class', img: 'img/sess3.jpg',instructor:'Omar Hassan',time:'8:00 PM' }
    ];
    this.sessions = [
      { name: 'First Session', img: 'img/sess1.jpg',instructor:'Ahmed Ali',time:'4:00 PM' },
      { name: 'Second Session', img: 'img/sess2.jpg',instructor:'Hamdy Karam',time:'7:00 PM' },
      { name: 'Third Session', img: 'img/sess3.jpg',instructor:'Omar Hassan',time:'11:00 PM' }
    ];
    this.dropins = [
      { name: 'Session Three', img: 'img/sess3.jpg' },
      { name: 'Session Two', img: 'img/sess2.jpg' },
      { name: 'Session One', img: 'img/sess1.jpg' },
    ];
    
    this.choice="Classes";
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
    console.log('ionViewDidLoad AllprogramsPage');
  }
  progDet(e) {
    this.navCtrl.push(ProgramdetailsPage, { data: e });
  }
  addEvent() {
    this.navCtrl.push(AddeventPage);
  }
  sessDet(s){
    this.navCtrl.push(SessiondetailsPage, { data: s });
  }
  pickDate(e) {
    for (var x = 0; x < this.dates.length; x++) {
      this.dates[x].color = 'danger'
    }
    e.color = "dark";
    console.log(e.day, e.date);
  }
  goDet(c){
    this.navCtrl.push(ClassdetailsPage,{data:c});
  }
  goBook(s){
    this.navCtrl.push(BookPage,{data:s});
  }
}
