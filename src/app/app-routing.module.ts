import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'login', component: LoginComponent,
    children: [
      {path: 'welcome', component: ToolbarComponent}]
  },
  // {path: '**', component: AppComponent},
  {path: 'profile', component: ToolbarComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
