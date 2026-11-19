# Frequency Config

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 7

---

## POST /v3/frequency/config

Create a frequency configuration. This endpoint enables you to streamline the creation of a [frequency counter](/v3/portal/api/area/Frequency%20Counter), associating entities to increment the counter, applying the frequency configuration to &lt;a href="/v3/portal/api/area/Bid%20List"&gt;bid lists&lt;/a&gt;, and associating bid lists to entities. See also [Basic Frequency Configuration Guidelines](/v3/portal/api/doc/FrequencyConfigurationBasic).

Operation ID: `post-frequency-config`

**Request body** (`application/json`, required): `Frequency_FrequencyConfig_post`

**Response 200** (`application/json`): `Frequency_FrequencyConfig`

---

## PUT /v3/frequency/config

Update a frequency configuration.  
This endpoint enables you to streamline updating a [frequency counter](/v3/portal/api/area/Frequency%20Counter)  
associating entities to increment the counter, applying the frequency configuration to [bid lists](/v3/portal/api/area/Bid%20List), and associating the bid lists to entities. See also [Basic Frequency Configuration Guidelines](/v3/portal/api/doc/FrequencyConfigurationBasic).

Operation ID: `put-frequency-config`

**Request body** (`application/json`, required): `Frequency_FrequencyConfig_put`

**Response 200** (`application/json`): `Frequency_FrequencyConfig`

---

## DELETE /v3/frequency/config/{counterId}

Delete the frequency configuration for the specified counter ID.  
IMPORTANT: This also deletes all bid lines and increments that reference the specified counter ID and the counter itself. If a bid list includes only one bid line, the entire bid list is deleted.

Operation ID: `delete-frequency-config-counterid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| counterId | path | string | yes |  |

**Response 200**: OK

---

## GET /v3/frequency/config/{counterId}

Retrieve the frequency configuration for the specified counter ID.  
This endpoint returns information for the [frequency counter](/v3/portal/api/area/Frequency%20Counter)  
entities associated to increment the counter, and [bid lists](/v3/portal/api/area/Bid%20List) where this frequency configuration is associated.

Operation ID: `get-frequency-config-counterid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| counterId | path | string | yes |  |

**Response 200** (`application/json`): `Frequency_FrequencyConfig`

---

## POST /v3/frequency/config/query

Retrieve a paged, sorted, and filterable list of frequency configurations for the specified entity.

Operation ID: `post-frequency-config-query`

**Request body** (`application/json`, required): `Frequency_FrequencyConfigQuery_post`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_FrequencyConfig_`

---

## POST /v3/frequency/config/query/bidlist

Retrieve a paged, sorted, and filterable list of frequency configurations for specified bid list IDs.

Operation ID: `post-frequency-config-query-bidlist`

**Request body** (`application/json`, required): `Frequency_FrequencyConfigQueryByBidList_post`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_FrequencyConfig_`

---

## POST /v3/frequency/config/query/counter

Retrieve a paged, sorted, and filterable list of frequency configurations for specified frequency counter IDs.

Operation ID: `post-frequency-config-query-counter`

