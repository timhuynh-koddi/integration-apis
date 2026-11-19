# Merchant Product

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 10

---

## PUT /v3/ecommerce/product/batch

Create new or update existing multiple products in a merchant's catalog. For details, see [Merchant Product Catalog](/v3/portal/data/doc/CommerceMerchantProductCatalog).  
This is an upsert batch endpoint, which supports partial success. For details, see the *Commerce API Usage Overview* section in [Retail Data Integration API](/v3/portal/data/doc/CommerceSolutionsAPI).  
**IMPORTANT**: This endpoint enforces a maximum of 1000 items per request. Payloads that exceed this limit will be rejected. To stay within the limit, split large datasets into multiple requests.

Operation ID: `put-ecommerce-product-batch`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_MerchantProductsRequest_put`

**Response 200** (`application/json`): `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_MerchantProduct_`

---

## POST /v3/ecommerce/product/batch/query

Get multiple product details from a merchant's catalog. For details, see [Merchant Product Catalog](/v3/portal/data/doc/CommerceMerchantProductCatalog).  
This is a batch endpoint, which supports partial success. For details, see the *Commerce API Usage Overview* section in [Retail Data Integration API](/v3/portal/data/doc/CommerceSolutionsAPI).  
**IMPORTANT**: This endpoint enforces a maximum of 1000 items per request. Payloads that exceed this limit will be rejected. To stay within the limit, split large datasets into multiple requests.

Operation ID: `post-ecommerce-product-batch-query`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_MerchantProductIdsRequest_post`

**Response 200** (`application/json`): `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_MerchantProduct_`

---

## PUT /v3/ecommerce/product/advertisers/add

Allow multiple brands or advertisers to access a specific product SKU.  
**IMPORTANT**: This endpoint enforces a maximum of 1000 items per request. Payloads that exceed this limit will be rejected. To stay within the limit, split large datasets into multiple requests.

Operation ID: `put-ecommerce-product-advertisers-add`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_MerchantProductAdvertisersRequest_put`

**Response 200** (`application/json`): `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_string_`

---

## POST /v3/ecommerce/product/advertisers/query

Get brands or advertisers with access to a specific product SKU in the merchant's catalog.  
**IMPORTANT**: This endpoint enforces a maximum of 1000 items per request. Payloads that exceed this limit will be rejected. To stay within the limit, split large datasets into multiple requests.

Operation ID: `post-ecommerce-product-advertisers-query`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_MerchantProductIdRequest_post`

**Response 200** (`application/json`): array<string>

---

## PUT /v3/ecommerce/product/advertisers/remove

Remove access to a product SKU in a merchant's catalog from multiple brands or advertisers.  
**IMPORTANT**: This endpoint enforces a maximum of 1000 items per request. Payloads that exceed this limit will be rejected. To stay within the limit, split large datasets into multiple requests.

Operation ID: `put-ecommerce-product-advertisers-remove`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_MerchantProductAdvertisersRequest_put`

**Response 200**: OK

---

## PUT /v3/ecommerce/advertiser/products/add

Allow a brand or advertiser to access specified product SKUs in a merchant's catalog. For details, see [Merchant Product Catalog](/v3/portal/data/doc/CommerceMerchantProductCatalog).  
**IMPORTANT**: This endpoint enforces a maximum of 1000 items per request. Payloads that exceed this limit will be rejected. To stay within the limit, split large datasets into multiple requests.

Operation ID: `put-ecommerce-advertiser-products-add`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_MerchantAdvertiserProductsRequest_put`

**Response 200** (`application/json`): `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_MerchantProduct_`

---

## POST /v3/ecommerce/advertiser/products/query

Get a list of product SKUs associated with a brand or advertiser.  
**IMPORTANT**: This endpoint enforces a maximum of 1000 items per request. Payloads that exceed this limit will be rejected. To stay within the limit, split large datasets into multiple requests.

Operation ID: `post-ecommerce-advertiser-products-query`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_MerchantAdvertiserRequest_post`

**Response 200** (`application/json`): array<string>

---

## PUT /v3/ecommerce/advertiser/products/remove

Remove access to product SKUs in a merchant's catalog from a brand or advertiser.  
**IMPORTANT**: This endpoint enforces a maximum of 1000 items per request. Payloads that exceed this limit will be rejected. To stay within the limit, split large datasets into multiple requests.

Operation ID: `put-ecommerce-advertiser-products-remove`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_MerchantAdvertiserProductsRequest_put`

**Response 200** (`application/json`): `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_MerchantProduct_`

---

## POST /v3/ecommerce/product/batch/delete

Delete products from a merchant's catalog. For details, see [Merchant Product Catalog](/v3/portal/data/doc/CommerceMerchantProductCatalog).  
This is a batch endpoint, which supports partial success. For details, see the *Commerce API Usage Overview* section in [Retail Data Integration API](/v3/portal/data/doc/CommerceSolutionsAPI).  
**IMPORTANT**: This endpoint enforces a maximum of 1000 items per request. Payloads that exceed this limit will be rejected. To stay within the limit, split large datasets into multiple requests.

Operation ID: `post-ecommerce-product-batch-delete`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_MerchantProductIdsRequest_post`

**Response 200** (`application/json`): `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_MerchantProduct_`

---

## PUT /v3/ecommerce/advertiser/product/batch

Allow brands or advertisers to access specified product SKUs in a merchant's catalog. For details, see [Merchant Product Catalog](/v3/portal/data/doc/CommerceMerchantProductCatalog).  
**IMPORTANT**: This endpoint enforces a maximum of 1000 items per request. Payloads that exceed this limit will be rejected. To stay within the limit, split large datasets into multiple requests.

Operation ID: `put-ecommerce-advertiser-product-batch`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_MerchantProductAdvertiserPairsRequest_put`

**Response 200** (`application/json`): `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_MerchantProduct_`

---

## Schemas

### `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_MerchantProduct_`

| Field | Type | Required | Description |
|---|---|---|---|
| BatchResponses | map<string, `TTD.Domain.Shared.PublicAPI.Models_ApiBatchValue_MerchantProduct_`> |  | The batch responses object, which is a dictionary of key-value pairs with the following definitions:   - The key is a platform ID that identifies each `Response` object processed in a batch. Depending on the endpoint, this can be a category, SKU, list, tracking tag, bid list, or another resource ID.   - The value is typically the `Response` object with the category, product, list, tracking tag, bid list, or other resource details, or an `Error` object with the failure details for the operation. _(nullable)_ |
| ContainsError | boolean |  | If set to `true`, indicates that at least one operation in the batch has failed, with the details provided in the `Error` object of the operation.   If set to `false`, indicates that the entire request has been processed successfully.    For the ecommerce batch endpoint response examples, see [Retail Data Integration API](/v3/portal/data/doc/CommerceSolutionsAPI). |

### `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_string_`

| Field | Type | Required | Description |
|---|---|---|---|
| BatchResponses | map<string, `TTD.Domain.Shared.PublicAPI.Models_ApiBatchValue_string_`> |  | The batch responses object, which is a dictionary of key-value pairs with the following definitions:   - The key is a platform ID that identifies each `Response` object processed in a batch. Depending on the endpoint, this can be a category, SKU, list, tracking tag, bid list, or another resource ID.   - The value is typically the `Response` object with the category, product, list, tracking tag, bid list, or other resource details, or an `Error` object with the failure details for the operation. _(nullable)_ |
| ContainsError | boolean |  | If set to `true`, indicates that at least one operation in the batch has failed, with the details provided in the `Error` object of the operation.   If set to `false`, indicates that the entire request has been processed successfully.    For the ecommerce batch endpoint response examples, see [Retail Data Integration API](/v3/portal/data/doc/CommerceSolutionsAPI). |

