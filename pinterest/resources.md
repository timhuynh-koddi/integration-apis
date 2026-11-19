# Pinterest API v5: Resources

> Source: Pinterest REST API v5 OpenAPI spec (https://github.com/pinterest/api-description, v5.32.0); docs https://developers.pinterest.com/docs/api/v5/. Base URL: https://api.pinterest.com/v5. Fetched 2026-11-19.

Operations: 6

---

## GET /resources/ad_account_countries

**Get ad accounts countries**

Get Ad Accounts countries

Operation ID: `ad_account_countries/get`

Scopes: pinterest_oauth2: ads:read; client_credentials: ads:read

**Response 200** (`application/json`): object{items: array<`AdAccountsCountry`>}

---

## GET /resources/delivery_metrics

**Get available metrics' definitions**

Get the definitions for ads and organic metrics available across both synchronous and asynchronous report endpoints.
The `display_name` attribute will match how the metric is named in our native tools like Ads Manager.
See [Organic Analytics](/docs/api-features/analytics-overview/) and [Ads Analytics](/docs/api-features/ads-reporting/) for more information.

Operation ID: `delivery_metrics/get`

Scopes: pinterest_oauth2: ads:read, pins:read, user_accounts:read; client_credentials: ads:read, pins:read, user_accounts:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| report_type | query | `ReportType` |  | Report type. |

**Response 200** (`application/json`): object{items: array<`DeliveryMetricsResponseItemsItems`>}

---

## GET /resources/lead_form_questions

**Get lead form questions**

Get a list of all lead form question type names. Some questions might not be used.

**This endpoint is currently in beta and not available to all apps. [Learn more](/docs/getting-started/using-beta-and-restricted-features/).**

Operation ID: `lead_form_questions/get`

Scopes: pinterest_oauth2: ads:read

**Response 200**: The request has succeeded.

---

## GET /resources/metrics_ready_state

**Get metrics ready state**

Learn whether conversion or non-conversion metrics are finalized and ready to query.

Operation ID: `metrics_ready_state/get`

Scopes: pinterest_oauth2: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| date | query | string | yes | Analytics reports request date (UTC). Format: YYYY-MM-DD |

**Response 200** (`application/json`): `BookClosed`

---

## GET /resources/targeting/interests/{interest_id}

**Get interest details**

Get details of a specific interest given interest ID.

Click [here](https://docs.google.com/spreadsheets/d/1HxL-0Z3p2fgxis9YBP2HWC3tvPrs1hAuHDRtH-NJTIM/edit#gid=118370875) for a spreadsheet listing interests and their IDs.

Operation ID: `interest_targeting_options/get`

Scopes: pinterest_oauth2: ads:read; client_credentials: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| interest_id | path | string | yes | Unique identifier of an interest. _(maxLength 18)_ |

**Response 200** (`application/json`): `SingleInterestTargetingOption`

---

## GET /resources/targeting/{targeting_type}

**Get targeting options**

You can use targeting values in ads placement to define your intended audience.

    Targeting metrics are organized around targeting specifications.

    For more information on ads targeting, see [Audience targeting](https://help.pinterest.com/en/business/article/audience-targeting).

    **Sample return:**

    ```
    [{"36313": "Australia: Moreton Bay - North", "124735": "Canada: North Battleford", "36109": "Australia: Murray", "36108": "Australia: Mid North Coast", "36101": "Australia: Capital Region", "811": "U.S.: Reno", "36103": "Australia: Central West", "36102": "Australia: Central Coast", "36105": "Australia: Far West and Orana", "36104": "Australia: Coffs Harbour - Grafton", "36107": "Australia: Illawarra", "36106": "Australia: Hunter Valley Exc Newcastle", "554017": "New Zealand: Wanganui", "554016": "New Zealand: Marlborough", "554015": "New Zealand: Gisborne", "554014": "New Zealand: Tararua", "554013": "New Zealand: Invercargill", "GR": "Greece", "554011": "New Zealand: Whangarei", "554010": "New Zealand: Far North", "717": "U.S.: Quincy-Hannibal-Keokuk", "716": "U.S.: Baton Rouge",...}]
    ```

Operation ID: `targeting_options/get`

Scopes: pinterest_oauth2: ads:read; client_credentials: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| targeting_type | path | `PublicTargetingType` | yes | Public targeting type |
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |
| client_id | query | string |  | Client ID _(maxLength 18)_ |
| oauth_signature | query | string |  | Oauth signature |
| timestamp | query | string |  | Timestamp. |

**Response 200** (`application/json`): array<`TargetingOption`>

---

## Schemas

### `AdAccountsCountry`

| Field | Type | Required | Description |
|---|---|---|---|
| code | `Country` | yes |  |
| currency | string | yes | Country currency. |
| index | number | yes | Country index |
| name | string | yes | Country name |

### `BookClosed`

| Field | Type | Required | Description |
|---|---|---|---|
| conversion_metrics_ready | boolean | yes | Are conversion metrics ready? |
| non_conversion_metrics_ready | boolean | yes | Are non-conversion metrics ready? |

### `DeliveryMetricsResponseItemsItems`

| Field | Type | Required | Description |
|---|---|---|---|
| category | string enum(ADS, ORGANIC) |  | Category name |
| definition | string |  | How the metric is defined. |
| display_name | string |  | Display name, when available. If unavaible it will not be returned. Matches how the metric is named in our native tools like Pinterest Ads Manager. |
| name | string |  | Metric's name. |

### `PublicTargetingType`

Public ad targeting type with external names

Type: string enum(APPTYPE, GENDER, LOCALE, AGE_BUCKET, LOCATION, GEO, INTEREST, KEYWORD, AUDIENCE_INCLUDE, AUDIENCE_EXCLUDE)

### `ReportType`

Type: string enum(SYNC, ASYNC)

### `SingleInterestTargetingOption`

| Field | Type | Required | Description |
|---|---|---|---|
| child_interests | array<string> | yes |  |
| id | string | yes |  |
| level | integer | yes |  |
| name | string | yes |  |

### `TargetingOption`

Type: object

### `Country`

Country ID from ISO 3166-1 alpha-2.

Type: string enum(AD, AE, AF, AG, AI, AL, AM, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BV, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DJ, DK, DM, DO, DZ, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HM, HN, HR, HT, HU, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, False, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, YE, YT, ZA, ZM, ZW)

