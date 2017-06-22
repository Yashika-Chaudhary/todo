import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
 this.item= navParams.get('item');
  }
  }

