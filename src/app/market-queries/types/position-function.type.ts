export class PositionFunction {
    constructor(public code: string, public name: string, public subFunctions: PositionSubFunction[]) {

    }
}

export class PositionSubFunction {
    constructor(public id: number, public name: string, public categories: PositionCategory[]) {}
}

export class PositionCategory {
    constructor(public code: string, public name: string, public positionFamilies: PositionFamily[]) {}
}

export class PositionFamily {
    functionCode: string;
    functionName: string;
    subFunctionId: number;
    subFunctionName: string;
    categoryCode: string;
    categoryName: string;
    codeShortTitle: string;

    constructor(
        public recordId: string
        , public codeShort: string
        , public codeLong: string
        , public title: string,
        public description: string,
        public surveyPositionId: number,
        public keywords: string,
        public keywordTokens: string) {
    }
}
export class SearchPositionFamily {
    constructor(
        public functionCode: string
        , public functionName: string
        , public subFunctionId: number
        , public subFunctionName: string,
        public categoryCode: string,
        public categoryName: string,
        public codeShortTitle: string,
        public keywordTokens: string,
        public positionFamily:PositionFamily
    ) {}
}
/*
export interface IPositionFunction {
    code: string;
    name: string;
    subFunctions: IPositionSubFunction[];
}

export class PositionSubFunction implements IPositionFunction {
    constructor(id: number, name: string, categories: IPositionCategory[]) {
        this.id = id;
    }
}

export interface IPositionCategory {
    code: string;
    name: string;
    positionFamilies: IPositionFamily[];
}

export class PositionFamily {
    recordId: string;
    codeShort: string;
    codeLong: string;
    title: string;
    description: string;
    surveyPositionID: number;
    keyWords: string;

    functionCode: string;
    functionName: string;
    subFunctionId: number;
    subFunctionName: string;
    categoryCode: string;
    categoryName: string;
    codeShortTitle: string;
    keyWordsTokens: string; 
}
*/