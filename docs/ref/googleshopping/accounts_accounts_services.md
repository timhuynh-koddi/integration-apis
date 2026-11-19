# Merchant API accounts_v1: accounts.services

> Source: Merchant API `accounts_v1` REST Discovery document (https://merchantapi.googleapis.com/$discovery/rest?version=accounts_v1); overview https://developers.google.com/merchant/api/overview. Fetched 2026-11-19.

---

## accounts.services.list

`GET https://merchantapi.googleapis.com/accounts/v1/{+parent}/services`

List account services for the specified accounts. Supports filtering.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent account of the account service to filter by. Format: `accounts/{account}` |
| pageSize | query | integer (int32) |  | Optional. The maximum number of elements to return in the response. Use for paging. If no `page_size` is specified, `100` is used as the default value. The maximum allowed value is `1000`. |
| pageToken | query | string |  | Optional. The token returned by the previous `list` request. |

**Response**: `ListAccountServicesResponse`

---

## accounts.services.propose

`POST https://merchantapi.googleapis.com/accounts/v1/{+parent}/services:propose`

Propose an account service.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The resource name of the parent account for the service. Format: `accounts/{account}` |

**Request body**: `ProposeAccountServiceRequest`

**Response**: `AccountService`

---

## accounts.services.approve

`POST https://merchantapi.googleapis.com/accounts/v1/{+name}:approve`

Approve an account service proposal.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The resource name of the account service to approve. Format: `accounts/{account}/services/{service}` |

**Request body**: `ApproveAccountServiceRequest`

**Response**: `AccountService`

---

## accounts.services.get

`GET https://merchantapi.googleapis.com/accounts/v1/{+name}`

Retrieve an account service.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The resource name of the account service to get. Format: `accounts/{account}/services/{service}` |

**Response**: `AccountService`

---

## accounts.services.reject

`POST https://merchantapi.googleapis.com/accounts/v1/{+name}:reject`

Reject an account service (both proposed and approve services can be rejected).

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The resource name of the account service to reject. Format: `accounts/{account}/services/{service}` |

**Request body**: `RejectAccountServiceRequest`

**Response**: `Empty`

---

## Schemas

### `ListAccountServicesResponse`

Response after trying to list account services.

| Field | Type | Description |
|---|---|---|
| nextPageToken | string | A page token. You can send the `page_token` to get the next page. Only included in the `list` response if there are more pages. |
| accountServices | array<`AccountService`> | The account services that match your filter. |

### `ProposeAccountServiceRequest`

Request to propose an account service.

| Field | Type | Description |
|---|---|---|
| provider | string | Required. The provider of the service. Either the reference to an account such as `providers/123` or a well-known service provider (one of `providers/GOOGLE_ADS` or `providers/GOOGLE_BUSINESS_PROFILE`). |
| accountService | `AccountService` | Required. The account service to propose. |

### `AccountService`

The `AccountService` message represents a specific service that a provider account offers to a Merchant Center account. `AccountService` defines the permissions and capabilities granted to the provider, allowing for operations such as product management or campaign management. The lifecycle of an `AccountService` involves a proposal phase, where one party suggests the service, and an approval phase, where the other party accepts or rejects it. This handshake mechanism ensures mutual consent before any access is granted. This mechanism safeguards both parties by ensuring that access rights are granted appropriately and that both the business and provider are aware of the services enabled. In scenarios where a user is an admin of both accounts, the approval can happen automatically. The mutability of a service is also managed through `AccountService`. Some services might be immutable, for example, if they were established through other systems or APIs, and you cannot alter them through this API. For more information, see [Account relationships](https://developers.google.com/merchant/api/guides/accounts/relationships) and [Account service changes](https://developers.google.com/merchant/api/guides/notifications/account-service-changes).

| Field | Type | Description |
|---|---|---|
| handshake | `Handshake` | Output only. Information about the state of the service in terms of establishing it (e.g. is it pending approval or approved). |
| accountManagement | `AccountManagement` | Service type for account management. Enables the provider to perform administrative actions on the business's account, such as configuring account settings, managing users, or updating business information. |
| productsManagement | `ProductsManagement` | Service type for managing products. This allows the provider to handle product data on behalf of the business, including reading and writing product listings. It's commonly used when the provider offers inventory management or catalog synchronization services to keep the business's product information up-to-date across platforms. |
| campaignsManagement | `CampaignsManagement` | Service type for managing advertising campaigns. Grants the provider access to create and manage the business's ad campaigns, including setting up campaigns, adjusting bids, and optimizing performance. |
| provider | string | Output only. The provider of the service. Either the reference to an account such as `providers/123` or a well-known service provider (one of `providers/GOOGLE_ADS` or `providers/GOOGLE_BUSINESS_PROFILE`). |
| localListingManagement | `LocalListingManagement` | Service type for local listings management. The business group associated with the external account id will be used to provide local inventory to this Merchant Center account. |
| comparisonShopping | `ComparisonShopping` | Service type for comparison shopping. The provider is a CSS (Comparison Shopping Service) managing the account. See https://support.google.com/merchants/answer/12653197 |
| mutability | string enum(MUTABILITY_UNSPECIFIED, MUTABLE, IMMUTABLE) | Output only. Whether the service is mutable (e.g. through Approve / Reject RPCs). A service that was created through another system or API might be immutable. Values: MUTABILITY_UNSPECIFIED - Unused default value; MUTABLE - The service can be mutated without restrictions.; IMMUTABLE - The service is read-only and must not be mutated. |
| externalAccountId | string | Immutable. An optional, immutable identifier that Google uses to refer to this account when communicating with the provider. This should be the unique account ID within the provider's system (for example, your shop ID in Shopify). If you have multiple accounts with the same provider - for instance, different accounts for various regions — the `external_account_id` differentiates between them, ensuring accurate linking and integration between Google and the provider. |
| accountAggregation | `AccountAggregation` | Service type for account aggregation. This enables the provider, which is a multi-client advanced account, to manage multiple sub-accounts (client accounts). Through this service, the service provider can perform administrative and operational tasks across all linked sub-accounts. This is used by store builders (ecommerce platforms), channel partners, marketplaces, multi-brand retailers, and international retailers that need centralized control over sub-accounts in Merchant Center. |
| name | string | Identifier. The resource name of the account service. Format: `accounts/{account}/services/{service}` |
| providerDisplayName | string | Output only. The human-readable display name of the provider account. |

### `ApproveAccountServiceRequest`

Request to approve an account service.

Type: object

### `RejectAccountServiceRequest`

Request to reject an account service.

Type: object

### `Empty`

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

Type: object

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

### `Handshake`

The current status of establishing of the service. (for example, pending approval, approved, established).

| Field | Type | Description |
|---|---|---|
| approvalState | string enum(APPROVAL_STATE_UNSPECIFIED, PENDING, WAITING, ESTABLISHED, REJECTED) | Output only. The approval state of this handshake. Values: APPROVAL_STATE_UNSPECIFIED - Unspecified approval status.; PENDING - The service was proposed and is waiting to be confirmed.; WAITING - Indicates that the service proposal has been accepted and will be established after a fixed delay set by the service provider.; ESTABLISHED - Both parties have confirmed the service.; REJECTED - The service proposal was rejected. |
| actor | string enum(ACTOR_UNSPECIFIED, ACCOUNT, OTHER_PARTY) | Output only. The most recent account to modify the account service's `approval_status`. Values: ACTOR_UNSPECIFIED - Unspecified actor.; ACCOUNT - The last change was done by the account who has this service.; OTHER_PARTY - The last change was done by the other party who this service points to. |

### `LocalListingManagement`

`LocalListingManagement` payload.

Type: object

### `ProductsManagement`

`ProductsManagement` payload.

Type: object

