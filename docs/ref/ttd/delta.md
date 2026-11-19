# Delta

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 10

---

## POST /v3/delta/activity/query/adgroup

Retrieve a list of IDs of all activity logs for the specified ad group that were updated since the last change tracking version.  
**TIP**: With GraphQL, you can significantly improve performance, tailor queries to specific criteria, and save both time and effort. To get started, use the <a href="https://github.com/thetradedesk/Platform/tree/main/Python/Delta" target="_blank">Delta Python scripts</a>. See also [Platform Synchronization](/v3/portal/api/doc/PlatformSynchronization).

Operation ID: `post-delta-activity-query-adgroup`

**Request body** (`application/json`, required): `Delta_ActivityAdGroupDeltaQuery`

**Response 200** (`application/json`): `Delta_ActivityLogDelta`

---

## POST /v3/delta/adgroup/query/advertiser

Retrieve a list of IDs of all ad groups for the specified advertiser that were modified since the last change tracking version.  
**TIP**: With GraphQL, you can significantly improve performance, tailor queries to specific criteria, and save both time and effort. To get started, use the <a href="https://github.com/thetradedesk/Platform/tree/main/Python/Delta" target="_blank">Delta Python scripts</a>. See also [Platform Synchronization](/v3/portal/api/doc/PlatformSynchronization).

Operation ID: `post-delta-adgroup-query-advertiser`

**Request body** (`application/json`, required): `Delta_AdGroupAdvertiserDeltaQuery`

**Response 200** (`application/json`): `Delta_AdGroupDelta`

---

## POST /v3/delta/adgroup/query/campaign

Retrieve a list of IDs of all ad groups for the specified campaign that were modified since the last change tracking version.  
**TIP**: With GraphQL, you can significantly improve performance, tailor queries to specific criteria, and save both time and effort. To get started, use the <a href="https://github.com/thetradedesk/Platform/tree/main/Python/Delta" target="_blank">Delta Python scripts</a>. See also [Platform Synchronization](/v3/portal/api/doc/PlatformSynchronization).

Operation ID: `post-delta-adgroup-query-campaign`

**Request body** (`application/json`, required): `Delta_AdGroupCampaignDeltaQuery`

**Response 200** (`application/json`): `Delta_AdGroupDelta`

---

## POST /v3/delta/advertiser/query/partner

Retrieve a list of IDs of all advertisers that were modified since the last change tracking version.   
**TIP**: With GraphQL, you can significantly improve performance, tailor queries to specific criteria, and save both time and effort. To get started, use the <a href="https://github.com/thetradedesk/Platform/tree/main/Python/Delta" target="_blank">Delta Python scripts</a>. See also [Platform Synchronization](/v3/portal/api/doc/PlatformSynchronization).

Operation ID: `post-delta-advertiser-query-partner`

**Request body** (`application/json`, required): `Delta_AdvertiserDeltaQuery`

**Response 200** (`application/json`): `Delta_AdvertiserDelta`

---

## POST /v3/delta/campaign/query/advertiser

Retrieve a list of IDs of campaigns that were modified since the last change tracking version.  
**TIP**: With GraphQL, you can significantly improve performance, tailor queries to specific criteria, and save both time and effort. To get started, use the <a href="https://github.com/thetradedesk/Platform/tree/main/Python/Delta" target="_blank">Delta Python scripts</a>. See also [Platform Synchronization](/v3/portal/api/doc/PlatformSynchronization).

Operation ID: `post-delta-campaign-query-advertiser`

**Request body** (`application/json`, required): `Delta_CampaignDeltaQuery`

**Response 200** (`application/json`): `Delta_CampaignDelta`

---

## POST /v3/delta/creative/query/advertiser

Retrieve a list of IDs of creatives that were modified since the last change tracking version.  
**TIP**: With GraphQL, you can significantly improve performance, tailor queries to specific criteria, and save both time and effort. To get started, use the <a href="https://github.com/thetradedesk/Platform/tree/main/Python/Delta" target="_blank">Delta Python scripts</a>. See also [Platform Synchronization](/v3/portal/api/doc/PlatformSynchronization).

Operation ID: `post-delta-creative-query-advertiser`

**Request body** (`application/json`, required): `Delta_CreativeDeltaQuery`

**Response 200** (`application/json`): `Delta_CreativeDelta`

---

## POST /v3/delta/contract/query/advertiser/available

Retrieve a list of IDs of available contracts that were modified since the last change tracking version.  
**TIP**: With GraphQL, you can significantly improve performance, tailor queries to specific criteria, and save both time and effort. To get started, use the <a href="https://github.com/thetradedesk/Platform/tree/main/Python/Delta" target="_blank">Delta Python scripts</a>. See also [Platform Synchronization](/v3/portal/api/doc/PlatformSynchronization).

Operation ID: `post-delta-contract-query-advertiser-available`

**Request body** (`application/json`, required): `Delta_ContractDeltaQuery`

**Response 200** (`application/json`): `Delta_ContractDelta`

---

## POST /v3/delta/bidlist/query/partner

Retrieve a list of IDs of partner bid lists that were modified since the last change tracking version.  
**TIP**: With GraphQL, you can significantly improve performance, tailor queries to specific criteria, and save both time and effort. To get started, use the <a href="https://github.com/thetradedesk/Platform/tree/main/Python/Delta" target="_blank">Delta Python scripts</a>. See also [Platform Synchronization](/v3/portal/api/doc/PlatformSynchronization).

Operation ID: `post-delta-bidlist-query-partner`

**Request body** (`application/json`, required): `Delta_BidListDeltaQuery`

**Response 200** (`application/json`): `Delta_BidListDelta`

---

## POST /v3/delta/bidlist/query/global

Retrieve a list of IDs of all bid lists that were modified since the last change tracking version.  
**TIP**: With GraphQL, you can significantly improve performance, tailor queries to specific criteria, and save both time and effort. To get started, use the <a href="https://github.com/thetradedesk/Platform/tree/main/Python/Delta" target="_blank">Delta Python scripts</a>. See also [Platform Synchronization](/v3/portal/api/doc/PlatformSynchronization).

Operation ID: `post-delta-bidlist-query-global`

**Request body** (`application/json`, required): `Delta_BidListDeltaQuery`

**Response 200** (`application/json`): `Delta_BidListDelta`

---

## POST /v3/delta/dmp/query/advertiser/firstparty

