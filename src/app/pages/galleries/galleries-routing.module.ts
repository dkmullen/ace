import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingingGalleryComponent } from './singing/singing-gallery.component';
import { ActingGalleryComponent } from './acting-gallery/acting-gallery.component';
import { PastEventsComponent } from './past-events/past-events.component';
import { PhotoContestComponent } from './photo-contest/photo-contest.component';
import { Singing2020Component } from './singing2020/singing2020.component';

const routes: Routes = [
  { path: 'singing-gallery', component: SingingGalleryComponent },
  { path: 'singing-gallery-2020', component: Singing2020Component },
  { path: 'acting-gallery', component: ActingGalleryComponent },
  { path: 'past-events', component: PastEventsComponent },
  { path: '2019-photo-contest', component: PhotoContestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleriesRoutingModule { }
