import { Component } from '@angular/core';
import { PatientService } from '@modules/patient/services/patient.service';
import { Patient } from '@modules/patient/models/patient.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent {

  public patients$: Observable<Patient[]>
  public loading: boolean = true;

  constructor(private patientService: PatientService) {

  }

  ngOnInit() {
    this.patients$ = this.patientService.getPatientsList().pipe(tap({
      next: () => this.loading = false
    }))
  }

  onSelectedPatient(e) {
    console.log(e)
  }
}
