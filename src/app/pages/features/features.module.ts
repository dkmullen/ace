import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material.module';

import { VideosComponent } from './videos/videos.component';
import { ShakespeareComponent } from './shakespeare/shakespeare.component';




@NgModule({
  declarations: [
    VideosComponent,
    ShakespeareComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class FeaturesModule { }
