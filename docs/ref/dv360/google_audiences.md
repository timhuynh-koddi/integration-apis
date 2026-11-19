# Google Audiences

> Source: Display & Video 360 API v4 REST Discovery document (https://displayvideo.googleapis.com/$discovery/rest?version=v4, revision 20261117); reference https://developers.google.com/display-video/api/reference/rest. Fetched 2026-11-19.

Used by koddi-offsite via: `NewGoogleAudiencesService().List` (`service.go`).

---

## googleAudiences.get

`GET https://displayvideo.googleapis.com/v4/googleAudiences/{+googleAudienceId}`

Gets a Google audience.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| googleAudienceId | path | string (int64) | yes | Required. The ID of the Google audience to fetch. |
| partnerId | query | string (int64) |  | The ID of the partner that has access to the fetched Google audience. |
| advertiserId | query | string (int64) |  | The ID of the advertiser that has access to the fetched Google audience. |

**Response**: `GoogleAudience`

---

## googleAudiences.list

`GET https://displayvideo.googleapis.com/v4/googleAudiences`

Lists Google audiences. The order is defined by the order_by parameter.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| partnerId | query | string (int64) |  | The ID of the partner that has access to the fetched Google audiences. |
| filter | query | string |  | Allows filtering by Google audience fields. Supported syntax: * Filter expressions for Google audiences can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All Google audiences for which the display name contains "Google": `displayName:"Google"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |
| pageToken | query | string |  | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListGoogleAudiences` method. If not specified, the first page of results will be returned. |
| pageSize | query | integer (int32) |  | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| orderBy | query | string |  | Field by which to sort the list. Acceptable values are: * `googleAudienceId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`. |
| advertiserId | query | string (int64) |  | The ID of the advertiser that has access to the fetched Google audiences. |

**Response**: `ListGoogleAudiencesResponse`

---

## Schemas

### `GoogleAudience`

Describes a Google audience resource. Includes Google audience lists.

| Field | Type | Description |
|---|---|---|
| googleAudienceType | string enum(GOOGLE_AUDIENCE_TYPE_UNSPECIFIED, GOOGLE_AUDIENCE_TYPE_AFFINITY, GOOGLE_AUDIENCE_TYPE_IN_MARKET, GOOGLE_AUDIENCE_TYPE_INSTALLED_APPS, GOOGLE_AUDIENCE_TYPE_NEW_MOBILE_DEVICES, GOOGLE_AUDIENCE_TYPE_LIFE_EVENT, GOOGLE_AUDIENCE_TYPE_EXTENDED_DEMOGRAPHIC) | Output only. The type of Google audience. . Values: GOOGLE_AUDIENCE_TYPE_UNSPECIFIED - Default value when type is not specified or is unknown.; GOOGLE_AUDIENCE_TYPE_AFFINITY - Affinity type Google audience.; GOOGLE_AUDIENCE_TYPE_IN_MARKET - In-Market type Google audience.; GOOGLE_AUDIENCE_TYPE_INSTALLED_APPS - Deprecated: This Google audience type is no longer supported. Installed-Apps type Google audience.; GOOGLE_AUDIENCE_TYPE_NEW_MOBILE_DEVICES - Deprecated: This Google audience type is no longer supported. New-Mobile-Devices type Google audience.; GOOGLE_AUDIENCE_TYPE_LIFE_EVENT - Life-Event type Google audience.; GOOGLE_AUDIENCE_TYPE_EXTENDED_DEMOGRAPHIC - Extended-Demographic type Google audience. |
| googleAudienceId | string (int64) | Output only. The unique ID of the Google audience. Assigned by the system. |
| name | string | Output only. The resource name of the google audience. |
| displayName | string | Output only. The display name of the Google audience. . |

### `ListGoogleAudiencesResponse`

| Field | Type | Description |
|---|---|---|
| googleAudiences | array<`GoogleAudience`> | The list of Google audiences. This list will be absent if empty. |
| nextPageToken | string | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListGoogleAudiences` method to retrieve the next page of results. |

