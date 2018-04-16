import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

myStatus: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  updateStatus(){
    this.navCtrl.push("StatusPage");
  }

   ionViewWillEnter(){
    this.storage.get("myStatus")
    .then((data) =>
    {
        this.myStatus = data;
    })
    .catch((err) => {
      alert("Error accesssing Storage")
    })
  }

}
