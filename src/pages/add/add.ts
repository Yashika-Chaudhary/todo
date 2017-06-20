import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController, ModalController, AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage
 {
Description;
Date;
eventSource;
    viewTitle;
    isToday: boolean;
    calendar = {
        mode: 'month',
        currentDate: new Date()
    };

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public navParams: NavParams, public view: ViewController, public modalCtrl: ModalController){

  }
  saveItem(){


      let newItem = {
        Description: this.Description,
        Date: this.Date,
        EventSource: this.eventSource,
        };

           this.view.dismiss(newItem);
}

       close(){
   this.view.dismiss();
 }


   loadEvents() {
           this.eventSource = this.createRandomEvents();
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
       }
       onCurrentDateChanged(event:Date) {
           var today = new Date();
           today.setHours(0, 0, 0, 0);
           event.setHours(0, 0, 0, 0);
           this.isToday = today.getTime() === event.getTime();
       }
       createRandomEvents() {
           var events = [];
           for (var i = 0; i < 50; i += 1) {
               var date = new Date();
               var eventType = Math.floor(Math.random() * 2);
               var startDay = Math.floor(Math.random() * 90) - 45;
               var endDay = Math.floor(Math.random() * 2) + startDay;
               var startTime;
               var endTime;
               if (eventType === 0) {
                   startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                   if (endDay === startDay) {
                       endDay += 1;
                   }
                   endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                   events.push({
                       title: 'All Day - ' + i,
                       startTime: startTime,
                       endTime: endTime,
                       allDay: true
                   });
               } else {
                   var startMinute = Math.floor(Math.random() * 24 * 60);
                   var endMinute = Math.floor(Math.random() * 180) + startMinute;
                   startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                   endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                   events.push({
                       title: 'Event - ' + i,
                       startTime: startTime,
                       endTime: endTime,
                       allDay: false
                   });
               }
           }
           return events;
       }
       onRangeChanged(ev) {
           console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
       }
       markDisabled = (date:Date) => {
           var current = new Date();
           current.setHours(0, 0, 0);
           return date < current;
       };


 }
