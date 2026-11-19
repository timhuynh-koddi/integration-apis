# IP Targeting List

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 6

---

## POST /v3/iptargetinglist

Create a new IP Targeting List. For efficiency, this method returns an IP Targeting List Summary on success instead of echoing the full list.  
Each Advertiser has a quota for the number of IP targeting ranges they may include across all of their IP Targeting Lists. If creating a given list would exceed the overall quota for an Advertiser, the list will not be created and an error will be returned. In this case, you must submit a smaller list or remove IP ranges from an existing list to make room for the new list.

Operation ID: `post-iptargetinglist`

**Request body** (`application/json`, required): `IPTargetingList_IPTargetingList_post`

**Response 200** (`application/json`): `IPTargetingList_IPTargetingListSummary`

---

## PUT /v3/iptargetinglist

Update an existing IP Targeting List. For efficiency, this method returns an IP Targeting List Summary on success instead of echoing the full list.  
Each Advertiser has a quota for the number of IP targeting ranges they may include across all of their IP Targeting Lists. If updating a given list would exceed the overall quota for an Advertiser, the list will not be updated and an error will be returned. In this case, you must submit a smaller list or remove IP ranges from an existing list to make room for the updates.

Operation ID: `put-iptargetinglist`

**Request body** (`application/json`, required): `IPTargetingList_IPTargetingList_put`

**Response 200** (`application/json`): `IPTargetingList_IPTargetingListSummary`

---

## GET /v3/iptargetinglist/{ipTargetingListId}

Get an existing IP Targeting List.

Operation ID: `get-iptargetinglist-iptargetinglistid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ipTargetingListId | path | string | yes |  |

**Response 200** (`application/json`): `IPTargetingList_IPTargetingList`

---

## GET /v3/iptargetinglist/usage/{advertiserId}

Get the cumulative IP Targeting Lists usage for an Advertiser.

Operation ID: `get-iptargetinglist-usage-advertiserid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string | yes |  |

**Response 200** (`application/json`): `IPTargetingList_IPTargetingListUsageSummary`

---

## GET /v3/iptargetinglist/query/facets

Get the facets of IP Targeting List that can be queried.

Operation ID: `get-iptargetinglist-query-facets`

**Response 200** (`application/json`): `IPTargetingList_IPTargetingListFacets`

---

## POST /v3/iptargetinglist/query/advertiser

Get a page of summaries of IP Targeting List that belong to the specified Advertiser.

Operation ID: `post-iptargetinglist-query-advertiser`

**Request body** (`application/json`, required): `IPTargetingList_IPTargetingListQueryForAdvertiser`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_IPTargetingListSummary_`

---

## Schemas

### `IPTargetingList_IPTargetingList`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The platform ID of the advertiser that owns this IP Targeting List. |
| IPTargetingDataName | string |  | The name of the Data Element to create for users who are in the associated IP targeting ranges. The type of this Data Element will be Cookie Matched IP Targeting and can added to Data Groups for targeting in your Audiences and Ad Groups.   This property cannot be changed after the IP Targeting Range List has been created. It will be ignored on update. |
| IPTargetingListId | string |  | The ID of this IP Targeting List. Ignored on create, when a new ID is generated and returned by The Trade Desk. |
| IPTargetingRanges | array<`IPTargetingList_IPTargetingRange`> |  | All the IP targeting ranges in this list. Each range counts against the overall quota allowed for the Advertiser. Set this to an empty list if you wish to remove all IP targeting ranges from this list. |

### `IPTargetingList_IPTargetingListFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| SortingFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_IPTargetingListSortingField_`> |  | The fields by which IP Targeting Lists may be sorted in a query. This list may be extended at any time, so please design accordingly. |

### `IPTargetingList_IPTargetingListQueryForAdvertiser`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser that is querying IP targeting lists. |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| SearchTerms | array<string> |  | A list of search terms by which to filter the returned IP Targeting Lists. All terms must be matched in the name or data ID in order for an IP Targeting List to match.   If not specified, empty, or null, this property is ignored. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_IPTargetingListSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed. See GET iptargetinglist/query/facets for the list of possible sort field IDs for IP Targeting Lists.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by Name ascending. _(nullable)_ |

### `IPTargetingList_IPTargetingListSummary`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The platform ID of the advertiser that owns this IP Targeting List. |
| IPTargetingDataName | string |  | The name of the Data Element to create for users who are in the associated IP targeting ranges. The type of this Data Element will be Cookie Matched IP Targeting and can added to Data Groups for targeting in your Audiences and Ad Groups.   This property cannot be changed after the IP Targeting Range List has been created. It will be ignored on update. |
| IPTargetingListId | string |  | The ID of this IP Targeting List. Ignored on create, when a new ID is generated and returned by The Trade Desk. |
| IPTargetingRangesCount | integer (int64) |  | The total number of IP targeting ranges currently used by the IP Targeting List. |

### `IPTargetingList_IPTargetingListUsageSummary`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The platform ID of the advertiser to which this summary applies. |
| IPTargetingRangesAllowed | integer (int64) |  | The total number of IP ranges the Advertiser may target across all of their IP Targeting Lists. |
| IPTargetingRangesUsed | integer (int64) |  | The total number of IP ranges the Advertiser currently targets across all of their IP Targeting Lists. |

### `IPTargetingList_IPTargetingList_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser that owns this IP Targeting List. |
| IPTargetingDataName | string | yes | The name of the Data Element to create for users who are in the associated IP targeting ranges. The type of this Data Element will be Cookie Matched IP Targeting and can added to Data Groups for targeting in your Audiences and Ad Groups.   This property cannot be changed after the IP Targeting Range List has been created. It will be ignored on update. |
| IPTargetingRanges | array<`IPTargetingList_IPTargetingRange_post`> | yes | All the IP targeting ranges in this list. Each range counts against the overall quota allowed for the Advertiser. Set this to an empty list if you wish to remove all IP targeting ranges from this list. |

