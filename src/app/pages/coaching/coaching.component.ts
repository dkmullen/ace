import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coaching',
  templateUrl: './coaching.component.html',
  styleUrls: ['./coaching.component.scss']
})
export class CoachingComponent implements OnInit {
  photoLink = 'assets/images/coaches/';
  coaches = [
    {firstname: 'Anna', lastname: 'Smith', link: 'anna-smith', photo: `${this.photoLink}anna_smith2.jpg`},
    {firstname: 'Courtney', lastname: 'Lucien', link: 'courtney-lucien', photo: `${this.photoLink}courtney_lucien.jpg`},
    {firstname: 'Chelsea', lastname: 'LeValley', link: 'chelsea-levalley', photo: `${this.photoLink}chelsea_levalley2.jpg`},
  ]
  coaches2 = [
    {firstname: 'Matt', lastname: 'Lytle', link: 'matt-lytle', photo: `${this.photoLink}matt_lytle2.jpg`},
    {firstname: 'Jay', lastname: 'Apking', link: 'jay-apking', photo: `${this.photoLink}jay_apking.jpg`}
  ]
  

  constructor() { }

  ngOnInit() {
    this.coaches = this.shuffle(this.coaches);
    this.coaches2 = this.shuffle(this.coaches2);
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

}
