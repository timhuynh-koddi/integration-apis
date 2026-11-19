# Partner

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 6

---

## PUT /v3/partner

Update an existing partner.

Operation ID: `put-partner`

**Request body** (`application/json`, required): `Partner_Partner_put`

**Response 200** (`application/json`): `Partner_Partner`

---

## GET /v3/partner/query/facets

Get the facets of Partners that can be queried.

Operation ID: `get-partner-query-facets`

**Response 200** (`application/json`): `Partner_PartnerFacets`

---

## POST /v3/partner/query

Get all Partners that are accessible.

Operation ID: `post-partner-query`

**Request body** (`application/json`, required): `Partner_PartnerQuery`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_Partner_`

---

## GET /v3/partner/{partnerId}

Get an existing partner by ID.

Operation ID: `get-partner-partnerid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| partnerId | path | string | yes | The ID of the partner to retrieve. |

**Response 200** (`application/json`): `Partner_Partner`

---

## GET /v3/partner/name/{partnerId}

Get the identifier and name for a Partner based on identifier

Operation ID: `get-partner-name-partnerid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| partnerId | path | string | yes |  |

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_IdName`

---

## POST /v3/partner/advertiser/bidlinecounts

Paged query to retrieve the bidline counts for advertisers owned by a given partner.  
Maximum page size for this query is 1,000.

Operation ID: `post-partner-advertiser-bidlinecounts`

**Request body** (`application/json`, required): `Partner_PartnerOwnedAdvertiserBidLineCountsRequest_post`

**Response 200** (`application/json`): `Partner_PartnerOwnedAdvertiserBidLineCountsPage`

---

## Schemas

### `Partner_Partner`

| Field | Type | Required | Description |
|---|---|---|---|
| AssociatedBidLists | array<`DimensionalBidding_AssociatedBidList`> |  | The BidLists that are associated with this Partner.   If a BidList is associated, and enabled then its adjustments will be applied during bidding to all ad groups in the partner. _(nullable)_ |
| PartnerId | string |  | The ID of the Partner. This field is read-only. _(nullable)_ |
| PartnerIdInteger | integer (int32) |  | The integer ID of the partner. This ID is typically used as a buyer or seat ID in the Easy Proposal Activation API. This is a read-only property. |
| PartnerName | string |  | The name of the Partner. This field is read-only. |

### `Partner_PartnerFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| SortingFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_PartnerSortingField_`> |  | The fields by which Partners may be sorted in a query. This list may be extended at any time, so please design accordingly. |

### `Partner_PartnerOwnedAdvertiserBidLineCountsPage`

| Field | Type | Required | Description |
|---|---|---|---|
| PartnerBidLineCount | integer (int64) |  | The number of bidlines currently associated with the partner. |
| PartnerBidLineLimit | integer (int64) |  | The maximum number of bidlines that can be associated with this partner. |
| PartnerId | string |  | The ID of the partner. _(nullable)_ |
| Result | array<`Advertiser_AdvertiserBidLineCounts`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `Partner_PartnerOwnedAdvertiserBidLineCountsRequest_post`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| PartnerId | string | yes | The ID of the partner making the query |

### `Partner_PartnerQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| SearchTerms | array<string> |  | A list of terms, such as partner platform IDs, integer IDs, or names, by which to filter search results. For a partner to be included in search results, at least one of the specified terms must be matched.   If not specified, empty, or null, this property is ignored. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_PartnerSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed. See GET partner/query/facets for the list of possible sort field IDs.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by Name ascending. _(nullable)_ |

### `Partner_Partner_put`

| Field | Type | Required | Description |
|---|---|---|---|
| PartnerId | string | yes | The ID of the Partner. This field is read-only. |
| AssociatedBidLists | array<`DimensionalBidding_AssociatedBidList_put`> |  | The BidLists that are associated with this Partner.   If a BidList is associated, and enabled then its adjustments will be applied during bidding to all ad groups in the partner. _(nullable)_ |
| PartnerIdInteger | integer (int32) |  | The integer ID of the partner. This ID is typically used as a buyer or seat ID in the Easy Proposal Activation API. This is a read-only property. |
| PartnerName | string |  | The name of the Partner. This field is read-only. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_IdName`

| Field | Type | Required | Description |
|---|---|---|---|
| Id | string |  | The identifier for the object instance |
| Name | string |  | The name for the object instance |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_Partner_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`Partner_Partner`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `DimensionalBidding_AssociatedBidList`

| Field | Type | Required | Description |
|---|---|---|---|
| BidListAdjustmentType | `DimensionalBidding_BidListAdjustmentType` |  | The method for determining how the bid adjustment is applied when an impression doesn't match a bid line. This type is set when a bid list is created and cannot be changed afterward.   If an impression matches multiple bid lists with different bid list adjustment types, the bid adjustments are multiplied together to get the final bid. For example, if an impression gets a bid adjustment of 0.75 from an optimized list and a bid adjustment of 0 from a block list, the final bid adjustment is 0.75*0=0. For details, see [Bid Lists](/v3/portal/api/doc/BidList). |
| BidListDimensions | array<`DimensionalBidding_DimensionDescriptor`> |  | A list of dimensions belonging to the bid list, such as ad format, device type, and domain fragment. This property is read-only. _(nullable)_ |
| BidListId | string |  | The platform ID of the bid list. It is ignored during creation. |
| BidListSource | `DimensionalBidding_BidListSource` |  | The source of this bid list. This property is read-only. |
| IsDefaultForDimension | boolean |  | If set to `true`, the bid list is the default for the specified dimension combination.   The default value is `false`. |
| IsEnabled | boolean |  | If set to `true`, the bid list adjustments are used in bidding.   The default value is `false`.   **IMPORTANT**: To avoid disabling the bid list and potential validation issues, be sure to set this property to `true` in PUT ad group calls. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_PartnerSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `Partner_PartnerSortingField` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `Advertiser_AdvertiserBidLineCounts`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserBidLineCount | integer (int64) |  | The number of bidlines currently associated with the advertiser. |
| AdvertiserBidLineLimit | integer (int64) |  | The maximum number of bidlines that can be associated with this advertiser. |
| AdvertiserId | string |  | The ID of the advertiser. _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_PartnerSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `Partner_PartnerSortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `DimensionalBidding_AssociatedBidList_put`

