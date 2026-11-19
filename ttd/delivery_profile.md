# Delivery Profile

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 6

---

## POST /v3/deliveryProfile

Create a new DeliveryProfile

Operation ID: `post-deliveryprofile`

**Request body** (`application/json`, required): `DeliveryProfile_DeliveryProfile_post`

**Response 200** (`application/json`): `DeliveryProfile_DeliveryProfile`

---

## PUT /v3/deliveryProfile

Update an existing DeliveryProfile.

Operation ID: `put-deliveryprofile`

**Request body** (`application/json`, required): `DeliveryProfile_DeliveryProfile_put`

**Response 200** (`application/json`): `DeliveryProfile_DeliveryProfile`

---

## GET /v3/deliveryProfile/{deliveryProfileId}

Get an existing DeliveryProfile.

Operation ID: `get-deliveryprofile-deliveryprofileid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| deliveryProfileId | path | string | yes |  |

**Response 200** (`application/json`): `DeliveryProfile_DeliveryProfile`

---

## POST /v3/deliveryProfile/query/partner

Query for a page of Delivery Profiles that are available to the chosen Partners.

Operation ID: `post-deliveryprofile-query-partner`

**Request body** (`application/json`, required): `DeliveryProfile_DeliveryProfileQueryForPartner`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_DeliveryProfile_`

---

## GET /v3/deliveryprofile/query/facets

Get the facets of DeliveryProfiles that can be used in queries.

Operation ID: `get-deliveryprofile-query-facets`

**Response 200** (`application/json`): `DeliveryProfile_DeliveryProfileFacets`

---

## GET /v3/deliveryprofile/name/{deliveryProfileId}

Get the identifier and name for a DeliveryProfile based on identifier

Operation ID: `get-deliveryprofile-name-deliveryprofileid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| deliveryProfileId | path | string | yes |  |

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_IdName`

---

## Schemas

### `DeliveryProfile_DeliveryProfile`

| Field | Type | Required | Description |
|---|---|---|---|
| DeliveryProfileId | string |  | The ID of the delivery profile. Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| Description | string |  | An optional description for the delivery profile. _(nullable)_ |
| Name | string |  | The name of the delivery profile. The maximum character length is 256. _(maxLength 256)_ |
| OwnerPartnerId | string |  | The ID of the partner that owns the delivery profile.    Delivery profiles may only be modified by users associated with owning partners.   If the supplied OwnerPartnerId is not a valid PartnerId in The Trade Desk system, the request is rejected with a 400 error. |
| Permissions | `DeliveryProfile_DeliveryProfilePermissions` |  | The permissions granted/denied to Partners and Advertisers for this delivery profile. _(nullable)_ |

### `DeliveryProfile_DeliveryProfileFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| Availabilities | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_Availability_`> |  | The Availability states by which DeliveryProfiles my be filtered in a query. This list may be extended at any time, so please design accordingly. |
| SortingFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_DeliveryProfileSortingField_`> |  | The fields by which DeliveryProfiles may be sorted in a query. This list may be extended at any time, so please design accordingly. |

### `DeliveryProfile_DeliveryProfileQueryForPartner`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| PartnerId | string | yes | The ID of the Partner querying for DeliveryProfiles. |
| Availabilities | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability`> |  | A list of Availability states by which to filter the returned DeliveryProfiles. See GET deliveryProfile/query/facets for the list of possible availabilities.   If not specified, empty, or null, DeliveryProfiles in all Availability states will be returned. _(nullable)_ |
| ReturnOnlyIds | boolean |  | Whether or not the returned model should only contain ids |
| SearchTerms | array<string> |  | A list of search terms by which to filter the returned DeliveryProfiles. All terms must be matched in the ID, name or description in order for a DeliveryProfile to match.   If not specified, empty, or null, this property is ignored. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_DeliveryProfileSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed. See GET deliveryProfile/query/facets for the list of possible sort field IDs for DeliveryProfiles.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by Name ascending. _(nullable)_ |

### `DeliveryProfile_DeliveryProfile_post`

| Field | Type | Required | Description |
|---|---|---|---|
| Name | string | yes | The name of the delivery profile. The maximum character length is 256. _(maxLength 256)_ |
| OwnerPartnerId | string | yes | The ID of the partner that owns the delivery profile.    Delivery profiles may only be modified by users associated with owning partners.   If the supplied OwnerPartnerId is not a valid PartnerId in The Trade Desk system, the request is rejected with a 400 error. |
| Description | string |  | An optional description for the delivery profile. _(nullable)_ |
| Permissions | `DeliveryProfile_DeliveryProfilePermissions_post` |  | The permissions granted/denied to Partners and Advertisers for this delivery profile. _(nullable)_ |

### `DeliveryProfile_DeliveryProfile_put`

