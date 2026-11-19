# Creatives

> Source: Display & Video 360 API v4 REST Discovery document (https://displayvideo.googleapis.com/$discovery/rest?version=v4, revision 20261117); reference https://developers.google.com/display-video/api/reference/rest. Fetched 2026-11-19.

Used by koddi-offsite via: `NewAdvertisersCreativesService` Create/Get/Patch (`creative.go`).

---

## advertisers.creatives.delete

`DELETE https://displayvideo.googleapis.com/v4/advertisers/{+advertiserId}/creatives/{+creativeId}`

Deletes a creative. Returns error code `NOT_FOUND` if the creative does not exist. The creative should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, before it can be deleted. A ["Standard" user role](//support.google.com/displayvideo/answer/2723011) or greater for the parent advertiser or partner is required to make this request.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string (int64) | yes | The ID of the advertiser this creative belongs to. |
| creativeId | path | string (int64) | yes | The ID of the creative to be deleted. |

**Response**: `Empty`

---

## advertisers.creatives.patch

`PATCH https://displayvideo.googleapis.com/v4/advertisers/{+advertiserId}/creatives/{+creativeId}`

Updates an existing creative. Returns the updated creative if successful. A ["Standard" user role](//support.google.com/displayvideo/answer/2723011) or greater for the parent advertiser or partner is required to make this request.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string (int64) | yes | Output only. The unique ID of the advertiser the creative belongs to. |
| creativeId | path | string (int64) | yes | Output only. The unique ID of the creative. Assigned by the system. |
| updateMask | query | string (google-fieldmask) |  | Required. The mask to control which fields to update. |

**Request body**: `Creative`

**Response**: `Creative`

---

## advertisers.creatives.create

`POST https://displayvideo.googleapis.com/v4/advertisers/{+advertiserId}/creatives`

Creates a new creative. Returns the newly created creative if successful. A ["Standard" user role](//support.google.com/displayvideo/answer/2723011) or greater for the parent advertiser or partner is required to make this request.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string (int64) | yes | Output only. The unique ID of the advertiser the creative belongs to. |

**Request body**: `Creative`

**Response**: `Creative`

---

## advertisers.creatives.list

`GET https://displayvideo.googleapis.com/v4/advertisers/{+advertiserId}/creatives`

Lists creatives in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, creatives with `ENTITY_STATUS_ARCHIVED` will not be included in the results.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string (int64) | yes | Required. The ID of the advertiser to list creatives for. |
| pageSize | query | integer (int32) |  | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| pageToken | query | string |  | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListCreatives` method. If not specified, the first page of results will be returned. |
| filter | query | string |  | Allows filtering by creative fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * The `lineItemIds` field must use the `HAS (:)` operator. * The `updateTime` field must use the `GREATER THAN OR EQUAL TO (>=)` or `LESS THAN OR EQUAL TO (<=)` operators. * All other fields must use the `EQUALS (=)` operator. * For `entityStatus`, `minDuration`, `maxDuration`, `updateTime`, and `dynamic` fields, there may be at most one restriction. Supported Fields: * `approvalStatus` * `creativeId` * `creativeType` * `dimensions` (input in the form of `{width}x{height}`) * `dynamic` * `entityStatus` * `exchangeReviewStatus` (input in the form of `{exchange}-{reviewStatus}`) * `lineItemIds` * `maxDuration` (input in the form of `{duration}s`. Only seconds are supported) * `minDuration` (input in the form of `{duration}s`. Only seconds are supported) * `updateTime` (input in ISO 8601 format, or `YYYY-MM-DDTHH:MM:SSZ`) Notes: * For `updateTime`, a creative resource's field value reflects the last time that a creative has been updated, which includes updates made by the system (e.g. creative review updates). Examples: * All native creatives: `creativeType="CREATIVE_TYPE_NATIVE"` * All active creatives with 300x400 or 50x100 dimensions: `entityStatus="ENTITY_STATUS_ACTIVE" AND (dimensions="300x400" OR dimensions="50x100")` * All dynamic creatives that are approved by AdX or AppNexus, with a minimum duration of 5 seconds and 200ms: `dynamic="true" AND minDuration="5.2s" AND (exchangeReviewStatus="EXCHANGE_GOOGLE_AD_MANAGER-REVIEW_STATUS_APPROVED" OR exchangeReviewStatus="EXCHANGE_APPNEXUS-REVIEW_STATUS_APPROVED")` * All video creatives that are associated with line item ID 1 or 2: `creativeType="CREATIVE_TYPE_VIDEO" AND (lineItemIds:1 OR lineItemIds:2)` * Find creatives by multiple creative IDs: `creativeId=1 OR creativeId=2` * All creatives with an update time greater than or equal to 2020-11-04T18:54:47Z (format of ISO 8601): `updateTime>="2020-11-04T18:54:47Z"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |
| orderBy | query | string |  | Field by which to sort the list. Acceptable values are: * `creativeId` (default) * `createTime` * `mediaDuration` * `dimensions` (sorts by width first, then by height) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `createTime desc`. |

**Response**: `ListCreativesResponse`

---

## advertisers.creatives.get

`GET https://displayvideo.googleapis.com/v4/advertisers/{+advertiserId}/creatives/{+creativeId}`

Gets a creative.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string (int64) | yes | Required. The ID of the advertiser this creative belongs to. |
| creativeId | path | string (int64) | yes | Required. The ID of the creative to fetch. |

**Response**: `Creative`

---

## Schemas

### `Empty`

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

Type: object

### `Creative`

A single Creative.

| Field | Type | Description |
|---|---|---|
| universalAdId | `UniversalAdId` | Optional. An optional creative identifier provided by a registry that is unique across all platforms. Universal Ad ID is part of the VAST 4.0 standard. It can be modified after the creative is created. This field is only supported for the following creative_type: * `CREATIVE_TYPE_VIDEO` |
| thirdPartyUrls | array<`ThirdPartyUrl`> | Optional. Tracking URLs from third parties to track interactions with a video creative. This field is only supported for the following creative_type: * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_VIDEO` * `CREATIVE_TYPE_NATIVE_VIDEO` |
| dimensions | `Dimensions` | Required. Primary dimensions of the creative. Applicable to all creative types. The value of width_pixels and height_pixels defaults to `0` when creative_type is one of: * `CREATIVE_TYPE_VIDEO` * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_NATIVE_VIDEO` |
| reviewStatus | `ReviewStatusInfo` | Output only. The current status of the creative review process. |
| exitEvents | array<`ExitEvent`> | Required. Exit events for this creative. An exit (also known as a click tag) is any area in your creative that someone can click or tap to open an advertiser's landing page. Every creative must include at least one exit. You can add an exit to your creative in any of the following ways: * Use Google Web Designer's tap area. * Define a JavaScript variable called "clickTag". * Use the Enabler (Enabler.exit()) to track exits in rich media formats. |
| html5Video | boolean | Output only. Indicates the third-party VAST tag creative requires HTML5 Video support. Output only and only valid for third-party VAST tag creatives. Third-party VAST tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_VIDEO` |
| appendedTag | string | Optional. Third-party HTML tracking tag to be appended to the creative tag. |
| name | string | Output only. The resource name of the creative. |
| trackerUrls | array<string> | Optional. Tracking URLs for analytics providers or third-party ad technology vendors. The URLs must start with `https:` (except on inventory that doesn't require SSL compliance). If using macros in your URL, use only macros supported by Display & Video 360. Standard URLs only, no IMG or SCRIPT tags. This field is only writeable in the following creative_type: * `CREATIVE_TYPE_NATIVE` * `CREATIVE_TYPE_NATIVE_SITE_SQUARE` * `CREATIVE_TYPE_NATIVE_VIDEO` |
| additionalDimensions | array<`Dimensions`> | Optional. Additional dimensions. Applicable when creative_type is one of: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE` * `CREATIVE_TYPE_NATIVE` * `CREATIVE_TYPE_NATIVE_SITE_SQUARE` * `CREATIVE_TYPE_LIGHTBOX` * `CREATIVE_TYPE_PUBLISHER_HOSTED` If this field is specified, width_pixels and height_pixels are both required and must be greater than or equal to 0. |
| vastTagUrl | string | Optional. The URL of the VAST tag for a third-party VAST tag creative. Required and only valid for third-party VAST tag creatives. Third-party VAST tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_VIDEO` |
| updateTime | string (google-datetime) | Output only. The timestamp when the creative was last updated, either by the user or system (e.g. creative review). Assigned by the system. |
| iasCampaignMonitoring | boolean | Optional. Indicates whether Integral Ad Science (IAS) campaign monitoring is enabled. To enable this for the creative, make sure the Advertiser.creative_config.ias_client_id has been set to your IAS client ID. |
| createTime | string (google-datetime) | Output only. The timestamp when the creative was created. Assigned by the system. |
| companionCreativeIds | array<string (int64)> | Optional. The IDs of companion creatives for a video creative. You can assign existing display creatives (with image or HTML5 assets) to serve surrounding the publisher's video player. Companions display around the video player while the video is playing and remain after the video has completed. Creatives contain additional dimensions can not be companion creatives. This field is only supported for the following creative_type: * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_VIDEO` |
| requireHtml5 | boolean | Optional. Indicates that the creative relies on HTML5 to render properly. Optional and only valid for third-party tag creatives. Third-party tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE` |
| creativeType | string enum(CREATIVE_TYPE_UNSPECIFIED, CREATIVE_TYPE_STANDARD, CREATIVE_TYPE_EXPANDABLE, CREATIVE_TYPE_VIDEO, CREATIVE_TYPE_NATIVE, CREATIVE_TYPE_TEMPLATED_APP_INSTALL, CREATIVE_TYPE_NATIVE_SITE_SQUARE, CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL, CREATIVE_TYPE_LIGHTBOX, CREATIVE_TYPE_NATIVE_APP_INSTALL, CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE, CREATIVE_TYPE_AUDIO, CREATIVE_TYPE_PUBLISHER_HOSTED, CREATIVE_TYPE_NATIVE_VIDEO, CREATIVE_TYPE_TEMPLATED_APP_INSTALL_VIDEO, CREATIVE_TYPE_ASSET_BASED_CREATIVE) | Required. Immutable. The type of the creative. Values: CREATIVE_TYPE_UNSPECIFIED - Type value is not specified or is unknown in this version.; CREATIVE_TYPE_STANDARD - Standard display creative. Create and update methods are supported for this creative type if the hosting_source is one of the following: * `HOSTING_SOURCE_HOSTED` * `HOSTING_SOURCE_THIRD_PARTY`; CREATIVE_TYPE_EXPANDABLE - Expandable creative. Create and update methods are supported for this creative type if the hosting_source is `HOSTING_SOURCE_THIRD_PARTY`; CREATIVE_TYPE_VIDEO - Video creative. Create and update methods are supported for this creative type if the hosting_source is one of the following: * `HOSTING_SOURCE_HOSTED` * `HOSTING_SOURCE_THIRD_PARTY`; CREATIVE_TYPE_NATIVE - Native creative rendered by publishers with assets from advertiser. Create and update methods are supported for this creative type if the hosting_source is `HOSTING_SOURCE_HOSTED`; CREATIVE_TYPE_TEMPLATED_APP_INSTALL - Templated app install mobile creative (banner). Create and update methods are **not** supported for this creative type.; CREATIVE_TYPE_NATIVE_SITE_SQUARE - Square native creative. Create and update methods are supported for this creative type if the hosting_source is `HOSTING_SOURCE_HOSTED`; CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL - Interstitial creative including both display and video. Create and update methods are **not** supported for this creative type.; CREATIVE_TYPE_LIGHTBOX - Responsive and expandable Lightbox creative. Create and update methods are **not** supported for this creative type.; CREATIVE_TYPE_NATIVE_APP_INSTALL - Native app install creative. Create and update methods are **not** supported for this creative type.; CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE - Square native app install creative. Create and update methods are **not** supported for this creative type.; CREATIVE_TYPE_AUDIO - Audio creative. Create and update methods are supported for this creative type if the hosting_source is `HOSTING_SOURCE_HOSTED`; CREATIVE_TYPE_PUBLISHER_HOSTED - Publisher hosted creative. Create and update methods are **not** supported for this creative type.; CREATIVE_TYPE_NATIVE_VIDEO - Native video creative. Create and update methods are supported for this creative type if the hosting_source is `HOSTING_SOURCE_HOSTED`; CREATIVE_TYPE_TEMPLATED_APP_INSTALL_VIDEO - Templated app install mobile video creative. Create and update methods are **not** supported for this creative type.; CREATIVE_TYPE_ASSET_BASED_CREATIVE - Asset-based creative. Create and update methods are supported for this creative type if the hosting_source is `HOSTING_SOURCE_HOSTED`. |
| entityStatus | string enum(ENTITY_STATUS_UNSPECIFIED, ENTITY_STATUS_ACTIVE, ENTITY_STATUS_ARCHIVED, ENTITY_STATUS_DRAFT, ENTITY_STATUS_PAUSED, ENTITY_STATUS_SCHEDULED_FOR_DELETION) | Required. Controls whether or not the creative can serve. Accepted values are: * `ENTITY_STATUS_ACTIVE` * `ENTITY_STATUS_ARCHIVED` * `ENTITY_STATUS_PAUSED` Values: ENTITY_STATUS_UNSPECIFIED - Default value when status is not specified or is unknown in this version.; ENTITY_STATUS_ACTIVE - The entity is enabled to bid and spend budget.; ENTITY_STATUS_ARCHIVED - The entity is archived. Bidding and budget spending are disabled. An entity can be deleted after archived. Deleted entities cannot be retrieved.; ENTITY_STATUS_DRAFT - The entity is under draft. Bidding and budget spending are disabled.; ENTITY_STATUS_PAUSED - Bidding and budget spending are paused for the entity.; ENTITY_STATUS_SCHEDULED_FOR_DELETION - The entity is scheduled for deletion. |
| progressOffset | `AudioVideoOffset` | Optional. Amount of time to play the video before counting a view. This field is required when skippable is true. This field is only supported for the following creative_type: * `CREATIVE_TYPE_VIDEO` |
| creativeAttributes | array<string enum(CREATIVE_ATTRIBUTE_UNSPECIFIED, CREATIVE_ATTRIBUTE_VAST, CREATIVE_ATTRIBUTE_VPAID_LINEAR, CREATIVE_ATTRIBUTE_VPAID_NON_LINEAR)> | Output only. A list of attributes of the creative that is generated by the system. |
| jsTrackerUrl | string | Optional. JavaScript measurement URL from supported third-party verification providers (ComScore, DoubleVerify, IAS, Moat). HTML script tags are not supported. This field is only writeable in the following creative_type: * `CREATIVE_TYPE_NATIVE` * `CREATIVE_TYPE_NATIVE_SITE_SQUARE` * `CREATIVE_TYPE_NATIVE_VIDEO` |
| hostingSource | string enum(HOSTING_SOURCE_UNSPECIFIED, HOSTING_SOURCE_CM, HOSTING_SOURCE_THIRD_PARTY, HOSTING_SOURCE_HOSTED, HOSTING_SOURCE_RICH_MEDIA) | Required. Indicates where the creative is hosted. Values: HOSTING_SOURCE_UNSPECIFIED - Hosting source is not specified or is unknown in this version.; HOSTING_SOURCE_CM - A creative synced from Campaign Manager 360. Create and update methods are **not** supported for this hosting type.; HOSTING_SOURCE_THIRD_PARTY - A creative hosted by a third-party ad server (3PAS). Create and update methods are supported for this hosting type if the creative_type is one of the following: * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_EXPANDABLE` * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_VIDEO`; HOSTING_SOURCE_HOSTED - A creative created in DV360 and hosted by Campaign Manager 360. Create and update methods are supported for this hosting type if the creative_type is one of the following: * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_NATIVE` * `CREATIVE_TYPE_NATIVE_SITE_SQUARE` * `CREATIVE_TYPE_NATIVE_VIDEO` * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_VIDEO`; HOSTING_SOURCE_RICH_MEDIA - A rich media creative created in Studio and hosted by Campaign Manager 360. Create and update methods are **not** supported for this hosting type. |
| assets | array<`AssetAssociation`> | Required. Assets associated to this creative. |
| obaIcon | `ObaIcon` | Optional. Specifies the OBA icon for a video creative. This field is only supported in the following creative_type: * `CREATIVE_TYPE_VIDEO` |
| thirdPartyTag | string | Optional. The original third-party tag used for the creative. Required and only valid for third-party tag creatives. Third-party tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE` |
| creativeId | string (int64) | Output only. The unique ID of the creative. Assigned by the system. |
| counterEvents | array<`CounterEvent`> | Optional. Counter events for a rich media creative. Counters track the number of times that a user interacts with any part of a rich media creative in a specified way (mouse-overs, mouse-outs, clicks, taps, data loading, keyboard entries, etc.). Any event that can be captured in the creative can be recorded as a counter. Leave it empty or unset for creatives containing image assets only. |
| skippable | boolean | Optional. Whether the user can choose to skip a video creative. This field is only supported for the following creative_type: * `CREATIVE_TYPE_VIDEO` |
| integrationCode | string | Optional. ID information used to link this creative to an external system. Must be UTF-8 encoded with a length of no more than 10,000 characters. |
| cmPlacementId | string (int64) | Output only. The unique ID of the Campaign Manager 360 placement associated with the creative. This field is only applicable for creatives that are synced from Campaign Manager. |
| dynamic | boolean | Output only. Indicates whether the creative is dynamic. |
| notes | string | Optional. User notes for this creative. Must be UTF-8 encoded with a length of no more than 20,000 characters. |
| displayName | string | Required. The display name of the creative. Must be UTF-8 encoded with a maximum size of 240 bytes. |
| skipOffset | `AudioVideoOffset` | Optional. Amount of time to play the video before the skip button appears. This field is required when skippable is true. This field is only supported for the following creative_type: * `CREATIVE_TYPE_VIDEO` |
| transcodes | array<`Transcode`> | Output only. Audio/Video transcodes. Display & Video 360 transcodes the main asset into a number of alternative versions that use different file formats or have different properties (resolution, audio bit rate, and video bit rate), each designed for specific video players or bandwidths. These transcodes give a publisher's system more options to choose from for each impression on your video and ensures that the appropriate file serves based on the viewer’s connection and screen size. This field is only supported in the following creative_type: * `CREATIVE_TYPE_VIDEO` * `CREATIVE_TYPE_NATIVE_VIDEO` * `CREATIVE_TYPE_AUDIO` |
| mediaDuration | string (google-duration) | Output only. Media duration of the creative. Applicable when creative_type is one of: * `CREATIVE_TYPE_VIDEO` * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_NATIVE_VIDEO` * `CREATIVE_TYPE_PUBLISHER_HOSTED` |
| requirePingForAttribution | boolean | Optional. Indicates that the creative will wait for a return ping for attribution. Only valid when using a Campaign Manager 360 tracking ad with a third-party ad server parameter and the ${DC_DBM_TOKEN} macro. Optional and only valid for third-party tag creatives or third-party VAST tag creatives. Third-party tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE` Third-party VAST tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_AUDIO` * `CREATIVE_TYPE_VIDEO` |
| lineItemIds | array<string (int64)> | Output only. The IDs of the line items this creative is associated with. To associate a creative to a line item, use LineItem.creative_ids instead. |
| mp3Audio | boolean | Output only. Indicates the third-party audio creative supports MP3. Output only and only valid for third-party audio creatives. Third-party audio creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_AUDIO` |
| vpaid | boolean | Output only. Indicates the third-party VAST tag creative requires VPAID (Digital Video Player-Ad Interface). Output only and only valid for third-party VAST tag creatives. Third-party VAST tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_VIDEO` |
| cmTrackingAd | `CmTrackingAd` | Optional. The Campaign Manager 360 tracking ad associated with the creative. Optional for the following creative_type when created by an advertiser that uses both Campaign Manager 360 and third-party ad serving: * `CREATIVE_TYPE_NATIVE` * `CREATIVE_TYPE_NATIVE_SITE_SQUARE` Output only for other cases. |
| syntheticContentAttestationStatus | string enum(SYNTHETIC_CONTENT_ATTESTATION_STATUS_UNSPECIFIED, NOT_SYNTHETIC, IS_SYNTHETIC) | Optional. Whether to add a label to the creative as created or edited using AI when served in regions with local AI labeling regulations. Values: SYNTHETIC_CONTENT_ATTESTATION_STATUS_UNSPECIFIED - No attestation has been provided.; NOT_SYNTHETIC - Attested as not created or edited using AI.; IS_SYNTHETIC - Attested as created or edited using AI. |
| requireMraid | boolean | Optional. Indicates that the creative requires MRAID (Mobile Rich Media Ad Interface Definitions system). Set this if the creative relies on mobile gestures for interactivity, such as swiping or tapping. Optional and only valid for third-party tag creatives. Third-party tag creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_STANDARD` * `CREATIVE_TYPE_EXPANDABLE` |
| expandOnHover | boolean | Optional. Indicates the creative will automatically expand on hover. Optional and only valid for third-party expandable creatives. Third-party expandable creatives are creatives with following hosting source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_EXPANDABLE` |
| timerEvents | array<`TimerEvent`> | Optional. Timer custom events for a rich media creative. Timers track the time during which a user views and interacts with a specified part of a rich media creative. A creative can have multiple timer events, each timed independently. Leave it empty or unset for creatives containing image assets only. |
| expandingDirection | string enum(EXPANDING_DIRECTION_UNSPECIFIED, EXPANDING_DIRECTION_NONE, EXPANDING_DIRECTION_UP, EXPANDING_DIRECTION_DOWN, EXPANDING_DIRECTION_LEFT, EXPANDING_DIRECTION_RIGHT, EXPANDING_DIRECTION_UP_AND_LEFT, EXPANDING_DIRECTION_UP_AND_RIGHT, EXPANDING_DIRECTION_DOWN_AND_LEFT, EXPANDING_DIRECTION_DOWN_AND_RIGHT, EXPANDING_DIRECTION_UP_OR_DOWN, EXPANDING_DIRECTION_LEFT_OR_RIGHT, EXPANDING_DIRECTION_ANY_DIAGONAL) | Optional. Specifies the expanding direction of the creative. Required and only valid for third-party expandable creatives. Third-party expandable creatives are creatives with following hosting source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_EXPANDABLE` Values: EXPANDING_DIRECTION_UNSPECIFIED - The expanding direction is not specified.; EXPANDING_DIRECTION_NONE - Does not expand in any direction.; EXPANDING_DIRECTION_UP - Expands up.; EXPANDING_DIRECTION_DOWN - Expands down.; EXPANDING_DIRECTION_LEFT - Expands left.; EXPANDING_DIRECTION_RIGHT - Expands right.; EXPANDING_DIRECTION_UP_AND_LEFT - Expands up and to the left side.; EXPANDING_DIRECTION_UP_AND_RIGHT - Expands up and to the right side.; EXPANDING_DIRECTION_DOWN_AND_LEFT - Expands down and to the left side.; EXPANDING_DIRECTION_DOWN_AND_RIGHT - Expands down and to the right side.; EXPANDING_DIRECTION_UP_OR_DOWN - Expands either up or down.; EXPANDING_DIRECTION_LEFT_OR_RIGHT - Expands to either the left or the right side.; EXPANDING_DIRECTION_ANY_DIAGONAL - Can expand in any diagonal direction. |
| oggAudio | boolean | Output only. Indicates the third-party audio creative supports OGG. Output only and only valid for third-party audio creatives. Third-party audio creatives are creatives with following hosting_source: * `HOSTING_SOURCE_THIRD_PARTY` combined with following creative_type: * `CREATIVE_TYPE_AUDIO` |
| advertiserId | string (int64) | Output only. The unique ID of the advertiser the creative belongs to. |

### `ListCreativesResponse`

| Field | Type | Description |
|---|---|---|
| nextPageToken | string | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListCreativesRequest` method to retrieve the next page of results. If this field is null, it means this is the last page. |
| creatives | array<`Creative`> | The list of creatives. This list will be absent if empty. |

### `AssetAssociation`

Asset association for the creative.

| Field | Type | Description |
|---|---|---|
| asset | `Asset` | Optional. The associated asset. |
| role | string enum(ASSET_ROLE_UNSPECIFIED, ASSET_ROLE_MAIN, ASSET_ROLE_BACKUP, ASSET_ROLE_POLITE_LOAD, ASSET_ROLE_HEADLINE, ASSET_ROLE_LONG_HEADLINE, ASSET_ROLE_BODY, ASSET_ROLE_LONG_BODY, ASSET_ROLE_CAPTION_URL, ASSET_ROLE_CALL_TO_ACTION, ASSET_ROLE_ADVERTISER_NAME, ASSET_ROLE_PRICE, ASSET_ROLE_ANDROID_APP_ID, ASSET_ROLE_IOS_APP_ID, ASSET_ROLE_RATING, ASSET_ROLE_ICON, ASSET_ROLE_COVER_IMAGE, ASSET_ROLE_BACKGROUND_COLOR, ASSET_ROLE_ACCENT_COLOR, ASSET_ROLE_REQUIRE_LOGO, ASSET_ROLE_REQUIRE_IMAGE, ASSET_ROLE_ENABLE_ASSET_ENHANCEMENTS) | Optional. The role of this asset for the creative. Values: ASSET_ROLE_UNSPECIFIED - Asset role is not specified or is unknown in this version.; ASSET_ROLE_MAIN - The asset is the main asset of the creative.; ASSET_ROLE_BACKUP - The asset is a backup asset of the creative.; ASSET_ROLE_POLITE_LOAD - The asset is a polite load asset of the creative.; ASSET_ROLE_HEADLINE - Headline of a native creative. The content must be UTF-8 encoded with a length of no more than 25 characters. This role is only supported in the following creative_type: * `CREATIVE_TYPE_NATIVE` * `CREATIVE_TYPE_NATIVE_SITE_SQUARE` * `CREATIVE_TYPE_NATIVE_VIDEO`; ASSET_ROLE_LONG_HEADLINE - Long headline of a native creative. The content must be UTF-8 encoded with a length of no more than 50 characters. This role is only supported in the following creative_type: * `CREATIVE_TYPE_NATIVE` * `CREATIVE_TYPE_NATIVE_SITE_SQUARE` * `CREATIVE_TYPE_NATIVE_VIDEO`; ASSET_ROLE_BODY - Body text of a native creative. The content must be UTF-8 encoded with a length of no more than 90 characters. This role is only supported in the following creative_type: * `CREATIVE_TYPE_NATIVE` * `CREATIVE_TYPE_NATIVE_SITE_SQUARE` * `CREATIVE_TYPE_NATIVE_VIDEO`; ASSET_ROLE_LONG_BODY - Long body text of a native creative. The content must be UTF-8 encoded with a length of no more than 150 characters. This role is only supported in the following creative_type: * `CREATIVE_TYPE_NATIVE` * `CREATIVE_TYPE_NATIVE_SITE_SQUARE` * `CREATIVE_TYPE_NATIVE_VIDEO`; ASSET_ROLE_CAPTION_URL - A short, friendly version of the landing page URL to show in the creative. This URL gives people an idea of where they'll arrive after they click on the creative. The content must be UTF-8 encoded with a length of no more than 30 characters. For example, if the landing page URL is 'http://www.example.com/page', the caption URL can be 'example.com'. The protocol (http://) is optional, but the URL can't contain spaces or special characters. This role is only supported in the following creative_type: * `CREATIVE_TYPE_NATIVE` * `CREATIVE_TYPE_NATIVE_SITE_SQUARE` * `CREATIVE_TYPE_NATIVE_VIDEO`; ASSET_ROLE_CALL_TO_ACTION - The text to use on the call-to-action button of a native creative. The content must be UTF-8 encoded with a length of no more than 15 characters. This role is only supported in the following creative_type: * `CREATIVE_TYPE_NATIVE` * `CREATIVE_TYPE_NATIVE_SITE_SQUARE` * `CREATIVE_TYPE_NATIVE_VIDEO`; ASSET_ROLE_ADVERTISER_NAME - The text that identifies the advertiser or brand name. The content must be UTF-8 encoded with a length of no more than 25 characters. This role is only supported in the following creative_type: * `CREATIVE_TYPE_NATIVE` * `CREATIVE_TYPE_NATIVE_SITE_SQUARE` * `CREATIVE_TYPE_NATIVE_VIDEO`; ASSET_ROLE_PRICE - The purchase price of your app in the Google play store or iOS app store (for example, $5.99). Note that this value is not automatically synced with the actual value listed in the store. It will always be the one provided when save the creative. The content must be UTF-8 encoded with a length of no more than 15 characters. Assets of this role are read-only.; ASSET_ROLE_ANDROID_APP_ID - The ID of an Android app in the Google play store. You can find this ID in the App’s Google Play Store URL after ‘id’. For example, in `https://play.google.com/store/apps/details?id=com.company.appname` the identifier is com.company.appname. Assets of this role are read-only.; ASSET_ROLE_IOS_APP_ID - The ID of an iOS app in the Apple app store. This ID number can be found in the Apple App Store URL as the string of numbers directly after "id". For example, in `https://apps.apple.com/us/app/gmail-email-by-google/id422689480` the ID is 422689480. Assets of this role are read-only.; ASSET_ROLE_RATING - The rating of an app in the Google play store or iOS app store. Note that this value is not automatically synced with the actual rating in the store. It will always be the one provided when save the creative. Assets of this role are read-only.; ASSET_ROLE_ICON - The icon of a creative. This role is only supported and required in the following creative_type: * `CREATIVE_TYPE_NATIVE` * `CREATIVE_TYPE_NATIVE_SITE_SQUARE`; ASSET_ROLE_COVER_IMAGE - The cover image of a native video creative. This role is only supported and required in the following creative_type: * `CREATIVE_TYPE_VIDEO`; ASSET_ROLE_BACKGROUND_COLOR - The main color to use in a creative. This role is only supported and required in the following creative_type: * `CREATIVE_TYPE_ASSET_BASED_CREATIVE`; ASSET_ROLE_ACCENT_COLOR - The accent color to use in a creative. This role is only supported and required in the following creative_type: * `CREATIVE_TYPE_ASSET_BASED_CREATIVE`; ASSET_ROLE_REQUIRE_LOGO - Whether the creative must use a logo asset. This role is only supported and required in the following creative_type: * `CREATIVE_TYPE_ASSET_BASED_CREATIVE`; ASSET_ROLE_REQUIRE_IMAGE - Whether the creative must use an image asset. This role is only supported and required in the following creative_type: * `CREATIVE_TYPE_ASSET_BASED_CREATIVE`; ASSET_ROLE_ENABLE_ASSET_ENHANCEMENTS - Whether asset enhancements can be applied to the creative. This role is only supported and required in the following creative_type: * `CREATIVE_TYPE_ASSET_BASED_CREATIVE` |

### `AudioVideoOffset`

The length an audio or a video has been played.

| Field | Type | Description |
|---|---|---|
| seconds | string (int64) | Optional. The offset in seconds from the start of the audio or video. |
| percentage | string (int64) | Optional. The offset in percentage of the audio or video duration. |

### `CmTrackingAd`

A Campaign Manager 360 tracking ad.

| Field | Type | Description |
|---|---|---|
| cmPlacementId | string (int64) | Optional. The placement ID of the campaign manager 360 tracking Ad. |
| cmCreativeId | string (int64) | Optional. The creative ID of the campaign manager 360 tracking Ad. |
| cmAdId | string (int64) | Optional. The ad ID of the campaign manager 360 tracking Ad. |

### `CounterEvent`

Counter event of the creative.

| Field | Type | Description |
|---|---|---|
| reportingName | string | Required. The name used to identify this counter event in reports. |
| name | string | Required. The name of the counter event. |

### `Dimensions`

Dimensions.

| Field | Type | Description |
|---|---|---|
| heightPixels | integer (int32) | The height in pixels. |
| widthPixels | integer (int32) | The width in pixels. |

### `ExitEvent`

Exit event of the creative.

| Field | Type | Description |
|---|---|---|
| reportingName | string | Optional. The name used to identify this event in reports. Leave it empty or unset for creatives containing image assets only. |
| type | string enum(EXIT_EVENT_TYPE_UNSPECIFIED, EXIT_EVENT_TYPE_DEFAULT, EXIT_EVENT_TYPE_BACKUP) | Required. The type of the exit event. Values: EXIT_EVENT_TYPE_UNSPECIFIED - Exit event type is not specified or is unknown in this version.; EXIT_EVENT_TYPE_DEFAULT - The exit event is the default one.; EXIT_EVENT_TYPE_BACKUP - The exit event is a backup exit event. There could be multiple backup exit events in a creative. |
| name | string | Optional. The name of the click tag of the exit event. The name must be unique within one creative. Leave it empty or unset for creatives containing image assets only. |
| url | string | Required. The click through URL of the exit event. This is required when type is: * `EXIT_EVENT_TYPE_DEFAULT` * `EXIT_EVENT_TYPE_BACKUP` |

### `ObaIcon`

OBA Icon for a Creative

| Field | Type | Description |
|---|---|---|
| landingPageUrl | string | Required. The landing page URL of the OBA icon. Only URLs of the following domains are allowed: * `https://info.evidon.com` * `https://l.betrad.com` |
| viewTrackingUrl | string | Required. The view tracking URL of the OBA icon. Only URLs of the following domains are allowed: * `https://info.evidon.com` * `https://l.betrad.com` |
| program | string | Optional. The program of the OBA icon. For example: “AdChoices”. |
| clickTrackingUrl | string | Required. The click tracking URL of the OBA icon. Only URLs of the following domains are allowed: * `https://info.evidon.com` * `https://l.betrad.com` |
| dimensions | `Dimensions` | Optional. The dimensions of the OBA icon. |
| position | string enum(OBA_ICON_POSITION_UNSPECIFIED, OBA_ICON_POSITION_UPPER_RIGHT, OBA_ICON_POSITION_UPPER_LEFT, OBA_ICON_POSITION_LOWER_RIGHT, OBA_ICON_POSITION_LOWER_LEFT) | Optional. The position of the OBA icon on the creative. Values: OBA_ICON_POSITION_UNSPECIFIED - The OBA icon position is not specified.; OBA_ICON_POSITION_UPPER_RIGHT - At the upper right side of the creative.; OBA_ICON_POSITION_UPPER_LEFT - At the upper left side of the creative.; OBA_ICON_POSITION_LOWER_RIGHT - At the lower right side of the creative.; OBA_ICON_POSITION_LOWER_LEFT - At the lower left side of the creative. |
| resourceUrl | string | Optional. The URL of the OBA icon resource. |
| resourceMimeType | string | Optional. The MIME type of the OBA icon resource. |

### `ReviewStatusInfo`

Review statuses for the creative.

| Field | Type | Description |
|---|---|---|
| exchangeReviewStatuses | array<`ExchangeReviewStatus`> | Exchange review statuses for the creative. |
| contentAndPolicyReviewStatus | string enum(REVIEW_STATUS_UNSPECIFIED, REVIEW_STATUS_APPROVED, REVIEW_STATUS_REJECTED, REVIEW_STATUS_PENDING) | Content and policy review status for the creative. Values: REVIEW_STATUS_UNSPECIFIED - Type value is not specified or is unknown in this version.; REVIEW_STATUS_APPROVED - The creative is approved.; REVIEW_STATUS_REJECTED - The creative is rejected.; REVIEW_STATUS_PENDING - The creative is pending review. |
| approvalStatus | string enum(APPROVAL_STATUS_UNSPECIFIED, APPROVAL_STATUS_PENDING_NOT_SERVABLE, APPROVAL_STATUS_PENDING_SERVABLE, APPROVAL_STATUS_APPROVED_SERVABLE, APPROVAL_STATUS_REJECTED_NOT_SERVABLE) | Represents the basic approval needed for a creative to begin serving. Summary of creative_and_landing_page_review_status and content_and_policy_review_status. Values: APPROVAL_STATUS_UNSPECIFIED - Type value is not specified or is unknown in this version.; APPROVAL_STATUS_PENDING_NOT_SERVABLE - The creative is still under review and not servable.; APPROVAL_STATUS_PENDING_SERVABLE - The creative has passed creative & landing page review and is servable, but is awaiting additional content & policy review.; APPROVAL_STATUS_APPROVED_SERVABLE - Both creative & landing page review and content & policy review are approved. The creative is servable.; APPROVAL_STATUS_REJECTED_NOT_SERVABLE - There is an issue with the creative that must be fixed before it can serve. |
| creativeAndLandingPageReviewStatus | string enum(REVIEW_STATUS_UNSPECIFIED, REVIEW_STATUS_APPROVED, REVIEW_STATUS_REJECTED, REVIEW_STATUS_PENDING) | Creative and landing page review status for the creative. Values: REVIEW_STATUS_UNSPECIFIED - Type value is not specified or is unknown in this version.; REVIEW_STATUS_APPROVED - The creative is approved.; REVIEW_STATUS_REJECTED - The creative is rejected.; REVIEW_STATUS_PENDING - The creative is pending review. |

### `ThirdPartyUrl`

Tracking URLs from third parties to track interactions with an audio or a video creative.

| Field | Type | Description |
|---|---|---|
| url | string | Optional. Tracking URL used to track the interaction. Provide a URL with optional path or query string, beginning with `https:`. For example, `https://www.example.com/path` |
| type | string enum(THIRD_PARTY_URL_TYPE_UNSPECIFIED, THIRD_PARTY_URL_TYPE_IMPRESSION, THIRD_PARTY_URL_TYPE_CLICK_TRACKING, THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_START, THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_FIRST_QUARTILE, THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_MIDPOINT, THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_THIRD_QUARTILE, THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_COMPLETE, THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_MUTE, THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_PAUSE, THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_REWIND, THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_FULLSCREEN, THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_STOP, THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_CUSTOM, THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_SKIP, THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_PROGRESS) | Optional. The type of interaction needs to be tracked by the tracking URL Values: THIRD_PARTY_URL_TYPE_UNSPECIFIED - The type of third-party URL is unspecified or is unknown in this version.; THIRD_PARTY_URL_TYPE_IMPRESSION - Used to count impressions of the creative after the audio or video buffering is complete.; THIRD_PARTY_URL_TYPE_CLICK_TRACKING - Used to track user clicks on the audio or video.; THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_START - Used to track the number of times a user starts the audio or video.; THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_FIRST_QUARTILE - Used to track the number of times the audio or video plays to 25% of its length.; THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_MIDPOINT - Used to track the number of times the audio or video plays to 50% of its length.; THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_THIRD_QUARTILE - Used to track the number of times the audio or video plays to 75% of its length.; THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_COMPLETE - Used to track the number of times the audio or video plays to the end.; THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_MUTE - Used to track the number of times a user mutes the audio or video.; THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_PAUSE - Used to track the number of times a user pauses the audio or video.; THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_REWIND - Used to track the number of times a user replays the audio or video.; THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_FULLSCREEN - Used to track the number of times a user expands the player to full-screen size.; THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_STOP - Used to track the number of times a user stops the audio or video.; THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_CUSTOM - Used to track the number of times a user performs a custom click, such as clicking on a video hot spot.; THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_SKIP - Used to track the number of times the audio or video was skipped.; THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_PROGRESS - Used to track the number of times the audio or video plays to an offset determined by the progress_offset. |

### `TimerEvent`

Timer event of the creative.

| Field | Type | Description |
|---|---|---|
| reportingName | string | Required. The name used to identify this timer event in reports. |
| name | string | Required. The name of the timer event. |

### `Transcode`

Represents information about the transcoded audio or video file.

| Field | Type | Description |
|---|---|---|
| dimensions | `Dimensions` | Optional. The dimensions of the transcoded video. |
| audioSampleRateHz | string (int64) | Optional. The sample rate for the audio stream of the transcoded video, or the sample rate for the transcoded audio, in hertz. |
| mimeType | string | Optional. The MIME type of the transcoded file. |
| audioBitRateKbps | string (int64) | Optional. The bit rate for the audio stream of the transcoded video, or the bit rate for the transcoded audio, in kilobits per second. |
| name | string | Optional. The name of the transcoded file. |
| bitRateKbps | string (int64) | Optional. The transcoding bit rate of the transcoded video, in kilobits per second. |
| transcoded | boolean | Optional. Indicates if the transcoding was successful. |
| frameRate | number (float) | Optional. The frame rate of the transcoded video, in frames per second. |
| fileSizeBytes | string (int64) | Optional. The size of the transcoded file, in bytes. |

### `UniversalAdId`

A creative identifier provided by a registry that is unique across all platforms. This is part of the VAST 4.0 standard.

| Field | Type | Description |
|---|---|---|
| registry | string enum(UNIVERSAL_AD_REGISTRY_UNSPECIFIED, UNIVERSAL_AD_REGISTRY_OTHER, UNIVERSAL_AD_REGISTRY_AD_ID, UNIVERSAL_AD_REGISTRY_CLEARCAST, UNIVERSAL_AD_REGISTRY_DV360, UNIVERSAL_AD_REGISTRY_CM) | Optional. The registry provides unique creative identifiers. Values: UNIVERSAL_AD_REGISTRY_UNSPECIFIED - The Universal Ad registry is unspecified or is unknown in this version.; UNIVERSAL_AD_REGISTRY_OTHER - Use a custom provider to provide the Universal Ad ID.; UNIVERSAL_AD_REGISTRY_AD_ID - Use Ad-ID to provide the Universal Ad ID.; UNIVERSAL_AD_REGISTRY_CLEARCAST - Use clearcast.co.uk to provide the Universal Ad ID.; UNIVERSAL_AD_REGISTRY_DV360 - Use Display & Video 360 to provide the Universal Ad ID.; UNIVERSAL_AD_REGISTRY_CM - Use Campaign Manager 360 to provide the Universal Ad ID. |
| id | string | Optional. The unique creative identifier. |

### `Asset`

A single asset.

| Field | Type | Description |
|---|---|---|
| mediaId | string (int64) | Media ID of the uploaded asset. This is a unique identifier for the asset. This ID can be passed to other API calls, e.g. CreateCreative to associate the asset with a creative. The Media ID space updated on **April 5, 2023**. Update media IDs cached before **April 5, 2023** by retrieving the new media ID from associated creative resources or re-uploading the asset. |
| content | string | The asset content. For uploaded assets, the content is the serving path. |

### `ExchangeReviewStatus`

Exchange review status for the creative.

| Field | Type | Description |
|---|---|---|
| status | string enum(REVIEW_STATUS_UNSPECIFIED, REVIEW_STATUS_APPROVED, REVIEW_STATUS_REJECTED, REVIEW_STATUS_PENDING) | Status of the exchange review. Values: REVIEW_STATUS_UNSPECIFIED - Type value is not specified or is unknown in this version.; REVIEW_STATUS_APPROVED - The creative is approved.; REVIEW_STATUS_REJECTED - The creative is rejected.; REVIEW_STATUS_PENDING - The creative is pending review. |
| exchange | string enum(EXCHANGE_UNSPECIFIED, EXCHANGE_GOOGLE_AD_MANAGER, EXCHANGE_APPNEXUS, EXCHANGE_BRIGHTROLL, EXCHANGE_ADFORM, EXCHANGE_ADMETA, EXCHANGE_ADMIXER, EXCHANGE_ADSMOGO, EXCHANGE_ADSWIZZ, EXCHANGE_BIDSWITCH, EXCHANGE_BRIGHTROLL_DISPLAY, EXCHANGE_CADREON, EXCHANGE_DAILYMOTION, EXCHANGE_FIVE, EXCHANGE_FLUCT, EXCHANGE_FREEWHEEL, EXCHANGE_GENIEE, EXCHANGE_GUMGUM, EXCHANGE_IMOBILE, EXCHANGE_IBILLBOARD, EXCHANGE_IMPROVE_DIGITAL, EXCHANGE_INDEX, EXCHANGE_KARGO, EXCHANGE_MICROAD, EXCHANGE_MOPUB, EXCHANGE_NEND, EXCHANGE_ONE_BY_AOL_DISPLAY, EXCHANGE_ONE_BY_AOL_MOBILE, EXCHANGE_ONE_BY_AOL_VIDEO, EXCHANGE_OOYALA, EXCHANGE_OPENX, EXCHANGE_PERMODO, EXCHANGE_PLATFORMONE, EXCHANGE_PLATFORMID, EXCHANGE_PUBMATIC, EXCHANGE_PULSEPOINT, EXCHANGE_REVENUEMAX, EXCHANGE_RUBICON, EXCHANGE_SMARTCLIP, EXCHANGE_SMARTRTB, EXCHANGE_SMARTSTREAMTV, EXCHANGE_SOVRN, EXCHANGE_SPOTXCHANGE, EXCHANGE_STROER, EXCHANGE_TEADSTV, EXCHANGE_TELARIA, EXCHANGE_TVN, EXCHANGE_UNITED, EXCHANGE_YIELDLAB, EXCHANGE_YIELDMO, EXCHANGE_UNRULYX, EXCHANGE_OPEN8, EXCHANGE_TRITON, EXCHANGE_TRIPLELIFT, EXCHANGE_TABOOLA, EXCHANGE_INMOBI, EXCHANGE_SMAATO, EXCHANGE_AJA, EXCHANGE_SUPERSHIP, EXCHANGE_NEXSTAR_DIGITAL, EXCHANGE_WAZE, EXCHANGE_SOUNDCAST, EXCHANGE_SHARETHROUGH, EXCHANGE_FYBER, EXCHANGE_RED_FOR_PUBLISHERS, EXCHANGE_MEDIANET, EXCHANGE_TAPJOY, EXCHANGE_VISTAR, EXCHANGE_DAX, EXCHANGE_JCD, EXCHANGE_PLACE_EXCHANGE, EXCHANGE_APPLOVIN, EXCHANGE_CONNATIX, EXCHANGE_RESET_DIGITAL, EXCHANGE_HIVESTACK, EXCHANGE_DRAX, EXCHANGE_APPLOVIN_GBID, EXCHANGE_FYBER_GBID, EXCHANGE_UNITY_GBID, EXCHANGE_CHARTBOOST_GBID, EXCHANGE_ADMOST_GBID, EXCHANGE_TOPON_GBID, EXCHANGE_NETFLIX, EXCHANGE_CORE, EXCHANGE_COMMERCE_GRID, EXCHANGE_SPOTIFY, EXCHANGE_TUBI, EXCHANGE_SNAP, EXCHANGE_CADENT, EXCHANGE_EXTE) | The exchange reviewing the creative. Values: EXCHANGE_UNSPECIFIED - Exchange is not specified or is unknown in this version.; EXCHANGE_GOOGLE_AD_MANAGER - Google Ad Manager.; EXCHANGE_APPNEXUS - AppNexus.; EXCHANGE_BRIGHTROLL - BrightRoll Exchange for Video from Yahoo!.; EXCHANGE_ADFORM - Adform.; EXCHANGE_ADMETA - Admeta.; EXCHANGE_ADMIXER - Admixer.; EXCHANGE_ADSMOGO - AdsMogo.; EXCHANGE_ADSWIZZ - AdsWizz.; EXCHANGE_BIDSWITCH - BidSwitch.; EXCHANGE_BRIGHTROLL_DISPLAY - BrightRoll Exchange for Display from Yahoo!.; EXCHANGE_CADREON - Cadreon.; EXCHANGE_DAILYMOTION - Dailymotion.; EXCHANGE_FIVE - Five.; EXCHANGE_FLUCT - Fluct.; EXCHANGE_FREEWHEEL - FreeWheel SSP.; EXCHANGE_GENIEE - Geniee.; EXCHANGE_GUMGUM - GumGum.; EXCHANGE_IMOBILE - i-mobile.; EXCHANGE_IBILLBOARD - iBILLBOARD.; EXCHANGE_IMPROVE_DIGITAL - Improve Digital.; EXCHANGE_INDEX - Index Exchange.; EXCHANGE_KARGO - Kargo.; EXCHANGE_MICROAD - MicroAd.; EXCHANGE_MOPUB - MoPub.; EXCHANGE_NEND - Nend.; EXCHANGE_ONE_BY_AOL_DISPLAY - ONE by AOL: Display Market Place.; EXCHANGE_ONE_BY_AOL_MOBILE - ONE by AOL: Mobile.; EXCHANGE_ONE_BY_AOL_VIDEO - ONE by AOL: Video.; EXCHANGE_OOYALA - Ooyala.; EXCHANGE_OPENX - OpenX.; EXCHANGE_PERMODO - Permodo.; EXCHANGE_PLATFORMONE - Platform One.; EXCHANGE_PLATFORMID - PlatformId.; EXCHANGE_PUBMATIC - PubMatic.; EXCHANGE_PULSEPOINT - PulsePoint.; EXCHANGE_REVENUEMAX - RevenueMax.; EXCHANGE_RUBICON - Rubicon.; EXCHANGE_SMARTCLIP - SmartClip.; EXCHANGE_SMARTRTB - SmartRTB+.; EXCHANGE_SMARTSTREAMTV - SmartstreamTv.; EXCHANGE_SOVRN - Sovrn.; EXCHANGE_SPOTXCHANGE - SpotXchange.; EXCHANGE_STROER - Ströer SSP.; EXCHANGE_TEADSTV - TeadsTv.; EXCHANGE_TELARIA - Telaria.; EXCHANGE_TVN - TVN.; EXCHANGE_UNITED - United.; EXCHANGE_YIELDLAB - Yieldlab.; EXCHANGE_YIELDMO - Yieldmo.; EXCHANGE_UNRULYX - UnrulyX.; EXCHANGE_OPEN8 - Open8.; EXCHANGE_TRITON - Triton.; EXCHANGE_TRIPLELIFT - TripleLift.; EXCHANGE_TABOOLA - Taboola.; EXCHANGE_INMOBI - InMobi.; EXCHANGE_SMAATO - Smaato.; EXCHANGE_AJA - Aja.; EXCHANGE_SUPERSHIP - Supership.; EXCHANGE_NEXSTAR_DIGITAL - Nexstar Digital.; EXCHANGE_WAZE - Waze.; EXCHANGE_SOUNDCAST - SoundCast.; EXCHANGE_SHARETHROUGH - Sharethrough.; EXCHANGE_FYBER - Fyber.; EXCHANGE_RED_FOR_PUBLISHERS - Red For Publishers.; EXCHANGE_MEDIANET - Media.net.; EXCHANGE_TAPJOY - Tapjoy.; EXCHANGE_VISTAR - Vistar.; EXCHANGE_DAX - DAX.; EXCHANGE_JCD - JCD.; EXCHANGE_PLACE_EXCHANGE - Place Exchange.; EXCHANGE_APPLOVIN - AppLovin.; EXCHANGE_CONNATIX - Connatix.; EXCHANGE_RESET_DIGITAL - Reset Digital.; EXCHANGE_HIVESTACK - Hivestack.; EXCHANGE_DRAX - Drax.; EXCHANGE_APPLOVIN_GBID - AppLovin MAX.; EXCHANGE_FYBER_GBID - DT Fairbid.; EXCHANGE_UNITY_GBID - Unity LevelPlay.; EXCHANGE_CHARTBOOST_GBID - Chartboost Mediation.; EXCHANGE_ADMOST_GBID - AdMost.; EXCHANGE_TOPON_GBID - TopOn.; EXCHANGE_NETFLIX - Netflix.; EXCHANGE_CORE - Core.; EXCHANGE_COMMERCE_GRID - Commerce Grid.; EXCHANGE_SPOTIFY - Spotify.; EXCHANGE_TUBI - Tubi.; EXCHANGE_SNAP - Snap.; EXCHANGE_CADENT - Cadent.; EXCHANGE_EXTE - Exte. |

