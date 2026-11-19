# Campaigns

> Source: Display & Video 360 API v4 REST Discovery document (https://displayvideo.googleapis.com/$discovery/rest?version=v4, revision 20261117); reference https://developers.google.com/display-video/api/reference/rest. Fetched 2026-11-19.

Used by koddi-offsite via: `NewAdvertisersCampaignsService` Get/List/Create/Patch (`campaign.go`, `adgroup.go`).

---

## advertisers.campaigns.delete

`DELETE https://displayvideo.googleapis.com/v4/advertisers/{+advertiserId}/campaigns/{+campaignId}`

Permanently deletes a campaign. A deleted campaign cannot be recovered. The campaign should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it. **This method regularly experiences high latency.** We recommend [increasing your default timeout](/display-video/api/guides/best-practices/timeouts#client_library_timeout) to avoid errors.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string (int64) | yes | The ID of the advertiser this campaign belongs to. |
| campaignId | path | string (int64) | yes | The ID of the campaign we need to delete. |

**Response**: `Empty`

---

## advertisers.campaigns.patch

`PATCH https://displayvideo.googleapis.com/v4/advertisers/{+advertiserId}/campaigns/{+campaignId}`

Updates an existing campaign. Returns the updated campaign if successful.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string (int64) | yes | Output only. The unique ID of the advertiser the campaign belongs to. |
| campaignId | path | string (int64) | yes | Output only. The unique ID of the campaign. Assigned by the system. |
| updateMask | query | string (google-fieldmask) |  | Required. The mask to control which fields to update. |

**Request body**: `Campaign`

**Response**: `Campaign`

---

## advertisers.campaigns.create

`POST https://displayvideo.googleapis.com/v4/advertisers/{+advertiserId}/campaigns`

Creates a new campaign. Returns the newly created campaign if successful.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string (int64) | yes | Output only. The unique ID of the advertiser the campaign belongs to. |

**Request body**: `Campaign`

**Response**: `Campaign`

---

## advertisers.campaigns.list

`GET https://displayvideo.googleapis.com/v4/advertisers/{+advertiserId}/campaigns`

Lists campaigns in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, campaigns with `ENTITY_STATUS_ARCHIVED` will not be included in the results.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string (int64) | yes | The ID of the advertiser to list campaigns for. |
| filter | query | string |  | Allows filtering by campaign fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. Supported fields: * `campaignId` * `displayName` * `entityStatus` * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Examples: * All `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED` campaigns under an advertiser: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED")` * All campaigns with an update time less than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime<="2020-11-04T18:54:47Z"` * All campaigns with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |
| pageToken | query | string |  | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCampaigns` method. If not specified, the first page of results will be returned. |
| pageSize | query | integer (int32) |  | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. |
| orderBy | query | string |  | Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` * `updateTime` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`. |

**Response**: `ListCampaignsResponse`

---

## advertisers.campaigns.get

`GET https://displayvideo.googleapis.com/v4/advertisers/{+advertiserId}/campaigns/{+campaignId}`

Gets a campaign.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string (int64) | yes | Required. The ID of the advertiser this campaign belongs to. |
| campaignId | path | string (int64) | yes | Required. The ID of the campaign to fetch. |

**Response**: `Campaign`

---

## Schemas

### `Empty`

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

Type: object

### `Campaign`

A single campaign.

| Field | Type | Description |
|---|---|---|
| entityStatus | string enum(ENTITY_STATUS_UNSPECIFIED, ENTITY_STATUS_ACTIVE, ENTITY_STATUS_ARCHIVED, ENTITY_STATUS_DRAFT, ENTITY_STATUS_PAUSED, ENTITY_STATUS_SCHEDULED_FOR_DELETION) | Required. Controls whether or not the insertion orders under this campaign can spend their budgets and bid on inventory. * Accepted values are `ENTITY_STATUS_ACTIVE`, `ENTITY_STATUS_ARCHIVED`, and `ENTITY_STATUS_PAUSED`. * For CreateCampaign method, `ENTITY_STATUS_ARCHIVED` is not allowed. Values: ENTITY_STATUS_UNSPECIFIED - Default value when status is not specified or is unknown in this version.; ENTITY_STATUS_ACTIVE - The entity is enabled to bid and spend budget.; ENTITY_STATUS_ARCHIVED - The entity is archived. Bidding and budget spending are disabled. An entity can be deleted after archived. Deleted entities cannot be retrieved.; ENTITY_STATUS_DRAFT - The entity is under draft. Bidding and budget spending are disabled.; ENTITY_STATUS_PAUSED - Bidding and budget spending are paused for the entity.; ENTITY_STATUS_SCHEDULED_FOR_DELETION - The entity is scheduled for deletion. |
| displayName | string | Required. The display name of the campaign. Must be UTF-8 encoded with a maximum size of 240 bytes. |
| advertiserId | string (int64) | Output only. The unique ID of the advertiser the campaign belongs to. |
| name | string | Output only. The resource name of the campaign. |
| campaignGoal | `CampaignGoal` | Required. The goal of the campaign. |
| updateTime | string (google-datetime) | Output only. The timestamp when the campaign was last updated. Assigned by the system. |
| frequencyCap | `FrequencyCap` | Required. The frequency cap setting of the campaign. *Warning*: On **February 28, 2025**, frequency cap time periods greater than 30 days will no longer be accepted. [Read more about this announced change](/display-video/api/deprecations#features.lifetime_frequency_cap) |
| campaignBudgets | array<`CampaignBudget`> | The list of budgets available to this campaign. If this field is not set, the campaign uses an unlimited budget. |
| campaignId | string (int64) | Output only. The unique ID of the campaign. Assigned by the system. |
| campaignFlight | `CampaignFlight` | Required. The planned spend and duration of the campaign. |

### `ListCampaignsResponse`

| Field | Type | Description |
|---|---|---|
| nextPageToken | string | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCampaigns` method to retrieve the next page of results. |
| campaigns | array<`Campaign`> | The list of campaigns. This list will be absent if empty. |

### `CampaignBudget`

Settings that control how the campaign budget is allocated.

| Field | Type | Description |
|---|---|---|
| externalBudgetSource | string enum(EXTERNAL_BUDGET_SOURCE_UNSPECIFIED, EXTERNAL_BUDGET_SOURCE_NONE, EXTERNAL_BUDGET_SOURCE_MEDIA_OCEAN) | Required. The external source of the budget. Values: EXTERNAL_BUDGET_SOURCE_UNSPECIFIED - External budget source value is not specified or unknown in this version.; EXTERNAL_BUDGET_SOURCE_NONE - Budget has no external source.; EXTERNAL_BUDGET_SOURCE_MEDIA_OCEAN - Budget source is Mediaocean. |
| displayName | string | Required. The display name of the budget. Must be UTF-8 encoded with a maximum size of 240 bytes. |
| dateRange | `DateRange` | Required. The date range for the campaign budget. Linked budget segments may have a different date range. They are resolved relative to the parent advertiser's time zone. Both `start_date` and `end_date` must be before the year 2037. |
| prismaConfig | `PrismaConfig` | Additional metadata for use by the Mediaocean Prisma tool. Required for Mediaocean budgets. Only applicable to prisma_enabled advertisers. |
| externalBudgetId | string | Immutable. The ID identifying this budget to the external source. If this field is set and the invoice detail level of the corresponding billing profile is set to "Budget level PO", all impressions served against this budget will include this ID on the invoice. Must be unique under the campaign. |
| invoiceGroupingId | string | Immutable. The ID used to group budgets to be included the same invoice. If this field is set and the invoice level of the corresponding billing profile is set to "Budget invoice grouping ID", all external_budget_id sharing the same invoice_grouping_id will be grouped in the same invoice. |
| budgetAmountMicros | string (int64) | Required. The total amount the linked insertion order segments can budget. The amount is in micros. Must be greater than 0. For example, 500000000 represents 500 standard units of the currency. |
| budgetId | string (int64) | The unique ID of the campaign budget. Assigned by the system. Do not set for new budgets. Must be included when updating or adding budgets to campaign_budgets. Otherwise, a new ID will be generated and assigned. |
| budgetUnit | string enum(BUDGET_UNIT_UNSPECIFIED, BUDGET_UNIT_CURRENCY, BUDGET_UNIT_IMPRESSIONS) | Required. Immutable. Specifies whether the budget is measured in currency or impressions. Values: BUDGET_UNIT_UNSPECIFIED - Type value is not specified or is unknown in this version.; BUDGET_UNIT_CURRENCY - Budgeting in currency amounts.; BUDGET_UNIT_IMPRESSIONS - Budgeting in impression amounts. |

### `CampaignFlight`

Settings that track the planned spend and duration of a campaign.

| Field | Type | Description |
|---|---|---|
| plannedSpendAmountMicros | string (int64) | The amount the campaign is expected to spend for its given planned_dates. This will not limit serving, but will be used for tracking spend in the DV360 UI. The amount is in micros. Must be greater than or equal to 0. For example, 500000000 represents 500 standard units of the currency. |
| plannedDates | `DateRange` | Required. The dates that the campaign is expected to run. They are resolved relative to the parent advertiser's time zone. * The dates specified here will not affect serving. They are used to generate alerts and warnings. For example, if the flight date of any child insertion order is outside the range of these dates, the user interface will show a warning. * `start_date` is required and must be the current date or later. * `end_date` is optional. If specified, it must be the `start_date` or later. * Any specified date must be before the year 2037. |

### `CampaignGoal`

Settings that control the goal of a campaign.

| Field | Type | Description |
|---|---|---|
| campaignGoalType | string enum(CAMPAIGN_GOAL_TYPE_UNSPECIFIED, CAMPAIGN_GOAL_TYPE_APP_INSTALL, CAMPAIGN_GOAL_TYPE_BRAND_AWARENESS, CAMPAIGN_GOAL_TYPE_OFFLINE_ACTION, CAMPAIGN_GOAL_TYPE_ONLINE_ACTION) | Required. The type of the campaign goal. Values: CAMPAIGN_GOAL_TYPE_UNSPECIFIED - Goal value is not specified or unknown in this version.; CAMPAIGN_GOAL_TYPE_APP_INSTALL - Drive app installs or engagements.; CAMPAIGN_GOAL_TYPE_BRAND_AWARENESS - Raise awareness of a brand or product.; CAMPAIGN_GOAL_TYPE_OFFLINE_ACTION - Drive offline or in-store sales.; CAMPAIGN_GOAL_TYPE_ONLINE_ACTION - Drive online action or visits. |
| performanceGoal | `PerformanceGoal` | Required. The performance goal of the campaign. Acceptable values for performance_goal_type are: * `PERFORMANCE_GOAL_TYPE_CPM` * `PERFORMANCE_GOAL_TYPE_CPC` * `PERFORMANCE_GOAL_TYPE_CPA` * `PERFORMANCE_GOAL_TYPE_CPIAVC` * `PERFORMANCE_GOAL_TYPE_CTR` * `PERFORMANCE_GOAL_TYPE_VIEWABILITY` * `PERFORMANCE_GOAL_TYPE_OTHER` |

### `FrequencyCap`

Settings that control the number of times a user may be shown with the same ad during a given time period.

| Field | Type | Description |
|---|---|---|
| timeUnit | string enum(TIME_UNIT_UNSPECIFIED, TIME_UNIT_LIFETIME, TIME_UNIT_MONTHS, TIME_UNIT_WEEKS, TIME_UNIT_DAYS, TIME_UNIT_HOURS, TIME_UNIT_MINUTES) | The time unit in which the frequency cap will be applied. Required when unlimited is `false`. Values: TIME_UNIT_UNSPECIFIED - Time unit value is not specified or is unknown in this version.; TIME_UNIT_LIFETIME - The frequency cap will be applied to the whole life time of the line item.; TIME_UNIT_MONTHS - The frequency cap will be applied to a number of months.; TIME_UNIT_WEEKS - The frequency cap will be applied to a number of weeks.; TIME_UNIT_DAYS - The frequency cap will be applied to a number of days.; TIME_UNIT_HOURS - The frequency cap will be applied to a number of hours.; TIME_UNIT_MINUTES - The frequency cap will be applied to a number of minutes. |
| unlimited | boolean | Whether unlimited frequency capping is applied. When this field is set to `true`, the remaining frequency cap fields are not applicable. |
| maxImpressions | integer (int32) | The maximum number of times a user may be shown the same ad during this period. Must be greater than 0. Required when unlimited is `false` and max_views is not set. |
| timeUnitCount | integer (int32) | The number of time_unit the frequency cap will last. Required when unlimited is `false`. The following restrictions apply based on the value of time_unit: * `TIME_UNIT_MONTHS` - must be 1 * `TIME_UNIT_WEEKS` - must be between 1 and 4 * `TIME_UNIT_DAYS` - must be between 1 and 6 * `TIME_UNIT_HOURS` - must be between 1 and 23 * `TIME_UNIT_MINUTES` - must be between 1 and 59 |
| maxViews | integer (int32) | Optional. The maximum number of times a user may click-through or fully view an ad during this period until it is no longer served to them. Must be greater than 0. Only applicable to YouTube and Partners resources. Required when unlimited is `false` and max_impressions is not set. |

### `DateRange`

A date range.

| Field | Type | Description |
|---|---|---|
| startDate | `Date` | The lower bound of the date range, inclusive. Must specify a positive value for `year`, `month`, and `day`. |
| endDate | `Date` | The upper bound of the date range, inclusive. Must specify a positive value for `year`, `month`, and `day`. |

### `PrismaConfig`

Settings specific to the Mediaocean Prisma tool.

| Field | Type | Description |
|---|---|---|
| supplier | string | Required. The entity allocated this budget (DSP, site, etc.). |
| prismaType | string enum(PRISMA_TYPE_UNSPECIFIED, PRISMA_TYPE_DISPLAY, PRISMA_TYPE_SEARCH, PRISMA_TYPE_VIDEO, PRISMA_TYPE_AUDIO, PRISMA_TYPE_SOCIAL, PRISMA_TYPE_FEE) | Required. The Prisma type. Values: PRISMA_TYPE_UNSPECIFIED - Type is not specified or unknown in this version.; PRISMA_TYPE_DISPLAY - Display type.; PRISMA_TYPE_SEARCH - Search type.; PRISMA_TYPE_VIDEO - Video type.; PRISMA_TYPE_AUDIO - Audio type.; PRISMA_TYPE_SOCIAL - Social type.; PRISMA_TYPE_FEE - Fee type. |
| prismaCpeCode | `PrismaCpeCode` | Required. Relevant client, product, and estimate codes from the Mediaocean Prisma tool. |

### `PerformanceGoal`

Settings that control the performance goal of a campaign.

| Field | Type | Description |
|---|---|---|
| performanceGoalType | string enum(PERFORMANCE_GOAL_TYPE_UNSPECIFIED, PERFORMANCE_GOAL_TYPE_CPM, PERFORMANCE_GOAL_TYPE_CPC, PERFORMANCE_GOAL_TYPE_CPA, PERFORMANCE_GOAL_TYPE_CTR, PERFORMANCE_GOAL_TYPE_VIEWABILITY, PERFORMANCE_GOAL_TYPE_CPIAVC, PERFORMANCE_GOAL_TYPE_CPE, PERFORMANCE_GOAL_TYPE_CPV, PERFORMANCE_GOAL_TYPE_CLICK_CVR, PERFORMANCE_GOAL_TYPE_IMPRESSION_CVR, PERFORMANCE_GOAL_TYPE_VCPM, PERFORMANCE_GOAL_TYPE_VTR, PERFORMANCE_GOAL_TYPE_AUDIO_COMPLETION_RATE, PERFORMANCE_GOAL_TYPE_VIDEO_COMPLETION_RATE, PERFORMANCE_GOAL_TYPE_OTHER) | Required. The type of the performance goal. Values: PERFORMANCE_GOAL_TYPE_UNSPECIFIED - Performance goal type is not specified or is unknown in this version.; PERFORMANCE_GOAL_TYPE_CPM - The performance goal is set in CPM (cost per mille).; PERFORMANCE_GOAL_TYPE_CPC - The performance goal is set in CPC (cost per click).; PERFORMANCE_GOAL_TYPE_CPA - The performance goal is set in CPA (cost per action).; PERFORMANCE_GOAL_TYPE_CTR - The performance goal is set in CTR (click-through rate) percentage.; PERFORMANCE_GOAL_TYPE_VIEWABILITY - The performance goal is set in Viewability percentage.; PERFORMANCE_GOAL_TYPE_CPIAVC - The performance goal is set as CPIAVC (cost per impression audible and visible at completion).; PERFORMANCE_GOAL_TYPE_CPE - The performance goal is set in CPE (cost per engagement).; PERFORMANCE_GOAL_TYPE_CPV - The performance goal is set in CPV (cost per view).; PERFORMANCE_GOAL_TYPE_CLICK_CVR - The performance goal is set in click conversion rate (conversions per click) percentage.; PERFORMANCE_GOAL_TYPE_IMPRESSION_CVR - The performance goal is set in impression conversion rate (conversions per impression) percentage.; PERFORMANCE_GOAL_TYPE_VCPM - The performance goal is set in VCPM (cost per thousand viewable impressions).; PERFORMANCE_GOAL_TYPE_VTR - The performance goal is set in YouTube view rate (YouTube views per impression) percentage.; PERFORMANCE_GOAL_TYPE_AUDIO_COMPLETION_RATE - The performance goal is set in audio completion rate (complete audio listens per impression) percentage.; PERFORMANCE_GOAL_TYPE_VIDEO_COMPLETION_RATE - The performance goal is set in video completion rate (complete video views per impression) percentage.; PERFORMANCE_GOAL_TYPE_OTHER - The performance goal is set to Other. |
| performanceGoalAmountMicros | string (int64) | The goal amount, in micros of the advertiser's currency. Applicable when performance_goal_type is one of: * `PERFORMANCE_GOAL_TYPE_CPM` * `PERFORMANCE_GOAL_TYPE_CPC` * `PERFORMANCE_GOAL_TYPE_CPA` * `PERFORMANCE_GOAL_TYPE_CPIAVC` * `PERFORMANCE_GOAL_TYPE_VCPM` For example 1500000 represents 1.5 standard units of the currency. |
| performanceGoalPercentageMicros | string (int64) | The decimal representation of the goal percentage in micros. Applicable when performance_goal_type is one of: * `PERFORMANCE_GOAL_TYPE_CTR` * `PERFORMANCE_GOAL_TYPE_VIEWABILITY` * `PERFORMANCE_GOAL_TYPE_CLICK_CVR` * `PERFORMANCE_GOAL_TYPE_IMPRESSION_CVR` * `PERFORMANCE_GOAL_TYPE_VTR` * `PERFORMANCE_GOAL_TYPE_AUDIO_COMPLETION_RATE` * `PERFORMANCE_GOAL_TYPE_VIDEO_COMPLETION_RATE` For example, 70000 represents 7% (decimal 0.07). |
| performanceGoalString | string | A key performance indicator (KPI) string, which can be empty. Must be UTF-8 encoded with a length of no more than 100 characters. Applicable when performance_goal_type is set to `PERFORMANCE_GOAL_TYPE_OTHER`. |

### `Date`

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp

| Field | Type | Description |
|---|---|---|
| day | integer (int32) | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| year | integer (int32) | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| month | integer (int32) | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |

### `PrismaCpeCode`

Google Payments Center supports searching and filtering on the component fields of this code.

| Field | Type | Description |
|---|---|---|
| prismaClientCode | string | The Prisma client code. |
| prismaEstimateCode | string | The Prisma estimate code. |
| prismaProductCode | string | The Prisma product code. |

