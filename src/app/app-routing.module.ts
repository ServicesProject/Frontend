import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { RegisterComponent } from './core/components/register/register.component';
import { HomeComponent } from './core/components/home/home.component';
import { ForgotPwComponent } from './core/components/forgot-pw/forgot-pw.component'
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { ValidatedEmailComponent } from './core/components/validated-email/validated-email.component';

const routes: Routes = [
  {path: "", component: HomeComponent},

  {path: 'registro', component: RegisterComponent},
  {path: 'iniciarSesion', component: LoginComponent},
  {path: 'restrablecer/contraseña', component: ForgotPwComponent},
  {path: "confirmarEmail", component: ValidatedEmailComponent},

  { path: 'usuario', canActivate: [AuthenticationGuard], loadChildren: () => import('../app/user/user.module').then(m => m.UserModule) },
  { path: 'trabajador', canActivate: [AuthenticationGuard], loadChildren: () => import('../app/lender/lender.module').then(m => m.LenderModule) },

  
 
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
