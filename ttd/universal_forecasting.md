# Universal Forecasting

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 1

---

## POST /v3/universalforecasting/generate

**DEPRECATED.** This endpoint is deprecated and will stop accepting requests on February 28, 2027. Use the [`forecastCreate` mutation](/v3/portal/api/gql-doc/forecast-create) in GraphQL instead. Note: `forecastCreate` creates a persisted forecast, while this endpoint returns ephemeral forecast metrics in a single call, so migration is not one-to-one.

Generate a forecast based on the data available at the time the forecast is requested. Because available data changes as time passes, forecasts generated with the same parameters at different times return unique results optimized for each point in time.

Operation ID: `post-universalforecasting-generate`

**Request body** (`application/json`, required): `UniversalForecasting_UniversalForecastingRequest_post`

**Response 200** (`application/json`): `UniversalForecasting_UniversalForecastingResult`

---

## Schemas

### `UniversalForecasting_UniversalForecastingRequest_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser. |
| AudienceId | string |  | The ID for the audience to be used in the forecast.   **IMPORTANT**:   - If the `UseMultipleCrossDeviceVendors` property is set to `true` in the request, do not specify the audience ID.   - If the `UniversalForecastingBidLists` and the `ExistingBidLists` arrays are not included in the request or are empty, the `AudienceId` string is required and must not be empty. _(nullable)_ |
| AverageBidCPMInAdvertiserCurrency | number (double) |  | The average bid in advertiser's currency to be used for the forecast. |
| Demographic | `UniversalForecasting_NielsenDemographicSettings` |  | Demographic to be used to calculate reach for the forecast. _(nullable)_ |
| ExistingBidLists | array<integer (int64)> |  | Existing bid lists to be applied to the forecast.   **IMPORTANT**:   - The specified bid lists must be available to the advertiser associated with the request.   - If the `UniversalForecastingBidLists` array and the `AudienceId` string are not included in the request or are empty, the `ExistingBidLists` array is required and must not be empty. _(nullable)_ |
| ForecastingAudiences | array<`UniversalForecasting_ForecastingAudience_post`> |  | New audiences to be used in the forecast. _(nullable)_ |
| GenerateBudgetPoints | boolean |  | Set to `true` to enable the generation of a list of budget points to show impressions, frequency, and reach at different spend levels. |
| IsTargetKnownUsersEnabled | boolean |  | Set to `true` to target only known users. _(nullable)_ |
| PercentAboveBase | integer |  | If we have private contracts, we can bid to meet the floor price or some percent above the floor price. |
| TimeWindow | integer (int32) |  | The number of days (from 1 to 180) for the forecast. |
| UniversalForecastingBidLists | array<`DimensionalBidding_NewBidList_post`> |  | New bid lists to be applied to the forecast.    **IMPORTANT**: If the `ExistingBidLists` array and the `AudienceId` string are not included in the request or are empty, the `UniversalForecastingBidLists` array is required and must not be empty. _(nullable)_ |
| UseCrossDevice | boolean |  | Set to `true` to enable Cross Device. |
| UseCtvCrossDevice | boolean |  | Set to `true` to enable CTV Cross Device.   **TIP**: If you want to see household insight metric types, such as `ReachHousehold` and `FrequencyHousehold`, be sure to set this property to `true`. |

### `UniversalForecasting_UniversalForecastingResult`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The platform ID of the advertiser. _(nullable)_ |
| Audience | `Audience_Audience` |  | Chosen Audience Id _(nullable)_ |
| AverageBidCPMInAdvertiserCurrency | number (double) |  | Average bid in Advertiser Currency that we want to use for forecasting |
| BudgetMetrics | array<array<`UniversalForecasting_UniversalForecastingInsightMetricResult`>> |  | Metrics results for various spend levels up to the maximum possible spend. Each point includes reach, frequency, impressions, and spend _(nullable)_ |
| LastCalculatedAt | string (date-time) |  | Date time of last Forecasting calculation |
| MetricResults | array<`UniversalForecasting_UniversalForecastingInsightMetricResult`> |  | Metrics results for forecasting insights, reach, frequency and spend. _(nullable)_ |
| PrivateContractGroupMetricResults | array<`UniversalForecasting_UniversalForecastingContractGroupMetricResult`> |  | Metrics results for forecasting private contract groups and their sub contracts. Displays insights, reach, frequency and spend. _(nullable)_ |
| PrivateContractMetricGeoResults | array<`UniversalForecasting_UniversalForecastingContractGeoTypeMetricResult`> |  | Metrics results for forecasting geo breakout insights, reach, frequency and spend. _(nullable)_ |
| PrivateContractMetricResults | array<`UniversalForecasting_UniversalForecastingContractMetricResult`> |  | Metrics results for forecasting private contracts insights, reach, frequency and spend. _(nullable)_ |
| TargetKnownUsers | boolean |  | Should we target only known users _(nullable)_ |
| TimeWindow | integer (int32) |  | Forecasting time window |

### `DimensionalBidding_NewBidList_post`

This class extends the bid list class with the information required to associate it with an ad group.

| Field | Type | Required | Description |
|---|---|---|---|
| BidLines | array<`DimensionalBidding_BidLine_post`> | yes | The list of bid lines used with the resolution type to calculate the bid list adjustment. All bid lines in the bid list must have the same dimensions except for the bid adjustment.   For example, if Bid Line 1 sets the `DomainFragment` property to `test.com`, Bid Line 2 must also set this property and can optionally set the bid adjustment. Do not set any other optional dimensions.   For details, see [Bid Lists](/v3/portal/api/doc/BidList). |
| BidListAdjustmentType | `DimensionalBidding_BidListAdjustmentType` | yes | The method for determining how the bid adjustment is applied when an impression doesn't match a bid line. This type is set when a bid list is created and cannot be changed afterward.   If an impression matches multiple bid lists with different bid list adjustment types, the bid adjustments are multiplied together to get the final bid. For example, if an impression gets a bid adjustment of 0.75 from an optimized list and a bid adjustment of 0 from a block list, the final bid adjustment is 0.75*0=0. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |
| Name | string | yes | The name of the bid list. Bid list names typically describe the dimension and adjustment type, such as "Site/App Target List". The maximum character length is 512. |
| BidListId | string |  | The platform ID of the bid list. It is ignored during creation. |
| IsDefaultForDimension | boolean |  | If set to `true`, the bid list is the default for the specified dimension combination.   The default value is `false`. |
| IsEnabled | boolean |  | If set to `true`, the bid list adjustments are used in bidding.   The default value is `false`.   **IMPORTANT**: To avoid disabling the bid list and potential validation issues, be sure to set this property to `true` in PUT ad group calls. |
| ResolutionType | `DimensionalBidding_MultipleMatchResolutionType` |  | The method for determining how the bid adjustment is applied when an impression matches multiple bid lines in a bid list. We recommend using `ApplyMultiplyAdjustment` for all bid lists. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |

