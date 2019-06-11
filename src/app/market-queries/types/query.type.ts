export interface Query {
    reportQueryId: number;
    queryName: string;
    isSystemQuery: boolean;
    surveyId: number;
    surveyCode: string;
    surveyRecordId: string;
    createdOn: string;
    modifiedOn: string;
    serverTimeOffsetMinute: number;
    displayOrder: boolean;
    createdBy: string;
    isActive: boolean;
    surveyName: string;
    modifiedOnLocal: string;
}