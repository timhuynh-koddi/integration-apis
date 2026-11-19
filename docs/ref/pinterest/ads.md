# Pinterest API v5: Ads

> Source: Pinterest REST API v5 OpenAPI spec (https://github.com/pinterest/api-description, v5.32.0); docs https://developers.pinterest.com/docs/api/v5/. Base URL: https://api.pinterest.com/v5. Fetched 2026-11-19.

Operations: 10

---

## POST /ad_accounts/{ad_account_id}/ad_previews

**Create ad preview with pin or image**

Create an ad preview given an ad account ID and either an existing organic pin ID or the URL for an image to be used to create the Pin and the ad.

If you are creating a preview from an existing Pin, that Pin must be promotable: that is, it must have a clickthrough link and meet other requirements. (See [Ads Overview](https://help.pinterest.com/en/business/article/promoted-pins-overview).)

You can view the returned preview URL on a webpage or iframe for 7 days, after which the URL expires. Collection ads are not currently supported ad preview.

Operation ID: `ad_previews/create`

Scopes: pinterest_oauth2: ads:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `AdPreviewRequest`

**Response 200** (`application/json`): `AdPreviewURLResponse`

**Response 201** (`application/json`): `AdPreviewURLResponse`

---

## GET /ad_accounts/{ad_account_id}/ads

**List ads**

List ads that meet the filters provided:
    - Listed campaign ids or ad group ids or ad ids
    - Listed entity statuses

If no filter is provided, all ads in the ad account are returned.

**Note:**
Provide only `campaign_id` or `ad_group_id` or `ad_id`. Do not provide more than one type.

Review status is provided for each ad; if `review_status` is `REJECTED`, the `rejected_reasons` field will contain additional information.

For more, see [Pinterest advertising standards](https://policy.pinterest.com/en/advertising-guidelines).

Operation ID: `ads/list`

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
| ad_ids | query | array<`Pinterest.Lib.IntegerFormatType`> |  | List of Ad Ids to use to filter the results. |
| entity_statuses | query | array<`EntityStatus`> |  | Entity status _(default ["ACTIVE", "PAUSED"])_ |

**Response 200** (`application/json`): object{bookmark: string, items: array<`Ad`>}

---

## POST /ad_accounts/{ad_account_id}/ads

**Create ads**

Create multiple new ads. Request must contain ad_group_id, creative_type, and the source Pin pin_id.

Operation ID: `ads/create`

Scopes: pinterest_oauth2: ads:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `AdBatchCreateRequest`

**Response 200** (`application/json`): `AdBatchWriteResponseModel`

---

## PATCH /ad_accounts/{ad_account_id}/ads

**Update ads**

Update multiple existing ads

Operation ID: `ads/update`

Scopes: pinterest_oauth2: ads:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `AdBatchUpdateRequest`

**Response 200** (`application/json`): `AdBatchWriteResponseModel`

---

## GET /ad_accounts/{ad_account_id}/ads/analytics

**Get ad analytics**

Get analytics for the specified ads in the specified `ad_account_id`, filtered by the specified options.
    - The token's user_account must either be the Owner of the specified ad account, or have one of the necessary roles granted to them via [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts): Admin, Analyst, Campaign Manager.
    - The request must contain either ad_ids or both campaign_ids and pin_ids.
    - If granularity is not HOUR, you can pull data from up to 90 days before the current date in UTC time, with a maximum time range of 90 days.
    - If granularity is HOUR, you can pull data from up to 8 days before the current date in UTC time, with a maximum time range of 3 days.

Operation ID: `ads/analytics`

Scopes: pinterest_oauth2: ads:read; client_credentials: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| pin_ids | query | array<string> |  | List of Pin IDs. |
| start_date | query | string (date) | yes | Metric report start date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days back from today. |
| end_date | query | string (date) | yes | Metric report end date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days past start_date. |
| ad_ids | query | array<`Pinterest.Lib.IntegerFormatType`> |  | List of Ad Ids to use to filter the results. |
| columns | query | array<`ReportingColumnSync`> | yes | Columns to retrieve, encoded as a comma-separated string. **NOTE**: Any metrics defined as MICRO_DOLLARS returns a value based on the advertiser profile's currency field. For USD, ($1/1,000,000, or $0.000001 - one one-ten-thousandth of a cent). it's microdollars. Otherwise, it's in microunits of the advertiser's currency.  For example, if the advertiser's currency is GBP (British pound sterling), all MICRO_DOLLARS fields will be in GBP microunits (1/1,000,000 British pound).  If a column has no value, it may not be returned. |
| granularity | query | `Granularity` | yes | TOTAL - metrics are aggregated over the specified date range.    DAY - metrics are broken down daily.    HOUR - metrics are broken down hourly.    WEEK - metrics are broken down weekly.    MONTH - metrics are broken down monthly |
| click_window_days | query | number enum(0, 1, 7, 14, 30, 60) |  | Number of days to use as the conversion attribution window for a pin click action. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to `30` days. _(default 30)_ |
| engagement_window_days | query | number enum(0, 1, 7, 14, 30, 60) |  | Number of days to use as the conversion attribution window for an engagement action. Engagements include saves, closeups, link clicks, and carousel card swipes. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to `30` days. **Note:** This parameter no longer returns new data. However, you can still access historic data through **Sept 30, 2027**. _(default 30)_ |
| view_window_days | query | number enum(0, 1, 7, 14, 30, 60) |  | Number of days to use as the conversion attribution window for a view action. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to `1` day. _(default 1)_ |
| conversion_report_time | query | string enum(TIME_OF_AD_ACTION, TIME_OF_CONVERSION) |  | The date by which the conversion metrics returned from this endpoint will be reported. There are two dates associated with a conversion event: the date that the user interacted with the ad, and the date that the user completed a conversion event. _(default "TIME_OF_AD_ACTION")_ |
| campaign_ids | query | array<`CampaignIdType`> |  | List of Campaign Ids to use to filter the results. |
| reporting_timezone | query | `ReportingTimeZone` |  | Specify the timezone to be applied for the reporting. Defaults to PINTEREST_TIME_ZONE (UTC). AD_ACCOUNT_TIME_ZONE requires the ad account to have a time_zone configured; otherwise the request fails with a 400. |
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Response 200** (`application/json`): array<`AdsAnalytics`>

---

## GET /ad_accounts/{ad_account_id}/ads/targeting_analytics

**Get targeting analytics for ads**

Get targeting analytics for one or more ads. For the requested ad(s) and metrics, the response will include the requested metric information (e.g. SPEND_IN_DOLLAR) for the requested target type (e.g. "age_bucket") for applicable values (e.g. "45-49").

* The token's user_account must either be the Owner of the specified ad account, or have one of the necessary roles granted to them via [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts): Admin, Analyst, Campaign Manager.
* If granularity is not HOUR, you can pull data from up to 90 days before the current date in UTC time, with a maximum time range of 90 days.
* If granularity is HOUR, you can pull data from up to 8 days before the current date in UTC time, with a maximum time range of 3 days.

Operation ID: `ad_targeting_analytics/get`

Scopes: pinterest_oauth2: ads:read; client_credentials: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |
| ad_ids | query | array<`Pinterest.Lib.IntegerFormatType`> | yes | List of Ad Ids to use to filter the results. |
| start_date | query | string (date) | yes | Metric report start date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days back from today. |
| end_date | query | string (date) | yes | Metric report end date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days past start_date. |
| targeting_types | query | array<`AdsAnalyticsAdTargetingType`> | yes | Targeting type breakdowns for the report. The reporting per targeting type is independent from each other. ["AGE_BUCKET_AND_GENDER"] is in BETA and not yet available to all users. |
| columns | query | array<`ReportingColumnSync`> | yes | Columns to retrieve, encoded as a comma-separated string. **NOTE**: Any metrics defined as MICRO_DOLLARS returns a value based on the advertiser profile's currency field. For USD, ($1/1,000,000, or $0.000001 - one one-ten-thousandth of a cent). it's microdollars. Otherwise, it's in microunits of the advertiser's currency.  For example, if the advertiser's currency is GBP (British pound sterling), all MICRO_DOLLARS fields will be in GBP microunits (1/1,000,000 British pound).  If a column has no value, it may not be returned. |
| granularity | query | `Granularity` | yes | TOTAL - metrics are aggregated over the specified date range.    DAY - metrics are broken down daily.    HOUR - metrics are broken down hourly.    WEEK - metrics are broken down weekly.    MONTH - metrics are broken down monthly |
| click_window_days | query | `ConversionAttributionWindowDays` |  | Number of days to use as the conversion attribution window for a pin click action. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to `30` days. _(default 30)_ |
| engagement_window_days | query | `ConversionAttributionWindowDays` |  | Number of days to use as the conversion attribution window for an engagement action. Engagements include saves, closeups, link clicks, and carousel card swipes. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to `30` days.  **Note:** This parameter no longer returns new data. However, you can still access historic data through **Sept 30, 2027**. _(default 30)_ |
| view_window_days | query | `ConversionAttributionWindowDays` |  | Number of days to use as the conversion attribution window for a view action. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to `1` day. _(default 1)_ |
| conversion_report_time | query | `ConversionReportTimeType` |  | The date by which the conversion metrics returned from this endpoint will be reported. There are two dates associated with a conversion event: the date that the user interacted with the ad, and the date that the user completed a conversion event. _(default "TIME_OF_AD_ACTION")_ |
| attribution_types | query | array<`ConversionReportAttributionType`> |  | List of types of attribution for the conversion report |
| reporting_timezone | query | `ReportingTimeZone` |  | Specify the timezone to be applied for the reporting. Defaults to PINTEREST_TIME_ZONE (UTC). AD_ACCOUNT_TIME_ZONE requires the ad account to have a time_zone configured; otherwise the request fails with a 400. |
| sort_columns | query | array<string> |  | Sort Columns. |
| sort_ascending | query | boolean |  | Sort ascending. |

**Response 200** (`application/json`): `MetricsResponse`

---

## GET /ad_accounts/{ad_account_id}/ads/{ad_id}

**Get ad**

Get a specific ad given the ad ID. If your pin is rejected, rejected_reasons will
contain additional information from the Ad Review process.
For more information about our policies and rejection reasons see the [Pinterest advertising standards](https://www.pinterest.com/_/_/policy/advertising-guidelines/).

Operation ID: `ads/get`

Scopes: pinterest_oauth2: ads:read; client_credentials: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_id | path | string | yes | The ID of this ad. _(maxLength 18)_ |
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Response 200** (`application/json`): `Ad`

---

## POST /ad_accounts/{ad_account_id}/campaign_ad_preview

**Create ad preview records for one or more ad groups**

Create ad preview records for one or more ad groups that can be shared.
Each ad group is processed independently; individual failures do not block other previews.

Operation ID: `campaign_ad_preview/create`

Scopes: pinterest_oauth2: ads:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): array<`CampaignAdPreviewCreateItem`>

**Response 200** (`application/json`): array<object{data: `CampaignAdPreview` | object{exceptions: `Pinterest.Lib.Error`}}>

**Response 201** (`application/json`): array<`CampaignAdPreview`>

---

## GET /ad_accounts/{ad_account_id}/campaign_ad_preview

**Fetch ad preview records for one or more ad groups**

Fetch ad preview records for one or more ad groups.
Returns all active previews associated with the provided ad group IDs.

Operation ID: `campaign_ad_preview/read`

Scopes: pinterest_oauth2: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_group_ids | query | array<`AdGroupIdType`> | yes | List of Ad group Ids to use to filter the results. |
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Response 200** (`application/json`): array<`CampaignAdPreview`>

---

## DELETE /ad_accounts/{ad_account_id}/campaign_ad_preview

**Delete ad preview records for one or more ad groups**

Delete ad preview records for one or more ad groups.
All ad groups are validated before deleting any records.

Operation ID: `campaign_ad_preview/delete`

Scopes: pinterest_oauth2: ads:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_group_ids | query | array<`AdGroupIdType`> | yes | List of Ad group Ids to use to filter the results. |
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Response 200** (`application/json`): array<object{status: `Pinterest.Lib.Status204` | `Pinterest.Lib.Error`}>

**Response 204**: Resource deleted successfully.

---

## Schemas

### `Ad`

| Field | Type | Required | Description |
|---|---|---|---|
| ad_account_id | string | yes | The ID of the advertiser that this ad belongs to. _(read-only)_ |
| ad_group_id | string | yes | ID of the ad group that contains the ad. |
| android_deep_link | string |  | Deep link URL for Android devices. _(nullable)_ |
| base_ad_id | string |  | The ID of the Performance+ base ad that this ad was duplicated from in its managed set. Read-only output; set by Pinterest when a Performance+ managed set is created. Setting this field on a request has no effect. _(read-only)_ |
| campaign_id | string | yes | ID of the ad campaign that contains this ad. _(read-only)_ |
| carousel_android_deep_links | array<string> |  | Comma-separated deep links for the carousel pin on Android. _(nullable)_ |
| carousel_destination_urls | array<string> |  | Comma-separated destination URLs for the carousel pin to promote. _(nullable)_ |
| carousel_ios_deep_links | array<string> |  | Comma-separated deep links for the carousel pin on iOS. _(nullable)_ |
| carting_platform_type | `CartingPlatformType` |  | The vendor platform type of the carting/WTB ad. _(read-only)_ |
| carting_products | array<`CartingProduct`> |  | Array of carting/WTB products for the ad. _(read-only)_ |
| click_tracking_url | string |  | Tracking url for the ad clicks. _(nullable)_ |
| collection_items_destination_url_template | string |  | Destination URL template for all items within a collections drawer. _(nullable)_ |
| collections_header_type | `AdCollectionsHeaderType` |  | _(nullable)_ |
| created_time | integer |  | Pin creation time. Unix timestamp in seconds. _(read-only)_ |
| creative_type | `CreativeType` | yes |  |
| cta_types | array<`CustomizableCTAType`> |  | List of CTA types. |
| customizable_cta_type | `CustomizableCTAType` |  |  |
| destination_url | string |  | Destination URL. _(nullable)_ |
| disclosure_type | `DisclosureType` |  |  |
| disclosure_url | string |  | URL for a page that provides disclosures about a pharmaceutical product, such as potential side effects. Make sure the URL takes the user directly to the disclosure content and the referenced site is secure. _(nullable)_ |
| grid_click_type | `GridClickType` |  |  |
| id | string | yes | The ID of this ad. _(maxLength 18)_ |
| ios_deep_link | string |  | Deep link URL for iOS devices. _(nullable)_ |
| is_carting | boolean |  | Is the ad a carting/WTB ad? |
| is_collage_accepted_terms | boolean |  | Whether the advertiser has accepted the terms and conditions for collage ad. |
| is_collage_single_destination | boolean |  | Whether the collage ad has a single destination url override. |
| is_dynamic_cta | boolean |  | Whether the ad uses dynamic CTA selection. |
| is_pin_deleted | boolean |  | Is original pin deleted? |
| is_removable | boolean |  | Is pin repinnable? |
| lead_form_id | string |  | Lead form ID for lead ad generation. _(nullable)_ |
| name | string |  | Name of the ad - 255 chars max. _(nullable)_ |
| pin_id | string | yes | Pin ID. This field may only be updated for draft ads. |
| quiz_pin_data | `QuizPinData` |  | Before creating a quiz ad, you must create an organic Pin using POST/Create Pin for each result in the quiz. Quiz ads cannot be saved by a Pinner. Quiz ad results can be saved. _(nullable)_ |
| rejected_reasons | array<`AdDisapprovalReasons`> | yes | Enum reason why the pin was rejected. Returned if `review_status` is "REJECTED". _(read-only)_ |
| rejection_labels | array<string> | yes | Text reason why the pin was rejected. Returned if `review_status` is "REJECTED". _(read-only)_ |
| review_status | `AdReviewStatus` | yes | Ad review status _(read-only)_ |
| status | `EntityStatus` |  |  |
| summary_status | `PinPromotionSummaryStatus` | yes | Ad summary status _(read-only)_ |
| tracking_urls | `TrackingUrls` |  |  |
| type | string | yes | Always "ad". _(read-only)_ |
| updated_time | integer |  | Last update time. Unix timestamp in seconds. _(read-only)_ |
| view_tracking_url | string |  | Tracking URL for ad impressions. _(nullable)_ |

### `AdBatchCreateRequest`

Type: array<`AdCreate`>

### `AdBatchUpdateRequest`

Type: array<`AdBatchUpdate`>

### `AdBatchWriteResponseModel`

| Field | Type | Required | Description |
|---|---|---|---|
| items | array<`AdBatchItem`> | yes |  |

### `AdGroupIdType`

Type: string

### `AdPreviewRequest`

Type: `AdPreviewSourceImage` | `AdPreviewSourcePinId` | `AdPreviewShopping`

### `AdPreviewURLResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| url | string |  | Preview URL, expires in 7 days. Can be used in an iframe. For example: https://ads.pinterest.com/ad-preview/74667c814dd2b19/ The preview object ID/key is the last param - 74667c814dd2b19 |

### `AdsAnalytics`

| Field | Type | Required | Description |
|---|---|---|---|
| AD_ID | string | yes |  |
| DATE | string (date) |  |  |

### `AdsAnalyticsAdTargetingType`

Reporting targeting type for ads

Type: string enum(KEYWORD, APPTYPE, GENDER, LOCATION, PLACEMENT, COUNTRY, TARGETED_INTEREST, PINNER_INTEREST, AUDIENCE_INCLUDE, GEO, AGE_BUCKET, REGION, QUIZ_RESULT, AGE_BUCKET_AND_GENDER)

### `CampaignAdPreview`

Campaign ad preview record.

| Field | Type | Required | Description |
|---|---|---|---|
| ad_account_id | string | yes | Advertiser ID for this preview. _(read-only)_ |
| ad_group_id | string | yes | Ad group ID to create a preview record for. _(maxLength 18)_ |
| client_id | integer |  | Client ID that created preview. _(read-only)_ |
| expires_at | integer | yes | Unix timestamp in milliseconds for preview expiration. _(read-only)_ |
| is_active | boolean | yes | Whether preview link is active. _(read-only)_ |
| pin_id | integer |  | Pin ID for pin promotion preview. _(read-only)_ |
| pin_promotion_id | integer |  | Pin promotion ID for this preview. _(read-only)_ |
| promoted_product_group_id | integer |  | Promoted product group ID for catalog previews. _(read-only)_ |
| url | string | yes | Campaign ad preview URL. _(read-only)_ |
| user_id | integer | yes | User ID that created preview. _(read-only)_ |
| uuid | string | yes | Pin promotion preview key. _(read-only)_ |

### `CampaignAdPreviewCreateItem`

Ad group preview to create.

| Field | Type | Required | Description |
|---|---|---|---|
| ad_group_id | string | yes | Ad group ID to create a preview record for. _(maxLength 18)_ |
| expires_at | integer |  | Unix timestamp in milliseconds for preview expiration. Defaults to 30 days from creation when omitted. |

### `CampaignIdType`

Type: string

### `ConversionAttributionWindowDays`

Type: number enum(0, 1, 7, 14, 30, 60)

### `ConversionReportAttributionType`

Attribution type. Refers to the Pinterest Tag endpoints

Type: string enum(INDIVIDUAL, HOUSEHOLD)

### `ConversionReportTimeType`

Conversion report time type

Type: string enum(TIME_OF_AD_ACTION, TIME_OF_CONVERSION)

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

### `Pinterest.Lib.Error`

Default error response

| Field | Type | Required | Description |
|---|---|---|---|
| code | integer | yes |  |
| message | string | yes |  |

### `Pinterest.Lib.IntegerFormatType`

Type: string

### `Pinterest.Lib.PaginationOrder`

Type: string enum(ASCENDING, DESCENDING)

### `Pinterest.Lib.Status204`

The resource was successfully deleted.

| Field | Type | Required | Description |
|---|---|---|---|
| statusCode | number enum(204) | yes |  |

### `ReportingColumnSync`

Reporting columns for sync reporting endpoints

Type: string enum(SPEND_IN_MICRO_DOLLAR, PAID_IMPRESSION, SPEND_IN_DOLLAR, CPC_IN_MICRO_DOLLAR, ECPC_IN_MICRO_DOLLAR, ECPC_IN_DOLLAR, CTR, ECTR, OUTBOUND_CTR_1, CAMPAIGN_NAME, CAMPAIGN_BRAND_LABEL, PIN_ID, TOTAL_ENGAGEMENT, ENGAGEMENT_1, ENGAGEMENT_2, ECPE_IN_DOLLAR, ENGAGEMENT_RATE, EENGAGEMENT_RATE, ECPM_IN_MICRO_DOLLAR, REPIN_RATE, CTR_2, CAMPAIGN_ID, ADVERTISER_ID, AD_ACCOUNT_ID, PIN_PROMOTION_ID, AD_ID, AD_GROUP_ID, CAMPAIGN_ENTITY_STATUS, CAMPAIGN_OBJECTIVE_TYPE, CPM_IN_MICRO_DOLLAR, CPM_IN_DOLLAR, AD_GROUP_NAME, AD_GROUP_BUDGET_TYPE, AD_GROUP_BUDGET_IN_LOCAL_CURRENCY, AD_GROUP_ENTITY_STATUS, AD_GROUP_BID_MULTIPLIER, PROMO_ID, PROMO_NAME, ORDER_LINE_ID, ORDER_LINE_NAME, CLICKTHROUGH_1, REPIN_1, IMPRESSION_1, IMPRESSION_1_GROSS, CLICKTHROUGH_1_GROSS, OUTBOUND_CLICK_1, CLICKTHROUGH_2, REPIN_2, IMPRESSION_2, OUTBOUND_CLICK_2, COLLECTION_PIN_ITEM_IMPRESSION_1, COLLECTION_PIN_ITEM_IMPRESSION_2, TOTAL_COLLECTION_PIN_ITEM_IMPRESSION, COLLECTION_PIN_ITEM_CLICKTHROUGH_1, COLLECTION_PIN_ITEM_CLICKTHROUGH_2, TOTAL_COLLECTION_PIN_ITEM_CLICKTHROUGH, TOTAL_CLICKTHROUGH, TOTAL_IMPRESSION, TOTAL_IMPRESSION_USER, TOTAL_IMPRESSION_HOUSEHOLD_USER, TOTAL_IMPRESSION_FREQUENCY, TOTAL_IMPRESSION_HOUSEHOLD_FREQUENCY, COST_PER_OUTBOUND_CLICK_IN_DOLLAR, COST_PER_OUTBOUND_CLICK_IN_DOLLAR_1, TOTAL_ENGAGEMENT_SIGNUP, TOTAL_ENGAGEMENT_CHECKOUT, TOTAL_ENGAGEMENT_ADD_PAYMENT_INFO, TOTAL_ENGAGEMENT_ADD_TO_WISHLIST, TOTAL_ENGAGEMENT_INITIATE_CHECKOUT, TOTAL_ENGAGEMENT_SUBSCRIBE, TOTAL_ENGAGEMENT_VIEW_CONTENT, TOTAL_ENGAGEMENT_LEAD, TOTAL_ENGAGEMENT_CONTACT, TOTAL_ENGAGEMENT_SCHEDULE, TOTAL_ENGAGEMENT_FIND_LOCATION, TOTAL_ENGAGEMENT_CUSTOMIZE_PRODUCT, TOTAL_ENGAGEMENT_SUBMIT_APPLICATION, TOTAL_ENGAGEMENT_START_TRIAL, TOTAL_ENGAGEMENT_APP_OPEN, TOTAL_ENGAGEMENT_ADD_TO_CART, TOTAL_ENGAGEMENT_APP_INSTALL, TOTAL_ENGAGEMENT_PAGE_VISIT, TOTAL_ENGAGEMENT_SEARCH, TOTAL_ENGAGEMENT_VIEW_CATEGORY, TOTAL_ENGAGEMENT_WATCH_VIDEO, TOTAL_CLICK_SIGNUP, TOTAL_CLICK_CHECKOUT, TOTAL_CLICK_ADD_PAYMENT_INFO, TOTAL_CLICK_ADD_TO_WISHLIST, TOTAL_CLICK_INITIATE_CHECKOUT, TOTAL_CLICK_SUBSCRIBE, TOTAL_CLICK_VIEW_CONTENT, TOTAL_CLICK_ADD_TO_CART, TOTAL_CLICK_LEAD, TOTAL_CLICK_CONTACT, TOTAL_CLICK_SCHEDULE, TOTAL_CLICK_FIND_LOCATION, TOTAL_CLICK_CUSTOMIZE_PRODUCT, TOTAL_CLICK_SUBMIT_APPLICATION, TOTAL_CLICK_START_TRIAL, TOTAL_CLICK_APP_OPEN, TOTAL_CLICK_APP_INSTALL, TOTAL_CLICK_PAGE_VISIT, TOTAL_CLICK_SEARCH, TOTAL_CLICK_VIEW_CATEGORY, TOTAL_CLICK_WATCH_VIDEO, TOTAL_VIEW_SIGNUP, TOTAL_VIEW_CHECKOUT, TOTAL_VIEW_ADD_PAYMENT_INFO, TOTAL_VIEW_ADD_TO_WISHLIST, TOTAL_VIEW_INITIATE_CHECKOUT, TOTAL_VIEW_SUBSCRIBE, TOTAL_VIEW_VIEW_CONTENT, TOTAL_VIEW_ADD_TO_CART, TOTAL_VIEW_LEAD, TOTAL_VIEW_CONTACT, TOTAL_VIEW_SCHEDULE, TOTAL_VIEW_FIND_LOCATION, TOTAL_VIEW_CUSTOMIZE_PRODUCT, TOTAL_VIEW_SUBMIT_APPLICATION, TOTAL_VIEW_START_TRIAL, TOTAL_VIEW_APP_OPEN, TOTAL_VIEW_APP_INSTALL, TOTAL_VIEW_PAGE_VISIT, TOTAL_VIEW_SEARCH, TOTAL_VIEW_VIEW_CATEGORY, TOTAL_VIEW_WATCH_VIDEO, TOTAL_CONVERSIONS, COST_PER_CONVERSION_IN_DOLLAR, TOTAL_ENGAGEMENT_SIGNUP_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_ADD_PAYMENT_INFO_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_ADD_TO_WISHLIST_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_INITIATE_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_SUBSCRIBE_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_VIEW_CONTENT_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_ADD_TO_CART_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_APP_INSTALL_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_LEAD_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_PAGE_VISIT_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_SEARCH_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_VIEW_CATEGORY_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_WATCH_VIDEO_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_SIGNUP_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_ADD_PAYMENT_INFO_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_ADD_TO_WISHLIST_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_INITIATE_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_SUBSCRIBE_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_VIEW_CONTENT_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_ADD_TO_CART_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_APP_INSTALL_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_LEAD_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_PAGE_VISIT_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_SEARCH_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_VIEW_CATEGORY_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_WATCH_VIDEO_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_SIGNUP_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_ADD_PAYMENT_INFO_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_ADD_TO_WISHLIST_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_INITIATE_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_SUBSCRIBE_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_VIEW_CONTENT_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_ADD_TO_CART_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_APP_INSTALL_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_LEAD_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_PAGE_VISIT_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_SEARCH_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_VIEW_CATEGORY_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_WATCH_VIDEO_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_SESSIONS, WEB_SESSIONS_1, WEB_SESSIONS_2, AD_NAME, AD_GROUP_OPTIMIZATION, CAMPAIGN_BUDGET_OPTIMIZATION, CAMPAIGN_BUDGET_TYPE, CAMPAIGN_BUDGET_IN_LOCAL_CURRENCY, IS_PREMIERE_CAMPAIGN, TOTAL_PAGE_VISIT, TOTAL_SIGNUP, TOTAL_CHECKOUT, TOTAL_ADD_PAYMENT_INFO, TOTAL_INITIATE_CHECKOUT, TOTAL_VIEW_CONTENT, TOTAL_CUSTOM, TOTAL_LEAD, TOTAL_CONTACT, TOTAL_SCHEDULE, TOTAL_FIND_LOCATION, TOTAL_CUSTOMIZE_PRODUCT, TOTAL_SUBMIT_APPLICATION, TOTAL_START_TRIAL, TOTAL_APP_OPEN, TOTAL_ADD_TO_WISHLIST, TOTAL_SUBSCRIBE, TOTAL_VIEW_CATEGORY, TOTAL_ADD_TO_CART, TOTAL_SEARCH, TOTAL_WATCH_VIDEO, TOTAL_SIGNUP_VALUE_IN_MICRO_DOLLAR, TOTAL_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_ADD_PAYMENT_INFO_VALUE_IN_MICRO_DOLLAR, TOTAL_ADD_TO_WISHLIST_VALUE_IN_MICRO_DOLLAR, TOTAL_INITIATE_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_SUBSCRIBE_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_CONTENT_VALUE_IN_MICRO_DOLLAR, TOTAL_CUSTOM_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_CATEGORY_VALUE_IN_MICRO_DOLLAR, TOTAL_ADD_TO_CART_VALUE_IN_MICRO_DOLLAR, TOTAL_LEAD_VALUE_IN_MICRO_DOLLAR, TOTAL_SEARCH_VALUE_IN_MICRO_DOLLAR, TOTAL_WATCH_VIDEO_VALUE_IN_MICRO_DOLLAR, PAGE_VISIT_COST_PER_ACTION, PAGE_VISIT_ROAS, CHECKOUT_ROAS, ADD_PAYMENT_INFO_ROAS, ADD_TO_WISHLIST_ROAS, INITIATE_CHECKOUT_ROAS, SUBSCRIBE_ROAS, VIEW_CONTENT_ROAS, CUSTOM_ROAS, PRODUCT_GROUP_AD_IMAGE_TAG, PRODUCT_GROUP_AD_VIDEO_TAG, VIDEO_3SEC_VIEWS_1, VIDEO_15SEC_UNIQUE_VIEWS_1, VIDEO_MRC_VIEWS_1, VIDEO_3SEC_VIEWS_2, VIDEO_15SEC_UNIQUE_VIEWS_2, VIDEO_P100_COMPLETE_2, VIDEO_P0_COMBINED_2, VIDEO_P25_COMBINED_2, VIDEO_P50_COMBINED_2, VIDEO_P75_COMBINED_2, VIDEO_P95_COMBINED_2, VIDEO_MRC_VIEWS_2, PAID_VIDEO_VIEWABLE_RATE, VIDEO_LENGTH, VIDEO_SPEND_IN_DOLLAR, ECPV_IN_DOLLAR, ECPCV_IN_DOLLAR, ECPCV_P95_IN_DOLLAR, TOTAL_VIDEO_3SEC_VIEWS, TOTAL_VIDEO_15SEC_UNIQUE_VIEWS, TOTAL_VIDEO_P100_COMPLETE, TOTAL_VIDEO_P0_COMBINED, TOTAL_VIDEO_P25_COMBINED, TOTAL_VIDEO_P50_COMBINED, TOTAL_VIDEO_P75_COMBINED, TOTAL_VIDEO_P95_COMBINED, TOTAL_VIDEO_MRC_VIEWS, TOTAL_VIDEO_AVG_WATCHTIME_IN_SECOND, TOTAL_REPIN_RATE, WEB_CHECKOUT_COST_PER_ACTION, WEB_ADD_PAYMENT_INFO_COST_PER_ACTION, WEB_ADD_TO_WISHLIST_COST_PER_ACTION, WEB_INITIATE_CHECKOUT_COST_PER_ACTION, WEB_SUBSCRIBE_COST_PER_ACTION, WEB_VIEW_CONTENT_COST_PER_ACTION, WEB_ADD_TO_CART_COST_PER_ACTION, WEB_LEAD_COST_PER_ACTION, WEB_PAGE_VISIT_COST_PER_ACTION, WEB_SEARCH_COST_PER_ACTION, WEB_SIGNUP_COST_PER_ACTION, WEB_VIEW_CATEGORY_COST_PER_ACTION, WEB_WATCH_VIDEO_COST_PER_ACTION, WEB_CHECKOUT_ROAS, WEB_ADD_PAYMENT_INFO_ROAS, WEB_ADD_TO_WISHLIST_ROAS, WEB_INITIATE_CHECKOUT_ROAS, WEB_SUBSCRIBE_ROAS, WEB_VIEW_CONTENT_ROAS, WEB_ADD_TO_CART_ROAS, WEB_LEAD_ROAS, WEB_PAGE_VISIT_ROAS, WEB_SEARCH_ROAS, WEB_SIGNUP_ROAS, WEB_VIEW_CATEGORY_ROAS, WEB_WATCH_VIDEO_ROAS, TOTAL_WEB_CHECKOUT, TOTAL_WEB_ADD_PAYMENT_INFO, TOTAL_WEB_ADD_TO_WISHLIST, TOTAL_WEB_INITIATE_CHECKOUT, TOTAL_WEB_SUBSCRIBE, TOTAL_WEB_VIEW_CONTENT, TOTAL_WEB_ADD_TO_CART, TOTAL_WEB_LEAD, TOTAL_WEB_PAGE_VISIT, TOTAL_WEB_SEARCH, TOTAL_WEB_SIGNUP, TOTAL_WEB_VIEW_CATEGORY, TOTAL_WEB_WATCH_VIDEO, TOTAL_WEB_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ADD_PAYMENT_INFO_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ADD_TO_WISHLIST_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_INITIATE_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_SUBSCRIBE_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_CONTENT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ADD_TO_CART_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_LEAD_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_PAGE_VISIT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_SEARCH_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_SIGNUP_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_CATEGORY_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_WATCH_VIDEO_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_CHECKOUT, TOTAL_WEB_CLICK_ADD_PAYMENT_INFO, TOTAL_WEB_CLICK_ADD_TO_WISHLIST, TOTAL_WEB_CLICK_INITIATE_CHECKOUT, TOTAL_WEB_CLICK_SUBSCRIBE, TOTAL_WEB_CLICK_VIEW_CONTENT, TOTAL_WEB_CLICK_ADD_TO_CART, TOTAL_WEB_CLICK_LEAD, TOTAL_WEB_CLICK_PAGE_VISIT, TOTAL_WEB_CLICK_SEARCH, TOTAL_WEB_CLICK_SIGNUP, TOTAL_WEB_CLICK_VIEW_CATEGORY, TOTAL_WEB_CLICK_WATCH_VIDEO, TOTAL_WEB_CLICK_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_ADD_PAYMENT_INFO_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_ADD_TO_WISHLIST_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_INITIATE_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_SUBSCRIBE_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_VIEW_CONTENT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_ADD_TO_CART_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_LEAD_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_PAGE_VISIT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_SEARCH_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_SIGNUP_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_VIEW_CATEGORY_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_WATCH_VIDEO_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_CHECKOUT, TOTAL_WEB_ENGAGEMENT_ADD_PAYMENT_INFO, TOTAL_WEB_ENGAGEMENT_ADD_TO_WISHLIST, TOTAL_WEB_ENGAGEMENT_INITIATE_CHECKOUT, TOTAL_WEB_ENGAGEMENT_SUBSCRIBE, TOTAL_WEB_ENGAGEMENT_VIEW_CONTENT, TOTAL_WEB_ENGAGEMENT_ADD_TO_CART, TOTAL_WEB_ENGAGEMENT_LEAD, TOTAL_WEB_ENGAGEMENT_PAGE_VISIT, TOTAL_WEB_ENGAGEMENT_SEARCH, TOTAL_WEB_ENGAGEMENT_SIGNUP, TOTAL_WEB_ENGAGEMENT_VIEW_CATEGORY, TOTAL_WEB_ENGAGEMENT_WATCH_VIDEO, TOTAL_WEB_ENGAGEMENT_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_ADD_PAYMENT_INFO_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_ADD_TO_WISHLIST_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_INITIATE_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_SUBSCRIBE_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_VIEW_CONTENT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_ADD_TO_CART_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_LEAD_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_PAGE_VISIT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_SEARCH_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_SIGNUP_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_VIEW_CATEGORY_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_WATCH_VIDEO_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_CHECKOUT, TOTAL_WEB_VIEW_ADD_PAYMENT_INFO, TOTAL_WEB_VIEW_ADD_TO_WISHLIST, TOTAL_WEB_VIEW_INITIATE_CHECKOUT, TOTAL_WEB_VIEW_SUBSCRIBE, TOTAL_WEB_VIEW_VIEW_CONTENT, TOTAL_WEB_VIEW_ADD_TO_CART, TOTAL_WEB_VIEW_LEAD, TOTAL_WEB_VIEW_PAGE_VISIT, TOTAL_WEB_VIEW_SEARCH, TOTAL_WEB_VIEW_SIGNUP, TOTAL_WEB_VIEW_VIEW_CATEGORY, TOTAL_WEB_VIEW_WATCH_VIDEO, TOTAL_WEB_VIEW_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_ADD_PAYMENT_INFO_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_ADD_TO_WISHLIST_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_INITIATE_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_SUBSCRIBE_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_VIEW_CONTENT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_ADD_TO_CART_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_LEAD_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_PAGE_VISIT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_SEARCH_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_SIGNUP_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_VIEW_CATEGORY_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_WATCH_VIDEO_VALUE_IN_MICRO_DOLLAR, INAPP_CHECKOUT_COST_PER_ACTION, INAPP_ADD_PAYMENT_INFO_COST_PER_ACTION, INAPP_ADD_TO_WISHLIST_COST_PER_ACTION, INAPP_INITIATE_CHECKOUT_COST_PER_ACTION, INAPP_SUBSCRIBE_COST_PER_ACTION, INAPP_VIEW_CONTENT_COST_PER_ACTION, INAPP_ADD_TO_CART_COST_PER_ACTION, INAPP_APP_INSTALL_COST_PER_ACTION, INAPP_SEARCH_COST_PER_ACTION, INAPP_SIGNUP_COST_PER_ACTION, TOTAL_OFFLINE_CHECKOUT, TOTAL_OFFLINE_ADD_PAYMENT_INFO, TOTAL_OFFLINE_ADD_TO_WISHLIST, TOTAL_OFFLINE_INITIATE_CHECKOUT, TOTAL_OFFLINE_SUBSCRIBE, TOTAL_OFFLINE_VIEW_CONTENT, TOTAL_OFFLINE_LEAD, TOTAL_OFFLINE_SIGNUP, TOTAL_APP_INSTALL_CONVERSION_RATE, TOTAL_INAPP_APP_INSTALL_CONVERSION_RATE, IDEA_PIN_PRODUCT_TAG_VISIT_1, IDEA_PIN_PRODUCT_TAG_VISIT_2, TOTAL_IDEA_PIN_PRODUCT_TAG_VISIT, LEADS, COST_PER_LEAD, QUIZ_COMPLETED, QUIZ_PIN_RESULT_OPEN, QUIZ_COMPLETION_RATE, SHOWCASE_PIN_CLICKTHROUGH, SHOWCASE_SUBPAGE_CLICKTHROUGH, SHOWCASE_SUBPIN_CLICKTHROUGH, SHOWCASE_SUBPAGE_IMPRESSION, SHOWCASE_SUBPIN_IMPRESSION, SHOWCASE_SUBPAGE_SWIPE_LEFT, SHOWCASE_SUBPAGE_SWIPE_RIGHT, SHOWCASE_SUBPIN_SWIPE_LEFT, SHOWCASE_SUBPIN_SWIPE_RIGHT, SHOWCASE_SUBPAGE_REPIN, SHOWCASE_SUBPIN_REPIN, SHOWCASE_SUBPAGE_CLOSEUP, SHOWCASE_CARD_THUMBNAIL_SWIPE_FORWARD, SHOWCASE_CARD_THUMBNAIL_SWIPE_BACKWARD, SHOWCASE_AVERAGE_SUBPAGE_CLOSEUP_PER_SESSION, TOTAL_CHECKOUT_CONVERSION_RATE, TOTAL_ADD_PAYMENT_INFO_CONVERSION_RATE, TOTAL_ADD_TO_WISHLIST_CONVERSION_RATE, TOTAL_INITIATE_CHECKOUT_CONVERSION_RATE, TOTAL_SUBSCRIBE_CONVERSION_RATE, TOTAL_VIEW_CONTENT_CONVERSION_RATE, TOTAL_VIEW_CATEGORY_CONVERSION_RATE, TOTAL_ADD_TO_CART_CONVERSION_RATE, TOTAL_SIGNUP_CONVERSION_RATE, TOTAL_PAGE_VISIT_CONVERSION_RATE, TOTAL_LEAD_CONVERSION_RATE, TOTAL_CONTACT_CONVERSION_RATE, TOTAL_SCHEDULE_CONVERSION_RATE, TOTAL_FIND_LOCATION_CONVERSION_RATE, TOTAL_CUSTOMIZE_PRODUCT_CONVERSION_RATE, TOTAL_SUBMIT_APPLICATION_CONVERSION_RATE, TOTAL_START_TRIAL_CONVERSION_RATE, TOTAL_APP_OPEN_CONVERSION_RATE, TOTAL_SEARCH_CONVERSION_RATE, TOTAL_WATCH_VIDEO_CONVERSION_RATE, TOTAL_UNKNOWN_CONVERSION_RATE, TOTAL_CUSTOM_CONVERSION_RATE, INAPP_SKAN_APP_INSTALL, INAPP_SKAN_ASSISTED_APP_INSTALL, INAPP_SKAN_APP_INSTALL_COST_PER_ACTION, INAPP_SKAN_APP_INSTALL_CONVERSION_RATE)

### `ReportingTimeZone`

Specify the timezone to be applied for the reporting.

Type: string enum(PINTEREST_TIME_ZONE, AD_ACCOUNT_TIME_ZONE)

### `AdCollectionsHeaderType`

Collections ad header type for ads

Type: string enum(SHOP_THIS_COLLECTION, EXPLORE_THIS_COLLECTION, NO_HEADER, None)

### `AdDisapprovalReasons`

ad disapproval reasons

Type: string enum(HASHTAGS, PROMOTIONS_AND_PRICES, TARGETING, LANDING_PAGE, CAPS_AND_SYMBOLS, SHOCKING, WEIGHT_LOSS, PROHIBITED_PRODUCT, AUTHENTICITY, NUDITY, CONFUSING_DESIGN, URGENCY, RATINGS, APP, ALCOHOL, CONTESTS, POLITICAL, OTHER, IMAGE, NAR, INCONSISTENT, CLICKBAIT, NO_DESCRIPTION, LOW_QUALITY, EXAGGERATED_CLAIMS, PINTEREST_BRAND, ALCOHOL_NO_SALE, LANDING_PAGE_SPEED, LANDING_PAGE_HARDWALL, LANDING_PAGE_BROKEN, LANDING_PAGE_QUALITY, OUT_OF_STOCK, IMAGE_LOW_QUALITY, IMAGE_BUSY, IMAGE_POORLY_EDITED, IMAGE_BEFORE_AFTER, UGC, FAKE_BUTTONS, WEAPONS, SENSITIVE, UNACCEPTABLE_BUSINESS, SUSPICIOUS_CLAIMS, PHARMA, SUSPICIOUS_SUPPLEMENTS, ILLEGAL_RECREATIONAL_DRUG, LOW_QUALITY_LANDING_PAGE, RESTRICTED_HEALTHCARE, INCONSISTENT_LANG_FR)

### `AdReviewStatus`

Ad review status

Type: string enum(OTHER, PENDING, REJECTED, APPROVED)

### `CartingPlatformType`

The vendor platform type of the carting ad. 1 for MIKMAK, 2 for PEAR.

Type: integer

### `CartingProduct`

| Field | Type | Required | Description |
|---|---|---|---|
| carting_product_id | string | yes | the internal Pinterest carting product id (different from industry product id) |
| display_preferred_retailers_only | boolean |  | Whether to display only the preferred retailers for the carting product |
| display_product_price | boolean |  | Whether to display the price for the carting product |
| preferred_retailers | array<`CartingRetailer`> |  | A sorted array of preferred retailers for the carting product |
| randomize_preferred_retailers | boolean |  | Whether to randomize preferred retailers for the carting product |

### `CreativeType`

Ad creative type enum.
**Note:** SHOP_THE_PIN has been deprecated. Please use COLLECTION instead.

Type: string enum(REGULAR, VIDEO, SHOPPING, CAROUSEL, MAX_VIDEO, SHOP_THE_PIN, COLLECTION, IDEA, SHOWCASE, QUIZ, COLLAGE, MAX_WIDTH_REGULAR_COLLECTION, MAX_WIDTH_VIDEO_COLLECTION, APP, CTV_VIDEO, SEARCH_TEXT_AD)

### `CustomizableCTAType`

Select a call to action (CTA) to display below your ad. Available only for ads with direct links enabled. CTA options for consideration and conversion campaigns are LEARN_MORE, SHOP_NOW, BOOK_NOW, SIGN_UP, VISIT_SITE, BUY_NOW, GET_OFFER, ORDER_NOW, ADD_TO_CART (for conversion campaigns with add to cart conversion events only)

Type: string enum(GET_OFFER, LEARN_MORE, ORDER_NOW, SHOP_NOW, SIGN_UP, SUBSCRIBE, BUY_NOW, CONTACT_US, GET_QUOTE, VISIT_SITE, APPLY_NOW, BOOK_NOW, REQUEST_DEMO, REGISTER_NOW, FIND_A_DEALER, ADD_TO_CART, WATCH_NOW, READ_MORE, BUY_TICKETS, DONATE_NOW, DOWNLOAD, EXPLORE_MORE, FIND_A_LOCATION, FIND_RETAILERS, GET_DEAL, GET_RECIPE, GET_SHOWTIMES, ON_SALE, PLAY_GAME, TRY_IT, TAKE_A_PEEK, INSTALL_APP, SHOP_NEARBY_TODAY, FIND_IT_NEAR_YOU, VISIT_SHOWROOM, TEST_DRIVE_NEAR_YOU, REQUEST_A_QUOTE, RESERVE_TABLE, SEE_IN_STORE_OFFERS, None)

### `DisclosureType`

Type of information in the page referenced by `disclosure_url`, provided either by the Food and Drug Administration (FDA) or the manufacturer.

Type: string enum(NO_DISCLOSURE, PRESCRIBING_INFORMATION, PRESCRIBING_INFORMATION_BOX_WARNING, IMPORTANT_SAFETY_INFO, MED_GUIDE, PATIENT_INFORMATION, None)

### `GridClickType`

Where a user is taken after clicking on an ad in grid.

**Note:**  This parameter is read-only and is set to `DIRECT_TO_DESTINATION` by default for direct links supported ads. `grid_click_type` values provided will be ignored.

Type: string enum(CLOSEUP, DIRECT_TO_DESTINATION)

### `PinPromotionSummaryStatus`

Summary status for pin promotions

Type: string enum(APPROVED, PAUSED, PENDING, REJECTED, ADVERTISER_DISABLED, ARCHIVED, DRAFT, DELETED_DRAFT)

### `QuizPinData`

This field includes all quiz data including questions, options, and results.

| Field | Type | Required | Description |
|---|---|---|---|
| questions | array<`QuizPinQuestion`> |  |  |
| results | array<`QuizPinResult`> |  |  |
| tie_breaker_custom_result | `QuizPinResult` |  |  |
| tie_breaker_type | `TieBreakerType` |  |  |

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

### `AdCreate`

Resource create operation model.

| Field | Type | Required | Description |
|---|---|---|---|
| ad_group_id | string | yes | ID of the ad group that contains the ad. |
| android_deep_link | string |  | Deep link URL for Android devices. _(nullable)_ |
| carousel_android_deep_links | array<string> |  | Comma-separated deep links for the carousel pin on Android. _(nullable)_ |
| carousel_destination_urls | array<string> |  | Comma-separated destination URLs for the carousel pin to promote. _(nullable)_ |
| carousel_ios_deep_links | array<string> |  | Comma-separated deep links for the carousel pin on iOS. _(nullable)_ |
| click_tracking_url | string |  | Tracking url for the ad clicks. _(nullable)_ |
| collection_items_destination_url_template | string |  | Destination URL template for all items within a collections drawer. _(nullable)_ |
| collections_header_type | `AdCollectionsHeaderType` |  | _(nullable)_ |
| creative_type | `CreativeType` | yes |  |
| cta_types | array<`CustomizableCTAType`> |  | List of CTA types. |
| customizable_cta_type | `CustomizableCTAType` |  |  |
| destination_url | string |  | Destination URL. _(nullable)_ |
| disclosure_type | `DisclosureType` |  |  |
| disclosure_url | string |  | URL for a page that provides disclosures about a pharmaceutical product, such as potential side effects. Make sure the URL takes the user directly to the disclosure content and the referenced site is secure. _(nullable)_ |
| grid_click_type | `GridClickType` |  |  |
| ios_deep_link | string |  | Deep link URL for iOS devices. _(nullable)_ |
| is_carting | boolean |  | Is the ad a carting/WTB ad? |
| is_collage_accepted_terms | boolean |  | Whether the advertiser has accepted the terms and conditions for collage ad. |
| is_collage_single_destination | boolean |  | Whether the collage ad has a single destination url override. |
| is_dynamic_cta | boolean |  | Whether the ad uses dynamic CTA selection. |
| is_pin_deleted | boolean |  | Is original pin deleted? |
| is_removable | boolean |  | Is pin repinnable? |
| lead_form_id | string |  | Lead form ID for lead ad generation. _(nullable)_ |
| name | string |  | Name of the ad - 255 chars max. _(nullable)_ |
| pin_id | string | yes | Pin ID. This field may only be updated for draft ads. |
| quiz_pin_data | `QuizPinData` |  | Before creating a quiz ad, you must create an organic Pin using POST/Create Pin for each result in the quiz. Quiz ads cannot be saved by a Pinner. Quiz ad results can be saved. _(nullable)_ |
| status | `EntityStatus` |  |  |
| tracking_urls | `TrackingUrls` |  |  |
| view_tracking_url | string |  | Tracking URL for ad impressions. _(nullable)_ |

### `AdBatchUpdate`

| Field | Type | Required | Description |
|---|---|---|---|
| ad_group_id | string |  | ID of the ad group that contains the ad. |
| android_deep_link | string |  | Deep link URL for Android devices. _(nullable)_ |
| carousel_android_deep_links | array<string> |  | Comma-separated deep links for the carousel pin on Android. _(nullable)_ |
| carousel_destination_urls | array<string> |  | Comma-separated destination URLs for the carousel pin to promote. _(nullable)_ |
| carousel_ios_deep_links | array<string> |  | Comma-separated deep links for the carousel pin on iOS. _(nullable)_ |
| click_tracking_url | string |  | Tracking url for the ad clicks. _(nullable)_ |
| collection_items_destination_url_template | string |  | Destination URL template for all items within a collections drawer. _(nullable)_ |
| collections_header_type | `AdCollectionsHeaderType` |  | _(nullable)_ |
| creative_type | `CreativeType` |  |  |
| cta_types | array<`CustomizableCTAType`> |  | List of CTA types. |
| customizable_cta_type | `CustomizableCTAType` |  |  |
| destination_url | string |  | Destination URL. _(nullable)_ |
| disclosure_type | `DisclosureType` |  |  |
| disclosure_url | string |  | URL for a page that provides disclosures about a pharmaceutical product, such as potential side effects. Make sure the URL takes the user directly to the disclosure content and the referenced site is secure. _(nullable)_ |
| grid_click_type | `GridClickType` |  |  |
| id | string | yes | The ID of this ad. _(maxLength 18)_ |
| ios_deep_link | string |  | Deep link URL for iOS devices. _(nullable)_ |
| is_carting | boolean |  | Is the ad a carting/WTB ad? |
| is_collage_accepted_terms | boolean |  | Whether the advertiser has accepted the terms and conditions for collage ad. |
| is_collage_single_destination | boolean |  | Whether the collage ad has a single destination url override. |
| is_dynamic_cta | boolean |  | Whether the ad uses dynamic CTA selection. |
| is_pin_deleted | boolean |  | Is original pin deleted? |
| is_removable | boolean |  | Is pin repinnable? |
| lead_form_id | string |  | Lead form ID for lead ad generation. _(nullable)_ |
| name | string |  | Name of the ad - 255 chars max. _(nullable)_ |
| pin_id | string |  | Pin ID. This field may only be updated for draft ads. |
| quiz_pin_data | `QuizPinData` |  | Before creating a quiz ad, you must create an organic Pin using POST/Create Pin for each result in the quiz. Quiz ads cannot be saved by a Pinner. Quiz ad results can be saved. _(nullable)_ |
| status | `EntityStatus` |  |  |
| tracking_urls | `TrackingUrls` |  |  |
| view_tracking_url | string |  | Tracking URL for ad impressions. _(nullable)_ |

### `AdBatchItem`

| Field | Type | Required | Description |
|---|---|---|---|
| data | `Ad` |  |  |
| exceptions | `Pinterest.Lib.Error` |  |  |

### `AdPreviewShopping`

Ad preview from a catalog product group (shopping).

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_product_group_id | string | yes | Catalog Product Group Id. |
| creative_type | `AdShoppingPreviewCreativeType` | yes | Ad format of the shopping ad preview. |
| customizable_cta_type | `CustomizableCTAType` |  | Select a call to action (CTA) to display below your ad. CTA options for catalog sales campaigns are `SHOP_NOW`, `BOOK_NOW`, `ON_SALE`, `GET_DEAL`, `BUY_ONLINE_PICKUP_IN_STORE` |
| hero_image_title | string |  | Title displayed below ad. |
| hero_image_url | string |  | Hero image URL. |
| hero_pin_id | string |  | Pin id for the hero image. When creative type is COLLECTION, either hero_pin_id or (hero_image_url, hero_image_title) is required. |
| image_tag | string |  | Multi image template tag. |
| item_id | string |  | Item id for product to preview standard shopping ads, optional and only applicable when creative type is SHOPPING. |
| preferred_media_type | `BasePreferredMediaType` |  | Preferred media type. |
| show_promotion | boolean |  | Include promotion data in preview when available on catalog item. Defaults to false. |
| video_tag | string |  | Multi video template tag, image_tag and video_tag are mutual exclusive. |

### `AdPreviewSourceImage`

Ad preview source from an image URL.

| Field | Type | Required | Description |
|---|---|---|---|
| image_url | string | yes | Image URL. |
| promotion_id | string |  | Promotion id for the ad to preview, optional and only applicable when creating ad preview for an existing promotion. |
| title | string | yes | Title displayed below ad. |

### `AdPreviewSourcePinId`

Ad preview source from an existing Pin.

| Field | Type | Required | Description |
|---|---|---|---|
| creative_type | `AdPinPreviewCreativeType` |  | Creative type of the ad preview. |
| pin_id | string | yes | Pin ID. |

### `MetricsResponseDataItems`

| Field | Type | Required | Description |
|---|---|---|---|
| metrics | object | yes | Metrics object containing the requested metric columns and their values. The keys are metric names (e.g., AD_GROUP_ID, DATE, SPEND_IN_DOLLAR) and values are the metric values (strings or numbers). |
| targeting_type | string | yes | The targeting type for this data item (e.g., KEYWORD, APPTYPE, GENDER) |
| targeting_value | string | yes | The targeting value for this data item (e.g., 'christmas decor ideas', 'iphone', 'female') |

### `CartingRetailer`

| Field | Type | Required | Description |
|---|---|---|---|
| retailer_id | string | yes | Unique identifier for the retailer |
| retailer_name | string | yes | Name of the retailer |

### `QuizPinQuestion`

A specific quiz inquiry.

| Field | Type | Required | Description |
|---|---|---|---|
| options | array<`QuizPinOption`> |  |  |
| question_id | number |  |  |
| question_text | string |  |  |

### `QuizPinResult`

The result, and link out, based on the user’s choice.

| Field | Type | Required | Description |
|---|---|---|---|
| android_deep_link | string |  |  |
| destination_url | string |  |  |
| ios_deep_link | string |  |  |
| organic_pin_id | string |  |  |
| result_id | number |  |  |

### `TieBreakerType`

Quiz ad tie breaker type, default is RANDOM

Type: string enum(RANDOM, CUSTOM)

### `AdShoppingPreviewCreativeType`

Type: string enum(SHOPPING, COLLECTION, CAROUSEL, MAX_WIDTH_COLLECTION)

### `BasePreferredMediaType`

Type: string enum(VIDEO, IMAGE)

### `AdPinPreviewCreativeType`

Type: string enum(SHOPPING, COLLECTION, MAX_VIDEO, MAX_WIDTH_VIDEO_COLLECTION, MAX_WIDTH_REGULAR_COLLECTION, CTV_VIDEO)

### `QuizPinOption`

This field contains multiple options to a quiz question.

| Field | Type | Required | Description |
|---|---|---|---|
| id | number |  |  |
| text | string |  |  |

