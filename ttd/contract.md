# Contract

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 13

---

## POST /v3/contract

**DEPRECATED.** We recommend using the [`bidListCreate` mutation](/v3/portal/api/gql-doc/bid-list-create) in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work.

Create a new Contract.

Operation ID: `post-contract`

**Request body** (`application/json`, required): `Contract_Contract_post`

**Response 200** (`application/json`): `Contract_Contract`

---

## PUT /v3/contract

**DEPRECATED.** We recommend using the [`bidListCreate` mutation](/v3/portal/api/gql-doc/bid-list-create) in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work.

Update an existing Contract.

Operation ID: `put-contract`

**Request body** (`application/json`, required): `Contract_Contract_put`

**Response 200** (`application/json`): `Contract_Contract`

---

## GET /v3/contract/{contractId}

Get an existing Contract.

Operation ID: `get-contract-contractid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| contractId | path | string | yes |  |

**Response 200** (`application/json`): `Contract_Contract`

---

## GET /v3/contract/query/facets

Get the facets of Contracts that can be used in queries.

Operation ID: `get-contract-query-facets`

**Response 200** (`application/json`): `Contract_ContractFacets`

---

## POST /v3/contract/query/partner

Query for a page of Contracts owned by a Partner.

Operation ID: `post-contract-query-partner`

**Request body** (`application/json`, required): `Contract_ContractQueryForPartner`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_Contract_`

---

## POST /v3/contract/query/partner/available

Query for a page of Contracts that are available to the Advertisers under the chosen Partner.

Operation ID: `post-contract-query-partner-available`

**Request body** (`application/json`, required): `Contract_ContractQueryForPartnerBuying`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_Contract_`

---

## POST /v3/contract/query/advertiser/available

Query for a page of Contracts that are available for the chosen Advertiser to buy.

Operation ID: `post-contract-query-advertiser-available`

**Request body** (`application/json`, required): `Contract_ContractQueryForAdvertiserBuying`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_Contract_`

---

## POST /v3/contract/query/deliveryprofile

Query for a page of Contracts that are associated with specified DeliveryProfileId

Operation ID: `post-contract-query-deliveryprofile`

**Request body** (`application/json`, required): `Contract_ContractQueryForDeliveryProfile`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_Contract_`

---

## POST /v3/contract/query/supplyvendordeal

Query for a page of Contracts associated with the specific SupplyVendorDealId

Operation ID: `post-contract-query-supplyvendordeal`

**Request body** (`application/json`, required): `Contract_ContractQueryForSupplyVendorDeal`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_Contract_`

---

## POST /v3/contract/buyers/query/partners

Query for info about all the Partners that may act as buyers for Contracts offered by the chosen Partner.  
These are the Partners that may be specified in the ContractsPermissions of the Partner's Contracts.

Operation ID: `post-contract-buyers-query-partners`

**Request body** (`application/json`, required): `Partner_PartnerQueryForPartner`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_PartnerInfo_`

---

## POST /v3/contract/buyers/query/advertisers

Query for Advertisers that may act as buyers of Contracts offered by the chosen Partner.  
These are the Advertisers that may be specified in ContractPermissions of the Partner's Contracts.

Operation ID: `post-contract-buyers-query-advertisers`

**Request body** (`application/json`, required): `Advertiser_AdvertiserQueryForPartner`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_AdvertiserInfo_`

---

## POST /v3/contract/report/impressions/available

Query for a page of an Available Impressions Report for a specific Contract.

Operation ID: `post-contract-report-impressions-available`

**Request body** (`application/json`, required): `Contract_AvailableImpressionsQueryForContract_post`

**Response 200** (`application/json`): `Contract_AvailableImpressionsReportForContract`

---

## GET /v3/contract/name/{contractId}

Get the identifier and name for a Contract based on identifier

Operation ID: `get-contract-name-contractid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| contractId | path | string | yes |  |

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_IdName`

---

## Schemas

