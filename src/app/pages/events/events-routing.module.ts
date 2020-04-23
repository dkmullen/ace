import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActingComponent } from './acting/acting.component';
// import { BobComponent } from './events/bob/bob.component';
import { SingerSongwriterComponent } from './singer-songwriter/singer-songwriter.component';
import { SingingComponent } from './singing/singing.component';
import { Acting2020Component } from './classes/acting2020/acting2020.component';
import { InstrumentalContestComponent } from './safeathome/instrumental/instrumental-contest/instrumental-contest.component';
import { PhotographyComponent } from './safeathome/photography/photography.component';
import { WritingComponent } from './safeathome/writing/writing.component';
import { DanceComponent } from './safeathome/dance/dance.component';
import { InstrumentalComponent } from './safeathome/instrumental/instrumental.component';
import { ShakepeareComponent } from './safeathome/shakepeare/shakepeare.component';

const routes: Routes = [
  { path: 'singing', component: SingingComponent },
  { path: 'acting', component: ActingComponent },
  { path: 'singer-songwriter', component: SingerSongwriterComponent },
  // { path: 'theatre-camp', component: Acting2020Component },
  { path: 'shakespeare', component: ShakepeareComponent },
  { path: 'instrumental', component: InstrumentalContestComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'writing', component: WritingComponent },
  { path: 'dance', component: DanceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
