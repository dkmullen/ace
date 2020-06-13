import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coaching',
  templateUrl: './coaching.component.html',
  styleUrls: ['./coaching.component.scss']
})
export class CoachingComponent implements OnInit {
  photoLink = 'assets/images/coaches/';
  coaches = [
    {class: 'Musical Theatre', email: 'msannasmithhh@gmail.com', firstname: 'Anna', lastname: 'Smith', link: 'anna-smith', photo: `${this.photoLink}anna_smith2.jpg`},
    {class: 'Audition Monologues', email: 'cjlucien@gmail.com', firstname: 'Courtney', lastname: 'Lucien', link: 'courtney-lucien', photo: `${this.photoLink}c_lucien_600.jpg`},
    {class: 'Audition Monologues', email: 'lytle.matthew@gmail.com', firstname: 'Matt', lastname: 'Lytle', link: 'matt-lytle', photo: `${this.photoLink}matt_lytle2.jpg`},
    {class: 'Shakespeare Monologues', email: 'jay@aceknox.com', firstname: 'Jay', lastname: 'Apking', link: 'jay-apking', photo: `${this.photoLink}jay_apking.jpg`},
    {class: 'Musical Theatre', email: ' aleahvassell@gmail.com', firstname: 'Aleah', lastname: 'Vassell', link: 'aleah-vassell', photo: `${this.photoLink}aleah_vassell3.jpg`}
  ]

  constructor() { }

  ngOnInit() {
    this.coaches = this.shuffle(this.coaches);
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

}
