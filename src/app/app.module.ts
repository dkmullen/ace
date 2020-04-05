import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MaterialModule } from './modules/material.module';
import { AppRoutingModule } from './app-routing.module';
import { EventsModule } from './pages/events/events.module';
import { GalleriesModule } from './pages/galleries/galleries.module';
import { AboutModule } from './pages/about/about.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PayComponent } from './pages/misc/pay/pay.component';
import { StyleDemoComponent } from './pages/misc/style-demo/style-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    PayComponent,
    StyleDemoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    EventsModule,
    GalleriesModule,
    AboutModule,
    AppRoutingModule // Keep this last so its wildcard route (**) is chosen last, after all other routes fail
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
