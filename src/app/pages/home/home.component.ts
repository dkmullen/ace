import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards = [
    {
      title: 'Ace Singing Awards',
      subtitle: 'January 11, 2020 - 7pm',
      image: 'assets/images/singing_2019/s1.jpg',
      alt: 'Photo of a young man with a guitar',
      message1: 'Bijou Theatre',
      message2: 'For students through grade 12',
      buttontxt: 'Sign up today',
      routerLink: '/singing',
      disabled: false
    },    {
      title: 'Ace Acting Awards',
      subtitle: 'January 25, 2020 - 7pm',
      image: 'assets/images/acting_2019/a1.jpg',
      alt: 'Photo of a young woman acting on stage',
      message1: 'Old City Performing Arts Center',
      message2: 'All new format for 2020',
      buttontxt: 'Find out more',
      routerLink: '/acting',
      disabled: false
    },    {
      title: 'Battle of the Bands',
      subtitle: 'May 2020',
      image: 'assets/images/battle_of_the_bands/bofb.jpg',
      alt: 'Photo of a band performing on stage',
      message1: 'The Foundary (tentative)',
      message2: 'This is YOUR year.',
      buttontxt: 'More info is coming',
      routerLink: '',
      disabled: true
    },    {
      title: 'High School Theatre Awards',
      subtitle: 'Spring 2020',
      image: 'assets/images/acting_2019/a43.jpg',
      alt: 'Photo of student actors on stage',
      message1: 'Bijou Theatre (tentative)',
      message2: 'Our newest event',
      buttontxt: 'More info is coming',
      routerLink: '',
      disabled: true
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
