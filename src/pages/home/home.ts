import { Component } from '@angular/core';
import {NavController, AlertController } from 'ionic-angular';
import { reorderArray } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 items: any = [];

  constructor(public navCtrl: NavController ,  public alertCtrl: AlertController) {
}


add(){
let prompt = this.alertCtrl.create({
    title: 'Add ',
    inputs: [{
        name: 'list'
    }],
    buttons: [
        {
            text: 'Cancel'
        },
        {
            text: 'Add',
            handler: data => {
                this.items.push(data);
            }
        }
    ]
});

prompt.present();    }

    edit(item){

        let prompt = this.alertCtrl.create({
            title: 'Edit list',
            inputs: [{
                name: 'list'
            }],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: data => {
                        let index = this.items.indexOf(item);

                        if(index > -1){
                          this.items[index] = data;
                        }
                    }
                }
            ]
        });

        prompt.present();

    }

    delete(item){

        let index = this.items.indexOf(item);

        if(index > -1){
            this.items.splice(index, 1);
        }
    }

    viewItem(item){
  this.navCtrl.push(DetailPage, {
    item: item
  });
}

    reorderItems(index) {
   this.items = reorderArray(this.items, index);
}
}
