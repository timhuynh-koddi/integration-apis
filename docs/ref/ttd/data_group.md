# Data Group

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 7

---

## POST /v3/datagroup

Create a new Data Group.

Operation ID: `post-datagroup`

**Request body** (`application/json`, required): `DataGroup_DataGroup_post`

**Response 200** (`application/json`): `DataGroup_DataGroup`

---

## PUT /v3/datagroup

Update an existing Data Group.

Operation ID: `put-datagroup`

**Request body** (`application/json`, required): `DataGroup_DataGroup_put`

**Response 200** (`application/json`): `DataGroup_DataGroup`

---

## GET /v3/datagroup/{dataGroupId}

Get an existing Data Group.

Operation ID: `get-datagroup-datagroupid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| dataGroupId | path | string | yes |  |

**Response 200** (`application/json`): `DataGroup_DataGroup`

---

## GET /v3/datagroup/{dataGroupId}/{geoForCounts}

Get an existing Data Group, and filter the returned counts by geo.

Operation ID: `get-datagroup-datagroupid-geoforcounts`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| dataGroupId | path | string | yes | The ID of the data group. |
| geoForCounts | path | string | yes | Filter the counts returned for this data group to only those within the specified geo. Look up available geos in [GET /dmp/thirdparty/facets/{advertiserId}](/v3/portal/api/ref/get-dmp-thirdparty-facets-advertiserid) in the `Countries.CountryName` property. |

**Response 200** (`application/json`): `DataGroup_DataGroup`

---

## GET /v3/datagroup/query/facets

Get the facets of Data Groups that can be queried.

Operation ID: `get-datagroup-query-facets`

**Response 200** (`application/json`): `DataGroup_DataGroupFacets`

---

## POST /v3/datagroup/query/advertiser

Get a page of Data Groups that belong to the specified Advertiser.

Operation ID: `post-datagroup-query-advertiser`

**Request body** (`application/json`, required): `DataGroup_DataGroupQueryForAdvertiser`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_DataGroupQueryResultWithoutCounts_`

---

## GET /v3/datagroup/name/{dataGroupId}

Get the identifier and name for an DataGroup based on identifier

Operation ID: `get-datagroup-name-datagroupid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| dataGroupId | path | string | yes |  |

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_IdName`

---

## Schemas

### `DataGroup_DataGroup`

| Field | Type | Required | Description |
|---|---|---|---|
| ActiveIDsCountExpanded | boolean |  | Whether cross-device has been used to expand the Active IDs count. Segments with UID2s show expanded reach through cross-device. Learn more about our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. _(nullable)_ |
| AdvertiserId | string |  | The platform ID of the advertiser that owns this data group. |
| DataGroupId | string |  | The ID of the data group. Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| DataGroupName | string |  | The name of the data group. The maximum character length is 64. _(maxLength 64)_ |
| Description | string |  | An optional description of the data group. The maximum character length is 2048. _(maxLength 2048)_ |
| FirstPartyDataIds | array<integer (int64)> |  | The first party data elements in the data group. Here's what you need to know about this property:   - This is a union; if a user has any of these data elements (or any third-party data elements), they are considered to be in the data group for targeting purposes.   - If specified, these First Party Data elements will replace all existing first-party data elements in the data group.   - If specified, the IDs in this list will be deduped, meaning if any ID appears in this list more than once, extra occurrences of the ID will be ignored.  Example: [ 2, 3, 2, 2 ] is equivalent to [ 2, 3 ]   - See the DMP API for your first-party data. |
| GeoForCounts | string |  | The geo (country or continent) that the counts for this data group should be filtered to. _(nullable)_ |
| HouseholdCount | integer (int64) |  | The number of households within this data group based on our Active IDs counting methodology. Learn more about our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. _(nullable)_ |
| IsSharable | boolean |  | Whether the data group is allowed to be shared between multiple Audiences. If this is not specified on create, the data group will not be sharable. |
| PersonsCount | integer (int64) |  | The number of persons within this data group based on our Active IDs counting methodology. Learn more about our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. _(nullable)_ |
| SkipUnauthorizedThirdPartyData | boolean |  | Used for creating or updating a DataGroup. When set to true, any unauthorized data segments encountered in ThirdPartyDataIds will be skipped, and the DataGroup will still be created.   When set to false (the default), any unauthorized data segments will result in an error response, and the DataGroup will not be created. |
| SuccessfullyRetrievedCounts | boolean |  | True if the counts have been returned successfully, false otherwise. If false, all counts will be null. This property is read-only. _(nullable)_ |
| ThirdPartyDataIds | array<string> |  | This data group is a union of users who have third-party or first-party data elements for targeting purposes. Here's what you need to know:   - The request must include `ThirdPartyId` and `BrandId` values in this format: "ThirdPartyDataId\|BrandId". For example, "1234567\|abc123xyz". Otherwise, a 403 (Forbidden) error is returned.   - If specified, these third-party data elements replace all existing third-party data elements in the data group.   - If the same IDs are specified in this list more than once, they are deduped. In other words, the duplicate IDs are ignored. For example, a list of [ 2, 3, 2, 2 ] is equivalent to [ 2, 3 ].   - All third-party data IDs in segments will be validated for biddability. Data group workflows will fail if the `ThirdPartyDataIds` array contains non-biddable IDs.   **TIP**: To check if segments are buyable beforehand, use the [POST /v3/dmp/thirdparty/advertiser](/v3/portal/api/ref/post-dmp-thirdparty-advertiser) endpoint. Include only third-party data IDs listed in the response. |
| UniqueUserCount | integer (int64) |  | The number of devices and browsers within this data group based on our Active IDs counting methodology. Learn more about our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. _(nullable)_ |

