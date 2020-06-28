import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';

interface Post {
  id: string;
  name: string;
  email: string;
  age: number;
  teacher: string;
  classname: string;
  coachemail: string;
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
        classTeacher: 'Jay Apking',
        email: 'jay@aceknox.com',
        classDescription: `
        A weekly <span class="accent-text bold">online</span> class that meets <span class="bold">Mondays</span>, July 6 - August 3,
                  <span class="bold">4pm-5pm EDT</span> on Zoom. The cost is $75 and
                  the class will be limited to four students.
        `
      },
      matt: {
        classTitle: 'From Page to the Stage: Perfecting your Monologue',
        classTeacher: 'Matt Lytle',
        email: 'lytle.matthew@gmail.com',
        classDescription: `
        A weekly <span class="accent-text bold">online</span> class that meets <span class="bold">Tuesdays</span>, June 16 - July 13,
                  <span class="bold">5pm-6:30pm EDT</span> on Zoom. The cost is $75 and
                  the class will be limited to four students.
        `
      },
      courtney: {
        classTitle: 'From Page to the Stage: Perfecting your Monologue',
        classTeacher: 'Courtney Lucien',
        email: 'cjlucien@gmail.com',
        classDescription: `
        A weekly <span class="accent-text bold">online</span> class that meets <span class="bold">Saturdays</span>, June 20, 27, July 11, 18 and 25,
                  <span class="bold">11am-12:30pm EDT</span> on Zoom. The cost is $75 and
                  the class will be limited to four students.
        `
      },
      anna: {
        classTitle: 'Musical Theatre',
        classTeacher: 'Anna Catherine Smith',
        email: 'msannasmithhh@gmail.com',
        classDescription: `
        A weekly <span class="accent-text bold">online</span> class that meets <span class="bold">Saturdays</span>, July 6 - August 3,
                  <span class="bold">6:30-8pm EDT</span> on Zoom. The cost is $75 and
                  the class will be limited to four students.
        `
      },
      aleah: {
        classTitle: 'Musical Theatre',
        classTeacher: 'Aleah Vassell',
        email: 'aleah@aceknox.com',
        classDescription: `
        A weekly <span class="accent-text bold">online</span> class that meets <span class="bold">Saturdays</span>, July 7 - August 4,
                  <span class="bold">2pm-3pm EDT</span> on Zoom. The cost is $75 and
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
        age: new FormControl(null, [Validators.required, Validators.min(5)]),
        teacher: new FormControl(this.classInfo.classTeacher),
        classname: new FormControl(this.classInfo.classTitle),
        coachemail: new FormControl(this.classInfo.email)
      })
    });

    this.signupForm.setValue({
      userData: {
        name: '',
        email: '',
        age: null,
        teacher: this.classInfo.classTeacher,
        classname: this.classInfo.classTitle,
        coachemail: this.classInfo.email
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
      age: data.age,
      teacher: data.teacher,
      classname: data.classname,
      coachemail: data.coachemail
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
