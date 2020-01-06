import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Post } from './singer-songwriter.model';

@Component({
  selector: 'app-singer-songwriter',
  templateUrl: './singer-songwriter.component.html',
  styleUrls: ['./singer-songwriter.component.scss']
})
export class SingerSongwriterComponent implements OnInit {
  counters = {
    counter1: 0,
    counter2: 0,
    counter3: 0,
    counter4: 0
  }
  constructor(protected http: HttpClient) { }

  ngOnInit() {
    console.log(this.counters)
  }

  incrementCount(n) {
    this.counters[n]++;
    console.log(this.counters);
    this.onSubmit();
  }

  onSubmit() {
    const post: Post = {
      artist1: this.counters.counter1,
      artist2: this.counters.counter2,
      artist3: this.counters.counter3,
      artist4: this.counters.counter4,
    };
    this.http
    .post<{ message: string }>(environment.singingUrl, post)
    .subscribe(responseData => {
      console.log(responseData);
    },
    err => {
      console.log(err)
    }
    );
  }

}
