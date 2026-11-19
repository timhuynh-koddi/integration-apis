# Custom Lists

> Source: Display & Video 360 API v4 REST Discovery document (https://displayvideo.googleapis.com/$discovery/rest?version=v4, revision 20261117); reference https://developers.google.com/display-video/api/reference/rest. Fetched 2026-11-19.

Used by koddi-offsite via: `NewCustomListsService().List` (`service.go`).

---

## customLists.list

`GET https://displayvideo.googleapis.com/v4/customLists`

Lists custom lists. The order is defined by the order_by parameter.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| filter | query | string |  | Allows filtering by custom list fields. Supported syntax: * Filter expressions for custom lists can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All custom lists for which the display name contains "Google": `displayName:"Google"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |
| advertiserId | query | string (int64) |  | The ID of the DV360 advertiser that has access to the fetched custom lists. |
| orderBy | query | string |  | Field by which to sort the list. Acceptable values are: * `customListId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`. |
| pageToken | query | string |  | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCustomLists` method. If not specified, the first page of results will be returned. |
| pageSize | query | integer (int32) |  | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |

**Response**: `ListCustomListsResponse`

---

## customLists.get

`GET https://displayvideo.googleapis.com/v4/customLists/{+customListId}`

Gets a custom list.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| customListId | path | string (int64) | yes | Required. The ID of the custom list to fetch. |
| advertiserId | query | string (int64) |  | The ID of the DV360 advertiser that has access to the fetched custom lists. |

**Response**: `CustomList`

---

## Schemas

### `ListCustomListsResponse`

| Field | Type | Description |
|---|---|---|
| customLists | array<`CustomList`> | The list of custom lists. This list will be absent if empty. |
| nextPageToken | string | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCustomLists` method to retrieve the next page of results. |

### `CustomList`

Describes a custom list entity, such as a custom affinity or custom intent audience list.

| Field | Type | Description |
|---|---|---|
| displayName | string | Output only. The display name of the custom list. . |
| name | string | Output only. The resource name of the custom list. |
| customListId | string (int64) | Output only. The unique ID of the custom list. Assigned by the system. |

