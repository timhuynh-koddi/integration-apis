# Networks

> Source: Google Ad Manager API (beta, REST v1) Discovery document (https://admanager.googleapis.com/$discovery/rest?version=v1, revision 20261118); release notes https://developers.google.com/ad-manager/api/beta/docs/release-notes. Fetched 2026-11-19. Resource names have the form `networks/{networkCode}/...`.

Used by koddi-offsite via: SOAP `NetworkService.getCurrentNetwork`.

---

## networks.get

`GET https://admanager.googleapis.com/v1/{+name}`

Retrieves a `Network` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. Resource name of Network. Format: networks/{network_code} |

**Response**: `Network`

---

## networks.list

`GET https://admanager.googleapis.com/v1/networks`

Retrieves all the networks the current user has access to.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| pageToken | query | string |  | Optional. A page token, received from a previous `ListNetworks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListNetworks` must match the call that provided the page token. |
| pageSize | query | integer (int32) |  | Optional. The maximum number of `Network`s to return. The service may return fewer than this value. If unspecified, at most 50 `Network`s will be returned. The maximum value is 1000; values greater than 1000 will be coerced to 1000. |
| skip | query | integer (int32) |  | Optional. Number of individual resources to skip while paginating. |

**Response**: `ListNetworksResponse`

---

## Schemas

### `Network`

The Network resource.

| Field | Type | Description |
|---|---|---|
| timeZone | string | Output only. Time zone associated with the delivery of orders and reporting. |
| testNetwork | boolean | Output only. Whether this is a test network. |
| networkId | string (int64) | Output only. Network ID. |
| networkCode | string | Output only. Network Code. |
| secondaryCurrencyCodes | array<string> | Optional. Currency codes that can be used as an alternative to the primary currency code for trafficking Line Items. |
| displayName | string | Optional. Display name for Network. |
| currencyCode | string | Output only. Primary currency code, in ISO-4217 format. |
| effectiveRootAdUnit | string | Output only. Top most [Ad Unit](google.ads.admanager.v1.AdUnit) to which descendant Ad Units can be added. Format: networks/{network_code}/adUnits/{ad_unit} |
| propertyCode | string | Output only. Property code. |
| name | string | Identifier. The resource name of the Network. Format: networks/{network_code} |

### `ListNetworksResponse`

Response object for `ListNetworks` method.

| Field | Type | Description |
|---|---|---|
| networks | array<`Network`> | The `Network`s a user has access to. |
| nextPageToken | string | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. |
| totalSize | integer (int32) | Total number of `Network`s. `total_size` won't be calculated in the response unless it has been included in a response field mask. The response field mask can be provided to the method by using the URL parameter `$fields` or `fields`, or by using the HTTP/gRPC header `X-Goog-FieldMask`. For more information, see https://developers.google.com/ad-manager/api/beta/field-masks |

