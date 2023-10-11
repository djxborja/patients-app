import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'
import { ApiService } from '@shared/services/api.service';
import { adaptApiPatientToPatient, adaptApiPatientsToPatients } from '@modules/patient/adapter/patient.adapter';
import { Patient } from '@modules/patient/models/patient.model';

@Injectable({
    providedIn: 'root'
})

export class PatientService {

    constructor(private apiService: ApiService) {

    }

    getPatientsList$(): Observable<Patient[]> {
        return this.apiService.getPatientsList$().pipe(
            map((res => adaptApiPatientsToPatients(res)))
        )
    }

    getPatient$(id): Observable<Patient> {
        return this.apiService.getPatient$(id).pipe(
            map((res => adaptApiPatientToPatient(res))
            ))
    }
}