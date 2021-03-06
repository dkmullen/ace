import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachingComponent } from './coaching.component';
import { ASmithComponent } from './a-smith/a-smith.component';
import { MLytleComponent } from './m-lytle/m-lytle.component';
import { CLucienComponent } from './c-lucien/c-lucien.component';
import { JApkingComponent } from './j-apking/j-apking.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PayComponent } from './pay/pay.component';

const routes: Routes = [
  { 
    path: 'coaching', 
    children: [
      {
      path: '',
      component: CoachingComponent
      },
      {
        path: 'checkout/:id',
        component: CheckoutComponent
      }
    ]
  },
  { path: 'anna-smith', component: ASmithComponent },
  { path: 'matt-lytle', component: MLytleComponent },
  { path: 'courtney-lucien', component: CLucienComponent },      
  { path: 'jay-apking', component: JApkingComponent },
  { path: 'pay', component: PayComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachingRoutingModule { }
