import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singing-gallery',
  templateUrl: './singing-gallery.component.html',
  styleUrls: ['./singing-gallery.component.scss']
})
export class SingingGalleryComponent implements OnInit {
  pics = [];
  picsCol2 = [];
  picsCol3 = [];

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 8; i++) {
      this.pics.push('s' + i);
    }
    for (let i = 9; i <= 16; i++) {
      this.picsCol2.push('s' + i);
    }
    for (let i = 17; i <= 24; i++) {
      this.picsCol3.push('s' + i);
    }
  }

}
