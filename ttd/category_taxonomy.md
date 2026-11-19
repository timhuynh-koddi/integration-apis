# Category Taxonomy

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 2

---

## GET /v3/categorytaxonomy/industrycategorytaxonomies

Get a list of the available industry category taxonomies.

Operation ID: `get-categorytaxonomy-industrycategorytaxonomies`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_CategoryTaxonomy_`

---

## GET /v3/categorytaxonomy/{categoryTaxonomyId}/category/industrycategories

Get a complete tree of industry categories, including root categories, for the specified taxonomy ID.  
You can traverse root categories to sub-categories within the taxonomy tree.

Operation ID: `get-categorytaxonomy-categorytaxonomyid-category-industrycategories`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| categoryTaxonomyId | path | integer (int32) | yes |  |

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_Category_`

---

## Schemas

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_CategoryTaxonomy_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`Category_CategoryTaxonomy`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_Category_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`Category_Category`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `Category_CategoryTaxonomy`

| Field | Type | Required | Description |
|---|---|---|---|
| CategoryTaxonomyId | integer (int32) |  | The taxonomy ID. |
| CategoryTaxonomyName | string |  | The taxonomy name. _(nullable)_ |
| CategoryTaxonomyVersion | string |  | The taxonomy version. _(nullable)_ |

### `Category_Category`

| Field | Type | Required | Description |
|---|---|---|---|
| CategoryId | integer (int64) |  | The platform ID of the category. |
| Children | array<`Category_Category`> |  | The list of child categories under this category. |
| ExternalId | string |  | The ID provided by the owner (for example, IAB) of the category taxonomy. _(nullable)_ |
| IsSensitive | boolean |  | The flag indicating if the category is sensitive or not. |
| MappingInformation | array<`Category_CategoryMapping`> |  | The list of categories to which this category is mapped in other taxonomies. _(nullable)_ |
| Name | string |  | The name of the category. |
| ParentCategoryId | integer (int64) |  | The ID of the parent category. For root categories, the value is `null`. _(nullable)_ |
| Path | string |  | The full name of the category, including the names of all parent categories, starting with the root. |

### `Category_CategoryMapping`

| Field | Type | Required | Description |
|---|---|---|---|
| CategoryId | integer (int64) |  | The ID of the category to which this category is mapped. |
| CategoryTaxonomyId | integer (int32) |  | The ID of the taxonomy to which categories this category is mapped. |
| ExternalId | string |  | The ID provided by the owner of the taxonomy (for example, IAB) to which this category is mapped. _(nullable)_ |

