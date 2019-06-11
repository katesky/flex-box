import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { RestUrlService } from './rest-url.service';
import { Query } from 'src/app/market-queries/types/query.type';
import { RemComponentSet } from 'src/app/market-queries/types/rem-component-set.type';
import { SurveyFilterMC } from 'src/app/market-queries/types/survey-filter-mc.type';
import { PositionFunction, PositionSubFunction, PositionCategory, PositionFamily } from 'src/app/market-queries/types/position-function.type';
import { CombinedPositionMC } from 'src/app/market-queries/types/combined-position-mc.type';
import { RemCategory } from 'src/app/market-queries/types/rem-category.type';
import { RemCalculation } from 'src/app/market-queries/types/rem-calculation.type';
import { RemComponentSetWithSurveySecureId } from 'src/app/market-queries/types/rem-component-set.type';
import { ReportQueryBreakout } from 'src/app/market-queries/types/report-query-breakout.type';
import { ReturnListViewModel } from '../types/dtos.type';

@Injectable({
    providedIn: 'root'
})
export class MarketQueriesService {
    constructor(private http: HttpClient, public url: RestUrlService) { }

    getReportQueryDetail(reportQueryId): Observable<ReturnListViewModel<ReportQueryBreakout>> {
        return this.http.get<ReturnListViewModel<ReportQueryBreakout>>(this.url.getUrl("GetAllReportQueryDetails?ReportQueryId=" + reportQueryId, null))
            .pipe(
                map(r => {
                    return JSON.parse(JSON.stringify(this.url.toCamel(r)));
                }),
                catchError(this.handleError('getReportQueryDetail', null))
            );
    }

    getReportQueries(): Observable<ReturnListViewModel<Query>> {

        return this.http.get<ReturnListViewModel<Query>>(this.url.getUrl("GetReportQueries", null))
            .pipe(
                map(r => {
                    return JSON.parse(JSON.stringify(this.url.toCamel(r)));
                }),
                catchError(this.handleError('getReportQueries', null))
            );
    }


    getRemSets(surveyRecordId: string): Observable<ReturnListViewModel<RemComponentSet>> {
        return this.http.get<ReturnListViewModel<RemComponentSet>>(this.url.getUrl("DataCentre/RemComponentSet?SurveyRecordId=" + surveyRecordId, null))
            .pipe(
                map(r => {
                    return JSON.parse(JSON.stringify(this.url.toCamel(r)));
                }),
                catchError(this.handleError('getRemSets', null))
            );
    }
    checkDuplicateQueryNames(queryName: string): Observable<number> {
        return this.http.get<number>(this.url.getUrl("CheckDuplicateQueryNames?QueryName=" + queryName, null))
            .pipe(
                map(r => {
                return r;
                }),
            catchError(this.handleError('CheckDuplicateQueryNames', null))
            );
    }

    getSurveyFilters(surveyRecordId: string, countryId: number): Observable<ReturnListViewModel<SurveyFilterMC>> {
        return this.http.get<ReturnListViewModel<SurveyFilterMC>>(this.url.getUrl("SurveyFilter/SurveyFilterMC?SurveyRecordId=" + surveyRecordId + "&CountryId=" + countryId, null))
            .pipe(
                map(r => {
                    return JSON.parse(JSON.stringify(this.url.toCamel(r)));
                }),
                catchError(this.handleError('getSurveyFilters', null))
            );
    }

    saveReportQuery(queryId: number, queryName: string, surveyId: string, surveyCode: string, dataElementId: number,
        breakoutList: ReportQueryBreakout[], positionCodes: string, singlepositionName: string, jobCategoryCode: string)
        : Observable<boolean> {
        let body = JSON.stringify({
            "QueryId": queryId, "QueryName": queryName, "SurveyId": surveyId, "SurveyCode": surveyCode, "DataElementSetId": dataElementId, "PositionCodes": positionCodes,
            "BreakoutList": breakoutList, "SinglePositionName": singlepositionName, "JobCategoryCode": jobCategoryCode, "Version": "V2"
        });
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post<boolean>(this.url.getUrl('SaveReportQuery', null), body, httpOptions)
            .pipe(
                map(r => {
                    return JSON.parse(JSON.stringify(this.url.toCamel(r)));
                }),
                catchError(this.handleError('saveReportQuery', null))
            );
    }

    renameBreakout(reportQueryId: number, queryName: string): Observable<boolean> {
        let body = JSON.stringify({ ReportQueryId: reportQueryId, QueryName: queryName });
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post<boolean>(this.url.getUrl('UpdateReportQuery?ReportQueryId=' + reportQueryId + '&QueryName=' + queryName, null), body, httpOptions)
            .pipe(
                map(r => {
                    return JSON.parse(JSON.stringify(this.url.toCamel(r)));
                }),
                catchError(this.handleError('renameBreakout', null))
            );
    }

