# Merchant API accounts_v1: accounts.termsOfServiceAgreementStates

> Source: Merchant API `accounts_v1` REST Discovery document (https://merchantapi.googleapis.com/$discovery/rest?version=accounts_v1); overview https://developers.google.com/merchant/api/overview. Fetched 2026-11-19.

---

## accounts.termsOfServiceAgreementStates.retrieveForApplication

`GET https://merchantapi.googleapis.com/accounts/v1/{+parent}/termsOfServiceAgreementStates:retrieveForApplication`

Retrieves the state of the agreement for the application terms of service. Application terms of service covers permissions related to the usage of data provided through Merchant Center, CSS Center, Manufacturer Center, and more.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The account for which to get a TermsOfServiceAgreementState Format: `accounts/{account}` |

**Response**: `TermsOfServiceAgreementState`

---

## accounts.termsOfServiceAgreementStates.get

`GET https://merchantapi.googleapis.com/accounts/v1/{+name}`

Returns the state of a terms of service agreement.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The resource name of the terms of service version. Format: `accounts/{account}/termsOfServiceAgreementStates/{identifier}` The identifier format is: `{TermsOfServiceKind}-{country}` |

**Response**: `TermsOfServiceAgreementState`

---

## Schemas

### `TermsOfServiceAgreementState`

This resource represents the agreement state for a given account and terms of service kind. The state is as follows: * If the business has accepted a terms of service, `accepted` will be populated, otherwise it will be empty * If the business must sign a terms of service, `required` will be populated, otherwise it will be empty. Note that both `required` and `accepted` can be present. In this case the `accepted` terms of services will have an expiration date set in the `valid_until` field. The `required` terms of services need to be accepted before `valid_until` in order for the account to continue having a valid agreement. When accepting new terms of services we expect third-party providers to display the text associated with the given terms of service agreement (the url to the file containing the text is added in the Required message below as `tos_file_uri`). The actual acceptance of the terms of service is done by calling accept on the `TermsOfService` resource. `valid_until` field. For more information, see [Manage Terms of Service](https://developers.google.com/merchant/api/guides/accounts/manage-tos-agreements).

| Field | Type | Description |
|---|---|---|
| accepted | `Accepted` | Optional. The accepted terms of service of this kind and for the associated region_code |
| regionCode | string | Required. Region code as defined by https://cldr.unicode.org/. This is the country the current state applies to. |
| required | `Required` | Optional. The required terms of service |
| name | string | Identifier. The resource name of the terms of service version. Format: `accounts/{account}/termsOfServiceAgreementState/{identifier}` The identifier format is: `{TermsOfServiceKind}-{country}` For example, an identifier could be: `MERCHANT_CENTER-EU` or `MERCHANT_CENTER-US`. |
| termsOfServiceKind | string enum(TERMS_OF_SERVICE_KIND_UNSPECIFIED, MERCHANT_CENTER) | Required. Terms of Service kind associated with the particular version. Values: TERMS_OF_SERVICE_KIND_UNSPECIFIED - Default value. This value is unused.; MERCHANT_CENTER - Terms of Service for the Merchant Center application. |

### `Accepted`

Describes the [accepted terms of service](https://developers.google.com/merchant/api/guides/accounts/manage-tos-agreements#accept-tos).

| Field | Type | Description |
|---|---|---|
| termsOfService | string | Required. The accepted termsOfService. |
| acceptedBy | string | Required. The account where the acceptance was recorded. This can be the account itself or, in the case of subaccounts, the advanced account. |
| validUntil | `Date` | Optional. When set, it states that the accepted `TermsOfService` is only valid until the end of this date (in UTC). A new one must be accepted before then. The information of the required `TermsOfService` is found in the `Required` message. |

### `Required`

Describes the terms of service which are required to be accepted.

| Field | Type | Description |
|---|---|---|
| tosFileUri | string | Required. Full URL to the terms of service file. This field is the same as `TermsOfService.file_uri`, it is added here for convenience only. |
| termsOfService | string | Required. The `TermsOfService` that need to be accepted. |

### `Date`

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp

| Field | Type | Description |
|---|---|---|
| month | integer (int32) | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| year | integer (int32) | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| day | integer (int32) | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |

