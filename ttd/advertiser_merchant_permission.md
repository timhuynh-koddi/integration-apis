# Advertiser Merchant Permission

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 3

---

## POST /v3/ecommerce/permission

Grant a brand or advertiser access to a merchant's data. For details, see [Managing access to merchant product catalog](/doc/CommerceMerchantProductCatalogAccess).  
**IMPORTANT**: This endpoint enforces a maximum of 1000 items per request. Payloads that exceed this limit will be rejected. To stay within the limit, split large datasets into multiple requests.

Operation ID: `post-ecommerce-permission`

**Request body** (`application/json`, required): `MerchantCentre.RequestModels_AdvertiserMerchantPermissionRequest_post`

**Response 200**: OK

---

## POST /v3/ecommerce/permission/query

Retrieve the details about the merchant's data and data usage that the advertiser can access. For details, see [Managing access to merchant product catalog](/doc/CommerceMerchantProductCatalogAccess).  
**IMPORTANT**: This endpoint enforces a maximum of 1000 items per request. Payloads that exceed this limit will be rejected. To stay within the limit, split large datasets into multiple requests.

Operation ID: `post-ecommerce-permission-query`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_MerchantAdvertiserRequest_post`

**Response 200** (`application/json`): `MerchantCentre.ResponseModels_AdvertiserMerchantPermissionResponse`

---

## POST /v3/ecommerce/permission/delete

Remove an advertiser's access to the merchant's data. For details, see [Managing access to merchant product catalog](/doc/CommerceMerchantProductCatalogAccess).  
**IMPORTANT**: This endpoint enforces a maximum of 1000 items per request. Payloads that exceed this limit will be rejected. To stay within the limit, split large datasets into multiple requests.

Operation ID: `post-ecommerce-permission-delete`

**Request body** (`application/json`, required): `MerchantCentre.RequestModels_RemoveAdvertiserMerchantPermissionRequest_post`

**Response 200**: OK

---

## Schemas

### `MerchantCentre.RequestModels_AdvertiserMerchantPermissionRequest_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The unique platform ID for the brand or advertiser that can access product information in the merchant's catalog for audience building and/or measurement. |
| FeaturesToGrantAccessTo | array<`MerchantCentre_FeatureType`> | yes | The list of access features and data usage to which a merchant wants to grant an advertiser or brand access.   **NOTE**: The list of available access features may vary depending on the merchant. For details about the features your merchant has access to, contact your Technical Account manager. |
| MerchantId | string | yes | The unique platform ID for the merchant that owns the product catalog. |
| CPMRateCurrency | `TheTradeDesk_CurrencyCode` |  | Override currency for the third-party data and measurement fee. This will fall back to merchant default if not provided. |
| DataOwnerType | `ProductCatalog.RequestModels_DataOwnerType` |  | Override value that indicates the ownership type of the segments created by the advertiser. This will fall back to merchant default if not provided. |
| ThirdPartyDataSettings | `MerchantCentre.RequestModels_ThirdPartyDataSettingsRequest` |  | Override settings for third-party data. _(nullable)_ |
| ThirdPartyMeasurementSettings | `MerchantCentre.RequestModels_ThirdPartyMeasurementSettingsRequest` |  | Override settings for third-party measurement. _(nullable)_ |
| EnableMeasurement | boolean |  | This property has been deprecated. To allow an advertiser to use the merchant's data for targeting purposes, in the `FeaturesToGrantAccessTo` array, include the `Measurement` value. _(DEPRECATED; deprecation: This property has been deprecated. To allow an advertiser to use the merchant's data for targeting purposes, in the `FeaturesToGrantAccessTo` array, include the `Measurement` value.)_ |
| EnableTargeting | boolean |  | This property has been deprecated. To allow an advertiser to use the merchant's data for targeting purposes, in the `FeaturesToGrantAccessTo` array, include the `Targeting` value. _(DEPRECATED; deprecation: This property has been deprecated. To allow an advertiser to use the merchant's data for targeting purposes, in the `FeaturesToGrantAccessTo` array, include the `Targeting` value.)_ |

### `MerchantCentre.RequestModels_RemoveAdvertiserMerchantPermissionRequest_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The unique platform ID for the brand or advertiser that can access product information in the merchant's catalog for audience building and/or measurement. |
| MerchantId | string | yes | The unique platform ID for the merchant that owns the product catalog. |
| FeaturesToRemove | array<`MerchantCentre_FeatureType`> |  | The list of merchant data and data usage to which you want to remove an advertiser's access. _(nullable)_ |

