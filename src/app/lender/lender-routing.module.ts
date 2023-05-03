import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../core/guards/authentication.guard';
import { AddServiceLenderComponent } from './components/add-service-lender/add-service-lender.component';
import { FormLenderComponent } from './components/form-lender/form-lender.component';
import { ManageServiceLenderComponent } from './components/manage-service-lender/manage-service-lender.component';

import { RouterLenderComponent } from './components/router-lender/router-lender.component';
import { WorkerHomeComponent } from './components/worker-home/worker-home.component';
import { DetailServiceComponent } from './components/detail-service/detail-service.component';
import { InformationLenderComponent } from './components/information-lender/information-lender.component';
import { UpdateInformationLenderComponent } from './components/update-information-lender/update-information-lender.component';
import { UpdateServiceComponent } from './components/update-service/update-service.component';
import { DetailLenderWorkComponent } from './components/detail-lender-work/detail-lender-work.component';
import { ContractLenderComponent } from './components/contract-lender/contract-lender.component';
import { InformationWorkAndUserComponent } from './components/information-work-and-user/information-work-and-user.component';

const routes: Routes = [
  {path: "", component: RouterLenderComponent, children:[
    {path: "", component:WorkerHomeComponent},

    {path: "administración", component: ManageServiceLenderComponent, canActivate: [AuthenticationGuard]},
    {path: "nuevoServicio", component: AddServiceLenderComponent, canActivate: [AuthenticationGuard]},
    {path: ":id/detalleServicio", component: DetailServiceComponent, canActivate: [AuthenticationGuard]},
    {path: "datosPersonales", component: InformationLenderComponent, canActivate: [AuthenticationGuard]},
    {path: "editarInformación", component: UpdateInformationLenderComponent, canActivate: [AuthenticationGuard]},
    {path: ":id/actualizarServicio", component: UpdateServiceComponent, canActivate: [AuthenticationGuard]},
    {path: ":id/trabajo", component: DetailLenderWorkComponent, canActivate: [AuthenticationGuard]},
    {path: "contratos", component: ContractLenderComponent, canActivate: [AuthenticationGuard]},
    {path: "servicio/:idWork/solicitante/:idUser", component: InformationWorkAndUserComponent, canActivate: [AuthenticationGuard]},
  
  ]},
  {path: "completarDatos", component: FormLenderComponent, canActivate: [AuthenticationGuard]} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LenderRoutingModule { }
