# Pinterest API v5: Product Group Promotions

> Source: Pinterest REST API v5 OpenAPI spec (https://github.com/pinterest/api-description, v5.32.0); docs https://developers.pinterest.com/docs/api/v5/. Base URL: https://api.pinterest.com/v5. Fetched 2026-11-19.

Operations: 5

---

## POST /ad_accounts/{ad_account_id}/product_group_promotions

**Create product group promotions**

Add one or more product groups from your catalog to an existing ad group. (Product groups added to an ad group are a 'product group promotion.')

Operation ID: `product_group_promotions/create`

Scopes: pinterest_oauth2: ads:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `ProductGroupPromotionsCreate`

**Response 200** (`application/json`): `ProductGroupPromotions`

**Response 201** (`application/json`): `ProductGroupPromotions`

---

## PATCH /ad_accounts/{ad_account_id}/product_group_promotions

**Update product group promotions**

Update multiple existing Product Group Promotions (by product_group_id)

Operation ID: `product_group_promotions/update`

Scopes: pinterest_oauth2: ads:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `ProductGroupPromotionsUpdateWithRequiredBody`

**Response 200** (`application/json`): `ProductGroupPromotions`

---

## GET /ad_accounts/{ad_account_id}/product_group_promotions

**Get product group promotions**

List existing product group promotions associated with an ad account.

Include either ad_group_id or product_group_promotion_ids in your request.

**Note:** ad_group_ids and product_group_promotion_ids are mutually exclusive parameters.
Only provide one. If multiple options are provided, product_group_promotion_ids takes precedence over ad_group_ids. If none are provided, the endpoint returns an error.

Operation ID: `product_group_promotions/list`

Scopes: pinterest_oauth2: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| bookmark | query | string |  | Cursor used to fetch the next page of items |
| page_size | query | integer |  | Maximum number of items to include in a single page. See documentation on [Pagination](/docs/reference/pagination/) for more information. _(default 25; minimum 1; maximum 250)_ |
| order | query | `Pinterest.Lib.PaginationOrder` |  | The order in which to sort the items returned: "ASCENDING" or "DESCENDING" by ID. Note that higher-value IDs are associated with more-recently added items. _(default "ASCENDING")_ |
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |
| product_group_promotion_ids | query | array<`Pinterest.Lib.IntegerFormatType`> |  | List of Product group promotion Ids. |
| entity_statuses | query | array<`EntityStatus`> |  | Entity status _(default ["ACTIVE", "PAUSED"])_ |
| ad_group_id | query | string |  | Ad group Id. _(maxLength 18)_ |

**Response 200** (`application/json`): object{bookmark: string, items: array<`ProductGroupPromotion`>}

---

## GET /ad_accounts/{ad_account_id}/product_group_promotions/{product_group_promotion_id}

**Get a product group promotion by id**

Get a product group promotion by id

Operation ID: `product_group_promotions/get`

Scopes: pinterest_oauth2: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |
| product_group_promotion_id | path | string | yes | Unique identifier of a product group promotion _(maxLength 18)_ |

**Response 200** (`application/json`): `ProductGroupPromotion`

---

## GET /ad_accounts/{ad_account_id}/product_groups/analytics

**Get product group analytics**

Get analytics for the specified product groups in the specified `ad_account_id`, filtered by the specified options.

- The token's user_account must either be the Owner of the specified ad account, or have one of the necessary roles granted to them via [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts): Admin, Analyst, Campaign Manager.
- If granularity is not HOUR, you can pull data from up to 90 days before the current date in UTC time, with a maximum time range of 90 days.
- If granularity is HOUR, you can pull data from up to 8 days before the current date in UTC time, with a maximum time range of 3 days.

Operation ID: `product_groups/analytics`

Scopes: pinterest_oauth2: ads:read; client_credentials: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| start_date | query | string (date) | yes | Metric report start date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days back from today. |
| end_date | query | string (date) | yes | Metric report end date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days past start_date. |
| product_group_ids | query | array<`ProductGroupIdType`> | yes | List of Product group Ids to use to filter the results. |
| columns | query | array<`ReportingColumnSync`> | yes | Columns to retrieve, encoded as a comma-separated string. **NOTE**: Any metrics defined as MICRO_DOLLARS returns a value based on the advertiser profile's currency field. For USD, ($1/1,000,000, or $0.000001 - one one-ten-thousandth of a cent). it's microdollars. Otherwise, it's in microunits of the advertiser's currency.  For example, if the advertiser's currency is GBP (British pound sterling), all MICRO_DOLLARS fields will be in GBP microunits (1/1,000,000 British pound).  If a column has no value, it may not be returned. |
| granularity | query | `Granularity` | yes | TOTAL - metrics are aggregated over the specified date range.    DAY - metrics are broken down daily.    HOUR - metrics are broken down hourly.    WEEK - metrics are broken down weekly.    MONTH - metrics are broken down monthly |
| click_window_days | query | number enum(0, 1, 7, 14, 30, 60) |  | Number of days to use as the conversion attribution window for a pin click action. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to `30` days. _(default 30)_ |
| engagement_window_days | query | number enum(0, 1, 7, 14, 30, 60) |  | Number of days to use as the conversion attribution window for an engagement action. Engagements include saves, closeups, link clicks, and carousel card swipes. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to `30` days. **Note:** This parameter no longer returns new data. However, you can still access historic data through **Sept 30, 2027**. _(default 30)_ |
| view_window_days | query | number enum(0, 1, 7, 14, 30, 60) |  | Number of days to use as the conversion attribution window for a view action. Applies to Pinterest Tag conversion metrics. Prior conversion tags use their defined attribution windows. If not specified, defaults to `1` day. _(default 1)_ |
| conversion_report_time | query | string enum(TIME_OF_AD_ACTION, TIME_OF_CONVERSION) |  | The date by which the conversion metrics returned from this endpoint will be reported. There are two dates associated with a conversion event: the date that the user interacted with the ad, and the date that the user completed a conversion event. _(default "TIME_OF_AD_ACTION")_ |
| reporting_timezone | query | `ReportingTimeZone` |  | Specify the timezone to be applied for the reporting. Defaults to PINTEREST_TIME_ZONE (UTC). AD_ACCOUNT_TIME_ZONE requires the ad account to have a time_zone configured; otherwise the request fails with a 400. |
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Response 200** (`application/json`): array<`ProductGroupAnalyticsItems`>

---

## Schemas

### `EntityStatus`

Entity status

Type: string enum(ACTIVE, PAUSED, ARCHIVED, DRAFT, DELETED_DRAFT)

### `Granularity`

Specifies the time interval at which analytics data is broken down. Determines how metrics are grouped within the requested date range.
**Note:** The `HOUR` enum no longer provides data for conversion metrics, but it still returns data for non-conversion metrics. All other enums are unchanged.

Type: string enum(TOTAL, DAY, HOUR, WEEK, MONTH)

### `Pinterest.Lib.IntegerFormatType`

Type: string

### `Pinterest.Lib.PaginationOrder`

Type: string enum(ASCENDING, DESCENDING)

### `ProductGroupAnalyticsItems`

| Field | Type | Required | Description |
|---|---|---|---|
| DATE | string (date) |  | Current metrics date. Only returned when granularity is a time-based value (`DAY`, `HOUR`, `WEEK`, `MONTH`) |
| PRODUCT_GROUP_ID | string | yes | The ID of the product group that this metrics belongs to. |

### `ProductGroupIdType`

Type: string

### `ProductGroupPromotion`

| Field | Type | Required | Description |
|---|---|---|---|
| ad_group_id | string |  | ID of the ad group the product group belongs to. |
| base_product_group_promotion_id | string |  | The ID of the Performance+ base product group promotion that this product group promotion was duplicated from in its managed set. Read-only output; set by Pinterest when a Performance+ managed set is created. Setting this field on a request has no effect. _(read-only)_ |
| bid_in_micro_currency | integer |  | The bid in micro currency. |
| catalog_product_group_id | string |  | ID of the catalogs product group that this product group promotion references (required for create operations) |
| catalog_product_group_name | string |  | Catalogs product group name |
| collections_header_type | `CollectionsHeaderType` |  |  |
| collections_hero_destination_url | string |  | Collections Hero Destination Url _(nullable)_ |
| collections_hero_pin_id | string |  | Hero Pin ID if this PG is promoted as a Collection _(nullable)_ |
| creative_type | `CreativeType` |  |  |
| cta_types | array<`ProductGroupPromotionCustomizableCTAType`> |  | List of CTA types. |
| customizable_cta_type | `ProductGroupPromotionCustomizableCTAType` |  |  |
| definition | string |  | The full product group definition path |
| dynamic_titles_approval_type | `DynamicTitlesApprovalType` |  |  |
| generated_background_styles | array<`GeneratedBackgroundStyle`> |  | The generated background styles allowed for this product group promotion when `is_generate_background` is enabled. `BASIC` = solid/gradient backgrounds; `LIFESTYLE` = agentic lifestyle scene backgrounds. `LIFESTYLE` requires `BASIC`: valid values are `["BASIC"]` or `["BASIC", "LIFESTYLE"]`; `["LIFESTYLE"]` alone is rejected. |
| grid_click_type | `GridClickType` |  |  |
| id | string |  | ID of the product group promotion (required for update operations). |
| included | boolean |  | True if the group is BIDDABLE, false if it should be EXCLUDED from serving ads. |
| is_dynamic_cta | boolean |  | Whether the ad uses dynamic CTA selection. |
| is_dynamic_titles | boolean |  | Set to `TRUE` to enable dynamic title optimization for this product group. When enabled, Pinterest will generate alternative titles for your shopping catalog ads. |
| is_generate_background | boolean |  | Enable generate backgrounds for the product group, default value is FALSE. When enabled, Pinterest will use generative AI to apply backgrounds for your product images that help drive user inspiration and engagement. _(nullable)_ |
| is_image_auto_resizing | boolean |  | Set to `TRUE` to automatically resize your product images with generative AI. This ensures that images have optimal appearance for better performance. _(nullable)_ |
| is_mdl | boolean |  | If set to true products promoted in this product group will use the Mobile Deep Link specified in your catalog |
| parent_id | string |  | The parent Product Group ID of this Product Group |
| preferred_media_type | `PreferredMediaType` |  |  |
| relative_definition | string |  | The definition of the product group, relative to its parent - an attribute name/value pair |
| selected_image_tag | string |  | The ad image tag selected for the product group promotion. _(nullable)_ |
| selected_video_tag | string |  | The ad video tag selected for the product group promotion. _(nullable)_ |
| slideshow_collections_description | string |  | Slideshow Collections Description _(nullable)_ |
| slideshow_collections_title | string |  | Slideshow Collections Title _(nullable)_ |
| status | `EntityStatus` |  |  |
| tracking_url | string |  | Tracking template for proudct group promotions. 4000 limit |

### `ProductGroupPromotions`

Wrapper model for ProductGroupPromotion.

| Field | Type | Required | Description |
|---|---|---|---|
| items | array<`ProductGroupPromotionResponseItem`> |  | Response-only: created or updated product group promotions, or exceptions. _(read-only)_ |

### `ProductGroupPromotionsCreate`

Resource create operation model.

| Field | Type | Required | Description |
|---|---|---|---|
| ad_group_id | string | yes | ID of the ad group the product group promotion belongs to. |
| product_group_promotion | array<`ProductGroupPromotion`> | yes | List of product group promotions to create or update. |

### `ProductGroupPromotionsUpdateWithRequiredBody`

Resource create or update operation model with required body fields (no OptionalProperties).

| Field | Type | Required | Description |
|---|---|---|---|
| ad_group_id | string | yes | ID of the ad group the product group promotion belongs to. |
| product_group_promotion | array<`ProductGroupPromotion`> | yes | List of product group promotions to create or update. |

### `ReportingColumnSync`

Reporting columns for sync reporting endpoints

Type: string enum(SPEND_IN_MICRO_DOLLAR, PAID_IMPRESSION, SPEND_IN_DOLLAR, CPC_IN_MICRO_DOLLAR, ECPC_IN_MICRO_DOLLAR, ECPC_IN_DOLLAR, CTR, ECTR, OUTBOUND_CTR_1, CAMPAIGN_NAME, CAMPAIGN_BRAND_LABEL, PIN_ID, TOTAL_ENGAGEMENT, ENGAGEMENT_1, ENGAGEMENT_2, ECPE_IN_DOLLAR, ENGAGEMENT_RATE, EENGAGEMENT_RATE, ECPM_IN_MICRO_DOLLAR, REPIN_RATE, CTR_2, CAMPAIGN_ID, ADVERTISER_ID, AD_ACCOUNT_ID, PIN_PROMOTION_ID, AD_ID, AD_GROUP_ID, CAMPAIGN_ENTITY_STATUS, CAMPAIGN_OBJECTIVE_TYPE, CPM_IN_MICRO_DOLLAR, CPM_IN_DOLLAR, AD_GROUP_NAME, AD_GROUP_BUDGET_TYPE, AD_GROUP_BUDGET_IN_LOCAL_CURRENCY, AD_GROUP_ENTITY_STATUS, AD_GROUP_BID_MULTIPLIER, PROMO_ID, PROMO_NAME, ORDER_LINE_ID, ORDER_LINE_NAME, CLICKTHROUGH_1, REPIN_1, IMPRESSION_1, IMPRESSION_1_GROSS, CLICKTHROUGH_1_GROSS, OUTBOUND_CLICK_1, CLICKTHROUGH_2, REPIN_2, IMPRESSION_2, OUTBOUND_CLICK_2, COLLECTION_PIN_ITEM_IMPRESSION_1, COLLECTION_PIN_ITEM_IMPRESSION_2, TOTAL_COLLECTION_PIN_ITEM_IMPRESSION, COLLECTION_PIN_ITEM_CLICKTHROUGH_1, COLLECTION_PIN_ITEM_CLICKTHROUGH_2, TOTAL_COLLECTION_PIN_ITEM_CLICKTHROUGH, TOTAL_CLICKTHROUGH, TOTAL_IMPRESSION, TOTAL_IMPRESSION_USER, TOTAL_IMPRESSION_HOUSEHOLD_USER, TOTAL_IMPRESSION_FREQUENCY, TOTAL_IMPRESSION_HOUSEHOLD_FREQUENCY, COST_PER_OUTBOUND_CLICK_IN_DOLLAR, COST_PER_OUTBOUND_CLICK_IN_DOLLAR_1, TOTAL_ENGAGEMENT_SIGNUP, TOTAL_ENGAGEMENT_CHECKOUT, TOTAL_ENGAGEMENT_ADD_PAYMENT_INFO, TOTAL_ENGAGEMENT_ADD_TO_WISHLIST, TOTAL_ENGAGEMENT_INITIATE_CHECKOUT, TOTAL_ENGAGEMENT_SUBSCRIBE, TOTAL_ENGAGEMENT_VIEW_CONTENT, TOTAL_ENGAGEMENT_LEAD, TOTAL_ENGAGEMENT_CONTACT, TOTAL_ENGAGEMENT_SCHEDULE, TOTAL_ENGAGEMENT_FIND_LOCATION, TOTAL_ENGAGEMENT_CUSTOMIZE_PRODUCT, TOTAL_ENGAGEMENT_SUBMIT_APPLICATION, TOTAL_ENGAGEMENT_START_TRIAL, TOTAL_ENGAGEMENT_APP_OPEN, TOTAL_ENGAGEMENT_ADD_TO_CART, TOTAL_ENGAGEMENT_APP_INSTALL, TOTAL_ENGAGEMENT_PAGE_VISIT, TOTAL_ENGAGEMENT_SEARCH, TOTAL_ENGAGEMENT_VIEW_CATEGORY, TOTAL_ENGAGEMENT_WATCH_VIDEO, TOTAL_CLICK_SIGNUP, TOTAL_CLICK_CHECKOUT, TOTAL_CLICK_ADD_PAYMENT_INFO, TOTAL_CLICK_ADD_TO_WISHLIST, TOTAL_CLICK_INITIATE_CHECKOUT, TOTAL_CLICK_SUBSCRIBE, TOTAL_CLICK_VIEW_CONTENT, TOTAL_CLICK_ADD_TO_CART, TOTAL_CLICK_LEAD, TOTAL_CLICK_CONTACT, TOTAL_CLICK_SCHEDULE, TOTAL_CLICK_FIND_LOCATION, TOTAL_CLICK_CUSTOMIZE_PRODUCT, TOTAL_CLICK_SUBMIT_APPLICATION, TOTAL_CLICK_START_TRIAL, TOTAL_CLICK_APP_OPEN, TOTAL_CLICK_APP_INSTALL, TOTAL_CLICK_PAGE_VISIT, TOTAL_CLICK_SEARCH, TOTAL_CLICK_VIEW_CATEGORY, TOTAL_CLICK_WATCH_VIDEO, TOTAL_VIEW_SIGNUP, TOTAL_VIEW_CHECKOUT, TOTAL_VIEW_ADD_PAYMENT_INFO, TOTAL_VIEW_ADD_TO_WISHLIST, TOTAL_VIEW_INITIATE_CHECKOUT, TOTAL_VIEW_SUBSCRIBE, TOTAL_VIEW_VIEW_CONTENT, TOTAL_VIEW_ADD_TO_CART, TOTAL_VIEW_LEAD, TOTAL_VIEW_CONTACT, TOTAL_VIEW_SCHEDULE, TOTAL_VIEW_FIND_LOCATION, TOTAL_VIEW_CUSTOMIZE_PRODUCT, TOTAL_VIEW_SUBMIT_APPLICATION, TOTAL_VIEW_START_TRIAL, TOTAL_VIEW_APP_OPEN, TOTAL_VIEW_APP_INSTALL, TOTAL_VIEW_PAGE_VISIT, TOTAL_VIEW_SEARCH, TOTAL_VIEW_VIEW_CATEGORY, TOTAL_VIEW_WATCH_VIDEO, TOTAL_CONVERSIONS, COST_PER_CONVERSION_IN_DOLLAR, TOTAL_ENGAGEMENT_SIGNUP_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_ADD_PAYMENT_INFO_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_ADD_TO_WISHLIST_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_INITIATE_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_SUBSCRIBE_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_VIEW_CONTENT_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_ADD_TO_CART_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_APP_INSTALL_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_LEAD_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_PAGE_VISIT_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_SEARCH_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_VIEW_CATEGORY_VALUE_IN_MICRO_DOLLAR, TOTAL_ENGAGEMENT_WATCH_VIDEO_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_SIGNUP_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_ADD_PAYMENT_INFO_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_ADD_TO_WISHLIST_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_INITIATE_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_SUBSCRIBE_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_VIEW_CONTENT_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_ADD_TO_CART_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_APP_INSTALL_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_LEAD_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_PAGE_VISIT_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_SEARCH_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_VIEW_CATEGORY_VALUE_IN_MICRO_DOLLAR, TOTAL_CLICK_WATCH_VIDEO_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_SIGNUP_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_ADD_PAYMENT_INFO_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_ADD_TO_WISHLIST_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_INITIATE_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_SUBSCRIBE_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_VIEW_CONTENT_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_ADD_TO_CART_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_APP_INSTALL_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_LEAD_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_PAGE_VISIT_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_SEARCH_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_VIEW_CATEGORY_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_WATCH_VIDEO_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_SESSIONS, WEB_SESSIONS_1, WEB_SESSIONS_2, AD_NAME, AD_GROUP_OPTIMIZATION, CAMPAIGN_BUDGET_OPTIMIZATION, CAMPAIGN_BUDGET_TYPE, CAMPAIGN_BUDGET_IN_LOCAL_CURRENCY, IS_PREMIERE_CAMPAIGN, TOTAL_PAGE_VISIT, TOTAL_SIGNUP, TOTAL_CHECKOUT, TOTAL_ADD_PAYMENT_INFO, TOTAL_INITIATE_CHECKOUT, TOTAL_VIEW_CONTENT, TOTAL_CUSTOM, TOTAL_LEAD, TOTAL_CONTACT, TOTAL_SCHEDULE, TOTAL_FIND_LOCATION, TOTAL_CUSTOMIZE_PRODUCT, TOTAL_SUBMIT_APPLICATION, TOTAL_START_TRIAL, TOTAL_APP_OPEN, TOTAL_ADD_TO_WISHLIST, TOTAL_SUBSCRIBE, TOTAL_VIEW_CATEGORY, TOTAL_ADD_TO_CART, TOTAL_SEARCH, TOTAL_WATCH_VIDEO, TOTAL_SIGNUP_VALUE_IN_MICRO_DOLLAR, TOTAL_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_ADD_PAYMENT_INFO_VALUE_IN_MICRO_DOLLAR, TOTAL_ADD_TO_WISHLIST_VALUE_IN_MICRO_DOLLAR, TOTAL_INITIATE_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_SUBSCRIBE_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_CONTENT_VALUE_IN_MICRO_DOLLAR, TOTAL_CUSTOM_VALUE_IN_MICRO_DOLLAR, TOTAL_VIEW_CATEGORY_VALUE_IN_MICRO_DOLLAR, TOTAL_ADD_TO_CART_VALUE_IN_MICRO_DOLLAR, TOTAL_LEAD_VALUE_IN_MICRO_DOLLAR, TOTAL_SEARCH_VALUE_IN_MICRO_DOLLAR, TOTAL_WATCH_VIDEO_VALUE_IN_MICRO_DOLLAR, PAGE_VISIT_COST_PER_ACTION, PAGE_VISIT_ROAS, CHECKOUT_ROAS, ADD_PAYMENT_INFO_ROAS, ADD_TO_WISHLIST_ROAS, INITIATE_CHECKOUT_ROAS, SUBSCRIBE_ROAS, VIEW_CONTENT_ROAS, CUSTOM_ROAS, PRODUCT_GROUP_AD_IMAGE_TAG, PRODUCT_GROUP_AD_VIDEO_TAG, VIDEO_3SEC_VIEWS_1, VIDEO_15SEC_UNIQUE_VIEWS_1, VIDEO_MRC_VIEWS_1, VIDEO_3SEC_VIEWS_2, VIDEO_15SEC_UNIQUE_VIEWS_2, VIDEO_P100_COMPLETE_2, VIDEO_P0_COMBINED_2, VIDEO_P25_COMBINED_2, VIDEO_P50_COMBINED_2, VIDEO_P75_COMBINED_2, VIDEO_P95_COMBINED_2, VIDEO_MRC_VIEWS_2, PAID_VIDEO_VIEWABLE_RATE, VIDEO_LENGTH, VIDEO_SPEND_IN_DOLLAR, ECPV_IN_DOLLAR, ECPCV_IN_DOLLAR, ECPCV_P95_IN_DOLLAR, TOTAL_VIDEO_3SEC_VIEWS, TOTAL_VIDEO_15SEC_UNIQUE_VIEWS, TOTAL_VIDEO_P100_COMPLETE, TOTAL_VIDEO_P0_COMBINED, TOTAL_VIDEO_P25_COMBINED, TOTAL_VIDEO_P50_COMBINED, TOTAL_VIDEO_P75_COMBINED, TOTAL_VIDEO_P95_COMBINED, TOTAL_VIDEO_MRC_VIEWS, TOTAL_VIDEO_AVG_WATCHTIME_IN_SECOND, TOTAL_REPIN_RATE, WEB_CHECKOUT_COST_PER_ACTION, WEB_ADD_PAYMENT_INFO_COST_PER_ACTION, WEB_ADD_TO_WISHLIST_COST_PER_ACTION, WEB_INITIATE_CHECKOUT_COST_PER_ACTION, WEB_SUBSCRIBE_COST_PER_ACTION, WEB_VIEW_CONTENT_COST_PER_ACTION, WEB_ADD_TO_CART_COST_PER_ACTION, WEB_LEAD_COST_PER_ACTION, WEB_PAGE_VISIT_COST_PER_ACTION, WEB_SEARCH_COST_PER_ACTION, WEB_SIGNUP_COST_PER_ACTION, WEB_VIEW_CATEGORY_COST_PER_ACTION, WEB_WATCH_VIDEO_COST_PER_ACTION, WEB_CHECKOUT_ROAS, WEB_ADD_PAYMENT_INFO_ROAS, WEB_ADD_TO_WISHLIST_ROAS, WEB_INITIATE_CHECKOUT_ROAS, WEB_SUBSCRIBE_ROAS, WEB_VIEW_CONTENT_ROAS, WEB_ADD_TO_CART_ROAS, WEB_LEAD_ROAS, WEB_PAGE_VISIT_ROAS, WEB_SEARCH_ROAS, WEB_SIGNUP_ROAS, WEB_VIEW_CATEGORY_ROAS, WEB_WATCH_VIDEO_ROAS, TOTAL_WEB_CHECKOUT, TOTAL_WEB_ADD_PAYMENT_INFO, TOTAL_WEB_ADD_TO_WISHLIST, TOTAL_WEB_INITIATE_CHECKOUT, TOTAL_WEB_SUBSCRIBE, TOTAL_WEB_VIEW_CONTENT, TOTAL_WEB_ADD_TO_CART, TOTAL_WEB_LEAD, TOTAL_WEB_PAGE_VISIT, TOTAL_WEB_SEARCH, TOTAL_WEB_SIGNUP, TOTAL_WEB_VIEW_CATEGORY, TOTAL_WEB_WATCH_VIDEO, TOTAL_WEB_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ADD_PAYMENT_INFO_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ADD_TO_WISHLIST_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_INITIATE_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_SUBSCRIBE_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_CONTENT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ADD_TO_CART_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_LEAD_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_PAGE_VISIT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_SEARCH_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_SIGNUP_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_CATEGORY_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_WATCH_VIDEO_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_CHECKOUT, TOTAL_WEB_CLICK_ADD_PAYMENT_INFO, TOTAL_WEB_CLICK_ADD_TO_WISHLIST, TOTAL_WEB_CLICK_INITIATE_CHECKOUT, TOTAL_WEB_CLICK_SUBSCRIBE, TOTAL_WEB_CLICK_VIEW_CONTENT, TOTAL_WEB_CLICK_ADD_TO_CART, TOTAL_WEB_CLICK_LEAD, TOTAL_WEB_CLICK_PAGE_VISIT, TOTAL_WEB_CLICK_SEARCH, TOTAL_WEB_CLICK_SIGNUP, TOTAL_WEB_CLICK_VIEW_CATEGORY, TOTAL_WEB_CLICK_WATCH_VIDEO, TOTAL_WEB_CLICK_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_ADD_PAYMENT_INFO_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_ADD_TO_WISHLIST_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_INITIATE_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_SUBSCRIBE_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_VIEW_CONTENT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_ADD_TO_CART_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_LEAD_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_PAGE_VISIT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_SEARCH_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_SIGNUP_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_VIEW_CATEGORY_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_CLICK_WATCH_VIDEO_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_CHECKOUT, TOTAL_WEB_ENGAGEMENT_ADD_PAYMENT_INFO, TOTAL_WEB_ENGAGEMENT_ADD_TO_WISHLIST, TOTAL_WEB_ENGAGEMENT_INITIATE_CHECKOUT, TOTAL_WEB_ENGAGEMENT_SUBSCRIBE, TOTAL_WEB_ENGAGEMENT_VIEW_CONTENT, TOTAL_WEB_ENGAGEMENT_ADD_TO_CART, TOTAL_WEB_ENGAGEMENT_LEAD, TOTAL_WEB_ENGAGEMENT_PAGE_VISIT, TOTAL_WEB_ENGAGEMENT_SEARCH, TOTAL_WEB_ENGAGEMENT_SIGNUP, TOTAL_WEB_ENGAGEMENT_VIEW_CATEGORY, TOTAL_WEB_ENGAGEMENT_WATCH_VIDEO, TOTAL_WEB_ENGAGEMENT_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_ADD_PAYMENT_INFO_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_ADD_TO_WISHLIST_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_INITIATE_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_SUBSCRIBE_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_VIEW_CONTENT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_ADD_TO_CART_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_LEAD_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_PAGE_VISIT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_SEARCH_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_SIGNUP_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_VIEW_CATEGORY_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_ENGAGEMENT_WATCH_VIDEO_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_CHECKOUT, TOTAL_WEB_VIEW_ADD_PAYMENT_INFO, TOTAL_WEB_VIEW_ADD_TO_WISHLIST, TOTAL_WEB_VIEW_INITIATE_CHECKOUT, TOTAL_WEB_VIEW_SUBSCRIBE, TOTAL_WEB_VIEW_VIEW_CONTENT, TOTAL_WEB_VIEW_ADD_TO_CART, TOTAL_WEB_VIEW_LEAD, TOTAL_WEB_VIEW_PAGE_VISIT, TOTAL_WEB_VIEW_SEARCH, TOTAL_WEB_VIEW_SIGNUP, TOTAL_WEB_VIEW_VIEW_CATEGORY, TOTAL_WEB_VIEW_WATCH_VIDEO, TOTAL_WEB_VIEW_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_ADD_PAYMENT_INFO_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_ADD_TO_WISHLIST_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_INITIATE_CHECKOUT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_SUBSCRIBE_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_VIEW_CONTENT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_ADD_TO_CART_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_LEAD_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_PAGE_VISIT_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_SEARCH_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_SIGNUP_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_VIEW_CATEGORY_VALUE_IN_MICRO_DOLLAR, TOTAL_WEB_VIEW_WATCH_VIDEO_VALUE_IN_MICRO_DOLLAR, INAPP_CHECKOUT_COST_PER_ACTION, INAPP_ADD_PAYMENT_INFO_COST_PER_ACTION, INAPP_ADD_TO_WISHLIST_COST_PER_ACTION, INAPP_INITIATE_CHECKOUT_COST_PER_ACTION, INAPP_SUBSCRIBE_COST_PER_ACTION, INAPP_VIEW_CONTENT_COST_PER_ACTION, INAPP_ADD_TO_CART_COST_PER_ACTION, INAPP_APP_INSTALL_COST_PER_ACTION, INAPP_SEARCH_COST_PER_ACTION, INAPP_SIGNUP_COST_PER_ACTION, TOTAL_OFFLINE_CHECKOUT, TOTAL_OFFLINE_ADD_PAYMENT_INFO, TOTAL_OFFLINE_ADD_TO_WISHLIST, TOTAL_OFFLINE_INITIATE_CHECKOUT, TOTAL_OFFLINE_SUBSCRIBE, TOTAL_OFFLINE_VIEW_CONTENT, TOTAL_OFFLINE_LEAD, TOTAL_OFFLINE_SIGNUP, TOTAL_APP_INSTALL_CONVERSION_RATE, TOTAL_INAPP_APP_INSTALL_CONVERSION_RATE, IDEA_PIN_PRODUCT_TAG_VISIT_1, IDEA_PIN_PRODUCT_TAG_VISIT_2, TOTAL_IDEA_PIN_PRODUCT_TAG_VISIT, LEADS, COST_PER_LEAD, QUIZ_COMPLETED, QUIZ_PIN_RESULT_OPEN, QUIZ_COMPLETION_RATE, SHOWCASE_PIN_CLICKTHROUGH, SHOWCASE_SUBPAGE_CLICKTHROUGH, SHOWCASE_SUBPIN_CLICKTHROUGH, SHOWCASE_SUBPAGE_IMPRESSION, SHOWCASE_SUBPIN_IMPRESSION, SHOWCASE_SUBPAGE_SWIPE_LEFT, SHOWCASE_SUBPAGE_SWIPE_RIGHT, SHOWCASE_SUBPIN_SWIPE_LEFT, SHOWCASE_SUBPIN_SWIPE_RIGHT, SHOWCASE_SUBPAGE_REPIN, SHOWCASE_SUBPIN_REPIN, SHOWCASE_SUBPAGE_CLOSEUP, SHOWCASE_CARD_THUMBNAIL_SWIPE_FORWARD, SHOWCASE_CARD_THUMBNAIL_SWIPE_BACKWARD, SHOWCASE_AVERAGE_SUBPAGE_CLOSEUP_PER_SESSION, TOTAL_CHECKOUT_CONVERSION_RATE, TOTAL_ADD_PAYMENT_INFO_CONVERSION_RATE, TOTAL_ADD_TO_WISHLIST_CONVERSION_RATE, TOTAL_INITIATE_CHECKOUT_CONVERSION_RATE, TOTAL_SUBSCRIBE_CONVERSION_RATE, TOTAL_VIEW_CONTENT_CONVERSION_RATE, TOTAL_VIEW_CATEGORY_CONVERSION_RATE, TOTAL_ADD_TO_CART_CONVERSION_RATE, TOTAL_SIGNUP_CONVERSION_RATE, TOTAL_PAGE_VISIT_CONVERSION_RATE, TOTAL_LEAD_CONVERSION_RATE, TOTAL_CONTACT_CONVERSION_RATE, TOTAL_SCHEDULE_CONVERSION_RATE, TOTAL_FIND_LOCATION_CONVERSION_RATE, TOTAL_CUSTOMIZE_PRODUCT_CONVERSION_RATE, TOTAL_SUBMIT_APPLICATION_CONVERSION_RATE, TOTAL_START_TRIAL_CONVERSION_RATE, TOTAL_APP_OPEN_CONVERSION_RATE, TOTAL_SEARCH_CONVERSION_RATE, TOTAL_WATCH_VIDEO_CONVERSION_RATE, TOTAL_UNKNOWN_CONVERSION_RATE, TOTAL_CUSTOM_CONVERSION_RATE, INAPP_SKAN_APP_INSTALL, INAPP_SKAN_ASSISTED_APP_INSTALL, INAPP_SKAN_APP_INSTALL_COST_PER_ACTION, INAPP_SKAN_APP_INSTALL_CONVERSION_RATE)

### `ReportingTimeZone`

Specify the timezone to be applied for the reporting.

Type: string enum(PINTEREST_TIME_ZONE, AD_ACCOUNT_TIME_ZONE)

### `CollectionsHeaderType`

Collections ad header type

Type: string enum(SHOP_THIS_COLLECTION, EXPLORE_THIS_COLLECTION, NO_HEADER, ON_SALE, GET_DEAL, None)

### `CreativeType`

Ad creative type enum.
**Note:** SHOP_THE_PIN has been deprecated. Please use COLLECTION instead.

Type: string enum(REGULAR, VIDEO, SHOPPING, CAROUSEL, MAX_VIDEO, SHOP_THE_PIN, COLLECTION, IDEA, SHOWCASE, QUIZ, COLLAGE, MAX_WIDTH_REGULAR_COLLECTION, MAX_WIDTH_VIDEO_COLLECTION, APP, CTV_VIDEO, SEARCH_TEXT_AD)

### `DynamicTitlesApprovalType`

A field to determine the approval type for dynamic titles

Type: string enum(MANUAL, AUTOMATIC)

### `GeneratedBackgroundStyle`

A generated background style that may be applied to a product group promotion's images.

Type: string enum(BASIC, LIFESTYLE)

### `GridClickType`

Where a user is taken after clicking on an ad in grid.

**Note:**  This parameter is read-only and is set to `DIRECT_TO_DESTINATION` by default for direct links supported ads. `grid_click_type` values provided will be ignored.

Type: string enum(CLOSEUP, DIRECT_TO_DESTINATION)

### `PreferredMediaType`

Select whether to promote the image or video pin by default for items in the promoted product group. If selecting IMAGE, image will be promoted for all ads in the product group, and when selecting VIDEO, video will be promoted when present, otherwise fall back to image. This is applicable for standard shopping ads only.

Type: string enum(VIDEO, IMAGE, None)

### `ProductGroupPromotionCustomizableCTAType`

Select a call to action (CTA) to display below your ad. CTA options for catalog sales campaigns are SHOP_NOW, BOOK_NOW, ON_SALE, GET_DEAL, BUY_ONLINE_PICKUP_IN_STORE

Type: string enum(GET_OFFER, LEARN_MORE, ORDER_NOW, SHOP_NOW, SIGN_UP, SUBSCRIBE, BUY_NOW, CONTACT_US, GET_QUOTE, VISIT_SITE, APPLY_NOW, BOOK_NOW, REGISTER_NOW, FIND_A_DEALER, WATCH_NOW, READ_MORE, BUY_TICKETS, DONATE_NOW, DOWNLOAD, EXPLORE_MORE, FIND_A_LOCATION, GET_DEAL, GET_RECIPE, GET_SHOWTIMES, ON_SALE, PLAY_GAME, TRY_IT, BUY_ONLINE_PICKUP_IN_STORE, SHOP_ON_ADVERTISER, SHOP_THE_COLLECTION, GET_IT_NOW, TAKE_A_PEEK, TAKE_A_CLOSER_LOOK)

### `ProductGroupPromotionResponseItem`

| Field | Type | Required | Description |
|---|---|---|---|
| data | `ProductGroupPromotion` |  |  |
| exceptions | array<`Exception`> |  |  |

### `Exception`

| Field | Type | Required | Description |
|---|---|---|---|
| code | integer |  |  |
| message | string | yes |  |

