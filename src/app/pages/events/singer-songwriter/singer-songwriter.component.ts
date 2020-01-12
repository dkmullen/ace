import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Post } from './singer-songwriter.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-singer-songwriter',
  templateUrl: './singer-songwriter.component.html',
  styleUrls: ['./singer-songwriter.component.scss']
})
export class SingerSongwriterComponent implements OnInit {
  videoArray = [];
  constructor(protected dialog: MatDialog) { }

  ngOnInit() {
    this.shuffleArray([

    ]);
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.videoArray = array;

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(VotingDialog, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'voting-dialog',
  templateUrl: 'voting-dialog.html',
})
export class VotingDialog {

  constructor(
    public dialogRef: MatDialogRef<VotingDialog>,
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
