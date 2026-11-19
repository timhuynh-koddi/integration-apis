# Ad Group

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 13

---

## GET /v3/adgroup/{adGroupId}

**DEPRECATED.** We recommend using the [`adGroup` query](/v3/portal/api/gql-doc/ad-group) in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work.

Get an existing Ad Group.

Operation ID: `get-adgroup-adgroupid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| adGroupId | path | string | yes |  |

**Response 200** (`application/json`): `AdGroup_AdGroup`

---

## GET /v3/adgroup/query/facets

The facets of Ad Groups that can be queried.

Operation ID: `get-adgroup-query-facets`

**Response 200** (`application/json`): `AdGroup_AdGroupFacets`

---

## POST /v3/adgroup/query/campaign

**DEPRECATED.** We recommend using the [`adGroups` query](/v3/portal/api/gql-doc/ad-groups) with filtering, or the [`campaign` → `adGroups` query](/v3/portal/api/gql-doc/campaign), in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work.

Look up and optionally filter a list of ad groups for a specified campaign.

Operation ID: `post-adgroup-query-campaign`

**Request body** (`application/json`, required): `AdGroup_AdGroupQueryForCampaign`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_AdGroup_`

---

## POST /v3/adgroup/query/advertiser

**DEPRECATED.** We recommend using the [`adGroups` query](/v3/portal/api/gql-doc/ad-groups) with filtering, or the [`advertiser` → `adGroups` query](/v3/portal/api/gql-doc/advertiser), in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work.

Look up and optionally filter a list of ad groups for a specified advertiser.

Operation ID: `post-adgroup-query-advertiser`

**Request body** (`application/json`, required): `AdGroup_AdGroupQueryForAdvertiser`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_AdGroup_`

---

## GET /v3/adgroup/status/{adGroupId}

Get the status of an Ad Group.

Operation ID: `get-adgroup-status-adgroupid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| adGroupId | path | string | yes |  |

**Response 200** (`application/json`): `AdGroup_AdGroupStatus`

---

## GET /v3/adgroup/name/{adGroupId}

Get the identifier and name for an AdGroup based on identifier

Operation ID: `get-adgroup-name-adgroupid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| adGroupId | path | string | yes |  |

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_IdName`

---

## POST /v3/adgroup

Create a new Ad Group.

Operation ID: `post-adgroup`

**Request body** (`application/json`, required): `AdGroup_AdGroup_post`

**Response 200** (`application/json`): `AdGroup_AdGroup`

---

## PUT /v3/adgroup

Update an existing Ad Group.

Operation ID: `put-adgroup`

**Request body** (`application/json`, required): `AdGroup_AdGroup_put`

**Response 200** (`application/json`): `AdGroup_AdGroup`

---

## POST /v3/adgroup/query/campaign/template

Look up and optionally filter a list of ad groups for a specified campaign template.

Operation ID: `post-adgroup-query-campaign-template`

**Request body** (`application/json`, required): `AdGroup_AdGroupQueryForCampaign`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_AdGroup_`

---

## GET /v3/adgroup/analyticsreport/{adGroupId}

Get the analytics report(s) for an existing Ad Group.

Operation ID: `get-adgroup-analyticsreport-adgroupid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| adGroupId | path | string | yes |  |

**Response 200** (`application/json`): `AdGroup_AdGroupAnalyticsReport`

---

## PUT /v3/adgroup/status

Enable or disable a given Ad Group.

Operation ID: `put-adgroup-status`

**Request body** (`application/json`, required): `AdGroup_AdGroupStatus_put`

**Response 200** (`application/json`): `AdGroup_AdGroupStatus`

---

## GET /v3/adgroup/koarecommendations/{adGroupId}

Retrieve the current list of available optimizations recommended by Koa for the specified ad group.

Operation ID: `get-adgroup-koarecommendations-adgroupid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| adGroupId | path | string | yes |  |

**Response 200** (`application/json`): `AdGroup_RecommendationApiModel`

---

## GET /v3/adgroup/koaapplieditems/{adGroupId}

Retrieve Koa optimizations applied to the specified ad group, including impact and last attempt details. For details and code samples [Koa Optimizations](/v3/portal/api/doc/KoaOptimizations).

Operation ID: `get-adgroup-koaapplieditems-adgroupid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| adGroupId | path | string | yes |  |

**Response 200** (`application/json`): `AdGroup_AppliedItemsApiModel`

---

## Schemas

### `AdGroup_AdGroup`

