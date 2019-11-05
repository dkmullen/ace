import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singing-gallery',
  templateUrl: './singing-gallery.component.html',
  styleUrls: ['./singing-gallery.component.scss']
})
export class SingingGalleryComponent implements OnInit {
  pics = [];

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 24; i++) {
      this.pics.push('s' + i);
    }
    console.log(this.pics)
  }

}
