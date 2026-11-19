# Ad Group

> Source: Google Ads API v26 REST Discovery document (https://googleads.googleapis.com/$discovery/rest?version=v26) and Shopping ads guide (https://developers.google.com/google-ads/api/docs/shopping-ads/overview). Fetched 2026-11-19.

Resource schema: `AdGroup`. Read data via `GoogleAdsService.Search`/`SearchStream` (see google_ads_service.md).

---

## customers.adGroups.mutate

`POST https://googleads.googleapis.com/v26/customers/{+customerId}/adGroups:mutate`

Creates, updates, or removes ad groups. Operation statuses are returned. List of thrown errors: AdGroupError AdxError AuthenticationError AuthorizationError BiddingError BiddingStrategyError DatabaseError DateError DistinctError FieldError FieldMaskError HeaderError IdError InternalError ListOperationError MultiplierError MutateError NewResourceCreationError NotEmptyError NullError OperationAccessDeniedError OperatorError QuotaError RangeError RequestError ResourceCountLimitExceededError SettingError SizeLimitError StringFormatError StringLengthError UrlFieldError

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| customerId | path | string | yes | Required. The ID of the customer whose ad groups are being modified. |

**Request body**: `MutateAdGroupsRequest`

**Response**: `MutateAdGroupsResponse`

---

## Schemas

### `AdGroup`

An ad group.

| Field | Type | Description |
|---|---|---|
| finalUrlSuffix | string | URL template for appending params to Final URL. |
| cpvBidMicros | string (int64) | The CPV (cost-per-view) bid. |
| targetCpvMicros | string (int64) | Average amount in micros that the advertiser is willing to pay for every ad view. |
| baseAdGroup | string | Output only. For draft or experiment ad groups, this field is the resource name of the base ad group from which this ad group was created. If a draft or experiment ad group does not have a base ad group, then this field is null. For base ad groups, this field equals the ad group resource name. This field is read-only. |
| resourceName | string | Immutable. The resource name of the ad group. Ad group resource names have the form: `customers/{customer_id}/adGroups/{ad_group_id}` |
| effectiveCpcBidMicros | string (int64) | Output only. Value will be same as that of the CPC (cost-per-click) bid value when the bidding strategy is one of manual cpc, enhanced cpc, page one promoted or target outrank share, otherwise the value will be null. |
| adRotationMode | string enum(UNSPECIFIED, UNKNOWN, OPTIMIZE, ROTATE_FOREVER) | The ad rotation mode of the ad group. Values: UNSPECIFIED - The ad rotation mode has not been specified.; UNKNOWN - The received value is not known in this version. This is a response-only value.; OPTIMIZE - Optimize ad group ads based on clicks or conversions.; ROTATE_FOREVER - Rotate evenly forever. |
| targetingSetting | `TargetingSetting` | Setting for targeting related features. |
| effectiveTargetCpc | string (int64) | Output only. The effective target CPC (cost-per-click). This field is read-only. |
| targetCpcMicros | string (int64) | Average amount in micros that the advertiser is willing to pay for every ad click. Overrides the target CPC configured at the campaign level. |
| trackingUrlTemplate | string | The URL template for constructing a tracking URL. |
| effectiveTargetRoas | number (double) | Output only. The effective target ROAS (return-on-ad-spend). This field is read-only. |
| excludedParentAssetSetTypes | array<string enum(UNSPECIFIED, UNKNOWN, PAGE_FEED, DYNAMIC_EDUCATION, MERCHANT_CENTER_FEED, DYNAMIC_REAL_ESTATE, DYNAMIC_CUSTOM, DYNAMIC_HOTELS_AND_RENTALS, DYNAMIC_FLIGHTS, DYNAMIC_TRAVEL, DYNAMIC_LOCAL, DYNAMIC_JOBS, LOCATION_SYNC, BUSINESS_PROFILE_DYNAMIC_LOCATION_GROUP, CHAIN_DYNAMIC_LOCATION_GROUP, STATIC_LOCATION_GROUP, HOTEL_PROPERTY, TRAVEL_FEED)> | The asset set types that should be excluded from this ad group. Asset set links with these types will not be inherited by this ad group from the upper levels. Location group types (GMB_DYNAMIC_LOCATION_GROUP, CHAIN_DYNAMIC_LOCATION_GROUP, and STATIC_LOCATION_GROUP) are child types of LOCATION_SYNC. Therefore, if LOCATION_SYNC is set for this field, all location group asset sets are not allowed to be linked to this ad group, and all Location Extension (LE) and Affiliate Location Extensions (ALE) will not be served under this ad group. Only LOCATION_SYNC is currently supported. |
| videoAdGroupSettings | `AdGroup_VideoAdGroupSettings` | Settings for video ad groups. |
| id | string (int64) | Output only. The ID of the ad group. |
| primaryStatus | string enum(UNSPECIFIED, UNKNOWN, ELIGIBLE, PAUSED, REMOVED, PENDING, NOT_ELIGIBLE, LIMITED) | Output only. Provides aggregated view into why an ad group is not serving or not serving optimally. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; ELIGIBLE - The ad group is eligible to serve.; PAUSED - The ad group is paused.; REMOVED - The ad group is removed.; PENDING - The ad group may serve in the future.; NOT_ELIGIBLE - The ad group is not eligible to serve.; LIMITED - The ad group has limited servability. |
| effectiveTargetCpcSource | string enum(UNSPECIFIED, UNKNOWN, CAMPAIGN_BIDDING_STRATEGY, AD_GROUP, AD_GROUP_CRITERION) | Output only. Source of the effective target CPC. This field is read-only. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; CAMPAIGN_BIDDING_STRATEGY - Effective bid or target is inherited from campaign bidding strategy.; AD_GROUP - The bid or target is defined on the ad group.; AD_GROUP_CRITERION - The bid or target is defined on the ad group criterion. |
| percentCpcBidMicros | string (int64) | The percent cpc bid amount, expressed as a fraction of the advertised price for some good or service. The valid range for the fraction is [0,1) and the value stored here is 1,000,000 * [fraction]. |
| urlCustomParameters | array<`CustomParameter`> | The list of mappings used to substitute custom parameter tags in a `tracking_url_template`, `final_urls`, or `mobile_final_urls`. |
| cpcBidMicros | string (int64) | The maximum CPC (cost-per-click) bid. This field is used when the ad group's effective bidding strategy is Manual CPC. This field is not applicable and will be ignored if the ad group's campaign is using a portfolio bidding strategy. |
| primaryStatusReasons | array<string enum(UNSPECIFIED, UNKNOWN, CAMPAIGN_REMOVED, CAMPAIGN_PAUSED, CAMPAIGN_PENDING, CAMPAIGN_ENDED, AD_GROUP_PAUSED, AD_GROUP_REMOVED, AD_GROUP_INCOMPLETE, KEYWORDS_PAUSED, NO_KEYWORDS, AD_GROUP_ADS_PAUSED, NO_AD_GROUP_ADS, HAS_ADS_DISAPPROVED, HAS_ADS_LIMITED_BY_POLICY, MOST_ADS_UNDER_REVIEW, CAMPAIGN_DRAFT, AD_GROUP_PAUSED_DUE_TO_LOW_ACTIVITY)> | Output only. Provides reasons for why an ad group is not serving or not serving optimally. |
| targetCpmMicros | string (int64) | Average amount in micros that the advertiser is willing to pay for every thousand times the ad is shown. |
| optimizedTargetingEnabled | boolean | True if optimized targeting is enabled. Optimized Targeting is the replacement for Audience Expansion. |
| fixedCpmMicros | string (int64) | The fixed amount in micros that the advertiser pays for every thousand impressions of the ad. |
| verticalAdsFormatSetting | `AdGroup_VerticalAdsFormatSetting` | Vertical ads setting feature to enable/disable ad group format controls in search campaigns. This setting requires AiMaxAdGroupSetting to be enabled and a travel feed to be attached to the campaign. |
| effectiveTargetCpaMicros | string (int64) | Output only. The effective target CPA (cost-per-acquisition). This field is read-only. |
| excludedParentAssetFieldTypes | array<string enum(UNSPECIFIED, UNKNOWN, HEADLINE, DESCRIPTION, MANDATORY_AD_TEXT, MARKETING_IMAGE, MEDIA_BUNDLE, YOUTUBE_VIDEO, BOOK_ON_GOOGLE, LEAD_FORM, PROMOTION, CALLOUT, STRUCTURED_SNIPPET, SITELINK, MOBILE_APP, HOTEL_CALLOUT, CALL, PRICE, LONG_HEADLINE, BUSINESS_NAME, SQUARE_MARKETING_IMAGE, PORTRAIT_MARKETING_IMAGE, LOGO, LANDSCAPE_LOGO, VIDEO, CALL_TO_ACTION_SELECTION, AD_IMAGE, BUSINESS_LOGO, HOTEL_PROPERTY, DEMAND_GEN_CAROUSEL_CARD, BUSINESS_MESSAGE, TALL_PORTRAIT_MARKETING_IMAGE, RELATED_YOUTUBE_VIDEOS, LANDING_PAGE_PREVIEW, LONG_DESCRIPTION, CALL_TO_ACTION, CLASSIC_DISPLAY_IMAGE, TEXT_DISCLAIMER)> | The asset field types that should be excluded from this ad group. Asset links with these field types will not be inherited by this ad group from the upper levels. |
| effectiveTargetCpaSource | string enum(UNSPECIFIED, UNKNOWN, CAMPAIGN_BIDDING_STRATEGY, AD_GROUP, AD_GROUP_CRITERION) | Output only. Source of the effective target CPA. This field is read-only. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; CAMPAIGN_BIDDING_STRATEGY - Effective bid or target is inherited from campaign bidding strategy.; AD_GROUP - The bid or target is defined on the ad group.; AD_GROUP_CRITERION - The bid or target is defined on the ad group criterion. |
| targetCpaMicros | string (int64) | The target CPA (cost-per-acquisition). If the ad group's campaign bidding strategy is TargetCpa or MaximizeConversions (with its target_cpa field set), then this field overrides the target CPA specified in the campaign's bidding strategy. Otherwise, this value is ignored. |
| effectiveTargetRoasSource | string enum(UNSPECIFIED, UNKNOWN, CAMPAIGN_BIDDING_STRATEGY, AD_GROUP, AD_GROUP_CRITERION) | Output only. Source of the effective target ROAS. This field is read-only. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; CAMPAIGN_BIDDING_STRATEGY - Effective bid or target is inherited from campaign bidding strategy.; AD_GROUP - The bid or target is defined on the ad group.; AD_GROUP_CRITERION - The bid or target is defined on the ad group criterion. |
| audienceSetting | `AdGroup_AudienceSetting` | Immutable. Setting for audience related features. |
| demandGenAdGroupSettings | `AdGroup_DemandGenAdGroupSettings` | Settings for Demand Gen ad groups. |
| labels | array<string> | Output only. The resource names of labels attached to this ad group. |
| excludeDemographicExpansion | boolean | When this value is true, demographics will be excluded from the types of targeting which are expanded when optimized_targeting_enabled is true. When optimized_targeting_enabled is false, this field is ignored. Default is false. |
| aiMaxAdGroupSetting | `AdGroup_AiMaxAdGroupSetting` | Settings for AI Max feature in standard search adgroups. |
| displayCustomBidDimension | string enum(UNSPECIFIED, UNKNOWN, KEYWORD, AUDIENCE, TOPIC, GENDER, AGE_RANGE, PLACEMENT, PARENTAL_STATUS, INCOME_RANGE) | Lets advertisers specify a targeting dimension on which to place absolute bids. This is only applicable for campaigns that target only the display network and not search. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; KEYWORD - Keyword criteria, for example, 'mars cruise'. KEYWORD may be used as a custom bid dimension. Keywords are always a targeting dimension, so may not be set as a target "ALL" dimension with TargetRestriction.; AUDIENCE - Audience criteria, which include user list, user interest, custom affinity, and custom in market.; TOPIC - Topic criteria for targeting categories of content, for example, 'category::Animals>Pets' Used for Display and Video targeting.; GENDER - Criteria for targeting gender.; AGE_RANGE - Criteria for targeting age ranges.; PLACEMENT - Placement criteria, which include websites like 'www.flowers4sale.com', as well as mobile applications, mobile app categories, YouTube videos, and YouTube channels.; PARENTAL_STATUS - Criteria for parental status targeting.; INCOME_RANGE - Criteria for income range targeting. |
| status | string enum(UNSPECIFIED, UNKNOWN, ENABLED, PAUSED, REMOVED) | The status of the ad group. Values: UNSPECIFIED - The status has not been specified.; UNKNOWN - The received value is not known in this version. This is a response-only value.; ENABLED - The ad group is enabled.; PAUSED - The ad group is paused.; REMOVED - The ad group is removed. |
| campaign | string | Immutable. The campaign to which the ad group belongs. |
| type | string enum(UNSPECIFIED, UNKNOWN, SEARCH_STANDARD, DISPLAY_STANDARD, SHOPPING_PRODUCT_ADS, HOTEL_ADS, SHOPPING_SMART_ADS, VIDEO_BUMPER, VIDEO_TRUE_VIEW_IN_STREAM, VIDEO_TRUE_VIEW_IN_DISPLAY, VIDEO_NON_SKIPPABLE_IN_STREAM, SEARCH_DYNAMIC_ADS, SHOPPING_COMPARISON_LISTING_ADS, PROMOTED_HOTEL_ADS, VIDEO_RESPONSIVE, VIDEO_EFFICIENT_REACH, SMART_CAMPAIGN_ADS, TRAVEL_ADS, YOUTUBE_AUDIO) | Immutable. The type of the ad group. Values: UNSPECIFIED - The type has not been specified.; UNKNOWN - The received value is not known in this version. This is a response-only value.; SEARCH_STANDARD - The default ad group type for Search campaigns.; DISPLAY_STANDARD - The default ad group type for Display campaigns.; SHOPPING_PRODUCT_ADS - The ad group type for Shopping campaigns serving standard product ads.; HOTEL_ADS - The default ad group type for Hotel campaigns.; SHOPPING_SMART_ADS - The type for ad groups in Smart Shopping campaigns. New Smart Shopping campaigns cannot be created.; VIDEO_BUMPER - Short unskippable in-stream video ads.; VIDEO_TRUE_VIEW_IN_STREAM - TrueView (skippable) in-stream video ads.; VIDEO_TRUE_VIEW_IN_DISPLAY - TrueView in-display video ads.; VIDEO_NON_SKIPPABLE_IN_STREAM - Unskippable in-stream video ads.; SEARCH_DYNAMIC_ADS - Ad group type for Dynamic Search Ads ad groups.; SHOPPING_COMPARISON_LISTING_ADS - The type for ad groups in Shopping Comparison Listing campaigns.; PROMOTED_HOTEL_ADS - The ad group type for Promoted Hotel ad groups.; VIDEO_RESPONSIVE - Video responsive ad groups.; VIDEO_EFFICIENT_REACH - Video efficient reach ad groups.; SMART_CAMPAIGN_ADS - Ad group type for Smart campaigns.; TRAVEL_ADS - Ad group type for Travel campaigns.; YOUTUBE_AUDIO - Ad group type for YouTube Audio campaigns. |
| targetRoas | number (double) | The target ROAS (return-on-ad-spend) for this ad group. This field lets you override the target ROAS specified in the campaign's bidding strategy, but only if the campaign is using a standard (not portfolio) `TargetRoas` strategy or a standard `MaximizeConversionValue` strategy with its `target_roas` field set. If the campaign is using a portfolio bidding strategy, this field cannot be set and attempting to do so will result in an error. For any other bidding strategies, this value is ignored. To see the actual target ROAS being used by the ad group, considering potential overrides, query the `effective_target_roas` and `effective_target_roas_source` fields. |
| cpmBidMicros | string (int64) | The maximum CPM (cost-per-thousand viewable impressions) bid. |
| name | string | The name of the ad group. This field is required and should not be empty when creating new ad groups. It must contain fewer than 255 UTF-8 full-width characters. It must not contain any null (code point 0x0), NL line feed (code point 0xA) or carriage return (code point 0xD) characters. |

### `MutateAdGroupsRequest`

Request message for AdGroupService.MutateAdGroups.

| Field | Type | Description |
|---|---|---|
| partialFailure | boolean | If true, successful operations will be carried out and invalid operations will return errors. If false, all operations will be carried out in one transaction if and only if they are all valid. Default is false. |
| operations | array<`AdGroupOperation`> | Required. The list of operations to perform on individual ad groups. |
| responseContentType | string enum(UNSPECIFIED, RESOURCE_NAME_ONLY, MUTABLE_RESOURCE) | The response content type setting. Determines whether the mutable resource or just the resource name should be returned post mutation. Values: UNSPECIFIED - Not specified. Will return the resource name only in the response.; RESOURCE_NAME_ONLY - The mutate response will be the resource name.; MUTABLE_RESOURCE - The mutate response will contain the resource name and the resource with mutable fields if possible. Otherwise, only the resource name will be returned. |
| validateOnly | boolean | If true, the request is validated but not executed. Only errors are returned, not results. |

### `MutateAdGroupsResponse`

Response message for an ad group mutate.

| Field | Type | Description |
|---|---|---|
| results | array<`MutateAdGroupResult`> | All results for the mutate. |
| partialFailureError | `GoogleRpc__Status` | Errors that pertain to operation failures in the partial failure mode. Returned only when partial_failure = true and all errors occur inside the operations. If any errors occur outside the operations (for example, auth errors), we return an RPC level error. |

### `CustomParameter`

A mapping that can be used by custom parameter tags in a `tracking_url_template`, `final_urls`, or `mobile_final_urls`.

| Field | Type | Description |
|---|---|---|
| value | string | The value to be substituted. |
| key | string | The key matching the parameter tag name. |

### `TargetingSetting`

Settings for the targeting-related features, at the campaign and ad group levels. For more details about the targeting setting, visit https://support.google.com/google-ads/answer/7365594

| Field | Type | Description |
|---|---|---|
| targetRestrictions | array<`TargetRestriction`> | The per-targeting-dimension setting to restrict the reach of your campaign or ad group. |
| targetRestrictionOperations | array<`TargetRestrictionOperation`> | The list of operations changing the target restrictions. Adding a target restriction with a targeting dimension that already exists causes the existing target restriction to be replaced with the new value. |

### `AdGroup_AiMaxAdGroupSetting`

Settings for AI Max feature in standard search adgroups.

| Field | Type | Description |
|---|---|---|
| disableSearchTermMatching | boolean | Disable search term matching for this adgroup when AI Max is enabled. Search term matching uses broad match, asset-based, and landing page-based technology to improve reach. |

### `AdGroup_AudienceSetting`

Settings for the audience targeting.

| Field | Type | Description |
|---|---|---|
| useAudienceGrouped | boolean | Immutable. If true, this ad group uses an Audience resource for audience targeting. If false, this ad group may use audience segment criteria instead. |

### `AdGroup_DemandGenAdGroupSettings`

Settings for Demand Gen ad groups.

| Field | Type | Description |
|---|---|---|
| channelControls | `AdGroupDemandGenAdGroupSettings_DemandGenChannelControls` | Channel controls for Demand Gen ad groups. |

### `AdGroup_VerticalAdsFormatSetting`

Vertical ads setting feature to enable/disable ad group format controls in search campaigns.

| Field | Type | Description |
|---|---|---|
| disableTextAds | boolean | If true, text ads will be disabled for this ad group. |
| enableBookingLinks | boolean | If true, booking links will be enabled for this ad group. |
| enableVerticalPromotionAds | boolean | If true, vertical promotion ads will be enabled for this ad group. |

### `AdGroup_VideoAdGroupSettings`

Settings for video ad groups.

| Field | Type | Description |
|---|---|---|
| videoAdSequence | `AdGroupVideoAdGroupSettings_VideoAdSequenceStepSetting` | The video ads sequence step settings containing step ID. |

### `AdGroupOperation`

A single operation (create, update, remove) on an ad group.

| Field | Type | Description |
|---|---|---|
| create | `AdGroup` | Create operation: No resource name is expected for the new ad group. |
| updateMask | string (google-fieldmask) | FieldMask that determines which resource fields are modified in an update. |
| update | `AdGroup` | Update operation: The ad group is expected to have a valid resource name. |
| remove | string | Remove operation: A resource name for the removed ad group is expected, in this format: `customers/{customer_id}/adGroups/{ad_group_id}` |

### `MutateAdGroupResult`

The result for the ad group mutate.

| Field | Type | Description |
|---|---|---|
| resourceName | string | Returned for successful operations. |
| adGroup | `AdGroup` | The mutated ad group with only mutable fields after mutate. The field will only be returned when response_content_type is set to "MUTABLE_RESOURCE". |

### `GoogleRpc__Status`

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

| Field | Type | Description |
|---|---|---|
| details | array<map<string, any>> | A list of messages that carry the error details. There is a common set of message types for APIs to use. |
| message | string | A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. |
| code | integer (int32) | The status code, which should be an enum value of google.rpc.Code. |

### `TargetRestriction`

The list of per-targeting-dimension targeting settings.

| Field | Type | Description |
|---|---|---|
| targetingDimension | string enum(UNSPECIFIED, UNKNOWN, KEYWORD, AUDIENCE, TOPIC, GENDER, AGE_RANGE, PLACEMENT, PARENTAL_STATUS, INCOME_RANGE) | The targeting dimension that these settings apply to. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; KEYWORD - Keyword criteria, for example, 'mars cruise'. KEYWORD may be used as a custom bid dimension. Keywords are always a targeting dimension, so may not be set as a target "ALL" dimension with TargetRestriction.; AUDIENCE - Audience criteria, which include user list, user interest, custom affinity, and custom in market.; TOPIC - Topic criteria for targeting categories of content, for example, 'category::Animals>Pets' Used for Display and Video targeting.; GENDER - Criteria for targeting gender.; AGE_RANGE - Criteria for targeting age ranges.; PLACEMENT - Placement criteria, which include websites like 'www.flowers4sale.com', as well as mobile applications, mobile app categories, YouTube videos, and YouTube channels.; PARENTAL_STATUS - Criteria for parental status targeting.; INCOME_RANGE - Criteria for income range targeting. |
| bidOnly | boolean | Indicates whether to restrict your ads to show only for the criteria you have selected for this targeting_dimension, or to target all values for this targeting_dimension and show ads based on your targeting in other TargetingDimensions. A value of `true` means that these criteria will only apply bid modifiers, and not affect targeting. A value of `false` means that these criteria will restrict targeting as well as applying bid modifiers. |

### `TargetRestrictionOperation`

Operation to be performed on a target restriction list in a mutate.

| Field | Type | Description |
|---|---|---|
| value | `TargetRestriction` | The target restriction being added to or removed from the list. |
| operator | string enum(UNSPECIFIED, UNKNOWN, ADD, REMOVE) | Type of list operation to perform. Values: UNSPECIFIED - Unspecified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; ADD - Add the restriction to the existing restrictions.; REMOVE - Remove the restriction from the existing restrictions. |

### `AdGroupDemandGenAdGroupSettings_DemandGenChannelControls`

Channel controls for Demand Gen ad groups.

| Field | Type | Description |
|---|---|---|
| channelStrategy | string enum(UNSPECIFIED, UNKNOWN, ALL_CHANNELS, ALL_OWNED_AND_OPERATED_CHANNELS) | High level channel strategy. Values: UNSPECIFIED - Not specified.; UNKNOWN - The value is unknown in this version.; ALL_CHANNELS - All channels are enabled.; ALL_OWNED_AND_OPERATED_CHANNELS - All Google-owned and operated channels are enabled; third-party channels (e.g., Display) are disabled. |
| selectedChannels | `AdGroupDemandGenAdGroupSettingsDemandGenChannelControls_DemandGenSelectedChannels` | Explicitly selected channels. This field should be set with at least one true value when present. |
| channelConfig | string enum(UNSPECIFIED, UNKNOWN, CHANNEL_STRATEGY, SELECTED_CHANNELS) | Output only. Channel configuration reflecting which field in the oneof is populated. Values: UNSPECIFIED - Not specified.; UNKNOWN - The value is unknown in this version.; CHANNEL_STRATEGY - The channel controls configuration uses a general channel strategy; individual channels are not configured separately.; SELECTED_CHANNELS - The channel controls configuration explicitly defines the selected channels. |

### `AdGroupVideoAdGroupSettings_VideoAdSequenceStepSetting`

The video ads sequence step settings containing step ID.

| Field | Type | Description |
|---|---|---|
| stepId | string (int64) | The ID of this sequence step from an existing `campaign.video_campaign_settings.video_ad_sequence` definition. Only one Ad Group can point to a given `step_id`. |

### `AdGroupDemandGenAdGroupSettingsDemandGenChannelControls_DemandGenSelectedChannels`

Explicitly selected channels for channel controls in Demand Gen ad groups.

| Field | Type | Description |
|---|---|---|
| youtubeInFeed | boolean | Whether to enable ads on the YouTube In-Feed channel. |
| gmail | boolean | Whether to enable ads on the Gmail channel. |
| display | boolean | Whether to enable ads on the Display channel. |
| youtubeShorts | boolean | Whether to enable ads on the YouTube Shorts channel. |
| maps | boolean | Whether to enable ads on the Maps channel. |
| discover | boolean | Whether to enable ads on the Discover channel. |
| youtubeInStream | boolean | Whether to enable ads on the YouTube In-Stream channel. |