### `Advertiser_AdvertiserQueryForPartner`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| PartnerId | string | yes | The ID of the Partner that owns the Advertisers |
| Availabilities | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability`> |  | A list of Availability states by which to filter the returned Advertisers. See GET advertiser/query/facets for the list of possible availabilities.   If not specified, empty, or null, only Available Advertisers will be returned. _(nullable)_ |
| SearchTerms | array<string> |  | A list of search terms by which to filter the returned Advertisers. All terms must be matched in the ID, name or description in order for an Advertiser to match.   If not specified, empty, or null, this property is ignored. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_AdvertiserSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed. See GET advertiser/query/facets for the list of possible sort field IDs.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by Name ascending. _(nullable)_ |

### `Contract_AvailableImpressionsQueryForContract_post`

| Field | Type | Required | Description |
|---|---|---|---|
| ContractId | string | yes | The ID of the Contract to retrieve available impression data for. |
| ReportEndDateUTC | string (date-time) | yes | The end date (inclusive) of the report date range.   The maximum date range per query is 60 days. The time portion of the date object is ignored. |
| ReportStartDateUTC | string (date-time) | yes | The start date (inclusive) of the report date range.   The maximum date range per query is 60 days. The time portion of the date object is ignored. |

### `Contract_AvailableImpressionsReportForContract`

| Field | Type | Required | Description |
|---|---|---|---|
| ContractId | string |  | The Contract Id |
| ReportEndDateUTC | string (date-time) |  | The effective end date (inclusive) of the report date range. |
| ReportingDataByDay | array<`Report_ReportingDataForDay_AvailableImpressionsReportData_`> |  | The list of reporting data for each day in the report date range.    There will be a exactly one entry in this list for each full day within the report date range. Note that ReportEndDateUTC is inclusive. For example, if ReportStartDateUTC="2015-01-01" and ReportEndDateUTC="2015-01-02", this list will contain two entries, for 2015-01-01  and 2015-01-02. |
| ReportStartDateUTC | string (date-time) |  | The effective start date (inclusive) of the report date range. |

### `Contract_Contract`

| Field | Type | Required | Description |
|---|---|---|---|
| ApprovalState | `Contract_ContractApprovalState` |  | The approval state of the Contract, as documented in the ContractApprovalState enumeration. This is a read-only property.    Contracts start out as Approved by default unless they have certain attributes set to a value that needs approval from The Trade Desk. |
| Availability | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability` |  | Availability state of the Contract. |
| ContractId | string |  | The ID of the Contract.  Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| ContractTerms | `Contract_ContractTerms` |  | The terms negotiated with the publisher for the contract. _(nullable)_ |
| ContractType | `Contract_ContractType` |  | The ContractType as documented in the ContractType enumeration. If not specified on create, the Contract is created with a default   value of ContractType.SupplyVendor. |
| CurrencyCode | `TheTradeDesk_CurrencyCode` |  | The currency of the Contract. All money values associated with the Contract must be in this currency.   Once a Contract has been created, this may not be changed.   If not specified on create, the Contract uses the currency of the owning Partner. |
| CustomLabels | array<`CustomLabel_AssignedCustomLabel`> |  | Custom Labels assigned to this contract. |
| Deals | array<`Contract_SupplyVendorDeal`> |  | The list of supply vendor deals that run under the Contract. _(nullable)_ |
| DeliveryPriorities | array<`Contract_DeliveryPriority`> |  | A list of delivery priorities to associate with the deal. Currently restricted to a singleton. |
| Description | string |  | An optional description for the Contract. _(nullable)_ |
| EndDateUTC | string (date-time) |  | The date and time (in UTC) until which the Contract is expected to be effective. If no end date is specified, the Contract is open ended. If specified, the end date must be after the start date. _(nullable)_ |
| IsLiveEvent | boolean |  | If set to `true`, indicates that the contract is running only on live sports and events inventory. The default value is `false`. |
| IsUpfront | boolean |  | If set to true, indicates that the contract is part of an upfront agreement, with ad time purchased in advance for better   rates and guaranteed spots. When including this property in your request, you must specify its value. _(nullable)_ |
| Name | string |  | The Name of the Contract. _(maxLength 256)_ |
| OwnerPartnerId | string |  | The ID of the partner that owns the Contract.    Partners are always allowed to buy against contracts they own. Also, contracts may only be modified by users associated with owning partners.   If the supplied OwnerPartnerId is not a valid PartnerId in The Trade Desk system, the request is rejected with a 400 error. |
| Permissions | `Contract_ContractPermissions` |  | The permissions granted/denied to Partners and Advertisers for this Contract. |
| StartDateUTC | string (date-time) |  | The date and time (in UTC) from which the Contract is expected to be effective. A start date must be specified at the time the Contract is created. _(nullable)_ |
| IsClassicGuaranteed | boolean |  | If true, it represents a programmatic guaranteed contract created in the Classic workflow, and so is only targetable by Classic PG ad groups (conversely, if false, it can be targetable by Megagon PG ad groups).    This property can only be set during contract creation, and only affects Programmatic Guaranteed contracts.  It defaults to true. _(DEPRECATED; deprecation: This property will be deprecated in the near future.)_ |

