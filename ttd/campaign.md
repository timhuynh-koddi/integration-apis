# Campaign

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 13

---

## GET /v3/campaign/{campaignId}

Get an existing campaign by ID.  
**TIP**: Using the equivalent campaign GraphQL query, you can enhance performance, customize criteria, and, if needed, expand your search across multiple campaigns.   
For details, see [GraphQL Campaign Query Examples](/v3/portal/api/doc/CampaignQueryExamplesGQL).

Operation ID: `get-campaign-campaignid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| campaignId | path | string | yes | The ID of the campaign to retrieve. |

**Response 200** (`application/json`): `Campaign_Campaign`

---

## GET /v3/campaign/query/facets

Get the facets of Campaigns that can be queried.

Operation ID: `get-campaign-query-facets`

**Response 200** (`application/json`): `Campaign_CampaignFacets`

---

## POST /v3/campaign/query/advertiser

Get a page of Campaigns that belong to the specified Advertiser.

Operation ID: `post-campaign-query-advertiser`

**Request body** (`application/json`, required): `Campaign_CampaignQueryForAdvertiser`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_Campaign_`

---

## POST /v3/campaign/template/query/advertiser

Get a page of Campaign templates that belong to the specified Advertiser.

Operation ID: `post-campaign-template-query-advertiser`

**Request body** (`application/json`, required): `Campaign_CampaignQueryForAdvertiser`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_Campaign_`

---

## GET /v3/campaign/name/{campaignId}

Get the identifier and name for a Campaign based on identifier

Operation ID: `get-campaign-name-campaignid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| campaignId | path | string | yes |  |

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_IdName`

---

## GET /v3/campaign/{campaignId}/metrics

Get metrics for an existing campaign.

Operation ID: `get-campaign-campaignid-metrics`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| campaignId | path | string | yes | The ID of the campaign for which we retrieve the metrics. |

**Response 200** (`application/json`): `Campaign_CampaignMetrics`

---

## PUT /v3/campaign

Update an existing campaign.

Operation ID: `put-campaign`

**Request body** (`application/json`, required): `Campaign_Campaign_put`

**Response 200** (`application/json`): `Campaign_Campaign`

---

## POST /v3/campaign

Create a new campaign.

Operation ID: `post-campaign`

**Request body** (`application/json`, required): `Campaign_Campaign_post`

**Response 200** (`application/json`): `Campaign_Campaign`

---

## POST /v3/campaign/clone

Submits a job to clone a campaign.   
**IMPORTANT**: Here's what you need to know about this endpoint:   
- The API does not wait for the clone process to complete.  
- You can check outcome of the cloning process by calling the [GET /campaign/clone/status/{referenceId}](/v3/portal/api/ref/get-campaign-clone-status-referenceid) endpoint.  
- The URL, including the `ReferenceId`, is also given in the Location header.  
- You may not use this endpoint to clone campaigns with more than 500 ad group.  
- If the campaign to be cloned has Advanced Frequency Settings configured, they will not be cloned. To avoid unintentional spend, be sure to update your cloned campaign frequency settings accordingly.

Operation ID: `post-campaign-clone`

**Request body** (`application/json`, required): `Campaign_CloneCampaignParameters_post`

**Response 200** (`application/json`): `Campaign_CloneCampaignJob`

---

## GET /v3/campaign/clone/status/{referenceId}

Gets status of the clone campaign job

Operation ID: `get-campaign-clone-status-referenceid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| referenceId | path | string | yes | The reference ID for the submitted cloning job, returned by |

**Response 200** (`application/json`): `Campaign_CampaignJobResult`

---

## GET /v3/campaign/template/{campaignId}

Get an existing Campaign template by ID.

Operation ID: `get-campaign-template-campaignid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| campaignId | path | string | yes |  |

**Response 200** (`application/json`): `Campaign_CampaignTemplate`

---

## PUT /v3/campaign/template

Updates an existing Campaign template

Operation ID: `put-campaign-template`

**Request body** (`application/json`, required): `Campaign_CampaignTemplate_put`

**Response 200** (`application/json`): `Campaign_CampaignTemplate`

---

## POST /v3/campaign/template/clone

Submits a job to clone a campaign. The API does not wait for the clone process to complete.  
You can check outcome of the cloning process by calling the [GET /campaign/clone/status/{referenceId}](/v3/portal/api/ref/get-campaign-clone-status-referenceid) endpoint.  
The URL, including the `ReferenceId`, is also given in the Location header.    
NOTE: You may not use this endpoint to clone campaigns with more than 500 ad group.

Operation ID: `post-campaign-template-clone`

**Request body** (`application/json`, required): `Campaign_CloneCampaignTemplateParameters_post`

**Response 200** (`application/json`): `Campaign_CloneCampaignJob`

---

## Schemas

### `Campaign_Campaign`

| Field | Type | Required | Description |
|---|---|---|---|
| AdditionalFeeCardOnCreate | `PassThroughFee_AdditionalFeeCard` |  | The additional fee card to create and start with the campaign.   This field is only used for POST campaign creation and will not be read in PUT nor populated in GET _(nullable)_ |
| AdvertiserId | string |  | The platform ID of the advertiser that owns this Campaign. |
| AssociatedBidLists | array<`DimensionalBidding_AssociatedBidList`> |  | The BidLists that are associated with this Campaign.   If a BidList is associated, and enabled then its adjustments will be applied during bidding to all ad groups in the campaign. |
| AutoAllocatorEnabled | boolean |  | If set to `true`, the platform automatically allocates the campaign budget to ad groups, which helps reduce the time and effort to manage spend.     Here's what you need to know about this property:   - The default value for this property is `false`.   - To automatically allocate the budget to the better-performing ad groups and ensure that your campaign reaches its goal, set this value and the `AutoPrioritizationEnabled` value to `true`.   For details and workflows on how to manage and allocate a campaign budget, see [Budget Allocation](/v3/portal/api/doc/CampaignBudgets). _(SOLIMAR: This property is deprecated in Kokai. For Kokai budget allocation details, see [Budget Allocation](/v3/portal/api/doc/CampaignBudgets).)_ |
| AutoPrioritizationEnabled | boolean |  | If set to `true`, enables the platform to automatically direct your budget to the better-performing ad groups first and then allocate the remaining budget to lower-performing groups.   Here's what you need to know about this property:   - Requires the `AutoAllocatorEnabled` property value to be set to `true`.   - The default value for this property is `false`.   - When you clone a campaign, this value is carried over.   For details and workflows on how to manage and allocate a campaign budget, see [Budget Allocation](/v3/portal/api/doc/CampaignBudgets). _(SOLIMAR: This property is deprecated in Kokai. For Kokai budget allocation details, see [Budget Allocation](/v3/portal/api/doc/CampaignBudgets).)_ |
| Availability | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability` |  | Whether the campaign is active and available for normal operation or archived and hidden from normal view. If not specified, the default value is `Available`.      When creating a campaign, this property can only be set to `Available`. Once a campaign is updated to `Archived`, it cannot be set back to `Available`.      Campaign with enabled ad groups cannot be archived. |
| BallotMeasureProfile | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_BallotMeasureProfile` |  | The profile of a ballot measure in a political election. Here's what you need to know:       - Required only for political advertising campaigns for state or local ballot measure elections.       - To include a ballot measure profile, be sure to set the `IsBallotMeasure` value to `true`.   For details, see [Political Advertising for Ballot Measure Elections](/v3/portal/api/doc/PoliticalAdvertisingBallotMeasure). _(nullable)_ |
| Budget | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The maximum amount the Campaign may spend. This must be in the currency of the Advertiser that owns the Campaign.   In the case of campaigns that have multiple flights, this value will be determined using specified Flight values and may not be modified. Otherwise, it must be specified at creation time. |
| BudgetingVersion | `TTD.DB.Provisioning.Primitives.Campaign_CampaignBudgetingVersion` |  | The budgeting used for the campaign. For details, see [Campaigns](/v3/portal/api/doc/Campaigns). |
| BudgetInImpressions | integer (int64) |  | The maximum amount of impressions the Campaign should buy.   In the case of campaigns that have multiple flights, this value will be determined using specified Flight values and may not be modified. _(nullable)_ |
| CampaignConversionReportingColumns | array<`Campaign_CampaignConversionReportingColumn`> |  | The mappings of conversion tracking tags to reporting columns.    Use this property if you want to track conversions, for example, for campaigns with conversion-focused objective and KPIs. Otherwise, set this property to null (or an empty list).    To track conversions, choose up to 5 conversion tracking tags by which you want to measure the campaign performance. (This limit can be increased to up to 50 for certain users. For details, contact your Account Manager.) Metrics for the selected conversions appear in My Reports in the UI under the appropriate reporting column.   You may map or update your reporting columns at any time, but new reports will not contain retroactive metrics for conversions. IMPORTANT: If you assign different conversions to a previously-used reporting column, your long-term rollups could be misleading. _(nullable)_ |
| CampaignFlights | array<`CampaignFlight_CampaignFlight`> |  | The List of flights associated with the Campaign.    During create, you must specify at least one Flight or provide the Start Date and Budget settings for the Campaign (but not both).   During create, providing both the Start Date and/or Budget Settings at the Campaign level as well as Flight Details will result in an error.   Note that providing the Start Date and Budget Settings at the Campaign Level, during Create will result in auto creation of a single Flight for the Campaign with those details.   While you may specify multiple Flights for a Campaign when you create a new campaign, this list will be read-only once the Campaign has been created, and will be ignored on updates.   Please refer to the CampaignFlight API for details on adding Flight details to existing campaigns or modifying existing Flight details for campaigns. |
| CampaignId | string |  | The ID of the Campaign. Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| CampaignName | string |  | The name of the Campaign. _(maxLength 256)_ |
| CampaignType | `Campaign_CampaignType` |  | The type of the Campaign, options are currently either Standard (default) or ProgrammaticGuaranteed.   This property can only be set on creation. |
| CreatedAtUTC | string (date-time) |  | The time in UTC the Campaign was created.   This field is read-only. _(nullable)_ |
| CurrentAndFutureAdditionalFeeCards | array<`PassThroughFee_AdditionalFeeCard`> |  | The additional fee card that is currently active and future fee cards for this campaign.   This is a read-only field. To create, update or disable fees, use the additional fees endpoints. _(nullable)_ |
| CustomCPAClickWeight | number (double) |  | Weight to assign to click through pixels when calculating Custom CPA. _(nullable)_ |
| CustomCPAType | `CustomCPA_CustomCPAType` |  | The flag that enables and defines the settings for the Custom CPA feature for the campaign. The default value is `Disabled`. |
| CustomCPAViewthroughWeight | number (double) |  | Weight to assign to view pixels when calculating Custom CPA. _(nullable)_ |
| CustomLabels | array<`CustomLabel_AssignedCustomLabel`> |  | Custom Labels assigned to this Campaign. |
| CustomROASType | `CustomROAS_CustomROASType` |  | The flag that enables and defines the settings for the Custom ROAS feature for the campaign. The default value is `Disabled`.    To enable the feature, be sure to have the following settings configured for the campaign:     - ROAS must be configured as one of the campaign goals.     - For each conversion pixel, the appropriate pixel weights must be specified in the `CustomROASConfig` object of the `CampaignConversionReportingColumns` object. These settings are required for Custom ROAS calculations.   Here’s what you need to know if you update the ROAS settings:     - If the campaign goals change and no longer include ROAS or the `CustomROASType` value is set to `Disabled`, the `CustomROASConfig` settings in the `CampaignConversionReportingColumns` will be removed.     - If you change the `CustomROASType` value to other than `Disabled`, you must update the `CustomROASConfig` settings in the `CampaignConversionReportingColumns` object. |
| DailyBudget | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The maximum amount that the campaign should spend per day, if possible.   Here's what you need to know about this property:   - This property is required only if the `PacingMode` property value is set to `Off`. In other words, if the campaign is set to pace evenly or ahead, this property is optional.   - The amount must be in the currency of the advertiser that owns this campaign.   - For campaigns with multiple flights, this property becomes read-only and its value is determined by individual flight budget values. _(nullable)_ |
| DailyBudgetInImpressions | integer (int64) |  | The total number of impressions the Campaign should buy in a single day, if able. If you do not wish to limit the daily impressions bought, you may omit this property or set it to null.   In the case of campaigns that have multiple flights, this value will be determined using specified Flight values and may not be modified. _(nullable)_ |
| DefaultBidLists | array<`DimensionalBidding_DefaultBidList`> |  | The default bid lists associated with this Campaign.   Campaign default bid lists:   - May be included as default bid lists in new ad groups for the campaign, using the `IncludeDefaultsFromCampaign` parameter.   - Are not automatically applied to the existing ad groups under this campaign.    - Can be only of type Target or Block (inclusion or exclusion). |
| Description | string |  | An optional description of the Campaign. _(maxLength 2048)_ |
| EnabledValueAddedProviderIds | array<integer (int32)> |  | IDs of third-party providers enabled to set rates and bill for their services rendered to the client managing this campaign.   This field should be nulled if your partner or advertiser seat does not have any value-added providers enabled. _(nullable)_ |
| EndDate | string (date-time) |  | The date and time (in UTC) that the Campaign should stop spending if it has not yet exhausted its budget.   In the case of campaigns that have multiple flights, this value will be determined using specified Flight values and may not be modified. _(nullable)_ |
| IncludeDefaultsFromAdvertiser | boolean |  | The default value is false. If set to true, all default bid lists associated with the advertiser are automatically included as default bid lists for this campaign upon its creation.  If the same default bid list is already applied to the campaign, it will be included only once.   This field is only used for POST.  It is not used on PUT. |
| Increments | array<string> |  | A list of frequency `CounterIds` to increment based on impressions served for this campaign.   Frequency counter details can be retrieved from [Frequency Counter API](/v3/portal/api/ref/get-frequency-counter-counterid) _(nullable)_ |
| IsBallotMeasure | boolean |  | If set to `true`, indicates that this campaign is for a state or local ballot measure election and must include a `BallotMeasureProfile` object. The default value for this property is `false`.   **IMPORTANT**: Required only for political advertising campaigns for state or local ballot measure elections. For details, see [Political Advertising for Ballot Measure Elections](/v3/portal/api/doc/PoliticalAdvertisingBallotMeasure). |
| MinimumAdGroupSpendInAdvertiserCurrency | number (double) |  | The daily minimum spend amount that you want the platform to allocate to all ad groups in a campaign that has AutoAllocator and Auto Prioritization turned on.   Here's what you need to know about this property:   - Requires the `AutoAllocatorEnabled` and `AutoPrioritizationEnabled` property values to be set to `true`.   - The default value for this property is `0`.   - This value must always be positive.   - The platform allocates the minimum amount to ad groups daily only while there is enough potential spend and budget to allocate.   - When you clone a campaign, this minimum spend value is carried over.   For details and workflows on how to manage and allocate a campaign budget, see [Budget Allocation](/v3/portal/api/doc/CampaignBudgets). _(SOLIMAR: This property is deprecated in Kokai. For Kokai budget allocation details, see [Budget Allocation](/v3/portal/api/doc/CampaignBudgets).)_ |
| NewFrequencyConfigs | array<`Frequency_NewFrequencyConfig`> |  | Frequency configurations associated with this campaign. For concepts and details on configuring frequency settings, see [Basic Frequency Configuration Guidelines](/v3/portal/api/doc/FrequencyConfigurationBasic).   Here's what you need to know:   - If at least one frequency configuration in the request is not valid, the whole request will fail. In this case, be sure to correct the invalid configuration and resend your request.     - The campaign POST and PUT endpoints return this object in the response only if you include it in the request.   - The [GET /campaign/{campaignId}](/v3/portal/api/ref/get-campaign-campaignid) endpoint never returns this object. To retrieve frequency configurations for a campaign, use the [POST/frequency/config/query](/v3/portal/api/ref/post-frequency-config-query) endpoint. |
| Objective | `Campaign_CampaignObjective` |  | The campaign objective. To set it, you must also specify the Primary Channel and at least the Primary Goal for the campaign.   **NOTE**: The campaign objective can be changed if needed, but it cannot be removed.   Due to the deprecation of this field, adding an Objective to a newly created campaign is not supported. Ignored on create or update. _(SOLIMAR: This property is deprecated in Kokai and replaced with the ad group `FunnelLocation` property. For Kokai budget allocation details, see [Budget Allocation](/v3/portal/api/doc/CampaignBudgets) and [Ad Groups](/v3/portal/api/doc/AdGroup).)_ |
| PacingMode | `Campaign_CampaignPacingMode` |  | The pacing mode for the campaign that determines how the budget is to be spent throughout the campaign.   **IMPORTANT**: If you select the `Off` option, be sure to set either `DailyTargetInAdvertiserCurrency` or `DailyTargetInImpressions` property for all current and future flights of the campaign. |
| PrimaryChannel | `Campaign_Channel` |  | The campaign channel that allows the platform to provide specific recommendations and automatically optimize toward reaching your goals. For details, see [Channels](/v3/portal/api/doc/Channel).   **NOTE**: The channel can be changed if needed, but it cannot be removed. |
| PrimaryGoal | `AdGroup_ROIGoal` |  | The primary goal of the campaign. To set it, you must also specify the `Primary Channel` and `Objective` for the campaign.   **NOTE**: The campaign's primary goal can be changed if needed, but it cannot be removed.     - All goal properties are mutually exclusive, which means that only one goal property may be specified at a time.       - Setting a goal property removes any previously set property.      - Setting a Boolean property values to `false` removes the goal.     - To keep the currently set goal when updating the ad group, omit this object from the update request, or send it empty.   For details and examples, see [Campaigns](/v3/portal/api/doc/Campaigns). |
| PurchaseOrderNumber | string |  | A property that you can use for internal reference. For example, a Purchase Order Number _(nullable)_ |
| SecondaryGoal | `AdGroup_ROIGoal` |  | The secondary goal of the campaign. It can be set only after the `Primary Goal` is set for the campaign.     - All goal properties are mutually exclusive, which means that only one goal property may be specified at a time.       - Setting a goal property removes any previously set property.      - Setting a Boolean property values to `false` removes the goal.     - To keep the currently set goal when updating the ad group, omit this object from the update request, or send it empty.     - To remove the currently set goal altogether, set this goal object to `null`.   For details and examples, see [Campaigns](/v3/portal/api/doc/Campaigns). _(nullable)_ |
| SeedId | string |  | The ID of the seed attached to the campaign. For details, see [Seed](/v3/portal/api/doc/Seed).   Requires the `Version` property value to be set to `Kokai`. |
| StartDate | string (date-time) |  | The date and time (in UTC) that the Campaign should start spending.   In the case of campaigns that have multiple flights, this value will be determined using specified Flight values and may not be modified. Otherwise, it must be specified at creation time. |
| TertiaryGoal | `AdGroup_ROIGoal` |  | The tertiary goal of the campaign. It can be set only after the `Secondary Goal` is set for the campaign.     - All goal properties are mutually exclusive, which means that only one goal property may be specified at a time.       - Setting a goal property removes any previously set property.      - Setting a Boolean property values to `false` removes the goal.     - To keep the currently set goal when updating the ad group, omit this object from the update request, or send it empty.     - To remove the currently set goal altogether, set this goal object to `null`.   For details and examples, see [Campaigns](/v3/portal/api/doc/Campaigns). _(nullable)_ |
| TimeZone | string |  | The name of the campaign time zone in the Olson format.   Include this property only if you want to change the default time zone. Otherwise, all campaigns are set to run in Coordinated Universal Time (UTC), which is represented by the `Etc/GMT` value returned in the response.    To set a different time zone, use the corresponding `type` attribute value from the [windowsZones.xml](https://github.com/unicode-org/cldr/blob/main/common/supplemental/windowsZones.xml) file. For details and examples, see [Time Zones](/v3/portal/api/doc/CampaignTimeZones).   **IMPORTANT**: Campaign pacing, bidding, and billing are standardized on UTC. If you set the campaign in a different time zone without taking into account the equivalent UTC time, you might see inconsistencies. |
| TradingModeDetails | `Campaign_TradingModeDetails` |  | The trading mode settings for the campaign, including the mode and audience unlimited tier.   This is a read-only field. _(nullable)_ |
| Version | `Campaign_CampaignVersion` |  | The name of The Trade Desk platform experience in which the campaign was created. If not specified, indicates that the campaign was created in a platform experience prior to Kokai. |
| CtvTargetingAndAttribution | boolean |  | Extends audience to include Connected TV (CTV) devices by leveraging the Adbrain household graph and includes the Adbrain household graph in standard attribution. _(DEPRECATED; deprecation: Targeting is replaced by the ad-group property AdBrainHouseholdCrossDeviceEnabled. Household attribution is replaced by IdentityAllianceWithHousehold in the ConversionReportingColumns.CrossDeviceModelAttributionId. Updates to this property are ignored while returning a success response.)_ |
| EnabledValueAddedProviders | array<`TheTradeDesk.AdPlatform.Shared.DB.Provisioning_ValueAddedProvider`> |  | A list of third-party providers enabled to set rates and bill for their services rendered to the client managing this campaign.   This field should be nulled if your partner or advertiser seat does not have any value-added providers enabled. _(nullable; DEPRECATED; deprecation: This property is deprecated. Please use Campaign.EnabledValueAddedProviderIds instead.)_ |
| LastUpdatedAtUTC | string (date-time) |  | The time in UTC the Campaign was last updated.   This field is read-only _(nullable; DEPRECATED; deprecation: This attribute is deprecated in favor of the delta endpoints. Its value should not be used.)_ |
| PartnerCostPercentageFee | number (double) |  | The partner fee for the Campaign as a percentage of the budget after The Trade Desk fee is calculated. Contact your account manage for more information.   If not specified on create, this will use the value configured at the Partner level.   Due to the deprecation of this field, adding a fee to a newly created campaign is not allowed.  Ignored on create. _(DEPRECATED; deprecation: This attribute is deprecated in favor of additional fees.)_ |
| PartnerCPCFee | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The partner CPC fee charged based on the number of clicks the Campaign generates. This must be in the currency of the Advertiser that owns the Campaign.   For example, if this is .25 USD and the Campaign generates 10 clicks, the additional charge to the advertiser will be 2.50 USD.   If not specified on create, this will use the value configured at the Partner level  (converted from the Partner's currency to the Advertiser's currency based on the exchange rates at the time of creation).    Due to the deprecation of this field, adding a fee to a newly created campaign is not allowed.  Ignored on create. _(DEPRECATED; deprecation: This attribute is deprecated in favor of additional fees.)_ |
| PartnerCPMFee | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The partner CPM fee charged based on the number of impressions the Campaign serves. This must be in the currency of the Advertiser that owns the Campaign.   For example, if this is 1.0 USD and the Campaign serves 1500 impressions, the additional charge to the advertiser will be 1.50 USD.   If not specified on create, this will use the value configured at the Partner level (converted from the Partner's currency to the Advertiser's currency based on the exchange rates at the time of creation).   Due to the deprecation of this field, adding a fee to a newly created campaign is not allowed.  Ignored on create. _(DEPRECATED; deprecation: This attribute is deprecated in favor of additional fees.)_ |

### `Campaign_CampaignFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| Availabilities | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_Availability_`> |  | The Availability states by which Campaigns my be filtered in a query. This list may be extended at any time, so please design accordingly. |
| SortingFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_CampaignSortingField_`> |  | The fields by which Campaigns may be sorted in a query. This list may be extended at any time, so please design accordingly. |

