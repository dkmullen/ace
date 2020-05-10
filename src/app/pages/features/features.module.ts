import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material.module';

import { VideosComponent } from './videos/videos.component';

@NgModule({
  declarations: [
    VideosComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class FeaturesModule { }
