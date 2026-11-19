# Ad Group Criterion (listing groups)

> Source: Google Ads API v26 REST Discovery document (https://googleads.googleapis.com/$discovery/rest?version=v26) and Shopping ads guide (https://developers.google.com/google-ads/api/docs/shopping-ads/overview). Fetched 2026-11-19.

Resource schema: `AdGroupCriterion`. Read data via `GoogleAdsService.Search`/`SearchStream` (see google_ads_service.md).

---

## customers.adGroupCriteria.mutate

`POST https://googleads.googleapis.com/v26/customers/{+customerId}/adGroupCriteria:mutate`

Creates, updates, or removes criteria. Operation statuses are returned. List of thrown errors: AdGroupCriterionError AdxError AuthenticationError AuthorizationError BiddingError BiddingStrategyError CollectionSizeError ContextError CriterionError DatabaseError DateError DistinctError FieldError FieldMaskError HeaderError IdError InternalError MultiplierError MutateError NewResourceCreationError NotEmptyError NullError OperationAccessDeniedError OperatorError PolicyViolationError QuotaError RangeError RequestError ResourceCountLimitExceededError SizeLimitError StringFormatError StringLengthError UrlFieldError

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| customerId | path | string | yes | Required. ID of the customer whose criteria are being modified. |

**Request body**: `MutateAdGroupCriteriaRequest`

**Response**: `MutateAdGroupCriteriaResponse`

---

## Schemas

### `AdGroupCriterion`

An ad group criterion. The ad_group_criterion report only returns criteria that were explicitly added to the ad group.

| Field | Type | Description |
|---|---|---|
| youtubeVideo | `YouTubeVideoInfo` | Immutable. YouTube Video. |
| youtubeChannel | `YouTubeChannelInfo` | Immutable. YouTube Channel. |
| effectiveCpmBidMicros | string (int64) | Output only. The effective CPM (cost-per-thousand viewable impressions) bid. |
| topic | `TopicInfo` | Immutable. Topic. |
| webpage | `WebpageInfo` | Immutable. Webpage |
| labels | array<string> | Output only. The resource names of labels attached to this ad group criterion. |
| positionEstimates | `AdGroupCriterion_PositionEstimates` | Output only. Estimates for criterion bids at various positions. |
| lifeEvent | `LifeEventInfo` | Immutable. Life event campaign criterion. |
| resourceName | string | Immutable. The resource name of the ad group criterion. Ad group criterion resource names have the form: `customers/{customer_id}/adGroupCriteria/{ad_group_id}~{criterion_id}` |
| audience | `AudienceInfo` | Immutable. Audience. |
| status | string enum(UNSPECIFIED, UNKNOWN, ENABLED, PAUSED, REMOVED) | The status of the criterion. This is the status of the ad group criterion entity, set by the client. Note: UI reports may incorporate additional information that affects whether a criterion is eligible to run. In some cases a criterion that's REMOVED in the API can still show as enabled in the UI. For example, campaigns by default show to users of all age ranges unless excluded. The UI will show each age range as "enabled", since they're eligible to see the ads; but AdGroupCriterion.status will show "removed", since no positive criterion was added. Values: UNSPECIFIED - No value has been specified.; UNKNOWN - The received value is not known in this version. This is a response-only value.; ENABLED - The ad group criterion is enabled.; PAUSED - The ad group criterion is paused.; REMOVED - The ad group criterion is removed. |
| location | `LocationInfo` | Immutable. Location. |
| mobileApplication | `MobileApplicationInfo` | Immutable. Mobile application. |
| appPaymentModel | `AppPaymentModelInfo` | Immutable. App Payment Model. |
| effectivePercentCpcBidSource | string enum(UNSPECIFIED, UNKNOWN, CAMPAIGN_BIDDING_STRATEGY, AD_GROUP, AD_GROUP_CRITERION) | Output only. Source of the effective Percent CPC bid. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; CAMPAIGN_BIDDING_STRATEGY - Effective bid or target is inherited from campaign bidding strategy.; AD_GROUP - The bid or target is defined on the ad group.; AD_GROUP_CRITERION - The bid or target is defined on the ad group criterion. |
| verticalAdsItemGroupRuleList | `VerticalAdsItemGroupRuleListInfo` | Immutable. Vertical ads item group rule list criterion. |
| keyword | `KeywordInfo` | Immutable. Keyword. |
| percentCpcBidMicros | string (int64) | The CPC bid amount, expressed as a fraction of the advertised price for some good or service. The valid range for the fraction is [0,1) and the value stored here is 1,000,000 * [fraction]. |
| urlCustomParameters | array<`CustomParameter`> | The list of mappings used to substitute custom parameter tags in a `tracking_url_template`, `final_urls`, or `mobile_final_urls`. |
| approvalStatus | string enum(UNSPECIFIED, UNKNOWN, APPROVED, DISAPPROVED, PENDING_REVIEW, UNDER_REVIEW) | Output only. Approval status of the criterion. Values: UNSPECIFIED - Not specified.; UNKNOWN - The value is unknown in this version.; APPROVED - Approved.; DISAPPROVED - Disapproved.; PENDING_REVIEW - Pending Review.; UNDER_REVIEW - Under review. |
| effectiveCpcBidMicros | string (int64) | Output only. The effective CPC (cost-per-click) bid. |
| adGroup | string | Immutable. The ad group to which the criterion belongs. |
| listingGroup | `ListingGroupInfo` | Immutable. Listing group. |
| disapprovalReasons | array<string> | Output only. List of disapproval reasons of the criterion. The different reasons for disapproving a criterion can be found here: https://support.google.com/adspolicy/answer/6008942 This field is read-only. |
| placement | `PlacementInfo` | Immutable. Placement. |
| mobileAppCategory | `MobileAppCategoryInfo` | Immutable. Mobile app category. |
| userList | `UserListInfo` | Immutable. User List. |
| finalUrlSuffix | string | URL template for appending params to final URL. |
| primaryStatus | string enum(UNSPECIFIED, UNKNOWN, ELIGIBLE, PAUSED, REMOVED, PENDING, NOT_ELIGIBLE) | Output only. The primary status for the ad group criterion. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; ELIGIBLE - The ad group criterion is eligible to serve.; PAUSED - The ad group criterion is paused.; REMOVED - The ad group criterion is removed.; PENDING - The ad group criterion is pending.; NOT_ELIGIBLE - The ad group criterion is not eligible to serve. |
| language | `LanguageInfo` | Immutable. Language. |
| effectiveCpvBidSource | string enum(UNSPECIFIED, UNKNOWN, CAMPAIGN_BIDDING_STRATEGY, AD_GROUP, AD_GROUP_CRITERION) | Output only. Source of the effective CPV bid. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; CAMPAIGN_BIDDING_STRATEGY - Effective bid or target is inherited from campaign bidding strategy.; AD_GROUP - The bid or target is defined on the ad group.; AD_GROUP_CRITERION - The bid or target is defined on the ad group criterion. |
| finalUrls | array<string> | The list of possible final URLs after all cross-domain redirects for the ad. |
| cpcBidMicros | string (int64) | The CPC (cost-per-click) bid. |
| displayName | string | Output only. The display name of the criterion. This field is ignored for mutates. |
| gender | `GenderInfo` | Immutable. Gender. |
| requireEuPoliticalAdvertisingDeclaration | boolean | Output only. Indicates whether using this criterion requires setting Campaign.contains_eu_political_advertising field. |
| customAffinity | `CustomAffinityInfo` | Immutable. Custom Affinity. |
| qualityInfo | `AdGroupCriterion_QualityInfo` | Output only. Information regarding the quality of the criterion. |
| customAudience | `CustomAudienceInfo` | Immutable. Custom Audience. |
| negative | boolean | Immutable. Whether to target (`false`) or exclude (`true`) the criterion. This field is immutable. To switch a criterion from positive to negative, remove then re-add it. |
| entityBid | `EntityBid` | Immutable. Entity bid criterion. |
| criterionId | string (int64) | Output only. The ID of the criterion. This field is ignored for mutates. |
| type | string enum(UNSPECIFIED, UNKNOWN, KEYWORD, PLACEMENT, MOBILE_APP_CATEGORY, MOBILE_APPLICATION, DEVICE, LOCATION, LISTING_GROUP, AD_SCHEDULE, AGE_RANGE, GENDER, INCOME_RANGE, PARENTAL_STATUS, YOUTUBE_VIDEO, YOUTUBE_CHANNEL, USER_LIST, PROXIMITY, TOPIC, LISTING_SCOPE, LANGUAGE, IP_BLOCK, CONTENT_LABEL, CARRIER, USER_INTEREST, WEBPAGE, OPERATING_SYSTEM_VERSION, APP_PAYMENT_MODEL, MOBILE_DEVICE, CUSTOM_AFFINITY, CUSTOM_INTENT, LOCATION_GROUP, CUSTOM_AUDIENCE, COMBINED_AUDIENCE, KEYWORD_THEME, AUDIENCE, NEGATIVE_KEYWORD_LIST, LOCAL_SERVICE_ID, SEARCH_THEME, BRAND, BRAND_LIST, LIFE_EVENT, WEBPAGE_LIST, VIDEO_LINEUP, PLACEMENT_LIST, VERTICAL_ADS_ITEM_GROUP_RULE_LIST, VERTICAL_ADS_ITEM_GROUP_RULE, VERTICAL_ADS_ITEM_BID, RETAIL_FILTER_BUNDLE, RETAIL_FILTER) | Output only. The type of the criterion. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; KEYWORD - Keyword, for example, 'mars cruise'.; PLACEMENT - Placement, also known as Website, for example, 'www.flowers4sale.com'; MOBILE_APP_CATEGORY - Mobile application categories to target.; MOBILE_APPLICATION - Mobile applications to target.; DEVICE - Devices to target.; LOCATION - Locations to target.; LISTING_GROUP - Listing groups to target.; AD_SCHEDULE - Ad Schedule.; AGE_RANGE - Age range.; GENDER - Gender.; INCOME_RANGE - Income Range.; PARENTAL_STATUS - Parental status.; YOUTUBE_VIDEO - YouTube Video.; YOUTUBE_CHANNEL - YouTube Channel.; USER_LIST - User list.; PROXIMITY - Proximity.; TOPIC - A topic target on the display network (for example, "Pets & Animals").; LISTING_SCOPE - Listing scope to target.; LANGUAGE - Language.; IP_BLOCK - IpBlock.; CONTENT_LABEL - Content Label for category exclusion.; CARRIER - Carrier.; USER_INTEREST - A category the user is interested in.; WEBPAGE - Webpage criterion for dynamic search ads.; OPERATING_SYSTEM_VERSION - Operating system version.; APP_PAYMENT_MODEL - App payment model.; MOBILE_DEVICE - Mobile device.; CUSTOM_AFFINITY - Custom affinity.; CUSTOM_INTENT - Custom intent.; LOCATION_GROUP - Location group.; CUSTOM_AUDIENCE - Custom audience; COMBINED_AUDIENCE - Combined audience; KEYWORD_THEME - Smart Campaign keyword theme; AUDIENCE - Audience; NEGATIVE_KEYWORD_LIST - Negative Keyword List; LOCAL_SERVICE_ID - Local Services Ads Service ID.; SEARCH_THEME - Search Theme.; BRAND - Brand; BRAND_LIST - Brand List; LIFE_EVENT - Life Event; WEBPAGE_LIST - Webpage List; VIDEO_LINEUP - Video lineup; PLACEMENT_LIST - Placement List; VERTICAL_ADS_ITEM_GROUP_RULE_LIST - A list of rules for item groups in Vertical Ads.; VERTICAL_ADS_ITEM_GROUP_RULE - A rule for an item group in Vertical Ads.; VERTICAL_ADS_ITEM_BID - A bid for a Vertical Ads item.; RETAIL_FILTER_BUNDLE - Retail Filter Bundle for linking a retail filter shared set to an ad group.; RETAIL_FILTER - Retail Filter for defining individual tag rules or expressions within a shared set. |
| retailFilterBundle | `RetailFilterBundle` | Immutable. Retail Filter Bundle. |
| bidModifier | number (double) | The modifier for the bid when the criterion matches. The modifier must be in the range: 0.1 - 10.0. Most targetable criteria types support modifiers. |
| combinedAudience | `CombinedAudienceInfo` | Immutable. Combined Audience. |
| cpvBidMicros | string (int64) | The CPV (cost-per-view) bid. |
| customIntent | `CustomIntentInfo` | Immutable. Custom Intent. |
| effectiveCpvBidMicros | string (int64) | Output only. The effective CPV (cost-per-view) bid. |
| videoLineup | `VideoLineupInfo` | Immutable. Video lineup criterion. |
| incomeRange | `IncomeRangeInfo` | Immutable. Income range. |
| extendedDemographic | `ExtendedDemographicInfo` | Immutable. Extended demographic criterion. |
| effectiveCpmBidSource | string enum(UNSPECIFIED, UNKNOWN, CAMPAIGN_BIDDING_STRATEGY, AD_GROUP, AD_GROUP_CRITERION) | Output only. Source of the effective CPM bid. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; CAMPAIGN_BIDDING_STRATEGY - Effective bid or target is inherited from campaign bidding strategy.; AD_GROUP - The bid or target is defined on the ad group.; AD_GROUP_CRITERION - The bid or target is defined on the ad group criterion. |
| systemServingStatus | string enum(UNSPECIFIED, UNKNOWN, ELIGIBLE, RARELY_SERVED) | Output only. Serving status of the criterion. Values: UNSPECIFIED - Not specified.; UNKNOWN - The value is unknown in this version.; ELIGIBLE - Eligible.; RARELY_SERVED - Low search volume. |
| primaryStatusReasons | array<string enum(UNSPECIFIED, UNKNOWN, CAMPAIGN_PENDING, CAMPAIGN_CRITERION_NEGATIVE, CAMPAIGN_PAUSED, CAMPAIGN_REMOVED, CAMPAIGN_ENDED, AD_GROUP_PAUSED, AD_GROUP_REMOVED, AD_GROUP_CRITERION_DISAPPROVED, AD_GROUP_CRITERION_RARELY_SERVED, AD_GROUP_CRITERION_LOW_QUALITY, AD_GROUP_CRITERION_UNDER_REVIEW, AD_GROUP_CRITERION_PENDING_REVIEW, AD_GROUP_CRITERION_BELOW_FIRST_PAGE_BID, AD_GROUP_CRITERION_NEGATIVE, AD_GROUP_CRITERION_RESTRICTED, AD_GROUP_CRITERION_PAUSED, AD_GROUP_CRITERION_PAUSED_DUE_TO_LOW_ACTIVITY, AD_GROUP_CRITERION_REMOVED)> | Output only. The primary status reasons for the ad group criterion. |
| parentalStatus | `ParentalStatusInfo` | Immutable. Parental status. |
| cpmBidMicros | string (int64) | The CPM (cost-per-thousand viewable impressions) bid. |
| effectivePercentCpcBidMicros | string (int64) | Output only. The effective Percent CPC bid amount. |
| finalMobileUrls | array<string> | The list of possible final mobile URLs after all cross-domain redirects. |
| brandList | `BrandListInfo` | Immutable. Brand list criterion. |
| trackingUrlTemplate | string | The URL template for constructing a tracking URL. |
| effectiveCpcBidSource | string enum(UNSPECIFIED, UNKNOWN, CAMPAIGN_BIDDING_STRATEGY, AD_GROUP, AD_GROUP_CRITERION) | Output only. Source of the effective CPC bid. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; CAMPAIGN_BIDDING_STRATEGY - Effective bid or target is inherited from campaign bidding strategy.; AD_GROUP - The bid or target is defined on the ad group.; AD_GROUP_CRITERION - The bid or target is defined on the ad group criterion. |
| ageRange | `AgeRangeInfo` | Immutable. Age range. |
| userInterest | `UserInterestInfo` | Immutable. User Interest. |

### `MutateAdGroupCriteriaRequest`

Request message for AdGroupCriterionService.MutateAdGroupCriteria.

| Field | Type | Description |
|---|---|---|
| operations | array<`AdGroupCriterionOperation`> | Required. The list of operations to perform on individual criteria. |
| partialFailure | boolean | If true, successful operations will be carried out and invalid operations will return errors. If false, all operations will be carried out in one transaction if and only if they are all valid. Default is false. |
| responseContentType | string enum(UNSPECIFIED, RESOURCE_NAME_ONLY, MUTABLE_RESOURCE) | The response content type setting. Determines whether the mutable resource or just the resource name should be returned post mutation. Values: UNSPECIFIED - Not specified. Will return the resource name only in the response.; RESOURCE_NAME_ONLY - The mutate response will be the resource name.; MUTABLE_RESOURCE - The mutate response will contain the resource name and the resource with mutable fields if possible. Otherwise, only the resource name will be returned. |
| validateOnly | boolean | If true, the request is validated but not executed. Only errors are returned, not results. |

### `MutateAdGroupCriteriaResponse`

Response message for an ad group criterion mutate.

| Field | Type | Description |
|---|---|---|
| results | array<`MutateAdGroupCriterionResult`> | All results for the mutate. |
| partialFailureError | `GoogleRpc__Status` | Errors that pertain to operation failures in the partial failure mode. Returned only when partial_failure = true and all errors occur inside the operations. If any errors occur outside the operations (for example, auth errors), we return an RPC level error. |

### `AgeRangeInfo`

An age range criterion.

| Field | Type | Description |
|---|---|---|
| type | string enum(UNSPECIFIED, UNKNOWN, AGE_RANGE_18_24, AGE_RANGE_25_34, AGE_RANGE_35_44, AGE_RANGE_45_54, AGE_RANGE_55_64, AGE_RANGE_65_UP, AGE_RANGE_UNDETERMINED) | Type of the age range. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; AGE_RANGE_18_24 - Between 18 and 24 years old.; AGE_RANGE_25_34 - Between 25 and 34 years old.; AGE_RANGE_35_44 - Between 35 and 44 years old.; AGE_RANGE_45_54 - Between 45 and 54 years old.; AGE_RANGE_55_64 - Between 55 and 64 years old.; AGE_RANGE_65_UP - 65 years old and beyond.; AGE_RANGE_UNDETERMINED - Undetermined age range. |

### `AppPaymentModelInfo`

An app payment model criterion.

| Field | Type | Description |
|---|---|---|
| type | string enum(UNSPECIFIED, UNKNOWN, PAID) | Type of the app payment model. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; PAID - Represents paid-for apps. |

### `AudienceInfo`

An audience criterion.

| Field | Type | Description |
|---|---|---|
| audience | string | The Audience resource name. |

### `BrandListInfo`

A Brand List Criterion is used to specify a list of brands. The list is represented as a SharedSet id type BRAND_HINT. A criterion of this type can be either targeted or excluded.

| Field | Type | Description |
|---|---|---|
| sharedSet | string | Shared set resource name of the brand list. |

### `CombinedAudienceInfo`

A combined audience criterion.

| Field | Type | Description |
|---|---|---|
| combinedAudience | string | The CombinedAudience resource name. |

### `CustomAffinityInfo`

A custom affinity criterion. A criterion of this type is only targetable.

| Field | Type | Description |
|---|---|---|
| customAffinity | string | The CustomInterest resource name. |

### `CustomAudienceInfo`

A custom audience criterion.

| Field | Type | Description |
|---|---|---|
| customAudience | string | The CustomAudience resource name. |

### `CustomIntentInfo`

A custom intent criterion. A criterion of this type is only targetable.

| Field | Type | Description |
|---|---|---|
| customIntent | string | The CustomInterest resource name. |

### `CustomParameter`

A mapping that can be used by custom parameter tags in a `tracking_url_template`, `final_urls`, or `mobile_final_urls`.

| Field | Type | Description |
|---|---|---|
| value | string | The value to be substituted. |
| key | string | The key matching the parameter tag name. |

### `EntityBid`

Represents an entity bid criterion.

| Field | Type | Description |
|---|---|---|
| itemCode | string | The ID specifying a particular travel entity, such as a hotel, a thing to do, or an event. |

### `ExtendedDemographicInfo`

Represents an extended demographic criterion.

| Field | Type | Description |
|---|---|---|
| extendedDemographicId | string (int64) | Taxonomy id of the extended demographic group. |

### `GenderInfo`

A gender criterion.

| Field | Type | Description |
|---|---|---|
| type | string enum(UNSPECIFIED, UNKNOWN, MALE, FEMALE, UNDETERMINED) | Type of the gender. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; MALE - Male.; FEMALE - Female.; UNDETERMINED - Undetermined gender. |

### `IncomeRangeInfo`

An income range criterion.

| Field | Type | Description |
|---|---|---|
| type | string enum(UNSPECIFIED, UNKNOWN, INCOME_RANGE_0_50, INCOME_RANGE_50_60, INCOME_RANGE_60_70, INCOME_RANGE_70_80, INCOME_RANGE_80_90, INCOME_RANGE_90_UP, INCOME_RANGE_UNDETERMINED) | Type of the income range. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; INCOME_RANGE_0_50 - 0%-50%.; INCOME_RANGE_50_60 - 50% to 60%.; INCOME_RANGE_60_70 - 60% to 70%.; INCOME_RANGE_70_80 - 70% to 80%.; INCOME_RANGE_80_90 - 80% to 90%.; INCOME_RANGE_90_UP - Greater than 90%.; INCOME_RANGE_UNDETERMINED - Undetermined income range. |

### `KeywordInfo`

A keyword criterion.

| Field | Type | Description |
|---|---|---|
| matchType | string enum(UNSPECIFIED, UNKNOWN, EXACT, PHRASE, BROAD) | The match type of the keyword. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; EXACT - Exact match.; PHRASE - Phrase match.; BROAD - Broad match. |
| text | string | The text of the keyword (at most 80 characters and 10 words). |

### `LanguageInfo`

A language criterion.

| Field | Type | Description |
|---|---|---|
| languageConstant | string | The language constant resource name. |

### `LifeEventInfo`

Represents a life event criterion.

| Field | Type | Description |
|---|---|---|
| lifeEventId | string (int64) | Taxonomy id of the life event. |

### `ListingGroupInfo`

A listing group criterion.

| Field | Type | Description |
|---|---|---|
| caseValue | `ListingDimensionInfo` | Dimension value with which this listing group is refining its parent. Undefined for the root group. |
| parentAdGroupCriterion | string | Resource name of ad group criterion which is the parent listing group subdivision. Null for the root group. |
| type | string enum(UNSPECIFIED, UNKNOWN, SUBDIVISION, UNIT) | Type of the listing group. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; SUBDIVISION - Subdivision of products along some listing dimension. These nodes are not used by serving to target listing entries, but is purely to define the structure of the tree.; UNIT - Listing group unit that defines a bid. |
| path | `ListingDimensionPath` | The path of dimensions defining this listing group. |

### `LocationInfo`

A location criterion.

| Field | Type | Description |
|---|---|---|
| geoTargetConstant | string | The geo target constant resource name. |

### `MobileAppCategoryInfo`

A mobile app category criterion.

| Field | Type | Description |
|---|---|---|
| mobileAppCategoryConstant | string | The mobile app category constant resource name. |

### `MobileApplicationInfo`

A mobile application criterion.

| Field | Type | Description |
|---|---|---|
| appId | string | A string that uniquely identifies a mobile application to Google Ads API. The format of this string is "{platform}-{platform_native_id}", where platform is "1" for iOS apps and "2" for Android apps, and where platform_native_id is the mobile application identifier native to the corresponding platform. For iOS, this native identifier is the 9 digit string that appears at the end of an App Store URL (for example, "476943146" for "Flood-It! 2" whose App Store link is "http://itunes.apple.com/us/app/flood-it!-2/id476943146"). For Android, this native identifier is the application's package name (for example, "com.labpixies.colordrips" for "Color Drips" given Google Play link "https://play.google.com/store/apps/details?id=com.labpixies.colordrips"). A well formed app id for Google Ads API would thus be "1-476943146" for iOS and "2-com.labpixies.colordrips" for Android. This field is required and must be set in CREATE operations. |
| name | string | Name of this mobile application. |

### `ParentalStatusInfo`

A parental status criterion.

| Field | Type | Description |
|---|---|---|
| type | string enum(UNSPECIFIED, UNKNOWN, PARENT, NOT_A_PARENT, UNDETERMINED) | Type of the parental status. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; PARENT - Parent.; NOT_A_PARENT - Not a parent.; UNDETERMINED - Undetermined parental status. |

### `PlacementInfo`

A placement criterion. This can be used to modify bids for sites when targeting the content network.

| Field | Type | Description |
|---|---|---|
| url | string | URL of the placement. For example, "http://www.domain.com". |

### `RetailFilterBundle`

Represents a Retail Filter Bundle, used to link an ad group to a shared set containing retail filters.

| Field | Type | Description |
|---|---|---|
| sharedSet | string | The resource name of the shared set that contains the retail filter. This field is required. |

### `TopicInfo`

A topic criterion. Use topics to target or exclude placements in the Google Display Network based on the category into which the placement falls (for example, "Pets & Animals/Pets/Dogs").

| Field | Type | Description |
|---|---|---|
| path | array<string> | The category to target or exclude. Each subsequent element in the array describes a more specific sub-category. For example, "Pets & Animals", "Pets", "Dogs" represents the "Pets & Animals/Pets/Dogs" category. |
| topicConstant | string | The Topic Constant resource name. |

### `UserInterestInfo`

Represents a particular interest-based topic to be targeted.

| Field | Type | Description |
|---|---|---|
| userInterestCategory | string | The UserInterest resource name. |

### `UserListInfo`

A User List criterion. Represents a user list that is defined by the advertiser to be targeted.

| Field | Type | Description |
|---|---|---|
| userList | string | The User List resource name. |

### `VerticalAdsItemGroupRuleListInfo`

A criterion for targeting a shared set of rules for item groups in Vertical Ads (e.g., for hotel ads).

| Field | Type | Description |
|---|---|---|
| sharedSet | string | The shared set resource name of the vertical ads item group rule list. |

### `VideoLineupInfo`

A Video lineup criterion.

| Field | Type | Description |
|---|---|---|
| videoLineupId | string (int64) | ID for a Video lineup. Contact your Google business development representative for details. |

### `WebpageInfo`

Represents a criterion for targeting webpages of an advertiser's website.

| Field | Type | Description |
|---|---|---|
| sample | `WebpageSampleInfo` | List of sample urls that match the website target. This field is read-only. |
| conditions | array<`WebpageConditionInfo`> | Conditions, or logical expressions, for webpage targeting. The list of webpage targeting conditions are and-ed together when evaluated for targeting. An empty list of conditions indicates all pages of the campaign's website are targeted. This field is required for CREATE operations and is prohibited on UPDATE operations. |
| coveragePercentage | number (double) | Website criteria coverage percentage. This is the computed percentage of website coverage based on the website target, negative website target and negative keywords in the ad group and campaign. For instance, when coverage returns as 1, it indicates it has 100% coverage. This field is read-only. |
| criterionName | string | The name of the criterion that is defined by this parameter. The name value will be used for identifying, sorting and filtering criteria with this type of parameters. This field is required for CREATE operations and is prohibited on UPDATE operations. |

### `YouTubeChannelInfo`

A YouTube Channel criterion.

| Field | Type | Description |
|---|---|---|
| channelId | string | The YouTube uploader channel id or the channel code of a YouTube channel. |

### `YouTubeVideoInfo`

A YouTube Video criterion.

| Field | Type | Description |
|---|---|---|
| videoId | string | YouTube video id as it appears on the YouTube watch page. |

### `AdGroupCriterion_PositionEstimates`

Estimates for criterion bids at various positions.

| Field | Type | Description |
|---|---|---|
| estimatedAddCostAtFirstPositionCpc | string (int64) | Output only. Estimate of how your cost per week might change when changing your keyword bid to the value in first_position_cpc_micros. |
| firstPositionCpcMicros | string (int64) | Output only. The estimate of the CPC bid required for ad to be displayed in first position, at the top of the first page of search results. |
| estimatedAddClicksAtFirstPositionCpc | string (int64) | Output only. Estimate of how many clicks per week you might get by changing your keyword bid to the value in first_position_cpc_micros. |
| topOfPageCpcMicros | string (int64) | Output only. The estimate of the CPC bid required for ad to be displayed at the top of the first page of search results. |
| firstPageCpcMicros | string (int64) | Output only. The estimate of the CPC bid required for ad to be shown on first page of search results. |

### `AdGroupCriterion_QualityInfo`

A container for ad group criterion quality information.

| Field | Type | Description |
|---|---|---|
| qualityScore | integer (int32) | Output only. The quality score. This field may not be populated if Google does not have enough information to determine a value. |
| postClickQualityScore | string enum(UNSPECIFIED, UNKNOWN, BELOW_AVERAGE, AVERAGE, ABOVE_AVERAGE) | Output only. The quality score of the landing page. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; BELOW_AVERAGE - Quality of the creative is below average.; AVERAGE - Quality of the creative is average.; ABOVE_AVERAGE - Quality of the creative is above average. |
| searchPredictedCtr | string enum(UNSPECIFIED, UNKNOWN, BELOW_AVERAGE, AVERAGE, ABOVE_AVERAGE) | Output only. The clickthrough rate (CTR) compared to that of other advertisers. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; BELOW_AVERAGE - Quality of the creative is below average.; AVERAGE - Quality of the creative is average.; ABOVE_AVERAGE - Quality of the creative is above average. |
| creativeQualityScore | string enum(UNSPECIFIED, UNKNOWN, BELOW_AVERAGE, AVERAGE, ABOVE_AVERAGE) | Output only. The performance of the ad compared to other advertisers. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; BELOW_AVERAGE - Quality of the creative is below average.; AVERAGE - Quality of the creative is average.; ABOVE_AVERAGE - Quality of the creative is above average. |

### `AdGroupCriterionOperation`

A single operation (create, remove, update) on an ad group criterion.

| Field | Type | Description |
|---|---|---|
| exemptPolicyViolationKeys | array<`PolicyViolationKey`> | The list of policy violation keys that should not cause a PolicyViolationError to be reported. Not all policy violations are exemptable, refer to the is_exemptible field in the returned PolicyViolationError. Resources violating these polices will be saved, but will not be eligible to serve. They may begin serving at a later time due to a change in policies, re-review of the resource, or a change in advertiser certificates. |
| updateMask | string (google-fieldmask) | FieldMask that determines which resource fields are modified in an update. |
| update | `AdGroupCriterion` | Update operation: The criterion is expected to have a valid resource name. |
| remove | string | Remove operation: A resource name for the removed criterion is expected, in this format: `customers/{customer_id}/adGroupCriteria/{ad_group_id}~{criterion_id}` |
| create | `AdGroupCriterion` | Create operation: No resource name is expected for the new criterion. |

### `MutateAdGroupCriterionResult`

The result for the criterion mutate.

| Field | Type | Description |
|---|---|---|
| resourceName | string | Returned for successful operations. |
| adGroupCriterion | `AdGroupCriterion` | The mutated ad group criterion with only mutable fields after mutate. The field will only be returned when response_content_type is set to "MUTABLE_RESOURCE". |

### `GoogleRpc__Status`

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

| Field | Type | Description |
|---|---|---|
| details | array<map<string, any>> | A list of messages that carry the error details. There is a common set of message types for APIs to use. |
| message | string | A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. |
| code | integer (int32) | The status code, which should be an enum value of google.rpc.Code. |

### `ListingDimensionInfo`

Listing dimensions for listing group criterion.

| Field | Type | Description |
|---|---|---|
| productItemId | `ProductItemIdInfo` | Item id of a product offer. |
| productLabels | `ProductLabelsInfo` | Labels of a product offer. This listing dimension is deprecated and it is supported only in Display campaigns. |
| productType | `ProductTypeInfo` | Type of a product offer. |
| productCategory | `ProductCategoryInfo` | Category of a product offer. |
| hotelCountryRegion | `HotelCountryRegionInfo` | Country or Region the hotel is located in. |
| unknownListingDimension | `UnknownListingDimensionInfo` | Unknown dimension. Set when no other listing dimension is set. |
| activityState | `ActivityStateInfo` | The state where the travel activity is available. |
| hotelCity | `HotelCityInfo` | City the hotel is located in. |
| activityCity | `ActivityCityInfo` | The city where the travel activity is available. |
| productTypeFull | `ProductTypeFullInfo` | Full type of a product offer. This listing dimension is deprecated and it is supported only in Display campaigns. |
| productChannel | `ProductChannelInfo` | Locality of a product offer. |
| hotelId | `HotelIdInfo` | Advertiser-specific hotel ID. |
| productGrouping | `ProductGroupingInfo` | Grouping of a product offer. This listing dimension is deprecated and it is supported only in Display campaigns. |
| productChannelExclusivity | `ProductChannelExclusivityInfo` | Availability of a product offer. |
| productBrand | `ProductBrandInfo` | Brand of a product offer. |
| hotelState | `HotelStateInfo` | State the hotel is located in. |
| activityId | `ActivityIdInfo` | Advertiser-specific activity ID. |
| productLegacyCondition | `ProductLegacyConditionInfo` | Legacy condition of a product offer. This listing dimension is deprecated and it is supported only in Display campaigns. |
| productCondition | `ProductConditionInfo` | Condition of a product offer. |
| productCustomAttribute | `ProductCustomAttributeInfo` | Custom attribute of a product offer. |
| hotelClass | `HotelClassInfo` | Class of the hotel as a number of stars 1 to 5. |
| activityRating | `ActivityRatingInfo` | Rating of the activity as a number 1 to 5, where 5 is the best. |
| activityCountry | `ActivityCountryInfo` | The country where the travel activity is available. |

### `ListingDimensionPath`

The path of dimensions defining a listing group.

| Field | Type | Description |
|---|---|---|
| dimensions | array<`ListingDimensionInfo`> | The complete path of dimensions through the listing group hierarchy, from the root (excluding the root itself) to this listing group. |

### `WebpageConditionInfo`

Logical expression for targeting webpages of an advertiser's website.

| Field | Type | Description |
|---|---|---|
| operator | string enum(UNSPECIFIED, UNKNOWN, EQUALS, CONTAINS) | Operator of webpage targeting condition. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; EQUALS - The argument web condition is equal to the compared web condition.; CONTAINS - The argument web condition is part of the compared web condition. |
| operand | string enum(UNSPECIFIED, UNKNOWN, URL, CATEGORY, PAGE_TITLE, PAGE_CONTENT, CUSTOM_LABEL) | Operand of webpage targeting condition. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; URL - Operand denoting a webpage URL targeting condition.; CATEGORY - Operand denoting a webpage category targeting condition.; PAGE_TITLE - Operand denoting a webpage title targeting condition.; PAGE_CONTENT - Operand denoting a webpage content targeting condition.; CUSTOM_LABEL - Operand denoting a webpage custom label targeting condition. |
| argument | string | Argument of webpage targeting condition. |

### `WebpageSampleInfo`

List of sample urls that match the website target

| Field | Type | Description |
|---|---|---|
| sampleUrls | array<string> | Webpage sample urls |

### `PolicyViolationKey`

Key of the violation. The key is used for referring to a violation when filing an exemption request.

| Field | Type | Description |
|---|---|---|
| violatingText | string | The text that violates the policy if specified. Otherwise, refers to the policy in general (for example, when requesting to be exempt from the whole policy). If not specified for criterion exemptions, the whole policy is implied. Must be specified for ad exemptions. |
| policyName | string | Unique ID of the violated policy. |

### `ActivityCityInfo`

The city where the travel activity is available.

| Field | Type | Description |
|---|---|---|
| value | string | String value of the activity city. The Geo Target Constant resource name. |

### `ActivityCountryInfo`

The country where the travel activity is available.

| Field | Type | Description |
|---|---|---|
| value | string | String value of the activity country. The Geo Target Constant resource name. |

### `ActivityIdInfo`

Advertiser-specific activity ID.

| Field | Type | Description |
|---|---|---|
| value | string | String value of the activity ID. |

### `ActivityRatingInfo`

Rating of the activity as a number 1 to 5, where 5 is the best.

| Field | Type | Description |
|---|---|---|
| value | string (int64) | Long value of the activity rating. |

### `ActivityStateInfo`

The state where the travel activity is available.

| Field | Type | Description |
|---|---|---|
| value | string | String value of the activity state. The Geo Target Constant resource name. |

### `HotelCityInfo`

City the hotel is located in.

| Field | Type | Description |
|---|---|---|
| cityCriterion | string | The Geo Target Constant resource name. |

### `HotelClassInfo`

Class of the hotel as a number of stars 1 to 5.

| Field | Type | Description |
|---|---|---|
| value | string (int64) | Long value of the hotel class. |

### `HotelCountryRegionInfo`

Country or Region the hotel is located in.

| Field | Type | Description |
|---|---|---|
| countryRegionCriterion | string | The Geo Target Constant resource name. |

### `HotelIdInfo`

Advertiser-specific hotel ID.

| Field | Type | Description |
|---|---|---|
| value | string | String value of the hotel ID. |

### `HotelStateInfo`

State the hotel is located in.

| Field | Type | Description |
|---|---|---|
| stateCriterion | string | The Geo Target Constant resource name. |

### `ProductBrandInfo`

Brand of the product.

| Field | Type | Description |
|---|---|---|
| value | string | String value of the product brand. |

### `ProductCategoryInfo`

Category of a product offer.

| Field | Type | Description |
|---|---|---|
| categoryId | string (int64) | ID of the product category. This ID is equivalent to the google_product_category ID as described in this article: https://support.google.com/merchants/answer/6324436 |
| level | string enum(UNSPECIFIED, UNKNOWN, LEVEL1, LEVEL2, LEVEL3, LEVEL4, LEVEL5) | Level of the product category. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; LEVEL1 - Level 1.; LEVEL2 - Level 2.; LEVEL3 - Level 3.; LEVEL4 - Level 4.; LEVEL5 - Level 5. |

### `ProductChannelExclusivityInfo`

Availability of a product offer.

| Field | Type | Description |
|---|---|---|
| channelExclusivity | string enum(UNSPECIFIED, UNKNOWN, SINGLE_CHANNEL, MULTI_CHANNEL) | Value of the availability. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; SINGLE_CHANNEL - The item is sold through one channel only, either local stores or online as indicated by its ProductChannel.; MULTI_CHANNEL - The item is matched to its online or local stores counterpart, indicating it is available for purchase in both ShoppingProductChannels. |

### `ProductChannelInfo`

Locality of a product offer.

| Field | Type | Description |
|---|---|---|
| channel | string enum(UNSPECIFIED, UNKNOWN, ONLINE, LOCAL) | Value of the locality. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; ONLINE - The item is sold online.; LOCAL - The item is sold in local stores. |

### `ProductConditionInfo`

Condition of a product offer.

| Field | Type | Description |
|---|---|---|
| condition | string enum(UNSPECIFIED, UNKNOWN, NEW, REFURBISHED, USED) | Value of the condition. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; NEW - The product condition is new.; REFURBISHED - The product condition is refurbished.; USED - The product condition is used. |

### `ProductCustomAttributeInfo`

Custom attribute of a product offer.

| Field | Type | Description |
|---|---|---|
| value | string | String value of the product custom attribute. |
| index | string enum(UNSPECIFIED, UNKNOWN, INDEX0, INDEX1, INDEX2, INDEX3, INDEX4) | Indicates the index of the custom attribute. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; INDEX0 - First product custom attribute.; INDEX1 - Second product custom attribute.; INDEX2 - Third product custom attribute.; INDEX3 - Fourth product custom attribute.; INDEX4 - Fifth product custom attribute. |

### `ProductGroupingInfo`

Grouping of a product offer. This listing dimension is deprecated and it is supported only in Display campaigns.

| Field | Type | Description |
|---|---|---|
| value | string | String value of the product grouping. |

### `ProductItemIdInfo`

Item id of a product offer.

| Field | Type | Description |
|---|---|---|
| value | string | Value of the id. |

### `ProductLabelsInfo`

Labels of a product offer. This listing dimension is deprecated and it is supported only in Display campaigns.

| Field | Type | Description |
|---|---|---|
| value | string | String value of the product labels. |

### `ProductLegacyConditionInfo`

Legacy condition of a product offer. This listing dimension is deprecated and it is supported only in Display campaigns.

| Field | Type | Description |
|---|---|---|
| value | string | String value of the product legacy condition. |

### `ProductTypeFullInfo`

Full type of a product offer. This listing dimension is deprecated and it is supported only in Display campaigns.

| Field | Type | Description |
|---|---|---|
| value | string | String value of the product full type. |

### `ProductTypeInfo`

Type of a product offer.

| Field | Type | Description |
|---|---|---|
| value | string | Value of the type. |
| level | string enum(UNSPECIFIED, UNKNOWN, LEVEL1, LEVEL2, LEVEL3, LEVEL4, LEVEL5) | Level of the type. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; LEVEL1 - Level 1.; LEVEL2 - Level 2.; LEVEL3 - Level 3.; LEVEL4 - Level 4.; LEVEL5 - Level 5. |

### `UnknownListingDimensionInfo`

Unknown listing dimension.

Type: object

