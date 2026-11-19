# Seller

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 3

---

## GET /v3/seller/query/facets

Retrieve the properties that can be used for sorting and filtering seller results in [POST /seller/query](/v3/portal/api/ref/post-seller-query).

Operation ID: `get-seller-query-facets`

**Response 200** (`application/json`): `Seller_SellerFacets`

---

## POST /v3/seller/query

Retrieve a paged, filterable list of sellers, seller domains, and whether they can be targeted as a `SellerDomain` in a [bid list](/v3/portal/api/ref/post-bidlist).  
This will only return sellers that have spent through our platform.

Operation ID: `post-seller-query`

**Request body** (`application/json`, required): `Seller_SellerQuery`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_Seller_`

---

## GET /v3/seller/{sellerDomain}

Retrieve seller details for a specific seller domain. `SellerDomains` can be targeted in [bid lists](/v3/portal/api/ref/post-bidlist).  
This will return all sellers regardless of whether they have spent through our platform.

Operation ID: `get-seller-sellerdomain`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| sellerDomain | path | string | yes |  |

**Response 200** (`application/json`): `Seller_Seller`

---

## Schemas

### `Seller_Seller`

| Field | Type | Required | Description |
|---|---|---|---|
| AliasToSellerDomain | string |  | If this domain is an alias to another seller, the root-level seller domain will be returned here. _(nullable)_ |
| IsTargetable | boolean |  | This property indicates whether this seller can be targeted in bid lines of a bid list.   A value of `true` means that the `SellerDomain` can be targeted in a bid line.   A value of `false` means that the `SellerDomain` cannot be targeted in a bid line. |
| SellerDomain | string |  | The domain of the seller. _(nullable)_ |
| SellerDomainAliases | array<string> |  | A list of domains that are listed as aliases for this `SellerDomain`. _(nullable)_ |
| SellerName | string |  | The name of the seller. _(nullable)_ |
| SellerStatus | `Seller_SellerStatus` |  | This property indicates whether the seller is selling on our platform.   A seller may change their status at any time.   Expand the enumeration below to see the list of string values and their definitions. |

### `Seller_SellerFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| SellerStatuses | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_SellerStatus_`> |  | The statuses by which sellers may be filtered in a query. This list may be extended at any time, so please design accordingly. |
| SortingFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_SellerSortingField_`> |  | The fields by which sellers may be sorted in a query. This list may be extended at any time, so please design accordingly. |

### `Seller_SellerQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `NULL` means the maximum number of elements allowed per page.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum value for this property is 25. The maximum limit is 100.   - If a large page size is passed in, fewer items may be returned. Check the total count to see if more items are available.   For example:   - If there are 70 items, `PageStartIndex` is 0, and `PageSize` is 100, only the 70 existing items will be returned.   - If there are 100 items, `PageStartIndex` is 50, and `PageSize` is 50, the last 50 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + ResultCount is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| IncludedSellerDomains | array<string> |  | Filter to a seller whose `SellerDomain` matches the value passed for this property.   If not specified, we will return all seller domains. |
| SellerNameFilters | array<string> |  | Filter to a seller whose `SellerName` contains the value passed for this property.   f not specified, we will return all seller names. |
| SellerStatusFilter | `Seller_SellerStatus` |  | Filter to sellers whose `SellerStatus` match the value specified for this property.   If not specified, by default we return `Allowed`.   Expand the enumeration below to see the list of string values and their definitions. |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_SellerSortingField_`> |  | Optionally, specify fields to sort the results by. See [GET /seller/query/facets](/v3/portal/api/ref/get-seller-query-facets) for a list of `FieldIds`.   Sorting will happen in the order the sort properties are specified in this list.   Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by `SellerName Ascending`. _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_Seller_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`Seller_Seller`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `Seller_SellerStatus`

Type: string enum(Allowed, Disallowed)

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_SellerSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `Seller_SellerSortingField` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_SellerStatus_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `Seller_SellerStatus` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_SellerSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `Seller_SellerSortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `Seller_SellerSortingField`

Type: string enum(SellerName, SellerDomain)

