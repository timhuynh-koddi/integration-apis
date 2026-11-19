# TikTok Marketing API v1.3: Reporting

> Source: TikTok API for Business docs (https://business-api.tiktok.com/portal/docs, doc content API) and the official `tiktok/tiktok-business-api-sdk` OpenAPI files (`yml_files/`). Base URL: https://business-api.tiktok.com/open_api. Auth header: `Access-Token`. Fetched 2026-11-19.

---

## GET /v1.3/report/integrated/get/

**Run a synchronous report** (docs: https://business-api.tiktok.com/portal/docs/run-a-synchronous-report/v1.3)

Use this endpoint to create a synchronous report task.

This endpoint can currently return the reporting data of up to 20,000 advertisements. If your number of advertisements exceeds 20,000, please use `campaign_ids` / `adgroup_ids` / `ad_ids` as a filter to obtain the reporting data of all advertisements in batches. If you use `campaign_ids` / `adgroup_ids` / `ad_ids` as a filter, you can pass in up to 100 IDs at a time.

- To learn about how to run a synchronous report, see [Run a synchronous report](https://ads.tiktok.com/marketing_api/docs?id=1738864778664961).
- To find out the supported dimensions, metrics, and use cases for different report types, see [Report types](https://ads.tiktok.com/marketing_api/docs?id=1738864835805186).
- To learn about the relationship between advertising service type, report type and report data level, see [Overview-Data level](https://ads.tiktok.com/marketing_api/docs?id=1751087777884161&rid=h0qg6e2ivzd).
- To find out answers to common questions regarding reporting, see [FAQ](https://ads.tiktok.com/marketing_api/docs?id=1738864850353154).

> <span style="color:DarkRed">**Important**</span><br>
> If you want to retrieve the reporting data of GMV Max Campaigns, run GMV Max Campaign reports for your Product GMV Max Campaigns or Live GMV Max Campaigns using [/gmv_max/report/get/](https://business-api.tiktok.com/portal/docs/run-a-gmv-max-campaign-report/v1.3) instead.

><span style="color:DodgerBlue">**Note**</span><br>
>If you compare the synchronous report with a report downloaded from TTAM (TikTok Ads Manager）, you will discover data inconsistency because the downloaded report should be compared with its counterpart, an asynchronous report, rather than a synchronous report. Both the TTAM downloaded report and the API asynchronous report do not implement the 20,000-truncation for ads.

### Comparing v1.2 and v1.3
The following table outlines the differences between v1.2 and v1.3 endpoints.

|Changes |v1.2|v1.3|
|---|---|---|
| Endpoint path | /v1.2/reports/integrated/get/| /v1.3/report/integrated/get/|
| Request parameter name | `filters` | `filtering` |
| Request parameter data type | `advertiser_id`: number | `advertiser_id`: string |
| Request parameter deprecated in v1.3| / | `lifetime`(replaced by the new request parameter `query_lifetime`) |
| New request parameter| /| `query_lifetime`<br>`bc_id`<br>`enable_total_metrics`<br>`advertiser_ids`|
| Response parameter data type | `advertiser_id`: number<br> `campaign_id`: number <br>`adgroup_id`: number<br> `ad_id`: number | `advertiser_id`: string<br> `campaign_id`: string <br>`adgroup_id`: string<br> `ad_id`: string |
| New response parameter | / | `X-Tt-Ads-Throttle`: string<br> `contextual_tag`: string |
| Dimensions  | / | See the corresponding articles under [Report types](https://ads.tiktok.com/marketing_api/docs?id=1738864835805186) to find out the dimension changes in each report type.   |
|Metrics  | / | See the corresponding articles under [Report types](https://ads.tiktok.com/marketing_api/docs?id=1738864835805186) to find out the metric changes in each report type.   |


### Request

**Endpoint** <https://business-api.tiktok.com/open_api/v1.3/report/integrated/get/>

**Method** GET

**Header**

| Field  | Data Type | Description |
|---|---|---|
|Access-Token (required)|string|Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id=1738373164380162).|


**Parameters**

| Field  | Data Type | Description |
|---|---|---|
| advertiser_id {+Conditional} | string | You need to pass in either `advertiser_id`/`advertiser_ids` or `bc_id`.<ul><li>When `report_type` is set to `BASIC` or `AUDIENCE`, pass in `advertiser_id` or `advertiser_ids`. If you pass in both `advertiser_id` and `advertiser_ids`, `advertiser_id` will be ignored.</li><li>When `report_type` is set to `PLAYABLE_MATERIAL`, `CATALOG`, or `TT_SHOP`, pass in `advertiser_id`.</li><li>When `report_type` is set to `BC`, pass in `bc_id`.</li></ul><br>Advertiser ID. |
|advertiser_ids {+conditional}| string[] |When `report_type` is set to `BASIC` or `AUDIENCE`, you need to pass in either `advertiser_id` or `advertiser_ids`. If you pass in both `advertiser_id` and `advertiser_ids`, `advertiser_id` will be ignored. <br>Valid when `report_type` is `BASIC` or `AUDIENCE`.<br> <br> A list of advertiser IDs. <br> Max size: 5.  <br><br>Please be aware of the following information when working with this field: <ul><li>When `advertiser_ids` is used, we will return up to 20,000 IDs in response. The cutoff logic for IDs is based on the creation time of campaigns, ad groups, or ads in descending order, but we cannot guarantee that each advertiser will have an evenly distributed number of IDs.</li><li>When `advertiser_ids` is used, the returned metrics data in the response will include `currency`, `timezone`, and `advertiser_id`. </li><ul><li>Different advertisers might have different time zones. You can use `multi_adv_report_in_utc_time` to determine whether the data returned should be set to the UTC+0 timezone for all advertisers or set to the local timezone for each respective advertiser. </li><li>Different advertisers might have different currencies, and we will return the corresponding currency for each advertiser in the returned `metrics`. These metric data will be presented without a decimal point. For instance, a spend of "100 USD" will be displayed as 100 without any decimal indicator such as ".000".</li></ul><li>If you want to view the total added-up metrics for all advertiser IDs, enable `enable_total_metrics` in your request. The returned `total_metrics` in the response will include `currency`, `timezone`, and `advertiser_id`, but all with a value of `-`.</li></ul><br><p><span style="color:darkred"><b>Note</b></span>:<ul><li>If you use `advertiser_ids` but do not include any ID dimensions in the dimensions field, we will return `0` as the value for `currency`, `timezone`, and `advertiser_id` and `-` as the value of <b>cost-related</b> metrics, such as `spend`, in the `metrics` object of the response.</li><li>The advertisers specified in `advertiser_ids` should all belong to the same TikTok for Business user. Otherwise, an error will occur. Use [/oauth2/advertiser/get/](https://business-api.tiktok.com/portal/docs?id=1738455508553729) to retrieve a list of advertiser IDs that belong to the same TikTok for Business user.|
| bc_id{+Conditional} | string | You need to pass in either `advertiser_id`/`advertiser_ids` or `bc_id`. <ul><li>When `report_type` is set to `BASIC` or `AUDIENCE`,, pass in `advertiser_id`or `advertiser_ids`.</li><li>When `report_type` is set to `PLAYABLE_MATERIAL`, `CATALOG`, or `TT_SHOP`, pass in `advertiser_id`.</li><li>When `report_type` is set to `BC`, pass in `bc_id`.</li></ul><br>ID of a Business Center that you have access to.<br><br> To get a list of Business Centers that you have access to, use [/bc/get/](https://business-api.tiktok.com/portal/docs?id=1737115687501826). |
| service_type | string | Not supported when `report_type` is `BC`. <br><br> Ad service type. <br><br>Enum values:<ul><li>`AUCTION`: auction ads, or both auction ads and reservation ads.</li><li>`RESERVATION` (<span style="color:Red">deprecated</span>) : reservation ads. </li></ul> <br>Default value when `report_type` is not set to `BC`: `AUCTION`. <br><br><p><span style="color:darkred"><b>Note</b></span>: To retrieve the reporting data of TopView ads, use the [basic reports](https://business-api.tiktok.com/portal/docs?id=1738864915188737) or [audience reports](https://business-api.tiktok.com/portal/docs?id=1738864928947201) and specify the value `RESERVATION_TOP_VIEW` for the `buying_type` [filter](https://business-api.tiktok.com/portal/docs?id=1751443975608321).|
| report_type (required) | string | Report type. <br><br>Enum values: <ul><li>`BASIC`: basic report.</li><li>`AUDIENCE`: audience report.</li><li>`PLAYABLE_MATERIAL`: playable ads report.</li><li>`CATALOG`: DSA report.  </li><li>`BC`: Business Center report.</li></li><li>`TT_SHOP` (<span style="color:Red">to-be-deprecated</span>): GMV max ads report.</ul><br><ul> <li>When `service_type` is `AUCTION`, `BASIC`, `AUDIENCE`, `PLAYABLE_MATERIAL`, `CATALOG`, and `TT_SHOP` reports are all supported.</li><li>When `report_type` is `BC`, you don't need to pass `service_type`.</li></ul><br><p><span style="color:DarkRed"><b>Important</b></span>: GMV max ads reports (with `report_type` as `TT_SHOP`) only provide limited data and will be deprecated in the next API version. To ensure a smooth integration experience, run GMV Max Campaign reports for your Product GMV Max Campaigns or Live GMV Max Campaigns using [/gmv_max/report/get/](https://business-api.tiktok.com/portal/docs/run-a-gmv-max-campaign-report/v1.3) instead.|
| data_level {+Conditional}| string | Not supported when `report_type` is `BC`. <br> Required when `report_type` is `BASIC`,`AUDIENCE` or `CATALOG`. <br><br>The data level that you'd like to query in reports.<br><br> Enum values:<ul><li>`AUCTION_AD`: auction ads or both auction ads and reservation ads, ad level.</li><li>`AUCTION_ADGROUP`: auction ads or both auction ads and reservation ads, ad group level. </li><li>`AUCTION_CAMPAIGN`: auction ads or both auction ads and reservation ads, campaign level.</li><li>`AUCTION_ADVERTISER`: auction ads or both auction ads and reservation ads, advertiser level. </li><li>`RESERVATION_AD`(<span style="color:Red">deprecated</span>): reservation ads, ad level. </li><li>`RESERVATION_ADGROUP`(<span style="color:Red">deprecated</span>): reservation ads, ad group level. </li><li>`RESERVATION_CAMPAIGN`(<span style="color:Red">deprecated</span>): reservation ads, campaign level. </li><li>`RESERVATION_ADVERTISER`(<span style="color:Red">deprecated</span>): reservation ads, advertiser level. </li></ul>  <br><p><span style="color:darkred"><b>Note</b></span>:<ul><li>If you specify this field as `AUCTION_ADVERTISER`, data of all Auction Ads and Reservation Ads under the advertiser account will be returned. </li><li>When `report_type` is `BASIC`, `AUDIENCE` or `CATALOG`:<ul><li>If you set this field to `AUCTION_CAMPAIGN`, the data for all ads under undeleted auction campaigns will be returned, because by default the `campaign_status` filter is applied and defaults to `STATUS_NOT_DELETE`.</li><li>If you set this field to `AUCTION_ADGROUP`, the data for all ads under undeleted auction ad groups will be returned, because by default the `adgroup_status` filter is applied and defaults to `STATUS_NOT_DELETE`.</li><li>If you set this field to `AUCTION_AD`, only the data for undeleted ads under all auction campaigns will be returned, because by default the `ad_status` filter is applied and defaults to `STATUS_NOT_DELETE`.</li><li>If you want to get the data for all ads under all auction campaigns, set the `ad_status` filter to `STATUS_ALL` (`filtering=[&#123;"field_name":"ad_status","filter_type":"IN","filter_value":"[\"STATUS_ALL\"]"&#125;]`).</li></ul></li><li> When `report_type` is `TT_SHOP`, you can only set this field to `AUCTION_ADVERTISER` or `AUCTION_CAMPAIGN`.</li></ul>|
| dimensions (required) | string[] | Grouping conditions. For example: `&#91;"campaign_id", "stat_time_day"&#93;` indicates that both `campaign_id` and `stat_time_day` (days) are grouped.<br><br> Different report types support different dimensions. <ul><li>Supported dimensions in [basic reports](https://business-api.tiktok.com/portal/docs?id=1751443956638721)</li><li>Supported dimensions in [audience reports](https://business-api.tiktok.com/portal/docs?id=1751454103714818)</li><li>Supported dimensions in [playable ad reports](https://business-api.tiktok.com/portal/docs?id=1751617879104514)</li><li>Supported dimensions in [DSA reports](https://business-api.tiktok.com/portal/docs?id=1751617879104514)</li><li> Supported dimensions in [Business Center reports](https://business-api.tiktok.com/portal/docs?id=1775747465089026)</li><li>Supported dimensions in [GMV max ads reports](https://business-api.tiktok.com/portal/docs?id=1803073629472770)</li></ul><br><br><p><span style="color:darkred"><b>Note</b></span>: <ul><li>If `report_type` is not set to `BC`: <ul><li>When `dimensions` contains `stat_time_day`, the query time range cannot exceed 30 days.</li><li>When `dimensions` contains `stat_time_hour`, the query time range cannot exceed 1 day. </li></ul></li><li>If your query `dimensions` contains more than xx_id and there is no ads reporting within the query time range, an empty list will be returned.</li></ul> |
| metrics | string[] | Metrics to query. <br><br>Different report types support different metrics.  For supported metrics for each report type, see the corresponding articles under [Report types](https://ads.tiktok.com/marketing_api/docs?id=1738864835805186). <br><br><ul><li>When `report_type` is set to `BASIC`, `AUDIENCE`, `PLAYABLE_MATERIAL`, or `CATALOG`, the default value is `["spend", "impressions"]`. </li><li>When `report_type` is set to `BC`, the default value is all the metrics supported by the dimension grouping specified through `dimensions`. </li><li>When `report_type` is set to `TT_SHOP`, the default value is `["spend", "billed_cost"]`.</li></ul><br>Note that the amount of currency metrics are based on the currency set by the advertiser's account.  |
| enable_total_metrics | boolean | Whether to enable the total added-up data for your requested metrics. <br>When `enable_total_metrics` is enabled, we will provide the aggregate data for all pages as you query different pages. Under this condition, you only need to specify this field when requesting data for the first page.<br>Due to the 20,000-truncation limitation, when `enable_total_metrics` is enabled, we will provide the total added-up data for up to 20,000 IDs. <br> <br><p><span style="color:darkred"><b>Note</b></span>: <ul><li>It only supports auction basic reports and GMV max ads reports.</li><li>It is only valid when one ID dimension and(or) `stat_time_day` is specified in the `dimensions` field. Examples: `["campaign_id"]`, `["campaign_id", "stat_time_day"]`. </li><li>It can not be used in the sandbox environment. |
| start_date {+Conditional} | string | This field is required when `query_lifetime` is `false` or not specified. <br> <br>Query start date (closed interval) in the format of `YYYY-MM-DD`. The date is based on the ad account time zone. <br> <br><p><span style="color:darkred"><b>Note</b></span>: <ul><li>When `report_type` is not set to `BC` and the value of `dimensions` does not include `stat_time_day`, the maximum time range you can specify through `start_date` and `end_date` is 365 days.</li><li>When `report_type` is not set to `BC` and the value of `dimensions` includes `stat_time_day`, the maximum time range you can specify through `start_date` and `end_date` is 30 days.</li><li>When `report_type` is set to `BC`, the maximum time range you can specify through `start_date` and `end_date` is 365 days. </li></ul>|
| end_date {+Conditional} | string |This field is required when `query_lifetime` is `false` or not specified. <br> <br> Query end date (closed interval) in the format of `YYYY-MM-DD`. The date is based on the ad account time zone. <br> <br><p><span style="color:darkred"><b>Note</b></span>: <ul><li>When `report_type` is not set to `BC` and the value of `dimensions` does not include `stat_time_day`, the maximum time range you can specify through `start_date` and `end_date` is 365 days.</li><li>When `report_type` is not set to `BC` and the value of `dimensions` includes `stat_time_day`, the maximum time range you can specify through `start_date` and `end_date` is 30 days.</li><li>When `report_type` is set to `BC`, the maximum time range you can specify through `start_date` and `end_date` is 365 days. </li></ul>|
|query_lifetime | boolean  |Supported when `report_type` is `BASIC` or `PLAYABLE_MATERIAL`.<br><br>Whether to request the lifetime metrics.  Default value: `False`. If `query_lifetime` = `True`, the `start_date` and `end_date` parameters will be ignored. The lifetime metric name is the same as the normal one. <br><br><p><span style="color:darkred"><b>Note</b></span>: <ul><li>Breakdown by time or audience is not supported when querying for lifetime metrics.</li><li>Breakdown by location code (`country_code`) is not supported when querying for lifetime metrics.</li><li>Audience reports, DSA reports, Business Center reports, and GMV max ads reports do not support lifetime metrics.</li></ul>|
| multi_adv_report_in_utc_time | boolean | Supported when you have used `advertiser_ids` in your request.<br><br>Whether to set the returned metrics in the local timezone of each respective advertiser. <br><br>Default value: `false`. If it is set to `true`, the returned metrics will be set to the UTC+0 timezone for all advertisers. |
| order_field | string | Sorting field. <br><br> All supported metrics (excluding attribute metrics) support sorting. Not sorting by default.|
| order_type | string | Sorting order. <br><br> Enum values: `ASC`, `DESC`. <br><br> Default value: `DESC`. |
| filtering | object[] |<ul><li>Supported when `report_type` is `BASIC`, `AUDIENCE`, `PLAYABLE_MATERIAL`, `CATALOG`, or `BC`.</li><li>Not supported when `report_type` is `TT_SHOP`. </li></ul><br> Filtering conditions. <br><br> Supported filtering conditions vary based on `service_type` and `data_level`. For filters supported in different report types, refer to the articles under [Report types](https://ads.tiktok.com/marketing_api/docs?id=1738864835805186). <br><p><span style="color:darkred"><b>Note</b></span>: <ul><li>When you pass in `filtering`, make sure you specify the fields `field_name`, `filter_type`, and `filter_value` at the same time as an object in a list. </li><li>If you want to use `country_code` as your grouping filter, then please specify `country_code` in the `dimensions` field of the request. Note that `country_code` works with basic report (sync and async), audience report (sync and async), playable ad report (sync only), and Business Center report (sync only).</li></ul> |
| ↳ field_name {+Conditional} | string | Filter field name.|
| ↳ filter_type {+Conditional}| string | Filter type.  <br><br>Enum values: <ul><li>`IN`: Contain any of (exact matching). When you use this filter type, the filtered value must be a valid JSON array character string. </li><li>`CONTAIN_ANY_OF`: Contain any of (fuzzy matching). When you use this filter type, the filtered value must be a valid JSON array character string.</li><li>`MATCH`: Match. This filter type is equivalent to `like` operations in MySQL and supports fuzzy matching.</li><li>`NOT_IN`: Does not contain any of (exact matching). When you use this filter type, the filtered value must be a valid JSON array character string.</li><li>`GREATER_EQUAL`: Greater than or equal to.</li><li>`GREATER_THAN`: Greater than.</li><li>`LOWER_EQUAL`: Less than or equal to.</li><li>`LOWER_THAN`: Less than.</li><li>`BETWEEN`: Between. When you use this filter type, the filtered value must be a valid JSON array character string containing exactly two string values.</li></ul>  |
| ↳ filter_value{+Conditional} | string | The value to filter. <br><br>When `filter_type` is `IN` ,`CONTAIN_ANY_OF`, or `NOT_IN`, `filter_value` must be a valid JSON array character string. |
| query_mode {-to be deprecated} | string |Not supported when `report_type` is `BC`. <br><br>The way data is queried. <br><br>Enum values: `REGULAR`, `CHUNK`. <br><br>Default value: `REGULAR`.  <br><br>With `CHUNK` mode on, data can be returned much faster in a more stable way. Meanwhile, pagination will not be working with `CHUNK`.<br><br><p><span style="color:darkred"><b>Note</b></span>:  <ul><li>`CHUNK` mode will be deprecated soon. To ensure a smooth integration, we recommend that you do not use this mode.</li><li>`CHUNK` mode is only supported in synchronous basic reports.</li></ul> |
| page | number | Current page number. <br><br> Default value: `1`. |
| page_size | number | Pagination size. <br><br> Value range: 1-1,000. <br><br> Default value: `10`.|


#### Example

##### Retrieving the ad (asset group) level data of an Upgraded Smart+ Ad Group through a basic report
```xcodeblock
(code python)
curl --location --request GET 'https://business-api.tiktok.com/open_api/v1.3/report/integrated/get/?advertiser_id={{advertiser_id}}&report_type=BASIC&dimensions=["ad_id_v2","stat_time_day"]&metrics=["campaign_automation_type","ad_name","ad_id_v2","spend","impressions"]&filtering=[{"field_name":"campaign_automation_type","filter_type":"IN","filter_value":"[\"UPGRADED_SMART_PLUS\"]"},{"field_name":"adgroup_ids","filter_type":"IN","filter_value":"[\"{{adgroup_id}}\"]"}]&data_level=AUCTION_AD&start_date=2025-12-03&end_date=2025-12-03&page=1&page_size=1000' \
--header 'Access-Token: {{Access-Token}}'
(/code)
```
##### Retrieving the creative level data of an Upgraded Smart+ Ad Group through a basic report
```xcodeblock
(code python)
curl --location --request GET 'https://business-api.tiktok.com/open_api/v1.3/report/integrated/get/?advertiser_id={{advertiser_id}}&report_type=BASIC&dimensions=["ad_id","stat_time_day"]&metrics=["campaign_automation_type","ad_name","ad_id","spend","impressions"]&filtering=[{"field_name":"campaign_automation_type","filter_type":"IN","filter_value":"[\"UPGRADED_SMART_PLUS\"]"},{"field_name":"adgroup_ids","filter_type":"IN","filter_value":"[\"{{adgroup_id}}\"]"}]&data_level=AUCTION_AD&start_date=2025-12-03&end_date=2025-12-03&page=1&page_size=1000' \
--header 'Access-Token: {{Access-Token}}' \
(/code)
```
##### Filtering by Upgraded Smart+ Ad (Asset Group) IDs through `ad_id_v2`
```xcodeblock
(code curl http)
curl --location --request GET 'https://business-api.tiktok.com/open_api/v1.3/report/integrated/get/' \
--header 'Access-Token: "{{Access-Token}}"' \
--header 'Content-Type: application/json' \
--data '{
    "advertiser_id": "{{advertiser_id}}",
    "service_type": "AUCTION",
    "report_type": "BASIC",
    "data_level": "AUCTION_AD",
    "dimensions": [
        "ad_id_v2"
    ],
    "metrics": [
        "spend",
        "ad_id_v2"
    ],
    "filtering": [
        {
            "field_name": "ad_ids_v2",
            "filter_type": "IN",
            "filter_value": "[\"{{ad_id_v2}}\",\"{{ad_id_v2}}\"]"
        }
    ],
    "start_date": "2025-07-01",
    "end_date": "2025-07-30",
    "page": "1",
    "page_size": "1000"
}'
(/code)
```

### Response

**Response Header**

|Field|Data Type|Description|
|---|---|---|
|X-Tt-Ads-Throttle|string|A warning message to indicate the request's over limit issue.<br>E. g. When the number of ad ids of queried advertiser account is more than 20,000: `X-Tt-Ads-Throttle:"Number of ad ids is equal or more than 20k, only return the top 20k id's results, sorting by create time desc order."`|


**Response Parameters**

|Field|Data Type|Description|
|---|---|---|
|code |number|Response code. For the complete list of response codes and descriptions, see [Appendix - Return Codes](https://ads.tiktok.com/marketing_api/docs?id=1737172488964097).|
|message |string|Response message. For details, see [Appendix - Return Codes](https://ads.tiktok.com/marketing_api/docs?id=1737172488964097). |
|request_id |string|The log ID of the request, which uniquely identifies a request.  |
|data |object|Return data.|
| ↳ total_metrics|object| The total added-up data for your requested metrics. Returned when you enable `enable_total_metrics` in the request.  |
| ↳↳ campaign_name | string | Auction Ads Campaign Name / Reservation Ads Group Name. Metrics that cannot be aggregated, such as `campaign_name`,  will be returned as `-`. |
| ↳↳ spend | string | The total added-up data for spend.  |
| ↳↳ impressions | string | The total added-up data for impressions.|
| ↳↳ reach | string | The total added-up data for reach.  |
| ↳↳ {Other metrics} | string | The total added-up data for other metrics.|
| ↳ list|object[]| Data list. |
| ↳↳ dimensions | object | All requested dimension data. |
| ↳↳↳ advertiser_id | string |Returned when `dimensions` contains `advertiser_id`.    <br><br>Advertiser ID. |
| ↳↳↳ campaign_id | string  | Returned when `dimensions` contains `campaign_id`. <br><br>Campaign ID.  |
| ↳↳↳ adgroup_id  | string | Returned when `dimensions` contains `adgroup_id`.  <br><br>Ad Group ID. |
| ↳↳↳ ad_id | string  | Returned when `dimensions` contains `ad_id`. <br><br>Ad ID. <br><br>The types of data you can get from this metric include:<ul><li>the ad level data for Manual Ads.</li><li>the ad level data for Smart+ Campaigns.</li><li>the <b>creative </b>level data for Upgraded Smart+ Ads.</li></ul>|
| ↳↳↳ ad_id_v2 | string | Returned when `dimensions` contains the dimension `ad_id_v2`.<br><br>Ad ID v2. <br><br>The types of data you can get from this metric include:<ul><li>the ad level data for Manual Ads.</li><li>the ad level data for Smart+ Campaigns.</li><li>the<b> ad</b> level data for Upgraded Smart+ Ads.</li></ul> |
| ↳↳↳ stat_time_day| string | Returned when `dimensions` contains `stat_time_day`. <br><br>The time (days) when the reporting occurred. <br><br>Format: `2020-01-01 00:00:00`. |
| ↳↳↳ stat_time_hour | string |Returned when `dimensions` contains `stat_time_hour`. <br><br> The time (hours) when the reporting occurred. <br><br>Format: `2020-01-01 10:00:00`. |
| ↳↳↳ ac | string | Returned when `dimensions` contains `ac`. <br><br>Audience internet connection types. See [Enumeration - Connection Type](https://ads.tiktok.com/marketing_api/docs?id=1737174886619138) for details. |
| ↳↳↳ age | string |Returned when `dimensions` contains `age`. <br><br>Audience age group. See [Enumeration - Age Group](https://ads.tiktok.com/marketing_api/docs?id=1737174886619138) for details. |
| ↳↳↳ country_code | string | Returned when `dimensions` contains `country_code`.<br><br>Audience country or region code. For enum values, see [Appendix - Location code](https://ads.tiktok.com/marketing_api/docs?id=1737585867307010).  |
| ↳↳↳ interest_category | string | Returned when `dimensions` contains `interest_category`.  <br> <br>Old first-level interest category. <br> <br><p><span style="color:DarkRed"><b>Note</b></span>: Old first-level interest categories will be deprecated in the next API version.|
| ↳↳↳ interest_category_v2| string |Returned when `dimensions` contains `interest_category`.  <br> <br>New first-level interest category.  <br> <br>Use [/tool/interest_category/](https://ads.tiktok.com/marketing_api/docs?id=1737174348712961) endpoint to get the complete list of interest categories.  |
| ↳↳↳ gender | string |Returned when `dimensions` contains `gender`. <br><br> Targeting gender. Enum values: `FEMALE`, `MALE`, `NONE`. |
| ↳↳↳ language | string | Returned when `dimensions` contains `language`.<br><br>Targeting language. See [Enumeration - Languages](https://ads.tiktok.com/marketing_api/docs?id=1737174886619138) for details.  |
| ↳↳↳ placement | string | Returned when `dimensions` contains `placement`.<br><br>Placement. See [Enumeration - Placement](https://ads.tiktok.com/marketing_api/docs?id=1737174886619138) for details.  |
| ↳↳↳ platform | string |Returned when `dimensions` contains `platform`.  <br><br>Targeting operating system. See [Enumeration - Operating System](https://ads.tiktok.com/marketing_api/docs?id=1737174886619138) for details. |
| ↳↳↳ contextual_tag  | string |<Returned when `dimensions` contains `contextual_tag`. <br><br>Contextual tag. |
| ↳↳ metrics | object | All requested metric data. |
| ↳↳↳ campaign_name | string | Auction Ads Campaign Name / Reservation Ads Group Name. |
| ↳↳↳ spend | string | Total spend. |
| ↳↳↳ impressions | string | Number of impression.|
| ↳↳↳ reach | string | Number of reach. |
| ↳↳↳ {Other metrics} | string | For metrics supported in different report types, refer to the articles under [Report types](https://ads.tiktok.com/marketing_api/docs?id=1738864835805186).|
| ↳↳↳ advertiser_id | string |Returned when you have specified `advertiser_ids` in your request.<br><br>  Advertiser ID.  |
| ↳↳↳ timezone | string | Returned when you have specified `advertiser_ids` in your request.<br><br> Your advertiser's timezone.   |
| ↳↳↳ currency | string | Returned when you have specified `advertiser_ids` in your request.  <br><br>Your advertiser's currency.   |
| ↳↳↳ campaign_automation_type | string | Returned when `metrics` contains the `campaign_automation_type` metric in the request.<br><br>Campaign automation type.<br><br>Enum values:<ul><li>`MANUAL`: Manual Campaigns.</li><li>`SMART_PLUS`: Smart+ Campaigns.</li><li>`UPGRADED_SMART_PLUS`: Upgraded Smart+ Campaigns. To learn more about Upgraded Smart+ Campaigns, see [Upgraded Smart+ Campaign](https://business-api.tiktok.com/portal/docs?id=1853452461203458).<ul><li>When `campaign_automation_type` is `UPGRADED_SMART_PLUS`, the returned `ad_id_v2` is the ID of the Upgraded Smart+ Ad.</li></ul></li><li>`UPGRADED_SMART_PLUS_CREATIVE`: Upgraded Smart+ Campaigns. To learn more about Upgraded Smart+ Campaigns, see [Upgraded Smart+ Campaign](https://business-api.tiktok.com/portal/docs?id=1853452461203458).<ul><li>When `campaign_automation_type` is `UPGRADED_SMART_PLUS_CREATIVE`, the returned `ad_id` is the ID of a creative in the Upgraded Smart+ Ad.</li></ul></li></ul> |
| ↳↳↳ ad_id_v2 | string | Returned when `metrics` contains the `ad_id_v2` metric in the request.<br><br>Ad ID v2. <br><br><ul><li>The types of data you can get from this metric include:<ul><li>The ad IDs of Manual Ads</li><li>The ad IDs of  Smart+ Campaigns</li><li>The ad IDs of Upgraded Smart+ Ads</li></ul></li></ul> |
| ↳↳↳ ad_text_list | string[] | Returned when the following conditions are met:<ul><li>`dimensions` contains the dimension `ad_id_v2` and `ad_id_v2` is an Upgraded Smart+ Ad.</li><li>`metrics` contains `ad_text`.</li><li>`report_type` is `BASIC`, `AUDIENCE`, or `CATALOG`.</li></ul><br>A list of ad texts. |
| ↳↳↳ call_to_action_list | string[] | Returned when the following conditions are met:<ul><li>`dimensions` contains the dimension `ad_id_v2` and `ad_id_v2` is an Upgraded Smart+ Ad.</li><li>`metrics` contains `call_to_action`.</li><li>`report_type` is `BASIC` or `AUDIENCE`.</li></ul><br>A list of call-to-actions. |
| ↳↳↳ ad_profile_image_list | string[] | Returned when the following conditions are met:<ul><li>`dimensions` contains the dimension `ad_id_v2`.</li><li>`metrics` contains `ad_profile_image`.</li><li>`report_type` is `BASIC` or `AUDIENCE`.</li></ul><br>A list of ad level profile images. |
| ↳↳↳ ad_url_list | string[] | Returned when the following conditions are met:<ul><li>`dimensions` contains the dimension `ad_id_v2` and `ad_id_v2` is an Upgraded Smart+ Ad.</li><li>`metrics` contains `ad_url`.</li><li>`report_type` is `BASIC` or `AUDIENCE`.</li></ul><br>A list of ad level URLs. |
| ↳↳↳ image_mode_list | string[] | Returned when the following conditions are met:<ul><li>`dimensions` contains the dimension `ad_id_v2` and `ad_id_v2` is an Upgraded Smart+ Ad.</li><li>`metrics` contains `image_mode`.</li><li>`report_type` is `BASIC` or `AUDIENCE`.</li></ul><br>A list of formats. |
| ↳↳↳ image_info_list | string[] | Returned when the following conditions are met:<ul><li>`dimensions` contains the dimension `ad_id_v2` and `ad_id_v2` is an Upgraded Smart+ Ad.</li><li>`metrics` contains `image_info`.</li><li>`report_type` is `BASIC` or `AUDIENCE`.</li></ul><br>A list of images. |
| ↳↳↳ ad_display_name_list | string[] | Returned when the following conditions are met:<ul><li>`dimensions` contains the dimension `ad_id_v2` and `ad_id_v2` is an Upgraded Smart+ Ad.</li><li>`metrics` contains `ad_display_name`.</li><li>`report_type` is `BASIC` or `AUDIENCE`.</li></ul><br>A list of ad display names. |
| ↳↳↳ identity_type_list | string[] | Returned when the following conditions are met:<ul><li>`dimensions` contains the dimension `ad_id_v2` and `ad_id_v2` is an Upgraded Smart+ Ad.</li><li>`metrics` contains `identity_type`.</li><li>`report_type` is `BASIC` or `AUDIENCE`.</li></ul><br>A list of identity types. |
| ↳↳↳ profile_image_list | string[] | Returned when the following conditions are met:<ul><li>`dimensions` contains the dimension `ad_id_v2` and `ad_id_v2` is an Upgraded Smart+ Ad.</li><li>`metrics` contains `profile_image`.</li><li>`report_type` is `BASIC` or `AUDIENCE`.</li></ul><br>A list of profile images. |
| ↳ page_info |object | Pagination information.|
| ↳↳ page |number | Current page number. |
| ↳↳ page_size |number | Page size. |
| ↳↳ total_number |number | Total number of results.|
| ↳↳ total_page |number | Total pages of results. |


#### Example
##### Retrieving the ad (asset group) level data of Upgraded Smart+ Ads in a basic report
```xcodeblock
(code Success-Response http)
{
    "code": 0,
    "message": "OK",
    "request_id": "{{request_id}}",
    "data": {
        "page_info": {
            "page": 1,
            "page_size": 1000,
            "total_page": 1,
            "total_number": 2
        },
        "list": [
            {
                "dimensions": {
                    // "ad_id_v2" returns ad level data
                    "ad_id_v2": "{{ad_id_v2}}",
                    "stat_time_day": "2025-12-03 00:00:00"
                },

                "metrics": {
                    // ad ID
                    "ad_id_v2": "{{ad_id_v2}}",
                    // ad name
                    "ad_name": "{{ad_name}}",
                    "impressions": "1079",
                    "spend": "14.68",
                    "campaign_automation_type": "UPGRADED_SMART_PLUS"
                }
            },
            {
                "dimensions": {
                    "ad_id_v2": "{{ad_id_v2}}",
                    "stat_time_day": "2025-12-03 00:00:00"
                },
                "metrics": {
                    "ad_id_v2": "{{ad_id_v2}}",
                    "ad_name": "{{ad_name}}",
                    "impressions": "52",
                    "spend": "0.70",
                    "campaign_automation_type": "UPGRADED_SMART_PLUS"
                }
            }
        ]
    }
}
(/code)
```
##### Retrieving the creative level data of Upgraded Smart+ Ads in a basic report
```xcodeblock
(code Success-Response http)
{
    "code": 0,
    "message": "OK",
    "request_id": "{{request_id}}",
    "data": {
        "page_info": {
            "page": 1,
            "page_size": 1000,
            "total_page": 1,
            "total_number": 3
        },
        "list": [
            {
                "dimensions": {
                   // "ad_id" returns creative level data
                    "ad_id": "{{ad_id}}",
                    "stat_time_day": "2025-12-03 00:00:00"
                },
                "metrics": {
                    // creative ID
                    "ad_id": "{{ad_id}}",
                    // creative name
                    "ad_name": "{{ad_name}}",
                    "impressions": "513",
                    "spend": "7.97",
                    "campaign_automation_type": "UPGRADED_SMART_PLUS_CREATIVE"
                }
            },
            {
                "dimensions": {
                    "ad_id": "{{ad_id}}",
                    "stat_time_day": "2025-12-03 00:00:00"
                },
                "metrics": {
                    "ad_id": "{{ad_id}}",
                    "ad_name": "{{ad_name}}",
                    "impressions": "37",
                    "spend": "0.58",
                    "campaign_automation_type": "UPGRADED_SMART_PLUS_CREATIVE"
                }
            },
            {
                "dimensions": {
                    "ad_id": "{{ad_id}}",
                    "stat_time_day": "2025-12-03 00:00:00"
                },
                "metrics": {
                    "ad_id": "{{ad_id}}",
                    "ad_name": "{{ad_name}}",
                    "impressions": "10",
                    "spend": "0.08",
                    "campaign_automation_type": "UPGRADED_SMART_PLUS_CREATIVE"
                }
            }
        ]
    }
}
(/code)
```
##### Filtering by Upgraded Smart+ Ad (Asset Group) IDs through `ad_id_v2`
```xcodeblock
(code Success-Response http)
{
    "code": 0,
    "message": "OK",
    "request_id": "{{request_id}}",
    "data": {
        "page_info": {
            "page": 1,
            "page_size": 2,
            "total_number": 2,
            "total_page": 1
        },
        "list": [
            {
                "dimensions": {
                    "ad_id_v2": "{{ad_id_v2}}"
                },
                "metrics": {
                    "spend": "0.00",
                    "ad_id_v2": "{{ad_id_v2}}"
                }
            },
            {
                "dimensions": {
                    "ad_id_v2": "{{ad_id_v2}}"
                },
                "metrics": {
                    "spend": "186.78",
                    "ad_id_v2": "{{ad_id_v2}}"
                }
            }
        ]
    }
}
(/code)
```

---

## POST /v1.3/report/task/create/

**Create an asynchronous report task** (docs: https://business-api.tiktok.com/portal/docs/create-an-asynchronous-report-task/v1.3)

Use this endpoint to create an asynchronous report task.

See [Run an asynchronous report](https://ads.tiktok.com/marketing_api/docs?id=1738864800380930) to learn about how to run an asynchronous report.

You can use different endpoints to create a standard (synchronous) report and an asynchrounous report. To find out the supported dimensions, metrics, and use cases for different report types, see [Report types](https://ads.tiktok.com/marketing_api/docs?id=1738864835805186). Also, you need to use `POST` method for asynchronous reports and `GET` method for standard (synchronous) reports.

### Notes
See the table below to learn about the notes about rate limit, supported report types, query time range, filtering, compatibility between metrics and dimensions, CHUNK mode, pagination, validity period, data, and more.

| Type | Details |
|---|---|
| Rate limit | Due to computing resource limits, the rate limit for each app is 1 QPS. Please do not create a large number of asynchronous report tasks in a short period of time.<br>Furthermore, the user associated with your access token (`Access-Token`) has a separate limit of 500 asynchronous report creations per ad account every hour. |
| Supported report types | Playable ads reports are not supported in asynchronous reports. |
| Query time range | There are no limits on starting times and ending times for asynchronous reports. |
| Filtering | <ul><li>Asynchronous reports only support filtering by `campaign_ids`, `adgroup_ids`, `ad_ids` or `country_code`. You can filter the data by 20000 IDs at most. </li><li>If you want to use `country_code` as your grouping filter, then please specify `country_code` in the `dimensions` field of the request. Note that `country_code` works with basic report (sync and async), audience report (sync and async), and playable ad report (sync only). </li></ul>|
| Compatibility between metrics and dimensions | <ul><li>Querying UV metrics with audience dimensions is not supported in asynchronous reports. Please query UV metrics without audience dimensions or audience dimensions without UV metrics in asynchronous reports instead. <ul><li>Audience dimensions include `"gender"`, `"age"`, `"country_code"`, `"ac"`, `"language"`, `"platform"`, `"interest_category"`, `"placement"`, `"contextual_tag"`. </li><li>UV metrics include `"average_video_play_per_user"`, `"frequency"`, `"cost_per_1000_reached"`, `"real_time_result"`, `"real_time_result_rate"`, `"real_time_cost_per_result"`, `"result"`, `"result_rate"`, `"cost_per_result"`, `"reach"`, `"live_play_count"`. </li></ul></li><li>The dimension and metric combinations that are supported may vary between synchronous and asynchronous reports. Therefore, a valid dimension and metric combination in synchronous reports may not be supported in asynchronous reports.</li></ul>|
| CHUNK mode | CHUNK mode only supports synchronous basic reports. |
| Pagination | Paging is not supported. |
| Validity period | An asynchronous report task is valid for 30 days, after which you cannot query for its status or download its output. |
| Data | Data for asynchronous reports is refreshed once every several hours. The data for the current day may be inaccurate. |
| Known issue | Currently, asynchronous reports return the dimension `country_code` (e.g. `US`) as `country_name`(e.g. `United States`). This is a known issue and will be fixed in future release. |


### Comparing v1.2 and v1.3

 The following table outlines the differences between v1.2 and v1.3 endpoints.

|Changes|v1.2|v1.3|
|---|---|---|
| Endpoint path | /v1.2/reports/integrated/get/ (POST method) | /v1.3/report/task/create/ (POST method) |
| Request parameter name | `filters` | `filtering` |
| Request parameter data type | `advertiser_id`: number | `advertiser_id`: string |
| Request parameter deprecated in v1.3 | / | `lifetime` (replaced by the new request parameter `query_lifetime`) |
| New request parameters | / | `output_format`<br> `file_name`<br>`query_lifetime` <br>`advertiser_ids`<br>`enable_report_title_translation` |
| Dimensions  | / | See the corresponding articles under [Report types](https://ads.tiktok.com/marketing_api/docs?id=1738864835805186) to find out the dimension changes in each report type.   |
|Metrics  | / | See the corresponding articles under [Report types](https://ads.tiktok.com/marketing_api/docs?id=1738864835805186) to find out the metric changes in each report type.   |


### Request

**Endpoint**
https://business-api.tiktok.com/open_api/v1.3/report/task/create/

**Method** POST

**Header**

|Field|Type|Description|
|---|---|---|
|Access-Token (required)|string|Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id=1738373164380162).|


**Parameters**

| Field | Data Type | Description |
|---|---|---|
| advertiser_id {+Conditional} | string | Either `advertiser_id` or `advertiser_ids` has to be set. If you pass in both `advertiser_id` and `advertiser_ids`, `advertiser_id` will be ignored. <br><br>Advertiser ID.|
| advertiser_ids<br>{+Conditional} | string[] | Either `advertiser_id` or `advertiser_ids` has to be set. If you pass in both `advertiser_id` and `advertiser_ids`, `advertiser_id` will be ignored.<br><br>A list of advertiser IDs. <br>Max size: 5.<br><br><p><span style="color:darkred"><b>Note</b></span>:<ul><li> This field is only valid when `report_type` is `BASIC` or `AUDIENCE`.</li><li>  The advertisers specified in `advertiser_ids` should all belong to the same TikTok for Business user. Otherwise, an error will occur. Use [/oauth2/advertiser/get/](https://business-api.tiktok.com/portal/docs?id=1738455508553729) to retrieve a list of advertiser IDs that belong to the same TikTok for Business user.</li><li> If you specify `start_date` and `end_date` at the same time, the data will be pulled according to the timezone of each ad account.</li><li> When you pass multiple advertiser IDs, you can specify up to two ID dimensions (`advertiser_id` + another ID dimension) in dimensions. However, many metrics do not support the `advertiser_id` dimension. Also, it's recommended that you include `currency` in `metrics`, because the ad accounts may have different currencies.</li></ul>|
| service_type | string | Ad service type. <br><br> Enum values:<ul><li>`AUCTION`: auction ads, or both auction ads and reservation ads.</li><li>`RESERVATION` (<span style="color:Red">deprecated</span>) : reservation ads. </li></ul> Default value: `AUCTION`.<br><br><p><span style="color:darkred"><b>Note</b></span>: To retrieve the reporting data of TopView ads, use the [basic reports](https://business-api.tiktok.com/portal/docs?id=1738864915188737) or [audience reports](https://business-api.tiktok.com/portal/docs?id=1738864928947201) and specify the value `RESERVATION_TOP_VIEW` for the `buying_type` [filter](https://business-api.tiktok.com/portal/docs?id=1751443975608321). |
| report_type (required) | string | Report type. <br><br> Enum values: `BASIC` (basic report), `AUDIENCE` (audience report), `PLAYABLE_MATERIAL` (playable ads report), `CATALOG` (DSA report).  <br><br>When `service_type` is `AUCTION`, `BASIC`, `AUDIENCE`, `PLAYABLE_MATERIAL`, and `CATALOG` reports are all supported.<br><br><p><span style="color:darkred"><b>Note</b></span>: You can retrieve the creative level data for Upgraded Smart+ Ads when `report_type` is `BASIC`, `AUDIENCE`, or `CATALOG`.</p> |
| data_level {+Conditional}| string | The data level that you'd like to query in reports. Required when `report_type` is `BASIC`,`AUDIENCE` or `CATALOG`. <br><br> Enum values:<ul><li>`AUCTION_AD`: auction ads or both auction ads and reservation ads, ad level.</li><li>`AUCTION_ADGROUP`: auction ads or both auction ads and reservation ads, ad group level. </li><li>`AUCTION_CAMPAIGN`: auction ads or both auction ads and reservation ads, campaign level.</li><li>`AUCTION_ADVERTISER`: auction ads or both auction ads and reservation ads, advertiser level. </li><li>`RESERVATION_AD`(<span style="color:Red">deprecated</span>): reservation ads, ad level. </li><li>`RESERVATION_ADGROUP`(<span style="color:Red">deprecated</span>): reservation ads, ad group level. </li><li>`RESERVATION_CAMPAIGN`(<span style="color:Red">deprecated</span>): reservation ads, campaign level. </li><li>`RESERVATION_ADVERTISER`(<span style="color:Red">deprecated</span>): reservation ads, advertiser level. </li></ul> |
| dimensions (required) | string[] |  Grouping conditions. For example: `&#91;"campaign_id", "stat_time_day"&#93;` indicates that both `campaign_id` and `stat_time_day` (days) are grouped. <br><br>Different report types support different dimensions. <ul><li>Supported dimensions in [basic reports](https://business-api.tiktok.com/portal/docs?id=1751443956638721)</li><li>Supported dimensions in [audience reports](https://business-api.tiktok.com/portal/docs?id=1751454103714818)</li><li>Supported dimensions in [playable ad reports](https://business-api.tiktok.com/portal/docs?id=1751617879104514)</li><li>Supported dimensions in [DSA reports](https://business-api.tiktok.com/portal/docs?id=1751617879104514)</li><li> Supported dimensions in [Business Center reports](https://business-api.tiktok.com/portal/docs?id=1775747465089026)</li></ul><br><p><span style="color:darkred"><b>Note</b></span> : <ul><li>Different report types support different dimensions. For supported dimensions for each report type, see the corresponding articles under [Report types](https://ads.tiktok.com/marketing_api/docs?id=1738864835805186). </li><li>If your query `dimensions` contain more than xx_id and there is no ads reporting within the query time range, an empty list will be returned.</li><li>The dimension and metric combinations that are supported may vary between synchronous and asynchronous reports. Therefore, a valid dimension and metric combination in synchronous reports may not be supported in asynchronous reports.</li><li>The dimension `ad_id_v2` is available. Note that:<ul><li>You need to ensure the `report_type` is `BASIC`, `AUDIENCE`, or `CATALOG`.</li><li>You cannot use it together with the dimension `ad_id` or the filter `ad_ids`.</li><li>The types of data you can get include:<ul><li>the ad level data for Manual Ads.</li><li>the ad level data for Smart+ Campaigns.</li><li>the ad level data for Upgraded Smart+ Ads.</li></ul></li></ul></li></ul></ul>|
| metrics | string[] | Metrics to query. <br><br>Different report types support different metrics.  For supported metrics for each report type, see the corresponding articles under [Report types](https://ads.tiktok.com/marketing_api/docs?id=1738864835805186). <br><br>Default value: `["spend", "impressions"]`. |
| start_date {+Conditional} | string | This field is required when `query_lifetime` is `false` or not specified.<br><br>Query start date (closed interval) in the format of `YYYY-MM-DD`. The date is based on the ad account time zone. <br><br><p><span style="color:darkred"><b>Note</b></span>: Asynchronous reports have no time range limitations.|
| end_date {+Conditional} | string | This field is required when `query_lifetime` is `false` or not specified.<br><br>Query end date (closed interval) in the format of `YYYY-MM-DD`. The date is based on the ad account time zone.<br><br><p><span style="color:darkred"><b>Note</b></span>: Asynchronous reports have no time range limitations.|
|query_lifetime | boolean  |Whether to request the lifetime metrics. <br><br> Default value: `false`. <br><br>If `query_lifetime` = `true`, the `start_date` and `end_date` parameters will be ignored. The lifetime metric name is the same as the normal one. <br><p><span style="color:darkred"><b>Note</b></span>: <ul><li>Breakdown by time or audience is not supported when querying for lifetime metrics.</li><li>Breakdown by location code (`country_code`) is not supported when querying for lifetime metrics.</li><li>DSA reports do not support lifetime metrics. Besides, Audience reports do not support lifetime metrics at the time, and will support lifetime metrics in the first half of 2023.</li></ul>|
| order_field | string | Sorting field. <br><br>All supported metrics (excluding attribute metrics) support sorting. Not sorting by default.|
| order_type | string | Sorting order. <br><br>Enum values: `ASC`, `DESC`.<br>Default value: `DESC`.|
| enable_report_title_translation | boolean | Whether to enable the translation of the title row of the asynchronous report (including dimension names and metric names).<br>For instance, if this field is set to `false`, a report title can be `ad_id` (untranslated title) rather than `AD ID` (translated title).<br>Default value: `true`.<br><br><p><span style="color:darkred"><b>Note</b></span>: <ul><li>This field is only valid when `report_type` is `BASIC` or `AUDIENCE`.</li><li>Starting November 15th, 2024, the translation of certain metrics in the title row of async reports will be updated to provide a better user experience. This change will not affect the metric field names themselves. To minimize potential disruptions, we strongly recommend setting `enable_report_title_translation` to `false` in your code. This will eliminate dependencies on metric translations, which are subject to periodic updates. While these translations are provided to help map metrics to their corresponding names in TikTok Ads Manager, relying on them in your code may lead to breaking changes in the future. By disabling title row  translation, you can ensure more stable and predictable behavior in your integration.</li></ul>  |
| output_format | string | Format of output. <br><br>Enum values: `CSV_STRING`, `CSV_DOWNLOAD`, `XLSX_DOWNLOAD`.<br> Default value: `CSV_STRING`.|
|file_name | string | Customized download file name, which is optional to pass when `output_format` is `CSV_DOWNLOAD` or  `XLSX_DOWNLOAD`. The maximum length is 255 characters. The file name needs to exclude the following special characters: ['/', '\t', '\b', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']']. |
| filtering | object[] | Filtering conditions. Supported filtering conditions vary based on `service_type` and `data_level`. For filters supported in different report types, refer to the articles under [Report types](https://ads.tiktok.com/marketing_api/docs?id=1738864835805186). <br><p><span style="color:darkred"><b>Note</b></span>: <ul><li>When you pass in `filtering`, please make sure you specify the fields `field_name`, `filter_type`, and `filter_value` at the same time as an object in a list.</li><li>If you want to use `country_code` as your grouping filter, then please specify `country_code` in the `dimensions` field of the request. Note that `country_code` works with basic report (sync and async), audience report (sync and async), and playable ad report (sync only).</li><li>In asynchronous mode for the report types of basic reports, audience reports, and DSA reports, the only supported filter fields are `campaign_ids`, `adgroup_ids`, and `ad_ids`.</li></ul> |
| ↳ field_name| string | Filter field name.<br><br>The filter `ad_ids_v2` is available. Note that:<ul><li>You cannot use it together with the dimension `ad_id` or the filter `ad_ids`.</li><li>The types of ID you can filter include:<ul><li>The ID of a Manual Ad.</li><li>The ID of an ad within a Smart+ Campaign.</li><li>The ID of an Upgraded Smart+ Ad.</li></ul></li><li>You need to set `data_level` to `AUCTION_AD`and include `ad_id_v2` in `dimensions`.</li><li>You can specify up to 100 values when using this filter.</li></ul>|
| ↳ filter_type | string | Filter type. <br><br>Enum values: <ul><li>`IN`: Contains. When the filter type is this item, the filtered value needs to be a valid JSON array character string.</li><li>`MATCH`: Fuzzy matching, equivalent to `like` operations in MySQL.</li><li>`GREATER_EQUAL`: Greater than or equal to.</li><li>`GREATER_THAN`: Greater than.</li><li>`LOWER_EQUAL`: Less than or equal to.</li><li>`LOWER_THAN`: Less than.</li><li>`BETWEEN`: Between. When the filter type is this item, the filtered value needs to be a valid JSON array of 2-element string.</li></ul><br>When `field_name` is `ad_id_v2`, set `filter_type` to `IN`. |
| ↳ filter_value | string | The value to filter. <br>  When `filter_type` is `IN`, `filter_value` needs to be a valid JSON array character string. |


#### Example
```xcodeblock
(code curl http)
curl --location --request POST 'https://business-api.tiktok.com/open_api/v1.3/report/task/create/' \
--header 'Access-Token: {{access-token}}' \
--data-raw '{
    "advertiser_id": "{{advertiser_id}}",
    "data_level":"AUCTION_AD",
    "report_type":"BASIC",
    "dimensions": ["ad_id"],
    "metrics": ["clicks"],
    "start_date": "{{start_date}}",
    "end_date": "{{end_date}}",
    "output_format": "CSV_DOWNLOAD",
    "file_name": "{{file_name}}",
    "filtering": [
        {
        "field_name":"ad_ids",
        "filter_type":"IN",
        "filter_value": "[\"{{ad_id}}\",\"{{ad_id}}\"]"
        }
    ]
}'
(/code)
```

### Response

|Field|Type|Description|
|---|---|---|
|code |number|The response code. For the complete list of response codes and descriptions, see [Appendix - Return Codes](https://ads.tiktok.com/marketing_api/docs?id=1737172488964097). |
|message |string|The response message. For details, see [Appendix - Return Codes](https://ads.tiktok.com/marketing_api/docs?id=1737172488964097).|
|data |object|The returned data.  |
| ↳ task_id |string| The ID of the asynchronous report task. |
|request_id |string|The unique ID of the request.  |


#### Example

```xcodeblock
(code Success-Response http)
HTTPS/1.1 200 OK
{
    "message": "OK",
    "code": 0,
    "data": {
        "task_id": "{{task_id}}"
    },
    "request_id": "{{request_id}}"
}
(/code);
```

---

## GET /v1.3/report/task/check/

**Get the status of an async report task** (docs: https://business-api.tiktok.com/portal/docs/get-the-status-of-an-async-report-task/v1.3)

Use this endpoint to check the status of an asynchronous report task.

### Comparing v1.2 and v1.3

 The following table outlines the differences between v1.2 and v1.3 endpoints.

|Changes|v1.2|v1.3|
|---|---|---|
| Endpoint path | /v1.2/reports/task/check/ | /v1.3/report/task/check/ |
| Request parameter data type | `advertiser_id`: number | `advertiser_id`: string |


### Request

**Endpoint**
https://business-api.tiktok.com/open_api/v1.3/report/task/check/

**Method** GET

**Header**


|Field|Type|Description|
|---|---|---|
|Access-Token (required)|string| Authorized access token. Please use the same access token as the [/report/task/create/](https://ads.tiktok.com/marketing_api/docs?id=1740302766489602) point.|


**Parameters**

|Field|Type|Description|
|---|---|---|
|advertiser_id (required)|string| Advertiser ID.<br><p><span style="color:darkred"><b>Note</b></span>: If you use `advertiser_ids` when calling [/report/task/create/](https://ads.tiktok.com/marketing_api/docs?id=1740302766489602) (POST method), you need to set this field to one of the Advertiser IDs specified via `advertiser_ids`.   |
|task_id (required)|string| The ID of the asynchronous report task. You can get the ID via the response of [/report/task/create/](https://ads.tiktok.com/marketing_api/docs?id=1740302766489602) endpoint. |


#### Example

```xcodeblock
(code Java java)
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import okhttp3.*;
import org.apache.http.client.utils.URIBuilder;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class Demo {
    private static final String ACCESS_TOKEN = "xxx";
    private static final String PATH = "/open_api/v1.3/report/task/check/";
    private static final ObjectMapper mapper = new ObjectMapper();

    /**
     * Build request URL
     *
     * @param path Request path
     * @return Request URL
     */
    private static String buildUrl(String path) throws URISyntaxException {
        URI uri = new URI("https", "business-api.tiktok.com", path, "", "");
        return uri.toString();
    }


    /**
     * Send GET request
     *
     * @param jsonStr:Args in JSON format
     * @return Response in JSON format
     */
    private static String get(String jsonStr) throws IOException, URISyntaxException {
        OkHttpClient client = new OkHttpClient().newBuilder().build();
        URIBuilder ub = new URIBuilder(buildUrl(PATH));
        Map< String, Object > map = mapper.readValue(jsonStr, Map.class);
        map.forEach((k, v) -> {
            try {
                ub.addParameter(k, v instanceof String ? (String) v : mapper.writeValueAsString(v));
            } catch (JsonProcessingException e) {
                e.printStackTrace();
            }
        });
        URL url = ub.build().toURL();

        Request request = new Request.Builder()
                .url(url)
                .method("GET", null)
                .addHeader("Access-Token", ACCESS_TOKEN)
                .build();
        Response response = client.newCall(request).execute();
        return response.body().string();
    }

    public static void main(String[] args) throws IOException, URISyntaxException {
        String task_id = TASK_ID;

        // Args in JSON format
        String myArgs = String.format("{\"task_id\": \"%s\"}",task_id);
        System.out.println(get(myArgs));
    }
}

(/code)

(code Python python)
# coding=utf-8
import json
import requests

from six import string_types
from six.moves.urllib.parse import urlencode, urlunparse  # noqa

ACCESS_TOKEN = "xxx"
PATH = "/open_api/v1.3/report/task/check/"


def build_url(path, query=""):
    # type: (str, str) -> str
    """
    Build request URL
    :param path: Request path
    :param query: Querystring
    :return: Request URL
    """
    scheme, netloc = "https", "business-api.tiktok.com"
    return urlunparse((scheme, netloc, path, "", query, ""))

def get(json_str):
    # type: (str) -> dict
    """
    Send GET request
    :param json_str: Args in JSON format
    :return: Response in JSON format
    """
    args = json.loads(json_str)
    query_string = urlencode({k: v if isinstance(v, string_types) else json.dumps(v) for k, v in args.items()})
    url = build_url(PATH, query_string)
    headers = {
        "Access-Token": ACCESS_TOKEN,
    }
    rsp = requests.get(url, headers=headers)
    return rsp.json()

if __name__ == '__main__':
    task_id = TASK_ID

    # Args in JSON format
    my_args = "{\"task_id\": \"%s\"}" % (task_id)
    print(get(my_args))

(/code)

(code PHP php)

$ACCESS_TOKEN = "xxx";
$PATH = "/open_api/v1.3/report/task/check/";

/**
 * Build request URL
 * @param $path : Request path
 * @return string
 */
function build_url($path)
{
    return "https://business-api.tiktok.com" . $path;
}

/**
 * Send GET request
 * @param $json_str : Args in JSON format
 * @return bool|string : Response in JSON format
 */
function get($json_str)
{
    global $ACCESS_TOKEN, $PATH;
    $curl = curl_init();

    $args = json_decode($json_str, true);

    /* Values of querystring is also in JSON format */
    foreach ($args as $key => $value) {
        $args[$key] = is_string($value) ? $value : json_encode($value);
    }

    $url = build_url($PATH) . "?" . http_build_query(
            $args
        );

    curl_setopt_array($curl, array(
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
            "Access-Token: " . $ACCESS_TOKEN,
        ),
    ));

    $response = curl_exec($curl);
    curl_close($curl);
    return $response;
}


$task_id = TASK_ID;

/* Args in JSON format */
$my_args = sprintf("{\"task_id\": \"%s\"}", $task_id);
echo get($my_args);
(/code)

(code curl http)
curl --get -H "Access-Token:xxx" \
--data-urlencode "task_id=TASK_ID" \
https://business-api.tiktok.com/open_api/v1.3/report/task/check/
(/code)

```

### Response

|Field|Type|Description|
|---|---|---|
|code |number|The response code. For the complete list of response codes and descriptions, see [Appendix - Return Codes](https://ads.tiktok.com/marketing_api/docs?id=1737172488964097). |
|message |string|The response message. For details, see [Appendix - Return Codes](https://ads.tiktok.com/marketing_api/docs?id=1737172488964097).|
|data |object|The returned data.  |
| ↳ status |string| The status of the task. <br><br>Enum values: `QUEUING`, `PROCESSING`, `SUCCESS`, `FAILED`, `CANCELED`.<br><br>If you want to cancel a task that is either queued or currently being processed, use [/report/task/cancel/](https://business-api.tiktok.com/portal/docs?id=1803615367145537).|
| ↳ message |string| This field is returned when `status` is `FAILED`.<br><br> The reason why the task failed. |
|request_id |string|The unique ID of the request.  |


#### Example

```xcodeblock
(code Success-Response http)
HTTPS/1.1 200 OK
{
    "message": "OK",
    "code": 0,
    "data": {
        "status": "SUCCESS",
        "message": ""
    },
    "request_id": "2021022606090301011517615608212B1C"
}
(/code);
```

---

## GET /v1.3/report/task/download/

**Download the output of an async report task** (docs: https://business-api.tiktok.com/portal/docs/download-the-output-of-an-async-report-task/v1.3)

Use this endpoint to  download the output of the report after an asynchronous report task has completed.

### Comparing v1.2 and v1.3

The following table outlines the differences between v1.2 and v1.3 endpoints.

|Changes|v1.2|v1.3|
|---|---|---|
| Endpoint path | /v1.2/reports/task/download/ | /v1.3/report/task/download/ |
| Request parameter data type | `advertiser_id`: number | `advertiser_id`: string |
| New respone parameter | / | `code`: number<br>`message`: string<br>`data`: object<br>`download_url`: string<br>`file_name`: string<br>`output_format`: string<br>`request_id`: string |


### Request

**Endpoint**
https://business-api.tiktok.com/open_api/v1.3/report/task/download/

**Method** GET

**Header**

|Field|Type|Description|
|---|---|---|
|Access-Token (required)|string|Authorized access token. Please use the same access token as the [Create an asynchronous report task](https://ads.tiktok.com/marketing_api/docs?id=1740302766489602) operation.|

**Parameters**

|Field|Type|Description|
|---|---|---|
|advertiser_id (required)| string| Advertiser ID. <br><p><span style="color:darkred"><b>Note</b></span>: If you use `advertiser_ids` when calling [/report/task/create/](https://ads.tiktok.com/marketing_api/docs?id=1740302766489602) (POST method), you need to set this field to one of the Advertiser IDs specified via `advertiser_ids`.    |
|task_id (required)|string| The ID of the asynchronous report task. |


#### Example

```xcodeblock
(code curl http)
curl --get -H "Access-Token:xxx" \
--data-urlencode "task_id=TASK_ID" \
https://business-api.tiktok.com/open_api/v1.3/report/task/download/
(/code)
```

### Response
CSV file streams or Json format.
<br>The below is json format response.
> <span style="color: DodgerBlue">**Note**</span><br>If `output_format` is set to `CSV_DOWNLOAD` or `XLSX_DOWNLOAD` in the [/report/task/create/](https://ads.tiktok.com/marketing_api/docs?id=1740302766489602) endpoint, the response will be json format.

|Field|Data Type|Description|
|---|---|---|
|code |number | Response code. For the complete list of response codes and descriptions, see [Appendix - Return Codes](https://ads.tiktok.com/marketing_api/docs?id=1737172488964097).|
|message |string | Response message. For details, see [Appendix - Return Codes](https://ads.tiktok.com/marketing_api/docs?id=1737172488964097).|
|data |object| Returned data. |
| ↳ download_url | string | The URL to download the file, valid for 1 hour. You can use the [/report/task/download/](https://ads.tiktok.com/marketing_api/docs?id=1740302808815618) endpoint to query a new URL if the previous URL has expired. |
| ↳ file_name | string | The name of the downloaded file. |
| ↳ output_format | string | Format of output. Enum values: `CSV_DOWNLOAD`, `XLSX_DOWNLOAD`. |
|request_id|string|The log ID of the request, which uniquely identifies a request. |



#### Example
File stream response:

```xcodeblock
(code Success-Response http)
Campaign ID,Campaign Name,Ad Group ID,Ad Group Name,Age,Gender,Cost,Impression,Click
482,Test Campaign 1,578,Test Ad Group 1,13-17,female,107.56,29056,280
482,Test Campaign 1,578,Test Ad Group 1,18-24,female,101.74,22992,203
482,Test Campaign 1,578,Test Ad Group 1,13-17,male,58.78,17063,126
482,Test Campaign 1,578,Test Ad Group 1,18-24,male,57.36,18467,115
622,Test Campaign 2,765,Test Ad Group 2,18-24,male,32.9,267635,1172
482,Test Campaign 1,578,Test Ad Group 1,25-34,female,25.97,8143,105
810,Test Campaign 3,746,Test Ad Group 3,35-44,female,20.31,119359,3214
···
(/code)
```
JSON response:
```xcodeblock
(code Success-Response http)
{
    "code": 0,
    "message": "OK",
    "request_id": "202207282320310102452431071406594F",
    "data": {
        "output_format": "XLSX_DOWNLOAD",
        "file_name": "test_file_name_07_26.xlsx",
        "download_url": "https://ads.tiktok.com/wsos_v2/statistics/object/wsos62e082e99504cb02?expire=1659054031&skipCookie=true&timeStamp=1659050431&sign=1ccc8bd4665a65a941b168652ccd392707798a1dcb9f1eec2229123aca5a0bff"
    }
}
(/code)
```

