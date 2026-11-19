# Product Extensions Catalog Suggestion

> Source: Meta Marketing API reference (1 pages). Fetched 2026-11-18.


---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/reference/product-extensions-catalog-suggestion.md -->

## Product Extensions Catalog Suggestion

Best Product Extensions-eligible catalog and product-set recommendation

Product Extensions catalog suggestion API: returns the recommended Product Extensions-eligible catalog for an ad, with its candidate product sets, best first. The one set Meta expects to apply is marked DEFAULT_ON. Neither call changes an ad. The catalog suggestions call also returns sample products for each set and, for an app with ads_management whose user can advertise on the ad account, may create a more relevant product set in the advertiser's catalog; the preview call is read-only. Errors use the standard Marketing API error format: HTTP 400 (code 100) for an invalid parameter or ad account ID, or when the method is not available to your app; HTTP 403 (code 200) when the access token has no ads access to the ad account. Token, rate-limit and server errors follow the usual Marketing API responses.

### Base URL

| URL | Description |
|-----|-------------|
| https://ads-api.facebook.com/v27.0/marketing-api |  |

### Authorization

This API requires:

any of the following
  - Permission: ads_management
  - Permission: ads_read

### APIs

| Method | Endpoint |
|--------|----------|
| GET | [/{ad_account_id}/product_extensions/catalog_suggestions](#get-ad-account-id-product-extensions-catalog-suggestions) |
| GET | [/{ad_account_id}/product_extensions/catalog_suggestions_preview](#get-ad-account-id-product-extensions-catalog-suggestions-preview) |

<jumplink id="get-ad-account-id-product-extensions-catalog-suggestions"></jumplink>
### GET /{ad_account_id}/product_extensions/catalog_suggestions

Get the recommended Product Extensions catalog and product set

Get the recommended catalog and product sets for an ad, best first, with up to four sample products per set. Available only to approved partner apps; other apps can call catalog_suggestions_preview. A returned product set works with Product Extensions in carousel and collection formats; this endpoint does not choose the format.

#### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| ad_account_id | string | ✓ | The Ad Account ID. |

#### Query Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| ad_url | string |  | The ad's destination URL, the strongest signal for matching a product set. Surrounding spaces are ignored, a blank value counts as absent, and a URL without a scheme (example.com/shoes or //example.com/shoes) is read as https. A request with no ad_url, page_id or pixel_id returns INSUFFICIENT_CONTEXT. |
| page_id | string |  | The ID of the Facebook Page behind the ad. Must be a positive number. An empty value is ignored; any other value returns HTTP 400 (code 100). |
| pixel_id | string |  | The ID of the Meta Pixel on the ad's website. Must be a positive number. An empty value is ignored; any other value returns HTTP 400 (code 100). |
| objective | One of "OUTCOME_SALES", "OUTCOME_TRAFFIC", "OUTCOME_ENGAGEMENT", "OUTCOME_LEADS" | ✓ | The campaign objective for the ad being created, using the same name as the campaign objective field. The objective can change which product set, if any, is DEFAULT_ON, so use recommended_action as returned. |

#### Responses

**200**

The recommended Product Extensions catalog for the ad account, with its candidate product sets ordered best-first.

**Content Type**: `application/json`

**Schema**: object

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| recommendation_status | One of "SUCCESS", "NO_CATALOGS", "INSUFFICIENT_CONTEXT", "ERROR" | ✓ | Machine-readable partner-facing status for the recommendation request. One of SUCCESS, NO_CATALOGS, INSUFFICIENT_CONTEXT, ERROR. Additional values may be introduced in later versions, so clients should treat any unrecognized value as a non-success outcome rather than failing. |
| recommendation_status_detail | One of "NOT_ENABLED", "NO_SUGGESTION_AVAILABLE", "TEMPORARY_FAILURE" |  | Whether retrying this exact request is worth anything. Present only on a non-success outcome, and only where it adds something recommendation_status does not. NOT_ENABLED means Product Extensions suggestions are not switched on for this ad account yet, so the same request is worth retrying later without the advertiser doing anything. TEMPORARY_FAILURE means the request failed for a transient reason and is worth retrying with backoff. NO_SUGGESTION_AVAILABLE means the advertiser has to change something first, so retrying the identical request will not help. Absent on SUCCESS and on INSUFFICIENT_CONTEXT, where recommendation_status already says everything. Additional values may be introduced in later versions, so treat an unrecognized value as "no retry advice". |
| recommended | [Recommended](#object-recommended-5) |  | The recommended catalog and its candidate product sets, best first. Omitted when nothing is recommended. |

**400**

Bad request

**Content Type**: `application/json`

**Schema**: [StandardError](#standarderror)

**403**

Forbidden

**Content Type**: `application/json`

**Schema**: [StandardError](#standarderror)

<jumplink id="get-ad-account-id-product-extensions-catalog-suggestions-preview"></jumplink>
### GET /{ad_account_id}/product_extensions/catalog_suggestions_preview

Preview the Product Extensions catalog for a new ad

Get the catalog and product sets that Product Extensions would turn on by default for a new ad, best first. Read-only: it creates no product set and returns no sample products. Meta decides again when the ad is created, so the default it applies can differ. It checks pixel_id but does not use it, so a request needs ad_url or page_id; without either it returns INSUFFICIENT_CONTEXT.

#### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| ad_account_id | string | ✓ | The Ad Account ID. |

#### Query Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| ad_url | string |  | The ad's destination URL, the strongest signal for matching a product set. Surrounding spaces are ignored, a blank value counts as absent, and a URL without a scheme (example.com/shoes or //example.com/shoes) is read as https. A request with no ad_url, page_id or pixel_id returns INSUFFICIENT_CONTEXT. |
| page_id | string |  | The ID of the Facebook Page behind the ad. Must be a positive number. An empty value is ignored; any other value returns HTTP 400 (code 100). |
| pixel_id | string |  | The ID of the Meta Pixel on the ad's website. Must be a positive number. An empty value is ignored; any other value returns HTTP 400 (code 100). |
| objective | One of "OUTCOME_SALES", "OUTCOME_TRAFFIC", "OUTCOME_ENGAGEMENT", "OUTCOME_LEADS" | ✓ | The campaign objective for the ad being created, using the same name as the campaign objective field. The objective can change which product set, if any, is DEFAULT_ON, so use recommended_action as returned. |

#### Responses

**200**

The recommended Product Extensions catalog for the ad account, with its candidate product sets ordered best-first.

**Content Type**: `application/json`

**Schema**: object

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| recommendation_status | One of "SUCCESS", "NO_CATALOGS", "INSUFFICIENT_CONTEXT", "ERROR" | ✓ | Machine-readable partner-facing status for the recommendation request. One of SUCCESS, NO_CATALOGS, INSUFFICIENT_CONTEXT, ERROR. Additional values may be introduced in later versions, so clients should treat any unrecognized value as a non-success outcome rather than failing. |
| recommendation_status_detail | One of "NOT_ENABLED", "NO_SUGGESTION_AVAILABLE", "TEMPORARY_FAILURE" |  | Whether retrying this exact request is worth anything. Present only on a non-success outcome, and only where it adds something recommendation_status does not. NOT_ENABLED means Product Extensions suggestions are not switched on for this ad account yet, so the same request is worth retrying later without the advertiser doing anything. TEMPORARY_FAILURE means the request failed for a transient reason and is worth retrying with backoff. NO_SUGGESTION_AVAILABLE means the advertiser has to change something first, so retrying the identical request will not help. Absent on SUCCESS and on INSUFFICIENT_CONTEXT, where recommendation_status already says everything. Additional values may be introduced in later versions, so treat an unrecognized value as "no retry advice". |
| recommended | [Recommended](#object-recommended-5) |  | The recommended catalog and its candidate product sets, best first. Omitted when nothing is recommended. |

**400**

Bad request

**Content Type**: `application/json`

**Schema**: [StandardError](#standarderror)

**403**

Forbidden

**Content Type**: `application/json`

**Schema**: [StandardError](#standarderror)

## Components

### Schemas

<jumplink id="standarderror"></jumplink>
#### StandardError

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| error | [Error](#object-error-6) | ✓ |  |

### Inline Object Definitions

<jumplink id="object-catalog-1"></jumplink>
#### Catalog

The best Product Extensions-eligible catalog to attach.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | string (int64) | ✓ | The numeric Meta catalog object ID, returned as a decimal string and accepted by Marketing API fields that take a product catalog ID. |
| name | string |  | The recommended catalog name. |

<jumplink id="object-price-2"></jumplink>
#### Price

The product price.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| amount | string | ✓ | Price in hundredths of the currency major unit, for every currency. For example, 12900 is $129.00 in USD or 129 JPY. Not a decimal amount. |
| currency | string | ✓ | ISO 4217 currency code. |

<jumplink id="object-sample_products-3"></jumplink>
#### Sample_products

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| product_id | string (int64) | ✓ | The numeric Meta product-item object ID, returned as a decimal string and accepted by Marketing API fields that take a product item ID. |
| retailer_id | string | ✓ | Retailer ID (SKU) of the product. |
| name | string |  | The product name. |
| image_url | string |  | The product image URL. |
| price | [Price](#object-price-2) |  | The product price. |
| availability | string |  | Availability of the product, e.g. "in stock". |

<jumplink id="object-product_sets-4"></jumplink>
#### Product_sets

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| id | string (int64) | ✓ | The numeric Meta product-set object ID, returned as a decimal string and accepted by Marketing API fields such as creative_sourcing_spec.associated_product_set_id. |
| name | string |  | The product set name, for display only. Usually the name stored on the set in the advertiser's catalog; for a set Meta prepared, it can be a short label such as "Best sellers". Not a stable value: use strategy_type for client logic. |
| recommended_action | One of "DEFAULT_ON", "NEEDS_CONFIRMATION" | ✓ | What to do with this candidate. DEFAULT_ON marks the product set Meta expects to apply for this ad, which can be applied without asking the advertiser; NEEDS_CONFIRMATION means the advertiser must choose whether to use it. At most one candidate is ever DEFAULT_ON. Additional values may be introduced in later versions. |
| strategy_type | One of "COLLECTION", "PRODUCT_VARIANTS", "SIMILAR_PRODUCTS", "BEST_SELLERS", "PREVIOUSLY_ADVERTISED_PRODUCTS", "ALL_PRODUCTS" | ✓ | Stable machine-readable explanation of how the product-set candidate was selected. COLLECTION: products from the collection or page the ad links to. SIMILAR_PRODUCTS: products from the same category as, or similar to, the product the ad links to. BEST_SELLERS: the catalog's best sellers or most-engaged products. PRODUCT_VARIANTS: other styles of the product the ad links to. PREVIOUSLY_ADVERTISED_PRODUCTS: a product set this ad account already uses in an ad with the same destination URL. ALL_PRODUCTS: the whole catalog, always NEEDS_CONFIRMATION. This field is informational; use recommended_action to decide whether the candidate may be applied automatically. Additional values may be introduced in later versions. |
| description | string | ✓ | Human-readable explanation of the strategy that produced this candidate. Clients must not branch on this text. |
| rank | integer | ✓ | One-based position in product_sets. Existing alternatives keep their best-first order. Use the returned order: All Products can appear before other sets or last, and is rank 1 when returned alone. All Products always requires confirmation. Informational only: recommended_action decides defaulting. |
| sample_products | array of [Sample_products](#object-sample_products-3) |  | Up to four products from this set, in-stock products first, to show the advertiser what applying it would put in the ad. Can be empty or omitted; catalog_suggestions_preview never returns sample products. |

<jumplink id="object-recommended-5"></jumplink>
#### Recommended

The recommended catalog and its candidate product sets, best first. Omitted when nothing is recommended.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| catalog | [Catalog](#object-catalog-1) | ✓ | The best Product Extensions-eligible catalog to attach. |
| product_sets | array of [Product_sets](#object-product_sets-4) | ✓ | Product sets in the recommended catalog, best first. At most one is DEFAULT_ON. |

<jumplink id="object-error-6"></jumplink>
#### Error

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| code | integer | ✓ |  |
| error_data | unknown |  |  |
| error_subcode | integer |  |  |
| error_user_msg | string |  |  |
| error_user_msg_html | unknown |  |  |
| error_user_title | string |  |  |
| error_user_title_html | unknown |  |  |
| fbtrace_id | string |  |  |
| is_transient | boolean |  |  |
| message | string | ✓ |  |
| original_response | unknown |  |  |
| type | string |  |  |

### Authentication

| Method | How to send it |
|--------|----------------|
| Authorization header | `Authorization: Bearer {access-token}` |
| Query parameter | `access_token={access-token}` |
| Query parameter | `oauth_token={access-token}` |

#### Global Authentication Requirements

All endpoints require one of: `Authorization: Bearer {access-token}`, `access_token={access-token}` or `oauth_token={access-token}`