### `IPTargetingList_IPTargetingList_put`

| Field | Type | Required | Description |
|---|---|---|---|
| IPTargetingListId | string | yes | The ID of this IP Targeting List. Ignored on create, when a new ID is generated and returned by The Trade Desk. |
| AdvertiserId | string |  | The platform ID of the advertiser that owns this IP Targeting List. |
| IPTargetingRanges | array<`IPTargetingList_IPTargetingRange_put`> |  | All the IP targeting ranges in this list. Each range counts against the overall quota allowed for the Advertiser. Set this to an empty list if you wish to remove all IP targeting ranges from this list. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_IPTargetingListSummary_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`IPTargetingList_IPTargetingListSummary`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `IPTargetingList_IPTargetingRange`

| Field | Type | Required | Description |
|---|---|---|---|
| MaxIP | string |  | The maximum IP address in the targeting range (inclusive). For example, in the range from 5.5.5.5 to 5.6.0.0, this would be "5.6.0.0". IP addresses 5.6.0.1 and above would be outside of that range. |
| MinIP | string |  | The minimum IP address in the targeting range (inclusive). For example, in the range from 5.5.5.5 to 5.6.0.0, this would be "5.5.5.5". IP addresses 5.5.5.4 and below would be outside of that range. |
| TargetingDataMetadataId | integer (int64) |  | An optional identifier for metadata associated with the specified IP range. When provided, this ID enables applying different metadata to individual ranges within the same IP targeting list.   **IMPORTANT**: Applies only to IP targeting lists created via API. _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_IPTargetingListSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `IPTargetingList_IPTargetingListSortingField` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_IPTargetingListSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `IPTargetingList_IPTargetingListSortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `IPTargetingList_IPTargetingRange_post`

| Field | Type | Required | Description |
|---|---|---|---|
| MaxIP | string | yes | The maximum IP address in the targeting range (inclusive). For example, in the range from 5.5.5.5 to 5.6.0.0, this would be "5.6.0.0". IP addresses 5.6.0.1 and above would be outside of that range. |
| MinIP | string | yes | The minimum IP address in the targeting range (inclusive). For example, in the range from 5.5.5.5 to 5.6.0.0, this would be "5.5.5.5". IP addresses 5.5.5.4 and below would be outside of that range. |
| TargetingDataMetadataId | integer (int64) |  | An optional identifier for metadata associated with the specified IP range. When provided, this ID enables applying different metadata to individual ranges within the same IP targeting list.   **IMPORTANT**: Applies only to IP targeting lists created via API. _(nullable)_ |

### `IPTargetingList_IPTargetingRange_put`

| Field | Type | Required | Description |
|---|---|---|---|
| MaxIP | string | yes | The maximum IP address in the targeting range (inclusive). For example, in the range from 5.5.5.5 to 5.6.0.0, this would be "5.6.0.0". IP addresses 5.6.0.1 and above would be outside of that range. |
| MinIP | string | yes | The minimum IP address in the targeting range (inclusive). For example, in the range from 5.5.5.5 to 5.6.0.0, this would be "5.5.5.5". IP addresses 5.5.5.4 and below would be outside of that range. |
| TargetingDataMetadataId | integer (int64) |  | An optional identifier for metadata associated with the specified IP range. When provided, this ID enables applying different metadata to individual ranges within the same IP targeting list.   **IMPORTANT**: Applies only to IP targeting lists created via API. _(nullable)_ |

### `IPTargetingList_IPTargetingListSortingField`

Type: string enum(DataName)

