# Universal Ads API v1: Media

> Source: Universal Ads Third Party API OpenAPI spec (v0.1.0), embedded in https://developers.universalads.com/static/campaign-management/campaign-introduction. Base URL: https://api.universalads.com/v1. Fetched 2026-11-19.

Operations: 3

---

## POST /media

**Upload Media**

Generate a presigned url for file upload.

Operation ID: `upload_media_media_post`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Request body** (`application/json`, required): object{mime_type: string, adaccount_id: string (uuid4), name: string | null, file_size: integer | null}

**Response 200** (`application/json`): object{id: string (uuid4), download_url: string | null, filename: string | null, mime_type: string, adaccount_id: string (uuid4) | null, status: string enum(PENDING, VERIFIED, DELETED), created_at: string (date-time), updated_at: string (date-time), upload_url: string | null}

---

## GET /media/{id}

**Get Media**

Retrieve information on a specific media.

Operation ID: `get_media_media__id__get`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| id | path | string (uuid) | yes | Unique ID of the media to be retrieved |

**Response 200** (`application/json`): object{id: string (uuid4), download_url: string | null, filename: string | null, mime_type: string, adaccount_id: string (uuid4) | null, status: string enum(PENDING, VERIFIED, DELETED), created_at: string (date-time), updated_at: string (date-time)}

---

## POST /media/{id}/verify

**Verify Media**

Verify the upload for a particular media by its ID.

Operation ID: `verify_media_media__id__verify_post`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| id | path | string (uuid) | yes | Unique ID of the media upload to be verified |

**Response 200** (`application/json`): object{id: string (uuid4), download_url: string | null, filename: string | null, mime_type: string, adaccount_id: string (uuid4) | null, status: string enum(PENDING, VERIFIED, DELETED), created_at: string (date-time), updated_at: string (date-time)}

