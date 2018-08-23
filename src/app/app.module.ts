import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material Module
import { MaterialModule } from './material.config'; // configuracion componentes
import { LoginComponent } from './login/login.component';

import {FlexLayoutModule, BREAKPOINT} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login/login.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  //  AppRoutingModule,
  FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule.withConfig({useColumnBasisZero: false}),
    HttpClientModule 
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }