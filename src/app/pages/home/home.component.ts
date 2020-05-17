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
      title: 'NEW: ACE Interviews',
      subtitle: 'Actor Kim Martin-Cotten',
      image: `assets/images/kim-martin-cotten.jpg`,
      alt: 'Actor Kim Martin-Cotten',
      photocredit: 'Photo by Lois Greenfield',
      message1: 'An extensive theatre career',
      message2: 'From Louisville to LA to Chicago to Broadway',
      button1: {
        buttontxt: 'Watch',
        link: '/features/videos',
        fragment: 'kim-martin-cotten',
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
      title: 'NEW: ACE Interviews',
      subtitle: 'Actor Matt Lytle',
      image: `assets/images/m_lytle.jpg`,
      alt: 'Actor Matt Lytle',
      photocredit: '',
      message1: 'The art and business of acting',
      message2: 'An interview with a versatile actor',
      button1: {
        buttontxt: 'Watch',
        link: '/features/videos',
        fragment: 'matt-lytle',
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
      title: 'NEW: ACE Interviews',
      subtitle: 'Actor Courtney Lucien',
      image: `assets/images/c_lucien.jpg`,
      alt: 'Actor Courtney Lucien',
      photocredit: 'Popio-Stumpf Photography',
      message1: 'The acting experience and craft',
      message2: 'A conversation with a Shakespearean actor',
      button1: {
        buttontxt: 'Watch',
        link: '/features/videos',
        fragment: 'courtney-lucien',
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
      title: 'NEW: ACE Interviews',
      subtitle: 'Author Alan Gratz',
      image: `assets/images/a_gratz.jpg`,
      alt: 'Author Alan Gratz',
      photocredit: 'Alan Gratz photo by Wes Stitt',
      message1: 'The creative process and ideas',
      message2: 'The perspective of a prolific author',
      button1: {
        buttontxt: 'Watch',
        link: '/features/videos',
        fragment: 'alan-gratz',
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
      title: 'NEW: ACE Interviews',
      subtitle: 'Musical Theatre: Four Perspectives',
      image: `assets/images/four.jpg`,
      alt: 'Four actors',
      photocredit: '',
      message1: 'From high school to Broadway',
      message2: 'Four actors speak about getting started',
      button1: {
        buttontxt: 'Watch',
        link: '/features/videos',
        fragment: 'four-perspectives',
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
    // {
    //   title: 'Safer@Home Dance Contest',
    //   subtitle: 'Congratulations to our winner!',
    //   image: `assets/images/safe@home2020/dance.jpg`,
    //   alt: 'Young man dancing',
    //   photocredit: 'Photo by Marc A. Sporys on Unsplash',
    //   message1: 'Students thru Grade 12',
    //   message2: 'Prizes: $150, $100',
    //   button1: {
    //     buttontxt: 'Results',
    //     link: '/events/dance',
    //     navMethod: 'internal',
    //     disabled: false,
    //     display: true
    //   },
    //   button2: {
    //     buttontxt: null,
    //     link: null,
    //     navMethod: null,
    //     disabled: true,
    //     display: false
    //   }
    // },
    // {
    //   title: 'Safer@Home Writing Contest',
    //   subtitle: 'Thanks to all our writers!',
    //   image: `assets/images/safe@home2020/write.jpg`,
    //   alt: 'Several women writing',
    //   photocredit: 'Photo by Alexis Brown on Unsplash',
    //   message1: 'Students thru Grade 12',
    //   message2: 'Prizes: $150, $100',
    //   button1: {
    //     buttontxt: 'Results',
    //     link: '/events/writing',
    //     navMethod: 'internal',
    //     disabled: false,
    //     display: true
    //   },
    //   button2: {
    //     buttontxt: null,
    //     link: null,
    //     navMethod: null,
    //     disabled: true,
    //     display: false
    //   }
    // },
    // {
    //   title: 'Safer@Home Shakespeare Contest',
    //   subtitle: 'Entries due April 23, 2020',
    //   image: `assets/images/safe@home2020/shakespeare.jpg`,
    //   alt: 'Shakespeare chalk drawing',
    //   photocredit: 'Photo by Jessica Pamp on Unsplash',
    //   message1: 'Students thru Grade 12',
    //   message2: '2 Prizes: $100 ea.',
    //   button1: {
    //     buttontxt: 'Results',
    //     link: '/events/shakespeare',
    //     navMethod: 'internal',
    //     disabled: false,
    //     display: true
    //   },
    //   button2: {
    //     buttontxt: null,
    //     link: null,
    //     navMethod: null,
    //     disabled: true,
    //     display: false
    //   }
    // },
    // {
    //   title: 'Safer@Home Photography Contest',
    //   subtitle: 'Voting has ended',
    //   image: `assets/images/safe@home2020/photography.jpg`,
    //   alt: 'Woman photographing cherry blossoms',
    //   photocredit: 'Photo by kazuend on Unsplash',
    //   message1: 'Students thru Grade 12',
    //   message2: 'Prizes: $150, $100',
    //   button1: {
    //     buttontxt: 'Results',
    //     link: '/events/photography',
    //     navMethod: 'internal',
    //     disabled: false,
    //     display: true
    //   },
    //   button2: {
    //     buttontxt: null,
    //     link: null,
    //     navMethod: null,
    //     disabled: true,
    //     display: false
    //   }
    // },    
    {
      title: 'Interview: Actor Kate Arrington',
      subtitle: 'of the Steppenwolf Theatre Company',
      image: `assets/images/kate_arrington.jpg`,
      alt: '',
      // photocredit: 'Photo by Jessica Pamp on Unsplash',
      message1: 'The perspective and experience',
      message2: 'of a seasoned professional',
      button1: {
        buttontxt: 'Watch',
        link: '/features/videos',
        fragment: 'kate-arrington',
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
    // {
    //   title: 'Safer@Home Instrumental Contest',
    //   subtitle: 'Thanks to all our participants',
    //   image: `assets/images/safe@home2020/instrument.jpg`,
    //   alt: 'Girl playing a keyboard',
    //   photocredit: 'Photo by Fitsum Admasu on Unsplash',
    //   message1: 'Students thru Grade 12',
    //   message2: 'Prizes: $150, $100',
    //   button1: {
    //     buttontxt: 'Results',
    //     link: 'https://www.aceknox.com/events/instrumental',
    //     navMethod: 'internalWithPageLoad',
    //     disabled: false,
    //     display: true
    //   },
    //   button2: {
    //     buttontxt: null,
    //     link: null,
    //     navMethod: null,
    //     disabled: true,
    //     display: false
    //   }
    // },
    // {
    //   title: 'Ace Acting Awards',
    //   subtitle: 'January 26, 2020',
    //   image: `assets/images/acting_2020/${this.actingWinners[this.getRandomInt(4)]}`,
    //   alt: 'Young actor',
    //   message1: 'University of Tennessee',
    //   message2: 'Thanks to all for participating!',
    //   button1: {
    //     buttontxt: 'Results',
    //     link: '/events/acting',
    //     navMethod: 'internal',
    //     disabled: false,
    //     display: true
    //   },
    //   button2: {
    //     buttontxt: null,
    //     link: null,
    //     navMethod: null,
    //     disabled: true,
    //     display: false
    //   }
    // },
    // {
    //   title: 'Ace Singing Awards',
    //   subtitle: 'January 11, 2020 - 7pm',
    //   image: `assets/images/singing_2020/${this.singingWinners[this.getRandomInt(5)]}`,
    //   alt: 'Photo of a musical artist',
    //   message1: 'Bijou Theatre',
    //   message2: 'Thanks for a great show!',
    //   button1: {
    //     buttontxt: 'Results',
    //     link: 'events/singing',
    //     navMethod: 'internal',
    //     disabled: false,
    //     display: true
    //   },
    //   button2: {
    //     buttontxt: null,
    //     link: null,
    //     navMethod: null,
    //     disabled: true,
    //     display: false
    //   }
    // },
    // {
    //   title: 'Singer-Songwriter Contest',
    //   subtitle: 'January 2020',
    //   image: 'assets/images/etc/songwriters2.jpg',
    //   alt: 'Photo collage of young woman with a guitar',
    //   message1: 'Online contest',
    //   message2: 'Featuring some excellent local student-artists',
    //   button1: {
    //     buttontxt: 'Results',
    //     link: 'events/singer-songwriter',
    //     navMethod: 'internal',
    //     disabled: false,
    //     display: true
    //   },
    //   button2: {
    //     buttontxt: null,
    //     link: null,
    //     navMethod: 'internalWithPageLoad',
    //     disabled: true,
    //     display: false
    //   }
    // },
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

  navigate(link, method, fragment?) {
    switch (method) {
      case 'internal':
        return fragment ? this.router.navigate([link], {fragment: fragment}) : 
          this.router.navigate([link]);
      case 'external':
        return window.open(link);
        /* Nav to internal page but need page refresh,
        ie, when using voting buttons */
      case 'internalWithPageLoad':
        return window.open(link, '_self');
    }
  }

}
