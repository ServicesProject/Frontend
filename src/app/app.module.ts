import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/autentication/login/login.component';
import { RegisterComponent } from './components/autentication/register/register.component';
import { ForgotPwComponent } from './components/autentication/forgot-pw/forgot-pw.component';
import { UserComponent } from './components/form/user/user.component';
import { WorkerComponent } from './components/form/worker/worker.component';
import { HomeComponent } from './components/main-views/home/home.component';
import { UniformActivitiesComponent } from './components/main-views/uniform-activities/uniform-activities.component';
import { OneoffActivitiesComponent } from './components/main-views/oneoff-activities/oneoff-activities.component';
import { CombinedComponent } from './components/main-views/combined/combined.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { FooterComponent } from './components/navigation/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPwComponent,
    UserComponent,
    WorkerComponent,
    HomeComponent,
    UniformActivitiesComponent,
    OneoffActivitiesComponent,
    CombinedComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
