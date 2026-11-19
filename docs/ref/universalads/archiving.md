# Universal Ads API v1: Archiving

> Source: Universal Ads Third Party API OpenAPI spec (v0.1.0), embedded in https://developers.universalads.com/static/campaign-management/campaign-introduction. Base URL: https://api.universalads.com/v1. Fetched 2026-11-19.

Operations: 7

---

## POST /ad/{ad_id}/archive

**Archive Ad**

Start async archive for the ad; poll via archive job API.

Operation ID: `archive_ad_ad__ad_id__archive_post`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_id | path | string (uuid) | yes | Unique identifier of the ad |

**Response 200** (`application/json`): object{archive_job_id: string (uuid4), polling_timeout_seconds: integer, entity_count: integer}

---

## POST /ad/{ad_id}/unarchive

**Unarchive Ad**

Start async unarchive for the ad; poll via archive job API.

Operation ID: `unarchive_ad_ad__ad_id__unarchive_post`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_id | path | string (uuid) | yes | Unique identifier of the ad |

**Response 200** (`application/json`): object{archive_job_id: string (uuid4), polling_timeout_seconds: integer, entity_count: integer}

---

## POST /adset/{adset_id}/archive

**Archive Ad Set**

Start async archive for the ad set and its ads; poll via archive job API.

Operation ID: `archive_adset_adset__adset_id__archive_post`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| adset_id | path | string (uuid) | yes | Unique identifier of the ad set |

**Response 200** (`application/json`): object{archive_job_id: string (uuid4), polling_timeout_seconds: integer, entity_count: integer}

---

## POST /adset/{adset_id}/unarchive

**Unarchive Ad Set**

Start async unarchive for the ad set and its ads; poll via archive job API.

Operation ID: `unarchive_adset_adset__adset_id__unarchive_post`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| adset_id | path | string (uuid) | yes | Unique identifier of the ad set |

**Response 200** (`application/json`): object{archive_job_id: string (uuid4), polling_timeout_seconds: integer, entity_count: integer}

---

## GET /archive-job/{archive_job_id}

**Get Archive Job**

Poll archive or unarchive job status (TPA developer API).

Operation ID: `get_archive_job_archive_job__archive_job_id__get`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| archive_job_id | path | string (uuid) | yes | Archive job ID returned from archive/unarchive |

**Response 200** (`application/json`): object{id: string (uuid4), status: string enum(pending, in_progress, completed, partially_failed, failed), action: string enum(archive, unarchive), root_entity_type: string enum(campaign, adset, ad), root_entity_id: string (uuid4), root_entity_name: string, entity_count: integer, entities_processed: integer, entities_remaining: integer, succeeded_entities: array<object{id: string (uuid4), entity_type: string enum(campaign, adset, ad), name: string}>, failed_entities: array<object{id: string (uuid4), entity_type: string enum(campaign, adset, ad), name: string, error: string}>, created_at: string (date-time), completed_at: string (date-time) | null}

---

## POST /campaign/{campaign_id}/archive

**Archive Campaign**

Start async archive for the campaign and its ad sets and ads; poll via archive job API.

Operation ID: `archive_campaign_campaign__campaign_id__archive_post`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| campaign_id | path | string (uuid) | yes | Unique identifier of the campaign |

**Response 200** (`application/json`): object{archive_job_id: string (uuid4), polling_timeout_seconds: integer, entity_count: integer}

---

## POST /campaign/{campaign_id}/unarchive

**Unarchive Campaign**

Start async unarchive for the campaign and its ad sets and ads; poll via archive job API.

Operation ID: `unarchive_campaign_campaign__campaign_id__unarchive_post`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| campaign_id | path | string (uuid) | yes | Unique identifier of the campaign |

**Response 200** (`application/json`): object{archive_job_id: string (uuid4), polling_timeout_seconds: integer, entity_count: integer}

