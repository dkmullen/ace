import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Post } from './singing-signup.model';

@Component({
  selector: 'app-singing-signup',
  templateUrl: './singing-signup.component.html',
  styleUrls: ['./singing-signup.component.scss']
})
export class SingingSignupComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'name': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'phone': new FormControl(null, [Validators.required]),
        'age': new FormControl(null, [Validators.required, Validators.min(5)]),
        'grade': new FormControl(null, [Validators.required]),
        'school': new FormControl(null, [Validators.required]),
        'rising': new FormControl(null),
        'individualVocal': new FormControl(null),
        'individualInstrumental': new FormControl(null),
        'group': new FormControl(null),
      }),
      // 'gender': new FormControl('male'),
      // 'hobbies': new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );

    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );

    this.signupForm.setValue({
      'userData': {
        'name': '',
        'email': '',
        'phone': '',
        'age': null,
        'grade': '',
        'school': '',
        'rising': true,
        'individualVocal': false,
        'individualInstrumental': true,
        'group': false
      },
      // 'gender': 'male',
      // 'hobbies': []
    });
    this.signupForm.patchValue({
      'userData': {
        'name': '',
        'email': '',
        'phone': '',
        'age': null,
        'grade': '',
        'school': '',
        'rising': true,
        'individualVocal': false,
        'individualInstrumental': true,
        'group': false
      }
    });
  }

  onSubmit() {
    // console.log(this.signupForm.value.userData);
    const data = this.signupForm.value.userData;
    const post: Post = {
      id: null,
      name: data.name,
      email: data.email,
      phone: data.phone,
      age: data.age,
      grade: data.grade,
      school: data.school,
      rising: data.rising,
      individualVocal: data.individualVocal,
      individualInstrumental: data.individualInstrumental,
      group: data.group
    };
    this.http
    .post<{ message: string }>("http://localhost:3000/api/posts", post)
    .subscribe(responseData => {
      console.log(responseData.message);
    });
    // this.signupForm.reset();
  }

  // onAddHobby() {
  //   const control = new FormControl(null, Validators.required);
  //   (<FormArray>this.signupForm.get('hobbies')).push(control);
  // }

  // forbiddenNames(control: FormControl): {[s: string]: boolean} {
  //   if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
  //     return {'nameIsForbidden': true};
  //   }
  //   return null;
  // }

  // forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
  //   const promise = new Promise<any>((resolve, reject) => {
  //     setTimeout(() => {
  //       if (control.value === 'test@test.com') {
  //         resolve({'emailIsForbidden': true});
  //       } else {
  //         resolve(null);
  //       }
  //     }, 1500);
  //   });
  //   return promise;
  // }

}
