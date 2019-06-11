export interface ReportQueryBreakout {
    reportQueryId: number;
    reportQueryBreakoutId: number;
    breakoutName: string;
    countryId: number;
    countryName: string;
    surveyId: number;
    surveyCode: string;
    surveyRecordId: string;
    breakoutDetails: ReportQueryDetails[];
    queryName: string;
    remComponentSetId: number;
}

export interface ReportQueryDetails {
    reportQueryBreakoutId: number;
    reportQueryBreakoutFilterId: number;
    filterId: number;
    filterScopeId: number;
    valueId: number;

    name: string;
    filterName: string;
}
