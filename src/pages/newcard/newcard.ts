import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewcardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-newcard',
  templateUrl: 'newcard.html',
})
export class NewcardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewcardPage');
  }
  confirm() {
    this.navCtrl.pop();
  }
  cancel() {
    this.navCtrl.pop();
  }
}
