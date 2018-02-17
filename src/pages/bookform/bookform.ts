import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import * as moment from 'moment';
import { InAppBrowser, InAppBrowserEvent } from '@ionic-native/in-app-browser';
import { EventsPage } from '../events/events';
/**
 * Generated class for the BookformPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-bookform',
  templateUrl: 'bookform.html',
})
export class BookformPage {
  
  myDate: any;
  myToken: any;
  myBook: any;
  bookingForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private formBuilder: FormBuilder, public http: Http, public storage: Storage,public spinnerDialog:SpinnerDialog,public iab:InAppBrowser) {
    this.myBook = this.navParams.get('data');
    console.log(this.myBook);
    this.bookingForm = this.formBuilder.group({
      name: '',
      date: '',
      phone: '',
      location: '',
      invitees:''
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookformPage');
    this.storage.get('user_info').then((val) => {
      this.myToken = JSON.parse(val).token;
      console.log(this.myToken);
    })
  }
  subForm(values) {
    let myTime = moment(values.date).format('DD/MM/YYYY');
    this.spinnerDialog.show('Loading...');
    this.http.get('http://artcafe.bit68.com/book_event/?token=' + this.myToken + '&branch=' + values.location + '&subcategory_id=' + this.myBook.id + '&selected_date=' + myTime + '&name=' + values.name + '&number_of_invitees=' + values.invitees).map(res => res.json()).subscribe(data => {
      this.spinnerDialog.hide();
      console.log(data);
      const browser = this.iab.create(data.iframe_url,'_blank');
      browser.on("exit").subscribe((event: InAppBrowserEvent) => { 
        console.log(event);
        this.navCtrl.setRoot(EventsPage);
      })
    }, err => {
      this.spinnerDialog.hide();
      console.log(err);
      alert(err);
    });

  }

}
