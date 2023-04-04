import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FormUserComponent } from './components/form-user/form-user.component';
import { NavUserComponent } from './components/nav-user/nav-user.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { RouterUserComponent } from './components/router-user/router-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapUserComponent } from './components/map-user/map-user.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { InformationUserComponent } from './components/information-user/information-user.component';
import { UpdateInformationUserComponent } from './components/update-information-user/update-information-user.component';


@NgModule({
  declarations: [
    NavUserComponent,
    FormUserComponent,
    UserHomeComponent,
    RouterUserComponent,
    MapUserComponent,
    InformationUserComponent,
    UpdateInformationUserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule
  ]
})
export class UserModule { }
