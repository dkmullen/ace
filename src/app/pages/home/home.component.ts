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
      message2: 'All new format for 2020',
      buttontxt: 'Sign up today',
      routerLink: '/events/acting',
      webLink: null,
      secondBtnTxt: null,
      disabled: false
    },
    {
      title: 'Singer-Songwriter Contest',
      subtitle: 'January 2020',
      image: 'assets/images/etc/songwriters2.jpg',
      alt: 'Photo collage of 4 students singing',
      message1: 'Online contest',
      message2: 'Featuring some excellent local student-artists',
      buttontxt: 'Results',
      webLink: 'https://www.aceknox.com/events/singer-songwriter',
      disabled: false
    },
];
  cards2 = [
    {
      title: 'Ace Singing Awards',
      subtitle: 'January 11, 2020 - 7pm',
      image: 'assets/images/singing_2020/singing_1.jpg',
      alt: 'Photo of a young man with a guitar',
      message1: 'Bijou Theatre',
      message2: 'Thanks for a great show!',
      buttontxt: 'Results',
      secondBtnTxt: 'Photos',
      routerLink: '/events/singing',
      routerLink2: 'galleries/singing-gallery-2020',
      disabled: false,
    },
    {
      title: 'Battle of the Bands',
      subtitle: 'May 2020',
      image: 'assets/images/battle_of_the_bands/bofb.jpg',
      alt: 'Photo of a band performing on stage',
      message1: 'The Mill and Mine (tentative)',
      message2: 'This is YOUR year.',
      buttontxt: 'More info is coming',
      routerLink: 'none',
      disabled: true
    },    {
      title: 'High School Theatre Awards',
      subtitle: 'Spring 2020',
      image: 'assets/images/acting_2019/a43.jpg',
      alt: 'Photo of student actors on stage',
      message1: 'Bijou Theatre (tentative)',
      message2: 'Our newest event',
      buttontxt: 'More info is coming',
      routerLink: 'none',
      webLink: null,
      secondBtnTxt: null,
      disabled: true
    }
  ];

  constructor(protected router: Router) { }

  ngOnInit() {
  }

  navigate(link) {
    this.router.navigate([link]);
  }

  webNav(link) {
    window.location.href = link;
  }

  openTab(link) {
    window.open(link);
  }

}
