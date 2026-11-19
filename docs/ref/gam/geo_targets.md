# Geo Targets

> Source: Google Ad Manager API (beta, REST v1) Discovery document (https://admanager.googleapis.com/$discovery/rest?version=v1, revision 20261118); release notes https://developers.google.com/ad-manager/api/beta/docs/release-notes. Fetched 2026-11-19. Resource names have the form `networks/{networkCode}/...`.

Used by koddi-offsite via: PQL `SELECT ... FROM Geo_Target`.

---

## networks.geoTargets.list

`GET https://admanager.googleapis.com/v1/{+parent}/geoTargets`

Lists `GeoTarget` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of GeoTargets. Format: `networks/{network_code}` |
| pageToken | query | string |  | Optional. A page token, received from a previous `ListGeoTargets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGeoTargets` must match the call that provided the page token. |
| skip | query | integer (int32) |  | Optional. Number of individual resources to skip while paginating. |
| pageSize | query | integer (int32) |  | Optional. The maximum number of `GeoTargets` to return. The service may return fewer than this value. If unspecified, at most 50 `GeoTargets` will be returned. The maximum value is 1000; values greater than 1000 will be coerced to 1000. |
| orderBy | query | string |  | Optional. Expression to specify sorting order. See syntax details at https://developers.google.com/ad-manager/api/beta/filters#order |
| filter | query | string |  | Optional. Expression to filter the response. See syntax details at https://developers.google.com/ad-manager/api/beta/filters Syntax summary: double-quoted `"..."` (never `'...'`) strings and RFC 3339 timestamps, full resource names on reference fields (for example, `order = "networks/123/orders/456"`, not `*Id` or bare IDs), prefix or suffix `*` wildcards with `=` (`displayName = "foo*"`), `:` for substring or repeated-field matching, unquoted enums and booleans, uppercase `AND`/`OR`/`NOT`, and standalone `IN(field, SET(v1, v2))` (not `field IN (...)`). **Filterable fields:** * `canonicalParent` * `displayName` * `name` * `regionCode` * `type` |

**Response**: `ListGeoTargetsResponse`

---

## networks.geoTargets.get

`GET https://admanager.googleapis.com/v1/{+name}`

Retrieves a `GeoTarget` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The resource name of the GeoTarget. Format: `networks/{network_code}/geoTargets/{geo_target_id}` |

**Response**: `GeoTarget`

---

## Schemas

### `ListGeoTargetsResponse`

Response object for `ListGeoTargetsRequest` containing matching `GeoTarget` objects.

| Field | Type | Description |
|---|---|---|
| nextPageToken | string | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. |
| geoTargets | array<`GeoTarget`> | The `GeoTarget` objects from the specified network. |
| totalSize | integer (int32) | Total number of `GeoTarget` objects. If a filter was included in the request, this reflects the total number after the filtering is applied. `total_size` won't be calculated in the response unless it has been included in a response field mask. The response field mask can be provided to the method by using the URL parameter `$fields` or `fields`, or by using the HTTP/gRPC header `X-Goog-FieldMask`. For more information, see https://developers.google.com/ad-manager/api/beta/field-masks |

### `GeoTarget`

Represents a location in the world, for targeting.

| Field | Type | Description |
|---|---|---|
| name | string | Identifier. The resource name of the `GeoTarget`. Format: `networks/{network_code}/geoTargets/{geo_target_id}` |
| type | string | Output only. The location type (unlocalized) for this geographical entity. |
| regionCode | string | Output only. The Unicode CLDR region code of the geo target. |
| targetable | boolean | Output only. Whether the geo target is targetable. |
| displayName | string | Output only. The display name of the GeoTarget. |
| parentNames | array<string> | Output only. All parents of the geo target ordered by ascending size. |
| canonicalParent | string | Output only. The name of the direct parent that defines the canonical name of the geo target. For example, if the current geo target is "San Francisco", its canonical name would be "San Francisco, California, United States" thus the canonical_parent would be the name of California and the canonical_parent of California would be the name of United states Format: `networks/{network_code}/geoTargets/{geo_target}` |

