import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PayComponent } from './pages/misc/pay/pay.component';
import { StyleDemoComponent } from './pages/misc/style-demo/style-demo.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', loadChildren: () => import ('./pages/about/about.module').then((m) => m.AboutModule)},
  { path: 'events', loadChildren: () => import ('./pages/events/events.module').then((m) => m.EventsModule)},
  { path: 'galleries', loadChildren: () => import ('./pages/galleries/galleries.module').then((m) => m.GalleriesModule)},
  { path: 'features', loadChildren: () => import ('./pages/features/features.module').then((m) => m.FeaturesModule)},
  { path: 'pay', component: PayComponent },
  { path: 'style-demo', component: StyleDemoComponent },
  { path: 'form', component: FormComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
