import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AddPage } from '../add/add';



@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

public items = [];
list;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public modalCtrl: ModalController )
  {

  }

  ionViewDidLoad() {

  }
  addItem(){

      let addModal = this.modalCtrl.create(AddPage);

      addModal.onDidDismiss((item) => {

            if(item){
              this.saveItem(item);
            }

      });

      addModal.present();

    }

    saveItem(item){
      this.items.push(item);
    }

    viewItem(item){
  this.navCtrl.push(AddPage, {
    item: item
  });
}
}
