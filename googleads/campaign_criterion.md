# Campaign Criterion

> Source: Google Ads API v26 REST Discovery document (https://googleads.googleapis.com/$discovery/rest?version=v26) and Shopping ads guide (https://developers.google.com/google-ads/api/docs/shopping-ads/overview). Fetched 2026-11-19.

Resource schema: `CampaignCriterion`. Read data via `GoogleAdsService.Search`/`SearchStream` (see google_ads_service.md).

---

## customers.campaignCriteria.mutate

`POST https://googleads.googleapis.com/v26/customers/{+customerId}/campaignCriteria:mutate`

Creates, updates, or removes criteria. Operation statuses are returned. List of thrown errors: AdxError AuthenticationError AuthorizationError CampaignCriterionError CollectionSizeError ContextError CriterionError DatabaseError DistinctError FieldError FieldMaskError FunctionError HeaderError IdError InternalError MutateError NewResourceCreationError NotEmptyError NullError OperationAccessDeniedError OperatorError QuotaError RangeError RegionCodeError RequestError ResourceCountLimitExceededError SizeLimitError StringFormatError StringLengthError

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| customerId | path | string | yes | Required. The ID of the customer whose criteria are being modified. |

**Request body**: `MutateCampaignCriteriaRequest`

**Response**: `MutateCampaignCriteriaResponse`

---

## Schemas

### `CampaignCriterion`

A campaign criterion.

| Field | Type | Description |
|---|---|---|
| customAudience | `CustomAudienceInfo` | Immutable. Custom Audience |
| device | `DeviceInfo` | Immutable. Device. |
| customAffinity | `CustomAffinityInfo` | Immutable. Custom Affinity. |
| placement | `PlacementInfo` | Immutable. Placement. |
| contentLabel | `ContentLabelInfo` | Immutable. ContentLabel. |
| brandList | `BrandListInfo` | Immutable. Brand list campaign criterion. |
| youtubeVideo | `YouTubeVideoInfo` | Immutable. YouTube Video. |
| mobileDevice | `MobileDeviceInfo` | Immutable. Mobile Device. |
| youtubeChannel | `YouTubeChannelInfo` | Immutable. YouTube Channel. |
| carrier | `CarrierInfo` | Immutable. Carrier. |
| extendedDemographic | `ExtendedDemographicInfo` | Immutable. Extended demographic criterion. |
| negative | boolean | Immutable. Whether to target (`false`) or exclude (`true`) the criterion. |
| ipBlock | `IpBlockInfo` | Immutable. IpBlock. You can exclude up to 500 IP addresses per campaign. |
| gender | `GenderInfo` | Immutable. Gender. |
| status | string enum(UNSPECIFIED, UNKNOWN, ENABLED, PAUSED, REMOVED) | The status of the criterion. Values: UNSPECIFIED - No value has been specified.; UNKNOWN - The received value is not known in this version. This is a response-only value.; ENABLED - The campaign criterion is enabled.; PAUSED - The campaign criterion is paused.; REMOVED - The campaign criterion is removed. |
| proximity | `ProximityInfo` | Immutable. Proximity. |
| location | `LocationInfo` | Immutable. Location. |
| topic | `TopicInfo` | Immutable. Topic. |
| resourceName | string | Immutable. The resource name of the campaign criterion. Campaign criterion resource names have the form: `customers/{customer_id}/campaignCriteria/{campaign_id}~{criterion_id}` |
| keyword | `KeywordInfo` | Immutable. Keyword. |
| mobileApplication | `MobileApplicationInfo` | Immutable. Mobile application. |
| incomeRange | `IncomeRangeInfo` | Immutable. Income range. |
| parentalStatus | `ParentalStatusInfo` | Immutable. Parental status. |
| keywordTheme | `KeywordThemeInfo` | Immutable. Smart Campaign Keyword Theme. |
| videoLineup | `VideoLineupInfo` | Immutable. Video lineup criterion. |
| localServiceId | `LocalServiceIdInfo` | Immutable. GLS service campaign criterion. |
| type | string enum(UNSPECIFIED, UNKNOWN, KEYWORD, PLACEMENT, MOBILE_APP_CATEGORY, MOBILE_APPLICATION, DEVICE, LOCATION, LISTING_GROUP, AD_SCHEDULE, AGE_RANGE, GENDER, INCOME_RANGE, PARENTAL_STATUS, YOUTUBE_VIDEO, YOUTUBE_CHANNEL, USER_LIST, PROXIMITY, TOPIC, LISTING_SCOPE, LANGUAGE, IP_BLOCK, CONTENT_LABEL, CARRIER, USER_INTEREST, WEBPAGE, OPERATING_SYSTEM_VERSION, APP_PAYMENT_MODEL, MOBILE_DEVICE, CUSTOM_AFFINITY, CUSTOM_INTENT, LOCATION_GROUP, CUSTOM_AUDIENCE, COMBINED_AUDIENCE, KEYWORD_THEME, AUDIENCE, NEGATIVE_KEYWORD_LIST, LOCAL_SERVICE_ID, SEARCH_THEME, BRAND, BRAND_LIST, LIFE_EVENT, WEBPAGE_LIST, VIDEO_LINEUP, PLACEMENT_LIST, VERTICAL_ADS_ITEM_GROUP_RULE_LIST, VERTICAL_ADS_ITEM_GROUP_RULE, VERTICAL_ADS_ITEM_BID, RETAIL_FILTER_BUNDLE, RETAIL_FILTER) | Output only. The type of the criterion. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; KEYWORD - Keyword, for example, 'mars cruise'.; PLACEMENT - Placement, also known as Website, for example, 'www.flowers4sale.com'; MOBILE_APP_CATEGORY - Mobile application categories to target.; MOBILE_APPLICATION - Mobile applications to target.; DEVICE - Devices to target.; LOCATION - Locations to target.; LISTING_GROUP - Listing groups to target.; AD_SCHEDULE - Ad Schedule.; AGE_RANGE - Age range.; GENDER - Gender.; INCOME_RANGE - Income Range.; PARENTAL_STATUS - Parental status.; YOUTUBE_VIDEO - YouTube Video.; YOUTUBE_CHANNEL - YouTube Channel.; USER_LIST - User list.; PROXIMITY - Proximity.; TOPIC - A topic target on the display network (for example, "Pets & Animals").; LISTING_SCOPE - Listing scope to target.; LANGUAGE - Language.; IP_BLOCK - IpBlock.; CONTENT_LABEL - Content Label for category exclusion.; CARRIER - Carrier.; USER_INTEREST - A category the user is interested in.; WEBPAGE - Webpage criterion for dynamic search ads.; OPERATING_SYSTEM_VERSION - Operating system version.; APP_PAYMENT_MODEL - App payment model.; MOBILE_DEVICE - Mobile device.; CUSTOM_AFFINITY - Custom affinity.; CUSTOM_INTENT - Custom intent.; LOCATION_GROUP - Location group.; CUSTOM_AUDIENCE - Custom audience; COMBINED_AUDIENCE - Combined audience; KEYWORD_THEME - Smart Campaign keyword theme; AUDIENCE - Audience; NEGATIVE_KEYWORD_LIST - Negative Keyword List; LOCAL_SERVICE_ID - Local Services Ads Service ID.; SEARCH_THEME - Search Theme.; BRAND - Brand; BRAND_LIST - Brand List; LIFE_EVENT - Life Event; WEBPAGE_LIST - Webpage List; VIDEO_LINEUP - Video lineup; PLACEMENT_LIST - Placement List; VERTICAL_ADS_ITEM_GROUP_RULE_LIST - A list of rules for item groups in Vertical Ads.; VERTICAL_ADS_ITEM_GROUP_RULE - A rule for an item group in Vertical Ads.; VERTICAL_ADS_ITEM_BID - A bid for a Vertical Ads item.; RETAIL_FILTER_BUNDLE - Retail Filter Bundle for linking a retail filter shared set to an ad group.; RETAIL_FILTER - Retail Filter for defining individual tag rules or expressions within a shared set. |
| campaign | string | Immutable. The campaign to which the criterion belongs. |
| bidModifier | number (float) | The modifier for the bids when the criterion matches. The modifier must be in the range: 0.1 - 10.0. Most targetable criteria types support modifiers. Use 0 to opt out of a Device type. |
| locationGroup | `LocationGroupInfo` | Immutable. Location Group |
| lifeEvent | `LifeEventInfo` | Immutable. Life event campaign criterion. |
| criterionId | string (int64) | Output only. The ID of the criterion. This field is ignored during mutate. |
| listingScope | `ListingScopeInfo` | Immutable. Listing scope. |
| mobileAppCategory | `MobileAppCategoryInfo` | Immutable. Mobile app category. |
| userList | `UserListInfo` | Immutable. User List. |
| operatingSystemVersion | `OperatingSystemVersionInfo` | Immutable. Operating system version. |
| adSchedule | `AdScheduleInfo` | Immutable. Ad Schedule. |
| displayName | string | Output only. The display name of the criterion. This field is ignored for mutates. |
| webpageList | `WebpageListInfo` | Immutable. Webpage list. This criterion is not publicly available. |
| userInterest | `UserInterestInfo` | Immutable. User Interest. |
| webpage | `WebpageInfo` | Immutable. Webpage. |
| ageRange | `AgeRangeInfo` | Immutable. Age range. |
| requireEuPoliticalAdvertisingDeclaration | boolean | Output only. Indicates whether using this criterion requires setting Campaign.contains_eu_political_advertising field. |
| combinedAudience | `CombinedAudienceInfo` | Immutable. Combined Audience. |
| language | `LanguageInfo` | Immutable. Language. |

### `MutateCampaignCriteriaRequest`

Request message for CampaignCriterionService.MutateCampaignCriteria.

| Field | Type | Description |
|---|---|---|
| partialFailure | boolean | If true, successful operations will be carried out and invalid operations will return errors. If false, all operations will be carried out in one transaction if and only if they are all valid. Default is false. |
| operations | array<`CampaignCriterionOperation`> | Required. The list of operations to perform on individual criteria. |
| responseContentType | string enum(UNSPECIFIED, RESOURCE_NAME_ONLY, MUTABLE_RESOURCE) | The response content type setting. Determines whether the mutable resource or just the resource name should be returned post mutation. Values: UNSPECIFIED - Not specified. Will return the resource name only in the response.; RESOURCE_NAME_ONLY - The mutate response will be the resource name.; MUTABLE_RESOURCE - The mutate response will contain the resource name and the resource with mutable fields if possible. Otherwise, only the resource name will be returned. |
| validateOnly | boolean | If true, the request is validated but not executed. Only errors are returned, not results. |

### `MutateCampaignCriteriaResponse`

Response message for campaign criterion mutate.

| Field | Type | Description |
|---|---|---|
| partialFailureError | `GoogleRpc__Status` | Errors that pertain to operation failures in the partial failure mode. Returned only when partial_failure = true and all errors occur inside the operations. If any errors occur outside the operations (for example, auth errors), we return an RPC level error. |
| results | array<`MutateCampaignCriterionResult`> | All results for the mutate. |

### `AdScheduleInfo`

Represents an AdSchedule criterion. AdSchedule is specified as the day of the week and a time interval within which ads will be shown. No more than six AdSchedules can be added for the same day.

| Field | Type | Description |
|---|---|---|
| startHour | integer (int32) | Starting hour in 24 hour time. This field must be between 0 and 23, inclusive. This field is required for CREATE operations and is prohibited on UPDATE operations. |
| endMinute | string enum(UNSPECIFIED, UNKNOWN, ZERO, FIFTEEN, THIRTY, FORTY_FIVE) | Minutes after the end hour at which this schedule ends. The schedule is exclusive of the end minute. This field is required for CREATE operations and is prohibited on UPDATE operations. Values: UNSPECIFIED - Not specified.; UNKNOWN - The value is unknown in this version.; ZERO - Zero minutes past the hour.; FIFTEEN - Fifteen minutes past the hour.; THIRTY - Thirty minutes past the hour.; FORTY_FIVE - Forty-five minutes past the hour. |
| dayOfWeek | string enum(UNSPECIFIED, UNKNOWN, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY) | Day of the week the schedule applies to. This field is required for CREATE operations and is prohibited on UPDATE operations. Values: UNSPECIFIED - Not specified.; UNKNOWN - The value is unknown in this version.; MONDAY - Monday.; TUESDAY - Tuesday.; WEDNESDAY - Wednesday.; THURSDAY - Thursday.; FRIDAY - Friday.; SATURDAY - Saturday.; SUNDAY - Sunday. |
| endHour | integer (int32) | Ending hour in 24 hour time; 24 signifies end of the day. This field must be between 0 and 24, inclusive. This field is required for CREATE operations and is prohibited on UPDATE operations. |
| startMinute | string enum(UNSPECIFIED, UNKNOWN, ZERO, FIFTEEN, THIRTY, FORTY_FIVE) | Minutes after the start hour at which this schedule starts. This field is required for CREATE operations and is prohibited on UPDATE operations. Values: UNSPECIFIED - Not specified.; UNKNOWN - The value is unknown in this version.; ZERO - Zero minutes past the hour.; FIFTEEN - Fifteen minutes past the hour.; THIRTY - Thirty minutes past the hour.; FORTY_FIVE - Forty-five minutes past the hour. |

### `AgeRangeInfo`

An age range criterion.

| Field | Type | Description |
|---|---|---|
| type | string enum(UNSPECIFIED, UNKNOWN, AGE_RANGE_18_24, AGE_RANGE_25_34, AGE_RANGE_35_44, AGE_RANGE_45_54, AGE_RANGE_55_64, AGE_RANGE_65_UP, AGE_RANGE_UNDETERMINED) | Type of the age range. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; AGE_RANGE_18_24 - Between 18 and 24 years old.; AGE_RANGE_25_34 - Between 25 and 34 years old.; AGE_RANGE_35_44 - Between 35 and 44 years old.; AGE_RANGE_45_54 - Between 45 and 54 years old.; AGE_RANGE_55_64 - Between 55 and 64 years old.; AGE_RANGE_65_UP - 65 years old and beyond.; AGE_RANGE_UNDETERMINED - Undetermined age range. |

### `BrandListInfo`

A Brand List Criterion is used to specify a list of brands. The list is represented as a SharedSet id type BRAND_HINT. A criterion of this type can be either targeted or excluded.

| Field | Type | Description |
|---|---|---|
| sharedSet | string | Shared set resource name of the brand list. |

### `CarrierInfo`

Represents a Carrier Criterion.

| Field | Type | Description |
|---|---|---|
| carrierConstant | string | The Carrier constant resource name. |

### `CombinedAudienceInfo`

A combined audience criterion.

| Field | Type | Description |
|---|---|---|
| combinedAudience | string | The CombinedAudience resource name. |

### `ContentLabelInfo`

Content Label for category exclusion.

| Field | Type | Description |
|---|---|---|
| type | string enum(UNSPECIFIED, UNKNOWN, SEXUALLY_SUGGESTIVE, BELOW_THE_FOLD, PARKED_DOMAIN, JUVENILE, PROFANITY, TRAGEDY, VIDEO, VIDEO_RATING_DV_G, VIDEO_RATING_DV_PG, VIDEO_RATING_DV_T, VIDEO_RATING_DV_MA, VIDEO_NOT_YET_RATED, EMBEDDED_VIDEO, LIVE_STREAMING_VIDEO, SOCIAL_ISSUES, BRAND_SUITABILITY_CONTENT_FOR_FAMILIES, BRAND_SUITABILITY_GAMES_FIGHTING, BRAND_SUITABILITY_GAMES_MATURE, BRAND_SUITABILITY_HEALTH_SENSITIVE, BRAND_SUITABILITY_HEALTH_SOURCE_UNDETERMINED, BRAND_SUITABILITY_NEWS_RECENT, BRAND_SUITABILITY_NEWS_SENSITIVE, BRAND_SUITABILITY_NEWS_SOURCE_NOT_FEATURED, BRAND_SUITABILITY_POLITICS, BRAND_SUITABILITY_RELIGION) | Content label type, required for CREATE operations. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; SEXUALLY_SUGGESTIVE - Sexually suggestive content.; BELOW_THE_FOLD - Below the fold placement.; PARKED_DOMAIN - Parked domain.; JUVENILE - Juvenile, gross & bizarre content.; PROFANITY - Profanity & rough language.; TRAGEDY - Death & tragedy.; VIDEO - Video.; VIDEO_RATING_DV_G - Content rating: G.; VIDEO_RATING_DV_PG - Content rating: PG.; VIDEO_RATING_DV_T - Content rating: T.; VIDEO_RATING_DV_MA - Content rating: MA.; VIDEO_NOT_YET_RATED - Content rating: not yet rated.; EMBEDDED_VIDEO - Embedded video.; LIVE_STREAMING_VIDEO - Live streaming video.; SOCIAL_ISSUES - Sensitive social issues.; BRAND_SUITABILITY_CONTENT_FOR_FAMILIES - Content that's suitable for families to view together, including Made for Kids videos on YouTube.; BRAND_SUITABILITY_GAMES_FIGHTING - Video games that simulate hand-to-hand fighting or combat with the use of modern or medieval weapons.; BRAND_SUITABILITY_GAMES_MATURE - Video games that feature mature content, such as violence, inappropriate language, or sexual suggestiveness.; BRAND_SUITABILITY_HEALTH_SENSITIVE - Health content that people might find sensitive or upsetting, such as medical procedures or images and descriptions of various medical conditions.; BRAND_SUITABILITY_HEALTH_SOURCE_UNDETERMINED - Health content from sources that may provide accurate information but aren't as commonly cited as other, more well-known sources.; BRAND_SUITABILITY_NEWS_RECENT - News content that's been recently announced, regardless of the themes or people being reported on.; BRAND_SUITABILITY_NEWS_SENSITIVE - News content that people might find sensitive or upsetting, such as crimes, accidents, and natural incidents, or commentary on potentially controversial social and political issues.; BRAND_SUITABILITY_NEWS_SOURCE_NOT_FEATURED - News content from sources that aren't featured on Google News or YouTube News.; BRAND_SUITABILITY_POLITICS - Political content, such as political statements made by well-known politicians, political elections, or events widely perceived to be political in nature.; BRAND_SUITABILITY_RELIGION - Content with religious themes, such as religious teachings or customs, holy sites or places of worship, well-known religious figures or people dressed in religious attire, or religious opinions on social and political issues. |

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

### `DeviceInfo`

A device criterion.

| Field | Type | Description |
|---|---|---|
| type | string enum(UNSPECIFIED, UNKNOWN, MOBILE, TABLET, DESKTOP, CONNECTED_TV, OTHER) | Type of the device. Values: UNSPECIFIED - Not specified.; UNKNOWN - The value is unknown in this version.; MOBILE - Mobile devices with full browsers.; TABLET - Tablets with full browsers.; DESKTOP - Computers.; CONNECTED_TV - Smart TVs and game consoles.; OTHER - Other device types. |

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

### `IpBlockInfo`

An IpBlock criterion used for excluding IP addresses. We support excluding individual IP addresses or CIDR blocks. Create one IpBlockInfo criterion for each individual IP address or CIDR block you want to exclude. You can exclude up to 500 IP addresses per campaign. For more details, see [Exclude IP addresses](https://support.google.com/google-ads/answer/2456098). IPv4 examples: * Individual address: 192.168.0.1 * Individual address as CIDR block: 192.168.0.1/32 * CIDR block: 192.168.0.0/24 IPv6 examples: * Individual address: 2001:db8:a0b:12f0::1 * Individual address as CIDR block: 2001:db8:a0b:12f0::1/128 * CIDR block: 2001:db8::/48

| Field | Type | Description |
|---|---|---|
| ipAddress | string | The IP address or the CIDR block to be excluded. |

### `KeywordInfo`

A keyword criterion.

| Field | Type | Description |
|---|---|---|
| matchType | string enum(UNSPECIFIED, UNKNOWN, EXACT, PHRASE, BROAD) | The match type of the keyword. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; EXACT - Exact match.; PHRASE - Phrase match.; BROAD - Broad match. |
| text | string | The text of the keyword (at most 80 characters and 10 words). |

### `KeywordThemeInfo`

A Smart Campaign keyword theme.

| Field | Type | Description |
|---|---|---|
| keywordThemeConstant | string | The resource name of a Smart Campaign keyword theme constant. `keywordThemeConstants/{keyword_theme_id}~{sub_keyword_theme_id}` |
| freeFormKeywordTheme | string | Free-form text to be matched to a Smart Campaign keyword theme constant on a best-effort basis. |

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

### `ListingScopeInfo`

A listing scope criterion.

| Field | Type | Description |
|---|---|---|
| dimensions | array<`ListingDimensionInfo`> | Scope of the campaign criterion. |

### `LocalServiceIdInfo`

A Local Services Ads service ID. Represents a service type (such as install_faucet) that a Local Services Campaign can target.

| Field | Type | Description |
|---|---|---|
| serviceId | string | The criterion resource name. |

### `LocationGroupInfo`

A radius around a list of locations specified through a feed or assetSet.

| Field | Type | Description |
|---|---|---|
| radiusUnits | string enum(UNSPECIFIED, UNKNOWN, METERS, MILES, MILLI_MILES) | Unit of the radius. Miles and meters are supported for geo target constants. Milli miles and meters are supported for feed item sets and asset sets. This is required and must be set in CREATE operations. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; METERS - Meters; MILES - Miles; MILLI_MILES - Milli Miles |
| locationGroupAssetSets | array<string> | AssetSets whose Assets are targeted. If multiple IDs are specified, then all items that appear in at least one set are targeted. This field cannot be used with feed, geo target constants or feed item sets. When using asset sets, either this field or enable_customer_level_location_asset_set should be specified. Both cannot be used at the same time. This can only be set in CREATE operations. |
| feedItemSets | array<string> | FeedItemSets whose FeedItems are targeted. If multiple IDs are specified, then all items that appear in at least one set are targeted. This field cannot be used with geo_target_constants. This is optional and can only be set in CREATE operations. Cannot be set with AssetSet fields. |
| radius | string (int64) | Distance in units specifying the radius around targeted locations. This is required and must be set in CREATE operations. |
| enableCustomerLevelLocationAssetSet | boolean | Denotes that the latest customer level asset set is used for targeting. Used with radius and radius_units. Cannot be used with feed, geo target constants or feed item sets. When using asset sets, either this field or location_group_asset_sets should be specified. Both cannot be used at the same time. This can only be set in CREATE operations. |
| geoTargetConstants | array<string> | Geo target constant(s) restricting the scope of the geographic area within the feed. Currently only one geo target constant is allowed. Cannot be set with AssetSet fields. |

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

### `MobileDeviceInfo`

A mobile device criterion.

| Field | Type | Description |
|---|---|---|
| mobileDeviceConstant | string | The mobile device constant resource name. |

### `OperatingSystemVersionInfo`

Represents an operating system version to be targeted.

| Field | Type | Description |
|---|---|---|
| operatingSystemVersionConstant | string | The operating system version constant resource name. |

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

### `ProximityInfo`

A Proximity criterion. The geo point and radius determine what geographical area is included. The address is a description of the geo point that does not affect ad serving. There are two ways to create a proximity. First, by setting an address and radius. The geo point will be automatically computed. Second, by setting a geo point and radius. The address is an optional label that won't be validated.

| Field | Type | Description |
|---|---|---|
| radiusUnits | string enum(UNSPECIFIED, UNKNOWN, MILES, KILOMETERS) | The unit of measurement of the radius. Default is KILOMETERS. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; MILES - Miles; KILOMETERS - Kilometers |
| radius | number (double) | The radius of the proximity. |
| geoPoint | `GeoPointInfo` | Latitude and longitude. |
| address | `AddressInfo` | Full address. |

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

### `WebpageListInfo`

Represents a list of webpage criteria.

| Field | Type | Description |
|---|---|---|
| sharedSet | string | Shared set resource name of the webpage list. |

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

### `CampaignCriterionOperation`

A single operation (create, update, remove) on a campaign criterion.

| Field | Type | Description |
|---|---|---|
| updateMask | string (google-fieldmask) | FieldMask that determines which resource fields are modified in an update. |
| update | `CampaignCriterion` | Update operation: The criterion is expected to have a valid resource name. Note that for smart campaigns, you cannot use the update method to edit the geolocation target. |
| remove | string | Remove operation: A resource name for the removed criterion is expected, in this format: `customers/{customer_id}/campaignCriteria/{campaign_id}~{criterion_id}` |
| create | `CampaignCriterion` | Create operation: No resource name is expected for the new criterion. |

### `MutateCampaignCriterionResult`

The result for the criterion mutate.

| Field | Type | Description |
|---|---|---|
| resourceName | string | Returned for successful operations. |
| campaignCriterion | `CampaignCriterion` | The mutated campaign criterion with only mutable fields after mutate. The field will only be returned when response_content_type is set to "MUTABLE_RESOURCE". |

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

### `AddressInfo`

Address for proximity criterion.

| Field | Type | Description |
|---|---|---|
| provinceCode | string | Province or state code. |
| streetAddress2 | string | Street address line 2. This field is write-only. It is only used for calculating the longitude and latitude of an address when geo_point is empty. |
| postalCode | string | Postal code. |
| streetAddress | string | Street address line 1. |
| provinceName | string | Province or state name. |
| countryCode | string | Country code. |
| cityName | string | Name of the city. |

### `GeoPointInfo`

Geo point for proximity criterion.

| Field | Type | Description |
|---|---|---|
| longitudeInMicroDegrees | integer (int32) | Micro degrees for the longitude. |
| latitudeInMicroDegrees | integer (int32) | Micro degrees for the latitude. |

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

---

## Field reference (verbatim from the Google field reference page)

[Help me build a query](https://developers.google.com/google-ads/api/fields/v26/campaign_criterion_query_builder.md.txt) [Proto definition ![on GitHub](https://developers.google.com/site-assets/logo-github.svg)](https://github.com/googleapis/googleapis/blob/master/google/ads/googleads/v26/resources/campaign_criterion.proto)

A campaign criterion.

| Attributed resources |
|---|
| [campaign](https://developers.google.com/google-ads/api/fields/v26/campaign.md.txt) |
| [carrier_constant](https://developers.google.com/google-ads/api/fields/v26/carrier_constant.md.txt) |
| [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt) |
| [language_constant](https://developers.google.com/google-ads/api/fields/v26/language_constant.md.txt) |
| [mobile_app_category_constant](https://developers.google.com/google-ads/api/fields/v26/mobile_app_category_constant.md.txt) |
| [mobile_device_constant](https://developers.google.com/google-ads/api/fields/v26/mobile_device_constant.md.txt) |
| [operating_system_version_constant](https://developers.google.com/google-ads/api/fields/v26/operating_system_version_constant.md.txt) |
| [shared_set](https://developers.google.com/google-ads/api/fields/v26/shared_set.md.txt) |
| [topic_constant](https://developers.google.com/google-ads/api/fields/v26/topic_constant.md.txt) |
| [user_interest](https://developers.google.com/google-ads/api/fields/v26/user_interest.md.txt) |
| [user_list](https://developers.google.com/google-ads/api/fields/v26/user_list.md.txt) |

Fields from the preceding resources can be selected along with this
resource in your `SELECT` and `WHERE` clauses. These fields do **not** segment
metrics in your `SELECT` clause.

## campaign_criterion.ad_schedule.day_of_week

Field descriptionDay of the week the schedule applies to.

This field is required for CREATE operations and is prohibited on UPDATE
operations.
Category`ATTRIBUTE` Data Type`ENUM`
`FRIDAY``MONDAY``SATURDAY``SUNDAY``THURSDAY``TUESDAY``UNKNOWN``UNSPECIFIED``WEDNESDAY` Type URL`google.ads.googleads.v26.enums.DayOfWeekEnum.DayOfWeek` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_schedule_view](https://developers.google.com/google-ads/api/fields/v26/ad_schedule_view.md.txt), [campaign_audience_view](https://developers.google.com/google-ads/api/fields/v26/campaign_audience_view.md.txt), [campaign_criterion](https://developers.google.com/google-ads/api/fields/v26/campaign_criterion.md.txt), [location_view](https://developers.google.com/google-ads/api/fields/v26/location_view.md.txt)

## campaign_criterion.ad_schedule.end_hour

Field descriptionEnding hour in 24 hour time; 24 signifies end of the day.
This field must be between 0 and 24, inclusive.

This field is required for CREATE operations and is prohibited on UPDATE
operations.
Category`ATTRIBUTE` Data Type`INT32` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.ad_schedule.end_minute

Field descriptionMinutes after the end hour at which this schedule ends. The schedule is
exclusive of the end minute.

This field is required for CREATE operations and is prohibited on UPDATE
operations.
Category`ATTRIBUTE` Data Type`ENUM`
`FIFTEEN``FORTY_FIVE``THIRTY``UNKNOWN``UNSPECIFIED``ZERO` Type URL`google.ads.googleads.v26.enums.MinuteOfHourEnum.MinuteOfHour` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.ad_schedule.start_hour

Field descriptionStarting hour in 24 hour time.
This field must be between 0 and 23, inclusive.

This field is required for CREATE operations and is prohibited on UPDATE
operations.
Category`ATTRIBUTE` Data Type`INT32` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.ad_schedule.start_minute

Field descriptionMinutes after the start hour at which this schedule starts.

This field is required for CREATE operations and is prohibited on UPDATE
operations.
Category`ATTRIBUTE` Data Type`ENUM`
`FIFTEEN``FORTY_FIVE``THIRTY``UNKNOWN``UNSPECIFIED``ZERO` Type URL`google.ads.googleads.v26.enums.MinuteOfHourEnum.MinuteOfHour` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.age_range.type

Field descriptionType of the age range.
Category`ATTRIBUTE` Data Type`ENUM`
`AGE_RANGE_18_24``AGE_RANGE_25_34``AGE_RANGE_35_44``AGE_RANGE_45_54``AGE_RANGE_55_64``AGE_RANGE_65_UP``AGE_RANGE_UNDETERMINED``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.AgeRangeTypeEnum.AgeRangeType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.bid_modifier

Field descriptionThe modifier for the bids when the criterion matches. The modifier must be
in the range: 0.1 - 10.0. Most targetable criteria types support modifiers.
Use 0 to opt out of a Device type.
Category`ATTRIBUTE` Data Type`FLOAT` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.brand_list.shared_set

Field descriptionShared set resource name of the brand list.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.campaign

Field descriptionImmutable. The campaign to which the criterion belongs.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.carrier.carrier_constant

Field descriptionThe Carrier constant resource name.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.combined_audience.combined_audience

Field descriptionThe CombinedAudience resource name.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.content_label.type

Field descriptionContent label type, required for CREATE operations.
Category`ATTRIBUTE` Data Type`ENUM`
`BELOW_THE_FOLD``BRAND_SUITABILITY_CONTENT_FOR_FAMILIES``BRAND_SUITABILITY_GAMES_FIGHTING``BRAND_SUITABILITY_GAMES_MATURE``BRAND_SUITABILITY_HEALTH_SENSITIVE``BRAND_SUITABILITY_HEALTH_SOURCE_UNDETERMINED``BRAND_SUITABILITY_NEWS_RECENT``BRAND_SUITABILITY_NEWS_SENSITIVE``BRAND_SUITABILITY_NEWS_SOURCE_NOT_FEATURED``BRAND_SUITABILITY_POLITICS``BRAND_SUITABILITY_RELIGION``EMBEDDED_VIDEO``JUVENILE``LIVE_STREAMING_VIDEO``PARKED_DOMAIN``PROFANITY``SEXUALLY_SUGGESTIVE``SOCIAL_ISSUES``TRAGEDY``UNKNOWN``UNSPECIFIED``VIDEO``VIDEO_NOT_YET_RATED``VIDEO_RATING_DV_G``VIDEO_RATING_DV_MA``VIDEO_RATING_DV_PG``VIDEO_RATING_DV_T` Type URL`google.ads.googleads.v26.enums.ContentLabelTypeEnum.ContentLabelType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.criterion_id

Field descriptionOutput only. The ID of the criterion.

This field is ignored during mutate.
Category`ATTRIBUTE` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.custom_affinity.custom_affinity

Field descriptionThe CustomInterest resource name.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.custom_audience.custom_audience

Field descriptionThe CustomAudience resource name.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.device.type

Field descriptionType of the device.
Category`ATTRIBUTE` Data Type`ENUM`
`CONNECTED_TV``DESKTOP``MOBILE``OTHER``TABLET``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.DeviceEnum.Device` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.display_name

Field descriptionOutput only. The display name of the criterion.

This field is ignored for mutates.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.extended_demographic.extended_demographic_id

Field descriptionTaxonomy id of the extended demographic group.
Category`ATTRIBUTE` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.gender.type

Field descriptionType of the gender.
Category`ATTRIBUTE` Data Type`ENUM`
`FEMALE``MALE``UNDETERMINED``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.GenderTypeEnum.GenderType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.income_range.type

Field descriptionType of the income range.
Category`ATTRIBUTE` Data Type`ENUM`
`INCOME_RANGE_0_50``INCOME_RANGE_50_60``INCOME_RANGE_60_70``INCOME_RANGE_70_80``INCOME_RANGE_80_90``INCOME_RANGE_90_UP``INCOME_RANGE_UNDETERMINED``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.IncomeRangeTypeEnum.IncomeRangeType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.ip_block.ip_address

Field descriptionThe IP address or the CIDR block to be excluded.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.keyword.match_type

Field descriptionThe match type of the keyword.
Category`ATTRIBUTE` Data Type`ENUM`
`BROAD``EXACT``PHRASE``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.KeywordMatchTypeEnum.KeywordMatchType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.keyword.text

Field descriptionThe text of the keyword (at most 80 characters and 10 words).
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.keyword_theme.free_form_keyword_theme

Field descriptionFree-form text to be matched to a Smart Campaign keyword theme constant
on a best-effort basis.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.keyword_theme.keyword_theme_constant

Field descriptionThe resource name of a Smart Campaign keyword theme constant.
`keywordThemeConstants/{keyword_theme_id}~{sub_keyword_theme_id}`
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.language.language_constant

Field descriptionThe language constant resource name.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.life_event.life_event_id

Field descriptionTaxonomy id of the life event.
Category`ATTRIBUTE` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.listing_scope.dimensions

Field descriptionScope of the campaign criterion.
Category`ATTRIBUTE` Data Type`MESSAGE` Type URL`google.ads.googleads.v26.common.ListingDimensionInfo` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: True Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.listing_scope.dimensions.activity_city.value

Field descriptionString value of the activity city. The Geo Target Constant resource
name.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: False  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.listing_scope.dimensions.activity_country.value

Field descriptionString value of the activity country. The Geo Target Constant resource
name.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: False  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.listing_scope.dimensions.activity_state.value

Field descriptionString value of the activity state. The Geo Target Constant resource
name.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: False  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.listing_scope.dimensions.hotel_city.city_criterion

Field descriptionThe Geo Target Constant resource name.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: False  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.listing_scope.dimensions.hotel_country_region.country_region_criterion

Field descriptionThe Geo Target Constant resource name.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: False  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.listing_scope.dimensions.hotel_state.state_criterion

Field descriptionThe Geo Target Constant resource name.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: False  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.local_service_id.service_id

Field descriptionThe criterion resource name.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.location.geo_target_constant

Field descriptionThe geo target constant resource name.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.location_group

Field descriptionImmutable. Location Group
Category`ATTRIBUTE` Data Type`MESSAGE` Type URL`google.ads.googleads.v26.common.LocationGroupInfo` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.location_group.enable_customer_level_location_asset_set

Field descriptionDenotes that the latest customer level asset set is used for targeting.
Used with radius and radius_units. Cannot be used with
feed, geo target constants or feed item sets. When using asset sets, either
this field or location_group_asset_sets should be specified. Both cannot be
used at the same time. This can only be set in CREATE operations.
Category`ATTRIBUTE` Data Type`BOOLEAN` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.location_group.geo_target_constants

Field descriptionGeo target constant(s) restricting the scope of the geographic area within
the feed. Currently only one geo target constant is allowed. Cannot be set
with AssetSet fields.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: False  
Filterable: True  
Sortable: False  
Repeated: True Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.mobile_app_category.mobile_app_category_constant

Field descriptionThe mobile app category constant resource name.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.mobile_application.app_id

Field descriptionA string that uniquely identifies a mobile application to Google Ads API.
The format of this string is "{platform}-{platform_native_id}", where
platform is "1" for iOS apps and "2" for Android apps, and where
platform_native_id is the mobile application identifier native to the
corresponding platform.
For iOS, this native identifier is the 9 digit string that appears at the
end of an App Store URL (for example, "476943146" for "Flood-It! 2" whose
App Store link is
"http://itunes.apple.com/us/app/flood-it!-2/id476943146"). For Android,
this native identifier is the application's package name (for example,
"com.labpixies.colordrips" for "Color Drips" given Google Play link
"https://play.google.com/store/apps/details?id=com.labpixies.colordrips").
A well formed app id for Google Ads API would thus be "1-476943146" for iOS
and "2-com.labpixies.colordrips" for Android.
This field is required and must be set in CREATE operations.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.mobile_application.name

Field descriptionName of this mobile application.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.mobile_device.mobile_device_constant

Field descriptionThe mobile device constant resource name.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.negative

Field descriptionImmutable. Whether to target (`false`) or exclude (`true`) the criterion.
Category`ATTRIBUTE` Data Type`BOOLEAN` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.operating_system_version.operating_system_version_constant

Field descriptionThe operating system version constant resource name.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.parental_status.type

Field descriptionType of the parental status.
Category`ATTRIBUTE` Data Type`ENUM`
`NOT_A_PARENT``PARENT``UNDETERMINED``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.ParentalStatusTypeEnum.ParentalStatusType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.placement.url

Field descriptionURL of the placement.

For example, "http://www.domain.com".
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.proximity.address.city_name

Field descriptionName of the city.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.proximity.address.country_code

Field descriptionCountry code.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.proximity.address.postal_code

Field descriptionPostal code.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.proximity.address.province_code

Field descriptionProvince or state code.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.proximity.address.province_name

Field descriptionProvince or state name.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.proximity.address.street_address

Field descriptionStreet address line 1.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.proximity.geo_point.latitude_in_micro_degrees

Field descriptionMicro degrees for the latitude.
Category`ATTRIBUTE` Data Type`INT32` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.proximity.geo_point.longitude_in_micro_degrees

Field descriptionMicro degrees for the longitude.
Category`ATTRIBUTE` Data Type`INT32` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.proximity.radius

Field descriptionThe radius of the proximity.
Category`ATTRIBUTE` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.proximity.radius_units

Field descriptionThe unit of measurement of the radius. Default is KILOMETERS.
Category`ATTRIBUTE` Data Type`ENUM`
`KILOMETERS``MILES``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.ProximityRadiusUnitsEnum.ProximityRadiusUnits` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.require_eu_political_advertising_declaration

Field descriptionOutput only. Indicates whether using this criterion requires setting
Campaign.contains_eu_political_advertising field.
Category`ATTRIBUTE` Data Type`BOOLEAN` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.resource_name

Field descriptionImmutable. The resource name of the campaign criterion.
Campaign criterion resource names have the form:

`customers/{customer_id}/campaignCriteria/{campaign_id}~{criterion_id}`
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.status

Field descriptionThe status of the criterion.
Category`ATTRIBUTE` Data Type`ENUM`
`ENABLED``PAUSED``REMOVED``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.CampaignCriterionStatusEnum.CampaignCriterionStatus` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.topic.path

Field descriptionThe category to target or exclude. Each subsequent element in the array
describes a more specific sub-category. For example,
"Pets \& Animals", "Pets", "Dogs" represents the "Pets \& Animals/Pets/Dogs"
category.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: True Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.topic.topic_constant

Field descriptionThe Topic Constant resource name.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.type

Field descriptionOutput only. The type of the criterion.
Category`ATTRIBUTE` Data Type`ENUM`
`AD_SCHEDULE``AGE_RANGE``APP_PAYMENT_MODEL``AUDIENCE``BRAND``BRAND_LIST``CARRIER``COMBINED_AUDIENCE``CONTENT_LABEL``CUSTOM_AFFINITY``CUSTOM_AUDIENCE``CUSTOM_INTENT``DEVICE``GENDER``INCOME_RANGE``IP_BLOCK``KEYWORD``KEYWORD_THEME``LANGUAGE``LIFE_EVENT``LISTING_GROUP``LISTING_SCOPE``LOCAL_SERVICE_ID``LOCATION``LOCATION_GROUP``MOBILE_APPLICATION``MOBILE_APP_CATEGORY``MOBILE_DEVICE``NEGATIVE_KEYWORD_LIST``OPERATING_SYSTEM_VERSION``PARENTAL_STATUS``PLACEMENT``PLACEMENT_LIST``PROXIMITY``RETAIL_FILTER``RETAIL_FILTER_BUNDLE``SEARCH_THEME``TOPIC``UNKNOWN``UNSPECIFIED``USER_INTEREST``USER_LIST``VERTICAL_ADS_ITEM_BID``VERTICAL_ADS_ITEM_GROUP_RULE``VERTICAL_ADS_ITEM_GROUP_RULE_LIST``VIDEO_LINEUP``WEBPAGE``WEBPAGE_LIST``YOUTUBE_CHANNEL``YOUTUBE_VIDEO` Type URL`google.ads.googleads.v26.enums.CriterionTypeEnum.CriterionType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.user_interest.user_interest_category

Field descriptionThe UserInterest resource name.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.user_list.user_list

Field descriptionThe User List resource name.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.video_lineup.video_lineup_id

Field descriptionID for a Video lineup. Contact your Google business development
representative for details.
Category`ATTRIBUTE` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.webpage.conditions

Field descriptionConditions, or logical expressions, for webpage targeting. The list of
webpage targeting conditions are and-ed together when evaluated
for targeting. An empty list of conditions indicates all pages of the
campaign's website are targeted.

This field is required for CREATE operations and is prohibited on UPDATE
operations.
Category`ATTRIBUTE` Data Type`MESSAGE` Type URL`google.ads.googleads.v26.common.WebpageConditionInfo` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: True Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.webpage.coverage_percentage

Field descriptionWebsite criteria coverage percentage. This is the computed percentage
of website coverage based on the website target, negative website target
and negative keywords in the ad group and campaign. For instance, when
coverage returns as 1, it indicates it has 100% coverage. This field is
read-only.
Category`ATTRIBUTE` Data Type`DOUBLE` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.webpage.criterion_name

Field descriptionThe name of the criterion that is defined by this parameter. The name value
will be used for identifying, sorting and filtering criteria with this type
of parameters.

This field is required for CREATE operations and is prohibited on UPDATE
operations.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.webpage.sample.sample_urls

Field descriptionWebpage sample urls
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: True Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.webpage_list.shared_set

Field descriptionShared set resource name of the webpage list.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.youtube_channel.channel_id

Field descriptionThe YouTube uploader channel id or the channel code of a YouTube channel.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.

## campaign_criterion.youtube_video.video_id

Field descriptionYouTube video id as it appears on the YouTube watch page.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as campaign_criterion.ad_schedule.day_of_week.
