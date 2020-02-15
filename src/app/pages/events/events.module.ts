import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { EventsRoutingModule } from './events-routing.module';
import { SingingComponent } from './singing/singing.component';
import { ActingComponent } from './acting/acting.component';
import { SingerSongwriterComponent } from './singer-songwriter/singer-songwriter.component';
import { VotingDialog } from './singer-songwriter/singer-songwriter.component';
import { BobComponent } from './bob/bob.component';
import { SingingSignupComponent } from './singing/singing-signup/singing-signup.component';
import { ActingSignupComponent } from './acting/acting-signup/acting-signup.component';
import { ActingTeamSignupComponent } from './acting/acting-team-signup/acting-team-signup.component';

@NgModule({
  declarations: [ 
    SingingComponent, 
    ActingComponent, 
    SingerSongwriterComponent,
    VotingDialog, 
    BobComponent,
    SingingSignupComponent,
    ActingSignupComponent,
    ActingTeamSignupComponent
  ],
  entryComponents: [VotingDialog],
  imports: [
    CommonModule,
    EventsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class EventsModule { }
