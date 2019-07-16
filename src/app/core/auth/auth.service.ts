import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestUrlService } from 'src/app/shared/services/rest-url.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private urlService: RestUrlService) { }

  public isAuthenticated(): boolean {

    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    //// return !this.jwtHelper.isTokenExpired(token);

   /*  let parentLocation = document.location.ancestorOrigins;
    console.log(document.referrer + " (loaded app) " + this.urlService.origin); //make it part of the ngrx

    let parentLocationIE = '';
    if(parentLocation){
      parentLocationIE = parentLocation[0];
    }else
    {
      parentLocationIE = document.referrer;
    } */
  //  let parentLocationIE = window.location.ancestorOrigins;
    console.log(this.urlService.parent + " (loaded app) " + this.urlService.origin); //make it part of the ngrx ?


    return true;//environment.allowedUrls.indexOf(this.urlService.parent)>0 || !environment.production;
  }
}
//document.location.ancestorOrigins[0]
