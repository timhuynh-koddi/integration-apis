# Merchant Category

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 3

---

## PUT /v3/ecommerce/category/batch

Create new or update existing first-party categories in a merchant's product catalog. For details, see [Merchant Product Catalog](/doc/CommerceMerchantProductCatalogBuilding).  
Here's what you need to know about using this endpoint:  
- If your merchant is setup with a third-party category provider, such as Google, Facebook, or Shopify, you are not authorized to modify categories via this endpoint.  
- This is an upsert batch endpoint, which supports partial success. For details, see [Commerce Solutions API](/doc/CommerceSolutionsAPI).  
- This endpoint enforces a maximum of 1000 items per request. Payloads that exceed this limit will be rejected. To stay within the limit, split large datasets into multiple requests.

Operation ID: `put-ecommerce-category-batch`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_CategoriesRequest_put`

**Response 200** (`application/json`): `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_MerchantCategory_`

---

## POST /v3/ecommerce/category/batch/query

Get multiple category details from a merchant's product catalog. For details, see [Merchant Product Catalog](/doc/CommerceMerchantProductCatalogBuilding).  
Here's what you need to know about using this endpoint:  
- This is a batch endpoint, which supports partial success. For details, see [Commerce Solutions API](/doc/CommerceSolutionsAPI).  
- This endpoint enforces a maximum of 1000 items per request. Payloads that exceed this limit will be rejected. To stay within the limit, split large datasets into multiple requests.

Operation ID: `post-ecommerce-category-batch-query`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_CategoryIdsRequest_post`

**Response 200** (`application/json`): `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_MerchantCategory_`

---

## POST /v3/ecommerce/category/batch/delete

Delete multiple categories from a merchant's product catalog. For details, see [Merchant Product Catalog](/doc/CommerceMerchantProductCatalogBuilding).  
Here's what you need to know about using this endpoint:  
- If your merchant is setup with a third-party category provider, such as Google, Facebook, or Shopify, you are not authorized to modify categories via this endpoint.  
- This is a batch endpoint, which supports partial success. For details, see [Commerce Solutions API](/doc/CommerceSolutionsAPI).  
- To delete a category, you must reassign or delete any associated products and reassign or delete its child categories, if the category has any.  
- This endpoint enforces a maximum of 1000 items per request. Payloads that exceed this limit will be rejected. To stay within the limit, split large datasets into multiple requests.

Operation ID: `post-ecommerce-category-batch-delete`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_CategoryIdsRequest_post`

**Response 200** (`application/json`): `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_MerchantCategory_`

---

## Schemas

### `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_MerchantCategory_`

| Field | Type | Required | Description |
|---|---|---|---|
| BatchResponses | map<string, `TTD.Domain.Shared.PublicAPI.Models_ApiBatchValue_MerchantCategory_`> |  | The batch responses object, which is a dictionary of key-value pairs with the following definitions:   - The key is a platform ID that identifies each `Response` object processed in a batch. Depending on the endpoint, this can be a category, SKU, list, tracking tag, bid list, or another resource ID.   - The value is typically the `Response` object with the category, product, list, tracking tag, bid list, or other resource details, or an `Error` object with the failure details for the operation. _(nullable)_ |
| ContainsError | boolean |  | If set to `true`, indicates that at least one operation in the batch has failed, with the details provided in the `Error` object of the operation.   If set to `false`, indicates that the entire request has been processed successfully.    For the ecommerce batch endpoint response examples, see [Retail Data Integration API](/v3/portal/data/doc/CommerceSolutionsAPI). |

### `ProductCatalog.RequestModels_CategoriesRequest_put`

| Field | Type | Required | Description |
|---|---|---|---|
| Categories | array<`ProductCatalog.RequestModels_MerchantCategoryRequest_put`> | yes | A list of categories to be created or updated in the merchant's product catalog. |
| MerchantId | string | yes | The unique platform ID for the merchant that owns the product catalog. |

### `ProductCatalog.RequestModels_CategoryIdsRequest_post`

| Field | Type | Required | Description |
|---|---|---|---|
| CategoryIds | array<`ProductCatalog_MerchantCategoryId_post`> | yes | Identifiers for the Category |
| MerchantId | string | yes | The unique platform ID for the merchant that owns the product catalog. |

### `TTD.Domain.Shared.PublicAPI.Models_ApiBatchValue_MerchantCategory_`

| Field | Type | Required | Description |
|---|---|---|---|
| Error | `TTD.Domain.Shared.PublicAPI.Models_ApiBatchError` |  | The Error object sent back by the api if the section of the batch query failed. _(nullable)_ |
| Response | `ProductCatalog_MerchantCategory` |  | The response sent back by the api if the section of the batch query is successful. _(nullable)_ |

### `ProductCatalog.RequestModels_MerchantCategoryRequest_put`

| Field | Type | Required | Description |
|---|---|---|---|
| CategoryId | string | yes | The unique ID assigned to the category in the merchant's product catalog. _(maxLength 64)_ |
| CategoryName | string | yes | The category name in the merchant's product catalog. _(maxLength 128)_ |
| ParentCategories | array<string> |  | The merchant product catalog IDs for the parent categories of the category to be created or updated. _(nullable)_ |

### `ProductCatalog_MerchantCategoryId_post`

| Field | Type | Required | Description |
|---|---|---|---|
| CategoryId | string | yes | The unique ID assigned to the category in the merchant's product catalog. _(maxLength 64)_ |

### `TTD.Domain.Shared.PublicAPI.Models_ApiBatchError`

| Field | Type | Required | Description |
|---|---|---|---|
| ErrorCode | `System.Net_HttpStatusCode` |  | Represents the standard http error code associated with the issue. |
| Message | string |  | Message containing the reason why the error occurred. _(nullable)_ |

### `ProductCatalog_MerchantCategory`

| Field | Type | Required | Description |
|---|---|---|---|
| CategoryId | string |  | The unique ID assigned to the category in the merchant's product catalog. _(nullable)_ |
| CategoryName | string |  | The category name in the merchant's product catalog. _(nullable)_ |
| ParentCategories | array<string> |  | The merchant product catalog IDs for the parent categories of the category to be created or updated. _(nullable)_ |

### `System.Net_HttpStatusCode`

Type: string enum(Continue, SwitchingProtocols, Processing, EarlyHints, OK, Created, Accepted, NonAuthoritativeInformation, NoContent, ResetContent, PartialContent, MultiStatus, AlreadyReported, IMUsed, MultipleChoices, MovedPermanently, Found, SeeOther, NotModified, UseProxy, Unused, RedirectKeepVerb, PermanentRedirect, BadRequest, Unauthorized, PaymentRequired, Forbidden, NotFound, MethodNotAllowed, NotAcceptable, ProxyAuthenticationRequired, RequestTimeout, Conflict, Gone, LengthRequired, PreconditionFailed, RequestEntityTooLarge, RequestUriTooLong, UnsupportedMediaType, RequestedRangeNotSatisfiable, ExpectationFailed, MisdirectedRequest, UnprocessableEntity, Locked, FailedDependency, UpgradeRequired, PreconditionRequired, TooManyRequests, RequestHeaderFieldsTooLarge, UnavailableForLegalReasons, InternalServerError, NotImplemented, BadGateway, ServiceUnavailable, GatewayTimeout, HttpVersionNotSupported, VariantAlsoNegotiates, InsufficientStorage, LoopDetected, NotExtended, NetworkAuthenticationRequired)

