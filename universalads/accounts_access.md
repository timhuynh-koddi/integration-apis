# Universal Ads API v1: Accounts & Access

> Source: Universal Ads Third Party API OpenAPI spec (v0.1.0), embedded in https://developers.universalads.com/static/campaign-management/campaign-introduction. Base URL: https://api.universalads.com/v1. Fetched 2026-11-19.

Operations: 4

---

## POST /adaccount

**Create Ad Account**

Create an ad account (TPA developer API).

Operation ID: `create_ad_account_adaccount_post`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Request body** (`application/json`, required): object{organization_id: string (uuid4), name: string, domain: string (uri), category: string enum(Apparel, Appliances, Automotive, Alcohol, Food & Beverage, Business Services, Educational Services, Entertainment, Financial Services, Government, Health & Fitness, Insurance, Jewelry, Other, Personal Care, Real Estate, Retail, Travel, Law, Gov't & Politics, Gambling/Casino, Financial Planning)}

**Response 200** (`application/json`): object{id: string (uuid4), name: string | null, organization_id: string (uuid4), timezone: string enum(America/New_York, America/Chicago, America/Denver, America/Los_Angeles, Europe/London) | null}

---

## PUT /adaccount/{adaccount_id}

**Update Ad Account**

Update an ad account (TPA developer API).

Operation ID: `update_ad_account_adaccount__adaccount_id__put`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| adaccount_id | path | string (uuid) | yes | Unique identifier of the ad account |

**Request body** (`application/json`, required): object{name: string}

**Response 200** (`application/json`): object{id: string (uuid4), name: string | null, organization_id: string (uuid4), timezone: string enum(America/New_York, America/Chicago, America/Denver, America/Los_Angeles, Europe/London) | null}

---

## GET /me/adaccounts

**Get Adaccounts**

Get all ad accounts visible to the authenticated application or OAuth actor.
Signed apps use application scopes; OAuth actors use membership intersected
with the grant, returned in the signed response shape.

Operation ID: `get_adaccounts_me_adaccounts_get`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| limit | query | integer |  | Number of items to retrieve per page _(default 10; minimum 1; maximum 100)_ |
| offset | query | integer |  | Pagination offset for retrieving the next set of items _(default 0; minimum 0)_ |
| organization_id | query | array<string (uuid4)> \| null |  | Return only ad accounts in any of these organizations (repeat query parameter for multiple values) |
| authorization_status | query | array<string enum(PENDING, ACTIVE, REJECTED, LOCKED, INACTIVE, DELETED)> \| null |  | Scopes with any of these statuses (OR; repeat parameter). Each value must be a valid ApplicationScopeStatus. Omitted means ACTIVE only in the use case |

**Response 200** (`application/json`): object{data: array<object{id: string (uuid4), name: string | null, organization_id: string (uuid4), organization_name: string | null, authorization_status: string enum(PENDING, ACTIVE, REJECTED, LOCKED, INACTIVE, DELETED), scope_level: string enum(organization, adaccount), timezone: string enum(America/New_York, America/Chicago, America/Denver, America/Los_Angeles, Europe/London) | null}>, count: integer, limit: integer, offset: integer}

---

## GET /me/organizations

**Get Organizations**

Get all organizations visible to the authenticated application or OAuth actor.
Signed apps see organization-level scopes; OAuth actors see membership
intersected with the grant (system users bound to their own organization).

Operation ID: `get_organizations_me_organizations_get`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| limit | query | integer |  | Number of items to retrieve per page _(default 10; minimum 1; maximum 100)_ |
| offset | query | integer |  | Pagination offset for retrieving the next set of items _(default 0; minimum 0)_ |

**Response 200** (`application/json`): object{data: array<object{id: string (uuid4), name: string | null, authorization_status: string enum(PENDING, ACTIVE, REJECTED, LOCKED, INACTIVE, DELETED), timezone: string enum(America/New_York, America/Chicago, America/Denver, America/Los_Angeles, Europe/London) | null}>, count: integer, limit: integer, offset: integer}

