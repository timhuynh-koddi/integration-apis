# Merchant API accounts_v1: accounts.developerRegistration

> Source: Merchant API `accounts_v1` REST Discovery document (https://merchantapi.googleapis.com/$discovery/rest?version=accounts_v1); overview https://developers.google.com/merchant/api/overview. Fetched 2026-11-19.

---

## accounts.developerRegistration.unregisterGcp

`POST https://merchantapi.googleapis.com/accounts/v1/{+name}:unregisterGcp`

Unregister the calling GCP from the calling Merchant Center account. Note that the GCP will still be able to access the API for at most 1 day from the successful unregistration call. Executing this method requires admin (`ADMIN`) access to the Merchant Center account. For more information, see [Manage and transition Google Cloud projects](https://developers.google.com/merchant/api/guides/accounts/manage-transition-gcp-projects), [Set up authentication for Merchant API](https://developers.google.com/merchant/api/guides/quickstart/authentication), and [Register as a developer](https://developers.google.com/merchant/api/guides/quickstart/registration#prerequisites).

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The name of the developer registration to be created for the merchant account that the GCP will be registered with. Format: `accounts/{account}/developerRegistration` |

**Request body**: `UnregisterGcpRequest`

**Response**: `Empty`

---

## accounts.developerRegistration.getAccountForGcpRegistration

`GET https://merchantapi.googleapis.com/accounts/v1/accounts:getAccountForGcpRegistration`

Retrieves the merchant account that the calling GCP is registered with. For more information, see [Verify your account's connection to Merchant API](https://developers.google.com/merchant/api/guides/accounts/verify-api-access).

**Response**: `GetAccountForGcpRegistrationResponse`

---

## accounts.developerRegistration.getDeveloperRegistration

`GET https://merchantapi.googleapis.com/accounts/v1/{+name}`

Retrieves a developer registration for a merchant.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The `name` (ID) of the developer registration. |

**Response**: `DeveloperRegistration`

---

## accounts.developerRegistration.registerGcp

`POST https://merchantapi.googleapis.com/accounts/v1/{+name}:registerGcp`

Registers the GCP used for the API call to the Merchant Center account passed in the request. Will create a user with an "API developer" and add the "developer_email" as a contact with "API notifications" email preference on. Executing this method requires admin (`ADMIN`) access to the Merchant Center account. For more information, see [Register as a developer](https://developers.google.com/merchant/api/guides/quickstart/registration#prerequisites). Restrictions: * The caller account must be authenticated and must not impersonate another account at registration time. Registering for subaccounts is not supported if the caller account is authenticated with the parent or the managing advanced account. * The caller account must have a [verified website](https://support.google.com/merchants/answer/11586344) in Merchant Center. * [Test accounts](https://developers.google.com/merchant/api/guides/accounts/test-accounts) are not eligible for registration. For step-by-step instructions, see [Register as a developer](https://developers.google.com/merchant/api/guides/quickstart/registration).

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The name of the developer registration to be created for the merchant account that the GCP will be registered with. Format: `accounts/{account}/developerRegistration` The {account} used must be the same account where user calling this API method is directly added to. Note: The account used must be a production account (can't be a [test account](https://developers.google.com/merchant/api/guides/accounts/test-accounts)) and must have a [verified website](https://support.google.com/merchants/answer/11586344) in Merchant Center. |

**Request body**: `RegisterGcpRequest`

**Response**: `DeveloperRegistration`

---

## Schemas

### `UnregisterGcpRequest`

Request message for the UnregisterGCP method.

Type: object

### `Empty`

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

Type: object

### `GetAccountForGcpRegistrationResponse`

Response message for the GetAccountForGcpRegistration method.

| Field | Type | Description |
|---|---|---|
| name | string | The name of the merchant account id that the GCP is registered with. |

### `DeveloperRegistration`

Represents a developer registration owned by a Merchant account. For more information, see [Register as a developer](https://developers.google.com/merchant/api/guides/quickstart/registration) and [Manage and transition Google Cloud projects](https://developers.google.com/merchant/api/guides/accounts/manage-transition-gcp-projects).

| Field | Type | Description |
|---|---|---|
| name | string | Identifier. The `name` (ID) of the developer registration. Generated upon creation of a new `DeveloperRegistration`. The `account` represents the merchant ID of the merchant that owns the registration. |
| gcpIds | array<string> | Output only. The GCP ids attached to this developer registration |

### `RegisterGcpRequest`

Request message for the RegisterGCP method.

| Field | Type | Description |
|---|---|---|
| developerEmail | string | Immutable. Optional field. Developer role can be also added by using `users.update` method. If the developer email provided is associated with a user in the provided merchant account, the user will be updated to have `API_DEVELOPER` `access_rights` and the email preference corresponding to that user will be updated to have the new API notifications preference. If the developer email provided is not associated with any user, it is added as a contact. The email preference corresponding to that contact will have the new API notifications preference. Make sure the email used is associated with a Google Account and is not a service account as service accounts can't receive emails. |