### `Contract_ContractFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| Availabilities | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_Availability_`> |  | The Availability states by which Contract queries may be filtered. This list may be extended at any time, so please design accordingly. |
| ContractTypes | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ContractType_`> |  | The Contract types by which Contract queries may be filtered. This list may be extended at any time, so please design accordingly. |
| SortingFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ContractSortingField_`> |  | The fields by which Contracts may be sorted in a query. This list may be extended at any time, so please design accordingly. |

### `Contract_ContractQueryForAdvertiserBuying`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser that is querying for contracts. |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| ContractTypes | array<`Contract_ContractType`> |  | A list of contract types by which to filter the returned Contracts.   If not specified, empty, or null, Contracts of all types will be returned. _(nullable)_ |
| OwnerPartnerIds | array<string> |  | A list of owner Partner IDs to filter Contract results.   If this list is not specified, null, or empty, it is ignored and results are not filtered by owner Partner ID. _(nullable)_ |
| ReturnOnlyIds | boolean |  | Whether or not the returned model should only contain ids |
| SearchTerms | array<string> |  | A list of search terms by which to filter the returned Contracts. All terms must be matched in the ID, name or description in order for a Contract to match.   If not specified, empty, or null, this property is ignored. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_ContractSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed. See GET contract/query/facets for the list of possible sort field IDs for Contracts.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by Name ascending. _(nullable)_ |

### `Contract_ContractQueryForDeliveryProfile`

| Field | Type | Required | Description |
|---|---|---|---|
| DeliveryProfileId | string | yes | The ID of the DeliveryProfile that is associated with the contracts |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| Availabilities | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability`> |  | A list of Availability states by which to filter the returned Contracts. See GET contract/query/facets for the list of possible availabilities.   If not specified, empty, or null, Contracts in all Availability states will be returned. _(nullable)_ |
| ContractTypes | array<`Contract_ContractType`> |  | A list of contract types by which to filter the returned Contracts.   If not specified, empty, or null, Contracts of all types will be returned. _(nullable)_ |
| ReturnOnlyIds | boolean |  | Whether or not the returned model should only contain ids |
| SearchTerms | array<string> |  | A list of search terms by which to filter the returned Contracts. All terms must be matched in the ID, name or description in order for a Contract to match.   If not specified, empty, or null, this property is ignored. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_ContractSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed. See GET contract/query/facets for the list of possible sort field IDs for Contracts.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by Name ascending. _(nullable)_ |

### `Contract_ContractQueryForPartner`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| PartnerId | string | yes | The ID of the Partner querying for Contracts. |
| Availabilities | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability`> |  | A list of Availability states by which to filter the returned Contracts. See GET contract/query/facets for the list of possible availabilities.   If not specified, empty, or null, Contracts in all Availability states will be returned. _(nullable)_ |
| ContractTypes | array<`Contract_ContractType`> |  | A list of contract types by which to filter the returned Contracts.   If not specified, empty, or null, Contracts of all types will be returned. _(nullable)_ |
| ReturnOnlyIds | boolean |  | Whether or not the returned model should only contain ids |
| SearchTerms | array<string> |  | A list of search terms by which to filter the returned Contracts. All terms must be matched in the ID, name or description in order for a Contract to match.   If not specified, empty, or null, this property is ignored. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_ContractSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed. See GET contract/query/facets for the list of possible sort field IDs for Contracts.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by Name ascending. _(nullable)_ |

