import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards = [
    {
      title: 'Ace Acting Awards',
      subtitle: 'January 26, 2020',
      image: 'assets/images/acting_2019/a1.jpg',
      alt: 'Photo of a young woman acting on stage',
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
      title: 'Singer-Songwriter Contest',
      subtitle: 'January 2020',
      image: 'assets/images/etc/songwriters2.jpg',
      alt: 'Photo collage of 4 students singing',
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
      title: 'Ace Singing Awards',
      subtitle: 'January 11, 2020 - 7pm',
      image: 'assets/images/singing_2020/singing_1.jpg',
      alt: 'Photo of a young man with a guitar',
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
    },
    {
      title: 'High School Theatre Awards',
      subtitle: 'Spring 2020',
      image: 'assets/images/acting_2019/a43.jpg',
      alt: 'Photo of student actors on stage',
      message1: 'Bijou Theatre (tentative)',
      message2: 'Our newest event',
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

  ngOnInit() {
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
