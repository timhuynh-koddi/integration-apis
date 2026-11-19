# Device Categories

> Source: Google Ad Manager API (beta, REST v1) Discovery document (https://admanager.googleapis.com/$discovery/rest?version=v1, revision 20261118); release notes https://developers.google.com/ad-manager/api/beta/docs/release-notes. Fetched 2026-11-19. Resource names have the form `networks/{networkCode}/...`.

Used by koddi-offsite via: PQL `SELECT ... FROM Device_Category`.

---

## networks.deviceCategories.list

`GET https://admanager.googleapis.com/v1/{+parent}/deviceCategories`

Lists `DeviceCategory` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of DeviceCategories. Format: `networks/{network_code}` |
| pageToken | query | string |  | Optional. A page token, received from a previous `ListDeviceCategories` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDeviceCategories` must match the call that provided the page token. |
| orderBy | query | string |  | Optional. Expression to specify sorting order. See syntax details at https://developers.google.com/ad-manager/api/beta/filters#order |
| skip | query | integer (int32) |  | Optional. Number of individual resources to skip while paginating. |
| filter | query | string |  | Optional. Expression to filter the response. See syntax details at https://developers.google.com/ad-manager/api/beta/filters Syntax summary: double-quoted `"..."` (never `'...'`) strings and RFC 3339 timestamps, full resource names on reference fields (for example, `order = "networks/123/orders/456"`, not `*Id` or bare IDs), prefix or suffix `*` wildcards with `=` (`displayName = "foo*"`), `:` for substring or repeated-field matching, unquoted enums and booleans, uppercase `AND`/`OR`/`NOT`, and standalone `IN(field, SET(v1, v2))` (not `field IN (...)`). **Filterable fields:** * `displayName` * `name` |
| pageSize | query | integer (int32) |  | Optional. The maximum number of `DeviceCategories` to return. The service may return fewer than this value. If unspecified, at most 50 `DeviceCategories` will be returned. The maximum value is 1000; values greater than 1000 will be coerced to 1000. |

**Response**: `ListDeviceCategoriesResponse`

---

## networks.deviceCategories.get

`GET https://admanager.googleapis.com/v1/{+name}`

Retrieves a `DeviceCategory` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The resource name of the DeviceCategory. Format: `networks/{network_code}/deviceCategories/{device_category_id}` |

**Response**: `DeviceCategory`

---

## Schemas

### `ListDeviceCategoriesResponse`

Response object for `ListDeviceCategoriesRequest` containing matching `DeviceCategory` objects.

| Field | Type | Description |
|---|---|---|
| totalSize | integer (int32) | Total number of `DeviceCategory` objects. If a filter was included in the request, this reflects the total number after the filtering is applied. `total_size` won't be calculated in the response unless it has been included in a response field mask. The response field mask can be provided to the method by using the URL parameter `$fields` or `fields`, or by using the HTTP/gRPC header `X-Goog-FieldMask`. For more information, see https://developers.google.com/ad-manager/api/beta/field-masks |
| deviceCategories | array<`DeviceCategory`> | The `DeviceCategory` objects from the specified network. |
| nextPageToken | string | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. |

### `DeviceCategory`

Represents the category of a device. For example, "smartphone" or "desktop".

| Field | Type | Description |
|---|---|---|
| name | string | Identifier. The resource name of the `DeviceCategory`. Format: `networks/{network_code}/deviceCategories/{device_category}` |
| displayName | string | Output only. The display name of the device category. |

