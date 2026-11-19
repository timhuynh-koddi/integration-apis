# Applications (Mobile Applications)

> Source: Google Ad Manager API (beta, REST v1) Discovery document (https://admanager.googleapis.com/$discovery/rest?version=v1, revision 20261118); release notes https://developers.google.com/ad-manager/api/beta/docs/release-notes. Fetched 2026-11-19. Resource names have the form `networks/{networkCode}/...`.

Used by koddi-offsite via: SOAP `MobileApplicationService.getMobileApplicationsByStatement`.

---

## networks.applications.list

`GET https://admanager.googleapis.com/v1/{+parent}/applications`

Lists `Application` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of Applications. Format: `networks/{network_code}` |
| pageToken | query | string |  | Optional. A page token, received from a previous `ListApplications` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApplications` must match the call that provided the page token. |
| pageSize | query | integer (int32) |  | Optional. The maximum number of `Applications` to return. The service may return fewer than this value. If unspecified, at most 50 `Applications` will be returned. The maximum value is 1000; values greater than 1000 will be coerced to 1000. |
| skip | query | integer (int32) |  | Optional. Number of individual resources to skip while paginating. |
| orderBy | query | string |  | Optional. Expression to specify sorting order. See syntax details at https://developers.google.com/ad-manager/api/beta/filters#order |
| filter | query | string |  | Optional. Expression to filter the response. See syntax details at https://developers.google.com/ad-manager/api/beta/filters Syntax summary: double-quoted `"..."` (never `'...'`) strings and RFC 3339 timestamps, full resource names on reference fields (for example, `order = "networks/123/orders/456"`, not `*Id` or bare IDs), prefix or suffix `*` wildcards with `=` (`displayName = "foo*"`), `:` for substring or repeated-field matching, unquoted enums and booleans, uppercase `AND`/`OR`/`NOT`, and standalone `IN(field, SET(v1, v2))` (not `field IN (...)`). **Filterable fields:** * `appStoreId` * `appStores` * `applicationCode` * `approvalStatus` * `archived` * `displayName` * `name` * `platform` * `webviewClaimingStatus` |

**Response**: `ListApplicationsResponse`

---

## networks.applications.patch

`PATCH https://admanager.googleapis.com/v1/{+name}`

Updates a `Application` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Identifier. The resource name of the `Application`. Format: `networks/{network_code}/applications/{application_id}` |
| updateMask | query | string (google-fieldmask) |  | Optional. The list of fields to update. |

**Request body**: `Application`

**Response**: `Application`

---

## networks.applications.batchArchive

`POST https://admanager.googleapis.com/v1/{+parent}/applications:batchArchive`

Batch archives `Application` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource shared by all `Applications` to archive. Format: `networks/{network_code}` |

**Request body**: `BatchArchiveApplicationsRequest`

**Response**: `BatchArchiveApplicationsResponse`

---

## networks.applications.create

`POST https://admanager.googleapis.com/v1/{+parent}/applications`

Creates a `Application` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where this `Application` will be created. Format: `networks/{network_code}` |

**Request body**: `Application`

**Response**: `Application`

---

## networks.applications.get

`GET https://admanager.googleapis.com/v1/{+name}`

Retrieves a `Application` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The resource name of the Application. Format: `networks/{network_code}/applications/{application_id}` |

**Response**: `Application`

---

## networks.applications.batchCreate

`POST https://admanager.googleapis.com/v1/{+parent}/applications:batchCreate`

Creates `Application` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `Applications` will be created. Format: `networks/{network_code}` The parent field in the CreateApplicationRequest must match this field. |

**Request body**: `BatchCreateApplicationsRequest`

**Response**: `BatchCreateApplicationsResponse`

---

## networks.applications.batchUpdate

`POST https://admanager.googleapis.com/v1/{+parent}/applications:batchUpdate`

Batch updates `Application` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `Applications` will be updated. Format: `networks/{network_code}` The parent field in the UpdateApplicationRequest must match this field. |

**Request body**: `BatchUpdateApplicationsRequest`

**Response**: `BatchUpdateApplicationsResponse`

---

## networks.applications.batchUnarchive

`POST https://admanager.googleapis.com/v1/{+parent}/applications:batchUnarchive`

Batch unarchives `Application` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource shared by all `Applications` to Unarchive. Format: `networks/{network_code}` |

**Request body**: `BatchUnarchiveApplicationsRequest`

**Response**: `BatchUnarchiveApplicationsResponse`

---

## Schemas

### `ListApplicationsResponse`

Response object for `ListApplicationsRequest` containing matching `Application` objects.

| Field | Type | Description |
|---|---|---|
| totalSize | integer (int32) | Total number of `Application` objects. If a filter was included in the request, this reflects the total number after the filtering is applied. `total_size` won't be calculated in the response unless it has been included in a response field mask. The response field mask can be provided to the method by using the URL parameter `$fields` or `fields`, or by using the HTTP/gRPC header `X-Goog-FieldMask`. For more information, see https://developers.google.com/ad-manager/api/beta/field-masks |
| nextPageToken | string | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. |
| applications | array<`Application`> | The `Application` objects from the specified network. |

### `Application`

An application that has been added to or "claimed" by the network to be used for targeting purposes. These mobile apps can come from various app stores.

| Field | Type | Description |
|---|---|---|
| approvalStatus | string enum(APPLICATION_APPROVAL_STATUS_UNSPECIFIED, APPEALING, APPROVED, DISAPPROVED, DRAFT, UNCHECKED) | Output only. The approval status for the application. Values: APPLICATION_APPROVAL_STATUS_UNSPECIFIED - Default value. This value is unused.; APPEALING - The application is disapproved but has a pending review status, signaling an appeal.; APPROVED - The application can serve ads.; DISAPPROVED - The application failed approval checks and it cannot serve any ads.; DRAFT - The application is not yet ready for review.; UNCHECKED - The application has not yet been reviewed. |
| archived | boolean | Output only. The archival status of the application. When true, an application cannot be targeted and will not serve ads, regardless of its `status`. |
| displayName | string | Required. The display name of the application. |
| appStoreDisplayName | string | Output only. The name of the application on the app store. |
| name | string | Identifier. The resource name of the `Application`. Format: `networks/{network_code}/applications/{application_id}` |
| developer | string | Output only. The name of the developer of the application. |
| platform | string enum(APPLICATION_PLATFORM_UNSPECIFIED, UNSUPPORTED, AMAZON_TV, ANDROID, IOS, LG_TV, PLAYSTATION, ROKU, SAMSUNG_TV, XBOX) | Output only. The platform the application runs on. Values: APPLICATION_PLATFORM_UNSPECIFIED - Default value. This value is unused.; UNSUPPORTED - Platform for apps with platforms we don't support yet or don't have a representation for.; AMAZON_TV - Platform for Amazon Fire TV compatible apps.; ANDROID - Platform for Android compatible apps.; IOS - Platform for IOS compatible apps.; LG_TV - Platform for LG TV compatible apps.; PLAYSTATION - Platform for Playstation compatible apps.; ROKU - Platform for Roku compatible apps.; SAMSUNG_TV - Platform for Samsung TV compatible apps.; XBOX - Platform for Xbox compatible apps. |
| downloadUrl | string | Output only. The download URL of the application on the app store it belongs to. |
| appStores | array<string enum(APPLICATION_STORE_UNSPECIFIED, APPLE_APP_STORE, GOOGLE_PLAY_STORE, AMAZON_APP_STORE, OPPO_APP_STORE, SAMSUNG_APP_STORE, VIVO_APP_STORE, XIAOMI_APP_STORE, AMAZON_FIRETV_STORE, LG_TV_STORE, PLAYSTATION_STORE, ROKU_STORE, SAMSUNG_TV_STORE, XBOX_STORE)> | Optional. The app stores the application belongs to. This attribute is mutable to allow for third party app store linking. |
| applicationCode | string | Output only. The application code used to identify the app in the SDK. Note that the UI refers to this as "App ID". |
| webviewClaimingStatus | string enum(WEBVIEW_CLAIMING_STATUS_UNSPECIFIED, SOFT_CLAIMED, SOFT_CLAIMING_REVERTED) | Output only. The webview claiming status for the application. Values: WEBVIEW_CLAIMING_STATUS_UNSPECIFIED - Default value. This value is unused.; SOFT_CLAIMED - The application is soft claimed (claimed for targeting, but not ownership).; SOFT_CLAIMING_REVERTED - The application had its soft claiming status reverted (usually by a user action). |
| appStoreId | string | Optional. The app store ID of the app to claim. |
| free | boolean | Output only. Whether the application is free on the app store it belongs to. |

### `BatchArchiveApplicationsRequest`

Request object for `BatchArchiveApplications` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The `Application` objects to archive. |

### `BatchArchiveApplicationsResponse`

Response object for `BatchArchiveApplications` method.

Type: object

### `BatchCreateApplicationsRequest`

Request object for `BatchCreateApplications` method.

| Field | Type | Description |
|---|---|---|
| requests | array<`CreateApplicationRequest`> | Required. The `Application` objects to create. |

### `BatchCreateApplicationsResponse`

Response object for `BatchCreateApplications` method.

| Field | Type | Description |
|---|---|---|
| applications | array<`Application`> | The `Application` objects created. |

### `BatchUpdateApplicationsRequest`

Request object for `BatchUpdateApplications` method.

| Field | Type | Description |
|---|---|---|
| requests | array<`UpdateApplicationRequest`> | Required. The `Application` objects to update. |

### `BatchUpdateApplicationsResponse`

Response object for `BatchUpdateApplications` method.

| Field | Type | Description |
|---|---|---|
| applications | array<`Application`> | The `Application` objects updated. |

### `BatchUnarchiveApplicationsRequest`

Request object for `BatchUnarchiveApplications` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The `Application` objects to unarchive. |

### `BatchUnarchiveApplicationsResponse`

Response object for `BatchUnarchiveApplications` method.

Type: object

### `CreateApplicationRequest`

Request object for `CreateApplication` method.

| Field | Type | Description |
|---|---|---|
| parent | string | Required. The parent resource where this `Application` will be created. Format: `networks/{network_code}` |
| application | `Application` | Required. The `Application` to create. |

### `UpdateApplicationRequest`

Request object for `UpdateApplication` method.

| Field | Type | Description |
|---|---|---|
| updateMask | string (google-fieldmask) | Optional. The list of fields to update. |
| application | `Application` | Required. The `Application` to update. The `Application`'s `name` is used to identify the `Application` to update. |

