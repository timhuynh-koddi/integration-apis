# Users

> Source: Google Ad Manager API (beta, REST v1) Discovery document (https://admanager.googleapis.com/$discovery/rest?version=v1, revision 20261118); release notes https://developers.google.com/ad-manager/api/beta/docs/release-notes. Fetched 2026-11-19. Resource names have the form `networks/{networkCode}/...`.

Used by koddi-offsite via: SOAP `UserService.getCurrentUser` (`users/me`).

---

## networks.users.batchDeactivate

`POST https://admanager.googleapis.com/v1/{+parent}/users:batchDeactivate`

Deactivates a list of `User` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. Format: `networks/{network_code}` |

**Request body**: `BatchDeactivateUsersRequest`

**Response**: `BatchDeactivateUsersResponse`

---

## networks.users.patch

`PATCH https://admanager.googleapis.com/v1/{+name}`

Updates a `User` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Identifier. The resource name of the User. Format: `networks/{network_code}/users/{user_id}` |
| updateMask | query | string (google-fieldmask) |  | Optional. The list of fields to update. |

**Request body**: `User`

**Response**: `User`

---

## networks.users.batchCreate

`POST https://admanager.googleapis.com/v1/{+parent}/users:batchCreate`

Creates `User` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `Users` will be created. Format: `networks/{network_code}` The parent field in the CreateUserRequest must match this field. |

**Request body**: `BatchCreateUsersRequest`

**Response**: `BatchCreateUsersResponse`

---

## networks.users.batchUpdate

`POST https://admanager.googleapis.com/v1/{+parent}/users:batchUpdate`

Batch updates `User` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `Users` will be updated. Format: `networks/{network_code}` The parent field in the UpdateUserRequest must match this field. |

**Request body**: `BatchUpdateUsersRequest`

**Response**: `BatchUpdateUsersResponse`

---

## networks.users.list

`GET https://admanager.googleapis.com/v1/{+parent}/users`

Lists `User` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of Users. Format: `networks/{network_code}` |
| skip | query | integer (int32) |  | Optional. Number of individual resources to skip while paginating. |
| filter | query | string |  | Optional. Expression to filter the response. See syntax details at https://developers.google.com/ad-manager/api/beta/filters Syntax summary: double-quoted `"..."` (never `'...'`) strings and RFC 3339 timestamps, full resource names on reference fields (for example, `order = "networks/123/orders/456"`, not `*Id` or bare IDs), prefix or suffix `*` wildcards with `=` (`displayName = "foo*"`), `:` for substring or repeated-field matching, unquoted enums and booleans, uppercase `AND`/`OR`/`NOT`, and standalone `IN(field, SET(v1, v2))` (not `field IN (...)`). **Filterable fields:** * `active` * `displayName` * `email` * `externalId` * `name` * `role` * `serviceAccount` * `userId` |
| pageSize | query | integer (int32) |  | Optional. The maximum number of Users to return. The service may return fewer than this value. If unspecified, at most 50 users will be returned. The maximum value is 1000; values greater than 1000 will be coerced to 1000. |
| pageToken | query | string |  | Optional. A page token, received from a previous `ListUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUsers` must match the call that provided the page token. |
| orderBy | query | string |  | Optional. Expression to specify sorting order. See syntax details at https://developers.google.com/ad-manager/api/beta/filters#order |

**Response**: `ListUsersResponse`

---

## networks.users.create

`POST https://admanager.googleapis.com/v1/{+parent}/users`

Creates a `User` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where this `User` will be created. Format: `networks/{network_code}` |

**Request body**: `User`

**Response**: `User`

---

## networks.users.get

`GET https://admanager.googleapis.com/v1/{+name}`

Retrieves a `User` object. To get the current user, the resource name `networks/{networkCode}/users/me` can be used.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The resource name of the User. Format: `networks/{network_code}/users/{user_id}` |

**Response**: `User`

---

## networks.users.batchActivate

`POST https://admanager.googleapis.com/v1/{+parent}/users:batchActivate`

Activates a list of `User` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. Format: `networks/{network_code}` |

**Request body**: `BatchActivateUsersRequest`

**Response**: `BatchActivateUsersResponse`

---

## Schemas

### `BatchDeactivateUsersRequest`

Request message for `BatchDeactivateUsers` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The resource names of the `User` objects to deactivate. |

### `BatchDeactivateUsersResponse`

Response object for `BatchDeactivateUsers` method.

Type: object

### `User`

The User resource.

| Field | Type | Description |
|---|---|---|
| userId | string (int64) | Output only. Deprecated: `User` ID. |
| name | string | Identifier. The resource name of the User. Format: `networks/{network_code}/users/{user_id}` |
| role | string | Required. The unique Role ID of the User. Roles that are created by Google will have negative IDs. |
| displayName | string | Required. The name of the User. It has a maximum length of 128 characters. |
| active | boolean | Output only. Specifies whether or not the User is active. An inactive user cannot log in to the system or perform any operations. |
| externalId | string | Optional. An identifier for the User that is meaningful to the publisher. This attribute has a maximum length of 255 characters. |
| email | string | Required. The email or login of the User. In order to create a new user, you must already have a Google Account. |
| ordersUiLocalTimeZone | string | Optional. The IANA Time Zone Database time zone, e.g. "America/New_York", used in the orders and line items UI for this User. If not provided, the UI then defaults to using the Network's timezone. This setting only affects the UI for this user and does not affect the timezone of any dates and times returned in API responses. |
| serviceAccount | boolean | Output only. Whether the user is an OAuth2 service account user. Service account users can only be added through the UI. |

### `BatchCreateUsersRequest`

Request object for `BatchCreateUsers` method.

| Field | Type | Description |
|---|---|---|
| requests | array<`CreateUserRequest`> | Required. The `User` objects to create. A maximum of 100 objects can be created in a batch. |

### `BatchCreateUsersResponse`

Response object for `BatchCreateUsers` method.

| Field | Type | Description |
|---|---|---|
| users | array<`User`> | The `User` objects created. |

### `BatchUpdateUsersRequest`

Request object for `BatchUpdateUsers` method.

| Field | Type | Description |
|---|---|---|
| requests | array<`UpdateUserRequest`> | Required. The `User` objects to update. A maximum of 100 objects can be updated in a batch. |

### `BatchUpdateUsersResponse`

Response object for `BatchUpdateUsers` method.

| Field | Type | Description |
|---|---|---|
| users | array<`User`> | The `User` objects updated. |

### `ListUsersResponse`

Response object for ListUsersRequest containing matching User resources.

| Field | Type | Description |
|---|---|---|
| totalSize | integer (int32) | Total number of Users. If a filter was included in the request, this reflects the total number after the filtering is applied. `total_size` won't be calculated in the response unless it has been included in a response field mask. The response field mask can be provided to the method by using the URL parameter `$fields` or `fields`, or by using the HTTP/gRPC header `X-Goog-FieldMask`. For more information, see https://developers.google.com/ad-manager/api/beta/field-masks |
| users | array<`User`> | The User from the specified network. |
| nextPageToken | string | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. |

### `BatchActivateUsersRequest`

Request message for `BatchActivateUsers` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The resource names of the `User` objects to activate. |

### `BatchActivateUsersResponse`

Response object for `BatchActivateUsers` method.

Type: object

### `CreateUserRequest`

Request object for `CreateUser` method.

| Field | Type | Description |
|---|---|---|
| parent | string | Required. The parent resource where this `User` will be created. Format: `networks/{network_code}` |
| user | `User` | Required. The `User` to create. |

### `UpdateUserRequest`

Request object for `UpdateUser` method.

| Field | Type | Description |
|---|---|---|
| user | `User` | Required. The `User` to update. |
| updateMask | string (google-fieldmask) | Optional. The list of fields to update. |