    deleteBreakout(reportQueryId: number): Observable<boolean> {
        let body = JSON.stringify({ ReportQueryId: reportQueryId });
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post<boolean>(this.url.getUrl('DeleteReportQuery?ReportQueryId=' + reportQueryId, null), body, httpOptions)
            .pipe(
                map(r => {
                    return JSON.parse(JSON.stringify(this.url.toCamel(r)));
                }),
                catchError(this.handleError('deleteBreakout', null))
            );
    }

    getPositionsBySurvey(surveyId: string): Observable<PositionFunction[]> {
        return this.http.get(this.url.getUrl("DataCentre/SurveyPositionsMC?SurveyId=" + surveyId, null)).pipe(tap(data => console.log("result is" + data))
            , map((res: any) => {
                console.log('res:');
                console.log(res);
                let positionFunctions: PositionFunction[] = [];
                res.Results.forEach((item: any) => {
                    positionFunctions.push(
                        new PositionFunction(item.Code,
                            item.Name,
                            item.SubFunctions.map(sf => {
                                return new PositionSubFunction(sf.Id,
                                    sf.Name,
                                    sf.Categories.map(c => {
                                        return new PositionCategory(
                                            c.Code,
                                            c.Name,
                                            c.PositionFamilies.map(pf => {
                                                return new PositionFamily(
                                                    pf.RecordId,
                                                    pf.CodeShort,
                                                    pf.CodeLong,
                                                    pf.Title,
                                                    pf.Description,
                                                    pf.SurveyPosition,
                                                    pf.Keywords, '');
                                            }));
                                    })
                                );
                            })
                        )
                    );
                });
                console.log('mapped data is ');
                console.log(positionFunctions);
                return positionFunctions;
            })
        );
    }

    //getPositionsBySurvey(surveyId: string): Observable<ReturnListViewModel<PositionFunction>> {
    //    return this.http.get<ReturnListViewModel<PositionFunction>>(this.url.getUrl("DataCentre/SurveyPositionsMC?SurveyId=" + surveyId, null))
    //        .pipe(
    //            map(r => {
    //                return JSON.parse(JSON.stringify(this.url.toCamel(r)));
    //            }),
    //            catchError(this.handleError('getPositionsBySurvey', null))
    //        );
    //}

    getCombinedPositions(surveyId: string): Observable<ReturnListViewModel<CombinedPositionMC>> {
        return this.http.get<ReturnListViewModel<CombinedPositionMC>>(this.url.getUrl("CombinedPositionsUser?SurveyId=" + surveyId, null))
            .pipe(
                map(r => {
                    return JSON.parse(JSON.stringify(this.url.toCamel(r)));
                }),
                catchError(this.handleError('getCombinedPositions', null))
            );
    }

    getSurveyRemComponents(surveyId: string): Observable<ReturnListViewModel<RemCategory>> {
        return this.http.get<ReturnListViewModel<RemCategory>>(this.url.getUrl("DataCentre/UsersSurveyRemComponents?SurveyId=" + surveyId + "&UserId=1", null))
            .pipe(
                map(r => {
                    return JSON.parse(JSON.stringify(this.url.toCamel(r)));
                }),
                catchError(this.handleError('getSurveyRemComponents', null))
            );
    }

    getSurveyPercentiles(surveyId: string): Observable<ReturnListViewModel<RemCalculation>> {
        return this.http.get<ReturnListViewModel<RemCalculation>>(this.url.getUrl("DataCentre/SurveyRemCalculations?SurveyRecordId=" + surveyId, null))
            .pipe(
                map(r => {
                    return JSON.parse(JSON.stringify(this.url.toCamel(r)));
                }),
                catchError(this.handleError('getSurveyPercentiles', null))
            );
    }

    saveRemSets(remSet: RemComponentSetWithSurveySecureId): Observable<string> {

        let body = JSON.stringify(remSet);
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post<boolean>(this.url.getUrl('/DataCentre/RemComponentSet', null), body, httpOptions)
            .pipe(
                map(result => {

                    console.log("result from save API");
                    console.log(result);
                    return (result);
                }),
                catchError(this.handleError('saveRemSets', null))
            );
    }

    removeRemSet(surveyId: string, setId: string) {

        let body = JSON.stringify({ SurveyRecordId: surveyId, SetId: setId });
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        return this.http.post<boolean>(this.url.getUrl('/DataCentre/DeleteRemComponentSet?SurveyRecordId=' + surveyId + "SetId=" + setId, null), body, httpOptions)
            .pipe(
                map(r => {
                    return JSON.parse(JSON.stringify(this.url.toCamel(r)));
                }),
                catchError(this.handleError('removeRemSet', null))
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
