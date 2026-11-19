# Merchant API accounts_v1: accounts.programs

> Source: Merchant API `accounts_v1` REST Discovery document (https://merchantapi.googleapis.com/$discovery/rest?version=accounts_v1); overview https://developers.google.com/merchant/api/overview. Fetched 2026-11-19.

---

## accounts.programs.disable

`POST https://merchantapi.googleapis.com/accounts/v1/{+name}:disable`

Disable participation in the specified program for the account.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The name of the program for which to disable participation for the given account. Format: `accounts/{account}/programs/{program}`. For example, `accounts/123456/programs/free-listings`. |

**Request body**: `DisableProgramRequest`

**Response**: `Program`

---

## accounts.programs.get

`GET https://merchantapi.googleapis.com/accounts/v1/{+name}`

Retrieves the specified program for the account.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The name of the program to retrieve. Format: `accounts/{account}/programs/{program}`. For example, `accounts/123456/programs/free-listings`. |

**Response**: `Program`

---

## accounts.programs.enable

`POST https://merchantapi.googleapis.com/accounts/v1/{+name}:enable`

Enable participation in the specified program for the account.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The name of the program for which to enable participation for the given account. Format: `accounts/{account}/programs/{program}`. For example, `accounts/123456/programs/free-listings`. |

**Request body**: `EnableProgramRequest`

**Response**: `Program`

---

## accounts.programs.list

`GET https://merchantapi.googleapis.com/accounts/v1/{+parent}/programs`

Retrieves all programs for the account.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The name of the account for which to retrieve all programs. Format: `accounts/{account}` |
| pageToken | query | string |  | Optional. A continuation token, received from a previous `ListPrograms` call. Provide this to retrieve the next page. |
| pageSize | query | integer (int32) |  | Optional. The maximum number of programs to return in a single response. If unspecified (or 0), a default size of 1000 is used. The maximum value is 1000; values above 1000 will be coerced to 1000. |

**Response**: `ListProgramsResponse`

---

## Schemas

### `DisableProgramRequest`

Request message for the DisableProgram method.

Type: object

### `Program`

Defines participation in a given program for the specified account. Programs provide a mechanism for adding functionality to a Merchant Center accounts. A typical example of this is the [Free product listings](https://support.google.com/merchants/answer/13889434) program, which enables products from a business's store to be shown across Google for free. For more information, see [Manage programs](https://developers.google.com/merchant/api/guides/programs/overview). The following list is the available set of program resource IDs accessible through the API: * [`checkout`](https://developers.google.com/merchant/api/guides/products/checkout-settings) * `free-listings` * [`loyalty`](https://developers.google.com/merchant/api/guides/loyalty/loyalty-programs) * `product-ratings` * `shopping-ads` * [`ucp-integration` (limited access)](https://developers.google.com/merchant/api/reference/rest/accounts_v1alpha/accounts.programs.ucpSettings) * [`youtube-affiliate`](https://support.google.com/merchants/answer/14815513) * `youtube-shopping-checkout`

| Field | Type | Description |
|---|---|---|
| state | string enum(STATE_UNSPECIFIED, NOT_ELIGIBLE, ELIGIBLE, ENABLED) | Output only. The participation state of the account in the program. Values: STATE_UNSPECIFIED - Default value. This value is unused.; NOT_ELIGIBLE - The account is not eligible to participate in the program.; ELIGIBLE - The account is eligible to participate in the program.; ENABLED - The program is enabled for the account. |
| activeRegionCodes | array<string> | Output only. The regions in which the account is actively participating in the program. Active regions are defined as those where all program requirements affecting the regions have been met. Region codes are defined by [CLDR](https://cldr.unicode.org/). This is either a country where the program applies specifically to that country or `001` when the program applies globally. |
| unmetRequirements | array<`Requirement`> | Output only. The requirements that the account has not yet satisfied that are affecting participation in the program. |
| name | string | Identifier. The resource name of the program. Format: `accounts/{account}/programs/{program}` |
| documentationUri | string | Output only. The URL of a Merchant Center help page describing the program. |

### `EnableProgramRequest`

Request message for the EnableProgram method.

Type: object

### `ListProgramsResponse`

Response message for the ListPrograms method.

| Field | Type | Description |
|---|---|---|
| nextPageToken | string | A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. |
| programs | array<`Program`> | The programs for the given account. |

### `Requirement`

Defines a requirement specified for participation in the program.

| Field | Type | Description |
|---|---|---|
| documentationUri | string | Output only. The URL of a help page describing the requirement. |
| affectedRegionCodes | array<string> | Output only. The regions that are currently affected by this requirement not being met. Region codes are defined by [CLDR](https://cldr.unicode.org/). This is either a country where the program applies specifically to that country or `001` when the program applies globally. |
| title | string | Output only. Name of the requirement. |

