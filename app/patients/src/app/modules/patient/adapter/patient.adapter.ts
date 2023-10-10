import { FhirResponse, PatientFhir } from "@shared/models/api-fhir.model";
import { Patient } from "@modules/patient/models/patient.model";


export const adaptApiPatientsToPatients = (fhirObject: FhirResponse<PatientFhir>): Patient[] => {
    let patient: Patient[];
    return patient = fhirObject.entry.map(res => ({
            active: (res.resource.active || res.resource.active === undefined) ? true : false,
            birthDate: res.resource.birthDate,
            gender: res.resource.gender,
            id: res.resource.id,
            name: res.resource.name[0].given[0],
            family: res.resource.name[0].family
    }))
}