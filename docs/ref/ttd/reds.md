# REDS

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 4

---

## GET /v3/reds/video/facets

Gets a list of all enumeration maps for the Raw Event Data Stream Video event type that the specified requester is authorized to view

Operation ID: `get-reds-video-facets`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_RedsVideoEventFacets`

---

## POST /v3/redsfeed/query

Gets metadata of all available feeds

Operation ID: `post-redsfeed-query`

**Request body** (`application/json`, required): `Reds_RedsQuery`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_RedsFeedMetaDataModel_`

---

## GET /v3/redsfeed/{feedId}

Gets a list of all columns for the feed ID

Operation ID: `get-redsfeed-feedid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| feedId | path | string | yes | The ID of the feed |

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_REDSColumns`

---

## GET /v3/reds/impressions/facets

Gets a list of all enumeration maps for the Raw Event Data Stream Impression event type

Operation ID: `get-reds-impressions-facets`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_RedsImpressionFacets`

---

## Schemas

### `Reds_RedsQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| PartnerId | string |  | The ID of the partner with which the query is associated.   If not specified, the user's primary partner ID will be used. _(nullable)_ |
| SearchTerms | array<string> |  | A list of search terms by which to filter the returned REDS feeds. All terms must be matched in the FeedId, PartnerId, AdvertiserIds or Description in order for a feed to match.   If not specified, empty, or null, this property is ignored. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_RedsFeedSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by Name ascending. _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_RedsFeedMetaDataModel_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`Reds_RedsFeedMetaDataModel`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_REDSColumns`

| Field | Type | Required | Description |
|---|---|---|---|
| Columns | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_REDSColumnItem`> |  | The list of columns _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_RedsImpressionFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| Browsers | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_ValueMapObject_BrowserNameMap_` |  | The list of browsers mapped from their ID to their name _(nullable)_ |
| DeviceTypes | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_ValueMapObject_DeviceTypeNameMap_` |  | The list of device types mapped from their ID to their name _(nullable)_ |
| MobileCarriers | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_ValueMapObject_MobileCarrierNameMap_` |  | The list of mobile carriers mapped from their ID to their name _(nullable)_ |
| OSes | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_ValueMapObject_OSNameMap_` |  | The list of operating systems mapped from their ID to their name _(nullable)_ |
| OSFamilies | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_ValueMapObject_OSFamilyNameMap_` |  | The list of operating system families mapped from their ID to their name _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_RedsVideoEventFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| PostImpressionEventTypes | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_ValueMapObject_PostImpressionEventTypeNameMap_` |  | _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_RedsFeedSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `Reds_RedsFeedSortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `Reds_RedsFeedMetaDataModel`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserIds | array<string> |  | The IDs of the advertisers _(nullable)_ |
| Columns | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_REDSColumnItem`> |  | The columns of the feed _(nullable)_ |
| ConcatenatedDestinationS3Key | string |  | The key of the concatenated output files if destination type is S3 _(nullable)_ |
| ConcatenationEnabled | boolean |  | Whether feed concatenation is enabled |
| Description | string |  | The description of the feed _(nullable)_ |
| DestinationType | `TheTradeDesk.AdPlatform.Shared.DB.Provisioning_RedsFeedDestinationType` |  | The type of the destination that the feeds will be delivered to |
| FeedId | string |  | The ID of the feed _(nullable)_ |
| FeedType | `TheTradeDesk.AdPlatform.Shared.DB.Provisioning_RedsFeedType` |  | The type of the feed |
| GdprConsentHandlingType | string |  | The type of GDPR consent handling _(nullable)_ |
| HeaderIncluded | boolean |  | Whether output files include a header row that contains column names |
| PartnerId | string |  | The ID of the partner _(nullable)_ |
| RawDestinationS3Key | string |  | The key of the output files if destination type is S3 _(nullable)_ |
| SnowflakeShare | `Reds_RedsFeedSnowflakeShareModel` |  | The Snowflake share information _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_REDSColumnItem`

| Field | Type | Required | Description |
|---|---|---|---|
| ColumnName | string |  | The name of the column _(nullable)_ |
| Description | string |  | A description of the contents of the column _(nullable)_ |
| Facet | string |  | The name of the facet property that contains the map of ids to values _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_ValueMapObject_BrowserNameMap_`

