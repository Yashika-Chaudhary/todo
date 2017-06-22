import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';


@Injectable()
export class DataService{

  constructor(public storage: Storage){

  }

  getData() {
    return this.storage.get('list');
  }

  createToDoItem(title, desc) {
    return {
      'title':title,
      'description':desc
    }
  }

  save(data) {
    let newData = JSON.stringify(data);
    return this.storage.set('list', newData);
  }
}
