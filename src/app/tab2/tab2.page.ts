import { Component, ViewChild } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  valueT = 25;
  valueH = 40;
  optionsT: Options = {
    floor: 20,
    ceil: 40
  };

  optionsH: Options = {
    floor: 30,
    ceil: 100
  };

}
