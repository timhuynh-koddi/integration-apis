# Geo Segment

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 4

---

## GET /v3/geosegment/query/facets

Get the facets of Geo Segments that can be queried.

Operation ID: `get-geosegment-query-facets`

**Response 200** (`application/json`): `Geo_GeoSegmentFacets`

---

## POST /v3/geosegment/query/advertiser

Query Geo Segments for use by an Advertiser

Operation ID: `post-geosegment-query-advertiser`

**Request body** (`application/json`, required): `Geo_GeoSegmentQueryForAdvertiser`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_GeoSegment_`

---

## POST /v3/geosegment/query/partner

Query Geo Segments that are available for all advertisers for a partner

Operation ID: `post-geosegment-query-partner`

**Request body** (`application/json`, required): `Geo_GeoSegmentQueryForPartner`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_GeoSegment_`

---

## GET /v3/geosegment/name/{geoSegmentId}

Get the identifier and name for a GeoSegment based on identifier

Operation ID: `get-geosegment-name-geosegmentid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| geoSegmentId | path | string | yes |  |

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_IdName`

---

## Schemas

### `Geo_GeoSegmentFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| GeoSegmentFilter | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_GeoSegmentFilter_`> |  | The filter that can be set to indicate whether Standard/Custom/All Geo Segments should be returned. |
| SortingFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_GeoSegmentSortingField_`> |  | The fields by which Geo Segments may be sorted in a query. This list may be extended at any time, so please design accordingly. |

### `Geo_GeoSegmentQueryForAdvertiser`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser that is making the query. |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| GeoSegmentFilter | `Geo_GeoSegmentAdvertiserFilter` |  | To filter the Geo Segments based on type.   If not specified, the default behavior would be return only Custom Geo Segments [CustomOnly].   If the filter is set to "All", it is recommended that a PageSize value be set to a reasonable number, as a large number of rows could be returned. |
| SearchTerms | array<string> |  | A list of search terms by which to filter the returned Geo Segments. All terms must be matched in the ID, name or description in order for a GeoSegment to match.   If not specified, empty, or null, this property is ignored. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_GeoSegmentSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed. See GET geosegment/query/facets for the list of possible sort field IDs.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by Name ascending. _(nullable)_ |

### `Geo_GeoSegmentQueryForPartner`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| GeoSegmentFilter | `Geo_GeoSegmentPartnerFilter` |  | To filter the Geo Segments based on type.   If not specified, the default behavior would be return only Custom Geo Segments [CustomOnly].   If the filter is set to "All", it is recommended that a PageSize value be set to a reasonable number, as a large number of rows could be returned. |
| PartnerId | string |  | The partner ID to query. If not specified, the user's primary partner ID will be used. _(nullable)_ |
| SearchTerms | array<string> |  | A list of search terms by which to filter the returned Geo Segments. All terms must be matched in the ID, name or description in order for a GeoSegment to match.   If not specified, empty, or null, this property is ignored. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_GeoSegmentSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed. See GET geosegment/query/facets for the list of possible sort field IDs.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by Name ascending. _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_IdName`

| Field | Type | Required | Description |
|---|---|---|---|
| Id | string |  | The identifier for the object instance |
| Name | string |  | The name for the object instance |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_GeoSegment_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`Geo_GeoSegment`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_GeoSegmentFilter_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `Geo_GeoSegmentFilter` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_GeoSegmentSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `Geo_GeoSegmentSortingField` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `Geo_GeoSegmentAdvertiserFilter`

Type: string enum(CustomOnly, StandardOnly, All, Country, Region, City, Zip, Metro, AdvertiserSpecific, PartnerSpecific, CongressionalDistrict, NielsenDma, LegislativeDistrict, USCounty)

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_GeoSegmentSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `Geo_GeoSegmentSortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `Geo_GeoSegmentPartnerFilter`

Type: string enum(CustomOnly, StandardOnly, All, Country, Region, City, Zip, Metro, PartnerSpecific, CongressionalDistrict, NielsenDma, LegislativeDistrict, USCounty)

### `Geo_GeoSegment`

| Field | Type | Required | Description |
|---|---|---|---|
| Description | string |  | _(nullable)_ |
| GeoLocationType | `Geo_GeoLocationType` |  | The type of location. |
| GeoSegmentId | string |  |  |
| GeoSegmentName | string |  |  |
| IsStandard | boolean |  | A boolean indicating whether the Geo Segment is standard/custom. |

### `Geo_GeoSegmentFilter`

Type: string enum(CustomOnly, StandardOnly, All, Country, Region, City, Zip, Metro, CongressionalDistrict, NielsenDma, LegislativeDistrict, USCounty)

### `Geo_GeoSegmentSortingField`

Type: string enum(Name, Description)

### `Geo_GeoLocationType`

Type: string enum(Country, Region, City, Zip, Metro, Custom, CongressionalDistrict, NielsenDma, LegislativeDistrict, USCounty)

