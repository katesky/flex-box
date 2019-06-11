import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class CommonServiceRadfordService {

    convertDate(date) {
        if (date != null) {
            var dt = new Date(date.substring(6, 19) * 1);
            var offset = dt.getTimezoneOffset() * 60000;
            var utcDate = new Date(dt.getTime() + offset);
            return utcDate;
        }
        else {
            return "";
        }
    }

    ConvertDateToLocal(date, serverTimeOffsetMin) {
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        if (date != null) {
            var dt = new Date(JSON.parse(date.substring(6, 19)));
            dt = new Date(dt.getTime() + serverTimeOffsetMin * 60000);
            var utcDate = new Date(dt.toUTCString());

            var pstDate = new Date(utcDate);
            var dateString = (monthNames[pstDate.getMonth()]).substr(0, 3) +
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

    FormatDate(date) {
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        if (date != null) {
            var utcDate = new Date(date.toUTCString());
            var pstDate = new Date(utcDate);
            var dateString = (monthNames[pstDate.getMonth()]).substr(0, 3) +
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