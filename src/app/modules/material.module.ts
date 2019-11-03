import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