### `MerchantCentre.ResponseModels_AdvertiserMerchantPermissionResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The unique platform ID for the brand or advertiser whose permission to the merchant's data has been checked. _(nullable)_ |
| CPMRateCurrency | `TheTradeDesk_CurrencyCode` |  | The currency of the third-party data and measurement fee. |
| DataOwnerType | `ProductCatalog.RequestModels_DataOwnerType` |  | The ownership type of the segments created by the advertiser. |
| FeaturesWithAccessTo | array<`MerchantCentre_FeatureType`> |  | The list of access and usage features to the merchant's data that an advertiser can access. _(nullable)_ |
| MerchantId | integer (int64) |  | The unique platform ID for the merchant that owns the product catalog. |
| ThirdPartyDataSettings | `ProductCatalog.ResponseModels_ThirdPartyDataSettings` |  | The additional settings for third-party data. _(nullable)_ |
| ThirdPartyMeasurementSettings | `ProductCatalog.ResponseModels_ThirdPartyMeasurementSettings` |  | The additional settings for third-party measurement. _(nullable)_ |
| EnableMeasurement | boolean |  | This property has been deprecated. To check if an advertiser is allowed to use the merchant's data, refer to the `FeaturesWithAccessTo` array and look for the `Measurement` value. _(DEPRECATED; deprecation: This property has been deprecated. To check if an advertiser is allowed to use the merchant's data, refer to the  `FeaturesWithAccessTo` array and look for the `Measurement` value.)_ |
| EnableTargeting | boolean |  | This property has been deprecated. To check if an advertiser is allowed to use the merchant's data, refer to the `FeaturesWithAccessTo` array and look for the `Targeting` value. _(DEPRECATED; deprecation: This property has been deprecated. To check if an advertiser is allowed to use the merchant's data, refer to the `FeaturesWithAccessTo` array and look for the `Targeting` value.)_ |

### `ProductCatalog.RequestModels_MerchantAdvertiserRequest_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The unique platform ID for the brand or advertiser that can access product information in the merchant's catalog for audience building and/or measurement. |
| MerchantId | string | yes | The unique platform ID for the merchant that owns the product catalog. |

### `MerchantCentre.RequestModels_ThirdPartyDataSettingsRequest`

| Field | Type | Required | Description |
|---|---|---|---|
| CPMRate | number (double) |  | Override CPM cap to be used in conjunction with the `PercentOfMediaCostRate`. At billing time, this will be used to determine the charge in the advertiser's currency based on applicable exchange rates. This will fall back to merchant default if not provided.   Please note that the field is only for the initial creation of the rate card. Once the rate card has been created, updating this field will not result in an update on the existing rate card. For more information, contact your Technical Account Manager. |
| PercentOfMediaCostRate | number (double) |  | Override percentage of media cost to be used in conjunction with the `CPMRate` cap. Specify the percentage as a decimal, for example, 0.12 = 12%. This will fall back to merchant default if not provided.   Please note that the field is only for the initial creation of the rate card. Once the rate card has been created, updating this field will not result in an update on the existing rate card. For more information, contact your Technical Account Manager. |
| ThirdPartyDataBrandId | string |  | Override unique ID that identifies a provider-managed brand. To retrieve a list of available brand IDs for your `ProviderId`, use the [POST /datarate/brands/{providerId}](/v3/portal/api/ref/get-datarate-brands-providerid) endpoint. Will fall back to merchant default if not provided. _(nullable)_ |

### `MerchantCentre.RequestModels_ThirdPartyMeasurementSettingsRequest`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayMeasurementCPMRate | number (double) |  | Override CPM rate for display measurement. At billing time, this will be used to determine the charge in the advertiser's currency based on applicable exchange rates. |
| VideoMeasurementCPMRate | number (double) |  | Override CPM rate for video measurement. At billing time, this will be used to determine the charge in the advertiser's currency based on applicable exchange rates. |

### `MerchantCentre_FeatureType`

Type: string enum(ProductCatalog, AggregateSales, DCO, Targeting, Measurement)

### `ProductCatalog.RequestModels_DataOwnerType`

Type: string enum(FirstParty, ThirdParty)

### `TheTradeDesk_CurrencyCode`

Type: string enum(None, AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF, BMD, BND, BOB, BRL, BSD, BTN, BWP, BYR, BZD, CAD, CDF, CHF, CLF, CLP, CNH, CNY, COP, CRC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ERN, ETB, EUR, FJD, FKP, GBP, GEL, GHS, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HRK, HTG, HUF, IDR, ILS, INR, IQD, IRR, ISK, JMD, JOD, JPY, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LTL, LVL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MRO, MUR, MVR, MWK, MXN, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SRD, STD, SVC, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD, TWD, TZS, UAH, UGX, USD, UYU, UZS, VEF, VND, VUV, WST, XAF, XCD, XDR, XOF, XPF, YER, ZAR, ZMW, ZWL)

### `ProductCatalog.ResponseModels_ThirdPartyDataSettings`

| Field | Type | Required | Description |
|---|---|---|---|
| CPMRate | number (double) |  | The CPM cap to be used in conjunction with the `PercentOfMediaCostRate`. At billing time, this will be used to determine the charge in the advertiser's currency based on applicable exchange rates. |
| PercentOfMediaCostRate | number (double) |  | A percentage of media cost to be used in conjunction with the `CPMRate` |
| ThirdPartyDataBrandId | string |  | The unique ID that identifies a provider-managed brand. To retrieve a list of available brand IDs for your `ProviderId`, use the [POST /datarate/brands/{providerId}](/v3/portal/api/ref/get-datarate-brands-providerid) endpoint. _(nullable)_ |

### `ProductCatalog.ResponseModels_ThirdPartyMeasurementSettings`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayMeasurementCPMRate | number (double) |  | CPM rate for display measurement. At billing time, this will be used to determine the charge in the advertiser's currency based on applicable exchange rates. |
| VideoMeasurementCPMRate | number (double) |  | CPM rate for video measurement. At billing time, this will be used to determine the charge in the advertiser's currency based on applicable exchange rates. |

