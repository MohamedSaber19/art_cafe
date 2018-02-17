import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { CameraOptions, Camera } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  picId: any;
  fileTransfer: FileTransferObject = this.transfer.create();
  
  myPic: any;
  noEvents: boolean;
  noNotifs: boolean;
  noStudios: boolean;
  noBooks: boolean;
  myInfo: any = {
    club_bookings: [],
    class_bookings: []
  };
  user_info: any = {};
  choice: string = "History";


  constructor(public navCtrl: NavController, public storage: Storage, public navParams: NavParams, public events: Events, public http: Http, public spinnerDialog: SpinnerDialog, private camera: Camera,private transfer:FileTransfer,private file:File) {
    // this.choice = "History";
    // this.user_info = {};
    // this.myInfo={};

  }

  ionViewDidEnter() {
    this.spinnerDialog.show('Loading...');
    console.log('ionViewDidLoad ProfilePage');
    this.storage.get('user_info').then((val) => {
      this.user_info = JSON.parse(val);
      console.log(this.user_info);
      this.http.get('http://artcafe.bit68.com/user_info/?token=' + this.user_info.token).map(res => res.json()).subscribe(data => {
        this.spinnerDialog.hide();
        this.myInfo = data;
        if (data.class_bookings.length == 0) {
          this.noBooks = true;
        } else {
          this.noBooks = false;
        }
        if (data.club_bookings.length == 0) {
          this.noStudios = true;
        } else {
          this.noStudios = false;
        }
        if (data.notifications.length == 0) {
          this.noNotifs = true;
        } else {
          this.noNotifs = false;
        }
        if (data.event_history.length == 0) {
          this.noEvents = true;
        } else {
          this.noEvents = false;
        }
        console.log('updated info', data);
      }, err => {
        this.spinnerDialog.hide();
        console.log(err);
        alert(err);
      })
    })

  }
  
  updatePic() {
    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
    }

    this.camera.getPicture(options).then(file_uri => {
      console.log(file_uri);
      this.myPic = file_uri;
      let transfer_options: FileUploadOptions = {
        fileKey: 'file',
        fileName: 'name.jpeg',
        chunkedMode:false,
        mimeType:'image/jpeg'
     }
     this.spinnerDialog.show();
     this.fileTransfer.upload(file_uri, 'http://artcafe.bit68.com/file_transfer/', transfer_options)
      .then((data) => {
        this.spinnerDialog.hide();
        console.log('transfer success', data);
        this.picId=data.response;
        
        this.http.get('http://artcafe.bit68.com/update_profile/?user_id=' + this.user_info.token + '&file_id=' + this.picId).map(res => res.json()).subscribe(data => {
        this.spinnerDialog.hide();
        console.log(data);
        console.log('updated info', data);
      }, err => {
        this.spinnerDialog.hide();
        console.log(err);
      })
        // alert('transfer success' + data)
      }, (err) => {
        this.spinnerDialog.hide();
        console.log('transfer err',err)
        // alert('transfer err' + err);
      })

    }, err => {
      console.log('get picture', err);
      // alert('get Picture err'+ err);
      // Handle error
    });
  }

}
