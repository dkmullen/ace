import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { environment } from '../../../../environments/environment';
import { Post } from './signup.model';

const BACKEND_URL = environment.signupUrl + '/';

@Injectable({ providedIn: 'root' })

export class SignUpService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<{ posts: Post[] }>();

  constructor(private http: HttpClient, private router: Router) {}

  createPost(data, event) {
    const postData = new FormData();
    console.log(data, postData)
    postData.append('event', event)
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
    if (data.image) {
      postData.append('image', data.image, data.name);
    }
    return this.http
    .post<{ message: string, post: Post }>(environment.signupUrl, postData)
  }

  getPosts() {
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

  getPost(id: string) {
    return this.http.get<{
      _id: string;
      name: string;
      email: string;
      phone: string;
      age: number;
      grade: string;
      school: string;
      city?: string;
      state: string;
      videolink: string;
      imagePath: string;
    }>(BACKEND_URL + id);
  }

  updatePost(id, data) {
    let postData: Post | FormData = 
      {
        id: id,
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
        entryType: data.entryType,
        imagePath: data.imagePath
      };
    
    return this.http
      .put(BACKEND_URL + id, postData);
  }

  deletePost(postId: string) {
    this.http.delete(environment.signupUrl + '/' + postId).subscribe(res => {
      console.log(res)
    })
    err => {
      console.log(err)
    }
  }
}
