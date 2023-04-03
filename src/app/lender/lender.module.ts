import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LenderRoutingModule } from './lender-routing.module';
import { FormLenderComponent } from './components/form-lender/form-lender.component';
import { NavLenderComponent } from './components/nav-lender/nav-lender.component';
import { WorkerHomeComponent } from './components/worker-home/worker-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouterLenderComponent } from './components/router-lender/router-lender.component';
import { MapLenderComponent } from './components/map-lender/map-lender.component';
import { AddServiceLenderComponent } from './components/add-service-lender/add-service-lender.component';
import { ManageServiceLenderComponent } from './components/manage-service-lender/manage-service-lender.component';
import { DetailServiceComponent } from './components/detail-service/detail-service.component';
import { InformationLenderComponent } from './components/information-lender/information-lender.component';
import { UpdateInformationLenderComponent } from './components/update-information-lender/update-information-lender.component';
import { UpdateServiceComponent } from './components/update-service/update-service.component';



@NgModule({
  declarations: [
    NavLenderComponent,
    FormLenderComponent,
    WorkerHomeComponent,
    RouterLenderComponent,
    MapLenderComponent,
    AddServiceLenderComponent,
    ManageServiceLenderComponent,
    DetailServiceComponent,
    InformationLenderComponent,
    UpdateInformationLenderComponent,
    UpdateServiceComponent,
   
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
