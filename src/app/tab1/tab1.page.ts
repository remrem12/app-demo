import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  devices = [
    {
      name: 'TV',
      img: 'https://image.flaticon.com/icons/svg/905/905469.svg'
    },
    {
      name: 'Air conditional',
      img: 'https://image.flaticon.com/icons/svg/3069/3069657.svg'
    },
    {
      name: 'Nebulizer',
      img: 'https://www.flaticon.com/premium-icon/icons/svg/3077/3077777.svg'
    }
  ];
}
