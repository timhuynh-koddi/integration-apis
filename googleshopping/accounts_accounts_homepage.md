# Merchant API accounts_v1: accounts.homepage

> Source: Merchant API `accounts_v1` REST Discovery document (https://merchantapi.googleapis.com/$discovery/rest?version=accounts_v1); overview https://developers.google.com/merchant/api/overview. Fetched 2026-11-19.

---

## accounts.homepage.unclaim

`POST https://merchantapi.googleapis.com/accounts/v1/{+name}:unclaim`

Unclaims a store's homepage. Executing this method requires admin access. This method only removes a claim made directly on the account. If the account inherits the claim from its advanced account (for example, from an advanced account that is exempted from claiming), the homepage stays claimed: the method returns a successful response and `claimed` remains `true`. If the account itself is exempted from claiming, the method returns a `FAILED_PRECONDITION` error.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The name of the homepage to unclaim. Format: `accounts/{account}/homepage` |

**Request body**: `UnclaimHomepageRequest`

**Response**: `Homepage`

---

## accounts.homepage.claim

`POST https://merchantapi.googleapis.com/accounts/v1/{+name}:claim`

Claims a store's homepage. Executing this method requires admin access. If the homepage is already claimed, this will recheck the verification (unless the business is exempted from claiming, which also exempts from verification) and return a successful response. If ownership can no longer be verified, it will return an error, but it won't clear the claim. In case of failure, a canonical error message is returned: * PERMISSION_DENIED: User doesn't have the necessary permissions on this Merchant Center account. * FAILED_PRECONDITION: - The account is not a Merchant Center account. - Merchant Center account doesn't have a homepage. - Claiming failed (in this case the error message contains more details).

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The name of the homepage to claim. Format: `accounts/{account}/homepage` |

**Request body**: `ClaimHomepageRequest`

**Response**: `Homepage`

---

## accounts.homepage.getHomepage

`GET https://merchantapi.googleapis.com/accounts/v1/{+name}`

Retrieves a store's homepage.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The name of the homepage to retrieve. Format: `accounts/{account}/homepage` |

**Response**: `Homepage`

---

## accounts.homepage.updateHomepage

`PATCH https://merchantapi.googleapis.com/accounts/v1/{+name}`

Updates a store's homepage. Executing this method requires admin access.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Identifier. The resource name of the store's homepage. Format: `accounts/{account}/homepage` |
| updateMask | query | string (google-fieldmask) |  | Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `uri` |

**Request body**: `Homepage`

**Response**: `Homepage`

---

## Schemas

### `UnclaimHomepageRequest`

Request message for the `UnclaimHomepage` method.

Type: object

### `Homepage`

The `Homepage` message represents a business's store homepage within the system. A business's homepage is the primary domain where customers interact with their store. The homepage can be claimed and verified as a proof of ownership and allows the business to unlock features that require a verified website. For more information, see [Understanding online store URL verification](//support.google.com/merchants/answer/176793). For step-by-step instructions, see [Manage homepage settings](https://developers.google.com/merchant/api/guides/accounts/manage-homepage-settings).

| Field | Type | Description |
|---|---|---|
| claimed | boolean | Output only. Whether the homepage is claimed. See [About online store URL verification](https://support.google.com/merchants/answer/176793). This field is also `true` if the account inherits the claim from its advanced account, or if the account is exempted from claiming, even when the homepage isn't claimed directly on the account. |
| uri | string | Required. The URI (typically a URL) of the store's homepage. |
| name | string | Identifier. The resource name of the store's homepage. Format: `accounts/{account}/homepage` |

### `ClaimHomepageRequest`

Request message for the `ClaimHomepage` method.

| Field | Type | Description |
|---|---|---|
| overwrite | boolean | Optional. When set to `true`, this option removes any existing claim on the requested website from any other account to the account making the request, effectively replacing the previous claim. |

