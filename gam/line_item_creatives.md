# Line Item Creatives (LineItemCreativeAssociation)

> Source: Google Ad Manager API (beta, REST v1) Discovery document (https://admanager.googleapis.com/$discovery/rest?version=v1, revision 20261118); release notes https://developers.google.com/ad-manager/api/beta/docs/release-notes. Fetched 2026-11-19. Resource names have the form `networks/{networkCode}/...`.

Used by koddi-offsite via: SOAP `LineItemCreativeAssociationService` create/delete.

---

## networks.lineItems.creatives.batchDeactivate

`POST https://admanager.googleapis.com/v1/{+parent}/creatives:batchDeactivate`

Deactivates a list of `LineItemCreativeAssociation` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `LineItemCreativeAssociations` will be deactivated. This request supports using the "-" character as a wildcard for resources that span across multiple LineItem parents. Format: `networks/{network_code}/lineItems/{line_item_id}` Format: `networks/{network_code}/lineItems/-` |

**Request body**: `BatchDeactivateLineItemCreativeAssociationsRequest`

**Response**: `BatchDeactivateLineItemCreativeAssociationsResponse`

---

## networks.lineItems.creatives.get

`GET https://admanager.googleapis.com/v1/{+name}`

Retrieves a `LineItemCreativeAssociation` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The resource name of the LineItemCreativeAssociation. Format: `networks/{network_code}/lineItems/{line_item_id}/creatives/{creative_id}` |

**Response**: `LineItemCreativeAssociation`

---

## networks.lineItems.creatives.list

`GET https://admanager.googleapis.com/v1/{+parent}/creatives`

Lists `LineItemCreativeAssociation` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of LineItemCreativeAssociations. This request supports using the "-" character as a wildcard for resources that span across multiple LineItem parents. Format: `networks/{network_code}/lineItems/{line_item_id}` Format: `networks/{network_code}/lineItems/-` |
| pageToken | query | string |  | Optional. A page token, received from a previous `ListLineItemCreativeAssociations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLineItemCreativeAssociations` must match the call that provided the page token. |
| skip | query | integer (int32) |  | Optional. Number of individual resources to skip while paginating. |
| pageSize | query | integer (int32) |  | Optional. The maximum number of `LineItemCreativeAssociations` to return. The service may return fewer than this value. If unspecified, at most 50 `LineItemCreativeAssociations` will be returned. The maximum value is 1000; values greater than 1000 will be coerced to 1000. |
| filter | query | string |  | Optional. Expression to filter the response. See syntax details at https://developers.google.com/ad-manager/api/beta/filters Syntax summary: double-quoted `"..."` (never `'...'`) strings and RFC 3339 timestamps, full resource names on reference fields (for example, `order = "networks/123/orders/456"`, not `*Id` or bare IDs), prefix or suffix `*` wildcards with `=` (`displayName = "foo*"`), `:` for substring or repeated-field matching, unquoted enums and booleans, uppercase `AND`/`OR`/`NOT`, and standalone `IN(field, SET(v1, v2))` (not `field IN (...)`). **Filterable fields:** * `creative` * `creativeSet` * `destinationUrl` * `endTime` * `lineItem` * `manualCreativeRotationWeight` * `name` * `sequentialCreativeRotationIndex` * `startTime` * `status` * `targetingDisplayName` * `updateTime` |
| orderBy | query | string |  | Optional. Expression to specify sorting order. See syntax details at https://developers.google.com/ad-manager/api/beta/filters#order |

**Response**: `ListLineItemCreativeAssociationsResponse`

---

## networks.lineItems.creatives.patch

`PATCH https://admanager.googleapis.com/v1/{+name}`

Updates a `LineItemCreativeAssociation` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Identifier. The resource name of the `LineItemCreativeAssociation`. Format: `networks/{network_code}/lineItems/{line_item_id}/creatives/{creative_id}` |
| updateMask | query | string (google-fieldmask) |  | Optional. The list of fields to update. |

**Request body**: `LineItemCreativeAssociation`

**Response**: `LineItemCreativeAssociation`

---

## networks.lineItems.creatives.batchDelete

`POST https://admanager.googleapis.com/v1/{+parent}/creatives:batchDelete`

Deletes a list of `LineItemCreativeAssociation` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `LineItemCreativeAssociations` will be deleted. This request supports using the "-" character as a wildcard for resources that span across multiple LineItem parents. Format: `networks/{network_code}/lineItems/{line_item_id}` Format: `networks/{network_code}/lineItems/-` |

**Request body**: `BatchDeleteLineItemCreativeAssociationsRequest`

**Response**: `GoogleProtobuf__Empty`

---

## networks.lineItems.creatives.batchCreate

`POST https://admanager.googleapis.com/v1/{+parent}/creatives:batchCreate`

Creates `LineItemCreativeAssociation` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `LineItemCreativeAssociations` will be created. This request supports using the "-" character as a wildcard for resources that span across multiple LineItem parents. Format: `networks/{network_code}/lineItems/{line_item_id}` Format: `networks/{network_code}/lineItems/-` |

**Request body**: `BatchCreateLineItemCreativeAssociationsRequest`

**Response**: `BatchCreateLineItemCreativeAssociationsResponse`

---

## networks.lineItems.creatives.batchUpdate

`POST https://admanager.googleapis.com/v1/{+parent}/creatives:batchUpdate`

Batch updates `LineItemCreativeAssociation` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `LineItemCreativeAssociations` will be updated. This request supports using the "-" character as a wildcard for resources that span across multiple LineItem parents. Format: `networks/{network_code}/lineItems/{line_item_id}` Format: `networks/{network_code}/lineItems/-` |

**Request body**: `BatchUpdateLineItemCreativeAssociationsRequest`

**Response**: `BatchUpdateLineItemCreativeAssociationsResponse`

---

## networks.lineItems.creatives.preview

`POST https://admanager.googleapis.com/v1/{+name}:preview`

Fetch previews for the LineItemCreativeAssociation.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The name of the `LineItemCreativeAssociation` object to preview. Format: `networks/{network_code}/lineItems/{line_item_id}/creatives/{creative_id}` |

**Request body**: `PreviewLineItemCreativeAssociationRequest`

**Response**: `PreviewLineItemCreativeAssociationResponse`

---

## networks.lineItems.creatives.batchActivate

`POST https://admanager.googleapis.com/v1/{+parent}/creatives:batchActivate`

Activate a list of `LineItemCreativeAssociation` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `LineItemCreativeAssociations` will be activated. This request supports using the "-" character as a wildcard for resources that span across multiple LineItem parents. Format: `networks/{network_code}/lineItems/{line_item_id}` Format: `networks/{network_code}/lineItems/-` |

**Request body**: `BatchActivateLineItemCreativeAssociationsRequest`

**Response**: `BatchActivateLineItemCreativeAssociationsResponse`

---

## networks.lineItems.creatives.create

`POST https://admanager.googleapis.com/v1/{+parent}/creatives`

Creates a `LineItemCreativeAssociation` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where this `LineItemCreativeAssociation` will be created. Format: `networks/{network_code}/lineItems/{line_item_id}` |

**Request body**: `LineItemCreativeAssociation`

**Response**: `LineItemCreativeAssociation`

---

## Schemas

### `BatchDeactivateLineItemCreativeAssociationsRequest`

Request message for `BatchDeactivateLineItemCreativeAssociations` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The names of the `LineItemCreativeAssociation` objects to deactivate. A maximum of 1000 objects can be deactivated in a batch. Format: `networks/{network_code}/lineItems/{line_item_id}/creatives/{creative_id}` |

### `BatchDeactivateLineItemCreativeAssociationsResponse`

Response object for `BatchDeactivateLineItemCreativeAssociations` method.

Type: object

### `LineItemCreativeAssociation`

A LineItemCreativeAssociation associates a Creative or CreativeSet with a LineItem so that the creative can be served in ad units targeted by the line item.

| Field | Type | Description |
|---|---|---|
| stats | `LineItemCreativeAssociationStats` | Output only. Contains trafficking statistics for the association. |
| name | string | Identifier. The resource name of the `LineItemCreativeAssociation`. Format: `networks/{network_code}/lineItems/{line_item_id}/creatives/{creative_id}` |
| lineItem | string | Required. Immutable. The LineItem to which the LineItemCreativeAssociation belongs. |
| creativeSet | string | Optional. Immutable. The CreativeSet to which the LineItemCreativeAssociation associated. Optional if creative is set. |
| sizes | array<`Size`> | Optional. Overrides the value set for size of the creative, which allows the creative to be served to ad units that would otherwise not be compatible for its actual size. |
| creative | string | Optional. Immutable. The Creative to which the LineItemCreativeAssociation associated. Optional if creativeSet is set. |
| sequentialCreativeRotationIndex | integer (int32) | Optional. Non-empty default. The sequential rotation index of the Creative. This value is used only if the lineItem's creativeRotationType is set to SEQUENTIAL. Defaults to 1. |
| manualCreativeRotationWeight | number (double) | Optional. Non-empty default. The weight of the creative. This value is only used if the creativeRotationType of the lineItem is set to WEIGHTED. Defaults to 10. |
| startTime | string (google-datetime) | Optional. Overrides the value set for startTime of the lineItem. This value is only valid for Ad Manager 360 networks. If unset, the startTime of the lineItem will be used. |
| endTime | string (google-datetime) | Optional. Overrides endTime of the lineItem. This value is only valid for Ad Manager 360 networks. If unset, the endTime of the lineItem will be used. |
| updateTime | string (google-datetime) | Output only. The date and time this association was last modified. |
| status | string enum(LINE_ITEM_CREATIVE_ASSOCIATION_STATUS_UNSPECIFIED, ACTIVE, INACTIVE) | Output only. The status of the association. Values: LINE_ITEM_CREATIVE_ASSOCIATION_STATUS_UNSPECIFIED - Default value. This value is unused.; ACTIVE - The association is active and the associated Creative can be served.; INACTIVE - The association is inactive and the associated Creative is ineligible for being served. |
| destinationUrl | string | Optional. Overrides the value set for destinationUrl of the creative. This value is only valid for Ad Manager 360 networks. |
| targetingDisplayName | string | Optional. Specifies creative targeting for this line item creative association. It should match the targetingName specified on the corresponding creativePlaceholder on the lineItem. |

### `ListLineItemCreativeAssociationsResponse`

Response object for `ListLineItemCreativeAssociationsRequest` containing matching `LineItemCreativeAssociation` objects.

| Field | Type | Description |
|---|---|---|
| nextPageToken | string | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. |
| totalSize | integer (int32) | Total number of `LineItemCreativeAssociation` objects. If a filter was included in the request, this reflects the total number after the filtering is applied. `total_size` won't be calculated in the response unless it has been included in a response field mask. The response field mask can be provided to the method by using the URL parameter `$fields` or `fields`, or by using the HTTP/gRPC header `X-Goog-FieldMask`. For more information, see https://developers.google.com/ad-manager/api/beta/field-masks |
| lineItemCreativeAssociations | array<`LineItemCreativeAssociation`> | The `LineItemCreativeAssociation` objects from the specified network. |

### `BatchDeleteLineItemCreativeAssociationsRequest`

Request message for `BatchDeleteLineItemCreativeAssociations` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The names of the `LineItemCreativeAssociation` objects to delete. A maximum of 1000 objects can be deleted in a batch. Format: `networks/{network_code}/lineItems/{line_item_id}/creatives/{creative_id}` |

### `GoogleProtobuf__Empty`

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

Type: object

### `BatchCreateLineItemCreativeAssociationsRequest`

Request object for `BatchCreateLineItemCreativeAssociations` method.

| Field | Type | Description |
|---|---|---|
| requests | array<`CreateLineItemCreativeAssociationRequest`> | Required. The `LineItemCreativeAssociation` objects to create. A maximum of 100 objects can be created in a batch. |

### `BatchCreateLineItemCreativeAssociationsResponse`

Response object for `BatchCreateLineItemCreativeAssociations` method.

| Field | Type | Description |
|---|---|---|
| lineItemCreativeAssociations | array<`LineItemCreativeAssociation`> | The `LineItemCreativeAssociation` objects created. |

### `BatchUpdateLineItemCreativeAssociationsRequest`

Request object for `BatchUpdateLineItemCreativeAssociations` method.

| Field | Type | Description |
|---|---|---|
| requests | array<`UpdateLineItemCreativeAssociationRequest`> | Required. The `LineItemCreativeAssociation` objects to update. A maximum of 100 objects can be updated in a batch. |

### `BatchUpdateLineItemCreativeAssociationsResponse`

Response object for `BatchUpdateLineItemCreativeAssociations` method.

| Field | Type | Description |
|---|---|---|
| lineItemCreativeAssociations | array<`LineItemCreativeAssociation`> | The `LineItemCreativeAssociation` objects updated. |

### `PreviewLineItemCreativeAssociationRequest`

Request message for `PreviewLineItemCreativeAssociation` method.

| Field | Type | Description |
|---|---|---|
| siteUrl | string | Required. The URL of the site that the creative should be previewed in |

### `PreviewLineItemCreativeAssociationResponse`

Response object for `PreviewLineItemCreativeAssociation` method.

| Field | Type | Description |
|---|---|---|
| previews | array<`PreviewLineItemCreativeAssociationResponse_Preview`> | On-site previews of the `LineItemCreativeAssociation`. It has only one element for non-native previews and one preview url per `NativeStyle` associated. |

### `BatchActivateLineItemCreativeAssociationsRequest`

Request message for `BatchActivateLineItemCreativeAssociations` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The names of the `LineItemCreativeAssociation` objects to activate. A maximum of 1000 objects can be activated in a batch. Format: `networks/{network_code}/lineItems/{line_item_id}/creatives/{creative_id}` |

### `BatchActivateLineItemCreativeAssociationsResponse`

Response object for `BatchActivateLineItemCreativeAssociations` method.

Type: object

### `LineItemCreativeAssociationStats`

Contains statistics such as impressions, clicks delivered, and viewable impressions for a LineItemCreativeAssociation.

| Field | Type | Description |
|---|---|---|
| clicksDelivered | string (int64) | Output only. The number of clicks delivered. |
| impressionsDelivered | string (int64) | Output only. The number of impressions delivered. |
| viewableImpressionsDelivered | string (int64) | Output only. The number of viewable impressions delivered. |
| creativeSetStats | map<string, `LineItemCreativeAssociationStats_CreativeStats`> | Output only. Creative set stats. |

### `Size`

Represents the dimensions of an AdUnit, LineItem, or Creative.

| Field | Type | Description |
|---|---|---|
| sizeType | string enum(SIZE_TYPE_UNSPECIFIED, PIXEL, ASPECT_RATIO, INTERSTITIAL, IGNORED, NATIVE, FLUID, AUDIO) | Required. The SizeType of the Creative, AdUnit, or LineItem. Values: SIZE_TYPE_UNSPECIFIED - Default value. This value is unused.; PIXEL - Dimension based size, an actual height and width in pixels.; ASPECT_RATIO - Size is expressed as a ratio. For example, 4:1 could be met by a 100 x 25 sized image.; INTERSTITIAL - Out-of-page (Interstitial) size that is not related to the slot it is served. This must be used with 1x1 size.; IGNORED - Size is ignored. This must be used with 1x1 size.; NATIVE - Native size, which is a function of the how the client renders the creative. This must be used with 1x1 size.; FLUID - Fluid size. Automatically sizes the ad by filling the width of the enclosing column and adjusting the height as appropriate. This must be used with 1x1 size.; AUDIO - Audio size. Used with audio ads. This must be used with 1x1 size. |
| width | integer (int32) | Required. The width of the Creative, AdUnit, or LineItem. |
| height | integer (int32) | Required. The height of the Creative, AdUnit, or LineItem. |

### `CreateLineItemCreativeAssociationRequest`

Request object for `CreateLineItemCreativeAssociation` method.

| Field | Type | Description |
|---|---|---|
| lineItemCreativeAssociation | `LineItemCreativeAssociation` | Required. The `LineItemCreativeAssociation` to create. |
| parent | string | Required. The parent resource where this `LineItemCreativeAssociation` will be created. Format: `networks/{network_code}/lineItems/{line_item_id}` |

### `UpdateLineItemCreativeAssociationRequest`

Request object for `UpdateLineItemCreativeAssociation` method.

| Field | Type | Description |
|---|---|---|
| updateMask | string (google-fieldmask) | Optional. The list of fields to update. |
| lineItemCreativeAssociation | `LineItemCreativeAssociation` | Required. The `LineItemCreativeAssociation` to update. Format: `networks/{network_code}/lineItems/{line_item_id}/creatives/{creative_id}` |

### `PreviewLineItemCreativeAssociationResponse_Preview`

Represents the `Creative` and its corresponding preview URL. */

| Field | Type | Description |
|---|---|---|
| onSitePreviewUrl | string | The URL for previewing this creative. |
| nativeStyle | string | The resource names of the `NativeStyle` for the preview. Only relevant when PreviewType is NATIVE. Format: `networks/{network_code}/nativeStyles/{native_style_id}` |
| previewType | string enum(PREVIEW_TYPE_UNSPECIFIED, STANDARD, NATIVE) | Represents the type of preview. Values: PREVIEW_TYPE_UNSPECIFIED - Default value. This value is unused.; STANDARD - Standard preview type.; NATIVE - `NativeStyle` preview type. |

### `LineItemCreativeAssociationStats_CreativeStats`

Contains statistics such as impressions, clicks delivered, and viewable impressions for creatives belonging to a CreativeSet.

| Field | Type | Description |
|---|---|---|
| viewableImpressionsDelivered | string (int64) | Output only. The number of video completions delivered. |
| clicksDelivered | string (int64) | Output only. The number of clicks delivered. |
| impressionsDelivered | string (int64) | Output only. The number of impressions delivered. |

