# Advertiser Product List Tracking Tag

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 3

---

## POST /v3/ecommerce/trackingtag/lists/query

Get all tracking tags and their associated product lists for a given advertiser ID. For details, see [Product List Tracking Tags](/v3/portal/data/doc/CommerceTrackingTag).

Operation ID: `post-ecommerce-trackingtag-lists-query`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_MerchantAdvertiserRequest_post`

**Response 200** (`application/json`): `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_CatalogListInfo_`

---

## POST /v3/ecommerce/campaigns/trackingtag/lists/query

Get campaign IDs, tracking tags, product lists and their associated advertisers for a given merchant ID. For details, see [Product List Tracking Tags](/v3/portal/data/doc/CommerceTrackingTag).

Operation ID: `post-ecommerce-campaigns-trackingtag-lists-query`

**Request body** (`application/json`, required): `TTD.API.PublicAPI.Contracts.Models.ProductCatalog.RequestModels_QueryCatalogListsForTrackingTagsRequest_post`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_AdvertiserCampaignCatalogListTrackingTag_`

---

## POST /v3/ecommerce/trackingtag/lists/batch/query

Get the names and IDs of product lists for multiple tracking tag IDs. For details, see [Product List Tracking Tags](/v3/portal/data/doc/CommerceTrackingTag).  
This is a batch endpoint, which supports partial success. For details, see the *Commerce API Usage Overview* section in [Retail Data Integration API](/v3/portal/data/doc/CommerceSolutionsAPI).

Operation ID: `post-ecommerce-trackingtag-lists-batch-query`

**Request body** (`application/json`, required): `ProductCatalog.RequestModels_MerchantAdvertiserTrackingTagsRequest_post`

**Response 200** (`application/json`): `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_CatalogListInfo_`

---

## Schemas

### `TTD.API.PublicAPI.Contracts.Models.ProductCatalog.RequestModels_QueryCatalogListsForTrackingTagsRequest_post`

| Field | Type | Required | Description |
|---|---|---|---|
| MerchantId | string | yes | The unique platform ID for the merchant that owns the product catalog. |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| UpdatesSinceDateTimeUtc | string (date-time) |  | Timestamp in UTC. When provided, the response will only include results that have been modified since this timestamp (inclusive of timestamp provided). |

### `TTD.Domain.Shared.PublicAPI.Models_ApiBatchResponse_string_CatalogListInfo_`

| Field | Type | Required | Description |
|---|---|---|---|
| BatchResponses | map<string, `TTD.Domain.Shared.PublicAPI.Models_ApiBatchValue_CatalogListInfo_`> |  | The batch responses object, which is a dictionary of key-value pairs with the following definitions:   - The key is a platform ID that identifies each `Response` object processed in a batch. Depending on the endpoint, this can be a category, SKU, list, tracking tag, bid list, or another resource ID.   - The value is typically the `Response` object with the category, product, list, tracking tag, bid list, or other resource details, or an `Error` object with the failure details for the operation. _(nullable)_ |
| ContainsError | boolean |  | If set to `true`, indicates that at least one operation in the batch has failed, with the details provided in the `Error` object of the operation.   If set to `false`, indicates that the entire request has been processed successfully.    For the ecommerce batch endpoint response examples, see [Retail Data Integration API](/v3/portal/data/doc/CommerceSolutionsAPI). |

### `ProductCatalog.RequestModels_MerchantAdvertiserRequest_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The unique platform ID for the brand or advertiser that can access product information in the merchant's catalog for audience building and/or measurement. |
| MerchantId | string | yes | The unique platform ID for the merchant that owns the product catalog. |