### `UniversalForecasting_ForecastingAudience_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser that owns this Audience. |
| AudienceName | string | yes | The name of the audience. The maximum character length is 64. _(maxLength 64)_ |
| IncludedDataGroups | array<`DataGroup_DataGroup_post`> | yes | The data groups that include a user in this audience. This is an intersection; a user must be in ALL of these data groups to be targeted by the audience. For example, if you add 'Men' and 'Sports Fans' to the same audience, you will only target users who are men AND sports fans. |
| Description | string |  | An optional description of the audience. _(nullable)_ |
| ExcludedDataGroups | array<`DataGroup_DataGroup_post`> |  | The data groups that exclude a user from this audience. If a user appears in ANY of these data groups, they are not targeted by the audience. For example, if you are targeting 'Men' and 'Sports Fans' to sell tickets, you may want to exclude 'Bought Game Ticket' and/or 'Bought Season Tickets' since they are unlikely to buy again. |

### `UniversalForecasting_NielsenDemographicSettings`

| Field | Type | Required | Description |
|---|---|---|---|
| EndAge | `Nielsen_TargetingEndAge` |  | The maximum age to be targeted. For accepted string values, see the enumeration below. Here's what you need to know:   - `StartAge` is required when `EndAge` is specified.    - `StartAge` must be less than `EndAge` or the API returns a 400 error.   - The only valid start/end ranges are the following:       18-34, 18-49, 21-34, 25-34, 25-44, 25-49, 25-54, 35-1000. For 1000, select `SixtyFourPlus`. _(nullable)_ |
| Gender | `Nielsen_TargetingGender` |  | The gender to be targeted. For accepted string values, see the enumeration below. _(nullable)_ |
| StartAge | `Nielsen_TargetingStartAge` |  | The minimum age to be targeted. For accepted string values, see the enumeration below. Here's what you need to know:   - `StartAge` is required when `EndAge` is specified.    - `StartAge` must be less than `EndAge` or the API returns a 400 error.   - The only valid start/end ranges are the following:       18-34, 18-49, 21-34, 25-34, 25-44, 25-49, 25-54, 35-1000. For 1000, select `SixtyFourPlus`. _(nullable)_ |

### `Audience_Audience`

| Field | Type | Required | Description |
|---|---|---|---|
| ActiveIDsCountExpanded | boolean |  | Whether cross-device has been used to expand the Active IDs count. Segments with UID2s show expanded reach through cross-device. If needed, see the "Unique Device/Browser Counting Methodology" section in Audience.   This is a system-generated, read-only value. _(nullable)_ |
| AdvertiserId | string |  | The platform ID of the advertiser that owns this Audience. |
| AudienceId | string |  | The ID of the Audience. Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| AudienceName | string |  | The name of the Audience. _(maxLength 64)_ |
| CtvCount | integer (int64) |  | The number of unique active CTV user IDs, which along with the Web and In-App IDs add up to the total number of active user IDs specified in `UniqueUserCount`. If needed, see the "Unique Device/Browser Counting Methodology" section in [Audience](/v3/portal/api/doc/Audience).     This is a system-generated, read-only value. _(nullable)_ |
| Description | string |  | An optional description of the Audience. _(nullable)_ |
| ExcludedDataGroupIds | array<string> |  | The Data Groups that exclude a user from this Audience. If a user appears in ANY of these Data Groups, they are not targeted by the Audience. For example, if you are targeting 'Men' and 'Sports Fans' to sell tickets, you may want to exclude 'Bought Game Ticket' and/or 'Bought Season Tickets' since they are unlikely to buy again. |
| GeoForCounts | string |  | The geo (country or continent) that the counts for this audience should be filtered to. _(nullable)_ |
| HouseholdCount | integer (int64) |  | The number of households within this audience based on the platform's active ID counting methodology. If needed, see the "Unique Device/Browser Counting Methodology" section in [Audience](/v3/portal/api/doc/Audience).     This is a system-generated, read-only value. _(nullable)_ |
| InAppCount | integer (int64) |  | The number of unique active In-App user IDs, which along with the Web and CTV IDs add up to the total number of active user IDs specified in `UniqueUserCount`. If needed, see the "Unique Device/Browser Counting Methodology" section in [Audience](/v3/portal/api/doc/Audience).     This is a system-generated, read-only value. _(nullable)_ |
| IncludedDataGroupIds | array<string> |  | The Data Groups that include a user in this Audience. This is an intersection; a user must be in ALL of these Data Groups to be targeted by the Audience. For example, if you add 'Men' and 'Sports Fans' to the same Audience, you will only target users who are men AND sports fans. |
| IsAutoGenerated | boolean |  | Indicates if this audience was automatically generated by The Trade Desk platform.   This is a read-only property returned by the API. |
| LastUpdatedAtUTC | string (date-time) |  | Indicates the time when this audience was last updated (UTC).   This is a read-only property returned by the API. |
| PersonsCount | integer (int64) |  | The number of persons within this audience based on the platform's active ID counting methodology. If needed, see the "Unique Device/Browser Counting Methodology" section in [Audience](/v3/portal/api/doc/Audience).     This is a system-generated, read-only value. _(nullable)_ |
| SuccessfullyRetrievedCounts | boolean |  | True if the counts have been returned successfully, false otherwise. If false, all counts will be null. This property is read-only. _(nullable)_ |
| UniqueUserCount | integer (int64) |  | The number of devices and browsers within this audience based on the platform's active ID counting methodology. If needed, see the "Unique Device/Browser Counting Methodology" section in [Audience](/v3/portal/api/doc/Audience).     This is a system-generated, read-only value. _(nullable)_ |
| WebCount | integer (int64) |  | The number of unique active Web user IDs, which along with the In-App and CTV IDs add up to the total number of active user IDs specified in `UniqueUserCount`. If needed, see the "Unique Device/Browser Counting Methodology" section in [Audience](/v3/portal/api/doc/Audience).     This is a system-generated, read-only value. _(nullable)_ |