### `Campaign_CampaignJobResult`

| Field | Type | Required | Description |
|---|---|---|---|
| AdGroupIdMap | map<string, string> |  | Map of old ad group IDs to the cloned ad group IDs   Provided only if the cloning status is `Completed`. _(nullable)_ |
| CampaignId | string |  | The reference ID for the cloned campaign.   Provided only if the cloning status is `Completed`. _(nullable)_ |
| CloneReport | array<string> |  | A summary of attributes that were not cloned.   Provided only if the cloning status is `Completed`. _(nullable)_ |
| FailedAdGroupIds | map<string, string> |  | The IDs of teh ad groups that failed to be cloned along with the failure message. _(nullable)_ |
| FailureMessage | string |  | Detailed failure message.   Provided only if the cloning status is `Failed`. _(nullable)_ |
| ProgressPercentage | number (double) |  | The clone campaign job progress percentage. _(nullable)_ |
| ReferenceId | string |  | The clone campaign job reference ID. |
| Status | `Campaign_CampaignJobStatus` |  | The clone campaign job status. |

### `Campaign_CampaignMetrics`

| Field | Type | Required | Description |
|---|---|---|---|
| CampaignFlightId | integer (int64) |  | Id of the campaign's current flight |
| CampaignId | string |  | Id of the campaign _(nullable)_ |
| GoalInfo | `Campaign_ROIGoalValue` |  | Metrics and goals over the 4 week span _(nullable)_ |
| Pacing | `Campaign_Pacing` |  | Pacing information for the campaign _(nullable)_ |

### `Campaign_CampaignQueryForAdvertiser`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser that owns the Campaigns |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| Availabilities | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability`> |  | A list of Availability states by which to filter the returned Campaigns. See GET campaign/query/facets for the list of possible availabilities.   If not specified, empty, or null, only Available Campaigns will be returned. _(nullable)_ |
| SearchTerms | array<string> |  | A list of search terms by which to filter the returned Campaigns. All terms must be matched in the name or description in order for a Campaign to match.   If not specified, empty, or null, this property is ignored. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_CampaignSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed. See GET campaign/query/facets for the list of possible sort field IDs for Campaigns.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by Name ascending. _(nullable)_ |

