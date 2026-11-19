# Google Ads Service (search / searchStream / mutate)

> Source: Google Ads API v26 REST Discovery document (https://googleads.googleapis.com/$discovery/rest?version=v26) and Shopping ads guide (https://developers.google.com/google-ads/api/docs/shopping-ads/overview). Fetched 2026-11-19.

GAQL queries return `GoogleAdsRow`, which has one field per resource (campaign, ad_group, shopping_performance_view, ...); its fields are omitted here. Resource schemas are in the per-resource files.

---

## customers.googleAds.search

`POST https://googleads.googleapis.com/v26/customers/{+customerId}/googleAds:search`

Returns all rows that match the search query. Uses pagination (`next_page_token`) with up to 10,000 rows per page. For result sets larger than 10,000 rows, prefer GoogleAdsService.SearchStream. To build and validate queries, use the [Google Ads Query Builder](https://developers.google.com/google-ads/api/fields/latest/overview_query_builder). List of thrown errors: AuthenticationError AuthorizationError ChangeEventError ChangeStatusError ClickViewError HeaderError InternalError QueryError QuotaError RequestError

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| customerId | path | string | yes | Required. The ID of the customer being queried. |

**Request body**: `SearchGoogleAdsRequest`

**Response**: `SearchGoogleAdsResponse`

---

## customers.googleAds.searchStream

`POST https://googleads.googleapis.com/v26/customers/{+customerId}/googleAds:searchStream`

Returns all rows that match the search stream query. Streams batches of rows over a single connection without pagination overhead, making it preferred over GoogleAdsService.Search for large result sets (> 10,000 rows). To build and validate queries, use the [Google Ads Query Builder](https://developers.google.com/google-ads/api/fields/latest/overview_query_builder). List of thrown errors: AuthenticationError AuthorizationError ChangeEventError ChangeStatusError ClickViewError HeaderError InternalError QueryError QuotaError RequestError

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| customerId | path | string | yes | Required. The ID of the customer being queried. |

**Request body**: `SearchGoogleAdsStreamRequest`

**Response**: `SearchGoogleAdsStreamResponse`

---

## customers.googleAds.mutate

`POST https://googleads.googleapis.com/v26/customers/{+customerId}/googleAds:mutate`

Executes mutate and actions operations. Mutate operations create, update, or remove resources. Actions perform custom operations. This method supports atomic transactions with multiple types of resources and actions. For example, you can atomically create a campaign and a campaign budget, or perform up to thousands of mutates atomically. This method is essentially a wrapper around a series of mutate methods. The only features it offers over calling those methods directly are: - Atomic transactions - Temp resource names (described below) - Somewhat reduced latency over making a series of mutate calls Note: Only resources that support atomic transactions are included, so this method can't replace all calls to individual services. ## Atomic Transaction Benefits Atomicity makes error handling much easier. If you're making a series of changes and one fails, it can leave your account in an inconsistent state. With atomicity, you either reach the chosen state directly, or the request fails and you can retry. ## Temp Resource Names Temp resource names are a special type of resource name used to create a resource and reference that resource in the same request. For example, if a campaign budget is created with `resource_name` equal to `customers/123/campaignBudgets/-1`, that resource name can be reused in the `Campaign.budget` field in the same request. That way, the two resources are created and linked atomically. To create a temp resource name, put a negative number in the part of the name that the server would normally allocate. Note: - Resources must be created with a temp name before the name can be reused. For example, the previous CampaignBudget+Campaign example would fail if the mutate order was reversed. - Temp names are not remembered across requests. - There's no limit to the number of temp names in a request. - Each temp name must use a unique negative number, even if the resource types differ. ## Latency It's important to group mutates by resource type or the request may time out and fail. Latency is roughly equal to a series of calls to individual mutate methods, where each change in resource type is a new call. For example, mutating 10 campaigns then 10 ad groups is like 2 calls, while mutating 1 campaign, 1 ad group, 1 campaign, 1 ad group is like 4 calls. List of thrown errors: AdCustomizerError AdError AdGroupAdError AdGroupCriterionError AdGroupError AssetError AuthenticationError AuthorizationError BiddingError CampaignBudgetError CampaignCriterionError CampaignError CampaignExperimentError CampaignSharedSetError CollectionSizeError ContextError ConversionActionError CriterionError CustomerFeedError DatabaseError DateError DateRangeError DistinctError ExtensionFeedItemError ExtensionSettingError FeedAttributeReferenceError FeedError FeedItemError FeedItemSetError FieldError FieldMaskError FunctionParsingError HeaderError ImageError InternalError KeywordPlanAdGroupKeywordError KeywordPlanCampaignError KeywordPlanError LabelError ListOperationError MediaUploadError MutateError NewResourceCreationError NullError OperationAccessDeniedError PolicyFindingError PolicyViolationError QuotaError RangeError RequestError ResourceCountLimitExceededError SettingError SharedSetError SizeLimitError StringFormatError StringLengthError UrlFieldError UserListError YoutubeVideoRegistrationError

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| customerId | path | string | yes | Required. The ID of the customer whose resources are being modified. |

**Request body**: `MutateGoogleAdsRequest`

**Response**: `MutateGoogleAdsResponse`

---

## Schemas

### `SearchGoogleAdsRequest`

Request message for GoogleAdsService.Search.

| Field | Type | Description |
|---|---|---|
| searchSettings | `SearchSettings` | Settings that allow users to specify request count, summary row, and results behavior. |
| query | string | Required. The query string. |
| pageToken | string | Token of the page to retrieve. If not specified, the first page of results will be returned. Use the value obtained from `next_page_token` in the previous response in order to request the next page of results. |
| validateOnly | boolean | If true, the request is validated but not executed. |
| pageSize | integer (int32) | This field is deprecated and will be removed in a future version of the API. Google Ads API returns a `PAGE_SIZE_NOT_SUPPORTED` error if this field is set in the request body. |

### `SearchGoogleAdsResponse`

Response message for GoogleAdsService.Search.

| Field | Type | Description |
|---|---|---|
| queryResourceConsumption | string (int64) | The amount of resources consumed to serve the query. |
| totalResultsCount | string (int64) | Total number of results that match the query ignoring the LIMIT clause. |
| summaryRow | `GoogleAdsRow` | Summary row that contains summary of metrics in results. Summary of metrics means aggregation of metrics across all results, here aggregation could be sum, average, rate, etc. |
| results | array<`GoogleAdsRow`> | The list of rows that matched the query. |
| nextPageToken | string | Pagination token used to retrieve the next page of results. Pass the content of this string as the `page_token` attribute of the next request. `next_page_token` is not returned for the last page. |
| fieldMask | string (google-fieldmask) | FieldMask that represents what fields were requested by the user. |
| metricAttributes | array<`MetricAttributes`> | The metric attributes of the metrics in the results. |

### `SearchGoogleAdsStreamRequest`

Request message for GoogleAdsService.SearchStream.

| Field | Type | Description |
|---|---|---|
| query | string | Required. The query string. |
| summaryRowSetting | string enum(UNSPECIFIED, UNKNOWN, NO_SUMMARY_ROW, SUMMARY_ROW_WITH_RESULTS, SUMMARY_ROW_ONLY) | Determines whether a summary row will be returned. By default, summary row is not returned. If requested, the summary row will be sent in a response by itself after all other query results are returned. Values: UNSPECIFIED - Not specified.; UNKNOWN - Represent unknown values of return summary row.; NO_SUMMARY_ROW - Do not return summary row.; SUMMARY_ROW_WITH_RESULTS - Return summary row along with results. The summary row will be returned in the last batch alone (last batch will contain no results).; SUMMARY_ROW_ONLY - Return summary row only and return no results. |

### `SearchGoogleAdsStreamResponse`

Response message for GoogleAdsService.SearchStream.

| Field | Type | Description |
|---|---|---|
| queryResourceConsumption | string (int64) | The amount of resources consumed to serve the query. query_resource_consumption for the Summary row and non-Summary responses are returned separately in their respective rows. query_resource_consumption for non-Summary responses is returned in the final batch of results. |
| fieldMask | string (google-fieldmask) | FieldMask that represents what fields were requested by the user. |
| summaryRow | `GoogleAdsRow` | Summary row that contains summary of metrics in results. Summary of metrics means aggregation of metrics across all results, here aggregation could be sum, average, rate, etc. |
| requestId | string | The unique id of the request that is used for debugging purposes. |
| metricAttributes | array<`MetricAttributes`> | The metric attributes of the metrics in the results. |
| results | array<`GoogleAdsRow`> | The list of rows that matched the query. |

### `MutateGoogleAdsRequest`

Request message for GoogleAdsService.Mutate.

| Field | Type | Description |
|---|---|---|
| mutateOperations | array<`MutateOperation`> | Required. The list of operations to perform on individual resources. |
| validateOnly | boolean | If true, the request is validated but not executed. Mutates only return errors, not results. Actions return results and errors. |
| responseContentType | string enum(UNSPECIFIED, RESOURCE_NAME_ONLY, MUTABLE_RESOURCE) | The response content type setting. Determines whether the mutable resource or just the resource name should be returned post mutation. The mutable resource will only be returned if the resource has the appropriate response field. For example, MutateCampaignResult.campaign. Values: UNSPECIFIED - Not specified. Will return the resource name only in the response.; RESOURCE_NAME_ONLY - The mutate response will be the resource name.; MUTABLE_RESOURCE - The mutate response will contain the resource name and the resource with mutable fields if possible. Otherwise, only the resource name will be returned. |
| partialFailure | boolean | If true, successful operations will be carried out and invalid operations will return errors. If false, all operations will be carried out in one transaction if and only if they are all valid. Default is false. |

### `MutateGoogleAdsResponse`

Response message for GoogleAdsService.Mutate.

| Field | Type | Description |
|---|---|---|
| mutateOperationResponses | array<`MutateOperationResponse`> | All responses for the mutate. |
| partialFailureError | `GoogleRpc__Status` | Errors that pertain to operation failures in the partial failure mode. Returned only when partial_failure = true and all errors occur inside the operations. If any errors occur outside the operations (for example, auth errors), we return an RPC level error. |

### `SearchSettings`

Indicates search settings in request parameter.

| Field | Type | Description |
|---|---|---|
| returnTotalResultsCount | boolean | If true, the total number of results that match the query ignoring the LIMIT clause will be included in the response. Default is false. |
| omitResults | boolean | If true, results will be excluded from the response. Otherwise, results will be returned. Default is false. |
| returnSummaryRow | boolean | If true, summary row will be included in the response and sent in a response by itself after all other query results are returned. Default is false. |

### `GoogleAdsRow`

A returned row from the query.

_(fields omitted; see the Google reference)_

### `MetricAttributes`

Indicates the attributes of metrics.

| Field | Type | Description |
|---|---|---|
| name | string | The name of the metric. |
| attributes | array<`MetricAttributes_Attribute`> | The attributes of the metric. |

### `MutateOperation`

A single operation (create, update, remove) on a resource, or execute an action.

_(fields omitted; see the Google reference)_

### `MutateOperationResponse`

Response message for the resource mutate or action.

_(fields omitted; see the Google reference)_

### `GoogleRpc__Status`

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

| Field | Type | Description |
|---|---|---|
| details | array<map<string, any>> | A list of messages that carry the error details. There is a common set of message types for APIs to use. |
| message | string | A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. |
| code | integer (int32) | The status code, which should be an enum value of google.rpc.Code. |

### `MetricAttributes_Attribute`

The attribute of the metric in key value pair format.

| Field | Type | Description |
|---|---|---|
| key | string | The key of the attribute. |
| value | string | The value of the attribute. |