### `UniversalForecasting_UniversalForecastingContractGeoTypeMetricResult`

| Field | Type | Required | Description |
|---|---|---|---|
| GeoLocationType | `TheTradeDesk.AdPlatform.Shared_GeoSegmentFilter` |  |  |
| MetricResults | array<`UniversalForecasting_UniversalForecastingContractGeoMetricResult`> |  | Metrics results for forecasting insights, reach, frequency and spend. _(nullable)_ |

### `UniversalForecasting_UniversalForecastingContractGroupMetricResult`

| Field | Type | Required | Description |
|---|---|---|---|
| GroupMetricResults | array<`UniversalForecasting_UniversalForecastingInsightMetricResult`> |  | Metrics results for forecasting insights, reach, frequency and spend. _(nullable)_ |
| PrivateContractGroupId | string |  | Id of the private contract. _(nullable)_ |
| SubPrivateContractMetricResults | array<`UniversalForecasting_UniversalForecastingContractMetricResult`> |  | Metrics results for contract group sub contracts forecasting insights, reach, frequency and spend. _(nullable)_ |

### `UniversalForecasting_UniversalForecastingContractMetricResult`

| Field | Type | Required | Description |
|---|---|---|---|
| FloorPrice | number (float) |  | Floor price for contract. _(nullable)_ |
| IsPremium | boolean |  | Whether or not this is a premium deal. _(nullable)_ |
| LogoUrl | string |  | The URL of the logo for this contract. _(nullable)_ |
| MetricResults | array<`UniversalForecasting_UniversalForecastingInsightMetricResult`> |  | Metrics results for forecasting insights, reach, frequency and spend. _(nullable)_ |
| PrivateContractId | string |  | Id of the private contract. _(nullable)_ |
| PrivateContractName | string |  | Id of the private contract. _(nullable)_ |

### `UniversalForecasting_UniversalForecastingInsightMetricResult`

| Field | Type | Required | Description |
|---|---|---|---|
| InsightMetricType | `UniversalForecasting_UniversalForecastInsightMetricType` |  | Insight metric type. |
| IsCurrency | boolean |  | If the metric is currency. |
| RangeEnd | number (double) |  | Range end value. |
| RangeStart | number (double) |  | Range start value. |

