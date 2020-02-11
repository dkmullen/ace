import { Component } from '@angular/core';

@Component({
  selector: 'app-singing',
  templateUrl: './singing.component.html',
  styleUrls: ['./singing.component.scss']
})
export class SingingComponent { 
  categories = [
    {
      category: 'Rising Star',
      entrants: [
        { name: 'Sophia Comerford', school: 'Sacred Heart', grade: '8th'},
        { name: 'Ansley Hart', school: 'Homeschool', grade: '8th'},
        { name: 'Ansley Joy Finchum', school: 'Northview Jr.', grade: '8th'},
        { name: 'Sophia Newton', school: 'Grace Christian', grade: '8th'},
        { name: 'Joey Nieman', school: 'Farragut', grade: '6th', notes: 'winner'},
        { name: 'Christopher-Lawson Palmer', school: 'Homeschool', grade: '8th'}
      ]
    },
    {
      category: 'Musical Theatre',
      entrants: [
        { name: 'Meredith Bishop', school: 'Sacred Heart'},
        { name: 'Heather Bohan', school: 'Farragut'},
        { name: 'Valli Comstock', school: 'Heritage'},
        { name: 'Wesley Keegan Stump', school: 'Bearden'},
        { name: 'Marian Vacaliuc', school: 'Oak Ridge', notes: 'winner'},
        { name: 'Abigail Waldroup', school: 'Bearden'}
      ]
    },
    {
      category: 'Open Singing',
      entrants: [
        { name: 'Heather Bohan', school: 'Farragut'},
        { name: 'Mary Claire Carter', school: 'Farragut'},
        { name: 'Hope Creech', school: 'West', notes: 'audience'},
        { name: 'Katelyn Hedrick', school: 'Homeschool'},
        { name: 'Isabella Murrell', school: 'Grace Christian'},
        { name: 'Noah Schanz', school: 'Bearden', notes: 'winner'}
      ]
    },
    {
      category: 'Singing Instrumental',
      entrants: [
        { name: 'Sarah Hepler', school: 'Oak Ridge'},
        { name: 'Connor Kelly', school: 'Homeschool', notes: 'winner'},
        { name: 'Maddie McKellar', school: 'Homeschool'},
        { name: 'Addie Peterson', school: 'Grace Christian'},
        { name: 'Ella Pinchok', school: 'Farragut'},
        { name: 'Sophie Susano', school: 'Catholic'}
      ]
    }
  ]
}
