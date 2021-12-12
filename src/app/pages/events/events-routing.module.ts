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
import { Drama2021Component } from './drama21/drama.component';
import { Drama22Component } from './drama22/drama22.component';
import { Singing21Component } from './2021/singing21/singing21.component';
 
const routes: Routes = [
  { path: 'singing', component: SingingComponent },
  { path: 'national/signup', component: SingingSignupComponent },
  { path: 'singing2021', component: NationalComponent },
  { path: 'drama2021', component: Drama2021Component },
  { path: 'drama2022', component: Drama22Component },
  { path: 'singing21', component: Singing21Component },
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
