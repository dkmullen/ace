import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  hello = 'Hello';
  singingWinners = [
    'connor.jpg', 'hope.jpg', 'joey.jpg', 'marian.jpg', 'noah.jpg'
  ];
  actingWinners = [
    'grace.jpg', 'katelyn.jpg', 'loren.jpg', 'nevaeh.jpg'
  ];
  cards = [
    {
      title: 'Safer@Home Instrumental Contest',
      subtitle: 'Entries due April 11, 2020',
      image: `assets/images/safe@home2020/instrument.jpg`,
      alt: 'Girl playing a keyboard',
      photocredit: 'Photo by Fitsum Admasu on Unsplash',
      message1: 'Students thru Grade 12',
      message2: 'Prizes: $150, $100',
      button1: {
        buttontxt: 'More',
        link: '/events/instrumental',
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
      title: 'Safer@Home Photography Contest',
      subtitle: 'Entries due April 18, 2020',
      image: `assets/images/safe@home2020/photography.jpg`,
      alt: 'Woman photographing cherry blossoms',
      photocredit: 'Photo by kazuend on Unsplash',
      message1: 'Students thru Grade 12',
      message2: 'Prizes: $150, $100',
      button1: {
        buttontxt: 'More',
        link: '/events/photography',
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
      title: 'Safer@Home Writing Contest',
      subtitle: 'Entries due April 25, 2020',
      image: `assets/images/safe@home2020/write.jpg`,
      alt: 'Several women writing',
      photocredit: 'Photo by Alexis Brown on Unsplash',
      message1: 'Students thru Grade 12',
      message2: 'Prizes: $150, $100',
      button1: {
        buttontxt: 'More',
        link: '/events/writing',
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
      title: 'Safer@Home Dance Contest',
      subtitle: 'Entries due May 2, 2020',
      image: `assets/images/safe@home2020/dance.jpg`,
      alt: 'Young man dancing',
      photocredit: 'Photo by Marc A. Sporys on Unsplash',
      message1: 'Students thru Grade 12',
      message2: 'Prizes: $150, $100',
      button1: {
        buttontxt: 'More',
        link: '/events/dance',
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
      title: 'Ace Acting Awards',
      subtitle: 'January 26, 2020',
      image: `assets/images/acting_2020/${this.actingWinners[this.getRandomInt(4)]}`,
      alt: 'Young actor',
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
    // {
    //   title: 'Battle of the Bands',
    //   subtitle: 'May 2020',
    //   image: 'assets/images/battle_of_the_bands/bofb.jpg',
    //   alt: 'Photo of a band performing on stage',
    //   message1: 'Online contest in May',
    //   message2: 'This is YOUR year.',
    //   button1: {
    //     buttontxt: 'More info is coming',
    //     link: null,
    //     navMethod: 'internal',
    //     disabled: true,
    //     display: true
    //   },
    //   button2: {
    //     buttontxt: null,
    //     link: null,
    //     navMethod: null,
    //     disabled: true,
    //     display: false
    //   }
    // }
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
