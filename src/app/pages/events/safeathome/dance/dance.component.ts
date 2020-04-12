import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../../environments/environment';
import { Post } from '../saferathome.model';

@Component({
  selector: 'app-dance',
  templateUrl: './dance.component.html',
  styleUrls: ['../saferathome.scss']
})
export class DanceComponent implements OnInit {
  signUpForm: FormGroup;
  submitted = false;
  submitError = false;
  submitMsg = 'Thank you for entering.';
  errorMsg = 'The form was NOT submitted. Check your internet connection.';
  waiting = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        name: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        age: new FormControl(null, [Validators.required, Validators.min(5)]),
        grade: new FormControl(null, [Validators.required]),
        school: new FormControl(null, [Validators.required]),
        link: new FormControl(null, [Validators.required]),
      }),
    });

    this.signUpForm.setValue({
      userData: {
        name: '',
        email: '',
        age: null,
        grade: '',
        school: '',
        link: ''
      },
    });
  }

  onSubmit(signUpForm, formDirective) {
    this.waiting = true;
    this.submitError = false;
    const data = this.signUpForm.value.userData;
    const post: Post = {
      id: null,
      name: data.name,
      email: data.email,
      age: data.age,
      grade: data.grade,
      school: data.school,
      link: data.link
    };
    console.log(post);
    this.http
      .post<{ message: string }>(environment.danceUrl, post)
      .subscribe(responseData => {
        this.waiting = false;
        formDirective.resetForm();
        this.signUpForm.reset();
        this.submitted = true;
        this.submitError = false;
      },
      err => {
        this.waiting = false;
        this.submitted = false;
        this.submitError = true;
      }
    );
  }

}
