import { RemCategory, RemComponentMC } from './rem-category.type';
import { RemCalculation } from './rem-calculation.type';

export class RemComponentSet {
    id: number;
    name: string;
    remCalculations: number[];
    remComponents: number[];
    selectedRemCalculations: RemCalculation[];
    selectedRemComponents: RemComponentMC[];
    isEditable: boolean;
}

export class RemComponentSetWithSurveySecureId {
    remComponentSet: RemComponentSet;
    surveyRecordId: string;
}

export class RemComponentSetOutput {
    dataElementSets: RemComponentSet[];
    selectedDataElement: string;
} 