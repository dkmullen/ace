import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachingComponent } from './coaching.component';
import { ASmithComponent } from './a-smith/a-smith.component';
import { MLytleComponent } from './m-lytle/m-lytle.component';
import { CLeValleyComponent } from './c-le-valley/c-le-valley.component';
import { CLucianComponent } from './c-lucian/c-lucian.component';


const routes: Routes = [
  { path: 'coaching', component: CoachingComponent },
  { path: 'anna-smith', component: ASmithComponent },
  { path: 'matt-lytle', component: MLytleComponent },
  { path: 'chelsea-levalley', component: CLeValleyComponent },
  { path: 'courtney-lucian', component: CLucianComponent },      
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachingRoutingModule { }
