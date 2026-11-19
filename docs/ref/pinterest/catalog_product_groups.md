# Pinterest API v5: Catalog Product Groups

> Source: Pinterest REST API v5 OpenAPI spec (https://github.com/pinterest/api-description, v5.32.0); docs https://developers.pinterest.com/docs/api/v5/. Base URL: https://api.pinterest.com/v5. Fetched 2026-11-19.

Operations: 10

---

## GET /catalogs/product_groups

**List product groups**

Get a list of product groups for a given Catalogs Feed Id owned by the "operation user_account".
- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account: Owner, Admin, Catalogs Manager.

[Learn more](/docs/api-features/shopping-overview/)

Operation ID: `catalogs_product_groups/list`

Scopes: pinterest_oauth2: catalogs:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| id | query | array<integer> |  | Comma-separated list of product group ids |
| feed_id | query | string |  | Filter entities for a given feed_id. If not given, all feeds are considered. |
| catalog_id | query | string |  | Filter entities for a given catalog_id. If not given, all catalogs are considered. |
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |
| bookmark | query | string |  | Cursor used to fetch the next page of items |
| page_size | query | integer |  | Maximum number of items to include in a single page. See documentation on [Pagination](/docs/reference/pagination/) for more information. _(default 25; minimum 1; maximum 250)_ |

**Response 200** (`application/json`): object{bookmark: string, items: array<`CatalogsVerticalProductGroup`>}

---

## POST /catalogs/product_groups

**Create product group**

Create product group to use in Catalogs owned by the "operation user_account".
- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account: Owner, Admin, Catalogs Manager.
"Catalog-based product groups" can include items from all data sources (feeds and API) and are available to both non-retail catalogs with any data sources and retail catalogs with API-created items. If your catalog only contains retail items created via feeds, you should use the "retail feed-based" option.
[Learn more](/docs/api-features/shopping-overview/)

Note: Access to the Creative Assets catalog type is restricted to a specific group of users.
If you require access, please reach out to your partner manager.

Operation ID: `catalogs_product_groups/create`

Scopes: pinterest_oauth2: catalogs:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `CatalogsProductGroupsCreateRequestSchema`

**Response 200** (`application/json`): `CatalogsVerticalProductGroup`

**Response 201** (`application/json`): `CatalogsVerticalProductGroup`

---

## DELETE /catalogs/product_groups/multiple

**Delete product groups**

Delete product groups owned by the "operation user_account".
- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account: Owner, Admin, Catalogs Manager.

[Learn more](/docs/api-features/shopping-overview/)

Operation ID: `catalogs_product_groups/delete_many`

Scopes: pinterest_oauth2: catalogs:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| id | query | array<integer> | yes | Comma-separated list of product group ids |
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |

**Response 204**: Resource deleted successfully.

---

## POST /catalogs/product_groups/multiple

**Create product groups**

Create product group to use in Catalogs owned by the "operation user_account".
- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account: Owner, Admin, Catalogs Manager.

[Learn more](/docs/api-features/shopping-overview/)

Note: Access to the Creative Assets catalog type is restricted to a specific group of users.
If you require access, please reach out to your partner manager.

Operation ID: `catalogs_product_groups/create_many`

Scopes: pinterest_oauth2: catalogs:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `CatalogsProductGroupsCreateManyRequestSchema`

**Response 201** (`application/json`): array<`CatalogsProductGroupsCreateManyResponse201Items`>

---

## GET /catalogs/product_groups/{product_group_id}

**Get product group**

Get a single product group for a given Catalogs Product Group Id owned by the "operation user_account".
- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account: Owner, Admin, Catalogs Manager.

[Learn more](/docs/api-features/shopping-overview/)

Operation ID: `catalogs_product_groups/get`

Scopes: pinterest_oauth2: catalogs:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| product_group_id | path | string | yes | Unique identifier of a product group |
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |

**Response 200** (`application/json`): `CatalogsVerticalProductGroup`

---

## PATCH /catalogs/product_groups/{product_group_id}

**Update single product group**

Update product group owned by the "operation user_account" to use in Catalogs.
- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account: Owner, Admin, Catalogs Manager.
"Catalog-based product groups" can include items from all data sources (feeds and API) and are available to both non-retail catalogs with any data sources and retail catalogs with API-created items. If your catalog only contains retail items created via feeds, you should use the "retail feed-based" option.
[Learn more](/docs/api-features/shopping-overview/)

Note: Access to the Creative Assets catalog type is restricted to a specific group of users.
If you require access, please reach out to your partner manager.

Operation ID: `catalogs_product_groups/update`

Scopes: pinterest_oauth2: catalogs:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| product_group_id | path | string | yes | Unique identifier of a product group |
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `CatalogsProductGroupsUpdateRequestSchema`

**Response 200** (`application/json`): `CatalogsVerticalProductGroup`

---

## DELETE /catalogs/product_groups/{product_group_id}

**Delete product group**

Delete a product group owned by the "operation user_account" from being in use in Catalogs.
- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account: Owner, Admin, Catalogs Manager.

[Learn more](/docs/api-features/shopping-overview/)

Operation ID: `catalogs_product_groups/delete`

Scopes: pinterest_oauth2: catalogs:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| product_group_id | path | string | yes | Unique identifier of a product group |
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |

**Response 200** (`application/json`): `CatalogsVerticalProductGroup`

**Response 204**: Resource deleted successfully.

---

## GET /catalogs/product_groups/{product_group_id}/product_counts

**Get product counts**

Get a product counts for a given Catalogs Product Group owned by the "operation user_account".
- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account: Owner, Admin, Catalogs Manager.

[Learn more](/docs/api-features/shopping-overview/)

Operation ID: `catalogs_product_groups/product_counts_get`

Scopes: pinterest_oauth2: catalogs:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| product_group_id | path | string | yes | Unique identifier of a product group |
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |

**Response 200** (`application/json`): `CatalogsProductGroupProductCountsVertical`

---

## GET /catalogs/product_groups/{product_group_id}/products

**List products by product group**

Get a list of product pins for a given Catalogs Product Group Id owned by the "operation user_account".
- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account: Owner, Admin, Catalogs Manager.

[Learn more](/docs/api-features/shopping-overview/)

Operation ID: `catalogs_product_group_pins/list`

Scopes: pinterest_oauth2: boards:read, catalogs:read, pins:read; client_credentials: boards:read, catalogs:read, pins:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |
| product_group_id | path | string | yes | Unique identifier of a product group |
| pin_metrics | query | boolean |  | Specify whether to return 90d and lifetime Pin metrics. Total comments and total reactions are only available with lifetime Pin metrics. If Pin was created before `2023-03-20` lifetime metrics will only be available for Video and Idea Pin formats. Lifetime metrics are available for all Pin formats since then. _(default false)_ |
| bookmark | query | string |  | Cursor used to fetch the next page of items |
| page_size | query | integer |  | Maximum number of items to include in a single page. See documentation on [Pagination](/docs/reference/pagination/) for more information. _(default 25; minimum 1; maximum 250)_ |

**Response 200** (`application/json`): object{bookmark: string, items: array<`CatalogsProduct`>}

---

## POST /catalogs/products/get_by_product_group_filters

**List products by filter**

List products Pins owned by the "operation user_account" that meet the criteria specified in the Catalogs Product Group Filter given in the request.
- This endpoint has been implemented in POST to allow for complex filters. This specific POST endpoint is designed to be idempotent.
- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account: Owner, Admin, Catalogs Manager.

Note: This endpoint only supports RETAIL catalog at the moment.

[Learn more](/docs/api-features/shopping-overview/)

Operation ID: `products_by_product_group_filter/list`

Scopes: pinterest_oauth2: boards:read, catalogs:read, pins:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| bookmark | query | string |  | Cursor used to fetch the next page of items |
| page_size | query | integer |  | Maximum number of items to include in a single page. See documentation on [Pagination](/docs/reference/pagination/) for more information. _(default 25; minimum 1; maximum 250)_ |
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |
| pin_metrics | query | boolean |  | Specify whether to return 90d and lifetime Pin metrics. Total comments and total reactions are only available with lifetime Pin metrics. If Pin was created before `2023-03-20` lifetime metrics will only be available for Video and Idea Pin formats. Lifetime metrics are available for all Pin formats since then. _(default false)_ |

**Request body** (`application/json`, required): `CatalogsListProductsByFilterRequest`

**Response 200** (`application/json`): object{bookmark: string, items: array<`CatalogsProduct`>}

---

## Schemas

### `CatalogsListProductsByFilterRequest`

Request object to list products for a given product group filter.

Type: `CatalogsListProductsByFeedBasedFilter` | `CatalogsVerticalsListProductsByCatalogBasedFilterRequest`

### `CatalogsProduct`

Type: `CatalogsRetailProduct` | `CatalogsHotelProduct` | `CatalogsCreativeAssetsProduct`

### `CatalogsProductGroupProductCountsVertical`

Product counts for a CatalogsProductGroup

Type: `CatalogsRetailProductGroupProductCounts` | `CatalogsHotelProductGroupProductCounts` | `CatalogsCreativeAssetsProductGroupProductCounts`

### `CatalogsProductGroupsCreateManyRequestSchema`

Type: array<`CatalogsProductGroupsCreateManyRequestItems`>

### `CatalogsProductGroupsCreateManyResponse201Items`

ID of a created catalog product group.

Type: string

### `CatalogsProductGroupsCreateRequestSchema`

Type: `CatalogsProductGroupCreateRequest` | `CatalogsVerticalProductGroupCreateRequest`

### `CatalogsProductGroupsUpdateRequestSchema`

Type: `CatalogsProductGroupUpdateRequest` | `CatalogsVerticalProductGroupUpdateRequest`

### `CatalogsVerticalProductGroup`

Type: `CatalogsRetailProductGroup` | `CatalogsHotelProductGroup` | `CatalogsCreativeAssetsProductGroup`

### `CatalogsListProductsByFeedBasedFilter`

Request object to list products for a given feed_id and product group filter.

| Field | Type | Required | Description |
|---|---|---|---|
| feed_id | string | yes | Catalog Feed id pertaining to the catalog product group filter. |
| filters | `CatalogsProductGroupFilters` | yes |  |

### `CatalogsVerticalsListProductsByCatalogBasedFilterRequest`

Request object to list products for a given catalog_id and product group filter.

Type: `CatalogsRetailListProductsByCatalogBasedFilterRequest` | `CatalogsHotelListProductsByCatalogBasedFilterRequest` | `CatalogsCreativeAssetsListProductsByCatalogBasedFilterRequest`

### `CatalogsCreativeAssetsProduct`

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_type | string enum(CREATIVE_ASSETS) | yes |  |
| metadata | `CatalogsCreativeAssetsProductMetadata` | yes |  |
| pin | `Pin` | yes |  |

### `CatalogsHotelProduct`

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_type | string enum(HOTEL) | yes |  |
| metadata | `CatalogsHotelProductMetadata` | yes |  |
| pin | `Pin` | yes |  |

### `CatalogsRetailProduct`

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_type | string enum(RETAIL) | yes |  |
| metadata | `CatalogsRetailProductMetadata` | yes |  |
| pin | `Pin` | yes |  |

### `CatalogsCreativeAssetsProductGroupProductCounts`

Product counts for a Creative Assets CatalogsProductGroup

| Field | Type | Required | Description |
|---|---|---|---|
| app_links | number | yes | _(minimum 0)_ |
| catalog_type | string enum(CREATIVE_ASSETS) | yes |  |
| images | number | yes | _(minimum 0)_ |
| total | number | yes | _(minimum 0)_ |
| videos | number | yes | _(minimum 0)_ |

### `CatalogsHotelProductGroupProductCounts`

Product counts for a Hotel CatalogsProductGroup

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_type | string enum(HOTEL) | yes |  |
| total | number | yes | _(minimum 0)_ |

### `CatalogsRetailProductGroupProductCounts`

Product counts for a Retail CatalogsProductGroup

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_type | string enum(RETAIL) | yes |  |
| images | number | yes | _(minimum 0)_ |
| in_stock | number | yes | _(minimum 0)_ |
| out_of_stock | number | yes | _(minimum 0)_ |
| preorder | number | yes | _(minimum 0)_ |
| total | number | yes | _(minimum 0)_ |
| videos | number |  | _(minimum 0)_ |

### `CatalogsProductGroupsCreateManyRequestItems`

Type: `CatalogsProductGroupCreateRequest` | `CatalogsVerticalProductGroupCreateRequest`

### `CatalogsProductGroupCreateRequest`

Request object for creating a product group.

| Field | Type | Required | Description |
|---|---|---|---|
| description | string |  | _(nullable)_ |
| feed_id | string | yes | Catalog Feed id pertaining to the catalog product group. |
| filters | `CatalogsProductGroupFiltersRequest` | yes |  |
| is_featured | boolean |  | boolean indicator of whether the product group is being featured or not _(DEPRECATED)_ |
| name | string | yes |  |

### `CatalogsVerticalProductGroupCreateRequest`

Request object for creating a catalog based product group.

Type: `CatalogsRetailProductGroupCreateRequest` | `CatalogsHotelProductGroupCreateRequest` | `CatalogsCreativeAssetsProductGroupCreateRequest`

### `CatalogsProductGroupUpdateRequest`

Request object for updating a product group.

| Field | Type | Required | Description |
|---|---|---|---|
| description | string |  | _(nullable)_ |
| filters | `CatalogsProductGroupFiltersRequest` |  |  |
| is_featured | boolean |  | boolean indicator of whether the product group is being featured or not _(DEPRECATED)_ |
| name | string |  |  |

### `CatalogsVerticalProductGroupUpdateRequest`

Request object for updating a catalog based product group.

Type: `CatalogsRetailProductGroupUpdateRequest` | `CatalogsHotelProductGroupUpdateRequest` | `CatalogsCreativeAssetsProductGroupUpdateRequest`

### `CatalogsCreativeAssetsProductGroup`

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_id | `Pinterest.Lib.IntegerFormatType` | yes | Catalog ID pertaining to the product group. |
| catalog_type | string enum(CREATIVE_ASSETS) | yes |  |
| created_at | integer |  | Unix timestamp in seconds of when catalog product group was created. |
| description | string |  | _(nullable)_ |
| filters | `CatalogsCreativeAssetsProductGroupFilters` | yes |  |
| id | `Pinterest.Lib.IntegerFormatType` | yes | ID of the catalog product group. |
| name | string |  | Name of catalog product group |
| updated_at | integer |  | Unix timestamp in seconds of last time catalog product group was updated. |

### `CatalogsHotelProductGroup`

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_id | `Pinterest.Lib.IntegerFormatType` | yes | Catalog ID pertaining to the product group. |
| catalog_type | string enum(HOTEL) | yes |  |
| created_at | integer |  | Unix timestamp in seconds of when catalog product group was created. |
| description | string |  | _(nullable)_ |
| filters | `CatalogsHotelProductGroupFilters` | yes |  |
| id | `Pinterest.Lib.IntegerFormatType` | yes | ID of the catalog product group. |
| name | string |  | Name of catalog product group |
| type | `CatalogsHotelProductGroupType` | yes |  |
| updated_at | integer |  | Unix timestamp in seconds of last time catalog product group was updated. |

### `CatalogsRetailProductGroup`

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_id | `Pinterest.Lib.IntegerFormatType` | yes | Catalog ID pertaining to the product group. |
| catalog_type | string enum(RETAIL) | yes |  |
| country | string |  | _(nullable)_ |
| created_at | integer |  | Unix timestamp in seconds of when catalog product group was created. |
| description | string |  | _(nullable)_ |
| feed_id | string | yes | id of the catalogs feed belonging to this catalog product group _(nullable)_ |
| filters | `CatalogsProductGroupFilters` | yes |  |
| id | `Pinterest.Lib.IntegerFormatType` | yes | ID of the catalog product group. |
| is_featured | boolean |  | boolean indicator of whether the product group is being featured or not _(DEPRECATED)_ |
| locale | string |  | _(nullable)_ |
| name | string |  | Name of catalog product group |
| status | `CatalogsProductGroupStatus` |  |  |
| type | `CatalogsProductGroupType` | yes |  |
| updated_at | integer |  | Unix timestamp in seconds of last time catalog product group was updated. |

### `CatalogsProductGroupFilters`

Object holding a group of filters for a catalog product group

Type: `CatalogsProductGroupFiltersAnyOf` | `CatalogsProductGroupFiltersAllOf`

### `CatalogsCreativeAssetsListProductsByCatalogBasedFilterRequest`

Request object to list products for a given creative assets catalog_id and product group filter.

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_id | `Pinterest.Lib.IntegerFormatType` | yes | Catalog ID pertaining to the product group. |
| catalog_type | string enum(CREATIVE_ASSETS) | yes |  |
| filters | `CatalogsCreativeAssetsProductGroupFilters` | yes |  |

### `CatalogsHotelListProductsByCatalogBasedFilterRequest`

Request object to list products for a given hotel catalog_id and product group filter.

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_id | `Pinterest.Lib.IntegerFormatType` | yes | Catalog ID pertaining to the product group. |
| catalog_type | string enum(HOTEL) | yes |  |
| filters | `CatalogsHotelProductGroupFilters` | yes |  |

### `CatalogsRetailListProductsByCatalogBasedFilterRequest`

Request object to list products for a given retail catalog_id and product group filter.

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_id | `Pinterest.Lib.IntegerFormatType` | yes | Catalog ID pertaining to the product group. |
| catalog_type | string enum(RETAIL) | yes | Retail catalog based product group is available only for selected partners at the moment. If you are not eligible, please use feed based one. |
| country | `Country` | yes |  |
| filters | `CatalogsProductGroupFilters` | yes |  |
| locale | `CatalogsLocale` | yes |  |

### `CatalogsCreativeAssetsProductMetadata`

Creative assets product metadata entity

| Field | Type | Required | Description |
|---|---|---|---|
| creative_assets_id | string | yes | The user-created unique ID that represents the creative assets item. |
| visibility | `CreativeAssetsVisibilityType` | yes |  |

### `Pin`

Pin model containing properties related to a Pinterest Pin.

| Field | Type | Required | Description |
|---|---|---|---|
| alt_text | string |  | _(nullable; maxLength 500)_ |
| description | string |  | _(nullable; maxLength 800)_ |
| link | string |  | _(nullable; maxLength 2048)_ |
| title | string |  | _(nullable; maxLength 100)_ |

### `CatalogsHotelProductMetadata`

Hotel product metadata entity

| Field | Type | Required | Description |
|---|---|---|---|
| hotel_id | string | yes | The user-created unique ID that represents the hotel item. |

### `CatalogsRetailProductMetadata`

Retail product metadata entity

| Field | Type | Required | Description |
|---|---|---|---|
| availability | `ProductAvailability` | yes |  |
| currency | `NonNullableCatalogsCurrency` | yes |  |
| item_group_id | string | yes | The parent ID of the product. _(nullable)_ |
| item_id | string | yes | The user-created unique ID that represents the product. |
| price | number | yes | The price of the product. |
| sale_price | number | yes | The discounted price of the product. _(nullable)_ |

### `CatalogsProductGroupFiltersRequest`

Object holding a group of filters for request on catalog product group.

This is a distinct schema. It is not possible to create or update a Product Group with
empty filters. But some automatically generated Product Groups might have empty filters.

Type: `CatalogsProductGroupFiltersRequestAnyOfItems0` | `CatalogsProductGroupFiltersRequestAnyOfItems1`

### `CatalogsCreativeAssetsProductGroupCreateRequest`

Request object for creating a creative assets product group.

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_id | `Pinterest.Lib.IntegerFormatType` | yes | Catalog ID pertaining to the product group. |
| catalog_type | string enum(CREATIVE_ASSETS) | yes |  |
| description | string |  | _(nullable)_ |
| filters | `CatalogsCreativeAssetsProductGroupFilters` | yes |  |
| name | string | yes |  |

### `CatalogsHotelProductGroupCreateRequest`

Request object for creating a hotel product group.

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_id | `Pinterest.Lib.IntegerFormatType` | yes | Catalog ID pertaining to the product group. |
| catalog_type | string enum(HOTEL) | yes |  |
| description | string |  | _(nullable)_ |
| filters | `CatalogsHotelProductGroupFilters` | yes |  |
| name | string | yes |  |

### `CatalogsRetailProductGroupCreateRequest`

Request object for creating a product group.

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_id | `Pinterest.Lib.IntegerFormatType` | yes | Catalog ID pertaining to the product group. |
| catalog_type | string enum(RETAIL) | yes | Retail catalog based product group is available only for selected partners at the moment. If you are not eligible, please use feed based one. |
| country | `Country` |  |  |
| description | string |  | _(nullable)_ |
| filters | `CatalogsProductGroupFiltersRequest` | yes |  |
| locale | `CatalogsLocale` |  |  |
| name | string | yes |  |

### `CatalogsCreativeAssetsProductGroupUpdateRequest`

Request object for updating a creative assets product group.

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_type | string enum(CREATIVE_ASSETS) |  |  |
| description | string |  | _(nullable)_ |
| filters | `CatalogsCreativeAssetsProductGroupFilters` |  |  |
| name | string |  | Name of catalog product group |

### `CatalogsHotelProductGroupUpdateRequest`

Request object for updating a hotel product group.

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_type | string enum(HOTEL) |  |  |
| description | string |  | _(nullable)_ |
| filters | `CatalogsHotelProductGroupFilters` |  |  |
| name | string |  | Name of catalog product group |

### `CatalogsRetailProductGroupUpdateRequest`

Request object for updating a retail product group.

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_type | string enum(RETAIL) |  | Retail catalog based product group is available only for selected partners at the moment. If you are not eligible, please use feed based one. |
| country | `NullableCountry` |  | _(nullable)_ |
| description | string |  | _(nullable)_ |
| filters | `CatalogsProductGroupFiltersRequest` |  |  |
| locale | `NullableCatalogsLocale` |  | _(nullable)_ |
| name | string |  | Name of catalog product group |

### `CatalogsCreativeAssetsProductGroupFilters`

Object holding a group of filters for a creative assets product group

Type: `CatalogsCreativeAssetsProductGroupFiltersAnyOf` | `CatalogsCreativeAssetsProductGroupFiltersAllOf`

### `Pinterest.Lib.IntegerFormatType`

Type: string

### `CatalogsHotelProductGroupFilters`

Object holding a group of filters for a hotel product group

Type: `CatalogsHotelProductGroupFiltersAnyOf` | `CatalogsHotelProductGroupFiltersAllOf`

### `CatalogsHotelProductGroupType`

Catalog hotel product group type

Type: string enum(MERCHANT_CREATED, ALL_LISTINGS)

### `CatalogsProductGroupStatus`

Type: string enum(ACTIVE, INACTIVE)

### `CatalogsProductGroupType`

Catalog product group type

- **MERCHANT_CREATED**: Product groups created by merchants.
- **ALL_PRODUCTS**: Consists of every product in your latest successful feed upload.
- **BEST_DEALS**: Consists of products with the deepest drop in price.
- **PINNER_FAVORITES**: Consists of products that are resonating most with people on Pinterest, based on engagement.
- **TOP_SELLERS**: Consists of products with the highest conversion rate, if you have the conversion tag installed.
- **BACK_IN_STOCK**: Consists of products that were previously out of stock and are now in stock.
- **NEW_ARRIVALS**: Consists of products that are new to your Catalog.
- **SHOPIFY_COLLECTIONS**: Product groups created based on Shopify Product Collections.
- **I2PC**: Product groups created based on predicted product category.
- **CATALOG_EXPANSION**: Consists of high-potential, recommended products from your catalog.

Type: string enum(MERCHANT_CREATED, ALL_PRODUCTS, BEST_DEALS, PINNER_FAVORITES, TOP_SELLERS, BACK_IN_STOCK, NEW_ARRIVALS, SHOPIFY_COLLECTIONS, I2PC, CATALOG_EXPANSION)

### `CatalogsProductGroupFiltersAllOf`

| Field | Type | Required | Description |
|---|---|---|---|
| all_of | array<`CatalogsProductGroupFilterKeys`> | yes |  |

### `CatalogsProductGroupFiltersAnyOf`

| Field | Type | Required | Description |
|---|---|---|---|
| any_of | array<`CatalogsProductGroupFilterKeys`> | yes |  |

### `CatalogsLocale`

Type: string enum(af-ZA, ar-SA, bg-BG, bn-IN, cs-CZ, da-DK, de, el-GR, en-AU, en-CA, en-GB, en-IN, en-US, es-419, es-AR, es-ES, es-MX, fi-FI, fr, fr-CA, he-IL, hi-IN, hr-HR, hu-HU, id-ID, it, ja, ko-KR, ms-MY, nb-NO, nl, pl-PL, pt-BR, pt-PT, ro-RO, ru-RU, sk-SK, sv-SE, te-IN, th-TH, tl-PH, tr, uk-UA, vi-VN, zh-CN, zh-TW)

### `Country`

Country ID from ISO 3166-1 alpha-2.

Type: string enum(AD, AE, AF, AG, AI, AL, AM, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BV, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DJ, DK, DM, DO, DZ, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HM, HN, HR, HT, HU, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, False, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, YE, YT, ZA, ZM, ZW)

### `CreativeAssetsVisibilityType`

Creative assets visibility.

Type: string enum(VISIBLE, HIDDEN)

### `PinBase`

| Field | Type | Required | Description |
|---|---|---|---|
| ai_disclosures | `AiDisclosures` |  | AI disclosure declarations the creator has made about this Pin. |
| board_id | string |  | The board to which this Pin belongs. |
| board_owner | `BoardOwner` |  | _(read-only)_ |
| board_section_id | string |  | The board section to which this Pin belongs. _(nullable)_ |
| created_at | string (date-time) |  | _(read-only)_ |
| creative_type | `CreativeType` |  | _(nullable; read-only)_ |
| dominant_color | string |  | Dominant pin color. Hex number, e.g. `#6E7874`. _(nullable)_ |
| has_been_promoted | boolean |  | Whether the Pin has been promoted or not. _(read-only)_ |
| id | string | yes |  |
| is_owner | boolean |  | Whether the "operation user_account" is the Pin owner. _(read-only)_ |
| is_product | boolean |  | Whether the Pin is a product Pin. _(read-only)_ |
| is_removable | boolean |  | If you set it to `true`, the Pin becomes ad-only and is automatically added to an "Ad-only Pins" board; so, you do not have to specify a `board_id`. **Note:** Ad-only pins cannot be repinned. _(nullable)_ |
| is_standard | boolean |  | Whether the Pin is standard or not. See documentation on [Changes to Pin creation](/docs/api-features/content-overview/) for more information. _(read-only)_ |
| media | `PinMedia` |  | _(read-only)_ |
| parent_pin_id | string |  | The source pin id if this pin was saved from another pin. [Learn more](https://help.pinterest.com/article/save-pins-on-pinterest). _(nullable)_ |
| pin_metrics | object |  | Pin metrics with associated time intervals if any. _(nullable; read-only)_ |

### `NonNullableCatalogsCurrency`

Currency Codes from ISO 4217.

Type: string enum(AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF, BMD, BND, BOB, BRL, BSD, BTN, BWP, BYN, BYR, BZD, CAD, CDF, CHF, CLP, CNY, COP, CRC, CUC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ERN, ETB, EUR, FJD, FKP, GBP, GEL, GGP, GHS, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HRK, HTG, HUF, IDR, ILS, IMP, INR, IQD, IRR, ISK, JEP, JMD, JOD, JPY, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MRO, MUR, MVR, MWK, MXN, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SPL, SRD, STD, SVC, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD, TVD, TWD, TZS, UAH, UGX, USD, UYU, UZS, VEF, VND, VUV, WST, XAF, XCD, XDR, XOF, XPF, YER, ZAR, ZMW, ZWD)

### `ProductAvailability`

Product availability.

Type: string enum(IN_STOCK, OUT_OF_STOCK, PREORDER)

### `CatalogsProductGroupFiltersRequestAnyOfItems0`

| Field | Type | Required | Description |
|---|---|---|---|
| any_of | array<`CatalogsProductGroupFilterKeys`> | yes |  |

### `CatalogsProductGroupFiltersRequestAnyOfItems1`

| Field | Type | Required | Description |
|---|---|---|---|
| all_of | array<`CatalogsProductGroupFilterKeys`> | yes |  |

### `NullableCatalogsLocale`

Type: string enum(af-ZA, ar-SA, bg-BG, bn-IN, cs-CZ, da-DK, de, el-GR, en-AU, en-CA, en-GB, en-IN, en-US, es-419, es-AR, es-ES, es-MX, fi-FI, fr, fr-CA, he-IL, hi-IN, hr-HR, hu-HU, id-ID, it, ja, ko-KR, ms-MY, nb-NO, nl, pl-PL, pt-BR, pt-PT, ro-RO, ru-RU, sk-SK, sv-SE, te-IN, th-TH, tl-PH, tr, uk-UA, vi-VN, zh-CN, zh-TW, None)

### `NullableCountry`

Type: string enum(AD, AE, AF, AG, AI, AL, AM, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BV, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DJ, DK, DM, DO, DZ, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HM, HN, HR, HT, HU, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, False, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, YE, YT, ZA, ZM, ZW, None)

### `CatalogsCreativeAssetsProductGroupFiltersAllOf`

| Field | Type | Required | Description |
|---|---|---|---|
| all_of | array<`CatalogsCreativeAssetsProductGroupFilterKeys`> | yes |  |

### `CatalogsCreativeAssetsProductGroupFiltersAnyOf`

| Field | Type | Required | Description |
|---|---|---|---|
| any_of | array<`CatalogsCreativeAssetsProductGroupFilterKeys`> | yes |  |

### `CatalogsHotelProductGroupFiltersAllOf`

| Field | Type | Required | Description |
|---|---|---|---|
| all_of | array<`CatalogsHotelProductGroupFilterKeys`> | yes |  |

### `CatalogsHotelProductGroupFiltersAnyOf`

| Field | Type | Required | Description |
|---|---|---|---|
| any_of | array<`CatalogsHotelProductGroupFilterKeys`> | yes |  |

### `CatalogsProductGroupFilterKeys`

Type: `CatalogsBaseFilterKeys` | `ProductGroupReferenceFilter`

### `AiDisclosures`

AI disclosure declarations the creator has made about the Pin.

| Field | Type | Required | Description |
|---|---|---|---|
| values | array<`AiDisclosureItem`> | yes | List of AI disclosure declarations the creator has made about this Pin. |

### `BoardOwner`

| Field | Type | Required | Description |
|---|---|---|---|
| username | string |  | _(read-only)_ |

### `CreativeType`

Ad creative type enum.
**Note:** SHOP_THE_PIN has been deprecated. Please use COLLECTION instead.

Type: string enum(REGULAR, VIDEO, SHOPPING, CAROUSEL, MAX_VIDEO, SHOP_THE_PIN, COLLECTION, IDEA, SHOWCASE, QUIZ, COLLAGE, MAX_WIDTH_REGULAR_COLLECTION, MAX_WIDTH_VIDEO_COLLECTION, APP, CTV_VIDEO, SEARCH_TEXT_AD)

### `PinMedia`

Pin media that can be an image, video, or a mix of both.

Type: `PinMediaWithImage` | `PinMediaWithVideo` | `PinMediaWithImages` | `PinMediaWithVideos` | `PinMediaWithImageAndVideo`

### `CatalogsCreativeAssetsProductGroupFilterKeys`

Type: `CreativeAssetsIdFilter` | `CustomLabel0Filter` | `CustomLabel1Filter` | `CustomLabel2Filter` | `CustomLabel3Filter` | `CustomLabel4Filter` | `GoogleProductCategory6Filter` | `GoogleProductCategory5Filter` | `GoogleProductCategory4Filter` | `GoogleProductCategory3Filter` | `GoogleProductCategory2Filter` | `GoogleProductCategory1Filter` | `GoogleProductCategory0Filter` | `MediaTypeFilter` | `TitleKeywordsFilter` | `LinkFilter`

### `CatalogsHotelProductGroupFilterKeys`

Type: `PriceFilter` | `HotelIdFilter` | `BrandFilter` | `CustomLabel0Filter` | `CustomLabel1Filter` | `CustomLabel2Filter` | `CustomLabel3Filter` | `CustomLabel4Filter` | `CountryFilter` | `TitleKeywordsFilter`

### `CatalogsBaseFilterKeys`

Base filter keys shared across catalog filtering

Type: `MinPriceFilter` | `MaxPriceFilter` | `CurrencyFilter` | `ItemIdFilter` | `AvailabilityFilter` | `BrandFilter` | `ConditionFilter` | `CustomLabel0Filter` | `CustomLabel1Filter` | `CustomLabel2Filter` | `CustomLabel3Filter` | `CustomLabel4Filter` | `ItemGroupIdFilter` | `GenderFilter` | `MediaTypeFilter` | `ProductType4Filter` | `ProductType3Filter` | `ProductType2Filter` | `ProductType1Filter` | `ProductType0Filter` | `GoogleProductCategory6Filter` | `GoogleProductCategory5Filter` | `GoogleProductCategory4Filter` | `GoogleProductCategory3Filter` | `GoogleProductCategory2Filter` | `GoogleProductCategory1Filter` | `GoogleProductCategory0Filter` | `CustomNumber0Filter` | `CustomNumber1Filter` | `CustomNumber2Filter` | `CustomNumber3Filter` | `CustomNumber4Filter` | `TitleKeywordsFilter` | `PinterestProductCategoriesFilter` | `SupplementalItemSegmentsFilter`

### `ProductGroupReferenceFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| PRODUCT_GROUP | `CatalogsProductGroupMultipleStringCriteria` | yes |  |

### `AiDisclosureItem`

AI disclosure declaration the creator has made about the Pin.

Type: string enum(AI_MODIFIED, SYNTHETIC_PERFORMER)

### `PinMediaWithImage`

Pin with image.

| Field | Type | Required | Description |
|---|---|---|---|
| images | `ImageSize` |  |  |
| media_type | string enum(image) | yes |  |

### `PinMediaWithImageAndVideo`

Pin with a mix of images and videos.

| Field | Type | Required | Description |
|---|---|---|---|
| items | array<`PinMediaMetadata`> |  |  |
| media_type | string enum(multiple_mixed) | yes |  |

### `PinMediaWithImages`

Pin with multiple images.

| Field | Type | Required | Description |
|---|---|---|---|
| items | array<`ImageMetadata`> |  |  |
| media_type | string enum(multiple_images) | yes |  |

### `PinMediaWithVideo`

Pin with video.

| Field | Type | Required | Description |
|---|---|---|---|
| cover_image_url | string |  |  |
| duration | number |  | Duration (in miliseconds). Field maybe null after creation due to video processing time. _(nullable)_ |
| height | integer |  | Height (in pixels). Field maybe null after creation due to video processing time. _(nullable)_ |
| images | `ImageSize` |  |  |
| media_type | string enum(video) | yes |  |
| video_url | string |  | Video url (720p).  **Note:** This field is limited and not available to all apps. _(nullable)_ |
| video_url_hls | string |  | Video url (HLS).  **Note:** This field is limited and not available to all apps. _(nullable)_ |
| width | integer |  | Width (in pixels). Field maybe null after creation due to video processing time. _(nullable)_ |

### `PinMediaWithVideos`

Pin with multiple videos.

| Field | Type | Required | Description |
|---|---|---|---|
| items | array<`VideoMetadataWithItemType`> |  |  |
| media_type | string enum(multiple_videos) | yes |  |

### `CreativeAssetsIdFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| CREATIVE_ASSETS_ID | `CatalogsProductGroupMultipleStringCriteria` | yes |  |

### `CustomLabel0Filter`

| Field | Type | Required | Description |
|---|---|---|---|
| CUSTOM_LABEL_0 | `CatalogsProductGroupFilterOperatorTypeCriteria` | yes |  |

### `CustomLabel1Filter`

| Field | Type | Required | Description |
|---|---|---|---|
| CUSTOM_LABEL_1 | `CatalogsProductGroupFilterOperatorTypeCriteria` | yes |  |

### `CustomLabel2Filter`

| Field | Type | Required | Description |
|---|---|---|---|
| CUSTOM_LABEL_2 | `CatalogsProductGroupFilterOperatorTypeCriteria` | yes |  |

### `CustomLabel3Filter`

| Field | Type | Required | Description |
|---|---|---|---|
| CUSTOM_LABEL_3 | `CatalogsProductGroupFilterOperatorTypeCriteria` | yes |  |

### `CustomLabel4Filter`

| Field | Type | Required | Description |
|---|---|---|---|
| CUSTOM_LABEL_4 | `CatalogsProductGroupFilterOperatorTypeCriteria` | yes |  |

### `GoogleProductCategory0Filter`

| Field | Type | Required | Description |
|---|---|---|---|
| GOOGLE_PRODUCT_CATEGORY_0 | `CatalogsProductGroupMultipleStringListCriteria` | yes |  |

### `GoogleProductCategory1Filter`

| Field | Type | Required | Description |
|---|---|---|---|
| GOOGLE_PRODUCT_CATEGORY_1 | `CatalogsProductGroupMultipleStringListCriteria` | yes |  |

### `GoogleProductCategory2Filter`

| Field | Type | Required | Description |
|---|---|---|---|
| GOOGLE_PRODUCT_CATEGORY_2 | `CatalogsProductGroupMultipleStringListCriteria` | yes |  |

### `GoogleProductCategory3Filter`

| Field | Type | Required | Description |
|---|---|---|---|
| GOOGLE_PRODUCT_CATEGORY_3 | `CatalogsProductGroupMultipleStringListCriteria` | yes |  |

### `GoogleProductCategory4Filter`

| Field | Type | Required | Description |
|---|---|---|---|
| GOOGLE_PRODUCT_CATEGORY_4 | `CatalogsProductGroupMultipleStringListCriteria` | yes |  |

### `GoogleProductCategory5Filter`

| Field | Type | Required | Description |
|---|---|---|---|
| GOOGLE_PRODUCT_CATEGORY_5 | `CatalogsProductGroupMultipleStringListCriteria` | yes |  |

### `GoogleProductCategory6Filter`

| Field | Type | Required | Description |
|---|---|---|---|
| GOOGLE_PRODUCT_CATEGORY_6 | `CatalogsProductGroupMultipleStringListCriteria` | yes |  |

### `LinkFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| LINK | `CatalogsProductGroupFilterOperatorTypeCriteria` | yes |  |

### `MediaTypeFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| MEDIA_TYPE | `CatalogsProductGroupMultipleMediaTypesCriteria` | yes |  |

### `TitleKeywordsFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| TITLE_KEYWORDS | `CatalogsProductGroupMultipleStringCriteria` | yes |  |

### `BrandFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| BRAND | `CatalogsProductGroupMultipleStringCriteria` | yes |  |

### `CountryFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| COUNTRY | `CatalogsProductGroupMultipleCountriesCriteria` | yes |  |

### `HotelIdFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| HOTEL_ID | `CatalogsProductGroupMultipleStringCriteria` | yes |  |

### `PriceFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| PRICE | `PriceFilterPrice` | yes |  |

### `AvailabilityFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| AVAILABILITY | `CatalogsProductGroupMultipleStringCriteria` | yes |  |

### `ConditionFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| CONDITION | `CatalogsProductGroupMultipleStringCriteria` | yes |  |

### `CurrencyFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| CURRENCY | `CatalogsProductGroupCurrencyCriteria` | yes |  |

### `CustomNumber0Filter`

| Field | Type | Required | Description |
|---|---|---|---|
| CUSTOM_NUMBER_0 | `CatalogsProductGroupUint32Criteria` | yes |  |

### `CustomNumber1Filter`

| Field | Type | Required | Description |
|---|---|---|---|
| CUSTOM_NUMBER_1 | `CatalogsProductGroupUint32Criteria` | yes |  |

### `CustomNumber2Filter`

| Field | Type | Required | Description |
|---|---|---|---|
| CUSTOM_NUMBER_2 | `CatalogsProductGroupUint32Criteria` | yes |  |

### `CustomNumber3Filter`

| Field | Type | Required | Description |
|---|---|---|---|
| CUSTOM_NUMBER_3 | `CatalogsProductGroupUint32Criteria` | yes |  |

### `CustomNumber4Filter`

| Field | Type | Required | Description |
|---|---|---|---|
| CUSTOM_NUMBER_4 | `CatalogsProductGroupUint32Criteria` | yes |  |

### `GenderFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| GENDER | `CatalogsProductGroupMultipleGenderCriteria` | yes |  |

### `ItemGroupIdFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| ITEM_GROUP_ID | `CatalogsProductGroupMultipleStringCriteria` | yes |  |

### `ItemIdFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| ITEM_ID | `CatalogsProductGroupMultipleStringCriteria` | yes |  |

### `MaxPriceFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| MAX_PRICE | `CatalogsProductGroupPricingCriteria` | yes |  |

### `MinPriceFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| MIN_PRICE | `CatalogsProductGroupPricingCriteria` | yes |  |

### `PinterestProductCategoriesFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| PINTEREST_PRODUCT_CATEGORIES | `CatalogsProductGroupMultiplePinterestProductCategoryCriteria` | yes |  |

### `ProductType0Filter`

| Field | Type | Required | Description |
|---|---|---|---|
| PRODUCT_TYPE_0 | `CatalogsProductGroupMultipleStringListCriteria` | yes |  |

### `ProductType1Filter`

| Field | Type | Required | Description |
|---|---|---|---|
| PRODUCT_TYPE_1 | `CatalogsProductGroupMultipleStringListCriteria` | yes |  |

### `ProductType2Filter`

| Field | Type | Required | Description |
|---|---|---|---|
| PRODUCT_TYPE_2 | `CatalogsProductGroupMultipleStringListCriteria` | yes |  |

### `ProductType3Filter`

| Field | Type | Required | Description |
|---|---|---|---|
| PRODUCT_TYPE_3 | `CatalogsProductGroupMultipleStringListCriteria` | yes |  |

### `ProductType4Filter`

| Field | Type | Required | Description |
|---|---|---|---|
| PRODUCT_TYPE_4 | `CatalogsProductGroupMultipleStringListCriteria` | yes |  |

### `SupplementalItemSegmentsFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| SUPPLEMENTAL_ITEM_SEGMENTS | `CatalogsProductGroupMultipleSupplementalItemSegmentsCriteria` | yes |  |

### `CatalogsProductGroupMultipleStringCriteria`

| Field | Type | Required | Description |
|---|---|---|---|
| negated | boolean |  |  |
| values | array<string> | yes |  |

### `ImageSize`

| Field | Type | Required | Description |
|---|---|---|---|
| 1200x | `ImageDetails` |  |  |
| 150x150 | `ImageDetails` |  |  |
| 400x300 | `ImageDetails` |  |  |
| 600x | `ImageDetails` |  |  |

### `PinMediaMetadata`

Per-item entry inside `PinMedia.items` for mixed image/video pins. Discriminated by `item_type`.

Type: `ImageMetadata` | `VideoMetadataWithItemType`

### `ImageMetadata`

| Field | Type | Required | Description |
|---|---|---|---|
| description | string |  | _(nullable)_ |
| images | `ImageSize` |  |  |
| item_type | string enum(image) | yes | Discriminator literal identifying this as image metadata inside a `PinMediaMetadata` payload. |
| link | string |  | _(nullable)_ |
| title | string |  | _(nullable)_ |

### `VideoMetadataWithItemType`

| Field | Type | Required | Description |
|---|---|---|---|
| cover_image_url | string |  |  |
| duration | number |  | Duration (in miliseconds). Field maybe null after creation due to video processing time. _(nullable)_ |
| height | integer |  | Height (in pixels). Field maybe null after creation due to video processing time. _(nullable)_ |
| item_type | string enum(video) | yes | Discriminator literal identifying this as video metadata inside a `PinMediaMetadata` payload. |
| video_url | string |  | Video url (720p).  **Note:** This field is limited and not available to all apps. _(nullable)_ |
| video_url_hls | string |  | Video url (HLS).  **Note:** This field is limited and not available to all apps. _(nullable)_ |
| width | integer |  | Width (in pixels). Field maybe null after creation due to video processing time. _(nullable)_ |

### `CatalogsProductGroupFilterOperatorTypeCriteria`

| Field | Type | Required | Description |
|---|---|---|---|
| filter_operator_type | `FilterOperatorType` |  |  |
| negated | boolean |  |  |
| values | array<string> | yes |  |

### `CatalogsProductGroupMultipleStringListCriteria`

| Field | Type | Required | Description |
|---|---|---|---|
| negated | boolean |  |  |
| values | array<`CatalogsProductGroupMultipleStringListCriteriaValuesItemsItem`> | yes |  |

### `CatalogsProductGroupMultipleMediaTypesCriteria`

| Field | Type | Required | Description |
|---|---|---|---|
| negated | boolean |  |  |
| values | array<`MediaType`> | yes |  |

### `CatalogsProductGroupMultipleCountriesCriteria`

| Field | Type | Required | Description |
|---|---|---|---|
| negated | boolean |  |  |
| values | array<`Country`> | yes |  |

### `PriceFilterPrice`

| Field | Type | Required | Description |
|---|---|---|---|
| currency | `NonNullableCatalogsCurrency` | yes |  |
| negated | boolean |  |  |
| operator | `NumericFilterOperatorType` | yes |  |
| value | number | yes | _(minimum 0)_ |

### `CatalogsProductGroupCurrencyCriteria`

A currency filter. This filter cannot be negated

| Field | Type | Required | Description |
|---|---|---|---|
| negated | boolean enum(False) |  |  |
| values | `NonNullableCatalogsCurrency` | yes |  |

### `CatalogsProductGroupUint32Criteria`

| Field | Type | Required | Description |
|---|---|---|---|
| negated | boolean |  |  |
| operator | `NumericFilterOperatorType` | yes |  |
| value | integer | yes | _(minimum 0; maximum 4294967295)_ |

### `CatalogsProductGroupMultipleGenderCriteria`

| Field | Type | Required | Description |
|---|---|---|---|
| negated | boolean |  |  |
| values | array<`Gender`> | yes |  |

### `CatalogsProductGroupPricingCriteria`

| Field | Type | Required | Description |
|---|---|---|---|
| inclusion | boolean |  | _(default true)_ |
| negated | boolean |  |  |
| values | number | yes | _(minimum 0)_ |

### `CatalogsProductGroupMultiplePinterestProductCategoryCriteria`

| Field | Type | Required | Description |
|---|---|---|---|
| negated | boolean |  |  |
| values | array<`ProductCategoryEnum`> | yes |  |

### `CatalogsProductGroupMultipleSupplementalItemSegmentsCriteria`

| Field | Type | Required | Description |
|---|---|---|---|
| negated | boolean |  |  |
| values | array<`SupplementalItemSegmentType`> | yes |  |

### `ImageDetails`

| Field | Type | Required | Description |
|---|---|---|---|
| height | integer | yes | _(nullable)_ |
| url | string | yes |  |
| width | integer | yes | _(nullable)_ |

### `FilterOperatorType`

Type: string enum(IS, CONTAINS)

### `CatalogsProductGroupMultipleStringListCriteriaValuesItemsItem`

Type: array<string>

### `MediaType`

Type: string enum(IMAGE, VIDEO)

### `NumericFilterOperatorType`

Type: string enum(GREATER_THAN, GREATER_THAN_OR_EQUALS, LESS_THAN, LESS_THAN_OR_EQUALS)

### `Gender`

Type: string enum(FEMALE, MALE, UNISEX)

### `ProductCategoryEnum`

List of product category details

Type: string enum(ACCENT_TABLES, ACCESSORIES, ANKLETS, APRONS, AREA_RUGS, ARMOIRES_AND_WARDROBES, ART_AND_CRAFT_PAINTS, ART_BRUSHES, ARTIFICIAL_FLORA, ARTWORK, AUDIO, AUDIO_ACCESSORIES, BACKPACKS, BAG_AND_LUGGAGE_ACCESSORIES, BAGS_AND_LUGGAGE, BAKEWARE, BANDANAS, BAR_CARTS, BARWARE, BASKETS, BATH_AND_BODY, BATH_AND_SHOWER, BATH_MATS_AND_RUGS, BATH_TOWELS_AND_WASHCLOTHS, BATHROOM_ACCESSORIES, BATHROOM_ACCESSORY_SETS, BATHROOM_VANITIES, BEACH_TOWELS, BEADS_AND_JEWELRY_MAKING_SUPPLIES, BEAUTY_SUPPLEMENTS, BED_SHEETS, BEDDING, BEDROOM_VANITIES, BEDS_AND_ACCESSORIES, BEDS_AND_BED_FRAMES, BELT_BAGS, BELTS_AND_SUSPENDERS, BENCHES, BEVERAGES, BIRD_SUPPLIES, BLANKETS, BLOUSES, BLUSHES_AND_BRONZERS, BODY_CARE, BODY_JEWELRY, BODY_MAKEUP, BODY_MOISTURIZERS, BODY_WASHES, BOOKCASES_AND_STANDING_SHELVES, BOOKENDS, BOOKS, BOOTS, BRACELETS, BRIDESMAID_DRESSES, BROOCHES_AND_LAPEL_PINS, BROW_MAKEUP, BUFFETS_AND_SIDEBOARDS, BUTTON_DOWN_SHIRTS, CABINET_HARDWARE, CABINETS_AND_STORAGE_FURNITURE, CAKE_DECORATING_SUPPLIES, CAMPING_AND_HIKING, CANDLE_HOLDERS, CANDLES, CARDSTOCK_PAPERS, CASUAL_PANTS, CAT_SUPPLIES, CHAIRS, CHANDELIERS, CHARMS_AND_PENDANTS, CHINA_CABINETS_AND_HUTCHES, CLOGS_AND_MULES, CLOTH_NAPKINS, CLOTHING, CLOTHING_AND_CLOSET_STORAGE, CLOTHING_SETS, COASTERS, COATS_AND_JACKETS, COFFEE_AND_TEA_CUPS, COFFEE_MAKERS_AND_ESPRESSO_MACHINES, COLORING_BOOKS, COMMUNICATIONS, COMPUTER_ACCESSORIES, COOKIE_CUTTERS, COOKWARE, COOKWARE_AND_BAKEWARE, COSMETIC_AND_TOILETRY_BAGS, COSTUMES_AND_ACCESSORIES, CRAFT_ADHESIVES_AND_MAGNETS, CRAFT_CUTTING_TOOLS, CRAFT_MOLDS, CRIBS_AND_TODDLER_BEDS, CURTAIN_AND_DRAPE_RODS, CURTAINS_AND_DRAPES, CUTTING_BOARDS, CYCLING, DECORATIVE_BOWLS, DECORATIVE_JARS, DECORATIVE_TAPESTRIES, DECORATIVE_TRAYS, DEODORANTS_AND_ANTIPERSPIRANTS, DESK_AND_SHELF_CLOCKS, DESKS, DIAPER_BAGS, DINNERWARE, DISHWASHERS, DOG_SUPPLIES, DOOR_MATS, DRAWING_AND_PAINTING, DRESS_PANTS, DRESSERS, DRESSES, DRILLS_AND_SCREWDRIVERS, DRINKWARE, DUFFEL_BAGS, DUVET_COVERS, DVDS_AND_VIDEOS, EARRINGS, ELECTRONICS_ACCESSORIES, ENGAGEMENT_AND_WEDDING_RINGS, ENTERTAINMENT_CENTERS_AND_TV_STANDS, ERASERS, EYE_MAKEUP, EYE_SHADOW, EYELINERS, FABRIC, FACE_COVERINGS, FACE_LOTIONS_AND_CREAMS, FACE_MAKEUP, FACIAL_CLEANSERS, FACIAL_MOISTURIZERS, FALSE_EYELASHES, FIGURINES, FIREPLACE_AND_WOOD_STOVE_ACCESSORIES, FIREPLACES, FISHING, FLAGS_AND_WINDSOCKS, FLATS, FLATWARE, FLOOR_LAMPS, FLOWER_GIRL_DRESSES, FOOD_AND_BEVERAGE_CARRIERS, FOOD_COOKERS_AND_STEAMERS, FOOD_ITEMS, FOOD_MIXERS_AND_BLENDERS, FOOD_STORAGE_CONTAINERS, FOOD_STORAGE_SUPPLIES, FOUNDATIONS_AND_CONCEALERS, FOUNTAINS_AND_PONDS, FRAGRANCE, FURNITURE, FURNITURE_SETS, GAMES, GARDENING, GARDENING_TOOLS, GLOVES_AND_MITTENS, GLUES_AND_TAPES, GROOM_AND_GROOMSMEN_SUITS, HAIR, HAIR_ACCESSORIES, HAIR_CARE, HAIR_COLOR, HAIR_COMBS, HAIR_PINS_CLAWS_AND_CLIPS, HAIR_REMOVAL, HAIR_TOOLS, HAIR_TREATMENT, HAIR_WREATHS, HAND_AND_FOOT_CARE, HAND_SOAPS_AND_SANITIZERS, HANDBAGS, HANDKERCHIEFS, HARDWARE_SUPPLIES, HATS, HEADBOARDS_AND_FOOTBOARDS, HEADWEAR, HIGHLIGHTERS, HOBBIES_AND_CREATIVE_ARTS, HOME_ACCESSORIES, HOME_DECOR_DECALS, HOME_FRAGRANCE_ACCESSORIES, HOME_FRAGRANCES, HOME_IMPROVEMENT_TOOLS_AND_SUPPLIES, HOSIERY, HOUSEHOLD_APPLIANCES, HOUSEHOLD_SUPPLIES, INCENSE, INDOOR_GAMES, JEANS, JEWELRY_AND_WATCH_ACCESSORIES, JEWELRY_AND_WATCHES, JEWELRY_SETS, JUMPSUITS_AND_ROMPERS, KEYCHAINS, KITCHEN_AND_DINING, KITCHEN_AND_DINING_ROOM_TABLES, KITCHEN_APPLIANCES, KITCHEN_KNIVES, KITCHEN_LINENS, KITCHEN_MATS, KITCHEN_ORGANIZERS, KITCHEN_TOOLS_AND_UTENSILS, KITCHEN_TOWELS, KNITTING_AND_CROCHET, KNITTING_AND_CROCHET_TOOLS, LAMP_SHADES, LAMPS, LANYARDS, LAUNDRY_HAMPERS_AND_SUPPLIES, LAWN_AND_GARDEN, LAWN_AND_GARDEN_DECOR, LAWN_ORNAMENTS_AND_GARDEN_SCULPTURES, LEGGINGS, LEOTARDS_AND_UNITARDS, LIGHTING, LIGHTING_ACCESSORIES, LIGHTING_FIXTURES, LIP_BALMS, LIP_CARE, LIP_MAKEUP, LIPSTICKS_AND_LIP_GLOSSES, MAGAZINES_AND_NEWSPAPERS, MAGNETS, MAKEUP, MAKEUP_TOOLS, MASCARAS, MATTRESSES, MEASURES_AND_RULERS, MEASURING_TOOLS_AND_SENSORS, MESSENGER_BAGS, MIRRORS, MUSIC_AND_SOUND_RECORDINGS, NAIL_ART, NAIL_ART_KIT_AND_TOOLS, NAIL_CARE, NAIL_POLISHES, NAILS, NECKLACES, NECKTIES, NIGHT_LIGHTS_AND_AMBIENT_LIGHTING, NIGHTSTANDS, NOVELTY_SIGNS, ONE_PIECES, ONESIES, OTTOMANS, OUTDOOR_FURNITURE, OUTDOOR_FURNITURE_SETS, OUTDOOR_GAMES, OUTDOOR_GRILLS, OUTDOOR_LIVING, OUTDOOR_PLAY_EQUIPMENT, OUTDOOR_RECREATION, OUTDOOR_RUGS, OUTDOOR_SEATING, OUTDOOR_STRUCTURES, OUTDOOR_TABLES, OUTERWEAR, OVENS_AND_COOKTOPS, OVERALLS, OXFORDS_AND_LOAFERS, PAINT_AND_PAINT_TOOLS, PANTS, PAPER_CRAFTS, PARASOLS_AND_RAIN_UMBRELLAS, PARTY_AND_CELEBRATION, PENDANT_LIGHTS, PENS_AND_PENCILS, PERFUMES_AND_COLOGNES, PET_CARRIERS_AND_CRATES, PET_COLLARS_AND_HARNESSES, PET_SUPPLIES, PHOTO_ALBUMS_AND_STORAGE, PICTURE_FRAMES, PILLOWCASES_AND_SHAMS, PINBACK_BUTTONS, PLACEMATS, PLANTS, PONYTAIL_HOLDERS, POOL_AND_SPA_ACCESSORIES, POSTERS_PRINTS_AND_VISUAL_ARTWORK, POTS_AND_PLANTERS, POTTERY_AND_SCULPTING, PRIMERS_AND_MAKEUP_SETTERS, PUMPS, PUZZLES, QUILTS_AND_COMFORTERS, RAZORS_AND_SHAVING_TOOLS, RINGS, RUGS, RUNNER_RUGS, SANDALS, SASHES, SAWS, SCARVES_AND_SHAWLS, SCULPTURES_AND_STATUES, SEASONAL_AND_HOLIDAY_DECORATIONS, SEATING, SERUMS_AND_ESSENCES, SERVEWARE, SEWING_MACHINES, SEWING_PATTERNS, SHAMPOO_AND_CONDITIONER, SHOE_ACCESSORIES, SHOES, SHOPPING_TOTES, SHORTS, SHOWER_CURTAINS, SKINCARE, SKINCARE_MASKS_AND_PEELS, SKIRTS, SLEEPWEAR_AND_LOUNGEWEAR, SLIPCOVERS_AND_CUSHIONS, SLIPPERS, SNEAKERS_AND_ATHLETIC_SHOES, SOCKS_AND_TIGHTS, SOFAS, SPORTS_UNIFORMS, STEMWARE, STOCKINGS, STORAGE_AND_ORGANIZATION, STORAGE_CABINETS_AND_LOCKERS, STORAGE_HOOKS_AND_RACKS, SUITCASES, SUITS, SUITS_AND_SUIT_SEPARATES, GLASSES_AND_SUNGLASSES, SUNSCREEN, SWEATERS_AND_CARDIGANS, SWEATSHIRTS_AND_HOODIES, SWIMWEAR, T_SHIRTS, TABLE_LAMPS, TABLE_RUNNERS, TABLECLOTHS, TABLES, TABLEWARE, TANK_TOPS, TANNING_OILS_AND_LOTIONS, TEETH_WHITENING, TEETH_WHITENING_TOOLS, TELEPHONY, TEXTILE_AND_SEWING, THREAD_AND_YARN, THROW_PILLOWS, TIARAS, TOILET_PAPER_HOLDERS, TONERS_AND_ASTRINGENTS, TOOL_STORAGE_AND_ORGANIZATION, TOOLS, TOPS, TOWEL_RACKS_AND_HOLDERS, TOYS, TRADITIONAL_AND_CEREMONIAL_CLOTHING, TUMBLERS_AND_WATER_BOTTLES, UNIFORMS, VASES, VEHICLE_PARTS_AND_ACCESSORIES, VEILS, WALL_CLOCKS, WALL_LIGHT_FIXTURES, WALL_PAINTS, WALL_SHELVES_AND_LEDGES, WALLETS_AND_CARD_CASES, WALLPAPERS, WATCHES, WATERING_AND_IRRIGATION, WEDDING_CEREMONY_DECOR, WEDDING_CLOTHING, WEDDING_DECOR, WEDDING_DRESS, WEDDING_GIFTS, WEDDING_STATIONERY, WEDDING_TABLE_DECOR, WIGS_AND_HAIR_EXTENSIONS, WINDOW_BLINDS_AND_SHADES, WINDOW_TREATMENT_ACCESSORIES, WINDOW_TREATMENTS, WINE_RACKS, WOOD_BOARDS_AND_PLANKS, WOODWORKING_MATERIALS, WOODWORKING_PLANS, WORK_BENCHES, WREATHS_AND_GARLANDS)

### `SupplementalItemSegmentType`

Supplemental item segment categories. Today only LOCAL_INVENTORY is in use; corresponds to the "Location data" filter in the catalogs UI.

Type: string enum(LOCAL_INVENTORY)

