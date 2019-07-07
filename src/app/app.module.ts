import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { BrandingComponent } from './branding/branding.component';
import { HomeComponent } from './pages/home/home.component';
import { BoardComponent } from './pages/about/board/board.component';
import { MissionComponent } from './pages/about/mission/mission.component';
import { SponsorsComponent } from './pages/about/sponsors/sponsors.component';
import { SupportComponent } from './pages/about/support/support.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about/mission', component: MissionComponent },
  { path: 'about/sponsors', component: SponsorsComponent },
  { path: 'about/board', component: BoardComponent },
  { path: 'about/support', component: SupportComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BrandingComponent,
    HomeComponent,
    BoardComponent,
    MissionComponent,
    SponsorsComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
