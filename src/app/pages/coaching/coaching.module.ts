import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoachingRoutingModule } from './coaching-routing.module';

import { CoachingComponent } from './coaching.component';
import { ASmithComponent } from './a-smith/a-smith.component';
import { MLytleComponent } from './m-lytle/m-lytle.component';
import { CLeValleyComponent } from './c-le-valley/c-le-valley.component';
import { CLucienComponent } from './c-lucien/c-lucien.component';


@NgModule({
  declarations: [
    CoachingComponent,
    ASmithComponent,
    MLytleComponent,
    CLeValleyComponent,
    CLucienComponent
  ],
  imports: [
    CommonModule,
    CoachingRoutingModule,
    FlexLayoutModule
  ]
})
export class CoachingModule { }
