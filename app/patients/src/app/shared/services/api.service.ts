import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '@core/global.config';
import { Observable } from 'rxjs';
import { FhirResponse, PatientFhir } from '@shared/models/api-fhir.model';

@Injectable({
    providedIn: 'root',
})
export class ApiService {

    constructor(private http: HttpClient) { }

    private apiUrl = `${GLOBAL.API.base_url}`;

    getPatientsList$(): Observable<FhirResponse<PatientFhir>> {
        return this.http.get<FhirResponse<PatientFhir>>(`${this.apiUrl}${GLOBAL.API.resources.patients}`)
    }
}