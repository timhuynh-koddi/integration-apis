# Universal Ads API v1: Creative Management

> Source: Universal Ads Third Party API OpenAPI spec (v0.1.0), embedded in https://developers.universalads.com/static/campaign-management/campaign-introduction. Base URL: https://api.universalads.com/v1. Fetched 2026-11-19.

Operations: 5

---

## GET /creative

**Get Creatives**

Retrieve a list of creatives for the given ad account, campaign, ad set, or ad.

Operation ID: `get_creatives_creative_get`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| sort | query | string enum(id, -id, name, -name, status, -status, approval_status, -approval_status, display_status, -display_status, duration, -duration, created_at, -created_at) |  | Field by which to sort. Use '-' prefix for descending order. _(default "id")_ |
| adaccount_id | query | string (uuid4) \| null |  |  |
| campaign_id | query | string (uuid4) \| null |  |  |
| adset_id | query | string (uuid4) \| null |  |  |
| ad_id | query | string (uuid4) \| null |  |  |
| limit | query | integer |  | Number of items to retrieve per page _(default 10; minimum 1; maximum 100)_ |
| offset | query | integer |  | Pagination offset for retrieving the next set of items _(default 0; minimum 0)_ |

**Response 200** (`application/json`): object{data: array<object{id: string (uuid4), name: string | null, url: string | null, thumbnail_url: string | null, status: string enum(active, error, pending, deleted, rejected), duration: number | null, ad_usage: integer, ad_set_usage: integer, created_at: string (date-time), message: string | null, political_details: object | null, approval_status: string enum(not_required, pending, locked, approved, rejected), display_status: string enum(active, under_review, not_approved) | null, jurisdiction_scope: string enum(federal_national, state_local) | null, creative_type: string enum(VIDEO, EXTERNAL_VAST), vast_url: string | null, vast_mime_types: array<string enum(video/mp4, video/quicktime)> | null}>, count: integer, limit: integer, offset: integer}

---

## POST /creative

**Create Creative**

Create a creative in an Ad Account.

Operation ID: `create_creative_creative_post`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Request body** (`application/json`, required): object{adaccount_id: string (uuid4), name: string, media_id: string (uuid4), political_details: object{candidate_legal_name: string | null, office_sought: string | null, election_date: string (date) | null, content_classification: string enum(federal_national, state_local) | null, content_details: string | null} | null, jurisdiction_scope: string enum(federal_national, state_local) | null}

**Response 200** (`application/json`): object{id: string (uuid4), name: string | null, url: string | null, thumbnail_url: string | null, status: string enum(active, error, pending, deleted, rejected), duration: number | null, ad_usage: integer, ad_set_usage: integer, created_at: string (date-time), message: string | null, political_details: object{subject_matter: string enum(candidate_advocacy, non_candidate_advocacy), candidate_legal_name: string | null, office_sought: string | null, election_date: string (date) | null, content_classification: string enum(federal_national, state_local) | null, content_details: string | null} | null, approval_status: string enum(not_required, pending, locked, approved, rejected), display_status: string enum(active, under_review, not_approved) | null, jurisdiction_scope: string enum(federal_national, state_local) | null, creative_type: string enum(VIDEO, EXTERNAL_VAST), vast_url: string | null, vast_mime_types: array<string enum(video/mp4, video/quicktime)> | null}

---

## GET /creative/{creative_id}

**Get Creative By Id**

Retrieve information on a specific creative by its ID.

Operation ID: `get_creative_by_id_creative__creative_id__get`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| creative_id | path | string (uuid) | yes | Unique identifier of the creative to retrieve |

**Response 200** (`application/json`): object{id: string (uuid4), name: string | null, url: string | null, thumbnail_url: string | null, status: string enum(active, error, pending, deleted, rejected), duration: number | null, ad_usage: integer, ad_set_usage: integer, created_at: string (date-time), message: string | null, political_details: object{subject_matter: string enum(candidate_advocacy, non_candidate_advocacy), candidate_legal_name: string | null, office_sought: string | null, election_date: string (date) | null, content_classification: string enum(federal_national, state_local) | null, content_details: string | null} | null, approval_status: string enum(not_required, pending, locked, approved, rejected), display_status: string enum(active, under_review, not_approved) | null, jurisdiction_scope: string enum(federal_national, state_local) | null, creative_type: string enum(VIDEO, EXTERNAL_VAST), vast_url: string | null, vast_mime_types: array<string enum(video/mp4, video/quicktime)> | null}

---

## PUT /creative/{creative_id}

**Update Creative**

Update a specific creative by its ID.

Operation ID: `update_creative_creative__creative_id__put`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| creative_id | path | string (uuid) | yes | Unique identifier of the creative to update |

**Request body** (`application/json`, required): object{name: string, jurisdiction_scope: string enum(federal_national, state_local) | null}

**Response 200** (`application/json`): object{id: string (uuid4), name: string | null, url: string | null, thumbnail_url: string | null, status: string enum(active, error, pending, deleted, rejected), duration: number | null, ad_usage: integer, ad_set_usage: integer, created_at: string (date-time), message: string | null, political_details: object{subject_matter: string enum(candidate_advocacy, non_candidate_advocacy), candidate_legal_name: string | null, office_sought: string | null, election_date: string (date) | null, content_classification: string enum(federal_national, state_local) | null, content_details: string | null} | null, approval_status: string enum(not_required, pending, locked, approved, rejected), display_status: string enum(active, under_review, not_approved) | null, jurisdiction_scope: string enum(federal_national, state_local) | null, creative_type: string enum(VIDEO, EXTERNAL_VAST), vast_url: string | null, vast_mime_types: array<string enum(video/mp4, video/quicktime)> | null}

---

## DELETE /creative/{creative_id}

**Delete Creative**

Delete a specific creative by its ID.

Operation ID: `delete_creative_creative__creative_id__delete`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| creative_id | path | string (uuid) | yes | Unique identifier of the creative to delete |

**Response 204**: Successful Response

