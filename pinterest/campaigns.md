# Pinterest API v5: Campaigns

> Source: Pinterest REST API v5 OpenAPI spec (https://github.com/pinterest/api-description, v5.32.0); docs https://developers.pinterest.com/docs/api/v5/. Base URL: https://api.pinterest.com/v5. Fetched 2026-11-19.

Operations: 8

---

## GET /ad_accounts/{ad_account_id}/campaigns

**List campaigns**

Get a list of the campaigns in the specified `ad_account_id`, filtered by the specified options.
- The token's user_account must either be the Owner of the specified ad account, or have one of the necessary
roles granted to them via [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts): Admin, Analyst, Campaign Manager.

Operation ID: `campaigns/list`

Scopes: pinterest_oauth2: ads:read; client_credentials: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| bookmark | query | string |  | Cursor used to fetch the next page of items |
| page_size | query | integer |  | Maximum number of items to include in a single page. See documentation on [Pagination](/docs/reference/pagination/) for more information. _(default 25; minimum 1; maximum 250)_ |
| order | query | `Pinterest.Lib.PaginationOrder` |  | The order in which to sort the items returned: "ASCENDING" or "DESCENDING" by ID. Note that higher-value IDs are associated with more-recently added items. _(default "ASCENDING")_ |
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |
| campaign_ids | query | array<`CampaignIdType`> |  | List of Campaign Ids to use to filter the results. |
| entity_statuses | query | array<`EntityStatus`> |  | Entity status _(default ["ACTIVE", "PAUSED"])_ |

**Response 200** (`application/json`): object{bookmark: string, items: array<`Campaign`>}

---

## POST /ad_accounts/{ad_account_id}/campaigns

**Create campaigns**

Create multiple new campaigns. Every campaign has its own campaign_id and houses one or more ad groups, which contain one or more ads.

For more, see [Set up your campaign](https://help.pinterest.com/en/business/article/set-up-your-campaign/).

**Campaign objective types are changing!**

As part of objective simplification, `WEB_CONVERSION` and `CATALOG_SALES` objectives are being deprecated and replaced by `SALES` and `LEADS`. A new optional `intended_promotion_type` parameter is also being introduced, allowing you to create ads from either Pins or product catalog under the `SALES` and `CONSIDERATION` objectives. Legacy objectives remain available until **February 1, 2027**, after which you will need to migrate your campaigns to the new objectives. Get [full details and the migration timeline for objective simplification](/docs/work-with-ads/try-out-campaign-objective-type-simplification/).


**Note:**
- The values for `lifetime_spend_cap` and `daily_spend_cap` are microcurrency amounts based on the currency field set in the advertiser's profile (e.g. USD).

Microcurrency is used to track very small transactions, based on the currency set in the advertiser's profile.

A microcurrency unit is 10^(-6) of the standard unit of currency selected in the advertiser's profile.

**Equivalency equations**, using dollars as an example currency:

- $1 = 1,000,000 microdollars
- 1 microdollar = $0.000001

**To convert between currency and microcurrency**, using dollars as an example currency:

- To convert dollars to microdollars, multiply dollars by 1,000,000
- To convert microdollars to dollars, divide microdollars by 1,000,000

Operation ID: `campaigns/create`

Scopes: pinterest_oauth2: ads:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `CampaignBatchCreateRequest`

**Response 200** (`application/json`): `CampaignBatchWriteResponseModel`

---

## PATCH /ad_accounts/{ad_account_id}/campaigns

**Update campaigns**

Update multiple ad campaigns based on campaign_ids.

**Campaign objective types are changing!**

As part of objective simplification, `WEB_CONVERSION` and `CATALOG_SALES` objectives are being deprecated and replaced by `SALES` and `LEADS`. A new optional `intended_promotion_type` parameter is also being introduced, allowing you to create ads from either Pins or product catalog under the `SALES` and `CONSIDERATION` objectives. Legacy objectives remain available until **February 1, 2027**, after which you will need to migrate your campaigns to the new objectives. Get [full details and the migration timeline for objective simplification](/docs/work-with-ads/try-out-campaign-objective-type-simplification/).

**Note:**
- The values for `lifetime_spend_cap` and `daily_spend_cap` are microcurrency amounts based on the currency field set in the advertiser's profile (e.g. USD).

Microcurrency is used to track very small transactions, based on the currency set in the advertiser's profile.

A microcurrency unit is 10^(-6) of the standard unit of currency selected in the advertiser's profile.

**Equivalency equations**, using dollars as an example currency:

- $1 = 1,000,000 microdollars
- 1 microdollar = $0.000001

**To convert between currency and microcurrency**, using dollars as an example currency:

- To convert dollars to microdollars, multiply dollars by 1,000,000
- To convert microdollars to dollars, divide microdollars by 1,000,000

Operation ID: `campaigns/update`

Scopes: pinterest_oauth2: ads:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `CampaignBatchUpdateRequest`

**Response 200** (`application/json`): `CampaignBatchWriteResponseModel`

---

## GET /ad_accounts/{ad_account_id}/campaigns/analytics

**Get campaign analytics**

Get analytics for the specified campaigns in the specified `ad_account_id`, filtered by the specified options.
- The token's user_account must either be the Owner of the specified ad account, or have one of the necessary roles granted to them via [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts): Admin, Analyst, Campaign Manager.
- If granularity is not HOUR, you can pull data from up to 90 days before the current date in UTC time, with a maximum time range of 90 days.
- If granularity is HOUR, you can pull data from up to 8 days before the current date in UTC time, with a maximum time range of 3 days.

Operation ID: `campaigns/analytics`

Scopes: pinterest_oauth2: ads:read; client_credentials: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| start_date | query | string (date) | yes | Metric report start date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days back from today. |
| end_date | query | string (date) | yes | Metric report end date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days past start_date. |
| campaign_ids | query | array<`CampaignIdRequiredType`> | yes | List of Campaign Ids to use to filter the results. |
| columns | query | array<`ReportingColumnSync`> | yes | Columns to retrieve, encoded as a comma-separated string. **NOTE**: Any metrics defined as MICRO_DOLLARS returns a value based on the advertiser profile's currency field. For USD, ($1/1,000,000, or $0.000001 - one one-ten-thousandth of a cent). it's microdollars. Otherwise, it's in microunits of the advertiser's currency.  For example, if the advertiser's currency is GBP (British pound sterling), all MICRO_DOLLARS fields will be in GBP microunits (1/1,000,000 British pound).  If a column has no value, it may not be returned. |
| granularity | query | `Granularity` | yes | TOTAL - metrics are aggregated over the specified date range.    DAY - metrics are broken down daily.    HOUR - metrics are broken down hourly.    WEEK - metrics are broken down weekly.    MONTH - metrics are broken down monthly |
| click_window_days | query | number enum(0, 1, 7, 14, 30, 60) |  | Number of days to use as the conversion attribution window for a pin click action. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to `30` days. _(default 30)_ |
| engagement_window_days | query | number enum(0, 1, 7, 14, 30, 60) |  | Number of days to use as the conversion attribution window for an engagement action. Engagements include saves, closeups, link clicks, and carousel card swipes. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to `30` days. **Note:** This parameter no longer returns new data. However, you can still access historic data through **Sept 30, 2027**. _(default 30)_ |
| view_window_days | query | number enum(0, 1, 7, 14, 30, 60) |  | Number of days to use as the conversion attribution window for a view action. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to `1` day. _(default 1)_ |
| conversion_report_time | query | string enum(TIME_OF_AD_ACTION, TIME_OF_CONVERSION) |  | The date by which the conversion metrics returned from this endpoint will be reported. There are two dates associated with a conversion event: the date that the user interacted with the ad, and the date that the user completed a conversion event. _(default "TIME_OF_AD_ACTION")_ |
| aggregate_report_rows | query | boolean |  | Determines if report rows should be aggregated across all requested entities. This feature is currently in BETA and is not available to all users. _(default false)_ |
| reporting_timezone | query | `ReportingTimeZone` |  | Specify the timezone to be applied for the reporting. Defaults to PINTEREST_TIME_ZONE (UTC). AD_ACCOUNT_TIME_ZONE requires the ad account to have a time_zone configured; otherwise the request fails with a 400. |
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Response 200** (`application/json`): array<`CampaignsAnalyticsMetrics`>

---

## POST /ad_accounts/{ad_account_id}/campaigns/delivery_estimates

**Get campaign delivery estimates**

Get delivery estimates for an ads campaign

**This endpoint is currently in beta and is not available to all apps [Learn more](/docs/new/about-beta-access/).**

Operation ID: `get_campaign_delivery_estimates`

Scopes: pinterest_oauth2: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `CampaignDeliveryEstimatesCampaignRequest`

**Response 200** (`application/json`): `CampaignDeliveryEstimatesResponse`

---

## GET /ad_accounts/{ad_account_id}/campaigns/targeting_analytics

**Get targeting analytics for campaigns**

Get targeting analytics for one or more campaigns. For the requested account and metrics, the response will include the requested metric information (e.g. SPEND_IN_DOLLAR) for the requested target type (e.g. "age_bucket") for applicable values (e.g. "45-49").

* The token's user_account must either be the Owner of the specified ad account, or have one of the necessary roles granted to them via [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts): Admin, Analyst, Campaign Manager.
* If granularity is not HOUR, you can pull data from up to 90 days before the current date in UTC time, with a maximum time range of 90 days.
* If granularity is HOUR, you can pull data from up to 8 days before the current date in UTC time, with a maximum time range of 3 days.

Operation ID: `campaign_targeting_analytics/get`

Scopes: pinterest_oauth2: ads:read; client_credentials: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |
| campaign_ids | query | array<`CampaignIdRequiredType`> | yes | List of Campaign Ids to use to filter the results. |
| start_date | query | string (date) | yes | Metric report start date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days back from today. |
| end_date | query | string (date) | yes | Metric report end date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days past start_date. |
| targeting_types | query | array<`AdsAnalyticsCampaignTargetingType`> | yes | Targeting type breakdowns for the report. The reporting per targeting type is independent from each other. ["AGE_BUCKET_AND_GENDER"] is in BETA and not yet available to all users. |
| columns | query | array<`ReportingColumnSync`> | yes | Columns to retrieve, encoded as a comma-separated string. **NOTE**: Any metrics defined as MICRO_DOLLARS returns a value based on the advertiser profile's currency field. For USD, ($1/1,000,000, or $0.000001 - one one-ten-thousandth of a cent). it's microdollars. Otherwise, it's in microunits of the advertiser's currency.  For example, if the advertiser's currency is GBP (British pound sterling), all MICRO_DOLLARS fields will be in GBP microunits (1/1,000,000 British pound).  If a column has no value, it may not be returned. |
| granularity | query | `Granularity` | yes | TOTAL - metrics are aggregated over the specified date range.    DAY - metrics are broken down daily.    HOUR - metrics are broken down hourly.    WEEK - metrics are broken down weekly.    MONTH - metrics are broken down monthly |
| click_window_days | query | number enum(0, 1, 7, 14, 30, 60) |  | Number of days to use as the conversion attribution window for a pin click action. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to `30` days. _(default 30)_ |
| engagement_window_days | query | number enum(0, 1, 7, 14, 30, 60) |  | Number of days to use as the conversion attribution window for an engagement action. Engagements include saves, closeups, link clicks, and carousel card swipes. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to `30` days. **Note:** This parameter no longer returns new data. However, you can still access historic data through **Sept 30, 2027**. _(default 30)_ |
| view_window_days | query | number enum(0, 1, 7, 14, 30, 60) |  | Number of days to use as the conversion attribution window for a view action. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to `1` day. _(default 1)_ |
| conversion_report_time | query | string enum(TIME_OF_AD_ACTION, TIME_OF_CONVERSION) |  | The date by which the conversion metrics returned from this endpoint will be reported. There are two dates associated with a conversion event: the date that the user interacted with the ad, and the date that the user completed a conversion event. _(default "TIME_OF_AD_ACTION")_ |
| attribution_types | query | array<`ConversionReportAttributionType`> |  | List of types of attribution for the conversion report |
| reporting_timezone | query | `ReportingTimeZone` |  | Specify the timezone to be applied for the reporting. Defaults to PINTEREST_TIME_ZONE (UTC). AD_ACCOUNT_TIME_ZONE requires the ad account to have a time_zone configured; otherwise the request fails with a 400. |

**Response 200** (`application/json`): `MetricsResponse`

---

## GET /ad_accounts/{ad_account_id}/campaigns/{campaign_id}

**Get campaign**

Get a specific campaign given the campaign ID.

Operation ID: `campaigns/get`

Scopes: pinterest_oauth2: ads:read; client_credentials: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| campaign_id | path | string | yes | Campaign ID, must be associated with the ad account ID provided in the path. _(maxLength 18)_ |
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Response 200** (`application/json`): `Campaign`

---

## GET /ad_accounts/{ad_account_id}/pins/analytics

**Get pins analytics**

Get analytics for the pins given a campaign and pins in the specified `ad_account_id`, filtered by the specified options.
- The token's user_account must either be the Owner of the specified ad account, or have one of the necessary roles granted to them via [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts): Admin, Analyst, Campaign Manager.
- If granularity is not HOUR, the furthest back you can are allowed to pull data is 90 days before the current date in UTC time and the max time range supported is 90 days.
- If granularity is HOUR, the furthest back you can are allowed to pull data is 8 days before the current date in UTC time and the max time range supported is 3 days. Data will not be provided for conversion metrics but will be available for non-conversion metrics.

Operation ID: `ad_pins/analytics`

Scopes: pinterest_oauth2: ads:read; client_credentials: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| campaign_id | query | string | yes | Campaign Id to use to filter the results. _(maxLength 18)_ |
| pin_ids | query | array<`Pinterest.Lib.IntegerFormatType`> | yes | List of Pin IDs. |
| start_date | query | string (date) | yes | Metric report start date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days back from today. |
| end_date | query | string (date) | yes | Metric report end date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days past start_date. |
| columns | query | array<`ReportingColumnSync`> | yes | Columns to retrieve, encoded as a comma-separated string. **NOTE**: Any metrics defined as MICRO_DOLLARS returns a value based on the advertiser profile's currency field. For USD, ($1/1,000,000, or $0.000001 - one one-ten-thousandth of a cent). it's microdollars. Otherwise, it's in microunits of the advertiser's currency.  For example, if the advertiser's currency is GBP (British pound sterling), all MICRO_DOLLARS fields will be in GBP microunits (1/1,000,000 British pound).  If a column has no value, it may not be returned. |
| granularity | query | `Granularity` | yes | TOTAL - metrics are aggregated over the specified date range.    DAY - metrics are broken down daily.    HOUR - metrics are broken down hourly.    WEEK - metrics are broken down weekly.    MONTH - metrics are broken down monthly |
| click_window_days | query | number enum(0, 1, 7, 14, 30, 60) |  | Number of days to use as the conversion attribution window for a pin click action. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to `30` days. _(default 30)_ |
| engagement_window_days | query | number enum(0, 1, 7, 14, 30, 60) |  | Number of days to use as the conversion attribution window for an engagement action. Engagements include saves, closeups, link clicks, and carousel card swipes. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to `30` days. **Note:** This parameter no longer returns new data. However, you can still access historic data through **Sept 30, 2027**. _(default 30)_ |
| view_window_days | query | number enum(0, 1, 7, 14, 30, 60) |  | Number of days to use as the conversion attribution window for a view action. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to `1` day. _(default 1)_ |
| conversion_report_time | query | string enum(TIME_OF_AD_ACTION, TIME_OF_CONVERSION) |  | The date by which the conversion metrics returned from this endpoint will be reported. There are two dates associated with a conversion event: the date that the user interacted with the ad, and the date that the user completed a conversion event. _(default "TIME_OF_AD_ACTION")_ |
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Response 200** (`application/json`): array<`AdPinAnalytics`>

---

## Schemas

### `AdPinAnalytics`

| Field | Type | Required | Description |
|---|---|---|---|
| DATE | string (date) |  | Current metrics date. Only returned when granularity is a time-based value (`DAY`, `HOUR`, `WEEK`, `MONTH`) |
| PIN_ID | string | yes | The ID of the pin that the metric belongs to. |

### `AdsAnalyticsCampaignTargetingType`

Reporting targeting type for campaigns

Type: string enum(KEYWORD, APPTYPE, GENDER, LOCATION, PLACEMENT, COUNTRY, TARGETED_INTEREST, PINNER_INTEREST, AUDIENCE_INCLUDE, GEO, AGE_BUCKET, REGION, CREATIVE_TYPE, AGE_BUCKET_AND_GENDER, AUDIENCE_MULTIPLIER)

### `Campaign`

| Field | Type | Required | Description |
|---|---|---|---|
| ad_account_id | string |  | Campaign's Advertiser ID. |
| app_id | string |  | [Closed beta](/docs/getting-started/using-beta-and-restricted-features/)  The store ID of the mobile app for `APP_INSTALL` campaigns. |
| app_platform | `MobileAppPlatform` |  | [Closed beta](/docs/getting-started/using-beta-and-restricted-features/)  Platform of the mobile app for `APP_INSTALL` campaigns. |
| app_skan_version | number |  | [Closed beta](/docs/getting-started/using-beta-and-restricted-features/)  Skan version of the iOS mobile app for `APP_INSTALL` campaigns. Must be 3.0 or 4.0. _(nullable)_ |
| bid_options | `CampaignBidOptions` |  | [Restricted](/docs/getting-started/using-beta-and-restricted-features/)  Object describing the campaign level bid multipliers. |
| created_time | integer |  | Campaign creation time. Unix timestamp in seconds. _(read-only)_ |
| ctv_goal_type | `CtvGoalType` |  | The optimization goal for a `CTV_CONSIDERATION` campaign. Determines how the campaign bids and what it optimizes toward. `CONVERSIONS` and `ROAS` additionally require a `ctv_conversion_event` on the ad group. |
| daily_spend_cap | integer |  | Note: The default for this field is null, which is treated the same as 0. For campaign budget optimization, a daily or lifetime spend cap must be set, but not both. For ad group level budgets, this field must be 0 or unset. _(nullable)_ |
| default_ad_group_budget_in_micro_currency | integer |  | When transitioning from campaign budget optimization to non-campaign budget optimization, the default_ad_group_budget_in_micro_currency will propagate to each child ad groups daily budget. Unit is micro currency of the associated advertiser account. _(nullable)_ |
| end_time | integer |  | Note: To clear this field on update, set the end time to -1. Timestamp in Unix format for scheduling when ads in the campaign stop appearing. Must occur after any end times for child ad groups. If `end_time` is not specified for the campaign, ads run indefinitely unless you update the campaign, changing their status to `paused`. Learn about [scheduling campaigns](/docs/api-features/managing-campaigns/#campaign-scheduling). Different end times can be set for the campaign's child ad groups, but they cannot occur after an `end_time` specified for the campaign. - If your campaign has a child ad group with an end time specified, and if you update that campaign with an `end_time` that is earlier than that of the ad group, the campaign `end_time` will supersede the ad group `end_time`, and the request will not return an error. - In this scenario, if you call [List campaigns](/docs/api/v5/campaigns-list) or [List ad groups](/docs/api/v5/ad_groups-list), the returned campaigns or ad groups are listed with the start and end times that you assigned them, regardless of supersedence. _(nullable)_ |
| id | string | yes | Campaign ID, must be associated with the ad account ID provided in the path. _(maxLength 18)_ |
| intended_promotion_type | `IntendedPromotionType` |  |  |
| is_automated_campaign | boolean |  | Note: This field is immutable unless the campaign is in draft status. Specifies whether the campaign was created in the automated campaign flow. When using Automated Campaigns, a daily spend cap must be set, and Pinterest Performance+ may not be used. The following objective types are supported: - CONSIDERATION - WEB\_CONVERSION - SALES - LEADS - CATALOG\_SALES _(nullable)_ |
| is_campaign_budget_optimization | boolean |  | Note: This field is immutable unless the campaign is in draft status. Determines if a campaign automatically generates ad-group level budgets given a campaign budget to maximize campaign outcome. When using campaign budgets with a lifetime spend cap, the end time must be provided. _(nullable)_ |
| is_carting | boolean |  | Whether the campaign contains a carting(where-to-buy link) ad. _(read-only)_ |
| is_flexible_daily_budgets | boolean |  | Determine if a campaign has setup for flexible daily budgets, also known as "Pinterest Performance+ budgets". Flexible daily budgets are only supported for campaign budget optimization with a daily spend cap, and not a lifetime spend cap. _(nullable)_ |
| is_ltv_optimized | boolean |  | Specifies whether the campaign is optimized for Lifetime Value (LTV). Only available for eligible advertisers. |
| is_performance_plus | boolean |  | Note: This field is immutable unless the campaign is in draft status. You can only use this feature with the following objectives: - CONSIDERATION - WEB\_CONVERSION - SALES - LEADS - CATALOG\_SALES - APP\_INSTALL Enable Pinterest Performance+ for your campaign. To learn more, see [Pinterest Performance+ Setup](https://developers.pinterest.com/docs/api-features/pinterest-performance-plus-setup/) |
| is_top_of_search | boolean |  | Note: This field is immutable unless the campaign is in draft status.  [Restricted](/docs/getting-started/using-beta-and-restricted-features/)  Have your ads and content appear at the top of search result lists in Pinterest.  You can only use this feature with the following objectives:  - CONSIDERATION  - WEB\_CONVERSION  - SALES  - LEADS  - CATALOG\_SALES  You cannot use this feature with Pinterest Performance+ or Premiere Spotlight enabled. |
| lifetime_spend_cap | integer |  | Note: The default for this field is null, which is treated the same as 0. For campaign budget optimization, a daily or lifetime spend cap must be set, but not both. For ad group level budgets, this field must be 0 or unset. _(nullable)_ |
| name | string |  | Campaign name - 255 chars max. |
| objective_type | `CampaignObjectiveTypeRead` | yes |  |
| order_line_id | string |  | Note: To clear this field on update, set the order line ID to 0. Order line ID that appears on the invoice. The order line must not be expired. _(nullable)_ |
| performance_plus_campaign_settings | `PerformancePlusCampaignSettings` |  | Pinterest Performance+ campaign settings. _(nullable)_ |
| start_time | integer |  | Timestamp in Unix format for scheduling when ads in the campaign start to appear. Must precede any start times set for child ad groups. Defaults to current time if no time is specified. Learn about [scheduling campaigns](/docs/api-features/managing-campaigns/#campaign-scheduling). Different start times can be set for the campaign's child ad groups, but they cannot occur before a `start_time` specified for the campaign. - If your campaign has a child ad group with a start time specified, and if you update that campaign with a `start_time` that is later than that of the ad group, the campaign `start_time` will supersede the ad group `start_time`, and the request will not return an error. - In this scenario, if you call [List campaigns](/docs/api/v5/campaigns-list) or [List ad groups](/docs/api/v5/ad_groups-list), the returned campaigns or ad groups are listed with the start and end times that you assigned them, regardless of supersedence. _(nullable)_ |
| status | `EntityStatus` |  |  |
| summary_status | `SummaryStatus` |  | _(read-only)_ |
| tracking_urls | `TrackingUrls` |  | _(nullable)_ |
| type | string |  | Always "campaign". _(read-only)_ |
| updated_time | integer |  | UTC timestamp. Last update time. _(read-only)_ |

### `CampaignBatchCreateRequest`

Request body for batch campaign create.

Type: array<`CampaignCreateItem`>

### `CampaignBatchUpdateRequest`

Request body for batch campaign update.

Type: array<`CampaignBatchUpdateItem`>

### `CampaignBatchWriteResponseModel`

Response model for batch campaign write operations.

| Field | Type | Required | Description |
|---|---|---|---|
| items | array<`CampaignBatchItem`> | yes |  |

### `CampaignDeliveryEstimatesCampaignRequest`

Campaign delivery estimates request body.

Type: array<`CampaignDeliveryEstimatesCampaign`>

### `CampaignDeliveryEstimatesResponse`

Delivery estimates response for a campaign.

| Field | Type | Required | Description |
|---|---|---|---|
| curves | array<`CampaignPlanningCurveEstimate`> |  | Estimated curves. Each curve will pertain to a single estimation type. |
| derived_metrics | `CampaignDeliveryEstimatesDerivedMetrics` |  |  |
| max_potential_spend | integer |  | Maximum potential spend estimate. |

### `CampaignIdRequiredType`

Type: string

### `CampaignIdType`

Type: string

### `CampaignsAnalyticsMetrics`

| Field | Type | Required | Description |
|---|---|---|---|
| CAMPAIGN_ID | string |  | The ID of the campaing that this metrics belongs to. Returned as long as aggregate_report_rows is not true. |
| DATE | string (date) |  | Current metrics date. Only returned when granularity is a time-based value (`DAY`, `HOUR`, `WEEK`, `MONTH`) |

### `ConversionReportAttributionType`

Attribution type. Refers to the Pinterest Tag endpoints

Type: string enum(INDIVIDUAL, HOUSEHOLD)

### `EntityStatus`

Entity status

Type: string enum(ACTIVE, PAUSED, ARCHIVED, DRAFT, DELETED_DRAFT)

### `Granularity`

Specifies the time interval at which analytics data is broken down. Determines how metrics are grouped within the requested date range.
**Note:** The `HOUR` enum no longer provides data for conversion metrics, but it still returns data for non-conversion metrics. All other enums are unchanged.

Type: string enum(TOTAL, DAY, HOUR, WEEK, MONTH)

### `MetricsResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| data | array<`MetricsResponseDataItems`> |  |  |

### `Pinterest.Lib.IntegerFormatType`

Type: string

### `Pinterest.Lib.PaginationOrder`

Type: string enum(ASCENDING, DESCENDING)

### `ReportingColumnSync`

Reporting columns for sync reporting endpoints

Type: string enum(SPEND_IN_MICRO_DOLLAR, PAID_IMPRESSION, SPEND_IN_DOLLAR, CPC_IN_MICRO_DOLLAR, ECPC_IN_MICRO_DOLLAR, ECPC_IN_DOLLAR, CTR, ECTR, OUTBOUND_CTR_1, CAMPAIGN_NAME, CAMPAIGN_BRAND_LABEL, PIN_ID, TOTAL_ENGAGEMENT, ENGAGEMENT_1, ENGAGEMENT_2, ECPE_IN_DOLLAR, ENGAGEMENT_RATE, EENGAGEMENT_RATE, ECPM_IN_MICRO_DOLLAR, REPIN_RATE, CTR_2, CAMPAIGN_ID, ADVERTISER_ID, AD_ACCOUNT_ID, PIN_PROMOTION_ID, AD_ID, AD_GROUP_ID, CAMPAIGN_ENTITY_STATUS, CAMPAIGN_OBJECTIVE_TYPE, CPM_IN_MICRO_DOLLAR, CPM_IN_DOLLAR, AD_GROUP_NAME, AD_GROUP_BUDGET_TYPE, AD_GROUP_BUDGET_IN_LOCAL_CURRENCY, AD_GROUP_ENTITY_STATUS, AD_GROUP_BID_MULTIPLIER, PROMO_ID, PROMO_NAME, ORDER_LINE_ID, ORDER_LINE_NAME, CLICKTHROUGH_1, REPIN_1, IMPRESSION_1, IMPRESSION_1_GROSS, CLICKTHROUGH_1_GROSS, OUTBOUND_CLICK_1, CLICKTHROUGH_2, REPIN_2, IMPRESSION_2, OUTBOUND_CLICK_2, COLLECTION_PIN_ITEM_IMPRESSION_1, COLLECTION_PIN_ITEM_IMPRESSION_2, TOTAL_COLLECTION_PIN_ITEM_IMPRESSION, COLLECTION_PIN_ITEM_CLICKTHROUGH_1, COLLECTION_PIN_ITEM_CLICKTHROUGH_2, TOTAL_COLLECTION_PIN_ITEM_CLICKTHROUGH, TOTAL_CLICKTHROUGH, TOTAL_IMPRESSION, TOTAL_IMPRESSION_USER, TOTAL_IMPRESSION_HOUSEHOLD_USER, TOTAL_IMPRESSION_FREQUENCY, TOTAL_IMPRESSION_HOUSEHOLD_FREQUENCY, COST_PER_OUTBOUND_CLICK_IN_DOLLAR, COST_PER_OUTBOUND_CLICK_IN_DOLLAR_1, TOTAL_ENGAGEMENT_SIGNUP, TOTAL_ENGAGEMENT_CHECKOUT, TOTAL_ENGAGEMENT_ADD_PAYMENT_INFO, TOTAL_ENGAGEMENT_ADD_TO_WISHLIST, TOTAL_ENGAGEMENT_INITIATE_CHECKOUT, TOTAL_ENGAGEMENT_SUBSCRIBE, TOTAL_ENGAGEMENT_VIEW_CONTENT, TOTAL_ENGAGEMENT_LEAD, TOTAL_ENGAGEMENT_CONTACT, TOTAL_ENGAGEMENT_SCHEDULE, TOTAL_ENGAGEMENT_FIND_LOCATION, TOTAL_ENGAGEMENT_CUSTOMIZE_PRODUCT, TOTAL_ENGAGEMENT_SUBMIT_APPLICATION, TOTAL_ENGAGEMENT_START_TRIAL, TOTAL_ENGAGEMENT_APP_OPEN, TOTAL_ENGAGEMENT_ADD_TO_CART, TOTAL_ENGAGEMENT_APP_INSTALL, TOTAL_ENGAGEMENT_PAGE_VISIT, TOTAL_ENGAGEMENT_SEARCH, TOTAL_ENGAGEMENT_VIEW_CATEGORY, TOTAL_ENGAGEMENT_WATCH_VIDEO, TOTAL_CLICK_SIGNUP, TOTAL_CLICK_CHECKOUT, TOTAL_CLICK_ADD_PAYMENT_INFO, TOTAL_CLICK_ADD_TO_WISHLIST, TOTAL_CLICK_INITIATE_CHECKOUT, TOTAL_CLICK_SUBSCRIBE, TOTAL_CLICK_VIEW_CONTENT, TOTAL_CLICK_ADD_TO_CART, TOTAL_CLICK_LEAD, TOTAL_CLICK_CONTACT, TOTAL_CLICK_SCHEDULE, TOTAL_CLICK_FIND_LOCATION, TOTAL_CLICK_CUSTOMIZE_PRODUCT, TOTAL_CLICK_SUBMIT_APPLICATION, TOTAL_CLICK_START_TRIAL, TOTAL_CLICK_APP_OPEN, TOTAL_CLICK_APP_INSTALL, TOTAL_CLICK_PAGE_VISIT, TOTAL_CLICK_SEARCH, TOTAL_CLICK_VIEW_CATEGORY, TOTAL_CLICK_WATCH_VIDEO, TOTAL_VIEW_SIGNUP, TOTAL_VIEW_CHECKOUT, TOTAL_VIEW_ADD_PAYMENT_INFO, TOTAL_VIEW_ADD_TO_WISHLIST, TOTAL_VIEW_INITIATE_CHECKOUT, TOTAL_VIEW_SUBSCRIBE, TOTAL_VIEW_VIEW_CONTENT, TOTAL_VIEW_ADD_TO_CART, TOTAL_VIEW_LEAD, TOTAL_VIEW_CONTACT, TOTAL_VIEW_SCHEDULE, TOTAL_VIEW_FIND_LOCATION, TOTAL_VIEW_CUSTOMIZE_PRODUCT, TOTAL_VIEW_SUBMIT_APPLICATION, TOTAL_VIEW_START_TRIAL, TOTAL_VIEW_APP_OPEN, TOTAL_VIEW_APP_INSTALL, TOTAL_VIEW_PAGE_VISIT, TOTAL_VIEW_SEARCH, TOTAL_VIEW_VIEW_CATEGORY, TOTAL_VIEW_WATCH_VIDEO, TOTAL_CONVERSIONS, COST_PER_CONVERSION_IN_DOLLAR, TOTAL_ENGAGEMENT_SIGNUP_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_ADD_PAYMENT_INFO_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_ADD_TO_WISHLIST_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_INITIATE_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_SUBSCRIBE_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_VIEW_CONTENT_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_ADD_TO_CART_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_APP_INSTALL_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_LEAD_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_PAGE_VISIT_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_SEARCH_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_VIEW_CATEGORY_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_WATCH_VIDEO_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_SIGNUP_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_ADD_PAYMENT_INFO_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_ADD_TO_WISHLIST_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_INITIATE_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_SUBSCRIBE_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_VIEW_CONTENT_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_ADD_TO_CART_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_APP_INSTALL_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_LEAD_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_PAGE_VISIT_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_SEARCH_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_VIEW_CATEGORY_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_WATCH_VIDEO_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_SIGNUP_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_ADD_PAYMENT_INFO_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_ADD_TO_WISHLIST_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_INITIATE_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_SUBSCRIBE_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_VIEW_CONTENT_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_ADD_TO_CART_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_APP_INSTALL_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_LEAD_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_PAGE_VISIT_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_SEARCH_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_VIEW_CATEGORY_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_WATCH_VIDEO_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_SESSIONS, WEB_SESSIONS_1, WEB_SESSIONS_2, AD_NAME, AD_GROUP_OPTIMIZATION, CAMPAIGN_BUDGET_OPTIMIZATION, CAMPAIGN_BUDGET_TYPE, CAMPAIGN_BUDGET_IN_LOCAL_CURRENCY, IS_PREMIERE_CAMPAIGN, TOTAL_PAGE_VISIT, TOTAL_SIGNUP, TOTAL_CHECKOUT, TOTAL_ADD_PAYMENT_INFO, TOTAL_INITIATE_CHECKOUT, TOTAL_VIEW_CONTENT, TOTAL_CUSTOM, TOTAL_LEAD, TOTAL_CONTACT, TOTAL_SCHEDULE, TOTAL_FIND_LOCATION, TOTAL_CUSTOMIZE_PRODUCT, TOTAL_SUBMIT_APPLICATION, TOTAL_START_TRIAL, TOTAL_APP_OPEN, TOTAL_ADD_TO_WISHLIST, TOTAL_SUBSCRIBE, TOTAL_VIEW_CATEGORY, TOTAL_ADD_TO_CART, TOTAL_SEARCH, TOTAL_WATCH_VIDEO, TOTAL_SIGNUP_VALUE_IN_MICRO_DOLLAR, TOTAL_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_ADD_PAYMENT_INFO_VALUE_IN_MICRO_DOLLAR, TOTAL_ADD_TO_WISHLIST_VALUE_IN_MICRO_DOLLAR, TOTAL_INITIATE_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_SUBSCRIBE_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_CONTENT_VALUE_IN_MICRO_DOLLAR, TOTAL_CUSTOM_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_CATEGORY_VALUE_IN_MICRO_DOLLAR, TOTAL_ADD_TO_CART_VALUE_IN_MICRO_DOLLAR, TOTAL_LEAD_VALUE_IN_MICRO_DOLLAR, TOTAL_SEARCH_VALUE_IN_MICRO_DOLLAR, TOTAL_WATCH_VIDEO_VALUE_IN_MICRO_DOLLAR, PAGE_VISIT_COST_PER_ACTION, PAGE_VISIT_ROAS, CHECKOUT_ROAS, ADD_PAYMENT_INFO_ROAS, ADD_TO_WISHLIST_ROAS, INITIATE_CHECKOUT_ROAS, SUBSCRIBE_ROAS, VIEW_CONTENT_ROAS, CUSTOM_ROAS, PRODUCT_GROUP_AD_IMAGE_TAG, PRODUCT_GROUP_AD_VIDEO_TAG, VIDEO_3SEC_VIEWS_1, VIDEO_15SEC_UNIQUE_VIEWS_1, VIDEO_MRC_VIEWS_1, VIDEO_3SEC_VIEWS_2, VIDEO_15SEC_UNIQUE_VIEWS_2, VIDEO_P100_COMPLETE_2, VIDEO_P0_COMBINED_2, VIDEO_P25_COMBINED_2, VIDEO_P50_COMBINED_2, VIDEO_P75_COMBINED_2, VIDEO_P95_COMBINED_2, VIDEO_MRC_VIEWS_2, PAID_VIDEO_VIEWABLE_RATE, VIDEO_LENGTH, VIDEO_SPEND_IN_DOLLAR, ECPV_IN_DOLLAR, ECPCV_IN_DOLLAR, ECPCV_P95_IN_DOLLAR, TOTAL_VIDEO_3SEC_VIEWS, TOTAL_VIDEO_15SEC_UNIQUE_VIEWS, TOTAL_VIDEO_P100_COMPLETE, TOTAL_VIDEO_P0_COMBINED, TOTAL_VIDEO_P25_COMBINED, TOTAL_VIDEO_P50_COMBINED, TOTAL_VIDEO_P75_COMBINED, TOTAL_VIDEO_P95_COMBINED, TOTAL_VIDEO_MRC_VIEWS, TOTAL_VIDEO_AVG_WATCHTIME_IN_SECOND, TOTAL_REPIN_RATE, WEB_CHECKOUT_COST_PER_ACTION, WEB_ADD_PAYMENT_INFO_COST_PER_ACTION, WEB_ADD_TO_WISHLIST_COST_PER_ACTION, WEB_INITIATE_CHECKOUT_COST_PER_ACTION, WEB_SUBSCRIBE_COST_PER_ACTION, WEB_VIEW_CONTENT_COST_PER_ACTION, WEB_ADD_TO_CART_COST_PER_ACTION, WEB_LEAD_COST_PER_ACTION, WEB_PAGE_VISIT_COST_PER_ACTION, WEB_SEARCH_COST_PER_ACTION, WEB_SIGNUP_COST_PER_ACTION, WEB_VIEW_CATEGORY_COST_PER_ACTION, WEB_WATCH_VIDEO_COST_PER_ACTION, WEB_CHECKOUT_ROAS, WEB_ADD_PAYMENT_INFO_ROAS, WEB_ADD_TO_WISHLIST_ROAS, WEB_INITIATE_CHECKOUT_ROAS, WEB_SUBSCRIBE_ROAS, WEB_VIEW_CONTENT_ROAS, WEB_ADD_TO_CART_ROAS, WEB_LEAD_ROAS, WEB_PAGE_VISIT_ROAS, WEB_SEARCH_ROAS, WEB_SIGNUP_ROAS, WEB_VIEW_CATEGORY_ROAS, WEB_WATCH_VIDEO_ROAS, TOTAL_WEB_CHECKOUT, TOTAL_WEB_ADD_PAYMENT_INFO, TOTAL_WEB_ADD_TO_WISHLIST, TOTAL_WEB_INITIATE_CHECKOUT, TOTAL_WEB_SUBSCRIBE, TOTAL_WEB_VIEW_CONTENT, TOTAL_WEB_ADD_TO_CART, TOTAL_WEB_LEAD, TOTAL_WEB_PAGE_VISIT, TOTAL_WEB_SEARCH, TOTAL_WEB_SIGNUP, TOTAL_WEB_VIEW_CATEGORY, TOTAL_WEB_WATCH_VIDEO, TOTAL_WEB_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ADD_PAYMENT_INFO_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ADD_TO_WISHLIST_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_INITIATE_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_SUBSCRIBE_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_CONTENT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ADD_TO_CART_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_LEAD_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_PAGE_VISIT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_SEARCH_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_SIGNUP_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_CATEGORY_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_WATCH_VIDEO_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_CHECKOUT, TOTAL_WEB_CLICK_ADD_PAYMENT_INFO, TOTAL_WEB_CLICK_ADD_TO_WISHLIST, TOTAL_WEB_CLICK_INITIATE_CHECKOUT, TOTAL_WEB_CLICK_SUBSCRIBE, TOTAL_WEB_CLICK_VIEW_CONTENT, TOTAL_WEB_CLICK_ADD_TO_CART, TOTAL_WEB_CLICK_LEAD, TOTAL_WEB_CLICK_PAGE_VISIT, TOTAL_WEB_CLICK_SEARCH, TOTAL_WEB_CLICK_SIGNUP, TOTAL_WEB_CLICK_VIEW_CATEGORY, TOTAL_WEB_CLICK_WATCH_VIDEO, TOTAL_WEB_CLICK_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_ADD_PAYMENT_INFO_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_ADD_TO_WISHLIST_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_INITIATE_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_SUBSCRIBE_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_VIEW_CONTENT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_ADD_TO_CART_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_LEAD_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_PAGE_VISIT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_SEARCH_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_SIGNUP_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_VIEW_CATEGORY_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_WATCH_VIDEO_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_CHECKOUT, TOTAL_WEB_ENGAGEMENT_ADD_PAYMENT_INFO, TOTAL_WEB_ENGAGEMENT_ADD_TO_WISHLIST, TOTAL_WEB_ENGAGEMENT_INITIATE_CHECKOUT, TOTAL_WEB_ENGAGEMENT_SUBSCRIBE, TOTAL_WEB_ENGAGEMENT_VIEW_CONTENT, TOTAL_WEB_ENGAGEMENT_ADD_TO_CART, TOTAL_WEB_ENGAGEMENT_LEAD, TOTAL_WEB_ENGAGEMENT_PAGE_VISIT, TOTAL_WEB_ENGAGEMENT_SEARCH, TOTAL_WEB_ENGAGEMENT_SIGNUP, TOTAL_WEB_ENGAGEMENT_VIEW_CATEGORY, TOTAL_WEB_ENGAGEMENT_WATCH_VIDEO, TOTAL_WEB_ENGAGEMENT_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_ADD_PAYMENT_INFO_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_ADD_TO_WISHLIST_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_INITIATE_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_SUBSCRIBE_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_VIEW_CONTENT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_ADD_TO_CART_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_LEAD_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_PAGE_VISIT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_SEARCH_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_SIGNUP_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_VIEW_CATEGORY_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_WATCH_VIDEO_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_CHECKOUT, TOTAL_WEB_VIEW_ADD_PAYMENT_INFO, TOTAL_WEB_VIEW_ADD_TO_WISHLIST, TOTAL_WEB_VIEW_INITIATE_CHECKOUT, TOTAL_WEB_VIEW_SUBSCRIBE, TOTAL_WEB_VIEW_VIEW_CONTENT, TOTAL_WEB_VIEW_ADD_TO_CART, TOTAL_WEB_VIEW_LEAD, TOTAL_WEB_VIEW_PAGE_VISIT, TOTAL_WEB_VIEW_SEARCH, TOTAL_WEB_VIEW_SIGNUP, TOTAL_WEB_VIEW_VIEW_CATEGORY, TOTAL_WEB_VIEW_WATCH_VIDEO, TOTAL_WEB_VIEW_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_ADD_PAYMENT_INFO_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_ADD_TO_WISHLIST_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_INITIATE_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_SUBSCRIBE_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_VIEW_CONTENT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_ADD_TO_CART_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_LEAD_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_PAGE_VISIT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_SEARCH_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_SIGNUP_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_VIEW_CATEGORY_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_WATCH_VIDEO_VALUE_IN_MICRO_DOLLAR, INAPP_CHECKOUT_COST_PER_ACTION, INAPP_ADD_PAYMENT_INFO_COST_PER_ACTION, INAPP_ADD_TO_WISHLIST_COST_PER_ACTION, INAPP_INITIATE_CHECKOUT_COST_PER_ACTION, INAPP_SUBSCRIBE_COST_PER_ACTION, INAPP_VIEW_CONTENT_COST_PER_ACTION, INAPP_ADD_TO_CART_COST_PER_ACTION, INAPP_APP_INSTALL_COST_PER_ACTION, INAPP_SEARCH_COST_PER_ACTION, INAPP_SIGNUP_COST_PER_ACTION, TOTAL_OFFLINE_CHECKOUT, TOTAL_OFFLINE_ADD_PAYMENT_INFO, TOTAL_OFFLINE_ADD_TO_WISHLIST, TOTAL_OFFLINE_INITIATE_CHECKOUT, TOTAL_OFFLINE_SUBSCRIBE, TOTAL_OFFLINE_VIEW_CONTENT, TOTAL_OFFLINE_LEAD, TOTAL_OFFLINE_SIGNUP, TOTAL_APP_INSTALL_CONVERSION_RATE, TOTAL_INAPP_APP_INSTALL_CONVERSION_RATE, IDEA_PIN_PRODUCT_TAG_VISIT_1, IDEA_PIN_PRODUCT_TAG_VISIT_2, TOTAL_IDEA_PIN_PRODUCT_TAG_VISIT, LEADS, COST_PER_LEAD, QUIZ_COMPLETED, QUIZ_PIN_RESULT_OPEN, QUIZ_COMPLETION_RATE, SHOWCASE_PIN_CLICKTHROUGH, SHOWCASE_SUBPAGE_CLICKTHROUGH, SHOWCASE_SUBPIN_CLICKTHROUGH, SHOWCASE_SUBPAGE_IMPRESSION, SHOWCASE_SUBPIN_IMPRESSION, SHOWCASE_SUBPAGE_SWIPE_LEFT, SHOWCASE_SUBPAGE_SWIPE_RIGHT, SHOWCASE_SUBPIN_SWIPE_LEFT, SHOWCASE_SUBPIN_SWIPE_RIGHT, SHOWCASE_SUBPAGE_REPIN, SHOWCASE_SUBPIN_REPIN, SHOWCASE_SUBPAGE_CLOSEUP, SHOWCASE_CARD_THUMBNAIL_SWIPE_FORWARD, SHOWCASE_CARD_THUMBNAIL_SWIPE_BACKWARD, SHOWCASE_AVERAGE_SUBPAGE_CLOSEUP_PER_SESSION, TOTAL_CHECKOUT_CONVERSION_RATE, TOTAL_ADD_PAYMENT_INFO_CONVERSION_RATE, TOTAL_ADD_TO_WISHLIST_CONVERSION_RATE, TOTAL_INITIATE_CHECKOUT_CONVERSION_RATE, TOTAL_SUBSCRIBE_CONVERSION_RATE, TOTAL_VIEW_CONTENT_CONVERSION_RATE, TOTAL_VIEW_CATEGORY_CONVERSION_RATE, TOTAL_ADD_TO_CART_CONVERSION_RATE, TOTAL_SIGNUP_CONVERSION_RATE, TOTAL_PAGE_VISIT_CONVERSION_RATE, TOTAL_LEAD_CONVERSION_RATE, TOTAL_CONTACT_CONVERSION_RATE, TOTAL_SCHEDULE_CONVERSION_RATE, TOTAL_FIND_LOCATION_CONVERSION_RATE, TOTAL_CUSTOMIZE_PRODUCT_CONVERSION_RATE, TOTAL_SUBMIT_APPLICATION_CONVERSION_RATE, TOTAL_START_TRIAL_CONVERSION_RATE, TOTAL_APP_OPEN_CONVERSION_RATE, TOTAL_SEARCH_CONVERSION_RATE, TOTAL_WATCH_VIDEO_CONVERSION_RATE, TOTAL_UNKNOWN_CONVERSION_RATE, TOTAL_CUSTOM_CONVERSION_RATE, INAPP_SKAN_APP_INSTALL, INAPP_SKAN_ASSISTED_APP_INSTALL, INAPP_SKAN_APP_INSTALL_COST_PER_ACTION, INAPP_SKAN_APP_INSTALL_CONVERSION_RATE)

### `ReportingTimeZone`

Specify the timezone to be applied for the reporting.

Type: string enum(PINTEREST_TIME_ZONE, AD_ACCOUNT_TIME_ZONE)

### `CampaignBidOptions`

Object describing the campaign level bid multipliers.

| Field | Type | Required | Description |
|---|---|---|---|
| age_bucket_multipliers | `AgeBucketMultipliers` |  | Age bucket multipliers for bid adjustments. |
| app_type_multipliers | `AppTypeMultipliers` |  | App type multipliers for bid adjustments. |
| audience_multipliers | `CampaignAudienceMultipliers` |  | Audience multipliers for bid adjustments. |
| freq_bid_multiplier_time_window | `FreqBidMultiplierTimeWindow` |  | The time window for frequency bid multipliers. _(nullable)_ |
| frequency_multipliers | `FrequencyMultipliers` |  | Frequency multipliers for bid adjustments. _(nullable)_ |
| gender_multipliers | `GenderMultipliers` |  | Gender multipliers for bid adjustments. |
| placement_multipliers | `PlacementMultipliers` |  | Placement multipliers for bid adjustments. |

### `CampaignObjectiveTypeRead`

Campaign objective type. If set as one of ["AWARENESS", "CONSIDERATION", "WEB_CONVERSION", "CATALOG_SALES", "VIDEO_COMPLETION", "CTV_CONSIDERATION"] the campaign is considered as a Campaign Budget Optimization (CBO) campaign, meaning budget needs to be set at the campaign level rather than at the ad group level. ["WEB_SESSIONS"] is DEPRECATED. `VIDEO_VIEW` is deprecated; use `VIDEO_COMPLETION` instead. `CTV_CONSIDERATION` is in BETA. `AWARENESS_RESERVED` and `ENGAGEMENT` are DEPRECATED and only returned for existing campaigns; they cannot be used to create or update a campaign. For update, only draft campaigns may update objective type.

Type: string enum(AWARENESS, CONSIDERATION, VIDEO_VIEW, WEB_CONVERSION, CATALOG_SALES, WEB_SESSIONS, VIDEO_COMPLETION, APP_INSTALL, SALES, LEADS, CTV_CONSIDERATION, AWARENESS_RESERVED, ENGAGEMENT)

### `CtvGoalType`

Optimization goal for a CTV campaign.

Type: string enum(REACH_BLAST, EFFICIENT_ECPM, CONSIDERATION, CONVERSIONS, ROAS)

### `IntendedPromotionType`

Specifies the intended promotion type for the campaign.

Note: This field is immutable unless the campaign is in draft status.

**STANDARD_AD**
- For ads derived from Pins.
- Supported for all objective types except for current CATALOG\_SALES and WEB\_CONVERSION, which are being deprecated.
- For simplified objective types.

**CATALOG**
- For creating product group promotions.
- Supported for CONSIDERATION and SALES objective types.
- For simplified objective types.

**LEGACY**
- Intended only for maintaining backward compatibility.
- Must be used for CATALOG\_SALES and WEB\_CONVERSION.
- Supported for CATALOG\_SALES and WEB\_CONVERSION objective types.

**If you do not provide this parameter, the default is:**
- LEGACY for CATALOG\_SALES and WEB\_CONVERSION
- STANDARD_AD for other objective types

Type: string enum(LEGACY, STANDARD_AD, CATALOG)

### `MobileAppPlatform`

[Closed beta](/docs/getting-started/using-beta-and-restricted-features/)

Platform of the mobile app for an `APP_INSTALL` campaign.

Type: string enum(IOS, ANDROID)

### `PerformancePlusCampaignSettings`

Pinterest Performance+ campaign settings.

| Field | Type | Required | Description |
|---|---|---|---|
| boost_prospecting_ad_group_bid | boolean |  | Whether to boost prospecting ad group bid. This field is deprecated. _(DEPRECATED)_ |
| pinner_list_exclusions | array<string> |  | List of campaign-level exclusion pinner list IDs. This field is deprecated. _(DEPRECATED)_ |

### `SummaryStatus`

Summary status for campaign

Type: string enum(RUNNING, PAUSED, NOT_STARTED, COMPLETED, ADVERTISER_DISABLED, ARCHIVED, DRAFT, DELETED_DRAFT)

### `TrackingUrls`

Third-party tracking URLs. Up to three tracking URLs - with a max length of 2,000 - are supported for
  each event type. Tracking URLs set at the ad group or ad level can override
  those set at the campaign level. For more information, see [Third-party and dynamic tracking](https://help.pinterest.com/en/business/article/third-party-and-dynamic-tracking).

| Field | Type | Required | Description |
|---|---|---|---|
| audience_verification | array<string> |  |  |
| buyable_button | array<string> |  |  |
| click | array<string> |  |  |
| engagement | array<string> |  |  |
| impression | array<string> |  |  |

### `CampaignCreateItem`

Single campaign create item with create-specific defaults.

| Field | Type | Required | Description |
|---|---|---|---|
| ad_account_id | string |  | Setting this field does nothing. The ad account ID gets set from the path parameter. _(DEPRECATED)_ |
| app_id | string |  | [Closed beta](/docs/getting-started/using-beta-and-restricted-features/)  The store ID of the mobile app for `APP_INSTALL` campaigns. |
| app_platform | `MobileAppPlatform` |  | [Closed beta](/docs/getting-started/using-beta-and-restricted-features/)  Platform of the mobile app for `APP_INSTALL` campaigns. |
| app_skan_version | number |  | [Closed beta](/docs/getting-started/using-beta-and-restricted-features/)  Skan version of the iOS mobile app for `APP_INSTALL` campaigns. Must be 3.0 or 4.0. _(nullable)_ |
| bid_options | `CampaignBidOptions` |  | [Restricted](/docs/getting-started/using-beta-and-restricted-features/)  Object describing the campaign level bid multipliers. |
| ctv_goal_type | `CtvGoalType` |  | The optimization goal for a `CTV_CONSIDERATION` campaign. Determines how the campaign bids and what it optimizes toward. `CONVERSIONS` and `ROAS` additionally require a `ctv_conversion_event` on the ad group. |
| daily_spend_cap | integer |  | Note: The default for this field is null, which is treated the same as 0. For campaign budget optimization, a daily or lifetime spend cap must be set, but not both. For ad group level budgets, this field must be 0 or unset. _(nullable)_ |
| default_ad_group_budget_in_micro_currency | integer |  | Setting this field does nothing. _(nullable; DEPRECATED)_ |
| end_time | integer |  | Note: To clear this field on update, set the end time to -1. Timestamp in Unix format for scheduling when ads in the campaign stop appearing. Must occur after any end times for child ad groups. If `end_time` is not specified for the campaign, ads run indefinitely unless you update the campaign, changing their status to `paused`. Learn about [scheduling campaigns](/docs/api-features/managing-campaigns/#campaign-scheduling). Different end times can be set for the campaign's child ad groups, but they cannot occur after an `end_time` specified for the campaign. - If your campaign has a child ad group with an end time specified, and if you update that campaign with an `end_time` that is earlier than that of the ad group, the campaign `end_time` will supersede the ad group `end_time`, and the request will not return an error. - In this scenario, if you call [List campaigns](/docs/api/v5/campaigns-list) or [List ad groups](/docs/api/v5/ad_groups-list), the returned campaigns or ad groups are listed with the start and end times that you assigned them, regardless of supersedence. _(nullable)_ |
| intended_promotion_type | `IntendedPromotionType` |  |  |
| is_automated_campaign | boolean |  | Note: This field is immutable unless the campaign is in draft status. Specifies whether the campaign was created in the automated campaign flow. When using Automated Campaigns, a daily spend cap must be set, and Pinterest Performance+ may not be used. The following objective types are supported: - CONSIDERATION - WEB\_CONVERSION - SALES - LEADS - CATALOG\_SALES _(nullable; default false)_ |
| is_campaign_budget_optimization | boolean |  | Note: This field is immutable unless the campaign is in draft status. Determines if a campaign automatically generates ad-group level budgets given a campaign budget to maximize campaign outcome. When using campaign budgets with a lifetime spend cap, the end time must be provided. _(nullable; default true)_ |
| is_flexible_daily_budgets | boolean |  | Determine if a campaign has setup for flexible daily budgets, also known as "Pinterest Performance+ budgets". Flexible daily budgets are only supported for campaign budget optimization with a daily spend cap, and not a lifetime spend cap. _(nullable; default false)_ |
| is_ltv_optimized | boolean |  | Specifies whether the campaign is optimized for Lifetime Value (LTV). Only available for eligible advertisers. |
| is_performance_plus | boolean |  | Note: This field is immutable unless the campaign is in draft status. You can only use this feature with the following objectives: - CONSIDERATION - WEB\_CONVERSION - SALES - LEADS - CATALOG\_SALES - APP\_INSTALL Enable Pinterest Performance+ for your campaign. To learn more, see [Pinterest Performance+ Setup](https://developers.pinterest.com/docs/api-features/pinterest-performance-plus-setup/) _(default false)_ |
| is_top_of_search | boolean |  | Note: This field is immutable unless the campaign is in draft status.  [Restricted](/docs/getting-started/using-beta-and-restricted-features/)  Have your ads and content appear at the top of search result lists in Pinterest.  You can only use this feature with the following objectives:  - CONSIDERATION  - WEB\_CONVERSION  - SALES  - LEADS  - CATALOG\_SALES  You cannot use this feature with Pinterest Performance+ or Premiere Spotlight enabled. _(default false)_ |
| lifetime_spend_cap | integer |  | Note: The default for this field is null, which is treated the same as 0. For campaign budget optimization, a daily or lifetime spend cap must be set, but not both. For ad group level budgets, this field must be 0 or unset. _(nullable)_ |
| name | string | yes | Campaign name - 255 chars max. |
| objective_type | `ConversionObjectiveType` | yes |  |
| order_line_id | string |  | Note: To clear this field on update, set the order line ID to 0. Order line ID that appears on the invoice. The order line must not be expired. _(nullable)_ |
| start_time | integer |  | Timestamp in Unix format for scheduling when ads in the campaign start to appear. Must precede any start times set for child ad groups. Defaults to current time if no time is specified. Learn about [scheduling campaigns](/docs/api-features/managing-campaigns/#campaign-scheduling). Different start times can be set for the campaign's child ad groups, but they cannot occur before a `start_time` specified for the campaign. - If your campaign has a child ad group with a start time specified, and if you update that campaign with a `start_time` that is later than that of the ad group, the campaign `start_time` will supersede the ad group `start_time`, and the request will not return an error. - In this scenario, if you call [List campaigns](/docs/api/v5/campaigns-list) or [List ad groups](/docs/api/v5/ad_groups-list), the returned campaigns or ad groups are listed with the start and end times that you assigned them, regardless of supersedence. _(nullable)_ |
| status | `EntityStatus` |  | _(default "ACTIVE")_ |
| tracking_urls | `TrackingUrls` |  | _(nullable)_ |

### `CampaignBatchUpdateItem`

Single campaign update item with update-specific bid options.

| Field | Type | Required | Description |
|---|---|---|---|
| ad_account_id | string |  | Setting this field does nothing. The ad account ID gets set from the path parameter. _(DEPRECATED)_ |
| app_id | string |  | [Closed beta](/docs/getting-started/using-beta-and-restricted-features/)  The store ID of the mobile app for `APP_INSTALL` campaigns. |
| app_platform | `MobileAppPlatform` |  | [Closed beta](/docs/getting-started/using-beta-and-restricted-features/)  Platform of the mobile app for `APP_INSTALL` campaigns. |
| app_skan_version | number |  | [Closed beta](/docs/getting-started/using-beta-and-restricted-features/)  Skan version of the iOS mobile app for `APP_INSTALL` campaigns. Must be 3.0 or 4.0. _(nullable)_ |
| bid_options | `CampaignBidOptionsUpdate` |  | Object describing an update to the campaign level bid multipliers. |
| ctv_goal_type | `CtvGoalType` |  | The optimization goal for a `CTV_CONSIDERATION` campaign. Determines how the campaign bids and what it optimizes toward. `CONVERSIONS` and `ROAS` additionally require a `ctv_conversion_event` on the ad group. |
| daily_spend_cap | integer |  | Note: The default for this field is null, which is treated the same as 0. For campaign budget optimization, a daily or lifetime spend cap must be set, but not both. For ad group level budgets, this field must be 0 or unset. _(nullable)_ |
| default_ad_group_budget_in_micro_currency | integer |  | Setting this field does nothing. _(nullable; DEPRECATED)_ |
| end_time | integer |  | Note: To clear this field on update, set the end time to -1. Timestamp in Unix format for scheduling when ads in the campaign stop appearing. Must occur after any end times for child ad groups. If `end_time` is not specified for the campaign, ads run indefinitely unless you update the campaign, changing their status to `paused`. Learn about [scheduling campaigns](/docs/api-features/managing-campaigns/#campaign-scheduling). Different end times can be set for the campaign's child ad groups, but they cannot occur after an `end_time` specified for the campaign. - If your campaign has a child ad group with an end time specified, and if you update that campaign with an `end_time` that is earlier than that of the ad group, the campaign `end_time` will supersede the ad group `end_time`, and the request will not return an error. - In this scenario, if you call [List campaigns](/docs/api/v5/campaigns-list) or [List ad groups](/docs/api/v5/ad_groups-list), the returned campaigns or ad groups are listed with the start and end times that you assigned them, regardless of supersedence. _(nullable)_ |
| id | string | yes | Campaign ID, must be associated with the ad account ID provided in the path. _(maxLength 18)_ |
| intended_promotion_type | `IntendedPromotionType` |  |  |
| is_automated_campaign | boolean |  | Note: This field is immutable unless the campaign is in draft status. Specifies whether the campaign was created in the automated campaign flow. When using Automated Campaigns, a daily spend cap must be set, and Pinterest Performance+ may not be used. The following objective types are supported: - CONSIDERATION - WEB\_CONVERSION - SALES - LEADS - CATALOG\_SALES _(nullable)_ |
| is_campaign_budget_optimization | boolean |  | Note: This field is immutable unless the campaign is in draft status. Determines if a campaign automatically generates ad-group level budgets given a campaign budget to maximize campaign outcome. When using campaign budgets with a lifetime spend cap, the end time must be provided. _(nullable)_ |
| is_flexible_daily_budgets | boolean |  | Determine if a campaign has setup for flexible daily budgets, also known as "Pinterest Performance+ budgets". Flexible daily budgets are only supported for campaign budget optimization with a daily spend cap, and not a lifetime spend cap. _(nullable)_ |
| is_ltv_optimized | boolean |  | Specifies whether the campaign is optimized for Lifetime Value (LTV). Only available for eligible advertisers. |
| is_performance_plus | boolean |  | Note: This field is immutable unless the campaign is in draft status. You can only use this feature with the following objectives: - CONSIDERATION - WEB\_CONVERSION - SALES - LEADS - CATALOG\_SALES - APP\_INSTALL Enable Pinterest Performance+ for your campaign. To learn more, see [Pinterest Performance+ Setup](https://developers.pinterest.com/docs/api-features/pinterest-performance-plus-setup/) |
| is_top_of_search | boolean |  | Note: This field is immutable unless the campaign is in draft status.  [Restricted](/docs/getting-started/using-beta-and-restricted-features/)  Have your ads and content appear at the top of search result lists in Pinterest.  You can only use this feature with the following objectives:  - CONSIDERATION  - WEB\_CONVERSION  - SALES  - LEADS  - CATALOG\_SALES  You cannot use this feature with Pinterest Performance+ or Premiere Spotlight enabled. |
| lifetime_spend_cap | integer |  | Note: The default for this field is null, which is treated the same as 0. For campaign budget optimization, a daily or lifetime spend cap must be set, but not both. For ad group level budgets, this field must be 0 or unset. _(nullable)_ |
| name | string |  | Campaign name - 255 chars max. |
| objective_type | `ConversionObjectiveType` |  |  |
| order_line_id | string |  | Note: To clear this field on update, set the order line ID to 0. Order line ID that appears on the invoice. The order line must not be expired. _(nullable)_ |
| performance_plus_campaign_settings | `PerformancePlusCampaignSettings` |  | Pinterest Performance+ campaign settings. _(nullable)_ |
| start_time | integer |  | Timestamp in Unix format for scheduling when ads in the campaign start to appear. Must precede any start times set for child ad groups. Defaults to current time if no time is specified. Learn about [scheduling campaigns](/docs/api-features/managing-campaigns/#campaign-scheduling). Different start times can be set for the campaign's child ad groups, but they cannot occur before a `start_time` specified for the campaign. - If your campaign has a child ad group with a start time specified, and if you update that campaign with a `start_time` that is later than that of the ad group, the campaign `start_time` will supersede the ad group `start_time`, and the request will not return an error. - In this scenario, if you call [List campaigns](/docs/api/v5/campaigns-list) or [List ad groups](/docs/api/v5/ad_groups-list), the returned campaigns or ad groups are listed with the start and end times that you assigned them, regardless of supersedence. _(nullable)_ |
| status | `EntityStatus` |  |  |
| tracking_urls | `TrackingUrls` |  | _(nullable)_ |

### `CampaignBatchItem`

Item in a batch campaign response.

| Field | Type | Required | Description |
|---|---|---|---|
| data | `CampaignBatchResponseData` |  | Campaign data on success. |
| exceptions | array<`Exception`> |  | Exceptions on failure. |

### `CampaignDeliveryEstimatesCampaign`

Campaign configuration for delivery estimates.

| Field | Type | Required | Description |
|---|---|---|---|
| ad_groups | array<`AdGroupDeliveryEstimates`> | yes |  |
| budget_duration_type | `BudgetDurationType` | yes | Duration type of the budget |
| campaign_id | string |  | Optional id of an existing campaign in this ad account. A published (ACTIVE or PAUSED) campaign's id is forwarded to the estimate; any other status is estimated as a new campaign. An id that is not a campaign in this ad account is rejected with a 400. |
| daily_spend_cap | integer |  | Campaign daily spend cap. When the budget_duration_type is FIXED_DAILY or FLEXIBLE_DAILY, this field is required. |
| end_date | string |  | End date of the date range for an ad campaign, pattern YYYY-MM-DD. Required when budget_duration_type is LIFETIME. |
| intended_promotion_type | `IntendedPromotionType` |  | The creative source for ads in this campaign. Required when objective_type is SALES or CONSIDERATION. |
| lifetime_spend_cap | integer |  | Campaign total spending cap. When the budget_duration_type is LIFETIME, this field is required. The end date field is also required for lifetime spending. |
| objective_type | `DeliveryEstimateObjectiveType` | yes |  |
| start_date | string | yes | Start date of the date range for an ad campaign, pattern YYYY-MM-DD. |

### `CampaignDeliveryEstimatesDerivedMetrics`

Derived metrics for an ad campaign.

| Field | Type | Required | Description |
|---|---|---|---|
| cpc | number (float) |  | Estimated cost per click. |
| cpc_lower | number (float) |  | Lower estimate of the cost per click. |
| cpc_upper | number (float) |  | Upper estimate of the cost per click. |
| cpm | number (float) |  | Estimated cost per thousand impressions. |
| cpm_lower | number (float) |  | Lower estimate of cost per thousand impressions. |
| cpm_upper | number (float) |  | Upper estimate of cost per thousand impressions. |
| lifetime_click | number (float) |  | Estimated lifetime clicks. |
| lifetime_click_lower | number (float) |  | Lower estimate of lifetime clicks. |
| lifetime_click_upper | number (float) |  | Upper estimate of lifetime clicks. |
| lifetime_frequency | number (float) |  | Estimated lifetime frequency. |
| lifetime_frequency_lower | number (float) |  | Lower estimate of lifetime frequency. |
| lifetime_frequency_upper | number (float) |  | Upper estimate of lifetime frequency. |
| lifetime_impression | number (float) |  | Estimated lifetime impressions. |
| lifetime_impression_lower | number (float) |  | Lower estimate of lifetime impressions. |
| lifetime_impression_upper | number (float) |  | Upper estimate of lifetime impressions. |
| lifetime_reach | number (float) |  | Estimated lifetime reach. |
| lifetime_reach_lower | number (float) |  | Lower estimate of lifetime reach. |
| lifetime_reach_upper | number (float) |  | Upper estimate of lifetime reach. |
| weekly_click | number (float) |  | Estimated weekly clicks. |
| weekly_click_lower | number (float) |  | Lower estimate of weekly clicks. |
| weekly_click_upper | number (float) |  | Upper estimate of weekly clicks. |
| weekly_frequency | number (float) |  | Estimated weekly frequency. |
| weekly_frequency_lower | number (float) |  | Lower estimate of weekly frequency. |
| weekly_frequency_upper | number (float) |  | Upper estimate of weekly frequency. |
| weekly_impression | number (float) |  | Estimated weekly impressions. |
| weekly_impression_lower | number (float) |  | Lower estimate of weekly impressions. |
| weekly_impression_upper | number (float) |  | Upper estimate of weekly impressions. |
| weekly_reach | number (float) |  | Estimated weekly reach. |
| weekly_reach_lower | number (float) |  | Lower estimate of weekly reach. |
| weekly_reach_upper | number (float) |  | Upper estimate of weekly reach. |

### `CampaignPlanningCurveEstimate`

| Field | Type | Required | Description |
|---|---|---|---|
| estimation_type | `CampaignPlanningEstimationType` |  | Estimation type for campaign planning estimated curve |
| points | array<`CampaignPlanningPointEstimate`> |  | The estimation points that make up the estimated curve. |

### `MetricsResponseDataItems`

| Field | Type | Required | Description |
|---|---|---|---|
| metrics | object | yes | Metrics object containing the requested metric columns and their values. The keys are metric names (e.g., AD_GROUP_ID, DATE, SPEND_IN_DOLLAR) and values are the metric values (strings or numbers). |
| targeting_type | string | yes | The targeting type for this data item (e.g., KEYWORD, APPTYPE, GENDER) |
| targeting_value | string | yes | The targeting value for this data item (e.g., 'christmas decor ideas', 'iphone', 'female') |

### `AgeBucketMultipliers`

This represents a mapping from age bucket to a bid price adjustment.

Multiplier values must be between 0 and 10. A value of 10 represents a 900% increase in bid price (from $1 to $10 for example). A value of 0 will stop distribution for this item on the specified age bucket in `MAX_BID` ad groups in `CATALOG_SALES` campaigns. All age bucket multipliers must be set at the same time. If a multiplier is not provided it is assumed to be 1 (no bid adjustment).

| Field | Type | Required | Description |
|---|---|---|---|
| AGE_BUCKET | `TargetingSpecAgeBucket` |  | Age bucket identifier. |

### `AppTypeMultipliers`

This represents a mapping from app type targeting criteria to a bid price adjustment.

Multiplier values must be between 0 and 10. A value of 10 represents a 900% increase in bid price (from $1 to $10 for example). A value of 0 will stop distribution for this item on the specified app type in `MAX_BID` ad groups in `CATALOG_SALES` campaigns. All app type multipliers must be set at the same time. If a multiplier is not provided it is assumed to be 1 (no bid adjustment).

| Field | Type | Required | Description |
|---|---|---|---|
| APP_TYPE | `TargetingSpecAppType` |  | App type identifier. |

### `CampaignAudienceMultipliers`

This represents a mapping from Audience ID to a bid price adjustment.

Multiplier values must be between 0 and 10. A value of 10 represents a 900% increase in bid price (from $1 to $10 for example). A value of 0 will stop distribution for this item on the specified audience in `MAX_BID` ad groups in `CATALOG_SALES` campaigns. All audience multipliers must be set at the same time. If a multiplier is not provided it is assumed to be 1 (no bid adjustment).

| Field | Type | Required | Description |
|---|---|---|---|
| AUDIENCE_ID | string |  | Audience ID for the multiplier. |

### `FreqBidMultiplierTimeWindow`

The time window for frequency bid multipliers.

Type: string enum(WEEK, MONTH, None)

### `FrequencyMultipliers`

This represents a mapping from impression count to a bid price adjustment for frequency-based bidding.

Keys are impression counts (0-10) representing how many times a user has seen the ad.
Multiplier values must be between 0 and 10. A value of 10 represents a 900% increase in bid price.
A value of 0 will stop distribution for this impression count.
If a multiplier is not provided it is assumed to be 1 (no bid adjustment).

| Field | Type | Required | Description |
|---|---|---|---|
| IMPRESSION_COUNT | string |  | Impression count identifier. |

### `GenderMultipliers`

This represents a mapping from gender targeting criteria to a bid price adjustment.

Multiplier values must be between 0 and 10. A value of 10 represents a 900% increase in bid price (from $1 to $10 for example). A value of 0 will stop distribution for this item on the specified gender in `MAX_BID` ad groups in `CATALOG_SALES` campaigns. All gender multipliers must be set at the same time. If a multiplier is not provided it is assumed to be 1 (no bid adjustment).

| Field | Type | Required | Description |
|---|---|---|---|
| GENDER | `TargetingSpecGender` |  | Gender identifier. |

### `PlacementMultipliers`

This represents a mapping from placement to a bid price adjustment.

Multiplier values must be between 0 and 10. A value of 10 represents a 900% increase in bid price (from $1 to $10 for example). A value of 0 will stop distribution for this item on the specified placement in `MAX_BID` ad groups in `CATALOG_SALES` campaigns. All placement multipliers must be set at the same time. If a multiplier is not provided it is assumed to be 1 (no bid adjustment).

| Field | Type | Required | Description |
|---|---|---|---|
| PLACEMENT | `PlacementType` |  | Placement type identifier. |

### `ConversionObjectiveType`

Intended result of the campaign.
As part of [objective simplification](/docs/work-with-ads/try-out-campaign-objective-type-simplification/), `WEB_CONVERSION` and `CATALOG_SALES` objectives are being deprecated and replaced by `SALES` and `LEADS`.
Also, `WEB_SESSIONS` and `VIDEO_VIEW` objectives are deprecated. We recommend using `VIDEO_COMPLETION` as an alternative for the latter.
You can only update objectives for draft campaigns.

Type: string enum(AWARENESS, CONSIDERATION, WEB_CONVERSION, CATALOG_SALES, VIDEO_COMPLETION, APP_INSTALL, SALES, LEADS, CTV_CONSIDERATION)

### `CampaignBidOptionsUpdate`

Object describing an update to the campaign level bid multipliers.

| Field | Type | Required | Description |
|---|---|---|---|
| age_bucket_multipliers | `AgeBucketMultipliers` |  | Age bucket multipliers for bid adjustments. |
| app_type_multipliers | `AppTypeMultipliers` |  | App type multipliers for bid adjustments. |
| audience_multipliers | `CampaignAudienceMultipliers` |  | Audience multipliers for bid adjustments. |
| freq_bid_multiplier_time_window | `FreqBidMultiplierTimeWindow` |  | The time window for frequency bid multipliers. _(nullable)_ |
| frequency_multipliers | `FrequencyMultipliers` |  | Frequency multipliers for bid adjustments. _(nullable)_ |
| gender_multipliers | `GenderMultipliers` |  | Gender multipliers for bid adjustments. |
| placement_multipliers | `PlacementMultipliers` |  | Placement multipliers for bid adjustments. |
| update_mask | array<`CampaignBidOptionsUpdateMaskItems`> | yes | List of fields to update. Only the fields in the list will be updated. |

### `CampaignBatchResponseData`

Campaign data in batch response, with all fields optional to support error cases where data may be empty.

| Field | Type | Required | Description |
|---|---|---|---|
| ad_account_id | string |  | Campaign's Advertiser ID. |
| app_id | string |  | [Closed beta](/docs/getting-started/using-beta-and-restricted-features/)  The store ID of the mobile app for `APP_INSTALL` campaigns. |
| app_platform | `MobileAppPlatform` |  | [Closed beta](/docs/getting-started/using-beta-and-restricted-features/)  Platform of the mobile app for `APP_INSTALL` campaigns. |
| app_skan_version | number |  | [Closed beta](/docs/getting-started/using-beta-and-restricted-features/)  Skan version of the iOS mobile app for `APP_INSTALL` campaigns. Must be 3.0 or 4.0. _(nullable)_ |
| bid_options | `CampaignBidOptions` |  | [Restricted](/docs/getting-started/using-beta-and-restricted-features/)  Object describing the campaign level bid multipliers. |
| created_time | integer |  | Campaign creation time. Unix timestamp in seconds. _(read-only)_ |
| ctv_goal_type | `CtvGoalType` |  | The optimization goal for a `CTV_CONSIDERATION` campaign. Determines how the campaign bids and what it optimizes toward. `CONVERSIONS` and `ROAS` additionally require a `ctv_conversion_event` on the ad group. |
| daily_spend_cap | integer |  | Note: The default for this field is null, which is treated the same as 0. For campaign budget optimization, a daily or lifetime spend cap must be set, but not both. For ad group level budgets, this field must be 0 or unset. _(nullable)_ |
| default_ad_group_budget_in_micro_currency | integer |  | When transitioning from campaign budget optimization to non-campaign budget optimization, the default_ad_group_budget_in_micro_currency will propagate to each child ad groups daily budget. Unit is micro currency of the associated advertiser account. _(nullable)_ |
| end_time | integer |  | Note: To clear this field on update, set the end time to -1. Timestamp in Unix format for scheduling when ads in the campaign stop appearing. Must occur after any end times for child ad groups. If `end_time` is not specified for the campaign, ads run indefinitely unless you update the campaign, changing their status to `paused`. Learn about [scheduling campaigns](/docs/api-features/managing-campaigns/#campaign-scheduling). Different end times can be set for the campaign's child ad groups, but they cannot occur after an `end_time` specified for the campaign. - If your campaign has a child ad group with an end time specified, and if you update that campaign with an `end_time` that is earlier than that of the ad group, the campaign `end_time` will supersede the ad group `end_time`, and the request will not return an error. - In this scenario, if you call [List campaigns](/docs/api/v5/campaigns-list) or [List ad groups](/docs/api/v5/ad_groups-list), the returned campaigns or ad groups are listed with the start and end times that you assigned them, regardless of supersedence. _(nullable)_ |
| id | string |  | Campaign ID. |
| intended_promotion_type | `IntendedPromotionType` |  |  |
| is_automated_campaign | boolean |  | Note: This field is immutable unless the campaign is in draft status. Specifies whether the campaign was created in the automated campaign flow. When using Automated Campaigns, a daily spend cap must be set, and Pinterest Performance+ may not be used. The following objective types are supported: - CONSIDERATION - WEB\_CONVERSION - SALES - LEADS - CATALOG\_SALES _(nullable)_ |
| is_campaign_budget_optimization | boolean |  | Note: This field is immutable unless the campaign is in draft status. Determines if a campaign automatically generates ad-group level budgets given a campaign budget to maximize campaign outcome. When using campaign budgets with a lifetime spend cap, the end time must be provided. _(nullable)_ |
| is_carting | boolean |  | Whether the campaign contains a carting(where-to-buy link) ad. _(read-only)_ |
| is_flexible_daily_budgets | boolean |  | Determine if a campaign has setup for flexible daily budgets, also known as "Pinterest Performance+ budgets". Flexible daily budgets are only supported for campaign budget optimization with a daily spend cap, and not a lifetime spend cap. _(nullable)_ |
| is_ltv_optimized | boolean |  | Specifies whether the campaign is optimized for Lifetime Value (LTV). Only available for eligible advertisers. |
| is_performance_plus | boolean |  | Note: This field is immutable unless the campaign is in draft status. You can only use this feature with the following objectives: - CONSIDERATION - WEB\_CONVERSION - SALES - LEADS - CATALOG\_SALES - APP\_INSTALL Enable Pinterest Performance+ for your campaign. To learn more, see [Pinterest Performance+ Setup](https://developers.pinterest.com/docs/api-features/pinterest-performance-plus-setup/) |
| is_top_of_search | boolean |  | Note: This field is immutable unless the campaign is in draft status.  [Restricted](/docs/getting-started/using-beta-and-restricted-features/)  Have your ads and content appear at the top of search result lists in Pinterest.  You can only use this feature with the following objectives:  - CONSIDERATION  - WEB\_CONVERSION  - SALES  - LEADS  - CATALOG\_SALES  You cannot use this feature with Pinterest Performance+ or Premiere Spotlight enabled. |
| lifetime_spend_cap | integer |  | Note: The default for this field is null, which is treated the same as 0. For campaign budget optimization, a daily or lifetime spend cap must be set, but not both. For ad group level budgets, this field must be 0 or unset. _(nullable)_ |
| name | string |  | Campaign name - 255 chars max. |
| objective_type | `CampaignObjectiveTypeRead` |  |  |
| order_line_id | string |  | Note: To clear this field on update, set the order line ID to 0. Order line ID that appears on the invoice. The order line must not be expired. _(nullable)_ |
| performance_plus_campaign_settings | `PerformancePlusCampaignSettings` |  | Pinterest Performance+ campaign settings. _(nullable)_ |
| start_time | integer |  | Timestamp in Unix format for scheduling when ads in the campaign start to appear. Must precede any start times set for child ad groups. Defaults to current time if no time is specified. Learn about [scheduling campaigns](/docs/api-features/managing-campaigns/#campaign-scheduling). Different start times can be set for the campaign's child ad groups, but they cannot occur before a `start_time` specified for the campaign. - If your campaign has a child ad group with a start time specified, and if you update that campaign with a `start_time` that is later than that of the ad group, the campaign `start_time` will supersede the ad group `start_time`, and the request will not return an error. - In this scenario, if you call [List campaigns](/docs/api/v5/campaigns-list) or [List ad groups](/docs/api/v5/ad_groups-list), the returned campaigns or ad groups are listed with the start and end times that you assigned them, regardless of supersedence. _(nullable)_ |
| status | `NullableEntityStatus` |  | _(nullable)_ |
| summary_status | `SummaryStatus` |  | _(read-only)_ |
| tracking_urls | `TrackingUrls` |  | _(nullable)_ |
| type | string |  | Always "campaign". _(read-only)_ |
| updated_time | integer |  | UTC timestamp. Last update time. _(read-only)_ |

### `Exception`

| Field | Type | Required | Description |
|---|---|---|---|
| code | integer |  |  |
| message | string | yes |  |

### `AdGroupDeliveryEstimates`

Ad group configuration for delivery estimates.

| Field | Type | Required | Description |
|---|---|---|---|
| auto_targeting_enabled | boolean |  |  |
| bid_strategy_type | `BidStrategyType` |  |  |
| budget_type | `BudgetType` |  |  |
| creative_types | array<`AdGroupAudienceSizingCreativeTypes`> |  | Pin creative types filter. **Note:** SHOP_THE_PIN has been deprecated. Please use COLLECTION instead. |
| keywords | array<`AdGroupDeliveryEstimatesKeywordsItems`> |  | Array of keyword objects. If the keywords field is missing, all keywords will be targeted. _(nullable)_ |
| monthly_frequency_cap | integer |  | Set a limit to the number of times a promoted pin from this campaign can be impressed by a pinner within the past rolling 30 days. Only available for CPM (cost per mille (1000 impressions))  ad groups. _(minimum 0)_ |
| optimization_goal_metadata | `OptimizationGoalMetadata` |  |  |
| optimization_type | `OptimizationType` |  | Optimization type for ad group delivery. For AWARENESS, IMPRESSION is always used; WEB_CONVERSION, CLICKTHROUGH, and OUTBOUND_CLICK are accepted for compatibility and discarded. ROAS is not supported. Defaults to WEB_CONVERSION for WEB_CONVERSION/SALES/LEADS objectives, and for catalog campaigns when optimization_goal_metadata is set; CLICKTHROUGH otherwise. |
| pacing_delivery_type | `PacingDeliveryType` |  |  |
| placement_group | `PlacementGroupType` |  |  |
| product_group_ids | array<`DeliveryEstimatesProductGroupId`> |  | [Targeted product group IDs](/docs/redoc/#section/AdGroup-Audience-Sizing) **Note:** This can only be combined with shopping/catalog sales campaigns. |
| targeting_spec | `PlanningTargetingSpec` |  |  |

### `BudgetDurationType`

Budget duration type for delivery estimates.

Type: string enum(FIXED_DAILY, FLEXIBLE_DAILY, LIFETIME)

### `DeliveryEstimateObjectiveType`

Objective type for delivery estimates.

Type: string enum(AWARENESS, CONSIDERATION, CATALOG_SALES, WEB_CONVERSION, SALES, LEADS)

### `CampaignPlanningEstimationType`

Estimation type for campaign planning estimated curve

Type: string enum(IMPRESSION, CLICK, CONVERSION, WEEKLY_FREQUENCY, WEEKLY_REACH, LIFETIME_FREQUENCY, LIFETIME_REACH, CPM, CPC, CPA)

### `CampaignPlanningPointEstimate`

A JSON object that represents a single estimation point. An estimation point contains the expected budget used and the estimated result, Y, along with an expected range based for the budget.

| Field | Type | Required | Description |
|---|---|---|---|
| budget | integer | yes | The budget value of the point. Null for budget-recommendation points, whose budget is on the parent recommendation. _(nullable)_ |
| double_y | number (double) | yes | Y value as a decimal. _(nullable)_ |
| max_y | integer | yes | The maximum Y value of the point. _(nullable)_ |
| min_y | integer | yes | The minimum Y value of the point. _(nullable)_ |
| y | integer | yes | The expected Y value of the point. _(nullable)_ |

### `AgeBucketMultipliersAdditionalProperties`

Bid multiplier value for age bucket targeting. Must be a float64.

Type: number (double)

### `TargetingSpecAgeBucket`

Type: string enum(18-24, 19+, 20+, 21+, 25-34, 35-44, 45-49, 50-54, 55-64, 65+)

### `TargetingSpecAppType`

Type: string enum(android_mobile, android_tablet, ipad, iphone, web, web_mobile)

### `CampaignAudienceMultipliersAdditionalProperties`

Bid multiplier value for audience targeting. Must be between 0 and 10.

Type: number (double)

### `GenderMultipliersAdditionalProperties`

Bid multiplier value for gender targeting. Must be a float64.

Type: number (double)

### `TargetingSpecGender`

Type: string enum(unknown, male, female)

### `PlacementType`

Placement type for bid multiplier targeting.

Type: string enum(SEARCH, BROWSE, RELATED_PINS)

### `CampaignBidOptionsUpdateMaskItems`

Fields that can be updated in campaign bid options.

Type: string enum(AUDIENCE, APP_TYPE, PLACEMENT, GENDER, AGE_BUCKET, FREQUENCY)

### `NullableEntityStatus`

Entity status

Type: string enum(ACTIVE, PAUSED, ARCHIVED, DRAFT, DELETED_DRAFT, None)

### `AdGroupAudienceSizingCreativeTypes`

Type: string enum(REGULAR, VIDEO, SHOPPING, CAROUSEL, MAX_VIDEO, SHOP_THE_PIN, COLLECTION, IDEA, MAX_WIDTH_REGULAR_COLLECTION, MAX_WIDTH_VIDEO_COLLECTION)

### `AdGroupDeliveryEstimatesKeywordsItems`

| Field | Type | Required | Description |
|---|---|---|---|
| match_type | `NullalbleMatchType` | yes | _(nullable)_ |
| value | string | yes | Keyword value (120 chars max). |

### `BidStrategyType`

Bid strategy type. For Campaigns with Video Completion objectives, the only supported bid strategy type is AUTOMATIC_BID, also known as "Pinterest Performance+ bidding".

Type: string enum(AUTOMATIC_BID, MAX_BID, TARGET_AVG, None)

### `BudgetType`

Budget type. If DAILY, an ad group's daily spend will not exceed the budget parameter value. If LIFETIME, the end_time parameter is **REQUIRED**, and the ad group spend is spread evenly between the ad group `start_time` and `end_time` range. A CBO campaign automatically generates ad group budgets from its campaign budget to maximize campaign outcome. For CBO campaigns, only "CBO_ADGROUP" is allowed. For WEB_SESSIONS campaigns, only "LIFETIME" is allowed. For update, only draft ad groups may update budget type.

Type: string enum(DAILY, LIFETIME, CBO_ADGROUP)

### `DeliveryEstimatesProductGroupId`

Type: string

### `OptimizationGoalMetadata`

| Field | Type | Required | Description |
|---|---|---|---|
| conversion_tag_v3_goal_metadata | `ConversionTagV3GoalMetadata` |  |  |
| frequency_goal_metadata | `FrequencyGoalMetadata` |  |  |
| scrollup_goal_metadata | `ScrollupGoalMetadata` |  |  |

### `OptimizationType`

Optimization type for ad group delivery estimates. Supported types vary by objective.

Type: string enum(CLICKTHROUGH, IMPRESSION, WEB_CONVERSION, ROAS, OUTBOUND_CLICK)

### `PacingDeliveryType`

Ad group pacing delivery type. With ACCELERATED, an ad group budget is spent as fast as possible. With STANDARD, an ad group budget is spent smoothly over a day. When using CBO, only the STANDARD pacing delivery type is allowed.

Type: string enum(STANDARD, ACCELERATED)

### `PlacementGroupType`

Campaign placement group type

Type: string enum(ALL, SEARCH, BROWSE, OTHER)

### `PlanningTargetingSpec`

Targeting spec for delivery estimates and audience sizing.

| Field | Type | Required | Description |
|---|---|---|---|
| AGE_BUCKET | array<`TargetingSpecAgeBucket`> |  | **Legacy field.** Predefined age ranges. We recommend using MINIMUM_AGE and MAXIMUM_AGE instead for more flexible targeting. Cannot be combined with MINIMUM_AGE/MAXIMUM_AGE. If neither AGE_BUCKET nor MINIMUM_AGE/MAXIMUM_AGE are specified, all ages will be targeted. _(nullable)_ |
| APPTYPE | array<`TargetingSpecAppType`> |  | Allowed devices. If the APPTYPE field is missing, the default behavior in terms of ad delivery is that **All devices/apptypes** will be targeted. _(nullable)_ |
| AUDIENCE_EXCLUDE | array<`Pinterest.Lib.IntegerFormatType`> |  | Excluded customer list IDs. Used to drive new customer acquisition goals. For example: ["2542620905475"]. Audience lists need to have at least 100 people with Pinterest accounts in them. If the AUDIENCE_EXCLUDE field is missing, the default behavior in terms of ad delivery is that **No users will be excluded**. _(nullable)_ |
| AUDIENCE_INCLUDE | array<`Pinterest.Lib.IntegerFormatType`> |  | Targeted customer list IDs. For example: ["2542620905473"]. Audience lists need to have at least 100 people with Pinterest accounts in them Audience lists need to have at least 100 people with Pinterest accounts in them. If the AUDIENCE_INCLUDE field is missing, the default behavior in terms of ad delivery is that **All users will be included**. _(nullable)_ |
| GENDER | array<`TargetingSpecGender`> |  | Targeted genders. Values: ["unknown","male","female"]. If the GENDER field is missing, the default behavior in terms of ad delivery is that **All genders will be targeted**. _(nullable)_ |
| GEO | array<string> |  | Region codes or postal codes to include for targeting.  Region codes represent broader geographical areas. Example: `US-CA` is the region code for California in the United States.  Postal codes represent more granular, specific areas. Postal codes must be prefixed with the ISO-Alpha-2, two-letter country code and a colon. Example: `US:94103` is the postal code for a specific area in San Francisco, California, U.S.A.  For each ad group, use only one of these methods, depending on which fits your targeting needs. Do not use both. For example, either specify a broader region code like `US-CA` or a more granular postal code within that region, such as `US:94103`.  You can specify multiple region codes or postal codes in an array, depending on which method you choose. Examples:  ``` "GEO": ["US-CA", "US-NY"] ```  ``` "GEO": ["US:94103", "US:10001"] ```  For each ad group, specify at least one `GEO` or `LOCATION`.  If you do not specify a `GEO` code, only `LOCATION` values will be targeted (See `LOCATION` parameter in this targeting spec.).  Learn how to [get a current, complete list of codes](/docs/analytics-and-reports/ads-reporting/#get-all-available-codes-and-zones). _(nullable)_ |
| GEO_EXCLUDE | array<string> |  | Region codes or postal codes to exclude from the targeting inclusion area.  See `GEO` parameter in this targeting spec for rules, syntax, and other information. |
| INTEREST | array<string> |  | Array of interest object IDs. If the INTEREST field is missing, the default behavior in terms of ad delivery is that **All interests will be targeted**. |
| LOCALE | array<string> |  | 24 ISO 639-1 two-letter language codes. If the LOCALE field is not included in the request, all languages are targeted. _(nullable)_ |
| LOCATION | array<string> |  | Metropolitan codes and/or ISO-Alpha-2, two-letter country codes to include for targeting.  Precede country code values with the `country_codes` key and metro code values with `metro_codes` key. Example:  ``` "location": {   "country_codes": ["US", "CA"],   "metro_codes": ["501", "602"] } ```  For each ad group, specify at least one `GEO` or `LOCATION` code.  If you do not specify a `LOCATION` code, only `GEO` values will be targeted (See `GEO` parameter in this targeting spec.).  Learn how to [get a current, complete list of codes](/docs/analytics-and-reports/ads-reporting/#get-all-available-codes-and-zones). _(nullable)_ |
| LOCATION_EXCLUDE | array<string> |  | Metropolitan codes and/or ISO-Alpha-2, two-letter country codes to exclude from targeting.  See `LOCATION` parameter in this targeting spec for rules, syntax, and other information. |
| MAXIMUM_AGE | string |  | Maximum age to target (inclusive). Values: "18", "19", ..., "65", "65+". Must be used together with `MINIMUM_AGE`. Cannot be combined with `AGE_BUCKET`. If neither `MINIMUM_AGE`/`MAXIMUM_AGE` nor `AGE_BUCKET` are specified, all ages will be targeted. |
| MINIMUM_AGE | string |  | Minimum age to target (inclusive). Values: "18", "19", ..., "65". Note: 65+ is not allowed for minimum age. Must be used together with `MAXIMUM_AGE`. Cannot be combined with `AGE_BUCKET`. If neither `MINIMUM_AGE`/`MAXIMUM_AGE` nor `AGE_BUCKET` are specified, all ages will be targeted. |
| SHOPPING_RETARGETING | array<`TargetingSpecShoppingRetargeting`> |  | Array of object: lookback_window [Integer]: Number of days ago to start lookback timeframe for dynamic retargeting tag_types [Array of integer]: Event types to target for dynamic retargeting exclusion_window [Integer]: Number of days ago to stop lookback timeframe for dynamic retargeting _(nullable)_ |
| TARGETING_STRATEGY | array<`TargetingStrategy`> |  | _(nullable)_ |

### `NullalbleMatchType`

Keyword match type allowing null

Type: string enum(BROAD, PHRASE, EXACT, EXACT_NEGATIVE, PHRASE_NEGATIVE, BROAD_NEGATIVE, None)

### `ConversionTagV3GoalMetadata`

| Field | Type | Required | Description |
|---|---|---|---|
| attribution_windows | `AttributionWindows` |  |  |
| conversion_event | `ConversionEvent` |  |  |
| conversion_tag_id | string |  |  |
| cpa_goal_value_in_micro_currency | string |  |  |
| is_roas_optimized | boolean |  | Pinterest Performance+ ROAS bidding. When enabled, Pinterest will optimize for conversion value instead of conversion volume. Only supported when `conversion_event` is set to `"CHECKOUT"` and `bid_strategy_type` is set to `"AUTOMATIC_BID"`. This parameter is not enabled for all advertisers. [Learn more](https://developers.pinterest.com/docs/getting-started/using-beta-and-restricted-features/). _(nullable)_ |
| reporting_event | string |  | Event name for custom or standard events mapped to an oCPM model |

### `FrequencyGoalMetadata`

Frequency target can only be between 2 and 20

| Field | Type | Required | Description |
|---|---|---|---|
| frequency | integer |  | _(minimum 2; maximum 20)_ |
| timerange | `FrequencyGoalMetadataTimerange` |  |  |

### `ScrollupGoalMetadata`

| Field | Type | Required | Description |
|---|---|---|---|
| scrollup_goal_value_in_micro_currency | string |  | _(nullable)_ |

### `TargetingSpecShoppingRetargeting`

| Field | Type | Required | Description |
|---|---|---|---|
| exclusion_window | integer |  | Number of days ago to stop lookback timeframe for dynamic retargeting |
| lookback_window | integer |  | Number of days ago to start lookback timeframe for dynamic retargeting |
| tag_types | array<integer> |  | Event types to target for dynamic retargeting |

### `TargetingStrategy`

Type: string enum(CHOOSE_YOUR_OWN, FIND_NEW_CUSTOMERS, RECONNECT_WITH_USERS)

### `AttributionWindows`

| Field | Type | Required | Description |
|---|---|---|---|
| click_window_days | integer |  |  |
| engagement_window_days | integer |  |  |
| install_window_days | integer |  | The number of days to use as the conversion attribution window for an install action. If not specified, defaults to 7 days. Values: 0,1,7,14,30,60. |
| view_window_days | integer |  |  |

### `ConversionEvent`

Type: string enum(APP_INSTALL, ADD_TO_CART, CHECKOUT, LEAD, SIGNUP, APP_INSTALL_CHECKOUT, APP_INSTALL_ADD_TO_CART)

### `FrequencyGoalMetadataTimerange`

Type: string enum(THIRTY_DAY, DAY, SEVEN_DAY, TWENTY_MINUTE, TEN_MINUTE, TWENTY_FOUR_HOUR)

