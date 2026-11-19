# Ad Format

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 2

---

## GET /v3/adformat/query/facets

Get the facets of Ad Formats that can be queried.

Operation ID: `get-adformat-query-facets`

**Response 200** (`application/json`): `AdFormat_AdFormatFacets`

---

## POST /v3/adformat/query

Get the Ad Formats supported by The Trade Desk.

Operation ID: `post-adformat-query`

**Request body** (`application/json`, required): `AdFormat_AdFormatQuery`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_AdFormat_`

---

## Schemas

### `AdFormat_AdFormatFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| SortingFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_AdFormatSortingField_`> |  | The fields by which AdFormats may be sorted in a query. This list may be extended at any time, so please design accordingly. |

### `AdFormat_AdFormatQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| SearchTerms | array<string> |  | A list of search terms by which to filter the returned Ad Formats. All terms must be matched in the ID, label or IAB name or display name in order for an Ad Format to match.   If not specified, empty, or null, this property is ignored. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_AdFormatSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed. See GET adformat/query/facets for the list of possible sort field IDs.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by Name ascending. _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_AdFormat_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`AdFormat_AdFormat`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_AdFormatSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `AdFormat_AdFormatSortingField` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_AdFormatSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `AdFormat_AdFormatSortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `AdFormat_AdFormat`

| Field | Type | Required | Description |
|---|---|---|---|
| AdFormatId | string |  | The ID of the Ad Format. |
| AdFormatName | string |  | The name of the Ad Format. |
| Height | integer (int32) |  | The height in pixels. |
| InventoryType | `AdFormat_MediaType` |  |  |
| IsDisplayRTBEligible | boolean |  | Whether this Ad Format is supported in general display RTB. This must be true for display creatives of this size to serve in RTB Ad Groups. |
| Width | integer (int32) |  | The width in pixels. |

### `AdFormat_AdFormatSortingField`

Type: string enum(Name)

### `AdFormat_MediaType`

Type: string enum(Unknown, Display, Video, Native, Audio, NativeVideo)

