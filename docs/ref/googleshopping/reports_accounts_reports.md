# Merchant API reports_v1: accounts.reports

> Source: Merchant API `reports_v1` REST Discovery document (https://merchantapi.googleapis.com/$discovery/rest?version=reports_v1); overview https://developers.google.com/merchant/api/overview. Fetched 2026-11-19.

---

## accounts.reports.search

`POST https://merchantapi.googleapis.com/reports/v1/{+parent}/reports:search`

Retrieves a report defined by a search query. The response might contain fewer rows than specified by `page_size`. Rely on `next_page_token` to determine if there are more rows to be requested. Executing this method requires the Performance and insights (`PERFORMANCE_REPORTING`) or admin (`ADMIN`) access right. For more information, see [Get started](https://developers.google.com/merchant/api/guides/reports/get-started), [Use Merchant Center Query Language](https://developers.google.com/merchant/api/guides/reports/query-language), and [Paginate query results](https://developers.google.com/merchant/api/guides/reports/paging).

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. Id of the account making the call. Must be a standalone account or a subaccount of an advanced account. Format: accounts/{account} |

**Request body**: `SearchRequest`

**Response**: `SearchResponse`

---

## Schemas

### `SearchRequest`

Request message for the `ReportService.Search` method.

| Field | Type | Description |
|---|---|---|
| pageToken | string | Optional. Token of the page to retrieve. If not specified, the first page of results is returned. In order to request the next page of results, the value obtained from `next_page_token` in the previous response should be used. |
| pageSize | integer (int32) | Optional. Number of `ReportRows` to retrieve in a single page. Defaults to 1000. Values above 100,000 are coerced to 100,000. |
| query | string | Required. Query that defines a report to be retrieved. For details on how to construct your query, see the [Query Language guide](https://developers.google.com/merchant/api/guides/reports/query-language). For the full list of available tables and fields, see the Available fields. |

### `SearchResponse`

Response message for the `ReportService.Search` method.

| Field | Type | Description |
|---|---|---|
| results | array<`ReportRow`> | Rows that matched the search query. |
| nextPageToken | string | Token which can be sent as `page_token` to retrieve the next page. If omitted, there are no subsequent pages. |

### `ReportRow`

Result row returned from the search query. Only the message corresponding to the queried table is populated in the response. Within the populated message, only the fields requested explicitly in the query are populated. For more information, see [Reports overview](https://developers.google.com/merchant/api/guides/reports/overview) and [Use Merchant Center Query Language](https://developers.google.com/merchant/api/guides/reports/query-language).

| Field | Type | Description |
|---|---|---|
| productPerformanceView | `ProductPerformanceView` | Fields available for query in `product_performance_view` table. |
| bestSellersBrandView | `BestSellersBrandView` | Fields available for query in `best_sellers_brand_view` table. |
| priceInsightsProductView | `PriceInsightsProductView` | Fields available for query in `price_insights_product_view` table. |
| competitiveVisibilityCompetitorView | `CompetitiveVisibilityCompetitorView` | Fields available for query in `competitive_visibility_competitor_view` table. |
| competitiveVisibilityBenchmarkView | `CompetitiveVisibilityBenchmarkView` | Fields available for query in `competitive_visibility_benchmark_view` table. |
| competitiveVisibilityTopMerchantView | `CompetitiveVisibilityTopMerchantView` | Fields available for query in `competitive_visibility_top_merchant_view` table. |
| nonProductPerformanceView | `NonProductPerformanceView` | Fields available for query in `non_product_performance_view` table. |
| productView | `ProductView` | Fields available for query in `product_view` table. |
| priceCompetitivenessProductView | `PriceCompetitivenessProductView` | Fields available for query in `price_competitiveness_product_view` table. |
| bestSellersProductClusterView | `BestSellersProductClusterView` | Fields available for query in `best_sellers_product_cluster_view` table. |

### `BestSellersBrandView`

Fields available for query in `best_sellers_brand_view` table. [Best sellers](https://support.google.com/merchants/answer/9488679) report with top brands. Values are only set for fields requested explicitly in the request's search query. For more information, see [Understand the market](https://developers.google.com/merchant/api/guides/reports/understand-the-market).

| Field | Type | Description |
|---|---|---|
| previousRelativeDemand | string enum(RELATIVE_DEMAND_ENUM_UNSPECIFIED, VERY_LOW, LOW, MEDIUM, HIGH, VERY_HIGH) | Estimated demand in relation to the brand with the highest popularity rank in the same category and country in the previous week or month. Values: RELATIVE_DEMAND_ENUM_UNSPECIFIED - Not specified.; VERY_LOW - Demand is 0-5% of the demand of the highest ranked product cluster or brand.; LOW - Demand is 6-10% of the demand of the highest ranked product cluster or brand.; MEDIUM - Demand is 11-20% of the demand of the highest ranked product cluster or brand.; HIGH - Demand is 21-50% of the demand of the highest ranked product cluster or brand.; VERY_HIGH - Demand is 51-100% of the demand of the highest ranked product cluster or brand. |
| reportGranularity | string enum(REPORT_GRANULARITY_ENUM_UNSPECIFIED, WEEKLY, MONTHLY) | Granularity of the report. The ranking can be done over a week or a month timeframe. Required in the `SELECT` clause. Condition on `report_granularity` is required in the `WHERE` clause. Values: REPORT_GRANULARITY_ENUM_UNSPECIFIED - Not specified.; WEEKLY - Report is computed over a week timeframe.; MONTHLY - Report is computed over a month timeframe. |
| brand | string | Name of the brand. |
| reportCategoryId | string (int64) | Google product category ID to calculate the ranking for, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). Required in the `SELECT` clause. If a `WHERE` condition on `report_category_id` is not specified in the query, rankings for all top-level categories are returned. |
| relativeDemand | string enum(RELATIVE_DEMAND_ENUM_UNSPECIFIED, VERY_LOW, LOW, MEDIUM, HIGH, VERY_HIGH) | Estimated demand in relation to the brand with the highest popularity rank in the same category and country. Values: RELATIVE_DEMAND_ENUM_UNSPECIFIED - Not specified.; VERY_LOW - Demand is 0-5% of the demand of the highest ranked product cluster or brand.; LOW - Demand is 6-10% of the demand of the highest ranked product cluster or brand.; MEDIUM - Demand is 11-20% of the demand of the highest ranked product cluster or brand.; HIGH - Demand is 21-50% of the demand of the highest ranked product cluster or brand.; VERY_HIGH - Demand is 51-100% of the demand of the highest ranked product cluster or brand. |
| previousRank | string (int64) | Popularity rank in the previous week or month. |
| reportCountryCode | string | Country where the ranking is calculated. Represented in the ISO 3166 format. Required in the `SELECT` clause. Condition on `report_country_code` is required in the `WHERE` clause. |
| rank | string (int64) | Popularity of the brand on Ads and organic surfaces, in the selected category and country, based on the estimated number of units sold. |
| reportDate | `Date` | Report date. The value of this field can only be one of the following: * The first day of the week (Monday) for weekly reports, * The first day of the month for monthly reports. Required in the `SELECT` clause. If a `WHERE` condition on `report_date` is not specified in the query, the latest available weekly or monthly report is returned. |
| relativeDemandChange | string enum(RELATIVE_DEMAND_CHANGE_TYPE_ENUM_UNSPECIFIED, SINKER, FLAT, RISER) | Change in the estimated demand. Whether it rose, sank or remained flat. Values: RELATIVE_DEMAND_CHANGE_TYPE_ENUM_UNSPECIFIED - Not specified.; SINKER - Relative demand is lower than the previous time period.; FLAT - Relative demand is equal to the previous time period.; RISER - Relative demand is higher than the previous time period. |

### `BestSellersProductClusterView`

Fields available for query in `best_sellers_product_cluster_view` table. [Best sellers](https://support.google.com/merchants/answer/9488679) report with top product clusters. A product cluster is a grouping for different offers and variants that represent the same product, for example, Google Pixel 7. Values are only set for fields requested explicitly in the request's search query. For more information, see [Understand the market](https://developers.google.com/merchant/api/guides/reports/understand-the-market).

| Field | Type | Description |
|---|---|---|
| categoryL5 | string | Product category (5th level) of the product cluster, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). |
| previousRelativeDemand | string enum(RELATIVE_DEMAND_ENUM_UNSPECIFIED, VERY_LOW, LOW, MEDIUM, HIGH, VERY_HIGH) | Estimated demand in relation to the product cluster with the highest popularity rank in the same category and country in the previous week or month. Values: RELATIVE_DEMAND_ENUM_UNSPECIFIED - Not specified.; VERY_LOW - Demand is 0-5% of the demand of the highest ranked product cluster or brand.; LOW - Demand is 6-10% of the demand of the highest ranked product cluster or brand.; MEDIUM - Demand is 11-20% of the demand of the highest ranked product cluster or brand.; HIGH - Demand is 21-50% of the demand of the highest ranked product cluster or brand.; VERY_HIGH - Demand is 51-100% of the demand of the highest ranked product cluster or brand. |
| variantGtins | array<string> | GTINs of example variants of the product cluster. |
| relativeDemandChange | string enum(RELATIVE_DEMAND_CHANGE_TYPE_ENUM_UNSPECIFIED, SINKER, FLAT, RISER) | Change in the estimated demand. Whether it rose, sank or remained flat. Values: RELATIVE_DEMAND_CHANGE_TYPE_ENUM_UNSPECIFIED - Not specified.; SINKER - Relative demand is lower than the previous time period.; FLAT - Relative demand is equal to the previous time period.; RISER - Relative demand is higher than the previous time period. |
| categoryL1 | string | Product category (1st level) of the product cluster, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). |
| reportDate | `Date` | Report date. The value of this field can only be one of the following: * The first day of the week (Monday) for weekly reports, * The first day of the month for monthly reports. Required in the `SELECT` clause. If a `WHERE` condition on `report_date` is not specified in the query, the latest available weekly or monthly report is returned. |
| categoryL3 | string | Product category (3rd level) of the product cluster, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). |
| brand | string | Brand of the product cluster. |
| reportCategoryId | string (int64) | Google product category ID to calculate the ranking for, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). Required in the `SELECT` clause. If a `WHERE` condition on `report_category_id` is not specified in the query, rankings for all top-level categories are returned. |
| inventoryStatus | string enum(INVENTORY_STATUS_UNSPECIFIED, IN_STOCK, OUT_OF_STOCK, NOT_IN_INVENTORY) | Whether the product cluster is `IN_STOCK` in your product data source in at least one of the countries, `OUT_OF_STOCK` in your product data source in all countries, or `NOT_IN_INVENTORY` at all. The field doesn't take the Best sellers report country filter into account. Values: INVENTORY_STATUS_UNSPECIFIED - Not specified.; IN_STOCK - You have a product for this product cluster or brand in stock.; OUT_OF_STOCK - You have a product for this product cluster or brand in inventory but it is currently out of stock.; NOT_IN_INVENTORY - You do not have a product for this product cluster or brand in inventory. |
| previousRank | string (int64) | Popularity rank in the previous week or month. |
| categoryL2 | string | Product category (2nd level) of the product cluster, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). |
| reportGranularity | string enum(REPORT_GRANULARITY_ENUM_UNSPECIFIED, WEEKLY, MONTHLY) | Granularity of the report. The ranking can be done over a week or a month timeframe. Required in the `SELECT` clause. Condition on `report_granularity` is required in the `WHERE` clause. Values: REPORT_GRANULARITY_ENUM_UNSPECIFIED - Not specified.; WEEKLY - Report is computed over a week timeframe.; MONTHLY - Report is computed over a month timeframe. |
| reportCountryCode | string | Country where the ranking is calculated. Represented in the ISO 3166 format. Required in the `SELECT` clause. Condition on `report_country_code` is required in the `WHERE` clause. |
| rank | string (int64) | Popularity of the product cluster on Ads and organic surfaces, in the selected category and country, based on the estimated number of units sold. |
| title | string | Title of the product cluster. |
| brandInventoryStatus | string enum(INVENTORY_STATUS_UNSPECIFIED, IN_STOCK, OUT_OF_STOCK, NOT_IN_INVENTORY) | Whether there is at least one product of the brand currently `IN_STOCK` in your product data source in at least one of the countries, all products are `OUT_OF_STOCK` in your product data source in all countries, or `NOT_IN_INVENTORY`. The field doesn't take the Best sellers report country filter into account. Values: INVENTORY_STATUS_UNSPECIFIED - Not specified.; IN_STOCK - You have a product for this product cluster or brand in stock.; OUT_OF_STOCK - You have a product for this product cluster or brand in inventory but it is currently out of stock.; NOT_IN_INVENTORY - You do not have a product for this product cluster or brand in inventory. |
| relativeDemand | string enum(RELATIVE_DEMAND_ENUM_UNSPECIFIED, VERY_LOW, LOW, MEDIUM, HIGH, VERY_HIGH) | Estimated demand in relation to the product cluster with the highest popularity rank in the same category and country. Values: RELATIVE_DEMAND_ENUM_UNSPECIFIED - Not specified.; VERY_LOW - Demand is 0-5% of the demand of the highest ranked product cluster or brand.; LOW - Demand is 6-10% of the demand of the highest ranked product cluster or brand.; MEDIUM - Demand is 11-20% of the demand of the highest ranked product cluster or brand.; HIGH - Demand is 21-50% of the demand of the highest ranked product cluster or brand.; VERY_HIGH - Demand is 51-100% of the demand of the highest ranked product cluster or brand. |
| categoryL4 | string | Product category (4th level) of the product cluster, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). |

