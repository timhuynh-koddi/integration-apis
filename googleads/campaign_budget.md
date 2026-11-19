# Campaign Budget

> Source: Google Ads API v26 REST Discovery document (https://googleads.googleapis.com/$discovery/rest?version=v26) and Shopping ads guide (https://developers.google.com/google-ads/api/docs/shopping-ads/overview). Fetched 2026-11-19.

Resource schema: `CampaignBudget`. Read data via `GoogleAdsService.Search`/`SearchStream` (see google_ads_service.md).

---

## customers.campaignBudgets.mutate

`POST https://googleads.googleapis.com/v26/customers/{+customerId}/campaignBudgets:mutate`

Creates, updates, or removes campaign budgets. Operation statuses are returned. List of thrown errors: AuthenticationError AuthorizationError CampaignBudgetError DatabaseError DistinctError FieldError FieldMaskError HeaderError InternalError MutateError NewResourceCreationError OperationAccessDeniedError QuotaError RangeError RequestError ResourceCountLimitExceededError StringLengthError

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| customerId | path | string | yes | Required. The ID of the customer whose campaign budgets are being modified. |

**Request body**: `MutateCampaignBudgetsRequest`

**Response**: `MutateCampaignBudgetsResponse`

---

## Schemas

### `CampaignBudget`

A campaign budget.

| Field | Type | Description |
|---|---|---|
| referenceCount | string (int64) | Output only. The number of campaigns actively using the budget. This field is read-only. |
| alignedBiddingStrategyId | string (int64) | ID of the portfolio bidding strategy that this shared campaign budget is aligned with. When a bidding strategy and a campaign budget are aligned, they are attached to the same set of campaigns. After a campaign budget is aligned with a bidding strategy, campaigns that are added to the campaign budget must also use the aligned bidding strategy. |
| recommendedBudgetEstimatedChangeWeeklyCostMicros | string (int64) | Output only. The estimated change in weekly cost in micros if the recommended budget is applied. One million is equivalent to one currency unit. This field is read-only. |
| status | string enum(UNSPECIFIED, UNKNOWN, ENABLED, REMOVED) | Output only. The status of this campaign budget. This field is read-only. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; ENABLED - Budget is enabled.; REMOVED - Budget is removed. |
| resourceName | string | Immutable. The resource name of the campaign budget. Campaign budget resource names have the form: `customers/{customer_id}/campaignBudgets/{campaign_budget_id}` |
| id | string (int64) | Output only. The ID of the campaign budget. A campaign budget is created using the CampaignBudgetService create operation and is assigned a budget ID. A budget ID can be shared across different campaigns; the system will then allocate the campaign budget among different campaigns to get optimum results. |
| type | string enum(UNSPECIFIED, UNKNOWN, STANDARD, FIXED_CPA, SMART_CAMPAIGN, LOCAL_SERVICES) | Immutable. The type of the campaign budget. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; STANDARD - Budget type for standard Google Ads usage. Caps daily spend at two times the specified budget amount. Full details: https://support.google.com/google-ads/answer/6385083; FIXED_CPA - Budget type with a fixed cost-per-acquisition (conversion). Full details: https://support.google.com/google-ads/answer/7528254 This type is only supported by campaigns with AdvertisingChannelType.DISPLAY (excluding AdvertisingChannelSubType.DISPLAY_GMAIL), BiddingStrategyType.TARGET_CPA and PaymentMode.CONVERSIONS.; SMART_CAMPAIGN - Budget type for Smart Campaign. Full details: https://support.google.com/google-ads/answer/7653509 This type is only supported by campaigns with AdvertisingChannelType.SMART and AdvertisingChannelSubType.SMART_CAMPAIGN.; LOCAL_SERVICES - Budget type for Local Services Campaign. Full details: https://support.google.com/localservices/answer/7434558 This type is only supported by campaigns with AdvertisingChannelType.LOCAL_SERVICES. |
| budgetNetworkSettings | `BudgetNetworkSettings` | Waterfall channel priorities and budget caps for this budget, at most one entry per advertising channel type. When unset, the customer-level defaults in `CustomerBudgetNetworkSetting` apply. |
| period | string enum(UNSPECIFIED, UNKNOWN, DAILY, CUSTOM_PERIOD) | Immutable. Period over which to spend the budget. Defaults to DAILY if not specified. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; DAILY - Daily budget.; CUSTOM_PERIOD - Custom budget, added back in V5. Custom budget can be used with total_amount to specify lifetime budget limit. See: https://support.google.com/google-ads/answer/6385083 for more info. |
| recommendedBudgetAmountMicros | string (int64) | Output only. The recommended budget amount. If no recommendation is available, this will be set to the budget amount. Amount is specified in micros, where one million is equivalent to one currency unit. This field is read-only. |
| hasRecommendedBudget | boolean | Output only. Indicates whether there is a recommended budget for this campaign budget. This field is read-only. |
| name | string | The name of the campaign budget. When creating a campaign budget through CampaignBudgetService, every explicitly shared campaign budget must have a non-null, non-empty name. Campaign budgets that are not explicitly shared derive their name from the attached campaign's name. The length of this string must be between 1 and 255, inclusive, in UTF-8 bytes, (trimmed). |
| amountMicros | string (int64) | The average daily amount to be spent by the campaign. This field is used when the CampaignBudget `period` is set to `DAILY`, which is the default. Amount is specified in micros in the account's local currency. One million micros is equivalent to one currency unit. The effective monthly spend is capped at 30.4 times this daily amount. This field is mutually exclusive with 'total_amount_micros'. Only one of 'amount_micros' or 'total_amount_micros' should be set. |
| deliveryMethod | string enum(UNSPECIFIED, UNKNOWN, STANDARD, ACCELERATED) | The delivery method that determines the rate at which the campaign budget is spent. Defaults to STANDARD if unspecified in a create operation. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; STANDARD - The budget server will throttle serving evenly across the entire time period.; ACCELERATED - The budget server will not throttle serving, and ads will serve as fast as possible. |
| recommendedBudgetEstimatedChangeWeeklyViews | string (int64) | Output only. The estimated change in weekly views if the recommended budget is applied. This field is read-only. |
| recommendedBudgetEstimatedChangeWeeklyClicks | string (int64) | Output only. The estimated change in weekly clicks if the recommended budget is applied. This field is read-only. |
| totalAmountMicros | string (int64) | The total amount to be spent by the campaign over its entire duration. This field is used *only* when the CampaignBudget `period` is set to `CUSTOM_PERIOD`. It represents the budget cap for the campaign's lifetime, rather than a daily limit. The amount is specified in micros in the account's local currency. One million micros is equivalent to one currency unit. This field is mutually exclusive with 'amount_micros'. Only one of 'total_amount_micros' or 'amount_micros' should be set. |
| budgetNetworkEligibility | `BudgetNetworkEligibility` | Output only. Whether this budget is eligible for waterfall channel prioritization and budget caps, and if not, why. |
| explicitlyShared | boolean | Specifies whether the budget is explicitly shared. Defaults to true if unspecified in a create operation. If true, the budget was created with the purpose of sharing across one or more campaigns. If false, the budget was created with the intention of only being used with a single campaign. The budget's name and status will stay in sync with the campaign's name and status. Attempting to share the budget with a second campaign will result in an error. A non-shared budget can become an explicitly shared. The same operation must also assign the budget a name. A shared campaign budget can never become non-shared. |
| recommendedBudgetEstimatedChangeWeeklyInteractions | string (int64) | Output only. The estimated change in weekly interactions if the recommended budget is applied. This field is read-only. |

### `MutateCampaignBudgetsRequest`

Request message for CampaignBudgetService.MutateCampaignBudgets. Update operations in `operations` require an `update_mask` specifying the fields to modify. Note that `explicitly_shared` defaults to `true` if unspecified. A non-shared budget can be updated to explicitly shared, but an explicitly shared budget cannot become non-shared.

| Field | Type | Description |
|---|---|---|
| responseContentType | string enum(UNSPECIFIED, RESOURCE_NAME_ONLY, MUTABLE_RESOURCE) | The response content type setting. Determines whether the mutable resource or just the resource name should be returned post mutation. Values: UNSPECIFIED - Not specified. Will return the resource name only in the response.; RESOURCE_NAME_ONLY - The mutate response will be the resource name.; MUTABLE_RESOURCE - The mutate response will contain the resource name and the resource with mutable fields if possible. Otherwise, only the resource name will be returned. |
| validateOnly | boolean | If true, the request is validated but not executed. Only errors are returned, not results. |
| operations | array<`CampaignBudgetOperation`> | Required. The list of operations to perform on individual campaign budgets. |
| partialFailure | boolean | If true, successful operations will be carried out and invalid operations will return errors. If false, all operations will be carried out in one transaction if and only if they are all valid. Default is false. |

### `MutateCampaignBudgetsResponse`

Response message for campaign budget mutate.

| Field | Type | Description |
|---|---|---|
| partialFailureError | `GoogleRpc__Status` | Errors that pertain to operation failures in the partial failure mode. Returned only when partial_failure = true and all errors occur inside the operations. If any errors occur outside the operations (for example, auth errors), we return an RPC level error. |
| results | array<`MutateCampaignBudgetResult`> | All results for the mutate. |

### `BudgetNetworkEligibility`

Read-only eligibility status and reasons for budget network allocation on a CampaignBudget.

| Field | Type | Description |
|---|---|---|
| eligible | boolean | Output only. True if the budget is eligible for waterfall and budget cap allocation. |
| ineligibleReasons | array<string enum(UNSPECIFIED, UNKNOWN, UNSUPPORTED_BIDDING_STRATEGY, MIXED_CAMPAIGN_TYPES, HAS_ENABLED_TRIALS, UNSUPPORTED_BUDGET_PERIOD, MIXED_BIDDING_STRATEGIES, INSUFFICIENT_ELIGIBLE_CHANNELS)> | Output only. Reasons why the budget is ineligible, if eligible is false. |

### `BudgetNetworkSettings`

Container for budget network settings (waterfall channel prioritization and budget allocation).

| Field | Type | Description |
|---|---|---|
| settings | array<`BudgetNetworkSetting`> | List of network allocation settings per advertising channel type. Each advertising channel type can appear at most once in this list. |

### `CampaignBudgetOperation`

A single operation (create, update, remove) on a campaign budget. Update operations require an `update_mask` specifying which fields to modify. Note that `explicitly_shared` defaults to `true` if unspecified. A non-shared budget can be updated to explicitly shared, but an explicitly shared budget cannot become non-shared.

| Field | Type | Description |
|---|---|---|
| update | `CampaignBudget` | Update operation: The campaign budget is expected to have a valid resource name, and `update_mask` must be populated with the fields to modify. Note that `explicitly_shared` defaults to `true` if unspecified. A non-shared budget can be updated to explicitly shared, but an explicitly shared budget cannot become non-shared. |
| remove | string | Remove operation: A resource name for the removed budget is expected, in this format: `customers/{customer_id}/campaignBudgets/{budget_id}` |
| updateMask | string (google-fieldmask) | FieldMask that determines which resource fields are modified in an update. Required for `update` operations. |
| create | `CampaignBudget` | Create operation: No resource name is expected for the new budget. Note that `explicitly_shared` defaults to `true` if unspecified. A non-shared budget can be updated to explicitly shared, but an explicitly shared budget cannot become non-shared. |

### `MutateCampaignBudgetResult`

The result for the campaign budget mutate.

| Field | Type | Description |
|---|---|---|
| campaignBudget | `CampaignBudget` | The mutated campaign budget with only mutable fields after mutate. The field will only be returned when response_content_type is set to "MUTABLE_RESOURCE". |
| resourceName | string | Returned for successful operations. |

### `GoogleRpc__Status`

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

| Field | Type | Description |
|---|---|---|
| details | array<map<string, any>> | A list of messages that carry the error details. There is a common set of message types for APIs to use. |
| message | string | A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. |
| code | integer (int32) | The status code, which should be an enum value of google.rpc.Code. |

### `BudgetNetworkSetting`

Budget allocation setting for a specific advertising channel type (e.g., SEARCH, SHOPPING, PERFORMANCE_MAX, or DEMAND_GEN).

| Field | Type | Description |
|---|---|---|
| advertisingChannelType | string enum(UNSPECIFIED, UNKNOWN, SEARCH, DISPLAY, SHOPPING, HOTEL, VIDEO, MULTI_CHANNEL, LOCAL, SMART, PERFORMANCE_MAX, LOCAL_SERVICES, TRAVEL, DEMAND_GEN) | The advertising channel type this setting applies to (e.g., SEARCH, SHOPPING, PERFORMANCE_MAX, or DEMAND_GEN). Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; SEARCH - Search Network. Includes display bundled, and Search+ campaigns.; DISPLAY - Google Display Network only.; SHOPPING - Shopping campaigns serve on the shopping property and on google.com search results.; HOTEL - Hotel Ads campaigns.; VIDEO - Video campaigns.; MULTI_CHANNEL - App Campaigns, and App Campaigns for Engagement, that run across multiple channels.; LOCAL - Local ads campaigns.; SMART - Smart campaigns.; PERFORMANCE_MAX - Performance Max campaigns.; LOCAL_SERVICES - Local services campaigns.; TRAVEL - Travel campaigns.; DEMAND_GEN - Demand Gen campaigns. |
| channelPriorities | array<`ChannelPriorityConfig`> | Waterfall priority tiers per network channel. |
| budgetCaps | array<`BudgetCapConfig`> | Budget caps restricting spend per secondary network channel. Caps can only be applied to channels assigned to secondary priority tiers, and each network channel can appear at most once in this list. |

### `BudgetCapConfig`

Configures a maximum percentage of the total budget that a network channel can spend.

| Field | Type | Description |
|---|---|---|
| capPercentMillis | string (int64) | The maximum percentage of the total budget that this network channel can spend, specified in milli-percent units (for example, 100,000 = 100%, 50,000 = 50%, and 1,000 = 1%). Valid range is 0 to 100,000, where 0 represents a complete 0% opt-out. |
| networkChannel | string enum(UNSPECIFIED, UNKNOWN, OWNED_AND_OPERATED, SEARCH_PARTNER, GOOGLE_DISPLAY) | The network channel being capped. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; OWNED_AND_OPERATED - Google Owned and Operated properties (e.g., Search, YouTube, Discover).; SEARCH_PARTNER - Search Partner Network.; GOOGLE_DISPLAY - Google Display Network. |

### `ChannelPriorityConfig`

Configures which network channels belong to a priority tier.

| Field | Type | Description |
|---|---|---|
| priorityTier | string enum(UNSPECIFIED, UNKNOWN, TIER1, TIER2) | The priority tier (e.g., TIER1, TIER2). Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; TIER1 - Primary priority tier (allocated first before lower tiers).; TIER2 - Secondary priority tier (allocated remaining budget after Tier 1). |
| networkChannels | array<string enum(UNSPECIFIED, UNKNOWN, OWNED_AND_OPERATED, SEARCH_PARTNER, GOOGLE_DISPLAY)> | The network channels assigned to this priority tier. |

