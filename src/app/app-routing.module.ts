import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './auth/register/register.component';
import {RegisterSuccessComponent} from './auth/register-sucess/register-success.component';
import {LoginComponent} from './auth/login/login.component';
import {HomeComponent} from './home/home.component';
import {AddPostComponent} from './add-post/add-post.component';
import {PostComponent} from './post/post.component';


const routes: Routes = [
  {path: 'post/:id', component: PostComponent},
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register-success', component: RegisterSuccessComponent},
  {path: 'home', component: HomeComponent},
  {path: 'add-post', component: AddPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