| Field | Type | Required | Description |
|---|---|---|---|
| AdGroupCategory | `AdGroup_AdGroupCategory` |  | The industry category information pertaining to this ad group. Here's what you need to know about ad group categories:   - Only the `CategoryId` property is required on create and update.   - To default to the advertiser's industry category, set this property to `null`.   - To retrieve the full industry category taxonomy, use the [GET /v3/categorytaxonomy/{categoryTaxonomyId}/category/industrycategories](/v3/portal/api/ref/get-categorytaxonomy-categorytaxonomyid-category-industrycategories) endpoint, where the `{categoryTaxonomyId}` can be `2` for the 1.0 taxonomy or `13` for the 2.2 taxonomy. You can also retrieve the taxonomy ID by using the [GET /v3/categorytaxonomy/industrycategorytaxonomies](/v3/portal/api/ref/get-categorytaxonomy-industrycategorytaxonomies).   For more details and examples, see the _API Updates_ section in [Industry Category Taxonomy Migration](/v3/portal/api/doc/UpgradeSupportCategoryTaxonomy#api-updates). _(nullable)_ |
| AdGroupId | string |  | The ID of the Ad Group. Ignored on create, when an ID will be assigned and returned by The Trade Desk. _(nullable)_ |
| AdGroupName | string |  | The name of the Ad Group. _(maxLength 256)_ |
| AreFutureKoaFeaturesEnabled | boolean |  | Get or set whether future Koa features will be enabled for this Ad Group automatically. |
| AssociatedBidLists | array<`DimensionalBidding_AssociatedBidList`> |  | The BidLists that are associated with this ad group.   If a BidList is associated, and enabled then its adjustments will be applied during bidding.   When updating the list via a PUT, the entire contents and all settings are replaced with the new values. _(nullable)_ |
| Availability | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability` |  | Whether the ad group is active and available for normal operation or archived and hidden from normal view. If not specified, the default value is `Available`.      When creating an ad group, this property can only be set to `Available`. Once an ad group is updated to `Archived`, it cannot be set back to `Available`. |
| BudgetingVersion | `TTD.DB.Provisioning.Primitives.Campaign_CampaignBudgetingVersion` |  | The budgeting used for the campaign that owns the ad group. This property is only returned if the budgeting version is Kokai. For details, see [Ad Groups](/v3/portal/api/doc/AdGroup). |
| CampaignId | string |  | The ID of the Campaign that owns this Ad Group. _(nullable)_ |
| ChannelId | `TTD.DB.Provisioning.Primitives.AdGroup_AdGroupChannel` |  | The channel for the ad group that is used to inform bidding behavior and provide recommendations and insights. For example, if you choose `Display`, we'll buy only display content for that ad group. Here's what you need to know about this property:   - The ad group creative type must match the channel.   - You cannot update the channel after the flight starts.    For details, see [Channels](/v3/portal/api/doc/Channel). _(KOKAI: Though present in Solimar, this property is not used to inform bidding behavior.)_ |
| CreatedAtUTC | string (date-time) |  | The date and time in UTC the ad group was created.   This field is read-only. _(nullable)_ |
| CurrentAndFutureAdditionalFeeCards | array<`PassThroughFee_AdditionalFeeCard`> |  | The additional fee card that is currently active and future fee cards for ad group.   This is a read-only field. To create, update or disable fees, use the additional fees endpoints. _(nullable)_ |
| CustomLabels | array<`CustomLabel_AssignedCustomLabel`> |  | Custom Labels assigned to this Ad Group. |
| Description | string |  | An optional description of the Ad Group. _(maxLength 2048)_ |
| EnabledValueAddedProviderIds | array<integer (int32)> |  | IDs of third-party providers enabled to set rates and bill for their services rendered to the client managing this ad group.   This field should be nulled if your partner or advertiser seat does not have any value-added providers enabled. _(nullable)_ |
| FunnelLocation | `TTD.DB.Provisioning.Primitives.AdGroup_AdGroupFunnelLocation` |  | The funnel location that identifies the focus or objective of the ad group. For details, see [Ad Groups](/v3/portal/api/doc/AdGroup). |
| HighFillAttributes | `AdGroup_HighFillAdGroupAttributes` |  | The High-Fill attributes of High-Fill Ad Group (i.e. when IsHighFillRate is true).   On create, exactly one Ad Group attributes property must be specified on any given High-Fill Ad Group. The type of Ad Group may not be changed after creation.   Cannot be set on any RTB Ad Group. _(nullable)_ |
| IncludeDefaultsFromCampaign | boolean |  | The default value is false. If set to true, all default bid lists associated with the campaign are automatically applied this ad group upon its creation.  If the same bid list is already applied to the ad group, it will be included only once. The applied lists can be removed, as needed.   This field is only used for POST.  It is not used on PUT. |
| Increments | array<string> |  | A list of frequency `CounterIds` to increment based on impressions served for this ad group.   Frequency counter details can be retrieved from [Frequency Counter API](/v3/portal/api/ref/get-frequency-counter-counterid) |
| IsEnabled | boolean |  | Whether the Ad Group is enabled to spend. If this is not specified on create, the Ad Group will be disabled until it is explicitly enabled. |
| IsHighFillRate | boolean |  | Whether the Ad Group is a high fill rate Ad Group. This property may only be specified on create and may not be updated thereafter. A high fill rate ad group allows for a limited set of attributes to be set in RTBAttributes and it may only target a single contract that must be a programmatic guaranteed high fill rate contract. |
| MarketplaceOptOut | boolean |  | When ad group is created in Kokai campaign and campaign Marketplace setting is on,   it will be automatically opted into it. This flag allows to opt-out from this behavior.   Applicable only on creation. Will not be returned when ad group information is returned. |
| NewBidLists | array<`DimensionalBidding_NewBidList`> |  | The BidLists that will be created and associated with this AdGroup.   If one of those bidlist is not valid it will fail the adgroup creation and update and they will need to be retried after correcting the offending bid list. |
| NewFrequencyConfigs | array<`Frequency_NewFrequencyConfig`> |  | Frequency configurations associated with this ad group. For concepts and details on configuring frequency settings, see [Basic Frequency Configuration Guidelines](/v3/portal/api/doc/FrequencyConfigurationBasic).   Here's what you need to know:   - If at least one frequency configuration in the request is not valid, the whole request will fail. In this case, be sure to correct the invalid configuration and resend your request.     - The ad group POST and PUT endpoints return this object in the response only if you include it in the request.   - The [GET /adgroup{adGroupId}](/v3/portal/api/ref/get-adgroup-adgroupid) endpoint never returns this object. To retrieve frequency configurations for an ad group, use the [POST/frequency/config/query](/v3/portal/api/ref/post-frequency-config-query) endpoint. |
| PredictiveClearingEnabled | boolean |  | If set to `true`, enables Koa to analyze historical clearing prices to find a lower, optimal bid for each impression served in a first-price auction. For details, see [Predictive Clearing](/v3/portal/api/doc/PredictiveClearing).   The default value for this property is `false`. |
| RTBAttributes | `AdGroup_RTBAdGroupAttributes` |  | The RTB attributes of the ad group.   On create, exactly one ad group attributes property must be specified on any given RTB ad group. The type of ad group may not be changed after creation.   Cannot be set on any High-Fill ad group. _(nullable)_ |
| AdBrainHouseholdCrossDeviceEnabled | boolean |  | Set whether the AdBrain household cross-device graph is enabled for this ad group. If not specified, the default value is `false`, which means that the graph is disabled.    *IMPORTANT**: Use the `RTBAttributes.AudienceTargeting.CrossDeviceVendorListForAudience` property instead. For details, see [Cross-Device Targeting](/v3/portal/api/doc/CrossDeviceTargeting). _(DEPRECATED; deprecation: This attribute is deprecated in favor of setting cross device through `RTBAttributes.AudienceTargeting.CrossDeviceVendorListForAudience`.)_ |
| EnabledValueAddedProviders | array<`TheTradeDesk.AdPlatform.Shared.DB.Provisioning_ValueAddedProvider`> |  | A list of third-party providers enabled to set rates and bill for their services rendered to the client managing this ad group.   This field should be nulled if your partner or advertiser seat does not have any value-added providers enabled. _(nullable; DEPRECATED; deprecation: This property is deprecated. Please use AdGroup.EnabledValueAddedProviderIds instead.)_ |
| IndustryCategoryId | integer (int64) |  | An ID identifying the industry category to which this ad group belongs.   The full taxonomy of industry categories can be retrieved via the 'industrycategories' GET method.   Set to null to default to the advertiser's industry category, if it has been categorized. If the advertiser has not yet been categorized, IndustryCategoryId must not be null. _(nullable; DEPRECATED; deprecation: This property is deprecated in favor of `AdGroupCategory.CategoryId`. For details, see [Industry Category Taxonomy Migration](/v3/portal/api/doc/UpgradeSupportCategoryTaxonomy).)_ |
| IndustryCategoryMapping | `Category_CategoryMapping` |  | With many IAB 1.0 and 2.2 categories matching, in this property, provide the ID of the category to which you want to map the category specified in the `IndustryCategoryId` property.   **NOTE**: If the IAB 1.0 category matches with only one category on IAB 2.2 then the value in this property will be ignored. Also, if the IAB 1.0 category matches with many categories on IAB 2.2 but the suggested category does not belong to the potential mappings then it will be ignored also. _(nullable; DEPRECATED; deprecation: This property is deprecated in favor of `AdGroupCategory.Mappings`. For details, see [Industry Category Taxonomy Migration](/v3/portal/api/doc/UpgradeSupportCategoryTaxonomy).)_ |
| IndustryCategoryTaxonomyId | integer (int32) |  | The ID of the industry category taxonomy to which the category specified in the `IndustryCategoryId` property belongs. _(DEPRECATED; deprecation: This property is deprecated in favor of `AdGroupCategory.CategoryTaxonomyId`. For details, see [Industry Category Taxonomy Migration](/v3/portal/api/doc/UpgradeSupportCategoryTaxonomy).)_ |
| LastUpdatedAtUTC | string (date-time) |  | The date and time in UTC the Ad Group was last updated.   This field is read-only _(nullable; DEPRECATED; deprecation: This attribute is deprecated in favor of the delta endpoints. Its value should not be used.)_ |
| UseIdentityAlliance | boolean |  | Get or set whether the selection of the cross device graphs used to extend the ad group's targeting is controlled by the system. Identity Alliance will choose the most effective cross device graph for each impression according to the ad group's goal.   **IMPORTANT**: Use the `RTBAttributes.AudienceTargeting.CrossDeviceVendorListForAudience` property instead. For details, see [Cross-Device Targeting](/v3/portal/api/doc/CrossDeviceTargeting). _(DEPRECATED; deprecation: This attribute is deprecated in favor of setting cross device through `RTBAttributes.AudienceTargeting.CrossDeviceVendorListForAudience`.)_ |

### `AdGroup_AdGroupAnalyticsReport`

| Field | Type | Required | Description |
|---|---|---|---|
| AdGroupId | string |  | The Ad Group to which the analytics reports belong. _(nullable)_ |
| ComscoreAnalyticsReport | `Comscore_ComscoreAnalyticsReport` |  | The Comscore Analytics report for the Ad Group.   A Null ComscoreAnalyticsReport would mean that Comscore has not been enabled for the Ad Group. _(nullable)_ |
| ComscoreEnabled | boolean |  | The boolean that indicates whether Comscore has been enabled for the Ad Group.   If this value is false, the ComscoreAnalyticsReport will be Null. |
| NielsenAnalyticsReport | `Nielsen_NielsenAnalyticsReport` |  | The Nielsen Analytics report for the Ad Group.   A Null NielsenAnalyticsReport would mean that Nielsen has not been enabled for the Ad Group. _(nullable)_ |
| NielsenEnabled | boolean |  | The boolean that indicates whether Nielsen has been enabled for the Ad Group.   If this value is false, the NielsenAnalyticsReport will be Null. |

### `AdGroup_AdGroupFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| Availabilities | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_Availability_`> |  | The Availability states by which Ad Groups my be filtered in a query. This list may be extended at any time, so please design accordingly. |
| SortingFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_AdGroupSortingField_`> |  | The fields by which Ad Groups may be sorted in a query. This list may be extended at any time, so please design accordingly. |

### `AdGroup_AdGroupQueryForAdvertiser`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser that owns the Ad Groups |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| Availabilities | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability`> |  | A list of Availability states by which to filter the returned Ad Groups. See GET adgroup/query/facets for the list of possible availabilities.   If not specified, empty, or null, only Available Ad Groups will be returned. _(nullable)_ |
| IsTemplateAdGroups | boolean |  | Whether to return Ad Groups for campaign templates. Excludes campaign templates by default |
| SearchTerms | array<string> |  | A list of search terms by which to filter the returned Ad Groups. All terms must be matched in the Ad Group ID, Campaign ID, name, description or type in order for an Ad Group to match.   If not specified, empty, or null, this property is ignored. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_AdGroupSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed. See GET adgroup/query/facets for the list of possible sort field IDs for Ad Groups.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by Name ascending. _(nullable)_ |

### `AdGroup_AdGroupQueryForCampaign`

| Field | Type | Required | Description |
|---|---|---|---|
| CampaignId | string | yes | The ID of the Campaign that owns the Ad Groups |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| Availabilities | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability`> |  | A list of Availability states by which to filter the returned Ad Groups. See GET adgroup/query/facets for the list of possible availabilities.   If not specified, empty, or null, only Available Ad Groups will be returned. _(nullable)_ |
| SearchTerms | array<string> |  | A list of search terms by which to filter the returned Ad Groups. All terms must be matched in the Ad Group ID, Campaign ID, name, description or type in order for an Ad Group to match.   If not specified, empty, or null, this property is ignored. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_AdGroupSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed. See GET adgroup/query/facets for the list of possible sort field IDs for Ad Groups.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by Name ascending. _(nullable)_ |

### `AdGroup_AdGroupStatus`

| Field | Type | Required | Description |
|---|---|---|---|
| AdGroupId | string |  | The ID of the Ad Group. |
| IsEnabled | boolean |  | Whether the Ad Group is enabled to spend. |

### `AdGroup_AdGroupStatus_put`

| Field | Type | Required | Description |
|---|---|---|---|
| AdGroupId | string | yes | The ID of the Ad Group. |
| IsEnabled | boolean |  | Whether the Ad Group is enabled to spend. |

### `AdGroup_AdGroup_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdGroupName | string | yes | The name of the Ad Group. _(maxLength 256)_ |
| CampaignId | string | yes | The ID of the Campaign that owns this Ad Group. |
| AdGroupCategory | `AdGroup_AdGroupCategory_post` |  | The industry category information pertaining to this ad group. Here's what you need to know about ad group categories:   - Only the `CategoryId` property is required on create and update.   - To default to the advertiser's industry category, set this property to `null`.   - To retrieve the full industry category taxonomy, use the [GET /v3/categorytaxonomy/{categoryTaxonomyId}/category/industrycategories](/v3/portal/api/ref/get-categorytaxonomy-categorytaxonomyid-category-industrycategories) endpoint, where the `{categoryTaxonomyId}` can be `2` for the 1.0 taxonomy or `13` for the 2.2 taxonomy. You can also retrieve the taxonomy ID by using the [GET /v3/categorytaxonomy/industrycategorytaxonomies](/v3/portal/api/ref/get-categorytaxonomy-industrycategorytaxonomies).   For more details and examples, see the _API Updates_ section in [Industry Category Taxonomy Migration](/v3/portal/api/doc/UpgradeSupportCategoryTaxonomy#api-updates). _(nullable)_ |
| AreFutureKoaFeaturesEnabled | boolean |  | Get or set whether future Koa features will be enabled for this Ad Group automatically. |
| AssociatedBidLists | array<`DimensionalBidding_AssociatedBidList_post`> |  | The BidLists that are associated with this ad group.   If a BidList is associated, and enabled then its adjustments will be applied during bidding.   When updating the list via a PUT, the entire contents and all settings are replaced with the new values. _(nullable)_ |
| Availability | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability` |  | Whether the ad group is active and available for normal operation or archived and hidden from normal view. If not specified, the default value is `Available`.      When creating an ad group, this property can only be set to `Available`. Once an ad group is updated to `Archived`, it cannot be set back to `Available`. |
| ChannelId | `TTD.DB.Provisioning.Primitives.AdGroup_AdGroupChannel` |  | The channel for the ad group that is used to inform bidding behavior and provide recommendations and insights. For example, if you choose `Display`, we'll buy only display content for that ad group. Here's what you need to know about this property:   - The ad group creative type must match the channel.   - You cannot update the channel after the flight starts.    For details, see [Channels](/v3/portal/api/doc/Channel). _(KOKAI: Though present in Solimar, this property is not used to inform bidding behavior.)_ |
| CustomLabels | array<`CustomLabel_AssignedCustomLabel_post`> |  | Custom Labels assigned to this Ad Group. |
| Description | string |  | An optional description of the Ad Group. _(maxLength 2048)_ |
| EnabledValueAddedProviderIds | array<integer (int32)> |  | IDs of third-party providers enabled to set rates and bill for their services rendered to the client managing this ad group.   This field should be nulled if your partner or advertiser seat does not have any value-added providers enabled. _(nullable)_ |
| FunnelLocation | `TTD.DB.Provisioning.Primitives.AdGroup_AdGroupFunnelLocation` |  | The funnel location that identifies the focus or objective of the ad group. For details, see [Ad Groups](/v3/portal/api/doc/AdGroup). |
| HighFillAttributes | `AdGroup_HighFillAdGroupAttributes_post` |  | The High-Fill attributes of High-Fill Ad Group (i.e. when IsHighFillRate is true).   On create, exactly one Ad Group attributes property must be specified on any given High-Fill Ad Group. The type of Ad Group may not be changed after creation.   Cannot be set on any RTB Ad Group. _(nullable)_ |
| IncludeDefaultsFromCampaign | boolean |  | The default value is false. If set to true, all default bid lists associated with the campaign are automatically applied this ad group upon its creation.  If the same bid list is already applied to the ad group, it will be included only once. The applied lists can be removed, as needed.   This field is only used for POST.  It is not used on PUT. |
| Increments | array<string> |  | A list of frequency `CounterIds` to increment based on impressions served for this ad group.   Frequency counter details can be retrieved from [Frequency Counter API](/v3/portal/api/ref/get-frequency-counter-counterid) |
| IsEnabled | boolean |  | Whether the Ad Group is enabled to spend. If this is not specified on create, the Ad Group will be disabled until it is explicitly enabled. |
| IsHighFillRate | boolean |  | Whether the Ad Group is a high fill rate Ad Group. This property may only be specified on create and may not be updated thereafter. A high fill rate ad group allows for a limited set of attributes to be set in RTBAttributes and it may only target a single contract that must be a programmatic guaranteed high fill rate contract. |
| MarketplaceOptOut | boolean |  | When ad group is created in Kokai campaign and campaign Marketplace setting is on,   it will be automatically opted into it. This flag allows to opt-out from this behavior.   Applicable only on creation. Will not be returned when ad group information is returned. |
| NewBidLists | array<`DimensionalBidding_NewBidList_post`> |  | The BidLists that will be created and associated with this AdGroup.   If one of those bidlist is not valid it will fail the adgroup creation and update and they will need to be retried after correcting the offending bid list. |
| NewFrequencyConfigs | array<`Frequency_NewFrequencyConfig`> |  | Frequency configurations associated with this ad group. For concepts and details on configuring frequency settings, see [Basic Frequency Configuration Guidelines](/v3/portal/api/doc/FrequencyConfigurationBasic).   Here's what you need to know:   - If at least one frequency configuration in the request is not valid, the whole request will fail. In this case, be sure to correct the invalid configuration and resend your request.     - The ad group POST and PUT endpoints return this object in the response only if you include it in the request.   - The [GET /adgroup{adGroupId}](/v3/portal/api/ref/get-adgroup-adgroupid) endpoint never returns this object. To retrieve frequency configurations for an ad group, use the [POST/frequency/config/query](/v3/portal/api/ref/post-frequency-config-query) endpoint. |
| PredictiveClearingEnabled | boolean |  | If set to `true`, enables Koa to analyze historical clearing prices to find a lower, optimal bid for each impression served in a first-price auction. For details, see [Predictive Clearing](/v3/portal/api/doc/PredictiveClearing).   The default value for this property is `false`. |
| RTBAttributes | `AdGroup_RTBAdGroupAttributes_post` |  | The RTB attributes of the ad group.   On create, exactly one ad group attributes property must be specified on any given RTB ad group. The type of ad group may not be changed after creation.   Cannot be set on any High-Fill ad group. _(nullable)_ |
| AdBrainHouseholdCrossDeviceEnabled | boolean |  | Set whether the AdBrain household cross-device graph is enabled for this ad group. If not specified, the default value is `false`, which means that the graph is disabled.    *IMPORTANT**: Use the `RTBAttributes.AudienceTargeting.CrossDeviceVendorListForAudience` property instead. For details, see [Cross-Device Targeting](/v3/portal/api/doc/CrossDeviceTargeting). _(DEPRECATED; deprecation: This attribute is deprecated in favor of setting cross device through `RTBAttributes.AudienceTargeting.CrossDeviceVendorListForAudience`.)_ |
| EnabledValueAddedProviders | array<`TheTradeDesk.AdPlatform.Shared.DB.Provisioning_ValueAddedProvider`> |  | A list of third-party providers enabled to set rates and bill for their services rendered to the client managing this ad group.   This field should be nulled if your partner or advertiser seat does not have any value-added providers enabled. _(nullable; DEPRECATED; deprecation: This property is deprecated. Please use AdGroup.EnabledValueAddedProviderIds instead.)_ |
| IndustryCategoryId | integer (int64) |  | An ID identifying the industry category to which this ad group belongs.   The full taxonomy of industry categories can be retrieved via the 'industrycategories' GET method.   Set to null to default to the advertiser's industry category, if it has been categorized. If the advertiser has not yet been categorized, IndustryCategoryId must not be null. _(nullable; DEPRECATED; deprecation: This property is deprecated in favor of `AdGroupCategory.CategoryId`. For details, see [Industry Category Taxonomy Migration](/v3/portal/api/doc/UpgradeSupportCategoryTaxonomy).)_ |
| IndustryCategoryMapping | `Category_CategoryMapping` |  | With many IAB 1.0 and 2.2 categories matching, in this property, provide the ID of the category to which you want to map the category specified in the `IndustryCategoryId` property.   **NOTE**: If the IAB 1.0 category matches with only one category on IAB 2.2 then the value in this property will be ignored. Also, if the IAB 1.0 category matches with many categories on IAB 2.2 but the suggested category does not belong to the potential mappings then it will be ignored also. _(nullable; DEPRECATED; deprecation: This property is deprecated in favor of `AdGroupCategory.Mappings`. For details, see [Industry Category Taxonomy Migration](/v3/portal/api/doc/UpgradeSupportCategoryTaxonomy).)_ |
| IndustryCategoryTaxonomyId | integer (int32) |  | The ID of the industry category taxonomy to which the category specified in the `IndustryCategoryId` property belongs. _(DEPRECATED; deprecation: This property is deprecated in favor of `AdGroupCategory.CategoryTaxonomyId`. For details, see [Industry Category Taxonomy Migration](/v3/portal/api/doc/UpgradeSupportCategoryTaxonomy).)_ |
| UseIdentityAlliance | boolean |  | Get or set whether the selection of the cross device graphs used to extend the ad group's targeting is controlled by the system. Identity Alliance will choose the most effective cross device graph for each impression according to the ad group's goal.   **IMPORTANT**: Use the `RTBAttributes.AudienceTargeting.CrossDeviceVendorListForAudience` property instead. For details, see [Cross-Device Targeting](/v3/portal/api/doc/CrossDeviceTargeting). _(DEPRECATED; deprecation: This attribute is deprecated in favor of setting cross device through `RTBAttributes.AudienceTargeting.CrossDeviceVendorListForAudience`.)_ |

### `AdGroup_AdGroup_put`

| Field | Type | Required | Description |
|---|---|---|---|
| AdGroupId | string | yes | The ID of the Ad Group. Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| AdGroupCategory | `AdGroup_AdGroupCategory_put` |  | The industry category information pertaining to this ad group. Here's what you need to know about ad group categories:   - Only the `CategoryId` property is required on create and update.   - To default to the advertiser's industry category, set this property to `null`.   - To retrieve the full industry category taxonomy, use the [GET /v3/categorytaxonomy/{categoryTaxonomyId}/category/industrycategories](/v3/portal/api/ref/get-categorytaxonomy-categorytaxonomyid-category-industrycategories) endpoint, where the `{categoryTaxonomyId}` can be `2` for the 1.0 taxonomy or `13` for the 2.2 taxonomy. You can also retrieve the taxonomy ID by using the [GET /v3/categorytaxonomy/industrycategorytaxonomies](/v3/portal/api/ref/get-categorytaxonomy-industrycategorytaxonomies).   For more details and examples, see the _API Updates_ section in [Industry Category Taxonomy Migration](/v3/portal/api/doc/UpgradeSupportCategoryTaxonomy#api-updates). _(nullable)_ |
| AdGroupName | string |  | The name of the Ad Group. _(maxLength 256)_ |
| AreFutureKoaFeaturesEnabled | boolean |  | Get or set whether future Koa features will be enabled for this Ad Group automatically. |
| AssociatedBidLists | array<`DimensionalBidding_AssociatedBidList_put`> |  | The BidLists that are associated with this ad group.   If a BidList is associated, and enabled then its adjustments will be applied during bidding.   When updating the list via a PUT, the entire contents and all settings are replaced with the new values. _(nullable)_ |
| Availability | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability` |  | Whether the ad group is active and available for normal operation or archived and hidden from normal view. If not specified, the default value is `Available`.      When creating an ad group, this property can only be set to `Available`. Once an ad group is updated to `Archived`, it cannot be set back to `Available`. |
| CampaignId | string |  | The ID of the Campaign that owns this Ad Group. _(nullable)_ |
| ChannelId | `TTD.DB.Provisioning.Primitives.AdGroup_AdGroupChannel` |  | The channel for the ad group that is used to inform bidding behavior and provide recommendations and insights. For example, if you choose `Display`, we'll buy only display content for that ad group. Here's what you need to know about this property:   - The ad group creative type must match the channel.   - You cannot update the channel after the flight starts.    For details, see [Channels](/v3/portal/api/doc/Channel). _(KOKAI: Though present in Solimar, this property is not used to inform bidding behavior.)_ |
| CustomLabels | array<`CustomLabel_AssignedCustomLabel_put`> |  | Custom Labels assigned to this Ad Group. |
| Description | string |  | An optional description of the Ad Group. _(maxLength 2048)_ |
| EnabledValueAddedProviderIds | array<integer (int32)> |  | IDs of third-party providers enabled to set rates and bill for their services rendered to the client managing this ad group.   This field should be nulled if your partner or advertiser seat does not have any value-added providers enabled. _(nullable)_ |
| FunnelLocation | `TTD.DB.Provisioning.Primitives.AdGroup_AdGroupFunnelLocation` |  | The funnel location that identifies the focus or objective of the ad group. For details, see [Ad Groups](/v3/portal/api/doc/AdGroup). |
| HighFillAttributes | `AdGroup_HighFillAdGroupAttributes_put` |  | The High-Fill attributes of High-Fill Ad Group (i.e. when IsHighFillRate is true).   On create, exactly one Ad Group attributes property must be specified on any given High-Fill Ad Group. The type of Ad Group may not be changed after creation.   Cannot be set on any RTB Ad Group. _(nullable)_ |
| Increments | array<string> |  | A list of frequency `CounterIds` to increment based on impressions served for this ad group.   Frequency counter details can be retrieved from [Frequency Counter API](/v3/portal/api/ref/get-frequency-counter-counterid) |
| IsEnabled | boolean |  | Whether the Ad Group is enabled to spend. If this is not specified on create, the Ad Group will be disabled until it is explicitly enabled. |
| NewBidLists | array<`DimensionalBidding_NewBidList_put`> |  | The BidLists that will be created and associated with this AdGroup.   If one of those bidlist is not valid it will fail the adgroup creation and update and they will need to be retried after correcting the offending bid list. |
| NewFrequencyConfigs | array<`Frequency_NewFrequencyConfig`> |  | Frequency configurations associated with this ad group. For concepts and details on configuring frequency settings, see [Basic Frequency Configuration Guidelines](/v3/portal/api/doc/FrequencyConfigurationBasic).   Here's what you need to know:   - If at least one frequency configuration in the request is not valid, the whole request will fail. In this case, be sure to correct the invalid configuration and resend your request.     - The ad group POST and PUT endpoints return this object in the response only if you include it in the request.   - The [GET /adgroup{adGroupId}](/v3/portal/api/ref/get-adgroup-adgroupid) endpoint never returns this object. To retrieve frequency configurations for an ad group, use the [POST/frequency/config/query](/v3/portal/api/ref/post-frequency-config-query) endpoint. |
| PredictiveClearingEnabled | boolean |  | If set to `true`, enables Koa to analyze historical clearing prices to find a lower, optimal bid for each impression served in a first-price auction. For details, see [Predictive Clearing](/v3/portal/api/doc/PredictiveClearing).   The default value for this property is `false`. |
| RTBAttributes | `AdGroup_RTBAdGroupAttributes_put` |  | The RTB attributes of the ad group.   On create, exactly one ad group attributes property must be specified on any given RTB ad group. The type of ad group may not be changed after creation.   Cannot be set on any High-Fill ad group. _(nullable)_ |
| AdBrainHouseholdCrossDeviceEnabled | boolean |  | Set whether the AdBrain household cross-device graph is enabled for this ad group. If not specified, the default value is `false`, which means that the graph is disabled.    *IMPORTANT**: Use the `RTBAttributes.AudienceTargeting.CrossDeviceVendorListForAudience` property instead. For details, see [Cross-Device Targeting](/v3/portal/api/doc/CrossDeviceTargeting). _(DEPRECATED; deprecation: This attribute is deprecated in favor of setting cross device through `RTBAttributes.AudienceTargeting.CrossDeviceVendorListForAudience`.)_ |
| EnabledValueAddedProviders | array<`TheTradeDesk.AdPlatform.Shared.DB.Provisioning_ValueAddedProvider`> |  | A list of third-party providers enabled to set rates and bill for their services rendered to the client managing this ad group.   This field should be nulled if your partner or advertiser seat does not have any value-added providers enabled. _(nullable; DEPRECATED; deprecation: This property is deprecated. Please use AdGroup.EnabledValueAddedProviderIds instead.)_ |
| IndustryCategoryId | integer (int64) |  | An ID identifying the industry category to which this ad group belongs.   The full taxonomy of industry categories can be retrieved via the 'industrycategories' GET method.   Set to null to default to the advertiser's industry category, if it has been categorized. If the advertiser has not yet been categorized, IndustryCategoryId must not be null. _(nullable; DEPRECATED; deprecation: This property is deprecated in favor of `AdGroupCategory.CategoryId`. For details, see [Industry Category Taxonomy Migration](/v3/portal/api/doc/UpgradeSupportCategoryTaxonomy).)_ |
| IndustryCategoryMapping | `Category_CategoryMapping` |  | With many IAB 1.0 and 2.2 categories matching, in this property, provide the ID of the category to which you want to map the category specified in the `IndustryCategoryId` property.   **NOTE**: If the IAB 1.0 category matches with only one category on IAB 2.2 then the value in this property will be ignored. Also, if the IAB 1.0 category matches with many categories on IAB 2.2 but the suggested category does not belong to the potential mappings then it will be ignored also. _(nullable; DEPRECATED; deprecation: This property is deprecated in favor of `AdGroupCategory.Mappings`. For details, see [Industry Category Taxonomy Migration](/v3/portal/api/doc/UpgradeSupportCategoryTaxonomy).)_ |
| IndustryCategoryTaxonomyId | integer (int32) |  | The ID of the industry category taxonomy to which the category specified in the `IndustryCategoryId` property belongs. _(DEPRECATED; deprecation: This property is deprecated in favor of `AdGroupCategory.CategoryTaxonomyId`. For details, see [Industry Category Taxonomy Migration](/v3/portal/api/doc/UpgradeSupportCategoryTaxonomy).)_ |
| UseIdentityAlliance | boolean |  | Get or set whether the selection of the cross device graphs used to extend the ad group's targeting is controlled by the system. Identity Alliance will choose the most effective cross device graph for each impression according to the ad group's goal.   **IMPORTANT**: Use the `RTBAttributes.AudienceTargeting.CrossDeviceVendorListForAudience` property instead. For details, see [Cross-Device Targeting](/v3/portal/api/doc/CrossDeviceTargeting). _(DEPRECATED; deprecation: This attribute is deprecated in favor of setting cross device through `RTBAttributes.AudienceTargeting.CrossDeviceVendorListForAudience`.)_ |

### `AdGroup_AppliedItemsApiModel`

| Field | Type | Required | Description |
|---|---|---|---|
| IncompatibleFeatures | array<`AdGroup_KoaIncompatibleFeature`> |  | A list of features or user settings that interfere with the ability of Koa to generate optimal recommendations for the ad group. _(nullable)_ |
| OptimizationMode | `AdGroup_KoaOptimizationsMode` |  | The optimization mode that Koa used for generating recommendations for the ad group based on the `IsBiddingUpEnabled` setting for handling CPM. |
| Optimizations | array<`AdGroup_KoaOptDetailsApiModel`> |  | A list of optimizations recommended by Koa that have been applied to the ad group. _(nullable)_ |
| PotentialImpact | `AdGroup_ImpactApiModel` |  | A summary of the expected changes in goal performance and potential spend based on optimizations recommended by Koa for the ad group. _(nullable)_ |
| UpdateAttemptDetails | `AdGroup_OptimizationUpdateAttemptApiModel` |  | The details of the most recent attempt to apply optimizations. _(nullable)_ |

### `AdGroup_RecommendationApiModel`

This read-only class shows the recommendations available to be applied to an adgroup.

| Field | Type | Required | Description |
|---|---|---|---|
| HasRecommendations | boolean |  | Indicates whether new Koa recommendations are available for this ad group:   - If set to `true`, new recommendations are available. In this case, both `PotentialImpact` and `RecommendedOptimizations` objects are populated.   - If set to `false`, no new recommendations are available at this moment. |
| PotentialImpact | `AdGroup_ImpactApiModel` |  | A summary of the expected changes in goal performance and potential spend based on optimizations recommended by Koa for the ad group. _(nullable)_ |
| RecommendedOptimizations | array<`AdGroup_KoaOptDetailsApiModel`> |  | A list of optimizations recommended by Koa, which can be applied to the ad group. _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_IdName`

| Field | Type | Required | Description |
|---|---|---|---|
| Id | string |  | The identifier for the object instance |
| Name | string |  | The name for the object instance |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_AdGroup_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`AdGroup_AdGroup`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TTD.DB.Provisioning.Primitives.AdGroup_AdGroupChannel`

Type: string enum(Other, Display, Video, Audio, Native, NativeDisplay, NativeVideo, TV, TVPersonal, OutOfHome, Mixed)

### `TTD.DB.Provisioning.Primitives.AdGroup_AdGroupFunnelLocation`

Type: string enum(None, Awareness, Consideration, Conversion)

### `TTD.DB.Provisioning.Primitives.Campaign_CampaignBudgetingVersion`

Type: string enum(Solimar, Kokai)

### `AdGroup_AdGroupCategory`

| Field | Type | Required | Description |
|---|---|---|---|
| CategoryId | integer (int64) |  | The ID of the category. |
| CategoryName | string |  | The name of the category. _(nullable)_ |
| CategoryTaxonomyId | integer (int32) |  | The ID of the taxonomy. |
| CategoryTaxonomyName | string |  | The name of the taxonomy. _(nullable)_ |
| CategoryTaxonomyVersion | string |  | The version of the taxonomy. _(nullable)_ |
| Mappings | array<`Category_CategoryMapping`> |  | The mappings between the industry category taxonomies (IAB 1.0 and IAB 2.2). This is read-only information. _(nullable)_ |

### `AdGroup_HighFillAdGroupAttributes`

| Field | Type | Required | Description |
|---|---|---|---|
| BaseBidCPM | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | Read-only field.    The base bid CPM is automatically set to the floor price of the targeted contract. The value returned is the floor price in the currency of the Advertiser that owns the Ad Group. _(nullable)_ |
| BudgetSettings | `AdGroup_AdGroupBudgetSettings` |  | Settings for how much and how fast the Ad Group may spend. |
| CreativeIds | array<string> |  | The complete list of Creative IDs the Ad Group can serve. If the Ad Group has no associated Creatives, it will not serve! See the Creative API for a complete list of this Advertiser's Creatives. |
| GuaranteedPrivateContractId | string |  | The guaranteed-type Contract driving the High-Fill (a.k.a. Programmatic Guaranteed) Ad Group settings, which can be either a Programmatic Guaranteed Contract or a Publisher Direct Guaranteed Contract.   Ad Group Base and Max Bid values are automatically set to the floor price of the Contract at the time of bidding.   This property may only be specified on create and may not be updated thereafter. |
| MaxBidCPM | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | Read-only field.    The maximum bid CPM is automatically set to the floor price of the targeted contract. The value returned is the floor price in the currency of the Advertiser that owns the Ad Group. _(nullable)_ |

### `AdGroup_RTBAdGroupAttributes`

| Field | Type | Required | Description |
|---|---|---|---|
| AudienceTargeting | `AdGroup_AdGroupAudienceTargeting` |  | Details of the Audience this Ad Group targets and how that Audience is targeted. If you are not targeting an Audience, you do not need to specify this. |
| BaseBidCPM | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The base bid CPM to use before applying bid adjustments. This must be in the currency of the Advertiser that owns the Ad Group. When specified, this must be greater than or equal to the minimum base bid threshold set for the Partner. |
| BudgetSettings | `AdGroup_AdGroupBudgetSettings` |  | Settings for how much and how fast the Ad Group may spend. |
| ComscoreSettings | `AdGroup_ComscoreSettings` |  | The Comscore settings demographic targeting settings for the ad group.   Use this to define the demographics to be reported on in Comscore’s key metrics report. Comscore reporting will involve a fee that is specified in the fee attribute of this property. |
| ContractTargeting | `AdGroup_AdGroupContractTargeting` |  | The adjustments to apply to Contracts and Contract Groups. |
| CreativeIds | array<string> |  | The complete list of Creative IDs the Ad Group can serve. If the Ad Group has no associated Creatives, it will not serve! See the Creative API for a complete list of this Advertiser's Creatives. |
| DimensionalBiddingAutoOptimizationSettings | array<array<`DimensionalBidding_DimensionDescriptor`>> |  | Specify AutoOptimization for ad groups.        Specify a list of BidListDimensions from the enumeration below, keeping in mind that certain ROIGoals only support specific dimensions.           \| ROI Goal \| BidListDimensions \|   \| :--- \| ---------------------------------------------: \|   \| CPC \|   \|   \| CTR \|   \|   \| CPCV \| HasAdFormatId \|   \| Reach \| HasDeviceTypeId \|   \| ROAS \| HasDomainFragmentId \|   \| VCPM \| HasGeoSegmentId \|   \| VCR \| HasSupplyVendorId \|   \| Viewability \|   \|   \|   \|   \|   \|   \|   \|   \| **ROI Goal** \| **BidListDimensions** \|   \| CPC \|   \|   \| CTR \| HasAdvertiserTargetingDataId \|   \| VCR \| HasThirdPartyDataId \|   \|   \|   \|   \|   \|   \|   \| **ROI Goal** \| **BidListDimensions** \|   \|   \| HasAdFormatId \|   \|   \| HasAdvertiserTargetingDataId \|   \|   \| HasDeviceTypeId \|   \| CPA \| HasDomainFragmentId \|   \|   \| HasGeoSegmentId \|   \|   \| HasSupplyVendorId \|   \|   \| HasThirdPartyDataId \|   \|   \|   \|   \|   \|   \|   \| **ROI Goal** \| **BidListDimensions** \|   \| GRP \| These goal types do not support any \|   \| OPT \| DimensionalBiddingAutoOptimizationSettings. \|            On create and update, AutoOptimization settings are turned on for dimensions specified. AutoOptimization settings are turned off for all dimensions not specified in the update request. |
| DisplayViewabilityStandardIntegral | `TTD.API.PublicAPI.Contracts.Models.AdGroup_ViewabilityStandardIntegral` |  | Viewability standard used for Integral display viewability targeting. |
| IsUseClicksAsConversionsEnabled | boolean |  | Controls whether clicks may be counted as primary conversions when conversion data is sparse for optimizing toward conversion-based goals. |
| IsUseSecondaryConversionsEnabled | boolean |  | Controls whether secondary conversions may be counted as primary conversions when conversion data is sparse for optimizing toward conversion-based goals. |
| KoaOptimizationSettings | `AdGroup_KoaOptimizationSettings` |  | Specify Optional Koa Optimization for ad groups. _(nullable)_ |
| KoaOptimizationsMinorVersion | string |  | A read-only property that specifies the minor version within the major version of Koa defined by the `KoaOptimizationsVersion` property.    For example, if `KoaOptimizationsVersion` is set to `V3` and this property is set to `5`, the resulting version is `V3.5`, which is the single-dimension Koa version used in Kokai. _(KOKAI: This property applies only to Kokai ad groups.)_ |
| KoaOptimizationsVersion | `AdGroup_KoaOptimizationsVersion` |  | A read-only property that specifies the major version of Koa used to apply optimizations to the ad group. This property works in conjunction with the `KoaOptimizationsMinorVersion` value to define the complete version number, such as `V3.5`.   For details on the ad group properties and endpoints that correspond to each version, see the enumerated list of string values that follows. |
| MaxBidCPM | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The maximum the Ad Group will ever bid on a single impression. This caps the amount bid adjustments can raise the bid. This must be in the currency of the Advertiser that owns the Ad Group. |
| NielsenSettings | `AdGroup_NielsenSettings` |  | The Nielsen settings for the Adgroup.  Enabling Nielsen tracking involves a fee as indicated within this property. |
| QualityAllianceViewabilityProfile | `AdGroup_QualityAllianceViewabilityProfile` |  | Viewability profile used for Quality Alliance viewability targeting. |
| ROIGoal | `AdGroup_ROIGoal` |  | The Return On Investment (ROI) goal allows you to measure success of the ad group. If you have no specific goal in mind, you do not need to specify any when you create the ad group.    - All goal properties are mutually exclusive, which means that only one goal property may be specified at a time.    - Setting a goal property removes any previously set property.   - Setting a Boolean property values to `false` removes the goal.   - To keep the currently set goal when updating the ad group, omit this object from the update request, or send it empty.   - To remove the currently set goal altogether, set this goal object to `null`. _(nullable)_ |
| VideoViewabilityStandardIntegral | `TTD.API.PublicAPI.Contracts.Models.AdGroup_ViewabilityStandardIntegral` |  | Viewability standard used for Integral video viewability targeting. |

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

### `DimensionalBidding_NewBidList`

This class extends the bid list class with the information required to associate it with an ad group.

| Field | Type | Required | Description |
|---|---|---|---|
| BidLines | array<`DimensionalBidding_BidLine`> |  | The list of bid lines used with the resolution type to calculate the bid list adjustment. All bid lines in the bid list must have the same dimensions except for the bid adjustment.   For example, if Bid Line 1 sets the `DomainFragment` property to `test.com`, Bid Line 2 must also set this property and can optionally set the bid adjustment. Do not set any other optional dimensions.   For details, see [Bid Lists](/v3/portal/api/doc/BidList). |
| BidListAdjustmentType | `DimensionalBidding_BidListAdjustmentType` |  | The method for determining how the bid adjustment is applied when an impression doesn't match a bid line. This type is set when a bid list is created and cannot be changed afterward.   If an impression matches multiple bid lists with different bid list adjustment types, the bid adjustments are multiplied together to get the final bid. For example, if an impression gets a bid adjustment of 0.75 from an optimized list and a bid adjustment of 0 from a block list, the final bid adjustment is 0.75*0=0. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |
| BidListDimensions | array<`DimensionalBidding_DimensionDescriptor`> |  | A list of dimensions belonging to the bid list, such as ad format, device type, and domain fragment. This property is read-only. _(nullable)_ |
| BidListId | string |  | The platform ID of the bid list. It is ignored during creation. |
| IsDefaultForDimension | boolean |  | If set to `true`, the bid list is the default for the specified dimension combination.   The default value is `false`. |
| IsEnabled | boolean |  | If set to `true`, the bid list adjustments are used in bidding.   The default value is `false`.   **IMPORTANT**: To avoid disabling the bid list and potential validation issues, be sure to set this property to `true` in PUT ad group calls. |
| Name | string |  | The name of the bid list. Bid list names typically describe the dimension and adjustment type, such as "Site/App Target List". The maximum character length is 512. |
| ResolutionType | `DimensionalBidding_MultipleMatchResolutionType` |  | The method for determining how the bid adjustment is applied when an impression matches multiple bid lines in a bid list. We recommend using `ApplyMultiplyAdjustment` for all bid lists. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |

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

### `PassThroughFee_AdditionalFeeCard`

| Field | Type | Required | Description |
|---|---|---|---|
| Fees | array<`PassThroughFee_AdditionalFeeQuery`> |  | The collection of fees to be applied to the entity as of the start date. _(nullable)_ |
| OwnerId | string |  | The ID of the entity that owns the additional fee card. _(nullable)_ |
| OwnerType | string |  | The type of the entity that owns the additional fee card ("campaign" or "adgroup"). _(nullable)_ |
| StartDateUtc | string (date-time) |  | Start Date in UTC. The date and time at which the attached fees will take effect. New fee cards and updates to existing fee cards must have a start date at least an hour into the future. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability`

Type: string enum(Available, Archived)

### `TheTradeDesk.AdPlatform.Shared.DB.Provisioning_ValueAddedProvider`

Type: string enum(None, Scibids, FluzoItaly, FluzoPortugal, FluzoSpain, Dstillery, chaliceai, Beatgrid, PlaygroundXyz, Fluzo, LumenDisplay, LumenVideo, LumenCTV, Wootag, Yobi, Adelaide, Peer39VAP, NovaDisplay, NovaVideo, NovaCTV, SpacebackDisplay, SpacebackInBannerVideo, SpacebackVideo, SpacebackCTV, SpacebackAudio, FedGovtAU, KinessoAU, SpacebackEnhancedDisplay, AmplifiedIntelligence, TheWeatherCompanyBidFactor, Rembrand, SeenThisDisplay, AdelaideDisplay, AdelaideVideo, AdelaideCTV, FluzoGermany, FluzoFrance, FluzoUK, csolTccc, csolTmobileCPA, csolVcpmOptimisation, BarometerAudio, csolCciAPI, csolPMXcc, AderizeDisplay, AderizeVideo, AderizeCTV, NewtonAI, NovaDOOH, Octane11B2BStandard, Octane11B2BSelect, Octane11B2BPlatform, AirtoryDisplay, AirtoryVideo, AirtoryDOOH)

### `Comscore_ComscoreAnalyticsReport`

| Field | Type | Required | Description |
|---|---|---|---|
| DemographicMemberMeasurements | array<`Comscore_DemographicMemberMeasurement`> |  | Includes metrics broken out by additional demographic groups (ex: males 18-20, 21-24 etc) associated for the Ad Group.   An empty list of DemographicMemberMeasurements would indicate that the report data is not available. _(nullable)_ |
| GeoMarketMeasurements | array<`Comscore_GeoMarketMeasurement`> |  | Includes metrics broken down by countries (example: US, UK etc.).    An empty list of GeoMarketMeasurements would indicate that the report data is not available. _(nullable)_ |
| KeyMetricsMeasurements | `Comscore_KeyMetricsMeasurements` |  | Includes the main metrics for the Ad Group, based on the country and demographic target you are trying to reach.    A Null KeyMetricsMeasurements value would indicate that the report data is not available. _(nullable)_ |
| LocalMarketMeasurements | array<`Comscore_LocalMarketMeasurement`> |  | Includes metrics broken by Designated Market Areas (DMAs) within the country (population) you are targeting for the Ad Group.   An empty list of LocalMarketMeasurements would indicate that the report data is not available. _(nullable)_ |

### `Nielsen_NielsenAnalyticsReport`

| Field | Type | Required | Description |
|---|---|---|---|
| CountryDemographicMeasurements | array<`Nielsen_CountryDemographicMeasurement`> |  | Includes metrics broken out by additional demographic groups (ex: males 18-20, 21-24 etc) within countries.   An empty list of CountryDemographicMeasurements would indicate that the report data is not available. _(nullable)_ |
| GeoMeasurements | array<`Nielsen_GeoMeasurement`> |  | Includes metrics broken down by countries (example: US, UK etc.).    An empty list of GeoMeasurements would indicate that the report data is not available. _(nullable)_ |
| NetGrpScore | number (double) |  | The Net Gross Rating point score. |
| NetOnTargetPrecent | number (double) |  | The Net Impressions served that were on target. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_AdGroupSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `AdGroup_AdGroupSortingField` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_Availability_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_AdGroupSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `AdGroup_AdGroupSortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `AdGroup_AdGroupCategory_post`

| Field | Type | Required | Description |
|---|---|---|---|
| CategoryId | integer (int64) |  | The ID of the category. |

### `AdGroup_HighFillAdGroupAttributes_post`

| Field | Type | Required | Description |
|---|---|---|---|
| BudgetSettings | `AdGroup_AdGroupBudgetSettings_post` | yes | Settings for how much and how fast the Ad Group may spend. |
| GuaranteedPrivateContractId | string | yes | The guaranteed-type Contract driving the High-Fill (a.k.a. Programmatic Guaranteed) Ad Group settings, which can be either a Programmatic Guaranteed Contract or a Publisher Direct Guaranteed Contract.   Ad Group Base and Max Bid values are automatically set to the floor price of the Contract at the time of bidding.   This property may only be specified on create and may not be updated thereafter. |
| CreativeIds | array<string> |  | The complete list of Creative IDs the Ad Group can serve. If the Ad Group has no associated Creatives, it will not serve! See the Creative API for a complete list of this Advertiser's Creatives. |

### `AdGroup_RTBAdGroupAttributes_post`

| Field | Type | Required | Description |
|---|---|---|---|
| BaseBidCPM | `TTD.Domain.Shared.Http.Metadata.Models_Money` | yes | The base bid CPM to use before applying bid adjustments. This must be in the currency of the Advertiser that owns the Ad Group. When specified, this must be greater than or equal to the minimum base bid threshold set for the Partner. |
| MaxBidCPM | `TTD.Domain.Shared.Http.Metadata.Models_Money` | yes | The maximum the Ad Group will ever bid on a single impression. This caps the amount bid adjustments can raise the bid. This must be in the currency of the Advertiser that owns the Ad Group. |
| AudienceTargeting | `AdGroup_AdGroupAudienceTargeting_post` |  | Details of the Audience this Ad Group targets and how that Audience is targeted. If you are not targeting an Audience, you do not need to specify this. |
| BudgetSettings | `AdGroup_AdGroupBudgetSettings_post` |  | Settings for how much and how fast the Ad Group may spend. |
| ComscoreSettings | `AdGroup_ComscoreSettings` |  | The Comscore settings demographic targeting settings for the ad group.   Use this to define the demographics to be reported on in Comscore’s key metrics report. Comscore reporting will involve a fee that is specified in the fee attribute of this property. |
| ContractTargeting | `AdGroup_AdGroupContractTargeting_post` |  | The adjustments to apply to Contracts and Contract Groups. |
| CreativeIds | array<string> |  | The complete list of Creative IDs the Ad Group can serve. If the Ad Group has no associated Creatives, it will not serve! See the Creative API for a complete list of this Advertiser's Creatives. |
| DimensionalBiddingAutoOptimizationSettings | array<array<`DimensionalBidding_DimensionDescriptor`>> |  | Specify AutoOptimization for ad groups.        Specify a list of BidListDimensions from the enumeration below, keeping in mind that certain ROIGoals only support specific dimensions.           \| ROI Goal \| BidListDimensions \|   \| :--- \| ---------------------------------------------: \|   \| CPC \|   \|   \| CTR \|   \|   \| CPCV \| HasAdFormatId \|   \| Reach \| HasDeviceTypeId \|   \| ROAS \| HasDomainFragmentId \|   \| VCPM \| HasGeoSegmentId \|   \| VCR \| HasSupplyVendorId \|   \| Viewability \|   \|   \|   \|   \|   \|   \|   \|   \| **ROI Goal** \| **BidListDimensions** \|   \| CPC \|   \|   \| CTR \| HasAdvertiserTargetingDataId \|   \| VCR \| HasThirdPartyDataId \|   \|   \|   \|   \|   \|   \|   \| **ROI Goal** \| **BidListDimensions** \|   \|   \| HasAdFormatId \|   \|   \| HasAdvertiserTargetingDataId \|   \|   \| HasDeviceTypeId \|   \| CPA \| HasDomainFragmentId \|   \|   \| HasGeoSegmentId \|   \|   \| HasSupplyVendorId \|   \|   \| HasThirdPartyDataId \|   \|   \|   \|   \|   \|   \|   \| **ROI Goal** \| **BidListDimensions** \|   \| GRP \| These goal types do not support any \|   \| OPT \| DimensionalBiddingAutoOptimizationSettings. \|            On create and update, AutoOptimization settings are turned on for dimensions specified. AutoOptimization settings are turned off for all dimensions not specified in the update request. |
| DisplayViewabilityStandardIntegral | `TTD.API.PublicAPI.Contracts.Models.AdGroup_ViewabilityStandardIntegral` |  | Viewability standard used for Integral display viewability targeting. |
| IsUseClicksAsConversionsEnabled | boolean |  | Controls whether clicks may be counted as primary conversions when conversion data is sparse for optimizing toward conversion-based goals. |
| IsUseSecondaryConversionsEnabled | boolean |  | Controls whether secondary conversions may be counted as primary conversions when conversion data is sparse for optimizing toward conversion-based goals. |
| KoaOptimizationSettings | `AdGroup_KoaOptimizationSettings` |  | Specify Optional Koa Optimization for ad groups. _(nullable)_ |
| KoaOptimizationsVersion | `AdGroup_KoaOptimizationsVersion` |  | A read-only property that specifies the major version of Koa used to apply optimizations to the ad group. This property works in conjunction with the `KoaOptimizationsMinorVersion` value to define the complete version number, such as `V3.5`.   For details on the ad group properties and endpoints that correspond to each version, see the enumerated list of string values that follows. |
| NielsenSettings | `AdGroup_NielsenSettings_post` |  | The Nielsen settings for the Adgroup.  Enabling Nielsen tracking involves a fee as indicated within this property. |
| QualityAllianceViewabilityProfile | `AdGroup_QualityAllianceViewabilityProfile` |  | Viewability profile used for Quality Alliance viewability targeting. |
| ROIGoal | `AdGroup_ROIGoal` |  | The Return On Investment (ROI) goal allows you to measure success of the ad group. If you have no specific goal in mind, you do not need to specify any when you create the ad group.    - All goal properties are mutually exclusive, which means that only one goal property may be specified at a time.    - Setting a goal property removes any previously set property.   - Setting a Boolean property values to `false` removes the goal.   - To keep the currently set goal when updating the ad group, omit this object from the update request, or send it empty.   - To remove the currently set goal altogether, set this goal object to `null`. _(nullable)_ |
| VideoViewabilityStandardIntegral | `TTD.API.PublicAPI.Contracts.Models.AdGroup_ViewabilityStandardIntegral` |  | Viewability standard used for Integral video viewability targeting. |

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

### `AdGroup_AdGroupCategory_put`

| Field | Type | Required | Description |
|---|---|---|---|
| CategoryId | integer (int64) |  | The ID of the category. |

### `AdGroup_HighFillAdGroupAttributes_put`

| Field | Type | Required | Description |
|---|---|---|---|
| BudgetSettings | `AdGroup_AdGroupBudgetSettings_put` |  | Settings for how much and how fast the Ad Group may spend. |
| CreativeIds | array<string> |  | The complete list of Creative IDs the Ad Group can serve. If the Ad Group has no associated Creatives, it will not serve! See the Creative API for a complete list of this Advertiser's Creatives. |
| GuaranteedPrivateContractId | string |  | The guaranteed-type Contract driving the High-Fill (a.k.a. Programmatic Guaranteed) Ad Group settings, which can be either a Programmatic Guaranteed Contract or a Publisher Direct Guaranteed Contract.   Ad Group Base and Max Bid values are automatically set to the floor price of the Contract at the time of bidding.   This property may only be specified on create and may not be updated thereafter. |

### `AdGroup_RTBAdGroupAttributes_put`

| Field | Type | Required | Description |
|---|---|---|---|
| AudienceTargeting | `AdGroup_AdGroupAudienceTargeting_put` |  | Details of the Audience this Ad Group targets and how that Audience is targeted. If you are not targeting an Audience, you do not need to specify this. |
| BaseBidCPM | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The base bid CPM to use before applying bid adjustments. This must be in the currency of the Advertiser that owns the Ad Group. When specified, this must be greater than or equal to the minimum base bid threshold set for the Partner. |
| BudgetSettings | `AdGroup_AdGroupBudgetSettings_put` |  | Settings for how much and how fast the Ad Group may spend. |
| ComscoreSettings | `AdGroup_ComscoreSettings` |  | The Comscore settings demographic targeting settings for the ad group.   Use this to define the demographics to be reported on in Comscore’s key metrics report. Comscore reporting will involve a fee that is specified in the fee attribute of this property. |
| ContractTargeting | `AdGroup_AdGroupContractTargeting_put` |  | The adjustments to apply to Contracts and Contract Groups. |
| CreativeIds | array<string> |  | The complete list of Creative IDs the Ad Group can serve. If the Ad Group has no associated Creatives, it will not serve! See the Creative API for a complete list of this Advertiser's Creatives. |
| DimensionalBiddingAutoOptimizationSettings | array<array<`DimensionalBidding_DimensionDescriptor`>> |  | Specify AutoOptimization for ad groups.        Specify a list of BidListDimensions from the enumeration below, keeping in mind that certain ROIGoals only support specific dimensions.           \| ROI Goal \| BidListDimensions \|   \| :--- \| ---------------------------------------------: \|   \| CPC \|   \|   \| CTR \|   \|   \| CPCV \| HasAdFormatId \|   \| Reach \| HasDeviceTypeId \|   \| ROAS \| HasDomainFragmentId \|   \| VCPM \| HasGeoSegmentId \|   \| VCR \| HasSupplyVendorId \|   \| Viewability \|   \|   \|   \|   \|   \|   \|   \|   \| **ROI Goal** \| **BidListDimensions** \|   \| CPC \|   \|   \| CTR \| HasAdvertiserTargetingDataId \|   \| VCR \| HasThirdPartyDataId \|   \|   \|   \|   \|   \|   \|   \| **ROI Goal** \| **BidListDimensions** \|   \|   \| HasAdFormatId \|   \|   \| HasAdvertiserTargetingDataId \|   \|   \| HasDeviceTypeId \|   \| CPA \| HasDomainFragmentId \|   \|   \| HasGeoSegmentId \|   \|   \| HasSupplyVendorId \|   \|   \| HasThirdPartyDataId \|   \|   \|   \|   \|   \|   \|   \| **ROI Goal** \| **BidListDimensions** \|   \| GRP \| These goal types do not support any \|   \| OPT \| DimensionalBiddingAutoOptimizationSettings. \|            On create and update, AutoOptimization settings are turned on for dimensions specified. AutoOptimization settings are turned off for all dimensions not specified in the update request. |
| DisplayViewabilityStandardIntegral | `TTD.API.PublicAPI.Contracts.Models.AdGroup_ViewabilityStandardIntegral` |  | Viewability standard used for Integral display viewability targeting. |
| IsUseClicksAsConversionsEnabled | boolean |  | Controls whether clicks may be counted as primary conversions when conversion data is sparse for optimizing toward conversion-based goals. |
| IsUseSecondaryConversionsEnabled | boolean |  | Controls whether secondary conversions may be counted as primary conversions when conversion data is sparse for optimizing toward conversion-based goals. |
| KoaOptimizationSettings | `AdGroup_KoaOptimizationSettings` |  | Specify Optional Koa Optimization for ad groups. _(nullable)_ |
| KoaOptimizationsVersion | `AdGroup_KoaOptimizationsVersion` |  | A read-only property that specifies the major version of Koa used to apply optimizations to the ad group. This property works in conjunction with the `KoaOptimizationsMinorVersion` value to define the complete version number, such as `V3.5`.   For details on the ad group properties and endpoints that correspond to each version, see the enumerated list of string values that follows. |
| MaxBidCPM | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The maximum the Ad Group will ever bid on a single impression. This caps the amount bid adjustments can raise the bid. This must be in the currency of the Advertiser that owns the Ad Group. |
| NielsenSettings | `AdGroup_NielsenSettings_put` |  | The Nielsen settings for the Adgroup.  Enabling Nielsen tracking involves a fee as indicated within this property. |
| QualityAllianceViewabilityProfile | `AdGroup_QualityAllianceViewabilityProfile` |  | Viewability profile used for Quality Alliance viewability targeting. |
| ROIGoal | `AdGroup_ROIGoal` |  | The Return On Investment (ROI) goal allows you to measure success of the ad group. If you have no specific goal in mind, you do not need to specify any when you create the ad group.    - All goal properties are mutually exclusive, which means that only one goal property may be specified at a time.    - Setting a goal property removes any previously set property.   - Setting a Boolean property values to `false` removes the goal.   - To keep the currently set goal when updating the ad group, omit this object from the update request, or send it empty.   - To remove the currently set goal altogether, set this goal object to `null`. _(nullable)_ |
| VideoViewabilityStandardIntegral | `TTD.API.PublicAPI.Contracts.Models.AdGroup_ViewabilityStandardIntegral` |  | Viewability standard used for Integral video viewability targeting. |

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

### `DimensionalBidding_NewBidList_put`

This class extends the bid list class with the information required to associate it with an ad group.

| Field | Type | Required | Description |
|---|---|---|---|
| BidLines | array<`DimensionalBidding_BidLine_put`> | yes | The list of bid lines used with the resolution type to calculate the bid list adjustment. All bid lines in the bid list must have the same dimensions except for the bid adjustment.   For example, if Bid Line 1 sets the `DomainFragment` property to `test.com`, Bid Line 2 must also set this property and can optionally set the bid adjustment. Do not set any other optional dimensions.   For details, see [Bid Lists](/v3/portal/api/doc/BidList). |
| BidListAdjustmentType | `DimensionalBidding_BidListAdjustmentType` | yes | The method for determining how the bid adjustment is applied when an impression doesn't match a bid line. This type is set when a bid list is created and cannot be changed afterward.   If an impression matches multiple bid lists with different bid list adjustment types, the bid adjustments are multiplied together to get the final bid. For example, if an impression gets a bid adjustment of 0.75 from an optimized list and a bid adjustment of 0 from a block list, the final bid adjustment is 0.75*0=0. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |
| Name | string | yes | The name of the bid list. Bid list names typically describe the dimension and adjustment type, such as "Site/App Target List". The maximum character length is 512. |
| BidListId | string |  | The platform ID of the bid list. It is ignored during creation. |
| IsDefaultForDimension | boolean |  | If set to `true`, the bid list is the default for the specified dimension combination.   The default value is `false`. |
| IsEnabled | boolean |  | If set to `true`, the bid list adjustments are used in bidding.   The default value is `false`.   **IMPORTANT**: To avoid disabling the bid list and potential validation issues, be sure to set this property to `true` in PUT ad group calls. |
| ResolutionType | `DimensionalBidding_MultipleMatchResolutionType` |  | The method for determining how the bid adjustment is applied when an impression matches multiple bid lines in a bid list. We recommend using `ApplyMultiplyAdjustment` for all bid lists. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |

### `AdGroup_ImpactApiModel`

Predicted impact to ad group goal if recommendation is accepted.

| Field | Type | Required | Description |
|---|---|---|---|
| GeneratedOn | string (date-time) |  | The date when the `PotentialImpact` data was generated. _(nullable)_ |
| GoalPerformancePercent | number (double) |  | The expected percentage change in goal performance. _(nullable)_ |
| IsGoalImprovement | boolean |  | Indicates if the current sign of the `GoalPerformancePercent` value indicates goal improvement. |
| SpendPercent | number (double) |  | The percentage change impact that Koa expects the recommended optimizations to have on potential spend. _(nullable)_ |

### `AdGroup_KoaIncompatibleFeature`

Type: string enum(DealFloorPrice, UserAppliedVCList, PacingASAP)

### `AdGroup_KoaOptDetailsApiModel`

| Field | Type | Required | Description |
|---|---|---|---|
| BidAdjustment | number (double) |  | The bid multiplier to apply to a bid when all items in this `KoaBidLineId` are matched during bidding.   Here's what you need to know about this property:   - Koa never bids higher than the ad group's `MaxBidCPM`.   - A `BidAdjustment` greater than 1 indicates that Koa prefers to bid higher if the criteria in this recommendation are met.    - A `BidAdjustment` less than 1 indicates that Koa prefers to bid lower if the criteria in this recommendation are met.   - A `BidAdjustment` of 1 indicates that no adjustment is applied to the bid. Koa uses the value of 1 when a `VolumeControlPriority` is the only recommendation for this `KoaBidLineId`. |
| DimensionValues | map<string, string> |  | A list of bidding dimensions and values that make up this Koa optimization.   If this Koa optimization is applied and a bid matches all optimizations in this list, the `BidAdjustment` and `VolumeControlPriority` suggested by Koa for this `KoaBidLineId` will be applied. _(nullable)_ |
| KoaOptimizationId | integer (int64) |  | The system-generated identifier unique for this optimization. This ID refers to the collective `BidDimensions`, `BidAdjustment`, and `VolumeControlPriority` suggestions contained within the optimization. |
| VolumeControlPriority | `DimensionalBidding_VolumeControlPriority` |  | The [volume control](/v3/portal/api/doc/VolumeControl) priority to apply to a bid when all items in this `KoaBidLineId` are matched during bidding.   Volume control prioritization allows Koa to allocate and prioritize bidding on different types of inventory without adjusting bid price. |

### `AdGroup_KoaOptimizationsMode`

Type: string enum(None, OptimizingPerformance, IncreasingScale)

### `AdGroup_OptimizationUpdateAttemptApiModel`

| Field | Type | Required | Description |
|---|---|---|---|
| NoOptimizationsReasonId | `AdGroup_KoaOptimizationsNoOptimizationReason` |  | The ID of the reason that explains why Koa optimizations were not applied to the ad group. |

### `TTD.Domain.Shared.Http.Metadata.Models_Money`

Describes an amount of money in a specific currency.

| Field | Type | Required | Description |
|---|---|---|---|
| Amount | number (double) | yes | The money amount, specified as a decimal, for example, 1.5 for $1.50. |
| CurrencyCode | `TheTradeDesk_CurrencyCode` | yes | The currency of the money value specified in the `Amount`, for example, "USD" for $1.50 US dollars.   Unless you've arranged different terms during onboarding, your partner account and all its associated advertisers use the same currency, namely, USD.   If you you need to use another currency, please contact your Account Manager.   If multi-currency support is enabled for your account, see the Currency API for the full set of supported currencies and their codes. |

### `AdGroup_AdGroupBudgetSettings`

| Field | Type | Required | Description |
|---|---|---|---|
| AdGroupFlights | array<`AdGroup_AdGroupFlight`> |  | The List of flights associated with this adgroup. AdGroupFlights that are no longer active should not be modified. |
| AllocationType | `TheTradeDesk.AdPlatform.Shared.DB.Provisioning_BudgetAllocationType` |  | The budget allocation type for the ad group. For Solimar budgeted campaigns this will always be `maximum`.   For Kokai budgeted campaigns this value can only be `Minimum` for now. |
| AutoAllocatorPriority | integer (int32) |  | The rank or priority that determines the order of which this ad group automatically receives spend from the campaign budget.   Here's what you need to know about this property:   - To set a priority for an ad group, in a [POST / campaign](/v3/portal/api/ref/post-campaign) or [PUT /campaign](/v3/portal/api/ref/put-campaign) call, set the `AutoAllocatorEnabled` property value to `true` and `AutoPrioritizationEnabled` to `false`.   - The default value for this property is `0`.   - This must be a value between 1 and 10 with a value of `1` being the highest priority.   For details and best practices about allocating a campaign budget, see [Budget Allocation](/v3/portal/api/doc/CampaignBudgets). _(SOLIMAR: Applies only to ad groups in campaigns with the Solimar budgeting version.)_ |
| Budget | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The total amount the ad group may spend over its lifetime. Here's what you need to know about this property:   - This must be in the currency of the advertiser that owns the ad group.   - For ad groups that have flights, this value is determined based on the values in the `AdGroupFlights` object array and may not be modified.   - If you're planning a campaign with a fluid budget, consider setting this amount to be equal to the campaign budget amount. For details, see [Budget Allocation](/v3/portal/api/doc/CampaignBudgets). |
| BudgetInImpressions | integer (int64) |  | The total number of impressions the Ad Group may serve over its lifetime. This may only be set if the Campaign has an impression budget. The sum of the Ad Group impression budgets within a Campaign must not exceed the Campaign's impression budget.   **NOTE**: An impression budget may not be set for an ad group with base bid auto-optimization enabled. If an impression budget is set for such an ad group, an error will be returned with http status 400 (BadRequest).   In case of ad groups that have flights, this value will be determined based on the values from the AdGroupFlights, and may not be modified. _(nullable)_ |
| DailyBudget | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The total amount the Ad Group should spend in a single day, if able. This must be in the currency of the Advertiser that owns the Ad Group. If you do not wish to limit the daily spend of the Ad Group, set this equal to the total Ad Group budget.   Please note that if you have pacing enabled, the Ad Group may spend more than this in a given day if it needs to increase the average spend rate to meet overall pacing goals.   This must be null when pacing to end of flight.   In case of ad groups that have flights, this value will be determined based on the values from the AdGroupFlights, and may not be modified. _(nullable)_ |
| DailyBudgetInImpressions | integer (int64) |  | The total number of impressions the Ad Group should serve in a single day, if able. This may only be set if the Ad Group has an impression budget. If you have an impression budget but do not wish to limit the daily impressions of the Ad Group, set this equal to the total Ad Group impression budget.   **NOTE**: If you have pacing enabled, the Ad Group may serve more impressions than this in a given day if it needs to increase the average rate to meet overall pacing goals.   **NOTE**: A daily impression budget may not be set for an ad group with base bid auto-optimization enabled. If a daily impression budget is set for such an ad group, an error will be returned with http status 400 (BadRequest).   This must be null when pacing to end of flight.   In case of ad groups that have flights, this value will be determined based on the values from the AdGroupFlights, and may not be modified. _(nullable)_ |
| PacingMode | `AdGroup_PacingMode` |  | The pacing mode specifies how the ad group attempts to spend its budget over time.   Required on create. _(SOLIMAR: Applies only to ad groups in campaigns with the Solimar budgeting version.)_ |

### `TTD.API.PublicAPI.Contracts.Models.AdGroup_ViewabilityStandardIntegral`

Type: string enum(IAB, Publicis, GroupM)

### `AdGroup_AdGroupAudienceTargeting`

| Field | Type | Required | Description |
|---|---|---|---|
| AudienceAcceleratorExclusionsEnabled | boolean |  |  |
| AudienceBoosterEnabled | boolean |  | If set to `true`, adds more relevant, high-performing data segments that are similar to the advertiser's target audience. In other words, ads will be served only to users who benefit the campaign and are most likely to convert. For details, see [Ad Group](/v3/portal/api/doc/AdGroup).   The default value is `false`.    **IMPORTANT**: To take advantage of this performance-enhancing functionality, the ad group must have CPA or ROAS goals. |
| AudienceExcluderEnabled | boolean |  | If set to `true`, generates a custom audience for the ad group that excludes the less relevant data segments that are different from the advertiser's target audience. In other words, this custom audience excludes users who are less likely to benefit the campaign. Here's what you need to know about this property:   - This property cannot be used in conjunction with the `Audience`, `AudiencePredictor`, or `TargetDemographicSettings` settings.    - Advertisers in certain industry categories may not use this functionality.   **NOTE**: This property controls the Prism settings for the ad group. For details, see [Prism](/v3/portal/api/doc/Prism). |
| AudienceExcluderFee | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Fee` |  | The Fee that is charged when AudienceExcluder is enabled.   This is a read-only property returned by the API. _(nullable)_ |
| AudienceId | string |  | The ID of the Audience to target. If you wish to remove Audience Targeting from an Ad Group, set this to null.   **NOTE**: An Audience with multiple included Data Groups may not be assigned to an Ad Group with audience auto-optimization enabled. If such an Audience is assigned to an ad group with audience auto-optimization enabled, an error will be returned with http status 400 (BadRequest). _(nullable)_ |
| AudiencePredictorEnabled | boolean |  | Enabling Koa™ Audience Predictor automatically generates a lookalike audience targeting users known to be of high value based on the configured goal for the `AdGroup`. We recommend Audience Predictor as a targeting strategy to complement your other prospecting ad groups. Because this feature generates a custom audience for the `AdGroup`, it cannot be used in conjunction with a`Audience`, `AudienceExcluder`, or `TargetDemographicSettings`. Data usage fees apply and vary based on factors like the configured goal for the `AdGroup` or the advertiser's industry category. Advertisers in some industry categories cannot use Audience Predictor. |
| AudienceRetargetingEnabled | boolean |  | Enabling this optimization will only include users determined to be high value, and will calculate bids for these users based off their scored value.   Enabling this will create a new retargeting ID for this adgroup, which will consist of the TTID's considered valuable by Audience Retargeting. _(SOLIMAR: This property is deprecated in Kokai and applies only to Solimar ad groups.)_ |
| AudienceRetargetingSettings | `AdGroup_AdGroupAudienceRetargetingSettings` |  | By default, we will add all Conversion and Retargeting tracking tags to the audience in addition to the scored users segment. If you want to specify a list of tracking tags to be used instead of everything, pass it in here as a list of First Party Data Ids.   This will only be applied when AudienceRetargetingEnabled is enabled. _(nullable; SOLIMAR: This property is deprecated in Kokai and applies only to Solimar ad groups.)_ |
| CrossDeviceVendorListForAudience | array<`CrossDevice_AdGroupCrossDeviceVendor`> |  | Cross-device data from your selected provider will be used to extend the reach of your Audience across devices. This provider’s data will also be used for f-capping at the Ad Group and Campaign level. Pricing and coverage vary by provider, so please review our cross-device provider comparison before making your selection. Data usage fees will only be applied when cross-device data is used to extend your Audience or for f-capping, not on impressions bought against your original Audience.   For details, see [Cross-Device Targeting](/v3/portal/api/doc/CrossDeviceTargeting).   Note that at this point in time this list may contain only one vendor. |
| CustomAudienceAcceleratorExclusions | array<`CrossDevice_CustomAudienceAcceleratorExclusion`> |  | _(nullable)_ |
| RecencyExclusionWindowInMinutes | integer (int32) |  | The complement to Recency Adjustments, this is the amount of time to exclude users who are in the Excluded Data Groups of the Audience.   For example, if your product is purchased at regular intervals by your customers, you may not want to immediately target somebody who just converted, but you may not want to exclude them forever either. So if your Audience excludes "Converted Users" but you know those users are likely to convert again after, say, 7 days, you may want to set your exclusion window to 6 days so you begin showing them ads leading up to their likely 7th-day conversion. This is simply a contrived example and the specific setting will depend on your use case.   If you're not sure how to configure this window, 129600 (90 days) is a reasonable default you may want to start with. It's also the default value used if this is not specified on create. |
| TargetDemographicSettings | `Nielsen_TargetDemographicSettings` |  | Target specific demographic data that will be used to target segments of your Audience.   This will only be applied when the TargetDemographicSettingsEnabled is set. _(nullable; SOLIMAR: This property is deprecated in Kokai and applies only to Solimar ad groups.)_ |
| TargetDemographicSettingsEnabled | boolean |  | Target specific demographic data that will be used to target segments of your Audience.   In order to enable Nielsen with this property, a value for NielsenSettings must be provided and the ROIGoal must be set to NielsenOTP. An empty constructor for NielsenSettings will work.   TargetDemographicSettings must be provided when this setting is enabled. It cannot be used in conjunction with AudiencePredictor or AudienceExcluder. _(SOLIMAR: This property is deprecated in Kokai and applies only to Solimar ad groups.)_ |
| TargetInterestSettings | `InterestTargeting_TargetInterestSettings` |  | Target specific interest data that is most relevant to you.   This will only be applied when the TargetInterestSettingsEnabled is set. _(nullable; SOLIMAR: This property is deprecated in Kokai and applies only to Solimar ad groups.)_ |
| TargetInterestSettingsEnabled | boolean |  | Target specific interest data that is most relevant to you.   TargetInterestSettings must be provided when this setting is enabled. It cannot be used in conjunction with AudiencePredictor or AudienceExcluder. _(SOLIMAR: This property is deprecated in Kokai and applies only to Solimar ad groups.)_ |
| TargetTrackableUsersEnabled | boolean |  | Enabling this optimization will restrict targeting to only trackable users (Users with a TDID)   As this will create a new Audience targeting only trackable users, it cannot be used if an AudienceId is also provided |
| TargetTrackableUsersFee | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Fee` |  | The Fee that is charged when Target Trackable Users is enabled.   This is a read-only property returned by the API. _(nullable)_ |
| UseMcIdAsPrimary | boolean |  | Base your primary audience targeting strategy on geo interest segments   Select this option to increase the scale available to ad groups that use geo interest audience targeting. By default, ad groups that use geo interest audience targeting act as a fallback to the Adbrain Household Graph and can only bid on avails that other forms of audience targeting can't reach. Selecting this option gives this ad group the chance to bid on all avails. |

### `AdGroup_AdGroupContractTargeting`

| Field | Type | Required | Description |
|---|---|---|---|
| AllowOpenMarketBiddingWhenTargetingContracts | boolean |  | When targeting contracts, this property controls whether the ad group will bid exclusively on contracts or bid on both contracts and the open market. When creating an ad group targeting contracts, this property sets to false by default, and the ad group will only bid on contracts. Creating an ad group targeting contracts with this property set to true means the ad group will bid both on the open market and contracts. Target contracts using bid lists containing the PrivateContractId dimension. In Programmatic Guaranteed (high-fill) ad groups, this property is read-only and set to false because this type of ad group can only bid on contracts. When creating an ad group that isn't targeting contracts, this property sets to false by default and the ad group will bid on the open market. |
| ContractFloorPricePercentageIncrease | number (double) |  | This setting defines a percentage that will be added on top of the contract floor price. This value is specified as a numeric value.   For example, a 5% increase is specified as 5. _(SOLIMAR: This property is deprecated in Kokai and applies only to Solimar ad groups.)_ |
| UseContractFloorPriceAsBaseBid | boolean |  | When enabled, we will use the contract floor price instead of the Ad Group's base bid. When a contract floor price can't be found, the Ad Group's base bid will be used. _(SOLIMAR: This property is deprecated in Kokai.)_ |

### `AdGroup_ComscoreSettings`

| Field | Type | Required | Description |
|---|---|---|---|
| DemographicMemberIds | array<integer (int32)> |  | The id(s) of the demographic members within the specified population for which the Comscore key metrics will be captured.   This property is required and must contain at least one valid demographic member ID when Comscore reporting is enabled for this ad group.   The list of valid ids for demographic members of each Comscore population and their corresponding names may be retrieved using the Comscore API. _(nullable)_ |
| Enabled | boolean |  | The field that indicates whether Comscore reporting has been enabled for the ad group.    If this is set to false, Comscore reports will not be available regardless of the Population Id and/or Demographic Member Id settings.    Reports should be typically available twenty-four hours after this has been enabled on the ad group. |
| Fee | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Fee` |  | The fee that is charged when Comscore reporting has been enabled on the Ad Group. _(nullable)_ |
| MobileDemographicMemberIds | array<integer (int32)> |  | The id(s) of the demographic members within the specified population for which the Comscore key metrics will be captured.   This property is required and must contain at least one valid demographic member ID when Comscore reporting is enabled for this ad group.   The list of valid ids for demographic members of each Comscore population and their corresponding names may be retrieved using the Comscore API. _(nullable)_ |
| PopulationId | integer (int32) |  | The Population Id (country) for which the Comscore key metrics will be captured.   This property is required and must be a valid ID when Comscore reporting is enabled for the Ad Group.   The list of valid ids for Comscore population and their corresponding names may be retrieved using the Comscore API. _(nullable)_ |

### `AdGroup_KoaOptimizationSettings`

| Field | Type | Required | Description |
|---|---|---|---|
| IsBiddingUpEnabled | boolean |  | This property indicates whether bidding up is automatically enabled for this ad group or not.   **IMPORTANT**: This feature is automatically enabled only when Koa is on (even if you don't include this property in a request). Koa is always on by default. For details, see [Koa Optimizations](/v3/portal/api/doc/KoaOptimizations).   - If set to `true` (default value), Koa automatically raises CPMs on the best-performing inventory if the campaign is under-pacing.    - If set to `false`, no CPMs are raised, even if Koa is on. _(SOLIMAR: This property is intended only for [Koa Optimizations](/v3/portal/api/doc/SolimarKoaOptimizations) in Solimar.)_ |
| IsEnabled | boolean |  | This property indicates whether Koa automatically applies optimizations and dynamic exclusions to the ad group.    When set to `true` (default value), Koa Optimizations are automatically applied to the following dimensions (if the ad group goal supports them):    - `HasBrowserId`   - `HasDeviceTypeId`   - `HasDomainFragmentId`   - `HasOsId`   - `HasPrivateContractId`   - `HasRenderingContextId`   - `HasSupplyVendorId`   You can also configure additional supported dimensions by using the `OptionalDimensions` property below.   Supported goal types for Koa Optimizations include the following: Reach, CPC, CTR, CPA, Conversion Revenue, VCR, Viewability, Estimated vCPM, CPCV. For details on campaign goals, see [Goals and KPIs](/v3/portal/api/doc/GoalsKPIs).   This property is opt-in only. You can set its value to `true`. To set the value to `false`, you need to contact support or your Account Manager.   When set to `false`, Koa Optimizations are not  applied automatically. To apply optimizations manually, use the [POST /adgroup/koaacceptrecommendations](/v3/portal/api/ref/put-adgroup-koaacceptrecommendations-adgroupid) endpoint.    For details about working with Koa Optimizations settings, see [Koa Optimizations](/v3/portal/api/doc/KoaOptimizations). _(SOLIMAR: This property is intended only for [Koa Optimizations](/v3/portal/api/doc/SolimarKoaOptimizations) in Solimar. To turn on Koa Optimizations for specific dimensions in Kokai, list them in the `KoaDimensions` property.)_ |
| KoaDimensions | `AdGroup_KoaDimensions` |  | This is a Koa v3.5 property that turns on any combination of the following optional dimensions for Koa Optimizations in Kokai: Ad Format, Geography, Site, Ad Environment, Device Type, Browser, OS, Fold Placement.    Here's what you need to know about this property when creating or updating an ad group in Kokai:   - Each dimension is represented by a Boolean value. To turn on a dimension for the ad group, set it to `true`. To turn it off, set it to `false`.   - If you omit this property in your request, all optional dimensions will be disabled.   - This is a Kokai-only property. _(KOKAI: This property applies only to Kokai ad groups.)_ |
| OptionalDimensions | array<`AdGroup_KoaOptionalDimensionDescriptor`> |  | This is a Koa v3 property that turns on the specified optional dimensions (`HasAdFormatId` and `HasGeoSegmentId`) for [Koa Optimizations](/v3/portal/api/doc/SolimarKoaOptimizations) in Solimar.    Here's what you need to know about this property when creating or updating an ad group:   - If the `IsEnabled` value is set to `true`, this field must contain a value.    - If left empty, both optional dimensions will be disabled.   - If omitted, both optional dimensions will be enabled.   - This property is backward compatible in Kokai. _(nullable; SOLIMAR: This property is intended only for turning on Koa Optimizations for two optional dimensions in Solimar. To turn on Koa Optimizations for specific dimensions in Kokai, use the `KoaDimensions` property.)_ |

### `AdGroup_KoaOptimizationsVersion`

Type: string enum(None, V2, V3)

### `AdGroup_NielsenSettings`

| Field | Type | Required | Description |
|---|---|---|---|
| Fee | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Fee` |  | The fee associated with enabling Nielsen Tracking.   This is a read-only attribute returned by the API. _(nullable)_ |
| NielsenTrackingAttributes | `AdGroup_NielsenTrackingAttributes` |  | The Nielsen Tracking properties that have been set for the Ad Group.   A null value in this property indicates that Nielsen Tracking has not been enabled for the Ad Group. _(nullable)_ |

### `AdGroup_QualityAllianceViewabilityProfile`

Type: string enum(IAB, GroupM, GroupM_V2)

### `AdGroup_ROIGoal`

| Field | Type | Required | Description |
|---|---|---|---|
| CPAInAdvertiserCurrency | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The Cost Per Acquisition goal (in the Advertiser currency). |
| CPCInAdvertiserCurrency | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The Cost Per Click goal (in the Advertiser currency). |
| CPCVInAdvertiserCurrency | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | Cost Per Completed View goal (in the advertiser currency). |
| CTRInPercent | number (double) |  | The Click Through Rate goal (in percent), for example, 1 = 1% (1 in 100). |
| MaximizeLtvIncrementalReach | boolean |  | The goal is to reach as many users as possible beyond those who have already reached on Linear TV. |
| MaximizeReach | boolean |  | Reach as many unique users as possible in your intended audience. |
| MiaozhenOTPInPercent | number (double) |  | The Miaozhen On Target Percentage goal (in percent), for example, 1 = 1% (1 in 100).   When set, the demographic must be provided in `MiaozhenTrackingAttributes`. |
| NewBuyerTargetValue | `AdGroup_NewBuyerTargetType` |  | The New Buyer KPI target value. Specifies whether to optimize for Featured or Total new buyers. |
| NielsenOTPInPercent | number (double) |  | The Nielsen On Target Percentage goal (in percent), for example, 1 = 1% (1 in 100).    When set, the demographic must be provided in the form of `NielsenTrackingAttributes` or you must set `TargetDemographicSettingsEnabled` to `true`. |
| ReturnOnAdSpendPercent | number (double) |  | The Return on Ad Spend goal (in percent of ad spend). |
| VCPMInAdvertiserCurrency | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The Estimated Viewable Cost Per Mille (thousand) goal (in the Advertiser currency). |
| VCRInPercent | number (double) |  | The Video Completion Rate goal (in percent), for example, 1 = 1% (1 in 100). |
| ViewabilityInPercent | number (double) |  | The Viewability goal (in percent), for example, 1 = 1% (1 in 100). |
| MaximizeConversionRevenue | boolean |  | _(DEPRECATED; deprecation: Please use ReturnOnAdSpendPercent instead.)_ |

### `DimensionalBidding_DimensionDescriptor`

Type: string enum(UnknownDimension, HasAdFormatId, HasDomainFragmentId, HasUniversalCategoryTaxonomyId, HasAdvertiserTargetingDataId, HasBrowserId, HasCarrierId, HasDeviceModelId, HasDeviceTypeId, HasGeoSegmentId, HasHourOfWeek, HasLanguageId, HasOsId, HasPrivateContractId, HasRecencyWindowInMinutes, HasRenderingContextId, HasFactualGeostoreTargetingDataId, HasSupplyVendorId, HasTemperatureBucketInCelsius, HasThirdPartyData, HasAdsTxtSellerTypeId, HasVideoMutedStateId, HasVideoPlaybackTypeId, HasVideoPlayerSizeId, HasVideoQualityId, HasVideoSkippabilityId, HasFactualProximityDataId, HasImpressionPlacementId, HasVideoTruthScoreRange, HasVideoViewabilityScoreRange, HasDisplayViewabilityScoreRange, HasPeer39LanguageId, HasIntegralContextualCategoryId, HasPeer39ContextualCategoryId, HasDoubleVerifyContextualCategoryId, HasIntegralBrandSafetyCategoryId, HasIntegralVideoBrandSafetyCategoryId, HasPeer39BrandSafetyCategoryId, HasDoubleVerifyBrandSafetyCategoryId, HasIntegralPageQualityCategoryId, HasIntegralVideoPageQualityCategoryId, HasPeer39PageQualityCategoryId, HasDoubleVerifyBotAvoidanceCategoryId, HasContextualAppCategoryId, HasPublisherId, HasIntegralViewabilityCategoryId, HasIntegralVideoViewabilityCategoryId, HasDoubleVerifyViewabilityCategoryId, HasDoubleVerifyVideoViewabilityCategoryId, HasFrequencyAdjustmentId, HasPeer39ViewabilityCategoryId, HasVideoCompletionRateScoreRange, HasInternetConnectionTypeId, HasRTBAsiaPageQualityCategoryId, HasRTBAsiaVideoPageQualityCategoryId, HasTTDContextualCategoryId, HasSupplyPathOptimizationListId, HasMarketTypeId, HasContextualSupplyVendorGenreId, HasContextualSupplyVendorCategoryId, HasWeatherConditionId, HasFrequencyV2AdjustmentId, HasSemasioContextualCategoryId, HasSellerId, HasDigitalOutOfHomeVenueTypeId, HasNativePlacementTypeId, HasTTDNativeContextTypeId, HasDomainClassId, HasGeofenceThirdPartyDataAndBrand, HasPreBidContextualCategoryId, HasTencentPageQualityCategoryId, HasContentGenre, HasContentLivestream, HasContentProductionQuality, HasContentRating, HasContentDuration, HasTVQualityIndexRange, HasAtmosphericCondition, HasMarketplaceId, HasAudienceReachPercentageTierId, HasAdLoadCategory, HasFullReferrerUrl, HasLikelyRefreshRate, HasContentTransparency, HasIdiosyncraticSegmentId, HasRewarded, HasSellerRelationshipTypeId, HasAdToContentRatioRange, HasAdsInViewRange, HasExtendedZipCodeGroupSegmentThirdPartyDataId, HasContentLanguage)

### `DimensionalBidding_BidListAdjustmentType`

Type: string enum(BlockList, TargetList, Optimized)

### `DimensionalBidding_BidListSource`

Type: string enum(User, ManualRecommendation, AutoAppliedRecommendation, UserBulkEdit)

### `DimensionalBidding_BidLine`

| Field | Type | Required | Description |
|---|---|---|---|
| AdFormatId | string |  | The ID of the ad format used for the bid line adjustment. For details, see [POST /v3/adformat/query](/v3/portal/api/ref/post-adformat-query). |
| AdsTxtSellerType | `AdGroup_AdsTxtSellerType` |  | The `ads.txt` seller type that indicates the relationship between the SSP and publisher for a given impression, as defined by the IAB. The supported values include:<ul><li>`0` (Unknown)</li><li>`1` (Direct)</li><li>`2` (Reseller)</li><li>`3` (Unauthorized)</li></ul> |
| AdvertiserTargetingDataId | integer (int64) |  | The advertiser targeting data ID from the targeting data group. |
| AtmosphericCondition | `DimensionalBidding_AtmosphericCondition` |  | The current or forecast severity level of pollen concentration in the atmosphere that you want to target. Pollen risk targeting helps advertisers in the healthcare industry and those selling indoor air treatment products reach their target audiences more effectively. You can use this information to direct your media spend to areas with the highest pollen concentration (and subsequently have more people suffering from allergies and also looking for air purifiers or allergy medication).   Here's what you need to know about this property:   - Values that end in `Forecast` indicate the areas *forecast* to reach the specified severity level within the next 48 hours. For example, the value of `MediumForecast` enables you to target areas that have been forecast to have a medium severity of pollen concentration in the next 48 hours.   - The rest of the values indicate the *current* level of pollen concentration. For example, the value of `High` enables you to target areas that currently have a high level of pollen concentration. |
| AudienceReachPercentageTier | `DimensionalBidding_AudienceReachPercentageTier` |  | Audience Reach Percentage Tier Dimension |
| BidAdjustment | number (double) |  | The adjustment to be applied when an impression matches the bid line. Recommended for optimized lists. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |
| BidLineId | string |  | The ID of the bid line. This property is read-only. |
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
| FrequencyRange | `DimensionalBidding_FrequencyRange` |  | Target a range of values that represent how many times a user has viewed an ad based on a specific frequency counter. |
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
| FrequencyTarget | `DimensionalBidding_FrequencyTarget` |  | The ad frequency to target. This is a Frequency v1 setting that has been replaced by the new Frequency v2 property, `FrequencyRange`. For migration details and examples of old and new bid lists, see [Frequency Migration Phase Two](/v3/portal/api/doc/UpgradeSupportFrequencyV2FinalMigration) (contact your Technical Account Manager for permissions). For details on the new settings and resulting bid lists, see [Frequency Caps](/v3/portal/api/doc/FrequencyConfigurationBasicCaps) and [Frequency Goals](/v3/portal/api/doc/FrequencyConfigurationBasicGoals). _(DEPRECATED; deprecation: This is no longer actively used in the system.)_ |
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

### `DimensionalBidding_MultipleMatchResolutionType`

Type: string enum(SingleMatchOnly, ApplyMinimumAdjustment, ApplyAverageAdjustment, ApplyMaximumAdjustment, ApplyMultiplyAdjustment)

### `PassThroughFee_AdditionalFeeQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| Amount | number (double) |  | The fee amount to be charged (according to the type of fee). Must be nonzero and positive.   If FeeType is one of MediaCostPercentage, DataCostPercentage, MediaPlusDataCostPercentage or PartnerCostPercentage then a value greater than 0 and less than 100.   If FeeType is one of FeeCPM or RateCPM then CPM in advertiser currency. |
| Description | string |  | The description or title of the fee (shown in the UI). _(nullable)_ |
| FeeType | `PassThroughFee_AdditionalFeeType` |  | The fee type that determines how and when to calculate a charge. Fee types include MediaCostPercentage, DataCostPercentage, MediaPlusDataCostPercentage, PartnerCostPercentage, FeeCPM and RateCPM. A flat rate card can only have one fee with fee type RateCPM. |

### `Comscore_DemographicMemberMeasurement`

| Field | Type | Required | Description |
|---|---|---|---|
| AverageFrequency | number (double) |  | The average number of PC Impressions served in the targeted country (population) to unique viewers in the campaign during the reporting period |
| CompositionIndexUniqueViewers | number (double) |  | An index that measures how well the campaign reached the target group as compared to the incidence of that target group on the internet during the reporting period. |
| DemographicMemberId | integer (int32) |  | The Id of the demographic member for which the measurements have been captured.   Demographic Members are associated while setting up Comscore studies at the Ad group level - which might be extended to the Campaign level in the future. |
| DemographicMemberName | string |  | The descriptive name of the demographic member for which the measurements have been captured. _(nullable)_ |
| GRP | number (double) |  | Gross Rating Points (GRP) is based on the In-Geo PC Human impressions delivered to the total census population for the targeted country (population). |
| PercentImpressions | number (double) |  | Percent of TotalImpressions. |
| PercentPopulationReach | number (double) |  | Among the total census population for the targeted country (population), the percentage who were reached by the campaign during the reporting period.    For countries other than the United States, Canada, and Spain, this metric is available for demographic groups based on age and gender. |
| PercentUniqueViewers | number (double) |  | The percent of PC Unique Viewers (i.e., de-duplicated) served within the targeted country, excluding mobile and tablet. |
| TotalImpressions | number (double) |  | All tagged impressions, excluding IAB (Interactive Advertising Bureau) Spiders &amp; Bots and comScore internally generated impressions.  This reflects impression counts in IAB-compliant ad servers. |
| UniqueViewers | integer (int64) |  | The number of PC Unique Viewers (i.e., de-duplicated) served within the targeted country (population), excluding mobile and tablet. |

### `Comscore_GeoMarketMeasurement`

| Field | Type | Required | Description |
|---|---|---|---|
| Name | string |  | The name of the Geo Market. _(nullable)_ |
| PercentImpressions | number (double) |  | The percentage of gross impressions served in the country. |
| TotalImpressions | integer (int64) |  | The total number of impressions served in the country. |

### `Comscore_KeyMetricsMeasurements`

| Field | Type | Required | Description |
|---|---|---|---|
| GrossImpressions | integer (int64) |  | The total tagged impressions, excluding IAB (Interactive Advertising Bureau) Spiders and Bots and comScore's internally generated impressions.    This reflects the impression counts in IAB-compliant Ad Servers. |
| GRP | number (double) |  | Gross Rating Points (GRP) is based on the In-Geo PC Human Impressions delivered to the Total Census Population for the targeted country (population). |
| InGeoPCAverageFrequency | number (double) |  | The average number of PC Impressions served in the targeted country (population) to Unique Viewers in the campaign during the reporting period. |
| InGeoPCImpressions | integer (int64) |  | The number of PC Impressions served within the targeted country, excluding mobile and tablet. |
| InGeoPCUniqueViewers | integer (int64) |  | The number of PC Unique Viewers (i.e., de-duplicated) served within the targeted country, excluding mobile and tablet. |
| InTargetImpressions | integer (int64) |  | The number of In-Geo PC Human Impressions that are served within your selected demographic target. |
| PCImpressions | integer (int64) |  | The number of Gross Impressions served to a PC device only, excludes mobile and tablet. |
| PercentInTargetImpressions | number (double) |  | The percentage of In-Geo PC Human Impressions that are served within your selected demographic target. |
| PercentPopulationReach | number (double) |  | Among the Total Census Population for the targeted country (population), the percentage who were reached by the campaign during the reporting period.    For countries other than the United States, Canada, and Spain, this metric is available for demographic groups based on age and gender. |
| TRP | number (double) |  | Target Rating Points (TRP) is based on the In-Geo PC Human Impressions delivered to the Total Census Population in your selected demographic target.    For countries other than the United States, Canada, and Spain, this metric is available only for demographic groups based on age and gender. |

### `Comscore_LocalMarketMeasurement`

| Field | Type | Required | Description |
|---|---|---|---|
| Name | string |  | The Name of the designated market area. _(nullable)_ |
| PercentImpressions | number (double) |  | The percentage of gross impressions served in the designated market area. |

### `Nielsen_CountryDemographicMeasurement`

| Field | Type | Required | Description |
|---|---|---|---|
| CountryName | string |  | The Name of the country for which the demographic measurements belong. _(nullable)_ |
| DemographicMeasurements | array<`Nielsen_DemographicMeasurement`> |  | The metrics broken out by additional demographic groups (ex: males 18-20, 21-24 etc) within the country. _(nullable)_ |

### `Nielsen_GeoMeasurement`

| Field | Type | Required | Description |
|---|---|---|---|
| CostPerPoint | number (double) |  | The Cost per impression served for this Geo. |
| GrossRatingPoint | number (double) |  | The Gross Rating Point, an estimate of the total penetration of advertising for this Geo. |
| ImpressionCount | integer (int64) |  | The total impressions served to this Geo. |
| Name | string |  | The Name of the Geo Market. _(nullable)_ |

### `AdGroup_AdGroupSortingField`

Type: string enum(Name, Description, Budget, BudgetInImpressions, DailyBudget, DailyBudgetInImpressions)

### `AdGroup_AdGroupBudgetSettings_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdGroupFlights | array<`AdGroup_AdGroupFlight_post`> |  | The List of flights associated with this adgroup. AdGroupFlights that are no longer active should not be modified. |
| AllocationType | `TheTradeDesk.AdPlatform.Shared.DB.Provisioning_BudgetAllocationType` |  | The budget allocation type for the ad group. For Solimar budgeted campaigns this will always be `maximum`.   For Kokai budgeted campaigns this value can only be `Minimum` for now. |
| AutoAllocatorPriority | integer (int32) |  | The rank or priority that determines the order of which this ad group automatically receives spend from the campaign budget.   Here's what you need to know about this property:   - To set a priority for an ad group, in a [POST / campaign](/v3/portal/api/ref/post-campaign) or [PUT /campaign](/v3/portal/api/ref/put-campaign) call, set the `AutoAllocatorEnabled` property value to `true` and `AutoPrioritizationEnabled` to `false`.   - The default value for this property is `0`.   - This must be a value between 1 and 10 with a value of `1` being the highest priority.   For details and best practices about allocating a campaign budget, see [Budget Allocation](/v3/portal/api/doc/CampaignBudgets). _(SOLIMAR: Applies only to ad groups in campaigns with the Solimar budgeting version.)_ |
| Budget | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The total amount the ad group may spend over its lifetime. Here's what you need to know about this property:   - This must be in the currency of the advertiser that owns the ad group.   - For ad groups that have flights, this value is determined based on the values in the `AdGroupFlights` object array and may not be modified.   - If you're planning a campaign with a fluid budget, consider setting this amount to be equal to the campaign budget amount. For details, see [Budget Allocation](/v3/portal/api/doc/CampaignBudgets). |
| BudgetInImpressions | integer (int64) |  | The total number of impressions the Ad Group may serve over its lifetime. This may only be set if the Campaign has an impression budget. The sum of the Ad Group impression budgets within a Campaign must not exceed the Campaign's impression budget.   **NOTE**: An impression budget may not be set for an ad group with base bid auto-optimization enabled. If an impression budget is set for such an ad group, an error will be returned with http status 400 (BadRequest).   In case of ad groups that have flights, this value will be determined based on the values from the AdGroupFlights, and may not be modified. _(nullable)_ |
| DailyBudget | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The total amount the Ad Group should spend in a single day, if able. This must be in the currency of the Advertiser that owns the Ad Group. If you do not wish to limit the daily spend of the Ad Group, set this equal to the total Ad Group budget.   Please note that if you have pacing enabled, the Ad Group may spend more than this in a given day if it needs to increase the average spend rate to meet overall pacing goals.   This must be null when pacing to end of flight.   In case of ad groups that have flights, this value will be determined based on the values from the AdGroupFlights, and may not be modified. _(nullable)_ |
| DailyBudgetInImpressions | integer (int64) |  | The total number of impressions the Ad Group should serve in a single day, if able. This may only be set if the Ad Group has an impression budget. If you have an impression budget but do not wish to limit the daily impressions of the Ad Group, set this equal to the total Ad Group impression budget.   **NOTE**: If you have pacing enabled, the Ad Group may serve more impressions than this in a given day if it needs to increase the average rate to meet overall pacing goals.   **NOTE**: A daily impression budget may not be set for an ad group with base bid auto-optimization enabled. If a daily impression budget is set for such an ad group, an error will be returned with http status 400 (BadRequest).   This must be null when pacing to end of flight.   In case of ad groups that have flights, this value will be determined based on the values from the AdGroupFlights, and may not be modified. _(nullable)_ |
| PacingMode | `AdGroup_PacingMode` |  | The pacing mode specifies how the ad group attempts to spend its budget over time.   Required on create. _(SOLIMAR: Applies only to ad groups in campaigns with the Solimar budgeting version.)_ |

### `AdGroup_AdGroupAudienceTargeting_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AudienceAcceleratorExclusionsEnabled | boolean |  |  |
| AudienceBoosterEnabled | boolean |  | If set to `true`, adds more relevant, high-performing data segments that are similar to the advertiser's target audience. In other words, ads will be served only to users who benefit the campaign and are most likely to convert. For details, see [Ad Group](/v3/portal/api/doc/AdGroup).   The default value is `false`.    **IMPORTANT**: To take advantage of this performance-enhancing functionality, the ad group must have CPA or ROAS goals. |
| AudienceExcluderEnabled | boolean |  | If set to `true`, generates a custom audience for the ad group that excludes the less relevant data segments that are different from the advertiser's target audience. In other words, this custom audience excludes users who are less likely to benefit the campaign. Here's what you need to know about this property:   - This property cannot be used in conjunction with the `Audience`, `AudiencePredictor`, or `TargetDemographicSettings` settings.    - Advertisers in certain industry categories may not use this functionality.   **NOTE**: This property controls the Prism settings for the ad group. For details, see [Prism](/v3/portal/api/doc/Prism). |
| AudienceId | string |  | The ID of the Audience to target. If you wish to remove Audience Targeting from an Ad Group, set this to null.   **NOTE**: An Audience with multiple included Data Groups may not be assigned to an Ad Group with audience auto-optimization enabled. If such an Audience is assigned to an ad group with audience auto-optimization enabled, an error will be returned with http status 400 (BadRequest). _(nullable)_ |
| AudiencePredictorEnabled | boolean |  | Enabling Koa™ Audience Predictor automatically generates a lookalike audience targeting users known to be of high value based on the configured goal for the `AdGroup`. We recommend Audience Predictor as a targeting strategy to complement your other prospecting ad groups. Because this feature generates a custom audience for the `AdGroup`, it cannot be used in conjunction with a`Audience`, `AudienceExcluder`, or `TargetDemographicSettings`. Data usage fees apply and vary based on factors like the configured goal for the `AdGroup` or the advertiser's industry category. Advertisers in some industry categories cannot use Audience Predictor. |
| AudienceRetargetingEnabled | boolean |  | Enabling this optimization will only include users determined to be high value, and will calculate bids for these users based off their scored value.   Enabling this will create a new retargeting ID for this adgroup, which will consist of the TTID's considered valuable by Audience Retargeting. _(SOLIMAR: This property is deprecated in Kokai and applies only to Solimar ad groups.)_ |
| AudienceRetargetingSettings | `AdGroup_AdGroupAudienceRetargetingSettings_post` |  | By default, we will add all Conversion and Retargeting tracking tags to the audience in addition to the scored users segment. If you want to specify a list of tracking tags to be used instead of everything, pass it in here as a list of First Party Data Ids.   This will only be applied when AudienceRetargetingEnabled is enabled. _(nullable; SOLIMAR: This property is deprecated in Kokai and applies only to Solimar ad groups.)_ |
| CrossDeviceVendorListForAudience | array<`CrossDevice_AdGroupCrossDeviceVendor_post`> |  | Cross-device data from your selected provider will be used to extend the reach of your Audience across devices. This provider’s data will also be used for f-capping at the Ad Group and Campaign level. Pricing and coverage vary by provider, so please review our cross-device provider comparison before making your selection. Data usage fees will only be applied when cross-device data is used to extend your Audience or for f-capping, not on impressions bought against your original Audience.   For details, see [Cross-Device Targeting](/v3/portal/api/doc/CrossDeviceTargeting).   Note that at this point in time this list may contain only one vendor. |
| CustomAudienceAcceleratorExclusions | array<`CrossDevice_CustomAudienceAcceleratorExclusion`> |  | _(nullable)_ |
| RecencyExclusionWindowInMinutes | integer (int32) |  | The complement to Recency Adjustments, this is the amount of time to exclude users who are in the Excluded Data Groups of the Audience.   For example, if your product is purchased at regular intervals by your customers, you may not want to immediately target somebody who just converted, but you may not want to exclude them forever either. So if your Audience excludes "Converted Users" but you know those users are likely to convert again after, say, 7 days, you may want to set your exclusion window to 6 days so you begin showing them ads leading up to their likely 7th-day conversion. This is simply a contrived example and the specific setting will depend on your use case.   If you're not sure how to configure this window, 129600 (90 days) is a reasonable default you may want to start with. It's also the default value used if this is not specified on create. |
| TargetDemographicSettings | `Nielsen_TargetDemographicSettings_post` |  | Target specific demographic data that will be used to target segments of your Audience.   This will only be applied when the TargetDemographicSettingsEnabled is set. _(nullable; SOLIMAR: This property is deprecated in Kokai and applies only to Solimar ad groups.)_ |
| TargetDemographicSettingsEnabled | boolean |  | Target specific demographic data that will be used to target segments of your Audience.   In order to enable Nielsen with this property, a value for NielsenSettings must be provided and the ROIGoal must be set to NielsenOTP. An empty constructor for NielsenSettings will work.   TargetDemographicSettings must be provided when this setting is enabled. It cannot be used in conjunction with AudiencePredictor or AudienceExcluder. _(SOLIMAR: This property is deprecated in Kokai and applies only to Solimar ad groups.)_ |
| TargetInterestSettings | `InterestTargeting_TargetInterestSettings_post` |  | Target specific interest data that is most relevant to you.   This will only be applied when the TargetInterestSettingsEnabled is set. _(nullable; SOLIMAR: This property is deprecated in Kokai and applies only to Solimar ad groups.)_ |
| TargetInterestSettingsEnabled | boolean |  | Target specific interest data that is most relevant to you.   TargetInterestSettings must be provided when this setting is enabled. It cannot be used in conjunction with AudiencePredictor or AudienceExcluder. _(SOLIMAR: This property is deprecated in Kokai and applies only to Solimar ad groups.)_ |
| TargetTrackableUsersEnabled | boolean |  | Enabling this optimization will restrict targeting to only trackable users (Users with a TDID)   As this will create a new Audience targeting only trackable users, it cannot be used if an AudienceId is also provided |
| UseMcIdAsPrimary | boolean |  | Base your primary audience targeting strategy on geo interest segments   Select this option to increase the scale available to ad groups that use geo interest audience targeting. By default, ad groups that use geo interest audience targeting act as a fallback to the Adbrain Household Graph and can only bid on avails that other forms of audience targeting can't reach. Selecting this option gives this ad group the chance to bid on all avails. |

### `AdGroup_AdGroupContractTargeting_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AllowOpenMarketBiddingWhenTargetingContracts | boolean |  | When targeting contracts, this property controls whether the ad group will bid exclusively on contracts or bid on both contracts and the open market. When creating an ad group targeting contracts, this property sets to false by default, and the ad group will only bid on contracts. Creating an ad group targeting contracts with this property set to true means the ad group will bid both on the open market and contracts. Target contracts using bid lists containing the PrivateContractId dimension. In Programmatic Guaranteed (high-fill) ad groups, this property is read-only and set to false because this type of ad group can only bid on contracts. When creating an ad group that isn't targeting contracts, this property sets to false by default and the ad group will bid on the open market. |
| ContractFloorPricePercentageIncrease | number (double) |  | This setting defines a percentage that will be added on top of the contract floor price. This value is specified as a numeric value.   For example, a 5% increase is specified as 5. _(SOLIMAR: This property is deprecated in Kokai and applies only to Solimar ad groups.)_ |
| UseContractFloorPriceAsBaseBid | boolean |  | When enabled, we will use the contract floor price instead of the Ad Group's base bid. When a contract floor price can't be found, the Ad Group's base bid will be used. _(SOLIMAR: This property is deprecated in Kokai.)_ |

### `AdGroup_NielsenSettings_post`

| Field | Type | Required | Description |
|---|---|---|---|
| NielsenTrackingAttributes | `AdGroup_NielsenTrackingAttributes_post` |  | The Nielsen Tracking properties that have been set for the Ad Group.   A null value in this property indicates that Nielsen Tracking has not been enabled for the Ad Group. _(nullable)_ |

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

### `AdGroup_AdGroupBudgetSettings_put`

| Field | Type | Required | Description |
|---|---|---|---|
| AdGroupFlights | array<`AdGroup_AdGroupFlight_put`> |  | The List of flights associated with this adgroup. AdGroupFlights that are no longer active should not be modified. |
| AllocationType | `TheTradeDesk.AdPlatform.Shared.DB.Provisioning_BudgetAllocationType` |  | The budget allocation type for the ad group. For Solimar budgeted campaigns this will always be `maximum`.   For Kokai budgeted campaigns this value can only be `Minimum` for now. |
| AutoAllocatorPriority | integer (int32) |  | The rank or priority that determines the order of which this ad group automatically receives spend from the campaign budget.   Here's what you need to know about this property:   - To set a priority for an ad group, in a [POST / campaign](/v3/portal/api/ref/post-campaign) or [PUT /campaign](/v3/portal/api/ref/put-campaign) call, set the `AutoAllocatorEnabled` property value to `true` and `AutoPrioritizationEnabled` to `false`.   - The default value for this property is `0`.   - This must be a value between 1 and 10 with a value of `1` being the highest priority.   For details and best practices about allocating a campaign budget, see [Budget Allocation](/v3/portal/api/doc/CampaignBudgets). _(SOLIMAR: Applies only to ad groups in campaigns with the Solimar budgeting version.)_ |
| Budget | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The total amount the ad group may spend over its lifetime. Here's what you need to know about this property:   - This must be in the currency of the advertiser that owns the ad group.   - For ad groups that have flights, this value is determined based on the values in the `AdGroupFlights` object array and may not be modified.   - If you're planning a campaign with a fluid budget, consider setting this amount to be equal to the campaign budget amount. For details, see [Budget Allocation](/v3/portal/api/doc/CampaignBudgets). |
| BudgetInImpressions | integer (int64) |  | The total number of impressions the Ad Group may serve over its lifetime. This may only be set if the Campaign has an impression budget. The sum of the Ad Group impression budgets within a Campaign must not exceed the Campaign's impression budget.   **NOTE**: An impression budget may not be set for an ad group with base bid auto-optimization enabled. If an impression budget is set for such an ad group, an error will be returned with http status 400 (BadRequest).   In case of ad groups that have flights, this value will be determined based on the values from the AdGroupFlights, and may not be modified. _(nullable)_ |
| DailyBudget | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The total amount the Ad Group should spend in a single day, if able. This must be in the currency of the Advertiser that owns the Ad Group. If you do not wish to limit the daily spend of the Ad Group, set this equal to the total Ad Group budget.   Please note that if you have pacing enabled, the Ad Group may spend more than this in a given day if it needs to increase the average spend rate to meet overall pacing goals.   This must be null when pacing to end of flight.   In case of ad groups that have flights, this value will be determined based on the values from the AdGroupFlights, and may not be modified. _(nullable)_ |
| DailyBudgetInImpressions | integer (int64) |  | The total number of impressions the Ad Group should serve in a single day, if able. This may only be set if the Ad Group has an impression budget. If you have an impression budget but do not wish to limit the daily impressions of the Ad Group, set this equal to the total Ad Group impression budget.   **NOTE**: If you have pacing enabled, the Ad Group may serve more impressions than this in a given day if it needs to increase the average rate to meet overall pacing goals.   **NOTE**: A daily impression budget may not be set for an ad group with base bid auto-optimization enabled. If a daily impression budget is set for such an ad group, an error will be returned with http status 400 (BadRequest).   This must be null when pacing to end of flight.   In case of ad groups that have flights, this value will be determined based on the values from the AdGroupFlights, and may not be modified. _(nullable)_ |
| PacingMode | `AdGroup_PacingMode` |  | The pacing mode specifies how the ad group attempts to spend its budget over time.   Required on create. _(SOLIMAR: Applies only to ad groups in campaigns with the Solimar budgeting version.)_ |

### `AdGroup_AdGroupAudienceTargeting_put`

| Field | Type | Required | Description |
|---|---|---|---|
| AudienceAcceleratorExclusionsEnabled | boolean |  |  |
| AudienceBoosterEnabled | boolean |  | If set to `true`, adds more relevant, high-performing data segments that are similar to the advertiser's target audience. In other words, ads will be served only to users who benefit the campaign and are most likely to convert. For details, see [Ad Group](/v3/portal/api/doc/AdGroup).   The default value is `false`.    **IMPORTANT**: To take advantage of this performance-enhancing functionality, the ad group must have CPA or ROAS goals. |
| AudienceExcluderEnabled | boolean |  | If set to `true`, generates a custom audience for the ad group that excludes the less relevant data segments that are different from the advertiser's target audience. In other words, this custom audience excludes users who are less likely to benefit the campaign. Here's what you need to know about this property:   - This property cannot be used in conjunction with the `Audience`, `AudiencePredictor`, or `TargetDemographicSettings` settings.    - Advertisers in certain industry categories may not use this functionality.   **NOTE**: This property controls the Prism settings for the ad group. For details, see [Prism](/v3/portal/api/doc/Prism). |
| AudienceId | string |  | The ID of the Audience to target. If you wish to remove Audience Targeting from an Ad Group, set this to null.   **NOTE**: An Audience with multiple included Data Groups may not be assigned to an Ad Group with audience auto-optimization enabled. If such an Audience is assigned to an ad group with audience auto-optimization enabled, an error will be returned with http status 400 (BadRequest). _(nullable)_ |
| AudiencePredictorEnabled | boolean |  | Enabling Koa™ Audience Predictor automatically generates a lookalike audience targeting users known to be of high value based on the configured goal for the `AdGroup`. We recommend Audience Predictor as a targeting strategy to complement your other prospecting ad groups. Because this feature generates a custom audience for the `AdGroup`, it cannot be used in conjunction with a`Audience`, `AudienceExcluder`, or `TargetDemographicSettings`. Data usage fees apply and vary based on factors like the configured goal for the `AdGroup` or the advertiser's industry category. Advertisers in some industry categories cannot use Audience Predictor. |
| AudienceRetargetingEnabled | boolean |  | Enabling this optimization will only include users determined to be high value, and will calculate bids for these users based off their scored value.   Enabling this will create a new retargeting ID for this adgroup, which will consist of the TTID's considered valuable by Audience Retargeting. _(SOLIMAR: This property is deprecated in Kokai and applies only to Solimar ad groups.)_ |
| AudienceRetargetingSettings | `AdGroup_AdGroupAudienceRetargetingSettings_put` |  | By default, we will add all Conversion and Retargeting tracking tags to the audience in addition to the scored users segment. If you want to specify a list of tracking tags to be used instead of everything, pass it in here as a list of First Party Data Ids.   This will only be applied when AudienceRetargetingEnabled is enabled. _(nullable; SOLIMAR: This property is deprecated in Kokai and applies only to Solimar ad groups.)_ |
| CrossDeviceVendorListForAudience | array<`CrossDevice_AdGroupCrossDeviceVendor_put`> |  | Cross-device data from your selected provider will be used to extend the reach of your Audience across devices. This provider’s data will also be used for f-capping at the Ad Group and Campaign level. Pricing and coverage vary by provider, so please review our cross-device provider comparison before making your selection. Data usage fees will only be applied when cross-device data is used to extend your Audience or for f-capping, not on impressions bought against your original Audience.   For details, see [Cross-Device Targeting](/v3/portal/api/doc/CrossDeviceTargeting).   Note that at this point in time this list may contain only one vendor. |
| CustomAudienceAcceleratorExclusions | array<`CrossDevice_CustomAudienceAcceleratorExclusion`> |  | _(nullable)_ |
| RecencyExclusionWindowInMinutes | integer (int32) |  | The complement to Recency Adjustments, this is the amount of time to exclude users who are in the Excluded Data Groups of the Audience.   For example, if your product is purchased at regular intervals by your customers, you may not want to immediately target somebody who just converted, but you may not want to exclude them forever either. So if your Audience excludes "Converted Users" but you know those users are likely to convert again after, say, 7 days, you may want to set your exclusion window to 6 days so you begin showing them ads leading up to their likely 7th-day conversion. This is simply a contrived example and the specific setting will depend on your use case.   If you're not sure how to configure this window, 129600 (90 days) is a reasonable default you may want to start with. It's also the default value used if this is not specified on create. |
| TargetDemographicSettings | `Nielsen_TargetDemographicSettings_put` |  | Target specific demographic data that will be used to target segments of your Audience.   This will only be applied when the TargetDemographicSettingsEnabled is set. _(nullable; SOLIMAR: This property is deprecated in Kokai and applies only to Solimar ad groups.)_ |
| TargetDemographicSettingsEnabled | boolean |  | Target specific demographic data that will be used to target segments of your Audience.   In order to enable Nielsen with this property, a value for NielsenSettings must be provided and the ROIGoal must be set to NielsenOTP. An empty constructor for NielsenSettings will work.   TargetDemographicSettings must be provided when this setting is enabled. It cannot be used in conjunction with AudiencePredictor or AudienceExcluder. _(SOLIMAR: This property is deprecated in Kokai and applies only to Solimar ad groups.)_ |
| TargetInterestSettings | `InterestTargeting_TargetInterestSettings_put` |  | Target specific interest data that is most relevant to you.   This will only be applied when the TargetInterestSettingsEnabled is set. _(nullable; SOLIMAR: This property is deprecated in Kokai and applies only to Solimar ad groups.)_ |
| TargetInterestSettingsEnabled | boolean |  | Target specific interest data that is most relevant to you.   TargetInterestSettings must be provided when this setting is enabled. It cannot be used in conjunction with AudiencePredictor or AudienceExcluder. _(SOLIMAR: This property is deprecated in Kokai and applies only to Solimar ad groups.)_ |
| TargetTrackableUsersEnabled | boolean |  | Enabling this optimization will restrict targeting to only trackable users (Users with a TDID)   As this will create a new Audience targeting only trackable users, it cannot be used if an AudienceId is also provided |
| UseMcIdAsPrimary | boolean |  | Base your primary audience targeting strategy on geo interest segments   Select this option to increase the scale available to ad groups that use geo interest audience targeting. By default, ad groups that use geo interest audience targeting act as a fallback to the Adbrain Household Graph and can only bid on avails that other forms of audience targeting can't reach. Selecting this option gives this ad group the chance to bid on all avails. |

### `AdGroup_AdGroupContractTargeting_put`

| Field | Type | Required | Description |
|---|---|---|---|
| AllowOpenMarketBiddingWhenTargetingContracts | boolean |  | When targeting contracts, this property controls whether the ad group will bid exclusively on contracts or bid on both contracts and the open market. When creating an ad group targeting contracts, this property sets to false by default, and the ad group will only bid on contracts. Creating an ad group targeting contracts with this property set to true means the ad group will bid both on the open market and contracts. Target contracts using bid lists containing the PrivateContractId dimension. In Programmatic Guaranteed (high-fill) ad groups, this property is read-only and set to false because this type of ad group can only bid on contracts. When creating an ad group that isn't targeting contracts, this property sets to false by default and the ad group will bid on the open market. |
| ContractFloorPricePercentageIncrease | number (double) |  | This setting defines a percentage that will be added on top of the contract floor price. This value is specified as a numeric value.   For example, a 5% increase is specified as 5. _(SOLIMAR: This property is deprecated in Kokai and applies only to Solimar ad groups.)_ |
| UseContractFloorPriceAsBaseBid | boolean |  | When enabled, we will use the contract floor price instead of the Ad Group's base bid. When a contract floor price can't be found, the Ad Group's base bid will be used. _(SOLIMAR: This property is deprecated in Kokai.)_ |

### `AdGroup_NielsenSettings_put`

| Field | Type | Required | Description |
|---|---|---|---|
| NielsenTrackingAttributes | `AdGroup_NielsenTrackingAttributes_put` |  | The Nielsen Tracking properties that have been set for the Ad Group.   A null value in this property indicates that Nielsen Tracking has not been enabled for the Ad Group. _(nullable)_ |

### `DimensionalBidding_BidLine_put`

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
| FrequencyRange | `DimensionalBidding_FrequencyRange_put` |  | Target a range of values that represent how many times a user has viewed an ad based on a specific frequency counter. |
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
| FrequencyTarget | `DimensionalBidding_FrequencyTarget_put` |  | The ad frequency to target. This is a Frequency v1 setting that has been replaced by the new Frequency v2 property, `FrequencyRange`. For migration details and examples of old and new bid lists, see [Frequency Migration Phase Two](/v3/portal/api/doc/UpgradeSupportFrequencyV2FinalMigration) (contact your Technical Account Manager for permissions). For details on the new settings and resulting bid lists, see [Frequency Caps](/v3/portal/api/doc/FrequencyConfigurationBasicCaps) and [Frequency Goals](/v3/portal/api/doc/FrequencyConfigurationBasicGoals). _(DEPRECATED; deprecation: This is no longer actively used in the system.)_ |
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

### `DimensionalBidding_VolumeControlPriority`

Type: string enum(Neutral, One, Two, FrequencyGoal, Negative)

### `AdGroup_KoaOptimizationsNoOptimizationReason`

Type: string enum(Optimized, NotEnoughKpiEvents, NotEnoughSpendToBidDown, AdGroupStarvingCampaignPacing, KoaDidNotFindOptimizations, KoaBidAdjustmentTooLarge, OptimizedTrimmingOnly, AlreadyOptimized, GoalNotSupported, NoSpendOptimizationsRemoved)

### `TheTradeDesk_CurrencyCode`

Type: string enum(None, AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF, BMD, BND, BOB, BRL, BSD, BTN, BWP, BYR, BZD, CAD, CDF, CHF, CLF, CLP, CNH, CNY, COP, CRC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ERN, ETB, EUR, FJD, FKP, GBP, GEL, GHS, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HRK, HTG, HUF, IDR, ILS, INR, IQD, IRR, ISK, JMD, JOD, JPY, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LTL, LVL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MRO, MUR, MVR, MWK, MXN, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SRD, STD, SVC, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD, TWD, TZS, UAH, UGX, USD, UYU, UZS, VEF, VND, VUV, WST, XAF, XCD, XDR, XOF, XPF, YER, ZAR, ZMW, ZWL)

### `AdGroup_AdGroupFlight`

| Field | Type | Required | Description |
|---|---|---|---|
| AdGroupId | string |  | The ID of the Ad Group Flight. _(nullable)_ |
| AllocationType | `TheTradeDesk.AdPlatform.Shared.DB.Provisioning_BudgetAllocationType` |  | The budget allocation type for this ad group flight. For Solimar budgeted campaigns this will always be `Maximum`.   For Kokai budgeted campaigns this value can be `Minimum` or `Fixed`. |
| BudgetInAdvertiserCurrency | number (double) |  | The minimum, fixed, or maximum amount the ad group may spend during the flight. Here's what you need to know:   - The `AllocationType` property of the ad group flight settings determines how the ad group spends its budget.   - This amount must be in the advertiser's currency.   For details about spend allocation methods, see [REST API: Ad Group Budget Allocation for Kokai Campaigns](/v3/portal/api/doc/KokaiBudgetVersions). |
| BudgetInImpressions | integer (int64) |  | The total number of impressions the Ad Group may serve for the current flight. This may only be set if the Campaign Flight has an impression budget. The sum of the Ad Group impression budgets within a Campaign must not exceed the Campaign's Flight impression budget.   **NOTE**: An impression budget may not be set for an ad group with base bid auto-optimization enabled. If an impression budget is set for such an ad group, an error will be returned with http status 400 (BadRequest). _(nullable)_ |
| CampaignFlightId | integer (int64) |  | The ID of the Campaign Flight. |
| DailyTargetInAdvertiserCurrency | number (double) |  | The total amount the Ad Group should spend in a single day, if able. This must be in the currency of the Advertiser that owns the Ad Group. If you do not wish to limit the daily spend of the Ad Group, set this equal to the total Ad Group budget.   Please note that if you have pacing enabled, the Ad Group may spend more than this in a given day if it needs to increase the average spend rate to meet overall pacing goals.   This must be null when pacing to end of flight. _(nullable)_ |
| DailyTargetInImpressions | integer (int64) |  | The total number of impressions the Ad Group should serve in a single day, if able. This may only be set if the Ad Group has an impression budget. If you have an impression budget but do not wish to limit the daily impressions of the Ad Group, set this equal to the total Ad Group impression budget.   **NOTE**: If you have pacing enabled, the Ad Group may serve more impressions than this in a given day if it needs to increase the average rate to meet overall pacing goals.   **NOTE**: A daily impression budget may not be set for an ad group with base bid auto-optimization enabled. If a daily impression budget is set for such an ad group, an error will be returned with http status 400 (BadRequest).   This must be null when pacing to end of flight. _(nullable)_ |

### `AdGroup_PacingMode`

Type: string enum(PaceToEndOfDay, Off, PaceToEndOfFlight, PaceAhead)

### `TheTradeDesk.AdPlatform.Shared.DB.Provisioning_BudgetAllocationType`

Type: string enum(Minimum, Fixed, Maximum)

### `AdGroup_AdGroupAudienceRetargetingSettings`

| Field | Type | Required | Description |
|---|---|---|---|
| CustomizeRetargetingAudience | boolean |  | Whether to customize the retargeting audience |
| FirstPartyDataIds | array<integer (int64)> |  | A list of First Party Data Ids you would like to add to the audience in addition to the scored users data element.   Only Conversion and Retargeting Tracking Tags are available to add. This field is required when CustomizeRetargetingAudience is true. _(nullable)_ |

### `CrossDevice_AdGroupCrossDeviceVendor`

| Field | Type | Required | Description |
|---|---|---|---|
| CrossDeviceVendorFee | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Fee` |  | The fee that applies when Cross Device data is used in making a targeting decision.   This is a read-only property returned by the API _(nullable)_ |
| CrossDeviceVendorId | integer (int32) |  | The identifier for this Cross Device vendor. Use this id when enabling Cross Device targeting on ad groups. |
| CrossDeviceVendorName | string |  | The friendly name of the Cross Device vendor. _(nullable)_ |

### `CrossDevice_CustomAudienceAcceleratorExclusion`

| Field | Type | Required | Description |
|---|---|---|---|
| Name | string |  | The third-party data ID of the audience accelerator segment to exclude. _(nullable)_ |
| ThirdPartyDataId | integer (int64) |  | The third-party data ID of the audience accelerator segment to exclude. |

### `InterestTargeting_TargetInterestSettings`

| Field | Type | Required | Description |
|---|---|---|---|
| CategoryId | string |  | The ID of the interest category. The [GET /interesttargeting/query](/v3/portal/api/ref/get-interesttargeting-query) endpoint returns a list of all interest category IDs. |
| CategoryName | string |  | The name of the interest category. The [GET /interesttargeting/query](/v3/portal/api/ref/get-interesttargeting-query) endpoint returns a list of all interest category names. _(nullable)_ |

### `Nielsen_TargetDemographicSettings`

| Field | Type | Required | Description |
|---|---|---|---|
| CountryCode | string |  | The country (the code) that is being targeted for Nielsen analytics.    See nielsen/reportingcountries api for a list of valid country codes.  Note that the country codes are case sensitive. |
| DataRateType | `Nielsen_TargetDemographicDataRateType` |  | Specifies the DataRateType which is detailed in the TargetDemographicDataRateType enum. |
| EndAge | `Nielsen_TargetingEndAge` |  | The end age being targeted for Nielsen analytics.  The end age is required when Nielsen settings are specified for the first time.  If this value is lower than the start age, the API will throw an error. |
| Gender | `Nielsen_TargetingGender` |  | The gender being targeted for Nielsen analytics.  The gender is required when Nielsen settings are specified for the first time. |
| StartAge | `Nielsen_TargetingStartAge` |  | The start age being targeted for Nielsen analytics.  The start age is required when Nielsen settings are specified for the first time.  If this value is greater than the end age, the API will throw an error. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Fee`

| Field | Type | Required | Description |
|---|---|---|---|
| CPCRate | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The CPC rate in the currency the provider charges. At billing time, this will be used to determine the charge in the Advertiser's currency based on applicable exchange rates.   This will be null if there is no CPC charge to use the data/feature. _(nullable)_ |
| CPCRateInAdvertiserCurrency | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | An approximation of the CPC rate in the Advertiser's currency. The actual amount charged will depend on exchange rates, but this serves as a guideline and will be accurate within normal currency fluctuations.   This will be null if there is no CPC charge to use this data/feature. _(nullable)_ |
| CPMRate | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The CPM rate in the currency the provider charges. At billing time, this will be used to determine the charge in the Advertiser's currency based on applicable exchange rates.   This will be null if there is no CPM charge to use the data/feature. _(nullable)_ |
| CPMRateInAdvertiserCurrency | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | An approximation of the CPM rate in the Advertiser's currency. The actual amount charged will depend on exchange rates, but this serves as a guideline and will be accurate within normal currency fluctuations.   This will be null if there is no CPM charge to use this data/feature. _(nullable)_ |
| PercentOfDataCostRate | number (double) |  | The Percent of Data Cost rate of the data/feature. For example, 0.12 = 12%. This will be null if there is no Percent of Data Cost charge to use the data/feature. _(nullable)_ |
| PercentOfMediaCostRate | number (double) |  | The Percent of Media Cost rate of the data/feature. For example, 0.12 = 12%. This will be null if there is no Percent of Media Cost charge to use the data/feature. _(nullable)_ |

### `AdGroup_KoaDimensions`

| Field | Type | Required | Description |
|---|---|---|---|
| AdEnvironment | boolean |  |  |
| AdFormat | boolean |  |  |
| Browser | boolean |  |  |
| DeviceType | boolean |  |  |
| Geography | boolean |  |  |
| OS | boolean |  |  |
| Site | boolean |  |  |

### `AdGroup_KoaOptionalDimensionDescriptor`

Type: string enum(HasAdFormatId, HasGeoSegmentId)

### `AdGroup_NielsenTrackingAttributes`

| Field | Type | Required | Description |
|---|---|---|---|
| Countries | array<string> |  | The list of countries (the codes) that are being targeted for Nielsen analytics.    An empty list would indicate that no specific countries are being targeted for Nielsen analytics.    See nielsen/reportingcountries api for a list of valid country codes.  Note that the country codes are case sensitive. |
| EndAge | `Nielsen_TargetingEndAge` |  | The end age being targeted for Nielsen analytics.  The end age is required when Nielsen settings are specified for the first time.  If this value is lower than the start age, the API will throw an error. |
| EnhancedReportingOption | `AdGroup_EnhancedNielsenReportingOptions` |  | The selected Nielsen reporting option. |
| Gender | `Nielsen_TargetingGender` |  | The gender being targeted for Nielsen analytics.  The gender is required when Nielsen settings are specified for the first time. |
| StartAge | `Nielsen_TargetingStartAge` |  | The start age being targeted for Nielsen analytics.  The start age is required when Nielsen settings are specified for the first time.  If this value is greater than the end age, the API will throw an error. |

### `AdGroup_NewBuyerTargetType`

Type: string enum(Featured, Total)

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

### `DimensionalBidding_FrequencyRange`

| Field | Type | Required | Description |
|---|---|---|---|
| CounterId | string |  | Specify a counter to define the number of times an ad was shown to a user within the counter's `ResetIntervalInMinutes`. |
| TimesShown | `TheTradeDesk.AdPlatform_NonNullRange_integer_int32__` |  | The range of times the ad has been shown to the user in the look back window.   The end of a range is exclusive. The min of the range must be less than the max.   E.G. -    A range of 0 to 1 will target all users that have seen the ad 0 times, up to (not including) 1 time, such that at the end of the campaign, ideally all users will have seen the ad once.   A range of 0 to 5 will target all users that have seen the ad 0 to 4 times, such that at the end of the campaign, ideally all users will have seen the ad 5 times.   A range of 3 to 6 will target all users that have seen the ad 3, 4, or 5 times, such that at the end of the campaign, ideally all users will have seen the ad 6 times. |

### `DimensionalBidding_FrequencyTarget`

Represents the number of times an ad has been shown to a user in a range of time.

| Field | Type | Required | Description |
|---|---|---|---|
| LookBackWindowInMinutes | integer (int32) |  | The time range, looking back, over which to measure the times shown.   Value must be greater than 0. |
| TimesShown | `TheTradeDesk.AdPlatform_NonNullRange_integer_int32__` |  | The range of times the ad has been shown to the user in the look back window.   The end of a range is exclusive. The min of the range must be less than the max.   E.G. -    A range of 0 to 1 will target all users that have seen the ad 0 times, up to (not including) 1 time, such that at the end of the campaign, ideally all users will have seen the ad once.   A range of 0 to 5 will target all users that have seen the ad 0 to 4 times, such that at the end of the campaign, ideally all users will have seen the ad 5 times.   A range of 3 to 6 will target all users that have seen the ad 3, 4, or 5 times, such that at the end of the campaign, ideally all users will have seen the ad 6 times. |

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

### `PassThroughFee_AdditionalFeeType`

Type: string enum(None, MediaCostPercentage, DataCostPercentage, MediaPlusDataCostPercentage, PartnerCostPercentage, FeeCPM, RateCPM, RateCPC, CustomPMP_PartnerCostPercentage, MediaDataFeeFeaturesCostPercentage, PartnerDataCostPercentage)

### `Nielsen_DemographicMeasurement`

| Field | Type | Required | Description |
|---|---|---|---|
| CostPerPoint | number (double) |  | The cost per impression served to this demographic. |
| GrossRatingPoint | number (double) |  | The Gross Rating Point, an estimate of the total penetration of advertising for this demographic. |
| Name | string |  | The name of the demographic. _(nullable)_ |
| OnTargetPercent | number (double) |  | The percentage of total impressions served to this demographic. |

### `AdGroup_AdGroupFlight_post`

| Field | Type | Required | Description |
|---|---|---|---|
| BudgetInAdvertiserCurrency | number (double) | yes | The minimum, fixed, or maximum amount the ad group may spend during the flight. Here's what you need to know:   - The `AllocationType` property of the ad group flight settings determines how the ad group spends its budget.   - This amount must be in the advertiser's currency.   For details about spend allocation methods, see [REST API: Ad Group Budget Allocation for Kokai Campaigns](/v3/portal/api/doc/KokaiBudgetVersions). |
| CampaignFlightId | integer (int64) | yes | The ID of the Campaign Flight. |
| AllocationType | `TheTradeDesk.AdPlatform.Shared.DB.Provisioning_BudgetAllocationType` |  | The budget allocation type for this ad group flight. For Solimar budgeted campaigns this will always be `Maximum`.   For Kokai budgeted campaigns this value can be `Minimum` or `Fixed`. |
| BudgetInImpressions | integer (int64) |  | The total number of impressions the Ad Group may serve for the current flight. This may only be set if the Campaign Flight has an impression budget. The sum of the Ad Group impression budgets within a Campaign must not exceed the Campaign's Flight impression budget.   **NOTE**: An impression budget may not be set for an ad group with base bid auto-optimization enabled. If an impression budget is set for such an ad group, an error will be returned with http status 400 (BadRequest). _(nullable)_ |
| DailyTargetInAdvertiserCurrency | number (double) |  | The total amount the Ad Group should spend in a single day, if able. This must be in the currency of the Advertiser that owns the Ad Group. If you do not wish to limit the daily spend of the Ad Group, set this equal to the total Ad Group budget.   Please note that if you have pacing enabled, the Ad Group may spend more than this in a given day if it needs to increase the average spend rate to meet overall pacing goals.   This must be null when pacing to end of flight. _(nullable)_ |
| DailyTargetInImpressions | integer (int64) |  | The total number of impressions the Ad Group should serve in a single day, if able. This may only be set if the Ad Group has an impression budget. If you have an impression budget but do not wish to limit the daily impressions of the Ad Group, set this equal to the total Ad Group impression budget.   **NOTE**: If you have pacing enabled, the Ad Group may serve more impressions than this in a given day if it needs to increase the average rate to meet overall pacing goals.   **NOTE**: A daily impression budget may not be set for an ad group with base bid auto-optimization enabled. If a daily impression budget is set for such an ad group, an error will be returned with http status 400 (BadRequest).   This must be null when pacing to end of flight. _(nullable)_ |

### `AdGroup_AdGroupAudienceRetargetingSettings_post`

| Field | Type | Required | Description |
|---|---|---|---|
| CustomizeRetargetingAudience | boolean | yes | Whether to customize the retargeting audience |
| FirstPartyDataIds | array<integer (int64)> |  | A list of First Party Data Ids you would like to add to the audience in addition to the scored users data element.   Only Conversion and Retargeting Tracking Tags are available to add. This field is required when CustomizeRetargetingAudience is true. _(nullable)_ |

### `CrossDevice_AdGroupCrossDeviceVendor_post`

| Field | Type | Required | Description |
|---|---|---|---|
| CrossDeviceVendorId | integer (int32) |  | The identifier for this Cross Device vendor. Use this id when enabling Cross Device targeting on ad groups. |
| CrossDeviceVendorName | string |  | The friendly name of the Cross Device vendor. _(nullable)_ |

### `InterestTargeting_TargetInterestSettings_post`

| Field | Type | Required | Description |
|---|---|---|---|
| CategoryId | string | yes | The ID of the interest category. The [GET /interesttargeting/query](/v3/portal/api/ref/get-interesttargeting-query) endpoint returns a list of all interest category IDs. |
| CategoryName | string |  | The name of the interest category. The [GET /interesttargeting/query](/v3/portal/api/ref/get-interesttargeting-query) endpoint returns a list of all interest category names. _(nullable)_ |

### `Nielsen_TargetDemographicSettings_post`

| Field | Type | Required | Description |
|---|---|---|---|
| CountryCode | string | yes | The country (the code) that is being targeted for Nielsen analytics.    See nielsen/reportingcountries api for a list of valid country codes.  Note that the country codes are case sensitive. |
| DataRateType | `Nielsen_TargetDemographicDataRateType` | yes | Specifies the DataRateType which is detailed in the TargetDemographicDataRateType enum. |
| EndAge | `Nielsen_TargetingEndAge` | yes | The end age being targeted for Nielsen analytics.  The end age is required when Nielsen settings are specified for the first time.  If this value is lower than the start age, the API will throw an error. |
| Gender | `Nielsen_TargetingGender` | yes | The gender being targeted for Nielsen analytics.  The gender is required when Nielsen settings are specified for the first time. |
| StartAge | `Nielsen_TargetingStartAge` | yes | The start age being targeted for Nielsen analytics.  The start age is required when Nielsen settings are specified for the first time.  If this value is greater than the end age, the API will throw an error. |

### `AdGroup_NielsenTrackingAttributes_post`

| Field | Type | Required | Description |
|---|---|---|---|
| Countries | array<string> | yes | The list of countries (the codes) that are being targeted for Nielsen analytics.    An empty list would indicate that no specific countries are being targeted for Nielsen analytics.    See nielsen/reportingcountries api for a list of valid country codes.  Note that the country codes are case sensitive. |
| EndAge | `Nielsen_TargetingEndAge` | yes | The end age being targeted for Nielsen analytics.  The end age is required when Nielsen settings are specified for the first time.  If this value is lower than the start age, the API will throw an error. |
| Gender | `Nielsen_TargetingGender` | yes | The gender being targeted for Nielsen analytics.  The gender is required when Nielsen settings are specified for the first time. |
| StartAge | `Nielsen_TargetingStartAge` | yes | The start age being targeted for Nielsen analytics.  The start age is required when Nielsen settings are specified for the first time.  If this value is greater than the end age, the API will throw an error. |
| EnhancedReportingOption | `AdGroup_EnhancedNielsenReportingOptions` |  | The selected Nielsen reporting option. |

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

### `AdGroup_AdGroupFlight_put`

| Field | Type | Required | Description |
|---|---|---|---|
| CampaignFlightId | integer (int64) | yes | The ID of the Campaign Flight. |
| AllocationType | `TheTradeDesk.AdPlatform.Shared.DB.Provisioning_BudgetAllocationType` |  | The budget allocation type for this ad group flight. For Solimar budgeted campaigns this will always be `Maximum`.   For Kokai budgeted campaigns this value can be `Minimum` or `Fixed`. |
| BudgetInAdvertiserCurrency | number (double) |  | The minimum, fixed, or maximum amount the ad group may spend during the flight. Here's what you need to know:   - The `AllocationType` property of the ad group flight settings determines how the ad group spends its budget.   - This amount must be in the advertiser's currency.   For details about spend allocation methods, see [REST API: Ad Group Budget Allocation for Kokai Campaigns](/v3/portal/api/doc/KokaiBudgetVersions). |
| BudgetInImpressions | integer (int64) |  | The total number of impressions the Ad Group may serve for the current flight. This may only be set if the Campaign Flight has an impression budget. The sum of the Ad Group impression budgets within a Campaign must not exceed the Campaign's Flight impression budget.   **NOTE**: An impression budget may not be set for an ad group with base bid auto-optimization enabled. If an impression budget is set for such an ad group, an error will be returned with http status 400 (BadRequest). _(nullable)_ |
| DailyTargetInAdvertiserCurrency | number (double) |  | The total amount the Ad Group should spend in a single day, if able. This must be in the currency of the Advertiser that owns the Ad Group. If you do not wish to limit the daily spend of the Ad Group, set this equal to the total Ad Group budget.   Please note that if you have pacing enabled, the Ad Group may spend more than this in a given day if it needs to increase the average spend rate to meet overall pacing goals.   This must be null when pacing to end of flight. _(nullable)_ |
| DailyTargetInImpressions | integer (int64) |  | The total number of impressions the Ad Group should serve in a single day, if able. This may only be set if the Ad Group has an impression budget. If you have an impression budget but do not wish to limit the daily impressions of the Ad Group, set this equal to the total Ad Group impression budget.   **NOTE**: If you have pacing enabled, the Ad Group may serve more impressions than this in a given day if it needs to increase the average rate to meet overall pacing goals.   **NOTE**: A daily impression budget may not be set for an ad group with base bid auto-optimization enabled. If a daily impression budget is set for such an ad group, an error will be returned with http status 400 (BadRequest).   This must be null when pacing to end of flight. _(nullable)_ |

### `AdGroup_AdGroupAudienceRetargetingSettings_put`

| Field | Type | Required | Description |
|---|---|---|---|
| CustomizeRetargetingAudience | boolean | yes | Whether to customize the retargeting audience |
| FirstPartyDataIds | array<integer (int64)> |  | A list of First Party Data Ids you would like to add to the audience in addition to the scored users data element.   Only Conversion and Retargeting Tracking Tags are available to add. This field is required when CustomizeRetargetingAudience is true. _(nullable)_ |

### `CrossDevice_AdGroupCrossDeviceVendor_put`

| Field | Type | Required | Description |
|---|---|---|---|
| CrossDeviceVendorId | integer (int32) |  | The identifier for this Cross Device vendor. Use this id when enabling Cross Device targeting on ad groups. |
| CrossDeviceVendorName | string |  | The friendly name of the Cross Device vendor. _(nullable)_ |

### `InterestTargeting_TargetInterestSettings_put`

| Field | Type | Required | Description |
|---|---|---|---|
| CategoryId | string | yes | The ID of the interest category. The [GET /interesttargeting/query](/v3/portal/api/ref/get-interesttargeting-query) endpoint returns a list of all interest category IDs. |
| CategoryName | string |  | The name of the interest category. The [GET /interesttargeting/query](/v3/portal/api/ref/get-interesttargeting-query) endpoint returns a list of all interest category names. _(nullable)_ |

### `Nielsen_TargetDemographicSettings_put`

| Field | Type | Required | Description |
|---|---|---|---|
| CountryCode | string | yes | The country (the code) that is being targeted for Nielsen analytics.    See nielsen/reportingcountries api for a list of valid country codes.  Note that the country codes are case sensitive. |
| DataRateType | `Nielsen_TargetDemographicDataRateType` | yes | Specifies the DataRateType which is detailed in the TargetDemographicDataRateType enum. |
| EndAge | `Nielsen_TargetingEndAge` | yes | The end age being targeted for Nielsen analytics.  The end age is required when Nielsen settings are specified for the first time.  If this value is lower than the start age, the API will throw an error. |
| Gender | `Nielsen_TargetingGender` | yes | The gender being targeted for Nielsen analytics.  The gender is required when Nielsen settings are specified for the first time. |
| StartAge | `Nielsen_TargetingStartAge` | yes | The start age being targeted for Nielsen analytics.  The start age is required when Nielsen settings are specified for the first time.  If this value is greater than the end age, the API will throw an error. |

### `AdGroup_NielsenTrackingAttributes_put`

| Field | Type | Required | Description |
|---|---|---|---|
| Countries | array<string> |  | The list of countries (the codes) that are being targeted for Nielsen analytics.    An empty list would indicate that no specific countries are being targeted for Nielsen analytics.    See nielsen/reportingcountries api for a list of valid country codes.  Note that the country codes are case sensitive. |
| EndAge | `Nielsen_TargetingEndAge` |  | The end age being targeted for Nielsen analytics.  The end age is required when Nielsen settings are specified for the first time.  If this value is lower than the start age, the API will throw an error. |
| EnhancedReportingOption | `AdGroup_EnhancedNielsenReportingOptions` |  | The selected Nielsen reporting option. |
| Gender | `Nielsen_TargetingGender` |  | The gender being targeted for Nielsen analytics.  The gender is required when Nielsen settings are specified for the first time. |
| StartAge | `Nielsen_TargetingStartAge` |  | The start age being targeted for Nielsen analytics.  The start age is required when Nielsen settings are specified for the first time.  If this value is greater than the end age, the API will throw an error. |

### `DimensionalBidding_FrequencyRange_put`

| Field | Type | Required | Description |
|---|---|---|---|
| CounterId | string | yes | Specify a counter to define the number of times an ad was shown to a user within the counter's `ResetIntervalInMinutes`. |
| TimesShown | `TheTradeDesk.AdPlatform_NonNullRange_integer_int32__` | yes | The range of times the ad has been shown to the user in the look back window.   The end of a range is exclusive. The min of the range must be less than the max.   E.G. -    A range of 0 to 1 will target all users that have seen the ad 0 times, up to (not including) 1 time, such that at the end of the campaign, ideally all users will have seen the ad once.   A range of 0 to 5 will target all users that have seen the ad 0 to 4 times, such that at the end of the campaign, ideally all users will have seen the ad 5 times.   A range of 3 to 6 will target all users that have seen the ad 3, 4, or 5 times, such that at the end of the campaign, ideally all users will have seen the ad 6 times. |

### `DimensionalBidding_FrequencyTarget_put`

Represents the number of times an ad has been shown to a user in a range of time.

| Field | Type | Required | Description |
|---|---|---|---|
| LookBackWindowInMinutes | integer (int32) | yes | The time range, looking back, over which to measure the times shown.   Value must be greater than 0. |
| TimesShown | `TheTradeDesk.AdPlatform_NonNullRange_integer_int32__` | yes | The range of times the ad has been shown to the user in the look back window.   The end of a range is exclusive. The min of the range must be less than the max.   E.G. -    A range of 0 to 1 will target all users that have seen the ad 0 times, up to (not including) 1 time, such that at the end of the campaign, ideally all users will have seen the ad once.   A range of 0 to 5 will target all users that have seen the ad 0 to 4 times, such that at the end of the campaign, ideally all users will have seen the ad 5 times.   A range of 3 to 6 will target all users that have seen the ad 3, 4, or 5 times, such that at the end of the campaign, ideally all users will have seen the ad 6 times. |

### `Nielsen_TargetDemographicDataRateType`

Type: string enum(CPM, RevShare, Hybrid)

### `Nielsen_TargetingEndAge`

Type: string enum(Seventeen, Twenty, TwentyFour, TwentyNine, ThirtyFour, ThirtyNine, FortyFour, FortyNine, FiftyFour, SixtyFour, SixtyFourPlus)

### `Nielsen_TargetingGender`

Type: string enum(Male, Female, Both)

### `Nielsen_TargetingStartAge`

Type: string enum(Two, Thirteen, Eighteen, TwentyOne, TwentyFive, Thirty, ThirtyFive, Forty, FortyFive, Fifty, FiftyFive, SixtyFive)

### `AdGroup_EnhancedNielsenReportingOptions`

Type: string enum(None, Audience, Site)

### `TheTradeDesk.AdPlatform_NonNullRange_integer_int32__`

| Field | Type | Required | Description |
|---|---|---|---|
| Max | integer (int32) |  |  |
| Min | integer (int32) |  |  |

