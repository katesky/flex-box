export interface CombinedPositionMC {
    id: number;
    recordId: string;
    name: string
    combinedPositionPositions: CombinedPositionPositionIntersectMC[];
}

export interface CombinedPositionPositionIntersectMC {
    id: number;
    recordId: string;
    combinedPositionId: number;
    surveyPositionId: number;
    positionCategoryRecordId: string;
}