### `Campaign_CampaignTemplate`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The platform ID of the advertiser that owns this Campaign. |
| Availability | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability` |  | Whether the campaign is active and available for normal operation or archived and hidden from normal view. If not specified, the default value is `Available`.      When creating a campaign, this property can only be set to `Available`. Once a campaign is updated to `Archived`, it cannot be set back to `Available`.      Campaign with enabled ad groups cannot be archived. |
| CampaignConversionReportingColumns | array<`Campaign_CampaignConversionReportingColumn`> |  | The mappings of conversion tracking tags to reporting columns.    Use this property if you want to track conversions, for example, for campaigns with conversion-focused objective and KPIs. Otherwise, set this property to null (or an empty list).    To track conversions, choose up to 5 conversion tracking tags by which you want to measure the campaign performance. (This limit can be increased to up to 50 for certain users. For details, contact your Account Manager.) Metrics for the selected conversions appear in My Reports in the UI under the appropriate reporting column.   You may map or update your reporting columns at any time, but new reports will not contain retroactive metrics for conversions. IMPORTANT: If you assign different conversions to a previously-used reporting column, your long-term rollups could be misleading. _(nullable)_ |
| CampaignId | string |  | The ID of the Campaign. Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| CampaignName | string |  | The name of the Campaign. _(maxLength 256)_ |
| CreatedAtUTC | string (date-time) |  | The time in UTC the Campaign was created.   This field is read-only. _(nullable)_ |
| CurrentAndFutureAdditionalFeeCards | array<`PassThroughFee_AdditionalFeeCard`> |  | The additional fee card that is currently active and future fee cards for this campaign.   This is a read-only field. To create, update or disable fees, use the additional fees endpoints. _(nullable)_ |
| Description | string |  | An optional description of the Campaign. _(maxLength 2048)_ |
| IsTemplatePublished | boolean |  | Whether or not the Template is published. |
| PurchaseOrderNumber | string |  | A property that you can use for internal reference. For example, a Purchase Order Number _(nullable)_ |
| ShareType | `TheTradeDesk.AdPlatform.Shared.DB.Provisioning_ShareType` |  | The share permissions for the Template:   - Advertiser   - Partner   - Global |
| TimeZone | string |  | The name of the campaign time zone in the Olson format.   Include this property only if you want to change the default time zone. Otherwise, all campaigns are set to run in Coordinated Universal Time (UTC), which is represented by the `Etc/GMT` value returned in the response.    To set a different time zone, use the corresponding `type` attribute value from the [windowsZones.xml](https://github.com/unicode-org/cldr/blob/main/common/supplemental/windowsZones.xml) file. For details and examples, see [Time Zones](/v3/portal/api/doc/CampaignTimeZones).   **IMPORTANT**: Campaign pacing, bidding, and billing are standardized on UTC. If you set the campaign in a different time zone without taking into account the equivalent UTC time, you might see inconsistencies. |
| CtvTargetingAndAttribution | boolean |  | Extends audience to include Connected TV (CTV) devices by leveraging the Adbrain household graph and includes the Adbrain household graph in standard attribution. _(DEPRECATED; deprecation: Targeting is replaced by the ad-group property AdBrainHouseholdCrossDeviceEnabled. Household attribution is replaced by IdentityAllianceWithHousehold in the ConversionReportingColumns.CrossDeviceModelAttributionId. Updates to this property are ignored while returning a success response.)_ |
| LastUpdatedAtUTC | string (date-time) |  | The time in UTC the Campaign was last updated.   This field is read-only _(nullable; DEPRECATED; deprecation: This attribute is deprecated in favor of the delta endpoints. Its value should not be used.)_ |
| PartnerCostPercentageFee | number (double) |  | The partner fee for the Campaign as a percentage of the budget after The Trade Desk fee is calculated. Contact your account manage for more information.   If not specified on create, this will use the value configured at the Partner level.   Due to the deprecation of this field, adding a fee to a newly created campaign is not allowed.  Ignored on create. _(DEPRECATED; deprecation: This attribute is deprecated in favor of additional fees.)_ |
| PartnerCPCFee | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The partner CPC fee charged based on the number of clicks the Campaign generates. This must be in the currency of the Advertiser that owns the Campaign.   For example, if this is .25 USD and the Campaign generates 10 clicks, the additional charge to the advertiser will be 2.50 USD.   If not specified on create, this will use the value configured at the Partner level  (converted from the Partner's currency to the Advertiser's currency based on the exchange rates at the time of creation).    Due to the deprecation of this field, adding a fee to a newly created campaign is not allowed.  Ignored on create. _(DEPRECATED; deprecation: This attribute is deprecated in favor of additional fees.)_ |
| PartnerCPMFee | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The partner CPM fee charged based on the number of impressions the Campaign serves. This must be in the currency of the Advertiser that owns the Campaign.   For example, if this is 1.0 USD and the Campaign serves 1500 impressions, the additional charge to the advertiser will be 1.50 USD.   If not specified on create, this will use the value configured at the Partner level (converted from the Partner's currency to the Advertiser's currency based on the exchange rates at the time of creation).   Due to the deprecation of this field, adding a fee to a newly created campaign is not allowed.  Ignored on create. _(DEPRECATED; deprecation: This attribute is deprecated in favor of additional fees.)_ |

### `Campaign_CampaignTemplate_put`

| Field | Type | Required | Description |
|---|---|---|---|
| CampaignId | string | yes | The ID of the Campaign. Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| AdvertiserId | string |  | The platform ID of the advertiser that owns this Campaign. |
| Availability | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability` |  | Whether the campaign is active and available for normal operation or archived and hidden from normal view. If not specified, the default value is `Available`.      When creating a campaign, this property can only be set to `Available`. Once a campaign is updated to `Archived`, it cannot be set back to `Available`.      Campaign with enabled ad groups cannot be archived. |
| CampaignConversionReportingColumns | array<`Campaign_CampaignConversionReportingColumn_put`> |  | The mappings of conversion tracking tags to reporting columns.    Use this property if you want to track conversions, for example, for campaigns with conversion-focused objective and KPIs. Otherwise, set this property to null (or an empty list).    To track conversions, choose up to 5 conversion tracking tags by which you want to measure the campaign performance. (This limit can be increased to up to 50 for certain users. For details, contact your Account Manager.) Metrics for the selected conversions appear in My Reports in the UI under the appropriate reporting column.   You may map or update your reporting columns at any time, but new reports will not contain retroactive metrics for conversions. IMPORTANT: If you assign different conversions to a previously-used reporting column, your long-term rollups could be misleading. _(nullable)_ |
| CampaignName | string |  | The name of the Campaign. _(maxLength 256)_ |
| Description | string |  | An optional description of the Campaign. _(maxLength 2048)_ |
| IsTemplatePublished | boolean |  | Whether or not the Template is published. |
| PurchaseOrderNumber | string |  | A property that you can use for internal reference. For example, a Purchase Order Number _(nullable)_ |
| ShareType | `TheTradeDesk.AdPlatform.Shared.DB.Provisioning_ShareType` |  | The share permissions for the Template:   - Advertiser   - Partner   - Global |
| TimeZone | string |  | The name of the campaign time zone in the Olson format.   Include this property only if you want to change the default time zone. Otherwise, all campaigns are set to run in Coordinated Universal Time (UTC), which is represented by the `Etc/GMT` value returned in the response.    To set a different time zone, use the corresponding `type` attribute value from the [windowsZones.xml](https://github.com/unicode-org/cldr/blob/main/common/supplemental/windowsZones.xml) file. For details and examples, see [Time Zones](/v3/portal/api/doc/CampaignTimeZones).   **IMPORTANT**: Campaign pacing, bidding, and billing are standardized on UTC. If you set the campaign in a different time zone without taking into account the equivalent UTC time, you might see inconsistencies. |
| PartnerCostPercentageFee | number (double) |  | The partner fee for the Campaign as a percentage of the budget after The Trade Desk fee is calculated. Contact your account manage for more information.   If not specified on create, this will use the value configured at the Partner level.   Due to the deprecation of this field, adding a fee to a newly created campaign is not allowed.  Ignored on create. _(DEPRECATED; deprecation: This attribute is deprecated in favor of additional fees.)_ |
| PartnerCPCFee | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The partner CPC fee charged based on the number of clicks the Campaign generates. This must be in the currency of the Advertiser that owns the Campaign.   For example, if this is .25 USD and the Campaign generates 10 clicks, the additional charge to the advertiser will be 2.50 USD.   If not specified on create, this will use the value configured at the Partner level  (converted from the Partner's currency to the Advertiser's currency based on the exchange rates at the time of creation).    Due to the deprecation of this field, adding a fee to a newly created campaign is not allowed.  Ignored on create. _(DEPRECATED; deprecation: This attribute is deprecated in favor of additional fees.)_ |
| PartnerCPMFee | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The partner CPM fee charged based on the number of impressions the Campaign serves. This must be in the currency of the Advertiser that owns the Campaign.   For example, if this is 1.0 USD and the Campaign serves 1500 impressions, the additional charge to the advertiser will be 1.50 USD.   If not specified on create, this will use the value configured at the Partner level (converted from the Partner's currency to the Advertiser's currency based on the exchange rates at the time of creation).   Due to the deprecation of this field, adding a fee to a newly created campaign is not allowed.  Ignored on create. _(DEPRECATED; deprecation: This attribute is deprecated in favor of additional fees.)_ |

### `Campaign_Campaign_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser that owns this Campaign. |
| CampaignConversionReportingColumns | array<`Campaign_CampaignConversionReportingColumn_post`> | yes | The mappings of conversion tracking tags to reporting columns.    Use this property if you want to track conversions, for example, for campaigns with conversion-focused objective and KPIs. Otherwise, set this property to null (or an empty list).    To track conversions, choose up to 5 conversion tracking tags by which you want to measure the campaign performance. (This limit can be increased to up to 50 for certain users. For details, contact your Account Manager.) Metrics for the selected conversions appear in My Reports in the UI under the appropriate reporting column.   You may map or update your reporting columns at any time, but new reports will not contain retroactive metrics for conversions. IMPORTANT: If you assign different conversions to a previously-used reporting column, your long-term rollups could be misleading. |
| CampaignName | string | yes | The name of the Campaign. _(maxLength 256)_ |
| AdditionalFeeCardOnCreate | `PassThroughFee_AdditionalFeeCard` |  | The additional fee card to create and start with the campaign.   This field is only used for POST campaign creation and will not be read in PUT nor populated in GET _(nullable)_ |
| AssociatedBidLists | array<`DimensionalBidding_AssociatedBidList_post`> |  | The BidLists that are associated with this Campaign.   If a BidList is associated, and enabled then its adjustments will be applied during bidding to all ad groups in the campaign. |
| AutoAllocatorEnabled | boolean |  | If set to `true`, the platform automatically allocates the campaign budget to ad groups, which helps reduce the time and effort to manage spend.     Here's what you need to know about this property:   - The default value for this property is `false`.   - To automatically allocate the budget to the better-performing ad groups and ensure that your campaign reaches its goal, set this value and the `AutoPrioritizationEnabled` value to `true`.   For details and workflows on how to manage and allocate a campaign budget, see [Budget Allocation](/v3/portal/api/doc/CampaignBudgets). _(SOLIMAR: This property is deprecated in Kokai. For Kokai budget allocation details, see [Budget Allocation](/v3/portal/api/doc/CampaignBudgets).)_ |
| AutoPrioritizationEnabled | boolean |  | If set to `true`, enables the platform to automatically direct your budget to the better-performing ad groups first and then allocate the remaining budget to lower-performing groups.   Here's what you need to know about this property:   - Requires the `AutoAllocatorEnabled` property value to be set to `true`.   - The default value for this property is `false`.   - When you clone a campaign, this value is carried over.   For details and workflows on how to manage and allocate a campaign budget, see [Budget Allocation](/v3/portal/api/doc/CampaignBudgets). _(SOLIMAR: This property is deprecated in Kokai. For Kokai budget allocation details, see [Budget Allocation](/v3/portal/api/doc/CampaignBudgets).)_ |
| Availability | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability` |  | Whether the campaign is active and available for normal operation or archived and hidden from normal view. If not specified, the default value is `Available`.      When creating a campaign, this property can only be set to `Available`. Once a campaign is updated to `Archived`, it cannot be set back to `Available`.      Campaign with enabled ad groups cannot be archived. |
| BallotMeasureProfile | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_BallotMeasureProfile_post` |  | The profile of a ballot measure in a political election. Here's what you need to know:       - Required only for political advertising campaigns for state or local ballot measure elections.       - To include a ballot measure profile, be sure to set the `IsBallotMeasure` value to `true`.   For details, see [Political Advertising for Ballot Measure Elections](/v3/portal/api/doc/PoliticalAdvertisingBallotMeasure). _(nullable)_ |
| Budget | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The maximum amount the Campaign may spend. This must be in the currency of the Advertiser that owns the Campaign.   In the case of campaigns that have multiple flights, this value will be determined using specified Flight values and may not be modified. Otherwise, it must be specified at creation time. |
| BudgetingVersion | `TTD.DB.Provisioning.Primitives.Campaign_CampaignBudgetingVersion` |  | The budgeting used for the campaign. For details, see [Campaigns](/v3/portal/api/doc/Campaigns). |
| BudgetInImpressions | integer (int64) |  | The maximum amount of impressions the Campaign should buy.   In the case of campaigns that have multiple flights, this value will be determined using specified Flight values and may not be modified. _(nullable)_ |
| CampaignFlights | array<`CampaignFlight_CampaignFlight_post`> |  | The List of flights associated with the Campaign.    During create, you must specify at least one Flight or provide the Start Date and Budget settings for the Campaign (but not both).   During create, providing both the Start Date and/or Budget Settings at the Campaign level as well as Flight Details will result in an error.   Note that providing the Start Date and Budget Settings at the Campaign Level, during Create will result in auto creation of a single Flight for the Campaign with those details.   While you may specify multiple Flights for a Campaign when you create a new campaign, this list will be read-only once the Campaign has been created, and will be ignored on updates.   Please refer to the CampaignFlight API for details on adding Flight details to existing campaigns or modifying existing Flight details for campaigns. |
| CampaignType | `Campaign_CampaignType` |  | The type of the Campaign, options are currently either Standard (default) or ProgrammaticGuaranteed.   This property can only be set on creation. |
| CustomCPAClickWeight | number (double) |  | Weight to assign to click through pixels when calculating Custom CPA. _(nullable)_ |
| CustomCPAType | `CustomCPA_CustomCPAType` |  | The flag that enables and defines the settings for the Custom CPA feature for the campaign. The default value is `Disabled`. |
| CustomCPAViewthroughWeight | number (double) |  | Weight to assign to view pixels when calculating Custom CPA. _(nullable)_ |
| CustomLabels | array<`CustomLabel_AssignedCustomLabel_post`> |  | Custom Labels assigned to this Campaign. |
| CustomROASType | `CustomROAS_CustomROASType` |  | The flag that enables and defines the settings for the Custom ROAS feature for the campaign. The default value is `Disabled`.    To enable the feature, be sure to have the following settings configured for the campaign:     - ROAS must be configured as one of the campaign goals.     - For each conversion pixel, the appropriate pixel weights must be specified in the `CustomROASConfig` object of the `CampaignConversionReportingColumns` object. These settings are required for Custom ROAS calculations.   Here’s what you need to know if you update the ROAS settings:     - If the campaign goals change and no longer include ROAS or the `CustomROASType` value is set to `Disabled`, the `CustomROASConfig` settings in the `CampaignConversionReportingColumns` will be removed.     - If you change the `CustomROASType` value to other than `Disabled`, you must update the `CustomROASConfig` settings in the `CampaignConversionReportingColumns` object. |
| DailyBudget | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The maximum amount that the campaign should spend per day, if possible.   Here's what you need to know about this property:   - This property is required only if the `PacingMode` property value is set to `Off`. In other words, if the campaign is set to pace evenly or ahead, this property is optional.   - The amount must be in the currency of the advertiser that owns this campaign.   - For campaigns with multiple flights, this property becomes read-only and its value is determined by individual flight budget values. _(nullable)_ |
| DailyBudgetInImpressions | integer (int64) |  | The total number of impressions the Campaign should buy in a single day, if able. If you do not wish to limit the daily impressions bought, you may omit this property or set it to null.   In the case of campaigns that have multiple flights, this value will be determined using specified Flight values and may not be modified. _(nullable)_ |
| DefaultBidLists | array<`DimensionalBidding_DefaultBidList_post`> |  | The default bid lists associated with this Campaign.   Campaign default bid lists:   - May be included as default bid lists in new ad groups for the campaign, using the `IncludeDefaultsFromCampaign` parameter.   - Are not automatically applied to the existing ad groups under this campaign.    - Can be only of type Target or Block (inclusion or exclusion). |
| Description | string |  | An optional description of the Campaign. _(maxLength 2048)_ |
| EnabledValueAddedProviderIds | array<integer (int32)> |  | IDs of third-party providers enabled to set rates and bill for their services rendered to the client managing this campaign.   This field should be nulled if your partner or advertiser seat does not have any value-added providers enabled. _(nullable)_ |
| EndDate | string (date-time) |  | The date and time (in UTC) that the Campaign should stop spending if it has not yet exhausted its budget.   In the case of campaigns that have multiple flights, this value will be determined using specified Flight values and may not be modified. _(nullable)_ |
| IncludeDefaultsFromAdvertiser | boolean |  | The default value is false. If set to true, all default bid lists associated with the advertiser are automatically included as default bid lists for this campaign upon its creation.  If the same default bid list is already applied to the campaign, it will be included only once.   This field is only used for POST.  It is not used on PUT. |
| Increments | array<string> |  | A list of frequency `CounterIds` to increment based on impressions served for this campaign.   Frequency counter details can be retrieved from [Frequency Counter API](/v3/portal/api/ref/get-frequency-counter-counterid) _(nullable)_ |
| IsBallotMeasure | boolean |  | If set to `true`, indicates that this campaign is for a state or local ballot measure election and must include a `BallotMeasureProfile` object. The default value for this property is `false`.   **IMPORTANT**: Required only for political advertising campaigns for state or local ballot measure elections. For details, see [Political Advertising for Ballot Measure Elections](/v3/portal/api/doc/PoliticalAdvertisingBallotMeasure). |
| MinimumAdGroupSpendInAdvertiserCurrency | number (double) |  | The daily minimum spend amount that you want the platform to allocate to all ad groups in a campaign that has AutoAllocator and Auto Prioritization turned on.   Here's what you need to know about this property:   - Requires the `AutoAllocatorEnabled` and `AutoPrioritizationEnabled` property values to be set to `true`.   - The default value for this property is `0`.   - This value must always be positive.   - The platform allocates the minimum amount to ad groups daily only while there is enough potential spend and budget to allocate.   - When you clone a campaign, this minimum spend value is carried over.   For details and workflows on how to manage and allocate a campaign budget, see [Budget Allocation](/v3/portal/api/doc/CampaignBudgets). _(SOLIMAR: This property is deprecated in Kokai. For Kokai budget allocation details, see [Budget Allocation](/v3/portal/api/doc/CampaignBudgets).)_ |
| NewFrequencyConfigs | array<`Frequency_NewFrequencyConfig`> |  | Frequency configurations associated with this campaign. For concepts and details on configuring frequency settings, see [Basic Frequency Configuration Guidelines](/v3/portal/api/doc/FrequencyConfigurationBasic).   Here's what you need to know:   - If at least one frequency configuration in the request is not valid, the whole request will fail. In this case, be sure to correct the invalid configuration and resend your request.     - The campaign POST and PUT endpoints return this object in the response only if you include it in the request.   - The [GET /campaign/{campaignId}](/v3/portal/api/ref/get-campaign-campaignid) endpoint never returns this object. To retrieve frequency configurations for a campaign, use the [POST/frequency/config/query](/v3/portal/api/ref/post-frequency-config-query) endpoint. |
| Objective | `Campaign_CampaignObjective` |  | The campaign objective. To set it, you must also specify the Primary Channel and at least the Primary Goal for the campaign.   **NOTE**: The campaign objective can be changed if needed, but it cannot be removed.   Due to the deprecation of this field, adding an Objective to a newly created campaign is not supported. Ignored on create or update. _(SOLIMAR: This property is deprecated in Kokai and replaced with the ad group `FunnelLocation` property. For Kokai budget allocation details, see [Budget Allocation](/v3/portal/api/doc/CampaignBudgets) and [Ad Groups](/v3/portal/api/doc/AdGroup).)_ |
| PacingMode | `Campaign_CampaignPacingMode` |  | The pacing mode for the campaign that determines how the budget is to be spent throughout the campaign.   **IMPORTANT**: If you select the `Off` option, be sure to set either `DailyTargetInAdvertiserCurrency` or `DailyTargetInImpressions` property for all current and future flights of the campaign. |
| PrimaryChannel | `Campaign_Channel` |  | The campaign channel that allows the platform to provide specific recommendations and automatically optimize toward reaching your goals. For details, see [Channels](/v3/portal/api/doc/Channel).   **NOTE**: The channel can be changed if needed, but it cannot be removed. |
| PrimaryGoal | `AdGroup_ROIGoal` |  | The primary goal of the campaign. To set it, you must also specify the `Primary Channel` and `Objective` for the campaign.   **NOTE**: The campaign's primary goal can be changed if needed, but it cannot be removed.     - All goal properties are mutually exclusive, which means that only one goal property may be specified at a time.       - Setting a goal property removes any previously set property.      - Setting a Boolean property values to `false` removes the goal.     - To keep the currently set goal when updating the ad group, omit this object from the update request, or send it empty.   For details and examples, see [Campaigns](/v3/portal/api/doc/Campaigns). |
| PurchaseOrderNumber | string |  | A property that you can use for internal reference. For example, a Purchase Order Number _(nullable)_ |
| SecondaryGoal | `AdGroup_ROIGoal` |  | The secondary goal of the campaign. It can be set only after the `Primary Goal` is set for the campaign.     - All goal properties are mutually exclusive, which means that only one goal property may be specified at a time.       - Setting a goal property removes any previously set property.      - Setting a Boolean property values to `false` removes the goal.     - To keep the currently set goal when updating the ad group, omit this object from the update request, or send it empty.     - To remove the currently set goal altogether, set this goal object to `null`.   For details and examples, see [Campaigns](/v3/portal/api/doc/Campaigns). _(nullable)_ |
| SeedId | string |  | The ID of the seed attached to the campaign. For details, see [Seed](/v3/portal/api/doc/Seed).   Requires the `Version` property value to be set to `Kokai`. |
| StartDate | string (date-time) |  | The date and time (in UTC) that the Campaign should start spending.   In the case of campaigns that have multiple flights, this value will be determined using specified Flight values and may not be modified. Otherwise, it must be specified at creation time. |
| TertiaryGoal | `AdGroup_ROIGoal` |  | The tertiary goal of the campaign. It can be set only after the `Secondary Goal` is set for the campaign.     - All goal properties are mutually exclusive, which means that only one goal property may be specified at a time.       - Setting a goal property removes any previously set property.      - Setting a Boolean property values to `false` removes the goal.     - To keep the currently set goal when updating the ad group, omit this object from the update request, or send it empty.     - To remove the currently set goal altogether, set this goal object to `null`.   For details and examples, see [Campaigns](/v3/portal/api/doc/Campaigns). _(nullable)_ |
| TimeZone | string |  | The name of the campaign time zone in the Olson format.   Include this property only if you want to change the default time zone. Otherwise, all campaigns are set to run in Coordinated Universal Time (UTC), which is represented by the `Etc/GMT` value returned in the response.    To set a different time zone, use the corresponding `type` attribute value from the [windowsZones.xml](https://github.com/unicode-org/cldr/blob/main/common/supplemental/windowsZones.xml) file. For details and examples, see [Time Zones](/v3/portal/api/doc/CampaignTimeZones).   **IMPORTANT**: Campaign pacing, bidding, and billing are standardized on UTC. If you set the campaign in a different time zone without taking into account the equivalent UTC time, you might see inconsistencies. |
| Version | `Campaign_CampaignVersion` |  | The name of The Trade Desk platform experience in which the campaign was created. If not specified, indicates that the campaign was created in a platform experience prior to Kokai. |
| CtvTargetingAndAttribution | boolean |  | Extends audience to include Connected TV (CTV) devices by leveraging the Adbrain household graph and includes the Adbrain household graph in standard attribution. _(DEPRECATED; deprecation: Targeting is replaced by the ad-group property AdBrainHouseholdCrossDeviceEnabled. Household attribution is replaced by IdentityAllianceWithHousehold in the ConversionReportingColumns.CrossDeviceModelAttributionId. Updates to this property are ignored while returning a success response.)_ |
| EnabledValueAddedProviders | array<`TheTradeDesk.AdPlatform.Shared.DB.Provisioning_ValueAddedProvider`> |  | A list of third-party providers enabled to set rates and bill for their services rendered to the client managing this campaign.   This field should be nulled if your partner or advertiser seat does not have any value-added providers enabled. _(nullable; DEPRECATED; deprecation: This property is deprecated. Please use Campaign.EnabledValueAddedProviderIds instead.)_ |
| PartnerCostPercentageFee | number (double) |  | The partner fee for the Campaign as a percentage of the budget after The Trade Desk fee is calculated. Contact your account manage for more information.   If not specified on create, this will use the value configured at the Partner level.   Due to the deprecation of this field, adding a fee to a newly created campaign is not allowed.  Ignored on create. _(DEPRECATED; deprecation: This attribute is deprecated in favor of additional fees.)_ |
| PartnerCPCFee | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The partner CPC fee charged based on the number of clicks the Campaign generates. This must be in the currency of the Advertiser that owns the Campaign.   For example, if this is .25 USD and the Campaign generates 10 clicks, the additional charge to the advertiser will be 2.50 USD.   If not specified on create, this will use the value configured at the Partner level  (converted from the Partner's currency to the Advertiser's currency based on the exchange rates at the time of creation).    Due to the deprecation of this field, adding a fee to a newly created campaign is not allowed.  Ignored on create. _(DEPRECATED; deprecation: This attribute is deprecated in favor of additional fees.)_ |
| PartnerCPMFee | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The partner CPM fee charged based on the number of impressions the Campaign serves. This must be in the currency of the Advertiser that owns the Campaign.   For example, if this is 1.0 USD and the Campaign serves 1500 impressions, the additional charge to the advertiser will be 1.50 USD.   If not specified on create, this will use the value configured at the Partner level (converted from the Partner's currency to the Advertiser's currency based on the exchange rates at the time of creation).   Due to the deprecation of this field, adding a fee to a newly created campaign is not allowed.  Ignored on create. _(DEPRECATED; deprecation: This attribute is deprecated in favor of additional fees.)_ |

### `Campaign_Campaign_put`

| Field | Type | Required | Description |
|---|---|---|---|
| CampaignId | string | yes | The ID of the Campaign. Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| AdvertiserId | string |  | The platform ID of the advertiser that owns this Campaign. |
| AssociatedBidLists | array<`DimensionalBidding_AssociatedBidList_put`> |  | The BidLists that are associated with this Campaign.   If a BidList is associated, and enabled then its adjustments will be applied during bidding to all ad groups in the campaign. |
| AutoAllocatorEnabled | boolean |  | If set to `true`, the platform automatically allocates the campaign budget to ad groups, which helps reduce the time and effort to manage spend.     Here's what you need to know about this property:   - The default value for this property is `false`.   - To automatically allocate the budget to the better-performing ad groups and ensure that your campaign reaches its goal, set this value and the `AutoPrioritizationEnabled` value to `true`.   For details and workflows on how to manage and allocate a campaign budget, see [Budget Allocation](/v3/portal/api/doc/CampaignBudgets). _(SOLIMAR: This property is deprecated in Kokai. For Kokai budget allocation details, see [Budget Allocation](/v3/portal/api/doc/CampaignBudgets).)_ |
| AutoPrioritizationEnabled | boolean |  | If set to `true`, enables the platform to automatically direct your budget to the better-performing ad groups first and then allocate the remaining budget to lower-performing groups.   Here's what you need to know about this property:   - Requires the `AutoAllocatorEnabled` property value to be set to `true`.   - The default value for this property is `false`.   - When you clone a campaign, this value is carried over.   For details and workflows on how to manage and allocate a campaign budget, see [Budget Allocation](/v3/portal/api/doc/CampaignBudgets). _(SOLIMAR: This property is deprecated in Kokai. For Kokai budget allocation details, see [Budget Allocation](/v3/portal/api/doc/CampaignBudgets).)_ |
| Availability | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability` |  | Whether the campaign is active and available for normal operation or archived and hidden from normal view. If not specified, the default value is `Available`.      When creating a campaign, this property can only be set to `Available`. Once a campaign is updated to `Archived`, it cannot be set back to `Available`.      Campaign with enabled ad groups cannot be archived. |
| BallotMeasureProfile | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_BallotMeasureProfile_put` |  | The profile of a ballot measure in a political election. Here's what you need to know:       - Required only for political advertising campaigns for state or local ballot measure elections.       - To include a ballot measure profile, be sure to set the `IsBallotMeasure` value to `true`.   For details, see [Political Advertising for Ballot Measure Elections](/v3/portal/api/doc/PoliticalAdvertisingBallotMeasure). _(nullable)_ |
| Budget | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The maximum amount the Campaign may spend. This must be in the currency of the Advertiser that owns the Campaign.   In the case of campaigns that have multiple flights, this value will be determined using specified Flight values and may not be modified. Otherwise, it must be specified at creation time. |
| BudgetInImpressions | integer (int64) |  | The maximum amount of impressions the Campaign should buy.   In the case of campaigns that have multiple flights, this value will be determined using specified Flight values and may not be modified. _(nullable)_ |
| CampaignConversionReportingColumns | array<`Campaign_CampaignConversionReportingColumn_put`> |  | The mappings of conversion tracking tags to reporting columns.    Use this property if you want to track conversions, for example, for campaigns with conversion-focused objective and KPIs. Otherwise, set this property to null (or an empty list).    To track conversions, choose up to 5 conversion tracking tags by which you want to measure the campaign performance. (This limit can be increased to up to 50 for certain users. For details, contact your Account Manager.) Metrics for the selected conversions appear in My Reports in the UI under the appropriate reporting column.   You may map or update your reporting columns at any time, but new reports will not contain retroactive metrics for conversions. IMPORTANT: If you assign different conversions to a previously-used reporting column, your long-term rollups could be misleading. _(nullable)_ |
| CampaignName | string |  | The name of the Campaign. _(maxLength 256)_ |
| CustomCPAClickWeight | number (double) |  | Weight to assign to click through pixels when calculating Custom CPA. _(nullable)_ |
| CustomCPAType | `CustomCPA_CustomCPAType` |  | The flag that enables and defines the settings for the Custom CPA feature for the campaign. The default value is `Disabled`. |
| CustomCPAViewthroughWeight | number (double) |  | Weight to assign to view pixels when calculating Custom CPA. _(nullable)_ |
| CustomLabels | array<`CustomLabel_AssignedCustomLabel_put`> |  | Custom Labels assigned to this Campaign. |
| CustomROASType | `CustomROAS_CustomROASType` |  | The flag that enables and defines the settings for the Custom ROAS feature for the campaign. The default value is `Disabled`.    To enable the feature, be sure to have the following settings configured for the campaign:     - ROAS must be configured as one of the campaign goals.     - For each conversion pixel, the appropriate pixel weights must be specified in the `CustomROASConfig` object of the `CampaignConversionReportingColumns` object. These settings are required for Custom ROAS calculations.   Here’s what you need to know if you update the ROAS settings:     - If the campaign goals change and no longer include ROAS or the `CustomROASType` value is set to `Disabled`, the `CustomROASConfig` settings in the `CampaignConversionReportingColumns` will be removed.     - If you change the `CustomROASType` value to other than `Disabled`, you must update the `CustomROASConfig` settings in the `CampaignConversionReportingColumns` object. |
| DailyBudget | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The maximum amount that the campaign should spend per day, if possible.   Here's what you need to know about this property:   - This property is required only if the `PacingMode` property value is set to `Off`. In other words, if the campaign is set to pace evenly or ahead, this property is optional.   - The amount must be in the currency of the advertiser that owns this campaign.   - For campaigns with multiple flights, this property becomes read-only and its value is determined by individual flight budget values. _(nullable)_ |
| DailyBudgetInImpressions | integer (int64) |  | The total number of impressions the Campaign should buy in a single day, if able. If you do not wish to limit the daily impressions bought, you may omit this property or set it to null.   In the case of campaigns that have multiple flights, this value will be determined using specified Flight values and may not be modified. _(nullable)_ |
| DefaultBidLists | array<`DimensionalBidding_DefaultBidList_put`> |  | The default bid lists associated with this Campaign.   Campaign default bid lists:   - May be included as default bid lists in new ad groups for the campaign, using the `IncludeDefaultsFromCampaign` parameter.   - Are not automatically applied to the existing ad groups under this campaign.    - Can be only of type Target or Block (inclusion or exclusion). |
| Description | string |  | An optional description of the Campaign. _(maxLength 2048)_ |
| EnabledValueAddedProviderIds | array<integer (int32)> |  | IDs of third-party providers enabled to set rates and bill for their services rendered to the client managing this campaign.   This field should be nulled if your partner or advertiser seat does not have any value-added providers enabled. _(nullable)_ |
| EndDate | string (date-time) |  | The date and time (in UTC) that the Campaign should stop spending if it has not yet exhausted its budget.   In the case of campaigns that have multiple flights, this value will be determined using specified Flight values and may not be modified. _(nullable)_ |
| Increments | array<string> |  | A list of frequency `CounterIds` to increment based on impressions served for this campaign.   Frequency counter details can be retrieved from [Frequency Counter API](/v3/portal/api/ref/get-frequency-counter-counterid) _(nullable)_ |
| IsBallotMeasure | boolean |  | If set to `true`, indicates that this campaign is for a state or local ballot measure election and must include a `BallotMeasureProfile` object. The default value for this property is `false`.   **IMPORTANT**: Required only for political advertising campaigns for state or local ballot measure elections. For details, see [Political Advertising for Ballot Measure Elections](/v3/portal/api/doc/PoliticalAdvertisingBallotMeasure). |
| MinimumAdGroupSpendInAdvertiserCurrency | number (double) |  | The daily minimum spend amount that you want the platform to allocate to all ad groups in a campaign that has AutoAllocator and Auto Prioritization turned on.   Here's what you need to know about this property:   - Requires the `AutoAllocatorEnabled` and `AutoPrioritizationEnabled` property values to be set to `true`.   - The default value for this property is `0`.   - This value must always be positive.   - The platform allocates the minimum amount to ad groups daily only while there is enough potential spend and budget to allocate.   - When you clone a campaign, this minimum spend value is carried over.   For details and workflows on how to manage and allocate a campaign budget, see [Budget Allocation](/v3/portal/api/doc/CampaignBudgets). _(SOLIMAR: This property is deprecated in Kokai. For Kokai budget allocation details, see [Budget Allocation](/v3/portal/api/doc/CampaignBudgets).)_ |
| NewFrequencyConfigs | array<`Frequency_NewFrequencyConfig`> |  | Frequency configurations associated with this campaign. For concepts and details on configuring frequency settings, see [Basic Frequency Configuration Guidelines](/v3/portal/api/doc/FrequencyConfigurationBasic).   Here's what you need to know:   - If at least one frequency configuration in the request is not valid, the whole request will fail. In this case, be sure to correct the invalid configuration and resend your request.     - The campaign POST and PUT endpoints return this object in the response only if you include it in the request.   - The [GET /campaign/{campaignId}](/v3/portal/api/ref/get-campaign-campaignid) endpoint never returns this object. To retrieve frequency configurations for a campaign, use the [POST/frequency/config/query](/v3/portal/api/ref/post-frequency-config-query) endpoint. |
| Objective | `Campaign_CampaignObjective` |  | The campaign objective. To set it, you must also specify the Primary Channel and at least the Primary Goal for the campaign.   **NOTE**: The campaign objective can be changed if needed, but it cannot be removed.   Due to the deprecation of this field, adding an Objective to a newly created campaign is not supported. Ignored on create or update. _(SOLIMAR: This property is deprecated in Kokai and replaced with the ad group `FunnelLocation` property. For Kokai budget allocation details, see [Budget Allocation](/v3/portal/api/doc/CampaignBudgets) and [Ad Groups](/v3/portal/api/doc/AdGroup).)_ |
| PacingMode | `Campaign_CampaignPacingMode` |  | The pacing mode for the campaign that determines how the budget is to be spent throughout the campaign.   **IMPORTANT**: If you select the `Off` option, be sure to set either `DailyTargetInAdvertiserCurrency` or `DailyTargetInImpressions` property for all current and future flights of the campaign. |
| PrimaryChannel | `Campaign_Channel` |  | The campaign channel that allows the platform to provide specific recommendations and automatically optimize toward reaching your goals. For details, see [Channels](/v3/portal/api/doc/Channel).   **NOTE**: The channel can be changed if needed, but it cannot be removed. |
| PrimaryGoal | `AdGroup_ROIGoal` |  | The primary goal of the campaign. To set it, you must also specify the `Primary Channel` and `Objective` for the campaign.   **NOTE**: The campaign's primary goal can be changed if needed, but it cannot be removed.     - All goal properties are mutually exclusive, which means that only one goal property may be specified at a time.       - Setting a goal property removes any previously set property.      - Setting a Boolean property values to `false` removes the goal.     - To keep the currently set goal when updating the ad group, omit this object from the update request, or send it empty.   For details and examples, see [Campaigns](/v3/portal/api/doc/Campaigns). |
| PurchaseOrderNumber | string |  | A property that you can use for internal reference. For example, a Purchase Order Number _(nullable)_ |
| SecondaryGoal | `AdGroup_ROIGoal` |  | The secondary goal of the campaign. It can be set only after the `Primary Goal` is set for the campaign.     - All goal properties are mutually exclusive, which means that only one goal property may be specified at a time.       - Setting a goal property removes any previously set property.      - Setting a Boolean property values to `false` removes the goal.     - To keep the currently set goal when updating the ad group, omit this object from the update request, or send it empty.     - To remove the currently set goal altogether, set this goal object to `null`.   For details and examples, see [Campaigns](/v3/portal/api/doc/Campaigns). _(nullable)_ |
| SeedId | string |  | The ID of the seed attached to the campaign. For details, see [Seed](/v3/portal/api/doc/Seed).   Requires the `Version` property value to be set to `Kokai`. |
| StartDate | string (date-time) |  | The date and time (in UTC) that the Campaign should start spending.   In the case of campaigns that have multiple flights, this value will be determined using specified Flight values and may not be modified. Otherwise, it must be specified at creation time. |
| TertiaryGoal | `AdGroup_ROIGoal` |  | The tertiary goal of the campaign. It can be set only after the `Secondary Goal` is set for the campaign.     - All goal properties are mutually exclusive, which means that only one goal property may be specified at a time.       - Setting a goal property removes any previously set property.      - Setting a Boolean property values to `false` removes the goal.     - To keep the currently set goal when updating the ad group, omit this object from the update request, or send it empty.     - To remove the currently set goal altogether, set this goal object to `null`.   For details and examples, see [Campaigns](/v3/portal/api/doc/Campaigns). _(nullable)_ |
| TimeZone | string |  | The name of the campaign time zone in the Olson format.   Include this property only if you want to change the default time zone. Otherwise, all campaigns are set to run in Coordinated Universal Time (UTC), which is represented by the `Etc/GMT` value returned in the response.    To set a different time zone, use the corresponding `type` attribute value from the [windowsZones.xml](https://github.com/unicode-org/cldr/blob/main/common/supplemental/windowsZones.xml) file. For details and examples, see [Time Zones](/v3/portal/api/doc/CampaignTimeZones).   **IMPORTANT**: Campaign pacing, bidding, and billing are standardized on UTC. If you set the campaign in a different time zone without taking into account the equivalent UTC time, you might see inconsistencies. |
| EnabledValueAddedProviders | array<`TheTradeDesk.AdPlatform.Shared.DB.Provisioning_ValueAddedProvider`> |  | A list of third-party providers enabled to set rates and bill for their services rendered to the client managing this campaign.   This field should be nulled if your partner or advertiser seat does not have any value-added providers enabled. _(nullable; DEPRECATED; deprecation: This property is deprecated. Please use Campaign.EnabledValueAddedProviderIds instead.)_ |
| PartnerCostPercentageFee | number (double) |  | The partner fee for the Campaign as a percentage of the budget after The Trade Desk fee is calculated. Contact your account manage for more information.   If not specified on create, this will use the value configured at the Partner level.   Due to the deprecation of this field, adding a fee to a newly created campaign is not allowed.  Ignored on create. _(DEPRECATED; deprecation: This attribute is deprecated in favor of additional fees.)_ |
| PartnerCPCFee | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The partner CPC fee charged based on the number of clicks the Campaign generates. This must be in the currency of the Advertiser that owns the Campaign.   For example, if this is .25 USD and the Campaign generates 10 clicks, the additional charge to the advertiser will be 2.50 USD.   If not specified on create, this will use the value configured at the Partner level  (converted from the Partner's currency to the Advertiser's currency based on the exchange rates at the time of creation).    Due to the deprecation of this field, adding a fee to a newly created campaign is not allowed.  Ignored on create. _(DEPRECATED; deprecation: This attribute is deprecated in favor of additional fees.)_ |
| PartnerCPMFee | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The partner CPM fee charged based on the number of impressions the Campaign serves. This must be in the currency of the Advertiser that owns the Campaign.   For example, if this is 1.0 USD and the Campaign serves 1500 impressions, the additional charge to the advertiser will be 1.50 USD.   If not specified on create, this will use the value configured at the Partner level (converted from the Partner's currency to the Advertiser's currency based on the exchange rates at the time of creation).   Due to the deprecation of this field, adding a fee to a newly created campaign is not allowed.  Ignored on create. _(DEPRECATED; deprecation: This attribute is deprecated in favor of additional fees.)_ |

### `Campaign_CloneCampaignJob`

| Field | Type | Required | Description |
|---|---|---|---|
| ReferenceId | string |  | The clone campaign job reference ID. |

### `Campaign_CloneCampaignParameters_post`

| Field | Type | Required | Description |
|---|---|---|---|
| CampaignId | string | yes | The ID of the campaign to be cloned. |
| CampaignName | string | yes | The name for the newly cloned campaign. _(maxLength 256)_ |
| AdGroupIds | array<string> |  | AdGroupIds to clone for the campaign.   If not specified, all the AdGroups belonging to the original campaign are cloned. |
| CampaignFlights | array<`CampaignFlight_CampaignFlight_post`> |  | Campaign flight and budget details.   If not specified, defaults to the flight details of the original campaign or template. |
| EnableAdGroupIds | array<string> |  | The IDs of ad groups that should be enabled immediately after cloning.   If not specified, none of the ad groups are enabled. |
| MarketplaceOptOut | boolean |  | When cloning a Kokai campaign, opt-out from automatically applying logic of enabling Marketplace for cloned ad groups.   Unless set to `true`, if target (or current if target is not specified) advertiser has default marketplace setting on,   cloned ad groups whose original ad groups were targeting Open Market or Private Market Only with TTD's Library Deals   will be upgraded to that's advertiser Marketplace. |
| PrimaryChannel | `Campaign_Channel` |  | The campaign primary channel. To set it, you must also specify the `Objective` and at least the `Primary Goal` for the campaign.   **NOTE**: The primary channel can be changed if needed, but it cannot be removed. |
| PrimaryGoal | `AdGroup_ROIGoal` |  | The primary goal of the campaign. To set it, you must also specify the `Primary Channel` and `Objective` for the campaign.   **NOTE**: The campaign's primary goal can be changed if needed, but it cannot be removed.     - All goal properties are mutually exclusive, which means that only one goal property may be specified at a time.       - Setting a goal property removes any previously set property.      - Setting a Boolean property values to `false` removes the goal.     - To keep the currently set goal when updating the ad group, omit this object from the update request, or send it empty.   For details and examples, see [Campaigns](/v3/portal/api/doc/Campaigns). |
| SecondaryGoal | `AdGroup_ROIGoal` |  | The secondary goal of the campaign. It can be set only after the `Primary Goal` is set for the campaign.     - All goal properties are mutually exclusive, which means that only one goal property may be specified at a time.       - Setting a goal property removes any previously set property.      - Setting a Boolean property values to `false` removes the goal.     - To keep the currently set goal when updating the ad group, omit this object from the update request, or send it empty.     - To remove the currently set goal altogether, set this goal object to `null`.   For details and examples, see [Campaigns](/v3/portal/api/doc/Campaigns). |
| SeedId | string |  | The ID of the seed attached to the campaign. For details, see [Seed](/v3/portal/api/doc/Seed).   Requires the `Version` property value to be set to `Kokai`. |
| ShouldCloneAdGroupBudgets | boolean |  | The flag that indicates whether the ad group budgets should be cloned:   - If you want to clone the ad group budgets from the campaign, set this property to `true`. IMPORTANT: To clone ad group budgets, be sure to specify the campaign flight IDs in the `CampaignFlights` property.   - If you do not want to clone the ad group budgets from the campaign, set this property to `false`. |
| TargetAdvertiserId | string |  | The ID of the advertiser that should own the newly cloned campaign.   If not specified, defaults to the original campaign or template advertiser. |
| TertiaryGoal | `AdGroup_ROIGoal` |  | The tertiary goal of the campaign. It can be set only after the `Secondary Goal` is set for the campaign.     - All goal properties are mutually exclusive, which means that only one goal property may be specified at a time.       - Setting a goal property removes any previously set property.      - Setting a Boolean property values to `false` removes the goal.     - To keep the currently set goal when updating the ad group, omit this object from the update request, or send it empty.     - To remove the currently set goal altogether, set this goal object to `null`.   For details and examples, see [Campaigns](/v3/portal/api/doc/Campaigns). |
| Version | `Campaign_CampaignVersion` |  | The name of The Trade Desk platform experience in which the campaign was created. If not specified, this will revert to the version of the originating campaign. |
| Objective | `Campaign_CampaignObjective` |  | The campaign objective.  To set it, you must also specify the `Primary Channel` and at least the `Primary Goal` for the campaign.   **NOTE**: The campaign objective can be changed if needed, but it cannot be removed.   Due to the deprecation of this field, adding an Objective to a newly created campaign is not supported. Ignored on create or update. _(DEPRECATED; deprecation: Objective is deprecated and will no longer be used.)_ |

### `Campaign_CloneCampaignTemplateParameters_post`

| Field | Type | Required | Description |
|---|---|---|---|
| CampaignId | string | yes | The ID of the campaign to be cloned. |
| CampaignName | string | yes | The name for the newly cloned campaign. _(maxLength 256)_ |
| CampaignFlights | array<`CampaignFlight_CampaignFlight_post`> |  | Campaign flight and budget details.   If not specified, defaults to the flight details of the original campaign or template. |
| EnableAdGroupIds | array<string> |  | The IDs of ad groups that should be enabled immediately after cloning.   If not specified, none of the ad groups are enabled. |
| PrimaryChannel | `Campaign_Channel` |  | The campaign primary channel. To set it, you must also specify the `Objective` and at least the `Primary Goal` for the campaign.   **NOTE**: The primary channel can be changed if needed, but it cannot be removed. |
| PrimaryGoal | `AdGroup_ROIGoal` |  | The primary goal of the campaign. To set it, you must also specify the `Primary Channel` and `Objective` for the campaign.   **NOTE**: The campaign's primary goal can be changed if needed, but it cannot be removed.     - All goal properties are mutually exclusive, which means that only one goal property may be specified at a time.       - Setting a goal property removes any previously set property.      - Setting a Boolean property values to `false` removes the goal.     - To keep the currently set goal when updating the ad group, omit this object from the update request, or send it empty.   For details and examples, see [Campaigns](/v3/portal/api/doc/Campaigns). |
| SecondaryGoal | `AdGroup_ROIGoal` |  | The secondary goal of the campaign. It can be set only after the `Primary Goal` is set for the campaign.     - All goal properties are mutually exclusive, which means that only one goal property may be specified at a time.       - Setting a goal property removes any previously set property.      - Setting a Boolean property values to `false` removes the goal.     - To keep the currently set goal when updating the ad group, omit this object from the update request, or send it empty.     - To remove the currently set goal altogether, set this goal object to `null`.   For details and examples, see [Campaigns](/v3/portal/api/doc/Campaigns). |
| SeedId | string |  | The ID of the seed attached to the campaign. For details, see [Seed](/v3/portal/api/doc/Seed).   Requires the `Version` property value to be set to `Kokai`. |
| TargetAdvertiserId | string |  | The ID of the advertiser that should own the newly cloned campaign.   If not specified, defaults to the original campaign or template advertiser. |
| TertiaryGoal | `AdGroup_ROIGoal` |  | The tertiary goal of the campaign. It can be set only after the `Secondary Goal` is set for the campaign.     - All goal properties are mutually exclusive, which means that only one goal property may be specified at a time.       - Setting a goal property removes any previously set property.      - Setting a Boolean property values to `false` removes the goal.     - To keep the currently set goal when updating the ad group, omit this object from the update request, or send it empty.     - To remove the currently set goal altogether, set this goal object to `null`.   For details and examples, see [Campaigns](/v3/portal/api/doc/Campaigns). |
| Objective | `Campaign_CampaignObjective` |  | The campaign objective.  To set it, you must also specify the `Primary Channel` and at least the `Primary Goal` for the campaign.   **NOTE**: The campaign objective can be changed if needed, but it cannot be removed.   Due to the deprecation of this field, adding an Objective to a newly created campaign is not supported. Ignored on create or update. _(DEPRECATED; deprecation: Objective is deprecated and will no longer be used.)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_IdName`

| Field | Type | Required | Description |
|---|---|---|---|
| Id | string |  | The identifier for the object instance |
| Name | string |  | The name for the object instance |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_Campaign_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`Campaign_Campaign`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TTD.DB.Provisioning.Primitives.Campaign_CampaignBudgetingVersion`

Type: string enum(Solimar, Kokai)

### `TTD.Domain.Shared.Http.Metadata.Models_Money`

Describes an amount of money in a specific currency.

| Field | Type | Required | Description |
|---|---|---|---|
| Amount | number (double) | yes | The money amount, specified as a decimal, for example, 1.5 for $1.50. |
| CurrencyCode | `TheTradeDesk_CurrencyCode` | yes | The currency of the money value specified in the `Amount`, for example, "USD" for $1.50 US dollars.   Unless you've arranged different terms during onboarding, your partner account and all its associated advertisers use the same currency, namely, USD.   If you you need to use another currency, please contact your Account Manager.   If multi-currency support is enabled for your account, see the Currency API for the full set of supported currencies and their codes. |

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

### `CampaignFlight_CampaignFlight`

| Field | Type | Required | Description |
|---|---|---|---|
| BudgetInAdvertiserCurrency | number (double) |  | The maximum amount the campaign flight may spend. This must be in the currency of the advertiser that owns the campaign. |
| BudgetInImpressions | integer (int64) |  | The maximum amount of impressions the campaign flight should buy. _(nullable)_ |
| CampaignFlightId | integer (int64) |  | The ID of the campaign flight. Ignored on create, as the ID is assigned and returned by The Trade Desk.   **IMPORTANT**: When cloning the campaign, you must provide the ID of the flight if you want the flight to be cloned. |
| CampaignId | string |  | The ID of the Campaign that owns this campaign flight.   This must be specified while adding a Flight for a campaign using the campaign flight API. |
| DailyTargetInAdvertiserCurrency | number (double) |  | The total amount the campaign flight should spend in a single day, if possible. If you do not want to limit the daily spend, you may set it to null.   This must be in the currency of the advertiser that owns the campaign. _(nullable)_ |
| DailyTargetInImpressions | integer (int64) |  | The total number of impressions the campaign flight should buy in a single day, if possible. If you do not want to limit the daily impressions bought, you may set it to null. _(nullable)_ |
| EndDateExclusiveUTC | string (date-time) |  | The date and time (in UTC) when the campaign flight is to stop spending if it has not yet exhausted its budget. To create or update a campaign flight, you may not set this property value to a date in the past. _(nullable)_ |
| StartDateInclusiveUTC | string (date-time) |  | The date and time (in UTC) when the campaign flight is to start spending. |

### `Campaign_CampaignConversionReportingColumn`

| Field | Type | Required | Description |
|---|---|---|---|
| CrossDeviceAttributionModelId | string |  | The identifier of the cross-device attribution model to apply to the tracking tag in this reporting column. A list of cross-device attribution models and identifiers are available by using our [POST /crossdeviceattributionmodel/query](/v3/portal/api/ref/post-crossdeviceattributionmodel-query-advertiser) endpoint.     Each reporting column must have a unique combination of `CrossDeviceAttributionModelId` and `TrackingTagId ` within the campaign.        This property was added after the API version 3 release. While this property will become required in the future, we maintain backward-compatibility by adhering to the following validation:     1) When creating or updating a campaign, specify this property for ALL reporting columns or for NONE.     2) When this attribute is not specified during a campaign update, we will attempt to merge/reconcile any existing cross-device settings with the specified reporting column properties. We will return an error response if the update is ambiguous and cannot be automatically resolved.     To avoid backward-compatible automated column resolution, please include this attribute in ALL reporting columns for the campaign. _(nullable)_ |
| CustomROASConfig | `Campaign_CcrcCustomROASConfig` |  | Specify the pixel and its Custom ROAS weight to be included in the Custom ROAS calculation based on the `CustomROASType` settings. _(nullable)_ |
| IncludeInCustomCPA | boolean |  | To include this pixel in custom CPA calculations, set this property value to `true`. This flag applies when the `Pixel Weighting` value is selected for the `CustomCPAType` property in the associated campaign.   **IMPORTANT**: Be sure to set the `Weight` value for this pixel. |
| ProductListInfo | `Campaign_CcrcProductListInfo` |  | This is a read-only property. If the reporting column is associated with a product list (known as an "itemset" in the platform UI), this property provides information about the list. If the reporting column is not associated with a product list, its value will be `null`.   **NOTE**: The combination of `ProductListType` and `ProductListOrder` is always unique for a given campaign. _(nullable)_ |
| ReportingColumnId | integer (int32) |  | The reporting column sequence this Tracking Tag maps to. Metrics about this conversion will appear in reports under this reporting column.   Only one Tracking Tag + Cross Device Attribution Model Id may be mapped to each column within a campaign.   The maximum number of reporting columns for a new campaign is limited via current API user configuration, and it is 5 by default.   For an existing campaign, the maximum number of columns is determined by the highest of the number of existing columns and the current API user limit.   **NOTE**: This property corresponds to the tracking tag Priority column in the UI. |
| TrackingTagId | string |  | The ID of the Tracking Tag to report on.  This Tracking Tag must have a type considered to be a conversion (see the Tracking Tag and Tracking Tag Type APIs for more information). |
| TrackingTagName | string |  | The name of the Tracking Tag associated with this column. Ignored on create and update. Returned by the API for consumer convenience. _(nullable)_ |
| Weight | number (double) |  | Define the weight for conversions by this pixel to be used in custom CPA calculations.    Here's what you need to know about weight conversion calculation and assignment:   - Weight conversion is calculated by multiplying a pixel conversion by the credit value you enter.   - To assign full credit to a pixel conversion, assign the value of 1.    - Keeping all pixels at 1 (full credit) combines pixel conversions at the same weight when calculating CPA.   - Any value less than 1 results in partial credit for conversions.   - Any value greater than 1 results in surplus credit for conversions. _(nullable)_ |

### `Campaign_CampaignObjective`

Type: string enum(Awareness, Consideration, Conversion)

### `Campaign_CampaignPacingMode`

Type: string enum(Off, PaceToEndOfFlight, PaceAhead, PaceAsSoonAsPossible)

### `Campaign_CampaignType`

Type: string enum(Standard, ProgrammaticGuaranteed)

### `Campaign_CampaignVersion`

Type: string enum(Kokai)

### `Campaign_Channel`

Type: string enum(Display, Video, Audio, TV, NativeDisplay, NativeVideo, DigitalOutOfHome)

### `Campaign_TradingModeDetails`

The trading mode settings for the campaign.

| Field | Type | Required | Description |
|---|---|---|---|
| AudienceUnlimitedTier | `TTD.Domain.Shared.EnumsAndConstants_AudienceUnlimitedTier` |  | The audience unlimited tier for the campaign. Options are 0 (opted out), 1 (Lite), or 2 (Full). |
| Mode | `TTD.DB.Provisioning.Primitives.Campaign_CampaignTradingMode` |  | The trading mode for the campaign. Options are "Off", "Control", or "Performance".   - Off: Legacy Kokai campaigns that aren't opted into trading mode   - Control: Take manual control over most aspects of the campaign   - Performance: Leverage advanced AI for fast setup and maximum performance on the campaign |

### `CustomCPA_CustomCPAType`

Type: string enum(Disabled, PixelWeighting, ClickViewthroughWeighting)

### `CustomLabel_AssignedCustomLabel`

| Field | Type | Required | Description |
|---|---|---|---|
| CustomLabelId | string |  | The Id of the label _(nullable)_ |

### `CustomROAS_CustomROASType`

Type: string enum(Disabled, PixelWeighting, ClickViewthroughWeighting, CompositeWeighting)

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

### `PassThroughFee_AdditionalFeeCard`

| Field | Type | Required | Description |
|---|---|---|---|
| Fees | array<`PassThroughFee_AdditionalFeeQuery`> |  | The collection of fees to be applied to the entity as of the start date. _(nullable)_ |
| OwnerId | string |  | The ID of the entity that owns the additional fee card. _(nullable)_ |
| OwnerType | string |  | The type of the entity that owns the additional fee card ("campaign" or "adgroup"). _(nullable)_ |
| StartDateUtc | string (date-time) |  | Start Date in UTC. The date and time at which the attached fees will take effect. New fee cards and updates to existing fee cards must have a start date at least an hour into the future. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability`

Type: string enum(Available, Archived)

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_BallotMeasureProfile`

| Field | Type | Required | Description |
|---|---|---|---|
| AudienceDescription | string |  | The description of the audience that this campaign will target. The maximum length for this property value is 512 characters.   **IMPORTANT**: Applies only to political advertising for ballot measure campaigns in the state of Maryland. At least `AudienceDescription` or `GeoDescription` is required. For details, see [Political Advertising for Ballot Measure Elections](/v3/portal/api/doc/PoliticalAdvertisingBallotMeasure). _(maxLength 512)_ |
| ElectionState | `TheTradeDesk.AdPlatform.Shared.DB.Provisioning_UsState` |  | The state in which the political advertising campaign will be run. |
| FileLocationInS3 | string |  | The Trade Desk Amazon S3 URL of the registration certificate from the New York State Board of Elections. Here's what you need know about the registration certificate:       - This certificate is required only for political advertising in the state of New York and if the advertiser is an Independent Expenditures Committee.       - The file must be in the PDF, DOCX, or DOC format and uploaded to The Trade Desk Amazon S3 bucket available at `thetradedesk-general/PoliticalAdsNewYorkStateFiles`.       - To access The Trade Desk Amazon S3 bucket, contact your Account Manager.    For details, see [Political Advertising](/v3/portal/api/doc/PoliticalAdvertising). _(maxLength 512)_ |
| GeoDescription | string |  | The description of the geographic area of where this campaign will target. The maximum length for this property value is 512 characters.   Applies only to political advertising for ballot measure campaigns in the state of Maryland. At least `GeoDescription` or `AudienceDescription` is required. For details, see [Political Advertising for Ballot Measure Elections](/v3/portal/api/doc/PoliticalAdvertisingBallotMeasure). _(maxLength 512)_ |
| IsAdvertiserIEC | boolean |  | If set to `true`, indicates that the political advertiser is an Independent Expenditures Committee.   **IMPORTANT**: Required only for political advertising in the State of New York. |
| PayingEntityAddress | string |  | The full mailing address of the entity who is paying to display political advertisements for this ballot measure. The maximum length for this property value is 512 characters. _(maxLength 512)_ |
| PayingEntityExecutiveName | string |  | The name of the executive who represents the entity who is paying to display political advertisements for this ballot measure. For example, the name of the CEO, a member of the executive committee or board of directors, or treasurer. The maximum length for this property value is 512 characters. _(maxLength 512)_ |
| PayingEntityExecutiveTitle | string |  | The role or official title of the executive who is paying to display political advertisements for this ballot measure. For example, CEO or Secretary-Treasurer. The maximum length for this property value is 512 characters. _(maxLength 512)_ |
| PayingEntityName | string |  | The name of the entity who is paying for political advertisements for this ballot measure. The maximum length for this property value is 512 characters. _(maxLength 512)_ |
| PoliticalDataId | string |  | The ID of the ballot measure election profile. |

### `TheTradeDesk.AdPlatform.Shared.DB.Provisioning_ValueAddedProvider`

Type: string enum(None, Scibids, FluzoItaly, FluzoPortugal, FluzoSpain, Dstillery, chaliceai, Beatgrid, PlaygroundXyz, Fluzo, LumenDisplay, LumenVideo, LumenCTV, Wootag, Yobi, Adelaide, Peer39VAP, NovaDisplay, NovaVideo, NovaCTV, SpacebackDisplay, SpacebackInBannerVideo, SpacebackVideo, SpacebackCTV, SpacebackAudio, FedGovtAU, KinessoAU, SpacebackEnhancedDisplay, AmplifiedIntelligence, TheWeatherCompanyBidFactor, Rembrand, SeenThisDisplay, AdelaideDisplay, AdelaideVideo, AdelaideCTV, FluzoGermany, FluzoFrance, FluzoUK, csolTccc, csolTmobileCPA, csolVcpmOptimisation, BarometerAudio, csolCciAPI, csolPMXcc, AderizeDisplay, AderizeVideo, AderizeCTV, NewtonAI, NovaDOOH, Octane11B2BStandard, Octane11B2BSelect, Octane11B2BPlatform, AirtoryDisplay, AirtoryVideo, AirtoryDOOH)

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_Availability_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_CampaignSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `Campaign_CampaignSortingField` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `Campaign_CampaignJobStatus`

Type: string enum(InProgress, Completed, Failed)

### `Campaign_Pacing`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserCurrency | `TheTradeDesk_CurrencyCode` |  | Advertiser's currency.  All the pacing values are in this currency. |
| CurrentSpendInAdvertiserCurrency | number (double) |  | Amount of the budget that has already been spent |
| FlightBudgetInAdvertiserCurrency | number (double) |  | Budget of the active flight |
| LastCalculatedAt | string (date-time) |  | The time projected spend was last calculated in UTC |
| ProjectedSpendInAdvertiserCurrency | number (double) |  | Projected spend that was calculated so far. |

### `Campaign_ROIGoalValue`

| Field | Type | Required | Description |
|---|---|---|---|
| CPAInAdvertiserCurrency | `Campaign_MoneyWithTarget` |  | The Cost Per Acquisition value along with the goal target (in the Advertiser currency). _(nullable)_ |
| CPCInAdvertiserCurrency | `Campaign_MoneyWithTarget` |  | The Cost Per Click value along with the target (in the Advertiser currency). _(nullable)_ |
| CPCVInAdvertiserCurrency | `Campaign_MoneyWithTarget` |  | Cost Per Completed View value along with the goal target (in the advertiser currency). _(nullable)_ |
| CPMInAdvertiserCurrency | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The average cost per 1000 impressions (in the Advertiser currency). _(nullable)_ |
| CTRInPercent | `Campaign_NonMonetaryGoalTarget` |  | The Click Through Rate value as well as goal target (in percent).  For example, 1 = 1% (1 in 100). _(nullable)_ |
| Impressions | integer (int64) |  | Total impressions |
| LastCalculatedAt | string (date-time) |  | The last time the goals were calculated in UTC timezone |
| MiaozhenOTPInPercent | `Campaign_NonMonetaryGoalTarget` |  | The Miaozhen On Target Percentage value along with the goal target (in percent).  For example, 1 = 1% (1 in 100). _(nullable)_ |
| NielsenOTPInPercent | `Campaign_NonMonetaryGoalTarget` |  | The Nielsen On Target Percentage value along with goal target (in percent).  For example, 1 = 1% (1 in 100). _(nullable)_ |
| ReturnOnAdSpendPercent | `Campaign_NonMonetaryGoalTarget` |  | The Return on Ad Spend value along with the goal target (in percent of ad spend). _(nullable)_ |
| VCPMInAdvertiserCurrency | `Campaign_MoneyWithTarget` |  | The Estimated Viewable Cost Per Mille (thousand) value along with the goal target (in the Advertiser currency). _(nullable)_ |
| VCRInPercent | `Campaign_NonMonetaryGoalTarget` |  | The Video Completion Rate value along with the goal target (in percent).  For example, 1 = 1% (1 in 100). _(nullable)_ |
| ViewabilityInPercent | `Campaign_NonMonetaryGoalTarget` |  | The Viewability value along with the goal target (in percent).  For example, 1 = 1% (1 in 100). _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_CampaignSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `Campaign_CampaignSortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `TheTradeDesk.AdPlatform.Shared.DB.Provisioning_ShareType`

Type: string enum(Advertiser, Partner, Global)

### `Campaign_CampaignConversionReportingColumn_put`

| Field | Type | Required | Description |
|---|---|---|---|
| TrackingTagId | string | yes | The ID of the Tracking Tag to report on.  This Tracking Tag must have a type considered to be a conversion (see the Tracking Tag and Tracking Tag Type APIs for more information). |
| CrossDeviceAttributionModelId | string |  | The identifier of the cross-device attribution model to apply to the tracking tag in this reporting column. A list of cross-device attribution models and identifiers are available by using our [POST /crossdeviceattributionmodel/query](/v3/portal/api/ref/post-crossdeviceattributionmodel-query-advertiser) endpoint.     Each reporting column must have a unique combination of `CrossDeviceAttributionModelId` and `TrackingTagId ` within the campaign.        This property was added after the API version 3 release. While this property will become required in the future, we maintain backward-compatibility by adhering to the following validation:     1) When creating or updating a campaign, specify this property for ALL reporting columns or for NONE.     2) When this attribute is not specified during a campaign update, we will attempt to merge/reconcile any existing cross-device settings with the specified reporting column properties. We will return an error response if the update is ambiguous and cannot be automatically resolved.     To avoid backward-compatible automated column resolution, please include this attribute in ALL reporting columns for the campaign. _(nullable)_ |
| CustomROASConfig | `Campaign_CcrcCustomROASConfig` |  | Specify the pixel and its Custom ROAS weight to be included in the Custom ROAS calculation based on the `CustomROASType` settings. _(nullable)_ |
| IncludeInCustomCPA | boolean |  | To include this pixel in custom CPA calculations, set this property value to `true`. This flag applies when the `Pixel Weighting` value is selected for the `CustomCPAType` property in the associated campaign.   **IMPORTANT**: Be sure to set the `Weight` value for this pixel. |
| ReportingColumnId | integer (int32) |  | The reporting column sequence this Tracking Tag maps to. Metrics about this conversion will appear in reports under this reporting column.   Only one Tracking Tag + Cross Device Attribution Model Id may be mapped to each column within a campaign.   The maximum number of reporting columns for a new campaign is limited via current API user configuration, and it is 5 by default.   For an existing campaign, the maximum number of columns is determined by the highest of the number of existing columns and the current API user limit.   **NOTE**: This property corresponds to the tracking tag Priority column in the UI. |
| Weight | number (double) |  | Define the weight for conversions by this pixel to be used in custom CPA calculations.    Here's what you need to know about weight conversion calculation and assignment:   - Weight conversion is calculated by multiplying a pixel conversion by the credit value you enter.   - To assign full credit to a pixel conversion, assign the value of 1.    - Keeping all pixels at 1 (full credit) combines pixel conversions at the same weight when calculating CPA.   - Any value less than 1 results in partial credit for conversions.   - Any value greater than 1 results in surplus credit for conversions. _(nullable)_ |

### `CampaignFlight_CampaignFlight_post`

| Field | Type | Required | Description |
|---|---|---|---|
| BudgetInAdvertiserCurrency | number (double) | yes | The maximum amount the campaign flight may spend. This must be in the currency of the advertiser that owns the campaign. |
| StartDateInclusiveUTC | string (date-time) | yes | The date and time (in UTC) when the campaign flight is to start spending. |
| BudgetInImpressions | integer (int64) |  | The maximum amount of impressions the campaign flight should buy. _(nullable)_ |
| CampaignId | string |  | The ID of the Campaign that owns this campaign flight.   This must be specified while adding a Flight for a campaign using the campaign flight API. |
| DailyTargetInAdvertiserCurrency | number (double) |  | The total amount the campaign flight should spend in a single day, if possible. If you do not want to limit the daily spend, you may set it to null.   This must be in the currency of the advertiser that owns the campaign. _(nullable)_ |
| DailyTargetInImpressions | integer (int64) |  | The total number of impressions the campaign flight should buy in a single day, if possible. If you do not want to limit the daily impressions bought, you may set it to null. _(nullable)_ |
| EndDateExclusiveUTC | string (date-time) |  | The date and time (in UTC) when the campaign flight is to stop spending if it has not yet exhausted its budget. To create or update a campaign flight, you may not set this property value to a date in the past. _(nullable)_ |

### `Campaign_CampaignConversionReportingColumn_post`

| Field | Type | Required | Description |
|---|---|---|---|
| TrackingTagId | string | yes | The ID of the Tracking Tag to report on.  This Tracking Tag must have a type considered to be a conversion (see the Tracking Tag and Tracking Tag Type APIs for more information). |
| CrossDeviceAttributionModelId | string |  | The identifier of the cross-device attribution model to apply to the tracking tag in this reporting column. A list of cross-device attribution models and identifiers are available by using our [POST /crossdeviceattributionmodel/query](/v3/portal/api/ref/post-crossdeviceattributionmodel-query-advertiser) endpoint.     Each reporting column must have a unique combination of `CrossDeviceAttributionModelId` and `TrackingTagId ` within the campaign.        This property was added after the API version 3 release. While this property will become required in the future, we maintain backward-compatibility by adhering to the following validation:     1) When creating or updating a campaign, specify this property for ALL reporting columns or for NONE.     2) When this attribute is not specified during a campaign update, we will attempt to merge/reconcile any existing cross-device settings with the specified reporting column properties. We will return an error response if the update is ambiguous and cannot be automatically resolved.     To avoid backward-compatible automated column resolution, please include this attribute in ALL reporting columns for the campaign. _(nullable)_ |
| CustomROASConfig | `Campaign_CcrcCustomROASConfig` |  | Specify the pixel and its Custom ROAS weight to be included in the Custom ROAS calculation based on the `CustomROASType` settings. _(nullable)_ |
| IncludeInCustomCPA | boolean |  | To include this pixel in custom CPA calculations, set this property value to `true`. This flag applies when the `Pixel Weighting` value is selected for the `CustomCPAType` property in the associated campaign.   **IMPORTANT**: Be sure to set the `Weight` value for this pixel. |
| ReportingColumnId | integer (int32) |  | The reporting column sequence this Tracking Tag maps to. Metrics about this conversion will appear in reports under this reporting column.   Only one Tracking Tag + Cross Device Attribution Model Id may be mapped to each column within a campaign.   The maximum number of reporting columns for a new campaign is limited via current API user configuration, and it is 5 by default.   For an existing campaign, the maximum number of columns is determined by the highest of the number of existing columns and the current API user limit.   **NOTE**: This property corresponds to the tracking tag Priority column in the UI. |
| Weight | number (double) |  | Define the weight for conversions by this pixel to be used in custom CPA calculations.    Here's what you need to know about weight conversion calculation and assignment:   - Weight conversion is calculated by multiplying a pixel conversion by the credit value you enter.   - To assign full credit to a pixel conversion, assign the value of 1.    - Keeping all pixels at 1 (full credit) combines pixel conversions at the same weight when calculating CPA.   - Any value less than 1 results in partial credit for conversions.   - Any value greater than 1 results in surplus credit for conversions. _(nullable)_ |

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

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_BallotMeasureProfile_post`

| Field | Type | Required | Description |
|---|---|---|---|
| PayingEntityAddress | string | yes | The full mailing address of the entity who is paying to display political advertisements for this ballot measure. The maximum length for this property value is 512 characters. _(maxLength 512)_ |
| PayingEntityExecutiveName | string | yes | The name of the executive who represents the entity who is paying to display political advertisements for this ballot measure. For example, the name of the CEO, a member of the executive committee or board of directors, or treasurer. The maximum length for this property value is 512 characters. _(maxLength 512)_ |
| PayingEntityExecutiveTitle | string | yes | The role or official title of the executive who is paying to display political advertisements for this ballot measure. For example, CEO or Secretary-Treasurer. The maximum length for this property value is 512 characters. _(maxLength 512)_ |
| PayingEntityName | string | yes | The name of the entity who is paying for political advertisements for this ballot measure. The maximum length for this property value is 512 characters. _(maxLength 512)_ |
| AudienceDescription | string |  | The description of the audience that this campaign will target. The maximum length for this property value is 512 characters.   **IMPORTANT**: Applies only to political advertising for ballot measure campaigns in the state of Maryland. At least `AudienceDescription` or `GeoDescription` is required. For details, see [Political Advertising for Ballot Measure Elections](/v3/portal/api/doc/PoliticalAdvertisingBallotMeasure). _(maxLength 512)_ |
| ElectionState | `TheTradeDesk.AdPlatform.Shared.DB.Provisioning_UsState` |  | The state in which the political advertising campaign will be run. |
| FileLocationInS3 | string |  | The Trade Desk Amazon S3 URL of the registration certificate from the New York State Board of Elections. Here's what you need know about the registration certificate:       - This certificate is required only for political advertising in the state of New York and if the advertiser is an Independent Expenditures Committee.       - The file must be in the PDF, DOCX, or DOC format and uploaded to The Trade Desk Amazon S3 bucket available at `thetradedesk-general/PoliticalAdsNewYorkStateFiles`.       - To access The Trade Desk Amazon S3 bucket, contact your Account Manager.    For details, see [Political Advertising](/v3/portal/api/doc/PoliticalAdvertising). _(maxLength 512)_ |
| GeoDescription | string |  | The description of the geographic area of where this campaign will target. The maximum length for this property value is 512 characters.   Applies only to political advertising for ballot measure campaigns in the state of Maryland. At least `GeoDescription` or `AudienceDescription` is required. For details, see [Political Advertising for Ballot Measure Elections](/v3/portal/api/doc/PoliticalAdvertisingBallotMeasure). _(maxLength 512)_ |
| IsAdvertiserIEC | boolean |  | If set to `true`, indicates that the political advertiser is an Independent Expenditures Committee.   **IMPORTANT**: Required only for political advertising in the State of New York. |
| PoliticalDataId | string |  | The ID of the ballot measure election profile. |

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

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_BallotMeasureProfile_put`

| Field | Type | Required | Description |
|---|---|---|---|
| AudienceDescription | string |  | The description of the audience that this campaign will target. The maximum length for this property value is 512 characters.   **IMPORTANT**: Applies only to political advertising for ballot measure campaigns in the state of Maryland. At least `AudienceDescription` or `GeoDescription` is required. For details, see [Political Advertising for Ballot Measure Elections](/v3/portal/api/doc/PoliticalAdvertisingBallotMeasure). _(maxLength 512)_ |
| ElectionState | `TheTradeDesk.AdPlatform.Shared.DB.Provisioning_UsState` |  | The state in which the political advertising campaign will be run. |
| FileLocationInS3 | string |  | The Trade Desk Amazon S3 URL of the registration certificate from the New York State Board of Elections. Here's what you need know about the registration certificate:       - This certificate is required only for political advertising in the state of New York and if the advertiser is an Independent Expenditures Committee.       - The file must be in the PDF, DOCX, or DOC format and uploaded to The Trade Desk Amazon S3 bucket available at `thetradedesk-general/PoliticalAdsNewYorkStateFiles`.       - To access The Trade Desk Amazon S3 bucket, contact your Account Manager.    For details, see [Political Advertising](/v3/portal/api/doc/PoliticalAdvertising). _(maxLength 512)_ |
| GeoDescription | string |  | The description of the geographic area of where this campaign will target. The maximum length for this property value is 512 characters.   Applies only to political advertising for ballot measure campaigns in the state of Maryland. At least `GeoDescription` or `AudienceDescription` is required. For details, see [Political Advertising for Ballot Measure Elections](/v3/portal/api/doc/PoliticalAdvertisingBallotMeasure). _(maxLength 512)_ |
| IsAdvertiserIEC | boolean |  | If set to `true`, indicates that the political advertiser is an Independent Expenditures Committee.   **IMPORTANT**: Required only for political advertising in the State of New York. |
| PayingEntityAddress | string |  | The full mailing address of the entity who is paying to display political advertisements for this ballot measure. The maximum length for this property value is 512 characters. _(maxLength 512)_ |
| PayingEntityExecutiveName | string |  | The name of the executive who represents the entity who is paying to display political advertisements for this ballot measure. For example, the name of the CEO, a member of the executive committee or board of directors, or treasurer. The maximum length for this property value is 512 characters. _(maxLength 512)_ |
| PayingEntityExecutiveTitle | string |  | The role or official title of the executive who is paying to display political advertisements for this ballot measure. For example, CEO or Secretary-Treasurer. The maximum length for this property value is 512 characters. _(maxLength 512)_ |
| PayingEntityName | string |  | The name of the entity who is paying for political advertisements for this ballot measure. The maximum length for this property value is 512 characters. _(maxLength 512)_ |
| PoliticalDataId | string |  | The ID of the ballot measure election profile. |

### `TheTradeDesk_CurrencyCode`

Type: string enum(None, AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF, BMD, BND, BOB, BRL, BSD, BTN, BWP, BYR, BZD, CAD, CDF, CHF, CLF, CLP, CNH, CNY, COP, CRC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ERN, ETB, EUR, FJD, FKP, GBP, GEL, GHS, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HRK, HTG, HUF, IDR, ILS, INR, IQD, IRR, ISK, JMD, JOD, JPY, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LTL, LVL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MRO, MUR, MVR, MWK, MXN, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SRD, STD, SVC, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD, TWD, TZS, UAH, UGX, USD, UYU, UZS, VEF, VND, VUV, WST, XAF, XCD, XDR, XOF, XPF, YER, ZAR, ZMW, ZWL)

### `AdGroup_NewBuyerTargetType`

Type: string enum(Featured, Total)

### `Campaign_CcrcCustomROASConfig`

| Field | Type | Required | Description |
|---|---|---|---|
| CustomROASClickWeight | number (double) |  | The click-through pixel weight to be used in Custom ROAS calculations. _(nullable)_ |
| CustomROASViewthroughWeight | number (double) |  | The view-through pixel weight to be used in Custom ROAS calculations. _(nullable)_ |
| CustomROASWeight | number (double) |  | The pixel weight to be used in Custom ROAS calculations. _(nullable)_ |
| IncludeInCustomROAS | boolean |  | If set to `true`, include this pixel in Custom ROAS calculations. |

### `Campaign_CcrcProductListInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| ProductListOrder | integer (int32) |  | The one-based product list order number for the `ProductListType` in this campaign.   For example, if the value of `ProductListType` is `'Featured'` and the value of `ProductListOrder` is `1`, it means that this reporting column corresponds to Featured Product List (Item) 1. |
| ProductListType | `Campaign_ProductListReportingType` |  | The product list type in the context of this campaign. |

### `TTD.DB.Provisioning.Primitives.Campaign_CampaignTradingMode`

Type: string enum(Off, Control, Performance)

### `TTD.Domain.Shared.EnumsAndConstants_AudienceUnlimitedTier`

Type: string enum(None, Lite, Full)

### `DimensionalBidding_BidListAdjustmentType`

Type: string enum(BlockList, TargetList, Optimized)

### `DimensionalBidding_BidListSource`

Type: string enum(User, ManualRecommendation, AutoAppliedRecommendation, UserBulkEdit)

### `DimensionalBidding_DimensionDescriptor`

Type: string enum(UnknownDimension, HasAdFormatId, HasDomainFragmentId, HasUniversalCategoryTaxonomyId, HasAdvertiserTargetingDataId, HasBrowserId, HasCarrierId, HasDeviceModelId, HasDeviceTypeId, HasGeoSegmentId, HasHourOfWeek, HasLanguageId, HasOsId, HasPrivateContractId, HasRecencyWindowInMinutes, HasRenderingContextId, HasFactualGeostoreTargetingDataId, HasSupplyVendorId, HasTemperatureBucketInCelsius, HasThirdPartyData, HasAdsTxtSellerTypeId, HasVideoMutedStateId, HasVideoPlaybackTypeId, HasVideoPlayerSizeId, HasVideoQualityId, HasVideoSkippabilityId, HasFactualProximityDataId, HasImpressionPlacementId, HasVideoTruthScoreRange, HasVideoViewabilityScoreRange, HasDisplayViewabilityScoreRange, HasPeer39LanguageId, HasIntegralContextualCategoryId, HasPeer39ContextualCategoryId, HasDoubleVerifyContextualCategoryId, HasIntegralBrandSafetyCategoryId, HasIntegralVideoBrandSafetyCategoryId, HasPeer39BrandSafetyCategoryId, HasDoubleVerifyBrandSafetyCategoryId, HasIntegralPageQualityCategoryId, HasIntegralVideoPageQualityCategoryId, HasPeer39PageQualityCategoryId, HasDoubleVerifyBotAvoidanceCategoryId, HasContextualAppCategoryId, HasPublisherId, HasIntegralViewabilityCategoryId, HasIntegralVideoViewabilityCategoryId, HasDoubleVerifyViewabilityCategoryId, HasDoubleVerifyVideoViewabilityCategoryId, HasFrequencyAdjustmentId, HasPeer39ViewabilityCategoryId, HasVideoCompletionRateScoreRange, HasInternetConnectionTypeId, HasRTBAsiaPageQualityCategoryId, HasRTBAsiaVideoPageQualityCategoryId, HasTTDContextualCategoryId, HasSupplyPathOptimizationListId, HasMarketTypeId, HasContextualSupplyVendorGenreId, HasContextualSupplyVendorCategoryId, HasWeatherConditionId, HasFrequencyV2AdjustmentId, HasSemasioContextualCategoryId, HasSellerId, HasDigitalOutOfHomeVenueTypeId, HasNativePlacementTypeId, HasTTDNativeContextTypeId, HasDomainClassId, HasGeofenceThirdPartyDataAndBrand, HasPreBidContextualCategoryId, HasTencentPageQualityCategoryId, HasContentGenre, HasContentLivestream, HasContentProductionQuality, HasContentRating, HasContentDuration, HasTVQualityIndexRange, HasAtmosphericCondition, HasMarketplaceId, HasAudienceReachPercentageTierId, HasAdLoadCategory, HasFullReferrerUrl, HasLikelyRefreshRate, HasContentTransparency, HasIdiosyncraticSegmentId, HasRewarded, HasSellerRelationshipTypeId, HasAdToContentRatioRange, HasAdsInViewRange, HasExtendedZipCodeGroupSegmentThirdPartyDataId, HasContentLanguage)

### `PassThroughFee_AdditionalFeeQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| Amount | number (double) |  | The fee amount to be charged (according to the type of fee). Must be nonzero and positive.   If FeeType is one of MediaCostPercentage, DataCostPercentage, MediaPlusDataCostPercentage or PartnerCostPercentage then a value greater than 0 and less than 100.   If FeeType is one of FeeCPM or RateCPM then CPM in advertiser currency. |
| Description | string |  | The description or title of the fee (shown in the UI). _(nullable)_ |
| FeeType | `PassThroughFee_AdditionalFeeType` |  | The fee type that determines how and when to calculate a charge. Fee types include MediaCostPercentage, DataCostPercentage, MediaPlusDataCostPercentage, PartnerCostPercentage, FeeCPM and RateCPM. A flat rate card can only have one fee with fee type RateCPM. |

### `TheTradeDesk.AdPlatform.Shared.DB.Provisioning_UsState`

Type: string enum(Alabama, Alaska, Arkansas, Arizona, California, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Iowa, Idaho, Illinois, Indiana, Kansas, Kentucky, Louisiana, Massachusetts, Maryland, Maine, Michigan, Minnesota, Missouri, Mississippi, Montana, NorthCarolina, NorthDakota, Nebraska, NewHampshire, NewJersey, NewMexico, Nevada, NewYork, Oklahoma, Ohio, Oregon, Pennsylvania, RhodeIsland, SouthCarolina, SouthDakota, Tennessee, Texas, Utah, Virginia, Vermont, Washington, Wisconsin, WestVirginia, Wyoming, WashingtonDC)

### `Campaign_CampaignSortingField`

Type: string enum(Name, Description, Budget, BudgetInImpressions, DailyBudget, DailyBudgetInImpressions, CreatedAtUtc, LastUpdatedAtUtc)

### `Campaign_MoneyWithTarget`

| Field | Type | Required | Description |
|---|---|---|---|
| Amount | number (double) |  | The calculated amount of money for the metric. E.g. for 1.5 United States Dollars, this should be 1.5. |
| CurrencyCode | `TheTradeDesk_CurrencyCode` |  | The currency of the money. E.g. for 1.5 United States Dollars, this should be "USD".   Unless you arranged different terms during onboarding, your Partner wil be in USD and all Advertisers under the partner must use the same currency.   If you believe you need another currency, please contact your account manager for terms and conditions.   If multiple currency support is enabled for your account, see the Currency API for the full set of supported currencies and their codes. |
| Target | number (double) |  | The target amount of money for the metric. E.g. for 1.5 United States Dollars, this should be 1.5. |

### `Campaign_NonMonetaryGoalTarget`

| Field | Type | Required | Description |
|---|---|---|---|
| Amount | number (double) |  | The average value of the goal in the last 4 weeks |
| Target | number (double) |  | The target for this goal |

### `Campaign_ProductListReportingType`

Type: string enum(Featured, Halo)

### `PassThroughFee_AdditionalFeeType`

Type: string enum(None, MediaCostPercentage, DataCostPercentage, MediaPlusDataCostPercentage, PartnerCostPercentage, FeeCPM, RateCPM, RateCPC, CustomPMP_PartnerCostPercentage, MediaDataFeeFeaturesCostPercentage, PartnerDataCostPercentage)