### `ProductCatalog.RequestModels_MerchantAdvertiserTrackingTagsRequest_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The unique platform ID for the brand or advertiser that can access product information in the merchant's catalog for audience building and/or measurement. |
| MerchantId | string | yes | The unique platform ID for the merchant that owns the product catalog. |
| TrackingTagIds | array<`ProductCatalog_ProductListTrackingTagId_post`> | yes | A list of tracking tag IDs. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_AdvertiserCampaignCatalogListTrackingTag_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`TTD.API.PublicAPI.Contracts.Models.ProductCatalog_AdvertiserCampaignCatalogListTrackingTag`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TTD.Domain.Shared.PublicAPI.Models_ApiBatchValue_CatalogListInfo_`

| Field | Type | Required | Description |
|---|---|---|---|
| Error | `TTD.Domain.Shared.PublicAPI.Models_ApiBatchError` |  | The Error object sent back by the api if the section of the batch query failed. _(nullable)_ |
| Response | `ProductCatalog_CatalogListInfo` |  | The response sent back by the api if the section of the batch query is successful. _(nullable)_ |

### `ProductCatalog_ProductListTrackingTagId_post`

| Field | Type | Required | Description |
|---|---|---|---|
| TrackingTagId | string | yes | The unique platform ID for the tracking tag. |

### `TTD.API.PublicAPI.Contracts.Models.ProductCatalog_AdvertiserCampaignCatalogListTrackingTag`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The unique platform ID for the brand or advertiser with permission to the data of the requested merchant _(nullable)_ |
| CampaignCatalogListTrackingTags | array<`TTD.API.PublicAPI.Contracts.Models.ProductCatalog_CampaignCatalogListTrackingTag`> |  | _(nullable)_ |

### `TTD.Domain.Shared.PublicAPI.Models_ApiBatchError`

| Field | Type | Required | Description |
|---|---|---|---|
| ErrorCode | `System.Net_HttpStatusCode` |  | Represents the standard http error code associated with the issue. |
| Message | string |  | Message containing the reason why the error occurred. _(nullable)_ |

### `ProductCatalog_CatalogListInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| ListId | string |  | The unique platform ID for the product list. _(nullable)_ |
| ListName | string |  | The name of the product list. _(nullable)_ |

### `TTD.API.PublicAPI.Contracts.Models.ProductCatalog_CampaignCatalogListTrackingTag`

| Field | Type | Required | Description |
|---|---|---|---|
| CampaignIdsByTrackingTagIds | map<string, array<`TTD.API.PublicAPI.Contracts.Models.ProductCatalog_CampaignInfo`>> |  | A dictionary, where the key is the TrackingTagId, and value is a list of objects that contains the CampaignIds assigned to them. _(nullable)_ |
| LastUpdatedAtUtc | string (date-time) |  | The timestamp of when the product list was last updated. |
| ListId | string |  | The unique platform ID for the product list. _(nullable)_ |
| ListName | string |  | The name of the product list. _(nullable)_ |

### `System.Net_HttpStatusCode`

Type: string enum(Continue, SwitchingProtocols, Processing, EarlyHints, OK, Created, Accepted, NonAuthoritativeInformation, NoContent, ResetContent, PartialContent, MultiStatus, AlreadyReported, IMUsed, MultipleChoices, MovedPermanently, Found, SeeOther, NotModified, UseProxy, Unused, RedirectKeepVerb, PermanentRedirect, BadRequest, Unauthorized, PaymentRequired, Forbidden, NotFound, MethodNotAllowed, NotAcceptable, ProxyAuthenticationRequired, RequestTimeout, Conflict, Gone, LengthRequired, PreconditionFailed, RequestEntityTooLarge, RequestUriTooLong, UnsupportedMediaType, RequestedRangeNotSatisfiable, ExpectationFailed, MisdirectedRequest, UnprocessableEntity, Locked, FailedDependency, UpgradeRequired, PreconditionRequired, TooManyRequests, RequestHeaderFieldsTooLarge, UnavailableForLegalReasons, InternalServerError, NotImplemented, BadGateway, ServiceUnavailable, GatewayTimeout, HttpVersionNotSupported, VariantAlsoNegotiates, InsufficientStorage, LoopDetected, NotExtended, NetworkAuthenticationRequired)

### `TTD.API.PublicAPI.Contracts.Models.ProductCatalog_CampaignInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| CampaignId | string |  | The ID of the Campaign associated with the Tracking Tag _(nullable)_ |

