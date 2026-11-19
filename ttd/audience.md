# Audience

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 18

---

## POST /v3/audience

Create a new Audience.

Operation ID: `post-audience`

**Request body** (`application/json`, required): `Audience_Audience_post`

**Response 200** (`application/json`): `Audience_Audience`

---

## PUT /v3/audience

Update an existing Audience.

Operation ID: `put-audience`

**Request body** (`application/json`, required): `Audience_Audience_put`

**Response 200** (`application/json`): `Audience_Audience`

---

## GET /v3/audience/{audienceId}

Get an existing Audience by ID.

Operation ID: `get-audience-audienceid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| audienceId | path | string | yes |  |

**Response 200** (`application/json`): `Audience_Audience`

---

## GET /v3/audience/{audienceId}/{geoForCounts}

Get an existing Audience by ID, and filter the returned counts by geo.

Operation ID: `get-audience-audienceid-geoforcounts`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| audienceId | path | string | yes | The ID of the audience. |
| geoForCounts | path | string | yes | Filter the counts returned for this audience to only those within the specified geo. Look up available geos in [GET /dmp/thirdparty/facets/{advertiserId}](/v3/portal/api/ref/get-dmp-thirdparty-facets-advertiserid) in the `Countries.CountryName` property. |

**Response 200** (`application/json`): `Audience_Audience`

---

## GET /v3/audience/query/facets

The facets of Audiences that can be queried.

Operation ID: `get-audience-query-facets`

**Response 200** (`application/json`): `Audience_AudienceFacets`

---

## POST /v3/audience/query/advertiser

Query for a page of Audiences within an Advertiser.

Operation ID: `post-audience-query-advertiser`

**Request body** (`application/json`, required): `Audience_AudienceQueryForAdvertiser`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_AudienceQueryResultWithoutCounts_`

---

## GET /v3/audience/name/{audienceId}

Get the identifier and name for an Audience based on identifier

Operation ID: `get-audience-name-audienceid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| audienceId | path | string | yes |  |

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_IdName`

---

## POST /v3/audience/insights/channelmix

**DEPRECATED.** We recommend using the [audience](/v3/portal/api/gql-doc/audience) query in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work until April 1, 2027.

Retrieve the channel mix insights for the specified audience and geographic areas. The returned response includes the  
audience's channel mix as percentages, grouped by combinations of DeviceType, MediaType, and RenderingContext (ad environment).

Operation ID: `post-audience-insights-channelmix`

**Request body** (`application/json`, required): `Insights_AudienceInsightRequest`

**Response 200** (`application/json`): `Insights_ChannelMixInsightResponse`

---

## POST /v3/audience/insights/browser

**DEPRECATED.** We recommend using the [audience](/v3/portal/api/gql-doc/audience) query in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work until April 1, 2027.

Retrieve browser insights for the specified audience and geographic areas. The returned response includes a breakdown  
of each browser as a percentage of the audience.

Operation ID: `post-audience-insights-browser`

**Request body** (`application/json`, required): `Insights_AudienceInsightRequest`

**Response 200** (`application/json`): `Insights_BrowserInsightResponse`

---

## POST /v3/audience/insights/os

**DEPRECATED.** We recommend using the [audience](/v3/portal/api/gql-doc/audience) query in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work until April 1, 2027.

Retrieve browser operating system for the specified audience and geographic areas. The returned response includes a breakdown  
of each operating system as a percentage of the audience.

Operation ID: `post-audience-insights-os`

**Request body** (`application/json`, required): `Insights_AudienceInsightRequest`

**Response 200** (`application/json`): `Insights_OSInsightResponse`

---

## POST /v3/audience/insights/marketmix

**DEPRECATED.** We recommend using the [audience](/v3/portal/api/gql-doc/audience) query in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work until April 1, 2027.

Retrieve market mix for the specified audience and geographic areas. The returned response includes a breakdown  
of each market type as a percentage of the available inventory matching the audience.

Operation ID: `post-audience-insights-marketmix`

**Request body** (`application/json`, required): `Insights_AudienceInsightRequest`

**Response 200** (`application/json`): `Insights_MarketMixResponse`

---

## POST /v3/audience/insights/device

