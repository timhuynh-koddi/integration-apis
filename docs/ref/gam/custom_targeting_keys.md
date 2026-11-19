# Custom Targeting Keys

> Source: Google Ad Manager API (beta, REST v1) Discovery document (https://admanager.googleapis.com/$discovery/rest?version=v1, revision 20261118); release notes https://developers.google.com/ad-manager/api/beta/docs/release-notes. Fetched 2026-11-19. Resource names have the form `networks/{networkCode}/...`.

Used by koddi-offsite via: SOAP `CustomTargetingService.getCustomTargetingKeysByStatement`.

---

## networks.customTargetingKeys.get

`GET https://admanager.googleapis.com/v1/{+name}`

Retrieves a `CustomTargetingKey` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The resource name of the CustomTargetingKey. Format: `networks/{network_code}/customTargetingKeys/{custom_targeting_key_id}` |

**Response**: `CustomTargetingKey`

---

## networks.customTargetingKeys.list

`GET https://admanager.googleapis.com/v1/{+parent}/customTargetingKeys`

Lists `CustomTargetingKey` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of CustomTargetingKeys. Format: `networks/{network_code}` |
| orderBy | query | string |  | Optional. Expression to specify sorting order. See syntax details at https://developers.google.com/ad-manager/api/beta/filters#order |
| pageToken | query | string |  | Optional. A page token, received from a previous `ListCustomTargetingKeys` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomTargetingKeys` must match the call that provided the page token. |
| pageSize | query | integer (int32) |  | Optional. The maximum number of `CustomTargetingKeys` to return. The service may return fewer than this value. If unspecified, at most 50 `CustomTargetingKeys` will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| filter | query | string |  | Optional. Expression to filter the response. See syntax details at https://developers.google.com/ad-manager/api/beta/filters Syntax summary: double-quoted `"..."` (never `'...'`) strings and RFC 3339 timestamps, full resource names on reference fields (for example, `order = "networks/123/orders/456"`, not `*Id` or bare IDs), prefix or suffix `*` wildcards with `=` (`displayName = "foo*"`), `:` for substring or repeated-field matching, unquoted enums and booleans, uppercase `AND`/`OR`/`NOT`, and standalone `IN(field, SET(v1, v2))` (not `field IN (...)`). **Filterable fields:** * `adTagName` * `displayName` * `name` * `reportableType` * `status` * `type` |
| skip | query | integer (int32) |  | Optional. Number of individual resources to skip while paginating. |

**Response**: `ListCustomTargetingKeysResponse`

---

## networks.customTargetingKeys.patch

`PATCH https://admanager.googleapis.com/v1/{+name}`

Updates a `CustomTargetingKey` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Identifier. The resource name of the `CustomTargetingKey`. Format: `networks/{network_code}/customTargetingKeys/{custom_targeting_key_id}` |
| updateMask | query | string (google-fieldmask) |  | Optional. The list of fields to update. |

**Request body**: `CustomTargetingKey`

**Response**: `CustomTargetingKey`

---

## networks.customTargetingKeys.create

`POST https://admanager.googleapis.com/v1/{+parent}/customTargetingKeys`

Creates a `CustomTargetingKey` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where this `CustomTargetingKey` will be created. Format: `networks/{network_code}` |

**Request body**: `CustomTargetingKey`

**Response**: `CustomTargetingKey`

---

## networks.customTargetingKeys.batchCreate

`POST https://admanager.googleapis.com/v1/{+parent}/customTargetingKeys:batchCreate`

Creates `CustomTargetingKey` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `CustomTargetingKeys` will be created. Format: `networks/{network_code}` The parent field in the CreateCustomTargetingKeyRequest must match this field. |

**Request body**: `BatchCreateCustomTargetingKeysRequest`

**Response**: `BatchCreateCustomTargetingKeysResponse`

---

## networks.customTargetingKeys.batchUpdate

`POST https://admanager.googleapis.com/v1/{+parent}/customTargetingKeys:batchUpdate`

Batch updates `CustomTargetingKey` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `CustomTargetingKeys` will be updated. Format: `networks/{network_code}` The parent field in the UpdateCustomTargetingKeyRequest must match this field. |

**Request body**: `BatchUpdateCustomTargetingKeysRequest`

**Response**: `BatchUpdateCustomTargetingKeysResponse`

---

## networks.customTargetingKeys.batchActivate

`POST https://admanager.googleapis.com/v1/{+parent}/customTargetingKeys:batchActivate`

Batch activates `CustomTargetingKey` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. Format: `networks/{network_code}` |

**Request body**: `BatchActivateCustomTargetingKeysRequest`

**Response**: `BatchActivateCustomTargetingKeysResponse`

---

## networks.customTargetingKeys.batchDeactivate

`POST https://admanager.googleapis.com/v1/{+parent}/customTargetingKeys:batchDeactivate`

Deactivates a list of `CustomTargetingKey` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. Format: `networks/{network_code}` |

**Request body**: `BatchDeactivateCustomTargetingKeysRequest`

**Response**: `BatchDeactivateCustomTargetingKeysResponse`

---

## Schemas

### `CustomTargetingKey`

The `CustomTargetingKey` resource.

| Field | Type | Description |
|---|---|---|
| customTargetingKeyId | string (int64) | Output only. Deprecated: `CustomTargetingKey` ID. |
| status | string enum(CUSTOM_TARGETING_KEY_STATUS_UNSPECIFIED, ACTIVE, INACTIVE) | Output only. Status of the `CustomTargetingKey`. Values: CUSTOM_TARGETING_KEY_STATUS_UNSPECIFIED - Not specified value.; ACTIVE - Custom targeting key is active.; INACTIVE - Custom targeting key is inactive. |
| reportableType | string enum(CUSTOM_TARGETING_KEY_REPORTABLE_TYPE_UNSPECIFIED, OFF, ON, CUSTOM_DIMENSION) | Required. Reportable state of the `CustomTargetingKey`. Values: CUSTOM_TARGETING_KEY_REPORTABLE_TYPE_UNSPECIFIED - Not specified value.; OFF - Not available for reporting in the Ad Manager query tool.; ON - Available for reporting in the Ad Manager query tool.; CUSTOM_DIMENSION - Custom dimension available for reporting in the AdManager query tool. |
| name | string | Identifier. The resource name of the `CustomTargetingKey`. Format: `networks/{network_code}/customTargetingKeys/{custom_targeting_key_id}` |
| type | string enum(CUSTOM_TARGETING_KEY_TYPE_UNSPECIFIED, PREDEFINED, FREEFORM) | Required. Indicates whether users will select from predefined values or create new targeting values, while specifying targeting criteria for a line item. Values: CUSTOM_TARGETING_KEY_TYPE_UNSPECIFIED - Not specified value.; PREDEFINED - Key with a fixed set of values.; FREEFORM - Key without a fixed set of values |
| displayName | string | Optional. Descriptive name for the `CustomTargetingKey`. |
| adTagName | string | Immutable. Name of the key. Keys can contain up to 10 characters each. You can use alphanumeric characters and symbols other than the following: ", ', =, !, +, #, *, ~, ;, ^, (, ), <, >, [, ], the white space character. |

### `ListCustomTargetingKeysResponse`

Response object for `ListCustomTargetingKeysRequest` containing matching `CustomTargetingKey` objects.

| Field | Type | Description |
|---|---|---|
| totalSize | integer (int32) | Total number of `CustomTargetingKey` objects. If a filter was included in the request, this reflects the total number after the filtering is applied. `total_size` won't be calculated in the response unless it has been included in a response field mask. The response field mask can be provided to the method by using the URL parameter `$fields` or `fields`, or by using the HTTP/gRPC header `X-Goog-FieldMask`. For more information, see https://developers.google.com/ad-manager/api/beta/field-masks |
| customTargetingKeys | array<`CustomTargetingKey`> | The `CustomTargetingKey` objects from the specified network. |
| nextPageToken | string | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. |

### `BatchCreateCustomTargetingKeysRequest`

Request object for `BatchCreateCustomTargetingKeys` method.

| Field | Type | Description |
|---|---|---|
| requests | array<`CreateCustomTargetingKeyRequest`> | Required. The `CustomTargetingKey` objects to create. A maximum of 100 objects can be created in a batch. |

### `BatchCreateCustomTargetingKeysResponse`

Response object for `BatchCreateCustomTargetingKeys` method.

| Field | Type | Description |
|---|---|---|
| customTargetingKeys | array<`CustomTargetingKey`> | The `CustomTargetingKey` objects created. |

### `BatchUpdateCustomTargetingKeysRequest`

Request object for `BatchUpdateCustomTargetingKeys` method.

| Field | Type | Description |
|---|---|---|
| requests | array<`UpdateCustomTargetingKeyRequest`> | Required. The `CustomTargetingKey` objects to update. A maximum of 100 objects can be updated in a batch. |

### `BatchUpdateCustomTargetingKeysResponse`

Response object for `BatchUpdateCustomTargetingKeys` method.

| Field | Type | Description |
|---|---|---|
| customTargetingKeys | array<`CustomTargetingKey`> | The `CustomTargetingKey` objects updated. |

### `BatchActivateCustomTargetingKeysRequest`

Request object for `BatchActivateCustomTargetingKeys` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The resource names of the `CustomTargetingKey`s to activate. Format: `networks/{network_code}/customTargetingKeys/{custom_targeting_key_id}` |

### `BatchActivateCustomTargetingKeysResponse`

Response object for `BatchActivateCustomTargetingKeys` method.

Type: object

### `BatchDeactivateCustomTargetingKeysRequest`

Request message for `BatchDeactivateCustomTargetingKeys` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The resource names of the `CustomTargetingKey`s to deactivate. Format: `networks/{network_code}/customTargetingKeys/{custom_targeting_key_id}` |

### `BatchDeactivateCustomTargetingKeysResponse`

Response object for `BatchDeactivateCustomTargetingKeys` method.

Type: object

### `CreateCustomTargetingKeyRequest`

Request object for `CreateCustomTargetingKey` method.

| Field | Type | Description |
|---|---|---|
| customTargetingKey | `CustomTargetingKey` | Required. The `CustomTargetingKey` to create. |
| parent | string | Required. The parent resource where this `CustomTargetingKey` will be created. Format: `networks/{network_code}` |

### `UpdateCustomTargetingKeyRequest`

Request object for `UpdateCustomTargetingKey` method.

| Field | Type | Description |
|---|---|---|
| customTargetingKey | `CustomTargetingKey` | Required. The `CustomTargetingKey` to update. The `CustomTargetingKey`'s `name` is used to identify the `CustomTargetingKey` to update. |
| updateMask | string (google-fieldmask) | Optional. The list of fields to update. |