### `Contract_ContractQueryForPartnerBuying`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| PartnerId | string | yes | The ID of the Partner querying for Contracts. |
| Availabilities | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability`> |  | A list of Availability states by which to filter the returned Contracts. See GET contract/query/facets for the list of possible availabilities.   If not specified, empty, or null, Contracts in all Availability states will be returned. _(nullable)_ |
| ContractTypes | array<`Contract_ContractType`> |  | A list of contract types by which to filter the returned Contracts.   If not specified, empty, or null, Contracts of all types will be returned. _(nullable)_ |
| OwnerPartnerIds | array<string> |  | A list of owner Partner IDs to filter Contract results.   If this list is not specified, null, or empty, it is ignored and results are not filtered by owner Partner ID. _(nullable)_ |
| ReturnOnlyIds | boolean |  | Whether or not the returned model should only contain ids |
| SearchTerms | array<string> |  | A list of search terms by which to filter the returned Contracts. All terms must be matched in the ID, name or description in order for a Contract to match.   If not specified, empty, or null, this property is ignored. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_ContractSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed. See GET contract/query/facets for the list of possible sort field IDs for Contracts.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by Name ascending. _(nullable)_ |

### `Contract_ContractQueryForSupplyVendorDeal`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| SupplyVendorDealId | string | yes | The SupplyVendorDealId for the SupplyVendorDeal associated with the Contract. |
| SupplyVendorId | integer (int64) | yes | The SupplyVendorId of the SupplyVendor |
| Availabilities | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability`> |  | A list of Availability states by which to filter the returned Contracts. See GET contract/query/facets for the list of possible availabilities.   If not specified, empty, or null, Contracts in all Availability states will be returned. _(nullable)_ |
| ContractTypes | array<`Contract_ContractType`> |  | A list of contract types by which to filter the returned Contracts.   If not specified, empty, or null, Contracts of all types will be returned. _(nullable)_ |
| ReturnOnlyIds | boolean |  | Whether or not the returned model should only contain ids |
| SearchTerms | array<string> |  | A list of search terms by which to filter the returned Contracts. All terms must be matched in the ID, name or description in order for a Contract to match.   If not specified, empty, or null, this property is ignored. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_ContractSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed. See GET contract/query/facets for the list of possible sort field IDs for Contracts.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by Name ascending. _(nullable)_ |

### `Contract_Contract_post`

