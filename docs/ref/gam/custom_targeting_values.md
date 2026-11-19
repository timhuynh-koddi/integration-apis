# Custom Targeting Values

> Source: Google Ad Manager API (beta, REST v1) Discovery document (https://admanager.googleapis.com/$discovery/rest?version=v1, revision 20261118); release notes https://developers.google.com/ad-manager/api/beta/docs/release-notes. Fetched 2026-11-19. Resource names have the form `networks/{networkCode}/...`.

Used by koddi-offsite via: SOAP `CustomTargetingService.getCustomTargetingValuesByStatement`.

---

## networks.customTargetingValues.patch

`PATCH https://admanager.googleapis.com/v1/{+name}`

Updates a `CustomTargetingValue` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Identifier. The resource name of the `CustomTargetingValue`. Format: `networks/{network_code}/customTargetingValues/{custom_targeting_value_id}` |
| updateMask | query | string (google-fieldmask) |  | Optional. The list of fields to update. |

**Request body**: `CustomTargetingValue`

**Response**: `CustomTargetingValue`

---

## networks.customTargetingValues.batchActivate

`POST https://admanager.googleapis.com/v1/{+parent}/customTargetingValues:batchActivate`

Batch activates `CustomTargetingValue` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of CustomTargetingValues. Format: `networks/{network_code}` |

**Request body**: `BatchActivateCustomTargetingValuesRequest`

**Response**: `BatchActivateCustomTargetingValuesResponse`

---

## networks.customTargetingValues.list

`GET https://admanager.googleapis.com/v1/{+parent}/customTargetingValues`

Lists `CustomTargetingValue` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of CustomTargetingValues. Format: `networks/{network_code}` |
| orderBy | query | string |  | Optional. Expression to specify sorting order. See syntax details at https://developers.google.com/ad-manager/api/beta/filters#order |
| skip | query | integer (int32) |  | Optional. Number of individual resources to skip while paginating. |
| pageSize | query | integer (int32) |  | Optional. The maximum number of `CustomTargetingValues` to return. The service may return fewer than this value. If unspecified, at most 50 `CustomTargetingValues` will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| filter | query | string |  | Optional. Expression to filter the response. See syntax details at https://developers.google.com/ad-manager/api/beta/filters Syntax summary: double-quoted `"..."` (never `'...'`) strings and RFC 3339 timestamps, full resource names on reference fields (for example, `order = "networks/123/orders/456"`, not `*Id` or bare IDs), prefix or suffix `*` wildcards with `=` (`displayName = "foo*"`), `:` for substring or repeated-field matching, unquoted enums and booleans, uppercase `AND`/`OR`/`NOT`, and standalone `IN(field, SET(v1, v2))` (not `field IN (...)`). **Filterable fields:** * `adTagName` * `customTargetingKey` * `displayName` * `matchType` * `name` * `status` |
| pageToken | query | string |  | Optional. A page token, received from a previous `ListCustomTargetingValues` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomTargetingValues` must match the call that provided the page token. |

**Response**: `ListCustomTargetingValuesResponse`

---

## networks.customTargetingValues.create

`POST https://admanager.googleapis.com/v1/{+parent}/customTargetingValues`

Creates a `CustomTargetingValue` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of CustomTargetingValues. Format: `networks/{network_code}` |

**Request body**: `CustomTargetingValue`

**Response**: `CustomTargetingValue`

---

## networks.customTargetingValues.get

`GET https://admanager.googleapis.com/v1/{+name}`

Retrieves a `CustomTargetingValue` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The resource name of the CustomTargetingValue. Format: `networks/{network_code}/customTargetingValues/{custom_targeting_value_id}` |

**Response**: `CustomTargetingValue`

---

## networks.customTargetingValues.batchDeactivate

`POST https://admanager.googleapis.com/v1/{+parent}/customTargetingValues:batchDeactivate`

Deactivates a list of `CustomTargetingValue` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of CustomTargetingValues. Format: `networks/{network_code}/` |

**Request body**: `BatchDeactivateCustomTargetingValuesRequest`

**Response**: `BatchDeactivateCustomTargetingValuesResponse`

---

## networks.customTargetingValues.batchCreate

`POST https://admanager.googleapis.com/v1/{+parent}/customTargetingValues:batchCreate`

Creates `CustomTargetingValue` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of CustomTargetingValues. Format: `networks/{network_code}` |

**Request body**: `BatchCreateCustomTargetingValuesRequest`

**Response**: `BatchCreateCustomTargetingValuesResponse`

---

## networks.customTargetingValues.batchUpdate

`POST https://admanager.googleapis.com/v1/{+parent}/customTargetingValues:batchUpdate`

Batch updates `CustomTargetingValue` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of CustomTargetingValues. Format: `networks/{network_code}` |

**Request body**: `BatchUpdateCustomTargetingValuesRequest`

**Response**: `BatchUpdateCustomTargetingValuesResponse`

---

## Schemas

### `CustomTargetingValue`

The `CustomTargetingValue` resource.

| Field | Type | Description |
|---|---|---|
| displayName | string | Optional. Descriptive name for the `CustomTargetingValue`. |
| status | string enum(CUSTOM_TARGETING_VALUE_STATUS_UNSPECIFIED, ACTIVE, INACTIVE) | Output only. Status of the `CustomTargetingValue`. Values: CUSTOM_TARGETING_VALUE_STATUS_UNSPECIFIED - Not specified value.; ACTIVE - Custom targeting value is active.; INACTIVE - Custom targeting value is inactive. |
| matchType | string enum(CUSTOM_TARGETING_VALUE_MATCH_TYPE_UNSPECIFIED, EXACT, BROAD, PREFIX, BROAD_PREFIX, SUFFIX, CONTAINS) | Required. Immutable. The way in which the CustomTargetingValue.name strings will be matched. Values: CUSTOM_TARGETING_VALUE_MATCH_TYPE_UNSPECIFIED - Not specified value.; EXACT - Used for exact matching. For example, the targeting value car=honda will only match to the ad request car=honda.; BROAD - Used for lenient matching when at least one of the words in the ad request matches the targeted value. The targeting value car=honda will match to ad requests containing the word honda. So ad requests car=honda or car=honda civic or car=buy honda or car=how much does a honda cost will all have the line item delivered. This match type can not be used within an audience segment rule.; PREFIX - Used for 'starts with' matching when the first few characters in the ad request match all of the characters in the targeted value. The targeting value car=honda will match to ad requests car=honda or car=hondas for sale but not to car=I want a honda.; BROAD_PREFIX - This is a combination of MatchType#BROAD and MatchType#PREFIX matching. The targeting value car=honda will match to ad requests that contain words that start with the characters in the targeted value, for example with car=civic hondas. This match type can not be used within an audience segment rule.; SUFFIX - Used for 'ends with' matching when the last characters in the ad request match all of the characters in the targeted value. The targeting value car=honda will match with ad requests car=honda or car=I want a honda but not to car=hondas for sale. This match type can not be used within line item targeting.; CONTAINS - Used for 'within' matching when the string in the ad request contains the string in the targeted value. The targeting value car=honda will match with ad requests car=honda, car=I want a honda, and also with car=hondas for sale, but not with car=misspelled hond a. This match type can not be used within line item targeting. |
| adTagName | string | Immutable. Name of the `CustomTargetingValue`. Values can contain up to 40 characters each. You can use alphanumeric characters and symbols other than the following: ", ', =, !, +, #, *, ~, ;, ^, (, ), <, >, [, ]. Values are not data-specific; all values are treated as strings. For example, instead of using "age>=18 AND <=34", try "18-34" |
| name | string | Identifier. The resource name of the `CustomTargetingValue`. Format: `networks/{network_code}/customTargetingValues/{custom_targeting_value_id}` |
| customTargetingKey | string | Required. Immutable. The resource name of the `CustomTargetingKey`. Format: `networks/{network_code}/customTargetingKeys/{custom_targeting_key_id}` |

### `BatchActivateCustomTargetingValuesRequest`

Request object for `BatchActivateCustomTargetingValues` method.

| Field | Type | Description |
|---|---|---|
| requests | array<`ActivateCustomTargetingValueRequest`> | Required. The `CustomTargetingValue` objects to activate. A maximum of 100 objects can be activated in a batch. |

### `BatchActivateCustomTargetingValuesResponse`

Response object for `BatchActivateCustomTargetingValues` method.

Type: object

### `ListCustomTargetingValuesResponse`

Response object for `ListCustomTargetingValuesRequest` containing matching `CustomTargetingValue` objects.

| Field | Type | Description |
|---|---|---|
| nextPageToken | string | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. |
| totalSize | integer (int32) | Total number of `CustomTargetingValue` objects. If a filter was included in the request, this reflects the total number after the filtering is applied. `total_size` won't be calculated in the response unless it has been included in a response field mask. The response field mask can be provided to the method by using the URL parameter `$fields` or `fields`, or by using the HTTP/gRPC header `X-Goog-FieldMask`. For more information, see https://developers.google.com/ad-manager/api/beta/field-masks |
| customTargetingValues | array<`CustomTargetingValue`> | The `CustomTargetingValue` objects from the specified network. |

### `BatchDeactivateCustomTargetingValuesRequest`

Request message for `BatchDeactivateCustomTargetingValues` method.

| Field | Type | Description |
|---|---|---|
| requests | array<`DeactivateCustomTargetingValueRequest`> | Required. The `CustomTargetingValue` objects to deactivate. |

### `BatchDeactivateCustomTargetingValuesResponse`

Response object for `BatchDeactivateCustomTargetingValues` method.

Type: object

### `BatchCreateCustomTargetingValuesRequest`

Request object for `BatchCreateCustomTargetingValues` method.

| Field | Type | Description |
|---|---|---|
| requests | array<`CreateCustomTargetingValueRequest`> | Required. The `CustomTargetingValue` objects to create. A maximum of 100 objects can be created in a batch. |

### `BatchCreateCustomTargetingValuesResponse`

Response object for `BatchCreateCustomTargetingValues` method.

| Field | Type | Description |
|---|---|---|
| customTargetingValues | array<`CustomTargetingValue`> | The `CustomTargetingValue` objects created. |

### `BatchUpdateCustomTargetingValuesRequest`

Request object for `BatchUpdateCustomTargetingValues` method.

| Field | Type | Description |
|---|---|---|
| requests | array<`UpdateCustomTargetingValueRequest`> | Required. The `CustomTargetingValue` objects to update. A maximum of 100 objects can be updated in a batch. |

### `BatchUpdateCustomTargetingValuesResponse`

Response object for `BatchUpdateCustomTargetingValues` method.

| Field | Type | Description |
|---|---|---|
| customTargetingValues | array<`CustomTargetingValue`> | The `CustomTargetingValue` objects updated. |

### `ActivateCustomTargetingValueRequest`

Request message to activate a CustomTargetingValue.

| Field | Type | Description |
|---|---|---|
| name | string | Required. The resource name of the CustomTargetingValue. Format: `networks/{network_code}/customTargetingValues/{custom_targeting_value_id}` |

### `DeactivateCustomTargetingValueRequest`

Request message to deactivate a CustomTargetingValue.

| Field | Type | Description |
|---|---|---|
| name | string | Required. The resource name of the CustomTargetingValue. Format: `networks/{network_code}/customTargetingValues/{custom_targeting_value_id}` |

### `CreateCustomTargetingValueRequest`

Request object for `CreateCustomTargetingValue` method.

| Field | Type | Description |
|---|---|---|
| parent | string | Required. The parent, which owns this collection of CustomTargetingValues. Format: `networks/{network_code}` |
| customTargetingValue | `CustomTargetingValue` | Required. The `CustomTargetingValue` to create. |

### `UpdateCustomTargetingValueRequest`

Request object for `UpdateCustomTargetingValue` method.

| Field | Type | Description |
|---|---|---|
| customTargetingValue | `CustomTargetingValue` | Required. The `CustomTargetingValue` to update. The `CustomTargetingValue`'s `name` is used to identify the `CustomTargetingValue` to update. |
| updateMask | string (google-fieldmask) | Optional. The list of fields to update. |

