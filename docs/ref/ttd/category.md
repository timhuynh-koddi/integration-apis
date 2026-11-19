# Category

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 2

---

## GET /v3/category/query/facets

Get a list of facets by which to query categories in a taxonomy.

Operation ID: `get-category-query-facets`

**Response 200** (`application/json`): `Category_CategoryFacets`

---

## POST /v3/category/query

Retrieve a list of IDs within a category that can be used for dimensional targeting.

Operation ID: `post-category-query`

**Request body** (`application/json`, required): `Category_CategoryQuery`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_CategoryInfo_`

---

## Schemas

### `Category_CategoryFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| CategorySourceType | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_CategorySourceType_`> |  | The category types should be returned. |
| SortingFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_CategorySortingField_`> |  | The fields by which category may be sorted in a query. |

### `Category_CategoryQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| AdvertiserId | string |  | The ID of the advertiser making this query.   Required if `PartnerId` is not specified. _(nullable)_ |
| CategorySourceType | `Category_CategorySourceType` |  | The source type of the category list that should be returned.   Refer to CategorySourceType enum for a list of possible values. |
| PartnerId | string |  | The ID of the partner making this query.   Required if `AdvertiserId` is not specified. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_CategorySortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by Name ascending. _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_CategoryInfo_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`Category_CategoryInfo`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_CategorySortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `Category_CategorySortingField` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_CategorySourceType_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `Category_CategorySourceType` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `Category_CategorySourceType`

Type: string enum(UniversalCategoryTaxonomy, IntegralContextual, SemasioContextual, Peer39Contextual, DoubleVerifyContextual, IntegralBrandSafety, IntegralVideoBrandSafety, Peer39BrandSafety, DoubleVerifyBrandSafety, DoubleVerifyBotAvoidance, ContextualApp, Peer39PageQuality, IntegralPageQuality, IntegralVideoPageQuality, IntegralViewability, IntegralVideoViewability, DoubleVerifyViewability, DoubleVerifyVideoViewability, Peer39Viewability, RTBAsiaPageQuality, RTBAsiaVideoPageQuality, ContextualSupplyVendorCategory, ContextualSupplyVendorGenre, TTDContextualCategory, EmetriqContextualCategory, TencentPageQualityCategory, ComscoreContextualCategory, CaptifyContextualCategory, AdFontesContextualCategory, GumGumContextualCategory, NewsGuardContextualCategory, IllumaContextualCategory, AudigentContextualCategory, ShareThisContextualCategory, WeboramaContextualCategory, DstilleryContextualCategory, OSDSContextualCategory, CrossPixelContextualCategory, LumenContextualCategory, AdelaideContextualCategory, QwarryContextualCategory, BarometerContextualCategory, SirdataContextualCategory, MobianContextualCategory, SilverpushContextualCategory, FourDContextualCategory, AeternaLabsContextualCategory, XplnContextualCategory, AblidaContextualCategory, hyScoreContextualCategory, TrueRelevanceContextualCategory, NanoInteractiveContextualCategory, RaasLabContextualCategory, AnokiIncContextualCategory)

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_CategorySortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `Category_CategorySortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `Category_CategoryInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| CategoryBidListType | `Contextual_ContextualCategoryBidListType` |  | Indicates how the category should be used in bid lists. |
| Id | string |  | The ID of the category. This ID is used for category targeting for ad groups. _(nullable)_ |
| Name | string |  | The name of the category. _(nullable)_ |
| ParentId | string |  | The ID of the immediate parent category. Returns `null` if the category does not have a parent category or is at the root level. _(nullable)_ |
| Path | string |  | The full hierarchical path of the category that typically consists of the category name and the names of its parent categories. _(nullable)_ |

### `Category_CategorySortingField`

Type: string enum(Path)

### `Contextual_ContextualCategoryBidListType`

Type: string enum(Both, Block, Target)

