# Insertion Orders

> Source: Display & Video 360 API v4 REST Discovery document (https://displayvideo.googleapis.com/$discovery/rest?version=v4, revision 20261117); reference https://developers.google.com/display-video/api/reference/rest. Fetched 2026-11-19.

Used by koddi-offsite via: `NewAdvertisersInsertionOrdersService` Get/List/Create/Patch (`adgroup.go`).

---

## advertisers.insertionOrders.get

`GET https://displayvideo.googleapis.com/v4/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}`

Gets an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string (int64) | yes | Required. The ID of the advertiser this insertion order belongs to. |
| insertionOrderId | path | string (int64) | yes | Required. The ID of the insertion order to fetch. |

**Response**: `InsertionOrder`

---

## advertisers.insertionOrders.list

`GET https://displayvideo.googleapis.com/v4/advertisers/{+advertiserId}/insertionOrders`

Lists insertion orders in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, insertion orders with `ENTITY_STATUS_ARCHIVED` will not be included in the results.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string (int64) | yes | Required. The ID of the advertiser to list insertion orders for. |
| pageToken | query | string |  | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListInsertionOrders` method. If not specified, the first page of results will be returned. |
| filter | query | string |  | Allows filtering by insertion order fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. Supported fields: * `campaignId` * `displayName` * `entityStatus` * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Examples: * All insertion orders under a campaign: `campaignId="1234"` * All `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED` insertion orders under an advertiser: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED")` * All insertion orders with an update time less than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime<="2020-11-04T18:54:47Z"` * All insertion orders with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |
| orderBy | query | string |  | Field by which to sort the list. Acceptable values are: * "displayName" (default) * "entityStatus" * "updateTime" The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`. |
| pageSize | query | integer (int32) |  | Requested page size. Must be between `1` and `100`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |

**Response**: `ListInsertionOrdersResponse`

---

## advertisers.insertionOrders.create

`POST https://displayvideo.googleapis.com/v4/advertisers/{+advertiserId}/insertionOrders`

Creates a new insertion order. Returns the newly created insertion order if successful.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string (int64) | yes | Output only. The unique ID of the advertiser the insertion order belongs to. |

**Request body**: `InsertionOrder`

**Response**: `InsertionOrder`

---

## advertisers.insertionOrders.delete

`DELETE https://displayvideo.googleapis.com/v4/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}`

Deletes an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist. The insertion order should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string (int64) | yes | The ID of the advertiser this insertion order belongs to. |
| insertionOrderId | path | string (int64) | yes | The ID of the insertion order to delete. |

**Response**: `Empty`

---

## advertisers.insertionOrders.patch

`PATCH https://displayvideo.googleapis.com/v4/advertisers/{+advertiserId}/insertionOrders/{+insertionOrderId}`

Updates an existing insertion order. Returns the updated insertion order if successful.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string (int64) | yes | Output only. The unique ID of the advertiser the insertion order belongs to. |
| insertionOrderId | path | string (int64) | yes | Output only. The unique ID of the insertion order. Assigned by the system. |
| updateMask | query | string (google-fieldmask) |  | Required. The mask to control which fields to update. |

**Request body**: `InsertionOrder`

**Response**: `InsertionOrder`

---

## Schemas

### `InsertionOrder`

A single insertion order.

| Field | Type | Description |
|---|---|---|
| reservationType | string enum(RESERVATION_TYPE_UNSPECIFIED, RESERVATION_TYPE_NOT_GUARANTEED, RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED, RESERVATION_TYPE_TAG_GUARANTEED, RESERVATION_TYPE_PETRA_VIRAL, RESERVATION_TYPE_INSTANT_RESERVE) | Output only. The reservation type of the insertion order. Values: RESERVATION_TYPE_UNSPECIFIED - Reservation type value is not specified or is unknown in this version.; RESERVATION_TYPE_NOT_GUARANTEED - Not created through a guaranteed inventory source.; RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED - Created through a programmatic guaranteed inventory source.; RESERVATION_TYPE_TAG_GUARANTEED - Created through a tag guaranteed inventory source.; RESERVATION_TYPE_PETRA_VIRAL - Created through a Petra inventory source. Only applicable to YouTube and Partners line items.; RESERVATION_TYPE_INSTANT_RESERVE - Created with an instant quote. Only applicable to YouTube and partners line items. |
| budget | `InsertionOrderBudget` | Required. The budget allocation settings of the insertion order. |
| partnerCosts | array<`PartnerCost`> | Optional. The partner costs associated with the insertion order. If absent or empty in CreateInsertionOrder method, the newly created insertion order will inherit partner costs from the partner settings. |
| updateTime | string (google-datetime) | Output only. The timestamp when the insertion order was last updated. Assigned by the system. |
| bidStrategy | `BiddingStrategy` | Optional. The bidding strategy of the insertion order. By default, fixed_bid is set. If the budget field automationType is set to `INSERTION_ORDER_AUTOMATION_TYPE_BUDGET` or `INSERTION_ORDER_AUTOMATION_TYPE_BID_BUDGET`, the insertion order will impose this bidding strategy on its line items. If an imposed bidding strategy is not compatible with a line item's enableOptimizedTargeting setting, the optimized targeting setting will be updated. |
| integrationDetails | `IntegrationDetails` | Optional. Additional integration details of the insertion order. |
| name | string | Output only. The resource name of the insertion order. |
| frequencyCap | `FrequencyCap` | Required. The frequency capping setting of the insertion order. |
| kpi | `Kpi` | Required. The key performance indicator (KPI) of the insertion order. This is represented as referred to as the "Goal" in the Display & Video 360 interface. |
| insertionOrderType | string enum(INSERTION_ORDER_TYPE_UNSPECIFIED, RTB, OVER_THE_TOP) | Optional. The type of insertion order. If this field is unspecified in creation, the value defaults to `RTB`. Values: INSERTION_ORDER_TYPE_UNSPECIFIED - Insertion order type is not specified or is unknown.; RTB - Real-time bidding.; OVER_THE_TOP - Over-the-top. |
| advertiserId | string (int64) | Output only. The unique ID of the advertiser the insertion order belongs to. |
| campaignId | string (int64) | Required. Immutable. The unique ID of the campaign that the insertion order belongs to. |
| entityStatus | string enum(ENTITY_STATUS_UNSPECIFIED, ENTITY_STATUS_ACTIVE, ENTITY_STATUS_ARCHIVED, ENTITY_STATUS_DRAFT, ENTITY_STATUS_PAUSED, ENTITY_STATUS_SCHEDULED_FOR_DELETION) | Required. Controls whether or not the insertion order can spend its budget and bid on inventory. * For CreateInsertionOrder method, only `ENTITY_STATUS_DRAFT` is allowed. To activate an insertion order, use UpdateInsertionOrder method and update the status to `ENTITY_STATUS_ACTIVE` after creation. * An insertion order cannot be changed back to `ENTITY_STATUS_DRAFT` status from any other status. * An insertion order cannot be set to `ENTITY_STATUS_ACTIVE` if its parent campaign is not active. Values: ENTITY_STATUS_UNSPECIFIED - Default value when status is not specified or is unknown in this version.; ENTITY_STATUS_ACTIVE - The entity is enabled to bid and spend budget.; ENTITY_STATUS_ARCHIVED - The entity is archived. Bidding and budget spending are disabled. An entity can be deleted after archived. Deleted entities cannot be retrieved.; ENTITY_STATUS_DRAFT - The entity is under draft. Bidding and budget spending are disabled.; ENTITY_STATUS_PAUSED - Bidding and budget spending are paused for the entity.; ENTITY_STATUS_SCHEDULED_FOR_DELETION - The entity is scheduled for deletion. |
| insertionOrderId | string (int64) | Output only. The unique ID of the insertion order. Assigned by the system. |
| pacing | `Pacing` | Required. The budget spending speed setting of the insertion order. pacing_type `PACING_TYPE_ASAP` is not compatible with pacing_period `PACING_PERIOD_FLIGHT`. |
| displayName | string | Required. The display name of the insertion order. Must be UTF-8 encoded with a maximum size of 240 bytes. |
| optimizationObjective | string enum(OPTIMIZATION_OBJECTIVE_UNSPECIFIED, CONVERSION, CLICK, BRAND_AWARENESS, CUSTOM, NO_OBJECTIVE) | Required. The optimization objective of the insertion order. Values: OPTIMIZATION_OBJECTIVE_UNSPECIFIED - Type value is not specified or is unknown in this version.; CONVERSION - Prioritize impressions that increase sales and conversions.; CLICK - Prioritize impressions that increase website traffic, apps, app stores.; BRAND_AWARENESS - Prioritize impressions of specific quality.; CUSTOM - Objective is defined by the assigned custom bidding algorithm.; NO_OBJECTIVE - Objective is not defined. Any KPI or bidding strategy can be used. |

### `ListInsertionOrdersResponse`

| Field | Type | Description |
|---|---|---|
| insertionOrders | array<`InsertionOrder`> | The list of insertion orders. This list will be absent if empty. |
| nextPageToken | string | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListInsertionOrders` method to retrieve the next page of results. |

### `Empty`

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

Type: object

### `BiddingStrategy`

Settings that control the bid strategy. Bid strategy determines the bid price.

| Field | Type | Description |
|---|---|---|
| fixedBid | `FixedBidStrategy` | A strategy that uses a fixed bid price. |
| youtubeAndPartnersBid | `YoutubeAndPartnersBiddingStrategy` | A bid strategy used by YouTube and Partners resources. It can only be used for a YouTube and Partners line item or ad group entity. |
| demandGenBid | `DemandGenBiddingStrategy` | A bid strategy used by Demand Gen resources. It can only be used for a Demand Gen line item or ad group entity. |
| maximizeSpendAutoBid | `MaximizeSpendBidStrategy` | A strategy that automatically adjusts the bid to optimize to your performance goal while spending the full budget. At insertion order level, the markup_type of line items cannot be set to `PARTNER_REVENUE_MODEL_MARKUP_TYPE_CPM`. In addition, the performance_goal_type value assigned to an insertion order determines the possible line_item_type values available for line items under that insertion order: * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA`, `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC`, and `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED` only allow for `LINE_ITEM_TYPE_DISPLAY_DEFAULT` or `LINE_ITEM_TYPE_VIDEO_DEFAULT` line items. * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA` and `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN` only allow for `LINE_ITEM_TYPE_VIDEO_DEFAULT` line items. * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_REACH` only allows for `LINE_ITEM_TYPE_VIDEO_OVER_THE_TOP` line items. |
| performanceGoalAutoBid | `PerformanceGoalBidStrategy` | A strategy that automatically adjusts the bid to meet or beat a specified performance goal. It is to be used only for a line item entity. |

### `FrequencyCap`

Settings that control the number of times a user may be shown with the same ad during a given time period.

| Field | Type | Description |
|---|---|---|
| timeUnit | string enum(TIME_UNIT_UNSPECIFIED, TIME_UNIT_LIFETIME, TIME_UNIT_MONTHS, TIME_UNIT_WEEKS, TIME_UNIT_DAYS, TIME_UNIT_HOURS, TIME_UNIT_MINUTES) | The time unit in which the frequency cap will be applied. Required when unlimited is `false`. Values: TIME_UNIT_UNSPECIFIED - Time unit value is not specified or is unknown in this version.; TIME_UNIT_LIFETIME - The frequency cap will be applied to the whole life time of the line item.; TIME_UNIT_MONTHS - The frequency cap will be applied to a number of months.; TIME_UNIT_WEEKS - The frequency cap will be applied to a number of weeks.; TIME_UNIT_DAYS - The frequency cap will be applied to a number of days.; TIME_UNIT_HOURS - The frequency cap will be applied to a number of hours.; TIME_UNIT_MINUTES - The frequency cap will be applied to a number of minutes. |
| unlimited | boolean | Whether unlimited frequency capping is applied. When this field is set to `true`, the remaining frequency cap fields are not applicable. |
| maxImpressions | integer (int32) | The maximum number of times a user may be shown the same ad during this period. Must be greater than 0. Required when unlimited is `false` and max_views is not set. |
| timeUnitCount | integer (int32) | The number of time_unit the frequency cap will last. Required when unlimited is `false`. The following restrictions apply based on the value of time_unit: * `TIME_UNIT_MONTHS` - must be 1 * `TIME_UNIT_WEEKS` - must be between 1 and 4 * `TIME_UNIT_DAYS` - must be between 1 and 6 * `TIME_UNIT_HOURS` - must be between 1 and 23 * `TIME_UNIT_MINUTES` - must be between 1 and 59 |
| maxViews | integer (int32) | Optional. The maximum number of times a user may click-through or fully view an ad during this period until it is no longer served to them. Must be greater than 0. Only applicable to YouTube and Partners resources. Required when unlimited is `false` and max_impressions is not set. |

### `InsertionOrderBudget`

Settings that control how insertion order budget is allocated.

| Field | Type | Description |
|---|---|---|
| budgetUnit | string enum(BUDGET_UNIT_UNSPECIFIED, BUDGET_UNIT_CURRENCY, BUDGET_UNIT_IMPRESSIONS) | Required. Immutable. The budget unit specifies whether the budget is currency based or impression based. Values: BUDGET_UNIT_UNSPECIFIED - Type value is not specified or is unknown in this version.; BUDGET_UNIT_CURRENCY - Budgeting in currency amounts.; BUDGET_UNIT_IMPRESSIONS - Budgeting in impression amounts. |
| automationType | string enum(INSERTION_ORDER_AUTOMATION_TYPE_UNSPECIFIED, INSERTION_ORDER_AUTOMATION_TYPE_BUDGET, INSERTION_ORDER_AUTOMATION_TYPE_NONE, INSERTION_ORDER_AUTOMATION_TYPE_BID_BUDGET) | Optional. The type of automation used to manage bid and budget for the insertion order. If this field is unspecified in creation, the value defaults to `INSERTION_ORDER_AUTOMATION_TYPE_NONE`. Values: INSERTION_ORDER_AUTOMATION_TYPE_UNSPECIFIED - Insertion order automation option is not specified or is unknown in this version.; INSERTION_ORDER_AUTOMATION_TYPE_BUDGET - Automatic budget allocation. Allow the system to automatically shift budget to owning line items to optimize performance defined by kpi. No automation on bid settings.; INSERTION_ORDER_AUTOMATION_TYPE_NONE - No automation of bid or budget on insertion order level. Bid and budget must be manually configured at the line item level.; INSERTION_ORDER_AUTOMATION_TYPE_BID_BUDGET - Allow the system to automatically adjust bids and shift budget to owning line items to optimize performance defined by bid_strategy. |
| budgetSegments | array<`InsertionOrderBudgetSegment`> | Required. The list of budget segments. Use a budget segment to specify a specific budget for a given period of time an insertion order is running. |

### `IntegrationDetails`

Integration details of an entry.

| Field | Type | Description |
|---|---|---|
| integrationCode | string | An external identifier to be associated with the entry. The integration code will show up together with the entry in many places in the system, for example, reporting. Must be UTF-8 encoded with a length of no more than 500 characters. |
| details | string | Additional details of the entry in string format. Must be UTF-8 encoded with a length of no more than 1000 characters. |

### `Kpi`

Settings that control the key performance indicator, or KPI, of an insertion order.

| Field | Type | Description |
|---|---|---|
| kpiString | string | A KPI string, which can be empty. Must be UTF-8 encoded with a length of no more than 100 characters. Applicable when kpi_type is `KPI_TYPE_OTHER`. |
| kpiAmountMicros | string (int64) | The goal amount, in micros of the advertiser's currency. Applicable when kpi_type is one of: * `KPI_TYPE_CPM` * `KPI_TYPE_CPC` * `KPI_TYPE_CPA` * `KPI_TYPE_CPIAVC` * `KPI_TYPE_VCPM` For example: 1500000 represents 1.5 standard units of the currency. |
| kpiPercentageMicros | string (int64) | The decimal representation of the goal percentage in micros. Applicable when kpi_type is one of: * `KPI_TYPE_CTR` * `KPI_TYPE_VIEWABILITY` * `KPI_TYPE_CLICK_CVR` * `KPI_TYPE_IMPRESSION_CVR` * `KPI_TYPE_VTR` * `KPI_TYPE_AUDIO_COMPLETION_RATE` * `KPI_TYPE_VIDEO_COMPLETION_RATE` For example: 70000 represents 7% (decimal 0.07). |
| kpiAlgorithmId | string (int64) | Optional. Custom Bidding Algorithm ID associated with KPI_CUSTOM_IMPRESSION_VALUE_OVER_COST. This field is ignored if the proper KPI is not selected. |
| kpiType | string enum(KPI_TYPE_UNSPECIFIED, KPI_TYPE_CPM, KPI_TYPE_CPC, KPI_TYPE_CPA, KPI_TYPE_CTR, KPI_TYPE_VIEWABILITY, KPI_TYPE_CPIAVC, KPI_TYPE_CPE, KPI_TYPE_CPV, KPI_TYPE_CLICK_CVR, KPI_TYPE_IMPRESSION_CVR, KPI_TYPE_VCPM, KPI_TYPE_VTR, KPI_TYPE_AUDIO_COMPLETION_RATE, KPI_TYPE_VIDEO_COMPLETION_RATE, KPI_TYPE_CPCL, KPI_TYPE_CPCV, KPI_TYPE_TOS10, KPI_TYPE_MAXIMIZE_PACING, KPI_TYPE_CUSTOM_IMPRESSION_VALUE_OVER_COST, KPI_TYPE_OTHER) | Required. The type of KPI. Values: KPI_TYPE_UNSPECIFIED - KPI type is not specified or is unknown in this version.; KPI_TYPE_CPM - The KPI is CPM (cost per mille).; KPI_TYPE_CPC - The KPI is CPC (cost per click).; KPI_TYPE_CPA - The KPI is CPA (cost per action).; KPI_TYPE_CTR - The KPI is CTR (click-through rate) percentage.; KPI_TYPE_VIEWABILITY - The KPI is Viewability percentage.; KPI_TYPE_CPIAVC - The KPI is CPIAVC (cost per impression audible and visible at completion).; KPI_TYPE_CPE - The KPI is CPE (cost per engagement).; KPI_TYPE_CPV - The KPI is set in CPV (cost per view).; KPI_TYPE_CLICK_CVR - The KPI is click conversion rate (conversions per click) percentage.; KPI_TYPE_IMPRESSION_CVR - The KPI is impression conversion rate (conversions per impression) percentage.; KPI_TYPE_VCPM - The KPI is VCPM (cost per thousand viewable impressions).; KPI_TYPE_VTR - The KPI is YouTube view rate (YouTube views per impression) percentage.; KPI_TYPE_AUDIO_COMPLETION_RATE - The KPI is audio completion rate (complete audio listens per impression) percentage.; KPI_TYPE_VIDEO_COMPLETION_RATE - The KPI is video completion rate (complete video views per impression) percentage.; KPI_TYPE_CPCL - The KPI is set in CPCL (cost per complete audio listen).; KPI_TYPE_CPCV - The KPI is set in CPCV (cost per complete video view).; KPI_TYPE_TOS10 - The KPI is set in rate of time on screen 10+ seconds (Percentage of measurable, non-skippable impressions that were on the screen for at least 10 seconds).; KPI_TYPE_MAXIMIZE_PACING - The KPI is set to maximize brand impact while prioritizing spending the full budget.; KPI_TYPE_CUSTOM_IMPRESSION_VALUE_OVER_COST - The KPI is set in custom impression value divided by cost.; KPI_TYPE_OTHER - The KPI is some other value. |

### `Pacing`

Settings that control the rate at which a budget is spent.

| Field | Type | Description |
|---|---|---|
| dailyMaxMicros | string (int64) | Maximum currency amount to spend every day in micros of advertiser's currency. Applicable when the budget is currency based. Must be greater than 0. For example, for 1.5 standard unit of the currency, set this field to 1500000. The value assigned will be rounded to whole billable units for the relevant currency by the following rules: any positive value less than a single billable unit will be rounded up to one billable unit and any value larger than a single billable unit will be rounded down to the nearest billable value. For example, if the currency's billable unit is 0.01, and this field is set to 10257770, it will round down to 10250000, a value of 10.25. If set to 505, it will round up to 10000, a value of 0.01. |
| pacingType | string enum(PACING_TYPE_UNSPECIFIED, PACING_TYPE_AHEAD, PACING_TYPE_ASAP, PACING_TYPE_EVEN) | Required. The type of pacing that defines how the budget amount will be spent across the pacing_period. `PACING_TYPE_ASAP` is not compatible with pacing_period `PACING_PERIOD_FLIGHT` for insertion orders. Values: PACING_TYPE_UNSPECIFIED - Pacing mode value is not specified or is unknown in this version.; PACING_TYPE_AHEAD - Only applicable to `PACING_PERIOD_FLIGHT` pacing period. Ahead pacing attempts to spend faster than evenly, to make sure the entire budget is spent by the end of the flight.; PACING_TYPE_ASAP - Spend all of pacing budget amount as quick as possible.; PACING_TYPE_EVEN - Spend a consistent budget amount every period of time. |
| dailyMaxImpressions | string (int64) | Maximum number of impressions to serve every day. Applicable when the budget is impression based. Must be greater than 0. |
| pacingPeriod | string enum(PACING_PERIOD_UNSPECIFIED, PACING_PERIOD_DAILY, PACING_PERIOD_FLIGHT) | Required. The time period in which the pacing budget will be spent. When automatic budget allocation is enabled at the insertion order via automationType, this field is output only and defaults to `PACING_PERIOD_FLIGHT`. Values: PACING_PERIOD_UNSPECIFIED - Period value is not specified or is unknown in this version.; PACING_PERIOD_DAILY - The pacing setting will be applied on daily basis.; PACING_PERIOD_FLIGHT - The pacing setting will be applied to the whole flight duration. |

### `PartnerCost`

Settings that control a partner cost. A partner cost is any type of expense involved in running a campaign, other than the costs of purchasing impressions (which is called the media cost) and using third-party audience segment data (data fee). Some examples of partner costs include the fees for using DV360, a third-party ad server, or a third-party ad serving verification service.

| Field | Type | Description |
|---|---|---|
| feeAmount | string (int64) | The CPM fee amount in micros of advertiser's currency. Applicable when the fee_type is `PARTNER_FEE_TYPE_CPM_FEE`. Must be greater than or equal to 0. For example, for 1.5 standard unit of the advertiser's currency, set this field to 1500000. |
| feePercentageMillis | string (int64) | The media fee percentage in millis (1/1000 of a percent). Applicable when the fee_type is `PARTNER_FEE_TYPE_MEDIA_FEE`. Must be greater than or equal to 0. For example: 100 represents 0.1%. |
| feeType | string enum(PARTNER_COST_FEE_TYPE_UNSPECIFIED, PARTNER_COST_FEE_TYPE_CPM_FEE, PARTNER_COST_FEE_TYPE_MEDIA_FEE) | Required. The fee type for this partner cost. Values: PARTNER_COST_FEE_TYPE_UNSPECIFIED - Value is not specified or is unknown in this version.; PARTNER_COST_FEE_TYPE_CPM_FEE - The partner cost is a fixed CPM fee. Not applicable when the partner cost cost_type is one of: * `PARTNER_COST_TYPE_MEDIA_COST_DATA` * `PARTNER_COST_TYPE_DV360_FEE`.; PARTNER_COST_FEE_TYPE_MEDIA_FEE - The partner cost is a percentage surcharge based on the media cost. Not applicable when the partner cost_type is one of: * `PARTNER_COST_TYPE_SHOP_LOCAL` * `PARTNER_COST_TYPE_TRUST_METRICS` * `PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_VIDEO` * `PARTNER_COST_TYPE_MOAT_VIDEO`. |
| invoiceType | string enum(PARTNER_COST_INVOICE_TYPE_UNSPECIFIED, PARTNER_COST_INVOICE_TYPE_DV360, PARTNER_COST_INVOICE_TYPE_PARTNER) | The invoice type for this partner cost. * Required when cost_type is one of: - `PARTNER_COST_TYPE_PEER39` - `PARTNER_COST_TYPE_DOUBLE_VERIFY` - `PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE`. * Output only for other types. Values: PARTNER_COST_INVOICE_TYPE_UNSPECIFIED - Type value is not specified or is unknown in this version.; PARTNER_COST_INVOICE_TYPE_DV360 - Partner cost is billed through DV360.; PARTNER_COST_INVOICE_TYPE_PARTNER - Partner cost is billed by the partner. |
| costType | string enum(PARTNER_COST_TYPE_UNSPECIFIED, PARTNER_COST_TYPE_ADLOOX, PARTNER_COST_TYPE_ADLOOX_PREBID, PARTNER_COST_TYPE_ADSAFE, PARTNER_COST_TYPE_ADXPOSE, PARTNER_COST_TYPE_AGGREGATE_KNOWLEDGE, PARTNER_COST_TYPE_AGENCY_TRADING_DESK, PARTNER_COST_TYPE_DV360_FEE, PARTNER_COST_TYPE_COMSCORE_VCE, PARTNER_COST_TYPE_DATA_MANAGEMENT_PLATFORM, PARTNER_COST_TYPE_DEFAULT, PARTNER_COST_TYPE_DOUBLE_VERIFY, PARTNER_COST_TYPE_DOUBLE_VERIFY_PREBID, PARTNER_COST_TYPE_EVIDON, PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_VIDEO, PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_PREBID, PARTNER_COST_TYPE_MEDIA_COST_DATA, PARTNER_COST_TYPE_MOAT_VIDEO, PARTNER_COST_TYPE_NIELSEN_DAR, PARTNER_COST_TYPE_SHOP_LOCAL, PARTNER_COST_TYPE_TERACENT, PARTNER_COST_TYPE_THIRD_PARTY_AD_SERVER, PARTNER_COST_TYPE_TRUST_METRICS, PARTNER_COST_TYPE_VIZU, PARTNER_COST_TYPE_CUSTOM_FEE_1, PARTNER_COST_TYPE_CUSTOM_FEE_2, PARTNER_COST_TYPE_CUSTOM_FEE_3, PARTNER_COST_TYPE_CUSTOM_FEE_4, PARTNER_COST_TYPE_CUSTOM_FEE_5, PARTNER_COST_TYPE_SCIBIDS_FEE) | Required. The type of the partner cost. Values: PARTNER_COST_TYPE_UNSPECIFIED - Type value is not specified or is unknown in this version.; PARTNER_COST_TYPE_ADLOOX - The cost is charged for using Scope3 (previously known as Adloox). Billed by the partner.; PARTNER_COST_TYPE_ADLOOX_PREBID - The cost is charged for using Scope3 (previously known as Adloox) Pre-Bid. Billed through DV360.; PARTNER_COST_TYPE_ADSAFE - The cost is charged for using AdSafe. Billed by the partner.; PARTNER_COST_TYPE_ADXPOSE - The cost is charged for using AdExpose. Billed by the partner.; PARTNER_COST_TYPE_AGGREGATE_KNOWLEDGE - The cost is charged for using Aggregate Knowledge. Billed by the partner.; PARTNER_COST_TYPE_AGENCY_TRADING_DESK - The cost is charged for using an Agency Trading Desk. Billed by the partner.; PARTNER_COST_TYPE_DV360_FEE - The cost is charged for using DV360. Billed through DV360.; PARTNER_COST_TYPE_COMSCORE_VCE - The cost is charged for using comScore vCE. Billed through DV360.; PARTNER_COST_TYPE_DATA_MANAGEMENT_PLATFORM - The cost is charged for using a Data Management Platform. Billed by the partner.; PARTNER_COST_TYPE_DEFAULT - The default cost type. Billed by the partner.; PARTNER_COST_TYPE_DOUBLE_VERIFY - The cost is charged for using DoubleVerify. Billed by the partner.; PARTNER_COST_TYPE_DOUBLE_VERIFY_PREBID - The cost is charged for using DoubleVerify Pre-Bid. Billed through DV360.; PARTNER_COST_TYPE_EVIDON - The cost is charged for using Evidon. Billed by the partner.; PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_VIDEO - The cost is charged for using Integral Ad Science Video. Billed by the partner.; PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_PREBID - The cost is charged for using Integral Ad Science Pre-Bid. Billed through DV360.; PARTNER_COST_TYPE_MEDIA_COST_DATA - The cost is charged for using media cost data. Billed by the partner.; PARTNER_COST_TYPE_MOAT_VIDEO - The cost is charged for using MOAT Video. Billed by the partner.; PARTNER_COST_TYPE_NIELSEN_DAR - The cost is charged for using Nielsen Digital Ad Ratings. Billed through DV360.; PARTNER_COST_TYPE_SHOP_LOCAL - The cost is charged for using ShopLocal. Billed by the partner.; PARTNER_COST_TYPE_TERACENT - The cost is charged for using Teracent. Billed by the partner.; PARTNER_COST_TYPE_THIRD_PARTY_AD_SERVER - The cost is charged for using a third-party ad server. Billed by the partner.; PARTNER_COST_TYPE_TRUST_METRICS - The cost is charged for using TrustMetrics. Billed by the partner.; PARTNER_COST_TYPE_VIZU - The cost is charged for using Vizu. Billed by the partner.; PARTNER_COST_TYPE_CUSTOM_FEE_1 - The cost is charged as custom fee 1. Billed by the partner.; PARTNER_COST_TYPE_CUSTOM_FEE_2 - The cost is charged as custom fee 2. Billed by the partner.; PARTNER_COST_TYPE_CUSTOM_FEE_3 - The cost is charged as custom fee 3. Billed by the partner.; PARTNER_COST_TYPE_CUSTOM_FEE_4 - The cost is charged as custom fee 4. Billed by the partner.; PARTNER_COST_TYPE_CUSTOM_FEE_5 - The cost is charged as custom fee 5. Billed by the partner.; PARTNER_COST_TYPE_SCIBIDS_FEE - The cost is charged for using Scibids. Billed through DV360. This type is currently only available to certain customers. Other customers attempting to use this type will receive an error. |

### `DemandGenBiddingStrategy`

Settings that control the bid strategy for Demand Gen resources.

| Field | Type | Description |
|---|---|---|
| effectiveBiddingValue | string (int64) | Output only. The value effectively used by the bidding strategy. This field will be the same as value if set. If value is not set and the strategy is assigned to an ad group, this field will be inherited from the line item's bidding strategy. If type is not `DEMAND_GEN_BIDDING_STRATEGY_TYPE_TARGET_CPA` or `DEMAND_GEN_BIDDING_STRATEGY_TYPE_TARGET_ROAS`, this field will be 0. |
| type | string enum(DEMAND_GEN_BIDDING_STRATEGY_TYPE_UNSPECIFIED, DEMAND_GEN_BIDDING_STRATEGY_TYPE_TARGET_CPA, DEMAND_GEN_BIDDING_STRATEGY_TYPE_TARGET_ROAS, DEMAND_GEN_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSIONS, DEMAND_GEN_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSION_VALUE, DEMAND_GEN_BIDDING_STRATEGY_TYPE_MAXIMIZE_CLICKS, DEMAND_GEN_BIDDING_STRATEGY_TYPE_TARGET_CPC) | Optional. The type of the bidding strategy. This can only be set when assigned to a line item. Ad groups will inherit this value from their line item. Values: DEMAND_GEN_BIDDING_STRATEGY_TYPE_UNSPECIFIED - Type is not specified or unknown.; DEMAND_GEN_BIDDING_STRATEGY_TYPE_TARGET_CPA - A bidding strategy that automatically optimizes conversions per dollar.; DEMAND_GEN_BIDDING_STRATEGY_TYPE_TARGET_ROAS - A bidding strategy that automatically maximizes revenue while averaging a specific target Return On Ad Spend (ROAS).; DEMAND_GEN_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSIONS - A bidding strategy that automatically maximizes number of conversions; DEMAND_GEN_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSION_VALUE - A bidding strategy that automatically maximizes revenue while spending your budget.; DEMAND_GEN_BIDDING_STRATEGY_TYPE_MAXIMIZE_CLICKS - A bidding strategy that automatically maximizes clicks within a given budget.; DEMAND_GEN_BIDDING_STRATEGY_TYPE_TARGET_CPC - A bidding strategy that automatically optimizes cost per click. |
| effectiveBiddingValueSource | string enum(BIDDING_SOURCE_UNSPECIFIED, BIDDING_SOURCE_LINE_ITEM, BIDDING_SOURCE_AD_GROUP) | Output only. Source of the effective bidding value. Values: BIDDING_SOURCE_UNSPECIFIED - Bidding source is not specified or unknown.; BIDDING_SOURCE_LINE_ITEM - Bidding value is inherited from the line item.; BIDDING_SOURCE_AD_GROUP - Bidding value is defined in the ad group. |
| value | string (int64) | Optional. The value used by the bidding strategy. This can be set when assigned to line items or ad groups. This field is only applicable for the following strategy types: * `DEMAND_GEN_BIDDING_STRATEGY_TYPE_TARGET_CPA` * `DEMAND_GEN_BIDDING_STRATEGY_TYPE_TARGET_CPC` * `DEMAND_GEN_BIDDING_STRATEGY_TYPE_TARGET_ROAS` Value of this field is in micros of the advertiser's currency or ROAS value. For example, 1000000 represents 1.0 standard units of the currency or 100% ROAS value. If not using an applicable strategy, the value of this field will be 0. |

### `FixedBidStrategy`

A strategy that uses a fixed bidding price.

| Field | Type | Description |
|---|---|---|
| bidAmountMicros | string (int64) | The fixed bid amount, in micros of the advertiser's currency. For insertion order entity, bid_amount_micros should be set as 0. For line item entity, bid_amount_micros must be greater than or equal to billable unit of the given currency and smaller than or equal to the upper limit 1000000000. For example, 1500000 represents 1.5 standard units of the currency. |

### `MaximizeSpendBidStrategy`

A strategy that automatically adjusts the bid to optimize a specified performance goal while spending the full budget.

| Field | Type | Description |
|---|---|---|
| customBiddingAlgorithmId | string (int64) | The ID of the Custom Bidding Algorithm used by this strategy. Only applicable when performance_goal_type is set to `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO`. Assigning a custom bidding algorithm that uses floodlight activities not identified in floodlightActivityConfigs will return an error. |
| performanceGoalType | string enum(BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_UNSPECIFIED, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_REACH) | Required. The type of the performance goal that the bidding strategy tries to minimize while spending the full budget. `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM` is not supported for this strategy. Values: BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_UNSPECIFIED - Type value is not specified or is unknown in this version.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA - Cost per action.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC - Cost per click.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM - Viewable CPM.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO - Custom bidding algorithm.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA - Completed inview and audible views.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN - Inview time over 10 secs views.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED - Viewable impressions.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_REACH - Maximize reach. |
| maxAverageCpmBidAmountMicros | string (int64) | The maximum average CPM that may be bid, in micros of the advertiser's currency. Must be greater than or equal to a billable unit of the given currency. For example, 1500000 represents 1.5 standard units of the currency. |
| raiseBidForDeals | boolean | Whether the strategy takes deal floor prices into account. |

### `PerformanceGoalBidStrategy`

A strategy that automatically adjusts the bid to meet or beat a specified performance goal.

| Field | Type | Description |
|---|---|---|
| performanceGoalAmountMicros | string (int64) | Required. The performance goal the bidding strategy will attempt to meet or beat, in micros of the advertiser's currency or in micro of the ROAS (Return On Advertising Spend) value which is also based on advertiser's currency. Must be greater than or equal to a billable unit of the given currency and smaller or equal to upper bounds. Each performance_goal_type has its upper bound: * when performance_goal_type is `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA`, upper bound is 10000.00 USD. * when performance_goal_type is `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC`, upper bound is 1000.00 USD. * when performance_goal_type is `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM`, upper bound is 1000.00 USD. * when performance_goal_type is `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO`, upper bound is 1000.00 and lower bound is 0.01. Example: If set to `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM`, the bid price will be based on the probability that each available impression will be viewable. For example, if viewable CPM target is $2 and an impression is 40% likely to be viewable, the bid price will be $0.80 CPM (40% of $2). For example, 1500000 represents 1.5 standard units of the currency or ROAS value. |
| maxAverageCpmBidAmountMicros | string (int64) | The maximum average CPM that may be bid, in micros of the advertiser's currency. Must be greater than or equal to a billable unit of the given currency. Not applicable when performance_goal_type is set to `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM`. For example, 1500000 represents 1.5 standard units of the currency. |
| performanceGoalType | string enum(BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_UNSPECIFIED, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_REACH) | Required. The type of the performance goal that the bidding strategy will try to meet or beat. For line item level usage, the value must be one of: * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA` * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC` * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM` * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO`. Values: BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_UNSPECIFIED - Type value is not specified or is unknown in this version.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA - Cost per action.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC - Cost per click.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM - Viewable CPM.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO - Custom bidding algorithm.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA - Completed inview and audible views.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN - Inview time over 10 secs views.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED - Viewable impressions.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_REACH - Maximize reach. |
| customBiddingAlgorithmId | string (int64) | The ID of the Custom Bidding Algorithm used by this strategy. Only applicable when performance_goal_type is set to `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO`. Assigning a custom bidding algorithm that uses floodlight activities not identified in floodlightActivityConfigs will return an error. |

### `YoutubeAndPartnersBiddingStrategy`

Settings that control the bid strategy for YouTube and Partners resources.

| Field | Type | Description |
|---|---|---|
| type | string enum(YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_UNSPECIFIED, YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPV, YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPM, YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA, YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPM, YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_RESERVE_CPM, YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_LIFT, YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSIONS, YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPV, YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_ROAS, YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSION_VALUE) | The type of the bidding strategy. Values: YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_UNSPECIFIED - Type is not specified or unknown.; YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPV - A bidding strategy that pays a configurable amount per video view.; YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPM - A bidding strategy that pays a configurable amount per impression.; YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA - A bidding strategy that automatically optimizes conversions per dollar.; YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPM - A bidding strategy that pays a configurable amount per impression.; YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_RESERVE_CPM - A bidding strategy for YouTube Instant Reserve line items that pays a fixed amount per impression.; YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_LIFT - An automated bidding strategy that sets bids to achieve maximum lift.; YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSIONS - A bidding strategy that automatically maximizes number of conversions given a daily budget.; YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPV - A bidding strategy that automatically optimizes cost per video view.; YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_ROAS - A bidding strategy that automatically maximizes revenue while averaging a specific target Return On Ad Spend (ROAS).; YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSION_VALUE - A bidding strategy that automatically sets bids to maximize revenue while spending your budget. |
| adGroupEffectiveTargetCpaValue | string (int64) | Output only. The effective target CPA for ad group, in micros of advertiser's currency. |
| value | string (int64) | The value used by the bidding strategy. When the bidding strategy is assigned at the line item level, this field is only applicable for the following strategy types: * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_ROAS` When the bidding strategy is assigned at the ad group level, this field is only applicable for the following strategy types: * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPM` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPV` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPM` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_RESERVE_CPM` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_ROAS` If not using an applicable strategy, the value of this field will be 0. |
| adGroupEffectiveTargetCpaSource | string enum(BIDDING_SOURCE_UNSPECIFIED, BIDDING_SOURCE_LINE_ITEM, BIDDING_SOURCE_AD_GROUP) | Output only. Source of the effective target CPA value for ad group. Values: BIDDING_SOURCE_UNSPECIFIED - Bidding source is not specified or unknown.; BIDDING_SOURCE_LINE_ITEM - Bidding value is inherited from the line item.; BIDDING_SOURCE_AD_GROUP - Bidding value is defined in the ad group. |

### `InsertionOrderBudgetSegment`

Settings that control the budget of a single budget segment.

| Field | Type | Description |
|---|---|---|
| dateRange | `DateRange` | Required. The start and end date settings of the budget segment. They are resolved relative to the parent advertiser's time zone. * When creating a new budget segment, both `start_date` and `end_date` must be in the future. * An existing budget segment with a `start_date` in the past has a mutable `end_date` but an immutable `start_date`. * `end_date` must be the `start_date` or later, both before the year 2037. |
| budgetAmountMicros | string (int64) | Required. The budget amount the insertion order will spend for the given date_range. The amount is in micros. Must be greater than 0. For example, 500000000 represents 500 standard units of the currency. |
| campaignBudgetId | string (int64) | Optional. The budget_id of the campaign budget that this insertion order budget segment is a part of. |
| description | string | Optional. The budget segment description. It can be used to enter Purchase Order information for each budget segment and have that information printed on the invoices. Must be UTF-8 encoded. |

### `DateRange`

A date range.

| Field | Type | Description |
|---|---|---|
| startDate | `Date` | The lower bound of the date range, inclusive. Must specify a positive value for `year`, `month`, and `day`. |
| endDate | `Date` | The upper bound of the date range, inclusive. Must specify a positive value for `year`, `month`, and `day`. |

### `Date`

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp

| Field | Type | Description |
|---|---|---|
| day | integer (int32) | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| year | integer (int32) | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| month | integer (int32) | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |

