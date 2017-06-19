import { Component } from '@angular/core';

import { DetailPage } from '../detail/detail';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DetailPage;
  constructor() {

 }
}
