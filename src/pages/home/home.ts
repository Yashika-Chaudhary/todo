import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { reorderArray } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { AddPage } from '../add/add';
import { DataService } from '../../providers/data/data';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {



    items: any = [];
    itemsCopy: any = [];
    counter = 0;

    constructor(public navCtrl: NavController,
        public alertCtrl: AlertController,
        public modalCtrl: ModalController,
        public dataService: DataService,
        public navParams: NavParams) {


        this.dataService.getData().then((list) => {

            if (list) {
                this.items = JSON.parse(list);
                this.itemsCopy = this.items;
            }

        });

    }





    edit(item) {

        let editModal = this.modalCtrl.create(AddPage, { 'item': item });

        editModal.onDidDismiss((newItem) => {

            let index = this.items.indexOf(item);

            if (newItem) {
                this.items[index] = newItem;
            }

        });

        editModal.present();

    }

    delete(item) {

        let index = this.items.indexOf(item);

        if (index > -1) {
            this.items.splice(index, 1);
        }
    }

    addItem() {

        let addModal = this.modalCtrl.create(AddPage);

        addModal.onDidDismiss((item) => {


            if (item) {
                this.saveItem(item);
            }

        });

        addModal.present();

    }

    saveItem(item) {


            this.items.push(item);
            this.dataService.save(this.items);

    }



    viewItem(item) {


        this.navCtrl.push(DetailPage, {
            item: item
        });



    }


    reorderItems(index) {
        this.items = reorderArray(this.items, index);
    }

    onClear() {
        this.items = this.itemsCopy;
    }

    getItems(ev: any) {

        this.onClear();

        let val = ev.target.value;


        if (val && val.trim() != '') {
            this.items = this.items.filter((item) => {
                return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }

    doInfinite(infiniteScroll) {
        
while(this.counter <= 10)
        {
        console.log('Begin async operation');

        setTimeout(() => {
            for (var i = 0; i <10; i++) {

                this.items.push(this.dataService.createToDoItem('TODO-'+i,'TODOdesc-'+i));



            console.log('Async operation has ended');
            infiniteScroll.complete();
            infiniteScroll.enable(false);
            }
        }, 500);

    this.counter += 1;
    }
}
}
