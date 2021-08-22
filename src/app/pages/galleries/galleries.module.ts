import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../modules/material.module';

import { GalleriesRoutingModule } from './galleries-routing.module';
import { SingingGalleryComponent } from './singing/singing-gallery.component';
import { ActingGalleryComponent } from './acting-gallery/acting-gallery.component';
import { PastEventsComponent } from './past-events/past-events.component';
import { PhotoContestComponent } from './photo-contest/photo-contest.component';
import { Singing2020Component } from './singing2020/singing2020.component';
import { AceInTheParkGalleryComponent } from './ace-in-the-park-gallery/ace-in-the-park-gallery.component';


@NgModule({
  declarations: [
    SingingGalleryComponent,
    ActingGalleryComponent,
    PastEventsComponent,
    PhotoContestComponent,
    Singing2020Component,
    AceInTheParkGalleryComponent
  ],
  imports: [
    CommonModule,
    GalleriesRoutingModule,
    MaterialModule,
    FlexLayoutModule

  ]
})
export class GalleriesModule { }
