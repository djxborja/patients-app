import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from '@modules/patient/components/patient-list/patient-list.component';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';

const routes: Routes = [
  { path: '', component: PatientListComponent, pathMatch: 'full'},
  { path: ':id', component: PatientInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
