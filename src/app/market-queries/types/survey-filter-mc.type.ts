export interface SurveyFilterMC {
    id: number;
    recordId: string;
    name: string;
    canFilterOnIncumbent: boolean;
    canFilterOnCompany: boolean;
    values: SurveyFilterMCValue[];
    isRegion: boolean;
}

export interface SurveyFilterMCValue {
    id: number;
    recordId: string;
    value: string;
    children: SurveyFilterMCValue[];
    countryName: string;
}