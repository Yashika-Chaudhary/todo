import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { reorderArray } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { Data } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    tab1Root: any = 'HomePage';
    tab2Root: any = 'DetailPage';


 items: any = [];

  constructor(public navCtrl: NavController ,  public alertCtrl: AlertController , public dataService: Data ) {
  this.dataService.getData().then((list) => {

   if(list){
     this.items = JSON.parse(list);
   }

  });
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
  this.dataService.save(this.items);


}


    reorderItems(index) {
   this.items = reorderArray(this.items, index);
}

getItems(ev: any) {



    let val = ev.target.value;


    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
         return (item.list.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
