import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
// import { MomentModule } from 'angular2-moment';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AllprogramsPage } from "../pages/allprograms/allprograms";
import { ProfilePage } from "../pages/profile/profile";
import { SettingsPage } from "../pages/settings/settings";
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
import { AuthPage } from "../pages/auth/auth";
import { SessionsPage } from "../pages/sessions/sessions";
import { ProgramdetailsPage } from "../pages/programdetails/programdetails";
import { SessiondetailsPage } from "../pages/sessiondetails/sessiondetails";
import { DropinsPage } from "../pages/dropins/dropins";
import { CheckoutPage } from "../pages/checkout/checkout";
import { AddeventPage } from "../pages/addevent/addevent";
import { ClassdetailsPage } from "../pages/classdetails/classdetails";
import { BookPage } from "../pages/book/book";
import { EventsPage } from "../pages/events/events";
import { ClassesPage } from "../pages/classes/classes";
import { ClubsPage } from "../pages/clubs/clubs";
import { SubcatPage } from "../pages/subcat/subcat";
import { BookformPage } from "../pages/bookform/bookform";
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { CommonModule } from '@angular/common';
import { CheckoutclubPage } from '../pages/checkoutclub/checkoutclub';
import { NewcardPage } from '../pages/newcard/newcard';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { CategoriesPage } from '../pages/categories/categories';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TermsPage } from '../pages/terms/terms';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
@NgModule({
  declarations: [
    MyApp,
    AllprogramsPage,
    SettingsPage,
    ProfilePage,
    HomePage,
    TabsPage,
    AuthPage,
    LoginPage,
    SignupPage,
    SessionsPage,
    SessiondetailsPage,
    ProgramdetailsPage,
    CheckoutPage,
    DropinsPage,
    AddeventPage,
    ClassdetailsPage,
    BookPage,
    ClassesPage,
    ClubsPage,
    EventsPage,
    SubcatPage,
    BookformPage,
    CheckoutclubPage,
    NewcardPage,
    CategoriesPage,
    AboutPage,
    TermsPage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    // MomentModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AllprogramsPage,
    SettingsPage,
    ProfilePage,
    HomePage,
    TabsPage,
    AuthPage,
    LoginPage,
    SignupPage,
    SessionsPage,
    SessiondetailsPage,
    ProgramdetailsPage,
    CheckoutPage,
    DropinsPage,
    AddeventPage,
    ClassdetailsPage,
    BookPage,
    ClassesPage,
    ClubsPage,
    EventsPage,
    SubcatPage,
    BookformPage,
    CheckoutclubPage,
    NewcardPage,
    CategoriesPage,
    AboutPage,
    TermsPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    SpinnerDialog,
    Camera,
    FileTransfer,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
