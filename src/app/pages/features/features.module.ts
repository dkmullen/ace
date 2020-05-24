import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material.module';

import { FeaturesRoutingModule } from './features-routing.module';
import { VideosComponent } from './videos/videos.component';

@NgModule({
  declarations: [
    VideosComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
