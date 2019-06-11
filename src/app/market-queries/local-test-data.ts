import { ClientAppParameter } from '../shared/interfaces/client-app-parameter';
import { Query } from '@angular/core';

const links = [
  { "text": "Quick Benchmarks", "link": "/Data-Centre/Compensation/Quick-Benchmarks", "active": false },
  { "text": "Market Queries", "link": "/Data-Centre/Compensation/Market-Queries", "active": false },
  { "text": "Country Totals", "link": "/Data-Centre/Compensation/Country-Totals", "active": false },
  { "text": "Pre-IPO Reports", "link": "/Data-Centre/Compensation/Pre-IPO-Reports", "active": false },
  { "text": "Market Queries V2", "link": "/Data-Centre/Compensation/Market-Queries-V2", "active": true },
]
const init_config: ClientAppParameter = { id: 7, clientId: 0, parmaterName: null, intValue: 1, numericValue: null, value: null }

let r ={"Total":13,"Results":[{"ReportQueryId":7,"QueryName":"RADFORD SYSTEM QUERY","IsSystemQuery":true,"SurveyId":7,"SurveyCode":"GTS","SurveyRecordId":"2f2f64b3-bea7-4a7d-8a8b-791f636d74fa","CreatedOn":"\/Date(1524797960670-0000)\/","ModifiedOn":"\/Date(1524875995523-0000)\/","ServerTimeOffsetMinute":-300,"DisplayOrder":-1,"CreatedBy":"ZEKI OSMANCIK","RemComponentSetId":0,"JobSelectionTypeId":0,"JobSetId":0},{"ReportQueryId":-702,"QueryName":"Radford All Hardware","IsSystemQuery":true,"SurveyId":7,"SurveyCode":"GTS","SurveyRecordId":"2f2f64b3-bea7-4a7d-8a8b-791f636d74fa","CreatedOn":"\/Date(1527294908047-0000)\/","ModifiedOn":"\/Date(1531446093900-0000)\/","ServerTimeOffsetMinute":-300,"DisplayOrder":2,"CreatedBy":" ","RemComponentSetId":0,"JobSelectionTypeId":0,"JobSetId":0},{"ReportQueryId":-703,"QueryName":"Radford All Software","IsSystemQuery":true,"SurveyId":7,"SurveyCode":"GTS","SurveyRecordId":"2f2f64b3-bea7-4a7d-8a8b-791f636d74fa","CreatedOn":"\/Date(1527294908047-0000)\/","ModifiedOn":"\/Date(1531446093900-0000)\/","ServerTimeOffsetMinute":-300,"DisplayOrder":3,"CreatedBy":" ","RemComponentSetId":0,"JobSelectionTypeId":0,"JobSetId":0},{"ReportQueryId":-704,"QueryName":"Radford All Semiconductor","IsSystemQuery":true,"SurveyId":7,"SurveyCode":"GTS","SurveyRecordId":"2f2f64b3-bea7-4a7d-8a8b-791f636d74fa","CreatedOn":"\/Date(1527294908047-0000)\/","ModifiedOn":"\/Date(1531446093900-0000)\/","ServerTimeOffsetMinute":-300,"DisplayOrder":4,"CreatedBy":" ","RemComponentSetId":0,"JobSelectionTypeId":0,"JobSetId":0},{"ReportQueryId":-705,"QueryName":"Radford All Medical Devices","IsSystemQuery":true,"SurveyId":7,"SurveyCode":"GTS","SurveyRecordId":"2f2f64b3-bea7-4a7d-8a8b-791f636d74fa","CreatedOn":"\/Date(1527294908047-0000)\/","ModifiedOn":"\/Date(1531446093900-0000)\/","ServerTimeOffsetMinute":-300,"DisplayOrder":5,"CreatedBy":" ","RemComponentSetId":0,"JobSelectionTypeId":0,"JobSetId":0},{"ReportQueryId":-507,"QueryName":"Radford All Bio/Pharma-Commercial","IsSystemQuery":true,"SurveyId":5,"SurveyCode":"GLS","SurveyRecordId":"460cd102-78ff-4ec3-8d2d-05d36d43d664","CreatedOn":"\/Date(1527799804810-0000)\/","ModifiedOn":"\/Date(1531446093900-0000)\/","ServerTimeOffsetMinute":-300,"DisplayOrder":7,"CreatedBy":" ","RemComponentSetId":0,"JobSelectionTypeId":0,"JobSetId":0},{"ReportQueryId":-508,"QueryName":"Radford All Bio/Pharma-Pre-Commercial","IsSystemQuery":true,"SurveyId":5,"SurveyCode":"GLS","SurveyRecordId":"460cd102-78ff-4ec3-8d2d-05d36d43d664","CreatedOn":"\/Date(1527799804810-0000)\/","ModifiedOn":"\/Date(1531446093900-0000)\/","ServerTimeOffsetMinute":-300,"DisplayOrder":8,"CreatedBy":" ","RemComponentSetId":0,"JobSelectionTypeId":0,"JobSetId":0},{"ReportQueryId":-610,"QueryName":"Radford All Hardware","IsSystemQuery":true,"SurveyId":6,"SurveyCode":"GSS","SurveyRecordId":"6c825369-7b1b-4cca-8dc2-6c8b0a4d9dae","CreatedOn":"\/Date(1527799804810-0000)\/","ModifiedOn":"\/Date(1531446093900-0000)\/","ServerTimeOffsetMinute":-300,"DisplayOrder":10,"CreatedBy":" ","RemComponentSetId":0,"JobSelectionTypeId":0,"JobSetId":0},{"ReportQueryId":-611,"QueryName":"Radford All Software","IsSystemQuery":true,"SurveyId":6,"SurveyCode":"GSS","SurveyRecordId":"6c825369-7b1b-4cca-8dc2-6c8b0a4d9dae","CreatedOn":"\/Date(1527799804810-0000)\/","ModifiedOn":"\/Date(1531446093900-0000)\/","ServerTimeOffsetMinute":-300,"DisplayOrder":11,"CreatedBy":" ","RemComponentSetId":0,"JobSelectionTypeId":0,"JobSetId":0},{"ReportQueryId":-612,"QueryName":"Radford All Semiconductor Components","IsSystemQuery":true,"SurveyId":6,"SurveyCode":"GSS","SurveyRecordId":"6c825369-7b1b-4cca-8dc2-6c8b0a4d9dae","CreatedOn":"\/Date(1527799804810-0000)\/","ModifiedOn":"\/Date(1531446093900-0000)\/","ServerTimeOffsetMinute":-300,"DisplayOrder":12,"CreatedBy":" ","RemComponentSetId":0,"JobSelectionTypeId":0,"JobSetId":0},{"ReportQueryId":-613,"QueryName":"Radford All Medical Devices","IsSystemQuery":true,"SurveyId":6,"SurveyCode":"GSS","SurveyRecordId":"6c825369-7b1b-4cca-8dc2-6c8b0a4d9dae","CreatedOn":"\/Date(1527799804810-0000)\/","ModifiedOn":"\/Date(1531446093900-0000)\/","ServerTimeOffsetMinute":-300,"DisplayOrder":13,"CreatedBy":" ","RemComponentSetId":0,"JobSelectionTypeId":0,"JobSetId":0},{"ReportQueryId":-614,"QueryName":"Radford All Technology","IsSystemQuery":true,"SurveyId":6,"SurveyCode":"GSS","SurveyRecordId":"6c825369-7b1b-4cca-8dc2-6c8b0a4d9dae","CreatedOn":"\/Date(1527799804810-0000)\/","ModifiedOn":"\/Date(1531446093900-0000)\/","ServerTimeOffsetMinute":-300,"DisplayOrder":14,"CreatedBy":" ","RemComponentSetId":0,"JobSelectionTypeId":0,"JobSetId":0},{"ReportQueryId":-615,"QueryName":"Radford All Life Sciences","IsSystemQuery":true,"SurveyId":6,"SurveyCode":"GSS","SurveyRecordId":"6c825369-7b1b-4cca-8dc2-6c8b0a4d9dae","CreatedOn":"\/Date(1527799804810-0000)\/","ModifiedOn":"\/Date(1531446093900-0000)\/","ServerTimeOffsetMinute":-300,"DisplayOrder":15,"CreatedBy":" ","RemComponentSetId":0,"JobSelectionTypeId":0,"JobSetId":0}]};
function toCamel(o) {
  var newO, origKey, newKey, value;
  if (o instanceof Array) {
      return o.map(value => {
          if (typeof value === "object") {
              value = toCamel(value);
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
                  value = toCamel(value);
              }
              newO[newKey] = value;
          }
      }
  }
  return newO;
}
let cam =  toCamel(r.Results);
const init_query: Query[] =  cam;
const jobs_selection = [
  { key: 0, value: "Search Jobs" },
  { key: 1, value: "Select Job List(s)" },
  { key: 2, value: "All Jobs" },
  { key: 3, value: "All Executive Jobs" }];
  const default_list = [

  { key: 0, value: "Name1" },
  { key: 1, value: "Name2" },
  { key: 2, value: "Name3" },
  { key: 3, value: "Name4" }];

