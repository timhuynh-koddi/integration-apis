# TikTok Marketing API v1.3: Catalog

> Source: TikTok API for Business docs (https://business-api.tiktok.com/portal/docs, doc content API) and the official `tiktok/tiktok-business-api-sdk` OpenAPI files (`yml_files/`). Base URL: https://business-api.tiktok.com/open_api. Auth header: `Access-Token`. Fetched 2026-11-19.

---

## GET /v1.3/catalog/get/

**Get catalogs** (docs: https://business-api.tiktok.com/portal/docs/get-catalogs/v1.3)

Use this endpoint to get information about a catalog or all catalogs under a Business Center.

### Comparing v1.2 and v1.3
 |Changes|v1.2|v1.3|
|---|---|---|
|Endpoint path| /v1.2/catalog/get/| /v1.3/catalog/get/|
|Request parameter data type |`bc_id`: number<br>`catalog_id`: number|`bc_id`: string<br>`catalog_id`: string|
|Response parameter name|`name`|`catalog_name`|
|Response parameter data type|`bc_id`: number<br>`catalog_id`: number|`bc_id`: string<br>`catalog_id`: string|
|New response parameters|/|`ad_creation_eligible`<br>`additional_config_list`<br>`is_multi_country` <br>`feed_region_codes`|


### Request

**Endpoint** https://business-api.tiktok.com/open_api/v1.3/catalog/get/

**Method** GET

**Header**

|Field|Data Type|Description|
|---|---|---|
|Access-Token (required)|string|Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id=1738373164380162).|


**Parameters**

| Field | Type | Description |
|--- |--- |--- |
| bc_id (required) | string | Business Center ID. |
| catalog_id | string | Catalog ID. <br><br>If not specified, all catalogs will be returned. |
| page | number | Current number of pages.<br><br> Default value: 1. <br><br>Value range: ≥ 1. |
| page_size | number | Page size. <br><br>Default value: 10. <br><br>Value range: 1-1,000. |


#### Example

```xcodeblock
(code curl http)

curl -X GET -H "Access-Token:YOUR_ACCESS_TOKEN" \
--data-urlencode "bc_id=BC_ID" \
--data-urlencode "catalog_id=CATALOG_ID" \

https://business-api.tiktok.com/open_api/v1.3/catalog/get/

(/code)

```

### Response
| Field | Type | Description |
|--- |--- |--- |
| code | number  |Return code. For the complete list of response codes and descriptions, see [Appendix - return codes](https://ads.tiktok.com/marketing_api/docs?id=1737172488964097). |
|message |string|Return message. For details, see [Appendix-Return codes](https://ads.tiktok.com/marketing_api/docs?id=1737172488964097).  |
| data |object | Returned data. |
| ↳ list | object[] | Catalog list. |
| ↳↳ catalog_id | string | Catalog ID. |
| ↳↳ catalog_name | string | Catalog name. |
| ↳↳ catalog_type | string | Catalog type.<br><br>Enum values: <ul><li>`ECOM`: E-commerce catalog. </li><li> `HOTEL`: hotel catalog.</li><li>`FLIGHT`: flight catalog.</li><li>`DESTINATION`:  destination catalog.</li><li> `ENTERTAINMENT`: entertainment catalog.</li><li>`AUTO_VEHICLE`: Auto-Inventory catalog.</li><li>`AUTO_MODEL`: Auto-Model catalog.</li><li>`MINI_SERIES`: mini series catalog.</li><li>`GENERIC`: generic catalog.</li><li>`ONLINE_TO_OFFLINE`: online-to-offline catalog.</li></ul>|
| ↳↳ ad_creation_eligible |string|Whether the catalog can be used in ads when it contains the number of available products required for the ad format.<br><br>Enum values:<ul><li>`NOT_AVAILABLE`: The catalog cannot be used in ads.</li><li>`AVAILABLE`: The catalog can be used in ads when it contains the number of available products required for the ad format.</li></ul>|
| ↳↳ create_time | string | Creation time. |
| ↳↳ update_time | string | Update time. |
| ↳↳ bc_info| object| Information about Business Center.|
| ↳↳↳ bc_id|string|Business Center ID.|
| ↳↳↳ bc_name|string| Business Center name.|
| ↳↳↳ picture_url|string| URL of the profile image. An empty value is returned if the Business Center doesn't have a profile image.|
| ↳↳ catalog_conf | object | Catalog configuration information. |
| ↳↳↳ country|string|The region code of the primary targeting region.<br><br>To find out the corresponding region for a region code, refer to [Appendix - Location code](https://business-api.tiktok.com/portal/docs?id=1737585867307010).<br><br>Example: `US`.|
| ↳↳↳ currency|string|Currency for the primary targeting region.<br><br>For supported currencies, see the <b>Code</b> column in [Budget verification ratio and precision of each currency](https://business-api.tiktok.com/portal/docs?id=1737585839634433#item-link-Budget%20verification%20ratio%20and%20precision%20of%20each%20currency).<br><br>Example: `USD`.|
| ↳↳↳ is_multi_country|boolean|Whether the catalog is a multi-country catalog.<br>A multi-country catalog is a catalog that allows you to include country-specific product information. Within a multi-country catalog, you upload the data feed that contains the full SKU set and serves as the default source of product information across all markets first and then upload country feeds that override specific product attributes (such as price, availability, title, and description) for individual markets.<br><br>Supported values: `true`, `false`.|
| ↳↳↳ feed_region_codes|string[]|A list of country or region codes for a multi-country catalog with country feeds.<br><br>For example, if you have uploaded country feeds for the U.K. (`GB`) and the U.S. (`US`) that define product attributes for the U.K and U.S. markets to a multi-country catalog, `feed_region_codes` will be `&#91;"GB","US"&#93;`.|
| ↳↳↳ channel|string|Channel for creating the catalog.<br><br>Enum values:<ul><li>`PARTNER`: Partners.</li><li>`CLIENT`: Direct advertisers.</li></ul>|
| ↳↳↳ additional_config_list|object[]|Returned only when `catalog_type` is `MINI_SERIES`.<br><br>Details of additional targeting regions.|
| ↳↳↳↳ region_code|string|The region code of the additional targeting region.<br><br>To find out the corresponding region for a region code, refer to [Appendix - Location code](https://business-api.tiktok.com/portal/docs?id=1737585867307010).<br><br>Example: `GB`.|
| ↳↳↳↳ currency|string|Currency for the additional targeting region.<br><br>For supported currencies, see the <b>Code</b> column in [Budget verification ratio and precision of each currency](https://business-api.tiktok.com/portal/docs?id=1737585839634433#item-link-Budget%20verification%20ratio%20and%20precision%20of%20each%20currency).<br><br>Example: `GBP`.|
| ↳ page_info |object|Pagination information.|
| ↳↳ page |number|Current page number.|
| ↳↳ page_size |number|Page size.|
| ↳↳ total_number |number|Total number of results.|
| ↳↳ total_page |number|Total pages of results.|
| request_id | string | The log id of a request, which uniquely identifies the request. |


#### Example

```xcodeblock
(code Success-Response http)
HTTPS/1.1 200 OK
{
    "message": "OK",
    "code": 0,
    "data": {
        "page_info": {
            "total_number": 14,
            "page": 1,
            "page_size": 14,
            "total_page": 1
        },
        "list": [
            {
                "update_time": "2021-07-23 10:34:36",
                "catalog_name": "test",
                "create_time": "2021-07-23 10:34:36",
                "bc_info": {
                    "bc_id": "{{bc_id}}",
                    "picture_url": "example URL",
                    "bc_name": "BC Demo"
                },
                "catalog_type": "ECOM",
                "catalog_id": "{{catalog_id}}",
				"ad_creation_eligible": "AVAILABLE",
                "catalog_conf": {
                    "currency": "USD",
                    "country": "US",
					"channel": "CLIENT"
                }
            },
            ...
        ]
    },
    "request_id": "{{request_id}}"
}
(/code);
```

---

## GET /v1.3/catalog/set/get/

**Get product sets** (docs: https://business-api.tiktok.com/portal/docs/get-product-sets/v1.3)

Use this endpoint to get a list of product sets or one specified product set in a catalog under your Business Center.

### Comparing v1.2 and v1.3
 |Changes|v1.2|v1.3|
|---|---|---|
|Endpoint path| /v1.2/catalog/set/get/| /v1.3/catalog/set/get/|
|Request parameter data type |`bc_id`: number<br>`catalog_id`: number|`bc_id`: string<br>`catalog_id`: string|
|Request parameter name and data type |`set_id`: number|`product_set_id`: string|
|New request parameters| / |`return_product_count`|
|Response parameter name|`count`<br>`name`|`product_count`<br>`product_set_name`|
|Response parameter data type|`catalog_id`: number|`catalog_id`: string|
|Request parameter name and data type |`id`: number|`product_set_id`: string|

### Request

**Endpoint** https://business-api.tiktok.com/open_api/v1.3/catalog/set/get/

**Method** GET

**Header**

|Field|Type|Description|
|--- |--- |--- |
|Access-Token (required)|string|Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id=1738373164380162).|


**Parameters**

|Field|Type|Description|
|---|---|---|
| bc_id (required) | string | Business Center ID.<br><br>To obtain the list of Business Centers that you can access, use [/bc/get/](https://business-api.tiktok.com/portal/docs?id=1737115687501826). |
| catalog_id (required) | string | The ID of the catalog that you want to get product sets from. <br><br>To obtain the list of catalogs that you can access, use [/bc/asset/get/](https://business-api.tiktok.com/portal/docs?id=1739432717798401) and set `asset_type` to `CATALOG`. |
| product_set_id | string | The ID of the product set that you want to get.<br><br><ul><li>If this field is not passed, the system will return the complete list of product sets associated with the catalog (`catalog_id`).</li><li>If this field is passed, the system will only return the specified product set. </li></ul> |
| return_product_count | boolean | Whether to return the response parameter `product_count`. <br><br>Supported values: `true`, `false`. <br>Default value: `true`. <br><br><p><span style="color:darkred"><b>Note</b></span>: For product sets with too many products, returning `product_count` might trigger timeout errors. To avoid timeout issues in such cases, set this field to `false`. |


#### Example

```xcodeblock
(code curl http)

curl -X GET -H "Access-Token:YOUR_ACCESS_TOKEN" \
--data-urlencode "bc_id=BC_ID" \
--data-urlencode "catalog_id=CATALOG_ID" \
--data-urlencode "product_set_id=SET_ID" \

https://business-api.tiktok.com/open_api/v1.3/catalog/set/get/
(/code)
```

### Response

|Field|Type|Description|
|--- |--- |--- |
|code|number|The response code. For the complete list of response codes and descriptions, see [Appendix - Return Codes](https://ads.tiktok.com/marketing_api/docs?id=1737172488964097).|
|message|string|The response message. For details, see [Appendix - Return Codes](https://ads.tiktok.com/marketing_api/docs?id=1737172488964097).|
|request_id|string|The request ID.|
|data|object|The returned data.|
| ↳ list|object[]|A list of product sets. |
| ↳↳ product_count|number|Returned only when `return_product_count` is `true` or not passed in the request. <br><br>Number of products in this product set.|
| ↳↳ product_set_id|string|The product set ID.|
| ↳↳ catalog_id|string|The catalog ID.|
| ↳↳ product_set_name|string|The name of the product set.|
| ↳↳ conditions|object|The filter conditions.|
| ↳↳↳ and/or|object[]|The logical operator that will be applied to multiple filter conditions. You must specify either `and` or `or`. `and` stands for the AND logical operator. `or` stands for the OR logical operator.|
| ↳↳↳↳ field|string|The field that the filter will be applied to. For enum values, see [Appendix - Product Set - Filter fields](https://ads.tiktok.com/marketing_api/docs?id=1740673108747265).|
| ↳↳↳↳ operation|string|The filter operator. For enum values, see [Appendix - Product Set - Operators](https://ads.tiktok.com/marketing_api/docs?id=1740673108747265).|
| ↳↳↳↳ value|string/string[]|The expected value.|


#### Example

```xcodeblock
(code Success-Response http)
HTTPS/1.1 200 OK
{
    "message": "OK",
    "code": 0,
    "data": {
        "list": [
            {
				"product_set_id": "1767",
				"product_count": 8,
                "name": "test_create",
                "catalog_id": "6873077759237687045",
                "conditions": {
                    "or": [
                        {
                            "field": "price",
                            "operation": "LT",
                            "value": "250"
                        },
                        {
                            "field": "sale_price_effective_start_date",
                            "operation": "GTE",
                            "value": "2021-03-04 12:00:00"
                        }
                    ]
                }
            }
        ]
    },
    "request_id": "2021030908581701023102608005883C"
}
(/code);
```

---

## GET /v1.3/catalog/product/get/

**Get products** (docs: https://business-api.tiktok.com/portal/docs/get-products/v1.3)

Use this endpoint to get the list of products in your product catalog.

You can filter the products you want to get by specifying product IDs, SKU IDs, product set IDs or by using custom conditions (`conditions`). You can also order the results by product availability or custom conditions.



### Comparing v1.2 and v1.3
 |Changes|v1.2|v1.3|
|---|---|---|
|Endpoint path| /v1.2/catalog/product/get/| /v1.3/catalog/product/get/|
|Request parameter data type |`bc_id`: number<br>`catalog_id`: number|`bc_id`: string<br> `catalog_id`: string |
|Request parameter name and data type | `products`: number[]  <br>`product_sets`: number[] <br>`sens_type`: string|`product_ids`: string[] <br>`product_set_ids`: string[] <br>`case_sensitive`: boolean|
|New request parameters |/|`product_available_type` <br>`series_ids`|
|Response parameter name|`image_link`<br> `video_link`<br>`additional_image_link` <br>`gtin`<br>`mpn`<br>`product_type` <br>`landing_url`<br> `link`<br>`ext`|`image_url`<br>`video_url`<br>`additional_image_urls`<br>`global_trade_item_number`<br>`manufacturer_part_number`<br>`product_category`<br>`landing_page`<br>`landing_page_url`<br>`extra_info`|
|New response parameters |/|For E-commerce catalogs: <br>`ad_creation_eligible`<br>`is_multi_country_product`<br>`is_main_feed_product`<br>`country_products`<br>`region_audit_status`<br> For hotel catalogs: <br>`hotel_id`<br>`name`<br>`hotel_retailer_id`<br> `address`<br>`postal_code` <br>`latitude` <br>`longitude` <br>`margin_level` <br>`loyalty_program` <br>`guest_ratings`<br>`star_rating` <br> `room_type`<br>`hotel_category`<br>`neighborhood`<br> `priority` <br> `internal_label_0`<br> `internal_label_1`<br>`is_multi_country_product`<br>`is_main_feed_product`<br>`country_products`<br>`region_audit_status` <br> For flight catalogs:<br>`flight_id`<br> `origin_airport`<br>`destination_airport` <br>`origin_city`<br>`destination_city`<br> `cabin_class`<br>`airline_company`<br>`priority`<br>`is_multi_country_product`<br>`is_main_feed_product`<br>`country_products`<br>`region_audit_status` <br>For destination catalogs:<br>`destination_id` <br>`destination_name`<br>`address`<br>`postal_code`<br>`latitude`<br>`longitude`<br>`types`<br>`neighborhood`<br>`is_multi_country_product`<br>`is_main_feed_product`<br>`country_products`<br>`region_audit_status` <br>For entertainment catalogs:<br>`media_title_id` <br>`star_rating`<br>`timeline`<br>`category`<br>`genres`<br>`qid`<br>For Auto-Inventory catalogs<br>`vehicle_id`<br>`address`<br>`latitude` <br>`longitude`<br>`state_of_vehicle` <br>`vehicle_type`<br>`make`<br>`model` <br>`trim`<br>`year`<br>`vin` <br>`mileage`<br>`body_style`<br>`exterior_color`<br> `interior_color`<br>`transmission`<br>`drivetrain`<br>`fuel_type`<br>`dealer`<br>`date_first_on_lot`<br>`days_on_lot`<br>`offer_type`<br>`term_length` <br>`offer_term_qualifier` <br>`amount_price`<br>`amount_percentage`<br>`amount_qualifier`<br> `downpayment`<br>`downpayment_qualifier`<br> `offer_disclaimer`<br>`offer_disclaimer_url` <br>`emission_disclaimer`<br>`emission_disclaimer_url`<br>`emission_overlay_disclaimer`<br>`emission_image_link`<br>`video_url`<br>For Auto-Model catalogs:<br>`vehicle_id`<br>`make`<br> `model`<br>`trim`<br>`year`<br> `exterior_color`<br>`offer_type`<br>`term_length` <br>`offer_term_qualifier` <br>`amount_price`<br>`amount_percentage` <br>`amount_qualifier`<br>`downpayment`<br>`downpayment_qualifier`<br>`offer_disclaimer`<br>`offer_disclaimer_url`<br>`emission_disclaimer`<br>`emission_disclaimer_url`<br>`emission_overlay_disclaimer`<br>`emission_image_link`<br>`video_url`<br> For mini series catalogs: <br>`series_id`<br>`series_name` <br>`type`<br>`purchase_unit`<br>`cost` <br>`company_type`<br> `copyright_holder_name`<br>`app_id`<br>`minis_id` <br>`total_episodes`<br>`initial_paid_episodes`<br> `per_episode_duration`<br>`spoken_language`<br> `subtitle_language`<br>`production_type`<br>`target_audience`<br>`characters`<br>`genres`<br>`historical_context`<br>`actors`<br>` target_config`<br>`additional_product_list`<br>`video_url`<br>For generic catalogs:<br>`item_id`<br>`street`<br>`city`<br>`region`<br>`postal_code`<br>`latitude`<br>`longitude`<br>`rating`<br>`availability_type`<br>`availability_region`<br>`availability_dma`<br>`availability_circle_radius`<br>`availability_circle_radius_unit`<br>`availability_postal_codes`<br>`custom_number_0`<br>`custom_number_1`<br>`custom_number_2`<br>`custom_number_3`<br>`custom_number_4`<br>`custom_label_5`<br>`custom_label_6`<br>For online-to-offline catalogs:<br>`listing_id`<br>`street`<br>`city`<br>`region`<br>`postal_code`<br>`latitude`<br>`longitude`<br>`rating`<br>`availability_circle_radius`<br>`availability_circle_radius_unit`<br>`custom_number_0`<br>`custom_number_1`<br>`custom_number_2`<br>`custom_number_3`<br>`custom_number_4`|


### Request
**Endpoint** https://business-api.tiktok.com/open_api/v1.3/catalog/product/get/



**Method** GET

**Header**

|Field|Data Type|Description|
|---|---|---|
|Access-Token (required)|string|Authorized access token. For details, see [Authentication](https://business-api.tiktok.com/portal/docs/marketing-api-authentication/v1.3). |


**Parameters**

| Field | Type | Description |
|--- |--- |--- |
| bc_id (required) | string | Business Center ID. |
| catalog_id (required) | string | Catalog ID. |
| page | number | Current page number.<br><br><p><span style="color:darkred"><b>Note</b></span>: Only 10,000 results can be returned at most. You need to ensure that `page` multiplied by `page_size` is no more than 10,000. |
| page_size | number | Page size. <br><br>Default value: 10.<br>Value range: within 500.|
| product_ids | string[] | IDs of the products that you want to get. <br><br>Max size: 1,000. <br><br><p><span style="color:darkred"><b>Note</b></span>:  <ul><li>`product_ids` and `sku_ids` cannot be specified at the same time. </li><li>For mini series catalogs, the only supported filter is `product_ids`.</li></ul>|
|sku_ids| string[]| IDs of the SKUs that you want to get information for. Max size: 1000.<br>Length limit: 100 characters for each SKU ID and cannot contain emojis.<br><p><span style="color:darkred"><b>Note</b></span>:<ul><li>Duplicate SKU IDs are not supported. </li><li>`product_ids` and `sku_ids` cannot be specified at the same time.</li></ul>|
|series_ids|string[]|IDs of the short drama series that you want to filter.<br><br>Max size: 1,000.<br><br>Length limit: 100 characters for each short drama series ID.<br><br><p><span style="color:darkred"><b>Note</b></span>: <ul><li>Duplicate short drama series IDs are not supported.</li><li>`product_ids` and `series_ids` cannot be specified at the same time.</li><li>`conditions` and `series_ids` cannot be specified at the same time.</li></ul>|
|product_set_ids|string[]| IDs of the product sets that you want to get. Max size: 100.|
|product_available_type|string|Valid only when an Ecommerce or online-to-offline catalog is specified through `catalog_id`.<br><br>The type of products to retrieve.<br><br>Enum values:<ul><li>`AVAILABLE`: To retrieve products that are available for ad creation.</li><li>`ALL`: To retrieve all products.</li></ul><br>Default value: `ALL`.|
|order|object|Ordering settings. When `product_ids` or `sku_ids` is specified, this field will be ignored.|
| ↳ order_condition|string| Order-by condition. Currently, the only supported value is `PRODUCT_AVAILABILITY`. Do not pass in this field and `custom_order` at the same time. |
| ↳ custom_order|object[]|Custom ordering / sorting conditions. Do not pass in this field and `order_condition` at the same time.|
| ↳↳ field|string|Data field that you want to order your products by. For supported ordering-by fields, see the Supported fields section below.|
| ↳↳ type|string|Ordering / sorting type. Enum values: `ASC` (ascending order), `DES` (descending).|
|conditions|object|Filtering conditions. <br>When you specify a filtering condition, all data fields in this object are required except `case_senstive`. <br>When `product_ids`, `sku_ids`, or `series_ids` is specified, this field will be ignored.|
| ↳ and / or| object[]| Logic operator for the conditions. Either `and` or `or`.|
| ↳↳ field|string| Data field to filter by. For the supported fields, see the <a href="#item-link-anchor-0-2-1">Supported fields</a>  section below.|
| ↳↳ operator|string|Filter operator. Enum values: `EQ`, `NE`, `GT`, `GTE`,  `LT`,  `LTE`,  `RNG`,  `WILDCARD`, `NOT_WILDCARD`,  `PREFIX`, `EXIST`, `IN`,  `NOT_IN`.|
| ↳↳ values|string[]| Filter values. Multiple values are allowed when `operator` is `RNG`, `IN`, or `NOT_IN`.|
| ↳↳ case_senstive|boolean|Whether it is case-sensitive.|


#### Supported fields

##### For E-commerce catalog products
|Data Field |Supports ordering-by? |Can be used as field under conditions? |Case-sensitive? |
|---|---|---|---|
|sku_id|Yes|Yes|No|
|product_id|Yes|Yes|Yes|
|audit_status|No|Yes|Yes|
|title|Yes|Yes|No|
|description|Yes|Yes|No|
|brand|Yes|Yes|No|
|item_group_id|Yes|Yes|No|
|google_product_category|Yes|Yes|No|
|price_info|Yes|Yes|Yes|
|sale_price|Yes|Yes|Yes|
|sale_price_effective_start_date|Yes|Yes|Yes|
|sale_price_effective_end_date|Yes|Yes|Yes|
|condition|No|Yes|Yes|
|age_group|No|Yes|Yes|
|color|Yes|Yes|No|
|gender|No|Yes|Yes|
|size|Yes|Yes|No|
|material|Yes|Yes|No|
|pattern|Yes|Yes|No|
|product_category|Yes|Yes|No|
|custom_label_0|Yes|Yes|No|
|custom_label_1|Yes|Yes|No|
|custom_label_2|Yes|Yes|No|
|custom_label_3|Yes|Yes|No|
|custom_label_4|Yes|Yes|No|
|active_status|No|Yes|Yes|



##### For flight catalog products
|Data Field |Supports ordering-by? |Can be used as field under conditions? |Case-sensitive? |
|---|---|---|---|
|flight_id|Yes|Yes|No|
|origin_airport|Yes|Yes|No|
|destination_airport|Yes|Yes|No|
|origin_city|Yes|Yes|No|
|destination_city|Yes|Yes|No|
|description|Yes|Yes|Yes|
|cabin_class|Yes|Yes|No|
|airline_company|Yes|Yes|No|
|price|Yes|Yes|No|
|custom_label_0|Yes|Yes|No|
|custom_label_1|Yes|Yes|No|
|custom_label_2|Yes|Yes|No|
|custom_label_3|Yes|Yes|No|
|custom_label_4|Yes|Yes|No|



##### For entertainment catalog products
|Data Field |Can be used as field under conditions? |
|---|---|
|media_title_id|Yes|
|product_id|Yes|
|audit_status|Yes|
|title|Yes|
|description|Yes|
|availability|Yes|
|timeline|Yes|
|genres|Yes|



##### For Auto-Inventory catalog products
|Data Field |Supports ordering-by? |Can be used as field under conditions? |Case-sensitive? |
|---|---|---|---|
|vehicle_id|Yes|Yes|Yes|
|title|Yes|Yes|Yes|
|description|Yes|Yes|Yes|
|availability|No|Yes|No|
|condition|No|Yes|No|
|state_of_vehicle|No|Yes|No|
|make|Yes|Yes|Yes|
|model|Yes|Yes|Yes|
|trim|Yes|Yes|Yes|
|year|Yes|Yes|No|
|vin|Yes|Yes|Yes|
|mileage|Yes|Yes|No|
|body_style|No|Yes|No|
|drivetrain|No|Yes|No|
|fuel_type|No|Yes|No|
|city|Yes|No|Yes|



##### For Auto-Model catalog products
|Data Field |Supports ordering-by? |Can be used as field under conditions? |Case-sensitive? |
|---|---|---|---|
|vehicle_id|Yes|Yes|Yes|
|title|Yes|Yes|Yes|
|make|Yes|Yes|Yes|
|model|Yes|Yes|Yes|
|year|Yes|Yes|Yes|
|trim|Yes|Yes|Yes|



##### For short drama series
|Data Field|Supports ordering-by?|Can be used as field under conditions?|Case-sensitive?|
|---|---|---|---|
|series_id|Yes|Yes|No|
|series_name|Yes|Yes|No|
|product_detail.genres|Yes|Yes|Yes|
|product_detail.characters|Yes|Yes|Yes|
|product_detail.historical_context|Yes|Yes|Yes|



##### For generic catalog products or services
|Data Field|Supports ordering-by?|Can be used as field under conditions?|Case-sensitive?|
|---|---|---|---|
|title|Yes|Yes|No|
|item_id|Yes|Yes|Yes|
|price_info.price|Yes|Yes|Yes|
|price_info.sale_price|Yes|Yes|Yes|
|availability|Yes|Yes|Yes|
|rating|Yes|Yes|Yes|
|address.region|Yes|Yes|No|
|address.city|Yes|Yes|No|
|address.street|Yes|Yes|Yes|
|extra_info.custom_label_0|Yes|Yes|No|
|extra_info.custom_label_1|Yes|Yes|No|
|extra_info.custom_label_2|Yes|Yes|No|
|extra_info.custom_label_3|Yes|Yes|No|
|extra_info.custom_label_4|Yes|Yes|No|
|extra_info.custom_label_5|Yes|Yes|No|
|extra_info.custom_label_6|Yes|Yes|No|
|product_detail.custom_number_0|Yes|Yes|No|
|product_detail.custom_number_1|Yes|Yes|No|
|product_detail.custom_number_2|Yes|Yes|No|
|product_detail.custom_number_3|Yes|Yes|No|
|product_detail.custom_number_4|Yes|Yes|No|



##### For online-to-offline products
|Data Field|Supports ordering-by?|Can be used as field under conditions?|Case-sensitive?|
|---|---|---|---|
|listing_id|Yes|Yes|No|
|title|Yes|Yes|No|
|availability|Yes|Yes|No|
|brand|Yes|Yes|No|
|product_detail.rating|Yes|Yes|No|
|condition|Yes|Yes|No|
|age_group|Yes|Yes|No|
|gender|Yes|Yes|No|
|google_product_category|Yes|Yes|Yes|
|item_group_id|Yes|Yes|No|
|price_info.price|Yes|Yes|No|
|price_info.sale_price|Yes|Yes|No|
|address.region|Yes|Yes|Yes|
|address.city|Yes|Yes|Yes|
|product_detail.custom_number_0|Yes|Yes|No|
|product_detail.custom_number_1|Yes|Yes|No|
|product_detail.custom_number_2|Yes|Yes|No|
|product_detail.custom_number_3|Yes|Yes|No|
|product_detail.custom_number_4|Yes|Yes|No|
|extra_info.custom_label_0|Yes|Yes|No|
|extra_info.custom_label_1|Yes|Yes|No|
|extra_info.custom_label_2|Yes|Yes|No|
|extra_info.custom_label_3|Yes|Yes|No|
|extra_info.custom_label_4|Yes|Yes|No|



#### Example
```xcodeblock
(code curl http)
curl --location --request GET 'https://business-api.tiktok.com/open_api/v1.3/catalog/product/get/' \
--header 'Access-Token: xxxx' \
--header 'Content-Type: application/json' \
--data-raw '{
    "bc_id": 123456,
    "catalog_id": 123456
}'
(/code)
```

### Response


|Field|Data Type|Description|
|-|-|-|
|code |number|Response code. For the complete list of response codes and descriptions, see [Appendix - Return Codes](https://business-api.tiktok.com/portal/docs/return-codes-appendix/v1.3).|
|message |string|Response message. For details, see [Appendix - Return Codes](https://business-api.tiktok.com/portal/docs/return-codes-appendix/v1.3).|
|request_id|string| The log ID of the request, which uniquely identifies a request.|
|data|object|Returned data.|
| ↳ list | object[] | Product list. |
| ↳↳ audit|object| Audit information.|
| ↳↳↳ audit_status|string| Ad audit status. It indicates if the ad promoting the product can be deployed. <br><br>Enum values: `approved`, `rejected`, `processing`.|
| ↳↳↳ rejected_info|object[]|Returned only when `audit_status` is `rejected`.<br><br>List of rejection reasons.  |
| ↳↳↳↳ reason|string| Rejection reason.|
| ↳↳↳↳ suggestion|string| Suggestions about how to revise to be approved.|
| ↳↳↳↳ affected_placement|string[]| List of placements affected by the rejection.|
| ↳↳↳↳ affected_country|string[]|List of countries or regions affected by the rejection.|
| ↳↳ available|boolean|Returned only for E-commerce and online-to-offline products.<br><br>Whether the product is available for ad creation.<br><br>Supported values: `true`, `false`.|
| ↳↳ ad_creation_eligible | string | Returned only for E-commerce catalog products. <br><br>Whether the E-commerce catalog product can be used to create ads. <br><br>Enum values: `AVAILABLE`, `NOT_AVAILABLE`.<br><br>The `ad_creation_eligible` of an E-commerce catalog product will be `AVAILABLE` only when the following conditions are met: <ul><li>`audit_status` is `approved`. </li><li> `active_status` is `ACTIVATED`. </li><li> `availability` is `IN_STOCK`, `AVAILABLE_FOR_ORDER`, or `PREORDER`.</li></ul> |
| ↳↳ active_status|string|Whether the product is activated. <br><br>Enum values: `ACTIVATED`, `DEACTIVATED`. <br><br>This field represents the advertiser-controlled online or offline status of the product. However, it does not necessarily imply that the product can be used to create ads.|
| ↳↳ sku_id | string | Advertiser-defined product ID.|
| ↳↳ title | string | Product title. |
| ↳↳ description | string | Product description. |
| ↳↳ availability | string | Inventory status. <br><br><ul><li>For E-commerce and online-to-offline catalog products, the enum values are: <ul><li>`IN_STOCK`: in stock. </li><li>`AVAILABLE_FOR_ORDER`: available for order. </li><li>`PREORDER`: available for pre-order.</li><li>`OUT_OF_STOCK`: out of stock.</li><li> `DISCONTINUED`: discontinued.</li></ul></li><li>For hotel catalog products, the enum values are:<ul><li>`IN_STOCK`: available for booking. </li><li>`OUT_OF_STOCK`: unavailable for booking.</li></ul></li><li>For entertainment catalog products, the enum values are:<ul><li>`AVAILABLE`</li><li>`SUBSCRIBERS_ONLY` </li><li>`ON_DEMAND`</li><li>`NOT_AVAILABLE`</li></ul></li><li>For  Auto-Inventory catalog products, the enum values are:<ul><li>`AVAILABLE`: available for order.</li><li>`NOT_AVAILABLE`: Not available for order.</li></ul></li><li>For products or services in a generic catalog, the enum values are:<ul><li>`IN_STOCK`: in stock.</li><li>`AVAILABLE`: available.</li><li>`PREORDER`: pre-order.</li><li>`OUT_OF_STOCK`: out of stock.</li><li>`DISCONTINUED`: discontinued.</li><li>`UNAVAILABLE`: unavailable.</li></ul></li></ul> |
| ↳↳ image_url | string | The URL for the product image.|
| ↳↳ video_url | string | Ad video link.|
| ↳↳ brand | string | Brand information. |
| ↳↳ additional_image_urls | string[] | Additional image URLs for the product. |
| ↳↳ image | object[] | Product image information, including main image and additional images.|
| ↳↳↳ url | string | The URL for the product image.|
| ↳↳ item_group_id | string | Product SPU ID. |
| ↳↳ google_product_category | string | Category information. |
| ↳↳ global_trade_item_number | string |  The Global Trade Item Number (GTIN) for the product. |
| ↳↳ manufacturer_part_number | string | The Manufacturer Part Number (MPN) for the product. |
| ↳↳ hotel_id| string | A unique ID for the hotel. |
| ↳↳ name | string | The name of the hotel. |
| ↳↳ hotel_category | string[] | The categories of the hotel.<br> <br> For enum values, see [List of values for `hotel_category`](https://business-api.tiktok.com/portal/docs?id=1740497429681153#item-link-List of values for hotel_category). |
| ↳↳ hotel_retailer_id | string | A unique ID for the hotel retailer. |
| ↳↳ address | object | Address information. |
| ↳↳↳ address | string | The address of the hotel, destination, or the dealership. |
| ↳↳↳ street | string | The street address where the product or service is located. |
| ↳↳↳ secondary_address|string|The secondary street address of the hotel.|
| ↳↳↳ tertiary_address|string|The tertiary street address of the hotel.|
| ↳↳↳ city | string | The city where the hotel, destination, or the dealership is located, or the city where the product or service is located. |
| ↳↳↳ region | string | The region (state/province) where the hotel, destination, or the dealership is located, or the state, province, or administrative region where the product or service is located. |
| ↳↳↳ country | string | The country where the hotel or destination is located. |
| ↳↳↳ postal_code  | string | The postal code for the dealership's address, or postal or zip code of the product or service location.|
| ↳↳ neighborhood | string | The neighborhood where the hotel or destination is located.  <br> <br>Example: `Bangkok Old Town`. |
| ↳↳ postal_code|string|The postal code or zip code of the hotel. |
| ↳↳ latitude | float | The latitude of the hotel, destination, or the dealership's location, or the product or service location. <br>Example: 37.484100 |
| ↳↳ longitude |float | The longitude of the hotel, destination, or the dealership's location, or the product or service location. <br>Example: -122.148252 |
| ↳↳ series_id |string|A unique self-defined ID for the short drama series.|
| ↳↳ series_name |string|The name of the short drama series.|
| ↳↳ target_config | object | Details of the primary targeting region for the short drama series. |
| ↳↳↳ region_code | string | The region code of the primary targeting region for the short drama series.<br><br>Example: `US`. |
| ↳↳↳ currency | string | Currency for the primary targeting region for the short drama series.<br><br>For supported currencies, see the <b>Code</b> column in [Budget verification ratio and precision of each currency](https://business-api.tiktok.com/portal/docs?id=1737585839634433#item-link-Budget%20verification%20ratio%20and%20precision%20of%20each%20currency).<br><br>Example: `USD`. |
| ↳↳ recharge |object[]|Information about the recharge for the short drama series.|
| ↳↳↳ type |string|Recharge type for the short drama series.<br><br>Enum values:<ul><li>`BY_TIERS`: Recharge by tiers.</li><li>`SUBSCRIPTION`: Recharge by subscription fee for a time period.</li><li>`BY_EPISODES`: Recharge by episodes.</li></ul>|
| ↳↳↳ purchase_unit |string[]|Units for the recharge.<br><br>When `recharge_type` is `BY_TIERS`, the enum values are:<ul><li>`TIER 1`: tier 1.</li><li>`TIER_2`: tier 2.</li><li>`TIER 3`: tier 3.</li><li>`TIER 4`: tier 4.</li><li>`TIER 5`: tier 5.</li></ul>When `recharge_type` is `SUBSCRIPTION`, the enum values are:<ul><li>`WEEKLY`: weekly.</li><li>`MONTHLY`: monthly.</li><li>`QUARTERLY`: quarterly.</li><li>`YEARLY`: yearly.</li></ul>When `recharge_type` is `BY_EPISODES`, specify one or more numeric strings that represent numbers no more than the total episode count.|
| ↳↳↳ cost |float[]|The prices for the tiers, subscription periods, or episodes.|
| ↳↳ margin_level | string | The percentage of the base price (`price`) for a hotel room that the hotel charges as deposit. <br>For instance, a value of 10 means the hotel charges 10 percent of the base price for a hotel room as deposit. |
| ↳↳ loyalty_program | string | The loyalty program offered by the hotel. <br><br>For enum values, see [List of values for `loyalty_program`](https://business-api.tiktok.com/portal/docs?id=1740497429681153#item-link-List of values for loyalty_program). |
| ↳↳ guest_ratings | object[] | Information about guest ratings for the hotel. |
| ↳↳↳ rating_system | string | The rating system for the hotel. |
| ↳↳↳ max_score | integer | The highest score that the hotel has received. |
| ↳↳↳ score | float | The average score of the hotel. |
| ↳↳↳ number_of_reviewers | integer | The number of guests who have reviewed the hotel. |
| ↳↳ star_rating | float | Hotel star rating that is assigned by professional organizations or travel review agencies based on a set of criteria. The highest possible rating is usually 5 stars. Uploading it might help increase Page View Rate. |
| ↳↳ room_type | string[] | The hotel room types. <br><br>For enum values, see [List of values for `room_type`](https://business-api.tiktok.com/portal/docs?id=1740497429681153#item-link-List of values for room_type). |
| ↳↳ priority | integer | The priority of the hotel or flight. <br> <br>Value range: 0-5. <br>A higher value indicates a higher priority. |
| ↳↳ flight_id | string | A unique ID for the flight. <br> <br>The ID will be automatically generated by the system.|
| ↳↳ origin_airport | string | The origin airport of the flight, in the format of a three-letter IATA (International Air Transport Association) code. <br>Example: `AAR`. |
| ↳↳ destination_airport | string | The destination airport of the flight, in the format of a three-letter IATA code. <br>Example: `ABD`. |
| ↳↳ origin_city | string | The name of the origin city. |
| ↳↳ destination_city | string | The name of the destination city. |
| ↳↳ cabin_class | string | The cabin class of the flight.<br><br>Enum values:<ul><li>`FIRST_CLASS`: First Class. Premium service with luxurious amenities and private spaces.</li><li>`FIRST_CLASS_SUITE`: First Class Suite. Private suites offering luxury and exclusivity.</li><li>`BUSINESS_CLASS`: Business Class. Enhanced comfort and amenities for business and leisure travelers.</li><li>`BUSINESS_CLASS_SUITE`: Business Class Suite. Spacious and private cabins in business class.</li><li>`COMFORT_CLASS`: Comfort Class. Improved seating and service between premium and economy.</li><li>`ECONOMY_CLASS`: Economy Class. Standard travel option with basic amenities at an affordable price.</li><li>`BASIC_ECONOMY`: Basic Economy. Budget-friendly option with limited services and restrictions.</li><li>`STANDARD_ECONOMY`: Standard Economy. Typical economy service with basic features and pricing.</li><li>`PREMIUM_ECONOMY`: Premium Economy. Extra legroom and better in-flight services compared to standard economy.</li><li>`LIE_FLAT_SEAT`: Lie Flat Seat. Fully reclining seats for optimal comfort on long flights.</li><li>`CHARTER_CLASS`: Charter Class. Custom private aircraft hire for tailored travel experiences.</li><li>`ELITE_CLASS`: Elite Class. Top-tier service combining the best features of first and business classes.</li><li>`QUIET_CLASS`: Quiet Class. Noise-reduced area for a serene travel experience.</li></ul>  |
| ↳↳ airline_company | string | The name of the airline company operating the flight.<br><br>Enum values:<ul><li>`AEROFLOT`: Aeroflot.</li><li>`AIR_FRANCE_KLM_GROUP`: Air France-KLM Group.</li><li>`ALASKA_AIRLINES`: Alaska Airlines.</li><li>`ANA`: ANA.</li><li>`AMERICAN_AIRLINES`: American Airlines.</li><li>`BRITISH_AIRWAYS`: British Airways.</li><li>`CATHAY_PACIFIC`: Cathay Pacific.</li><li>`CHINA_SOUTHERN_AIRLINES`: China Southern Airlines.</li><li>`CHINA_EASTERN_AIRLINES`: China Eastern Airlines.</li><li>`DELTA_AIR_LINES`: Delta Air Lines.</li><li>`EMIRATES`: Emirates.</li><li>`JAPAN_AIRLINES`: Japan Airlines.</li><li>`JETBLUE_AIRWAYS`: JetBlue Airways.</li><li>`KLM_ROYAL_DUTCH_AIRLINES`: KLM Royal Dutch Airlines.</li><li>`LUFTHANSA_GROUP`: Lufthansa Group.</li><li>`QANTAS_AIRWAYS`: Qantas Airways.</li><li>`QATAR_AIRWAYS`: Qatar Airways.</li><li>`SINGAPORE_AIRLINES`: Singapore Airlines.</li><li>`SOUTHWEST_AIRLINES`: Southwest Airlines.</li><li>`TURKISH_AIRLINES`: Turkish Airlines.</li><li>`UNITED_AIRLINES`: United Airlines.</li><li>`VIRGIN_ATLANTIC`: Virgin Atlantic.</li></ul> |
| ↳↳ destination_id | string | A unique ID for the destination. |
| ↳↳ destination_name | string | The name of the destination. |
| ↳↳ postal_code | string | Postal code or zip code for the destination. |
| ↳↳ types | string[] | The type or types of destination. |
| ↳↳ media_title_id| string | A unique ID for the media title item. <br><br>A media title item is a media product that is available for distribution or consumption, such as a movie, TV show, music, or sports game. |
| ↳↳ timeline | string | The timeline for the media title item. <br><br>Enum values: <ul><li>`COMING_SOON`: The media title item is not available now, but will be released soon.</li><li> `ONLINE`: The media title item is currently available for purchase or view.</li><li>`EXPIRE_SOON`: The media title item will no longer be available for purchase or view soon. </li></ul> |
| ↳↳ category | string | The category of the media title item. <br><br>Enum values: <ul><li>`MOVIE`: movie.</li><li>`MUSIC`: music.</li><li> `TV_SHOW`: TV show.</li><li> `TV_SERIES`: TV series.</li><li>`SPORTS_GAME`: sports game.</li><li> `LIVE_EVENT`: live event. </li></ul> |
| ↳↳ genres | string[] | The genres of the media title item. <br><br>To find out the allowed values for this field, refer to the "<a href="#item-link-List of values for genres "> List of values for `genres` </a> " section below.  |
| ↳↳ qid | string | QID (or Q number), the unique identifier of the media title item on Wikidata, which consists of the letter "Q" followed by one or more digits. |
| ↳↳ vehicle_id|string|A unique ID for the vehicle.|
| ↳↳ state_of_vehicle |string|The state of the vehicle.<br><br>Enum values:<ul><li>`NEW`: new.</li><li>`USED`: used.</li><li>`CPO`: CPO (certified pre-owned). CPO vehicles are used vehicles that have undergone thorough inspection and are typically newer, have lower mileage, and come with additional warranty coverage compared to regular used cars.</li></ul>Example: `USED`.|
| ↳↳ vehicle_type|string|The type of the vehicle.<br><br>Enum values:<ul><li>`BOAT`: boat.</li><li>`CAR_TRUCK`: car or truck.</li><li>`COMMERCIAL`: A vehicle used for commercial purposes, such as a delivery truck.</li><li>`MOTORCYCLE`: motorcycle.</li><li>`POWERSPORT`: powersport. Recreational vehicles that are designed for outdoor activities and adventure, such as a snowmobile.</li><li>`RV_CAMPER`: recreational vehicle or camper designed for travel and camping purposes.</li><li>`TRAILER`: trailer.</li><li>`OTHER`: Any other vehicle type not covered above.</li></ul>|
| ↳↳ make |string|The make (brand) of the vehicle.|
| ↳↳ model |string|The model of the vehicle.|
| ↳↳ trim|string|The trim of the vehicle. The trim represents the distinctive specification package of the vehicle, tailored specifically to that model.|
| ↳↳ year |integer|The year when the vehicle was launched, in the format of `YYYY`.|
| ↳↳ vin|string|The VIN (Vehicle Identification Number) of the vehicle.|
| ↳↳ mileage |object|The mileage of the vehicle.|
| ↳↳↳ value |integer|Mileage value.|
| ↳↳↳ unit |string|Mileage unit.<br><br>Enum values:<ul><li>`MILE`: mile.</li><li>`KILOMETER`: kilometer.</li></ul>|
| ↳↳ body_style |string|The body style of the vehicle.<br><br>Enum values:<ul><li>`CONVERTIBLE`: convertible.</li><li>`COUPE`: coupe.</li><li>`CROSSOVER`: crossover.</li><li>`HATCHBACK`: hatchback.</li><li>`MINIVAN`: minivan.</li><li>`SMALL_CAR`: small car.</li><li>`SEDAN`: sedan.</li><li>`SUV`: SUV.</li><li>`TRUCK`: truck.</li><li>`VAN`: van.</li><li>`WAGON`: wagon.</li><li>`OTHER`: other.</li></ul>|
| ↳↳ exterior_color|string|The exterior color of the vehicle.|
| ↳↳ interior_color|string|The interior color of the vehicle.|
| ↳↳ transmission|string|The transmission type of the vehicle.<br><br>Enum values:<ul><li>`AUTOMATIC`: automatic.</li><li>`MANUAL`: manual.</li></ul>|
| ↳↳ drivetrain|string|The drivetrain type of the vehicle.<br><br>Enum values:<ul><li>`4X2`: four-wheel drive vehicle with two wheel drive (2WD). The drivetrain delivers power to either the front wheels or the rear wheels.</li><li>`4X4`: four-wheel drive vehicle with four wheel drive. The drivetrain delivers power to all four wheels.</li><li>`AWD`: all-wheel drive. The drivetrain delivers power to all wheels continuously.</li><li>`FWD`: front-wheel drive. The drivetrain delivers power to the front wheels only.</li><li>`RWD`: rear-wheel drive. The drivetrain delivers power to the rear wheels only.</li><li>`OTHER`: any other drivetrain type not covered above, such as electric vehicles with unique drivetrain styles.</li></ul>|
| ↳↳ fuel_type|string|The fuel type of the vehicle.<br><br>Enum values:<ul><li>`DIESEL`: diesel.</li><li>`ELECTRIC`: electric.</li><li>`FLEX`: flex fuel, a blend of gasoline and ethanol.</li><li>`GASOLINE`: gasoline.</li><li>`HYBRID`: hybrid.</li><li>`OTHER`: other.</li></ul>|
| ↳↳ dealer|object|Detailed information about the dealership.|
| ↳↳↳ dealer_id|string|A unique ID for the dealership.|
| ↳↳↳ dealer_name|string|The name of the dealership.|
| ↳↳↳ dealer_phone|string|The phone number of the dealership.|
| ↳↳↳ stock_number|string|The stock number assigned to the vehicle by the dealership. The stock number is usually assigned when the vehicle physically arrives at the dealership's lot.|
| ↳↳ date_first_on_lot|string|The date when the vehicle physically arrives at the dealership's lot, in the format of `YYYY-MM-DD`.|
| ↳↳ days_on_lot|integer|The number of days the vehicle has been on the dealership's lot.|
| ↳↳ item_id|string|A unique, self-defined ID for the product or service.|
| ↳↳ listing_id|string|A unique ID for the listing.|
| ↳↳ product_id | string | Product ID. |
| ↳↳ is_multi_country_product|boolean|Whether the product belongs to a multi-country catalog.<br><br>Supported values: `true`, `false`.|
| ↳↳ is_main_feed_product|boolean|Whether the product is the main product.<br><br>Supported values: `true`, `false`.|
| ↳↳ region_audit_status|object[]|Details of review status for product information for each market.|
| ↳↳↳ region_code|string|The country or region code of the market.|
| ↳↳↳ audit_status|string|The review result.<br><br>Enum values:<ul><li>`approved`: The product information for the market has been approved.</li><li>`rejected`: The product information for the market has been rejected.</li><li>`processing`: The product information for the market is still processing.</li></ul>|
| ↳↳ country_products|object[]|Returned only for a product with market-specific product information.<br><br>The detailed market-specific product information for a product. Each object consists of the product information for a product for a specific market.|
| ↳↳↳ product_id|string|Product ID.|
| ↳↳↳ region_code|string|The country or region code of the market.|
| ↳↳↳ is_multi_country_product|boolean|Whether the product belongs to a multi-country catalog.<br><br>Supported values: `true`, `false`.|
| ↳↳↳ is_main_feed_product|boolean|Whether the product is the main product.<br><br>Supported values: `true`, `false`.|
| ↳↳↳ region_audit_status|object[]|Details of review status for product information for each market.|
| ↳↳↳↳ region_code|string|The country or region code of the market.|
| ↳↳↳↳ audit_status|string|The review result.<br><br>Enum values:<ul><li>`approved`: The product information for the market has been approved.</li><li>`rejected`: The product information for the market has been rejected.</li><li>`processing`: The product information for the market is still processing.</li></ul>|
| ↳↳↳ description|string|Product description.|
| ↳↳↳ availability|string|Inventory status.<ul><li>For E-commerce catalog products, the enum values are:<ul><li>`IN_STOCK`: in stock.</li><li>`AVAILABLE_FOR_ORDER`: available for order.</li><li>`PREORDER`: available for pre-order.</li><li>`OUT_OF_STOCK`: out of stock.</li><li>`DISCONTINUED`: discontinued.</li></ul></li><li>For hotel catalog products, the enum values are:<ul><li>`IN_STOCK`: available for booking.</li><li>`OUT_OF_STOCK`: unavailable for booking.</li></ul></li></ul>|
| ↳↳↳ image_url|string|The URL for the product image.|
| ↳↳↳ name|string|The name of the hotel.|
| ↳↳↳ origin_airport|string|The origin airport of the flight, in the format of a three-letter IATA (International Air Transport Association) code.<br><br>Example: `AAR`.|
| ↳↳↳ destination_airport|string|The destination airport of the flight, in the format of a three-letter IATA code.<br><br>Example: `ABD`.|
| ↳↳↳ origin_city|string|The name of the origin city.|
| ↳↳↳ destination_city|string|The name of the destination city.|
| ↳↳↳ destination_name|string|The name of the destination.|
| ↳↳↳ profession|object|Product other information.|
| ↳↳↳↳ condition|string|Current status of products.<ul><li>For E-commerce catalog products, the enum values are `NEW`, `REFURBISHED`, and `USED`.</li></ul>|
| ↳↳↳↳ size|string|Size of the item.|
| ↳↳↳ price|object|Price information.|
| ↳↳↳↳ price|number|The base price.|
| ↳↳↳↳ currency|string|Currency of the price.|
| ↳↳↳↳ sale_price|number|The discounted price.|
| ↳↳↳↳ sale_price_effective_date|string[]|Start and end date and time of sale.|
| ↳↳↳ landing_page|object|Landing page information.|
| ↳↳↳↳ landing_page_url|string|URL of the landing page where you can view or purchase the product.|
| ↳↳ profession| object | Product other information. |
| ↳↳↳ age_group | string | Age group of products. <br><br>Enum values:`NEW_BORN`, `INFANT`, `TODDLER`, `KIDS`, `ADULT`. <br><br>Example: `ADULT`. |
| ↳↳↳ color | string | Color of products. |
| ↳↳↳ condition | string | Current status of products. <br><br><ul><li>For E-commerce and online-to-offline catalog products, the enum values are `NEW`, `REFURBISHED`, and `USED`. </li><li>For entertainment catalog products, the enum values are `NEW`  and `USED`.</li><li>For Auto-Inventory catalog products, the enum values are: <ul><li>`EXCELLENT`: excellent.</li><li>`GOOD`: good.</li><li>`FAIR`: fair.</li><li>`POOR`: poor.</li><li>`OTHER`: other.</li></ul></li></ul> |
| ↳↳↳ gender | string | The targeted gender for the product. The accuracy of this field is important to ensure products are delivered to the intended gender group.  Enum values: `MALE`, `FEMALE`, `UNISEX`. |
| ↳↳↳ material | string | Materials used in products, such as cotton, denim or leather. |
| ↳↳↳ pattern | string | Pattern or graphic printing on a product. |
| ↳↳↳ product_category | string | The category that the product belongs to. <br>Only the first three levels are required. |
| ↳↳↳ shipping | string | The type of shipping for the product. <br>Recommended format: `COUNTRY:STATE:SHIPPING_TYPE: PRICE`.<br>Use ";" to separate different regions. <br>Example: `US:CA:Ground:9.99 USD`.|
| ↳↳↳ shipping_weight | string | The shipping weight of the product. <br>The allowed units are `lb`, `oz`, `g`, `kg`. <br>Example: 1 oz, 1 kg. |
| ↳↳↳ size | string | Size of the item. |
| ↳↳↳ tax | string | Product tax. |
| ↳↳↳ offer_type|string|The type of offer.|
| ↳↳↳ term_length|string|The duration for which the offer applies.|
| ↳↳↳ offer_term_qualifier|string|The unit for term of the offer.|
| ↳↳↳ amount_price|string|The amount of the offer.|
| ↳↳↳ amount_percentage|string|The percentage for the APR in a finance offer.|
| ↳↳↳ amount_qualifier|string|The qualifier for the `amount_price` or `amount_percentage`.|
| ↳↳↳ downpayment|string|The downpayment at the time of purchase or lease.|
| ↳↳↳ downpayment_qualifier|string|Qualifier for the downpayment.|
| ↳↳↳ offer_disclaimer|string|The full text of the offer disclaimer to appear in the in-app pop-up.|
| ↳↳↳ offer_disclaimer_url|string|A URL that directs users to additional information related to the offer disclaimer, in the format of `http://xxx` or `https://xxx`.|
| ↳↳↳ emission_disclaimer|string|The text of the emission disclaimer to appear within the in-app pop-up.|
| ↳↳↳ emission_disclaimer_url|string|A URL that directs users to additional information related to the emission disclaimer, in the format of `http://xxx` or `https://xxx`.|
| ↳↳↳ emission_overlay_disclaimer|string|The short text of the disclaimer to appear on-screen in the disclaimer banner.|
| ↳↳↳ emission_image_link|string|The link to an image showing the emission level, in the format of `http://xxx` or `https://xxx`.|
| ↳↳↳ company_type|string|The company type for the short drama series.<br><br>Enum values:<ul><li>`COPYRIGHT_HOLDER`: copyright holder.</li><li>`DISTRIBUTOR`: distributor.</li></ul>|
| ↳↳↳ copyright_holder_name|string|The name of the copyright holder company.|
| ↳↳↳ app_id|string|The App ID of the app to promote in your ads.<br><br>To obtain a list of App IDs within your ad account, use [/app/list/](https://business-api.tiktok.com/portal/docs?id=1740859313270786).|
| ↳↳↳ minis_id|string|Mini program ID.|
| ↳↳↳ total_episodes|number|The number of episodes in the short drama series.|
| ↳↳↳ initial_paid_episodes |number|The episode number at which viewers are required to pay to continue watching the short drama series. |
| ↳↳↳ per_episode_duration|number|The average duration of each episode in minutes.|
| ↳↳↳ spoken_language|string|The language that actors in the original short drama series speak.<br><br>Enum values:<ul><li>`ar`: Arabic.</li><li>`de`: German.</li><li>`cs`: Czech.</li><li>`en`: English.</li><li>`es`: Spanish.</li><li>`fr`: French.</li><li>`he`: Hebrew.</li><li>`hi`: Hindi.</li><li>`id`: Indonesian.</li><li>`it`: Italian.</li><li>`ja`: Japanese.</li><li>`ko`: Korean.</li><li>`ms`: Malay.</li><li>`pl`: Polish.</li><li>`pt`: Portuguese.</li><li>`ro`: Romanian.</li><li>`ru`: Russian.</li><li>`ta`: Tamil.</li><li>`th`: Thai.</li><li>`tr`: Turkish.</li><li>`vi`: Vietnamese.</li><li>`zh`: Simplified Chinese.</li><li>`zh-hant`: Traditional Chinese.</li></ul>|
| ↳↳↳ subtitle_language |string|The language used for the subtitles in the short drama series.<br><br>Enum values:<ul><li>`ar`: Arabic.</li><li>`de`: German.</li><li>`cs`: Czech.</li><li>`en`: English.</li><li>`es`: Spanish.</li><li>`fr`: French.</li><li>`he`: Hebrew.</li><li>`hi`: Hindi.</li><li>`id`: Indonesian.</li><li>`it`: Italian.</li><li>`ja`: Japanese.</li><li>`ko`: Korean.</li><li>`ms`: Malay.</li><li>`pl`: Polish.</li><li>`pt`: Portuguese.</li><li>`ro`: Romanian.</li><li>`ru`: Russian.</li><li>`ta`: Tamil.</li><li>`th`: Thai.</li><li>`tr`: Turkish.</li><li>`vi`: Vietnamese.</li><li>`zh`: Simplified Chinese.</li><li>`zh-hant`: Traditional Chinese.</li></ul>|
| ↳↳↳ production_type |string|Production type, whether the short drama series is locally produced or translated for export.<br><br>Enum values:<ul><li>`LOCAL`: Local drama. The short drama features local actors, and the language for actors, narration, and subtitles is the local official language.</li><li>`TRANSLATION`: Translated drama. The short drama is packaged for international distribution with added subtitles, narration, and dubbing in another language.</li></ul>|
| ↳↳↳ target_audience |string|The target audience for the short drama series.<br><br>Enum values:<ul><li>`MALE`: Male. The short drama is primarily targeted at male audiences, often centered around a male protagonist or narrated from a male perspective. Themes typically include the accumulation of power, wealth, and prestige, the enhancement of abilities, and strategic planning.</li><li>`FEMALE`: Female. The short drama is primarily targeted at female audiences, often centered around a female protagonist or narrated from a female perspective. These dramas usually contain elements of romance and love.</li><li>`NEUTRAL`: Neutral. The short drama doesn't have a specific gender target audience.</li></ul>|
| ↳↳↳ characters |string[]|The list of characters in the short drama series.<br><br>For enum values, see [List of values for `characters`](https://business-api.tiktok.com/portal/docs?id=1740497429681153#item-link-List%20of%20values%20for%20characters).|
| ↳↳↳ genres |string[]|The genres of the short drama series as indicated by the main storyline or plot.<br><br>For enum values, see [List of values for mini series `genres`](https://business-api.tiktok.com/portal/docs?id=1740497429681153#item-link-List%20of%20values%20for%20mini%20series%20genres).|
| ↳↳↳ historical_context|string[]|The historical background or setting of the short drama series.<br><br>For enum values, see [List of values for `historical_context`](https://business-api.tiktok.com/portal/docs?id=1740497429681153#item-link-List%20of%20values%20for%20historical_context).|
| ↳↳↳ actors|string[]|The names of the actors in the short drama series.|
| ↳↳↳ rating|double|The user rating for the product or service or the listing.|
| ↳↳↳ availability_type|string|The method used to define the geographic areas where the product can be sold or the service can be provided.<br><br>This determines which availability field will take effect during ad delivery.<br><br>Enum values:<ul><li>`REGION`: Locations or regions. Set locations or regions where your product or service is available via `availability_region`.</li><li>`DMA`: DMAs. Set DMAs where your product or service is available via `availability_dma`.</li><li>`RADIUS`: Radius range. Set a custom radius around where your product or service is available via `availability_circle_radius` and `availability_circle_radius_unit`.</li><li>`POSTAL_CODE`: Postal code. Set specific postal codes or zip codes where your product or service is available via `availability_postal_codes`.</li></ul>|
| ↳↳↳ availability_region|string[][]|Returned when `availability_type` is `REGION`.<br><br>A list of regions where the product can be sold or the service can be provided.<br><br>This field is an array of string arrays, where each string array represents a specific location.<br><br>Example: `[&#91;"Arizona","Maricopa","Peoria"&#93;,&#91;"Alabama","Jefferson","Birmingham"&#93;]` is a valid array containing two location arrays, each with 3 strings under the 499-character limit.|
| ↳↳↳ availability_dma|string[]|Returned when `availability_type` is `DMA`.<br><br>A list of DMAs where the product can be sold or the service can be provided.<br><br>Example: `&#91;"501","803"&#93;` (New York and Los Angeles)|
| ↳↳↳ availability_circle_radius|string|Returned for an online-to-offline product or when `availability_type` is `RADIUS`.<br><br>The circle radius of the product or service defining a circular availability area.<br><br>Example: 20.|
| ↳↳↳ availability_circle_radius_unit|string|Returned for an online-to-offline product or when `availability_type` is `RADIUS`.<br><br>The unit for `availability_circle_radius`.<br><br>Enum values:<ul><li>`KM`: kilometer.</li><li>`MI`: mile.</li></ul>|
| ↳↳↳ availability_postal_codes|string[]|Returned when `availability_type` is `POSTAL_CODE`.<br><br>A list of postal codes representing the areas where the product can be sold or the service can be provided.<br><br>Example: `&#91;"10001", "90001"&#93;`.|
| ↳↳↳ custom_number_0|double|A custom numeric attribute for product management.|
| ↳↳↳ custom_number_1|double|A custom numeric attribute for product management.|
| ↳↳↳ custom_number_2|double|A custom numeric attribute for product management.|
| ↳↳↳ custom_number_3|double|A custom numeric attribute for product management.|
| ↳↳↳ custom_number_4|double|A custom numeric attribute for product management.|
| ↳↳ price | object | Price information. |
| ↳↳↳ price | float | The base price.<br>For destination catalog products, this field represents the average or lowest price for the destination. The `description` field may provide information on whether this is the average price or the lowest price.<br>For generic catalogs, this field represents the price of a single product or service unit.|
| ↳↳↳ currency | string | Unit of currency that must match the unit of currency of catalog's target country. If you do not provide it, we will use the default unit of currency of the catalog's target country. |
| ↳↳↳ sale_price | float | The discounted price. |
| ↳↳↳ sale_price_effective_date | string[] | Start and end date and time of sale. |
| ↳↳ landing_page | object | Landing page information. |
| ↳↳↳ landing_page_url | string | URL of the landing page where you can view or purchase the product. |
| ↳↳↳ url | string | URL of the landing page where you can view or purchase the product. |
| ↳↳↳ ios_url | string | Custom scheme for iOS apps as URL. For iOS, provide both iPhone & iPad app information if they are different from the regular iOS app. |
| ↳↳↳ ios_app_store_id | string |App Store ID for the iOS app.|
| ↳↳↳ ios_app_name | string | The iOS App name to display. |
| ↳↳↳ iphone_app_store_id | string |App Store ID for the iPhone app.  |
| ↳↳↳ iphone_app_name | string | The iphone App name to display. |
| ↳↳↳ ipad_app_store_id|string|App Store ID for the iPad app. |
| ↳↳↳ ipad_app_name | string | The iPad App name to display.|
| ↳↳↳ android_url | string | Custom scheme for Android apps as URL. |
| ↳↳↳ android_package | string | The Android package name. |
| ↳↳↳ android_app_name | string | The Android App name to display. |
| ↳↳ extra_info | object | Additional information. |
| ↳↳↳ custom_label_0 | string | Additional information about the products you want to include. |
| ↳↳↳ custom_label_1 | string | Additional information about the products you want to include. |
| ↳↳↳ custom_label_2 | string | Additional information about the products you want to include. |
| ↳↳↳ custom_label_3 | string | Additional information about the products you want to include. |
| ↳↳↳ custom_label_4 | string | Additional information about the products you want to include. |
| ↳↳↳ custom_label_5|string|Additional information about the products you want to include.|
| ↳↳↳ custom_label_6|string|Additional information about the products you want to include.|
| ↳↳↳ internal_label_0 | string |An internal label assigned to the hotel or flight. You can use internal labels to filter items while creating product sets. These labels are exclusively visible to you.<br><br>Length Limit: 100 characters.<br><br>If you are using custom labels (`custom_label_0` to `custom_label_4`) for filtering items during product set creation, consider switching to internal labels. Unlike custom labels, internal labels can be added or modified as needed without the need for submitting items for review each time, avoiding potential interruptions in ad delivery.|
| ↳↳↳ internal_label_1 | string | An internal label assigned to the hotel or flight. You can use internal labels to filter items while creating product sets. These labels are exclusively visible to you.<br><br>Length Limit: 100 characters.<br><br>If you are using custom labels (`custom_label_0` to `custom_label_4`) for filtering items during product set creation, consider switching to internal labels. Unlike custom labels, internal labels can be added or modified as needed without the need for submitting items for review each time, avoiding potential interruptions in ad delivery.|
| ↳↳ image_status|string| Storage status of the product image. Enum values:<ul><li>`PROCESSING`: The image is being stored.  </li><li>`SUCCESS`: The image is stored successfully. </li><li>`FAIL`: The image is not stored successfully. </li><li>`FILTERED`: The image was stored successfully but cannot be used because it does not meet the size requirements (must be equal to or larger than 500 px). For such images, the product audit status (`audit_status`) will stay at `processing` until you upload a new image.</li><li>`NOT_SUPPORTED`: The image format is not supported.</li><li>`NO_FOUND`: Cannot find the resource via the URL. Please ensure the URL is valid, and the file is publicly accessible. </li></ul>|
| ↳↳ additional_product_list | object[] | Returned when you have configured additional targeting regions for the short drama series.<br><br>A list of additional targeting region settings for the short drama series of the same `series_id`. |
| ↳↳↳ audit | object | Audit information. |
| ↳↳↳↳ audit_status | string | Ad audit status. It indicates if the ad promoting the product can be deployed.<br><br>Enum values: `approved`, `rejected`, `processing`.|
| ↳↳↳ rejected_info | object[] | Returned only when `audit_status` is `rejected`.<br><br>List of rejection reasons.  |
| ↳↳↳↳ reason | string | Rejection reason. |
| ↳↳↳↳ suggestion | string | Suggestions about how to revise to be approved. |
| ↳↳↳↳ affected_placement | string[] | List of placements affected by the rejection. |
| ↳↳↳↳ affected_country | string[] | List of countries or regions affected by the rejection. |
| ↳↳↳ active_status | string | Whether the product is activated.<br><br>Enum values: `ACTIVATED`, `DEACTIVATED`. <br><br>This field represents the advertiser-controlled online or offline status of the product. However, it does not necessarily imply that the product can be used to create ads. |
| ↳↳↳ image_status | string | Storage status of the product image. <br><br>Enum values:<ul><li>`PROCESSING`: The image is being stored.</li><li>`SUCCESS`: The image is stored successfully.</li><li>`FAIL`: The image is not stored successfully.</li><li>`FILTERED`: The image was stored successfully but cannot be used because it does not meet the size requirements (must be equal to or larger than 500 px). For such images, the product audit status (`audit_status`) will stay at `processing` until you upload a new image.</li><li>`NOT_SUPPORTED`: The image format is not supported.</li><li>`NO_FOUND`: Cannot find the resource via the URL. Please ensure the URL is valid, and the file is publicly accessible.</li></ul> |
| ↳↳↳ product_id | string | Product ID. |
| ↳↳↳ series_id | string | A unique self-defined ID for the short drama series. |
| ↳↳↳ series_name | string | The name of the short drama series. |
| ↳↳↳ target_config | object | Details of the additional targeting region for the short drama series. |
| ↳↳↳↳ region_code | string | The region code of the additional targeting region for the short drama series.<br><br>Example: `US`. |
| ↳↳↳↳ currency | string | Currency for the additional targeting region for the short drama series.<br><br>For supported currencies, see the <b>Code</b> column in [Budget verification ratio and precision of each currency](https://business-api.tiktok.com/portal/docs?id=1737585839634433#item-link-Budget%20verification%20ratio%20and%20precision%20of%20each%20currency).<br><br>Example: `USD`. |
| ↳↳↳ image_url | string | The URL for the short drama series poster image. |
| ↳↳↳ recharge | object[] | Information about the recharge for the short drama series. |
| ↳↳↳↳ type | string | Recharge type for the short drama series.<br><br>Enum values:<ul><li>`BY_TIERS`: Recharge by tiers.</li><li>`SUBSCRIPTION`: Recharge by subscription fee for a time period.</li><li>`BY_EPISODES`: Recharge by episodes.</li></ul> |
| ↳↳↳↳ purchase_unit | string[] | Units for the recharge.<br><br>When `recharge_type` is `BY_TIERS`, the enum values are:<ul><li>`TIER 1`: tier 1.</li><li>`TIER_2`: tier 2.</li><li>`TIER 3`: tier 3.</li><li>`TIER 4`: tier 4.</li><li>`TIER 5`: tier 5.</li></ul>When `recharge_type` is `SUBSCRIPTION`, the enum values are:<ul><li>`WEEKLY`: weekly.</li><li>`MONTHLY`: monthly.</li><li>`QUARTERLY`: quarterly.</li><li>`YEARLY`: yearly.</li></ul>When `recharge_type` is `BY_EPISODES`, specify one or more numeric strings that represent numbers no more than the total episode count. |
| ↳↳↳↳ cost | float[] | The prices for the tiers, subscription periods, or episodes. |
| ↳↳↳ profession | object | Product other information. |
| ↳↳↳↳ company_type | string | The company type for the short drama series.<br><br>Enum values:<ul><li>`COPYRIGHT_HOLDER`: copyright holder.</li><li>`DISTRIBUTOR`: distributor.</li></ul> |
| ↳↳↳↳ copyright_holder_name | string | The name of the copyright holder company. |
| ↳↳↳↳ app_id | string | The App ID of the app to promote in your ads.<br><br>To obtain a list of App IDs within your ad account, use [/app/list/](https://business-api.tiktok.com/portal/docs?id=1740859313270786). |
| ↳↳↳↳ minis_id | string | Mini program ID. |
| ↳↳↳↳ total_episodes | number | The number of episodes in the short drama series. |
| ↳↳↳↳ initial_paid_episodes | number | The episode number at which viewers are required to pay to continue watching the short drama series. |
| ↳↳↳↳ per_episode_duration | number | The average duration of each episode in minutes. |
| ↳↳↳↳ spoken_language | string | The language that actors in the original short drama series speak.<br><br>Enum values:<ul><li>`ar`: Arabic.</li><li>`de`: German.</li><li>`cs`: Czech.</li><li>`en`: English.</li><li>`es`: Spanish.</li><li>`fr`: French.</li><li>`he`: Hebrew.</li><li>`hi`: Hindi.</li><li>`id`: Indonesian.</li><li>`it`: Italian.</li><li>`ja`: Japanese.</li><li>`ko`: Korean.</li><li>`ms`: Malay.</li><li>`pl`: Polish.</li><li>`pt`: Portuguese.</li><li>`ro`: Romanian.</li><li>`ru`: Russian.</li><li>`ta`: Tamil.</li><li>`th`: Thai.</li><li>`tr`: Turkish.</li><li>`vi`: Vietnamese.</li><li>`zh`: Simplified Chinese.</li><li>`zh-hant`: Traditional Chinese.</li></ul> |
| ↳↳↳↳ subtitle_language | string | The language used for the subtitles in the short drama series.<br><br>Enum values:<ul><li>`ar`: Arabic.</li><li>`de`: German.</li><li>`cs`: Czech.</li><li>`en`: English.</li><li>`es`: Spanish.</li><li>`fr`: French.</li><li>`he`: Hebrew.</li><li>`hi`: Hindi.</li><li>`id`: Indonesian.</li><li>`it`: Italian.</li><li>`ja`: Japanese.</li><li>`ko`: Korean.</li><li>`ms`: Malay.</li><li>`pl`: Polish.</li><li>`pt`: Portuguese.</li><li>`ro`: Romanian.</li><li>`ru`: Russian.</li><li>`ta`: Tamil.</li><li>`th`: Thai.</li><li>`tr`: Turkish.</li><li>`vi`: Vietnamese.</li><li>`zh`: Simplified Chinese.</li><li>`zh-hant`: Traditional Chinese.</li></ul> |
| ↳↳↳↳ production_type | string | Production type, whether the short drama series is locally produced or translated for export.<br><br>Enum values:<ul><li>`LOCAL`: Local drama. The short drama features local actors, and the language for actors, narration, and subtitles is the local official language.</li><li>`TRANSLATION`: Translated drama. The short drama is packaged for international distribution with added subtitles, narration, and dubbing in another language.</li></ul> |
| ↳↳↳↳ target_audience | string | The target audience for the short drama series.<br><br>Enum values:<ul><li>`MALE`: Male. The short drama is primarily targeted at male audiences, often centered around a male protagonist or narrated from a male perspective. Themes typically include the accumulation of power, wealth, and prestige, the enhancement of abilities, and strategic planning.</li><li>`FEMALE`: Female. The short drama is primarily targeted at female audiences, often centered around a female protagonist or narrated from a female perspective. These dramas usually contain elements of romance and love.</li><li>`NEUTRAL`: Neutral. The short drama doesn't have a specific gender target audience.</li></ul> |
| ↳↳↳↳ characters | string[] | The list of characters in the short drama series.<br><br>For enum values, see [List of values for `characters`](https://business-api.tiktok.com/portal/docs?id=1740497429681153#item-link-List%20of%20values%20for%20characters). |
| ↳↳↳↳ genres | string[] | The genres of the short drama series as indicated by the main storyline or plot.<br><br>For enum values, see [List of values for mini series `genres`](https://business-api.tiktok.com/portal/docs?id=1740497429681153#item-link-List%20of%20values%20for%20mini%20series%20genres). |
| ↳↳↳↳ historical_context | string[] | The historical background or setting of the short drama series.<br><br>For enum values, see [List of values for `historical_context`](https://business-api.tiktok.com/portal/docs?id=1740497429681153#item-link-List%20of%20values%20for%20historical_context). |
| ↳↳↳↳ actors | string[] | The names of the actors in the short drama series. |
| ↳↳↳ video_url | string | Ad video link. |
| ↳↳↳ additional_image_urls | string[] | Additional image URLs for the product.<br><br><p><span style="color:darkred"><b>Note</b></span>: The value of this field will be null.</p> |
| ↳↳↳ global_trade_item_number | string | The Global Trade Item Number (GTIN) for the product.<br><br><p><span style="color:darkred"><b>Note</b></span>: The value of this field will be null.</p> |
| ↳↳↳ manufacturer_part_number | string | The Manufacturer Part Number (MPN) for the product.<br><br><p><span style="color:darkred"><b>Note</b></span>: The value of this field will be null.</p> |
| ↳↳↳ landing_page | object | Landing page information.<br><br><p><span style="color:darkred"><b>Note</b></span>: The value of this field will be null.</p> |
| ↳↳↳↳ landing_page_url | string | URL of the landing page where you can view or purchase the product. |
| ↳↳↳ extra_info | object | Additional information.<br><br><p><span style="color:darkred"><b>Note</b></span>: The value of this field will be null.</p> |
| ↳↳↳↳ custom_label_0 | string | Additional information about the products you want to include. |
| ↳↳↳↳ custom_label_1 | string | Additional information about the products you want to include. |
| ↳↳↳↳ custom_label_2 | string | Additional information about the products you want to include. |
| ↳↳↳↳ custom_label_3 | string | Additional information about the products you want to include. |
| ↳↳↳↳ custom_label_4 | string | Additional information about the products you want to include. |
| ↳ page_info | object | Pagination information. |
| ↳↳ page | number | Current page number. |
| ↳↳ page_size | number | Page size. |
| ↳↳ total_number | number | Total number of results. |
| ↳↳ total_page | number | Total pages of results. |

##### List of values for `genres`
|Value |Description |
|---|---|
|`ACTION`|action|
|`ADULT_ANIMATION`|adult animation|
|`ADVENTURE`|adventure|
|`ANIMATION`|animation|
|`BIOGRAPHICAL`|biographical|
|`BLACK_COMEDY`|black comedy|
|`BUDDY`|buddy|
|`COMEDY`|comedy|
|`COMIC`|comic|
|`COOKING_SHOW`|cooking show|
|`CRIME`|crime|
|`DISASTER`|disaster|
|`DOCUMENTARY`|documentary|
|`DRAMA`|drama|
|`FAMILY`|family|
|`FANTASY`|fantasy|
|`GAME_SHOW`|game show|
|`HISTORY`|history|
|`HORROR`|horror|
|`LGBT`|LGBT|
|`MARTIAL_ARTS`|martial arts|
|`MILITARY`|military|
|`MUSIC`|music|
|`POLICE`|police|
|`POLICE_PROCEDURAL`|police procedural|
|`POLITIC`|politic|
|`REALITY_TV`|reality TV|
|`ROAD`|road|
|`ROMANCE`|romance|
|`SATIRE`|satire|
|`SCIENCE_FICTION`|science fiction|
|`SITCOM`|sitcom|
|`SOAP_OPERA`|soap opera|
|`SPORT`|sport|
|`SPY`|spy|
|`STEAMPUNK`|steampunk|
|`SUPERHERO`|superhero|
|`TALK_SHOW`|talk show|
|`TEEN`|teen|
|`THRILLER`|thriller|
|`TIME_TRAVEL`|time travel|
|`VAMPIRE`|vampire|
|`WAR`|war|
|`WESTERN`|western|
|`ZOMBIE`|zombie|



#### Example
```xcodeblock
(code curl http)
HTTPS/1.1 200 OK
{
"message": "OK",
"code": 0,
"data": {
    "page_info": {
        "total_number": 2,
        "page": 1,
        "page_size": 100,
        "total_page": 1
    },
    "list": [
        {
            "audit": {
                    "audit_status": "rejected",
                    "rejected_info": [
                        {
                            "reason": "The product/service promoted on the ad/landing page belongs to a prohibited industry in your ad targeting location(s) as taking our own business evaluation, users' experience and value of advertisement impact, etc into consideration.",
                            "suggestion": "Please change the promoted product/service in your ad or change the targeting location in your ad group settings according to our policy. https://ads.tiktok.com/help/article?aid=6685586866860720134 Learn More.",
                            "affected_placement": [
                                "PLACEMENT_TIKTOK",
                                "PLACEMENT_PANGLE"
                            ],
                            "affected_country": [
                                "US"
                            ]
                        }
                    ]
                },
            "sku_id": "tiktok_item_12423",
            "product_id": "6872175464299923205",
            "title": "qgs test product",
            "manufacturer_part_number": "",
            "profession": {
                "product_category": "Apparel & Accessories > Clothing > Shirts",
                "color": "red",
                "pattern": "stripes1",
                "material": "cotton",
                "tax": "xxx",
                "shipping_weight": "1 kg",
                "shipping": "US:CA:Ground:9.99 USD",
                "condition": "USED",
                "size": "L"
            },
            "brand": "xiaoru",
            "landing_page": {
                "ios_app_store_id": "https://ios_app_store.com",
                "iphone_app_name": "iphone_app_name",
                "android_package": "a.b.com",
                "iphone_app_store_id": "https://iphone_app_store.com",
                "ios_app_name": "ios_app_name",
                "ipad_app_name": "ipad_app_name",
                "landing_page_url": "https://ads.tiktok.com",
                "android_app_name": "android_app_name",
                "android_url": "https://www.android.com",
                "ios_url": "https://www.ios.com",
                "ipad_app_store_id": "https://ipad_app_store.com"
            },
            "image_url": "http://p1.ipstatp.com/origin/ad-site-i18n/201912265d0d606810c7e88e46248eef",
            "additional_image_urls": [
                "http://p1.ipstatp.com/origin/ad-site-i18n/201912265d0d606810c7e88e46248eef",
                "http://p1.ipstatp.com/origin/ad-site-i18n/201912265d0d606810c7e88e46248eef"
            ],
            "extra_info": {
                "custom_label_1": "b",
                "custom_label_0": "a",
                "custom_label_4": "e"
            },
            "global_trade_item_number": "",
            "video_url": "ad-site-i18n/201911045d0db9f0eb2f8cc14bb4ae1a",
            "google_product_category": "2.22",
            "price": {
                "sale_price_effective_date": [
                    "2017-12-11 04:36",
                    "2017-12-31 12:06"
                ],
                "currency": "USD",
                "price": 100.0,
                "sale_price": 30.0
            },
            "availability": "AVAILABLE_FOR_ORDER",
            "item_group_id": "1.11",
            "description": "qgs test product description"
        },
        {
            "audit": {
                    "audit_status": "processing"
                },
            "sku_id": "tiktok_item_12424",
            "product_id": "6872175464299939589",
            "title": "qgs test product",
            "manufacturer_part_number": "4.44",
            "product_detail": {
                "color": "red",
                "material": "cotton",
                "tax": "xxx",
                "shipping": "US:CA:Ground:9.99 USD",
                "condition": "USED",
                "size": "L"
            },
            "brand": "xiaoru",
            "landing_page": {
                "ios_app_store_id": "https://ios_app_store.com",
                "iphone_app_name": "iphone_app_name",
                "android_package": "a.b.com",
                "iphone_app_store_id": "https://iphone_app_store.com",
                "ios_app_name": "ios_app_name",
                "ipad_app_name": "ipad_app_name",
                "landing_page_url": "https://ads.tiktok.com",
                "android_app_name": "android_app_name",
                "android_url": "https://www.android.com",
                "ios_url": "https://www.ios.com",
                "ipad_app_store_id": "https://ipad_app_store.com"
            },
            "image_url": "http://p1.ipstatp.com/origin/ad-site-i18n/201912265d0d606810c7e88e46248eef",
            "additional_image_urls": [],
            "extra_info": {},
            "global_trade_item_number": "3.33",
            "video_url": "ad-site-i18n/201911045d0db9f0eb2f8cc14bb4ae1a",
            "google_product_category": "2.22",
            "price_info": {
                "sale_price_effective_date": [],
                "currency": "USD",
                "price": 100.0,
                "sale_price": 0.0
            },
            "availability": "AVAILABLE_FOR_ORDER",
            "item_group_id": "1.11",
            "description": "qgs test product description"
        }
    ]
},
"request_id": "2020091405213901023125321411850"
}
(/code)
```

