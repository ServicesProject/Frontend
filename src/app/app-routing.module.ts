import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/autentication/login/login.component';
import { RegisterComponent } from './components/autentication/register/register.component';
import { UserComponent } from './components/form/user/user.component';
import { WorkerComponent } from './components/form/worker/worker.component';
import { CategoriesComponent } from './components/main-views/categories/categories.component';
import { HomeComponent } from './components/main-views/home/home.component';
import { UserHomeComponent } from './components/main-views/user-home/user-home.component';
import { WorkerHomeComponent } from './components/main-views/worker-home/worker-home.component';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: 'informacion/usuario', component: UserComponent, canActivate:[AuthenticationGuard]},
  {path: 'informacion/trabajador', component: WorkerComponent, canActivate:[AuthenticationGuard]},
  {path: 'registro', component: RegisterComponent},
  {path: 'iniciarSesion', component: LoginComponent},
  {path: 'inicio/usuario', component: UserHomeComponent, canActivate:[AuthenticationGuard]},
  {path: 'inicio/trabajador', component: WorkerHomeComponent, canActivate:[AuthenticationGuard]},
  {path: 'categorias', component: CategoriesComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
