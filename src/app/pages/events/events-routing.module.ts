import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActingComponent } from './acting/acting.component';
import { SingerSongwriterComponent } from './singer-songwriter/singer-songwriter.component';
import { SingingComponent } from './singing/singing.component';
import { SingingSignupComponent } from './singing/singing-signup/singing-signup.component';
import { InstrumentalContestComponent } from './safeathome/instrumental/instrumental-contest/instrumental-contest.component';
import { PhotographyComponent } from './safeathome/photography/photography.component';
import { WritingComponent } from './safeathome/writing/writing.component';
import { DanceComponent } from './safeathome/dance/dance.component';
import { ShakepeareComponent } from './safeathome/shakepeare/shakepeare.component';
import { IsabellaFransiscoComponent } from './safeathome/writing/isabella-fransisco/isabella-fransisco.component';
import { ElizabethNewmanComponent } from './safeathome/writing/elizabeth-newman/elizabeth-newman.component';
import { NationalComponent } from './national/national.component';
 
const routes: Routes = [
  { path: 'singing', component: SingingComponent },
  { path: 'national/signup', component: SingingSignupComponent },
  { path: 'national', component: NationalComponent },
  { path: 'acting', component: ActingComponent },
  { path: 'singer-songwriter', component: SingerSongwriterComponent },
  { path: 'shakespeare', component: ShakepeareComponent },
  { path: 'instrumental', component: InstrumentalContestComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'writing/first', component: IsabellaFransiscoComponent },
  { path: 'writing/second', component: ElizabethNewmanComponent },
  { path: 'writing', component: WritingComponent },
  { path: 'dance', component: DanceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
