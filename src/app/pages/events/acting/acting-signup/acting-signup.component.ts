import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from "../../../../../environments/environment";
import { Post } from './acting-signup.model';

@Component({
  selector: 'app-acting-signup',
  templateUrl: './acting-signup.component.html',
  styleUrls: ['./acting-signup.component.scss']
})
export class ActingSignupComponent implements OnInit {
  signUpForm: FormGroup;
  submitted = false;
  submitError = false;
  submitMsg = 'Thank you for entering.';
  errorMsg = 'The form was NOT submitted. Check your internet connection.';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        name: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        phone: new FormControl(null, [Validators.required]),
        age: new FormControl(null, [Validators.required, Validators.min(5)]),
        grade: new FormControl(null, [Validators.required]),
        school: new FormControl(null, [Validators.required]),
        dramaticMonologue: new FormControl(null),
        comedicMonologue: new FormControl(null),
        shakespeareMonologue: new FormControl(null),
        musical: new FormControl(null),
      }),
    });

    this.signUpForm.setValue({
      userData: {
        name: '',
        email: '',
        phone: '',
        age: null,
        grade: '',
        school: '',
        dramaticMonologue: true,
        comedicMonologue: false,
        shakespeareMonologue: true,
        musical: false
      },
    });
  }

  onSubmit(signUpForm, formDirective) {
    const data = this.signUpForm.value.userData;
    const post: Post = {
      id: null,
      name: data.name,
      email: data.email,
      phone: data.phone,
      age: data.age,
      grade: data.grade,
      school: data.school,
      dramaticMonologue: data.dramaticMonologue,
      comedicMonologue: data.comedicMonologue,
      shakespeareMonologue: data.shakespeareMonologue,
      musical: data.musical
    };
    console.log(post);
    this.http
      .post<{ message: string }>(environment.actingUrl, post)
      .subscribe(responseData => {
        formDirective.resetForm();
        this.signUpForm.reset();
        this.submitted = true;
        this.submitError = false;
      },
      err => {
        this.submitted = false;
        this.submitError = true;
      }
    );
  }

}