| Field | Type | Required | Description |
|---|---|---|---|
| DeliveryProfileId | string | yes | The ID of the delivery profile. Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| Description | string |  | An optional description for the delivery profile. _(nullable)_ |
| Name | string |  | The name of the delivery profile. The maximum character length is 256. _(maxLength 256)_ |
| OwnerPartnerId | string |  | The ID of the partner that owns the delivery profile.    Delivery profiles may only be modified by users associated with owning partners.   If the supplied OwnerPartnerId is not a valid PartnerId in The Trade Desk system, the request is rejected with a 400 error. |
| Permissions | `DeliveryProfile_DeliveryProfilePermissions_put` |  | The permissions granted/denied to Partners and Advertisers for this delivery profile. _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_IdName`

| Field | Type | Required | Description |
|---|---|---|---|
| Id | string |  | The identifier for the object instance |
| Name | string |  | The name for the object instance |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_DeliveryProfile_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`DeliveryProfile_DeliveryProfile`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `DeliveryProfile_DeliveryProfilePermissions`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserIdsAllowedToBuy | array<string> |  | The Advertiser IDs that are explicitly allowed to buy against this Contract.   If an Advertiser's Partner ID is already in the PartnerIdsAllowedToBuy list, it is not necessary to include the Advertiser ID in this list as it is allowed to buy by default in this case.   An Advertiser ID cannot exist in both this list and the AdvertiserIdsForbiddenToBuy list. If an Advertiser ID is specified in both of these lists, the request will be rejected with a 400 error.   An Advertiser ID cannot be specified in this list if the Advertiser's Partner is already specified in the PartnerIdsAllowedToBuy parameter, the request will be rejected with a 400 error. _(nullable)_ |
| AdvertiserIdsForbiddenToBuy | array<string> |  | The Advertiser IDs that are explicitly forbidden to buy against this Contract.   If an Advertiser's Partner ID is not in the PartnerIdsAllowedToBuy list, it is not necessary to include the Advertiser ID in this list as it is forbidden to buy by default in this case.   An Advertiser ID cannot exist in both this list and the AdvertiserIdsAllowedToBuy list. If an Advertiser ID is specified in both of these lists, the request will be rejected with a 400 error. _(nullable)_ |
| PartnerIdsAllowedToBuy | array<string> |  | The Partner IDs for whom advertisers are by default allowed to buy against the Contract.   Any Advertisers with IDs in the AdvertiserIdsForbiddenToBuy list are always forbidden to buy against this Contract, even if their Partner's ID is in this list. _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_Availability_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_DeliveryProfileSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `DeliveryProfile_DeliveryProfileSortingField` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability`

Type: string enum(Available, Archived)

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_DeliveryProfileSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `DeliveryProfile_DeliveryProfileSortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `DeliveryProfile_DeliveryProfilePermissions_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserIdsAllowedToBuy | array<string> | yes | The Advertiser IDs that are explicitly allowed to buy against this Contract.   If an Advertiser's Partner ID is already in the PartnerIdsAllowedToBuy list, it is not necessary to include the Advertiser ID in this list as it is allowed to buy by default in this case.   An Advertiser ID cannot exist in both this list and the AdvertiserIdsForbiddenToBuy list. If an Advertiser ID is specified in both of these lists, the request will be rejected with a 400 error.   An Advertiser ID cannot be specified in this list if the Advertiser's Partner is already specified in the PartnerIdsAllowedToBuy parameter, the request will be rejected with a 400 error. |
| AdvertiserIdsForbiddenToBuy | array<string> | yes | The Advertiser IDs that are explicitly forbidden to buy against this Contract.   If an Advertiser's Partner ID is not in the PartnerIdsAllowedToBuy list, it is not necessary to include the Advertiser ID in this list as it is forbidden to buy by default in this case.   An Advertiser ID cannot exist in both this list and the AdvertiserIdsAllowedToBuy list. If an Advertiser ID is specified in both of these lists, the request will be rejected with a 400 error. |
| PartnerIdsAllowedToBuy | array<string> | yes | The Partner IDs for whom advertisers are by default allowed to buy against the Contract.   Any Advertisers with IDs in the AdvertiserIdsForbiddenToBuy list are always forbidden to buy against this Contract, even if their Partner's ID is in this list. |

### `DeliveryProfile_DeliveryProfilePermissions_put`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserIdsAllowedToBuy | array<string> | yes | The Advertiser IDs that are explicitly allowed to buy against this Contract.   If an Advertiser's Partner ID is already in the PartnerIdsAllowedToBuy list, it is not necessary to include the Advertiser ID in this list as it is allowed to buy by default in this case.   An Advertiser ID cannot exist in both this list and the AdvertiserIdsForbiddenToBuy list. If an Advertiser ID is specified in both of these lists, the request will be rejected with a 400 error.   An Advertiser ID cannot be specified in this list if the Advertiser's Partner is already specified in the PartnerIdsAllowedToBuy parameter, the request will be rejected with a 400 error. |
| AdvertiserIdsForbiddenToBuy | array<string> | yes | The Advertiser IDs that are explicitly forbidden to buy against this Contract.   If an Advertiser's Partner ID is not in the PartnerIdsAllowedToBuy list, it is not necessary to include the Advertiser ID in this list as it is forbidden to buy by default in this case.   An Advertiser ID cannot exist in both this list and the AdvertiserIdsAllowedToBuy list. If an Advertiser ID is specified in both of these lists, the request will be rejected with a 400 error. |
| PartnerIdsAllowedToBuy | array<string> | yes | The Partner IDs for whom advertisers are by default allowed to buy against the Contract.   Any Advertisers with IDs in the AdvertiserIdsForbiddenToBuy list are always forbidden to buy against this Contract, even if their Partner's ID is in this list. |

### `DeliveryProfile_DeliveryProfileSortingField`

Type: string enum(Name, Description)

