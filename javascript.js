function submit() {
  let name = document.getElementById("nameInput").value;
  nationalize(name);
}

function nationalize(name) {
  const API = "https://api.nationalize.io?name=";
  fetch(`${API}${name}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        const resultsContainer = document.getElementById("results");
        resultsContainer.innerHTML = "";
        const error = document.createElement("h4");
        error.textContent = "Failed to get data from API";
        resultsContainer.appendChild(error);
      }
    })
    .then((data) => {
      const resultsContainer = document.getElementById("results");
      resultsContainer.innerHTML = "";

      const countryProbabilities = data.country;
      countryProbabilities.forEach((item) => {
        if (item.country_id == "MQ") {
          item.country_id = "NO";
        }
        const result = document.createElement("div");
        result.style.display = "flex";
        result.style.gap = "10px";
        const country_id = document.createElement("p");
        country_id.style = "text-align: left;";
        let countryURL = "https://flagcdn.com/48x36/";
        countryURL += item.country_id.toLowerCase() + ".png";
        let img = document.createElement("img");
        img.src = countryURL;

        country_id.textContent = getCountryName(item.country_id) + ":";
        const probability = document.createElement("p");
        probability.textContent = (item.probability * 100).toFixed(1) + "%";

        if (country_id.textContent != "Country not found") {
          result.appendChild(img);
          result.appendChild(country_id);
          result.appendChild(probability);
          resultsContainer.appendChild(result);
        }
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
function getCountryName(countryCode) {
  const countryData = {
    XD: "Adele Island",
    AF: "Afghanistan",
    AX: "Aland Islands",
    XC: "Alaska",
    AL: "Albania",
    DZ: "Algeria",
    AS: "American Samoa",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AQ: "Antarctica",
    AG: "Antigua and Barbuda",
    AR: "Argentina",
    AM: "Armenia",
    AW: "Aruba",
    XE: "Ascension Island",
    AU: "Australia",
    AT: "Austria",
    AZ: "Azerbaijan",
    XA: "Azores",
    BS: "Bahamas",
    BH: "Bahrain",
    BD: "Bangladesh",
    BB: "Barbados",
    BY: "Belarus",
    BE: "Belgium",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bhutan",
    BO: "Bolivia",
    BQ: "Bonaire, Sint Eustatius and Saba",
    BA: "Bosnia and Herzegovina",
    BW: "Botswana",
    BV: "Bouvet Island",
    BR: "Brazil",
    IO: "British Indian Ocean Territory",
    BN: "Brunei Darussalam",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    CV: "Cabo Verde",
    KH: "Cambodia",
    CM: "Cameroon",
    CA: "Canada",
    KY: "Cayman Islands",
    CF: "Central African Republic",
    TD: "Chad",
    CL: "Chile",
    CN: "China",
    CX: "Christmas Island",
    CC: "Cocos (Keeling) Islands",
    CO: "Colombia",
    KM: "Comoros",
    CG: "Congo",
    CD: "Congo (DR)",
    CK: "Cook Islands",
    CR: "Costa Rica",
    CI: "Cote d'Ivoire",
    HR: "Croatia",
    XF: "Crozet Archipelago",
    CU: "Cuba",
    CW: "Curacao",
    CY: "Cyprus",
    CZ: "Czech Republic",
    CS: "Czechoslovakia",
    DK: "Denmark",
    DJ: "Djibouti",
    DM: "Dominica",
    DO: "Dominican Republic",
    TL: "East Timor",
    EC: "Ecuador",
    EG: "Egypt",
    SV: "El Salvador",
    GQ: "Equatorial Guinea",
    ER: "Eritrea",
    EE: "Estonia",
    ET: "Ethiopia",
    FK: "Falkland Islands",
    FO: "Faroe Islands",
    FJ: "Fiji",
    FI: "Finland",
    FR: "France",
    GF: "French Guiana",
    PF: "French Polynesia",
    TF: "French Southern Territories",
    GA: "Gabon",
    GM: "Gambia",
    GE: "Georgia",
    DD: "German Democratic Republic",
    DE: "Germany",
    GH: "Ghana",
    GI: "Gibraltar",
    GR: "Greece",
    GL: "Greenland",
    GD: "Grenada",
    GP: "Guadeloupe",
    GU: "Guam",
    GT: "Guatemala",
    GG: "Guernsey",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HT: "Haiti",
    HM: "Heard Island and McDonald Islands",
    VA: "Holy See",
    HN: "Honduras",
    HK: "Hong Kong",
    HU: "Hungary",
    IS: "Iceland",
    IN: "India",
    ID: "Indonesia",
    IR: "Iran",
    IQ: "Iraq",
    IE: "Ireland",
    IM: "Isle of Man",
    IL: "Israel",
    IT: "Italy",
    JM: "Jamaica",
    JP: "Japan",
    JE: "Jersey",
    JO: "Jordan",
    KZ: "Kazakhstan",
    KE: "Kenya",
    XG: "Kerguelen Islands",
    KI: "Kiribati",
    KR: "Korea",
    KW: "Kuwait",
    KG: "Kyrgyzstan",
    LA: "Lao Peoples Democratic Republic",
    LV: "Latvia",
    LB: "Lebanon",
    LS: "Lesotho",
    LR: "Liberia",
    LY: "Libya",
    LI: "Liechtenstein",
    LT: "Lithuania",
    LU: "Luxembourg",
    MO: "Macao",
    MK: "Macedonia (FYROM)",
    MG: "Madagascar",
    XB: "Madeira",
    MW: "Malawi",
    MY: "Malaysia",
    MV: "Maldives",
    ML: "Mali",
    MT: "Malta",
    MH: "Marshall Islands",
    MQ: "Mozamique", // corrected for problem in API
    MR: "Mauritania",
    MU: "Mauritius",
    YT: "Mayotte",
    MX: "Mexico",
    FM: "Micronesia",
    MD: "Moldova",
    MC: "Monaco",
    MN: "Mongolia",
    ME: "Montenegro",
    MS: "Montserrat",
    MA: "Morocco",
    MZ: "Mozambique",
    MM: "Myanmar",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Netherlands",
    AN: "Netherlands Antilles",
    NC: "New Caledonia",
    NZ: "New Zealand",
    NI: "Nicaragua",
    NE: "Niger",
    NG: "Nigeria",
    NU: "Niue",
    NF: "Norfolk Island",
    KP: "North Korea",
    MP: "Northern Mariana Islands",
    NO: "Norway",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Palestine",
    PA: "Panama",
    PG: "Papua New Guinea",
    PY: "Paraguay",
    PE: "Peru",
    PH: "Philippines",
    PN: "Pitcairn",
    PL: "Poland",
    PT: "Portugal",
    PR: "Puerto Rico",
    QA: "Qatar",
    RE: "Reunion",
    RO: "Romania",
    RU: "Russia",
    RW: "Rwanda",
    BL: "Saint Barthelemy",
    SH: "Saint Helena, Ascension and Tristan da Cunha",
    KN: "Saint Kitts and Nevis",
    LC: "Saint Lucia",
    MF: "Saint Martin (FR)",
    XI: "Saint Paul and Amsterdam Islands",
    PM: "Saint Pierre and Miquelon",
    VC: "Saint Vincent and the Grenadines",
    WS: "Samoa",
    SM: "San Marino",
    ST: "Sao Tome and Principe",
    SA: "Saudi Arabia",
    SN: "Senegal",
    RS: "Serbia",
    SC: "Seychelles",
    SL: "Sierra Leone",
    SG: "Singapore",
    SX: "Sint Maarten (NL)",
    SK: "Slovakia",
    SI: "Slovenia",
    SB: "Solomon Islands",
    SO: "Somalia",
    ZA: "South Africa",
    GS: "South Georgia",
    SS: "South Sudan",
    ES: "Spain",
    LK: "Sri Lanka",
    SD: "Sudan",
    SR: "Suriname",
    SJ: "Svalbard and Jan Mayen",
    SZ: "Swaziland",
    SE: "Sweden",
    CH: "Switzerland",
    SY: "Syrian Arab Republic",
    XH: "Tahiti",
    TW: "Taiwan (Province of China)",
    TJ: "Tajikistan",
    TZ: "Tanzania",
    TH: "Thailand",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad and Tobago",
    TN: "Tunisia",
    TR: "Turkey",
    TM: "Turkmenistan",
    TC: "Turks and Caicos Islands",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ukraine",
    AE: "United Arab Emirates",
    GB: "United Kingdom",
    UM: "United States",
    US: "United States",
    ZZ: "Unknown",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VU: "Vanuatu",
    VE: "Venezuela",
    VN: "Vietnam",
    VG: "Virgin Islands (GB)",
    VI: "Virgin Islands (US)",
    WF: "Wallis and Futuna",
    EH: "Western Sahara",
    YE: "Yemen",
    YU: "Yugoslavia",
    ZM: "Zambia",
    ZW: "Zimbabwe",
  };
  const countryName = countryData[countryCode];
  if (countryName) {
    return countryName;
  } else {
    return "Country not found"; // Handle the case where the country code is not found
  }
}
