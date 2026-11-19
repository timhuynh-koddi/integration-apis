# Merchant API accounts_v1: accounts.autofeedSettings

> Source: Merchant API `accounts_v1` REST Discovery document (https://merchantapi.googleapis.com/$discovery/rest?version=accounts_v1); overview https://developers.google.com/merchant/api/overview. Fetched 2026-11-19.

---

## accounts.autofeedSettings.getAutofeedSettings

`GET https://merchantapi.googleapis.com/accounts/v1/{+name}`

Retrieves the autofeed settings of an account.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The resource name of the autofeed settings. Format: `accounts/{account}/autofeedSettings` |

**Response**: `AutofeedSettings`

---

## accounts.autofeedSettings.updateAutofeedSettings

`PATCH https://merchantapi.googleapis.com/accounts/v1/{+name}`

Updates the autofeed settings of an account.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Identifier. The resource name of the autofeed settings. Format: `accounts/{account}/autofeedSettings`. |
| updateMask | query | string (google-fieldmask) |  | Required. List of fields being updated. |

**Request body**: `AutofeedSettings`

**Response**: `AutofeedSettings`

---

## Schemas

### `AutofeedSettings`

Collection of information related to the [autofeed](https://support.google.com/merchants/answer/7538732) settings. For more information, see [Configure Autofeed settings](https://developers.google.com/merchant/api/guides/data-sources/manage-various-data-sources#autofeed-settings).

| Field | Type | Description |
|---|---|---|
| enableProducts | boolean | Required. Enables or disables product crawling through the autofeed for the given account. Autofeed accounts must meet [certain conditions](https://support.google.com/merchants/answer/7538732#Configure_automated_feeds_Standard_Experience), which can be checked through the `eligible` field. The account must **not** be a marketplace. When the autofeed is enabled for the first time, the products usually appear instantly. When re-enabling, it might take up to 24 hours for products to appear. |
| name | string | Identifier. The resource name of the autofeed settings. Format: `accounts/{account}/autofeedSettings`. |
| eligible | boolean | Output only. Determines whether the business is eligible for being enrolled into an autofeed. |