### `DataGroup_DataGroupFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| SortingFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_DataGroupSortingField_`> |  | The fields by which Data Groups may be sorted in a query. This list may be extended at any time, so please design accordingly. |

### `DataGroup_DataGroupQueryForAdvertiser`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser that owns the data groups. |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| SearchTerms | array<string> |  | A list of search terms by which to filter the returned Data Groups. All terms must be matched in the ID, name or description order for a Data Group to match.   If not specified, empty, or null, this property is ignored. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_DataGroupSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed. See GET datagroup/query/facets for the list of possible sort field IDs for Data Groups.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by Name ascending. _(nullable)_ |

### `DataGroup_DataGroup_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser that owns this data group. |
| DataGroupName | string | yes | The name of the data group. The maximum character length is 64. _(maxLength 64)_ |
| Description | string |  | An optional description of the data group. The maximum character length is 2048. _(maxLength 2048)_ |
| FirstPartyDataIds | array<integer (int64)> |  | The first party data elements in the data group. Here's what you need to know about this property:   - This is a union; if a user has any of these data elements (or any third-party data elements), they are considered to be in the data group for targeting purposes.   - If specified, these First Party Data elements will replace all existing first-party data elements in the data group.   - If specified, the IDs in this list will be deduped, meaning if any ID appears in this list more than once, extra occurrences of the ID will be ignored.  Example: [ 2, 3, 2, 2 ] is equivalent to [ 2, 3 ]   - See the DMP API for your first-party data. |
| GeoForCounts | string |  | The geo (country or continent) that the counts for this data group should be filtered to. _(nullable)_ |
| IsSharable | boolean |  | Whether the data group is allowed to be shared between multiple Audiences. If this is not specified on create, the data group will not be sharable. |
| SkipUnauthorizedThirdPartyData | boolean |  | Used for creating or updating a DataGroup. When set to true, any unauthorized data segments encountered in ThirdPartyDataIds will be skipped, and the DataGroup will still be created.   When set to false (the default), any unauthorized data segments will result in an error response, and the DataGroup will not be created. |
| ThirdPartyDataIds | array<string> |  | This data group is a union of users who have third-party or first-party data elements for targeting purposes. Here's what you need to know:   - The request must include `ThirdPartyId` and `BrandId` values in this format: "ThirdPartyDataId\|BrandId". For example, "1234567\|abc123xyz". Otherwise, a 403 (Forbidden) error is returned.   - If specified, these third-party data elements replace all existing third-party data elements in the data group.   - If the same IDs are specified in this list more than once, they are deduped. In other words, the duplicate IDs are ignored. For example, a list of [ 2, 3, 2, 2 ] is equivalent to [ 2, 3 ].   - All third-party data IDs in segments will be validated for biddability. Data group workflows will fail if the `ThirdPartyDataIds` array contains non-biddable IDs.   **TIP**: To check if segments are buyable beforehand, use the [POST /v3/dmp/thirdparty/advertiser](/v3/portal/api/ref/post-dmp-thirdparty-advertiser) endpoint. Include only third-party data IDs listed in the response. |

### `DataGroup_DataGroup_put`

| Field | Type | Required | Description |
|---|---|---|---|
| DataGroupId | string | yes | The ID of the data group. Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| AdvertiserId | string |  | The platform ID of the advertiser that owns this data group. |
| DataGroupName | string |  | The name of the data group. The maximum character length is 64. _(maxLength 64)_ |
| Description | string |  | An optional description of the data group. The maximum character length is 2048. _(maxLength 2048)_ |
| FirstPartyDataIds | array<integer (int64)> |  | The first party data elements in the data group. Here's what you need to know about this property:   - This is a union; if a user has any of these data elements (or any third-party data elements), they are considered to be in the data group for targeting purposes.   - If specified, these First Party Data elements will replace all existing first-party data elements in the data group.   - If specified, the IDs in this list will be deduped, meaning if any ID appears in this list more than once, extra occurrences of the ID will be ignored.  Example: [ 2, 3, 2, 2 ] is equivalent to [ 2, 3 ]   - See the DMP API for your first-party data. |
| GeoForCounts | string |  | The geo (country or continent) that the counts for this data group should be filtered to. _(nullable)_ |
| IsSharable | boolean |  | Whether the data group is allowed to be shared between multiple Audiences. If this is not specified on create, the data group will not be sharable. |
| SkipUnauthorizedThirdPartyData | boolean |  | Used for creating or updating a DataGroup. When set to true, any unauthorized data segments encountered in ThirdPartyDataIds will be skipped, and the DataGroup will still be created.   When set to false (the default), any unauthorized data segments will result in an error response, and the DataGroup will not be created. |
| ThirdPartyDataIds | array<string> |  | This data group is a union of users who have third-party or first-party data elements for targeting purposes. Here's what you need to know:   - The request must include `ThirdPartyId` and `BrandId` values in this format: "ThirdPartyDataId\|BrandId". For example, "1234567\|abc123xyz". Otherwise, a 403 (Forbidden) error is returned.   - If specified, these third-party data elements replace all existing third-party data elements in the data group.   - If the same IDs are specified in this list more than once, they are deduped. In other words, the duplicate IDs are ignored. For example, a list of [ 2, 3, 2, 2 ] is equivalent to [ 2, 3 ].   - All third-party data IDs in segments will be validated for biddability. Data group workflows will fail if the `ThirdPartyDataIds` array contains non-biddable IDs.   **TIP**: To check if segments are buyable beforehand, use the [POST /v3/dmp/thirdparty/advertiser](/v3/portal/api/ref/post-dmp-thirdparty-advertiser) endpoint. Include only third-party data IDs listed in the response. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_IdName`

