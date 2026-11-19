# Dynamic Creative Optimization

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 5

---

## POST /v3/dynamiccreativerule

Create a new dynamic creative rule that can be attached to a   
[creative](/v3/portal/api/area/Creative).  
    
Learn more about what dynamic creative rules are and how to use them   
by logging into the platform and viewing our   
[Dynamic Creative Rules](https://app.getguru.com/card/i4kp6kLT/Dynamic-Creative-Rules) Knowledge Portal article.

Operation ID: `post-dynamiccreativerule`

**Request body** (`application/json`, required): `DMP_DynamicCreativeRule_post`

**Response 200** (`application/json`): `DMP_DynamicCreativeRule`

---

## PUT /v3/dynamiccreativerule

Update an existing dynamic creative rule.

Operation ID: `put-dynamiccreativerule`

**Request body** (`application/json`, required): `DMP_DynamicCreativeRule_put`

**Response 200** (`application/json`): `DMP_DynamicCreativeRule`

---

## GET /v3/dynamiccreativerule/{dynamicCreativeRuleId}

Retrieve the details for an existing dynamic creative rule using a specific `DynamicCreativeRuleId`

Operation ID: `get-dynamiccreativerule-dynamiccreativeruleid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| dynamicCreativeRuleId | path | string | yes |  |

**Response 200** (`application/json`): `DMP_DynamicCreativeRule`

---

## POST /v3/dynamiccreativerule/query/advertiser

Retrieve a paged, sortable and filterable list of dynamic creative rules owned by a specific advertiser.  
    
Use the [GET /dynamiccreativerule/query/facets](/v3/portal/api/ref/get-dynamiccreativerule-query-facets) endpoint to look up properties available to use for sorting.

Operation ID: `post-dynamiccreativerule-query-advertiser`

**Request body** (`application/json`, required): `DMP_DynamicCreativeRuleQueryForAdvertiser`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_DynamicCreativeRule_`

---

## GET /v3/dynamiccreativerule/query/facets

Retrieve the dynamic creative rule properties that can be used for sorting on the [POST /dynamiccreativerule/query/advertiser](/v3/portal/api/ref/post-dynamiccreativerule-query-advertiser) endpoint.

Operation ID: `get-dynamiccreativerule-query-facets`

**Response 200** (`application/json`): `DMP_DynamicCreativeRuleFacets`

---

## Schemas

### `DMP_DynamicCreativeRule`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | Specify the `AdvertiserId` for the advertiser who owns this dynamic creative rule.   Retrieve the `AdvertiserId` from the [advertiser](/v3/portal/api/area/Advertiser) endpoints. |
| DataElementGroups | array<`DMP_DataElementGroup`> |  | The list of `DataElementGroups` owned by this `DynamicCreativeRule`.   If this property is specified on update, the list of `DataElementGroups` provided will replace all existing `DataElementGroups` for this dynamic creative rule. |
| DynamicCreativeRuleId | string |  | A system-generated identifier that represents this individual dynamic creative rule.    On create, this property is read-only. We will generate an identifier and return it to you.    Any value specified for this property on create will be ignored. |
| Name | string |  | Specify a name for this dynamic creative rule.    This name displays in the platform user interface for the dynamic creative rule.   The maximum length for this property is 128 characters and the value cannot include non-printable characters. _(maxLength 128)_ |

### `DMP_DynamicCreativeRuleFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| SortingFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_DynamicCreativeRuleSortingField_`> |  | The list of properties that may be used to sort dynamic creative rule query results.    This list may be extended at any time, so please design accordingly. |

### `DMP_DynamicCreativeRuleQueryForAdvertiser`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | Specify the `AdvertiserId` for the advertiser who owns this dynamic creative rule.   Retrieve the `AdvertiserId` from the [advertiser](/v3/portal/api/area/Advertiser) endpoints. |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| SearchTerms | array<string> |  | Specify a list of search terms to use in filtering the returned dynamic creative rules.    All terms must be matched in the ID or name of the dynamic creative rule in order for it to be returned. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_DynamicCreativeRuleSortingField_`> |  | Specify fields by which to sort the returned dynamic creative rules.    The order the sort fields are specified in the list is the same order the dynamic creative rule results will be sorted.    Duplicate field IDs are not allowed in the sorting list.   Use our [GET /dynamiccreativerule/query/facets](/v3/portal/api/ref/get-dynamiccreativerule/query/facets) endpoint to retrieve the available `SortFields` that may be used in this list.   When this property is not specified, empty, or null, the default sort is in ascending order by `Name`. _(nullable)_ |

### `DMP_DynamicCreativeRule_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | Specify the `AdvertiserId` for the advertiser who owns this dynamic creative rule.   Retrieve the `AdvertiserId` from the [advertiser](/v3/portal/api/area/Advertiser) endpoints. |
| DataElementGroups | array<`DMP_DataElementGroup_post`> | yes | The list of `DataElementGroups` owned by this `DynamicCreativeRule`.   If this property is specified on update, the list of `DataElementGroups` provided will replace all existing `DataElementGroups` for this dynamic creative rule. |
| Name | string | yes | Specify a name for this dynamic creative rule.    This name displays in the platform user interface for the dynamic creative rule.   The maximum length for this property is 128 characters and the value cannot include non-printable characters. _(maxLength 128)_ |
| DynamicCreativeRuleId | string |  | A system-generated identifier that represents this individual dynamic creative rule.    On create, this property is read-only. We will generate an identifier and return it to you.    Any value specified for this property on create will be ignored. |

### `DMP_DynamicCreativeRule_put`

| Field | Type | Required | Description |
|---|---|---|---|
| DynamicCreativeRuleId | string | yes | A system-generated identifier that represents this individual dynamic creative rule.    On create, this property is read-only. We will generate an identifier and return it to you.    Any value specified for this property on create will be ignored. |
| AdvertiserId | string |  | Specify the `AdvertiserId` for the advertiser who owns this dynamic creative rule.   Retrieve the `AdvertiserId` from the [advertiser](/v3/portal/api/area/Advertiser) endpoints. |
| DataElementGroups | array<`DMP_DataElementGroup_put`> |  | The list of `DataElementGroups` owned by this `DynamicCreativeRule`.   If this property is specified on update, the list of `DataElementGroups` provided will replace all existing `DataElementGroups` for this dynamic creative rule. |
| Name | string |  | Specify a name for this dynamic creative rule.    This name displays in the platform user interface for the dynamic creative rule.   The maximum length for this property is 128 characters and the value cannot include non-printable characters. _(maxLength 128)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_DynamicCreativeRule_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`DMP_DynamicCreativeRule`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `DMP_DataElementGroup`

| Field | Type | Required | Description |
|---|---|---|---|
| FirstPartyDataIds | array<integer (int64)> |  | A list of `FirstPartyDataIds` to include in the data element group.    List items are treated as a union. If a user matches any of these data elements, they are included for targeting in the data element group.    Look up `FirstPartyDataIds` with our [POST /dmp/firstparty/advertiser](/v3/portal/api/area/ref/post-dmp-firstparty-advertiser) endpoint.   If a `FirstPartyDataId` is included in this list more than once, duplicate IDs will be ignored. For example, `[2, 3, 2, 2]` is equivalent to `[2, 3]`.   If this property is specified on update, the list of `FirstPartyDataIds` provided will replace all existing `FirstPartyDataIds` for this data element _(nullable)_ |
| GroupName | string |  | Specify a name for this data element group.    This value displays in the platform user interface as the data element group's "Group Name".    For example, you may use something like `Young-sports-lover`.    The maximum length for this property is 128 characters and the value cannot include non-printable characters. _(maxLength 128)_ |
| OutputName | string |  | Specify an output name for this data element group.    The output name is typically given to a dynamic creative optimization provider in order to help it decide which type of creative to serve.    The output name will replace the mapping rule macro in the creative tag.   The maximum length for this property is 128 characters and the value cannot include non-printable characters. _(maxLength 128)_ |
| ThirdPartyDataIds | array<string> |  | A list of `ThirdPartyDataId\|ThirdPartyDataBrandId` to include in the data element group.   List items are treated as a union. If a user matches any of these data elements, they are included for targeting in the data element group.    Look up `ThirdPartyDataIds` with our [POST /dmp/thirdparty/advertiser](/v3/portal/api/area/ref/post-dmp-thirdparty-advertiser) endpoint.   If a `ThirdPartyDataIds` is included in this list more than once, duplicate IDs will be ignored. For example, `[dataId1\|brandId1, dataId2\|brandId2, dataId3\|brandId2]` is equivalent to `[dataId1\|brandId1, dataId2\|brandId2]`.   If this property is specified on update, the list of `ThirdPartyDataIds` provided will replace all existing `ThirdPartyDataIds` for this data element _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_DynamicCreativeRuleSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `DMP_DynamicCreativeRuleSortingField` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_DynamicCreativeRuleSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `DMP_DynamicCreativeRuleSortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `DMP_DataElementGroup_post`

| Field | Type | Required | Description |
|---|---|---|---|
| GroupName | string | yes | Specify a name for this data element group.    This value displays in the platform user interface as the data element group's "Group Name".    For example, you may use something like `Young-sports-lover`.    The maximum length for this property is 128 characters and the value cannot include non-printable characters. _(maxLength 128)_ |
| OutputName | string | yes | Specify an output name for this data element group.    The output name is typically given to a dynamic creative optimization provider in order to help it decide which type of creative to serve.    The output name will replace the mapping rule macro in the creative tag.   The maximum length for this property is 128 characters and the value cannot include non-printable characters. _(maxLength 128)_ |
| FirstPartyDataIds | array<integer (int64)> |  | A list of `FirstPartyDataIds` to include in the data element group.    List items are treated as a union. If a user matches any of these data elements, they are included for targeting in the data element group.    Look up `FirstPartyDataIds` with our [POST /dmp/firstparty/advertiser](/v3/portal/api/area/ref/post-dmp-firstparty-advertiser) endpoint.   If a `FirstPartyDataId` is included in this list more than once, duplicate IDs will be ignored. For example, `[2, 3, 2, 2]` is equivalent to `[2, 3]`.   If this property is specified on update, the list of `FirstPartyDataIds` provided will replace all existing `FirstPartyDataIds` for this data element _(nullable)_ |
| ThirdPartyDataIds | array<string> |  | A list of `ThirdPartyDataId\|ThirdPartyDataBrandId` to include in the data element group.   List items are treated as a union. If a user matches any of these data elements, they are included for targeting in the data element group.    Look up `ThirdPartyDataIds` with our [POST /dmp/thirdparty/advertiser](/v3/portal/api/area/ref/post-dmp-thirdparty-advertiser) endpoint.   If a `ThirdPartyDataIds` is included in this list more than once, duplicate IDs will be ignored. For example, `[dataId1\|brandId1, dataId2\|brandId2, dataId3\|brandId2]` is equivalent to `[dataId1\|brandId1, dataId2\|brandId2]`.   If this property is specified on update, the list of `ThirdPartyDataIds` provided will replace all existing `ThirdPartyDataIds` for this data element _(nullable)_ |

### `DMP_DataElementGroup_put`

| Field | Type | Required | Description |
|---|---|---|---|
| GroupName | string | yes | Specify a name for this data element group.    This value displays in the platform user interface as the data element group's "Group Name".    For example, you may use something like `Young-sports-lover`.    The maximum length for this property is 128 characters and the value cannot include non-printable characters. _(maxLength 128)_ |
| OutputName | string | yes | Specify an output name for this data element group.    The output name is typically given to a dynamic creative optimization provider in order to help it decide which type of creative to serve.    The output name will replace the mapping rule macro in the creative tag.   The maximum length for this property is 128 characters and the value cannot include non-printable characters. _(maxLength 128)_ |
| FirstPartyDataIds | array<integer (int64)> |  | A list of `FirstPartyDataIds` to include in the data element group.    List items are treated as a union. If a user matches any of these data elements, they are included for targeting in the data element group.    Look up `FirstPartyDataIds` with our [POST /dmp/firstparty/advertiser](/v3/portal/api/area/ref/post-dmp-firstparty-advertiser) endpoint.   If a `FirstPartyDataId` is included in this list more than once, duplicate IDs will be ignored. For example, `[2, 3, 2, 2]` is equivalent to `[2, 3]`.   If this property is specified on update, the list of `FirstPartyDataIds` provided will replace all existing `FirstPartyDataIds` for this data element _(nullable)_ |
| ThirdPartyDataIds | array<string> |  | A list of `ThirdPartyDataId\|ThirdPartyDataBrandId` to include in the data element group.   List items are treated as a union. If a user matches any of these data elements, they are included for targeting in the data element group.    Look up `ThirdPartyDataIds` with our [POST /dmp/thirdparty/advertiser](/v3/portal/api/area/ref/post-dmp-thirdparty-advertiser) endpoint.   If a `ThirdPartyDataIds` is included in this list more than once, duplicate IDs will be ignored. For example, `[dataId1\|brandId1, dataId2\|brandId2, dataId3\|brandId2]` is equivalent to `[dataId1\|brandId1, dataId2\|brandId2]`.   If this property is specified on update, the list of `ThirdPartyDataIds` provided will replace all existing `ThirdPartyDataIds` for this data element _(nullable)_ |

### `DMP_DynamicCreativeRuleSortingField`

Type: string enum(Name)