**Request body** (`application/json`, required): `Frequency_FrequencyConfigQueryByCounter_post`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_FrequencyConfig_`

---

## Schemas

### `Frequency_FrequencyConfig`

A configuration endpoint which allows creating/editing  
frequency counters, increments, and caps in a single call

| Field | Type | Required | Description |
|---|---|---|---|
| BidLists | array<`Frequency_FrequencyBidList`> |  | Bid lists apply frequency settings to ad groups, campaigns, and other entities by associating the bid list with the entity and enabling the relationship for the entity. Bid lists are used to define frequency caps, set frequency goals, and adjust bids based on the associated counter. |
| Counter | `Frequency_FrequencyCounter` |  | A frequency counter defines the framework for tracking the number of times a user is served an ad during a specific period of time. _(nullable)_ |
| IncrementByAllEntitiesAssociatedWithBidLists | boolean |  | If set to `true`, the ad groups, campaigns, advertisers, or partners whose IDs are specified in the respective `AssociatedAdGroups`, `AssociatedCampaigns`, `AssociatedAdvertisers`, or `AssociatedPartners` arrays of the bid list are used as increments for this frequency configuration.   **IMPORTANT**: The `Increments` array must be empty if included in the request, and at least one bid list with at least one associated entity must be provided in the `BidLists` array of the request.   If set to `false`, the entities whose IDs are specified in the `Increments` array are used as increments for this frequency configuration. This is the default value. |
| Increments | `Frequency_Increment` |  | Entities (partners, advertisers, campaigns, and ad groups) that serve impressions and increase the user's frequency count for the associated counter.   **IMPORTANT**: If you want to use the associated ad groups, campaigns, advertisers, or partners whose IDs are specified in the respective `AssociatedAdGroups`, `AssociatedCampaigns`, `AssociatedAdvertisers`, or `AssociatedPartners` arrays of the specified bid lists to be used as increments, leave this property empty and set the `IncrementByAllEntitiesAssociatedWithBidLists` flag to `true`. |

### `Frequency_FrequencyConfigQueryByBidList_post`

| Field | Type | Required | Description |
|---|---|---|---|
| BidListIds | array<string> | yes | The bid list IDs for which to look up frequency configurations. |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |

### `Frequency_FrequencyConfigQueryByCounter_post`

| Field | Type | Required | Description |
|---|---|---|---|
| CounterIds | array<string> | yes | The frequency counter IDs for which to look up frequency configurations. |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |

### `Frequency_FrequencyConfigQuery_post`

| Field | Type | Required | Description |
|---|---|---|---|
| EntityId | string | yes | The ID of the ad group, campaign, advertiser, or partner for which to return frequency configurations. |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| EntityType | `Frequency_AssociatedEntity` |  | The type of the entity whose ID is specified in the `EntityId` property. |
| OutputDetailLevel | `Frequency_DetailLevel` |  | Specify whether you want results only for the specified entity or if you want to include the its ancestors and/or descendants. If you omit this property from the request, the response returns results associated only with the specified entity. To retrieve frequency configurations for all entities related to the specified entity, specify both `IncludeAncestors` and `IncludeDescendants`. |

### `Frequency_FrequencyConfig_post`

A configuration endpoint which allows creating/editing  
frequency counters, increments, and caps in a single call

| Field | Type | Required | Description |
|---|---|---|---|
| BidLists | array<`Frequency_FrequencyBidList_post`> |  | Bid lists apply frequency settings to ad groups, campaigns, and other entities by associating the bid list with the entity and enabling the relationship for the entity. Bid lists are used to define frequency caps, set frequency goals, and adjust bids based on the associated counter. |
| Counter | `Frequency_FrequencyCounter_post` |  | A frequency counter defines the framework for tracking the number of times a user is served an ad during a specific period of time. _(nullable)_ |
| IncrementByAllEntitiesAssociatedWithBidLists | boolean |  | If set to `true`, the ad groups, campaigns, advertisers, or partners whose IDs are specified in the respective `AssociatedAdGroups`, `AssociatedCampaigns`, `AssociatedAdvertisers`, or `AssociatedPartners` arrays of the bid list are used as increments for this frequency configuration.   **IMPORTANT**: The `Increments` array must be empty if included in the request, and at least one bid list with at least one associated entity must be provided in the `BidLists` array of the request.   If set to `false`, the entities whose IDs are specified in the `Increments` array are used as increments for this frequency configuration. This is the default value. |
| Increments | `Frequency_Increment` |  | Entities (partners, advertisers, campaigns, and ad groups) that serve impressions and increase the user's frequency count for the associated counter.   **IMPORTANT**: If you want to use the associated ad groups, campaigns, advertisers, or partners whose IDs are specified in the respective `AssociatedAdGroups`, `AssociatedCampaigns`, `AssociatedAdvertisers`, or `AssociatedPartners` arrays of the specified bid lists to be used as increments, leave this property empty and set the `IncrementByAllEntitiesAssociatedWithBidLists` flag to `true`. |

### `Frequency_FrequencyConfig_put`

A configuration endpoint which allows creating/editing  
frequency counters, increments, and caps in a single call

| Field | Type | Required | Description |
|---|---|---|---|
| BidLists | array<`Frequency_FrequencyBidList_put`> |  | Bid lists apply frequency settings to ad groups, campaigns, and other entities by associating the bid list with the entity and enabling the relationship for the entity. Bid lists are used to define frequency caps, set frequency goals, and adjust bids based on the associated counter. |
| Counter | `Frequency_FrequencyCounter_put` |  | A frequency counter defines the framework for tracking the number of times a user is served an ad during a specific period of time. _(nullable)_ |
| IncrementByAllEntitiesAssociatedWithBidLists | boolean |  | If set to `true`, the ad groups, campaigns, advertisers, or partners whose IDs are specified in the respective `AssociatedAdGroups`, `AssociatedCampaigns`, `AssociatedAdvertisers`, or `AssociatedPartners` arrays of the bid list are used as increments for this frequency configuration.   **IMPORTANT**: The `Increments` array must be empty if included in the request, and at least one bid list with at least one associated entity must be provided in the `BidLists` array of the request.   If set to `false`, the entities whose IDs are specified in the `Increments` array are used as increments for this frequency configuration. This is the default value. |
| Increments | `Frequency_Increment` |  | Entities (partners, advertisers, campaigns, and ad groups) that serve impressions and increase the user's frequency count for the associated counter.   **IMPORTANT**: If you want to use the associated ad groups, campaigns, advertisers, or partners whose IDs are specified in the respective `AssociatedAdGroups`, `AssociatedCampaigns`, `AssociatedAdvertisers`, or `AssociatedPartners` arrays of the specified bid lists to be used as increments, leave this property empty and set the `IncrementByAllEntitiesAssociatedWithBidLists` flag to `true`. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_FrequencyConfig_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`Frequency_FrequencyConfig`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `Frequency_FrequencyBidList`

| Field | Type | Required | Description |
|---|---|---|---|
| AssociatedAdGroups | array<string> |  | A list of IDs of ad groups where the bid list is associated and enabled. |
| AssociatedAdvertisers | array<string> |  | A list of IDs of advertisers where the bid list is associated and enabled. |
| AssociatedCampaigns | array<string> |  | A list of IDs of campaigns where the bid list is associated and enabled. |
| BidLines | array<`Frequency_FrequencyBidLine`> |  | A list of frequency bid lines that are used to calculate the adjustment for this bid list, along with the `ResolutionType` value in the bid list. See also [Frequency Bid Adjustments](/v3/portal/api/doc/FrequencyConfigurationBasicBidAdjustments). |
| BidListAdjustmentType | `DimensionalBidding_BidListAdjustmentType` |  | The method for determining how the bid adjustment is applied when an impression doesn't match a bid line. This type is set when a bid list is created and cannot be changed afterward.   If an impression matches multiple bid lists with different bid list adjustment types, the bid adjustments are multiplied together to get the final bid. For example, if an impression gets a bid adjustment of 0.75 from an optimized list and a bid adjustment of 0 from a block list, the final bid adjustment is 0.75*0=0. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |
| BidListId | string |  | The platform ID of the bid list.    Here's what you need to know about bid lists in frequency configurations:   - If included in a POST request, the specified bid list must exist.   - Any bid list changes made in the request modify the existing bid list.   - If the bid list contains bid lines for the counter ID specified in the request, the bid lines included with the request overwrite the existing bid lines for the specified counter ID. Bid lines for other counter IDs that are not included in the request remain unchanged. |
| BidListOwner | `DimensionalBidding_BidListOwner` |  | The entity type that owns the bid list. The default type is `AdGroup`. |
| BidListOwnerId | string |  | The platform ID of the entity that owns the bid list. |
| Name | string |  | The bid list name. If not specified on create, the name automatically generated. _(maxLength 512)_ |
| NumberOfBidLines | integer (int32) |  | The total number of bid lines in the bid list. This is a read-only property set on GET. |

### `Frequency_FrequencyCounter`

A frequency counter defines the framework for tracking the number of times a user is served an ad during a specific period of time.

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The platform ID of the advertiser that owns the counter. This property is required when creating a counter if no `PartnerId` value is provided. If you don't see the `PartnerId` property, contact your Account Manager for persmissions.        IMPORTANT: After the counter is created, you cannot update this value. Attempts to update the value will be ignored and return a success response. |
| CounterAttribute | `Frequency_FrequencyCounterAttribute` |  | An optional flag that you can set to configure the counter for special use. The default value is `None`. |
| CounterId | string |  | The platform ID for the frequency counter.    If provided when creating a counter, this value is ignored. On update, this property is required. |
| CounterName | string |  | The counter name.   **IMPORTANT**: If provided, the name must contain only whitespace and alphanumeric characters. _(maxLength 512)_ |
| ResetIntervalInMinutes | integer (int32) |  | The period of time (in minutes) during which the counter tracks a user's frequency count before resetting the count to 0.   For example, if a user received their first increment at 12:00 and this property was set to `5`, the counter will track frequency from 12:00 through 12:05 and then reset the count to 0. The next time a user appears, for example, at 15:15, the counter would track frequency from 15:15-15:20 and then reset the count to 0 again. See also [Frequency](/v3/portal/api/doc/Frequency).   **IMPORTANT**: This property value must be greater than 0. |

### `Frequency_Increment`

| Field | Type | Required | Description |
|---|---|---|---|
| AdGroups | array<string> |  | A list of IDs of ad groups that increment the counter when an impression is served for the specified ad groups. |
| Advertisers | array<string> |  | A list of IDs of advertisers that increment the counter when an impression is served for the specified advertisers, including their campaigns and ad groups. |
| Campaigns | array<string> |  | A list of IDs of campaigns that increment the counter when an impression is served for the specified campaigns and their ad groups. |

### `Frequency_AssociatedEntity`

Type: string enum(AdGroup, Campaign, Advertiser, Partner)

### `Frequency_DetailLevel`

Type: string enum(EntityOnly, IncludeAncestors, IncludeDescendants)

### `Frequency_FrequencyBidList_post`

| Field | Type | Required | Description |
|---|---|---|---|
| BidLines | array<`Frequency_FrequencyBidLine_post`> | yes | A list of frequency bid lines that are used to calculate the adjustment for this bid list, along with the `ResolutionType` value in the bid list. See also [Frequency Bid Adjustments](/v3/portal/api/doc/FrequencyConfigurationBasicBidAdjustments). |
| AssociatedAdGroups | array<string> |  | A list of IDs of ad groups where the bid list is associated and enabled. |
| AssociatedAdvertisers | array<string> |  | A list of IDs of advertisers where the bid list is associated and enabled. |
| AssociatedCampaigns | array<string> |  | A list of IDs of campaigns where the bid list is associated and enabled. |
| BidListAdjustmentType | `DimensionalBidding_BidListAdjustmentType` |  | The method for determining how the bid adjustment is applied when an impression doesn't match a bid line. This type is set when a bid list is created and cannot be changed afterward.   If an impression matches multiple bid lists with different bid list adjustment types, the bid adjustments are multiplied together to get the final bid. For example, if an impression gets a bid adjustment of 0.75 from an optimized list and a bid adjustment of 0 from a block list, the final bid adjustment is 0.75*0=0. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |
| BidListId | string |  | The platform ID of the bid list.    Here's what you need to know about bid lists in frequency configurations:   - If included in a POST request, the specified bid list must exist.   - Any bid list changes made in the request modify the existing bid list.   - If the bid list contains bid lines for the counter ID specified in the request, the bid lines included with the request overwrite the existing bid lines for the specified counter ID. Bid lines for other counter IDs that are not included in the request remain unchanged. |
| BidListOwner | `DimensionalBidding_BidListOwner` |  | The entity type that owns the bid list. The default type is `AdGroup`. |
| BidListOwnerId | string |  | The platform ID of the entity that owns the bid list. |
| Name | string |  | The bid list name. If not specified on create, the name automatically generated. _(maxLength 512)_ |
| NumberOfBidLines | integer (int32) |  | The total number of bid lines in the bid list. This is a read-only property set on GET. |

### `Frequency_FrequencyCounter_post`

A frequency counter defines the framework for tracking the number of times a user is served an ad during a specific period of time.

| Field | Type | Required | Description |
|---|---|---|---|
| ResetIntervalInMinutes | integer (int32) | yes | The period of time (in minutes) during which the counter tracks a user's frequency count before resetting the count to 0.   For example, if a user received their first increment at 12:00 and this property was set to `5`, the counter will track frequency from 12:00 through 12:05 and then reset the count to 0. The next time a user appears, for example, at 15:15, the counter would track frequency from 15:15-15:20 and then reset the count to 0 again. See also [Frequency](/v3/portal/api/doc/Frequency).   **IMPORTANT**: This property value must be greater than 0. |
| AdvertiserId | string |  | The platform ID of the advertiser that owns the counter. This property is required when creating a counter if no `PartnerId` value is provided. If you don't see the `PartnerId` property, contact your Account Manager for persmissions.        IMPORTANT: After the counter is created, you cannot update this value. Attempts to update the value will be ignored and return a success response. |
| CounterAttribute | `Frequency_FrequencyCounterAttribute` |  | An optional flag that you can set to configure the counter for special use. The default value is `None`. |
| CounterId | string |  | The platform ID for the frequency counter.    If provided when creating a counter, this value is ignored. On update, this property is required. |
| CounterName | string |  | The counter name.   **IMPORTANT**: If provided, the name must contain only whitespace and alphanumeric characters. _(maxLength 512)_ |

### `Frequency_FrequencyBidList_put`

| Field | Type | Required | Description |
|---|---|---|---|
| AssociatedAdGroups | array<string> |  | A list of IDs of ad groups where the bid list is associated and enabled. |
| AssociatedAdvertisers | array<string> |  | A list of IDs of advertisers where the bid list is associated and enabled. |
| AssociatedCampaigns | array<string> |  | A list of IDs of campaigns where the bid list is associated and enabled. |
| BidLines | array<`Frequency_FrequencyBidLine_put`> |  | A list of frequency bid lines that are used to calculate the adjustment for this bid list, along with the `ResolutionType` value in the bid list. See also [Frequency Bid Adjustments](/v3/portal/api/doc/FrequencyConfigurationBasicBidAdjustments). |
| BidListId | string |  | The platform ID of the bid list.    Here's what you need to know about bid lists in frequency configurations:   - If included in a POST request, the specified bid list must exist.   - Any bid list changes made in the request modify the existing bid list.   - If the bid list contains bid lines for the counter ID specified in the request, the bid lines included with the request overwrite the existing bid lines for the specified counter ID. Bid lines for other counter IDs that are not included in the request remain unchanged. |
| BidListOwner | `DimensionalBidding_BidListOwner` |  | The entity type that owns the bid list. The default type is `AdGroup`. |
| BidListOwnerId | string |  | The platform ID of the entity that owns the bid list. |
| Name | string |  | The bid list name. If not specified on create, the name automatically generated. _(maxLength 512)_ |
| NumberOfBidLines | integer (int32) |  | The total number of bid lines in the bid list. This is a read-only property set on GET. |

### `Frequency_FrequencyCounter_put`

A frequency counter defines the framework for tracking the number of times a user is served an ad during a specific period of time.

| Field | Type | Required | Description |
|---|---|---|---|
| CounterId | string | yes | The platform ID for the frequency counter.    If provided when creating a counter, this value is ignored. On update, this property is required. |
| AdvertiserId | string |  | The platform ID of the advertiser that owns the counter. This property is required when creating a counter if no `PartnerId` value is provided. If you don't see the `PartnerId` property, contact your Account Manager for persmissions.        IMPORTANT: After the counter is created, you cannot update this value. Attempts to update the value will be ignored and return a success response. |
| CounterAttribute | `Frequency_FrequencyCounterAttribute` |  | An optional flag that you can set to configure the counter for special use. The default value is `None`. |
| CounterName | string |  | The counter name.   **IMPORTANT**: If provided, the name must contain only whitespace and alphanumeric characters. _(maxLength 512)_ |
| ResetIntervalInMinutes | integer (int32) |  | The period of time (in minutes) during which the counter tracks a user's frequency count before resetting the count to 0.   For example, if a user received their first increment at 12:00 and this property was set to `5`, the counter will track frequency from 12:00 through 12:05 and then reset the count to 0. The next time a user appears, for example, at 15:15, the counter would track frequency from 15:15-15:20 and then reset the count to 0 again. See also [Frequency](/v3/portal/api/doc/Frequency).   **IMPORTANT**: This property value must be greater than 0. |

### `DimensionalBidding_BidListAdjustmentType`

Type: string enum(BlockList, TargetList, Optimized)

### `DimensionalBidding_BidListOwner`

Type: string enum(AdGroup, Campaign, Advertiser, Partner, Global)

### `Frequency_FrequencyBidLine`

| Field | Type | Required | Description |
|---|---|---|---|
| BidAdjustment | number (double) |  | The multiplier applied to the ad group's `BaseBidCPM` value for this bid line when the impression matches this frequency range.   Here's what you need to know:   - For bid lists of type `BlockList`, the default value is 0.   - For bid lists of type `TargetList` or `Optimized`, the default value is 1.   - For frequency caps using bid lists of type `TargetList` and frequency goals bid lists of type `Optimized` with `VolumeControlPriority` settings, set the bid adjustment value to 1. If you want to optimize frequency bid adjustments, create a separate optimized list with the bid adjustment value. |
| Range | `TheTradeDesk.AdPlatform_NonNullRange_integer_int32__` |  | The minimum and maximum number of times an ad to be served to a user within the time period defined by the counter's `ResetIntervalInMinutes` value for each frequency range in the bid list.   Here's what you need to know about setting the range values:   - The minimum value for the `Min` property for frequency caps is 0.    - The minimum value for the `Min` property for frequency goals is 1.   - The minimum value for the `Max` property for frequency caps and goals is the respective `Min` property value + 1. |
| VolumeControlPriority | `DimensionalBidding_VolumeControlPriority` |  | The volume control priority to apply to the adjustment.   - For frequency caps, set this property to `Neutral`.    - For frequency goals, set this property to `FrequencyGoal`.   For details, see [Volume Control](/v3/portal/api/doc/VolumeControl). |

### `Frequency_FrequencyCounterAttribute`

Type: string enum(None, AllowUIGroupConfiguration, RestrictedFrequencyGroup, RestrictedCampaignInterval, RestrictedCampaignLifetime, CrossDSP)

### `Frequency_FrequencyBidLine_post`

| Field | Type | Required | Description |
|---|---|---|---|
| Range | `TheTradeDesk.AdPlatform_NonNullRange_integer_int32__` | yes | The minimum and maximum number of times an ad to be served to a user within the time period defined by the counter's `ResetIntervalInMinutes` value for each frequency range in the bid list.   Here's what you need to know about setting the range values:   - The minimum value for the `Min` property for frequency caps is 0.    - The minimum value for the `Min` property for frequency goals is 1.   - The minimum value for the `Max` property for frequency caps and goals is the respective `Min` property value + 1. |
| BidAdjustment | number (double) |  | The multiplier applied to the ad group's `BaseBidCPM` value for this bid line when the impression matches this frequency range.   Here's what you need to know:   - For bid lists of type `BlockList`, the default value is 0.   - For bid lists of type `TargetList` or `Optimized`, the default value is 1.   - For frequency caps using bid lists of type `TargetList` and frequency goals bid lists of type `Optimized` with `VolumeControlPriority` settings, set the bid adjustment value to 1. If you want to optimize frequency bid adjustments, create a separate optimized list with the bid adjustment value. |
| VolumeControlPriority | `DimensionalBidding_VolumeControlPriority` |  | The volume control priority to apply to the adjustment.   - For frequency caps, set this property to `Neutral`.    - For frequency goals, set this property to `FrequencyGoal`.   For details, see [Volume Control](/v3/portal/api/doc/VolumeControl). |

### `Frequency_FrequencyBidLine_put`

| Field | Type | Required | Description |
|---|---|---|---|
| BidAdjustment | number (double) |  | The multiplier applied to the ad group's `BaseBidCPM` value for this bid line when the impression matches this frequency range.   Here's what you need to know:   - For bid lists of type `BlockList`, the default value is 0.   - For bid lists of type `TargetList` or `Optimized`, the default value is 1.   - For frequency caps using bid lists of type `TargetList` and frequency goals bid lists of type `Optimized` with `VolumeControlPriority` settings, set the bid adjustment value to 1. If you want to optimize frequency bid adjustments, create a separate optimized list with the bid adjustment value. |
| Range | `TheTradeDesk.AdPlatform_NonNullRange_integer_int32__` |  | The minimum and maximum number of times an ad to be served to a user within the time period defined by the counter's `ResetIntervalInMinutes` value for each frequency range in the bid list.   Here's what you need to know about setting the range values:   - The minimum value for the `Min` property for frequency caps is 0.    - The minimum value for the `Min` property for frequency goals is 1.   - The minimum value for the `Max` property for frequency caps and goals is the respective `Min` property value + 1. |
| VolumeControlPriority | `DimensionalBidding_VolumeControlPriority` |  | The volume control priority to apply to the adjustment.   - For frequency caps, set this property to `Neutral`.    - For frequency goals, set this property to `FrequencyGoal`.   For details, see [Volume Control](/v3/portal/api/doc/VolumeControl). |

### `DimensionalBidding_VolumeControlPriority`

Type: string enum(Neutral, One, Two, FrequencyGoal, Negative)

### `TheTradeDesk.AdPlatform_NonNullRange_integer_int32__`

| Field | Type | Required | Description |
|---|---|---|---|
| Max | integer (int32) |  |  |
| Min | integer (int32) |  |  |

