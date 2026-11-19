# Ad Group Ad

> Source: Google Ads API v26 REST Discovery document (https://googleads.googleapis.com/$discovery/rest?version=v26) and Shopping ads guide (https://developers.google.com/google-ads/api/docs/shopping-ads/overview). Fetched 2026-11-19.

Resource schema: `AdGroupAd`. Read data via `GoogleAdsService.Search`/`SearchStream` (see google_ads_service.md).

---

## customers.adGroupAds.mutate

`POST https://googleads.googleapis.com/v26/customers/{+customerId}/adGroupAds:mutate`

Creates, updates, or removes ads. Operation statuses are returned. List of thrown errors: AdCustomizerError AdError AdGroupAdError AdSharingError AdxError AssetError AssetLinkError AuthenticationError AuthorizationError CollectionSizeError ContextError DatabaseError DateError DistinctError FeedAttributeReferenceError FieldError FieldMaskError FunctionError FunctionParsingError HeaderError IdError ImageError InternalError ListOperationError MediaBundleError MediaFileError MutateError NewResourceCreationError NotEmptyError NullError OperationAccessDeniedError OperatorError PolicyFindingError PolicyValidationParameterError PolicyViolationError QuotaError RangeError RequestError ResourceCountLimitExceededError SizeLimitError StringFormatError StringLengthError UrlFieldError

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| customerId | path | string | yes | Required. The ID of the customer whose ads are being modified. |

**Request body**: `MutateAdGroupAdsRequest`

**Response**: `MutateAdGroupAdsResponse`

---

## customers.adGroupAds.removeAutomaticallyCreatedAssets

`POST https://googleads.googleapis.com/v26/{+adGroupAd}:removeAutomaticallyCreatedAssets`

Remove text customization (formerly automatically created assets) from an ad. List of thrown errors: AdError AuthenticationError AuthorizationError AutomaticallyCreatedAssetRemovalError HeaderError InternalError MutateError QuotaError RequestError

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| adGroupAd | path | string | yes | Required. The resource name of the AdGroupAd from which to remove automatically created assets. |

**Request body**: `RemoveAutomaticallyCreatedAssetsRequest`

**Response**: `GoogleProtobuf__Empty`

---

## Schemas

### `AdGroupAd`

An ad group ad.

| Field | Type | Description |
|---|---|---|
| status | string enum(UNSPECIFIED, UNKNOWN, ENABLED, PAUSED, REMOVED) | The status of the ad. Values: UNSPECIFIED - No value has been specified.; UNKNOWN - The received value is not known in this version. This is a response-only value.; ENABLED - The ad group ad is enabled.; PAUSED - The ad group ad is paused.; REMOVED - The ad group ad is removed. |
| policySummary | `AdGroupAdPolicySummary` | Output only. Policy information for the ad. |
| startDateTime | string | The date and time when ad group ad starts serving. This is added on top of the campaign's start date and time, if present, to further restrict the duration of an ad group ad. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format. Only supported for some ad types. |
| adStrength | string enum(UNSPECIFIED, UNKNOWN, PENDING, NO_ADS, POOR, AVERAGE, GOOD, EXCELLENT) | Output only. Overall ad strength for this ad group ad. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; PENDING - The ad strength is currently pending.; NO_ADS - No ads could be generated.; POOR - Poor strength.; AVERAGE - Average strength.; GOOD - Good strength.; EXCELLENT - Excellent strength. |
| primaryStatus | string enum(UNSPECIFIED, UNKNOWN, ELIGIBLE, PAUSED, REMOVED, PENDING, LIMITED, NOT_ELIGIBLE) | Output only. Provides aggregated view into why an ad group ad is not serving or not serving optimally. Values: UNSPECIFIED - No value has been specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; ELIGIBLE - The ad group ad is eligible to serve.; PAUSED - The ad group ad is paused.; REMOVED - The ad group ad is removed.; PENDING - The ad cannot serve now, but may serve later without advertiser action.; LIMITED - The ad group ad is serving in a limited capacity.; NOT_ELIGIBLE - The ad group ad is not eligible to serve. |
| labels | array<string> | Output only. The resource names of labels attached to this ad group ad. |
| primaryStatusReasons | array<string enum(UNSPECIFIED, UNKNOWN, CAMPAIGN_REMOVED, CAMPAIGN_PAUSED, CAMPAIGN_PENDING, CAMPAIGN_ENDED, AD_GROUP_PAUSED, AD_GROUP_REMOVED, AD_GROUP_AD_PAUSED, AD_GROUP_AD_REMOVED, AD_GROUP_AD_DISAPPROVED, AD_GROUP_AD_UNDER_REVIEW, AD_GROUP_AD_POOR_QUALITY, AD_GROUP_AD_NO_ADS, AD_GROUP_AD_APPROVED_LABELED, AD_GROUP_AD_AREA_OF_INTEREST_ONLY, AD_GROUP_AD_UNDER_APPEAL)> | Output only. Provides reasons for why an ad group ad is not serving or not serving optimally. |
| adGroup | string | Immutable. The ad group to which the ad belongs. |
| resourceName | string | Immutable. The resource name of the ad. Ad group ad resource names have the form: `customers/{customer_id}/adGroupAds/{ad_group_id}~{ad_id}` |
| ad | `Ad` | Immutable. The ad. |
| actionItems | array<string> | Output only. A list of recommendations to improve the ad strength. For example, a recommendation could be "Try adding a few more unique headlines or unpinning some assets.". |
| adGroupAdAssetAutomationSettings | array<`AdGroupAdAssetAutomationSetting`> | Settings that control the types of asset automation. See the AssetAutomationTypeEnum documentation for the default opt in/out behavior of each type. |
| endDateTime | string | The last day and time when ad group ad serves. This is added on top of the campaign's end date and time, if present, to further restrict the duration of an ad group ad. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format. Only supported for some ad types. |

### `MutateAdGroupAdsRequest`

Request message for AdGroupAdService.MutateAdGroupAds.

| Field | Type | Description |
|---|---|---|
| operations | array<`AdGroupAdOperation`> | Required. The list of operations to perform on individual ads. |
| validateOnly | boolean | If true, the request is validated but not executed. Only errors are returned, not results. |
| responseContentType | string enum(UNSPECIFIED, RESOURCE_NAME_ONLY, MUTABLE_RESOURCE) | The response content type setting. Determines whether the mutable resource or just the resource name should be returned post mutation. Values: UNSPECIFIED - Not specified. Will return the resource name only in the response.; RESOURCE_NAME_ONLY - The mutate response will be the resource name.; MUTABLE_RESOURCE - The mutate response will contain the resource name and the resource with mutable fields if possible. Otherwise, only the resource name will be returned. |
| partialFailure | boolean | If true, successful operations will be carried out and invalid operations will return errors. If false, all operations will be carried out in one transaction if and only if they are all valid. Default is false. |

### `MutateAdGroupAdsResponse`

Response message for an ad group ad mutate.

| Field | Type | Description |
|---|---|---|
| results | array<`MutateAdGroupAdResult`> | All results for the mutate. |
| partialFailureError | `GoogleRpc__Status` | Errors that pertain to operation failures in the partial failure mode. Returned only when partial_failure = true and all errors occur inside the operations. If any errors occur outside the operations (for example, auth errors), we return an RPC level error. |

### `RemoveAutomaticallyCreatedAssetsRequest`

Request message for AdGroupAdService.RemoveAutomaticallyCreatedAssets.

| Field | Type | Description |
|---|---|---|
| assetsWithFieldType | array<`AssetsWithFieldType`> | Required. List of assets with field type to be removed from the AdGroupAd. |

### `GoogleProtobuf__Empty`

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

Type: object

### `Ad`

An ad.

| Field | Type | Description |
|---|---|---|
| demandGenProductAd | `DemandGenProductAdInfo` | Details pertaining to a Demand Gen product ad. |
| addedByGoogleAds | boolean | Output only. Indicates if this ad was automatically added by Google Ads and not by a user. For example, this could happen when ads are automatically created as suggestions for new ads based on knowledge of how existing ads are performing. |
| name | string | Immutable. The name of the ad. This is only used to be able to identify the ad. It does not need to be unique and does not affect the served ad. The name field is currently only supported for DisplayUploadAd, ImageAd, LegacyAppInstallAd, ShoppingComparisonListingAd, VideoAd, VideoResponsiveAd and DemandGen ads. |
| finalAppUrls | array<`FinalAppUrl`> | A list of final app URLs that will be used on mobile if the user has the specific app installed. |
| shoppingComparisonListingAd | `ShoppingComparisonListingAdInfo` | Details pertaining to a Shopping Comparison Listing ad. |
| videoAd | `VideoAdInfo` | Details pertaining to a Video ad. |
| type | string enum(UNSPECIFIED, UNKNOWN, TEXT_AD, EXPANDED_TEXT_AD, EXPANDED_DYNAMIC_SEARCH_AD, HOTEL_AD, SHOPPING_SMART_AD, SHOPPING_PRODUCT_AD, VIDEO_AD, IMAGE_AD, RESPONSIVE_SEARCH_AD, LEGACY_RESPONSIVE_DISPLAY_AD, APP_AD, LEGACY_APP_INSTALL_AD, RESPONSIVE_DISPLAY_AD, LOCAL_AD, HTML5_UPLOAD_AD, DYNAMIC_HTML5_AD, APP_ENGAGEMENT_AD, SHOPPING_COMPARISON_LISTING_AD, VIDEO_BUMPER_AD, VIDEO_NON_SKIPPABLE_IN_STREAM_AD, VIDEO_TRUEVIEW_IN_STREAM_AD, VIDEO_RESPONSIVE_AD, SMART_CAMPAIGN_AD, CALL_AD, APP_PRE_REGISTRATION_AD, IN_FEED_VIDEO_AD, DEMAND_GEN_MULTI_ASSET_AD, DEMAND_GEN_CAROUSEL_AD, TRAVEL_AD, DEMAND_GEN_VIDEO_RESPONSIVE_AD, DEMAND_GEN_PRODUCT_AD, YOUTUBE_AUDIO_AD) | Output only. The type of ad. Values: UNSPECIFIED - No value has been specified.; UNKNOWN - The received value is not known in this version. This is a response-only value.; TEXT_AD - The ad is a text ad.; EXPANDED_TEXT_AD - The ad is an expanded text ad. Expanded text ads are deprecated.; EXPANDED_DYNAMIC_SEARCH_AD - The ad is an expanded dynamic search ad.; HOTEL_AD - The ad is a hotel ad.; SHOPPING_SMART_AD - The ad is a Smart Shopping ad.; SHOPPING_PRODUCT_AD - The ad is a standard Shopping ad.; VIDEO_AD - The ad is a video ad.; IMAGE_AD - This ad is an Image ad.; RESPONSIVE_SEARCH_AD - The ad is a responsive search ad.; LEGACY_RESPONSIVE_DISPLAY_AD - The ad is a legacy responsive display ad.; APP_AD - The ad is an app ad.; LEGACY_APP_INSTALL_AD - The ad is a legacy app install ad.; RESPONSIVE_DISPLAY_AD - The ad is a responsive display ad.; LOCAL_AD - The ad is a local ad.; HTML5_UPLOAD_AD - The ad is a display upload ad with the HTML5_UPLOAD_AD product type.; DYNAMIC_HTML5_AD - The ad is a display upload ad with one of the DYNAMIC_HTML5_* product types.; APP_ENGAGEMENT_AD - The ad is an app engagement ad.; SHOPPING_COMPARISON_LISTING_AD - The ad is a Shopping Comparison Listing ad.; VIDEO_BUMPER_AD - Video bumper ad.; VIDEO_NON_SKIPPABLE_IN_STREAM_AD - Video non-skippable in-stream ad.; VIDEO_TRUEVIEW_IN_STREAM_AD - Video TrueView in-stream ad.; VIDEO_RESPONSIVE_AD - Video responsive ad.; SMART_CAMPAIGN_AD - Smart campaign ad.; CALL_AD - Call ad.; APP_PRE_REGISTRATION_AD - Universal app pre-registration ad.; IN_FEED_VIDEO_AD - In-feed video ad.; DEMAND_GEN_MULTI_ASSET_AD - Demand Gen multi asset ad.; DEMAND_GEN_CAROUSEL_AD - Demand Gen carousel ad.; TRAVEL_AD - Travel ad.; DEMAND_GEN_VIDEO_RESPONSIVE_AD - Demand Gen video responsive ad.; DEMAND_GEN_PRODUCT_AD - Demand Gen product ad.; YOUTUBE_AUDIO_AD - YouTube Audio ad. |
| appAd | `AppAdInfo` | Details pertaining to an app ad. |
| expandedDynamicSearchAd | `ExpandedDynamicSearchAdInfo` | Immutable. Details pertaining to an Expanded Dynamic Search Ad. This type of ad has its headline, final URLs, and display URL auto-generated at serving time according to domain name specific information provided by `dynamic_search_ads_setting` linked at the campaign level. |
| trackingUrlTemplate | string | The URL template for constructing a tracking URL. |
| shoppingProductAd | `ShoppingProductAdInfo` | Details pertaining to a Shopping product ad. |
| systemManagedResourceSource | string enum(UNSPECIFIED, UNKNOWN, AD_VARIATIONS) | Output only. If this ad is system managed, then this field will indicate the source. This field is read-only. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; AD_VARIATIONS - Generated ad variations experiment ad. |
| displayUploadAd | `DisplayUploadAdInfo` | Details pertaining to a display upload ad. |
| smartCampaignAd | `SmartCampaignAdInfo` | Details pertaining to a Smart campaign ad. |
| finalMobileUrls | array<string> | The list of possible final mobile URLs after all cross-domain redirects for the ad. |
| urlCustomParameters | array<`CustomParameter`> | The list of mappings that can be used to substitute custom parameter tags in a `tracking_url_template`, `final_urls`, or `mobile_final_urls`. For mutates, use url custom parameter operations. |
| demandGenMultiAssetAd | `DemandGenMultiAssetAdInfo` | Details pertaining to a Demand Gen multi asset ad. |
| legacyAppInstallAd | `LegacyAppInstallAdInfo` | Immutable. Details pertaining to a legacy app install ad. |
| travelAd | `TravelAdInfo` | Details pertaining to a travel ad. |
| imageAd | `ImageAdInfo` | Immutable. Details pertaining to an Image ad. |
| syntheticContentInfo | `SyntheticContentInfo` | Synthetic content info for the ad. Only ads with specific ad types are eligible for updates using the `synthetic_content_info` field. Allowed `AdType` values: * `HTML5_UPLOAD_AD` * `DYNAMIC_HTML5_AD` * `IMAGE_AD` |
| devicePreference | string enum(UNSPECIFIED, UNKNOWN, MOBILE, TABLET, DESKTOP, CONNECTED_TV, OTHER) | The device preference for the ad. You can only specify a preference for mobile devices. When this preference is set the ad will be preferred over other ads when being displayed on a mobile device. The ad can still be displayed on other device types, for example, if no other ads are available. If unspecified (no device preference), all devices are targeted. This is only supported by some ad types. Values: UNSPECIFIED - Not specified.; UNKNOWN - The value is unknown in this version.; MOBILE - Mobile devices with full browsers.; TABLET - Tablets with full browsers.; DESKTOP - Computers.; CONNECTED_TV - Smart TVs and game consoles.; OTHER - Other device types. |
| videoResponsiveAd | `VideoResponsiveAdInfo` | Details pertaining to a Video responsive ad. |
| textAd | `TextAdInfo` | Immutable. Details pertaining to a text ad. |
| demandGenCarouselAd | `DemandGenCarouselAdInfo` | Details pertaining to a Demand Gen carousel ad. |
| shoppingSmartAd | `ShoppingSmartAdInfo` | Details pertaining to a Smart Shopping ad. |
| appPreRegistrationAd | `AppPreRegistrationAdInfo` | Details pertaining to an app pre-registration ad. |
| finalUrls | array<string> | The list of possible final URLs after all cross-domain redirects for the ad. |
| appEngagementAd | `AppEngagementAdInfo` | Details pertaining to an app engagement ad. |
| finalUrlSuffix | string | The suffix to use when constructing a final URL. |
| localAd | `LocalAdInfo` | Details pertaining to a local ad. |
| demandGenVideoResponsiveAd | `DemandGenVideoResponsiveAdInfo` | Details pertaining to a Demand Gen video responsive ad. |
| id | string (int64) | Output only. The ID of the ad. |
| legacyResponsiveDisplayAd | `LegacyResponsiveDisplayAdInfo` | Details pertaining to a legacy responsive display ad. |
| expandedTextAd | `ExpandedTextAdInfo` | Details pertaining to an expanded text ad. Expanded text ads are deprecated. Use `ResponsiveSearchAd` instead. |
| displayUrl | string | The URL that appears in the ad description for some ad formats. |
| hotelAd | `HotelAdInfo` | Details pertaining to a hotel ad. |
| responsiveDisplayAd | `ResponsiveDisplayAdInfo` | Details pertaining to a responsive display ad. |
| resourceName | string | Immutable. The resource name of the ad. Ad resource names have the form: `customers/{customer_id}/ads/{ad_id}` |
| urlCollections | array<`UrlCollection`> | Additional URLs for the ad that are tagged with a unique identifier that can be referenced from other fields in the ad. |
| responsiveSearchAd | `ResponsiveSearchAdInfo` | Details pertaining to a responsive search ad. |

### `AdGroupAdAssetAutomationSetting`

Asset automation setting for an AdGroupAd.

| Field | Type | Description |
|---|---|---|
| assetAutomationStatus | string enum(UNSPECIFIED, UNKNOWN, OPTED_IN, OPTED_OUT) | The opt-in/out status for the specified asset automation type. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used as a return value only. Represents value unknown in this version.; OPTED_IN - Opted-in will enable generating and serving an asset automation type.; OPTED_OUT - Opted-out will stop generating and serving an asset automation type. |
| assetAutomationType | string enum(UNSPECIFIED, UNKNOWN, TEXT_ASSET_AUTOMATION, GENERATE_VERTICAL_YOUTUBE_VIDEOS, GENERATE_SHORTER_YOUTUBE_VIDEOS, GENERATE_LANDING_PAGE_PREVIEW, GENERATE_LANDING_PAGE_TEXT, GENERATE_ENHANCED_YOUTUBE_VIDEOS, GENERATE_IMAGE_ENHANCEMENT, GENERATE_IMAGE_EXTRACTION, GENERATE_DESIGN_VERSIONS_FOR_IMAGES, FINAL_URL_EXPANSION_TEXT_ASSET_AUTOMATION, GENERATE_VIDEOS_FROM_OTHER_ASSETS, GENERATE_ANIMATED_IMAGES_FROM_OTHER_ASSETS, AUTOMATED_VIDEO_CRAWL, OVERLAY_TEXT_ON_VIDEOS) | The asset automation type that this setting configures. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used as a return value only. Represents value unknown in this version.; TEXT_ASSET_AUTOMATION - Text asset automation (text customization) includes headlines and descriptions, allowing Google to create customized text assets using your existing ads, landing page copy, and generative AI across your campaign's ads. By default, advertisers are opted-in for Performance Max and opted-out for Search. Contrast this with `FINAL_URL_EXPANSION_TEXT_ASSET_AUTOMATION`, which dynamically generates text assets to match the content of dynamically selected landing pages when final URL expansion is active.; GENERATE_VERTICAL_YOUTUBE_VIDEOS - Converts horizontal video assets to vertical orientation using content-aware technology. By default, advertisers are opted in for DemandGenVideoResponsiveAdInfo.; GENERATE_SHORTER_YOUTUBE_VIDEOS - Shortens video assets to better capture user attention using content-aware technology. By default, advertisers are opted in for DemandGenVideoResponsiveAdInfo.; GENERATE_LANDING_PAGE_PREVIEW - Generates a preview of the landing page shown in the engagement panel. By using this feature, you confirm that you own all legal rights to the images on the landing page used by this account (or you have permission to share the images with Google). You hereby instruct Google to publish these images on your behalf for advertising or other commercial purposes.; GENERATE_LANDING_PAGE_TEXT - Generates text information from the landing page to be shown in the engagement panel. Opted in by default for DemandGenVideoResponsiveAdInfo.; GENERATE_ENHANCED_YOUTUBE_VIDEOS - Generates video enhancements (vertical and shorter videos) for PMax campaigns. Opted in by default.; GENERATE_IMAGE_ENHANCEMENT - Generates image enhancements (AutoCrop and AutoEnhance). Opted in by default for pmax.; GENERATE_IMAGE_EXTRACTION - Generates image extraction. It defaults to account level Dynamic Image Extension control value.; GENERATE_DESIGN_VERSIONS_FOR_IMAGES - Adds design elements and embeds text assets into image assets to create images with different aspect ratios. By default, advertisers are opted in for DemandGenMultiAssetAd.; FINAL_URL_EXPANSION_TEXT_ASSET_AUTOMATION - Controls automation for text assets related to Final URL expansion. This includes automatically creating dynamic landing pages from the final URL and generating text assets from the content of those landing pages. This setting is turned OFF by default for Search campaigns, but it is turned ON by default for Performance Max campaigns. Enabling final URL expansion also enables text asset automation. There is no way to opt out of text asset automation and still use final URL expansion. Contrast this with standard `TEXT_ASSET_AUTOMATION` (text customization), which customizes copy across all ads in the campaign even when final URL expansion does not occur.; GENERATE_VIDEOS_FROM_OTHER_ASSETS - Generates videos using other Assets as input, such as images and text. By default, advertisers are opted in for DemandGenMultiAssetAd.; GENERATE_ANIMATED_IMAGES_FROM_OTHER_ASSETS - Generates animated images using other Assets as input, such as images and text. By default, advertisers are opted in for DemandGenMultiAssetAd.; AUTOMATED_VIDEO_CRAWL - Automated video crawl.; OVERLAY_TEXT_ON_VIDEOS - Overlays text taken from associated text Assets (such as headlines) on top of video Assets. By default, advertisers are opted in for DemandGenVideoResponsiveAd. |

### `AdGroupAdPolicySummary`

Contains policy information for an ad.

| Field | Type | Description |
|---|---|---|
| reviewStatus | string enum(UNSPECIFIED, UNKNOWN, REVIEW_IN_PROGRESS, REVIEWED, UNDER_APPEAL, ELIGIBLE_MAY_SERVE) | Output only. Where in the review process this ad is. Values: UNSPECIFIED - No value has been specified.; UNKNOWN - The received value is not known in this version. This is a response-only value.; REVIEW_IN_PROGRESS - Currently under review.; REVIEWED - Primary review complete. Other reviews may be continuing.; UNDER_APPEAL - The resource has been resubmitted for approval or its policy decision has been appealed.; ELIGIBLE_MAY_SERVE - The resource is eligible and may be serving but could still undergo further review. |
| policyTopicEntries | array<`PolicyTopicEntry`> | Output only. The list of policy findings for this ad. |
| approvalStatus | string enum(UNSPECIFIED, UNKNOWN, DISAPPROVED, APPROVED_LIMITED, APPROVED, AREA_OF_INTEREST_ONLY) | Output only. The overall approval status of this ad, calculated based on the status of its individual policy topic entries. Values: UNSPECIFIED - No value has been specified.; UNKNOWN - The received value is not known in this version. This is a response-only value.; DISAPPROVED - Will not serve.; APPROVED_LIMITED - Serves with restrictions.; APPROVED - Serves without restrictions.; AREA_OF_INTEREST_ONLY - Will not serve in targeted countries, but may serve for users who are searching for information about the targeted countries. |

### `AdGroupAdOperation`

A single operation (create, update, remove) on an ad group ad.

| Field | Type | Description |
|---|---|---|
| updateMask | string (google-fieldmask) | FieldMask that determines which resource fields are modified in an update. |
| create | `AdGroupAd` | Create operation: No resource name is expected for the new ad. |
| policyValidationParameter | `PolicyValidationParameter` | Configuration for how policies are validated. |
| update | `AdGroupAd` | Update operation: The ad is expected to have a valid resource name. |
| remove | string | Remove operation: A resource name for the removed ad is expected, in this format: `customers/{customer_id}/adGroupAds/{ad_group_id}~{ad_id}` |

### `MutateAdGroupAdResult`

The result for the ad mutate.

| Field | Type | Description |
|---|---|---|
| resourceName | string | The resource name returned for successful operations. |
| adGroupAd | `AdGroupAd` | The mutated ad group ad with only mutable fields after mutate. The field will only be returned when response_content_type is set to "MUTABLE_RESOURCE". |

### `GoogleRpc__Status`

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

| Field | Type | Description |
|---|---|---|
| details | array<map<string, any>> | A list of messages that carry the error details. There is a common set of message types for APIs to use. |
| message | string | A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. |
| code | integer (int32) | The status code, which should be an enum value of google.rpc.Code. |

### `AssetsWithFieldType`

The combination of system asset and field type to remove.

| Field | Type | Description |
|---|---|---|
| assetFieldType | string enum(UNSPECIFIED, UNKNOWN, HEADLINE, DESCRIPTION, MANDATORY_AD_TEXT, MARKETING_IMAGE, MEDIA_BUNDLE, YOUTUBE_VIDEO, BOOK_ON_GOOGLE, LEAD_FORM, PROMOTION, CALLOUT, STRUCTURED_SNIPPET, SITELINK, MOBILE_APP, HOTEL_CALLOUT, CALL, PRICE, LONG_HEADLINE, BUSINESS_NAME, SQUARE_MARKETING_IMAGE, PORTRAIT_MARKETING_IMAGE, LOGO, LANDSCAPE_LOGO, VIDEO, CALL_TO_ACTION_SELECTION, AD_IMAGE, BUSINESS_LOGO, HOTEL_PROPERTY, DEMAND_GEN_CAROUSEL_CARD, BUSINESS_MESSAGE, TALL_PORTRAIT_MARKETING_IMAGE, RELATED_YOUTUBE_VIDEOS, LANDING_PAGE_PREVIEW, LONG_DESCRIPTION, CALL_TO_ACTION, CLASSIC_DISPLAY_IMAGE, TEXT_DISCLAIMER) | Required. The asset field type. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; HEADLINE - The asset is linked for use as a headline.; DESCRIPTION - The asset is linked for use as a description.; MANDATORY_AD_TEXT - The asset is linked for use as mandatory ad text.; MARKETING_IMAGE - The asset is linked for use as a marketing image.; MEDIA_BUNDLE - The asset is linked for use as a media bundle.; YOUTUBE_VIDEO - The asset is linked for use as a YouTube video.; BOOK_ON_GOOGLE - The asset is linked to indicate that a hotels campaign is "Book on Google" enabled.; LEAD_FORM - The asset is linked for use as a Lead Form extension.; PROMOTION - The asset is linked for use as a Promotion extension.; CALLOUT - The asset is linked for use as a Callout extension.; STRUCTURED_SNIPPET - The asset is linked for use as a Structured Snippet extension.; SITELINK - The asset is linked for use as a Sitelink.; MOBILE_APP - The asset is linked for use as a Mobile App extension.; HOTEL_CALLOUT - The asset is linked for use as a Hotel Callout extension.; CALL - The asset is linked for use as a Call extension.; PRICE - The asset is linked for use as a Price extension.; LONG_HEADLINE - The asset is linked for use as a long headline.; BUSINESS_NAME - The asset is linked for use as a business name.; SQUARE_MARKETING_IMAGE - The asset is linked for use as a square marketing image.; PORTRAIT_MARKETING_IMAGE - The asset is linked for use as a portrait marketing image.; LOGO - The asset is linked for use as a logo.; LANDSCAPE_LOGO - The asset is linked for use as a landscape logo.; VIDEO - The asset is linked for use as a non YouTube logo.; CALL_TO_ACTION_SELECTION - The asset is linked for use to select a call-to-action.; AD_IMAGE - The asset is linked for use to select an ad image.; BUSINESS_LOGO - The asset is linked for use as a business logo.; HOTEL_PROPERTY - The asset is linked for use as a hotel property in a Performance Max for travel goals campaign.; DEMAND_GEN_CAROUSEL_CARD - The asset is linked for use as a Demand Gen carousel card.; BUSINESS_MESSAGE - The asset is linked for use as a Business Message.; TALL_PORTRAIT_MARKETING_IMAGE - The asset is linked for use as a tall portrait marketing image.; RELATED_YOUTUBE_VIDEOS - The asset is linked for use as related YouTube videos.; LANDING_PAGE_PREVIEW - The asset is linked for use as a landing page preview image.; LONG_DESCRIPTION - The asset is linked for use as a long description.; CALL_TO_ACTION - The asset is linked for use as a call-to-action.; CLASSIC_DISPLAY_IMAGE - The asset is linked for use as a classic display image.; TEXT_DISCLAIMER - The asset is linked for use as a text disclaimer. |
| asset | string | Required. The resource name of the asset to be removed. |

### `AppAdInfo`

An app ad.

| Field | Type | Description |
|---|---|---|
| images | array<`AdImageAsset`> | List of image assets that may be displayed with the ad. |
| headlines | array<`AdTextAsset`> | List of text assets for headlines. When the ad serves the headlines will be selected from this list. |
| appDeepLink | `AdAppDeepLinkAsset` | An app deep link asset that may be used with the ad. |
| youtubeVideos | array<`AdVideoAsset`> | List of YouTube video assets that may be displayed with the ad. |
| descriptions | array<`AdTextAsset`> | List of text assets for descriptions. When the ad serves the descriptions will be selected from this list. |
| mandatoryAdText | `AdTextAsset` | Mandatory ad text. |
| html5MediaBundles | array<`AdMediaBundleAsset`> | List of media bundle assets that may be used with the ad. |

### `AppEngagementAdInfo`

App engagement ads allow you to write text encouraging a specific action in the app, like checking in, making a purchase, or booking a flight. They allow you to send users to a specific part of your app where they can find what they're looking for easier and faster.

| Field | Type | Description |
|---|---|---|
| headlines | array<`AdTextAsset`> | List of text assets for headlines. When the ad serves the headlines will be selected from this list. |
| videos | array<`AdVideoAsset`> | List of video assets that may be displayed with the ad. |
| images | array<`AdImageAsset`> | List of image assets that may be displayed with the ad. |
| descriptions | array<`AdTextAsset`> | List of text assets for descriptions. When the ad serves the descriptions will be selected from this list. |

### `AppPreRegistrationAdInfo`

App pre-registration ads link to your app or game listing on Google Play, and can run on Google Play, on YouTube (in-stream only), and within other apps and mobile websites on the Display Network. It will help capture people's interest in your app or game and generate an early install base for your app or game before a launch.

| Field | Type | Description |
|---|---|---|
| descriptions | array<`AdTextAsset`> | List of text assets for descriptions. When the ad serves the descriptions will be selected from this list. |
| headlines | array<`AdTextAsset`> | List of text assets for headlines. When the ad serves the headlines will be selected from this list. |
| youtubeVideos | array<`AdVideoAsset`> | List of YouTube video asset IDs whose videos may be displayed with the ad. |
| images | array<`AdImageAsset`> | List of image asset IDs whose images may be displayed with the ad. |

### `CustomParameter`

A mapping that can be used by custom parameter tags in a `tracking_url_template`, `final_urls`, or `mobile_final_urls`.

| Field | Type | Description |
|---|---|---|
| value | string | The value to be substituted. |
| key | string | The key matching the parameter tag name. |

### `DemandGenCarouselAdInfo`

A Demand Gen carousel ad.

| Field | Type | Description |
|---|---|---|
| businessName | string | Required. The Advertiser/brand name. |
| carouselCards | array<`AdDemandGenCarouselCardAsset`> | Required. Carousel cards that will display with the ad. Min 2 max 10. |
| headline | `AdTextAsset` | Required. Headline of the ad. |
| description | `AdTextAsset` | Required. The descriptive text of the ad. |
| logoImage | `AdImageAsset` | Required. Logo image to be used in the ad. The minimum size is 128x128 and the aspect ratio must be 1:1 (+-1%). |
| callToActionText | string | Call to action text. |

### `DemandGenMultiAssetAdInfo`

A Demand Gen multi asset ad.

| Field | Type | Description |
|---|---|---|
| headlines | array<`AdTextAsset`> | Headline text asset of the ad. Maximum display width is 30. At least 1 and max 5 headlines can be specified. |
| descriptions | array<`AdTextAsset`> | The descriptive text of the ad. Maximum display width is 90. At least 1 and max 5 descriptions can be specified. |
| businessName | string | The Advertiser/brand name. Maximum display width is 25. Required. |
| logoImages | array<`AdImageAsset`> | Logo image assets to be used in the ad. Valid image types are GIF, JPEG, and PNG. The minimum size is 128x128 and the aspect ratio must be 1:1 (+-1%). At least 1 and max 5 logo images can be specified. |
| marketingImages | array<`AdImageAsset`> | Marketing image assets to be used in the ad. Valid image types are GIF, JPEG, and PNG. The minimum size is 600x314 and the aspect ratio must be 1.91:1 (+-1%). Required if square_marketing_images is not present. Combined with `square_marketing_images`, `portrait_marketing_images`, and `tall_portrait_marketing_images` the maximum is 20. |
| callToActionText | string | Call to action text. |
| squareMarketingImages | array<`AdImageAsset`> | Square marketing image assets to be used in the ad. Valid image types are GIF, JPEG, and PNG. The minimum size is 300x300 and the aspect ratio must be 1:1 (+-1%). Required if marketing_images is not present. Combined with `marketing_images`, `portrait_marketing_images`, and `tall_portrait_marketing_images` the maximum is 20. |
| tallPortraitMarketingImages | array<`AdImageAsset`> | Tall portrait marketing image assets to be used in the ad. Valid image types are GIF, JPEG, and PNG. The minimum size is 600x1067 and the aspect ratio must be 9:16 (+-1%). Combined with `marketing_images`, `square_marketing_images`, and `portrait_marketing_images`, the maximum is 20. |
| portraitMarketingImages | array<`AdImageAsset`> | Portrait marketing image assets to be used in the ad. Valid image types are GIF, JPEG, and PNG. The minimum size is 480x600 and the aspect ratio must be 4:5 (+-1%). Combined with `marketing_images`, `square_marketing_images`, and `tall_portrait_marketing_images` the maximum is 20. |
| classicDisplayImages | array<`AdImageAsset`> | Classic display image assets to be used in the ad. Valid image types are GIF, JPEG, and PNG. At most 20 classic display images can be specified per ad. |

### `DemandGenProductAdInfo`

A Demand Gen product ad.

| Field | Type | Description |
|---|---|---|
| headline | `AdTextAsset` | Required. Text asset used for the short headline. |
| logoImage | `AdImageAsset` | Required. Logo image to be used in the ad. Valid image types are GIF, JPEG, and PNG. The minimum size is 128x128 and the aspect ratio must be 1:1 (+-1%). |
| breadcrumb1 | string | First part of text that appears in the ad with the displayed URL. |
| breadcrumb2 | string | Second part of text that appears in the ad with the displayed URL. |
| callToAction | `AdCallToActionAsset` | Asset of type CallToActionAsset used for the "Call To Action" button. |
| description | `AdTextAsset` | Required. Text asset used for the description. |
| businessName | `AdTextAsset` | Required. The advertiser/brand name. |

### `DemandGenVideoResponsiveAdInfo`

A Demand Gen video responsive ad.

| Field | Type | Description |
|---|---|---|
| videos | array<`AdVideoAsset`> | Required. List of YouTube video assets used for the ad. |
| companionBanners | array<`AdImageAsset`> | List of image assets used for the companion banner. Currently, only a single value for the companion banner asset is supported. |
| longHeadlines | array<`AdTextAsset`> | List of text assets used for the long headline. |
| callToActions | array<`AdCallToActionAsset`> | Assets of type CallToActionAsset used for the "Call To Action" button. |
| breadcrumb2 | string | Second part of text that appears in the ad with the displayed URL. |
| descriptions | array<`AdTextAsset`> | List of text assets used for the description. |
| businessName | `AdTextAsset` | Required. The advertiser/brand name. |
| logoImages | array<`AdImageAsset`> | Required. Logo image to be used in the ad. Valid image types are GIF, JPEG, and PNG. The minimum size is 128x128 and the aspect ratio must be 1:1 (+-1%). |
| breadcrumb1 | string | First part of text that appears in the ad with the displayed URL. |
| headlines | array<`AdTextAsset`> | List of text assets used for the short headline. |

### `DisplayUploadAdInfo`

A generic type of display ad. The exact ad format is controlled by the `display_upload_product_type` field, which determines what kinds of data need to be included with the ad.

| Field | Type | Description |
|---|---|---|
| displayUploadProductType | string enum(UNSPECIFIED, UNKNOWN, HTML5_UPLOAD_AD, DYNAMIC_HTML5_EDUCATION_AD, DYNAMIC_HTML5_FLIGHT_AD, DYNAMIC_HTML5_HOTEL_RENTAL_AD, DYNAMIC_HTML5_JOB_AD, DYNAMIC_HTML5_LOCAL_AD, DYNAMIC_HTML5_REAL_ESTATE_AD, DYNAMIC_HTML5_CUSTOM_AD, DYNAMIC_HTML5_TRAVEL_AD, DYNAMIC_HTML5_HOTEL_AD) | The product type of this ad. See comments on the enum for details. Values: UNSPECIFIED - Not specified.; UNKNOWN - The value is unknown in this version.; HTML5_UPLOAD_AD - HTML5 upload ad. This product type requires the upload_media_bundle field in DisplayUploadAdInfo to be set.; DYNAMIC_HTML5_EDUCATION_AD - Dynamic HTML5 education ad. This product type requires the upload_media_bundle field in DisplayUploadAdInfo to be set. Can only be used in an education campaign.; DYNAMIC_HTML5_FLIGHT_AD - Dynamic HTML5 flight ad. This product type requires the upload_media_bundle field in DisplayUploadAdInfo to be set. Can only be used in a flight campaign.; DYNAMIC_HTML5_HOTEL_RENTAL_AD - Dynamic HTML5 hotel and rental ad. This product type requires the upload_media_bundle field in DisplayUploadAdInfo to be set. Can only be used in a hotel campaign.; DYNAMIC_HTML5_JOB_AD - Dynamic HTML5 job ad. This product type requires the upload_media_bundle field in DisplayUploadAdInfo to be set. Can only be used in a job campaign.; DYNAMIC_HTML5_LOCAL_AD - Dynamic HTML5 local ad. This product type requires the upload_media_bundle field in DisplayUploadAdInfo to be set. Can only be used in a local campaign.; DYNAMIC_HTML5_REAL_ESTATE_AD - Dynamic HTML5 real estate ad. This product type requires the upload_media_bundle field in DisplayUploadAdInfo to be set. Can only be used in a real estate campaign.; DYNAMIC_HTML5_CUSTOM_AD - Dynamic HTML5 custom ad. This product type requires the upload_media_bundle field in DisplayUploadAdInfo to be set. Can only be used in a custom campaign.; DYNAMIC_HTML5_TRAVEL_AD - Dynamic HTML5 travel ad. This product type requires the upload_media_bundle field in DisplayUploadAdInfo to be set. Can only be used in a travel campaign.; DYNAMIC_HTML5_HOTEL_AD - Dynamic HTML5 hotel ad. This product type requires the upload_media_bundle field in DisplayUploadAdInfo to be set. Can only be used in a hotel campaign. |
| mediaBundle | `AdMediaBundleAsset` | A media bundle asset to be used in the ad. For information about the media bundle for HTML5_UPLOAD_AD, see https://support.google.com/google-ads/answer/1722096 Media bundles that are part of dynamic product types use a special format that needs to be created through the Google Web Designer. See https://support.google.com/webdesigner/answer/7543898 for more information. |

### `ExpandedDynamicSearchAdInfo`

An expanded dynamic search ad.

| Field | Type | Description |
|---|---|---|
| description2 | string | The second description of the ad. |
| description | string | The description of the ad. |

### `ExpandedTextAdInfo`

An expanded text ad. Expanded text ads are deprecated.

| Field | Type | Description |
|---|---|---|
| description2 | string | The second description of the ad. |
| headlinePart1 | string | The first part of the ad's headline. |
| headlinePart2 | string | The second part of the ad's headline. |
| path2 | string | Additional text that can appear alongside the ad's displayed URL. |
| headlinePart3 | string | The third part of the ad's headline. |
| description | string | The description of the ad. |
| path1 | string | The text that can appear alongside the ad's displayed URL. |

### `FinalAppUrl`

A URL for deep linking into an app for the given operating system.

| Field | Type | Description |
|---|---|---|
| osType | string enum(UNSPECIFIED, UNKNOWN, IOS, ANDROID) | The operating system targeted by this URL. Required. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; IOS - The Apple IOS operating system.; ANDROID - The Android operating system. |
| url | string | The app deep link URL. Deep links specify a location in an app that corresponds to the content you'd like to show, and should be of the form {scheme}://{host_path} The scheme identifies which app to open. For your app, you can use a custom scheme that starts with the app's name. The host and path specify the unique location in the app where your content exists. Example: "exampleapp://productid_1234". Required. |

### `HotelAdInfo`

A hotel ad.

Type: object

### `ImageAdInfo`

An image ad.

| Field | Type | Description |
|---|---|---|
| imageAsset | `AdImageAsset` | The image assets used for the ad. |
| previewPixelHeight | string (int64) | Height in pixels of the preview size image. |
| pixelWidth | string (int64) | Width in pixels of the full size image. |
| adIdToCopyImageFrom | string (int64) | An ad ID to copy the image from. |
| previewPixelWidth | string (int64) | Width in pixels of the preview size image. |
| name | string | The name of the image. If the image was created from a MediaFile, this is the MediaFile's name. If the image was created from bytes, this is empty. |
| previewImageUrl | string | URL of the preview size image. |
| pixelHeight | string (int64) | Height in pixels of the full size image. |
| mimeType | string enum(UNSPECIFIED, UNKNOWN, IMAGE_JPEG, IMAGE_GIF, IMAGE_PNG, FLASH, TEXT_HTML, PDF, MSWORD, MSEXCEL, RTF, AUDIO_WAV, AUDIO_MP3, HTML5_AD_ZIP) | The mime type of the image. Values: UNSPECIFIED - The mime type has not been specified.; UNKNOWN - The received value is not known in this version. This is a response-only value.; IMAGE_JPEG - MIME type of image/jpeg.; IMAGE_GIF - MIME type of image/gif.; IMAGE_PNG - MIME type of image/png.; FLASH - MIME type of application/x-shockwave-flash.; TEXT_HTML - MIME type of text/html.; PDF - MIME type of application/pdf.; MSWORD - MIME type of application/msword.; MSEXCEL - MIME type of application/vnd.ms-excel.; RTF - MIME type of application/rtf.; AUDIO_WAV - MIME type of audio/wav.; AUDIO_MP3 - MIME type of audio/mp3.; HTML5_AD_ZIP - MIME type of application/x-html5-ad-zip. |
| data | string (byte) | Raw image data as bytes. |
| imageUrl | string | URL of the full size image. |

### `LegacyAppInstallAdInfo`

A legacy app install ad that only can be used by a few select customers.

| Field | Type | Description |
|---|---|---|
| description1 | string | The first description line of the ad. |
| appStore | string enum(UNSPECIFIED, UNKNOWN, APPLE_APP_STORE, GOOGLE_PLAY, WINDOWS_STORE, WINDOWS_PHONE_STORE, CN_APP_STORE) | The app store the mobile app is available in. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; APPLE_APP_STORE - Apple iTunes.; GOOGLE_PLAY - Google Play.; WINDOWS_STORE - Windows Store.; WINDOWS_PHONE_STORE - Windows Phone Store.; CN_APP_STORE - The app is hosted in a Chinese app store. |
| appId | string | The ID of the mobile app. |
| description2 | string | The second description line of the ad. |
| headline | string | The headline of the ad. |

### `LegacyResponsiveDisplayAdInfo`

A legacy responsive display ad. Ads of this type are labeled 'Responsive ads' in the Google Ads UI.

| Field | Type | Description |
|---|---|---|
| squareLogoImage | string | The MediaFile resource name of the square logo image used in the ad. |
| businessName | string | The business name in the ad. |
| squareMarketingImage | string | The MediaFile resource name of the square marketing image used in the ad. |
| shortHeadline | string | The short version of the ad's headline. |
| allowFlexibleColor | boolean | Advertiser's consent to allow flexible color. When true, the ad may be served with different color if necessary. When false, the ad will be served with the specified colors or a neutral color. The default value is `true`. Must be true if `main_color` and `accent_color` are not set. |
| logoImage | string | The MediaFile resource name of the logo image used in the ad. |
| pricePrefix | string | Prefix before price. For example, 'as low as'. |
| callToActionText | string | The call-to-action text for the ad. |
| promoText | string | Promotion text used for dynamic formats of responsive ads. For example 'Free two-day shipping'. |
| longHeadline | string | The long version of the ad's headline. |
| description | string | The description of the ad. |
| accentColor | string | The accent color of the ad in hexadecimal, for example, #ffffff for white. If one of `main_color` and `accent_color` is set, the other is required as well. |
| mainColor | string | The main color of the ad in hexadecimal, for example, #ffffff for white. If one of `main_color` and `accent_color` is set, the other is required as well. |
| formatSetting | string enum(UNSPECIFIED, UNKNOWN, ALL_FORMATS, NON_NATIVE, NATIVE) | Specifies which format the ad will be served in. Default is ALL_FORMATS. Values: UNSPECIFIED - Not specified.; UNKNOWN - The value is unknown in this version.; ALL_FORMATS - Text, image and native formats.; NON_NATIVE - Text and image formats.; NATIVE - Native format, for example, the format rendering is controlled by the publisher and not by Google. |
| marketingImage | string | The MediaFile resource name of the marketing image used in the ad. |

### `LocalAdInfo`

A local ad.

| Field | Type | Description |
|---|---|---|
| path2 | string | Second part of optional text that can be appended to the URL in the ad. This field can only be set when `path1` is also set. |
| headlines | array<`AdTextAsset`> | List of text assets for headlines. When the ad serves the headlines will be selected from this list. At least 1 and at most 5 headlines must be specified. |
| callToActions | array<`AdTextAsset`> | List of text assets for call-to-actions. When the ad serves the call-to-actions will be selected from this list. At least 1 and at most 5 call-to-actions must be specified. |
| marketingImages | array<`AdImageAsset`> | List of marketing image assets that may be displayed with the ad. The images must be 314x600 pixels or 320x320 pixels. At least 1 and at most 20 image assets must be specified. |
| logoImages | array<`AdImageAsset`> | List of logo image assets that may be displayed with the ad. The images must be 128x128 pixels and not larger than 120KB. At least 1 and at most 5 image assets must be specified. |
| path1 | string | First part of optional text that can be appended to the URL in the ad. |
| descriptions | array<`AdTextAsset`> | List of text assets for descriptions. When the ad serves the descriptions will be selected from this list. At least 1 and at most 5 descriptions must be specified. |
| videos | array<`AdVideoAsset`> | List of YouTube video assets that may be displayed with the ad. At least 1 and at most 20 video assets must be specified. |

### `ResponsiveDisplayAdInfo`

A responsive display ad.

| Field | Type | Description |
|---|---|---|
| descriptions | array<`AdTextAsset`> | Descriptive texts for the ad. The maximum length is 90 characters. At least 1 and max 5 headlines can be specified. |
| pricePrefix | string | Prefix before price. For example, 'as low as'. |
| youtubeVideos | array<`AdVideoAsset`> | Optional YouTube videos for the ad. A maximum of 5 videos can be specified. |
| promoText | string | Promotion text used for dynamic formats of responsive ads. For example 'Free two-day shipping'. |
| longHeadline | `AdTextAsset` | A required long format headline. The maximum length is 90 characters. |
| logoImages | array<`AdImageAsset`> | Logo images to be used in the ad. Valid image types are GIF, JPEG, and PNG. The minimum size is 512x128 and the aspect ratio must be 4:1 (+-1%). Combined with `square_logo_images`, the maximum is 5. |
| accentColor | string | The accent color of the ad in hexadecimal, for example, #ffffff for white. If one of `main_color` and `accent_color` is set, the other is required as well. |
| squareMarketingImages | array<`AdImageAsset`> | Square marketing images to be used in the ad. Valid image types are GIF, JPEG, and PNG. The minimum size is 300x300 and the aspect ratio must be 1:1 (+-1%). At least one square `marketing_image` is required. Combined with `marketing_images`, the maximum is 15. |
| formatSetting | string enum(UNSPECIFIED, UNKNOWN, ALL_FORMATS, NON_NATIVE, NATIVE) | Specifies which format the ad will be served in. Default is ALL_FORMATS. Values: UNSPECIFIED - Not specified.; UNKNOWN - The value is unknown in this version.; ALL_FORMATS - Text, image and native formats.; NON_NATIVE - Text and image formats.; NATIVE - Native format, for example, the format rendering is controlled by the publisher and not by Google. |
| businessName | string | The advertiser/brand name. Maximum display width is 25. |
| controlSpec | `ResponsiveDisplayAdControlSpec` | Specification for various creative controls. |
| allowFlexibleColor | boolean | Advertiser's consent to allow flexible color. When true, the ad may be served with different color if necessary. When false, the ad will be served with the specified colors or a neutral color. The default value is `true`. Must be true if `main_color` and `accent_color` are not set. |
| headlines | array<`AdTextAsset`> | Short format headlines for the ad. The maximum length is 30 characters. At least 1 and max 5 headlines can be specified. |
| callToActionText | string | The call-to-action text for the ad. Maximum display width is 30. |
| marketingImages | array<`AdImageAsset`> | Marketing images to be used in the ad. Valid image types are GIF, JPEG, and PNG. The minimum size is 600x314 and the aspect ratio must be 1.91:1 (+-1%). At least one `marketing_image` is required. Combined with `square_marketing_images`, the maximum is 15. |
| mainColor | string | The main color of the ad in hexadecimal, for example, #ffffff for white. If one of `main_color` and `accent_color` is set, the other is required as well. |
| squareLogoImages | array<`AdImageAsset`> | Square logo images to be used in the ad. Valid image types are GIF, JPEG, and PNG. The minimum size is 128x128 and the aspect ratio must be 1:1 (+-1%). Combined with `logo_images`, the maximum is 5. |

### `ResponsiveSearchAdInfo`

A responsive search ad. Responsive search ads let you create an ad that adapts to show more text, and more relevant messages, to your customers. Enter multiple headlines and descriptions when creating a responsive search ad, and over time, Google Ads will automatically test different combinations and learn which combinations perform best. By adapting your ad's content to more closely match potential customers' search terms, responsive search ads may improve your campaign's performance. More information at https://support.google.com/google-ads/answer/7684791

| Field | Type | Description |
|---|---|---|
| headlines | array<`AdTextAsset`> | List of text assets for headlines. When the ad serves the headlines will be selected from this list. |
| descriptions | array<`AdTextAsset`> | List of text assets for descriptions. When the ad serves the descriptions will be selected from this list. |
| path2 | string | Second part of text that can be appended to the URL in the ad. This field can only be set when `path1` is also set. |
| path1 | string | First part of text that can be appended to the URL in the ad. |

### `ShoppingComparisonListingAdInfo`

A Shopping Comparison Listing ad.

| Field | Type | Description |
|---|---|---|
| headline | string | Headline of the ad. This field is required. Allowed length is between 25 and 45 characters. |

### `ShoppingProductAdInfo`

A standard Shopping ad.

Type: object

### `ShoppingSmartAdInfo`

A Smart Shopping ad.

Type: object

### `SmartCampaignAdInfo`

A Smart campaign ad.

| Field | Type | Description |
|---|---|---|
| headlines | array<`AdTextAsset`> | List of text assets, each of which corresponds to a headline when the ad serves. This list consists of a minimum of 3 and up to 15 text assets. |
| descriptions | array<`AdTextAsset`> | List of text assets, each of which corresponds to a description when the ad serves. This list consists of a minimum of 2 and up to 4 text assets. |

### `SyntheticContentInfo`

Container for synthetic content attestations from different sources, such as the advertiser and Google systems.

| Field | Type | Description |
|---|---|---|
| advertiserAttestation | `SyntheticContentAttestation` | Input provided by the advertiser. |
| systemAttestation | `SyntheticContentAttestation` | Output only. Information about synthetic content generated by Google's systems. |

### `TextAdInfo`

A text ad.

| Field | Type | Description |
|---|---|---|
| description2 | string | The second line of the ad's description. |
| headline | string | The headline of the ad. |
| description1 | string | The first line of the ad's description. |

### `TravelAdInfo`

A travel ad.

Type: object

### `UrlCollection`

Collection of urls that is tagged with a unique identifier.

| Field | Type | Description |
|---|---|---|
| finalMobileUrls | array<string> | A list of possible final mobile URLs. |
| finalUrls | array<string> | A list of possible final URLs. |
| trackingUrlTemplate | string | URL template for constructing a tracking URL. |
| urlCollectionId | string | Unique identifier for this UrlCollection instance. |

### `VideoAdInfo`

A video ad.

| Field | Type | Description |
|---|---|---|
| outStream | `VideoOutstreamAdInfo` | Video out-stream ad format. |
| bumper | `VideoBumperInStreamAdInfo` | Video bumper in-stream ad format. |
| video | `AdVideoAsset` | The YouTube video assets used for the ad. |
| nonSkippable | `VideoNonSkippableInStreamAdInfo` | Video non-skippable in-stream ad format. |
| inFeed | `InFeedVideoAdInfo` | In-feed video ad format. |
| audio | `YouTubeAudioAdInfo` | YouTube Audio ad format. |
| inStream | `VideoTrueViewInStreamAdInfo` | Video TrueView in-stream ad format. |

### `VideoResponsiveAdInfo`

A video responsive ad.

| Field | Type | Description |
|---|---|---|
| breadcrumb1 | string | First part of text that appears in the ad with the displayed URL. |
| logoImages | array<`AdImageAsset`> | Required. Logo image to be used in the ad. The minimum size is 128x128 and the aspect ratio must be 1:1(+-1%). |
| headlines | array<`AdTextAsset`> | List of text assets used for the short headline. Currently, only a single value for the short headline is supported. |
| descriptions | array<`AdTextAsset`> | List of text assets used for the description. Currently, only a single value for the description is supported. |
| businessName | `AdTextAsset` | Required. Advertiser/brand name. Maximum display width is 25 characters. |
| breadcrumb2 | string | Second part of text that appears in the ad with the displayed URL. |
| callToActions | array<`AdTextAsset`> | List of text assets used for the button, for example, the "Call To Action" button. Currently, only a single value for the button is supported. |
| companionBanners | array<`AdImageAsset`> | List of image assets used for the companion banner. Currently, only a single value for the companion banner asset is supported. |
| videos | array<`AdVideoAsset`> | Required. List of YouTube video assets used for the ad. Currently, only a single value for the YouTube video asset is supported. |
| longHeadlines | array<`AdTextAsset`> | List of text assets used for the long headline. Currently, only a single value for the long headline is supported. |

### `PolicyTopicEntry`

Policy finding attached to a resource (for example, alcohol policy associated with a site that sells alcohol). Each PolicyTopicEntry has a topic that indicates the specific ads policy the entry is about and a type to indicate the effect that the entry will have on serving. It may optionally have one or more evidences that indicate the reason for the finding. It may also optionally have one or more constraints that provide details about how serving may be restricted.

| Field | Type | Description |
|---|---|---|
| type | string enum(UNSPECIFIED, UNKNOWN, PROHIBITED, LIMITED, FULLY_LIMITED, DESCRIPTIVE, BROADENING, AREA_OF_INTEREST_ONLY) | Describes the negative or positive effect this policy will have on serving. Values: UNSPECIFIED - No value has been specified.; UNKNOWN - The received value is not known in this version. This is a response-only value.; PROHIBITED - The resource will not be served.; LIMITED - The resource will not be served under some circumstances.; FULLY_LIMITED - The resource cannot serve at all because of the current targeting criteria.; DESCRIPTIVE - May be of interest, but does not limit how the resource is served.; BROADENING - Could increase coverage beyond normal.; AREA_OF_INTEREST_ONLY - Constrained for all targeted countries, but may serve in other countries through area of interest. |
| topic | string | Policy topic this finding refers to. For example, "ALCOHOL", "TRADEMARKS_IN_AD_TEXT", or "DESTINATION_NOT_WORKING". The set of possible policy topics is not fixed for a particular API version and may change at any time. |
| constraints | array<`PolicyTopicConstraint`> | Indicates how serving of this resource may be affected (for example, not serving in a country). |
| evidences | array<`PolicyTopicEvidence`> | Additional information that explains policy finding (for example, the brand name for a trademark finding). |

### `PolicyValidationParameter`

Parameter for controlling how policy exemption is done.

| Field | Type | Description |
|---|---|---|
| exemptPolicyViolationKeys | array<`PolicyViolationKey`> | The list of policy violation keys that should not cause a `PolicyViolationError` to be reported. Not all policy violations are exemptable. Refer to the `is_exemptible` field in the returned `PolicyViolationError`. This field is used for keyword policy exemptions. If this field is populated, then `ignorable_policy_topics` must be empty. Resources that violate these policies will be saved, but will not be eligible to serve. They may begin serving at a later time due to a change in policies, re-review of the resource, or a change in advertiser certificates. |
| ignorablePolicyTopics | array<string> | The list of policy topics that should not cause a `PolicyFindingError` to be reported. This field is used for ad policy exemptions. It corresponds to the `PolicyTopicEntry.topic` field. If this field is populated, then `exempt_policy_violation_keys` must be empty. Resources that violate these policies will be saved, but will not be eligible to serve. They may begin serving at a later time due to a change in policies, re-review of the resource, or a change in advertiser certificates. |

### `AdAppDeepLinkAsset`

An app deep link used inside an ad.

| Field | Type | Description |
|---|---|---|
| asset | string | The Asset resource name of this app deep link asset. |

### `AdImageAsset`

An image asset used inside an ad.

| Field | Type | Description |
|---|---|---|
| asset | string | The Asset resource name of this image. |

### `AdMediaBundleAsset`

A media bundle asset used inside an ad.

| Field | Type | Description |
|---|---|---|
| asset | string | The Asset resource name of this media bundle. |

### `AdTextAsset`

A text asset used inside an ad.

| Field | Type | Description |
|---|---|---|
| text | string | Asset text. |
| policySummaryInfo | `AdAssetPolicySummary` | The policy summary of this text asset. |
| pinnedField | string enum(UNSPECIFIED, UNKNOWN, HEADLINE_1, HEADLINE_2, HEADLINE_3, DESCRIPTION_1, DESCRIPTION_2, HEADLINE, HEADLINE_IN_PORTRAIT, LONG_HEADLINE, DESCRIPTION, DESCRIPTION_IN_PORTRAIT, BUSINESS_NAME_IN_PORTRAIT, BUSINESS_NAME, MARKETING_IMAGE, MARKETING_IMAGE_IN_PORTRAIT, SQUARE_MARKETING_IMAGE, PORTRAIT_MARKETING_IMAGE, LOGO, LANDSCAPE_LOGO, CALL_TO_ACTION, YOU_TUBE_VIDEO, SITELINK, CALL, MOBILE_APP, CALLOUT, STRUCTURED_SNIPPET, PRICE, PROMOTION, AD_IMAGE, LEAD_FORM, BUSINESS_LOGO, DESCRIPTION_PREFIX, HEADLINE_AS_SITELINK_POSITION_ONE, HEADLINE_AS_SITELINK_POSITION_TWO, DESCRIPTION_LINE_HEADLINE_AS_SITELINK_POSITION_ONE, DESCRIPTION_LINE_HEADLINE_AS_SITELINK_POSITION_TWO, TEXT_DISCLAIMER) | The pinned field of the asset. This restricts the asset to only serve within this field. Multiple assets can be pinned to the same field. An asset that is unpinned or pinned to a different field will not serve in a field where some other asset has been pinned. Values: UNSPECIFIED - No value has been specified.; UNKNOWN - The received value is not known in this version. This is a response-only value.; HEADLINE_1 - The asset is used in headline 1.; HEADLINE_2 - The asset is used in headline 2.; HEADLINE_3 - The asset is used in headline 3.; DESCRIPTION_1 - The asset is used in description 1.; DESCRIPTION_2 - The asset is used in description 2.; HEADLINE - The asset was used in a headline. Use this only if there is only one headline in the ad. Otherwise, use the HEADLINE_1, HEADLINE_2 or HEADLINE_3 enums; HEADLINE_IN_PORTRAIT - The asset was used as a headline in portrait image.; LONG_HEADLINE - The asset was used in a long headline (used in MultiAssetResponsiveAd).; DESCRIPTION - The asset was used in a description. Use this only if there is only one description in the ad. Otherwise, use the DESCRIPTION_1 or DESCRIPTION_@ enums; DESCRIPTION_IN_PORTRAIT - The asset was used as description in portrait image.; BUSINESS_NAME_IN_PORTRAIT - The asset was used as business name in portrait image.; BUSINESS_NAME - The asset was used as business name.; MARKETING_IMAGE - The asset was used as a marketing image.; MARKETING_IMAGE_IN_PORTRAIT - The asset was used as a marketing image in portrait image.; SQUARE_MARKETING_IMAGE - The asset was used as a square marketing image.; PORTRAIT_MARKETING_IMAGE - The asset was used as a portrait marketing image.; LOGO - The asset was used as a logo.; LANDSCAPE_LOGO - The asset was used as a landscape logo.; CALL_TO_ACTION - The asset was used as a call-to-action.; YOU_TUBE_VIDEO - The asset was used as a YouTube video.; SITELINK - This asset is used as a sitelink.; CALL - This asset is used as a call.; MOBILE_APP - This asset is used as a mobile app.; CALLOUT - This asset is used as a callout.; STRUCTURED_SNIPPET - This asset is used as a structured snippet.; PRICE - This asset is used as a price.; PROMOTION - This asset is used as a promotion.; AD_IMAGE - This asset is used as an image.; LEAD_FORM - The asset is used as a lead form.; BUSINESS_LOGO - The asset is used as a business logo.; DESCRIPTION_PREFIX - The asset is used as a description prefix.; HEADLINE_AS_SITELINK_POSITION_ONE - A headline asset used as a sitelink in position 1.; HEADLINE_AS_SITELINK_POSITION_TWO - A headline asset used as a sitelink in position 2.; DESCRIPTION_LINE_HEADLINE_AS_SITELINK_POSITION_ONE - A description line asset used as a sitelink in position 1.; DESCRIPTION_LINE_HEADLINE_AS_SITELINK_POSITION_TWO - A description line asset used as a sitelink in position 2.; TEXT_DISCLAIMER - The asset is used as a text disclaimer. |
| assetPerformanceLabel | string enum(UNSPECIFIED, UNKNOWN, PENDING, LEARNING, LOW, GOOD, BEST, NOT_APPLICABLE) | The performance label of this text asset. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; PENDING - This asset does not yet have any performance informantion. This may be because it is still under review.; LEARNING - The asset has started getting impressions but the stats are not statistically significant enough to get an asset performance label.; LOW - Worst performing assets.; GOOD - Good performing assets.; BEST - Best performing assets.; NOT_APPLICABLE - Performance label cannot be assigned to this asset. This may be because it's not used by asset based creatives. |

### `AdVideoAsset`

A video asset used inside an ad.

| Field | Type | Description |
|---|---|---|
| asset | string | The Asset resource name of this video. |
| adVideoAssetInfo | `AdVideoAssetInfo` | Contains info fields for this AdVideoAsset. |

### `AdDemandGenCarouselCardAsset`

A Demand Gen carousel card asset used inside an ad.

| Field | Type | Description |
|---|---|---|
| asset | string | The Asset resource name of this discovery carousel card. |

### `AdCallToActionAsset`

A call to action asset used inside an ad.

| Field | Type | Description |
|---|---|---|
| asset | string | The Asset resource name of this call to action asset. |

### `ResponsiveDisplayAdControlSpec`

Specification for various creative controls for a responsive display ad.

| Field | Type | Description |
|---|---|---|
| enableAutogenVideo | boolean | Whether the advertiser has opted into auto-gen video feature. |
| enableAssetEnhancements | boolean | Whether the advertiser has opted into the asset enhancements feature. |

### `SyntheticContentAttestation`

Represents an attestation about synthetic content from a single source.

| Field | Type | Description |
|---|---|---|
| source | string enum(UNSPECIFIED, UNKNOWN, ADVERTISER_ATTESTED, GOOGLE_GENERATED_ADVERTISER_REVIEWED, GOOGLE_GENERATED_FULLY_AUTOMATED) | The source of the synthetic content attestation. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return values only. Represents value unknown in this version.; ADVERTISER_ATTESTED - Attestation provided by the advertiser.; GOOGLE_GENERATED_ADVERTISER_REVIEWED - Google-generated content with advertiser review or input.; GOOGLE_GENERATED_FULLY_AUTOMATED - Google-autogenerated content without advertiser review. |
| status | string enum(UNSPECIFIED, UNKNOWN, NOT_SYNTHETIC, IS_SYNTHETIC) | Indicates the attestation status for whether the content should be labeled as created or edited with AI by this source. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return values only. Represents value unknown in this version.; NOT_SYNTHETIC - The content is attested as not needing to be labeled as created or edited with AI.; IS_SYNTHETIC - The content is attested as needing to be labeled as created or edited with AI. |

### `InFeedVideoAdInfo`

Representation of In-feed video ad format.

| Field | Type | Description |
|---|---|---|
| thumbnail | string enum(UNSPECIFIED, UNKNOWN, DEFAULT_THUMBNAIL, THUMBNAIL_1, THUMBNAIL_2, THUMBNAIL_3) | Video thumbnail image to use. Values: UNSPECIFIED - The type has not been specified.; UNKNOWN - The received value is not known in this version. This is a response-only value.; DEFAULT_THUMBNAIL - The default thumbnail. Can be auto-generated or user-uploaded.; THUMBNAIL_1 - Thumbnail 1, generated from the video.; THUMBNAIL_2 - Thumbnail 2, generated from the video.; THUMBNAIL_3 - Thumbnail 3, generated from the video. |
| description1 | string | First text line for the ad. |
| description2 | string | Second text line for the ad. |
| headline | string | The headline of the ad. |

### `VideoBumperInStreamAdInfo`

Representation of video bumper in-stream ad format (very short in-stream non-skippable video ad).

| Field | Type | Description |
|---|---|---|
| actionButtonLabel | string | Label on the "Call To Action" button taking the user to the video ad's final URL. |
| actionHeadline | string | Additional text displayed with the CTA (call-to-action) button to give context and encourage clicking on the button. |
| companionBanner | `AdImageAsset` | The image assets of the companion banner used with the ad. |

### `VideoNonSkippableInStreamAdInfo`

Representation of video non-skippable in-stream ad format (15 second in-stream non-skippable video ad).

| Field | Type | Description |
|---|---|---|
| actionHeadline | string | Additional text displayed with the "Call To Action" button to give context and encourage clicking on the button. |
| companionBanner | `AdImageAsset` | The image assets of the companion banner used with the ad. |
| actionButtonLabel | string | Label on the "Call To Action" button taking the user to the video ad's final URL. |

### `VideoOutstreamAdInfo`

Representation of video out-stream ad format (ad shown alongside a feed with automatic playback, without sound).

| Field | Type | Description |
|---|---|---|
| description | string | The description line. |
| headline | string | The headline of the ad. |

### `VideoTrueViewInStreamAdInfo`

Representation of video TrueView in-stream ad format (ad shown during video playback, often at beginning, which displays a skip button a few seconds into the video).

| Field | Type | Description |
|---|---|---|
| actionHeadline | string | Additional text displayed with the CTA (call-to-action) button to give context and encourage clicking on the button. |
| actionButtonLabel | string | Label on the CTA (call-to-action) button taking the user to the video ad's final URL. Required for TrueView for action campaigns, optional otherwise. |
| companionBanner | `AdImageAsset` | The image assets of the companion banner used with the ad. |

### `YouTubeAudioAdInfo`

Representation of YouTube Audio ad format.

Type: object

### `PolicyTopicConstraint`

Describes the effect on serving that a policy topic entry will have.

| Field | Type | Description |
|---|---|---|
| resellerConstraint | `PolicyTopicConstraint_ResellerConstraint` | Reseller constraint. |
| certificateDomainMismatchInCountryList | `PolicyTopicConstraint_CountryConstraintList` | Countries where the resource's domain is not covered by the certificates associated with it. |
| certificateMissingInCountryList | `PolicyTopicConstraint_CountryConstraintList` | Countries where a certificate is required for serving. |
| countryConstraintList | `PolicyTopicConstraint_CountryConstraintList` | Countries where the resource cannot serve. |

### `PolicyTopicEvidence`

Additional information that explains a policy finding.

| Field | Type | Description |
|---|---|---|
| destinationTextList | `PolicyTopicEvidence_DestinationTextList` | The text in the destination of the resource that is causing a policy finding. |
| destinationMismatch | `PolicyTopicEvidence_DestinationMismatch` | Mismatch between the destinations of a resource's URLs. |
| textList | `PolicyTopicEvidence_TextList` | List of evidence found in the text of a resource. |
| websiteList | `PolicyTopicEvidence_WebsiteList` | List of websites linked with this resource. |
| destinationNotWorking | `PolicyTopicEvidence_DestinationNotWorking` | Details when the destination is returning an HTTP error code or isn't functional in all locations for commonly used devices. |
| languageCode | string | The language the resource was detected to be written in. This is an IETF language tag such as "en-US". |

### `PolicyViolationKey`

Key of the violation. The key is used for referring to a violation when filing an exemption request.

| Field | Type | Description |
|---|---|---|
| violatingText | string | The text that violates the policy if specified. Otherwise, refers to the policy in general (for example, when requesting to be exempt from the whole policy). If not specified for criterion exemptions, the whole policy is implied. Must be specified for ad exemptions. |
| policyName | string | Unique ID of the violated policy. |

### `AdAssetPolicySummary`

Contains policy information for an asset inside an ad.

| Field | Type | Description |
|---|---|---|
| policyTopicEntries | array<`PolicyTopicEntry`> | The list of policy findings for this asset. |
| reviewStatus | string enum(UNSPECIFIED, UNKNOWN, REVIEW_IN_PROGRESS, REVIEWED, UNDER_APPEAL, ELIGIBLE_MAY_SERVE) | Where in the review process this asset. Values: UNSPECIFIED - No value has been specified.; UNKNOWN - The received value is not known in this version. This is a response-only value.; REVIEW_IN_PROGRESS - Currently under review.; REVIEWED - Primary review complete. Other reviews may be continuing.; UNDER_APPEAL - The resource has been resubmitted for approval or its policy decision has been appealed.; ELIGIBLE_MAY_SERVE - The resource is eligible and may be serving but could still undergo further review. |
| approvalStatus | string enum(UNSPECIFIED, UNKNOWN, DISAPPROVED, APPROVED_LIMITED, APPROVED, AREA_OF_INTEREST_ONLY) | The overall approval status of this asset, which is calculated based on the status of its individual policy topic entries. Values: UNSPECIFIED - No value has been specified.; UNKNOWN - The received value is not known in this version. This is a response-only value.; DISAPPROVED - Will not serve.; APPROVED_LIMITED - Serves with restrictions.; APPROVED - Serves without restrictions.; AREA_OF_INTEREST_ONLY - Will not serve in targeted countries, but may serve for users who are searching for information about the targeted countries. |

### `AdVideoAssetInfo`

Contains info fields for AdVideoAssets.

| Field | Type | Description |
|---|---|---|
| adVideoAssetInventoryPreferences | `AdVideoAssetInventoryPreferences` | List of inventory preferences for this AdVideoAsset. This field can only be set for DiscoveryVideoResponsiveAd. The video assets with an inventory asset preference set will be preferred over other videos from the same ad during serving time. For example, consider this ad being served for a specific inventory. The server will first try to match an eligible video with a matching preference for that inventory. Videos with no preferences are chosen only when a video with matching preference and eligible for a given ad slot can be found. |
| adVideoAssetFeatureControl | `AdVideoAssetLinkFeatureControl` | Defines feature controls for this AdVideoAsset during serving time. For example, whether YouTube comments should be enabled for Partnership Ads served on YouTube Shorts. |

### `PolicyTopicConstraint_CountryConstraintList`

A list of countries where a resource's serving is constrained.

| Field | Type | Description |
|---|---|---|
| totalTargetedCountries | integer (int32) | Total number of countries targeted by the resource. |
| countries | array<`PolicyTopicConstraint_CountryConstraint`> | Countries in which serving is restricted. |

### `PolicyTopicConstraint_ResellerConstraint`

Indicates that a policy topic was constrained due to disapproval of the website for reseller purposes.

Type: object

### `PolicyTopicEvidence_DestinationMismatch`

Evidence of mismatches between the URLs of a resource.

| Field | Type | Description |
|---|---|---|
| urlTypes | array<string enum(UNSPECIFIED, UNKNOWN, DISPLAY_URL, FINAL_URL, FINAL_MOBILE_URL, TRACKING_URL, MOBILE_TRACKING_URL)> | The set of URLs that did not match each other. |

### `PolicyTopicEvidence_DestinationNotWorking`

Evidence details when the destination is returning an HTTP error code or isn't functional in all locations for commonly used devices.

| Field | Type | Description |
|---|---|---|
| lastCheckedDateTime | string | The time the URL was last checked. The format is "YYYY-MM-DD HH:MM:SS". Examples: "2018-03-05 09:15:00" or "2018-02-01 14:34:30" |
| expandedUrl | string | The full URL that didn't work. |
| device | string enum(UNSPECIFIED, UNKNOWN, DESKTOP, ANDROID, IOS) | The type of device that failed to load the URL. Values: UNSPECIFIED - No value has been specified.; UNKNOWN - The received value is not known in this version. This is a response-only value.; DESKTOP - Landing page doesn't work on desktop device.; ANDROID - Landing page doesn't work on Android device.; IOS - Landing page doesn't work on iOS device. |
| httpErrorCode | string (int64) | The HTTP error code. |
| dnsErrorType | string enum(UNSPECIFIED, UNKNOWN, HOSTNAME_NOT_FOUND, GOOGLE_CRAWLER_DNS_ISSUE) | The type of DNS error. Values: UNSPECIFIED - No value has been specified.; UNKNOWN - The received value is not known in this version. This is a response-only value.; HOSTNAME_NOT_FOUND - Host name not found in DNS when fetching landing page.; GOOGLE_CRAWLER_DNS_ISSUE - Google internal crawler issue when communicating with DNS. This error doesn't mean the landing page doesn't work. Google will recrawl the landing page. |

### `PolicyTopicEvidence_DestinationTextList`

A list of strings found in a destination page that caused a policy finding.

| Field | Type | Description |
|---|---|---|
| destinationTexts | array<string> | List of text found in the resource's destination page. |

### `PolicyTopicEvidence_TextList`

A list of fragments of text that violated a policy.

| Field | Type | Description |
|---|---|---|
| texts | array<string> | The fragments of text from the resource that caused the policy finding. |

### `PolicyTopicEvidence_WebsiteList`

A list of websites that caused a policy finding. Used for ONE_WEBSITE_PER_AD_GROUP policy topic, for example. In case there are more than five websites, only the top five (those that appear in resources the most) will be listed here.

| Field | Type | Description |
|---|---|---|
| websites | array<string> | Websites that caused the policy finding. |

### `AdVideoAssetInventoryPreferences`

YouTube Video Asset inventory preferences.

| Field | Type | Description |
|---|---|---|
| inFeedPreference | boolean | When true, YouTube Video Asset with this inventory preference will be preferred when choosing a video to serve In Feed. |
| inStreamPreference | boolean | When true, YouTube Video Asset with this inventory preference will be preferred when choosing a video to serve In Stream. |
| shortsPreference | boolean | When true, YouTube Video Asset with this inventory preference will be preferred when choosing a video to serve on YouTube Shorts. |

### `AdVideoAssetLinkFeatureControl`

YouTube Video Asset feature controls.

| Field | Type | Description |
|---|---|---|
| allowYoutubeComments | boolean | Defines if YouTube comments should be enabled for the creative using this YouTube video asset served on YouTube Shorts. |

### `PolicyTopicConstraint_CountryConstraint`

Indicates that a resource's ability to serve in a particular country is constrained.

| Field | Type | Description |
|---|---|---|
| countryCriterion | string | Geo target constant resource name of the country in which serving is constrained. |

