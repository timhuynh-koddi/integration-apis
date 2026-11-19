# DMP

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 8

---

## GET /v3/dmp/firstparty/facets

**DEPRECATED.** We recommend using the [`advertiser` → `firstPartyData` query](/v3/portal/api/gql-doc/advertiser) with filtering in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work.

Get the facets of First Party Data that can be retrieved and/or queried.

Operation ID: `get-dmp-firstparty-facets`

**Response 200** (`application/json`): `DMP_FirstPartyDataFacets`

---

## POST /v3/dmp/firstparty/advertiser

**DEPRECATED.** We recommend using the [`advertiser` → `firstPartyData` query](/v3/portal/api/gql-doc/advertiser) with filtering in GraphQL for improved performance and expanded functionality. Existing integrations using this endpoint will continue to work.

Retrieve first-party data for a given advertiser ID based on specified search parameters.  
**TIP**: You can use the equivalent advertiser GraphQL query to enhance performance, customize criteria, and, if needed, expand your search across multiple advertisers. For details, see [Look Up Advertiser Data Segments](/v3/portal/api/doc/AdvertiserGQLQueryExamples#advertiser-data-segment-query).

Operation ID: `post-dmp-firstparty-advertiser`

**Request body** (`application/json`, required): `DMP_FirstPartyDataQueryForAdvertiser_post`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_FirstPartyData_`

---

## GET /v3/dmp/lookalikemodel/build/{firstPartyDataId}

Build a Look-Alike Model for a First Party Data Id that does not have a Look-Alike Model (OR) rebuild the Look-Alike Model for a First Party Data Id.    
Look-Alike Models may be built for First Party Datas that have their LookAlikeEligibility status set to 'Eligible'.    
Use POST dmp/firstparty/advertiser to query whether a First Party Data is eligible for Look-Alike Modeling.   
When a Look-Alike Model is requested for the first time, it gets built within 5-10 minutes of when it was requested.  This sets the generation date on the model, and once it has been built, every subsequent build gets queued with a 24 hour time lag.    
Please note that all time lags are subject to change, and design accordingly.  
It is recommended that you examine the status of the Look-Alike Model before attempting to retrieve the Third Party Data associated with the Model.

Operation ID: `get-dmp-lookalikemodel-build-firstpartydataid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| firstPartyDataId | path | integer (int64) | yes | The id of the First Party Data. |

**Response 200** (`application/json`): `DMP_LookAlikeModelDetails`

---

## GET /v3/dmp/lookalikemodel/{firstPartyDataId}

Get the Look-Alike Model that exists for a First Party Data Id.    
If the First Party data is not accessible or if a Look-Alike Model does not exist for the First Party Data Id,  this will throw an error.   
It is recommended that you examine the status of the model returned in this call, before attempting to retrieve the Look-Alike Third Party Data.

Operation ID: `get-dmp-lookalikemodel-firstpartydataid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| firstPartyDataId | path | integer (int64) | yes |  |

**Response 200** (`application/json`): `DMP_LookAlikeModelDetails`

---

## GET /v3/dmp/lookalikethirdpartydata/facets/{advertiserId}

Get the Facets by which the Look-Alike Third Party data may be retrieved/queried.

Operation ID: `get-dmp-lookalikethirdpartydata-facets-advertiserid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string | yes |  |

**Response 200** (`application/json`): `DMP_LookAlikeThirdPartyDataFacets`

---

## POST /v3/dmp/lookalikethirdpartydata/query

Retrieve the Third Party Data that are statistically similar to the First Party Data Id.  
To use this call, you must first build a Look-Alike model for the First Party Data using the GET dmp/lookalikemodel/build call.    
Once the Look-Alike Model Build Status is 'Ready', you may use this query to retrive the resulting Look-Alike Third Party Data.  
It is recommended that Third Party Data Look-Alikes be requested only for models that are 'Ready', and do not have a 'Queued' status.  
If the Look-Alike Model has a Queued status, it is likely that you might receive outdated data.    
Look-Alike Models once generated, are re-generated periodically, if a build has been requested on them by calling dmp/lookalikemodel/build/{firstpartydataid}.    
This re-generation lag is 24 hours currently(after Last Generation Date), but might change in the future, so please design accordingly.

Operation ID: `post-dmp-lookalikethirdpartydata-query`

**Request body** (`application/json`, required): `DMP_LookAlikeThirdPartyDataQuery`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_LookAlikeThirdPartyData_`

---

## GET /v3/dmp/thirdparty/facets/{advertiserId}

Get the facets of Third Party Data that can be retrieved and/or queried by the Advertiser.

Operation ID: `get-dmp-thirdparty-facets-advertiserid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string | yes | The platform ID of the advertiser that will use the third-party data. |

**Response 200** (`application/json`): `DMP_ThirdPartyDataFacets`

---

## POST /v3/dmp/thirdparty/advertiser

Retrieve third-party data that matches the request. For details about how to maximize performance and reduce likelihood of timeouts, see [Rate Limits](/v3/portal/api/doc/RateLimits).  
**IMPORTANT**: Segments are returned only if either active ID or received ID count is not `null` and is greater than zero. For details on active and received IDs, see [Unique ID Counting Methodologies](/v3/portal/api/doc/IdCountingMethodologies).

Operation ID: `post-dmp-thirdparty-advertiser`

**Request body** (`application/json`, required): `DMP_ThirdPartyDataQueryForAdvertiser_post`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_ThirdPartyData_`

---

## Schemas

### `DMP_FirstPartyDataFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| DataTypes | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_FirstPartyDataType_`> |  | The types of First Party Data that can be queried and returned by the API. This list may be extended at any time, so please design accordingly. |
| LookAlikeEligibilities | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_Eligibility_`> |  | The Look-Alike Eligibility statuses by which the First Party data may be queried.  This list may be extended at any time, so please design accordingly. |
| LookAlikeModelBuildStatuses | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_LookAlikeModelBuildStatus_`> |  | The Look-Alike Build statuses by which the First Party data may be queried.  This list may be extended at any time, so please design accordingly. _(nullable)_ |
| LookAlikeModelResultStatuses | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_LookAlikeModelResultStatus_`> |  | The Look-Alike Result statuses by which the First Party data may be queried.  This list may be extended at any time, so please design accordingly. _(nullable)_ |
| SortingFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_FirstPartyDataSortingField_`> |  | The fields by which First Party Data may be sorted in a query. This list may be extended at any time, so please design accordingly. |

### `DMP_FirstPartyDataQueryForAdvertiser_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser that is making the query. |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| DataTypes | array<`DMP_FirstPartyDataType`> |  | The types of First Party Data to return. Duplicate values are not allowed. See GET dmp/firstparty/facets for the list of possible data types.   If specified and not null, at least one value must be included. If not specified or null, this defaults to all First Party Data types. |
| IncludeActiveIDsCountExpandedFlag | boolean |  | When set to true, the ActiveIDsCountExpanded field will be generated and included in the response, and otherwise it will be null |
| LookAlikeModelBuildStatuses | array<`DMP_LookAlikeModelBuildStatus`> |  | The list of Look-Alike Build statuses to filter the First Party Data on.     Duplicate values are not allowed. See GET dmp/firstparty/facets for the list of possible Look-Alike Build statuses.   If specified and not null, at least one value must be included.  If not specified or null, all First Party Data regardless of their Look-Alike Build statuses will be returned. _(nullable)_ |
| LookAlikeModelEligibilities | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Eligibility`> |  | The list of Look-Alike Model Eligibility statuses to filter the First Party Data on.     Duplicate values are not allowed. See GET dmp/firstparty/facets for the list of possible Eligibility statuses.   If specified and not null, at least one value must be included.  If not specified or null, this defaults to all Look-Alike Model Eligibility statuses. _(nullable)_ |
| LookAlikeModelResultStatuses | array<`DMP_LookAlikeModelResultStatus`> |  | The list of Look-Alike Result statuses to filter the First Party Data on.     Duplicate values are not allowed. See GET dmp/firstparty/facets for the list of possible Look-Alike Result statuses.   If specified and not null, at least one value must be included.  If not specified or null, all First Party Data regardless of their Look-Alike Result statuses will be returned. _(nullable)_ |
| SearchTerms | array<string> |  | A list of search terms by which to filter the returned data. All terms must be matched in the name, data type name/description or item ID in order for data to match.   If not specified, empty, or null, this property is ignored. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_FirstPartyDataSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed. See GET dmp/firstparty/facets for the list of possible sort field IDs for First Party Data.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If specified and not null, at least one field must be included. If not specified or null, this defaults to sorting by Name ascending. |
| UniqueCountMaximum | integer (int32) |  | When specified and not null, the `ActiveIdsCount` for a data element must be less than than or equal to this number in order to be returned in the results. _(nullable)_ |
| UniqueCountMinimum | integer (int32) |  | When specified and not null, the `ActiveIdsCount` for a data element must be greater than or equal to this number in order to be returned in the results. _(nullable)_ |

### `DMP_LookAlikeModelDetails`

| Field | Type | Required | Description |
|---|---|---|---|
| FirstPartyDataId | integer (int64) |  | The First Party Data that this Look-Alike Model belongs to. |
| LastGenerationDateUTC | string (date-time) |  | The UTC date when the Model was last generated.   A NULL would indicate that the Model has not been generated as yet. _(nullable)_ |
| LastRequestDateUTC | string (date-time) |  | The UTC Date when the Model was last requested to be built/rebuilt. |
| LookAlikeModelBuildStatus | `DMP_LookAlikeModelBuildStatus` |  | The build status of the Look-Alike Model indicating whether the Look-Alike Model has been built. |
| LookAlikeModelResultStatus | `DMP_LookAlikeModelResultStatus` |  | The Result status of the Look-Alike Model indicating whether the First Party Data has Third Party Data that are statistically similar to it. |

### `DMP_LookAlikeThirdPartyDataFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| Brands | array<`DMP_ThirdPartyDataBrand`> |  | The available brands of the Look-Alike Model Third Party Data. This list may be extended at any time, so please design accordingly. |
| Categories | array<`DMP_ThirdPartyDataCategory`> |  | The available categories of Look-Alike Model Third Party Data. This list may be extended at any time, so please design accordingly. |
| DataRateTypes | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ThirdPartyDataRateType_`> |  | The availale methods by which Look-Alike Model Third Party Data owners may charge for using their data. This list may be extended at any time, so please design accordingly. |
| SortingFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_LookAlikeThirdPartyDataSortingField_`> |  | The fields by which Look-Alike Model Third Party Data may be sorted in a query. This list may be extended at any time, so please design accordingly. |

### `DMP_LookAlikeThirdPartyDataQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| FirstPartyDataId | integer (int64) | yes | The ID of First Party Data for which to return Look-Alike Third Party Data (Third Party Data that represents users who are statistically similar to this First Party Data).     To use this call, you must first build a Look-Alike model for the First Party Data using the POST dmp/lookalikemodel/build call.     Once the Look-Alike Model is 'Ready', you may query the resulting Look-Alike Third Party Data via this query. |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `NULL` means the maximum number of elements allowed per page.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum value for this property is 25. The maximum limit is 100.   - If a large page size is passed in, fewer items may be returned. Check the total count to see if more items are available.   For example:   - If there are 70 items, `PageStartIndex` is 0, and `PageSize` is 100, only the 70 existing items will be returned.   - If there are 100 items, `PageStartIndex` is 50, and `PageSize` is 50, the last 50 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + ResultCount is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| BrandIds | array<string> |  | The brands of Look-Alike Model Third Party Data to return. Duplicate IDs are not allowed. See GET dmp/lookalikethirdpartydata/facets/ for the list of possible brands.   If not specified or null or empty, this defaults to all allowed Third Party Data Brands. _(nullable)_ |
| CategoryIds | array<integer (int64)> |  | The categories of Look-Alike Model Third Party Data to return. Duplicate IDs are not allowed. See GET dmp/lookalikethirdpartydata/facets/ for the taxonomy of categories.   If not specified or null or empty, this defaults to all Third Party Data Categories. _(nullable)_ |
| DataRateFilters | `DMP_ThirdPartyDataRateFilters` |  | When specified and not null, at least one of these  Rate Filters must match to be returned. The filters are OR'd together. Duplicate Data Rate Types are not allowed.   If not specified or null, this defaults to all available data rate types and values. _(nullable)_ |
| IncludeActiveIDsCountExpandedFlag | boolean |  | When set to true, the ActiveIDsCountExpanded field will be generated and included in the response, and otherwise it will be null |
| RelevanceRatioMaximum | number (double) |  | When specified and not null, this would indicate the maximum Relevance Ratio of the data returned. _(nullable)_ |
| RelevanceRatioMinimum | number (double) |  | When specified and not null, this would indicate the minimum Relevance Ratio of the data returned. _(nullable)_ |
| SearchTerms | array<string> |  | A list of search terms by which to filter the returned data. All terms must be matched in the paths or IDs in order for data to match.   If not specified, empty, or null, this property is ignored. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_LookAlikeThirdPartyDataSortingField_`> |  | The fields by which to sort the returned data. Duplicate field IDs are not allowed. See GET dmp/lookalikethirdpartydata/facets/ for the list of possible sort field IDs for Look-Alike Model Data.   Sorting will happen in the order the sort fields are specified in the list.   If not specified or null or empty, this defaults to sorting by Value Ratio ascending. _(nullable)_ |
| UniqueCountMaximum | integer (int32) |  | When specified and not null, the `ActiveIdsCount` for a data element must be less than than or equal to this number in order to be returned in the results. _(nullable)_ |
| UniqueCountMinimum | integer (int32) |  | When specified and not null, the `ActiveIdsCount` for a data element must be greater than or equal to this number in order to be returned in the results. _(nullable)_ |
| ValueRatioMaximum | number (double) |  | When specified and not null, this would indicate the maximum Value Ratio of the data returned. _(nullable)_ |
| ValueRatioMinimum | number (double) |  | When specified and not null, this would indicate the minimum Value Ratio of the data returned. _(nullable)_ |

### `DMP_ThirdPartyDataFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| AdEnvironments | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ThirdPartyDataAdEnvironment_`> |  | The ad environment by which Third Party Data may be filtered in a query. This list may be extended at any time, so please design accordingly. |
| Brands | array<`DMP_ThirdPartyDataBrand`> |  | The available brands of Third Party Data. This list may be extended at any time, so please design accordingly. |
| Categories | array<`DMP_ThirdPartyDataCategory`> |  | s. This list may be extended at any time, so please design accordingly. |
| Countries | array<`DMP_Country`> |  | The available countries of Third Party Data. This list may be extended at any time, so please design accordingly. |
| DataRateTypes | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ThirdPartyDataRateType_`> |  | The available methods by which Third Party Data owners may charge for using their data. This list may be extended at any time, so please design accordingly. |
| SortingFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ThirdPartyDataSortingField_`> |  | The fields by which Third Party Data may be sorted in a query. This list may be extended at any time, so please design accordingly. |

### `DMP_ThirdPartyDataQueryForAdvertiser_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser that is making the query. |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| AdEnvironment | `DMP_ThirdPartyDataAdEnvironment` |  | When specified and not null, the ad environment data must have to be returned. |
| AudienceUnlimitedOnly | boolean |  | If set to `true`, filters results to include only segments that are part of Audience Unlimited. The default value is `false`. |
| BrandIds | array<string> |  | The brands of Third Party Data to return. Duplicate IDs are not allowed. See GET dmp/thirdparty/facets for the list of possible brands.   If not specified or null or empty, this defaults to all allowed Third Party Data Brands. _(nullable)_ |
| CategoryIds | array<integer (int64)> |  | The categories of Third Party Data to return. Duplicate IDs are not allowed. See GET dmp/thirdparty/facets for the taxonomy of categories.   If not specified or null or empty, this defaults to all Third Party Data Categories. _(nullable)_ |
| CountryName | string |  | When specified and not null, the country name for which data must have to be returned. _(nullable)_ |
| DataRateFilters | `DMP_ThirdPartyDataRateFilters` |  | When specified and not null, at least one of these Third Party Data Rate Filters must match to be returned. The filters are OR'd together. Duplicate Data Rate Types are not allowed.   If not specified or null, this defaults to all available data rate types and values. _(nullable)_ |
| ExcludeTotalCounts | boolean |  | When set to true, the TotalFilteredCount and TotalUnfilteredCount properties will be ommitted from the response   which will give a slight performance increase |
| IncludeActiveIDsCountExpandedFlag | boolean |  | When set to true, the ActiveIDsCountExpanded field will be generated and included in the response, and otherwise it will be null |
| OnlyEligibleForSeeds | boolean |  | If set to `true`, filters results to include only segments that are eligible for creating seeds. The default value is `false`. _(KOKAI: This property is available only in Kokai.)_ |
| OnlyUsableForPlanningTool | boolean |  | When specified and set to true, only data segments that are usable for PlanningTool will be returned |
| SearchTerms | array<string> |  | A list of search terms by which to filter the returned data. All terms must be matched in the paths or IDs in order for data to match.   If not specified, empty, or null, this property is ignored. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_ThirdPartyDataSortingField_`> |  | The fields by which to sort the returned data. Duplicate field IDs are not allowed. See GET dmp/thirdparty/facets for the list of possible sort field IDs for Third Party Data.   Sorting will happen in the order the sort fields are specified in the list.   If not specified or null or empty, this defaults to sorting by Name ascending. _(nullable)_ |
| SupportsDynamicCreativeRules | boolean |  | Filters results to only include segments that are supported in the Dynamic Creative Rules feature. |
| ThirdPartyDataIds | array<string> |  | The Third Party Data IDs that you want to retrieve. IDs are specified with numeric third party data id and an optional brand in the form id\|brand.   These queries are optimized to retrieve the ids requested. Up to 1000 ids may be specified and paging is not supported: PageStartIndex   must be zero and PageSize (if specified) may not be less than the number of ids requested.   If not specified or null or empty, this defaults to all allowed Third Party Data IDs. _(nullable)_ |
| UniqueCountMaximum | integer (int32) |  | When specified and not null, the `ActiveIdsCount` for a data element must be less than than or equal to this number in order to be returned in the results. _(nullable)_ |
| UniqueCountMinimum | integer (int32) |  | When specified and not null, the `ActiveIdsCount` for a data element must be greater than or equal to this number in order to be returned in the results. _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_FirstPartyData_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`DMP_FirstPartyData`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_LookAlikeThirdPartyData_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`DMP_LookAlikeThirdPartyData`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_ThirdPartyData_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`DMP_ThirdPartyData`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_Eligibility_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Eligibility` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_FirstPartyDataSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `DMP_FirstPartyDataSortingField` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_FirstPartyDataType_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `DMP_FirstPartyDataType` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_LookAlikeModelBuildStatus_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `DMP_LookAlikeModelBuildStatus` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_LookAlikeModelResultStatus_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `DMP_LookAlikeModelResultStatus` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `DMP_FirstPartyDataType`

Type: string enum(Keyword, TrackingTag, IPAddressRange, ImportedAdvertiserData, ImportedAdvertiserDataWithBaseBid, HouseholdExtension, ClickRetargeting, DirectIPTargeting, PlayerEventStart, PlayerEventMidpoint, PlayerEventComplete, ThirdPartyImpression, FixedPriceUser, CrmData)

### `DMP_LookAlikeModelBuildStatus`

Type: string enum(NotRequested, Queued, Built)

### `DMP_LookAlikeModelResultStatus`

Type: string enum(NoResults, Ready)

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Eligibility`

Type: string enum(Eligible, NotEligible)

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_FirstPartyDataSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `DMP_FirstPartyDataSortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `DMP_ThirdPartyDataBrand`

| Field | Type | Required | Description |
|---|---|---|---|
| AllowedForPlanningTool | boolean |  | Whether or not the Third Party Data Brand can be used in PlanningTool. |
| BrandId | string |  | The unique ID that identifies a provider-managed brand. It is used to manage data rates. For details, see [Third-Party Data Rates](/v3/portal/data/doc/DataRatesOverview). |
| BrandName | string |  | The name that appears for this brand in the DMP. |

### `DMP_ThirdPartyDataCategory`

| Field | Type | Required | Description |
|---|---|---|---|
| CategoryId | integer (int64) |  | The ID of the Third Party Data Category |
| CategoryName | string |  | The name of the Third Party Data Category |
| Children | array<`DMP_ThirdPartyDataCategory`> |  | The child categories of the Third Party Data Category |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_LookAlikeThirdPartyDataSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `DMP_LookAlikeThirdPartyDataSortingField` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ThirdPartyDataRateType_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `DMP_ThirdPartyDataRateType` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `DMP_ThirdPartyDataRateFilters`

| Field | Type | Required | Description |
|---|---|---|---|
| CPMFilter | `DMP_ThirdPartyDataRateCPMFilter` |  | If specified and not null, Third Party Data must match this CPM filter to be returned by the query.   This is ORed with all other data rate filters. _(nullable)_ |
| PercentOfMediaCostFilter | `DMP_ThirdPartyDataRatePercentOfMediaCostFilter` |  | If specified and not null, Third Party Data must match this Percent of Media Cost filter to be returned by the query.   This is ORed with all other data rate filters. _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_LookAlikeThirdPartyDataSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `DMP_LookAlikeThirdPartyDataSortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `DMP_Country`

| Field | Type | Required | Description |
|---|---|---|---|
| CountryName | string |  | The name of the Third Party Data Country |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ThirdPartyDataAdEnvironment_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `DMP_ThirdPartyDataAdEnvironment` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ThirdPartyDataSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `DMP_ThirdPartyDataSortingField` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `DMP_ThirdPartyDataAdEnvironment`

Type: string enum(All, Web, InApp)

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_ThirdPartyDataSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `DMP_ThirdPartyDataSortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

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

### `DMP_LookAlikeThirdPartyData`

| Field | Type | Required | Description |
|---|---|---|---|
| FirstPartyDataId | integer (int64) |  | The ID of the First Party Data to which this Third Party Data is statistically similar. |
| RelevanceRatio | number (double) |  | A measure of how much more likely it is for your First Party Data to fall into a particular Third Party Data than the average internet user.    It is best to use Relevance Ratio if you’re generating insights about your audience.     A higher Relevance Ratio means the Third Party Data is more similar to your First Party Data, a lower ratio (including negative ratios) means it is less similar.   You might include Third Party Data with a high Relevance Ratio in your data group, using the datagroup API calls, so that users with matching data elements are targeted. |
| ThirdPartyData | `DMP_ThirdPartyData` |  | The Third Party Data that is a Look-Alike Result for the Model. _(nullable)_ |
| ValueRatio | number (double) |  | Indicates the value of the Third Party Data.  This is a ratio of the relevance ratio to the cost of the data.   If you are looking to purchase media against your audience, it is best to use Value Ratio as a guide because this takes into account Relevance Ratio and the Cost of media.    It follows that you might want to purchase media against audiences with the highest Value Ratio.    When the Relevance Ratio is negative, the Third Party Data would have no value, regardless of the cost of the Media.   When the Relevance Ratio is not negative, the lower the cost, the greater the Value Ratio of the Third Party Data. |

### `DMP_ThirdPartyData`

| Field | Type | Required | Description |
|---|---|---|---|
| ActiveHouseholdCount | integer (int64) |  | The number of households within this data element based on our Active IDs counting methodology. Learn more about our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. |
| ActiveIDsConnectedTvCount | integer (int64) |  | The number of connected TV devices and browsers within this data element based on our Active IDs counting methodology. Learn more about our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. |
| ActiveIDsCount | integer (int64) |  | The number of devices and browsers within this data element based on our Active IDs counting methodology. Learn more about our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. |
| ActiveIDsCountExpanded | boolean |  | Whether cross-device has been used to expand the Active IDs count. Segments with UID2s show expanded reach through cross-device. Learn more about our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. _(nullable)_ |
| ActiveIDsInAppCount | integer (int64) |  | The number of in-app devices and browsers within this data element based on our Active IDs counting methodology. Learn more about our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. |
| ActiveIDsWebCount | integer (int64) |  | The number of web devices and browsers within this data element based on our Active IDs counting methodology. Learn more about our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. |
| ActivePersonsCount | integer (int64) |  | The number of persons within this data element based on our Active IDs counting methodology. Learn more about our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. |
| BrandId | string |  | The ID of the Third Party Data Brand. |
| BrandName | string |  | The name of the Third Party Data Brand. _(nullable)_ |
| CPMRate | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The CPM rate of the Third Party Data in the currency the provider charges. At billing time, this will be used to determine the charge in the Advertiser's currency based on applicable exchange rates.   This will be omitted if there is no CPM charge to use this data. |
| CPMRateInAdvertiserCurrency | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | An approximation of the CPM rate of the Third Party Data in the Advertiser's currency. The actual amount charged will depend on exchange rates at the time the impression is purchased, but this serves as a guideline and will be accurate within normal currency fluctuations.   This will be omitted if there is no CPM charge to use this data. |
| DataEventTypeId | integer (int64) |  | This represents the ID of the Data Event Type for the segment. An ID of '2' represents conversions/purchasers. _(nullable; KOKAI: This property is available only in Kokai.)_ |
| Description | string |  | The description of the Third Party Data. _(nullable)_ |
| FullPath | string |  | The full category taxonomy path of the Third Party Data. |
| IsAudienceUnlimited | boolean |  | This represents if the segment is an Audience Unlimited enabled segment. |
| IsEligibleForSeeds | boolean |  | If set to `true`, indicates that this segment is approved for use in seeds. The default value is `false`. _(KOKAI: This property is available only in Kokai.)_ |
| Name | string |  | The name of the Third Party Data. |
| PercentOfMediaCostRate | number (double) |  | The Percent of Media Cost rate of the Third Party Data. For example, 0.12 = 12%. This will be omitted if there is no Percent of Media Cost charge to use this data. |
| ReceivedIDsCount | integer (int64) |  | The number of devices and browsers within this data element based on our Received IDs counting methodology. Learn more about our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. |
| ThirdPartyDataId | string |  | The ID of the Third Party Data. |
| DevicesBrowsers30DayCount | integer (int64) |  | The number of devices and browsers within this data element based on our Received IDs counting methodology. Learn more about our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. _(DEPRECATED; deprecation: This property returns the same count as 'ReceivedIDsCount'. Please use 'ReceivedIDsCount' instead. Check our Release Notes page for upgrade timeline updates.)_ |
| HouseholdCount | integer (int64) |  | The number of households within this data element based on our Active IDs counting methodology. Learn more about our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. _(DEPRECATED; deprecation: This property returns the same count as 'ActiveHouseholdCount'. Please use 'ActiveHouseholdCount' instead. Check our Release Notes page for upgrade timeline updates.)_ |
| PersonsCount | integer (int64) |  | The number of persons within this data element based on our Active IDs counting methodology. Learn more about our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. _(DEPRECATED; deprecation: This property returns the same count as 'ActivePersonsCount'. Please use 'ActivePersonsCount' instead. Check our Release Notes page for upgrade timeline updates.)_ |
| UniqueConnectedTvCount | integer (int64) |  | The number of connected TV devices and browsers within this data element based on our Active IDs counting methodology. Learn more about our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. _(DEPRECATED; deprecation: This property returns the same count as 'ActiveIDsConnectedTvCount'. Please use 'ActiveIDsConnectedTvCount' instead. Check our Release Notes page for upgrade timeline updates.)_ |
| UniqueUserCount | integer (int64) |  | The number of devices and browsers within this data element based on our Active IDs counting methodology. Learn more about our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. _(DEPRECATED; deprecation: This property returns the same count as 'ActiveIDsCount'. Please use 'ActiveIDsCount' instead. Check our Release Notes page for upgrade timeline updates.)_ |
| UniqueUserInAppCount | integer (int64) |  | The number of in-app devices and browsers within this data element based on our Active IDs counting methodology. Learn more about our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. _(DEPRECATED; deprecation: This property returns the same count as 'ActiveIDsInAppCount'. Please use 'ActiveIDsInAppCount' instead. Check our Release Notes page for upgrade timeline updates.)_ |
| UniqueUserWebCount | integer (int64) |  | The number of web devices and browsers within this data element based on our Active IDs counting methodology. Learn more about our counting methodology on the [Audience](/v3/portal/api/doc/Audience) article's "Unique Device/Browser Counting Methodology" section. This property is system-generated and read-only. _(DEPRECATED; deprecation: This property returns the same count as 'ActiveIDsWebCount'. Please use 'ActiveIDsWebCount' instead. Check our Release Notes page for upgrade timeline updates.)_ |

### `DMP_FirstPartyDataSortingField`

Type: string enum(Name, DataType, Uniques)

### `DMP_LookAlikeThirdPartyDataSortingField`

Type: string enum(Name, FullPath, Uniques, RateAmount, RateType, DataOwner, RelevanceRatio, ValueRatio)

### `DMP_ThirdPartyDataRateType`

Type: string enum(CPM, PercentOfMediaCost, Hybrid)

### `DMP_ThirdPartyDataRateCPMFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| MaximumCPM | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | When specified and not null, will return Third Party Data with a CPM rate of at most this amount in the chosen currency.   It is recommended that this be the currency of the querying Advertiser. _(nullable)_ |
| MinimumCPM | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | When specified and not null, will return Third Party Data with a CPM rate of at least this amount in the chosen currency.   It is recommended that this be the currency of the querying Advertiser. _(nullable)_ |

### `DMP_ThirdPartyDataRatePercentOfMediaCostFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| MaximumPercent | number (double) |  | When specified and not null, will return Third Party Data with a Percent of Media Cost rate of at most this value. For example, .12 = 12%. _(nullable)_ |
| MinimumPercent | number (double) |  | When specified and not null, will return Third Party Data with a Percent of Media Cost rate of at least this value. For example, .12 = 12%. _(nullable)_ |

### `DMP_ThirdPartyDataSortingField`

Type: string enum(Name, FullPath, Uniques, RateAmount, RateType, DataOwner)

### `TTD.Domain.Shared.Http.Metadata.Models_Money`

Describes an amount of money in a specific currency.

| Field | Type | Required | Description |
|---|---|---|---|
| Amount | number (double) | yes | The money amount, specified as a decimal, for example, 1.5 for $1.50. |
| CurrencyCode | `TheTradeDesk_CurrencyCode` | yes | The currency of the money value specified in the `Amount`, for example, "USD" for $1.50 US dollars.   Unless you've arranged different terms during onboarding, your partner account and all its associated advertisers use the same currency, namely, USD.   If you you need to use another currency, please contact your Account Manager.   If multi-currency support is enabled for your account, see the Currency API for the full set of supported currencies and their codes. |

### `TheTradeDesk_CurrencyCode`

Type: string enum(None, AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF, BMD, BND, BOB, BRL, BSD, BTN, BWP, BYR, BZD, CAD, CDF, CHF, CLF, CLP, CNH, CNY, COP, CRC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ERN, ETB, EUR, FJD, FKP, GBP, GEL, GHS, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HRK, HTG, HUF, IDR, ILS, INR, IQD, IRR, ISK, JMD, JOD, JPY, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LTL, LVL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MRO, MUR, MVR, MWK, MXN, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SRD, STD, SVC, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD, TWD, TZS, UAH, UGX, USD, UYU, UZS, VEF, VND, VUV, WST, XAF, XCD, XDR, XOF, XPF, YER, ZAR, ZMW, ZWL)

