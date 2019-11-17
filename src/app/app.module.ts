import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
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


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about/sponsors', component: SponsorsComponent },
  { path: 'about/board', component: BoardComponent },
  { path: 'about/support', component: SupportComponent },
  { path: 'singing', component: SingingComponent },
  { path: 'acting', component: ActingComponent },
  { path: 'battle-of-the-bands', component: BobComponent },
  { path: 'singing-gallery', component: SingingGalleryComponent },
  { path: 'singing-signup', component: SingingSignupComponent }

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
    SingingSignupComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
