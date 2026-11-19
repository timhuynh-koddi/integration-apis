# Merchant API accounts_v1: accounts.onlineReturnPolicies

> Source: Merchant API `accounts_v1` REST Discovery document (https://merchantapi.googleapis.com/$discovery/rest?version=accounts_v1); overview https://developers.google.com/merchant/api/overview. Fetched 2026-11-19.

---

## accounts.onlineReturnPolicies.get

`GET https://merchantapi.googleapis.com/accounts/v1/{+name}`

Gets an existing return policy for a given business.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The name of the return policy to retrieve. Format: `accounts/{account}/onlineReturnPolicies/{return_policy}` |

**Response**: `OnlineReturnPolicy`

---

## accounts.onlineReturnPolicies.list

`GET https://merchantapi.googleapis.com/accounts/v1/{+parent}/onlineReturnPolicies`

Lists all existing return policies for a given business.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The Merchant Center account for which to list return policies. Format: `accounts/{account}` |
| pageToken | query | string |  | Optional. A page token, received from a previous `ListOnlineReturnPolicies` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `ListOnlineReturnPolicies` must match the call that provided the page token. The token returned as nextPageToken in the response to the previous request. |
| pageSize | query | integer (int32) |  | Optional. The maximum number of `OnlineReturnPolicy` resources to return. The service returns fewer than this value if the number of return policies for the given business is less that than the `pageSize`. The default value is 10. The maximum value is 100; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum |

**Response**: `ListOnlineReturnPoliciesResponse`

---

## accounts.onlineReturnPolicies.delete

`DELETE https://merchantapi.googleapis.com/accounts/v1/{+name}`

Deletes an existing return policy.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The name of the return policy to delete. Format: `accounts/{account}/onlineReturnPolicies/{return_policy}` |

**Response**: `Empty`

---

## accounts.onlineReturnPolicies.create

`POST https://merchantapi.googleapis.com/accounts/v1/{+parent}/onlineReturnPolicies`

Creates a new return policy for a given business.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The Merchant Center account for which the return policy will be created. Format: `accounts/{account}` |

**Request body**: `OnlineReturnPolicy`

**Response**: `OnlineReturnPolicy`

---

## Schemas

### `OnlineReturnPolicy`

[Online return policy](https://support.google.com/merchants/answer/10220642) object. This is currently used to represent return policies for ads and free listings programs. For more information, see [Manage your online return policies](https://developers.google.com/merchant/api/guides/online-return-policies/overview).

| Field | Type | Description |
|---|---|---|
| itemConditions | array<string enum(ITEM_CONDITION_UNSPECIFIED, NEW, USED)> | Optional. The item conditions accepted for returns must not be empty unless the type of return policy is 'noReturns'. |
| returnShippingFee | `ReturnShippingFee` | Optional. The return shipping fee. Should be set only when customer need to download and print the return label. |
| processRefundDays | integer (int32) | Optional. The field specifies the number of days it takes for business to process refunds. |
| returnPolicyUri | string | Required. The return policy uri. This can used by Google to do a sanity check for the policy. It must be a valid URL. |
| acceptExchange | boolean | Optional. This field specifies if business allows customers to exchange products. |
| label | string | Optional. Immutable. This field represents the unique user-defined label of the return policy for the given country. It is important to note that the same label cannot be used in different return policies for the same country. If not given, policies will be automatically treated as the 'default' for the country. When using label, you are creating an exception policy in that country to assign a custom return policy to certain product groups, follow the instructions provided in the [Return policy label] (https://support.google.com/merchants/answer/9445425). The label can contain up to 50 characters. |
| acceptDefectiveOnly | boolean | Optional. This field specifies if business only accepts defective products for returns. |
| policy | `Policy` | Optional. The return policy. |
| countries | array<string> | Required. Immutable. The countries of sale where the return policy applies. The values must be a valid 2 letter ISO 3166 code. |
| name | string | Identifier. The name of the `OnlineReturnPolicy` resource. Format: `accounts/{account}/onlineReturnPolicies/{return_policy}` |
| returnLabelSource | string enum(RETURN_LABEL_SOURCE_UNSPECIFIED, DOWNLOAD_AND_PRINT, IN_THE_PACKAGE, CUSTOMER_RESPONSIBILITY) | Optional. The field specifies the return label source. Values: RETURN_LABEL_SOURCE_UNSPECIFIED - Default value. This value is unused.; DOWNLOAD_AND_PRINT - Download and print.; IN_THE_PACKAGE - Label include in the package.; CUSTOMER_RESPONSIBILITY - Customer to provide. |
| restockingFee | `RestockingFee` | Optional. The restocking fee that applies to all return reason categories. This would be treated as a free restocking fee if the value is not set. |
| returnMethods | array<string enum(RETURN_METHOD_UNSPECIFIED, BY_MAIL, IN_STORE, AT_A_KIOSK)> | Optional. The return methods of how customers can return an item. This value is required to not be empty unless the type of return policy is noReturns. |
| seasonalOverrides | array<`SeasonalOverride`> | Optional. Overrides to the general policy for orders placed during a specific set of time intervals. |
| returnPolicyId | string | Output only. Return policy ID generated by Google. |

### `ListOnlineReturnPoliciesResponse`

Response message for the `ListOnlineReturnPolicies` method.

| Field | Type | Description |
|---|---|---|
| nextPageToken | string | A token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages. |
| onlineReturnPolicies | array<`OnlineReturnPolicy`> | The retrieved return policies. |

### `Empty`

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

Type: object

### `Policy`

The available policies.

| Field | Type | Description |
|---|---|---|
| type | string enum(TYPE_UNSPECIFIED, NUMBER_OF_DAYS_AFTER_DELIVERY, NO_RETURNS, LIFETIME_RETURNS) | Policy type. Values: TYPE_UNSPECIFIED - Default value. This value is unused.; NUMBER_OF_DAYS_AFTER_DELIVERY - The number of days within which a return is valid after delivery.; NO_RETURNS - No returns.; LIFETIME_RETURNS - Life time returns. |
| days | string (int64) | The number of days items can be returned after delivery, where one day is defined as 24 hours after the delivery timestamp. Required for `NUMBER_OF_DAYS_AFTER_DELIVERY` returns. |

### `RestockingFee`

The restocking fee. This can be a flat fee or a micro percent.

| Field | Type | Description |
|---|---|---|
| microPercent | integer (int32) | Percent of total price in micros. 15,000,000 means 15% of the total price would be charged. |
| fixedFee | `Price` | Fixed restocking fee. |

### `ReturnShippingFee`

The return shipping fee. This can either be a fixed fee or a boolean to indicate that the customer pays the actual shipping cost.

| Field | Type | Description |
|---|---|---|
| fixedFee | `Price` | Fixed return shipping fee amount. This value is only applicable when type is `FIXED`. We will treat the return shipping fee as free if type is `FIXED` and this value is not set. |
| type | string enum(TYPE_UNSPECIFIED, FIXED, CUSTOMER_PAYING_ACTUAL_FEE) | Required. Type of return shipping fee. Values: TYPE_UNSPECIFIED - Default value. This value is unused.; FIXED - The return shipping fee is a fixed value.; CUSTOMER_PAYING_ACTUAL_FEE - Customers will pay the actual return shipping fee. |

### `SeasonalOverride`

| Field | Type | Description |
|---|---|---|
| label | string | Required. Display name of this seasonal override in Merchant Center. |
| returnDays | integer (int32) | Number of days (from the delivery date) that the product can be returned. |
| returnUntilDate | `Date` | Fixed end date until which the product can be returned. |
| startDate | `Date` | Required. Defines the date range when this seasonal override applies. Both start_date and end_date are inclusive. The dates of the seasonal overrides should not overlap. |
| endDate | `Date` | Required. seasonal override end date (inclusive). |

### `Price`

The price represented as a number and currency.

| Field | Type | Description |
|---|---|---|
| amountMicros | string (int64) | The price represented as a number in micros (1 million micros is an equivalent to one's currency standard unit, for example, 1 USD = 1000000 micros). |
| currencyCode | string | The currency of the price using three-letter acronyms according to [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217). |

### `Date`

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp

| Field | Type | Description |
|---|---|---|
| month | integer (int32) | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| year | integer (int32) | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| day | integer (int32) | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |

