# Contract Group

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 8

---

## POST /v3/contractgroup

Create a new Contract Group.

Operation ID: `post-contractgroup`

**Request body** (`application/json`, required): `ContractGroup_ContractGroup_post`

**Response 200** (`application/json`): `ContractGroup_ContractGroup`

---

## PUT /v3/contractgroup

Update an existing Contract Group.

Operation ID: `put-contractgroup`

**Request body** (`application/json`, required): `ContractGroup_ContractGroup_put`

**Response 200** (`application/json`): `ContractGroup_ContractGroup`

---

## GET /v3/contractgroup/{contractGroupId}

Get an existing Contract Group.

Operation ID: `get-contractgroup-contractgroupid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| contractGroupId | path | string | yes |  |

**Response 200** (`application/json`): `ContractGroup_ContractGroup`

---

## POST /v3/contractgroup/query/advertiser/available

Get the page of Contract Groups that a specific Advertiser is allowed to buy

Operation ID: `post-contractgroup-query-advertiser-available`

**Request body** (`application/json`, required): `ContractGroup_ContractGroupQueryForAdvertiser`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_ContractGroup_`

---

## POST /v3/contractgroup/query/partner

Get the page of Contract Groups owned by Partner

Operation ID: `post-contractgroup-query-partner`

**Request body** (`application/json`, required): `ContractGroup_ContractGroupQueryForPartner`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_ContractGroup_`

---

## POST /v3/contractgroup/report/impressions/available

Query for a page of an Available Impressions Report for a specific Contract Group.

Operation ID: `post-contractgroup-report-impressions-available`

**Request body** (`application/json`, required): `ContractGroup_AvailableImpressionsQueryForContractGroup_post`

**Response 200** (`application/json`): `ContractGroup_AvailableImpressionsReportForContractGroup`

---

## GET /v3/contractgroup/name/{contractGroupId}

Get the identifier and name for an Contract Group based on identifier

Operation ID: `get-contractgroup-name-contractgroupid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| contractGroupId | path | string | yes |  |

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_IdName`

---

## POST /v3/contractgroup/query/deliveryprofile

Query for a page of Contracts Groups that are associated with specified DeliveryProfileId

Operation ID: `post-contractgroup-query-deliveryprofile`

**Request body** (`application/json`, required): `Contract_ContractGroupQueryForDeliveryProfile`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_ContractGroup_`

---

## Schemas

### `ContractGroup_AvailableImpressionsQueryForContractGroup_post`

| Field | Type | Required | Description |
|---|---|---|---|
| ContractGroupId | string | yes | The ID of the Contract Group to retrieve available impression data for. |
| ReportEndDateUTC | string (date-time) | yes | The end date (inclusive) of the report date range.   The maximum date range per query is 60 days. The time portion of the date object is ignored. |
| ReportStartDateUTC | string (date-time) | yes | The start date (inclusive) of the report date range.   The maximum date range per query is 60 days. The time portion of the date object is ignored. |

### `ContractGroup_AvailableImpressionsReportForContractGroup`

| Field | Type | Required | Description |
|---|---|---|---|
| ContractGroupId | string |  | The Contract Group Id |
| ReportEndDateUTC | string (date-time) |  | The effective end date (inclusive) of the report date range. |
| ReportingDataByDay | array<`Report_ReportingDataForDay_AvailableImpressionsReportData_`> |  | The list of reporting data for each day in the report date range.    There will be a exactly one entry in this list for each full day within the report date range. Note that ReportEndDateUTC is inclusive. For example, if ReportStartDateUTC="2015-01-01" and ReportEndDateUTC="2015-01-02", this list will contain two entries, for 2015-01-01  and 2015-01-02. |
| ReportStartDateUTC | string (date-time) |  | The effective start date (inclusive) of the report date range. |

### `ContractGroup_ContractGroup`

A collection of one or more Contracts.

| Field | Type | Required | Description |
|---|---|---|---|
| BidListId | integer (int64) |  | The targetable Bid List Ids that are associated with this contract group |
| ContractGroupId | string |  | The ID of the Contract Group.  Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| ContractIds | array<string> |  | The Contract IDs that are members of the Contract Group.   Contracts may be members of more than one group. _(nullable)_ |
| DeliveryProfileIds | array<string> |  | Delivery profiles allow you to explicitly assign which partners and advertisers may view your contract group. Specify a list of `DeliveryProfileIds` to assign permissions to this contract group.   Create, update, and look up `DeliveryProfileIds` to use with our [delivery profile endpoints](/v3/portal/api/area/Delivery%20Profile).    `DeliveryProfileIds` are currently optional and will be required at a future date. Please follow our [Release Notes](/v3/portal/api/doc/ReleaseNotes) page for updates. _(nullable)_ |
| Description | string |  | An optional description for the Contract Group. _(nullable)_ |
| Name | string |  | An optional name for the Contract Group. _(nullable)_ |
| OwnerPartnerId | string |  | The ID of the partner that owns the Contract Group.    Partners are always allowed to buy against contract groups they own. Also, contract groups may only be modified by users associated with owning partners.   If the supplied OwnerPartnerId is not a valid PartnerId in The Trade Desk system, the request is rejected with a 400 error. |

