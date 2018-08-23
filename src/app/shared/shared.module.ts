import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule, MatSidenavModule, MatSliderModule,} from '@angular/material';
import { MaterialModule } from '../material.config';
import { AppRoutingModule } from '../app-routing.module';
import { VerticalMenuComponent } from './vertical-menu/vertical-menu.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports:[ToolbarComponent],
  declarations: [ToolbarComponent, VerticalMenuComponent]
})
export class SharedModule { }