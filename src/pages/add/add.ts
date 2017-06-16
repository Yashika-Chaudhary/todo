import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  list;

  constructor(public navCtrl: NavController, public view: ViewController) {
  }

  ionViewDidLoad() {

  }

  save(){

    let newItem = {
      list: this.list,

    };

    this.view.dismiss(newItem);

  }

}
