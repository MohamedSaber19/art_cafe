import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SessiondetailsPage } from "../sessiondetails/sessiondetails";

/**
 * Generated class for the DropinsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-dropins',
  templateUrl: 'dropins.html',
})
export class DropinsPage {
  dropins: {
    name: string;
    img: string;
  }[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dropins=[
      {name:'Session Three',img:'img/sess3.jpg'},
      {name:'Session Two',img:'img/sess2.jpg'},
      {name:'Session One',img:'img/sess1.jpg'},
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DropinsPage');
  }
sessDet(f){
  this.navCtrl.push(SessiondetailsPage,{data:f});
}
}
