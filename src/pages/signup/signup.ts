import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Http } from "@angular/http";
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import { HomePage } from "../home/home";
import { TabsPage } from "../tabs/tabs";
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { UsernameValidator } from '../../validators/username.validator';
import { PasswordValidator } from '../../validators/password.validator';
import { PhoneValidator } from '../../validators/phone.validator';
import { Country } from './form.model';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  country_phone_group: FormGroup;
  countries: Array<Country>;
  genders: Array<string>;
  validations_form: FormGroup;
  matching_passwords_group: FormGroup;
  noMatch: boolean;
  RegForm: FormGroup;
  myInfo: any;

  constructor(public navCtrl: NavController, public http: Http, public storage: Storage, public navParams: NavParams, private formBuilder: FormBuilder, public events: Events,public spinnerDialog:SpinnerDialog) {

    this.validations_form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.compose([
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.required])),
      city: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      // gender: new FormControl('', Validators.required),
      // matching_passwords: this.matching_passwords_group,
      matching_passwords : new FormGroup({
        password: new FormControl('', Validators.compose([
          Validators.minLength(6),
          Validators.required,
          // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
        ])),
        confirm_password: new FormControl('', Validators.required)
      }, (formGroup: FormGroup) => {
        return PasswordValidator.areEqual(formGroup);
      }), 
      // terms: new FormControl(true, Validators.pattern('true'))
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
    // this.countries = [
    //   new Country('EG', 'Egypt'),
    // ];
    // this.genders = [
    //   "Male",
    //   "Female"
    // ];
    
  }

  validation_messages = {
    'city': [
      { type: 'required', message: 'City is required' }
    ],
    'name': [
      { type: 'required', message: 'First name is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'phone': [
      { type: 'required', message: 'Phone is required.' },
      { type: 'minlength', message: 'Phone must be 11 characters long.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' }
    ],
    'matching_passwords': [
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    // 'terms': [
    //   { type: 'pattern', message: 'You must accept terms and conditions.' }
    // ],
  };
goHome(){
    this.navCtrl.push(TabsPage);
  }
  onSubmit(values) {
    this.spinnerDialog.show('Loading ...');
    this.http.get('http://artcafe.bit68.com/register/?email=' + values.email + '&password=' + values.matching_passwords.password + '&name=' + values.name + '&phone_number=' + values.phone + '&city=' + values.city).map(res => res.json()).subscribe(data => {
      this.spinnerDialog.hide();
      console.log(data);
      this.storage.set('user_info', JSON.stringify(data));
        this.events.publish('user:logged', data);
        this.navCtrl.setRoot(TabsPage);

    }, err => {
      this.spinnerDialog.hide();
      console.log(err);
      alert('Please make sure you filled all fields correctly');
    });
  }
}
