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

let r = { "Total": 13, "Results": [{ "ReportQueryId": 7, "QueryName": "RADFORD SYSTEM QUERY", "IsSystemQuery": true, "SurveyId": 7, "SurveyCode": "GTS", "SurveyRecordId": "2f2f64b3-bea7-4a7d-8a8b-791f636d74fa", "CreatedOn": "\/Date(1524797960670-0000)\/", "ModifiedOn": "\/Date(1524875995523-0000)\/", "ServerTimeOffsetMinute": -300, "DisplayOrder": -1, "CreatedBy": "ZEKI OSMANCIK", "RemComponentSetId": 0, "JobSelectionTypeId": 0, "JobSetId": 0 }, { "ReportQueryId": -702, "QueryName": "Radford All Hardware", "IsSystemQuery": true, "SurveyId": 7, "SurveyCode": "GTS", "SurveyRecordId": "2f2f64b3-bea7-4a7d-8a8b-791f636d74fa", "CreatedOn": "\/Date(1527294908047-0000)\/", "ModifiedOn": "\/Date(1531446093900-0000)\/", "ServerTimeOffsetMinute": -300, "DisplayOrder": 2, "CreatedBy": " ", "RemComponentSetId": 0, "JobSelectionTypeId": 0, "JobSetId": 0 }, { "ReportQueryId": -703, "QueryName": "Radford All Software", "IsSystemQuery": true, "SurveyId": 7, "SurveyCode": "GTS", "SurveyRecordId": "2f2f64b3-bea7-4a7d-8a8b-791f636d74fa", "CreatedOn": "\/Date(1527294908047-0000)\/", "ModifiedOn": "\/Date(1531446093900-0000)\/", "ServerTimeOffsetMinute": -300, "DisplayOrder": 3, "CreatedBy": " ", "RemComponentSetId": 0, "JobSelectionTypeId": 0, "JobSetId": 0 }, { "ReportQueryId": -704, "QueryName": "Radford All Semiconductor", "IsSystemQuery": true, "SurveyId": 7, "SurveyCode": "GTS", "SurveyRecordId": "2f2f64b3-bea7-4a7d-8a8b-791f636d74fa", "CreatedOn": "\/Date(1527294908047-0000)\/", "ModifiedOn": "\/Date(1531446093900-0000)\/", "ServerTimeOffsetMinute": -300, "DisplayOrder": 4, "CreatedBy": " ", "RemComponentSetId": 0, "JobSelectionTypeId": 0, "JobSetId": 0 }, { "ReportQueryId": -705, "QueryName": "Radford All Medical Devices", "IsSystemQuery": true, "SurveyId": 7, "SurveyCode": "GTS", "SurveyRecordId": "2f2f64b3-bea7-4a7d-8a8b-791f636d74fa", "CreatedOn": "\/Date(1527294908047-0000)\/", "ModifiedOn": "\/Date(1531446093900-0000)\/", "ServerTimeOffsetMinute": -300, "DisplayOrder": 5, "CreatedBy": " ", "RemComponentSetId": 0, "JobSelectionTypeId": 0, "JobSetId": 0 }, { "ReportQueryId": -507, "QueryName": "Radford All Bio/Pharma-Commercial", "IsSystemQuery": true, "SurveyId": 5, "SurveyCode": "GLS", "SurveyRecordId": "460cd102-78ff-4ec3-8d2d-05d36d43d664", "CreatedOn": "\/Date(1527799804810-0000)\/", "ModifiedOn": "\/Date(1531446093900-0000)\/", "ServerTimeOffsetMinute": -300, "DisplayOrder": 7, "CreatedBy": " ", "RemComponentSetId": 0, "JobSelectionTypeId": 0, "JobSetId": 0 }, { "ReportQueryId": -508, "QueryName": "Radford All Bio/Pharma-Pre-Commercial", "IsSystemQuery": true, "SurveyId": 5, "SurveyCode": "GLS", "SurveyRecordId": "460cd102-78ff-4ec3-8d2d-05d36d43d664", "CreatedOn": "\/Date(1527799804810-0000)\/", "ModifiedOn": "\/Date(1531446093900-0000)\/", "ServerTimeOffsetMinute": -300, "DisplayOrder": 8, "CreatedBy": " ", "RemComponentSetId": 0, "JobSelectionTypeId": 0, "JobSetId": 0 }, { "ReportQueryId": -610, "QueryName": "Radford All Hardware", "IsSystemQuery": true, "SurveyId": 6, "SurveyCode": "GSS", "SurveyRecordId": "6c825369-7b1b-4cca-8dc2-6c8b0a4d9dae", "CreatedOn": "\/Date(1527799804810-0000)\/", "ModifiedOn": "\/Date(1531446093900-0000)\/", "ServerTimeOffsetMinute": -300, "DisplayOrder": 10, "CreatedBy": " ", "RemComponentSetId": 0, "JobSelectionTypeId": 0, "JobSetId": 0 }, { "ReportQueryId": -611, "QueryName": "Radford All Software", "IsSystemQuery": true, "SurveyId": 6, "SurveyCode": "GSS", "SurveyRecordId": "6c825369-7b1b-4cca-8dc2-6c8b0a4d9dae", "CreatedOn": "\/Date(1527799804810-0000)\/", "ModifiedOn": "\/Date(1531446093900-0000)\/", "ServerTimeOffsetMinute": -300, "DisplayOrder": 11, "CreatedBy": " ", "RemComponentSetId": 0, "JobSelectionTypeId": 0, "JobSetId": 0 }, { "ReportQueryId": -612, "QueryName": "Radford All Semiconductor Components", "IsSystemQuery": true, "SurveyId": 6, "SurveyCode": "GSS", "SurveyRecordId": "6c825369-7b1b-4cca-8dc2-6c8b0a4d9dae", "CreatedOn": "\/Date(1527799804810-0000)\/", "ModifiedOn": "\/Date(1531446093900-0000)\/", "ServerTimeOffsetMinute": -300, "DisplayOrder": 12, "CreatedBy": " ", "RemComponentSetId": 0, "JobSelectionTypeId": 0, "JobSetId": 0 }, { "ReportQueryId": -613, "QueryName": "Radford All Medical Devices", "IsSystemQuery": true, "SurveyId": 6, "SurveyCode": "GSS", "SurveyRecordId": "6c825369-7b1b-4cca-8dc2-6c8b0a4d9dae", "CreatedOn": "\/Date(1527799804810-0000)\/", "ModifiedOn": "\/Date(1531446093900-0000)\/", "ServerTimeOffsetMinute": -300, "DisplayOrder": 13, "CreatedBy": " ", "RemComponentSetId": 0, "JobSelectionTypeId": 0, "JobSetId": 0 }, { "ReportQueryId": -614, "QueryName": "Radford All Technology", "IsSystemQuery": true, "SurveyId": 6, "SurveyCode": "GSS", "SurveyRecordId": "6c825369-7b1b-4cca-8dc2-6c8b0a4d9dae", "CreatedOn": "\/Date(1527799804810-0000)\/", "ModifiedOn": "\/Date(1531446093900-0000)\/", "ServerTimeOffsetMinute": -300, "DisplayOrder": 14, "CreatedBy": " ", "RemComponentSetId": 0, "JobSelectionTypeId": 0, "JobSetId": 0 }, { "ReportQueryId": -615, "QueryName": "Radford All Life Sciences", "IsSystemQuery": true, "SurveyId": 6, "SurveyCode": "GSS", "SurveyRecordId": "6c825369-7b1b-4cca-8dc2-6c8b0a4d9dae", "CreatedOn": "\/Date(1527799804810-0000)\/", "ModifiedOn": "\/Date(1531446093900-0000)\/", "ServerTimeOffsetMinute": -300, "DisplayOrder": 15, "CreatedBy": " ", "RemComponentSetId": 0, "JobSelectionTypeId": 0, "JobSetId": 0 }] };
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
let cam = toCamel(r.Results);
const init_query: Query[] = cam;
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

