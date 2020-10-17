import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/material.module';

import { AboutRoutingModule } from './about-routing.module';
import { BoardComponent } from './board/board.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { SupportComponent } from './support/support.component';
import { EmailComponent } from './email/email.component';
import { DonorsComponent } from './donors/donors.component';

@NgModule({
  declarations: [
    BoardComponent,
    SponsorsComponent,
    SupportComponent,
    EmailComponent,
    DonorsComponent,
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AboutModule { }
