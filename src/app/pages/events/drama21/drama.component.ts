import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drama2021',
  templateUrl: './drama.component.html',
  styleUrls: ['./drama.component.scss']
})
export class Drama2021Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToForm() {
    window.open('https://forms.gle/FEGHmbgfxbcaGPgt7');
    
  }

}
