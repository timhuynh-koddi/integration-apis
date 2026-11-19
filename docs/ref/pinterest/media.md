# Pinterest API v5: Media

> Source: Pinterest REST API v5 OpenAPI spec (https://github.com/pinterest/api-description, v5.32.0); docs https://developers.pinterest.com/docs/api/v5/. Base URL: https://api.pinterest.com/v5. Fetched 2026-11-19.

Operations: 3

---

## GET /media

**List media uploads**

List media uploads filtered by given parameters.

**[Learn more](/docs/api-features/creating-boards-and-pins/#creating-video-pins)** about video Pin creation.

Operation ID: `media/list`

Scopes: pinterest_oauth2: pins:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| bookmark | query | string |  | Cursor used to fetch the next page of items |
| page_size | query | integer |  | Maximum number of items to include in a single page. See documentation on [Pagination](/docs/reference/pagination/) for more information. _(default 25; minimum 1; maximum 250)_ |

**Response 200** (`application/json`): object{bookmark: string, items: array<`Media`>}

---

## POST /media

**Register media upload**

Register your intent to upload media.

The response includes all of the information needed to upload the media to Pinterest.

To upload the media, make an HTTP POST request (using `curl`, for example) to `upload_url` using the `Content-Type` header value. Send the media file's contents as the request's `file` parameter and also include all of the parameters from `upload_parameters`.

**[Learn more](/docs/api-features/creating-boards-and-pins/#creating-video-pins)** about video Pin creation.

Operation ID: `media/create`

Scopes: pinterest_oauth2: pins:read, pins:write

**Request body** (`application/json`, required): `MediaUploadCreateRequest`

**Response 200** (`application/json`): `MediaUpload`

**Response 201** (`application/json`): `MediaUpload`

---

## GET /media/{media_id}

**Get media upload details**

Get details for a registered media upload, including its current status.

**[Learn more](/docs/api-features/creating-boards-and-pins/#creating-video-pins)** about video Pin creation.

Operation ID: `media/get`

Scopes: pinterest_oauth2: pins:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| media_id | path | string | yes | Unique identifier for this media upload. Used to track status and for attaching during Pin creation. |

**Response 200** (`application/json`): `Media`

---

## Schemas

### `Media`

| Field | Type | Required | Description |
|---|---|---|---|
| media_id | string | yes | Unique identifier for this media upload. Used to track status and for attaching during Pin creation. _(read-only)_ |
| media_type | `MediaUploadType` | yes | _(read-only)_ |
| status | `MediaUploadStatus` |  | _(read-only)_ |

### `MediaUpload`

Media upload that has been registered but not uploaded/processed yet.

| Field | Type | Required | Description |
|---|---|---|---|
| media_id | string | yes | Unique identifier for this media upload. Used to track status and for attaching during Pin creation. _(read-only)_ |
| media_type | `MediaUploadType` | yes | _(read-only)_ |
| upload_parameters | `MediaUploadParameters` |  | The list of parameter key/value pairs you will need to send with your POST request to upload your media file. _(read-only)_ |
| upload_url | string |  | The URL where you will POST your media file. _(read-only)_ |

### `MediaUploadCreateRequest`

| Field | Type | Required | Description |
|---|---|---|---|
| media_type | `MediaUploadType` | yes | High-level media type for the upload request. |

### `MediaUploadStatus`

Type: string enum(registered, processing, succeeded, failed)

### `MediaUploadType`

Type: string enum(tvsci_ads_video, video, image_latent_disclosure, video_latent_disclosure, video_long_form, media_library_image, media_library_video)

### `MediaUploadParameters`

| Field | Type | Required | Description |
|---|---|---|---|
| Content-Type | string |  |  |
| key | string |  |  |
| policy | string |  |  |
| x-amz-algorithm | string |  |  |
| x-amz-credential | string |  |  |
| x-amz-date | string |  |  |
| x-amz-security-token | string |  |  |
| x-amz-signature | string |  |  |

