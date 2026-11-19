# Merchant API accounts_v1: accounts.businessIdentity

> Source: Merchant API `accounts_v1` REST Discovery document (https://merchantapi.googleapis.com/$discovery/rest?version=accounts_v1); overview https://developers.google.com/merchant/api/overview. Fetched 2026-11-19.

---

## accounts.businessIdentity.getBusinessIdentity

`GET https://merchantapi.googleapis.com/accounts/v1/{+name}`

Retrieves the business identity of an account.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The resource name of the business identity. Format: `accounts/{account}/businessIdentity`. For example, `accounts/123456/businessIdentity`. |

**Response**: `BusinessIdentity`

---

## accounts.businessIdentity.updateBusinessIdentity

`PATCH https://merchantapi.googleapis.com/accounts/v1/{+name}`

Updates the business identity of an account. Executing this method requires admin access.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Identifier. The resource name of the business identity. Format: `accounts/{account}/businessIdentity` |
| updateMask | query | string (google-fieldmask) |  | Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `black_owned` - `latino_owned` - `promotions_consent` - `small_business` - `veteran_owned` - `women_owned` |

**Request body**: `BusinessIdentity`

**Response**: `BusinessIdentity`

---

## Schemas

### `BusinessIdentity`

Collection of information related to the [identity of a business](https://support.google.com/merchants/answer/12564247). For more information, see [Manage business identity](https://developers.google.com/merchant/api/guides/accounts/business-identity).

| Field | Type | Description |
|---|---|---|
| smallBusiness | `IdentityAttribute` | Optional. Specifies whether the business identifies itself as a small business. This optional field will only be available for businesses with a business country set to `US`. It is also not applicable for marketplaces. |
| blackOwned | `IdentityAttribute` | Optional. Specifies whether the business identifies itself as being black-owned. This optional field will only be available for businesses with the business country set to `US`. It is also not applicable for marketplaces or marketplace sellers. |
| womenOwned | `IdentityAttribute` | Optional. Specifies whether the business identifies itself as being women-owned. This optional field will only be available for businesses with a business country set to `US`. It is also not applicable for marketplaces or marketplace sellers. |
| veteranOwned | `IdentityAttribute` | Optional. Specifies whether the business identifies itself as being veteran-owned. This optional field will only be available for businesses with a business country set to `US`. It is also not applicable for marketplaces or marketplace sellers. |
| latinoOwned | `IdentityAttribute` | Optional. Specifies whether the business identifies itself as being latino-owned. This optional field will only be available for businesses with the business country set to `US`. It is also not applicable for marketplaces or marketplace sellers. |
| name | string | Identifier. The resource name of the business identity. Format: `accounts/{account}/businessIdentity` |
| promotionsConsent | string enum(PROMOTIONS_CONSENT_UNSPECIFIED, PROMOTIONS_CONSENT_GIVEN, PROMOTIONS_CONSENT_DENIED) | Required. Whether the identity attributes may be used for promotions. Values: PROMOTIONS_CONSENT_UNSPECIFIED - Default value indicating that no selection was made.; PROMOTIONS_CONSENT_GIVEN - Indicates that the account consented to having their business identity used for promotions.; PROMOTIONS_CONSENT_DENIED - Indicates that the account did not consent to having their business identity used for promotions. |

### `IdentityAttribute`

All information related to an identity attribute.

| Field | Type | Description |
|---|---|---|
| identityDeclaration | string enum(IDENTITY_DECLARATION_UNSPECIFIED, SELF_IDENTIFIES_AS, DOES_NOT_SELF_IDENTIFY_AS) | Required. The declaration of identity for this attribute. Values: IDENTITY_DECLARATION_UNSPECIFIED - Default value indicating that no selection was made.; SELF_IDENTIFIES_AS - Indicates that the account identifies with the attribute.; DOES_NOT_SELF_IDENTIFY_AS - Indicates that the account does not identify with the attribute. |

