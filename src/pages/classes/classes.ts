import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProgramdetailsPage } from "../programdetails/programdetails";
import { ClassdetailsPage } from "../classdetails/classdetails";
import { BookPage } from "../book/book";
import { Storage } from '@ionic/storage';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';

/**
 * Generated class for the ClassesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-classes',
  templateUrl: 'classes.html',
})
export class ClassesPage {
  dotw: any;
  class_id: any;
  categories: { name: string; img: string; desc: string; }[];
  myZayed: any;
  myMaadi: any;
  zayed: any;
  maadi: any;
  choice: string;
  classes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public spinnerDialog:SpinnerDialog) {
    this.choice = 'Cairo';
    this.myMaadi=[];
    this.myZayed=[];
    this.class_id=this.navParams.get('id');
    this.dotw=[
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]
    
  }
  pickDate(e) {
    this.myMaadi=e.Maadi;
    this.myZayed=e.Zayed;
    for (var x = 0; x < this.classes.length; x++) {
      this.classes[x].color = 'primary'
    }
    e.color = "light";
    console.log(e.day, e.date);
  }
  ionViewDidEnter() {
    console.log('ionViewDidLoad AllprogramsPage');
    this.spinnerDialog.show('Loading...');
    this.http.get('http://artcafe.bit68.com/class_sessions/?class_id='+this.class_id).map(res => res.json()).subscribe(data => {
      this.spinnerDialog.hide();
      console.log(data);
      this.classes=data;
      this.myMaadi=data.Maadi;
      this.myZayed=data.Zayed;
      // for(var x=0;x<data.length;x++){
      //   data[x].color="primary";
        
      // }
    }, err => {
      console.log(err);
      this.spinnerDialog.hide();
      alert(err);
    });
  }
  progDet(e) {
    this.navCtrl.push(ProgramdetailsPage, { data: e });
  }
  goDet(c) {
    this.navCtrl.push(ClassdetailsPage, { data: c });
  }
  goBook(s) {
    this.navCtrl.push(ClassdetailsPage, { data: s });
  }
  // showSpinner(){
  //   alert('heeeeeeeey ios');
  //   this.spinnerDialog.show(null,'Please wait ...' , false,{
  //     overlayOpacity:0.5
  //   });
  // }
  // showSpinnerAnd(){
  //   alert('heeeeeeeey android');
  //   this.spinnerDialog.show('Testing','Please wait ...' , false);
  // }

}
