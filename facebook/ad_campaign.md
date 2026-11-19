# Ad Campaign

> Source: Meta Marketing API reference (11 pages). Fetched 2026-11-18.


---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group.md -->

## Ad Campaign Group

A campaign is the highest level organizational structure within an ad account and should represent a single objective for an advertiser, for example, to drive page post engagement. Setting objective of the campaign will enforce validation on any ads added to the campaign to ensure they also have the correct objective.

**Warning:** The `date_preset = lifetime` parameter is disabled in Graph API v10.0 and replaced with `date_preset = maximum`, which returns a maximum of 37 months of data. For v9.0 and below, `date_preset = maximum` will be enabled on May 25, 2021, and any `lifetime` calls will default to `maximum` and return only 37 months of data.

#### Limits

- You can only create 200 ad sets per ad campaign. [Learn more about the ad campaign structure](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group).
- If your campaign has more than 70 ad sets and uses [Campaign Budget Optimization](https://developers.facebook.com/docs/marketing-api/bidding/guides/campaign-budget-optimization), you are not able to edit your current bid strategy or turn off CBO. [Learn more in the Business Help Center](https://www.facebook.com/business/help/519856662172206).

#### New Required Field for All Campaigns

All businesses using the Marketing API must identify whether or not new and edited campaigns belong to a [Special Ad Category](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/special-ad-category). Current available categories are: [housing, employment, credit](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/special-ad-category#context), or issues, elections, and politics. Businesses whose ads do not belong to a Special Ad Category must indicate NONE or send an empty array in the `special_ad_categories` field.

Businesses running **housing**, **employment**, or **credit** ads must comply with [targeting and audience restrictions](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/targeting-restrictions). Targeting for ads about social issues, elections or politics are not affected by the `special_ad_categories` label.

**Warning:** As of **Marketing API 7.0**, the `special_ad_category` parameter on the [`POST /act_<ad_account_id>/campaigns`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/campaigns#Creating) endpoint has been deprecated and replaced with a new `special_ad_categories` parameter. The new `special_ad_categories` parameter is required and accepts an array.

If you use the `special_ad_category` parameter, it will still return a string, but you should use `GET /{campaign-id}?fields=special_ad_categories` to get an array back. Refer  to [Special Ad Category](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/special-ad-category) for additional information.

### Reading

A campaign is a grouping of ad sets which are organized by the same business objective. Each campaign has an objective that must be valid across the ad sets within that campaign.

After your ads begin delivering, you can query stats for ad campaigns. The statistics returned will be unique stats, deduped across the ad sets. You can also get reports and statistics for all ad sets and ads in an campaign simultaneously.

##### Example

#### HTTP
```
GET v25.0/...?fields={fieldname_of_type_Campaign} HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '...?fields={fieldname_of_type_Campaign}',
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
    "...?fields={fieldname_of_type_Campaign}",
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
    "...?fields={fieldname_of_type_Campaign}",
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
                               initWithGraphPath:@"...?fields={fieldname_of_type_Campaign}"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=...%3Ffields%3D%257Bfieldname_of_type_Campaign%257D&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `date_preset`<br><br>*enum{today, yesterday, this_month, last_month, this_quarter, maximum, data_maximum, last_3d, last_7d, last_14d, last_28d, last_30d, last_90d, last_week_mon_sun, last_week_sun_sat, last_quarter, last_year, this_week_mon_today, this_week_sun_today, this_year}* | Date Preset<br> |
| `time_range`<br><br>*{'since':YYYY-MM-DD,'until':YYYY-MM-DD}* | Time Range. Note if time range is invalid, it will be ignored.<br><br><br>`since` *datetime*<br>A date in the format of "YYYY-MM-DD", which means from the beginning midnight of that day.<br><br><br>`until` *datetime*<br>A date in the format of "YYYY-MM-DD", which means to the beginning midnight of the following day.<br> |

##### Fields

| Field | Description |
| --- | --- |
| `id`<br><br>*numeric string* | Campaign's ID<br><br><br>**[default]**<br> |
| `account_id`<br><br>*numeric string* | ID of the ad account that owns this campaign<br> |
| `adlabels`<br><br>*[list<AdLabel>](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label)* | Ad Labels associated with this campaign<br> |
| `bid_strategy` This field is only accessible in v3.0 or later.<br><br>*enum {LOWEST_COST_WITHOUT_CAP, LOWEST_COST_WITH_BID_CAP, COST_CAP, LOWEST_COST_WITH_MIN_ROAS}* | Bid strategy for this campaign when you enable campaign budget optimization and<br>when you use `AUCTION` as your buying type:<br><br>`LOWEST_COST_WITHOUT_CAP`: Designed to get the most results for your budget based on<br>your ad set `optimization_goal` without limiting your bid amount. This is the best strategy to select<br>if you care most about cost efficiency. However, note that it may be harder to get<br>stable average costs as you spend. Note: this strategy is also known as<br>*automatic bidding*.<br>Learn more in [Ads Help Center, About bid strategies: Lowest cost](https://www.facebook.com/business/help/721453268045071).<br><br>`LOWEST_COST_WITH_BID_CAP`: Designed to get the most results for your budget based on<br>your ad set `optimization_goal` while limiting actual bid to a specified amount.<br>Get specified bid cap in the `bid_amount` field for each ad set in this ad campaign.<br>This strategy is known as *manual maximum-cost bidding*.<br>Learn more in [Ads Help Center, About bid strategies: Lowest cost](https://www.facebook.com/business/help/721453268045071).<br><br>`COST_CAP`: Designed to get the most results for your budget based on<br>your ad set `optimization_goal` while limiting actual average cost per optimization event to a specified amount.<br>Get specified cost cap in the `bid_amount` field for each ad set in this ad campaign.<br>Learn more in [Ads Help Center, About bid strategies: Cost Cap](https://www.facebook.com/business/help/272336376749096?id=2196356200683573).<br>Notes:<br><br><br>• If you do not enable campaign budget optimization, you should get `bid_strategy` at the ad set level.<br>• `TARGET_COST` bidding strategy has been deprecated with [Marketing API v9](https://developers.facebook.com/docs/graph-api/changelog/version9.0).<br> |
| `boosted_object_id`<br><br>*numeric string* | The Boosted Object this campaign has associated, if any<br> |
| `brand_lift_studies`<br><br>*[list<AdStudy>](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-study)* | Automated Brand Lift V2 studies for this ad set.<br> |
| `budget_rebalance_flag`<br><br>*bool* | Whether to automatically rebalance budgets daily for all the adsets under this campaign. [This has been deprecated on Marketing API V7.0](https://developers.facebook.com/docs/graph-api/changelog/version7.0#deprecations).<br> |
| `budget_remaining`<br><br>*numeric string* | Remaining budget<br> |
| `buying_type`<br><br>*string* | Buying type, possible values are: <br>`AUCTION`: default<br>`RESERVED`: for [reach and frequency ads](https://developers.facebook.com/docs/marketing-api/reachandfrequency)<br>[Reach and Frequency](https://developers.facebook.com/docs/marketing-api/reachandfrequency) is disabled for [housing, employment and credit ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/special-ad-category).<br> |
| `campaign_group_active_time`<br><br>*numeric string* | campaign_group_active_time this is only for Internal, This will have the active running length of Campaign Groups<br> |
| `can_create_brand_lift_study`<br><br>*bool* | If we can create a new automated brand lift study for the ad set.<br> |
| `can_use_spend_cap`<br><br>*bool* | Whether the campaign can set the spend cap<br> |
| `configured_status`<br><br>*enum {ACTIVE, PAUSED, DELETED, ARCHIVED}* | If this status is `PAUSED`, all its active ad sets and ads will<br>be paused and have an effective status `CAMPAIGN_PAUSED`. Prefer<br>using 'status' instead of this.<br> |
| `created_time`<br><br>*datetime* | Created Time<br> |
| `daily_budget`<br><br>*numeric string* | The daily budget of the campaign<br> |
| `effective_status`<br><br>*enum {ACTIVE, PAUSED, DELETED, ARCHIVED, IN_PROCESS, WITH_ISSUES}* | IN_PROCESS is available for version 4.0 or higher<br> |
| `has_secondary_skadnetwork_reporting`<br><br>*bool* | has_secondary_skadnetwork_reporting<br> |
| `is_adset_budget_sharing_enabled`<br><br>*bool* | Whether the child ad sets are managed under ad set budget sharing<br> |
| `is_budget_schedule_enabled`<br><br>*bool* | Whether budget scheduling is enabled for the campaign group<br> |
| `is_reels_trending_ads_enabled`<br><br>*bool* | is_reels_trending_ads_enabled<br> |
| `is_skadnetwork_attribution`<br><br>*bool* | When set to `true` Indicates that the campaign will include SKAdNetwork, iOS 14+.<br> |
| `issues_info` This field is only accessible in v3.2 or later.<br><br>*[list<AdCampaignIssuesInfo>](https://developers.facebook.com/docs/marketing-api/reference/ad-campaign-issues-info)* | Issues for this campaign that prevented it from deliverying<br> |
| `last_budget_toggling_time`<br><br>*datetime* | Last budget toggling time<br> |
| `lifetime_budget`<br><br>*numeric string* | The lifetime budget of the campaign<br> |
| `name`<br><br>*string* | Campaign's name<br> |
| `objective`<br><br>*string* | Campaign's objective<br><br><br>See the [Outcome Ad-Driven Experience Objective Validation](#odax) section below for more information.<br> |
| `pacing_type`<br><br>*list<string>* | Defines pacing type of the campaign. The value is an array of options:  "standard".<br> |
| `primary_attribution`<br><br>*enum* | primary_attribution<br> |
| `promoted_object`<br><br>*[AdPromotedObject](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-promoted-object)* | The object this campaign is promoting across all its ads<br> |
| `smart_promotion_type`<br><br>*enum* | Smart Promotion Type. guided_creation or smart_app_promotion(the choice under APP_INSTALLS objective).<br> |
| `source_campaign`<br><br>*[Campaign](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group)* | The source campaign that this campaign is copied from<br> |
| `source_campaign_id`<br><br>*numeric string* | The source campaign id that this campaign is copied from<br> |
| `special_ad_categories` This field is only accessible in v7.0 or later.<br><br>*list<enum>* | special ad categories<br> |
| `special_ad_category`<br><br>*enum* | The campaign's Special Ad Category. One of `HOUSING`, `EMPLOYMENT`, `CREDIT`, or `NONE`.<br> |
| `special_ad_category_country` This field is only accessible in v7.0 or later.<br><br>*list<enum>* | Country field for  Special Ad Category.<br> |
| `spend_cap`<br><br>*numeric string* | A spend cap for the campaign, such that it will not spend more than this cap. Expressed as integer value of the subunit in your currency.<br> |
| `start_time`<br><br>*datetime* | Merging of `start_time`s for the ad sets belonging to this campaign. At the campaign level, `start_time` is a read only field. You can setup `start_time` at the ad set level.<br> |
| `status`<br><br>*enum {ACTIVE, PAUSED, DELETED, ARCHIVED}* | If this status is `PAUSED`, all its active ad sets and ads will<br>be paused and have an effective status `CAMPAIGN_PAUSED`. The field<br>returns the same value as 'configured_status', and is the suggested<br>one to use.<br> |
| `stop_time`<br><br>*datetime* | Merging of `stop_time`s for the ad sets belonging to this campaign, if available. At the campaign level, `stop_time` is a read only field. You can setup `stop_time` at the ad set level.<br> |
| `topline_id`<br><br>*numeric string* | Topline ID<br> |
| `updated_time`<br><br>*datetime* | Updated Time. If you update `spend_cap` or daily budget or lifetime budget, this will not automatically update this field.<br> |

##### Edges

| Edge | Description |
| --- | --- |
| [`ad_studies`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group/ad_studies)<br><br>*Edge<AdStudy>* | The ad studies containing this campaign<br> |
| [`adrules_governed`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group/adrules_governed)<br><br>*Edge<AdRule>* | Ad rules that govern this campaign - by default, this only returns rules that either directly mention the campaign by id or indirectly through the set entity_type<br> |
| [`ads`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group/ads)<br><br>*Edge<Adgroup>* | Ads under this campaign<br> |
| [`adsets`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group/adsets)<br><br>*Edge<AdCampaign>* | The ad sets under this campaign<br> |
| [`copies`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group/copies)<br><br>*Edge<AdCampaignGroup>* | The copies of this campaign<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 613 | Calls to this api have exceeded the rate limit. |
| 190 | Invalid OAuth 2.0 Access Token |
| 104 | Incorrect signature |
| 2500 | Error parsing graph query |
| 3018 | The start date of the time range cannot be beyond 37 months from the current date |
| 200 | Permissions error |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |

### Creating

#### /act_{ad_account_id}/async_batch_requests
You can make a POST request to *async_batch_requests* edge from the following paths:

- [/act_{ad_account_id}/async_batch_requests](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/async_batch_requests)

When posting to this edge, a [Campaign](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `adbatch`<br><br>*list<Object>* | JSON encoded batch reqeust<br><br>**[required]**<br><br><br>`name` *string*<br>**[required]**<br><br><br>`relative_url` *string*<br>**[required]**<br><br><br>`body` *UTF-8 encoded string*<br>**[required]**<br> |
| `name`<br><br>*UTF-8 encoded string* | Name of the batch request for tracking purposes.<br><br>**[required]**<br> |

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
| 194 | Missing at least one required parameter |
| 100 | Invalid parameter |
| 2500 | Error parsing graph query |

#### /{campaign_id}/copies
You can make a POST request to *copies* edge from the following paths:

- [/{campaign_id}/copies](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group/copies)

When posting to this edge, a [Campaign](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `deep_copy`<br><br>*boolean* | **Default value: **`false`<br>Whether to copy all the child ads. Limits: the total number of children ads to copy should not exceed 3 for a synchronous call and 51 for an asynchronous call.<br> |
| `end_time`<br><br>*datetime* | For deep copy, the end time of the sets under the copied campaign, e.g. `2015-03-12 23:59:59-07:00` or `2015-03-12 23:59:59 PDT`. UTC UNIX timestamp. When creating a set with a daily budget, specify `end_time=0` to set the set to be ongoing without end date. If not set, the copied sets will inherit the end time from the original set<br> |
| `parameter_overrides`<br><br>*Campaign spec* | parameter_overrides<br> |
| `rename_options`<br><br>*JSON or object-like arrays* | Rename options<br><br><br>`rename_strategy` *enum {DEEP_RENAME, ONLY_TOP_LEVEL_RENAME, NO_RENAME}*<br><br>**Default value: **`ONLY_TOP_LEVEL_RENAME`<br>`DEEP_RENAME`: will change this object's name and children's names in the copied object. `ONLY_TOP_LEVEL_RENAME`: will change the this object's name but won't change the children's name in the copied object. `NO_RENAME`: will change no name in the copied object<br><br><br>`rename_prefix` *string*<br>A prefix to copy names. Defaults to null if not provided.<br><br><br>`rename_suffix` *string*<br>A suffix to copy names. Defaults to null if not provided and appends a localized string of `- Copy` based on the ad account locale.<br> |
| `start_time`<br><br>*datetime* | For deep copy, the start time of the sets under the copied campaign, e.g. `2015-03-12 23:59:59-07:00` or `2015-03-12 23:59:59 PDT`. UTC UNIX timestamp. If not set, the copied sets will inherit the start time from the original set<br> |
| `status_option`<br><br>*enum {ACTIVE, PAUSED, INHERITED_FROM_SOURCE}* | **Default value: **`PAUSED`<br>`ACTIVE`: the copied campaign will have active status. `PAUSED`: the copied campaign will have paused status. `INHERITED_FROM_SOURCE`: the copied campaign will have the parent status.<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *copied_campaign_id* in the return type.

```
Struct  {
copied_campaign_id: numeric string,
ad_object_ids:  List  [ Struct  {
ad_object_type: enum {
unique_adcreative,
ad,
ad_set,
campaign,
opportunities,
privacy_info_center,
topline,
ad_account,
product},
source_id: numeric string,
copied_id: numeric string,
}],
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |
| 200 | Permissions error |

#### /act_{ad_account_id}/campaigns
You can make a POST request to *campaigns* edge from the following paths:

- [/act_{ad_account_id}/campaigns](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/campaigns)

When posting to this edge, a [Campaign](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group) will be created.

##### Example

#### HTTP
```
POST /v25.0/act_<AD_ACCOUNT_ID>/campaigns HTTP/1.1
Host: graph.facebook.com

name=My+campaign&objective=OUTCOME_TRAFFIC&status=PAUSED&special_ad_categories=%5B%5D&is_adset_budget_sharing_enabled=0
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->post(
    '/act_<AD_ACCOUNT_ID>/campaigns',
    array (
      'name' => 'My campaign',
      'objective' => 'OUTCOME_TRAFFIC',
      'status' => 'PAUSED',
      'special_ad_categories' => '[]',
      'is_adset_budget_sharing_enabled' => '0',
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
    "/act_<AD_ACCOUNT_ID>/campaigns",
    "POST",
    {
        "name": "My campaign",
        "objective": "OUTCOME_TRAFFIC",
        "status": "PAUSED",
        "special_ad_categories": "[]",
        "is_adset_budget_sharing_enabled": "0"
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
params.putString("name", "My campaign");
params.putString("objective", "OUTCOME_TRAFFIC");
params.putString("status", "PAUSED");
params.putString("special_ad_categories", "[]");
params.putString("is_adset_budget_sharing_enabled", "0");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/act_<AD_ACCOUNT_ID>/campaigns",
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
  @"name": @"My campaign",
  @"objective": @"OUTCOME_TRAFFIC",
  @"status": @"PAUSED",
  @"special_ad_categories": @"[]",
  @"is_adset_budget_sharing_enabled": @"0",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/act_<AD_ACCOUNT_ID>/campaigns"
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
  -F 'name="My campaign"' \
  -F 'objective="OUTCOME_TRAFFIC"' \
  -F 'status="PAUSED"' \
  -F 'special_ad_categories=[]' \
  -F 'is_adset_budget_sharing_enabled=0' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/campaigns
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=POST&path=act_%3CAD_ACCOUNT_ID%3E%2Fcampaigns%3Fname%3DMy%2Bcampaign%26objective%3DOUTCOME_TRAFFIC%26status%3DPAUSED%26special_ad_categories%3D%255B%255D%26is_adset_budget_sharing_enabled%3D0&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `adlabels`<br><br>*list<Object>* | [Ad Labels](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label) associated with this campaign<br> |
| `bid_strategy` This field is only accessible in v3.0 or later.<br><br>*enum{LOWEST_COST_WITHOUT_CAP, LOWEST_COST_WITH_BID_CAP, COST_CAP, LOWEST_COST_WITH_MIN_ROAS}* | Choose bid strategy for this campaign to suit your specific business goals.<br>Each strategy has tradeoffs and may be available for certain `optimization_goal`s:<br><br>`LOWEST_COST_WITHOUT_CAP`: Designed to get the most results for your budget based on<br>your ad set `optimization_goal` without limiting your bid amount. This is the best strategy<br>if you care most about cost efficiency. However with this strategy it may be harder to get<br>stable average costs as you spend. This strategy is also known as *automatic bidding*.<br>Learn more in [Ads Help Center, About bid strategies: Lowest cost](https://www.facebook.com/business/help/721453268045071).<br><br>`LOWEST_COST_WITH_BID_CAP`: Designed to get the most results for your budget based on<br>your ad set `optimization_goal` while limiting actual bid to your specified<br>amount. With a bid cap you have more control over your<br>cost per actual optimization event. However if you set a limit which is too low you may<br>get less ads delivery. If you select this, you must provide<br>a bid cap in the `bid_amount` field for each ad set in this ad campaign.<br>Note: during creation this is the default bid strategy if you don't specify.<br>This strategy is also known as *manual maximum-cost bidding*.<br>Learn more in [Ads Help Center, About bid strategies: Lowest cost](https://www.facebook.com/business/help/721453268045071).<br><br><br>**Notes:**<br><br><br>• If you do not enable campaign budget optimization, you should set `bid_strategy` at ad set level.<br>• `TARGET_COST` bidding strategy has been deprecated with [Marketing API v9](https://developers.facebook.com/docs/graph-api/changelog/version9.0).<br> |
| `budget_schedule_specs`<br><br>*list<JSON or object-like arrays>* | Initial high demand periods to be created with the campaign.<br><br>Provide list of `time_start`, `time_end`,`budget_value`, and `budget_value_type`.<br>For example,<br>-F 'budget_schedule_specs=[{<br><br>"time_start":1699081200,<br><br>"time_end":1699167600,<br><br>"budget_value":100,<br><br>"budget_value_type":"ABSOLUTE"<br><br>}]'<br><br>See [High Demand Period](https://developers.facebook.com/docs/graph-api/reference/high-demand-period) for more details on each field.<br><br><br>`id` *int64*<br><br>`time_start` *datetime*<br><br>`time_end` *datetime*<br><br>`budget_value` *int64*<br><br>`budget_value_type` *enum{ABSOLUTE, MULTIPLIER}*<br><br>`recurrence_type` *enum{ONE_TIME, WEEKLY}*<br><br>`weekly_schedule` *list<JSON or object-like arrays>*<br><br>`days` *list<int64>*<br><br>`minute_start` *int64*<br><br>`minute_end` *int64*<br><br>`timezone_type` *string* |
| `buying_type`<br><br>*string* | **Default value: **`AUCTION`<br>This field will help Facebook make optimizations to delivery, pricing, and limits. All ad sets in this campaign must match the buying type. Possible values are: <br>`AUCTION` (default)<br>`RESERVED` (for [reach and frequency ads](https://developers.facebook.com/docs/marketing-api/reachandfrequency)).<br> |
| `campaign_optimization_type`<br><br>*enum{NONE, ICO_ONLY}* | campaign_optimization_type<br> |
| `daily_budget`<br><br>*int64* | Daily budget of this campaign. All adsets under this<br>campaign will share this budget. You can either set budget at the<br>campaign level or at the adset level, not both.<br> |
| `execution_options`<br><br>*list<enum{validate_only, include_recommendations}>* | **Default value: **`Set`<br>An execution setting<br> `validate_only`: when this option is specified, the API call will not perform the mutation but will run through the validation rules against values of each field. <br>`include_recommendations`: this option cannot be used by itself. When this option is used, recommendations  for ad object's configuration will be included. A separate section [recommendations](https://developers.facebook.com/docs/marketing-api/reference/ad-recommendation) will be included in the response, but only if recommendations for this specification exist.<br>If the call passes validation or review, response will be `{"success": true}`. If the call does not pass, an error will be returned with more details. These options can be used to improve any UI to display errors to the user much sooner, e.g. as soon as a new value is typed into any field corresponding to this ad object, rather than at the upload/save stage, or after review.<br> |
| `is_skadnetwork_attribution`<br><br>*boolean* | To create an iOS 14 campaign, enable SKAdNetwork attribution for this campaign.<br> |
| `is_using_l3_schedule`<br><br>*boolean* | is_using_l3_schedule<br> |
| `iterative_split_test_configs`<br><br>*list<Object>* | Array of Iterative Split Test Configs created under this campaign .<br> |
| `lifetime_budget`<br><br>*int64* | Lifetime budget of this campaign. All adsets under<br>this campaign will share this budget. You can either set budget at the<br>campaign level or at the adset level, not both.<br> |
| `name`<br><br>*string* | Name for this campaign<br><br>**[supports emoji]**<br> |
| `objective`<br><br>*enum{APP_INSTALLS, BRAND_AWARENESS, CONVERSIONS, EVENT_RESPONSES, LEAD_GENERATION, LINK_CLICKS, LOCAL_AWARENESS, MESSAGES, OFFER_CLAIMS, OUTCOME_APP_PROMOTION, OUTCOME_AWARENESS, OUTCOME_ENGAGEMENT, OUTCOME_LEADS, OUTCOME_SALES, OUTCOME_TRAFFIC, PAGE_LIKES, POST_ENGAGEMENT, PRODUCT_CATALOG_SALES, REACH, STORE_VISITS, VIDEO_VIEWS}* | Campaign's objective. If it is specified the API will validate that any ads created under the campaign match that objective. <br>Currently, with `BRAND_AWARENESS` objective, all creatives should be either only images or only videos, not mixed.<br><br>See [Outcome Ad-Driven Experience Objective Validation](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group#odax) for more information.<br> |
| `promoted_object`<br><br>*Object* | The object this campaign is promoting across all its ads. It’s required for Meta iOS 14+ app promotion (SKAdNetwork or Aggregated Event Measurement) campaign creation. Only `product_catalog_id` is used at the ad set level.<br><br><br>`application_id` *int*<br>The ID of a Facebook Application. Usually related to mobile or canvas games being promoted on Facebook for installs or engagement<br><br><br>`pixel_id` *numeric string or integer*<br>The ID of a Facebook conversion pixel.  Used with offsite conversion campaigns.<br><br><br>`custom_event_type` *enum{AD_IMPRESSION, RATE, TUTORIAL_COMPLETION, CONTACT, CUSTOMIZE_PRODUCT, DONATE, FIND_LOCATION, SCHEDULE, START_TRIAL, SUBMIT_APPLICATION, SUBSCRIBE, ADD_TO_CART, ADD_TO_WISHLIST, INITIATED_CHECKOUT, ADD_PAYMENT_INFO, PURCHASE, LEAD, COMPLETE_REGISTRATION, CONTENT_VIEW, SEARCH, SERVICE_BOOKING_REQUEST, MESSAGING_CONVERSATION_STARTED_7D, LEVEL_ACHIEVED, ACHIEVEMENT_UNLOCKED, SPENT_CREDITS, LISTING_INTERACTION, D2_RETENTION, D7_RETENTION, OTHER}*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`object_store_url` *URL*<br>The uri of the mobile / digital store where an application can be bought / downloaded. This is platform specific. When combined with the "application_id" this uniquely specifies an object which can be the subject of a Facebook advertising campaign.<br><br><br>`object_store_urls` *list<URL>*<br>The vec of uri of the mobile / digital store where an application can be bought / downloaded. This is platform specific. When combined with the "application_id" this uniquely specifies an object which can be the subject of a Facebook advertising campaign.<br><br><br>`offer_id` *numeric string or integer*<br>The ID of an Offer from a Facebook Page.<br><br><br>`page_id` *Page ID*<br>The ID of a Facebook Page<br><br><br>`product_catalog_id` *numeric string or integer*<br>The ID of a Product Catalog. Used with<br>[Dynamic Product Ads](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads).<br><br><br>`product_item_id` *numeric string or integer*<br>The ID of the product item.<br><br><br>`job_listing_id` *numeric string or integer*<br>The ID of the marketplace job listing.<br><br><br>`instagram_profile_id` *numeric string or integer*<br>The ID of the instagram profile id.<br><br><br>`product_set_id` *numeric string or integer*<br>The ID of a Product Set within an Ad Set level Product<br>Catalog. Used with<br>[Dynamic Product Ads](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads).<br><br><br>`event_id` *numeric string or integer*<br>The ID of a Facebook Event<br><br><br>`offline_conversion_data_set_id` *numeric string or integer*<br>The ID of the offline dataset.<br><br><br>`fundraiser_campaign_id` *numeric string or integer*<br>The ID of the fundraiser campaign.<br><br><br>`custom_event_str` *string*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`mcme_conversion_id` *numeric string or integer*<br>The ID of a MCME conversion.<br><br><br>`conversion_goal_id` *numeric string or integer*<br>The ID of a Conversion Goal.<br><br><br>`offsite_conversion_event_id` *numeric string or integer*<br>The ID of a Offsite Conversion Event<br><br><br>`boosted_product_set_id` *numeric string or integer*<br>The ID of the Boosted Product Set within an Ad Set level Product<br>Catalog. Should only be present when the advertiser has<br>opted into Product Set Boosting.<br><br><br>`lead_ads_form_event_source_type` *enum{inferred, meta_source, offsite_crm, offsite_web, onsite_crm, onsite_crm_single_event, onsite_clo_dep_aet, onsite_web, onsite_p2b_call, onsite_messaging, qualified_lead_file}*<br>The event source of lead ads form.<br><br><br>`lead_ads_custom_event_type` *enum{AD_IMPRESSION, RATE, TUTORIAL_COMPLETION, CONTACT, CUSTOMIZE_PRODUCT, DONATE, FIND_LOCATION, SCHEDULE, START_TRIAL, SUBMIT_APPLICATION, SUBSCRIBE, ADD_TO_CART, ADD_TO_WISHLIST, INITIATED_CHECKOUT, ADD_PAYMENT_INFO, PURCHASE, LEAD, COMPLETE_REGISTRATION, CONTENT_VIEW, SEARCH, SERVICE_BOOKING_REQUEST, MESSAGING_CONVERSATION_STARTED_7D, LEVEL_ACHIEVED, ACHIEVEMENT_UNLOCKED, SPENT_CREDITS, LISTING_INTERACTION, D2_RETENTION, D7_RETENTION, OTHER}*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`lead_ads_custom_event_str` *string*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`lead_ads_offsite_conversion_type` *enum{default, clo}*<br>The offsite conversion type for lead ads<br><br><br>`value_semantic_type` *enum {VALUE, MARGIN, LIFETIME_VALUE}*<br>The semantic of the event value to be using for optimization<br><br><br>`variation` *enum {OMNI_CHANNEL_SHOP_AUTOMATIC_DATA_COLLECTION, PRODUCT_SET_AND_APP, PRODUCT_SET_AND_IN_STORE, PRODUCT_SET_AND_OMNICHANNEL, PRODUCT_SET_AND_PHONE_CALL, PRODUCT_SET_AND_WEBSITE, PRODUCT_SET_AND_WEBSITE_AND_PHONE_CALL, PRODUCT_SET_WEBSITE_APP_AND_INSTORE}*<br>Variation of the promoted object for a PCA ad<br><br><br>`passback_pixel_id` *numeric string or integer*<br>ID of the pixel used for tracking passback events<br><br><br>`passback_application_id` *numeric string or integer*<br>ID of the application used for tracking passback events<br><br><br>`product_set_optimization` *enum{enabled, disabled}*<br>Enum defining whether or not the ad should be optimized for the promoted product set<br><br><br>`full_funnel_objective` *enum{OFFER_CLAIMS, PAGE_LIKES, EVENT_RESPONSES, POST_ENGAGEMENT, WEBSITE_CONVERSIONS, LINK_CLICKS, VIDEO_VIEWS, LOCAL_AWARENESS, PRODUCT_CATALOG_SALES, LEAD_GENERATION, BRAND_AWARENESS, STORE_VISITS, REACH, APP_INSTALLS, MESSAGES, OUTCOME_AWARENESS, OUTCOME_ENGAGEMENT, OUTCOME_LEADS, OUTCOME_SALES, OUTCOME_TRAFFIC, OUTCOME_APP_PROMOTION}*<br>Enum defining the full funnel objective of the campaign<br><br><br>`dataset_split_id` *numeric string or integer*<br>ID of the dataset split used to perform additional optimization on the dataset<br><br><br>`dataset_split_ids` *array<numeric string>*<br>IDs of the dataset splits used to perform additional optimization on the dataset<br><br><br>`lead_ads_selected_pixel_id` *numeric string or integer*<br>The selected pixel id for lead ads conversion leads optimization<br><br><br>`custom_attribution_source_ids` *array<numeric string>*<br>IDs of the custom attribution sources used for tracking passback events<br><br><br>`multi_event_product` *int64*<br>Identifies which action-to-action product the advertiser is using<br><br><br>`product_sales_channel` *enum {ONLINE, IN_STORE, OMNI}*<br>ProductSalesChannel of the promoted object for Omni L3 DA SBLI ads<br><br><br>`anchor_event_config` *JSON object*<br>Configuration for anchor event in multi-event optimization campaigns<br><br><br>`multi_event_conversion_info` *JSON object*<br>Configuration for multi-event conversion info in CLO campaigns<br><br><br>`live_video_destination` *string*<br>The live video destination type for live video ads<br><br><br>`smart_pse_enabled` *boolean*<br>Whether Smart Product Set Expansion is enabled for this campaign.<br><br><br>`smart_pse_setting` *enum{ENABLED, DISABLED}*<br>Setting for Smart Product Set Expansion. Uses an enum instead of a boolean to avoid TAO null handling issues.<br><br><br>`lead_ads_follow_up_event` *enum{whatsapp_conversations}*<br>The selected lead follow-up event for lead ads campaigns.<br><br><br>`omnichannel_object` *Object*<br><br>`app` *array<JSON object>*<br><br>`pixel` *array<JSON object>*<br>**[required]**<br><br><br>`onsite` *array<JSON object>*<br><br>`whats_app_business_phone_number_id` *numeric string or integer*<br><br>`whatsapp_phone_number` *string* |
| `source_campaign_id`<br><br>*numeric string or integer* | Used if a campaign has been copied. The ID from the original campaign that was copied.<br> |
| `special_ad_categories` This field is only accessible in v7.0 or later.<br><br>*array<enum {NONE, EMPLOYMENT, HOUSING, CREDIT, ISSUES_ELECTIONS_POLITICS, ONLINE_GAMBLING_AND_GAMING, FINANCIAL_PRODUCTS_SERVICES}>* | special_ad_categories<br><br>**[required]**<br> |
| `special_ad_category_country` This field is only accessible in v7.0 or later.<br><br>*array<enum {AC, AD, AE, AF, AG, AI, AL, AM, AN, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BV, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DJ, DK, DM, DO, DZ, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HM, HN, HR, HT, HU, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, XK, YE, YT, ZA, ZM, ZW}>* | special_ad_category_country<br> |
| `spend_cap`<br><br>*int64* | A spend cap for the campaign, such that it will not spend more than this cap. Defined as integer value of subunit in your currency with a minimum value of $100 USD (or approximate local equivalent). Set the value to 922337203685478 to remove the spend cap. Not available for Reach and Frequency or Premium Self Serve campaigns<br> |
| `start_time`<br><br>*datetime* | start_time<br> |
| `status`<br><br>*enum{ACTIVE, PAUSED, DELETED, ARCHIVED}* | Only `ACTIVE` and `PAUSED` are valid during<br>creation. Other statuses can be used for update. If it is set to<br>`PAUSED`, its active child objects will be paused and have an effective<br>status `CAMPAIGN_PAUSED`.<br> |
| `stop_time`<br><br>*datetime* | stop_time<br> |
| `topline_id`<br><br>*numeric string or integer* | Topline ID<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *id* in the return type.

```
Struct  {
id: numeric string,
success: bool,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 613 | Calls to this api have exceeded the rate limit. |
| 200 | Permissions error |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |
| 190 | Invalid OAuth 2.0 Access Token |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 300 | Edit failure |

### Updating

#### /{campaign_id}
You can update a [Campaign](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group) by making a POST request to [/{campaign_id}](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group).

##### Parameters

| Parameter | Description |
| --- | --- |
| `adlabels`<br><br>*list<Object>* | [Ad Labels](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label) associated with this campaign<br> |
| `adset_bid_amounts`<br><br>*JSON object {numeric string : int64}* | A map of child adset IDs to their respective bid amounts required in the process of toggling campaign from autobid to manual bid<br> |
| `adset_budgets`<br><br>*array<JSON object>* | An array of maps containing all the non-deleted child adset IDs and either daily_budget or lifetime_budget, required in the process of toggling between campaign budget and adset budget<br><br><br>`adset_id` *numeric string*<br>adset_id<br><br>**[required]**<br><br><br>`daily_budget` *int64*<br>daily_budget<br><br><br>`lifetime_budget` *int64*<br>lifetime_budget<br> |
| `bid_strategy` This field is only accessible in v3.0 or later.<br><br>*enum{LOWEST_COST_WITHOUT_CAP, LOWEST_COST_WITH_BID_CAP, COST_CAP, LOWEST_COST_WITH_MIN_ROAS}* | Choose bid strategy for this campaign to suit your specific business goals.<br>Each strategy has tradeoffs and may be available for certain `optimization_goal`s:<br><br>`LOWEST_COST_WITHOUT_CAP`: Designed to get the most results for your budget based on<br>your ad set `optimization_goal` without limiting your bid amount. This is the best strategy<br>if you care most about cost efficiency. However with this strategy it may be harder to get<br>stable average costs as you spend. This strategy is also known as *automatic bidding*.<br>Learn more in [Ads Help Center, About bid strategies: Lowest cost](https://www.facebook.com/business/help/721453268045071).<br><br>`LOWEST_COST_WITH_BID_CAP`: Designed to get the most results for your budget based on<br>your ad set `optimization_goal` while limiting actual bid to your specified<br>amount. With a bid cap you have more control over your<br>cost per actual optimization event. However if you set a limit which is too low you may<br>get less ads delivery. If you select this, you must provide<br>a bid cap in the `bid_amount` field for each ad set in this ad campaign.<br>Note: during creation this is the default bid strategy if you don't specify.<br>This strategy is also known as *manual maximum-cost bidding*.<br>Learn more in [Ads Help Center, About bid strategies: Lowest cost](https://www.facebook.com/business/help/721453268045071).<br><br>`COST_CAP`: Designed to get the most results for your budget based on<br>your ad set `optimization_goal` while limiting actual average cost per optimization event to a specified amount.<br>Get specified cost cap in the `bid_amount` field for each ad set in this ad campaign.<br>Learn more in [Ads Help Center, About bid strategies: Cost Cap](https://www.facebook.com/business/help/272336376749096?id=2196356200683573).<br><br><br>Notes:<br><br><br>• If you do not enable campaign budget optimization, you should set `bid_strategy` at ad set level.<br>• `TARGET_COST` bidding strategy has been deprecated with [Marketing API v9](https://developers.facebook.com/docs/graph-api/changelog/version9.0).<br> |
| `budget_rebalance_flag`<br><br>*boolean* | Whether to automatically rebalance budgets daily for all the adsets under this campaign.<br> |
| `campaign_optimization_type`<br><br>*enum{NONE, ICO_ONLY}* | campaign_optimization_type<br> |
| `daily_budget`<br><br>*int64* | Daily budget of this campaign. All adsets under this<br>campaign will share this budget. You can either set budget at the<br>campaign level or at the adset level, not both.<br> |
| `execution_options`<br><br>*list<enum{validate_only, include_recommendations}>* | **Default value: **`Set`<br>An execution setting<br> `validate_only`: when this option is specified, the API call will not perform the mutation but will run through the validation rules against values of each field. <br>`include_recommendations`: this option cannot be used by itself. When this option is used, recommendations  for ad object's configuration will be included. A separate section [recommendations](https://developers.facebook.com/docs/marketing-api/reference/ad-recommendation) will be included in the response, but only if recommendations for this specification exist.<br>If the call passes validation or review, response will be `{"success": true}`. If the call does not pass, an error will be returned with more details. These options can be used to improve any UI to display errors to the user much sooner, e.g. as soon as a new value is typed into any field corresponding to this ad object, rather than at the upload/save stage, or after review.<br> |
| `is_adset_budget_sharing_enabled`<br><br>*boolean* | Whether the child ad sets are managed under ad set budget sharing. With ad set budget sharing, advertisers can now share up to 20% of their budget with other ad sets in the same campaign.<br> |
| `is_reels_trending_ads_enabled`<br><br>*boolean* | indicator for 'reels trending ads' campaign<br> |
| `is_skadnetwork_attribution`<br><br>*boolean* | Flag to indicate that the campaign will be using SKAdNetwork, which also means that it will only be targeting iOS 14.x and above<br> |
| `is_using_l3_schedule`<br><br>*boolean* | is_using_l3_schedule<br> |
| `iterative_split_test_configs`<br><br>*list<Object>* | Array of Iterative Split Test Configs created under this campaign .<br> |
| `lifetime_budget`<br><br>*int64* | Lifetime budget of this campaign. All adsets under<br>this campaign will share this budget. You can either set budget at the<br>campaign level or at the adset level, not both.<br> |
| `name`<br><br>*string* | Name for this campaign<br><br>**[supports emoji]**<br> |
| `objective`<br><br>*enum{APP_INSTALLS, BRAND_AWARENESS, CONVERSIONS, EVENT_RESPONSES, LEAD_GENERATION, LINK_CLICKS, LOCAL_AWARENESS, MESSAGES, OFFER_CLAIMS, OUTCOME_APP_PROMOTION, OUTCOME_AWARENESS, OUTCOME_ENGAGEMENT, OUTCOME_LEADS, OUTCOME_SALES, OUTCOME_TRAFFIC, PAGE_LIKES, POST_ENGAGEMENT, PRODUCT_CATALOG_SALES, REACH, STORE_VISITS, VIDEO_VIEWS}* | Campaign's objective. If it is specified the API will validate that any ads created under the campaign match that objective. <br>Currently, with `BRAND_AWARENESS` objective, all creatives should be either only images or only videos, not mixed.<br><br><br>See the [Outcome Ad-Driven Experience Objective Validation](#odax) section below for more information.<br> |
| `promoted_object`<br><br>*Object* | The object this campaign is promoting across all its ads. Only `product_catalog_id` is used at the ad set level.<br><br><br>`application_id` *int*<br>The ID of a Facebook Application. Usually related to mobile or canvas games being promoted on Facebook for installs or engagement<br><br><br>`pixel_id` *numeric string or integer*<br>The ID of a Facebook conversion pixel.  Used with offsite conversion campaigns.<br><br><br>`custom_event_type` *enum{AD_IMPRESSION, RATE, TUTORIAL_COMPLETION, CONTACT, CUSTOMIZE_PRODUCT, DONATE, FIND_LOCATION, SCHEDULE, START_TRIAL, SUBMIT_APPLICATION, SUBSCRIBE, ADD_TO_CART, ADD_TO_WISHLIST, INITIATED_CHECKOUT, ADD_PAYMENT_INFO, PURCHASE, LEAD, COMPLETE_REGISTRATION, CONTENT_VIEW, SEARCH, SERVICE_BOOKING_REQUEST, MESSAGING_CONVERSATION_STARTED_7D, LEVEL_ACHIEVED, ACHIEVEMENT_UNLOCKED, SPENT_CREDITS, LISTING_INTERACTION, D2_RETENTION, D7_RETENTION, OTHER}*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`object_store_url` *URL*<br>The uri of the mobile / digital store where an application can be bought / downloaded. This is platform specific. When combined with the "application_id" this uniquely specifies an object which can be the subject of a Facebook advertising campaign.<br><br><br>`object_store_urls` *list<URL>*<br>The vec of uri of the mobile / digital store where an application can be bought / downloaded. This is platform specific. When combined with the "application_id" this uniquely specifies an object which can be the subject of a Facebook advertising campaign.<br><br><br>`offer_id` *numeric string or integer*<br>The ID of an Offer from a Facebook Page.<br><br><br>`page_id` *Page ID*<br>The ID of a Facebook Page<br><br><br>`product_catalog_id` *numeric string or integer*<br>The ID of a Product Catalog. Used with<br>[Dynamic Product Ads](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads).<br><br><br>`product_item_id` *numeric string or integer*<br>The ID of the product item.<br><br><br>`job_listing_id` *numeric string or integer*<br>The ID of the marketplace job listing.<br><br><br>`instagram_profile_id` *numeric string or integer*<br>The ID of the instagram profile id.<br><br><br>`product_set_id` *numeric string or integer*<br>The ID of a Product Set within an Ad Set level Product<br>Catalog. Used with<br>[Dynamic Product Ads](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads).<br><br><br>`event_id` *numeric string or integer*<br>The ID of a Facebook Event<br><br><br>`offline_conversion_data_set_id` *numeric string or integer*<br>The ID of the offline dataset.<br><br><br>`fundraiser_campaign_id` *numeric string or integer*<br>The ID of the fundraiser campaign.<br><br><br>`custom_event_str` *string*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`mcme_conversion_id` *numeric string or integer*<br>The ID of a MCME conversion.<br><br><br>`conversion_goal_id` *numeric string or integer*<br>The ID of a Conversion Goal.<br><br><br>`offsite_conversion_event_id` *numeric string or integer*<br>The ID of a Offsite Conversion Event<br><br><br>`boosted_product_set_id` *numeric string or integer*<br>The ID of the Boosted Product Set within an Ad Set level Product<br>Catalog. Should only be present when the advertiser has<br>opted into Product Set Boosting.<br><br><br>`lead_ads_form_event_source_type` *enum{inferred, meta_source, offsite_crm, offsite_web, onsite_crm, onsite_crm_single_event, onsite_clo_dep_aet, onsite_web, onsite_p2b_call, onsite_messaging, qualified_lead_file}*<br>The event source of lead ads form.<br><br><br>`lead_ads_custom_event_type` *enum{AD_IMPRESSION, RATE, TUTORIAL_COMPLETION, CONTACT, CUSTOMIZE_PRODUCT, DONATE, FIND_LOCATION, SCHEDULE, START_TRIAL, SUBMIT_APPLICATION, SUBSCRIBE, ADD_TO_CART, ADD_TO_WISHLIST, INITIATED_CHECKOUT, ADD_PAYMENT_INFO, PURCHASE, LEAD, COMPLETE_REGISTRATION, CONTENT_VIEW, SEARCH, SERVICE_BOOKING_REQUEST, MESSAGING_CONVERSATION_STARTED_7D, LEVEL_ACHIEVED, ACHIEVEMENT_UNLOCKED, SPENT_CREDITS, LISTING_INTERACTION, D2_RETENTION, D7_RETENTION, OTHER}*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`lead_ads_custom_event_str` *string*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`lead_ads_offsite_conversion_type` *enum{default, clo}*<br>The offsite conversion type for lead ads<br><br><br>`value_semantic_type` *enum {VALUE, MARGIN, LIFETIME_VALUE}*<br>The semantic of the event value to be using for optimization<br><br><br>`variation` *enum {OMNI_CHANNEL_SHOP_AUTOMATIC_DATA_COLLECTION, PRODUCT_SET_AND_APP, PRODUCT_SET_AND_IN_STORE, PRODUCT_SET_AND_OMNICHANNEL, PRODUCT_SET_AND_PHONE_CALL, PRODUCT_SET_AND_WEBSITE, PRODUCT_SET_AND_WEBSITE_AND_PHONE_CALL, PRODUCT_SET_WEBSITE_APP_AND_INSTORE}*<br>Variation of the promoted object for a PCA ad<br><br><br>`passback_pixel_id` *numeric string or integer*<br>ID of the pixel used for tracking passback events<br><br><br>`passback_application_id` *numeric string or integer*<br>ID of the application used for tracking passback events<br><br><br>`product_set_optimization` *enum{enabled, disabled}*<br>Enum defining whether or not the ad should be optimized for the promoted product set<br><br><br>`full_funnel_objective` *enum{OFFER_CLAIMS, PAGE_LIKES, EVENT_RESPONSES, POST_ENGAGEMENT, WEBSITE_CONVERSIONS, LINK_CLICKS, VIDEO_VIEWS, LOCAL_AWARENESS, PRODUCT_CATALOG_SALES, LEAD_GENERATION, BRAND_AWARENESS, STORE_VISITS, REACH, APP_INSTALLS, MESSAGES, OUTCOME_AWARENESS, OUTCOME_ENGAGEMENT, OUTCOME_LEADS, OUTCOME_SALES, OUTCOME_TRAFFIC, OUTCOME_APP_PROMOTION}*<br>Enum defining the full funnel objective of the campaign<br><br><br>`dataset_split_id` *numeric string or integer*<br>ID of the dataset split used to perform additional optimization on the dataset<br><br><br>`dataset_split_ids` *array<numeric string>*<br>IDs of the dataset splits used to perform additional optimization on the dataset<br><br><br>`lead_ads_selected_pixel_id` *numeric string or integer*<br>The selected pixel id for lead ads conversion leads optimization<br><br><br>`custom_attribution_source_ids` *array<numeric string>*<br>IDs of the custom attribution sources used for tracking passback events<br><br><br>`multi_event_product` *int64*<br>Identifies which action-to-action product the advertiser is using<br><br><br>`product_sales_channel` *enum {ONLINE, IN_STORE, OMNI}*<br>ProductSalesChannel of the promoted object for Omni L3 DA SBLI ads<br><br><br>`anchor_event_config` *JSON object*<br>Configuration for anchor event in multi-event optimization campaigns<br><br><br>`multi_event_conversion_info` *JSON object*<br>Configuration for multi-event conversion info in CLO campaigns<br><br><br>`live_video_destination` *string*<br>The live video destination type for live video ads<br><br><br>`smart_pse_enabled` *boolean*<br>Whether Smart Product Set Expansion is enabled for this campaign.<br><br><br>`smart_pse_setting` *enum{ENABLED, DISABLED}*<br>Setting for Smart Product Set Expansion. Uses an enum instead of a boolean to avoid TAO null handling issues.<br><br><br>`lead_ads_follow_up_event` *enum{whatsapp_conversations}*<br>The selected lead follow-up event for lead ads campaigns.<br><br><br>`omnichannel_object` *Object*<br><br>`app` *array<JSON object>*<br><br>`pixel` *array<JSON object>*<br>**[required]**<br><br><br>`onsite` *array<JSON object>*<br><br>`whats_app_business_phone_number_id` *numeric string or integer*<br><br>`whatsapp_phone_number` *string* |
| `smart_promotion_type`<br><br>*enum{GUIDED_CREATION, SMART_APP_PROMOTION}* | smart_promotion_type<br> |
| `special_ad_category`<br><br>*enum{NONE, EMPLOYMENT, HOUSING, CREDIT, ISSUES_ELECTIONS_POLITICS, ONLINE_GAMBLING_AND_GAMING, FINANCIAL_PRODUCTS_SERVICES}* | special_ad_category<br> |
| `special_ad_category_country` This field is only accessible in v7.0 or later.<br><br>*array<enum {AC, AD, AE, AF, AG, AI, AL, AM, AN, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BV, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DJ, DK, DM, DO, DZ, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HM, HN, HR, HT, HU, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KP, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, XK, YE, YT, ZA, ZM, ZW}>* | special_ad_category_country<br> |
| `spend_cap`<br><br>*int64* | A spend cap for the campaign, such that it will not spend more than this cap. Defined as integer value of subunit in your currency with a minimum value of $100 USD (or approximate local equivalent). Set the value to 922337203685478 to remove the spend cap. Not available for Reach and Frequency or Premium Self Serve campaigns<br> |
| `start_time`<br><br>*datetime* | start_time<br> |
| `status`<br><br>*enum{ACTIVE, PAUSED, DELETED, ARCHIVED}* | Only `ACTIVE` and `PAUSED` are valid during<br>creation. Other statuses can be used for update. If it is set to<br>`PAUSED`, its active child objects will be paused and have an effective<br>status `CAMPAIGN_PAUSED`.<br> |
| `stop_time`<br><br>*datetime* | stop_time<br> |

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
| 613 | Calls to this api have exceeded the rate limit. |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |
| 190 | Invalid OAuth 2.0 Access Token |
| 801 | Invalid operation |

### Deleting

#### /{campaign_id}
You can delete a [Campaign](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group) by making a DELETE request to [/{campaign_id}](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group).

##### Parameters

This endpoint doesn't have any parameters.

##### Return Type

```
Struct  {
success: bool,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |

#### /act_{ad_account_id}/campaigns
You can dissociate a [Campaign](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group) from an [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account) by making a DELETE request to [/act_{ad_account_id}/campaigns](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/campaigns).

##### Parameters

| Parameter | Description |
| --- | --- |
| `before_date`<br><br>*datetime* | Set a before date to delete campaigns before this date<br> |
| `delete_strategy`<br><br>*enum{DELETE_ANY, DELETE_OLDEST, DELETE_ARCHIVED_BEFORE}* | Delete strategy<br><br>**[required]**<br> |
| `object_count`<br><br>*integer* | Object count<br> |

##### Return Type

```
Struct  {
objects_left_to_delete_count: unsigned int32,
deleted_object_ids:  List  [numeric string],
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Objective Validation

**Warning:** These older objectives are deprecated with the release of [Marketing API v17.0](https://developers.facebook.com/docs/graph-api/changelog/version17.0#marketing-api). Please refer to the [Outcome-Driven Ads Experiences mapping table](#odax-mapping) below to find the new objectives and their corresponding destination types, optimization goals and promoted objects.

Your campaign objective choice can limit the settings available to you.

#### Optimization Goals

Certain campaign objectives support only certain ad set `optimization_goals`. See [Bidding Overview, Validation](https://developers.facebook.com/documentation/ads-commerce/marketing-api/bidding/overview#opt-goal-validation).

#### Compatible Ad Types

| Objective | Compatible Ad Types |
| --- | --- |
| `APP_INSTALLS` | - Image Ads<br>- Video Ads<br>- Carousel Ads<br>- [Instant Experience Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instant-experiences)<br>- [App Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/mobile-app-ads)<br>- [Instagram Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instagramads) (see [placement limitations](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instagramads/get-started#campaign))<br>- [Segment Asset Customization Ads](https://developers.facebook.com/docs/marketing-api/dynamic-creative/segment-asset-customization)<br>- [Placement Asset Customization Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/dynamic-creative/placement-asset-customization)<br>- [Multi-Language Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/multi-language-ads)<br>- [Dynamic Ads](https://developers.facebook.com/docs/marketing-api/dynamic-ads)<br>- [Dynamic Creative](https://developers.facebook.com/docs/marketing-api/dynamic-creative/overview) |
| `BRAND_AWARENESS` | - Image Ads<br>- Video Ads<br>- Carousel Ads<br>- [Instant Experience Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instant-experiences)<br>- [Instagram Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instagramads) (see [placement limitations](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instagramads/get-started#campaign))<br>- [Segment Asset Customization Ads](https://developers.facebook.com/docs/marketing-api/dynamic-creative/segment-asset-customization)<br>- [Placement Asset Customization Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/dynamic-creative/placement-asset-customization)<br>- [Multi-Language Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/multi-language-ads)<br>- [Dynamic Creative](https://developers.facebook.com/docs/marketing-api/dynamic-creative/overview) |
| `CONVERSIONS` | - Image Ads<br>- Video Ads<br>- Carousel Ads<br>- [Instant Experience Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instant-experiences)<br>- [Collection Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/creative/collection-ads)<br>- [App Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/mobile-app-ads)<br>- [Instagram Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instagramads) (see [placement limitations](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instagramads/get-started#campaign))<br>- [Ads that click to Messenger](https://developers.facebook.com/documentation/ads-commerce/marketing-api/ad-creative/messaging-ads#destination)<br>- [Offer Ads](https://developers.facebook.com/docs/marketing-api/guides/offer-ads)<br>- [Segment Asset Customization Ads](https://developers.facebook.com/docs/marketing-api/dynamic-creative/segment-asset-customization)<br>- [Placement Asset Customization Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/dynamic-creative/placement-asset-customization)<br>- [Multi-Language Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/multi-language-ads)<br>- [Dynamic Ads](https://developers.facebook.com/docs/marketing-api/dynamic-ads)<br>- [Dynamic Creative](https://developers.facebook.com/docs/marketing-api/dynamic-creative/overview) |
| `EVENT_RESPONSES` | - Image Ads<br>- Video Ads<br>- Carousel Ads<br>- [Event and Local Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/event-ads) |
| `LEAD_GENERATION` | - Image Ads<br>- Video Ads<br>- Carousel Ads<br>- [Lead Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/lead-ads)<br>- [Instagram Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instagramads) (see [placement limitations](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instagramads/get-started#campaign))<br>- [Placement Asset Customization Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/dynamic-creative/placement-asset-customization)<br>- [Dynamic Creative](https://developers.facebook.com/docs/marketing-api/dynamic-creative/overview) |
| `LINK_CLICKS` | - Image Ads<br>- Video Ads<br>- Carousel Ads<br>- [Instant Experience Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instant-experiences)<br>- [Collection Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/creative/collection-ads)<br>- [App Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/mobile-app-ads)<br>- [Instagram Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instagramads) (see [placement limitations](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instagramads/get-started#campaign))<br>- [Offer Ads](https://developers.facebook.com/docs/marketing-api/guides/offer-ads)<br>- [Segment Asset Customization Ads](https://developers.facebook.com/docs/marketing-api/dynamic-creative/segment-asset-customization)<br>- [Placement Asset Customization Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/dynamic-creative/placement-asset-customization)<br>- [Multi-Language Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/multi-language-ads)<br>- [Dynamic Ads](https://developers.facebook.com/docs/marketing-api/dynamic-ads)<br>- [Dynamic Creative](https://developers.facebook.com/docs/marketing-api/dynamic-creative/overview) |
| `MESSAGES` | - Image Ads<br>- Video Ads<br>- Carousel Ads<br>- [Instagram Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instagramads) (see [placement limitations](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instagramads/get-started#campaign))<br>- [Messenger Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/ad-creative/messaging-ads#destination) |
| `POST_ENGAGEMENT` | - Image Ads<br>- Carousel Ads<br>- [Instant Experience Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instant-experiences)<br>- [Instagram Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instagramads) (see [placement limitations](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instagramads/get-started#campaign)) |
| `PRODUCT_CATALOG_SALES` | - Image Ads<br>- Carousel Ads<br>- [Collection Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/creative/collection-ads)<br>- [Instagram Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instagramads) (see [placement limitations](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instagramads/get-started#campaign))<br>- [Dynamic Ads](https://developers.facebook.com/docs/marketing-api/dynamic-ads)<br>- [Collaborative Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads) |
| `REACH` | - Image Ads<br>- Video Ads<br>- Carousel Ads<br>- [Instant Experience Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instant-experiences)<br>- [Instagram Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instagramads) (see [placement limitations](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instagramads/get-started#campaign))<br>- [Segment Asset Customization Ads](https://developers.facebook.com/docs/marketing-api/dynamic-creative/segment-asset-customization)<br>- [Placement Asset Customization Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/dynamic-creative/placement-asset-customization)<br>- [Multi-Language Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/multi-language-ads)<br>- [Dynamic Creative](https://developers.facebook.com/docs/marketing-api/dynamic-creative/overview) |
| `STORE_VISITS` | - Image Ads<br>- Carousel Ads<br>- [Instant Experience Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instant-experiences)<br>- [Collection Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/creative/collection-ads)<br>- [Instagram Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instagramads) (see [placement limitations](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instagramads/get-started#campaign))<br>- [Offer Ads](https://developers.facebook.com/docs/marketing-api/guides/offer-ads) |
| `VIDEO_VIEWS` | - Video Ads<br>- Carousel Ads<br>- [Instant Experience Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instant-experiences)<br>- [Instagram Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instagramads) (see [placement limitations](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instagramads/get-started#campaign))<br>- [Segment Asset Customization Ads](https://developers.facebook.com/docs/marketing-api/dynamic-creative/segment-asset-customization)<br>- [Placement Asset Customization Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/dynamic-creative/placement-asset-customization)<br>- [Multi-Language Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/multi-language-ads)<br>- [Dynamic Creative](https://developers.facebook.com/docs/marketing-api/dynamic-creative/overview) |

#### Objectives and Creative Fields {#objective_creative}

See our [ads guide](https://www.facebook.com/business/ads-guide/) for a list of creatives supported per objective. In the API, the objective determines which [ad creatives](https://developers.facebook.com/docs/reference/ads-api/adcreative) are valid.

| Objective | Creative Fields |
| --- | --- |
| `APP_INSTALLS` | `object_story_id` or `object_story_spec` |
| `CONVERSIONS` | `object_story_id` or `object_story_spec`<br><br>Notes:<br><br>- If you are creating link ads not connected to a page, use the following creative fields: `title`, `body`, `object_url`, and `image_file` or `image_hash`.<br>- Creative cannot include link ads pointing to an app store. |
| `EVENT_RESPONSES` | `object_story_id` or `object_story_spec` |
| `LEAD_GENERATION` | `object_story_id` or `object_story_spec` |
| `LINK_CLICKS` | `object_story_id` or `object_story_spec`<br><br>Notes:<br><br>- Creative cannot include link ads pointing to an app store.<br>- If you select `LINK_CLICKS` as both optimization goal and billing event, you must include `call_to_action`. |
| `MESSAGES` | `object_story_spec` |
| `PAGE_LIKES` | `object_story_id`, `object_story_spec`, `object_id`, and `body` |
| `POST_ENGAGEMENT` | `object_story_id` or `object_story_spec`<br><br>Note: Creative cannot include link ads pointing to an app store. |
| `VIDEO_VIEWS` | `object_story_id` or `object_story_spec` |

#### Objectives and Tracking Specs {#objective_tracking}

Tracking specs are applied by default based on the objective specified, please see the full list of defaults by objective [here](https://developers.facebook.com/documentation/ads-commerce/marketing-api/tracking-specs#default).

There are two important scenarios to take into account:

* Tracking pixels are not applied by default, and you must specify it explicitly when your objective is `CONVERSIONS`.
* Mobile app ads will no longer track installs or app events by default. **You must explicitly specify to track installs or app events for mobile app ads otherwise your ad will not track.**

To specify to track an install or app event, set the following in your [ad](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/adgroup):

```
tracking_specs=[{'action.type':['mobile_app_install'],'application':[{your_app_id}]},{'action.type':['app_custom_event'],'application':[{your_app_id}]}]
```

#### Objective and Promoted Objects {#promoted-object}

Certain objectives require the `promoted_object` to be set in ad sets. See [Promoted Object](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-promoted-object) for more information.

| Objective | Required promoted_object Fields |
| --- | --- |
| `APP_INSTALLS` | - `application_id` and `object_store_url`<br>- If `optimization_goal` is `OFFSITE_CONVERSIONS`: `application_id`, `object_store_url`, and `custom_event_type` |
| `CONVERSIONS` | - `pixel_id` (Conversion pixel ID)<br>- `pixel_id` (Facebook pixel ID) and `custom_event_type`<br>- `pixel_id` (Facebook pixel ID), `pixel_rule`, and `custom_event_type`<br>- `event_id` (Facebook event ID) and `custom_event_type`<br>- For mobile app events: `application_id`, `object_store_url`, and `custom_event_type`<br>- For offline conversions: `offline_conversion_data_set_id` (Offline dataset ID), and `custom_event_type` |
| `LINK_CLICKS` | For mobile app or Instant Experiences app engagement link clicks: `application_id` and `object_store_url`. |
| `PRODUCT_CATALOG_SALES` | - `product_set_id`, or<br>- `product_set_id` and `custom_event_type` |
| `PAGE_LIKES` | `page_id` |
| `OFFER_CLAIMS` | `page_id` |

#### Objective and Placements {#placement}

Certain types of ad [placements](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/advanced-targeting#placement) are valid only for specific objectives or creatives. See [Business Help Center, Available ad placements for marketing objectives](https://www.facebook.com/business/help/279271845888065?id=369787570424415).

The table below shows some placements and their compatible objectives or creatives. You can pick a combination of those compatible placements. Note that:

* With `LEAD_GENERATION`, `device_platforms: desktop` cannot be selected together with `publisher_platforms: instagram`.
* If your objective is website traffic, `story` for `facebook_positions` does not support `destination_type: messenger`.
* If your objective is website traffic, `story` for `messenger_positions` does not support `destination_type: messenger`.
* If your objective is website traffic, `ig_search` and `explore_home` for `instagram_positions` do not support `destination_type: whatsapp & messenger`.

| Objective | Creative | Placement |
| --- | --- | --- |
| `APP_INSTALLS`, promoting an Instant Experiences app | Desktop app ads | `device_platforms`: `desktop` |
| `APP_INSTALLS`, promoting a mobile app | Photo or video mobile app ads | `device_platforms`: `mobile`<br><br>`publisher_platforms`: `facebook`, `feed`, `instagram`, `audience_network`<br> `facebook_positions`: `feed`, `video_feeds`, `instant articles` and `story`<br><br>`audience_network_positions`: `classic`, `rewarded_video`<br><br>`messenger_positions`: `story` |
| `BRAND_AWARENESS` | all | `publisher_platforms`: `facebook`, `instagram`, `audience_network`.<br><br>`facebook_positions`: `feed`, `video_feeds`, `instream_video` and `story`, which is currently under limited availability<br><br>`instagram_positions`: `stream`<br><br>`audience_network_positions`: `classic`, `instream_video` |
| `CONVERSIONS` | Photo or video link ads from a page | We support `BRAND_AWARENESS`, `APP_INSTALL`, `POST_ENGAGEMENT`, `VIDEO_VIEWS`, `REACH`, `WEBSITE_CONVERSIONS`, and `TRAFFIC`.<br>Also supported: `right_hand_column` and `story` for `facebook_positions` and `messenger_positions`: `messenger_home` and `story`.<br><br>`facebook_positions`: `story` only supports the objective `WEBSITE_CONVERSIONS`<br><br>`messenger_positions`: `story` only supports the objective `WEBSITE_CONVERSIONS`<br><br>Exception: `instream_video` is not supported for this objective. |
| `CONVERSIONS` | Link ads not connected to a page | `facebook_positions`: `right_hand_column` |
| `CONVERSIONS` (promoting mobile app) | Photo or video mobile app ads | `device_platforms`: `mobile`.<br><br>`facebook_positions`: `right_hand_column` and `story`. `story` as a `facebook_positions` for this objective does not support `destination_type`: `messenger`.<br><br>`messenger_positions`: `messenger_home`<br><br>`story` as a `messenger_positions` for this objective does not support `destination_type: messenger`. |
| `EVENT_RESPONSES` | Event ads | As of 3.0, you cannot use `right_hand_column` for `facebook_positions` |
| `EVENT_RESPONSES` | Page post ads | `publisher_platforms`: `facebook`. <br>As of 3.0, you cannot use `right_hand_column` for `facebook_positions` |
| `LEAD_GENERATION` | Page post ads | `device_platforms`: `mobile`, `desktop`<br><br>`publisher_platforms`: `facebook`, `instagram`<br><br>`facebook_positions`: `feed` and `story`, which is in limited availability<br><br>instagram_positions: stream<br><br>As of 3.0, you cannot use `right_hand_column` for `facebook_positions` |
| `LINK_CLICKS` | Photo or video link ads from a page | All, including `right_hand_column` and `messenger_positions`: `messenger_home` and `story`. |
| `LINK_CLICKS` | Link ads not connected to a page | `facebook_positions`: `right_hand_column` |
| `LINK_CLICKS`, promoting an Instant Experiences app | Desktop app ads | `device_platforms`: `desktop`<br><br>`facebook_positions`: `right_hand_column` |
| `LINK_CLICKS`, promoting a mobile app | Photo or video mobile app ads | `device_platforms`: `mobile`, `facebook_positions`: `right_hand_column` |
| `PAGE_LIKES` | Video creatives | `publisher_platforms`: `facebook`<br><br>As of 3.0, you cannot use `right_hand_column` for `facebook_positions` |
| `POST_ENGAGEMENT` | Page post ads with video or photo | `publisher_platforms`: `facebook`, `instagram`<br><br>`device_platforms`: `mobile`, `desktop`<br><br>As of 3.0, you cannot use `right_hand_column` for `facebook_positions` |
| `POST_ENGAGEMENT` | Page post ads with text only | `publisher_platforms`: `facebook`, `instagram`<br><br>`device_platforms`: `mobile`, `desktop`<br><br>As of 3.0, you cannot use `right_hand_column` for `facebook_positions` |
| `POST_ENGAGEMENT` | New campaign | `publisher_platforms`: `facebook`, `instagram`<br><br>As of 3.0, you cannot use `right_hand_column` for `facebook_positions` |
| `PRODUCT_CATALOG_SALES` | dynamic ads | All, including `right_hand_column` for `facebook_positions`. |
| `REACH` | Reach ads | All except `right_hand_column` for `facebook_positions` as of 3.0. <br>Includes `messenger_positions`: `story` and `story` for `facebook_positions`. |
| `STORE_VISITS` | store visit ads | `publisher_platforms`: `facebook`<br>As of 3.0, you cannot use `right_hand_column` for `facebook_positions` |
| `VIDEO_VIEWS` | Video ads | `publisher_platforms`: `facebook`, `instagram`, `audience_network`.<br><br>Includes `story` for `facebook_positions` but not with the `optimation_goal` set to `TWO_SECOND_CONTINUOUS_VIDEO_VIEWS`.<br><br>As of 3.0, you cannot use `right_hand_column` for `facebook_positions` |

#### Objective, Optimization Goal and `attribution_spec` {#attribution_spec}
Use click-through and view-through attribution windows for [ad set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign#Creating) to track conversions then use for ads delivery optimization. This is different from the attribution window you use for ads reporting. With `attribution_spec`, select a combination of click-through or view-through windows of 1 day or 7 days. The combinations you can use depend on your ad set's `optimization_goal` and campaign's `objective`.

**Recommended Default `attribution_spec`**

You may not have provided `attribution_spec` when you created ads sets optimized for Value Optimization. This is an optimization available for conversions, app installs, and product catalog sales objectives. In the past, we defaulted to a 1-day click through attribution window.

| Objective | Optimization Goal | Allowed Combination |
| --- | --- | --- |
| `CONVERSIONS, PRODUCT_CATALOG_SALES` | `OFFSITE_CONVERSIONS` | 1-day click<br>7-day click<br>1-day click and 1-day view<br>7-day click and 1-day view |
| `APP_INSTALLS, LINK_CLICKS` | `OFFSITE_CONVERSIONS` | 1-day click<br><br>7-day click |
| `APP_INSTALLS` | `APP_INSTALLS` | 1-day click<br>1-day click and 1-day engaged-view<br>1-day click and 1-day view<br>1-day click and 1-day engaged-view and 1-day view |
| `CONVERSIONS` | `INCREMENTAL_OFFSITE_<br>CONVERSIONS` | Null click, Null view |

For all other `optimization_goal` and `objective` combinations, you can only use 1-day click for `attribution_spec`.

#### Outcome-Driven Ads Experiences Objective Validation {#odax}

**Warning:** From v20.0 onwards, Impressions optimization goal is deprecated for the legacy Post Engagement objective and the `ON_POST` destination_type.

##### Objective values

The following are newer objectives:

* `OUTCOME_APP_PROMOTION`
* `OUTCOME_AWARENESS`
* `OUTCOME_ENGAGEMENT`
* `OUTCOME_LEADS`
* `OUTCOME_SALES`
* `OUTCOME_TRAFFIC`

These newer objectives will eventually replace the original objectives `APP_INSTALLS`, `BRAND_AWARENESS`, `CONVERSIONS`, `EVENT_RESPONSES`, `LEAD_GENERATION`, `LINK_CLICKS`, `LOCAL_AWARENESS`, `MESSAGES`, `OFFER_CLAIMS`, `PAGE_LIKES`, `POST_ENGAGEMENT`, `PRODUCT_CATALOG_SALES`, `REACH`, `STORE_VISITS`, `VIDEO_VIEWS`. We will continue supporting these original objectives throughout 2022.

##### Limitations

* Trying to duplicate existing objective campaigns to use the new objective values (`OUTCOME_APP_PROMOTION`, `OUTCOME_AWARENESS`, `OUTCOME_ENGAGEMENT`, `OUTCOME_LEADS`, `OUTCOME_SALES`, `OUTCOME_TRAFFIC`) may throw an error.

##### Example

**Outcome-Driven Ads Experiences**

```
curl -X POST \
  -F 'name="New ODAX Campaign"' \
  -F 'objective="OUTCOME_ENGAGEMENT"' \
  -F 'status="PAUSED"' \
  -F 'special_ad_categories=[]' \
  -F 'access_token=ACCESS_TOKEN \
  https://graph.facebook.com/v11.0/
  act_AD_ACCOUNT_ID/campaigns
```

**Legacy**

```
curl -X POST \
  -F 'name="New Campaign"' \
  -F 'objective="APP_INSTALLS"' \
  -F 'status="PAUSED"' \
  -F 'special_ad_categories=[]' \
  -F 'access_token=ACCESS_TOKEN \
  https://graph.facebook.com/v11.0/
  act_AD_ACCOUNT_ID/campaigns
```

##### Objective Mapping {#odax-mapping}

| Old Objective | New Objective | Destination Type | Optimization Goal | Promoted Object |
| --- | --- | --- | --- | --- |
| `BRAND_AWARENESS` | `OUTCOME_AWARENESS` | — | `AD_RECALL_LIFT` | `page_id` |
| `REACH` | `OUTCOME_AWARENESS` | — | `REACH` | `page_id` |
| `REACH` | `OUTCOME_AWARENESS` | — | `IMPRESSIONS` | `page_id` |
| `LINK_CLICKS` | `OUTCOME_TRAFFIC` | — | `LINK_CLICKS` | `application_id`, `object_store_url` |
| `LINK_CLICKS` | `OUTCOME_TRAFFIC` | — | `LANDING_PAGE_VIEWS` | — |
| `LINK_CLICKS` | `OUTCOME_TRAFFIC` | — | `REACH` | `application_id`, `object_store_url` |
| `LINK_CLICKS` | `OUTCOME_TRAFFIC` | — | `IMPRESSIONS` | — |
| `LINK_CLICKS` | `OUTCOME_TRAFFIC` | `MESSENGER` | `LINK_CLICKS` | — |
| `LINK_CLICKS` | `OUTCOME_TRAFFIC` | `MESSENGER` | `REACH` | — |
| `LINK_CLICKS` | `OUTCOME_TRAFFIC` | `MESSENGER` | `IMPRESSIONS` | — |
| `LINK_CLICKS` | `OUTCOME_TRAFFIC` | `WHATSAPP` | `LINK_CLICKS` | `page_id` |
| `LINK_CLICKS` | `OUTCOME_TRAFFIC` | `WHATSAPP` | `REACH` | `page_id` |
| `LINK_CLICKS` | `OUTCOME_TRAFFIC` | `WHATSAPP` | `IMPRESSIONS` | `page_id` |
| `LINK_CLICKS` | `OUTCOME_TRAFFIC` | `PHONE_CALL` | `QUALITY_CALL` | — |
| `LINK_CLICKS` | `OUTCOME_TRAFFIC` | `PHONE_CALL` | `LINK_CLICKS` | — |
| `POST_ENGAGEMENT` | `OUTCOME_ENGAGEMENT` | `ON_POST` | `POST_ENGAGEMENT` | — |
| `POST_ENGAGEMENT` | `OUTCOME_ENGAGEMENT` | `ON_POST` | `REACH` | — |
| `POST_ENGAGEMENT` | `OUTCOME_ENGAGEMENT` | `ON_POST` | `IMPRESSIONS` | — |
| `PAGE_LIKES` | `OUTCOME_ENGAGEMENT` | `ON_PAGE` | `PAGE_LIKES` | `page_id` |
| `EVENT_RESPONSES` | `OUTCOME_ENGAGEMENT` | `ON_EVENT` | `EVENT_RESPONSES` | — |
| `EVENT_RESPONSES` | `OUTCOME_ENGAGEMENT` | `ON_EVENT` | `POST_ENGAGEMENT` | — |
| `EVENT_RESPONSES` | `OUTCOME_ENGAGEMENT` | `ON_EVENT` | `REACH` | — |
| `EVENT_RESPONSES` | `OUTCOME_ENGAGEMENT` | `ON_EVENT` | `IMPRESSIONS` | — |
| `APP_INSTALL` | `OUTCOME_APP_PROMOTION` | — | `LINK_CLICKS` | `application_id`, `object_store_url` |
| `APP_INSTALL` | `OUTCOME_APP_PROMOTION` | — | `OFFSITE_CONVERSIONS` | `application_id`, `object_store_url` |
| `APP_INSTALL` | `OUTCOME_APP_PROMOTION` | — | `APP_INSTALLS` | `application_id`, `object_store_url` |
| `VIDEO_VIEWS` | `OUTCOME_AWARENESS` | — | `THRUPLAY` | `page_id` |
| `VIDEO_VIEWS` | `OUTCOME_AWARENESS` | — | `TWO_SECOND_CONTINUOUS_VIDEO_VIEWS` | `page_id` |
| `VIDEO_VIEWS` | `OUTCOME_ENGAGEMENT` | `ON_VIDEO` | `THRUPLAY` | — |
| `VIDEO_VIEWS` | `OUTCOME_ENGAGEMENT` | `ON_VIDEO` | `TWO_SECOND_CONTINUOUS_VIDEO_VIEWS` | — |
| `LEAD_GENERATION` | `OUTCOME_LEADS` | `ON_AD` | `LEAD_GENERATION` | `page_id` |
| `LEAD_GENERATION` | `OUTCOME_LEADS` | `ON_AD` | `QUALITY_LEAD` | `page_id` |
| `LEAD_GENERATION` | `OUTCOME_LEADS` | `LEAD_FROM_MESSENGER` | `LEAD_GENERATION` | `page_id` |
| `LEAD_GENERATION` | `OUTCOME_LEADS` | `LEAD_FROM_IG_DIRECT` | `LEAD_GENERATION` | `page_id` |
| `LEAD_GENERATION` | `OUTCOME_LEADS` | `PHONE_CALL` | `QUALITY_CALL` | `page_id` |
| `MESSAGES` | `OUTCOME_ENGAGEMENT` | `MESSENGER` | `CONVERSATIONS` | `page_id` |
| `MESSAGES` | `OUTCOME_ENGAGEMENT` | `MESSENGER` | `LINK_CLICKS` | `page_id` |
| `MESSAGES` | `OUTCOME_ENGAGEMENT` | `MESSENGER` | `LEAD_GENERATION` | `page_id` |
| `CONVERSIONS`<br><br>(See [Available conversion locations and events by objective in Meta Ads Manager](https://www.facebook.com/business/help/2035196646663270) for more information on available conversion events by objective.) | `OUTCOME_ENGAGEMENT` | — | `OFFSITE_CONVERSIONS` | `pixel_id`, `custom_event_type` |
| `CONVERSIONS`<br><br>(See [Available conversion locations and events by objective in Meta Ads Manager](https://www.facebook.com/business/help/2035196646663270) for more information on available conversion events by objective.) | `OUTCOME_ENGAGEMENT` | — | `OFFSITE_CONVERSIONS` | `application_id`, `object_store_url` |
| `CONVERSIONS`<br><br>(See [Available conversion locations and events by objective in Meta Ads Manager](https://www.facebook.com/business/help/2035196646663270) for more information on available conversion events by objective.) | `OUTCOME_ENGAGEMENT` | — | `LINK_CLICKS` | `pixel_id`, `custom_event_type` |
| `CONVERSIONS`<br><br>(See [Available conversion locations and events by objective in Meta Ads Manager](https://www.facebook.com/business/help/2035196646663270) for more information on available conversion events by objective.) | `OUTCOME_ENGAGEMENT` | — | `LINK_CLICKS` | `application_id`, `object_store_url` |
| `CONVERSIONS`<br><br>(See [Available conversion locations and events by objective in Meta Ads Manager](https://www.facebook.com/business/help/2035196646663270) for more information on available conversion events by objective.) | `OUTCOME_ENGAGEMENT` | — | `REACH` | `pixel_id`, `custom_event_type` |
| `CONVERSIONS`<br><br>(See [Available conversion locations and events by objective in Meta Ads Manager](https://www.facebook.com/business/help/2035196646663270) for more information on available conversion events by objective.) | `OUTCOME_ENGAGEMENT` | — | `REACH` | `application_id`, `object_store_url` |
| `CONVERSIONS`<br><br>(See [Available conversion locations and events by objective in Meta Ads Manager](https://www.facebook.com/business/help/2035196646663270) for more information on available conversion events by objective.) | `OUTCOME_ENGAGEMENT` | — | `LANDING_PAGE_VIEWS` | `pixel_id`, `custom_event_type` |
| `CONVERSIONS`<br><br>(See [Available conversion locations and events by objective in Meta Ads Manager](https://www.facebook.com/business/help/2035196646663270) for more information on available conversion events by objective.) | `OUTCOME_ENGAGEMENT` | — | `IMPRESSIONS` | `pixel_id`, `custom_event_type` |
| `CONVERSIONS`<br><br>(See [Available conversion locations and events by objective in Meta Ads Manager](https://www.facebook.com/business/help/2035196646663270) for more information on available conversion events by objective.) | `OUTCOME_LEADS` | — | `OFFSITE_CONVERSIONS` | `pixel_id`, `custom_event_type` |
| `CONVERSIONS`<br><br>(See [Available conversion locations and events by objective in Meta Ads Manager](https://www.facebook.com/business/help/2035196646663270) for more information on available conversion events by objective.) | `OUTCOME_LEADS` | — | `OFFSITE_CONVERSIONS` | `application_id`, `object_store_url` |
| `CONVERSIONS`<br><br>(See [Available conversion locations and events by objective in Meta Ads Manager](https://www.facebook.com/business/help/2035196646663270) for more information on available conversion events by objective.) | `OUTCOME_LEADS` | — | `LINK_CLICKS` | `pixel_id`, `custom_event_type` |
| `CONVERSIONS`<br><br>(See [Available conversion locations and events by objective in Meta Ads Manager](https://www.facebook.com/business/help/2035196646663270) for more information on available conversion events by objective.) | `OUTCOME_LEADS` | — | `LINK_CLICKS` | `application_id`, `object_store_url` |
| `CONVERSIONS`<br><br>(See [Available conversion locations and events by objective in Meta Ads Manager](https://www.facebook.com/business/help/2035196646663270) for more information on available conversion events by objective.) | `OUTCOME_LEADS` | — | `REACH` | `pixel_id`, `custom_event_type` |
| `CONVERSIONS`<br><br>(See [Available conversion locations and events by objective in Meta Ads Manager](https://www.facebook.com/business/help/2035196646663270) for more information on available conversion events by objective.) | `OUTCOME_LEADS` | — | `REACH` | `application_id`, `object_store_url` |
| `CONVERSIONS`<br><br>(See [Available conversion locations and events by objective in Meta Ads Manager](https://www.facebook.com/business/help/2035196646663270) for more information on available conversion events by objective.) | `OUTCOME_LEADS` | — | `LANDING_PAGE_VIEWS` | `pixel_id`, `custom_event_type` |
| `CONVERSIONS`<br><br>(See [Available conversion locations and events by objective in Meta Ads Manager](https://www.facebook.com/business/help/2035196646663270) for more information on available conversion events by objective.) | `OUTCOME_LEADS` | — | `IMPRESSIONS` | `pixel_id`, `custom_event_type` |
| `CONVERSIONS`<br><br>(See [Available conversion locations and events by objective in Meta Ads Manager](https://www.facebook.com/business/help/2035196646663270) for more information on available conversion events by objective.) | `OUTCOME_SALES` | — | `OFFSITE_CONVERSIONS` | `pixel_id`, `custom_event_type` |
| `CONVERSIONS`<br><br>(See [Available conversion locations and events by objective in Meta Ads Manager](https://www.facebook.com/business/help/2035196646663270) for more information on available conversion events by objective.) | `OUTCOME_SALES` | — | `OFFSITE_CONVERSIONS` | `application_id`, `object_store_url` |
| `CONVERSIONS`<br><br>(See [Available conversion locations and events by objective in Meta Ads Manager](https://www.facebook.com/business/help/2035196646663270) for more information on available conversion events by objective.) | `OUTCOME_SALES` | `MESSENGER` | `CONVERSATIONS` | `page_id`, `pixel_id`, `custom_event_type` |
| `CONVERSIONS`<br><br>(See [Available conversion locations and events by objective in Meta Ads Manager](https://www.facebook.com/business/help/2035196646663270) for more information on available conversion events by objective.) | `OUTCOME_SALES` | `PHONE_CALL` | `QUALITY_CALL` | `page_id` |
| `PRODUCT_CATALOG_SALES` | `OUTCOME_SALES` | `WEBSITE` | `LINK_CLICKS` | Campaign: `product_catalog_id`<br><br>Ad set: `product_set_id`, `custom_event_type` |
| `STORE_VISITS` | `OUTCOME_AWARENESS` | — | `REACH` | `place_page_set_id` |

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group/ad_studies.md -->

## Ad Campaign Group Ad Studies

### Reading

AdCampaignGroupAdStudies

##### Example

#### HTTP
```
GET /v25.0/{campaign-id}/ad_studies HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{campaign-id}/ad_studies',
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
    "/{campaign-id}/ad_studies",
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
    "/{campaign-id}/ad_studies",
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
                               initWithGraphPath:@"/{campaign-id}/ad_studies"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bcampaign-id%7D%2Fad_studies&version=v25.0)

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

A list of [AdStudy](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-study) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group/addrafts.md -->

## Ad Campaign Group Addrafts

### Reading

AdCampaignGroupAdDrafts

##### Example

#### HTTP
```
GET /v25.0/{campaign-id}/addrafts HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{campaign-id}/addrafts',
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
    "/{campaign-id}/addrafts",
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
    "/{campaign-id}/addrafts",
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
                               initWithGraphPath:@"/{campaign-id}/addrafts"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bcampaign-id%7D%2Faddrafts&version=v25.0)

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

A list of AdDraft nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group/adlabels.md -->

## Ad Campaign Group Adlabels

### Reading

You can't perform this operation on this endpoint.

### Creating

You can't perform this operation on this endpoint.

### Updating

#### /{campaign_id}/adlabels
You can update an [AdLabel](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label) by making a POST request to [/{campaign_id}/adlabels](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group/adlabels).

##### Parameters

| Parameter | Description |
| --- | --- |
| `adlabels`<br><br>*list<Object>* | Specification of ad labels to be associated with the campaign<br><br>**[required]**<br> |
| `execution_options`<br><br>*list<enum{validate_only}>* | **Default value: **`Set`<br>An execution setting<br> `validate_only`: when this option is specified, the API call will not perform the mutation but will run through the validation rules against values of each field. <br>If the call passes validation or review, response will be `{"success": true}`. If the call does not pass, an error will be returned with more details. These options can be used to improve any UI to display errors to the user much sooner, e.g. as soon as a new value is typed into any field corresponding to this ad object, rather than at the upload/save stage, or after review.<br> |

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

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group/adrules_governed.md -->

## Ad Campaign Group Adrules Governed

### Reading

Ad rules that govern this campaign - by default, this only returns rules that either directly mention the campaign by id or indirectly through the set entity_type

##### Example

#### HTTP
```
GET /v25.0/{campaign-id}/adrules_governed HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{campaign-id}/adrules_governed',
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
    "/{campaign-id}/adrules_governed",
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
    "/{campaign-id}/adrules_governed",
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
                               initWithGraphPath:@"/{campaign-id}/adrules_governed"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bcampaign-id%7D%2Fadrules_governed&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `pass_evaluation`<br><br>*boolean* | If set, this will further filter the rules to only include those for which the campaign would evaluate to the boolean value of this param<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [AdRule](https://developers.facebook.com/docs/marketing-api/reference/ad-rule) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group/ads.md -->

## Ad Campaign Group Ads

### Reading

Ads under this campaign.

##### Example

#### HTTP
```
GET /v25.0/<AD_CAMPAIGN_ID>/ads?fields=name HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/<AD_CAMPAIGN_ID>/ads?fields=name',
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
    "/<AD_CAMPAIGN_ID>/ads",
    {
        "fields": "name"
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
params.putString("fields", "name");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/<AD_CAMPAIGN_ID>/ads",
    params,
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
NSDictionary *params = @{
  @"fields": @"name",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/<AD_CAMPAIGN_ID>/ads"
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
  -d 'fields="name"' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/<AD_CAMPAIGN_ID>/ads
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%3CAD_CAMPAIGN_ID%3E%2Fads%3Ffields%3Dname&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `date_preset`<br><br>*enum{today, yesterday, this_month, last_month, this_quarter, maximum, data_maximum, last_3d, last_7d, last_14d, last_28d, last_30d, last_90d, last_week_mon_sun, last_week_sun_sat, last_quarter, last_year, this_week_mon_today, this_week_sun_today, this_year}* | Date ranges container for benchmarking comparison<br> |
| `effective_status`<br><br>*list<string>* | Filter ads by effective status<br> |
| `time_range`<br><br>*{'since':YYYY-MM-DD,'until':YYYY-MM-DD}* | Date range used to aggregate insights metrics<br><br><br>`since` *datetime*<br>A date in the format of "YYYY-MM-DD", which means from the beginning midnight of that day.<br><br><br>`until` *datetime*<br>A date in the format of "YYYY-MM-DD", which means to the beginning midnight of the following day.<br> |
| `updated_since`<br><br>*integer* | SELF_EXPLANATORY<br> |

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

A list of [Ad](https://developers.facebook.com/docs/graph-api/reference/adgroup) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `insights`<br><br>*Edge<AdsInsights>* | Analytics summary for all objects<br> |
| `total_count`<br><br>*unsigned int32* | Total number of objects<br><br><br>**[default]**<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 3018 | The start date of the time range cannot be beyond 37 months from the current date |
| 104 | Incorrect signature |
| 190 | Invalid OAuth 2.0 Access Token |
| 200 | Permissions error |
| 2500 | Error parsing graph query |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group/adsets.md -->

## Ad Campaign Group Adsets

### Reading

Edge query from Ad Campaign to Ad Sets

##### Example

#### HTTP
```
GET /v25.0/<AD_CAMPAIGN_ID>/adsets?fields=name%2Cstart_time%2Cend_time%2Cdaily_budget%2Clifetime_budget HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/<AD_CAMPAIGN_ID>/adsets?fields=name%2Cstart_time%2Cend_time%2Cdaily_budget%2Clifetime_budget',
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
    "/<AD_CAMPAIGN_ID>/adsets",
    {
        "fields": "name,start_time,end_time,daily_budget,lifetime_budget"
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
params.putString("fields", "name,start_time,end_time,daily_budget,lifetime_budget");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/<AD_CAMPAIGN_ID>/adsets",
    params,
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
NSDictionary *params = @{
  @"fields": @"name,start_time,end_time,daily_budget,lifetime_budget",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/<AD_CAMPAIGN_ID>/adsets"
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
  -d 'fields="name,start_time,end_time,daily_budget,lifetime_budget"' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/<AD_CAMPAIGN_ID>/adsets
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%3CAD_CAMPAIGN_ID%3E%2Fadsets%3Ffields%3Dname%252Cstart_time%252Cend_time%252Cdaily_budget%252Clifetime_budget&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `date_preset`<br><br>*enum{today, yesterday, this_month, last_month, this_quarter, maximum, data_maximum, last_3d, last_7d, last_14d, last_28d, last_30d, last_90d, last_week_mon_sun, last_week_sun_sat, last_quarter, last_year, this_week_mon_today, this_week_sun_today, this_year}* | Preset date range used to aggregate insights metrics<br> |
| `effective_status`<br><br>*list<enum{ACTIVE, PAUSED, DELETED, PENDING_REVIEW, DISAPPROVED, PREAPPROVED, PENDING_BILLING_INFO, CAMPAIGN_PAUSED, ARCHIVED, ADSET_PAUSED, IN_PROCESS, WITH_ISSUES}>* | Filter adsets by effective status<br> |
| `is_completed`<br><br>*boolean* | Filter adsets by completed status<br> |
| `time_range`<br><br>*{'since':YYYY-MM-DD,'until':YYYY-MM-DD}* | Time range used to aggregate insights metrics<br><br><br>`since` *datetime*<br>A date in the format of "YYYY-MM-DD", which means from the beginning midnight of that day.<br><br><br>`until` *datetime*<br>A date in the format of "YYYY-MM-DD", which means to the beginning midnight of the following day.<br> |

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

A list of [AdSet](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `insights`<br><br>*Edge<AdsInsights>* | An analytics summary result for an Ad object<br> |
| `total_count`<br><br>*unsigned int32* | Total number of ad objects returned by the query<br><br><br>**[default]**<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 613 | Calls to this api have exceeded the rate limit. |
| 100 | Invalid parameter |
| 200 | Permissions error |
| 3018 | The start date of the time range cannot be beyond 37 months from the current date |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 190 | Invalid OAuth 2.0 Access Token |
| 104 | Incorrect signature |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |
| 2500 | Error parsing graph query |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group/budget_schedules.md -->

## Ad Campaign Group Budget Schedules

Budget scheduling allows you to schedule budget increases for your campaign or ad set budget based on days or times when you anticipate higher sales opportunities, peak traffic periods or other promotional time periods. You can find additional information in the [Meta Business Help Center](https://www.facebook.com/business/help/633318028866693) and in the [About budget scheduling](https://developers.facebook.com/docs/graph-api/reference/high-demand-period) section

### Reading

##### Example

#### HTTP
```
GET /v25.0/{campaign-id}/budget_schedules HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{campaign-id}/budget_schedules',
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
    "/{campaign-id}/budget_schedules",
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
    "/{campaign-id}/budget_schedules",
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
                               initWithGraphPath:@"/{campaign-id}/budget_schedules"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bcampaign-id%7D%2Fbudget_schedules&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

#### Search Parameter Usage Example :

If we have three high demand periods set up with following specs

```php
high_demand_periods:[{
      id:1,
      time_start:1,
      time_end:3,
      ...
},{
      id:2,
      time_start:3,
      time_end:5,
      ...
},{
      id:3,
      time_start:6,
      time_end:8,
      ...
}]
```

A request can be made with `time_start` prameter as shown below

```php
curl -X GET
 -d 'access_token={ACCESS_TOKEN}'
 https://graph.facebook.com/{API_VERSION}/{CAMPAIGN_ID}/budget_schedules?time_start=5
```

This request will fetch all high demand periods with `time_end` value greater than `time_start` parameter, returning

```php
data:[{
      id:3,
      time_start:6,
      time_end:8,
      ...
}]
```

A similar request can be made with `time_stop` parameter as shown below

```php
curl -X GET
 -d 'access_token={ACCESS_TOKEN}'
 https://graph.facebook.com/{API_VERSION}/{CAMPAIGN_ID}/budget_schedules?time_stop=3
```

This request will fetch all high demand periods with `time_start` value less than `time_stop` parameter, returning

```php
data:[{
      id:1,
      time_start:1,
      time_end:3,
      ...
}]
```

##### Parameters

| Parameter | Description |
| --- | --- |
| `time_start`<br><br>*datetime/timestamp* | Search period start time. Filters out any HDPs with stop time <= time_start from the response.<br> |
| `time_stop`<br><br>*datetime/timestamp* | Search period stop time. Filters out any HDPs with start time >= time_stop from the response.<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [HighDemandPeriod](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/high-demand-period) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 613 | Calls to this api have exceeded the rate limit. |
| 100 | Invalid parameter |

### Creating

#### /{campaign_id}/budget_schedules
You can make a POST request to *budget_schedules* edge from the following paths:

- [/{campaign_id}/budget_schedules](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group/budget_schedules)

When posting to this edge, no Graph object will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `budget_value`<br><br>*int64* | Amount of budget increase during the high demand period. Can be expressed in either an absolute amount, or a multiplier value. The type is specified through the budget value type.<br><br>**[required]**<br> |
| `budget_value_type`<br><br>*enum{ABSOLUTE, MULTIPLIER}* | Type of budget value. This sets if the specified budget value is an increase by an absolute amount or by a multiplier value.<br><br>**[required]**<br> |
| `time_end`<br><br>*int64* | Time when the high demand period should end.<br><br>**[required]**<br> |
| `time_start`<br><br>*int64* | Time when the high demand period should start.<br><br>**[required]**<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group/copies.md -->

## Ad Campaign Group Copies

Create a duplicate campaign based on an existing one.

**Note:** The Marketing API has it is own rate limiting logic. If you are encountering errors mentioning a reached limit, see [Rate Limiting](https://developers.facebook.com/documentation/ads-commerce/marketing-api/overview/rate-limiting).

### Reading

This endpoint returns copies of a specific ad campaign.

##### Example

#### HTTP
```
GET /v25.0/{campaign-id}/copies HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{campaign-id}/copies',
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
    "/{campaign-id}/copies",
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
    "/{campaign-id}/copies",
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
                               initWithGraphPath:@"/{campaign-id}/copies"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bcampaign-id%7D%2Fcopies&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `date_preset`<br><br>*enum{today, yesterday, this_month, last_month, this_quarter, maximum, data_maximum, last_3d, last_7d, last_14d, last_28d, last_30d, last_90d, last_week_mon_sun, last_week_sun_sat, last_quarter, last_year, this_week_mon_today, this_week_sun_today, this_year}* | Preset date range used to aggregate insights metrics<br> |
| `effective_status`<br><br>*list<enum{ACTIVE, PAUSED, DELETED, PENDING_REVIEW, DISAPPROVED, PREAPPROVED, PENDING_BILLING_INFO, CAMPAIGN_PAUSED, ARCHIVED, ADSET_PAUSED, IN_PROCESS, WITH_ISSUES}>* | **Default value: **`Vec`<br>Filter adsets by effective status<br> |
| `is_completed`<br><br>*boolean* | Filter adsets by completed status<br> |
| `time_range`<br><br>*{'since':YYYY-MM-DD,'until':YYYY-MM-DD}* | Time range used to aggregate insights metrics<br><br><br>`since` *datetime*<br>A date in the format of "YYYY-MM-DD", which means from the beginning midnight of that day.<br><br><br>`until` *datetime*<br>A date in the format of "YYYY-MM-DD", which means to the beginning midnight of the following day.<br> |

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

A list of [Campaign](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `insights`<br><br>*Edge<AdsInsights>* | Analytics summary for all objects<br> |
| `total_count`<br><br>*unsigned int32* | Total number of objects<br><br><br>**[default]**<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 104 | Incorrect signature |

### Creating

#### /{campaign_id}/copies
You can make a POST request to *copies* edge from the following paths:

- [/{campaign_id}/copies](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group/copies)

When posting to this edge, a [Campaign](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `deep_copy`<br><br>*boolean* | **Default value: **`false`<br>Whether to copy all the child ads. Limits: the total number of children ads to copy should not exceed 3 for a synchronous call and 51 for an asynchronous call.<br> |
| `end_time`<br><br>*datetime* | For deep copy, the end time of the sets under the copied campaign, e.g. `2015-03-12 23:59:59-07:00` or `2015-03-12 23:59:59 PDT`. UTC UNIX timestamp. When creating a set with a daily budget, specify `end_time=0` to set the set to be ongoing without end date. If not set, the copied sets will inherit the end time from the original set<br> |
| `parameter_overrides`<br><br>*Campaign spec* | parameter_overrides<br> |
| `rename_options`<br><br>*JSON or object-like arrays* | Rename options<br><br><br>`rename_strategy` *enum {DEEP_RENAME, ONLY_TOP_LEVEL_RENAME, NO_RENAME}*<br><br>**Default value: **`ONLY_TOP_LEVEL_RENAME`<br>`DEEP_RENAME`: will change this object's name and children's names in the copied object. `ONLY_TOP_LEVEL_RENAME`: will change the this object's name but won't change the children's name in the copied object. `NO_RENAME`: will change no name in the copied object<br><br><br>`rename_prefix` *string*<br>A prefix to copy names. Defaults to null if not provided.<br><br><br>`rename_suffix` *string*<br>A suffix to copy names. Defaults to null if not provided and appends a localized string of `- Copy` based on the ad account locale.<br> |
| `start_time`<br><br>*datetime* | For deep copy, the start time of the sets under the copied campaign, e.g. `2015-03-12 23:59:59-07:00` or `2015-03-12 23:59:59 PDT`. UTC UNIX timestamp. If not set, the copied sets will inherit the start time from the original set<br> |
| `status_option`<br><br>*enum {ACTIVE, PAUSED, INHERITED_FROM_SOURCE}* | **Default value: **`PAUSED`<br>`ACTIVE`: the copied campaign will have active status. `PAUSED`: the copied campaign will have paused status. `INHERITED_FROM_SOURCE`: the copied campaign will have the parent status.<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *copied_campaign_id* in the return type.

```
Struct  {
copied_campaign_id: numeric string,
ad_object_ids:  List  [ Struct  {
ad_object_type: enum {
unique_adcreative,
ad,
ad_set,
campaign,
opportunities,
privacy_info_center,
topline,
ad_account,
product},
source_id: numeric string,
copied_id: numeric string,
}],
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |
| 200 | Permissions error |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group/insights.md -->

## Ad Campaign Group Insights

### Reading

Provides insights on your advertising performance. Allows for deduped metrics across child objects, such as `unique_clicks`, sorting of metrics, and async reporting.

##### Example

#### HTTP
```
GET /v25.0/<AD_SET_ID>/insights?fields=impressions&breakdown=publisher_platform HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/<AD_SET_ID>/insights?fields=impressions&breakdown=publisher_platform',
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
    "/<AD_SET_ID>/insights",
    {
        "fields": "impressions",
        "breakdown": "publisher_platform"
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
params.putString("fields", "impressions");
params.putString("breakdown", "publisher_platform");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/<AD_SET_ID>/insights",
    params,
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
NSDictionary *params = @{
  @"fields": @"impressions",
  @"breakdown": @"publisher_platform",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/<AD_SET_ID>/insights"
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
  -d 'fields="impressions"' \
  -d 'breakdown="publisher_platform"' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/<AD_SET_ID>/insights
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%3CAD_SET_ID%3E%2Finsights%3Ffields%3Dimpressions%26breakdown%3Dpublisher_platform&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `action_attribution_windows`<br><br>*list<enum{1d_view, 7d_view, 28d_view, 1d_click, 7d_click, 28d_click, 1d_ev, dda, default, 7d_view_first_conversion, 28d_view_first_conversion, 7d_view_all_conversions, 28d_view_all_conversions, skan_view, skan_click, skan_click_second_postback, skan_view_second_postback, skan_click_third_postback, skan_view_third_postback, incrementality, custom, 1d_sequenced, 7d_sequenced, 28d_sequenced}>* | **Default value: **`default`<br>The attribution window for the actions. <br><br>The attribution window determines the window (e.g. 7d) and engagement type (e.g click) that’s used as a filter to report actions. See [About attribution settings and models](https://www.facebook.com/business/help/460276478298895?id=561906377587030) for examples.<br><br>The `default` option means `["7d_click","1d_view"]`.<br> |
| `action_breakdowns`<br><br>*list<enum{action_device, conversion_destination, matched_persona_id, matched_persona_name, signal_source_bucket, standard_event_content_type, action_canvas_component_name, action_carousel_card_id, action_carousel_card_name, action_destination, action_reaction, action_target_id, action_type, action_video_sound, action_video_type, is_business_ai_assisted}>* | **Default value: **`Vec`<br>How to break down action results. Supports more than one breakdowns. Default value is ["action_type"].<br><br><br>Note: you must also include `actions` field whenever `action_breakdowns` is specified.<br> |
| `action_report_time`<br><br>*enum{impression, conversion, mixed, lifetime}* | Determines the report time of action stats. For example, if a person<br>saw the ad on Jan 1st but converted on Jan 2nd, when you query the API<br>with `action_report_time=impression`, you see a conversion on Jan<br>1st. When you query the API with `action_report_time=conversion`, you see a conversion on Jan 2nd.<br> |
| `breakdowns`<br><br>*list<enum{ad_extension_domain, ad_extension_url, ad_format_asset, age, app_id, body_asset, breakdown_ad_objective, breakdown_reporting_ad_id, call_to_action_asset, coarse_conversion_value, comscore_market, country, creative_automation_asset_id, creative_relaxation_asset_type, crm_advertiser_l12_territory_ids, crm_advertiser_subvertical_id, crm_advertiser_vertical_id, crm_ult_advertiser_id, description_asset, fidelity_type, flexible_format_asset_type, gen_ai_asset_type, gender, hsid, image_asset, impression_device, instagram_ads_follow_type, instagram_ads_instagram_media_product_type, instagram_ads_time_since_creation_bucket, internal_campaign_id, is_auto_advance, is_conversion_id_modeled, is_rendered_as_delayed_skip_ad, landing_destination, link_url_asset, mdsa_landing_destination, media_asset_url, media_creator, media_destination_url, media_format, media_origin_url, media_text_content, media_type, pa_creator_ig_handle, postback_sequence_index, product_brand_breakdown, product_category_breakdown, product_custom_label_0_breakdown, product_custom_label_1_breakdown, product_custom_label_2_breakdown, product_custom_label_3_breakdown, product_custom_label_4_breakdown, product_group_content_id_breakdown, product_id, redownload, region, rta_ugc_topic, skan_campaign_id, skan_conversion_id, skan_version, sot_attribution_model_type, sot_attribution_window, sot_channel, sot_event_type, sot_source, title_asset, user_persona_id, user_persona_name, video_asset, zip, rule_set_id, rule_set_name, dma, frequency_value, overlap_segment, hourly_stats_aggregated_by_advertiser_time_zone, hourly_stats_aggregated_by_audience_time_zone, mmm, place_page_id, publisher_platform, platform_position, device_platform, standard_event_content_type, conversion_destination, signal_source_bucket, reels_trending_topic, marketing_messages_btn_name, impression_view_time_advertiser_hour_v2}>* | How to break down the result. For more than one breakdown, only certain combinations are available: See [Combining Breakdowns](https://developers.facebook.com/documentation/ads-commerce/marketing-api/insights/breakdowns#combiningbreakdowns) and the [Breakdowns](https://developers.facebook.com/documentation/ads-commerce/marketing-api/insights/breakdowns) page. The option `impression_device` cannot be used by itself.<br> |
| `date_preset`<br><br>*enum{today, yesterday, this_month, last_month, this_quarter, maximum, data_maximum, last_3d, last_7d, last_14d, last_28d, last_30d, last_90d, last_week_mon_sun, last_week_sun_sat, last_quarter, last_year, this_week_mon_today, this_week_sun_today, this_year}* | **Default value: **`last_30d`<br>Represents a relative time range. This field is ignored if `time_range` or `time_ranges` is specified.<br> |
| `default_summary`<br><br>*boolean* | **Default value: **`false`<br>Determine whether to return a summary. If `summary` is set, this param is be ignored; otherwise, a summary section with the same fields as specified by `fields` will be included in the summary section.<br> |
| `export_columns`<br><br>*list<string>* | Select fields on the exporting report file. It is an optional param. Exporting columns are equal to the param fields, if you leave this param blank<br> |
| `export_format`<br><br>*string* | Set the format of exporting report file. If the export_format is set, Report file is asyncrhonizely generated. It expects ["xls", "csv"].<br> |
| `export_name`<br><br>*string* | Set the file name of the exporting report.<br> |
| `fields`<br><br>*list<string>* | Fields to be retrieved. Default behavior is to return impressions and spend.<br> |
| `filtering`<br><br>*list<Filter Object>* | **Default value: **`Vec`<br>Filters on the report data. This parameter is an array of filter objects.<br><br><br>`field` *string*<br>**[required]**<br><br><br>`operator` *enum {EQUAL, NOT_EQUAL, GREATER_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN, LESS_THAN_OR_EQUAL, IN_RANGE, NOT_IN_RANGE, CONTAIN, NOT_CONTAIN, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY, STEM_MATCH, IN, NOT_IN, STARTS_WITH, ENDS_WITH, ANY, ALL, AFTER, BEFORE, ON_OR_AFTER, ON_OR_BEFORE, NONE, TOP}*<br>**[required]**<br><br><br>`value` *string*<br>**[required]**<br> |
| `level`<br><br>*enum {ad, adset, campaign, account}* | Represents the level of result.<br> |
| `limit`<br><br>*integer* | limit<br> |
| `product_id_limit`<br><br>*integer* | Maximum number of product ids to be returned for each ad when breakdown by `product_id`.<br> |
| `sort`<br><br>*list<string>* | **Default value: **`Vec`<br>Field to sort the result, and direction of sorting. You can specify sorting direction by appending "_ascending" or "_descending" to the sort field. For example, "reach_descending". For actions, you can sort by action type in form of "actions:<action_type>". For example, ["actions:link_click_ascending"]. This array supports no more than one element. By default, the sorting direction is ascending.<br> |
| `summary`<br><br>*list<string>* | If this param is used, a summary section will be included, with the fields listed in this param.<br> |
| `summary_action_breakdowns`<br><br>*list<enum{action_device, conversion_destination, matched_persona_id, matched_persona_name, signal_source_bucket, standard_event_content_type, action_canvas_component_name, action_carousel_card_id, action_carousel_card_name, action_destination, action_reaction, action_target_id, action_type, action_video_sound, action_video_type, is_business_ai_assisted}>* | **Default value: **`Vec`<br>Similar to `action_breakdowns`, but applies to summary. Default value is ["action_type"].<br> |
| `time_increment`<br><br>*enum{monthly, all_days} or integer* | **Default value: **`all_days`<br>If it is an integer, it is the number of days from 1 to 90. After you pick a reporting period by using `time_range` or `date_preset`, you may choose to have the results for the whole period, or have results for smaller time slices. If "all_days" is used, it means one result set for the whole period. If "monthly" is used, you will get one result set for each calendar month in the given period. Or you can have one result set for each N-day period specified by this param. This param is ignored if `time_ranges` is specified.<br> |
| `time_range`<br><br>*{'since':YYYY-MM-DD,'until':YYYY-MM-DD}* | A single time range object. UNIX timestamp not supported. This param is ignored if `time_ranges` is provided.<br><br><br>`since` *datetime*<br>A date in the format of "YYYY-MM-DD", which means from the beginning midnight of that day.<br><br><br>`until` *datetime*<br>A date in the format of "YYYY-MM-DD", which means to the beginning midnight of the following day.<br> |
| `time_ranges`<br><br>*list<{'since':YYYY-MM-DD,'until':YYYY-MM-DD}>* | Array of time range objects. Time ranges can overlap, for example to return cumulative insights. Each time range will have one result set. You cannot have more granular results with `time_increment` setting in this case.If `time_ranges` is specified, `date_preset`, `time_range` and `time_increment` are ignored.<br><br><br>`since` *datetime*<br>A date in the format of "YYYY-MM-DD", which means from the beginning midnight of that day.<br><br><br>`until` *datetime*<br>A date in the format of "YYYY-MM-DD", which means to the beginning midnight of the following day.<br> |
| `use_account_attribution_setting`<br><br>*boolean* | **Default value: **`false`<br>When this parameter is set to `true`, your ads results will be shown using the attribution settings defined for the ad account.<br> |
| `use_unified_attribution_setting`<br><br>*boolean* | When this parameter is set to `true`, your ads results will be shown using unified attribution settings defined at ad set level and parameter `use_account_attribution_setting` will be ignored.<br> |

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

A list of AdsInsights nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `account_currency`<br><br>*string* | Currency that is used by your ad account.<br> |
| `account_id`<br><br>*numeric string* | The ID number of your ad account, which groups your advertising activity. Your ad account includes your campaigns, ads and billing.<br><br><br>**[default]**<br> |
| `account_name`<br><br>*string* | The name of your ad account, which groups your advertising activity. Your ad account includes your campaigns, ads and billing.<br> |
| `action_values`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The total value of all conversions attributed to your ads.<br> |
| `actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The total number of actions Accounts Center accounts took that are attributed to your ads. Actions may include engagement, clicks or conversions.<br> |
| `actions_per_impression`<br><br>*numeric string* | Total number of actions divided by the number of impessions.<br> |
| `actions_results`<br><br>*[AdsActionStats](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The number of actions as a result of your ad. The results you see here are based on your objective.<br> |
| `activity_recency`<br><br>*string* | activity_recency<br> |
| `ad_click_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | ad_click_actions<br> |
| `ad_format_asset`<br><br>*string* | ad_format_asset<br> |
| `ad_id`<br><br>*numeric string* | The unique ID of the ad you're viewing in reporting.<br><br><br>**[default]**<br> |
| `ad_impression_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | ad_impression_actions<br> |
| `ad_name`<br><br>*string* | The name of the ad you're viewing in reporting.<br> |
| `adjusted_offline_purchase`<br><br>*numeric string* | The number of purchase events that occurred offline and are attributed to your ads, after adjusting attribution settings and based on information received from your offline event set.<br> |
| `adset_end`<br><br>*string* | The date your ad set is scheduled to stop.<br> |
| `adset_id`<br><br>*numeric string* | The unique ID of the ad set you're viewing in reporting. An ad set is a group of ads that share the same budget, schedule, delivery optimization and targeting.<br><br><br>**[default]**<br> |
| `adset_name`<br><br>*string* | The name of the ad set you're viewing in reporting. An ad set is a group of ads that share the same budget, schedule, delivery optimization and targeting.<br> |
| `adset_start`<br><br>*string* | The date your ad set is scheduled to start running.<br> |
| `anchor_event_attribution_setting`<br><br>*string* | anchor_event_attribution_setting<br> |
| `anchor_events_performance_indicator`<br><br>*string* | anchor_events_performance_indicator<br> |
| `app_store_clicks`<br><br>*numeric string* | The number of clicks on links to an app store in your ads.<br> |
| `attention_events_per_impression`<br><br>*numeric string* | attention_events_per_impression<br> |
| `attention_events_unq_per_reach`<br><br>*numeric string* | attention_events_unq_per_reach<br> |
| `attribution_setting`<br><br>*string* | The default attribution window to be used when attribution result is calculated. Each ad set has its own attribution setting value. The attribution setting for campaign or account is calculated based on existing ad sets.<br> |
| `auction_bid`<br><br>*numeric string* | auction_bid<br> |
| `auction_competitiveness`<br><br>*numeric string* | auction_competitiveness<br> |
| `auction_max_competitor_bid`<br><br>*numeric string* | auction_max_competitor_bid<br> |
| `body_asset`<br><br>*AdAssetBody* | body_asset<br> |
| `buying_type`<br><br>*string* | The method by which you pay for and target ads in your campaigns: through dynamic auction bidding, fixed-price bidding, or reach and frequency buying. This field is currently only visible at the campaign level.<br> |
| `call_to_action_clicks`<br><br>*numeric string* | The number of times Accounts Center accounts clicked the call-to-action button on your ad.<br> |
| `campaign_end`<br><br>*string* | The date your campaign is scheduled to stop.<br> |
| `campaign_id`<br><br>*numeric string* | The unique ID number of the ad campaign you're viewing in reporting. Your campaign contains ad sets and ads.<br><br><br>**[default]**<br> |
| `campaign_name`<br><br>*string* | The name of the ad campaign you're viewing in reporting. Your campaign contains ad sets and ads.<br> |
| `campaign_start`<br><br>*string* | The date your campaign is scheduled to start.<br> |
| `cancel_subscription_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | cancel_subscription_actions<br> |
| `canvas_avg_view_percent`<br><br>*numeric string* | The average percentage of the Instant Experience that Accounts Center accounts saw. An Instant Experience is a screen that opens after someone interacts with your ad on a mobile device. It may include a series of interactive or multimedia components, including video, images product catalog and more.<br> |
| `canvas_avg_view_time`<br><br>*numeric string* | The average total time, in seconds, that Accounts Center accounts spent viewing an Instant Experience. An Instant Experience is a screen that opens after someone interacts with your ad on a mobile device. It may include a series of interactive or multimedia components, including video, images product catalog and more.<br> |
| `card_views`<br><br>*numeric string* | The number of times Accounts Center accounts viewed a product from your catalog in an ad. If you're using a carousel format, Accounts Center accounts may view multiple products in a single ad. Counts are updated daily, views for today are not included. This metric is currently in beta, and is only available for ads connected to a product catalog. This metric is in development.<br> |
| `catalog_segment_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The number of actions performed attributed to your ads promoting your catalog segment, broken down by action type.<br> |
| `catalog_segment_value`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The total value of all conversions from your catalog segment attributed to your ads.<br> |
| `catalog_segment_value_in_catalog_currency`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The total value of all conversions from your catalog segment attributed to your ads, in the same currency as the catalog.<br> |
| `catalog_segment_value_mobile_purchase_roas`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The total return on ad spend (ROAS) from mobile app purchases for your catalog segment.<br> |
| `catalog_segment_value_omni_purchase_roas`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The total return on ad spend (ROAS) from all purchases for your catalog segment.<br> |
| `catalog_segment_value_website_purchase_roas`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The total return on ad spend (ROAS) from website purchases for your catalog segment.<br> |
| `clicks`<br><br>*numeric string* | The number of clicks on your ads.<br> |
| `coarse_conversion_value`<br><br>*string* | Allows advertisers and ad networks to receive directional post-install quality insights when the volume of campaign conversions isn't high enough to meet the privacy threshold needed to unlock the standard conversion value. Possible values of this breakdown are `low`, `medium` and `high`.<br><br>**Note:** This breakdown is only supported by the `total_postbacks_detailed_v4` field.<br> |
| `comparison_node`<br><br>*AdsInsightsComparison* | Parent node that encapsulates fields to be compared (current time range Vs comparison time range)<br> |
| `comscore_market`<br><br>*string* | comscore_market<br> |
| `conditional_time_spent_ms_over_10s_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | conditional_time_spent_ms_over_10s_actions<br> |
| `conditional_time_spent_ms_over_15s_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | conditional_time_spent_ms_over_15s_actions<br> |
| `conditional_time_spent_ms_over_2s_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | conditional_time_spent_ms_over_2s_actions<br> |
| `conditional_time_spent_ms_over_3s_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | conditional_time_spent_ms_over_3s_actions<br> |
| `conditional_time_spent_ms_over_6s_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | conditional_time_spent_ms_over_6s_actions<br> |
| `configurable_attribution_action`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | configurable attribution action<br> |
| `configurable_attribution_actionvalue`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | configurable attribution actionvalue<br> |
| `configurable_audience_overlap_reach`<br><br>*numeric string* | configurable audience overlap reach<br> |
| `configurable_reachbyfrequency_action`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | configurable reachbyfrequency action<br> |
| `configurable_reachbyfrequency_converters_count`<br><br>*numeric string* | configurable reachbyfrequency converters count<br> |
| `configurable_reachbyfrequency_impressions_cost`<br><br>*numeric string* | configurable reachbyfrequency impressions cost<br> |
| `configurable_reachbyfrequency_impressions_count`<br><br>*numeric string* | configurable reachbyfrequency impressions count<br> |
| `configurable_reachbyfrequency_reach`<br><br>*numeric string* | configurable reachbyfrequency reach<br> |
| `contact_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | contact_actions<br> |
| `contact_value`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | contact_value<br> |
| `conversion_values`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | conversion_values<br> |
| `conversions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | conversions<br> |
| `converted_product_app_custom_event_fb_mobile_purchase`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | converted_product_app_custom_event_fb_mobile_purchase<br> |
| `converted_product_app_custom_event_fb_mobile_purchase_value`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | converted_product_app_custom_event_fb_mobile_purchase_value<br> |
| `converted_product_offline_purchase`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | converted_product_offline_purchase<br> |
| `converted_product_offline_purchase_value`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | converted_product_offline_purchase_value<br> |
| `converted_product_omni_purchase`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | converted_product_omni_purchase<br> |
| `converted_product_omni_purchase_values`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | converted_product_omni_purchase_values<br> |
| `converted_product_quantity`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The number of products purchased which are recorded by your merchant partner's pixel or app SDK for a given product ID and driven by your ads. Has to be used together with converted product ID breakdown.<br> |
| `converted_product_value`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The value of purchases recorded by your merchant partner's pixel or app SDK for a given product ID and driven by your ads. Has to be used together with converted product ID breakdown.<br> |
| `converted_product_website_pixel_purchase`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | converted_product_website_pixel_purchase<br> |
| `converted_product_website_pixel_purchase_value`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | converted_product_website_pixel_purchase_value<br> |
| `converted_promoted_product_app_custom_event_fb_mobile_purchase`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | converted_promoted_product_app_custom_event_fb_mobile_purchase<br> |
| `converted_promoted_product_app_custom_event_fb_mobile_purchase_value`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | converted_promoted_product_app_custom_event_fb_mobile_purchase_value<br> |
| `converted_promoted_product_offline_purchase`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | converted_promoted_product_offline_purchase<br> |
| `converted_promoted_product_offline_purchase_value`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | converted_promoted_product_offline_purchase_value<br> |
| `converted_promoted_product_omni_purchase`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | converted_promoted_product_omni_purchase<br> |
| `converted_promoted_product_omni_purchase_values`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | converted_promoted_product_omni_purchase_values<br> |
| `converted_promoted_product_quantity`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | converted_promoted_product_quantity<br> |
| `converted_promoted_product_value`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | converted_promoted_product_value<br> |
| `converted_promoted_product_website_pixel_purchase`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | converted_promoted_product_website_pixel_purchase<br> |
| `converted_promoted_product_website_pixel_purchase_value`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | converted_promoted_product_website_pixel_purchase_value<br> |
| `cost_per_15_sec_video_view`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | cost_per_15_sec_video_view<br> |
| `cost_per_2_sec_continuous_video_view`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | cost_per_2_sec_continuous_video_view<br> |
| `cost_per_action_result`<br><br>*[AdsActionStats](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The average you paid for each action associated with your objective.<br> |
| `cost_per_action_type`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The average cost of a relevant action.<br> |
| `cost_per_ad_click`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | cost_per_ad_click<br> |
| `cost_per_completed_video_view`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | cost_per_completed_video_view<br> |
| `cost_per_contact`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | cost_per_contact<br> |
| `cost_per_conversion`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | cost_per_conversion<br> |
| `cost_per_customize_product`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | cost_per_customize_product<br> |
| `cost_per_dda_countby_convs`<br><br>*numeric string* | cost_per_dda_countby_convs<br> |
| `cost_per_donate`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | cost_per_donate<br> |
| `cost_per_dwell`<br><br>*numeric string* | The average cost per 1,000 Dwells<br> |
| `cost_per_dwell_3_sec`<br><br>*numeric string* | cost_per_dwell_3_sec<br> |
| `cost_per_dwell_5_sec`<br><br>*numeric string* | cost_per_dwell_5_sec<br> |
| `cost_per_dwell_7_sec`<br><br>*numeric string* | cost_per_dwell_7_sec<br> |
| `cost_per_find_location`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | cost_per_find_location<br> |
| `cost_per_inline_link_click`<br><br>*numeric string* | The average cost of each inline link click.<br> |
| `cost_per_inline_post_engagement`<br><br>*numeric string* | The average cost of each inline post engagement.<br> |
| `cost_per_message_delivered`<br><br>*numeric string* | The average cost per message delivered.<br> |
| `cost_per_objective_result`<br><br>*list<AdsInsightsResult>* | The average cost per objective result from your ads. Objective results are what you're trying to get the most of in your ad campaign, based on the objective you selected.<br> |
| `cost_per_one_thousand_ad_impression`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | cost_per_one_thousand_ad_impression<br> |
| `cost_per_outbound_click`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The average cost for each outbound click.<br> |
| `cost_per_result`<br><br>*list<AdsInsightsResult>* | The average cost per result from your ads.<br> |
| `cost_per_schedule`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | cost_per_schedule<br> |
| `cost_per_start_trial`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | cost_per_start_trial<br> |
| `cost_per_submit_application`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | cost_per_submit_application<br> |
| `cost_per_subscribe`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | cost_per_subscribe<br> |
| `cost_per_thruplay`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The average cost for each ThruPlay. This metric is in development.<br> |
| `cost_per_total_action`<br><br>*numeric string* | The average cost of a relevant action.<br> |
| `cost_per_unique_action_type`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The average cost of each unique action. This metric is estimated.<br> |
| `cost_per_unique_click`<br><br>*numeric string* | The average cost for each unique click (all). This metric is estimated.<br> |
| `cost_per_unique_conversion`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | cost_per_unique_conversion<br> |
| `cost_per_unique_inline_link_click`<br><br>*numeric string* | The average cost of each unique inline link click. This metric is estimated.<br> |
| `cost_per_unique_outbound_click`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The average cost for each unique outbound click. This metric is estimated.<br> |
| `country`<br><br>*string* | country<br> |
| `cpc`<br><br>*numeric string* | The average cost for each click (all).<br> |
| `cpm`<br><br>*numeric string* | The average cost for 1,000 impressions.<br> |
| `cpp`<br><br>*numeric string* | The average cost to reach 1,000 Accounts Center accounts. This metric is estimated.<br> |
| `created_time`<br><br>*string* | created_time<br> |
| `creative_automation_asset_id`<br><br>*AdAssetMedia* | creative_automation_asset_id<br> |
| `creative_diversity_data`<br><br>*list<CreativeDiversityData>* | creative diversity data<br> |
| `creative_diversity_label`<br><br>*string* | creative diversity label<br> |
| `creative_diversity_score`<br><br>*string* | creative diversity score<br> |
| `creative_fatigue_summary`<br><br>*list<CreativeFatigueSummary>* | creative fatigue summary<br> |
| `creative_fatigued_ads`<br><br>*list<CreativeFatiguedAds>* | creative fatigued ads<br> |
| `creative_relaxation_asset_type`<br><br>*string* | creative_relaxation_asset_type<br> |
| `ctr`<br><br>*numeric string* | The percentage of times Accounts Center accounts saw your ad and performed a click (all).<br> |
| `customize_product_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | customize_product_actions<br> |
| `customize_product_value`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | customize_product_value<br> |
| `date_start`<br><br>*string* | The start date for your data. This is controlled by the date range you've selected for your reporting view.<br><br><br>**[default]**<br> |
| `date_stop`<br><br>*string* | The end date for your data. This is controlled by the date range you've selected for your reporting view.<br><br><br>**[default]**<br> |
| `dda_countby_convs`<br><br>*numeric string* | dda_countby_convs<br> |
| `dda_results`<br><br>*list<AdsInsightsDdaResult>* | dda_results<br> |
| `deduping_1st_source_ratio`<br><br>*numeric string* | This is the auction removal rate for the ad set with the highest amount of audience overlap with the selected ad set.<br> |
| `deduping_2nd_source_ratio`<br><br>*numeric string* | This is the auction removal rate for the ad set with the second highest amount of audience overlap with the selected ad set.<br> |
| `deduping_3rd_source_ratio`<br><br>*numeric string* | This is the auction removal rate for the ad set with the third highest amount of audience overlap with the selected ad set.<br> |
| `deduping_ratio`<br><br>*numeric string* | The total auction removal rate is the percentage of auctions that an ad set did not compete in due to audience overlap with other ad sets.<br> |
| `deeplink_clicks`<br><br>*numeric string* | The number of clicks on links to specific parts of an app.<br> |
| `description_asset`<br><br>*AdAssetDescription* | description_asset<br> |
| `device_platform`<br><br>*string* | device_platform<br> |
| `dma`<br><br>*string* | dma<br> |
| `donate_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | donate_actions<br> |
| `donate_value`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | donate_value<br> |
| `dwell_3_sec`<br><br>*numeric string* | dwell_3_sec<br> |
| `dwell_5_sec`<br><br>*numeric string* | dwell_5_sec<br> |
| `dwell_7_sec`<br><br>*numeric string* | dwell_7_sec<br> |
| `dwell_rate`<br><br>*numeric string* | The number of times someone dwells on your display ad divided by the total number of impressions<br> |
| `fidelity_type`<br><br>*string* | To differentiate StoreKit-rendered ads from view-through ads, SKAdNetwork defines a fidelity-type parameter, which you include in the ad signature and receive in the install-validation postback. Use a fidelity-type value of `1` for StoreKit-rendered ads and attributable web ads, and `0` for view-through ads.<br><br>**Note:** This breakdown is only supported by the `total_postbacks_detailed_v4` field.<br> |
| `find_location_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | find_location_actions<br> |
| `find_location_value`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | find_location_value<br> |
| `flexible_format_asset_type`<br><br>*string* | flexible_format_asset_type<br> |
| `frequency`<br><br>*numeric string* | The average number of times each person saw your ad. This metric is estimated.<br> |
| `frequency_value`<br><br>*string* | frequency_value<br> |
| `full_view_impressions`<br><br>*numeric string* | The number of Full Views on your Page's posts as a result of your ad.<br> |
| `full_view_reach`<br><br>*numeric string* | The number of Accounts Center accounts that performed a Full View on your Page's post as a result of your ad.<br> |
| `gen_ai_asset_type`<br><br>*string* | gen_ai_asset_type<br> |
| `hourly_stats_aggregated_by_advertiser_time_zone`<br><br>*string* | hourly_stats_aggregated_by_advertiser_time_zone<br> |
| `hourly_stats_aggregated_by_audience_time_zone`<br><br>*string* | hourly_stats_aggregated_by_audience_time_zone<br> |
| `hsid`<br><br>*string* | The `hsid` key is available for ad impressions that use SKAdNetwork 4 and later. This integer can have up to four digits. You can encode information about your advertisement in each set of digits; you may receive two, three, or all four digits of the sourceIdentifier in the first winning postback, depending on the ad impression's postback data tier.<br><br>**Note:** This breakdown is only supported by the `total_postbacks_detailed_v4` field.<br> |
| `image_asset`<br><br>*AdAssetImage* | image_asset<br> |
| `impression_device`<br><br>*string* | impression_device<br> |
| `impressions`<br><br>*numeric string* | The number of times your ads were on screen.<br><br><br>**[default]**<br> |
| `impressions_auto_refresh`<br><br>*string* | impressions_auto_refresh<br> |
| `impressions_gross`<br><br>*string* | impressions_gross<br> |
| `inline_link_click_ctr`<br><br>*numeric string* | The percentage of time Accounts Center accounts saw your ads and performed an inline link click.<br> |
| `inline_link_clicks`<br><br>*numeric string* | The number of clicks on links to select destinations or experiences, on or off Facebook-owned properties. Inline link clicks use a fixed 1-day-click attribution window.<br> |
| `inline_post_engagement`<br><br>*numeric string* | The total number of actions that Accounts Center accounts take involving your ads. Inline post engagements use a fixed 1-day-click attribution window.<br> |
| `instagram_upcoming_event_reminders_set`<br><br>*numeric string* | instagram_upcoming_event_reminders_set<br> |
| `instant_experience_clicks_to_open`<br><br>*numeric string* | instant_experience_clicks_to_open<br> |
| `instant_experience_clicks_to_start`<br><br>*numeric string* | instant_experience_clicks_to_start<br> |
| `instant_experience_outbound_clicks`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | instant_experience_outbound_clicks<br> |
| `interactive_component_tap`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | interactive_component_tap<br> |
| `is_auto_advance`<br><br>*string* | is_auto_advance<br> |
| `landing_page_view_per_link_click`<br><br>*numeric string* | landing_page_view_per_link_click<br> |
| `marketing_messages_delivered`<br><br>*numeric string* | The number of messages your business sent to customers that were delivered. Some messages may not be delivered, such as when a customer's device is out of service. This metric doesn’t include messages delivered to Europe and Japan. In some cases, this metric may be estimated and may differ from what’s shown on your invoice due to small variations in data processing.<br> |
| `marketing_messages_delivery_rate`<br><br>*numeric string* | The number of messages delivered divided by the number of messages sent. Some messages may not be delivered, such as when a customer's device is out of service. This metric doesn't include messages sent to Europe and Japan.<br> |
| `marketing_messages_read_rate_benchmark`<br><br>*string* | We calculate this metric as the 75th percentile of read rates across similar businesses, representing the percentage of messages read out of total messages delivered.<br> |
| `media_asset`<br><br>*AdAssetMedia* | media_asset<br> |
| `messages_delivered`<br><br>*numeric string* | The number of marketing messages your business sent to customers that were delivered. Some marketing messages may not be delivered, such as when a customer's device is out of service.<br> |
| `messages_delivered_ctr`<br><br>*numeric string* | The percentage of marketing messages that received a link click out of the total number of marketing messages that were delivered.<br> |
| `mobile_app_purchase_roas`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The total return on ad spend (ROAS) from mobile app purchases. This is based on the value that you assigned when you set up the app event.<br> |
| `multi_event_conversion_attribution_setting`<br><br>*string* | multi_event_conversion_attribution_setting<br> |
| `newsfeed_avg_position`<br><br>*numeric string* | The average position where your ad was inserted into news feeds on mobile and desktop. Position 1 is the one at the top of the feed.<br> |
| `newsfeed_clicks`<br><br>*numeric string* | The total number of clicks your ad received in news feed, on mobile and desktop.<br> |
| `newsfeed_impressions`<br><br>*numeric string* | The total number of times your ad was inserted into news feeds, on mobile and desktop.<br> |
| `objective`<br><br>*string* | The objective reflecting the goal you want to achieve with your advertising. It may be different from the selected objective of the campaign in some cases.<br> |
| `objective_result_rate`<br><br>*list<AdsInsightsResult>* | The number of objective results you received divided by the number of impressions.<br> |
| `objective_results`<br><br>*list<AdsInsightsResult>* | The number of responses you wanted to achieve from your ad campaign, based on your selected objective. For example, if you selected promote your Page as your campaign objective, this metric shows the number of Page likes that happened as a result of your ads.<br> |
| `opportunity_score_l4`<br><br>*numeric string* | opportunity score l4<br> |
| `optimization_goal`<br><br>*string* | The optimization goal you selected for your ad or ad set. Your optimization goal reflects what you want to optimize for the ads.<br> |
| `outbound_clicks`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The number of clicks on links that take Accounts Center accounts off Facebook-owned properties.<br> |
| `outbound_clicks_ctr`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The percentage of times Accounts Center accounts saw your ad and performed an outbound click.<br> |
| `performance_indicator`<br><br>*string* | performance_indicator<br> |
| `platform_position`<br><br>*string* | platform_position<br> |
| `postback_sequence_index`<br><br>*string* | Sequence of postbacks received from SkAdNetwork API version 4.0. Possible values of this breakdown are `0` (first postback), `1` (second postback) and `2` (third postback).<br><br>**Note:** This breakdown is only supported by the `total_postbacks_detailed_v4` field.<br> |
| `private_attribution_conversions`<br><br>*unsigned integer* | private_attribution_conversions<br> |
| `product_brand`<br><br>*string* | product_brand<br> |
| `product_brand_breakdown`<br><br>*string* | product_brand_breakdown<br> |
| `product_category`<br><br>*string* | product_category<br> |
| `product_category_breakdown`<br><br>*string* | product_category_breakdown<br> |
| `product_content_id`<br><br>*string* | product_content_id<br> |
| `product_custom_label_0`<br><br>*string* | product_custom_label_0<br> |
| `product_custom_label_0_breakdown`<br><br>*string* | product_custom_label_0_breakdown<br> |
| `product_custom_label_1`<br><br>*string* | product_custom_label_1<br> |
| `product_custom_label_1_breakdown`<br><br>*string* | product_custom_label_1_breakdown<br> |
| `product_custom_label_2`<br><br>*string* | product_custom_label_2<br> |
| `product_custom_label_2_breakdown`<br><br>*string* | product_custom_label_2_breakdown<br> |
| `product_custom_label_3`<br><br>*string* | product_custom_label_3<br> |
| `product_custom_label_3_breakdown`<br><br>*string* | product_custom_label_3_breakdown<br> |
| `product_custom_label_4`<br><br>*string* | product_custom_label_4<br> |
| `product_custom_label_4_breakdown`<br><br>*string* | product_custom_label_4_breakdown<br> |
| `product_custom_number_0`<br><br>*string* | product_custom_number_0<br> |
| `product_custom_number_1`<br><br>*string* | product_custom_number_1<br> |
| `product_custom_number_2`<br><br>*string* | product_custom_number_2<br> |
| `product_custom_number_3`<br><br>*string* | product_custom_number_3<br> |
| `product_custom_number_4`<br><br>*string* | product_custom_number_4<br> |
| `product_group_content_id`<br><br>*string* | product_group_content_id<br> |
| `product_group_content_id_breakdown`<br><br>*string* | product_group_content_id_breakdown<br> |
| `product_group_retailer_id`<br><br>*string* | product_group_retailer_id<br> |
| `product_id`<br><br>*string* | product_id<br> |
| `product_name`<br><br>*string* | product_name<br> |
| `product_retailer_id`<br><br>*string* | product_retailer_id<br> |
| `product_set_id_breakdown`<br><br>*string* | product_set_id_breakdown<br> |
| `product_vendor_id`<br><br>*string* | product_vendor_id<br> |
| `product_vendor_id_breakdown`<br><br>*string* | product_vendor_id_breakdown<br> |
| `product_views`<br><br>*string* | product_views<br> |
| `promoted_product_set_result`<br><br>*string* | promoted product set result<br> |
| `publisher_platform`<br><br>*string* | publisher_platform<br> |
| `purchase_per_landing_page_view`<br><br>*numeric string* | purchase_per_landing_page_view<br> |
| `purchase_roas`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The total return on ad spend (ROAS) from purchases. This is based on information received from one or more of your connected Facebook Business Tools and attributed to your ads.<br> |
| `qualifying_question_qualify_answer_rate`<br><br>*numeric string* | qualifying_question_qualify_answer_rate<br> |
| `reach`<br><br>*numeric string* | The number of Accounts Center accounts that saw your ads at least once. Reach is different from impressions, which may include multiple views of your ads by the same Accounts Center accounts. This metric is estimated.<br> |
| `read_rate`<br><br>*numeric string* | The percentage of marketing messages that were read out of the total number of marketing messages that were delivered.<br> |
| `recurring_subscription_payment_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | recurring_subscription_payment_actions<br> |
| `redownload`<br><br>*string* | Boolean flag that indicates the customer redownloaded and reinstalled the app when the value is true. A `1` indicates customer has reinstalled the app and `0` indicates that customer hasn’t reinstalled the app<br><br>**Note:** This breakdown is only supported by the `total_postbacks_detailed_v4` field.<br> |
| `reels_trending_topic`<br><br>*string* | reels_trending_topic<br> |
| `result_rate`<br><br>*list<AdsInsightsResult>* | The percentage of results you received out of all the views of your ads.<br> |
| `result_values_performance_indicator`<br><br>*string* | result_values_performance_indicator<br> |
| `results`<br><br>*list<AdsInsightsResult>* | The number of times your ad achieved an outcome, based on the objective and settings you selected.<br> |
| `rta_ugc_topic`<br><br>*string* | rta_ugc_topic<br> |
| `rule_asset`<br><br>*AdAssetRule* | rule_asset<br> |
| `rule_set_id`<br><br>*string* | rule_set_id<br> |
| `rule_set_name`<br><br>*string* | rule_set_name<br> |
| `schedule_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | schedule_actions<br> |
| `schedule_value`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | schedule_value<br> |
| `shops_assisted_purchases`<br><br>*string* | shops_assisted_purchases<br> |
| `skan_version`<br><br>*string* | skan_version<br> |
| `social_spend`<br><br>*numeric string* | The total amount you've spent so far for your ads showed with social information. (ex: Jane Doe likes this).<br> |
| `spend`<br><br>*numeric string* | The estimated total amount of money you've spent on your campaign, ad set or ad during its schedule. This metric is estimated.<br><br><br>**[default]**<br> |
| `start_trial_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | start_trial_actions<br> |
| `start_trial_value`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | start_trial_value<br> |
| `submit_application_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | submit_application_actions<br> |
| `submit_application_value`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | submit_application_value<br> |
| `subscribe_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | subscribe_actions<br> |
| `subscribe_value`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | subscribe_value<br> |
| `thumb_stops`<br><br>*numeric string* | The number of times someone dwells on your display ad.<br> |
| `title_asset`<br><br>*AdAssetTitle* | title_asset<br> |
| `today_spend`<br><br>*numeric string* | How much money you've spent on your campaign, ad set or ad since 12 AM today (in your ad account's time zone). If you set a daily budget, you'll see your progress toward it here to determine how much more you can spend before the day ends. This metric is estimated.<br> |
| `total_action_value`<br><br>*numeric string* | total_action_value<br> |
| `total_actions`<br><br>*numeric string* | The total number of actions Accounts Center accounts took that are attributed to your ads. Actions may include engagement, clicks or conversions.<br> |
| `total_card_view`<br><br>*string* | total_card_view<br> |
| `total_unique_actions`<br><br>*numeric string* | The number of Accounts Center accounts that took an action that was attributed to your ads. This metric is estimated.<br> |
| `unique_impressions`<br><br>*numeric string* | The number of Accounts Center accounts that saw your ads at least once.<br> |
| `updated_time`<br><br>*string* | updated_time<br> |
| `user_segment_key`<br><br>*string* | user_segment_key<br> |
| `video_30_sec_watched_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The number of times your video played for at least 30 seconds, or for nearly its total length if it's shorter than 30 seconds. For each impression of a video, we'll count video views separately and exclude any time spent replaying the video.<br> |
| `video_6_sec_watched_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | video 6 sec watched actions<br> |
| `video_asset`<br><br>*AdAssetVideo* | video_asset<br> |
| `video_avg_time_watched_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The average time a video was played, including any time spent replaying the video for a single impression.<br> |
| `video_complete_watched_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | This shows the number of total views of at least 30 seconds or to the end of your video, whichever occurs first.<br> |
| `video_completed_view_or_15s_passed_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | video_completed_view_or_15s_passed_actions<br> |
| `video_continuous_2_sec_watched_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | video_continuous_2_sec_watched_actions<br> |
| `video_p100_watched_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The number of times your video was played at 100% of its length, including plays that skipped to this point.<br> |
| `video_p25_watched_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The number of times your video was played at 25% of its length, including plays that skipped to this point.<br> |
| `video_p50_watched_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The number of times your video was played at 50% of its length, including plays that skipped to this point.<br> |
| `video_p75_watched_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The number of times your video was played at 75% of its length, including plays that skipped to this point.<br> |
| `video_p95_watched_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The number of times your video was played at 95% of its length, including plays that skipped to this point.<br> |
| `video_play_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The number of times your video starts to play. This is counted for each impression of a video, and excludes replays. This metric is in development.<br> |
| `video_play_curve_actions`<br><br>*list<AdsHistogramStats>* | A video-play based curve graph that illustrates the percentage of video plays that reached a given second. Entries 0 to 14 represent seconds 0 thru 14. Entries 15 to 17 represent second ranges [15 to 20), [20 to 25), and [25 to 30). Entries 18 to 20 represent second ranges [30 to 40), [40 to 50), and [50 to 60). Entry 21 represents plays over 60 seconds.<br> |
| `video_play_retention_0_to_15s_actions`<br><br>*list<AdsHistogramStats>* | video_play_retention_0_to_15s_actions<br> |
| `video_play_retention_20_to_60s_actions`<br><br>*list<AdsHistogramStats>* | video_play_retention_20_to_60s_actions<br> |
| `video_play_retention_graph_actions`<br><br>*list<AdsHistogramStats>* | video_play_retention_graph_actions<br> |
| `video_time_watched_actions`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | video_time_watched_actions<br> |
| `website_clicks`<br><br>*numeric string* | The number of clicks on links to your website in your ads.<br> |
| `website_ctr`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The percentage of times Accounts Center accounts saw your ad and performed a link click.<br> |
| `website_purchase_roas`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The total return on ad spend (ROAS) from website purchases. This is based on the value of all conversions recorded by the Facebook pixel on your website and attributed to your ads.<br> |
| `wish_bid`<br><br>*numeric string* | wish_bid<br> |
| `zip`<br><br>*string* | zip<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |
| 3018 | The start date of the time range cannot be beyond 37 months from the current date |
| 104 | Incorrect signature |
| 2500 | Error parsing graph query |
| 200 | Permissions error |
| 2642 | Invalid cursors values |

### Creating

#### /{campaign_id}/insights
You can make a POST request to *insights* edge from the following paths:

- [/{campaign_id}/insights](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group/insights)

When posting to this edge, an [AdReportRun](https://developers.facebook.com/docs/marketing-api/reference/ad-report-run) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `action_attribution_windows`<br><br>*list<enum{1d_view, 7d_view, 28d_view, 1d_click, 7d_click, 28d_click, 1d_ev, dda, default, 7d_view_first_conversion, 28d_view_first_conversion, 7d_view_all_conversions, 28d_view_all_conversions, skan_view, skan_click, skan_click_second_postback, skan_view_second_postback, skan_click_third_postback, skan_view_third_postback, incrementality, custom, 1d_sequenced, 7d_sequenced, 28d_sequenced}>* | **Default value: **`default`<br>The attribution window for the actions. The attribution window determines the window (e.g. 7d) and engagement type (e.g click) that’s used as a filter to report actions. See [About attribution settings and models](https://www.facebook.com/business/help/460276478298895?id=561906377587030) for examples. The `default` option means `["7d_view","1d_click"]`.<br> |
| `action_breakdowns`<br><br>*list<enum{action_device, conversion_destination, matched_persona_id, matched_persona_name, signal_source_bucket, standard_event_content_type, action_canvas_component_name, action_carousel_card_id, action_carousel_card_name, action_destination, action_reaction, action_target_id, action_type, action_video_sound, action_video_type, is_business_ai_assisted}>* | **Default value: **`Vec`<br>How to break down action results. Supports more than one breakdowns. Default value is ["action_type"]<br><br><br>Note: you must also include `actions` field whenever `action_breakdowns` is specified.<br> |
| `action_report_time`<br><br>*enum{impression, conversion, mixed, lifetime}* | Determines the report time of action stats. For example, if a person            saw the ad on Jan 1st but converted on Jan 2nd, when you query the API            with `action_report_time=impression`, you will see a conversion on Jan            1st. When you query the API with `action_report_time=conversion`, you            will see a conversion on Jan 2nd<br> |
| `breakdowns`<br><br>*list<enum{ad_extension_domain, ad_extension_url, ad_format_asset, age, app_id, body_asset, breakdown_ad_objective, breakdown_reporting_ad_id, call_to_action_asset, coarse_conversion_value, comscore_market, country, creative_automation_asset_id, creative_relaxation_asset_type, crm_advertiser_l12_territory_ids, crm_advertiser_subvertical_id, crm_advertiser_vertical_id, crm_ult_advertiser_id, description_asset, fidelity_type, flexible_format_asset_type, gen_ai_asset_type, gender, hsid, image_asset, impression_device, instagram_ads_follow_type, instagram_ads_instagram_media_product_type, instagram_ads_time_since_creation_bucket, internal_campaign_id, is_auto_advance, is_conversion_id_modeled, is_rendered_as_delayed_skip_ad, landing_destination, link_url_asset, mdsa_landing_destination, media_asset_url, media_creator, media_destination_url, media_format, media_origin_url, media_text_content, media_type, pa_creator_ig_handle, postback_sequence_index, product_brand_breakdown, product_category_breakdown, product_custom_label_0_breakdown, product_custom_label_1_breakdown, product_custom_label_2_breakdown, product_custom_label_3_breakdown, product_custom_label_4_breakdown, product_group_content_id_breakdown, product_id, redownload, region, rta_ugc_topic, skan_campaign_id, skan_conversion_id, skan_version, sot_attribution_model_type, sot_attribution_window, sot_channel, sot_event_type, sot_source, title_asset, user_persona_id, user_persona_name, video_asset, zip, rule_set_id, rule_set_name, dma, frequency_value, overlap_segment, hourly_stats_aggregated_by_advertiser_time_zone, hourly_stats_aggregated_by_audience_time_zone, mmm, place_page_id, publisher_platform, platform_position, device_platform, standard_event_content_type, conversion_destination, signal_source_bucket, reels_trending_topic, marketing_messages_btn_name, impression_view_time_advertiser_hour_v2}>* | How to break down the result. For more than one breakdown, only certain combinations are available: See "Combining Breakdowns" in the Breakdowns page. The option `impression_device` cannot be used by itself<br> |
| `date_preset`<br><br>*enum{today, yesterday, this_month, last_month, this_quarter, maximum, data_maximum, last_3d, last_7d, last_14d, last_28d, last_30d, last_90d, last_week_mon_sun, last_week_sun_sat, last_quarter, last_year, this_week_mon_today, this_week_sun_today, this_year}* | **Default value: **`last_30d`<br>Represents a relative time range. This field is ignored if `time_range` or `time_ranges` is specified<br> |
| `default_summary`<br><br>*boolean* | **Default value: **`false`<br>Determine whether to return a summary. If `summary` is set, this param will be ignored; otherwise, a summary section with the same fields as specified by `fields` will be included in the summary section<br> |
| `export_columns`<br><br>*list<string>* | Select fields on the exporting report file. It is an optional param. Exporting columns will equals to the param fields if you leave this param blank<br> |
| `export_format`<br><br>*string* | Set the format of exporting report file. If the export_format is set, Report file will be asyncrhonizely generated. It expects ["xls", "csv"].<br> |
| `export_name`<br><br>*string* | Set the file name of the exporting report.<br> |
| `fields`<br><br>*list<string>* | Fields to be retrieved. Default behavior is to return a list of most used fields<br> |
| `filtering`<br><br>*list<Filter Object>* | **Default value: **`Vec`<br>Filters on the report data. This parameter is an array of filter objects<br><br><br>`field` *string*<br>**[required]**<br><br><br>`operator` *enum {EQUAL, NOT_EQUAL, GREATER_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN, LESS_THAN_OR_EQUAL, IN_RANGE, NOT_IN_RANGE, CONTAIN, NOT_CONTAIN, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY, STEM_MATCH, IN, NOT_IN, STARTS_WITH, ENDS_WITH, ANY, ALL, AFTER, BEFORE, ON_OR_AFTER, ON_OR_BEFORE, NONE, TOP}*<br>**[required]**<br><br><br>`value` *string*<br>**[required]**<br> |
| `level`<br><br>*enum {ad, adset, campaign, account}* | Represents the level of result<br> |
| `limit`<br><br>*integer* | limit<br> |
| `product_id_limit`<br><br>*integer* | Maximun number of product ids to be returned for each ad when breakdown by product_id<br> |
| `sort`<br><br>*list<string>* | **Default value: **`Vec`<br>Field to sort the result, and direction of sorting. You can specify sorting direction by appending "_ascending" or "_descending" to the sort field. For example, "reach_descending". For actions, you can sort by action type in form of "actions:<action_type>". For example, ["actions:link_click_ascending"]. This array supports no more than one element. By default, the sorting direction is ascending<br> |
| `summary`<br><br>*list<string>* | If this param is used, a summary section will be included, with the fields listed in this param<br> |
| `summary_action_breakdowns`<br><br>*list<enum{action_device, conversion_destination, matched_persona_id, matched_persona_name, signal_source_bucket, standard_event_content_type, action_canvas_component_name, action_carousel_card_id, action_carousel_card_name, action_destination, action_reaction, action_target_id, action_type, action_video_sound, action_video_type, is_business_ai_assisted}>* | **Default value: **`Vec`<br>Similar to `action_breakdowns`, but applies to summary. Default value is ["action_type"]<br> |
| `time_increment`<br><br>*enum{monthly, all_days} or integer* | **Default value: **`all_days`<br>If it is an integer, it is the number of days from 1 to 90. After you pick a reporting period by using `time_range` or `date_preset`, you may choose to have the results for the whole period, or have results for smaller time slices. If "all_days" is used, it means one result set for the whole period. If "monthly" is used, you will get one result set for each calendar month in the given period. Or you can have one result set for each N-day period specified by this param. This param is ignored if `time_ranges` is specified<br> |
| `time_range`<br><br>*{'since':YYYY-MM-DD,'until':YYYY-MM-DD}* | A single time range object. UNIX timestamp not supported. This param is ignored if `time_ranges` is provided<br><br><br>`since` *datetime*<br>A date in the format of "YYYY-MM-DD", which means from the beginning midnight of that day.<br><br><br>`until` *datetime*<br>A date in the format of "YYYY-MM-DD", which means to the beginning midnight of the following day.<br> |
| `time_ranges`<br><br>*list<{'since':YYYY-MM-DD,'until':YYYY-MM-DD}>* | Array of time range objects. Time ranges can overlap, for example to return cumulative insights. Each time range will have one result set. You cannot have more granular results with `time_increment` setting in this case.If `time_ranges` is specified, `date_preset`, `time_range` and `time_increment` are ignored<br><br><br>`since` *datetime*<br>A date in the format of "YYYY-MM-DD", which means from the beginning midnight of that day.<br><br><br>`until` *datetime*<br>A date in the format of "YYYY-MM-DD", which means to the beginning midnight of the following day.<br> |
| `use_account_attribution_setting`<br><br>*boolean* | **Default value: **`false`<br>When this parameter is set to true, your ads results will be shown using the attribution settings defined for the ad account<br> |
| `use_unified_attribution_setting`<br><br>*boolean* | When this parameter is set to `true`, your ads results will be shown using unified attribution settings defined at ad set level and parameter `use_account_attribution_setting` will be ignored.<br> |

##### Return Type

```
Struct  {
report_run_id: numeric string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 200 | Permissions error |
| 3018 | The start date of the time range cannot be beyond 37 months from the current date |
| 190 | Invalid OAuth 2.0 Access Token |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group/video_groups.md -->

## Ad Campaign Group Video Groups

### Reading

This endpoint fetches video groups used in a campaign group.

##### Example

#### HTTP
```
GET /v25.0/{campaign-id}/video_groups HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{campaign-id}/video_groups',
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
    "/{campaign-id}/video_groups",
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
    "/{campaign-id}/video_groups",
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
                               initWithGraphPath:@"/{campaign-id}/video_groups"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bcampaign-id%7D%2Fvideo_groups&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `date_range`<br><br>*JSON object* | This field contains the date range for which we want to display the video assets.<br><br><br>`start` *datetime/timestamp*<br><br>**Default value: **`0`<br>start<br><br><br>`end` *datetime/timestamp*<br><br>**Default value: **`<request_time>`<br>end<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of VideoGroup nodes.

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
