import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../../environments/environment';
import { Post } from './class-signup.model';

@Component({
  selector: 'app-acting2020',
  templateUrl: './acting2020.component.html',
  styleUrls: ['./acting2020.component.scss']
})
export class Acting2020Component implements OnInit {
  signUpForm: FormGroup;
  submitted = false;
  submitError = false;
  submitMsg = 'Thank you for signing up. You should receive an email confirmation.';
  errorMsg = 'The form was NOT submitted. Check your internet connection.';
  waiting = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        parent: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        phone: new FormControl(null, [Validators.required]),
        student1Name: new FormControl(null, [Validators.required]),
        student1Age: new FormControl(null),
        student2Name: new FormControl(null),
        student2Age: new FormControl(null),
        student3Name: new FormControl(null),
        student3Age: new FormControl(null),
        student4Name: new FormControl(null),
        student4Age: new FormControl(null)
      })
    });

    this.signUpForm.setValue({
      userData: {
        parent: '',
        email: '',
        phone: '',
        student1Name: '',
        student1Age: null,
        student2Name: '',
        student2Age: null,
        student3Name: '',
        student3Age: null,
        student4Name: '',
        student4Age: null,
      }
    });
  }

  onSubmit(signUpForm, formDirective) {
    this.waiting = true;
    this.submitError = false;
    const data = this.signUpForm.value.userData;
    const post: Post = {
      id: null,
      parent: data.parent,
      email: data.email,
      phone: data.phone,
      student1: {
        name: data.student1Name,
        age: data.student1Age,
      },
      student2: {
        name: data.student2Name,
        age: data.student2Age,
      },
      student3: {
        name: data.student3Name,
        age: data.student3Age,
      },
      student4: {
        name: data.student4Name,
        age: data.student4Age,
      },
    };
    console.log(post);
    this.http
      .post<{ message: string }>(environment.theatreClassUrl, post)
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
