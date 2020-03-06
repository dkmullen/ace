import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActingComponent } from './acting/acting.component';
// import { BobComponent } from './events/bob/bob.component';
import { SingerSongwriterComponent } from './singer-songwriter/singer-songwriter.component';
import { SingingComponent } from './singing/singing.component';
import { Acting2020Component } from './classes/acting2020/acting2020.component';

const routes: Routes = [
  { path: 'singing', component: SingingComponent },
  { path: 'acting', component: ActingComponent },
  { path: 'singer-songwriter', component: SingerSongwriterComponent },
  { path: 'theatre-camp', component: Acting2020Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
