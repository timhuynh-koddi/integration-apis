# Activity Log

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 5

---

## GET /v3/activity/{activityLogId}

Retrieve detail for an activity log entry by `ActivityLogId`.

Operation ID: `get-activity-activitylogid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| activityLogId | path | integer (int64) | yes | The ID of the Activity to retrieve. |

**Response 200** (`application/json`): `ActivityLog_ActivityLog`

---

## POST /v3/activity/query/adgroup

Retrieve and optionally filter a paged list of activity log entries for the specified ad group.

Operation ID: `post-activity-query-adgroup`

**Request body** (`application/json`, required): `ActivityLog_ActivityQueryForAdGroup`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_ActivityLog_`

---

## POST /v3/activity/query/campaign

Retrieve and optionally filter a paged list of activity log entries for the specified campaign.

Operation ID: `post-activity-query-campaign`

**Request body** (`application/json`, required): `ActivityLog_ActivityQueryForCampaign`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_ActivityLog_`

---

## PUT /v3/activity

Create or update the `Note` property for an existing activity log. `Note` is the only property that accepts changes. All other property updates are silently ignored.

Operation ID: `put-activity`

**Request body** (`application/json`, required): `ActivityLog_ActivityLog_put`

**Response 200** (`application/json`): `ActivityLog_ActivityLog`

---

## POST /v3/activity/query/facets

Retrieve a summary of changed properties and usernames responsible for the changes within the specified date range for the specified ad group or campaign. The results can be used to filter information in the POST /activity/query/adgroup and POST /activity/query/campaign endpoints. Either `AdGroupId` or `CampaignId` is required.

Operation ID: `post-activity-query-facets`

**Request body** (`application/json`, required): `ActivityLog_ActivityQueryForFacets`

**Response 200** (`application/json`): `ActivityLog_ActivityLogFacets`

---

## Schemas

### `ActivityLog_ActivityLog`

| Field | Type | Required | Description |
|---|---|---|---|
| ActivityRollupTimeUtc | string (date-time) |  | Timestamp in UTC of the rollup window for this change.  Activity processing will aggregate the changes into 15 minute windows. |
| ActivityTimeUtc | string (date-time) |  | Timestamp in UTC of when the change occured in the system. |
| BidLineChanges | array<`ActivityLog_BidLineActivity`> |  | This is the detailed bid line list of changes. When HasBidListChanges is set to true and this property is null, the bid line changes cannot be retrieved. _(nullable)_ |
| Entity | string |  | Name of the system entity that changed.   For example: 'Site', 'Ad Group', 'Fold Placement' _(nullable)_ |
| HasBidListChanges | boolean |  | Indicates if this change is related to a bid list and there are changes to the underlying bid lines. |
| Id | integer (int64) |  | Unique activity log ID. |
| Message | string |  | Message describing the change. _(nullable)_ |
| ModifiedByUser | string |  | The name of the user account that triggered the change. _(nullable)_ |
| Note | string |  | A descriptive message of the reason for the change. _(maxLength 512)_ |
| OwnerAdGroupId | string |  | The platform ID of the ad group for which to retrieve logged activity data. _(nullable)_ |
| OwnerCampaignId | string |  | The platform ID of the campaign for which to retrieve logged activity data. _(nullable)_ |
| Source | `TheTradeDesk.AdPlatform.Shared.PlatformModels.Activity_ActivitySource` |  | Filter results to the source of where the change was made. See the enumerated list below for possible values. |

### `ActivityLog_ActivityLogFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| Entities | array<string> |  | A list of entities affected by logged changes that fall within the specified date range. You can use this property values in the `UpdatedIn` filter of the [POST /activity/query/adgroup](/v3/portal/api/ref/post-activity-query-adgroup) and [POST /activity/query/campaign](/v3/portal/api/ref/post-activity-query-campaign) endpoints.  For a list of entities, see [Activity Log](/v3/portal/api/doc/ActivityLog). _(nullable)_ |
| UpdatedBy | array<string> |  | A list of usernames (typically email addresses) of users who made changes within the specified date range. You can use this property values in the `UpdatedBy` filter of the [POST /activity/query/adgroup](/v3/portal/api/ref/post-activity-query-adgroup) and [POST /activity/query/campaign](/v3/portal/api/ref/post-activity-query-campaign) endpoints.   - `Koa` indicates optimizations made by Koa.   - `TTD Admin` indicates changes made by The Trade Desk support team. _(nullable)_ |

### `ActivityLog_ActivityLog_put`

| Field | Type | Required | Description |
|---|---|---|---|
| Id | integer (int64) | yes | Unique activity log ID. |
| Note | string |  | A descriptive message of the reason for the change. _(maxLength 512)_ |

