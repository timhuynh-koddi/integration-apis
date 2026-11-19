# Pinterest API v5: Catalog Reports

> Source: Pinterest REST API v5 OpenAPI spec (https://github.com/pinterest/api-description, v5.32.0); docs https://developers.pinterest.com/docs/api/v5/. Base URL: https://api.pinterest.com/v5. Fetched 2026-11-19.

Operations: 3

---

## GET /catalogs/reports

**Get catalogs report**

This returns a URL to a report given a token returned from [Build catalogs report](/docs/api/v5/#operation/reports/create). You can use the URL to download the report.
- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account: Owner, Admin, Catalogs Manager.

Operation ID: `reports/get`

Scopes: pinterest_oauth2: catalogs:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |
| token | query | string | yes | Token returned from the post request creation call |

**Response 200** (`application/json`): `CatalogsReport`

---

## POST /catalogs/reports

**Build catalogs report**

Async request to create a report of the catalog owned by the "operation user_account". This endpoint generates a report upon receiving the first approved request of the day. Any following requests with identical parameters will yield the same report even if data has changed.
- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account: Owner, Admin, Catalogs Manager.

Note: The All Items report is limited to 25 million items per catalog.

Operation ID: `reports/create`

Scopes: pinterest_oauth2: catalogs:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `CatalogsReportParameters`

**Response 200** (`application/json`): `CatalogsCreateReportResponse`

**Response 201** (`application/json`): `CatalogsCreateReportResponse`

---

## GET /catalogs/reports/stats

**List report stats**

List aggregated numbers of issues for a catalog owned by the "operation user_account".
- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account: Owner, Admin, Catalogs Manager.

Operation ID: `reports/stats`

Scopes: pinterest_oauth2: catalogs:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |
| parameters | query | `CatalogsReportStatsParameters` | yes | Contains the parameters for report identification. |
| bookmark | query | string |  | Cursor used to fetch the next page of items |
| page_size | query | integer |  | Maximum number of items to include in a single page. See documentation on [Pagination](/docs/reference/pagination/) for more information. _(default 25; minimum 1; maximum 250)_ |

**Response 200** (`application/json`): object{bookmark: string, items: array<`CatalogsReportStats`>}

---

## Schemas

### `CatalogsCreateReportResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| token | string |  | Token to be used to get the report |

### `CatalogsReport`

| Field | Type | Required | Description |
|---|---|---|---|
| report_status | string enum(FINISHED, IN_PROGRESS) |  |  |
| size | number |  | Size of the report in bytes _(nullable)_ |
| url | string |  | URL to download the report _(nullable)_ |

### `CatalogsReportParameters`

Report parameters

Type: `CatalogsRetailReportParameters` | `CatalogsHotelReportParameters`

### `CatalogsReportStats`

Diagnostics aggregated numbers

Type: `CatalogsReportFeedIngestionStats` | `CatalogsReportDistributionStats`

### `CatalogsReportStatsParameters`

Report stats parameters

Type: `CatalogsRetailReportStatsParameters` | `CatalogsHotelReportStatsParameters`

### `CatalogsHotelReportParameters`

Parameters for hotel report

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_type | string enum(HOTEL) | yes |  |
| report | `CatalogsHotelReportParametersReport` | yes |  |

### `CatalogsRetailReportParameters`

Parameters for retail report

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_type | string enum(RETAIL) | yes |  |
| report | `CatalogsRetailReportParametersReport` | yes |  |

### `CatalogsReportDistributionStats`

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_id | string |  | ID of the catalog entity. |
| code | integer |  | The event code that a diagnostics aggregated number references |
| code_label | string |  | A human-friendly label for the event code (e.g, 'SPAM') |
| ineligible_for_ads | boolean |  | Indicates if issue makes items ineligible for ads distribution |
| ineligible_for_organic | boolean |  | Indicates if issue makes items ineligible for organic distribution |
| message | string |  | Title message describing the diagnostic issue |
| occurrences | integer |  | Number of occurrences of the issue |
| report_type | string enum(DISTRIBUTION_ISSUES) |  |  |

### `CatalogsReportFeedIngestionStats`

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_id | string |  | ID of the catalog entity. |
| code | integer |  | The event code that a diagnostics aggregated number references |
| code_label | string |  | A human-friendly label for the event code (e.g, 'AVAILABILITY_INVALID') |
| message | string |  | Title message describing the diagnostic issue |
| occurrences | integer |  | Number of occurrences of the issue |
| report_type | string enum(FEED_INGESTION_ISSUES) |  |  |
| severity | string enum(WARN, ERROR) |  | An ERROR means that items have been dropped, while a WARN denotes that items have been ingested despite an issue |

### `CatalogsHotelReportStatsParameters`

Parameters for hotel report

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_type | string enum(HOTEL) | yes |  |
| report | `CatalogsHotelReportStatsParametersReport` | yes |  |

### `CatalogsRetailReportStatsParameters`

Parameters for retail report

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_type | string enum(RETAIL) | yes |  |
| report | `CatalogsRetailReportStatsParametersReport` | yes |  |

### `CatalogsHotelReportParametersReport`

Type: `CatalogsReportFeedIngestionFilter` | `CatalogsReportDistributionIssueFilter`

### `CatalogsRetailReportParametersReport`

Type: `CatalogsReportFeedIngestionFilter` | `CatalogsReportDistributionIssueFilter` | `CatalogsRetailReportAllItemsFilter`

### `CatalogsHotelReportStatsParametersReport`

Type: `CatalogsReportFeedIngestionFilter` | `CatalogsReportDistributionIssueFilter`

### `CatalogsRetailReportStatsParametersReport`

Type: `CatalogsReportFeedIngestionFilter` | `CatalogsReportDistributionIssueFilter`

### `CatalogsReportDistributionIssueFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_id | string |  | Unique identifier of a catalog. If not given, oldest catalog will be used |
| report_type | string enum(DISTRIBUTION_ISSUES) | yes |  |

### `CatalogsReportFeedIngestionFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| feed_id | string | yes | ID of the feed entity. |
| processing_result_id | string |  | Unique identifier of a feed processing result. It can be acquired from the "id" field of the "items" array within the response of the [List processing results for a given feed](/docs/api/v5/#operation/feed_processing_results/list). If not provided, default to most recent completed processing result. |
| report_type | string enum(FEED_INGESTION_ISSUES) | yes |  |

### `CatalogsRetailReportAllItemsFilter`

ALL_ITEMS filter for retail catalogs. Optional product_group_id scopes the report to items in that product group. If omitted, all items are included.

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_id | string |  | Unique identifier of a catalog. If not given, oldest catalog will be used |
| product_group_id | string |  | Optional product group ID. If omitted, all items are included. This feature is only available for allowlisted merchants. Please contact your account manager to enable this feature. |
| report_type | string enum(ALL_ITEMS) | yes |  |

