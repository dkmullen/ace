import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardComponent } from './board/board.component';
import { DonorsComponent } from './donors/donors.component';
import { EmailComponent } from './email/email.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  { path: 'mission', component: BoardComponent },
  { path: 'donors', component: DonorsComponent },
  // { path: 'email', component: EmailComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'support', component: SupportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
