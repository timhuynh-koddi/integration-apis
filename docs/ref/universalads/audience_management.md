# Universal Ads API v1: Audience Management

> Source: Universal Ads Third Party API OpenAPI spec (v0.1.0), embedded in https://developers.universalads.com/static/campaign-management/campaign-introduction. Base URL: https://api.universalads.com/v1. Fetched 2026-11-19.

Operations: 6

---

## GET /audience

**Get Audiences**

Get a list of custom audiences.

Operation ID: `get_audiences_audience_get`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| audience_ids | query | array<string (uuid4)> \| null |  | List of Audience IDs |
| adaccount_id | query | string (uuid) | yes | Ad account ID |
| name | query | string \| null |  | Filter by Segment Name |
| description | query | string \| null |  | Filter by Segment Description |
| status | query | string enum(PENDING, PROCESSING, ELIGIBLE, ERROR, DELETED, NOT_ELIGIBLE, EXPIRED) \| null |  | Filter by Segment Status (e.g., active, inactive) |
| segment_type | query | array<string> \| null |  | Filter by segment type(s): email, phone, hashed_email, hashed_phone, ctv, ip_address, mobile_ad_id, web_event |
| sort | query | string enum(id, -id, name, -name, description, -description, status, -status, size, -size, segment_type, -segment_type, audience_type, -audience_type, created_at, -created_at, updated_at, -updated_at) |  | Sorting field. Use '-' prefix for descending order. _(default "id")_ |
| timezone | query | string \| null |  | Optional timezone used to render response timestamps. Allowed values: account, UTC, America/New_York, America/Chicago, America/Denver, America/Los_Angeles |
| limit | query | integer |  | Number of items to retrieve per page _(default 10; minimum 1; maximum 100)_ |
| offset | query | integer |  | Pagination offset for retrieving the next set of items _(default 0; minimum 0)_ |

**Response 200** (`application/json`): object{data: array<object{id: string (uuid4), status: string enum(PENDING, PROCESSING, ELIGIBLE, ERROR, DELETED, NOT_ELIGIBLE, EXPIRED), name: string | null, segment_type: string enum(email, phone, ctv, ip_address, mobile_ad_id, web_event, blockgraph_id, experian_luid, liveramp_id, hashed_email, hashed_phone, customer_list), audience_type: string | null, source: string enum(customer_list, ad_viewer, pixel_event, app_event) | null, description: string | null, size: integer | null, segment_usage: integer | null, retention_period: integer | null, event_type: string | null, pixel_id: string (uuid4) | null, app_tracker_id: string (uuid4) | null, error_code: string enum(TRAILING_COMMAS, INVALID_FORMAT, PROCESSING_ERROR, DATA_TYPE_MISMATCH, MALFORMED_ROW, INVALID_IDENTIFIER_HEADER, BELOW_MINIMUM_UNIQUE, NO_VALID_EMAIL_HASHES, NO_VALID_PHONE_HASHES, FILE_TOO_LARGE) | null, created_at: string (date-time), updated_at: string (date-time), expired_at: string (date-time) | null, timezone: string | null, ad_viewer_source: string enum(ad_account, campaign) | null, campaign_id: string (uuid4) | null}>, count: integer, limit: integer, offset: integer}

---

## POST /audience

**Create Audience**

Create a new custom audience.

Operation ID: `create_audience_audience_post`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Request body** (`application/json`, required): object{adaccount_id: string (uuid4), name: string, description: string | null, source: string enum(customer_list, ad_viewer, pixel_event, app_event) | null, segment_type: string enum(email, phone, ctv, ip_address, mobile_ad_id, blockgraph_id, experian_luid, liveramp_id, web_event, hashed_email, hashed_phone, customer_list) | null, identifier_type: string enum(email, phone, hashed_email, hashed_phone, mobile_ad_id, ip_address, ctv, liveramp_id, experian_luid, blockgraph_id) | null, retention_period: integer | null, ad_viewer_source: string enum(ad_account, campaign) | null, campaign_id: string (uuid4) | null, pixel_id: string (uuid4) | null, event_type: string | null, app_tracker_id: string (uuid4) | null, media_id: string (uuid4) | null, media_ids: array<string (uuid4)> | null, users: array<string> | null, timezone: string enum(account, UTC, America/New_York, America/Chicago, America/Denver, America/Los_Angeles) | null}

**Response 200** (`application/json`): object{id: string (uuid4), status: string enum(PENDING, PROCESSING, ELIGIBLE, ERROR, DELETED, NOT_ELIGIBLE, EXPIRED), name: string | null, segment_type: string enum(email, phone, ctv, ip_address, mobile_ad_id, web_event, blockgraph_id, experian_luid, liveramp_id, hashed_email, hashed_phone, customer_list), audience_type: string | null, source: string enum(customer_list, ad_viewer, pixel_event, app_event) | null, description: string | null, size: integer | null, segment_usage: integer | null, retention_period: integer | null, event_type: string | null, pixel_id: string (uuid4) | null, app_tracker_id: string (uuid4) | null, error_code: string enum(TRAILING_COMMAS, INVALID_FORMAT, PROCESSING_ERROR, DATA_TYPE_MISMATCH, MALFORMED_ROW, INVALID_IDENTIFIER_HEADER, BELOW_MINIMUM_UNIQUE, NO_VALID_EMAIL_HASHES, NO_VALID_PHONE_HASHES, FILE_TOO_LARGE) | null, created_at: string (date-time), updated_at: string (date-time), expired_at: string (date-time) | null, timezone: string | null, ad_viewer_source: string enum(ad_account, campaign) | null, campaign_id: string (uuid4) | null}

