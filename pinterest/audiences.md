# Pinterest API v5: Audiences

> Source: Pinterest REST API v5 OpenAPI spec (https://github.com/pinterest/api-description, v5.32.0); docs https://developers.pinterest.com/docs/api/v5/. Base URL: https://api.pinterest.com/v5. Fetched 2026-11-19.

Operations: 4

---

## POST /ad_accounts/{ad_account_id}/audiences

**Create audience**

Create a new audience for the ad account.

Operation ID: `audiences/create`

Scopes: pinterest_oauth2: ads:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `AdAccountsAudienceCreate`

**Response 200** (`application/json`): `AdAccountsAudience`

**Response 201** (`application/json`): `AdAccountsAudience`

---

## GET /ad_accounts/{ad_account_id}/audiences

**List audiences**

Get list of audiences for the ad account.

Operation ID: `audiences/list`

Scopes: pinterest_oauth2: ads:read; client_credentials: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| bookmark | query | string |  | Cursor used to fetch the next page of items |
| page_size | query | integer |  | Maximum number of items to include in a single page. See documentation on [Pagination](/docs/reference/pagination/) for more information. _(default 25; minimum 1; maximum 250)_ |
| order | query | `Pinterest.Lib.PaginationOrder` |  | The order in which to sort the items returned: "ASCENDING" or "DESCENDING" by ID. Note that higher-value IDs are associated with more-recently added items. _(default "ASCENDING")_ |
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |
| ownership_type | query | `AudienceOwnershipType` |  | _(default "OWNED")_ |
| exclude_nca | query | boolean |  | When true, excludes audiences derived from new customer acquisition (expanded matching) customer lists from the result. Defaults to false (include all). _(default false)_ |

**Response 200** (`application/json`): object{bookmark: string, items: array<`AdAccountsAudience`>}

---

## PATCH /ad_accounts/{ad_account_id}/audiences/{audience_id}

**Update audience**

Update an existing audience for the ad account.

Operation ID: `audiences/update`

Scopes: pinterest_oauth2: ads:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| audience_id | path | string | yes | Audience ID. |
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `AdAccountsAudienceUpdate`

**Response 200** (`application/json`): `AdAccountsAudience`

---

## GET /ad_accounts/{ad_account_id}/audiences/{audience_id}

**Get audience**

Get a specific audience given the audience ID.

Operation ID: `audiences/get`

Scopes: pinterest_oauth2: ads:read; client_credentials: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| audience_id | path | string | yes | Audience ID. |
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Response 200** (`application/json`): `AdAccountsAudience`

---

## Schemas

### `AdAccountsAudience`

| Field | Type | Required | Description |
|---|---|---|---|
| ad_account_id | string |  | Ad account ID. |
| audience_type | `AudienceType` |  | [Audience types](/docs/reference/glossary/#Audience Types): ACTALIKE, ENGAGEMENT, CUSTOMER_LIST and VISITOR |
| category | string |  | Audience category. |
| created_by_company_name | string |  | The company that created this audience. _(nullable; read-only)_ |
| created_timestamp | integer |  | Creation time. Unix timestamp in seconds. _(nullable; read-only)_ |
| data_source | `PinnerListDataSource` |  | Audience data source. |
| description | string |  | Audience description. _(nullable)_ |
| geography | array<`Country`> |  | Audience geography as ISO 3166-1 alpha-2 country codes. |
| id | string | yes | Audience ID. |
| is_nca | boolean |  | Whether the audience derives from a new customer acquisition (expanded matching) customer list. Read-only. _(read-only)_ |
| name | string |  | Audience name. |
| refresh_cadence | `PinnerListRefreshCadence` |  | Audience refresh cadence. |
| rule | `AdAccountsAudienceRule` |  |  |
| size | integer |  | Audience size. _(nullable; read-only)_ |
| status | `AudienceStatus` |  | Audience status. READY, INITIALIZING, TOO_SMALL - Each audience list needs to have at least 100 people with Pinterest accounts before you can start using it. _(read-only)_ |
| type | string |  | Always "audience". _(read-only)_ |
| updated_timestamp | integer |  | Last update time. Unix timestamp in seconds. _(nullable; read-only)_ |
| vertical | `PinnerListVertical` |  | Audience vertical. |

### `AdAccountsAudienceCreate`

Resource create operation model.

| Field | Type | Required | Description |
|---|---|---|---|
| ad_account_id | string |  | Ad account ID. |
| audience_type | `AudienceType` |  | [Audience types](/docs/reference/glossary/#Audience Types): ACTALIKE, ENGAGEMENT, CUSTOMER_LIST and VISITOR |
| description | string |  | Audience description. _(nullable)_ |
| name | string |  | Audience name. |
| rule | `AdAccountsAudienceRule` |  |  |

### `AdAccountsAudienceUpdate`

Resource create or update operation model.

| Field | Type | Required | Description |
|---|---|---|---|
| ad_account_id | string |  | Ad account ID. |
| audience_type | `AudienceType` |  | [Audience types](/docs/reference/glossary/#Audience Types): ACTALIKE, ENGAGEMENT, CUSTOMER_LIST and VISITOR |
| category | string |  | Audience category. |
| data_source | `PinnerListDataSource` |  | Audience data source. |
| description | string |  | Audience description. _(nullable)_ |
| geography | array<`Country`> |  | Audience geography as ISO 3166-1 alpha-2 country codes. |
| name | string |  | Audience name. |
| operation_type | `AudienceUpdateOperationType` |  | Audience operation type (update or remove). Only valid in update request body. |
| refresh_cadence | `PinnerListRefreshCadence` |  | Audience refresh cadence. |
| rule | `AdAccountsAudienceRule` |  |  |
| vertical | `PinnerListVertical` |  | Audience vertical. |

### `AudienceOwnershipType`

Filter audiences by ownership type.

Type: string enum(OWNED, RECEIVED)

### `Pinterest.Lib.PaginationOrder`

Type: string enum(ASCENDING, DESCENDING)

### `AdAccountsAudienceRule`

JSON object defining targeted audience users. Example rule formats per audience type:
CUSTOMER_LIST: { "customer_list_id": "<customer list ID>"}
ACTALIKE: { "seed_id": ["<audience ID>"], "country": "US", "percentage": "10" }
(Valid countries include: "US", "CA", and "GB". Percentage should be 1-10.
The targeted audience should be this % size across Pinterest.)
VISITOR: { "visitor_source_id": ["<conversion tag ID>"], "retention_days": "180", "event_source": {"=": ["web", "mobile"]}, "ingestion_source": {"=": ["tag"]}}
(Retention days should be 1-540. Retention applies to specific customers.)
ENGAGEMENT: {"engagement_domain": ["www.example.com"], "engager_type": 1}
Learn more about [engagement audiences](/docs/work-with-targets-and-audiences/create-audiences/#engagement-audience).

| Field | Type | Required | Description |
|---|---|---|---|
| ad_account_id | string |  | Ad account ID. |
| ad_id | array<string> |  | Ad ID for engagement audience filter. |
| campaign_id | array<string> |  | Campaign ID for engagement audience filter. |
| country | string |  | Valid countries include: "US", "CA", and "GB". |
| customer_list_id | string |  | Customer list ID. For CUSTOMER_LIST `audience_type`. |
| engagement_domain | array<string> |  | The audience account's verified domain. **Required** for ENGAGEMENT `audience_type`. |
| engagement_type | string |  | Engagement type enum. Optional for ENGAGEMENT `audience_type`. Supported values are `click`, `save`, `closeup`, `comment` and `like`. All engagements are included if this field is not set. |
| engager_type | integer |  | Optional for ENGAGEMENT. Engager type value should be 1-2. |
| event | string |  | A Pinterest tag event. Optional for VISITOR `audience_type`. Possible values are `pagevisit`, `signup`, `checkout`, `viewcategory`, `search`, `addtocart`, `watchvideo`, `lead`, and `custom`. This field also accepts a partner-defined Pinterest tag event. |
| event_data | `EventData` |  |  |
| event_source | object |  | Optional for VISITOR. You can use it as a {'=': [value]}. Supported values are: web, mobile, offline |
| ingestion_source | object |  | Optional for VISITOR. You can use it as a {'=': [value]}. Supported values are: tag, mmp, file_upload, conversions_api |
| objective_type | array<`AudienceObjectiveType`> |  | Objective for engagement audience filter. |
| percentage | string \| integer |  | Percentage should be 1-10. The targeted audience should be this % size across Pinterest. |
| pin_id | array<string> |  | IDs of engaged organic pins. Optional for ENGAGEMENT `audience_type`. For example, "pin_id:": ["34567"] |
| prefill | boolean |  | Optional for VISITOR `audience_type`. If `true`, the specified rule on existing engagement data is applied to pre-populate the audience. If `false`, the audience is empty at creation time. The default is `true`. |
| retention_days | integer |  | Number of days a Pinterest user remains in the audience. Optional for ENGAGEMENT and VISITOR `audience_type`. Accepted range is 1-540. Defaults to 180 if not specified. |
| seed_id | array<integer> \| array<string> |  | Audience ID(s). For ACTALIKE `audience_type`. |
| url | array<string> |  | Optional for ENGAGEMENT or VISITOR `audience_type`. For ENGAGEMENT, it is the engaged pin's URL. For VISITOR, you can use it as a string or a {operator: value} object for filtering visitors based on conversion tag event URLs. Supported operators are [ =, !=, contains, not_contains]. Example 1:  "url": "http://www.myonlinestore123.com/view_item/shoe" Example 2: "url": {"contains": "/view_item/shoe"} |
| visitor_source_id | string \| array<string> |  | The conversion tag ID, or the Pinterest tag ID, that you use on your website. For VISITOR `audience_type`. |

### `AudienceStatus`

Audience processing status

Type: string enum(INITIALIZING, READY, TOO_SMALL, ELIGIBLE, PERSONAS_INELIGIBLE_SIZE, PERSONAS_INITIALIZING)

### `AudienceType`

Audience type

Type: string enum(CUSTOMER_LIST, VISITOR, ENGAGEMENT, ACTALIKE, PERSONA)

### `Country`

Country ID from ISO 3166-1 alpha-2.

Type: string enum(AD, AE, AF, AG, AI, AL, AM, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BV, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DJ, DK, DM, DO, DZ, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HM, HN, HR, HT, HU, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, False, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, YE, YT, ZA, ZM, ZW)

### `PinnerListDataSource`

Audience data source.

Type: string enum(UNSPECIFIED)

### `PinnerListRefreshCadence`

Audience refresh cadence.

Type: string enum(UNSPECIFIED)

### `PinnerListVertical`

Audience vertical.

Type: string enum(UNSPECIFIED)

### `AudienceUpdateOperationType`

Audience operation type (update or remove).

Type: string enum(UPDATE, REMOVE)

### `AudienceObjectiveType`

Objective for engagement audience filter. Used only on ad account audience rule; matches baseline ObjectiveType (no VIDEO_VIEW, WEB_SESSIONS).

Type: string enum(AWARENESS, CONSIDERATION, WEB_CONVERSION, CATALOG_SALES, VIDEO_COMPLETION, SALES)

### `EventData`

Optional for VISITOR `audience_type`.
    With the Pinterest tag, you can use event data to capture event details from your website.
    This object lists all the available predefined event data fields in the Pinterest tag.
    You can include these event data fields as part of a VISITOR audience’s `rule`; however, you **must** specify an `event` for the `event_data` fields to be evaluated.
    Besides what’s listed, you can also create your own set of `event_data` fields and define their usages or purposes according to your website needs.
    However, the benefit of using the predefined event data fields is that we can provide various metrics based on those fields' data.
    Examples per `event` type:
    `pagevisit`
    "event_data": { "page_name": "My online store 123 | view items | shoe" }
    `signup`
    "event_data": { "lead_type": "New release promotion" }
    `checkout`
    "event_data": { "value": 116, "order_quantity": 2, "currency": "USD", "line_items": [ { "product_name": "Pillows (Set of 2)", "product_id": "11", "product_price": 48, "product_quantity": 1 }, { "product_name": "Pillows, Large (Set of 2)", "product_id": "15", "product_price": 68, "product_quantity": 1 } ] }
    `addtocart`
    "event_data": { "value": 499, "order_quantity": 1, "currency": "USD", "line_items": [ { "product_name": "Red leather boots", "product_id": "3486", "product_category": "shoe", "product_variant_id": "JB11103000", "product_price": 499, "product_quantity": "1", "product_brand": "My brand" }]}
    `watchvideo`
    "event_data": { "video_title" : "My Product Video 01" }
    `lead`
    "event_data": { "lead_type": "Newsletter" }

| Field | Type | Required | Description |
|---|---|---|---|
| currency | `Currency` |  | Currency. For example, 'USD'. |
| lead_type | string |  | Promotion code. For example, 'Newsletter'. |
| line_items | `LineItem` |  |  |
| order_id | string |  | Order ID. For example, 'X-151481'. |
| order_quantity | integer |  | Order quantity. For example, 1. |
| page_name | string |  | Page name. For example, 'Our Favorite Pins on Pinterest'. |
| promo_code | string |  | Promotion code. For example, 'WINTER10'. |
| property | string |  | Property. For example, 'Athleta'. |
| search_query | string |  | Search query string. For example, 'boots'. |
| value | string |  | Product value. For example, '199.98'. |
| video_title | string |  | Video title. For example, 'How to style your Parker Boots'. |

### `Currency`

Currency Codes from ISO 4217

Type: string enum(UNK, USD, GBP, CAD, EUR, AUD, NZD, SEK, ILS, CHF, HKD, JPY, SGD, KRW, NOK, DKK, PLN, RON, HUF, CZK, BRL, MXN, ARS, CLP, COP, INR, TRY)

### `LineItem`

| Field | Type | Required | Description |
|---|---|---|---|
| product_brand | string |  | Product brand. For example, 'Parker'. |
| product_category | string |  | Product category. For example, 'Shoes'. |
| product_id | integer |  | Product ID. For example, 1414. |
| product_name | string |  | Product name. For example, 'Parker Boots'. |
| product_price | string |  | Product price. For example, '99.99'. |
| product_quantity | integer |  | Product quantity. For example, 2. |
| product_variant | string |  | Product variant. For example, 'Red'. |
| product_variant_id | string |  | Product variant ID. For example, '1414-34832'. |

