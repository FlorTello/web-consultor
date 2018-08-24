import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material Module
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './/app-routing.module';

import { MaterialModule } from './material.config'; // configuracion componentes
import { LoginComponent } from './login/login.component';

import { FlexLayoutModule, BREAKPOINT } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login/login.service';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }