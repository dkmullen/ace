import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-timeslots',
  templateUrl: './timeslots.component.html',
  styleUrls: ['./timeslots.component.scss'],
})
export class TimeslotsComponent implements OnInit {
  sortedList = [];
  selectedList = [];
  slOne = [];
  slTwo = [];
  name = '';
  submitting = false;
  missingInfo = false;
  finished = false;
  loading = false;
  errorState = false;

  constructor() {}

  ngOnInit(): void {
    this.loading = true;
    fetch(environment.timesUrl, {
      method: 'GET',
      headers: {
        'x-api-key': environment.timesApiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.forEach((item) => {
          item.id = parseInt(item.id);
          item.selected = false;
        });
        this.sortedList = data.sort((a, b) => (a.id > b.id ? 1 : -1));
        this.slOne = this.sortedList.slice(0, 14);
        this.slTwo = this.sortedList.slice(14, 28);
        this.loading = false;
      })
      .catch((error) => {
        console.error(error);
        this.errorState = true;
        this.loading = false;
      });
  }
  onSubmit() {
    let selectedList = [];
    this.missingInfo = false;
    this.submitting = true;
    this.sortedList.forEach((i) => {
      if (i.selected) {
        selectedList.push(i);
      }
    });
    if (selectedList.length === 0 || !this.name) {
      this.missingInfo = true;
      this.submitting = false;
    } else {
      let times = '';
      selectedList.forEach((item) => {
        times += item.time + ' ';
      });
      this.errorState = false;
      fetch(environment.timesUrl, {
        method: 'POST',
        headers: {
          'x-api-key': environment.timesApiKey,
        },
        body: JSON.stringify({ name: this.name, times: times }),
      })
        .then((response) => {
          console.log(response);
          this.finished = true;
          this.submitting = false;
        })
        .catch((error) => {
          console.error(error);
          this.errorState = true;
        });

      selectedList.forEach((item) => {
        fetch(environment.timesUrl, {
          method: 'PUT',
          headers: {
            'x-api-key': environment.timesApiKey,
          },
          body: JSON.stringify({ id: item.id.toString() }),
        })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
      });
    }
  }
}
