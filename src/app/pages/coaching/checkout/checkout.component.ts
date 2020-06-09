import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';

interface Post {
  id: string;
  name: string;
  email: string;
  // phone: string;
  age: number;
  teacher: string;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;
  submitError = false;
  submitMsg = 'Thank you for signing up.';
  errorMsg = 'The form was NOT submitted. Check your internet connection.';
  waiting = false;
  classInfo: any;

  data = [
    {
      jay: {
        classTitle: 'Shakespeare Monologues Made Easy',
        classTeacher: 'Coach: Jay Apking',
        classDescription: `
        A weekly <span class="accent-text bold">online</span> class that meets <span class="bold">Mondays</span>, July 6 - August 3,
                  <span class="bold">4pm-5pm EDT</span> on Zoom. The cost is <span class="accent-text bold">$75</span> and
                  the class will be limited to four students.
        `
      },
      matt: {
        classTitle: 'Shakespeare Monologues Made Easy',
        classTeacher: 'Coach: Matt Lytle',
        classDescription: `
        A weekly <span class="accent-text bold">online</span> class that meets <span class="bold">Mondays</span>, July 6 - August 3,
                  <span class="bold">4pm-5pm EDT</span> on Zoom. The cost is <span class="accent-text bold">$75</span> and
                  the class will be limited to four students.
        `
      },
      courtney: {
        classTitle: 'Shakespeare Monologues Made Easy',
        classTeacher: 'Coach: Courtney Lucien',
        classDescription: `
        A weekly <span class="accent-text bold">online</span> class that meets <span class="bold">Mondays</span>, July 6 - August 3,
                  <span class="bold">4pm-5pm EDT</span> on Zoom. The cost is <span class="accent-text bold">$75</span> and
                  the class will be limited to four students.
        `
      },
    }
  ]

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.classInfo = this.data[0][id];
    })
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        name: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        // phone: new FormControl(null, [Validators.required]),
        age: new FormControl(null, [Validators.required, Validators.min(5)]),
        teacher: new FormControl(this.classInfo.classTeacher)
      })
    });

    this.signupForm.setValue({
      userData: {
        name: '',
        email: '',
        // phone: '',
        age: null,
        teacher: ''
      }
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
      // phone: data.phone,
      age: data.age,
      teacher: data.teacher
    };
    this.http
    .post<{ message: string }>(environment.shakespeareUrl, post)
    .subscribe(responseData => {
      console.log(responseData);
      formDirective.resetForm();
      this.signupForm.reset();
      this.submitted = true;
      this.submitError = false;
      this.waiting = false;
      window.open('https://aceknox.com/coaching/pay', '_self');
    },
    err => {
      console.error(err.status, err.statusText);
      this.submitted = false;
      this.submitError = true;
      this.waiting = false;
    }
    );
  }
  

}
