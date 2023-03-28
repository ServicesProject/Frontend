import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LenderRoutingModule } from './lender-routing.module';
import { FormLenderComponent } from './components/form-lender/form-lender.component';
import { NavLenderComponent } from './components/nav-lender/nav-lender.component';
import { WorkerHomeComponent } from './components/worker-home/worker-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterLenderComponent } from './components/router-lender/router-lender.component';


@NgModule({
  declarations: [
    NavLenderComponent,
    FormLenderComponent,
    WorkerHomeComponent,
    RouterLenderComponent,
  ],
  imports: [
    CommonModule,
    LenderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
  ]
})
export class LenderModule { }
