import { Component } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent {
  public sponsors = [
    {
      logo: '../../../assets/images/sponsors/nationalrx.png',
      link: 'https://www.nationalrx.com/'
    },
    {
      logo: '../../../assets/images/sponsors/sb.png',
      link: 'http://springboardav.com/'
    },
    {
      logo: '../../../assets/images/sponsors/sr.jpg',
      link: 'https://www.schoolofrock.com/'
    },
    {
      logo: '../../../assets/images/sponsors/tc.png',
      link: 'http://turkeycreek.com/'
    },
    {
      logo: '../../../assets/images/sponsors/volunteer-pharmacy.png',
      link: 'https://volunteerpharmacy.com/'
    }
  ];

}
