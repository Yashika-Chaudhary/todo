import { Component } from '@angular/core';
import { ModalController , NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 public items = [];

  constructor(public navCtrl: NavController , public modalCtrl: ModalController) {
}

add(){

    let addModal = this.modalCtrl.create(AddPage);

    addModal.onDidDismiss((item) => {

          if(item){
            this.save(item);
          }

    });

    addModal.present();

  }

  save(item){
    this.items.push(item);
  }

  view(item){
   this.navCtrl.push(DetailPage, {
     item: item
   });
 }
}
