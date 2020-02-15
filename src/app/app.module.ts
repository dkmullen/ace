import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
import { SingerSongwriterComponent } from './pages/events/singer-songwriter/singer-songwriter.component';
import { VotingDialog } from './pages/events/singer-songwriter/singer-songwriter.component';
import { Singing2020Component } from './pages/galleries/singing2020/singing2020.component';

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
    SingerSongwriterComponent,
    VotingDialog,
    Singing2020Component

  ],
  entryComponents: [VotingDialog],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule // Keep this last so its wildcard route (**) is chosen last, after all other routes fail
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
