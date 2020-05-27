import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachingComponent } from './coaching.component';
import { ASmithComponent } from './a-smith/a-smith.component';
import { MLytleComponent } from './m-lytle/m-lytle.component';
import { CLeValleyComponent } from './c-le-valley/c-le-valley.component';
import { CLucienComponent } from './c-lucien/c-lucien.component';
import { JApkingComponent } from './j-apking/j-apking.component';


const routes: Routes = [
  { path: 'coaching', component: CoachingComponent },
  { path: 'anna-smith', component: ASmithComponent },
  { path: 'matt-lytle', component: MLytleComponent },
  { path: 'chelsea-levalley', component: CLeValleyComponent },
  { path: 'courtney-lucien', component: CLucienComponent },      
  { path: 'jay-apking', component: JApkingComponent },      
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachingRoutingModule { }
