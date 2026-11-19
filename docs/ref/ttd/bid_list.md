# Bid List

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 13

---

## POST /v3/bidlist

**DEPRECATED.** We recommend using the [`bidListCreate` mutation](/v3/portal/api/gql-doc/bid-list-create) in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work.

Create a bid list, returning the created bid list.  
**TIP**: Using the equivalent bid list GraphQL query, you can enhance performance, customize criteria, and, if needed, clone bid lists.   
For details, see [Create Bid Lists](/v3/portal/api/doc/BidListsCreateManageGQL#createbidlist).

Operation ID: `post-bidlist`

**Request body** (`application/json`, required): `DimensionalBidding_BidList_post`

**Response 200** (`application/json`): `DimensionalBidding_BidListResult`

---

## PUT /v3/bidlist

**DEPRECATED.** This endpoint is no longer being actively developed and may have suboptimal performance. Use the [`bidListUpdate` mutation](/v3/portal/api/gql-doc/bid-list-update) in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work.

Update a bid list, returning the updated bid list.  
**TIP**: Using the equivalent bid list GraphQL query, you can enhance performance, customize criteria, and, if needed, update multiple bid lines.  
For details, see [Update Bid Lists](/v3/portal/api/doc/BidListsCreateManageGQL#updatebidlists).

Operation ID: `put-bidlist`

**Request body** (`application/json`, required): `DimensionalBidding_BidList_put`

**Response 200** (`application/json`): `DimensionalBidding_BidListResult`

---

## POST /v3/bidlist/batch

**DEPRECATED.** We recommend using the [`bidListCreate` mutation](/v3/portal/api/gql-doc/bid-list-create) in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work.

Create multiple bid lists at once.  
Returns a list of the created bid lists.  
If one of the bid lists is not valid the full request fails and the reason for the failure is returned.

Operation ID: `post-bidlist-batch`

**Request body** (`application/json`, required): array<`DimensionalBidding_BidList_post`>

**Response 200** (`application/json`): array<`DimensionalBidding_BidListResult`>

---

## PUT /v3/bidlist/batch

**DEPRECATED.** We recommend using the [`bidListUpdate` mutation](/v3/portal/api/gql-doc/bid-list-update) in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work.

Update multiple bid lists at once, returning the bid lists.  
If one of the bid lists is not valid the query fails and returns the reason for the failure.   
In this case, some of the bid lists might have been updated, but as the query is idempotent the full batch can be retried without any issues.

Operation ID: `put-bidlist-batch`

**Request body** (`application/json`, required): array<`DimensionalBidding_BidList_put`>

**Response 200** (`application/json`): array<`DimensionalBidding_BidListResult`>

---

## DELETE /v3/bidlist/{bidListId}

**DEPRECATED.** We recommend using the [`bidListDelete` mutation](/v3/portal/api/gql-doc/bid-list-delete) in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work.

Delete a user bid list and its associations.

Operation ID: `delete-bidlist-bidlistid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| bidListId | path | integer (int64) | yes |  |

**Response 200** (`application/json`): integer (int64)

---

## GET /v3/bidlist/{bidListId}

**DEPRECATED.** We recommend using the [`bidList` query](/v3/portal/api/gql-doc/bid-list) in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work.

Retrieve the content of a bid list.  
Returns a bid list including all the bid dimension line items.  
**TIP**: Using the equivalent bid list GraphQL query, you can enhance performance, customize criteria, and, if needed, expand your search for multiple bid lines or owners.  
For details, see [Bid List Queries](/v3/portal/api/doc/BidListsCreateManageGQL#getbidlists).

Operation ID: `get-bidlist-bidlistid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| bidListId | path | string | yes |  |

**Response 200** (`application/json`): `DimensionalBidding_BidListResult`

---

## POST /v3/bidlistsummary/query/adgroup/available

**DEPRECATED.** We recommend using the [`adGroup` → `availableBidLists` query](/v3/portal/api/gql-doc/ad-group) in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work.

Retrieve a paged list of bid lists that are available to associate with the ad group provided.

Operation ID: `post-bidlistsummary-query-adgroup-available`

**Request body** (`application/json`, required): `DimensionalBidding_BidListQuery_post`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_BidListSummaryForEntity_`

---

## POST /v3/bidlistsummary/query/campaign/available

**DEPRECATED.** We recommend using the [`campaign` → `associatedBidLists`](/v3/portal/api/gql-doc/campaign) query for associated bid lists, and the [`campaign` → `ownedBidLists` query](/v3/portal/api/gql-doc/campaign) for owned bid lists, in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work.

Retrieve a paged list of bid lists that are available to associate with the provided campaign.

Operation ID: `post-bidlistsummary-query-campaign-available`

**Request body** (`application/json`, required): `DimensionalBidding_BidListQuery_post`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_BidListSummaryForEntity_`

---

## POST /v3/bidlistsummary/query/advertiser/available

**DEPRECATED.** We recommend using the [`advertiser` → `associatedBidLists`](/v3/portal/api/gql-doc/advertiser) query for associated bid lists, and the [`advertiser` → `ownedBidLists` query](/v3/portal/api/gql-doc/advertiser) for owned bid lists, in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work.

Retrieve a paged list of bid lists that are available to associate with the provided advertiser.

Operation ID: `post-bidlistsummary-query-advertiser-available`

**Request body** (`application/json`, required): `DimensionalBidding_BidListQuery_post`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_BidListSummaryForEntity_`

---

## POST /v3/bidlistsummary/query/partner/available

**DEPRECATED.** We recommend using the [`partner` → `associatedBidLists` query](/v3/portal/api/gql-doc/partner) for associated bid lists, and the [`partner` → `ownedBidLists` query](/v3/portal/api/gql-doc/partner) for owned bid lists, in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work.

Retrieve a paged list of bid lists that are available to associate with the provided partner.

Operation ID: `post-bidlistsummary-query-partner-available`

**Request body** (`application/json`, required): `DimensionalBidding_BidListQuery_post`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_BidListSummaryForEntity_`

---

## POST /v3/bidlist/batch/get

**DEPRECATED.** We recommend using the [`bidList` query](/v3/portal/api/gql-doc/bid-list) in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work.

Retrieve the contents of an array of bid lists.  
**IMPORTANT**: In the request, be sure to pass a list of bid list IDs as a string array, not an object array.   
Returns a list of bid list contents, including all bid dimension line items.

Operation ID: `post-bidlist-batch-get`

**Request body** (`application/json`, required): array<string>

**Response 200** (`application/json`): `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_BidListResult_`

---

## POST /v3/bidlistsummary/query/global

Retrieve a paged list of global bid lists.  
By default, global bid lists that include a private contract ID are excluded from the results. If you don't see the results you expect, you could use the optional `ReturnBidListsUnavailableForLibraryUse` parameter with a value of `true` to include additional bid lists in the results.

Operation ID: `post-bidlistsummary-query-global`

**Request body** (`application/json`, required): `DimensionalBidding_GlobalBidListQuery`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_BidListSummary_`

---

## POST /v3/bidlist/query/unassociated

Retrieve a paged list of unassociated bid lists at a given level of ownership.

Operation ID: `post-bidlist-query-unassociated`

**Request body** (`application/json`, required): `DimensionalBidding_UnassociatedBidListQuery_post`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_UnassociatedBidList_`

---

## Schemas

### `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_BidListResult_`

| Field | Type | Required | Description |
|---|---|---|---|
| BatchResponses | map<string, `TTD.Domain.Shared.PublicAPI.Models_ApiBatchValue_BidListResult_`> |  | The batch responses object, which is a dictionary of key-value pairs with the following definitions:   - The key is a platform ID that identifies each `Response` object processed in a batch. Depending on the endpoint, this can be a category, SKU, list, tracking tag, bid list, or another resource ID.   - The value is typically the `Response` object with the category, product, list, tracking tag, bid list, or other resource details, or an `Error` object with the failure details for the operation. _(nullable)_ |
| ContainsError | boolean |  | If set to `true`, indicates that at least one operation in the batch has failed, with the details provided in the `Error` object of the operation.   If set to `false`, indicates that the entire request has been processed successfully.    For the ecommerce batch endpoint response examples, see [Retail Data Integration API](/v3/portal/data/doc/CommerceSolutionsAPI). |

### `DimensionalBidding_BidListQuery_post`

| Field | Type | Required | Description |
|---|---|---|---|
| EntityId | string | yes | The ID for the entity type associated with the bid list(s).           For details on entity associations, see [Association](/v3/portal/api/doc/BidList#bidlistassociation). |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| BidListIds | array<integer (int64)> |  | A list of bid list IDs that can be used as filters. _(nullable)_ |
| DimensionDescriptorFilters | array<`DimensionalBidding_DimensionDescriptor`> |  | The dimensions for filtering returned bid lists. _(nullable)_ |
| MaximumLevel | `DimensionalBidding_BidListOwner` |  | Determines the top hierarchy level to query for available bid lists.   For example, if the `MaximumLevel` property in an ad group query is set to 'Advertiser', it displays available bid lists at the ad group, campaign, and advertiser levels, while excluding those at the partner level and above. |
| ReturnBidListsUnavailableForLibraryUse | boolean |  | If set to `true`, returns all bid lists, including those that are not available for library use regardless of their `IsAvailableForLibraryUse` property value. For example, search results include bid lists that have the `PrivateContractId` dimension.   The default value is `false`. If this value is set or not included in the request, only bid lists owned by the requested entity ID or those available for library use (with the `IsAvailableForLibraryUse` property set to `true`) are returned. |
| ReturnOnlyEnabledBidLists | boolean |  | If set to `true`, only those bid lists that are associated with and enabled for a specific entity are returned—-in other words, those that have `IsEnabled` set to `true` in the `AssociatedBidLists` array. This also automatically sets the `ReturnBidListsUnavailableForLibraryUse` property to `true`.   **NOTE**: To retrieve a list of all associated bid lists, use the [GET /v3/partner/{partnerId}](/v3/portal/api/ref/get-partner-partnerid) endpoint.   If this property is set to `false` (default value) or is excluded from a request, all bid lists will be returned—-those already associated with the entity and those available to be associated. |

### `DimensionalBidding_BidListResult`

| Field | Type | Required | Description |
|---|---|---|---|
| BidLines | array<`DimensionalBidding_BidLine`> |  | The list of bid lines used with the resolution type to calculate the bid list adjustment. All bid lines in the bid list must have the same dimensions except for the bid adjustment.   For example, if Bid Line 1 sets the `DomainFragment` property to `test.com`, Bid Line 2 must also set this property and can optionally set the bid adjustment. Do not set any other optional dimensions.   For details, see [Bid Lists](/v3/portal/api/doc/BidList). |
| BidListAdjustmentType | `DimensionalBidding_BidListAdjustmentType` |  | The method for determining how the bid adjustment is applied when an impression doesn't match a bid line. This type is set when a bid list is created and cannot be changed afterward.   If an impression matches multiple bid lists with different bid list adjustment types, the bid adjustments are multiplied together to get the final bid. For example, if an impression gets a bid adjustment of 0.75 from an optimized list and a bid adjustment of 0 from a block list, the final bid adjustment is 0.75*0=0. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |
| BidListDimensions | array<`DimensionalBidding_DimensionDescriptor`> |  | A list of dimensions associated with the bid list, such as ad format, device type, and domain fragment. This property is read-only. _(nullable)_ |
| BidListId | string |  | The platform ID of the bid list. It is ignored during creation. |
| BidListOwner | `DimensionalBidding_BidListOwner` |  | The entity type that owns the bid list. For example, if the `BidListOwnerId` property is set to `AdGroupId`, the `BidListOwner` property should be set to `AdGroup`.    When changing the owner of a bid list, the new owner must be an ancestor of the previous owner. For details, see [Bid List Relationships](/v3/portal/api/doc/BidList#bidlistrelationships). |
| BidListOwnerId | string |  | The ID of the entity (partner, campaign, advertiser, ad group) that owns the bid list. Ownership determines access to the bid list and governs its inheritance and association rules.   **IMPORTANT**: There is a limit to the number of bid lines owned by or associated with each ad group, advertiser, or partner. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |
| BidListSource | `DimensionalBidding_BidListSource` |  | The source of this bid list. This property is read-only. |
| BidListType | `DimensionalBidding_BidListType` |  | The bid list type, such as target list or block list. This property is read-only. |
| IsAvailableForLibraryUse | boolean |  | If set to `true`, bid lists appear in the platform UI as a reusable library list for the bid list owner and its descendants. This setting applies to target and block lists that contain a single dimension of either domain fragment or geo segment ID.   The default value is `false`, indicating that the bid list is not displayed in the library. Since ad groups have no descendants, setting this property to `true` for a bid list owned by an ad group results in a 400 error.    **NOTE**: When owned at the partner or advertiser level, bid lists with the domain fragment dimension are available within the partner or advertiser site/app inventory library. Similarly, bid lists with the geo segment ID dimension are available in the partner or advertiser locations library. For example, an advertiser-owned bid list with `HasGeoSegmentId` and `IsAvailableForLibraryUse` properties set to `true` is displayed as a library list for a related ad group in the Geography rail tile as a library list and in the advertiser's locations library. |
| IsGlobal | boolean |  | If set to `true`, indicates that the bid list can be applied to any entity.   The default value is `false`.   **NOTE**: The Trade Desk supports global bid lists, like our global block list, but they are managed by our marketplace quality team and not by entities in the advertising campaign. To see available global lists that you can associate, use [POST /bidlistsummary/query/global](/v3/portal/api/ref/post-bidlistsummary-query-global). |
| Name | string |  | The name of the bid list. Bid list names typically describe the dimension and adjustment type, such as "Site/App Target List". _(maxLength 512)_ |
| ResolutionType | `DimensionalBidding_MultipleMatchResolutionType` |  | The method for determining how the bid adjustment is applied when an impression matches multiple bid lines in a bid list. We recommend using `ApplyMultiplyAdjustment` for all bid lists. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |

### `DimensionalBidding_BidList_post`

| Field | Type | Required | Description |
|---|---|---|---|
| BidLines | array<`DimensionalBidding_BidLine_post`> | yes | The list of bid lines used with the resolution type to calculate the bid list adjustment. All bid lines in the bid list must have the same dimensions except for the bid adjustment.   For example, if Bid Line 1 sets the `DomainFragment` property to `test.com`, Bid Line 2 must also set this property and can optionally set the bid adjustment. Do not set any other optional dimensions.   For details, see [Bid Lists](/v3/portal/api/doc/BidList). |
| BidListAdjustmentType | `DimensionalBidding_BidListAdjustmentType` | yes | The method for determining how the bid adjustment is applied when an impression doesn't match a bid line. This type is set when a bid list is created and cannot be changed afterward.   If an impression matches multiple bid lists with different bid list adjustment types, the bid adjustments are multiplied together to get the final bid. For example, if an impression gets a bid adjustment of 0.75 from an optimized list and a bid adjustment of 0 from a block list, the final bid adjustment is 0.75*0=0. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |
| BidListOwner | `DimensionalBidding_BidListOwner` | yes | The entity type that owns the bid list. For example, if the `BidListOwnerId` property is set to `AdGroupId`, the `BidListOwner` property should be set to `AdGroup`.    When changing the owner of a bid list, the new owner must be an ancestor of the previous owner. For details, see [Bid List Relationships](/v3/portal/api/doc/BidList#bidlistrelationships). |
| BidListOwnerId | string | yes | The ID of the entity (partner, campaign, advertiser, ad group) that owns the bid list. Ownership determines access to the bid list and governs its inheritance and association rules.   **IMPORTANT**: There is a limit to the number of bid lines owned by or associated with each ad group, advertiser, or partner. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |
| Name | string | yes | The name of the bid list. Bid list names typically describe the dimension and adjustment type, such as "Site/App Target List". _(maxLength 512)_ |
| IsAvailableForLibraryUse | boolean |  | If set to `true`, bid lists appear in the platform UI as a reusable library list for the bid list owner and its descendants. This setting applies to target and block lists that contain a single dimension of either domain fragment or geo segment ID.   The default value is `false`, indicating that the bid list is not displayed in the library. Since ad groups have no descendants, setting this property to `true` for a bid list owned by an ad group results in a 400 error.    **NOTE**: When owned at the partner or advertiser level, bid lists with the domain fragment dimension are available within the partner or advertiser site/app inventory library. Similarly, bid lists with the geo segment ID dimension are available in the partner or advertiser locations library. For example, an advertiser-owned bid list with `HasGeoSegmentId` and `IsAvailableForLibraryUse` properties set to `true` is displayed as a library list for a related ad group in the Geography rail tile as a library list and in the advertiser's locations library. |
| ResolutionType | `DimensionalBidding_MultipleMatchResolutionType` |  | The method for determining how the bid adjustment is applied when an impression matches multiple bid lines in a bid list. We recommend using `ApplyMultiplyAdjustment` for all bid lists. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |

### `DimensionalBidding_BidList_put`

| Field | Type | Required | Description |
|---|---|---|---|
| BidListId | string | yes | The platform ID of the bid list. It is ignored during creation. |
| BidLines | array<`DimensionalBidding_BidLine_put`> |  | The list of bid lines used with the resolution type to calculate the bid list adjustment. All bid lines in the bid list must have the same dimensions except for the bid adjustment.   For example, if Bid Line 1 sets the `DomainFragment` property to `test.com`, Bid Line 2 must also set this property and can optionally set the bid adjustment. Do not set any other optional dimensions.   For details, see [Bid Lists](/v3/portal/api/doc/BidList). |
| BidListOwner | `DimensionalBidding_BidListOwner` |  | The entity type that owns the bid list. For example, if the `BidListOwnerId` property is set to `AdGroupId`, the `BidListOwner` property should be set to `AdGroup`.    When changing the owner of a bid list, the new owner must be an ancestor of the previous owner. For details, see [Bid List Relationships](/v3/portal/api/doc/BidList#bidlistrelationships). |
| BidListOwnerId | string |  | The ID of the entity (partner, campaign, advertiser, ad group) that owns the bid list. Ownership determines access to the bid list and governs its inheritance and association rules.   **IMPORTANT**: There is a limit to the number of bid lines owned by or associated with each ad group, advertiser, or partner. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |
| IsAvailableForLibraryUse | boolean |  | If set to `true`, bid lists appear in the platform UI as a reusable library list for the bid list owner and its descendants. This setting applies to target and block lists that contain a single dimension of either domain fragment or geo segment ID.   The default value is `false`, indicating that the bid list is not displayed in the library. Since ad groups have no descendants, setting this property to `true` for a bid list owned by an ad group results in a 400 error.    **NOTE**: When owned at the partner or advertiser level, bid lists with the domain fragment dimension are available within the partner or advertiser site/app inventory library. Similarly, bid lists with the geo segment ID dimension are available in the partner or advertiser locations library. For example, an advertiser-owned bid list with `HasGeoSegmentId` and `IsAvailableForLibraryUse` properties set to `true` is displayed as a library list for a related ad group in the Geography rail tile as a library list and in the advertiser's locations library. |
| Name | string |  | The name of the bid list. Bid list names typically describe the dimension and adjustment type, such as "Site/App Target List". _(maxLength 512)_ |
| ResolutionType | `DimensionalBidding_MultipleMatchResolutionType` |  | The method for determining how the bid adjustment is applied when an impression matches multiple bid lines in a bid list. We recommend using `ApplyMultiplyAdjustment` for all bid lists. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |

### `DimensionalBidding_GlobalBidListQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| BidListIds | array<integer (int64)> |  | A list of bid list IDs that can be used as filters. _(nullable)_ |
| DimensionDescriptorFilters | array<`DimensionalBidding_DimensionDescriptor`> |  | The dimensions for filtering returned bid lists. _(nullable)_ |
| ReturnBidListsUnavailableForLibraryUse | boolean |  | If set to `true`, returns all bid lists, including those that are not available for library use regardless of their `IsAvailableForLibraryUse` property value. For example, search results include bid lists that have the `PrivateContractId` dimension.   The default value is `false`. If this value is set or not included in the request, only bid lists owned by the requested entity ID or those available for library use (with the `IsAvailableForLibraryUse` property set to `true`) are returned. |

### `DimensionalBidding_UnassociatedBidListQuery_post`

| Field | Type | Required | Description |
|---|---|---|---|
| OwnerEntityType | `DimensionalBidding_UnassociatedBidListOwner` | yes | The entity type (AdGroup, Campaign, Advertiser, or Partner) whose unassociated bid lists are to be included in the response. The query will return all unassociated lists owned at this level. |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The `PageSize` cannot be greater than 100. An unspecified `PageSize`, or a `PageSize` with a value of `null`, is treated as a `PageSize` of 100.    - If there are 30 items, `PageStartIndex` is 0, and `PageSize` is 50, only the 30 existing items will be returned.   - If there are 100 items, `PageStartIndex` is 50, and `PageSize` is 50, the last 50 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| PartnerId | string | yes | The ID of the partner making the query |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_BidListSummaryForEntity_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`DimensionalBidding_BidListSummaryForEntity`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_BidListSummary_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`DimensionalBidding_BidListSummary`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_UnassociatedBidList_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`DimensionalBidding_UnassociatedBidList`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TTD.Domain.Shared.PublicAPI.Models_ApiBatchValue_BidListResult_`

| Field | Type | Required | Description |
|---|---|---|---|
| Error | `TTD.Domain.Shared.PublicAPI.Models_ApiBatchError` |  | The Error object sent back by the api if the section of the batch query failed. _(nullable)_ |
| Response | `DimensionalBidding_BidListResult` |  | The response sent back by the api if the section of the batch query is successful. _(nullable)_ |

### `DimensionalBidding_BidListOwner`

Type: string enum(AdGroup, Campaign, Advertiser, Partner, Global)

### `DimensionalBidding_DimensionDescriptor`

Type: string enum(UnknownDimension, HasAdFormatId, HasDomainFragmentId, HasUniversalCategoryTaxonomyId, HasAdvertiserTargetingDataId, HasBrowserId, HasCarrierId, HasDeviceModelId, HasDeviceTypeId, HasGeoSegmentId, HasHourOfWeek, HasLanguageId, HasOsId, HasPrivateContractId, HasRecencyWindowInMinutes, HasRenderingContextId, HasFactualGeostoreTargetingDataId, HasSupplyVendorId, HasTemperatureBucketInCelsius, HasThirdPartyData, HasAdsTxtSellerTypeId, HasVideoMutedStateId, HasVideoPlaybackTypeId, HasVideoPlayerSizeId, HasVideoQualityId, HasVideoSkippabilityId, HasFactualProximityDataId, HasImpressionPlacementId, HasVideoTruthScoreRange, HasVideoViewabilityScoreRange, HasDisplayViewabilityScoreRange, HasPeer39LanguageId, HasIntegralContextualCategoryId, HasPeer39ContextualCategoryId, HasDoubleVerifyContextualCategoryId, HasIntegralBrandSafetyCategoryId, HasIntegralVideoBrandSafetyCategoryId, HasPeer39BrandSafetyCategoryId, HasDoubleVerifyBrandSafetyCategoryId, HasIntegralPageQualityCategoryId, HasIntegralVideoPageQualityCategoryId, HasPeer39PageQualityCategoryId, HasDoubleVerifyBotAvoidanceCategoryId, HasContextualAppCategoryId, HasPublisherId, HasIntegralViewabilityCategoryId, HasIntegralVideoViewabilityCategoryId, HasDoubleVerifyViewabilityCategoryId, HasDoubleVerifyVideoViewabilityCategoryId, HasFrequencyAdjustmentId, HasPeer39ViewabilityCategoryId, HasVideoCompletionRateScoreRange, HasInternetConnectionTypeId, HasRTBAsiaPageQualityCategoryId, HasRTBAsiaVideoPageQualityCategoryId, HasTTDContextualCategoryId, HasSupplyPathOptimizationListId, HasMarketTypeId, HasContextualSupplyVendorGenreId, HasContextualSupplyVendorCategoryId, HasWeatherConditionId, HasFrequencyV2AdjustmentId, HasSemasioContextualCategoryId, HasSellerId, HasDigitalOutOfHomeVenueTypeId, HasNativePlacementTypeId, HasTTDNativeContextTypeId, HasDomainClassId, HasGeofenceThirdPartyDataAndBrand, HasPreBidContextualCategoryId, HasTencentPageQualityCategoryId, HasContentGenre, HasContentLivestream, HasContentProductionQuality, HasContentRating, HasContentDuration, HasTVQualityIndexRange, HasAtmosphericCondition, HasMarketplaceId, HasAudienceReachPercentageTierId, HasAdLoadCategory, HasFullReferrerUrl, HasLikelyRefreshRate, HasContentTransparency, HasIdiosyncraticSegmentId, HasRewarded, HasSellerRelationshipTypeId, HasAdToContentRatioRange, HasAdsInViewRange, HasExtendedZipCodeGroupSegmentThirdPartyDataId, HasContentLanguage)

### `DimensionalBidding_BidLine`

| Field | Type | Required | Description |
|---|---|---|---|
| AdFormatId | string |  | The ID of the ad format used for the bid line adjustment. For details, see [POST /v3/adformat/query](/v3/portal/api/ref/post-adformat-query). |
| AdsTxtSellerType | `AdGroup_AdsTxtSellerType` |  | The `ads.txt` seller type that indicates the relationship between the SSP and publisher for a given impression, as defined by the IAB. The supported values include:<ul><li>`0` (Unknown)</li><li>`1` (Direct)</li><li>`2` (Reseller)</li><li>`3` (Unauthorized)</li></ul> |
| AdvertiserTargetingDataId | integer (int64) |  | The advertiser targeting data ID from the targeting data group. |
| AtmosphericCondition | `DimensionalBidding_AtmosphericCondition` |  | The current or forecast severity level of pollen concentration in the atmosphere that you want to target. Pollen risk targeting helps advertisers in the healthcare industry and those selling indoor air treatment products reach their target audiences more effectively. You can use this information to direct your media spend to areas with the highest pollen concentration (and subsequently have more people suffering from allergies and also looking for air purifiers or allergy medication).   Here's what you need to know about this property:   - Values that end in `Forecast` indicate the areas *forecast* to reach the specified severity level within the next 48 hours. For example, the value of `MediumForecast` enables you to target areas that have been forecast to have a medium severity of pollen concentration in the next 48 hours.   - The rest of the values indicate the *current* level of pollen concentration. For example, the value of `High` enables you to target areas that currently have a high level of pollen concentration. |
| AudienceReachPercentageTier | `DimensionalBidding_AudienceReachPercentageTier` |  | Audience Reach Percentage Tier Dimension |
| BidAdjustment | number (double) |  | The adjustment to be applied when an impression matches the bid line. Recommended for optimized lists. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |
| BidLineId | string |  | The ID of the bid line. This property is read-only. |
| Browser | `DimensionalBidding_Browser` |  | The type and version of the user's browser to target. |
| CarrierId | integer (int32) |  | The ID of the mobile carrier to target.   For a complete list of mobile carriers, use the [POST /v3/mobilecarrier/query](/v3/portal/api/ref/post-mobilecarrier-query) endpoint. |
| ContentDuration | `DimensionalBidding_ContentDuration` |  | The duration (in minutes) of the content to target. |
| ContentGenre | string |  | The content genre to target. For a list of available genre IDs, use the [GET /content/genre/query](/v3/portal/api/ref/get-content-genre-query) endpoint. |
| ContentLanguage | string |  | The language code of the content (for example, "en") to target. |
| ContentLivestream | `DimensionalBidding_ContentLivestream` |  | The live stream type of the content to target: live or not. |
| ContentProductionQuality | `DimensionalBidding_ContentProductionQuality` |  | The production quality of the content to target. |
| ContentRating | string |  | The rating of the content to target. For a list of available rating IDs, use the [GET /content/rating/query](/v3/portal/api/ref/get-content-rating-query) endpoint. |
| ContextualAppCategoryId | string |  | The ID of the Contextual Application category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `ContextualApp`. |
| ContextualSupplyVendorCategoryId | string |  | A supply vendor category identifier to target. For details about category targeting in China, see *Inventory Feature Availability* in the [Knowledge Portal](https://desk.thetradedesk.com/knowledge-portal/en/china-inventory-partners-feature-availability.html#category-and-keyword-targeting).     To use this feature, you must sign a China MSA. For details, contact your Account Manager.    To get a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set the `CategorySourceType` value to `ContextualSupplyVendorCategory`.     In the platform UI, these settings are visible in the [Category (China) rail tile](https://desk.thetradedesk.com/knowledge-portal/en/china-category-targeting.html#category--china--rail-tile). |
| ContextualSupplyVendorGenreId | string |  | A supply vendor genre identifier to target. For details about genre targeting in China, see *Inventory Feature Availability* in the [Knowledge Portal](https://desk.thetradedesk.com/knowledge-portal/en/china-inventory-partners-feature-availability.html#category-and-keyword-targeting).     To use this feature, you must sign a China MSA. For details, contact your Account Manager.    To get a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set the `CategorySourceType` value to `ContextualSupplyVendorGenre`.     In the platform UI, these settings are visible in the [Video Genre (China)](https://desk.thetradedesk.com/knowledge-portal/en/china-category-targeting.html#video-genre--china--targeting--blocking--and-optimization) rail tile. |
| DeviceModelId | integer (int32) |  | The ID of the device model to target.   For a complete list of device models, use the [POST /v3/devicemakemodel/query](/v3/portal/api/ref/post-devicemakemodel-query) endpoint. |
| DeviceType | `DimensionalBidding_DeviceType` |  | The device type used to apply bid adjustments. |
| DigitalOutOfHomeVenueTypeId | string |  | The ID of the Digital Out-Of-Home (DOOH) venue type to target. For enum values, see [Digital Out-of-Home Screen Venue Types](https://github.com/openooh/venue-taxonomy/blob/main/specification-1.0.md). |
| DisplayViewabilityScoreRange | `TheTradeDesk.AdPlatform_Range_number_double__` |  | The average display viewability score range to target when bidding on impressions (0 to 1). |
| DomainFragment | string |  | The domain or app ID to match for the bid adjustment. Domains are matched in whole sections from right to left. Examples:      - "com" matches "site.com" and "mysite.com" but *not* "site.net" and *not* "com.net" and *not* "site.com.net"      - "site" matches "some.site" and *not* "site.net" and *not* "site.com"      - "site.com" matches "site.com" and "my.site.com" but *not* "mysite.com"      - "my.site.com" matches "my.site.com" and "is.my.site.com" but *not* "dummy.site.com" |
| DoubleVerifyBotAvoidanceCategoryId | string |  | The ID of the DoubleVerify Bot Avoidance category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `DoubleVerifyBotAvoidance`. |
| DoubleVerifyVideoViewabilityCategoryId | string |  | The ID of the DoubleVerify Video Viewability category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `DoubleVerifyVideoViewability`. |
| DoubleVerifyViewabilityCategoryId | string |  | The ID of the DoubleVerify Viewability category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `DoubleVerifyViewability`. |
| ExtendedZipCodeGroupSegmentThirdPartyDataId | integer (int64) |  | The extended zip code group segment third party data id to target. |
| FrequencyRange | `DimensionalBidding_FrequencyRange` |  | Target a range of values that represent how many times a user has viewed an ad based on a specific frequency counter. |
| GeofenceThirdPartyDataAndBrand | `DimensionalBidding_ThirdPartyData` |  | The geofence third party data to target |
| GeoSegmentId | string |  | The ID of the geo segments to target and the adjustments to apply when bidding on impressions in those geographic areas.   To retrieve a list of available geo segments at the partner or advertiser level, use the [POST /geosegment/query/advertiser](/v3/portal/api/ref/post-geosegment-query-advertiser) or [POST /geosegment/query/partner](/v3/portal/api/ref/post-geosegment-query-partner) endpoints.   To target a geo segment in China as a custom list or market region, you must sign the China Master Service Agreement (MSA). For details, contact your account manager. |
| HourOfWeek | integer |  | The 0-based hour of the week to target (from 0 to 167). For example, to bid on impressions from 12 PM to 1 PM on Monday, set an adjustment for hour 36 since 0-23 is Sunday, 24-47 is Monday, and 36 is noon on Monday.   These hours are in the user's local time. A bid for noon on Monday in a US-wide campaign would cover noon in Eastern, Central, Mountain, and Pacific time zones.   You can supply -1 to determine bidding behavior when the hour of the week is unknown. |
| ImpressionPlacementValue | string |  | The adjustment to apply based on Impression Placement Id Value.   The ImpressionPlacementValue should be a string not exceeding 128 characters.   Note: While the API does not enforce this, it is suggested that you use this dimension in conjunction with Domain, as the same placement ID might be received for different sites in bid requests. _(maxLength 128)_ |
| IntegralPageQualityCategoryId | string |  | The ID of the Integral Page Quality category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralPageQuality`. |
| IntegralVideoPageQualityCategoryId | string |  | The ID of the Integral Video Page Quality category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralVideoPageQuality`. |
| IntegralVideoViewabilityCategoryId | string |  | The ID of the Integral Video Viewability category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralVideoViewability`. |
| IntegralViewabilityCategoryId | string |  | The ID of the Integral Viewability category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralViewability`. |
| InternetConnectionType | `DimensionalBidding_InternetConnectionType` |  | The adjustments to apply based on the type of the user's internet connection type. |
| LanguageId | integer (int32) |  | The default language provided by the browser's user agent.   The ID specified in this property must match an ID for a default language. To query lists of valid default language IDs and facets, see [Language](/v3/portal/api/area/Language). |
| LikelyRefreshRate | `DimensionalBidding_LikelyRefreshRate` |  | Likely Refresh Rate (in seconds) |
| MarketType | `DimensionalBidding_MarketType` |  | `MarketType` is a dimension that allows you to apply bid adjustments to private contract inventory or to open market inventory. This dimension provides additional flexibility when private contracts are applied to an ad group and the ad group's `ContractTargeting.AllowOpenMarketBiddingWhenTargetingContracts` property is set to `true`. It is best used within a multi-dimensional bidding strategy alongside other dimensions. For example, you may want to block unknown `AdsTxtSellerType` inventory in the open market, but not in the private market.      No-Bid Conditions: If `MarketType` is set to `PMP` on a `TargetList` and there are no private contracts applied to the ad group, the ad group will not bid. If `MarketType` is set to `Open` on a `TargetList`, there are private contracts applied to the ad group, and the ad group's `ContractTargeting.AllowOpenMarketBiddingWhenTargetingContracts` property is set to `false`, the ad group will not bid.     This dimension does not appear as a tile in our user interface. |
| NativePlacementType | `DimensionalBidding_NativePlacementType` |  | The adjustments to apply based on the native placement type. |
| Os | string |  | The user's operating system to target. _(maxLength 20)_ |
| Peer39LanguageId | integer (int32) |  | The ID of the Peer39 language to target. For a list of language IDs, use the [POST /language/query](/v3/portal/api/ref/post-language-query) endpoint and set `LanguageSourceType` to `Peer39SiteLanguage`. |
| Peer39PageQualityCategoryId | string |  | The ID of the Peer39 Page Quality category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `Peer39PageQuality`. |
| Peer39ViewabilityCategoryId | string |  | The ID of the Peer39 Viewability category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `Peer39Viewability`. |
| PrivateContractId | string |  | The private contract to target.   For a complete list of available private contracts, see the following endpoints:   * [POST /v3/contract/buyers/query/advertisers](/v3/portal/api/ref/post-contract-buyers-query-advertisers)   * [POST /v3/contract/buyers/query/partners](/v3/portal/api/ref/post-contract-buyers-query-partners) _(maxLength 32)_ |
| PublisherId | string |  | The publisher ID to target. See the Supply Vendor Publisher Id property in My Reports to get possible values. |
| RecencyWindowInMinutes | `TheTradeDesk.AdPlatform_Range_integer_int32__` |  | Recency refers to how long a user has been in a data segment. Use it to target or adjust your bid based on audience age. For example, bid double for users added within the last hour by setting the range from 0 to 59 with a bid adjustment of 2. Both values are inclusive. |
| RenderingContext | `DimensionalBidding_RenderingContext` |  | The rendering context to target. |
| Rewarded | `DimensionalBidding_Rewarded` |  | Whether the impression is rewarded or not |
| RTBAsiaPageQualityCategoryId | string |  | The ID of the RTBAsia Page Quality category to target.   Here's what you need to know about this property:    - To use this feature, you must sign a China MSA. For details, contact your Account Manager.    - For a list of valid category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `RTBAsiaPageQuality`.    - In the platform UI, you can view these settings in the Display Anti-Fraud Protection (RTBAsia) tile. |
| RTBAsiaVideoPageQualityCategoryId | string |  | The ID of the RTBAsia Video Page Quality category to target.    Here's what you need to know about this property:    - To use this feature, you must sign a China MSA. For details, contact your Account Manager.    - For a list of valid category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `RTBAsiaVideoPageQuality`.    - In the platform UI, you can view these settings in the Video Anti-Fraud Protection (RTBAsia) tile. |
| SellerDomain | string |  | The domain associated with the seller you wish to target. This domain cannot be a `AliasToSellerDomain` for another seller.        You can query the list of sellers here: [POST /seller/query](/v3/portal/api/ref/post-seller-query).        If a seller domain becomes an alias to another seller domain after you already targeted it, this property will return the original alias from the seller domain.   You can then use the query endpoint to find the final aliased seller domain. |
| SupplyVendorId | integer (int64) |  | **IMPORTANT**: This field is intended for managing only supply vendor or reseller relationships, not direct publisher connections. To manage direct publisher inventory, use publisher lists or site lists instead.   The numeric ID for the supply vendor from which the impression would be purchased. For fixed-price contracts, this must correspond with the delivery profile ID.   For a complete list of values, use the following endpoints:    * [POST /v3/supplyvendor/query/advertiser](/v3/portal/api/ref/post-supplyvendor-query-advertiser)    * [POST /v3/supplyvendor/query/partner](/v3/portal/api/ref/post-supplyvendor-query-partner) |
| TemperatureRangeInCelsius | `TheTradeDesk.AdPlatform_Range_number_double__` |  | Target temperature range (in degrees Celsius) to target: minimum (inclusive) to maximum (exclusive). |
| TencentPageQualityCategoryId | string |  | The ID of the Tencent Page Quality category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint. |
| ThirdPartyData | `DimensionalBidding_ThirdPartyData` |  | The third-party data brand ID associated with the third-party data ID in the targeting data group. For details, see [Audiences](/v3/portal/api/doc/Audience) |
| TTDNativeContextType | `DimensionalBidding_TTDNativeContextType` |  | The adjustments to apply based on The Trade Desk's native context type. |
| TVQualityIndexRange | `TheTradeDesk.AdPlatform_Range_number_double__` |  | The `TVQualityIndexRange` dimension defines a range between a min and a max value for the TV Quality Index (TVQI). The TVQI measures the quality of inventory a campaign runs, on a scale of 1 - 100. It is an aggregate of the weighted scores for eight criteria (content, addressability, playback type, device type, content duration, production quality, content signal transparency, and market type) across three pillars of quality (content, ad experience, and signals).    For details on each score component, see the [Knowledge Portal](https://desk.thetradedesk.com/knowledge-portal/en/optimization-tv-quality-index.html). |
| UniversalCategoryTaxonomyId | string |  | The ID of the universal category taxonomy to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `UniversalCategoryTaxonomy`. |
| VideoCompletionRateScoreRange | `TheTradeDesk.AdPlatform_Range_number_double__` |  | The video completion rate score range to target when bidding on impressions (0 to 1). |
| VideoMutedState | `AdGroup_VideoMutedState` |  | The video muted state setting to target. |
| VideoPlaybackType | `AdGroup_VideoPlaybackType` |  | The video playback type setting to target. |
| VideoPlayerSize | `AdGroup_VideoPlayerSize` |  | The size of the video player to target. |
| VideoQuality | `AdGroup_VideoQuality` |  | The video quality to target. |
| VideoSkippability | `AdGroup_VideoSkippability` |  | The video skippability setting to target. |
| VideoTruthScoreRange | `TheTradeDesk.AdPlatform_Range_number_double__` |  | Percentage difference in size between the advertised screen size and the actual rendering size of the video player (0 to 1). |
| VideoViewabilityScoreRange | `TheTradeDesk.AdPlatform_Range_number_double__` |  | The average video viewability score range to target when bidding on impressions (0 to 1). |
| VolumeControlPriority | `DimensionalBidding_VolumeControlPriority` |  | The volume control priority to apply to this adjustment. |
| WeatherConditionId | integer (int32) |  | The ID of the weather condition to target. To look up available weather conditions and their identifiers, use the [GET /weathercondition/query/available](/v3/portal/api/ref/get-weathercondition-query-available) endpoint.   To view related information in the Knowledge Portal, see <a href="https://desk.thetradedesk.com/knowledge-portal/en/targeting-weather-condition.html#weather-condition-rail-tile" target="_blank">Weather Condition Targeting</a>. |
| AblidaContextualCategoryId | string |  | The ID of the Ablida Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `AblidaContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| AdelaideContextualCategoryId | string |  | The ID of the Adelaide Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `AdelaideContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| AdFontesContextualCategoryId | string |  | The ID of the Ad Fontes Media Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `AdFontesContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| AeternaLabsContextualCategoryId | string |  | The ID of the Aeterna Labs Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `AeternaLabsContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| AnokiIncContextualCategoryId | string |  | The ID of the AnokiInc Contextual Category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `AnokiIncContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| AudigentContextualCategoryId | string |  | The ID of the Audigent Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `AudigentContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| BarometerContextualCategoryId | string |  | The ID of the Barometer Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `BarometerContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| CaptifyContextualCategoryId | string |  | The ID of the Captify Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `CaptifyContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| ComscoreContextualCategoryId | string |  | The ID of the Comscore Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `ComscoreContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| CrossPixelContextualCategoryId | string |  | The ID of the Cross Pixel Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `CrossPixelContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| DoubleVerifyBrandSafetyCategoryId | string |  | The ID of the DoubleVerify Brand Safety category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `DoubleVerifyBrandSafety`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| DoubleVerifyContextualCategoryId | string |  | The ID of the DoubleVerify Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `DoubleVerifyContextual`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| DstilleryContextualCategoryId | string |  | The ID of the Dstillery ID-free Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `DstilleryContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| EmetriqContextualCategoryId | string |  | The ID of the Emetriq Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `EmetriqContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| FactualGeoTargetingId | integer (int64) |  | The ID of the factual geo segment that the bid line is targeting. _(DEPRECATED; deprecation: Please use `GeofenceThirdPartyDataAndBrand` instead.)_ |
| FourDContextualCategoryId | string |  | The ID of the 4D Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `FourDContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| FrequencyTarget | `DimensionalBidding_FrequencyTarget` |  | The ad frequency to target. This is a Frequency v1 setting that has been replaced by the new Frequency v2 property, `FrequencyRange`. For migration details and examples of old and new bid lists, see [Frequency Migration Phase Two](/v3/portal/api/doc/UpgradeSupportFrequencyV2FinalMigration) (contact your Technical Account Manager for permissions). For details on the new settings and resulting bid lists, see [Frequency Caps](/v3/portal/api/doc/FrequencyConfigurationBasicCaps) and [Frequency Goals](/v3/portal/api/doc/FrequencyConfigurationBasicGoals). _(DEPRECATED; deprecation: This is no longer actively used in the system.)_ |
| GumGumContextualCategoryId | string |  | The ID of the GumGum Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `GumGumContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| hyScoreContextualCategoryId | string |  | The ID of the hyScore Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `hyScoreContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| IllumaContextualCategoryId | string |  | The ID of the Illuma Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IllumaContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| IntegralBrandSafetyCategoryId | string |  | The ID of the Integral Brand Safety category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralBrandSafety`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| IntegralContextualCategoryId | string |  | The ID of the Integral Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralContextual`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| IntegralVideoBrandSafetyCategoryId | string |  | The ID of the Integral Video Brand Safety category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralVideoBrandSafety`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| LumenContextualCategoryId | string |  | The ID of the Lumen Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `LumenContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| MobianContextualCategoryId | string |  | The ID of the Mobian Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `MobianContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| NanoInteractiveContextualCategoryId | string |  | The ID of the NanoInteractive Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `NanoInteractiveContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| NewsGuardContextualCategoryId | string |  | The ID of the NewsGuard Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `NewsGuardContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| OSDSContextualCategoryId | string |  | The ID of the OSDS Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `OSDSContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| Peer39BrandSafetyCategoryId | string |  | The ID of the Peer39 Brand Safety category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `Peer39BrandSafety`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| Peer39ContextualCategoryId | string |  | The ID of the Peer39 Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `Peer39Contextual`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| QwarryContextualCategoryId | string |  | The ID of the Qwarry Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `QwarryContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| RaasLabContextualCategoryId | string |  | The ID of the RaasLab Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `RaasLabContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| SemasioContextualCategoryId | string |  | The ID of the Semasio Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `SemasioContextual`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| ShareThisContextualCategoryId | string |  | The ID of the ShareThis Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `ShareThisContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| SilverpushContextualCategoryId | string |  | The ID of the Silverpush Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `SilverpushContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| SirdataContextualCategoryId | string |  | The ID of the Sirdata Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `SirdataContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| TrueRelevanceContextualCategoryId | string |  | The ID of the TrueRelevance Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `TrueRelevanceContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| TTDContextualCategoryId | string |  | The ID of The Trade Desk contextual category to target.   Here's what you need to know about this property:    - When you include a `TTDContextualCategoryId` in the bid line, be sure to add the “ttd-ct-” prefix to its value. For example, to include the `TTDContextualCategoryId` with the value of 123456, specify it as `ttd-ct-123456`.       - The `CustomCategoryType` specified when the custom category was created is ignored by this endpoint. Instead, set the bid adjustment to 1 (target) or 0 (block).   To find a TTDContextualCategoryId value:   1. Use the [POST /customcategory/query](/v3/portal/api/ref/post-customcategory-query) endpoint and set `CategorySourceType` to `TTDContextualCategory`.      2. Use the returned `CustomCategoryId` in a [GET /customcategory/{customCategoryId}](/v3/portal/api/ref/get-customcategory-customcategoryid) request. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| WeboramaContextualCategoryId | string |  | The ID of the Weborama Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `WeboramaContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| XplnContextualCategoryId | string |  | The ID of the Xpln.AI Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `XplnContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |

### `DimensionalBidding_BidListAdjustmentType`

Type: string enum(BlockList, TargetList, Optimized)

### `DimensionalBidding_BidListSource`

Type: string enum(User, ManualRecommendation, AutoAppliedRecommendation, UserBulkEdit)

### `DimensionalBidding_BidListType`

Type: string enum(BidAdjustment, VolumeControl)

### `DimensionalBidding_MultipleMatchResolutionType`

Type: string enum(SingleMatchOnly, ApplyMinimumAdjustment, ApplyAverageAdjustment, ApplyMaximumAdjustment, ApplyMultiplyAdjustment)

### `DimensionalBidding_BidLine_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdFormatId | string |  | The ID of the ad format used for the bid line adjustment. For details, see [POST /v3/adformat/query](/v3/portal/api/ref/post-adformat-query). |
| AdsTxtSellerType | `AdGroup_AdsTxtSellerType` |  | The `ads.txt` seller type that indicates the relationship between the SSP and publisher for a given impression, as defined by the IAB. The supported values include:<ul><li>`0` (Unknown)</li><li>`1` (Direct)</li><li>`2` (Reseller)</li><li>`3` (Unauthorized)</li></ul> |
| AdvertiserTargetingDataId | integer (int64) |  | The advertiser targeting data ID from the targeting data group. |
| AtmosphericCondition | `DimensionalBidding_AtmosphericCondition` |  | The current or forecast severity level of pollen concentration in the atmosphere that you want to target. Pollen risk targeting helps advertisers in the healthcare industry and those selling indoor air treatment products reach their target audiences more effectively. You can use this information to direct your media spend to areas with the highest pollen concentration (and subsequently have more people suffering from allergies and also looking for air purifiers or allergy medication).   Here's what you need to know about this property:   - Values that end in `Forecast` indicate the areas *forecast* to reach the specified severity level within the next 48 hours. For example, the value of `MediumForecast` enables you to target areas that have been forecast to have a medium severity of pollen concentration in the next 48 hours.   - The rest of the values indicate the *current* level of pollen concentration. For example, the value of `High` enables you to target areas that currently have a high level of pollen concentration. |
| AudienceReachPercentageTier | `DimensionalBidding_AudienceReachPercentageTier` |  | Audience Reach Percentage Tier Dimension |
| BidAdjustment | number (double) |  | The adjustment to be applied when an impression matches the bid line. Recommended for optimized lists. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |
| Browser | `DimensionalBidding_Browser` |  | The type and version of the user's browser to target. |
| CarrierId | integer (int32) |  | The ID of the mobile carrier to target.   For a complete list of mobile carriers, use the [POST /v3/mobilecarrier/query](/v3/portal/api/ref/post-mobilecarrier-query) endpoint. |
| ContentDuration | `DimensionalBidding_ContentDuration` |  | The duration (in minutes) of the content to target. |
| ContentGenre | string |  | The content genre to target. For a list of available genre IDs, use the [GET /content/genre/query](/v3/portal/api/ref/get-content-genre-query) endpoint. |
| ContentLanguage | string |  | The language code of the content (for example, "en") to target. |
| ContentLivestream | `DimensionalBidding_ContentLivestream` |  | The live stream type of the content to target: live or not. |
| ContentProductionQuality | `DimensionalBidding_ContentProductionQuality` |  | The production quality of the content to target. |
| ContentRating | string |  | The rating of the content to target. For a list of available rating IDs, use the [GET /content/rating/query](/v3/portal/api/ref/get-content-rating-query) endpoint. |
| ContextualAppCategoryId | string |  | The ID of the Contextual Application category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `ContextualApp`. |
| ContextualSupplyVendorCategoryId | string |  | A supply vendor category identifier to target. For details about category targeting in China, see *Inventory Feature Availability* in the [Knowledge Portal](https://desk.thetradedesk.com/knowledge-portal/en/china-inventory-partners-feature-availability.html#category-and-keyword-targeting).     To use this feature, you must sign a China MSA. For details, contact your Account Manager.    To get a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set the `CategorySourceType` value to `ContextualSupplyVendorCategory`.     In the platform UI, these settings are visible in the [Category (China) rail tile](https://desk.thetradedesk.com/knowledge-portal/en/china-category-targeting.html#category--china--rail-tile). |
| ContextualSupplyVendorGenreId | string |  | A supply vendor genre identifier to target. For details about genre targeting in China, see *Inventory Feature Availability* in the [Knowledge Portal](https://desk.thetradedesk.com/knowledge-portal/en/china-inventory-partners-feature-availability.html#category-and-keyword-targeting).     To use this feature, you must sign a China MSA. For details, contact your Account Manager.    To get a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set the `CategorySourceType` value to `ContextualSupplyVendorGenre`.     In the platform UI, these settings are visible in the [Video Genre (China)](https://desk.thetradedesk.com/knowledge-portal/en/china-category-targeting.html#video-genre--china--targeting--blocking--and-optimization) rail tile. |
| DeviceModelId | integer (int32) |  | The ID of the device model to target.   For a complete list of device models, use the [POST /v3/devicemakemodel/query](/v3/portal/api/ref/post-devicemakemodel-query) endpoint. |
| DeviceType | `DimensionalBidding_DeviceType` |  | The device type used to apply bid adjustments. |
| DigitalOutOfHomeVenueTypeId | string |  | The ID of the Digital Out-Of-Home (DOOH) venue type to target. For enum values, see [Digital Out-of-Home Screen Venue Types](https://github.com/openooh/venue-taxonomy/blob/main/specification-1.0.md). |
| DisplayViewabilityScoreRange | `TheTradeDesk.AdPlatform_Range_number_double__` |  | The average display viewability score range to target when bidding on impressions (0 to 1). |
| DomainFragment | string |  | The domain or app ID to match for the bid adjustment. Domains are matched in whole sections from right to left. Examples:      - "com" matches "site.com" and "mysite.com" but *not* "site.net" and *not* "com.net" and *not* "site.com.net"      - "site" matches "some.site" and *not* "site.net" and *not* "site.com"      - "site.com" matches "site.com" and "my.site.com" but *not* "mysite.com"      - "my.site.com" matches "my.site.com" and "is.my.site.com" but *not* "dummy.site.com" |
| DoubleVerifyBotAvoidanceCategoryId | string |  | The ID of the DoubleVerify Bot Avoidance category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `DoubleVerifyBotAvoidance`. |
| DoubleVerifyVideoViewabilityCategoryId | string |  | The ID of the DoubleVerify Video Viewability category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `DoubleVerifyVideoViewability`. |
| DoubleVerifyViewabilityCategoryId | string |  | The ID of the DoubleVerify Viewability category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `DoubleVerifyViewability`. |
| ExtendedZipCodeGroupSegmentThirdPartyDataId | integer (int64) |  | The extended zip code group segment third party data id to target. |
| FrequencyRange | `DimensionalBidding_FrequencyRange_post` |  | Target a range of values that represent how many times a user has viewed an ad based on a specific frequency counter. |
| GeofenceThirdPartyDataAndBrand | `DimensionalBidding_ThirdPartyData` |  | The geofence third party data to target |
| GeoSegmentId | string |  | The ID of the geo segments to target and the adjustments to apply when bidding on impressions in those geographic areas.   To retrieve a list of available geo segments at the partner or advertiser level, use the [POST /geosegment/query/advertiser](/v3/portal/api/ref/post-geosegment-query-advertiser) or [POST /geosegment/query/partner](/v3/portal/api/ref/post-geosegment-query-partner) endpoints.   To target a geo segment in China as a custom list or market region, you must sign the China Master Service Agreement (MSA). For details, contact your account manager. |
| HourOfWeek | integer |  | The 0-based hour of the week to target (from 0 to 167). For example, to bid on impressions from 12 PM to 1 PM on Monday, set an adjustment for hour 36 since 0-23 is Sunday, 24-47 is Monday, and 36 is noon on Monday.   These hours are in the user's local time. A bid for noon on Monday in a US-wide campaign would cover noon in Eastern, Central, Mountain, and Pacific time zones.   You can supply -1 to determine bidding behavior when the hour of the week is unknown. |
| ImpressionPlacementValue | string |  | The adjustment to apply based on Impression Placement Id Value.   The ImpressionPlacementValue should be a string not exceeding 128 characters.   Note: While the API does not enforce this, it is suggested that you use this dimension in conjunction with Domain, as the same placement ID might be received for different sites in bid requests. _(maxLength 128)_ |
| IntegralPageQualityCategoryId | string |  | The ID of the Integral Page Quality category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralPageQuality`. |
| IntegralVideoPageQualityCategoryId | string |  | The ID of the Integral Video Page Quality category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralVideoPageQuality`. |
| IntegralVideoViewabilityCategoryId | string |  | The ID of the Integral Video Viewability category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralVideoViewability`. |
| IntegralViewabilityCategoryId | string |  | The ID of the Integral Viewability category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralViewability`. |
| InternetConnectionType | `DimensionalBidding_InternetConnectionType` |  | The adjustments to apply based on the type of the user's internet connection type. |
| LanguageId | integer (int32) |  | The default language provided by the browser's user agent.   The ID specified in this property must match an ID for a default language. To query lists of valid default language IDs and facets, see [Language](/v3/portal/api/area/Language). |
| LikelyRefreshRate | `DimensionalBidding_LikelyRefreshRate` |  | Likely Refresh Rate (in seconds) |
| MarketType | `DimensionalBidding_MarketType` |  | `MarketType` is a dimension that allows you to apply bid adjustments to private contract inventory or to open market inventory. This dimension provides additional flexibility when private contracts are applied to an ad group and the ad group's `ContractTargeting.AllowOpenMarketBiddingWhenTargetingContracts` property is set to `true`. It is best used within a multi-dimensional bidding strategy alongside other dimensions. For example, you may want to block unknown `AdsTxtSellerType` inventory in the open market, but not in the private market.      No-Bid Conditions: If `MarketType` is set to `PMP` on a `TargetList` and there are no private contracts applied to the ad group, the ad group will not bid. If `MarketType` is set to `Open` on a `TargetList`, there are private contracts applied to the ad group, and the ad group's `ContractTargeting.AllowOpenMarketBiddingWhenTargetingContracts` property is set to `false`, the ad group will not bid.     This dimension does not appear as a tile in our user interface. |
| NativePlacementType | `DimensionalBidding_NativePlacementType` |  | The adjustments to apply based on the native placement type. |
| Os | string |  | The user's operating system to target. _(maxLength 20)_ |
| Peer39LanguageId | integer (int32) |  | The ID of the Peer39 language to target. For a list of language IDs, use the [POST /language/query](/v3/portal/api/ref/post-language-query) endpoint and set `LanguageSourceType` to `Peer39SiteLanguage`. |
| Peer39PageQualityCategoryId | string |  | The ID of the Peer39 Page Quality category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `Peer39PageQuality`. |
| Peer39ViewabilityCategoryId | string |  | The ID of the Peer39 Viewability category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `Peer39Viewability`. |
| PrivateContractId | string |  | The private contract to target.   For a complete list of available private contracts, see the following endpoints:   * [POST /v3/contract/buyers/query/advertisers](/v3/portal/api/ref/post-contract-buyers-query-advertisers)   * [POST /v3/contract/buyers/query/partners](/v3/portal/api/ref/post-contract-buyers-query-partners) _(maxLength 32)_ |
| PublisherId | string |  | The publisher ID to target. See the Supply Vendor Publisher Id property in My Reports to get possible values. |
| RecencyWindowInMinutes | `TheTradeDesk.AdPlatform_Range_integer_int32__` |  | Recency refers to how long a user has been in a data segment. Use it to target or adjust your bid based on audience age. For example, bid double for users added within the last hour by setting the range from 0 to 59 with a bid adjustment of 2. Both values are inclusive. |
| RenderingContext | `DimensionalBidding_RenderingContext` |  | The rendering context to target. |
| Rewarded | `DimensionalBidding_Rewarded` |  | Whether the impression is rewarded or not |
| RTBAsiaPageQualityCategoryId | string |  | The ID of the RTBAsia Page Quality category to target.   Here's what you need to know about this property:    - To use this feature, you must sign a China MSA. For details, contact your Account Manager.    - For a list of valid category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `RTBAsiaPageQuality`.    - In the platform UI, you can view these settings in the Display Anti-Fraud Protection (RTBAsia) tile. |
| RTBAsiaVideoPageQualityCategoryId | string |  | The ID of the RTBAsia Video Page Quality category to target.    Here's what you need to know about this property:    - To use this feature, you must sign a China MSA. For details, contact your Account Manager.    - For a list of valid category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `RTBAsiaVideoPageQuality`.    - In the platform UI, you can view these settings in the Video Anti-Fraud Protection (RTBAsia) tile. |
| SellerDomain | string |  | The domain associated with the seller you wish to target. This domain cannot be a `AliasToSellerDomain` for another seller.        You can query the list of sellers here: [POST /seller/query](/v3/portal/api/ref/post-seller-query).        If a seller domain becomes an alias to another seller domain after you already targeted it, this property will return the original alias from the seller domain.   You can then use the query endpoint to find the final aliased seller domain. |
| SupplyVendorId | integer (int64) |  | **IMPORTANT**: This field is intended for managing only supply vendor or reseller relationships, not direct publisher connections. To manage direct publisher inventory, use publisher lists or site lists instead.   The numeric ID for the supply vendor from which the impression would be purchased. For fixed-price contracts, this must correspond with the delivery profile ID.   For a complete list of values, use the following endpoints:    * [POST /v3/supplyvendor/query/advertiser](/v3/portal/api/ref/post-supplyvendor-query-advertiser)    * [POST /v3/supplyvendor/query/partner](/v3/portal/api/ref/post-supplyvendor-query-partner) |
| TemperatureRangeInCelsius | `TheTradeDesk.AdPlatform_Range_number_double__` |  | Target temperature range (in degrees Celsius) to target: minimum (inclusive) to maximum (exclusive). |
| TencentPageQualityCategoryId | string |  | The ID of the Tencent Page Quality category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint. |
| ThirdPartyData | `DimensionalBidding_ThirdPartyData` |  | The third-party data brand ID associated with the third-party data ID in the targeting data group. For details, see [Audiences](/v3/portal/api/doc/Audience) |
| TTDNativeContextType | `DimensionalBidding_TTDNativeContextType` |  | The adjustments to apply based on The Trade Desk's native context type. |
| TVQualityIndexRange | `TheTradeDesk.AdPlatform_Range_number_double__` |  | The `TVQualityIndexRange` dimension defines a range between a min and a max value for the TV Quality Index (TVQI). The TVQI measures the quality of inventory a campaign runs, on a scale of 1 - 100. It is an aggregate of the weighted scores for eight criteria (content, addressability, playback type, device type, content duration, production quality, content signal transparency, and market type) across three pillars of quality (content, ad experience, and signals).    For details on each score component, see the [Knowledge Portal](https://desk.thetradedesk.com/knowledge-portal/en/optimization-tv-quality-index.html). |
| UniversalCategoryTaxonomyId | string |  | The ID of the universal category taxonomy to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `UniversalCategoryTaxonomy`. |
| VideoCompletionRateScoreRange | `TheTradeDesk.AdPlatform_Range_number_double__` |  | The video completion rate score range to target when bidding on impressions (0 to 1). |
| VideoMutedState | `AdGroup_VideoMutedState` |  | The video muted state setting to target. |
| VideoPlaybackType | `AdGroup_VideoPlaybackType` |  | The video playback type setting to target. |
| VideoPlayerSize | `AdGroup_VideoPlayerSize` |  | The size of the video player to target. |
| VideoQuality | `AdGroup_VideoQuality` |  | The video quality to target. |
| VideoSkippability | `AdGroup_VideoSkippability` |  | The video skippability setting to target. |
| VideoTruthScoreRange | `TheTradeDesk.AdPlatform_Range_number_double__` |  | Percentage difference in size between the advertised screen size and the actual rendering size of the video player (0 to 1). |
| VideoViewabilityScoreRange | `TheTradeDesk.AdPlatform_Range_number_double__` |  | The average video viewability score range to target when bidding on impressions (0 to 1). |
| VolumeControlPriority | `DimensionalBidding_VolumeControlPriority` |  | The volume control priority to apply to this adjustment. |
| WeatherConditionId | integer (int32) |  | The ID of the weather condition to target. To look up available weather conditions and their identifiers, use the [GET /weathercondition/query/available](/v3/portal/api/ref/get-weathercondition-query-available) endpoint.   To view related information in the Knowledge Portal, see <a href="https://desk.thetradedesk.com/knowledge-portal/en/targeting-weather-condition.html#weather-condition-rail-tile" target="_blank">Weather Condition Targeting</a>. |
| AblidaContextualCategoryId | string |  | The ID of the Ablida Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `AblidaContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| AdelaideContextualCategoryId | string |  | The ID of the Adelaide Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `AdelaideContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| AdFontesContextualCategoryId | string |  | The ID of the Ad Fontes Media Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `AdFontesContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| AeternaLabsContextualCategoryId | string |  | The ID of the Aeterna Labs Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `AeternaLabsContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| AnokiIncContextualCategoryId | string |  | The ID of the AnokiInc Contextual Category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `AnokiIncContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| AudigentContextualCategoryId | string |  | The ID of the Audigent Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `AudigentContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| BarometerContextualCategoryId | string |  | The ID of the Barometer Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `BarometerContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| CaptifyContextualCategoryId | string |  | The ID of the Captify Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `CaptifyContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| ComscoreContextualCategoryId | string |  | The ID of the Comscore Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `ComscoreContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| CrossPixelContextualCategoryId | string |  | The ID of the Cross Pixel Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `CrossPixelContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| DoubleVerifyBrandSafetyCategoryId | string |  | The ID of the DoubleVerify Brand Safety category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `DoubleVerifyBrandSafety`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| DoubleVerifyContextualCategoryId | string |  | The ID of the DoubleVerify Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `DoubleVerifyContextual`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| DstilleryContextualCategoryId | string |  | The ID of the Dstillery ID-free Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `DstilleryContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| EmetriqContextualCategoryId | string |  | The ID of the Emetriq Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `EmetriqContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| FactualGeoTargetingId | integer (int64) |  | The ID of the factual geo segment that the bid line is targeting. _(DEPRECATED; deprecation: Please use `GeofenceThirdPartyDataAndBrand` instead.)_ |
| FourDContextualCategoryId | string |  | The ID of the 4D Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `FourDContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| FrequencyTarget | `DimensionalBidding_FrequencyTarget_post` |  | The ad frequency to target. This is a Frequency v1 setting that has been replaced by the new Frequency v2 property, `FrequencyRange`. For migration details and examples of old and new bid lists, see [Frequency Migration Phase Two](/v3/portal/api/doc/UpgradeSupportFrequencyV2FinalMigration) (contact your Technical Account Manager for permissions). For details on the new settings and resulting bid lists, see [Frequency Caps](/v3/portal/api/doc/FrequencyConfigurationBasicCaps) and [Frequency Goals](/v3/portal/api/doc/FrequencyConfigurationBasicGoals). _(DEPRECATED; deprecation: This is no longer actively used in the system.)_ |
| GumGumContextualCategoryId | string |  | The ID of the GumGum Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `GumGumContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| hyScoreContextualCategoryId | string |  | The ID of the hyScore Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `hyScoreContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| IllumaContextualCategoryId | string |  | The ID of the Illuma Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IllumaContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| IntegralBrandSafetyCategoryId | string |  | The ID of the Integral Brand Safety category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralBrandSafety`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| IntegralContextualCategoryId | string |  | The ID of the Integral Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralContextual`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| IntegralVideoBrandSafetyCategoryId | string |  | The ID of the Integral Video Brand Safety category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralVideoBrandSafety`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| LumenContextualCategoryId | string |  | The ID of the Lumen Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `LumenContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| MobianContextualCategoryId | string |  | The ID of the Mobian Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `MobianContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| NanoInteractiveContextualCategoryId | string |  | The ID of the NanoInteractive Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `NanoInteractiveContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| NewsGuardContextualCategoryId | string |  | The ID of the NewsGuard Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `NewsGuardContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| OSDSContextualCategoryId | string |  | The ID of the OSDS Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `OSDSContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| Peer39BrandSafetyCategoryId | string |  | The ID of the Peer39 Brand Safety category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `Peer39BrandSafety`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| Peer39ContextualCategoryId | string |  | The ID of the Peer39 Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `Peer39Contextual`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| QwarryContextualCategoryId | string |  | The ID of the Qwarry Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `QwarryContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| RaasLabContextualCategoryId | string |  | The ID of the RaasLab Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `RaasLabContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| SemasioContextualCategoryId | string |  | The ID of the Semasio Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `SemasioContextual`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| ShareThisContextualCategoryId | string |  | The ID of the ShareThis Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `ShareThisContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| SilverpushContextualCategoryId | string |  | The ID of the Silverpush Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `SilverpushContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| SirdataContextualCategoryId | string |  | The ID of the Sirdata Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `SirdataContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| TrueRelevanceContextualCategoryId | string |  | The ID of the TrueRelevance Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `TrueRelevanceContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| TTDContextualCategoryId | string |  | The ID of The Trade Desk contextual category to target.   Here's what you need to know about this property:    - When you include a `TTDContextualCategoryId` in the bid line, be sure to add the “ttd-ct-” prefix to its value. For example, to include the `TTDContextualCategoryId` with the value of 123456, specify it as `ttd-ct-123456`.       - The `CustomCategoryType` specified when the custom category was created is ignored by this endpoint. Instead, set the bid adjustment to 1 (target) or 0 (block).   To find a TTDContextualCategoryId value:   1. Use the [POST /customcategory/query](/v3/portal/api/ref/post-customcategory-query) endpoint and set `CategorySourceType` to `TTDContextualCategory`.      2. Use the returned `CustomCategoryId` in a [GET /customcategory/{customCategoryId}](/v3/portal/api/ref/get-customcategory-customcategoryid) request. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| WeboramaContextualCategoryId | string |  | The ID of the Weborama Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `WeboramaContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| XplnContextualCategoryId | string |  | The ID of the Xpln.AI Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `XplnContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |

### `DimensionalBidding_BidLine_put`

| Field | Type | Required | Description |
|---|---|---|---|
| AdFormatId | string |  | The ID of the ad format used for the bid line adjustment. For details, see [POST /v3/adformat/query](/v3/portal/api/ref/post-adformat-query). |
| AdsTxtSellerType | `AdGroup_AdsTxtSellerType` |  | The `ads.txt` seller type that indicates the relationship between the SSP and publisher for a given impression, as defined by the IAB. The supported values include:<ul><li>`0` (Unknown)</li><li>`1` (Direct)</li><li>`2` (Reseller)</li><li>`3` (Unauthorized)</li></ul> |
| AdvertiserTargetingDataId | integer (int64) |  | The advertiser targeting data ID from the targeting data group. |
| AtmosphericCondition | `DimensionalBidding_AtmosphericCondition` |  | The current or forecast severity level of pollen concentration in the atmosphere that you want to target. Pollen risk targeting helps advertisers in the healthcare industry and those selling indoor air treatment products reach their target audiences more effectively. You can use this information to direct your media spend to areas with the highest pollen concentration (and subsequently have more people suffering from allergies and also looking for air purifiers or allergy medication).   Here's what you need to know about this property:   - Values that end in `Forecast` indicate the areas *forecast* to reach the specified severity level within the next 48 hours. For example, the value of `MediumForecast` enables you to target areas that have been forecast to have a medium severity of pollen concentration in the next 48 hours.   - The rest of the values indicate the *current* level of pollen concentration. For example, the value of `High` enables you to target areas that currently have a high level of pollen concentration. |
| AudienceReachPercentageTier | `DimensionalBidding_AudienceReachPercentageTier` |  | Audience Reach Percentage Tier Dimension |
| BidAdjustment | number (double) |  | The adjustment to be applied when an impression matches the bid line. Recommended for optimized lists. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |
| Browser | `DimensionalBidding_Browser` |  | The type and version of the user's browser to target. |
| CarrierId | integer (int32) |  | The ID of the mobile carrier to target.   For a complete list of mobile carriers, use the [POST /v3/mobilecarrier/query](/v3/portal/api/ref/post-mobilecarrier-query) endpoint. |
| ContentDuration | `DimensionalBidding_ContentDuration` |  | The duration (in minutes) of the content to target. |
| ContentGenre | string |  | The content genre to target. For a list of available genre IDs, use the [GET /content/genre/query](/v3/portal/api/ref/get-content-genre-query) endpoint. |
| ContentLanguage | string |  | The language code of the content (for example, "en") to target. |
| ContentLivestream | `DimensionalBidding_ContentLivestream` |  | The live stream type of the content to target: live or not. |
| ContentProductionQuality | `DimensionalBidding_ContentProductionQuality` |  | The production quality of the content to target. |
| ContentRating | string |  | The rating of the content to target. For a list of available rating IDs, use the [GET /content/rating/query](/v3/portal/api/ref/get-content-rating-query) endpoint. |
| ContextualAppCategoryId | string |  | The ID of the Contextual Application category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `ContextualApp`. |
| ContextualSupplyVendorCategoryId | string |  | A supply vendor category identifier to target. For details about category targeting in China, see *Inventory Feature Availability* in the [Knowledge Portal](https://desk.thetradedesk.com/knowledge-portal/en/china-inventory-partners-feature-availability.html#category-and-keyword-targeting).     To use this feature, you must sign a China MSA. For details, contact your Account Manager.    To get a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set the `CategorySourceType` value to `ContextualSupplyVendorCategory`.     In the platform UI, these settings are visible in the [Category (China) rail tile](https://desk.thetradedesk.com/knowledge-portal/en/china-category-targeting.html#category--china--rail-tile). |
| ContextualSupplyVendorGenreId | string |  | A supply vendor genre identifier to target. For details about genre targeting in China, see *Inventory Feature Availability* in the [Knowledge Portal](https://desk.thetradedesk.com/knowledge-portal/en/china-inventory-partners-feature-availability.html#category-and-keyword-targeting).     To use this feature, you must sign a China MSA. For details, contact your Account Manager.    To get a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set the `CategorySourceType` value to `ContextualSupplyVendorGenre`.     In the platform UI, these settings are visible in the [Video Genre (China)](https://desk.thetradedesk.com/knowledge-portal/en/china-category-targeting.html#video-genre--china--targeting--blocking--and-optimization) rail tile. |
| DeviceModelId | integer (int32) |  | The ID of the device model to target.   For a complete list of device models, use the [POST /v3/devicemakemodel/query](/v3/portal/api/ref/post-devicemakemodel-query) endpoint. |
| DeviceType | `DimensionalBidding_DeviceType` |  | The device type used to apply bid adjustments. |
| DigitalOutOfHomeVenueTypeId | string |  | The ID of the Digital Out-Of-Home (DOOH) venue type to target. For enum values, see [Digital Out-of-Home Screen Venue Types](https://github.com/openooh/venue-taxonomy/blob/main/specification-1.0.md). |
| DisplayViewabilityScoreRange | `TheTradeDesk.AdPlatform_Range_number_double__` |  | The average display viewability score range to target when bidding on impressions (0 to 1). |
| DomainFragment | string |  | The domain or app ID to match for the bid adjustment. Domains are matched in whole sections from right to left. Examples:      - "com" matches "site.com" and "mysite.com" but *not* "site.net" and *not* "com.net" and *not* "site.com.net"      - "site" matches "some.site" and *not* "site.net" and *not* "site.com"      - "site.com" matches "site.com" and "my.site.com" but *not* "mysite.com"      - "my.site.com" matches "my.site.com" and "is.my.site.com" but *not* "dummy.site.com" |
| DoubleVerifyBotAvoidanceCategoryId | string |  | The ID of the DoubleVerify Bot Avoidance category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `DoubleVerifyBotAvoidance`. |
| DoubleVerifyVideoViewabilityCategoryId | string |  | The ID of the DoubleVerify Video Viewability category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `DoubleVerifyVideoViewability`. |
| DoubleVerifyViewabilityCategoryId | string |  | The ID of the DoubleVerify Viewability category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `DoubleVerifyViewability`. |
| ExtendedZipCodeGroupSegmentThirdPartyDataId | integer (int64) |  | The extended zip code group segment third party data id to target. |
| FrequencyRange | `DimensionalBidding_FrequencyRange_put` |  | Target a range of values that represent how many times a user has viewed an ad based on a specific frequency counter. |
| GeofenceThirdPartyDataAndBrand | `DimensionalBidding_ThirdPartyData` |  | The geofence third party data to target |
| GeoSegmentId | string |  | The ID of the geo segments to target and the adjustments to apply when bidding on impressions in those geographic areas.   To retrieve a list of available geo segments at the partner or advertiser level, use the [POST /geosegment/query/advertiser](/v3/portal/api/ref/post-geosegment-query-advertiser) or [POST /geosegment/query/partner](/v3/portal/api/ref/post-geosegment-query-partner) endpoints.   To target a geo segment in China as a custom list or market region, you must sign the China Master Service Agreement (MSA). For details, contact your account manager. |
| HourOfWeek | integer |  | The 0-based hour of the week to target (from 0 to 167). For example, to bid on impressions from 12 PM to 1 PM on Monday, set an adjustment for hour 36 since 0-23 is Sunday, 24-47 is Monday, and 36 is noon on Monday.   These hours are in the user's local time. A bid for noon on Monday in a US-wide campaign would cover noon in Eastern, Central, Mountain, and Pacific time zones.   You can supply -1 to determine bidding behavior when the hour of the week is unknown. |
| ImpressionPlacementValue | string |  | The adjustment to apply based on Impression Placement Id Value.   The ImpressionPlacementValue should be a string not exceeding 128 characters.   Note: While the API does not enforce this, it is suggested that you use this dimension in conjunction with Domain, as the same placement ID might be received for different sites in bid requests. _(maxLength 128)_ |
| IntegralPageQualityCategoryId | string |  | The ID of the Integral Page Quality category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralPageQuality`. |
| IntegralVideoPageQualityCategoryId | string |  | The ID of the Integral Video Page Quality category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralVideoPageQuality`. |
| IntegralVideoViewabilityCategoryId | string |  | The ID of the Integral Video Viewability category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralVideoViewability`. |
| IntegralViewabilityCategoryId | string |  | The ID of the Integral Viewability category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralViewability`. |
| InternetConnectionType | `DimensionalBidding_InternetConnectionType` |  | The adjustments to apply based on the type of the user's internet connection type. |
| LanguageId | integer (int32) |  | The default language provided by the browser's user agent.   The ID specified in this property must match an ID for a default language. To query lists of valid default language IDs and facets, see [Language](/v3/portal/api/area/Language). |
| LikelyRefreshRate | `DimensionalBidding_LikelyRefreshRate` |  | Likely Refresh Rate (in seconds) |
| MarketType | `DimensionalBidding_MarketType` |  | `MarketType` is a dimension that allows you to apply bid adjustments to private contract inventory or to open market inventory. This dimension provides additional flexibility when private contracts are applied to an ad group and the ad group's `ContractTargeting.AllowOpenMarketBiddingWhenTargetingContracts` property is set to `true`. It is best used within a multi-dimensional bidding strategy alongside other dimensions. For example, you may want to block unknown `AdsTxtSellerType` inventory in the open market, but not in the private market.      No-Bid Conditions: If `MarketType` is set to `PMP` on a `TargetList` and there are no private contracts applied to the ad group, the ad group will not bid. If `MarketType` is set to `Open` on a `TargetList`, there are private contracts applied to the ad group, and the ad group's `ContractTargeting.AllowOpenMarketBiddingWhenTargetingContracts` property is set to `false`, the ad group will not bid.     This dimension does not appear as a tile in our user interface. |
| NativePlacementType | `DimensionalBidding_NativePlacementType` |  | The adjustments to apply based on the native placement type. |
| Os | string |  | The user's operating system to target. _(maxLength 20)_ |
| Peer39LanguageId | integer (int32) |  | The ID of the Peer39 language to target. For a list of language IDs, use the [POST /language/query](/v3/portal/api/ref/post-language-query) endpoint and set `LanguageSourceType` to `Peer39SiteLanguage`. |
| Peer39PageQualityCategoryId | string |  | The ID of the Peer39 Page Quality category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `Peer39PageQuality`. |
| Peer39ViewabilityCategoryId | string |  | The ID of the Peer39 Viewability category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `Peer39Viewability`. |
| PrivateContractId | string |  | The private contract to target.   For a complete list of available private contracts, see the following endpoints:   * [POST /v3/contract/buyers/query/advertisers](/v3/portal/api/ref/post-contract-buyers-query-advertisers)   * [POST /v3/contract/buyers/query/partners](/v3/portal/api/ref/post-contract-buyers-query-partners) _(maxLength 32)_ |
| PublisherId | string |  | The publisher ID to target. See the Supply Vendor Publisher Id property in My Reports to get possible values. |
| RecencyWindowInMinutes | `TheTradeDesk.AdPlatform_Range_integer_int32__` |  | Recency refers to how long a user has been in a data segment. Use it to target or adjust your bid based on audience age. For example, bid double for users added within the last hour by setting the range from 0 to 59 with a bid adjustment of 2. Both values are inclusive. |
| RenderingContext | `DimensionalBidding_RenderingContext` |  | The rendering context to target. |
| Rewarded | `DimensionalBidding_Rewarded` |  | Whether the impression is rewarded or not |
| RTBAsiaPageQualityCategoryId | string |  | The ID of the RTBAsia Page Quality category to target.   Here's what you need to know about this property:    - To use this feature, you must sign a China MSA. For details, contact your Account Manager.    - For a list of valid category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `RTBAsiaPageQuality`.    - In the platform UI, you can view these settings in the Display Anti-Fraud Protection (RTBAsia) tile. |
| RTBAsiaVideoPageQualityCategoryId | string |  | The ID of the RTBAsia Video Page Quality category to target.    Here's what you need to know about this property:    - To use this feature, you must sign a China MSA. For details, contact your Account Manager.    - For a list of valid category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `RTBAsiaVideoPageQuality`.    - In the platform UI, you can view these settings in the Video Anti-Fraud Protection (RTBAsia) tile. |
| SellerDomain | string |  | The domain associated with the seller you wish to target. This domain cannot be a `AliasToSellerDomain` for another seller.        You can query the list of sellers here: [POST /seller/query](/v3/portal/api/ref/post-seller-query).        If a seller domain becomes an alias to another seller domain after you already targeted it, this property will return the original alias from the seller domain.   You can then use the query endpoint to find the final aliased seller domain. |
| SupplyVendorId | integer (int64) |  | **IMPORTANT**: This field is intended for managing only supply vendor or reseller relationships, not direct publisher connections. To manage direct publisher inventory, use publisher lists or site lists instead.   The numeric ID for the supply vendor from which the impression would be purchased. For fixed-price contracts, this must correspond with the delivery profile ID.   For a complete list of values, use the following endpoints:    * [POST /v3/supplyvendor/query/advertiser](/v3/portal/api/ref/post-supplyvendor-query-advertiser)    * [POST /v3/supplyvendor/query/partner](/v3/portal/api/ref/post-supplyvendor-query-partner) |
| TemperatureRangeInCelsius | `TheTradeDesk.AdPlatform_Range_number_double__` |  | Target temperature range (in degrees Celsius) to target: minimum (inclusive) to maximum (exclusive). |
| TencentPageQualityCategoryId | string |  | The ID of the Tencent Page Quality category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint. |
| ThirdPartyData | `DimensionalBidding_ThirdPartyData` |  | The third-party data brand ID associated with the third-party data ID in the targeting data group. For details, see [Audiences](/v3/portal/api/doc/Audience) |
| TTDNativeContextType | `DimensionalBidding_TTDNativeContextType` |  | The adjustments to apply based on The Trade Desk's native context type. |
| TVQualityIndexRange | `TheTradeDesk.AdPlatform_Range_number_double__` |  | The `TVQualityIndexRange` dimension defines a range between a min and a max value for the TV Quality Index (TVQI). The TVQI measures the quality of inventory a campaign runs, on a scale of 1 - 100. It is an aggregate of the weighted scores for eight criteria (content, addressability, playback type, device type, content duration, production quality, content signal transparency, and market type) across three pillars of quality (content, ad experience, and signals).    For details on each score component, see the [Knowledge Portal](https://desk.thetradedesk.com/knowledge-portal/en/optimization-tv-quality-index.html). |
| UniversalCategoryTaxonomyId | string |  | The ID of the universal category taxonomy to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `UniversalCategoryTaxonomy`. |
| VideoCompletionRateScoreRange | `TheTradeDesk.AdPlatform_Range_number_double__` |  | The video completion rate score range to target when bidding on impressions (0 to 1). |
| VideoMutedState | `AdGroup_VideoMutedState` |  | The video muted state setting to target. |
| VideoPlaybackType | `AdGroup_VideoPlaybackType` |  | The video playback type setting to target. |
| VideoPlayerSize | `AdGroup_VideoPlayerSize` |  | The size of the video player to target. |
| VideoQuality | `AdGroup_VideoQuality` |  | The video quality to target. |
| VideoSkippability | `AdGroup_VideoSkippability` |  | The video skippability setting to target. |
| VideoTruthScoreRange | `TheTradeDesk.AdPlatform_Range_number_double__` |  | Percentage difference in size between the advertised screen size and the actual rendering size of the video player (0 to 1). |
| VideoViewabilityScoreRange | `TheTradeDesk.AdPlatform_Range_number_double__` |  | The average video viewability score range to target when bidding on impressions (0 to 1). |
| VolumeControlPriority | `DimensionalBidding_VolumeControlPriority` |  | The volume control priority to apply to this adjustment. |
| WeatherConditionId | integer (int32) |  | The ID of the weather condition to target. To look up available weather conditions and their identifiers, use the [GET /weathercondition/query/available](/v3/portal/api/ref/get-weathercondition-query-available) endpoint.   To view related information in the Knowledge Portal, see <a href="https://desk.thetradedesk.com/knowledge-portal/en/targeting-weather-condition.html#weather-condition-rail-tile" target="_blank">Weather Condition Targeting</a>. |
| AblidaContextualCategoryId | string |  | The ID of the Ablida Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `AblidaContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| AdelaideContextualCategoryId | string |  | The ID of the Adelaide Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `AdelaideContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| AdFontesContextualCategoryId | string |  | The ID of the Ad Fontes Media Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `AdFontesContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| AeternaLabsContextualCategoryId | string |  | The ID of the Aeterna Labs Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `AeternaLabsContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| AnokiIncContextualCategoryId | string |  | The ID of the AnokiInc Contextual Category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `AnokiIncContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| AudigentContextualCategoryId | string |  | The ID of the Audigent Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `AudigentContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| BarometerContextualCategoryId | string |  | The ID of the Barometer Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `BarometerContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| CaptifyContextualCategoryId | string |  | The ID of the Captify Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `CaptifyContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| ComscoreContextualCategoryId | string |  | The ID of the Comscore Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `ComscoreContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| CrossPixelContextualCategoryId | string |  | The ID of the Cross Pixel Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `CrossPixelContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| DoubleVerifyBrandSafetyCategoryId | string |  | The ID of the DoubleVerify Brand Safety category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `DoubleVerifyBrandSafety`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| DoubleVerifyContextualCategoryId | string |  | The ID of the DoubleVerify Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `DoubleVerifyContextual`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| DstilleryContextualCategoryId | string |  | The ID of the Dstillery ID-free Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `DstilleryContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| EmetriqContextualCategoryId | string |  | The ID of the Emetriq Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `EmetriqContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| FactualGeoTargetingId | integer (int64) |  | The ID of the factual geo segment that the bid line is targeting. _(DEPRECATED; deprecation: Please use `GeofenceThirdPartyDataAndBrand` instead.)_ |
| FourDContextualCategoryId | string |  | The ID of the 4D Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `FourDContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| FrequencyTarget | `DimensionalBidding_FrequencyTarget_put` |  | The ad frequency to target. This is a Frequency v1 setting that has been replaced by the new Frequency v2 property, `FrequencyRange`. For migration details and examples of old and new bid lists, see [Frequency Migration Phase Two](/v3/portal/api/doc/UpgradeSupportFrequencyV2FinalMigration) (contact your Technical Account Manager for permissions). For details on the new settings and resulting bid lists, see [Frequency Caps](/v3/portal/api/doc/FrequencyConfigurationBasicCaps) and [Frequency Goals](/v3/portal/api/doc/FrequencyConfigurationBasicGoals). _(DEPRECATED; deprecation: This is no longer actively used in the system.)_ |
| GumGumContextualCategoryId | string |  | The ID of the GumGum Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `GumGumContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| hyScoreContextualCategoryId | string |  | The ID of the hyScore Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `hyScoreContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| IllumaContextualCategoryId | string |  | The ID of the Illuma Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IllumaContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| IntegralBrandSafetyCategoryId | string |  | The ID of the Integral Brand Safety category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralBrandSafety`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| IntegralContextualCategoryId | string |  | The ID of the Integral Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralContextual`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| IntegralVideoBrandSafetyCategoryId | string |  | The ID of the Integral Video Brand Safety category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralVideoBrandSafety`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| LumenContextualCategoryId | string |  | The ID of the Lumen Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `LumenContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| MobianContextualCategoryId | string |  | The ID of the Mobian Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `MobianContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| NanoInteractiveContextualCategoryId | string |  | The ID of the NanoInteractive Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `NanoInteractiveContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| NewsGuardContextualCategoryId | string |  | The ID of the NewsGuard Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `NewsGuardContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| OSDSContextualCategoryId | string |  | The ID of the OSDS Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `OSDSContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| Peer39BrandSafetyCategoryId | string |  | The ID of the Peer39 Brand Safety category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `Peer39BrandSafety`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| Peer39ContextualCategoryId | string |  | The ID of the Peer39 Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `Peer39Contextual`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| QwarryContextualCategoryId | string |  | The ID of the Qwarry Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `QwarryContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| RaasLabContextualCategoryId | string |  | The ID of the RaasLab Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `RaasLabContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| SemasioContextualCategoryId | string |  | The ID of the Semasio Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `SemasioContextual`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| ShareThisContextualCategoryId | string |  | The ID of the ShareThis Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `ShareThisContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| SilverpushContextualCategoryId | string |  | The ID of the Silverpush Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `SilverpushContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| SirdataContextualCategoryId | string |  | The ID of the Sirdata Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `SirdataContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| TrueRelevanceContextualCategoryId | string |  | The ID of the TrueRelevance Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `TrueRelevanceContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| TTDContextualCategoryId | string |  | The ID of The Trade Desk contextual category to target.   Here's what you need to know about this property:    - When you include a `TTDContextualCategoryId` in the bid line, be sure to add the “ttd-ct-” prefix to its value. For example, to include the `TTDContextualCategoryId` with the value of 123456, specify it as `ttd-ct-123456`.       - The `CustomCategoryType` specified when the custom category was created is ignored by this endpoint. Instead, set the bid adjustment to 1 (target) or 0 (block).   To find a TTDContextualCategoryId value:   1. Use the [POST /customcategory/query](/v3/portal/api/ref/post-customcategory-query) endpoint and set `CategorySourceType` to `TTDContextualCategory`.      2. Use the returned `CustomCategoryId` in a [GET /customcategory/{customCategoryId}](/v3/portal/api/ref/get-customcategory-customcategoryid) request. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| WeboramaContextualCategoryId | string |  | The ID of the Weborama Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `WeboramaContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| XplnContextualCategoryId | string |  | The ID of the Xpln.AI Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `XplnContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |

### `DimensionalBidding_UnassociatedBidListOwner`

Type: string enum(AdGroup, Campaign, Advertiser, Partner)

### `DimensionalBidding_BidListSummaryForEntity`

| Field | Type | Required | Description |
|---|---|---|---|
| AssociatedBidListsEntity | `DimensionalBidding_BidListLevel` |  | The entity type associated with the bid list(s). If the bid list is not associated with any entities, this property returns as `null`. For details on entity associations, see [Association](/v3/portal/api/doc/BidList#bidlistassociation). _(nullable)_ |
| AssociatedBidListsEntityId | string |  | The ID for the entity type associated with the bid list(s).           For details on entity associations, see [Association](/v3/portal/api/doc/BidList#bidlistassociation). _(nullable)_ |
| BidLinesCount | integer (int32) |  | The number of bid lines used with the resolution type to calculate the bid list adjustment. |
| BidListAdjustmentType | `DimensionalBidding_BidListAdjustmentType` |  | The method for determining how the bid adjustment is applied when an impression doesn't match a bid line. This type is set when a bid list is created and cannot be changed afterward.   If an impression matches multiple bid lists with different bid list adjustment types, the bid adjustments are multiplied together to get the final bid. For example, if an impression gets a bid adjustment of 0.75 from an optimized list and a bid adjustment of 0 from a block list, the final bid adjustment is 0.75*0=0. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |
| BidListDimensions | array<`DimensionalBidding_DimensionDescriptor`> |  | A list of dimensions belonging to the bid list, such as ad format, device type, and domain fragment. This property is read-only. _(nullable)_ |
| BidListId | string |  | The platform ID of the bid list. It is ignored during creation. |
| BidListOwner | `DimensionalBidding_BidListOwner` |  | The entity type that owns the bid list. For example, if the `BidListOwnerId` property is set to `AdGroupId`, the `BidListOwner` property should be set to `AdGroup`. When changing the owner of a bid list, the new owner must be an ancestor of the previous owner. For details, see [Bid List Relationships](/v3/portal/api/doc/BidList#bidlistrelationships). |
| BidListOwnerId | string |  | The ID of the entity (partner, campaign, advertiser, ad group) that owns the bid list. Ownership determines access to the bid list and governs its inheritance and association rules.   **IMPORTANT**: There is a limit to the number of bid lines owned by or associated with each ad group, advertiser, or partner. For details, see [Bid Lists](/v3/portal/api/doc/BidList). _(nullable)_ |
| BidListSource | `DimensionalBidding_BidListSource` |  | The type of bid list. Read-only field. |
| IsAvailableForLibraryUse | boolean |  | If set to `true`, bid lists appear in the platform UI as a reusable library list for the bid list owner and its descendants. This setting applies to target and block lists that contain a single dimension of either domain fragment or geo segment ID.   The default value is `false`, indicating that the bid list is not displayed in the library. Since ad groups have no descendants, setting this property to `true` for a bid list owned by an ad group results in a 400 error.    **NOTE**: When owned at the partner or advertiser level, bid lists with the domain fragment dimension are available within the partner or advertiser site/app inventory library. Similarly, bid lists with the geo segment ID dimension are available in the partner or advertiser locations library. For example, an advertiser-owned bid list with `HasGeoSegmentId` and `IsAvailableForLibraryUse` properties set to `true` is displayed as a library list for a related ad group in the Geography rail tile as a library list and in the advertiser's locations library. |
| IsDeleted | boolean |  | If set to `true`, indicates the bid list is deleted.   The default value is `false`. |
| IsGlobal | boolean |  | If set to `true`, indicates that the bid list can be applied to any entity.   The default value is `false`.   **NOTE**: The Trade Desk supports global bid lists, like our global block list, but they are managed by our marketplace quality team and not by entities in the advertising campaign. To see available global lists that you can associate, use [POST /bidlistsummary/query/global](/v3/portal/api/ref/post-bidlistsummary-query-global). |
| Name | string |  | A name to describe the bid list. Bid list names typically describe the dimension and adjustment type, such as "Site/App Target List". The maximum character length is 512. _(nullable)_ |
| ResolutionType | `DimensionalBidding_MultipleMatchResolutionType` |  | The method for determining how the bid adjustment is applied when an impression matches multiple bid lines in a bid list. We recommend using `ApplyMultiplyAdjustment` for all bid lists. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |

### `DimensionalBidding_BidListSummary`

| Field | Type | Required | Description |
|---|---|---|---|
| BidLinesCount | integer (int32) |  | The number of bid lines used with the resolution type to calculate the bid list adjustment. |
| BidListAdjustmentType | `DimensionalBidding_BidListAdjustmentType` |  | The method for determining how the bid adjustment is applied when an impression doesn't match a bid line. This type is set when a bid list is created and cannot be changed afterward.   If an impression matches multiple bid lists with different bid list adjustment types, the bid adjustments are multiplied together to get the final bid. For example, if an impression gets a bid adjustment of 0.75 from an optimized list and a bid adjustment of 0 from a block list, the final bid adjustment is 0.75*0=0. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |
| BidListDimensions | array<`DimensionalBidding_DimensionDescriptor`> |  | A list of dimensions belonging to the bid list, such as ad format, device type, and domain fragment. This property is read-only. _(nullable)_ |
| BidListId | string |  | The platform ID of the bid list. It is ignored during creation. |
| BidListOwner | `DimensionalBidding_BidListOwner` |  | The entity type that owns the bid list. For example, if the `BidListOwnerId` property is set to `AdGroupId`, the `BidListOwner` property should be set to `AdGroup`. When changing the owner of a bid list, the new owner must be an ancestor of the previous owner. For details, see [Bid List Relationships](/v3/portal/api/doc/BidList#bidlistrelationships). |
| BidListOwnerId | string |  | The ID of the entity (partner, campaign, advertiser, ad group) that owns the bid list. Ownership determines access to the bid list and governs its inheritance and association rules.   **IMPORTANT**: There is a limit to the number of bid lines owned by or associated with each ad group, advertiser, or partner. For details, see [Bid Lists](/v3/portal/api/doc/BidList). _(nullable)_ |
| BidListSource | `DimensionalBidding_BidListSource` |  | The type of bid list. Read-only field. |
| IsAvailableForLibraryUse | boolean |  | If set to `true`, bid lists appear in the platform UI as a reusable library list for the bid list owner and its descendants. This setting applies to target and block lists that contain a single dimension of either domain fragment or geo segment ID.   The default value is `false`, indicating that the bid list is not displayed in the library. Since ad groups have no descendants, setting this property to `true` for a bid list owned by an ad group results in a 400 error.    **NOTE**: When owned at the partner or advertiser level, bid lists with the domain fragment dimension are available within the partner or advertiser site/app inventory library. Similarly, bid lists with the geo segment ID dimension are available in the partner or advertiser locations library. For example, an advertiser-owned bid list with `HasGeoSegmentId` and `IsAvailableForLibraryUse` properties set to `true` is displayed as a library list for a related ad group in the Geography rail tile as a library list and in the advertiser's locations library. |
| IsDeleted | boolean |  | If set to `true`, indicates the bid list is deleted.   The default value is `false`. |
| IsGlobal | boolean |  | If set to `true`, indicates that the bid list can be applied to any entity.   The default value is `false`.   **NOTE**: The Trade Desk supports global bid lists, like our global block list, but they are managed by our marketplace quality team and not by entities in the advertising campaign. To see available global lists that you can associate, use [POST /bidlistsummary/query/global](/v3/portal/api/ref/post-bidlistsummary-query-global). |
| Name | string |  | A name to describe the bid list. Bid list names typically describe the dimension and adjustment type, such as "Site/App Target List". The maximum character length is 512. _(nullable)_ |
| ResolutionType | `DimensionalBidding_MultipleMatchResolutionType` |  | The method for determining how the bid adjustment is applied when an impression matches multiple bid lines in a bid list. We recommend using `ApplyMultiplyAdjustment` for all bid lists. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |

### `DimensionalBidding_UnassociatedBidList`

| Field | Type | Required | Description |
|---|---|---|---|
| BidListId | string |  | The ID of the bid list. _(nullable)_ |
| CreationDate | string (date-time) |  | The date the bid list was created. |
| OwnerEntityId | string |  | The ID of the entity that owns this bid list. _(nullable)_ |
| OwnerEntityType | `DimensionalBidding_UnassociatedBidListOwner` |  | The type of entity (AdGroup, Campaign, Advertiser, or Partner) owning this bid list. |

### `TTD.Domain.Shared.PublicAPI.Models_ApiBatchError`

| Field | Type | Required | Description |
|---|---|---|---|
| ErrorCode | `System.Net_HttpStatusCode` |  | Represents the standard http error code associated with the issue. |
| Message | string |  | Message containing the reason why the error occurred. _(nullable)_ |

### `AdGroup_AdsTxtSellerType`

Type: string enum(Unknown, Direct, Reseller)

### `AdGroup_VideoMutedState`

Type: string enum(InfrequentlyAutoMuted, SometimesAutoMuted, AlwaysAutoMuted)

### `AdGroup_VideoPlaybackType`

Type: string enum(PreRoll, MidRoll, PostRoll, Undeclared, InterstitialSliderFloating, AccompanyingContent, Standalone)

### `AdGroup_VideoPlayerSize`

Type: string enum(Unknown, Small, Medium, Large, InBanner)

### `AdGroup_VideoQuality`

Type: string enum(Unknown, Professional, Prosumer, UserGenerated, Mixed)

### `AdGroup_VideoSkippability`

Type: string enum(Skippable, NotSkippable, Unknown)

### `DimensionalBidding_AtmosphericCondition`

Type: string enum(Unknown, Low, Medium, High, VeryHigh, LowForecast, MediumForecast, HighForecast, VeryHighForecast)

### `DimensionalBidding_AudienceReachPercentageTier`

Type: string enum(Unknown, Tier1, Tier2, Tier3, Tier4)

### `DimensionalBidding_Browser`

Type: string enum(Other, InternetExplorer7, InternetExplorer8, InternetExplorer9, Firefox, Chrome, Safari, Opera, InternetExplorer10, InternetExplorer11, Edge, Baidu, Yandex, WebView)

### `DimensionalBidding_ContentDuration`

Type: string enum(Unknown, ShorterThan15Minutes, Between15And30Minutes, Between30And45Minutes, Between45And60Minutes, Between60And75Minutes, Between75And90Minutes, Between90And105Minutes, Between105And120Minutes, LongerThan120Minutes)

### `DimensionalBidding_ContentLivestream`

Type: string enum(Unknown, Live, NotLive)

### `DimensionalBidding_ContentProductionQuality`

Type: string enum(Unknown, Professional, Prosumer, UserGeneratedContent)

### `DimensionalBidding_DeviceType`

Type: string enum(Other, PC, Tablet, Mobile, Roku, ConnectedTV, OutOfHome, HomeAssistant)

### `DimensionalBidding_FrequencyRange`

| Field | Type | Required | Description |
|---|---|---|---|
| CounterId | string |  | Specify a counter to define the number of times an ad was shown to a user within the counter's `ResetIntervalInMinutes`. |
| TimesShown | `TheTradeDesk.AdPlatform_NonNullRange_integer_int32__` |  | The range of times the ad has been shown to the user in the look back window.   The end of a range is exclusive. The min of the range must be less than the max.   E.G. -    A range of 0 to 1 will target all users that have seen the ad 0 times, up to (not including) 1 time, such that at the end of the campaign, ideally all users will have seen the ad once.   A range of 0 to 5 will target all users that have seen the ad 0 to 4 times, such that at the end of the campaign, ideally all users will have seen the ad 5 times.   A range of 3 to 6 will target all users that have seen the ad 3, 4, or 5 times, such that at the end of the campaign, ideally all users will have seen the ad 6 times. |

### `DimensionalBidding_FrequencyTarget`

Represents the number of times an ad has been shown to a user in a range of time.

| Field | Type | Required | Description |
|---|---|---|---|
| LookBackWindowInMinutes | integer (int32) |  | The time range, looking back, over which to measure the times shown.   Value must be greater than 0. |
| TimesShown | `TheTradeDesk.AdPlatform_NonNullRange_integer_int32__` |  | The range of times the ad has been shown to the user in the look back window.   The end of a range is exclusive. The min of the range must be less than the max.   E.G. -    A range of 0 to 1 will target all users that have seen the ad 0 times, up to (not including) 1 time, such that at the end of the campaign, ideally all users will have seen the ad once.   A range of 0 to 5 will target all users that have seen the ad 0 to 4 times, such that at the end of the campaign, ideally all users will have seen the ad 5 times.   A range of 3 to 6 will target all users that have seen the ad 3, 4, or 5 times, such that at the end of the campaign, ideally all users will have seen the ad 6 times. |

### `DimensionalBidding_InternetConnectionType`

Type: string enum(Unknown, Ethernet, WiFi, CellularNetworkUnknown, CellularNetwork2G, CellularNetwork3G, CellularNetwork4G, CellularNetwork5G)

### `DimensionalBidding_LikelyRefreshRate`

Type: string enum(Unknown, Under15, Between15And30, Between30And60, Over60)

### `DimensionalBidding_MarketType`

Type: string enum(Open, PMP)

### `DimensionalBidding_NativePlacementType`

Type: string enum(Unknown, InFeed, InsideContent, OutsideContent, RecommendationWidget)

### `DimensionalBidding_RenderingContext`

Type: string enum(Other, InApp, MobileOptimizedWeb)

### `DimensionalBidding_Rewarded`

Type: string enum(Unknown, IsRewarded, NotRewarded)

### `DimensionalBidding_TTDNativeContextType`

Type: string enum(Unclassified, ContentUnclassified, SocialUnclassified, ProductUnclassified, General, Article, Video, Audio, Image, UserGenerated, GeneralSocial, Email, ChatOrIM, SellingProducts, ApplicationStore, ProductReview)

### `DimensionalBidding_ThirdPartyData`

Third-party data bid dimension is a tuple of third party data ID and third party data brand ID taken from the targeting data group.  
This dimension is currently only available on recommendation lists.

| Field | Type | Required | Description |
|---|---|---|---|
| ThirdPartyDataBrandId | string |  | The third-party data brand ID associated with the third party data ID in the targeting data group. _(nullable)_ |
| ThirdPartyDataId | integer (int64) |  | The third-party data ID identifying the data segment. |

### `DimensionalBidding_VolumeControlPriority`

Type: string enum(Neutral, One, Two, FrequencyGoal, Negative)

### `TheTradeDesk.AdPlatform_Range_integer_int32__`

| Field | Type | Required | Description |
|---|---|---|---|
| Max | integer (int32) |  | _(nullable)_ |
| Min | integer (int32) |  | _(nullable)_ |

### `TheTradeDesk.AdPlatform_Range_number_double__`

| Field | Type | Required | Description |
|---|---|---|---|
| Max | number (double) |  | _(nullable)_ |
| Min | number (double) |  | _(nullable)_ |

### `DimensionalBidding_FrequencyRange_post`

| Field | Type | Required | Description |
|---|---|---|---|
| CounterId | string | yes | Specify a counter to define the number of times an ad was shown to a user within the counter's `ResetIntervalInMinutes`. |
| TimesShown | `TheTradeDesk.AdPlatform_NonNullRange_integer_int32__` | yes | The range of times the ad has been shown to the user in the look back window.   The end of a range is exclusive. The min of the range must be less than the max.   E.G. -    A range of 0 to 1 will target all users that have seen the ad 0 times, up to (not including) 1 time, such that at the end of the campaign, ideally all users will have seen the ad once.   A range of 0 to 5 will target all users that have seen the ad 0 to 4 times, such that at the end of the campaign, ideally all users will have seen the ad 5 times.   A range of 3 to 6 will target all users that have seen the ad 3, 4, or 5 times, such that at the end of the campaign, ideally all users will have seen the ad 6 times. |

### `DimensionalBidding_FrequencyTarget_post`

Represents the number of times an ad has been shown to a user in a range of time.

| Field | Type | Required | Description |
|---|---|---|---|
| LookBackWindowInMinutes | integer (int32) | yes | The time range, looking back, over which to measure the times shown.   Value must be greater than 0. |
| TimesShown | `TheTradeDesk.AdPlatform_NonNullRange_integer_int32__` | yes | The range of times the ad has been shown to the user in the look back window.   The end of a range is exclusive. The min of the range must be less than the max.   E.G. -    A range of 0 to 1 will target all users that have seen the ad 0 times, up to (not including) 1 time, such that at the end of the campaign, ideally all users will have seen the ad once.   A range of 0 to 5 will target all users that have seen the ad 0 to 4 times, such that at the end of the campaign, ideally all users will have seen the ad 5 times.   A range of 3 to 6 will target all users that have seen the ad 3, 4, or 5 times, such that at the end of the campaign, ideally all users will have seen the ad 6 times. |

### `DimensionalBidding_FrequencyRange_put`

| Field | Type | Required | Description |
|---|---|---|---|
| CounterId | string | yes | Specify a counter to define the number of times an ad was shown to a user within the counter's `ResetIntervalInMinutes`. |
| TimesShown | `TheTradeDesk.AdPlatform_NonNullRange_integer_int32__` | yes | The range of times the ad has been shown to the user in the look back window.   The end of a range is exclusive. The min of the range must be less than the max.   E.G. -    A range of 0 to 1 will target all users that have seen the ad 0 times, up to (not including) 1 time, such that at the end of the campaign, ideally all users will have seen the ad once.   A range of 0 to 5 will target all users that have seen the ad 0 to 4 times, such that at the end of the campaign, ideally all users will have seen the ad 5 times.   A range of 3 to 6 will target all users that have seen the ad 3, 4, or 5 times, such that at the end of the campaign, ideally all users will have seen the ad 6 times. |

### `DimensionalBidding_FrequencyTarget_put`

Represents the number of times an ad has been shown to a user in a range of time.

| Field | Type | Required | Description |
|---|---|---|---|
| LookBackWindowInMinutes | integer (int32) | yes | The time range, looking back, over which to measure the times shown.   Value must be greater than 0. |
| TimesShown | `TheTradeDesk.AdPlatform_NonNullRange_integer_int32__` | yes | The range of times the ad has been shown to the user in the look back window.   The end of a range is exclusive. The min of the range must be less than the max.   E.G. -    A range of 0 to 1 will target all users that have seen the ad 0 times, up to (not including) 1 time, such that at the end of the campaign, ideally all users will have seen the ad once.   A range of 0 to 5 will target all users that have seen the ad 0 to 4 times, such that at the end of the campaign, ideally all users will have seen the ad 5 times.   A range of 3 to 6 will target all users that have seen the ad 3, 4, or 5 times, such that at the end of the campaign, ideally all users will have seen the ad 6 times. |

### `DimensionalBidding_BidListLevel`

Type: string enum(AdGroup, Campaign, Advertiser, Partner)

### `System.Net_HttpStatusCode`

Type: string enum(Continue, SwitchingProtocols, Processing, EarlyHints, OK, Created, Accepted, NonAuthoritativeInformation, NoContent, ResetContent, PartialContent, MultiStatus, AlreadyReported, IMUsed, MultipleChoices, MovedPermanently, Found, SeeOther, NotModified, UseProxy, Unused, RedirectKeepVerb, PermanentRedirect, BadRequest, Unauthorized, PaymentRequired, Forbidden, NotFound, MethodNotAllowed, NotAcceptable, ProxyAuthenticationRequired, RequestTimeout, Conflict, Gone, LengthRequired, PreconditionFailed, RequestEntityTooLarge, RequestUriTooLong, UnsupportedMediaType, RequestedRangeNotSatisfiable, ExpectationFailed, MisdirectedRequest, UnprocessableEntity, Locked, FailedDependency, UpgradeRequired, PreconditionRequired, TooManyRequests, RequestHeaderFieldsTooLarge, UnavailableForLegalReasons, InternalServerError, NotImplemented, BadGateway, ServiceUnavailable, GatewayTimeout, HttpVersionNotSupported, VariantAlsoNegotiates, InsufficientStorage, LoopDetected, NotExtended, NetworkAuthenticationRequired)

### `TheTradeDesk.AdPlatform_NonNullRange_integer_int32__`

| Field | Type | Required | Description |
|---|---|---|---|
| Max | integer (int32) |  |  |
| Min | integer (int32) |  |  |

