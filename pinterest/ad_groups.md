# Pinterest API v5: Ad Groups

> Source: Pinterest REST API v5 OpenAPI spec (https://github.com/pinterest/api-description, v5.32.0); docs https://developers.pinterest.com/docs/api/v5/. Base URL: https://api.pinterest.com/v5. Fetched 2026-11-19.

Operations: 13

---

## GET /ad_accounts/{ad_account_id}/ad_groups

**List ad groups**

List ad groups based on provided campaign IDs or ad group IDs.(campaign_ids or ad_group_ids).
**Note:** Provide only campaign_id or ad_group_id. Do not provide both.

Operation ID: `ad_groups/list`

Scopes: pinterest_oauth2: ads:read; client_credentials: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| bookmark | query | string |  | Cursor used to fetch the next page of items |
| page_size | query | integer |  | Maximum number of items to include in a single page. See documentation on [Pagination](/docs/reference/pagination/) for more information. _(default 25; minimum 1; maximum 250)_ |
| order | query | `Pinterest.Lib.PaginationOrder` |  | The order in which to sort the items returned: "ASCENDING" or "DESCENDING" by ID. Note that higher-value IDs are associated with more-recently added items. _(default "ASCENDING")_ |
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |
| campaign_ids | query | array<`CampaignIdType`> |  | List of Campaign Ids to use to filter the results. |
| ad_group_ids | query | array<`Pinterest.Lib.IntegerFormatType`> |  | List of Ad group Ids to retrieve keywords from. This feature is currently in BETA and is not available to all users. |
| entity_statuses | query | array<`EntityStatus`> |  | Entity status _(default ["ACTIVE", "PAUSED"])_ |
| translate_interests_to_names | query | boolean |  | Return interests as text names (if value is true) rather than topic IDs. _(default false)_ |

**Response 200** (`application/json`): object{bookmark: string, items: array<`AdGroup`>}

---

## POST /ad_accounts/{ad_account_id}/ad_groups

**Create ad groups**

Create multiple new ad groups. All ads in a given ad group will have the same budget, bid, run dates, targeting, and placement (search, browse, other).

For more information, [click here](https://help.pinterest.com/en/business/article/campaign-structure).

**Notes:**
- `bid_in_micro_currency` and `budget_in_micro_currency` should be expressed in microcurrency amounts based on the currency field set in the advertiser's profile.

Microcurrency is used to track very small transactions, based on the currency set in the advertiser's profile. A microcurrency unit is 10^(-6) of the standard unit of currency selected in the advertiser's profile.

**Equivalency equations**, using dollars as an example currency:
- $1 = 1,000,000 microdollars
- 1 microdollar = $0.000001

**To convert between currency and microcurrency**, using dollars as an example currency:
- To convert dollars to microdollars, multiply dollars by 1,000,000
- To convert microdollars to dollars, divide microdollars by 1,000,000

- Ad groups belong to ad campaigns. Some types of campaigns (e.g. budget optimization) have limits on the number of ad groups they can hold. If you exceed those limits, you will get an error message.
- Certain organizations with [closed beta](/docs/getting-started/using-beta-and-restricted-features/) access can set `start_time` and `end_time` at the ad group level for campaigns with Campaign Budget Optimization (CBO) objectives: `TRAFFIC`, `AWARENESS`, `WEB_CONVERSIONS`, and `CATALOG_SALES`. All other organizations can set these scheduling parameters for non-CBO campaigns only.
- If the parent ad campaign has start and end times set, ad group start and end times must occur within the parent campaign schedule.

Operation ID: `ad_groups/create`

Scopes: pinterest_oauth2: ads:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `AdGroupBatchCreateRequest`

**Response 200** (`application/json`): object{items: array<object{data: `AdGroupBatchResponseData`, exceptions: array<`Pinterest.Lib.BatchItemException`>}>}

---

## PATCH /ad_accounts/{ad_account_id}/ad_groups

**Update ad groups**

Update multiple existing ad groups.

Operation ID: `ad_groups/update`

Scopes: pinterest_oauth2: ads:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `AdGroupBatchUpdateRequest`

**Response 200** (`application/json`): object{items: array<object{data: `AdGroupBatchResponseData`, exceptions: array<`Pinterest.Lib.BatchItemException`>}>}

---

## GET /ad_accounts/{ad_account_id}/ad_groups/analytics

**Get ad group analytics**

Get analytics for the specified ad groups in the specified `ad_account_id`, filtered by the specified options.

- The token's user_account must either be the Owner of the specified ad account, or have one of the necessary roles granted to them via [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts): Admin, Analyst, Campaign Manager.
- If granularity is not HOUR, you can pull data from up to 90 days before the current date in UTC time, with a maximum time range of 90 days.
- If granularity is HOUR, you can pull data from up to 8 days before the current date in UTC time, with a maximum time range of 3 days.

Operation ID: `ad_groups/analytics`

Scopes: pinterest_oauth2: ads:read; client_credentials: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| start_date | query | string (date) | yes | Metric report start date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days back from today. |
| end_date | query | string (date) | yes | Metric report end date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days past start_date. |
| ad_group_ids | query | array<`AdGroupIdType`> | yes | List of Ad group Ids to use to filter the results. |
| columns | query | array<`ReportingColumnSync`> | yes | Columns to retrieve, encoded as a comma-separated string. **NOTE**: Any metrics defined as MICRO_DOLLARS returns a value based on the advertiser profile's currency field. For USD, ($1/1,000,000, or $0.000001 - one one-ten-thousandth of a cent). it's microdollars. Otherwise, it's in microunits of the advertiser's currency.  For example, if the advertiser's currency is GBP (British pound sterling), all MICRO_DOLLARS fields will be in GBP microunits (1/1,000,000 British pound).  If a column has no value, it may not be returned. |
| granularity | query | `Granularity` | yes | TOTAL - metrics are aggregated over the specified date range.    DAY - metrics are broken down daily.    HOUR - metrics are broken down hourly.    WEEK - metrics are broken down weekly.    MONTH - metrics are broken down monthly |
| click_window_days | query | number enum(0, 1, 7, 14, 30, 60) |  | Number of days to use as the conversion attribution window for a pin click action. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to `30` days. _(default 30)_ |
| engagement_window_days | query | number enum(0, 1, 7, 14, 30, 60) |  | Number of days to use as the conversion attribution window for an engagement action. Engagements include saves, closeups, link clicks, and carousel card swipes. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to `30` days. **Note:** This parameter no longer returns new data. However, you can still access historic data through **Sept 30, 2027**. _(default 30)_ |
| view_window_days | query | number enum(0, 1, 7, 14, 30, 60) |  | Number of days to use as the conversion attribution window for a view action. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to `1` day. _(default 1)_ |
| conversion_report_time | query | string enum(TIME_OF_AD_ACTION, TIME_OF_CONVERSION) |  | The date by which the conversion metrics returned from this endpoint will be reported. There are two dates associated with a conversion event: the date that the user interacted with the ad, and the date that the user completed a conversion event. _(default "TIME_OF_AD_ACTION")_ |
| aggregate_report_rows | query | boolean |  | Determines if report rows should be aggregated across all requested entities. This feature is currently in BETA and is not available to all users. _(default false)_ |
| reporting_timezone | query | `ReportingTimeZone` |  | Specify the timezone to be applied for the reporting. Defaults to PINTEREST_TIME_ZONE (UTC). AD_ACCOUNT_TIME_ZONE requires the ad account to have a time_zone configured; otherwise the request fails with a 400. |
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Response 200** (`application/json`): array<`AdGroupsAnalyticsMetrics`>

---

## POST /ad_accounts/{ad_account_id}/ad_groups/audience_sizing

**Get audience sizing**

Get potential audience size for an ad group with given targeting criteria.
Potential audience size estimates the number of people you may be able to reach per month with your campaign.
It is based on historical advertising data and the targeting criteria you select.
It does not guarantee results or take into account factors such as bid, budget, schedule, seasonality or product experiments.

Operation ID: `ad_groups/audience_sizing`

Scopes: pinterest_oauth2: ads:read; client_credentials: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `AdGroupAudienceSizingCreate`

**Response 200** (`application/json`): `AdGroupAudienceSizing`

**Response 201** (`application/json`): `AdGroupAudienceSizing`

---

## GET /ad_accounts/{ad_account_id}/ad_groups/targeting_analytics

**Get targeting analytics for ad groups**

Get targeting analytics for one or more ad groups. For the requested ad group(s) and metrics, the response will include the requested metric information (e.g. SPEND_IN_DOLLAR) for the requested target type (e.g. "age_bucket") for applicable values (e.g. "45-49").

- The token's user_account must either be the Owner of the specified ad account, or have one of the necessary roles granted to them via [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts): Admin, Analyst, Campaign Manager.
- If granularity is not HOUR, you can pull data from up to 90 days before the current date in UTC time, with a maximum time range of 90 days.
- If granularity is HOUR, you can pull data from up to 8 days before the current date in UTC time, with a maximum time range of 3 days.

Operation ID: `ad_groups_targeting_analytics/get`

Scopes: pinterest_oauth2: ads:read; client_credentials: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |
| ad_group_ids | query | array<`AdGroupIdType`> | yes | List of Ad group Ids to use to filter the results. |
| start_date | query | string (date) | yes | Metric report start date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days back from today. |
| end_date | query | string (date) | yes | Metric report end date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days past start_date. |
| targeting_types | query | array<`AdsAnalyticsAdGroupTargetingType`> | yes | Targeting type breakdowns for the report. The reporting per targeting type is independent from each other. ["AGE_BUCKET_AND_GENDER", "CREATIVE_ENHANCEMENTS"] are in BETA and not yet available to all users. |
| columns | query | array<`ReportingColumnSync`> | yes | Columns to retrieve, encoded as a comma-separated string. **NOTE**: Any metrics defined as MICRO_DOLLARS returns a value based on the advertiser profile's currency field. For USD, ($1/1,000,000, or $0.000001 - one one-ten-thousandth of a cent). it's microdollars. Otherwise, it's in microunits of the advertiser's currency.  For example, if the advertiser's currency is GBP (British pound sterling), all MICRO_DOLLARS fields will be in GBP microunits (1/1,000,000 British pound).  If a column has no value, it may not be returned. |
| granularity | query | `Granularity` | yes | TOTAL - metrics are aggregated over the specified date range.    DAY - metrics are broken down daily.    HOUR - metrics are broken down hourly.    WEEK - metrics are broken down weekly.    MONTH - metrics are broken down monthly |
| click_window_days | query | number enum(0, 1, 7, 14, 30, 60) |  | Number of days to use as the conversion attribution window for a pin click action. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to `30` days. _(default 30)_ |
| engagement_window_days | query | number enum(0, 1, 7, 14, 30, 60) |  | Number of days to use as the conversion attribution window for an engagement action. Engagements include saves, closeups, link clicks, and carousel card swipes. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to `30` days. **Note:** This parameter no longer returns new data. However, you can still access historic data through **Sept 30, 2027**. _(default 30)_ |
| view_window_days | query | number enum(0, 1, 7, 14, 30, 60) |  | Number of days to use as the conversion attribution window for a view action. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to `1` day. _(default 1)_ |
| conversion_report_time | query | string enum(TIME_OF_AD_ACTION, TIME_OF_CONVERSION) |  | The date by which the conversion metrics returned from this endpoint will be reported. There are two dates associated with a conversion event: the date that the user interacted with the ad, and the date that the user completed a conversion event. _(default "TIME_OF_AD_ACTION")_ |
| attribution_types | query | array<`ConversionReportAttributionType`> |  | List of types of attribution for the conversion report |
| reporting_timezone | query | `ReportingTimeZone` |  | Specify the timezone to be applied for the reporting. Defaults to PINTEREST_TIME_ZONE (UTC). AD_ACCOUNT_TIME_ZONE requires the ad account to have a time_zone configured; otherwise the request fails with a 400. |
| sort_columns | query | array<string> |  | Sort Columns. |
| sort_ascending | query | boolean |  | Sort ascending. |

**Response 200** (`application/json`): `MetricsResponse`

---

## GET /ad_accounts/{ad_account_id}/ad_groups/{ad_group_id}

**Get ad group**

Get a specific ad group given the ad group ID.

Operation ID: `ad_groups/get`

Scopes: pinterest_oauth2: ads:read; client_credentials: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_group_id | path | string | yes | Ad group ID. _(maxLength 18)_ |
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Response 200** (`application/json`): `AdGroup`

---

## POST /ad_accounts/{ad_account_id}/ad_groups/{ad_group_id}/dynamic_titles

**Process dynamic titles CSV**

Validate and process the uploaded dynamic titles review CSV. Returns validation errors if the CSV is invalid.

Operation ID: `ad_groups_dynamic_titles/process_csv`

Scopes: pinterest_oauth2: ads:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |
| ad_group_id | path | string | yes | Ad group ID. _(maxLength 18)_ |

**Request body** (`application/json`, required): `DynamicTitlesProcessCSVCreate`

**Response 200** (`application/json`): `DynamicTitlesProcessCSV`

**Response 201** (`application/json`): `DynamicTitlesProcessCSV`

---

## GET /ad_accounts/{ad_account_id}/ad_groups/{ad_group_id}/dynamic_titles/csv

**Get dynamic titles CSV download URL**

Get a presigned S3 download URL for the dynamic titles review CSV. Returns 400 if titles have not been generated yet.

Operation ID: `ad_groups_dynamic_titles/download_csv`

Scopes: pinterest_oauth2: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |
| ad_group_id | path | string | yes | Ad group ID. _(maxLength 18)_ |

**Response 200** (`application/json`): `DynamicTitlesDownloadCSV`

---

## GET /ad_accounts/{ad_account_id}/ad_groups/{ad_group_id}/dynamic_titles/status

**Get dynamic titles status**

Get dynamic titles generation status for an ad group, including whether titles are ready for review and counts of generated and reviewed titles.

Operation ID: `ad_groups_dynamic_titles/get_status`

Scopes: pinterest_oauth2: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |
| ad_group_id | path | string | yes | Ad group ID. _(maxLength 18)_ |

**Response 200** (`application/json`): `DynamicTitlesGetStatus`

---

## GET /ad_accounts/{ad_account_id}/ad_groups/{ad_group_id}/dynamic_titles/uploads

**Get dynamic titles upload URL**

Get a presigned S3 upload URL for the dynamic titles review CSV and a request_id for submission.

Operation ID: `ad_groups_dynamic_titles/get_upload_url`

Scopes: pinterest_oauth2: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |
| ad_group_id | path | string | yes | Ad group ID. _(maxLength 18)_ |

**Response 200** (`application/json`): `DynamicTitlesUploadURL`

---

## POST /ad_accounts/{ad_account_id}/bid_floor

**Get bid floors**

List bid floors for your campaign configuration. Bid floors are given in microcurrency values based on the currency in the bid floor specification.

Microcurrency is used to track very small transactions, based on the currency set in the advertiser's profile.

A microcurrency unit is 10^(-6) of the standard unit of currency selected in the advertiser's profile.

**Equivalency equations**, using dollars as an example currency:

* $1 = 1,000,000 microdollars
* 1 microdollar = $0.000001

**To convert between currency and microcurrency**, using dollars as an example currency:

* To convert dollars to microdollars, mutiply dollars by 1,000,000
* To convert microdollars to dollars, divide microdollars by 1,000,000

For more on bid floors see [Set your bid](https://help.pinterest.com/en/business/article/set-your-bid).

Operation ID: `ad_groups_bid_floor/get`

Scopes: pinterest_oauth2: ads:read; client_credentials: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `BidFloorCreate`

**Response 200** (`application/json`): `BidFloor`

**Response 201** (`application/json`): `BidFloor`

---

## GET /ad_accounts/{ad_account_id}/promotion_applied_entities

**List of ad groups using promotions IDs.**

Get a list of ad groups that are associated with those promotion ids

Operation ID: `get_ad_groups_by_promotion_ids/list`

Scopes: pinterest_oauth2: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| bookmark | query | string |  | Cursor used to fetch the next page of items |
| page_size | query | integer |  | Maximum number of items to include in a single page. See documentation on [Pagination](/docs/reference/pagination/) for more information. _(default 25; minimum 1; maximum 250)_ |
| order | query | `Pinterest.Lib.PaginationOrder` |  | The order in which to sort the items returned: "ASCENDING" or "DESCENDING" by ID. Note that higher-value IDs are associated with more-recently added items. _(default "ASCENDING")_ |
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |
| promotion_ids | query | array<string> | yes | List of Promotion IDs to use to filter the results. |

**Response 200** (`application/json`): object{bookmark: string, items: array<`AdGroup`>}

---

## Schemas

### `AdGroup`

| Field | Type | Required | Description |
|---|---|---|---|
| auto_targeting_enabled | boolean |  | Enable auto-targeting for ad group. Default value is True. Also known as ["Performance+ targeting"](https://help.pinterest.com/en/business/article/performance-plus-targeting). _(nullable)_ |
| bid_multiplier | number |  | [Open beta](https://help.pinterest.com/en/business/article/beta-features) Bid multiplier for ad group. This value is a double between 0.1 and 10.0. Enter 0 to remove the bid multiplier. - Not currently supported for [Performance+ campaigns](https://help.pinterest.com/en/business/article/performance-plus-campaigns). _(nullable; minimum 0; maximum 10)_ |
| budget_type | `BudgetType` |  |  |
| pacing_delivery_type | `PacingDeliveryType` |  |  |

### `AdGroupAudienceSizing`

| Field | Type | Required | Description |
|---|---|---|---|
| audience_size_lower_bound | number |  | The lower confidence bound of the estimated potential audience size. "Potential audience size" estimates the number of people you may be able to reach per month with your campaign. It is based on historical advertising data and the targeting criteria you select. It does not guarantee results or take into account factors such as bid, budget, schedule, seasonality or product experiments. _(read-only)_ |
| audience_size_upper_bound | number |  | The upper confidence bound of the estimated potential audience size. "Potential audience size" estimates the number of people you may be able to reach per month with your campaign. It is based on historical advertising data and the targeting criteria you select. It does not guarantee results or take into account factors such as bid, budget, schedule, seasonality or product experiments. _(read-only)_ |

### `AdGroupAudienceSizingCreate`

Resource create operation model.

| Field | Type | Required | Description |
|---|---|---|---|
| auto_targeting_enabled | boolean |  | Enable auto-targeting for ad group. Default value is True. Also known as [Pinterest Performance+ targeting](https://help.pinterest.com/en/business/article/performance-plus-targeting). _(default true)_ |
| creative_types | array<`AdGroupAudienceSizingCreativeTypes`> |  | Pin creative types filter. **Note:** SHOP_THE_PIN has been deprecated. Please use COLLECTION instead. _(nullable)_ |
| intended_promotion_type | `IntendedPromotionType` |  | The creative source for ads. Required when objective_type is SALES or CONSIDERATION. |
| keywords | array<`AdGroupAudienceSizingKeyword`> |  | Array of keyword objects. If the keywords field is missing, all keywords will be targeted. _(nullable)_ |
| objective_type | `DeliveryEstimateObjectiveType` |  | Campaign objective type. Affects how audience size is calculated. |
| placement_group | `AdgroupPlacementGroupType` |  | [Placement group](/docs/redoc/#section/Placement-group). _(default "ALL")_ |
| product_group_ids | array<`AdGroupAudienceSizingProductGroupId`> |  | Targeted product group IDs. **Note:** This can only be combined with shopping/catalog sales campaigns. For more information, [click here](https://help.pinterest.com/en/business/article/shopping-ads#section-14571). SHOPPING_RETARGETING must be included in targeting_spec object or this field will be ignored. _(nullable)_ |
| targeting_spec | `PlanningTargetingSpec` |  |  |

### `AdGroupBatchCreateRequest`

Type: array<`AdGroupCreateCreate`>

### `AdGroupBatchResponseData`

Ad group data in a batch write response.

| Field | Type | Required | Description |
|---|---|---|---|
| ad_account_id | string |  | Advertiser ID. _(read-only)_ |
| auto_targeting_enabled | boolean |  | Enable auto-targeting for ad group. Default value is True. Also known as ["Performance+ targeting"](https://help.pinterest.com/en/business/article/performance-plus-targeting). _(nullable)_ |
| base_ad_group_id | string |  | The ad group ID of the Performance+ base ad group that this ad group belongs to. Read-only output; set by Pinterest when a Performance+ managed set is created. Setting this field on a request has no effect. _(read-only)_ |
| bid_in_micro_currency | integer |  | Bid price in micro currency. This field is **REQUIRED** for the following campaign objective_type/billable_event combinations: AWARENESS/IMPRESSION, CONSIDERATION/CLICKTHROUGH, CATALOG_SALES/CLICKTHROUGH, VIDEO_VIEW/VIDEO_V_50_MRC. _(nullable)_ |
| bid_multiplier | number |  | [Open beta](https://help.pinterest.com/en/business/article/beta-features) Bid multiplier for ad group. This value is a double between 0.1 and 10.0. Enter 0 to remove the bid multiplier. - Not currently supported for [Performance+ campaigns](https://help.pinterest.com/en/business/article/performance-plus-campaigns). _(nullable; minimum 0; maximum 10)_ |
| bid_strategy_type | `BidStrategyType` |  |  |
| billable_event | `ActionType` | yes |  |
| budget_in_micro_currency | integer |  | Budget in micro currency. This field is **REQUIRED** for non-CBO (campaign budget optimization) campaigns.  A CBO campaign automatically generates ad group budgets from its campaign budget to maximize campaign outcome. A CBO campaign is limited to 70 or less ad groups. _(nullable)_ |
| budget_type | `BudgetType` |  |  |
| campaign_id | string | yes | Campaign ID of the ad group. |
| conversion_learning_mode_type | `ConversionLearningModeType` | yes | oCPM learn mode _(read-only)_ |
| created_time | integer | yes | Ad group creation time. Unix timestamp in seconds. _(read-only)_ |
| customer_segment_id | `Pinterest.Lib.IntegerFormatType` |  | Customer segment ID applied to the ad group. We currently only support 1 customer segment per ad group. To use customer segments, do not set the `targeting_template_ids` field as well as the `AUDIENCE_INCLUDE` field of the `targeting_spec`. To clear the customer segment ID, set this field to '0'. |
| dca_assets | object |  | [DCA] The Dynamic creative assets to use for DCA. Dynamic Creative Assembly (DCA) accepts basic creative assets of an ad (image, video, title, call to action, logo etc). Then it automatically generates optimized ad combinations based on these assets. _(read-only)_ |
| enable_offsite_placement | boolean |  | Whether offsite ad delivery (audience extension) is enabled for this ad group. |
| end_time | integer |  | Timestamp in Unix format for scheduling when ads in the ad group stop appearing. If not specified, ads run indefinitely unless you update the ad group by changing their status to `paused`. Cannot occur after `end_time` for parent campaign (if specified). Learn about [scheduling ads](https://help.pinterest.com/en/business/article/ads-manager-schedule-ads).  For certain organizations ([Closed beta](https://help.pinterest.com/en/business/article/beta-features)): Supported for campaigns with Campaign Budget Optimization (CBO).  For all organizations: Supported for campaigns without CBO. _(nullable)_ |
| ext_features | `AdgroupTrackingFeatures` |  |  |
| feed_profile_id | string |  | Feed Profile ID associated to the adgroup. |
| id | string | yes | Ad group ID. A request made with `validate_only` returns a non-positive placeholder ID instead, since no ad group is persisted. _(maxLength 20)_ |
| is_creative_optimization | boolean |  | Enable creative optimization for the ad group, default value is FALSE. When enabled, you allow Pinterest to automatically turn your product Pins into ads in different formats (collections and shopping) and deliver those ads to users at scale. _(nullable)_ |
| is_local_inventory | boolean |  | Indicates whether the ad group should use the local inventory. |
| lifetime_frequency_cap | integer |  | Set a limit to the number of times a promoted pin from this campaign can be impressed by a pinner within the past rolling 30 days. Only available for CPM (cost per mille (1000 impressions))  ad groups. A CPM ad group has an IMPRESSION [billable_event](https://help.pinterest.com/en/business/article/billable-events) value. This field **REQUIRES** the `end_time` field. |
| local_ad_radius_in_miles | number |  | The targeting radius of local ads in miles. Preferred over local_inventory_radius_in_miles. |
| local_inventory_radius_in_miles | number |  | Deprecated: use `local_ad_radius_in_miles` instead. Legacy alias kept for compatibility. Same Pepsi field as `local_ad_radius_in_miles`. _(DEPRECATED)_ |
| name | string | yes | Ad group name. |
| optimization_goal_metadata | `NullableOptimizationGoalMetadata` |  | Optimization goals for objective-based performance campaigns. **REQUIRED** when campaign's `objective_type` is set to `"WEB_CONVERSION"`. _(nullable)_ |
| overlay_application_level | `OverlayApplicationLevel` |  | How creative overlays apply to the ad group's products:  - `NONE`, or not set: no overlays. - `AD_GROUP`: the ad group's overlay applies to every eligible product based on aspect ratio. - `ITEM`: the overlay comes from the product's matching overlay assignment rule with an active overlay or, if no rule matches, from the `overlay_id` attribute of its catalog item. `overlay_ids` must be empty for item level overlays.  If you omit this field when updating an ad group, the current value is kept.  Creative overlays are supported only in catalog campaigns, and appear only on standard shopping ads and Performance+ creative optimization collections. |
| overlay_ids | array<`Pinterest.Lib.IntegerFormatType`> |  | IDs of the creative overlays applied at the ad group level. For ad group level overlays, an ad group can have at most one overlay, and `overlay_application_level` must be `AD_GROUP`. The overlay needs to belong to the ad account owner.  To remove the overlay from an existing ad group, send an empty list and set `overlay_application_level` to `NONE`. If you omit this field, the current overlay is kept. _(nullable)_ |
| overlay_smart_adjust_settings | `OverlaySmartAdjustSettings` |  | Smart adjust settings for creative overlay. Currently, `smart_resize_enabled` and `smart_layout_enabled` must be both on or both off. If not set, smart adjust is off. If you omit this field when updating an ad group, the current settings are kept. _(nullable)_ |
| pacing_delivery_type | `PacingDeliveryType` |  |  |
| performance_plus_campaign_settings | `PerformancePlusCampaignSettings` |  | Pinterest Performance+ campaign settings. _(nullable)_ |
| performance_plus_value_strategies | array<`PerformancePlusValueStrategy`> |  | Performance+ value strategies to apply to this ad group. Currently only a single value strategy is supported at a time. |
| placement_group | `PlacementGroupType` |  | [Placement group](https://help.pinterest.com/en/business/article/placement-groups). |
| placement_traffic_type | `PlacementTrafficType` |  | A targeting option that enables advertisers to choose whether to run ads in fullscreen feed, two column feed, or both _(nullable)_ |
| promotion_application_level | `PromotionApplicationLevel` |  | Specify if the promotion is applied at ad group or item level _(nullable)_ |
| promotion_id | string |  | Promotion ID. To clear this field, set to null. _(nullable; default "0")_ |
| promotion_ids | array<string> |  | Promotion IDs list. To clear this field, set to an empty array []. |
| start_time | integer |  | Timestamp in Unix format for scheduling when ads in the ad group start to appear. If not specified, ads appear during parent campaign's `start_time`. Cannot precede `start_time` for parent campaign (if specified). Learn about [scheduling ads](/docs/api-features/managing-ads/#step-2-create-an-ad-group). For certain organizations ([Closed beta](/docs/getting-started/using-beta-and-restricted-features/)): Supported for campaigns with Campaign Budget Optimization (CBO). For all organizations: Supported for campaigns without CBO. _(nullable)_ |
| status | `EntityStatus` |  | Ad group/entity status. |
| summary_status | `SummaryStatus` | yes | _(read-only)_ |
| targeting_spec | `TargetingSpecOptimal` |  |  |
| targeting_template_ids | array<`Pinterest.Lib.IntegerFormatType`> |  | Targeting template IDs applied to the ad group. We currently only support 1 targeting template per ad group. To use targeting templates, do not set any other targeting fields: targeting_spec, tracking_urls, auto_targeting_enabled, placement_group. To clear all targeting template IDs, set this field to ['0']. _(nullable)_ |
| tracking_urls | `AdGroupTrackingURLs` |  |  |
| type | string | yes | Always "adgroup". _(read-only; default "adgroup")_ |
| updated_time | integer | yes | Ad group last update time. Unix timestamp in seconds. _(read-only)_ |
| use_performance_plus_dynamic_retargeting | boolean |  | Whether this Performance+ ad group uses Performance+ dynamic retargeting. Defaults to true; set to false to opt out of dynamic retargeting duplication. |

### `AdGroupBatchUpdateRequest`

Type: array<`AdGroupUpdateBatchUpdate`>

### `AdGroupIdType`

Type: string

### `AdGroupsAnalyticsMetrics`

| Field | Type | Required | Description |
|---|---|---|---|
| AD_GROUP_ID | string |  | The ID of the ad group that this metrics belongs to. Returned as long as aggregate_report_rows is not true. |
| DATE | string (date) |  | Current metrics date. Only returned when granularity is a time-based value (`DAY`, `HOUR`, `WEEK`, `MONTH`) |

### `AdsAnalyticsAdGroupTargetingType`

Reporting targeting type for ad groups

Type: string enum(KEYWORD, APPTYPE, GENDER, LOCATION, PLACEMENT, COUNTRY, TARGETED_INTEREST, PINNER_INTEREST, AUDIENCE_INCLUDE, GEO, AGE_BUCKET, REGION, AGE_BUCKET_AND_GENDER, CREATIVE_ENHANCEMENTS)

### `BidFloor`

Bid floor request and response model.

| Field | Type | Required | Description |
|---|---|---|---|
| bid_floors | array<integer> |  | A list of bid floors in micro currency. For example, [100000, 200000] _(read-only)_ |
| type | string |  | Always the string 'bidfloor'. _(read-only; default "bidfloor")_ |

### `BidFloorCreate`

Resource create operation model.

| Field | Type | Required | Description |
|---|---|---|---|
| bid_floor_specs | array<`BidFloorSpec`> | yes | List of bid floor specifications. |
| targeting_spec | `TargetingSpecOptimal` |  | Ad group targeting specification defining the ad group target audience. |

### `CampaignIdType`

Type: string

### `ConversionReportAttributionType`

Attribution type. Refers to the Pinterest Tag endpoints

Type: string enum(INDIVIDUAL, HOUSEHOLD)

### `DynamicTitlesDownloadCSV`

| Field | Type | Required | Description |
|---|---|---|---|
| download_url | string |  | Pre-signed S3 URL to download the CSV file. |

### `DynamicTitlesGetStatus`

| Field | Type | Required | Description |
|---|---|---|---|
| generated_count | integer |  | The count of generated titles. |
| is_ready | boolean |  | Whether dynamic titles have been generated and are ready to be reviewed for the ad group. |
| reviewed_count | integer |  | The count of advertiser reviewed titles. |

### `DynamicTitlesProcessCSV`

| Field | Type | Required | Description |
|---|---|---|---|
| errors | array<`DynamicTitlesProcessCSVError`> |  | List of validation errors. Empty on success. _(read-only)_ |
| status | string |  | Processing status. Present on success. _(read-only)_ |

### `DynamicTitlesProcessCSVCreate`

Resource create operation model.

| Field | Type | Required | Description |
|---|---|---|---|
| request_id | string | yes | The request_id returned from the GET uploads endpoint. |

### `DynamicTitlesUploadURL`

| Field | Type | Required | Description |
|---|---|---|---|
| existing_filename | string |  | If present, a reviewed CSV was previously submitted for this ad group. Uploading a new file will replace it. Absent when no prior submission exists. |
| request_id | string | yes | Unique identifier for this upload session. Must be passed to the process endpoint. |
| upload_url | string | yes | Pre-signed S3 PUT URL to upload the reviewed CSV file. |

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

### `Pinterest.Lib.BatchItemException`

Exception details for a batch operation item.

| Field | Type | Required | Description |
|---|---|---|---|
| code | integer |  |  |
| message | string | yes |  |

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

### `AdGroupBase`

| Field | Type | Required | Description |
|---|---|---|---|
| ad_account_id | string |  | Advertiser ID. _(read-only)_ |
| base_ad_group_id | string |  | The ad group ID of the Performance+ base ad group that this ad group belongs to. Read-only output; set by Pinterest when a Performance+ managed set is created. Setting this field on a request has no effect. _(read-only)_ |
| bid_in_micro_currency | integer |  | Bid price in micro currency. This field is **REQUIRED** for the following campaign objective_type/billable_event combinations: AWARENESS/IMPRESSION, CONSIDERATION/CLICKTHROUGH, CATALOG_SALES/CLICKTHROUGH, VIDEO_VIEW/VIDEO_V_50_MRC. _(nullable)_ |
| bid_strategy_type | `BidStrategyType` |  |  |
| billable_event | `ActionType` | yes |  |
| budget_in_micro_currency | integer |  | Budget in micro currency. This field is **REQUIRED** for non-CBO (campaign budget optimization) campaigns.  A CBO campaign automatically generates ad group budgets from its campaign budget to maximize campaign outcome. A CBO campaign is limited to 70 or less ad groups. _(nullable)_ |
| campaign_id | string | yes | Campaign ID of the ad group. |
| conversion_learning_mode_type | `ConversionLearningModeType` | yes | oCPM learn mode _(read-only)_ |
| created_time | integer | yes | Ad group creation time. Unix timestamp in seconds. _(read-only)_ |
| customer_segment_id | `Pinterest.Lib.IntegerFormatType` |  | Customer segment ID applied to the ad group. We currently only support 1 customer segment per ad group. To use customer segments, do not set the `targeting_template_ids` field as well as the `AUDIENCE_INCLUDE` field of the `targeting_spec`. To clear the customer segment ID, set this field to '0'. |
| dca_assets | object |  | [DCA] The Dynamic creative assets to use for DCA. Dynamic Creative Assembly (DCA) accepts basic creative assets of an ad (image, video, title, call to action, logo etc). Then it automatically generates optimized ad combinations based on these assets. _(read-only)_ |
| enable_offsite_placement | boolean |  | Whether offsite ad delivery (audience extension) is enabled for this ad group. |
| end_time | integer |  | Timestamp in Unix format for scheduling when ads in the ad group stop appearing. If not specified, ads run indefinitely unless you update the ad group by changing their status to `paused`. Cannot occur after `end_time` for parent campaign (if specified). Learn about [scheduling ads](https://help.pinterest.com/en/business/article/ads-manager-schedule-ads).  For certain organizations ([Closed beta](https://help.pinterest.com/en/business/article/beta-features)): Supported for campaigns with Campaign Budget Optimization (CBO).  For all organizations: Supported for campaigns without CBO. _(nullable)_ |
| ext_features | `AdgroupTrackingFeatures` |  |  |
| feed_profile_id | string |  | Feed Profile ID associated to the adgroup. |
| id | string | yes | Ad group ID. _(maxLength 18)_ |
| is_creative_optimization | boolean |  | Enable creative optimization for the ad group, default value is FALSE. When enabled, you allow Pinterest to automatically turn your product Pins into ads in different formats (collections and shopping) and deliver those ads to users at scale. _(nullable)_ |
| is_local_inventory | boolean |  | Indicates whether the ad group should use the local inventory. |
| lifetime_frequency_cap | integer |  | Set a limit to the number of times a promoted pin from this campaign can be impressed by a pinner within the past rolling 30 days. Only available for CPM (cost per mille (1000 impressions))  ad groups. A CPM ad group has an IMPRESSION [billable_event](https://help.pinterest.com/en/business/article/billable-events) value. This field **REQUIRES** the `end_time` field. |
| local_ad_radius_in_miles | number |  | The targeting radius of local ads in miles. Preferred over local_inventory_radius_in_miles. |
| local_inventory_radius_in_miles | number |  | Deprecated: use `local_ad_radius_in_miles` instead. Legacy alias kept for compatibility. Same Pepsi field as `local_ad_radius_in_miles`. _(DEPRECATED)_ |
| name | string | yes | Ad group name. |
| optimization_goal_metadata | `NullableOptimizationGoalMetadata` |  | Optimization goals for objective-based performance campaigns. **REQUIRED** when campaign's `objective_type` is set to `"WEB_CONVERSION"`. _(nullable)_ |
| overlay_application_level | `OverlayApplicationLevel` |  | How creative overlays apply to the ad group's products:  - `NONE`, or not set: no overlays. - `AD_GROUP`: the ad group's overlay applies to every eligible product based on aspect ratio. - `ITEM`: the overlay comes from the product's matching overlay assignment rule with an active overlay or, if no rule matches, from the `overlay_id` attribute of its catalog item. `overlay_ids` must be empty for item level overlays.  If you omit this field when updating an ad group, the current value is kept.  Creative overlays are supported only in catalog campaigns, and appear only on standard shopping ads and Performance+ creative optimization collections. |
| overlay_ids | array<`Pinterest.Lib.IntegerFormatType`> |  | IDs of the creative overlays applied at the ad group level. For ad group level overlays, an ad group can have at most one overlay, and `overlay_application_level` must be `AD_GROUP`. The overlay needs to belong to the ad account owner.  To remove the overlay from an existing ad group, send an empty list and set `overlay_application_level` to `NONE`. If you omit this field, the current overlay is kept. _(nullable)_ |
| overlay_smart_adjust_settings | `OverlaySmartAdjustSettings` |  | Smart adjust settings for creative overlay. Currently, `smart_resize_enabled` and `smart_layout_enabled` must be both on or both off. If not set, smart adjust is off. If you omit this field when updating an ad group, the current settings are kept. _(nullable)_ |
| performance_plus_campaign_settings | `PerformancePlusCampaignSettings` |  | Pinterest Performance+ campaign settings. _(nullable)_ |
| performance_plus_value_strategies | array<`PerformancePlusValueStrategy`> |  | Performance+ value strategies to apply to this ad group. Currently only a single value strategy is supported at a time. |
| placement_group | `PlacementGroupType` |  | [Placement group](https://help.pinterest.com/en/business/article/placement-groups). |
| placement_traffic_type | `PlacementTrafficType` |  | A targeting option that enables advertisers to choose whether to run ads in fullscreen feed, two column feed, or both _(nullable)_ |
| promotion_application_level | `PromotionApplicationLevel` |  | Specify if the promotion is applied at ad group or item level _(nullable)_ |
| promotion_id | string |  | Promotion ID. To clear this field, set to null. _(nullable; default "0")_ |
| promotion_ids | array<string> |  | Promotion IDs list. To clear this field, set to an empty array []. |
| start_time | integer |  | Timestamp in Unix format for scheduling when ads in the ad group start to appear. If not specified, ads appear during parent campaign's `start_time`. Cannot precede `start_time` for parent campaign (if specified). Learn about [scheduling ads](/docs/api-features/managing-ads/#step-2-create-an-ad-group). For certain organizations ([Closed beta](/docs/getting-started/using-beta-and-restricted-features/)): Supported for campaigns with Campaign Budget Optimization (CBO). For all organizations: Supported for campaigns without CBO. _(nullable)_ |
| status | `EntityStatus` |  | Ad group/entity status. |
| summary_status | `SummaryStatus` | yes | _(read-only)_ |
| targeting_spec | `TargetingSpecOptimal` |  |  |
| targeting_template_ids | array<`Pinterest.Lib.IntegerFormatType`> |  | Targeting template IDs applied to the ad group. We currently only support 1 targeting template per ad group. To use targeting templates, do not set any other targeting fields: targeting_spec, tracking_urls, auto_targeting_enabled, placement_group. To clear all targeting template IDs, set this field to ['0']. _(nullable)_ |
| tracking_urls | `AdGroupTrackingURLs` |  |  |
| type | string | yes | Always "adgroup". _(read-only; default "adgroup")_ |
| updated_time | integer | yes | Ad group last update time. Unix timestamp in seconds. _(read-only)_ |
| use_performance_plus_dynamic_retargeting | boolean |  | Whether this Performance+ ad group uses Performance+ dynamic retargeting. Defaults to true; set to false to opt out of dynamic retargeting duplication. |

### `BudgetType`

Budget type. If DAILY, an ad group's daily spend will not exceed the budget parameter value. If LIFETIME, the end_time parameter is **REQUIRED**, and the ad group spend is spread evenly between the ad group `start_time` and `end_time` range. A CBO campaign automatically generates ad group budgets from its campaign budget to maximize campaign outcome. For CBO campaigns, only "CBO_ADGROUP" is allowed. For WEB_SESSIONS campaigns, only "LIFETIME" is allowed. For update, only draft ad groups may update budget type.

Type: string enum(DAILY, LIFETIME, CBO_ADGROUP)

### `PacingDeliveryType`

Ad group pacing delivery type. With ACCELERATED, an ad group budget is spent as fast as possible. With STANDARD, an ad group budget is spent smoothly over a day. When using CBO, only the STANDARD pacing delivery type is allowed.

Type: string enum(STANDARD, ACCELERATED)

### `AdGroupAudienceSizingCreativeTypes`

Type: string enum(REGULAR, VIDEO, SHOPPING, CAROUSEL, MAX_VIDEO, SHOP_THE_PIN, COLLECTION, IDEA, MAX_WIDTH_REGULAR_COLLECTION, MAX_WIDTH_VIDEO_COLLECTION)

### `AdGroupAudienceSizingKeyword`

| Field | Type | Required | Description |
|---|---|---|---|
| match_type | `MatchType` | yes |  |
| value | string | yes | Keyword value (120 chars max). |

### `AdGroupAudienceSizingProductGroupId`

Type: string

### `AdgroupPlacementGroupType`

Campaign placement group type

Type: string enum(ALL, SEARCH, BROWSE, OTHER)

### `DeliveryEstimateObjectiveType`

Objective type for delivery estimates.

Type: string enum(AWARENESS, CONSIDERATION, CATALOG_SALES, WEB_CONVERSION, SALES, LEADS)

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

### `AdGroupCreateCreate`

Resource create operation model.

| Field | Type | Required | Description |
|---|---|---|---|
| auto_targeting_enabled | boolean |  | Enable auto-targeting for ad group. Default value is True. Also known as ["Performance+ targeting"](https://help.pinterest.com/en/business/article/performance-plus-targeting). |
| bid_in_micro_currency | integer |  | Bid price in micro currency. This field is **REQUIRED** for the following campaign objective_type/billable_event combinations: AWARENESS/IMPRESSION, CONSIDERATION/CLICKTHROUGH, CATALOG_SALES/CLICKTHROUGH, VIDEO_VIEW/VIDEO_V_50_MRC. _(nullable)_ |
| bid_multiplier | number |  | [Open beta](https://help.pinterest.com/en/business/article/beta-features) Bid multiplier for ad group. This value is a double between 0.1 and 10.0. Enter 0 to remove the bid multiplier. - Not currently supported for [Performance+ campaigns](https://help.pinterest.com/en/business/article/performance-plus-campaigns). _(minimum 0; maximum 10)_ |
| bid_strategy_type | `BidStrategyType` |  |  |
| billable_event | `ActionType` | yes |  |
| budget_in_micro_currency | integer |  | Budget in micro currency. This field is **REQUIRED** for non-CBO (campaign budget optimization) campaigns.  A CBO campaign automatically generates ad group budgets from its campaign budget to maximize campaign outcome. A CBO campaign is limited to 70 or less ad groups. _(nullable)_ |
| budget_type | `BudgetType` |  | _(default "DAILY")_ |
| campaign_id | string | yes | Campaign ID of the ad group. |
| ctv_conversion_event | `ConversionTagType` |  | The conversion event a CTV ad group optimizes toward. Required when the parent campaign's `ctv_goal_type` is `CONVERSIONS` or `ROAS`. |
| customer_segment_id | `Pinterest.Lib.IntegerFormatType` |  | Customer segment ID applied to the ad group. We currently only support 1 customer segment per ad group. To use customer segments, do not set the `targeting_template_ids` field as well as the `AUDIENCE_INCLUDE` field of the `targeting_spec`. To clear the customer segment ID, set this field to '0'. |
| enable_offsite_placement | boolean |  | Whether offsite ad delivery (audience extension) is enabled for this ad group. |
| end_time | integer |  | Timestamp in Unix format for scheduling when ads in the ad group stop appearing. If not specified, ads run indefinitely unless you update the ad group by changing their status to `paused`. Cannot occur after `end_time` for parent campaign (if specified). Learn about [scheduling ads](https://help.pinterest.com/en/business/article/ads-manager-schedule-ads).  For certain organizations ([Closed beta](https://help.pinterest.com/en/business/article/beta-features)): Supported for campaigns with Campaign Budget Optimization (CBO).  For all organizations: Supported for campaigns without CBO. _(nullable)_ |
| ext_features | `AdgroupTrackingFeatures` |  |  |
| feed_profile_id | string |  | Feed Profile ID associated to the adgroup. |
| is_creative_optimization | boolean |  | Enable creative optimization for the ad group, default value is FALSE. When enabled, you allow Pinterest to automatically turn your product Pins into ads in different formats (collections and shopping) and deliver those ads to users at scale. _(nullable)_ |
| is_local_inventory | boolean |  | Indicates whether the ad group should use the local inventory. |
| lifetime_frequency_cap | integer |  | Set a limit to the number of times a promoted pin from this campaign can be impressed by a pinner within the past rolling 30 days. Only available for CPM (cost per mille (1000 impressions))  ad groups. A CPM ad group has an IMPRESSION [billable_event](https://help.pinterest.com/en/business/article/billable-events) value. This field **REQUIRES** the `end_time` field. |
| local_ad_radius_in_miles | number |  | The targeting radius of local ads in miles. Preferred over local_inventory_radius_in_miles. |
| local_inventory_radius_in_miles | number |  | Deprecated: use `local_ad_radius_in_miles` instead. Legacy alias kept for compatibility. Same Pepsi field as `local_ad_radius_in_miles`. _(DEPRECATED)_ |
| name | string | yes | Ad group name. |
| optimization_goal_metadata | `NullableOptimizationGoalMetadata` |  | Optimization goals for objective-based performance campaigns. **REQUIRED** when campaign's `objective_type` is set to `"WEB_CONVERSION"`. _(nullable)_ |
| overlay_application_level | `OverlayApplicationLevel` |  | How creative overlays apply to the ad group's products:  - `NONE`, or not set: no overlays. - `AD_GROUP`: the ad group's overlay applies to every eligible product based on aspect ratio. - `ITEM`: the overlay comes from the product's matching overlay assignment rule with an active overlay or, if no rule matches, from the `overlay_id` attribute of its catalog item. `overlay_ids` must be empty for item level overlays.  If you omit this field when updating an ad group, the current value is kept.  Creative overlays are supported only in catalog campaigns, and appear only on standard shopping ads and Performance+ creative optimization collections. |
| overlay_ids | array<`Pinterest.Lib.IntegerFormatType`> |  | IDs of the creative overlays applied at the ad group level. For ad group level overlays, an ad group can have at most one overlay, and `overlay_application_level` must be `AD_GROUP`. The overlay needs to belong to the ad account owner.  To remove the overlay from an existing ad group, send an empty list and set `overlay_application_level` to `NONE`. If you omit this field, the current overlay is kept. _(nullable)_ |
| overlay_smart_adjust_settings | `OverlaySmartAdjustSettings` |  | Smart adjust settings for creative overlay. Currently, `smart_resize_enabled` and `smart_layout_enabled` must be both on or both off. If not set, smart adjust is off. If you omit this field when updating an ad group, the current settings are kept. _(nullable)_ |
| pacing_delivery_type | `PacingDeliveryType` |  | _(default "STANDARD")_ |
| performance_plus_campaign_settings | `PerformancePlusCampaignSettings` |  | Pinterest Performance+ campaign settings. _(nullable)_ |
| performance_plus_value_strategies | array<`PerformancePlusValueStrategy`> |  | Performance+ value strategies to apply to this ad group. Currently only a single value strategy is supported at a time. |
| placement_group | `PlacementGroupType` |  | [Placement group](https://help.pinterest.com/en/business/article/placement-groups). |
| placement_traffic_type | `PlacementTrafficType` |  | A targeting option that enables advertisers to choose whether to run ads in fullscreen feed, two column feed, or both _(nullable)_ |
| promotion_application_level | `PromotionApplicationLevel` |  | Specify if the promotion is applied at ad group or item level _(nullable)_ |
| promotion_id | string |  | Promotion ID. To clear this field, set to null. _(nullable; default "0")_ |
| promotion_ids | array<string> |  | Promotion IDs list. To clear this field, set to an empty array []. |
| start_time | integer |  | Timestamp in Unix format for scheduling when ads in the ad group start to appear. If not specified, ads appear during parent campaign's `start_time`. Cannot precede `start_time` for parent campaign (if specified). Learn about [scheduling ads](/docs/api-features/managing-ads/#step-2-create-an-ad-group). For certain organizations ([Closed beta](/docs/getting-started/using-beta-and-restricted-features/)): Supported for campaigns with Campaign Budget Optimization (CBO). For all organizations: Supported for campaigns without CBO. _(nullable)_ |
| status | `EntityStatus` |  | Ad group/entity status. |
| targeting_spec | `TargetingSpecOptimal` |  |  |
| targeting_template_ids | array<`Pinterest.Lib.IntegerFormatType`> |  | Targeting template IDs applied to the ad group. We currently only support 1 targeting template per ad group. To use targeting templates, do not set any other targeting fields: targeting_spec, tracking_urls, auto_targeting_enabled, placement_group. To clear all targeting template IDs, set this field to ['0']. _(nullable)_ |
| tracking_urls | `AdGroupTrackingURLs` |  |  |
| use_performance_plus_dynamic_retargeting | boolean |  | Whether this Performance+ ad group uses Performance+ dynamic retargeting. Defaults to true; set to false to opt out of dynamic retargeting duplication. |

### `ActionType`

Ad group billable event type. For update, only draft ad groups may update billable event.

Type: string enum(CLICKTHROUGH, IMPRESSION, VIDEO_V_50_MRC)

### `AdGroupTrackingURLs`

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

### `AdgroupTrackingFeatures`

| Field | Type | Required | Description |
|---|---|---|---|
| enabled | array<`AdgroupTrackingFeatureType`> |  | Tracking features. To clear this field, set to null. |

### `BidStrategyType`

Bid strategy type. For Campaigns with Video Completion objectives, the only supported bid strategy type is AUTOMATIC_BID, also known as "Pinterest Performance+ bidding".

Type: string enum(AUTOMATIC_BID, MAX_BID, TARGET_AVG, None)

### `ConversionLearningModeType`

oCPM learn mode.

Type: string enum(NOT_ACTIVE, ACTIVE, None)

### `NullableOptimizationGoalMetadata`

| Field | Type | Required | Description |
|---|---|---|---|
| conversion_tag_v3_goal_metadata | `ConversionTagV3GoalMetadata` |  |  |
| frequency_goal_metadata | `FrequencyGoalMetadata` |  |  |
| scrollup_goal_metadata | `ScrollupGoalMetadata` |  |  |

### `OverlayApplicationLevel`

How creative overlays apply to an ad group's products: `NONE` (no overlays), `AD_GROUP` (the ad group's overlay applies to every eligible product based on aspect ratio), or `ITEM` (the overlay comes from overlay assignment rules or the product feed overlay).

Type: string enum(NONE, ITEM, AD_GROUP)

### `OverlaySmartAdjustSettings`

Smart adjust settings for creative overlay. Currently, `smart_resize_enabled` and `smart_layout_enabled` must be both on or both off. If not set, smart adjust is off.

| Field | Type | Required | Description |
|---|---|---|---|
| smart_layout_enabled | boolean |  | Whether smart layout is enabled. |
| smart_resize_enabled | boolean |  | Whether smart resize is enabled. |

### `PerformancePlusCampaignSettings`

Pinterest Performance+ campaign settings.

| Field | Type | Required | Description |
|---|---|---|---|
| boost_prospecting_ad_group_bid | boolean |  | Whether to boost prospecting ad group bid. This field is deprecated. _(DEPRECATED)_ |
| pinner_list_exclusions | array<string> |  | List of campaign-level exclusion pinner list IDs. This field is deprecated. _(DEPRECATED)_ |

### `PerformancePlusValueStrategy`

Performance+ value strategy applied to an ad group.

Type: string enum(NEW_CUSTOMER_ACQUISITION, PRIORITY_PRODUCTS)

### `PlacementGroupType`

Campaign placement group type

Type: string enum(ALL, SEARCH, BROWSE, OTHER)

### `PlacementTrafficType`

A targeting option that enables advertisers to choose whether to run ads in fullscreen feed, two column feed, or both.

Type: string enum(ALL, TWO_COLUMN_FEED, FULLSCREEN_FEED, None)

### `PromotionApplicationLevel`

Specify if the promotion is applied at ad group or item level.

Type: string enum(NONE, ITEM, AD_GROUP, None)

### `SummaryStatus`

Summary status for campaign

Type: string enum(RUNNING, PAUSED, NOT_STARTED, COMPLETED, ADVERTISER_DISABLED, ARCHIVED, DRAFT, DELETED_DRAFT)

### `TargetingSpecOptimal`

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

### `AdGroupUpdateBatchUpdate`

| Field | Type | Required | Description |
|---|---|---|---|
| auto_targeting_enabled | boolean |  | Enable auto-targeting for ad group. Default value is True. Also known as ["Performance+ targeting"](https://help.pinterest.com/en/business/article/performance-plus-targeting). _(nullable)_ |
| bid_in_micro_currency | integer |  | Bid price in micro currency. This field is **REQUIRED** for the following campaign objective_type/billable_event combinations: AWARENESS/IMPRESSION, CONSIDERATION/CLICKTHROUGH, CATALOG_SALES/CLICKTHROUGH, VIDEO_VIEW/VIDEO_V_50_MRC. _(nullable)_ |
| bid_multiplier | number |  | [Open beta](https://help.pinterest.com/en/business/article/beta-features) Bid multiplier for ad group. This value is a double between 0.1 and 10.0. Enter 0 to remove the bid multiplier. - Not currently supported for [Performance+ campaigns](https://help.pinterest.com/en/business/article/performance-plus-campaigns). _(minimum 0; maximum 10)_ |
| bid_strategy_type | `BidStrategyType` |  |  |
| billable_event | `ActionType` |  |  |
| budget_in_micro_currency | integer |  | Budget in micro currency. This field is **REQUIRED** for non-CBO (campaign budget optimization) campaigns.  A CBO campaign automatically generates ad group budgets from its campaign budget to maximize campaign outcome. A CBO campaign is limited to 70 or less ad groups. _(nullable)_ |
| budget_type | `BudgetType` |  |  |
| campaign_id | string |  | Campaign ID of the ad group. |
| ctv_conversion_event | `ConversionTagType` |  | The conversion event a CTV ad group optimizes toward. Required when the parent campaign's `ctv_goal_type` is `CONVERSIONS` or `ROAS`. |
| customer_segment_id | `Pinterest.Lib.IntegerFormatType` |  | Customer segment ID applied to the ad group. We currently only support 1 customer segment per ad group. To use customer segments, do not set the `targeting_template_ids` field as well as the `AUDIENCE_INCLUDE` field of the `targeting_spec`. To clear the customer segment ID, set this field to '0'. |
| enable_offsite_placement | boolean |  | Whether offsite ad delivery (audience extension) is enabled for this ad group. |
| end_time | integer |  | Timestamp in Unix format for scheduling when ads in the ad group stop appearing. If not specified, ads run indefinitely unless you update the ad group by changing their status to `paused`. Cannot occur after `end_time` for parent campaign (if specified). Learn about [scheduling ads](https://help.pinterest.com/en/business/article/ads-manager-schedule-ads).  For certain organizations ([Closed beta](https://help.pinterest.com/en/business/article/beta-features)): Supported for campaigns with Campaign Budget Optimization (CBO).  For all organizations: Supported for campaigns without CBO. _(nullable)_ |
| ext_features | `AdgroupTrackingFeatures` |  |  |
| feed_profile_id | string |  | Feed Profile ID associated to the adgroup. |
| id | string | yes | Ad group ID. _(maxLength 18)_ |
| is_creative_optimization | boolean |  | Enable creative optimization for the ad group, default value is FALSE. When enabled, you allow Pinterest to automatically turn your product Pins into ads in different formats (collections and shopping) and deliver those ads to users at scale. _(nullable)_ |
| is_local_inventory | boolean |  | Indicates whether the ad group should use the local inventory. |
| lifetime_frequency_cap | integer |  | Set a limit to the number of times a promoted pin from this campaign can be impressed by a pinner within the past rolling 30 days. Only available for CPM (cost per mille (1000 impressions))  ad groups. A CPM ad group has an IMPRESSION [billable_event](https://help.pinterest.com/en/business/article/billable-events) value. This field **REQUIRES** the `end_time` field. |
| local_ad_radius_in_miles | number |  | The targeting radius of local ads in miles. Preferred over local_inventory_radius_in_miles. |
| local_inventory_radius_in_miles | number |  | Deprecated: use `local_ad_radius_in_miles` instead. Legacy alias kept for compatibility. Same Pepsi field as `local_ad_radius_in_miles`. _(DEPRECATED)_ |
| name | string |  | Ad group name. |
| optimization_goal_metadata | `NullableOptimizationGoalMetadata` |  | Optimization goals for objective-based performance campaigns. **REQUIRED** when campaign's `objective_type` is set to `"WEB_CONVERSION"`. _(nullable)_ |
| overlay_application_level | `OverlayApplicationLevel` |  | How creative overlays apply to the ad group's products:  - `NONE`, or not set: no overlays. - `AD_GROUP`: the ad group's overlay applies to every eligible product based on aspect ratio. - `ITEM`: the overlay comes from the product's matching overlay assignment rule with an active overlay or, if no rule matches, from the `overlay_id` attribute of its catalog item. `overlay_ids` must be empty for item level overlays.  If you omit this field when updating an ad group, the current value is kept.  Creative overlays are supported only in catalog campaigns, and appear only on standard shopping ads and Performance+ creative optimization collections. |
| overlay_ids | array<`Pinterest.Lib.IntegerFormatType`> |  | IDs of the creative overlays applied at the ad group level. For ad group level overlays, an ad group can have at most one overlay, and `overlay_application_level` must be `AD_GROUP`. The overlay needs to belong to the ad account owner.  To remove the overlay from an existing ad group, send an empty list and set `overlay_application_level` to `NONE`. If you omit this field, the current overlay is kept. _(nullable)_ |
| overlay_smart_adjust_settings | `OverlaySmartAdjustSettings` |  | Smart adjust settings for creative overlay. Currently, `smart_resize_enabled` and `smart_layout_enabled` must be both on or both off. If not set, smart adjust is off. If you omit this field when updating an ad group, the current settings are kept. _(nullable)_ |
| pacing_delivery_type | `PacingDeliveryType` |  |  |
| performance_plus_campaign_settings | `PerformancePlusCampaignSettings` |  | Pinterest Performance+ campaign settings. _(nullable)_ |
| performance_plus_value_strategies | array<`PerformancePlusValueStrategy`> |  | Performance+ value strategies to apply to this ad group. Currently only a single value strategy is supported at a time. |
| placement_group | `PlacementGroupType` |  | [Placement group](https://help.pinterest.com/en/business/article/placement-groups). |
| placement_traffic_type | `PlacementTrafficType` |  | A targeting option that enables advertisers to choose whether to run ads in fullscreen feed, two column feed, or both _(nullable)_ |
| promotion_application_level | `PromotionApplicationLevel` |  | Specify if the promotion is applied at ad group or item level _(nullable)_ |
| promotion_id | string |  | Promotion ID. To clear this field, set to null. _(nullable; default "0")_ |
| promotion_ids | array<string> |  | Promotion IDs list. To clear this field, set to an empty array []. |
| start_time | integer |  | Timestamp in Unix format for scheduling when ads in the ad group start to appear. If not specified, ads appear during parent campaign's `start_time`. Cannot precede `start_time` for parent campaign (if specified). Learn about [scheduling ads](/docs/api-features/managing-ads/#step-2-create-an-ad-group). For certain organizations ([Closed beta](/docs/getting-started/using-beta-and-restricted-features/)): Supported for campaigns with Campaign Budget Optimization (CBO). For all organizations: Supported for campaigns without CBO. _(nullable)_ |
| status | `EntityStatus` |  | Ad group/entity status. |
| targeting_spec | `TargetingSpecOptimal` |  |  |
| targeting_spec_operations | array<`TargetingSpecOperations`> |  |  |
| targeting_template_ids | array<`Pinterest.Lib.IntegerFormatType`> |  | Targeting template IDs applied to the ad group. We currently only support 1 targeting template per ad group. To use targeting templates, do not set any other targeting fields: targeting_spec, tracking_urls, auto_targeting_enabled, placement_group. To clear all targeting template IDs, set this field to ['0']. _(nullable)_ |
| tracking_urls | `AdGroupTrackingURLs` |  |  |
| use_performance_plus_dynamic_retargeting | boolean |  | Whether this Performance+ ad group uses Performance+ dynamic retargeting. Defaults to true; set to false to opt out of dynamic retargeting duplication. |

### `BidFloorSpec`

Bid floor specification for a given campaign configuration.

| Field | Type | Required | Description |
|---|---|---|---|
| billable_event | `ActionType` | yes | Ad group billable event type. |
| countries | array<`Country`> |  | List of ISO 3166-1 alpha-2 country codes. |
| creative_type | `CreativeType` |  | Creative type for the bid floor request. |
| currency | `Currency` | yes | Currency for the bid floor value. |
| objective_type | `BidFloorObjectiveType` |  | Campaign objective type. |
| optimization_goal_metadata | `OptimizationGoalMetadata` |  | Optimization goal metadata. |

### `DynamicTitlesProcessCSVError`

| Field | Type | Required | Description |
|---|---|---|---|
| error_type | string |  | The type of validation error: INVALID_FILE or ROW_VALIDATION_FAILED. |
| row_number | integer |  | The row number with a validation error. -1 indicates a file-level error. |

### `MetricsResponseDataItems`

| Field | Type | Required | Description |
|---|---|---|---|
| metrics | object | yes | Metrics object containing the requested metric columns and their values. The keys are metric names (e.g., AD_GROUP_ID, DATE, SPEND_IN_DOLLAR) and values are the metric values (strings or numbers). |
| targeting_type | string | yes | The targeting type for this data item (e.g., KEYWORD, APPTYPE, GENDER) |
| targeting_value | string | yes | The targeting value for this data item (e.g., 'christmas decor ideas', 'iphone', 'female') |

### `MatchType`

Keyword match type

Type: string enum(BROAD, PHRASE, EXACT, EXACT_NEGATIVE, PHRASE_NEGATIVE, BROAD_NEGATIVE)

### `TargetingSpecAgeBucket`

Type: string enum(18-24, 19+, 20+, 21+, 25-34, 35-44, 45-49, 50-54, 55-64, 65+)

### `TargetingSpecAppType`

Type: string enum(android_mobile, android_tablet, ipad, iphone, web, web_mobile)

### `TargetingSpecGender`

Type: string enum(unknown, male, female)

### `TargetingSpecShoppingRetargeting`

| Field | Type | Required | Description |
|---|---|---|---|
| exclusion_window | integer |  | Number of days ago to stop lookback timeframe for dynamic retargeting |
| lookback_window | integer |  | Number of days ago to start lookback timeframe for dynamic retargeting |
| tag_types | array<integer> |  | Event types to target for dynamic retargeting |

### `TargetingStrategy`

Type: string enum(CHOOSE_YOUR_OWN, FIND_NEW_CUSTOMERS, RECONNECT_WITH_USERS)

### `ConversionTagType`

conversion tag type

Type: string enum(PAGE_LOAD, UNKNOWN, INITIALIZED, PAGE_VISIT, SIGNUP, CHECKOUT, CUSTOM, VIEW_CATEGORY, SEARCH, ADD_TO_CART, WATCH_VIDEO, LEAD, APP_INSTALL, WEB_SESSION, EXTERNAL_MEASUREMENT, ADD_PAYMENT_INFO, ADD_TO_WISHLIST, INITIATE_CHECKOUT, SUBSCRIBE, VIEW_CONTENT, ADVERTISER_DEFINED_EVENT, APP_OPEN, CONTACT, SCHEDULE, FIND_LOCATION, CUSTOMIZE_PRODUCT, SUBMIT_APPLICATION, START_TRIAL, APP_INSTALL_CHECKOUT, APP_INSTALL_ADD_TO_CART)

### `AdgroupTrackingFeatureType`

Type: string enum(TRENDS, CLONE_META, BULK_EDITOR, AD_ROTATION, MEDIA_PLANNER)

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

### `TargetingSpecOperations`

Type: `TargetingSpecOperationAudienceExclude` | `TargetingSpecOperationAudienceInclude` | `TargetingSpecOperationGeo` | `TargetingSpecOperationGeoExclude` | `TargetingSpecOperationInterest` | `TargetingSpecOperationLocation` | `TargetingSpecOperationLocationExclude` | `TargetingSpecOperationLocale` | `TargetingSpecOperationAppType` | `TargetingSpecOperationGender` | `TargetingSpecOperationAgeBucket` | `TargetingSpecOperationShoppingRetargeting` | `TargetingSpecOperationMaximumAge` | `TargetingSpecOperationMinimumAge`

### `BidFloorObjectiveType`

Intended result of the campaign.
You can only update objectives for draft campaigns.
`WEB_SESSIONS` and `VIDEO_VIEW` objectives are deprecated. We recommend using `VIDEO_COMPLETION` as an alternative for the latter.

Type: string enum(AWARENESS, CONSIDERATION, WEB_CONVERSION, CATALOG_SALES, VIDEO_COMPLETION, SALES)

### `Country`

Country ID from ISO 3166-1 alpha-2.

Type: string enum(AD, AE, AF, AG, AI, AL, AM, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BV, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DJ, DK, DM, DO, DZ, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HM, HN, HR, HT, HU, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, False, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, YE, YT, ZA, ZM, ZW)

### `CreativeType`

Ad creative type enum.
**Note:** SHOP_THE_PIN has been deprecated. Please use COLLECTION instead.

Type: string enum(REGULAR, VIDEO, SHOPPING, CAROUSEL, MAX_VIDEO, SHOP_THE_PIN, COLLECTION, IDEA, SHOWCASE, QUIZ, COLLAGE, MAX_WIDTH_REGULAR_COLLECTION, MAX_WIDTH_VIDEO_COLLECTION, APP, CTV_VIDEO, SEARCH_TEXT_AD)

### `Currency`

Currency Codes from ISO 4217

Type: string enum(UNK, USD, GBP, CAD, EUR, AUD, NZD, SEK, ILS, CHF, HKD, JPY, SGD, KRW, NOK, DKK, PLN, RON, HUF, CZK, BRL, MXN, ARS, CLP, COP, INR, TRY)

### `OptimizationGoalMetadata`

| Field | Type | Required | Description |
|---|---|---|---|
| conversion_tag_v3_goal_metadata | `ConversionTagV3GoalMetadata` |  |  |
| frequency_goal_metadata | `FrequencyGoalMetadata` |  |  |
| scrollup_goal_metadata | `ScrollupGoalMetadata` |  |  |

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

### `TargetingSpecOperationAgeBucket`

| Field | Type | Required | Description |
|---|---|---|---|
| field | string enum(AGE_BUCKET) | yes |  |
| operation | string enum(SET) | yes |  |
| values | array<`TargetingSpecAgeBucket`> | yes |  |

### `TargetingSpecOperationAppType`

| Field | Type | Required | Description |
|---|---|---|---|
| field | string enum(APPTYPE) | yes |  |
| operation | `TargetingSpecListOperation` | yes |  |
| values | array<`TargetingSpecAppType`> | yes |  |

### `TargetingSpecOperationAudienceExclude`

| Field | Type | Required | Description |
|---|---|---|---|
| field | string enum(AUDIENCE_EXCLUDE) | yes |  |
| operation | `TargetingSpecListOperation` | yes |  |
| values | array<string> | yes |  |

### `TargetingSpecOperationAudienceInclude`

| Field | Type | Required | Description |
|---|---|---|---|
| field | string enum(AUDIENCE_INCLUDE) | yes |  |
| operation | `TargetingSpecListOperation` | yes |  |
| values | array<string> | yes |  |

### `TargetingSpecOperationGender`

| Field | Type | Required | Description |
|---|---|---|---|
| field | string enum(GENDER) | yes |  |
| operation | `TargetingSpecListOperation` | yes |  |
| values | array<`TargetingSpecGender`> | yes |  |

### `TargetingSpecOperationGeo`

| Field | Type | Required | Description |
|---|---|---|---|
| field | string enum(GEO) | yes |  |
| operation | `TargetingSpecListOperation` | yes |  |
| values | array<string> | yes |  |

### `TargetingSpecOperationGeoExclude`

| Field | Type | Required | Description |
|---|---|---|---|
| field | string enum(GEO_EXCLUDE) | yes |  |
| operation | `TargetingSpecListOperation` | yes |  |
| values | array<string> | yes |  |

### `TargetingSpecOperationInterest`

| Field | Type | Required | Description |
|---|---|---|---|
| field | string enum(INTEREST) | yes |  |
| operation | `TargetingSpecListOperation` | yes |  |
| values | array<string> | yes |  |

### `TargetingSpecOperationLocale`

| Field | Type | Required | Description |
|---|---|---|---|
| field | string enum(LOCALE) | yes |  |
| operation | `TargetingSpecListOperation` | yes |  |
| values | array<string> | yes |  |

### `TargetingSpecOperationLocation`

| Field | Type | Required | Description |
|---|---|---|---|
| field | string enum(LOCATION) | yes |  |
| operation | `TargetingSpecListOperation` | yes |  |
| values | array<string> | yes |  |

### `TargetingSpecOperationLocationExclude`

| Field | Type | Required | Description |
|---|---|---|---|
| field | string enum(LOCATION_EXCLUDE) | yes |  |
| operation | `TargetingSpecListOperation` | yes |  |
| values | array<string> | yes |  |

### `TargetingSpecOperationMaximumAge`

| Field | Type | Required | Description |
|---|---|---|---|
| field | string enum(MAXIMUM_AGE) | yes |  |
| operation | string enum(SET) | yes |  |
| value | string | yes | _(nullable)_ |

### `TargetingSpecOperationMinimumAge`

| Field | Type | Required | Description |
|---|---|---|---|
| field | string enum(MINIMUM_AGE) | yes |  |
| operation | string enum(SET) | yes |  |
| value | string | yes | _(nullable)_ |

### `TargetingSpecOperationShoppingRetargeting`

| Field | Type | Required | Description |
|---|---|---|---|
| field | string enum(SHOPPING_RETARGETING) | yes |  |
| operation | string enum(SET) | yes |  |
| values | array<`TargetingSpecShoppingRetargeting`> | yes |  |

### `TargetingSpecListOperation`

Type: string enum(SET, ADD, REMOVE)

