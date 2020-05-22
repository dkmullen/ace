import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachingRoutingModule } from './coaching-routing.module';

import { CoachingComponent } from './coaching.component';
import { ASmithComponent } from './a-smith/a-smith.component';
import { MLytleComponent } from './m-lytle/m-lytle.component';
import { CLeValleyComponent } from './c-le-valley/c-le-valley.component';
import { CLucianComponent } from './c-lucian/c-lucian.component';


@NgModule({
  declarations: [
    CoachingComponent,
    ASmithComponent,
    MLytleComponent,
    CLeValleyComponent,
    CLucianComponent
  ],
  imports: [
    CommonModule,
    CoachingRoutingModule
  ]
})
export class CoachingModule { }
