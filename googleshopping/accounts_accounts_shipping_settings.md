# Merchant API accounts_v1: accounts.shippingSettings

> Source: Merchant API `accounts_v1` REST Discovery document (https://merchantapi.googleapis.com/$discovery/rest?version=accounts_v1); overview https://developers.google.com/merchant/api/overview. Fetched 2026-11-19.

---

## accounts.shippingSettings.insert

`POST https://merchantapi.googleapis.com/accounts/v1/{+parent}/shippingSettings:insert`

Replace the shipping setting of a business with the request shipping setting.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The account for which this shipping setting will be inserted. If you are using an advanced account, you must specify the unique identifier of the sub-account for which you want to insert the shipping setting. Format: `accounts/{ACCOUNT_ID}` |

**Request body**: `ShippingSettings`

**Response**: `ShippingSettings`

---

## accounts.shippingSettings.getShippingSettings

`GET https://merchantapi.googleapis.com/accounts/v1/{+name}`

Retrieve shipping setting information.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The name of the shipping setting to retrieve. Format: `accounts/{account}/shippingsettings` |

**Response**: `ShippingSettings`

---

## Schemas

### `ShippingSettings`

The Merchant Center account's [shipping settings](https://support.google.com/merchants/answer/6069284). The `ShippingSettings` resource lets you retrieve and update the shipping settings of your advanced account and all its associated sub-accounts. For more information, see [Manage shipping settings](https://developers.google.com/merchant/api/guides/accounts/manage-shipping-settings).

| Field | Type | Description |
|---|---|---|
| name | string | Identifier. The resource name of the shipping settings. Format: `accounts/{account}/shippingSettings`. For example, `accounts/123456/shippingSettings`. |
| etag | string | Required. This field helps avoid async issues. It ensures that the shipping setting data doesn't change between the `get` call and the `insert` call. The user should follow these steps: 1. Set the etag field as an empty string for the initial shipping setting creation. 2. After the initial creation, call the `get` method to obtain an etag and the current shipping setting data before calling `insert`. 3. Modify the shipping setting information. 4. Call the `insert` method with the shipping setting information and the etag obtained in step 2. 5. If the shipping setting data changes between step 2 and step 4, the insert request will fail because the etag changes every time the shipping setting data changes. In this case, the user should repeat steps 2-4 with the new etag. |
| warehouses | array<`Warehouse`> | Optional. A list of warehouses which can be referred to in `services`. |
| services | array<`Service`> | Optional. The target account's list of services. |

### `Service`

Shipping service.

| Field | Type | Description |
|---|---|---|
| loyaltyPrograms | array<`LoyaltyProgram`> | Optional. Loyalty programs that this shipping service is limited to. |
| minimumOrderValueTable | `MinimumOrderValueTable` | Optional. Table of per store minimum order values for the pickup fulfillment type. Cannot be set together with `minimum_order_value`. |
| serviceName | string | Required. Free-form name of the service. Must be unique within target account. |
| minimumOrderValue | `Price` | Optional. Minimum order value for this service. If set, indicates that customers will have to spend at least this amount. All prices within a service must have the same currency. Cannot be set together with `minimum_order_value_table`. |
| rateGroups | array<`RateGroup`> | Optional. Shipping rate group definitions. Only the last one is allowed to have an empty `applicable_shipping_labels`, which means "everything else". The other `applicable_shipping_labels` must not overlap. |
| storeConfig | `StoreConfig` | A list of stores your products are delivered from. This is only valid for the local delivery shipment type. |
| deliveryTime | `DeliveryTime` | Required. Time spent in various aspects from order to the delivery of the product. |
| shipmentType | string enum(SHIPMENT_TYPE_UNSPECIFIED, DELIVERY, LOCAL_DELIVERY, COLLECTION_POINT) | Optional. Type of locations this service ships orders to. Values: SHIPMENT_TYPE_UNSPECIFIED - This service did not specify shipment type.; DELIVERY - This service ships orders to an address chosen by the customer.; LOCAL_DELIVERY - This service ships orders to an address chosen by the customer. The order is shipped from a local store near by.; COLLECTION_POINT - This service ships orders to an address chosen by the customer. The order is shipped from a collection point. |
| deliveryCountries | array<string> | Required. The CLDR territory code of the countries to which the service applies. |
| active | boolean | Required. A boolean exposing the active status of the shipping service. |
| currencyCode | string | Required. The CLDR code of the currency to which this service applies. Must match that of the prices in rate groups. |

### `Warehouse`

A fulfillment warehouse, which stores and handles inventory.

| Field | Type | Description |
|---|---|---|
| cutoffTime | `WarehouseCutoffTime` | Required. The latest time of day that an order can be accepted and begin processing. Later orders will be processed in the next day. The time is based on the warehouse postal code. |
| name | string | Required. The name of the warehouse. Must be unique within account. |
| handlingDays | string (int64) | Required. The number of days it takes for this warehouse to pack up and ship an item. This is on the warehouse level, but can be overridden on the offer level based on the attributes of an item. |
| businessDayConfig | `BusinessDayConfig` | Business days of the warehouse. If not set, will be Monday to Friday by default. |
| shippingAddress | `Address` | Required. Shipping address of the warehouse. |

### `DeliveryTime`

Time spent in various aspects from order to the delivery of the product.

| Field | Type | Description |
|---|---|---|
| maxHandlingDays | integer (int32) | Maximum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped. Must be greater than or equal to `min_handling_days`. 'min_handling_days' and 'max_handling_days' should be either set or not set at the same time. |
| minTransitDays | integer (int32) | Minimum number of business days that is spent in transit. 0 means same day delivery, 1 means next day delivery. Either `min_transit_days`, `max_transit_days` or `transit_time_table` must be set, but not both. |
| handlingBusinessDayConfig | `BusinessDayConfig` | The business days during which orders can be handled. If not provided, Monday to Friday business days will be assumed. |
| transitBusinessDayConfig | `BusinessDayConfig` | The business days during which orders can be in-transit. If not provided, Monday to Friday business days will be assumed. |
| warehouseBasedDeliveryTimes | array<`WarehouseBasedDeliveryTime`> | Optional. Indicates that the delivery time should be calculated per warehouse (shipping origin location) based on the settings of the selected carrier. When set, no other transit time related field in delivery time should be set. |
| transitTimeTable | `TransitTable` | Transit time table, number of business days spent in transit based on row and column dimensions. Either `min_transit_days`, `max_transit_days` or `transit_time_table` can be set, but not both. |
| maxTransitDays | integer (int32) | Maximum number of business days that is spent in transit. 0 means same day delivery, 1 means next day delivery. Must be greater than or equal to `min_transit_days`. |
| cutoffTime | `CutoffTime` | Business days cutoff time definition. If not configured the cutoff time will be defaulted to 8AM PST. |
| minHandlingDays | integer (int32) | Minimum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped. 'min_handling_days' and 'max_handling_days' should be either set or not set at the same time. |

### `LoyaltyProgram`

[Loyalty program](https://support.google.com/merchants/answer/12922446) provided by a business.

| Field | Type | Description |
|---|---|---|
| programLabel | string | This is the loyalty program label set in your loyalty program settings in Merchant Center. This sub-attribute allows Google to map your loyalty program to eligible offers. |
| loyaltyProgramTiers | array<`LoyaltyProgramTiers`> | Optional. Loyalty program tier of this shipping service. |

### `MinimumOrderValueTable`

Table of per store minimum order values for the pickup fulfillment type.

| Field | Type | Description |
|---|---|---|
| storeCodeSetWithMovs | array<`StoreCodeSetWithMov`> | Required. A list of store code sets sharing the same minimum order value (MOV). At least two sets are required and the last one must be empty, which signifies 'MOV for all other stores'. Each store code can only appear once across all the sets. All prices within a service must have the same currency. |

### `Price`

The price represented as a number and currency.

| Field | Type | Description |
|---|---|---|
| amountMicros | string (int64) | The price represented as a number in micros (1 million micros is an equivalent to one's currency standard unit, for example, 1 USD = 1000000 micros). |
| currencyCode | string | The currency of the price using three-letter acronyms according to [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217). |

### `RateGroup`

Shipping rate group definitions. Only the last one is allowed to have an empty `applicable_shipping_labels`, which means "everything else". The other `applicable_shipping_labels` must not overlap.

| Field | Type | Description |
|---|---|---|
| subtables | array<`Table`> | Optional. A list of subtables referred to by `main_table`. Can only be set if `main_table` is set. |
| carrierRates | array<`CarrierRate`> | Optional. A list of carrier rates that can be referred to by `main_table` or `single_value`. |
| name | string | Optional. Name of the rate group. If set has to be unique within shipping service. |
| singleValue | `Value` | The value of the rate group (For example flat rate $10). Can only be set if `main_table` and `subtables` are not set. |
| applicableShippingLabels | array<string> | Required. A list of [shipping labels](https://support.google.com/merchants/answer/6324504) defining the products to which this rate group applies to. This is a disjunction: only one of the labels has to match for the rate group to apply. May only be empty for the last rate group of a service. |
| mainTable | `Table` | A table defining the rate group, when `single_value` is not expressive enough. Can only be set if `single_value` is not set. |

### `StoreConfig`

A list of stores your products are delivered from. This is only valid for the local delivery shipment type.

| Field | Type | Description |
|---|---|---|
| storeCodes | array<string> | Optional. A list of store codes that provide local delivery. If empty, then `all_stores` must be true. |
| storeServiceType | string enum(STORE_SERVICE_TYPE_UNSPECIFIED, ALL_STORES, SELECTED_STORES) | Indicates whether all stores, or selected stores, listed by this business provide local delivery. Values: STORE_SERVICE_TYPE_UNSPECIFIED - Did not specify store service type.; ALL_STORES - Indicates whether all stores, current and future, listed by this business provide local delivery.; SELECTED_STORES - Indicates that only the stores listed in `store_codes` are eligible for local delivery. |
| serviceRadius | `Distance` | Maximum delivery radius. This is only required for the local delivery shipment type. |
| cutoffConfig | `CutoffConfig` | Configs related to local delivery ends for the day. |

### `Address`

Shipping address of the warehouse.

| Field | Type | Description |
|---|---|---|
| postalCode | string | Required. Postal code or ZIP (For example "94043"). |
| city | string | Required. City, town or commune. May also include dependent localities or sublocalities (For example neighborhoods or suburbs). |
| administrativeArea | string | Required. Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC"). |
| regionCode | string | Required. [CLDR country code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) (For example "US"). |
| streetAddress | string | Street-level part of the address. For example: `111w 31st Street`. |

### `BusinessDayConfig`

Business days of the warehouse.

| Field | Type | Description |
|---|---|---|
| businessDays | array<string enum(WEEKDAY_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY)> | Required. Regular business days. May not be empty. |

### `WarehouseCutoffTime`

The latest time of day that an order can be accepted and begin processing. Later orders will be processed in the next day. The time is based on the warehouse postal code.

| Field | Type | Description |
|---|---|---|
| hour | integer (int32) | Required. Hour of the cutoff time until which an order has to be placed to be processed in the same day by the warehouse. Hour is based on the timezone of warehouse. |
| minute | integer (int32) | Required. Minute of the cutoff time until which an order has to be placed to be processed in the same day by the warehouse. Minute is based on the timezone of warehouse. |

### `CutoffTime`

Business days cutoff time definition.

| Field | Type | Description |
|---|---|---|
| hour | integer (int32) | Required. Hour of the cutoff time until which an order has to be placed to be processed in the same day. |
| timeZone | string | Required. [Timezone identifier](https://developers.google.com/adwords/api/docs/appendix/codes-formats#timezone-ids) For example "Europe/Zurich". |
| minute | integer (int32) | Required. Minute of the cutoff time until which an order has to be placed to be processed in the same day. |

### `TransitTable`

Transit time table, number of business days spent in transit based on row and column dimensions. Either `min_transit_days`, `max_transit_days` or `transit_time_table` can be set, but not both.

| Field | Type | Description |
|---|---|---|
| transitTimeLabels | array<string> | Required. A list of transit time labels. The last value can be `"all other labels"`. Example: `["food", "electronics", "all other labels"]`. |
| postalCodeGroupNames | array<string> | Required. A list of region names Region.name . The last value can be `"all other locations"`. Example: `["zone 1", "zone 2", "all other locations"]`. The referred postal code groups must match the delivery country of the service. |
| rows | array<`TransitTimeRow`> | Required. If there's only one dimension set of `postal_code_group_names` or `transit_time_labels`, there are multiple rows each with one value for that dimension. If there are two dimensions, each row corresponds to a `postal_code_group_names`, and columns (values) to a `transit_time_labels`. |

### `WarehouseBasedDeliveryTime`

Indicates that the delivery time should be calculated per warehouse (shipping origin location) based on the settings of the selected carrier. When set, no other transit time related field in `delivery_time` should be set.

| Field | Type | Description |
|---|---|---|
| carrierService | string | Required. Carrier service, such as `"ground"` or `"2 days"`. The name of the service must be in the eddSupportedServices list. |
| warehouse | string | Required. Warehouse name. This should match warehouse. |
| carrier | string | Required. Carrier, such as `"UPS"` or `"Fedex"`. [supported carriers](https://support.google.com/merchants/answer/7050921#zippy=%2Ccarrier-rates-au-de-uk-and-us-only) |

### `LoyaltyProgramTiers`

Subset of a business's loyalty program.

| Field | Type | Description |
|---|---|---|
| tierLabel | string | The tier label [tier_label] sub-attribute differentiates offer level benefits between each tier. This value is also set in your program settings in Merchant Center, and is required for data source changes even if your loyalty program only has 1 tier. |

### `StoreCodeSetWithMov`

A list of store code sets sharing the same minimum order value. At least two sets are required and the last one must be empty, which signifies 'MOV for all other stores'. Each store code can only appear once across all the sets. All prices within a service must have the same currency.

| Field | Type | Description |
|---|---|---|
| storeCodes | array<string> | Optional. A list of unique store codes or empty for the catch all. |
| value | `Price` | The minimum order value for the given stores. |

### `CarrierRate`

A list of carrier rates that can be referred to by `main_table` or `single_value`. Supported carrier services are defined in https://support.google.com/merchants/answer/12577710?ref_topic=12570808&sjid=10662598224319463032-NC#zippy=%2Cdelivery-cost-rate-type%2Ccarrier-rate-au-de-uk-and-us-only.

| Field | Type | Description |
|---|---|---|
| carrier | string | Required. Carrier service, such as `"UPS"` or `"Fedex"`. |
| carrierService | string | Required. Carrier service, such as `"ground"` or `"2 days"`. |
| percentageAdjustment | string | Optional. Multiplicative shipping rate modifier as a number in decimal notation. Can be negative. For example `"5.4"` increases the rate by 5.4%, `"-3"` decreases the rate by 3%. |
| originPostalCode | string | Required. Shipping origin for this carrier rate. |
| flatAdjustment | `Price` | Optional. Additive shipping rate modifier. Can be negative. For example `{ "amount_micros": 1, "currency_code" : "USD" }` adds $1 to the rate, `{ "amount_micros": -3, "currency_code" : "USD" }` removes $3 from the rate. |
| name | string | Required. Name of the carrier rate. Must be unique per rate group. |

### `Table`

A table defining the rate group, when `single_value` is not expressive enough.

| Field | Type | Description |
|---|---|---|
| name | string | Name of the table. Required for subtables, ignored for the main table. |
| columnHeaders | `Headers` | Headers of the table's columns. Optional: if not set then the table has only one dimension. |
| rows | array<`Row`> | Required. The list of rows that constitute the table. Must have the same length as `row_headers`. |
| rowHeaders | `Headers` | Required. Headers of the table's rows. |

### `Value`

The single value of a rate group or the value of a rate group table's cell. Exactly one of `no_shipping`, `flat_rate`, `price_percentage`, `carrier_rateName`, `subtable_name` must be set.

| Field | Type | Description |
|---|---|---|
| flatRate | `Price` | A flat rate. Can only be set if all other fields are not set. |
| subtable | string | The name of a subtable. Can only be set in table cells (For example, not for single values), and only if all other fields are not set. |
| pricePercentage | string | A percentage of the price represented as a number in decimal notation (For example, `"5.4"`). Can only be set if all other fields are not set. |
| noShipping | boolean | If true, then the product can't be shipped. Must be true when set, can only be set if all other fields are not set. |
| carrierRate | string | The name of a carrier rate referring to a carrier rate defined in the same rate group. Can only be set if all other fields are not set. |

### `CutoffConfig`

Configs related to local delivery ends for the day.

| Field | Type | Description |
|---|---|---|
| noDeliveryPostCutoff | boolean | Businesses can opt-out of showing n+1 day local delivery when they have a shipping service configured to n day local delivery. For example, if the shipping service defines same-day delivery, and it's past the cut-off, setting this field to `true` results in the calculated shipping service rate returning `NO_DELIVERY_POST_CUTOFF`. In the same example, setting this field to `false` results in the calculated shipping time being one day. This is only for local delivery. |
| storeCloseOffsetHours | string (int64) | Only valid with local delivery fulfillment. Represents cutoff time as the number of hours before store closing. Mutually exclusive with `local_cutoff_time`. |
| localCutoffTime | `LocalCutoffTime` | Time that local delivery ends for the day. |

### `Distance`

Maximum delivery radius. This is only required for the local delivery shipment type.

| Field | Type | Description |
|---|---|---|
| value | string (int64) | Integer value of distance. |
| unit | string enum(UNIT_UNSPECIFIED, MILES, KILOMETERS) | Unit can differ based on country, it is parameterized to include miles and kilometers. Values: UNIT_UNSPECIFIED - Unit unspecified; MILES - Unit in miles; KILOMETERS - Unit in kilometers |

### `TransitTimeRow`

If there's only one dimension set of `postal_code_group_names` or `transit_time_labels`, there are multiple rows each with one value for that dimension. If there are two dimensions, each row corresponds to a `postal_code_group_names`, and columns (values) to a `transit_time_labels`.

| Field | Type | Description |
|---|---|---|
| values | array<`TransitTimeValue`> | Required. Transit time range (min-max) in business days. |

### `Headers`

A non-empty list of row or column headers for a table. Exactly one of `prices`, `weights`, `num_items`, `postal_code_group_names`, or `location` must be set.

| Field | Type | Description |
|---|---|---|
| locations | array<`LocationIdSet`> | Required. A list of location ID sets. Must be non-empty. Can only be set if all other fields are not set. |
| prices | array<`Price`> | Required. A list of inclusive order price upper bounds. The last price's value can be infinity by setting price amount_micros = -1. For example `[{"amount_micros": 10000000, "currency_code": "USD"}, {"amount_micros": 500000000, "currency_code": "USD"}, {"amount_micros": -1, "currency_code": "USD"}]` represents the headers "<= $10", "<= $500", and "> $500". All prices within a service must have the same currency. Must be non-empty. Must be positive except -1. Can only be set if all other fields are not set. |
| numberOfItems | array<string> | Required. A list of inclusive number of items upper bounds. The last value can be `"infinity"`. For example `["10", "50", "infinity"]` represents the headers "<= 10 items", "<= 50 items", and "> 50 items". Must be non-empty. Can only be set if all other fields are not set. |
| weights | array<`Weight`> | Required. A list of inclusive order weight upper bounds. The last weight's value can be infinity by setting price amount_micros = -1. For example `[{"amount_micros": 10000000, "unit": "kg"}, {"amount_micros": 50000000, "unit": "kg"}, {"amount_micros": -1, "unit": "kg"}]` represents the headers "<= 10kg", "<= 50kg", and "> 50kg". All weights within a service must have the same unit. Must be non-empty. Must be positive except -1. Can only be set if all other fields are not set. |
| postalCodeGroupNames | array<string> | Required. A list of postal group names. The last value can be `"all other locations"`. Example: `["zone 1", "zone 2", "all other locations"]`. The referred postal code groups must match the delivery country of the service. Must be non-empty. Can only be set if all other fields are not set. |

### `Row`

Include a list of cells.

| Field | Type | Description |
|---|---|---|
| cells | array<`Value`> | Required. The list of cells that constitute the row. Must have the same length as `columnHeaders` for two-dimensional tables, a length of 1 for one-dimensional tables. |

### `LocalCutoffTime`

Time that local delivery ends for the day.

| Field | Type | Description |
|---|---|---|
| hour | string (int64) | Hour local delivery orders must be placed by to process the same day. |
| minute | string (int64) | Minute local delivery orders must be placed by to process the same day. |

### `TransitTimeValue`

Transit time range (min-max) in business days.

| Field | Type | Description |
|---|---|---|
| maxTransitDays | integer (int32) | Must be greater than or equal to `min_transit_days`. |
| minTransitDays | integer (int32) | Minimum transit time range in business days. 0 means same day delivery, 1 means next day delivery. |

### `LocationIdSet`

A list of location ID sets. Must be non-empty. Can only be set if all other fields are not set.

| Field | Type | Description |
|---|---|---|
| locationIds | array<string> | Required. A non-empty list of [location IDs](https://developers.google.com/adwords/api/docs/appendix/geotargeting). They must all be of the same location type (For example, state). |

### `Weight`

The weight represented as the value in string and the unit.

| Field | Type | Description |
|---|---|---|
| unit | string enum(WEIGHT_UNIT_UNSPECIFIED, POUND, KILOGRAM) | Required. The weight unit. Acceptable values are: kg and lb Values: WEIGHT_UNIT_UNSPECIFIED - unit unspecified; POUND - lb unit.; KILOGRAM - kg unit. |
| amountMicros | string (int64) | Required. The weight represented as a number in micros (1 million micros is an equivalent to one's currency standard unit, for example, 1 kg = 1000000 micros). This field can also be set as infinity by setting to -1. This field only support -1 and positive value. |

