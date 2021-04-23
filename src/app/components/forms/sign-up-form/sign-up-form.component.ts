import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { mimeType } from '../../../validators/mime-type-validator';
import { environment } from '../../../../environments/environment';
import { Post } from './signup.model';
import { SignUpService } from './sign-up.service';

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
  event = 'singing'; // Experimenting with this being set to mw to define what we are signing up for

  constructor(private http: HttpClient, private signupService: SignUpService) { }

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
          // validators: [Validators.required],
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

  onSubmit() {
    this.waiting = true;
    this.submitError = false;
    const data = this.signupForm.value;

    this.signupService.createPost(data, this.event)
    .subscribe(responseData => {
      console.log(responseData)
      
      this.myPost = responseData;
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

  onGetAll() {
    this.signupService.getPosts();
  }

  onGetOne(id: string) {
    this.signupService.getPost(id).subscribe(res => {
      console.log(res)
    })
  }

  onEdit() {
    this.waiting = true;
    this.submitError = false;
    const data = this.signupForm.value;

    this.signupService.updatePost('5fcd821f6258f6ddde8daa7f', data)
    .subscribe(responseData => {
      
      this.myPost = responseData;
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

  onDelete(postId: string) {
    this.signupService.deletePost(postId);
  }

}
