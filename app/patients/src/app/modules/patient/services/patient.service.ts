import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { ApiService } from '@shared/services/api.service';
import { adaptApiPatientsToPatients } from '@modules/patient/adapter/patient.adapter';
import { Patient } from '@modules/patient/models/patient.model';

@Injectable({
    providedIn: 'root'
})

export class PatientService {

    constructor(private apiService: ApiService) {

    }

    getPatientsList(): Observable<Patient[]> {
        return this.apiService.getPatientsList$().pipe(
            map((res => adaptApiPatientsToPatients(res)))
        )
    }
}