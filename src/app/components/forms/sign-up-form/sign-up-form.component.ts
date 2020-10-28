import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { mimeType } from '../../../validators/mime-type-validator';
import { environment } from '../../../../environments/environment';
import { Post } from './signup.model';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;
  submitError = false;
  submitMsg = 'Thank you for entering.';
  errorMsg = 'The form was NOT submitted. Check your internet connection.';
  waiting = false;
  imagePreview: string;
  myPost: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
        name: new FormControl(null, [Validators.required]),
        email: new FormControl(null),
        phone: new FormControl(null),
        age: new FormControl(null, [Validators.required, Validators.min(5)]),
        grade: new FormControl(null),
        school: new FormControl(null),
        city: new FormControl(null),
        state: new FormControl(null),
        videolink: new FormControl(null),
        entryType: new FormControl(null),
        image: new FormControl(null, {
          validators: [Validators.required],
          asyncValidators: [mimeType]
        })
    });

    this.signupForm.setValue({
        name: '',
        email: '',
        phone: '',
        age: null,
        grade: '',
        school: '',
        city: '',
        state: '',
        videolink: '',
        entryType: '',
        image: ''
    });
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({image: file});
    this.signupForm.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSubmit(signupForm, formDirective) {
    this.waiting = true;
    this.submitError = false;
    const data = this.signupForm.value;
    const postData = new FormData();
    console.log(data)
    postData.append('name', data.name);
    postData.append('age', data.age);
    postData.append('email', data.email);
    postData.append('phone', data.phone);
    postData.append('grade', data.grade);
    postData.append('school', data.school);
    postData.append('city', data.city);
    postData.append('state', data.state);
    postData.append('videolink', data.videolink);
    postData.append('entryType', data.entryType);
    postData.append('image', data.image, data.name);
    this.http
    .post<{ message: string, post: Post }>(environment.signupUrl, postData)
    .subscribe(responseData => {
      
      this.myPost = responseData;
      console.log(this.myPost)
      formDirective.resetForm();
      this.signupForm.reset();
      this.submitted = true;
      this.submitError = false;
      this.waiting = false;
    },
    err => {
      console.log(err)
      this.submitted = false;
      this.submitError = true;
      this.waiting = false;
    }
    );
  }

  onGet() {
    this.http
    .get<{ message: string, posts: any }>(environment.signupUrl)
    .pipe(
      map((postData) => {
        return postData.posts.map(post => {
          return {
            id: post._id,
            name: post.name,
            email: post.email,
            phone: post.phone,
            age: post.age,
            grade: post.grade,
            school: post.school,
            city: post.city,
            state: post.state,
            videolink: post.videolink,
            musical: post.musical,
            monologue: post.monologue,
            entryType: post.entryType,
            imagePath: post.imagePath
          }
        })
      })
    )
    .subscribe(postData => {
      console.log(postData)
    }),

    
    err => {
      console.log(err)
    }
  }

}
