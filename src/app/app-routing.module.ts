import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PayComponent } from './pages/misc/pay/pay.component';
import { StyleDemoComponent } from './pages/misc/style-demo/style-demo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', loadChildren: () => import ('./pages/about/about.module').then((m) => m.AboutModule)},
  { path: 'events', loadChildren: () => import ('./pages/events/events.module').then((m) => m.EventsModule)},
  { path: 'galleries', loadChildren: () => import ('./pages/galleries/galleries.module').then((m) => m.GalleriesModule)},
  { path: 'pay', component: PayComponent },
  { path: 'style-demo', component: StyleDemoComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
