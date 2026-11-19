# Merchant API accounts_v1: accounts.users

> Source: Merchant API `accounts_v1` REST Discovery document (https://merchantapi.googleapis.com/$discovery/rest?version=accounts_v1); overview https://developers.google.com/merchant/api/overview. Fetched 2026-11-19.

---

## accounts.users.create

`POST https://merchantapi.googleapis.com/accounts/v1/{+parent}/users`

Creates a Merchant Center account user. Executing this method requires admin access.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The resource name of the account for which a user will be created. Format: `accounts/{account}` |
| userId | query | string |  | Required. The email address of the user (for example, `john.doe@gmail.com`). |

**Request body**: `User`

**Response**: `User`

---

## accounts.users.get

`GET https://merchantapi.googleapis.com/accounts/v1/{+name}`

Retrieves a Merchant Center account user.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The name of the user to retrieve. Format: `accounts/{account}/users/{email}` It is also possible to retrieve the user corresponding to the caller by using `me` rather than an email address as in `accounts/{account}/users/me`. |

**Response**: `User`

---

## accounts.users.patch

`PATCH https://merchantapi.googleapis.com/accounts/v1/{+name}`

Updates a Merchant Center account user. Executing this method requires admin access.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Identifier. The resource name of the user. Format: `accounts/{account}/user/{email}` Use `me` to refer to your own email address, for example `accounts/{account}/users/me`. |
| updateMask | query | string (google-fieldmask) |  | Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `access_rights` |

**Request body**: `User`

**Response**: `User`

---

## accounts.users.delete

`DELETE https://merchantapi.googleapis.com/accounts/v1/{+name}`

Deletes a Merchant Center account user. Executing this method requires admin access. The user to be deleted can't be the last admin user of that account.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The name of the user to delete. Format: `accounts/{account}/users/{email}` It is also possible to delete the user corresponding to the caller by using `me` rather than an email address as in `accounts/{account}/users/me`. |

**Response**: `Empty`

---

## accounts.users.list

`GET https://merchantapi.googleapis.com/accounts/v1/{+parent}/users`

Lists all users of a Merchant Center account.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of users. Format: `accounts/{account}` |
| pageSize | query | integer (int32) |  | Optional. The maximum number of users to return. The service may return fewer than this value. If unspecified, at most 50 users will be returned. The maximum value is 100; values above 100 will be coerced to 100 |
| pageToken | query | string |  | Optional. A page token, received from a previous `ListUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUsers` must match the call that provided the page token. |

**Response**: `ListUsersResponse`

---

## Schemas

### `User`

The `User` resource represents a user associated with a Merchant Center account. It is used to manage user permissions and access rights within the account. For more information, see [Frequently asked questions about people and access levels](//support.google.com/merchants/answer/12160472) and [Control access to your account](https://developers.google.com/merchant/api/guides/accounts/control-access).

| Field | Type | Description |
|---|---|---|
| state | string enum(STATE_UNSPECIFIED, PENDING, VERIFIED) | Output only. The state of the user. Values: STATE_UNSPECIFIED - Default value. This value is unused.; PENDING - The user is pending confirmation. In this state, the user first needs to accept the invitation before performing other actions.; VERIFIED - The user is verified. |
| accessRights | array<string enum(ACCESS_RIGHT_UNSPECIFIED, STANDARD, READ_ONLY, ADMIN, PERFORMANCE_REPORTING, API_DEVELOPER)> | Required. The [access rights](https://support.google.com/merchants/answer/12160472#accesstypes) the user has. |
| name | string | Identifier. The resource name of the user. Format: `accounts/{account}/user/{email}` Use `me` to refer to your own email address, for example `accounts/{account}/users/me`. |

### `Empty`

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

Type: object

### `ListUsersResponse`

Response message for the `ListUsers` method.

| Field | Type | Description |
|---|---|---|
| users | array<`User`> | The users from the specified account. |
| nextPageToken | string | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. |

