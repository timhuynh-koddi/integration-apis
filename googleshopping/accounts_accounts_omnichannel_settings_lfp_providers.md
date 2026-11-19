# Merchant API accounts_v1: accounts.omnichannelSettings.lfpProviders

> Source: Merchant API `accounts_v1` REST Discovery document (https://merchantapi.googleapis.com/$discovery/rest?version=accounts_v1); overview https://developers.google.com/merchant/api/overview. Fetched 2026-11-19.

---

## accounts.omnichannelSettings.lfpProviders.linkLfpProvider

`POST https://merchantapi.googleapis.com/accounts/v1/{+name}:linkLfpProvider`

Link the specified merchant to a LFP provider for the specified country.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The name of the LFP provider resource to link. Format: `accounts/{account}/omnichannelSettings/{omnichannel_setting}/lfpProviders/{lfp_provider}`. The `lfp_provider` is the LFP provider ID. |

**Request body**: `LinkLfpProviderRequest`

**Response**: `LinkLfpProviderResponse`

---

## accounts.omnichannelSettings.lfpProviders.find

`GET https://merchantapi.googleapis.com/accounts/v1/{+parent}/lfpProviders:find`

Find the LFP provider candidates in a given country.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The name of the parent resource under which the LFP providers are found. Format: `accounts/{account}/omnichannelSettings/{omnichannel_setting}`. |
| pageSize | query | integer (int32) |  | Optional. The maximum number of `LfpProvider` resources to return. The service returns fewer than this value if the number of lfp providers is less that than the `pageSize`. The default value is 50. The maximum value is 1000; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum. |
| pageToken | query | string |  | Optional. A page token, received from a previous `FindLfpProviders` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `FindLfpProviders` must match the call that provided the page token. |

**Response**: `FindLfpProvidersResponse`

---

## Schemas

### `LinkLfpProviderRequest`

Request message for the LinkLfpProvider method.

| Field | Type | Description |
|---|---|---|
| externalAccountId | string | Required. The external account ID by which this merchant is known to the LFP provider. |

### `LinkLfpProviderResponse`

Response message for the LinkLfpProvider method.

| Field | Type | Description |
|---|---|---|
| response | `Empty` | Empty response. |

### `FindLfpProvidersResponse`

Response message for the FindLfpProviders method.

| Field | Type | Description |
|---|---|---|
| lfpProviders | array<`LfpProvider`> | The LFP providers from the specified merchant in the specified country. |
| nextPageToken | string | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. |

### `Empty`

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

Type: object

### `LfpProvider`

Collection of information related to a Local Feed Partnership (LFP) provider. For more information, see [Manage Local Feeds Partnership (LFP) providers](https://developers.google.com/merchant/api/guides/accounts/manage-lfp-providers) and [Manage local feeds partnership](https://developers.google.com/merchant/api/guides/local-feeds-partnership/overview).

| Field | Type | Description |
|---|---|---|
| name | string | Identifier. The resource name of the LFP provider. Format: `accounts/{account}/omnichannelSettings/{omnichannel_setting}/lfpProviders/{lfp_provider}` |
| regionCode | string | Output only. Region code defined by [CLDR](https://cldr.unicode.org/). |
| displayName | string | The display name of the LFP provider. |