| Field | Type | Required | Description |
|---|---|---|---|
| BidListId | string | yes | The platform ID of the bid list. It is ignored during creation. |
| IsDefaultForDimension | boolean |  | If set to `true`, the bid list is the default for the specified dimension combination.   The default value is `false`. |
| IsEnabled | boolean |  | If set to `true`, the bid list adjustments are used in bidding.   The default value is `false`.   **IMPORTANT**: To avoid disabling the bid list and potential validation issues, be sure to set this property to `true` in PUT ad group calls. |

### `DimensionalBidding_BidListAdjustmentType`

Type: string enum(BlockList, TargetList, Optimized)

### `DimensionalBidding_BidListSource`

Type: string enum(User, ManualRecommendation, AutoAppliedRecommendation, UserBulkEdit)

### `DimensionalBidding_DimensionDescriptor`

Type: string enum(UnknownDimension, HasAdFormatId, HasDomainFragmentId, HasUniversalCategoryTaxonomyId, HasAdvertiserTargetingDataId, HasBrowserId, HasCarrierId, HasDeviceModelId, HasDeviceTypeId, HasGeoSegmentId, HasHourOfWeek, HasLanguageId, HasOsId, HasPrivateContractId, HasRecencyWindowInMinutes, HasRenderingContextId, HasFactualGeostoreTargetingDataId, HasSupplyVendorId, HasTemperatureBucketInCelsius, HasThirdPartyData, HasAdsTxtSellerTypeId, HasVideoMutedStateId, HasVideoPlaybackTypeId, HasVideoPlayerSizeId, HasVideoQualityId, HasVideoSkippabilityId, HasFactualProximityDataId, HasImpressionPlacementId, HasVideoTruthScoreRange, HasVideoViewabilityScoreRange, HasDisplayViewabilityScoreRange, HasPeer39LanguageId, HasIntegralContextualCategoryId, HasPeer39ContextualCategoryId, HasDoubleVerifyContextualCategoryId, HasIntegralBrandSafetyCategoryId, HasIntegralVideoBrandSafetyCategoryId, HasPeer39BrandSafetyCategoryId, HasDoubleVerifyBrandSafetyCategoryId, HasIntegralPageQualityCategoryId, HasIntegralVideoPageQualityCategoryId, HasPeer39PageQualityCategoryId, HasDoubleVerifyBotAvoidanceCategoryId, HasContextualAppCategoryId, HasPublisherId, HasIntegralViewabilityCategoryId, HasIntegralVideoViewabilityCategoryId, HasDoubleVerifyViewabilityCategoryId, HasDoubleVerifyVideoViewabilityCategoryId, HasFrequencyAdjustmentId, HasPeer39ViewabilityCategoryId, HasVideoCompletionRateScoreRange, HasInternetConnectionTypeId, HasRTBAsiaPageQualityCategoryId, HasRTBAsiaVideoPageQualityCategoryId, HasTTDContextualCategoryId, HasSupplyPathOptimizationListId, HasMarketTypeId, HasContextualSupplyVendorGenreId, HasContextualSupplyVendorCategoryId, HasWeatherConditionId, HasFrequencyV2AdjustmentId, HasSemasioContextualCategoryId, HasSellerId, HasDigitalOutOfHomeVenueTypeId, HasNativePlacementTypeId, HasTTDNativeContextTypeId, HasDomainClassId, HasGeofenceThirdPartyDataAndBrand, HasPreBidContextualCategoryId, HasTencentPageQualityCategoryId, HasContentGenre, HasContentLivestream, HasContentProductionQuality, HasContentRating, HasContentDuration, HasTVQualityIndexRange, HasAtmosphericCondition, HasMarketplaceId, HasAudienceReachPercentageTierId, HasAdLoadCategory, HasFullReferrerUrl, HasLikelyRefreshRate, HasContentTransparency, HasIdiosyncraticSegmentId, HasRewarded, HasSellerRelationshipTypeId, HasAdToContentRatioRange, HasAdsInViewRange, HasExtendedZipCodeGroupSegmentThirdPartyDataId, HasContentLanguage)

### `Partner_PartnerSortingField`

Type: string enum(Name)

