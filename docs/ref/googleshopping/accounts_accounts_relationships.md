# Merchant API accounts_v1: accounts.relationships

> Source: Merchant API `accounts_v1` REST Discovery document (https://merchantapi.googleapis.com/$discovery/rest?version=accounts_v1); overview https://developers.google.com/merchant/api/overview. Fetched 2026-11-19.

---

## accounts.relationships.list

`GET https://merchantapi.googleapis.com/accounts/v1/{+parent}/relationships`

List account relationships for the specified account.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent account of the account relationship to filter by. Format: `accounts/{account}` |
| pageToken | query | string |  | Optional. The token returned by the previous `list` request. |
| pageSize | query | integer (int32) |  | Optional. The maximum number of elements to return in the response. Use for paging. If no `page_size` is specified, `100` is used as the default value. The maximum allowed value is `1000`. |

**Response**: `ListAccountRelationshipsResponse`

---

## accounts.relationships.get

`GET https://merchantapi.googleapis.com/accounts/v1/{+name}`

Retrieve an account relationship.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The resource name of the account relationship to get. Format: `accounts/{account}/relationships/{relationship}`. For example, `accounts/123456/relationships/567890`. |

**Response**: `AccountRelationship`

---

## accounts.relationships.patch

`PATCH https://merchantapi.googleapis.com/accounts/v1/{+name}`

Updates the account relationship. Executing this method requires admin access.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Identifier. The resource name of the account relationship. Format: `accounts/{account}/relationships/{relationship}`. For example, `accounts/123456/relationships/567890`. |
| updateMask | query | string (google-fieldmask) |  | Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `account_id_alias` |

**Request body**: `AccountRelationship`

**Response**: `AccountRelationship`

---

## Schemas

### `ListAccountRelationshipsResponse`

Response after trying to list account relationships.

| Field | Type | Description |
|---|---|---|
| nextPageToken | string | A page token. You can send the `page_token` to get the next page. Only included in the `list` response if there are more pages. |
| accountRelationships | array<`AccountRelationship`> | The account relationships that match your filter. |

### `AccountRelationship`

The `AccountRelationship` message defines a formal connection between a merchant's account and a service provider's account. This relationship enables the provider to offer specific services to the business, such as product management or campaign management. It specifies the access rights and permissions to the business's data relevant to those services. Establishing an account relationship involves linking the merchant's account with a provider's account. The provider could be another Google account (like Google Ads or Google My Business) or a third-party platform (such as Shopify or WooCommerce). For more information, see [Account relationships](https://developers.google.com/merchant/api/guides/accounts/relationships).

| Field | Type | Description |
|---|---|---|
| accountIdAlias | string | Optional. An optional alias you can assign to this account relationship. This alias acts as a convenient identifier for your own reference and management. It must be unique among all your account relationships with the same provider. For example, you might use `account_id_alias` to assign a friendly name to this relationship for easier identification in your systems. |
| name | string | Identifier. The resource name of the account relationship. Format: `accounts/{account}/relationships/{relationship}`. For example, `accounts/123456/relationships/567890`. |
| provider | string | Immutable. The provider of the service. Either the reference to an account such as `providers/123` or a well-known service provider (one of `providers/GOOGLE_ADS` or `providers/GOOGLE_BUSINESS_PROFILE`). |
| providerDisplayName | string | Output only. The human-readable display name of the provider account. |