| Field | Type | Required | Description |
|---|---|---|---|
| Id | string |  | The identifier for the object instance |
| Name | string |  | The name for the object instance |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_DataGroupQueryResultWithoutCounts_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`DataGroup_DataGroupQueryResultWithoutCounts`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_DataGroupSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `DataGroup_DataGroupSortingField` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_DataGroupSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `DataGroup_DataGroupSortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `DataGroup_DataGroupQueryResultWithoutCounts`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The platform ID of the advertiser that owns this Data Group. |
| DataGroupId | string |  | The ID of the Data Group. Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| DataGroupName | string |  | The name of the Data Group. _(maxLength 64)_ |
| Description | string |  | An optional description of the Data Group. The maximum character length is 2048. _(maxLength 2048)_ |
| FirstPartyDataIds | array<integer (int64)> |  | The First Party Data elements in the Data Group. This is a union; if a user has any of these data elements (or any Third Party Data elements), they are considered to be in the Data Group for targeting purposes.   If specified, these First Party Data elements will replace all existing First Party Data elements in the data group.   If specified, the IDs in this list will be deduped, meaning if any ID appears in this list more than once, extra occurrences of the ID will be ignored.  Example: [ 2, 3, 2, 2 ] is equivalent to [ 2, 3 ]   See the DMP API for your First Party Data. |
| IsSharable | boolean |  | Whether the DataGroup is allowed to be shared between multiple Audiences. If this is not specified on create, the DataGroup will not be sharable. |
| SkipUnauthorizedThirdPartyData | boolean |  | Used for creating or updating a DataGroup. When set to true, any unauthorized data segments encountered in ThirdPartyDataIds will be skipped, and the DataGroup will still be created.   When set to false (the default), any unauthorized data segments will result in an error response, and the DataGroup will not be created. |
| ThirdPartyDataIds | array<string> |  | The Third Party Data elements in the Data Group. This is a union; if a user has any of these data elements (or any First Party Data elements), they are considered to be in the Data Group for targeting purposes.   If specified, these Third Party Data elements will replace all existing Third Party Data elements in the data group.   If specified, the IDs in this list will be deduped, meaning if any ID appears in this list more than once, extra occurrences of the ID will be ignored.  Example: [ 2, 3, 2, 2 ] is equivalent to [ 2, 3 ]   See the DMP API for Third Party Data. |
| GeoForCounts | string |  | The geo (country or continent) that the counts for this data group should be filtered to. _(nullable; DEPRECATED; deprecation: The counts are reserved for the single datagroup endpoint: please use `/datagroup/dataGroupdId` instead.)_ |
| HouseholdCount | integer (int64) |  | The number of households within this data group based on our Active IDs counting methodology. Learn more about how to correctly retrieve this count and our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. _(nullable; DEPRECATED; deprecation: The counts are reserved for the single datagroup endpoint: please use `/datagroup/dataGroupdId` instead.)_ |
| PersonsCount | integer (int64) |  | The number of persons within this data group based on our Active IDs counting methodology. Learn more about how to correctly retrieve this count and our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. _(nullable; DEPRECATED; deprecation: The counts are reserved for the single datagroup endpoint: please use `/datagroup/dataGroupdId` instead.)_ |
| SuccessfullyRetrievedCounts | boolean |  | True if the counts have been returned successfully, false otherwise. If false, all counts will be null. This property is read-only. _(nullable; DEPRECATED; deprecation: The counts are reserved for the single datagroup endpoint: please use `/datagroup/dataGroupdId` instead.)_ |
| UniqueUserCount | integer (int64) |  | The number of devices and browsers within this data group based on our Active IDs counting methodology. Learn more about how to correctly retrieve this count and our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. _(nullable; DEPRECATED; deprecation: The counts are reserved for the single datagroup endpoint: please use `/datagroup/dataGroupdId` instead.)_ |

### `DataGroup_DataGroupSortingField`

Type: string enum(Name, Description)

