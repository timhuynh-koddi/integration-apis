# Third Party Data Rate

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 4

---

## POST /v3/datarate/batch

Stage a batch of third-party taxonomy data rates for processing and approval. A batch can include a maximum of 5000 rates. For details and examples, see the Assign Rates to Data Elements section in [Third-Party Data Integration](/v3/portal/data/doc/DataThirdPartyIntegrationAudience).  
This endpoint is available only to data providers. For details, contact your Technical Account Manager.

Operation ID: `post-datarate-batch`

**Request body** (`application/json`, required): `DMP_ThirdPartyDataRateBatch_post`

**Response 200** (`application/json`): `DMP_ThirdPartyDataRateBatch`

---

## GET /v3/datarate/batch/{batchId}

Get the processing and approval status for a batch of submitted data rates.    
   
This endpoint is available only to data providers. For more information, contact your Technical Account Manager.

Operation ID: `get-datarate-batch-batchid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| batchId | path | string | yes |  |

**Response 200** (`application/json`): `DMP_ThirdPartyDataRateBatch`

---

## GET /v3/datarate/brands/{providerId}

Retrieve a list of brands for a specific data provider ID. For details and examples, see [Third-Party Data Management](/v3/portal/data/doc/ThirdPartyDataManagement).  
This endpoint is available only to data providers. For more information, contact your Technical Account Manager.

Operation ID: `get-datarate-brands-providerid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| providerId | path | string | yes |  |

**Response 200** (`application/json`): array<`DMP_ThirdPartyDataBrandForProvider`>

---

## POST /v3/datarate/query

Retrieve a filterable, paged list of data rates. For details and examples, see [Third-Party Data Management](/v3/portal/data/doc/ThirdPartyDataManagement).  
This endpoint is available only to data providers. For more information, contact your Technical Account Manager.

Operation ID: `post-datarate-query`

