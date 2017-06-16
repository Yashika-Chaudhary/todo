import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

list;

  constructor( public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.list = this.navParams.get('item').list;
  }

}
