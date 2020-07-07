import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { EventsRoutingModule } from './events-routing.module';
import { SingingComponent } from './singing/singing.component';
import { ActingComponent } from './acting/acting.component';
import { SingerSongwriterComponent } from './singer-songwriter/singer-songwriter.component';
import { VotingDialog } from './singer-songwriter/singer-songwriter.component';
import { SingingSignupComponent } from './singing/singing-signup/singing-signup.component';
import { ActingSignupComponent } from './acting/acting-signup/acting-signup.component';
import { ActingTeamSignupComponent } from './acting/acting-team-signup/acting-team-signup.component';
import { InstrumentalComponent } from './safeathome/instrumental/instrumental.component';
import { PhotographyComponent } from './safeathome/photography/photography.component';
import { WritingComponent } from './safeathome/writing/writing.component';
import { InputComponent } from '../../components/input/input.component';
import { DanceComponent } from './safeathome/dance/dance.component';
import { InstrumentalContestComponent } from './safeathome/instrumental/instrumental-contest/instrumental-contest.component';
import { ShakepeareComponent } from './safeathome/shakepeare/shakepeare.component';
import { IsabellaFransiscoComponent } from './safeathome/writing/isabella-fransisco/isabella-fransisco.component';
import { ElizabethNewmanComponent } from './safeathome/writing/elizabeth-newman/elizabeth-newman.component';
import { NationalComponent } from './national/national.component';

@NgModule({
  declarations: [
    SingingComponent,
    ActingComponent,
    SingerSongwriterComponent,
    VotingDialog,
    SingingSignupComponent,
    ActingSignupComponent,
    ActingTeamSignupComponent,
    InstrumentalComponent,
    PhotographyComponent,
    WritingComponent,
    DanceComponent,
    InputComponent,
    InstrumentalContestComponent,
    ShakepeareComponent,
    IsabellaFransiscoComponent,
    ElizabethNewmanComponent,
    NationalComponent
  ],
  entryComponents: [VotingDialog],
  imports: [
    CommonModule,
    EventsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule
  ]
})
export class EventsModule { }
