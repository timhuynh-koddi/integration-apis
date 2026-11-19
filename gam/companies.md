# Companies

> Source: Google Ad Manager API (beta, REST v1) Discovery document (https://admanager.googleapis.com/$discovery/rest?version=v1, revision 20261118); release notes https://developers.google.com/ad-manager/api/beta/docs/release-notes. Fetched 2026-11-19. Resource names have the form `networks/{networkCode}/...`.

Used by koddi-offsite via: SOAP `CompanyService.getCompaniesByStatement` / `createCompanies`.

---

## networks.companies.patch

`PATCH https://admanager.googleapis.com/v1/{+name}`

Updates a Company object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Identifier. The resource name of the Company. Format: `networks/{network_code}/companies/{company_id}` |
| updateMask | query | string (google-fieldmask) |  | Optional. The list of fields to update. |

**Request body**: `Company`

**Response**: `Company`

---

## networks.companies.get

`GET https://admanager.googleapis.com/v1/{+name}`

Retrieves a Company object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The resource name of the Company. Format: `networks/{network_code}/companies/{company_id}` |

**Response**: `Company`

---

## networks.companies.create

`POST https://admanager.googleapis.com/v1/{+parent}/companies`

Creates a Company object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where this Company will be created. Format: `networks/{network_code}` |

**Request body**: `Company`

**Response**: `Company`

---

## networks.companies.list

`GET https://admanager.googleapis.com/v1/{+parent}/companies`

Lists Company objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of Companies. Format: `networks/{network_code}` |
| skip | query | integer (int32) |  | Optional. Number of individual resources to skip while paginating. |
| orderBy | query | string |  | Optional. Expression to specify sorting order. See syntax details at https://developers.google.com/ad-manager/api/beta/filters#order |
| filter | query | string |  | Optional. Expression to filter the response. See syntax details at https://developers.google.com/ad-manager/api/beta/filters Syntax summary: double-quoted `"..."` (never `'...'`) strings and RFC 3339 timestamps, full resource names on reference fields (for example, `order = "networks/123/orders/456"`, not `*Id` or bare IDs), prefix or suffix `*` wildcards with `=` (`displayName = "foo*"`), `:` for substring or repeated-field matching, unquoted enums and booleans, uppercase `AND`/`OR`/`NOT`, and standalone `IN(field, SET(v1, v2))` (not `field IN (...)`). **Filterable fields:** * `address` * `comment` * `companyId` * `creditStatus` * `displayName` * `email` * `externalId` * `fax` * `name` * `phone` * `thirdPartyCompanyId` * `type` * `updateTime` |
| pageToken | query | string |  | Optional. A page token, received from a previous `ListCompanies` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCompanies` must match the call that provided the page token. |
| pageSize | query | integer (int32) |  | Optional. The maximum number of Companies to return. The service may return fewer than this value. If unspecified, at most 50 Companies will be returned. The maximum value is 1000; values greater than 1000 will be coerced to 1000. |

**Response**: `ListCompaniesResponse`

---

## networks.companies.batchCreate

`POST https://admanager.googleapis.com/v1/{+parent}/companies:batchCreate`

Creates Company objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where Companies will be created. Format: `networks/{network_code}` The parent field in the CreateCompanyRequest must match this field. |

**Request body**: `BatchCreateCompaniesRequest`

**Response**: `BatchCreateCompaniesResponse`

---

## networks.companies.batchUpdate

`POST https://admanager.googleapis.com/v1/{+parent}/companies:batchUpdate`

Batch updates Company objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where Companies will be updated. Format: `networks/{network_code}` The parent field in the UpdateCompanyRequest must match this field. |

**Request body**: `BatchUpdateCompaniesRequest`

**Response**: `BatchUpdateCompaniesResponse`

---

## Schemas

### `Company`

The Company resource.

| Field | Type | Description |
|---|---|---|
| phone | string | Optional. The phone number for the Company. This value has a maximum length of 63 characters. |
| creditStatus | string enum(COMPANY_CREDIT_STATUS_UNSPECIFIED, ACTIVE, INACTIVE, ON_HOLD, STOP, BLOCKED) | Optional. The credit status of the Company. This attribute defaults to CompanyCreditStatusEnum.CompanyCreditStatus.ACTIVE if basic settings are enabled and CompanyCreditStatusEnum.CompanyCreditStatus.ON_HOLD if advance settings are enabled. Values: COMPANY_CREDIT_STATUS_UNSPECIFIED - No value specified; ACTIVE - The company's credit status is active. Line items belonging to the company can serve. This credit status is the default for basic settings and is available in both basic and advance settings.; INACTIVE - The company's credit status is inactive. Line items belonging to the company cannot be activated. However, line items that were activated before the credit status changed will remain active. New orders or line items belonging to the company cannot be created. Companies with this credit status will be hidden by default in company search results. This credit status is available in both basic and advance settings.; ON_HOLD - The company's credit status is on hold. Line items belonging to the company cannot be activated. However, line items that were activated before the credit status changed will remain active. New orders or line items belonging to the company can be created. This credit status is the default in advance settings and is only available in advance settings.; STOP - The company's credit status is stopped. Line items belonging to the company cannot be activated. However, line items that were activated before the credit status changed will remain active. New orders or line items belonging to the company cannot be created. This credit status is only available in advance settings.; BLOCKED - The company's credit status is blocked. All active line items belonging to the company will stop serving with immediate effect. Line items belonging to the company cannot be activated, and new orders or line items belonging to the company cannot be created. This credit status is only available in advance settings. |
| thirdPartyCompanyId | string (int64) | Optional. The ID of the Google-recognized canonicalized form of the Company. |
| address | string | Optional. The address for the Company. This value has a maximum length of 1024 characters. |
| email | string | Optional. The email for the Company. This value has a maximum length of 128 characters. |
| companyId | string (int64) | Output only. Deprecated: Company ID. |
| updateTime | string (google-datetime) | Output only. The time the Company was last modified. |
| displayName | string | Required. The display name of the Company. This value has a maximum length of 127 characters. |
| appliedLabels | array<`AppliedLabel`> | Optional. The labels that are directly applied to the Company. |
| type | string enum(COMPANY_TYPE_UNSPECIFIED, ADVERTISER, HOUSE_ADVERTISER, AGENCY, HOUSE_AGENCY, AD_NETWORK) | Required. The type of the Company. Values: COMPANY_TYPE_UNSPECIFIED - No value specified; ADVERTISER - A business entity that purchases ad inventory.; HOUSE_ADVERTISER - A company representing the publisher's own advertiser for house ads.; AGENCY - An organization that manages ad accounts and offers services, such as ad creation, placement, and management to advertisers.; HOUSE_AGENCY - A company representing the publisher's own agency.; AD_NETWORK - A company representing multiple advertisers and agencies. |
| comment | string | Optional. Comments about the Company. This value has a maximum length of 1024 characters. |
| appliedTeams | array<string> | Optional. The resource names of Teams that are directly associated with the Company. Format: "networks/{network_code}/teams/{team_id}" |
| primaryContact | string | Optional. The resource names of primary Contact of the Company. Format: "networks/{network_code}/contacts/{contact_id}" |
| externalId | string | Optional. The external ID for the Company. This value has a maximum length of 255 characters. |
| name | string | Identifier. The resource name of the Company. Format: `networks/{network_code}/companies/{company_id}` |
| fax | string | Optional. The fax number for the Company. This value has a maximum length of 63 characters. |

### `ListCompaniesResponse`

Response object for `ListCompaniesRequest` containing matching Company objects.

| Field | Type | Description |
|---|---|---|
| nextPageToken | string | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. |
| totalSize | integer (int32) | Total number of Company objects. If a filter was included in the request, this reflects the total number after the filtering is applied. `total_size` won't be calculated in the response unless it has been included in a response field mask. The response field mask can be provided to the method by using the URL parameter `$fields` or `fields`, or by using the HTTP/gRPC header `X-Goog-FieldMask`. For more information, see https://developers.google.com/ad-manager/api/beta/field-masks |
| companies | array<`Company`> | The Company objects from the specified network. |

### `BatchCreateCompaniesRequest`

Request object for `BatchCreateCompanies` method.

| Field | Type | Description |
|---|---|---|
| requests | array<`CreateCompanyRequest`> | Required. The Company objects to create. A maximum of 100 objects can be created in a batch. |

### `BatchCreateCompaniesResponse`

Response object for `BatchCreateCompanies` method.

| Field | Type | Description |
|---|---|---|
| companies | array<`Company`> | The Company objects created. |

### `BatchUpdateCompaniesRequest`

Request object for `BatchUpdateCompanies` method.

| Field | Type | Description |
|---|---|---|
| requests | array<`UpdateCompanyRequest`> | Required. The Company objects to update. A maximum of 100 objects can be updated in a batch. |

### `BatchUpdateCompaniesResponse`

Response object for `BatchUpdateCompanies` method.

| Field | Type | Description |
|---|---|---|
| companies | array<`Company`> | The Company objects updated. |

### `AppliedLabel`

Represents a Label that can be applied to an entity.

| Field | Type | Description |
|---|---|---|
| label | string | Required. The label to be applied. Format: "networks/{network_code}/labels/{label_id}" |
| negated | boolean | Specifies whether or not to negate the effects of the label. |

### `CreateCompanyRequest`

Request object for `CreateCompany` method.

| Field | Type | Description |
|---|---|---|
| parent | string | Required. The parent resource where this Company will be created. Format: `networks/{network_code}` |
| company | `Company` | Required. The Company to create. |

### `UpdateCompanyRequest`

Request object for `UpdateCompany` method.

| Field | Type | Description |
|---|---|---|
| company | `Company` | Required. The Company to update. The Company's `name` is used to identify the Company to update. |
| updateMask | string (google-fieldmask) | Optional. The list of fields to update. |

