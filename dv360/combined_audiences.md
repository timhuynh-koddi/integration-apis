# Combined Audiences

> Source: Display & Video 360 API v4 REST Discovery document (https://displayvideo.googleapis.com/$discovery/rest?version=v4, revision 20261117); reference https://developers.google.com/display-video/api/reference/rest. Fetched 2026-11-19.

Used by koddi-offsite via: `NewCombinedAudiencesService().List` (`service.go`).

---

## combinedAudiences.get

`GET https://displayvideo.googleapis.com/v4/combinedAudiences/{+combinedAudienceId}`

Gets a combined audience.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| combinedAudienceId | path | string (int64) | yes | Required. The ID of the combined audience to fetch. |
| advertiserId | query | string (int64) |  | The ID of the advertiser that has access to the fetched combined audience. |
| partnerId | query | string (int64) |  | The ID of the partner that has access to the fetched combined audience. |

**Response**: `CombinedAudience`

---

## combinedAudiences.list

`GET https://displayvideo.googleapis.com/v4/combinedAudiences`

Lists combined audiences. The order is defined by the order_by parameter.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| filter | query | string |  | Allows filtering by combined audience fields. Supported syntax: * Filter expressions for combined audiences can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All combined audiences for which the display name contains "Google": `displayName : "Google"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |
| partnerId | query | string (int64) |  | The ID of the partner that has access to the fetched combined audiences. |
| pageSize | query | integer (int32) |  | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| pageToken | query | string |  | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCombinedAudiences` method. If not specified, the first page of results will be returned. |
| advertiserId | query | string (int64) |  | The ID of the advertiser that has access to the fetched combined audiences. |
| orderBy | query | string |  | Field by which to sort the list. Acceptable values are: * `combinedAudienceId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`. |

**Response**: `ListCombinedAudiencesResponse`

---

## Schemas

### `CombinedAudience`

Describes a combined audience resource.

| Field | Type | Description |
|---|---|---|
| name | string | Output only. The resource name of the combined audience. |
| displayName | string | Output only. The display name of the combined audience. . |
| combinedAudienceId | string (int64) | Output only. The unique ID of the combined audience. Assigned by the system. |

### `ListCombinedAudiencesResponse`

| Field | Type | Description |
|---|---|---|
| combinedAudiences | array<`CombinedAudience`> | The list of combined audiences. This list will be absent if empty. |
| nextPageToken | string | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCombinedAudiences` method to retrieve the next page of results. |

