# Audience Segments

> Source: Google Ad Manager API (beta, REST v1) Discovery document (https://admanager.googleapis.com/$discovery/rest?version=v1, revision 20261118); release notes https://developers.google.com/ad-manager/api/beta/docs/release-notes. Fetched 2026-11-19. Resource names have the form `networks/{networkCode}/...`.

Used by koddi-offsite via: SOAP `AudienceSegmentService.getAudienceSegmentsByStatement`.

---

## networks.audienceSegments.get

`GET https://admanager.googleapis.com/v1/{+name}`

Retrieves an `AudienceSegment` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The resource name of the AudienceSegment. Format: `networks/{network_code}/audienceSegments/{audience_segment_id}` |

**Response**: `AudienceSegment`

---

## networks.audienceSegments.batchCreate

`POST https://admanager.googleapis.com/v1/{+parent}/audienceSegments:batchCreate`

Creates `AudienceSegment` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `AudienceSegments` will be created. Format: `networks/{network_code}` The parent field in the CreateAudienceSegmentRequest must match this field. |

**Request body**: `BatchCreateAudienceSegmentsRequest`

**Response**: `BatchCreateAudienceSegmentsResponse`

---

## networks.audienceSegments.batchUpdate

`POST https://admanager.googleapis.com/v1/{+parent}/audienceSegments:batchUpdate`

Batch updates `AudienceSegment` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `AudienceSegments` will be updated. Format: `networks/{network_code}` The parent field in the UpdateAudienceSegmentRequest.audienceSegment must match this field. |

**Request body**: `BatchUpdateAudienceSegmentsRequest`

**Response**: `BatchUpdateAudienceSegmentsResponse`

---

## networks.audienceSegments.patch

`PATCH https://admanager.googleapis.com/v1/{+name}`

Updates an `AudienceSegment` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Identifier. The resource name of the `AudienceSegment`. Format: `networks/{network_code}/audienceSegments/{audience_segment_id}` The `audience_segment_id` is not always numerical and may have one of the following suffixes: - `~direct` for directly licensed third-party segments - `~global` for globally licensed third-party segments |
| updateMask | query | string (google-fieldmask) |  | Optional. The list of fields to update. |

**Request body**: `AudienceSegment`

**Response**: `AudienceSegment`

---

## networks.audienceSegments.batchPopulate

`POST https://admanager.googleapis.com/v1/{+parent}/audienceSegments:batchPopulate`

Populates `AudienceSegment` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. Format: `networks/{network_code}` |

**Request body**: `BatchPopulateAudienceSegmentsRequest`

**Response**: `BatchPopulateAudienceSegmentsResponse`

---

## networks.audienceSegments.batchDeactivate

`POST https://admanager.googleapis.com/v1/{+parent}/audienceSegments:batchDeactivate`

Deactivates `AudienceSegment` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. Format: `networks/{network_code}` |

**Request body**: `BatchDeactivateAudienceSegmentsRequest`

**Response**: `BatchDeactivateAudienceSegmentsResponse`

---

## networks.audienceSegments.create

`POST https://admanager.googleapis.com/v1/{+parent}/audienceSegments`

Creates an `AudienceSegment` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where this `AudienceSegment` will be created. Format: `networks/{network_code}` |

**Request body**: `AudienceSegment`

**Response**: `AudienceSegment`

---

## networks.audienceSegments.batchReject

`POST https://admanager.googleapis.com/v1/{+parent}/audienceSegments:batchReject`

Rejects `AudienceSegment` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. Format: `networks/{network_code}` |

**Request body**: `BatchRejectAudienceSegmentsRequest`

**Response**: `BatchRejectAudienceSegmentsResponse`

---

## networks.audienceSegments.list

`GET https://admanager.googleapis.com/v1/{+parent}/audienceSegments`

Lists `AudienceSegment` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent publisher network associated with these audience segments. Format: `networks/{network_code}` |
| filter | query | string |  | Optional. Expression to filter the response. See syntax details at https://developers.google.com/ad-manager/api/beta/filters Notes specific to AudienceSegmentService: * `OR` operator: Not supported. Multiple conditions can only be combined using `AND`. Use `IN` for multi-value matching on a single field. * `NOT` operator: Cannot wrap compound expressions. For example, `NOT (A AND B)`. * Text-based searches (for example, from using wildcards) are case-insensitive. Other string comparisons are case-sensitive. Syntax summary: double-quoted `"..."` (never `'...'`) strings and RFC 3339 timestamps, full resource names on reference fields (for example, `order = "networks/123/orders/456"`, not `*Id` or bare IDs), prefix or suffix `*` wildcards with `=` (`displayName = "foo*"`), `:` for substring or repeated-field matching, unquoted enums and booleans, uppercase `AND`/`OR`/`NOT`, and standalone `IN(field, SET(v1, v2))` (not `field IN (...)`). **Filterable fields:** * `adIdSize` * `categoryIds` * `dataProviderDisplayName` * `displayName` * `idfaSize` * `mobileWebSize` * `ppidSize` * `segmentType` * `sharedId` * `size` * `status` * `thirdPartyAudienceSegment.approvalStatus` * `thirdPartyAudienceSegment.cost` * `thirdPartyAudienceSegment.endTime` * `thirdPartyAudienceSegment.licenseType` * `thirdPartyAudienceSegment.startTime` |
| orderBy | query | string |  | Optional. Expression to specify sorting order. See syntax details at https://developers.google.com/ad-manager/api/beta/filters#order |
| pageToken | query | string |  | Optional. A page token, received from a previous `ListAudienceSegments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAudienceSegments` must match the call that provided the page token. |
| skip | query | integer (int32) |  | Optional. Number of individual resources to skip while paginating. |
| pageSize | query | integer (int32) |  | Optional. The maximum number of `AudienceSegments` to return. The service may return fewer than this value. If unspecified, at most 50 `AudienceSegments` will be returned. The maximum value is 1000; values greater than 1000 will be coerced to 1000. |

**Response**: `ListAudienceSegmentsResponse`

---

## networks.audienceSegments.batchApprove

`POST https://admanager.googleapis.com/v1/{+parent}/audienceSegments:batchApprove`

Approves `AudienceSegment` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. Format: `networks/{network_code}` |

**Request body**: `BatchApproveAudienceSegmentsRequest`

**Response**: `BatchApproveAudienceSegmentsResponse`

---

## networks.audienceSegments.batchActivate

`POST https://admanager.googleapis.com/v1/{+parent}/audienceSegments:batchActivate`

Activates `AudienceSegment` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. Format: `networks/{network_code}` |

**Request body**: `BatchActivateAudienceSegmentsRequest`

**Response**: `BatchActivateAudienceSegmentsResponse`

---

## Schemas

### `AudienceSegment`

The `AudienceSegment` resource.

| Field | Type | Description |
|---|---|---|
| idfaSize | string (int64) | Output only. Number of unique Identifier for Advertisers (IDFA) identifiers in the `AudienceSegment`. |
| nonRuleBasedFirstPartyAudienceSegment | `AudienceSegment_NonRuleBasedFirstPartyAudienceSegment` | Optional. An `AudienceSegment` owned by the publisher network that does not contain a rule. Cookies are usually added to these segments through cookie upload. |
| adIdSize | string (int64) | Output only. Number of unique AdID identifiers in the `AudienceSegment`. |
| segmentType | string enum(AUDIENCE_SEGMENT_TYPE_UNSPECIFIED, FIRST_PARTY, SHARED, THIRD_PARTY) | Output only. Non-empty default. Type of the `AudienceSegment`. Every `AudienceSegment` is either `FIRST_PARTY` or `THIRD_PARTY`. Values: AUDIENCE_SEGMENT_TYPE_UNSPECIFIED - Default value. This value is unused.; FIRST_PARTY - Indicates that the segment is a first party segment created and owned by the publisher.; SHARED - Indicates that the segment is a first party segment shared by other clients.; THIRD_PARTY - Indicates that the segment is a third party segment licensed by the publisher from data providers. This does not include Google-provided licensed segments. |
| size | string (int64) | Output only. Number of unique identifiers in the `AudienceSegment`. |
| ppidSize | string (int64) | Output only. Number of unique publisher-provided (PPID) identifiers in the `AudienceSegment`. |
| description | string | Optional. Description of the `AudienceSegment`. This has a maximum length of 8192 characters. |
| mobileWebSize | string (int64) | Output only. Number of unique mobile web identifiers in the `AudienceSegment`. |
| thirdPartyAudienceSegment | `AudienceSegment_ThirdPartyAudienceSegment` | Output only. An `AudienceSegment` owned by a data provider and licensed to the Ad Manager publisher network. |
| name | string | Identifier. The resource name of the `AudienceSegment`. Format: `networks/{network_code}/audienceSegments/{audience_segment_id}` The `audience_segment_id` is not always numerical and may have one of the following suffixes: - `~direct` for directly licensed third-party segments - `~global` for globally licensed third-party segments |
| dataProviderDisplayName | string | Output only. Display name of the owner data provider. For a first-party audience segment, this is the display name of the publisher network. Otherwise, this is the display name of the entity providing the audience segment. |
| ruleBasedFirstPartyAudienceSegment | `AudienceSegment_RuleBasedFirstPartyAudienceSegment` | Optional. An `AudienceSegment` owned by the publisher network that contains a rule. |
| status | string enum(AUDIENCE_SEGMENT_STATUS_UNSPECIFIED, ACTIVE, INACTIVE, UNUSED) | Output only. Non-empty default. Status of the `AudienceSegment` used to determine whether the segment is available for targeting. Defaults to `ACTIVE` if not set. Values: AUDIENCE_SEGMENT_STATUS_UNSPECIFIED - Default value. This value is unused.; ACTIVE - Indicates that this audience segment is available for targeting.; INACTIVE - Indicates that this audience segment is not available for targeting.; UNUSED - Indicates that this audience segment was deactivated by Google because it is unused. |
| categoryIds | array<string (int64)> | Optional. Unordered list. IDs of the categories that this audience segment belongs to. See `segment_categories` for additional information about the categories. |
| sharedId | string (int64) | Output only. The ID of the `AudienceSegment`. Up to two resources may share this ID. |
| displayName | string | Required. Display name of the `AudienceSegment`. The attribute has a maximum length of 255 characters. |

### `BatchCreateAudienceSegmentsRequest`

Request object for `BatchCreateAudienceSegments` method.

| Field | Type | Description |
|---|---|---|
| requests | array<`CreateAudienceSegmentRequest`> | Required. The `AudienceSegment` objects to create. A maximum of 100 objects can be created in a batch. |

### `BatchCreateAudienceSegmentsResponse`

Response object for `BatchCreateAudienceSegments` method.

| Field | Type | Description |
|---|---|---|
| audienceSegments | array<`AudienceSegment`> | The `AudienceSegment` objects created. |

### `BatchUpdateAudienceSegmentsRequest`

Request object for `BatchUpdateAudienceSegments` method.

| Field | Type | Description |
|---|---|---|
| requests | array<`UpdateAudienceSegmentRequest`> | Required. The `AudienceSegment` objects to update. A maximum of 100 objects can be updated in a batch. |

### `BatchUpdateAudienceSegmentsResponse`

Response object for `BatchUpdateAudienceSegments` method.

| Field | Type | Description |
|---|---|---|
| audienceSegments | array<`AudienceSegment`> | The `AudienceSegment` objects updated. |

### `BatchPopulateAudienceSegmentsRequest`

Request message for `BatchPopulateAudienceSegments` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. Resource names for the AudienceSegments. Format: `networks/{network_code}/audienceSegments/{audience_segment_id}` |

### `BatchPopulateAudienceSegmentsResponse`

Response message for `BatchPopulateAudienceSegments` method.

| Field | Type | Description |
|---|---|---|
| changeCount | string (int64) | Number of audience segments populated. |

### `BatchDeactivateAudienceSegmentsRequest`

Request message for `BatchDeactivateAudienceSegments` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. Resource names for the AudienceSegments. Format: `networks/{network_code}/audienceSegments/{audience_segment_id}` |

### `BatchDeactivateAudienceSegmentsResponse`

Response message for `BatchDeactivateAudienceSegments` method.

| Field | Type | Description |
|---|---|---|
| changeCount | string (int64) | Number of audience segments deactivated. |

### `BatchRejectAudienceSegmentsRequest`

Request message for `BatchRejectAudienceSegments` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. Resource names for the AudienceSegments. Format: `networks/{network_code}/audienceSegments/{audience_segment_id}` |

### `BatchRejectAudienceSegmentsResponse`

Response message for `BatchRejectAudienceSegments` method.

| Field | Type | Description |
|---|---|---|
| changeCount | string (int64) | Number of audience segments rejected. |

### `ListAudienceSegmentsResponse`

Response object for `ListAudienceSegmentsRequest` containing matching `AudienceSegment` objects.

| Field | Type | Description |
|---|---|---|
| nextPageToken | string | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. |
| totalSize | integer (int32) | Total number of `AudienceSegment` objects. If a filter was included in the request, this reflects the total number after the filtering is applied. `total_size` won't be calculated in the response unless it has been included in a response field mask. The response field mask can be provided to the method by using the URL parameter `$fields` or `fields`, or by using the HTTP/gRPC header `X-Goog-FieldMask`. For more information, see https://developers.google.com/ad-manager/api/beta/field-masks |
| audienceSegments | array<`AudienceSegment`> | The `AudienceSegment` objects from the specified network. |

### `BatchApproveAudienceSegmentsRequest`

Request message for `BatchApproveAudienceSegments` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. Resource names for the AudienceSegments. Format: `networks/{network_code}/audienceSegments/{audience_segment_id}` |

### `BatchApproveAudienceSegmentsResponse`

Response message for `BatchApproveAudienceSegments` method.

| Field | Type | Description |
|---|---|---|
| changeCount | string (int64) | Number of audience segments approved. |

### `BatchActivateAudienceSegmentsRequest`

Request message for `BatchActivateAudienceSegments` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. Resource names for the AudienceSegments. Format: `networks/{network_code}/audienceSegments/{audience_segment_id}` |

### `BatchActivateAudienceSegmentsResponse`

Response message for `BatchActivateAudienceSegments` method.

| Field | Type | Description |
|---|---|---|
| changeCount | string (int64) | Number of audience segments activated. |

### `AudienceSegment_NonRuleBasedFirstPartyAudienceSegment`

An `AudienceSegment` owned by the publisher network that does not contain a rule. Cookies are usually added to these segments through cookie upload.

| Field | Type | Description |
|---|---|---|
| membershipExpirationDays | string (int64) | Required. Number of days after which a user's cookie will be removed from the `AudienceSegment` due to inactivity. The field can be between 1 and 540. |

### `AudienceSegment_RuleBasedFirstPartyAudienceSegment`

An `AudienceSegment` owned by the publisher network that contains a rule.

| Field | Type | Description |
|---|---|---|
| recencyDays | string (int64) | Optional. Number of days within which a user's cookie must match the `rule` before it's associated with the `AudienceSegment`. This is used with `page_views` to determine eligibility of the association. This attribute is required if `page_views` is greater than 1. When set, it can be between 1 and 30. |
| pageViews | string (int64) | Required. Number of times a user's cookie must match the `rule` before it's associated with the `AudienceSegment`. This is used with `recency_days` to determine eligibility of the association. This attribute is between 1 and 12. |
| membershipExpirationDays | string (int64) | Required. Number of days after which a user's cookie will be removed from the `AudienceSegment` due to inactivity. The field can be between 1 and 540. |
| rule | `AudienceSegment_Rule` | Required. The rule definition which determines the eligibility criteria for the `AudienceSegment`. |

### `AudienceSegment_ThirdPartyAudienceSegment`

An `AudienceSegment` owned by a data provider and licensed to the Ad Manager publisher network.

| Field | Type | Description |
|---|---|---|
| startTime | string (google-datetime) | Output only. Time which this segment becomes available for use. It is assigned by the data provider. |
| approvalStatus | string enum(AUDIENCE_SEGMENT_APPROVAL_STATUS_UNSPECIFIED, APPROVED, REJECTED, UNAPPROVED) | Output only. Whether the publisher has approved or rejected the segment. Values: AUDIENCE_SEGMENT_APPROVAL_STATUS_UNSPECIFIED - Default value. This value is unused.; APPROVED - Indicates that this segment is approved and can be targeted.; REJECTED - Indicates that this segment is rejected and cannot be targeted.; UNAPPROVED - Indicates that this segment is waiting to be approved or rejected. It cannot be targeted. |
| licenseType | string enum(AUDIENCE_SEGMENT_LICENSE_TYPE_UNSPECIFIED, DIRECT, GLOBAL) | Output only. The license type of the external segment. Values: AUDIENCE_SEGMENT_LICENSE_TYPE_UNSPECIFIED - Default value. This value is unused.; DIRECT - Indicates that the license is the result of a direct contract between the data provider and the publisher.; GLOBAL - Indicates that the license is the result of an agreement between Google and the data provider, which agrees to license their audience segments to all the publishers and/or advertisers of the Google ecosystem. |
| endTime | string (google-datetime) | Output only. Time which this segment ceases to be available. It is assigned by the data provider. |
| cost | `GoogleType__Money` | Output only. The CPM cost for the given segment. This is assigned by the data provider. The CPM cost comes from the active pricing if it exists, otherwise it comes from the latest pricing. |

### `CreateAudienceSegmentRequest`

Request object for `CreateAudienceSegment` method.

| Field | Type | Description |
|---|---|---|
| parent | string | Required. The parent resource where this `AudienceSegment` will be created. Format: `networks/{network_code}` |
| audienceSegment | `AudienceSegment` | Required. The `AudienceSegment` to create. Only first-party segments can be created. |

### `UpdateAudienceSegmentRequest`

Request object for `UpdateAudienceSegment` method.

| Field | Type | Description |
|---|---|---|
| audienceSegment | `AudienceSegment` | Required. The `AudienceSegment` to update. |
| updateMask | string (google-fieldmask) | Optional. The list of fields to update. |

### `AudienceSegment_Rule`

Eligibility criteria for a user to be part of an `AudienceSegment`.

| Field | Type | Description |
|---|---|---|
| inventoryTargeting | `InventoryTargeting` | Required. Specification of inventory (i.e. ad units and placements) that are part of the rule of the RuleBasedFirstPartyAudienceSegment. |
| customTargeting | `CustomTargeting` | Optional. Specification of custom criteria that are part of the rule of the RuleBasedFirstPartyAudienceSegment. Once specified, the server may return a normalized but equivalent representation of the rule. There are up to 3 levels of custom criteria allowed. See CustomTargeting and its sub-messages for limitations. |

### `GoogleType__Money`

Represents an amount of money with its currency type.

| Field | Type | Description |
|---|---|---|
| currencyCode | string | The three-letter currency code defined in ISO 4217. |
| units | string (int64) | The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. |
| nanos | integer (int32) | Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. |

### `CustomTargeting`

Represents the top level targeting expression for custom key/values, audience segments, and/or CMS metadata.

| Field | Type | Description |
|---|---|---|
| customTargetingClauses | array<`CustomTargetingClause`> | Optional. These clauses are all ORed together. |

### `InventoryTargeting`

Targeted ad units and AU placements are applied with logical OR. Example: (au:1 OR au:2 OR au_placement:5) AND (NOT (au:3))

| Field | Type | Description |
|---|---|---|
| targetedPlacements | array<string> | Optional. The resource names of the placements that should be targeted/included. |
| targetedAdUnits | array<`AdUnitTargeting`> | Optional. A list of ad units that should be targeted/included. |
| excludedAdUnits | array<`AdUnitTargeting`> | Optional. A list of ad units that should be excluded. Excluded AUs take precedence over targeted AUs. In fact an AU can be excluded only if one of its ancestors is targeted. Subsequently child AUs of an excluded AU can not be targeted (except through a Placement). |

### `CustomTargetingClause`

Represents a logical AND of individual custom targeting expressions.

| Field | Type | Description |
|---|---|---|
| cmsMetadataTargetings | array<`CmsMetadataTargeting`> | Optional. Leaf targeting expressions for cms metadata. |
| audienceSegmentTargetings | array<`AudienceSegmentTargeting`> | Optional. Leaf targeting expressions for audience segments. |
| customTargetingLiterals | array<`CustomTargetingLiteral`> | Optional. Leaf targeting expressions for custom key/values. |

### `AdUnitTargeting`

Specifies an ad unit and (optionally) its descendants.

| Field | Type | Description |
|---|---|---|
| includeDescendants | boolean | Whether this ad unit's children should be targeted/excluded as well. |
| adUnit | string | Optional. The resource name of this ad unit. |

### `AudienceSegmentTargeting`

Represents targeting for audience segments. The values are combined in a logical `OR`.

| Field | Type | Description |
|---|---|---|
| audienceSegments | array<string> | Optional. The targeted audience segments. This is either the resource name of a first-party audience segment or an alias to the effective third-party audience segment. Third-party audience segment resource names containing `~direct` or `~global` will be normalized by the server. For example, `networks/1234/audienceSegments/4567~direct` will be normalized to `networks/1234/audienceSegments/4567`. |
| negative | boolean | Whether this expression is negatively targeted, meaning it matches ad requests that exclude the below values. |

### `CmsMetadataTargeting`

Represents targeting for CMS metadata. The values are ORed together.

| Field | Type | Description |
|---|---|---|
| cmsMetadataValues | array<string> | Optional. The resource names of the targeted CMS metadata values. |
| negative | boolean | Whether this expression is negatively targeted, meaning it matches ad requests that exclude the below values. |

### `CustomTargetingLiteral`

Represents targeting for custom key/values. The values are ORed together.

| Field | Type | Description |
|---|---|---|
| customTargetingKey | string | Optional. The resource name of the targeted CustomKey. |
| negative | boolean | Whether this expression is negatively targeted, meaning it matches ad requests that exclude the below values. |
| customTargetingValues | array<string> | Optional. The resource names of the targeted CustomValues. |

