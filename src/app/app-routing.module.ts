import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './auth/register/register.component';
import {RegisterSuccessComponent} from './auth/register-sucess/register-success.component';


const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'register-success', component: RegisterSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
