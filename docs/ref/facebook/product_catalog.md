# Product Catalog

> Source: Meta Marketing API reference (45 pages). Fetched 2026-11-18.


---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog.md -->

## Product Catalog

Represents a catalog for your business you can use to deliver ads with [dynamic ads](https://developers.facebook.com/docs/marketing-api/dynamic-ad).

**Example** — View all product catalogs associated to your business

```
curl -G \
  -d "access_token=<ACCESS_TOKEN>" \
  "https://graph.facebook.com/<API_VERSION>/<BUSINESS_ID>/owned_product_catalogs"
```

You can associate pixels and apps with a product catalog and then display products in ads based on signals from pixels or apps.

**Example** — Make an `HTTP POST`

```
curl \
  -F 'external_event_sources=[<PIXEL_ID>,<APP_ID>]' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/<VERSION>/<PRODUCT_CATALOG_ID>/external_event_sources
```

### Permissions

You need the appropriate [Marketing API Access Level](https://developers.facebook.com/documentation/ads-commerce/marketing-api/get-started/authorization#limits) and must accept the [Terms of Service](https://business.facebook.com/legal/product_catalog_terms/) by creating your first catalog through [Business Manager](https://business.facebook.com).

### Reading

Product catalogs contain a list of items like products, hotels or flights, and the information needed to display them in dynamic ads

##### Parameters

| Parameter | Description |
| --- | --- |
| `segment_use_cases`<br><br>*array<enum {AFFILIATE_SELLER_STOREFRONT, AFFILIATE_TAGGED_ONLY_DEPRECATED, COLLAB_ADS, COLLAB_ADS_FOR_MARKETPLACE_PARTNER, COLLAB_ADS_SEGMENT_WITHOUT_SEGMENT_SYNCING, DIGITAL_CIRCULARS, FB_LIVE_SHOPPING, IG_SHOPPING, IG_SHOPPING_SUGGESTED_PRODUCTS, MARKETPLACE_SHOPS, TEST}>* | segment_use_cases<br> |

##### Fields

| Field | Description |
| --- | --- |
| `id`<br><br>*numeric string* | ID of a catalog<br><br><br>**[default]**<br> |
| `business`<br><br>*[Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business)* | Business that owns a catalog<br> |
| `checkout_urls`<br><br>*list<Object>* | The checkout URLs configured on the catalog, one per sell-to country. Each entry has a `country` (two-letter country code) and a `url`, matching the `checkout_country` and `checkout_url` parameters on `POST /{product_catalog_id}`. The field is omitted when the catalog has no checkout URL configured.<br> |
| `da_display_settings`<br><br>*[ProductCatalogImageSettings](https://developers.facebook.com/docs/marketing-api/reference/product-catalog-image-settings)* | Image display  settings such as background cropping and padding of items in the  catalog for different Dynamic Ad formats<br> |
| `default_image_url`<br><br>*string* | The URL for the default image, which is used for products without images, or when the product image is temporarily unavailable. If a product image matches the default image,  this should be treated as if the image was not loaded<br> |
| `fallback_image_url`<br><br>*list<string>* | The URL for the fallback image. This is used as   the image for auto-generated dynamic items<br> |
| `feed_count`<br><br>*int32* | The total number of feeds used by a catalog<br> |
| `is_catalog_segment`<br><br>*bool* | Verify that you will create ads based on a catalog or catalog segment before you try to create Dynamic Ads. Call this field and determine value otherwise you may get and error when you try to create Dynamic Ads from catalog segments.<br> |
| `is_local_catalog`<br><br>*bool* | is_local_catalog<br> |
| `name`<br><br>*string* | The name of a catalog given by the creator<br><br><br>**[default]**<br> |
| `product_count`<br><br>*int32* | The total number of products in a catalog<br> |
| `vertical`<br><br>*enum* | The type of catalog (for example: hotels, commerce, etc)<br> |

##### Edges

| Edge | Description |
| --- | --- |
| [`agencies`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/agencies)<br><br>*Edge<Business>* | Agencies that have access to a catalog<br> |
| [`assigned_users`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/assigned_users)<br><br>*Edge<AssignedUser>* | Users assigned to this catalog<br> |
| [`automotive_models`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/automotive_models)<br><br>*Edge<AutomotiveModel>* | Automotive models that a catalog contains<br> |
| [`categories`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/categories)<br><br>*Edge<ProductCatalogCategory>* | Categories within the catalog for a given categorization criteria<br> |
| [`check_batch_request_status`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/check_batch_request_status)<br><br>*Edge<CheckBatchRequestStatus>* | Checks the status of a batch request<br> |
| [`collaborative_ads_share_settings`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/collaborative_ads_share_settings)<br><br>*Edge<CollaborativeAdsShareSettings>* | All the collaborative ads share settings for a catalog segment<br> |
| [`data_sources`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/data_sources)<br><br>*Edge<ProductCatalogDataSource>* | data_sources updating catalog including feeds, session containers etc<br> |
| [`destinations`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/destinations)<br><br>*Edge<Destination>* | Destinations that a catalog contains<br> |
| [`diagnostics`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/diagnostics)<br><br>*Edge<ProductCatalogDiagnosticGroup>* | diagnostics<br> |
| [`event_stats`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/event_stats)<br><br>*Edge<ProductEventStat>* | Aggregated statistics on the matched and unmatchd events received from the pixels and apps associated to the catalog, broken down by DA event, source and device_type<br> |
| [`external_event_sources`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/external_event_sources)<br><br>*Edge<ExternalEventSource>* | External event sources (including pixels) for catalog events like ViewContent<br> |
| [`flights`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/flights)<br><br>*Edge<Flight>* | Flights that a catalog contains<br> |
| [`home_listings`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/home_listings)<br><br>*Edge<HomeListing>* | Home listings that a catalog contains<br> |
| [`hotel_rooms_batch`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/hotel_rooms_batch)<br><br>*Edge<ProductCatalogHotelRoomsBatch>* | Batch operations with hotel rooms<br> |
| [`hotels`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/hotels)<br><br>*Edge<Hotel>* | Hotels that a catalog contains<br> |
| [`pricing_variables_batch`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/pricing_variables_batch)<br><br>*Edge<ProductCatalogPricingVariablesBatch>* | Batch operations with hotel room prices<br> |
| [`product_groups`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/product_groups)<br><br>*Edge<ProductGroup>* | Product groups that a catalog contains<br> |
| [`product_sets`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/product_sets)<br><br>*Edge<ProductSet>* | Product sets belonging to a catalog<br> |
| [`product_sets_batch`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/product_sets_batch)<br><br>*Edge<ProductCatalogProductSetsBatch>* | Batch operations with product sets<br> |
| [`products`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/products)<br><br>*Edge<ProductItem>* | Products that a catalog contains<br> |
| [`vehicle_offers`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/vehicle_offers)<br><br>*Edge<VehicleOffer>* | Vehicle offers that a catalog contains<br> |
| [`vehicles`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/vehicles)<br><br>*Edge<Vehicle>* | Vehicles that a catalog contains<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 190 | Invalid OAuth 2.0 Access Token |
| 200 | Permissions error |
| 2500 | Error parsing graph query |

### Creating

#### Examples {#create_example}

```
curl \
  -F 'name=Catalog' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/<API_VERSION>/<BUSINESS_ID>/product_catalogs
```

#### /{product_catalog_id}/assigned_users
You can make a POST request to *assigned_users* edge from the following paths:

- [/{product_catalog_id}/assigned_users](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/assigned_users)

When posting to this edge, a [ProductCatalog](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `tasks`<br><br>*array<enum {MANAGE, ADVERTISE, MANAGE_AR, AA_ANALYZE}>* | Catalog permission tasks to assign this user<br><br>**[required]**<br> |
| `user`<br><br>*UID* | Business user id or system user id<br><br>**[required]**<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
success: bool,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 200 | Permissions error |
| 415 | Two factor authentication required. User have to enter a code from SMS or TOTP code generator to pass 2fac. This could happen when accessing a 2fac-protected asset like a page that is owned by a 2fac-protected business manager. |

#### /{product_catalog_id}/vehicles
You can make a POST request to *vehicles* edge from the following paths:

- [/{product_catalog_id}/vehicles](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/vehicles)

When posting to this edge, a [ProductCatalog](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `address`<br><br>*JSON object* | address<br><br>**[required]**<br><br><br>`city` *string*<br><br>**Default value: **`""`<br>city<br><br><br>`city_id` *string*<br>city_id<br><br><br>`country` *string*<br><br>**Default value: **`""`<br>country<br><br><br>`latitude` *float*<br>latitude<br><br><br>`longitude` *float*<br>longitude<br><br><br>`neighborhoods` *array<string>*<br>neighborhoods<br><br><br>`postal_code` *string*<br><br>**Default value: **`""`<br>postal_code<br><br><br>`region` *string*<br><br>**Default value: **`""`<br>region<br><br><br>`street_address` *string*<br><br>**Default value: **`""`<br>street_address<br> |
| `applinks`<br><br>*Object* | applinks<br><br><br>`web` **<br><br>`android` **<br><br>`ios` **<br><br>`ipad` **<br><br>`iphone` **<br><br>`windows_phone` ** |
| `availability`<br><br>*enum {AVAILABLE, NOT_AVAILABLE, PENDING, UNKNOWN}* | availability<br> |
| `body_style`<br><br>*enum {CONVERTIBLE, COUPE, CROSSOVER, ESTATE, GRANDTOURER, HATCHBACK, MINIBUS, MINIVAN, MPV, PICKUP, ROADSTER, SALOON, SEDAN, SMALL_CAR, SPORTSCAR, SUPERCAR, SUPERMINI, SUV, TRUCK, VAN, WAGON, OTHER, NONE}* | body_style<br><br>**[required]**<br> |
| `condition`<br><br>*enum {EXCELLENT, VERY_GOOD, GOOD, FAIR, POOR, OTHER, NONE}* | condition<br> |
| `currency`<br><br>*ISO 4217 Currency Code* | currency<br><br>**[required]**<br> |
| `date_first_on_lot`<br><br>*string* | date_first_on_lot<br> |
| `dealer_id`<br><br>*string* | dealer_id<br> |
| `dealer_name`<br><br>*string* | dealer_name<br> |
| `dealer_phone`<br><br>*string* | dealer_phone<br> |
| `description`<br><br>*string* | description<br><br>**[required]**<br> |
| `drivetrain`<br><br>*enum {TWO_WD, FOUR_WD, AWD, FWD, RWD, OTHER, NONE}* | drivetrain<br> |
| `exterior_color`<br><br>*string* | exterior_color<br><br>**[required]**<br> |
| `fb_page_id`<br><br>*string* | fb_page_id<br> |
| `fuel_type`<br><br>*enum {DIESEL, ELECTRIC, GASOLINE, FLEX, HYBRID, OTHER, PETROL, PLUGIN_HYBRID, NONE}* | fuel_type<br> |
| `images`<br><br>*list<Object>* | images<br><br>**[required]**<br><br><br>`image_url` *URL*<br>**[required]**<br><br><br>`tags` *list<string>* |
| `interior_color`<br><br>*string* | interior_color<br> |
| `make`<br><br>*string* | make<br><br>**[required]**<br> |
| `mileage`<br><br>*JSON object* | mileage<br><br>**[required]**<br><br><br>`unit` *enum {KILOMETERS, MILES}*<br><br>**Default value: **`"MILES"`<br>unit<br><br><br>`value` *int64*<br><br>**Default value: **`0`<br>value<br> |
| `model`<br><br>*string* | model<br><br>**[required]**<br> |
| `price`<br><br>*int64* | price<br><br>**[required]**<br> |
| `state_of_vehicle`<br><br>*enum {NEW, USED, CPO}* | state_of_vehicle<br><br>**[required]**<br> |
| `title`<br><br>*string* | title<br><br>**[required]**<br> |
| `transmission`<br><br>*enum {AUTOMATIC, MANUAL, OTHER, NONE}* | transmission<br> |
| `trim`<br><br>*string* | trim<br> |
| `url`<br><br>*URI* | url<br><br>**[required]**<br> |
| `vehicle_id`<br><br>*string* | vehicle_id<br><br>**[required]**<br> |
| `vehicle_type`<br><br>*enum {BOAT, CAR_TRUCK, COMMERCIAL, MOTORCYCLE, OTHER, POWERSPORT, RV_CAMPER, TRAILER}* | vehicle_type<br> |
| `vin`<br><br>*string* | vin<br><br>**[required]**<br> |
| `year`<br><br>*int64* | year<br><br>**[required]**<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *id* in the return type.

```
Struct  {
id: numeric string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 10800 | Duplicate retailer_id when attempting to create a store collection |
| 100 | Invalid parameter |
| 200 | Permissions error |

#### /{business_id}/owned_product_catalogs
You can make a POST request to *owned_product_catalogs* edge from the following paths:

- [/{business_id}/owned_product_catalogs](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_product_catalogs)

When posting to this edge, a [ProductCatalog](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `additional_vertical_option`<br><br>*enum {LOCAL_DA_CATALOG, LOCAL_PRODUCTS}* | Additional catalog configurations that does not introduce either new verticals or subverticals<br> |
| `business_metadata`<br><br>*JSON object* | business_metadata<br><br><br>`page_id` *numeric string*<br>page_id<br><br>**[required]**<br><br><br>`external_business_id` *string*<br>external_business_id<br> |
| `catalog_segment_filter`<br><br>*A JSON-encoded rule* | Provide filter for catalog to create a catalog segment.<br> |
| `da_display_settings`<br><br>*Object* | Dynamic Ads display settings.<br><br><br>`carousel_ad` *Object*<br>**[required]**<br><br><br>`transformation_type` *enum{background_cropping_and_padding, background_padding, none}*<br>**[required]**<br><br><br>`single_ad` *Object*<br>**[required]**<br><br><br>`transformation_type` *enum{background_cropping_and_padding, background_padding, none}*<br>**[required]**<br> |
| `destination_catalog_settings`<br><br>*JSON object* | Destination catalog settings.<br><br><br>`generate_items_from_pages` *boolean*<br><br>**Default value: **`false` |
| `flight_catalog_settings`<br><br>*JSON object* | Flight catalog settings.<br><br><br>`generate_items_from_events` *boolean*<br><br>**Default value: **`false` |
| `name`<br><br>*UTF-8 encoded string* | Name of the catalog.<br><br>**[required]**<br> |
| `parent_catalog_id`<br><br>*numeric string or integer* | Parent catalog ID.<br> |
| `partner_integration`<br><br>*JSON object* | Partner integration settings<br><br><br>`external_access_token` *string*<br>External access token<br><br><br>`external_merchant_id` *string*<br>External merchant identifier<br> |
| `store_catalog_settings`<br><br>*JSON object* | Store catalog settings.<br><br><br>`page_id` *numeric string*<br>page_id<br><br>**[required]**<br> |
| `vertical`<br><br>*enum {adoptable_pets, apps_and_software, articles_and_publications, commerce, destinations, flights, generic, home_listings, hotels, local_service_businesses, media_titles, offer_items, services, offline_commerce, transactable_items, vehicles}* | **Default value: **`commerce`<br>The catalog's industry or vertical, such as `commerce`.<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *id* in the return type.

```
Struct  {
id: numeric string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |
| 804 | Specified object already exists |
| 102 | Session key invalid or no longer valid |
| 200 | Permissions error |
| 2310019 | The business of this catalog is not onboarded to Collaborative Ads |

### Updating

#### /{product_catalog_id}
You can update a [ProductCatalog](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog) by making a POST request to [/{product_catalog_id}](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog).

##### Parameters

| Parameter | Description |
| --- | --- |
| `additional_vertical_option`<br><br>*enum {LOCAL_DA_CATALOG, LOCAL_PRODUCTS}* | Additional catalog configurations that does not introduce either new verticals or subverticals<br> |
| `checkout_country`<br><br>*enum* | The two-letter country code the checkout URL applies to. Required whenever `checkout_url` is set.<br> |
| `checkout_url`<br><br>*URI* | The checkout URL buyers are sent to for the given sell-to country. See [Set Up a Checkout URL](https://developers.facebook.com/documentation/ads-commerce/commerce-platform/setup-checkout-url) for the parameters your endpoint receives. Must be set together with `checkout_country`. Each write sets the URL for one country only; read every configured country back from the `checkout_urls` field on `GET /{product_catalog_id}`.<br> |
| `da_display_settings`<br><br>*Object* | The display settings object when used<br>will determine which image transformations (like cropping or padding)<br>will be applied for the item in the specified dynamic ad format.<br><br><br>`carousel_ad` *Object*<br>**[required]**<br><br><br>`transformation_type` *enum{background_cropping_and_padding, background_padding, none}*<br>**[required]**<br><br><br>`single_ad` *Object*<br>**[required]**<br><br><br>`transformation_type` *enum{background_cropping_and_padding, background_padding, none}*<br>**[required]**<br> |
| `default_image_url`<br><br>*URI* | The URL for the default image, which is used for<br>products without images or for the cases when the product image is<br>temproarily unavailable. If a product image matches the default image,<br>this should be treated as if the image was not loaded.<br> |
| `destination_catalog_settings`<br><br>*JSON object* | Catalog setting for destination<br>catalogs.<br><br><br>`generate_items_from_pages` *boolean*<br><br>**Default value: **`false` |
| `fallback_image_url`<br><br>*URI* | The URL for the fallback image. This is used as<br>the image for the auto-generated dynamic items.<br> |
| `flight_catalog_settings`<br><br>*JSON object* | Catalog setting for flight catalogs.<br><br><br>`generate_items_from_events` *boolean*<br><br>**Default value: **`false` |
| `name`<br><br>*string* | Name of the Product Catalog<br> |
| `partner_integration`<br><br>*JSON object* | Partner integration settings<br><br><br>`external_access_token` *string*<br>External access token<br><br><br>`external_merchant_id` *string*<br>External merchant identifier<br> |
| `store_catalog_settings`<br><br>*JSON object* | Catalog settings for store catalogs; the page with the location structure for all the stores within this settings will be used to validate the store number for feed uploading<br><br><br>`page_id` *numeric string*<br>page_id<br><br>**[required]**<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
success: bool,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 100 | Invalid parameter |

#### /{product_catalog_id}/marketplace_partner_signals
You can update a [ProductCatalog](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog) by making a POST request to [/{product_catalog_id}/marketplace_partner_signals](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/marketplace_partner_signals).

##### Parameters

| Parameter | Description |
| --- | --- |
| `conversion_type`<br><br>*enum {ATTRIBUTED, IN_SESSION}* | conversion_type<br><br><br>Identifier on whether the specified event happened within the original session of the user landing on the partner's page (IN_SESSION) or within the attribution window after the initial session (ATTRIBUTED)<br> |
| `event_id`<br><br>*string* | event_id<br><br><br>Unique identifier for conversion events. If there are multiple conversion events tied to a single `mp_clid`, this field will be used to differentiate between those events<br> |
| `event_name`<br><br>*enum {PURCHASE, ADD_TO_CART, VIEW_ITEM, OFFER_SUBMITTED, PURCHASE_VIA_OFFER, TEST}* | event_name<br><br><br>`TEST` events can be used to send test data to confirm API functionality that Marketplace will ignore<br><br>**[required]**<br> |
| `event_source_url`<br><br>*string* | event_source_url<br> |
| `event_time`<br><br>*datetime/timestamp* | event_time<br><br>**[required]**<br> |
| `offer_data`<br><br>*JSON object* | offer_data<br><br><br>`original_price` *float*<br>original_price<br><br>**[required]**<br><br><br>`offer_price` *float*<br>offer_price<br><br>**[required]**<br><br><br>`currency` *string*<br>currency<br><br>**[required]**<br> |
| `order_data`<br><br>*JSON object* | order_data<br><br><br>`order_details` *array<JSON object>*<br><br>**Default value: **`[]`<br>order_details<br><br><br>`item_price` *float*<br>item_price<br><br>**[required]**<br><br><br>`item_quantity` *int64*<br>item_quantity<br><br>**[required]**<br><br><br>`item_id` *string*<br>item_id<br><br>**[required]**<br><br><br>`currency` *string*<br>currency<br><br>**[required]**<br><br><br>`order_total` *float*<br>order_total<br><br>**[required]**<br> |
| `user_data`<br><br>*JSON object* | user_data<br><br>**[required]**<br><br><br>`mp_clid` *string*<br>mp_clid<br><br>**[required]**<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
success: bool,
validation_status:  List  [ Struct  {
errors:  List  [ Struct  {
message: string,
}],
warnings:  List  [ Struct  {
message: string,
}],
}],
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Deleting

#### Examples {#delete_example}

You can delete a product catalog with the following API. You cannot remove a product catalog from a Business Manager, or transfer a catalog from one Business Manager to another.

```
curl -X DELETE \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/<API_VERSION>/<PRODUCT_CATALOG_ID>
```

To do this in a batch call, specify the parameter in the query string for the URL:

```
curl \
  -F 'batch=[{
  "method":"DELETE",
  "relative_url":"<PRODUCT_CATALOG_ID>"
}]' \
 -F 'access_token=<TOKEN>' \
  https://graph.facebook.com
```

To remove the association between the catalog and a pixel or app, make an `HTTP DELETE`:

```
curl -X DELETE \
  -F 'external_event_sources=[<APP_ID>,<PIXEL_ID>]' \
  -F 'access_token=<TOKEN>' \
  https://graph.facebook.com/<API_VERSION>/<PRODUCT_CATALOG_ID>/external_event_sources
```

To see all pixel and apps associated with a product catalog, make an `HTTP GET`:

```
curl -G \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/<API_VERSION>/<PRODUCT_CATALOG_ID>/external_event_sources
```

#### /{product_catalog_id}
You can delete a [ProductCatalog](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog) by making a DELETE request to [/{product_catalog_id}](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog).

##### Parameters

| Parameter | Description |
| --- | --- |
| `allow_delete_catalog_with_live_product_set`<br><br>*boolean* | **Default value: **`false`<br>If the catalog has live product sets, the deletion will be blocked by default. Set this parameter to true to enforce the deletion even if it has live product sets<br> |

##### Return Type

```
Struct  {
success: bool,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 3970 | You must be assigned as an admin of this product catalog before you can delete it. |
| 801 | Invalid operation |
| 100 | Invalid parameter |

#### /{product_catalog_id}/assigned_users
You can dissociate a [ProductCatalog](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog) from a [ProductCatalog](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog) by making a DELETE request to [/{product_catalog_id}/assigned_users](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/assigned_users).

##### Parameters

| Parameter | Description |
| --- | --- |
| `user`<br><br>*UID* | Business user id or system user id<br><br>**[required]**<br> |

##### Return Type

```
Struct  {
success: bool,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/additional_reviews.md -->

## Product Catalog Additional Reviews

### Reading

You can't perform this operation on this endpoint.

### Creating

Meta will review product items to ensure they comply with integrity policies. If a product is found to be in violation of these policies, it will be marked as rejected. We provide this API to appeal the outcome of an integrity decision on a product that has been rejected. Additional reviews can be requested only after the product is rejected, and only once per product.

Bear in mind that integrity reviews happen asynchronously and are triggered when new products are introduced or their attributes change, though additional reviews can happen at Meta’s discretion to ensure a consistent, safe and reliable buyer UX.

You can request 100 items per request and can optionally add a rationale message. The message should contain a short rationale in English to help the review system to evaluate the additional review request. A concise message will increase the chances of the additional review being successful and revoking the rejected status.

Rate Limiting on the endpoint: currently set at 10 calls per day per catalog. Each call can request a maximum of 100 items. This may be subject to change in future.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/assigned_users.md -->

## Product Catalog Assigned Users

### Reading

ProductCatalogAssignedUsers

#### Permissions

* `ads_management`
* `catalog_management`

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/assigned_users HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/assigned_users',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/assigned_users",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/assigned_users",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/assigned_users"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fassigned_users&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `business`<br><br>*numeric string* | The business associated with this catalog<br><br>**[required]**<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {},
"summary": {}
}
```

###### data

A list of AssignedUser nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `permitted_tasks`<br><br>*list<string>* | Tasks that are assignable on this object<br> |
| `tasks`<br><br>*list<string>* | All unpacked roles/tasks of this particular user on this object<br><br><br>**[default]**<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total_count).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*unsigned int32* | Total number of business and system users assigned to this catalog<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 200 | Permissions error |

### Creating

#### /{product_catalog_id}/assigned_users
You can make a POST request to *assigned_users* edge from the following paths:

- [/{product_catalog_id}/assigned_users](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/assigned_users)

When posting to this edge, a [ProductCatalog](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog) will be created.

#### Permissions

* `catalog_management`

##### Parameters

| Parameter | Description |
| --- | --- |
| `tasks`<br><br>*array<enum {MANAGE, ADVERTISE, MANAGE_AR, AA_ANALYZE}>* | Catalog permission tasks to assign this user<br><br>**[required]**<br> |
| `user`<br><br>*UID* | Business user id or system user id<br><br>**[required]**<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
success: bool,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 200 | Permissions error |
| 415 | Two factor authentication required. User have to enter a code from SMS or TOTP code generator to pass 2fac. This could happen when accessing a 2fac-protected asset like a page that is owned by a 2fac-protected business manager. |

### Updating

You can't perform this operation on this endpoint.

### Deleting

#### /{product_catalog_id}/assigned_users
You can dissociate a [ProductCatalog](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog) from a [ProductCatalog](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog) by making a DELETE request to [/{product_catalog_id}/assigned_users](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/assigned_users).

##### Parameters

| Parameter | Description |
| --- | --- |
| `user`<br><br>*UID* | Business user id or system user id<br><br>**[required]**<br> |

##### Return Type

```
Struct  {
success: bool,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/automotive_models.md -->

## Product Catalog Automotive Models

### Reading

ProductCatalogAutomotiveModels

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/automotive_models HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/automotive_models',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/automotive_models",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/automotive_models",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/automotive_models"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fautomotive_models&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `bulk_pagination`<br><br>*boolean* | Used for iterating over the edge in large chunks<br> |
| `filter`<br><br>*A JSON-encoded rule* | JSON-encoded WCA rule expression representing the filter to be applied for the edge<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {},
"summary": {}
}
```

###### data

A list of AutomotiveModel nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total_count).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*unsigned int32* | Total number of automotive models returned by the query<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/batch.md -->

## Product Catalog Batch

### Reading

You can't perform this operation on this endpoint.

### Creating

**Note:** This endpoint is deprecated and unavailable in API v27 and later. Existing integrations on v26 will continue to work while [Marketing API v26](https://developers.facebook.com/documentation/ads-commerce/marketing-api/marketing-api-changelog) is supported. Migrate to the [/items_batch](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/items_batch) endpoint before upgrading to v27 or later.

#### /{product_catalog_id}/batch
You can make a POST request to *batch* edge from the following paths:

- [/{product_catalog_id}/batch](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/batch)

When posting to this edge, a [ProductItem](https://developers.facebook.com/docs/marketing-api/reference/product-item) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `allow_upsert`<br><br>*boolean* | **Default value: **`true`<br>Parameters specifying whether non existing items that are being updated should be inserted or should throw the error<br> |
| `requests`<br><br>*list<JSON object>* | Array of JSON objects containing batch requests. Each batch request consists of<br>`retailer_id`, `method` and `data` fields.<br><br><br>``retailer_id` - retailer's ID for a product. `method` - an operation of a batch request, either `CREATE`, `UPDATE` or `DELETE`. `data` - JSON object containing fields and values for a product. See [Catalog Batch API](/documentation/ads-commerce/catalog/guides/manage-catalog-items/catalog-batch-api) to learn more the list of fields and values for the data object.`<br><br>**[required]**<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
handles:  List  [string],
validation_status:  List  [ Struct  {
errors:  List  [ Struct  {
message: string,
}],
retailer_id: string,
warnings:  List  [ Struct  {
message: string,
}],
}],
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 80014 | There have been too many calls for the batch uploads to this catalog account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#catalog. |
| 100 | Invalid parameter |
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/bundle_folders.md -->

## Product Catalog Bundle Folders

### Reading

Entity representing bundle folder edge

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/bundle_folders HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/bundle_folders',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/bundle_folders",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/bundle_folders",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/bundle_folders"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fbundle_folders&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

This endpoint doesn't have any parameters.

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of DynamicItemDisplayBundleFolder nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/bundles.md -->

## Product Catalog Bundles

### Reading

Represents an edge

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/bundles HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/bundles',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/bundles",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/bundles",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/bundles"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fbundles&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

This endpoint doesn't have any parameters.

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of DynamicItemDisplayBundle nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/catalog_segments.md -->

## Product Catalog Catalog Segments

### Reading

Returns the catalog segments extracted from given product catalog

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/catalog_segments HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/catalog_segments',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/catalog_segments",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/catalog_segments",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/catalog_segments"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fcatalog_segments&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {},
"summary": {}
}
```

###### data

A list of [ProductCatalog](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | Total number of objects on this edge<br><br><br>**[default]**<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/catalog_store.md -->

## Product Catalog Catalog Store

### Reading

You can't perform this operation on this endpoint.

### Creating

#### /{product_catalog_id}/catalog_store
You can make a POST request to *catalog_store* edge from the following paths:

- [/{product_catalog_id}/catalog_store](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/catalog_store)

When posting to this edge, a [StoreCatalogSettings](https://developers.facebook.com/docs/graph-api/reference/store-catalog-settings) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `page`<br><br>*numeric string* | The parent page associated with the store product catalog<br><br>**[required]**<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *id* in the return type.

```
Struct  {
id: numeric string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/categories.md -->

## Product Catalog Categories

### Reading

Categories and associated assets within given product catalog.

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/categories HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/categories',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/categories",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/categories",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/categories"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fcategories&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `categorization_criteria`<br><br>*enum {BRAND, CATEGORY, PRODUCT_TYPE}* | Product property used to define categories<br><br>**[required]**<br> |
| `filter`<br><br>*A JSON-encoded rule* | SELF_EXPLANATORY<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of ProductCatalogCategory nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

#### /{product_catalog_id}/categories
You can make a POST request to *categories* edge from the following paths:

- [/{product_catalog_id}/categories](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/categories)

When posting to this edge, a [ProductCatalogCategory](https://developers.facebook.com/docs/graph-api/reference/product-catalog-category) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `data`<br><br>*list<JSON object>* | Array of category specifications<br><br>**[required]**<br><br><br>`categorization_criteria` *enum {BRAND, CATEGORY, PRODUCT_TYPE}*<br>**[required]**<br><br><br>`criteria_value` *string*<br>**[required]**<br><br><br>`name` *UTF-8 string*<br>**[supports emoji]**<br><br><br>`description` *UTF-8 string*<br>**[supports emoji]**<br><br><br>`destination_uri` *URL*<br><br>`image_url` *URL*<br><br>`tokens` *JSON object {string : string}* |

##### Return Type

```
Struct  {
updated: integer,
skipped: integer,
total: integer,
details:  Map  {
string:  List  [ Map  {
string: string}]},
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/check_batch_request_status.md -->

## Product Catalog Check Batch Request Status

This is a Graph API [edge](https://developers.facebook.com/docs/graph-api/overview#edges) that returns the status of a single Batch API request. Hence the resulting collection always contains a single element - the status.

### Reading

Retrieve status of the request

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/check_batch_request_status HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/check_batch_request_status',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/check_batch_request_status",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/check_batch_request_status",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/check_batch_request_status"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fcheck_batch_request_status&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `handle`<br><br>*string* | A ‘handle’ string from the response of one of Catalog Batch API endpoints (example: [/items_batch response specifications](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/items_batch#for-a-successful-call))<br><br>**[required]**<br> |
| `load_ids_of_invalid_requests`<br><br>*boolean* | **Default value: **`false`<br>Whether the ‘ids_of_invalid_requests’ field needs to be populated. Unless ‘load_ids_of_invalid_requests’ is set to true the invalid request IDs will always be returned as an empty array (even if some requests are invalid).  The default value is ‘false’.<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": []
}
```

###### data

A list of [CheckBatchRequestStatus](https://developers.facebook.com/docs/marketing-api/reference/check-batch-request-status) nodes.

##### Error Codes

| Error Code | Description |
| --- | --- |
| 80009 | There have been too many calls to this Catalog account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting. |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

### Sample API Call

[Try it in Graph Explorer](https://developers.facebook.com/tools/explorer?method=GET&path=PASTE_CATALOG_ID_HERE%2Fcheck_batch_request_status%3Fhandle%3DPASTE_HANDLE_HERE%26load_ids_of_invalid_requests%3Dtrue%26fields%3Dhandle%2Cstatus%2Cwarnings%2Cerrors_total_count%2Cids_of_invalid_requests)  

| An API call that fetches all of the fields listed above for a request handle |
| --- |
| Request |
| ↳<br><br>```
curl -i -X GET -G "https://graph.facebook.com/<CATALOG_ID>/check_batch_request_status" \
    -d "access_token=<API_TOKEN>" \
    -d "load_ids_of_invalid_requests=true" \
    -d "handle=<CATALOG_BATCH_REQUEST_HANDLE>" \
    -d "fields=handle,status,warnings,errors_total_count,ids_of_invalid_requests"
``` |
| Response |
| ↳<br><br>```
{
 "data": [
   {
     "handle": "<CATALOG_BATCH_REQUEST_HANDLE>",
     "status": "finished",
     "warnings": [
       {
         "line": 1,
         "id": "item_id",
         "message": "A required field is missing: Products need to have availability listed to run in ads. Include the current availability for each product in your data feed file and upload it again. You can only add the supported values \"available_soon\", \"for_rent\", \"for_sale\", \"off_market\", \"recently_sold\", \"sale_pending\" in US English under the \"availability\" column."
       },
       {
         "line": 1,
         "id": "item_id",
         "message": "Descriptions are missing: Items need to have descriptions to be shown in your shop and ads. Go to your original data source and include a description for each item, then update them in the same way that you created them."
       },
       {
         "line": 1,
         "id": "item_id",
         "message": "A required field is missing: Products without \"name\" information can't be uploaded. Please check that this field is included for each product in a separate, labelled column."
       },
       {
         "line": 1,
         "id": "item_id",
         "message": "A required field is missing: Products need to have prices to run in ads. Include a price for each product in your data feed file and upload it again. Prices must include the cost and an ISO currency code (for example: 10 GBP instead of £10 for pound sterling)."
       }
     ],
     "errors_total_count": 6,
     "ids_of_invalid_requests": [
       "item_id",
       "item_id",
       "item_id",
       "item_id",
       "item_id",
       "item_id"
     ]
   }
 ]
}
``` |

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/check_marketplace_partner_sellers_status.md -->

## Product Catalog Check Marketplace Partner Sellers Status

### Reading

ProductCatalogCheckMarketplacePartnerSellersStatus

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/check_marketplace_partner_sellers_status HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/check_marketplace_partner_sellers_status',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/check_marketplace_partner_sellers_status",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/check_marketplace_partner_sellers_status",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/check_marketplace_partner_sellers_status"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fcheck_marketplace_partner_sellers_status&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `session_id`<br><br>*string* | session_id<br><br>**[required]**<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of ProductCatalogCheckMarketplacePartnerSellersStatus nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/collaborative_ads_share_settings.md -->

## Product Catalog Collaborative Ads Share Settings

### Reading

Edge contains all the share settings of a catalog segment

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/collaborative_ads_share_settings HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/collaborative_ads_share_settings',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/collaborative_ads_share_settings",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/collaborative_ads_share_settings",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/collaborative_ads_share_settings"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fcollaborative_ads_share_settings&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

This endpoint doesn't have any parameters.

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of CollaborativeAdsShareSettings nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/connected_businesses.md -->

## Product Catalog Connected Businesses

### Reading

Retrieve businesses that have permission on the catalog

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/connected_businesses HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/connected_businesses',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/connected_businesses",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/connected_businesses",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/connected_businesses"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fconnected_businesses&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `role`<br><br>*enum {FINANCE_EDITOR, FINANCE_ANALYST, ADS_RIGHTS_REVIEWER, ADMIN, EMPLOYEE, DEVELOPER, PARTNER_CENTER_ADMIN, PARTNER_CENTER_ANALYST, PARTNER_CENTER_OPERATIONS, PARTNER_CENTER_MARKETING, PARTNER_CENTER_EDUCATION, MANAGE, DEFAULT, FINANCE_EDIT, FINANCE_VIEW}* | The role of the current user on this business<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/da_checks.md -->

## Product Catalog DA Checks

Verify catalog for Dynamic Ads can be used. See [Dynamic Ads, Catalog and Signals Quality](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/cat-signals-quality).

### Reading

Runs Dynamic Ads checks and returns their results.

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/da_checks HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/da_checks',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/da_checks",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/da_checks",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/da_checks"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fda_checks&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `checks`<br><br>*list<string>* | **Default value: **`Set`<br>A list of Dynamic Ads checks that will be run. If not specified, all checks will be run. Valid values are: `catalog_has_feed_upload_errors`<br> |
| `connection_method`<br><br>*enum{ALL, APP, BROWSER, SERVER}* | Connection method of pixel/app event to check. This is optional<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [DACheck](https://developers.facebook.com/docs/marketing-api/reference/da-check) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/data_sources.md -->

## Product Catalog Data Sources

### Reading

ProductCatalogDataSources

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/data_sources HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/data_sources',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/data_sources",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/data_sources",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/data_sources"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fdata_sources&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `ingestion_source_type`<br><br>*enum {ALL, PRIMARY, SUPPLEMENTARY}* | **Default value: **`"PRIMARY"`<br>ingestion_source_type<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of ProductCatalogDataSource nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/destinations.md -->

## Product Catalog Destinations

Travel destinations in a catalog. See [Dynamic Ads for Travel, Catalog Setup](https://developers.facebook.com/documentation/ads-commerce/marketing-api/travel-ads).

### Reading

Retrieve destinations from a product catalog

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/destinations HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/destinations',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/destinations",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/destinations",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/destinations"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fdestinations&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `bulk_pagination`<br><br>*boolean* | Used for iterating over the edge in large chunks<br> |
| `filter`<br><br>*A JSON-encoded rule* | JSON-encoded WCA rule expression representing the filter to be applied for the edge<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {},
"summary": {}
}
```

###### data

A list of [Destination](https://developers.facebook.com/docs/graph-api/reference/destination) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total_count).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*unsigned int32* | Total number of destinations returned by the query<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/diagnostics.md -->

## Product Catalog Diagnostics

**Note:** Learn more about the [Diagnostics API](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/diagnostics-api), the detailed insights it provides, and guidance on resolving catalog issues that may be impacting ad performance.

### Reading

ProductCatalogDiagnostics

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/diagnostics HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/diagnostics',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/diagnostics",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/diagnostics",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/diagnostics"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fdiagnostics&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `affected_channels`<br><br>*list<enum{marketplace, marketplace_ads_deprecated, marketplace_shops, b2c_marketplace, c2c_marketplace, da, daily_deals_legacy, daily_deals, ig_product_tagging, offline_conversions, universal_checkout, mini_shops, shops, whatsapp}>* | **Default value: **`Set`<br>affected_channels<br> |
| `affected_entities`<br><br>*list<enum{product_item, product_catalog, product_set, product_event}>* | **Default value: **`Set`<br>affected_entities<br> |
| `affected_features`<br><br>*list<enum{checkout, augmented_reality}>* | **Default value: **`Set`<br>affected_features<br> |
| `severities`<br><br>*list<enum{MUST_FIX, OPPORTUNITY}>* | **Default value: **`Set`<br>severities<br> |
| `types`<br><br>*list<enum{AR_VISIBILITY_ISSUES, ATTRIBUTES_INVALID, ATTRIBUTES_MISSING, CATEGORY, CHECKOUT, DA_VISIBILITY_ISSUES, EVENT_SOURCE_ISSUES, IMAGE_QUALITY, LOW_QUALITY_TITLE_AND_DESCRIPTION, POLICY_VIOLATION, SHOPS_VISIBILITY_ISSUES}>* | **Default value: **`Set`<br>types<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [ProductCatalogDiagnosticGroup](https://developers.facebook.com/docs/graph-api/reference/product-catalog-diagnostic-group) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/dpa_eligible_ad_accounts.md -->

## Product Catalog Dpa Eligible Ad Accounts

### Reading

Ad accounts that the current user can use to advertise this catalog

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/dpa_eligible_ad_accounts HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/dpa_eligible_ad_accounts',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/dpa_eligible_ad_accounts",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/dpa_eligible_ad_accounts",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/dpa_eligible_ad_accounts"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fdpa_eligible_ad_accounts&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `limit`<br><br>*int64* | **Default value: **`1000`<br>The maximum number of ad accounts to be returned<br> |
| `search`<br><br>*string* | Search query used for filtering ads accounts by id or name<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/event_stats.md -->

## Product Catalog Event Stats

### Reading

Stats on pixel fires and app events from sources associated with this catalog.

Each result object contains the count of matched and unmatched content ids and the count of matched and unmatched unique content ids for each day over the previous 28 days. All results are automatically broken down by DA events (`ViewContent`, `AddToCart` and `Purchase`) and source of the event (pixel or app). Additional breakdowns like `device_type` can be requested for more granularity. Statistics about only those external event sources which the user making the request has access to, would be returned.

##### Example

#### HTTP
```
GET /v25.0/<PRODUCT_CATALOG_ID>/event_stats HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/<PRODUCT_CATALOG_ID>/event_stats',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/<PRODUCT_CATALOG_ID>/event_stats",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/<PRODUCT_CATALOG_ID>/event_stats",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/<PRODUCT_CATALOG_ID>/event_stats"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

#### cURL
```
curl -X GET -G \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/<PRODUCT_CATALOG_ID>/event_stats
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%3CPRODUCT_CATALOG_ID%3E%2Fevent_stats&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `breakdowns`<br><br>*array<enum {DEVICE_TYPE}>* | The way your results will be broken down. If you specify `["device_type"]` your results will be grouped by device_type, as well as by source and event. Results are always broken down by DA events (`ViewContent`, `AddToCart` and `Purchase`) and source of event (pixel or app) by default.<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [ProductEventStat](https://developers.facebook.com/docs/marketing-api/reference/product-event-stat) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 270 | This Ads API request is not allowed for apps with development access level (Development access is by default for all apps, please request for upgrade). Make sure that the access token belongs to a user that is both admin of the app and admin of the ad account |
| 100 | Invalid parameter |
| 200 | Permissions error |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/external_event_sources.md -->

## Product Catalog External Event Sources

### Reading

external event sources

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/external_event_sources HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/external_event_sources',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/external_event_sources",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/external_event_sources",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/external_event_sources"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fexternal_event_sources&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

This endpoint doesn't have any parameters.

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"summary": {}
}
```

###### data

A list of ExternalEventSource nodes.

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total_count).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*unsigned int32* | Total number of event sources attached to the catalog<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

#### /{product_catalog_id}/external_event_sources
You can make a POST request to *external_event_sources* edge from the following paths:

- [/{product_catalog_id}/external_event_sources](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/external_event_sources)

When posting to this edge, an [ExternalEventSource](https://developers.facebook.com/docs/graph-api/reference/external-event-source) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `external_event_sources`<br><br>*A JSON-encoded rule* | An array of event source ids<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
success: bool,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 200 | Permissions error |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/facets.md -->

## Product Catalog Facets

### Reading

Returns facets generated for a given query filter and catalogue.

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/facets HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/facets',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/facets",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/facets",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/facets"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Ffacets&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `facets`<br><br>*A JSON-encoded Product Facet Request* | Facet requests in json format<br> |
| `filter`<br><br>*A JSON-encoded rule* | WCA filter rule in json format<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of ProductCatalogFacets nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/flights.md -->

## Product Catalog Flights

Structured flight information you can include in [Dynamic Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/travel-ads).

### Reading

Retrieve flights from a product catalog

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/flights HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/flights',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/flights",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/flights",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/flights"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fflights&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `bulk_pagination`<br><br>*boolean* | Used for iterating over the edge in large chunks<br> |
| `filter`<br><br>*A JSON-encoded rule* | JSON-encoded WCA rule expression representing the filter to be applied for the edge<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {},
"summary": {}
}
```

###### data

A list of [Flight](https://developers.facebook.com/docs/graph-api/reference/flight) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total_count).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*unsigned int32* | Total number of flights returned by the query<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/home_listings.md -->

## Product Catalog Home Listings

### Reading

Endpoint that return the home listings that were added to the catalog

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/home_listings HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/home_listings',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/home_listings",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/home_listings",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/home_listings"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fhome_listings&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `bulk_pagination`<br><br>*boolean* | Used for iterating over the edge in large chunks<br> |
| `filter`<br><br>*A JSON-encoded rule* | JSON-encoded WCA rule expression representing the filter to be applied for the edge<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {},
"summary": {}
}
```

###### data

A list of [HomeListing](https://developers.facebook.com/docs/marketing-api/reference/home-listing) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total_count).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*unsigned int32* | Total number of home listings returned by the query<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

#### /{product_catalog_id}/home_listings
You can make a POST request to *home_listings* edge from the following paths:

- [/{product_catalog_id}/home_listings](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/home_listings)

When posting to this edge, a [HomeListing](https://developers.facebook.com/docs/marketing-api/reference/home-listing) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `address`<br><br>*Object* | The address of the home listing<br><br>**[required]**<br><br><br>`city` *string*<br>**[required]**<br><br><br>`country` *string*<br>**[required]**<br><br><br>`latitude` *float*<br>**[required]**<br><br><br>`longitude` *float*<br>**[required]**<br><br><br>`neighborhoods` *list<string>*<br><br>`postal_code` *string*<br><br>`region` *string*<br>**[required]**<br><br><br>`street_address` *string*<br>**[required]**<br> |
| `availability`<br><br>*string* | The availability of the home listing<br><br>**[required]**<br> |
| `currency`<br><br>*ISO 4217 Currency Code* | Currency for the listing<br><br>**[required]**<br> |
| `description`<br><br>*string* | Description of the home listing<br> |
| `home_listing_id`<br><br>*string* | ID of the home listing<br><br>**[required]**<br> |
| `images`<br><br>*list<Object>* | Links to home listing images. Please note that carousel format utilizes a square 1:1 aspect ratio images (recommended size - 600x600px) while single hotel ad uses 1.91:1 aspect ratio image(recommended size - 1200x630px). Please provide at least one image.<br><br>**[required]**<br><br><br>`image_url` *URL*<br>**[required]**<br><br><br>`tags` *list<string>* |
| `listing_type`<br><br>*string* | Listing type of the property<br> |
| `name`<br><br>*string* | Name of the home listing<br><br>**[required]**<br> |
| `num_baths`<br><br>*float* | Number of baths for the home listing<br> |
| `num_beds`<br><br>*float* | Number of beds for the home listing<br> |
| `num_units`<br><br>*float* | Number of units for the home listing<br> |
| `price`<br><br>*float* | The price for this home listing<br><br>**[required]**<br> |
| `property_type`<br><br>*string* | Property type of the home listing<br> |
| `url`<br><br>*URL* | Link to the external site where you can view the listing<br><br>**[required]**<br> |
| `year_built`<br><br>*int64* | Year built<br><br>**[required]**<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *id* in the return type.

```
Struct  {
id: numeric string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 10800 | Duplicate retailer_id when attempting to create a store collection |
| 100 | Invalid parameter |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/hotel_rooms_batch.md -->

## Product Catalog Hotel Rooms Batch

### Reading

hotel_rooms_batch

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/hotel_rooms_batch HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/hotel_rooms_batch',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/hotel_rooms_batch",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/hotel_rooms_batch",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/hotel_rooms_batch"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fhotel_rooms_batch&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `handle`<br><br>*string* | A unique handle of a batch request.<br><br>**[required]**<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of ProductCatalogHotelRoomsBatch nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

#### /{product_catalog_id}/hotel_rooms_batch
You can make a POST request to *hotel_rooms_batch* edge from the following paths:

- [/{product_catalog_id}/hotel_rooms_batch](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/hotel_rooms_batch)

When posting to this edge, a [ProductCatalogHotelRoomsBatch](https://developers.facebook.com/docs/graph-api/reference/product-catalog-hotel-rooms-batch) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `file`<br><br>*file* | Content of the file to be uploaded<br> |
| `password`<br><br>*string* | If used url then the password for the file<br> |
| `standard`<br><br>*enum{google}* | Uploaded file export standard<br><br>**[required]**<br> |
| `update_only`<br><br>*boolean* | **Default value: **`false`<br>If true, rows missing in the file will not be deleted from Facebook database (only new and updated rows are applied)<br> |
| `url`<br><br>*URL* | The url of the file to be downloaded by our system<br> |
| `username`<br><br>*string* | If used url then the username for the file<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
handles:  List  [string],
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/hotels.md -->

## Product Catalog Hotels

Hotels in a catalog used in Dynamic Ads for Travel. See [Dynamic Ads for Travel, Catalog Setup](https://developers.facebook.com/documentation/ads-commerce/marketing-api/travel-ads).

**When you use this, you can provide [Batch Requests](https://developers.facebook.com/documentation/ads-commerce/marketing-api/asyncrequests) to combine a number of API calls into one HTTP request.**

For example, to get the total number of hotels in a catalog:

```
curl -G \
-d "summary=total_count" \
-d "access_token=<ACCESS_TOKEN>" \
https://graph.facebook.com/<API_VERSION>/<PRODUCT_CATALOG_ID>/hotels
```

To fetch hotels whose name contains "suites":

```
curl -G \
-d 'fields=["hotel_id","name"]' \
-d 'filter={"name":{"i_contains":"suites"}}' \
-d 'access_token=<ACCESS_TOKEN>'
https://graph.facebook.com/<API_VERSION>/<PRODUCT_CATALOG_ID>/hotels
```

### Reading

Endpoint that returns the hotels from a catalog

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/hotels HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/hotels',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/hotels",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/hotels",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/hotels"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fhotels&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `bulk_pagination`<br><br>*boolean* | Used for iterating over the edge in large chunks<br> |
| `filter`<br><br>*A JSON-encoded rule* | JSON-encoded WCA rule expression representing the filter to be applied for the edge<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {},
"summary": {}
}
```

###### data

A list of [Hotel](https://developers.facebook.com/docs/marketing-api/reference/hotel) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total_count).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*unsigned int32* | Total number of hotels returned by the query<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

#### Example

Example to create a hotel:

```
curl \
-X POST \
-F "hotel_id=h_157" \
-F "name=Sample Hotel" \
-F "images= [ \
  {'image_url':'http://www.example.com/pic1.jpg', 'tags':['front view']}, \
  {'image_url':'http://www.example.com/pic2.jpg', 'tags':['lobby view']} \
]" \
-F "url=http://www.example.com/samplehotel" \
-F "address={ \
  street_address:'1 Hacker Way', \
  city:'Menlo Park', \
  region:'California', \
  country:'United States', \
  postal_code:'94025', \
  neighborhoods:['Palo Alto','Menlo Park'], \
  latitude:37.484116, \
  longitude:-122.148244 \
}" \
-F "brand=hotel brand" \
-F "description=hotel description" \
-F "guest_ratings= [ \
  {'score':7.8, 'rating_system':'sample_rating', 'number_of_raters':780} \
]" \
-F "star_rating=4" \
-F "loyalty_program=Sample rewards club" \
-F "phone=+351234123456" \
-F "access_token=<ACCESS_TOKEN>" \
https://graph.facebook.com/<API_VERSION>/<PRODUCT_CATALOG_ID>/hotels
```

#### /{product_catalog_id}/hotels
You can make a POST request to *hotels* edge from the following paths:

- [/{product_catalog_id}/hotels](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/hotels)

When posting to this edge, a [Hotel](https://developers.facebook.com/docs/marketing-api/reference/hotel) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `address`<br><br>*Object* | The address of the hotel<br><br>**[required]**<br><br><br>`city` *string*<br>**[required]**<br><br><br>`city_id` *string*<br><br>`country` *string*<br>**[required]**<br><br><br>`latitude` *float*<br>**[required]**<br><br><br>`longitude` *float*<br>**[required]**<br><br><br>`neighborhoods` *list<string>*<br><br>`postal_code` *string*<br><br>`region` *string*<br>**[required]**<br><br><br>`street_address` *string*<br>**[required]**<br> |
| `applinks`<br><br>*Object* | App links for native platforms, e.g. Android, IOS and Windows Phone.<br><br><br>`web` **<br><br>`android` **<br><br>`ios` **<br><br>`ipad` **<br><br>`iphone` **<br><br>`windows_phone` ** |
| `base_price`<br><br>*int64* | The base price of the hotel<br> |
| `brand`<br><br>*string* | Hotel brand<br> |
| `currency`<br><br>*ISO 4217 Currency Code* | **Default value: **`USD`<br>The currency for base_price, e.g. USD<br> |
| `description`<br><br>*string* | Description of the hotel<br><br>**[required]**<br> |
| `guest_ratings`<br><br>*list<Object>* | Guest ratings for this hotel.<br><br><br>`score` *float*<br>**[required]**<br><br><br>`max_score` *int64*<br>**[required]**<br><br><br>`rating_system` *string*<br>**[required]**<br><br><br>`number_of_raters` *int64*<br>**[required]**<br> |
| `hotel_id`<br><br>*string* | A unique identifier for this hotel provided by advertiser. (i.e. from the `id` field in the feed<br> |
| `images`<br><br>*list<Object>* | Links to hotel images. Please note that carousel format utilizes a square 1:1 aspect ratio images (recommended size - 600x600px) while single hotel ad uses 1.91:1 aspect ratio image(recommended size - 1200x630px). Please provide at least one image.<br><br>**[required]**<br><br><br>`image_url` *URL*<br>**[required]**<br><br><br>`tags` *list<string>* |
| `name`<br><br>*string* | Name of the hotel<br><br>**[required]**<br> |
| `phone`<br><br>*phone number string* | Hotel's phone number<br> |
| `star_rating`<br><br>*float* | The star rating of the hotel<br> |
| `url`<br><br>*URL* | Link to the external site where you can book a hotel room<br><br>**[required]**<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *id* in the return type.

```
Struct  {
id: numeric string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/items_batch.md -->

## Product Catalog Items Batch

### Reading

You can't perform this operation on this endpoint.

### Creating

#### /{product_catalog_id}/items_batch
You can make a POST request to *items_batch* edge from the following paths:

- [/{product_catalog_id}/items_batch](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/items_batch)

When posting to this edge, no Graph object will be created.

Use this endpoint to create, delete or update multiple items in a Catalog at a time.
The [sample API call](#sample-api-call) illustrates how this API works in practice.

#### Limitations

- The `requests` parameter can contain up to 5000 items.  It is recommended that the request size be kept under 3000 records for optimal performance.

- The request payload size should not exceed 28 MB.

- For each catalog, you can make a number of calls per minute defined by the [Catalog Batch](https://developers.facebook.com/docs/graph-api/overview/rate-limiting#catalog) business use case rate limit formula. If that's not sufficient, please contact us.

##### Parameters

| Parameter | Description |
| --- | --- |
| `allow_upsert`<br><br>*boolean* | **Default value: **`true`<br>Set this to true if you want to allow requests with method=UPDATE to create new items.<br><br><br>When set to false, update requests for items not existing in the catalog will not be completed.<br> |
| `item_sub_type`<br><br>*enum {APPLIANCES, BABY_FEEDING, BABY_TRANSPORT, BEAUTY, BEDDING, CAMERAS, CELL_PHONES_AND_SMART_WATCHES, CLEANING_SUPPLIES, CLOTHING, CLOTHING_ACCESSORIES, COMPUTERS_AND_TABLETS, DIAPERING_AND_POTTY_TRAINING, ELECTRONICS_ACCESSORIES, FURNITURE, HEALTH, HOME_GOODS, JEWELRY, NURSERY, PRINTERS_AND_SCANNERS, PROJECTORS, SHOES_AND_FOOTWEAR, SOFTWARE, TOYS, TVS_AND_MONITORS, VIDEO_GAME_CONSOLES_AND_VIDEO_GAMES, WATCHES}* | **Default value: **`"EMPTY"`<br>The sub vertical type of items in the request<br> |
| `item_type`<br><br>*string* | The type of items in the request. Needs to be one of the values listed [here](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/catalog-item-types). Note that the information specified in this field is NOT a [product category](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/product-categories) (a concept used for item_type=PRODUCT_ITEM).<br><br>**[required]**<br> |
| `requests`<br><br>*JSON object* | The string should be a JSON array with no more than 5000 records. It is recommended that the request size be kept under 3000 records for optimal performance. Each record should contain 2 fields:<br><br><br>• method: one of CREATE/UPDATE/DELETE<br>• data: a map containing catalog item field names and the corresponding values.<br><br>• When the method is CREATE, this object must contain all the required fields for the specified item_type.<br>• When the method is UPDATE, it can contain any fields.<br>• A request with method=DELETE is expected to contain only the fields that are necessary to identify an item ([see below](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/items_batch#deleting-catalog-items))<br>• Note: see [Supported Fields](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/items_batch#supported-fields) for details on what can be specified for a catalog item.<br><br><br><br>The [Sample Call](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/items_batch#sample-api-call) below demonstrates how the ‘request’ parameter can be passed.<br><br>**[required]**<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
handles:  List  [string],
validation_status:  List  [ Struct  {
errors:  List  [ Struct  {
message: string,
}],
retailer_id: string,
warnings:  List  [ Struct  {
message: string,
}],
}],
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 80014 | There have been too many calls for the batch uploads to this catalog account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#catalog. |
| 100 | Invalid parameter |
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

### Response Payload Specification

#### For a Successful Call

| Field | Description |
| --- | --- |
| handles | An array of strings, containing either 0 or 1 value. An empty array means that nothing has been ingested. The handle returned here can be used to check the status of the submitted request via the [/check_batch_request_status](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/check_batch_request_status) API endpoint. |
| validation_status | An array of `ValidationStatus` objects (see below) |

A `ValidationStatus` object has the following fields:
| Field | Description |
| --- | --- |
| retailer_id | Row identifier from one of the records in the ‘requests’ parameter |
| errors | An array of `Error` objects (see below) |
| warnings | An array of `Error` objects (see below) |

An `Error` object has the following structure
| Field | Description |
| --- | --- |
| message | A human-readable string providing an explanation of what is the issue with provided product data. |

#### For a Failed Call
Failed calls return the standard [Error Payload](https://developers.facebook.com/docs/graph-api/guides/error-handling).

### Supported Fields

| Fields that can be passed for items, depending on type |
| --- |
| item_type=PRODUCT_ITEM |
| ↳<br>\| Field \| Description \|<br>\| --- \| --- \|<br>\| `additional_image_link`<br><br>type: array< string > \| Optional.<br><br>A JSON-array containing up to 50 image URLs. \|<br>\| `additional_variant_attribute`<br><br>type: string \| Optional.<br><br>Additional attributes to distinguish the product in its variant group. A comma-separated list of attribute+value pairs where the attribute name and its value are separated by a colon symbol (‘:’)<br><br>Example: `"Scent:Fruity,Flavor:Apple"` \|<br>\| `age_group`<br><br>type: string \| Optional.<br><br>Group of people who are the same age or a similar age. Accepted values are `newborn`, `infant`, `toddler`, `kids`, `adult`. \|<br>\| `applink`<br><br>type: object< string > \| Optional.<br><br>Links to mobile apps. A JSON object with string keys and string values. The following keys are supported:<br><br>* ios_url<br>* ios_app_store_id<br>* ios_app_name<br>* iphone_url<br>* iphone_app_store_id<br>* iphone_app_name<br>* ipad_url<br>* ipad_app_store_id<br>* ipad_app_name<br>* android_url<br>* android_package<br>* android_class<br>* android_app_name<br>* windows_phone_url<br>* windows_phone_app_id<br>* windows_phone_app_name \|<br>\| `availability`<br><br>type: string \| Required.<br><br>Identifies availability status:<br><br>* `in stock` - Item ships immediately<br>* `out of stock` - No plan to restock<br>* `available for order` - Ships in 1–2 weeks<br>* `discontinued` \|<br>\| `brand`<br><br>type: string \| Required.<br><br>Brand of the item. \|<br>\| `color`<br><br>type: string \| Optional.<br><br>Max size: 100.<br><br>Item color. \|<br>\| `condition`<br><br>type: string \| Required.<br><br>Product condition: `new`, `refurbished`, or `used`. \|<br>\| * `custom_label_0`  <br>* `custom_label_1`<br>* `custom_label_2`<br>* `custom_label_3`<br>* `custom_label_4`<br><br>type: string \| Optional.<br><br>Max character limit: 100<br><br>Additional information about item. \|<br>\| * `custom_number_0`  <br>* `custom_number_1`<br>* `custom_number_2`<br>* `custom_number_3`<br>* `custom_number_4`<br><br>type: integer \| Optional.  <br><br>Up to five custom fields for any additional number-related information you want to filter items by when you create sets. This field allows you to filter by number ranges (is greater than and is less than) when you create a set. For example, you could use this field to indicate the year a hotel was opened, and then filter a certain year range into a set.<br><br>This field supports whole numbers between 0 and 4294967295. It doesn't support negative numbers, decimal numbers or commas, such as -2, 5.5 or 10,000.<br><br>Example: `2022` \|<br>\| `description`<br><br>type: string \| Required.<br><br>Max size: 5000.<br><br>Short text describing product. \|<br>\| `disabled_capabilities`<br><br>type: array< string > \| Optional.<br><br>List of capabilities to be disabled. Possible values are: `marketplace`, `b2c_marketplace`, `buy_on_facebook`, `cpas_parent_catalog`, `marketplace_shops`, `shops`, `daily_deals`, `ig_onsite_shopping`, `ig_product_tagging`, `c2c_marketplace`, `groups`, `profile`, `da`, `whatsapp`, `ldp`, `mini_shops`, `business_inbox_in_messenger`, `neighborhoods`, `test_capability`. \|<br>\| `fb_product_category`<br><br>type: string \| Optional.<br><br>Provide the most specific Facebook product category possible from this list: [Spreadsheet (.csv)](https://www.facebook.com/products/categories/en_US.csv) or [Plain text (.txt)](https://www.facebook.com/products/categories/en_US.txt). Enter either the category name (not case sensitive) or its ID number.<br><br>Examples:<br><br>* `Clothing & Accessories > Clothing > Women's Clothing > Tops & T-Shirts`<br>* `430`<br><br>Learn more about product categories by reading the [Business Help Center article](https://www.facebook.com/business/help/526764014610932).<br><br>Note: The category lists above are in US English. You can download other languages [here](https://www.facebook.com/business/help/526764014610932). \|<br>\| `gender`<br><br>type: string \| Optional.<br><br>Gender for sizing. Values include `male`, `female`, `unisex`. \|<br>\| `google_product_category`<br><br>type: string \| Optional.<br><br>Max size: 250.<br>Predefined values (string or category ID) from [Google's product taxonomy](https://www.google.com/basepages/producttype/taxonomy-with-ids.en-US.txt).<br><br>Examples:<br><br>* `Apparel & Accessories > Clothing > Dresses`<br>* `2271` \|<br>\| `gtin`<br><br>type: string \| Optional.<br><br>Max size: 70.<br><br>Global Trade Item Number (GTIN) can include UPC, EAN, JAN, and ISBN. \|<br>\| `expiration_date`<br><br>type: date \| Optional.<br><br>Product expiration. If the product has expired, it won't be shown on Facebook. This date should follow the ISO‑8601 (YYYY‑MM‑DD) format. \|<br>\| `id`<br><br>type: string \| Required.<br><br>Character limit: 100<br><br>A unique content ID for the item. Use the item's SKU if you can.<br>Each content ID must appear only once in your catalog. To run<br>dynamic ads this ID must exactly match the content ID for<br>the same item in your Facebook pixel code. \|<br>\| `image`<br><br>type: array< object > \| Required.<br><br>URLs and tags for images to be used in your ads or in shops.<br><br>A JSON array containing up to 21 records with the following fields:<br><br>* `url`: the URL string of the image<br>* `tag`: a JSON array of strings. Tags are optional and, if used, should describe what is in the image. \|<br>\| `image_link`<br><br>type: string \| Optional.<br><br>Not required if `image` is provided.<br><br>We recommend using `image` instead. When `image` is provided, `image_link` and `additional_image_link` are ignored.<br><br>Link to item image used in the ad. Provide proper image sizes.<br><br>For single-image Advantage+ catalog ads:<br><br>* Min image resolution requirement is 500px*500px.<br>* Min aspect ratio requirement is 4:5.<br>* Max aspect ratio requirement is 1:91:1. If the image is outside this aspect ratio, Facebook crops it to be closest to either the minimum aspect ratio or the maximum aspect ratio, depending on its original aspect ratio.<br><br>For carousel image, Advantage+ catalog ads: Min image resolution requirement is 500px*500px, and Facebook crops it to a 1:1 aspect ratio. \|<br>\| `importer_address`<br><br>type: JSON structure \| Optional.<br><br>If the country of origin is not India, provide the operational address of the importer. This field uses a JSON structure, which contains the following fields:<br><br>* `street1` - string, required. The first line of the street address<br>* `street2` - string, optional. The second line of the street address.<br>* `city` - string, required. The city name.<br>* `region` - string, optional. The region, state or province. (In the US this is to be used for US State)<br>* `postal_code` - string, optional (in the US this is to be used for Zip Code)<br>* `country` - required. Enter the ISO Country code (2-letter country code)<br><br>The overall address will be displayed to users in the following format: `street1`, `street2` (if present), `city`, `region` (if present) `postal_code` (if present), `country` (full name, localized for the user).<br><br>This example value:<br>`{ street1: "1 Hacker Way", street2: "Building 18", city: "Menlo Park", region: "CA", postal_code: "94025", country: "US" }`<br><br>will be rendered as "1 Hacker Way, Building 18, Menlo Park, CA 94025 United States of America" \|<br>\| `importer_name`<br><br>type: string \| Optional.<br><br>If the country of origin is not India, provide the legal entity name of the item's importer<br><br>Example value: `Jasper's Market Inc.` \|<br>\| `internal_label`<br><br>type: array< string > \| Optional.<br><br>Add internal labels to help filter items when you create product sets. For example, you could add a “summer” label to all items that are part of a summer promotion and then filter those items into a set. Labels are only visible to you<br><br>Character limit: Up to 5,000 labels per product and 110 characters per label.<br><br>Example `['summer','trending']`<br><br>Note: If you’re currently using custom labels (`custom_label_0` to `custom_label_4`) for filtering product sets, switching to internal labels (`internal_label`) instead is recommended. Unlike custom labels, you can add or update internal labels as often as needed without sending items through policy review each time, which can impact ad delivery.<br><br>**Note:** This field was previously called `product_tags`. While we still support the old field name, we recommend that you use the new name. \|<br>\| `mobile_link`<br><br>type: string \| Optional.<br><br>Link to a mobile-optimized page for the item on the merchant's website. \|<br>\| `quantity_to_sell_on_facebook`<br><br>type: integer \| Optional.<br><br>The quantity of this item you have to sell on Facebook and Instagram with checkout. Must be 1 or higher or the item won't be buyable.<br><br>**Note:** NOTE: The `quantity_to_sell_on_facebook` field is replacing the `inventory` field, which is being deprecated. While we will support the old field name in the near term, we recommend that you use the new name. \|<br>\| `item_group_id`<br><br>type: string \| Optional.<br><br>The advertiser-supplied ID of a product group; not the FBID. Accepts strings. Can be used by advertisers to group a variety of different objects (product items, vehicles, hotels, flights, and so on together. \|<br>\| `link`<br><br>type: string \| Required.<br><br>Link to merchant's site where someone can buy the item. \|<br>\| `material`<br><br>type: string \| Optional.<br><br>Character limit: 200.<br><br>The material the item is made from, such as cotton, denim or leather. \|<br>\| `mpn`<br><br>type: string \| Optional.<br><br>Unique manufacturer ID for product. \|<br>\| `ordering_index`<br><br>type: integer \| Optional.<br><br>Zero-based index used for ordering items within a group.<br><br>Example value: `0` \|<br>\| `origin_country`<br><br>type: ISO 3166-1 alpha-2 (2 letter country code) \| Optional.<br><br>The item's country of origin. Enter the two-letter ISO country code<br><br>Example value: `US` \|<br>\| `pattern`<br><br>type: string \| Optional.<br><br>Max size: 100.<br><br>Pattern or graphic print on a product. \|<br>\| `price`<br><br>type: string \| Required.<br><br>Price of the item. Format price as the cost, followed by the [3-digit ISO currency code](https://en.wikipedia.org/wiki/ISO_4217), with a space between cost and currency.<br><br>Example: `9.99 USD` \|<br>\| `product_type`<br><br>type: string \| Optional.<br><br>Max size: 750.<br><br>Retailer-defined category for item.<br><br>Example: `Home & Garden > Kitchen & Dining > Appliances > Refrigerators` \|<br>\| `rating_count`<br><br>type: integer \| Optional.<br><br>The number of ratings purchasers have provided for this product. Must be greater than 0. This should be used in conjunction with `user_rating`.<br><br>Example: `100` \|<br>\| `rich_text_description`<br><br>type: string \| Optional.<br><br>A description of the item containing rich text (HTML) formatting such as bullet points or multiple paragraphs. We recommend using rich text if the description is longer than 200 characters to help make it easier to read. If this field is provided, it will be displayed instead of the description field wherever possible, but you must still provide description as a backup option. Character limit: 9,999.<br><br>Supported HTML tags: *html*, *form*, *fieldset*, *div*, *span*<br><br>Header tags: *header*, *h1* .. *h6*<br><br>Table tags: *table*, *tbody*, *tfoot*, *thead*, *td*, *th*, *tr*<br><br>List tags: *ul*, *li*, *ol*, *dl*, *dd*, *dt*<br><br>Other formatting tags: *p*, *b*, *u*, *i*, *em*, *strong*, *title*, *small*, *br*, *div*, *sub*, *sup*, *pre*, *q*, *s*<br><br>Note: <script> and <style> tags aren't supported. If you include them, they'll be automatically removed.<br><br>Example: `<html><p>A comfortable royal blue women's T-shirt in organic cotton. Cap sleeves and relaxed fit. Perfect for warm summer days. Features graphic print of logo in white on upper left sleeve.</p> <ul> <li>100% organic cotton</li><li>Machine wash, tumble dry low</li> </ul> </html>` \|<br>\| `sale_price`<br><br>type: string \| Optional.<br><br>Discounted price if the item is on sale. Format price as the cost, followed by the [3-digit ISO currency code](https://en.wikipedia.org/wiki/ISO_4217), with a space between cost and currency.<br><br>Examples: `9.99 USD`, `25.00 EUR` \|<br>\| `sale_price_effective_date`<br><br>type: string \| Optional.<br><br>Start and end date and time for the sale, separated by a slash. Write the start and end dates as YYYY-MM-DD. Add a "T" after each date and then include the time. Write the time in a 24-hour format (0:00 to 23:59).<br><br>Example: `2014-11-01T12:00-0300/2014-12-01T00:00-0300` \|<br>\| `shipping`<br><br>type: array< object > \| Optional.<br><br>An array of JSON structures containing the following fields:<br><br>* shipping_country<br>* shipping_price_currency<br>* shipping_price_value<br>* shipping_region<br>* shipping_service<br><br>Example:  <br>```
[
      {
        "shipping_country": "US",
        "shipping_region": "CA",
        "shipping_service": "Pick-up point",
        "shipping_price_value": "4.90",
        "shipping_price_currency": "USD"
      },
      {
        "shipping_country": "US",
        "shipping_region": "CA",
        "shipping_service": "Home delivery",
        "shipping_price_value": "7.90",
        "shipping_price_currency": "USD"
      }
]
```<br><br>**Note:** The comma- and colon-separated format (`US:CA:Ground:9.99 USD, US:NY:Air:15.99 USD`) is discouraged but is also supported \|<br>\| `shipping_weight`<br><br>type: string \| Shipping weight of the item in lb, oz, g, or kg.<br><br>Example: `10 kg` \|<br>\| `size`<br><br>type: string \| Optional.<br><br>Size of item. Example: `Small` or `XL`.aasasd \|<br>\| `title`<br><br>type: string \| Required.<br><br>Max size: 100.<br><br>Title of item. \|<br>\| `user_rating`<br><br>type: number \| Optional.<br><br>The average rating purchasers have provided for this product. Range between 1.0 and 5.0. One decimal place allowed. This should be used in conjunction with `rating_count`.<br><br>Example: 4.5 \|<br>\| `vendor_id`<br><br>type: string \| Optional.<br><br>For marketplaces: the ID of the vendor/seller that sells the item. \|<br>\| `video`<br><br>type: array< object > \| Optional.<br><br>URLs and tags for videos to be used in your ads or in shops. Supports up to 30,000 videos on the catalog level. Tags are optional and, if used, should describe what is in the video.<br><br>The maximum video file size is 200 MB. Supported formats include .3g2, .3gp, .3gpp, .asf, .avi, .dat, .divx, .dv, .f4v, .flv, .gif, .m2ts, .m4v, .mkv, .mod, .mov, .mp4, .mpe, .mpeg, .mpeg4, .mpg, .mts, .nsv, .ogm, .ogv, .qt, .tod, .ts, .vob and .wmv<br><br>Example:<br><br>```
"video": [
      {
        "url":"http://example.com/video_1.mp4",
        "tag": [“Swimming pool”,”Gym”],
      }
]
```<br><br>NOTE: To delete video 1 if the product has video 1, 2, remove video 1 from the array:<br><br>```
[
  {
    "method": "UPDATE",
    "data": {
      "video": [
        {
          "url": "https://google.com/video_2.mp4",
          "tag": ["video_2"]
        }
      ]
    }
  }
]
```<br><br>To delete all videos, send an empty array:<br><br>```
[
  {
    "method": "UPDATE",
    "data": {
      "video": []
    }
  }
]
``` \| |
| item_type=APP_AND_SOFTWARE |
| ↳<br>\| Field \| Description \|<br>\| --- \| --- \|<br>\| `app_category`<br><br>type: string \| Optional.<br><br>Type of application. Used to recommend your product to the right people. Supported values:<br><br>* `Games`<br>* `Productivity`<br>* `Social`<br>* `Entertainment`<br>* `Education`<br>* `Utilities`<br>* `Lifestyle`<br>* `Health & Fitness`<br>* `Business`<br>* `Other` \|<br>\| `app_subcategory`<br><br>type: string \| Optional.<br><br>Character limit: 200.<br><br>Subcategory of the application, such as arcade game. Used to recommend your product to the right people. \|<br>\| `applink`<br><br>type: object< string > \| Optional.<br><br>Links to mobile apps. A JSON object with the following keys:<br><br>* ios_url<br>* ios_app_store_id<br>* ios_app_name<br>* android_url<br>* android_package<br>* android_class<br>* android_app_name \|<br>\| `availability`<br><br>type: string \| Required.<br><br>Availability status: `in stock`, `out of stock`, `available for order`, `discontinued`. \|<br>\| `brand`<br><br>type: string \| Optional.<br><br>Character limit: 100.<br><br>The name of the publisher of the product. \|<br>\| `condition`<br><br>type: string \| Required.<br><br>Product condition: `new`, `refurbished`, or `used`. \|<br>\| `content_rating`<br><br>type: string \| Optional.<br><br>Official rating of the product. Can be shown in ads. Required for restricted audiences in our [Advertising policies](https://www.facebook.com/policies/ads).<br><br>Example: `E for Everyone` \|<br>\| * `custom_label_0`<br>* `custom_label_1`<br>* `custom_label_2`<br>* `custom_label_3`<br>* `custom_label_4`<br><br>type: string \| Optional.<br><br>Character limit: 100.<br><br>Any relevant information you want to add to your ad creative such as in the headline. \|<br>\| * `custom_number_0`<br>* `custom_number_1`<br>* `custom_number_2`<br>* `custom_number_3`<br>* `custom_number_4`<br><br>type: integer \| Optional.<br><br>Any number you want to filter products by when you create product sets. Use whole numbers between 0 and 4294967295. Decimals and commas are not supported. \|<br>\| `description`<br><br>type: string \| Required.<br><br>Character limit: 9999.<br><br>A short and relevant description of the product. Shown in ads. Use plain text and don't enter text in all capital letters. \|<br>\| `developer`<br><br>type: string \| Optional.<br><br>Character limit: 100.<br><br>The name of the developer of the product. \|<br>\| `fb_product_category`<br><br>type: string \| Optional.<br><br>The Facebook product category for the product. Enter a supported category from the latest downloadable list available on our [Business Help Center](https://www.facebook.com/business/help/526764014610932). \|<br>\| `genres`<br><br>type: string \| Optional.<br><br>Character limit: 200.<br><br>The genre or style of the game or app, such as action or puzzle. Use commas to separate multiple items.<br><br>Example: `Action,RPG,Multiplayer` \|<br>\| `google_product_category`<br><br>type: string \| Optional.<br><br>The Google product category for the product. Enter a supported category from the latest downloadable list available on our [Business Help Center](https://www.facebook.com/business/help/526764014610932). \|<br>\| `id`<br><br>type: string \| Required.<br><br>Character limit: 100.<br><br>A unique content ID for the item. Each content ID must appear only once in your catalog. To run Advantage+ catalog ads, this ID must exactly match the content ID for the same item in your Meta Pixel code. \|<br>\| `image_link`<br><br>type: string \| Required.<br><br>The URL for the main image of your product. Shown in ads. Must be in a supported format (JPG/PNG) and at least 500 x 500 pixels. \|<br>\| `link`<br><br>type: string \| Required.<br><br>The link to the specific product page on your business's website. Links must begin with `http://` or `https://`. \|<br>\| `operating_system`<br><br>type: string \| Optional.<br><br>Character limit: 100.<br><br>The operating system or device on which the game or app can be used. Use commas to separate multiple items. Supported values:<br><br>* `iOS`<br>* `Android`<br>* `Windows`<br>* `macOS`<br>* `Linux`<br>* `Chrome OS`<br>* `Web`<br>* `Other`<br><br>Example: `iOS,Android` \|<br>\| `price`<br><br>type: string \| Optional.<br><br>The individual price of the app or software. Do not enter a subscription price. Format the price as a number followed by the 3-letter currency code (ISO 4217 standards). Use a period (`.`) as the decimal point.<br><br>Example: `9.99 USD` \|<br>\| `rating_count`<br><br>type: integer \| Optional.<br><br>The number of users who have left ratings on the application. Can be shown in ads.<br><br>Example: `100` \|<br>\| `sale_price`<br><br>type: string \| Optional.<br><br>The discounted price if the item is on sale. Same format as `price`. A sale price is required if you want to use an overlay for discounted prices. \|<br>\| `title`<br><br>type: string \| Required.<br><br>Character limit: 200.<br><br>The name of the product. Shown in ads. \|<br>\| `user_rating`<br><br>type: number \| Optional.<br><br>The average user rating the application has. Enter a rating between 0.0 to 5.0, using a single decimal place. Can be shown in ads.<br><br>Example: `4.5` \|<br><br>### Sample APP_AND_SOFTWARE payload<br><br>```
{
  "id": "app_001",
  "title": "Super Puzzle Game",
  "description": "A fun and challenging puzzle game for all ages",
  "link": "https://example.com/super-puzzle-game",
  "image_link": "https://example.com/app-icon.jpg",
  "availability": "in stock",
  "condition": "new",
  "price": "4.99 USD",
  "brand": "GameStudio",
  "app_category": "Games",
  "app_subcategory": "Puzzle",
  "content_rating": "E for Everyone",
  "developer": "GameStudio Inc.",
  "genres": "Puzzle,Casual",
  "operating_system": "iOS,Android",
  "user_rating": 4.5,
  "rating_count": 1200
}
``` |
| item_type=DESTINATION |
| ↳<br>\| Field \| Description \|<br>\| --- \| --- \|<br>\| `applink`<br><br>type: object< string > \| Optional.<br><br>Links to mobile apps. A JSON object with string keys and string values. The following keys are supported:<br><br>* ios_url<br>* ios_app_store_id<br>* ios_app_name<br>* iphone_url<br>* iphone_app_store_id<br>* iphone_app_name<br>* ipad_url<br>* ipad_app_store_id<br>* ipad_app_name<br>* android_url<br>* android_package<br>* android_class<br>* android_app_name<br>* windows_phone_url<br>* windows_phone_app_id<br>* windows_phone_app_name \|<br>\| `address`<br><br>type: object< string > \| Required.<br><br>Address of the destination. A JSON object with string keys and string values. The following keys are supported.<br><br>Required fields:<br><br>* city<br>* country<br>* region<br><br>Optional fields:<br><br>* city_id - identifier of the city to be used when constructing URLs<br>* postal_code<br>* unit_number<br><br>Example: `{<br>"city": "Shannon",<br>"region": "Ireland",<br>"country": "Ireland"<br>}` \|<br>\| `description`<br><br>type: string \| Optional.<br><br>Max character limit: 5000.<br><br>Short paragraph describing the destination. \|<br>\| `destination_id`<br><br>type: string \| Required.<br><br>Max character limit: 100.<br><br>Unique ID for the destination. \|<br>\| `image`<br><br>type: array< object > \| Required.<br><br>URLs and tags for images to be used in your ads or in shops.<br><br>A JSON array containing up to 21 records with the following fields:<br><br>* url: the URL string of the image<br>* tag: a JSON array of strings. Tags are optional and, if used, should describe what is in the image. \|<br>\| `latitude`<br><br>type: string \| Required.<br><br>Latitude location of the destination. \|<br>\| `longitude`<br><br>type: string \| Required.<br><br>Longitude location of the destination. \|<br>\| `name`<br><br>type: string \| Required.<br><br>Name of the destination. \|<br>\| `neighborhood`<br><br>type: array< string > \| Optional.<br><br>Max number of neigborhoods allowed: 20. One or more neighborhood(s) for the destination.<br><br>Example: `["Soho", "Las Vegas Strip"]` \|<br>\| `price`<br><br>type: string \| Optional.<br><br>Lowest average cost and currency for the destination. Format the price as a number followed by the currency code; use [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) standards. Use ""."" as the decimal for the price. \|<br>\| `price_change`<br><br>type: string \| Optional.<br><br>Price change. Can be used for building product sets and in the ad creative:<br><br>* `0` - No price change<br>* `-10` - 10% price drop<br>* `20` - 20% price increase.<br><br>Example: `"0"` \|<br>\| `type`<br><br>type: array< string > \| Required.<br><br>Max number of destination types: 20. Type(s) of destination. A destination can have multiple types.<br><br>Example: `["resort", "beach"]` \|<br>\| `url`<br><br>type: string \| Required.<br><br>Link to the website where you can book the destination. \|<br>\| `video`<br><br>type: array< object > \| Optional.<br><br>URLs and tags for videos to be used in your ads or in shops. Supports up to 30,000 videos on the catalog level. Tags are optional and, if used, should describe what is in the video.<br><br>The maximum video file size is 200 MB. Supported formats include .3g2, .3gp, .3gpp, .asf, .avi, .dat, .divx, .dv, .f4v, .flv, .gif, .m2ts, .m4v, .mkv, .mod, .mov, .mp4, .mpe, .mpeg, .mpeg4, .mpg, .mts, .nsv, .ogm, .ogv, .qt, .tod, .ts, .vob and .wmv<br><br>Example:<br><br>```
"video": [
      {
        "url":"http://example.com/video_1.mp4",
        "tag": [“Swimming pool”,”Gym”],
      }
]
```<br><br>NOTE: To delete video 1 if the destination has video 1, 2, remove video 1 from the array:<br><br>```
[
  {
    "method": "UPDATE",
    "data": {
      "video": [
        {
          "url": "https://google.com/video_2.mp4",
          "tag": ["video_2"]
        }
      ]
    }
  }
]
```<br><br>To delete all videos, send an empty array:<br><br>```
[
  {
    "method": "UPDATE",
    "data": {
      "video": []
    }
  }
]
``` \|<br><br>### Sample DESTINATION payload<br><br>```
{
 "address": {
   "city": "Menlo Park",
   "city_id": "MPK",
   "country": "USA",
   "postal_code": "94025",
   "region": "California"
 },
 "applink": {
   "android_url": "a://b/c",
   "android_package": "android.test",
   "android_app_name": "TestApp",
   "ios_url": "d://e/f",
   "ios_app_store_id": "123456",
   "ios_app_name": "TestApp"
 },
 "description": "Description of the test destination ",
 "destination_id": "abc",
 "image": [
   {
     "url": "https://facebook.com/1.jpg",
     "tag": [
       "image_tag"
     ]
   }
 ],
 "latitude": "42.0",
 "longitude": "42.0",
 "name": "Test Destination",
 "neighborhood": [
   "Silicon Valley",
   "Neighbourhood2"
 ],
 "price": "123 USD",
 "price_change": 0,
 "type": [
   "Family",
   "Sand",
   "Water"
 ],
 "url": "https://website.com/la_isla_bonita.html",
 "video": [
   {
     "url": "https://facebook.com/1.mp4",
     "tag": [
       "video_tag"
     ]
   }
 ]
}
``` |
| item_type=FLIGHT |
| ↳<br>\| Field \| Description \|<br>\| --- \| --- \|<br>\| `description`<br><br>type: string \| Optional.<br><br>Max character limit: 5000.<br><br>Description of the flight. \|<br>\| `destination_airport`<br><br>type: string \| Required.<br><br>Destination airport for the flight. Should be written as an [IATA code](https://en.wikipedia.org/w/index.php?title=List_of_airports_by_IATA_airport_code).<br><br>Example: `SFO`. \|<br>\| `destination_city`<br><br>type: string \| Optional.<br><br>Name of the destination city for the flight. \|<br>\| `image`<br><br>type: array< object > \| Required.<br><br>Images to be used in the ads. A JSON array containing up to 21 records with the following fields:<br><br>* url: the URL string of the image<br>* tag: a JSON array of strings. Tags are optional and, if used, should describe what is in the image. \|<br>\| `origin_airport`<br><br>type: string \| Required.<br><br>Origin airport for the flight. Should be written as an [IATA code](https://en.wikipedia.org/w/index.php?title=List_of_airports_by_IATA_airport_code).<br><br>Example: `LHR`. \|<br>\| `price`<br><br>type: string \| Optional.<br><br>Cost and currency of the flight. The price is a number followed by the currency code; use [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) standards. Use ""."" as the decimal for the price. \|<br>\| `url`<br><br>type: string \| Optional.<br><br>Link to the website where you can book the flight. \|<br>\| `video`<br><br>type: array< object > \| Optional.<br><br>URLs and tags for videos to be used in your ads. Supports up to 30,000 videos on the catalog level. Tags are optional and, if used, should describe what is in the video.<br><br>The maximum video file size is 200 MB. Supported formats include .3g2, .3gp, .3gpp, .asf, .avi, .dat, .divx, .dv, .f4v, .flv, .gif, .m2ts, .m4v, .mkv, .mod, .mov, .mp4, .mpe, .mpeg, .mpeg4, .mpg, .mts, .nsv, .ogm, .ogv, .qt, .tod, .ts, .vob and .wmv<br><br>Example:<br><br>```
"video": [
      {
        "url":"http://example.com/video_1.mp4",
        "tag": [“Red Eye”],
      }
]
```<br><br>NOTE: To delete video 1 if the flight has video 1, 2, remove video 1 from the array:<br><br>```
[
  {
    "method": "UPDATE",
    "data": {
      "video": [
        {
          "url": "https://google.com/video_2.mp4",
          "tag": ["video_2"]
        }
      ]
    }
  }
]
```<br><br>To delete all videos, send an empty array:<br><br>```
[
  {
    "method": "UPDATE",
    "data": {
      "video": []
    }
  }
]
``` \|<br><br>### Sample FLIGHT payload<br><br>```
{
 "description": "test flight",
 "destination_airport": "SFO",
 "destination_city": "San Francisco",
 "image": [
   {
     "url": "https://www.facebook.com/images/plane.jpg",
     "tags": [
       "tag1",
       "tag2"
     ]
   }
 ],
 "origin_airport": "LAX",
 "origin_city": "Los Angeles",
 "price": "123 USD",
 "custom_label_0": "test flight label",
 "custom_number_0": 2025,
 "url": "https://www.facebook.com/sfo_lax_flight",
 "video": [
   {
     "url": "https://website.com/p123.mpg",
     "tag": [
       "cloud",
       "wing"
     ]
   }
 ]
}
``` |
| item_type=HOME_LISTING |
| ↳<br>\| Field \| Description \|<br>\| --- \| --- \|<br>\| `home_listing_id`<br><br>type: string \| Required.<br><br>Unique home (apartment/condo) listing ID; most granular ID possible.<br><br>Example: `FB_home_1234` \|<br>\| `home_listing_group_id`<br><br>type: string \| Optional.<br><br>Building or apartment's unique ID. Must be unique per group. \|<br>\| `applink`<br><br>type: object< string > \| Optional.<br><br>Links to mobile apps. A JSON object with string keys and string values. The following keys are supported:<br><br>* ios_url<br>* ios_app_store_id<br>* ios_app_name<br>* iphone_url<br>* iphone_app_store_id<br>* iphone_app_name<br>* ipad_url<br>* ipad_app_store_id<br>* ipad_app_name<br>* android_url<br>* android_package<br>* android_class<br>* android_app_name<br>* windows_phone_url<br>* windows_phone_app_id<br>* windows_phone_app_name \|<br>\| `address`<br><br>type: object< string > \| Required.<br><br>Street address for the property that must be resolvable to its location.<br><br>See [Address Object Parameters](https://developers.facebook.com/documentation/ads-commerce/marketing-api/real-estate-ads/get-started#address-object). \|<br>\| `availability`<br><br>type: string \| Required.<br><br>Current availability for the home listing. Supported values are: `for_sale`, `for_rent`, `sale_pending`, `recently_sold`, `off_market`, `available_soon`. For commerce, the only supported value is `for_rent`. \|<br>\| `available_dates_price_config`<br><br>type: array< object > \| Optional.<br><br>List of dates and prices that a listing is available. When you provide values, Facebook can recommend listings based on their available dates and dynamically show the associated price in your ad.<br><br>See [Available Dates Object Parameters](https://developers.facebook.com/documentation/ads-commerce/marketing-api/real-estate-ads/get-started#available_dates-object). \|<br>\| `description`<br><br>type: string \| Optional.<br><br>Max character limit: 5000.<br><br>Short paragraph describing the home listing. \|<br>\| `image`<br><br>type: array< object > \| Required.<br><br>URLs and tags for images to be used in your ads.<br><br>A JSON array containing up to 21 records with the following fields:<br><br>* url: the URL string of the image<br>* tag: a JSON array of strings. Tags are optional and, if used, should describe what is in the image.<br><br>See [Image Object Parameters](https://developers.facebook.com/documentation/ads-commerce/marketing-api/real-estate-ads/get-started#image-object). \|<br>\| `latitude`<br><br>type: string \| Optional.<br><br>Latitude location of the home listing. \|<br>\| `longitude`<br><br>type: string \| Optional.<br><br>Longitude location of the home listing. \|<br>\| `listing_type`<br><br>type: string \| Optional.<br><br>Type of property listing. Supported values for Advantage+ catalog ads: `for_rent_by_agent`, `for_rent_by_owner`, `for_sale_by_agent`, `for_sale_by_owner`, `foreclosed`, `new_construction`, `new_listing`. Supported values for commerce: `for_rent_by_agent`, `for_rent_by_owner`. \|<br>\| `name`<br><br>type: string \| Required.<br><br>Name of the home listing. \|<br>\| `neighborhood`<br><br>type: array< string > \| Optional.<br><br>Neighborhood for the home listing. Max number neighborhoods allowed: 20. \|<br>\| `num_rooms`<br><br>type: integer \| Optional.<br><br>Total number of rooms in the property. \|<br>\| `num_baths`<br><br>type: integer \| Optional.<br><br>Total number of bathrooms. For commerce, must be 1 at minimum. \|<br>\| `num_beds`<br><br>type: integer \| Optional.<br><br>Total number of bedrooms. Can be 0 for Studios. \|<br>\| `num_units`<br><br>type: integer \| Optional.<br><br>Number of units available. Use only for apartments or condos available for rent/lease. \|<br>\| `price`<br><br>type: string \| Required.<br><br>Cost and currency for the home listing. The price is a number followed by the currency code; use [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) standards. Use ""."" as the decimal for the price. \|<br>\| `property_type`<br><br>type: string \| Optional.<br><br>Type of property.<br><br>Supported values for Advantage+ catalog ads: `apartment`, `condo`, `house`, `land`, `manufactured`, `other`, `townhouse`.<br><br>Supported values for commerce: `apartment`, `builder_floor`, `condo`, `house`, `house_in_condominium`, `house_in_villa`, `loft`, `penthouse`, `studio`, `townhouse`, `other`. \|<br>\| `url`<br><br>type: string \| Required.<br><br>Link to the website where you can view the listing. \|<br>\| `year_built`<br><br>type: string \| Optional.<br><br>Year the property was built, using the YYYY format, 4 digit year. \|<br>\| `area_size`<br><br>type: integer \| Not applicable for Advantage+ catalog ads. Required for commerce.<br>Area or space of the floor plan's listing. \|<br>\| `area_unit`<br><br>type: string \| Not applicable for Advantage+ catalog ads. Required for commerce.<br>The units (square feet or square meters) of the floor area's value. Supported values: `sq_ft`, `sq_m`. \|<br>\| `ac_type`<br><br>type: string \| Not applicable for Advantage+ catalog ads. Optional for commerce.<br>Type of air conditioning. Supported values: `central`, `other`, `none`. \|<br>\| `furnish_type`<br><br>type: string \| Not applicable for Advantage+ catalog ads. Optional for commerce.<br>Type of heating installed in the property. Supported values: `central`, `gas`, `electric`, `radiator`, `other`, `none`. \|<br>\| `laundry_type`<br><br>type: string \| Not applicable for Advantage+ catalog ads. Optional for commerce.<br><br>Type of laundry available. Supported values: `in_unit`, `in_building`, `other`, `none`. \|<br>\| `parking_type`<br><br>type: string \| Not applicable for Advantage+ catalog ads. Optional for commerce.<br><br>Type of parking available on property. Supported values: `garage`, `street`, `off-street`, `other`, `none`. \|<br>\| `partner_verification`<br><br>type: string \| Not applicable for Advantage+ catalog ads. Optional for commerce.<br><br>Whether the partner company has verified the listing. Supported values: `verified`, `none`. \|<br>\| `pet_policy`<br><br>type: string \| Not applicable for Advantage+ catalog ads. Optional for commerce.<br><br>Indicates the pets allowed on the property: `cat`, `dog`, `all`, `none`. \|<br>\| `status`<br><br>type: string \| Controls whether an item is active or archived in your catalog. Only active items can be seen by people in your ads, shops or any other channels. Supported values: `active`, `archived`. Items are active by default. Learn more about [archiving items](https://www.facebook.com/business/help/543317109402043?id=725943027795860).<br><br>Example: `active`<br><br>**Note:** This field was previously called `visibility`. While we still support the old field name, we recommend that you use the new name. \|<br>\| `video`<br><br>type: array< object > \| Optional.<br><br>URLs and tags for videos to be used in your ads or in shops. Supports up to 30,000 videos on the catalog level. Tags are optional and, if used, should describe what is in the video.<br><br>The maximum video file size is 200 MB. Supported formats include .3g2, .3gp, .3gpp, .asf, .avi, .dat, .divx, .dv, .f4v, .flv, .gif, .m2ts, .m4v, .mkv, .mod, .mov, .mp4, .mpe, .mpeg, .mpeg4, .mpg, .mts, .nsv, .ogm, .ogv, .qt, .tod, .ts, .vob and .wmv<br><br>Example:<br><br>```
"video": [
      {
        "url":"http://example.com/video_1.mp4",
        "tag": [“Swimming pool”,”Gym”],
      }
]
```<br><br>NOTE: To delete video 1 if the home listing has video 1, 2, remove video 1 from the array:<br><br>```
[
  {
    "method": "UPDATE",
    "data": {
      "video": [
        {
          "url": "https://google.com/video_2.mp4",
          "tag": ["video_2"]
        }
      ]
    }
  }
]
```<br><br>To delete all videos, send an empty array:<br><br>```
[
  {
    "method": "UPDATE",
    "data": {
      "video": []
    }
  }
]
``` \|<br><br>### Sample HOME_LISTING payload<br><br>```
{
 "home_listing_id": "home_listing_123",
 "home_listing_group_id": "group_123",
 "address": {
   "addr1": "12 Test Street",
   "city": "Marília",
   "region": "SP",
   "country": "BR",
   "postal_code": "17515440"
 },
 "applink": {
   "android_url": "a://b/c",
   "android_package": "android.topwidgets",
   "android_app_name": "TopWidgets",
   "ios_url": "d://e/f",
   "ios_app_store_id": "123456",
   "ios_app_name": "TopWidgets"
 },
 "available_dates_price_config": [
   {
     "start_date": "2026-01-01",
     "end_date": "2027-01-01",
     "rate": "10000",
     "currency": "USD",
     "interval": "nightly"
   }
 ],
 "latitude": "-25.0",
 "longitude": "-45.0",
 "availability": "off_market",
 "description": "Nice house, has windows and doors",
 "image": [
   {
     "url": "https://facebook.com/123.jpg",
     "tag": [
       "image_tag"
     ]
   }
 ],
 "name": "House for Sale on Earth",
 "neighborhood": [
   "Jardim Maria Izabel",
   "RESIDENTIAL"
 ],
 "num_baths": 2,
 "num_beds": 2,
 "num_rooms": 4,
 "num_units": 2,
 "price": "4000000 JPY",
 "url": "https://facebook.com/123",
 "property_type": "house",
 "listing_type": "for_sale_by_agent",
 "agent_company": "Test Agency",
 "area_size": "123",
 "area_unit": "sq_m",
 "ac_type": "central",
 "furnish_type": "semi-furnished",
 "heating_type": "gas",
 "laundry_type": "in_unit",
 "parking_type": "off_street",
 "partner_verification": "verified",
 "pet_policy": "cat",
 "status": "archived",
 "video": [
   {
     "url": "https://facebook.com/123.mp4",
     "tag": [
       "video_tag"
     ]
   }
 ],
 "year_built": "2001"
}
``` |
| item_type=HOTEL |
| ↳<br>\| Field \| Description \|<br>\| --- \| --- \|<br>\| `address`<br><br>type: array< object > \| Required.<br><br>Address of the hotel. See [Address Object Parameters](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads/catalog#address-object). \|<br>\| `applink`<br><br>type: object \| Optional.<br><br>Deep link straight to the hotel details page in your mobile app. See supported fields [here](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/product-deep-links). \|<br>\| `base_price`<br><br>type: string \| Required.<br><br>Base price of the hotel room per night. Add the currency type to the price. Format price as the cost, followed by the [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217), with a space between cost and currency.<br><br>Example: `100 USD` \|<br>\| `priority`<br><br>type: integer \| Optional.<br><br>An indicator of the priority of the hotel; value from 0(lowest priority) to 5(highest priority).<br><br>Example: `5` \|<br>\| `category`<br><br>type: string \| Optional.<br><br>The type of property. The category can be any type of internal description desired.<br><br>Examples: `Resort`, `Day Room` \|<br>\| `number_of_rooms`<br><br>type: integer \| Optional.<br><br>Total number of rooms/units in this hotel listing.<br><br>Example: `150` \|<br>\| `brand`<br><br>type: integer \| Optional.<br><br>Brand of the hotel chain. \|<br>\| * `custom_label_0`<br>* `custom_label_1`<br>* `custom_label_2`<br>* `custom_label_3`<br>* `custom_label_4`<br><br>type: string \| Optional.<br><br>Max character limit: 100<br><br>Up to five custom fields for any additional information you want to filter items by when you create sets. For example, you could use a custom field to indicate all rooms that are part of a summer sale, and then filter those rooms into a set. This field supports any text value, including numbers.<br><br>Example: `Summer Sale` \|<br>\| * `custom_number_0`<br>* `custom_number_1`<br>* `custom_number_2`<br>* `custom_number_3`<br>* `custom_number_4`<br><br>type: integer \| Optional.<br><br>Up to five custom fields for any additional number-related information you want to filter items by when you create sets. This field allows you to filter by number ranges (is greater than and is less than) when you create a set. For example, you could use this field to indicate the year a hotel was opened, and then filter a certain year range into a set.<br><br>This field supports whole numbers between 0 and 4294967295. It doesn't support negative numbers, decimal numbers or commas, such as -2, 5.5 or 10,000.<br><br>Example: `2022` \|<br>\| `internal_label`<br><br>type: array< string > \| Add internal labels to help filter items when you create [product sets](https://www.facebook.com/business/help/620275848114281?id=725943027795860). For example, you could add a “summer” label to all items that are part of a summer promotion and then filter those items into a set. Labels are only visible to you.<br><br>Character limit: Up to 5,000 labels per product and 110 characters per label.<br><br>Note: If you’re currently using custom labels (`custom_label_0` to `custom_label_4`) for filtering product sets, switching to internal labels (`internal_label`) instead is recommended. Unlike custom labels, you can add or update internal labels as often as needed without sending items through policy review each time, which can impact ad delivery.<br><br>This field was previously called `product_tags`. While we still support the old field name, we recommend that you use the new name. \|<br>\| `description`<br><br>type: string \| Required.<br><br>Max character limit: 5000.<br><br>Short description of the hotel. \|<br>\| `guest_rating`<br><br>type: array< object > \| Optional.<br><br>Guest ratings of the hotel. See [Guest Rating Object Parameters](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads/catalog#guest_ratings-object). \|<br>\| `hotel_id`<br><br>type: string \| Required.<br><br>Max length: 100<br><br>Your unique identifier for the hotel within the catalog. This ID is matched with any `content_ids` provided in your hotel app and pixel events. Tip: To improve performance, avoid using a space for this unique identifier field. Don't use duplicate IDs.<br><br>Example: `FB_hotel_1234` \|<br>\| `image`<br><br>type: array< object > \| Required.<br><br>A JSON array containing up to 21 records with the following fields:<br>* url: the URL string of the image<br>* tag: a JSON array of strings. Tags are optional and, if used, should describe what is in the image.<br><br>See [Image Object Parameters](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads/catalog#image-object). \|<br>\| `video`<br><br>type: array< object > \| Optional.<br><br>URLs and tags for videos to be used in your ads or in shops. Supports up to 30,000 videos on the catalog level. Tags are optional and, if used, should describe what is in the video.<br><br>The maximum video file size is 200 MB. Supported formats include .3g2, .3gp, .3gpp, .asf, .avi, .dat, .divx, .dv, .f4v, .flv, .gif, .m2ts, .m4v, .mkv, .mod, .mov, .mp4, .mpe, .mpeg, .mpeg4, .mpg, .mts, .nsv, .ogm, .ogv, .qt, .tod, .ts, .vob and .wmv<br><br>Example:<br><br>```
"video": [
      {
        "url":"http://example.com/video_1.mp4",
        "tag": [“Swimming pool”,”Gym”],
      }
]
```<br><br>NOTE: To delete video 1 if the product has video 1, 2, remove video 1 from the array:<br><br>```
[
  {
    "method": "UPDATE",
    "data": {
      "video": [
        {
          "url": "https://google.com/video_2.mp4",
          "tag": ["video_2"]
        }
      ]
    }
  }
]
```<br><br>To delete all videos, send an empty array:<br><br>```
[
  {
    "method": "UPDATE",
    "data": {
      "video": []
    }
  }
]
``` \|<br>\| `latitude`<br><br>type: string \| Required.<br><br>Latitude location of the hotel.<br><br>Example: `12.345` \|<br>\| `longitude`<br><br>type: string \| Required.<br><br>Longitude location of the hotel.<br><br>Example: `67.89` \|<br>\| `loyalty_program`<br><br>type: string \| Optional.<br><br>Loyalty program you use to gain points for staying at the hotel. \|<br>\| `margin_level`<br><br>type: string \| Optional.<br><br>Indicator of the hotel&#039;s profitability; value from 1 to 10.<br><br>Example: `7` \|<br>\| `name`<br><br>type: string \| Required.<br><br>Name of the hotel. \|<br>\| `neighborhood`<br><br>type: array< string > \| Optional.<br><br>One or more neighborhood(s) for the hotel. Max number of neigborhoods allowed: 20.<br><br>Example: `[&quot;Soho&quot;, &quot;Las Vegas Strip&quot;]` \|<br>\| `phone`<br><br>type: string \| Optional.<br><br>Phone number with country code. \|<br>\| `status`<br><br>type: string \| Optional.<br><br>Controls whether an item is active or archived in your catalog. Only active items can be seen by people in your ads, shops or any other channels. Supported values: `active`, `archived`. Items are active by default. Learn more about [archiving items](https://www.facebook.com/business/help/543317109402043?id=725943027795860).<br><br>Example: `active`<br><br>This field was previously called `visibility`. While we still support the old field name, we recommend that you use the new name. \|<br>\| `Sale price`<br><br>type: string \| Optional.<br><br>Note: this field has a space character in its name<br><br>Sale price per night in the hotel. Use this to advertise discounts off the regular hotel price. Required: Add the currency type to the price. Format price as the cost, followed by the [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217), with a space between cost and currency.<br><br>Example: `99 USD` \|<br>\| `Star rating`<br><br>type: Integer \| Optional.<br><br>Hotel star rating. Number should be between 1 and 5.<br><br>Example: `3` \|<br>\| `uri`<br><br>type: string \| Required.<br><br>Link to the website where you book the hotel room. \|<br><br>### Sample HOTEL payload<br><br>```
{
 "hotel_id": "1234",
 "name": "Test hotel",
 "description": "Test Hotel Description",
 "base_price": "100 USD",
 "Sale price": "99 USD",
 "priority": 4,
 "category": "Resort",
 "number_of_rooms": 2,
 "custom_label_0": "Test Label 0",
 "internal_label": [
   "label1",
   "label2"
 ],
 "custom_number_0": 2025,
 "brand": "Test Hotels Inc.",
 "guest_rating": [
   {
     "score": 4.4,
     "number_of_reviewers": 123,
     "rating_system": "Expedia",
     "max_score": 5
   }
 ],
 "address": {
   "country": "United States",
   "region": "California",
   "city": "Menlo Part",
   "addr1": "1 Hacker Way",
   "addr2": " ",
   "city_id": "",
   "postal_code": "94025"
 },
 "latitude": "12.345",
 "longitude": "67.890",
 "neighborhood": [
   "Silicon Valley"
 ],
 "Star rating": "4",
 "applink": {
   "android_app_name": "Test Apps",
   "android_package": "com.test.app",
   "android_url": "abc://dev/detail?no=1234",
   "ios_app_name": "com.test.app",
   "ios_app_store_id": "1234567890",
   "ios_url": "abc://def/detail?no=1234"
 },
 "image": [
   {
     "url": "https://facebook.com/1.jpg",
     "tags": [
       "main"
     ]
   }
 ],
 "video": [
   {
     "url": "https://facebook.com/1.mp4",
     "tags": [
       "main"
     ]
   }
 ],
 "url": "https://facebook.com/hotels/1234"
}
``` |
| item_type=HOTEL_ROOM |
| ↳<br>\| Field \| Description \|<br>\| --- \| --- \|<br>\| `applink`<br><br>type: object< string > \| Optional.<br><br>Deep link straight to the hotel room details page in your mobile app. See supported fields [here](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/product-deep-links). \|<br>\| `base_price`<br><br>type: string \| Required.<br><br>Base price for 1 night. Currency should follow [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency codes.<br><br>Example: `9.99 USD`. \|<br>\| `description`<br><br>type: string \| Required.<br><br>Max size: 5000.<br><br>Short text describing the room. \|<br>\| `hotel_retailer_id`<br><br>type: string \| Required.<br><br>Unique ID for the hotel that the room is in. \|<br>\| `hotel_room_id`<br><br>type: string \| Required.<br><br>Unique ID for the room. \|<br>\| `image`<br><br>type: array< object > \| Required.<br><br>Images of the room. A JSON array containing up to 21 records with the following fields:<br><br>* url: the URL string of the image<br>* tag: a JSON array of strings. Tags are optional and, if used, should describe what is in the image.<br><br>See [Image Object Parameters](https://developers.facebook.com/documentation/ads-commerce/marketing-api/hotel-ads/catalog#image-object). \|<br>\| `video`<br><br>type: array< object > \| Optional.<br><br>URLs and tags for videos to be used in your ads or in shops. Supports up to 30,000 videos on the catalog level. Tags are optional and, if used, should describe what is in the video.<br><br>The maximum video file size is 200 MB. Supported formats include .3g2, .3gp, .3gpp, .asf, .avi, .dat, .divx, .dv, .f4v, .flv, .gif, .m2ts, .m4v, .mkv, .mod, .mov, .mp4, .mpe, .mpeg, .mpeg4, .mpg, .mts, .nsv, .ogm, .ogv, .qt, .tod, .ts, .vob and .wmv<br><br>Example:<br><br>```
"video": [
      {
        "url":"http://example.com/video_1.mp4",
        "tag": [“Swimming pool”,”Gym”],
      }
]
```<br><br>NOTE: To delete video 1 if the hotel room has videos 1, 2, remove video 1 from the array:<br><br>```
[
  {
    "method": "UPDATE",
    "data": {
      "video": [
        {
          "url": "https://google.com/video_2.mp4",
          "tag": ["video_2"]
        }
      ]
    }
  }
]
```<br><br>To delete all videos, send an empty array:<br><br>```
[
  {
    "method": "UPDATE",
    "data": {
      "video": []
    }
  }
]
``` \|<br>\| `margin_level`<br><br>type: string \| Optional.<br><br>Indicator of the hotel&#039;s profitability; value from 1 to 10. \|<br>\| `name`<br><br>type: string \| Required.<br><br>Max size: 100.<br><br>Name of the room. \|<br>\| `url`<br><br>type: string \| Required.<br><br>Link to advertiser&#039;s site where someone can book the stay. \|<br>\| `status`<br><br>type: string \| Controls whether an item is active or archived in your catalog. Only active items can be seen by people in your ads, shops or any other channels. Supported values: `published`, `archived`. Items are active by default. Learn more about [archiving items](https://www.facebook.com/business/help/543317109402043?id=725943027795860).<br><br>Example: `published`<br><br>**Note:** This field was previously called visibility. While we still support the old field name, we recommend that you use the new name. \|<br><br>### Sample HOTEL_ROOM payload<br><br>```
{
 "applink": {
   "android_app_name": "Test Apps",
   "android_package": "com.test.apps",
   "android_url": "abc://dev/detail?no=1234",
   "ios_app_name": "com.test.app",
   "ios_app_store_id": "1234567890",
   "ios_url": "abc://def/detail?no=1234"
 },
 "base_price": "100 USD",
 "sale_price": "99 USD",
 "description": "Test Hotel Room Description",
 "name": "The Fancy Suite",
 "hotel_retailer_id": "1234",
 "hotel_room_id": "fancy_room_42",
 "image": [
   {
     "url": "https://facebook.com/1.jpg",
     "tags": [
       "main"
     ]
   }
 ],
 "video": [
   {
     "url": "https://facebook.com/1.mp4",
     "tags": [
       "main"
     ]
   }
 ],
 "margin_level": 9,
 "url": "https://facebook.com/hotels/1234/rooms/fancy_room_42",
 "status": "published"
}
``` |
| item_type=MEDIA_TITLE |
| ↳<br>\| Field \| Description \|<br>\| --- \| --- \|<br>\| `actor`<br><br>type: string \| Optional.<br><br>Character limit: 200.<br><br>An actor in a production such as a movie or TV show. Use commas to separate multiple names. \|<br>\| `applink`<br><br>type: object< string > \| Optional.<br><br>Links to mobile apps. A JSON object with the following keys:<br><br>* ios_url<br>* ios_app_store_id<br>* ios_app_name<br>* android_url<br>* android_package<br>* android_class<br>* android_app_name \|<br>\| `availability`<br><br>type: string \| Required.<br><br>Availability status: `in stock`, `out of stock`, `available for order`, `discontinued`. \|<br>\| `award`<br><br>type: string \| Optional.<br><br>Character limit: 200.<br><br>Any notable awards or nominations. Use commas to separate multiple items. \|<br>\| `brand`<br><br>type: string \| Optional.<br><br>Character limit: 100.<br><br>The streaming service or platform where this product is available. \|<br>\| `condition`<br><br>type: string \| Required.<br><br>Product condition: `new`, `refurbished`, or `used`. \|<br>\| `content_rating`<br><br>type: string \| Optional.<br><br>Official rating of the media title. Can be shown in ads. Required for restricted audiences in our [Advertising policies](https://www.facebook.com/policies/ads).<br><br>Example: `PG-13` \|<br>\| * `custom_label_0`<br>* `custom_label_1`<br>* `custom_label_2`<br>* `custom_label_3`<br>* `custom_label_4`<br><br>type: string \| Optional.<br><br>Character limit: 100.<br><br>Any relevant information you want to add to your ad creative such as in the headline. \|<br>\| * `custom_number_0`<br>* `custom_number_1`<br>* `custom_number_2`<br>* `custom_number_3`<br>* `custom_number_4`<br><br>type: integer \| Optional.<br><br>Any number you want to filter products by when you create product sets. Use whole numbers between 0 and 4294967295. Decimals and commas are not supported. \|<br>\| `description`<br><br>type: string \| Required.<br><br>Character limit: 9999.<br><br>A short and relevant description of the product such as a plot summary for a movie. Shown in ads. Use plain text and don't enter text in all capital letters. \|<br>\| `director`<br><br>type: string \| Optional.<br><br>Character limit: 200.<br><br>A director of a production like a movie or radio show. Use commas to separate multiple names.<br><br>Example: `John Doe,Jane Doe` \|<br>\| `duration`<br><br>type: string \| Optional.<br><br>The duration of the product. Use the format `HH-MM-SS` (ISO 8601 standard).<br><br>Example: `02-34-15` \|<br>\| `featuring`<br><br>type: string \| Optional.<br><br>Character limit: 200.<br><br>The names of key individuals involved in the production such as artists or producers. Use commas to separate multiple names. \|<br>\| `genres`<br><br>type: string \| Optional.<br><br>Character limit: 200.<br><br>The media genre such as action or comedy. Use commas to separate multiple genres.<br><br>Example: `Action,Fantasy` \|<br>\| `global_unique_identifier`<br><br>type: string \| Optional.<br><br>Any identifier that represents a work of film or television. For example: EIDR (Entertainment Identifier Registry).<br><br>Example: `10.5240/B752-5B47-DBBE-E5D4-5A3F-N` \|<br>\| `id`<br><br>type: string \| Required.<br><br>Character limit: 100.<br><br>A unique content ID for the item. Each content ID must appear only once in your catalog. To run Advantage+ catalog ads, this ID must exactly match the content ID for the same item in your Meta Pixel code. \|<br>\| `image_link`<br><br>type: string \| Required.<br><br>The URL for the main image of your product. Shown in ads. Must be in a supported format (JPG/PNG) and at least 500 x 500 pixels. \|<br>\| `link`<br><br>type: string \| Required.<br><br>The link to the specific product page on your business's website. Links must begin with `http://` or `https://`. \|<br>\| `media_category`<br><br>type: string \| Optional.<br><br>The content category of the product. Used to recommend your products to the right audiences. Supported values:<br><br>* `Movie`<br>* `Music`<br>* `TV Show`<br>* `Other` \|<br>\| `price`<br><br>type: string \| Optional.<br><br>The individual price of the media. Do not enter a subscription price. Format the price as a number followed by the 3-letter currency code (ISO 4217 standards). Use a period (`.`) as the decimal point.<br><br>Example: `9.99 USD` \|<br>\| `production_company`<br><br>type: string \| Optional.<br><br>Character limit: 200.<br><br>The production company or studio that created the product. Use commas to separate multiple items. \|<br>\| `release_date`<br><br>type: string \| Optional.<br><br>The release date of the product. Use the format `YYYY-MM-DD`.<br><br>Example: `2025-02-16` \|<br>\| `sale_price`<br><br>type: string \| Optional.<br><br>The discounted price if the item is on sale. Same format as `price`. A sale price is required if you want to use an overlay for discounted prices. \|<br>\| `title`<br><br>type: string \| Required.<br><br>Character limit: 200.<br><br>The title of the product. Shown in ads. \|<br><br>### Sample MEDIA_TITLE payload<br><br>```
{
  "id": "movie_001",
  "title": "The Great Adventure",
  "description": "An epic journey across the world",
  "link": "https://example.com/the-great-adventure",
  "image_link": "https://example.com/poster.jpg",
  "availability": "in stock",
  "condition": "new",
  "price": "14.99 USD",
  "brand": "StreamFlix",
  "media_category": "Movie",
  "genres": "Action,Adventure",
  "content_rating": "PG-13",
  "release_date": "2025-06-15",
  "director": "Jane Smith",
  "actor": "John Doe,Alice Johnson",
  "duration": "02-15-00",
  "custom_label_0": "Summer Release"
}
``` |
| item_type=STORE_PRODUCT_ITEM |
| ↳<br>\| Field \| Description \|<br>\| --- \| --- \|<br>\| `retailer_item_id`<br><br>type: string \| **Required**.<br><br>Retailer ID \|<br>\| `store_code`<br><br>type: string \| **Required**.<br><br>As given in [Store Locations](https://business.facebook.com/security/twofactor/reauth/?twofac_next=https%3A%2F%2Fbusiness.facebook.com%2Fbusiness_locations&type=avoid_bypass&app_id=0&save_device=0) \|<br>\| `price`<br><br>type: integer \| **Optional**.<br><br>Optional unless you want local pricing to populate in the ads. If the price is not available for a product in the local feed, then that product's ad will fetch its price from the online feed. \|<br>\| `quantity`<br><br>type: number \| **Optional**.<br><br>Quantity will be default to 0 if it's not provided, but items can still be delivered if availability is in stock. \|<br>\| `availability`  <br><br>Type: string \| **Optional**.<br><br>If not set, the item is assumed to be available (in stock) for the given store. If the item is not available in the given store, it doesn’t have to be provided in the local feed, but uploading it as “out of stock” availability may simplify “update-only” feed uploads.<br><br>Identifies availability status:<br><br>* `in stock`<br>* `out of stock` \|<br>\| `sale_price`  <br><br>Type: integer \| **Optional**.<br><br>Local sale price. \|<br>\| `sale_price_effective_date`  <br><br>Type: string \| **Optional**.<br><br>Date range over which the sale is valid. Format is 2020-02-28T12:00-0800/2020-05-08T12:00-0800, where / is the delimiter. You cannot give only a start or end date. You must give both. If you leave it blank, then the sale date will be permanent until the `sale_price` is changed to null. \|<br>\| `pickup_timeline`  <br><br>Type: integer \| **Optional**.<br><br>The timeline for when people can pick up the item. Can be “same day” or “next day". \|<br>\| `pickup_method`  <br><br>Type: string \| **Optional**.<br><br>The method by which people can pick up the item. Can be “buy,” “reserve” or “not supported". \| |
| item_type=VEHICLE |
| ↳<br>For supported fields for the `CREATE` and `UPDATE` methods for type VEHICLE, see [Auto Inventory Catalog Fields - Vehicle](https://developers.facebook.com/documentation/ads-commerce/marketing-api/auto-ads/guides/catalog#feedspec).<br><br>Supported fields are available for [Vehicle](https://developers.facebook.com/documentation/ads-commerce/marketing-api/auto-ads/reference#vehicle) and [Dealership](https://developers.facebook.com/documentation/ads-commerce/marketing-api/auto-ads/reference#dealership).<br><br>### Sample VEHICLE payload<br><br>```
{
 "vehicle_id": "i2 2017 Ford Fusion",
 "availability": "AVAILABLE",
 "make": "Ford",
 "model": "Fusion",
 "year": "2017",
 "mileage": {
   "value": "1500",
   "unit": "KM"
 },
 "image": [
   {
     "url": "http://www.facebook.com/teapic.jpg",
     "tag": [
       "Car"
     ]
   }
 ],
 "fuel_type": "gasoline",
 "body_style": "sedan",
 "drivetrain": "FWD",
 "vin": "1FADP5AU6DL536022",
 "condition": "EXCELLENT",
 "description": "Turbocharged! Gasoline!",
 "title": "SE Ford Certified and 6-Speed Automatic.",
 "price": "18000 USD",
 "exterior_color": "white",
 "sale_price": "16000 USD",
 "state_of_vehicle": "new",
 "longitude": "52.35",
 "latitude": "42.1",
 "address": {
   "addr1": "550 Auto Center Dr",
   "city": "Watsonville",
   "region": "CA",
   "country": "US",
   "postal_code": "96075"
 },
 "url": "http://www.example.com/test",
 "status": "archived"
}
``` |
| item_type=VEHICLE_OFFER |
| ↳<br>Refer to [Automotive Model Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/auto-ads/reference#vehicle-offers-feed-file) documentation for the list of supported fields. Please note that while in CSV and TSV feed files the ‘image’ field is spread across multiple columns (such as ‘image[0].url’, ‘image[0].tag’, ‘image[1].url’ etc.). In the /items_batch API endpoint there is no need to do so, instead the ‘image’ field is represented as a single JSON object (see example below).<br><br>### Sample VEHICLE_OFFER payload<br><br>```
{
 "vehicle_offer_id": "test_offer",
 "make": "Widget Motors",
 "availability": "AVAILABLE",
 "model": "Roller",
 "year": "2017",
 "offer_type": "finance",
 "title": "Buy this car now",
 "offer_description": "This is a great car",
 "url": "http://www.example.com/test",
 "offer_disclaimer": "Buy at your own risk",
 "image": [
   {
     "url": "http://www.facebook.com/teapic.jpg",
     "tag": [
       "Car"
     ]
   }
 ],
 "amount_percentage": 2,
 "amount_qualifier": "APR",
 "term_length": 36,
 "term_qualifier": "months",
 "downpayment": "1000 USD",
 "downpayment_qualifier": "due at signing + 1 month payment",
 "trim": "GT",
 "start_date": "2026-01-01T00:00:00+0000",
 "end_date": "2027-01-01T00:00:00+0000",
 "market_name": "EMEA",
 "comscore_market_codes": ["2079", "2080"],
 "generation": "4th gen",
 "transmission": "Automatic",
 "drivetrain": "FWD",
 "fuel_type": "gasoline",
 "body_style": "sedan",
 "status": "archived",
 "exterior_color": "white",
 "interior_color": "black",
 "interior_upholstery": "LEATHER"
}
``` |

### Deleting Catalog Items
When method=DELETE is used, you only need to pass the fields necessary to identify the catalog item that needs to be deleted.
| item_type | fields |
| --- | --- |
| PRODUCT_ITEM | id |
| DESTINATION | destination_id |
| FLIGHT | destination_airport, origin_airport |
| HOME_LISTING | home_listing_id |
| HOTEL | hotel_id |
| HOTEL_ROOM | hotel_retailer_id, hotel_room_id |
| STORE_PRODUCT_ITEM | retailer_item_id, store_code |
| VEHICLE | vehicle_id |
| VEHICLE_OFFER | vehicle_offer_id |

For example,

```
requests=[
    {
        "method":"DELETE",
        "data":{
         "destination_id": "abc321",
        }
    }
]
```

### Sample API Call {#sample-api-call}

[Try it in Graph Explorer](https://developers.facebook.com/tools/explorer/145634995501895/?method=POST&path=PASTE_CATALOG_ID_HERE%2Fitems_batch&version=v23.0&requests=[%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22method%22%3A%22UPDATE%22%2C%0A%20%20%20%20%20%20%22data%22%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%22unknown_field%22%3A%20%22unknown_field_value%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22batch_api_product_123%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22item_group_id%22%3A%20%22g1%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22price%22%3A%20%2214%20GBP%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22image%22%3A%20[%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22url%22%3A%20%22http%3A%2F%2Fwebsite.com%2Fimage4.jpg%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22tag%22%3A%20[%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22t1%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22t2%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20]%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22url%22%3A%20%22http%3A%2F%2Fwebsite.com%2Fimage5.jpg%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22tag%22%3A%20[%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22t1%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22t2%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20]%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20]%2C%0A%20%20%20%20%20%20%20%20%20%20%22additional_variant_attribute%22%3A%20%22Scent%3AFruity%2CFlavor%3AApple%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22age_group%22%3A%20%22adult%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22applink%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22android_url%22%3A%20%22a%3A%2F%2Fb%2Fc%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22android_package%22%3A%20%22android.topwidgets%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22android_app_name%22%3A%20%22TopWidgets%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22ios_url%22%3A%20%22d%3A%2F%2Fe%2Ff%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22ios_app_store_id%22%3A%20%22123456%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22ios_app_name%22%3A%20%22TopWidgets%22%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%22brand%22%3A%20%22Top%20Widgets%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22color%22%3A%20%22yellow%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22condition%22%3A%20%22new%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22custom_label_0%22%3A%20%22label1%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22custom_number_0%22%3A%202022%2C%0A%20%20%20%20%20%20%20%20%20%20%22description%22%3A%20%22Test%20description.%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rich_text_description%22%3A%20%22%3Cb%3ETest%3C%2Fb%3E%20%3Cu%3Edescription%3C%2Fu%3E.%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22disabled_capabilities%22%3A%20[%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22marketplace%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22b2c_marketplace%22%0A%20%20%20%20%20%20%20%20%20%20]%2C%0A%20%20%20%20%20%20%20%20%20%20%22fb_product_category%22%3A%20%22Apparel%20%26%20Accessories%20%3E%20Clothing%20%3E%20Suits%20%3E%20Tuxedos%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22gender%22%3A%20%22unisex%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22google_product_category%22%3A%20%22543586%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22gtin%22%3A%20%227798102151036%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22expiration_date%22%3A%20%222030-01-01%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22link%22%3A%20%22http%3A%2F%2Fwebsite.com%2Fproduct.html%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22importer_address%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22street1%22%3A%20%221%20Hacker%20Way%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22street2%22%3A%20%22Building%2018%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22city%22%3A%20%22Menlo%20Park%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22region%22%3A%20%22OK%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22postal_code%22%3A%20%2294025%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22country%22%3A%20%22US%22%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%22importer_name%22%3A%20%22Top%20Widgets%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22mobile_link%22%3A%20%22https%3A%2F%2Fm.topwidgets.com%2Fproducts%2Fbatch_api_product_123%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22quantity_to_sell_on_facebook%22%3A%2042%2C%0A%20%20%20%20%20%20%20%20%20%20%22material%22%3A%20%22stainless%20steel%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22mpn%22%3A%20%22twp123%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22ordering_index%22%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%22origin_country%22%3A%20%22JP%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22pattern%22%3A%20%22stripes%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22product_type%22%3A%20%22Widgets%20%3E%20Metal%20Widgets%20%3E%20Striped%20Metal%20Widgets%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22rating_count%22%3A%201002132%2C%0A%20%20%20%20%20%20%20%20%20%20%22sale_price%22%3A%20%2211%20GBP%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22sale_price_effective_date%22%3A%20%222025-11-01T12%3A00-0300%2F2025-12-01T00%3A00-0300%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22size%22%3A%20%22Small%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22shipping%22%3A%20%22US%3ACA%3AGround%3A9.99%20USD%2CUS%3ANY%3AAir%3A15.99%20USD%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%22Test%20Product%20Name%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22user_rating%22%3A%204.5%2C%0A%20%20%20%20%20%20%20%20%20%20%22vendor_id%22%3A%20%22marketplace_id_product_123%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22availability%22%3A%20%22in%20stock%22%2C%0A%20%20%20%20%20%20%20%20%20%20%22internal_label%22%3A%20[%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Literary%20Girl%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22Another%20tag%22%0A%20%20%20%20%20%20%20%20%20%20]%2C%0A%20%20%20%20%20%20%20%20%20%20%22video%22%3A%20[%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22url%22%3A%20%22https%3A%2F%2Fwebsite.com%2Fp123.mpg%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22tag%22%3A%20[%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22steel%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22widget%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20]%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20]%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A]&item_type=PRODUCT_ITEM)
| Updating the price, images and other properties of an item with item_type=PRODUCT_ITEM and id=‘batch_api_product_123’ |
| --- |
| Request |
| ↳<br><br>```
curl -i -X POST \
   https://graph.facebook.com/<catalog-id>/items_batch \
   -F access_token=PASS_VALID_API_TOKEN_HERE \
   -F 'requests=[
       {
           "method":"UPDATE",
           "data":{
               "unknown_field": "unknown_field_value",
               "id": "batch_api_product_123",
               "item_group_id": "g1",
               "price": "14 GBP",
               "image": [
                   {
                       "url": "http://example.com/image4.jpg",
                       "tag": [
                       "t1",
                       "t2"
                       ]
                   },
                   {
                       "url": "http://example.com/image5.jpg",
                       "tag": [
                       "t1",
                       "t2"
                       ]
                   }
               ],
               "additional_variant_attribute": "Scent:Fruity,Flavor:Apple",
               "age_group": "adult",
               "applink": {
                   "android_url": "a://b/c",
                   "android_package": "android.topwidgets",
                   "android_app_name": "TopWidgets",
                   "ios_url": "d://e/f",
                   "ios_app_store_id": "123456",
                   "ios_app_name": "TopWidgets"
               },
               "brand": "Top Widgets",
               "color": "yellow",
               "condition": "new",
               "custom_label_0": "label1",
               "custom_number_0": 2022,
               "description": "Test description.",
               "rich_text_description": "<b>Test</b> <u>description</u>.",
               "disabled_capabilities": [
                   "marketplace",
                   "b2c_marketplace"
               ],
               "fb_product_category": "Apparel & Accessories > Clothing > Suits > Tuxedos",
               "gender": "unisex",
               "google_product_category": "543586",
               "gtin": "7798102151036",
               "expiration_date": "2030-01-01",
               "link": "http://example.com/product.html",
               "importer_address": {
                   "street1": "1 Hacker Way",
                   "street2": "Building 18",
                   "city": "Menlo Park",
                   "region": "OK",
                   "postal_code": "94025",
                   "country": "US"
               },
               "importer_name": "Top Widgets",
               "mobile_link": "https://m.example.com/products/batch_api_product_123",
               "quantity_to_sell_on_facebook": 42,
               "material": "stainless steel",
               "mpn": "twp123",
               "ordering_index": 0,
               "origin_country": "JP",
               "pattern": "stripes",
               "product_type": "Widgets > Metal Widgets > Striped Metal Widgets",
               "rating_count": 1002132,
               "sale_price": "11 GBP",
               "sale_price_effective_date": "2025-11-01T12:00-0300/2025-12-01T00:00-0300",
               "size": "Small",
               "shipping": [
                   {
                       "shipping_country": "US",
                       "shipping_region": "CA",
                       "shipping_service": "Pick-up point",
                       "shipping_price_value": "4.90",
                       "shipping_price_currency": "USD"
                   },
                   {
                       "shipping_country": "US",
                       "shipping_region": "CA",
                       "shipping_service": "Home delivery",
                       "shipping_price_value": "7.90",
                       "shipping_price_currency": "USD"
                   }
               ],
               "title": "Test Product Name",
               "user_rating": 4.5,
               "vendor_id": "marketplace_id_product_123",
               "availability": "in stock",
               "internal_label": [
                   "Literary Girl",
                   "Another tag"
               ],
               "video": [
                   {
                       "url": "https://example.com/p123.mpg",
                       "tag": [
                       "steel",
                       "widget"
                       ]
                   }
               ]
           }
       }
   ]' \
   -F item_type=PRODUCT_ITEM
``` |
| Response |
| ↳<br><br>```
{
   "handles": [
"Acy_OJLm4aVJdxiRegHfiyhleq26r_CNVRc1wFGnSj1YpFC8azbIc-UscwUxuCWPJXPaSOcFZQZuMAccdE4wn816"
   ],
   "validation_status": [
       {
           "warnings": [
               {
                   "message": "Unrecognised field: A request for item batch_api_product_123 contains unrecognised field: 'unknown_field'"
               }
           ],
           "retailer_id": "batch_api_product_123"
       }
   ]
}
``` |

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/local_service_businesses.md -->

## Product Catalog Local Service Businesses

### Reading

The latest list of all local service businesses connected to the product catalog

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/local_service_businesses HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/local_service_businesses',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/local_service_businesses",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/local_service_businesses",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/local_service_businesses"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Flocal_service_businesses&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `bulk_pagination`<br><br>*boolean* | bulk_pagination<br> |
| `filter`<br><br>*A JSON-encoded rule* | filter<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {},
"summary": {}
}
```

###### data

A list of LocalServiceBusiness nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total_count).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*unsigned int32* | Total list of local service businesses fetched by this query<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/localized_items_batch.md -->

## Product Catalog Localized Items Batch

### Reading

You can't perform this operation on this endpoint.

### Creating

#### /{product_catalog_id}/localized_items_batch
You can make a POST request to *localized_items_batch* edge from the following paths:

- [/{product_catalog_id}/localized_items_batch](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/localized_items_batch)

When posting to this edge, no Graph object will be created.

The [sample API call](#sample-api-call) provides an example of how this API endpoint works in practice.

#### Limitations

- This endpoint does not create new catalog items. All requests should contain a data JSON object that contains an ID for an existing catalog item.

- The `requests` param can contain up to 5,000 items.

- For each catalog, you can make a number of calls per minute defined by the [Catalog Batch](https://developers.facebook.com/docs/graph-api/overview/rate-limiting#catalog) business use case rate limit formula. If that's not sufficient, please contact us.

- Error code 1 with message "*Please reduce the amount of data you're asking for, then retry your request*" indicates that the size of the data (in bytes) received in API request is too large. To fix this issue, please reduce the number of items in the batch and try again. This will ensure that the request is within the acceptable size limits and can be processed successfully.

##### Parameters

| Parameter | Description |
| --- | --- |
| `item_type`<br><br>*string* | The type of items in the request. Needs to be one of the values listed [here](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/catalog-item-types). Note that the information specified in this field is NOT a [product category](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/product-categories) (a concept used for item_type=PRODUCT_ITEM).<br><br>**[required]**<br> |
| `requests`<br><br>*JSON object* | A JSON array of up to 5000 records, each containing 3 fields:<br><br><br>• method: one of CREATE/UPDATE/DELETE<br>• data: a map containing product field names and the corresponding values.<br>The list of fields supported in product localization is given [here](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/localized-catalog/supported-fields).<br>The descriptions of the fields can be found on the [/items_batch](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/items_batch) endpoint documentation page.<br><br>**Note**: `price`, `sale_price`, `unit_price`, `base_price`, `status` (visibility), and `availability` must only be provided in a country feed. These fields cannot be provided in a language feed. This helps ensure customers see the correct localized product data.<br>• When the method is CREATE, this object must contain all the required fields for the specified item_type.<br>• When the method is UPDATE, it can contain any fields.<br>• A request with method=DELETE is expected to contain only the 'id' field<br><br>• localization: a map containing the following two values:<br>• type:  Supported values: `LANGUAGE`, `COUNTRY`, or `LANGUAGE_AND_COUNTRY`<br>• value: Can be any valid language or county code, depending on the selected type. Note that for `LANGUAGE_AND_COUNTRY`, the values should be separated by a '\|'<br>character, for example, `en_XX\|US`. See a list of language and country codes [here](https://www.facebook.com/business/help/2144286692311411?id=725943027795860).<br><br><br><br>The [example call](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/localized_items_batch#sample-api-call) below demonstrates how the request parameter can be passed<br><br>**[required]**<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
handles:  List  [string],
validation_status:  List  [ Struct  {
errors:  List  [ Struct  {
message: string,
}],
retailer_id: string,
warnings:  List  [ Struct  {
message: string,
}],
}],
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 80014 | There have been too many calls for the batch uploads to this catalog account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#catalog. |
| 200 | Permissions error |
| 100 | Invalid parameter |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

### Response Payload Specification

#### For a Successful Call

| Field | Description |
| --- | --- |
| handles | An array of strings, containing either 0 or 1 value. An empty array means that nothing has been ingested. This value can be passed to the [/check_batch_request_status](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/check_batch_request_status) endpoint to get the status of the request's processing. |
| validation_status | An array of `ValidationStatus` objects (see below) |

A `ValidationStatus` object has the following fields:
| Field | Description |
| --- | --- |
| retailer_id | Row identifier from one of the records in the ‘requests’ parameter |
| errors | An array of `Error` objects (see below) |
| warnings | An array of `Error` objects (see below) |

An `Error` object has the following structure
| Field | Description |
| --- | --- |
| message | A human-readable string providing an explanation of what is the issue with provided catalog item data. |

#### For a Failed Call
Failed calls return the standard [Error Payload](https://developers.facebook.com/docs/graph-api/guides/error-handling).  

### Sample API Call {#sample-api-call}

[Try it in Graph Explorer](https://developers.facebook.com/tools/explorer/?method=POST&path=PASTE_CATALOG_ID_HERE%2Flocalized_items_batch&requests=[%0A%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%22method%22%3A%22UPDATE%22%2C%0A%20%20%20%20%20%20%20%20%20%22data%22%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%22wrong_field_name%22%3A%20%22Wrong%20field%20value%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%22id%22%3A%20%22batch_api_product_123%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%22title%22%3A%20%22Produkt%22%2C%0A%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%22localization%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%22type%22%3A%20%22language%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%22value%22%3A%20%22pl_PL%22%0A%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%7D%0A%20]&item_type=PRODUCT_ITEM)  

| A call that updates the Polish version of the title for the item with id=batch_api_product_123 |
| --- |
| Request |
| ↳<br><br>```
curl -i -X POST \
https://graph.facebook.com/<CATALOG_ID>/localized_items_batch \
 -F access_token=<TOKEN> \
 -F 'requests=[
     {
         "method":"UPDATE",
         "data":{
             "wrong_field_name": "Wrong field value",
             "id": "batch_api_product_123",
             "title": "Produkt",
         },
         "localization": {
           "type": "language",
           "value": "pl_PL"
         }
     }
 ]' \
 -F item_type=PRODUCT_ITEM
``` |
| Response |
| ↳<br><br>```
{
 "handles": [
   "AcxH3oMDLrW0p4Q06hQCtQS5rvp-98SMf7urnOw7W53XctPHXB-MqkQKux1HPyzkC-pcvwuQdXswOfABI8GsCDHa"
 ],
 "validation_status": [
   {
     "warnings": [
       {
         "message": "Unrecognised field: A request for item batch_api_product_123 contains unrecognised field: 'wrong_field_name'"
       }
     ],
     "retailer_id": "batch_api_product_123"
   }
 ]
}
``` |

### Learn More

- Send Product Updates - `/{catalog_id}/items_batch`

- [Product Catalog Items Batch, Reference](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/items_batch)

- [Supported fields](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/items_batch#supported-fields)

- Check Batch Request Status - `/{catalog_id}/check_batch_request_status`

- [Product Catalog Check Batch Request Status, Reference](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/check_batch_request_status)

- [Catalog](https://developers.facebook.com/documentation/ads-commerce/catalog)

- [Product Catalog, Reference](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog)

- [Localized Catalog Setup](https://developers.facebook.com/documentation/ads-commerce/catalog/localized-catalog/localized-catalog-setup), [Supported Fields — Localized Catalogs](https://developers.facebook.com/documentation/ads-commerce/catalog/guides/localized-catalog/supported-fields)

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/marketplace_partner_signals.md -->

## Product Catalog Marketplace Partner Signals

### Reading

You can't perform this operation on this endpoint.

### Creating

You can't perform this operation on this endpoint.

### Updating

#### /{product_catalog_id}/marketplace_partner_signals
You can update a [ProductCatalog](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog) by making a POST request to [/{product_catalog_id}/marketplace_partner_signals](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/marketplace_partner_signals).

##### Parameters

| Parameter | Description |
| --- | --- |
| `conversion_type`<br><br>*enum {ATTRIBUTED, IN_SESSION}* | conversion_type<br><br><br>Identifier on whether the specified event happened within the original session of the user landing on the partner's page (IN_SESSION) or within the attribution window after the initial session (ATTRIBUTED)<br> |
| `event_id`<br><br>*string* | event_id<br><br><br>Unique identifier for conversion events. If there are multiple conversion events tied to a single `mp_clid`, this field will be used to differentiate between those events<br> |
| `event_name`<br><br>*enum {PURCHASE, ADD_TO_CART, VIEW_ITEM, OFFER_SUBMITTED, PURCHASE_VIA_OFFER, TEST}* | event_name<br><br><br>`TEST` events can be used to send test data to confirm API functionality that Marketplace will ignore<br><br>**[required]**<br> |
| `event_source_url`<br><br>*string* | event_source_url<br> |
| `event_time`<br><br>*datetime/timestamp* | event_time<br><br>**[required]**<br> |
| `offer_data`<br><br>*JSON object* | offer_data<br><br><br>`original_price` *float*<br>original_price<br><br>**[required]**<br><br><br>`offer_price` *float*<br>offer_price<br><br>**[required]**<br><br><br>`currency` *string*<br>currency<br><br>**[required]**<br> |
| `order_data`<br><br>*JSON object* | order_data<br><br><br>`order_details` *array<JSON object>*<br><br>**Default value: **`[]`<br>order_details<br><br><br>`item_price` *float*<br>item_price<br><br>**[required]**<br><br><br>`item_quantity` *int64*<br>item_quantity<br><br>**[required]**<br><br><br>`item_id` *string*<br>item_id<br><br>**[required]**<br><br><br>`currency` *string*<br>currency<br><br>**[required]**<br><br><br>`order_total` *float*<br>order_total<br><br>**[required]**<br> |
| `user_data`<br><br>*JSON object* | user_data<br><br>**[required]**<br><br><br>`mp_clid` *string*<br>mp_clid<br><br>**[required]**<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
success: bool,
validation_status:  List  [ Struct  {
errors:  List  [ Struct  {
message: string,
}],
warnings:  List  [ Struct  {
message: string,
}],
}],
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/pricing_variables_batch.md -->

## Product Catalog Pricing Variables Batch

Batch upload pricing variables for items in a catalog. Used with Dynamic Ads for Travel, see [Dynamic Ads for Travel, Catalog Setup](https://developers.facebook.com/documentation/ads-commerce/marketing-api/travel-ads). To get status of batch process:

```
curl -G \
-d "handle=<HANDLE>" \
-d "access_token=<ACCESS_TOKEN>" \
https://graph.facebook.com/<API_VERSION>/<PRODUCT_CATALOG_ID>/pricing_variables_batch
```

**Warning:** - If you want to update a specific pricing variable, please make sure you provide a complete set of information in `<Result>`.

- If you want to delete a specific pricing variable, specify the combination **without** providing any price-related info such as `<Baserate>`, `<Tax>`, `<OtherFees>`.

To delete one of the pricing variables for `hotel_1`, with check in 2016-05-01 for 1 night:

In `pricings_data_xml.xml`, provide:

```
<?xml version="1.0" encoding="UTF-8"?>
<Transaction>
  <Result>
    <Property>hotel_1</Property>
    <Checkin>2016-05-01</Checkin>
    <Nights>1</Nights>
  </Result>
</Transaction>
```

then make a HTTP POST to pricing_variables_batch:

```
curl \
-X POST \
-F "standard=google" \
-F file=@pricings_data_xml.xml \
-F "access_token=<ACCESS_TOKEN>" \
https://graph.facebook.com/<API_VERSION>/<PRODUCT_CATALOG_ID>/pricing_variables_batch
```

### Reading

pricing_variables_batch

#### Example

Update one of the pricing variables for `hotel_1` with check in 2016-05-01 for 3 nights and delete one of the pricing variables for`hotel_2` with check in 2016-05-05 for 1 night:

In `pricings_data_xml.xml`, provide:

```
<?xml version="1.0" encoding="UTF-8"?>
<Transaction>
  <Result>
    <Property>hotel_1</Property>
    <Checkin>2016-05-01</Checkin>
    <Nights>3</Nights>
    <RoomBundle>
      <RoomID>single</RoomID>
      <Baserate currency="USD">189</Baserate>
      <Tax currency="USD">18.64</Tax>
      <OtherFees currency="USD">10.00</OtherFees>
    </RoomBundle>
  </Result>
  <Result>
    <Property>hotel_2</Property>
    <Checkin>2016-05-05</Checkin>
    <Nights>1</Nights>
  </Result>
</Transaction>
```

then make a HTTP POST to pricing_variables_batch:

```
curl \
-X POST \
-F "standard=google" \
-F file=@pricings_data_xml.xml \
-F "access_token=<ACCESS_TOKEN>" \
https://graph.facebook.com/<API_VERSION>/<PRODUCT_CATALOG_ID>/pricing_variables_batch
```

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/pricing_variables_batch HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/pricing_variables_batch',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/pricing_variables_batch",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/pricing_variables_batch",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/pricing_variables_batch"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fpricing_variables_batch&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `handle`<br><br>*string* | A unique handle of a batch request.<br><br>**[required]**<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of ProductCatalogPricingVariablesBatch nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

#### /{product_catalog_id}/pricing_variables_batch
You can make a POST request to *pricing_variables_batch* edge from the following paths:

- [/{product_catalog_id}/pricing_variables_batch](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/pricing_variables_batch)

When posting to this edge, a [ProductCatalogPricingVariablesBatch](https://developers.facebook.com/docs/graph-api/reference/product-catalog-pricing-variables-batch) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `file`<br><br>*file* | Content of the file to be uploaded<br> |
| `password`<br><br>*string* | If used url then the password for the file<br> |
| `standard`<br><br>*enum{google}* | Uploaded file export standard<br><br>**[required]**<br> |
| `update_only`<br><br>*boolean* | **Default value: **`false`<br>If true, rows missing in the file will not be deleted from Facebook database (only new and updated rows are applied)<br> |
| `url`<br><br>*URL* | The url of the file to be downloaded by our system<br> |
| `username`<br><br>*string* | If used url then the username for the file<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
handles:  List  [string],
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/product_feeds.md -->

## Product Catalog Product Feed

Products feeds associated with a catalog. See [Dynamic Ads, Catalog Setup](https://developers.facebook.com/documentation/ads-commerce/catalog). For example, get a list of all product feeds:

```
curl -G \
-d "access_token=<ACCESS_TOKEN>" \
https://graph.facebook.com/<API_VERSION>/<PRODUCT_CATALOG_ID>/product_feeds
```

Or get a list of product items in a product feed:

```
curl -G \
-d "access_token=<ACCESS_TOKEN>" \
https://graph.facebook.com/<API_VERSION>/<PRODUCT_FEED_ID>/products
```

### Reading

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/product_feeds HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/product_feeds',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/product_feeds",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/product_feeds",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/product_feeds"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fproduct_feeds&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

This endpoint doesn't have any parameters.

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [ProductFeed](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-feed) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |
| 80009 | There have been too many calls to this Catalog account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting. |

### Creating

#### /{product_catalog_id}/product_feeds
You can make a POST request to *product_feeds* edge from the following paths:

- [/{product_catalog_id}/product_feeds](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/product_feeds)

When posting to this edge, a [ProductFeed](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-feed) will be created.

##### Example

#### HTTP
```
POST /v25.0/{product-catalog-id}/product_feeds HTTP/1.1
Host: graph.facebook.com

name=Test+Feed&schedule=%7B%22interval%22%3A%22DAILY%22%2C%22url%22%3A%22http%3A%2F%2Fwww.example.com%2Fsample_feed.tsv%22%2C%22hour%22%3A%2222%22%7D
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->post(
    '/{product-catalog-id}/product_feeds',
    array (
      'name' => 'Test Feed',
      'schedule' => '{"interval":"DAILY","url":"http://www.example.com/sample_feed.tsv","hour":"22"}',
    ),
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/product_feeds",
    "POST",
    {
        "name": "Test Feed",
        "schedule": "{\"interval\":\"DAILY\",\"url\":\"http:\/\/www.example.com\/sample_feed.tsv\",\"hour\":\"22\"}"
    },
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
Bundle params = new Bundle();
params.putString("name", "Test Feed");
params.putString("schedule", "{\"interval\":\"DAILY\",\"url\":\"http://www.example.com/sample_feed.tsv\",\"hour\":\"22\"}");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/product_feeds",
    params,
    HttpMethod.POST,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
NSDictionary *params = @{
  @"name": @"Test Feed",
  @"schedule": @"{\"interval\":\"DAILY\",\"url\":\"http://www.example.com/sample_feed.tsv\",\"hour\":\"22\"}",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/product_feeds"
                                      parameters:params
                                      HTTPMethod:@"POST"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

#### cURL
```
curl -X POST \
  -F 'name="Test Feed"' \
  -F 'schedule={
       "interval": "DAILY",
       "url": "http://www.example.com/sample_feed.tsv",
       "hour": "22"
     }' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/{product-catalog-id}/product_feeds
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=POST&path=%7Bproduct-catalog-id%7D%2Fproduct_feeds%3Fname%3DTest%2BFeed%26schedule%3D%257B%2522interval%2522%253A%2522DAILY%2522%252C%2522url%2522%253A%2522http%253A%252F%252Fwww.example.com%252Fsample_feed.tsv%2522%252C%2522hour%2522%253A%252222%2522%257D&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `country`<br><br>*string* | **Default value: **`"US"`<br>Two letter country code where the products can be sold<br> |
| `default_currency`<br><br>*ISO 4217 Currency Code* | **Default value: **`USD`<br>The default currency used by provided feed if the currency is not specified in the feed file<br> |
| `deletion_enabled`<br><br>*boolean* | **Default value: **`true`<br>Default value: `false` (to be changed to `true` .from API v2.5)<br>When `true`, this will remove products from a catalog that are no longer present in a feed. When `false`, uploading a product feed is additive and products will remain in the catalog even if they are removed from a feed. Once enabled, we do not allow this field to be disabled.<br> |
| `delimiter`<br><br>*enum {AUTODETECT, BAR, COMMA, TAB, TILDE, SEMICOLON}* | **Default value: **`AUTODETECT`<br>Product feed delimiter<br> |
| `encoding`<br><br>*enum {AUTODETECT, LATIN1, UTF8, UTF16LE, UTF16BE, UTF32LE, UTF32BE}* | **Default value: **`AUTODETECT`<br>The character encoding used by provided feed<br> |
| `feed_type`<br><br>*enum {ACTIVITY, APP_AND_SOFTWARE, ARTICLE_AND_PUBLICATION, AUTOMOTIVE_MODEL, COLLECTION, DESTINATION, FLIGHT, HOME_LISTING, HOTEL, HOTEL_ROOM, LOCAL_INVENTORY, MEDIA_TITLE, OFFER, PRODUCT_RATINGS_AND_REVIEWS, PRODUCTS, SERVICE, TRANSACTABLE_ITEMS, VEHICLE_OFFER, VEHICLES}* | Type of the feed. Decides type of catalog item this feed will create<br> |
| `file_name`<br><br>*string* | The name of the product feed. .tsv, .xml or compressed files (zip, gzip and bz2) are supported<br> |
| `ingestion_source_type`<br><br>*enum {PRIMARY_FEED, SUPPLEMENTARY_FEED}* | ingestion_source_type to decide type of feed i.e. primary or supplementary<br> |
| `item_sub_type`<br><br>*enum {APPLIANCES, BABY_FEEDING, BABY_TRANSPORT, BEAUTY, BEDDING, CAMERAS, CELL_PHONES_AND_SMART_WATCHES, CLEANING_SUPPLIES, CLOTHING, CLOTHING_ACCESSORIES, COMPUTERS_AND_TABLETS, DIAPERING_AND_POTTY_TRAINING, ELECTRONICS_ACCESSORIES, FURNITURE, HEALTH, HOME_GOODS, JEWELRY, NURSERY, PRINTERS_AND_SCANNERS, PROJECTORS, SHOES_AND_FOOTWEAR, SOFTWARE, TOYS, TVS_AND_MONITORS, VIDEO_GAME_CONSOLES_AND_VIDEO_GAMES, WATCHES}* | The sub type of items to be uploaded by this feed<br> |
| `migrated_from_feed_id`<br><br>*numeric string* | Used to split an original feed into multiple new feeds, `migrated_from_feed_id` denotes the original feed's ID. Setting this field ensures that items from an original field can be migrated to a new one, without the need of deletion.<br><br>This field is generally used when splitting a large feed into multiple smaller feeds.<br><br>Example:<br><br><br>• You have a large feed called Feed A and want to split it.<br>• You create a new feed called Feed B and specify Feed A's ID under `migrated_from_feed_id`.<br>• You upload Feed B's catalog information, including the products you want to add to Feed B.<br>• The items from feed A have been moved to feed B. Going forward, you do not need to specify those items in Feed A and they can be removed from feed A.<br><br><br>**Guidance on splitting feeds that exceed file size or item limit**<br><br><br>If your data feed contains more items or exceeds the file size, split it into multiple feeds and upload them separately. You can upload as many data feeds as you want, but they must all contain different items.<br><br><br>You can split the data feed into smaller feeds using `migrated_from_feed_id`.<br><br><br>Steps:<br><br><br>• Create a new data feed file with items that need to be transferred from the old feed.<br>• Create a new data feed using `migrated_from_feed_id`.<br>• The ownership of items will be transferred from the old feed to the new feed when the first session completes on the new feed file.<br>• Subsequently, the items can be removed from the old feed. And the items must be managed by the new feed.<br><br><br>Example of how to create a new feed using `migrated_from_feed_id`:<br><br><br>`curl -X POST \ -F 'name="New Feed"' \ -F 'schedule={ "interval": "DAILY", "url": "http://www.example.com/new_feed_file.csv", "hour": "22" }' \ -F 'migrated_from_feed_id=<OLD_FEED_ID>' \ -F 'access_token=<ACCESS_TOKEN>' \ https://graph.facebook.com/v22.0/{product-catalog-id}/product_feeds`<br><br><br>5. Additionally, ensure that once the data feeds are split into a new, smaller feed, all item updates come from the respective new feed.<br> |
| `name`<br><br>*UTF-8 encoded string* | User specified name for the feed<br> |
| `override_type`<br><br>*enum {LANGUAGE, COUNTRY, VERSION, CATALOG_SEGMENT_CUSTOMIZE_DEFAULT, LANGUAGE_AND_COUNTRY, BATCH_API_LANGUAGE_OR_COUNTRY, SMART_PIXEL_LANGUAGE_OR_COUNTRY, LOCAL}* | If this is a secondary feed, this specifies the override type of the feed<br> |
| `override_value`<br><br>*string* | Override value of the feed dependent on the override type (country or language).<br> |
| `primary_feed_ids`<br><br>*array<numeric string>* | primary_feed_ids to which a supplementary feed should be linked<br> |
| `quoted_fields_mode`<br><br>*enum{autodetect, on, off}* | **Default value: **`autodetect`<br>Whether or not there will be quotes around each field, only for TSV feeds. If this field is provided, we use it instead of the parameter quoted_fields<br> |
| `rules`<br><br>*list<JSON-encoded string>* | A list of rules applied to feed uploads<br> |
| `schedule`<br><br>*JSON-encoded string* | A JSON-encoded string representing a recurrent schedule for fetching the feed. Default timezone is America/Los_Angeles. Learn more about [feed schedules](https://developers.facebook.com/docs/marketing-api/reference/product-feed-schedule)<br> |
| `selected_override_fields`<br><br>*array<string>* | Selected Override Fields of the feed, written as a list of fields which should be processed from the feed file.  From whiltelisted_properties<br> |
| `update_schedule`<br><br>*JSON-encoded string* | The configuration for fetching updates to a feed in a recurrent manner. The uploads would only update the items in the feed or create new ones. No items would be deleted. This is useful for sending `price` and `availability` updates for selected items in the feed. Learn more about fields in a [feed schedule](https://developers.facebook.com/docs/marketing-api/reference/product-feed-schedule)<br> |
| `use_case`<br><br>*enum {CREATOR_ASSET}* | Allow advertiser to pass creator_asset as the new use_case of the feed<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *id* in the return type.

```
Struct  {
id: numeric string,
errors:  List  [ Struct  {
error_subcode: string,
invalid_attribute: string,
error_message: string,
}],
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/product_groups.md -->

## Product Catalog Product Groups

### Reading

Get product group from the catalog

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/product_groups HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/product_groups',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/product_groups",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/product_groups",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/product_groups"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fproduct_groups&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

This endpoint doesn't have any parameters.

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {},
"summary": {}
}
```

###### data

A list of [ProductGroup](https://developers.facebook.com/docs/marketing-api/reference/product-group) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | Total number of objects on this edge<br><br><br>**[default]**<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/product_sets.md -->

## Product Catalog Product Sets

### Reading

Product sets that are in the Catalog

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/product_sets HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/product_sets',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/product_sets",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/product_sets",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/product_sets"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fproduct_sets&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `ancestor_id`<br><br>*numeric string* | Filters out only product sets which are descendant of the specified product set<br> |
| `has_children`<br><br>*boolean* | Filters out based on if the product set has any child<br> |
| `parent_id`<br><br>*numeric string* | Filters out only Product Sets which are direct children of the specified parent in the hierarchy (0 means "root Product Sets")<br> |
| `retailer_id`<br><br>*string* | Filters out based on the product set's retailer id<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {},
"summary": {}
}
```

###### data

A list of [ProductSet](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-set) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | Total number of objects on this edge<br><br><br>**[default]**<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |
| 80009 | There have been too many calls to this Catalog account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting. |

### Creating

#### /{product_catalog_id}/product_sets
You can make a POST request to *product_sets* edge from the following paths:

- [/{product_catalog_id}/product_sets](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/product_sets)

When posting to this edge, a [ProductSet](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-set) will be created.

##### Example

#### HTTP
```
POST /v25.0/<PRODUCT_CATALOG_ID>/product_sets HTTP/1.1
Host: graph.facebook.com

name=Test+Set&filter=%7B%22product_type%22%3A%7B%22i_contains%22%3A%22shirt%22%7D%7D
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->post(
    '/<PRODUCT_CATALOG_ID>/product_sets',
    array (
      'name' => 'Test Set',
      'filter' => '{"product_type":{"i_contains":"shirt"}}',
    ),
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/<PRODUCT_CATALOG_ID>/product_sets",
    "POST",
    {
        "name": "Test Set",
        "filter": "{\"product_type\":{\"i_contains\":\"shirt\"}}"
    },
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
Bundle params = new Bundle();
params.putString("name", "Test Set");
params.putString("filter", "{\"product_type\":{\"i_contains\":\"shirt\"}}");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/<PRODUCT_CATALOG_ID>/product_sets",
    params,
    HttpMethod.POST,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
NSDictionary *params = @{
  @"name": @"Test Set",
  @"filter": @"{\"product_type\":{\"i_contains\":\"shirt\"}}",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/<PRODUCT_CATALOG_ID>/product_sets"
                                      parameters:params
                                      HTTPMethod:@"POST"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

#### cURL
```
curl -X POST \
  -F 'name="Test Set"' \
  -F 'filter={
       "product_type": {
         "i_contains": "shirt"
       }
     }' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/<PRODUCT_CATALOG_ID>/product_sets
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=POST&path=%3CPRODUCT_CATALOG_ID%3E%2Fproduct_sets%3Fname%3DTest%2BSet%26filter%3D%257B%2522product_type%2522%253A%257B%2522i_contains%2522%253A%2522shirt%2522%257D%257D&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `filter`<br><br>*A JSON-encoded rule* | Filter rules to define a product set (max length: 500 KiB)<br> |
| `metadata`<br><br>*JSON object* | Product set metadata, which can be used for creating product collections<br><br><br>`cover_image_url` *URI*<br>cover_image_url<br><br><br>`description` *string*<br>description<br><br><br>`external_url` *URI*<br>external_url<br><br><br>`external_url_handle` *string*<br>external_url_handle<br> |
| `name`<br><br>*UTF-8 encoded string* | Name of the product set<br><br>**[required]**<br> |
| `publish_to_shops`<br><br>*array<JSON object>* | Shop ids where this product set should be published as collection.<br><br><br>`shop_id` *numeric string*<br>shop_id<br><br><br>`ordering_index` *int64*<br>ordering_index<br> |
| `retailer_id`<br><br>*UTF-8 encoded string* | External product set retailer id<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *id* in the return type.

```
Struct  {
id: numeric string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 10803 | Product set with the same filters already exists |
| 100 | Invalid parameter |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 415 | Two factor authentication required. User have to enter a code from SMS or TOTP code generator to pass 2fac. This could happen when accessing a 2fac-protected asset like a page that is owned by a 2fac-protected business manager. |
| 190 | Invalid OAuth 2.0 Access Token |
| 200 | Permissions error |
| 80009 | There have been too many calls to this Catalog account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting. |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

### Filter Rules

Creating a product set with an empty `filter` parameter indicates that all items in the product catalog should be in the set. Each rule is a JSON-encoded string. An empty `filter` parameter can be specified using either an empty parameter value or an empty JSON object, `{}`.

**Recommendation:** Query with content type `application/json`.  

#### Limitations

* If the filter rules you set result in an empty product set, ads tied to this product set will not deliver.
* The `contains` operators can only be used for string matching when creating product sets. For `enum` values use the `eq` operators.
* Filter operators are not case sensitive. However, `i_*` operators can still be used.
* You can't use non-English Unicode characters for filters in labels.

**Warning:** For a full list of limitations and examples, along with useful tips about how to use punctuation characters to create and manage product sets,  [see this Business Help Center article](https://www.facebook.com/business/help/741923962861190)

Filter rules are made up of the following fields and operators:

#### Fields

| Field | Description |
| --- | --- |
| `age_group` | The demographic of an item. There are only 5 accepted values: `newborn`, `infant`, `toddler`, `kids`, and `adult`. |
| `agent_fb_page_id` | Unique ID of the agent. |
| `availability` | The availability of the product item, home listing, or vehicle. Predefined values for  **products**: `preorder`, `in stock`, `out of stock`, and `available for order`. Supported values for **dynamic ads**: `for_sale`, `for_rent`, `sale_pending`, `recently_sold`, `off_market`, `available_soon`. Supported value for **Marketplace**: `for_rent`. Supported values for **vehicles**: `available`, `not_available`. Note: Vehicles that are unavailable in an ad are not visible to public. |
| `base_price_amount` | The base price per night for a hotel. You must specify the value with currency. `base_price_amount` is the value of `base_price`. `base_price_currency` is the currency for the `base_price`. |
| `body_style` | The body style of a vehicle. Supported values for Marketplace and dynamic ads: `CONVERTIBLE`, `COUPE`, `CROSSOVER`, `HATCHBACK`, `MINIVAN`, `TRUCK`, `SEDAN`, `SMALL_CAR`, `SUV`, `VAN`, `WAGON`, `OTHER`. |
| `brand` | The brand of a product item or hotel. |
| `category` | The category of the product item. |
| `city` | The city where a hotel, destination, automobile dealership, or home listing is located. |
| `city_id` | The city ID of the product item. |
| `city_page_id` | The value to use in a deep link URL (`template_URL`) in ad creative. |
| `color` | Type: string. The color of an item. |
| `condition` | The condition of a product item or vehicle. Supported values for products: `new`, `refurbished`, and `used`. Supported values for vehicles: `Excellent`, `Good`, `Fair`, `Poor`, `Other`. |
| `country` | The country where a hotel, home listing, automobile dealership, or destination is located. |
| `currency` | The currency abbreviation for an item's, hotel's, home listing's, automobile dealership's, or destination's price. |
| `custom_label_0` | The value of a custom label of a product item, hotel, destination, vehicle, or home listing. |
| `custom_label_1` | The value of a custom label of a product item, hotel, or destination. |
| `custom_label_2` | The value of a custom label of a product item, hotel, or destination. |
| `custom_label_3` | The value of a custom label of a product item, hotel, or destination. |
| `custom_label_4` | The value of a custom label of a product item, hotel, or destination. |
| `date_first_on_lot` | The date a vehicle first arrived at the dealership. Used to indicate the inventory age. Should be in _yyyy-mm-dd_ format. Example: `2018-09-05` |
| `date_first_on_lot_time` | The date and time a vehicle first arrived at the dealership. |
| `days_on_market` | The number of days a home listing is on the open market. |
| `dealer_communication_channel` | The method with which an automobile dealer will be contacted by a buyer. Supported values: `CHAT` or `LEAD_FORM`. `LEAD_FORM` is subject to regional availability: when unavailable, every listing is forced to `CHAT`, irregardless of the value entered. |
| `dealer_id` | The alphanumeric ID of an automobile dealership. |
| `dealer_name` | The name of the automobile dealership. |
| `drivetrain` | The vehicle's drivetrain. Supported values: `4X2`, `4X4`, `AWD`, `FWD`, `RWD`, `Other`. |
| `description` | The description of a flight route, home listing, or destination. |
| `destination_airport` | The IATA code for the destination. Supports airport and city IATA code. Use IATA Code Search to validate IATA codes. To improve performance, avoid using a space for this unique ID. |
| `destination_city` | The name of the destination city. Example: `New York` |
| `destination_id` | The unique ID for a destination within a catalog. This ID will be matched with any `content_ids` provided in your `destination` app and pixel events. |
| `exterior_color` | The exterior color of a vehicle |
| `feed_id` | The ID of the product feed from which the item came. |
| `flight_id` | The defined ID for a flight. |
| `fuel_type` | The type of fuel designated for a vehicle. Supported values: `DIESEL`, `ELECTRIC`, `GASOLINE`, `FLEX`, `HYBRID`, `OTHER`. |
| `furnish_type` | The type of furnishing available for a home listing: `furnished`, `unfurnished`, `semi-furnished`. |
| `gender` | The gender of the product item. There are only 3 accepted values: `male`, `female`, and `unisex`. |
| `home_listing_id` | The granular nique ID for a home listing (apartment, condo, home). |
| `hotel_id` | The unique ID for a hotel within a catalog. This ID is matched with any `content_ids` provided in your hotel app and pixel events. |
| `image_tags` | A string that describes an image. There can be multiple tags associated with an image. Example: [for home listings]`Fitness Center`, `Swimming Pool`, [for vehicles] `Exterior`, `Interior`, `StockImage`. For vehicles, follow this naming convention: `(image[0].url`, `image[0].tag[0]`, `image[0].tag[1])`. For vehicle offer ads, `Lease Offer`, `Financing`, and so on. In the `image[0].tag[m]` structure, increment the `m` value to add more tags.<br><br>When using a CSV/TSV file, we support two different formats: Use an image header that looks like: `image[0].url`, `image[1].url`, and so on. Use a JSON flatten string that looks like: `"[{url:'https://images.com/1.jpg'},{url:'https://images.com/2.jpg'}]"` |
| `interior_color` | The vehicle's interior color. |
| `listing_type` | The type of home listing. Supported values for Marketplace: `for_rent_by_agent`, `for_rent_by_owner`. Supported values for dynamic ads: `for_rent_by_agent`, `for_rent_by_owner`, `for_sale_by_agent`, `for_sale_by_owner`, `foreclosed`, `new_construction`, `new_listing`. |
| `make` | The brand of a vehicle. Example `Ford` |
| `margin_level` | An indicator of the profitability of a hotel; value from `1` to `10`. |
| `market_id` | The market where an offer is eligible. Use for TWO FEED use case, to correspond with the market feed. For regional offers, this field is required and should match the `market_id` provided in the market feed. For national offers (offers applicable to all of the U.S.), this field should be empty. |
| `material` | The material or fabric that a product is made out of. Example: 'Leather', 'Denim', 'Suede'. |
| `mileage_unit` | The mileage unit of a vehicle in miles (`MI`) or kilometers (`KM`). |
| `mileage_value` | For used vehicles, the current mileage of a vehicle in miles (`MI`) or kilometers (`KM`). For new vehicles, use `0`. Vehicles on Marketplace must have over 500 miles/kms. |
| `model` | The name of a vehicle product and sometimes a range of products. Example: `Focus` |
| `name` | The name of a product item, hotel, home listing, or destination. |
| `neighborhood` | The neighborhood where a hotel or home listing is located. If there's more than one neighborhood, add additional columns for each one and use JSON-path syntax in each column name to indicate the number of neighborhoods. |
| `neighborhood_id` | The neighborhood ID of a product item. |
| `num_baths` | The total number of bathrooms for a home listing. Must be `1` at a minimum. |
| `num_beds` | The total number of bedrooms for a home listing. Can be `0` for a studio. |
| `number_of_raters` | The number of people who rated a hotel. |
| `num_of_valid_guest_rating` | Number of starts the hotel has; for example, when you book a hotel and it has a rating that is 9 out of 10. |
| `num_rooms` | The total number of rooms for a home listing. |
| `num_units` | The total number of units in a building. Use only for apartments or condos, available as a rental. |
| `offer_type` | The type of offer: `lease`, `finance`, `cash`. |
| `one_way_price` | One-way price of a flight. You must specify the value with the currency. |
| `origin_airport` | The IATA code for the origin of an airport. Supports airport and city IATA codes. Use IATA Code Search to validate IATA codes. |
| `origin_city` | The city name of the flight's origin. |
| `pattern` | The pattern or graphic print featured on a product. Example: 'Polka Dot', 'Striped', 'Paisley'. |
| `postal_code` | The postal or zip code designated for a hotel location, home listing, or automobile dealership. Optional for countries without a postal code system. |
| `postal_codes` | For vehicle offer ads, the list of postal codes for the specific market provided in this format: `['94025', '94536']`. |
| `price` | The price of a flight, home listing, vehicle, or destination. You must specify the value with currency. |
| `price_amount` | The price multiplied by 100, for all currencies. Example: `490` when used with USD denotes $4.90, and `49000` when used with JPY denotes ¥490. |
| `price_change` | The price change for a destination. Values include: `0` - no price change, `–10` - 10% price drop, `20` - 20% price increase. |
| `priority` | The priority of a flight or hotel. Values from `0` (lowest priority) to `5` (highest priority). A flight without a value defaults to `0`. |
| `product_expiration_time` | The expiration date when the product is no longer available. You can set an expiration date and if you have an ad running, it will fetch only the non-expired products. For example, if the expiration date is today, after today this product will no longer appear in ads. |
| `product_feed_id` | The Facebook ID of the Product Feed of a product item, flight, hotel, home listing, vehicle, vehicle offer, or destination. |
| `product_group_id` | The Facebook ID of the Product Group of a product item. |
| `product_item_id` | The Facebook ID of a product item. |
| `product_type` | The retailer defined category of a product item. |
| `property_type` | The type of home listing property. Supported values for Marketplace: `apartment`, `builder_floor`, `condo`, `house`, `house_in_condominium`, `house_in_villa`, `loft`, `penthouse`, `studio`, `townhouse`, `other`. Supported values for dynamic ads: `apartment`, `condo`, `house`, `land`, `manufactured`, `townhouse`, `other`. |
| `rating_system` | The system the `guest_rating` is based on. Examples: Expedia, TripAdvisor |
| `region` | The state, county, region, or province for a home listing or automobile dealership. |
| `region_id` | The region-defined ID of a product item or automobile dealership. |
| `retailer_id` | The retailer-defined ID of a product item, flight, hotel, home listing, vehicle, vehicle offer, or destination. |
| `retailer_product_group_id` | The retailer defined ID of a product group. |
| `review_status` | This is related to dynamic review. It tells if the product is accepted or rejected in review. Values can be `rejected`, `pending`, `approved`. |
| `sale_price` | The sale price or special price of a vehicle. |
| `sale_price_amount` | For products: The sale price of a product item multiplied by 100, for all currencies. Example: `490` when used with USD denotes $4.90, and `49000` when used with JPY denotes ¥490. For hotels: Discounted sale cost and currency of a hotel stay, based on `checkin_date` and `length_of_stay`. |
| `score` | Value for the hotel rating score. Example: `7.8` |
| `size` | The size of a product item. Example: 'XL', '16/34 Tall', '3.5 Kid' |
| `star_rating_float` | The hotel star rating. Valid values: `1` to `5` and should be a multiple of 0.5. Example: `3`, `4.5` |
| `state_of_vehicle` | The current state of a vehicle: `New`, `Used`, `CPO` (certified pre-owned). |
| `title` | The full name of a vehicle. Max characters: 500. The title is relevant and specific to each vehicle and it should contain what is set in `year`, `make`, `model`, and `trim` fields. Example: `SE Ford Certified and 6-Speed Automatic` |
| `transmission` | The transmission type of the vehicle: `Automatic` or `Manual`. |
| `trim` | The trim of the vehicle: `5DR HB SE` Max characters: 50. |
| `url` | The link to an external site where you can view a flight. If a deep link is specified on the ad level, that takes precedence. |
| `vehicle_ID` | The unique ID for a vehicle. Can be a variant for a vehicle. If there are multiple instances of the same ID, we ignore all instances. For vehicle offers, it is the ID that advertisers can use to identify an offer. This is also the same value that is passed under the `content_id` parameter in the pixel. |
| `vehicle_registration_plate` | A metal or plastic plate attached to a motor vehicle or trailer for official identification purposes. For Marketplace, a vehicle registration plate is required in the United Kingdom, |
| `vehicle_type` | The type of vehicle: `car_truck` (default if not supplied), `boat`, `commercial`, `motorcycle`, `powersport`, `rv_camper`, `trailer`, or `other`. |
| `vendor_ID` | The vendor-defined ID of a product item. |
| `vin` | The vehicle identification number. The VIN must be exactly 17 characters and is not required for pre-1983 vehicles. The VIN is required in all countries where Marketplace is available. In the United Kingdom, France, and Brazil, a vehicle registration plate is required instead of a VIN. |
| `visibility` | Toggle visibility on product item. Supported values: `published`, `staging`, `hidden`, `whitelist_only`. Items in `staging` mode are not visible to buyers, and are not available for product tagging on Instagram, nor for dynamic ads. |
| `year` | The year a vehicle was launched in `yyyy` format. |

#### Operators

**Warning:** [Starting March 3, 2022](https://developers.facebook.com/docs/graph-api/changelog/non-versioned-changes/mar-3-2022), we changed how certain filters work for product sets. These include the `contains`, `not_contains`, `lt`, `gt`, `lte`, `gte`, and `starts_with` filters. You have 90 days to update your filters. If any sets in your catalog are using the affected filters after June 1, 2022, the items in those sets may change. This means that different items could display in your ads or shops that use those sets. See [the changelog](https://developers.facebook.com/docs/graph-api/changelog/non-versioned-changes/mar-3-2022) for more details.

| Operator | Type of filter |
| --- | --- |
| `and` | Returns products that match all query values inclusively. For example, `"color": {"red" and "shoe" and "running"}` will only return products that match all 3 query values, such as "red running shoe". |
| `contains` | Returns products that match a query string. For example, `category: {"contains": "running shoe"}` will return all products that contain the query string, such as "red running shoe", "blue running shoe", and "running shoe for kids". |
| `or` | Returns products that match only one query value exclusively. For example, `category: {"running" or "walking"}` will return products that match "running" or "walking" but not both. |
| `not_contains` | Returns products that do not match a query string. For example, `category: {"not_contains": running shoe"}` will return all products that do not contain the query string, such as "red walking shoe", "sandals", and "boots". |
| `is_any` | Returns products that match any value in a list of query values. For example, `"color": {"is_any": "black", "blue", "brown"}` will return any product that matches at least one query string, such as "black boots", "blue boots", "brown boots". |
| `is_not_any` | Returns products that do not match any value in a list of query strings. For example, `"color": {"is_not_any": "black", "blue", "brown"}` will return any products that do not match any of the query values, such as "red boots", "yellow boots", and "green boots". |
| `eq` | Returns products that exactly match a query value. For example, `"brand": {"eq": "Instagram"}` will only match "Instagram" brand products. |
| `neq` | Returns products that do not exactly match a query value. For example, `"brand": {"eq": "Instagram"}` will only match products that are not "Instagram" brand products. |
| `lt`<br><br>int | Returns products that are less than a numeric query value. For example, `"priority": {"lt": 3}` will only match products with a priority that is less than 3. |
| `lte`<br><br>int | Returns products that are less than or equal to a numeric query value. For example, `"priority": {"lte": 3}` will only match products with a priority that is less than or equal to 3. |
| `gt`<br><br>int | Returns products that are greater than a numeric query value. For example, `"priority": {"gt": 3}` will only match products with a priority that is greater than 3. |
| `gte`<br><br>int | Returns products that are greater than or equal to a numeric query value. For example, `"priority": {"gte": 3}` will only match products with a priority that is greater than or equal to 3. |
| `starts_with` | Returns products that match any string that starts with the query string. For example, `"small"` will return any product that starts with the query string, such as "small sandals", "small t-shirt", "small, blue boots". **Note**: This filter option is now only available for the product category field. For other fields, you should use the `contains` filter. |

#### Filter Examples

*Formatted for readability.*

To create a product set that matches specific product IDs, send a `POST` request to the `/PRODUCT-CATALOG-ID/product_sets` endpoint and set the `retailer_id` filter field to `is_any` operator and an array of product IDs.

`curl -i -X POST`

`"https://graph.facebook.com/API-VERSION/PRODUCT-CATALOG-ID/product_sets
`

`?name=Sample Product Set`

`&filter={`

`'retailer_id': {`

`'is_any': ['pid1', 'pid2']`

`}`

`}`

`&access_token=ACCESS-TOKEN"`

To create a product set that matches all shirt items, send a `POST` request to the `/PRODUCT-CATALOG-ID/product_sets` endpoint and set the `product_type` filter field to `i_contains` operator and the string `shirt`.

`curl -i - X POST `

`"https://graph.facebook.com/API-VERSION/PRODUCT-CATALOG-ID/product_sets`

`&name=New Product Set Name`

`&filter={`

`'product_type': {`

`'i_contains': 'shirt'`

`}`

`}`

`&access_token=ACCESS-TOKEN"`

Each rule is a JSON-encoded string.

**Recommendation:** Query with content type `application/json`.

#### Example Filter Rules

| Rule | Description |
| --- | --- |
| {"category": {"eq": "Luggage & Bags"}} | Match all products within the "Luggage & Bags" category. |
| {"retailer_id": {"is_any": ["pid1", "pid2"]}} | Match all products with the retailer ID of pid1 or pid2. |
| { "or": [{"retailer_product_group_id": {"eq": "group_1"}},{"product_type": {"i_contains": "shirt"}}]} | Match all products with the `retailer_product_group_id` of group_1 or `product_type` containing shirt. |

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/product_sets_batch.md -->

## Product Catalog Product Sets Batch

### Reading

product_sets_batch

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/product_sets_batch HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/product_sets_batch',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/product_sets_batch",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/product_sets_batch",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/product_sets_batch"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fproduct_sets_batch&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `handle`<br><br>*string* | A unique handle of a batch request.<br><br>**[required]**<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of ProductCatalogProductSetsBatch nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/products.md -->

## Product Catalog Products

Products in a catalog used in Dynamic Ads. See [Dynamic Ads, Catalog Setup](https://developers.facebook.com/documentation/ads-commerce/catalog).

For example, fetch the name and category of products whose name contains the word `shoe`:

```
curl -G \
-d 'fields=["category","name","errors"]' \
-d 'filter={"name":{"i_contains":"shoe"}}' \
-d 'summary=true' \
-d 'access_token=<ACCESS_TOKEN>'
https://graph.facebook.com/<API_VERSION>/<PRODUCT_CATALOG_ID>/products
```

The response:

```
{
  "data": [
    {
      "category": "mens_shoes",
      "name": "Awesome Mens Shoes in Black",
      "id": "1234",
    },

    ....

    {
      "category": "mens_shoes",
      "name": "Hipster Mens Shoes in Red",
      "id": "5678",
      "errors": [
        {
          "error_type": "IMAGE_RESOLUTION_LOW",
          "error_priority": "HIGH",
          "title": "Missing or invalid images",
          "description": "The main image of this item cannot be displayed.",
          "call_to_action": "After you've made changes, save the image under a different link (URL) and provide the new link.",
        },
        ...
      ]},
    ...
    ],

    }
  ],

  ....

  "summary": {
    "total_count": 316
  }
}
```

### Reading

Products that a catalog contains

You can also filter the results:

| Field Name | Description | Type | Required |
| --- | --- | --- | --- |
| `filter` | [Filter Specification](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-set#Creating) | `JSON string` | no |

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/products HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/products',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/products",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/products",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/products"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fproducts&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `bulk_pagination`<br><br>*boolean* | Used for iterating over the edge in large chunks<br> |
| `error_priority`<br><br>*enum {HIGH, LOW, MEDIUM}* | A filter for items having errors with the given priority. We suggest looking at HIGH priority errors first.<br><br><br>Priorities are decided based on both the issue type (how severe this issue is) and the item (how important this item is).<br> |
| `error_type`<br><br>*enum {ADDRESS_BLOCKLISTED_IN_MARKET, AGGREGATED_LOCALIZATION_ISSUES, APP_HAS_NO_AEM_SETUP, AR_DELETED_DUE_TO_UPDATE, AR_POLICY_VIOLATED, AVAILABLE, BAD_QUALITY_IMAGE, BIG_CATALOG_WITH_ALL_ITEMS_IN_STOCK, BIZ_MSG_AI_AGENT_DISABLED_BY_USER, BIZ_MSG_GEN_AI_POLICY_VIOLATED, CANNOT_EDIT_SUBSCRIPTION_PRODUCTS, CATALOG_NOT_CONNECTED_TO_EVENT_SOURCE, CHECKOUT_DISABLED_BY_USER, COMMERCE_ACCOUNT_LEGAL_ADDRESS_INVALID, COMMERCE_ACCOUNT_NOT_LEGALLY_COMPLIANT, CRAWLED_AVAILABILITY_MISMATCH, DA_DISABLED_BY_USER, DA_POLICY_VIOLATION, DELETED_ITEM, DIGITAL_GOODS_NOT_AVAILABLE_FOR_CHECKOUT, DUPLICATE_IMAGES, DUPLICATE_TITLE_AND_DESCRIPTION, EMPTY_AVAILABILITY, EMPTY_BRAND, EMPTY_CONDITION, EMPTY_DESCRIPTION, EMPTY_IMAGE_URL, EMPTY_PRICE, EMPTY_PRODUCT_URL, EMPTY_SELLER_DESCRIPTION, EMPTY_TITLE, EXTERNAL_MERCHANT_ID_MISMATCH, GENERIC_INVALID_FIELD, GROUPS_DISABLED_BY_USER, HIDDEN_UNTIL_PRODUCT_LAUNCH, ILLEGAL_PRODUCT_CATEGORY, IMAGE_FETCH_FAILED, IMAGE_FETCH_FAILED_BAD_GATEWAY, IMAGE_FETCH_FAILED_FILE_SIZE_EXCEEDED, IMAGE_FETCH_FAILED_FORBIDDEN, IMAGE_FETCH_FAILED_LINK_BROKEN, IMAGE_FETCH_FAILED_TIMED_OUT, IMAGE_RESOLUTION_LOW, IN_ANOTHER_PRODUCT_LAUNCH, INACTIVE_MAGENTO_PRODUCT, INACTIVE_SALESFORCE_COMMERCE_CLOUD_PRODUCT, INACTIVE_SHOPIFY_PRODUCT, INACTIVE_WOOCOMMERCE_PRODUCT, INVALID_COMMERCE_TAX_CATEGORY, INVALID_COMSCORE_MARKET_CODES, INVALID_CONSOLIDATED_LOCALITY_INFORMATION, INVALID_CONTENT_ID, INVALID_DEALER_COMMUNICATION_PARAMETERS, INVALID_DMA_CODES, INVALID_FB_PAGE_ID, INVALID_IMAGES, INVALID_MONETIZER_RETURN_POLICY, INVALID_OFFER_DISCLAIMER_URL, INVALID_OFFER_END_DATE, INVALID_PRE_ORDER_PARAMS, INVALID_RANGE_FOR_AREA_SIZE, INVALID_RANGE_FOR_BUILT_UP_AREA_SIZE, INVALID_RANGE_FOR_NUM_OF_BATHS, INVALID_RANGE_FOR_NUM_OF_BEDS, INVALID_RANGE_FOR_NUM_OF_ROOMS, INVALID_RANGE_FOR_PARKING_SPACES, INVALID_SALE_PRICE, INVALID_SHELTER_PAGE_ID, INVALID_SHIPPING_PROFILE_PARAMS, INVALID_SUBSCRIPTION_DISABLE_PARAMS, INVALID_SUBSCRIPTION_ENABLE_PARAMS, INVALID_SUBSCRIPTION_PARAMS, INVALID_TAX_EXTENSION_STATE, INVALID_VEHICLE_STATE, INVALID_VIRTUAL_TOUR_URL_DOMAIN, INVENTORY_ZERO_AVAILABILITY_IN_STOCK, ITEM_GROUP_NOT_SPECIFIED, ITEM_NOT_SHIPPABLE_FOR_SCA_SHOP, ITEM_OVERRIDE_EMPTY_AVAILABILITY, ITEM_OVERRIDE_EMPTY_PRICE, ITEM_OVERRIDE_NOT_VISIBLE, ITEM_PRICE_NOT_POSITIVE, ITEM_STALE_OUT_OF_STOCK, MARKETPLACE_DISABLED_BY_USER, MARKETPLACE_NOT_SHIPPED_ITEM, MARKETPLACE_PARTNER_AUCTION_NO_BID_CLOSE_TIME, MARKETPLACE_PARTNER_CURRENCY_NOT_VALID, MARKETPLACE_PARTNER_DISTRIBUTION_DISABLED, MARKETPLACE_PARTNER_LISTING_COUNTRY_NOT_MATCH_CATALOG, MARKETPLACE_PARTNER_LISTING_LIMIT_EXCEEDED, MARKETPLACE_PARTNER_MISSING_LATLONG, MARKETPLACE_PARTNER_MISSING_SHIPPING_COST, MARKETPLACE_PARTNER_NOT_LOCAL_ITEM, MARKETPLACE_PARTNER_NOT_SHIPPED_ITEM, MARKETPLACE_PARTNER_POLICY_VIOLATION, MARKETPLACE_PARTNER_RULE_LISTING_LIMIT_EXCEEDED, MARKETPLACE_PARTNER_SELLER_BANNED, MARKETPLACE_PARTNER_SELLER_NOT_VALID, MARKETPLACE_SHIPPED_ITEM_EXPIRED, MARKETPLACE_SHIPPED_ITEM_NOT_AVAILABLE, MARKETPLACE_SHIPPED_SELLER_FEATURE_BANNED, MARKETPLACE_SHIPPED_SELLER_NOT_FULLY_ONBOARDED, MINI_SHOPS_DISABLED_BY_USER, MISSING_CHECKOUT, MISSING_CHECKOUT_CURRENCY, MISSING_COLOR, MISSING_COUNTRY_OVERRIDE_IN_SHIPPING_PROFILE, MISSING_EVENT, MISSING_INDIA_COMPLIANCE_FIELDS, MISSING_SHIPPING_PROFILE, MISSING_SIZE, MISSING_TAX_CATEGORY, NEGATIVE_COMMUNITY_FEEDBACK, NEGATIVE_PRICE, NO_CONTENT_ID, NOT_ENOUGH_IMAGES, NOT_ENOUGH_UNIQUE_PRODUCTS, OVERLAY_DISCLAIMER_EXCEEDED_MAX_LENGTH, PART_OF_PRODUCT_LAUNCH, PASSING_MULTIPLE_CONTENT_IDS, PRODUCT_DOMINANT_CURRENCY_MISMATCH, PRODUCT_EXPIRED, PRODUCT_ITEM_HIDDEN_FROM_ALL_SHOPS, PRODUCT_ITEM_INVALID_PARTNER_TOKENS, PRODUCT_ITEM_NOT_INCLUDED_IN_ANY_SHOP, PRODUCT_ITEM_NOT_VISIBLE, PRODUCT_NOT_APPROVED, PRODUCT_NOT_DOMINANT_CURRENCY, PRODUCT_OUT_OF_STOCK, PRODUCT_URL_EQUALS_DOMAIN, PROPERTY_PRICE_CURRENCY_NOT_SUPPORTED, PROPERTY_PRICE_TOO_HIGH, PROPERTY_PRICE_TOO_LOW, PROPERTY_UNIT_PRICE_CURRENCY_MISMATCH_ITEM_PRICE_CURRENCY, PROPERTY_VALUE_CONTAINS_HTML_TAGS, PROPERTY_VALUE_DESCRIPTION_CONTAINS_OFF_PLATFORM_LINK, PROPERTY_VALUE_FORMAT, PROPERTY_VALUE_MISSING, PROPERTY_VALUE_MISSING_WARNING, PROPERTY_VALUE_NON_POSITIVE, PROPERTY_VALUE_STRING_EXCEEDS_LENGTH, PROPERTY_VALUE_STRING_TOO_SHORT, PROPERTY_VALUE_UPPERCASE, PROPERTY_VALUE_UPPERCASE_WARNING, PURCHASE_RATE_BELOW_ADDTOCART, PURCHASE_RATE_BELOW_VIEWCONTENT, QUALITY_DUPLICATED_DESCRIPTION, QUALITY_ITEM_LINK_BROKEN, QUALITY_ITEM_LINK_REDIRECTING, RETAILER_ID_NOT_PROVIDED, RETAILER_ID_USED_BY_GROUP, SHOPIFY_INVALID_RETAILER_ID, SHOPIFY_ITEM_MISSING_DELIVERY_PROFILE_ZERO_INVENTORY, SHOPIFY_ITEM_MISSING_SHIPPING_PROFILE, SHOPS_POLICY_VIOLATION, SUBSCRIPTION_INFO_NOT_ENABLED_FOR_FEED, TAX_CATEGORY_NOT_SUPPORTED_IN_UK, TOP_PRODUCT_WITHOUT_VIDEOS, UNIQUE_PRODUCT_IDENTIFIER_MISSING, UNMATCHED_EVENTS, UNSUPPORTED_PRODUCT_CATEGORY, VARIANT_ATTRIBUTE_ISSUE, VIDEO_FETCH_FAILED, VIDEO_FETCH_FAILED_BAD_GATEWAY, VIDEO_FETCH_FAILED_FILE_SIZE_EXCEEDED, VIDEO_FETCH_FAILED_FORBIDDEN, VIDEO_FETCH_FAILED_LINK_BROKEN, VIDEO_FETCH_FAILED_RATE_LIMITED, VIDEO_FETCH_FAILED_SERVER_ERROR, VIDEO_FETCH_FAILED_TIMED_OUT, VIDEO_ISSUE_GENERIC, VIDEO_NOT_DOWNLOADABLE, WHATSAPP_DISABLED_BY_USER, WHATSAPP_MARKETING_MESSAGE_DISABLED_BY_USER, WHATSAPP_MARKETING_MESSAGE_POLICY_VIOLATION, WHATSAPP_POLICY_VIOLATION}* | A filter for items affected by a particular issue type.<br> |
| `filter`<br><br>*A JSON-encoded rule* | JSON-encoded WCA rule expression representing the filter to be applied for the edge<br> |
| `return_only_approved_products`<br><br>*boolean* | **Default value: **`false`<br>Return only approved products, only working for WhatsApp capability for now<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {},
"summary": {}
}
```

###### data

A list of [ProductItem](https://developers.facebook.com/docs/marketing-api/reference/product-item) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total_count).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*unsigned int32* | Total number of products returned by the query<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 80009 | There have been too many calls to this Catalog account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting. |
| 200 | Permissions error |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 190 | Invalid OAuth 2.0 Access Token |
| 2500 | Error parsing graph query |

### Creating

#### /{product_catalog_id}/products
You can make a POST request to *products* edge from the following paths:

- [/{product_catalog_id}/products](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/products)

When posting to this edge, a [ProductItem](https://developers.facebook.com/docs/marketing-api/reference/product-item) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `additional_image_urls`<br><br>*list<URL>* | Additional product image URLs<br> |
| `additional_variant_attributes`<br><br>*JSON object {string : string}* | Additional attributes to distinguish the product in its variant group (ex: {"Scent" : "Fruity", "Style" : "Classic"})<br> |
| `age_group`<br><br>*enum {adult, all ages, infant, kids, newborn, teen, toddler}* | The age group that the item is targeted towards<br> |
| `allow_upsert` This field is only accessible in v24.0 or later.<br><br>*boolean* | **Default value: **`true`<br>If the retailer_id of the item already exists in the catalog, setting this flag to true allows the request to update the item, otherwise it throws an error.<br><br><br>By default the value is true.<br> |
| `android_app_name`<br><br>*string* | The name of the app (suitable for display)<br> |
| `android_class`<br><br>*string* | A fully-qualified Activity class name for intent generation<br> |
| `android_package`<br><br>*string* | A fully-qualified package name for intent generation<br> |
| `android_url`<br><br>*string* | A custom scheme for the Android app<br> |
| `availability`<br><br>*enum{in stock, out of stock, preorder, available for order, discontinued, pending, mark_as_sold, mark_as_expired}* | **Default value: **`in stock`<br>Availability of the product item<br> |
| `brand`<br><br>*string* | Brand of the product item<br> |
| `category`<br><br>*string* | Google product category for the item. If you need a custom category name instead, use field 'product_type'<br> |
| `category_specific_fields`<br><br>*JSON object* | JSON object containing category specific fields<br><br><br>`item_sub_type` *enum {APPLIANCES, BABY_FEEDING, BABY_TRANSPORT, BEAUTY, BEDDING, CAMERAS, CELL_PHONES_AND_SMART_WATCHES, CLEANING_SUPPLIES, CLOTHING, CLOTHING_ACCESSORIES, COMPUTERS_AND_TABLETS, DIAPERING_AND_POTTY_TRAINING, ELECTRONICS_ACCESSORIES, FURNITURE, HEALTH, HOME_GOODS, JEWELRY, NURSERY, PRINTERS_AND_SCANNERS, PROJECTORS, SHOES_AND_FOOTWEAR, SOFTWARE, TOYS, TVS_AND_MONITORS, VIDEO_GAME_CONSOLES_AND_VIDEO_GAMES, WATCHES}*<br><br>**Default value: **`"EMPTY"`<br>item_sub_type<br> |
| `checkout_url`<br><br>*URL* | URL to add product item to cart and directly to checkout<br> |
| `color`<br><br>*string* | Color of the product item<br> |
| `commerce_tax_category`<br><br>*enum{FB_ANIMAL, FB_ANIMAL_SUPP, FB_APRL, FB_APRL_ACCESSORIES, FB_APRL_ATHL_UNIF, FB_APRL_CASES, FB_APRL_CLOTHING, FB_APRL_COSTUME, FB_APRL_CSTM, FB_APRL_FORMAL, FB_APRL_HANDBAG, FB_APRL_JEWELRY, FB_APRL_SHOE, FB_APRL_SHOE_ACC, FB_APRL_SWIM, FB_APRL_SWIM_CHIL, FB_APRL_SWIM_CVR, FB_ARTS, FB_ARTS_HOBBY, FB_ARTS_PARTY, FB_ARTS_PARTY_GIFT_CARD, FB_ARTS_TICKET, FB_BABY, FB_BABY_BATH, FB_BABY_BLANKET, FB_BABY_DIAPER, FB_BABY_GIFT_SET, FB_BABY_HEALTH, FB_BABY_NURSING, FB_BABY_POTTY_TRN, FB_BABY_SAFE, FB_BABY_TOYS, FB_BABY_TRANSPORT, FB_BABY_TRANSPORT_ACC, FB_BAGS, FB_BAGS_BKPK, FB_BAGS_BOXES, FB_BAGS_BRFCS, FB_BAGS_CSMT_BAG, FB_BAGS_DFFL, FB_BAGS_DIPR, FB_BAGS_FNNY, FB_BAGS_GRMT, FB_BAGS_LUG_ACC, FB_BAGS_LUGG, FB_BAGS_MSGR, FB_BAGS_TOTE, FB_BAGS_TRN_CAS, FB_BLDG, FB_BLDG_ACC, FB_BLDG_CNSMB, FB_BLDG_FENCE, FB_BLDG_FUEL_TNK, FB_BLDG_HT_VNT, FB_BLDG_LOCK, FB_BLDG_MATRL, FB_BLDG_PLMB, FB_BLDG_PUMP, FB_BLDG_PWRS, FB_BLDG_S_ENG, FB_BLDG_STR_TANK, FB_BLDG_TL_ACC, FB_BLDG_TOOL, FB_BUSIND, FB_BUSIND_ADVERTISING, FB_BUSIND_AGRICULTURE, FB_BUSIND_AUTOMATION, FB_BUSIND_HEAVY_MACH, FB_BUSIND_LAB, FB_BUSIND_MEDICAL, FB_BUSIND_RETAIL, FB_BUSIND_SANITARY_CT, FB_BUSIND_SIGN, FB_BUSIND_STORAGE, FB_BUSIND_STORAGE_ACC, FB_BUSIND_WORK_GEAR, FB_CAMERA_ACC, FB_CAMERA_CAMERA, FB_CAMERA_OPTIC, FB_CAMERA_OPTICS, FB_CAMERA_PHOTO, FB_ELEC, FB_ELEC_ACC, FB_ELEC_ARCDADE, FB_ELEC_AUDIO, FB_ELEC_CIRCUIT, FB_ELEC_COMM, FB_ELEC_COMPUTER, FB_ELEC_GPS_ACC, FB_ELEC_GPS_NAV, FB_ELEC_GPS_TRK, FB_ELEC_MARINE, FB_ELEC_NETWORK, FB_ELEC_PART, FB_ELEC_PRINT, FB_ELEC_RADAR, FB_ELEC_SFTWR, FB_ELEC_SPEED_RDR, FB_ELEC_TELEVISION, FB_ELEC_TOLL, FB_ELEC_VID_GM_ACC, FB_ELEC_VID_GM_CNSL, FB_ELEC_VIDEO, FB_FOOD, FB_FURN, FB_FURN_BABY, FB_FURN_BENCH, FB_FURN_CART, FB_FURN_CHAIR, FB_FURN_CHAIR_ACC, FB_FURN_DIVIDE, FB_FURN_DIVIDE_ACC, FB_FURN_ENT_CTR, FB_FURN_FUTN, FB_FURN_FUTN_PAD, FB_FURN_OFFICE, FB_FURN_OFFICE_ACC, FB_FURN_OTTO, FB_FURN_OUTDOOR, FB_FURN_OUTDOOR_ACC, FB_FURN_SETS, FB_FURN_SHELVE_ACC, FB_FURN_SHLF, FB_FURN_SOFA, FB_FURN_SOFA_ACC, FB_FURN_STORAGE, FB_FURN_TABL, FB_FURN_TABL_ACC, FB_GENERIC_TAXABLE, FB_HLTH, FB_HLTH_HLTH, FB_HLTH_JWL_CR, FB_HLTH_LILP_BLM, FB_HLTH_LTN_SPF, FB_HLTH_PRSL_CR, FB_HLTH_SKN_CR, FB_HMGN, FB_HMGN_BATH, FB_HMGN_DCOR, FB_HMGN_EMGY, FB_HMGN_FPLC, FB_HMGN_FPLC_ACC, FB_HMGN_GS_SFT, FB_HMGN_HS_ACC, FB_HMGN_HS_APP, FB_HMGN_HS_SPL, FB_HMGN_KTCN, FB_HMGN_LAWN, FB_HMGN_LGHT, FB_HMGN_LINN, FB_HMGN_LT_ACC, FB_HMGN_OTDR, FB_HMGN_POOL, FB_HMGN_SCTY, FB_HMGN_SMK_ACC, FB_HMGN_UMBR, FB_HMGN_UMBR_ACC, FB_MDIA, FB_MDIA_BOOK, FB_MDIA_DVDS, FB_MDIA_MAG, FB_MDIA_MANL, FB_MDIA_MUSC, FB_MDIA_PRJ_PLN, FB_MDIA_SHT_MUS, FB_OFFC, FB_OFFC_BKAC, FB_OFFC_CRTS, FB_OFFC_DSKP, FB_OFFC_EQIP, FB_OFFC_FLNG, FB_OFFC_GNRL, FB_OFFC_INSTM, FB_OFFC_LP_DSK, FB_OFFC_MATS, FB_OFFC_NM_PLT, FB_OFFC_PPR_HNDL, FB_OFFC_PRSNT_SPL, FB_OFFC_SEALR, FB_OFFC_SHIP_SPL, FB_RLGN, FB_RLGN_CMNY, FB_RLGN_ITEM, FB_RLGN_WEDD, FB_SFTWR, FB_SFWR_CMPTR, FB_SFWR_DGTL_GD, FB_SFWR_GAME, FB_SHIPPING, FB_SPOR, FB_SPORT_ATHL, FB_SPORT_ATHL_CLTH, FB_SPORT_ATHL_SHOE, FB_SPORT_ATHL_SPRT, FB_SPORT_EXRCS, FB_SPORT_INDR_GM, FB_SPORT_OTDR_GM, FB_TOYS, FB_TOYS_EQIP, FB_TOYS_GAME, FB_TOYS_PZZL, FB_TOYS_TMRS, FB_TOYS_TOYS, FB_VEHI, FB_VEHI_PART}* | Commerce tax category<br> |
| `condition`<br><br>*enum{new, refurbished, used, used_like_new, used_good, used_fair, cpo, open_box_new}* | **Default value: **`new`<br>The condition of the product item<br> |
| `currency`<br><br>*ISO 4217 Currency Code* | Currency for the product item<br><br>**[required]**<br> |
| `custom_data`<br><br>*dictionary { string : <string> }* | Field used to specify custom variants for a specific catalog item. In this case, variants can be colors, materials, etc.<br><br>The field must be formatted as key-value pairs, and the keys must be defined in the product group.<br><br>For example: `custom_data: {"color":"red", "size": "L"}`<br> |
| `custom_label_0`<br><br>*string* | An optional custom label to associate with the product item. Max size: 100<br> |
| `custom_label_1`<br><br>*string* | An optional custom label to associate with the product item. Max size: 100<br> |
| `custom_label_2`<br><br>*string* | An optional custom label to associate with the product item. Max size: 100<br> |
| `custom_label_3`<br><br>*string* | An optional custom label to associate with the product item. Max size: 100<br> |
| `custom_label_4`<br><br>*string* | An optional custom label to associate with the product item. Max size: 100<br> |
| `custom_number_0`<br><br>*int64* | custom_number_0<br> |
| `custom_number_1`<br><br>*int64* | custom_number_1<br> |
| `custom_number_2`<br><br>*int64* | custom_number_2<br> |
| `custom_number_3`<br><br>*int64* | custom_number_3<br> |
| `custom_number_4`<br><br>*int64* | custom_number_4<br> |
| `description`<br><br>*string* | Description of the product item. Max size: 5000<br><br>**[supports emoji]**<br> |
| `expiration_date`<br><br>*string* | Item's expiration date (YYYY-MM-DD)<br> |
| `fb_product_category`<br><br>*string* | Facebook product category for the item<br> |
| `gender`<br><br>*enum{female, male, unisex}* | Gender the product item is targeted towards<br> |
| `gtin`<br><br>*string* | Global trade ID of the product item<br> |
| `image_url`<br><br>*URI* | Required. URL of the product image.<br> |
| `importer_address`<br><br>*JSON object* | Address of the product importer<br><br><br>`street1` *string*<br>street1<br><br><br>`street2` *string*<br>street2<br><br><br>`city` *string*<br>city<br><br>**[required]**<br><br><br>`region` *string*<br>region<br><br><br>`postal_code` *string*<br>postal_code<br><br><br>`country` *enum {AC, AD, AE, AF, AG, AI, AL, AM, AN, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BV, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DJ, DK, DM, DO, DZ, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HM, HN, HR, HT, HU, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, XK, YE, YT, ZA, ZM, ZW}*<br>country<br><br>**[required]**<br> |
| `importer_name`<br><br>*string* | Name of the product Importer<br> |
| `inventory`<br><br>*int64* | Inventory count for the product item<br> |
| `ios_app_name`<br><br>*string* | The name of the app (suitable for display)<br> |
| `ios_app_store_id`<br><br>*int64* | The app ID for the App Store<br> |
| `ios_url`<br><br>*string* | A custom scheme for the iOS app<br> |
| `ipad_app_name`<br><br>*string* | The name of the app (suitable for display)<br> |
| `ipad_app_store_id`<br><br>*int64* | The app ID for the App Store<br> |
| `ipad_url`<br><br>*string* | A custom scheme for the iPhone app<br> |
| `iphone_app_name`<br><br>*string* | The name of the app (suitable for display)<br> |
| `iphone_app_store_id`<br><br>*int64* | The app ID for the App Store<br> |
| `iphone_url`<br><br>*string* | A custom scheme for the iPhone app<br> |
| `manufacturer_info`<br><br>*string* | The Manufacturer Information such as Name, address, etc...<br> |
| `manufacturer_part_number`<br><br>*string* | Manufacturer's ID for the product item<br> |
| `marked_for_product_launch`<br><br>*enum{default, marked, not_marked}* | Whether this product should be marked for a product launch and hide it from shops until product launch is created with this product.<br> |
| `material`<br><br>*string* | Material of the product item<br>Max size: 200<br> |
| `mobile_link`<br><br>*URI* | Link to a mobile-optimized external product page<br> |
| `name`<br><br>*string* | Name/title of the product item<br><br>**[required]**<br><br>**[supports emoji]**<br> |
| `ordering_index`<br><br>*int64* | Index used for ordering items within a group<br> |
| `origin_country`<br><br>*enum {AC, AD, AE, AF, AG, AI, AL, AM, AN, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BV, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DJ, DK, DM, DO, DZ, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HM, HN, HR, HT, HU, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, XK, YE, YT, ZA, ZM, ZW}* | Product Country of Origin<br> |
| `pattern`<br><br>*string* | Pattern of the product item<br> |
| `price`<br><br>*int64* | Price of the item with 2 digits added for cents (ex: use "100" for 1 or "599" for 5.99)<br><br>**[required]**<br> |
| `product_priority_1`<br><br>*float* | product_priority_1<br> |
| `product_priority_2`<br><br>*float* | product_priority_2<br> |
| `product_priority_3`<br><br>*float* | product_priority_3<br> |
| `product_priority_4`<br><br>*float* | product_priority_4<br> |
| `product_type`<br><br>*string* | Retailer defined category of the product item. Max size: 750<br> |
| `retailer_id`<br><br>*string* | A unique identifier for this item (which can be a variant for a product). This field is required.<br> |
| `retailer_product_group_id`<br><br>*string* | Item group ID that this product is a variant of<br> |
| `return_policy_days`<br><br>*int64* | return_policy_days<br> |
| `sale_price`<br><br>*int64* | Sale price of the item with 2 digits added for cents (ex: use "100" for 1 or "599" for 5.99)<br> |
| `sale_price_end_date`<br><br>*datetime* | Date when the sale price ends<br> |
| `sale_price_start_date`<br><br>*datetime* | Date when the sale price starts<br> |
| `short_description`<br><br>*string* | A brief description of the product<br> |
| `size`<br><br>*string* | Size of the product item<br> |
| `start_date`<br><br>*string* | Date when the product started to exist<br> |
| `url`<br><br>*URI* | URL of the product item<br> |
| `visibility`<br><br>*enum{staging, published}* | **Default value: **`published`<br>Visibility of the product item<br> |
| `wa_compliance_category`<br><br>*enum {DEFAULT, COUNTRY_ORIGIN_EXEMPT}* | wa_compliance_category<br> |
| `windows_phone_app_id`<br><br>*string* | The app ID (a GUID) for app store<br> |
| `windows_phone_app_name`<br><br>*string* | The name of the app (suitable for display)<br> |
| `windows_phone_url`<br><br>*string* | A custom scheme for the Windows Phone app<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *id* in the return type.

```
Struct  {
id: numeric string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 10800 | Duplicate retailer_id when attempting to create a store collection |
| 100 | Invalid parameter |
| 200 | Permissions error |
| 10801 | Either "file" or "url" must be specified |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/smart_pixel_settings.md -->

## Product Catalog Smart Pixel Settings

### Reading

self explanatory

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/smart_pixel_settings HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/smart_pixel_settings',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/smart_pixel_settings",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/smart_pixel_settings",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/smart_pixel_settings"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fsmart_pixel_settings&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

This endpoint doesn't have any parameters.

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of CatalogSmartPixelSettings nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/update_generated_image_config.md -->

## Product Catalog Update Generated Image Config

### Reading

You can't perform this operation on this endpoint.

### Creating

You can't perform this operation on this endpoint.

### Updating

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/user_tasks.md -->

## Product Catalog User Tasks

### Reading

User tasks

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/user_tasks HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/user_tasks',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/user_tasks",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/user_tasks",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/user_tasks"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fuser_tasks&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

This endpoint doesn't have any parameters.

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of ProductCatalogUserTasks nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/vehicle_offers.md -->

## Product Catalog Vehicle Offers

### Reading

ProductCatalogVehicleOffers.

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/vehicle_offers HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/vehicle_offers',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/vehicle_offers",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/vehicle_offers",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/vehicle_offers"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fvehicle_offers&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `bulk_pagination`<br><br>*boolean* | bulk_pagination<br> |
| `filter`<br><br>*A JSON-encoded rule* | filter<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {},
"summary": {}
}
```

###### data

A list of VehicleOffer nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total_count).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*unsigned int32* | total_count<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/vehicles.md -->

## Product Catalog Vehicles

### Reading

Retrieve vehicles from a product catalog.

##### Example

#### HTTP
```
GET /v25.0/{product-catalog-id}/vehicles HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{product-catalog-id}/vehicles',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{product-catalog-id}/vehicles",
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);
```

#### Android SDK
```
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{product-catalog-id}/vehicles",
    null,
    HttpMethod.GET,
    new GraphRequest.Callback() {
        public void onCompleted(GraphResponse response) {
            /* handle the result */
        }
    }
).executeAsync();
```

#### iOS SDK
```
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{product-catalog-id}/vehicles"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bproduct-catalog-id%7D%2Fvehicles&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `bulk_pagination`<br><br>*boolean* | Used for iterating over the edge in large chunks<br> |
| `filter`<br><br>*A JSON-encoded rule* | JSON-encoded WCA rule expression representing the filter to be applied for the edge<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {},
"summary": {}
}
```

###### data

A list of [Vehicle](https://developers.facebook.com/docs/marketing-api/reference/vehicle) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total_count).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*unsigned int32* | Total number of vehicles returned by the query<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

#### /{product_catalog_id}/vehicles
You can make a POST request to *vehicles* edge from the following paths:

- [/{product_catalog_id}/vehicles](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/vehicles)

When posting to this edge, a [ProductCatalog](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `address`<br><br>*JSON object* | address<br><br>**[required]**<br><br><br>`city` *string*<br><br>**Default value: **`""`<br>city<br><br><br>`city_id` *string*<br>city_id<br><br><br>`country` *string*<br><br>**Default value: **`""`<br>country<br><br><br>`latitude` *float*<br>latitude<br><br><br>`longitude` *float*<br>longitude<br><br><br>`neighborhoods` *array<string>*<br>neighborhoods<br><br><br>`postal_code` *string*<br><br>**Default value: **`""`<br>postal_code<br><br><br>`region` *string*<br><br>**Default value: **`""`<br>region<br><br><br>`street_address` *string*<br><br>**Default value: **`""`<br>street_address<br> |
| `applinks`<br><br>*Object* | applinks<br><br><br>`web` **<br><br>`android` **<br><br>`ios` **<br><br>`ipad` **<br><br>`iphone` **<br><br>`windows_phone` ** |
| `availability`<br><br>*enum {AVAILABLE, NOT_AVAILABLE, PENDING, UNKNOWN}* | availability<br> |
| `body_style`<br><br>*enum {CONVERTIBLE, COUPE, CROSSOVER, ESTATE, GRANDTOURER, HATCHBACK, MINIBUS, MINIVAN, MPV, PICKUP, ROADSTER, SALOON, SEDAN, SMALL_CAR, SPORTSCAR, SUPERCAR, SUPERMINI, SUV, TRUCK, VAN, WAGON, OTHER, NONE}* | body_style<br><br>**[required]**<br> |
| `condition`<br><br>*enum {EXCELLENT, VERY_GOOD, GOOD, FAIR, POOR, OTHER, NONE}* | condition<br> |
| `currency`<br><br>*ISO 4217 Currency Code* | currency<br><br>**[required]**<br> |
| `date_first_on_lot`<br><br>*string* | date_first_on_lot<br> |
| `dealer_id`<br><br>*string* | dealer_id<br> |
| `dealer_name`<br><br>*string* | dealer_name<br> |
| `dealer_phone`<br><br>*string* | dealer_phone<br> |
| `description`<br><br>*string* | description<br><br>**[required]**<br> |
| `drivetrain`<br><br>*enum {TWO_WD, FOUR_WD, AWD, FWD, RWD, OTHER, NONE}* | drivetrain<br> |
| `exterior_color`<br><br>*string* | exterior_color<br><br>**[required]**<br> |
| `fb_page_id`<br><br>*string* | fb_page_id<br> |
| `fuel_type`<br><br>*enum {DIESEL, ELECTRIC, GASOLINE, FLEX, HYBRID, OTHER, PETROL, PLUGIN_HYBRID, NONE}* | fuel_type<br> |
| `images`<br><br>*list<Object>* | images<br><br>**[required]**<br><br><br>`image_url` *URL*<br>**[required]**<br><br><br>`tags` *list<string>* |
| `interior_color`<br><br>*string* | interior_color<br> |
| `make`<br><br>*string* | make<br><br>**[required]**<br> |
| `mileage`<br><br>*JSON object* | mileage<br><br>**[required]**<br><br><br>`unit` *enum {KILOMETERS, MILES}*<br><br>**Default value: **`"MILES"`<br>unit<br><br><br>`value` *int64*<br><br>**Default value: **`0`<br>value<br> |
| `model`<br><br>*string* | model<br><br>**[required]**<br> |
| `price`<br><br>*int64* | price<br><br>**[required]**<br> |
| `state_of_vehicle`<br><br>*enum {NEW, USED, CPO}* | state_of_vehicle<br><br>**[required]**<br> |
| `title`<br><br>*string* | title<br><br>**[required]**<br> |
| `transmission`<br><br>*enum {AUTOMATIC, MANUAL, OTHER, NONE}* | transmission<br> |
| `trim`<br><br>*string* | trim<br> |
| `url`<br><br>*URI* | url<br><br>**[required]**<br> |
| `vehicle_id`<br><br>*string* | vehicle_id<br><br>**[required]**<br> |
| `vehicle_type`<br><br>*enum {BOAT, CAR_TRUCK, COMMERCIAL, MOTORCYCLE, OTHER, POWERSPORT, RV_CAMPER, TRAILER}* | vehicle_type<br> |
| `vin`<br><br>*string* | vin<br><br>**[required]**<br> |
| `year`<br><br>*int64* | year<br><br>**[required]**<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *id* in the return type.

```
Struct  {
id: numeric string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 10800 | Duplicate retailer_id when attempting to create a store collection |
| 100 | Invalid parameter |
| 200 | Permissions error |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog/videos.md -->

## Product Catalog Videos

### Reading

You can't perform this operation on this endpoint.

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.
