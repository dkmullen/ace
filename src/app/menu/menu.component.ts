import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public wide = true;

  constructor() { }

  ngOnInit() {
    window.innerWidth > 767 ? this.wide = true : this.wide = false;
    this.getWidth();
  }

  getWidth() {
    window.onresize = () => {
      window.innerWidth > 767 ? this.wide = true : this.wide = false;
    }
  }
}
