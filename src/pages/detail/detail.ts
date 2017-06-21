import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data/data';



@IonicPage({
   name: 'detail-page',
  segment: 'detail'
})
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: Data) {
    this.item= navParams.get('item');
  }

}
