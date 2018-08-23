import { NgModule } from '@angular/core';

import {MatButtonModule  } from '@angular/material';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  imports: [MatButtonModule,MatMenuModule,MatIconModule,  MatToolbarModule],
  exports: [MatButtonModule,MatMenuModule,MatIconModule,  MatToolbarModule],
  
})
export class MaterialModule { }