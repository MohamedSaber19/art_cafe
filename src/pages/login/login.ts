import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { HomePage } from "../home/home";
import { TabsPage } from "../tabs/tabs";
import { Storage } from '@ionic/storage';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  regInfo: any;

  loginForm: FormGroup;
  constructor(public navCtrl: NavController, public http: Http, public storage: Storage, public navParams: NavParams,private formBuilder: FormBuilder,public events: Events,public spinnerDialog:SpinnerDialog) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  // goHome(){
  //   this.navCtrl.push(TabsPage);
  // }
  doLog() {
    this.spinnerDialog.show('Loading ...');
    this.http.get('http://artcafe.bit68.com/login/?email=' + this.loginForm.value.email + '&password=' + this.loginForm.value.password).map(res => res.json()).subscribe(data => {
      this.spinnerDialog.hide();
      console.log(data)
      this.storage.set('user_info',JSON.stringify(data));
      // this.storage.get('user_info').then((val)=>{
      //   console.log(JSON.parse(val));
      // })
      this.events.publish('user:logged', data);
      this.navCtrl.setRoot(TabsPage);

    }, err => {
      this.spinnerDialog.hide();
      console.log(err);
      alert('Please fill your information correctly !')
    });
  }

}
