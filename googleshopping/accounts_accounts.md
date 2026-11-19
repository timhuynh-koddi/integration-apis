# Merchant API accounts_v1: accounts

> Source: Merchant API `accounts_v1` REST Discovery document (https://merchantapi.googleapis.com/$discovery/rest?version=accounts_v1); overview https://developers.google.com/merchant/api/overview. Fetched 2026-11-19.

---

## accounts.createTestAccount

`POST https://merchantapi.googleapis.com/accounts/v1/{+parent}:createTestAccount`

Creates a Merchant Center test account. Test accounts are intended for development and testing purposes, such as validating API integrations or new feature behavior. Key characteristics and limitations of test accounts: - Immutable Type: A test account cannot be converted into a regular (live) Merchant Center account. Likewise, a regular account cannot be converted into a test account. - Non-Serving Products: Any products, offers, or data created within a test account will not be published or made visible to end-users on any Google surfaces. They are strictly for testing environments. - Separate Environment: Test accounts operate in a sandbox-like manner, isolated from live serving and real user traffic. For more information, see [Create test accounts](https://developers.google.com/merchant/api/guides/accounts/test-accounts).

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The account resource name to create the test account under. Format: accounts/{account} |

**Request body**: `Account`

**Response**: `Account`

---

## accounts.get

`GET https://merchantapi.googleapis.com/accounts/v1/{+name}`

Retrieves an account from your Merchant Center account. After inserting, updating, or deleting an account, it may take several minutes before changes take effect.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The name of the account to retrieve. Format: `accounts/{account}` |

**Response**: `Account`

---

## accounts.createAndConfigure

`POST https://merchantapi.googleapis.com/accounts/v1/accounts:createAndConfigure`

Creates a Merchant Center account with additional configuration. Adds the user that makes the request as an admin for the new account. For step-by-step instructions, see [Create accounts](https://developers.google.com/merchant/api/guides/accounts/create-accounts).

**Request body**: `CreateAndConfigureAccountRequest`

**Response**: `Account`

---

## accounts.list

`GET https://merchantapi.googleapis.com/accounts/v1/accounts`

Note: For the `accounts.list` method, quota and limits usage are charged for each user, and not for the Merchant Center ID or the advanced account ID. To list several sub-accounts, you should use the `accounts.listSubaccounts` method, which is more suitable for advanced accounts use case. For more information, see [Filter accounts you can access](https://developers.google.com/merchant/api/guides/accounts/filter).

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| pageSize | query | integer (int32) |  | Optional. The maximum number of accounts to return. The service may return fewer than this value. If unspecified, at most 250 accounts are returned. The maximum value is 500; values above 500 are coerced to 500. |
| filter | query | string |  | Optional. Returns only accounts that match the [filter](https://developers.google.com/merchant/api/guides/accounts/filter). For more details, see the [filter syntax reference](https://developers.google.com/merchant/api/guides/accounts/filter-syntax). |
| pageToken | query | string |  | Optional. A page token, received from a previous `accounts.list` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided in the `accounts.list` request must match the call that provided the page token. |

**Response**: `ListAccountsResponse`

---

## accounts.patch

`PATCH https://merchantapi.googleapis.com/accounts/v1/{+name}`

Updates an account regardless of its type: standalone, advanced account or sub-account. Executing this method requires admin access.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Identifier. The resource name of the account. Format: `accounts/{account}` |
| updateMask | query | string (google-fieldmask) |  | Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `account_name` - `adult_content` - `language_code` - `time_zone` |

**Request body**: `Account`

**Response**: `Account`

---

## accounts.delete

`DELETE https://merchantapi.googleapis.com/accounts/v1/{+name}`

Deletes the specified account regardless of its type: standalone, advanced account or sub-account. Deleting an advanced account leads to the deletion of all of its sub-accounts. This also deletes the account's [developer registration entity](/merchant/api/reference/rest/accounts_v1/accounts.developerRegistration) and any associated GCP project to the account. Executing this method requires admin access. The deletion succeeds only if the account does not provide services to any other account and has no processed offers. You can use the `force` parameter to override this.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The name of the account to delete. Format: `accounts/{account}` |
| force | query | boolean |  | Optional. If set to `true`, the account is deleted even if it provides services to other accounts or has processed offers. |

**Response**: `Empty`

---

## accounts.listSubaccounts

`GET https://merchantapi.googleapis.com/accounts/v1/{+provider}:listSubaccounts`

List all sub-accounts for a given advanced account. This is a convenience wrapper for the more powerful `accounts.list` method. This method will produce the same results as calling `ListsAccounts` with the following filter: `relationship(providerId={parent} AND service(type="ACCOUNT_AGGREGATION"))`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| provider | path | string | yes | Required. The aggregation service provider. Format: `accounts/{accountId}` |
| pageToken | query | string |  | Optional. A page token, received from a previous `accounts.list` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided in the `accounts.list` request must match the call that provided the page token. |
| pageSize | query | integer (int32) |  | Optional. The maximum number of accounts to return. The service may return fewer than this value. If unspecified, at most 250 accounts are returned. The maximum value is 500; values above 500 are coerced to 500. |

**Response**: `ListSubAccountsResponse`

---

## Schemas

### `Account`

The `Account` message represents a business's account within Merchant Center. It's the primary entity for managing product data, settings, and interactions with Google's services and external providers. Accounts can operate as standalone entities or be part of a advanced account structure. In an advanced account setup the parent account manages multiple sub-accounts. Establishing an account involves configuring attributes like the account name, time zone, and language preferences. The `Account` message is the parent entity for many other resources, for example, `AccountRelationship`, `Homepage`, `BusinessInfo` and so on. For more information, see [Sign up for Merchant Center](https://support.google.com/merchants/answer/188924), [Manage accounts and settings](https://developers.google.com/merchant/api/guides/accounts/overview), [Create accounts](https://developers.google.com/merchant/api/guides/accounts/create-accounts), [Create test accounts](https://developers.google.com/merchant/api/guides/accounts/test-accounts), and [Filter accounts you can access](https://developers.google.com/merchant/api/guides/accounts/filter).

| Field | Type | Description |
|---|---|---|
| accountName | string | Required. A human-readable name of the account. Don't use punctuation, capitalization, or non-alphanumeric symbols such as the "/" or "_" symbols. See [Adding a business name](https://support.google.com/merchants/answer/12159159) for more information. |
| adultContent | boolean | Optional. Whether this account contains adult content. |
| accountId | string (int64) | Output only. The ID of the account. |
| homePageUri | string | Output only. URI (typically a URL) of the store's homepage. |
| testAccount | boolean | Output only. Whether this is a test account. |
| name | string | Identifier. The resource name of the account. Format: `accounts/{account}` |
| timeZone | `TimeZone` | Required. The time zone of the account. On writes, `time_zone` sets both the `reporting_time_zone` and the `display_time_zone`. For reads, `time_zone` always returns the `display_time_zone`. If `display_time_zone` doesn't exist for your account, `time_zone` is empty. The `version` field is not supported, won't be set in responses and will be silently ignored if specified in requests. |
| languageCode | string | Required. The account's [BCP-47 language code](https://tools.ietf.org/html/bcp47), such as `en-US` or `sr-Latn`. |

### `CreateAndConfigureAccountRequest`

Request message for the `CreateAndConfigureAccount` method.

| Field | Type | Description |
|---|---|---|
| service | array<`AddAccountService`> | Required. An account service between the account to be created and the provider account is initialized as part of the creation. At least one such service needs to be provided. Currently exactly one of these needs to be `account_aggregation` and `accounts.createAndConfigure` method can be used to create a sub-account under an existing advanced account through this method. Additional `account_management` or `products_management` services may be provided. |
| setAlias | array<`SetAliasForRelationship`> | Optional. If a relationship is created with a provider, you can set an alias for it with this field. The calling user must be an admin on the provider to be able to set an alias. |
| user | array<`AddUser`> | Optional. Users to be added to the account. |
| account | `Account` | Required. The account to be created. |

### `ListAccountsResponse`

Response message for the `accounts.list` method.

| Field | Type | Description |
|---|---|---|
| nextPageToken | string | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. |
| accounts | array<`Account`> | The accounts matching the `ListAccountsRequest`. |

### `Empty`

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

Type: object

### `ListSubAccountsResponse`

Response message for the `ListSubAccounts` method.

| Field | Type | Description |
|---|---|---|
| accounts | array<`Account`> | The accounts for which the given parent account is an aggregator. |
| nextPageToken | string | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. |

### `TimeZone`

Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).

| Field | Type | Description |
|---|---|---|
| version | string | Optional. IANA Time Zone Database version number. For example "2019a". |
| id | string | IANA Time Zone Database time zone. For example "America/New_York". |

### `AddAccountService`

Additional instructions to add account services during creation of the account.

| Field | Type | Description |
|---|---|---|
| provider | string | Required. The provider of the service. Either the reference to an account such as `providers/123` or a well-known service provider (one of `providers/GOOGLE_ADS` or `providers/GOOGLE_BUSINESS_PROFILE`). |
| externalAccountId | string | Immutable. An optional, immutable identifier that Google uses to refer to this account when communicating with the provider. This should be the unique account ID within the provider's system (for example, your shop ID in Shopify). If you have multiple accounts with the same provider - for instance, different accounts for various regions — the `external_account_id` differentiates between them, ensuring accurate linking and integration between Google and the provider. The external account ID must be specified for the campaigns management service type. The external account ID must not be specified for the account aggregation service type. The external account ID is optional / may be specified for all other service types. |
| comparisonShopping | `ComparisonShopping` | The provider is a CSS (Comparison Shopping Service) of this account. Payload for service type Comparison Shopping. |
| accountManagement | `AccountManagement` | The provider manages this account. Payload for service type Account Management. |
| productsManagement | `ProductsManagement` | The provider manages products for this account. Payload for service type products management. |
| campaignsManagement | `CampaignsManagement` | The provider manages campaigns for this account. Payload for service type campaigns management. |
| accountAggregation | `AccountAggregation` | The provider is an [aggregator](https://support.google.com/merchants/answer/188487) for the account. Payload for service type Account Aggregation. |

### `AddUser`

Instruction for adding a user to the account during creation.

| Field | Type | Description |
|---|---|---|
| userId | string | Required. The email address of the user (for example, `john.doe@gmail.com`). |
| user | `User` | Optional. Details about the user to be added. At the moment, only access rights may be specified. |
| verificationMailSettings | `VerificationMailSettings` | Optional. Settings related to configuring the verification email that is sent after adding a user. |

### `SetAliasForRelationship`

Set an alias for a relationship between a provider and the account to be created.

| Field | Type | Description |
|---|---|---|
| accountIdAlias | string | Required. The unique ID of this account in the provider's system. The value must be unique across all accounts on the platform for this provider. |
| provider | string | Required. The provider of the service. This is a reference to an account such as `providers/123` or `accounts/123`. The same provider must be specified in at least one of the `service` fields. |

### `AccountAggregation`

`AccountAggregation` payload.

Type: object

### `AccountManagement`

`AccountManagement` payload.

Type: object

### `CampaignsManagement`

`CampaignManagement` payload.

Type: object

### `ComparisonShopping`

`ComparisonShopping` payload.

Type: object

### `ProductsManagement`

`ProductsManagement` payload.

Type: object

### `User`

The `User` resource represents a user associated with a Merchant Center account. It is used to manage user permissions and access rights within the account. For more information, see [Frequently asked questions about people and access levels](//support.google.com/merchants/answer/12160472) and [Control access to your account](https://developers.google.com/merchant/api/guides/accounts/control-access).

| Field | Type | Description |
|---|---|---|
| state | string enum(STATE_UNSPECIFIED, PENDING, VERIFIED) | Output only. The state of the user. Values: STATE_UNSPECIFIED - Default value. This value is unused.; PENDING - The user is pending confirmation. In this state, the user first needs to accept the invitation before performing other actions.; VERIFIED - The user is verified. |
| accessRights | array<string enum(ACCESS_RIGHT_UNSPECIFIED, STANDARD, READ_ONLY, ADMIN, PERFORMANCE_REPORTING, API_DEVELOPER)> | Required. The [access rights](https://support.google.com/merchants/answer/12160472#accesstypes) the user has. |
| name | string | Identifier. The resource name of the user. Format: `accounts/{account}/user/{email}` Use `me` to refer to your own email address, for example `accounts/{account}/users/me`. |

### `VerificationMailSettings`

Settings related to the verification email that is sent after adding a user.

| Field | Type | Description |
|---|---|---|
| verificationMailMode | string enum(VERIFICATION_MAIL_MODE_UNSPECIFIED, SEND_VERIFICATION_MAIL, SUPPRESS_VERIFICATION_MAIL) | Optional. Mode of the verification mail. If not set, the default is `SEND_VERIFICATION_MAIL`. Values: VERIFICATION_MAIL_MODE_UNSPECIFIED - Default first member of every enum. Do not use.; SEND_VERIFICATION_MAIL - An invitation email is sent to the user added shortly after.; SUPPRESS_VERIFICATION_MAIL - No invitation email is sent. This can be useful if the user is expected to accept the invitation through the API without needing another notification. |

