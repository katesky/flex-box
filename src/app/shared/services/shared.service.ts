import { Observable, pipe } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import {UserFeaturePermissions, UserPermissionsResult} from '../types/user-permissions.type';
import { catchError, map, tap } from 'rxjs/operators';
import { RestUrlService } from './rest-url.service';

@Injectable()
export class SharedService {

    constructor(private http: HttpClient, public url: RestUrlService)
    { }

    public getUserPermissions(): Observable<UserFeaturePermissions[]> {
        let getUserPermissionsUrl = "UserManagement/GetUserFeaturePermissions";

        return this.http.get<UserFeaturePermissions[]>(this.url.getUrl(getUserPermissionsUrl,null))
        .pipe(map((res: any) => {
            let result: UserFeaturePermissions[];
            //result.status = res.status;
            res.forEach((item: any) => {
                    result.push(new UserFeaturePermissions(
                    item.Id,
                    item.Name,
                    item.Permitted))
            });
            return result;
        }));


}

public getCartCount(): Observable<number> {
    let peerGroupCartIconUrl = "GetPeerGroupsInCart";

return this.http.get<number>(this.url.getUrl(peerGroupCartIconUrl,null)).
    pipe(map((res: any) => {
        if (res.status == "Success") {
            return res.data.length();
        }
        else {
            return 0;
        }
    }));
}


public convertDateToLocal(inputDate: any, serverTimeOffsetMin: any): string {
    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    if (inputDate != null) {
        let dt = new Date(JSON.parse(inputDate.substring(6, 19)));
        dt = new Date(dt.getTime() + serverTimeOffsetMin * 60000);
        let utcDate = new Date(dt.toUTCString());

        let pstDate = utcDate;
        let dateString = (monthNames[pstDate.getMonth()]).substr(0,3) +
            " " + ((pstDate.getDate()) < 10 ? '0' + pstDate.getDate().toString() : pstDate.getDate()) +
            ", " + pstDate.getFullYear() +
            " " + ((pstDate.getHours()) < 10 ? '0' + pstDate.getHours().toString() : pstDate.getHours()) +
            ":" + ((pstDate.getMinutes()) < 10 ? '0' + pstDate.getMinutes().toString() : pstDate.getMinutes());
        return dateString;
    }
    else {
        return "";
    }
}
}
