import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { BoardComponent } from './pages/about/board/board.component';
import { MissionComponent } from './pages/about/mission/mission.component';
import { SponsorsComponent } from './pages/about/sponsors/sponsors.component';
import { SupportComponent } from './pages/about/support/support.component';
import { SingingComponent } from './pages/events/singing/singing.component';
import { ActingComponent } from './pages/events/acting/acting.component';
import { BobComponent } from './pages/events/bob/bob.component';

import { MaterialModule } from './modules/material.module';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about/mission', component: MissionComponent },
  { path: 'about/sponsors', component: SponsorsComponent },
  { path: 'about/board', component: BoardComponent },
  { path: 'about/support', component: SupportComponent },
  { path: 'singing', component: SingingComponent },
  { path: 'acting', component: ActingComponent },
  { path: 'battle-of-the-bands', component: BobComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    BoardComponent,
    MissionComponent,
    SponsorsComponent,
    SupportComponent,
    SingingComponent,
    ActingComponent,
    BobComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
