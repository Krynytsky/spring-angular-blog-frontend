import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RegisterComponent} from './auth/register/register.component';
import {RegisterSucessComponent} from './auth/register-sucess/register-sucess.component';
import {LoginComponent} from './auth/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

// const appRoutes: Routes = [
//   { path: 'register', component: RegisterComponent }
// ];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    RegisterSucessComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        { path: 'register', component: RegisterComponent }
      ]
      // appRoutes,
      // { enableTracing: true }
      ),
    //
    //   {path: 'register', component: RegisterComponent},
    // ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
