import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {
  public sponsorLogos = [
    '../../../assets/images/sponsors/nationalrx.png',
    '../../../assets/images/sponsors/sb.png',
    '../../../assets/images/sponsors/sr.jpg',
    '../../../assets/images/sponsors/tc.png',
    '../../../assets/images/sponsors/volunteer-pharmacy.png',
  ];

  constructor() { }

  ngOnInit() {
  }

}
