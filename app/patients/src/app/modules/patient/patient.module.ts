import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientListComponent } from './components/patient-list/patient-list.component';

import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';


@NgModule({
  declarations: [
    PatientListComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    TableModule,
    SkeletonModule
  ]
})
export class PatientModule { }