---

## GET /audience/{audience_id}

**Get Audience**

Get a custom audience by its ID.

Operation ID: `get_audience_audience__audience_id__get`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| audience_id | path | string (uuid) | yes | Unique ID of the custom audience to be retrieved |
| timezone | query | string \| null |  | Optional timezone used to render response timestamps. Allowed values: account, UTC, America/New_York, America/Chicago, America/Denver, America/Los_Angeles |

**Response 200** (`application/json`): object{id: string (uuid4), status: string enum(PENDING, PROCESSING, ELIGIBLE, ERROR, DELETED, NOT_ELIGIBLE, EXPIRED), name: string | null, segment_type: string enum(email, phone, ctv, ip_address, mobile_ad_id, web_event, blockgraph_id, experian_luid, liveramp_id, hashed_email, hashed_phone, customer_list), audience_type: string | null, source: string enum(customer_list, ad_viewer, pixel_event, app_event) | null, description: string | null, size: integer | null, segment_usage: integer | null, retention_period: integer | null, event_type: string | null, pixel_id: string (uuid4) | null, app_tracker_id: string (uuid4) | null, error_code: string enum(TRAILING_COMMAS, INVALID_FORMAT, PROCESSING_ERROR, DATA_TYPE_MISMATCH, MALFORMED_ROW, INVALID_IDENTIFIER_HEADER, BELOW_MINIMUM_UNIQUE, NO_VALID_EMAIL_HASHES, NO_VALID_PHONE_HASHES, FILE_TOO_LARGE) | null, created_at: string (date-time), updated_at: string (date-time), expired_at: string (date-time) | null, timezone: string | null, ad_viewer_source: string enum(ad_account, campaign) | null, campaign_id: string (uuid4) | null}

---

## PUT /audience/{audience_id}

**Update Audience**

Update a custom audience.

Operation ID: `update_audience_audience__audience_id__put`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| audience_id | path | string (uuid) | yes | Unique ID of the custom audience to be updated |

**Request body** (`application/json`, required): object{name: string, description: string | null, timezone: string enum(account, UTC, America/New_York, America/Chicago, America/Denver, America/Los_Angeles) | null}

**Response 200** (`application/json`): object{id: string (uuid4), status: string enum(PENDING, PROCESSING, ELIGIBLE, ERROR, DELETED, NOT_ELIGIBLE, EXPIRED), name: string | null, segment_type: string enum(email, phone, ctv, ip_address, mobile_ad_id, web_event, blockgraph_id, experian_luid, liveramp_id, hashed_email, hashed_phone, customer_list), audience_type: string | null, source: string enum(customer_list, ad_viewer, pixel_event, app_event) | null, description: string | null, size: integer | null, segment_usage: integer | null, retention_period: integer | null, event_type: string | null, pixel_id: string (uuid4) | null, app_tracker_id: string (uuid4) | null, error_code: string enum(TRAILING_COMMAS, INVALID_FORMAT, PROCESSING_ERROR, DATA_TYPE_MISMATCH, MALFORMED_ROW, INVALID_IDENTIFIER_HEADER, BELOW_MINIMUM_UNIQUE, NO_VALID_EMAIL_HASHES, NO_VALID_PHONE_HASHES, FILE_TOO_LARGE) | null, created_at: string (date-time), updated_at: string (date-time), expired_at: string (date-time) | null, timezone: string | null, ad_viewer_source: string enum(ad_account, campaign) | null, campaign_id: string (uuid4) | null}

---

## DELETE /audience/{audience_id}

**Delete Audience**

Delete a custom audience.

Operation ID: `delete_audience_audience__audience_id__delete`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| audience_id | path | string (uuid) | yes | Unique ID of the custom audience to be deleted |

**Response 204**: Successful Response

---

## PUT /audience/{audience_id}/users

**Update Audience Users**

Update the users of a custom audience.

Operation ID: `update_audience_users_audience__audience_id__users_put`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| audience_id | path | string (uuid) | yes | Unique ID of the custom audience to be updated |

**Request body** (`application/json`, required): object{users: array<string> | null, media_id: string (uuid4) | null, media_ids: array<string (uuid4)> | null, remove: boolean, identifier_type: string enum(email, phone, hashed_email, hashed_phone, mobile_ad_id, ip_address, ctv, liveramp_id, experian_luid, blockgraph_id) | null}

**Response 204**: Successful Response

