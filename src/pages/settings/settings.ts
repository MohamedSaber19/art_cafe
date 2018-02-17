import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthPage } from '../auth/auth';
import { AboutPage } from '../about/about';
import { TermsPage } from '../terms/terms';
import { ContactPage } from '../contact/contact';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  myInfo: any;
  token: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage,public app:App,public alertCtrl:AlertController,public http:Http,public spinnerDialog:SpinnerDialog) {
    this.storage.get('user_info').then((val)=>{
      
      this.myInfo=JSON.parse(val);
      console.log(this.myInfo.token);
    })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  logOut(){
    this.storage.clear();
    this.app.getRootNav().setRoot(AuthPage)
  }
  changeEmail(){
    let prompt = this.alertCtrl.create({
      title: 'Changing Email',
      message: "Enter a new Email address",
      inputs: [
        {
          name: 'newEmail',
          placeholder: 'Type your new Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log(data);
            this.http.get('http://artcafe.bit68.com/update_profile?user_id=' + this.myInfo.token +'&email='+data.newEmail ).map(res => res.json()).subscribe(data => {
              console.log(data);
              this.spinnerDialog.hide();
            }, err => {
              console.log(err);
              this.spinnerDialog.hide();
              alert(err);
            });
          }
        }
      ]
    });
    prompt.present();
  }
  changePassword(){
    let pwprompt = this.alertCtrl.create({
      title: 'Changing Password',
      message: "Enter a new Password",
      inputs: [
        {
          name: 'newPassword',
          placeholder: 'Type your new Password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
            
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log(data);
            this.http.get('http://artcafe.bit68.com/update_profile?user_id=' + this.myInfo.token +'&password='+data.newPassword ).map(res => res.json()).subscribe(data => {
              console.log(data);
              this.spinnerDialog.hide();
              console.log(data);
            }, err => {
              console.log(err);
              this.spinnerDialog.hide();
              alert(err);
            });
          }
        }
      ]
    });
    pwprompt.present();
  }

  goTerms(){
    this.navCtrl.push(TermsPage);
  }
  goContact(){
    this.navCtrl.push(ContactPage);
  }
  goAbout(){
    this.navCtrl.push(AboutPage);
  }

}
