import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/form/user/user.component';
import { WorkerComponent } from './components/form/worker/worker.component';
import { HomeComponent } from './components/main-views/home/home.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: 'informacion/usuario', component: UserComponent},
  {path: 'informacion/trabajador', component: WorkerComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
