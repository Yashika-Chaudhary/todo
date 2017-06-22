import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController, ModalController, AlertController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';



@IonicPage()
@Component({
    selector: 'page-add',
    templateUrl: 'add.html',
})
export class AddPage {
    title;
    Description;
    Date;
    DateTime;
    imageURL;
    eventSource;
    viewTitle;
    isToday: boolean;
    calendar = {
        mode: 'month',
        currentDate: new Date()
    };
    addedToDoObj;

    constructor(public navCtrl: NavController,
        public alertCtrl: AlertController,
        public navParams: NavParams, 
        public view: ViewController,
        public modalCtrl: ModalController,
        private camera: Camera) {

        let item = navParams.get('item');
        if (item) {
            this.title = item.title;
            this.Description = item.Description;
            this.Date = item.Date;
            this.DateTime = item.DateTime;
        }
    }

    saveItem() {

   

        let newItem = {
            title: this.title,
            Description: this.Description,
            Date: this.Date,
            DateTime: this.DateTime,
        };

        this.view.dismiss(newItem);
    }
    
    close() {
        this.view.dismiss();
    }


    onViewTitleChanged(title) {
        this.viewTitle = title;
    }
    onEventSelected(event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    }

    today() {
        this.calendar.currentDate = new Date();
    }
    onTimeSelected(ev) {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
        this.DateTime = ev.selectedTime;
    }
    onCurrentDateChanged(event: Date) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    }
    createEvents() {
        var events = [];

        return events;
    }
    onRangeChanged(ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    }
    markDisabled = (date: Date) => {
        var current = new Date();
        current.setHours(0, 0, 0);
        return date < current;
    };

    takePhoto() {
        this.camera.getPicture().then((imageData) => {
            this.imageURL = imageData
        }, (err) => {
            console.log(err);
        });
    }

}
