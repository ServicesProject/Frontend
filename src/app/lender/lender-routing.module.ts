import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../core/guards/authentication.guard';
import { AddServiceLenderComponent } from './components/add-service-lender/add-service-lender.component';
import { FormLenderComponent } from './components/form-lender/form-lender.component';
import { ManageServiceLenderComponent } from './components/manage-service-lender/manage-service-lender.component';
import { MapLenderComponent } from './components/map-lender/map-lender.component';
import { RouterLenderComponent } from './components/router-lender/router-lender.component';
import { WorkerHomeComponent } from './components/worker-home/worker-home.component';
import { DetailServiceComponent } from './components/detail-service/detail-service.component';
import { InformationLenderComponent } from './components/information-lender/information-lender.component';
import { UpdateInformationLenderComponent } from './components/update-information-lender/update-information-lender.component';

const routes: Routes = [
  {path: "", component: RouterLenderComponent, children:[
    {path: "", component:WorkerHomeComponent},
    {path: "mapa", component: MapLenderComponent, canActivate: [AuthenticationGuard]},
    {path: "administración", component: ManageServiceLenderComponent, canActivate: [AuthenticationGuard]},
    {path: "nuevoServicio", component: AddServiceLenderComponent, canActivate: [AuthenticationGuard]},
    {path: ":id/detalleServicio", component: DetailServiceComponent, canActivate: [AuthenticationGuard]},
    {path: "datosPersonales", component: InformationLenderComponent, canActivate: [AuthenticationGuard]},
    {path: "editarInformación", component: UpdateInformationLenderComponent, canActivate: [AuthenticationGuard]},
  ]},
  {path: "completarDatos", component: FormLenderComponent, canActivate: [AuthenticationGuard]} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LenderRoutingModule { }
