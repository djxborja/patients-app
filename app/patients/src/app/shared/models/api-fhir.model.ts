export interface FhirResponse<T> {
    entry: Array<Entry<T>>,
    id: string,
    link: Array<Link>,
    meta: Meta,
    resourceType: string,
    type: string
}

type Link = {
    relation: string;
    url: string;
};

type Meta = {
    lastUpdated: string;
}

type Entry<T> = {
    fullUrl: string,
    search: string,
    resource: T
}

export interface PatientFhir {
    birthDate: string,
    gender: string,
    id: string,
    active: boolean,
    name: PatientNameFhir[]
}

type PatientNameFhir = {
    family: string,
    given: Array<string>
}