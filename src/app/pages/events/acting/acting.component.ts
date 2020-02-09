import { Component } from '@angular/core';

@Component({
  selector: 'app-acting',
  templateUrl: './acting.component.html',
  styleUrls: ['./acting.component.scss']
})
export class ActingComponent {
  winningTeam = [
    {name: 'Kate Bishop', category: 'Comedic'},
    {name: 'Meredith Bishop', category: 'Dramatic'},
    {name: 'Hannah Johnson', category: 'Shakespeare'},
    {name: 'Addie Peterson', category: 'Musical Theatre'},
  ];

  categories = [
    {
      category: 'Comedic Monologue',
      entrants: [
        { name: 'Grace Ballard', school: 'Maryville High School', category: 'comedic', notes: 'winner' },
        { name: 'Kate Bishop', school: 'Grace Christian Academy', category: 'comedic', notes: 'distinction' },
        { name: 'Kyla Jernigan', school: 'Homeschool', category: 'comedic', notes: 'distinction' }
      ] 
    },
    {
      category: 'Dramatic Monologue',
      entrants: [
        {name: 'LoRen Seagrave', school: 'Austin East', category: 'dramatic', notes: 'winner'},
        {name: 'Chloe Adsit', school: 'Heritage', category: 'dramatic', notes: 'distinction'},
        {name: 'Jackson Ahern', school: 'Austin East Magnet', category: 'dramatic', notes: 'distinction'},
        {name: 'Heather Bohan', school: 'Farragut', category: 'dramatic', notes: 'distinction'},
        {name: 'Jack Lloyd', school: 'Oak Ridge', category: 'dramatic', notes: 'distinction'},
        {name: 'Ella Trisler', school: 'Catholic', category: 'dramatic', notes: 'distinction'}
      ] 
    },
    {
      category: 'Shakespeare Monologue',
      entrants: [
        {name: 'Nevaeh Daniel', school: 'Austin East Magnet', category: 'shakespeare', notes: 'winner', best: true},
        {name: 'Asia Chesney', school: 'Austin East Magnet', category: 'shakespeare', notes: 'distinction'},
        {name: 'Brycen Ritchie', school: 'West High School', category: 'shakespeare', notes: 'distinction'}
      ] 
    },
    {
      category: 'Musical Theatre',
      entrants: [
        {name: 'Katelyn Hedrick', school: 'Homeschool', category: 'musical', notes: 'winner'},
        {name: 'Heather Bohan', school: 'Farragut', category: 'musical', notes: 'distinction'},
        {name: 'Ella Trisler', school: 'Catholic', category: 'musical', notes: 'distinction'}
      ] 
    },
    

  ]
}
