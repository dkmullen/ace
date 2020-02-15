import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActingComponent } from './pages/events/acting/acting.component';
import { BobComponent } from './pages/events/bob/bob.component';
import { SingingGalleryComponent } from './pages/galleries/singing/singing-gallery.component';
import { ActingGalleryComponent } from './pages/galleries/acting-gallery/acting-gallery.component';
import { EmailComponent } from './pages/email/email.component';
import { DonorsComponent } from './pages/about/donors/donors.component';
import { PastEventsComponent } from './pages/galleries/past-events/past-events.component';
import { PhotoContestComponent } from './pages/galleries/photo-contest/photo-contest.component';
import { SingerSongwriterComponent } from './pages/events/singer-songwriter/singer-songwriter.component';
import { Singing2020Component } from './pages/galleries/singing2020/singing2020.component';
import { HomeComponent } from './pages/home/home.component';
import { BoardComponent } from './pages/about/board/board.component';
import { SingingComponent } from './pages/events/singing/singing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'events/singing', component: SingingComponent },
  { path: 'events/acting', component: ActingComponent },
  { path: 'events/singer-songwriter', component: SingerSongwriterComponent },
  { path: 'events/battle-of-the-bands', component: BobComponent },
  { path: 'about/board', component: BoardComponent },
  { path: 'about/donors', component: DonorsComponent },
  { path: 'about/email', component: EmailComponent },
  { path: 'galleries/singing-gallery', component: SingingGalleryComponent },
  { path: 'galleries/singing-gallery-2020', component: Singing2020Component },
  { path: 'galleries/acting-gallery', component: ActingGalleryComponent },
  { path: 'galleries/past-events', component: PastEventsComponent },
  { path: 'galleries/2019-photo-contest', component: PhotoContestComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
