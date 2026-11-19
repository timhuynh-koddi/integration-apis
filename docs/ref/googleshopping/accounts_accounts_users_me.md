# Merchant API accounts_v1: accounts.users.me

> Source: Merchant API `accounts_v1` REST Discovery document (https://merchantapi.googleapis.com/$discovery/rest?version=accounts_v1); overview https://developers.google.com/merchant/api/overview. Fetched 2026-11-19.

---

## accounts.users.me.verifySelf

`PATCH https://merchantapi.googleapis.com/accounts/v1/{+account}/users/me:verifySelf`

Updates the user that is represented by the caller from pending to verified.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| account | path | string | yes | Required. The name of the account under which the caller is a user. Format: `accounts/{account}` |

**Request body**: `VerifySelfRequest`

**Response**: `User`

---

## Schemas

### `VerifySelfRequest`

Request message for the `VerifySelf` method.

Type: object

### `User`

The `User` resource represents a user associated with a Merchant Center account. It is used to manage user permissions and access rights within the account. For more information, see [Frequently asked questions about people and access levels](//support.google.com/merchants/answer/12160472) and [Control access to your account](https://developers.google.com/merchant/api/guides/accounts/control-access).

| Field | Type | Description |
|---|---|---|
| state | string enum(STATE_UNSPECIFIED, PENDING, VERIFIED) | Output only. The state of the user. Values: STATE_UNSPECIFIED - Default value. This value is unused.; PENDING - The user is pending confirmation. In this state, the user first needs to accept the invitation before performing other actions.; VERIFIED - The user is verified. |
| accessRights | array<string enum(ACCESS_RIGHT_UNSPECIFIED, STANDARD, READ_ONLY, ADMIN, PERFORMANCE_REPORTING, API_DEVELOPER)> | Required. The [access rights](https://support.google.com/merchants/answer/12160472#accesstypes) the user has. |
| name | string | Identifier. The resource name of the user. Format: `accounts/{account}/user/{email}` Use `me` to refer to your own email address, for example `accounts/{account}/users/me`. |

