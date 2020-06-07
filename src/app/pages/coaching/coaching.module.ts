import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../modules/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CoachingRoutingModule } from './coaching-routing.module';

import { CoachingComponent } from './coaching.component';
import { ASmithComponent } from './a-smith/a-smith.component';
import { MLytleComponent } from './m-lytle/m-lytle.component';
import { CLeValleyComponent } from './c-le-valley/c-le-valley.component';
import { CLucienComponent } from './c-lucien/c-lucien.component';
import { JApkingComponent } from './j-apking/j-apking.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PayComponent } from './pay/pay.component';


@NgModule({
  declarations: [
    CoachingComponent,
    ASmithComponent,
    MLytleComponent,
    CLeValleyComponent,
    CLucienComponent,
    JApkingComponent,
    CheckoutComponent,
    PayComponent
  ],
  imports: [
    CommonModule,
    CoachingRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CoachingModule { }
