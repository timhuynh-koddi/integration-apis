# Advertiser Product List

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 13

---

## POST /v3/ecommerce/list/batch

Create multiple lists for retargeting and measurement using a merchant's product data. For details, see [Advertiser Product Lists](/v3/portal/data/doc/CommerceAdvertiserProductList).  
This is a batch endpoint, which supports partial success. For details, see the *Commerce API Usage Overview* section in [Retail Data Integration API](/v3/portal/data/doc/CommerceSolutionsAPI).

Operation ID: `post-ecommerce-list-batch`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_CreateProductListsRequest_post`

**Response 200** (`application/json`): `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_ProductList_`

---

## PUT /v3/ecommerce/list/batch

Update the names and/or descriptions of multiple product lists. For details, see [Advertiser Product Lists](/v3/portal/data/doc/CommerceAdvertiserProductList).  
This is a batch endpoint, which supports partial success. For details, see the *Commerce API Usage Overview* section in [Retail Data Integration API](/v3/portal/data/doc/CommerceSolutionsAPI).

Operation ID: `put-ecommerce-list-batch`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_UpdateProductListsRequest_put`

**Response 200** (`application/json`): `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_ProductList_`

---

## POST /v3/ecommerce/list/batch/clone

Clone multiple product lists along with their contents (product SKUs from a merchant's catalog). For details, see [Advertiser Product Lists](/v3/portal/data/doc/CommerceAdvertiserProductList).  
This is a batch endpoint, which supports partial success. For details, see the *Commerce API Usage Overview* section in [Retail Data Integration API](/v3/portal/data/doc/CommerceSolutionsAPI).

Operation ID: `post-ecommerce-list-batch-clone`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_CloneProductListsRequest_post`

**Response 200** (`application/json`): `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_ProductList_`

---

## POST /v3/ecommerce/list/batch/query

Get the names, descriptions, and creation and last update timestamps for multiple product lists. For details, see [Advertiser Product Lists](/v3/portal/data/doc/CommerceAdvertiserProductList).  
This is a batch endpoint, which supports partial success. For details, see the *Commerce API Usage Overview* section in [Retail Data Integration API](/v3/portal/data/doc/CommerceSolutionsAPI).

Operation ID: `post-ecommerce-list-batch-query`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_ProductListIdsRequest_post`

**Response 200** (`application/json`): `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_ProductList_`

---

## PUT /v3/ecommerce/list/products/add

Add multiple SKUs from a merchant's catalog to a product list. For details, see [Advertiser Product Lists](/v3/portal/data/doc/CommerceAdvertiserProductList).

Operation ID: `put-ecommerce-list-products-add`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_ProductListProductsRequest_put`

**Response 200** (`application/json`): `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_MerchantProductId_`

---

## PUT /v3/ecommerce/list/products/remove

Remove multiple SKUs from a product list. For details, see [Advertiser Product Lists](/v3/portal/data/doc/CommerceAdvertiserProductList).

Operation ID: `put-ecommerce-list-products-remove`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_ProductListProductsRequest_put`

**Response 200** (`application/json`): `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_MerchantProductId_`

---

## PUT /v3/ecommerce/list/rules/add

Ensure the provided rules are applied to a dynamic list. Missing rules are created, existing ones are validated.

Operation ID: `put-ecommerce-list-rules-add`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_ProductListDynamicRulesRequest_put`

**Response 200**: OK

---

## PUT /v3/ecommerce/list/rules/remove

Remove the specified rules applied to a dynamic list.

Operation ID: `put-ecommerce-list-rules-remove`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_ProductListDynamicRulesRequest_put`

**Response 200**: OK

---

## POST /v3/ecommerce/list/rules/query

Query rules applied to a dynamic list.

Operation ID: `post-ecommerce-list-rules-query`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_ProductListQueryRequest_post`

**Response 200** (`application/json`): `ProductCatalog_ProductListDynamicRules`

---

## POST /v3/ecommerce/list/batch/delete

Delete multiple product lists. For details, see [Advertiser Product Lists](/v3/portal/data/doc/CommerceAdvertiserProductList).  
This is a batch endpoint, which supports partial success. For details, see the *Commerce API Usage Overview* section in [Retail Data Integration API](/v3/portal/data/doc/CommerceSolutionsAPI).

Operation ID: `post-ecommerce-list-batch-delete`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_ProductListIdsRequest_post`

**Response 200** (`application/json`): `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_ProductList_`

---

## POST /v3/ecommerce/list/sku/batch/query

Get SKUs of all products added to multiple product lists.  
This is a batch endpoint, which supports partial success. For details, see the *Commerce API Usage Overview* section in [Retail Data Integration API](/v3/portal/data/doc/CommerceSolutionsAPI).

Operation ID: `post-ecommerce-list-sku-batch-query`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_ProductListIdsRequest_post`

**Response 200** (`application/json`): `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_List_string__`

---

## POST /v3/ecommerce/list/targetingdata

Create multiple targeting data for a product list  
This is a batch endpoint, which supports partial success. For details, see the *Commerce API Usage Overview* section in [Retail Data Integration API](/v3/portal/data/doc/CommerceSolutionsAPI).

Operation ID: `post-ecommerce-list-targetingdata`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_ProductListTargetingDataRequest_post`

**Response 200** (`application/json`): `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_Object_`

---

## POST /v3/ecommerce/list/trackingtag

Create product list tracking tags for merchant event names.  
This is a batch endpoint, which supports partial success. For details, see [Product List Tracking Tags](/v3/portal/data/doc/CommerceTrackingTag).

Operation ID: `post-ecommerce-list-trackingtag`

**Request body** (`application/json`, required): `TTD.API.PublicAPI.Contracts.Models.ProductCatalog.RequestModels_CreateTrackingTagForCatalogListRequest_post`

**Response 200** (`application/json`): `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_string_`

---

## Schemas

### `TTD.API.PublicAPI.Contracts.Models.ProductCatalog.RequestModels_CreateTrackingTagForCatalogListRequest_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The unique platform ID for the brand or advertiser that can access product information in the merchant's catalog for audience building and/or measurement. |
| EventNames | array<`ProductCatalog_EventName_post`> | yes | The list of merchant event names to associate the tracking tags with. |
| ListId | string | yes | The unique platform ID for the product list to create a tracking tag for. |
| MerchantId | string | yes | The unique platform ID for the merchant that owns the product catalog. |

### `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_List_string__`

| Field | Type | Required | Description |
|---|---|---|---|
| BatchResponses | map<string, `TTD.Domain.Shared.PublicAPI.Models_ApiBatchValue_List_string__`> |  | The batch responses object, which is a dictionary of key-value pairs with the following definitions:   - The key is a platform ID that identifies each `Response` object processed in a batch. Depending on the endpoint, this can be a category, SKU, list, tracking tag, bid list, or another resource ID.   - The value is typically the `Response` object with the category, product, list, tracking tag, bid list, or other resource details, or an `Error` object with the failure details for the operation. _(nullable)_ |
| ContainsError | boolean |  | If set to `true`, indicates that at least one operation in the batch has failed, with the details provided in the `Error` object of the operation.   If set to `false`, indicates that the entire request has been processed successfully.    For the ecommerce batch endpoint response examples, see [Retail Data Integration API](/v3/portal/data/doc/CommerceSolutionsAPI). |

### `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_MerchantProductId_`

| Field | Type | Required | Description |
|---|---|---|---|
| BatchResponses | map<string, `TTD.Domain.Shared.PublicAPI.Models_ApiBatchValue_MerchantProductId_`> |  | The batch responses object, which is a dictionary of key-value pairs with the following definitions:   - The key is a platform ID that identifies each `Response` object processed in a batch. Depending on the endpoint, this can be a category, SKU, list, tracking tag, bid list, or another resource ID.   - The value is typically the `Response` object with the category, product, list, tracking tag, bid list, or other resource details, or an `Error` object with the failure details for the operation. _(nullable)_ |
| ContainsError | boolean |  | If set to `true`, indicates that at least one operation in the batch has failed, with the details provided in the `Error` object of the operation.   If set to `false`, indicates that the entire request has been processed successfully.    For the ecommerce batch endpoint response examples, see [Retail Data Integration API](/v3/portal/data/doc/CommerceSolutionsAPI). |

### `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_Object_`

| Field | Type | Required | Description |
|---|---|---|---|
| BatchResponses | map<string, `TTD.Domain.Shared.PublicAPI.Models_ApiBatchValue_Object_`> |  | The batch responses object, which is a dictionary of key-value pairs with the following definitions:   - The key is a platform ID that identifies each `Response` object processed in a batch. Depending on the endpoint, this can be a category, SKU, list, tracking tag, bid list, or another resource ID.   - The value is typically the `Response` object with the category, product, list, tracking tag, bid list, or other resource details, or an `Error` object with the failure details for the operation. _(nullable)_ |
| ContainsError | boolean |  | If set to `true`, indicates that at least one operation in the batch has failed, with the details provided in the `Error` object of the operation.   If set to `false`, indicates that the entire request has been processed successfully.    For the ecommerce batch endpoint response examples, see [Retail Data Integration API](/v3/portal/data/doc/CommerceSolutionsAPI). |

### `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_ProductList_`

| Field | Type | Required | Description |
|---|---|---|---|
| BatchResponses | map<string, `TTD.Domain.Shared.PublicAPI.Models_ApiBatchValue_ProductList_`> |  | The batch responses object, which is a dictionary of key-value pairs with the following definitions:   - The key is a platform ID that identifies each `Response` object processed in a batch. Depending on the endpoint, this can be a category, SKU, list, tracking tag, bid list, or another resource ID.   - The value is typically the `Response` object with the category, product, list, tracking tag, bid list, or other resource details, or an `Error` object with the failure details for the operation. _(nullable)_ |
| ContainsError | boolean |  | If set to `true`, indicates that at least one operation in the batch has failed, with the details provided in the `Error` object of the operation.   If set to `false`, indicates that the entire request has been processed successfully.    For the ecommerce batch endpoint response examples, see [Retail Data Integration API](/v3/portal/data/doc/CommerceSolutionsAPI). |

### `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_string_`

| Field | Type | Required | Description |
|---|---|---|---|
| BatchResponses | map<string, `TTD.Domain.Shared.PublicAPI.Models_ApiBatchValue_string_`> |  | The batch responses object, which is a dictionary of key-value pairs with the following definitions:   - The key is a platform ID that identifies each `Response` object processed in a batch. Depending on the endpoint, this can be a category, SKU, list, tracking tag, bid list, or another resource ID.   - The value is typically the `Response` object with the category, product, list, tracking tag, bid list, or other resource details, or an `Error` object with the failure details for the operation. _(nullable)_ |
| ContainsError | boolean |  | If set to `true`, indicates that at least one operation in the batch has failed, with the details provided in the `Error` object of the operation.   If set to `false`, indicates that the entire request has been processed successfully.    For the ecommerce batch endpoint response examples, see [Retail Data Integration API](/v3/portal/data/doc/CommerceSolutionsAPI). |

### `ProductCatalog.RequestModels_CloneProductListsRequest_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The unique platform ID for the brand or advertiser that can access product information in the merchant's catalog for audience building and/or measurement. |
| CloneContexts | array<`ProductCatalog.RequestModels_CloneProductListRequest_post`> | yes | A list of source product lists to be cloned and resulting new lists. |
| MerchantId | string | yes | The unique platform ID for the merchant that owns the product catalog. |

### `ProductCatalog.RequestModels_CreateProductListsRequest_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The unique platform ID for the brand or advertiser that can access product information in the merchant's catalog for audience building and/or measurement. |
| Lists | array<`ProductCatalog.RequestModels_CreateProductListRequest_post`> | yes | Lists to be created. |
| MerchantId | string | yes | The unique platform ID for the merchant that owns the product catalog. |

### `ProductCatalog.RequestModels_ProductListDynamicRulesRequest_put`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The unique platform ID for the brand or advertiser that can access product information in the merchant's catalog for audience building and/or measurement. |
| DynamicRules | array<`ProductCatalog.RequestModels_DynamicRuleRequest_put`> | yes | A list of dynamic rules to be applied to the List. |
| ListId | string | yes | The unique platform ID for the product list. |
| MerchantId | string | yes | The unique platform ID for the merchant that owns the product catalog. |

### `ProductCatalog.RequestModels_ProductListIdsRequest_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The unique platform ID for the brand or advertiser that can access product information in the merchant's catalog for audience building and/or measurement. |
| ListIds | array<`ProductCatalog_ProductListId_post`> | yes | An array of product list IDs. |
| MerchantId | string | yes | The unique platform ID for the merchant that owns the product catalog. |

### `ProductCatalog.RequestModels_ProductListProductsRequest_put`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The unique platform ID for the brand or advertiser that can access product information in the merchant's catalog for audience building and/or measurement. |
| ListId | string | yes | The unique platform ID for the product list. |
| MerchantId | string | yes | The unique platform ID for the merchant that owns the product catalog. |
| SkuIds | array<`ProductCatalog_MerchantProductId_put`> | yes | An array of product list IDs. |

### `ProductCatalog.RequestModels_ProductListQueryRequest_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The unique platform ID for the brand or advertiser that can access product information in the merchant's catalog for audience building and/or measurement. |
| ListId | string | yes | The unique platform ID for the product list. |
| MerchantId | string | yes | The unique platform ID for the merchant that owns the product catalog. |

### `ProductCatalog.RequestModels_ProductListTargetingDataRequest_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The unique platform ID for the brand or advertiser that can access product information in the merchant's catalog for audience building and/or measurement. |
| ListId | string | yes | The unique platform ID for the product list. |
| MerchantId | string | yes | The unique platform ID for the merchant that owns the product catalog. |
| TargetingData | array<`ProductCatalog.RequestModels_TargetingDataRequest_post`> | yes | A list of targeting data to be created |

### `ProductCatalog.RequestModels_UpdateProductListsRequest_put`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The unique platform ID for the brand or advertiser that can access product information in the merchant's catalog for audience building and/or measurement. |
| Lists | array<`ProductCatalog.RequestModels_UpdateProductListV2Request_put`> | yes | The product lists where the names and/or descriptions are to be updated. |
| MerchantId | string | yes | The unique platform ID for the merchant that owns the product catalog. |

### `ProductCatalog_ProductListDynamicRules`

| Field | Type | Required | Description |
|---|---|---|---|
| DynamicRules | array<`ProductCatalog.RequestModels_DynamicRuleRequest`> |  | A list of dynamic rules applied to the list. _(nullable)_ |
| ListId | string |  | The unique platform ID for the product list. _(nullable)_ |

### `ProductCatalog_EventName_post`

| Field | Type | Required | Description |
|---|---|---|---|
| Name | string | yes | The name of the event. _(maxLength 128)_ |

### `TTD.Domain.Shared.PublicAPI.Models_ApiBatchValue_List_string__`

| Field | Type | Required | Description |
|---|---|---|---|
| Error | `TTD.Domain.Shared.PublicAPI.Models_ApiBatchError` |  | The Error object sent back by the api if the section of the batch query failed. _(nullable)_ |
| Response | array<string> |  | The response sent back by the api if the section of the batch query is successful. _(nullable)_ |

### `TTD.Domain.Shared.PublicAPI.Models_ApiBatchValue_MerchantProductId_`

| Field | Type | Required | Description |
|---|---|---|---|
| Error | `TTD.Domain.Shared.PublicAPI.Models_ApiBatchError` |  | The Error object sent back by the api if the section of the batch query failed. _(nullable)_ |
| Response | `ProductCatalog_MerchantProductId` |  | The response sent back by the api if the section of the batch query is successful. _(nullable)_ |

### `TTD.Domain.Shared.PublicAPI.Models_ApiBatchValue_Object_`

| Field | Type | Required | Description |
|---|---|---|---|
| Error | `TTD.Domain.Shared.PublicAPI.Models_ApiBatchError` |  | The Error object sent back by the api if the section of the batch query failed. _(nullable)_ |
| Response | `System_Object` |  | The response sent back by the api if the section of the batch query is successful. _(nullable)_ |

### `TTD.Domain.Shared.PublicAPI.Models_ApiBatchValue_ProductList_`

| Field | Type | Required | Description |
|---|---|---|---|
| Error | `TTD.Domain.Shared.PublicAPI.Models_ApiBatchError` |  | The Error object sent back by the api if the section of the batch query failed. _(nullable)_ |
| Response | `ProductCatalog_ProductList` |  | The response sent back by the api if the section of the batch query is successful. _(nullable)_ |

### `TTD.Domain.Shared.PublicAPI.Models_ApiBatchValue_string_`

| Field | Type | Required | Description |
|---|---|---|---|
| Error | `TTD.Domain.Shared.PublicAPI.Models_ApiBatchError` |  | The Error object sent back by the api if the section of the batch query failed. _(nullable)_ |
| Response | string |  | The response sent back by the api if the section of the batch query is successful. _(nullable)_ |

### `ProductCatalog.RequestModels_CloneProductListRequest_post`

| Field | Type | Required | Description |
|---|---|---|---|
| NewList | `ProductCatalog.RequestModels_ProductListRequest_post` | yes | The new list name and description. |
| SourceListId | `ProductCatalog_ProductListId_post` | yes | The unique platfrom ID for the product list to be cloned. |

### `ProductCatalog.RequestModels_CreateProductListRequest_post`

| Field | Type | Required | Description |
|---|---|---|---|
| ListName | string | yes | The name of the product list. _(maxLength 200)_ |
| IsDynamic | boolean |  | If set to true, indicates that the segment is dynamic, meaning it is automatically populated based on user-defined rules. If set to false, indicates that the segment is static and populated with SKUs from itemsets (product lists). The default value is false. |
| ListDescription | string |  | The description of the product list contents. _(maxLength 1024)_ |

### `ProductCatalog.RequestModels_DynamicRuleRequest_put`

| Field | Type | Required | Description |
|---|---|---|---|
| DynamicRuleType | `ProductCatalog_DynamicRuleType` | yes | The type of rule to apply to dynamically populate the list with the specified subset of items. |
| DynamicRuleValues | array<string> | yes | The list of rule values to apply based on the provided rule type for dynamically populating the list.   IMPORTANT: When the `DynamicRuleType` value is `AllProducts`, you may not specify any values here.   When the `DynamicRuleType` value is `Category`, you must provide the unique ID assigned to the category in the merchant's product catalog.   When the `DynamicRuleType` value is `Brand`, you must provide the relevant brand name from the merchant's product catalog. |

### `ProductCatalog_ProductListId_post`

| Field | Type | Required | Description |
|---|---|---|---|
| ListId | string | yes | The unique platform ID for the product list. |

### `ProductCatalog_MerchantProductId_put`

| Field | Type | Required | Description |
|---|---|---|---|
| SkuId | string | yes | The product SKU ID in a merchant's catalog. _(maxLength 128)_ |

### `ProductCatalog.RequestModels_TargetingDataRequest_post`

| Field | Type | Required | Description |
|---|---|---|---|
| EventName | string | yes | The name of the event in the targeting data. |
| RecencyWindowInDays | integer (int32) | yes | The time, in days, within which a user's recent actions are considered relevant for targeting. |
| SegmentRuleType | `ProductCatalog_SegmentRuleType` | yes | The type of rule to apply that filters the segment by event frequency, monetary value, top customers, relative frequency, or relative monetary value. |
| SegmentRuleValue | number (double) | yes | The rule that defines the segment based on the SegmentRuleType. |
| CustomMetadataRules | array<`ProductCatalog.RequestModels_CustomMetadataRuleRequest_post`> |  | A list of custom metadata rules that conversion events must satisfy to be included in the segment. |
| Description | string |  | The description of the segment, up to 1024 characters. _(maxLength 1024)_ |
| SegmentExpansions | array<`ProductCatalog_SegmentExpansionType`> |  | A list of expansion types for the segment. |
| SegmentNameSuffix | string |  | The suffix to use in the name of the segment, up to 64 characters.   IMPORTANT: This is required when `CustomMetadataRules` is specified. _(maxLength 64)_ |
| IsExpansionEnabled | boolean |  | Whether the segment can expand to target more audiences. If not specified, this defaults to false. _(DEPRECATED)_ |
| SegmentExpansionType | `ProductCatalog_SegmentExpansionType` |  | The level of expansion for the segment to scale from precise, balanced, or expanded. _(DEPRECATED; deprecation: This property has been deprecated. Specify a list of expansion types in the `SegmentExpansions` field instead.)_ |

### `ProductCatalog.RequestModels_UpdateProductListV2Request_put`

| Field | Type | Required | Description |
|---|---|---|---|
| ListId | string | yes | The unique platform ID for the product list. |
| ListName | string | yes | The name of the product list. _(maxLength 200)_ |
| ListDescription | string |  | The description of the product list contents. _(maxLength 1024)_ |

### `ProductCatalog.RequestModels_DynamicRuleRequest`

| Field | Type | Required | Description |
|---|---|---|---|
| DynamicRuleType | `ProductCatalog_DynamicRuleType` |  | The type of rule to apply to dynamically populate the list with the specified subset of items. |
| DynamicRuleValues | array<string> |  | The list of rule values to apply based on the provided rule type for dynamically populating the list.   IMPORTANT: When the `DynamicRuleType` value is `AllProducts`, you may not specify any values here.   When the `DynamicRuleType` value is `Category`, you must provide the unique ID assigned to the category in the merchant's product catalog.   When the `DynamicRuleType` value is `Brand`, you must provide the relevant brand name from the merchant's product catalog. |

### `TTD.Domain.Shared.PublicAPI.Models_ApiBatchError`

| Field | Type | Required | Description |
|---|---|---|---|
| ErrorCode | `System.Net_HttpStatusCode` |  | Represents the standard http error code associated with the issue. |
| Message | string |  | Message containing the reason why the error occurred. _(nullable)_ |

### `ProductCatalog_MerchantProductId`

| Field | Type | Required | Description |
|---|---|---|---|
| SkuId | string |  | The product SKU ID in a merchant's catalog. _(maxLength 128)_ |

### `System_Object`

Type: object

### `ProductCatalog_ProductList`

| Field | Type | Required | Description |
|---|---|---|---|
| CreatedAtUtc | string (date-time) |  | Timestamp of when the List was created. |
| IsDynamic | boolean |  | If set to true, indicates that the list is dynamic, meaning it is automatically generated based on user-defined rules. If set to false, indicates that the list is static and contains product SKUs. The default value is false. |
| LastUpdatedAtUtc | string (date-time) |  | Timestamp of when the List was last updated. |
| ListDescription | string |  | The description of the product list contents. _(nullable)_ |
| ListId | string |  | The unique platform ID for the product list. _(nullable)_ |
| ListName | string |  | The name of the product list. _(nullable)_ |
| TargetingData | `ProductCatalog_ProductListTargetingDataSummary` |  | Targeting data info for this product list. _(nullable)_ |

### `ProductCatalog.RequestModels_ProductListRequest_post`

| Field | Type | Required | Description |
|---|---|---|---|
| ListName | string | yes | The name of the product list. _(maxLength 200)_ |
| ListDescription | string |  | The description of the product list contents. _(maxLength 1024)_ |

### `ProductCatalog_DynamicRuleType`

Type: string enum(AllProducts, Brand, Category)

### `ProductCatalog.RequestModels_CustomMetadataRuleRequest_post`

| Field | Type | Required | Description |
|---|---|---|---|
| DataType | `ProductCatalog_CustomMetadataDataType` | yes | The data type that the field value and the rule values are compared as. |
| Field | `ProductCatalog_CustomMetadataField` | yes | The custom metadata field of the conversion event that the rule is evaluated against. |
| Operator | `ProductCatalog_CustomMetadataOperator` | yes | The comparison to apply between the field value and the rule values.   IMPORTANT: The `Contains`, `DoesNotContain`, `StartsWith`, `EndsWith`, `EqualsTo`, `IsEmpty` and `IsNotEmpty` operators apply to the `String` data type only.   The `LessThan`, `LessThanOrEqualTo`, `GreaterThan`, `GreaterThanOrEqualTo` and `Range` operators apply to the `Integer` and `Date` data types only. |
| RuleValue1 | string |  | The first value to compare the field value against, up to 64 characters. This is the lower bound when the `Operator` value is `Range`.   IMPORTANT: This is required for all operators except `IsEmpty` and `IsNotEmpty`, for which you may not specify a value. _(maxLength 64)_ |
| RuleValue2 | string |  | The upper bound to compare the field value against, up to 64 characters.   IMPORTANT: This is required when the `Operator` value is `Range`, and you may not specify a value for any other operator. _(maxLength 64)_ |

### `ProductCatalog_SegmentExpansionType`

Type: string enum(Precise, Balanced, Expanded)

### `ProductCatalog_SegmentRuleType`

Type: string enum(EventFrequency, MonetaryValue, TopCustomers, RelativeFrequency, RelativeMonetaryValue)

### `System.Net_HttpStatusCode`

Type: string enum(Continue, SwitchingProtocols, Processing, EarlyHints, OK, Created, Accepted, NonAuthoritativeInformation, NoContent, ResetContent, PartialContent, MultiStatus, AlreadyReported, IMUsed, MultipleChoices, MovedPermanently, Found, SeeOther, NotModified, UseProxy, Unused, RedirectKeepVerb, PermanentRedirect, BadRequest, Unauthorized, PaymentRequired, Forbidden, NotFound, MethodNotAllowed, NotAcceptable, ProxyAuthenticationRequired, RequestTimeout, Conflict, Gone, LengthRequired, PreconditionFailed, RequestEntityTooLarge, RequestUriTooLong, UnsupportedMediaType, RequestedRangeNotSatisfiable, ExpectationFailed, MisdirectedRequest, UnprocessableEntity, Locked, FailedDependency, UpgradeRequired, PreconditionRequired, TooManyRequests, RequestHeaderFieldsTooLarge, UnavailableForLegalReasons, InternalServerError, NotImplemented, BadGateway, ServiceUnavailable, GatewayTimeout, HttpVersionNotSupported, VariantAlsoNegotiates, InsufficientStorage, LoopDetected, NotExtended, NetworkAuthenticationRequired)

### `ProductCatalog_ProductListTargetingDataSummary`

| Field | Type | Required | Description |
|---|---|---|---|
| IsTTDManaged | boolean |  | Whether the product list's targeting data is managed by TTD or by the merchant directly. |
| Values | array<`ProductCatalog_TargetingData`> |  | List of targeting data for the product list. _(nullable)_ |

### `ProductCatalog_CustomMetadataDataType`

Type: string enum(String, Integer, Date)

### `ProductCatalog_CustomMetadataField`

Type: string enum(TD1, TD2, TD3, TD4, TD5, TD6, TD7, TD8, TD9, TD10, AnyField)

### `ProductCatalog_CustomMetadataOperator`

Type: string enum(Contains, DoesNotContain, StartsWith, EndsWith, EqualsTo, IsEmpty, IsNotEmpty, LessThan, LessThanOrEqualTo, GreaterThan, GreaterThanOrEqualTo, Range)

### `ProductCatalog_TargetingData`

| Field | Type | Required | Description |
|---|---|---|---|
| EventName | string |  | The event name that is tracked for the product list. _(nullable)_ |
| RecencyWindowInDays | integer (int32) |  | The recency window for this event that is tracked for the product list. |
| SegmentExpansions | array<`ProductCatalog_SegmentExpansionType`> |  | The list of expansion types for the segment. _(nullable)_ |
| SegmentRuleType | `ProductCatalog_SegmentRuleType` |  | The type of the segment rule.   Note: This field is only included for segments managed by The Trade Desk |
| SegmentRuleValue | number (double) |  | The value of the segment rule.   Note: This field is only included for segments managed by The Trade Desk |

