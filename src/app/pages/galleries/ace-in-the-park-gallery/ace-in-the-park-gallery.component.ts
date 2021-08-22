import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ace-in-the-park-gallery',
  templateUrl: './ace-in-the-park-gallery.component.html',
  styleUrls: ['./ace-in-the-park-gallery.component.scss']
})
export class AceInTheParkGalleryComponent implements OnInit {

  pics = [];
  picsCol2 = [];

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 4; i += 1 ) {
      this.pics.push(i);
    }
    for (let i = 5; i <= 8; i += 1) {
      this.picsCol2.push(i);
    }
  }

}
