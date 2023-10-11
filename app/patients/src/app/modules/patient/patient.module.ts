import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientListComponent } from './components/patient-list/patient-list.component';

import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';
import { CardModule, } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [
    PatientListComponent,
    PatientInfoComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    TableModule,
    SkeletonModule,
    CardModule,
    ButtonModule,
    TagModule
  ]
})
export class PatientModule { }