Retrieve a list of IDs of all first-party data segments that were modified since the last change tracking version. For details, see [Delta Calls](/v3/portal/api/doc/PlatformSynchronization#delta-kokai).  
**NOTE**: This endpoint returns only newly created segments and those with updated metadata, such as changes to names or descriptions. Segments with updated user data, such as user counts, are not returned.

Operation ID: `post-delta-dmp-query-advertiser-firstparty`

**Request body** (`application/json`, required): `Delta_FirstPartyDataAdvertiserDeltaQuery`

**Response 200** (`application/json`): `Delta_FirstPartyDataDelta`

---

## Schemas

### `Delta_ActivityAdGroupDeltaQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| AdGroupId | string | yes | The ID of the ad group. |
| IncludeBidLineDetails | boolean |  | Retrieve the bid line details if the change occurs to a bid list. By default, this is set to `false`.  This introduces a small performance impact.   This is ignored if `ReturnEntireActivity` is set to `false`. |
| LastChangeTrackingVersion | integer (int64) |  | The number of the previously changed tracking version that you want to receive.   To retrieve the latest tracking version number, set this value to `null`.   For details on usage, see the *FAQs* in [Platform Synchronization](/v3/portal/api/doc/PlatformSynchronization). _(nullable)_ |
| ReturnEntireActivity | boolean |  | If set to `true`, returns a list of activity logs rather than a list of activity log IDs. |

### `Delta_ActivityLogDelta`

| Field | Type | Required | Description |
|---|---|---|---|
| ActivityLogs | array<`ActivityLog_ActivityLog`> |  | The list of Activity Log items that have changed since the specified LastChangeId. _(nullable)_ |
| ElementIds | array<string> |  | The list of IDs for the element type queried (Creative, AdGroup, Advertiser, etc.) _(nullable)_ |
| LastChangeTrackingVersion | integer (int64) |  | The current change tracking version. The client must store this value for future use. |
| MoreActivityLogsAvailable | boolean |  | Will be true if not all Activity Log items are returned with this call. Will only be true if ReturnEntireActivity is set in the request. The Trade Desk may at times return back a partial list of Activity Logs. When this happens, the LastChangeTrackingVersion will be set to the correct value and you can immediately call this endpoint again with an update LastChangeTrackingVersion. |

### `Delta_AdGroupAdvertiserDeltaQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The platform ID of the advertiser that owns the Ad Groups. If null, will return ids for all valid adgroups. Can only be null if returning Ad Group Ids only. _(nullable)_ |
| IncludeTemplates | boolean |  | If true, AdGroup templates will be included, otherwise they will be omitted. If not specified, defaults to true |
| LastChangeTrackingVersion | integer (int64) |  | The number of the previously changed tracking version that you want to receive.   To retrieve the latest tracking version number, set this value to `null`.   For details on usage, see the *FAQs* in [Platform Synchronization](/v3/portal/api/doc/PlatformSynchronization). _(nullable)_ |
| ReturnEntireAdGroup | boolean |  | If true, will return a list of Ad Groups rather than a list of AdGroupIds. If true, a valid AdvertiserId must also be supplied. |

### `Delta_AdGroupCampaignDeltaQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| CampaignId | string | yes | The ID of the Campaign that owns the Ad Groups. |
| LastChangeTrackingVersion | integer (int64) |  | The number of the previously changed tracking version that you want to receive.   To retrieve the latest tracking version number, set this value to `null`.   For details on usage, see the *FAQs* in [Platform Synchronization](/v3/portal/api/doc/PlatformSynchronization). _(nullable)_ |
| ReturnEntireAdGroup | boolean |  | If true, will return a list of Ad Groups rather than a list of AdGroupIds |

### `Delta_AdGroupDelta`

| Field | Type | Required | Description |
|---|---|---|---|
| AdGroups | array<`AdGroup_AdGroup`> |  | The list of AdGroups that have changed since the specified LastChangeId. _(nullable)_ |
| ElementIds | array<string> |  | The list of IDs for the element type queried (Creative, AdGroup, Advertiser, etc.) _(nullable)_ |
| LastChangeTrackingVersion | integer (int64) |  | The current change tracking version. The client must store this value for future use. |
| MoreAdGroupsAvailable | boolean |  | Will be true if not all AdGroups are returned with this call. Will only be true if ReturnEntireAdGroup is set in the request. The Trade Desk may at times return back a partial list of Ad Groups. When this happens, the LastChangeTrackingVersion will be set to the correct value and you can immediately call this endpoint again with an update LastChangeTrackingVersion. |

### `Delta_AdvertiserDelta`

| Field | Type | Required | Description |
|---|---|---|---|
| Advertisers | array<`Advertiser_Advertiser`> |  | The list of Advertisers that have changed since the specified LastChangeId. _(nullable)_ |
| ElementIds | array<string> |  | The list of IDs for the element type queried (Creative, AdGroup, Advertiser, etc.) _(nullable)_ |
| LastChangeTrackingVersion | integer (int64) |  | The current change tracking version. The client must store this value for future use. |
| MoreAdvertisersAvailable | boolean |  | Will be true if not all Advertisers are returned with this call. Will only be true if ReturnEntireAdvertiser is set in the request. The Trade Desk may at times return back a partial list of Advertisers. When this happens, the LastChangeTrackingVersion will be set to the correct value and you can immediately call this endpoint again with an update LastChangeTrackingVersion. |

### `Delta_AdvertiserDeltaQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| LastChangeTrackingVersion | integer (int64) |  | The number of the previously changed tracking version that you want to receive.   To retrieve the latest tracking version number, set this value to `null`.   For details on usage, see the *FAQs* in [Platform Synchronization](/v3/portal/api/doc/PlatformSynchronization). _(nullable)_ |
| PartnerId | string |  | The ID of the Partner that owns the Advertisers. _(nullable)_ |
| ReturnEntireAdvertiser | boolean |  | If true, will return a list of Advertisers rather than a list of Advertiser Ids |

### `Delta_BidListDelta`

| Field | Type | Required | Description |
|---|---|---|---|
| BidLists | array<`DimensionalBidding_BidListSummary`> |  | The list of Bid Lists that have changed since the specified LastChangeTrackingVersion.   Note: deleted bidlist will only return their Id and the IsDeleted Flag. _(nullable)_ |
| ElementIds | array<string> |  | The list of IDs for the element type queried (Creative, AdGroup, Advertiser, etc.) _(nullable)_ |
| LastChangeTrackingVersion | integer (int64) |  | The current change tracking version. The client must store this value for future use. |
| MoreBidListsAvailable | boolean |  | Will be true if not all Bid Lists are returned with this call. Will only be true if ReturnEntireBidLists is set in the request. The Trade Desk may at times return back a partial list of Bid Lists. When this happens, the LastChangeTrackingVersion will be set to the correct value and you can immediately call this endpoint again with an update LastChangeTrackingVersion. |

### `Delta_BidListDeltaQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| LastChangeTrackingVersion | integer (int64) |  | The number of the previously changed tracking version that you want to receive.   To retrieve the latest tracking version number, set this value to `null`.   For details on usage, see the *FAQs* in [Platform Synchronization](/v3/portal/api/doc/PlatformSynchronization). _(nullable)_ |
| PartnerId | string |  | The ID of the partner that owns the returned bid lists. _(nullable)_ |
| ReturnEntireBidList | boolean |  | If set to `true`, returns a list of bid list summaries rather than just a list of bid list IDs. Here's what you need to know about this property:   - This value may be set to `true` only if the partner ID is included.   - For deleted bid lists only two properties are returned: the bid list ID and the `IsDeleted` flag set to `true`. |

### `Delta_CampaignDelta`

| Field | Type | Required | Description |
|---|---|---|---|
| Campaigns | array<`Campaign_Campaign`> |  | The list of Campaigns that have changed since the specified LastChangeId. _(nullable)_ |
| ElementIds | array<string> |  | The list of IDs for the element type queried (Creative, AdGroup, Advertiser, etc.) _(nullable)_ |
| LastChangeTrackingVersion | integer (int64) |  | The current change tracking version. The client must store this value for future use. |
| MoreCampaignsAvailable | boolean |  | Will be true if not all Campaigns are returned with this call. Will only be true if ReturnEntireCampaign is set in the request. The Trade Desk may at times return back a partial list of Campaigns. When this happens, the LastChangeTrackingVersion will be set to the correct value and you can immediately call this endpoint again with an update LastChangeTrackingVersion. |

### `Delta_CampaignDeltaQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The platform ID of the advertiser that owns the campaigns. _(nullable)_ |
| LastChangeTrackingVersion | integer (int64) |  | The number of the previously changed tracking version that you want to receive.   To retrieve the latest tracking version number, set this value to `null`.   For details on usage, see the *FAQs* in [Platform Synchronization](/v3/portal/api/doc/PlatformSynchronization). _(nullable)_ |
| ReturnEntireCampaign | boolean |  | If true, will return a list of Campaigns rather than a list of Campaign Ids |

### `Delta_ContractDelta`

| Field | Type | Required | Description |
|---|---|---|---|
| Contracts | array<`Contract_Contract`> |  | The list of all Contracts that have changed, or advertisers permissions have changed for, since the specified LastChangeId _(nullable)_ |
| ElementIds | array<string> |  | The list of IDs for the element type queried (Creative, AdGroup, Advertiser, etc.) _(nullable)_ |
| LastChangeTrackingVersion | integer (int64) |  | The current change tracking version. The client must store this value for future use. |
| MoreContractsAvailable | boolean |  | Will be true if not all Contracts are returned with this call. Will only be true if ReturnEntireContract is set in the request. The Trade Desk may at times return back a partial list of Contracts. When this happens, the LastChangeTrackingVersion will be set to the correct value and you can immediately call this endpoint again with an update LastChangeTrackingVersion. |

### `Delta_ContractDeltaQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The platform ID of the advertiser for which to query available contracts. _(nullable)_ |
| LastChangeTrackingVersion | integer (int64) |  | The number of the previously changed tracking version that you want to receive.   To retrieve the latest tracking version number, set this value to `null`.   For details on usage, see the *FAQs* in [Platform Synchronization](/v3/portal/api/doc/PlatformSynchronization). _(nullable)_ |
| ReturnEntireContract | boolean |  | If true, will return a list of Contracts rather than a list of Contract Ids |

### `Delta_CreativeDelta`

| Field | Type | Required | Description |
|---|---|---|---|
| Creatives | array<`Creative_Creative`> |  | The list of Creatives that have changed since the specified LastChangeId. _(nullable)_ |
| ElementIds | array<string> |  | The list of IDs for the element type queried (Creative, AdGroup, Advertiser, etc.) _(nullable)_ |
| LastChangeTrackingVersion | integer (int64) |  | The current change tracking version. The client must store this value for future use. |
| MoreCreativesAvailable | boolean |  | Will be true if not all Creatives are returned with this call. Will only be true if ReturnEntireCreative is set in the request. The Trade Desk may at times return back a partial list of Creatives. When this happens, the LastChangeTrackingVersion will be set to the correct value and you can immediately call this endpoint again with an update LastChangeTrackingVersion. |

### `Delta_CreativeDeltaQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The platform ID of the advertiser that owns the creative. _(nullable)_ |
| LastChangeTrackingVersion | integer (int64) |  | The number of the previously changed tracking version that you want to receive.   To retrieve the latest tracking version number, set this value to `null`.   For details on usage, see the *FAQs* in [Platform Synchronization](/v3/portal/api/doc/PlatformSynchronization). _(nullable)_ |
| ReturnEntireCreative | boolean |  | If true, will return a list of Creatives rather than a list of Creative Ids |

### `Delta_FirstPartyDataAdvertiserDeltaQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser that owns the first-party data. |
| IncludeActiveIDsCountExpandedFlag | boolean |  | When set to true, the ActiveIDsCountExpanded field will be generated and included in the response, and otherwise it will be null |
| LastChangeTrackingVersion | integer (int64) |  | The number of the previously changed tracking version that you want to receive.   To retrieve the latest tracking version number, set this value to `null`.   For details on usage, see the *FAQs* in [Platform Synchronization](/v3/portal/api/doc/PlatformSynchronization). _(nullable)_ |

### `Delta_FirstPartyDataDelta`

| Field | Type | Required | Description |
|---|---|---|---|
| Data | array<`DMP_FirstPartyData`> |  | The list of First Party Data objects that have changed since the specified LastChangeId. _(nullable)_ |
| LastChangeTrackingVersion | integer (int64) |  | The current change tracking version. The client must store this value for future use. |

### `ActivityLog_ActivityLog`

| Field | Type | Required | Description |
|---|---|---|---|
| ActivityRollupTimeUtc | string (date-time) |  | Timestamp in UTC of the rollup window for this change.  Activity processing will aggregate the changes into 15 minute windows. |
| ActivityTimeUtc | string (date-time) |  | Timestamp in UTC of when the change occured in the system. |
| BidLineChanges | array<`ActivityLog_BidLineActivity`> |  | This is the detailed bid line list of changes. When HasBidListChanges is set to true and this property is null, the bid line changes cannot be retrieved. _(nullable)_ |
| Entity | string |  | Name of the system entity that changed.   For example: 'Site', 'Ad Group', 'Fold Placement' _(nullable)_ |
| HasBidListChanges | boolean |  | Indicates if this change is related to a bid list and there are changes to the underlying bid lines. |
| Id | integer (int64) |  | Unique activity log ID. |
| Message | string |  | Message describing the change. _(nullable)_ |
| ModifiedByUser | string |  | The name of the user account that triggered the change. _(nullable)_ |
| Note | string |  | A descriptive message of the reason for the change. _(maxLength 512)_ |
| OwnerAdGroupId | string |  | The platform ID of the ad group for which to retrieve logged activity data. _(nullable)_ |
| OwnerCampaignId | string |  | The platform ID of the campaign for which to retrieve logged activity data. _(nullable)_ |
| Source | `TheTradeDesk.AdPlatform.Shared.PlatformModels.Activity_ActivitySource` |  | Filter results to the source of where the change was made. See the enumerated list below for possible values. |

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

### `DimensionalBidding_BidListSummary`

| Field | Type | Required | Description |
|---|---|---|---|
| BidLinesCount | integer (int32) |  | The number of bid lines used with the resolution type to calculate the bid list adjustment. |
| BidListAdjustmentType | `DimensionalBidding_BidListAdjustmentType` |  | The method for determining how the bid adjustment is applied when an impression doesn't match a bid line. This type is set when a bid list is created and cannot be changed afterward.   If an impression matches multiple bid lists with different bid list adjustment types, the bid adjustments are multiplied together to get the final bid. For example, if an impression gets a bid adjustment of 0.75 from an optimized list and a bid adjustment of 0 from a block list, the final bid adjustment is 0.75*0=0. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |
| BidListDimensions | array<`DimensionalBidding_DimensionDescriptor`> |  | A list of dimensions belonging to the bid list, such as ad format, device type, and domain fragment. This property is read-only. _(nullable)_ |
| BidListId | string |  | The platform ID of the bid list. It is ignored during creation. |
| BidListOwner | `DimensionalBidding_BidListOwner` |  | The entity type that owns the bid list. For example, if the `BidListOwnerId` property is set to `AdGroupId`, the `BidListOwner` property should be set to `AdGroup`. When changing the owner of a bid list, the new owner must be an ancestor of the previous owner. For details, see [Bid List Relationships](/v3/portal/api/doc/BidList#bidlistrelationships). |
| BidListOwnerId | string |  | The ID of the entity (partner, campaign, advertiser, ad group) that owns the bid list. Ownership determines access to the bid list and governs its inheritance and association rules.   **IMPORTANT**: There is a limit to the number of bid lines owned by or associated with each ad group, advertiser, or partner. For details, see [Bid Lists](/v3/portal/api/doc/BidList). _(nullable)_ |
| BidListSource | `DimensionalBidding_BidListSource` |  | The type of bid list. Read-only field. |
| IsAvailableForLibraryUse | boolean |  | If set to `true`, bid lists appear in the platform UI as a reusable library list for the bid list owner and its descendants. This setting applies to target and block lists that contain a single dimension of either domain fragment or geo segment ID.   The default value is `false`, indicating that the bid list is not displayed in the library. Since ad groups have no descendants, setting this property to `true` for a bid list owned by an ad group results in a 400 error.    **NOTE**: When owned at the partner or advertiser level, bid lists with the domain fragment dimension are available within the partner or advertiser site/app inventory library. Similarly, bid lists with the geo segment ID dimension are available in the partner or advertiser locations library. For example, an advertiser-owned bid list with `HasGeoSegmentId` and `IsAvailableForLibraryUse` properties set to `true` is displayed as a library list for a related ad group in the Geography rail tile as a library list and in the advertiser's locations library. |
| IsDeleted | boolean |  | If set to `true`, indicates the bid list is deleted.   The default value is `false`. |
| IsGlobal | boolean |  | If set to `true`, indicates that the bid list can be applied to any entity.   The default value is `false`.   **NOTE**: The Trade Desk supports global bid lists, like our global block list, but they are managed by our marketplace quality team and not by entities in the advertising campaign. To see available global lists that you can associate, use [POST /bidlistsummary/query/global](/v3/portal/api/ref/post-bidlistsummary-query-global). |
| Name | string |  | A name to describe the bid list. Bid list names typically describe the dimension and adjustment type, such as "Site/App Target List". The maximum character length is 512. _(nullable)_ |
| ResolutionType | `DimensionalBidding_MultipleMatchResolutionType` |  | The method for determining how the bid adjustment is applied when an impression matches multiple bid lines in a bid list. We recommend using `ApplyMultiplyAdjustment` for all bid lists. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |

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

### `Contract_Contract`

| Field | Type | Required | Description |
|---|---|---|---|
| ApprovalState | `Contract_ContractApprovalState` |  | The approval state of the Contract, as documented in the ContractApprovalState enumeration. This is a read-only property.    Contracts start out as Approved by default unless they have certain attributes set to a value that needs approval from The Trade Desk. |
| Availability | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability` |  | Availability state of the Contract. |
| ContractId | string |  | The ID of the Contract.  Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| ContractTerms | `Contract_ContractTerms` |  | The terms negotiated with the publisher for the contract. _(nullable)_ |
| ContractType | `Contract_ContractType` |  | The ContractType as documented in the ContractType enumeration. If not specified on create, the Contract is created with a default   value of ContractType.SupplyVendor. |
| CurrencyCode | `TheTradeDesk_CurrencyCode` |  | The currency of the Contract. All money values associated with the Contract must be in this currency.   Once a Contract has been created, this may not be changed.   If not specified on create, the Contract uses the currency of the owning Partner. |
| CustomLabels | array<`CustomLabel_AssignedCustomLabel`> |  | Custom Labels assigned to this contract. |
| Deals | array<`Contract_SupplyVendorDeal`> |  | The list of supply vendor deals that run under the Contract. _(nullable)_ |
| DeliveryPriorities | array<`Contract_DeliveryPriority`> |  | A list of delivery priorities to associate with the deal. Currently restricted to a singleton. |
| Description | string |  | An optional description for the Contract. _(nullable)_ |
| EndDateUTC | string (date-time) |  | The date and time (in UTC) until which the Contract is expected to be effective. If no end date is specified, the Contract is open ended. If specified, the end date must be after the start date. _(nullable)_ |
| IsLiveEvent | boolean |  | If set to `true`, indicates that the contract is running only on live sports and events inventory. The default value is `false`. |
| IsUpfront | boolean |  | If set to true, indicates that the contract is part of an upfront agreement, with ad time purchased in advance for better   rates and guaranteed spots. When including this property in your request, you must specify its value. _(nullable)_ |
| Name | string |  | The Name of the Contract. _(maxLength 256)_ |
| OwnerPartnerId | string |  | The ID of the partner that owns the Contract.    Partners are always allowed to buy against contracts they own. Also, contracts may only be modified by users associated with owning partners.   If the supplied OwnerPartnerId is not a valid PartnerId in The Trade Desk system, the request is rejected with a 400 error. |
| Permissions | `Contract_ContractPermissions` |  | The permissions granted/denied to Partners and Advertisers for this Contract. |
| StartDateUTC | string (date-time) |  | The date and time (in UTC) from which the Contract is expected to be effective. A start date must be specified at the time the Contract is created. _(nullable)_ |
| IsClassicGuaranteed | boolean |  | If true, it represents a programmatic guaranteed contract created in the Classic workflow, and so is only targetable by Classic PG ad groups (conversely, if false, it can be targetable by Megagon PG ad groups).    This property can only be set during contract creation, and only affects Programmatic Guaranteed contracts.  It defaults to true. _(DEPRECATED; deprecation: This property will be deprecated in the near future.)_ |

### `Creative_Creative`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The platform ID of the advertiser that owns this creative. |
| Availability | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability` |  | Indicates whether the Creative is Available for use or Archived and hidden from views.   On create, this value may not be set to Archived.   Note that setting a Creative to Archived will have the side effect of removing all associations the Creative might have with AdGroups.  Resetting the value back to Available once it has been archived will not re-institute those associations. |
| CreatedAtUTC | string (date-time) |  | The time in UTC the Creative was created.   This field is read-only. _(nullable)_ |
| CreativeAuditStatuses | array<`Creative_CreativeAuditStatus`> |  | A List of Creative Audit Statuses for the Creative.  This is a read-only property returned by the API. _(nullable)_ |
| CreativeId | string |  | The ID of the creative. Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| CreativeName | string |  | The name of the creative. Here's what you need to know about this property:   - The value must not contain any of the following special characters: &lt;&gt;;^\r\n   - The maximum character length is 256. _(maxLength 256)_ |
| CreativeType | `Creative_CreativeType` |  | The type of the creative.   This is a read-only attribute returned by the API. |
| Description | string |  | An optional description of the creative. The maximum character length is 512. _(maxLength 512)_ |
| DynamicCreativeRuleId | string |  | A `DynamicCreativeRuleId` to link to this creative.   Look up dynamic creative rules with the [POST /dynamiccreativerule/query/advertiser](/v3/portal/api/ref/post-dynamiccreativerule-query-advertiser) endpoint. _(nullable)_ |
| FlightEndDateUTC | string (date-time) |  | The Flight End Date and Time in UTC (without the time zone) for the creative. _(nullable)_ |
| FlightStartDateUTC | string (date-time) |  | The Flight Start Date and Time in UTC (without the time zone) for the creative. _(nullable)_ |
| HostedNativeAttributes | `Creative_CreativeHostedNativeAttributes` |  | This property should only be specified when this is a native creative   Exactly one creative attributes property must be specified on any given creative. The type of creative may not be changed after creation. _(nullable)_ |
| Html5Attributes | `Creative_CreativeHostedHtml5Attributes` |  | This property should only be specified when this is a hosted HTML5 creative.    Exactly one creative attributes property must be specified on any given creative. The type of creative may not be changed after creation.   See also [HTML5 Creative Specifications](https://desk.thetradedesk.com/knowledge-portal/en/creatives-specs-html5.html). _(nullable)_ |
| ImageAttributes | `Creative_CreativeImageAttributes` |  | This property should only be specified when this is an image creative.   Exactly one creative attributes property must be specified on any given creative. The type of creative may not be changed after creation. _(nullable)_ |
| LastUpdatedAtUTC | string (date-time) |  | The time in UTC the Creative was last updated.   This field is read-only. _(nullable)_ |
| PoliticalDataId | string |  | The political data ID from a candidate profile of an advertiser. To retrieve this ID, use the [GET /advertiser/{advertiserId}](/v3/portal/api/ref/get-advertiser-advertiserid) endpoint. For details, see [Political Advertising](/v3/portal/api/doc/PoliticalAdvertising).    **IMPORTANT**: Required only for political advertising creatives for federal, state, or local candidate elections. _(nullable)_ |
| ShareLink | string |  | Share link to allow anyone to preview this creative. This only applies to creatives that are tags, videos, audios, hosted native, hosted native videos.   This is a read-only property returned by the API. _(nullable)_ |
| ThirdPartyHostedAudioAttributes | `Creative_CreativeThirdPartyAudioAttributes` |  | This property should only be specified when this is a 3rd party hosted audio creative.   Exactly one creative attributes property must be specified on any given creative. The type of creative may not be changed after creation. _(nullable)_ |
| ThirdPartyHostedVideoAttributes | `Creative_CreativeThirdPartyVideoAttributes` |  | This property should only be specified when this is a 3rd party hosted video creative.   Exactly one creative attributes property must be specified on any given creative. The type of creative may not be changed after creation. _(nullable)_ |
| ThirdPartyTagAttributes | `Creative_CreativeThirdPartyTagAttributes` |  | This property should only be specified when this is a creative served through a Third Party HTML Tag.   Exactly one creative attributes property must be specified on any given creative. The type of creative may not be changed after creation. _(nullable)_ |
| TradeDeskHostedAudioAttributes | `Creative_CreativeHostedAudioAttributes` |  | This property should only be specified when this is a Trade Desk hosted audio creative.   Exactly one creative attributes property must be specified on any given creative. The type of creative may not be changed after creation. _(nullable)_ |
| TradeDeskHostedVideoAttributes | `Creative_CreativeHostedVideoAttributes` |  | This property should only be specified when this is a Trade Desk hosted video creative.   Exactly one creative attributes property must be specified on any given creative. The type of creative may not be changed after creation. _(nullable)_ |
| VioohSelectedPublisher | string |  | The external ID of the targeted publisher, which is the seller ID in VIOOH's sellers.json file.   When set on hosted display or hosted video creatives, the creative is submitted for VIOOH approval and routed to this publisher. _(nullable)_ |
| WillThisBeServedInChina | boolean |  | A flag to indicate this creative will served in china or not.   This only work when the partner has MSA signed.   Once it is set to true, we don't allow to set it to false, so passing WillThisBeServedInChina with false will not have any effect. |
| FlashAttributes | `Creative_CreativeFlashAttributes` |  | DEPRECATED - Flash creatives are no longer supported. Creation and updates will be rejected with a BadRequest error.   This property is only supported when retrieving existing Flash creatives and will be removed in future versions. _(nullable; DEPRECATED; deprecation: Flash creatives are no longer supported. This property is only supported when retrieving existing Flash creatives (and will be removed in future versions); when creating/updating creatives, values supplied to this property will result in a BadRequest error.)_ |
| VioohReviewRequired | boolean |  | If set to `true`, indicates that this creative requires approval by VIOOH. Otherwise, the default value is `false`.   Prefer setting `VioohSelectedPublisher`, which implicitly requests VIOOH review. This property is retained for backward compatibility. _(DEPRECATED; deprecation: This field is deprecated and the input will be picked up by whether VioohSelectedPublisher is set.)_ |

### `DMP_FirstPartyData`

| Field | Type | Required | Description |
|---|---|---|---|
| ActiveHouseholdCount | integer (int64) |  | The number of households within this data element based on our Active IDs counting methodology. For details about our counting methodologies, see [Unique ID Counting Methodologies](/v3/portal/api/doc/IdCountingMethodologies). |
| ActiveIDsConnectedTvCount | integer (int64) |  | The number of connected TV devices and browsers within this data element based on our Active IDs counting methodology. For details about our counting methodologies, see [Unique ID Counting Methodologies](/v3/portal/api/doc/IdCountingMethodologies). |
| ActiveIDsCount | integer (int64) |  | The number of devices and browsers within this data element based on our Active IDs counting methodology. For details about our counting methodologies, see [Unique ID Counting Methodologies](/v3/portal/api/doc/IdCountingMethodologies). |
| ActiveIDsCountExpanded | boolean |  | Whether cross-device has been used to expand the Active IDs count. Segments with UID2s show expanded reach through cross-device. For details about our counting methodologies, see [Unique ID Counting Methodologies](/v3/portal/api/doc/IdCountingMethodologies). _(nullable)_ |
| ActiveIDsInAppCount | integer (int64) |  | The number of in-app devices and browsers within this data element based on our Active IDs counting methodology. For details about our counting methodologies, see [Unique ID Counting Methodologies](/v3/portal/api/doc/IdCountingMethodologies). |
| ActiveIDsWebCount | integer (int64) |  | The number of web devices and browsers within this data element based on our Active IDs counting methodology. For details about our counting methodologies, see [Unique ID Counting Methodologies](/v3/portal/api/doc/IdCountingMethodologies). |
| ActivePersonsCount | integer (int64) |  | The number of persons within this data element based on our Active IDs counting methodology. For details about our counting methodologies, see [Unique ID Counting Methodologies](/v3/portal/api/doc/IdCountingMethodologies). |
| DataType | `DMP_FirstPartyDataType` |  | The ID of the type of the first-party data |
| FirstPartyDataId | integer (int64) |  | The ID of the first-party data. |
| LookAlikeModelDetails | `DMP_LookAlikeModelDetails` |  | The Look-Alike Model details if a Look-Alike Model exists for the first-party data. _(nullable)_ |
| LookAlikeModelEligibility | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Eligibility` |  | Indicates whether the First party data may be used for Look-Alike Modeling.   Refer to LookAlikeModelingAvailability enum section for possible values and descriptions.   Refer to dmp/lookalikemodel/build/{firstpartydataid} and related sections for a description of Look-Alike Modeling. |
| Name | string |  | The name of the first-party data. _(nullable)_ |
| ReceivedIDsCount | integer (int64) |  | The number of unique devices and browsers within this data element in the past 30 days, as counted by our Received IDs methodology. For details about our counting methodologies, see [Unique ID Counting Methodologies](/v3/portal/api/doc/IdCountingMethodologies). |
| DevicesBrowsers30DayCount | integer (int64) |  | The number of devices and browsers within this data element based on our Received IDs counting methodology. Learn more about our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. _(DEPRECATED; deprecation: This property returns the same count as 'ReceivedIDsCount'. Please use 'ReceivedIDsCount' instead. Check our Release Notes page for upgrade timeline updates.)_ |
| HouseholdCount | integer (int64) |  | The number of households within this data element based on our Active IDs counting methodology. Learn more about our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. _(DEPRECATED; deprecation: This property returns the same count as 'ActiveHouseholdCount'. Please use 'ActiveHouseholdCount' instead. Check our Release Notes page for upgrade timeline updates.)_ |
| ImportedAudienceCount | integer (int64) |  | Counts for how many times this audience has been seen. _(nullable; DEPRECATED; deprecation: This property is no longer supported and will eventually be removed. Please use either 'ActiveIdsCount' or 'ReceivedIDsCount' to gauge the size of your audience.)_ |
| PersonsCount | integer (int64) |  | The number of persons within this data element based on our Active IDs counting methodology. Learn more about our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. _(DEPRECATED; deprecation: This property returns the same count as 'ActivePersonsCount'. Please use 'ActivePersonsCount' instead. Check our Release Notes page for upgrade timeline updates.)_ |
| UniqueConnectedTvCount | integer (int64) |  | The number of connected TV devices and browsers within this data element based on our Active IDs counting methodology. Learn more about our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. _(DEPRECATED; deprecation: This property returns the same count as 'ActiveIDsConnectedTvCount'. Please use 'ActiveIDsConnectedTvCount' instead. Check our Release Notes page for upgrade timeline updates.)_ |
| UniqueUserCount | integer (int64) |  | The number of devices and browsers within this data element based on our Active IDs counting methodology. Learn more about our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. _(DEPRECATED; deprecation: This property returns the same count as 'ActiveIDsCount'. Please use 'ActiveIDsCount' instead. Check our Release Notes page for upgrade timeline updates.)_ |
| UniqueUserInAppCount | integer (int64) |  | The number of in-app devices and browsers within this data element based on our Active IDs counting methodology. Learn more about our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. _(DEPRECATED; deprecation: This property returns the same count as 'ActiveIDsInAppCount'. Please use 'ActiveIDsInAppCount' instead. Check our Release Notes page for upgrade timeline updates.)_ |
| UniqueUserWebCount | integer (int64) |  | The number of web devices and browsers within this data element based on our Active IDs counting methodology. Learn more about our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. _(DEPRECATED; deprecation: This property returns the same count as 'ActiveIDsWebCount'. Please use 'ActiveIDsWebCount' instead. Check our Release Notes page for upgrade timeline updates.)_ |

### `ActivityLog_BidLineActivity`

| Field | Type | Required | Description |
|---|---|---|---|
| BidDimensionId | integer (int64) |  | The bid dimension ID. |
| BidDimensionType | string |  | The bid dimension type. For example, `Site` or `SSP / Audience / Contract Name / Ad Format`.   **NOTE**: The bid dimension value is specified in the `Name` property. _(nullable)_ |
| ChangeTimeUtc | string (date-time) |  | The UTC timestamp of the change that took place in the system. |
| Id | integer (int64) |  | The ID of the bid line for which the change was made. |
| Name | string |  | The bid dimension value. For example, `cnn.com` for the `Site` dimension, or `PlaceExchange / 908c1a27-1aa5-4855-9a17-aecbedb17cf6 / PX-Lightbox_ALTD_DOOH_DOOH_Retail__6 / Video (9:16)` for the `SSP / Audience / Contract Name / Ad Format` dimension.   **NOTE**: The dimension type, such as `Site` or `SSP / Audience / Contract Name / Ad Format`, is specified in the `BidDimensionType` property. _(nullable)_ |
| Op | string |  | The operation for the bid line change. Possible values include the following:    `I` - Inserted    `U` - Updated    `D` - Deleted    `Optimized` _(nullable)_ |
| ValueFrom | string |  | The original bid factor value. For insert operations this property is set either to `null` or `0`. _(nullable)_ |
| ValueTo | string |  | The new bid factor value.  For delete operations this property is set either to `null` or `0`. _(nullable)_ |
| VolumeControlValueFrom | string |  | The original volume control value. For insert operations this property is set either to `null` or `0`. _(nullable)_ |
| VolumeControlValueTo | string |  | The new volume control value.  For delete operations this property is set either to `null` or `0`. _(nullable)_ |

### `TheTradeDesk.AdPlatform.Shared.PlatformModels.Activity_ActivitySource`

Type: string enum(Ui, Api, Other, Unknown)

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

### `DimensionalBidding_DefaultBidList`

| Field | Type | Required | Description |
|---|---|---|---|
| BidListId | string |  | The platform ID of the bid list. |

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

### `DimensionalBidding_BidListAdjustmentType`

Type: string enum(BlockList, TargetList, Optimized)

### `DimensionalBidding_BidListOwner`

Type: string enum(AdGroup, Campaign, Advertiser, Partner, Global)

### `DimensionalBidding_BidListSource`

Type: string enum(User, ManualRecommendation, AutoAppliedRecommendation, UserBulkEdit)

### `DimensionalBidding_DimensionDescriptor`

Type: string enum(UnknownDimension, HasAdFormatId, HasDomainFragmentId, HasUniversalCategoryTaxonomyId, HasAdvertiserTargetingDataId, HasBrowserId, HasCarrierId, HasDeviceModelId, HasDeviceTypeId, HasGeoSegmentId, HasHourOfWeek, HasLanguageId, HasOsId, HasPrivateContractId, HasRecencyWindowInMinutes, HasRenderingContextId, HasFactualGeostoreTargetingDataId, HasSupplyVendorId, HasTemperatureBucketInCelsius, HasThirdPartyData, HasAdsTxtSellerTypeId, HasVideoMutedStateId, HasVideoPlaybackTypeId, HasVideoPlayerSizeId, HasVideoQualityId, HasVideoSkippabilityId, HasFactualProximityDataId, HasImpressionPlacementId, HasVideoTruthScoreRange, HasVideoViewabilityScoreRange, HasDisplayViewabilityScoreRange, HasPeer39LanguageId, HasIntegralContextualCategoryId, HasPeer39ContextualCategoryId, HasDoubleVerifyContextualCategoryId, HasIntegralBrandSafetyCategoryId, HasIntegralVideoBrandSafetyCategoryId, HasPeer39BrandSafetyCategoryId, HasDoubleVerifyBrandSafetyCategoryId, HasIntegralPageQualityCategoryId, HasIntegralVideoPageQualityCategoryId, HasPeer39PageQualityCategoryId, HasDoubleVerifyBotAvoidanceCategoryId, HasContextualAppCategoryId, HasPublisherId, HasIntegralViewabilityCategoryId, HasIntegralVideoViewabilityCategoryId, HasDoubleVerifyViewabilityCategoryId, HasDoubleVerifyVideoViewabilityCategoryId, HasFrequencyAdjustmentId, HasPeer39ViewabilityCategoryId, HasVideoCompletionRateScoreRange, HasInternetConnectionTypeId, HasRTBAsiaPageQualityCategoryId, HasRTBAsiaVideoPageQualityCategoryId, HasTTDContextualCategoryId, HasSupplyPathOptimizationListId, HasMarketTypeId, HasContextualSupplyVendorGenreId, HasContextualSupplyVendorCategoryId, HasWeatherConditionId, HasFrequencyV2AdjustmentId, HasSemasioContextualCategoryId, HasSellerId, HasDigitalOutOfHomeVenueTypeId, HasNativePlacementTypeId, HasTTDNativeContextTypeId, HasDomainClassId, HasGeofenceThirdPartyDataAndBrand, HasPreBidContextualCategoryId, HasTencentPageQualityCategoryId, HasContentGenre, HasContentLivestream, HasContentProductionQuality, HasContentRating, HasContentDuration, HasTVQualityIndexRange, HasAtmosphericCondition, HasMarketplaceId, HasAudienceReachPercentageTierId, HasAdLoadCategory, HasFullReferrerUrl, HasLikelyRefreshRate, HasContentTransparency, HasIdiosyncraticSegmentId, HasRewarded, HasSellerRelationshipTypeId, HasAdToContentRatioRange, HasAdsInViewRange, HasExtendedZipCodeGroupSegmentThirdPartyDataId, HasContentLanguage)

### `DimensionalBidding_MultipleMatchResolutionType`

Type: string enum(SingleMatchOnly, ApplyMinimumAdjustment, ApplyAverageAdjustment, ApplyMaximumAdjustment, ApplyMultiplyAdjustment)

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

### `CustomROAS_CustomROASType`

Type: string enum(Disabled, PixelWeighting, ClickViewthroughWeighting, CompositeWeighting)

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

### `Contract_ContractApprovalState`

Type: string enum(PendingApproval, NotApproved, Approved, Archived)

### `Contract_ContractPermissions`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserIdsAllowedToBuy | array<string> |  | The Advertiser IDs that are explicitly allowed to buy against this Contract.   If an Advertiser's Partner ID is already in the PartnerIdsAllowedToBuy list, it is not necessary to include the Advertiser ID in this list as it is allowed to buy by default in this case.   An Advertiser ID cannot exist in both this list and the AdvertiserIdsForbiddenToBuy list. If an Advertiser ID is specified in both of these lists, the request will be rejected with a 400 error. _(nullable)_ |
| AdvertiserIdsForbiddenToBuy | array<string> |  | The Advertiser IDs that are explicitly forbidden to buy against this Contract.   If an Advertiser's Partner ID is not in the PartnerIdsAllowedToBuy list, it is not necessary to include the Advertiser ID in this list as it is forbidden to buy by default in this case.   An Advertiser ID cannot exist in both this list and the AdvertiserIdsAllowedToBuy list. If an Advertiser ID is specified in both of these lists, the request will be rejected with a 400 error. _(nullable)_ |
| PartnerIdsAllowedToBuy | array<string> |  | The Partner IDs for whom advertisers are by default allowed to buy against the Contract.   Any Advertisers with IDs in the AdvertiserIdsForbiddenToBuy list are always forbidden to buy against this Contract, even if their Partner's ID is in this list. _(nullable)_ |

### `Contract_ContractTerms`

Describes the terms negotiated with the publisher for the contract

| Field | Type | Required | Description |
|---|---|---|---|
| LifetimeMediaCost | number (double) |  | Media cost is the full amount (in the contract's currency) negotiated to spend with the publisher for the lifetime of the contract.     This property is required for all non-Classic Programmatic Guaranteed contracts, and optional for all others. |

### `Contract_ContractType`

Type: string enum(SupplyVendor, ProgrammaticGuaranteed, PublisherDirect)

### `Contract_DeliveryPriority`

| Field | Type | Required | Description |
|---|---|---|---|
| DeliveryProfileId | string |  | The ID of the delivery profile to be associated with this contract |
| DeliveryPriorityId | string |  | The ID of the DeliveryPriority.  Ignored on create, when an ID will be assigned and returned by The Trade Desk. _(DEPRECATED; deprecation: This attribute is deprecated. Its value should not be used.)_ |

### `Contract_SupplyVendorDeal`

| Field | Type | Required | Description |
|---|---|---|---|
| FloorPriceCPM | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | An optional floor price for the deal.   The value is in CPM in the currency of the Contract to which this deal is associated. _(nullable)_ |
| SupplyVendorDealId | string |  | The ID of the deal.   This ID should match the ID in the SupplyVendor or Publisher system. |
| SupplyVendorId | integer (int64) |  | The ID of the SupplyVendor on which this deal will run.   Not all SupplyVendors support running Deals through The Trade Desk. Query supplyvendor/query/partner to discover the Supply Vendors that support Deals |

### `Creative_CreativeAuditStatus`

| Field | Type | Required | Description |
|---|---|---|---|
| AuditStatus | string |  | Returns a read-only value for the status of the creative audit. Possible values include:    approved    limited    not audited    not submitted for approval    pending    rejected    status not provided    unauditable   f there is a specific reason for the status, it appears in the `ReasonForStatus` field. _(nullable)_ |
| CreativeAuditor | `Creative_CreativeAuditor` |  | The Id of the Creative auditor.  This is a read-only value returned by the API. |
| ReasonForStatus | string |  | The reason (if any) for the status.  This is a read-only value returned by the API. _(nullable)_ |

### `Creative_CreativeFlashAttributes`

| Field | Type | Required | Description |
|---|---|---|---|
| AdServerCreativeId | string |  | If the ad tag contains a known ad server URL, this will return the identifier of the creative used by the ad server.   You may explicitly set this value if you wish to override auto-detection. If you later write the AdTag property in an update (even if it doesn't change), you must explicitly specify this or auto-detection will replace it. _(nullable)_ |
| AdServerName | string |  | If the ad tag contains a known ad server URL, this will return the name of the ad server. Examples are 'MediaMind' or 'DoubleClick'.   You may explicitly set this value if you wish to override auto-detection. If you later write the AdTag property in an update (even if it doesn't change), you must explicitly specify this or auto-detection will replace it. _(nullable)_ |
| AdTechnologyIds | array<string> |  | This is a declaration of vendor technologies used for click or impression tracking within this creative. These values will be populated by Google when creatives are approved for serving on their exchange.   This used to be a read/write property, it is now read-only.   See the Ad Technology API to get a complete list of possible values. |
| ClickthroughUrl | string |  | The URL to invoke when the user clicks the ad. This may include additional click tracking. Typically, the user is redirected to the landing page after this URL is invoked.   **IMPORTANT**: The click-through URL string must not exceed 5000 characters.   A click-through URL is required on create (not null), if no click-through substitute is present. If specified in an update request, the value will overwrite any substitutes. _(maxLength 5000)_ |
| FlashClickTrackingParameterName | string |  | The click tracking parameter used in the flash file. Here's what you need to know about this property:   - This value is usually a `clickTAG` parameter or another variant.   - This property is case-sensitive. For example, `clickTAG` is different from `ClickTAG` or `clickTag`.    - The maximum character length is 32.   - To test if the value is set correctly, upload the file and try clicking through the creative. If you cannot click through successfully, this value may not have been set correctly.   - If you do not know what the correct parameter name is and none of the standard variants work, contact your creative team. _(maxLength 32)_ |
| FlashContent | string |  | The contents of the Flash file (.swf) as a base-64 encoded string. The API will automatically detect the format and the size of the media.   See the Ad Format API for a full list of supported sizes. If the format or size is not supported by The Trade Desk, the request will be rejected.   This property is only used on create and will not be returned by the API. |
| FlashUrl | string |  | The URL where The Trade Desk has stored the Flash file for ad serving. This is a read-only property returned by the API. _(nullable)_ |
| Height | integer (int32) |  | The height of the creative in pixels. This is a read-only property returned by the API. |
| IsSecurable | boolean |  | If set to `true` (default value on create), indicates that all the resources that are needed to render and track this creative support access over HTTPS (secure) versions of their URIs.   If set to `false`, no attempts will be made to serve this creative in secure contexts.   Here's what you need to know:   - If set to `true` and there is an opportunity to serve the creative in a secure context, we will make it secure by replacing `http` with `https` before serving it.    - Secure creatives can still be served in unsecure contexts.   - Creatives that can be served only via the HTTP (unsecure) protocol provide a poor experience for users on secure pages. Be sure to categorize your creatives correctly so that we can avoid showing unsecure creatives on secure pages. Otherwise, we may automatically disable them, or supply vendors may blocklist them. |
| LandingPageUrl | string |  | The landing page URL is the URL of the page where the user is taken after clicking the ad.   Must be in the form of http(s)://&lt;url&gt; |
| RightMediaOfferTypeId | integer (int64) |  | Set the Right Media Offer Type (Right Media's creative category) of this creative. If null or not specified, the Advertiser's DefaultRightMediaOfferTypeId will be used for this creative until a RightMediaOfferTypeId is assigned.   If neither the Advertiser nor the Creative have an assigned Right Media Offer Type, the creative cannot buy Right Media inventory.   See the Right Media Offer Type API for a full list of possible values. _(nullable)_ |
| ThirdPartyImpressionTrackingUrl | string |  | A pixel URL used to track impressions with third party ad servers. The maximum character length is 500. _(maxLength 500)_ |
| ThirdPartyImpressionTrackingUrl2 | string |  | A second pixel URL used to track impressions with third party ad servers. The maximum character length is 500. _(maxLength 500)_ |
| ThirdPartyImpressionTrackingUrl3 | string |  | A third pixel URL used to track impressions with third party ad servers. The maximum character length is 500. _(maxLength 500)_ |
| ThirdPartyTrackingTags | array<string> |  | A list of &lt;img&gt; or &lt;script&gt; HTML tags used to track impressions with third-party ad servers. If a given tag is a script tag, it may also contain a subsequent &lt;noscript&gt; tag.   **IMPORTANT**: Do not use HTML third-party tracking tags for creating and editing video and audio creatives because video and audio players ignore them. Upon serving a video or an audio creative, any specified HTML-style third-party tracking tags will not be included in the VAST and will not fire as expected. This may also result in unexpected discrepancies between The Trade Desk reports and reports generated by the third party.   If you wish to specify a raw tracking URL, use a `ThirdPartyImpressionTrackingUrl` parameter instead. A maximum of three tags is supported.     **IMPORTANT**: For the creative to be securable, every tag must be securable, too. _(nullable)_ |
| Width | integer (int32) |  | The width of the creative in pixels. This is a read-only property returned by the API. |

### `Creative_CreativeHostedAudioAttributes`

| Field | Type | Required | Description |
|---|---|---|---|
| AdServerCreativeId | string |  | If the ad tag contains a known ad server URL, this will return the identifier of the creative used by the ad server.   You may explicitly set this value if you wish to override auto-detection. If you later write the AdTag property in an update (even if it doesn't change), you must explicitly specify this or auto-detection will replace it. _(nullable)_ |
| AdServerName | string |  | If the ad tag contains a known ad server URL, this will return the name of the ad server. Examples are 'MediaMind' or 'DoubleClick'.   You may explicitly set this value if you wish to override auto-detection. If you later write the AdTag property in an update (even if it doesn't change), you must explicitly specify this or auto-detection will replace it. _(nullable)_ |
| AudioEncodingComplete | boolean |  | Whether or not encoding of the audio file is completed.   This is a read-only property returned by the API. |
| AudioUploadAttributes | `Creative_AudioUploadAttributes` |  | The properties describing the uploaded audio file.     This would generally be the AudioUploadAttributes property that was received by calling creative/generateuploadurlforaudiocreative.   The file should have been uploaded using the AudioUploadUrl attribute from the creative/generateuploadurlforaudiocreative call before calling POST creative.   This property is only used on create and will not be returned by the API. |
| ClickthroughUrl | string |  | The URL to invoke when the user clicks the ad. This may include additional click tracking. Typically, the user is redirected to the landing page after this URL is invoked.   **IMPORTANT**: The click-through URL string must not exceed 5000 characters.   A click-through URL is required on create (not null), if no click-through substitute is present. If specified in an update request, the value will overwrite any substitutes. _(maxLength 5000)_ |
| CompanionCreativeIds | array<string> |  | The CreativeIds of the display creatives that can be used as companion display ads to this audio impression.   Companion ads are display ads that are served alongside audio ads. When there is a request for an audio impression, we check to see if there is one or more corresponding companion creatives for the audio creative and submit them along with the bid.    The publisher can supply any AdFormat for use as a companion. They will consider any/all of the companions that you provide. There is no priority to which one will be used. |
| DaastTagUrl | string |  | The URL of the DAAST XML document for this audio creative.   This is a read-only property returned by the API. |
| Duration | integer (int32) |  | The length of the audio in seconds.   This is a read-only property returned by the API. |
| IsPlayerRetargetingEnabled | boolean |  | Whether or not this creative has player event retargeting enabled in DMP |
| LandingPageUrl | string |  | The landing page URL is the URL of the page where the user is taken after clicking the ad.   Must be in the form of http(s)://&lt;url&gt; |
| ThirdPartyTrackingTags | array<string> |  | A list of &lt;img&gt; or &lt;script&gt; HTML tags used to track impressions with third-party ad servers. If a given tag is a script tag, it may also contain a subsequent &lt;noscript&gt; tag.   **IMPORTANT**: Do not use HTML third-party tracking tags for creating and editing video and audio creatives because video and audio players ignore them. Upon serving a video or an audio creative, any specified HTML-style third-party tracking tags will not be included in the VAST and will not fire as expected. This may also result in unexpected discrepancies between The Trade Desk reports and reports generated by the third party.   If you wish to specify a raw tracking URL, use a `ThirdPartyImpressionTrackingUrl` parameter instead. A maximum of three tags is supported.     **IMPORTANT**: For the creative to be securable, every tag must be securable, too. _(nullable)_ |
| TrackingEvents | array<`Audio_AudioTrackingEvent`> |  | A list of events that you want to be notified about when an audio impression plays, is clicked, or is heard across different quartile boundaries |
| VastTagUrl | string |  | The URL of the VAST XML document for this audio creative.   This is a read-only property returned by the API. |
| IsSecurable | boolean |  | If set to `true` (default value on create), indicates that all the resources that are needed to render and track this creative support access over HTTPS (secure) versions of their URIs.   If set to `false`, no attempts will be made to serve this creative in secure contexts.   Here's what you need to know:   - If set to `true` and there is an opportunity to serve the creative in a secure context, we will make it secure by replacing `http` with `https` before serving it.    - Secure creatives can still be served in unsecure contexts.   - Creatives that can be served only via the HTTP (unsecure) protocol provide a poor experience for users on secure pages. Be sure to categorize your creatives correctly so that we can avoid showing unsecure creatives on secure pages. Otherwise, we may automatically disable them, or supply vendors may blocklist them. _(DEPRECATED; deprecation: This attribute is deprecated as we move all TTD hosted creatives to be secure.)_ |

### `Creative_CreativeHostedHtml5Attributes`

| Field | Type | Required | Description |
|---|---|---|---|
| AdServerCreativeId | string |  | If the ad tag contains a known ad server URL, this will return the identifier of the creative used by the ad server.   You may explicitly set this value if you wish to override auto-detection. If you later write the AdTag property in an update (even if it doesn't change), you must explicitly specify this or auto-detection will replace it. _(nullable)_ |
| AdServerName | string |  | If the ad tag contains a known ad server URL, this will return the name of the ad server. Examples are 'MediaMind' or 'DoubleClick'.   You may explicitly set this value if you wish to override auto-detection. If you later write the AdTag property in an update (even if it doesn't change), you must explicitly specify this or auto-detection will replace it. _(nullable)_ |
| AdTechnologyIds | array<string> |  | This is a declaration of vendor technologies used for click or impression tracking within this creative. These values will be populated by Google when creatives are approved for serving on their exchange.   This used to be a read/write property, it is now read-only.   See the Ad Technology API to get a complete list of possible values. |
| BackupImageContent | string |  | The contents of the backup image as a base-64 encoded string. The API will automatically detect the format and the size of the image.  The size of the this image (if provided) must match the Width and Height properties.   The image may be a GIF, JPEG, or PNG. See the Ad Format API for a full list of supported sizes. If the format or size is not supported by The Trade Desk, the request will be rejected.   This property is only used on create and will not be returned by the API. This property may not be specified on update; if it is, the request will be rejected. _(nullable)_ |
| BackupImageUrl | string |  | The URL where The Trade Desk has stored the backup image file for ad serving, if it exists. This is a read-only property returned by the API. _(nullable)_ |
| ClickthroughUrl | string |  | The URL to invoke when the user clicks the ad. This may include additional click tracking. Typically, the user is redirected to the landing page after this URL is invoked.   **IMPORTANT**: The click-through URL string must not exceed 5000 characters.   A click-through URL is required on create (not null), if no click-through substitute is present. If specified in an update request, the value will overwrite any substitutes. _(maxLength 5000)_ |
| ClickTrackingParameterName | string |  | The click tracking parameter used in the HTML file. Here's what you need to know about this property:   - This value is usually a `clickTAG` parameter or another variant.   - This property is case-sensitive. For example, `clickTAG` is different from `ClickTAG` or `clickTag`.   - The maximum character length is 32.   - To test if the value is set correctly, upload the file and try clicking through the creative. If you cannot click through successfully, this value may not have been set correctly.   - If you do not know what the correct parameter name is and none of the standard variants work, contact your creative team. _(maxLength 32)_ |
| Height | integer (int32) |  | The height of the creative in pixels. Combined with the width, this must yield an ad size supported by The Trade Desk. See the Ad Format API for a full list of supported sizes.   If BackupImageContent is provided, this property must match the width of the backup image provided.   This property is ignored on update; you cannot change the size of a creative after it is created. |
| HtmlFileContent | string |  | The contents of an HTML file as a base-64 encoded string.  Use this property when all of the information for serving the creative is contained in a single HTML file.  If the creative consists of multiple files (e.g., an HTML file and some supporting assets like Javascript, CSS, and images), use ZipArchiveContent instead.   Commonly used Javascript and CSS libraries may be referenced from this HTML file.   The maximum size of this file is 200 KB.   This property is only used on create and will not be returned by the API. During creation, you must provide this property or ZipArchiveContent (but not both). _(nullable)_ |
| HtmlFileUrl | string |  | The URL where The Trade Desk has stored the HTML file for ad serving. This is a read-only property returned by the API. _(nullable)_ |
| LandingPageUrls | array<string> |  | The landing page URLs. Normally, you should specify a single URL that is the page where the user is taken after clicking the ad. However, if your hosted HTML 5 creative rotates between different landing pages, specify all the landing pages here.   Please note that certain RTB Exchanges do not support multiple landing pages on a creative. If your creative has multiple landing pages, it will not be allowed to serve on RTB Exchanges that do not support them. You should only use multiple landing pages when you know they apply.   You must specify at least one landing page URL. Each entry must be in the form of http(s)://&lt;url&gt; |
| PrimaryHtmlFileName | string |  | The name of the HTML file in a ZIP archive that will be served as the the primary HTML file for the creative. Here's what you need to know about this property:   - This value must be the name of the HTML file that is at the root of the ZIP archive. Do not specify any files inside the folders of the archive.   - This property requires the `ZipArchiveContent` property to be specified.   - If the `HtmlFileContent` property is specified, this property is ignored.   - If there is only one HTML file at the root of the ZIP archive, this property is optional.     - This property is ignored on update.   - This property does not appear in the response.   - The maximum character length is 256. _(maxLength 256)_ |
| RightMediaOfferTypeId | integer (int64) |  | Set the Right Media Offer Type (Right Media's creative category) of this creative. If null or not specified, the Advertiser's DefaultRightMediaOfferTypeId will be used for this creative until a RightMediaOfferTypeId is assigned.   If neither the Advertiser nor the Creative have an assigned Right Media Offer Type, the creative cannot buy Right Media inventory.   See the Right Media Offer Type API for a full list of possible values. _(nullable)_ |
| ThirdPartyImpressionTrackingUrl | string |  | A pixel URL used to track impressions with third-party ad servers. The maximum character length is 500. _(maxLength 500)_ |
| ThirdPartyImpressionTrackingUrl2 | string |  | A second pixel URL used to track impressions with third-party ad servers. The maximum character length is 500. _(maxLength 500)_ |
| ThirdPartyImpressionTrackingUrl3 | string |  | A third pixel URL used to track impressions with third-party ad servers. The maximum character length is 500. _(maxLength 500)_ |
| ThirdPartyTrackingTags | array<string> |  | A list of &lt;img&gt; or &lt;script&gt; HTML tags used to track impressions with third-party ad servers. If a given tag is a script tag, it may also contain a subsequent &lt;noscript&gt; tag.   **IMPORTANT**: Do not use HTML third-party tracking tags for creating and editing video and audio creatives because video and audio players ignore them. Upon serving a video or an audio creative, any specified HTML-style third-party tracking tags will not be included in the VAST and will not fire as expected. This may also result in unexpected discrepancies between The Trade Desk reports and reports generated by the third party.   If you wish to specify a raw tracking URL, use a `ThirdPartyImpressionTrackingUrl` parameter instead. A maximum of three tags is supported.     **IMPORTANT**: For the creative to be securable, every tag must be securable, too. _(nullable)_ |
| UseClickthroughAsDefault | boolean |  | A boolean that indicates whether The Trade Desk should include the provided ClickthroughUrl into the click tracking URL (the URL that is passed via the click tracking parameter to the creative).   Normally, this should be set to true.  However, if you have multiple clickthrough URLs that the creative uses in different circumstances, you should set this to false, and insert the different clickthrough URLs into the click tracking URL using Javascript in the creative or some other method. |
| Width | integer (int32) |  | The width of the creative in pixels. Combined with the height, this must yield an ad size supported by The Trade Desk. See the Ad Format API for a full list of supported sizes.   If BackupImageContent is provided, this property must match the width of the backup image provided.   This property is ignored on update; you cannot change the size of a creative after it is created. |
| ZipArchiveContent | string |  | The contents of an HTML 5 ZIP archive file as a base-64 encoded string. Use this property when the creative consists of multiple files (e.g., an HTML file and some supporting assets like Javascript, CSS, and images). If the creative is contained in a single HTML file, use HtmlFileContent instead.   Commonly used Javascript and CSS libraries may be referenced from the files in the archive.   The archive must contain at least one HTML file at the root which serves as the primary HTML file for the creative. If there is more than one HTML file at the root of the archive, you must provide the PrimaryHtmlFileName property to indicate the name of the primary HTML file that is to be served for the creative.   The maximum size of this file is 10 MB.  The maximum number of files in the archive is 100.  The maximum size of any file in the archive is 2 MB.   This property is only used on create and will not be returned by the API. During creation, you must provide either this property or HtmlFileContent (but not both). _(nullable)_ |
| IsSecurable | boolean |  | If set to `true` (default value on create), indicates that all the resources that are needed to render and track this creative support access over HTTPS (secure) versions of their URIs.   If set to `false`, no attempts will be made to serve this creative in secure contexts.   Here's what you need to know:   - If set to `true` and there is an opportunity to serve the creative in a secure context, we will make it secure by replacing `http` with `https` before serving it.    - Secure creatives can still be served in unsecure contexts.   - Creatives that can be served only via the HTTP (unsecure) protocol provide a poor experience for users on secure pages. Be sure to categorize your creatives correctly so that we can avoid showing unsecure creatives on secure pages. Otherwise, we may automatically disable them, or supply vendors may blocklist them. _(DEPRECATED; deprecation: This attribute is deprecated as we move all TTD hosted creatives to be secure.)_ |

### `Creative_CreativeHostedNativeAttributes`

| Field | Type | Required | Description |
|---|---|---|---|
| AdServerCreativeId | string |  | The identifier of the creative used by the ad server.   For native creatives, this value is explicitly specified by the creator of the creative. _(nullable)_ |
| AdServerName | string |  | Ad Server Name. Examples are 'MediaMind' or 'DoubleClick'.   For native ads, this value is explicitly specified by the creator of the creative. _(nullable)_ |
| ClickThroughUrl | string |  | The URL to invoke when the user clicks the ad. This may include additional click tracking. Typically, the user is redirected to the landing page after this URL is invoked.   **IMPORTANT**: The click-through URL string must not exceed 5000 characters.   A click-through URL is required on create (not null), if no click-through substitute is present. If specified in an update request, the value will overwrite any substitutes. _(maxLength 5000)_ |
| DecimalAssets | array<`Creative_NativeDecimalAsset`> |  | List of native decimal assets. _(nullable)_ |
| ImageAssets | array<`Creative_NativeImageAsset`> |  | List of native image assets. _(nullable)_ |
| IsPlayerRetargetingEnabled | boolean |  | Whether or not this creative has player event retargeting enabled in DMP |
| LandingPageUrl | string |  | The landing page URL is the URL of the page where the user is taken after clicking the ad.   Must be in the form of http(s)://&lt;url&gt; |
| TextAssets | array<`Creative_NativeTextAsset`> |  | List of native text assets. _(nullable)_ |
| ThirdPartyImpressionTrackingUrl | string |  | A pixel URL used to track impressions with third party ad servers. _(maxLength 1024)_ |
| ThirdPartyImpressionTrackingUrl2 | string |  | A second pixel URL used to track impressions with third-party ad servers. The maximum character length is 1024. _(maxLength 1024)_ |
| ThirdPartyImpressionTrackingUrl3 | string |  | A third pixel URL used to track impressions with third-party ad servers. The maximum character length is 1024. _(maxLength 1024)_ |
| ThirdPartyImpressionTrackingUrl4 | string |  | A fourth pixel URL used to track impressions with third-party ad servers. The maximum character length is 1024. _(maxLength 1024)_ |
| ThirdPartyTrackingTags | array<string> |  | A list of &lt;img&gt; or &lt;script&gt; HTML tags used to track impressions with third-party ad servers. If a given tag is a script tag, it may also contain a subsequent &lt;noscript&gt; tag.   **IMPORTANT**: Do not use HTML third-party tracking tags for creating and editing video and audio creatives because video and audio players ignore them. Upon serving a video or an audio creative, any specified HTML-style third-party tracking tags will not be included in the VAST and will not fire as expected. This may also result in unexpected discrepancies between The Trade Desk reports and reports generated by the third party.   If you wish to specify a raw tracking URL, use a `ThirdPartyImpressionTrackingUrl` parameter instead. A maximum of three tags is supported.     **IMPORTANT**: For the creative to be securable, every tag must be securable, too. _(nullable)_ |
| TrackingEvents | array<`Video_VideoTrackingEvent`> |  | A list of events that you want to be notified about when a video impression appears, the video is clicked, or is viewed across different quartile boundaries |
| VideoAsset | `Creative_NativeVideoAsset` |  | Video asset, for a native video creative _(nullable)_ |

### `Creative_CreativeHostedVideoAttributes`

| Field | Type | Required | Description |
|---|---|---|---|
| AdServerCreativeId | string |  | The identifier of the creative used by the ad server.   For native creatives, this value is explicitly specified by the creator of the creative. If you later write the AdTag property in an update (even if it doesn't change), you must explicitly specify this or auto-detection will replace it. _(nullable)_ |
| AdServerName | string |  | Ad Server Name. Examples are 'MediaMind' or 'DoubleClick'.   For native creatives, this value is explicitly specified by the creator of the creative. If you later write the AdTag property in an update (even if it doesn't change), you must explicitly specify this or auto-detection will replace it. _(nullable)_ |
| AdTechnologyIds | array<string> |  | This is a declaration of vendor technologies used for click or impression tracking within this creative. These values will be populated by Google when creatives are approved for serving on their exchange.   This used to be a read/write property, it is now read-only.   See the Ad Technology API to get a complete list of possible values. |
| ClickthroughUrl | string |  | The URL to invoke when the user clicks the ad. This may include additional click tracking. Typically, the user is redirected to the landing page after this URL is invoked.   **IMPORTANT**: The click-through URL string must not exceed 5000 characters.   A click-through URL is required on create (not null), if no click-through substitute is present. If specified in an update request, the value will overwrite any substitutes. _(maxLength 5000)_ |
| CompanionCreativeIds | array<string> |  | The CreativeIds of the display creatives that can be used as companion display ads to this video impression.   Companion ads are display ads that are served alongside video ads. When there is a request for a video impression, we check to see if there is one or more corresponding companion creatives for the video and submit them along with the bid.   The publisher can supply any AdFormat for use as a companion. They will consider any/all of the companions that you provide. There is no priority to which one will be used. |
| Duration | integer (int32) |  | How long the video ad is, in seconds.   This is a read-only property returned by the API. |
| ImageUrl | string |  | The URL where The Trade Desk has stored the video file for ad serving. This is a read-only property returned by the API. _(nullable)_ |
| IsPlayerRetargetingEnabled | boolean |  | Whether or not this creative has player event retargeting enabled in DMP |
| LandingPageUrl | string |  | The landing page URL is the URL of the page where the user is taken after clicking the ad.   Must be in the form of http(s)://&lt;url&gt; |
| RightMediaOfferTypeId | integer (int64) |  | Set the Right Media Offer Type (Right Media's creative category) of this creative. If null or not specified, the Advertiser's DefaultRightMediaOfferTypeId will be used for this creative until a RightMediaOfferTypeId is assigned.   If neither the Advertiser nor the Creative have an assigned Right Media Offer Type, the creative cannot buy Right Media inventory.   See the Right Media Offer Type API for a full list of possible values. _(nullable)_ |
| SkipOffsetInSeconds | integer (int32) |  | If the Skippable property is set to true, specify the number of seconds to skip.   If the Skippable property is set to false, this defaults to null.   If not specified, this defaults to null. _(nullable)_ |
| Skippable | boolean |  | Indicates whether the skip offset option is enabled for the creative.   If set to true, specify the number of seconds to skip in the SkipOffsetInSeconds property.   The default value is false.   If not specified, this defaults to false. |
| ThirdPartyTrackingTags | array<string> |  | A list of &lt;img&gt; or &lt;script&gt; HTML tags used to track impressions with third-party ad servers. If a given tag is a script tag, it may also contain a subsequent &lt;noscript&gt; tag.   **IMPORTANT**: Do not use HTML third-party tracking tags for creating and editing video and audio creatives because video and audio players ignore them. Upon serving a video or an audio creative, any specified HTML-style third-party tracking tags will not be included in the VAST and will not fire as expected. This may also result in unexpected discrepancies between The Trade Desk reports and reports generated by the third party.   If you wish to specify a raw tracking URL, use a `ThirdPartyImpressionTrackingUrl` parameter instead. A maximum of three tags is supported.     **IMPORTANT**: For the creative to be securable, every tag must be securable, too. _(nullable)_ |
| TrackingEvents | array<`Video_VideoTrackingEvent`> |  | A list of events that you want to be notified about when a video impression appears, the video is clicked, or is viewed across different quartile boundaries |
| UniversalAdId | string |  | The universal [AdID](https://www.ad-id.org/), [ARPP PubID](https://www.arpp.tv/), or [ClearCast clock number](https://help.clearcast.co.uk/hc/en-us/articles/4409927526673-Clock-Number-What-How-Adding). _(nullable)_ |
| UniversalAdIdRegistry | string |  | A string used to identify the URL for the registry website where the unique creative ID is cataloged. _(nullable)_ |
| VastTagUrl | string |  | The URL of the VAST XML document for this video.   This is a read-only property returned by the API. |
| VideoEncodingComplete | boolean |  | Whether or not encoding of the video is completed.   This is a read-only property returned by the API. |
| VideoUploadAttributes | `Creative_VideoUploadAttributes` |  | The properties describing the uploaded video file.     This would generally be the VideoUploadAttributes property that was received by calling creative/generateuploadurlforvideocreative.   The file should have been uploaded using the VideoUploadUrl attribute from the creative/generateuploadurlforvideocreative call before calling POST creative.   During creation you must provide this property or VideoContent (but not both).   This property is only used on create and will not be returned by the API. |
| IsSecurable | boolean |  | If set to `true` (default value on create), indicates that all the resources that are needed to render and track this creative support access over HTTPS (secure) versions of their URIs.   If set to `false`, no attempts will be made to serve this creative in secure contexts.   Here's what you need to know:   - If set to `true` and there is an opportunity to serve the creative in a secure context, we will make it secure by replacing `http` with `https` before serving it.    - Secure creatives can still be served in unsecure contexts.   - Creatives that can be served only via the HTTP (unsecure) protocol provide a poor experience for users on secure pages. Be sure to categorize your creatives correctly so that we can avoid showing unsecure creatives on secure pages. Otherwise, we may automatically disable them, or supply vendors may blocklist them. _(DEPRECATED; deprecation: This attribute is deprecated as we move all TTD hosted creatives to be secure.)_ |
| VideoContent | string |  | The contents of the Video file (.mp4, .flv, .webm, .mov, .wmf, .mpg, or .mpeg) as a base-64 encoded string. The API will automatically detect the format and the size of the media.   During creation you must provide this property or VideoUploadAttributes (but not both).   This property is only used on create and will not be returned by the API. _(DEPRECATED; deprecation: This property will not be considered on create or update in future versions. Please upload your video to the cloud storage and supply a URL to it in VideoUploadAttributes rather than posting it directly in the VideoContent property. For details about generating and using pre-signed URLs for uploading creatives to cloud storage locations, see the creative/generateuploadurlforvideocreative endpoint.)_ |

### `Creative_CreativeImageAttributes`

| Field | Type | Required | Description |
|---|---|---|---|
| AdServerCreativeId | string |  | If the ad tag contains a known ad server URL, this will return the identifier of the creative used by the ad server.   You may explicitly set this value if you wish to override auto-detection. If you later write the AdTag property in an update (even if it doesn't change), you must explicitly specify this or auto-detection will replace it. _(nullable)_ |
| AdServerName | string |  | If the ad tag contains a known ad server URL, this will return the name of the ad server. Examples are 'MediaMind' or 'DoubleClick'.   You may explicitly set this value if you wish to override auto-detection. If you later write the AdTag property in an update (even if it doesn't change), you must explicitly specify this or auto-detection will replace it. _(nullable)_ |
| AdTechnologyIds | array<string> |  | This is a declaration of vendor technologies used for click or impression tracking within this creative. These values will be populated by Google when creatives are approved for serving on their exchange.   This used to be a read/write property, it is now read-only.   See the Ad Technology API to get a complete list of possible values. |
| ClickthroughUrl | string |  | The URL to invoke when the user clicks the ad. This may include additional click tracking. Typically, the user is redirected to the landing page after this URL is invoked.   **IMPORTANT**: The click-through URL string must not exceed 5000 characters.   A click-through URL is required on create (not null), if no click-through substitute is present. If specified in an update request, the value will overwrite any substitutes. _(maxLength 5000)_ |
| Height | integer (int32) |  | The height of the creative in pixels. This is a read-only property returned by the API. |
| ImageContent | string |  | The contents of the image as a base-64 encoded string. The API automatically detects the format and the size of the image.   The image must be in the GIF, JPEG, or PNG format. The API automatically detects the format and the size of the image. For a full list of supported sizes, see the [Ad Format API](/v3/portal/api/area/Ad%20Format). If the format or size is not supported by The Trade Desk, the request will be rejected.   This property is only used on create and will not be returned by the API. If this property is specified on update, the request will be rejected. |
| ImageUrl | string |  | The URL where The Trade Desk has stored the image file for ad serving. This is a read-only property returned by the API. _(nullable)_ |
| LandingPageUrl | string |  | The landing page URL is the URL of the page where the user is taken after clicking the ad.   Must be in the form of http(s)://&lt;url&gt; _(nullable)_ |
| RightMediaOfferTypeId | integer (int64) |  | Set the Right Media Offer Type (Right Media's creative category) of this creative. If null or not specified, the Advertiser's DefaultRightMediaOfferTypeId will be used for this creative until a RightMediaOfferTypeId is assigned.   If neither the Advertiser nor the Creative have an assigned Right Media Offer Type, the creative cannot buy Right Media inventory.   See the Right Media Offer Type API for a full list of possible values. _(nullable)_ |
| ThirdPartyImpressionTrackingUrl | string |  | A pixel URL used to track impressions with third party ad servers. The maximum character length is 500. _(maxLength 500)_ |
| ThirdPartyImpressionTrackingUrl2 | string |  | A second pixel URL used to track impressions with third party ad servers. The maximum character length is 500. _(maxLength 500)_ |
| ThirdPartyImpressionTrackingUrl3 | string |  | A third pixel URL used to track impressions with third party ad servers. The maximum character length is 500. _(maxLength 500)_ |
| ThirdPartyTrackingTags | array<string> |  | A list of &lt;img&gt; or &lt;script&gt; HTML tags used to track impressions with third-party ad servers. If a given tag is a script tag, it may also contain a subsequent &lt;noscript&gt; tag.   **IMPORTANT**: Do not use HTML third-party tracking tags for creating and editing video and audio creatives because video and audio players ignore them. Upon serving a video or an audio creative, any specified HTML-style third-party tracking tags will not be included in the VAST and will not fire as expected. This may also result in unexpected discrepancies between The Trade Desk reports and reports generated by the third party.   If you wish to specify a raw tracking URL, use a `ThirdPartyImpressionTrackingUrl` parameter instead. A maximum of three tags is supported.     **IMPORTANT**: For the creative to be securable, every tag must be securable, too. _(nullable)_ |
| Width | integer (int32) |  | The width of the creative in pixels. This is a read-only property returned by the API. |
| IsSecurable | boolean |  | If set to `true` (default value on create), indicates that all the resources that are needed to render and track this creative support access over HTTPS (secure) versions of their URIs.   If set to `false`, no attempts will be made to serve this creative in secure contexts.   Here's what you need to know:   - If set to `true` and there is an opportunity to serve the creative in a secure context, we will make it secure by replacing `http` with `https` before serving it.    - Secure creatives can still be served in unsecure contexts.   - Creatives that can be served only via the HTTP (unsecure) protocol provide a poor experience for users on secure pages. Be sure to categorize your creatives correctly so that we can avoid showing unsecure creatives on secure pages. Otherwise, we may automatically disable them, or supply vendors may blocklist them. _(DEPRECATED; deprecation: This attribute is deprecated as we move all TTD hosted creatives to be secure.)_ |

### `Creative_CreativeThirdPartyAudioAttributes`

| Field | Type | Required | Description |
|---|---|---|---|
| AdServerCreativeId | string |  | If the third party ad tag contains a known ad server URL, this will return the identifier of the creative used by the ad server.   You may explicitly set this value if you wish to override auto-detection. If you later write the AdTag property in an update (even if it doesn't change), you must explicitly specify this or auto-detection will replace it. _(nullable)_ |
| AdServerName | string |  | If the third party ad tag contains a known ad server URL, this will return the name of the ad server. Examples are 'MediaMind' or 'DoubleClick'.   You may explicitly set this value if you wish to override auto-detection. If you later write the AdTag property in an update (even if it doesn't change), you must explicitly specify this or auto-detection will replace it. _(nullable)_ |
| AdTechnologyIds | array<string> |  | This is a declaration of vendor technologies used for click or impression tracking within this creative. These values will be populated by Google when creatives are approved for serving on their exchange.   This used to be a read/write property, it is now read-only.   See the Ad Technology API to get a complete list of possible values. |
| IsPlayerRetargetingEnabled | boolean |  | Whether or not this creative has player event retargeting enabled in DMP |
| LandingPageUrl | string |  | The landing page URL is the URL of the page where the user is taken after clicking the ad.   If specifying a VastXmlUrl during the creation or update of a 3rd party hosted audio creative, this property is required. This property takes precedence over the landing page value specified in the VAST/DAAST file.    Must be in the form of http(s)://&lt;url&gt; |
| RightMediaOfferTypeId | integer (int64) |  | Set the Right Media Offer Type (Right Media's creative category) of this creative. If null or not specified, the Advertiser's DefaultRightMediaOfferTypeId will be used for this creative until a RightMediaOfferTypeId is assigned.   If neither the Advertiser nor the Creative have an assigned Right Media Offer Type, the creative cannot buy Right Media inventory.   See the Right Media Offer Type API for a full list of possible values. _(nullable)_ |
| Skippable | boolean |  | Whether or not this audio ad will be shown for skippable impressions.   This is a read-only property returned by the API. It is determined from the information in the VAST XML. |
| ThirdPartyImpressionTrackingUrl | string |  | A pixel URL used to track impressions with third party ad servers. _(maxLength 500)_ |
| ThirdPartyTrackingTags | array<string> |  | A list of &lt;img&gt; or &lt;script&gt; HTML tags used to track impressions with third-party ad servers. If a given tag is a script tag, it may also contain a subsequent &lt;noscript&gt; tag.   **IMPORTANT**: Do not use HTML third-party tracking tags for creating and editing video and audio creatives because video and audio players ignore them. Upon serving a video or an audio creative, any specified HTML-style third-party tracking tags will not be included in the VAST and will not fire as expected. This may also result in unexpected discrepancies between The Trade Desk reports and reports generated by the third party.   If you wish to specify a raw tracking URL, use a `ThirdPartyImpressionTrackingUrl` parameter instead. A maximum of three tags is supported.     **IMPORTANT**: For the creative to be securable, every tag must be securable, too. _(nullable)_ |
| TrackingEvents | array<`Audio_AudioTrackingEvent`> |  | A list of events that you want to be notified about when an audio impression plays, is clicked, or is heard across different quartile boundaries |
| VastXmlUrl | string |  | The URL of the VAST/DAAST document that describes the audio creative.   We will validate the document to ensure that it is in the correct format and that all required properties are present.   If the VAST/DAAST is rejected because it does not contain proper audio formats, please ensure the VAST is correct.   If the VAST/DAAST is rejected because it does not specify a landing page URL, you must specify the LandingPageUrl request property.   Must be in the form of http(s)://&lt;url&gt; |

### `Creative_CreativeThirdPartyTagAttributes`

| Field | Type | Required | Description |
|---|---|---|---|
| AdServerCreativeId | string |  | If the third party ad tag contains a known ad server URL, this will return the identifier of the creative used by the ad server.   You may explicitly set this value if you wish to override auto-detection. If you later write the AdTag property in an update (even if it doesn't change), you must explicitly specify this or auto-detection will replace it. _(nullable)_ |
| AdServerName | string |  | If the third party ad tag contains a known ad server URL, this will return the name of the ad server. Examples are 'MediaMind' or 'DoubleClick'.   You may explicitly set this value if you wish to override auto-detection. If you later write the AdTag property in an update (even if it doesn't change), you must explicitly specify this or auto-detection will replace it. _(nullable)_ |
| AdTag | string |  | The third party HTML tag that will serve the creative. If you're using one of our supported ad servers, The Trade Desk automatically adds a click macro.  If your ad does not click through with this macro or if you are using another ad server, try %%TTD_CLICK_ESC%% in pace of %%TTD_CLK%%. The Trade Desk click macros also support multiple escaping by simply adding the number of times you want to escape to the end of the macro. For example, %%TTD_CLK_ESC3%%. |
| AdTechnologyIds | array<string> |  | This is a declaration of vendor technologies used for click or impression tracking within this creative. These values will be populated by Google when creatives are approved for serving on their exchange.   This used to be a read/write property, it is now read-only.   See the Ad Technology API to get a complete list of possible values. |
| Height | integer (int32) |  | The height of the creative in pixels. Combined with the width, this must yield an ad size supported by The Trade Desk. See the Ad Format API for a full list of supported sizes.   This property is ignored on update; you cannot change the size of a creative after it is created. |
| LandingPageUrls | array<string> |  | The landing page URLs. Normally, you should specify a single URL that is the page where the user is taken after clicking the ad. However, if your Third Party Ad Tag Creative rotates between different landing pages, specify all the landing pages here.   Please note that certain RTB Exchanges do not support multiple landing pages on a creative. If your creative has multiple landing pages, it will not be allowed to serve on RTB Exchanges that do not support them. You should only use multiple landing pages when you know they apply.   You must specify at least one landing page URL. Each entry must be in the form of http(s)://&lt;url&gt; |
| MraidVersion | `Creative_CreativeMraidVersion` |  | If this is an MRAID creative, specify the MRAID version, from the CreativeMraidVersion enum. If this is not an MRAID creatives, skip setting this property. The API will set this to Nonmraid by default. |
| RightMediaOfferTypeId | integer (int64) |  | Set the Right Media Offer Type (Right Media's creative category) of this creative. If null or not specified, the Advertiser's DefaultRightMediaOfferTypeId will be used for this creative until a RightMediaOfferTypeId is assigned.   If neither the Advertiser nor the Creative have an assigned Right Media Offer Type, the creative cannot buy Right Media inventory.   See the Right Media Offer Type API for a full list of possible values. _(nullable)_ |
| ThirdPartyImpressionTrackingUrl | string |  | A pixel URL used to track impressions with third party ad servers. The maximum character length is 500. _(maxLength 500)_ |
| ThirdPartyImpressionTrackingUrl2 | string |  | A second pixel URL used to track impressions with third-party ad servers. The maximum character length is 500. _(maxLength 500)_ |
| ThirdPartyImpressionTrackingUrl3 | string |  | A third pixel URL used to track impressions with third-party ad servers. The maximum character length is 500. _(maxLength 500)_ |
| ThirdPartyTrackingTags | array<string> |  | A list of &lt;img&gt; or &lt;script&gt; HTML tags used to track impressions with third-party ad servers. If a given tag is a script tag, it may also contain a subsequent &lt;noscript&gt; tag.   **IMPORTANT**: Do not use HTML third-party tracking tags for creating and editing video and audio creatives because video and audio players ignore them. Upon serving a video or an audio creative, any specified HTML-style third-party tracking tags will not be included in the VAST and will not fire as expected. This may also result in unexpected discrepancies between The Trade Desk reports and reports generated by the third party.   If you wish to specify a raw tracking URL, use a `ThirdPartyImpressionTrackingUrl` parameter instead. A maximum of three tags is supported.     **IMPORTANT**: For the creative to be securable, every tag must be securable, too. _(nullable)_ |
| Width | integer (int32) |  | The width of the creative in pixels. Combined with the height, this must yield an ad size supported by The Trade Desk. See the Ad Format API for a full list of supported sizes.   This property is ignored on update; you cannot change the size of a creative after it is created. |
| IsSecurable | boolean |  | If set to `true` (default value on create), indicates that all the resources that are needed to render and track this creative support access over HTTPS (secure) versions of their URIs.   If set to `false`, no attempts will be made to serve this creative in secure contexts.   Here's what you need to know:   - If set to `true` and there is an opportunity to serve the creative in a secure context, we will make it secure by replacing `http` with `https` before serving it.    - Secure creatives can still be served in unsecure contexts.   - Creatives that can be served only via the HTTP (unsecure) protocol provide a poor experience for users on secure pages. Be sure to categorize your creatives correctly so that we can avoid showing unsecure creatives on secure pages. Otherwise, we may automatically disable them, or supply vendors may blocklist them. _(DEPRECATED; deprecation: This attribute is deprecated as we move all creatives to be secure.)_ |

### `Creative_CreativeThirdPartyVideoAttributes`

| Field | Type | Required | Description |
|---|---|---|---|
| AdServerCreativeId | string |  | If the third-party ad tag contains a known ad server URL, this will return the identifier of the creative used by the ad server.   You may explicitly set this value if you wish to override auto-detection. If you later write the AdTag property in an update (even if it doesn't change), you must explicitly specify this or auto-detection will replace it. _(nullable)_ |
| AdServerName | string |  | If the third-party ad tag contains a known ad server URL, this will return the name of the ad server. Examples are 'MediaMind' or 'DoubleClick'.   You may explicitly set this value if you wish to override auto-detection. If you later write the AdTag property in an update (even if it doesn't change), you must explicitly specify this or auto-detection will replace it. _(nullable)_ |
| AdTechnologyIds | array<string> |  | This is a declaration of vendor technologies used for click or impression tracking within this creative. These values will be populated by Google when creatives are approved for serving on their exchange.   This used to be a read/write property, it is now read-only.   See the Ad Technology API to get a complete list of possible values. |
| IsPlayerRetargetingEnabled | boolean |  | Whether or not this creative has player event retargeting enabled in DMP |
| LandingPageUrl | string |  | The landing page URL is the URL of the page where the user is taken after clicking the ad.   If specifying a VastXmlUrl during the creation or update of a 3rd party hosted video, this property is required. This property takes precedence over the landing page value specified in the VAST file.    Must be in the form of http(s)://&lt;url&gt;   **NOTE**: In future versions, this property will be considered on create and update only when the VAST file contains only VPAID media and does not properly specify the landing page.   VAST files contain other kinds of media will be required to specify the landing page in the file. |
| RightMediaOfferTypeId | integer (int64) |  | Set the Right Media Offer Type (Right Media's creative category) of this creative. If null or not specified, the Advertiser's DefaultRightMediaOfferTypeId will be used for this creative until a RightMediaOfferTypeId is assigned.   If neither the Advertiser nor the Creative have an assigned Right Media Offer Type, the creative cannot buy Right Media inventory.   See the Right Media Offer Type API for a full list of possible values. _(nullable)_ |
| SkipOffsetInSeconds | integer (int32) |  | If the Skippable property is set to true, specify the number of seconds to skip.   If the Skippable property is set to false, this defaults to null.   This is a read-only property returned by the API. It is determined from the information in the VAST XML. _(nullable)_ |
| Skippable | boolean |  | Indicates whether the skip offset option is enabled for the creative.   If set to true, specify the number of seconds to skip in the SkipOffsetInSeconds property.   The default value is `false`.   This is a read-only property returned by the API. It is determined from the information in the VAST XML. |
| ThirdPartyImpressionTrackingUrl | string |  | A pixel URL used to track impressions with third-party ad servers. The maximum character length is 500. _(maxLength 500)_ |
| ThirdPartyTrackingTags | array<string> |  | A list of &lt;img&gt; or &lt;script&gt; HTML tags used to track impressions with third-party ad servers. If a given tag is a script tag, it may also contain a subsequent &lt;noscript&gt; tag.   **IMPORTANT**: Do not use HTML third-party tracking tags for creating and editing video and audio creatives because video and audio players ignore them. Upon serving a video or an audio creative, any specified HTML-style third-party tracking tags will not be included in the VAST and will not fire as expected. This may also result in unexpected discrepancies between The Trade Desk reports and reports generated by the third party.   If you wish to specify a raw tracking URL, use a `ThirdPartyImpressionTrackingUrl` parameter instead. A maximum of three tags is supported.     **IMPORTANT**: For the creative to be securable, every tag must be securable, too. _(nullable)_ |
| ThirdPartyVideoViewabilityEnabled | boolean |  | Enabling this tracking feature will provide MOAT video viewability and player size reporting within The Trade Desk's omnichannel dashboards and reports, for this 3rd party video creative.   This tracking can be enabled on 3rd party VAST 2.0 video creatives, as well as 3rd party VAST 2.0 video creatives containing a VPAID 1.0 media asset.   Please note one important limitation - If the 3rd party VAST contains a companion banner asset, we are not able to serve that companion for VPAID-eligible impressions.    This may reduce the scale of companion banner impressions won for this creative.    If serving a companion on the maximum number of impressions is required, we would not recommend enabling the tracking on this particular creative. |
| TrackingEvents | array<`Video_VideoTrackingEvent`> |  | A list of events that you want to be notified about when a video impression appears, the video is clicked, or is viewed across different quartile boundaries |
| UniversalAdId | string |  | The universal [AdID](https://www.ad-id.org/), [ARPP PubID](https://www.arpp.tv/), or [ClearCast clock number](https://help.clearcast.co.uk/hc/en-us/articles/4409927526673-Clock-Number-What-How-Adding). _(nullable)_ |
| UniversalAdIdRegistry | string |  | A string used to identify the URL for the registry website where the unique creative ID is cataloged. _(nullable)_ |
| VastXmlUrl | string |  | The URL of the VAST document that describes the video creative.   We will validate the document to ensure that it is in the correct format and that all required properties are present.   If the VAST is rejected because it does not contain proper video formats, please ensure the VAST is correct.   If the VAST is rejected because it does not specify a video duration, you must specify the Duration request property.   If the VAST is rejected because it does not specify a landing page URL, you must specify the LandingPageUrl request property.   Must be in the form of http(s)://&lt;url&gt; |
| AllowIncompleteMediaFiles | boolean |  | A flag to override our validation check that tests the VAST xml file to ensure that it has included both .flv and .mp4 files.   With this flag set, you can omit either .flv or .mp4 files (but not both). Note: some sites may reject videos that are missing one or the other.   This property is not returned when reading the creative. _(DEPRECATED; deprecation: This flag is no longer required, because we always allow VAST files to omit either .flv or .mp4 files (but not both).)_ |
| Duration | integer (int32) |  | How long the video ad is, in seconds.   This property is only considered on create when the VAST file doesn't properly specify the duration. _(DEPRECATED; deprecation: This property will not be considered on create or update in future versions.  The VAST file will have to contain a valid duration.)_ |
| IsSecurable | boolean |  | If set to `true` (default value on create), indicates that all the resources that are needed to render and track this creative support access over HTTPS (secure) versions of their URIs.   If set to `false`, no attempts will be made to serve this creative in secure contexts.   Here's what you need to know:   - If set to `true` and there is an opportunity to serve the creative in a secure context, we will make it secure by replacing `http` with `https` before serving it.    - Secure creatives can still be served in unsecure contexts.   - Creatives that can be served only via the HTTP (unsecure) protocol provide a poor experience for users on secure pages. Be sure to categorize your creatives correctly so that we can avoid showing unsecure creatives on secure pages. Otherwise, we may automatically disable them, or supply vendors may blocklist them. _(DEPRECATED; deprecation: This property is not considered on create or update.  The securability aspect of a creative is set based on the actual content of the VAST.)_ |

### `Creative_CreativeType`

Type: string enum(Facebook, FacebookPagePost, Flash, HostedVideo, Image, ThirdPartyTag, ThirdPartyVideo, Html5, HostedNative, HostedNativeVideo, HostedAudio, ThirdPartyAudio, ThirdPartyNative, ThirdPartyNativeVideo, HostedNativeWithThirdPartyVideo, BroadcasterHostedVideo)

### `DMP_FirstPartyDataType`

Type: string enum(Keyword, TrackingTag, IPAddressRange, ImportedAdvertiserData, ImportedAdvertiserDataWithBaseBid, HouseholdExtension, ClickRetargeting, DirectIPTargeting, PlayerEventStart, PlayerEventMidpoint, PlayerEventComplete, ThirdPartyImpression, FixedPriceUser, CrmData)

### `DMP_LookAlikeModelDetails`

| Field | Type | Required | Description |
|---|---|---|---|
| FirstPartyDataId | integer (int64) |  | The First Party Data that this Look-Alike Model belongs to. |
| LastGenerationDateUTC | string (date-time) |  | The UTC date when the Model was last generated.   A NULL would indicate that the Model has not been generated as yet. _(nullable)_ |
| LastRequestDateUTC | string (date-time) |  | The UTC Date when the Model was last requested to be built/rebuilt. |
| LookAlikeModelBuildStatus | `DMP_LookAlikeModelBuildStatus` |  | The build status of the Look-Alike Model indicating whether the Look-Alike Model has been built. |
| LookAlikeModelResultStatus | `DMP_LookAlikeModelResultStatus` |  | The Result status of the Look-Alike Model indicating whether the First Party Data has Third Party Data that are statistically similar to it. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Eligibility`

Type: string enum(Eligible, NotEligible)

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

### `PassThroughFee_AdditionalFeeQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| Amount | number (double) |  | The fee amount to be charged (according to the type of fee). Must be nonzero and positive.   If FeeType is one of MediaCostPercentage, DataCostPercentage, MediaPlusDataCostPercentage or PartnerCostPercentage then a value greater than 0 and less than 100.   If FeeType is one of FeeCPM or RateCPM then CPM in advertiser currency. |
| Description | string |  | The description or title of the fee (shown in the UI). _(nullable)_ |
| FeeType | `PassThroughFee_AdditionalFeeType` |  | The fee type that determines how and when to calculate a charge. Fee types include MediaCostPercentage, DataCostPercentage, MediaPlusDataCostPercentage, PartnerCostPercentage, FeeCPM and RateCPM. A flat rate card can only have one fee with fee type RateCPM. |

### `TheTradeDesk.AdPlatform.Shared.DB.Provisioning_UsState`

Type: string enum(Alabama, Alaska, Arkansas, Arizona, California, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Iowa, Idaho, Illinois, Indiana, Kansas, Kentucky, Louisiana, Massachusetts, Maryland, Maine, Michigan, Minnesota, Missouri, Mississippi, Montana, NorthCarolina, NorthDakota, Nebraska, NewHampshire, NewJersey, NewMexico, Nevada, NewYork, Oklahoma, Ohio, Oregon, Pennsylvania, RhodeIsland, SouthCarolina, SouthDakota, Tennessee, Texas, Utah, Virginia, Vermont, Washington, Wisconsin, WestVirginia, Wyoming, WashingtonDC)

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

### `Creative_CreativeAuditor`

Type: string enum(Google, AppNexus, Microsoft, Facebook, BrightRoll, RightMedia, Viooh)

### `Audio_AudioTrackingEvent`

| Field | Type | Required | Description |
|---|---|---|---|
| EventType | `Audio_AudioTrackingEventType` | yes | The type of event to register a callback for. These values map directly to the types of callbacks allowed in a DAAST/VAST handler.    It is possible that the current list could expand in the future |
| EventUrl | string | yes | The URL that will be hit when this this event fires. |

### `Creative_AudioUploadAttributes`

| Field | Type | Required | Description |
|---|---|---|---|
| AudioCreativeExtension | string |  | The extension of the uploaded creative audio file. |
| AudioCreativeId | string |  | The Id associated with the uploaded creative audio file. |

### `Creative_NativeDecimalAsset`

| Field | Type | Required | Description |
|---|---|---|---|
| DecimalAssetType | `Creative_DecimalAssetType` |  | The Native Decimal Asset type. Examples: Rating |
| Value | number (double) |  | The decimal value for this asset |

### `Creative_NativeImageAsset`

| Field | Type | Required | Description |
|---|---|---|---|
| HeightInPixel | integer (int32) |  | The height of the image. This is a read-only property returned by the API. |
| ImageAssetType | `Creative_ImageAssetType` |  | The Native Image Asset type. Examples: ImageMain, ImageLogo, ImageIcon. This is a read-only property when updating. |
| ImageContent | string |  | The contents of the image as a base-64 encoded string. The API will automatically detect the format and the size of the image.   The image may be a GIF, JPEG, or PNG. See the Ad Format API for a full list of supported sizes. If the format or size is not supported by The Trade Desk, the request will be rejected.   This property is only used on create and will not be returned by the API. This property may not be specified on update; if it is, the request will be rejected. |
| ImageFileName | string |  | The Native image asset file name. The maximum character length is 128. _(maxLength 128)_ |
| ImageUrl | string |  | The URL where The Trade Desk has stored the image file for ad serving. This is a read-only property returned by the API. _(nullable)_ |
| WidthInPixel | integer (int32) |  | The width of the image. This is a read-only property returned by the API. |

### `Creative_NativeTextAsset`

| Field | Type | Required | Description |
|---|---|---|---|
| Text | string |  | The text value for the native text asset. The maximum character length is 2048. _(maxLength 2048)_ |
| TextAssetType | `Creative_TextAssetType` |  | The native text asset type. For example, title, sponsor, or description.   **NOTE**: The store name text asset type is deprecated.    While the API will continue to expose StoreName as a valid enumeration for backward compatibility, it will no longer return StoreName NativeTextAssets that were previously created, and will ignore any new StoreName NativeTextAssets that are specified in POST/PUT requests. |

### `Creative_NativeVideoAsset`

| Field | Type | Required | Description |
|---|---|---|---|
| Duration | integer (int32) |  | How long the video ad is, in seconds. This is a read-only property returned by the API. |
| VideoUploadAttributes | `Creative_VideoUploadAttributes` |  | The properties describing the uploaded video file.     This would generally be the VideoUploadAttributes property that was received by calling creative/generateuploadurlforvideocreative.   The file should have been uploaded using the VideoUploadUrl attribute from the creative/generateuploadurlforvideocreative call before calling POST creative.   This property is only used on create and will not be returned by the API. |
| VideoUrl | string |  | The URL where The Trade Desk has stored the video file for ad serving. This is a read-only property returned by the API. _(nullable)_ |

### `Video_VideoTrackingEvent`

| Field | Type | Required | Description |
|---|---|---|---|
| EventType | `Video_VideoTrackingEventType` | yes | The type of event to register a callback for. These values map directly to the types of callbacks allowed in a VAST handler.    It is possible that the current list could expand in the future |
| EventUrl | string | yes | The URL that will be hit when this this event fires. |

### `Creative_VideoUploadAttributes`

| Field | Type | Required | Description |
|---|---|---|---|
| VideoCreativeExtension | string |  | The extension of the uploaded creative video file. |
| VideoCreativeId | string |  | The Id associated with the uploaded creative video file. |

### `Creative_CreativeMraidVersion`

Type: string enum(Nonmraid, Mraid10, Mraid20)

### `DMP_LookAlikeModelBuildStatus`

Type: string enum(NotRequested, Queued, Built)

### `DMP_LookAlikeModelResultStatus`

Type: string enum(NoResults, Ready)

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

### `PassThroughFee_AdditionalFeeType`

Type: string enum(None, MediaCostPercentage, DataCostPercentage, MediaPlusDataCostPercentage, PartnerCostPercentage, FeeCPM, RateCPM, RateCPC, CustomPMP_PartnerCostPercentage, MediaDataFeeFeaturesCostPercentage, PartnerDataCostPercentage)

### `Campaign_ProductListReportingType`

Type: string enum(Featured, Halo)

### `Audio_AudioTrackingEventType`

Type: string enum(Start, Midpoint, FirstQuartile, ThirdQuartile, Complete, Impression, Click)

### `Creative_DecimalAssetType`

Type: string enum(None, Rating)

### `Creative_ImageAssetType`

Type: string enum(None, ImageMain, ImageLogo, ImageIcon)

### `Creative_TextAssetType`

Type: string enum(None, Title, Sponsor, Description, Price, CallToAction, StoreName)

### `Video_VideoTrackingEventType`

Type: string enum(Start, Midpoint, FirstQuartile, ThirdQuartile, Complete, Impression, Click)

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

