# Merchant API accounts_v1: accounts.regions

> Source: Merchant API `accounts_v1` REST Discovery document (https://merchantapi.googleapis.com/$discovery/rest?version=accounts_v1); overview https://developers.google.com/merchant/api/overview. Fetched 2026-11-19.

---

## accounts.regions.list

`GET https://merchantapi.googleapis.com/accounts/v1/{+parent}/regions`

Lists the regions in your Merchant Center account.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The account to list regions for. Format: `accounts/{account}` |
| pageSize | query | integer (int32) |  | Optional. The maximum number of regions to return. The service may return fewer than this value. If unspecified, at most 50 regions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| pageToken | query | string |  | Optional. A page token, received from a previous `ListRegions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRegions` must match the call that provided the page token. |

**Response**: `ListRegionsResponse`

---

## accounts.regions.patch

`PATCH https://merchantapi.googleapis.com/accounts/v1/{+name}`

Updates a region definition in your Merchant Center account. Executing this method requires admin access.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Identifier. The resource name of the region. Format: `accounts/{account}/regions/{region}` |
| updateMask | query | string (google-fieldmask) |  | Optional. The comma-separated field mask indicating the fields to update. Example: `"displayName,postalCodeArea.regionCode"`. |

**Request body**: `Region`

**Response**: `Region`

---

## accounts.regions.create

`POST https://merchantapi.googleapis.com/accounts/v1/{+parent}/regions`

Creates a region definition in your Merchant Center account. Executing this method requires admin access.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The account to create a region for. Format: `accounts/{account}` |
| regionId | query | string |  | Required. The identifier for the region, unique over all regions of the same account. |

**Request body**: `Region`

**Response**: `Region`

---

## accounts.regions.batchUpdate

`POST https://merchantapi.googleapis.com/accounts/v1/{+parent}/regions:batchUpdate`

Updates one or more regions in your Merchant Center account. Executing this method requires admin access. For more information, see [Manage region batching](https://developers.google.com/merchant/api/guides/accounts/manage-region-batching).

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The account to update one or more regions for. Format: `accounts/{account}` |

**Request body**: `BatchUpdateRegionsRequest`

**Response**: `BatchUpdateRegionsResponse`

---

## accounts.regions.get

`GET https://merchantapi.googleapis.com/accounts/v1/{+name}`

Retrieves a region defined in your Merchant Center account.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The name of the region to retrieve. Format: `accounts/{account}/regions/{region}` |

**Response**: `Region`

---

## accounts.regions.delete

`DELETE https://merchantapi.googleapis.com/accounts/v1/{+name}`

Deletes a region definition from your Merchant Center account. Executing this method requires admin access.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The name of the region to delete. Format: `accounts/{account}/regions/{region}` |

**Response**: `Empty`

---

## accounts.regions.batchDelete

`POST https://merchantapi.googleapis.com/accounts/v1/{+parent}/regions:batchDelete`

Deletes multiple regions by name from your Merchant Center account. Executing this method requires admin access. For more information, see [Manage region batching](https://developers.google.com/merchant/api/guides/accounts/manage-region-batching).

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The account to delete one or more regions from. Format: `accounts/{account}` |

**Request body**: `BatchDeleteRegionsRequest`

**Response**: `Empty`

---

## accounts.regions.batchCreate

`POST https://merchantapi.googleapis.com/accounts/v1/{+parent}/regions:batchCreate`

Creates one or more regions in your Merchant Center account. Executing this method requires admin access. For more information, see [Manage region batching](https://developers.google.com/merchant/api/guides/accounts/manage-region-batching).

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The account to create one or more regions for. Format: `accounts/{account}` |

**Request body**: `BatchCreateRegionsRequest`

**Response**: `BatchCreateRegionsResponse`

---

## Schemas

### `ListRegionsResponse`

Response message for the `ListRegions` method.

| Field | Type | Description |
|---|---|---|
| regions | array<`Region`> | The regions from the specified business. |
| nextPageToken | string | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. |

### `Region`

Represents a geographic region that you can use as a target with both the `RegionalInventory` and `ShippingSettings` services. You can define regions as collections of either postal codes, radius areas or, in some countries, using predefined geotargets. A region must be defined by specifying exactly one of `postal_code_area`, `geotarget_area`, or `radius_area`. For more information, see [Set up regions ](https://support.google.com/merchants/answer/7410946#zippy=%2Ccreate-a-new-region), [Create and update regions](https://developers.google.com/merchant/api/guides/accounts/regions), and [Manage region batching](https://developers.google.com/merchant/api/guides/accounts/manage-region-batching).

| Field | Type | Description |
|---|---|---|
| shippingEligible | boolean | Output only. Indicates if the region is eligible for use in the Shipping Services configuration. |
| geotargetArea | `GeoTargetArea` | Optional. A list of geotargets that defines the region area. |
| name | string | Identifier. The resource name of the region. Format: `accounts/{account}/regions/{region}` |
| displayName | string | Optional. The display name of the region. |
| radiusArea | `RadiusArea` | Optional. A radius area that defines the region area. |
| regionalInventoryEligible | boolean | Output only. Indicates if the region is eligible for use in the Regional Inventory configuration. |
| postalCodeArea | `PostalCodeArea` | Optional. A list of postal codes that defines the region area. |

### `BatchUpdateRegionsRequest`

Request message for the `BatchUpdateRegions` method.

| Field | Type | Description |
|---|---|---|
| requests | array<`UpdateRegionRequest`> | Required. The region(s) to update. The maximum number of regions that can be updated in a batch is 100. |

### `BatchUpdateRegionsResponse`

Response message for the `BatchUpdateRegions` method.

| Field | Type | Description |
|---|---|---|
| regions | array<`Region`> | The updated region(s). |

### `Empty`

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

Type: object

### `BatchDeleteRegionsRequest`

Request message for the `BatchDeleteRegions` method.

| Field | Type | Description |
|---|---|---|
| requests | array<`DeleteRegionRequest`> | Required. The names of the regions to delete. A maximum of 100 regions can be deleted in a batch. |

### `BatchCreateRegionsRequest`

Request message for the `BatchCreateRegions` method.

| Field | Type | Description |
|---|---|---|
| requests | array<`CreateRegionRequest`> | Required. The region(s) to create. The maximum number of regions that can be created in a batch is 100. |

### `BatchCreateRegionsResponse`

Response message for the `BatchCreateRegions` method.

| Field | Type | Description |
|---|---|---|
| regions | array<`Region`> | The created region(s). |

### `GeoTargetArea`

A list of geotargets that defines the region area.

| Field | Type | Description |
|---|---|---|
| geotargetCriteriaIds | array<string (int64)> | Required. A non-empty list of [location IDs](https://developers.google.com/adwords/api/docs/appendix/geotargeting). They must all be of the same location type (for example, state). |

### `PostalCodeArea`

A list of postal codes that defines the region area. Note: All regions defined using postal codes are accessible through the account's `ShippingSettings.postalCodeGroups` resource.

| Field | Type | Description |
|---|---|---|
| regionCode | string | Required. [CLDR territory code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) or the country the postal code group applies to. |
| postalCodes | array<`PostalCodeRange`> | Required. A range of postal codes. |

### `RadiusArea`

A radius area that defines the region area.

| Field | Type | Description |
|---|---|---|
| regionCode | string | Required. [CLDR territory code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) or the country the radius area applies to. |
| radius | number (double) | Required. The radius distance of the area. |
| radiusUnits | string enum(RADIUS_UNITS_UNSPECIFIED, MILES, KILOMETERS) | Optional. The unit of the radius. Values: RADIUS_UNITS_UNSPECIFIED - Unused default value; MILES - The distance is measured in miles.; KILOMETERS - The distance is measured in kilometers. |
| latLng | `LatLng` | Required. The center of the radius area. It represents a latitude/longitude pair in decimal degrees format. |

### `UpdateRegionRequest`

Request message for the `UpdateRegion` method.

| Field | Type | Description |
|---|---|---|
| updateMask | string (google-fieldmask) | Optional. The comma-separated field mask indicating the fields to update. Example: `"displayName,postalCodeArea.regionCode"`. |
| region | `Region` | Required. The updated region. |

### `DeleteRegionRequest`

Request message for the `DeleteRegion` method.

| Field | Type | Description |
|---|---|---|
| name | string | Required. The name of the region to delete. Format: `accounts/{account}/regions/{region}` |

### `CreateRegionRequest`

Request message for the `CreateRegion` method.

| Field | Type | Description |
|---|---|---|
| parent | string | Required. The account to create a region for. Format: `accounts/{account}` |
| region | `Region` | Required. The region to create. |
| regionId | string | Required. The identifier for the region, unique over all regions of the same account. |

### `PostalCodeRange`

A range of postal codes that defines the region area.

| Field | Type | Description |
|---|---|---|
| end | string | Optional. A postal code or a pattern of the form `prefix*` denoting the inclusive upper bound of the range defining the area. It must have the same length as postalCodeRangeBegin: if postalCodeRangeBegin is a postal code then postalCodeRangeEnd must be a postal code too; if postalCodeRangeBegin is a pattern then postalCodeRangeEnd must be a pattern with the same prefix length. Optional: if not set, then the area is defined as being all the postal codes matching postalCodeRangeBegin. |
| begin | string | Required. A postal code or a pattern of the form prefix* denoting the inclusive lower bound of the range defining the area. Examples values: `94108`, `9410*`, `9*`. |

### `LatLng`

An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.

| Field | Type | Description |
|---|---|---|
| latitude | number (double) | The latitude in degrees. It must be in the range [-90.0, +90.0]. |
| longitude | number (double) | The longitude in degrees. It must be in the range [-180.0, +180.0]. |