| Field | Type | Required | Description |
|---|---|---|---|
| Name | string | yes | The Name of the Contract. _(maxLength 256)_ |
| OwnerPartnerId | string | yes | The ID of the partner that owns the Contract.    Partners are always allowed to buy against contracts they own. Also, contracts may only be modified by users associated with owning partners.   If the supplied OwnerPartnerId is not a valid PartnerId in The Trade Desk system, the request is rejected with a 400 error. |
| StartDateUTC | string (date-time) | yes | The date and time (in UTC) from which the Contract is expected to be effective. A start date must be specified at the time the Contract is created. _(nullable)_ |
| Availability | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability` |  | Availability state of the Contract. |
| ContractTerms | `Contract_ContractTerms` |  | The terms negotiated with the publisher for the contract. _(nullable)_ |
| ContractType | `Contract_ContractType` |  | The ContractType as documented in the ContractType enumeration. If not specified on create, the Contract is created with a default   value of ContractType.SupplyVendor. |
| CurrencyCode | `TheTradeDesk_CurrencyCode` |  | The currency of the Contract. All money values associated with the Contract must be in this currency.   Once a Contract has been created, this may not be changed.   If not specified on create, the Contract uses the currency of the owning Partner. |
| CustomLabels | array<`CustomLabel_AssignedCustomLabel_post`> |  | Custom Labels assigned to this contract. |
| Deals | array<`Contract_SupplyVendorDeal_post`> |  | The list of supply vendor deals that run under the Contract. _(nullable)_ |
| DeliveryPriorities | array<`Contract_DeliveryPriority_post`> |  | A list of delivery priorities to associate with the deal. Currently restricted to a singleton. |
| Description | string |  | An optional description for the Contract. _(nullable)_ |
| EndDateUTC | string (date-time) |  | The date and time (in UTC) until which the Contract is expected to be effective. If no end date is specified, the Contract is open ended. If specified, the end date must be after the start date. _(nullable)_ |
| IsLiveEvent | boolean |  | If set to `true`, indicates that the contract is running only on live sports and events inventory. The default value is `false`. |
| IsUpfront | boolean |  | If set to true, indicates that the contract is part of an upfront agreement, with ad time purchased in advance for better   rates and guaranteed spots. When including this property in your request, you must specify its value. _(nullable)_ |
| Permissions | `Contract_ContractPermissions` |  | The permissions granted/denied to Partners and Advertisers for this Contract. |
| IsClassicGuaranteed | boolean |  | If true, it represents a programmatic guaranteed contract created in the Classic workflow, and so is only targetable by Classic PG ad groups (conversely, if false, it can be targetable by Megagon PG ad groups).    This property can only be set during contract creation, and only affects Programmatic Guaranteed contracts.  It defaults to true. _(DEPRECATED; deprecation: This property will be deprecated in the near future.)_ |

### `Contract_Contract_put`

| Field | Type | Required | Description |
|---|---|---|---|
| ContractId | string | yes | The ID of the Contract.  Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| Availability | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability` |  | Availability state of the Contract. |
| ContractTerms | `Contract_ContractTerms` |  | The terms negotiated with the publisher for the contract. _(nullable)_ |
| ContractType | `Contract_ContractType` |  | The ContractType as documented in the ContractType enumeration. If not specified on create, the Contract is created with a default   value of ContractType.SupplyVendor. |
| CustomLabels | array<`CustomLabel_AssignedCustomLabel_put`> |  | Custom Labels assigned to this contract. |
| Deals | array<`Contract_SupplyVendorDeal_put`> |  | The list of supply vendor deals that run under the Contract. _(nullable)_ |
| DeliveryPriorities | array<`Contract_DeliveryPriority_put`> |  | A list of delivery priorities to associate with the deal. Currently restricted to a singleton. |
| Description | string |  | An optional description for the Contract. _(nullable)_ |
| EndDateUTC | string (date-time) |  | The date and time (in UTC) until which the Contract is expected to be effective. If no end date is specified, the Contract is open ended. If specified, the end date must be after the start date. _(nullable)_ |
| IsLiveEvent | boolean |  | If set to `true`, indicates that the contract is running only on live sports and events inventory. The default value is `false`. |
| IsUpfront | boolean |  | If set to true, indicates that the contract is part of an upfront agreement, with ad time purchased in advance for better   rates and guaranteed spots. When including this property in your request, you must specify its value. _(nullable)_ |
| Name | string |  | The Name of the Contract. _(maxLength 256)_ |
| OwnerPartnerId | string |  | The ID of the partner that owns the Contract.    Partners are always allowed to buy against contracts they own. Also, contracts may only be modified by users associated with owning partners.   If the supplied OwnerPartnerId is not a valid PartnerId in The Trade Desk system, the request is rejected with a 400 error. |
| Permissions | `Contract_ContractPermissions` |  | The permissions granted/denied to Partners and Advertisers for this Contract. |
| StartDateUTC | string (date-time) |  | The date and time (in UTC) from which the Contract is expected to be effective. A start date must be specified at the time the Contract is created. _(nullable)_ |
| IsClassicGuaranteed | boolean |  | If true, it represents a programmatic guaranteed contract created in the Classic workflow, and so is only targetable by Classic PG ad groups (conversely, if false, it can be targetable by Megagon PG ad groups).    This property can only be set during contract creation, and only affects Programmatic Guaranteed contracts.  It defaults to true. _(DEPRECATED; deprecation: This property will be deprecated in the near future.)_ |

### `Partner_PartnerQueryForPartner`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| PartnerId | string | yes | The ID of the Partner making the query |
| SearchTerms | array<string> |  | A list of terms, such as partner platform IDs, integer IDs, or names, by which to filter search results. For a partner to be included in search results, at least one of the specified terms must be matched.   If not specified, empty, or null, this property is ignored. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_PartnerSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed. See GET partner/query/facets for the list of possible sort field IDs.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by Name ascending. _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_IdName`

| Field | Type | Required | Description |
|---|---|---|---|
| Id | string |  | The identifier for the object instance |
| Name | string |  | The name for the object instance |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_AdvertiserInfo_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`Advertiser_AdvertiserInfo`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_Contract_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`Contract_Contract`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_PartnerInfo_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`Partner_PartnerInfo`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability`

