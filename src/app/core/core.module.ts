import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { ForgotPwComponent } from './components/forgot-pw/forgot-pw.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidatedEmailComponent } from './components/validated-email/validated-email.component';
import { ModelContractComponent } from './components/model-contract/model-contract.component';



@NgModule({
  declarations: [
    FooterComponent,
    ForgotPwComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ValidatedEmailComponent,
    ModelContractComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CoreModule { }