**DEPRECATED.** We recommend using the [audience](/v3/portal/api/gql-doc/audience) query in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work until April 1, 2027.

Retrieve device insights for the specified audience and geographic areas. The returned response includes a breakdown  
of each device as a percentage of the audience.

Operation ID: `post-audience-insights-device`

**Request body** (`application/json`, required): `Insights_AudienceInsightRequest`

**Response 200** (`application/json`): `Insights_DeviceInsightResponse`

---

## POST /v3/audience/insights/interests

**DEPRECATED.** We recommend using the [audience](/v3/portal/api/gql-doc/audience) query in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work until April 1, 2027.

Retrieve interest audience insights for the specified audience and geographic areas. The returned response includes a  
score that represents how relevant an interest is for the specified audience.

Operation ID: `post-audience-insights-interests`

**Request body** (`application/json`, required): `Insights_AudienceInsightRequest`

**Response 200** (`application/json`): `Insights_InterestsAudienceInsightResponse`

---

## POST /v3/audience/insights/thirdparty

**DEPRECATED.** We recommend using the [audience](/v3/portal/api/gql-doc/audience) query in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work until April 1, 2027.

Retrieve third party audience insights for the specified audience and geographic areas. The returned response includes a  
score that represents how relevant an interest is for the specified audience.

Operation ID: `post-audience-insights-thirdparty`

**Request body** (`application/json`, required): `Insights_AudienceInsightPageRequest`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_ThirdPartySegmentInsightMetric_`

---

## POST /v3/audience/insights/appssites

**DEPRECATED.** We recommend using the [audience](/v3/portal/api/gql-doc/audience) query in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work until April 1, 2027.

Retrieve app and site audience insights for the specified audience and geographic areas. The returned response includes a  
score that represents how relevant an interest is for the specified audience.

Operation ID: `post-audience-insights-appssites`

**Request body** (`application/json`, required): `Insights_AudienceInsightPageRequest`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_AppsSitesInsightMetric_`

---

## POST /v3/audience/insights/privatecontract

**DEPRECATED.** We recommend using the [audience](/v3/portal/api/gql-doc/audience) query in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work until April 1, 2027.

Retrieve the private contracts for the specified audience and geographic areas. The returned response includes a score for each contract  
to represent how relevant the contract is for the specified audience.

Operation ID: `post-audience-insights-privatecontract`

**Request body** (`application/json`, required): `Insights_AudienceInsightPageRequest`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_PrivateContractInsightMetric_`

---

## POST /v3/audience/insights/geo

**DEPRECATED.** We recommend using the [audience](/v3/portal/api/gql-doc/audience) query in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work until April 1, 2027.

Retrieve geo location audience insights for the specified audience and geographic areas. The returned response includes a  
score that represents how relevant a location is for the specified audience.

Operation ID: `post-audience-insights-geo`

**Request body** (`application/json`, required): `Insights_AudienceInsightPageRequest`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_GeoInsightMetric_`

---

## GET /v3/audience/availableaudienceacceleratorexclusions

Retrieve the third-party data ID and name of the segments that you can add to the audience accelerator exclusions list  
of an ad group.

