# Assets

> Source: Display & Video 360 API v4 REST Discovery document (https://displayvideo.googleapis.com/$discovery/rest?version=v4, revision 20261117); reference https://developers.google.com/display-video/api/reference/rest. Fetched 2026-11-19.

Used by koddi-offsite via: `NewAdvertisersAssetsService().Upload` (`creative.go`).

---

## advertisers.assets.upload

`POST https://displayvideo.googleapis.com/v4/advertisers/{+advertiserId}/assets`

Uploads an asset. Returns the ID of the newly uploaded asset if successful. The asset file size should be no more than 10 MB for images, 200 MB for ZIP files, and 1 GB for videos. Must be used within the [multipart media upload process](/display-video/api/guides/how-tos/upload#multipart). Examples using provided client libraries can be found in our [Creating Creatives guide](/display-video/api/guides/creating-creatives/overview#upload_an_asset).

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string (int64) | yes | Required. The ID of the advertiser this asset belongs to. |

**Request body**: `CreateAssetRequest`

**Response**: `CreateAssetResponse`

---

## Schemas

### `CreateAssetRequest`

A request message for CreateAsset.

| Field | Type | Description |
|---|---|---|
| filename | string | Required. The filename of the asset, including the file extension. The filename must be UTF-8 encoded with a maximum size of 240 bytes. |

### `CreateAssetResponse`

A response message for CreateAsset.

| Field | Type | Description |
|---|---|---|
| asset | `Asset` | The uploaded asset, if successful. |

### `Asset`

A single asset.

| Field | Type | Description |
|---|---|---|
| mediaId | string (int64) | Media ID of the uploaded asset. This is a unique identifier for the asset. This ID can be passed to other API calls, e.g. CreateCreative to associate the asset with a creative. The Media ID space updated on **April 5, 2023**. Update media IDs cached before **April 5, 2023** by retrieving the new media ID from associated creative resources or re-uploading the asset. |
| content | string | The asset content. For uploaded assets, the content is the serving path. |

