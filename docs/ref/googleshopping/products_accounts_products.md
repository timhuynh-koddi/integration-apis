# Merchant API products_v1: accounts.products

> Source: Merchant API `products_v1` REST Discovery document (https://merchantapi.googleapis.com/$discovery/rest?version=products_v1); overview https://developers.google.com/merchant/api/overview. Fetched 2026-11-19.

---

## accounts.products.get

`GET https://merchantapi.googleapis.com/products/v1/{+name}`

Retrieves the processed product from your Merchant Center account. After inserting, updating, or deleting a product input, it may take several minutes before the updated final product can be retrieved.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The name of the product. Format: `accounts/{account}/products/{product}` The `{product}` segment is a unique identifier for the product. This identifier must be unique within a merchant account and generally follows the structure: `content_language~feed_label~offer_id`. Example: `en~US~sku123` For legacy local products, the structure is: `local~content_language~feed_label~offer_id`. Example: `local~en~US~sku123` The format of the `{product}` segment in the URL is automatically detected by the server, supporting two options: 1. **Encoded Format**: The `{product}` segment is an unpadded base64url encoded string (RFC 4648 Section 5). The decoded string must result in the `content_language~feed_label~offer_id` structure. This encoding MUST be used if any part of the product identifier (like `offer_id`) contains characters such as `/`, `%`, or `~`. * Example: To represent the product ID `en~US~sku/123`, the `{product}` segment must be the unpadded base64url encoding of this string, which is `ZW5-VVN-c2t1LzEyMw`. The full resource name for the product would be `accounts/123/products/ZW5-VVN-c2t1LzEyMw`. 2. **Plain Format**: The `{product}` segment is the tilde-separated string `content_language~feed_label~offer_id`. This format is suitable only when `content_language`, `feed_label`, and `offer_id` do not contain URL-problematic characters like `/`, `%`, or `~`. We recommend using the **Encoded Format** for all product IDs to ensure correct parsing, especially those containing special characters. The presence of tilde (`~`) characters in the `{product}` segment is used to differentiate between the two formats. Note: For calls to the v1beta version, the plain format is `channel~content_language~feed_label~offer_id`, for example: `accounts/123/products/online~en~US~sku123`. |

**Response**: `Product`

---

## accounts.products.list

`GET https://merchantapi.googleapis.com/products/v1/{+parent}/products`

Lists the processed products in your Merchant Center account. The response might contain fewer items than specified by `pageSize`. Rely on `pageToken` to determine if there are more items to be requested. After inserting, updating, or deleting a product input, it may take several minutes before the updated processed product can be retrieved. For more information, see [List your products data and product issues](https://developers.google.com/merchant/api/guides/products/list-products-data-issues).

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The account to list processed products for. Format: `accounts/{account}` |
| pageSize | query | integer (int32) |  | The maximum number of products to return. The service may return fewer than this value. The maximum value is 1000; values above 1000 will be coerced to 1000. If unspecified, the default page size of 25 products will be returned. |
| pageToken | query | string |  | A page token, received from a previous `ListProducts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProducts` must match the call that provided the page token. |

**Response**: `ListProductsResponse`

---

## Schemas

### `Product`

The processed product, built from multiple product inputs after applying rules and supplemental data sources. This processed product matches what is shown in your Merchant Center account. Each product is built from exactly one primary data source product input, and multiple supplemental data source inputs. After inserting, updating, or deleting a product input, it may take several minutes before the updated processed product can be retrieved. All fields in the processed product and its sub-messages match the name of their corresponding attribute in the [Product data specification](https://support.google.com/merchants/answer/7052112) with some exceptions. For product ingestion workflows and status checks, see [Manage products](https://developers.google.com/merchant/api/guides/products/overview), [Add and manage products](https://developers.google.com/merchant/api/guides/products/add-manage), and [List your products data and product issues](https://developers.google.com/merchant/api/guides/products/list-products-data-issues).

| Field | Type | Description |
|---|---|---|
| versionNumber | string (int64) | Output only. Represents the existing version (freshness) of the product, which can be used to preserve the right order when multiple updates are done at the same time. If set, the insertion is prevented when version number is lower than the current version number of the existing product. Re-insertion (for example, product refresh after 30 days) can be performed with the current `version_number`. Only supported for insertions into primary data sources. If the operation is prevented, the aborted exception will be thrown. |
| productStatus | `ProductStatus` | Output only. The status of a product, data validation issues, that is, information about a product computed asynchronously. |
| name | string | The name of the product. Format: `accounts/{account}/products/{product}` where the last section `product` consists of: `content_language~feed_label~offer_id` example for product name is `accounts/123/products/en~US~sku123`. A legacy local product name would be `accounts/123/products/local~en~US~sku123`. Note: For calls to the v1beta version, the `product` section consists of: `channel~content_language~feed_label~offer_id`, for example: `accounts/123/products/online~en~US~sku123`. |
| archived | boolean | Output only. Determines whether the product is [archived](https://support.google.com/merchants/answer/11909930). To archive or restore your product, visit Merchant Center products page. Learn also more about [offer visibility](https://support.google.com/merchants/answer/12488713). |
| automatedDiscounts | `AutomatedDiscounts` | Output only. The automated discounts information for the product. |
| contentLanguage | string | Output only. The two-letter [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code for the product. |
| customAttributes | array<`CustomAttribute`> | Output only. A list of custom (merchant-provided) attributes. It can also be used to submit any attribute of the data specification in its generic form (for example, `{ "name": "size type", "value": "regular" }`). This is useful for submitting attributes not explicitly exposed by the API, such as additional attributes used for Buy on Google. |
| dataSource | string | Output only. The primary data source of the product. |
| offerId | string | Output only. Your unique identifier for the product. This is the same for the product input and processed product. Leading and trailing whitespaces are stripped and multiple whitespaces are replaced by a single whitespace upon submission. This field corresponds to the [ID `[id]` attribute](https://support.google.com/merchants/answer/6324405) in the [Product data specification](https://support.google.com/merchants/answer/7052112). |
| productAttributes | `ProductAttributes` | Output only. A list of strongly-typed product attributes. |
| base64EncodedName | string | Output only. The **unpadded base64url encoded name** of the product. Format: `accounts/{account}/products/{product}` where the last section `product` is the unpadded base64url encoding of the `content_language~feed_label~offer_id` name. Example: `accounts/123/products/ZW5-VVN-c2t1LzEyMw` for the decoded product name `accounts/123/products/en~US~sku/123`. This field can be used directly as input to the API methods that require the product name to be encoded if it contains special characters, for example [`GetProduct`](https://developers.google.com/merchant/api/reference/rest/products_v1/accounts.products/get). |
| feedLabel | string | Output only. The feed label lets you categorize and identify your products. The maximum allowed characters is 20 and the supported characters are`A-Z`, `0-9`, hyphen and underscore. The feed label must not include any spaces. For more information, see [Using feed labels](//support.google.com/merchants/answer/14994087) |
| legacyLocal | boolean | Output only. Determines whether the product is **only** targeting local destinations and whether the product name should be distinguished with a `local~` prefix. For example, `accounts/123/products/local~en~US~sku123`. |

### `ListProductsResponse`

Response message for the ListProducts method.

| Field | Type | Description |
|---|---|---|
| products | array<`Product`> | The processed products from the specified account. These are your processed products after applying rules and supplemental data sources. |
| nextPageToken | string | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. |

### `AutomatedDiscounts`

Information regarding Automated Discounts.

| Field | Type | Description |
|---|---|---|
| priorPriceProgressive | `Price` | The price prior to the application of consecutive price reductions. Absent if the information about the prior price of the product is not available. |
| priorPrice | `Price` | The price prior to the application of the first price reduction. Absent if the information about the prior price of the product is not available. |
| gadPrice | `Price` | The current sale price for products with a price optimized using Google Automated Discounts (GAD). Absent if the information about the GAD_price of the product is not available. |

### `CustomAttribute`

A message that represents custom attributes. Exactly one of `value` or `group_values` must not be empty.

| Field | Type | Description |
|---|---|---|
| value | string | The value of the attribute. If `value` is not empty, `group_values` must be empty. |
| groupValues | array<`CustomAttribute`> | Subattributes within this attribute group. If `group_values` is not empty, `value` must be empty. |
| name | string | The name of the attribute. |

### `ProductAttributes`

Product attributes.

| Field | Type | Description |
|---|---|---|
| adult | boolean | Set to true if the item is targeted towards adults. |
| loyaltyPoints | `LoyaltyPoints` | Loyalty points that users receive after purchasing the item. Japan only. |
| trim | string | The [Trim](https://support.google.com/google-ads/answer/14154176) of the vehicle model, such as `S`, `SV`, `SL` and others. |
| customLabel1 | string | [Custom label 1](https://support.google.com/merchants/answer/6324473) for custom grouping of items in a Shopping campaign. |
| includedDestinations | array<string enum(DESTINATION_ENUM_UNSPECIFIED, SHOPPING_ADS, DISPLAY_ADS, LOCAL_INVENTORY_ADS, FREE_LISTINGS, FREE_LOCAL_LISTINGS, YOUTUBE_SHOPPING, YOUTUBE_SHOPPING_CHECKOUT, YOUTUBE_AFFILIATE, FREE_VEHICLE_LISTINGS, VEHICLE_ADS, CLOUD_RETAIL, LOCAL_CLOUD_RETAIL, RENTAL_ADS)> | The list of destinations to include for this target (corresponds to checked check boxes in Merchant Center). Default destinations are always included unless provided in `excludedDestinations`. For more information, see [Included destination](https://support.google.com/merchants/answer/7501026). Note: We recommend setting destinations on datasources level for most use cases. Use this field within products to only setup exceptions. |
| pickupMethod | string enum(PICKUP_METHOD_UNSPECIFIED, NOT_SUPPORTED, BUY, RESERVE, SHIP_TO_STORE) | The [pickup](https://support.google.com/merchants/answer/14634021) option for the item. Values: PICKUP_METHOD_UNSPECIFIED - Pickup method is not specified.; NOT_SUPPORTED - The item is not available for store pickup.; BUY - The entire transaction occurs online.; RESERVE - The item is reserved online and the transaction occurs in-store.; SHIP_TO_STORE - The item is purchased online and shipped to a local store for the customer to pick up. |
| shippingLabel | string | The shipping label of the product, used to group products in account-level shipping rules. Max. 100 characters. For more information, see [Shipping label](https://support.google.com/merchants/answer/6324504). |
| title | string | Title of the item. |
| numberOfBedrooms | number (double) | The number of bedrooms in the property. The value must be greater than or equal to 0 and a multiple of 1.0. |
| co2Emissions | `Co2Emissions` | The [co2 emission](https://support.google.com/google-ads/answer/14546146) of the vehicle. |
| pickupCost | `PickupCost` | Optional. The [pickup cost](https://support.google.com/merchants/answer/16988704) for an item when a customer buys it online and picks it up at a store. |
| structuredDescription | `StructuredDescription` | Structured description, for algorithmically (AI)-generated descriptions. |
| shippingLength | `ShippingDimension` | Length of the item for shipping. |
| cloudExportAdditionalProperties | array<`CloudExportAdditionalProperties`> | Extra fields to export to the Cloud Retail program. |
| productLength | `ProductDimension` | The length of the product in the units provided. The value must be between 0 (exclusive) and 3000 (inclusive). |
| neighborhood | string | The neighborhood (locality) of the property, such as `Wallingford`, `Greenwood`, etc. |
| longitude | number (double) | The longitude of the property. The value must be between -180 (inclusive) and 180 (inclusive), up to 6 decimal places. |
| shippingHandlingBusinessDays | array<`ShippingBusinessDaysConfig`> | The business days during which orders can be handled. If not provided, Monday to Friday business days will be assumed. |
| subscriptionCost | `SubscriptionCost` | Number of periods (weeks, months or years) and amount of payment per period for an item with an associated subscription contract. |
| adsRedirect | string | Allows advertisers to override the item URL when the product is shown within the context of Product ads. |
| freeShippingThreshold | array<`FreeShippingThreshold`> | Conditions to be met for a product to have free shipping. |
| expirationDate | string (google-datetime) | Date on which the item should expire, as specified upon insertion, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format. The actual expiration date is exposed in `productstatuses` as [googleExpirationDate](https://support.google.com/merchants/answer/6324499) and might be earlier if `expirationDate` is too far in the future. |
| fuelConsumptionDischargedBattery | `FuelConsumption` | The fuel consumption of the vehicle when the hybrid battery is discharged. See the [Help Center article](https://support.google.com/google-ads/answer/15162033) for more information. |
| maxEnergyEfficiencyClass | string enum(ENERGY_EFFICIENCY_CLASS_UNSPECIFIED, APPP, APP, AP, A, B, C, D, E, F, G) | The [energy efficiency class](https://support.google.com/merchants/answer/7562785) as defined in EU directive 2010/30/EU. Values: ENERGY_EFFICIENCY_CLASS_UNSPECIFIED - The energy efficiency class is unspecified.; APPP - A+++.; APP - A++.; AP - A+.; A - A.; B - B.; C - C.; D - D.; E - E.; F - F.; G - G. |
| gender | string enum(GENDER_UNSPECIFIED, MALE, FEMALE, UNISEX) | Target [gender](https://support.google.com/merchants/answer/6324479) of the item. Values: GENDER_UNSPECIFIED - Gender is not specified.; MALE - Male.; FEMALE - Female.; UNISEX - Unisex. |
| costOfGoodsSold | `Price` | Cost of goods sold. Used for gross profit reporting. |
| amenityFeature | array<string enum(AMENITY_FEATURE_UNSPECIFIED, BALCONY, BASEMENT, BASKETBALL_COURT, BIKE_STORAGE, CENTRAL_AC, DISHWASHER, DOG_PARK, ELEVATOR, EV_CHARGING, FENCED_LOT, FIREPLACE, FITNESS_CENTER, FORCED_AIR_HEATING, FULLY_FURNISHED, GARAGE, GATED_COMMUNITY, HARDWOOD_FLOORS, HIGH_SPEED_INTERNET, INTERCOM, IN_UNIT_WASHER_DRYER, KITCHEN, LARGE_CLOSETS, MULTISPORT_COURT, ONSITE_LAUNDRY, OUTDOOR_LOUNGE, PARKING, PATIO, PICKLEBALL_COURT, POOL, REFRIGERATOR, SOCCER_FIELD, TENNIS_COURT, WALK_IN_CLOSETS, WHEELCHAIR_ACCESS)> | The amenity features for the property. |
| color | string | [Color](https://support.google.com/merchants/answer/6324487) of the item. For example, "red". |
| price | `Price` | Price of the item. |
| engine | string enum(ENGINE_TYPE_UNSPECIFIED, GASOLINE, DIESEL, ELECTRIC, HYBRID, PLUG_IN_HYBRID, NATURAL_GAS, LPG, METHANE, OTHER) | The [engine](https://support.google.com/google-ads/answer/14156068) type of the vehicle. Values: ENGINE_TYPE_UNSPECIFIED - Unspecified engine type.; GASOLINE - Gasoline.; DIESEL - Diesel.; ELECTRIC - Electric.; HYBRID - Hybrid.; PLUG_IN_HYBRID - Plug-in hybrid.; NATURAL_GAS - Natural gas.; LPG - LPG.; METHANE - Methane.; OTHER - Other. |
| questionsAndAnswers | array<`QuestionAndAnswer`> | Optional. Contains user-, merchant-, and manufacturer-authored [questions and answers](https://support.google.com/merchants/answer/17085211) about the product. Max 30 question and answer pairs. Max 10000 characters total. Each question can have max 1000 characters. Each answer can have max 1000 characters. |
| energyConsumption | `EnergyConsumption` | The [energy consumption](https://support.google.com/google-ads/answer/14546149) of the vehicle. |
| condition | string enum(CONDITION_UNSPECIFIED, NEW, USED, REFURBISHED) | [Condition](https://support.google.com/merchants/answer/6324469) or state of the item. Values: CONDITION_UNSPECIFIED - Default value. This value is unused.; NEW - Brand new, original, unopened packaging.; USED - Previously used, original packaging opened or missing.; REFURBISHED - Professionally restored to working order, comes with a warranty, may or may not have the original packaging. |
| link | string | URL directly linking to your item's page on your online store. |
| canonicalLink | string | URL for the canonical version of your item's landing page. |
| maxHandlingTime | string (int64) | Maximal product handling time (in business days). |
| material | string | The [material](https://support.google.com/merchants/answer/6324410) of which the item is made. For example, "Leather" or "Cotton". |
| returnPolicyLabel | string | The return label of the product, used to group products in account-level return policies. Max. 100 characters. For more information, see [Return policy label](https://support.google.com/merchants/answer/9445425). |
| year | string (int64) | The [Year](https://support.google.com/google-ads/answer/14152816) of the vehicle model. |
| displayAddress | `DisplayAddress` | The display address of the property. |
| installment | `ProductInstallment` | Number and amount of installments to pay for an item. |
| salePriceEffectiveDate | `Interval` | Date range during which the item is on sale, see [product data specification](https://support.google.com/merchants/answer/7052112#price_and_availability). |
| popularityRank | number (float) | Optional. Indicates the [popularity](https://support.google.com/merchants/answer/17085297) of the product in a merchant's inventory. Using a scale of 0.0 (lowest) to 100.0 (highest). |
| sizeSystem | string enum(SIZE_SYSTEM_UNSPECIFIED, AU, BR, CN, DE, EU, FR, IT, JP, MEX, UK, US) | System in which the size is specified. Recommended for apparel items. For more information, see [Size system](https://support.google.com/merchants/answer/6324502). Values: SIZE_SYSTEM_UNSPECIFIED - Unspecified size system.; AU - AU.; BR - BR.; CN - CN.; DE - DE.; EU - EU.; FR - FR.; IT - IT.; JP - JP.; MEX - MEX.; UK - UK.; US - US. |
| displayAdsSimilarIds | array<string> | Advertiser-specified recommendations. For more information, see [Display ads attribute specification](https://support.google.com/merchants/answer/6069387). |
| virtualModelLink | string | URL of the 3D image of the item. See the [Help Center article](https://support.google.com/merchants/answer/13674896) for more information. |
| customLabel3 | string | [Custom label 3](https://support.google.com/merchants/answer/6324473) for custom grouping of items in a Shopping campaign. |
| leaseTerm | `LeaseTerm` | The lease term of the property. |
| productFee | array<`ProductFee`> | The product fee for the property. |
| maximumRetailPrice | `Price` | Maximum retail price (MRP) of the item. Applicable to India only. |
| minHandlingTime | string (int64) | Minimal product handling time (in business days). |
| variantOptions | array<`VariantOption`> | Optional. Contains the [list of all variant-identifying options](https://support.google.com/merchants/answer/17085214) of this product. |
| utilitiesIncluded | array<string enum(UTILITIES_INCLUDED_UNSPECIFIED, ELECTRICITY, GAS, INTERNET, TRASH, WATER)> | The utilities included for the property. |
| sellOnGoogleQuantity | string (int64) | The quantity of the product that is available for selling on Google. Supported only for online products. |
| transitTimeLabel | string | The transit time label of the product, used to group product in account-level transit time tables. |
| latitude | number (double) | The latitude of the property. The value must be between -90 (inclusive) and 90 (inclusive), up to 6 decimal places. |
| warranty | `Warranty` | The [`warranty`](https://support.google.com/merchants/answer/18562485) of the product. |
| unitArea | `UnitArea` | The unit area of the property, such as `1000 sqft`. |
| certifications | array<`ProductCertification`> | Product Certifications, for example for energy efficiency labeling of products recorded in the [EU EPREL](https://eprel.ec.europa.eu/screen/home) database. For more information, see [Certification](https://support.google.com/merchants/answer/13528839). |
| googleProductCategory | string | Google's category of the item (see [Google product taxonomy](https://support.google.com/merchants/answer/1705911)). When querying products, this field will contain the user provided value. There is currently no way to get back the auto assigned google product categories through the API. |
| shippingTransitBusinessDays | array<`ShippingBusinessDaysConfig`> | The business days during which orders are in transit. If not provided, Monday to Friday business days will be assumed. |
| shippingHeight | `ShippingDimension` | Height of the item for shipping. |
| loyaltyPrograms | array<`LoyaltyProgram`> | A list of loyalty program information that is used to surface loyalty benefits (for example, better pricing, points, etc) to the user of this item. |
| shipping | array<`Shipping`> | Shipping rules. |
| displayAdsId | string | An identifier for an item for dynamic remarketing campaigns. |
| salePrice | `Price` | Advertised sale price of the item. |
| mobileLinkTemplate | string | [Link template](https://support.google.com/merchants/answer/13870216) for business hosted local storefront optimized for mobile devices. |
| bodyStyle | string enum(VEHICLE_BODY_STYLE_UNSPECIFIED, ATV_SPORT, ATV_TOURING, ATV_UTILITY, ATV_YOUTH, CITY_CAR, CLASS_A_MOTORHOME, CLASS_B_MOTORHOME, CLASS_C_MOTORHOME, COMPACT_SUV, CONVERTIBLE, COUPE, CROSSOVER, FIFTH_WHEEL, FULL_SIZE_VAN, HATCHBACK, LIMOUSINE, MINIVAN, NOTCHBACK, POP_UP_CAMPER, SEDAN, SIDE_BY_SIDE, STATION_WAGON, SUV, TRAVEL_TRAILER, TRUCK, TRUCK_CAMPER, UTE, UTV_RECREATIONAL_UTILITY, UTV_SPORT, UTV_UTILITY, UTV_YOUTH) | The [body style](https://support.google.com/google-ads/answer/14157085) of the vehicle. Values: VEHICLE_BODY_STYLE_UNSPECIFIED - Unspecified vehicle body style.; ATV_SPORT - ATV Sport.; ATV_TOURING - ATV Touring.; ATV_UTILITY - ATV Utility.; ATV_YOUTH - ATV Youth.; CITY_CAR - City car.; CLASS_A_MOTORHOME - Class A motorhome.; CLASS_B_MOTORHOME - Class B motorhome.; CLASS_C_MOTORHOME - Class C motorhome.; COMPACT_SUV - Compact SUV.; CONVERTIBLE - Convertible.; COUPE - Coupe.; CROSSOVER - Crossover.; FIFTH_WHEEL - Fifth wheel.; FULL_SIZE_VAN - Full size van.; HATCHBACK - Hatchback.; LIMOUSINE - Limousine.; MINIVAN - Minivan.; NOTCHBACK - Notchback.; POP_UP_CAMPER - Pop up camper.; SEDAN - Sedan.; SIDE_BY_SIDE - Side by side.; STATION_WAGON - Station wagon.; SUV - SUV.; TRAVEL_TRAILER - Travel trailer.; TRUCK - Truck.; TRUCK_CAMPER - Truck camper.; UTE - Ute.; UTV_RECREATIONAL_UTILITY - UTV Recreational utility.; UTV_SPORT - UTV Sport.; UTV_UTILITY - UTV Utility.; UTV_YOUTH - UTV Youth. |
| description | string | Description of the item. |
| returns | array<`Returns`> | Optional. [Return rules](https://support.google.com/merchants/answer/17081382) for the product. |
| customLabel0 | string | [Custom label 0](https://support.google.com/merchants/answer/6324473) for custom grouping of items in a Shopping campaign. |
| relatedProducts | array<`RelatedProduct`> | Optional. Specifies how other [products are related](https://support.google.com/merchants/answer/17085213) to this product. |
| disclosureDate | string (google-datetime) | The date time when an offer becomes visible in search results across Google’s YouTube surfaces, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format. See [Disclosure date](https://support.google.com/merchants/answer/13034208) for more information. |
| vehicleAllInPrice | `Price` | The all-in advertised price for a vehicle, which includes costs for the following – any accessories attached to the vehicle, environmental levies, extra warranty, fuel, freight, pre-delivery inspection (PDI), dealer fees for handling licensing, provincial regulatory fees, miscellaneous dealer charges for security etching and nitrogen tire fill, and factory-to-customer or dealer-to-customer discounts or incentives. See the [Vehicle all-in price](https://support.google.com/google-ads/answer/14156981) for more information. |
| imageLink | string | URL of an image of the item. |
| availability | string enum(AVAILABILITY_UNSPECIFIED, IN_STOCK, OUT_OF_STOCK, PREORDER, LIMITED_AVAILABILITY, BACKORDER) | [Availability](https://support.google.com/merchants/answer/6324448) status of the item. Values: AVAILABILITY_UNSPECIFIED - Availability is not specified.; IN_STOCK - In stock.; OUT_OF_STOCK - Out of stock.; PREORDER - Pre-order.; LIMITED_AVAILABILITY - Limited availability.; BACKORDER - Backorder. |
| productHighlights | array<string> | Bullet points describing the most relevant [product highlights](https://support.google.com/merchants/answer/9216100). |
| documentLinks | array<string> | Optional. Contains a list of PDF [document URLs](https://support.google.com/merchants/answer/17084656) for the product. Examples are training manuals, user guides, assembly instructions, package inserts, etc. Must start with "http://" or "https://"), ASCII characters only, and RFC 3986 compliant. |
| displayAdsTitle | string | Title of an item for dynamic remarketing campaigns. |
| electricRange | `Mileage` | The [electric range](https://support.google.com/google-ads/answer/15162232) of the vehicle in miles/kms. |
| adsLabels | array<string> | Similar to ads_grouping, but only works on CPC. |
| size | string | Size of the item. Only one value is allowed. For variants with different sizes, insert a separate product for each size with the same `itemGroupId` value, see [Size](https://support.google.com/merchants/answer/6324492). |
| productWeight | `ProductWeight` | The weight of the product in the units provided. The value must be between 0 (exclusive) and 2000 (inclusive). |
| shippingWeight | `ShippingWeight` | Weight of the item for shipping. |
| itemGroupTitle | string | Optional. Represents the [title of the product group](https://support.google.com/merchants/answer/17085146) to which this variant product belongs. This can be used along with the [item group id](https://support.google.com/merchants/answer/6324507) attribute. It lets you perform better grouping of variant products, and helps identifying common product characteristics more efficiently. |
| vehiclePriceType | string enum(VEHICLE_PRICE_TYPE_UNSPECIFIED, ALL_IN_PRICE, DRIVE_AWAY_PRICE, ESTIMATED_DRIVE_AWAY_PRICE, EXCLUDING_GOVERNMENT_CHARGES_PRICE, VEHICLE_BASE_PRICE) | The [price type](https://support.google.com/google-ads/answer/14592783) of the vehicle. Values: VEHICLE_PRICE_TYPE_UNSPECIFIED - Unspecified vehicle price type.; ALL_IN_PRICE - All in price.; DRIVE_AWAY_PRICE - Drive away price.; ESTIMATED_DRIVE_AWAY_PRICE - Estimated drive away price.; EXCLUDING_GOVERNMENT_CHARGES_PRICE - Excluding government charges price.; VEHICLE_BASE_PRICE - Vehicle base price. |
| mileage | `Mileage` | The number of miles/kms on the vehicle. See the [Mileage](https://support.google.com/google-ads/answer/14156166) for more information. |
| pickupSla | string enum(PICKUP_SLA_UNSPECIFIED, SAME_DAY, NEXT_DAY, TWO_DAY, THREE_DAY, FOUR_DAY, FIVE_DAY, SIX_DAY, MULTI_WEEK) | Item store pickup timeline. For more information, see [Pickup SLA](https://support.google.com/merchants/answer/14635400). Values: PICKUP_SLA_UNSPECIFIED - Pickup SLA is not specified.; SAME_DAY - Indicates that the product is available for pickup the same day that the order is placed, subject to cut off times.; NEXT_DAY - Indicates that the product is available for pickup the following day that the order is placed.; TWO_DAY - Indicates that the product will be shipped to a store for a customer to pick up in 2 days.; THREE_DAY - Indicates that the product will be shipped to a store for a customer to pick up in 3 days.; FOUR_DAY - Indicates that the product will be shipped to a store for a customer to pick up in 4 days; FIVE_DAY - Indicates that the product will be shipped to a store for a customer to pick up in 5 days.; SIX_DAY - Indicates that the product will be shipped to a store for a customer to pick up in 6 days.; MULTI_WEEK - Indicates that the product will be shipped to a store for a customer to pick up in one week or more. |
| displayAdsLink | string | URL directly to your item's landing page for dynamic remarketing campaigns. |
| excludedDestinations | array<string enum(DESTINATION_ENUM_UNSPECIFIED, SHOPPING_ADS, DISPLAY_ADS, LOCAL_INVENTORY_ADS, FREE_LISTINGS, FREE_LOCAL_LISTINGS, YOUTUBE_SHOPPING, YOUTUBE_SHOPPING_CHECKOUT, YOUTUBE_AFFILIATE, FREE_VEHICLE_LISTINGS, VEHICLE_ADS, CLOUD_RETAIL, LOCAL_CLOUD_RETAIL, RENTAL_ADS)> | The list of destinations to exclude for this target (corresponds to unchecked check boxes in Merchant Center). For more information, see [Excluded destination](https://support.google.com/merchants/answer/6324486). Note: We recommend setting destinations on datasources level for most use cases. Use this field within products to only setup exceptions. |
| linkTemplate | string | [Link template](https://support.google.com/merchants/answer/13871172) for business hosted local storefront. |
| customLabel2 | string | [Custom label 2](https://support.google.com/merchants/answer/6324473) for custom grouping of items in a Shopping campaign. |
| externalSellerId | string | Required for multi-seller accounts. Use this attribute if you're a marketplace uploading products for various sellers to your multi-seller account. |
| numberOfBathrooms | number (double) | The number of bathrooms in the property. The value must be greater than 0 and a multiple of 0.5. |
| mobileLink | string | URL for the mobile-optimized version of your item's landing page. |
| pause | string enum(PAUSE_UNSPECIFIED, ADS, ALL) | Publication of this item will be temporarily [paused](https://support.google.com/merchants/answer/11909930). Values: PAUSE_UNSPECIFIED - The pause is unspecified.; ADS - You’re currently pausing your product for all ads locations (including Shopping Ads, Display Ads, and local inventory ads).; ALL - You’re currently pausing your product for all Shopping locations (including Shopping Ads, Display Ads, local inventory ads, Buy on Google, and free listings). |
| unitPricingBaseMeasure | `UnitPricingBaseMeasure` | The preference of the denominator of the unit price. |
| vehicleExpenses | `Price` | The miscellaneous expenses like insurance and registration fees of the vehicle. See the [Vehicle expenses](https://support.google.com/google-ads/answer/15957154) for more information. |
| shoppingAdsExcludedCountries | array<string> | List of country codes [(ISO 3166-1 alpha-2)](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) to exclude the offer from Shopping Ads destination. Countries from this list are removed from countries configured in data source settings. |
| productDetails | array<`ProductDetail`> | Technical specification or additional product details. |
| model | string | The [Model](https://support.google.com/google-ads/answer/14154511) of the vehicle, such as `LX`, `EX`, and others. |
| dateFirstRegistered | string | The date the vehicle was first registered. Format: `YYYY-MM`. See the [Date first registered](https://support.google.com/google-ads/answer/14546138) for more information. |
| carrierShipping | array<`CarrierShipping`> | Rules for carrier-based shipping. |
| propertyType | string enum(PROPERTY_TYPE_UNSPECIFIED, APARTMENT, CONDO, LOFT, MULTI_FAMILY_HOME, PENTHOUSE, ROOM, SINGLE_FAMILY_HOME, STUDIO, TOWNHOUSE) | The type of property. Values: PROPERTY_TYPE_UNSPECIFIED - Unspecified property type.; APARTMENT - Apartment.; CONDO - Condo.; LOFT - Loft.; MULTI_FAMILY_HOME - Multi-family home.; PENTHOUSE - Penthouse.; ROOM - Room.; SINGLE_FAMILY_HOME - Single-family home.; STUDIO - Studio.; TOWNHOUSE - Townhouse. |
| availabilityDate | string (google-datetime) | The day a pre-ordered product becomes available for delivery, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format. |
| numberOfUnits | string (int64) | The number of units available for a specific floor plan of the property. The value must be greater than 0. |
| productTypes | array<string> | Categories of the item (formatted as in [product data specification](https://support.google.com/merchants/answer/7052112#product_category)). |
| productHeight | `ProductDimension` | The height of the product in the units provided. The value must be between 0 (exclusive) and 3000 (inclusive). |
| vin | string | The [Vehicle Identification Number (VIN)](https://support.google.com/google-ads/answer/14154510) of the vehicle. |
| customLabel4 | string | [Custom label 4](https://support.google.com/merchants/answer/6324473) for custom grouping of items in a Shopping campaign. |
| displayAdsValue | number (double) | Offer margin for dynamic remarketing campaigns. For more information, see [Display ads attribute](https://support.google.com/merchants/answer/6069387). |
| emissionsStandard | string enum(EMISSIONS_STANDARD_UNSPECIFIED, ZERO_EMISSIONS, EURO1, EURO2, EURO3, EURO4, EURO5, EURO5B, EURO6, EURO6C, EURO6D, EURO6D_TEMP, EURO6E) | The [emission standard](https://support.google.com/google-ads/answer/14869021) of the vehicle. Values: EMISSIONS_STANDARD_UNSPECIFIED - Unspecified emission standard.; ZERO_EMISSIONS - Zero emissions.; EURO1 - Euro 1.; EURO2 - Euro 2.; EURO3 - Euro 3.; EURO4 - Euro 4.; EURO5 - Euro 5.; EURO5B - Euro 5b.; EURO6 - Euro 6.; EURO6C - Euro 6c.; EURO6D - Euro 6d.; EURO6D_TEMP - Euro 6d-TEMP.; EURO6E - Euro 6e. |
| additionalImageLinks | array<string> | Additional URLs of images of the item. |
| pattern | string | The item's [pattern](https://support.google.com/merchants/answer/6324483). For example, polka dots. |
| itemGroupId | string | Shared identifier for all variants of the same product. |
| minEnergyEfficiencyClass | string enum(ENERGY_EFFICIENCY_CLASS_UNSPECIFIED, APPP, APP, AP, A, B, C, D, E, F, G) | The [energy efficiency class](https://support.google.com/merchants/answer/7562785) as defined in EU directive 2010/30/EU. Values: ENERGY_EFFICIENCY_CLASS_UNSPECIFIED - The energy efficiency class is unspecified.; APPP - A+++.; APP - A++.; AP - A+.; A - A.; B - B.; C - C.; D - D.; E - E.; F - F.; G - G. |
| isBundle | boolean | Whether the item is a business-defined sub-API. A [sub-API] (https://support.google.com/merchants/answer/6324449) is a custom grouping of different products sold by a business for a single price. |
| videoLinks | array<string> | Optional. A list of video URLs for the item. Use this attribute to provide more visuals for your product beyond your image attributes. See the [Help Center article](https://support.google.com/merchants/answer/15216925) for more information. |
| minimumOrderValues | array<`ProductMinimumOrderValue`> | The [minimum value](https://support.google.com/merchants/answer/16989009) in the cart before a customer can initiate checkout. Supports multiple minimum order values. Different minimum order values can be specified per country, service and surface. Maximum entries: 100. |
| ageGroup | string enum(AGE_GROUP_UNSPECIFIED, ADULT, KIDS, TODDLER, INFANT, NEWBORN) | Target [age group](https://support.google.com/merchants/answer/6324463) of the item. Values: AGE_GROUP_UNSPECIFIED - Age group is not specified.; ADULT - Teens or older.; KIDS - 5-13 years old.; TODDLER - 1-5 years old.; INFANT - 3-12 months old.; NEWBORN - 0-3 months old. |
| productWidth | `ProductDimension` | The width of the product in the units provided. The value must be between 0 (exclusive) and 3000 (inclusive). |
| specialtyHousingType | string enum(SPECIALTY_HOUSING_TYPE_UNSPECIFIED, CORPORATE, LOW_INCOME, MILITARY, SENIOR, SHORT_TERM, STUDENT) | The specialty housing type for the property. Values: SPECIALTY_HOUSING_TYPE_UNSPECIFIED - Unspecified specialty housing type.; CORPORATE - Corporate housing.; LOW_INCOME - Low income housing.; MILITARY - Military housing.; SENIOR - Senior housing.; SHORT_TERM - Short term housing.; STUDENT - Student housing. |
| brand | string | [Brand](https://support.google.com/merchants/answer/6324351) of the item. For example, "Google". |
| vehicleMsrp | `Price` | The MSRP (Manufacturer Suggested Retail Price) for the vehicle in its current configuration. See the [Vehicle MSRP](https://support.google.com/google-ads/answer/14154171) for more information. |
| structuredTitle | `StructuredTitle` | Structured title, for algorithmically (AI)-generated titles. |
| certifiedPreOwned | boolean | Whether the vehicle is OEM [certified pre-owned](https://support.google.com/google-ads/answer/14156475). |
| handlingCutoffTimes | array<`HandlingCutoffTime`> | The handling cutoff times for shipping. |
| multipack | string (int64) | The number of identical products in a business-defined multipack. |
| autoPricingMinPrice | `Price` | A safeguard in the [automated discounts] (https://support.google.com/merchants/answer/10295759) and "Dynamic Promotions" (https://support.google.com/merchants/answer/13949249) projects, ensuring that discounts on business offers do not fall below this value, thereby preserving the offer's value and profitability. |
| propertyName | string | The name of the property. |
| fuelConsumption | `FuelConsumption` | The [fuel consumption](https://support.google.com/google-ads/answer/14543580) of the vehicle. |
| gtins | array<string> | Global Trade Item Numbers ([GTIN](https://support.google.com/merchants/answer/6324461)) of the item. You can provide up to 10 GTINs. |
| unitPricingMeasure | `UnitPricingMeasure` | The measure and dimension of an item. |
| lifestyleImageLinks | array<string> | Additional URLs of lifestyle images of the item, used to explicitly identify images that showcase your item in a real-world context. See the [Help Center article](https://support.google.com/merchants/answer/9103186) for more information. |
| shippingWidth | `ShippingDimension` | Width of the item for shipping. |
| sizeTypes | array<string enum(SIZE_TYPE_UNSPECIFIED, REGULAR, PETITE, MATERNITY, BIG, TALL, PLUS)> | The cut of the item. It can be used to represent combined size types for apparel items. You can provide up to two `SizeType` values, for example, `["PETITE", "MATERNITY"]` or `["BIG", "TALL"]`. For more information, see [Size type](https://support.google.com/merchants/answer/6324497). |
| shortTitle | string | The short title of the item. |
| sustainabilityIncentives | array<`ProductSustainabilityIncentive`> | The list of sustainability incentive programs. |
| identifierExists | boolean | Set this value to false when the item does not have unique product identifiers appropriate to its category, such as GTIN, MPN, and brand. Defaults to true, if not provided. |
| promotionIds | array<string> | The unique ID of a promotion. |
| mpn | string | Manufacturer Part Number ([MPN](https://support.google.com/merchants/answer/6324482)) of the item. |
| energyEfficiencyClass | string enum(ENERGY_EFFICIENCY_CLASS_UNSPECIFIED, APPP, APP, AP, A, B, C, D, E, F, G) | The [energy efficiency class](https://support.google.com/merchants/answer/7562785) as defined in EU directive 2010/30/EU. Values: ENERGY_EFFICIENCY_CLASS_UNSPECIFIED - The energy efficiency class is unspecified.; APPP - A+++.; APP - A++.; AP - A+.; A - A.; B - B.; C - C.; D - D.; E - E.; F - F.; G - G. |
| petPolicy | `PetPolicy` | The pet policy for the property. |
| adsGrouping | string | Used to group items in an arbitrary way. Only for CPA%, discouraged otherwise. For more information, see [Display ads attribute](https://support.google.com/merchants/answer/6069387). |
| vehicleMandatoryInspectionIncluded | boolean | Whether the vehicle is sold with mandatory inspection and maintenance performed before delivery. See the [Vehicle mandatory inspection included](https://support.google.com/google-ads/answer/15956630) for more information.` |

### `ProductStatus`

The status of a product, data validation issues, that is, information about a product computed asynchronously.

| Field | Type | Description |
|---|---|---|
| creationDate | string (google-datetime) | Date on which the item has been created, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format. |
| itemLevelIssues | array<`ItemLevelIssue`> | A list of all issues associated with the product. |
| googleExpirationDate | string (google-datetime) | Date on which the item expires, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format. |
| destinationStatuses | array<`DestinationStatus`> | The intended destinations for the product. |
| lastUpdateDate | string (google-datetime) | Date on which the item has been last updated, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format. |

### `Price`

The price represented as a number and currency.

| Field | Type | Description |
|---|---|---|
| amountMicros | string (int64) | The price represented as a number in micros (1 million micros is an equivalent to one's currency standard unit, for example, 1 USD = 1000000 micros). |
| currencyCode | string | The currency of the price using three-letter acronyms according to [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217). |

### `CarrierShipping`

Carrier-based shipping configuration. Allows for setting shipping speed or shipping cost based on a carrier's provided info.

| Field | Type | Description |
|---|---|---|
| country | string | The [CLDR territory code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) of the country to which an item will ship. |
| fixedMaxTransitTime | string (int64) | Maximum transit time (inclusive) between when the order has shipped and when it is delivered in business days. 0 means that the order is delivered on the same day as it ships. Needs to be provided together with maxHandlingTime. Cannot be set if carrierTransitTime is present. |
| region | string | The geographic region to which a shipping rate applies. See [region](https://support.google.com/merchants/answer/6324484) for more information. |
| carrierPrice | string enum(CARRIER_PRICE_OPTION_UNSPECIFIED, AUSTRALIA_POST_REGULAR, AUSTRALIA_POST_EXPRESS, AUSTRALIA_POST_REGULAR_S, AUSTRALIA_POST_REGULAR_M, AUSTRALIA_POST_REGULAR_L, AUSTRALIA_POST_REGULAR_XL, AUSTRALIA_POST_EXPRESS_S, AUSTRALIA_POST_EXPRESS_M, AUSTRALIA_POST_EXPRESS_L, AUSTRALIA_POST_EXPRESS_XL, TNT_ROAD_EXPRESS, TNT_OVERNIGHT_EXPRESS, TOLL_ROAD_DELIVERY, TOLL_OVERNIGHT_PRIORITY, DHL_PAKET, DHL_PACKCHEN, DPD_EXPRESS_12, DPD_EXPRESS, DPD_CLASSIC_PARCEL, HERMES_PACKCHEN, HERMES_PAKETKLASSE_S, HERMES_PAKETKLASSE_M, HERMES_PAKETKLASSE_L, UPS_EXPRESS, UPS_EXPRESS_SAVER, UPS_EXPRESS_STANDARD, DHL_EXPRESS, DHL_EXPRESS_12, DPD_NEXT_DAY, DPD_STANDARD_NEXT_DAY, DPD_STANDARD_TWO_DAY, RMG_1ST_CLASS_SMALL, RMG_1ST_CLASS_MEDIUM, RMG_2ND_CLASS_SMALL, RMG_2ND_CLASS_MEDIUM, TNT_EXPRESS, TNT_EXPRESS_10, TNT_EXPRESS_12, YODEL_B2C_48HR, YODEL_B2C_72HR, YODEL_B2C_PACKET, FEDEX_GROUND, FEDEX_HOME_DELIVERY, FEDEX_EXPRESS_SAVER, FEDEX_FIRST_OVERNIGHT, FEDEX_PRIORITY_OVERNIGHT, FEDEX_STANDARD_OVERNIGHT, FEDEX_2DAY, UPS_STANDARD, UPS_2ND_DAY_AIR, UPS_2ND_DAY_AM, UPS_3_DAY_SELECT, UPS_GROUND, UPS_NEXT_DAY_AIR, UPS_NEXT_DAY_AIR_EARLY_AM, UPS_NEXT_DAY_AIR_SAVER, USPS_PRIORITY_MAIL_EXPRESS, USPS_MEDIA_MAIL, USPS_GROUND_ADVANTAGE_RETAIL, USPS_PRIORITY_MAIL, USPS_GROUND_ADVANTAGE_COMMERCIAL) | Selected carrier to calculate the shipping price from. Select a carrier from the [available carriers list](https://support.google.com/merchants/answer/15449142#Supported), for example `AUSTRALIA_POST_REGULAR`. Price will be calculated by this selected carrier, the location expressed in originPostalCode, along with the user location to determine the accurate shipping price. Carrier is represented by a carrier service name or a carrier service ID. Cannot be set together with flatPrice. Values: CARRIER_PRICE_OPTION_UNSPECIFIED - Carrier price option is unspecified.; AUSTRALIA_POST_REGULAR - Australia Post Regular shipping service.; AUSTRALIA_POST_EXPRESS - Australia Post Express shipping service.; AUSTRALIA_POST_REGULAR_S - Australia Post Regular Small shipping service.; AUSTRALIA_POST_REGULAR_M - Australia Post Regular Medium shipping service.; AUSTRALIA_POST_REGULAR_L - Australia Post Regular Large shipping service.; AUSTRALIA_POST_REGULAR_XL - Australia Post Regular XL shipping service.; AUSTRALIA_POST_EXPRESS_S - Australia Post Express Small shipping service.; AUSTRALIA_POST_EXPRESS_M - Australia Post Express Medium shipping service.; AUSTRALIA_POST_EXPRESS_L - Australia Post Express Large shipping service.; AUSTRALIA_POST_EXPRESS_XL - Australia Post Express XL shipping service.; TNT_ROAD_EXPRESS - TNT Road Express shipping service.; TNT_OVERNIGHT_EXPRESS - TNT Overnight Express shipping service.; TOLL_ROAD_DELIVERY - Toll Road Delivery shipping service.; TOLL_OVERNIGHT_PRIORITY - Toll Overnight Priority shipping service.; DHL_PAKET - DHL Paket shipping service.; DHL_PACKCHEN - DHL Packchen shipping service.; DPD_EXPRESS_12 - DPD Express 12 shipping service.; DPD_EXPRESS - DPD Express shipping service.; DPD_CLASSIC_PARCEL - DPD Classic Parcel shipping service.; HERMES_PACKCHEN - Hermes Packchen shipping service.; HERMES_PAKETKLASSE_S - Hermes Paketklasse S shipping service.; HERMES_PAKETKLASSE_M - Hermes Paketklasse M shipping service.; HERMES_PAKETKLASSE_L - Hermes Paketklasse L shipping service.; UPS_EXPRESS - UPS Express shipping service.; UPS_EXPRESS_SAVER - UPS Express Saver shipping service.; UPS_EXPRESS_STANDARD - UPS Express Standard shipping service.; DHL_EXPRESS - DHL Express shipping service.; DHL_EXPRESS_12 - DHL Express 12 shipping service.; DPD_NEXT_DAY - DPD Next Day shipping service.; DPD_STANDARD_NEXT_DAY - DPD Standard Next Day shipping service.; DPD_STANDARD_TWO_DAY - DPD Standard Two Day shipping service.; RMG_1ST_CLASS_SMALL - RMG 1st Class Small shipping service.; RMG_1ST_CLASS_MEDIUM - RMG 1st Class Medium shipping service.; RMG_2ND_CLASS_SMALL - RMG 2nd Class Small shipping service.; RMG_2ND_CLASS_MEDIUM - RMG 2nd Class Medium shipping service.; TNT_EXPRESS - TNT Express shipping service.; TNT_EXPRESS_10 - TNT Express 10 shipping service.; TNT_EXPRESS_12 - TNT Express 12 shipping service.; YODEL_B2C_48HR - Yodel B2C 48HR shipping service.; YODEL_B2C_72HR - Yodel B2C 72HR shipping service.; YODEL_B2C_PACKET - Yodel B2C Packet shipping service.; FEDEX_GROUND - FedEx Ground shipping service.; FEDEX_HOME_DELIVERY - FedEx Home Delivery shipping service.; FEDEX_EXPRESS_SAVER - FedEx Express Saver shipping service.; FEDEX_FIRST_OVERNIGHT - FedEx First Overnight shipping service.; FEDEX_PRIORITY_OVERNIGHT - FedEx Priority Overnight shipping service.; FEDEX_STANDARD_OVERNIGHT - FedEx Standard Overnight shipping service.; FEDEX_2DAY - FedEx 2Day shipping service.; UPS_STANDARD - UPS Standard shipping service.; UPS_2ND_DAY_AIR - UPS 2nd Day Air shipping service.; UPS_2ND_DAY_AM - UPS 2nd Day AM shipping service.; UPS_3_DAY_SELECT - UPS 3 Day Select shipping service.; UPS_GROUND - UPS Ground shipping service.; UPS_NEXT_DAY_AIR - UPS Next Day Air shipping service.; UPS_NEXT_DAY_AIR_EARLY_AM - UPS Next Day Air Early AM shipping service.; UPS_NEXT_DAY_AIR_SAVER - UPS Next Day Air Saver shipping service.; USPS_PRIORITY_MAIL_EXPRESS - USPS Priority Mail Express shipping service.; USPS_MEDIA_MAIL - USPS Media Mail shipping service.; USPS_GROUND_ADVANTAGE_RETAIL - USPS Ground Advantage Retail shipping service.; USPS_PRIORITY_MAIL - USPS Priority Mail shipping service.; USPS_GROUND_ADVANTAGE_COMMERCIAL - USPS Ground Advantage Commercial shipping service. |
| carrierTransitTime | string enum(CARRIER_TRANSIT_TIME_OPTION_UNSPECIFIED, DHL_PAKET, DHL_PACKCHEN, DHL_EXPRESSEASY, DPD_EXPRESS, DPD_CLASSIC_PARCEL, HERMES_HAUSTUR, HERMES_PAKETSHOP, GLS_BUSINESS, GLS_EXPRESS, GLS_PRIVATE, COLISSIMO_DOMICILE, DHL_EXPRESS_12AM, DHL_EXPRESS_9AM, GEODIS_EXPRESS, GEODIS_PACK_30, GEODIS_SAME_DAY, GEODIS_TOP_24, TNT_ESSENTIEL_24H, TNT_ESSENTIEL_FLEXIBILITE, FEDEX_GROUND, FEDEX_HOME_DELIVERY, FEDEX_EXPRESS_SAVER, FEDEX_FIRST_OVERNIGHT, FEDEX_PRIORITY_OVERNIGHT, FEDEX_STANDARD_OVERNIGHT, FEDEX_2DAY, UPS_2ND_DAY_AIR, UPS_2ND_DAY_AM, UPS_3_DAY_SELECT, UPS_GROUND, UPS_NEXT_DAY_AIR, UPS_NEXT_DAY_AIR_EARLY_AM, UPS_NEXT_DAY_AIR_SAVER, USPS_PRIORITY_MAIL_EXPRESS, USPS_MEDIA_MAIL, USPS_GROUND_ADVANTAGE_RETAIL, USPS_PRIORITY_MAIL, USPS_GROUND_ADVANTAGE_COMMERCIAL, USPS_FIRST_CLASS_MAIL) | Selected carrier to calculate the shipping speed from. Select a carrier from the [available carriers list](https://support.google.com/merchants/answer/15449142#Supported), for example `AUSTRALIA_POST_REGULAR`. Speed will be calculated by this selected carrier, the location expressed in originPostalCode, along with the user location to determine the accurate delivery speed. Carrier is represented by a carrier service name or a carrier service ID. Cannot be set together with fixedMaxTransitTime or fixedMinTransitTime. Values: CARRIER_TRANSIT_TIME_OPTION_UNSPECIFIED - Carrier transit time option is unspecified.; DHL_PAKET - DHL Paket shipping service.; DHL_PACKCHEN - DHL Packchen shipping service.; DHL_EXPRESSEASY - DHL Express Easy shipping service.; DPD_EXPRESS - DPD Express shipping service.; DPD_CLASSIC_PARCEL - DPD Classic Parcel shipping service.; HERMES_HAUSTUR - Hermes Haustur shipping service.; HERMES_PAKETSHOP - Hermes Paketshop shipping service.; GLS_BUSINESS - GLS Business shipping service.; GLS_EXPRESS - GLS Express shipping service.; GLS_PRIVATE - GLS Private shipping service.; COLISSIMO_DOMICILE - Colissimo Domicile shipping service.; DHL_EXPRESS_12AM - DHL Express 12 AM shipping service.; DHL_EXPRESS_9AM - DHL Express 9 AM shipping service.; GEODIS_EXPRESS - GEODIS Express shipping service.; GEODIS_PACK_30 - GEODIS Pack 30 shipping service.; GEODIS_SAME_DAY - GEODIS Same Day shipping service.; GEODIS_TOP_24 - GEODIS Top 24 shipping service.; TNT_ESSENTIEL_24H - TNT Essentiel 24H shipping service.; TNT_ESSENTIEL_FLEXIBILITE - TNT Essentiel Flexibilite shipping service.; FEDEX_GROUND - FedEx Ground shipping service.; FEDEX_HOME_DELIVERY - FedEx Home Delivery shipping service.; FEDEX_EXPRESS_SAVER - FedEx Express Saver shipping service.; FEDEX_FIRST_OVERNIGHT - FedEx First Overnight shipping service.; FEDEX_PRIORITY_OVERNIGHT - FedEx Priority Overnight shipping service.; FEDEX_STANDARD_OVERNIGHT - FedEx Standard Overnight shipping service.; FEDEX_2DAY - FedEx 2Day shipping service.; UPS_2ND_DAY_AIR - UPS 2nd Day Air shipping service.; UPS_2ND_DAY_AM - UPS 2nd Day AM shipping service.; UPS_3_DAY_SELECT - UPS 3 Day Select shipping service.; UPS_GROUND - UPS Ground shipping service.; UPS_NEXT_DAY_AIR - UPS Next Day Air shipping service.; UPS_NEXT_DAY_AIR_EARLY_AM - UPS Next Day Air Early AM shipping service.; UPS_NEXT_DAY_AIR_SAVER - UPS Next Day Air Saver shipping service.; USPS_PRIORITY_MAIL_EXPRESS - USPS Priority Mail Express shipping service.; USPS_MEDIA_MAIL - USPS Media Mail shipping service.; USPS_GROUND_ADVANTAGE_RETAIL - USPS Ground Advantage Retail shipping service.; USPS_PRIORITY_MAIL - USPS Priority Mail shipping service.; USPS_GROUND_ADVANTAGE_COMMERCIAL - USPS Ground Advantage Commercial shipping service.; USPS_FIRST_CLASS_MAIL - USPS First Class Mail shipping service. |
| maxHandlingTime | string (int64) | Maximum handling time (inclusive) between when the order is received and shipped in business days. 0 means that the order is shipped on the same day as it is received if it happens before the cut-off time. Both maxHandlingTime and fixedMaxTransitTime or carrierTransitTime are required if providing shipping speeds. |
| flatPrice | `Price` | Fixed shipping price, represented as a number with currency. Cannot be set together with carrierPrice or its adjustments (carrierPriceFlatAdjustment, carrierPricePercentageAdjustment). |
| carrierPriceFlatAdjustment | `Price` | A flat adjustment on the carrier price. Can be either positive or negative. Cannot be zero. Requires `carrier_price` to be present. Cannot be set together with flatPrice and carrierPricePercentageAdjustment. |
| minHandlingTime | string (int64) | Minimum handling time (inclusive) between when the order is received and shipped in business days. 0 means that the order is shipped on the same day as it is received if it happens before the cut-off time. minHandlingTime can only be set if maxHandlingTime is also set. |
| postalCode | string | The postal code range that the shipping rate applies to, represented by a postal code (eg. `94043`), a postal code prefix followed by a * wildcard (eg. `94*`), a range between two postal codes (eg. `94043-98033`) or two postal code prefixes of equal length (eg. `94*-98*`). |
| originPostalCode | string | The source location postal code from which this offer ships. Represented only by a full-length postal code. |
| carrierPricePercentageAdjustment | number (double) | A percentual adjustment on the carrier price. Can be either positive or negative. Cannot be zero. Requires `carrier_price` to be present. Cannot be set together with flatPrice and carrierPriceFlatAdjustment. |
| fixedMinTransitTime | string (int64) | Minimum transit time (inclusive) between when the order has shipped and when it is delivered in business days. 0 means that the order is delivered on the same day as it ships. fixedMinTransitTime can only be set if fixedMaxTransitTime is set. Cannot be set if carrierTransitTime is present. |

### `CloudExportAdditionalProperties`

Product property for the Cloud Retail API. For example, properties for a TV product could be "Screen-Resolution" or "Screen-Size".

| Field | Type | Description |
|---|---|---|
| minValue | number (float) | Minimum float value of the given property. For example for a TV product 1.00. |
| floatValue | array<number (float)> | Float values of the given property. For example for a TV product 1.2345. Maximum repeatedness of this value is 400. Values are stored in an arbitrary but consistent order. |
| maxValue | number (float) | Maximum float value of the given property. For example for a TV product 100.00. |
| unitCode | string | Unit of the given property. For example, "Pixels" for a TV product. Maximum string size is 256B. |
| textValue | array<string> | Text value of the given property. For example, "8K(UHD)" could be a text value for a TV product. Maximum repeatedness of this value is 400. Values are stored in an arbitrary but consistent order. Maximum string size is 256 characters. |
| boolValue | boolean | Boolean value of the given property. For example for a TV product, "True" or "False" if the screen is UHD. |
| propertyName | string | Name of the given property. For example, "Screen-Resolution" for a TV product. Maximum string size is 256 characters. |
| intValue | array<string (int64)> | Integer values of the given property. For example, 1080 for a TV product's Screen Resolution. Maximum repeatedness of this value is 400. Values are stored in an arbitrary but consistent order. |

### `Co2Emissions`

The co2 emission of the vehicle.

| Field | Type | Description |
|---|---|---|
| value | string (int64) | The co2 emission value. |
| unit | string enum(UNIT_UNSPECIFIED, GPERKM) | The unit of the co2 emission. Values: UNIT_UNSPECIFIED - Unspecified unit.; GPERKM - Grams per kilometer. |

### `DisplayAddress`

The display address of the property.

| Field | Type | Description |
|---|---|---|
| postalCode | string | The postal code, such as 94043. |
| region | string | The region(state), such as WA, OH, etc. |
| city | string | The city such as Seattle, New York, etc. |
| streetNumber | string | The street number. |
| streetName | string | The street name. |

### `EnergyConsumption`

The energy consumption of the vehicle.

| Field | Type | Description |
|---|---|---|
| unit | string enum(UNIT_UNSPECIFIED, KWHPER100KM) | The unit of the energy consumption. Values: UNIT_UNSPECIFIED - Unspecified unit.; KWHPER100KM - Kilowatt hours per 100 kilometers. |
| value | number (double) | The energy consumption value. |

### `FreeShippingThreshold`

Conditions to be met for a product to have free shipping.

| Field | Type | Description |
|---|---|---|
| country | string | The [CLDR territory code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) of the country to which an item will ship. |
| priceThreshold | `Price` | The minimum product price for the shipping cost to become free. Represented as a number. |

### `FuelConsumption`

The fuel consumption of the vehicle.

| Field | Type | Description |
|---|---|---|
| value | number (double) | The fuel consumption value. |
| unit | string enum(UNIT_UNSPECIFIED, LPER100KM, KGPER100KM) | The unit of the fuel consumption. Values: UNIT_UNSPECIFIED - Unspecified unit.; LPER100KM - Liter per 100 kilometers.; KGPER100KM - Kilograms per 100 kilometers. |

### `HandlingCutoffTime`

Configuration for offer or offer-country level shipping handling cutoff time.

| Field | Type | Description |
|---|---|---|
| disableDeliveryAfterCutoff | boolean | This field only applies to same-day delivery. If true, prevents next-day delivery from being shown for this offer after the cutoff time. This field only applies to same-day delivery offers, for merchants who want to explicitly disable it. |
| cutoffTimezone | string | [Timezone identifier](https://developers.google.com/adwords/api/docs/appendix/codes-formats#timezone-ids) For example 'Europe/Zurich'. If not set, the shipping destination timezone will be used. |
| cutoffTime | string | The handling cutoff time until which an order has to be placed to be processed in the same day. This is a string in format of HHMM (e.g. `1530`) for 3:30 PM. If not configured, the cutoff time will be defaulted to 8AM PST. |
| country | string | The [CLDR territory code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) of the country to which the handling cutoff time applies. |

### `Interval`

Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.

| Field | Type | Description |
|---|---|---|
| startTime | string (google-datetime) | Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. |
| endTime | string (google-datetime) | Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. |

### `LeaseTerm`

The lease term of the property.

| Field | Type | Description |
|---|---|---|
| durationValue | string (int64) | The duration value of the lease term. |
| type | string enum(LEASE_TERM_TYPE_UNSPECIFIED, FIXED_TERM) | The type of lease term. Values: LEASE_TERM_TYPE_UNSPECIFIED - Unspecified lease term type.; FIXED_TERM - Fixed term. |
| durationUnit | string enum(DURATION_UNIT_UNSPECIFIED, MONTHS, WEEKS) | The duration unit of the lease term. Values: DURATION_UNIT_UNSPECIFIED - Unspecified duration unit.; MONTHS - Month.; WEEKS - Week. |

### `LoyaltyPoints`

A message that represents loyalty points.

| Field | Type | Description |
|---|---|---|
| pointsValue | string (int64) | The retailer's loyalty points in absolute value. |
| ratio | number (double) | The ratio of a point when converted to currency. Google assumes currency based on Merchant Center settings. If ratio is left out, it defaults to 1.0. |
| name | string | Name of loyalty points program. It is recommended to limit the name to 12 full-width characters or 24 Roman characters. |

### `LoyaltyProgram`

A message that represents loyalty program. For more information on loyalty programs, see [Overview of loyalty programs](/merchant/api/guides/loyalty/loyalty-programs).

| Field | Type | Description |
|---|---|---|
| memberPriceEffectiveDate | `Interval` | A date range during which the item is eligible for member price. If not specified, the member price is always applicable. The date range is represented by a pair of ISO 8601 dates separated by a space, comma, or slash. |
| loyaltyPoints | string (int64) | The amount of loyalty points earned on a purchase. |
| shippingLabel | string | The label of the shipping benefit. If the field has value, this offer has loyalty shipping benefit. If the field value isn't provided, the item is not eligible for loyalty shipping for the given loyalty tier. |
| programLabel | string | The label of the loyalty program. This is an internal label that uniquely identifies the relationship between a business entity and a loyalty program entity. The label must be provided so that the system can associate the assets below (for example, price and points) with a business. The corresponding program must be linked to the Merchant Center account. |
| price | `Price` | The price for members of the given tier, that is, the instant discount price. Must be smaller or equal to the regular price. |
| tierLabel | string | The label of the tier within the loyalty program. Must match one of the labels within the program. |
| cashbackForFutureUse | `Price` | The cashback that can be used for future purchases. |

### `Mileage`

The mileage of the vehicle.

| Field | Type | Description |
|---|---|---|
| unit | string enum(UNIT_UNSPECIFIED, MILES, KM) | The unit of the mileage. Values: UNIT_UNSPECIFIED - Unspecified unit.; MILES - Miles.; KM - Kilometers. |
| value | string (int64) | The distance value. |

### `PetPolicy`

The pet policy of the property.

| Field | Type | Description |
|---|---|---|
| petTypes | array<string enum(PET_TYPE_UNSPECIFIED, CATS, LARGE_DOGS, SMALL_DOGS)> | The pet types allowed. |
| petsAllowed | boolean | Whether pets are allowed. |

### `PickupCost`

The pickup cost of the item.

| Field | Type | Description |
|---|---|---|
| flatRate | `Price` | Required. The flat rate pickup cost of the item. |
| freeThreshold | `Price` | Optional. The price threshold above which pickup is free of charge. |

### `ProductCertification`

Product [certification](https://support.google.com/merchants/answer/13528839), initially introduced for EU energy efficiency labeling compliance using the EU EPREL database.

| Field | Type | Description |
|---|---|---|
| certificationLabelLink | string | Optional. URL to the certification label (eg. `https://www.example.com/label`), for example, the energy efficiency label required by UK's DESNZ or EU's EPREL. Maximum length is 2000 characters. For more information, see [Certification](https://support.google.com/merchants/answer/13528839). |
| certificationCode | string | The certification code. Maximum length is 2000 characters. |
| certificationAuthority | string enum(CERTIFICATION_AUTHORITY_UNSPECIFIED, ADEME, BMWK, EPA, EC, DESNZ) | The certification authority. Values: CERTIFICATION_AUTHORITY_UNSPECIFIED - Certification authority is not specified.; ADEME - For the French CO2 emissions class for vehicles.; BMWK - For the German CO2 emissions classes for vehicles.; EPA - Environment Protection Agency.; EC - European Commission for energy labels in the EU.; DESNZ - Department for Energy Security and Net Zero. |
| certificationValue | string | The certification value (also known as class, level or grade), for example "A+", "C", "gold". Maximum length is 2000 characters. |
| certificationName | string enum(CERTIFICATION_NAME_UNSPECIFIED, ENERGY_STAR, ENERGY_STAR_MOST_EFFICIENT, EPREL, EU_ECOLABEL, VEHICLE_ENERGY_EFFICIENCY, VEHICLE_ENERGY_EFFICIENCY_DISCHARGED_BATTERY, GB_ENERGY_INFO) | The name of the certification. Values: CERTIFICATION_NAME_UNSPECIFIED - Certification name is not specified.; ENERGY_STAR - Energy Star.; ENERGY_STAR_MOST_EFFICIENT - Energy Star Most Efficient.; EPREL - Represents energy efficiency certifications in the EU European Registry for Energy Labeling (EPREL) database.; EU_ECOLABEL - EU Ecolabel.; VEHICLE_ENERGY_EFFICIENCY - The overall CO2 class of a vehicle; VEHICLE_ENERGY_EFFICIENCY_DISCHARGED_BATTERY - For the CO2 class of a vehicle with a discharged battery.; GB_ENERGY_INFO - Great Britain Energy Information. |
| certificationDocumentLink | string | Optional. URL to the certification document (eg. `https://www.example.com/document`), for example, the product data sheet or fiche required by UK's DESNZ or EU's EPREL. Maximum length is 2000 characters. For more information, see [Certification](https://support.google.com/merchants/answer/13528839). |

### `ProductDetail`

The product details.

| Field | Type | Description |
|---|---|---|
| attributeName | string | The name of the product detail. |
| attributeValue | string | The value of the product detail. |
| sectionName | string | The section header used to group a set of product details. |

### `ProductDimension`

The dimension of the product.

| Field | Type | Description |
|---|---|---|
| value | number (double) | Required. The dimension value represented as a number. The value can have a maximum precision of four decimal places. |
| unit | string | Required. The dimension units. Acceptable values are: * "`in`" * "`cm`" |

### `ProductFee`

The product fee attribute containing type and amount.

| Field | Type | Description |
|---|---|---|
| amount | `Price` | The amount of product fee. |
| type | string enum(FEE_TYPE_UNSPECIFIED, ADMIN_FEE, APPLICATION_FEE, SECURITY_DEPOSIT) | The type of product fee. Values: FEE_TYPE_UNSPECIFIED - Unspecified fee type.; ADMIN_FEE - Admin fee.; APPLICATION_FEE - Application fee.; SECURITY_DEPOSIT - Security deposit. |

### `ProductInstallment`

A message that represents installment.

| Field | Type | Description |
|---|---|---|
| downpayment | `Price` | The up-front down payment amount the buyer has to pay. |
| mileageAllowance | `Mileage` | Optional. The mileage allowance for the lease of the vehicle. Only applicable to vehicle products. |
| months | string (int64) | The number of installments the buyer has to pay. |
| creditType | string enum(CREDIT_TYPE_UNSPECIFIED, FINANCE, LEASE) | Type of installment payments. Values: CREDIT_TYPE_UNSPECIFIED - Default value. This value is unused.; FINANCE - Finance.; LEASE - Lease. |
| annualPercentageRate | number (double) | Optional. Annual percentage rate for `credit_type` finance |
| amount | `Price` | The amount the buyer has to pay per month. |
| totalAmount | `Price` | Optional. Total amount the buyer has to pay, including interest. |

### `ProductMinimumOrderValue`

[Minimum order value](https://support.google.com/merchants/answer/16989009) in the cart before the checkout is permitted.

| Field | Type | Description |
|---|---|---|
| country | string | Required. The [CLDR territory code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) of the country to which an item will ship. |
| price | `Price` | Required. The minimum cart or basket value before the checkout is permitted. |
| service | string | A free-form description of the service class or delivery speed. This should match the service value set for the Shipping attribute. See service. |
| surface | string enum(SURFACE_UNSPECIFIED, ONLINE, LOCAL, ONLINE_LOCAL) | The surface to which the minimum order value applies. Defaults to `ONLINE_LOCAL` if not configured. Values: SURFACE_UNSPECIFIED - Indicates that the surface is unspecified. Defaults to `ONLINE_LOCAL`.; ONLINE - Applies exclusively to delivery/shipping orders (all delivery routes).; LOCAL - Applies exclusively to local in-store pickup (buy online, pickup in store). See [in-store pickup](https://support.google.com/merchants/answer/14634021).; ONLINE_LOCAL - Applies to both delivery/shipping and local in-store pickup. |

### `ProductSustainabilityIncentive`

Information regarding sustainability-related incentive programs such as rebates or tax relief.

| Field | Type | Description |
|---|---|---|
| amount | `Price` | The fixed amount of the incentive. |
| percentage | number (double) | The percentage of the sale price that the incentive is applied to. |
| type | string enum(TYPE_UNSPECIFIED, EV_TAX_CREDIT, EV_PRICE_DISCOUNT) | Sustainability incentive program. Values: TYPE_UNSPECIFIED - Unspecified or unknown sustainability incentive type.; EV_TAX_CREDIT - Program offering tax liability reductions for electric vehicles and, in some countries, plug-in hybrids. These reductions can be based on a specific amount or a percentage of the sale price.; EV_PRICE_DISCOUNT - A subsidy program, often called an environmental bonus, provides a purchase grant for electric vehicles and, in some countries, plug-in hybrids. The grant amount may be a fixed sum or a percentage of the sale price. |

### `ProductWeight`

The weight of the product.

| Field | Type | Description |
|---|---|---|
| value | number (double) | Required. The weight represented as a number. The weight can have a maximum precision of four decimal places. |
| unit | string | Required. The weight unit. Acceptable values are: * "`g`" * "`kg`" * "`oz`" * "`lb`" |

### `QuestionAndAnswer`

The question and answer for the product.

| Field | Type | Description |
|---|---|---|
| answer | string | Required. The answer text. |
| question | string | Required. The question text. |

### `RelatedProduct`

Specifies how other products are related to this product.

| Field | Type | Description |
|---|---|---|
| idType | string enum(ID_TYPE_UNSPECIFIED, GTIN, ID) | Required. The type of the identifier of the related product. For example, [GTIN](https://support.google.com/merchants/answer/6219078) or [product ID](https://support.google.com/merchants/answer/6324405). Values: ID_TYPE_UNSPECIFIED - The identifier type is unspecified.; GTIN - The identifier is a GTIN.; ID - The identifier is a product ID in the feed. |
| relationshipType | string enum(RELATIONSHIP_TYPE_UNSPECIFIED, PART_OF_SET, REQUIRED_PART, OFTEN_BOUGHT_WITH, SUBSTITUTE, DIFFERENT_BRAND, ACCESSORY) | Required. The type of the relationship between this product and the related product. Values: RELATIONSHIP_TYPE_UNSPECIFIED - The relationship type is unspecified.; PART_OF_SET - Part of a set of products that are often purchased together.; REQUIRED_PART - Part that is necessary for the product to function, for example a battery for a battery-operated lamp.; OFTEN_BOUGHT_WITH - A product that this product is often purchased together with, for example a phone case with a phone.; SUBSTITUTE - Product that this product can be substituted for. For example a printer comparable in function to another printer.; DIFFERENT_BRAND - An identical product sold under a different brand, for example a cheaper house brand.; ACCESSORY - An accessory to this product, for example a side table that matches the style of a couch. |
| id | string | Required. The identifier of the related product. |

### `Returns`

The returns of the product.

| Field | Type | Description |
|---|---|---|
| windowDays | string (int64) | The duration of the return window in days. |
| itemConditions | array<string enum(ITEM_CONDITION_UNSPECIFIED, NEW, LIKE_NEW, USED, DEFECTIVE_ONLY)> | The condition the item must be in to be accepted. |
| outcomes | array<string enum(RETURN_OUTCOME_UNSPECIFIED, REFUND, EXCHANGE, STORE_CREDIT)> | The financial outcomes available for a return. |
| methods | array<string enum(RETURN_METHOD_UNSPECIFIED, BY_MAIL, IN_STORE, AT_A_KIOSK, DROP_OFF_LOCATION)> | The physical methods by which the item can be returned. |
| shippingFee | `Price` | The fixed cost out-of-pocket for a customer to return an item. |
| windowType | string enum(RETURN_WINDOW_TYPE_UNSPECIFIED, FINITE_RETURN_WINDOW, NO_RETURNS, LIFETIME) | Special return window behavior. Values: RETURN_WINDOW_TYPE_UNSPECIFIED - The return window type is unspecified.; FINITE_RETURN_WINDOW - Window with a fixed number of days. If this is set, the `window_days` field must be set.; NO_RETURNS - No returns accepted.; LIFETIME - Lifetime returns accepted. |
| shippingFeeType | string enum(RETURN_SHIPPING_FEE_TYPE_UNSPECIFIED, CUSTOMER_RESPONSIBILITY, DEDUCTED_FROM_REFUND) | The type of return shipping fee. Values: RETURN_SHIPPING_FEE_TYPE_UNSPECIFIED - The return shipping fee type is unspecified.; CUSTOMER_RESPONSIBILITY - The customer is responsible for shipping costs.; DEDUCTED_FROM_REFUND - The shipping cost is deducted from the refund. |
| restockingFee | `Price` | A flat restocking fee penalty. |
| countries | array<string> | The [CLDR territory code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) of the countries to which an item can be returned. |
| policyUrl | string | The URL of the return policy. |
| restockingPercentageFee | number (double) | A percentage restocking fee penalty. |

### `Shipping`

The Shipping of the product.

| Field | Type | Description |
|---|---|---|
| region | string | The geographic region to which a shipping rate applies. See [region](https://support.google.com/merchants/answer/6324484) for more information. |
| country | string | The [CLDR territory code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) of the country to which an item will ship. |
| maxTransitTime | string (int64) | Maximum transit time (inclusive) between when the order has shipped and when it is delivered in business days. 0 means that the order is delivered on the same day as it ships. Both maxHandlingTime and maxTransitTime are required if providing shipping speeds. minTransitTime is optional if maxTransitTime is present. |
| minHandlingTime | string (int64) | Minimum handling time (inclusive) between when the order is received and shipped in business days. 0 means that the order is shipped on the same day as it is received if it happens before the cut-off time. minHandlingTime can only be present together with maxHandlingTime; but it is not required if maxHandlingTime is present. |
| locationId | string (int64) | The numeric ID of a location that the shipping rate applies to as defined in the [AdWords API](https://developers.google.com/adwords/api/docs/appendix/geotargeting). |
| minTransitTime | string (int64) | Minimum transit time (inclusive) between when the order has shipped and when it is delivered in business days. 0 means that the order is delivered on the same day as it ships. minTransitTime can only be present together with maxTransitTime; but it is not required if maxTransitTime is present. |
| maxHandlingTime | string (int64) | Maximum handling time (inclusive) between when the order is received and shipped in business days. 0 means that the order is shipped on the same day as it is received if it happens before the cut-off time. Both maxHandlingTime and maxTransitTime are required if providing shipping speeds. minHandlingTime is optional if maxHandlingTime is present. |
| loyaltyTierLabel | string | Optional. The label of the [loyalty tier](https://support.google.com/merchants/answer/6324484) within the loyalty program. Must match one of the tiers set in the loyalty_programs. When set (in combination with [loyalty_program_label](https://support.google.com/merchants/answer/6324484)), this shipping option is only applicable to loyalty program members of the specified tier. |
| handlingCutoffTime | string | The handling cutoff time until which an order has to be placed to be processed in the same day. This is a string in format of HHMM (e.g. `1530`) for 3:30 PM. If not configured, the cutoff time will be defaulted to 8AM PST and `handling_cutoff_timezone` will be ignored. |
| handlingCutoffTimezone | string | [Timezone identifier](https://developers.google.com/adwords/api/docs/appendix/codes-formats#timezone-ids) For example `Europe/Zurich`. This field only applies if `handling_cutoff_time` is set. If `handling_cutoff_time` is set but this field is not set, the shipping destination timezone will be used. If both fields are not set, the handling cutoff time will default to 8AM PST. |
| price | `Price` | Fixed shipping price, represented as a number. |
| postalCode | string | The postal code range that the shipping rate applies to, represented by a postal code, a postal code prefix followed by a * wildcard, a range between two postal codes or two postal code prefixes of equal length. |
| locationGroupName | string | The location where the shipping is applicable, represented by a location group name. |
| service | string | A free-form description of the service class or delivery speed. |
| loyaltyProgramLabel | string | Optional. The label of the [loyalty program](https://support.google.com/merchants/answer/6324484). Must match one of the program labels set in loyalty_programs. When set (in combination with [loyalty_tier_label](https://support.google.com/merchants/answer/6324484)), this shipping option is only applicable to loyalty program members of the specified tier. |

### `ShippingBusinessDaysConfig`

The business days during which orders are on their path to fulfillment. If not provided, Monday to Friday business days will be assumed.

| Field | Type | Description |
|---|---|---|
| country | string | The [CLDR territory code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) of the country to which an item will ship. |
| businessDays | string | Effective days of the week considered for the delivery time calculation. May not be empty. The more business days included the faster the delivery. Can be set through individual days (e.g. `MTWRF`), or day ranges (e.g. `Mon-Fri`). For more information about accepted formats, see [Shipping handling business days](https://support.google.com/merchants/answer/16072859). |

### `ShippingDimension`

The ShippingDimension of the product.

| Field | Type | Description |
|---|---|---|
| value | number (double) | The dimension of the product used to calculate the shipping cost of the item. |
| unit | string | The unit of value. |

### `ShippingWeight`

The ShippingWeight of the product.

| Field | Type | Description |
|---|---|---|
| unit | string | The unit of value. |
| value | number (double) | The weight of the product used to calculate the shipping cost of the item. |

### `StructuredDescription`

Structured description, for algorithmically (AI)-generated descriptions.

| Field | Type | Description |
|---|---|---|
| content | string | The description text Maximum length is 5000 characters |
| digitalSourceType | string enum(DIGITAL_SOURCE_TYPE_UNSPECIFIED, TRAINED_ALGORITHMIC_MEDIA, DEFAULT) | The digital source type. Following [IPTC](https://cv.iptc.org/newscodes/digitalsourcetype). Values: DIGITAL_SOURCE_TYPE_UNSPECIFIED - Digital source type is unspecified.; TRAINED_ALGORITHMIC_MEDIA - Text created algorithmically using a model derived from sampled content.; DEFAULT - Text NOT created algorithmically using a model derived from sampled content (the default) |

### `StructuredTitle`

Structured title, for algorithmically (AI)-generated titles.

| Field | Type | Description |
|---|---|---|
| digitalSourceType | string enum(DIGITAL_SOURCE_TYPE_UNSPECIFIED, TRAINED_ALGORITHMIC_MEDIA, DEFAULT) | The digital source type. Following [IPTC](https://cv.iptc.org/newscodes/digitalsourcetype). Values: DIGITAL_SOURCE_TYPE_UNSPECIFIED - Digital source type is unspecified.; TRAINED_ALGORITHMIC_MEDIA - Text created algorithmically using a model derived from sampled content.; DEFAULT - Text NOT created algorithmically using a model derived from sampled content (the default) |
| content | string | The title text Maximum length is 150 characters |

### `SubscriptionCost`

The SubscriptionCost of the product.

| Field | Type | Description |
|---|---|---|
| period | string enum(SUBSCRIPTION_PERIOD_UNSPECIFIED, MONTH, YEAR, WEEK) | The type of subscription period. Supported values are: * "`month`" * "`year`" * "`week`" Values: SUBSCRIPTION_PERIOD_UNSPECIFIED - Indicates that the subscription period is unspecified.; MONTH - Indicates that the subscription period is month.; YEAR - Indicates that the subscription period is year.; WEEK - Indicates that the subscription period is week. |
| periodLength | string (int64) | The number of subscription periods the buyer has to pay. |
| amount | `Price` | The amount the buyer has to pay per subscription period. |

### `UnitArea`

The unit area of the property.

| Field | Type | Description |
|---|---|---|
| value | number (double) | The area value. |
| unit | string enum(UNIT_UNSPECIFIED, SQM, SQFT) | The unit of area. Values: UNIT_UNSPECIFIED - Unspecified unit.; SQM - Square meters.; SQFT - Square feet. |

### `UnitPricingBaseMeasure`

The UnitPricingBaseMeasure of the product.

| Field | Type | Description |
|---|---|---|
| unit | string | The unit of the denominator. |
| value | string (int64) | The denominator of the unit price. |

### `UnitPricingMeasure`

The UnitPricingMeasure of the product.

| Field | Type | Description |
|---|---|---|
| value | number (double) | The measure of an item. |
| unit | string | The unit of the measure. |

### `VariantOption`

Additional product variants for the product.

| Field | Type | Description |
|---|---|---|
| name | string | Required. The name of the variant. For example, "Color", "Memory", "Size", "Length" |
| value | string | Required. The value of the variant. For example, "Red", "128GB", "XL", "100cm" |

### `Warranty`

The warranty of the product.

| Field | Type | Description |
|---|---|---|
| mileage | `Mileage` | The warranty mileage (only applies to vehicles). |
| durationUnit | string enum(WARRANTY_DURATION_UNIT_UNSPECIFIED, MONTH, YEAR) | The unit for the warranty duration. Assumed to be `MONTH` if equal to `WARRANTY_DURATION_UNIT_UNSPECIFIED`. Values: WARRANTY_DURATION_UNIT_UNSPECIFIED - Indicates that the warranty duration unit is unspecified.; MONTH - Indicates that the warranty duration unit is month.; YEAR - Indicates that the warranty duration unit is year. |
| duration | string (int64) | The warranty duration in units. Default is in months, can be overridden by the `duration_unit` field. |

### `DestinationStatus`

The destination status of the product status. Equivalent to `StatusPerReportingContext` in Reports API.

| Field | Type | Description |
|---|---|---|
| disapprovedCountries | array<string> | List of country codes (ISO 3166-1 alpha-2) where the offer is disapproved. |
| reportingContext | string enum(REPORTING_CONTEXT_ENUM_UNSPECIFIED, SHOPPING_ADS, DISCOVERY_ADS, DEMAND_GEN_ADS, DEMAND_GEN_ADS_DISCOVER_SURFACE, VIDEO_ADS, DISPLAY_ADS, LOCAL_INVENTORY_ADS, VEHICLE_INVENTORY_ADS, FREE_LISTINGS, FREE_LISTINGS_UCP_CHECKOUT, FREE_LOCAL_LISTINGS, FREE_LOCAL_VEHICLE_LISTINGS, YOUTUBE_AFFILIATE, YOUTUBE_SHOPPING, CLOUD_RETAIL, LOCAL_CLOUD_RETAIL, PRODUCT_REVIEWS, MERCHANT_REVIEWS, YOUTUBE_CHECKOUT, RENTAL_ADS) | The name of the reporting context. Values: REPORTING_CONTEXT_ENUM_UNSPECIFIED - Not specified.; SHOPPING_ADS - [Shopping ads](https://support.google.com/merchants/answer/6149970).; DISCOVERY_ADS - Deprecated: Use `DEMAND_GEN_ADS` instead. [Discovery and Demand Gen ads](https://support.google.com/merchants/answer/13389785).; DEMAND_GEN_ADS - [Demand Gen ads](https://support.google.com/merchants/answer/13389785).; DEMAND_GEN_ADS_DISCOVER_SURFACE - [Demand Gen ads on Discover surface](https://support.google.com/merchants/answer/13389785).; VIDEO_ADS - [Video ads](https://support.google.com/google-ads/answer/6340491).; DISPLAY_ADS - [Display ads](https://support.google.com/merchants/answer/6069387).; LOCAL_INVENTORY_ADS - [Local inventory ads](https://support.google.com/merchants/answer/3271956).; VEHICLE_INVENTORY_ADS - [Vehicle inventory ads](https://support.google.com/merchants/answer/11544533).; FREE_LISTINGS - [Free product listings](https://support.google.com/merchants/answer/9199328).; FREE_LISTINGS_UCP_CHECKOUT - [Free product listings on UCP checkout](https://developers.google.com/merchant/ucp).; FREE_LOCAL_LISTINGS - [Free local product listings](https://support.google.com/merchants/answer/9825611).; FREE_LOCAL_VEHICLE_LISTINGS - [Free local vehicle listings](https://support.google.com/merchants/answer/11544533).; YOUTUBE_AFFILIATE - [Youtube Affiliate](https://support.google.com/youtube/answer/13376398).; YOUTUBE_SHOPPING - [YouTube Shopping](https://support.google.com/merchants/answer/13478370).; CLOUD_RETAIL - [Cloud retail](https://cloud.google.com/solutions/retail).; LOCAL_CLOUD_RETAIL - [Local cloud retail](https://cloud.google.com/solutions/retail).; PRODUCT_REVIEWS - [Product Reviews](https://support.google.com/merchants/answer/14620732).; MERCHANT_REVIEWS - [Merchant Reviews](https://developers.google.com/merchant-review-feeds).; YOUTUBE_CHECKOUT - YouTube Checkout .; RENTAL_ADS - Real Estate Rental Ads. . |
| pendingCountries | array<string> | List of country codes (ISO 3166-1 alpha-2) where the offer is pending approval. |
| approvedCountries | array<string> | List of country codes (ISO 3166-1 alpha-2) where the offer is approved. |

### `ItemLevelIssue`

The ItemLevelIssue of the product status.

| Field | Type | Description |
|---|---|---|
| code | string | The error code of the issue. |
| applicableCountries | array<string> | List of country codes (ISO 3166-1 alpha-2) where issue applies to the offer. |
| resolution | string | Whether the issue can be resolved by the business. |
| description | string | A short issue description in English. |
| severity | string enum(SEVERITY_UNSPECIFIED, NOT_IMPACTED, DEMOTED, DISAPPROVED) | How this issue affects serving of the offer. Values: SEVERITY_UNSPECIFIED - Not specified.; NOT_IMPACTED - This issue represents a warning and does not have a direct affect on the product.; DEMOTED - The product is demoted and most likely have limited performance in search results; DISAPPROVED - Issue disapproves the product. |
| documentation | string | The URL of a web page to help with resolving this issue. |
| attribute | string | The attribute's name, if the issue is caused by a single attribute. |
| reportingContext | string enum(REPORTING_CONTEXT_ENUM_UNSPECIFIED, SHOPPING_ADS, DISCOVERY_ADS, DEMAND_GEN_ADS, DEMAND_GEN_ADS_DISCOVER_SURFACE, VIDEO_ADS, DISPLAY_ADS, LOCAL_INVENTORY_ADS, VEHICLE_INVENTORY_ADS, FREE_LISTINGS, FREE_LISTINGS_UCP_CHECKOUT, FREE_LOCAL_LISTINGS, FREE_LOCAL_VEHICLE_LISTINGS, YOUTUBE_AFFILIATE, YOUTUBE_SHOPPING, CLOUD_RETAIL, LOCAL_CLOUD_RETAIL, PRODUCT_REVIEWS, MERCHANT_REVIEWS, YOUTUBE_CHECKOUT, RENTAL_ADS) | The reporting context the issue applies to. Values: REPORTING_CONTEXT_ENUM_UNSPECIFIED - Not specified.; SHOPPING_ADS - [Shopping ads](https://support.google.com/merchants/answer/6149970).; DISCOVERY_ADS - Deprecated: Use `DEMAND_GEN_ADS` instead. [Discovery and Demand Gen ads](https://support.google.com/merchants/answer/13389785).; DEMAND_GEN_ADS - [Demand Gen ads](https://support.google.com/merchants/answer/13389785).; DEMAND_GEN_ADS_DISCOVER_SURFACE - [Demand Gen ads on Discover surface](https://support.google.com/merchants/answer/13389785).; VIDEO_ADS - [Video ads](https://support.google.com/google-ads/answer/6340491).; DISPLAY_ADS - [Display ads](https://support.google.com/merchants/answer/6069387).; LOCAL_INVENTORY_ADS - [Local inventory ads](https://support.google.com/merchants/answer/3271956).; VEHICLE_INVENTORY_ADS - [Vehicle inventory ads](https://support.google.com/merchants/answer/11544533).; FREE_LISTINGS - [Free product listings](https://support.google.com/merchants/answer/9199328).; FREE_LISTINGS_UCP_CHECKOUT - [Free product listings on UCP checkout](https://developers.google.com/merchant/ucp).; FREE_LOCAL_LISTINGS - [Free local product listings](https://support.google.com/merchants/answer/9825611).; FREE_LOCAL_VEHICLE_LISTINGS - [Free local vehicle listings](https://support.google.com/merchants/answer/11544533).; YOUTUBE_AFFILIATE - [Youtube Affiliate](https://support.google.com/youtube/answer/13376398).; YOUTUBE_SHOPPING - [YouTube Shopping](https://support.google.com/merchants/answer/13478370).; CLOUD_RETAIL - [Cloud retail](https://cloud.google.com/solutions/retail).; LOCAL_CLOUD_RETAIL - [Local cloud retail](https://cloud.google.com/solutions/retail).; PRODUCT_REVIEWS - [Product Reviews](https://support.google.com/merchants/answer/14620732).; MERCHANT_REVIEWS - [Merchant Reviews](https://developers.google.com/merchant-review-feeds).; YOUTUBE_CHECKOUT - YouTube Checkout .; RENTAL_ADS - Real Estate Rental Ads. . |
| detail | string | A detailed issue description in English. |