| Field | Type | Required | Description |
|---|---|---|---|
| ValueMap | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Adapters.DimensionalBiddingAdapters_BrowserNameMap`> |  | _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_ValueMapObject_DeviceTypeNameMap_`

| Field | Type | Required | Description |
|---|---|---|---|
| ValueMap | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Adapters.DimensionalBiddingAdapters_DeviceTypeNameMap`> |  | _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_ValueMapObject_MobileCarrierNameMap_`

| Field | Type | Required | Description |
|---|---|---|---|
| ValueMap | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Adapters.MobileCarrierAdapters_MobileCarrierNameMap`> |  | _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_ValueMapObject_OSFamilyNameMap_`

| Field | Type | Required | Description |
|---|---|---|---|
| ValueMap | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Adapters.DimensionalBiddingAdapters_OSFamilyNameMap`> |  | _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_ValueMapObject_OSNameMap_`

| Field | Type | Required | Description |
|---|---|---|---|
| ValueMap | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Adapters.DimensionalBiddingAdapters_OSNameMap`> |  | _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_ValueMapObject_PostImpressionEventTypeNameMap_`

| Field | Type | Required | Description |
|---|---|---|---|
| ValueMap | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Adapters.VideoAdapters_PostImpressionEventTypeNameMap`> |  | _(nullable)_ |

### `Reds_RedsFeedSortingField`

Type: string enum(FeedId)

### `Reds_RedsFeedSnowflakeShareModel`

| Field | Type | Required | Description |
|---|---|---|---|
| AccountName | string |  | The name of the account _(nullable)_ |
| RegionDescription | string |  | The description of the region _(nullable)_ |
| RegionName | string |  | The region of the Snowflake share _(nullable)_ |
| ShareDescription | string |  | The description of the Snowflake share _(nullable)_ |
| ShareName | string |  | The name of the Snowflake share _(nullable)_ |

### `TheTradeDesk.AdPlatform.Shared.DB.Provisioning_RedsFeedDestinationType`

Type: string enum(S3, Snowflake, CustomReport, Azure)

### `TheTradeDesk.AdPlatform.Shared.DB.Provisioning_RedsFeedType`

Type: string enum(Bids, Impressions, Clicks, Conversions, VideoEvents, GdprConsent)

### `TheTradeDesk.AdPlatform.API.PublicAPI.Adapters.DimensionalBiddingAdapters_BrowserNameMap`

| Field | Type | Required | Description |
|---|---|---|---|
| Id | integer (int32) |  | The browser ID |
| Name | string |  | The browser name that the BrowserId value maps to _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Adapters.DimensionalBiddingAdapters_DeviceTypeNameMap`

| Field | Type | Required | Description |
|---|---|---|---|
| Id | integer (int32) |  | The device type ID |
| Name | string |  | The device type that the DeviceTypeId value maps to _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Adapters.MobileCarrierAdapters_MobileCarrierNameMap`

| Field | Type | Required | Description |
|---|---|---|---|
| Id | integer (int32) |  | The mobile carrier ID |
| Name | string |  | The mobile carrier name that the CarrierId value maps to _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Adapters.DimensionalBiddingAdapters_OSFamilyNameMap`

| Field | Type | Required | Description |
|---|---|---|---|
| Id | integer (int32) |  | The operating system family ID |
| Name | string |  | The operating system family name that the OSFamilyID value maps to _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Adapters.DimensionalBiddingAdapters_OSNameMap`

| Field | Type | Required | Description |
|---|---|---|---|
| Id | integer (int32) |  | The operating system ID |
| Name | string |  | The operating system name that the OSId value maps to _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Adapters.VideoAdapters_PostImpressionEventTypeNameMap`

| Field | Type | Required | Description |
|---|---|---|---|
| Id | integer (int32) |  | PostImpressionEventType ID |
| Name | string |  | PostImpressionEventType name associated with the that the Id value _(nullable)_ |