**Request body** (`application/json`, required): `DMP_ThirdPartyDataRateQuery_post`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_ThirdPartyDataRate_`

---

## Schemas

### `DMP_ThirdPartyDataBrandForProvider`

| Field | Type | Required | Description |
|---|---|---|---|
| BrandId | string |  | The unique ID that identifies a provider-managed brand. It is used to manage data rates. For details, see [Third-Party Data Rates](/v3/portal/data/doc/DataRatesOverview). |
| BrandName | string |  | The name that appears for this brand in the DMP. |
| LogoUrl | string |  | The URL for the logo image that appears for this brand in the DMP. _(nullable)_ |

### `DMP_ThirdPartyDataRateBatch`

| Field | Type | Required | Description |
|---|---|---|---|
| ApprovalStatus | `DMP_DataRateBatchApprovalStatus` |  | The approval status of the submitted data rate batch. This is a read-only property, and any value specified at creation will be ignored. For details on rate approval requirements for different taxonomies, see [Third-Party Data Rates](/v3/portal/data/doc/DataRatesOverview).   To view a list of possible values and their definitions, expand the property. |
| BatchId | string |  | The read-only, system-generated ID for this batch of data rates. Any value specified at creation will be ignored. _(nullable)_ |
| CreatedAtUtc | string (date-time) |  | The read-only UTC time when the data rate batch was created in the platform. |
| DataRates | array<`DMP_ThirdPartyDataRateBatchItem`> |  | A list of data rates submitted in this batch. |
| EstimatedProcessAtUtc | string (date-time) |  | The read-only estimated UTC time when the data rate batch will be processed. _(nullable)_ |
| ProcessedAtUtc | string (date-time) |  | The read-only UTC time when the data rate batch was processed.    A value will be set only if the `ProcessingStatus` is `Successful` or `Failed`, otherwise the value will be `null`. _(nullable)_ |
| ProcessingStatus | `DMP_DataRateBatchProcessingStatus` |  | The processing status of the submitted data rate batch. This is a read-only property, and any value specified at creation will be ignored.    To view a list of possible values and their definitions, expand the property. For details on processing queue eligibility periods for different taxonomies, see [Third-Party Data Rates](/v3/portal/data/doc/DataRatesOverview).   **NOTE**: After a batch has been processed successfully, it still requires approval. To view the approval status, see the `ApprovalStatus` property. |
| ProviderId | string |  | The unique ID for your provider account, which your Account Manager provided to you. _(maxLength 32)_ |

### `DMP_ThirdPartyDataRateBatch_post`

| Field | Type | Required | Description |
|---|---|---|---|
| DataRates | array<`DMP_ThirdPartyDataRateBatchItem_post`> | yes | A list of data rates submitted in this batch. |
| ProviderId | string | yes | The unique ID for your provider account, which your Account Manager provided to you. _(maxLength 32)_ |

### `DMP_ThirdPartyDataRateQuery_post`

| Field | Type | Required | Description |
|---|---|---|---|
| BrandId | string | yes | The unique ID that identifies a provider-managed brand. To retrieve a list of available brand IDs for your `ProviderId`, use the [POST /datarate/brands/{providerId}](/v3/portal/api/ref/get-datarate-brands-providerid) endpoint. |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `NULL` means the maximum number of elements allowed per page.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum value for this property is 25. The maximum limit is 1000.   - If a large page size is passed in, fewer items may be returned. Check the total count to see if more items are available.   For example:   - If there are 70 items, `PageStartIndex` is 0, and `PageSize` is 100, only the 70 existing items will be returned.   - If there are 100 items, `PageStartIndex` is 50, and `PageSize` is 50, the last 50 elements will be returned.   <strong>IMPORTANT</strong>: If a taxonomy has more than 1000 elements, setting this value to `null` results in an error. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + ResultCount is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| ProviderId | string | yes | The unique ID for your provider account, which your Account Manager provided to you. |
| RateLevel | `DMP_DataRateLevel` | yes | Specify the rate level by which to filter the data rate list. |
| AdvertiserId | string |  | If the selected `RateLevel` is set to `Advertiser`, specify the ID of the advertiser for which to return data rates. _(maxLength 32)_ |
| IncludeInheritedRates | boolean |  | If set to `true`, returns inherited data rates in the response. The default value is `false`.   **NOTE**: Since data rates no longer rely on rate inheritance, the API returns the same results regardless of whether the property is set to `true` or `false`. |
| PartnerId | string |  | If the selected `RateLevel` is set to `Partner`, specify the ID of the partner for which to return data rates. _(maxLength 32)_ |
| ProviderElementIds | array<string> |  | Specify provider element IDs of data segments that you want to retrieve for the given provider ID. For an example, see [Third-Party Data Management](/v3/portal/data/doc/ThirdPartyDataManagement).   Is this array is empty, all found data segments associated with the given provider ID will be returned. To retrieve a list of available data segments for a given provider ID, use the [POST /thirdpartydata/query](/v3/portal/api/ref/post-thirdpartydata-query) endpoint. _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_ThirdPartyDataRate_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`DMP_ThirdPartyDataRate`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `DMP_DataRateBatchApprovalStatus`

Type: string enum(NotReviewed, Approved, Denied, AwaitingManualReview)

### `DMP_DataRateBatchProcessingStatus`

Type: string enum(NotStarted, InProgress, Successful, Failed)

### `DMP_ThirdPartyDataRateBatchItem`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The platform ID of the advertiser that is eligible to access data segments at this rate in a custom taxonomy, if the `RateLevel` value is set to `Advertiser`. _(maxLength 32)_ |
| BrandId | string |  | The unique ID that identifies a provider-managed brand. The Trade Desk typically assigns the brand ID at the [initial setup](/v3/portal/data/doc/DataGetStarted3pProviderAudience) during the onboarding process.   If the segment declares a ThirdPartyDataBrandId, this value must match that brand.   **TIP**: To retrieve a list of available brand IDs for your `ProviderId`, use the [POST /datarate/brands/{providerId}](/v3/portal/api/ref/get-datarate-brands-providerid) endpoint. _(maxLength 32)_ |
| CPMRate | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The CPM cap (in USD) to be used in conjunction with the `PercentOfMediaCostRate` for the hybrid data rate (selected in `RateType`). At billing time, this will be used to determine the charge in the advertiser's currency based on applicable exchange rates. |
| PartnerId | string |  | The platform ID of the partner that is eligible to access data segments at this rate in a custom taxonomy, if the `RateLevel` value is set to `Partner`. _(maxLength 32)_ |
| PercentOfMediaCostRate | number (double) |  | A percentage of media cost to be used in conjunction with the `CPMRate` cap for the hybrid data rate (selected in `RateType`). Specify the percentage as a decimal, for example, 0.12 = 12%. _(nullable)_ |
| ProviderElementId | string |  | A unique ID that you set to identify this data element in the system. Retrieve a list of available `ProviderElementIds` for your `ProviderId` using the [POST /thirdpartydata/query](/v3/portal/api/ref/post-thirdpartydata-query) endpoint. _(maxLength 512)_ |
| RateLevel | `DMP_DataRateLevel` |  | The rate level for the third-party data:   - System (used for syndicated taxonomies intended for all buyers in the DMP)   - Partner (used for custom taxonomies intended for specific partners and their advertisers)   - Advertiser (used for custom taxonomies intended for specific advertisers) NOTE: This rate level requires additional permissions. To request access, please contact your Technical Account Manager.   For details, see [Third-Party Data Rates](/v3/portal/data/doc/DataRatesOverview). |
| RateType | `DMP_ThirdPartyDataRateType` |  | The data rate type for the segment.   **IMPORTANT**:   - All system-level data rates for syndicated taxonomies must be assigned as hybrid rates, which use a percentage of media cost with a maximum CPM cap. The means that you must set the this property to `Hybrid` and provide values for both `CPMRate` and `PercentOfMediaCostRate` properties.   - While custom taxonomies can use any data rate type, hybrid rates are strongly recommended. |

### `DMP_ThirdPartyDataRateBatchItem_post`

| Field | Type | Required | Description |
|---|---|---|---|
| BrandId | string | yes | The unique ID that identifies a provider-managed brand. The Trade Desk typically assigns the brand ID at the [initial setup](/v3/portal/data/doc/DataGetStarted3pProviderAudience) during the onboarding process.   If the segment declares a ThirdPartyDataBrandId, this value must match that brand.   **TIP**: To retrieve a list of available brand IDs for your `ProviderId`, use the [POST /datarate/brands/{providerId}](/v3/portal/api/ref/get-datarate-brands-providerid) endpoint. _(maxLength 32)_ |
| ProviderElementId | string | yes | A unique ID that you set to identify this data element in the system. Retrieve a list of available `ProviderElementIds` for your `ProviderId` using the [POST /thirdpartydata/query](/v3/portal/api/ref/post-thirdpartydata-query) endpoint. _(maxLength 512)_ |
| RateLevel | `DMP_DataRateLevel` | yes | The rate level for the third-party data:   - System (used for syndicated taxonomies intended for all buyers in the DMP)   - Partner (used for custom taxonomies intended for specific partners and their advertisers)   - Advertiser (used for custom taxonomies intended for specific advertisers) NOTE: This rate level requires additional permissions. To request access, please contact your Technical Account Manager.   For details, see [Third-Party Data Rates](/v3/portal/data/doc/DataRatesOverview). |
| RateType | `DMP_ThirdPartyDataRateType` | yes | The data rate type for the segment.   **IMPORTANT**:   - All system-level data rates for syndicated taxonomies must be assigned as hybrid rates, which use a percentage of media cost with a maximum CPM cap. The means that you must set the this property to `Hybrid` and provide values for both `CPMRate` and `PercentOfMediaCostRate` properties.   - While custom taxonomies can use any data rate type, hybrid rates are strongly recommended. |
| AdvertiserId | string |  | The platform ID of the advertiser that is eligible to access data segments at this rate in a custom taxonomy, if the `RateLevel` value is set to `Advertiser`. _(maxLength 32)_ |
| CPMRate | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The CPM cap (in USD) to be used in conjunction with the `PercentOfMediaCostRate` for the hybrid data rate (selected in `RateType`). At billing time, this will be used to determine the charge in the advertiser's currency based on applicable exchange rates. |
| PartnerId | string |  | The platform ID of the partner that is eligible to access data segments at this rate in a custom taxonomy, if the `RateLevel` value is set to `Partner`. _(maxLength 32)_ |
| PercentOfMediaCostRate | number (double) |  | A percentage of media cost to be used in conjunction with the `CPMRate` cap for the hybrid data rate (selected in `RateType`). Specify the percentage as a decimal, for example, 0.12 = 12%. _(nullable)_ |

### `DMP_DataRateLevel`

Type: string enum(System, Partner, Advertiser)

### `DMP_ThirdPartyDataRate`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The platform ID of the advertiser that is eligible to access data segments at this rate in a custom taxonomy, if the `RateLevel` value is set to `Advertiser`. _(maxLength 32)_ |
| BrandId | string |  | The unique ID that identifies a provider-managed brand. The Trade Desk typically assigns the brand ID at the [initial setup](/v3/portal/data/doc/DataGetStarted3pProviderAudience) during the onboarding process.   If the segment declares a ThirdPartyDataBrandId, this value must match that brand.   **TIP**: To retrieve a list of available brand IDs for your `ProviderId`, use the [POST /datarate/brands/{providerId}](/v3/portal/api/ref/get-datarate-brands-providerid) endpoint. _(maxLength 32)_ |
| CPMRate | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The CPM cap (in USD) to be used in conjunction with the `PercentOfMediaCostRate` for the hybrid data rate (selected in `RateType`). At billing time, this will be used to determine the charge in the advertiser's currency based on applicable exchange rates. |
| InheritedFromProviderElementId | string |  | If the `IsInherited` is set to `true`, this value specifies the `ProviderElementId` of the data element from which the data rate was inherited. _(maxLength 512)_ |
| IsInherited | boolean |  | If set to `true`, this property indicates that the rate is inherited from a parent data element in the taxonomy. If not, the value is `false`. For details on rate inheritance, see [Third-Party Data Taxonomy Design](/v3/portal/data/doc/DataTaxonomyDesign). |
| PartnerId | string |  | The platform ID of the partner that is eligible to access data segments at this rate in a custom taxonomy, if the `RateLevel` value is set to `Partner`. _(maxLength 32)_ |
| PercentOfMediaCostRate | number (double) |  | A percentage of media cost to be used in conjunction with the `CPMRate` cap for the hybrid data rate (selected in `RateType`). Specify the percentage as a decimal, for example, 0.12 = 12%. _(nullable)_ |
| ProviderElementId | string |  | The unique ID that you assigned to the segment when designing your taxonomy. To retrieve a list of available provider element IDs for your `ProviderId`, use the [POST /thirdpartydata/query](/v3/portal/api/ref/post-thirdpartydata-query) endpoint. _(maxLength 512)_ |
| ProviderId | string |  | The unique ID for your provider account, which your Account Manager provided to you. _(maxLength 32)_ |
| RateLevel | `DMP_DataRateLevel` |  | The rate level for the third-party data:   - System (used for syndicated taxonomies intended for all buyers in the DMP)   - Partner (used for custom taxonomies intended for specific partners and their advertisers)   - Advertiser (used for custom taxonomies intended for specific advertisers) NOTE: This rate level requires additional permissions. To request access, please contact your Technical Account Manager.   For details, see [Third-Party Data Rates](/v3/portal/data/doc/DataRatesOverview). |
| RateType | `DMP_ThirdPartyDataRateType` |  | The data rate type for the segment.   **IMPORTANT**:   - All system-level data rates for syndicated taxonomies must be assigned as hybrid rates, which use a percentage of media cost with a maximum CPM cap. The means that you must set the this property to `Hybrid` and provide values for both `CPMRate` and `PercentOfMediaCostRate` properties.   - While custom taxonomies can use any data rate type, hybrid rates are strongly recommended. |

### `TTD.Domain.Shared.Http.Metadata.Models_Money`

Describes an amount of money in a specific currency.

| Field | Type | Required | Description |
|---|---|---|---|
| Amount | number (double) | yes | The money amount, specified as a decimal, for example, 1.5 for $1.50. |
| CurrencyCode | `TheTradeDesk_CurrencyCode` | yes | The currency of the money value specified in the `Amount`, for example, "USD" for $1.50 US dollars.   Unless you've arranged different terms during onboarding, your partner account and all its associated advertisers use the same currency, namely, USD.   If you you need to use another currency, please contact your Account Manager.   If multi-currency support is enabled for your account, see the Currency API for the full set of supported currencies and their codes. |

### `DMP_ThirdPartyDataRateType`

Type: string enum(CPM, PercentOfMediaCost, Hybrid)

### `TheTradeDesk_CurrencyCode`

Type: string enum(None, AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF, BMD, BND, BOB, BRL, BSD, BTN, BWP, BYR, BZD, CAD, CDF, CHF, CLF, CLP, CNH, CNY, COP, CRC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ERN, ETB, EUR, FJD, FKP, GBP, GEL, GHS, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HRK, HTG, HUF, IDR, ILS, INR, IQD, IRR, ISK, JMD, JOD, JPY, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LTL, LVL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MRO, MUR, MVR, MWK, MXN, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SRD, STD, SVC, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD, TWD, TZS, UAH, UGX, USD, UYU, UZS, VEF, VND, VUV, WST, XAF, XCD, XDR, XOF, XPF, YER, ZAR, ZMW, ZWL)

