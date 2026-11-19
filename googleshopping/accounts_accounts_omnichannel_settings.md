# Merchant API accounts_v1: accounts.omnichannelSettings

> Source: Merchant API `accounts_v1` REST Discovery document (https://merchantapi.googleapis.com/$discovery/rest?version=accounts_v1); overview https://developers.google.com/merchant/api/overview. Fetched 2026-11-19.

---

## accounts.omnichannelSettings.list

`GET https://merchantapi.googleapis.com/accounts/v1/{+parent}/omnichannelSettings`

List all the omnichannel settings for a given merchant.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of omnichannel settings. Format: `accounts/{account}` |
| pageSize | query | integer (int32) |  | Optional. The maximum number of omnichannel settings to return. The service may return fewer than this value. If unspecified, at most 50 omnichannel settings will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| pageToken | query | string |  | Optional. A page token, received from a previous `ListOmnichannelSettings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListOmnichannelSettings` must match the call that provided the page token. |

**Response**: `ListOmnichannelSettingsResponse`

---

## accounts.omnichannelSettings.create

`POST https://merchantapi.googleapis.com/accounts/v1/{+parent}/omnichannelSettings`

Create the omnichannel settings for a given merchant.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where this omnichannel setting will be created. Format: `accounts/{account}` |

**Request body**: `OmnichannelSetting`

**Response**: `OmnichannelSetting`

---

## accounts.omnichannelSettings.get

`GET https://merchantapi.googleapis.com/accounts/v1/{+name}`

Get the omnichannel settings for a given merchant.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The name of the omnichannel setting to retrieve. Format: `accounts/{account}/omnichannelSettings/{omnichannel_setting}` |

**Response**: `OmnichannelSetting`

---

## accounts.omnichannelSettings.requestInventoryVerification

`POST https://merchantapi.googleapis.com/accounts/v1/{+name}:requestInventoryVerification`

Requests inventory verification for a given merchant in a given country.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The name of the omnichannel setting to request inventory verification. Format: `accounts/{account}/omnichannelSettings/{omnichannel_setting}` |

**Request body**: `RequestInventoryVerificationRequest`

**Response**: `RequestInventoryVerificationResponse`

---

## accounts.omnichannelSettings.patch

`PATCH https://merchantapi.googleapis.com/accounts/v1/{+name}`

Update the omnichannel setting for a given merchant in a given country.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Identifier. The resource name of the omnichannel setting. Format: `accounts/{account}/omnichannelSettings/{omnichannel_setting}` |
| updateMask | query | string (google-fieldmask) |  | Required. The list of fields to be updated. The following fields are supported in snake_case only: - `lsf_type` - `in_stock` - `pickup` - `odo` - `about` - `inventory_verification` Full replacement with wildcard `*`is supported, while empty/implied update mask is not. |

**Request body**: `OmnichannelSetting`

**Response**: `OmnichannelSetting`

---

## Schemas

### `ListOmnichannelSettingsResponse`

Response message for the ListOmnichannelSettings method.

| Field | Type | Description |
|---|---|---|
| omnichannelSettings | array<`OmnichannelSetting`> | The omnichannel settings from the specified merchant. |
| nextPageToken | string | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. |

### `OmnichannelSetting`

Collection of information related to the omnichannel settings of a merchant. For more information, see [Manage omnichannel settings](https://developers.google.com/merchant/api/guides/accounts/manage-omnichannel-settings).

| Field | Type | Description |
|---|---|---|
| about | `About` | Optional. The about page URI and state for this country. |
| inventoryVerification | `InventoryVerification` | Optional. The inventory verification contact and state for this country. |
| lsfType | string enum(LSF_TYPE_UNSPECIFIED, GHLSF, MHLSF_BASIC, MHLSF_FULL) | Required. The Local Store Front type for this country. Values: LSF_TYPE_UNSPECIFIED - Default value. This value is unused.; GHLSF - Google-Hosted Local Store Front. Check the [HC article](https://support.google.com/merchants/answer/14869424) for more details.; MHLSF_BASIC - Merchant-Hosted Local Store Front Basic. Check the [HC article](https://support.google.com/merchants/answer/14615867) for more details.; MHLSF_FULL - Merchant-Hosted Local Store Front Full. Check the [HC article](https://support.google.com/merchants/answer/14617076) for more details. |
| regionCode | string | Required. Immutable. Region code defined by [CLDR](https://cldr.unicode.org/). Must be provided in the Create method, and is immutable. |
| name | string | Identifier. The resource name of the omnichannel setting. Format: `accounts/{account}/omnichannelSettings/{omnichannel_setting}` |
| odo | `OnDisplayToOrder` | Optional. The On Display to Order (ODO) policy URI and state for this country. |
| pickup | `Pickup` | Optional. The Pickup URI and state for this country. |
| lfpLink | `LfpLink` | Output only. The established link to a LFP provider. |
| inStock | `InStock` | Optional. The InStock URI and state for this country. |

### `RequestInventoryVerificationRequest`

Request message for the RequestInventoryVerification method.

Type: object

### `RequestInventoryVerificationResponse`

Response message for the RequestInventoryVerification method.

| Field | Type | Description |
|---|---|---|
| omnichannelSetting | `OmnichannelSetting` | The omnichannel setting that was updated. |

### `About`

Collection of information related to the about page ([impressum](https://support.google.com/merchants/answer/14675634?ref_topic=15145634&sjid=6892280366904591178-NC)).

| Field | Type | Description |
|---|---|---|
| uri | string | Required. The about page URI. |
| state | string enum(STATE_UNSPECIFIED, ACTIVE, FAILED, RUNNING, ACTION_REQUIRED) | Output only. The state of the URI. Values: STATE_UNSPECIFIED - Default value. This value is unused.; ACTIVE - The review process has concluded successfully. The reviewed item is active.; FAILED - The review process failed.; RUNNING - The review process is running.; ACTION_REQUIRED - The review process is waiting for the merchant to take action. |

### `InStock`

Collection of information related to InStock.

| Field | Type | Description |
|---|---|---|
| uri | string | Optional. Product landing page URI. It is only used for the review of MHLSF in-stock serving. This URI domain should match with the business's homepage. Required to be empty if the lsf_type is GHLSF, and required when the lsf_type is MHLSF_FULL or MHLSF_BASIC. |
| state | string enum(STATE_UNSPECIFIED, ACTIVE, FAILED, RUNNING, ACTION_REQUIRED) | Output only. The state of the in-stock serving. Values: STATE_UNSPECIFIED - Default value. This value is unused.; ACTIVE - The review process has concluded successfully. The reviewed item is active.; FAILED - The review process failed.; RUNNING - The review process is running.; ACTION_REQUIRED - The review process is waiting for the merchant to take action. |

### `InventoryVerification`

Collection of information related to [inventory verification](https://support.google.com/merchants/answer/14684499?ref_topic=15145634&sjid=6892280366904591178-NC).

| Field | Type | Description |
|---|---|---|
| state | string enum(STATE_UNSPECIFIED, ACTION_REQUIRED, INACTIVE, RUNNING, SUCCEEDED, SUSPENDED) | Output only. The state of the inventory verification process. Values: STATE_UNSPECIFIED - Default value. This value is unused.; ACTION_REQUIRED - When the merchant needs to initiate the inventory verification process. The next state is INACTIVE.; INACTIVE - When the merchant is ready to request inventory verification.; RUNNING - The inventory verification process is running. If the merchant is rejected, the next state is INACTIVE.; SUCCEEDED - The inventory verification process succeeded.; SUSPENDED - When merchant fails the inventory verification process and all attempts are exhausted. |
| contactEmail | string | Required. The email address of the contact for the inventory verification process. |
| contactState | string enum(STATE_UNSPECIFIED, ACTIVE, FAILED, RUNNING, ACTION_REQUIRED) | Output only. The state of the contact verification. Values: STATE_UNSPECIFIED - Default value. This value is unused.; ACTIVE - The review process has concluded successfully. The reviewed item is active.; FAILED - The review process failed.; RUNNING - The review process is running.; ACTION_REQUIRED - The review process is waiting for the merchant to take action. |
| contact | string | Required. The name of the contact for the inventory verification process. |

### `LfpLink`

Collection of information related to the LFP link.

| Field | Type | Description |
|---|---|---|
| state | string enum(STATE_UNSPECIFIED, ACTIVE, FAILED, RUNNING, ACTION_REQUIRED) | Output only. The state of the LFP link. Values: STATE_UNSPECIFIED - Default value. This value is unused.; ACTIVE - The review process has concluded successfully. The reviewed item is active.; FAILED - The review process failed.; RUNNING - The review process is running.; ACTION_REQUIRED - The review process is waiting for the merchant to take action. |
| externalAccountId | string | Required. The account ID by which this merchant is known to the LFP provider. |
| lfpProvider | string | Required. The resource name of the LFP provider. Format: `lfpProviders/{lfp_provider}` |

### `OnDisplayToOrder`

Collection of information related to the on display to order ([ODO](https://support.google.com/merchants/answer/14615056?ref_topic=15145747&sjid=6892280366904591178-NC)).

| Field | Type | Description |
|---|---|---|
| state | string enum(STATE_UNSPECIFIED, ACTIVE, FAILED, RUNNING, ACTION_REQUIRED) | Output only. The state of the URI. Values: STATE_UNSPECIFIED - Default value. This value is unused.; ACTIVE - The review process has concluded successfully. The reviewed item is active.; FAILED - The review process failed.; RUNNING - The review process is running.; ACTION_REQUIRED - The review process is waiting for the merchant to take action. |
| uri | string | Required. The on display to order (ODO) policy URI. |

### `Pickup`

Collection of information related to Pickup.

| Field | Type | Description |
|---|---|---|
| uri | string | Required. Pickup product page URI. It is only used for the review of pickup serving. This URI domain should match with the business's homepage. |
| state | string enum(STATE_UNSPECIFIED, ACTIVE, FAILED, RUNNING, ACTION_REQUIRED) | Output only. The state of the pickup serving. Values: STATE_UNSPECIFIED - Default value. This value is unused.; ACTIVE - The review process has concluded successfully. The reviewed item is active.; FAILED - The review process failed.; RUNNING - The review process is running.; ACTION_REQUIRED - The review process is waiting for the merchant to take action. |

