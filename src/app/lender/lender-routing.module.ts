import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../core/guards/authentication.guard';
import { FormLenderComponent } from './components/form-lender/form-lender.component';
import { RouterLenderComponent } from './components/router-lender/router-lender.component';
import { WorkerHomeComponent } from './components/worker-home/worker-home.component';

const routes: Routes = [
  {path: "", component: RouterLenderComponent, children:[
    {path: "", component:WorkerHomeComponent}
  ]},
  {path: "completarDatos", component: FormLenderComponent, canActivate: [AuthenticationGuard]} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LenderRoutingModule { }
