import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '@modules/patient/models/patient.model';
import { PatientService } from '@modules/patient/services/patient.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent {
  @Input('id') id?: string;
  sub: Subscription
  patient: Patient;

  constructor(private router: Router, private patientService: PatientService) { }

  ngOnChanges() {
    this.sub = this.patientService.getPatient$(this.id).subscribe({
      next: (res: Patient) => this.patient = { ...res },
      error: () => this.router.navigate([''])
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  returnToPatientsList() {
    this.router.navigate(['patients'])
  }
}