Operation ID: `get-audience-availableaudienceacceleratorexclusions`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_CustomAudienceAcceleratorExclusion_`

---

## Schemas

### `Audience_Audience`

| Field | Type | Required | Description |
|---|---|---|---|
| ActiveIDsCountExpanded | boolean |  | Whether cross-device has been used to expand the Active IDs count. Segments with UID2s show expanded reach through cross-device. If needed, see the "Unique Device/Browser Counting Methodology" section in Audience.   This is a system-generated, read-only value. _(nullable)_ |
| AdvertiserId | string |  | The platform ID of the advertiser that owns this Audience. |
| AudienceId | string |  | The ID of the Audience. Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| AudienceName | string |  | The name of the Audience. _(maxLength 64)_ |
| CtvCount | integer (int64) |  | The number of unique active CTV user IDs, which along with the Web and In-App IDs add up to the total number of active user IDs specified in `UniqueUserCount`. If needed, see the "Unique Device/Browser Counting Methodology" section in [Audience](/v3/portal/api/doc/Audience).     This is a system-generated, read-only value. _(nullable)_ |
| Description | string |  | An optional description of the Audience. _(nullable)_ |
| ExcludedDataGroupIds | array<string> |  | The Data Groups that exclude a user from this Audience. If a user appears in ANY of these Data Groups, they are not targeted by the Audience. For example, if you are targeting 'Men' and 'Sports Fans' to sell tickets, you may want to exclude 'Bought Game Ticket' and/or 'Bought Season Tickets' since they are unlikely to buy again. |
| GeoForCounts | string |  | The geo (country or continent) that the counts for this audience should be filtered to. _(nullable)_ |
| HouseholdCount | integer (int64) |  | The number of households within this audience based on the platform's active ID counting methodology. If needed, see the "Unique Device/Browser Counting Methodology" section in [Audience](/v3/portal/api/doc/Audience).     This is a system-generated, read-only value. _(nullable)_ |
| InAppCount | integer (int64) |  | The number of unique active In-App user IDs, which along with the Web and CTV IDs add up to the total number of active user IDs specified in `UniqueUserCount`. If needed, see the "Unique Device/Browser Counting Methodology" section in [Audience](/v3/portal/api/doc/Audience).     This is a system-generated, read-only value. _(nullable)_ |
| IncludedDataGroupIds | array<string> |  | The Data Groups that include a user in this Audience. This is an intersection; a user must be in ALL of these Data Groups to be targeted by the Audience. For example, if you add 'Men' and 'Sports Fans' to the same Audience, you will only target users who are men AND sports fans. |
| IsAutoGenerated | boolean |  | Indicates if this audience was automatically generated by The Trade Desk platform.   This is a read-only property returned by the API. |
| LastUpdatedAtUTC | string (date-time) |  | Indicates the time when this audience was last updated (UTC).   This is a read-only property returned by the API. |
| PersonsCount | integer (int64) |  | The number of persons within this audience based on the platform's active ID counting methodology. If needed, see the "Unique Device/Browser Counting Methodology" section in [Audience](/v3/portal/api/doc/Audience).     This is a system-generated, read-only value. _(nullable)_ |
| SuccessfullyRetrievedCounts | boolean |  | True if the counts have been returned successfully, false otherwise. If false, all counts will be null. This property is read-only. _(nullable)_ |
| UniqueUserCount | integer (int64) |  | The number of devices and browsers within this audience based on the platform's active ID counting methodology. If needed, see the "Unique Device/Browser Counting Methodology" section in [Audience](/v3/portal/api/doc/Audience).     This is a system-generated, read-only value. _(nullable)_ |
| WebCount | integer (int64) |  | The number of unique active Web user IDs, which along with the In-App and CTV IDs add up to the total number of active user IDs specified in `UniqueUserCount`. If needed, see the "Unique Device/Browser Counting Methodology" section in [Audience](/v3/portal/api/doc/Audience).     This is a system-generated, read-only value. _(nullable)_ |

### `Audience_AudienceFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| SortingFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_AudienceSortingField_`> |  | The fields by which Audiences may be sorted in a query. This list may be extended at any time, so please design accordingly. |

### `Audience_AudienceQueryForAdvertiser`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser that owns the audiences. |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| SearchTerms | array<string> |  | A list of search terms by which to filter the returned Audiences. All terms must be matched in the id, name or description in order for an Audience to match.   If not specified, empty, or null, this property is ignored. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_AudienceSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed. See GET audience/query/facets for the list of possible sort field IDs for Audiences.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by Name ascending. _(nullable)_ |

### `Audience_Audience_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser that owns this Audience. |
| AudienceName | string | yes | The name of the Audience. _(maxLength 64)_ |
| IncludedDataGroupIds | array<string> | yes | The Data Groups that include a user in this Audience. This is an intersection; a user must be in ALL of these Data Groups to be targeted by the Audience. For example, if you add 'Men' and 'Sports Fans' to the same Audience, you will only target users who are men AND sports fans. |
| Description | string |  | An optional description of the Audience. _(nullable)_ |
| ExcludedDataGroupIds | array<string> |  | The Data Groups that exclude a user from this Audience. If a user appears in ANY of these Data Groups, they are not targeted by the Audience. For example, if you are targeting 'Men' and 'Sports Fans' to sell tickets, you may want to exclude 'Bought Game Ticket' and/or 'Bought Season Tickets' since they are unlikely to buy again. |
| GeoForCounts | string |  | The geo (country or continent) that the counts for this audience should be filtered to. _(nullable)_ |

