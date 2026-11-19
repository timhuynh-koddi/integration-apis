# Line Items

> Source: Google Ad Manager API (beta, REST v1) Discovery document (https://admanager.googleapis.com/$discovery/rest?version=v1, revision 20261118); release notes https://developers.google.com/ad-manager/api/beta/docs/release-notes. Fetched 2026-11-19. Resource names have the form `networks/{networkCode}/...`.

Used by koddi-offsite via: SOAP `LineItemService` get/create/update/Pause/Resume.

---

## networks.lineItems.batchUnarchive

`POST https://admanager.googleapis.com/v1/{+parent}/lineItems:batchUnarchive`

Batch unarchives `LineItem` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `LineItems` will be unarchived. Format: `networks/{network_code}` |

**Request body**: `BatchUnarchiveLineItemsRequest`

**Response**: `BatchUnarchiveLineItemsResponse`

---

## networks.lineItems.batchActivate

`POST https://admanager.googleapis.com/v1/{+parent}/lineItems:batchActivate`

Batch activates `LineItem` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `LineItems` will be updated. Format: `networks/{network_code}` |

**Request body**: `BatchActivateLineItemsRequest`

**Response**: `BatchActivateLineItemsResponse`

---

## networks.lineItems.batchArchive

`POST https://admanager.googleapis.com/v1/{+parent}/lineItems:batchArchive`

Batch archives `LineItem` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `LineItems` will be updated. Format: `networks/{network_code}` |

**Request body**: `BatchArchiveLineItemsRequest`

**Response**: `BatchArchiveLineItemsResponse`

---

## networks.lineItems.batchResume

`POST https://admanager.googleapis.com/v1/{+parent}/lineItems:batchResume`

Batch resumes `LineItem` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `LineItems` will be updated. Format: `networks/{network_code}` |

**Request body**: `BatchResumeLineItemsRequest`

**Response**: `BatchResumeLineItemsResponse`

---

## networks.lineItems.batchReserveAndOverbook

`POST https://admanager.googleapis.com/v1/{+parent}/lineItems:batchReserveAndOverbook`

Batch reserves and overbooks `LineItem` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `LineItems` will be updated. Format: `networks/{network_code}` |

**Request body**: `BatchReserveAndOverbookLineItemsRequest`

**Response**: `BatchReserveAndOverbookLineItemsResponse`

---

## networks.lineItems.batchCreate

`POST https://admanager.googleapis.com/v1/{+parent}/lineItems:batchCreate`

Creates `LineItem` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `LineItems` will be created. Format: `networks/{network_code}` The parent field in the CreateLineItemRequest must match this field. |

**Request body**: `BatchCreateLineItemsRequest`

**Response**: `BatchCreateLineItemsResponse`

---

## networks.lineItems.batchUpdate

`POST https://admanager.googleapis.com/v1/{+parent}/lineItems:batchUpdate`

Batch updates `LineItem` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `LineItems` will be updated. Format: `networks/{network_code}` The parent segment of the `line_item.name` in each `UpdateLineItemRequest` must match this field. |

**Request body**: `BatchUpdateLineItemsRequest`

**Response**: `BatchUpdateLineItemsResponse`

---

## networks.lineItems.patch

`PATCH https://admanager.googleapis.com/v1/{+name}`

Updates a `LineItem` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Identifier. The resource name of the `LineItem`. Format: `networks/{network_code}/lineItems/{line_item_id}` |
| updateMask | query | string (google-fieldmask) |  | Optional. The list of fields to update. |

**Request body**: `LineItem`

**Response**: `LineItem`

---

## networks.lineItems.list

`GET https://admanager.googleapis.com/v1/{+parent}/lineItems`

Lists `LineItem` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of LineItems. Format: `networks/{network_code}` |
| skip | query | integer (int32) |  | Optional. Number of individual resources to skip while paginating. |
| pageToken | query | string |  | Optional. A page token, received from a previous `ListLineItems` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLineItems` must match the call that provided the page token. |
| pageSize | query | integer (int32) |  | Optional. The maximum number of `LineItems` to return. The service may return fewer than this value. If unspecified, at most 50 `LineItems` will be returned. The maximum value is 1000; values greater than 1000 will be coerced to 1000. |
| filter | query | string |  | Optional. Expression to filter the response. See syntax details at https://developers.google.com/ad-manager/api/beta/filters Syntax summary: double-quoted `"..."` (never `'...'`) strings and RFC 3339 timestamps, full resource names on reference fields (for example, `order = "networks/123/orders/456"`, not `*Id` or bare IDs), prefix or suffix `*` wildcards with `=` (`displayName = "foo*"`), `:` for substring or repeated-field matching, unquoted enums and booleans, uppercase `AND`/`OR`/`NOT`, and standalone `IN(field, SET(v1, v2))` (not `field IN (...)`). **Filterable fields:** * `archived` * `contractedUnitsBought` * `costType` * `createTime` * `dealInfo.externalDealId` * `deliveryRateType` * `displayName` * `endTime` * `environmentType` * `externalLineItemId` * `goal.units` * `grpSettings.inTargetRatioEstimateMilliPercent` * `lineItemType` * `missingCreatives` * `name` * `notes` * `order` * `orderDisplayName` * `priority` * `roadblockingType` * `startTime` * `stats.clicksDelivered` * `stats.impressionsDelivered` * `stats.viewableImpressionsDelivered` * `status` * `targeting.inventoryTargeting.targetedAdUnits.adUnit` * `targeting.inventoryTargeting.targetedPlacements` * `targeting.mobileApplicationTargeting.firstPartyTargeting.targetedApplications` * `updateSource` * `updateTime` * `webPropertyCode` |
| orderBy | query | string |  | Optional. Expression to specify sorting order. See syntax details at https://developers.google.com/ad-manager/api/beta/filters#order |

**Response**: `ListLineItemsResponse`

---

## networks.lineItems.batchDelete

`POST https://admanager.googleapis.com/v1/{+parent}/lineItems:batchDelete`

Batch deletes `LineItem` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `LineItems` will be updated. Format: `networks/{network_code}` |

**Request body**: `BatchDeleteLineItemsRequest`

**Response**: `GoogleProtobuf__Empty`

---

## networks.lineItems.create

`POST https://admanager.googleapis.com/v1/{+parent}/lineItems`

Creates a `LineItem` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where this `LineItem` will be created. Format: `networks/{network_code}` |

**Request body**: `LineItem`

**Response**: `LineItem`

---

## networks.lineItems.batchPause

`POST https://admanager.googleapis.com/v1/{+parent}/lineItems:batchPause`

Batch pauses `LineItem` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `LineItems` will be updated. Format: `networks/{network_code}` |

**Request body**: `BatchPauseLineItemsRequest`

**Response**: `BatchPauseLineItemsResponse`

---

## networks.lineItems.batchRelease

`POST https://admanager.googleapis.com/v1/{+parent}/lineItems:batchRelease`

Batch releases `LineItem` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `LineItems` will be updated. Format: `networks/{network_code}` |

**Request body**: `BatchReleaseLineItemsRequest`

**Response**: `BatchReleaseLineItemsResponse`

---

## networks.lineItems.get

`GET https://admanager.googleapis.com/v1/{+name}`

Retrieves a `LineItem` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The resource name of the LineItem. Format: `networks/{network_code}/lineItems/{line_item_id}` |

**Response**: `LineItem`

---

## networks.lineItems.batchResumeAndOverbook

`POST https://admanager.googleapis.com/v1/{+parent}/lineItems:batchResumeAndOverbook`

Batch resumes and overbooks `LineItem` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `LineItems` will be updated. Format: `networks/{network_code}` |

**Request body**: `BatchResumeAndOverbookLineItemsRequest`

**Response**: `BatchResumeAndOverbookLineItemsResponse`

---

## networks.lineItems.batchReserve

`POST https://admanager.googleapis.com/v1/{+parent}/lineItems:batchReserve`

Batch reserves `LineItem` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `LineItems` will be updated. Format: `networks/{network_code}` |

**Request body**: `BatchReserveLineItemsRequest`

**Response**: `BatchReserveLineItemsResponse`

---

## Schemas

### `BatchUnarchiveLineItemsRequest`

Request object for `BatchUnarchiveLineItems` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The names of the `LineItem` objects to extract. Format: `networks/{network_code}/lineItems/{line_item}` |

### `BatchUnarchiveLineItemsResponse`

Response object for `BatchUnarchiveLineItems` method.

Type: object

### `BatchActivateLineItemsRequest`

Request object for `BatchActivateLineItems` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The names of the `LineItem` objects to activate. Format: `networks/{network_code}/lineItems/{line_item}` |

### `BatchActivateLineItemsResponse`

Response object for `BatchActivateLineItems` method.

Type: object

### `BatchArchiveLineItemsRequest`

Request object for `BatchArchiveLineItems` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The names of the `LineItem` objects to archive. Format: `networks/{network_code}/lineItems/{line_item}` |

### `BatchArchiveLineItemsResponse`

Response object for `BatchArchiveLineItems` method.

Type: object

### `BatchResumeLineItemsRequest`

Request object for `BatchResumeLineItems` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The names of the `LineItem` objects to resume. Format: `networks/{network_code}/lineItems/{line_item}` |

### `BatchResumeLineItemsResponse`

Response object for `BatchResumeLineItems` method.

Type: object

### `BatchReserveAndOverbookLineItemsRequest`

Request object for `BatchReserveAndOverbookLineItems` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The names of the `LineItem` objects to reserve and overbook. Format: `networks/{network_code}/lineItems/{line_item}` |

### `BatchReserveAndOverbookLineItemsResponse`

Response object for `BatchReserveAndOverbookLineItems` method.

Type: object

### `BatchCreateLineItemsRequest`

Request object for `BatchCreateLineItems` method.

| Field | Type | Description |
|---|---|---|
| requests | array<`CreateLineItemRequest`> | Required. The `LineItem` objects to create. A maximum of 100 objects can be created in a batch. |

### `BatchCreateLineItemsResponse`

Response object for `BatchCreateLineItems` method.

| Field | Type | Description |
|---|---|---|
| lineItems | array<`LineItem`> | The `LineItem` objects created. |

### `BatchUpdateLineItemsRequest`

Request object for `BatchUpdateLineItems` method.

| Field | Type | Description |
|---|---|---|
| requests | array<`UpdateLineItemRequest`> | Required. The `LineItem` objects to update. A maximum of 100 objects can be updated in a batch. |

### `BatchUpdateLineItemsResponse`

Response object for `BatchUpdateLineItems` method.

| Field | Type | Description |
|---|---|---|
| lineItems | array<`LineItem`> | The `LineItem` objects updated. |

### `LineItem`

A LineItem contains information about how specific ad creatives are intended to serve to your website or app along with pricing and other delivery details.

| Field | Type | Description |
|---|---|---|
| lineItemType | string enum(LINE_ITEM_TYPE_UNSPECIFIED, SPONSORSHIP, STANDARD, NETWORK, BULK, PRICE_PRIORITY, HOUSE, CLICK_TRACKING, ADSENSE, AD_EXCHANGE, BUMPER, PREFERRED_DEAL, AUDIENCE_EXTENSION) | Required. Indicates the line item type of a LineItem. The line item type determines the default priority of the line item. More information can be found at https://support.google.com/admanager/answer/177279. Values: LINE_ITEM_TYPE_UNSPECIFIED - Not specified value.; SPONSORSHIP - The type of LineItem for which a percentage of all the impressions that are being sold are reserved.; STANDARD - The type of LineItem for which a fixed quantity of impressions or clicks are reserved.; NETWORK - The type of LineItem most commonly used to fill a site's unsold inventory if not contractually obligated to deliver a requested number of impressions. Uses daily percentage of unsold impressions or clicks.; BULK - The type of LineItem for which a fixed quantity of impressions or clicks will be delivered at a priority lower than the STANDARD type.; PRICE_PRIORITY - The type of LineItem most commonly used to fill a site's unsold inventory if not contractually obligated to deliver a requested number of impressions. Uses fixed quantity percentage of unsold impressions or clicks.; HOUSE - The type of LineItem typically used for ads that promote products and services chosen by the publisher.; CLICK_TRACKING - The type of LineItem used for ads that track ads being served externally of Ad Manager.; ADSENSE - Targets the LineItem to specific inventory available to AdSense buyers.; AD_EXCHANGE - Targets the LineItem to specific inventory available to Authorized Buyers and the Open Auction.; BUMPER - Represents a non-monetizable video LineItem that targets one or more bumper positions, which are short house video messages used by publishers to separate content from ad breaks.; PREFERRED_DEAL - The type of LineItem for which there are no impressions reserved, and will serve for a second price bid.; AUDIENCE_EXTENSION - The type of LineItem used for configuring audience extension campaigns. |
| customVastExtension | string | Optional. Custom XML to be rendered in a custom VAST response at serving time. |
| effectiveAppliedLabels | array<`AppliedLabel`> | Output only. Contains the set of labels inherited from the order that contains this line item and the advertiser that owns the order. If a label has been negated, only the negated label is returned. |
| deliveryRateType | string enum(LINE_ITEM_DELIVERY_RATE_TYPE_UNSPECIFIED, AS_FAST_AS_POSSIBLE, EVENLY, FRONTLOADED) | Optional. Non-empty default. The strategy for delivering ads over the course of the line item's duration. This attribute defaults to EVENLY or FRONTLOADED depending on the network's configuration. Values: LINE_ITEM_DELIVERY_RATE_TYPE_UNSPECIFIED - No value specified.; AS_FAST_AS_POSSIBLE - The booked impressions may delivered well before the end time. Other lower-priority or lower-value LineItems will be stopped from delivering until the LineItem meets the number of impressions or clicks it is booked for.; EVENLY - LineItems are served as evenly as possible across the number of days specified in a LineItem's duration.; FRONTLOADED - LineItems are served more aggressively in the beginning of the flight date. |
| roadblockingType | string enum(ROADBLOCKING_TYPE_UNSPECIFIED, ALL_ROADBLOCK, AS_MANY_AS_POSSIBLE, CREATIVE_SET, ONE_OR_MORE, ONLY_ONE) | Optional. Non-empty default. The strategy for serving roadblocked creatives, that is, instances where multiple creatives must be served together on a single web page. This attribute defaults to ONE_OR_MORE. Values: ROADBLOCKING_TYPE_UNSPECIFIED - Default value. This value is unused.; ALL_ROADBLOCK - All or none of the creatives from a line item will serve. This option will only work if served to a GPT tag using SRA (single request architecture mode).; AS_MANY_AS_POSSIBLE - As many creatives from a line item as can fit on a page will serve. This could mean anywhere from one to all of a line item's creatives given the size constraints of ad slots on a page.; CREATIVE_SET - A master/companion creative set roadblocking type. A CreativePlaceholder must be set accordingly.; ONE_OR_MORE - Any number of creatives from a line item can serve together at a time.; ONLY_ONE - Only one creative from a line item can serve at a time. |
| customPacingCurve | `CustomPacingCurve` | Optional. The curve that is used to pace the line item's delivery. This field is required if and only if the delivery forecast source is CUSTOM_PACING_CURVE. |
| customFieldValues | array<`CustomFieldValue`> | Optional. The values of the custom fields associated with this line item. |
| notes | string | Optional. Provides any additional notes that may annotate the LineItem. This attribute has a maximum length of 65,535 characters. |
| repeatedCreativeServingEnabled | boolean | Optional. Indicates whether repeated creative serving is enabled for this line item. |
| goal | `Goal` | Optional. The primary goal that this LineItem is associated with, which is used in its pacing and budgeting. |
| skipInventoryCheck | boolean | Input only. The flag indicates whether the inventory check should be skipped when creating or updating a line item. The default value is false. Note: this field won't persist on the line item itself, and the value will only affect the current request. |
| displayName | string | Required. The name of the line item. This attribute has a maximum length of 255 characters. |
| frequencyCaps | array<`FrequencyCap`> | Optional. The set of frequency capping units for this LineItem. |
| autoExtensionDays | integer (int32) | Optional. The number of days to allow a line item to deliver past its target_end_time. A maximum of 7 days is allowed. This is feature is only available for Ad Manager 360 accounts. |
| updateSource | string | Output only. The application that last modified this line item. |
| maxVideoCreativeDuration | string (google-duration) | Optional. The max duration of a video creative associated with this LineItem. This attribute is only meaningful for video line items. This attribute is required for video line items and must be greater than 0. |
| createTime | string (google-datetime) | Output only. The time this line item was created. |
| updateTime | string (google-datetime) | Output only. The time this line item was last modified. |
| competitiveConstraintScope | string enum(EXCLUSION_SCOPE_UNSPECIFIED, PAGE, STREAM, POD) | Optional. Non-empty default. The CompetitiveConstraintScope for the competitive exclusion labels assigned to this line item. This field defaults to POD. Values: EXCLUSION_SCOPE_UNSPECIFIED - No value specified.; PAGE - The exclusion label applies to the entire page.; STREAM - The exclusion label applies to the entire stream of content.; POD - The exclusion label applies to the entire pod (or group). |
| order | string | Required. Immutable. The ID of the Order to which the LineItem belongs. Format: `networks/{network_code}/orders/{order}` |
| externalLineItemId | string | Optional. An identifier for the LineItem that is meaningful to the publisher. This attribute has a maximum length of 255 characters. |
| grpSettings | `GrpSettings` | Optional. Contains the information for a line item which has a target GRP demographic. |
| name | string | Identifier. The resource name of the `LineItem`. Format: `networks/{network_code}/lineItems/{line_item_id}` |
| allowedFormats | array<string enum(LINE_ITEM_ALLOWED_FORMAT_UNSPECIFIED, AUDIO, VIDEO, DISPLAY)> | Optional. The set of allowed formats for this line item. If empty, all formats are allowed. This property only applies to programmatic video line items. |
| endTimeUnlimited | boolean | Optional. Non-empty default. Specifies whether or not the LineItem has an end time. This attribute defaults to false. It can be be set to true for only line items of type SPONSORSHIP, NETWORK, PRICE_PRIORITY and HOUSE. |
| costType | string enum(LINE_ITEM_COST_TYPE_UNSPECIFIED, CPA, CPC, CPD, CPM, VCPM, CPM_IN_TARGET, CPF, CPCV) | Required. The method used for billing this LineItem. Values: LINE_ITEM_COST_TYPE_UNSPECIFIED - Not specified value.; CPA - Starting February 22, 2024 the CPA LineItemCostType will only be read as part of Spotlight deprecation, learn more at: https://support.google.com/admanager/answer/7519021#spotlight Cost per action. The line item lineItemType must be one of: * LineItemTypeEnum.LineItemType.SPONSORSHIP * LineItemTypeEnum.LineItemType.STANDARD * LineItemTypeEnum.LineItemType.BULK * LineItemTypeEnum.LineItemType.NETWORK; CPC - Cost per click. The line item lineItemType must be one of: * LineItemTypeEnum.LineItemType.SPONSORSHIP * LineItemTypeEnum.LineItemType.STANDARD * LineItemTypeEnum.LineItemType.BULK * LineItemTypeEnum.LineItemType.NETWORK * LineItemTypeEnum.LineItemType.PRICE_PRIORITY * LineItemTypeEnum.LineItemType.HOUSE; CPD - Cost per day. The line item lineItemType must be one of: * LineItemTypeEnum.LineItemType.SPONSORSHIP * LineItemTypeEnum.LineItemType.NETWORK; CPM - Cost per mille (thousand) impressions. The line item lineItemType must be one of: * LineItemTypeEnum.LineItemType.SPONSORSHIP * LineItemTypeEnum.LineItemType.STANDARD * LineItemTypeEnum.LineItemType.BULK * LineItemTypeEnum.LineItemType.NETWORK * LineItemTypeEnum.LineItemType.PRICE_PRIORITY * LineItemTypeEnum.LineItemType.HOUSE; VCPM - Cost per mille (thousand) Active View viewable impressions. The line item lineItemType must be one of: * LineItemTypeEnum.LineItemType.STANDARD; CPM_IN_TARGET - Cost per millie (thousand) in-target impressions. The line item lineItemType must be one of: * LineItemTypeEnum.LineItemType.STANDARD; CPF - Cost for the entire flight of the deal. The line item lineItemType must be must be one of: * LineItemTypeEnum.LineItemType.SPONSORSHIP; CPCV - Cost per completed view. The line item lineItemType must be one of: * LineItemTypeEnum.LineItemType.STANDARD. |
| reserveOnCreation | boolean | Input only. The flag indicates whether inventory should be reserved when creating a line item of types SPONSORSHIP and STANDARD in an unapproved Order. The default value is false. |
| appliedLabels | array<`AppliedLabel`> | Optional. The set of labels applied directly to this line item. |
| startTime | string (google-datetime) | Required. The date and time on which the LineItem is enabled to begin serving. This attribute is required and must be in the future. |
| priority | integer (int32) | Optional. Non-empty default. The priority for the line item. Valid values range from 1 to 16. This field defaults to the default priority of the LineItemType. The following list shows the default, minimum, and maximum priority values are for each line item type: - LineItemType: default priority (minimum priority, maximum priority) - SPONSORSHIP: 4 (2, 5) - STANDARD: 8 (6, 10) - NETWORK: 12 (11, 14) - BULK: 12 (11, 14) - PRICE_PRIORITY: 12 (11, 14) - HOUSE: 16 (15, 16) - CLICK_TRACKING: 16 (1, 16) - AD_EXCHANGE: 12 (1, 16) - ADSENSE: 12 (1, 16) - BUMPER: 16 (15, 16) - ADMOB: 21 (1, 16) - PREFERRED_DEAL: 12 (12, 12) This field can only be edited by certain networks, otherwise a PermissionError will occur. |
| webPropertyCode | string | Optional. The web property code used for dynamic allocation line items. This web property is only required with line item types AD_EXCHANGE and ADSENSE. |
| environmentType | string enum(ENVIRONMENT_TYPE_UNSPECIFIED, BROWSER, VIDEO_PLAYER) | Optional. Non-empty default. The environment that the LineItem is targeting. The default value is BROWSER. If this value is VIDEO_PLAYER, then this line item can only target AdUnits that have AdUnitSizes whose environmentType is also VIDEO_PLAYER. Values: ENVIRONMENT_TYPE_UNSPECIFIED - No value specified; BROWSER - A regular web browser.; VIDEO_PLAYER - Video players. |
| secondaryGoals | array<`Goal`> | Optional. The secondary goals that this LineItem is associated with. This is required and meaningful only if the line_item_type is SPONSORSHIP and cost_type is CPM. |
| targeting | `Targeting` | Required. Contains the targeting criteria for the ad campaign. |
| status | string enum(LINE_ITEM_COMPUTED_STATUS_UNSPECIFIED, CANCELED, COMPLETED, DELIVERING, DELIVERY_EXTENDED, DISAPPROVED, DRAFT, INACTIVE, PAUSED, PAUSED_INVENTORY_RELEASED, PENDING_APPROVAL, READY) | Output only. The status of the LineItem. Values: LINE_ITEM_COMPUTED_STATUS_UNSPECIFIED - No value specified.; CANCELED - The LineItem has been canceled and is no longer eligible to serve. This is a legacy status.; COMPLETED - The LineItem has completed its run.; DELIVERING - The LineItem has begun serving.; DELIVERY_EXTENDED - The LineItem has past its endDateTime with an auto extension, but hasn't met its goal.; DISAPPROVED - The LineItem has been disapproved and is not eligible to serve.; DRAFT - The LineItem is still being drafted.; INACTIVE - The LineItem is inactive. It is either caused by missing creatives or the network disabling auto-activation.; PAUSED - The LineItem has been paused from serving.; PAUSED_INVENTORY_RELEASED - The LineItem has been paused and its reserved inventory has been released. The LineItem will not serve.; PENDING_APPROVAL - The LineItem has been submitted for approval.; READY - The LineItem has been activated and is ready to serve. |
| missingCreatives | boolean | Output only. Indicates if a LineItem is missing any Creative creatives for the creativePlaceholders specified. Creative Creatives can be considered missing for several reasons including: - Not enough Creative creatives of a certain size have been uploaded, as determined by expected_creative_count. For example a LineItem specifies 750x350, 400x200 but only a 750x350 was uploaded. Or LineItem specifies 750x350 with an expected count of 2, but only one was uploaded. - The Creative.applied_labels of an associated Creative don't match the CreativePlaceholder.applied_labels of the LineItem. For example LineItem specifies 750x350 with a Foo AppliedLabel but a 750x350 creative without a AppliedLabel was uploaded. |
| deliveryIndicator | `DeliveryIndicator` | Output only. Indicates how well the line item has been performing. This will be empty if the delivery indicator information is not available due to one of the following reasons: - The line item is not delivering. - The line item has an unlimited goal or cap. - The line item has a percentage based goal or cap. |
| orderDisplayName | string | Output only. The name of the Order. |
| archived | boolean | Output only. The archival status of the LineItem. |
| creativeRotationType | string enum(CREATIVE_ROTATION_TYPE_UNSPECIFIED, EVENLY, OPTIMIZED, SEQUENTIAL, WEIGHTED) | Required. The strategy used for displaying multiple Creative objects that are associated with the LineItem. Values: CREATIVE_ROTATION_TYPE_UNSPECIFIED - No value specified.; EVENLY - Creatives are displayed approximately the same number of times over the duration of the line item.; OPTIMIZED - Creatives are served approximately proportionally to their performance.; SEQUENTIAL - Creatives are served exactly in sequential order, aka Storyboarding. Set on the LineItemCreativeAssociation.; WEIGHTED - Creatives are served approximately proportionally to their weights, set on the LineItemCreativeAssociation. |
| rate | `GoogleType__Money` | Required. The amount of money to spend per impression or click. |
| stats | `LineItemStats` | Output only. Contains trafficking statistics for the line item. This will be empty in case there are no statistics for a line item yet. |
| skipCrossSellingRuleWarningChecks | boolean | Input only. True to skip checks for warnings from rules applied to line items targeting inventory shared by a distributor partner for cross selling when performing an action on this line item. The default is false. Note: this field won't persist on the line item itself, and the value will only affect the current request. |
| childContentEligibility | string enum(CHILD_CONTENT_ELIGIBILITY_UNSPECIFIED, ALLOWED, DISALLOWED) | Optional. Non-empty default. Child content eligibility designation for this line item. This field defaults to DISALLOWED. Values: CHILD_CONTENT_ELIGIBILITY_UNSPECIFIED - Default value. This value is unused.; ALLOWED - This line item is eligible to serve on requests that are child-directed.; DISALLOWED - This line item is not eligible to serve on any requests that are child-directed. |
| deliveryForecastSource | string enum(LINE_ITEM_DELIVERY_FORECAST_SOURCE_UNSPECIFIED, CUSTOM_PACING_CURVE, FORECASTING, HISTORICAL) | Optional. Non-empty default. Strategy for choosing forecasted traffic shapes to pace line items. This field defaults to HISTORICAL. Values: LINE_ITEM_DELIVERY_FORECAST_SOURCE_UNSPECIFIED - Default value. This value is unused.; CUSTOM_PACING_CURVE - A user specified custom pacing curve will be used to pace line item delivery.; FORECASTING - The line item's projected future traffic will be used to pace line item delivery.; HISTORICAL - The line item's historical traffic shape will be used to pace line item delivery. |
| valueCpm | `GoogleType__Money` | Optional. Non-empty default. An amount to help the adserver rank inventory. value_cpm artificially raises the value of inventory over the rate but avoids raising the actual rate. This attribute defaults to a Money object in the local currency with units and nanos set to 0. |
| viewabilityProviderCompanies | array<string> | Optional. Optional IDs of the Company that provide ad verification for this line item. |
| allowOverbook | boolean | Input only. The flag indicates whether overbooking should be allowed when creating or updating reservations of line item types SPONSORSHIP and STANDARD. When true, operations on this line item will never trigger a ForecastError, which corresponds to an overbook warning in the UI. The default value is false. Note: this field won't persist on the line item itself, and the value will only affect the current request. |
| budget | `GoogleType__Money` | Output only. The amount of money allocated to the LineItem. This attribute is readonly and is populated by Google. The currency code is readonly. |
| creativeTargetings | array<`CreativeTargeting`> | Optional. A list of CreativeTargeting objects that can be used to specify creative level targeting for this line item. Creative level targeting is specified in a CreativePlaceholder.creative_targeting_display_name field by referencing the CreativeTargeting.display_name field. It also needs to be re-specified in the LineItemCreativeAssociation.targeting_display_name field when associating a line item with a creative that fits into that placeholder. |
| skippableAdType | string enum(SKIPPABLE_AD_TYPE_UNSPECIFIED, ANY, DISABLED, ENABLED, INSTREAM_SELECT) | Optional. Non-empty default. The nature of the line item's creatives' skippability. This attribute is only applicable for video line items, and defaults to NOT_SKIPPABLE. Values: SKIPPABLE_AD_TYPE_UNSPECIFIED - Default value. This value is unused.; ANY - Any skippable or not skippable. This is only for programmatic case when the creative skippability is decided by the buyside.; DISABLED - The ad is not skippable.; ENABLED - The ad is skippable.; INSTREAM_SELECT - The ad is an instream select ad. |
| discount | `LineItemDiscount` | Optional. Discount information for the line item. |
| dealInfo | `LineItemDealInfo` | Optional. The deal information associated with this line item, if it is programmatic. |
| allocationDeliveryProfile | string | Optional. The allocation delivery profile for the line item. |
| endTime | string (google-datetime) | Output only. The timestamp when the LineItem will stop serving. This attribute includes auto extension days. |
| thirdPartyMeasurementSettings | `ThirdPartyMeasurementSettings` | Optional. Third party auto-pixeling settings for cross-sell Partners. |
| companionDeliveryOption | string enum(COMPANION_DELIVERY_OPTION_UNSPECIFIED, OPTIONAL, AT_LEAST_ONE, ALL) | Optional. The delivery option for companions. Setting this field is only meaningful if the following conditions are met: - The "Guaranteed roadblocks" feature is enabled on your network. - One of the following is true (both cannot be true, these are mutually exclusive). - The environmentType is VIDEO_PLAYER. - The roadblockingType is CREATIVE_SET. This field defaults to OPTIONAL if the conditions are met. In all other cases it defaults to UNKNOWN and is not meaningful. Values: COMPANION_DELIVERY_OPTION_UNSPECIFIED - No value specified.; OPTIONAL - Companions are not required to serve a CreativeSet. The creative set can serve to inventory that has zero or more matching companions.; AT_LEAST_ONE - At least one companion must be served in order for the creative set to be used.; ALL - All companions in the set must be served in order for the creative set to be used. This can still serve to inventory that has more companions than can be filled. |
| sameAdvertiserExceptionEnabled | boolean | Optional. If a line item has a series of competitive exclusions on it, it could be blocked from serving with line items from the same advertiser. Setting this to true will allow line items from the same advertiser to serve regardless of the other competitive exclusion labels being applied. |
| youtubeKidsRestricted | boolean | Optional. Designates this line item as intended for YT Kids app. If true, all creatives associated with this line item must be reviewed and approved. See the help center article for more information: https://support.google.com/yt-partner-sales/answer/10015534. |
| targetEndTime | string (google-datetime) | Optional. The target end time of the line item. This attribute is required unless end_time_unlimited is set to true. If specified, it must be after the start_time. This does not include auto extension days. |
| reservationStatus | string enum(LINE_ITEM_RESERVATION_STATUS_UNSPECIFIED, RESERVED, UNRESERVED) | Output only. Describes whether or not inventory has been reserved for the LineItem. Values: LINE_ITEM_RESERVATION_STATUS_UNSPECIFIED - No value specified; RESERVED - Indicates that inventory has been reserved for the line item.; UNRESERVED - Indicates that inventory has not been reserved for the line item. |
| sponsorshipExclusivityEnabled | boolean | Optional. Whether the line item is enabled for sponsorship exclusivity. If true, only exclusive sponsorships can be served on inventory targeted by this LineItem. This control should only be available for 100% video sponsorships. |
| creativePlaceholders | array<`CreativePlaceholder`> | Required. Details about the creatives that are expected to serve through this LineItem. |
| contractedUnitsBought | string (int64) | Optional. This attribute is only applicable for certain line item types and acts as an "FYI" or note, which does not impact adserving or other backend systems. For SPONSORSHIP line items, this represents the minimum quantity, which is a lifetime impression volume goal for reporting purposes only. For STANDARD line items, this represent the contracted quantity, which is the number of units specified in the contract the advertiser has bought for this LineItem. This field is just a "FYI" for traffickers to manually intervene with the LineItem when needed. This attribute is only available for STANDARD line items if you have this feature enabled on your network. |

### `ListLineItemsResponse`

Response object for `ListLineItemsRequest` containing matching `LineItem` objects.

| Field | Type | Description |
|---|---|---|
| nextPageToken | string | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. |
| totalSize | integer (int32) | Total number of `LineItem` objects. If a filter was included in the request, this reflects the total number after the filtering is applied. `total_size` won't be calculated in the response unless it has been included in a response field mask. The response field mask can be provided to the method by using the URL parameter `$fields` or `fields`, or by using the HTTP/gRPC header `X-Goog-FieldMask`. For more information, see https://developers.google.com/ad-manager/api/beta/field-masks |
| lineItems | array<`LineItem`> | The `LineItem` objects from the specified network. |

### `BatchDeleteLineItemsRequest`

Request object for `BatchDeleteLineItems` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The names of the `LineItem` objects to delete. Format: `networks/{network_code}/lineItems/{line_item}` |

### `GoogleProtobuf__Empty`

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

Type: object

### `BatchPauseLineItemsRequest`

Request object for `BatchPauseLineItems` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The names of the `LineItem` objects to pause. Format: `networks/{network_code}/lineItems/{line_item}` |

### `BatchPauseLineItemsResponse`

Response object for `BatchPauseLineItems` method.

Type: object

### `BatchReleaseLineItemsRequest`

Request object for `BatchReleaseLineItems` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The names of the `LineItem` objects to release. Format: `networks/{network_code}/lineItems/{line_item}` |

### `BatchReleaseLineItemsResponse`

Response object for `BatchReleaseLineItems` method.

Type: object

### `BatchResumeAndOverbookLineItemsRequest`

Request object for `BatchResumeAndOverbookLineItems` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The names of the `LineItem` objects to resume and overbook. Format: `networks/{network_code}/lineItems/{line_item}` |

### `BatchResumeAndOverbookLineItemsResponse`

Response object for `BatchResumeAndOverbookLineItems` method.

Type: object

### `BatchReserveLineItemsRequest`

Request object for `BatchReserveLineItems` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The names of the `LineItem` objects to reserve. Format: `networks/{network_code}/lineItems/{line_item}` |

### `BatchReserveLineItemsResponse`

Response object for `BatchReserveLineItems` method.

Type: object

### `CreateLineItemRequest`

Request object for `CreateLineItem` method.

| Field | Type | Description |
|---|---|---|
| parent | string | Required. The parent resource where this `LineItem` will be created. Format: `networks/{network_code}` |
| lineItem | `LineItem` | Required. The `LineItem` to create. |

### `UpdateLineItemRequest`

Request object for `UpdateLineItem` method.

| Field | Type | Description |
|---|---|---|
| lineItem | `LineItem` | Required. The `LineItem` to update. The `LineItem`'s `name` is used to identify the `LineItem` to update. |
| updateMask | string (google-fieldmask) | Optional. The list of fields to update. |

### `AppliedLabel`

Represents a Label that can be applied to an entity.

| Field | Type | Description |
|---|---|---|
| label | string | Required. The label to be applied. Format: "networks/{network_code}/labels/{label_id}" |
| negated | boolean | Specifies whether or not to negate the effects of the label. |

### `CreativePlaceholder`

Describes a slot that a creative is expected to fill. This is used in forecasting and to validate that the correct creatives are associated with the line item.

| Field | Type | Description |
|---|---|---|
| appliedLabels | array<`AppliedLabel`> | Optional. Set of labels applied directly to this CreativePlaceholder. |
| companions | array<`CreativePlaceholderCompanion`> | Optional. The companions that the creative is expected to have. This attribute can only be set if the line item it belongs to has an EnvironmentType of VIDEO_PLAYER or roadblockingType of CREATIVE_SET. |
| size | `Size` | Required. The size that the creative is expected to have. |
| ampOnly | boolean | Optional. Non-empty default. Indicates if the expected creative of this placeholder has an AMP only variant. This is used to improve the accuracy of forecasting and has no effect on serving. By default, the value is false. |
| creativeTargetingDisplayName | string | Optional. The display name of the creative targeting that this CreativePlaceholder represents. |
| expectedCreativeCount | integer (int32) | Optional. Non-empty default. Expected number of creatives that will be uploaded corresponding to this creative placeholder. This estimate is used to improve the accuracy of forecasting; for example, if label frequency capping limits the number of times a creative may be served. By default, the expected creative count is set to 1. |

### `CreativeTargeting`

Represents the creative targeting criteria for a LineItem.

| Field | Type | Description |
|---|---|---|
| creativeTargetingDisplayName | string | Required. The name of this creative targeting. This attribute is required. |
| targeting | `Targeting` | Required. The Targeting criteria of this creative targeting. This attribute is required. |

### `CustomFieldValue`

A value for a CustomField on a resource.

| Field | Type | Description |
|---|---|---|
| value | `CustomFieldValue_Value` | Required. A typed value representation of the value. |
| customField | string | Required. The custom field for which this is a value. Format: "networks/{network_code}/customFields/{custom_field_id}" |

### `CustomPacingCurve`

A curve consisting of CustomPacingGoal objects that is used to pace line item delivery.

| Field | Type | Description |
|---|---|---|
| customPacingGoalUnit | string enum(CUSTOM_PACING_GOAL_UNIT_UNSPECIFIED, ABSOLUTE, MILLI_PERCENT) | Required. The unit of the CustomPacingGoal.amount values. Values: CUSTOM_PACING_GOAL_UNIT_UNSPECIFIED - Default value. This value is unused.; ABSOLUTE - The custom pacing goal amounts represent absolute numbers corresponding to the line item's Goal.unitType.; MILLI_PERCENT - The custom pacing goal amounts represent a millipercent. For example, 15000 millipercent equals 15%. |
| customPacingGoals | array<`CustomPacingGoal`> | Required. The list of goals that make up the custom pacing curve. |

### `DeliveryIndicator`

Indicates the delivery performance of the LineItem.

| Field | Type | Description |
|---|---|---|
| expectedDeliveryPercentage | number (double) | Output only. The expected delivery percentage of the LineItem. |
| actualDeliveryPercentage | number (double) | Output only. The actual delivery percentage of the LineItem. |

### `FrequencyCap`

Represents a Frequency Cap that can be applied to an entity.

| Field | Type | Description |
|---|---|---|
| timeUnit | string enum(TIME_UNIT_UNSPECIFIED, MINUTE, HOUR, DAY, WEEK, MONTH, LIFETIME, POD, STREAM) | The units of time of this frequency cap. Values: TIME_UNIT_UNSPECIFIED - Default value. This value is unused.; MINUTE - Minute; HOUR - Hour; DAY - Day; WEEK - Week; MONTH - Month; LIFETIME - Lifetime; POD - Per pod of ads in a video stream. Only valid for entities in a VIDEO_PLAYER environment.; STREAM - Per video stream. Only valid for entities in a VIDEO_PLAYER environment. |
| maxImpressions | string (int64) | The maximum number of impressions for this frequency cap. |
| timeAmount | string (int64) | The number of time units over which the frequency cap is effective. |

### `Goal`

Defines the criteria a LineItem needs to satisfy to meet its delivery goal.

| Field | Type | Description |
|---|---|---|
| unitType | string enum(UNIT_TYPE_UNSPECIFIED, IMPRESSIONS, CLICKS, CLICK_THROUGH_CPA_CONVERSIONS, VIEW_THROUGH_CPA_CONVERSIONS, TOTAL_CPA_CONVERSIONS, VIEWABLE_IMPRESSIONS, IN_TARGET_IMPRESSIONS, COMPLETED_VIEWS) | The type of the goal unit for the LineItem. Values: UNIT_TYPE_UNSPECIFIED - Default value. This value is unused.; IMPRESSIONS - The number of impressions served by creatives associated with the line item.; CLICKS - The number of clicks reported by creatives associated with the line item. The line item lineItemType must be one of: * LineItemTypeEnum.LineItemType.STANDARD * LineItemTypeEnum.LineItemType.BULK * LineItemTypeEnum.LineItemType.PRICE_PRIORITY; CLICK_THROUGH_CPA_CONVERSIONS - The number of click-through Cost-Per-Action (CPA) conversions from creatives associated with the line item. This is only supported as secondary goal and the LineItem.costType must be CostTypeEnum.CostType.CPA.; VIEW_THROUGH_CPA_CONVERSIONS - The number of view-through Cost-Per-Action (CPA) conversions from creatives associated with the line item. This is only supported as secondary goal and the LineItem.costType must be CostTypeEnum.CostType.CPA.; TOTAL_CPA_CONVERSIONS - The number of total Cost-Per-Action (CPA) conversions from creatives associated with the line item. This is only supported as secondary goal and the LineItem.costType must be CostTypeEnum.CostType.CPA.; VIEWABLE_IMPRESSIONS - The number of viewable impressions reported by creatives associated with the line item. The LineItem.lineItemType must be LineItemTypeEnum.LineItemType.STANDARD.; IN_TARGET_IMPRESSIONS - The number of in-target impressions reported by third party measurements. The LineItem.lineItemType must be LineItemTypeEnum.LineItemType.STANDARD.; COMPLETED_VIEWS - The number of completed views reported by creatives associated with the line item. A completed view is defined as having watched the entirety of the in-stream video ad and is only supported for standard reservation video line items. The LineItem.lineItemType must be LineItemTypeEnum.LineItemType.STANDARD. |
| goalType | string enum(GOAL_TYPE_UNSPECIFIED, NONE, LIFETIME, DAILY) | The type of the goal for the LineItem. It defines the period over which the goal should be reached. Values: GOAL_TYPE_UNSPECIFIED - Default value. This value is unused.; NONE - No goal is specified for the number of ads delivered. The line item lineItemType must be one of: * LineItemTypeEnum.LineItemType.PRICE_PRIORITY * LineItemTypeEnum.LineItemType.AD_EXCHANGE * LineItemTypeEnum.LineItemType.CLICK_TRACKING; LIFETIME - There is a goal on the number of ads delivered for this line item during its entire lifetime. The line item lineItemType must be one of: * LineItemTypeEnum.LineItemType.STANDARD * LineItemTypeEnum.LineItemType.BULK * LineItemTypeEnum.LineItemType.PRICE_PRIORITY * LineItemTypeEnum.LineItemType.ADSENSE * LineItemTypeEnum.LineItemType.AD_EXCHANGE * LineItemTypeEnum.LineItemType.ADMOB * LineItemTypeEnum.LineItemType.CLICK_TRACKING; DAILY - There is a daily goal on the number of ads delivered for this line item. The line item lineItemType must be one of: * LineItemTypeEnum.LineItemType.SPONSORSHIP * LineItemTypeEnum.LineItemType.NETWORK * LineItemTypeEnum.LineItemType.PRICE_PRIORITY * LineItemTypeEnum.LineItemType.HOUSE * LineItemTypeEnum.LineItemType.ADSENSE * LineItemTypeEnum.LineItemType.AD_EXCHANGE * LineItemTypeEnum.LineItemType.ADMOB * LineItemTypeEnum.LineItemType.BUMPER |
| units | string (int64) | If this is a primary goal, it represents the number or percentage of impressions or clicks that will be reserved. If the line item is of type LineItemTypeEnum.LineItemType.SPONSORSHIP, it represents the percentage of available impressions reserved. If the line item is of type LineItemTypeEnum.LineItemType.BULK or LineItemTypeEnum.LineItemType.PRICE_PRIORITY, it represents the number of remaining impressions reserved. If the line item is of type LineItemTypeEnum.LineItemType.NETWORK or LineItemTypeEnum.LineItemType.HOUSE, it represents the percentage of remaining impressions reserved. If this is an impression cap goal, it represents the number of impressions or conversions that the line item will stop serving at if reached. For valid line item types, see LineItem.impressionsCap. |

### `GrpSettings`

GrpSettings contains information for a line item that will have a target demographic when serving. This information will be used to set up tracking and enable reporting on the demographic information.

| Field | Type | Description |
|---|---|---|
| provider | string enum(GRP_PROVIDER_UNSPECIFIED, GOOGLE, NIELSEN) | Optional. Specifies the GRP provider of the LineItem. Values: GRP_PROVIDER_UNSPECIFIED - Default value. This value is unused.; GOOGLE - Google's GRP provider.; NIELSEN - Nielsen's GRP provider. |
| targetGender | string enum(GRP_TARGET_GENDER_UNSPECIFIED, BOTH, FEMALE, MALE) | Optional. Specifies the target gender of the LineItem. This field is only applicable if provider is not null. Values: GRP_TARGET_GENDER_UNSPECIFIED - Default value. This value is unused.; BOTH - Indicates that the GRP target gender is both male and female.; FEMALE - Indicates that the GRP target gender is Female.; MALE - Indicates that the GRP target gender is Male. |
| minTargetAge | string (int64) | Optional. Specifies the minimum target age (in years) of the LineItem. This field is only applicable if provider is not null. |
| pacingDeviceCategorizationType | string enum(PACING_DEVICE_CATEGORIZATION_UNSPECIFIED, GOOGLE, NIELSEN) | Optional. Specifies whether to use Google or Nielsen device breakdown in Nielsen Line Item auto pacing. Values: PACING_DEVICE_CATEGORIZATION_UNSPECIFIED - Default value. This value is unused.; GOOGLE - Use Google's device categorization in auto-pacing.; NIELSEN - Use Nielsen device categorization in auto-pacing |
| inTargetRatioEstimateMilliPercent | string (int64) | Optional. Estimate for the in-target ratio given the line item's audience targeting. This field is only applicable if provider is Nielsen, Goal.unitType is in-target impressions, and LineItemCostTypeEnum.LineItemCostType is in-target CPM. This field determines the in-target ratio to use for pacing Nielsen line items before Nielsen reporting data is available. Represented as a milli percent, so 55.7% becomes 55700. |
| applyTrueCoview | boolean | Optional. Specifies whether to apply true coviewing in Nielsen Line Item auto pacing. This field can only be true if nielsenCtvPacingType is not NONE. |
| nielsenCtvPacingType | string enum(NIELSEN_CTV_PACING_UNSPECIFIED, COVIEW, NONE, STRICT_COVIEW) | Optional. Specifies which pacing computation to apply in pacing to impressions from connected devices. Values: NIELSEN_CTV_PACING_UNSPECIFIED - Default value. This value is unused.; COVIEW - Indicates that Nielsen impressions on connected devices are included, and we apply coviewing in pacing.; NONE - The value returned if Nielsen measurement is disabled for connected devices.; STRICT_COVIEW - Indicates that Nielsen impressions on connected devices are included, and we apply strict coviewing in pacing. |
| maxTargetAge | string (int64) | Optional. Specifies the maximum target age (in years) of the LineItem. This field is only applicable if provider is not null. |

### `LineItemDealInfo`

Data transfer object for the exchange deal info of a line item.

| Field | Type | Description |
|---|---|---|
| externalDealId | string (int64) | Optional. The external deal ID shared between seller and buyer. This field is only present if the deal has been finalized. |

### `LineItemDiscount`

Discount information for a LineItem.

| Field | Type | Description |
|---|---|---|
| discountType | string enum(DISCOUNT_TYPE_UNSPECIFIED, ABSOLUTE_VALUE, PERCENTAGE) | Optional. The type of discount being applied to a LineItem, either percentage based or absolute. This attribute is optional and defaults to PERCENTAGE. Values: DISCOUNT_TYPE_UNSPECIFIED - No value specified; ABSOLUTE_VALUE - An absolute value will be discounted from the line item's cost.; PERCENTAGE - A percentage of the cost will be discounted for booking the line item. |
| discount | number (double) | Optional. The number here is either a percentage or an absolute value depending on the DiscountType. If the DiscountType is PERCENTAGE, then only non-fractional values are supported. |

### `LineItemStats`

Contains trafficking statistics for LineItem.

| Field | Type | Description |
|---|---|---|
| clicksDelivered | string (int64) | Output only. The number of clicks delivered |
| impressionsDelivered | string (int64) | Output only. The number of impressions delivered. |
| videoStartsDelivered | string (int64) | Output only. The number of video starts delivered. |
| videoCompletionsDelivered | string (int64) | Output only. The number of video completions delivered. |
| deliveryData | array<string (int64)> | Output only. Clicks or impressions delivered for each of the last 7 days. Values are in chronological order (oldest to newest). |
| viewableImpressionsDelivered | string (int64) | Output only. The number of viewable impressions delivered. |

### `Targeting`

Targeting expression.

| Field | Type | Description |
|---|---|---|
| dataSegmentTargeting | `DataSegmentTargeting` | Optional. Used to target data segments. |
| publisherProvidedSignalsTargeting | `PublisherProvidedSignalsTargeting` | Optional. Used to target publisher provided signals. |
| inventoryUrlTargeting | `InventoryUrlTargeting` | Optional. Used to target/exclude specific websites. |
| requestPlatformTargeting | `RequestPlatformTargeting` | Optional. Used to target specific request platforms. |
| customTargeting | `CustomTargeting` | Optional. Used to target key/values, audience segments, and/or CMS metadata. |
| dateTimeRangeTargeting | `DateTimeRangeTargeting` | Optional. Used to target a datetime range. |
| technologyTargeting | `TechnologyTargeting` | Optional. Used to target various technology targeting dimensions. |
| mobileApplicationTargeting | `MobileApplicationTargeting` | Optional. Used to target mobile applications. |
| contextualTargeting | `ContextualTargeting` | Optional. Used to target verticals / content labels |
| requestFormatTargeting | `RequestFormatTargeting` | Optional. Used to target inventory formats. |
| inventoryTargeting | `InventoryTargeting` | Optional. Used to target/exclude various ad units and/or placements. |
| dayPartTargeting | `DayPartTargeting` | Optional. Used to target day parts. |
| geoTargeting | `GeoTargeting` | Optional. Used to target/exclude various geo targets. |
| videoPositionTargeting | `VideoPositionTargeting` | Optional. Used to target video positions. |
| inventorySizeTargeting | `InventorySizeTargeting` | Optional. Used to target/exclude ad requests for specific ad slot sizes. |
| contentTargeting | `ContentTargeting` | Optional. Used to target content. |
| userDomainTargeting | `UserDomainTargeting` | Optional. Used to target user domains. |
| buyerUserListTargeting | `BuyerUserListTargeting` | Optional. Used to target buyer user lists. |

### `ThirdPartyMeasurementSettings`

Contains third party auto-pixeling settings for cross-sell Partners.

| Field | Type | Description |
|---|---|---|
| publisherViewabilityClientId | string | Optional. The third party partner ID for YouTube viewability verification for publisher. |
| brandLiftClientId | string | Optional. The third party partner ID for YouTube brand lift verification. |
| viewabilityReportingId | string | Optional. The reporting ID that maps viewability partner data with a campaign (or a group of related campaigns) specific data. |
| reachPartner | string enum(REACH_PARTNER_UNSPECIFIED, AUDIENCE_PROJECT, COMSCORE, GEMIUS, ISPOT_TV, KANTAR_MILLWARD_BROWN, NIELSEN, NONE, VIDEO_AMP, VIDEO_RESEARCH) | Optional. A field to determine the type of advertiser's ReachPartner. This field default is UNKNOWN. Values: REACH_PARTNER_UNSPECIFIED - Default value. This value is unused.; AUDIENCE_PROJECT - Indicates third-party reach integration partner Audience Project; COMSCORE - Indicates third-party reach integration partner Comscore.; GEMIUS - Indicates third-party reach integration partner Gemius.; ISPOT_TV - Indicates third-party reach integration partner iSpot.TV; KANTAR_MILLWARD_BROWN - Indicates third-party reach integration partner Kantar.; NIELSEN - Indicates third-party reach integration partner Nielsen.; NONE - Indicates there's no third-party reach integration partner.; VIDEO_AMP - Indicates third-party reach integration partner VideoAmp; VIDEO_RESEARCH - Indicates third-party reach integration partner Video Research. |
| publisherReachClientId | string | Optional. The third party partner ID for YouTube reach verification for publisher. |
| reachClientId | string | Optional. The third party partner ID for YouTube reach verification for advertiser. |
| brandLiftPartner | string enum(BRAND_LIFT_PARTNER_UNSPECIFIED, DYNATA, INTAGE, KANTAR_MILLWARD_BROWN, MACROMILL, NONE) | Optional. A field to determine the type of BrandLiftPartner. This field default is NONE. Values: BRAND_LIFT_PARTNER_UNSPECIFIED - Default value. This value is unused.; DYNATA - Indicates brand lift partner Dynata.; INTAGE - Indicates brand lift partner Intage.; KANTAR_MILLWARD_BROWN - Indicates brand lift partner Kantar.; MACROMILL - Indicates brand lift partner Macromill.; NONE - Indicates there's no brand lift partner. |
| publisherReachReportingId | string | Optional. The reporting ID that maps reach partner data with a campaign (or a group of related campaigns) specific data for publisher. |
| viewabilityClientId | string | Optional. The third party partner ID for YouTube viewability verification. |
| brandLiftReportingId | string | Optional. The reporting ID that maps brand lift partner data with a campaign (or a group of related campaigns) specific data. |
| publisherViewabilityReportingId | string | Optional. The reporting ID that maps viewability partner data with a campaign (or a group of related campaigns) specific data for publisher. |
| publisherReachPartner | string enum(REACH_PARTNER_UNSPECIFIED, AUDIENCE_PROJECT, COMSCORE, GEMIUS, ISPOT_TV, KANTAR_MILLWARD_BROWN, NIELSEN, NONE, VIDEO_AMP, VIDEO_RESEARCH) | Optional. A field to determine the type of publisher's ReachPartner. This field default is UNKNOWN. Values: REACH_PARTNER_UNSPECIFIED - Default value. This value is unused.; AUDIENCE_PROJECT - Indicates third-party reach integration partner Audience Project; COMSCORE - Indicates third-party reach integration partner Comscore.; GEMIUS - Indicates third-party reach integration partner Gemius.; ISPOT_TV - Indicates third-party reach integration partner iSpot.TV; KANTAR_MILLWARD_BROWN - Indicates third-party reach integration partner Kantar.; NIELSEN - Indicates third-party reach integration partner Nielsen.; NONE - Indicates there's no third-party reach integration partner.; VIDEO_AMP - Indicates third-party reach integration partner VideoAmp; VIDEO_RESEARCH - Indicates third-party reach integration partner Video Research. |
| publisherViewabilityPartner | string enum(VIEWABILITY_PARTNER_UNSPECIFIED, COMSCORE, DOUBLE_VERIFY, INTEGRAL_AD_SCIENCE, MOAT, NONE, TELEMETRY) | Optional. A field to determine the type of publisher's ViewabilityPartner. This field default is NONE. Values: VIEWABILITY_PARTNER_UNSPECIFIED - Default value. This value is unused.; COMSCORE - Indicates viewability partner Comscore.; DOUBLE_VERIFY - Indicates viewability partner Double Verify.; INTEGRAL_AD_SCIENCE - Indicates viewability partner Integral Ad Science.; MOAT - Indicates viewability partner Oracle Moat.; NONE - Indicates there's no viewability partner.; TELEMETRY - Indicates viewability partner Telemetry. |
| reachReportingId | string | Optional. The reporting ID that maps reach partner data with a campaign (or a group of related campaigns) specific data for advertiser. |
| viewabilityPartner | string enum(VIEWABILITY_PARTNER_UNSPECIFIED, COMSCORE, DOUBLE_VERIFY, INTEGRAL_AD_SCIENCE, MOAT, NONE, TELEMETRY) | Optional. A field to determine the type of ViewabilityPartner. This field default is NONE. Values: VIEWABILITY_PARTNER_UNSPECIFIED - Default value. This value is unused.; COMSCORE - Indicates viewability partner Comscore.; DOUBLE_VERIFY - Indicates viewability partner Double Verify.; INTEGRAL_AD_SCIENCE - Indicates viewability partner Integral Ad Science.; MOAT - Indicates viewability partner Oracle Moat.; NONE - Indicates there's no viewability partner.; TELEMETRY - Indicates viewability partner Telemetry. |

### `GoogleType__Money`

Represents an amount of money with its currency type.

| Field | Type | Description |
|---|---|---|
| currencyCode | string | The three-letter currency code defined in ISO 4217. |
| units | string (int64) | The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. |
| nanos | integer (int32) | Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. |

### `CreativePlaceholderCompanion`

An individual companion to a CreativePlaceholder.

| Field | Type | Description |
|---|---|---|
| size | `Size` | Required. The size of the companion to a CreativePlaceholder. |

### `Size`

Represents the dimensions of an AdUnit, LineItem, or Creative.

| Field | Type | Description |
|---|---|---|
| sizeType | string enum(SIZE_TYPE_UNSPECIFIED, PIXEL, ASPECT_RATIO, INTERSTITIAL, IGNORED, NATIVE, FLUID, AUDIO) | Required. The SizeType of the Creative, AdUnit, or LineItem. Values: SIZE_TYPE_UNSPECIFIED - Default value. This value is unused.; PIXEL - Dimension based size, an actual height and width in pixels.; ASPECT_RATIO - Size is expressed as a ratio. For example, 4:1 could be met by a 100 x 25 sized image.; INTERSTITIAL - Out-of-page (Interstitial) size that is not related to the slot it is served. This must be used with 1x1 size.; IGNORED - Size is ignored. This must be used with 1x1 size.; NATIVE - Native size, which is a function of the how the client renders the creative. This must be used with 1x1 size.; FLUID - Fluid size. Automatically sizes the ad by filling the width of the enclosing column and adjusting the height as appropriate. This must be used with 1x1 size.; AUDIO - Audio size. Used with audio ads. This must be used with 1x1 size. |
| width | integer (int32) | Required. The width of the Creative, AdUnit, or LineItem. |
| height | integer (int32) | Required. The height of the Creative, AdUnit, or LineItem. |

### `CustomFieldValue_Value`

Represent custom field value type.

| Field | Type | Description |
|---|---|---|
| toggleValue | boolean | The value, if the CustomFieldDataType is TOGGLE. |
| dropdownValue | string (int64) | The custom_field_option_id, if the CustomFieldDataType is DROPDOWN. |
| numberValue | number (double) | The value, if the CustomFieldDataType is NUMBER. |
| stringValue | string | The value, if the CustomFieldDataType is STRING. |

### `CustomPacingGoal`

An interval of a CustomPacingCurve. A custom pacing goal contains a start time and an amount. The goal will apply until either the next custom pacing goal's getStartTime or the line item's end time if it is the last goal.

| Field | Type | Description |
|---|---|---|
| useLineItemStartTime | boolean | Optional. Input only. Whether the LineItem.startTime should be used for the start date and time of this goal. This field is not persisted and if it is set to true, the startTime field will be populated by the line item's start time. |
| startTime | string (google-datetime) | Optional. The start date and time of the goal. This field is required unless useLineItemStartTime is true. |
| amount | string (int64) | Optional. The amount associated with the goal. This field is required. |

### `BuyerUserListTargeting`

Buyer User List Targeting.

| Field | Type | Description |
|---|---|---|
| hasBuyerUserListTargeting | boolean | Output only. Whether any buyer user lists are currently targeted. |

### `ContentTargeting`

Content Targeting Targeted/excluded content entities and bundles.

| Field | Type | Description |
|---|---|---|
| targetedContentBundles | array<string> | Optional. The resource names of the ContentBundles that should be targeted/included. |
| excludedContentBundles | array<string> | Optional. The resource names of the ContentBundles that should be excluded. |
| excludedContent | array<string> | Optional. The resource names of the Content that should be excluded. |
| targetedContent | array<string> | Optional. The resource names of the Content that should be targeted/included. |

### `ContextualTargeting`

Contextual Targeting

| Field | Type | Description |
|---|---|---|
| targetedVerticals | array<string> | Optional. A list of verticals that should be targeted/included. Verticals are `AdCategory` resources of type `VERTICAL`. Format: `networks/{network_code}/adCategories/{ad_category_id}` |
| excludedContentLabels | array<string> | Optional. A list of content labels that should be excluded. |
| excludedVerticals | array<string> | Optional. A list of verticals that should be excluded. Verticals are `AdCategory` resources of type `VERTICAL`. Format: `networks/{network_code}/adCategories/{ad_category_id}` |

### `CustomTargeting`

Represents the top level targeting expression for custom key/values, audience segments, and/or CMS metadata.

| Field | Type | Description |
|---|---|---|
| customTargetingClauses | array<`CustomTargetingClause`> | Optional. These clauses are all ORed together. |

### `DataSegmentTargeting`

Data Segment Targeting

| Field | Type | Description |
|---|---|---|
| hasDataSegmentTargeting | boolean | Output only. Whether any data segments are currently targeted. |

### `DateTimeRangeTargeting`

Represents targeting for a range of datetimes.

| Field | Type | Description |
|---|---|---|
| targetedRange | array<`GoogleType__Interval`> | Optional. The targeted datetime ranges. |

### `DayPartTargeting`

Day Part Targeting

| Field | Type | Description |
|---|---|---|
| daypartingTimeZone | string enum(DAYPARTING_TIME_ZONE_UNSPECIFIED, PUBLISHER, USER) | Required. The time zone to use for the day parts. Values: DAYPARTING_TIME_ZONE_UNSPECIFIED - Default value. This value is unused.; PUBLISHER - Use the time zone of the publisher for daypart targeting.; USER - Use the time zone of the browser for daypart targeting. |
| targetedDayParts | array<`DayPart`> | Optional. The targeted day parts. |

### `GeoTargeting`

Represents a list of targeted and excluded geos.

| Field | Type | Description |
|---|---|---|
| targetedGeos | array<string> | Optional. A list of geo resource names that should be targeted/included. |
| excludedGeos | array<string> | Optional. A list of geo resource names that should be excluded. |

### `InventorySizeTargeting`

Represents a list of targeted and excluded sizes.

| Field | Type | Description |
|---|---|---|
| targetedInventorySizes | array<`Size`> | Optional. A list of sizes that should be targeted/included. |
| excludedInventorySizes | array<`Size`> | Optional. A list of sizes that should be excluded. |

### `InventoryTargeting`

Targeted ad units and AU placements are applied with logical OR. Example: (au:1 OR au:2 OR au_placement:5) AND (NOT (au:3))

| Field | Type | Description |
|---|---|---|
| targetedPlacements | array<string> | Optional. The resource names of the placements that should be targeted/included. |
| targetedAdUnits | array<`AdUnitTargeting`> | Optional. A list of ad units that should be targeted/included. |
| excludedAdUnits | array<`AdUnitTargeting`> | Optional. A list of ad units that should be excluded. Excluded AUs take precedence over targeted AUs. In fact an AU can be excluded only if one of its ancestors is targeted. Subsequently child AUs of an excluded AU can not be targeted (except through a Placement). |

### `InventoryUrlTargeting`

Represents a list of targeted and excluded inventory URLs and Sites.

| Field | Type | Description |
|---|---|---|
| targetedInventoryUrls | array<string> | Optional. A list of inventory URL resource names that should be targeted/included. |
| excludedInventoryUrls | array<string> | Optional. A list of inventory URL resource names that should be excluded. |

### `MobileApplicationTargeting`

Mobile Application Targeting

| Field | Type | Description |
|---|---|---|
| firstPartyTargeting | `FirstPartyMobileApplicationTargeting` | Optional. The targeted/excluded first-party mobile applications. |

### `PublisherProvidedSignalsTargeting`

Publisher Provided Signals Targeting

| Field | Type | Description |
|---|---|---|
| targetedTaxonomyCategories | array<string> | Optional. The resource names of the taxonomy categories that should be targeted/included. |
| excludedTaxonomyCategories | array<string> | Optional. The resource names of the taxonomy categories that should be excluded. |

### `RequestFormatTargeting`

Request Format Targeting This message specifies inclusion or exclusion of various request formats for targeting. Each optional boolean field controls the targeting of a specific request format: - If set to `true`, the corresponding format is **included** in targeting. - If set to `false`, the corresponding format is **excluded** from targeting. - If unset, the format is neither explicitly included nor excluded.

| Field | Type | Description |
|---|---|---|
| appOpenEnabled | boolean | Optional. Controls app open format targeting. Set to `true` to include, `false` to exclude, or leave unset for neither. |
| instreamVideoEnabled | boolean | Optional. Controls instream video format targeting. Set to `true` to include, `false` to exclude, or leave unset for neither. |
| rewardedInterstitialEnabled | boolean | Optional. Controls rewarded interstitial format targeting. Set to `true` to include, `false` to exclude, or leave unset for neither. |
| bannerEnabled | boolean | Optional. Controls banner format targeting. Set to `true` to include, `false` to exclude, or leave unset for neither. |
| nativeAdvancedEnabled | boolean | Optional. Controls native advanced format targeting. Set to `true` to include, `false` to exclude, or leave unset for neither. |
| instreamAudioEnabled | boolean | Optional. Controls instream audio format targeting. Set to `true` to include, `false` to exclude, or leave unset for neither. |
| rewardedEnabled | boolean | Optional. Controls rewarded format targeting. Set to `true` to include, `false` to exclude, or leave unset for neither. |
| interstitialEnabled | boolean | Optional. Controls interstitial format targeting. Set to `true` to include, `false` to exclude, or leave unset for neither. |
| anchorEnabled | boolean | Optional. Controls anchor format targeting. Set to `true` to include, `false` to exclude, or leave unset for neither. |

### `RequestPlatformTargeting`

Represents a list of targeted request platforms.

| Field | Type | Description |
|---|---|---|
| requestPlatforms | array<string enum(REQUEST_PLATFORM_UNSPECIFIED, BROWSER, MOBILE_APP, VIDEO_PLAYER)> | Optional. The list of request platforms that should be targeted. |

### `TechnologyTargeting`

Various types of technology targeting expressed by child messages are applied with logical AND.

| Field | Type | Description |
|---|---|---|
| deviceCapabilityTargeting | `DeviceCapabilityTargeting` | Optional. Device capability targeting dimension. |
| mobileCarrierTargeting | `MobileCarrierTargeting` | Optional. Mobile carrier targeting dimension. |
| browserLanguageTargeting | `BrowserLanguageTargeting` | Optional. Browser language targeting dimension. |
| browserTargeting | `BrowserTargeting` | Optional. Browser targeting dimension. |
| deviceManufacturerTargeting | `DeviceManufacturerTargeting` | Optional. Device manufacturer targeting dimension. |
| bandwidthTargeting | `BandwidthTargeting` | Optional. Bandwidth targeting dimension. |
| deviceCategoryTargeting | `DeviceCategoryTargeting` | Optional. Device category targeting dimension. |
| operatingSystemTargeting | `OperatingSystemTargeting` | Optional. Operating system targeting dimension. |

### `UserDomainTargeting`

User Domain Targeting

| Field | Type | Description |
|---|---|---|
| targetedUserDomains | array<string> | Optional. A list of user domains that should be targeted/included. |
| excludedUserDomains | array<string> | Optional. A list of user domains that should be excluded. |

### `VideoPositionTargeting`

Video Position Targeting

| Field | Type | Description |
|---|---|---|
| videoPositions | array<`VideoPosition`> | Optional. A list of video position targeting criterion (applied with a logical AND). |

### `CustomTargetingClause`

Represents a logical AND of individual custom targeting expressions.

| Field | Type | Description |
|---|---|---|
| cmsMetadataTargetings | array<`CmsMetadataTargeting`> | Optional. Leaf targeting expressions for cms metadata. |
| audienceSegmentTargetings | array<`AudienceSegmentTargeting`> | Optional. Leaf targeting expressions for audience segments. |
| customTargetingLiterals | array<`CustomTargetingLiteral`> | Optional. Leaf targeting expressions for custom key/values. |

### `GoogleType__Interval`

Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.

| Field | Type | Description |
|---|---|---|
| endTime | string (google-datetime) | Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. |
| startTime | string (google-datetime) | Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. |

### `DayPart`

A day of the week and time interval within the day.

| Field | Type | Description |
|---|---|---|
| dayOfWeek | string enum(DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY) | Required. The day of the week. Values: DAY_OF_WEEK_UNSPECIFIED - The day of the week is unspecified.; MONDAY - Monday; TUESDAY - Tuesday; WEDNESDAY - Wednesday; THURSDAY - Thursday; FRIDAY - Friday; SATURDAY - Saturday; SUNDAY - Sunday |
| startTime | `GoogleType__TimeOfDay` | Required. The start time of the day part. |
| endTime | `GoogleType__TimeOfDay` | Required. The end time of the day part. |

### `AdUnitTargeting`

Specifies an ad unit and (optionally) its descendants.

| Field | Type | Description |
|---|---|---|
| includeDescendants | boolean | Whether this ad unit's children should be targeted/excluded as well. |
| adUnit | string | Optional. The resource name of this ad unit. |

### `FirstPartyMobileApplicationTargeting`

First-party mobile application targeting.

| Field | Type | Description |
|---|---|---|
| excludedApplications | array<string> | Optional. The resource names of the first-party applications that should be excluded. |
| targetedApplications | array<string> | Optional. The resource names of the first-party applications that should be targeted. |

### `BandwidthTargeting`

Bandwidth Targeting. Reach users accessing the internet through various means of connection, such as cable, DSL, or dial-up. Can be useful to target campaigns using low-resolution creatives or text ads for users with low bandwidth.

| Field | Type | Description |
|---|---|---|
| excludedBandwidthGroups | array<string> | Optional. A list of resource names of the bandwidth groups that should be excluded. |
| targetedBandwidthGroups | array<string> | Optional. A list of resource names of the bandwidth groups that should be targeted/included. |

### `BrowserLanguageTargeting`

Browser Language Targeting. For ads targeting mobile apps and their associated WebViews, the language used is based on the language specified by the user in their mobile device settings. If a browser has more than one language assigned to it, each language generates an impression.

| Field | Type | Description |
|---|---|---|
| excludedBrowserLanguages | array<string> | Optional. A list of browser language resource names that should be excluded. |
| targetedBrowserLanguages | array<string> | Optional. A list of browser language resource names that should be targeted/included. |

### `BrowserTargeting`

Browser Targeting. Allows publishers to target/exclude a browser type (e.g. Chrome, Firefox, Safari). For more information, see https://support.google.com/admanager/answer/2884033 (Targeting types > Browser).

| Field | Type | Description |
|---|---|---|
| excludedBrowsers | array<string> | Optional. A list of browser resource names that should be excluded. |
| targetedBrowsers | array<string> | Optional. A list of browser resource names that should be targeted/included. |

### `DeviceCapabilityTargeting`

Device Capability Targeting. Can be used to target/exclude users using mobile apps, ad requests resulting from apps built on the MRAID standard, or users on devices that are able to make phone calls versus devices that aren't able to make phone calls, such as tablets.

| Field | Type | Description |
|---|---|---|
| targetedCapabilities | array<string> | Optional. A list of device capability resource names that should be targeted/included. |
| excludedCapabilities | array<string> | Optional. A list of device capability resource names that should be excluded. |

### `DeviceCategoryTargeting`

Represents a list of targeted and excluded device categories.

| Field | Type | Description |
|---|---|---|
| targetedCategories | array<string> | Optional. A list of device category resource names that should be targeted/included. |
| excludedCategories | array<string> | Optional. A list of device category resource names that should be excluded. |

### `DeviceManufacturerTargeting`

Device Manufacturer Targeting. Can be used to target/exclude users on devices made by specific brands or companies, such as Apple, Google, Samsung and others. For more information, see https://support.google.com/admanager/answer/2884033 ("Targeting types > Device manufacturer").

| Field | Type | Description |
|---|---|---|
| targetedMobileDeviceSubmodels | array<string> | Optional. A list of mobile device submodel resource names that should be targeted/included. |
| excludedMobileDeviceSubmodels | array<string> | Optional. A list of mobile device submodel resource names that should be excluded. |
| excludedMobileDevices | array<string> | Optional. A list of mobile device resource names that should be excluded. |
| targetedDeviceManufacturers | array<string> | Optional. A list of device manufacturer resource names that should be targeted/included. |
| targetedMobileDevices | array<string> | Optional. A list of mobile device resource names that should be targeted/included. |
| excludedDeviceManufacturers | array<string> | Optional. A list of device manufacturer resource names that should be excluded. |

### `MobileCarrierTargeting`

Mobile Carrier Targeting. Used to target or exclude mobile carriers.

| Field | Type | Description |
|---|---|---|
| targetedMobileCarriers | array<string> | Optional. A list of mobile carrier resource names that should be targeted/included. |
| excludedMobileCarriers | array<string> | Optional. A list of mobile carrier resource names that should be excluded. |

### `OperatingSystemTargeting`

Operating System Targeting

| Field | Type | Description |
|---|---|---|
| excludedOperatingSystems | array<string> | Optional. A list of operating system resource names that should be excluded. |
| targetedOperatingSystemVersions | array<string> | Optional. A list of operating system version resource names that should be targeted/included. |
| targetedOperatingSystems | array<string> | Optional. A list of operating system resource names that should be targeted/included. |
| excludedOperatingSystemVersions | array<string> | Optional. A list of operating system version resource names that should be excluded. |

### `VideoPosition`

Video Position Targeting Criterion

| Field | Type | Description |
|---|---|---|
| podPosition | string (int64) | Optional. The video position within a pod to target. If set, `adSpot`, `bumperType`, and `positionType` must be unset. |
| bumperType | string enum(TARGETED_VIDEO_BUMPER_TYPE_UNSPECIFIED, AFTER, BEFORE) | Optional. The video bumper type to target. If set, `adSpot`, `podPosition`, and `positionType` must be unset. Values: TARGETED_VIDEO_BUMPER_TYPE_UNSPECIFIED - Default value. This value is unused.; AFTER - Represents the bumper position after the ad pod.; BEFORE - Represents the bumper position before the ad pod. |
| adSpot | string | Optional. The resource name of the custom ad spot to target. If set, `bumperType`, `podPosition`, and `positionType` must be unset. Format: `networks/{network_code}/adSpots/{ad_spot_id}` |
| midrollIndex | string (int64) | Optional. The index of the mid-roll to target. This field is ignored when targeting any video position (e.g. position_type) other than MIDROLL. |
| positionType | string enum(VIDEO_POSITION_UNSPECIFIED, ALL, MIDROLL, POSTROLL, PREROLL) | Optional. The position within a video to target. A video ad can target a position (pre-roll, all mid-rolls, or post-roll) or a specific mid-roll index. Values: VIDEO_POSITION_UNSPECIFIED - Default value. This value is unused.; ALL - Allow ad placement at any position within the video.; MIDROLL - Target ad placement during the video.; POSTROLL - Target ad placement after the video ends.; PREROLL - Target ad placement before the video starts. |
| reverseMidrollIndex | string (int64) | Optional. The index from the back of the pod of the mid-roll to target. This field is ignored when targeting any video position (e.g. position_type) other than MIDROLL or if targeting a specific midroll index (e.g. midroll_index != 0). |

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

### `GoogleType__TimeOfDay`

Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.

| Field | Type | Description |
|---|---|---|
| minutes | integer (int32) | Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. |
| seconds | integer (int32) | Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds. |
| nanos | integer (int32) | Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. |
| hours | integer (int32) | Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. |

