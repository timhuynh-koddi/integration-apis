# Merchant API accounts_v1: accounts.issues

> Source: Merchant API `accounts_v1` REST Discovery document (https://merchantapi.googleapis.com/$discovery/rest?version=accounts_v1); overview https://developers.google.com/merchant/api/overview. Fetched 2026-11-19.

---

## accounts.issues.list

`GET https://merchantapi.googleapis.com/accounts/v1/{+parent}/issues`

Lists all account issues of a Merchant Center account. When called on a multi-client account, this method only returns issues belonging to that account, not its sub-accounts. To retrieve issues for sub-accounts, you must first call the accounts.listSubaccounts method to obtain a list of sub-accounts, and then call `accounts.issues.list` for each sub-account individually.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of issues. Format: `accounts/{account}` |
| timeZone | query | string |  | Optional. The [IANA](https://www.iana.org/time-zones) timezone used to localize times in human-readable fields. For example 'America/Los_Angeles'. If not set, 'America/Los_Angeles' will be used. |
| pageToken | query | string |  | Optional. A page token, received from a previous `ListAccountIssues` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountIssues` must match the call that provided the page token. |
| pageSize | query | integer (int32) |  | Optional. The maximum number of issues to return. The service may return fewer than this value. If unspecified, at most 50 issues will be returned. The maximum value is 100; values above 100 will be coerced to 100 |
| languageCode | query | string |  | Optional. The issues in the response will have human-readable fields in the given language. The format is [BCP-47](https://tools.ietf.org/html/bcp47), such as `en-US` or `sr-Latn`. If not value is provided, `en-US` will be used. |

**Response**: `ListAccountIssuesResponse`

---

## Schemas

### `ListAccountIssuesResponse`

Response message for the `ListAccountIssues` method.

| Field | Type | Description |
|---|---|---|
| accountIssues | array<`AccountIssue`> | The issues from the specified account. |
| nextPageToken | string | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. |

### `AccountIssue`

Issues with your Merchant Center account that can impact all your products. For more information, see [Account-level issues in Merchant Center](https://support.google.com/merchants/answer/12153802#account) and [View account issues](https://developers.google.com/merchant/api/guides/accounts/view-issues).

| Field | Type | Description |
|---|---|---|
| detail | string | Further localized details about the issue. |
| documentationUri | string | Link to Merchant Center Help Center providing further information about the issue and how to fix it. |
| name | string | Identifier. The resource name of the account issue. Format: `accounts/{account}/issues/{id}`. For example, `accounts/123456/issues/misrepresentation-of-self-or-products-unacceptable-business-practice-policy`. |
| title | string | The localized title of the issue. |
| severity | string enum(SEVERITY_UNSPECIFIED, CRITICAL, ERROR, SUGGESTION) | The overall severity of the issue. Values: SEVERITY_UNSPECIFIED - The severity is unknown.; CRITICAL - The issue causes offers to not serve.; ERROR - The issue might affect offers (in the future) or might be an indicator of issues with offers.; SUGGESTION - The issue is a suggestion for improvement. |
| impactedDestinations | array<`ImpactedDestination`> | The impact this issue has on various destinations. |

### `ImpactedDestination`

The impact of the issue on a destination.

| Field | Type | Description |
|---|---|---|
| impacts | array<`Impact`> | The (negative) impact for various regions on the given destination. |
| reportingContext | string enum(REPORTING_CONTEXT_ENUM_UNSPECIFIED, SHOPPING_ADS, DISCOVERY_ADS, DEMAND_GEN_ADS, DEMAND_GEN_ADS_DISCOVER_SURFACE, VIDEO_ADS, DISPLAY_ADS, LOCAL_INVENTORY_ADS, VEHICLE_INVENTORY_ADS, FREE_LISTINGS, FREE_LISTINGS_UCP_CHECKOUT, FREE_LOCAL_LISTINGS, FREE_LOCAL_VEHICLE_LISTINGS, YOUTUBE_AFFILIATE, YOUTUBE_SHOPPING, CLOUD_RETAIL, LOCAL_CLOUD_RETAIL, PRODUCT_REVIEWS, MERCHANT_REVIEWS, YOUTUBE_CHECKOUT, RENTAL_ADS) | The impacted reporting context. Values: REPORTING_CONTEXT_ENUM_UNSPECIFIED - Not specified.; SHOPPING_ADS - [Shopping ads](https://support.google.com/merchants/answer/6149970).; DISCOVERY_ADS - Deprecated: Use `DEMAND_GEN_ADS` instead. [Discovery and Demand Gen ads](https://support.google.com/merchants/answer/13389785).; DEMAND_GEN_ADS - [Demand Gen ads](https://support.google.com/merchants/answer/13389785).; DEMAND_GEN_ADS_DISCOVER_SURFACE - [Demand Gen ads on Discover surface](https://support.google.com/merchants/answer/13389785).; VIDEO_ADS - [Video ads](https://support.google.com/google-ads/answer/6340491).; DISPLAY_ADS - [Display ads](https://support.google.com/merchants/answer/6069387).; LOCAL_INVENTORY_ADS - [Local inventory ads](https://support.google.com/merchants/answer/3271956).; VEHICLE_INVENTORY_ADS - [Vehicle inventory ads](https://support.google.com/merchants/answer/11544533).; FREE_LISTINGS - [Free product listings](https://support.google.com/merchants/answer/9199328).; FREE_LISTINGS_UCP_CHECKOUT - [Free product listings on UCP checkout](https://developers.google.com/merchant/ucp).; FREE_LOCAL_LISTINGS - [Free local product listings](https://support.google.com/merchants/answer/9825611).; FREE_LOCAL_VEHICLE_LISTINGS - [Free local vehicle listings](https://support.google.com/merchants/answer/11544533).; YOUTUBE_AFFILIATE - [Youtube Affiliate](https://support.google.com/youtube/answer/13376398).; YOUTUBE_SHOPPING - [YouTube Shopping](https://support.google.com/merchants/answer/13478370).; CLOUD_RETAIL - [Cloud retail](https://cloud.google.com/solutions/retail).; LOCAL_CLOUD_RETAIL - [Local cloud retail](https://cloud.google.com/solutions/retail).; PRODUCT_REVIEWS - [Product Reviews](https://support.google.com/merchants/answer/14620732).; MERCHANT_REVIEWS - [Merchant Reviews](https://developers.google.com/merchant-review-feeds).; YOUTUBE_CHECKOUT - YouTube Checkout .; RENTAL_ADS - Real Estate Rental Ads. . |

### `Impact`

The impact of the issue on a region.

| Field | Type | Description |
|---|---|---|
| severity | string enum(SEVERITY_UNSPECIFIED, CRITICAL, ERROR, SUGGESTION) | The severity of the issue on the destination and region. Values: SEVERITY_UNSPECIFIED - The severity is unknown.; CRITICAL - The issue causes offers to not serve.; ERROR - The issue might affect offers (in the future) or might be an indicator of issues with offers.; SUGGESTION - The issue is a suggestion for improvement. |
| regionCode | string | The [CLDR region code](https://cldr.unicode.org/) where this issue applies. |

