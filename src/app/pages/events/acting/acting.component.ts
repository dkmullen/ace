import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acting',
  templateUrl: './acting.component.html',
  styleUrls: ['./acting.component.scss']
})
export class ActingComponent implements OnInit {
  students = [
    { name: 'Grace Ballard', school: 'Maryville High School', category: 'comedic', notes: 'winner' },
    { name: 'Kate Bishop', school: 'Grace Christian Academy', category: 'comedic', notes: 'distinction' },
    { name: 'Kyla Jernigan', school: 'Homeschool', category: 'comedic', notes: 'distinction' },


  ]

  constructor() { }

  ngOnInit() {
  }

}