### `ProductCatalog.RequestModels_MerchantAdvertiserProductsRequest_put`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The unique platform ID for the brand or advertiser that can access product information in the merchant's catalog for audience building and/or measurement. |
| MerchantId | string | yes | The unique platform ID for the merchant that owns the product catalog. |
| SkuIds | array<`ProductCatalog_MerchantProductId_put`> | yes | A list of product SKU IDs that the brand or advertiser can access in a merchant's catalog. |

### `ProductCatalog.RequestModels_MerchantAdvertiserRequest_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The unique platform ID for the brand or advertiser that can access product information in the merchant's catalog for audience building and/or measurement. |
| MerchantId | string | yes | The unique platform ID for the merchant that owns the product catalog. |

### `ProductCatalog.RequestModels_MerchantProductAdvertiserPairsRequest_put`

| Field | Type | Required | Description |
|---|---|---|---|
| MerchantId | string | yes | The unique platform ID for the merchant that owns the product catalog. |
| ProductAdvertiserPair | array<`ProductCatalog.RequestModels_MerchantProductAdvertiserPairRequest_put`> | yes | A list of product SKU IDs that the brand or advertiser can access in a merchant's catalog. |

### `ProductCatalog.RequestModels_MerchantProductAdvertisersRequest_put`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserIds | array<`ProductCatalog_MerchantAdvertiserId_put`> | yes | A list of platform IDs for brands or advertiser that can access the specified product SKU. |
| MerchantId | string | yes | The unique platform ID for the merchant that owns the product catalog. |
| SkuId | string | yes | The product SKU ID in a merchant's catalog. _(maxLength 128)_ |

### `ProductCatalog.RequestModels_MerchantProductIdRequest_post`

| Field | Type | Required | Description |
|---|---|---|---|
| MerchantId | string | yes | The unique platform ID for the merchant that owns the product catalog. |
| SkuId | string | yes | The product SKU ID in a merchant's catalog. _(maxLength 128)_ |

### `ProductCatalog.RequestModels_MerchantProductIdsRequest_post`

| Field | Type | Required | Description |
|---|---|---|---|
| MerchantId | string | yes | The unique platform ID for the merchant that owns the product catalog. |
| SkuIds | array<`ProductCatalog_MerchantProductId_post`> | yes | A list of products to be created or updated. |

### `ProductCatalog.RequestModels_MerchantProductsRequest_put`

| Field | Type | Required | Description |
|---|---|---|---|
| MerchantId | string | yes | The unique platform ID for the merchant that owns the product catalog. |
| Products | array<`ProductCatalog.RequestModels_MerchantProductRequest_put`> | yes | A list of products to be created or updated. |

### `TTD.Domain.Shared.PublicAPI.Models_ApiBatchValue_MerchantProduct_`

| Field | Type | Required | Description |
|---|---|---|---|
| Error | `TTD.Domain.Shared.PublicAPI.Models_ApiBatchError` |  | The Error object sent back by the api if the section of the batch query failed. _(nullable)_ |
| Response | `ProductCatalog.ResponseModels_MerchantProduct` |  | The response sent back by the api if the section of the batch query is successful. _(nullable)_ |

### `TTD.Domain.Shared.PublicAPI.Models_ApiBatchValue_string_`

| Field | Type | Required | Description |
|---|---|---|---|
| Error | `TTD.Domain.Shared.PublicAPI.Models_ApiBatchError` |  | The Error object sent back by the api if the section of the batch query failed. _(nullable)_ |
| Response | string |  | The response sent back by the api if the section of the batch query is successful. _(nullable)_ |

### `ProductCatalog_MerchantProductId_put`

| Field | Type | Required | Description |
|---|---|---|---|
| SkuId | string | yes | The product SKU ID in a merchant's catalog. _(maxLength 128)_ |

### `ProductCatalog.RequestModels_MerchantProductAdvertiserPairRequest_put`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The unique platform ID for the brand or advertiser that can access product information in the merchant's catalog for audience building and/or measurement. |
| SkuId | string | yes | The product SKU ID in a merchant's catalog _(maxLength 128)_ |

### `ProductCatalog_MerchantAdvertiserId_put`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The unique platform ID for the brand or advertiser. |

