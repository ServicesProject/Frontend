import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/autentication/login/login.component';
import { RegisterComponent } from './components/autentication/register/register.component';
import { ForgotPwComponent } from './components/autentication/forgot-pw/forgot-pw.component';
import { UserComponent } from './components/form/user/user.component';
import { WorkerComponent } from './components/form/worker/worker.component';
import { HomeComponent } from './components/main-views/home/home.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { FooterComponent } from './components/navigation/footer/footer.component';
import { UserHomeComponent } from './components/main-views/user-home/user-home.component';
import { WorkerHomeComponent } from './components/main-views/worker-home/worker-home.component';
import { CategoriesComponent } from './components/main-views/categories/categories.component';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { MapComponent } from './components/map/map.component';

import { GoogleMapsModule } from '@angular/google-maps';
import { LenderComponent } from './components/navigation/sidebar/lender/lender.component';


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
    CategoriesComponent,
    MapComponent,
    LenderComponent

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
