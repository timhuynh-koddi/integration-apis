# Offline Tracking Tag

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 5

---

## POST /v3/offlinetrackingtag

Create a new offline tracking tag.

Operation ID: `post-offlinetrackingtag`

**Request body** (`application/json`, required): `TrackingTag_OfflineTrackingTag_post`

**Response 200** (`application/json`): `TrackingTag_OfflineTrackingTag`

---

## PUT /v3/offlinetrackingtag

Update an existing offline tracking tag.  We currenly only allow the name to be updated - the rest of the fields are read-only.

Operation ID: `put-offlinetrackingtag`

**Request body** (`application/json`, required): `TrackingTag_OfflineTrackingTag_put`

**Response 200** (`application/json`): `TrackingTag_OfflineTrackingTag`

---

## GET /v3/offlinetrackingtag/{trackingTagId}

Get an offline tracking tag.

Operation ID: `get-offlinetrackingtag-trackingtagid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| trackingTagId | path | string | yes |  |

**Response 200** (`application/json`): `TrackingTag_OfflineTrackingTag`

---

## GET /v3/offlinetrackingtag/query/facets

Get the facets of offline tracking tags that can be queried.

Operation ID: `get-offlinetrackingtag-query-facets`

**Response 200** (`application/json`): `TrackingTag_OfflineTrackingTagFacets`

---

## POST /v3/offlinetrackingtag/query/advertiser

Get a page of offline tracking tags that belong to a specified advertiser

Operation ID: `post-offlinetrackingtag-query-advertiser`

**Request body** (`application/json`, required): `TrackingTag_OfflineTrackingTagQueryForAdvertiser`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_OfflineTrackingTag_`

---

## Schemas

### `TrackingTag_OfflineTrackingTag`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The platform ID of the advertiser that owns this tracking tag.   This property is read-only except during creation. _(maxLength 32)_ |
| OfflineDataProviderId | string |  | The name of the offline data provider.   This property is used on create and for filtering, but is a read-only property on updates. _(maxLength 32)_ |
| TrackingTagId | string |  | The ID of the tracking tag. Ignored on create, when an ID will be assigned and returned by The Trade Desk. _(maxLength 32)_ |
| TrackingTagName | string |  | The name of the offline tracking tag.   This name should be unique and not duplicate any previous name for the same advertiser and offline data provider id. _(maxLength 256)_ |

### `TrackingTag_OfflineTrackingTagFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| SortingFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_OfflineTrackingTagSortingField_`> |  | The fields by which Tracking Tags may be sorted in a query. This list may be extended at any time, so please design accordingly. |

### `TrackingTag_OfflineTrackingTagQueryForAdvertiser`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser that owns the tracking tags. |
| OfflineDataProviderId | string | yes | The ID of the offline data provider that owns the tracking tags |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `NULL` means the maximum number of elements allowed per page.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum value for this property is 25. The maximum limit is 100.   - If a large page size is passed in, fewer items may be returned. Check the total count to see if more items are available.   For example:   - If there are 70 items, `PageStartIndex` is 0, and `PageSize` is 100, only the 70 existing items will be returned.   - If there are 100 items, `PageStartIndex` is 50, and `PageSize` is 50, the last 50 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + ResultCount is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| SearchTerms | array<string> |  | A list of search terms by which to filter the returned offline tracking tags. All terms must be matched in the ID, name or location in order for an offline tracking tag to match.   If not specified, empty, or null, this property is ignored. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_OfflineTrackingTagSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed. See GET offlinetrackingtag/query/facets for the list of possible sort field IDs for offline tracking tags.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by name ascending. _(nullable)_ |

### `TrackingTag_OfflineTrackingTag_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser that owns this tracking tag.   This property is read-only except during creation. _(maxLength 32)_ |
| OfflineDataProviderId | string | yes | The name of the offline data provider.   This property is used on create and for filtering, but is a read-only property on updates. _(maxLength 32)_ |
| TrackingTagName | string | yes | The name of the offline tracking tag.   This name should be unique and not duplicate any previous name for the same advertiser and offline data provider id. _(maxLength 256)_ |

### `TrackingTag_OfflineTrackingTag_put`

| Field | Type | Required | Description |
|---|---|---|---|
| TrackingTagId | string | yes | The ID of the tracking tag. Ignored on create, when an ID will be assigned and returned by The Trade Desk. _(maxLength 32)_ |
| TrackingTagName | string |  | The name of the offline tracking tag.   This name should be unique and not duplicate any previous name for the same advertiser and offline data provider id. _(maxLength 256)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_OfflineTrackingTag_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`TrackingTag_OfflineTrackingTag`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_OfflineTrackingTagSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `TrackingTag_OfflineTrackingTagSortingField` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_OfflineTrackingTagSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `TrackingTag_OfflineTrackingTagSortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `TrackingTag_OfflineTrackingTagSortingField`

Type: string enum(Name)

