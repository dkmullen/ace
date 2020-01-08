import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { BoardComponent } from './pages/about/board/board.component';
import { SponsorsComponent } from './pages/about/sponsors/sponsors.component';
import { SupportComponent } from './pages/about/support/support.component';
import { SingingComponent } from './pages/events/singing/singing.component';
import { ActingComponent } from './pages/events/acting/acting.component';
import { BobComponent } from './pages/events/bob/bob.component';
import { SingingGalleryComponent } from './pages/galleries/singing/singing-gallery.component';

import { MaterialModule } from './modules/material.module';
import { SingingSignupComponent } from './pages/events/singing/singing-signup/singing-signup.component';
import { ActingGalleryComponent } from './pages/galleries/acting-gallery/acting-gallery.component';
import { EmailComponent } from './pages/email/email.component';
import { FooterComponent } from './footer/footer.component';
import { ActingSignupComponent } from './pages/events/acting/acting-signup/acting-signup.component';
import { ActingTeamSignupComponent } from './pages/events/acting/acting-team-signup/acting-team-signup.component';
import { DonorsComponent } from './pages/about/donors/donors.component';
import { PastEventsComponent } from './pages/galleries/past-events/past-events.component';
import { PhotoContestComponent } from './pages/galleries/photo-contest/photo-contest.component';
import { FinalistsComponent } from './pages/events/singing/finalists/finalists.component';
import { SingerSongwriterComponent } from './pages/events/singer-songwriter/singer-songwriter.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'events/singing', component: SingingComponent },
  { path: 'events/acting', component: ActingComponent },
  { path: 'events/singer-songwriter', component: SingerSongwriterComponent },
  { path: 'events/battle-of-the-bands', component: BobComponent },
  { path: 'about/board', component: BoardComponent },
  { path: 'about/donors', component: DonorsComponent },
  { path: 'about/email', component: EmailComponent },
  { path: 'galleries/singing-gallery', component: SingingGalleryComponent },
  { path: 'galleries/acting-gallery', component: ActingGalleryComponent },
  { path: 'galleries/past-events', component: PastEventsComponent },
  { path: 'galleries/2019-photo-contest', component: PhotoContestComponent},
  { path: 'events/singing/finalists', component: FinalistsComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    BoardComponent,
    SponsorsComponent,
    SupportComponent,
    SingingComponent,
    ActingComponent,
    BobComponent,
    SingingGalleryComponent,
    SingingSignupComponent,
    ActingGalleryComponent,
    EmailComponent,
    FooterComponent,
    ActingSignupComponent,
    ActingTeamSignupComponent,
    DonorsComponent,
    PastEventsComponent,
    PhotoContestComponent,
    FinalistsComponent,
    SingerSongwriterComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
