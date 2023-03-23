import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { RegisterComponent } from './core/components/register/register.component';
import { ForgotPwComponent } from './core/components/forgot-pw/forgot-pw.component';
import { UserComponent } from './components/form/user/user.component';
import { WorkerComponent } from './components/form/worker/worker.component';
import { HomeComponent } from './core/components/home/home.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { UserHomeComponent } from './user/components/user-home/user-home.component';
import { WorkerHomeComponent } from './lender/components/worker-home/worker-home.component';
import { JwtInterceptor } from './core/interceptor/jwt.interceptor';
import { MapComponent } from './shared/components/map/map.component';

import { GoogleMapsModule } from '@angular/google-maps';
import { NavUserComponent } from './user/components/nav-user/nav-user.component';
import { NavLenderComponent } from './lender/components/nav-lender/nav-lender.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPwComponent,
    UserComponent,
    WorkerComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    UserHomeComponent,
    WorkerHomeComponent,
    MapComponent,
    NavUserComponent,
    NavLenderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
