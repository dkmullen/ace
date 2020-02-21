import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', loadChildren: () => import ('./pages/about/about.module').then((m) => m.AboutModule)},
  { path: 'events', loadChildren: () => import ('./pages/events/events.module').then((m) => m.EventsModule)},
  { path: 'galleries', loadChildren: () => import ('./pages/galleries/galleries.module').then((m) => m.GalleriesModule)},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
