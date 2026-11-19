# Merchant API accounts_v1: accounts.programs.checkoutSettings

> Source: Merchant API `accounts_v1` REST Discovery document (https://merchantapi.googleapis.com/$discovery/rest?version=accounts_v1); overview https://developers.google.com/merchant/api/overview. Fetched 2026-11-19.

---

## accounts.programs.checkoutSettings.create

`POST https://merchantapi.googleapis.com/accounts/v1/{+parent}/checkoutSettings`

Creates `CheckoutSettings` for the given merchant.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The merchant account for which the `CheckoutSettings` will be created. |

**Request body**: `CheckoutSettings`

**Response**: `CheckoutSettings`

---

## accounts.programs.checkoutSettings.updateCheckoutSettings

`PATCH https://merchantapi.googleapis.com/accounts/v1/{+name}`

Updates `CheckoutSettings` for the given merchant.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Identifier. The resource name of the program configuration settings. Format: `accounts/{account}/programs/{program}/checkoutSettings` |
| updateMask | query | string (google-fieldmask) |  | Required. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `eligible_destinations` - `uri_settings` |

**Request body**: `CheckoutSettings`

**Response**: `CheckoutSettings`

---

## accounts.programs.checkoutSettings.getCheckoutSettings

`GET https://merchantapi.googleapis.com/accounts/v1/{+name}`

Gets `CheckoutSettings` for the given merchant. This includes information about review state, enrollment state and URL settings.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The name/identifier of the merchant account. Format: `accounts/{account}/programs/{program}/checkoutSettings` |

**Response**: `CheckoutSettings`

---

## accounts.programs.checkoutSettings.deleteCheckoutSettings

`DELETE https://merchantapi.googleapis.com/accounts/v1/{+name}`

Deletes `CheckoutSettings` and unenrolls merchant from `Checkout` program.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The name/identifier of the merchant account. Format: `accounts/{account}/programs/{program}/checkoutSettings` |

**Response**: `Empty`

---

## Schemas

### `CheckoutSettings`

[CheckoutSettings](https://support.google.com/merchants/answer/13945960) for a specific merchant. For more information, see [Add a checkout link for your products](https://support.google.com/merchants/answer/13945960) and [Manage checkout settings](https://developers.google.com/merchant/api/guides/products/checkout-settings).

| Field | Type | Description |
|---|---|---|
| eligibleDestinations | array<string enum(DESTINATION_ENUM_UNSPECIFIED, SHOPPING_ADS, DISPLAY_ADS, LOCAL_INVENTORY_ADS, FREE_LISTINGS, FREE_LOCAL_LISTINGS, YOUTUBE_SHOPPING, YOUTUBE_SHOPPING_CHECKOUT, YOUTUBE_AFFILIATE, FREE_VEHICLE_LISTINGS, VEHICLE_ADS, CLOUD_RETAIL, LOCAL_CLOUD_RETAIL, RENTAL_ADS)> | Optional. Required for the create operation. The destinations (also known as [Marketing methods](https://support.google.com/merchants/answer/15130232)) to which the checkout program applies. Valid destination values are `SHOPPING_ADS` and `FREE_LISTINGS`. |
| effectiveEnrollmentState | string enum(CHECKOUT_ENROLLMENT_STATE_UNSPECIFIED, INACTIVE, ENROLLED, OPTED_OUT) | Output only. The effective value of enrollment_state for a given merchant ID. If account level settings are present then this value will be a copy of the account level settings. Otherwise, it will have the value of the parent account (for only marketplace sellers). Values: CHECKOUT_ENROLLMENT_STATE_UNSPECIFIED - Default enrollment state when enrollment state is not specified.; INACTIVE - Merchant has not enrolled into the program.; ENROLLED - Merchant has enrolled into the program by providing either an account level URL or checkout URLs as part of their feed.; OPTED_OUT - Merchant has previously enrolled but opted out of the program. |
| reviewState | string enum(CHECKOUT_REVIEW_STATE_UNSPECIFIED, IN_REVIEW, APPROVED, DISAPPROVED) | Output only. Reflects the merchant review state in `Checkout` program. This is set based on the data quality reviews of the URL provided by the merchant. A merchant with enrollment state as `ENROLLED` can be in the following review states: `IN_REVIEW`, `APPROVED` or `DISAPPROVED`. A merchant must be in an `enrollment_state` of `ENROLLED` before a review can begin for the merchant.For more details, check the help center doc. Values: CHECKOUT_REVIEW_STATE_UNSPECIFIED - Default review state when review state is not specified.; IN_REVIEW - Merchant provided URLs are being reviewed for data quality issues.; APPROVED - Merchant account has been approved. Indicates the data quality checks have passed.; DISAPPROVED - Merchant account has been disapproved due to data quality issues. |
| effectiveReviewState | string enum(CHECKOUT_REVIEW_STATE_UNSPECIFIED, IN_REVIEW, APPROVED, DISAPPROVED) | Output only. The effective value of `review_state` for a given merchant ID. If account level settings are present then this value will be a copy of the account level settings. Otherwise, it will have the value of the parent account (for only marketplace sellers). Values: CHECKOUT_REVIEW_STATE_UNSPECIFIED - Default review state when review state is not specified.; IN_REVIEW - Merchant provided URLs are being reviewed for data quality issues.; APPROVED - Merchant account has been approved. Indicates the data quality checks have passed.; DISAPPROVED - Merchant account has been disapproved due to data quality issues. |
| effectiveUriSettings | `UriSettings` | Output only. The effective value of `uri_settings` for a given merchant. If account level settings are present then this value will be a copy of url settings. Otherwise, it will have the value of the parent account (for only marketplace sellers). |
| uriSettings | `UriSettings` | URI settings for cart or checkout URL. |
| name | string | Identifier. The resource name of the program configuration settings. Format: `accounts/{account}/programs/{program}/checkoutSettings` |
| enrollmentState | string enum(CHECKOUT_ENROLLMENT_STATE_UNSPECIFIED, INACTIVE, ENROLLED, OPTED_OUT) | Output only. Reflects the merchant enrollment state in `Checkout` program. Values: CHECKOUT_ENROLLMENT_STATE_UNSPECIFIED - Default enrollment state when enrollment state is not specified.; INACTIVE - Merchant has not enrolled into the program.; ENROLLED - Merchant has enrolled into the program by providing either an account level URL or checkout URLs as part of their feed.; OPTED_OUT - Merchant has previously enrolled but opted out of the program. |

### `Empty`

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

Type: object

### `UriSettings`

URL settings for cart or checkout URL.

| Field | Type | Description |
|---|---|---|
| checkoutUriTemplate | string | Checkout URL template. When the placeholders are expanded will redirect the buyer to the merchant checkout page with the item in the cart. For more details, check the [help center doc](https://support.google.com/merchants/answer/13945960#method1&zippy=%2Cproduct-level-url-formatting%2Caccount-level-url-formatting) |
| cartUriTemplate | string | Cart URL template. When the placeholders are expanded will redirect the buyer to the cart page on the merchant website with the selected item in cart. For more details, check the [help center doc](https://support.google.com/merchants/answer/13945960#method1&zippy=%2Cproduct-level-url-formatting%2Caccount-level-url-formatting) |

