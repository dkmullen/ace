import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  form: any;
  constructor() { }

  ngOnInit() {
    console.log(moment(1583887832000).format('dddd, MMMM Do YYYY, h:mm:ss a'));
  }

}
