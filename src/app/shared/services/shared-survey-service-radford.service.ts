import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { RestUrlService } from './rest-url.service';
import { Survey } from '../types/survey.type';
import { ReturnListViewModel } from '../types/dtos.type';
import { SurveyDate } from '../types/survey-date.type';
import { ClientAppParameter } from '../interfaces/client-app-parameter';

@Injectable({
    providedIn: 'root',
})
export class SharedSurveyServiceRadfordService {

    constructor(private http: HttpClient, private url: RestUrlService) {
    }

    getSurveys(): Observable<ReturnListViewModel<Survey>> {
        return this.http.get<ReturnListViewModel<Survey>>(this.url.getUrl('DataCentre/SurveysMC', null))
            .pipe(
                map(r => {
                    return JSON.parse(JSON.stringify(this.url.toCamel(r)));
                }),
                catchError(this.handleError('getSurveys', null))
            );
    }

    getAppParameter(parameterName: string) : Observable<ClientAppParameter> {
        let body = JSON.stringify({ ParameterName: parameterName });
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post<ClientAppParameter>(this.url.getUrl('Client/Parameter', null), body, httpOptions)
            .pipe(
                map(r => {
                    return JSON.parse(JSON.stringify(this.url.toCamel(r)));
                }),
                catchError(this.handleError('getAppParameter', null))
            );
    }

    getEffectiveDate(surveyId: string): Observable<SurveyDate> {
        return this.http.get<SurveyDate>(this.url.getUrl('SurveyFilter/GetSurveyEffectiveDate?SurveyId=' + surveyId, null))
            .pipe(
                map(r => {
                    return JSON.parse(JSON.stringify(this.url.toCamel(r)));
                }),
                catchError(this.handleError('getEffectiveDate', null))
            );
    }

    getPositionDescription(positionRecordId: string): Observable<string> {
       return this.http.get(this.url.getUrl('DataCentre/PositionsDescription?PositionFamilyRecordId=', null)).pipe(
            map((res: any) => {
               let description = res.JobDescription;
               if (description === null) {
                   return "CEO - Corporate - Global: Top executive in an independent corporation accountable for the global operations of the company. Responsible for overseeing all aspects of the business, including directing the organization to ensure the attainment of financial and strategic goals and maximizing return on invested capital. Responsible for the formulation of current and long-range strategic plans and objectives. Represents the organization in relations with its customers, investors, financial community and employees. Survey Tip: Organization's top executive on a global basis. Match this position if the organization is an independent corporation and has operations in multiple geographies or only a single geography (e.g., US, Europe). Reports to the Board of Directors. Independent corporations only.";
               } else {
                   return description;
               }

            })
        );

    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