### `ContractGroup_ContractGroupQueryForAdvertiser`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser. |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |

### `ContractGroup_ContractGroupQueryForPartner`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| PartnerId | string | yes | The platform ID of the advertiser. |

### `ContractGroup_ContractGroup_post`

A collection of one or more Contracts.

| Field | Type | Required | Description |
|---|---|---|---|
| OwnerPartnerId | string | yes | The ID of the partner that owns the Contract Group.    Partners are always allowed to buy against contract groups they own. Also, contract groups may only be modified by users associated with owning partners.   If the supplied OwnerPartnerId is not a valid PartnerId in The Trade Desk system, the request is rejected with a 400 error. |
| BidListId | integer (int64) |  | The targetable Bid List Ids that are associated with this contract group |
| ContractIds | array<string> |  | The Contract IDs that are members of the Contract Group.   Contracts may be members of more than one group. _(nullable)_ |
| DeliveryProfileIds | array<string> |  | Delivery profiles allow you to explicitly assign which partners and advertisers may view your contract group. Specify a list of `DeliveryProfileIds` to assign permissions to this contract group.   Create, update, and look up `DeliveryProfileIds` to use with our [delivery profile endpoints](/v3/portal/api/area/Delivery%20Profile).    `DeliveryProfileIds` are currently optional and will be required at a future date. Please follow our [Release Notes](/v3/portal/api/doc/ReleaseNotes) page for updates. _(nullable)_ |
| Description | string |  | An optional description for the Contract Group. _(nullable)_ |
| Name | string |  | An optional name for the Contract Group. _(nullable)_ |

### `ContractGroup_ContractGroup_put`

A collection of one or more Contracts.

| Field | Type | Required | Description |
|---|---|---|---|
| ContractGroupId | string | yes | The ID of the Contract Group.  Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| BidListId | integer (int64) |  | The targetable Bid List Ids that are associated with this contract group |
| ContractIds | array<string> |  | The Contract IDs that are members of the Contract Group.   Contracts may be members of more than one group. _(nullable)_ |
| DeliveryProfileIds | array<string> |  | Delivery profiles allow you to explicitly assign which partners and advertisers may view your contract group. Specify a list of `DeliveryProfileIds` to assign permissions to this contract group.   Create, update, and look up `DeliveryProfileIds` to use with our [delivery profile endpoints](/v3/portal/api/area/Delivery%20Profile).    `DeliveryProfileIds` are currently optional and will be required at a future date. Please follow our [Release Notes](/v3/portal/api/doc/ReleaseNotes) page for updates. _(nullable)_ |
| Description | string |  | An optional description for the Contract Group. _(nullable)_ |
| Name | string |  | An optional name for the Contract Group. _(nullable)_ |
| OwnerPartnerId | string |  | The ID of the partner that owns the Contract Group.    Partners are always allowed to buy against contract groups they own. Also, contract groups may only be modified by users associated with owning partners.   If the supplied OwnerPartnerId is not a valid PartnerId in The Trade Desk system, the request is rejected with a 400 error. |

### `Contract_ContractGroupQueryForDeliveryProfile`

| Field | Type | Required | Description |
|---|---|---|---|
| DeliveryProfileId | string | yes | The ID of the DeliveryProfile that is associated with the contract groups |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_ContractGroupSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed. Available values are Name and Description.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by Name ascending. _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_IdName`

| Field | Type | Required | Description |
|---|---|---|---|
| Id | string |  | The identifier for the object instance |
| Name | string |  | The name for the object instance |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_ContractGroup_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`ContractGroup_ContractGroup`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `Report_ReportingDataForDay_AvailableImpressionsReportData_`

| Field | Type | Required | Description |
|---|---|---|---|
| DateUTC | string (date-time) |  | The date to which the reporting data applies |
| ReportingData | `Report_AvailableImpressionsReportData` |  | The reporting data for this date. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_ContractGroupSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `ContractGroup_ContractGroupSortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `Report_AvailableImpressionsReportData`

The available impression data for a single reporting grain.

| Field | Type | Required | Description |
|---|---|---|---|
| AvailableImpressionsCount | integer (int64) |  | The count of available impressions for the report grain |

### `ContractGroup_ContractGroupSortingField`

Type: string enum(Name, Description)