### `CompetitiveVisibilityBenchmarkView`

Fields available for query in `competitive_visibility_benchmark_view` table. [Competitive visibility](https://support.google.com/merchants/answer/11366442) report with the category benchmark. Values are only set for fields requested explicitly in the request's search query. For more information, see [Explore your competitive landscape](https://developers.google.com/merchant/api/guides/reports/explore-competitive-landscape).

| Field | Type | Description |
|---|---|---|
| yourDomainVisibilityTrend | number (double) | Change in visibility based on impressions for your domain with respect to the start of the selected time range (or first day with non-zero impressions). Cannot be filtered on in the 'WHERE' clause. |
| reportCategoryId | string (int64) | Google product category ID to calculate the report for, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). Required in the `SELECT` clause. A condition on `report_category_id` is required in the `WHERE` clause. |
| date | `Date` | Date of this row. Required in the `SELECT` clause. A condition on `date` is required in the `WHERE` clause. |
| categoryBenchmarkVisibilityTrend | number (double) | Change in visibility based on impressions with respect to the start of the selected time range (or first day with non-zero impressions) for a combined set of merchants with highest visibility approximating the market. Cannot be filtered on in the 'WHERE' clause. |
| trafficSource | string enum(TRAFFIC_SOURCE_ENUM_UNSPECIFIED, ORGANIC, ADS, ALL) | Traffic source of impressions. Required in the `SELECT` clause. Values: TRAFFIC_SOURCE_ENUM_UNSPECIFIED - Not specified.; ORGANIC - Organic traffic.; ADS - Traffic from ads.; ALL - Organic and ads traffic. |
| reportCountryCode | string | Country where impressions appeared. Required in the `SELECT` clause. A condition on `report_country_code` is required in the `WHERE` clause. |

