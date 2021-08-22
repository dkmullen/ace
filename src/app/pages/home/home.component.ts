import { getRtlScrollAxisType } from '@angular/cdk/platform';
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
  cards = [
    {
      title: 'ACE in the Park',
      subtitle: 'Thanks for a great summer',
      image: `assets/images/thanks.jpg`,
      alt: 'Musicians on a lawn',
      photocredit: '',
      message1: 'Thanks to our supporters, artists and co-sponsors',
      message2: 'See some photos here',
      button1: {
        buttontxt: 'Gallery',
        link: 'ace-in-the-park',
        fragment: '',
        navMethod: 'internal',
        disabled: false,
        display: true
      },
      button2: {
        buttontxt: 'Party Boys',
        link: 'https://www.partyboysdjshow.com/', // my test link for generic signup for
        navMethod: 'external',
        disabled: true,
        display: false
      },
      button3: {
        buttontxt: 'Turkey Creek',
        link: 'http://turkeycreek.com/',
        fragment: '',
        navMethod: 'external',
        disabled: true,
        display: false
      },
    },
    {
      title: 'Theatre Contest 2021',
      subtitle: 'The results are in',
      image: `assets/images/acting_2019/a13.jpg`,
      alt: 'An actor',
      photocredit: '',
      message1: 'Here are the winners',
      message2: 'Thanks to all of our contestants',
      button1: {
        buttontxt: 'See winners',
        link: '/drama2021',
        fragment: '',
        navMethod: 'internal',
        disabled: false,
        display: true
      },
      button2: {
        buttontxt: 'Contest details',
        link: '/ace-in-the-park', // my test link for generic signup for
        navMethod: 'internal',
        disabled: false,
        display: true
      }
    },
    {
      title: 'Singing Contest 2021',
      subtitle: 'See all the finalists',
      image: `assets/images/singing_21/contest-results.jpg`,
      alt: 'A singer',
      photocredit: '',
      message1: 'Both contests are complete',
      message2: 'Thanks, everyone, for entering!',
      button1: {
        buttontxt: 'See results',
        link: 'https://aceknox.com/singing21',
        fragment: '',
        navMethod: 'internalWithPageLoad',
        disabled: false,
        display: true
      },
      button2: {
        buttontxt: 'Contest details',
        link: '/signup-form', // my test link for generic signup for
        navMethod: 'internal',
        disabled: true,
        display: false
      }
    },{
      title: 'Help For Your Next Audition',
      subtitle: 'ACE now offers professional coaching',
      image: `assets/images/homepage/audition.jpg`,
      alt: 'Film actors getting ready to perform',
      photocredit: 'Avel Chuklanov on Unsplash',
      message1: 'Real-time video coaching',
      message2: 'From experienced performers',
      button1: {
        buttontxt: 'Learn More',
        link: '/coaching',
        fragment: '',
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
      subtitle: 'Musician Olivia DaPonte',
      image: `assets/images/homepage/olivia_daponte.jpg`,
      alt: 'Musician Olivia DaPonte',
      photocredit: '',
      message1: 'Knoxville-area musician',
      message2: 'Balancing art and learning',
      button1: {
        buttontxt: 'Watch',
        link: '/features/videos',
        fragment: 'oliva-daponte',
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
      subtitle: 'Actor Anna Catherine Smith',
      image: `assets/images/homepage/anna-smith.jpg`,
      alt: 'Actor Anna Catherine Smith',
      photocredit: '',
      message1: 'ACE Awards alum and acting professional',
      message2: 'Getting started in theatre',
      button1: {
        buttontxt: 'Watch',
        link: '/features/videos',
        fragment: 'anna-smith',
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
      subtitle: 'Actor/Professor Jed Diamond',
      image: `assets/images/homepage/j_diamond.jpg`,
      alt: 'Jed Diamond',
      photocredit: '',
      message1: 'University of Tennessee Professor and Actor',
      message2: 'Invaluable advice for young actors',
      button1: {
        buttontxt: 'Watch',
        link: '/features/videos',
        fragment: 'jed diamond',
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
      subtitle: 'Actor Chelsea LeValley',
      image: `assets/images/homepage/c_levalley.jpg`,
      alt: 'Actor Chelsea LeValley',
      photocredit: '',
      message1: 'A successful Seattle-based actor',
      message2: 'Career advice and the need for diverse skills',
      button1: {
        buttontxt: 'Watch',
        link: '/features/videos',
        fragment: 'chelsea-levalley',
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
      subtitle: 'Actor Kim Martin-Cotten',
      image: `assets/images/homepage/kim-martin-cotten.jpg`,
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
      image: `assets/images/homepage/m_lytle.jpg`,
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
      image: `assets/images/homepage/c_lucien.jpg`,
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
      image: `assets/images/homepage/a_gratz.jpg`,
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
      image: `assets/images/homepage/four.jpg`,
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
    {
      title: 'Interview: Actor Kate Arrington',
      subtitle: 'of the Steppenwolf Theatre Company',
      image: `assets/images/homepage/kate_arrington.jpg`,
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
    }
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
