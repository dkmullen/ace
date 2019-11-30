import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from "../../../../../environments/environment";
import { Post } from './acting-team-signup.model';

@Component({
  selector: 'app-acting-team-signup',
  templateUrl: './acting-team-signup.component.html',
  styleUrls: ['./acting-team-signup.component.scss']
})
export class ActingTeamSignupComponent implements OnInit {
  signUpForm: FormGroup;
  submitted = false;
  submitError = false;
  submitMsg = 'Thank you for entering.';
  errorMsg = 'The form was NOT submitted. Check your internet connection.';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        school:           new FormControl(null, [Validators.required]),
        contactName:      new FormControl(null, [Validators.required]),
        contactEmail:     new FormControl(null, [Validators.required, Validators.email]),
        contactPhone:     new FormControl(null, [Validators.required]),
        dramaticName:     new FormControl(null, [Validators.required]),
        dramaticGrade:    new FormControl(null, [Validators.required]),
        comedicName:      new FormControl(null, [Validators.required]),
        comedicGrade:     new FormControl(null, [Validators.required]),
        shakespeareName:  new FormControl(null, [Validators.required]),
        shakespeareGrade: new FormControl(null, [Validators.required]),
        musicalName:      new FormControl(null, [Validators.required]),
        musicalGrade:     new FormControl(null, [Validators.required]),
      }),
    });

    this.signUpForm.setValue({
      userData: {
        school:           '',
        contactName:      '',
        contactEmail:     '',
        contactPhone:     '',
        dramaticName:     '',
        dramaticGrade:    '',
        comedicName:      '',
        comedicGrade:     '',
        shakespeareName:  '',
        shakespeareGrade: '',
        musicalName:      '',
        musicalGrade:     '',
      },
    });
  }

  onSubmit(signUpForm, formDirective) {
    const data = this.signUpForm.value.userData;
    const post: Post = {
      id: null,
      school:           data.school,
      contactName:      data.contactName,
      contactEmail:     data.contactEmail,
      contactPhone:     data.contactPhone,
      dramaticName:     data.dramaticName,
      dramaticGrade:    data.dramaticGrade,
      comedicName:      data.comedicName,
      comedicGrade:     data.comedicGrade,
      shakespeareName:  data.shakespeareName,
      shakespeareGrade: data.shakespeareGrade,
      musicalName:      data.musicalName,
      musicalGrade:     data.musicalGrade
    };
    console.log(post);
    this.http
      .post<{ message: string }>(environment.actingTeamUrl, post)
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
