import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { AllprogramsPage } from "../allprograms/allprograms";
import { SettingsPage } from "../settings/settings";
import { ProfilePage } from "../profile/profile";
import { ClassesPage } from "../classes/classes";
import { ClubsPage } from "../clubs/clubs";
import { EventsPage } from "../events/events";
import { CategoriesPage } from '../categories/categories';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CategoriesPage;
  tab2Root = ClubsPage;
  tab3Root = EventsPage;
  tab4Root = SettingsPage;
  tab5Root = ProfilePage;
  constructor() {

  }
}
