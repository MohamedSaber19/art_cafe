import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ClassesPage } from '../classes/classes';
import { BookPage } from "../book/book";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { Spinner } from 'ionic-angular/components/spinner/spinner';
/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  items: any=[{title:''}];
  posts: any;
  categories: object[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public spinnerDialog: SpinnerDialog,public loadingCtrl:LoadingController) {
    this.http.get('http://artcafe.bit68.com/all_classes').map(res => res.json()).subscribe(data => {
      this.spinnerDialog.hide();
      this.categories=data;
      this.initializeItems();
      console.log(data);
    }, err => {
      console.log(err);
      this.spinnerDialog.hide();
      alert(err);
    });
      
  }

  initializeItems() {
    this.items = this.categories;
  }

  onInput(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  doRefresh(e){
    this.http.get('http://artcafe.bit68.com/all_classes').map(res => res.json()).subscribe(data => {
      this.spinnerDialog.hide();
      this.categories=data;
      this.initializeItems();
      e.complete();
      console.log(data);
    }, err => {
      e.complete();
      console.log(err);
      this.spinnerDialog.hide();
      alert(err);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }
  goPackages(c) {
    this.navCtrl.push(ClassesPage, { id: c });
  }
  
  onCancel(e){
console.log(e);
  }



  
}
