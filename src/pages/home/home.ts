import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SessionsPage } from "../sessions/sessions";
import { DropinsPage } from "../dropins/dropins";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
goSessions(){
  this.navCtrl.push(SessionsPage);
}
goDrop(){
  this.navCtrl.push(DropinsPage);
}
}