### `CompetitiveVisibilityCompetitorView`

Fields available for query in `competitive_visibility_competitor_view` table. [Competitive visibility](https://support.google.com/merchants/answer/11366442) report with businesses with similar visibility. Values are only set for fields requested explicitly in the request's search query. For more information, see [Explore your competitive landscape](https://developers.google.com/merchant/api/guides/reports/explore-competitive-landscape).

| Field | Type | Description |
|---|---|---|
| higherPositionRate | number (double) | [Higher position rate] (https://support.google.com/merchants/answer/11366442#zippy=%2Chigher-position-rate) shows how often a competitor’s offer got placed in a higher position on the page than your offer. Cannot be filtered on in the 'WHERE' clause. |
| rank | string (int64) | Position of the domain in the similar businesses ranking for the selected keys (`date`, `report_category_id`, `report_country_code`, `traffic_source`) based on impressions. 1 is the highest. Cannot be filtered on in the 'WHERE' clause. |
| relativeVisibility | number (double) | [Relative visibility] (https://support.google.com/merchants/answer/11366442#zippy=%2Crelative-visibility) shows how often your competitors’ offers are shown compared to your offers. In other words, this is the number of displayed impressions of a competitor retailer divided by the number of your displayed impressions during a selected time range for a selected product category and country. Cannot be filtered on in the 'WHERE' clause. |
| adsOrganicRatio | number (double) | [Ads / organic ratio] (https://support.google.com/merchants/answer/11366442#zippy=%2Cads-free-ratio) shows how often the domain receives impressions from Shopping ads compared to organic traffic. The number is rounded and bucketed. Cannot be filtered on in the 'WHERE' clause. |
| isYourDomain | boolean | True if this row contains data for your domain. Cannot be filtered on in the 'WHERE' clause. |
| trafficSource | string enum(TRAFFIC_SOURCE_ENUM_UNSPECIFIED, ORGANIC, ADS, ALL) | Traffic source of impressions. Required in the `SELECT` clause. Values: TRAFFIC_SOURCE_ENUM_UNSPECIFIED - Not specified.; ORGANIC - Organic traffic.; ADS - Traffic from ads.; ALL - Organic and ads traffic. |
| pageOverlapRate | number (double) | [Page overlap rate] (https://support.google.com/merchants/answer/11366442#zippy=%2Cpage-overlap-rate) shows how frequently competing retailers’ offers are shown together with your offers on the same page. Cannot be filtered on in the 'WHERE' clause. |
| reportCategoryId | string (int64) | Google product category ID to calculate the report for, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). Required in the `SELECT` clause. A condition on `report_category_id` is required in the `WHERE` clause. |
| date | `Date` | Date of this row. A condition on `date` is required in the `WHERE` clause. |
| reportCountryCode | string | Country where impressions appeared. Required in the `SELECT` clause. A condition on `report_country_code` is required in the `WHERE` clause. |
| domain | string | Domain of your competitor or your domain, if `is_your_domain` is true. Required in the `SELECT` clause. Cannot be filtered on in the 'WHERE' clause. |

### `CompetitiveVisibilityTopMerchantView`

Fields available for query in `competitive_visibility_top_merchant_view` table. [Competitive visibility](https://support.google.com/merchants/answer/11366442) report with business with highest visibility. Values are only set for fields requested explicitly in the request's search query. For more information, see [Explore your competitive landscape](https://developers.google.com/merchant/api/guides/reports/explore-competitive-landscape).

| Field | Type | Description |
|---|---|---|
| higherPositionRate | number (double) | [Higher position rate] (https://support.google.com/merchants/answer/11366442#zippy=%2Chigher-position-rate) shows how often a competitor’s offer got placed in a higher position on the page than your offer. Cannot be filtered on in the 'WHERE' clause. |
| domain | string | Domain of your competitor or your domain, if `is_your_domain` is true. Required in the `SELECT` clause. Cannot be filtered on in the 'WHERE' clause. |
| date | `Date` | Date of this row. Cannot be selected in the `SELECT` clause. A condition on `date` is required in the `WHERE` clause. |
| adsOrganicRatio | number (double) | [Ads / organic ratio] (https://support.google.com/merchants/answer/11366442#zippy=%2Cads-free-ratio) shows how often the domain receives impressions from Shopping ads compared to organic traffic. The number is rounded and bucketed. Cannot be filtered on in the 'WHERE' clause. |
| isYourDomain | boolean | True if this row contains data for your domain. Cannot be filtered on in the 'WHERE' clause. |
| reportCountryCode | string | Country where impressions appeared. Required in the `SELECT` clause. A condition on `report_country_code` is required in the `WHERE` clause. |
| pageOverlapRate | number (double) | [Page overlap rate] (https://support.google.com/merchants/answer/11366442#zippy=%2Cpage-overlap-rate) shows how frequently competing retailers’ offers are shown together with your offers on the same page. Cannot be filtered on in the 'WHERE' clause. |
| trafficSource | string enum(TRAFFIC_SOURCE_ENUM_UNSPECIFIED, ORGANIC, ADS, ALL) | Traffic source of impressions. Required in the `SELECT` clause. Values: TRAFFIC_SOURCE_ENUM_UNSPECIFIED - Not specified.; ORGANIC - Organic traffic.; ADS - Traffic from ads.; ALL - Organic and ads traffic. |
| rank | string (int64) | Position of the domain in the top merchants ranking for the selected keys (`date`, `report_category_id`, `report_country_code`, `traffic_source`) based on impressions. 1 is the highest. Cannot be filtered on in the 'WHERE' clause. |
| reportCategoryId | string (int64) | Google product category ID to calculate the report for, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). Required in the `SELECT` clause. A condition on `report_category_id` is required in the `WHERE` clause. |

### `NonProductPerformanceView`

Fields available for query in `non_product_performance_view` table. Performance data on images and online store links leading to your non-product pages. This includes performance metrics (for example, `clicks`) and dimensions according to which performance metrics are segmented (for example, `date`). Segment fields cannot be selected in queries without also selecting at least one metric field. Values are only set for fields requested explicitly in the request's search query. For more information, see [Performance reports](https://developers.google.com/merchant/api/guides/reports/performance-reports).

| Field | Type | Description |
|---|---|---|
| date | `Date` | Date in the Merchant Center account timezone to which metrics apply. Segment. Condition on `date` is required in the `WHERE` clause. |
| clicks | string (int64) | Number of clicks on images and online store links leading to your non-product pages. Metric. |
| clickThroughRate | number (double) | Click-through rate - the number of clicks (`clicks`) divided by the number of impressions (`impressions`) of images and online store links leading to your non-product pages. Metric. |
| week | `Date` | First day of the week (Monday) of the metrics date in the Merchant Center account timezone. Segment. |
| impressions | string (int64) | Number of times images and online store links leading to your non-product pages were shown. Metric. |

### `PriceCompetitivenessProductView`

Fields available for query in `price_competitiveness_product_view` table. [Price competitiveness](https://support.google.com/merchants/answer/9626903) report. Values are only set for fields requested explicitly in the request's search query. For more information, see [Understand the market](https://developers.google.com/merchant/api/guides/reports/understand-the-market).

| Field | Type | Description |
|---|---|---|
| categoryL1 | string | Product category (1st level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). |
| categoryL3 | string | Product category (3rd level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). |
| categoryL5 | string | Product category (5th level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). |
| brand | string | Brand of the product. |
| categoryL2 | string | Product category (2nd level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). |
| reportCountryCode | string | Country of the price benchmark. Represented in the ISO 3166 format. Required in the `SELECT` clause. |
| benchmarkPrice | `Price` | Latest available price benchmark for the product's catalog in the benchmark country. |
| productTypeL1 | string | Product type (1st level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406). |
| productTypeL3 | string | Product type (3rd level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406). |
| title | string | Title of the product. |
| price | `Price` | Current price of the product. |
| categoryL4 | string | Product category (4th level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). |
| productTypeL5 | string | Product type (5th level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406). |
| id | string | REST ID of the product, in the form of `channel~languageCode~feedLabel~offerId`. Can be used to join data with the `product_view` table. Required in the `SELECT` clause. |
| productTypeL2 | string | Product type (2nd level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406). |
| offerId | string | Merchant-provided id of the product. |
| productTypeL4 | string | Product type (4th level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406). |

### `PriceInsightsProductView`

Fields available for query in `price_insights_product_view` table. [Price insights](https://support.google.com/merchants/answer/11916926) report. Values are only set for fields requested explicitly in the request's search query. For more information, see [Understand the market](https://developers.google.com/merchant/api/guides/reports/understand-the-market).

| Field | Type | Description |
|---|---|---|
| brand | string | Brand of the product. |
| predictedConversionsChangeFraction | number (double) | Predicted change in conversions as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in conversions). |
| suggestedPrice | `Price` | Latest suggested price for the product. |
| categoryL4 | string | Product category (4th level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). |
| offerId | string | Merchant-provided id of the product. |
| predictedImpressionsChangeFraction | number (double) | Predicted change in impressions as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in impressions. |
| productTypeL2 | string | Product type (2nd level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406). |
| price | `Price` | Current price of the product. |
| categoryL1 | string | Product category (1st level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). |
| categoryL3 | string | Product category (3rd level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). |
| productTypeL4 | string | Product type (4th level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406). |
| predictedClicksChangeFraction | number (double) | Predicted change in clicks as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in clicks. |
| categoryL5 | string | Product category (5th level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). |
| productTypeL5 | string | Product type (5th level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406). |
| id | string | REST ID of the product, in the form of `channel~languageCode~feedLabel~offerId`. Can be used to join data with the `product_view` table. Required in the `SELECT` clause. |
| effectiveness | string enum(EFFECTIVENESS_UNSPECIFIED, LOW, MEDIUM, HIGH) | The predicted effectiveness of applying the price suggestion, bucketed. Values: EFFECTIVENESS_UNSPECIFIED - Effectiveness is unknown.; LOW - Effectiveness is low.; MEDIUM - Effectiveness is medium.; HIGH - Effectiveness is high. |
| productTypeL3 | string | Product type (3rd level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406). |
| categoryL2 | string | Product category (2nd level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). |
| productTypeL1 | string | Product type (1st level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406). |
| title | string | Title of the product. |

### `ProductPerformanceView`

Fields available for query in `product_performance_view` table. Product performance data for your account, including performance metrics (for example, `clicks`) and dimensions according to which performance metrics are segmented (for example, `offer_id`). Values of product dimensions, such as `offer_id`, reflect the state of a product at the time of the impression. Segment fields cannot be selected in queries without also selecting at least one metric field. Values are only set for fields requested explicitly in the request's search query. For more information, see [Performance reports](https://developers.google.com/merchant/api/guides/reports/performance-reports).

| Field | Type | Description |
|---|---|---|
| impressions | string (int64) | Number of times merchant's products are shown. Metric. |
| categoryL1 | string | [Product category (1st level)](https://developers.google.com/merchant/api/guides/reports/performance-reports#category_and_product_type) in Google's product taxonomy. Segment. |
| brand | string | Brand of the product. Segment. |
| date | `Date` | Date in the Merchant Center account timezone to which metrics apply. Segment. Condition on `date` is required in the `WHERE` clause. |
| productTypeL4 | string | [Product type (4th level)](https://developers.google.com/merchant/api/guides/reports/performance-reports#category_and_product_type) in merchant's own product taxonomy. Segment. |
| categoryL2 | string | [Product category (2nd level)](https://developers.google.com/merchant/api/guides/reports/performance-reports#category_and_product_type) in Google's product taxonomy. Segment. |
| conversionRate | number (double) | Number of conversions divided by the number of clicks, reported on the impression date. Metric. Available only for the `FREE` traffic source. |
| customerCountryCode | string | Code of the country where the customer is located at the time of the event. Represented in the ISO 3166 format. Segment. If the customer country cannot be determined, a special 'ZZ' code is returned. |
| conversions | number (double) | Number of conversions attributed to the product, reported on the conversion date. Depending on the attribution model, a conversion might be distributed across multiple clicks, where each click gets its own credit assigned. This metric is a sum of all such credits. Metric. Available only for the `FREE` traffic source. |
| productTypeL1 | string | [Product type (1st level)](https://developers.google.com/merchant/api/guides/reports/performance-reports#category_and_product_type) in merchant's own product taxonomy. Segment. |
| categoryL5 | string | [Product category (5th level)](https://developers.google.com/merchant/api/guides/reports/performance-reports#category_and_product_type) in Google's product taxonomy. Segment. |
| categoryL3 | string | [Product category (3rd level)](https://developers.google.com/merchant/api/guides/reports/performance-reports#category_and_product_type) in Google's product taxonomy. Segment. |
| productTypeL3 | string | [Product type (3rd level)](https://developers.google.com/merchant/api/guides/reports/performance-reports#category_and_product_type) in merchant's own product taxonomy. Segment. |
| customLabel2 | string | Custom label 2 for custom grouping of products. Segment. |
| clickThroughRate | number (double) | Click-through rate - the number of clicks merchant's products receive (clicks) divided by the number of times the products are shown (impressions). Metric. |
| productTypeL5 | string | [Product type (5th level)](https://developers.google.com/merchant/api/guides/reports/performance-reports#category_and_product_type) in merchant's own product taxonomy. Segment. |
| customLabel1 | string | Custom label 1 for custom grouping of products. Segment. |
| customLabel3 | string | Custom label 3 for custom grouping of products. Segment. |
| clicks | string (int64) | Number of clicks. Metric. |
| productTypeL2 | string | [Product type (2nd level)](https://developers.google.com/merchant/api/guides/reports/performance-reports#category_and_product_type) in merchant's own product taxonomy. Segment. |
| offerId | string | Merchant-provided id of the product. Segment. |
| week | `Date` | First day of the week (Monday) of the metrics date in the Merchant Center account timezone. Segment. |
| conversionValue | `Price` | Value of conversions attributed to the product, reported on the conversion date. Metric. Available only for the `FREE` traffic source. |
| customLabel4 | string | Custom label 4 for custom grouping of products. Segment. |
| storeType | string enum(STORE_TYPE_ENUM_UNSPECIFIED, ONLINE_STORE, LOCAL_STORES) | Store type to which metrics apply. Can be `ONLINE_STORE` or `LOCAL_STORES`. Segment. For `LOCAL_STORES` store type, further segmentation by a specific store is not available. Values: STORE_TYPE_ENUM_UNSPECIFIED - Not specified.; ONLINE_STORE - Online store.; LOCAL_STORES - Local (physical) stores. |
| customLabel0 | string | Custom label 0 for custom grouping of products. Segment. |
| title | string | Title of the product. Segment. |
| network | string enum(NETWORK_ENUM_UNSPECIFIED, UNKNOWN, SEARCH, SEARCH_PARTNERS, CONTENT, MIXED, YOUTUBE, GOOGLE_TV, GOOGLE_OWNED_CHANNELS, GMAIL, DISCOVER, MAPS) | Network to which metrics apply. Segment. Values: NETWORK_ENUM_UNSPECIFIED - Not specified.; UNKNOWN - The value is unknown in this version.; SEARCH - Google search.; SEARCH_PARTNERS - Search partners.; CONTENT - Display Network.; MIXED - Cross-network.; YOUTUBE - YouTube; GOOGLE_TV - Google TV; GOOGLE_OWNED_CHANNELS - This network is used for Google Owned channels such as Discover feed, Gmail, YouTube. Demand Gen stats are attributed to more granular network types such as GMAIL, DISCOVER, MAPS, YOUTUBE; this value is only used for historical data.; GMAIL - Gmail; DISCOVER - Discover Feed; MAPS - Maps |
| categoryL4 | string | [Product category (4th level)](https://developers.google.com/merchant/api/guides/reports/performance-reports#category_and_product_type) in Google's product taxonomy. Segment. |
| marketingMethod | string enum(MARKETING_METHOD_ENUM_UNSPECIFIED, ORGANIC, ADS, AFFILIATE) | Marketing method to which metrics apply. Segment. Values: MARKETING_METHOD_ENUM_UNSPECIFIED - Not specified.; ORGANIC - Organic marketing.; ADS - Ads-based marketing.; AFFILIATE - [YouTube Shopping Affiliate marketing](https://support.google.com/merchants/answer/14815513). |

### `ProductView`

Fields available for query in `product_view` table. Products in the current inventory. Products in this table are the same as a [Product resource in Products sub-API](https://developers.google.com/merchant/api/reference/rest/products_v1/accounts.products) but not all product attributes from Products sub-API are available for query in this table. In contrast to Products sub-API, this table allows to filter the returned list of products by product attributes. To retrieve a single product by `id` or list all products, Products sub-API should be used. Values are only set for fields requested explicitly in the request's search query. For more information, see [Evaluate your products](https://developers.google.com/merchant/api/guides/reports/evaluate-products).

| Field | Type | Description |
|---|---|---|
| categoryL1 | string | Product category (1st level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). |
| itemIssues | array<`ItemIssue`> | List of item issues for the product. **This field cannot be used for sorting the results.** **Only selected attributes of this field (for example, `item_issues.severity.aggregated_severity`) can be used for filtering the results.** |
| condition | string | [Condition](https://support.google.com/merchants/answer/6324469) of the product. |
| availability | string | [Availability](https://support.google.com/merchants/answer/6324448) of the product. |
| gtin | array<string> | List of Global Trade Item Numbers (GTINs) of the product. |
| categoryL2 | string | Product category (2nd level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). |
| aggregatedReportingContextStatus | string enum(AGGREGATED_REPORTING_CONTEXT_STATUS_UNSPECIFIED, NOT_ELIGIBLE_OR_DISAPPROVED, PENDING, ELIGIBLE_LIMITED, ELIGIBLE) | Aggregated status across all reporting contexts. Reporting contexts included in the computation of the aggregated status can be restricted using a filter on the `reporting_context` field. Values: AGGREGATED_REPORTING_CONTEXT_STATUS_UNSPECIFIED - Not specified.; NOT_ELIGIBLE_OR_DISAPPROVED - Product is not eligible or is disapproved for all reporting contexts and countries.; PENDING - Product's status is pending in all reporting contexts and countries.; ELIGIBLE_LIMITED - Product is eligible for some (but not all) reporting contexts and countries.; ELIGIBLE - Product is eligible for all reporting contexts and countries. |
| clickPotential | string enum(CLICK_POTENTIAL_UNSPECIFIED, LOW, MEDIUM, HIGH) | Estimated performance potential compared to highest performing products of the merchant. Values: CLICK_POTENTIAL_UNSPECIFIED - Unknown predicted clicks impact.; LOW - Potential to receive a low number of clicks compared to the highest performing products of the merchant.; MEDIUM - Potential to receive a moderate number of clicks compared to the highest performing products of the merchant.; HIGH - Potential to receive a similar number of clicks as the highest performing products of the merchant. |
| id | string | REST ID of the product, in the form of `channel~languageCode~feedLabel~offerId`. Merchant API methods that operate on products take this as their `name` parameter. Required in the `SELECT` clause. |
| expirationDate | `Date` | Expiration date for the product, specified on insertion. |
| productTypeL4 | string | Product type (4th level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406). |
| brand | string | Brand of the product. |
| thumbnailLink | string | Link to the processed image of the product, hosted on the Google infrastructure. |
| creationTime | string (google-datetime) | The time the merchant created the product in timestamp seconds. |
| offerId | string | Merchant-provided id of the product. |
| categoryL3 | string | Product category (3rd level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). |
| reportingContext | string enum(REPORTING_CONTEXT_ENUM_UNSPECIFIED, SHOPPING_ADS, DISCOVERY_ADS, DEMAND_GEN_ADS, DEMAND_GEN_ADS_DISCOVER_SURFACE, VIDEO_ADS, DISPLAY_ADS, LOCAL_INVENTORY_ADS, VEHICLE_INVENTORY_ADS, FREE_LISTINGS, FREE_LISTINGS_UCP_CHECKOUT, FREE_LOCAL_LISTINGS, FREE_LOCAL_VEHICLE_LISTINGS, YOUTUBE_AFFILIATE, YOUTUBE_SHOPPING, CLOUD_RETAIL, LOCAL_CLOUD_RETAIL, PRODUCT_REVIEWS, MERCHANT_REVIEWS, YOUTUBE_CHECKOUT, RENTAL_ADS) | Reporting context to restrict the query to. Restricts the reporting contexts returned in `status_per_reporting_context` and `item_issues`, and used to compute `aggregated_reporting_context_status`. **This field can only be used in the `WHERE` clause and cannot be selected in the `SELECT` clause.** Values: REPORTING_CONTEXT_ENUM_UNSPECIFIED - Not specified.; SHOPPING_ADS - [Shopping ads](https://support.google.com/merchants/answer/6149970).; DISCOVERY_ADS - Deprecated: Use `DEMAND_GEN_ADS` instead. [Discovery and Demand Gen ads](https://support.google.com/merchants/answer/13389785).; DEMAND_GEN_ADS - [Demand Gen ads](https://support.google.com/merchants/answer/13389785).; DEMAND_GEN_ADS_DISCOVER_SURFACE - [Demand Gen ads on Discover surface](https://support.google.com/merchants/answer/13389785).; VIDEO_ADS - [Video ads](https://support.google.com/google-ads/answer/6340491).; DISPLAY_ADS - [Display ads](https://support.google.com/merchants/answer/6069387).; LOCAL_INVENTORY_ADS - [Local inventory ads](https://support.google.com/merchants/answer/3271956).; VEHICLE_INVENTORY_ADS - [Vehicle inventory ads](https://support.google.com/merchants/answer/11544533).; FREE_LISTINGS - [Free product listings](https://support.google.com/merchants/answer/9199328).; FREE_LISTINGS_UCP_CHECKOUT - [Free product listings on UCP checkout](https://developers.google.com/merchant/ucp).; FREE_LOCAL_LISTINGS - [Free local product listings](https://support.google.com/merchants/answer/9825611).; FREE_LOCAL_VEHICLE_LISTINGS - [Free local vehicle listings](https://support.google.com/merchants/answer/11544533).; YOUTUBE_AFFILIATE - [Youtube Affiliate](https://support.google.com/youtube/answer/13376398).; YOUTUBE_SHOPPING - [YouTube Shopping](https://support.google.com/merchants/answer/13478370).; CLOUD_RETAIL - [Cloud retail](https://cloud.google.com/solutions/retail).; LOCAL_CLOUD_RETAIL - [Local cloud retail](https://cloud.google.com/solutions/retail).; PRODUCT_REVIEWS - [Product Reviews](https://support.google.com/merchants/answer/14620732).; MERCHANT_REVIEWS - [Merchant Reviews](https://developers.google.com/merchant-review-feeds).; YOUTUBE_CHECKOUT - YouTube Checkout .; RENTAL_ADS - Real Estate Rental Ads. . |
| channel | string enum(CHANNEL_ENUM_UNSPECIFIED, ONLINE, LOCAL) | Channel of the product. Can be `ONLINE` or `LOCAL`. Values: CHANNEL_ENUM_UNSPECIFIED - Not specified.; ONLINE - Online product.; LOCAL - Local product. |
| categoryL5 | string | Product category (5th level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). |
| title | string | Title of the product. |
| price | `Price` | Product price. Absent if the information about the price of the product is not available. |
| feedLabel | string | Feed label of the product. |
| productTypeL3 | string | Product type (3rd level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406). |
| shippingLabel | string | Normalized [shipping label](https://support.google.com/merchants/answer/6324504) specified in the data source. |
| clickPotentialRank | string (int64) | Normalized click potential of the product. Values range from 1 to 1000, where 1 is the highest click potential and 1000 is the theoretical lowest. |
| statusPerReportingContext | array<`StatusPerReportingContext`> | Detailed product status per reporting context. Reporting contexts included in this list can be restricted using a filter on the `reporting_context` field. Equivalent to `ProductStatus.destination_statuses` in Products API. **This field cannot be used for sorting or filtering the results.** |
| productTypeL1 | string | Product type (1st level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406). |
| productTypeL2 | string | Product type (2nd level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406). |
| categoryL4 | string | Product category (4th level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). |
| languageCode | string | Language code of the product in BCP 47 format. |
| productTypeL5 | string | Product type (5th level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406). |
| itemGroupId | string | Item group id provided by the merchant for grouping variants together. |

### `Date`

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp

| Field | Type | Description |
|---|---|---|
| year | integer (int32) | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| day | integer (int32) | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| month | integer (int32) | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |

### `Price`

The price represented as a number and currency.

| Field | Type | Description |
|---|---|---|
| currencyCode | string | The currency of the price using three-letter acronyms according to [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217). |
| amountMicros | string (int64) | The price represented as a number in micros (1 million micros is an equivalent to one's currency standard unit, for example, 1 USD = 1000000 micros). |

### `ItemIssue`

Item issue associated with the product.

| Field | Type | Description |
|---|---|---|
| type | `ItemIssueType` | Item issue type. |
| severity | `ItemIssueSeverity` | Item issue severity. |
| resolution | string enum(ITEM_ISSUE_RESOLUTION_UNSPECIFIED, MERCHANT_ACTION, PENDING_PROCESSING) | Item issue resolution. Values: ITEM_ISSUE_RESOLUTION_UNSPECIFIED - Not specified.; MERCHANT_ACTION - The merchant has to fix the issue.; PENDING_PROCESSING - The issue will be resolved automatically (for example, image crawl) or through a Google review. No merchant action is required now. Resolution might lead to another issue (for example, if crawl fails). |

### `StatusPerReportingContext`

Status of the product for a specific reporting context. Equivalent to `DestinationStatus` in Products API.

| Field | Type | Description |
|---|---|---|
| approvedCountries | array<string> | List of approved countries in the reporting context, represented in [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format, for example, `US`. |
| disapprovedCountries | array<string> | List of disapproved countries in the reporting context, represented in [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format, for example, `US`. |
| pendingCountries | array<string> | List of pending countries in the reporting context, represented in [ISO 3166](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format, for example, `US`. |
| reportingContext | string enum(REPORTING_CONTEXT_ENUM_UNSPECIFIED, SHOPPING_ADS, DISCOVERY_ADS, DEMAND_GEN_ADS, DEMAND_GEN_ADS_DISCOVER_SURFACE, VIDEO_ADS, DISPLAY_ADS, LOCAL_INVENTORY_ADS, VEHICLE_INVENTORY_ADS, FREE_LISTINGS, FREE_LISTINGS_UCP_CHECKOUT, FREE_LOCAL_LISTINGS, FREE_LOCAL_VEHICLE_LISTINGS, YOUTUBE_AFFILIATE, YOUTUBE_SHOPPING, CLOUD_RETAIL, LOCAL_CLOUD_RETAIL, PRODUCT_REVIEWS, MERCHANT_REVIEWS, YOUTUBE_CHECKOUT, RENTAL_ADS) | Reporting context the status applies to. Values: REPORTING_CONTEXT_ENUM_UNSPECIFIED - Not specified.; SHOPPING_ADS - [Shopping ads](https://support.google.com/merchants/answer/6149970).; DISCOVERY_ADS - Deprecated: Use `DEMAND_GEN_ADS` instead. [Discovery and Demand Gen ads](https://support.google.com/merchants/answer/13389785).; DEMAND_GEN_ADS - [Demand Gen ads](https://support.google.com/merchants/answer/13389785).; DEMAND_GEN_ADS_DISCOVER_SURFACE - [Demand Gen ads on Discover surface](https://support.google.com/merchants/answer/13389785).; VIDEO_ADS - [Video ads](https://support.google.com/google-ads/answer/6340491).; DISPLAY_ADS - [Display ads](https://support.google.com/merchants/answer/6069387).; LOCAL_INVENTORY_ADS - [Local inventory ads](https://support.google.com/merchants/answer/3271956).; VEHICLE_INVENTORY_ADS - [Vehicle inventory ads](https://support.google.com/merchants/answer/11544533).; FREE_LISTINGS - [Free product listings](https://support.google.com/merchants/answer/9199328).; FREE_LISTINGS_UCP_CHECKOUT - [Free product listings on UCP checkout](https://developers.google.com/merchant/ucp).; FREE_LOCAL_LISTINGS - [Free local product listings](https://support.google.com/merchants/answer/9825611).; FREE_LOCAL_VEHICLE_LISTINGS - [Free local vehicle listings](https://support.google.com/merchants/answer/11544533).; YOUTUBE_AFFILIATE - [Youtube Affiliate](https://support.google.com/youtube/answer/13376398).; YOUTUBE_SHOPPING - [YouTube Shopping](https://support.google.com/merchants/answer/13478370).; CLOUD_RETAIL - [Cloud retail](https://cloud.google.com/solutions/retail).; LOCAL_CLOUD_RETAIL - [Local cloud retail](https://cloud.google.com/solutions/retail).; PRODUCT_REVIEWS - [Product Reviews](https://support.google.com/merchants/answer/14620732).; MERCHANT_REVIEWS - [Merchant Reviews](https://developers.google.com/merchant-review-feeds).; YOUTUBE_CHECKOUT - YouTube Checkout .; RENTAL_ADS - Real Estate Rental Ads. . |

### `ItemIssueSeverity`

How the issue affects the serving of the product.

| Field | Type | Description |
|---|---|---|
| aggregatedSeverity | string enum(AGGREGATED_ISSUE_SEVERITY_UNSPECIFIED, DISAPPROVED, DEMOTED, PENDING) | Aggregated severity of the issue for all reporting contexts it affects. Reporting contexts included in the computation of the aggregated severity can be restricted using a filter on the `reporting_context` field. **This field can be used for filtering the results.** Values: AGGREGATED_ISSUE_SEVERITY_UNSPECIFIED - Not specified.; DISAPPROVED - Issue disapproves the product in at least one reporting context.; DEMOTED - Issue demotes the product in all reporting contexts it affects.; PENDING - Issue resolution is `PENDING_PROCESSING`. |
| severityPerReportingContext | array<`IssueSeverityPerReportingContext`> | Issue severity per reporting context. Reporting contexts included in this list can be restricted using a filter on the `reporting_context` field. |

### `ItemIssueType`

Issue type.

| Field | Type | Description |
|---|---|---|
| canonicalAttribute | string | Canonical attribute name for attribute-specific issues. |
| code | string | Error code of the issue, equivalent to the `code` of [Product issues](https://developers.google.com/merchant/api/guides/products/list-products-data-issues). |

### `IssueSeverityPerReportingContext`

Issue severity per reporting context.

| Field | Type | Description |
|---|---|---|
| demotedCountries | array<string> | List of demoted countries in the reporting context, represented in ISO 3166 format. |
| disapprovedCountries | array<string> | List of disapproved countries in the reporting context, represented in ISO 3166 format. |
| reportingContext | string enum(REPORTING_CONTEXT_ENUM_UNSPECIFIED, SHOPPING_ADS, DISCOVERY_ADS, DEMAND_GEN_ADS, DEMAND_GEN_ADS_DISCOVER_SURFACE, VIDEO_ADS, DISPLAY_ADS, LOCAL_INVENTORY_ADS, VEHICLE_INVENTORY_ADS, FREE_LISTINGS, FREE_LISTINGS_UCP_CHECKOUT, FREE_LOCAL_LISTINGS, FREE_LOCAL_VEHICLE_LISTINGS, YOUTUBE_AFFILIATE, YOUTUBE_SHOPPING, CLOUD_RETAIL, LOCAL_CLOUD_RETAIL, PRODUCT_REVIEWS, MERCHANT_REVIEWS, YOUTUBE_CHECKOUT, RENTAL_ADS) | Reporting context the issue applies to. Values: REPORTING_CONTEXT_ENUM_UNSPECIFIED - Not specified.; SHOPPING_ADS - [Shopping ads](https://support.google.com/merchants/answer/6149970).; DISCOVERY_ADS - Deprecated: Use `DEMAND_GEN_ADS` instead. [Discovery and Demand Gen ads](https://support.google.com/merchants/answer/13389785).; DEMAND_GEN_ADS - [Demand Gen ads](https://support.google.com/merchants/answer/13389785).; DEMAND_GEN_ADS_DISCOVER_SURFACE - [Demand Gen ads on Discover surface](https://support.google.com/merchants/answer/13389785).; VIDEO_ADS - [Video ads](https://support.google.com/google-ads/answer/6340491).; DISPLAY_ADS - [Display ads](https://support.google.com/merchants/answer/6069387).; LOCAL_INVENTORY_ADS - [Local inventory ads](https://support.google.com/merchants/answer/3271956).; VEHICLE_INVENTORY_ADS - [Vehicle inventory ads](https://support.google.com/merchants/answer/11544533).; FREE_LISTINGS - [Free product listings](https://support.google.com/merchants/answer/9199328).; FREE_LISTINGS_UCP_CHECKOUT - [Free product listings on UCP checkout](https://developers.google.com/merchant/ucp).; FREE_LOCAL_LISTINGS - [Free local product listings](https://support.google.com/merchants/answer/9825611).; FREE_LOCAL_VEHICLE_LISTINGS - [Free local vehicle listings](https://support.google.com/merchants/answer/11544533).; YOUTUBE_AFFILIATE - [Youtube Affiliate](https://support.google.com/youtube/answer/13376398).; YOUTUBE_SHOPPING - [YouTube Shopping](https://support.google.com/merchants/answer/13478370).; CLOUD_RETAIL - [Cloud retail](https://cloud.google.com/solutions/retail).; LOCAL_CLOUD_RETAIL - [Local cloud retail](https://cloud.google.com/solutions/retail).; PRODUCT_REVIEWS - [Product Reviews](https://support.google.com/merchants/answer/14620732).; MERCHANT_REVIEWS - [Merchant Reviews](https://developers.google.com/merchant-review-feeds).; YOUTUBE_CHECKOUT - YouTube Checkout .; RENTAL_ADS - Real Estate Rental Ads. . |

