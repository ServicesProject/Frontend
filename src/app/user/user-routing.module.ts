import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../core/guards/authentication.guard';
import { FormUserComponent } from './components/form-user/form-user.component';
import { RouterUserComponent } from './components/router-user/router-user.component';
import { UserHomeComponent } from './components/user-home/user-home.component';

const routes: Routes = [
  {path: "", component: RouterUserComponent, children:[
    {path: "", component:UserHomeComponent}
  ]},
  {path: "completarDatos", component: FormUserComponent, canActivate: [AuthenticationGuard]} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
