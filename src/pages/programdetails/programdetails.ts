import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CheckoutPage } from "../checkout/checkout";

/**
 * Generated class for the ProgramdetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-programdetails',
  templateUrl: 'programdetails.html',
})
export class ProgramdetailsPage {
  myProg: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myProg=this.navParams.get('data');
    console.log(this.myProg);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramdetailsPage');
  }
goCheck(p){
this.navCtrl.push(CheckoutPage,{data:p});
}
}
