# Cross Device

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 2

---

## POST /v3/crossdeviceattributionmodel/query/advertiser

Query for a page of Cross Device Attribution Models, that are available for an advertiser.  The page will be sorted in ascending order of the Model Name by default.

Operation ID: `post-crossdeviceattributionmodel-query-advertiser`

**Request body** (`application/json`, required): `CrossDevice_CrossDeviceAttributionModelQueryForAdvertiser`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_CrossDeviceAttributionModel_`

---

## POST /v3/crossdevicevendor/query/advertiser

Query for a page of Cross Device Vendors that are available for an advertiser.  The page will be sorted in ascending order of the Cross Device Vendor Name by default.

Operation ID: `post-crossdevicevendor-query-advertiser`

**Request body** (`application/json`, required): `CrossDevice_CrossDeviceVendorQueryForAdvertiser`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_CrossDeviceVendor_`

---

## Schemas

### `CrossDevice_CrossDeviceAttributionModelQueryForAdvertiser`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser that owns the data groups. |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |

### `CrossDevice_CrossDeviceVendorQueryForAdvertiser`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser that has requested the list of Cross Device vendors. |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_CrossDeviceAttributionModel_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`CrossDevice_CrossDeviceAttributionModel`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_CrossDeviceVendor_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`CrossDevice_CrossDeviceVendor`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `CrossDevice_CrossDeviceAttributionModel`

| Field | Type | Required | Description |
|---|---|---|---|
| CrossDeviceAttributionModelId | string |  | The ID of the cross-device attribution model.  Use this ID when enabling cross-device attribution on campaigns. _(nullable)_ |
| CrossDeviceAttributionModelName | string |  | The friendly name for the cross device attribution model. _(nullable)_ |

### `CrossDevice_CrossDeviceVendor`

| Field | Type | Required | Description |
|---|---|---|---|
| CrossDeviceVendorFee | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Fee` |  | The fee that applies when Cross Device data is used in making a targeting decision.   This is a read-only property returned by the API _(nullable)_ |
| CrossDeviceVendorId | integer (int32) |  | The identifier for this Cross Device vendor. Use this id when enabling Cross Device targeting on ad groups. |
| CrossDeviceVendorName | string |  | The friendly name of the Cross Device vendor. _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Fee`

| Field | Type | Required | Description |
|---|---|---|---|
| CPCRate | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The CPC rate in the currency the provider charges. At billing time, this will be used to determine the charge in the Advertiser's currency based on applicable exchange rates.   This will be null if there is no CPC charge to use the data/feature. _(nullable)_ |
| CPCRateInAdvertiserCurrency | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | An approximation of the CPC rate in the Advertiser's currency. The actual amount charged will depend on exchange rates, but this serves as a guideline and will be accurate within normal currency fluctuations.   This will be null if there is no CPC charge to use this data/feature. _(nullable)_ |
| CPMRate | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The CPM rate in the currency the provider charges. At billing time, this will be used to determine the charge in the Advertiser's currency based on applicable exchange rates.   This will be null if there is no CPM charge to use the data/feature. _(nullable)_ |
| CPMRateInAdvertiserCurrency | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | An approximation of the CPM rate in the Advertiser's currency. The actual amount charged will depend on exchange rates, but this serves as a guideline and will be accurate within normal currency fluctuations.   This will be null if there is no CPM charge to use this data/feature. _(nullable)_ |
| PercentOfDataCostRate | number (double) |  | The Percent of Data Cost rate of the data/feature. For example, 0.12 = 12%. This will be null if there is no Percent of Data Cost charge to use the data/feature. _(nullable)_ |
| PercentOfMediaCostRate | number (double) |  | The Percent of Media Cost rate of the data/feature. For example, 0.12 = 12%. This will be null if there is no Percent of Media Cost charge to use the data/feature. _(nullable)_ |

### `TTD.Domain.Shared.Http.Metadata.Models_Money`

Describes an amount of money in a specific currency.

| Field | Type | Required | Description |
|---|---|---|---|
| Amount | number (double) | yes | The money amount, specified as a decimal, for example, 1.5 for $1.50. |
| CurrencyCode | `TheTradeDesk_CurrencyCode` | yes | The currency of the money value specified in the `Amount`, for example, "USD" for $1.50 US dollars.   Unless you've arranged different terms during onboarding, your partner account and all its associated advertisers use the same currency, namely, USD.   If you you need to use another currency, please contact your Account Manager.   If multi-currency support is enabled for your account, see the Currency API for the full set of supported currencies and their codes. |

### `TheTradeDesk_CurrencyCode`

Type: string enum(None, AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF, BMD, BND, BOB, BRL, BSD, BTN, BWP, BYR, BZD, CAD, CDF, CHF, CLF, CLP, CNH, CNY, COP, CRC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ERN, ETB, EUR, FJD, FKP, GBP, GEL, GHS, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HRK, HTG, HUF, IDR, ILS, INR, IQD, IRR, ISK, JMD, JOD, JPY, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LTL, LVL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MRO, MUR, MVR, MWK, MXN, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SRD, STD, SVC, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD, TWD, TZS, UAH, UGX, USD, UYU, UZS, VEF, VND, VUV, WST, XAF, XCD, XDR, XOF, XPF, YER, ZAR, ZMW, ZWL)