Type: string enum(Available, Archived)

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_AdvertiserSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `Advertiser_AdvertiserSortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `Report_ReportingDataForDay_AvailableImpressionsReportData_`

| Field | Type | Required | Description |
|---|---|---|---|
| DateUTC | string (date-time) |  | The date to which the reporting data applies |
| ReportingData | `Report_AvailableImpressionsReportData` |  | The reporting data for this date. |

### `Contract_ContractApprovalState`

Type: string enum(PendingApproval, NotApproved, Approved, Archived)

### `Contract_ContractPermissions`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserIdsAllowedToBuy | array<string> |  | The Advertiser IDs that are explicitly allowed to buy against this Contract.   If an Advertiser's Partner ID is already in the PartnerIdsAllowedToBuy list, it is not necessary to include the Advertiser ID in this list as it is allowed to buy by default in this case.   An Advertiser ID cannot exist in both this list and the AdvertiserIdsForbiddenToBuy list. If an Advertiser ID is specified in both of these lists, the request will be rejected with a 400 error. _(nullable)_ |
| AdvertiserIdsForbiddenToBuy | array<string> |  | The Advertiser IDs that are explicitly forbidden to buy against this Contract.   If an Advertiser's Partner ID is not in the PartnerIdsAllowedToBuy list, it is not necessary to include the Advertiser ID in this list as it is forbidden to buy by default in this case.   An Advertiser ID cannot exist in both this list and the AdvertiserIdsAllowedToBuy list. If an Advertiser ID is specified in both of these lists, the request will be rejected with a 400 error. _(nullable)_ |
| PartnerIdsAllowedToBuy | array<string> |  | The Partner IDs for whom advertisers are by default allowed to buy against the Contract.   Any Advertisers with IDs in the AdvertiserIdsForbiddenToBuy list are always forbidden to buy against this Contract, even if their Partner's ID is in this list. _(nullable)_ |

### `Contract_ContractTerms`

Describes the terms negotiated with the publisher for the contract

| Field | Type | Required | Description |
|---|---|---|---|
| LifetimeMediaCost | number (double) |  | Media cost is the full amount (in the contract's currency) negotiated to spend with the publisher for the lifetime of the contract.     This property is required for all non-Classic Programmatic Guaranteed contracts, and optional for all others. |

### `Contract_ContractType`

Type: string enum(SupplyVendor, ProgrammaticGuaranteed, PublisherDirect)

### `Contract_DeliveryPriority`

| Field | Type | Required | Description |
|---|---|---|---|
| DeliveryProfileId | string |  | The ID of the delivery profile to be associated with this contract |
| DeliveryPriorityId | string |  | The ID of the DeliveryPriority.  Ignored on create, when an ID will be assigned and returned by The Trade Desk. _(DEPRECATED; deprecation: This attribute is deprecated. Its value should not be used.)_ |

### `Contract_SupplyVendorDeal`

| Field | Type | Required | Description |
|---|---|---|---|
| FloorPriceCPM | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | An optional floor price for the deal.   The value is in CPM in the currency of the Contract to which this deal is associated. _(nullable)_ |
| SupplyVendorDealId | string |  | The ID of the deal.   This ID should match the ID in the SupplyVendor or Publisher system. |
| SupplyVendorId | integer (int64) |  | The ID of the SupplyVendor on which this deal will run.   Not all SupplyVendors support running Deals through The Trade Desk. Query supplyvendor/query/partner to discover the Supply Vendors that support Deals |

### `CustomLabel_AssignedCustomLabel`

| Field | Type | Required | Description |
|---|---|---|---|
| CustomLabelId | string |  | The Id of the label _(nullable)_ |

### `TheTradeDesk_CurrencyCode`

Type: string enum(None, AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF, BMD, BND, BOB, BRL, BSD, BTN, BWP, BYR, BZD, CAD, CDF, CHF, CLF, CLP, CNH, CNY, COP, CRC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ERN, ETB, EUR, FJD, FKP, GBP, GEL, GHS, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HRK, HTG, HUF, IDR, ILS, INR, IQD, IRR, ISK, JMD, JOD, JPY, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LTL, LVL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MRO, MUR, MVR, MWK, MXN, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SRD, STD, SVC, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD, TWD, TZS, UAH, UGX, USD, UYU, UZS, VEF, VND, VUV, WST, XAF, XCD, XDR, XOF, XPF, YER, ZAR, ZMW, ZWL)

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_Availability_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ContractSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `Contract_ContractSortingField` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ContractType_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `Contract_ContractType` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_ContractSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `Contract_ContractSortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `Contract_DeliveryPriority_post`

