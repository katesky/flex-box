export interface Survey {
    id: string;
    name: string;
    code: string;
    jobFamilies: JobFamily[];
    managerID: number;
    managerName: string;
    managerEmail: string;
    managerContact: string;
    displayPD: boolean;
    countries: Country[];
    showHeatmapOnDashboard: boolean;
}

export interface JobFamily {
    id: number;
    recordId: string;
    jobFamilyRecordId: string;
    name: string;
    surveyId: number;
    jobFamilyId: number;
    jobSubFamilies: JobSubFamily[];
    positions: Position[];
}

export interface JobSubFamily {
    id: number;
    recordId: string;
    jobSubFamilyRecordId: string;
    name: string;
    surveyId: number;
    jobFamilyId: number;
    jobFamilyRecordId: string;
}

export interface Position {
    id: number;
    recordId: string;
    positionId: number;
    positionRecordId: string;
    positionCode: string;
    title: string;
    responsibleFor: string;
    surveyId: number;
    positionFamilyId: number;
    jobFamilyId: string;
    positionSubFamilyId: number;
    jobSubFamilyId: string;
    careerLevel: number;
    displayOrder: number;
    jobSubFamilyCode: string;
}

export class Country {
    id: number;
    recordId: string;
    name: string;
    displayOrder: number;
    countryZone: string;
}
export class Dictionary{
    key:number;
    value: string
}