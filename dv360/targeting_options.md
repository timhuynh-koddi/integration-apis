# Targeting Options

> Source: Display & Video 360 API v4 REST Discovery document (https://displayvideo.googleapis.com/$discovery/rest?version=v4, revision 20261117); reference https://developers.google.com/display-video/api/reference/rest. Fetched 2026-11-19.

Used by koddi-offsite via: `NewTargetingTypesService().TargetingOptions.Search/List` (`targeting.go`).

---

## targetingTypes.targetingOptions.search

`POST https://displayvideo.googleapis.com/v4/targetingTypes/{+targetingType}/targetingOptions:search`

Searches for targeting options of a given type based on the given search terms.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| targetingType | path | string enum(TARGETING_TYPE_UNSPECIFIED, TARGETING_TYPE_CHANNEL, TARGETING_TYPE_APP_CATEGORY, TARGETING_TYPE_APP, TARGETING_TYPE_URL, TARGETING_TYPE_DAY_AND_TIME, TARGETING_TYPE_AGE_RANGE, TARGETING_TYPE_REGIONAL_LOCATION_LIST, TARGETING_TYPE_PROXIMITY_LOCATION_LIST, TARGETING_TYPE_GENDER, TARGETING_TYPE_VIDEO_PLAYER_SIZE, TARGETING_TYPE_USER_REWARDED_CONTENT, TARGETING_TYPE_PARENTAL_STATUS, TARGETING_TYPE_CONTENT_INSTREAM_POSITION, TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION, TARGETING_TYPE_DEVICE_TYPE, TARGETING_TYPE_AUDIENCE_GROUP, TARGETING_TYPE_BROWSER, TARGETING_TYPE_HOUSEHOLD_INCOME, TARGETING_TYPE_ON_SCREEN_POSITION, TARGETING_TYPE_THIRD_PARTY_VERIFIER, TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION, TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION, TARGETING_TYPE_ENVIRONMENT, TARGETING_TYPE_CARRIER_AND_ISP, TARGETING_TYPE_OPERATING_SYSTEM, TARGETING_TYPE_DEVICE_MAKE_MODEL, TARGETING_TYPE_KEYWORD, TARGETING_TYPE_NEGATIVE_KEYWORD_LIST, TARGETING_TYPE_VIEWABILITY, TARGETING_TYPE_CATEGORY, TARGETING_TYPE_INVENTORY_SOURCE, TARGETING_TYPE_LANGUAGE, TARGETING_TYPE_AUTHORIZED_SELLER_STATUS, TARGETING_TYPE_GEO_REGION, TARGETING_TYPE_INVENTORY_SOURCE_GROUP, TARGETING_TYPE_EXCHANGE, TARGETING_TYPE_SUB_EXCHANGE, TARGETING_TYPE_POI, TARGETING_TYPE_BUSINESS_CHAIN, TARGETING_TYPE_CONTENT_DURATION, TARGETING_TYPE_CONTENT_STREAM_TYPE, TARGETING_TYPE_NATIVE_CONTENT_POSITION, TARGETING_TYPE_OMID, TARGETING_TYPE_AUDIO_CONTENT_TYPE, TARGETING_TYPE_CONTENT_GENRE, TARGETING_TYPE_YOUTUBE_VIDEO, TARGETING_TYPE_YOUTUBE_CHANNEL, TARGETING_TYPE_SESSION_POSITION, TARGETING_TYPE_CONTENT_THEME_EXCLUSION, TARGETING_TYPE_YOUTUBE_CHANNEL_PACK) | yes | Required. The type of targeting options to retrieve. Accepted values are: * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_POI` * `TARGETING_TYPE_BUSINESS_CHAIN` |

**Request body**: `SearchTargetingOptionsRequest`

**Response**: `SearchTargetingOptionsResponse`

---

## targetingTypes.targetingOptions.list

`GET https://displayvideo.googleapis.com/v4/targetingTypes/{+targetingType}/targetingOptions`

Lists targeting options of a given type.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| targetingType | path | string enum(TARGETING_TYPE_UNSPECIFIED, TARGETING_TYPE_CHANNEL, TARGETING_TYPE_APP_CATEGORY, TARGETING_TYPE_APP, TARGETING_TYPE_URL, TARGETING_TYPE_DAY_AND_TIME, TARGETING_TYPE_AGE_RANGE, TARGETING_TYPE_REGIONAL_LOCATION_LIST, TARGETING_TYPE_PROXIMITY_LOCATION_LIST, TARGETING_TYPE_GENDER, TARGETING_TYPE_VIDEO_PLAYER_SIZE, TARGETING_TYPE_USER_REWARDED_CONTENT, TARGETING_TYPE_PARENTAL_STATUS, TARGETING_TYPE_CONTENT_INSTREAM_POSITION, TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION, TARGETING_TYPE_DEVICE_TYPE, TARGETING_TYPE_AUDIENCE_GROUP, TARGETING_TYPE_BROWSER, TARGETING_TYPE_HOUSEHOLD_INCOME, TARGETING_TYPE_ON_SCREEN_POSITION, TARGETING_TYPE_THIRD_PARTY_VERIFIER, TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION, TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION, TARGETING_TYPE_ENVIRONMENT, TARGETING_TYPE_CARRIER_AND_ISP, TARGETING_TYPE_OPERATING_SYSTEM, TARGETING_TYPE_DEVICE_MAKE_MODEL, TARGETING_TYPE_KEYWORD, TARGETING_TYPE_NEGATIVE_KEYWORD_LIST, TARGETING_TYPE_VIEWABILITY, TARGETING_TYPE_CATEGORY, TARGETING_TYPE_INVENTORY_SOURCE, TARGETING_TYPE_LANGUAGE, TARGETING_TYPE_AUTHORIZED_SELLER_STATUS, TARGETING_TYPE_GEO_REGION, TARGETING_TYPE_INVENTORY_SOURCE_GROUP, TARGETING_TYPE_EXCHANGE, TARGETING_TYPE_SUB_EXCHANGE, TARGETING_TYPE_POI, TARGETING_TYPE_BUSINESS_CHAIN, TARGETING_TYPE_CONTENT_DURATION, TARGETING_TYPE_CONTENT_STREAM_TYPE, TARGETING_TYPE_NATIVE_CONTENT_POSITION, TARGETING_TYPE_OMID, TARGETING_TYPE_AUDIO_CONTENT_TYPE, TARGETING_TYPE_CONTENT_GENRE, TARGETING_TYPE_YOUTUBE_VIDEO, TARGETING_TYPE_YOUTUBE_CHANNEL, TARGETING_TYPE_SESSION_POSITION, TARGETING_TYPE_CONTENT_THEME_EXCLUSION, TARGETING_TYPE_YOUTUBE_CHANNEL_PACK) | yes | Required. The type of targeting option to be listed. Accepted values are: * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_AUCTION_PACKAGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_VIEWABILITY` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_OMID` |
| pageToken | query | string |  | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListTargetingOptions` method. If not specified, the first page of results will be returned. |
| advertiserId | query | string (int64) |  | Required. The Advertiser this request is being made in the context of. |
| pageSize | query | integer (int32) |  | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| orderBy | query | string |  | Field by which to sort the list. Acceptable values are: * `targetingOptionId` (default) The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `targetingOptionId desc`. |
| filter | query | string |  | Allows filtering by targeting option fields. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `OR` logical operators. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `EQUALS (=)` operator. Supported fields: * `carrierAndIspDetails.type` * `geoRegionDetails.geoRegionType` * `targetingOptionId` Examples: * All `GEO REGION` targeting options that belong to sub type `GEO_REGION_TYPE_COUNTRY` or `GEO_REGION_TYPE_STATE`: `geoRegionDetails.geoRegionType="GEO_REGION_TYPE_COUNTRY" OR geoRegionDetails.geoRegionType="GEO_REGION_TYPE_STATE"` * All `CARRIER AND ISP` targeting options that belong to sub type `CARRIER_AND_ISP_TYPE_CARRIER`: `carrierAndIspDetails.type="CARRIER_AND_ISP_TYPE_CARRIER"` The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |

**Response**: `ListTargetingOptionsResponse`

---

## targetingTypes.targetingOptions.get

`GET https://displayvideo.googleapis.com/v4/targetingTypes/{+targetingType}/targetingOptions/{+targetingOptionId}`

Gets a single targeting option.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| targetingType | path | string enum(TARGETING_TYPE_UNSPECIFIED, TARGETING_TYPE_CHANNEL, TARGETING_TYPE_APP_CATEGORY, TARGETING_TYPE_APP, TARGETING_TYPE_URL, TARGETING_TYPE_DAY_AND_TIME, TARGETING_TYPE_AGE_RANGE, TARGETING_TYPE_REGIONAL_LOCATION_LIST, TARGETING_TYPE_PROXIMITY_LOCATION_LIST, TARGETING_TYPE_GENDER, TARGETING_TYPE_VIDEO_PLAYER_SIZE, TARGETING_TYPE_USER_REWARDED_CONTENT, TARGETING_TYPE_PARENTAL_STATUS, TARGETING_TYPE_CONTENT_INSTREAM_POSITION, TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION, TARGETING_TYPE_DEVICE_TYPE, TARGETING_TYPE_AUDIENCE_GROUP, TARGETING_TYPE_BROWSER, TARGETING_TYPE_HOUSEHOLD_INCOME, TARGETING_TYPE_ON_SCREEN_POSITION, TARGETING_TYPE_THIRD_PARTY_VERIFIER, TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION, TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION, TARGETING_TYPE_ENVIRONMENT, TARGETING_TYPE_CARRIER_AND_ISP, TARGETING_TYPE_OPERATING_SYSTEM, TARGETING_TYPE_DEVICE_MAKE_MODEL, TARGETING_TYPE_KEYWORD, TARGETING_TYPE_NEGATIVE_KEYWORD_LIST, TARGETING_TYPE_VIEWABILITY, TARGETING_TYPE_CATEGORY, TARGETING_TYPE_INVENTORY_SOURCE, TARGETING_TYPE_LANGUAGE, TARGETING_TYPE_AUTHORIZED_SELLER_STATUS, TARGETING_TYPE_GEO_REGION, TARGETING_TYPE_INVENTORY_SOURCE_GROUP, TARGETING_TYPE_EXCHANGE, TARGETING_TYPE_SUB_EXCHANGE, TARGETING_TYPE_POI, TARGETING_TYPE_BUSINESS_CHAIN, TARGETING_TYPE_CONTENT_DURATION, TARGETING_TYPE_CONTENT_STREAM_TYPE, TARGETING_TYPE_NATIVE_CONTENT_POSITION, TARGETING_TYPE_OMID, TARGETING_TYPE_AUDIO_CONTENT_TYPE, TARGETING_TYPE_CONTENT_GENRE, TARGETING_TYPE_YOUTUBE_VIDEO, TARGETING_TYPE_YOUTUBE_CHANNEL, TARGETING_TYPE_SESSION_POSITION, TARGETING_TYPE_CONTENT_THEME_EXCLUSION, TARGETING_TYPE_YOUTUBE_CHANNEL_PACK) | yes | Required. The type of targeting option to retrieve. Accepted values are: * `TARGETING_TYPE_APP_CATEGORY` * `TARGETING_TYPE_AGE_RANGE` * `TARGETING_TYPE_AUCTION_PACKAGE` * `TARGETING_TYPE_GENDER` * `TARGETING_TYPE_VIDEO_PLAYER_SIZE` * `TARGETING_TYPE_USER_REWARDED_CONTENT` * `TARGETING_TYPE_PARENTAL_STATUS` * `TARGETING_TYPE_CONTENT_INSTREAM_POSITION` * `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION` * `TARGETING_TYPE_DEVICE_TYPE` * `TARGETING_TYPE_BROWSER` * `TARGETING_TYPE_HOUSEHOLD_INCOME` * `TARGETING_TYPE_ON_SCREEN_POSITION` * `TARGETING_TYPE_CARRIER_AND_ISP` * `TARGETING_TYPE_OPERATING_SYSTEM` * `TARGETING_TYPE_DEVICE_MAKE_MODEL` * `TARGETING_TYPE_ENVIRONMENT` * `TARGETING_TYPE_CATEGORY` * `TARGETING_TYPE_VIEWABILITY` * `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` * `TARGETING_TYPE_LANGUAGE` * `TARGETING_TYPE_GEO_REGION` * `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION` * `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION` * `TARGETING_TYPE_EXCHANGE` * `TARGETING_TYPE_SUB_EXCHANGE` * `TARGETING_TYPE_NATIVE_CONTENT_POSITION` * `TARGETING_TYPE_OMID` |
| targetingOptionId | path | string | yes | Required. The ID of the of targeting option to retrieve. |
| advertiserId | query | string (int64) |  | Required. The Advertiser this request is being made in the context of. |

**Response**: `TargetingOption`

---

## Schemas

### `SearchTargetingOptionsRequest`

Request message for SearchTargetingOptions.

| Field | Type | Description |
|---|---|---|
| poiSearchTerms | `PoiSearchTerms` | Search terms for POI targeting options. Can only be used when targeting_type is `TARGETING_TYPE_POI`. |
| businessChainSearchTerms | `BusinessChainSearchTerms` | Search terms for Business Chain targeting options. Can only be used when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`. |
| geoRegionSearchTerms | `GeoRegionSearchTerms` | Search terms for geo region targeting options. Can only be used when targeting_type is `TARGETING_TYPE_GEO_REGION`. |
| advertiserId | string (int64) | Required. The Advertiser this request is being made in the context of. |
| pageToken | string | A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `SearchTargetingOptions` method. If not specified, the first page of results will be returned. |
| pageSize | integer (int32) | Requested page size. Must be between `1` and `200`. If unspecified will default to `100`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |

### `SearchTargetingOptionsResponse`

Response message for SearchTargetingOptions.

| Field | Type | Description |
|---|---|---|
| targetingOptions | array<`TargetingOption`> | The list of targeting options that match the search criteria. This list will be absent if empty. |
| nextPageToken | string | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `SearchTargetingOptions` method to retrieve the next page of results. |

### `ListTargetingOptionsResponse`

Response message for ListTargetingOptions.

| Field | Type | Description |
|---|---|---|
| nextPageToken | string | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListTargetingOptions` method to retrieve the next page of results. |
| targetingOptions | array<`TargetingOption`> | The list of targeting options. This list will be absent if empty. |

### `TargetingOption`

Represents a single targeting option, which is a targetable concept in DV360.

| Field | Type | Description |
|---|---|---|
| categoryDetails | `CategoryTargetingOptionDetails` | Category resource details. |
| ageRangeDetails | `AgeRangeTargetingOptionDetails` | Age range details. |
| exchangeDetails | `ExchangeTargetingOptionDetails` | Exchange details. |
| nativeContentPositionDetails | `NativeContentPositionTargetingOptionDetails` | Native content position details. |
| contentInstreamPositionDetails | `ContentInstreamPositionTargetingOptionDetails` | Content instream position details. |
| name | string | Output only. The resource name for this targeting option. |
| sensitiveCategoryDetails | `SensitiveCategoryTargetingOptionDetails` | Sensitive Category details. |
| subExchangeDetails | `SubExchangeTargetingOptionDetails` | Sub-exchange details. |
| targetingOptionId | string | Output only. A unique identifier for this targeting option. The tuple {`targeting_type`, `targeting_option_id`} will be unique. |
| geoRegionDetails | `GeoRegionTargetingOptionDetails` | Geographic region resource details. |
| userRewardedContentDetails | `UserRewardedContentTargetingOptionDetails` | User rewarded content details. |
| targetingType | string enum(TARGETING_TYPE_UNSPECIFIED, TARGETING_TYPE_CHANNEL, TARGETING_TYPE_APP_CATEGORY, TARGETING_TYPE_APP, TARGETING_TYPE_URL, TARGETING_TYPE_DAY_AND_TIME, TARGETING_TYPE_AGE_RANGE, TARGETING_TYPE_REGIONAL_LOCATION_LIST, TARGETING_TYPE_PROXIMITY_LOCATION_LIST, TARGETING_TYPE_GENDER, TARGETING_TYPE_VIDEO_PLAYER_SIZE, TARGETING_TYPE_USER_REWARDED_CONTENT, TARGETING_TYPE_PARENTAL_STATUS, TARGETING_TYPE_CONTENT_INSTREAM_POSITION, TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION, TARGETING_TYPE_DEVICE_TYPE, TARGETING_TYPE_AUDIENCE_GROUP, TARGETING_TYPE_BROWSER, TARGETING_TYPE_HOUSEHOLD_INCOME, TARGETING_TYPE_ON_SCREEN_POSITION, TARGETING_TYPE_THIRD_PARTY_VERIFIER, TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION, TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION, TARGETING_TYPE_ENVIRONMENT, TARGETING_TYPE_CARRIER_AND_ISP, TARGETING_TYPE_OPERATING_SYSTEM, TARGETING_TYPE_DEVICE_MAKE_MODEL, TARGETING_TYPE_KEYWORD, TARGETING_TYPE_NEGATIVE_KEYWORD_LIST, TARGETING_TYPE_VIEWABILITY, TARGETING_TYPE_CATEGORY, TARGETING_TYPE_INVENTORY_SOURCE, TARGETING_TYPE_LANGUAGE, TARGETING_TYPE_AUTHORIZED_SELLER_STATUS, TARGETING_TYPE_GEO_REGION, TARGETING_TYPE_INVENTORY_SOURCE_GROUP, TARGETING_TYPE_EXCHANGE, TARGETING_TYPE_SUB_EXCHANGE, TARGETING_TYPE_POI, TARGETING_TYPE_BUSINESS_CHAIN, TARGETING_TYPE_CONTENT_DURATION, TARGETING_TYPE_CONTENT_STREAM_TYPE, TARGETING_TYPE_NATIVE_CONTENT_POSITION, TARGETING_TYPE_OMID, TARGETING_TYPE_AUDIO_CONTENT_TYPE, TARGETING_TYPE_CONTENT_GENRE, TARGETING_TYPE_YOUTUBE_VIDEO, TARGETING_TYPE_YOUTUBE_CHANNEL, TARGETING_TYPE_SESSION_POSITION, TARGETING_TYPE_CONTENT_THEME_EXCLUSION, TARGETING_TYPE_YOUTUBE_CHANNEL_PACK) | Output only. The type of this targeting option. Values: TARGETING_TYPE_UNSPECIFIED - Default value when type is not specified or is unknown in this version.; TARGETING_TYPE_CHANNEL - Target a channel (a custom group of related websites or apps).; TARGETING_TYPE_APP_CATEGORY - Target an app category (for example, education or puzzle games).; TARGETING_TYPE_APP - Target a specific app (for example, Angry Birds).; TARGETING_TYPE_URL - Target a specific url (for example, quora.com).; TARGETING_TYPE_DAY_AND_TIME - Target ads during a chosen time period on a specific day.; TARGETING_TYPE_AGE_RANGE - Target ads to a specific age range (for example, 18-24).; TARGETING_TYPE_REGIONAL_LOCATION_LIST - Target ads to the specified regions on a regional location list.; TARGETING_TYPE_PROXIMITY_LOCATION_LIST - Target ads to the specified points of interest on a proximity location list.; TARGETING_TYPE_GENDER - Target ads to a specific gender (for example, female or male).; TARGETING_TYPE_VIDEO_PLAYER_SIZE - Target a specific video player size for video ads.; TARGETING_TYPE_USER_REWARDED_CONTENT - Target user rewarded content for video ads.; TARGETING_TYPE_PARENTAL_STATUS - Target ads to a specific parental status (for example, parent or not a parent).; TARGETING_TYPE_CONTENT_INSTREAM_POSITION - Target video or audio ads in a specific content instream position (for example, pre-roll, mid-roll, or post-roll).; TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION - Target ads in a specific content outstream position.; TARGETING_TYPE_DEVICE_TYPE - Target ads to a specific device type (for example, tablet or connected TV).; TARGETING_TYPE_AUDIENCE_GROUP - Target ads to an audience or groups of audiences. Singleton field, at most one can exist on a single Lineitem at a time.; TARGETING_TYPE_BROWSER - Target ads to specific web browsers (for example, Chrome).; TARGETING_TYPE_HOUSEHOLD_INCOME - Target ads to a specific household income range (for example, top 10%).; TARGETING_TYPE_ON_SCREEN_POSITION - Target ads in a specific on screen position.; TARGETING_TYPE_THIRD_PARTY_VERIFIER - Filter web sites through third party verification (for example, IAS or DoubleVerify).; TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION - Filter web sites by specific digital content label ratings (for example, DL-MA: suitable only for mature audiences).; TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION - Filter website content by sensitive categories (for example, adult).; TARGETING_TYPE_ENVIRONMENT - Target ads to a specific environment (for example, web or app).; TARGETING_TYPE_CARRIER_AND_ISP - Target ads to a specific network carrier or internet service provider (ISP) (for example, Comcast or Orange).; TARGETING_TYPE_OPERATING_SYSTEM - Target ads to a specific operating system (for example, macOS).; TARGETING_TYPE_DEVICE_MAKE_MODEL - Target ads to a specific device make or model (for example, Roku or Samsung).; TARGETING_TYPE_KEYWORD - Target ads to a specific keyword (for example, dog or retriever).; TARGETING_TYPE_NEGATIVE_KEYWORD_LIST - Target ads to a specific negative keyword list.; TARGETING_TYPE_VIEWABILITY - Target ads to a specific viewability (for example, 80% viewable).; TARGETING_TYPE_CATEGORY - Target ads to a specific content category (for example, arts & entertainment).; TARGETING_TYPE_INVENTORY_SOURCE - Purchase impressions from specific deals and auction packages.; TARGETING_TYPE_LANGUAGE - Target ads to a specific language (for example, English or Japanese).; TARGETING_TYPE_AUTHORIZED_SELLER_STATUS - Target ads to ads.txt authorized sellers. If no targeting option of this type is assigned, the resource uses the "Authorized Direct Sellers and Resellers" option by default.; TARGETING_TYPE_GEO_REGION - Target ads to a specific regional location (for example, a city or state).; TARGETING_TYPE_INVENTORY_SOURCE_GROUP - Purchase impressions from a group of deals and auction packages.; TARGETING_TYPE_EXCHANGE - Purchase impressions from specific exchanges.; TARGETING_TYPE_SUB_EXCHANGE - Purchase impressions from specific sub-exchanges.; TARGETING_TYPE_POI - Target ads around a specific point of interest, such as a notable building, a street address, or latitude/longitude coordinates.; TARGETING_TYPE_BUSINESS_CHAIN - Target ads around locations of a business chain within a specific geo region.; TARGETING_TYPE_CONTENT_DURATION - Target ads to a specific video content duration.; TARGETING_TYPE_CONTENT_STREAM_TYPE - Target ads to a specific video content stream type.; TARGETING_TYPE_NATIVE_CONTENT_POSITION - Target ads to a specific native content position.; TARGETING_TYPE_OMID - Target ads in an Open Measurement enabled inventory.; TARGETING_TYPE_AUDIO_CONTENT_TYPE - Target ads to a specific audio content type.; TARGETING_TYPE_CONTENT_GENRE - Target ads to a specific content genre.; TARGETING_TYPE_YOUTUBE_VIDEO - Target ads to a specific YouTube video. Targeting of this type cannot be created or updated using the API. Although this targeting is inherited by child resources, **inherited targeting of this type will not be retrieveable**.; TARGETING_TYPE_YOUTUBE_CHANNEL - Target ads to a specific YouTube channel. Targeting of this type cannot be created or updated using the API. Although this targeting is inherited by child resources, **inherited targeting of this type will not be retrieveable**.; TARGETING_TYPE_SESSION_POSITION - Target ads to a serve it in a certain position of a session. Only supported for Ad Group resources under YouTube Programmatic Reservation line items. Targeting of this type cannot be created or updated using the API.; TARGETING_TYPE_CONTENT_THEME_EXCLUSION - Filter website content by content themes (for example, religion). Only supported for Advertiser resources. Targeting of this type cannot be created or updated using the API. This targeting is only inherited by child YouTube and Demand Gen line item resources.; TARGETING_TYPE_YOUTUBE_CHANNEL_PACK - Target ads to a specific YouTube channel pack. |
| audioContentTypeDetails | `AudioContentTypeTargetingOptionDetails` | Audio content type details. |
| contentStreamTypeDetails | `ContentStreamTypeTargetingOptionDetails` | Content stream type resource details. |
| contentGenreDetails | `ContentGenreTargetingOptionDetails` | Content genre resource details. |
| omidDetails | `OmidTargetingOptionDetails` | Open Measurement enabled inventory details. |
| householdIncomeDetails | `HouseholdIncomeTargetingOptionDetails` | Household income details. |
| onScreenPositionDetails | `OnScreenPositionTargetingOptionDetails` | On screen position details. |
| videoPlayerSizeDetails | `VideoPlayerSizeTargetingOptionDetails` | Video player size details. |
| poiDetails | `PoiTargetingOptionDetails` | POI resource details. |
| genderDetails | `GenderTargetingOptionDetails` | Gender details. |
| contentDurationDetails | `ContentDurationTargetingOptionDetails` | Content duration resource details. |
| viewabilityDetails | `ViewabilityTargetingOptionDetails` | Viewability resource details. |
| businessChainDetails | `BusinessChainTargetingOptionDetails` | Business chain resource details. |
| digitalContentLabelDetails | `DigitalContentLabelTargetingOptionDetails` | Digital content label details. |
| contentOutstreamPositionDetails | `ContentOutstreamPositionTargetingOptionDetails` | Content outstream position details. |
| parentalStatusDetails | `ParentalStatusTargetingOptionDetails` | Parental status details. |
| carrierAndIspDetails | `CarrierAndIspTargetingOptionDetails` | Carrier and ISP details. |
| contentThemeDetails | `ContentThemeTargetingOptionDetails` | Content theme details. |
| operatingSystemDetails | `OperatingSystemTargetingOptionDetails` | Operating system resources details. |
| deviceTypeDetails | `DeviceTypeTargetingOptionDetails` | Device type details. |
| browserDetails | `BrowserTargetingOptionDetails` | Browser details. |
| languageDetails | `LanguageTargetingOptionDetails` | Language resource details. |
| authorizedSellerStatusDetails | `AuthorizedSellerStatusTargetingOptionDetails` | Authorized seller status resource details. |
| deviceMakeModelDetails | `DeviceMakeModelTargetingOptionDetails` | Device make and model resource details. |
| appCategoryDetails | `AppCategoryTargetingOptionDetails` | App category details. |
| environmentDetails | `EnvironmentTargetingOptionDetails` | Environment details. |

### `BusinessChainSearchTerms`

Search terms for Business Chain targeting options. At least one of the field should be populated.

| Field | Type | Description |
|---|---|---|
| regionQuery | string | The search query for the desired geo region, e.g. "Seattle", "United State". |
| businessChainQuery | string | The search query for the desired business chain. The query must be the full name of the business, e.g. "KFC", "mercedes-benz". |

### `GeoRegionSearchTerms`

Search terms for geo region targeting options.

| Field | Type | Description |
|---|---|---|
| geoRegionQuery | string | The search query for the desired geo region. The query can be a prefix, e.g. "New Yor", "Seattle", "USA", etc. |

### `PoiSearchTerms`

Search terms for POI targeting options.

| Field | Type | Description |
|---|---|---|
| poiQuery | string | The search query for the desired POI name, street address, or coordinate of the desired POI. The query can be a prefix, e.g. "Times squar", "40.7505045,-73.99562", "315 W 44th St", etc. |

### `AgeRangeTargetingOptionDetails`

Represents a targetable age range. This will be populated in the age_range_details field when targeting_type is `TARGETING_TYPE_AGE_RANGE`.

| Field | Type | Description |
|---|---|---|
| ageRange | string enum(AGE_RANGE_UNSPECIFIED, AGE_RANGE_18_24, AGE_RANGE_25_34, AGE_RANGE_35_44, AGE_RANGE_45_54, AGE_RANGE_55_64, AGE_RANGE_65_PLUS, AGE_RANGE_UNKNOWN, AGE_RANGE_18_20, AGE_RANGE_21_24, AGE_RANGE_25_29, AGE_RANGE_30_34, AGE_RANGE_35_39, AGE_RANGE_40_44, AGE_RANGE_45_49, AGE_RANGE_50_54, AGE_RANGE_55_59, AGE_RANGE_60_64) | Output only. The age range of an audience. Values: AGE_RANGE_UNSPECIFIED - Default value when age range is not specified in this version. This enum is a placeholder for default value and does not represent a real age range option.; AGE_RANGE_18_24 - The age range of the audience is 18 to 24.; AGE_RANGE_25_34 - The age range of the audience is 25 to 34.; AGE_RANGE_35_44 - The age range of the audience is 35 to 44.; AGE_RANGE_45_54 - The age range of the audience is 45 to 54.; AGE_RANGE_55_64 - The age range of the audience is 55 to 64.; AGE_RANGE_65_PLUS - The age range of the audience is 65 and up.; AGE_RANGE_UNKNOWN - The age range of the audience is unknown.; AGE_RANGE_18_20 - The age range of the audience is 18 to 20, only supported for the AdGroup of YouTube Programmatic Reservation line item.; AGE_RANGE_21_24 - The age range of the audience is 21 to 24, only supported for the AdGroup of YouTube Programmatic Reservation line item.; AGE_RANGE_25_29 - The age range of the audience is 25 to 29, only supported for the AdGroup of YouTube Programmatic Reservation line item.; AGE_RANGE_30_34 - The age range of the audience is 30 to 34, only supported for the AdGroup of YouTube Programmatic Reservation line item.; AGE_RANGE_35_39 - The age range of the audience is 35 to 39, only supported for the AdGroup of YouTube Programmatic Reservation line item.; AGE_RANGE_40_44 - The age range of the audience is 40 to 44, only supported for the AdGroup of YouTube Programmatic Reservation line item.; AGE_RANGE_45_49 - The age range of the audience is 45 to 49, only supported for the AdGroup of YouTube Programmatic Reservation line item.; AGE_RANGE_50_54 - The age range of the audience is 50 to 54, only supported for the AdGroup of YouTube Programmatic Reservation line item.; AGE_RANGE_55_59 - The age range of the audience is 55 to 59, only supported for the AdGroup of YouTube Programmatic Reservation line item.; AGE_RANGE_60_64 - The age range of the audience is 60 to 64, only supported for the AdGroup of YouTube Programmatic Reservation line item. |

### `AppCategoryTargetingOptionDetails`

Represents a targetable collection of apps. A collection lets you target dynamic groups of related apps that are maintained by the platform, for example `All Apps/Google Play/Games`. This will be populated in the app_category_details field when targeting_type is `TARGETING_TYPE_APP_CATEGORY`.

| Field | Type | Description |
|---|---|---|
| displayName | string | Output only. The name of the app collection. |

### `AudioContentTypeTargetingOptionDetails`

Represents a targetable audio content type. This will be populated in the audio_content_type_details field when targeting_type is `TARGETING_TYPE_AUDIO_CONTENT_TYPE`.

| Field | Type | Description |
|---|---|---|
| audioContentType | string enum(AUDIO_CONTENT_TYPE_UNSPECIFIED, AUDIO_CONTENT_TYPE_UNKNOWN, AUDIO_CONTENT_TYPE_MUSIC, AUDIO_CONTENT_TYPE_BROADCAST, AUDIO_CONTENT_TYPE_PODCAST, AUDIO_CONTENT_TYPE_CATCH_UP_RADIO, AUDIO_CONTENT_TYPE_WEB_RADIO, AUDIO_CONTENT_TYPE_VIDEO_GAME, AUDIO_CONTENT_TYPE_TEXT_TO_SPEECH) | Output only. The audio content type. Values: AUDIO_CONTENT_TYPE_UNSPECIFIED - Audio content type is not specified in this version. This enum is a place holder for a default value and does not represent a real content stream type.; AUDIO_CONTENT_TYPE_UNKNOWN - The audio content type is unknown.; AUDIO_CONTENT_TYPE_MUSIC - The audio content type is music.; AUDIO_CONTENT_TYPE_BROADCAST - The audio content type is broadcast.; AUDIO_CONTENT_TYPE_PODCAST - The audio content type is podcast.; AUDIO_CONTENT_TYPE_CATCH_UP_RADIO - The audio content type is catch-up radio.; AUDIO_CONTENT_TYPE_WEB_RADIO - The audio content type is web radio.; AUDIO_CONTENT_TYPE_VIDEO_GAME - The audio content type is video game.; AUDIO_CONTENT_TYPE_TEXT_TO_SPEECH - The audio content type is text-to-speech. |

### `AuthorizedSellerStatusTargetingOptionDetails`

Represents a targetable authorized seller status. This will be populated in the authorized_seller_status_details field when targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`.

| Field | Type | Description |
|---|---|---|
| authorizedSellerStatus | string enum(AUTHORIZED_SELLER_STATUS_UNSPECIFIED, AUTHORIZED_SELLER_STATUS_AUTHORIZED_DIRECT_SELLERS_ONLY, AUTHORIZED_SELLER_STATUS_AUTHORIZED_AND_NON_PARTICIPATING_PUBLISHERS) | Output only. The authorized seller status. Values: AUTHORIZED_SELLER_STATUS_UNSPECIFIED - Default value when authorized seller status is not specified in this version. This enum is a placeholder for the default value, or "Authorized Direct Sellers and Resellers" in the UI.; AUTHORIZED_SELLER_STATUS_AUTHORIZED_DIRECT_SELLERS_ONLY - Only authorized sellers that directly own the inventory being monetized, as indicated by a DIRECT declaration in the ads.txt file. This value is equivalent to "Authorized Direct Sellers" in the UI.; AUTHORIZED_SELLER_STATUS_AUTHORIZED_AND_NON_PARTICIPATING_PUBLISHERS - All authorized sellers, including publishers that have not posted an ads.txt file. Display & Video 360 automatically disallows unauthorized sellers. This value is equivalent to "Authorized and Non-Participating Publishers" in the UI. |

### `BrowserTargetingOptionDetails`

Represents a targetable browser. This will be populated in the browser_details field when targeting_type is `TARGETING_TYPE_BROWSER`.

| Field | Type | Description |
|---|---|---|
| displayName | string | Output only. The display name of the browser. |

### `BusinessChainTargetingOptionDetails`

Represents a targetable business chain within a geo region. This will be populated in the business_chain_details field when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.

| Field | Type | Description |
|---|---|---|
| businessChain | string | Output only. The display name of the business chain, e.g. "KFC", "Chase Bank". |
| geoRegionType | string enum(GEO_REGION_TYPE_UNKNOWN, GEO_REGION_TYPE_OTHER, GEO_REGION_TYPE_COUNTRY, GEO_REGION_TYPE_REGION, GEO_REGION_TYPE_TERRITORY, GEO_REGION_TYPE_PROVINCE, GEO_REGION_TYPE_STATE, GEO_REGION_TYPE_PREFECTURE, GEO_REGION_TYPE_GOVERNORATE, GEO_REGION_TYPE_CANTON, GEO_REGION_TYPE_UNION_TERRITORY, GEO_REGION_TYPE_AUTONOMOUS_COMMUNITY, GEO_REGION_TYPE_DMA_REGION, GEO_REGION_TYPE_METRO, GEO_REGION_TYPE_CONGRESSIONAL_DISTRICT, GEO_REGION_TYPE_COUNTY, GEO_REGION_TYPE_MUNICIPALITY, GEO_REGION_TYPE_CITY, GEO_REGION_TYPE_POSTAL_CODE, GEO_REGION_TYPE_DEPARTMENT, GEO_REGION_TYPE_AIRPORT, GEO_REGION_TYPE_TV_REGION, GEO_REGION_TYPE_OKRUG, GEO_REGION_TYPE_BOROUGH, GEO_REGION_TYPE_CITY_REGION, GEO_REGION_TYPE_ARRONDISSEMENT, GEO_REGION_TYPE_NEIGHBORHOOD, GEO_REGION_TYPE_UNIVERSITY, GEO_REGION_TYPE_DISTRICT, GEO_REGION_TYPE_NATIONAL_PARK, GEO_REGION_TYPE_BARRIO, GEO_REGION_TYPE_SUB_WARD, GEO_REGION_TYPE_MUNICIPALITY_DISTRICT, GEO_REGION_TYPE_SUB_DISTRICT, GEO_REGION_TYPE_QUARTER, GEO_REGION_TYPE_DIVISION, GEO_REGION_TYPE_COMMUNE, GEO_REGION_TYPE_COLLOQUIAL_AREA, GEO_REGION_TYPE_POST_TOWN, GEO_REGION_TYPE_WARD) | Output only. The type of the geographic region. Values: GEO_REGION_TYPE_UNKNOWN - The geographic region type is unknown.; GEO_REGION_TYPE_OTHER - The geographic region type is other.; GEO_REGION_TYPE_COUNTRY - The geographic region is a country.; GEO_REGION_TYPE_REGION - The geographic region type is region.; GEO_REGION_TYPE_TERRITORY - The geographic region is a territory.; GEO_REGION_TYPE_PROVINCE - The geographic region is a province.; GEO_REGION_TYPE_STATE - The geographic region is a state.; GEO_REGION_TYPE_PREFECTURE - The geographic region is a prefecture.; GEO_REGION_TYPE_GOVERNORATE - The geographic region is a governorate.; GEO_REGION_TYPE_CANTON - The geographic region is a canton.; GEO_REGION_TYPE_UNION_TERRITORY - The geographic region is a union territory.; GEO_REGION_TYPE_AUTONOMOUS_COMMUNITY - The geographic region is an autonomous community.; GEO_REGION_TYPE_DMA_REGION - The geographic region is a designated market area (DMA) region.; GEO_REGION_TYPE_METRO - The geographic region type is metro.; GEO_REGION_TYPE_CONGRESSIONAL_DISTRICT - The geographic region is a congressional district.; GEO_REGION_TYPE_COUNTY - The geographic region is a county.; GEO_REGION_TYPE_MUNICIPALITY - The geographic region is a municipality.; GEO_REGION_TYPE_CITY - The geographic region is a city.; GEO_REGION_TYPE_POSTAL_CODE - The geographic region targeting type is postal code.; GEO_REGION_TYPE_DEPARTMENT - The geographic region targeting type is department.; GEO_REGION_TYPE_AIRPORT - The geographic region is an airport.; GEO_REGION_TYPE_TV_REGION - The geographic region is a TV region.; GEO_REGION_TYPE_OKRUG - The geographic region is an okrug.; GEO_REGION_TYPE_BOROUGH - The geographic region is a borough.; GEO_REGION_TYPE_CITY_REGION - The geographic region is a city region.; GEO_REGION_TYPE_ARRONDISSEMENT - The geographic region is an arrondissement.; GEO_REGION_TYPE_NEIGHBORHOOD - The geographic region is a neighborhood.; GEO_REGION_TYPE_UNIVERSITY - The geographic region is a university.; GEO_REGION_TYPE_DISTRICT - The geographic region is a district.; GEO_REGION_TYPE_NATIONAL_PARK - The geographic region is a national park.; GEO_REGION_TYPE_BARRIO - The geographic region is a barrio.; GEO_REGION_TYPE_SUB_WARD - The geographic region is a sub ward.; GEO_REGION_TYPE_MUNICIPALITY_DISTRICT - The geographic region is a municipality district.; GEO_REGION_TYPE_SUB_DISTRICT - The geographic region is a sub district.; GEO_REGION_TYPE_QUARTER - The geographic region is a quarter.; GEO_REGION_TYPE_DIVISION - The geographic region is a division.; GEO_REGION_TYPE_COMMUNE - The geographic region is a commune.; GEO_REGION_TYPE_COLLOQUIAL_AREA - The geographic region is a colloquial area.; GEO_REGION_TYPE_POST_TOWN - The geographic region is a post town.; GEO_REGION_TYPE_WARD - The geographic region is a ward. |
| geoRegion | string | Output only. The display name of the geographic region, e.g. "Ontario, Canada". |

### `CarrierAndIspTargetingOptionDetails`

Represents a targetable carrier or ISP. This will be populated in the carrier_and_isp_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`.

| Field | Type | Description |
|---|---|---|
| type | string enum(CARRIER_AND_ISP_TYPE_UNSPECIFIED, CARRIER_AND_ISP_TYPE_ISP, CARRIER_AND_ISP_TYPE_CARRIER) | Output only. The type indicating if it's carrier or ISP. Values: CARRIER_AND_ISP_TYPE_UNSPECIFIED - Default value when type is not specified or is unknown in this version.; CARRIER_AND_ISP_TYPE_ISP - Indicates this targeting resource refers to an ISP.; CARRIER_AND_ISP_TYPE_CARRIER - Indicates this targeting resource refers to a mobile carrier. |
| displayName | string | Output only. The display name of the carrier or ISP. |

### `CategoryTargetingOptionDetails`

Represents a targetable category. This will be populated in the category_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_CATEGORY`.

| Field | Type | Description |
|---|---|---|
| displayName | string | Output only. The display name of the category. |
| exclusionStatus | string enum(CATEGORY_EXCLUSION_STATUS_UNSPECIFIED, CATEGORY_EXCLUSION_STATUS_ALLOWED, CATEGORY_EXCLUSION_STATUS_DEPRECATED, CATEGORY_EXCLUSION_STATUS_NOT_ALLOWED) | Output only. The exclusion status of the category. Values: CATEGORY_EXCLUSION_STATUS_UNSPECIFIED - The exclusion status is unspecified.; CATEGORY_EXCLUSION_STATUS_ALLOWED - The category can be excluded.; CATEGORY_EXCLUSION_STATUS_DEPRECATED - The category is deprecated for exclusion and will be disallowed in the future.; CATEGORY_EXCLUSION_STATUS_NOT_ALLOWED - The category cannot be excluded. |

### `ContentDurationTargetingOptionDetails`

Represents a targetable content duration. This will be populated in the content_duration_details field when targeting_type is `TARGETING_TYPE_CONTENT_DURATION`.

| Field | Type | Description |
|---|---|---|
| contentDuration | string enum(CONTENT_DURATION_UNSPECIFIED, CONTENT_DURATION_UNKNOWN, CONTENT_DURATION_0_TO_1_MIN, CONTENT_DURATION_1_TO_5_MIN, CONTENT_DURATION_5_TO_15_MIN, CONTENT_DURATION_15_TO_30_MIN, CONTENT_DURATION_30_TO_60_MIN, CONTENT_DURATION_OVER_60_MIN) | Output only. The content duration. Values: CONTENT_DURATION_UNSPECIFIED - Content duration is not specified in this version. This enum is a place holder for a default value and does not represent a real content duration.; CONTENT_DURATION_UNKNOWN - The content duration is unknown.; CONTENT_DURATION_0_TO_1_MIN - Content is 0-1 minute long.; CONTENT_DURATION_1_TO_5_MIN - Content is 1-5 minutes long.; CONTENT_DURATION_5_TO_15_MIN - Content is 5-15 minutes long.; CONTENT_DURATION_15_TO_30_MIN - Content is 15-30 minutes long.; CONTENT_DURATION_30_TO_60_MIN - Content is 30-60 minutes long.; CONTENT_DURATION_OVER_60_MIN - Content is over 60 minutes long. |

### `ContentGenreTargetingOptionDetails`

Represents a targetable content genre. This will be populated in the content_genre_details field when targeting_type is `TARGETING_TYPE_CONTENT_GENRE`.

| Field | Type | Description |
|---|---|---|
| displayName | string | Output only. The display name of the content genre |

### `ContentInstreamPositionTargetingOptionDetails`

Represents a targetable content instream position, which could be used by video and audio ads. This will be populated in the content_instream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_INSTREAM_POSITION`.

| Field | Type | Description |
|---|---|---|
| contentInstreamPosition | string enum(CONTENT_INSTREAM_POSITION_UNSPECIFIED, CONTENT_INSTREAM_POSITION_PRE_ROLL, CONTENT_INSTREAM_POSITION_MID_ROLL, CONTENT_INSTREAM_POSITION_POST_ROLL, CONTENT_INSTREAM_POSITION_UNKNOWN) | Output only. The content instream position. Values: CONTENT_INSTREAM_POSITION_UNSPECIFIED - Content instream position is not specified in this version. This enum is a place holder for a default value and does not represent a real in stream ad position.; CONTENT_INSTREAM_POSITION_PRE_ROLL - Ads that play before streaming content.; CONTENT_INSTREAM_POSITION_MID_ROLL - Ads that play between the beginning and end of streaming content.; CONTENT_INSTREAM_POSITION_POST_ROLL - Ads that play at the end of streaming content.; CONTENT_INSTREAM_POSITION_UNKNOWN - Ads instream position is unknown. |

### `ContentOutstreamPositionTargetingOptionDetails`

Represents a targetable content outstream position, which could be used by display and video ads. This will be populated in the content_outstream_position_details field when targeting_type is `TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION`.

| Field | Type | Description |
|---|---|---|
| contentOutstreamPosition | string enum(CONTENT_OUTSTREAM_POSITION_UNSPECIFIED, CONTENT_OUTSTREAM_POSITION_UNKNOWN, CONTENT_OUTSTREAM_POSITION_IN_ARTICLE, CONTENT_OUTSTREAM_POSITION_IN_BANNER, CONTENT_OUTSTREAM_POSITION_IN_FEED, CONTENT_OUTSTREAM_POSITION_INTERSTITIAL) | Output only. The content outstream position. Values: CONTENT_OUTSTREAM_POSITION_UNSPECIFIED - Content outstream position is not specified in this version. This enum is a place holder for a default value and does not represent a real content outstream position.; CONTENT_OUTSTREAM_POSITION_UNKNOWN - The ad position is unknown in the content outstream.; CONTENT_OUTSTREAM_POSITION_IN_ARTICLE - Ads that appear between the paragraphs of your pages.; CONTENT_OUTSTREAM_POSITION_IN_BANNER - Ads that display on the top and the sides of a page.; CONTENT_OUTSTREAM_POSITION_IN_FEED - Ads that appear in a scrollable stream of content. A feed is typically editorial (e.g. a list of articles or news) or listings (e.g. a list of products or services).; CONTENT_OUTSTREAM_POSITION_INTERSTITIAL - Ads shown before or between content loads. |

### `ContentStreamTypeTargetingOptionDetails`

Represents a targetable content stream type. This will be populated in the content_stream_type_details field when targeting_type is `TARGETING_TYPE_CONTENT_STREAM_TYPE`.

| Field | Type | Description |
|---|---|---|
| contentStreamType | string enum(CONTENT_STREAM_TYPE_UNSPECIFIED, CONTENT_LIVE_STREAM, CONTENT_ON_DEMAND) | Output only. The content stream type. Values: CONTENT_STREAM_TYPE_UNSPECIFIED - Content stream type is not specified in this version. This enum is a place holder for a default value and does not represent a real content stream type.; CONTENT_LIVE_STREAM - The content is being live-streamed.; CONTENT_ON_DEMAND - The content is viewed on-demand. |

### `ContentThemeTargetingOptionDetails`

Represents a targetable content theme. This will be populated in the content_theme_details field of the TargetingOption when targeting_type is `TARGETING_TYPE_CONTENT_THEME_EXCLUSION`.

| Field | Type | Description |
|---|---|---|
| contentTheme | string enum(CONTENT_THEME_UNSPECIFIED, CONTENT_THEME_FIGHTING_VIDEO_GAMES, CONTENT_THEME_MATURE_GAMES, CONTENT_THEME_NOT_YET_DETERMINED_HEALTH_SOURCES, CONTENT_THEME_NOT_YET_DETERMINED_NEWS_SOURCES, CONTENT_THEME_POLITICS, CONTENT_THEME_RECENT_NEWS, CONTENT_THEME_RELIGION, CONTENT_THEME_UNPLEASANT_HEALTH_CONTENT, CONTENT_THEME_UNPLEASANT_NEWS) | Output only. An enum for the DV360 content theme content classifier. Values: CONTENT_THEME_UNSPECIFIED - Content theme is not specified or is unknown in this version.; CONTENT_THEME_FIGHTING_VIDEO_GAMES - Fighting video games.; CONTENT_THEME_MATURE_GAMES - Mature games.; CONTENT_THEME_NOT_YET_DETERMINED_HEALTH_SOURCES - Not yet determined health sources.; CONTENT_THEME_NOT_YET_DETERMINED_NEWS_SOURCES - Not yet determined news sources.; CONTENT_THEME_POLITICS - Politics.; CONTENT_THEME_RECENT_NEWS - Recent news.; CONTENT_THEME_RELIGION - Religion.; CONTENT_THEME_UNPLEASANT_HEALTH_CONTENT - Unpleasant health content.; CONTENT_THEME_UNPLEASANT_NEWS - Unpleasant news. |

### `DeviceMakeModelTargetingOptionDetails`

Represents a targetable device make and model. This will be populated in the device_make_model_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_MAKE_MODEL`.

| Field | Type | Description |
|---|---|---|
| displayName | string | Output only. The display name of the device make and model. |

### `DeviceTypeTargetingOptionDetails`

Represents a targetable device type. This will be populated in the device_type_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_DEVICE_TYPE`.

| Field | Type | Description |
|---|---|---|
| deviceType | string enum(DEVICE_TYPE_UNSPECIFIED, DEVICE_TYPE_COMPUTER, DEVICE_TYPE_CONNECTED_TV, DEVICE_TYPE_SMART_PHONE, DEVICE_TYPE_TABLET, DEVICE_TYPE_CONNECTED_DEVICE) | Output only. The device type that is used to be targeted. Values: DEVICE_TYPE_UNSPECIFIED - Default value when device type is not specified in this version. This enum is a placeholder for default value and does not represent a real device type option.; DEVICE_TYPE_COMPUTER - Computer.; DEVICE_TYPE_CONNECTED_TV - Connected TV.; DEVICE_TYPE_SMART_PHONE - Smart phone.; DEVICE_TYPE_TABLET - Tablet.; DEVICE_TYPE_CONNECTED_DEVICE - Connected device. |

### `DigitalContentLabelTargetingOptionDetails`

Represents a targetable digital content label rating tier. This will be populated in the digital_content_label_details field of the TargetingOption when targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`.

| Field | Type | Description |
|---|---|---|
| contentRatingTier | string enum(CONTENT_RATING_TIER_UNSPECIFIED, CONTENT_RATING_TIER_UNRATED, CONTENT_RATING_TIER_GENERAL, CONTENT_RATING_TIER_PARENTAL_GUIDANCE, CONTENT_RATING_TIER_TEENS, CONTENT_RATING_TIER_MATURE, CONTENT_RATING_TIER_FAMILIES) | Output only. An enum for the content label brand safety tiers. Values: CONTENT_RATING_TIER_UNSPECIFIED - Content label is not specified in this version. This enum is a place holder for a default value and does not represent a real content rating.; CONTENT_RATING_TIER_UNRATED - Content that has not been labeled.; CONTENT_RATING_TIER_GENERAL - Deprecated: This content rating tier is no longer supported. Content suitable for general audiences.; CONTENT_RATING_TIER_PARENTAL_GUIDANCE - Deprecated: This content rating tier is no longer supported. Content suitable for most audiences with parental guidance.; CONTENT_RATING_TIER_TEENS - Deprecated: This content rating tier is no longer supported. Content suitable for teen and older audiences.; CONTENT_RATING_TIER_MATURE - Deprecated: This content rating tier is no longer supported. Content suitable only for mature audiences.; CONTENT_RATING_TIER_FAMILIES - Deprecated: This content rating tier is no longer supported. Content suitable for family audiences. It is a subset of CONTENT_RATING_TIER_GENERAL. Only applicable to YouTube and Partners line items. |

### `EnvironmentTargetingOptionDetails`

Represents a targetable environment. This will be populated in the environment_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_ENVIRONMENT`.

| Field | Type | Description |
|---|---|---|
| environment | string enum(ENVIRONMENT_UNSPECIFIED, ENVIRONMENT_WEB_OPTIMIZED, ENVIRONMENT_WEB_NOT_OPTIMIZED, ENVIRONMENT_APP) | Output only. The serving environment. Values: ENVIRONMENT_UNSPECIFIED - Default value when environment is not specified in this version. This enum is a placeholder for default value and does not represent a real environment option.; ENVIRONMENT_WEB_OPTIMIZED - Target inventory displayed in browsers. This includes inventory that was designed for the device it was viewed on, such as mobile websites viewed on a mobile device. ENVIRONMENT_WEB_NOT_OPTIMIZED, if targeted, should be deleted prior to the deletion of this targeting option.; ENVIRONMENT_WEB_NOT_OPTIMIZED - Target inventory displayed in browsers. This includes inventory that was not designed for the device but viewed on it, such as websites optimized for desktop but viewed on a mobile device. ENVIRONMENT_WEB_OPTIMIZED should be targeted prior to the addition of this targeting option.; ENVIRONMENT_APP - Target inventory displayed in apps. |

### `ExchangeTargetingOptionDetails`

Represents a targetable exchange. This will be populated in the exchange_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_EXCHANGE`.

| Field | Type | Description |
|---|---|---|
| exchange | string enum(EXCHANGE_UNSPECIFIED, EXCHANGE_GOOGLE_AD_MANAGER, EXCHANGE_APPNEXUS, EXCHANGE_BRIGHTROLL, EXCHANGE_ADFORM, EXCHANGE_ADMETA, EXCHANGE_ADMIXER, EXCHANGE_ADSMOGO, EXCHANGE_ADSWIZZ, EXCHANGE_BIDSWITCH, EXCHANGE_BRIGHTROLL_DISPLAY, EXCHANGE_CADREON, EXCHANGE_DAILYMOTION, EXCHANGE_FIVE, EXCHANGE_FLUCT, EXCHANGE_FREEWHEEL, EXCHANGE_GENIEE, EXCHANGE_GUMGUM, EXCHANGE_IMOBILE, EXCHANGE_IBILLBOARD, EXCHANGE_IMPROVE_DIGITAL, EXCHANGE_INDEX, EXCHANGE_KARGO, EXCHANGE_MICROAD, EXCHANGE_MOPUB, EXCHANGE_NEND, EXCHANGE_ONE_BY_AOL_DISPLAY, EXCHANGE_ONE_BY_AOL_MOBILE, EXCHANGE_ONE_BY_AOL_VIDEO, EXCHANGE_OOYALA, EXCHANGE_OPENX, EXCHANGE_PERMODO, EXCHANGE_PLATFORMONE, EXCHANGE_PLATFORMID, EXCHANGE_PUBMATIC, EXCHANGE_PULSEPOINT, EXCHANGE_REVENUEMAX, EXCHANGE_RUBICON, EXCHANGE_SMARTCLIP, EXCHANGE_SMARTRTB, EXCHANGE_SMARTSTREAMTV, EXCHANGE_SOVRN, EXCHANGE_SPOTXCHANGE, EXCHANGE_STROER, EXCHANGE_TEADSTV, EXCHANGE_TELARIA, EXCHANGE_TVN, EXCHANGE_UNITED, EXCHANGE_YIELDLAB, EXCHANGE_YIELDMO, EXCHANGE_UNRULYX, EXCHANGE_OPEN8, EXCHANGE_TRITON, EXCHANGE_TRIPLELIFT, EXCHANGE_TABOOLA, EXCHANGE_INMOBI, EXCHANGE_SMAATO, EXCHANGE_AJA, EXCHANGE_SUPERSHIP, EXCHANGE_NEXSTAR_DIGITAL, EXCHANGE_WAZE, EXCHANGE_SOUNDCAST, EXCHANGE_SHARETHROUGH, EXCHANGE_FYBER, EXCHANGE_RED_FOR_PUBLISHERS, EXCHANGE_MEDIANET, EXCHANGE_TAPJOY, EXCHANGE_VISTAR, EXCHANGE_DAX, EXCHANGE_JCD, EXCHANGE_PLACE_EXCHANGE, EXCHANGE_APPLOVIN, EXCHANGE_CONNATIX, EXCHANGE_RESET_DIGITAL, EXCHANGE_HIVESTACK, EXCHANGE_DRAX, EXCHANGE_APPLOVIN_GBID, EXCHANGE_FYBER_GBID, EXCHANGE_UNITY_GBID, EXCHANGE_CHARTBOOST_GBID, EXCHANGE_ADMOST_GBID, EXCHANGE_TOPON_GBID, EXCHANGE_NETFLIX, EXCHANGE_CORE, EXCHANGE_COMMERCE_GRID, EXCHANGE_SPOTIFY, EXCHANGE_TUBI, EXCHANGE_SNAP, EXCHANGE_CADENT, EXCHANGE_EXTE) | Output only. The type of exchange. Values: EXCHANGE_UNSPECIFIED - Exchange is not specified or is unknown in this version.; EXCHANGE_GOOGLE_AD_MANAGER - Google Ad Manager.; EXCHANGE_APPNEXUS - AppNexus.; EXCHANGE_BRIGHTROLL - BrightRoll Exchange for Video from Yahoo!.; EXCHANGE_ADFORM - Adform.; EXCHANGE_ADMETA - Admeta.; EXCHANGE_ADMIXER - Admixer.; EXCHANGE_ADSMOGO - AdsMogo.; EXCHANGE_ADSWIZZ - AdsWizz.; EXCHANGE_BIDSWITCH - BidSwitch.; EXCHANGE_BRIGHTROLL_DISPLAY - BrightRoll Exchange for Display from Yahoo!.; EXCHANGE_CADREON - Cadreon.; EXCHANGE_DAILYMOTION - Dailymotion.; EXCHANGE_FIVE - Five.; EXCHANGE_FLUCT - Fluct.; EXCHANGE_FREEWHEEL - FreeWheel SSP.; EXCHANGE_GENIEE - Geniee.; EXCHANGE_GUMGUM - GumGum.; EXCHANGE_IMOBILE - i-mobile.; EXCHANGE_IBILLBOARD - iBILLBOARD.; EXCHANGE_IMPROVE_DIGITAL - Improve Digital.; EXCHANGE_INDEX - Index Exchange.; EXCHANGE_KARGO - Kargo.; EXCHANGE_MICROAD - MicroAd.; EXCHANGE_MOPUB - MoPub.; EXCHANGE_NEND - Nend.; EXCHANGE_ONE_BY_AOL_DISPLAY - ONE by AOL: Display Market Place.; EXCHANGE_ONE_BY_AOL_MOBILE - ONE by AOL: Mobile.; EXCHANGE_ONE_BY_AOL_VIDEO - ONE by AOL: Video.; EXCHANGE_OOYALA - Ooyala.; EXCHANGE_OPENX - OpenX.; EXCHANGE_PERMODO - Permodo.; EXCHANGE_PLATFORMONE - Platform One.; EXCHANGE_PLATFORMID - PlatformId.; EXCHANGE_PUBMATIC - PubMatic.; EXCHANGE_PULSEPOINT - PulsePoint.; EXCHANGE_REVENUEMAX - RevenueMax.; EXCHANGE_RUBICON - Rubicon.; EXCHANGE_SMARTCLIP - SmartClip.; EXCHANGE_SMARTRTB - SmartRTB+.; EXCHANGE_SMARTSTREAMTV - SmartstreamTv.; EXCHANGE_SOVRN - Sovrn.; EXCHANGE_SPOTXCHANGE - SpotXchange.; EXCHANGE_STROER - Ströer SSP.; EXCHANGE_TEADSTV - TeadsTv.; EXCHANGE_TELARIA - Telaria.; EXCHANGE_TVN - TVN.; EXCHANGE_UNITED - United.; EXCHANGE_YIELDLAB - Yieldlab.; EXCHANGE_YIELDMO - Yieldmo.; EXCHANGE_UNRULYX - UnrulyX.; EXCHANGE_OPEN8 - Open8.; EXCHANGE_TRITON - Triton.; EXCHANGE_TRIPLELIFT - TripleLift.; EXCHANGE_TABOOLA - Taboola.; EXCHANGE_INMOBI - InMobi.; EXCHANGE_SMAATO - Smaato.; EXCHANGE_AJA - Aja.; EXCHANGE_SUPERSHIP - Supership.; EXCHANGE_NEXSTAR_DIGITAL - Nexstar Digital.; EXCHANGE_WAZE - Waze.; EXCHANGE_SOUNDCAST - SoundCast.; EXCHANGE_SHARETHROUGH - Sharethrough.; EXCHANGE_FYBER - Fyber.; EXCHANGE_RED_FOR_PUBLISHERS - Red For Publishers.; EXCHANGE_MEDIANET - Media.net.; EXCHANGE_TAPJOY - Tapjoy.; EXCHANGE_VISTAR - Vistar.; EXCHANGE_DAX - DAX.; EXCHANGE_JCD - JCD.; EXCHANGE_PLACE_EXCHANGE - Place Exchange.; EXCHANGE_APPLOVIN - AppLovin.; EXCHANGE_CONNATIX - Connatix.; EXCHANGE_RESET_DIGITAL - Reset Digital.; EXCHANGE_HIVESTACK - Hivestack.; EXCHANGE_DRAX - Drax.; EXCHANGE_APPLOVIN_GBID - AppLovin MAX.; EXCHANGE_FYBER_GBID - DT Fairbid.; EXCHANGE_UNITY_GBID - Unity LevelPlay.; EXCHANGE_CHARTBOOST_GBID - Chartboost Mediation.; EXCHANGE_ADMOST_GBID - AdMost.; EXCHANGE_TOPON_GBID - TopOn.; EXCHANGE_NETFLIX - Netflix.; EXCHANGE_CORE - Core.; EXCHANGE_COMMERCE_GRID - Commerce Grid.; EXCHANGE_SPOTIFY - Spotify.; EXCHANGE_TUBI - Tubi.; EXCHANGE_SNAP - Snap.; EXCHANGE_CADENT - Cadent.; EXCHANGE_EXTE - Exte. |

### `GenderTargetingOptionDetails`

Represents a targetable gender. This will be populated in the gender_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_GENDER`.

| Field | Type | Description |
|---|---|---|
| gender | string enum(GENDER_UNSPECIFIED, GENDER_MALE, GENDER_FEMALE, GENDER_UNKNOWN) | Output only. The gender of an audience. Values: GENDER_UNSPECIFIED - Default value when gender is not specified in this version. This enum is a place holder for default value and does not represent a real gender option.; GENDER_MALE - The audience gender is male.; GENDER_FEMALE - The audience gender is female.; GENDER_UNKNOWN - The audience gender is unknown. |

### `GeoRegionTargetingOptionDetails`

Represents a targetable geographic region. This will be populated in the geo_region_details field when targeting_type is `TARGETING_TYPE_GEO_REGION`.

| Field | Type | Description |
|---|---|---|
| displayName | string | Output only. The display name of the geographic region (e.g., "Ontario, Canada"). |
| geoRegionType | string enum(GEO_REGION_TYPE_UNKNOWN, GEO_REGION_TYPE_OTHER, GEO_REGION_TYPE_COUNTRY, GEO_REGION_TYPE_REGION, GEO_REGION_TYPE_TERRITORY, GEO_REGION_TYPE_PROVINCE, GEO_REGION_TYPE_STATE, GEO_REGION_TYPE_PREFECTURE, GEO_REGION_TYPE_GOVERNORATE, GEO_REGION_TYPE_CANTON, GEO_REGION_TYPE_UNION_TERRITORY, GEO_REGION_TYPE_AUTONOMOUS_COMMUNITY, GEO_REGION_TYPE_DMA_REGION, GEO_REGION_TYPE_METRO, GEO_REGION_TYPE_CONGRESSIONAL_DISTRICT, GEO_REGION_TYPE_COUNTY, GEO_REGION_TYPE_MUNICIPALITY, GEO_REGION_TYPE_CITY, GEO_REGION_TYPE_POSTAL_CODE, GEO_REGION_TYPE_DEPARTMENT, GEO_REGION_TYPE_AIRPORT, GEO_REGION_TYPE_TV_REGION, GEO_REGION_TYPE_OKRUG, GEO_REGION_TYPE_BOROUGH, GEO_REGION_TYPE_CITY_REGION, GEO_REGION_TYPE_ARRONDISSEMENT, GEO_REGION_TYPE_NEIGHBORHOOD, GEO_REGION_TYPE_UNIVERSITY, GEO_REGION_TYPE_DISTRICT, GEO_REGION_TYPE_NATIONAL_PARK, GEO_REGION_TYPE_BARRIO, GEO_REGION_TYPE_SUB_WARD, GEO_REGION_TYPE_MUNICIPALITY_DISTRICT, GEO_REGION_TYPE_SUB_DISTRICT, GEO_REGION_TYPE_QUARTER, GEO_REGION_TYPE_DIVISION, GEO_REGION_TYPE_COMMUNE, GEO_REGION_TYPE_COLLOQUIAL_AREA, GEO_REGION_TYPE_POST_TOWN, GEO_REGION_TYPE_WARD) | Output only. The type of geographic region targeting. Values: GEO_REGION_TYPE_UNKNOWN - The geographic region type is unknown.; GEO_REGION_TYPE_OTHER - The geographic region type is other.; GEO_REGION_TYPE_COUNTRY - The geographic region is a country.; GEO_REGION_TYPE_REGION - The geographic region type is region.; GEO_REGION_TYPE_TERRITORY - The geographic region is a territory.; GEO_REGION_TYPE_PROVINCE - The geographic region is a province.; GEO_REGION_TYPE_STATE - The geographic region is a state.; GEO_REGION_TYPE_PREFECTURE - The geographic region is a prefecture.; GEO_REGION_TYPE_GOVERNORATE - The geographic region is a governorate.; GEO_REGION_TYPE_CANTON - The geographic region is a canton.; GEO_REGION_TYPE_UNION_TERRITORY - The geographic region is a union territory.; GEO_REGION_TYPE_AUTONOMOUS_COMMUNITY - The geographic region is an autonomous community.; GEO_REGION_TYPE_DMA_REGION - The geographic region is a designated market area (DMA) region.; GEO_REGION_TYPE_METRO - The geographic region type is metro.; GEO_REGION_TYPE_CONGRESSIONAL_DISTRICT - The geographic region is a congressional district.; GEO_REGION_TYPE_COUNTY - The geographic region is a county.; GEO_REGION_TYPE_MUNICIPALITY - The geographic region is a municipality.; GEO_REGION_TYPE_CITY - The geographic region is a city.; GEO_REGION_TYPE_POSTAL_CODE - The geographic region targeting type is postal code.; GEO_REGION_TYPE_DEPARTMENT - The geographic region targeting type is department.; GEO_REGION_TYPE_AIRPORT - The geographic region is an airport.; GEO_REGION_TYPE_TV_REGION - The geographic region is a TV region.; GEO_REGION_TYPE_OKRUG - The geographic region is an okrug.; GEO_REGION_TYPE_BOROUGH - The geographic region is a borough.; GEO_REGION_TYPE_CITY_REGION - The geographic region is a city region.; GEO_REGION_TYPE_ARRONDISSEMENT - The geographic region is an arrondissement.; GEO_REGION_TYPE_NEIGHBORHOOD - The geographic region is a neighborhood.; GEO_REGION_TYPE_UNIVERSITY - The geographic region is a university.; GEO_REGION_TYPE_DISTRICT - The geographic region is a district.; GEO_REGION_TYPE_NATIONAL_PARK - The geographic region is a national park.; GEO_REGION_TYPE_BARRIO - The geographic region is a barrio.; GEO_REGION_TYPE_SUB_WARD - The geographic region is a sub ward.; GEO_REGION_TYPE_MUNICIPALITY_DISTRICT - The geographic region is a municipality district.; GEO_REGION_TYPE_SUB_DISTRICT - The geographic region is a sub district.; GEO_REGION_TYPE_QUARTER - The geographic region is a quarter.; GEO_REGION_TYPE_DIVISION - The geographic region is a division.; GEO_REGION_TYPE_COMMUNE - The geographic region is a commune.; GEO_REGION_TYPE_COLLOQUIAL_AREA - The geographic region is a colloquial area.; GEO_REGION_TYPE_POST_TOWN - The geographic region is a post town.; GEO_REGION_TYPE_WARD - The geographic region is a ward. |

### `HouseholdIncomeTargetingOptionDetails`

Represents a targetable household income. This will be populated in the household_income_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_HOUSEHOLD_INCOME`.

| Field | Type | Description |
|---|---|---|
| householdIncome | string enum(HOUSEHOLD_INCOME_UNSPECIFIED, HOUSEHOLD_INCOME_UNKNOWN, HOUSEHOLD_INCOME_LOWER_50_PERCENT, HOUSEHOLD_INCOME_TOP_41_TO_50_PERCENT, HOUSEHOLD_INCOME_TOP_31_TO_40_PERCENT, HOUSEHOLD_INCOME_TOP_21_TO_30_PERCENT, HOUSEHOLD_INCOME_TOP_11_TO_20_PERCENT, HOUSEHOLD_INCOME_TOP_10_PERCENT) | Output only. The household income of an audience. Values: HOUSEHOLD_INCOME_UNSPECIFIED - Default value when household income is not specified in this version. This enum is a placeholder for default value and does not represent a real household income option.; HOUSEHOLD_INCOME_UNKNOWN - The household income of the audience is unknown.; HOUSEHOLD_INCOME_LOWER_50_PERCENT - The audience is in the lower 50% of U.S. household incomes.; HOUSEHOLD_INCOME_TOP_41_TO_50_PERCENT - The audience is in the top 41-50% of U.S. household incomes.; HOUSEHOLD_INCOME_TOP_31_TO_40_PERCENT - The audience is in the top 31-40% of U.S. household incomes.; HOUSEHOLD_INCOME_TOP_21_TO_30_PERCENT - The audience is in the top 21-30% of U.S. household incomes.; HOUSEHOLD_INCOME_TOP_11_TO_20_PERCENT - The audience is in the top 11-20% of U.S. household incomes.; HOUSEHOLD_INCOME_TOP_10_PERCENT - The audience is in the top 10% of U.S. household incomes. |

### `LanguageTargetingOptionDetails`

Represents a targetable language. This will be populated in the language_details field when targeting_type is `TARGETING_TYPE_LANGUAGE`.

| Field | Type | Description |
|---|---|---|
| displayName | string | Output only. The display name of the language (e.g., "French"). |

### `NativeContentPositionTargetingOptionDetails`

Represents a targetable native content position. This will be populated in the native_content_position_details field when targeting_type is `TARGETING_TYPE_NATIVE_CONTENT_POSITION`.

| Field | Type | Description |
|---|---|---|
| contentPosition | string enum(NATIVE_CONTENT_POSITION_UNSPECIFIED, NATIVE_CONTENT_POSITION_UNKNOWN, NATIVE_CONTENT_POSITION_IN_ARTICLE, NATIVE_CONTENT_POSITION_IN_FEED, NATIVE_CONTENT_POSITION_PERIPHERAL, NATIVE_CONTENT_POSITION_RECOMMENDATION) | Output only. The content position. Values: NATIVE_CONTENT_POSITION_UNSPECIFIED - Native content position is not specified in this version. This enum is a place holder for a default value and does not represent a real native content position.; NATIVE_CONTENT_POSITION_UNKNOWN - The native content position is unknown.; NATIVE_CONTENT_POSITION_IN_ARTICLE - Native content position is in-article, i.e., ads appear between the paragraphs of pages.; NATIVE_CONTENT_POSITION_IN_FEED - Native content position is in-feed, i.e., ads appear in a scrollable stream of content. A feed is typically editorial (e.g. a list of articles or news) or listings (e.g. a list of products or services).; NATIVE_CONTENT_POSITION_PERIPHERAL - Native content position is peripheral, i.e., ads appear outside of core content on pages, such as the right- or left-hand side of the page.; NATIVE_CONTENT_POSITION_RECOMMENDATION - Native content position is recommendation, i.e., ads appear in sections for recommended content. |

### `OmidTargetingOptionDetails`

Represents a targetable Open Measurement enabled inventory type. This will be populated in the omid_details field when targeting_type is `TARGETING_TYPE_OMID`.

| Field | Type | Description |
|---|---|---|
| omid | string enum(OMID_UNSPECIFIED, OMID_FOR_MOBILE_DISPLAY_ADS) | Output only. The type of Open Measurement enabled inventory. Values: OMID_UNSPECIFIED - Default value when omid targeting is not specified in this version.; OMID_FOR_MOBILE_DISPLAY_ADS - Open Measurement enabled mobile display inventory. |

### `OnScreenPositionTargetingOptionDetails`

Represents a targetable on screen position, which could be used by display and video ads. This will be populated in the on_screen_position_details field when targeting_type is `TARGETING_TYPE_ON_SCREEN_POSITION`.

| Field | Type | Description |
|---|---|---|
| onScreenPosition | string enum(ON_SCREEN_POSITION_UNSPECIFIED, ON_SCREEN_POSITION_UNKNOWN, ON_SCREEN_POSITION_ABOVE_THE_FOLD, ON_SCREEN_POSITION_BELOW_THE_FOLD) | Output only. The on screen position. Values: ON_SCREEN_POSITION_UNSPECIFIED - On screen position is not specified in this version. This enum is a place holder for a default value and does not represent a real on screen position.; ON_SCREEN_POSITION_UNKNOWN - The ad position is unknown on the screen.; ON_SCREEN_POSITION_ABOVE_THE_FOLD - The ad is located above the fold.; ON_SCREEN_POSITION_BELOW_THE_FOLD - The ad is located below the fold. |

### `OperatingSystemTargetingOptionDetails`

Represents a targetable operating system. This will be populated in the operating_system_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_OPERATING_SYSTEM`.

| Field | Type | Description |
|---|---|---|
| displayName | string | Output only. The display name of the operating system. |

### `ParentalStatusTargetingOptionDetails`

Represents a targetable parental status. This will be populated in the parental_status_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_PARENTAL_STATUS`.

| Field | Type | Description |
|---|---|---|
| parentalStatus | string enum(PARENTAL_STATUS_UNSPECIFIED, PARENTAL_STATUS_PARENT, PARENTAL_STATUS_NOT_A_PARENT, PARENTAL_STATUS_UNKNOWN) | Output only. The parental status of an audience. Values: PARENTAL_STATUS_UNSPECIFIED - Default value when parental status is not specified in this version. This enum is a place holder for default value and does not represent a real parental status option.; PARENTAL_STATUS_PARENT - The audience is a parent.; PARENTAL_STATUS_NOT_A_PARENT - The audience is not a parent.; PARENTAL_STATUS_UNKNOWN - The parental status of the audience is unknown. |

### `PoiTargetingOptionDetails`

Represents a targetable point of interest(POI). This will be populated in the poi_details field when targeting_type is `TARGETING_TYPE_POI`.

| Field | Type | Description |
|---|---|---|
| longitude | number (double) | Output only. Longitude of the POI rounding to 6th decimal place. |
| latitude | number (double) | Output only. Latitude of the POI rounding to 6th decimal place. |
| displayName | string | Output only. The display name of a POI(e.g. "Times Square", "Space Needle"), followed by its full address if available. |

### `SensitiveCategoryTargetingOptionDetails`

Represents a targetable sensitive category. This will be populated in the sensitive_category_details field of the TargetingOption when targeting_type is `TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION`.

| Field | Type | Description |
|---|---|---|
| sensitiveCategory | string enum(SENSITIVE_CATEGORY_UNSPECIFIED, SENSITIVE_CATEGORY_ADULT, SENSITIVE_CATEGORY_DEROGATORY, SENSITIVE_CATEGORY_DOWNLOADS_SHARING, SENSITIVE_CATEGORY_WEAPONS, SENSITIVE_CATEGORY_GAMBLING, SENSITIVE_CATEGORY_VIOLENCE, SENSITIVE_CATEGORY_SUGGESTIVE, SENSITIVE_CATEGORY_PROFANITY, SENSITIVE_CATEGORY_ALCOHOL, SENSITIVE_CATEGORY_DRUGS, SENSITIVE_CATEGORY_TOBACCO, SENSITIVE_CATEGORY_POLITICS, SENSITIVE_CATEGORY_RELIGION, SENSITIVE_CATEGORY_TRAGEDY, SENSITIVE_CATEGORY_TRANSPORTATION_ACCIDENTS, SENSITIVE_CATEGORY_SENSITIVE_SOCIAL_ISSUES, SENSITIVE_CATEGORY_SHOCKING, SENSITIVE_CATEGORY_EMBEDDED_VIDEO, SENSITIVE_CATEGORY_LIVE_STREAMING_VIDEO) | Output only. An enum for the Display & Video 360 Sensitive category content classifier. Values: SENSITIVE_CATEGORY_UNSPECIFIED - Serves as a placeholder and doesn't specify a Display & Video 360 sensitive category.; SENSITIVE_CATEGORY_ADULT - Deprecated: This sensitive category is no longer supported. Adult or pornographic text, image, or video content.; SENSITIVE_CATEGORY_DEROGATORY - Deprecated: This sensitive category is no longer supported. Content that may be construed as biased against individuals, groups, or organizations based on criteria such as race, religion, disability, sex, age, veteran status, sexual orientation, gender identity, or political affiliation. May also indicate discussion of such content, for instance, in an academic or journalistic context.; SENSITIVE_CATEGORY_DOWNLOADS_SHARING - Deprecated: This sensitive category is no longer supported. Content related to audio, video, or software downloads.; SENSITIVE_CATEGORY_WEAPONS - Deprecated: This sensitive category is no longer supported. Contains content related to personal weapons, including knives, guns, small firearms, and ammunition. Selecting either "weapons" or "sensitive social issues" will result in selecting both.; SENSITIVE_CATEGORY_GAMBLING - Deprecated: This sensitive category is no longer supported. Contains content related to betting or wagering in a real-world or online setting.; SENSITIVE_CATEGORY_VIOLENCE - Deprecated: This sensitive category is no longer supported. Content which may be considered graphically violent, gory, gruesome, or shocking, such as street fighting videos, accident photos, descriptions of torture, etc.; SENSITIVE_CATEGORY_SUGGESTIVE - Deprecated: This sensitive category is no longer supported. Adult content, as well as suggestive content that's not explicitly pornographic. This category includes all pages categorized as adult.; SENSITIVE_CATEGORY_PROFANITY - Deprecated: This sensitive category is no longer supported. Prominent use of words considered indecent, such as curse words and sexual slang. Pages with only very occasional usage, such as news sites that might include such words in a quotation, are not included.; SENSITIVE_CATEGORY_ALCOHOL - Deprecated: This sensitive category is no longer supported. Contains content related to alcoholic beverages, alcohol brands, recipes, etc.; SENSITIVE_CATEGORY_DRUGS - Deprecated: This sensitive category is no longer supported. Contains content related to the recreational use of legal or illegal drugs, as well as to drug paraphernalia or cultivation.; SENSITIVE_CATEGORY_TOBACCO - Deprecated: This sensitive category is no longer supported. Contains content related to tobacco and tobacco accessories, including lighters, humidors, ashtrays, etc.; SENSITIVE_CATEGORY_POLITICS - Deprecated: This sensitive category is no longer supported. Political news and media, including discussions of social, governmental, and public policy.; SENSITIVE_CATEGORY_RELIGION - Deprecated: This sensitive category is no longer supported. Content related to religious thought or beliefs.; SENSITIVE_CATEGORY_TRAGEDY - Deprecated: This sensitive category is no longer supported. Content related to death, disasters, accidents, war, etc.; SENSITIVE_CATEGORY_TRANSPORTATION_ACCIDENTS - Deprecated: This sensitive category is no longer supported. Content related to motor vehicle, aviation or other transportation accidents.; SENSITIVE_CATEGORY_SENSITIVE_SOCIAL_ISSUES - Deprecated: This sensitive category is no longer supported. Issues that evoke strong, opposing views and spark debate. These include issues that are controversial in most countries and markets (such as abortion), as well as those that are controversial in specific countries and markets (such as immigration reform in the United States).; SENSITIVE_CATEGORY_SHOCKING - Deprecated: This sensitive category is no longer supported. Content which may be considered shocking or disturbing, such as violent news stories, stunts, or toilet humor.; SENSITIVE_CATEGORY_EMBEDDED_VIDEO - YouTube videos embedded on websites outside of YouTube.com.; SENSITIVE_CATEGORY_LIVE_STREAMING_VIDEO - Video of live events streamed over the internet. |

### `SubExchangeTargetingOptionDetails`

Represents a targetable sub-exchange. This will be populated in the sub_exchange_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_SUB_EXCHANGE`.

| Field | Type | Description |
|---|---|---|
| displayName | string | Output only. The display name of the sub-exchange. |

### `UserRewardedContentTargetingOptionDetails`

Represents a targetable user rewarded content status for video ads only. This will be populated in the user_rewarded_content_details field when targeting_type is `TARGETING_TYPE_USER_REWARDED_CONTENT`.

| Field | Type | Description |
|---|---|---|
| userRewardedContent | string enum(USER_REWARDED_CONTENT_UNSPECIFIED, USER_REWARDED_CONTENT_USER_REWARDED, USER_REWARDED_CONTENT_NOT_USER_REWARDED) | Output only. User rewarded content status for video ads. Values: USER_REWARDED_CONTENT_UNSPECIFIED - User rewarded content is not specified or is unknown in this version.; USER_REWARDED_CONTENT_USER_REWARDED - Represents ads where the user will see a reward after viewing.; USER_REWARDED_CONTENT_NOT_USER_REWARDED - Represents all other ads besides user-rewarded. |

### `VideoPlayerSizeTargetingOptionDetails`

Represents a targetable video player size. This will be populated in the video_player_size_details field when targeting_type is `TARGETING_TYPE_VIDEO_PLAYER_SIZE`.

| Field | Type | Description |
|---|---|---|
| videoPlayerSize | string enum(VIDEO_PLAYER_SIZE_UNSPECIFIED, VIDEO_PLAYER_SIZE_SMALL, VIDEO_PLAYER_SIZE_LARGE, VIDEO_PLAYER_SIZE_HD, VIDEO_PLAYER_SIZE_UNKNOWN) | Output only. The video player size. Values: VIDEO_PLAYER_SIZE_UNSPECIFIED - Video player size is not specified in this version. This enum is a place holder for a default value and does not represent a real video player size.; VIDEO_PLAYER_SIZE_SMALL - The dimensions of the video player are less than 400×300 (desktop), or up to 20% of screen covered (mobile).; VIDEO_PLAYER_SIZE_LARGE - The dimensions of the video player are between 400x300 and 1280x720 pixels (desktop), or 20% to 90% of the screen covered (mobile).; VIDEO_PLAYER_SIZE_HD - The dimensions of the video player are 1280×720 or greater (desktop), or over 90% of the screen covered (mobile).; VIDEO_PLAYER_SIZE_UNKNOWN - The dimensions of the video player are unknown. |

### `ViewabilityTargetingOptionDetails`

Represents a targetable viewability. This will be populated in the viewability_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_VIEWABILITY`.

| Field | Type | Description |
|---|---|---|
| viewability | string enum(VIEWABILITY_UNSPECIFIED, VIEWABILITY_10_PERCENT_OR_MORE, VIEWABILITY_20_PERCENT_OR_MORE, VIEWABILITY_30_PERCENT_OR_MORE, VIEWABILITY_40_PERCENT_OR_MORE, VIEWABILITY_50_PERCENT_OR_MORE, VIEWABILITY_60_PERCENT_OR_MORE, VIEWABILITY_70_PERCENT_OR_MORE, VIEWABILITY_80_PERCENT_OR_MORE, VIEWABILITY_90_PERCENT_OR_MORE) | Output only. The predicted viewability percentage. Values: VIEWABILITY_UNSPECIFIED - Default value when viewability is not specified in this version. This enum is a placeholder for default value and does not represent a real viewability option.; VIEWABILITY_10_PERCENT_OR_MORE - Bid only on impressions that are at least 10% likely to be viewable.; VIEWABILITY_20_PERCENT_OR_MORE - Bid only on impressions that are at least 20% likely to be viewable.; VIEWABILITY_30_PERCENT_OR_MORE - Bid only on impressions that are at least 30% likely to be viewable.; VIEWABILITY_40_PERCENT_OR_MORE - Bid only on impressions that are at least 40% likely to be viewable.; VIEWABILITY_50_PERCENT_OR_MORE - Bid only on impressions that are at least 50% likely to be viewable.; VIEWABILITY_60_PERCENT_OR_MORE - Bid only on impressions that are at least 60% likely to be viewable.; VIEWABILITY_70_PERCENT_OR_MORE - Bid only on impressions that are at least 70% likely to be viewable.; VIEWABILITY_80_PERCENT_OR_MORE - Bid only on impressions that are at least 80% likely to be viewable.; VIEWABILITY_90_PERCENT_OR_MORE - Bid only on impressions that are at least 90% likely to be viewable. |

