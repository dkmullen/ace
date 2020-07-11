import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { Post } from './signup.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;
  submitError = false;
  submitMsg = 'Thank you for entering.';
  errorMsg = 'The form was NOT submitted. Check your internet connection.';
  waiting = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        name: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        phone: new FormControl(null, [Validators.required]),
        age: new FormControl(null, [Validators.required, Validators.min(5)]),
        grade: new FormControl(null, [Validators.required]),
        school: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        state: new FormControl(null, [Validators.required]),
        videolink: new FormControl(null, [Validators.required]),
        musical: new FormControl(null),
        monologue: new FormControl(null),
        // individualInstrumental: new FormControl(null),
        // group: new FormControl(null),
      }),
    });

    this.signupForm.setValue({
      userData: {
        name: '',
        email: '',
        phone: '',
        age: null,
        grade: '',
        school: '',
        city: '',
        state: '',
        videolink: '',
        musical: false,
        monologue: false,
        // individualInstrumental: true,
        // group: false
      },
    });
  }

  onSubmit(signupForm, formDirective) {
    this.waiting = true;
    this.submitError = false;
    const data = this.signupForm.value.userData;
    const post: Post = {
      id: null,
      name: data.name,
      email: data.email,
      phone: data.phone,
      age: data.age,
      grade: data.grade,
      school: data.school,
      city: data.city,
      state: data.state,
      videolink: data.videolink,
      musical: data.musical,
      monologue: data.monologue,
      // individualInstrumental: data.individualInstrumental,
      // group: data.group
    };
    this.http
    .post<{ message: string }>(environment.nationalUrl, post)
    .subscribe(responseData => {
      formDirective.resetForm();
      this.signupForm.reset();
      this.submitted = true;
      this.submitError = false;
      this.waiting = false;
    },
    err => {
      this.submitted = false;
      this.submitError = true;
      this.waiting = false;
    }
    );
  }

}
