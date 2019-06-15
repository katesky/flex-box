import { Injectable } from '@angular/core';
import { createUrl } from '@servicestack/client';

@Injectable({
  providedIn: 'root',
})
export class RestUrlService {


  parent: string;
  origin: string;
  domain: string;
  constructor() {
    let url = document.createElement('a');
    url.href = document.referrer;
    var protocol = url.protocol;
    this.parent = protocol + "//" + url.hostname + (url.port ? ':' + url.port : '');
    this.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    //  this.origin ='http://localhost:9999';
    this.domain = window.location.hostname + (window.location.port ? ':' + window.location.port : '');
  }
  isEmbeded() {
    return this.origin !== this.parent;
  }
  post(data: any) {
    //{"for":"user","data":"logout-user"}
    let postdata = { message: data, }
    console.log("posting " + data)
    if (this.isEmbeded()) {
      window.parent.window.postMessage(postdata, this.parent)

    }

  }
  redirect(data: any) {
    if (this.isEmbeded()) {
      let postdata = { message: data }
      console.log("redirecting" + data)
      window.parent.window.postMessage(postdata, this.parent)

    }
  }
  getUrl(route: string, args: any): string {
    var url = createUrl(route, args);

    var queryStringParam = "?";
    if (url.split('?').length > 1) {
      queryStringParam = "&";
    }

    return this.origin + '/api/RIC/' + url + queryStringParam + 'format=json&ReqDomain=' + this.domain;
  }

  toCamel(o) {
    var newO, origKey, newKey, value;
    if (o instanceof Array) {
      return o.map(value => {
        if (typeof value === "object") {
          value = this.toCamel(value);
        }
        return value;
      })
    } else {
      newO = {};
      for (origKey in o) {
        if (o.hasOwnProperty(origKey)) {
          newKey = (origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey).toString();
          value = o[origKey];
          if (value instanceof Array || (value !== null && value.constructor === Object)) {
            value = this.toCamel(value);
          }
          newO[newKey] = value;
        }
      }
    }
    return newO;
  }
}
