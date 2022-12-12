import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/autentication/login/login.component';
import { RegisterComponent } from './components/autentication/register/register.component';
import { UserComponent } from './components/form/user/user.component';
import { WorkerComponent } from './components/form/worker/worker.component';
import { HomeComponent } from './components/main-views/home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: 'informacion/usuario', component: UserComponent},
  {path: 'informacion/trabajador', component: WorkerComponent},
  {path: 'registro', component: RegisterComponent},
  {path: 'iniciarSesion', component: LoginComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
