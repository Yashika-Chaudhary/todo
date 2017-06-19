import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventModalPage } from './event-modal';

@NgModule({
  declarations: [
    EventModalPage,
  ],
  imports: [
    IonicPageModule.forChild(EventModalPage),
  ],
  exports: [
    EventModalPage
  ]
})
export class EventModalPageModule {}