### `DimensionalBidding_BidLine_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdFormatId | string |  | The ID of the ad format used for the bid line adjustment. For details, see [POST /v3/adformat/query](/v3/portal/api/ref/post-adformat-query). |
| AdsTxtSellerType | `AdGroup_AdsTxtSellerType` |  | The `ads.txt` seller type that indicates the relationship between the SSP and publisher for a given impression, as defined by the IAB. The supported values include:<ul><li>`0` (Unknown)</li><li>`1` (Direct)</li><li>`2` (Reseller)</li><li>`3` (Unauthorized)</li></ul> |
| AdvertiserTargetingDataId | integer (int64) |  | The advertiser targeting data ID from the targeting data group. |
| AtmosphericCondition | `DimensionalBidding_AtmosphericCondition` |  | The current or forecast severity level of pollen concentration in the atmosphere that you want to target. Pollen risk targeting helps advertisers in the healthcare industry and those selling indoor air treatment products reach their target audiences more effectively. You can use this information to direct your media spend to areas with the highest pollen concentration (and subsequently have more people suffering from allergies and also looking for air purifiers or allergy medication).   Here's what you need to know about this property:   - Values that end in `Forecast` indicate the areas *forecast* to reach the specified severity level within the next 48 hours. For example, the value of `MediumForecast` enables you to target areas that have been forecast to have a medium severity of pollen concentration in the next 48 hours.   - The rest of the values indicate the *current* level of pollen concentration. For example, the value of `High` enables you to target areas that currently have a high level of pollen concentration. |
| AudienceReachPercentageTier | `DimensionalBidding_AudienceReachPercentageTier` |  | Audience Reach Percentage Tier Dimension |
| BidAdjustment | number (double) |  | The adjustment to be applied when an impression matches the bid line. Recommended for optimized lists. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |
| Browser | `DimensionalBidding_Browser` |  | The type and version of the user's browser to target. |
| CarrierId | integer (int32) |  | The ID of the mobile carrier to target.   For a complete list of mobile carriers, use the [POST /v3/mobilecarrier/query](/v3/portal/api/ref/post-mobilecarrier-query) endpoint. |
| ContentDuration | `DimensionalBidding_ContentDuration` |  | The duration (in minutes) of the content to target. |
| ContentGenre | string |  | The content genre to target. For a list of available genre IDs, use the [GET /content/genre/query](/v3/portal/api/ref/get-content-genre-query) endpoint. |
| ContentLanguage | string |  | The language code of the content (for example, "en") to target. |
| ContentLivestream | `DimensionalBidding_ContentLivestream` |  | The live stream type of the content to target: live or not. |
| ContentProductionQuality | `DimensionalBidding_ContentProductionQuality` |  | The production quality of the content to target. |
| ContentRating | string |  | The rating of the content to target. For a list of available rating IDs, use the [GET /content/rating/query](/v3/portal/api/ref/get-content-rating-query) endpoint. |
| ContextualAppCategoryId | string |  | The ID of the Contextual Application category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `ContextualApp`. |
| ContextualSupplyVendorCategoryId | string |  | A supply vendor category identifier to target. For details about category targeting in China, see *Inventory Feature Availability* in the [Knowledge Portal](https://desk.thetradedesk.com/knowledge-portal/en/china-inventory-partners-feature-availability.html#category-and-keyword-targeting).     To use this feature, you must sign a China MSA. For details, contact your Account Manager.    To get a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set the `CategorySourceType` value to `ContextualSupplyVendorCategory`.     In the platform UI, these settings are visible in the [Category (China) rail tile](https://desk.thetradedesk.com/knowledge-portal/en/china-category-targeting.html#category--china--rail-tile). |
| ContextualSupplyVendorGenreId | string |  | A supply vendor genre identifier to target. For details about genre targeting in China, see *Inventory Feature Availability* in the [Knowledge Portal](https://desk.thetradedesk.com/knowledge-portal/en/china-inventory-partners-feature-availability.html#category-and-keyword-targeting).     To use this feature, you must sign a China MSA. For details, contact your Account Manager.    To get a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set the `CategorySourceType` value to `ContextualSupplyVendorGenre`.     In the platform UI, these settings are visible in the [Video Genre (China)](https://desk.thetradedesk.com/knowledge-portal/en/china-category-targeting.html#video-genre--china--targeting--blocking--and-optimization) rail tile. |
| DeviceModelId | integer (int32) |  | The ID of the device model to target.   For a complete list of device models, use the [POST /v3/devicemakemodel/query](/v3/portal/api/ref/post-devicemakemodel-query) endpoint. |
| DeviceType | `DimensionalBidding_DeviceType` |  | The device type used to apply bid adjustments. |
| DigitalOutOfHomeVenueTypeId | string |  | The ID of the Digital Out-Of-Home (DOOH) venue type to target. For enum values, see [Digital Out-of-Home Screen Venue Types](https://github.com/openooh/venue-taxonomy/blob/main/specification-1.0.md). |
| DisplayViewabilityScoreRange | `TheTradeDesk.AdPlatform_Range_number_double__` |  | The average display viewability score range to target when bidding on impressions (0 to 1). |
| DomainFragment | string |  | The domain or app ID to match for the bid adjustment. Domains are matched in whole sections from right to left. Examples:      - "com" matches "site.com" and "mysite.com" but *not* "site.net" and *not* "com.net" and *not* "site.com.net"      - "site" matches "some.site" and *not* "site.net" and *not* "site.com"      - "site.com" matches "site.com" and "my.site.com" but *not* "mysite.com"      - "my.site.com" matches "my.site.com" and "is.my.site.com" but *not* "dummy.site.com" |
| DoubleVerifyBotAvoidanceCategoryId | string |  | The ID of the DoubleVerify Bot Avoidance category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `DoubleVerifyBotAvoidance`. |
| DoubleVerifyVideoViewabilityCategoryId | string |  | The ID of the DoubleVerify Video Viewability category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `DoubleVerifyVideoViewability`. |
| DoubleVerifyViewabilityCategoryId | string |  | The ID of the DoubleVerify Viewability category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `DoubleVerifyViewability`. |
| ExtendedZipCodeGroupSegmentThirdPartyDataId | integer (int64) |  | The extended zip code group segment third party data id to target. |
| FrequencyRange | `DimensionalBidding_FrequencyRange_post` |  | Target a range of values that represent how many times a user has viewed an ad based on a specific frequency counter. |
| GeofenceThirdPartyDataAndBrand | `DimensionalBidding_ThirdPartyData` |  | The geofence third party data to target |
| GeoSegmentId | string |  | The ID of the geo segments to target and the adjustments to apply when bidding on impressions in those geographic areas.   To retrieve a list of available geo segments at the partner or advertiser level, use the [POST /geosegment/query/advertiser](/v3/portal/api/ref/post-geosegment-query-advertiser) or [POST /geosegment/query/partner](/v3/portal/api/ref/post-geosegment-query-partner) endpoints.   To target a geo segment in China as a custom list or market region, you must sign the China Master Service Agreement (MSA). For details, contact your account manager. |
| HourOfWeek | integer |  | The 0-based hour of the week to target (from 0 to 167). For example, to bid on impressions from 12 PM to 1 PM on Monday, set an adjustment for hour 36 since 0-23 is Sunday, 24-47 is Monday, and 36 is noon on Monday.   These hours are in the user's local time. A bid for noon on Monday in a US-wide campaign would cover noon in Eastern, Central, Mountain, and Pacific time zones.   You can supply -1 to determine bidding behavior when the hour of the week is unknown. |
| ImpressionPlacementValue | string |  | The adjustment to apply based on Impression Placement Id Value.   The ImpressionPlacementValue should be a string not exceeding 128 characters.   Note: While the API does not enforce this, it is suggested that you use this dimension in conjunction with Domain, as the same placement ID might be received for different sites in bid requests. _(maxLength 128)_ |
| IntegralPageQualityCategoryId | string |  | The ID of the Integral Page Quality category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralPageQuality`. |
| IntegralVideoPageQualityCategoryId | string |  | The ID of the Integral Video Page Quality category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralVideoPageQuality`. |
| IntegralVideoViewabilityCategoryId | string |  | The ID of the Integral Video Viewability category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralVideoViewability`. |
| IntegralViewabilityCategoryId | string |  | The ID of the Integral Viewability category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralViewability`. |
| InternetConnectionType | `DimensionalBidding_InternetConnectionType` |  | The adjustments to apply based on the type of the user's internet connection type. |
| LanguageId | integer (int32) |  | The default language provided by the browser's user agent.   The ID specified in this property must match an ID for a default language. To query lists of valid default language IDs and facets, see [Language](/v3/portal/api/area/Language). |
| LikelyRefreshRate | `DimensionalBidding_LikelyRefreshRate` |  | Likely Refresh Rate (in seconds) |
| MarketType | `DimensionalBidding_MarketType` |  | `MarketType` is a dimension that allows you to apply bid adjustments to private contract inventory or to open market inventory. This dimension provides additional flexibility when private contracts are applied to an ad group and the ad group's `ContractTargeting.AllowOpenMarketBiddingWhenTargetingContracts` property is set to `true`. It is best used within a multi-dimensional bidding strategy alongside other dimensions. For example, you may want to block unknown `AdsTxtSellerType` inventory in the open market, but not in the private market.      No-Bid Conditions: If `MarketType` is set to `PMP` on a `TargetList` and there are no private contracts applied to the ad group, the ad group will not bid. If `MarketType` is set to `Open` on a `TargetList`, there are private contracts applied to the ad group, and the ad group's `ContractTargeting.AllowOpenMarketBiddingWhenTargetingContracts` property is set to `false`, the ad group will not bid.     This dimension does not appear as a tile in our user interface. |
| NativePlacementType | `DimensionalBidding_NativePlacementType` |  | The adjustments to apply based on the native placement type. |
| Os | string |  | The user's operating system to target. _(maxLength 20)_ |
| Peer39LanguageId | integer (int32) |  | The ID of the Peer39 language to target. For a list of language IDs, use the [POST /language/query](/v3/portal/api/ref/post-language-query) endpoint and set `LanguageSourceType` to `Peer39SiteLanguage`. |
| Peer39PageQualityCategoryId | string |  | The ID of the Peer39 Page Quality category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `Peer39PageQuality`. |
| Peer39ViewabilityCategoryId | string |  | The ID of the Peer39 Viewability category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `Peer39Viewability`. |
| PrivateContractId | string |  | The private contract to target.   For a complete list of available private contracts, see the following endpoints:   * [POST /v3/contract/buyers/query/advertisers](/v3/portal/api/ref/post-contract-buyers-query-advertisers)   * [POST /v3/contract/buyers/query/partners](/v3/portal/api/ref/post-contract-buyers-query-partners) _(maxLength 32)_ |
| PublisherId | string |  | The publisher ID to target. See the Supply Vendor Publisher Id property in My Reports to get possible values. |
| RecencyWindowInMinutes | `TheTradeDesk.AdPlatform_Range_integer_int32__` |  | Recency refers to how long a user has been in a data segment. Use it to target or adjust your bid based on audience age. For example, bid double for users added within the last hour by setting the range from 0 to 59 with a bid adjustment of 2. Both values are inclusive. |
| RenderingContext | `DimensionalBidding_RenderingContext` |  | The rendering context to target. |
| Rewarded | `DimensionalBidding_Rewarded` |  | Whether the impression is rewarded or not |
| RTBAsiaPageQualityCategoryId | string |  | The ID of the RTBAsia Page Quality category to target.   Here's what you need to know about this property:    - To use this feature, you must sign a China MSA. For details, contact your Account Manager.    - For a list of valid category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `RTBAsiaPageQuality`.    - In the platform UI, you can view these settings in the Display Anti-Fraud Protection (RTBAsia) tile. |
| RTBAsiaVideoPageQualityCategoryId | string |  | The ID of the RTBAsia Video Page Quality category to target.    Here's what you need to know about this property:    - To use this feature, you must sign a China MSA. For details, contact your Account Manager.    - For a list of valid category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `RTBAsiaVideoPageQuality`.    - In the platform UI, you can view these settings in the Video Anti-Fraud Protection (RTBAsia) tile. |
| SellerDomain | string |  | The domain associated with the seller you wish to target. This domain cannot be a `AliasToSellerDomain` for another seller.        You can query the list of sellers here: [POST /seller/query](/v3/portal/api/ref/post-seller-query).        If a seller domain becomes an alias to another seller domain after you already targeted it, this property will return the original alias from the seller domain.   You can then use the query endpoint to find the final aliased seller domain. |
| SupplyVendorId | integer (int64) |  | **IMPORTANT**: This field is intended for managing only supply vendor or reseller relationships, not direct publisher connections. To manage direct publisher inventory, use publisher lists or site lists instead.   The numeric ID for the supply vendor from which the impression would be purchased. For fixed-price contracts, this must correspond with the delivery profile ID.   For a complete list of values, use the following endpoints:    * [POST /v3/supplyvendor/query/advertiser](/v3/portal/api/ref/post-supplyvendor-query-advertiser)    * [POST /v3/supplyvendor/query/partner](/v3/portal/api/ref/post-supplyvendor-query-partner) |
| TemperatureRangeInCelsius | `TheTradeDesk.AdPlatform_Range_number_double__` |  | Target temperature range (in degrees Celsius) to target: minimum (inclusive) to maximum (exclusive). |
| TencentPageQualityCategoryId | string |  | The ID of the Tencent Page Quality category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint. |
| ThirdPartyData | `DimensionalBidding_ThirdPartyData` |  | The third-party data brand ID associated with the third-party data ID in the targeting data group. For details, see [Audiences](/v3/portal/api/doc/Audience) |
| TTDNativeContextType | `DimensionalBidding_TTDNativeContextType` |  | The adjustments to apply based on The Trade Desk's native context type. |
| TVQualityIndexRange | `TheTradeDesk.AdPlatform_Range_number_double__` |  | The `TVQualityIndexRange` dimension defines a range between a min and a max value for the TV Quality Index (TVQI). The TVQI measures the quality of inventory a campaign runs, on a scale of 1 - 100. It is an aggregate of the weighted scores for eight criteria (content, addressability, playback type, device type, content duration, production quality, content signal transparency, and market type) across three pillars of quality (content, ad experience, and signals).    For details on each score component, see the [Knowledge Portal](https://desk.thetradedesk.com/knowledge-portal/en/optimization-tv-quality-index.html). |
| UniversalCategoryTaxonomyId | string |  | The ID of the universal category taxonomy to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `UniversalCategoryTaxonomy`. |
| VideoCompletionRateScoreRange | `TheTradeDesk.AdPlatform_Range_number_double__` |  | The video completion rate score range to target when bidding on impressions (0 to 1). |
| VideoMutedState | `AdGroup_VideoMutedState` |  | The video muted state setting to target. |
| VideoPlaybackType | `AdGroup_VideoPlaybackType` |  | The video playback type setting to target. |
| VideoPlayerSize | `AdGroup_VideoPlayerSize` |  | The size of the video player to target. |
| VideoQuality | `AdGroup_VideoQuality` |  | The video quality to target. |
| VideoSkippability | `AdGroup_VideoSkippability` |  | The video skippability setting to target. |
| VideoTruthScoreRange | `TheTradeDesk.AdPlatform_Range_number_double__` |  | Percentage difference in size between the advertised screen size and the actual rendering size of the video player (0 to 1). |
| VideoViewabilityScoreRange | `TheTradeDesk.AdPlatform_Range_number_double__` |  | The average video viewability score range to target when bidding on impressions (0 to 1). |
| VolumeControlPriority | `DimensionalBidding_VolumeControlPriority` |  | The volume control priority to apply to this adjustment. |
| WeatherConditionId | integer (int32) |  | The ID of the weather condition to target. To look up available weather conditions and their identifiers, use the [GET /weathercondition/query/available](/v3/portal/api/ref/get-weathercondition-query-available) endpoint.   To view related information in the Knowledge Portal, see <a href="https://desk.thetradedesk.com/knowledge-portal/en/targeting-weather-condition.html#weather-condition-rail-tile" target="_blank">Weather Condition Targeting</a>. |
| AblidaContextualCategoryId | string |  | The ID of the Ablida Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `AblidaContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| AdelaideContextualCategoryId | string |  | The ID of the Adelaide Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `AdelaideContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| AdFontesContextualCategoryId | string |  | The ID of the Ad Fontes Media Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `AdFontesContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| AeternaLabsContextualCategoryId | string |  | The ID of the Aeterna Labs Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `AeternaLabsContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| AnokiIncContextualCategoryId | string |  | The ID of the AnokiInc Contextual Category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `AnokiIncContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| AudigentContextualCategoryId | string |  | The ID of the Audigent Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `AudigentContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| BarometerContextualCategoryId | string |  | The ID of the Barometer Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `BarometerContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| CaptifyContextualCategoryId | string |  | The ID of the Captify Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `CaptifyContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| ComscoreContextualCategoryId | string |  | The ID of the Comscore Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `ComscoreContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| CrossPixelContextualCategoryId | string |  | The ID of the Cross Pixel Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `CrossPixelContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| DoubleVerifyBrandSafetyCategoryId | string |  | The ID of the DoubleVerify Brand Safety category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `DoubleVerifyBrandSafety`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| DoubleVerifyContextualCategoryId | string |  | The ID of the DoubleVerify Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `DoubleVerifyContextual`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| DstilleryContextualCategoryId | string |  | The ID of the Dstillery ID-free Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `DstilleryContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| EmetriqContextualCategoryId | string |  | The ID of the Emetriq Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `EmetriqContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| FactualGeoTargetingId | integer (int64) |  | The ID of the factual geo segment that the bid line is targeting. _(DEPRECATED; deprecation: Please use `GeofenceThirdPartyDataAndBrand` instead.)_ |
| FourDContextualCategoryId | string |  | The ID of the 4D Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `FourDContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| FrequencyTarget | `DimensionalBidding_FrequencyTarget_post` |  | The ad frequency to target. This is a Frequency v1 setting that has been replaced by the new Frequency v2 property, `FrequencyRange`. For migration details and examples of old and new bid lists, see [Frequency Migration Phase Two](/v3/portal/api/doc/UpgradeSupportFrequencyV2FinalMigration) (contact your Technical Account Manager for permissions). For details on the new settings and resulting bid lists, see [Frequency Caps](/v3/portal/api/doc/FrequencyConfigurationBasicCaps) and [Frequency Goals](/v3/portal/api/doc/FrequencyConfigurationBasicGoals). _(DEPRECATED; deprecation: This is no longer actively used in the system.)_ |
| GumGumContextualCategoryId | string |  | The ID of the GumGum Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `GumGumContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| hyScoreContextualCategoryId | string |  | The ID of the hyScore Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `hyScoreContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| IllumaContextualCategoryId | string |  | The ID of the Illuma Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IllumaContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| IntegralBrandSafetyCategoryId | string |  | The ID of the Integral Brand Safety category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralBrandSafety`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| IntegralContextualCategoryId | string |  | The ID of the Integral Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralContextual`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| IntegralVideoBrandSafetyCategoryId | string |  | The ID of the Integral Video Brand Safety category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `IntegralVideoBrandSafety`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| LumenContextualCategoryId | string |  | The ID of the Lumen Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `LumenContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| MobianContextualCategoryId | string |  | The ID of the Mobian Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `MobianContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| NanoInteractiveContextualCategoryId | string |  | The ID of the NanoInteractive Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `NanoInteractiveContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| NewsGuardContextualCategoryId | string |  | The ID of the NewsGuard Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `NewsGuardContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| OSDSContextualCategoryId | string |  | The ID of the OSDS Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `OSDSContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| Peer39BrandSafetyCategoryId | string |  | The ID of the Peer39 Brand Safety category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `Peer39BrandSafety`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| Peer39ContextualCategoryId | string |  | The ID of the Peer39 Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `Peer39Contextual`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| QwarryContextualCategoryId | string |  | The ID of the Qwarry Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `QwarryContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| RaasLabContextualCategoryId | string |  | The ID of the RaasLab Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `RaasLabContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| SemasioContextualCategoryId | string |  | The ID of the Semasio Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `SemasioContextual`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| ShareThisContextualCategoryId | string |  | The ID of the ShareThis Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `ShareThisContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| SilverpushContextualCategoryId | string |  | The ID of the Silverpush Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `SilverpushContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| SirdataContextualCategoryId | string |  | The ID of the Sirdata Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `SirdataContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| TrueRelevanceContextualCategoryId | string |  | The ID of the TrueRelevance Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `TrueRelevanceContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| TTDContextualCategoryId | string |  | The ID of The Trade Desk contextual category to target.   Here's what you need to know about this property:    - When you include a `TTDContextualCategoryId` in the bid line, be sure to add the “ttd-ct-” prefix to its value. For example, to include the `TTDContextualCategoryId` with the value of 123456, specify it as `ttd-ct-123456`.       - The `CustomCategoryType` specified when the custom category was created is ignored by this endpoint. Instead, set the bid adjustment to 1 (target) or 0 (block).   To find a TTDContextualCategoryId value:   1. Use the [POST /customcategory/query](/v3/portal/api/ref/post-customcategory-query) endpoint and set `CategorySourceType` to `TTDContextualCategory`.      2. Use the returned `CustomCategoryId` in a [GET /customcategory/{customCategoryId}](/v3/portal/api/ref/get-customcategory-customcategoryid) request. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| WeboramaContextualCategoryId | string |  | The ID of the Weborama Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `WeboramaContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |
| XplnContextualCategoryId | string |  | The ID of the Xpln.AI Contextual category to target. For a list of category IDs, use the [POST /category/query](/v3/portal/api/ref/post-category-query) endpoint and set `CategorySourceType` to `XplnContextualCategory`. _(DEPRECATED; deprecation: This dimension will be removed on April 12, 2027. See https://open.thetradedesk.com/advertiser/docsApp/GuidesAdvertiser/api/doc/ContextualEntities#migrate-bid-lists to migrate your campaigns from Bid Lists to Contextual Entities.)_ |

### `DimensionalBidding_BidListAdjustmentType`

Type: string enum(BlockList, TargetList, Optimized)

### `DimensionalBidding_MultipleMatchResolutionType`

Type: string enum(SingleMatchOnly, ApplyMinimumAdjustment, ApplyAverageAdjustment, ApplyMaximumAdjustment, ApplyMultiplyAdjustment)

### `DataGroup_DataGroup_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser that owns this data group. |
| DataGroupName | string | yes | The name of the data group. The maximum character length is 64. _(maxLength 64)_ |
| Description | string |  | An optional description of the data group. The maximum character length is 2048. _(maxLength 2048)_ |
| FirstPartyDataIds | array<integer (int64)> |  | The first party data elements in the data group. Here's what you need to know about this property:   - This is a union; if a user has any of these data elements (or any third-party data elements), they are considered to be in the data group for targeting purposes.   - If specified, these First Party Data elements will replace all existing first-party data elements in the data group.   - If specified, the IDs in this list will be deduped, meaning if any ID appears in this list more than once, extra occurrences of the ID will be ignored.  Example: [ 2, 3, 2, 2 ] is equivalent to [ 2, 3 ]   - See the DMP API for your first-party data. |
| GeoForCounts | string |  | The geo (country or continent) that the counts for this data group should be filtered to. _(nullable)_ |
| IsSharable | boolean |  | Whether the data group is allowed to be shared between multiple Audiences. If this is not specified on create, the data group will not be sharable. |
| SkipUnauthorizedThirdPartyData | boolean |  | Used for creating or updating a DataGroup. When set to true, any unauthorized data segments encountered in ThirdPartyDataIds will be skipped, and the DataGroup will still be created.   When set to false (the default), any unauthorized data segments will result in an error response, and the DataGroup will not be created. |
| ThirdPartyDataIds | array<string> |  | This data group is a union of users who have third-party or first-party data elements for targeting purposes. Here's what you need to know:   - The request must include `ThirdPartyId` and `BrandId` values in this format: "ThirdPartyDataId\|BrandId". For example, "1234567\|abc123xyz". Otherwise, a 403 (Forbidden) error is returned.   - If specified, these third-party data elements replace all existing third-party data elements in the data group.   - If the same IDs are specified in this list more than once, they are deduped. In other words, the duplicate IDs are ignored. For example, a list of [ 2, 3, 2, 2 ] is equivalent to [ 2, 3 ].   - All third-party data IDs in segments will be validated for biddability. Data group workflows will fail if the `ThirdPartyDataIds` array contains non-biddable IDs.   **TIP**: To check if segments are buyable beforehand, use the [POST /v3/dmp/thirdparty/advertiser](/v3/portal/api/ref/post-dmp-thirdparty-advertiser) endpoint. Include only third-party data IDs listed in the response. |

### `Nielsen_TargetingEndAge`

Type: string enum(Seventeen, Twenty, TwentyFour, TwentyNine, ThirtyFour, ThirtyNine, FortyFour, FortyNine, FiftyFour, SixtyFour, SixtyFourPlus)

### `Nielsen_TargetingGender`

Type: string enum(Male, Female, Both)

### `Nielsen_TargetingStartAge`

Type: string enum(Two, Thirteen, Eighteen, TwentyOne, TwentyFive, Thirty, ThirtyFive, Forty, FortyFive, Fifty, FiftyFive, SixtyFive)

### `UniversalForecasting_UniversalForecastingContractGeoMetricResult`

| Field | Type | Required | Description |
|---|---|---|---|
| GeoName | string |  | Id of the private contract. _(nullable)_ |
| MetricResults | array<`UniversalForecasting_UniversalForecastingInsightMetricResult`> |  | Metrics results for forecasting insights, reach, frequency and spend. _(nullable)_ |

### `TheTradeDesk.AdPlatform.Shared_GeoSegmentFilter`

Type: string enum(CustomOnly, StandardOnly, All, Country, Region, City, PostalCode, Metro, AdvertiserSpecific, PartnerSpecific, CongressionalDistrict, NielsenDma, LegislativeDistrict, USCounty)

### `UniversalForecasting_UniversalForecastInsightMetricType`

Type: string enum(Impressions, Spend, FrequencyUsers, FrequencyPeople, FrequencyHousehold, ReachUsers, ReachPeople, ReachHousehold, Reach, Frequency, OTP, LinearTVReach, DigitalReach, UsDemographicPercentages, SambaUniqueUserCount, UfWithRailsNoExclusion_Avails, UfWithRailsNoExclusion_PotentialBids, UfWithRailsNoExclusion_Impressions, UfWithRailsNoExclusion_PeopleReach, UfWithRailsNoExclusion_DeviceReach, UfWithRailsNoExclusion_HhReach, UfWithRailsNoExclusion_Spend, UfWithRailsNoExclusion_DeviceFreq, UfWithRailsNoExclusion_PeopleFreq, UfWithRailsNoExclusion_HhFreq, UfWithRailsExcludingAcr_Avails, UfWithRailsExcludingAcr_PotentialBids, UfWithRailsExcludingAcr_Impressions, UfWithRailsExcludingAcr_PeopleReach, UfWithRailsExcludingAcr_DeviceReach, UfWithRailsExcludingAcr_HhReach, UfWithRailsExcludingAcr_Spend, UfWithRailsExcludingAcr_DeviceFreq, UfWithRailsExcludingAcr_PeopleFreq, UfWithRailsExcludingAcr_HhFreq, UfWithRailsIntersectsAcr_Avails, UfWithRailsIntersectsAcr_PotentialBids, UfWithRailsIntersectsAcr_Impressions, UfWithRailsIntersectsAcr_PeopleReach, UfWithRailsIntersectsAcr_DeviceReach, UfWithRailsIntersectsAcr_HhReach, UfWithRailsIntersectsAcr_Spend, UfWithRailsIntersectsAcr_DeviceFreq, UfWithRailsIntersectsAcr_PeopleFreq, UfWithRailsIntersectsAcr_HhFreq, UfWithRailsIntersectsSuperAcr_Avails, UfWithRailsIntersectsSuperAcr_PotentialBids, UfWithRailsIntersectsSuperAcr_Impressions, UfWithRailsIntersectsSuperAcr_PeopleReach, UfWithRailsIntersectsSuperAcr_DeviceReach, UfWithRailsIntersectsSuperAcr_HhReach, UfWithRailsIntersectsSuperAcr_Spend, UfWithRailsIntersectsSuperAcr_DeviceFreq, UfWithRailsIntersectsSuperAcr_PeopleFreq, UfWithRailsIntersectsSuperAcr_HhFreq)

### `AdGroup_AdsTxtSellerType`

Type: string enum(Unknown, Direct, Reseller)

### `AdGroup_VideoMutedState`

Type: string enum(InfrequentlyAutoMuted, SometimesAutoMuted, AlwaysAutoMuted)

### `AdGroup_VideoPlaybackType`

Type: string enum(PreRoll, MidRoll, PostRoll, Undeclared, InterstitialSliderFloating, AccompanyingContent, Standalone)

### `AdGroup_VideoPlayerSize`

Type: string enum(Unknown, Small, Medium, Large, InBanner)

### `AdGroup_VideoQuality`

Type: string enum(Unknown, Professional, Prosumer, UserGenerated, Mixed)

### `AdGroup_VideoSkippability`

Type: string enum(Skippable, NotSkippable, Unknown)

### `DimensionalBidding_AtmosphericCondition`

Type: string enum(Unknown, Low, Medium, High, VeryHigh, LowForecast, MediumForecast, HighForecast, VeryHighForecast)

### `DimensionalBidding_AudienceReachPercentageTier`

Type: string enum(Unknown, Tier1, Tier2, Tier3, Tier4)

### `DimensionalBidding_Browser`

Type: string enum(Other, InternetExplorer7, InternetExplorer8, InternetExplorer9, Firefox, Chrome, Safari, Opera, InternetExplorer10, InternetExplorer11, Edge, Baidu, Yandex, WebView)

### `DimensionalBidding_ContentDuration`

Type: string enum(Unknown, ShorterThan15Minutes, Between15And30Minutes, Between30And45Minutes, Between45And60Minutes, Between60And75Minutes, Between75And90Minutes, Between90And105Minutes, Between105And120Minutes, LongerThan120Minutes)

### `DimensionalBidding_ContentLivestream`

Type: string enum(Unknown, Live, NotLive)

### `DimensionalBidding_ContentProductionQuality`

Type: string enum(Unknown, Professional, Prosumer, UserGeneratedContent)

### `DimensionalBidding_DeviceType`

Type: string enum(Other, PC, Tablet, Mobile, Roku, ConnectedTV, OutOfHome, HomeAssistant)

### `DimensionalBidding_FrequencyRange_post`

| Field | Type | Required | Description |
|---|---|---|---|
| CounterId | string | yes | Specify a counter to define the number of times an ad was shown to a user within the counter's `ResetIntervalInMinutes`. |
| TimesShown | `TheTradeDesk.AdPlatform_NonNullRange_integer_int32__` | yes | The range of times the ad has been shown to the user in the look back window.   The end of a range is exclusive. The min of the range must be less than the max.   E.G. -    A range of 0 to 1 will target all users that have seen the ad 0 times, up to (not including) 1 time, such that at the end of the campaign, ideally all users will have seen the ad once.   A range of 0 to 5 will target all users that have seen the ad 0 to 4 times, such that at the end of the campaign, ideally all users will have seen the ad 5 times.   A range of 3 to 6 will target all users that have seen the ad 3, 4, or 5 times, such that at the end of the campaign, ideally all users will have seen the ad 6 times. |

### `DimensionalBidding_FrequencyTarget_post`

Represents the number of times an ad has been shown to a user in a range of time.

| Field | Type | Required | Description |
|---|---|---|---|
| LookBackWindowInMinutes | integer (int32) | yes | The time range, looking back, over which to measure the times shown.   Value must be greater than 0. |
| TimesShown | `TheTradeDesk.AdPlatform_NonNullRange_integer_int32__` | yes | The range of times the ad has been shown to the user in the look back window.   The end of a range is exclusive. The min of the range must be less than the max.   E.G. -    A range of 0 to 1 will target all users that have seen the ad 0 times, up to (not including) 1 time, such that at the end of the campaign, ideally all users will have seen the ad once.   A range of 0 to 5 will target all users that have seen the ad 0 to 4 times, such that at the end of the campaign, ideally all users will have seen the ad 5 times.   A range of 3 to 6 will target all users that have seen the ad 3, 4, or 5 times, such that at the end of the campaign, ideally all users will have seen the ad 6 times. |

### `DimensionalBidding_InternetConnectionType`

Type: string enum(Unknown, Ethernet, WiFi, CellularNetworkUnknown, CellularNetwork2G, CellularNetwork3G, CellularNetwork4G, CellularNetwork5G)

### `DimensionalBidding_LikelyRefreshRate`

Type: string enum(Unknown, Under15, Between15And30, Between30And60, Over60)

### `DimensionalBidding_MarketType`

Type: string enum(Open, PMP)

### `DimensionalBidding_NativePlacementType`

Type: string enum(Unknown, InFeed, InsideContent, OutsideContent, RecommendationWidget)

### `DimensionalBidding_RenderingContext`

Type: string enum(Other, InApp, MobileOptimizedWeb)

### `DimensionalBidding_Rewarded`

Type: string enum(Unknown, IsRewarded, NotRewarded)

### `DimensionalBidding_TTDNativeContextType`

Type: string enum(Unclassified, ContentUnclassified, SocialUnclassified, ProductUnclassified, General, Article, Video, Audio, Image, UserGenerated, GeneralSocial, Email, ChatOrIM, SellingProducts, ApplicationStore, ProductReview)

### `DimensionalBidding_ThirdPartyData`

Third-party data bid dimension is a tuple of third party data ID and third party data brand ID taken from the targeting data group.  
This dimension is currently only available on recommendation lists.

| Field | Type | Required | Description |
|---|---|---|---|
| ThirdPartyDataBrandId | string |  | The third-party data brand ID associated with the third party data ID in the targeting data group. _(nullable)_ |
| ThirdPartyDataId | integer (int64) |  | The third-party data ID identifying the data segment. |

### `DimensionalBidding_VolumeControlPriority`

Type: string enum(Neutral, One, Two, FrequencyGoal, Negative)

### `TheTradeDesk.AdPlatform_Range_integer_int32__`

| Field | Type | Required | Description |
|---|---|---|---|
| Max | integer (int32) |  | _(nullable)_ |
| Min | integer (int32) |  | _(nullable)_ |

### `TheTradeDesk.AdPlatform_Range_number_double__`

| Field | Type | Required | Description |
|---|---|---|---|
| Max | number (double) |  | _(nullable)_ |
| Min | number (double) |  | _(nullable)_ |

### `TheTradeDesk.AdPlatform_NonNullRange_integer_int32__`

| Field | Type | Required | Description |
|---|---|---|---|
| Max | integer (int32) |  |  |
| Min | integer (int32) |  |  |