### `ProductCatalog_MerchantProductId_post`

| Field | Type | Required | Description |
|---|---|---|---|
| SkuId | string | yes | The product SKU ID in a merchant's catalog. _(maxLength 128)_ |

### `ProductCatalog.RequestModels_MerchantProductRequest_put`

| Field | Type | Required | Description |
|---|---|---|---|
| ProductName | string | yes | Corresponding Name/Title for the SKU _(maxLength 150)_ |
| SkuId | string | yes | The product SKU ID in a merchant's catalog _(maxLength 128)_ |
| AgeGroup | string |  | The age group of the product _(maxLength 128)_ |
| Availability | string |  | Availability (stock) status of the SKU _(maxLength 64)_ |
| BrandName | string |  | SKU's Brand Name _(maxLength 256)_ |
| CategoryId | string |  | Category ID for the category of the SKU _(maxLength 64)_ |
| Color | string |  | The color of the product _(maxLength 128)_ |
| Custom1 | string |  | Custom field 1 _(maxLength 128)_ |
| Custom2 | string |  | Custom field 2 _(maxLength 128)_ |
| Custom3 | string |  | Custom field 3. _(maxLength 128)_ |
| Custom4 | string |  | Custom field 4 _(maxLength 128)_ |
| Custom5 | string |  | Custom field 5 _(maxLength 128)_ |
| CustomNumeric1 | number (double) |  | Custom numeric field 1 |
| CustomNumeric2 | number (double) |  | Custom numeric field 2 |
| CustomNumeric3 | number (double) |  | Custom numeric field 3 |
| CustomNumeric4 | number (double) |  | Custom numeric field 4 |
| CustomNumeric5 | number (double) |  | Custom numeric field 5 |
| Description | string |  | Description of the SKU _(maxLength 1024)_ |
| GTIN | string |  | The Global Trade Item Number (GTIN) of the product _(maxLength 64)_ |
| ImageLink | string |  | URL for the main SKU image _(maxLength 1024)_ |
| Link | string |  | URL for the landing page on the website _(maxLength 1024)_ |
| MobileLink | string |  | URL for the mobile-optimized page or a deeplink for a mobile application _(maxLength 1024)_ |
| MPN | string |  | The Manufacturer Part Number (MPN) of the product _(maxLength 128)_ |
| Price | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The unit price of the product _(nullable)_ |
| Size | string |  | The size of the product _(maxLength 128)_ |

### `TTD.Domain.Shared.PublicAPI.Models_ApiBatchError`

| Field | Type | Required | Description |
|---|---|---|---|
| ErrorCode | `System.Net_HttpStatusCode` |  | Represents the standard http error code associated with the issue. |
| Message | string |  | Message containing the reason why the error occurred. _(nullable)_ |

### `ProductCatalog.ResponseModels_MerchantProduct`

