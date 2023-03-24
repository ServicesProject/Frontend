import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { RegisterComponent } from './core/components/register/register.component';
import { HomeComponent } from './core/components/home/home.component';
import { UserHomeComponent } from './user/components/user-home/user-home.component';
import { WorkerHomeComponent } from './lender/components/worker-home/worker-home.component';
import { MapComponent } from './shared/components/map/map.component';
import { NavLenderComponent } from './lender/components/nav-lender/nav-lender.component';
import { ForgotPwComponent } from './core/components/forgot-pw/forgot-pw.component'
import { FormLenderComponent } from './lender/components/form-lender/form-lender.component';
import { FormUserComponent } from './user/components/form-user/form-user.component';

import { AuthenticationGuard } from './core/guards/authentication.guard';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: 'informacion/usuario', component: FormUserComponent, canActivate:[AuthenticationGuard]},
  {path: 'informacion/trabajador', component: FormLenderComponent, canActivate:[AuthenticationGuard]},
  {path: 'registro', component: RegisterComponent},
  {path: 'iniciarSesion', component: LoginComponent},
  {path: 'inicio/usuario', component: UserHomeComponent, canActivate:[AuthenticationGuard]},
  {path: 'inicio/trabajador', component: WorkerHomeComponent, canActivate:[AuthenticationGuard]},
  {path: 'navlender', component: NavLenderComponent},
  {path: 'restrablecer/contraseña', component: ForgotPwComponent},
  {path: 'mapa', component:MapComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
