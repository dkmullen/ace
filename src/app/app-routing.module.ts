import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StyleDemoComponent } from './pages/misc/style-demo/style-demo.component';
import { SignUpFormComponent } from './components/forms/sign-up-form/sign-up-form.component';
import { Singing22VidsComponent } from './pages/events/singing22/vids/singing22-vids/singing22-vids.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', component: Singing22VidsComponent },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./pages/events/events.module').then((m) => m.EventsModule),
  },
  {
    path: 'galleries',
    loadChildren: () =>
      import('./pages/galleries/galleries.module').then(
        (m) => m.GalleriesModule
      ),
  },
  {
    path: 'features',
    loadChildren: () =>
      import('./pages/features/features.module').then((m) => m.FeaturesModule),
  },
  {
    path: 'coaching',
    loadChildren: () =>
      import('./pages/coaching/coaching.module').then((m) => m.CoachingModule),
  },
  { path: 'style-demo', component: StyleDemoComponent },
  { path: 'signup-form', component: SignUpFormComponent },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