### `Audience_Audience_put`

| Field | Type | Required | Description |
|---|---|---|---|
| AudienceId | string | yes | The ID of the Audience. Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| AdvertiserId | string |  | The platform ID of the advertiser that owns this Audience. |
| AudienceName | string |  | The name of the Audience. _(maxLength 64)_ |
| Description | string |  | An optional description of the Audience. _(nullable)_ |
| ExcludedDataGroupIds | array<string> |  | The Data Groups that exclude a user from this Audience. If a user appears in ANY of these Data Groups, they are not targeted by the Audience. For example, if you are targeting 'Men' and 'Sports Fans' to sell tickets, you may want to exclude 'Bought Game Ticket' and/or 'Bought Season Tickets' since they are unlikely to buy again. |
| GeoForCounts | string |  | The geo (country or continent) that the counts for this audience should be filtered to. _(nullable)_ |
| IncludedDataGroupIds | array<string> |  | The Data Groups that include a user in this Audience. This is an intersection; a user must be in ALL of these Data Groups to be targeted by the Audience. For example, if you add 'Men' and 'Sports Fans' to the same Audience, you will only target users who are men AND sports fans. |

### `Insights_AudienceInsightPageRequest`

Generic insight request meant to use with audience/insights/* endpoints

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| AudienceId | string |  | The ID of the audience for which you want to retrieve insights. To look up an audience ID, use the [POST /audience/query/advertiser](/v3/portal/api/ref/post-audience-query-advertiser) endpoint. _(nullable)_ |
| GeoSegmentIds | array<string> |  | A list of standard or unique geo segment IDs of the geographic areas for which to retrieve insights. The resulting metrics are calculated from the union of all geographic areas specified.    To retrieve a list of standard or unique geo segment IDs for geographic areas, use the [POST /geosegment/query/advertiser](/v3/portal/api/ref/post-geosegment-query-advertiser) endpoint.    **IMPORTANT**: Do not specify a custom geo segment ID. _(nullable)_ |

### `Insights_AudienceInsightRequest`

Generic insight request meant to use with audience/insights/* endpoints

| Field | Type | Required | Description |
|---|---|---|---|
| AudienceId | string |  | The identifier of the audience for which you want to retrieve insights. To look up an audience ID, use the [POST /audience/query/advertiser](/v3/portal/api/ref/post-audience-query-advertiser) endpoint. _(nullable)_ |
| GeoSegmentIds | array<string> |  | The specified list of standard or unique geo segment IDs of the geographic areas for which to retrieve insights. The resulting metrics are calculated from the union of all geographic areas specified.    To retrieve a list of standard or unique geo segment IDs for geographic areas, use the [POST /geosegment/query/advertiser](/v3/portal/api/ref/post-geosegment-query-advertiser) endpoint.    **IMPORTANT**: Do not specify a custom geo segment ID. _(nullable)_ |

### `Insights_BrowserInsightResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| AudienceId | string |  | The audience id that was specified in the request. _(nullable)_ |
| GeoSegmentIds | array<string> |  | The geo segment ids specified in the request. _(nullable)_ |
| Metrics | array<`Insights_BrowserInsightMetric`> |  | A list of objects that represent the percentage of audience for each browser. _(nullable)_ |

### `Insights_ChannelMixInsightResponse`

The response object for channel mix insights request.

| Field | Type | Required | Description |
|---|---|---|---|
| AudienceId | string |  | The identifier of the audience used to retrieve these channel mix metrics. _(nullable)_ |
| GeoSegmentIds | array<string> |  | The list of geographic area identifiers used to retrieve these channel mix metrics. The resulting metrics are calculated   from the union of all geographic areas specified. _(nullable)_ |
| Metrics | array<`Insights_ChannelMixMetric`> |  | A list of channel mix insight metrics. Each metric represents one combination of `DeviceType`,    `MediaType`, and `RenderingContext` and its associated channel mix percentage. _(nullable)_ |

### `Insights_DeviceInsightResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| AudienceId | string |  | The audience id that was specified in the request. _(nullable)_ |
| GeoSegmentIds | array<string> |  | The geo segment ids specified in the request. _(nullable)_ |
| Metrics | array<`Insights_DeviceInsightMetric`> |  | A list of objects that represent the percentage of audience for each device type. _(nullable)_ |

### `Insights_InterestsAudienceInsightResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| AudienceId | string |  | The audience id that was specified in the request. _(nullable)_ |
| GeoSegmentIds | array<string> |  | The geo segment ids specified in the request. _(nullable)_ |
| Metrics | array<`Insights_InterestsAudienceInsightMetric`> |  | A list of objects that represent the score for a particular interest as it relates to the specified audience. _(nullable)_ |

### `Insights_MarketMixResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| AudienceId | string |  | The audience id that was specified in the request. _(nullable)_ |
| GeoSegmentIds | array<string> |  | The geo segment ids specified in the request. _(nullable)_ |
| Metrics | array<`Insights_MarketMixInsightMetric`> |  | A list of objects that represent the percentage of inventory for each market type. _(nullable)_ |

### `Insights_OSInsightResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| AudienceId | string |  | The audience id that was specified in the request. _(nullable)_ |
| GeoSegmentIds | array<string> |  | The geo segment ids specified in the request. _(nullable)_ |
| Metrics | array<`Insights_OSInsightMetric`> |  | A list of objects that represent the percentage of audience for each operating system. _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_IdName`

| Field | Type | Required | Description |
|---|---|---|---|
| Id | string |  | The identifier for the object instance |
| Name | string |  | The name for the object instance |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_AppsSitesInsightMetric_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`Insights_AppsSitesInsightMetric`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_AudienceQueryResultWithoutCounts_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`Audience_AudienceQueryResultWithoutCounts`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_CustomAudienceAcceleratorExclusion_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`CrossDevice_CustomAudienceAcceleratorExclusion`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_GeoInsightMetric_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`Insights_GeoInsightMetric`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_PrivateContractInsightMetric_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`Insights_PrivateContractInsightMetric`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_ThirdPartySegmentInsightMetric_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`Insights_ThirdPartySegmentInsightMetric`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_AudienceSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `Audience_AudienceSortingField` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_AudienceSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `Audience_AudienceSortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `Insights_BrowserInsightMetric`

| Field | Type | Required | Description |
|---|---|---|---|
| Browser | `DimensionalBidding_Browser` |  | Specifies the browser for this metric. |
| PercentageOfAudience | number (double) |  | Represents the expected percentage of this audience that uses this browser. |

### `Insights_ChannelMixMetric`

Represents one item in the channel mix that is a combination of device type, media type, and rendering context.

| Field | Type | Required | Description |
|---|---|---|---|
| DeviceType | `DimensionalBidding_DeviceType` |  | The device type for this channel mix metric. |
| Environment | `DimensionalBidding_RenderingContext` |  | The rendering context (ad environment) for this channel mix metric. |
| MediaType | `AdFormat_MediaType` |  | The media type for this channel mix metric. |
| PercentageOfAudience | number (double) |  | Represents the percentage of an audience of the combination of the specified device type, media type, and rendering   context. Valid range is between 0 and 1. |

### `Insights_DeviceInsightMetric`

| Field | Type | Required | Description |
|---|---|---|---|
| DeviceType | `DimensionalBidding_DeviceType` |  | Specifies the device type for this metric. |
| PercentageOfAudience | number (double) |  | Represents the expected percentage of this audience that uses this device type. |

### `Insights_InterestsAudienceInsightMetric`

| Field | Type | Required | Description |
|---|---|---|---|
| InterestName | string |  | The name of the interest. _(nullable)_ |
| RelevanceScore | number (double) |  | A score that represents the interests relevance to the specified audience and geos. |

### `Insights_MarketMixInsightMetric`

| Field | Type | Required | Description |
|---|---|---|---|
| MarketType | `DimensionalBidding_MarketType` |  | Specifies the market type for this metric. |
| PercentageOfInventory | number (double) |  | Represents the expected percentage of this inventory of this market type matching this audience. |

### `Insights_OSInsightMetric`

| Field | Type | Required | Description |
|---|---|---|---|
| OperatingSystem | string |  | Specifies the operating system for this metric. _(nullable)_ |
| PercentageOfAudience | number (double) |  | Represents the expected percentage of this audience that uses this OS. |

### `Insights_AppsSitesInsightMetric`

| Field | Type | Required | Description |
|---|---|---|---|
| Avails | number (double) |  | The number of avails that are forecasted for this site or app. |
| ChannelName | string |  | Channel name of the metric. _(nullable)_ |
| Cpm | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | Denotes the forecasted spend per one thousand impressions for this site or app. _(nullable)_ |
| IsApp | boolean |  | True if the metric is an app metric, false if the metric is a site metric. |
| Name | string |  | The name of the site or app. _(nullable)_ |
| RelevanceScore | number (double) |  | A score that represents the site or app relevance to an audience. |

### `Audience_AudienceQueryResultWithoutCounts`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The platform ID of the advertiser that owns this Audience. |
| AudienceId | string |  | The ID of the Audience. Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| AudienceName | string |  | The name of the Audience. _(maxLength 64)_ |
| Description | string |  | An optional description of the Audience. _(nullable)_ |
| ExcludedDataGroupIds | array<string> |  | The Data Groups that exclude a user from this Audience. If a user appears in ANY of these Data Groups, they are not targeted by the Audience. For example, if you are targeting 'Men' and 'Sports Fans' to sell tickets, you may want to exclude 'Bought Game Ticket' and/or 'Bought Season Tickets' since they are unlikely to buy again. |
| IncludedDataGroupIds | array<string> |  | The Data Groups that include a user in this Audience. This is an intersection; a user must be in ALL of these Data Groups to be targeted by the Audience. For example, if you add 'Men' and 'Sports Fans' to the same Audience, you will only target users who are men AND sports fans. |
| IsAutoGenerated | boolean |  | Indicates if this audience was automatically generated by The Trade Desk platform.   This is a read-only property returned by the API. |
| LastUpdatedAtUTC | string (date-time) |  | Indicates the time when this audience was last updated (UTC).   This is a read-only property returned by the API. |
| GeoForCounts | string |  | The geo (country or continent) that the counts for this audience should be filtered to. _(nullable; DEPRECATED; deprecation: The counts are reserved for the single audience endpoint: please use `/audience/audienceId` instead.)_ |
| HouseholdCount | integer (int64) |  | The number of households within this audience based on our Active IDs counting methodology. Learn more about how to correctly retrieve this count and our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. _(nullable; DEPRECATED; deprecation: The counts are reserved for the single audience endpoint: please use `/audience/audienceId` instead.)_ |
| PersonsCount | integer (int64) |  | The number of persons within this audience based on our Active IDs counting methodology. Learn more about how to correctly retrieve this count and our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. _(nullable; DEPRECATED; deprecation: The counts are reserved for the single audience endpoint: please use `/audience/audienceId` instead.)_ |
| SuccessfullyRetrievedCounts | boolean |  | True if the counts have been returned successfully, false otherwise. If false, all counts will be null. This property is read-only. _(nullable; DEPRECATED; deprecation: The counts are reserved for the single audience endpoint: please use `/audience/audienceId` instead.)_ |
| UniqueUserCount | integer (int64) |  | The number of devices and browsers within this audience based on our Active IDs counting methodology. Learn more about how to correctly retrieve this count and our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. _(nullable; DEPRECATED; deprecation: The counts are reserved for the single audience endpoint: please use `/audience/audienceId` instead.)_ |

### `CrossDevice_CustomAudienceAcceleratorExclusion`

| Field | Type | Required | Description |
|---|---|---|---|
| Name | string |  | The third-party data ID of the audience accelerator segment to exclude. _(nullable)_ |
| ThirdPartyDataId | integer (int64) |  | The third-party data ID of the audience accelerator segment to exclude. |

### `Insights_GeoInsightMetric`

| Field | Type | Required | Description |
|---|---|---|---|
| Avails | integer (int64) |  | The number of request for bid that are forecasted for this location. |
| Cpm | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | Denotes the forecasted spend per one thousand impressions for this location. _(nullable)_ |
| GeoSegmentId | string |  | Identifier for the geo segment corresponding to the location _(nullable)_ |
| GeoType | string |  | Represents the type of location (Region, Metro, or City) _(nullable)_ |
| Name | string |  | The name of the location. _(nullable)_ |
| RelevanceScore | number (double) |  | A score that represents the location relevance to an audience. |

### `Insights_PrivateContractInsightMetric`

| Field | Type | Required | Description |
|---|---|---|---|
| Avails | number (double) |  | The number of request for bid that are forecasted for this contract. |
| ChannelName | string |  | Channel name of the metric. _(nullable)_ |
| ContractName | string |  | The name of the private contract. _(nullable)_ |
| Cpm | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | Denotes the forecasted spend per one thousand impressions for this contract. _(nullable)_ |
| IsFirstParty | boolean |  | Is this a First Party Private Contract? |
| LogoUrl | string |  | The URL for the logo of this contract's publisher. _(nullable)_ |
| PrivateContractId | string |  | The id of the private contract. _(nullable)_ |
| PublisherIds | array<string> |  | The ids of the publishers of the private contract. _(nullable)_ |
| Publishers | array<string> |  | The names of the publishers of the private contract. _(nullable)_ |
| RelevanceScore | number (double) |  | A score that represents the relevance of the contract to the audience. |

### `Insights_ThirdPartySegmentInsightMetric`

| Field | Type | Required | Description |
|---|---|---|---|
| BrandName | string |  | The name of the brand that provided the data in this segment. _(nullable)_ |
| Cpm | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | Denotes the forecasted spend per one thousand impressions for users in this segment. _(nullable)_ |
| RelevanceScore | number (double) |  | A score that represents the third party segment relevance to an audience. |
| SegmentName | string |  | The name of the third party segment. _(nullable)_ |
| Size | integer (int64) |  | The number of people in this segment. |
| ThirdPartyDataBrandId | string |  | The id of the brand for the third party data segment. _(nullable)_ |
| ThirdPartyDataId | integer (int64) |  | The id of the third party data segment. |

### `Audience_AudienceSortingField`

Type: string enum(Name, Description, LastUpdatedAtUTC)

### `DimensionalBidding_Browser`

Type: string enum(Other, InternetExplorer7, InternetExplorer8, InternetExplorer9, Firefox, Chrome, Safari, Opera, InternetExplorer10, InternetExplorer11, Edge, Baidu, Yandex, WebView)

### `AdFormat_MediaType`

Type: string enum(Unknown, Display, Video, Native, Audio, NativeVideo)

### `DimensionalBidding_DeviceType`

Type: string enum(Other, PC, Tablet, Mobile, Roku, ConnectedTV, OutOfHome, HomeAssistant)

### `DimensionalBidding_RenderingContext`

Type: string enum(Other, InApp, MobileOptimizedWeb)

### `DimensionalBidding_MarketType`

Type: string enum(Open, PMP)

### `TTD.Domain.Shared.Http.Metadata.Models_Money`

Describes an amount of money in a specific currency.

| Field | Type | Required | Description |
|---|---|---|---|
| Amount | number (double) | yes | The money amount, specified as a decimal, for example, 1.5 for $1.50. |
| CurrencyCode | `TheTradeDesk_CurrencyCode` | yes | The currency of the money value specified in the `Amount`, for example, "USD" for $1.50 US dollars.   Unless you've arranged different terms during onboarding, your partner account and all its associated advertisers use the same currency, namely, USD.   If you you need to use another currency, please contact your Account Manager.   If multi-currency support is enabled for your account, see the Currency API for the full set of supported currencies and their codes. |

### `TheTradeDesk_CurrencyCode`

Type: string enum(None, AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF, BMD, BND, BOB, BRL, BSD, BTN, BWP, BYR, BZD, CAD, CDF, CHF, CLF, CLP, CNH, CNY, COP, CRC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ERN, ETB, EUR, FJD, FKP, GBP, GEL, GHS, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HRK, HTG, HUF, IDR, ILS, INR, IQD, IRR, ISK, JMD, JOD, JPY, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LTL, LVL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MRO, MUR, MVR, MWK, MXN, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SRD, STD, SVC, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD, TWD, TZS, UAH, UGX, USD, UYU, UZS, VEF, VND, VUV, WST, XAF, XCD, XDR, XOF, XPF, YER, ZAR, ZMW, ZWL)