| Field | Type | Required | Description |
|---|---|---|---|
| AgeGroup | string |  | The age group of the product. _(nullable)_ |
| Availability | string |  | The stock availability status of the product. _(nullable)_ |
| BrandName | string |  | The name of the merchant's brand to which the product belongs. _(nullable)_ |
| CategoryId | string |  | The merchant's ID for the category to which the product belongs. _(nullable)_ |
| Color | string |  | The color of the product. _(nullable)_ |
| CreatedAtUtc | string (date-time) |  | The timestamp of when the product was created in the merchant's catalog. |
| Custom1 | string |  | Custom field 1. _(nullable)_ |
| Custom2 | string |  | Custom field 2. _(nullable)_ |
| Custom3 | string |  | Custom field 3. _(nullable)_ |
| Custom4 | string |  | Custom field 4. _(nullable)_ |
| Custom5 | string |  | Custom field 5. _(nullable)_ |
| CustomNumeric1 | number (double) |  | Custom numeric field 1. _(nullable)_ |
| CustomNumeric2 | number (double) |  | Custom numeric field 2. _(nullable)_ |
| CustomNumeric3 | number (double) |  | Custom numeric field 3. _(nullable)_ |
| CustomNumeric4 | number (double) |  | Custom numeric field 4. _(nullable)_ |
| CustomNumeric5 | number (double) |  | Custom numeric field 5. _(nullable)_ |
| Description | string |  | The description of the product. _(nullable)_ |
| GTIN | string |  | The Global Trade Item Number (GTIN) of the product. _(nullable)_ |
| ImageLink | string |  | The URL of the main image for the product. _(nullable)_ |
| LastUpdatedAtUtc | string (date-time) |  | The timestamp of when the product information was last updated. |
| Link | string |  | The URL of the landing page on the merchant's website. _(nullable)_ |
| MobileLink | string |  | The URL for the mobile-optimized page or the deeplink for the merchant's mobile application. _(nullable)_ |
| MPN | string |  | The Manufacturer Part Number (MPN) of the product. _(nullable)_ |
| Price | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | The price per unit of the product. _(nullable)_ |
| ProductName | string |  | The product name in a merchant's catalog. _(nullable)_ |
| Size | string |  | The size of the product. _(nullable)_ |
| SkuId | string |  | The product SKU ID in a merchant's catalog. _(nullable)_ |

### `TTD.Domain.Shared.Http.Metadata.Models_Money`

Describes an amount of money in a specific currency.

| Field | Type | Required | Description |
|---|---|---|---|
| Amount | number (double) | yes | The money amount, specified as a decimal, for example, 1.5 for $1.50. |
| CurrencyCode | `TheTradeDesk_CurrencyCode` | yes | The currency of the money value specified in the `Amount`, for example, "USD" for $1.50 US dollars.   Unless you've arranged different terms during onboarding, your partner account and all its associated advertisers use the same currency, namely, USD.   If you you need to use another currency, please contact your Account Manager.   If multi-currency support is enabled for your account, see the Currency API for the full set of supported currencies and their codes. |

### `System.Net_HttpStatusCode`

Type: string enum(Continue, SwitchingProtocols, Processing, EarlyHints, OK, Created, Accepted, NonAuthoritativeInformation, NoContent, ResetContent, PartialContent, MultiStatus, AlreadyReported, IMUsed, MultipleChoices, MovedPermanently, Found, SeeOther, NotModified, UseProxy, Unused, RedirectKeepVerb, PermanentRedirect, BadRequest, Unauthorized, PaymentRequired, Forbidden, NotFound, MethodNotAllowed, NotAcceptable, ProxyAuthenticationRequired, RequestTimeout, Conflict, Gone, LengthRequired, PreconditionFailed, RequestEntityTooLarge, RequestUriTooLong, UnsupportedMediaType, RequestedRangeNotSatisfiable, ExpectationFailed, MisdirectedRequest, UnprocessableEntity, Locked, FailedDependency, UpgradeRequired, PreconditionRequired, TooManyRequests, RequestHeaderFieldsTooLarge, UnavailableForLegalReasons, InternalServerError, NotImplemented, BadGateway, ServiceUnavailable, GatewayTimeout, HttpVersionNotSupported, VariantAlsoNegotiates, InsufficientStorage, LoopDetected, NotExtended, NetworkAuthenticationRequired)

### `TheTradeDesk_CurrencyCode`

Type: string enum(None, AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF, BMD, BND, BOB, BRL, BSD, BTN, BWP, BYR, BZD, CAD, CDF, CHF, CLF, CLP, CNH, CNY, COP, CRC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ERN, ETB, EUR, FJD, FKP, GBP, GEL, GHS, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HRK, HTG, HUF, IDR, ILS, INR, IQD, IRR, ISK, JMD, JOD, JPY, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LTL, LVL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MRO, MUR, MVR, MWK, MXN, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SRD, STD, SVC, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD, TWD, TZS, UAH, UGX, USD, UYU, UZS, VEF, VND, VUV, WST, XAF, XCD, XDR, XOF, XPF, YER, ZAR, ZMW, ZWL)

