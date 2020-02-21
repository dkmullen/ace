import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  singingWinners = [
    'connor.jpg', 'hope.jpg', 'joey.jpg', 'marian.jpg', 'noah.jpg'
  ];
  actingWinners = [
    'grace.jpg', 'katelyn.jpg', 'loren.jpg', 'nevaeh.jpg'
  ];
  cards = [
    {
      title: 'Ace Acting Awards',
      subtitle: 'January 26, 2020',
      image: `assets/images/acting_2020/${this.actingWinners[this.getRandomInt(4)]}`,
      alt: 'Collage of four young actors',
      message1: 'University of Tennessee',
      message2: 'Thanks to all for participating!',
      button1: {
        buttontxt: 'Results',
        link: '/events/acting',
        navMethod: 'internal',
        disabled: false,
        display: true
      },
      button2: {
        buttontxt: null,
        link: null,
        navMethod: null,
        disabled: true,
        display: false
      }
    },
    {
      title: 'Ace Singing Awards',
      subtitle: 'January 11, 2020 - 7pm',
      image: `assets/images/singing_2020/${this.singingWinners[this.getRandomInt(5)]}`,
      alt: 'Photo of a ymusical artist',
      message1: 'Bijou Theatre',
      message2: 'Thanks for a great show!',
      button1: {
        buttontxt: 'Results',
        link: 'events/singing',
        navMethod: 'internal',
        disabled: false,
        display: true
      },
      button2: {
        buttontxt: null,
        link: null,
        navMethod: null,
        disabled: true,
        display: false
      }
    },
    {
      title: 'Singer-Songwriter Contest',
      subtitle: 'January 2020',
      image: 'assets/images/etc/songwriters2.jpg',
      alt: 'Photo collage of young woman with a guitar',
      message1: 'Online contest',
      message2: 'Featuring some excellent local student-artists',
      button1: {
        buttontxt: 'Results',
        link: 'events/singer-songwriter',
        navMethod: 'internal',
        disabled: false,
        display: true
      },
      button2: {
        buttontxt: null,
        link: null,
        navMethod: 'internalWithPageLoad',
        disabled: true,
        display: false
      }
    },
    {
      title: 'Battle of the Bands',
      subtitle: 'May 2020',
      image: 'assets/images/battle_of_the_bands/bofb.jpg',
      alt: 'Photo of a band performing on stage',
      message1: 'The Mill and Mine (tentative)',
      message2: 'This is YOUR year.',
      button1: {
        buttontxt: 'More info is coming',
        link: null,
        navMethod: 'internal',
        disabled: true,
        display: true
      },
      button2: {
        buttontxt: null,
        link: null,
        navMethod: null,
        disabled: true,
        display: false
      }
    }
  ];

  constructor(protected router: Router) { }

  ngOnInit() {}

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  navigate(link, method) {
    switch (method) {
      case 'internal':
        return this.router.navigate([link]);
      case 'external':
        return window.open(link);
        /* Nav to internal page but need page refresh,
        ie, when using voting buttons */
      case 'internalWithPageLoad':
        return window.open(link);
    }
  }

}
