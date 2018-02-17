import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BookformPage } from "../bookform/bookform";

/**
 * Generated class for the SubcatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-subcat',
  templateUrl: 'subcat.html',
})
export class SubcatPage {
  subCats: { name: string; }[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.subCats=[
    //   {name:'Subcategory one'},
    //   {name:'Subcategory two'},
    //   {name:'Subcategory three'},

    // ]
    this.subCats=navParams.get('data').subcategories;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubcatPage');
  }
  bookForm(b){
    this.navCtrl.push(BookformPage,{data:b});
  }

}
