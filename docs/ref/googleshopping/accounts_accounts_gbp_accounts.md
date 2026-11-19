# Merchant API accounts_v1: accounts.gbpAccounts

> Source: Merchant API `accounts_v1` REST Discovery document (https://merchantapi.googleapis.com/$discovery/rest?version=accounts_v1); overview https://developers.google.com/merchant/api/overview. Fetched 2026-11-19.

---

## accounts.gbpAccounts.linkGbpAccount

`POST https://merchantapi.googleapis.com/accounts/v1/{+parent}/gbpAccounts:linkGbpAccount`

Link the specified merchant to a GBP account for all countries. To run this method, you must have admin access to the Merchant Center account. If you don't have admin access, the request fails with the error message `User is not an administrator of account {ACCOUNT_ID}`.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The name of the parent resource to which the GBP account is linked. Format: `accounts/{account}`. |

**Request body**: `LinkGbpAccountRequest`

**Response**: `LinkGbpAccountResponse`

---

## accounts.gbpAccounts.list

`GET https://merchantapi.googleapis.com/accounts/v1/{+parent}/gbpAccounts`

List the GBP accounts for a given merchant.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The name of the parent resource under which the GBP accounts are listed. Format: `accounts/{account}`. |
| pageToken | query | string |  | Optional. A page token, received from a previous `ListGbpAccounts` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `ListGbpAccounts` must match the call that provided the page token. |
| pageSize | query | integer (int32) |  | Optional. The maximum number of `GbpAccount` resources to return. The service returns fewer than this value if the number of gbp accounts is less that than the `pageSize`. The default value is 50. The maximum value is 1000; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum. |

**Response**: `ListGbpAccountsResponse`

---

## Schemas

### `LinkGbpAccountRequest`

Request message for the LinkGbpAccount method.

| Field | Type | Description |
|---|---|---|
| gbpEmail | string | Required. The email address of the Business Profile account. |

### `LinkGbpAccountResponse`

Response message for the LinkGbpAccount method.

| Field | Type | Description |
|---|---|---|
| response | `Empty` | Empty response. |

### `ListGbpAccountsResponse`

Response message for the ListGbpAccounts method.

| Field | Type | Description |
|---|---|---|
| gbpAccounts | array<`GbpAccount`> | The GBP accounts from the specified merchant in the specified country. |
| nextPageToken | string | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. |

### `Empty`

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

Type: object

### `GbpAccount`

Collection of information related to a Google Business Profile (GBP) account. For more information, see [Link a Google business profile](https://developers.google.com/merchant/api/guides/accounts/link-business-profile).

| Field | Type | Description |
|---|---|---|
| gbpAccountName | string | The name of the Business Profile. For personal accounts: Email id of the owner. For Business accounts: Name of the Business Account. |
| type | string enum(TYPE_UNSPECIFIED, USER, BUSINESS_ACCOUNT) | The type of the Business Profile. Values: TYPE_UNSPECIFIED - Default value. This value is unused.; USER - The GBP account is a user account.; BUSINESS_ACCOUNT - The GBP account is a business account. |
| name | string | Identifier. The resource name of the GBP account. Format: `accounts/{account}/gbpAccount/{gbp_account}` |
| listingCount | string (int64) | Number of listings under this account. |
| gbpAccountId | string | The id of the GBP account. |