### `ActivityLog_ActivityQueryForAdGroup`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| AdGroupId | string |  | The platform ID of the ad group for which to retrieve logged activity data. _(nullable)_ |
| DateTimeEndUtc | string (date-time) |  | Filter results to include changes that occurred only before or on the UTC date and time specified. If not specified, the default value is the current UTC date and time. |
| DateTimeStartUtc | string (date-time) |  | Filter results to include changes that occurred only after or on the UTC date and time specified. |
| IncludeBidLineDetails | boolean |  | If set to `true` and the activity log includes changes to bid line details, the bid line details are included in the response. Otherwise, this property is set to `false`. NOTE: Turning on this option might slightly increase response time. |
| Source | `TheTradeDesk.AdPlatform.Shared.PlatformModels.Activity_ActivitySource` |  | Filter results only to those that pertain to the source where the changes were made. For possible values, see the enumerated list that follows. |
| UpdatedBy | string |  | Filter results to include changes that were made only by the specified usernames. To retrieve a list of available usernames for a specific campaign, use the POST /activity/query/campaign/facets endpoint, which returns them in the `UpdatedBy` property. |
| UpdatedIn | array<string> |  | Filter results to include changes that were made only to the specified entities. To retrieve a list of entity names for a specific campaign, use the POST /activity/query/campaign/facets endpoint, which returns them in the `Entities` property. |

### `ActivityLog_ActivityQueryForCampaign`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| CampaignId | string |  | The platform ID of the campaign for which to retrieve logged activity data. _(nullable)_ |
| DateTimeEndUtc | string (date-time) |  | Filter results to include changes that occurred only before or on the UTC date and time specified. If not specified, the default value is the current UTC date and time. |
| DateTimeStartUtc | string (date-time) |  | Filter results to include changes that occurred only after or on the UTC date and time specified. |
| IncludeBidLineDetails | boolean |  | If set to `true` and the activity log includes changes to bid line details, the bid line details are included in the response. Otherwise, this property is set to `false`. NOTE: Turning on this option might slightly increase response time. |
| Source | `TheTradeDesk.AdPlatform.Shared.PlatformModels.Activity_ActivitySource` |  | Filter results only to those that pertain to the source where the changes were made. For possible values, see the enumerated list that follows. |
| UpdatedBy | string |  | Filter results to include changes that were made only by the specified usernames. To retrieve a list of available usernames for a specific campaign, use the POST /activity/query/campaign/facets endpoint, which returns them in the `UpdatedBy` property. |
| UpdatedIn | array<string> |  | Filter results to include changes that were made only to the specified entities. To retrieve a list of entity names for a specific campaign, use the POST /activity/query/campaign/facets endpoint, which returns them in the `Entities` property. |

### `ActivityLog_ActivityQueryForFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| AdGroupId | string |  | The platform ID of the ad group for which to retrieve logged activity data. |
| CampaignId | string |  | The platform ID of the campaign for which to retrieve logged activity data. |
| DateTimeEndUtc | string (date-time) |  | Filter to results that occur before or include the UTC date and time specified. If not specified, the default value is the current UTC date and time. |
| DateTimeStartUtc | string (date-time) |  | Filter to results that occur after or include the UTC date and time specified. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_ActivityLog_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`ActivityLog_ActivityLog`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `ActivityLog_BidLineActivity`

| Field | Type | Required | Description |
|---|---|---|---|
| BidDimensionId | integer (int64) |  | The bid dimension ID. |
| BidDimensionType | string |  | The bid dimension type. For example, `Site` or `SSP / Audience / Contract Name / Ad Format`.   **NOTE**: The bid dimension value is specified in the `Name` property. _(nullable)_ |
| ChangeTimeUtc | string (date-time) |  | The UTC timestamp of the change that took place in the system. |
| Id | integer (int64) |  | The ID of the bid line for which the change was made. |
| Name | string |  | The bid dimension value. For example, `cnn.com` for the `Site` dimension, or `PlaceExchange / 908c1a27-1aa5-4855-9a17-aecbedb17cf6 / PX-Lightbox_ALTD_DOOH_DOOH_Retail__6 / Video (9:16)` for the `SSP / Audience / Contract Name / Ad Format` dimension.   **NOTE**: The dimension type, such as `Site` or `SSP / Audience / Contract Name / Ad Format`, is specified in the `BidDimensionType` property. _(nullable)_ |
| Op | string |  | The operation for the bid line change. Possible values include the following:    `I` - Inserted    `U` - Updated    `D` - Deleted    `Optimized` _(nullable)_ |
| ValueFrom | string |  | The original bid factor value. For insert operations this property is set either to `null` or `0`. _(nullable)_ |
| ValueTo | string |  | The new bid factor value.  For delete operations this property is set either to `null` or `0`. _(nullable)_ |
| VolumeControlValueFrom | string |  | The original volume control value. For insert operations this property is set either to `null` or `0`. _(nullable)_ |
| VolumeControlValueTo | string |  | The new volume control value.  For delete operations this property is set either to `null` or `0`. _(nullable)_ |

### `TheTradeDesk.AdPlatform.Shared.PlatformModels.Activity_ActivitySource`

Type: string enum(Ui, Api, Other, Unknown)

