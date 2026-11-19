# Advertiser

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 7

---

## POST /v3/advertiser

Create a new advertiser.

Operation ID: `post-advertiser`

**Request body** (`application/json`, required): `Advertiser_Advertiser_post`

**Response 200** (`application/json`): `Advertiser_Advertiser`

---

## PUT /v3/advertiser

Update an existing advertiser.

Operation ID: `put-advertiser`

**Request body** (`application/json`, required): `Advertiser_Advertiser_put`

**Response 200** (`application/json`): `Advertiser_Advertiser`

---

## GET /v3/advertiser/{advertiserId}

Get an existing advertiser by ID.  
**TIP**: Using the equivalent advertiser GraphQL query, you can enhance performance, customize criteria, and, if needed, expand your search across multiple advertisers.   
For details, see [Look Up Advertiser Settings](/v3/portal/api/doc/AdvertiserGQLQueryExamples#query-advertiser-settings).

Operation ID: `get-advertiser-advertiserid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string | yes | The platform ID of the advertiser to retrieve. |

**Response 200** (`application/json`): `Advertiser_Advertiser`

---

## GET /v3/advertiser/query/facets

Get the facets of Advertisers that can be queried.

Operation ID: `get-advertiser-query-facets`

**Response 200** (`application/json`): `Advertiser_AdvertiserFacets`

---

## POST /v3/advertiser/query/partner

Get Advertisers that belong to the specified Partner.

Operation ID: `post-advertiser-query-partner`

**Request body** (`application/json`, required): `Advertiser_AdvertiserQueryForPartner`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_Advertiser_`

---

## GET /v3/advertiser/name/{advertiserId}

Get the identifier and name for an Advertiser based on identifier

Operation ID: `get-advertiser-name-advertiserid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string | yes |  |

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_IdName`

---

## POST /v3/advertiser/adgroup/bidlinecounts

Paged query to retrieve the bidline counts for adgroups owned by a given advertiser.  
Maximum page size for this query is 1,000.

Operation ID: `post-advertiser-adgroup-bidlinecounts`

**Request body** (`application/json`, required): `Advertiser_AdvertiserOwnedAdGroupBidLineCountsRequest_post`

**Response 200** (`application/json`): `Advertiser_AdvertiserOwnedAdGroupBidLineCountsPage`

---

## Schemas

### `Advertiser_Advertiser`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserAudienceSettings | `Advertiser_AdvertiserAudienceSettings` |  | The Audience Settings (also known as Data Settings in the UI) allows you to define [Prism](/v3/portal/api/doc/Prism) settings (controlled by the `AudienceExcluderEnabled` property) for all ad groups for this advertiser. |
| AdvertiserCategory | `Advertiser_AdvertiserCategory` |  | The industry category information pertaining to this advertiser. Here's what you need to know about advertiser industry categories:   - Only the `CategoryId` property is required on create and update.   - To retrieve the full industry category taxonomy, use the [GET /v3/categorytaxonomy/{categoryTaxonomyId}/category/industrycategories](/v3/portal/api/ref/get-categorytaxonomy-categorytaxonomyid-category-industrycategories) endpoint, where the `{categoryTaxonomyId}` can be `2` for the 1.0 taxonomy or `13` for the 2.2 taxonomy. You can also retrieve the taxonomy ID by using the [GET /v3/categorytaxonomy/industrycategorytaxonomies](/v3/portal/api/ref/get-categorytaxonomy-industrycategorytaxonomies).   Special considerations apply to some features based on the advertiser industry category. Ad groups associated with advertisers assigned to some industry categories and sub-categories cannot use Koa Audience Predictor or Koa Audience Excluder. Some of these industries include Careers, Health and Fitness, Personal Finance, and Real Estate.   For more details and examples, see the _API Updates_ section in [Industry Category Taxonomy Migration](/v3/portal/api/doc/UpgradeSupportCategoryTaxonomy#api-updates). _(nullable)_ |
| AdvertiserId | string |  | The platform ID of the advertiser. Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| AdvertiserName | string |  | The name of the advertiser. _(maxLength 64)_ |
| AdvertiserNameDsa | string |  | The name of the advertiser to be displayed for campaigns targeting individuals established or located in the European Union (EU). Here's what you need to know about this property:   - This property is required by the Digital Services Act (DSA) only for the EU. Otherwise, the property is optional and its value is set to `null` by default.   - If required and not specified, the `AdvertiserName` value is used by default.   **IMPORTANT**: It is your responsibility, as required under our Master Services Agreement, to ensure any information you provide to us is truthful and correct. If you fail to confirm the values, you agree to us using the default values.   For details or assistance, contact your Account Manager or Technical Account Manager. _(maxLength 64)_ |
| AssociatedBidLists | array<`DimensionalBidding_AssociatedBidList`> |  | The BidLists that are associated with this Advertiser.   If a bid list is associated, and enabled then its adjustments will be applied during bidding to all ad groups in the advertiser. |
| AttributionClickLookbackWindowInSeconds | integer (int32) |  | When The Trade Desk performs click attribution for the advertiser’s conversions, this is the amount of time that will be considered for attribution. |
| AttributionImpressionLookbackWindowInSeconds | integer (int32) |  | When The Trade Desk performs impression attribution for the advertiser’s conversions, this is the amount of time that will be considered for attribution. |
| Availability | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability` |  | Availability state of the Advertiser. This field is read-only. |
| CandidateProfiles | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_CandidateProfile`> |  | A list of profiles for candidates running for political office. Here's what you need to know about candidate profiles:       - Required only for political advertisers for federal, state, or local candidate elections, and state or local ballot measure elections.        - To include candidate profiles, be sure to set the `IsCandidateElection`, `IsIndependentExpenditure`, or `IsBallotMeasure` value to `true`.       - This information will appear on the political transparency page of the creative.   For details, see [Political Advertising](/v3/portal/api/doc/PoliticalAdvertising). _(nullable)_ |
| ClickDedupWindowInSeconds | integer (int32) |  | When The Trade Desk performs click attribution for your conversions, similar clicks will be considered duplicates if they are within this window. Set to zero to disable click de-duplication. |
| ConversionDedupWindowInSeconds | integer (int32) |  | When The Trade Desk performs impression attribution for your conversions, similar conversions will be considered duplicates if they are within this window. Set to zero to disable conversion de-duplication. |
| Country | string |  | The ISO 3166-1 alpha-2 country code that determines the appropriate policies and regulations to apply to the advertiser. _(maxLength 2)_ |
| CurrencyCode | `TheTradeDesk_CurrencyCode` |  | The three-letter currency code of the Advertiser. If not provided, this will default to the Partner's currency code. The currency code cannot be changed after the Advertiser has been created. If you want a different currency, you must create a new Advertiser.   Unless you arranged different terms during onboarding, your Partner wil be in USD and all Advertisers under the partner must use the same currency.   If you believe you need another currency, please contact your account manager for terms and conditions.   If multiple currency support is enabled for your account, see the Currency API for the full set of supported currencies and their codes. |
| CustomLabels | array<`CustomLabel_AssignedCustomLabel`> |  | Custom Labels assigned to this Advertiser. |
| DefaultBidLists | array<`DimensionalBidding_DefaultBidList`> |  | The default bid lists associated with this Advertiser.   Advertiser default bid lists:   - Are not automatically applied to the existing campaigns and ad groups under this advertiser.   - May be included as default bid lists in new campaigns for the advertiser, using the `IncludeDefaultsFromAdvertiser` parameter, and then further propagated to ad groups.   - Can be only of type Target or Block (inclusion or exclusion).   - Can include only the dimensions listed below.     - Brand Safety dimensions:       `HasIntegralBrandSafetyCategoryId`, `HasDoubleVerifyBrandSafetyCategoryId`, `HasIntegralVideoBrandSafetyCategoryId`, `HasPeer39BrandSafetyCategoryId`     - Page Quality dimensions:       `HasIntegralPageQualityCategoryId`, `HasIntegralVideoPageQualityCategoryId`, `HasPeer39PageQualityCategoryId`, `HasTencentPageQualityCategoryId`, `HasAdBugPageQualityCategoryId`, `HasAdBugVideoPageQualityCategoryId`, `HasRTBAsiaPageQualityCategoryId`, `HasRTBAsiaVideoPageQualityCategoryId`     - Viewability dimensions:       `HasDisplayViewabilityScoreRange`, `HasIntegralViewabilityCategoryId`, `HasVideoViewabilityScoreRange`, `HasDoubleVerifyViewabilityCategoryId`, `HasIntegralVideoViewabilityCategoryId`, `HasDoubleVerifyVideoViewabilityCategoryId`, `HasPeer39ViewabilityCategoryId`     - Other dimensions:       `HasAdsTxtSellerTypeId`, `HasGeoSegmentId`, `HasLanguageId`, `HasPeer39LanguageId`, `HasDomainFragmentId`, `HasSupplyVendorId`, `HasPrivateContractId` |
| DefaultRightMediaOfferTypeId | integer (int64) |  | Sets the default Right Media Offer Type (creative category) to use on newly-created creatives.   This property is required as of version 3 of the API. If an existing Advertiser does not have a default offer type set, this property will be omitted from the API's response.   Once set, new creatives that do not have an offer type specified on creation will inherit this offer type. Creatives that do not have a Right Media Offer Type will not be able to buy Right Media inventory until one is assigned.   See the Right Media Offer Type API for a full list of possible values. |
| Description | string |  | An optional description of the advertiser. _(nullable)_ |
| DomainAddress | string |  | The domain address (including http:// or https://) for the advertiser.   The maximum character length is 256. _(maxLength 256)_ |
| IgnoreReferralUrlInConversion | boolean |  | When The Trade Desk performs impression attribution for your conversions, if enabled, conversions with deduplication key different only in referral url are considered duplicates |
| Increments | array<string> |  | A list of frequency `CounterIds` to increment based on impressions served for this advertiser.   Frequency counter details can be retrieved from [Frequency Counter API](/v3/portal/api/ref/get-frequency-counter-counterid) _(nullable)_ |
| IsBallotMeasure | boolean |  | If set to `true`, indicates that this advertiser is running political advertising campaigns for a state or local ballot measure election. Here's what you need to know:       - The default value for this property is `false`.       - Required only for political advertisers for state or local ballot measure elections.   For details, see [Political Advertising for Ballot Measure Elections](/v3/portal/api/doc/PoliticalAdvertisingBallotMeasure). |
| IsCandidateElection | boolean |  | If set to `true`, indicates that this advertiser is running political advertising campaigns for a state, local, or federal election candidate and must include a candidate profile for each candidate. The default value for this property is `false`.   **IMPORTANT**: Required only for political advertisers for federal, state, or local, candidate elections. For details, see [Political Advertising](/v3/portal/api/doc/PoliticalAdvertising). |
| IsHecAutoExempt | boolean |  | If set to `true`, indicates that       - you are contractually required to target advertising within a primary or designated market area;       - the geography that you target with this campaign consists of the entirety of your contractual primary or designated market area; and       - you are in compliance with all applicable laws relating to the targeting of your advertisements.​   If set to `false`, you are categorized under the HEC (Housing, Employment, Credit) Industry, which requires you to comply to the following:       - Having a minimum reach threshold of over 1500 User IDS for all HEC ad groups       - If ZIP codes are applied, each ZIP code must include at least one neighboring ZIP code to ensure no ZIP codes are targeted in isolation.   **IMPORTANT**: Required only for Auto Buying and Selling advertisers. |
| IsIndependentExpenditure | boolean |  | If set to `true`, indicates that this advertiser is running political advertising campaigns for a state, local, or federal election. Here's what you need to know:       - The default value for this property is `false`.       - Required only for political advertisers for federal, state, or local elections.   For details, see [Political Advertising](/v3/portal/api/doc/PoliticalAdvertising). |
| Keywords | array<string> |  | Keywords that classify the advertiser. These can be individual words like "travel" or phrases like "deals website". The keywords will be normalized and duplicates will be removed. You may specify any number of keywords and each keyword can be up to 300 characters long. |
| LogoURL | string |  | The URL for the Advertiser's logo or brand image.     The API will throw an error if this is not a valid URL to an image.   While this is not a required attribute, it is recommended that this value be set because a LogoURL is necessary to bid on certain types of inventory from select supply vendors. _(nullable)_ |
| NewFrequencyConfigs | array<`Frequency_NewFrequencyConfig`> |  | Frequency configurations associated with this advertiser. For concepts and details on configuring frequency settings, see [Basic Frequency Configuration Guidelines](/v3/portal/api/doc/FrequencyConfigurationBasic).   Here's what you need to know:   - If at least one frequency configuration in the request is not valid, the whole request will fail. In this case, be sure to correct the invalid configuration and resend your request.     - The advertiser POST and PUT endpoints return this object in the response only if you include it in the request.   - The [GET /advertiser{advertiserId}](/v3/portal/api/ref/get-advertiser-advertiserid)  endpoint never returns this object. To retrieve frequency configurations for an advertiser, use the [POST/frequency/config/query](/v3/portal/api/ref/post-frequency-config-query) endpoint. |
| PartnerId | string |  | The ID of the partner who owns this advertiser. Your partner ID will be provided when you are granted access to the API. The owning partner cannot be changed. |
| PayerNameDsa | string |  | The name of the entity paying for this advertiser's campaigns. The Digital Services Act (DSA) requires online platforms to declare the natural or legal person paying for the ad, if different from the advertiser.   Here's what you need to know about this property:   - This property is required by the DSA only for the EU. Otherwise, the property is optional and its value is set to `null` by default.   - If required and not specified, the `CustomerName` value is used by default.   **IMPORTANT**: It is your responsibility, as required under our Master Services Agreement, to ensure any information you provide to us is truthful and correct. If you fail to confirm the values, you agree to us using the default values.   For details or assistance, contact your Account Manager or Technical Account Manager. _(maxLength 64)_ |
| VettingStatus | `TTD.DB.Provisioning.EntityFramework.Entities_AdvertiserVettingStatus` |  | Vetting status of the advertiser. This field is read-only |
| IndustryCategoryId | integer (int64) |  | The ID identifying the industry category in which this advertiser conducts business. Query the [Industry Category](/v3/portal/api/ref/get-category-industrycategories) endpoint for a full list of possible values. If an advertiser created prior to v3 does not have an `IndustryCategoryId` set, this property will not be returned in the response.      Special considerations apply to some features based on the advertiser industry category. Ad groups associated with advertisers assigned to some industry categories and sub-categories cannot use Koa Audience Predictor or Koa Audience Excluder. Some of these industries include Careers, Health and Fitness, Personal Finance, and Real Estate. _(DEPRECATED; deprecation: This property is deprecated in favor of AdvertiserCategory.CategoryId which has support for any industry category taxonomy.)_ |
| IndustryCategoryMapping | `Category_CategoryMapping` |  | With many IAB 1.0 and 2.2 categories matching, in this property, provide the ID of the category to which you want to map the category specified in the `IndustryCategoryId` property.   **NOTE**: If the IAB 1.0 category matches with only one category on IAB 2.2 then the value in this property will be ignored. Also, if the IAB 1.0 category matches with many categories on IAB 2.2 but the suggested category does not belong to the potential mappings then it will be ignored also. _(nullable; DEPRECATED; deprecation: This property is deprecated in favor of AdvertiserCategory.Mappings and it is for read only.)_ |
| IndustryCategoryTaxonomyId | integer (int32) |  | The ID of the industry category taxonomy to which the category specified in the `IndustryCategoryId` property belongs. _(DEPRECATED; deprecation: This property is deprecated in favor of AdvertiserCategory.CategoryTaxonomyId and it is for read only.)_ |

### `Advertiser_AdvertiserFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| Availabilities | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_Availability_`> |  | The Availability states by which Advertisers my be filtered in a query. This list may be extended at any time, so please design accordingly. |
| SortingFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_AdvertiserSortingField_`> |  | The fields by which Advertisers may be sorted in a query. This list may be extended at any time, so please design accordingly. |

### `Advertiser_AdvertiserOwnedAdGroupBidLineCountsPage`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserBidLineCount | integer (int64) |  | The number of bidlines currently associated with the advertiser. |
| AdvertiserBidLineLimit | integer (int64) |  | The maximum number of bidlines that can be associated with this advertiser. |
| AdvertiserId | string |  | The ID of the advertiser. _(nullable)_ |
| Result | array<`AdGroup_AdGroupBidLineCounts`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `Advertiser_AdvertiserOwnedAdGroupBidLineCountsRequest_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The ID of the advertiser making the query |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |

### `Advertiser_AdvertiserQueryForPartner`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| PartnerId | string | yes | The ID of the Partner that owns the Advertisers |
| Availabilities | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability`> |  | A list of Availability states by which to filter the returned Advertisers. See GET advertiser/query/facets for the list of possible availabilities.   If not specified, empty, or null, only Available Advertisers will be returned. _(nullable)_ |
| SearchTerms | array<string> |  | A list of search terms by which to filter the returned Advertisers. All terms must be matched in the ID, name or description in order for an Advertiser to match.   If not specified, empty, or null, this property is ignored. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_AdvertiserSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed. See GET advertiser/query/facets for the list of possible sort field IDs.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by Name ascending. _(nullable)_ |

### `Advertiser_Advertiser_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserName | string | yes | The name of the advertiser. _(maxLength 64)_ |
| AttributionClickLookbackWindowInSeconds | integer (int32) | yes | When The Trade Desk performs click attribution for the advertiser’s conversions, this is the amount of time that will be considered for attribution. |
| AttributionImpressionLookbackWindowInSeconds | integer (int32) | yes | When The Trade Desk performs impression attribution for the advertiser’s conversions, this is the amount of time that will be considered for attribution. |
| ClickDedupWindowInSeconds | integer (int32) | yes | When The Trade Desk performs click attribution for your conversions, similar clicks will be considered duplicates if they are within this window. Set to zero to disable click de-duplication. |
| ConversionDedupWindowInSeconds | integer (int32) | yes | When The Trade Desk performs impression attribution for your conversions, similar conversions will be considered duplicates if they are within this window. Set to zero to disable conversion de-duplication. |
| Country | string | yes | The ISO 3166-1 alpha-2 country code that determines the appropriate policies and regulations to apply to the advertiser. _(maxLength 2)_ |
| DefaultRightMediaOfferTypeId | integer (int64) | yes | Sets the default Right Media Offer Type (creative category) to use on newly-created creatives.   This property is required as of version 3 of the API. If an existing Advertiser does not have a default offer type set, this property will be omitted from the API's response.   Once set, new creatives that do not have an offer type specified on creation will inherit this offer type. Creatives that do not have a Right Media Offer Type will not be able to buy Right Media inventory until one is assigned.   See the Right Media Offer Type API for a full list of possible values. |
| DomainAddress | string | yes | The domain address (including http:// or https://) for the advertiser.   The maximum character length is 256. _(maxLength 256)_ |
| PartnerId | string | yes | The ID of the partner who owns this advertiser. Your partner ID will be provided when you are granted access to the API. The owning partner cannot be changed. |
| AdvertiserAudienceSettings | `Advertiser_AdvertiserAudienceSettings` |  | The Audience Settings (also known as Data Settings in the UI) allows you to define [Prism](/v3/portal/api/doc/Prism) settings (controlled by the `AudienceExcluderEnabled` property) for all ad groups for this advertiser. |
| AdvertiserCategory | `Advertiser_AdvertiserCategory_post` |  | The industry category information pertaining to this advertiser. Here's what you need to know about advertiser industry categories:   - Only the `CategoryId` property is required on create and update.   - To retrieve the full industry category taxonomy, use the [GET /v3/categorytaxonomy/{categoryTaxonomyId}/category/industrycategories](/v3/portal/api/ref/get-categorytaxonomy-categorytaxonomyid-category-industrycategories) endpoint, where the `{categoryTaxonomyId}` can be `2` for the 1.0 taxonomy or `13` for the 2.2 taxonomy. You can also retrieve the taxonomy ID by using the [GET /v3/categorytaxonomy/industrycategorytaxonomies](/v3/portal/api/ref/get-categorytaxonomy-industrycategorytaxonomies).   Special considerations apply to some features based on the advertiser industry category. Ad groups associated with advertisers assigned to some industry categories and sub-categories cannot use Koa Audience Predictor or Koa Audience Excluder. Some of these industries include Careers, Health and Fitness, Personal Finance, and Real Estate.   For more details and examples, see the _API Updates_ section in [Industry Category Taxonomy Migration](/v3/portal/api/doc/UpgradeSupportCategoryTaxonomy#api-updates). _(nullable)_ |
| AdvertiserNameDsa | string |  | The name of the advertiser to be displayed for campaigns targeting individuals established or located in the European Union (EU). Here's what you need to know about this property:   - This property is required by the Digital Services Act (DSA) only for the EU. Otherwise, the property is optional and its value is set to `null` by default.   - If required and not specified, the `AdvertiserName` value is used by default.   **IMPORTANT**: It is your responsibility, as required under our Master Services Agreement, to ensure any information you provide to us is truthful and correct. If you fail to confirm the values, you agree to us using the default values.   For details or assistance, contact your Account Manager or Technical Account Manager. _(maxLength 64)_ |
| AssociatedBidLists | array<`DimensionalBidding_AssociatedBidList_post`> |  | The BidLists that are associated with this Advertiser.   If a bid list is associated, and enabled then its adjustments will be applied during bidding to all ad groups in the advertiser. |
| CandidateProfiles | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_CandidateProfile_post`> |  | A list of profiles for candidates running for political office. Here's what you need to know about candidate profiles:       - Required only for political advertisers for federal, state, or local candidate elections, and state or local ballot measure elections.        - To include candidate profiles, be sure to set the `IsCandidateElection`, `IsIndependentExpenditure`, or `IsBallotMeasure` value to `true`.       - This information will appear on the political transparency page of the creative.   For details, see [Political Advertising](/v3/portal/api/doc/PoliticalAdvertising). _(nullable)_ |
| CurrencyCode | `TheTradeDesk_CurrencyCode` |  | The three-letter currency code of the Advertiser. If not provided, this will default to the Partner's currency code. The currency code cannot be changed after the Advertiser has been created. If you want a different currency, you must create a new Advertiser.   Unless you arranged different terms during onboarding, your Partner wil be in USD and all Advertisers under the partner must use the same currency.   If you believe you need another currency, please contact your account manager for terms and conditions.   If multiple currency support is enabled for your account, see the Currency API for the full set of supported currencies and their codes. |
| CustomLabels | array<`CustomLabel_AssignedCustomLabel_post`> |  | Custom Labels assigned to this Advertiser. |
| DefaultBidLists | array<`DimensionalBidding_DefaultBidList_post`> |  | The default bid lists associated with this Advertiser.   Advertiser default bid lists:   - Are not automatically applied to the existing campaigns and ad groups under this advertiser.   - May be included as default bid lists in new campaigns for the advertiser, using the `IncludeDefaultsFromAdvertiser` parameter, and then further propagated to ad groups.   - Can be only of type Target or Block (inclusion or exclusion).   - Can include only the dimensions listed below.     - Brand Safety dimensions:       `HasIntegralBrandSafetyCategoryId`, `HasDoubleVerifyBrandSafetyCategoryId`, `HasIntegralVideoBrandSafetyCategoryId`, `HasPeer39BrandSafetyCategoryId`     - Page Quality dimensions:       `HasIntegralPageQualityCategoryId`, `HasIntegralVideoPageQualityCategoryId`, `HasPeer39PageQualityCategoryId`, `HasTencentPageQualityCategoryId`, `HasAdBugPageQualityCategoryId`, `HasAdBugVideoPageQualityCategoryId`, `HasRTBAsiaPageQualityCategoryId`, `HasRTBAsiaVideoPageQualityCategoryId`     - Viewability dimensions:       `HasDisplayViewabilityScoreRange`, `HasIntegralViewabilityCategoryId`, `HasVideoViewabilityScoreRange`, `HasDoubleVerifyViewabilityCategoryId`, `HasIntegralVideoViewabilityCategoryId`, `HasDoubleVerifyVideoViewabilityCategoryId`, `HasPeer39ViewabilityCategoryId`     - Other dimensions:       `HasAdsTxtSellerTypeId`, `HasGeoSegmentId`, `HasLanguageId`, `HasPeer39LanguageId`, `HasDomainFragmentId`, `HasSupplyVendorId`, `HasPrivateContractId` |
| Description | string |  | An optional description of the advertiser. _(nullable)_ |
| IgnoreReferralUrlInConversion | boolean |  | When The Trade Desk performs impression attribution for your conversions, if enabled, conversions with deduplication key different only in referral url are considered duplicates |
| Increments | array<string> |  | A list of frequency `CounterIds` to increment based on impressions served for this advertiser.   Frequency counter details can be retrieved from [Frequency Counter API](/v3/portal/api/ref/get-frequency-counter-counterid) _(nullable)_ |
| IsBallotMeasure | boolean |  | If set to `true`, indicates that this advertiser is running political advertising campaigns for a state or local ballot measure election. Here's what you need to know:       - The default value for this property is `false`.       - Required only for political advertisers for state or local ballot measure elections.   For details, see [Political Advertising for Ballot Measure Elections](/v3/portal/api/doc/PoliticalAdvertisingBallotMeasure). |
| IsCandidateElection | boolean |  | If set to `true`, indicates that this advertiser is running political advertising campaigns for a state, local, or federal election candidate and must include a candidate profile for each candidate. The default value for this property is `false`.   **IMPORTANT**: Required only for political advertisers for federal, state, or local, candidate elections. For details, see [Political Advertising](/v3/portal/api/doc/PoliticalAdvertising). |
| IsHecAutoExempt | boolean |  | If set to `true`, indicates that       - you are contractually required to target advertising within a primary or designated market area;       - the geography that you target with this campaign consists of the entirety of your contractual primary or designated market area; and       - you are in compliance with all applicable laws relating to the targeting of your advertisements.​   If set to `false`, you are categorized under the HEC (Housing, Employment, Credit) Industry, which requires you to comply to the following:       - Having a minimum reach threshold of over 1500 User IDS for all HEC ad groups       - If ZIP codes are applied, each ZIP code must include at least one neighboring ZIP code to ensure no ZIP codes are targeted in isolation.   **IMPORTANT**: Required only for Auto Buying and Selling advertisers. |
| IsIndependentExpenditure | boolean |  | If set to `true`, indicates that this advertiser is running political advertising campaigns for a state, local, or federal election. Here's what you need to know:       - The default value for this property is `false`.       - Required only for political advertisers for federal, state, or local elections.   For details, see [Political Advertising](/v3/portal/api/doc/PoliticalAdvertising). |
| Keywords | array<string> |  | Keywords that classify the advertiser. These can be individual words like "travel" or phrases like "deals website". The keywords will be normalized and duplicates will be removed. You may specify any number of keywords and each keyword can be up to 300 characters long. |
| LogoURL | string |  | The URL for the Advertiser's logo or brand image.     The API will throw an error if this is not a valid URL to an image.   While this is not a required attribute, it is recommended that this value be set because a LogoURL is necessary to bid on certain types of inventory from select supply vendors. _(nullable)_ |
| NewFrequencyConfigs | array<`Frequency_NewFrequencyConfig`> |  | Frequency configurations associated with this advertiser. For concepts and details on configuring frequency settings, see [Basic Frequency Configuration Guidelines](/v3/portal/api/doc/FrequencyConfigurationBasic).   Here's what you need to know:   - If at least one frequency configuration in the request is not valid, the whole request will fail. In this case, be sure to correct the invalid configuration and resend your request.     - The advertiser POST and PUT endpoints return this object in the response only if you include it in the request.   - The [GET /advertiser{advertiserId}](/v3/portal/api/ref/get-advertiser-advertiserid)  endpoint never returns this object. To retrieve frequency configurations for an advertiser, use the [POST/frequency/config/query](/v3/portal/api/ref/post-frequency-config-query) endpoint. |
| PayerNameDsa | string |  | The name of the entity paying for this advertiser's campaigns. The Digital Services Act (DSA) requires online platforms to declare the natural or legal person paying for the ad, if different from the advertiser.   Here's what you need to know about this property:   - This property is required by the DSA only for the EU. Otherwise, the property is optional and its value is set to `null` by default.   - If required and not specified, the `CustomerName` value is used by default.   **IMPORTANT**: It is your responsibility, as required under our Master Services Agreement, to ensure any information you provide to us is truthful and correct. If you fail to confirm the values, you agree to us using the default values.   For details or assistance, contact your Account Manager or Technical Account Manager. _(maxLength 64)_ |
| IndustryCategoryId | integer (int64) |  | The ID identifying the industry category in which this advertiser conducts business. Query the [Industry Category](/v3/portal/api/ref/get-category-industrycategories) endpoint for a full list of possible values. If an advertiser created prior to v3 does not have an `IndustryCategoryId` set, this property will not be returned in the response.      Special considerations apply to some features based on the advertiser industry category. Ad groups associated with advertisers assigned to some industry categories and sub-categories cannot use Koa Audience Predictor or Koa Audience Excluder. Some of these industries include Careers, Health and Fitness, Personal Finance, and Real Estate. _(DEPRECATED; deprecation: This property is deprecated in favor of AdvertiserCategory.CategoryId which has support for any industry category taxonomy.)_ |
| IndustryCategoryMapping | `Category_CategoryMapping` |  | With many IAB 1.0 and 2.2 categories matching, in this property, provide the ID of the category to which you want to map the category specified in the `IndustryCategoryId` property.   **NOTE**: If the IAB 1.0 category matches with only one category on IAB 2.2 then the value in this property will be ignored. Also, if the IAB 1.0 category matches with many categories on IAB 2.2 but the suggested category does not belong to the potential mappings then it will be ignored also. _(nullable; DEPRECATED; deprecation: This property is deprecated in favor of AdvertiserCategory.Mappings and it is for read only.)_ |
| IndustryCategoryTaxonomyId | integer (int32) |  | The ID of the industry category taxonomy to which the category specified in the `IndustryCategoryId` property belongs. _(DEPRECATED; deprecation: This property is deprecated in favor of AdvertiserCategory.CategoryTaxonomyId and it is for read only.)_ |

### `Advertiser_Advertiser_put`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser. Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| AdvertiserAudienceSettings | `Advertiser_AdvertiserAudienceSettings` |  | The Audience Settings (also known as Data Settings in the UI) allows you to define [Prism](/v3/portal/api/doc/Prism) settings (controlled by the `AudienceExcluderEnabled` property) for all ad groups for this advertiser. |
| AdvertiserCategory | `Advertiser_AdvertiserCategory_put` |  | The industry category information pertaining to this advertiser. Here's what you need to know about advertiser industry categories:   - Only the `CategoryId` property is required on create and update.   - To retrieve the full industry category taxonomy, use the [GET /v3/categorytaxonomy/{categoryTaxonomyId}/category/industrycategories](/v3/portal/api/ref/get-categorytaxonomy-categorytaxonomyid-category-industrycategories) endpoint, where the `{categoryTaxonomyId}` can be `2` for the 1.0 taxonomy or `13` for the 2.2 taxonomy. You can also retrieve the taxonomy ID by using the [GET /v3/categorytaxonomy/industrycategorytaxonomies](/v3/portal/api/ref/get-categorytaxonomy-industrycategorytaxonomies).   Special considerations apply to some features based on the advertiser industry category. Ad groups associated with advertisers assigned to some industry categories and sub-categories cannot use Koa Audience Predictor or Koa Audience Excluder. Some of these industries include Careers, Health and Fitness, Personal Finance, and Real Estate.   For more details and examples, see the _API Updates_ section in [Industry Category Taxonomy Migration](/v3/portal/api/doc/UpgradeSupportCategoryTaxonomy#api-updates). _(nullable)_ |
| AdvertiserName | string |  | The name of the advertiser. _(maxLength 64)_ |
| AdvertiserNameDsa | string |  | The name of the advertiser to be displayed for campaigns targeting individuals established or located in the European Union (EU). Here's what you need to know about this property:   - This property is required by the Digital Services Act (DSA) only for the EU. Otherwise, the property is optional and its value is set to `null` by default.   - If required and not specified, the `AdvertiserName` value is used by default.   **IMPORTANT**: It is your responsibility, as required under our Master Services Agreement, to ensure any information you provide to us is truthful and correct. If you fail to confirm the values, you agree to us using the default values.   For details or assistance, contact your Account Manager or Technical Account Manager. _(maxLength 64)_ |
| AssociatedBidLists | array<`DimensionalBidding_AssociatedBidList_put`> |  | The BidLists that are associated with this Advertiser.   If a bid list is associated, and enabled then its adjustments will be applied during bidding to all ad groups in the advertiser. |
| AttributionClickLookbackWindowInSeconds | integer (int32) |  | When The Trade Desk performs click attribution for the advertiser’s conversions, this is the amount of time that will be considered for attribution. |
| AttributionImpressionLookbackWindowInSeconds | integer (int32) |  | When The Trade Desk performs impression attribution for the advertiser’s conversions, this is the amount of time that will be considered for attribution. |
| CandidateProfiles | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_CandidateProfile_put`> |  | A list of profiles for candidates running for political office. Here's what you need to know about candidate profiles:       - Required only for political advertisers for federal, state, or local candidate elections, and state or local ballot measure elections.        - To include candidate profiles, be sure to set the `IsCandidateElection`, `IsIndependentExpenditure`, or `IsBallotMeasure` value to `true`.       - This information will appear on the political transparency page of the creative.   For details, see [Political Advertising](/v3/portal/api/doc/PoliticalAdvertising). _(nullable)_ |
| ClickDedupWindowInSeconds | integer (int32) |  | When The Trade Desk performs click attribution for your conversions, similar clicks will be considered duplicates if they are within this window. Set to zero to disable click de-duplication. |
| ConversionDedupWindowInSeconds | integer (int32) |  | When The Trade Desk performs impression attribution for your conversions, similar conversions will be considered duplicates if they are within this window. Set to zero to disable conversion de-duplication. |
| Country | string |  | The ISO 3166-1 alpha-2 country code that determines the appropriate policies and regulations to apply to the advertiser. _(maxLength 2)_ |
| CustomLabels | array<`CustomLabel_AssignedCustomLabel_put`> |  | Custom Labels assigned to this Advertiser. |
| DefaultBidLists | array<`DimensionalBidding_DefaultBidList_put`> |  | The default bid lists associated with this Advertiser.   Advertiser default bid lists:   - Are not automatically applied to the existing campaigns and ad groups under this advertiser.   - May be included as default bid lists in new campaigns for the advertiser, using the `IncludeDefaultsFromAdvertiser` parameter, and then further propagated to ad groups.   - Can be only of type Target or Block (inclusion or exclusion).   - Can include only the dimensions listed below.     - Brand Safety dimensions:       `HasIntegralBrandSafetyCategoryId`, `HasDoubleVerifyBrandSafetyCategoryId`, `HasIntegralVideoBrandSafetyCategoryId`, `HasPeer39BrandSafetyCategoryId`     - Page Quality dimensions:       `HasIntegralPageQualityCategoryId`, `HasIntegralVideoPageQualityCategoryId`, `HasPeer39PageQualityCategoryId`, `HasTencentPageQualityCategoryId`, `HasAdBugPageQualityCategoryId`, `HasAdBugVideoPageQualityCategoryId`, `HasRTBAsiaPageQualityCategoryId`, `HasRTBAsiaVideoPageQualityCategoryId`     - Viewability dimensions:       `HasDisplayViewabilityScoreRange`, `HasIntegralViewabilityCategoryId`, `HasVideoViewabilityScoreRange`, `HasDoubleVerifyViewabilityCategoryId`, `HasIntegralVideoViewabilityCategoryId`, `HasDoubleVerifyVideoViewabilityCategoryId`, `HasPeer39ViewabilityCategoryId`     - Other dimensions:       `HasAdsTxtSellerTypeId`, `HasGeoSegmentId`, `HasLanguageId`, `HasPeer39LanguageId`, `HasDomainFragmentId`, `HasSupplyVendorId`, `HasPrivateContractId` |
| DefaultRightMediaOfferTypeId | integer (int64) |  | Sets the default Right Media Offer Type (creative category) to use on newly-created creatives.   This property is required as of version 3 of the API. If an existing Advertiser does not have a default offer type set, this property will be omitted from the API's response.   Once set, new creatives that do not have an offer type specified on creation will inherit this offer type. Creatives that do not have a Right Media Offer Type will not be able to buy Right Media inventory until one is assigned.   See the Right Media Offer Type API for a full list of possible values. |
| Description | string |  | An optional description of the advertiser. _(nullable)_ |
| DomainAddress | string |  | The domain address (including http:// or https://) for the advertiser.   The maximum character length is 256. _(maxLength 256)_ |
| IgnoreReferralUrlInConversion | boolean |  | When The Trade Desk performs impression attribution for your conversions, if enabled, conversions with deduplication key different only in referral url are considered duplicates |
| Increments | array<string> |  | A list of frequency `CounterIds` to increment based on impressions served for this advertiser.   Frequency counter details can be retrieved from [Frequency Counter API](/v3/portal/api/ref/get-frequency-counter-counterid) _(nullable)_ |
| IsBallotMeasure | boolean |  | If set to `true`, indicates that this advertiser is running political advertising campaigns for a state or local ballot measure election. Here's what you need to know:       - The default value for this property is `false`.       - Required only for political advertisers for state or local ballot measure elections.   For details, see [Political Advertising for Ballot Measure Elections](/v3/portal/api/doc/PoliticalAdvertisingBallotMeasure). |
| IsCandidateElection | boolean |  | If set to `true`, indicates that this advertiser is running political advertising campaigns for a state, local, or federal election candidate and must include a candidate profile for each candidate. The default value for this property is `false`.   **IMPORTANT**: Required only for political advertisers for federal, state, or local, candidate elections. For details, see [Political Advertising](/v3/portal/api/doc/PoliticalAdvertising). |
| IsHecAutoExempt | boolean |  | If set to `true`, indicates that       - you are contractually required to target advertising within a primary or designated market area;       - the geography that you target with this campaign consists of the entirety of your contractual primary or designated market area; and       - you are in compliance with all applicable laws relating to the targeting of your advertisements.​   If set to `false`, you are categorized under the HEC (Housing, Employment, Credit) Industry, which requires you to comply to the following:       - Having a minimum reach threshold of over 1500 User IDS for all HEC ad groups       - If ZIP codes are applied, each ZIP code must include at least one neighboring ZIP code to ensure no ZIP codes are targeted in isolation.   **IMPORTANT**: Required only for Auto Buying and Selling advertisers. |
| IsIndependentExpenditure | boolean |  | If set to `true`, indicates that this advertiser is running political advertising campaigns for a state, local, or federal election. Here's what you need to know:       - The default value for this property is `false`.       - Required only for political advertisers for federal, state, or local elections.   For details, see [Political Advertising](/v3/portal/api/doc/PoliticalAdvertising). |
| Keywords | array<string> |  | Keywords that classify the advertiser. These can be individual words like "travel" or phrases like "deals website". The keywords will be normalized and duplicates will be removed. You may specify any number of keywords and each keyword can be up to 300 characters long. |
| LogoURL | string |  | The URL for the Advertiser's logo or brand image.     The API will throw an error if this is not a valid URL to an image.   While this is not a required attribute, it is recommended that this value be set because a LogoURL is necessary to bid on certain types of inventory from select supply vendors. _(nullable)_ |
| NewFrequencyConfigs | array<`Frequency_NewFrequencyConfig`> |  | Frequency configurations associated with this advertiser. For concepts and details on configuring frequency settings, see [Basic Frequency Configuration Guidelines](/v3/portal/api/doc/FrequencyConfigurationBasic).   Here's what you need to know:   - If at least one frequency configuration in the request is not valid, the whole request will fail. In this case, be sure to correct the invalid configuration and resend your request.     - The advertiser POST and PUT endpoints return this object in the response only if you include it in the request.   - The [GET /advertiser{advertiserId}](/v3/portal/api/ref/get-advertiser-advertiserid)  endpoint never returns this object. To retrieve frequency configurations for an advertiser, use the [POST/frequency/config/query](/v3/portal/api/ref/post-frequency-config-query) endpoint. |
| PayerNameDsa | string |  | The name of the entity paying for this advertiser's campaigns. The Digital Services Act (DSA) requires online platforms to declare the natural or legal person paying for the ad, if different from the advertiser.   Here's what you need to know about this property:   - This property is required by the DSA only for the EU. Otherwise, the property is optional and its value is set to `null` by default.   - If required and not specified, the `CustomerName` value is used by default.   **IMPORTANT**: It is your responsibility, as required under our Master Services Agreement, to ensure any information you provide to us is truthful and correct. If you fail to confirm the values, you agree to us using the default values.   For details or assistance, contact your Account Manager or Technical Account Manager. _(maxLength 64)_ |
| IndustryCategoryId | integer (int64) |  | The ID identifying the industry category in which this advertiser conducts business. Query the [Industry Category](/v3/portal/api/ref/get-category-industrycategories) endpoint for a full list of possible values. If an advertiser created prior to v3 does not have an `IndustryCategoryId` set, this property will not be returned in the response.      Special considerations apply to some features based on the advertiser industry category. Ad groups associated with advertisers assigned to some industry categories and sub-categories cannot use Koa Audience Predictor or Koa Audience Excluder. Some of these industries include Careers, Health and Fitness, Personal Finance, and Real Estate. _(DEPRECATED; deprecation: This property is deprecated in favor of AdvertiserCategory.CategoryId which has support for any industry category taxonomy.)_ |
| IndustryCategoryMapping | `Category_CategoryMapping` |  | With many IAB 1.0 and 2.2 categories matching, in this property, provide the ID of the category to which you want to map the category specified in the `IndustryCategoryId` property.   **NOTE**: If the IAB 1.0 category matches with only one category on IAB 2.2 then the value in this property will be ignored. Also, if the IAB 1.0 category matches with many categories on IAB 2.2 but the suggested category does not belong to the potential mappings then it will be ignored also. _(nullable; DEPRECATED; deprecation: This property is deprecated in favor of AdvertiserCategory.Mappings and it is for read only.)_ |
| IndustryCategoryTaxonomyId | integer (int32) |  | The ID of the industry category taxonomy to which the category specified in the `IndustryCategoryId` property belongs. _(DEPRECATED; deprecation: This property is deprecated in favor of AdvertiserCategory.CategoryTaxonomyId and it is for read only.)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_IdName`

| Field | Type | Required | Description |
|---|---|---|---|
| Id | string |  | The identifier for the object instance |
| Name | string |  | The name for the object instance |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_Advertiser_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`Advertiser_Advertiser`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TTD.DB.Provisioning.EntityFramework.Entities_AdvertiserVettingStatus`

Type: string enum(Approved, Rejected, Submitted)

### `Advertiser_AdvertiserAudienceSettings`

| Field | Type | Required | Description |
|---|---|---|---|
| AudienceExcluderEnabled | boolean |  | Now renamed Prism, it’s been enhanced to focus on the most valuable impressions by excluding irrelevant user-based and non-user-based signals that are unlikely to benefit a campaign.    **TIP**: In GraphQL API, use the new `prism` property to apply the Prism setting to ad groups created for this advertiser.   For details, see [Prism](/v3/portal/api/doc/Prism). |
| AudienceBoosterEnabled | boolean |  | _(DEPRECATED; deprecation: This property is deprecated at the advertiser level. You can continue to use it in ad group workflows.)_ |

### `Advertiser_AdvertiserCategory`

| Field | Type | Required | Description |
|---|---|---|---|
| CategoryId | integer (int64) |  | The ID of the category. |
| CategoryName | string |  | The name of the category. _(nullable)_ |
| CategoryTaxonomyId | integer (int32) |  | The ID of the taxonomy. |
| CategoryTaxonomyName | string |  | The name of the taxonomy. _(nullable)_ |
| CategoryTaxonomyVersion | string |  | The version of the taxonomy. _(nullable)_ |
| Mappings | array<`Category_CategoryMapping`> |  | The mappings between the industry category taxonomies (IAB 1.0 and IAB 2.2). This is read-only information. _(nullable)_ |

### `Category_CategoryMapping`

| Field | Type | Required | Description |
|---|---|---|---|
| CategoryId | integer (int64) |  | The ID of the category to which this category is mapped. |
| CategoryTaxonomyId | integer (int32) |  | The ID of the taxonomy to which categories this category is mapped. |
| ExternalId | string |  | The ID provided by the owner of the taxonomy (for example, IAB) to which this category is mapped. _(nullable)_ |

### `CustomLabel_AssignedCustomLabel`

| Field | Type | Required | Description |
|---|---|---|---|
| CustomLabelId | string |  | The Id of the label _(nullable)_ |

### `DimensionalBidding_AssociatedBidList`

| Field | Type | Required | Description |
|---|---|---|---|
| BidListAdjustmentType | `DimensionalBidding_BidListAdjustmentType` |  | The method for determining how the bid adjustment is applied when an impression doesn't match a bid line. This type is set when a bid list is created and cannot be changed afterward.   If an impression matches multiple bid lists with different bid list adjustment types, the bid adjustments are multiplied together to get the final bid. For example, if an impression gets a bid adjustment of 0.75 from an optimized list and a bid adjustment of 0 from a block list, the final bid adjustment is 0.75*0=0. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |
| BidListDimensions | array<`DimensionalBidding_DimensionDescriptor`> |  | A list of dimensions belonging to the bid list, such as ad format, device type, and domain fragment. This property is read-only. _(nullable)_ |
| BidListId | string |  | The platform ID of the bid list. It is ignored during creation. |
| BidListSource | `DimensionalBidding_BidListSource` |  | The source of this bid list. This property is read-only. |
| IsDefaultForDimension | boolean |  | If set to `true`, the bid list is the default for the specified dimension combination.   The default value is `false`. |
| IsEnabled | boolean |  | If set to `true`, the bid list adjustments are used in bidding.   The default value is `false`.   **IMPORTANT**: To avoid disabling the bid list and potential validation issues, be sure to set this property to `true` in PUT ad group calls. |

### `DimensionalBidding_DefaultBidList`

| Field | Type | Required | Description |
|---|---|---|---|
| BidListId | string |  | The platform ID of the bid list. |

### `Frequency_NewFrequencyConfig`

This class defines an embedded payload version of ` Frequency Config `, which can be used to  
create frequency configurations within PUT/POST requests of AdGroups, Campaigns, Advertisers, or Partners.  
This class offers limited functionality, and can only be used for creating basic frequency caps &amp; goals  
For more complex setups, the `Frequency Config` endpoint should be used.

| Field | Type | Required | Description |
|---|---|---|---|
| CounterId | string |  | The platform ID for the frequency counter.    If provided when creating a counter, this value is ignored. |
| CounterName | string |  | The counter name.    **IMPORTANT**: If provided, the name must contain only whitespace and alphanumeric characters. _(maxLength 512)_ |
| FrequencyCap | integer (int32) |  | The maximum number of ads to serve to a user in the specified period of time. |
| FrequencyGoal | integer (int32) |  | The preferred number of impressions to be targeted for a user. The platform optimizes toward the number of impressions set as the frequency goal. For example, users who have already seen an ad are favored to see another impression over unknown users until the specified frequency goal is reached.   It is not guaranteed every user will reach this target, because user behavior cannot be controlled. |
| ResetIntervalInMinutes | integer (int32) |  | The period of time (in minutes) during which the counter tracks a user's frequency count before resetting the count to 0.   For example, if a user received their first increment at 12:00 and this property was set to `5`, the counter will track frequency from 12:00 through 12:05 and then reset the count to 0. The next time a user appears, for example, at 15:15, the counter would track frequency from 15:15-15:20 and then reset the count to 0 again. See also [Frequency](/v3/portal/api/doc/Frequency).   **IMPORTANT**: This property value must be greater than 0. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability`

Type: string enum(Available, Archived)

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_CandidateProfile`

| Field | Type | Required | Description |
|---|---|---|---|
| AudienceDescription | string |  | The description of the audience that you want this campaign to target. The maximum length for this property value is 512 characters.   **IMPORTANT**: Applies only to political advertising for state or local election candidates in the state of Maryland. At least `AudienceDescription` or `GeoDescription` is required. For details, see [Political Advertising for State or Local Elections](/v3/portal/api/doc/PoliticalAdvertisingState). _(maxLength 512)_ |
| CandidateName | string |  | The full name of the candidate running for office. _(maxLength 64)_ |
| DisclaimerNotice | string |  | A legal disclaimer about who authorized and financed the political advertising campaigns for this candidate. The maximum length for this property value is 512 characters.   **NOTE**: This information will not be displayed on the transparency page linked to the creative. _(maxLength 512)_ |
| ElectionState | `TheTradeDesk.AdPlatform.Shared.DB.Provisioning_UsState` |  | The state in which the political advertising campaign will be run.   **IMPORTANT**: Required only for state or local candidates. For federal candidates, pass `null`. _(nullable)_ |
| FederalVerificationId | string |  | The identification number assigned to your organization by the Federal Election Commission (FEC). Here's what you need to know:       - Required only for federal elections.       - FEC registration numbers can take up to 24 hours to register.        - This enables the advertiser to be verified automatically.        - This information will not be displayed on the transparency page linked to the creative.   For details, see [Political Advertising for Federal Elections](/v3/portal/api/doc/PoliticalAdvertisingFederal). _(maxLength 512)_ |
| FileLocationInS3 | string |  | The Trade Desk Amazon S3 URL of the registration certificate from the New York State Board of Elections. Here's what you need know about the registration certificate:       - This certificate is required only for political advertising in the state of New York and if the advertiser is an Independent Expenditures Committee.       - To access The Trade Desk Amazon S3 bucket, contact your Account Manager.        - The file must be in the PDF, DOCX, or DOC format and uploaded to The Trade Desk Amazon S3 bucket available at `thetradedesk-general/PoliticalAdsNewYorkStateFiles`.   For details, see [Political Advertising](/v3/portal/api/doc/PoliticalAdvertising). _(maxLength 512)_ |
| GeoDescription | string |  | The description of the geographic area of where you want the campaigns to target. The maximum length for this property value is 512 characters.   **IMPORTANT**: Applies only to political advertising for state or local election candidates in the state of Maryland. At least `GeoDescription` or `AudienceDescription` is required. For details, see [Political Advertising for State or Local Elections](/v3/portal/api/doc/PoliticalAdvertisingState). _(maxLength 512)_ |
| IsAdvertiserIEC | boolean |  | If set to `true`, indicates that the political advertiser is an Independent Expenditures Committee.   **IMPORTANT**: Required only for political advertising in the state of New York. |
| OtherStateElectionId | string |  | _(maxLength 512)_ |
| PayingEntityAddress | string |  | The full mailing address of the entity who is paying to display political advertisements for this candidate. The maximum length for this property value is 512 characters. _(maxLength 512)_ |
| PayingEntityEmailAddress | string |  | The email address of the entity who is paying to display political advertisements for this candidate. The maximum length for this property value is 512 characters.   **NOTE**: This information will not be displayed on the transparency page linked to the creative. _(maxLength 512)_ |
| PayingEntityExecutiveName | string |  | The name of the executive representing the entity who is paying to display political advertisements for this candidate. The maximum length for this property value is 512 characters. _(maxLength 512)_ |
| PayingEntityExecutiveTitle | string |  | The role or official title of the executive who represents the entity who is paying to display political advertisements for this candidate. For example, CEO or Secretary-Treasurer. The maximum length for this property value is 512 characters. _(maxLength 512)_ |
| PayingEntityName | string |  | The name of the entity who is paying to display political advertisements for this candidate. The maximum length for this property value is 512 characters. _(maxLength 512)_ |
| PoliticalDataId | string |  | The unique ID of the candidate profile. This ID is generated after the advertiser is created.   **IMPORTANT**: Be sure to include this ID when creating or updating the creatives for this candidate. |
| StateVerificationId | string |  | The employer identification number (EIN) assigned to your organization assigned by the Internal Revenue Service (IRS) to verify your organization's identity. Here's what you need to know:       - Required only for political advertising for state or local elections.       - This information will not be displayed on the transparency page linked to the creative. _(maxLength 512)_ |

### `TheTradeDesk_CurrencyCode`

Type: string enum(None, AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF, BMD, BND, BOB, BRL, BSD, BTN, BWP, BYR, BZD, CAD, CDF, CHF, CLF, CLP, CNH, CNY, COP, CRC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ERN, ETB, EUR, FJD, FKP, GBP, GEL, GHS, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HRK, HTG, HUF, IDR, ILS, INR, IQD, IRR, ISK, JMD, JOD, JPY, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LTL, LVL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MRO, MUR, MVR, MWK, MXN, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SRD, STD, SVC, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD, TWD, TZS, UAH, UGX, USD, UYU, UZS, VEF, VND, VUV, WST, XAF, XCD, XDR, XOF, XPF, YER, ZAR, ZMW, ZWL)

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_AdvertiserSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `Advertiser_AdvertiserSortingField` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_Availability_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `AdGroup_AdGroupBidLineCounts`

| Field | Type | Required | Description |
|---|---|---|---|
| AdGroupBidLineCount | integer (int64) |  | The number of bidlines currently associated with the adgroup. |
| AdGroupBidLineLimit | integer (int64) |  | The maximum number of bidlines that can be associated with this adgroup. |
| AdGroupId | string |  | The ID of the adgroup. _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_AdvertiserSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `Advertiser_AdvertiserSortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `Advertiser_AdvertiserCategory_post`

| Field | Type | Required | Description |
|---|---|---|---|
| CategoryId | integer (int64) |  | The ID of the category. |

### `CustomLabel_AssignedCustomLabel_post`

| Field | Type | Required | Description |
|---|---|---|---|
| CustomLabelId | string | yes | The Id of the label |

### `DimensionalBidding_AssociatedBidList_post`

| Field | Type | Required | Description |
|---|---|---|---|
| BidListId | string | yes | The platform ID of the bid list. It is ignored during creation. |
| IsDefaultForDimension | boolean |  | If set to `true`, the bid list is the default for the specified dimension combination.   The default value is `false`. |
| IsEnabled | boolean |  | If set to `true`, the bid list adjustments are used in bidding.   The default value is `false`.   **IMPORTANT**: To avoid disabling the bid list and potential validation issues, be sure to set this property to `true` in PUT ad group calls. |

### `DimensionalBidding_DefaultBidList_post`

| Field | Type | Required | Description |
|---|---|---|---|
| BidListId | string | yes | The platform ID of the bid list. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_CandidateProfile_post`

| Field | Type | Required | Description |
|---|---|---|---|
| CandidateName | string | yes | The full name of the candidate running for office. _(maxLength 64)_ |
| PayingEntityAddress | string | yes | The full mailing address of the entity who is paying to display political advertisements for this candidate. The maximum length for this property value is 512 characters. _(maxLength 512)_ |
| PayingEntityExecutiveName | string | yes | The name of the executive representing the entity who is paying to display political advertisements for this candidate. The maximum length for this property value is 512 characters. _(maxLength 512)_ |
| PayingEntityExecutiveTitle | string | yes | The role or official title of the executive who represents the entity who is paying to display political advertisements for this candidate. For example, CEO or Secretary-Treasurer. The maximum length for this property value is 512 characters. _(maxLength 512)_ |
| PayingEntityName | string | yes | The name of the entity who is paying to display political advertisements for this candidate. The maximum length for this property value is 512 characters. _(maxLength 512)_ |
| AudienceDescription | string |  | The description of the audience that you want this campaign to target. The maximum length for this property value is 512 characters.   **IMPORTANT**: Applies only to political advertising for state or local election candidates in the state of Maryland. At least `AudienceDescription` or `GeoDescription` is required. For details, see [Political Advertising for State or Local Elections](/v3/portal/api/doc/PoliticalAdvertisingState). _(maxLength 512)_ |
| DisclaimerNotice | string |  | A legal disclaimer about who authorized and financed the political advertising campaigns for this candidate. The maximum length for this property value is 512 characters.   **NOTE**: This information will not be displayed on the transparency page linked to the creative. _(maxLength 512)_ |
| ElectionState | `TheTradeDesk.AdPlatform.Shared.DB.Provisioning_UsState` |  | The state in which the political advertising campaign will be run.   **IMPORTANT**: Required only for state or local candidates. For federal candidates, pass `null`. _(nullable)_ |
| FederalVerificationId | string |  | The identification number assigned to your organization by the Federal Election Commission (FEC). Here's what you need to know:       - Required only for federal elections.       - FEC registration numbers can take up to 24 hours to register.        - This enables the advertiser to be verified automatically.        - This information will not be displayed on the transparency page linked to the creative.   For details, see [Political Advertising for Federal Elections](/v3/portal/api/doc/PoliticalAdvertisingFederal). _(maxLength 512)_ |
| FileLocationInS3 | string |  | The Trade Desk Amazon S3 URL of the registration certificate from the New York State Board of Elections. Here's what you need know about the registration certificate:       - This certificate is required only for political advertising in the state of New York and if the advertiser is an Independent Expenditures Committee.       - To access The Trade Desk Amazon S3 bucket, contact your Account Manager.        - The file must be in the PDF, DOCX, or DOC format and uploaded to The Trade Desk Amazon S3 bucket available at `thetradedesk-general/PoliticalAdsNewYorkStateFiles`.   For details, see [Political Advertising](/v3/portal/api/doc/PoliticalAdvertising). _(maxLength 512)_ |
| GeoDescription | string |  | The description of the geographic area of where you want the campaigns to target. The maximum length for this property value is 512 characters.   **IMPORTANT**: Applies only to political advertising for state or local election candidates in the state of Maryland. At least `GeoDescription` or `AudienceDescription` is required. For details, see [Political Advertising for State or Local Elections](/v3/portal/api/doc/PoliticalAdvertisingState). _(maxLength 512)_ |
| IsAdvertiserIEC | boolean |  | If set to `true`, indicates that the political advertiser is an Independent Expenditures Committee.   **IMPORTANT**: Required only for political advertising in the state of New York. |
| OtherStateElectionId | string |  | _(maxLength 512)_ |
| PayingEntityEmailAddress | string |  | The email address of the entity who is paying to display political advertisements for this candidate. The maximum length for this property value is 512 characters.   **NOTE**: This information will not be displayed on the transparency page linked to the creative. _(maxLength 512)_ |
| PoliticalDataId | string |  | The unique ID of the candidate profile. This ID is generated after the advertiser is created.   **IMPORTANT**: Be sure to include this ID when creating or updating the creatives for this candidate. |
| StateVerificationId | string |  | The employer identification number (EIN) assigned to your organization assigned by the Internal Revenue Service (IRS) to verify your organization's identity. Here's what you need to know:       - Required only for political advertising for state or local elections.       - This information will not be displayed on the transparency page linked to the creative. _(maxLength 512)_ |

### `Advertiser_AdvertiserCategory_put`

| Field | Type | Required | Description |
|---|---|---|---|
| CategoryId | integer (int64) |  | The ID of the category. |

### `CustomLabel_AssignedCustomLabel_put`

| Field | Type | Required | Description |
|---|---|---|---|
| CustomLabelId | string | yes | The Id of the label |

### `DimensionalBidding_AssociatedBidList_put`

| Field | Type | Required | Description |
|---|---|---|---|
| BidListId | string | yes | The platform ID of the bid list. It is ignored during creation. |
| IsDefaultForDimension | boolean |  | If set to `true`, the bid list is the default for the specified dimension combination.   The default value is `false`. |
| IsEnabled | boolean |  | If set to `true`, the bid list adjustments are used in bidding.   The default value is `false`.   **IMPORTANT**: To avoid disabling the bid list and potential validation issues, be sure to set this property to `true` in PUT ad group calls. |

### `DimensionalBidding_DefaultBidList_put`

| Field | Type | Required | Description |
|---|---|---|---|
| BidListId | string | yes | The platform ID of the bid list. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_CandidateProfile_put`

| Field | Type | Required | Description |
|---|---|---|---|
| AudienceDescription | string |  | The description of the audience that you want this campaign to target. The maximum length for this property value is 512 characters.   **IMPORTANT**: Applies only to political advertising for state or local election candidates in the state of Maryland. At least `AudienceDescription` or `GeoDescription` is required. For details, see [Political Advertising for State or Local Elections](/v3/portal/api/doc/PoliticalAdvertisingState). _(maxLength 512)_ |
| CandidateName | string |  | The full name of the candidate running for office. _(maxLength 64)_ |
| DisclaimerNotice | string |  | A legal disclaimer about who authorized and financed the political advertising campaigns for this candidate. The maximum length for this property value is 512 characters.   **NOTE**: This information will not be displayed on the transparency page linked to the creative. _(maxLength 512)_ |
| ElectionState | `TheTradeDesk.AdPlatform.Shared.DB.Provisioning_UsState` |  | The state in which the political advertising campaign will be run.   **IMPORTANT**: Required only for state or local candidates. For federal candidates, pass `null`. _(nullable)_ |
| FederalVerificationId | string |  | The identification number assigned to your organization by the Federal Election Commission (FEC). Here's what you need to know:       - Required only for federal elections.       - FEC registration numbers can take up to 24 hours to register.        - This enables the advertiser to be verified automatically.        - This information will not be displayed on the transparency page linked to the creative.   For details, see [Political Advertising for Federal Elections](/v3/portal/api/doc/PoliticalAdvertisingFederal). _(maxLength 512)_ |
| FileLocationInS3 | string |  | The Trade Desk Amazon S3 URL of the registration certificate from the New York State Board of Elections. Here's what you need know about the registration certificate:       - This certificate is required only for political advertising in the state of New York and if the advertiser is an Independent Expenditures Committee.       - To access The Trade Desk Amazon S3 bucket, contact your Account Manager.        - The file must be in the PDF, DOCX, or DOC format and uploaded to The Trade Desk Amazon S3 bucket available at `thetradedesk-general/PoliticalAdsNewYorkStateFiles`.   For details, see [Political Advertising](/v3/portal/api/doc/PoliticalAdvertising). _(maxLength 512)_ |
| GeoDescription | string |  | The description of the geographic area of where you want the campaigns to target. The maximum length for this property value is 512 characters.   **IMPORTANT**: Applies only to political advertising for state or local election candidates in the state of Maryland. At least `GeoDescription` or `AudienceDescription` is required. For details, see [Political Advertising for State or Local Elections](/v3/portal/api/doc/PoliticalAdvertisingState). _(maxLength 512)_ |
| IsAdvertiserIEC | boolean |  | If set to `true`, indicates that the political advertiser is an Independent Expenditures Committee.   **IMPORTANT**: Required only for political advertising in the state of New York. |
| OtherStateElectionId | string |  | _(maxLength 512)_ |
| PayingEntityAddress | string |  | The full mailing address of the entity who is paying to display political advertisements for this candidate. The maximum length for this property value is 512 characters. _(maxLength 512)_ |
| PayingEntityEmailAddress | string |  | The email address of the entity who is paying to display political advertisements for this candidate. The maximum length for this property value is 512 characters.   **NOTE**: This information will not be displayed on the transparency page linked to the creative. _(maxLength 512)_ |
| PayingEntityExecutiveName | string |  | The name of the executive representing the entity who is paying to display political advertisements for this candidate. The maximum length for this property value is 512 characters. _(maxLength 512)_ |
| PayingEntityExecutiveTitle | string |  | The role or official title of the executive who represents the entity who is paying to display political advertisements for this candidate. For example, CEO or Secretary-Treasurer. The maximum length for this property value is 512 characters. _(maxLength 512)_ |
| PayingEntityName | string |  | The name of the entity who is paying to display political advertisements for this candidate. The maximum length for this property value is 512 characters. _(maxLength 512)_ |
| PoliticalDataId | string |  | The unique ID of the candidate profile. This ID is generated after the advertiser is created.   **IMPORTANT**: Be sure to include this ID when creating or updating the creatives for this candidate. |
| StateVerificationId | string |  | The employer identification number (EIN) assigned to your organization assigned by the Internal Revenue Service (IRS) to verify your organization's identity. Here's what you need to know:       - Required only for political advertising for state or local elections.       - This information will not be displayed on the transparency page linked to the creative. _(maxLength 512)_ |

### `DimensionalBidding_BidListAdjustmentType`

Type: string enum(BlockList, TargetList, Optimized)

### `DimensionalBidding_BidListSource`

Type: string enum(User, ManualRecommendation, AutoAppliedRecommendation, UserBulkEdit)

### `DimensionalBidding_DimensionDescriptor`

Type: string enum(UnknownDimension, HasAdFormatId, HasDomainFragmentId, HasUniversalCategoryTaxonomyId, HasAdvertiserTargetingDataId, HasBrowserId, HasCarrierId, HasDeviceModelId, HasDeviceTypeId, HasGeoSegmentId, HasHourOfWeek, HasLanguageId, HasOsId, HasPrivateContractId, HasRecencyWindowInMinutes, HasRenderingContextId, HasFactualGeostoreTargetingDataId, HasSupplyVendorId, HasTemperatureBucketInCelsius, HasThirdPartyData, HasAdsTxtSellerTypeId, HasVideoMutedStateId, HasVideoPlaybackTypeId, HasVideoPlayerSizeId, HasVideoQualityId, HasVideoSkippabilityId, HasFactualProximityDataId, HasImpressionPlacementId, HasVideoTruthScoreRange, HasVideoViewabilityScoreRange, HasDisplayViewabilityScoreRange, HasPeer39LanguageId, HasIntegralContextualCategoryId, HasPeer39ContextualCategoryId, HasDoubleVerifyContextualCategoryId, HasIntegralBrandSafetyCategoryId, HasIntegralVideoBrandSafetyCategoryId, HasPeer39BrandSafetyCategoryId, HasDoubleVerifyBrandSafetyCategoryId, HasIntegralPageQualityCategoryId, HasIntegralVideoPageQualityCategoryId, HasPeer39PageQualityCategoryId, HasDoubleVerifyBotAvoidanceCategoryId, HasContextualAppCategoryId, HasPublisherId, HasIntegralViewabilityCategoryId, HasIntegralVideoViewabilityCategoryId, HasDoubleVerifyViewabilityCategoryId, HasDoubleVerifyVideoViewabilityCategoryId, HasFrequencyAdjustmentId, HasPeer39ViewabilityCategoryId, HasVideoCompletionRateScoreRange, HasInternetConnectionTypeId, HasRTBAsiaPageQualityCategoryId, HasRTBAsiaVideoPageQualityCategoryId, HasTTDContextualCategoryId, HasSupplyPathOptimizationListId, HasMarketTypeId, HasContextualSupplyVendorGenreId, HasContextualSupplyVendorCategoryId, HasWeatherConditionId, HasFrequencyV2AdjustmentId, HasSemasioContextualCategoryId, HasSellerId, HasDigitalOutOfHomeVenueTypeId, HasNativePlacementTypeId, HasTTDNativeContextTypeId, HasDomainClassId, HasGeofenceThirdPartyDataAndBrand, HasPreBidContextualCategoryId, HasTencentPageQualityCategoryId, HasContentGenre, HasContentLivestream, HasContentProductionQuality, HasContentRating, HasContentDuration, HasTVQualityIndexRange, HasAtmosphericCondition, HasMarketplaceId, HasAudienceReachPercentageTierId, HasAdLoadCategory, HasFullReferrerUrl, HasLikelyRefreshRate, HasContentTransparency, HasIdiosyncraticSegmentId, HasRewarded, HasSellerRelationshipTypeId, HasAdToContentRatioRange, HasAdsInViewRange, HasExtendedZipCodeGroupSegmentThirdPartyDataId, HasContentLanguage)

### `TheTradeDesk.AdPlatform.Shared.DB.Provisioning_UsState`

Type: string enum(Alabama, Alaska, Arkansas, Arizona, California, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Iowa, Idaho, Illinois, Indiana, Kansas, Kentucky, Louisiana, Massachusetts, Maryland, Maine, Michigan, Minnesota, Missouri, Mississippi, Montana, NorthCarolina, NorthDakota, Nebraska, NewHampshire, NewJersey, NewMexico, Nevada, NewYork, Oklahoma, Ohio, Oregon, Pennsylvania, RhodeIsland, SouthCarolina, SouthDakota, Tennessee, Texas, Utah, Virginia, Vermont, Washington, Wisconsin, WestVirginia, Wyoming, WashingtonDC)

### `Advertiser_AdvertiserSortingField`

Type: string enum(Name, Description)