export {
  localData, links, init_config, init_query,
  jobs_selection, default_list
};

export class Data {

  public static testData() {
    const data = [
      { ID: 1, ParentID: -1, Name: "Casey Houston", JobTitle: "Vice President", Age: 32 },
      { ID: 2, ParentID: 1, Name: "Gilberto Todd", JobTitle: "Director", Age: 41 },
      { ID: 3, ParentID: 2, Name: "Tanya Bennett", JobTitle: "Director", Age: 29 },
      { ID: 4, ParentID: 2, Name: "Jack Simon", JobTitle: "Software Developer", Age: 33 },
      { ID: 5, ParentID: 8, Name: "Celia Martinez", JobTitle: "Senior Software Developer", Age: 44 },
      { ID: 6, ParentID: -1, Name: "Erma Walsh", JobTitle: "CEO", Age: 52 },
      { ID: 7, ParentID: 2, Name: "Debra Morton", JobTitle: "Associate Software Developer", Age: 35 },
      { ID: 8, ParentID: 10, Name: "Erika Wells", JobTitle: "Software Development Team Lead", Age: 50 },
      { ID: 9, ParentID: 8, Name: "Leslie Hansen", JobTitle: "Associate Software Developer", Age: 28 },
      { ID: 10, ParentID: -1, Name: "Eduardo Ramirez", JobTitle: "Development Manager", Age: 53 }
    ];
    return data;

  }
  public static countryData() {

 const data= [
  {
    "key": "AF",
    "value": "Afganistan"
  },
  {
    "key": "AX",
    "value": "Ålandeilande"
  },
  {
    "key": "AL",
    "value": "Albanië"
  },
  {
    "key": "DZ",
    "value": "Algerië"
  },
  {
    "key": "AS",
    "value": "Amerikaanse Samoa"
  },
  {
    "key": "AD",
    "value": "Andorra"
  },
  {
    "key": "AO",
    "value": "Angola"
  },
  {
    "key": "AI",
    "value": "Anguilla"
  },
  {
    "key": "AQ",
    "value": "Antarktika"
  },
  {
    "key": "AG",
    "value": "Antigua en Barbuda"
  },
  {
    "key": "AR",
    "value": "Argentinië"
  },
  {
    "key": "AM",
    "value": "Armenië"
  },
  {
    "key": "AW",
    "value": "Aruba"
  },
  {
    "key": "AC",
    "value": "Ascensioneiland"
  },
  {
    "key": "AU",
    "value": "Australië"
  },
  {
    "key": "AZ",
    "value": "Azerbeidjan"
  },
  {
    "key": "BS",
    "value": "Bahamas"
  },
  {
    "key": "BH",
    "value": "Bahrein"
  },
  {
    "key": "BD",
    "value": "Bangladesj"
  },
  {
    "key": "BB",
    "value": "Barbados"
  },
  {
    "key": "BY",
    "value": "Belarus"
  },
  {
    "key": "BE",
    "value": "België"
  },
  {
    "key": "BZ",
    "value": "Belize"
  },
  {
    "key": "BJ",
    "value": "Benin"
  },
  {
    "key": "BM",
    "value": "Bermuda"
  },
  {
    "key": "BT",
    "value": "Bhoetan"
  },
  {
    "key": "BO",
    "value": "Bolivië"
  },
  {
    "key": "BA",
    "value": "Bosnië en Herzegowina"
  },
  {
    "key": "BW",
    "value": "Botswana"
  },
  {
    "key": "BR",
    "value": "Brasilië"
  },
  {
    "key": "IO",
    "value": "Brits-Indiese Oseaangebied"
  },
  {
    "key": "VG",
    "value": "Britse Maagde-eilande"
  },
  {
    "key": "BN",
    "value": "Broenei"
  },
  {
    "key": "BG",
    "value": "Bulgarye"
  },
  {
    "key": "BF",
    "value": "Burkina Faso"
  },
  {
    "key": "BI",
    "value": "Burundi"
  },
  {
    "key": "EA",
    "value": "Ceuta en Melilla"
  },
  {
    "key": "CL",
    "value": "Chili"
  },
  {
    "key": "CO",
    "value": "Colombië"
  },
  {
    "key": "KM",
    "value": "Comore"
  },
  {
    "key": "CK",
    "value": "Cookeilande"
  },
  {
    "key": "CR",
    "value": "Costa Rica"
  },
  {
    "key": "CW",
    "value": "Curaçao"
  },
  {
    "key": "CD",
    "value": "Demokratiese Republiek van die Kongo"
  },
  {
    "key": "DK",
    "value": "Denemarke"
  },
  {
    "key": "DG",
    "value": "Diego Garcia"
  },
  {
    "key": "DJ",
    "value": "Djiboeti"
  },
  {
    "key": "DM",
    "value": "Dominica"
  },
  {
    "key": "DO",
    "value": "Dominikaanse Republiek"
  },
  {
    "key": "DE",
    "value": "Duitsland"
  },
  {
    "key": "EC",
    "value": "Ecuador"
  },
  {
    "key": "EG",
    "value": "Egipte"
  },
  {
    "key": "IM",
    "value": "Eiland Man"
  },
  {
    "key": "GQ",
    "value": "Ekwatoriaal-Guinee"
  },
  {
    "key": "SV",
    "value": "El Salvador"
  },
  {
    "key": "ER",
    "value": "Eritrea"
  },
  {
    "key": "EE",
    "value": "Estland"
  },
  {
    "key": "ET",
    "value": "Ethiopië"
  },
  {
    "key": "FK",
    "value": "Falklandeilande"
  },
  {
    "key": "FO",
    "value": "Faroëreilande"
  },
  {
    "key": "FJ",
    "value": "Fidji"
  },
  {
    "key": "PH",
    "value": "Filippyne"
  },
  {
    "key": "FI",
    "value": "Finland"
  },
  {
    "key": "FR",
    "value": "Frankryk"
  },
  {
    "key": "GF",
    "value": "Frans-Guyana"
  },
  {
    "key": "PF",
    "value": "Frans-Polinesië"
  },
  {
    "key": "TF",
    "value": "Franse Suidelike Gebiede"
  },
  {
    "key": "GA",
    "value": "Gaboen"
  },
  {
    "key": "GM",
    "value": "Gambië"
  },
  {
    "key": "GE",
    "value": "Georgië"
  },
  {
    "key": "GH",
    "value": "Ghana"
  },
  {
    "key": "GI",
    "value": "Gibraltar"
  },
  {
    "key": "GD",
    "value": "Grenada"
  },
  {
    "key": "GR",
    "value": "Griekeland"
  },
  {
    "key": "GL",
    "value": "Groenland"
  },
  {
    "key": "GP",
    "value": "Guadeloupe"
  },
  {
    "key": "GU",
    "value": "Guam"
  },
  {
    "key": "GT",
    "value": "Guatemala"
  },
  {
    "key": "GG",
    "value": "Guernsey"
  },
  {
    "key": "GN",
    "value": "Guinee"
  },
  {
    "key": "GW",
    "value": "Guinee-Bissau"
  },
  {
    "key": "GY",
    "value": "Guyana"
  },
  {
    "key": "HT",
    "value": "Haïti"
  },
  {
    "key": "HN",
    "value": "Honduras"
  },
  {
    "key": "HU",
    "value": "Hongarye"
  },
  {
    "key": "HK",
    "value": "Hongkong SAS Sjina"
  },
  {
    "key": "IE",
    "value": "Ierland"
  },
  {
    "key": "IN",
    "value": "Indië"
  },
  {
    "key": "ID",
    "value": "Indonesië"
  },
  {
    "key": "IQ",
    "value": "Irak"
  },
  {
    "key": "IR",
    "value": "Iran"
  },
  {
    "key": "IL",
    "value": "Israel"
  },
  {
    "key": "IT",
    "value": "Italië"
  },
  {
    "key": "CI",
    "value": "Ivoorkus"
  },
  {
    "key": "JM",
    "value": "Jamaika"
  },
  {
    "key": "JP",
    "value": "Japan"
  },
  {
    "key": "YE",
    "value": "Jemen"
  },
  {
    "key": "JE",
    "value": "Jersey"
  },
  {
    "key": "JO",
    "value": "Jordanië"
  },
  {
    "key": "KY",
    "value": "Kaaimanseilande"
  },
  {
    "key": "CV",
    "value": "Kaap Verde"
  },
  {
    "key": "KH",
    "value": "Kambodja"
  },
  {
    "key": "CM",
    "value": "Kameroen"
  },
  {
    "key": "CA",
    "value": "Kanada"
  },
  {
    "key": "IC",
    "value": "Kanariese Eilande"
  },
  {
    "key": "BQ",
    "value": "Karibiese Nederland"
  },
  {
    "key": "QA",
    "value": "Katar"
  },
  {
    "key": "KZ",
    "value": "Kazakstan"
  },
  {
    "key": "KE",
    "value": "Kenia"
  },
  {
    "key": "CX",
    "value": "Kerseiland"
  },
  {
    "key": "KG",
    "value": "Kirgistan"
  },
  {
    "key": "KI",
    "value": "Kiribati"
  },
  {
    "key": "UM",
    "value": "Klein afgeleë eilande van die VSA"
  },
  {
    "key": "KW",
    "value": "Koeweit"
  },
  {
    "key": "CC",
    "value": "Kokoseilande"
  },
  {
    "key": "CG",
    "value": "Kongo - Brazzaville"
  },
  {
    "key": "XK",
    "value": "Kosovo"
  },
  {
    "key": "HR",
    "value": "Kroasië"
  },
  {
    "key": "CU",
    "value": "Kuba"
  },
  {
    "key": "LA",
    "value": "Laos"
  },
  {
    "key": "LS",
    "value": "Lesotho"
  },
  {
    "key": "LV",
    "value": "Letland"
  },
  {
    "key": "LB",
    "value": "Libanon"
  },
  {
    "key": "LR",
    "value": "Liberië"
  },
  {
    "key": "LY",
    "value": "Libië"
  },
  {
    "key": "LI",
    "value": "Liechtenstein"
  },
  {
    "key": "LT",
    "value": "Litaue"
  },
  {
    "key": "LU",
    "value": "Luxemburg"
  },
  {
    "key": "MO",
    "value": "Macau SAS Sjina"
  },
  {
    "key": "MK",
    "value": "Macedonië"
  },
  {
    "key": "MG",
    "value": "Madagaskar"
  },
  {
    "key": "MW",
    "value": "Malawi"
  },
  {
    "key": "MV",
    "value": "Maledive"
  },
  {
    "key": "MY",
    "value": "Maleisië"
  },
  {
    "key": "ML",
    "value": "Mali"
  },
  {
    "key": "MT",
    "value": "Malta"
  },
  {
    "key": "MA",
    "value": "Marokko"
  },
  {
    "key": "MH",
    "value": "Marshalleilande"
  },
  {
    "key": "MQ",
    "value": "Martinique"
  },
  {
    "key": "MR",
    "value": "Mauritanië"
  },
  {
    "key": "MU",
    "value": "Mauritius"
  },
  {
    "key": "YT",
    "value": "Mayotte"
  },
  {
    "key": "MX",
    "value": "Meksiko"
  },
  {
    "key": "MM",
    "value": "Mianmar (Birma)"
  },
  {
    "key": "FM",
    "value": "Mikronesië"
  },
  {
    "key": "MD",
    "value": "Moldowa"
  },
  {
    "key": "MC",
    "value": "Monaco"
  },
  {
    "key": "MN",
    "value": "Mongolië"
  },
  {
    "key": "ME",
    "value": "Montenegro"
  },
  {
    "key": "MS",
    "value": "Montserrat"
  },
  {
    "key": "MZ",
    "value": "Mosambiek"
  },
  {
    "key": "NA",
    "value": "Namibië"
  },
  {
    "key": "NR",
    "value": "Nauru"
  },
  {
    "key": "NL",
    "value": "Nederland"
  },
  {
    "key": "NP",
    "value": "Nepal"
  },
  {
    "key": "NI",
    "value": "Nicaragua"
  },
  {
    "key": "NC",
    "value": "Nieu-Kaledonië"
  },
  {
    "key": "NZ",
    "value": "Nieu-Seeland"
  },
  {
    "key": "NE",
    "value": "Niger"
  },
  {
    "key": "NG",
    "value": "Nigerië"
  },
  {
    "key": "NU",
    "value": "Niue"
  },
  {
    "key": "KP",
    "value": "Noord-Korea"
  },
  {
    "key": "MP",
    "value": "Noord-Mariane-eilande"
  },
  {
    "key": "NO",
    "value": "Noorweë"
  },
  {
    "key": "NF",
    "value": "Norfolkeiland"
  },
  {
    "key": "UA",
    "value": "Oekraïne"
  },
  {
    "key": "UZ",
    "value": "Oesbekistan"
  },
  {
    "key": "OM",
    "value": "Oman"
  },
  {
    "key": "TL",
    "value": "Oos-Timor"
  },
  {
    "key": "AT",
    "value": "Oostenryk"
  },
  {
    "key": "PK",
    "value": "Pakistan"
  },
  {
    "key": "PW",
    "value": "Palau"
  },
  {
    "key": "PS",
    "value": "Palestynse gebiede"
  },
  {
    "key": "PA",
    "value": "Panama"
  },
  {
    "key": "PG",
    "value": "Papoea-Nieu-Guinee"
  },
  {
    "key": "PY",
    "value": "Paraguay"
  },
  {
    "key": "PE",
    "value": "Peru"
  },
  {
    "key": "PN",
    "value": "Pitcairneilande"
  },
  {
    "key": "PL",
    "value": "Pole"
  },
  {
    "key": "PT",
    "value": "Portugal"
  },
  {
    "key": "XA",
    "value": "Pseudo-Accents"
  },
  {
    "key": "XB",
    "value": "Pseudo-Bidi"
  },
  {
    "key": "PR",
    "value": "Puerto Rico"
  },
  {
    "key": "RE",
    "value": "Réunion"
  },
  {
    "key": "RO",
    "value": "Roemenië"
  },
  {
    "key": "RU",
    "value": "Rusland"
  },
  {
    "key": "RW",
    "value": "Rwanda"
  },
  {
    "key": "SB",
    "value": "Salomonseilande"
  },
  {
    "key": "WS",
    "value": "Samoa"
  },
  {
    "key": "SM",
    "value": "San Marino"
  },
  {
    "key": "ST",
    "value": "São Tomé en Príncipe"
  },
  {
    "key": "SA",
    "value": "Saoedi-Arabië"
  },
  {
    "key": "SN",
    "value": "Senegal"
  },
  {
    "key": "CF",
    "value": "Sentraal-Afrikaanse Republiek"
  },
  {
    "key": "RS",
    "value": "Serwië"
  },
  {
    "key": "SC",
    "value": "Seychelle"
  },
  {
    "key": "SL",
    "value": "Sierra Leone"
  },
  {
    "key": "SG",
    "value": "Singapoer"
  },
  {
    "key": "BL",
    "value": "Sint Barthélemy"
  },
  {
    "key": "SH",
    "value": "Sint Helena"
  },
  {
    "key": "KN",
    "value": "Sint Kitts en Nevis"
  },
  {
    "key": "LC",
    "value": "Sint Lucia"
  },
  {
    "key": "SX",
    "value": "Sint Maarten"
  },
  {
    "key": "MF",
    "value": "Sint Martin"
  },
  {
    "key": "PM",
    "value": "Sint Pierre en Miquelon"
  },
  {
    "key": "VC",
    "value": "Sint Vincent en die Grenadine"
  },
  {
    "key": "CY",
    "value": "Siprus"
  },
  {
    "key": "SY",
    "value": "Sirië"
  },
  {
    "key": "CN",
    "value": "Sjina"
  },
  {
    "key": "SK",
    "value": "Slowakye"
  },
  {
    "key": "SI",
    "value": "Slowenië"
  },
  {
    "key": "SD",
    "value": "Soedan"
  },
  {
    "key": "SO",
    "value": "Somalië"
  },
  {
    "key": "ES",
    "value": "Spanje"
  },
  {
    "key": "LK",
    "value": "Sri Lanka"
  },
  {
    "key": "ZA",
    "value": "Suid-Afrika"
  },
  {
    "key": "GS",
    "value": "Suid-Georgië en die Suidelike Sandwicheilande"
  },
  {
    "key": "KR",
    "value": "Suid-Korea"
  },
  {
    "key": "SS",
    "value": "Suid-Soedan"
  },
  {
    "key": "SR",
    "value": "Suriname"
  },
  {
    "key": "SJ",
    "value": "Svalbard en Jan Mayen"
  },
  {
    "key": "SZ",
    "value": "Swaziland"
  },
  {
    "key": "SE",
    "value": "Swede"
  },
  {
    "key": "CH",
    "value": "Switserland"
  },
  {
    "key": "TJ",
    "value": "Tadjikistan"
  },
  {
    "key": "TW",
    "value": "Taiwan"
  },
  {
    "key": "TZ",
    "value": "Tanzanië"
  },
  {
    "key": "TH",
    "value": "Thailand"
  },
  {
    "key": "TG",
    "value": "Togo"
  },
  {
    "key": "TK",
    "value": "Tokelau"
  },
  {
    "key": "TO",
    "value": "Tonga"
  },
  {
    "key": "TT",
    "value": "Trinidad en Tobago"
  },
  {
    "key": "TA",
    "value": "Tristan da Cunha"
  },
  {
    "key": "TD",
    "value": "Tsjad"
  },
  {
    "key": "CZ",
    "value": "Tsjeggië"
  },
  {
    "key": "TN",
    "value": "Tunisië"
  },
  {
    "key": "TM",
    "value": "Turkmenistan"
  },
  {
    "key": "TC",
    "value": "Turks- en Caicoseilande"
  },
  {
    "key": "TR",
    "value": "Turkye"
  },
  {
    "key": "TV",
    "value": "Tuvalu"
  },
  {
    "key": "UG",
    "value": "Uganda"
  },
  {
    "key": "UY",
    "value": "Uruguay"
  },
  {
    "key": "VU",
    "value": "Vanuatu"
  },
  {
    "key": "VA",
    "value": "Vatikaanstad"
  },
  {
    "key": "VE",
    "value": "Venezuela"
  },
  {
    "key": "AE",
    "value": "Verenigde Arabiese Emirate"
  },
  {
    "key": "GB",
    "value": "Verenigde Koninkryk"
  },
  {
    "key": "US",
    "value": "Verenigde State van Amerika"
  },
  {
    "key": "VN",
    "value": "Viëtnam"
  },
  {
    "key": "VI",
    "value": "VSA se Maagde-eilande"
  },
  {
    "key": "WF",
    "value": "Wallis en Futuna"
  },
  {
    "key": "EH",
    "value": "Wes-Sahara"
  },
  {
    "key": "IS",
    "value": "Ysland"
  },
  {
    "key": "ZM",
    "value": "Zambië"
  },
  {
    "key": "ZW",
    "value": "Zimbabwe"
  }
]
   // https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-name.json



    return data;

  }
}