| Field | Type | Required | Description |
|---|---|---|---|
| DeliveryProfileId | string | yes | The ID of the delivery profile to be associated with this contract |

### `Contract_SupplyVendorDeal_post`

| Field | Type | Required | Description |
|---|---|---|---|
| SupplyVendorDealId | string | yes | The ID of the deal.   This ID should match the ID in the SupplyVendor or Publisher system. |
| SupplyVendorId | integer (int64) | yes | The ID of the SupplyVendor on which this deal will run.   Not all SupplyVendors support running Deals through The Trade Desk. Query supplyvendor/query/partner to discover the Supply Vendors that support Deals |
| FloorPriceCPM | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | An optional floor price for the deal.   The value is in CPM in the currency of the Contract to which this deal is associated. _(nullable)_ |

### `CustomLabel_AssignedCustomLabel_post`

| Field | Type | Required | Description |
|---|---|---|---|
| CustomLabelId | string | yes | The Id of the label |

### `Contract_DeliveryPriority_put`

| Field | Type | Required | Description |
|---|---|---|---|
| DeliveryProfileId | string |  | The ID of the delivery profile to be associated with this contract |
| DeliveryPriorityId | string |  | The ID of the DeliveryPriority.  Ignored on create, when an ID will be assigned and returned by The Trade Desk. _(DEPRECATED; deprecation: This attribute is deprecated. Its value should not be used.)_ |

### `Contract_SupplyVendorDeal_put`

| Field | Type | Required | Description |
|---|---|---|---|
| SupplyVendorDealId | string | yes | The ID of the deal.   This ID should match the ID in the SupplyVendor or Publisher system. |
| SupplyVendorId | integer (int64) | yes | The ID of the SupplyVendor on which this deal will run.   Not all SupplyVendors support running Deals through The Trade Desk. Query supplyvendor/query/partner to discover the Supply Vendors that support Deals |
| FloorPriceCPM | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | An optional floor price for the deal.   The value is in CPM in the currency of the Contract to which this deal is associated. _(nullable)_ |

### `CustomLabel_AssignedCustomLabel_put`

| Field | Type | Required | Description |
|---|---|---|---|
| CustomLabelId | string | yes | The Id of the label |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_PartnerSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `Partner_PartnerSortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `Advertiser_AdvertiserInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The platform ID of the advertiser. |
| AdvertiserName | string |  | The name of the Advertiser. The maximum character length is 64. _(maxLength 64)_ |
| PartnerId | string |  | The ID of the Partner who owns this Advertiser. |

### `Partner_PartnerInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| PartnerId | string |  | The ID of the Partner. |
| PartnerName | string |  | The name of the Partner. |

### `Advertiser_AdvertiserSortingField`

Type: string enum(Name, Description)

### `Report_AvailableImpressionsReportData`

The available impression data for a single reporting grain.

| Field | Type | Required | Description |
|---|---|---|---|
| AvailableImpressionsCount | integer (int64) |  | The count of available impressions for the report grain |

### `TTD.Domain.Shared.Http.Metadata.Models_Money`

Describes an amount of money in a specific currency.

| Field | Type | Required | Description |
|---|---|---|---|
| Amount | number (double) | yes | The money amount, specified as a decimal, for example, 1.5 for $1.50. |
| CurrencyCode | `TheTradeDesk_CurrencyCode` | yes | The currency of the money value specified in the `Amount`, for example, "USD" for $1.50 US dollars.   Unless you've arranged different terms during onboarding, your partner account and all its associated advertisers use the same currency, namely, USD.   If you you need to use another currency, please contact your Account Manager.   If multi-currency support is enabled for your account, see the Currency API for the full set of supported currencies and their codes. |

### `Contract_ContractSortingField`

Type: string enum(Name, Description)

### `Partner_PartnerSortingField`

Type: string enum(Name)

