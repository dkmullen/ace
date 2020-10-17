import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../modules/material.module';

import { SignUpFormComponent } from './forms/sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [
    SignUpFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
  ]
})
export class ComponentsModule { }