import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

Description;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController)
  {

  }
  saveItem(){

      let newItem = {
        Description: this.Description,
        };

           this.view.dismiss(newItem);
       }

       close(){
   this.view.dismiss();
 }
  }
