import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../core/guards/authentication.guard';
import { FormUserComponent } from './components/form-user/form-user.component';
import { RouterUserComponent } from './components/router-user/router-user.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { MapUserComponent } from './components/map-user/map-user.component';
import { InformationUserComponent } from './components/information-user/information-user.component';
import { UpdateInformationUserComponent } from './components/update-information-user/update-information-user.component';
import { ContractUserComponent } from './components/contract-user/contract-user.component';
import { DetailLenderWorkComponent } from '../lender/components/detail-lender-work/detail-lender-work.component';

const routes: Routes = [
  {path: "", component: RouterUserComponent, children:[
    {path: "", component:UserHomeComponent},
    {path: "mapa", component: MapUserComponent, canActivate: [AuthenticationGuard]},
    {path: "datosPersonales", component: InformationUserComponent, canActivate: [AuthenticationGuard]},
    {path: "editarInformación", component: UpdateInformationUserComponent, canActivate: [AuthenticationGuard]},
    {path: "contratos", component: ContractUserComponent, canActivate: [AuthenticationGuard]},
    {path: ":id/trabajo", component: DetailLenderWorkComponent, canActivate: [AuthenticationGuard]},
  ]},
  {path: "completarDatos", component: FormUserComponent, canActivate: [AuthenticationGuard]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