const division = {
  "New England 01": ["Connecticut", "Maine", "Massachusetts"],
  "New England 02": ["New Hampshire", "Rhode Island", "Vermont"],
  // tslint:disable-next-line:object-literal-sort-keys
  "Mid-Atlantic": ["New Jersey", "New York", "Pennsylvania"],
  "East North Central 02": ["Michigan", "Ohio", "Wisconsin"],
  "East North Central 01": ["Illinois", "Indiana"],
  "West North Central 01": ["Missouri", "Nebraska", "North Dakota", "South Dakota"],
  "West North Central 02": ["Iowa", "Kansas", "Minnesota"],
  "South Atlantic 01": ["Delaware", "Florida", "Georgia", "Maryland"],
  "South Atlantic 02": ["North Carolina", "South Carolina", "Virginia",
    "District of Columbia", "West Virginia"],
  "South Atlantic 03": ["District of Columbia", "West Virginia"],
  "East South Central 01": ["Alabama", "Kentucky"],
  "East South Central 02": ["Mississippi", "Tennessee"],
  "West South Central": ["Arkansas", "Louisiana", "Oklahome", "Texas"],
  "Mountain": ["Arizona", "Colorado", "Idaho", "Montana", "Nevada", "New Mexico", "Utah", "Wyoming"],
  "Pacific 01": ["Alaska", "California"],
  "Pacific 02": ["Hawaii", "Oregon", "Washington"]
};

const localData: any[] = [];
const keys = Object.keys(division);
for (const key of keys) {
  division[key].map((e) => {
    localData.push({
      field: e,
      region: key.substring(0, key.length - 3)
    });
  });
}

export { localData, links, init_config,init_query,
  jobs_selection,default_list   };
