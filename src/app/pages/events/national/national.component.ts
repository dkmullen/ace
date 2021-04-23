import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-national',
  templateUrl: './national.component.html',
  styleUrls: ['./national.component.scss']
})
export class NationalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToForm() {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd4rRO8rFFRMMEdxmzjFkGVPzgZa_hQfdwMQTDFJApq3q0Xpg/viewform?usp=sf_link');
    
  }

}
