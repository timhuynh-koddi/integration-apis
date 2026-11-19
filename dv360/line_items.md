# Line Items

> Source: Display & Video 360 API v4 REST Discovery document (https://displayvideo.googleapis.com/$discovery/rest?version=v4, revision 20261117); reference https://developers.google.com/display-video/api/reference/rest. Fetched 2026-11-19.

Used by koddi-offsite via: `NewAdvertisersLineItemsService` Get/List/Create/Patch/BulkEditAssignedTargetingOptions/BulkListAssignedTargetingOptions (`adgroup.go`, `targeting.go`, `audience.go`, `creative.go`).

---

## advertisers.lineItems.get

`GET https://displayvideo.googleapis.com/v4/advertisers/{+advertiserId}/lineItems/{+lineItemId}`

Gets a line item.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string (int64) | yes | Required. The ID of the advertiser this line item belongs to. |
| lineItemId | path | string (int64) | yes | Required. The ID of the line item to fetch. |

**Response**: `LineItem`

---

## advertisers.lineItems.bulkUpdate

`POST https://displayvideo.googleapis.com/v4/advertisers/{+advertiserId}/lineItems:bulkUpdate`

Updates multiple line items. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * UpdateLineItem * assignedTargetingOptions.create * assignedTargetingOptions.delete YouTube & Partners line items cannot be created or updated using the API.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string (int64) | yes | Required. The ID of the advertiser this line item belongs to. |

**Request body**: `BulkUpdateLineItemsRequest`

**Response**: `BulkUpdateLineItemsResponse`

---

## advertisers.lineItems.bulkEditAssignedTargetingOptions

`POST https://displayvideo.googleapis.com/v4/advertisers/{+advertiserId}/lineItems:bulkEditAssignedTargetingOptions`

Bulk edits targeting options under multiple line items. The operation will delete the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAssignedTargetingOptionsRequest.create_requests. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * lineItems.bulkUpdate * lineItems.patch * assignedTargetingOptions.create * assignedTargetingOptions.delete YouTube & Partners line items cannot be created or updated using the API.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string (int64) | yes | Required. The ID of the advertiser the line items belong to. |

**Request body**: `BulkEditAssignedTargetingOptionsRequest`

**Response**: `BulkEditAssignedTargetingOptionsResponse`

---

## advertisers.lineItems.delete

`DELETE https://displayvideo.googleapis.com/v4/advertisers/{+advertiserId}/lineItems/{+lineItemId}`

Deletes a line item. Returns error code `NOT_FOUND` if the line item does not exist. The line item should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it. YouTube & Partners line items cannot be created or updated using the API.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string (int64) | yes | The ID of the advertiser this line item belongs to. |
| lineItemId | path | string (int64) | yes | The ID of the line item to delete. |

**Response**: `Empty`

---

## advertisers.lineItems.duplicate

`POST https://displayvideo.googleapis.com/v4/advertisers/{+advertiserId}/lineItems/{+lineItemId}:duplicate`

Duplicates a line item. Returns the ID of the created line item if successful. YouTube & Partners line items cannot be created or updated using the API. **This method regularly experiences high latency.** We recommend [increasing your default timeout](/display-video/api/guides/best-practices/timeouts#client_library_timeout) to avoid errors.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string (int64) | yes | Required. The ID of the advertiser this line item belongs to. |
| lineItemId | path | string (int64) | yes | Required. The ID of the line item to duplicate. |

**Request body**: `DuplicateLineItemRequest`

**Response**: `DuplicateLineItemResponse`

---

## advertisers.lineItems.create

`POST https://displayvideo.googleapis.com/v4/advertisers/{+advertiserId}/lineItems`

Creates a new line item. Returns the newly created line item if successful. YouTube & Partners line items cannot be created or updated using the API.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string (int64) | yes | Output only. The unique ID of the advertiser the line item belongs to. |

**Request body**: `LineItem`

**Response**: `LineItem`

---

## advertisers.lineItems.patch

`PATCH https://displayvideo.googleapis.com/v4/advertisers/{+advertiserId}/lineItems/{+lineItemId}`

Updates an existing line item. Returns the updated line item if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdateLineItems * assignedTargetingOptions.create * assignedTargetingOptions.delete YouTube & Partners line items cannot be created or updated using the API. **This method regularly experiences high latency.** We recommend [increasing your default timeout](/display-video/api/guides/best-practices/timeouts#client_library_timeout) to avoid errors.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string (int64) | yes | Output only. The unique ID of the advertiser the line item belongs to. |
| lineItemId | path | string (int64) | yes | Output only. The unique ID of the line item. Assigned by the system. |
| updateMask | query | string (google-fieldmask) |  | Required. The mask to control which fields to update. |

**Request body**: `LineItem`

**Response**: `LineItem`

---

## advertisers.lineItems.bulkListAssignedTargetingOptions

`GET https://displayvideo.googleapis.com/v4/advertisers/{+advertiserId}/lineItems:bulkListAssignedTargetingOptions`

Lists assigned targeting options for multiple line items across targeting types.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string (int64) | yes | Required. The ID of the advertiser the line items belongs to. |
| filter | query | string |  | Allows filtering by assigned targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by the logical operator `OR` on the same field. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `targetingType` * `inheritance` Examples: * `AssignedTargetingOption` resources of targeting type `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` or `TARGETING_TYPE_CHANNEL`: `targetingType="TARGETING_TYPE_PROXIMITY_LOCATION_LIST" OR targetingType="TARGETING_TYPE_CHANNEL"` * `AssignedTargetingOption` resources with inheritance status of `NOT_INHERITED` or `INHERITED_FROM_PARTNER`: `inheritance="NOT_INHERITED" OR inheritance="INHERITED_FROM_PARTNER"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |
| orderBy | query | string |  | Field by which to sort the list. Acceptable values are: * `lineItemId` (default) * `assignedTargetingOption.targetingType` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingType desc`. |
| pageSize | query | integer (int32) |  | Requested page size. The size must be an integer between `1` and `5000`. If unspecified, the default is `5000`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| pageToken | query | string |  | A token that lets the client fetch the next page of results. Typically, this is the value of next_page_token returned from the previous call to the `BulkListAssignedTargetingOptions` method. If not specified, the first page of results will be returned. |
| lineItemIds | query | string (int64) |  | Required. The IDs of the line items to list assigned targeting options for. |

**Response**: `BulkListAssignedTargetingOptionsResponse`

---

## advertisers.lineItems.list

`GET https://displayvideo.googleapis.com/v4/advertisers/{+advertiserId}/lineItems`

Lists line items in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, line items with `ENTITY_STATUS_ARCHIVED` will not be included in the results.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string (int64) | yes | Required. The ID of the advertiser to list line items for. |
| pageSize | query | integer (int32) |  | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| orderBy | query | string |  | Field by which to sort the list. Acceptable values are: * `displayName` (default) * `entityStatus` * `updateTime` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`. |
| pageToken | query | string |  | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListLineItems` method. If not specified, the first page of results will be returned. |
| filter | query | string |  | Allows filtering by line item fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. Supported fields: * `campaignId` * `displayName` * `entityStatus` * `insertionOrderId` * `lineItemId` * `lineItemType` * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Examples: * All line items under an insertion order: `insertionOrderId="1234"` * All `ENTITY_STATUS_ACTIVE` or `ENTITY_STATUS_PAUSED` and `LINE_ITEM_TYPE_DISPLAY_DEFAULT` line items under an advertiser: `(entityStatus="ENTITY_STATUS_ACTIVE" OR entityStatus="ENTITY_STATUS_PAUSED") AND lineItemType="LINE_ITEM_TYPE_DISPLAY_DEFAULT"` * All line items with an update time less than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime<="2020-11-04T18:54:47Z"` * All line items with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

**Response**: `ListLineItemsResponse`

---

## Schemas

### `LineItem`

A single line item.

| Field | Type | Description |
|---|---|---|
| frequencyCap | `FrequencyCap` | Optional. Required if the line item type is not `LINE_ITEM_TYPE_DEMAND_GEN`. The impression frequency cap settings of the line item. The max_impressions field in this settings object must be used if assigning a limited cap. |
| advertiserId | string (int64) | Output only. The unique ID of the advertiser the line item belongs to. |
| updateTime | string (google-datetime) | Output only. The timestamp when the line item was last updated. Assigned by the system. |
| warningMessages | array<string enum(LINE_ITEM_WARNING_MESSAGE_UNSPECIFIED, INVALID_FLIGHT_DATES, EXPIRED, PENDING_FLIGHT, ALL_PARTNER_ENABLED_EXCHANGES_NEGATIVELY_TARGETED, INVALID_INVENTORY_SOURCE, APP_INVENTORY_INVALID_SITE_TARGETING, APP_INVENTORY_INVALID_AUDIENCE_LISTS, NO_VALID_CREATIVE, PARENT_INSERTION_ORDER_PAUSED, PARENT_INSERTION_ORDER_EXPIRED)> | Output only. The warning messages generated by the line item. These warnings do not block saving the line item, but some may block the line item from running. |
| pacing | `Pacing` | Required. The budget spending speed setting of the line item. |
| lineItemType | string enum(LINE_ITEM_TYPE_UNSPECIFIED, LINE_ITEM_TYPE_DISPLAY_DEFAULT, LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INSTALL, LINE_ITEM_TYPE_VIDEO_DEFAULT, LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INSTALL, LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INVENTORY, LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INVENTORY, LINE_ITEM_TYPE_AUDIO_DEFAULT, LINE_ITEM_TYPE_VIDEO_OVER_THE_TOP, LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_ACTION, LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_NON_SKIPPABLE, LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE, LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_AUDIO, LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_REACH, LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_SIMPLE, LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_NON_SKIPPABLE_OVER_THE_TOP, LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_REACH_OVER_THE_TOP, LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_SIMPLE_OVER_THE_TOP, LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_TARGET_FREQUENCY, LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIEW, LINE_ITEM_TYPE_DISPLAY_OUT_OF_HOME, LINE_ITEM_TYPE_VIDEO_OUT_OF_HOME, LINE_ITEM_TYPE_DEMAND_GEN) | Required. Immutable. The type of the line item. Values: LINE_ITEM_TYPE_UNSPECIFIED - Type value is not specified or is unknown in this version. Line items of this type and their targeting cannot be created or updated using the API.; LINE_ITEM_TYPE_DISPLAY_DEFAULT - Image, HTML5, native, or rich media ads.; LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INSTALL - Display ads that drive installs of an app.; LINE_ITEM_TYPE_VIDEO_DEFAULT - Video ads sold on a CPM basis for a variety of environments.; LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INSTALL - Video ads that drive installs of an app.; LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INVENTORY - Display ads served on mobile app inventory. Line items of this type and their targeting cannot be created or updated using the API.; LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INVENTORY - Video ads served on mobile app inventory. Line items of this type and their targeting cannot be created or updated using the API.; LINE_ITEM_TYPE_AUDIO_DEFAULT - RTB Audio ads sold for a variety of environments.; LINE_ITEM_TYPE_VIDEO_OVER_THE_TOP - Over-the-top ads present in OTT insertion orders. This type is only applicable to line items with an insertion order of insertion_order_type `OVER_THE_TOP`.; LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_ACTION - YouTube video ads that promote conversions. Line items of this type and their targeting cannot be created or updated using the API.; LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_NON_SKIPPABLE - YouTube video ads (up to 15 seconds) that cannot be skipped. Line items of this type and their targeting cannot be created or updated using the API.; LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE - YouTube video ads that show a story in a particular sequence using a mix of formats. Line items of this type and their targeting cannot be created or updated using the API.; LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_AUDIO - YouTube audio ads. Line items of this type and their targeting cannot be created or updated using the API.; LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_REACH - YouTube video ads that optimize reaching more unique users at lower cost. May include bumper ads, skippable in-stream ads, or a mix of types. Line items of this type and their targeting cannot be created or updated using the API.; LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_SIMPLE - Default YouTube video ads. Line items of this type and their targeting cannot be created or updated using the API.; LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_NON_SKIPPABLE_OVER_THE_TOP - Connected TV youTube video ads (up to 15 seconds) that cannot be skipped. Line items of this type and their targeting cannot be created or updated using the API.; LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_REACH_OVER_THE_TOP - Connected TV youTube video ads that optimize reaching more unique users at lower cost. May include bumper ads, skippable in-stream ads, or a mix of types. Line items of this type and their targeting cannot be created or updated using the API.; LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_SIMPLE_OVER_THE_TOP - Connected TV default YouTube video ads. Only include in-stream ad-format. Line items of this type and their targeting cannot be created or updated using the API.; LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_TARGET_FREQUENCY - The goal of this line item type is to show the YouTube ads target number of times to the same person in a certain period of time. Line items of this type and their targeting cannot be created or updated using the API.; LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIEW - YouTube video ads that aim to get more views with a variety of ad formats. Line items of this type and their targeting cannot be created or updated using the API.; LINE_ITEM_TYPE_DISPLAY_OUT_OF_HOME - Display ads served on digital-out-of-home inventory. Line items of this type and their targeting cannot be created or updated using the API.; LINE_ITEM_TYPE_VIDEO_OUT_OF_HOME - Video ads served on digital-out-of-home inventory. Line items of this type and their targeting cannot be created or updated using the API.; LINE_ITEM_TYPE_DEMAND_GEN - Demand Gen ads. |
| insertionOrderId | string (int64) | Required. Immutable. The unique ID of the insertion order that the line item belongs to. |
| demandGenSettings | `DemandGenSettings` | Optional. Settings specific to Demand Gen line items. Only applicable to Demand Gen line items. |
| reservationType | string enum(RESERVATION_TYPE_UNSPECIFIED, RESERVATION_TYPE_NOT_GUARANTEED, RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED, RESERVATION_TYPE_TAG_GUARANTEED, RESERVATION_TYPE_PETRA_VIRAL, RESERVATION_TYPE_INSTANT_RESERVE) | Output only. The reservation type of the line item. Values: RESERVATION_TYPE_UNSPECIFIED - Reservation type value is not specified or is unknown in this version.; RESERVATION_TYPE_NOT_GUARANTEED - Not created through a guaranteed inventory source.; RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED - Created through a programmatic guaranteed inventory source.; RESERVATION_TYPE_TAG_GUARANTEED - Created through a tag guaranteed inventory source.; RESERVATION_TYPE_PETRA_VIRAL - Created through a Petra inventory source. Only applicable to YouTube and Partners line items.; RESERVATION_TYPE_INSTANT_RESERVE - Created with an instant quote. Only applicable to YouTube and partners line items. |
| conversionCounting | `ConversionCountingConfig` | The conversion tracking setting of the line item. |
| budget | `LineItemBudget` | Required. The budget allocation setting of the line item. |
| campaignId | string (int64) | Output only. The unique ID of the campaign that the line item belongs to. |
| partnerCosts | array<`PartnerCost`> | The partner costs associated with the line item. If absent or empty in CreateLineItem method, the newly created line item will inherit partner costs from its parent insertion order. |
| displayName | string | Required. The display name of the line item. Must be UTF-8 encoded with a maximum size of 240 bytes. |
| optimizeFixedBidding | boolean | Optional. Whether to enable DV360's bid optimization for fixed bid line items. By default, DV360 optimizes your fixed bid by automatically lowering bids for impressions that are less likely to perform well. This optimization is enabled by default (value is true). When this field is set to `false`, this optimization is disabled, and the bid will not be lowered for any reason. This setting only applies to line items with a `bidding_strategy` of type `FIXED_BID`. |
| partnerRevenueModel | `PartnerRevenueModel` | Required. The partner revenue model setting of the line item. |
| containsEuPoliticalAds | string enum(EU_POLITICAL_ADVERTISING_STATUS_UNKNOWN, CONTAINS_EU_POLITICAL_ADVERTISING, DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING) | Whether this line item will serve European Union political ads. If contains_eu_political_ads has been set to `DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING` in the parent advertiser, then this field will be assigned `DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING` if not otherwise specified. This field can then be updated using the UI, API, or Structured Data Files. This field must be assigned when creating a new line item. Otherwise, **the `advertisers.lineItems.create` request will fail**. Values: EU_POLITICAL_ADVERTISING_STATUS_UNKNOWN - Unknown.; CONTAINS_EU_POLITICAL_ADVERTISING - Contains EU political advertising.; DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING - Does not contain EU political advertising. |
| flight | `LineItemFlight` | Required. The start and end time of the line item's flight. |
| youtubeAndPartnersSettings | `YoutubeAndPartnersSettings` | Optional. Settings specific to YouTube and Partners line items. |
| lineItemId | string (int64) | Output only. The unique ID of the line item. Assigned by the system. |
| entityStatus | string enum(ENTITY_STATUS_UNSPECIFIED, ENTITY_STATUS_ACTIVE, ENTITY_STATUS_ARCHIVED, ENTITY_STATUS_DRAFT, ENTITY_STATUS_PAUSED, ENTITY_STATUS_SCHEDULED_FOR_DELETION) | Required. Controls whether or not the line item can spend its budget and bid on inventory. * For CreateLineItem method, only `ENTITY_STATUS_DRAFT` is allowed. To activate a line item, use UpdateLineItem method and update the status to `ENTITY_STATUS_ACTIVE` after creation. * A line item cannot be changed back to `ENTITY_STATUS_DRAFT` status from any other status. * If the line item's parent insertion order is not active, the line item can't spend its budget even if its own status is `ENTITY_STATUS_ACTIVE`. Values: ENTITY_STATUS_UNSPECIFIED - Default value when status is not specified or is unknown in this version.; ENTITY_STATUS_ACTIVE - The entity is enabled to bid and spend budget.; ENTITY_STATUS_ARCHIVED - The entity is archived. Bidding and budget spending are disabled. An entity can be deleted after archived. Deleted entities cannot be retrieved.; ENTITY_STATUS_DRAFT - The entity is under draft. Bidding and budget spending are disabled.; ENTITY_STATUS_PAUSED - Bidding and budget spending are paused for the entity.; ENTITY_STATUS_SCHEDULED_FOR_DELETION - The entity is scheduled for deletion. |
| bidStrategy | `BiddingStrategy` | Required. The bidding strategy of the line item. |
| targetingExpansion | `TargetingExpansionConfig` | The [optimized targeting](//support.google.com/displayvideo/answer/12060859) settings of the line item. This config is only applicable for display, video, or audio line items that use automated bidding and positively target eligible audience lists. |
| creativeIds | array<string (int64)> | The IDs of the creatives associated with the line item. |
| name | string | Output only. The resource name of the line item. |
| excludeNewExchanges | boolean | Whether to exclude new exchanges from automatically being targeted by the line item. This field is false by default. |
| integrationDetails | `IntegrationDetails` | Integration details of the line item. |
| mobileApp | `MobileApp` | The mobile app promoted by the line item. This is applicable only when line_item_type is either `LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INSTALL` or `LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INSTALL`. |

### `BulkUpdateLineItemsRequest`

Request message for LineItemService.BulkUpdateLineItems.

| Field | Type | Description |
|---|---|---|
| updateMask | string (google-fieldmask) | Required. A field mask identifying which fields to update. Only the following fields are currently supported: * entityStatus * containsEuPoliticalAds |
| lineItemIds | array<string (int64)> | Required. IDs of line items to update. |
| targetLineItem | `LineItem` | Required. A line item object containing the fields to be updated and the new values to assign to all line items specified in line_item_ids." |

### `BulkUpdateLineItemsResponse`

Response message for LineItemService.BulkUpdateLineItems.

| Field | Type | Description |
|---|---|---|
| updatedLineItemIds | array<string (int64)> | The IDs of successfully updated line items. |
| skippedLineItemIds | array<string (int64)> | The IDs of line items that are skipped for updates. For example, unnecessary mutates that will result in effectively no changes to line items will be skipped and corresponding line item IDs can be tracked here. |
| errors | array<`Status`> | Errors returned by line items that failed to update. |
| failedLineItemIds | array<string (int64)> | The IDs of line items that failed to update. |

### `BulkEditAssignedTargetingOptionsRequest`

Request message for BulkEditLineItemsAssignedTargetingOptions.

| Field | Type | Description |
|---|---|---|
| createRequests | array<`CreateAssignedTargetingOptionsRequest`> | The assigned targeting options to create in batch, specified as a list of CreateAssignedTargetingOptionsRequest. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUCTION_PACKAGE` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE_DEAL` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY` |
| deleteRequests | array<`DeleteAssignedTargetingOptionsRequest`> | The assigned targeting options to delete in batch, specified as a list of DeleteAssignedTargetingOptionsRequest. Supported targeting types include: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_APP` * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AUCTION_PACKAGE` * `TARGETING_TYPE_AUDIENCE_GROUP` * `TARGETING_TYPE_AUDIO_CONTENT_TYPE` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_BUSINESS_CHAIN` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_CHANNEL` * `TARGETING_TYPE_CONTENT_DURATION` * `TARGETING_TYPE_CONTENT_GENRE` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_STREAM_TYPE` * `TARGETING_TYPE_DAY_AND_TIME` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_INVENTORY_SOURCE_DEAL` * `TARGETING_TYPE_INVENTORY_SOURCE_GROUP` * `TARGETING_TYPE_KEYWORD` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_PROXIMITY_LOCATION_LIST` * `TARGETING_TYPE_REGIONAL_LOCATION_LIST` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_THIRD_PARTY_VERIFIER` * `TARGETING_TYPE_URL` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY` |
| lineItemIds | array<string (int64)> | Required. The ID of the line items whose targeting is being updated. |

### `BulkEditAssignedTargetingOptionsResponse`

| Field | Type | Description |
|---|---|---|
| failedLineItemIds | array<string (int64)> | Output only. The IDs of the line items which failed. |
| updatedLineItemIds | array<string (int64)> | Output only. The IDs of the line items which successfully updated. |
| errors | array<`Status`> | The error information for each line item that failed to update. |

### `Empty`

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

Type: object

### `DuplicateLineItemRequest`

Request message for LineItemService.DuplicateLineItem.

| Field | Type | Description |
|---|---|---|
| targetDisplayName | string | The display name of the new line item. Must be UTF-8 encoded with a maximum size of 240 bytes. |
| containsEuPoliticalAds | string enum(EU_POLITICAL_ADVERTISING_STATUS_UNKNOWN, CONTAINS_EU_POLITICAL_ADVERTISING, DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING) | Whether this line item will serve European Union political ads. If contains_eu_political_ads has been set to `DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING` in the parent advertiser, then this field will be assigned `DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING` if not otherwise specified. This field can then be updated using the UI, API, or Structured Data Files. This field must be assigned when creating a new line item. Otherwise, **the `advertisers.lineItems.create` request will fail**. Values: EU_POLITICAL_ADVERTISING_STATUS_UNKNOWN - Unknown.; CONTAINS_EU_POLITICAL_ADVERTISING - Contains EU political advertising.; DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING - Does not contain EU political advertising. |

### `DuplicateLineItemResponse`

| Field | Type | Description |
|---|---|---|
| duplicateLineItemId | string (int64) | The ID of the created line item. |

### `BulkListAssignedTargetingOptionsResponse`

| Field | Type | Description |
|---|---|---|
| nextPageToken | string | A token identifying the next page of results. This value should be specified as the pageToken in a subsequent call to `BulkListAssignedTargetingOptions` to fetch the next page of results. This token will be absent if there are no more line_item_assigned_targeting_options to return. |
| lineItemAssignedTargetingOptions | array<`LineItemAssignedTargetingOption`> | The list of wrapper objects, each providing an assigned targeting option and the line item it is assigned to. This list will be absent if empty. |

### `ListLineItemsResponse`

| Field | Type | Description |
|---|---|---|
| lineItems | array<`LineItem`> | The list of line items. This list will be absent if empty. |
| nextPageToken | string | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListLineItems` method to retrieve the next page of results. |

### `BiddingStrategy`

Settings that control the bid strategy. Bid strategy determines the bid price.

| Field | Type | Description |
|---|---|---|
| fixedBid | `FixedBidStrategy` | A strategy that uses a fixed bid price. |
| youtubeAndPartnersBid | `YoutubeAndPartnersBiddingStrategy` | A bid strategy used by YouTube and Partners resources. It can only be used for a YouTube and Partners line item or ad group entity. |
| demandGenBid | `DemandGenBiddingStrategy` | A bid strategy used by Demand Gen resources. It can only be used for a Demand Gen line item or ad group entity. |
| maximizeSpendAutoBid | `MaximizeSpendBidStrategy` | A strategy that automatically adjusts the bid to optimize to your performance goal while spending the full budget. At insertion order level, the markup_type of line items cannot be set to `PARTNER_REVENUE_MODEL_MARKUP_TYPE_CPM`. In addition, the performance_goal_type value assigned to an insertion order determines the possible line_item_type values available for line items under that insertion order: * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA`, `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC`, and `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED` only allow for `LINE_ITEM_TYPE_DISPLAY_DEFAULT` or `LINE_ITEM_TYPE_VIDEO_DEFAULT` line items. * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA` and `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN` only allow for `LINE_ITEM_TYPE_VIDEO_DEFAULT` line items. * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_REACH` only allows for `LINE_ITEM_TYPE_VIDEO_OVER_THE_TOP` line items. |
| performanceGoalAutoBid | `PerformanceGoalBidStrategy` | A strategy that automatically adjusts the bid to meet or beat a specified performance goal. It is to be used only for a line item entity. |

### `ConversionCountingConfig`

Settings that control how conversions are counted. All post-click conversions will be counted. A percentage value can be set for post-view conversions counting.

| Field | Type | Description |
|---|---|---|
| floodlightActivityConfigs | array<`TrackingFloodlightActivityConfig`> | The Floodlight activity configs used to track conversions. The number of conversions counted is the sum of all of the conversions counted by all of the Floodlight activity IDs specified in this field. This field can't be updated if a custom bidding algorithm is assigned to the line item. If you set this field and assign a custom bidding algorithm in the same request, the floodlight activities must match the ones used by the custom bidding algorithm. |
| primaryAttributionModelId | string (int64) | Optional. The attribution model to use for conversion measurement. This attribution model will determine how conversions are counted. The Primary model can be set by you for a floodlight config or group. More details [here](https://support.google.com/displayvideo/answer/7409983). Only applicable to Demand Gen line items. |
| postViewCountPercentageMillis | string (int64) | The percentage of post-view conversions to count, in millis (1/1000 of a percent). Must be between 0 and 100000 inclusive. For example, to track 50% of the post-click conversions, set a value of 50000. |

### `DemandGenSettings`

Settings for Demand Gen line items.

| Field | Type | Description |
|---|---|---|
| linkedMerchantId | string (int64) | Optional. The ID of the Merchant Center account used to provide a product feed. This Merchant Center account must already be linked to the advertiser. |
| geoLanguageTargetingEnabled | boolean | Optional. Immutable. Whether location and language targeting can be set at the line item level. Otherwise, relevant targeting types must be assigned directly to ad groups. |
| thirdPartyMeasurementConfigs | `ThirdPartyMeasurementConfigs` | Optional. The third party measurement settings for the Demand Gen line item. |

### `FrequencyCap`

Settings that control the number of times a user may be shown with the same ad during a given time period.

| Field | Type | Description |
|---|---|---|
| timeUnit | string enum(TIME_UNIT_UNSPECIFIED, TIME_UNIT_LIFETIME, TIME_UNIT_MONTHS, TIME_UNIT_WEEKS, TIME_UNIT_DAYS, TIME_UNIT_HOURS, TIME_UNIT_MINUTES) | The time unit in which the frequency cap will be applied. Required when unlimited is `false`. Values: TIME_UNIT_UNSPECIFIED - Time unit value is not specified or is unknown in this version.; TIME_UNIT_LIFETIME - The frequency cap will be applied to the whole life time of the line item.; TIME_UNIT_MONTHS - The frequency cap will be applied to a number of months.; TIME_UNIT_WEEKS - The frequency cap will be applied to a number of weeks.; TIME_UNIT_DAYS - The frequency cap will be applied to a number of days.; TIME_UNIT_HOURS - The frequency cap will be applied to a number of hours.; TIME_UNIT_MINUTES - The frequency cap will be applied to a number of minutes. |
| unlimited | boolean | Whether unlimited frequency capping is applied. When this field is set to `true`, the remaining frequency cap fields are not applicable. |
| maxImpressions | integer (int32) | The maximum number of times a user may be shown the same ad during this period. Must be greater than 0. Required when unlimited is `false` and max_views is not set. |
| timeUnitCount | integer (int32) | The number of time_unit the frequency cap will last. Required when unlimited is `false`. The following restrictions apply based on the value of time_unit: * `TIME_UNIT_MONTHS` - must be 1 * `TIME_UNIT_WEEKS` - must be between 1 and 4 * `TIME_UNIT_DAYS` - must be between 1 and 6 * `TIME_UNIT_HOURS` - must be between 1 and 23 * `TIME_UNIT_MINUTES` - must be between 1 and 59 |
| maxViews | integer (int32) | Optional. The maximum number of times a user may click-through or fully view an ad during this period until it is no longer served to them. Must be greater than 0. Only applicable to YouTube and Partners resources. Required when unlimited is `false` and max_impressions is not set. |

### `IntegrationDetails`

Integration details of an entry.

| Field | Type | Description |
|---|---|---|
| integrationCode | string | An external identifier to be associated with the entry. The integration code will show up together with the entry in many places in the system, for example, reporting. Must be UTF-8 encoded with a length of no more than 500 characters. |
| details | string | Additional details of the entry in string format. Must be UTF-8 encoded with a length of no more than 1000 characters. |

### `LineItemBudget`

Settings that control how budget is allocated.

| Field | Type | Description |
|---|---|---|
| budgetAllocationType | string enum(LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNSPECIFIED, LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC, LINE_ITEM_BUDGET_ALLOCATION_TYPE_FIXED, LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNLIMITED) | Required. The type of the budget allocation. `LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC` is only applicable when automatic budget allocation is enabled for the parent insertion order. This field must be set to `LINE_ITEM_BUDGET_ALLOCATION_TYPE_FIXED` for Demand Gen line items. Values: LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNSPECIFIED - Type value is not specified or is unknown in this version.; LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC - Automatic budget allocation is enabled for the line item.; LINE_ITEM_BUDGET_ALLOCATION_TYPE_FIXED - A fixed max budget amount is allocated for the line item.; LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNLIMITED - No budget limit is applied to the line item. |
| maxAmount | string (int64) | The maximum budget amount the line item will spend. Must be greater than 0. When budget_allocation_type is: * `LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC`, this field is immutable and is set by the system. * `LINE_ITEM_BUDGET_ALLOCATION_TYPE_FIXED`, if budget_unit is: - `BUDGET_UNIT_CURRENCY`, this field represents maximum budget amount to spend, in micros of the advertiser's currency. For example, 1500000 represents 1.5 standard units of the currency. - `BUDGET_UNIT_IMPRESSIONS`, this field represents the maximum number of impressions to serve. * `LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNLIMITED`, this field is not applicable and will be ignored by the system. |
| budgetUnit | string enum(BUDGET_UNIT_UNSPECIFIED, BUDGET_UNIT_CURRENCY, BUDGET_UNIT_IMPRESSIONS) | Output only. The budget unit specifies whether the budget is currency based or impression based. This value is inherited from the parent insertion order. Values: BUDGET_UNIT_UNSPECIFIED - Type value is not specified or is unknown in this version.; BUDGET_UNIT_CURRENCY - Budgeting in currency amounts.; BUDGET_UNIT_IMPRESSIONS - Budgeting in impression amounts. |

### `LineItemFlight`

Settings that control the active duration of a line item.

| Field | Type | Description |
|---|---|---|
| dateRange | `DateRange` | The flight start and end dates of the line item. They are resolved relative to the parent advertiser's time zone. * Required when flight_date_type is `LINE_ITEM_FLIGHT_DATE_TYPE_CUSTOM`. Output only otherwise. * When creating a new flight, both `start_date` and `end_date` must be in the future. * An existing flight with a `start_date` in the past has a mutable `end_date` but an immutable `start_date`. * `end_date` must be the `start_date` or later, both before the year 2037. |
| flightDateType | string enum(LINE_ITEM_FLIGHT_DATE_TYPE_UNSPECIFIED, LINE_ITEM_FLIGHT_DATE_TYPE_INHERITED, LINE_ITEM_FLIGHT_DATE_TYPE_CUSTOM) | Required. The type of the line item's flight dates. Values: LINE_ITEM_FLIGHT_DATE_TYPE_UNSPECIFIED - Type value is not specified or is unknown in this version.; LINE_ITEM_FLIGHT_DATE_TYPE_INHERITED - The line item's flight dates are inherited from its parent insertion order.; LINE_ITEM_FLIGHT_DATE_TYPE_CUSTOM - The line item uses its own custom flight dates. |

### `MobileApp`

A mobile app promoted by a mobile app install line item.

| Field | Type | Description |
|---|---|---|
| platform | string enum(PLATFORM_UNSPECIFIED, IOS, ANDROID) | Output only. The app platform. Values: PLATFORM_UNSPECIFIED - Platform is not specified.; IOS - iOS platform.; ANDROID - Android platform. |
| appId | string | Required. The ID of the app provided by the platform store. Android apps are identified by the bundle ID used by Android's Play store, such as `com.google.android.gm`. iOS apps are identified by a nine-digit app ID used by Apple's App store, such as `422689480`. |
| displayName | string | Output only. The app name. |
| publisher | string | Output only. The app publisher. |

### `Pacing`

Settings that control the rate at which a budget is spent.

| Field | Type | Description |
|---|---|---|
| dailyMaxMicros | string (int64) | Maximum currency amount to spend every day in micros of advertiser's currency. Applicable when the budget is currency based. Must be greater than 0. For example, for 1.5 standard unit of the currency, set this field to 1500000. The value assigned will be rounded to whole billable units for the relevant currency by the following rules: any positive value less than a single billable unit will be rounded up to one billable unit and any value larger than a single billable unit will be rounded down to the nearest billable value. For example, if the currency's billable unit is 0.01, and this field is set to 10257770, it will round down to 10250000, a value of 10.25. If set to 505, it will round up to 10000, a value of 0.01. |
| pacingType | string enum(PACING_TYPE_UNSPECIFIED, PACING_TYPE_AHEAD, PACING_TYPE_ASAP, PACING_TYPE_EVEN) | Required. The type of pacing that defines how the budget amount will be spent across the pacing_period. `PACING_TYPE_ASAP` is not compatible with pacing_period `PACING_PERIOD_FLIGHT` for insertion orders. Values: PACING_TYPE_UNSPECIFIED - Pacing mode value is not specified or is unknown in this version.; PACING_TYPE_AHEAD - Only applicable to `PACING_PERIOD_FLIGHT` pacing period. Ahead pacing attempts to spend faster than evenly, to make sure the entire budget is spent by the end of the flight.; PACING_TYPE_ASAP - Spend all of pacing budget amount as quick as possible.; PACING_TYPE_EVEN - Spend a consistent budget amount every period of time. |
| dailyMaxImpressions | string (int64) | Maximum number of impressions to serve every day. Applicable when the budget is impression based. Must be greater than 0. |
| pacingPeriod | string enum(PACING_PERIOD_UNSPECIFIED, PACING_PERIOD_DAILY, PACING_PERIOD_FLIGHT) | Required. The time period in which the pacing budget will be spent. When automatic budget allocation is enabled at the insertion order via automationType, this field is output only and defaults to `PACING_PERIOD_FLIGHT`. Values: PACING_PERIOD_UNSPECIFIED - Period value is not specified or is unknown in this version.; PACING_PERIOD_DAILY - The pacing setting will be applied on daily basis.; PACING_PERIOD_FLIGHT - The pacing setting will be applied to the whole flight duration. |

### `PartnerCost`

Settings that control a partner cost. A partner cost is any type of expense involved in running a campaign, other than the costs of purchasing impressions (which is called the media cost) and using third-party audience segment data (data fee). Some examples of partner costs include the fees for using DV360, a third-party ad server, or a third-party ad serving verification service.

| Field | Type | Description |
|---|---|---|
| feeAmount | string (int64) | The CPM fee amount in micros of advertiser's currency. Applicable when the fee_type is `PARTNER_FEE_TYPE_CPM_FEE`. Must be greater than or equal to 0. For example, for 1.5 standard unit of the advertiser's currency, set this field to 1500000. |
| feePercentageMillis | string (int64) | The media fee percentage in millis (1/1000 of a percent). Applicable when the fee_type is `PARTNER_FEE_TYPE_MEDIA_FEE`. Must be greater than or equal to 0. For example: 100 represents 0.1%. |
| feeType | string enum(PARTNER_COST_FEE_TYPE_UNSPECIFIED, PARTNER_COST_FEE_TYPE_CPM_FEE, PARTNER_COST_FEE_TYPE_MEDIA_FEE) | Required. The fee type for this partner cost. Values: PARTNER_COST_FEE_TYPE_UNSPECIFIED - Value is not specified or is unknown in this version.; PARTNER_COST_FEE_TYPE_CPM_FEE - The partner cost is a fixed CPM fee. Not applicable when the partner cost cost_type is one of: * `PARTNER_COST_TYPE_MEDIA_COST_DATA` * `PARTNER_COST_TYPE_DV360_FEE`.; PARTNER_COST_FEE_TYPE_MEDIA_FEE - The partner cost is a percentage surcharge based on the media cost. Not applicable when the partner cost_type is one of: * `PARTNER_COST_TYPE_SHOP_LOCAL` * `PARTNER_COST_TYPE_TRUST_METRICS` * `PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_VIDEO` * `PARTNER_COST_TYPE_MOAT_VIDEO`. |
| invoiceType | string enum(PARTNER_COST_INVOICE_TYPE_UNSPECIFIED, PARTNER_COST_INVOICE_TYPE_DV360, PARTNER_COST_INVOICE_TYPE_PARTNER) | The invoice type for this partner cost. * Required when cost_type is one of: - `PARTNER_COST_TYPE_PEER39` - `PARTNER_COST_TYPE_DOUBLE_VERIFY` - `PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE`. * Output only for other types. Values: PARTNER_COST_INVOICE_TYPE_UNSPECIFIED - Type value is not specified or is unknown in this version.; PARTNER_COST_INVOICE_TYPE_DV360 - Partner cost is billed through DV360.; PARTNER_COST_INVOICE_TYPE_PARTNER - Partner cost is billed by the partner. |
| costType | string enum(PARTNER_COST_TYPE_UNSPECIFIED, PARTNER_COST_TYPE_ADLOOX, PARTNER_COST_TYPE_ADLOOX_PREBID, PARTNER_COST_TYPE_ADSAFE, PARTNER_COST_TYPE_ADXPOSE, PARTNER_COST_TYPE_AGGREGATE_KNOWLEDGE, PARTNER_COST_TYPE_AGENCY_TRADING_DESK, PARTNER_COST_TYPE_DV360_FEE, PARTNER_COST_TYPE_COMSCORE_VCE, PARTNER_COST_TYPE_DATA_MANAGEMENT_PLATFORM, PARTNER_COST_TYPE_DEFAULT, PARTNER_COST_TYPE_DOUBLE_VERIFY, PARTNER_COST_TYPE_DOUBLE_VERIFY_PREBID, PARTNER_COST_TYPE_EVIDON, PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_VIDEO, PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_PREBID, PARTNER_COST_TYPE_MEDIA_COST_DATA, PARTNER_COST_TYPE_MOAT_VIDEO, PARTNER_COST_TYPE_NIELSEN_DAR, PARTNER_COST_TYPE_SHOP_LOCAL, PARTNER_COST_TYPE_TERACENT, PARTNER_COST_TYPE_THIRD_PARTY_AD_SERVER, PARTNER_COST_TYPE_TRUST_METRICS, PARTNER_COST_TYPE_VIZU, PARTNER_COST_TYPE_CUSTOM_FEE_1, PARTNER_COST_TYPE_CUSTOM_FEE_2, PARTNER_COST_TYPE_CUSTOM_FEE_3, PARTNER_COST_TYPE_CUSTOM_FEE_4, PARTNER_COST_TYPE_CUSTOM_FEE_5, PARTNER_COST_TYPE_SCIBIDS_FEE) | Required. The type of the partner cost. Values: PARTNER_COST_TYPE_UNSPECIFIED - Type value is not specified or is unknown in this version.; PARTNER_COST_TYPE_ADLOOX - The cost is charged for using Scope3 (previously known as Adloox). Billed by the partner.; PARTNER_COST_TYPE_ADLOOX_PREBID - The cost is charged for using Scope3 (previously known as Adloox) Pre-Bid. Billed through DV360.; PARTNER_COST_TYPE_ADSAFE - The cost is charged for using AdSafe. Billed by the partner.; PARTNER_COST_TYPE_ADXPOSE - The cost is charged for using AdExpose. Billed by the partner.; PARTNER_COST_TYPE_AGGREGATE_KNOWLEDGE - The cost is charged for using Aggregate Knowledge. Billed by the partner.; PARTNER_COST_TYPE_AGENCY_TRADING_DESK - The cost is charged for using an Agency Trading Desk. Billed by the partner.; PARTNER_COST_TYPE_DV360_FEE - The cost is charged for using DV360. Billed through DV360.; PARTNER_COST_TYPE_COMSCORE_VCE - The cost is charged for using comScore vCE. Billed through DV360.; PARTNER_COST_TYPE_DATA_MANAGEMENT_PLATFORM - The cost is charged for using a Data Management Platform. Billed by the partner.; PARTNER_COST_TYPE_DEFAULT - The default cost type. Billed by the partner.; PARTNER_COST_TYPE_DOUBLE_VERIFY - The cost is charged for using DoubleVerify. Billed by the partner.; PARTNER_COST_TYPE_DOUBLE_VERIFY_PREBID - The cost is charged for using DoubleVerify Pre-Bid. Billed through DV360.; PARTNER_COST_TYPE_EVIDON - The cost is charged for using Evidon. Billed by the partner.; PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_VIDEO - The cost is charged for using Integral Ad Science Video. Billed by the partner.; PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_PREBID - The cost is charged for using Integral Ad Science Pre-Bid. Billed through DV360.; PARTNER_COST_TYPE_MEDIA_COST_DATA - The cost is charged for using media cost data. Billed by the partner.; PARTNER_COST_TYPE_MOAT_VIDEO - The cost is charged for using MOAT Video. Billed by the partner.; PARTNER_COST_TYPE_NIELSEN_DAR - The cost is charged for using Nielsen Digital Ad Ratings. Billed through DV360.; PARTNER_COST_TYPE_SHOP_LOCAL - The cost is charged for using ShopLocal. Billed by the partner.; PARTNER_COST_TYPE_TERACENT - The cost is charged for using Teracent. Billed by the partner.; PARTNER_COST_TYPE_THIRD_PARTY_AD_SERVER - The cost is charged for using a third-party ad server. Billed by the partner.; PARTNER_COST_TYPE_TRUST_METRICS - The cost is charged for using TrustMetrics. Billed by the partner.; PARTNER_COST_TYPE_VIZU - The cost is charged for using Vizu. Billed by the partner.; PARTNER_COST_TYPE_CUSTOM_FEE_1 - The cost is charged as custom fee 1. Billed by the partner.; PARTNER_COST_TYPE_CUSTOM_FEE_2 - The cost is charged as custom fee 2. Billed by the partner.; PARTNER_COST_TYPE_CUSTOM_FEE_3 - The cost is charged as custom fee 3. Billed by the partner.; PARTNER_COST_TYPE_CUSTOM_FEE_4 - The cost is charged as custom fee 4. Billed by the partner.; PARTNER_COST_TYPE_CUSTOM_FEE_5 - The cost is charged as custom fee 5. Billed by the partner.; PARTNER_COST_TYPE_SCIBIDS_FEE - The cost is charged for using Scibids. Billed through DV360. This type is currently only available to certain customers. Other customers attempting to use this type will receive an error. |

### `PartnerRevenueModel`

Settings that control how partner revenue is calculated.

| Field | Type | Description |
|---|---|---|
| markupAmount | string (int64) | Required. The markup amount of the partner revenue model. Must be greater than or equal to 0. * When the markup_type is set to be `PARTNER_REVENUE_MODEL_MARKUP_TYPE_CPM`, this field represents the CPM markup in micros of advertiser's currency. For example, 1500000 represents 1.5 standard units of the currency. * When the markup_type is set to be `PARTNER_REVENUE_MODEL_MARKUP_TYPE_MEDIA_COST_MARKUP`, this field represents the media cost percent markup in millis. For example, 100 represents 0.1% (decimal 0.001). * When the markup_type is set to be `PARTNER_REVENUE_MODEL_MARKUP_TYPE_TOTAL_MEDIA_COST_MARKUP`, this field represents the total media cost percent markup in millis. For example, 100 represents 0.1% (decimal 0.001). |
| markupType | string enum(PARTNER_REVENUE_MODEL_MARKUP_TYPE_UNSPECIFIED, PARTNER_REVENUE_MODEL_MARKUP_TYPE_CPM, PARTNER_REVENUE_MODEL_MARKUP_TYPE_MEDIA_COST_MARKUP, PARTNER_REVENUE_MODEL_MARKUP_TYPE_TOTAL_MEDIA_COST_MARKUP) | Required. The markup type of the partner revenue model. This field must be set to `PARTNER_REVENUE_MODEL_MARKUP_TYPE_TOTAL_MEDIA_COST_MARKUP` for Demand Gen line items. Values: PARTNER_REVENUE_MODEL_MARKUP_TYPE_UNSPECIFIED - Type value is not specified or is unknown in this version.; PARTNER_REVENUE_MODEL_MARKUP_TYPE_CPM - Calculate the partner revenue based on a fixed CPM.; PARTNER_REVENUE_MODEL_MARKUP_TYPE_MEDIA_COST_MARKUP - Calculate the partner revenue based on a percentage surcharge of its media cost.; PARTNER_REVENUE_MODEL_MARKUP_TYPE_TOTAL_MEDIA_COST_MARKUP - Calculate the partner revenue based on a percentage surcharge of its total media cost, which includes all partner costs and data costs. |

### `TargetingExpansionConfig`

Settings that control the [optimized targeting](//support.google.com/displayvideo/answer/12060859) settings of the line item.

| Field | Type | Description |
|---|---|---|
| audienceExpansionSeedListExcluded | boolean | Output only. Whether to exclude seed list for audience expansion. This field only applies to YouTube and Partners line item and ad group resources. |
| excludeDemographicExpansion | boolean | Optional. Whether to exclude demographic expansion for Optimized Targeting. This field can only be set for Demand Gen ad groups. |
| enableOptimizedTargeting | boolean | Required. Whether to enable Optimized Targeting for the line item. Optimized targeting is not compatible with all bid strategies. Attempting to set this field to `true` for a line item using the BiddingStrategy field fixed_bid or one of the following combinations of BiddingStrategy fields and BiddingStrategyPerformanceGoalType will result in an error: maximize_auto_spend_bid: * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA` * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN` * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED` performance_goal_auto_bid: * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM` This also applies if the line item inherits one of the above bid strategies from the parent insertion order. Bid strategies set at the insertion order-level will be inherited by their line items if the `InsertionOrder` budget field automationType is set to `INSERTION_ORDER_AUTOMATION_TYPE_BUDGET` or `INSERTION_ORDER_AUTOMATION_TYPE_BID_BUDGET`. |
| audienceExpansionLevel | string enum(UNKNOWN, NO_REACH, LEAST_REACH, MID_REACH, MOST_REACH) | Output only. Magnitude of expansion for eligible first-party user lists under this ad group. This field only applies to YouTube and Partners line item and ad group resources. Values: UNKNOWN - Audience expansion level is not specified or is unknown in this version.; NO_REACH - Audience expansion off.; LEAST_REACH - Conservative audience expansion.; MID_REACH - Moderate audience expansion.; MOST_REACH - Aggressive audience expansion. |

### `YoutubeAndPartnersSettings`

Settings for YouTube and Partners line items.

| Field | Type | Description |
|---|---|---|
| targetFrequency | `TargetFrequency` | Optional. The average number of times you want ads from this line item to show to the same person over a certain period of time. |
| leadFormId | string (int64) | Optional. The ID of the form to generate leads. |
| videoAdSequenceSettings | `VideoAdSequenceSettings` | Optional. The settings related to VideoAdSequence. |
| thirdPartyMeasurementConfigs | `ThirdPartyMeasurementConfigs` | Optional. The third-party measurement configs of the line item. |
| inventorySourceSettings | `YoutubeAndPartnersInventorySourceConfig` | Settings that control what YouTube and Partners inventories the line item will target. |
| contentCategory | string enum(YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_UNSPECIFIED, YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_STANDARD, YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_EXPANDED, YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_LIMITED) | Output only. The kind of content on which the YouTube and Partners ads will be shown. *Warning*: This field will be removed in the near future. Use effective_content_category instead. Values: YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_UNSPECIFIED - Content category is not specified or is unknown in this version.; YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_STANDARD - A category consisting of a wide range of content appropriate for most brands. The content is based off of YouTube's [advertiser-friendly content guidelines](https://support.google.com/youtube/answer/6162278).; YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_EXPANDED - A category including all content across YouTube and video partners that meets standards for monetization.; YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_LIMITED - A category consisting of a reduced range of content that meets heightened requirements, especially regarding inappropriate language and sexual suggestiveness. |
| viewFrequencyCap | `FrequencyCap` | The view frequency cap settings of the line item. The max_views field in this settings object must be used if assigning a limited cap. |
| relatedVideoIds | array<string> | Optional. The IDs of the videos appear below the primary video ad when the ad is playing in the YouTube app on mobile devices. |
| videoAdInventoryControl | `VideoAdInventoryControl` | Optional. The settings to control which inventory is allowed for this line item. |
| linkedMerchantId | string (int64) | Optional. The ID of the Merchant Center account used to provide a product feed. This Merchant Center account must already be linked to the advertiser. |
| effectiveContentCategory | string enum(YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_UNSPECIFIED, YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_STANDARD, YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_EXPANDED, YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_LIMITED) | Output only. The content category which takes effect when serving the line item. When content category is set in both line item and advertiser, the stricter one will take effect when serving the line item. New line items will only inherit the advertiser level setting. Values: YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_UNSPECIFIED - Content category is not specified or is unknown in this version.; YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_STANDARD - A category consisting of a wide range of content appropriate for most brands. The content is based off of YouTube's [advertiser-friendly content guidelines](https://support.google.com/youtube/answer/6162278).; YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_EXPANDED - A category including all content across YouTube and video partners that meets standards for monetization.; YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_LIMITED - A category consisting of a reduced range of content that meets heightened requirements, especially regarding inappropriate language and sexual suggestiveness. |

### `Status`

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

| Field | Type | Description |
|---|---|---|
| code | integer (int32) | The status code, which should be an enum value of google.rpc.Code. |
| message | string | A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. |
| details | array<map<string, any>> | A list of messages that carry the error details. There is a common set of message types for APIs to use. |

### `CreateAssignedTargetingOptionsRequest`

A request listing which assigned targeting options of a given targeting type should be created and added.

| Field | Type | Description |
|---|---|---|
| assignedTargetingOptions | array<`AssignedTargetingOption`> | Required. The assigned targeting options to create and add. |
| targetingType | string enum(TARGETING_TYPE_UNSPECIFIED, TARGETING_TYPE_CHANNEL, TARGETING_TYPE_APP_CATEGORY, TARGETING_TYPE_APP, TARGETING_TYPE_URL, TARGETING_TYPE_DAY_AND_TIME, TARGETING_TYPE_AGE_RANGE, TARGETING_TYPE_REGIONAL_LOCATION_LIST, TARGETING_TYPE_PROXIMITY_LOCATION_LIST, TARGETING_TYPE_GENDER, TARGETING_TYPE_VIDEO_PLAYER_SIZE, TARGETING_TYPE_USER_REWARDED_CONTENT, TARGETING_TYPE_PARENTAL_STATUS, TARGETING_TYPE_CONTENT_INSTREAM_POSITION, TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION, TARGETING_TYPE_DEVICE_TYPE, TARGETING_TYPE_AUDIENCE_GROUP, TARGETING_TYPE_BROWSER, TARGETING_TYPE_HOUSEHOLD_INCOME, TARGETING_TYPE_ON_SCREEN_POSITION, TARGETING_TYPE_THIRD_PARTY_VERIFIER, TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION, TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION, TARGETING_TYPE_ENVIRONMENT, TARGETING_TYPE_CARRIER_AND_ISP, TARGETING_TYPE_OPERATING_SYSTEM, TARGETING_TYPE_DEVICE_MAKE_MODEL, TARGETING_TYPE_KEYWORD, TARGETING_TYPE_NEGATIVE_KEYWORD_LIST, TARGETING_TYPE_VIEWABILITY, TARGETING_TYPE_CATEGORY, TARGETING_TYPE_INVENTORY_SOURCE, TARGETING_TYPE_LANGUAGE, TARGETING_TYPE_AUTHORIZED_SELLER_STATUS, TARGETING_TYPE_GEO_REGION, TARGETING_TYPE_INVENTORY_SOURCE_GROUP, TARGETING_TYPE_EXCHANGE, TARGETING_TYPE_SUB_EXCHANGE, TARGETING_TYPE_POI, TARGETING_TYPE_BUSINESS_CHAIN, TARGETING_TYPE_CONTENT_DURATION, TARGETING_TYPE_CONTENT_STREAM_TYPE, TARGETING_TYPE_NATIVE_CONTENT_POSITION, TARGETING_TYPE_OMID, TARGETING_TYPE_AUDIO_CONTENT_TYPE, TARGETING_TYPE_CONTENT_GENRE, TARGETING_TYPE_YOUTUBE_VIDEO, TARGETING_TYPE_YOUTUBE_CHANNEL, TARGETING_TYPE_SESSION_POSITION, TARGETING_TYPE_CONTENT_THEME_EXCLUSION, TARGETING_TYPE_YOUTUBE_CHANNEL_PACK) | Required. Identifies the type of this assigned targeting option. Values: TARGETING_TYPE_UNSPECIFIED - Default value when type is not specified or is unknown in this version.; TARGETING_TYPE_CHANNEL - Target a channel (a custom group of related websites or apps).; TARGETING_TYPE_APP_CATEGORY - Target an app category (for example, education or puzzle games).; TARGETING_TYPE_APP - Target a specific app (for example, Angry Birds).; TARGETING_TYPE_URL - Target a specific url (for example, quora.com).; TARGETING_TYPE_DAY_AND_TIME - Target ads during a chosen time period on a specific day.; TARGETING_TYPE_AGE_RANGE - Target ads to a specific age range (for example, 18-24).; TARGETING_TYPE_REGIONAL_LOCATION_LIST - Target ads to the specified regions on a regional location list.; TARGETING_TYPE_PROXIMITY_LOCATION_LIST - Target ads to the specified points of interest on a proximity location list.; TARGETING_TYPE_GENDER - Target ads to a specific gender (for example, female or male).; TARGETING_TYPE_VIDEO_PLAYER_SIZE - Target a specific video player size for video ads.; TARGETING_TYPE_USER_REWARDED_CONTENT - Target user rewarded content for video ads.; TARGETING_TYPE_PARENTAL_STATUS - Target ads to a specific parental status (for example, parent or not a parent).; TARGETING_TYPE_CONTENT_INSTREAM_POSITION - Target video or audio ads in a specific content instream position (for example, pre-roll, mid-roll, or post-roll).; TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION - Target ads in a specific content outstream position.; TARGETING_TYPE_DEVICE_TYPE - Target ads to a specific device type (for example, tablet or connected TV).; TARGETING_TYPE_AUDIENCE_GROUP - Target ads to an audience or groups of audiences. Singleton field, at most one can exist on a single Lineitem at a time.; TARGETING_TYPE_BROWSER - Target ads to specific web browsers (for example, Chrome).; TARGETING_TYPE_HOUSEHOLD_INCOME - Target ads to a specific household income range (for example, top 10%).; TARGETING_TYPE_ON_SCREEN_POSITION - Target ads in a specific on screen position.; TARGETING_TYPE_THIRD_PARTY_VERIFIER - Filter web sites through third party verification (for example, IAS or DoubleVerify).; TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION - Filter web sites by specific digital content label ratings (for example, DL-MA: suitable only for mature audiences).; TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION - Filter website content by sensitive categories (for example, adult).; TARGETING_TYPE_ENVIRONMENT - Target ads to a specific environment (for example, web or app).; TARGETING_TYPE_CARRIER_AND_ISP - Target ads to a specific network carrier or internet service provider (ISP) (for example, Comcast or Orange).; TARGETING_TYPE_OPERATING_SYSTEM - Target ads to a specific operating system (for example, macOS).; TARGETING_TYPE_DEVICE_MAKE_MODEL - Target ads to a specific device make or model (for example, Roku or Samsung).; TARGETING_TYPE_KEYWORD - Target ads to a specific keyword (for example, dog or retriever).; TARGETING_TYPE_NEGATIVE_KEYWORD_LIST - Target ads to a specific negative keyword list.; TARGETING_TYPE_VIEWABILITY - Target ads to a specific viewability (for example, 80% viewable).; TARGETING_TYPE_CATEGORY - Target ads to a specific content category (for example, arts & entertainment).; TARGETING_TYPE_INVENTORY_SOURCE - Purchase impressions from specific deals and auction packages.; TARGETING_TYPE_LANGUAGE - Target ads to a specific language (for example, English or Japanese).; TARGETING_TYPE_AUTHORIZED_SELLER_STATUS - Target ads to ads.txt authorized sellers. If no targeting option of this type is assigned, the resource uses the "Authorized Direct Sellers and Resellers" option by default.; TARGETING_TYPE_GEO_REGION - Target ads to a specific regional location (for example, a city or state).; TARGETING_TYPE_INVENTORY_SOURCE_GROUP - Purchase impressions from a group of deals and auction packages.; TARGETING_TYPE_EXCHANGE - Purchase impressions from specific exchanges.; TARGETING_TYPE_SUB_EXCHANGE - Purchase impressions from specific sub-exchanges.; TARGETING_TYPE_POI - Target ads around a specific point of interest, such as a notable building, a street address, or latitude/longitude coordinates.; TARGETING_TYPE_BUSINESS_CHAIN - Target ads around locations of a business chain within a specific geo region.; TARGETING_TYPE_CONTENT_DURATION - Target ads to a specific video content duration.; TARGETING_TYPE_CONTENT_STREAM_TYPE - Target ads to a specific video content stream type.; TARGETING_TYPE_NATIVE_CONTENT_POSITION - Target ads to a specific native content position.; TARGETING_TYPE_OMID - Target ads in an Open Measurement enabled inventory.; TARGETING_TYPE_AUDIO_CONTENT_TYPE - Target ads to a specific audio content type.; TARGETING_TYPE_CONTENT_GENRE - Target ads to a specific content genre.; TARGETING_TYPE_YOUTUBE_VIDEO - Target ads to a specific YouTube video. Targeting of this type cannot be created or updated using the API. Although this targeting is inherited by child resources, **inherited targeting of this type will not be retrieveable**.; TARGETING_TYPE_YOUTUBE_CHANNEL - Target ads to a specific YouTube channel. Targeting of this type cannot be created or updated using the API. Although this targeting is inherited by child resources, **inherited targeting of this type will not be retrieveable**.; TARGETING_TYPE_SESSION_POSITION - Target ads to a serve it in a certain position of a session. Only supported for Ad Group resources under YouTube Programmatic Reservation line items. Targeting of this type cannot be created or updated using the API.; TARGETING_TYPE_CONTENT_THEME_EXCLUSION - Filter website content by content themes (for example, religion). Only supported for Advertiser resources. Targeting of this type cannot be created or updated using the API. This targeting is only inherited by child YouTube and Demand Gen line item resources.; TARGETING_TYPE_YOUTUBE_CHANNEL_PACK - Target ads to a specific YouTube channel pack. |

### `DeleteAssignedTargetingOptionsRequest`

A request listing which assigned targeting options of a given targeting type should be deleted.

| Field | Type | Description |
|---|---|---|
| targetingType | string enum(TARGETING_TYPE_UNSPECIFIED, TARGETING_TYPE_CHANNEL, TARGETING_TYPE_APP_CATEGORY, TARGETING_TYPE_APP, TARGETING_TYPE_URL, TARGETING_TYPE_DAY_AND_TIME, TARGETING_TYPE_AGE_RANGE, TARGETING_TYPE_REGIONAL_LOCATION_LIST, TARGETING_TYPE_PROXIMITY_LOCATION_LIST, TARGETING_TYPE_GENDER, TARGETING_TYPE_VIDEO_PLAYER_SIZE, TARGETING_TYPE_USER_REWARDED_CONTENT, TARGETING_TYPE_PARENTAL_STATUS, TARGETING_TYPE_CONTENT_INSTREAM_POSITION, TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION, TARGETING_TYPE_DEVICE_TYPE, TARGETING_TYPE_AUDIENCE_GROUP, TARGETING_TYPE_BROWSER, TARGETING_TYPE_HOUSEHOLD_INCOME, TARGETING_TYPE_ON_SCREEN_POSITION, TARGETING_TYPE_THIRD_PARTY_VERIFIER, TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION, TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION, TARGETING_TYPE_ENVIRONMENT, TARGETING_TYPE_CARRIER_AND_ISP, TARGETING_TYPE_OPERATING_SYSTEM, TARGETING_TYPE_DEVICE_MAKE_MODEL, TARGETING_TYPE_KEYWORD, TARGETING_TYPE_NEGATIVE_KEYWORD_LIST, TARGETING_TYPE_VIEWABILITY, TARGETING_TYPE_CATEGORY, TARGETING_TYPE_INVENTORY_SOURCE, TARGETING_TYPE_LANGUAGE, TARGETING_TYPE_AUTHORIZED_SELLER_STATUS, TARGETING_TYPE_GEO_REGION, TARGETING_TYPE_INVENTORY_SOURCE_GROUP, TARGETING_TYPE_EXCHANGE, TARGETING_TYPE_SUB_EXCHANGE, TARGETING_TYPE_POI, TARGETING_TYPE_BUSINESS_CHAIN, TARGETING_TYPE_CONTENT_DURATION, TARGETING_TYPE_CONTENT_STREAM_TYPE, TARGETING_TYPE_NATIVE_CONTENT_POSITION, TARGETING_TYPE_OMID, TARGETING_TYPE_AUDIO_CONTENT_TYPE, TARGETING_TYPE_CONTENT_GENRE, TARGETING_TYPE_YOUTUBE_VIDEO, TARGETING_TYPE_YOUTUBE_CHANNEL, TARGETING_TYPE_SESSION_POSITION, TARGETING_TYPE_CONTENT_THEME_EXCLUSION, TARGETING_TYPE_YOUTUBE_CHANNEL_PACK) | Required. Identifies the type of this assigned targeting option. Values: TARGETING_TYPE_UNSPECIFIED - Default value when type is not specified or is unknown in this version.; TARGETING_TYPE_CHANNEL - Target a channel (a custom group of related websites or apps).; TARGETING_TYPE_APP_CATEGORY - Target an app category (for example, education or puzzle games).; TARGETING_TYPE_APP - Target a specific app (for example, Angry Birds).; TARGETING_TYPE_URL - Target a specific url (for example, quora.com).; TARGETING_TYPE_DAY_AND_TIME - Target ads during a chosen time period on a specific day.; TARGETING_TYPE_AGE_RANGE - Target ads to a specific age range (for example, 18-24).; TARGETING_TYPE_REGIONAL_LOCATION_LIST - Target ads to the specified regions on a regional location list.; TARGETING_TYPE_PROXIMITY_LOCATION_LIST - Target ads to the specified points of interest on a proximity location list.; TARGETING_TYPE_GENDER - Target ads to a specific gender (for example, female or male).; TARGETING_TYPE_VIDEO_PLAYER_SIZE - Target a specific video player size for video ads.; TARGETING_TYPE_USER_REWARDED_CONTENT - Target user rewarded content for video ads.; TARGETING_TYPE_PARENTAL_STATUS - Target ads to a specific parental status (for example, parent or not a parent).; TARGETING_TYPE_CONTENT_INSTREAM_POSITION - Target video or audio ads in a specific content instream position (for example, pre-roll, mid-roll, or post-roll).; TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION - Target ads in a specific content outstream position.; TARGETING_TYPE_DEVICE_TYPE - Target ads to a specific device type (for example, tablet or connected TV).; TARGETING_TYPE_AUDIENCE_GROUP - Target ads to an audience or groups of audiences. Singleton field, at most one can exist on a single Lineitem at a time.; TARGETING_TYPE_BROWSER - Target ads to specific web browsers (for example, Chrome).; TARGETING_TYPE_HOUSEHOLD_INCOME - Target ads to a specific household income range (for example, top 10%).; TARGETING_TYPE_ON_SCREEN_POSITION - Target ads in a specific on screen position.; TARGETING_TYPE_THIRD_PARTY_VERIFIER - Filter web sites through third party verification (for example, IAS or DoubleVerify).; TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION - Filter web sites by specific digital content label ratings (for example, DL-MA: suitable only for mature audiences).; TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION - Filter website content by sensitive categories (for example, adult).; TARGETING_TYPE_ENVIRONMENT - Target ads to a specific environment (for example, web or app).; TARGETING_TYPE_CARRIER_AND_ISP - Target ads to a specific network carrier or internet service provider (ISP) (for example, Comcast or Orange).; TARGETING_TYPE_OPERATING_SYSTEM - Target ads to a specific operating system (for example, macOS).; TARGETING_TYPE_DEVICE_MAKE_MODEL - Target ads to a specific device make or model (for example, Roku or Samsung).; TARGETING_TYPE_KEYWORD - Target ads to a specific keyword (for example, dog or retriever).; TARGETING_TYPE_NEGATIVE_KEYWORD_LIST - Target ads to a specific negative keyword list.; TARGETING_TYPE_VIEWABILITY - Target ads to a specific viewability (for example, 80% viewable).; TARGETING_TYPE_CATEGORY - Target ads to a specific content category (for example, arts & entertainment).; TARGETING_TYPE_INVENTORY_SOURCE - Purchase impressions from specific deals and auction packages.; TARGETING_TYPE_LANGUAGE - Target ads to a specific language (for example, English or Japanese).; TARGETING_TYPE_AUTHORIZED_SELLER_STATUS - Target ads to ads.txt authorized sellers. If no targeting option of this type is assigned, the resource uses the "Authorized Direct Sellers and Resellers" option by default.; TARGETING_TYPE_GEO_REGION - Target ads to a specific regional location (for example, a city or state).; TARGETING_TYPE_INVENTORY_SOURCE_GROUP - Purchase impressions from a group of deals and auction packages.; TARGETING_TYPE_EXCHANGE - Purchase impressions from specific exchanges.; TARGETING_TYPE_SUB_EXCHANGE - Purchase impressions from specific sub-exchanges.; TARGETING_TYPE_POI - Target ads around a specific point of interest, such as a notable building, a street address, or latitude/longitude coordinates.; TARGETING_TYPE_BUSINESS_CHAIN - Target ads around locations of a business chain within a specific geo region.; TARGETING_TYPE_CONTENT_DURATION - Target ads to a specific video content duration.; TARGETING_TYPE_CONTENT_STREAM_TYPE - Target ads to a specific video content stream type.; TARGETING_TYPE_NATIVE_CONTENT_POSITION - Target ads to a specific native content position.; TARGETING_TYPE_OMID - Target ads in an Open Measurement enabled inventory.; TARGETING_TYPE_AUDIO_CONTENT_TYPE - Target ads to a specific audio content type.; TARGETING_TYPE_CONTENT_GENRE - Target ads to a specific content genre.; TARGETING_TYPE_YOUTUBE_VIDEO - Target ads to a specific YouTube video. Targeting of this type cannot be created or updated using the API. Although this targeting is inherited by child resources, **inherited targeting of this type will not be retrieveable**.; TARGETING_TYPE_YOUTUBE_CHANNEL - Target ads to a specific YouTube channel. Targeting of this type cannot be created or updated using the API. Although this targeting is inherited by child resources, **inherited targeting of this type will not be retrieveable**.; TARGETING_TYPE_SESSION_POSITION - Target ads to a serve it in a certain position of a session. Only supported for Ad Group resources under YouTube Programmatic Reservation line items. Targeting of this type cannot be created or updated using the API.; TARGETING_TYPE_CONTENT_THEME_EXCLUSION - Filter website content by content themes (for example, religion). Only supported for Advertiser resources. Targeting of this type cannot be created or updated using the API. This targeting is only inherited by child YouTube and Demand Gen line item resources.; TARGETING_TYPE_YOUTUBE_CHANNEL_PACK - Target ads to a specific YouTube channel pack. |
| assignedTargetingOptionIds | array<string> | Required. The assigned targeting option IDs to delete. |

### `LineItemAssignedTargetingOption`

Wrapper object associating an assigned_targeting_option resource and the line item it is assigned to.

| Field | Type | Description |
|---|---|---|
| lineItemId | string (int64) | The ID of the line item the assigned targeting option is assigned to. |
| assignedTargetingOption | `AssignedTargetingOption` | The assigned targeting option resource. |

### `DemandGenBiddingStrategy`

Settings that control the bid strategy for Demand Gen resources.

| Field | Type | Description |
|---|---|---|
| effectiveBiddingValue | string (int64) | Output only. The value effectively used by the bidding strategy. This field will be the same as value if set. If value is not set and the strategy is assigned to an ad group, this field will be inherited from the line item's bidding strategy. If type is not `DEMAND_GEN_BIDDING_STRATEGY_TYPE_TARGET_CPA` or `DEMAND_GEN_BIDDING_STRATEGY_TYPE_TARGET_ROAS`, this field will be 0. |
| type | string enum(DEMAND_GEN_BIDDING_STRATEGY_TYPE_UNSPECIFIED, DEMAND_GEN_BIDDING_STRATEGY_TYPE_TARGET_CPA, DEMAND_GEN_BIDDING_STRATEGY_TYPE_TARGET_ROAS, DEMAND_GEN_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSIONS, DEMAND_GEN_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSION_VALUE, DEMAND_GEN_BIDDING_STRATEGY_TYPE_MAXIMIZE_CLICKS, DEMAND_GEN_BIDDING_STRATEGY_TYPE_TARGET_CPC) | Optional. The type of the bidding strategy. This can only be set when assigned to a line item. Ad groups will inherit this value from their line item. Values: DEMAND_GEN_BIDDING_STRATEGY_TYPE_UNSPECIFIED - Type is not specified or unknown.; DEMAND_GEN_BIDDING_STRATEGY_TYPE_TARGET_CPA - A bidding strategy that automatically optimizes conversions per dollar.; DEMAND_GEN_BIDDING_STRATEGY_TYPE_TARGET_ROAS - A bidding strategy that automatically maximizes revenue while averaging a specific target Return On Ad Spend (ROAS).; DEMAND_GEN_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSIONS - A bidding strategy that automatically maximizes number of conversions; DEMAND_GEN_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSION_VALUE - A bidding strategy that automatically maximizes revenue while spending your budget.; DEMAND_GEN_BIDDING_STRATEGY_TYPE_MAXIMIZE_CLICKS - A bidding strategy that automatically maximizes clicks within a given budget.; DEMAND_GEN_BIDDING_STRATEGY_TYPE_TARGET_CPC - A bidding strategy that automatically optimizes cost per click. |
| effectiveBiddingValueSource | string enum(BIDDING_SOURCE_UNSPECIFIED, BIDDING_SOURCE_LINE_ITEM, BIDDING_SOURCE_AD_GROUP) | Output only. Source of the effective bidding value. Values: BIDDING_SOURCE_UNSPECIFIED - Bidding source is not specified or unknown.; BIDDING_SOURCE_LINE_ITEM - Bidding value is inherited from the line item.; BIDDING_SOURCE_AD_GROUP - Bidding value is defined in the ad group. |
| value | string (int64) | Optional. The value used by the bidding strategy. This can be set when assigned to line items or ad groups. This field is only applicable for the following strategy types: * `DEMAND_GEN_BIDDING_STRATEGY_TYPE_TARGET_CPA` * `DEMAND_GEN_BIDDING_STRATEGY_TYPE_TARGET_CPC` * `DEMAND_GEN_BIDDING_STRATEGY_TYPE_TARGET_ROAS` Value of this field is in micros of the advertiser's currency or ROAS value. For example, 1000000 represents 1.0 standard units of the currency or 100% ROAS value. If not using an applicable strategy, the value of this field will be 0. |

### `FixedBidStrategy`

A strategy that uses a fixed bidding price.

| Field | Type | Description |
|---|---|---|
| bidAmountMicros | string (int64) | The fixed bid amount, in micros of the advertiser's currency. For insertion order entity, bid_amount_micros should be set as 0. For line item entity, bid_amount_micros must be greater than or equal to billable unit of the given currency and smaller than or equal to the upper limit 1000000000. For example, 1500000 represents 1.5 standard units of the currency. |

### `MaximizeSpendBidStrategy`

A strategy that automatically adjusts the bid to optimize a specified performance goal while spending the full budget.

| Field | Type | Description |
|---|---|---|
| customBiddingAlgorithmId | string (int64) | The ID of the Custom Bidding Algorithm used by this strategy. Only applicable when performance_goal_type is set to `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO`. Assigning a custom bidding algorithm that uses floodlight activities not identified in floodlightActivityConfigs will return an error. |
| performanceGoalType | string enum(BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_UNSPECIFIED, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_REACH) | Required. The type of the performance goal that the bidding strategy tries to minimize while spending the full budget. `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM` is not supported for this strategy. Values: BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_UNSPECIFIED - Type value is not specified or is unknown in this version.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA - Cost per action.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC - Cost per click.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM - Viewable CPM.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO - Custom bidding algorithm.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA - Completed inview and audible views.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN - Inview time over 10 secs views.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED - Viewable impressions.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_REACH - Maximize reach. |
| maxAverageCpmBidAmountMicros | string (int64) | The maximum average CPM that may be bid, in micros of the advertiser's currency. Must be greater than or equal to a billable unit of the given currency. For example, 1500000 represents 1.5 standard units of the currency. |
| raiseBidForDeals | boolean | Whether the strategy takes deal floor prices into account. |

### `PerformanceGoalBidStrategy`

A strategy that automatically adjusts the bid to meet or beat a specified performance goal.

| Field | Type | Description |
|---|---|---|
| performanceGoalAmountMicros | string (int64) | Required. The performance goal the bidding strategy will attempt to meet or beat, in micros of the advertiser's currency or in micro of the ROAS (Return On Advertising Spend) value which is also based on advertiser's currency. Must be greater than or equal to a billable unit of the given currency and smaller or equal to upper bounds. Each performance_goal_type has its upper bound: * when performance_goal_type is `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA`, upper bound is 10000.00 USD. * when performance_goal_type is `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC`, upper bound is 1000.00 USD. * when performance_goal_type is `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM`, upper bound is 1000.00 USD. * when performance_goal_type is `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO`, upper bound is 1000.00 and lower bound is 0.01. Example: If set to `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM`, the bid price will be based on the probability that each available impression will be viewable. For example, if viewable CPM target is $2 and an impression is 40% likely to be viewable, the bid price will be $0.80 CPM (40% of $2). For example, 1500000 represents 1.5 standard units of the currency or ROAS value. |
| maxAverageCpmBidAmountMicros | string (int64) | The maximum average CPM that may be bid, in micros of the advertiser's currency. Must be greater than or equal to a billable unit of the given currency. Not applicable when performance_goal_type is set to `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM`. For example, 1500000 represents 1.5 standard units of the currency. |
| performanceGoalType | string enum(BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_UNSPECIFIED, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED, BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_REACH) | Required. The type of the performance goal that the bidding strategy will try to meet or beat. For line item level usage, the value must be one of: * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA` * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC` * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM` * `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO`. Values: BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_UNSPECIFIED - Type value is not specified or is unknown in this version.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA - Cost per action.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC - Cost per click.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM - Viewable CPM.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO - Custom bidding algorithm.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA - Completed inview and audible views.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN - Inview time over 10 secs views.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED - Viewable impressions.; BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_REACH - Maximize reach. |
| customBiddingAlgorithmId | string (int64) | The ID of the Custom Bidding Algorithm used by this strategy. Only applicable when performance_goal_type is set to `BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO`. Assigning a custom bidding algorithm that uses floodlight activities not identified in floodlightActivityConfigs will return an error. |

### `YoutubeAndPartnersBiddingStrategy`

Settings that control the bid strategy for YouTube and Partners resources.

| Field | Type | Description |
|---|---|---|
| type | string enum(YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_UNSPECIFIED, YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPV, YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPM, YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA, YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPM, YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_RESERVE_CPM, YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_LIFT, YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSIONS, YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPV, YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_ROAS, YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSION_VALUE) | The type of the bidding strategy. Values: YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_UNSPECIFIED - Type is not specified or unknown.; YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPV - A bidding strategy that pays a configurable amount per video view.; YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPM - A bidding strategy that pays a configurable amount per impression.; YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA - A bidding strategy that automatically optimizes conversions per dollar.; YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPM - A bidding strategy that pays a configurable amount per impression.; YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_RESERVE_CPM - A bidding strategy for YouTube Instant Reserve line items that pays a fixed amount per impression.; YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_LIFT - An automated bidding strategy that sets bids to achieve maximum lift.; YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSIONS - A bidding strategy that automatically maximizes number of conversions given a daily budget.; YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPV - A bidding strategy that automatically optimizes cost per video view.; YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_ROAS - A bidding strategy that automatically maximizes revenue while averaging a specific target Return On Ad Spend (ROAS).; YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSION_VALUE - A bidding strategy that automatically sets bids to maximize revenue while spending your budget. |
| adGroupEffectiveTargetCpaValue | string (int64) | Output only. The effective target CPA for ad group, in micros of advertiser's currency. |
| value | string (int64) | The value used by the bidding strategy. When the bidding strategy is assigned at the line item level, this field is only applicable for the following strategy types: * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_ROAS` When the bidding strategy is assigned at the ad group level, this field is only applicable for the following strategy types: * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPM` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPV` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPM` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_RESERVE_CPM` * `YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_ROAS` If not using an applicable strategy, the value of this field will be 0. |
| adGroupEffectiveTargetCpaSource | string enum(BIDDING_SOURCE_UNSPECIFIED, BIDDING_SOURCE_LINE_ITEM, BIDDING_SOURCE_AD_GROUP) | Output only. Source of the effective target CPA value for ad group. Values: BIDDING_SOURCE_UNSPECIFIED - Bidding source is not specified or unknown.; BIDDING_SOURCE_LINE_ITEM - Bidding value is inherited from the line item.; BIDDING_SOURCE_AD_GROUP - Bidding value is defined in the ad group. |

### `TrackingFloodlightActivityConfig`

Settings that control the behavior of a single Floodlight activity config.

| Field | Type | Description |
|---|---|---|
| floodlightActivityId | string (int64) | Required. The ID of the Floodlight activity. |
| postViewLookbackWindowDays | integer (int32) | Required. The number of days after an ad has been viewed in which a conversion may be counted. Must be between 0 and 90 inclusive. |
| postClickLookbackWindowDays | integer (int32) | Required. The number of days after an ad has been clicked in which a conversion may be counted. Must be between 0 and 90 inclusive. |

### `ThirdPartyMeasurementConfigs`

Settings that control what third-party vendors are measuring specific line item metrics.

| Field | Type | Description |
|---|---|---|
| viewabilityVendorConfigs | array<`ThirdPartyVendorConfig`> | Optional. The third-party vendors measuring viewability. The following third-party vendors are applicable: * `THIRD_PARTY_VENDOR_MOAT` * `THIRD_PARTY_VENDOR_DOUBLE_VERIFY` * `THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE` * `THIRD_PARTY_VENDOR_COMSCORE` * `THIRD_PARTY_VENDOR_TELEMETRY` * `THIRD_PARTY_VENDOR_MEETRICS` |
| brandLiftVendorConfigs | array<`ThirdPartyVendorConfig`> | Optional. The third-party vendors measuring brand lift. The following third-party vendors are applicable: * `THIRD_PARTY_VENDOR_DYNATA` * `THIRD_PARTY_VENDOR_KANTAR` * `THIRD_PARTY_VENDOR_INTAGE` * `THIRD_PARTY_VENDOR_MACROMILL` |
| brandSafetyVendorConfigs | array<`ThirdPartyVendorConfig`> | Optional. The third-party vendors measuring brand safety. The following third-party vendors are applicable: * `THIRD_PARTY_VENDOR_ZEFR` * `THIRD_PARTY_VENDOR_DOUBLE_VERIFY` * `THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE` |
| reachVendorConfigs | array<`ThirdPartyVendorConfig`> | Optional. The third-party vendors measuring reach. The following third-party vendors are applicable: * `THIRD_PARTY_VENDOR_NIELSEN` * `THIRD_PARTY_VENDOR_COMSCORE` * `THIRD_PARTY_VENDOR_KANTAR` * `THIRD_PARTY_VENDOR_VIDEO_RESEARCH` * `THIRD_PARTY_VENDOR_MEDIA_SCOPE` * `THIRD_PARTY_VENDOR_AUDIENCE_PROJECT` * `THIRD_PARTY_VENDOR_VIDEO_AMP` * `THIRD_PARTY_VENDOR_ISPOT_TV` * `THIRD_PARTY_VENDOR_GEMIUS` |

### `DateRange`

A date range.

| Field | Type | Description |
|---|---|---|
| startDate | `Date` | The lower bound of the date range, inclusive. Must specify a positive value for `year`, `month`, and `day`. |
| endDate | `Date` | The upper bound of the date range, inclusive. Must specify a positive value for `year`, `month`, and `day`. |

### `TargetFrequency`

Setting that controls the average number of times the ads will show to the same person over a certain period of time.

| Field | Type | Description |
|---|---|---|
| timeUnitCount | integer (int32) | The number of time_unit the target frequency will last. The following restrictions apply based on the value of time_unit: * `TIME_UNIT_WEEKS` - must be 1 * `TIME_UNIT_MONTHS` - must be 1 |
| targetCount | string (int64) | The target number of times, on average, the ads will be shown to the same person in the timespan dictated by time_unit and time_unit_count. |
| timeUnit | string enum(TIME_UNIT_UNSPECIFIED, TIME_UNIT_LIFETIME, TIME_UNIT_MONTHS, TIME_UNIT_WEEKS, TIME_UNIT_DAYS, TIME_UNIT_HOURS, TIME_UNIT_MINUTES) | The unit of time in which the target frequency will be applied. The following time unit is applicable: * `TIME_UNIT_WEEKS` * `TIME_UNIT_MONTHS` Values: TIME_UNIT_UNSPECIFIED - Time unit value is not specified or is unknown in this version.; TIME_UNIT_LIFETIME - The frequency cap will be applied to the whole life time of the line item.; TIME_UNIT_MONTHS - The frequency cap will be applied to a number of months.; TIME_UNIT_WEEKS - The frequency cap will be applied to a number of weeks.; TIME_UNIT_DAYS - The frequency cap will be applied to a number of days.; TIME_UNIT_HOURS - The frequency cap will be applied to a number of hours.; TIME_UNIT_MINUTES - The frequency cap will be applied to a number of minutes. |

### `VideoAdInventoryControl`

The video ad inventory control used in certain YouTube line item types.

| Field | Type | Description |
|---|---|---|
| allowNonSkippableInStream | boolean | Optional. Indicates whether ads can serve as non-skippable in-stream format. |
| allowInStream | boolean | Optional. Whether ads can serve as in-stream format. |
| allowInFeed | boolean | Optional. Whether ads can serve as in-feed format. |
| allowShorts | boolean | Optional. Whether ads can serve as shorts format. |

### `VideoAdSequenceSettings`

Settings related to VideoAdSequence.

| Field | Type | Description |
|---|---|---|
| minimumDuration | string enum(VIDEO_AD_SEQUENCE_MINIMUM_DURATION_UNSPECIFIED, VIDEO_AD_SEQUENCE_MINIMUM_DURATION_WEEK, VIDEO_AD_SEQUENCE_MINIMUM_DURATION_MONTH) | The minimum time interval before the same user sees this sequence again. Values: VIDEO_AD_SEQUENCE_MINIMUM_DURATION_UNSPECIFIED - Unspecified or unknown.; VIDEO_AD_SEQUENCE_MINIMUM_DURATION_WEEK - 7 days.; VIDEO_AD_SEQUENCE_MINIMUM_DURATION_MONTH - 30 days. |
| steps | array<`VideoAdSequenceStep`> | The steps of which the sequence consists. |

### `YoutubeAndPartnersInventorySourceConfig`

Settings that control what YouTube related inventories the YouTube and Partners line item will target.

| Field | Type | Description |
|---|---|---|
| includeGoogleTv | boolean | Optional. Whether to target inventory in video apps available with Google TV. |
| includeYoutube | boolean | Optional. Whether to target inventory on YouTube. This includes both search, channels and videos. |
| includeYoutubeVideoPartners | boolean | Whether to target inventory on a collection of partner sites and apps that follow the same brand safety standards as YouTube. |

### `AssignedTargetingOption`

A single assigned targeting option, which defines the state of a targeting option for an entity with targeting settings.

| Field | Type | Description |
|---|---|---|
| languageDetails | `LanguageAssignedTargetingOptionDetails` | Language details. This field will be populated when the targeting_type is `TARGETING_TYPE_LANGUAGE`. |
| businessChainDetails | `BusinessChainAssignedTargetingOptionDetails` | Business chain details. This field will be populated when the targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`. |
| contentStreamTypeDetails | `ContentStreamTypeAssignedTargetingOptionDetails` | Content duration details. This field will be populated when the TargetingType is `TARGETING_TYPE_CONTENT_STREAM_TYPE`. |
| negativeKeywordListDetails | `NegativeKeywordListAssignedTargetingOptionDetails` | Keyword details. This field will be populated when the targeting_type is `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST`. A maximum of 4 negative keyword lists can be assigned to a resource. |
| audioContentTypeDetails | `AudioContentTypeAssignedTargetingOptionDetails` | Audio content type details. This field will be populated when the targeting_type is `TARGETING_TYPE_AUDIO_CONTENT_TYPE`. |
| householdIncomeDetails | `HouseholdIncomeAssignedTargetingOptionDetails` | Household income details. This field will be populated when the targeting_type is `TARGETING_TYPE_HOUSEHOLD_INCOME`. |
| videoPlayerSizeDetails | `VideoPlayerSizeAssignedTargetingOptionDetails` | Video player size details. This field will be populated when the targeting_type is `TARGETING_TYPE_VIDEO_PLAYER_SIZE`. |
| nativeContentPositionDetails | `NativeContentPositionAssignedTargetingOptionDetails` | Native content position details. This field will be populated when the targeting_type is `TARGETING_TYPE_NATIVE_CONTENT_POSITION`. |
| contentGenreDetails | `ContentGenreAssignedTargetingOptionDetails` | Content genre details. This field will be populated when the targeting_type is `TARGETING_TYPE_CONTENT_GENRE`. |
| proximityLocationListDetails | `ProximityLocationListAssignedTargetingOptionDetails` | Proximity location list details. This field will be populated when the targeting_type is `TARGETING_TYPE_PROXIMITY_LOCATION_LIST`. |
| sensitiveCategoryExclusionDetails | `SensitiveCategoryAssignedTargetingOptionDetails` | Sensitive category details. This field will be populated when the targeting_type is `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`. Sensitive categories are targeting exclusions. Advertiser level sensitive category exclusions, if set, are always applied in serving (even though they aren't visible in resource settings). Resource settings can exclude sensitive categories in addition to advertiser exclusions, but can't override them. |
| contentThemeExclusionDetails | `ContentThemeAssignedTargetingOptionDetails` | Content theme details. This field will be populated when the targeting_type is `TARGETING_TYPE_CONTENT_THEME_EXCLUSION`. Content theme are targeting exclusions. Advertiser level content theme exclusions, if set, are always applied in serving (even though they aren't visible in resource settings). Resource settings can exclude content theme in addition to advertiser exclusions. |
| appCategoryDetails | `AppCategoryAssignedTargetingOptionDetails` | App category details. This field will be populated when the targeting_type is `TARGETING_TYPE_APP_CATEGORY`. |
| environmentDetails | `EnvironmentAssignedTargetingOptionDetails` | Environment details. This field will be populated when the targeting_type is `TARGETING_TYPE_ENVIRONMENT`. |
| deviceTypeDetails | `DeviceTypeAssignedTargetingOptionDetails` | Device Type details. This field will be populated when the targeting_type is `TARGETING_TYPE_DEVICE_TYPE`. |
| userRewardedContentDetails | `UserRewardedContentAssignedTargetingOptionDetails` | User rewarded content details. This field will be populated when the targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`. |
| omidDetails | `OmidAssignedTargetingOptionDetails` | Open Measurement enabled inventory details. This field will be populated when the targeting_type is `TARGETING_TYPE_OMID`. |
| youtubeVideoDetails | `YoutubeVideoAssignedTargetingOptionDetails` | YouTube video details. This field will be populated when the targeting_type is `TARGETING_TYPE_YOUTUBE_VIDEO`. |
| contentInstreamPositionDetails | `ContentInstreamPositionAssignedTargetingOptionDetails` | Content instream position details. This field will be populated when the targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`. |
| inheritance | string enum(INHERITANCE_UNSPECIFIED, NOT_INHERITED, INHERITED_FROM_PARTNER, INHERITED_FROM_ADVERTISER) | Output only. The inheritance status of the assigned targeting option. Values: INHERITANCE_UNSPECIFIED - The inheritance is unspecified or unknown.; NOT_INHERITED - The assigned targeting option is not inherited from higher level entity.; INHERITED_FROM_PARTNER - The assigned targeting option is inherited from partner targeting settings.; INHERITED_FROM_ADVERTISER - The assigned targeting option is inherited from advertiser targeting settings. |
| targetingType | string enum(TARGETING_TYPE_UNSPECIFIED, TARGETING_TYPE_CHANNEL, TARGETING_TYPE_APP_CATEGORY, TARGETING_TYPE_APP, TARGETING_TYPE_URL, TARGETING_TYPE_DAY_AND_TIME, TARGETING_TYPE_AGE_RANGE, TARGETING_TYPE_REGIONAL_LOCATION_LIST, TARGETING_TYPE_PROXIMITY_LOCATION_LIST, TARGETING_TYPE_GENDER, TARGETING_TYPE_VIDEO_PLAYER_SIZE, TARGETING_TYPE_USER_REWARDED_CONTENT, TARGETING_TYPE_PARENTAL_STATUS, TARGETING_TYPE_CONTENT_INSTREAM_POSITION, TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION, TARGETING_TYPE_DEVICE_TYPE, TARGETING_TYPE_AUDIENCE_GROUP, TARGETING_TYPE_BROWSER, TARGETING_TYPE_HOUSEHOLD_INCOME, TARGETING_TYPE_ON_SCREEN_POSITION, TARGETING_TYPE_THIRD_PARTY_VERIFIER, TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION, TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION, TARGETING_TYPE_ENVIRONMENT, TARGETING_TYPE_CARRIER_AND_ISP, TARGETING_TYPE_OPERATING_SYSTEM, TARGETING_TYPE_DEVICE_MAKE_MODEL, TARGETING_TYPE_KEYWORD, TARGETING_TYPE_NEGATIVE_KEYWORD_LIST, TARGETING_TYPE_VIEWABILITY, TARGETING_TYPE_CATEGORY, TARGETING_TYPE_INVENTORY_SOURCE, TARGETING_TYPE_LANGUAGE, TARGETING_TYPE_AUTHORIZED_SELLER_STATUS, TARGETING_TYPE_GEO_REGION, TARGETING_TYPE_INVENTORY_SOURCE_GROUP, TARGETING_TYPE_EXCHANGE, TARGETING_TYPE_SUB_EXCHANGE, TARGETING_TYPE_POI, TARGETING_TYPE_BUSINESS_CHAIN, TARGETING_TYPE_CONTENT_DURATION, TARGETING_TYPE_CONTENT_STREAM_TYPE, TARGETING_TYPE_NATIVE_CONTENT_POSITION, TARGETING_TYPE_OMID, TARGETING_TYPE_AUDIO_CONTENT_TYPE, TARGETING_TYPE_CONTENT_GENRE, TARGETING_TYPE_YOUTUBE_VIDEO, TARGETING_TYPE_YOUTUBE_CHANNEL, TARGETING_TYPE_SESSION_POSITION, TARGETING_TYPE_CONTENT_THEME_EXCLUSION, TARGETING_TYPE_YOUTUBE_CHANNEL_PACK) | Output only. Identifies the type of this assigned targeting option. Values: TARGETING_TYPE_UNSPECIFIED - Default value when type is not specified or is unknown in this version.; TARGETING_TYPE_CHANNEL - Target a channel (a custom group of related websites or apps).; TARGETING_TYPE_APP_CATEGORY - Target an app category (for example, education or puzzle games).; TARGETING_TYPE_APP - Target a specific app (for example, Angry Birds).; TARGETING_TYPE_URL - Target a specific url (for example, quora.com).; TARGETING_TYPE_DAY_AND_TIME - Target ads during a chosen time period on a specific day.; TARGETING_TYPE_AGE_RANGE - Target ads to a specific age range (for example, 18-24).; TARGETING_TYPE_REGIONAL_LOCATION_LIST - Target ads to the specified regions on a regional location list.; TARGETING_TYPE_PROXIMITY_LOCATION_LIST - Target ads to the specified points of interest on a proximity location list.; TARGETING_TYPE_GENDER - Target ads to a specific gender (for example, female or male).; TARGETING_TYPE_VIDEO_PLAYER_SIZE - Target a specific video player size for video ads.; TARGETING_TYPE_USER_REWARDED_CONTENT - Target user rewarded content for video ads.; TARGETING_TYPE_PARENTAL_STATUS - Target ads to a specific parental status (for example, parent or not a parent).; TARGETING_TYPE_CONTENT_INSTREAM_POSITION - Target video or audio ads in a specific content instream position (for example, pre-roll, mid-roll, or post-roll).; TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION - Target ads in a specific content outstream position.; TARGETING_TYPE_DEVICE_TYPE - Target ads to a specific device type (for example, tablet or connected TV).; TARGETING_TYPE_AUDIENCE_GROUP - Target ads to an audience or groups of audiences. Singleton field, at most one can exist on a single Lineitem at a time.; TARGETING_TYPE_BROWSER - Target ads to specific web browsers (for example, Chrome).; TARGETING_TYPE_HOUSEHOLD_INCOME - Target ads to a specific household income range (for example, top 10%).; TARGETING_TYPE_ON_SCREEN_POSITION - Target ads in a specific on screen position.; TARGETING_TYPE_THIRD_PARTY_VERIFIER - Filter web sites through third party verification (for example, IAS or DoubleVerify).; TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION - Filter web sites by specific digital content label ratings (for example, DL-MA: suitable only for mature audiences).; TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION - Filter website content by sensitive categories (for example, adult).; TARGETING_TYPE_ENVIRONMENT - Target ads to a specific environment (for example, web or app).; TARGETING_TYPE_CARRIER_AND_ISP - Target ads to a specific network carrier or internet service provider (ISP) (for example, Comcast or Orange).; TARGETING_TYPE_OPERATING_SYSTEM - Target ads to a specific operating system (for example, macOS).; TARGETING_TYPE_DEVICE_MAKE_MODEL - Target ads to a specific device make or model (for example, Roku or Samsung).; TARGETING_TYPE_KEYWORD - Target ads to a specific keyword (for example, dog or retriever).; TARGETING_TYPE_NEGATIVE_KEYWORD_LIST - Target ads to a specific negative keyword list.; TARGETING_TYPE_VIEWABILITY - Target ads to a specific viewability (for example, 80% viewable).; TARGETING_TYPE_CATEGORY - Target ads to a specific content category (for example, arts & entertainment).; TARGETING_TYPE_INVENTORY_SOURCE - Purchase impressions from specific deals and auction packages.; TARGETING_TYPE_LANGUAGE - Target ads to a specific language (for example, English or Japanese).; TARGETING_TYPE_AUTHORIZED_SELLER_STATUS - Target ads to ads.txt authorized sellers. If no targeting option of this type is assigned, the resource uses the "Authorized Direct Sellers and Resellers" option by default.; TARGETING_TYPE_GEO_REGION - Target ads to a specific regional location (for example, a city or state).; TARGETING_TYPE_INVENTORY_SOURCE_GROUP - Purchase impressions from a group of deals and auction packages.; TARGETING_TYPE_EXCHANGE - Purchase impressions from specific exchanges.; TARGETING_TYPE_SUB_EXCHANGE - Purchase impressions from specific sub-exchanges.; TARGETING_TYPE_POI - Target ads around a specific point of interest, such as a notable building, a street address, or latitude/longitude coordinates.; TARGETING_TYPE_BUSINESS_CHAIN - Target ads around locations of a business chain within a specific geo region.; TARGETING_TYPE_CONTENT_DURATION - Target ads to a specific video content duration.; TARGETING_TYPE_CONTENT_STREAM_TYPE - Target ads to a specific video content stream type.; TARGETING_TYPE_NATIVE_CONTENT_POSITION - Target ads to a specific native content position.; TARGETING_TYPE_OMID - Target ads in an Open Measurement enabled inventory.; TARGETING_TYPE_AUDIO_CONTENT_TYPE - Target ads to a specific audio content type.; TARGETING_TYPE_CONTENT_GENRE - Target ads to a specific content genre.; TARGETING_TYPE_YOUTUBE_VIDEO - Target ads to a specific YouTube video. Targeting of this type cannot be created or updated using the API. Although this targeting is inherited by child resources, **inherited targeting of this type will not be retrieveable**.; TARGETING_TYPE_YOUTUBE_CHANNEL - Target ads to a specific YouTube channel. Targeting of this type cannot be created or updated using the API. Although this targeting is inherited by child resources, **inherited targeting of this type will not be retrieveable**.; TARGETING_TYPE_SESSION_POSITION - Target ads to a serve it in a certain position of a session. Only supported for Ad Group resources under YouTube Programmatic Reservation line items. Targeting of this type cannot be created or updated using the API.; TARGETING_TYPE_CONTENT_THEME_EXCLUSION - Filter website content by content themes (for example, religion). Only supported for Advertiser resources. Targeting of this type cannot be created or updated using the API. This targeting is only inherited by child YouTube and Demand Gen line item resources.; TARGETING_TYPE_YOUTUBE_CHANNEL_PACK - Target ads to a specific YouTube channel pack. |
| assignedTargetingOptionIdAlias | string | Output only. An alias for the assigned_targeting_option_id. This value can be used in place of `assignedTargetingOptionId` when retrieving or deleting existing targeting. This field will only be supported for all assigned targeting options of the following targeting types: * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_OMID` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_VIEWABILITY` This field is also supported for line item assigned targeting options of the following targeting types: * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` |
| parentalStatusDetails | `ParentalStatusAssignedTargetingOptionDetails` | Parental status details. This field will be populated when the targeting_type is `TARGETING_TYPE_PARENTAL_STATUS`. |
| urlDetails | `UrlAssignedTargetingOptionDetails` | URL details. This field will be populated when the targeting_type is `TARGETING_TYPE_URL`. |
| keywordDetails | `KeywordAssignedTargetingOptionDetails` | Keyword details. This field will be populated when the targeting_type is `TARGETING_TYPE_KEYWORD`. A maximum of 5000 direct negative keywords can be assigned to a resource. No limit on number of positive keywords that can be assigned. |
| deviceMakeModelDetails | `DeviceMakeModelAssignedTargetingOptionDetails` | Device make and model details. This field will be populated when the targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`. |
| exchangeDetails | `ExchangeAssignedTargetingOptionDetails` | Exchange details. This field will be populated when the targeting_type is `TARGETING_TYPE_EXCHANGE`. |
| categoryDetails | `CategoryAssignedTargetingOptionDetails` | Category details. This field will be populated when the targeting_type is `TARGETING_TYPE_CATEGORY`. Targeting a category will also target its subcategories. If a category is excluded from targeting and a subcategory is included, the exclusion will take precedence. |
| audienceGroupDetails | `AudienceGroupAssignedTargetingOptionDetails` | Audience targeting details. This field will be populated when the targeting_type is `TARGETING_TYPE_AUDIENCE_GROUP`. You can only target one audience group option per resource. |
| viewabilityDetails | `ViewabilityAssignedTargetingOptionDetails` | Viewability details. This field will be populated when the targeting_type is `TARGETING_TYPE_VIEWABILITY`. You can only target one viewability option per resource. |
| name | string | Output only. The resource name for this assigned targeting option. |
| dayAndTimeDetails | `DayAndTimeAssignedTargetingOptionDetails` | Day and time details. This field will be populated when the targeting_type is `TARGETING_TYPE_DAY_AND_TIME`. |
| sessionPositionDetails | `SessionPositionAssignedTargetingOptionDetails` | Session position details. This field will be populated when the targeting_type is `TARGETING_TYPE_SESSION_POSITION`. |
| thirdPartyVerifierDetails | `ThirdPartyVerifierAssignedTargetingOptionDetails` | Third party verification details. This field will be populated when the targeting_type is `TARGETING_TYPE_THIRD_PARTY_VERIFIER`. |
| inventorySourceDetails | `InventorySourceAssignedTargetingOptionDetails` | Inventory source details. This field will be populated when the targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE_DEAL`. |
| authorizedSellerStatusDetails | `AuthorizedSellerStatusAssignedTargetingOptionDetails` | Authorized seller status details. This field will be populated when the targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`. You can only target one authorized seller status option per resource. If a resource doesn't have an authorized seller status option, all authorized sellers indicated as DIRECT or RESELLER in the ads.txt file are targeted by default. |
| youtubeChannelPackDetails | `YoutubeChannelPackAssignedTargetingOptionDetails` | YouTube channel pack details. This field will be populated when the targeting_type is `TARGETING_TYPE_YOUTUBE_CHANNEL_PACK`. |
| contentOutstreamPositionDetails | `ContentOutstreamPositionAssignedTargetingOptionDetails` | Content outstream position details. This field will be populated when the targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`. |
| onScreenPositionDetails | `OnScreenPositionAssignedTargetingOptionDetails` | On screen position details. This field will be populated when the targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`. |
| contentDurationDetails | `ContentDurationAssignedTargetingOptionDetails` | Content duration details. This field will be populated when the targeting_type is `TARGETING_TYPE_CONTENT_DURATION`. |
| assignedTargetingOptionId | string | Output only. The unique ID of the assigned targeting option. The ID is only unique within a given resource and targeting type. It may be reused in other contexts. |
| channelDetails | `ChannelAssignedTargetingOptionDetails` | Channel details. This field will be populated when the targeting_type is `TARGETING_TYPE_CHANNEL`. |
| poiDetails | `PoiAssignedTargetingOptionDetails` | POI details. This field will be populated when the targeting_type is `TARGETING_TYPE_POI`. |
| appDetails | `AppAssignedTargetingOptionDetails` | App details. This field will be populated when the targeting_type is `TARGETING_TYPE_APP`. |
| inventorySourceGroupDetails | `InventorySourceGroupAssignedTargetingOptionDetails` | Inventory source group details. This field will be populated when the targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE_GROUP`. |
| browserDetails | `BrowserAssignedTargetingOptionDetails` | Browser details. This field will be populated when the targeting_type is `TARGETING_TYPE_BROWSER`. |
| geoRegionDetails | `GeoRegionAssignedTargetingOptionDetails` | Geographic region details. This field will be populated when the targeting_type is `TARGETING_TYPE_GEO_REGION`. |
| regionalLocationListDetails | `RegionalLocationListAssignedTargetingOptionDetails` | Regional location list details. This field will be populated when the targeting_type is `TARGETING_TYPE_REGIONAL_LOCATION_LIST`. |
| subExchangeDetails | `SubExchangeAssignedTargetingOptionDetails` | Sub-exchange details. This field will be populated when the targeting_type is `TARGETING_TYPE_SUB_EXCHANGE`. |
| operatingSystemDetails | `OperatingSystemAssignedTargetingOptionDetails` | Operating system details. This field will be populated when the targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`. |
| carrierAndIspDetails | `CarrierAndIspAssignedTargetingOptionDetails` | Carrier and ISP details. This field will be populated when the targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`. |
| ageRangeDetails | `AgeRangeAssignedTargetingOptionDetails` | Age range details. This field will be populated when the targeting_type is `TARGETING_TYPE_AGE_RANGE`. |
| youtubeChannelDetails | `YoutubeChannelAssignedTargetingOptionDetails` | YouTube channel details. This field will be populated when the targeting_type is `TARGETING_TYPE_YOUTUBE_CHANNEL`. |
| digitalContentLabelExclusionDetails | `DigitalContentLabelAssignedTargetingOptionDetails` | Digital content label details. This field will be populated when the targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`. Digital content labels are targeting exclusions. Advertiser level digital content label exclusions, if set, are always applied in serving (even though they aren't visible in resource settings). Resource settings can exclude content labels in addition to advertiser exclusions, but can't override them. A line item won't serve if all the digital content labels are excluded. |
| genderDetails | `GenderAssignedTargetingOptionDetails` | Gender details. This field will be populated when the targeting_type is `TARGETING_TYPE_GENDER`. |

### `ThirdPartyVendorConfig`

Settings that control how third-party measurement vendors are configured.

| Field | Type | Description |
|---|---|---|
| vendor | string enum(THIRD_PARTY_VENDOR_UNSPECIFIED, THIRD_PARTY_VENDOR_MOAT, THIRD_PARTY_VENDOR_DOUBLE_VERIFY, THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE, THIRD_PARTY_VENDOR_COMSCORE, THIRD_PARTY_VENDOR_TELEMETRY, THIRD_PARTY_VENDOR_MEETRICS, THIRD_PARTY_VENDOR_ZEFR, THIRD_PARTY_VENDOR_NIELSEN, THIRD_PARTY_VENDOR_KANTAR, THIRD_PARTY_VENDOR_DYNATA, THIRD_PARTY_VENDOR_TRANSUNION, THIRD_PARTY_VENDOR_ORIGIN, THIRD_PARTY_VENDOR_GEMIUS, THIRD_PARTY_VENDOR_MEDIA_SCOPE, THIRD_PARTY_VENDOR_AUDIENCE_PROJECT, THIRD_PARTY_VENDOR_VIDEO_AMP, THIRD_PARTY_VENDOR_ISPOT_TV, THIRD_PARTY_VENDOR_INTAGE, THIRD_PARTY_VENDOR_MACROMILL, THIRD_PARTY_VENDOR_VIDEO_RESEARCH, THIRD_PARTY_VENDOR_AQUILA) | The third-party measurement vendor. Values: THIRD_PARTY_VENDOR_UNSPECIFIED - Unknown third-party vendor.; THIRD_PARTY_VENDOR_MOAT - Moat.; THIRD_PARTY_VENDOR_DOUBLE_VERIFY - DoubleVerify.; THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE - Integral Ad Science.; THIRD_PARTY_VENDOR_COMSCORE - Comscore.; THIRD_PARTY_VENDOR_TELEMETRY - Telemetry.; THIRD_PARTY_VENDOR_MEETRICS - Meetrics.; THIRD_PARTY_VENDOR_ZEFR - ZEFR.; THIRD_PARTY_VENDOR_NIELSEN - Nielsen.; THIRD_PARTY_VENDOR_KANTAR - Kantar.; THIRD_PARTY_VENDOR_DYNATA - Dynata.; THIRD_PARTY_VENDOR_TRANSUNION - Transunion.; THIRD_PARTY_VENDOR_ORIGIN - Origin.; THIRD_PARTY_VENDOR_GEMIUS - Gemius.; THIRD_PARTY_VENDOR_MEDIA_SCOPE - MediaScope.; THIRD_PARTY_VENDOR_AUDIENCE_PROJECT - Audience Project.; THIRD_PARTY_VENDOR_VIDEO_AMP - Video Amp.; THIRD_PARTY_VENDOR_ISPOT_TV - Ispot TV.; THIRD_PARTY_VENDOR_INTAGE - Intage.; THIRD_PARTY_VENDOR_MACROMILL - Macromill.; THIRD_PARTY_VENDOR_VIDEO_RESEARCH - Video Research.; THIRD_PARTY_VENDOR_AQUILA - Aquila. |
| placementId | string | The ID used by the platform of the third-party vendor to identify the line item. |

### `Date`

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp

| Field | Type | Description |
|---|---|---|
| day | integer (int32) | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| year | integer (int32) | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| month | integer (int32) | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |

### `VideoAdSequenceStep`

The detail of a single step in a VideoAdSequence.

| Field | Type | Description |
|---|---|---|
| adGroupId | string (int64) | The ID of the corresponding ad group of the step. |
| stepId | string (int64) | The ID of the step. |
| interactionType | string enum(INTERACTION_TYPE_UNSPECIFIED, INTERACTION_TYPE_PAID_VIEW, INTERACTION_TYPE_SKIP, INTERACTION_TYPE_IMPRESSION, INTERACTION_TYPE_ENGAGED_IMPRESSION) | The interaction on the previous step that will lead the viewer to this step. The first step does not have interaction_type. Values: INTERACTION_TYPE_UNSPECIFIED - Unspecified or unknown; INTERACTION_TYPE_PAID_VIEW - A paid view.; INTERACTION_TYPE_SKIP - Skipped by the viewer.; INTERACTION_TYPE_IMPRESSION - A (viewed) ad impression.; INTERACTION_TYPE_ENGAGED_IMPRESSION - An ad impression that was not immediately skipped by the viewer, but didn't reach the billable event either. |
| previousStepId | string (int64) | The ID of the previous step. The first step does not have previous step. |

### `AgeRangeAssignedTargetingOptionDetails`

Represents a targetable age range. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AGE_RANGE`.

| Field | Type | Description |
|---|---|---|
| ageRange | string enum(AGE_RANGE_UNSPECIFIED, AGE_RANGE_18_24, AGE_RANGE_25_34, AGE_RANGE_35_44, AGE_RANGE_45_54, AGE_RANGE_55_64, AGE_RANGE_65_PLUS, AGE_RANGE_UNKNOWN, AGE_RANGE_18_20, AGE_RANGE_21_24, AGE_RANGE_25_29, AGE_RANGE_30_34, AGE_RANGE_35_39, AGE_RANGE_40_44, AGE_RANGE_45_49, AGE_RANGE_50_54, AGE_RANGE_55_59, AGE_RANGE_60_64) | Required. The age range of an audience. We only support targeting a continuous age range of an audience. Thus, the age range represented in this field can be 1) targeted solely, or, 2) part of a larger continuous age range. The reach of a continuous age range targeting can be expanded by also targeting an audience of an unknown age. Values: AGE_RANGE_UNSPECIFIED - Default value when age range is not specified in this version. This enum is a placeholder for default value and does not represent a real age range option.; AGE_RANGE_18_24 - The age range of the audience is 18 to 24.; AGE_RANGE_25_34 - The age range of the audience is 25 to 34.; AGE_RANGE_35_44 - The age range of the audience is 35 to 44.; AGE_RANGE_45_54 - The age range of the audience is 45 to 54.; AGE_RANGE_55_64 - The age range of the audience is 55 to 64.; AGE_RANGE_65_PLUS - The age range of the audience is 65 and up.; AGE_RANGE_UNKNOWN - The age range of the audience is unknown.; AGE_RANGE_18_20 - The age range of the audience is 18 to 20, only supported for the AdGroup of YouTube Programmatic Reservation line item.; AGE_RANGE_21_24 - The age range of the audience is 21 to 24, only supported for the AdGroup of YouTube Programmatic Reservation line item.; AGE_RANGE_25_29 - The age range of the audience is 25 to 29, only supported for the AdGroup of YouTube Programmatic Reservation line item.; AGE_RANGE_30_34 - The age range of the audience is 30 to 34, only supported for the AdGroup of YouTube Programmatic Reservation line item.; AGE_RANGE_35_39 - The age range of the audience is 35 to 39, only supported for the AdGroup of YouTube Programmatic Reservation line item.; AGE_RANGE_40_44 - The age range of the audience is 40 to 44, only supported for the AdGroup of YouTube Programmatic Reservation line item.; AGE_RANGE_45_49 - The age range of the audience is 45 to 49, only supported for the AdGroup of YouTube Programmatic Reservation line item.; AGE_RANGE_50_54 - The age range of the audience is 50 to 54, only supported for the AdGroup of YouTube Programmatic Reservation line item.; AGE_RANGE_55_59 - The age range of the audience is 55 to 59, only supported for the AdGroup of YouTube Programmatic Reservation line item.; AGE_RANGE_60_64 - The age range of the audience is 60 to 64, only supported for the AdGroup of YouTube Programmatic Reservation line item. |

### `AppAssignedTargetingOptionDetails`

Details for assigned app targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP`.

| Field | Type | Description |
|---|---|---|
| appPlatform | string enum(APP_PLATFORM_UNSPECIFIED, APP_PLATFORM_IOS, APP_PLATFORM_ANDROID, APP_PLATFORM_ROKU, APP_PLATFORM_AMAZON_FIRETV, APP_PLATFORM_PLAYSTATION, APP_PLATFORM_APPLE_TV, APP_PLATFORM_XBOX, APP_PLATFORM_SAMSUNG_TV, APP_PLATFORM_ANDROID_TV, APP_PLATFORM_GENERIC_CTV, APP_PLATFORM_LG_TV, APP_PLATFORM_VIZIO_TV, APP_PLATFORM_VIDAA) | Indicates the platform of the targeted app. If this field is not specified, the app platform will be assumed to be mobile (i.e., Android or iOS), and we will derive the appropriate mobile platform from the app ID. Values: APP_PLATFORM_UNSPECIFIED - Default value when app platform is not specified in this version. This enum is a placeholder for default value and does not represent a real platform option.; APP_PLATFORM_IOS - The app platform is iOS.; APP_PLATFORM_ANDROID - The app platform is Android.; APP_PLATFORM_ROKU - The app platform is Roku.; APP_PLATFORM_AMAZON_FIRETV - The app platform is Amazon FireTV.; APP_PLATFORM_PLAYSTATION - The app platform is Playstation.; APP_PLATFORM_APPLE_TV - The app platform is Apple TV.; APP_PLATFORM_XBOX - The app platform is Xbox.; APP_PLATFORM_SAMSUNG_TV - The app platform is Samsung TV.; APP_PLATFORM_ANDROID_TV - The app platform is Android TV.; APP_PLATFORM_GENERIC_CTV - The app platform is a CTV platform that is not explicitly listed elsewhere.; APP_PLATFORM_LG_TV - The app platform is LG TV.; APP_PLATFORM_VIZIO_TV - The app platform is VIZIO TV.; APP_PLATFORM_VIDAA - The app platform is Vidaa. |
| negative | boolean | Indicates if this option is being negatively targeted. |
| appId | string | Required. The ID of the app. Android's Play store app uses bundle ID, for example `com.google.android.gm`. Apple's App store app ID uses 9 digit string, for example `422689480`. |
| displayName | string | Output only. The display name of the app. |

### `AppCategoryAssignedTargetingOptionDetails`

Details for assigned app category targeting option. This will be populated in the app_category_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_APP_CATEGORY`.

| Field | Type | Description |
|---|---|---|
| negative | boolean | Indicates if this option is being negatively targeted. |
| displayName | string | Output only. The display name of the app category. |
| targetingOptionId | string | Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_APP_CATEGORY`. |

### `AudienceGroupAssignedTargetingOptionDetails`

Assigned audience group targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUDIENCE_GROUP`. The relation between each group is UNION, except for excluded_first_and_third_party_audience_group and excluded_google_audience_group, of which COMPLEMENT is used as an INTERSECTION with other groups.

| Field | Type | Description |
|---|---|---|
| includedCustomListGroup | `CustomListGroup` | Optional. The custom list ids of the included custom list group. Contains custom list ids only. |
| includedFirstPartyAndPartnerAudienceGroups | array<`FirstPartyAndPartnerAudienceGroup`> | Optional. The first party and partner audience ids and recencies of included first party and partner audience groups. Each first party and partner audience group contains first party and partner audience ids only. The relation between each first party and partner audience group is INTERSECTION, and the result is UNION'ed with other audience groups. Repeated groups with the same settings will be ignored. |
| includedGoogleAudienceGroup | `GoogleAudienceGroup` | Optional. The Google audience ids of the included Google audience group. Contains Google audience ids only. |
| excludedFirstPartyAndPartnerAudienceGroup | `FirstPartyAndPartnerAudienceGroup` | Optional. The first party and partner audience ids and recencies of the excluded first party and partner audience group. Used for negative targeting. The COMPLEMENT of the UNION of this group and other excluded audience groups is used as an INTERSECTION to any positive audience targeting. All items are logically ‘OR’ of each other. |
| excludedGoogleAudienceGroup | `GoogleAudienceGroup` | Optional. The Google audience ids of the excluded Google audience group. Used for negative targeting. The COMPLEMENT of the UNION of this group and other excluded audience groups is used as an INTERSECTION to any positive audience targeting. Only contains Affinity, In-market and Installed-apps type Google audiences. All items are logically ‘OR’ of each other. |
| includedCombinedAudienceGroup | `CombinedAudienceGroup` | Optional. The combined audience ids of the included combined audience group. Contains combined audience ids only. |

### `AudioContentTypeAssignedTargetingOptionDetails`

Details for audio content type assigned targeting option. This will be populated in the audio_content_type_details field when targeting_type is `TARGETING_TYPE_AUDIO_CONTENT_TYPE`. Explicitly targeting all options is not supported. Remove all audio content type targeting options to achieve this effect.

| Field | Type | Description |
|---|---|---|
| audioContentType | string enum(AUDIO_CONTENT_TYPE_UNSPECIFIED, AUDIO_CONTENT_TYPE_UNKNOWN, AUDIO_CONTENT_TYPE_MUSIC, AUDIO_CONTENT_TYPE_BROADCAST, AUDIO_CONTENT_TYPE_PODCAST, AUDIO_CONTENT_TYPE_CATCH_UP_RADIO, AUDIO_CONTENT_TYPE_WEB_RADIO, AUDIO_CONTENT_TYPE_VIDEO_GAME, AUDIO_CONTENT_TYPE_TEXT_TO_SPEECH) | Required. The audio content type. Values: AUDIO_CONTENT_TYPE_UNSPECIFIED - Audio content type is not specified in this version. This enum is a place holder for a default value and does not represent a real content stream type.; AUDIO_CONTENT_TYPE_UNKNOWN - The audio content type is unknown.; AUDIO_CONTENT_TYPE_MUSIC - The audio content type is music.; AUDIO_CONTENT_TYPE_BROADCAST - The audio content type is broadcast.; AUDIO_CONTENT_TYPE_PODCAST - The audio content type is podcast.; AUDIO_CONTENT_TYPE_CATCH_UP_RADIO - The audio content type is catch-up radio.; AUDIO_CONTENT_TYPE_WEB_RADIO - The audio content type is web radio.; AUDIO_CONTENT_TYPE_VIDEO_GAME - The audio content type is video game.; AUDIO_CONTENT_TYPE_TEXT_TO_SPEECH - The audio content type is text-to-speech. |

### `AuthorizedSellerStatusAssignedTargetingOptionDetails`

Represents an assigned authorized seller status. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`. If a resource does not have an `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` assigned targeting option, it is using the "Authorized Direct Sellers and Resellers" option.

| Field | Type | Description |
|---|---|---|
| authorizedSellerStatus | string enum(AUTHORIZED_SELLER_STATUS_UNSPECIFIED, AUTHORIZED_SELLER_STATUS_AUTHORIZED_DIRECT_SELLERS_ONLY, AUTHORIZED_SELLER_STATUS_AUTHORIZED_AND_NON_PARTICIPATING_PUBLISHERS) | Output only. The authorized seller status to target. Values: AUTHORIZED_SELLER_STATUS_UNSPECIFIED - Default value when authorized seller status is not specified in this version. This enum is a placeholder for the default value, or "Authorized Direct Sellers and Resellers" in the UI.; AUTHORIZED_SELLER_STATUS_AUTHORIZED_DIRECT_SELLERS_ONLY - Only authorized sellers that directly own the inventory being monetized, as indicated by a DIRECT declaration in the ads.txt file. This value is equivalent to "Authorized Direct Sellers" in the UI.; AUTHORIZED_SELLER_STATUS_AUTHORIZED_AND_NON_PARTICIPATING_PUBLISHERS - All authorized sellers, including publishers that have not posted an ads.txt file. Display & Video 360 automatically disallows unauthorized sellers. This value is equivalent to "Authorized and Non-Participating Publishers" in the UI. |
| targetingOptionId | string | Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`. |

### `BrowserAssignedTargetingOptionDetails`

Details for assigned browser targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BROWSER`.

| Field | Type | Description |
|---|---|---|
| displayName | string | Output only. The display name of the browser. |
| targetingOptionId | string | Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_BROWSER`. |
| negative | boolean | Indicates if this option is being negatively targeted. All assigned browser targeting options on the same resource must have the same value for this field. |

### `BusinessChainAssignedTargetingOptionDetails`

Details for assigned Business chain targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.

| Field | Type | Description |
|---|---|---|
| proximityRadiusAmount | number (double) | Required. The radius of the area around the business chain that will be targeted. The units of the radius are specified by proximity_radius_unit. Must be 1 to 800 if unit is `DISTANCE_UNIT_KILOMETERS` and 1 to 500 if unit is `DISTANCE_UNIT_MILES`. The minimum increment for both cases is 0.1. Inputs will be rounded to the nearest acceptable value if it is too granular, e.g. 15.57 will become 15.6. |
| proximityRadiusUnit | string enum(DISTANCE_UNIT_UNSPECIFIED, DISTANCE_UNIT_MILES, DISTANCE_UNIT_KILOMETERS) | Required. The unit of distance by which the targeting radius is measured. Values: DISTANCE_UNIT_UNSPECIFIED - Type value is not specified or is unknown in this version.; DISTANCE_UNIT_MILES - Miles.; DISTANCE_UNIT_KILOMETERS - Kilometers. |
| displayName | string | Output only. The display name of a business chain, e.g. "KFC", "Chase Bank". |
| targetingOptionId | string | Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_BUSINESS_CHAIN`. Accepted business chain targeting option IDs can be retrieved using SearchTargetingOptions. |

### `CarrierAndIspAssignedTargetingOptionDetails`

Details for assigned carrier and ISP targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`.

| Field | Type | Description |
|---|---|---|
| displayName | string | Output only. The display name of the carrier or ISP. |
| negative | boolean | Indicates if this option is being negatively targeted. All assigned carrier and ISP targeting options on the same resource must have the same value for this field. |
| targetingOptionId | string | Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_CARRIER_AND_ISP`. |

### `CategoryAssignedTargetingOptionDetails`

Assigned category targeting option details. This will be populated in the category_details field when targeting_type is `TARGETING_TYPE_CATEGORY`.

| Field | Type | Description |
|---|---|---|
| negative | boolean | Indicates if this option is being negatively targeted. |
| displayName | string | Output only. The display name of the category. |
| targetingOptionId | string | Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_CATEGORY`. |
| exclusionStatus | string enum(CATEGORY_EXCLUSION_STATUS_UNSPECIFIED, CATEGORY_EXCLUSION_STATUS_ALLOWED, CATEGORY_EXCLUSION_STATUS_DEPRECATED, CATEGORY_EXCLUSION_STATUS_NOT_ALLOWED) | Output only. The exclusion status of the category. Values: CATEGORY_EXCLUSION_STATUS_UNSPECIFIED - The exclusion status is unspecified.; CATEGORY_EXCLUSION_STATUS_ALLOWED - The category can be excluded.; CATEGORY_EXCLUSION_STATUS_DEPRECATED - The category is deprecated for exclusion and will be disallowed in the future.; CATEGORY_EXCLUSION_STATUS_NOT_ALLOWED - The category cannot be excluded. |

### `ChannelAssignedTargetingOptionDetails`

Details for assigned channel targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CHANNEL`.

| Field | Type | Description |
|---|---|---|
| channelId | string (int64) | Required. ID of the channel. Should refer to the channel ID field on a [Partner-owned channel](partners.channels#Channel.FIELDS.channel_id) or [advertiser-owned channel](advertisers.channels#Channel.FIELDS.channel_id) resource. |
| negative | boolean | Indicates if this option is being negatively targeted. For advertiser level assigned targeting option, this field must be true. |

### `ContentDurationAssignedTargetingOptionDetails`

Details for content duration assigned targeting option. This will be populated in the content_duration_details field when targeting_type is `TARGETING_TYPE_CONTENT_DURATION`. Explicitly targeting all options is not supported. Remove all content duration targeting options to achieve this effect.

| Field | Type | Description |
|---|---|---|
| targetingOptionId | string | Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_CONTENT_DURATION`. |
| contentDuration | string enum(CONTENT_DURATION_UNSPECIFIED, CONTENT_DURATION_UNKNOWN, CONTENT_DURATION_0_TO_1_MIN, CONTENT_DURATION_1_TO_5_MIN, CONTENT_DURATION_5_TO_15_MIN, CONTENT_DURATION_15_TO_30_MIN, CONTENT_DURATION_30_TO_60_MIN, CONTENT_DURATION_OVER_60_MIN) | Output only. The content duration. Values: CONTENT_DURATION_UNSPECIFIED - Content duration is not specified in this version. This enum is a place holder for a default value and does not represent a real content duration.; CONTENT_DURATION_UNKNOWN - The content duration is unknown.; CONTENT_DURATION_0_TO_1_MIN - Content is 0-1 minute long.; CONTENT_DURATION_1_TO_5_MIN - Content is 1-5 minutes long.; CONTENT_DURATION_5_TO_15_MIN - Content is 5-15 minutes long.; CONTENT_DURATION_15_TO_30_MIN - Content is 15-30 minutes long.; CONTENT_DURATION_30_TO_60_MIN - Content is 30-60 minutes long.; CONTENT_DURATION_OVER_60_MIN - Content is over 60 minutes long. |

### `ContentGenreAssignedTargetingOptionDetails`

Details for content genre assigned targeting option. This will be populated in the content_genre_details field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`. Explicitly targeting all options is not supported. Remove all content genre targeting options to achieve this effect.

| Field | Type | Description |
|---|---|---|
| displayName | string | Output only. The display name of the content genre. |
| negative | boolean | Indicates if this option is being negatively targeted. |
| targetingOptionId | string | Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`. |

### `ContentInstreamPositionAssignedTargetingOptionDetails`

Assigned content instream position targeting option details. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`.

| Field | Type | Description |
|---|---|---|
| contentInstreamPosition | string enum(CONTENT_INSTREAM_POSITION_UNSPECIFIED, CONTENT_INSTREAM_POSITION_PRE_ROLL, CONTENT_INSTREAM_POSITION_MID_ROLL, CONTENT_INSTREAM_POSITION_POST_ROLL, CONTENT_INSTREAM_POSITION_UNKNOWN) | Required. The content instream position for video or audio ads. Values: CONTENT_INSTREAM_POSITION_UNSPECIFIED - Content instream position is not specified in this version. This enum is a place holder for a default value and does not represent a real in stream ad position.; CONTENT_INSTREAM_POSITION_PRE_ROLL - Ads that play before streaming content.; CONTENT_INSTREAM_POSITION_MID_ROLL - Ads that play between the beginning and end of streaming content.; CONTENT_INSTREAM_POSITION_POST_ROLL - Ads that play at the end of streaming content.; CONTENT_INSTREAM_POSITION_UNKNOWN - Ads instream position is unknown. |
| adType | string enum(AD_TYPE_UNSPECIFIED, AD_TYPE_DISPLAY, AD_TYPE_VIDEO, AD_TYPE_AUDIO) | Output only. The ad type to target. Only applicable to insertion order targeting and new line items supporting the specified ad type will inherit this targeting option by default. Possible values are: * `AD_TYPE_VIDEO`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_VIDEO_DEFAULT`. * `AD_TYPE_AUDIO`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_AUDIO_DEFAULT`. Values: AD_TYPE_UNSPECIFIED - Ad type is not specified or is unknown in this version.; AD_TYPE_DISPLAY - Display creatives, e.g. image and HTML5.; AD_TYPE_VIDEO - Video creatives, e.g. video ads that play during streaming content in video players.; AD_TYPE_AUDIO - Audio creatives, e.g. audio ads that play during audio content. |

### `ContentOutstreamPositionAssignedTargetingOptionDetails`

Assigned content outstream position targeting option details. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`.

| Field | Type | Description |
|---|---|---|
| contentOutstreamPosition | string enum(CONTENT_OUTSTREAM_POSITION_UNSPECIFIED, CONTENT_OUTSTREAM_POSITION_UNKNOWN, CONTENT_OUTSTREAM_POSITION_IN_ARTICLE, CONTENT_OUTSTREAM_POSITION_IN_BANNER, CONTENT_OUTSTREAM_POSITION_IN_FEED, CONTENT_OUTSTREAM_POSITION_INTERSTITIAL) | Required. The content outstream position. Values: CONTENT_OUTSTREAM_POSITION_UNSPECIFIED - Content outstream position is not specified in this version. This enum is a place holder for a default value and does not represent a real content outstream position.; CONTENT_OUTSTREAM_POSITION_UNKNOWN - The ad position is unknown in the content outstream.; CONTENT_OUTSTREAM_POSITION_IN_ARTICLE - Ads that appear between the paragraphs of your pages.; CONTENT_OUTSTREAM_POSITION_IN_BANNER - Ads that display on the top and the sides of a page.; CONTENT_OUTSTREAM_POSITION_IN_FEED - Ads that appear in a scrollable stream of content. A feed is typically editorial (e.g. a list of articles or news) or listings (e.g. a list of products or services).; CONTENT_OUTSTREAM_POSITION_INTERSTITIAL - Ads shown before or between content loads. |
| adType | string enum(AD_TYPE_UNSPECIFIED, AD_TYPE_DISPLAY, AD_TYPE_VIDEO, AD_TYPE_AUDIO) | Output only. The ad type to target. Only applicable to insertion order targeting and new line items supporting the specified ad type will inherit this targeting option by default. Possible values are: * `AD_TYPE_DISPLAY`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_DISPLAY_DEFAULT`. * `AD_TYPE_VIDEO`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_VIDEO_DEFAULT`. Values: AD_TYPE_UNSPECIFIED - Ad type is not specified or is unknown in this version.; AD_TYPE_DISPLAY - Display creatives, e.g. image and HTML5.; AD_TYPE_VIDEO - Video creatives, e.g. video ads that play during streaming content in video players.; AD_TYPE_AUDIO - Audio creatives, e.g. audio ads that play during audio content. |

### `ContentStreamTypeAssignedTargetingOptionDetails`

Details for content stream type assigned targeting option. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`. Explicitly targeting all options is not supported. Remove all content stream type targeting options to achieve this effect.

| Field | Type | Description |
|---|---|---|
| contentStreamType | string enum(CONTENT_STREAM_TYPE_UNSPECIFIED, CONTENT_LIVE_STREAM, CONTENT_ON_DEMAND) | Output only. The content stream type. Values: CONTENT_STREAM_TYPE_UNSPECIFIED - Content stream type is not specified in this version. This enum is a place holder for a default value and does not represent a real content stream type.; CONTENT_LIVE_STREAM - The content is being live-streamed.; CONTENT_ON_DEMAND - The content is viewed on-demand. |
| targetingOptionId | string | Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`. |

### `ContentThemeAssignedTargetingOptionDetails`

Targeting details for content theme. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CONTENT_THEME_EXCLUSION`.

| Field | Type | Description |
|---|---|---|
| excludedTargetingOptionId | string | Required. ID of the content theme to be EXCLUDED. |
| contentTheme | string enum(CONTENT_THEME_UNSPECIFIED, CONTENT_THEME_FIGHTING_VIDEO_GAMES, CONTENT_THEME_MATURE_GAMES, CONTENT_THEME_NOT_YET_DETERMINED_HEALTH_SOURCES, CONTENT_THEME_NOT_YET_DETERMINED_NEWS_SOURCES, CONTENT_THEME_POLITICS, CONTENT_THEME_RECENT_NEWS, CONTENT_THEME_RELIGION, CONTENT_THEME_UNPLEASANT_HEALTH_CONTENT, CONTENT_THEME_UNPLEASANT_NEWS) | Output only. An enum for the DV360 content theme classifier. Values: CONTENT_THEME_UNSPECIFIED - Content theme is not specified or is unknown in this version.; CONTENT_THEME_FIGHTING_VIDEO_GAMES - Fighting video games.; CONTENT_THEME_MATURE_GAMES - Mature games.; CONTENT_THEME_NOT_YET_DETERMINED_HEALTH_SOURCES - Not yet determined health sources.; CONTENT_THEME_NOT_YET_DETERMINED_NEWS_SOURCES - Not yet determined news sources.; CONTENT_THEME_POLITICS - Politics.; CONTENT_THEME_RECENT_NEWS - Recent news.; CONTENT_THEME_RELIGION - Religion.; CONTENT_THEME_UNPLEASANT_HEALTH_CONTENT - Unpleasant health content.; CONTENT_THEME_UNPLEASANT_NEWS - Unpleasant news. |
| excludedContentTheme | string enum(CONTENT_THEME_UNSPECIFIED, CONTENT_THEME_FIGHTING_VIDEO_GAMES, CONTENT_THEME_MATURE_GAMES, CONTENT_THEME_NOT_YET_DETERMINED_HEALTH_SOURCES, CONTENT_THEME_NOT_YET_DETERMINED_NEWS_SOURCES, CONTENT_THEME_POLITICS, CONTENT_THEME_RECENT_NEWS, CONTENT_THEME_RELIGION, CONTENT_THEME_UNPLEASANT_HEALTH_CONTENT, CONTENT_THEME_UNPLEASANT_NEWS) | Required. An enum for the DV360 content theme classified to be EXCLUDED. Values: CONTENT_THEME_UNSPECIFIED - Content theme is not specified or is unknown in this version.; CONTENT_THEME_FIGHTING_VIDEO_GAMES - Fighting video games.; CONTENT_THEME_MATURE_GAMES - Mature games.; CONTENT_THEME_NOT_YET_DETERMINED_HEALTH_SOURCES - Not yet determined health sources.; CONTENT_THEME_NOT_YET_DETERMINED_NEWS_SOURCES - Not yet determined news sources.; CONTENT_THEME_POLITICS - Politics.; CONTENT_THEME_RECENT_NEWS - Recent news.; CONTENT_THEME_RELIGION - Religion.; CONTENT_THEME_UNPLEASANT_HEALTH_CONTENT - Unpleasant health content.; CONTENT_THEME_UNPLEASANT_NEWS - Unpleasant news. |

### `DayAndTimeAssignedTargetingOptionDetails`

Representation of a segment of time defined on a specific day of the week and with a start and end time. The time represented by `start_hour` must be before the time represented by `end_hour`.

| Field | Type | Description |
|---|---|---|
| timeZoneResolution | string enum(TIME_ZONE_RESOLUTION_UNSPECIFIED, TIME_ZONE_RESOLUTION_END_USER, TIME_ZONE_RESOLUTION_ADVERTISER) | Required. The mechanism used to determine which timezone to use for this day and time targeting setting. For Demand Gen line items, this field is always `TIME_ZONE_RESOLUTION_ADVERTISER`. Values: TIME_ZONE_RESOLUTION_UNSPECIFIED - Time zone resolution is either unspecific or unknown.; TIME_ZONE_RESOLUTION_END_USER - Times are resolved in the time zone of the user that saw the ad.; TIME_ZONE_RESOLUTION_ADVERTISER - Times are resolved in the time zone of the advertiser that served the ad. |
| startHour | integer (int32) | Required. The start hour for day and time targeting. Must be between 0 (start of day) and 23 (1 hour before end of day). |
| dayOfWeek | string enum(DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY) | Required. The day of the week for this day and time targeting setting. Values: DAY_OF_WEEK_UNSPECIFIED - The day of the week is unspecified.; MONDAY - Monday; TUESDAY - Tuesday; WEDNESDAY - Wednesday; THURSDAY - Thursday; FRIDAY - Friday; SATURDAY - Saturday; SUNDAY - Sunday |
| endHour | integer (int32) | Required. The end hour for day and time targeting. Must be between 1 (1 hour after start of day) and 24 (end of day). |

### `DeviceMakeModelAssignedTargetingOptionDetails`

Assigned device make and model targeting option details. This will be populated in the device_make_model_details field when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`.

| Field | Type | Description |
|---|---|---|
| negative | boolean | Indicates if this option is being negatively targeted. |
| displayName | string | Output only. The display name of the device make and model. |
| targetingOptionId | string | Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`. |

### `DeviceTypeAssignedTargetingOptionDetails`

Targeting details for device type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_TYPE`.

| Field | Type | Description |
|---|---|---|
| youtubeAndPartnersBidMultiplier | number (double) | Output only. Bid multiplier allows you to show your ads more or less frequently based on the device type. It will apply a multiplier on the original bid price. When this field is 0, it indicates this field is not applicable instead of multiplying 0 on the original bid price. For example, if the bid price without multiplier is $10.0 and the multiplier is 1.5 for Tablet, the resulting bid price for Tablet will be $15.0. Only applicable to YouTube and Partners line items. |
| deviceType | string enum(DEVICE_TYPE_UNSPECIFIED, DEVICE_TYPE_COMPUTER, DEVICE_TYPE_CONNECTED_TV, DEVICE_TYPE_SMART_PHONE, DEVICE_TYPE_TABLET, DEVICE_TYPE_CONNECTED_DEVICE) | Required. The display name of the device type. Values: DEVICE_TYPE_UNSPECIFIED - Default value when device type is not specified in this version. This enum is a placeholder for default value and does not represent a real device type option.; DEVICE_TYPE_COMPUTER - Computer.; DEVICE_TYPE_CONNECTED_TV - Connected TV.; DEVICE_TYPE_SMART_PHONE - Smart phone.; DEVICE_TYPE_TABLET - Tablet.; DEVICE_TYPE_CONNECTED_DEVICE - Connected device. |

### `DigitalContentLabelAssignedTargetingOptionDetails`

Targeting details for digital content label. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`.

| Field | Type | Description |
|---|---|---|
| excludedContentRatingTier | string enum(CONTENT_RATING_TIER_UNSPECIFIED, CONTENT_RATING_TIER_UNRATED, CONTENT_RATING_TIER_GENERAL, CONTENT_RATING_TIER_PARENTAL_GUIDANCE, CONTENT_RATING_TIER_TEENS, CONTENT_RATING_TIER_MATURE, CONTENT_RATING_TIER_FAMILIES) | Required. The display name of the digital content label rating tier to be EXCLUDED. This field only accepts the value `CONTENT_RATING_TIER_UNRATED`. Values: CONTENT_RATING_TIER_UNSPECIFIED - Content label is not specified in this version. This enum is a place holder for a default value and does not represent a real content rating.; CONTENT_RATING_TIER_UNRATED - Content that has not been labeled.; CONTENT_RATING_TIER_GENERAL - Deprecated: This content rating tier is no longer supported. Content suitable for general audiences.; CONTENT_RATING_TIER_PARENTAL_GUIDANCE - Deprecated: This content rating tier is no longer supported. Content suitable for most audiences with parental guidance.; CONTENT_RATING_TIER_TEENS - Deprecated: This content rating tier is no longer supported. Content suitable for teen and older audiences.; CONTENT_RATING_TIER_MATURE - Deprecated: This content rating tier is no longer supported. Content suitable only for mature audiences.; CONTENT_RATING_TIER_FAMILIES - Deprecated: This content rating tier is no longer supported. Content suitable for family audiences. It is a subset of CONTENT_RATING_TIER_GENERAL. Only applicable to YouTube and Partners line items. |

### `EnvironmentAssignedTargetingOptionDetails`

Assigned environment targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_ENVIRONMENT`.

| Field | Type | Description |
|---|---|---|
| environment | string enum(ENVIRONMENT_UNSPECIFIED, ENVIRONMENT_WEB_OPTIMIZED, ENVIRONMENT_WEB_NOT_OPTIMIZED, ENVIRONMENT_APP) | Required. The serving environment. Values: ENVIRONMENT_UNSPECIFIED - Default value when environment is not specified in this version. This enum is a placeholder for default value and does not represent a real environment option.; ENVIRONMENT_WEB_OPTIMIZED - Target inventory displayed in browsers. This includes inventory that was designed for the device it was viewed on, such as mobile websites viewed on a mobile device. ENVIRONMENT_WEB_NOT_OPTIMIZED, if targeted, should be deleted prior to the deletion of this targeting option.; ENVIRONMENT_WEB_NOT_OPTIMIZED - Target inventory displayed in browsers. This includes inventory that was not designed for the device but viewed on it, such as websites optimized for desktop but viewed on a mobile device. ENVIRONMENT_WEB_OPTIMIZED should be targeted prior to the addition of this targeting option.; ENVIRONMENT_APP - Target inventory displayed in apps. |

### `ExchangeAssignedTargetingOptionDetails`

Details for assigned exchange targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_EXCHANGE`.

| Field | Type | Description |
|---|---|---|
| exchange | string enum(EXCHANGE_UNSPECIFIED, EXCHANGE_GOOGLE_AD_MANAGER, EXCHANGE_APPNEXUS, EXCHANGE_BRIGHTROLL, EXCHANGE_ADFORM, EXCHANGE_ADMETA, EXCHANGE_ADMIXER, EXCHANGE_ADSMOGO, EXCHANGE_ADSWIZZ, EXCHANGE_BIDSWITCH, EXCHANGE_BRIGHTROLL_DISPLAY, EXCHANGE_CADREON, EXCHANGE_DAILYMOTION, EXCHANGE_FIVE, EXCHANGE_FLUCT, EXCHANGE_FREEWHEEL, EXCHANGE_GENIEE, EXCHANGE_GUMGUM, EXCHANGE_IMOBILE, EXCHANGE_IBILLBOARD, EXCHANGE_IMPROVE_DIGITAL, EXCHANGE_INDEX, EXCHANGE_KARGO, EXCHANGE_MICROAD, EXCHANGE_MOPUB, EXCHANGE_NEND, EXCHANGE_ONE_BY_AOL_DISPLAY, EXCHANGE_ONE_BY_AOL_MOBILE, EXCHANGE_ONE_BY_AOL_VIDEO, EXCHANGE_OOYALA, EXCHANGE_OPENX, EXCHANGE_PERMODO, EXCHANGE_PLATFORMONE, EXCHANGE_PLATFORMID, EXCHANGE_PUBMATIC, EXCHANGE_PULSEPOINT, EXCHANGE_REVENUEMAX, EXCHANGE_RUBICON, EXCHANGE_SMARTCLIP, EXCHANGE_SMARTRTB, EXCHANGE_SMARTSTREAMTV, EXCHANGE_SOVRN, EXCHANGE_SPOTXCHANGE, EXCHANGE_STROER, EXCHANGE_TEADSTV, EXCHANGE_TELARIA, EXCHANGE_TVN, EXCHANGE_UNITED, EXCHANGE_YIELDLAB, EXCHANGE_YIELDMO, EXCHANGE_UNRULYX, EXCHANGE_OPEN8, EXCHANGE_TRITON, EXCHANGE_TRIPLELIFT, EXCHANGE_TABOOLA, EXCHANGE_INMOBI, EXCHANGE_SMAATO, EXCHANGE_AJA, EXCHANGE_SUPERSHIP, EXCHANGE_NEXSTAR_DIGITAL, EXCHANGE_WAZE, EXCHANGE_SOUNDCAST, EXCHANGE_SHARETHROUGH, EXCHANGE_FYBER, EXCHANGE_RED_FOR_PUBLISHERS, EXCHANGE_MEDIANET, EXCHANGE_TAPJOY, EXCHANGE_VISTAR, EXCHANGE_DAX, EXCHANGE_JCD, EXCHANGE_PLACE_EXCHANGE, EXCHANGE_APPLOVIN, EXCHANGE_CONNATIX, EXCHANGE_RESET_DIGITAL, EXCHANGE_HIVESTACK, EXCHANGE_DRAX, EXCHANGE_APPLOVIN_GBID, EXCHANGE_FYBER_GBID, EXCHANGE_UNITY_GBID, EXCHANGE_CHARTBOOST_GBID, EXCHANGE_ADMOST_GBID, EXCHANGE_TOPON_GBID, EXCHANGE_NETFLIX, EXCHANGE_CORE, EXCHANGE_COMMERCE_GRID, EXCHANGE_SPOTIFY, EXCHANGE_TUBI, EXCHANGE_SNAP, EXCHANGE_CADENT, EXCHANGE_EXTE) | Required. The enum value for the exchange. Values: EXCHANGE_UNSPECIFIED - Exchange is not specified or is unknown in this version.; EXCHANGE_GOOGLE_AD_MANAGER - Google Ad Manager.; EXCHANGE_APPNEXUS - AppNexus.; EXCHANGE_BRIGHTROLL - BrightRoll Exchange for Video from Yahoo!.; EXCHANGE_ADFORM - Adform.; EXCHANGE_ADMETA - Admeta.; EXCHANGE_ADMIXER - Admixer.; EXCHANGE_ADSMOGO - AdsMogo.; EXCHANGE_ADSWIZZ - AdsWizz.; EXCHANGE_BIDSWITCH - BidSwitch.; EXCHANGE_BRIGHTROLL_DISPLAY - BrightRoll Exchange for Display from Yahoo!.; EXCHANGE_CADREON - Cadreon.; EXCHANGE_DAILYMOTION - Dailymotion.; EXCHANGE_FIVE - Five.; EXCHANGE_FLUCT - Fluct.; EXCHANGE_FREEWHEEL - FreeWheel SSP.; EXCHANGE_GENIEE - Geniee.; EXCHANGE_GUMGUM - GumGum.; EXCHANGE_IMOBILE - i-mobile.; EXCHANGE_IBILLBOARD - iBILLBOARD.; EXCHANGE_IMPROVE_DIGITAL - Improve Digital.; EXCHANGE_INDEX - Index Exchange.; EXCHANGE_KARGO - Kargo.; EXCHANGE_MICROAD - MicroAd.; EXCHANGE_MOPUB - MoPub.; EXCHANGE_NEND - Nend.; EXCHANGE_ONE_BY_AOL_DISPLAY - ONE by AOL: Display Market Place.; EXCHANGE_ONE_BY_AOL_MOBILE - ONE by AOL: Mobile.; EXCHANGE_ONE_BY_AOL_VIDEO - ONE by AOL: Video.; EXCHANGE_OOYALA - Ooyala.; EXCHANGE_OPENX - OpenX.; EXCHANGE_PERMODO - Permodo.; EXCHANGE_PLATFORMONE - Platform One.; EXCHANGE_PLATFORMID - PlatformId.; EXCHANGE_PUBMATIC - PubMatic.; EXCHANGE_PULSEPOINT - PulsePoint.; EXCHANGE_REVENUEMAX - RevenueMax.; EXCHANGE_RUBICON - Rubicon.; EXCHANGE_SMARTCLIP - SmartClip.; EXCHANGE_SMARTRTB - SmartRTB+.; EXCHANGE_SMARTSTREAMTV - SmartstreamTv.; EXCHANGE_SOVRN - Sovrn.; EXCHANGE_SPOTXCHANGE - SpotXchange.; EXCHANGE_STROER - Ströer SSP.; EXCHANGE_TEADSTV - TeadsTv.; EXCHANGE_TELARIA - Telaria.; EXCHANGE_TVN - TVN.; EXCHANGE_UNITED - United.; EXCHANGE_YIELDLAB - Yieldlab.; EXCHANGE_YIELDMO - Yieldmo.; EXCHANGE_UNRULYX - UnrulyX.; EXCHANGE_OPEN8 - Open8.; EXCHANGE_TRITON - Triton.; EXCHANGE_TRIPLELIFT - TripleLift.; EXCHANGE_TABOOLA - Taboola.; EXCHANGE_INMOBI - InMobi.; EXCHANGE_SMAATO - Smaato.; EXCHANGE_AJA - Aja.; EXCHANGE_SUPERSHIP - Supership.; EXCHANGE_NEXSTAR_DIGITAL - Nexstar Digital.; EXCHANGE_WAZE - Waze.; EXCHANGE_SOUNDCAST - SoundCast.; EXCHANGE_SHARETHROUGH - Sharethrough.; EXCHANGE_FYBER - Fyber.; EXCHANGE_RED_FOR_PUBLISHERS - Red For Publishers.; EXCHANGE_MEDIANET - Media.net.; EXCHANGE_TAPJOY - Tapjoy.; EXCHANGE_VISTAR - Vistar.; EXCHANGE_DAX - DAX.; EXCHANGE_JCD - JCD.; EXCHANGE_PLACE_EXCHANGE - Place Exchange.; EXCHANGE_APPLOVIN - AppLovin.; EXCHANGE_CONNATIX - Connatix.; EXCHANGE_RESET_DIGITAL - Reset Digital.; EXCHANGE_HIVESTACK - Hivestack.; EXCHANGE_DRAX - Drax.; EXCHANGE_APPLOVIN_GBID - AppLovin MAX.; EXCHANGE_FYBER_GBID - DT Fairbid.; EXCHANGE_UNITY_GBID - Unity LevelPlay.; EXCHANGE_CHARTBOOST_GBID - Chartboost Mediation.; EXCHANGE_ADMOST_GBID - AdMost.; EXCHANGE_TOPON_GBID - TopOn.; EXCHANGE_NETFLIX - Netflix.; EXCHANGE_CORE - Core.; EXCHANGE_COMMERCE_GRID - Commerce Grid.; EXCHANGE_SPOTIFY - Spotify.; EXCHANGE_TUBI - Tubi.; EXCHANGE_SNAP - Snap.; EXCHANGE_CADENT - Cadent.; EXCHANGE_EXTE - Exte. |

### `GenderAssignedTargetingOptionDetails`

Details for assigned gender targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GENDER`.

| Field | Type | Description |
|---|---|---|
| gender | string enum(GENDER_UNSPECIFIED, GENDER_MALE, GENDER_FEMALE, GENDER_UNKNOWN) | Required. The gender of the audience. Values: GENDER_UNSPECIFIED - Default value when gender is not specified in this version. This enum is a place holder for default value and does not represent a real gender option.; GENDER_MALE - The audience gender is male.; GENDER_FEMALE - The audience gender is female.; GENDER_UNKNOWN - The audience gender is unknown. |

### `GeoRegionAssignedTargetingOptionDetails`

Details for assigned geographic region targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GEO_REGION`.

| Field | Type | Description |
|---|---|---|
| negative | boolean | Indicates if this option is being negatively targeted. |
| geoRegionType | string enum(GEO_REGION_TYPE_UNKNOWN, GEO_REGION_TYPE_OTHER, GEO_REGION_TYPE_COUNTRY, GEO_REGION_TYPE_REGION, GEO_REGION_TYPE_TERRITORY, GEO_REGION_TYPE_PROVINCE, GEO_REGION_TYPE_STATE, GEO_REGION_TYPE_PREFECTURE, GEO_REGION_TYPE_GOVERNORATE, GEO_REGION_TYPE_CANTON, GEO_REGION_TYPE_UNION_TERRITORY, GEO_REGION_TYPE_AUTONOMOUS_COMMUNITY, GEO_REGION_TYPE_DMA_REGION, GEO_REGION_TYPE_METRO, GEO_REGION_TYPE_CONGRESSIONAL_DISTRICT, GEO_REGION_TYPE_COUNTY, GEO_REGION_TYPE_MUNICIPALITY, GEO_REGION_TYPE_CITY, GEO_REGION_TYPE_POSTAL_CODE, GEO_REGION_TYPE_DEPARTMENT, GEO_REGION_TYPE_AIRPORT, GEO_REGION_TYPE_TV_REGION, GEO_REGION_TYPE_OKRUG, GEO_REGION_TYPE_BOROUGH, GEO_REGION_TYPE_CITY_REGION, GEO_REGION_TYPE_ARRONDISSEMENT, GEO_REGION_TYPE_NEIGHBORHOOD, GEO_REGION_TYPE_UNIVERSITY, GEO_REGION_TYPE_DISTRICT, GEO_REGION_TYPE_NATIONAL_PARK, GEO_REGION_TYPE_BARRIO, GEO_REGION_TYPE_SUB_WARD, GEO_REGION_TYPE_MUNICIPALITY_DISTRICT, GEO_REGION_TYPE_SUB_DISTRICT, GEO_REGION_TYPE_QUARTER, GEO_REGION_TYPE_DIVISION, GEO_REGION_TYPE_COMMUNE, GEO_REGION_TYPE_COLLOQUIAL_AREA, GEO_REGION_TYPE_POST_TOWN, GEO_REGION_TYPE_WARD) | Output only. The type of geographic region targeting. Values: GEO_REGION_TYPE_UNKNOWN - The geographic region type is unknown.; GEO_REGION_TYPE_OTHER - The geographic region type is other.; GEO_REGION_TYPE_COUNTRY - The geographic region is a country.; GEO_REGION_TYPE_REGION - The geographic region type is region.; GEO_REGION_TYPE_TERRITORY - The geographic region is a territory.; GEO_REGION_TYPE_PROVINCE - The geographic region is a province.; GEO_REGION_TYPE_STATE - The geographic region is a state.; GEO_REGION_TYPE_PREFECTURE - The geographic region is a prefecture.; GEO_REGION_TYPE_GOVERNORATE - The geographic region is a governorate.; GEO_REGION_TYPE_CANTON - The geographic region is a canton.; GEO_REGION_TYPE_UNION_TERRITORY - The geographic region is a union territory.; GEO_REGION_TYPE_AUTONOMOUS_COMMUNITY - The geographic region is an autonomous community.; GEO_REGION_TYPE_DMA_REGION - The geographic region is a designated market area (DMA) region.; GEO_REGION_TYPE_METRO - The geographic region type is metro.; GEO_REGION_TYPE_CONGRESSIONAL_DISTRICT - The geographic region is a congressional district.; GEO_REGION_TYPE_COUNTY - The geographic region is a county.; GEO_REGION_TYPE_MUNICIPALITY - The geographic region is a municipality.; GEO_REGION_TYPE_CITY - The geographic region is a city.; GEO_REGION_TYPE_POSTAL_CODE - The geographic region targeting type is postal code.; GEO_REGION_TYPE_DEPARTMENT - The geographic region targeting type is department.; GEO_REGION_TYPE_AIRPORT - The geographic region is an airport.; GEO_REGION_TYPE_TV_REGION - The geographic region is a TV region.; GEO_REGION_TYPE_OKRUG - The geographic region is an okrug.; GEO_REGION_TYPE_BOROUGH - The geographic region is a borough.; GEO_REGION_TYPE_CITY_REGION - The geographic region is a city region.; GEO_REGION_TYPE_ARRONDISSEMENT - The geographic region is an arrondissement.; GEO_REGION_TYPE_NEIGHBORHOOD - The geographic region is a neighborhood.; GEO_REGION_TYPE_UNIVERSITY - The geographic region is a university.; GEO_REGION_TYPE_DISTRICT - The geographic region is a district.; GEO_REGION_TYPE_NATIONAL_PARK - The geographic region is a national park.; GEO_REGION_TYPE_BARRIO - The geographic region is a barrio.; GEO_REGION_TYPE_SUB_WARD - The geographic region is a sub ward.; GEO_REGION_TYPE_MUNICIPALITY_DISTRICT - The geographic region is a municipality district.; GEO_REGION_TYPE_SUB_DISTRICT - The geographic region is a sub district.; GEO_REGION_TYPE_QUARTER - The geographic region is a quarter.; GEO_REGION_TYPE_DIVISION - The geographic region is a division.; GEO_REGION_TYPE_COMMUNE - The geographic region is a commune.; GEO_REGION_TYPE_COLLOQUIAL_AREA - The geographic region is a colloquial area.; GEO_REGION_TYPE_POST_TOWN - The geographic region is a post town.; GEO_REGION_TYPE_WARD - The geographic region is a ward. |
| targetingOptionId | string | Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_GEO_REGION`. |
| displayName | string | Output only. The display name of the geographic region (e.g., "Ontario, Canada"). |

### `HouseholdIncomeAssignedTargetingOptionDetails`

Details for assigned household income targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_HOUSEHOLD_INCOME`.

| Field | Type | Description |
|---|---|---|
| householdIncome | string enum(HOUSEHOLD_INCOME_UNSPECIFIED, HOUSEHOLD_INCOME_UNKNOWN, HOUSEHOLD_INCOME_LOWER_50_PERCENT, HOUSEHOLD_INCOME_TOP_41_TO_50_PERCENT, HOUSEHOLD_INCOME_TOP_31_TO_40_PERCENT, HOUSEHOLD_INCOME_TOP_21_TO_30_PERCENT, HOUSEHOLD_INCOME_TOP_11_TO_20_PERCENT, HOUSEHOLD_INCOME_TOP_10_PERCENT) | Required. The household income of the audience. Values: HOUSEHOLD_INCOME_UNSPECIFIED - Default value when household income is not specified in this version. This enum is a placeholder for default value and does not represent a real household income option.; HOUSEHOLD_INCOME_UNKNOWN - The household income of the audience is unknown.; HOUSEHOLD_INCOME_LOWER_50_PERCENT - The audience is in the lower 50% of U.S. household incomes.; HOUSEHOLD_INCOME_TOP_41_TO_50_PERCENT - The audience is in the top 41-50% of U.S. household incomes.; HOUSEHOLD_INCOME_TOP_31_TO_40_PERCENT - The audience is in the top 31-40% of U.S. household incomes.; HOUSEHOLD_INCOME_TOP_21_TO_30_PERCENT - The audience is in the top 21-30% of U.S. household incomes.; HOUSEHOLD_INCOME_TOP_11_TO_20_PERCENT - The audience is in the top 11-20% of U.S. household incomes.; HOUSEHOLD_INCOME_TOP_10_PERCENT - The audience is in the top 10% of U.S. household incomes. |

### `InventorySourceAssignedTargetingOptionDetails`

Targeting details for inventory source. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE_DEAL`.

| Field | Type | Description |
|---|---|---|
| inventorySourceId | string (int64) | Required. ID of the inventory source. Should refer to the inventory_source_id field of an InventorySource resource. |

### `InventorySourceGroupAssignedTargetingOptionDetails`

Targeting details for inventory source group. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_INVENTORY_SOURCE_GROUP`.

| Field | Type | Description |
|---|---|---|
| inventorySourceGroupId | string (int64) | Required. ID of the inventory source group. Should refer to the inventory_source_group_id field of an InventorySourceGroup resource. |

### `KeywordAssignedTargetingOptionDetails`

Details for assigned keyword targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_KEYWORD`.

| Field | Type | Description |
|---|---|---|
| negative | boolean | Indicates if this option is being negatively targeted. |
| keyword | string | Required. The keyword, for example `car insurance`. Positive keyword cannot be offensive word. Must be UTF-8 encoded with a maximum size of 255 bytes. Maximum number of characters is 80. Maximum number of words is 10. |
| exemptedPolicyNames | array<string> | Optional. The policy names to exempt the keyword from. When attempting to target a keyword that violates a policy, the error returned will include the name of the relevant policy. Use that name in this field to exempt the targeted keyword from the policy. This field is only applicable for positively-targeted keywords assigned to Demand Gen resources. Retrieval and management of Demand Gen resources is currently in beta. This field is only available to allowlisted users. |

### `LanguageAssignedTargetingOptionDetails`

Details for assigned language targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_LANGUAGE`.

| Field | Type | Description |
|---|---|---|
| negative | boolean | Indicates if this option is being negatively targeted. All assigned language targeting options on the same resource must have the same value for this field. |
| targetingOptionId | string | Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_LANGUAGE`. |
| displayName | string | Output only. The display name of the language (e.g., "French"). |

### `NativeContentPositionAssignedTargetingOptionDetails`

Details for native content position assigned targeting option. This will be populated in the native_content_position_details field when targeting_type is `TARGETING_TYPE_NATIVE_CONTENT_POSITION`. Explicitly targeting all options is not supported. Remove all native content position targeting options to achieve this effect.

| Field | Type | Description |
|---|---|---|
| contentPosition | string enum(NATIVE_CONTENT_POSITION_UNSPECIFIED, NATIVE_CONTENT_POSITION_UNKNOWN, NATIVE_CONTENT_POSITION_IN_ARTICLE, NATIVE_CONTENT_POSITION_IN_FEED, NATIVE_CONTENT_POSITION_PERIPHERAL, NATIVE_CONTENT_POSITION_RECOMMENDATION) | Required. The content position. Values: NATIVE_CONTENT_POSITION_UNSPECIFIED - Native content position is not specified in this version. This enum is a place holder for a default value and does not represent a real native content position.; NATIVE_CONTENT_POSITION_UNKNOWN - The native content position is unknown.; NATIVE_CONTENT_POSITION_IN_ARTICLE - Native content position is in-article, i.e., ads appear between the paragraphs of pages.; NATIVE_CONTENT_POSITION_IN_FEED - Native content position is in-feed, i.e., ads appear in a scrollable stream of content. A feed is typically editorial (e.g. a list of articles or news) or listings (e.g. a list of products or services).; NATIVE_CONTENT_POSITION_PERIPHERAL - Native content position is peripheral, i.e., ads appear outside of core content on pages, such as the right- or left-hand side of the page.; NATIVE_CONTENT_POSITION_RECOMMENDATION - Native content position is recommendation, i.e., ads appear in sections for recommended content. |

### `NegativeKeywordListAssignedTargetingOptionDetails`

Targeting details for negative keyword list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST`.

| Field | Type | Description |
|---|---|---|
| negativeKeywordListId | string (int64) | Required. ID of the negative keyword list. Should refer to the negative_keyword_list_id field of a NegativeKeywordList resource. |

### `OmidAssignedTargetingOptionDetails`

Represents a targetable Open Measurement enabled inventory type. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_OMID`.

| Field | Type | Description |
|---|---|---|
| omid | string enum(OMID_UNSPECIFIED, OMID_FOR_MOBILE_DISPLAY_ADS) | Required. The type of Open Measurement enabled inventory. Values: OMID_UNSPECIFIED - Default value when omid targeting is not specified in this version.; OMID_FOR_MOBILE_DISPLAY_ADS - Open Measurement enabled mobile display inventory. |

### `OnScreenPositionAssignedTargetingOptionDetails`

On screen position targeting option details. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.

| Field | Type | Description |
|---|---|---|
| onScreenPosition | string enum(ON_SCREEN_POSITION_UNSPECIFIED, ON_SCREEN_POSITION_UNKNOWN, ON_SCREEN_POSITION_ABOVE_THE_FOLD, ON_SCREEN_POSITION_BELOW_THE_FOLD) | Output only. The on screen position. Values: ON_SCREEN_POSITION_UNSPECIFIED - On screen position is not specified in this version. This enum is a place holder for a default value and does not represent a real on screen position.; ON_SCREEN_POSITION_UNKNOWN - The ad position is unknown on the screen.; ON_SCREEN_POSITION_ABOVE_THE_FOLD - The ad is located above the fold.; ON_SCREEN_POSITION_BELOW_THE_FOLD - The ad is located below the fold. |
| adType | string enum(AD_TYPE_UNSPECIFIED, AD_TYPE_DISPLAY, AD_TYPE_VIDEO, AD_TYPE_AUDIO) | Output only. The ad type to target. Only applicable to insertion order targeting and new line items supporting the specified ad type will inherit this targeting option by default. Possible values are: * `AD_TYPE_DISPLAY`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_DISPLAY_DEFAULT`. * `AD_TYPE_VIDEO`, the setting will be inherited by new line item when line_item_type is `LINE_ITEM_TYPE_VIDEO_DEFAULT`. Values: AD_TYPE_UNSPECIFIED - Ad type is not specified or is unknown in this version.; AD_TYPE_DISPLAY - Display creatives, e.g. image and HTML5.; AD_TYPE_VIDEO - Video creatives, e.g. video ads that play during streaming content in video players.; AD_TYPE_AUDIO - Audio creatives, e.g. audio ads that play during audio content. |
| targetingOptionId | string | Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`. |

### `OperatingSystemAssignedTargetingOptionDetails`

Assigned operating system targeting option details. This will be populated in the operating_system_details field when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`.

| Field | Type | Description |
|---|---|---|
| displayName | string | Output only. The display name of the operating system. |
| targetingOptionId | string | Required. The targeting option ID populated in targeting_option_id field when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`. |
| negative | boolean | Indicates if this option is being negatively targeted. |

### `ParentalStatusAssignedTargetingOptionDetails`

Details for assigned parental status targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PARENTAL_STATUS`.

| Field | Type | Description |
|---|---|---|
| parentalStatus | string enum(PARENTAL_STATUS_UNSPECIFIED, PARENTAL_STATUS_PARENT, PARENTAL_STATUS_NOT_A_PARENT, PARENTAL_STATUS_UNKNOWN) | Required. The parental status of the audience. Values: PARENTAL_STATUS_UNSPECIFIED - Default value when parental status is not specified in this version. This enum is a place holder for default value and does not represent a real parental status option.; PARENTAL_STATUS_PARENT - The audience is a parent.; PARENTAL_STATUS_NOT_A_PARENT - The audience is not a parent.; PARENTAL_STATUS_UNKNOWN - The parental status of the audience is unknown. |

### `PoiAssignedTargetingOptionDetails`

Details for assigned POI targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_POI`.

| Field | Type | Description |
|---|---|---|
| proximityRadiusUnit | string enum(DISTANCE_UNIT_UNSPECIFIED, DISTANCE_UNIT_MILES, DISTANCE_UNIT_KILOMETERS) | Required. The unit of distance by which the targeting radius is measured. Values: DISTANCE_UNIT_UNSPECIFIED - Type value is not specified or is unknown in this version.; DISTANCE_UNIT_MILES - Miles.; DISTANCE_UNIT_KILOMETERS - Kilometers. |
| displayName | string | Output only. The display name of a POI, e.g. "Times Square", "Space Needle", followed by its full address if available. |
| latitude | number (double) | Output only. Latitude of the POI rounding to 6th decimal place. |
| longitude | number (double) | Output only. Longitude of the POI rounding to 6th decimal place. |
| targetingOptionId | string | Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_POI`. Accepted POI targeting option IDs can be retrieved using `targetingTypes.targetingOptions.search`. If targeting a specific latitude/longitude coordinate removed from an address or POI name, you can generate the necessary targeting option ID by rounding the desired coordinate values to the 6th decimal place, removing the decimals, and concatenating the string values separated by a semicolon. For example, you can target the latitude/longitude pair of 40.7414691, -74.003387 using the targeting option ID "40741469;-74003387". **Upon** **creation, this field value will be updated to append a semicolon and** **alphanumerical hash value if only latitude/longitude coordinates are** **provided.** |
| proximityRadiusAmount | number (double) | Required. The radius of the area around the POI that will be targeted. The units of the radius are specified by proximity_radius_unit. Must be 1 to 800 if unit is `DISTANCE_UNIT_KILOMETERS` and 1 to 500 if unit is `DISTANCE_UNIT_MILES`. |

### `ProximityLocationListAssignedTargetingOptionDetails`

Targeting details for proximity location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PROXIMITY_LOCATION_LIST`.

| Field | Type | Description |
|---|---|---|
| proximityRadiusUnit | string enum(PROXIMITY_RADIUS_UNIT_UNSPECIFIED, PROXIMITY_RADIUS_UNIT_MILES, PROXIMITY_RADIUS_UNIT_KILOMETERS) | Required. Radius distance units. Values: PROXIMITY_RADIUS_UNIT_UNSPECIFIED - Default value when distance units is not specified in this version. This enum is a place holder for default value and does not represent a real distance unit.; PROXIMITY_RADIUS_UNIT_MILES - Radius distance unit in miles.; PROXIMITY_RADIUS_UNIT_KILOMETERS - Radius distance unit in kilometeres |
| proximityLocationListId | string (int64) | Required. ID of the proximity location list. Should refer to the location_list_id field of a LocationList resource whose type is `TARGETING_LOCATION_TYPE_PROXIMITY`. |
| proximityRadius | number (double) | Required. Radius expressed in the distance units set in proximity_radius_unit. This represents the size of the area around a chosen location that will be targeted. Radius should be between 1 and 500 miles or 800 kilometers. |

### `RegionalLocationListAssignedTargetingOptionDetails`

Targeting details for regional location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_REGIONAL_LOCATION_LIST`.

| Field | Type | Description |
|---|---|---|
| negative | boolean | Indicates if this option is being negatively targeted. |
| regionalLocationListId | string (int64) | Required. ID of the regional location list. Should refer to the location_list_id field of a LocationList resource whose type is `TARGETING_LOCATION_TYPE_REGIONAL`. |

### `SensitiveCategoryAssignedTargetingOptionDetails`

Targeting details for sensitive category. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`.

| Field | Type | Description |
|---|---|---|
| excludedSensitiveCategory | string enum(SENSITIVE_CATEGORY_UNSPECIFIED, SENSITIVE_CATEGORY_ADULT, SENSITIVE_CATEGORY_DEROGATORY, SENSITIVE_CATEGORY_DOWNLOADS_SHARING, SENSITIVE_CATEGORY_WEAPONS, SENSITIVE_CATEGORY_GAMBLING, SENSITIVE_CATEGORY_VIOLENCE, SENSITIVE_CATEGORY_SUGGESTIVE, SENSITIVE_CATEGORY_PROFANITY, SENSITIVE_CATEGORY_ALCOHOL, SENSITIVE_CATEGORY_DRUGS, SENSITIVE_CATEGORY_TOBACCO, SENSITIVE_CATEGORY_POLITICS, SENSITIVE_CATEGORY_RELIGION, SENSITIVE_CATEGORY_TRAGEDY, SENSITIVE_CATEGORY_TRANSPORTATION_ACCIDENTS, SENSITIVE_CATEGORY_SENSITIVE_SOCIAL_ISSUES, SENSITIVE_CATEGORY_SHOCKING, SENSITIVE_CATEGORY_EMBEDDED_VIDEO, SENSITIVE_CATEGORY_LIVE_STREAMING_VIDEO) | Required. An enum for the Display & Video 360 Sensitive category content classified to be EXCLUDED. This field only accepts the following values: * `SENSITIVE_CATEGORY_EMBEDDED_VIDEO` * `SENSITIVE_CATEGORY_LIVE_STREAMING_VIDEO` Values: SENSITIVE_CATEGORY_UNSPECIFIED - Serves as a placeholder and doesn't specify a Display & Video 360 sensitive category.; SENSITIVE_CATEGORY_ADULT - Deprecated: This sensitive category is no longer supported. Adult or pornographic text, image, or video content.; SENSITIVE_CATEGORY_DEROGATORY - Deprecated: This sensitive category is no longer supported. Content that may be construed as biased against individuals, groups, or organizations based on criteria such as race, religion, disability, sex, age, veteran status, sexual orientation, gender identity, or political affiliation. May also indicate discussion of such content, for instance, in an academic or journalistic context.; SENSITIVE_CATEGORY_DOWNLOADS_SHARING - Deprecated: This sensitive category is no longer supported. Content related to audio, video, or software downloads.; SENSITIVE_CATEGORY_WEAPONS - Deprecated: This sensitive category is no longer supported. Contains content related to personal weapons, including knives, guns, small firearms, and ammunition. Selecting either "weapons" or "sensitive social issues" will result in selecting both.; SENSITIVE_CATEGORY_GAMBLING - Deprecated: This sensitive category is no longer supported. Contains content related to betting or wagering in a real-world or online setting.; SENSITIVE_CATEGORY_VIOLENCE - Deprecated: This sensitive category is no longer supported. Content which may be considered graphically violent, gory, gruesome, or shocking, such as street fighting videos, accident photos, descriptions of torture, etc.; SENSITIVE_CATEGORY_SUGGESTIVE - Deprecated: This sensitive category is no longer supported. Adult content, as well as suggestive content that's not explicitly pornographic. This category includes all pages categorized as adult.; SENSITIVE_CATEGORY_PROFANITY - Deprecated: This sensitive category is no longer supported. Prominent use of words considered indecent, such as curse words and sexual slang. Pages with only very occasional usage, such as news sites that might include such words in a quotation, are not included.; SENSITIVE_CATEGORY_ALCOHOL - Deprecated: This sensitive category is no longer supported. Contains content related to alcoholic beverages, alcohol brands, recipes, etc.; SENSITIVE_CATEGORY_DRUGS - Deprecated: This sensitive category is no longer supported. Contains content related to the recreational use of legal or illegal drugs, as well as to drug paraphernalia or cultivation.; SENSITIVE_CATEGORY_TOBACCO - Deprecated: This sensitive category is no longer supported. Contains content related to tobacco and tobacco accessories, including lighters, humidors, ashtrays, etc.; SENSITIVE_CATEGORY_POLITICS - Deprecated: This sensitive category is no longer supported. Political news and media, including discussions of social, governmental, and public policy.; SENSITIVE_CATEGORY_RELIGION - Deprecated: This sensitive category is no longer supported. Content related to religious thought or beliefs.; SENSITIVE_CATEGORY_TRAGEDY - Deprecated: This sensitive category is no longer supported. Content related to death, disasters, accidents, war, etc.; SENSITIVE_CATEGORY_TRANSPORTATION_ACCIDENTS - Deprecated: This sensitive category is no longer supported. Content related to motor vehicle, aviation or other transportation accidents.; SENSITIVE_CATEGORY_SENSITIVE_SOCIAL_ISSUES - Deprecated: This sensitive category is no longer supported. Issues that evoke strong, opposing views and spark debate. These include issues that are controversial in most countries and markets (such as abortion), as well as those that are controversial in specific countries and markets (such as immigration reform in the United States).; SENSITIVE_CATEGORY_SHOCKING - Deprecated: This sensitive category is no longer supported. Content which may be considered shocking or disturbing, such as violent news stories, stunts, or toilet humor.; SENSITIVE_CATEGORY_EMBEDDED_VIDEO - YouTube videos embedded on websites outside of YouTube.com.; SENSITIVE_CATEGORY_LIVE_STREAMING_VIDEO - Video of live events streamed over the internet. |

### `SessionPositionAssignedTargetingOptionDetails`

Details for session position assigned targeting option. This will be populated in the session_position_details field when targeting_type is `TARGETING_TYPE_SESSION_POSITION`.

| Field | Type | Description |
|---|---|---|
| sessionPosition | string enum(SESSION_POSITION_UNSPECIFIED, SESSION_POSITION_FIRST_IMPRESSION) | The position where the ad will show in a session. Values: SESSION_POSITION_UNSPECIFIED - This is a placeholder, does not indicate any positions.; SESSION_POSITION_FIRST_IMPRESSION - The first impression of the session. |

### `SubExchangeAssignedTargetingOptionDetails`

Details for assigned sub-exchange targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_SUB_EXCHANGE`.

| Field | Type | Description |
|---|---|---|
| targetingOptionId | string | Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_SUB_EXCHANGE`. |

### `ThirdPartyVerifierAssignedTargetingOptionDetails`

Assigned third party verifier targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_THIRD_PARTY_VERIFIER`.

| Field | Type | Description |
|---|---|---|
| doubleVerify | `DoubleVerify` | Third party brand verifier -- DoubleVerify. |
| integralAdScience | `IntegralAdScience` | Third party brand verifier -- Integral Ad Science. |
| adloox | `Adloox` | Third party brand verifier -- Scope3 (previously known as Adloox). |

### `UrlAssignedTargetingOptionDetails`

Details for assigned URL targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_URL`.

| Field | Type | Description |
|---|---|---|
| url | string | Required. The URL, for example `example.com`. DV360 supports two levels of subdirectory targeting, for example `www.example.com/one-subdirectory-level/second-level`, and five levels of subdomain targeting, for example `five.four.three.two.one.example.com`. |
| negative | boolean | Indicates if this option is being negatively targeted. |

### `UserRewardedContentAssignedTargetingOptionDetails`

User rewarded content targeting option details. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`.

| Field | Type | Description |
|---|---|---|
| userRewardedContent | string enum(USER_REWARDED_CONTENT_UNSPECIFIED, USER_REWARDED_CONTENT_USER_REWARDED, USER_REWARDED_CONTENT_NOT_USER_REWARDED) | Output only. User rewarded content status for video ads. Values: USER_REWARDED_CONTENT_UNSPECIFIED - User rewarded content is not specified or is unknown in this version.; USER_REWARDED_CONTENT_USER_REWARDED - Represents ads where the user will see a reward after viewing.; USER_REWARDED_CONTENT_NOT_USER_REWARDED - Represents all other ads besides user-rewarded. |
| targetingOptionId | string | Required. The targeting_option_id field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`. |

### `VideoPlayerSizeAssignedTargetingOptionDetails`

Video player size targeting option details. This will be populated in the video_player_size_details field when targeting_type is `TARGETING_TYPE_VIDEO_PLAYER_SIZE`. Explicitly targeting all options is not supported. Remove all video player size targeting options to achieve this effect.

| Field | Type | Description |
|---|---|---|
| videoPlayerSize | string enum(VIDEO_PLAYER_SIZE_UNSPECIFIED, VIDEO_PLAYER_SIZE_SMALL, VIDEO_PLAYER_SIZE_LARGE, VIDEO_PLAYER_SIZE_HD, VIDEO_PLAYER_SIZE_UNKNOWN) | Required. The video player size. Values: VIDEO_PLAYER_SIZE_UNSPECIFIED - Video player size is not specified in this version. This enum is a place holder for a default value and does not represent a real video player size.; VIDEO_PLAYER_SIZE_SMALL - The dimensions of the video player are less than 400×300 (desktop), or up to 20% of screen covered (mobile).; VIDEO_PLAYER_SIZE_LARGE - The dimensions of the video player are between 400x300 and 1280x720 pixels (desktop), or 20% to 90% of the screen covered (mobile).; VIDEO_PLAYER_SIZE_HD - The dimensions of the video player are 1280×720 or greater (desktop), or over 90% of the screen covered (mobile).; VIDEO_PLAYER_SIZE_UNKNOWN - The dimensions of the video player are unknown. |

### `ViewabilityAssignedTargetingOptionDetails`

Assigned viewability targeting option details. This will be populated in the viewability_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_VIEWABILITY`.

| Field | Type | Description |
|---|---|---|
| viewability | string enum(VIEWABILITY_UNSPECIFIED, VIEWABILITY_10_PERCENT_OR_MORE, VIEWABILITY_20_PERCENT_OR_MORE, VIEWABILITY_30_PERCENT_OR_MORE, VIEWABILITY_40_PERCENT_OR_MORE, VIEWABILITY_50_PERCENT_OR_MORE, VIEWABILITY_60_PERCENT_OR_MORE, VIEWABILITY_70_PERCENT_OR_MORE, VIEWABILITY_80_PERCENT_OR_MORE, VIEWABILITY_90_PERCENT_OR_MORE) | Required. The predicted viewability percentage. Values: VIEWABILITY_UNSPECIFIED - Default value when viewability is not specified in this version. This enum is a placeholder for default value and does not represent a real viewability option.; VIEWABILITY_10_PERCENT_OR_MORE - Bid only on impressions that are at least 10% likely to be viewable.; VIEWABILITY_20_PERCENT_OR_MORE - Bid only on impressions that are at least 20% likely to be viewable.; VIEWABILITY_30_PERCENT_OR_MORE - Bid only on impressions that are at least 30% likely to be viewable.; VIEWABILITY_40_PERCENT_OR_MORE - Bid only on impressions that are at least 40% likely to be viewable.; VIEWABILITY_50_PERCENT_OR_MORE - Bid only on impressions that are at least 50% likely to be viewable.; VIEWABILITY_60_PERCENT_OR_MORE - Bid only on impressions that are at least 60% likely to be viewable.; VIEWABILITY_70_PERCENT_OR_MORE - Bid only on impressions that are at least 70% likely to be viewable.; VIEWABILITY_80_PERCENT_OR_MORE - Bid only on impressions that are at least 80% likely to be viewable.; VIEWABILITY_90_PERCENT_OR_MORE - Bid only on impressions that are at least 90% likely to be viewable. |

### `YoutubeChannelAssignedTargetingOptionDetails`

Details for YouTube channel assigned targeting option. This will be populated in the youtube_channel_details field when targeting_type is `TARGETING_TYPE_YOUTUBE_CHANNEL`.

| Field | Type | Description |
|---|---|---|
| negative | boolean | Indicates if this option is being negatively targeted. |
| channelId | string | The YouTube uploader channel id or the channel code of a YouTube channel. |

### `YoutubeChannelPackAssignedTargetingOptionDetails`

Details for YouTube channel pack assigned targeting option. This will be populated in the youtube_channel_pack_details field when targeting_type is `TARGETING_TYPE_YOUTUBE_CHANNEL_PACK`.

| Field | Type | Description |
|---|---|---|
| channelPackId | string (int64) | Required. The ID of the YouTube channel pack. |
| negative | boolean | Optional. Indicates if this option is being negatively targeted. |

### `YoutubeVideoAssignedTargetingOptionDetails`

Details for YouTube video assigned targeting option. This will be populated in the youtube_video_details field when targeting_type is `TARGETING_TYPE_YOUTUBE_VIDEO`.

| Field | Type | Description |
|---|---|---|
| videoId | string | YouTube video id as it appears on the YouTube watch page. |
| negative | boolean | Indicates if this option is being negatively targeted. |

### `CombinedAudienceGroup`

Details of combined audience group. All combined audience targeting settings are logically ‘OR’ of each other.

| Field | Type | Description |
|---|---|---|
| settings | array<`CombinedAudienceTargetingSetting`> | Required. All combined audience targeting settings in combined audience group. Repeated settings with the same id will be ignored. The number of combined audience settings should be no more than five, error will be thrown otherwise. |

### `CustomListGroup`

Details of custom list group. All custom list targeting settings are logically ‘OR’ of each other.

| Field | Type | Description |
|---|---|---|
| settings | array<`CustomListTargetingSetting`> | Required. All custom list targeting settings in custom list group. Repeated settings with the same id will be ignored. |

### `FirstPartyAndPartnerAudienceGroup`

Details of first party and partner audience group. All first party and partner audience targeting settings are logically ‘OR’ of each other.

| Field | Type | Description |
|---|---|---|
| settings | array<`FirstPartyAndPartnerAudienceTargetingSetting`> | Required. All first party and partner audience targeting settings in first party and partner audience group. Repeated settings with the same id are not allowed. |

### `GoogleAudienceGroup`

Details of Google audience group. All Google audience targeting settings are logically ‘OR’ of each other.

| Field | Type | Description |
|---|---|---|
| settings | array<`GoogleAudienceTargetingSetting`> | Required. All Google audience targeting settings in Google audience group. Repeated settings with the same id will be ignored. |

### `Adloox`

Details of Scope3 (previously known as Adloox) brand safety settings.

| Field | Type | Description |
|---|---|---|
| terrorismContent | string enum(GARM_RISK_EXCLUSION_UNSPECIFIED, GARM_RISK_EXCLUSION_FLOOR, GARM_RISK_EXCLUSION_HIGH, GARM_RISK_EXCLUSION_MEDIUM, GARM_RISK_EXCLUSION_LOW) | Optional. Terrorism Content [GARM](https://wfanet.org/leadership/garm/about-garm) risk ranges to exclude. Values: GARM_RISK_EXCLUSION_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any GARM risk exclusion option.; GARM_RISK_EXCLUSION_FLOOR - Exclude floor risk.; GARM_RISK_EXCLUSION_HIGH - Exclude high and floor risk.; GARM_RISK_EXCLUSION_MEDIUM - Exclude medium, high, and floor risk.; GARM_RISK_EXCLUSION_LOW - Exclude all levels of risk (low, medium, high and floor). |
| excludedAdlooxCategories | array<string enum(ADLOOX_UNSPECIFIED, ADULT_CONTENT_HARD, ADULT_CONTENT_SOFT, ILLEGAL_CONTENT, BORDERLINE_CONTENT, DISCRIMINATORY_CONTENT, VIOLENT_CONTENT_WEAPONS, LOW_VIEWABILITY_DOMAINS, FRAUD)> | Scope3 categories to exclude. |
| onlinePiracyContent | string enum(GARM_RISK_EXCLUSION_UNSPECIFIED, GARM_RISK_EXCLUSION_FLOOR, GARM_RISK_EXCLUSION_HIGH, GARM_RISK_EXCLUSION_MEDIUM, GARM_RISK_EXCLUSION_LOW) | Optional. Online Piracy Content [GARM](https://wfanet.org/leadership/garm/about-garm) risk ranges to exclude. Values: GARM_RISK_EXCLUSION_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any GARM risk exclusion option.; GARM_RISK_EXCLUSION_FLOOR - Exclude floor risk.; GARM_RISK_EXCLUSION_HIGH - Exclude high and floor risk.; GARM_RISK_EXCLUSION_MEDIUM - Exclude medium, high, and floor risk.; GARM_RISK_EXCLUSION_LOW - Exclude all levels of risk (low, medium, high and floor). |
| displayIabViewability | string enum(DISPLAY_IAB_VIEWABILITY_UNSPECIFIED, DISPLAY_IAB_VIEWABILITY_10, DISPLAY_IAB_VIEWABILITY_20, DISPLAY_IAB_VIEWABILITY_35, DISPLAY_IAB_VIEWABILITY_50, DISPLAY_IAB_VIEWABILITY_75) | Optional. IAB viewability threshold for display ads. Values: DISPLAY_IAB_VIEWABILITY_UNSPECIFIED - Default value when not specified or is unknown in this version.; DISPLAY_IAB_VIEWABILITY_10 - 10%+ in view (IAB display viewability standard).; DISPLAY_IAB_VIEWABILITY_20 - 20%+ in view (IAB display viewability standard).; DISPLAY_IAB_VIEWABILITY_35 - 35%+ in view (IAB display viewability standard).; DISPLAY_IAB_VIEWABILITY_50 - 50%+ in view (IAB display viewability standard).; DISPLAY_IAB_VIEWABILITY_75 - 75%+ in view (IAB display viewability standard). |
| deathInjuryMilitaryConflictContent | string enum(GARM_RISK_EXCLUSION_UNSPECIFIED, GARM_RISK_EXCLUSION_FLOOR, GARM_RISK_EXCLUSION_HIGH, GARM_RISK_EXCLUSION_MEDIUM, GARM_RISK_EXCLUSION_LOW) | Optional. Death, Injury, or Military Conflict Content [GARM](https://wfanet.org/leadership/garm/about-garm) risk ranges to exclude. Values: GARM_RISK_EXCLUSION_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any GARM risk exclusion option.; GARM_RISK_EXCLUSION_FLOOR - Exclude floor risk.; GARM_RISK_EXCLUSION_HIGH - Exclude high and floor risk.; GARM_RISK_EXCLUSION_MEDIUM - Exclude medium, high, and floor risk.; GARM_RISK_EXCLUSION_LOW - Exclude all levels of risk (low, medium, high and floor). |
| excludedFraudIvtMfaCategories | array<string enum(FRAUD_IVT_MFA_CATEGORY_UNSPECIFIED, FRAUD_IVT_MFA)> | Optional. Scope3's fraud IVT MFA categories to exclude. |
| obscenityProfanityContent | string enum(GARM_RISK_EXCLUSION_UNSPECIFIED, GARM_RISK_EXCLUSION_FLOOR, GARM_RISK_EXCLUSION_HIGH, GARM_RISK_EXCLUSION_MEDIUM, GARM_RISK_EXCLUSION_LOW) | Optional. Obscenity and Profanity Content [GARM](https://wfanet.org/leadership/garm/about-garm) risk ranges to exclude. Values: GARM_RISK_EXCLUSION_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any GARM risk exclusion option.; GARM_RISK_EXCLUSION_FLOOR - Exclude floor risk.; GARM_RISK_EXCLUSION_HIGH - Exclude high and floor risk.; GARM_RISK_EXCLUSION_MEDIUM - Exclude medium, high, and floor risk.; GARM_RISK_EXCLUSION_LOW - Exclude all levels of risk (low, medium, high and floor). |
| videoIabViewability | string enum(VIDEO_IAB_VIEWABILITY_UNSPECIFIED, VIDEO_IAB_VIEWABILITY_10, VIDEO_IAB_VIEWABILITY_20, VIDEO_IAB_VIEWABILITY_35, VIDEO_IAB_VIEWABILITY_50, VIDEO_IAB_VIEWABILITY_75) | Optional. IAB viewability threshold for video ads. Values: VIDEO_IAB_VIEWABILITY_UNSPECIFIED - Default value when not specified or is unknown in this version.; VIDEO_IAB_VIEWABILITY_10 - 10%+ in view (IAB video viewability standard).; VIDEO_IAB_VIEWABILITY_20 - 20%+ in view (IAB video viewability standard).; VIDEO_IAB_VIEWABILITY_35 - 35%+ in view (IAB video viewability standard).; VIDEO_IAB_VIEWABILITY_50 - 50%+ in view (IAB video viewability standard).; VIDEO_IAB_VIEWABILITY_75 - 75%+ in view (IAB video viewability standard). |
| armsAmmunitionContent | string enum(GARM_RISK_EXCLUSION_UNSPECIFIED, GARM_RISK_EXCLUSION_FLOOR, GARM_RISK_EXCLUSION_HIGH, GARM_RISK_EXCLUSION_MEDIUM, GARM_RISK_EXCLUSION_LOW) | Optional. Arms and Ammunition Content [GARM](https://wfanet.org/leadership/garm/about-garm) risk ranges to exclude. Values: GARM_RISK_EXCLUSION_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any GARM risk exclusion option.; GARM_RISK_EXCLUSION_FLOOR - Exclude floor risk.; GARM_RISK_EXCLUSION_HIGH - Exclude high and floor risk.; GARM_RISK_EXCLUSION_MEDIUM - Exclude medium, high, and floor risk.; GARM_RISK_EXCLUSION_LOW - Exclude all levels of risk (low, medium, high and floor). |
| misinformationContent | string enum(GARM_RISK_EXCLUSION_UNSPECIFIED, GARM_RISK_EXCLUSION_FLOOR, GARM_RISK_EXCLUSION_HIGH, GARM_RISK_EXCLUSION_MEDIUM, GARM_RISK_EXCLUSION_LOW) | Optional. Misinformation Content [GARM](https://wfanet.org/leadership/garm/about-garm) risk ranges to exclude. Values: GARM_RISK_EXCLUSION_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any GARM risk exclusion option.; GARM_RISK_EXCLUSION_FLOOR - Exclude floor risk.; GARM_RISK_EXCLUSION_HIGH - Exclude high and floor risk.; GARM_RISK_EXCLUSION_MEDIUM - Exclude medium, high, and floor risk.; GARM_RISK_EXCLUSION_LOW - Exclude all levels of risk (low, medium, high and floor). |
| illegalDrugsTobaccoEcigarettesVapingAlcoholContent | string enum(GARM_RISK_EXCLUSION_UNSPECIFIED, GARM_RISK_EXCLUSION_FLOOR, GARM_RISK_EXCLUSION_HIGH, GARM_RISK_EXCLUSION_MEDIUM, GARM_RISK_EXCLUSION_LOW) | Optional. Illegal Drugs/Alcohol Content [GARM](https://wfanet.org/leadership/garm/about-garm) risk ranges to exclude. Values: GARM_RISK_EXCLUSION_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any GARM risk exclusion option.; GARM_RISK_EXCLUSION_FLOOR - Exclude floor risk.; GARM_RISK_EXCLUSION_HIGH - Exclude high and floor risk.; GARM_RISK_EXCLUSION_MEDIUM - Exclude medium, high, and floor risk.; GARM_RISK_EXCLUSION_LOW - Exclude all levels of risk (low, medium, high and floor). |
| spamHarmfulContent | string enum(GARM_RISK_EXCLUSION_UNSPECIFIED, GARM_RISK_EXCLUSION_FLOOR, GARM_RISK_EXCLUSION_HIGH, GARM_RISK_EXCLUSION_MEDIUM, GARM_RISK_EXCLUSION_LOW) | Optional. Spam or Harmful Content [GARM](https://wfanet.org/leadership/garm/about-garm) risk ranges to exclude. Values: GARM_RISK_EXCLUSION_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any GARM risk exclusion option.; GARM_RISK_EXCLUSION_FLOOR - Exclude floor risk.; GARM_RISK_EXCLUSION_HIGH - Exclude high and floor risk.; GARM_RISK_EXCLUSION_MEDIUM - Exclude medium, high, and floor risk.; GARM_RISK_EXCLUSION_LOW - Exclude all levels of risk (low, medium, high and floor). |
| debatedSensitiveSocialIssueContent | string enum(GARM_RISK_EXCLUSION_UNSPECIFIED, GARM_RISK_EXCLUSION_FLOOR, GARM_RISK_EXCLUSION_HIGH, GARM_RISK_EXCLUSION_MEDIUM, GARM_RISK_EXCLUSION_LOW) | Optional. Debated Sensitive Social Issue Content [GARM](https://wfanet.org/leadership/garm/about-garm) risk ranges to exclude. Values: GARM_RISK_EXCLUSION_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any GARM risk exclusion option.; GARM_RISK_EXCLUSION_FLOOR - Exclude floor risk.; GARM_RISK_EXCLUSION_HIGH - Exclude high and floor risk.; GARM_RISK_EXCLUSION_MEDIUM - Exclude medium, high, and floor risk.; GARM_RISK_EXCLUSION_LOW - Exclude all levels of risk (low, medium, high and floor). |
| adultExplicitSexualContent | string enum(GARM_RISK_EXCLUSION_UNSPECIFIED, GARM_RISK_EXCLUSION_FLOOR, GARM_RISK_EXCLUSION_HIGH, GARM_RISK_EXCLUSION_MEDIUM, GARM_RISK_EXCLUSION_LOW) | Optional. Adult and Explicit Sexual Content [GARM](https://wfanet.org/leadership/garm/about-garm) risk ranges to exclude. Values: GARM_RISK_EXCLUSION_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any GARM risk exclusion option.; GARM_RISK_EXCLUSION_FLOOR - Exclude floor risk.; GARM_RISK_EXCLUSION_HIGH - Exclude high and floor risk.; GARM_RISK_EXCLUSION_MEDIUM - Exclude medium, high, and floor risk.; GARM_RISK_EXCLUSION_LOW - Exclude all levels of risk (low, medium, high and floor). |
| crimeHarmfulActsIndividualsSocietyHumanRightsViolationsContent | string enum(GARM_RISK_EXCLUSION_UNSPECIFIED, GARM_RISK_EXCLUSION_FLOOR, GARM_RISK_EXCLUSION_HIGH, GARM_RISK_EXCLUSION_MEDIUM, GARM_RISK_EXCLUSION_LOW) | Optional. Crime and Harmful Acts Content [GARM](https://wfanet.org/leadership/garm/about-garm) risk ranges to exclude. Values: GARM_RISK_EXCLUSION_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any GARM risk exclusion option.; GARM_RISK_EXCLUSION_FLOOR - Exclude floor risk.; GARM_RISK_EXCLUSION_HIGH - Exclude high and floor risk.; GARM_RISK_EXCLUSION_MEDIUM - Exclude medium, high, and floor risk.; GARM_RISK_EXCLUSION_LOW - Exclude all levels of risk (low, medium, high and floor). |
| hateSpeechActsAggressionContent | string enum(GARM_RISK_EXCLUSION_UNSPECIFIED, GARM_RISK_EXCLUSION_FLOOR, GARM_RISK_EXCLUSION_HIGH, GARM_RISK_EXCLUSION_MEDIUM, GARM_RISK_EXCLUSION_LOW) | Optional. Hate Speech and Acts of Aggression Content [GARM](https://wfanet.org/leadership/garm/about-garm) risk ranges to exclude. Values: GARM_RISK_EXCLUSION_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any GARM risk exclusion option.; GARM_RISK_EXCLUSION_FLOOR - Exclude floor risk.; GARM_RISK_EXCLUSION_HIGH - Exclude high and floor risk.; GARM_RISK_EXCLUSION_MEDIUM - Exclude medium, high, and floor risk.; GARM_RISK_EXCLUSION_LOW - Exclude all levels of risk (low, medium, high and floor). |

### `DoubleVerify`

Details of DoubleVerify settings.

| Field | Type | Description |
|---|---|---|
| displayViewability | `DoubleVerifyDisplayViewability` | Display viewability settings (applicable to display line items only). |
| brandSafetyCategories | `DoubleVerifyBrandSafetyCategories` | DV Brand Safety Controls. |
| fraudInvalidTraffic | `DoubleVerifyFraudInvalidTraffic` | Avoid Sites and Apps with historical Fraud & IVT Rates. |
| appStarRating | `DoubleVerifyAppStarRating` | Avoid bidding on apps with the star ratings. |
| avoidedAgeRatings | array<string enum(AGE_RATING_UNSPECIFIED, APP_AGE_RATE_UNKNOWN, APP_AGE_RATE_4_PLUS, APP_AGE_RATE_9_PLUS, APP_AGE_RATE_12_PLUS, APP_AGE_RATE_17_PLUS, APP_AGE_RATE_18_PLUS)> | Avoid bidding on apps with the age rating. |
| videoViewability | `DoubleVerifyVideoViewability` | Video viewability settings (applicable to video line items only). |
| customSegmentId | string (int64) | The custom segment ID provided by DoubleVerify. The ID must start with "51" and consist of eight digits. Custom segment ID cannot be specified along with any of the following fields: * brand_safety_categories * avoided_age_ratings * app_star_rating * fraud_invalid_traffic |

### `IntegralAdScience`

Details of Integral Ad Science settings.

| Field | Type | Description |
|---|---|---|
| excludedViolenceRisk | string enum(VIOLENCE_UNSPECIFIED, VIOLENCE_HR, VIOLENCE_HMR) | Brand Safety - **Violence**. Values: VIOLENCE_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any violence options.; VIOLENCE_HR - Violence - Exclude High Risk.; VIOLENCE_HMR - Violence - Exclude High and Moderate Risk. |
| excludedGamblingRisk | string enum(GAMBLING_UNSPECIFIED, GAMBLING_HR, GAMBLING_HMR) | Brand Safety - **Gambling**. Values: GAMBLING_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any gambling options.; GAMBLING_HR - Gambling - Exclude High Risk.; GAMBLING_HMR - Gambling - Exclude High and Moderate Risk. |
| qualitySyncCustomSegmentId | array<string (int64)> | Optional. The quality sync custom segment ID provided by Integral Ad Science. The ID must be between `3000000` and `4999999`, inclusive. |
| displayViewability | string enum(PERFORMANCE_VIEWABILITY_UNSPECIFIED, PERFORMANCE_VIEWABILITY_40, PERFORMANCE_VIEWABILITY_50, PERFORMANCE_VIEWABILITY_60, PERFORMANCE_VIEWABILITY_70) | Display Viewability section (applicable to display line items only). Values: PERFORMANCE_VIEWABILITY_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any display viewability options.; PERFORMANCE_VIEWABILITY_40 - Target 40% Viewability or Higher.; PERFORMANCE_VIEWABILITY_50 - Target 50% Viewability or Higher.; PERFORMANCE_VIEWABILITY_60 - Target 60% Viewability or Higher.; PERFORMANCE_VIEWABILITY_70 - Target 70% Viewability or Higher. |
| videoViewability | string enum(VIDEO_VIEWABILITY_UNSPECIFIED, VIDEO_VIEWABILITY_40, VIDEO_VIEWABILITY_50, VIDEO_VIEWABILITY_60, VIDEO_VIEWABILITY_70) | Video Viewability Section (applicable to video line items only). Values: VIDEO_VIEWABILITY_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any video viewability options.; VIDEO_VIEWABILITY_40 - 40%+ in view (IAB video viewability standard).; VIDEO_VIEWABILITY_50 - 50%+ in view (IAB video viewability standard).; VIDEO_VIEWABILITY_60 - 60%+ in view (IAB video viewability standard).; VIDEO_VIEWABILITY_70 - 70%+ in view (IAB video viewability standard). |
| excludedDrugsRisk | string enum(DRUGS_UNSPECIFIED, DRUGS_HR, DRUGS_HMR) | Brand Safety - **Drugs**. Values: DRUGS_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any drugs options.; DRUGS_HR - Drugs - Exclude High Risk.; DRUGS_HMR - Drugs - Exclude High and Moderate Risk. |
| excludeUnrateable | boolean | Brand Safety - **Unrateable**. |
| excludedAdFraudRisk | string enum(SUSPICIOUS_ACTIVITY_UNSPECIFIED, SUSPICIOUS_ACTIVITY_HR, SUSPICIOUS_ACTIVITY_HMR, SUSPICIOUS_ACTIVITY_FD) | Ad Fraud settings. Values: SUSPICIOUS_ACTIVITY_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any ad fraud prevention options.; SUSPICIOUS_ACTIVITY_HR - Ad Fraud - Exclude High Risk.; SUSPICIOUS_ACTIVITY_HMR - Ad Fraud - Exclude High and Moderate Risk.; SUSPICIOUS_ACTIVITY_FD - Ad Fraud - Exclude Fraudulent Device. |
| traqScoreOption | string enum(TRAQ_UNSPECIFIED, TRAQ_250, TRAQ_500, TRAQ_600, TRAQ_700, TRAQ_750, TRAQ_875, TRAQ_1000) | True advertising quality (applicable to Display line items only). Values: TRAQ_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any true advertising quality scores.; TRAQ_250 - TRAQ score 250-1000.; TRAQ_500 - TRAQ score 500-1000.; TRAQ_600 - TRAQ score 600-1000.; TRAQ_700 - TRAQ score 700-1000.; TRAQ_750 - TRAQ score 750-1000.; TRAQ_875 - TRAQ score 875-1000.; TRAQ_1000 - TRAQ score 1000. |
| excludedHateSpeechRisk | string enum(HATE_SPEECH_UNSPECIFIED, HATE_SPEECH_HR, HATE_SPEECH_HMR) | Brand Safety - **Hate speech**. Values: HATE_SPEECH_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any hate speech options.; HATE_SPEECH_HR - Hate Speech - Exclude High Risk.; HATE_SPEECH_HMR - Hate Speech - Exclude High and Moderate Risk. |
| excludedOffensiveLanguageRisk | string enum(OFFENSIVE_LANGUAGE_UNSPECIFIED, OFFENSIVE_LANGUAGE_HR, OFFENSIVE_LANGUAGE_HMR) | Brand Safety - **Offensive language**. Values: OFFENSIVE_LANGUAGE_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any language options.; OFFENSIVE_LANGUAGE_HR - Offensive Language - Exclude High Risk.; OFFENSIVE_LANGUAGE_HMR - Offensive Language - Exclude High and Moderate Risk. |
| excludedIllegalDownloadsRisk | string enum(ILLEGAL_DOWNLOADS_UNSPECIFIED, ILLEGAL_DOWNLOADS_HR, ILLEGAL_DOWNLOADS_HMR) | Brand Safety - **Illegal downloads**. Values: ILLEGAL_DOWNLOADS_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any illegal downloads options.; ILLEGAL_DOWNLOADS_HR - Illegal Downloads - Exclude High Risk.; ILLEGAL_DOWNLOADS_HMR - Illegal Downloads - Exclude High and Moderate Risk. |
| customSegmentId | array<string (int64)> | The custom segment ID provided by Integral Ad Science. The ID must be between `1000001` and `1999999` or `3000001` and `3999999`, inclusive. |
| excludedAdultRisk | string enum(ADULT_UNSPECIFIED, ADULT_HR, ADULT_HMR) | Brand Safety - **Adult content**. Values: ADULT_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any adult options.; ADULT_HR - Adult - Exclude High Risk.; ADULT_HMR - Adult - Exclude High and Moderate Risk. |
| excludedAlcoholRisk | string enum(ALCOHOL_UNSPECIFIED, ALCOHOL_HR, ALCOHOL_HMR) | Brand Safety - **Alcohol**. Values: ALCOHOL_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any alcohol options.; ALCOHOL_HR - Alcohol - Exclude High Risk.; ALCOHOL_HMR - Alcohol - Exclude High and Moderate Risk. |

### `CombinedAudienceTargetingSetting`

Details of combined audience targeting setting.

| Field | Type | Description |
|---|---|---|
| combinedAudienceId | string (int64) | Required. Combined audience id of combined audience targeting setting. This id is combined_audience_id. |

### `CustomListTargetingSetting`

Details of custom list targeting setting.

| Field | Type | Description |
|---|---|---|
| customListId | string (int64) | Required. Custom id of custom list targeting setting. This id is custom_list_id. |

### `FirstPartyAndPartnerAudienceTargetingSetting`

Details of first party and partner audience targeting setting.

| Field | Type | Description |
|---|---|---|
| firstPartyAndPartnerAudienceId | string (int64) | Required. First party and partner audience id of the first party and partner audience targeting setting. This id is first_party_and_partner_audience_id. |
| recency | string enum(RECENCY_NO_LIMIT, RECENCY_1_MINUTE, RECENCY_5_MINUTES, RECENCY_10_MINUTES, RECENCY_15_MINUTES, RECENCY_30_MINUTES, RECENCY_1_HOUR, RECENCY_2_HOURS, RECENCY_3_HOURS, RECENCY_6_HOURS, RECENCY_12_HOURS, RECENCY_1_DAY, RECENCY_2_DAYS, RECENCY_3_DAYS, RECENCY_5_DAYS, RECENCY_7_DAYS, RECENCY_10_DAYS, RECENCY_14_DAYS, RECENCY_15_DAYS, RECENCY_21_DAYS, RECENCY_28_DAYS, RECENCY_30_DAYS, RECENCY_40_DAYS, RECENCY_45_DAYS, RECENCY_60_DAYS, RECENCY_90_DAYS, RECENCY_120_DAYS, RECENCY_180_DAYS, RECENCY_270_DAYS, RECENCY_365_DAYS) | Required. The recency of the first party and partner audience targeting setting. Only applicable to first party audiences, otherwise will be ignored. For more info, refer to https://support.google.com/displayvideo/answer/2949947#recency When unspecified, no recency limit will be used. Values: RECENCY_NO_LIMIT - No limit of recency.; RECENCY_1_MINUTE - Recency is 1 minute.; RECENCY_5_MINUTES - Recency is 5 minutes.; RECENCY_10_MINUTES - Recency is 10 minutes.; RECENCY_15_MINUTES - Recency is 15 minutes.; RECENCY_30_MINUTES - Recency is 30 minutes.; RECENCY_1_HOUR - Recency is 1 hour.; RECENCY_2_HOURS - Recency is 2 hours.; RECENCY_3_HOURS - Recency is 3 hours.; RECENCY_6_HOURS - Recency is 6 hours.; RECENCY_12_HOURS - Recency is 12 hours.; RECENCY_1_DAY - Recency is 1 day.; RECENCY_2_DAYS - Recency is 2 days.; RECENCY_3_DAYS - Recency is 3 days.; RECENCY_5_DAYS - Recency is 5 days.; RECENCY_7_DAYS - Recency is 7 days.; RECENCY_10_DAYS - Recency is 10 days.; RECENCY_14_DAYS - Recency is 14 days.; RECENCY_15_DAYS - Recency is 15 days.; RECENCY_21_DAYS - Recency is 21 days.; RECENCY_28_DAYS - Recency is 28 days.; RECENCY_30_DAYS - Recency is 30 days.; RECENCY_40_DAYS - Recency is 40 days.; RECENCY_45_DAYS - Recency is 45 days.; RECENCY_60_DAYS - Recency is 60 days.; RECENCY_90_DAYS - Recency is 90 days.; RECENCY_120_DAYS - Recency is 120 days.; RECENCY_180_DAYS - Recency is 180 days.; RECENCY_270_DAYS - Recency is 270 days.; RECENCY_365_DAYS - Recency is 365 days. |

### `GoogleAudienceTargetingSetting`

Details of Google audience targeting setting.

| Field | Type | Description |
|---|---|---|
| googleAudienceId | string (int64) | Required. Google audience id of the Google audience targeting setting. This id is google_audience_id. |

### `DoubleVerifyAppStarRating`

Details of DoubleVerify star ratings settings.

| Field | Type | Description |
|---|---|---|
| avoidedStarRating | string enum(APP_STAR_RATE_UNSPECIFIED, APP_STAR_RATE_1_POINT_5_LESS, APP_STAR_RATE_2_LESS, APP_STAR_RATE_2_POINT_5_LESS, APP_STAR_RATE_3_LESS, APP_STAR_RATE_3_POINT_5_LESS, APP_STAR_RATE_4_LESS, APP_STAR_RATE_4_POINT_5_LESS) | Avoid bidding on apps with the star ratings. Values: APP_STAR_RATE_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any app star rating options.; APP_STAR_RATE_1_POINT_5_LESS - Official Apps with rating < 1.5 Stars.; APP_STAR_RATE_2_LESS - Official Apps with rating < 2 Stars.; APP_STAR_RATE_2_POINT_5_LESS - Official Apps with rating < 2.5 Stars.; APP_STAR_RATE_3_LESS - Official Apps with rating < 3 Stars.; APP_STAR_RATE_3_POINT_5_LESS - Official Apps with rating < 3.5 Stars.; APP_STAR_RATE_4_LESS - Official Apps with rating < 4 Stars.; APP_STAR_RATE_4_POINT_5_LESS - Official Apps with rating < 4.5 Stars. |
| avoidInsufficientStarRating | boolean | Avoid bidding on apps with insufficient star ratings. |

### `DoubleVerifyBrandSafetyCategories`

Settings for brand safety controls.

| Field | Type | Description |
|---|---|---|
| avoidUnknownBrandSafetyCategory | boolean | Unknown or unrateable. |
| avoidedMediumSeverityCategories | array<string enum(MEDIUM_SEVERITY_UNSPECIFIED, AD_SERVERS, ADULT_CONTENT_SWIMSUIT, ALTERNATIVE_LIFESTYLES, CELEBRITY_GOSSIP, GAMBLING, OCCULT, SEX_EDUCATION, DISASTER_AVIATION, DISASTER_MAN_MADE, DISASTER_NATURAL, DISASTER_TERRORIST_EVENTS, DISASTER_VEHICLE, ALCOHOL, SMOKING, NEGATIVE_NEWS_FINANCIAL, NON_ENGLISH, PARKING_PAGE, UNMODERATED_UGC, INFLAMMATORY_POLITICS_AND_NEWS, NEGATIVE_NEWS_PHARMACEUTICAL)> | Brand safety medium severity avoidance categories. |
| avoidedHighSeverityCategories | array<string enum(HIGHER_SEVERITY_UNSPECIFIED, ADULT_CONTENT_PORNOGRAPHY, COPYRIGHT_INFRINGEMENT, SUBSTANCE_ABUSE, GRAPHIC_VIOLENCE_WEAPONS, HATE_PROFANITY, CRIMINAL_SKILLS, NUISANCE_INCENTIVIZED_MALWARE_CLUTTER)> | Brand safety high severity avoidance categories. |

### `DoubleVerifyDisplayViewability`

Details of DoubleVerify display viewability settings.

| Field | Type | Description |
|---|---|---|
| iab | string enum(IAB_VIEWED_RATE_UNSPECIFIED, IAB_VIEWED_RATE_80_PERCENT_HIGHER, IAB_VIEWED_RATE_75_PERCENT_HIGHER, IAB_VIEWED_RATE_70_PERCENT_HIGHER, IAB_VIEWED_RATE_65_PERCENT_HIGHER, IAB_VIEWED_RATE_60_PERCENT_HIGHER, IAB_VIEWED_RATE_55_PERCENT_HIGHER, IAB_VIEWED_RATE_50_PERCENT_HIGHER, IAB_VIEWED_RATE_40_PERCENT_HIGHER, IAB_VIEWED_RATE_30_PERCENT_HIGHER) | Target web and app inventory to maximize IAB viewable rate. Values: IAB_VIEWED_RATE_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any IAB viewed rate options.; IAB_VIEWED_RATE_80_PERCENT_HIGHER - Target web and app inventory to maximize IAB viewable rate 80% or higher.; IAB_VIEWED_RATE_75_PERCENT_HIGHER - Target web and app inventory to maximize IAB viewable rate 75% or higher.; IAB_VIEWED_RATE_70_PERCENT_HIGHER - Target web and app inventory to maximize IAB viewable rate 70% or higher.; IAB_VIEWED_RATE_65_PERCENT_HIGHER - Target web and app inventory to maximize IAB viewable rate 65% or higher.; IAB_VIEWED_RATE_60_PERCENT_HIGHER - Target web and app inventory to maximize IAB viewable rate 60% or higher.; IAB_VIEWED_RATE_55_PERCENT_HIGHER - Target web and app inventory to maximize IAB viewable rate 55% or higher.; IAB_VIEWED_RATE_50_PERCENT_HIGHER - Target web and app inventory to maximize IAB viewable rate 50% or higher.; IAB_VIEWED_RATE_40_PERCENT_HIGHER - Target web and app inventory to maximize IAB viewable rate 40% or higher.; IAB_VIEWED_RATE_30_PERCENT_HIGHER - Target web and app inventory to maximize IAB viewable rate 30% or higher. |
| viewableDuring | string enum(AVERAGE_VIEW_DURATION_UNSPECIFIED, AVERAGE_VIEW_DURATION_5_SEC, AVERAGE_VIEW_DURATION_10_SEC, AVERAGE_VIEW_DURATION_15_SEC) | Target web and app inventory to maximize 100% viewable duration. Values: AVERAGE_VIEW_DURATION_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any average view duration options.; AVERAGE_VIEW_DURATION_5_SEC - Target web and app inventory to maximize 100% viewable duration 5 seconds or more.; AVERAGE_VIEW_DURATION_10_SEC - Target web and app inventory to maximize 100% viewable duration 10 seconds or more.; AVERAGE_VIEW_DURATION_15_SEC - Target web and app inventory to maximize 100% viewable duration 15 seconds or more. |

### `DoubleVerifyFraudInvalidTraffic`

DoubleVerify Fraud & Invalid Traffic settings.

| Field | Type | Description |
|---|---|---|
| avoidedFraudOption | string enum(FRAUD_UNSPECIFIED, AD_IMPRESSION_FRAUD_100, AD_IMPRESSION_FRAUD_50, AD_IMPRESSION_FRAUD_25, AD_IMPRESSION_FRAUD_10, AD_IMPRESSION_FRAUD_8, AD_IMPRESSION_FRAUD_6, AD_IMPRESSION_FRAUD_4, AD_IMPRESSION_FRAUD_2) | Avoid Sites and Apps with historical Fraud & IVT. Values: FRAUD_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any fraud and invalid traffic options.; AD_IMPRESSION_FRAUD_100 - 100% Fraud & IVT.; AD_IMPRESSION_FRAUD_50 - 50% or Higher Fraud & IVT.; AD_IMPRESSION_FRAUD_25 - 25% or Higher Fraud & IVT.; AD_IMPRESSION_FRAUD_10 - 10% or Higher Fraud & IVT.; AD_IMPRESSION_FRAUD_8 - 8% or Higher Fraud & IVT.; AD_IMPRESSION_FRAUD_6 - 6% or Higher Fraud & IVT.; AD_IMPRESSION_FRAUD_4 - 4% or Higher Fraud & IVT.; AD_IMPRESSION_FRAUD_2 - 2% or Higher Fraud & IVT. |
| avoidInsufficientOption | boolean | Insufficient Historical Fraud & IVT Stats. |

### `DoubleVerifyVideoViewability`

Details of DoubleVerify video viewability settings.

| Field | Type | Description |
|---|---|---|
| playerImpressionRate | string enum(PLAYER_SIZE_400X300_UNSPECIFIED, PLAYER_SIZE_400X300_95, PLAYER_SIZE_400X300_70, PLAYER_SIZE_400X300_25, PLAYER_SIZE_400X300_5) | Target inventory to maximize impressions with 400x300 or greater player size. Values: PLAYER_SIZE_400X300_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any impressions options.; PLAYER_SIZE_400X300_95 - Sites with 95%+ of impressions.; PLAYER_SIZE_400X300_70 - Sites with 70%+ of impressions.; PLAYER_SIZE_400X300_25 - Sites with 25%+ of impressions.; PLAYER_SIZE_400X300_5 - Sites with 5%+ of impressions. |
| videoViewableRate | string enum(VIDEO_VIEWABLE_RATE_UNSPECIFIED, VIEWED_PERFORMANCE_40_PERCENT_HIGHER, VIEWED_PERFORMANCE_35_PERCENT_HIGHER, VIEWED_PERFORMANCE_30_PERCENT_HIGHER, VIEWED_PERFORMANCE_25_PERCENT_HIGHER, VIEWED_PERFORMANCE_20_PERCENT_HIGHER, VIEWED_PERFORMANCE_10_PERCENT_HIGHER) | Target web inventory to maximize fully viewable rate. Values: VIDEO_VIEWABLE_RATE_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any video viewable rate options.; VIEWED_PERFORMANCE_40_PERCENT_HIGHER - Target web inventory to maximize fully viewable rate 40% or higher.; VIEWED_PERFORMANCE_35_PERCENT_HIGHER - Target web inventory to maximize fully viewable rate 35% or higher.; VIEWED_PERFORMANCE_30_PERCENT_HIGHER - Target web inventory to maximize fully viewable rate 30% or higher.; VIEWED_PERFORMANCE_25_PERCENT_HIGHER - Target web inventory to maximize fully viewable rate 25% or higher.; VIEWED_PERFORMANCE_20_PERCENT_HIGHER - Target web inventory to maximize fully viewable rate 20% or higher.; VIEWED_PERFORMANCE_10_PERCENT_HIGHER - Target web inventory to maximize fully viewable rate 10% or higher. |
| videoIab | string enum(VIDEO_IAB_UNSPECIFIED, IAB_VIEWABILITY_80_PERCENT_HIGHER, IAB_VIEWABILITY_75_PERCENT_HIGHER, IAB_VIEWABILITY_70_PERCENT_HIGHER, IAB_VIEWABILITY_65_PERCENT_HIHGER, IAB_VIEWABILITY_60_PERCENT_HIGHER, IAB_VIEWABILITY_55_PERCENT_HIHGER, IAB_VIEWABILITY_50_PERCENT_HIGHER, IAB_VIEWABILITY_40_PERCENT_HIHGER, IAB_VIEWABILITY_30_PERCENT_HIHGER) | Target web inventory to maximize IAB viewable rate. Values: VIDEO_IAB_UNSPECIFIED - This enum is only a placeholder and it doesn't specify any video IAB viewable rate options.; IAB_VIEWABILITY_80_PERCENT_HIGHER - Target web and app inventory to maximize IAB viewable rate 80% or higher.; IAB_VIEWABILITY_75_PERCENT_HIGHER - Target web and app inventory to maximize IAB viewable rate 75% or higher.; IAB_VIEWABILITY_70_PERCENT_HIGHER - Target web and app inventory to maximize IAB viewable rate 70% or higher.; IAB_VIEWABILITY_65_PERCENT_HIHGER - Target web and app inventory to maximize IAB viewable rate 65% or higher.; IAB_VIEWABILITY_60_PERCENT_HIGHER - Target web and app inventory to maximize IAB viewable rate 60% or higher.; IAB_VIEWABILITY_55_PERCENT_HIHGER - Target web and app inventory to maximize IAB viewable rate 55% or higher.; IAB_VIEWABILITY_50_PERCENT_HIGHER - Target web and app inventory to maximize IAB viewable rate 50% or higher.; IAB_VIEWABILITY_40_PERCENT_HIHGER - Target web and app inventory to maximize IAB viewable rate 40% or higher.; IAB_VIEWABILITY_30_PERCENT_HIHGER - Target web and app inventory to maximize IAB viewable rate 30% or higher. |

