# Ad Set

> Source: Meta Marketing API reference (20 pages). Fetched 2026-11-18.


---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign.md -->

## Ad Set

**Warning:** Beginning September 2, 2025, we will start to roll out more proactive restrictions on custom audiences and custom conversions that may suggest information not permitted under [our terms](https://www.facebook.com/legal/terms/businesstools?_rdr). For example, any custom audience or custom conversions suggesting specific health conditions (e.g., "arthritis", "diabetes") or financial status (e.g., "credit score", "high income") will be flagged and prevented from being used to run ad campaigns.

**What these restrictions mean for your campaigns:**

* You won’t be able to use flagged custom audiences or custom conversions when creating new campaigns.
* If you have an active campaign using flagged custom audiences or custom conversions, you should promptly review and resolve the issues by following the resolution steps to avoid delivery and performance issues.

**For API developers:**

* Starting September 2, 2025, if an ad set contains one or more flagged custom audiences and custom conversions, the [`issues_info` list](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign#Reading) will be populated with one issue per flagged items.
* Creation and editing of ad sets that contain flagged custom audiences and custom conversions will not be blocked, but campaign delivery and performance may be impacted unless the flags are resolved.

More information on this update and how to resolve flagged custom audiences can be found [here](https://www.facebook.com/business/help/1055828013359808), while information for resolving flagged custom conversions is available [here](https://www.facebook.com/business/help/2455915321411996).

An ad set is a group of ads that share the same daily or lifetime budget, schedule, bid type, bid info, and targeting data. Ad sets enable you to group ads according to your criteria, and you can retrieve the ad-related statistics that apply to a set. See [Optimized CPM](https://developers.facebook.com/documentation/ads-commerce/marketing-api/bidding/guides/cost-per-action-ads) and [Promoted Object](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-promoted-object).

For example, create an ad set with a daily budget:

```html
curl -X POST \
  -F 'name="My Reach Ad Set"' \
  -F 'optimization_goal="REACH"' \
  -F 'billing_event="IMPRESSIONS"' \
  -F 'bid_amount=2' \
  -F 'daily_budget=1000' \
  -F 'campaign_id="<AD_CAMPAIGN_ID>"' \
  -F 'targeting={
       "geo_locations": {
         "countries": [
           "US"
         ]
       },
       "facebook_positions": [
         "feed"
       ]
     }' \
  -F 'status="PAUSED"' \
  -F 'promoted_object={
       "page_id": "<PAGE_ID>"
     }' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v27.0/act_<AD_ACCOUNT_ID>/adsets
```

Create an ad set with a lifetime budget

```html
curl -X POST \
  -F 'name="My First Adset"' \
  -F 'lifetime_budget=20000' \
  -F 'start_time="2025-12-04T20:32:30-0800"' \
  -F 'end_time="2025-12-14T20:32:30-0800"' \
  -F 'campaign_id="<AD_CAMPAIGN_ID>"' \
  -F 'bid_amount=100' \
  -F 'billing_event="LINK_CLICKS"' \
  -F 'optimization_goal="LINK_CLICKS"' \
  -F 'targeting={
       "facebook_positions": [
         "feed"
       ],
       "geo_locations": {
         "countries": [
           "US"
         ]
       },
       "publisher_platforms": [
         "facebook",
         "audience_network"
       ]
     }' \
  -F 'status="PAUSED"' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v27.0/act_<AD_ACCOUNT_ID>/adsets
```

#### Limits {#limits}

The following are the limits on ad sets

| Limit | Value |
| --- | --- |
| Maximum number of ad sets per regular ad account | 5000 non-deleted ad sets |
| Maximum number of ad sets per bulk ad account | 10000 non-deleted ad sets |
| Maximum number of ads per ad set | 50 non-archived ads |

#### Housing, Employment and Credit Ads

Facebook is committed to protecting people from discrimination, and we are continually improving our ability to detect and deter potential abuse. It’s already against [our policies](https://www.facebook.com/policies/ads/prohibited_content/discriminatory_practices) to discriminate by wrongfully targeting or excluding specific groups of people. As part of a [historic settlement agreement](https://newsroom.fb.com/news/2019/03/protecting-against-discrimination-in-ads/), we are making changes to the way we manage housing, employment and credit ads.

Advertisers must specify a `special_ad_category` for ad campaigns that market housing, employment, and credit. In doing so, the set of targeting options available for ads in these campaigns will be restricted. See [Special Ad Category](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/special-ad-category) for more information.

#### Flagged custom conversions, custom audiences and/or lookalike audiences

If an ad set contains one or more custom lookalike audiences flagged with an `operation_status` of `471`, the `issues_info` list will be populated with one issue per flagged audience as warning.

**Example**

```html
{
  "effective_status": "ACTIVE",
  "issues_info": [
    {
      "level": "AD_SET",
      "error_code": 2460003,
      "error_summary": "Custom Audience is blocked",
      "error_message": "Custom Audience is blocked: Some of this ad set’s custom audiences and/or lookalikes are blocked because they suggest the use of information (e.g., health, financial) not allowed under Meta’s terms. Go to Audience Manager for more details, and you can either review each custom audience or lookalike and remove prohibited information, or choose a different one for your ad set or create a new one and make sure it does not include potentially prohibited information. You can also request a review in Audience Manager if you think any don’t use restricted information.",
      "error_type": "SOFT_ERROR",
      "additional_info": "Custom Audience ID: 120231141155310247"
    },
    {
      "level": "AD_SET",
      "error_code": 2460003,
      "error_summary": "Custom Audience is blocked",
      "error_message": "Custom Audience is blocked: Some of this ad set’s custom audiences and/or lookalikes are blocked because they suggest the use of information (e.g., health, financial) not allowed under Meta’s terms. Go to Audience Manager for more details, and you can either review each custom audience or lookalike and remove prohibited information, or choose a different one for your ad set or create a new one and make sure it does not include potentially prohibited information. You can also request a review in Audience Manager if you think any don’t use restricted information.",
      "error_type": "SOFT_ERROR",
      "additional_info": "Custom Audience ID: 120232742978230247"
    },
    {
      "level": "AD_SET",
      "error_code": 2460004,
      "error_summary": "Custom Conversion is blocked",
      "error_message": "Custom Conversion is blocked: This ad set’s custom conversion is blocked because it suggests the use of information (e.g., health, financial) not allowed under Meta’s terms. You can’t edit this custom conversion, but you can choose a different one for this ad set or create a new one that doesn’t use prohibited information. You can also request a review if you think your custom conversion doesn’t use prohibited information.",
      "error_type": "SOFT_ERROR",
      "additional_info": "Custom Conversion ID: 730362226205831"
    }
  ],
  "id": "120228591637010247"
}
```

In addition, attempting to create or modify ad sets containing any flagged custom audience, lookalike audience or custom conversion will fail with an error. The error will contain the list of IDs for the restricted assets.

###### For flagged custom audiences

```json
{
  "error": {
    "error_subcode": 246003,
    "error_data": {
      "Restricted Custom Audience IDs": [
        "<CUSTOM_AUDIENCE_ID1>",
        "<CUSTOM_AUDIENCE_ID2>"
      ]
    }
    "error_user_title": "Your custom audience is currently blocked",
    "error_user_msg": "  This custom audience is blocked because it may contain information (e.g., health, financial) not allowed under Meta’s terms. Visit the audience manager to appeal this decision, edit your audience and remove prohibited information, or choose a different audience."
  },
}
```

###### For flagged custom conversions

```json
{
  "error": {
    "error_subcode": 246004,
    "error_data": {
      "Restricted Custom Conversion ID": "<CUSTOM_CONVERSION_ID>"
    }
    "error_user_title": "Your custom conversion is currently blocked",
    "error_user_msg": "This custom conversion is blocked because it may contain information (e.g., health, financial) not allowed under Meta’s terms. Visit the events manager to appeal this decision, edit your custom conversion and remove prohibited information, or choose a different custom conversion."
  },
}
```

##### To resolve flagged audiences

If your custom or lookalike audiences are flagged, consider these options.

To resolve flagged custom audiences:

* **Review flagged audiences**: Use Audience Manager to review your custom audience along with other information included in an audience, and remove any information that is not allowed under edit the audience to comply with [Meta's terms](https://www.facebook.com/legal/terms/businesstools/).
* **Create new or choose different audiences**: Alternatively, you can create a new custom audience or choose a different existing custom audience and make sure that it does not include information not allowed under our terms and use that to run campaigns.

To resolve flagged lookalike audiences:

* **Resolve issues with the underlying custom audience**: If the underlying custom audience (also known as the seed audience) of your lookalike audience is flagged, you will need to resolve the issue with the underlying custom audience on which the lookalike audience is built. Please refer to the preceding section on how to resolve flagged custom audiences.
* **Create new audiences**: Consider developing new lookalike audiences and make sure that they don't include information that is not allowed under our terms.

###### Request a review

If you believe your custom audience or lookalike audience has been flagged in error and doesn't include non-permitted information, you can request a review via Ads Manager under the campaigns table or, or in Audience Manager by clicking on individual audiences and under the summary tab of the impacted audience.

##### To resolve flagged custom conversions

If any of your custom conversions are flagged for suggesting information that is not allowed under our terms, you may want to consider the following options.

To resolve a flagged custom conversion in a new campaign creation:

* **Create new custom conversion**: Use a new custom conversion and make sure that it does not include information that is not allowed under our terms.
* **Choose a different custom conversion**: Select a different existing custom conversion and make sure it does not include information that is not allowed under our terms.

To resolve a flagged custom conversion in an existing campaign:

* **Duplicate your campaign and select an existing custom conversion**: If you have a running campaign that is flagged due to a flagged custom conversion, consider duplicating the campaign and selecting a different custom conversion that is not flagged before publishing the new duplicated campaign. **Note:** Once the campaign is published, you cannot remove or select a different custom conversion.

###### Request a review

If you believe your custom conversion has been flagged in error and doesn't include non-permitted information, you can request a review via Ads Manager under the campaigns table, or in Events Manager under the custom conversions page.

#### Targeting European Union Ads

Beginning Tuesday, May 16, 2023 advertisers who include the European Union (EU), associated territories, or select global/worldwide in their ad targeting on Facebook and Instagram will be asked to include information about who benefits from the ad (the beneficiary) and who is paying for the ad (the payor) for each ad set. Advertisers will be prompted for this information in all ads buying surfaces including Ads Manager and the Marketing API. Beginning Wednesday, August 16, 2023, if beneficiary and payer information is not provided, the ad will not be published.

We are launching this requirement to respond to the EU Digital Services Act (DSA) which goes into full effect for Facebook and Instagram later this year.

Ad sets targeted to the EU and/or associated territories (see [here](https://www.facebook.com/business/help/605021638170961/) for a complete list) are required to provide beneficiary information (who benefits from the ad running), and payer information (who pays for the ad). This applies to new ads, duplicated ads, or significantly edited ads from May 16 forward, and without the required information, the API will respond with a wrong parameter error. For convenience the advertiser can set a saved beneficiary and payor in their ad account, which will be auto-populated during ad set creation, copying, and updating targets to include EU locations and ads under existing ad seta without configured the payor and beneficiary.. For more information about the ad account level parameters, `default_dsa_payor` and `default_dsa_beneficiary`, see to the check the [Ad Account reference document](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account).

To facilitate the creation of ad sets targeting the EU, we're offering a new API which allows developers to get a list of likely beneficiary/payer strings, based on ad account activity. See [Ad Account DSA Recommendations](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/dsa_recommendations) for more information.

**Notice:**

* When the default values are set in the ad account, during ad set creation, updating, and ad creation under an existing ad set, if one of them is not provided, the API will automatically fill the default value listed in the ad account. **Do not pass only one of them and expect the API to set the other one to be the same value.** For example, in the ad account settings, `default_dsa_payor` is `payor_default` and `default_dsa_beneficiary` is `beneficiary_default`. During ad set creation, if only `dsa_payor` is passed with the payor, the `dsa_beneficiary` will be automatically filled with value of `beneficiary_default` instead of `dsa_payor`.
* If no saved default values are set or the values are unset, without explicitly passing the payor or beneficiary during ad set creation or when making updates, it will trigger an error and the request will fail.
* The `payer` and the `beneficiary` fields are only for ad sets targeting the EU and/or associated territories.
* For ad sets targeting regions other than the EU and/or associated territories, that information will not be saved even if it is provided.

To facilitate the creation of ad sets targeting the EU, we're offering a new API which allows developers to get a list of likely beneficiary/payer strings, based on ad account activity. See [Ad Account Dsa Recommendations](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/dsa_recommendations) for more information.

### Reading

An ad set is a group of ads that share the same daily or lifetime budget, schedule, bid type, bid info, and targeting data. Ad sets enable you to group ads according to your criteria, and you can retrieve the ad-related statistics that apply to a set.

**Warning:** The `date_preset = lifetime` parameter is disabled in Graph API v10.0 and replaced with `date_preset = maximum`, which returns a maximum of 37 months of data. For v9.0 and below, `date_preset = maximum` will be enabled on May 25, 2021, and any `lifetime` calls will default to `maximum` and return only 37 months of data.

#### Examples {#read-examples}

```html
curl -X GET \
  -d 'fields="name,status"' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v27.0/<AD_SET_ID>/
```

To retrieve date-time related fields in a UNIX timestamp format, use the `date_format` parameter:

```html
curl -X GET \
  -d 'fields="id,name,start_time,end_time"' \
  -d 'date_format="U"' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v27.0/<AD_SET_ID>/
```

##### Example

#### HTTP
```
GET /v25.0/<AD_SET_ID>/?fields=adset_schedule HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/<AD_SET_ID>/?fields=adset_schedule',
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
    "/<AD_SET_ID>/",
    {
        "fields": "adset_schedule"
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
params.putString("fields", "adset_schedule");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/<AD_SET_ID>/",
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
  @"fields": @"adset_schedule",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/<AD_SET_ID>/"
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
  -d 'fields="adset_schedule"' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/<AD_SET_ID>/
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%3CAD_SET_ID%3E%2F%3Ffields%3Dadset_schedule&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `date_preset`<br><br>*enum{today, yesterday, this_month, last_month, this_quarter, maximum, data_maximum, last_3d, last_7d, last_14d, last_28d, last_30d, last_90d, last_week_mon_sun, last_week_sun_sat, last_quarter, last_year, this_week_mon_today, this_week_sun_today, this_year}* | Date Preset<br> |
| `time_range`<br><br>*{'since':YYYY-MM-DD,'until':YYYY-MM-DD}* | Time Range. Note if time range is invalid, it will be ignored.<br><br><br>`since` *datetime*<br>A date in the format of "YYYY-MM-DD", which means from the beginning midnight of that day.<br><br><br>`until` *datetime*<br>A date in the format of "YYYY-MM-DD", which means to the beginning midnight of the following day.<br> |

##### Fields

| Field | Description |
| --- | --- |
| `id`<br><br>*numeric string* | ID for the Ad Set<br><br><br>**[default]**<br> |
| `account_id`<br><br>*numeric string* | ID for the Ad Account associated with this Ad Set<br> |
| `adlabels`<br><br>*[list<AdLabel>](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label)* | Ad Labels associated with this ad set<br> |
| `ad_set_goal`<br><br>*[AdCampaignGoal](https://developers.facebook.com/docs/marketing-api/reference/ad-campaign-goal/)* | The ad set's customer lifecycle strategy. Present only when the ad set has a goal; otherwise absent. `type` is returned as an integer: `0` BROAD, `2` EXCLUDE_EXISTING_CUSTOMERS, `1` EXCLUDE_EXISTING_AND_ENGAGED_CUSTOMERS. Only `type` and the applicable exclusion fields (`existing_customers_exclusions`, `engaged_audiences_exclusions`, `existing_customers_audience_label_exclusions`, `engaged_audiences_audience_label_exclusions`, and, for `type` `1` and `2`, `existing_customers_auto_exclusion_retention_days`) are returned.<br> |
| `adset_schedule`<br><br>*list<DayPart>* | Ad set schedule, representing a delivery schedule for a single day<br> |
| `asset_feed_id`<br><br>*numeric string* | The ID of the asset feed that constains a content to create ads<br> |
| `attribution_spec`<br><br>*list<AttributionSpec>* | Conversion attribution spec used for attributing conversions for optimization. Supported window lengths differ by optimization goal and campaign objective. See [Objective, Optimization Goal and `attribution_spec`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group#attribution_spec).<br> |
| `bid_adjustments`<br><br>*[AdBidAdjustments](https://developers.facebook.com/docs/marketing-api/reference/ad-bid-adjustments)* | Map of bid adjustment types to values<br> |
| `bid_amount`<br><br>*unsigned int32* | Bid cap or target cost for this ad set. The bid cap used in a *lowest cost bid strategy* is defined as the maximum bid you want to pay for a result based on your `optimization_goal`. The target cost used in a *target cost bid strategy* lets Facebook bid on your behalf to meet your target on average and keep costs stable as you raise budget.<br><br><br>The bid amount's unit is cents for currencies like USD, EUR, and the basic unit for currencies like JPY, KRW. The bid amount for ads with `IMPRESSION` or `REACH` as `billing_event` is per 1,000 occurrences of that event, and the bid amount for ads with other `billing_event`s is for each occurrence.<br> |
| `bid_constraints`<br><br>*[AdCampaignBidConstraint](https://developers.facebook.com/docs/marketing-api/reference/ad-campaign-bid-constraint)* | Choose bid constraints for ad set to suit your specific business goals. It usually works together with `bid_strategy` field.<br> |
| `bid_info`<br><br>*map<string, unsigned int32>* | Map of bid objective to bid value.<br> |
| `bid_strategy` This field is only accessible in v3.0 or later.<br><br>*enum {LOWEST_COST_WITHOUT_CAP, LOWEST_COST_WITH_BID_CAP, COST_CAP, LOWEST_COST_WITH_MIN_ROAS}* | Bid strategy for this ad set when you use `AUCTION` as your buying type:<br><br>`LOWEST_COST_WITHOUT_CAP`: Designed to get the most results for your budget based on<br>your ad set `optimization_goal` without limiting your bid amount. This is the best strategy<br>if you care most about cost efficiency. However with this strategy it may be harder to get<br>stable average costs as you spend. This strategy is also known as *automatic bidding*.<br>Learn more in [Ads Help Center, About bid strategies: Lowest cost](https://www.facebook.com/business/help/721453268045071).<br><br>`LOWEST_COST_WITH_BID_CAP`: Designed to get the most results for your budget based on<br>your ad set `optimization_goal` while limiting actual bid to your specified<br>amount. With a bid cap you have more control over your<br>cost per actual optimization event. However if you set a limit which is too low you may<br>get less ads delivery. Get your bid cap with the field `bid_amount`.<br>This strategy is also known as *manual maximum-cost bidding*.<br>Learn more in [Ads Help Center, About bid strategies: Lowest cost](https://www.facebook.com/business/help/721453268045071).<br><br>Notes:<br><br><br>• If you enable campaign budget optimization, you should get `bid_strategy` at the parent campaign level.<br>• `TARGET_COST` bidding strategy has been deprecated with [Marketing API v9](https://developers.facebook.com/docs/graph-api/changelog/version9.0).<br> |
| `billing_event`<br><br>*enum {APP_INSTALLS, CLICKS, IMPRESSIONS, LINK_CLICKS, NONE, OFFER_CLAIMS, PAGE_LIKES, POST_ENGAGEMENT, THRUPLAY, PURCHASE, LISTING_INTERACTION}* | The billing event for this ad set:<br>`APP_INSTALLS`: Pay when people install your app.<br>`CLICKS`: Pay when people click anywhere in the ad. <br>`IMPRESSIONS`: Pay when the ads are shown to people.<br>`LINK_CLICKS`: Pay when people click on the link of the ad.<br>`OFFER_CLAIMS`: Pay when people claim the offer.<br>`PAGE_LIKES`: Pay when people like your page.<br>`POST_ENGAGEMENT`: Pay when people engage with your post.<br>`VIDEO_VIEWS`: Pay when people watch your video ads for at least 10 seconds.<br>`THRUPLAY`: Pay for ads that are played to completion, or played for at least 15 seconds.<br> |
| `brand_safety_config`<br><br>*BrandSafetyCampaignConfig* | Brand safety and suitability campaign configuration options.<br> |
| `budget_remaining`<br><br>*numeric string* | Remaining budget of this Ad Set<br> |
| `campaign`<br><br>*[Campaign](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group)* | The campaign that contains this ad set<br> |
| `campaign_active_time`<br><br>*numeric string* | Campaign running length<br> |
| `campaign_attribution`<br><br>*enum* | campaign_attribution, a new field for app ads campaign, used to indicate a campaign's attribution type, eg: SKAN or AEM<br> |
| `campaign_id`<br><br>*numeric string* | The ID of the campaign that contains this ad set<br> |
| `configured_status`<br><br>*enum {ACTIVE, PAUSED, DELETED, ARCHIVED}* | The status set at the ad set level. It can be different from the<br>effective status due to its parent campaign. Prefer using 'status'<br>instead of this.<br> |
| `contextual_bundling_spec`<br><br>*ContextualBundlingSpec* | specs of contextual bundling Ad Set setup, including signal of opt-in/out the feature<br> |
| `created_time`<br><br>*datetime* | Time when this Ad Set was created<br> |
| `creative_sequence`<br><br>*list<numeric string>* | Order of the adgroup sequence to be shown to users<br> |
| `daily_budget`<br><br>*numeric string* | The daily budget of the set defined in your [account currency](https://developers.facebook.com/documentation/ads-commerce/marketing-api).<br> |
| `daily_min_spend_target`<br><br>*numeric string* | Daily minimum spend target of the ad set defined in your account currency. To use this field, daily budget must be specified in the Campaign. This target is not a guarantee but our best effort.<br> |
| `daily_spend_cap`<br><br>*numeric string* | Daily spend cap of the ad set defined in your account currency. To use this field, daily budget must be specified in the Campaign.<br> |
| `destination_type`<br><br>*string* | Destination of ads in this Ad Set.<br><br><br>Options include: `WEBSITE`, `APP`, `MESSENGER`, `INSTAGRAM_DIRECT`.<br><br><br>The `ON_AD`, `ON_POST`, `ON_VIDEO`, `ON_PAGE`, and `ON_EVENT` destination types are currently in limited beta testing. Trying to duplicate campaigns with existing destination types using these new destination types may throw an error. See the [Outcome-Driven Ads Experiences](#odax) section below for more information.<br> |
| `dsa_beneficiary`<br><br>*string* | The beneficiary of all ads in this ad set.<br> |
| `dsa_payor`<br><br>*string* | The payor of all ads in this ad set.<br> |
| `effective_status`<br><br>*enum {ACTIVE, PAUSED, DELETED, CAMPAIGN_PAUSED, ARCHIVED, IN_PROCESS, WITH_ISSUES}* | The effective status of the adset. The status could be effective either<br>because of its own status, or the status of its parent campaign. `WITH_ISSUES` is available for version 3.2 or higher. `IN_PROCESS` is available for version 4.0 or higher.<br> |
| `end_time`<br><br>*datetime* | End time, in UTC UNIX timestamp<br> |
| `frequency_control_specs`<br><br>*[list<AdCampaignFrequencyControlSpecs>](https://developers.facebook.com/docs/marketing-api/reference/ad-campaign-frequency-control-specs)* | An array of frequency control specs for this ad set. Writes to this field are only available in ad sets where `REACH` and `THRUPLAY` are the performance goal.<br> |
| `instagram_user_id` This field is only accessible in v22.0 or later.<br><br>*numeric string* | Represents your Instagram account id, used for ads, including dynamic creative ads on Instagram.<br> |
| `is_dynamic_creative` This field is only accessible in v3.2 or later.<br><br>*bool* | Whether this ad set is a dynamic creative ad set. dynamic creative ad can be created only under ad set with this field set to be true.<br> |
| `is_incremental_attribution_enabled`<br><br>*bool* | Whether the campaign should use incremental attribution optimization.<br> |
| `issues_info` This field is only accessible in v3.2 or later.<br><br>*[list<AdCampaignIssuesInfo>](https://developers.facebook.com/docs/marketing-api/reference/ad-campaign-issues-info)* | Issues for this ad set that prevented it from deliverying<br> |
| `learning_stage_info`<br><br>*[AdCampaignLearningStageInfo](https://developers.facebook.com/docs/marketing-api/reference/ad-campaign-learning-stage-info)* | Info about whether the ranking or delivery system is still learning for this ad set. While the ad set is still in learning , we might unstablized delivery performances.<br> |
| `lifetime_budget`<br><br>*numeric string* | The lifetime budget of the set defined in your [account currency](https://developers.facebook.com/documentation/ads-commerce/marketing-api).<br> |
| `lifetime_imps`<br><br>*int32* | Lifetime impressions. Available only for campaigns with `buying_type=FIXED_CPM`<br> |
| `lifetime_min_spend_target`<br><br>*numeric string* | Lifetime minimum spend target of the ad set defined in your account currency. To use this field, lifetime budget must be specified in the Campaign. This target is not a guarantee but our best effort.<br> |
| `lifetime_spend_cap`<br><br>*numeric string* | Lifetime spend cap of the ad set defined in your account currency. To use this field, lifetime budget must be specified in the Campaign.<br> |
| `min_budget_spend_percentage`<br><br>*numeric string* | min_budget_spend_percentage<br> |
| `multi_optimization_goal_weight`<br><br>*string* | multi_optimization_goal_weight<br> |
| `name`<br><br>*string* | Name of the ad set<br> |
| `optimization_goal`<br><br>*enum {NONE, APP_INSTALLS, AD_RECALL_LIFT, ENGAGED_USERS, EVENT_RESPONSES, IMPRESSIONS, LEAD_GENERATION, QUALITY_LEAD, LINK_CLICKS, OFFSITE_CONVERSIONS, PAGE_LIKES, POST_ENGAGEMENT, QUALITY_CALL, REACH, LANDING_PAGE_VIEWS, VISIT_INSTAGRAM_PROFILE, ENGAGED_PAGE_VIEWS, VALUE, THRUPLAY, DERIVED_EVENTS, APP_INSTALLS_AND_OFFSITE_CONVERSIONS, CONVERSATIONS, IN_APP_VALUE, MESSAGING_PURCHASE_CONVERSION, MESSAGING_DEEP_CONVERSATION_AND_FOLLOW, SUBSCRIBERS, REMINDERS_SET, MEANINGFUL_CALL_ATTEMPT, PROFILE_VISIT, PROFILE_AND_PAGE_ENGAGEMENT, ADVERTISER_SILOED_VALUE, AUTOMATIC_OBJECTIVE, MESSAGING_APPOINTMENT_CONVERSION}* | The optimization goal this ad set is using.<br><br>`NONE`: Only available in read mode for campaigns created pre-v2.4.<br><br>`APP_INSTALLS`: Optimize for people more likely to install your app.<br><br>`AD_RECALL_LIFT`: Optimize for people more likely to remember seeing your ads.<br><br>`CLICKS`: Deprecated. Only available in read mode.<br><br>`ENGAGED_USERS`: Optimize for people more likely to take a particular action in your app.<br><br>`EVENT_RESPONSES`: Optimize for people more likely to attend your event.<br><br>`IMPRESSIONS`: Show the ads as many times as possible.<br><br>`LEAD_GENERATION`: Optimize for people more likely to fill out a lead generation form.<br><br>`QUALITY_LEAD`: Optimize for people who are likely to have a deeper conversation with advertisers after lead submission.<br><br>`LINK_CLICKS`: Optimize for people more likely to click in the link of the ad.<br><br>`OFFSITE_CONVERSIONS`: Optimize for people more likely to make a conversion on the site.<br><br>`PAGE_LIKES`: Optimize for people more likely to like your page.<br><br>`POST_ENGAGEMENT`: Optimize for people more likely to engage with your post.<br><br>`QUALITY_CALL`: Optimize for people who are likely to call the advertiser.<br><br>`REACH`: Optimize to reach the most unique users for each day or interval specified in `frequency_control_specs`.<br><br>`LANDING_PAGE_VIEWS`: Optimize for people who are most likely to click on and load your chosen landing page.<br><br>`VISIT_INSTAGRAM_PROFILE`: Optimize for visits to the advertiser's Instagram profile.<br><br>`VALUE`: Optimize for maximum total purchase value within the specified attribution window.<br><br>`THRUPLAY`: Optimize delivery of your ads to people who are more likely to play your ad to completion, or play it for at least 15 seconds.<br><br>`DERIVED_EVENTS`: Optimize for retention, which reaches people who are most likely to return to the app and open it again during a given time frame after installing. You can choose either two days, meaning the app is likely to be reopened between 24 and 48 hours after installation; or seven days, meaning the app is likely to be reopened between 144 and 168 hours after installation.<br><br>`APP_INSTALLS_AND_OFFSITE_CONVERSIONS`: Optimizes for people more likely to install your app and make a conversion on your site. <br><br>`CONVERSATIONS`: Directs ads to people more likely to have a conversation with the business.<br> |
| `optimization_sub_event`<br><br>*string* | Optimization sub event for a specific optimization goal. For example: Sound-On event for Video-View-2s optimization goal.<br> |
| `pacing_type`<br><br>*list<string>* | Defines the pacing type, standard or using ad scheduling<br> |
| `promoted_object`<br><br>*[AdPromotedObject](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-promoted-object)* | The object this ad set is promoting across all its ads.<br> |
| `recommendations`<br><br>*list<AdRecommendation>* | If there are recommendations for this ad set, this field includes them. Otherwise, will not be included in the response. This field is not included in redownload mode.<br> |
| `recurring_budget_semantics`<br><br>*bool* | If this field is `true`, your daily spend may be more than your daily budget while your weekly spend will not exceed 7 times your daily budget. More details explained in the [Ad Set Budget](https://developers.facebook.com/documentation/ads-commerce/marketing-api) document. If this is `false`, your amount spent daily will not exceed the daily budget. This field is not applicable for lifetime budgets.<br> |
| `regional_regulated_categories`<br><br>*list<enum>* | This param is used to specify `regional_regulated_categories`. Currently it supports `null` and the following values:<br><br><br>• TAIWAN_FINSERV: Use this value to declare a Financial Service ad set if the ad set targets Taiwan Audience<br>• AUSTRALIA_FINSERV: Use this value to declare a Financial Service ad set if the ad set targets Australia Audience<br>• INDIA_FINSERV: Use this value to declare a Securities and Investments ad set if the ad set targets India Audience<br>• TAIWAN_UNIVERSAL: Use this value to declare an ad set if it targets Taiwan Audience<br>• SINGAPORE_UNIVERSAL: Use this value to declare an ad set if it targets Singapore Audience<br>• THAILAND_UNIVERSAL: Use this value to declare an ad set if it targets Thailand Audience and you are seeing "Beneficiary/payer is missing" errors (3858634, 3858636).<br>• AUSTRALIA_UNIVERSAL: Use this value to declare an ad set if it targets Australia Audience and you are seeing "Beneficiary/payer is missing" errors (3858634, 3858636).<br>• MALAYSIA_UNIVERSAL: Use this value to declare an ad set if it targets Malaysia Audience and you are seeing "Beneficiary/payer is missing" errors (3858634, 3858636).<br>• BRAZIL_REGULATION: Use this value to declare an ad set if it targets Brazil Audience and you are seeing "Beneficiary/payer is missing" errors (3858634, 3858636).<br>• US_SECURITIES_LICENSING: Use this value to declare a Securities and Investments ad set if it targets United States audience and you are seeing "Beneficiary/payer is missing" errors (3858634, 3858636).<br><br><br>If an ad set is a Financial Service Ad and it targets Taiwan, it needs to declare both `TAIWAN_FINSERV` and `TAIWAN_UNIVERSAL`.<br><br><br>Example: `null` or `[AUSTRALIA_FINSERV]` or `[TAIWAN_FINSERV, TAIWAN_UNIVERSAL]`<br> |
| `regional_regulation_identities`<br><br>*RegionalRegulationIdentities* | This param is used to specify regional_regulation_identities used to represent the ad set. Currently it supports the following fields:<br><br><br>• taiwan_finserv_beneficiary: used for TAIWAN_FINSERV category<br>• taiwan_finserv_payer: used for TAIWAN_FINSERV category<br>• australia_finserv_beneficiary: used for AUSTRALIA_FINSERV category<br>• australia_finserv_payer: used for AUSTRALIA_FINSERV category<br>• india_finserv_beneficiary: used for INDIA_FINSERV category<br>• india_finserv_payer: used for INDIA_FINSERV category<br>• taiwan_universal_beneficiary: used for TAIWAN_UNIVERSAL category<br>• taiwan_universal_payer: used for TAIWAN_UNIVERSAL category<br>• singapore_universal_beneficiary: used for SINGAPORE_UNIVERSAL category<br>• singapore_universal_payer: used for SINGAPORE_UNIVERSAL category<br>• universal_beneficiary: used for AUSTRALIA_UNIVERSAL, BRAZIL_REGULATION, MALAYSIA_UNIVERSAL, THAILAND_UNIVERSAL, and US_SECURITIES_LICENSING categories<br>• universal_payer: used for AUSTRALIA_UNIVERSAL, BRAZIL_REGULATION, MALAYSIA_UNIVERSAL, THAILAND_UNIVERSAL, and US_SECURITIES_LICENSING categories<br><br><br>For any other beneficiary and payer requirement that doesn't have its own fields in this list, use `universal_beneficiary` and `universal_payer`.<br><br><br>Example:<br><br><br>`regional_regulation_identities: {<br>"taiwan_finserv_beneficiary": <verified_identity_id>,<br>"taiwan_finserv_payer": <verified_identity_id>,<br>"taiwan_universal_beneficiary": <verified_identity_id>,<br>"taiwan_universal_payer": <verified_identity_id>,<br>}`<br><br><br>During creation and update, the passed identities fields need to correspond to declared categories. Both beneficiary and payer identities must be included, and they can use the same identity ID.<br><br><br>To update an existing ad set identities, you need to pass new values for both categories and identities to overwrite the identity id or `null` to remove existing id.<br><br><br>For example:<br><br><br>Upon creation, `regional_regulated_categories` is `[TAIWAN_FINSERV, TAIWAN_UNIVERSAL]` and `regional_regulation_identities` is<br><br><br>`regional_regulation_identities: {<br>"taiwan_finserv_beneficiary": <id_123>,<br>"taiwan_finserv_payer": <id_123>,<br>"taiwan_universal_beneficiary": <id_456>,<br>"taiwan_universal_payer": <id_456>,<br>}`<br><br><br>For update, passing `[TAIWAN_UNIVERSAL]` and<br>`regional_regulation_identities: {<br>"taiwan_finserv_beneficiary": null<br>"taiwan_finserv_payer": null,<br>"taiwan_universal_beneficiary": <id_789>,<br>"taiwan_universal_payer": <id_789>,<br>}`<br><br><br>will remove `TAIWAN_FINSERV` declaration and update the identities ID of `TAIWAN_UNIVERSAL`<br> |
| `review_feedback`<br><br>*string* | Reviews for dynamic creative ad<br> |
| `rf_prediction_id`<br><br>*id* | Reach and frequency prediction ID<br> |
| `source_adset`<br><br>*[AdSet](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign)* | The source ad set that this ad set was copied from<br> |
| `source_adset_id`<br><br>*numeric string* | The source ad set id that this ad set was copied from<br> |
| `start_time`<br><br>*datetime* | Start time, in UTC UNIX timestamp<br> |
| `status`<br><br>*enum {ACTIVE, PAUSED, DELETED, ARCHIVED}* | The status set at the ad set level. It can be different from the<br>effective status due to its parent campaign. The field returns the same<br>value as `configured_status`, and is the suggested one to use.<br> |
| `targeting`<br><br>*Targeting* | Targeting<br> |
| `targeting_optimization_types` This field is only accessible in v12.0 or later.<br><br>*list<KeyValue:string,int32>* | Targeting options that are relaxed and used as a signal for optimization<br> |
| `time_based_ad_rotation_id_blocks`<br><br>*list<list<integer>>* | Specify ad creative that displays at custom date ranges in a campaign<br>as an array. A list of Adgroup IDs. The list of ads to display for each<br>time range in a given schedule. For example display first ad in Adgroup<br>for first date range, second ad for second date range, and so on. You<br>can display more than one ad per date range by providing more than<br>one ad ID per array. For example set<br>`time_based_ad_rotation_id_blocks` to [[1], [2, 3], [1, 4]]. On the<br>first date range show ad 1, on the second date range show ad 2 and ad 3<br>and on the last date range show ad 1 and ad 4. Use with<br>`time_based_ad_rotation_intervals` to specify date ranges.<br> |
| `time_based_ad_rotation_intervals`<br><br>*list<unsigned int32>* | Date range when specific ad creative displays during a campaign.<br>Provide date ranges in an array of UNIX timestamps where each<br>timestamp represents the start time for each date range. For example a<br>3-day campaign from May 9 12am to  May 11 11:59PM PST can have three<br>date ranges, the first date range starts from May 9 12:00AM to<br>May 9 11:59PM, second date range starts from May 10 12:00AM to<br>May 10 11:59PM and last starts from  May 11 12:00AM to  May 11 11:59PM.<br>The first timestamp should match the campaign start time. The last<br>timestamp should be at least 1 hour before the campaign end time. You<br>must provide at least two date ranges. All date ranges must cover the<br>whole campaign length, so any date range cannot exceed campaign length.<br>Use with `time_based_ad_rotation_id_blocks` to specify ad creative for<br>each date range.<br> |
| `updated_time`<br><br>*datetime* | Time when the Ad Set was updated<br> |
| `use_new_app_click`<br><br>*bool* | If set, allows Mobile App Engagement ads to optimize for LINK_CLICKS<br> |
| `value_rule_set_id`<br><br>*numeric string* | value_rule_set_id<br> |

##### Edges

| Edge | Description |
| --- | --- |
| [`activities`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/activities)<br><br>*Edge<AdActivity>* | The activities of this ad set<br> |
| [`ad_studies`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/ad_studies)<br><br>*Edge<AdStudy>* | The ad studies containing this ad set<br> |
| [`adcreatives`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/adcreatives)<br><br>*Edge<AdCreative>* | The creatives of this ad set<br> |
| [`adrules_governed`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/adrules_governed)<br><br>*Edge<AdRule>* | Ad rules that govern this ad set - by default, this only returns rules that either directly mention the ad set by id or indirectly through the set `entity_type`<br> |
| [`ads`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/ads)<br><br>*Edge<Adgroup>* | The ads under this ad set<br> |
| [`asyncadrequests`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/asyncadrequests)<br><br>*Edge<AdAsyncRequest>* | Async ad requests for this ad set<br> |
| [`copies`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/copies)<br><br>*Edge<AdCampaign>* | The copies of this ad set<br> |
| [`delivery_estimate`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/delivery_estimate)<br><br>*Edge<AdCampaignDeliveryEstimate>* | The delivery estimate for this ad set<br> |
| [`message_delivery_estimate`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/message_delivery_estimate)<br><br>*Edge<MessageDeliveryEstimate>* | Delivery estimation of the marketing message campaign<br> |
| [`targetingsentencelines`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/targetingsentencelines)<br><br>*Edge<TargetingSentenceLine>* | The targeting description sentence for this ad set<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |
| 100 | Invalid parameter |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 190 | Invalid OAuth 2.0 Access Token |
| 200 | Permissions error |
| 2500 | Error parsing graph query |

### Creating

**Warning:** For v20.0+, the Impressions optimization goal is deprecated for the legacy Post Engagement objective and the `ON_POST` destination_type.

#### Examples {#create-examples}

Validate an ad set with a daily budget where the campaign objective is set to `APP_INSTALLS`.

```html
curl -X POST \
  -F 'name="Mobile App Installs Ad Set"' \
  -F 'daily_budget=1000' \
  -F 'bid_amount=2' \
  -F 'billing_event="IMPRESSIONS"' \
  -F 'optimization_goal="APP_INSTALLS"' \
  -F 'campaign_id="<AD_CAMPAIGN_ID>"' \
  -F 'promoted_object={
       "application_id": "<APP_ID>",
       "object_store_url": "<APP_STORE_URL>"
     }' \
  -F 'targeting={
       "device_platforms": [
         "mobile"
       ],
       "facebook_positions": [
         "feed"
       ],
       "geo_locations": {
         "countries": [
           "US"
         ]
       },
       "publisher_platforms": [
         "facebook",
         "audience_network"
       ],
       "user_os": [
         "IOS"
       ]
     }' \
  -F 'status="PAUSED"' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v27.0/act_<AD_ACCOUNT_ID>/adsets
```

#### Considerations {#create-considerations}

##### Bid/Budget Validations

**Note:**

- All values in this section are in US Dollars.

- Differenct currencies have different minimum daily budget limits.

- Minimum values are defined in terms of the daily budget but apply to lifetime budgets as well.

- Minimum budget takes the total spent budget into account.

When creating an ad set, there will be a minimum budget for different billing events (Clicks, Impressions, Actions).  If the minimum daily budget is $5, a campaign lasting 5 days will need at least $25 for budget.

**Warning:** Budget amounts shown are for illustrative purposes only and can change based on situation.

If `bid_strategy` is set to `LOWEST_COST_WITHOUT_CAP` in the ad set:

| Billing Event | Minimum Daily Budget |
| --- | --- |
| Impressions | $0.50 |
| Clicks/Likes/Video Views | $2.50 |
| Low-frequency Actions<br>(Includes mobile app installs, offer claims, or canvas app installs) | $40<br>**Important:** This minimum daily budget is the same for all countries. |

If `bid_strategy` is set to `LOWEST_COST_WITH_BID_CAP` in the ad set:

| Billing Event | Minimum Daily Budget |
| --- | --- |
| Impressions | At least the `bid_amount`. For example, if the bid amount is $10, then $10 will be the minimum budget required. |
| Clicks/Actions | 5x the `bid_amount` for a Click or Action. For example, if the bid amount is $5 per click/action, then $25 will be the minimum budget required. |

**Note:** Budgets in non-USD currencies will be converted and validated upon time of ad set creation.

**Note:** For ads belonging to ad accounts from countries in the list below, the minimum values are 2x the ones in the tables. For example, if the billing event is an Impression, the minimum daily budget is $0.50, but in the the following countries the minimum would be $1.00:

Australia, Austria, Belgium, Canada, Denmark, Finland, France, Germany, Greece, Hong Kong, Israel, Italy, Japan, Netherlands, New Zealand, Norway, Singapore, South Korea, Spain, Sweden, Switzerland, Taiwan, United Kingdom, United States of America.

The only exception to this rule are Low-Frequency Actions when `bid_strategy` is `LOWEST_COST_WITHOUT_CAP`.

##### Locale targeted page post

If you promote a Page post which has been targeted by locale the ad set targeting must include the same, or a subset of, locale targeting as the Page post.

E.g. if the Page post is targeted at locales 6 (US English) and 24 (UK English), then the ad set must be targeted at one or more of the same locales.

##### Mobile App Ads

Mobile app ad sets should

- be used in conjunction with [targeting spec](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/advanced-targeting#mobile) fields `user_device` and `user_os`

- have a `MOBILE_APP_*` objective on the [campaign](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group)

##### Desktop App Ads

Desktop app ad sets must

- include a [targeting spec](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/advanced-targeting) of either

- `'page_types':['desktopfeed']` or

- `'page_types':['rightcolumn']` or

- `'page_types':['desktop']` along with the other targeting options you have selected.

- include a `CANVAS_APP_*` objective

##### Lookalike Expansion

Beginning with v13.0, for newly created ad sets that optimize for value, conversions, or app events, lookalike expansion will be turned on by default and cannot be disabled. When getting an ad set that optimizes for value, conversions, or app events, we will return a new lookalike property in the `targeting_optimization_types` map that indicates lookalike expansion is enabled and complements the existing `detailed_targeting` property for the detailed targeting expansion.

##### Targeting DSA Regulated Locations (EU)

For ad sets targeting the EU and/or associated territories, the `dsa_payor` and `dsa_beneficiary` fields are required. The information provided in these 2 fields  will be shown to end users to indicate who is paying for the ad and who is the beneficiary of the ad.

**Request**

Include the following fields in an API call to the `/{adset_id}` endpoint.

```
{
  "dsa_payor": "<PAYOR_NAME>",
  "dsa_beneficiary": "<BENEFICIARY_NAME>"
  ...
}
```

**Fields**

| Name | Description |
| --- | --- |
| `dsa_payor`<br><br>string (max 512 char) | The payor of all ads in this ad set. |
| `dsa_beneficiary`<br><br>string (max 512 char) | The beneficiary of all ads in this ad set. |

If these fields are not provided, the API may returns the following errors:

**Payor missing error**

```
{
  "error": {
    "message": "Invalid parameter",
    "type": "FacebookApiException",
    "code": 100,
    "error_data": "{\"blame_field_specs\":[[\"dsa_payor\"]]}",
    "error_subcode": 3858079,
    "is_transient": false,
    "error_user_title": "No payor provided in DSA regulated region",
    "error_user_msg": "The DSA requires ads to provide payor information in regulated regions. Updating/creating ad needs to provide payor of the ad.",
    "fbtrace_id": "fbtrace_id"
  },
  "__fb_trace_id__": "fbtrace_id",
  "__www_request_id__": "request_id"
}
```

**Beneficiary missing error**

```
{
  "error": {
    "message": "Invalid parameter",
    "type": "FacebookApiException",
    "code": 100,
    "error_data": "{\"blame_field_specs\":[[\"dsa_beneficiary\"]]}",
    "error_subcode": 3858081,
    "is_transient": false,
    "error_user_title": "No payor/beneficiary provided in DSA regulated location",
    "error_user_msg": "The DSA requires ads to provide beneficiary information in regulated regions. Updating/creating ad needs to provide beneficiary of the ad.",
    "fbtrace_id": "fbtrace_id"
  },
  "__fb_trace_id__": "fbtrace_id",
  "__www_request_id__": "request_id"
}
```

#### /{ad_set_id}/copies
You can make a POST request to *copies* edge from the following paths:

- [/{ad_set_id}/copies](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/copies)

When posting to this edge, an [AdSet](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `campaign_id`<br><br>*numeric string or integer* | Single ID of a campaign to make parent of the copy. The copy inherits all campaign settings, such as budget from the parent.Ignore if you want to keep the copy under the original campaign parent.<br> |
| `deep_copy`<br><br>*boolean* | **Default value: **`false`<br>Whether to copy all the child ads. Limits: the total number of children ads to copy should not exceed 3 for a synchronous call and 51 for an asynchronous call.<br> |
| `end_time`<br><br>*datetime* | The end time of the set, e.g. `2015-03-12 23:59:59-07:00` or `2015-03-12 23:59:59 PDT`. UTC UNIX timestamp. When creating a set with a daily budget, specify `end_time=0` to set the set to be ongoing without end date. If not set, the copied adset will inherit the end time from the original set<br> |
| `rename_options`<br><br>*JSON or object-like arrays* | Rename options<br><br><br>`rename_strategy` *enum {DEEP_RENAME, ONLY_TOP_LEVEL_RENAME, NO_RENAME}*<br><br>**Default value: **`ONLY_TOP_LEVEL_RENAME`<br>`DEEP_RENAME`: will change this object's name and children's names in the copied object. `ONLY_TOP_LEVEL_RENAME`: will change the this object's name but won't change the children's name in the copied object. `NO_RENAME`: will change no name in the copied object<br><br><br>`rename_prefix` *string*<br>A prefix to copy names. Defaults to null if not provided.<br><br><br>`rename_suffix` *string*<br>A suffix to copy names. Defaults to null if not provided and appends a localized string of `- Copy` based on the ad account locale.<br> |
| `start_time`<br><br>*datetime* | The start time of the set, e.g. `2015-03-12 23:59:59-07:00` or `2015-03-12 23:59:59 PDT`. UTC UNIX timestamp. If not set, the copied adset will inherit the start time from the original set<br> |
| `status_option`<br><br>*enum {ACTIVE, PAUSED, INHERITED_FROM_SOURCE}* | **Default value: **`PAUSED`<br>`ACTIVE`: the copied adset will have active status. `PAUSED`: the copied adset will have paused status. `INHERITED_FROM_SOURCE`: the copied adset will have the status from the original set.<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *copied_adset_id* in the return type.

```
Struct  {
copied_adset_id: numeric string,
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
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |
| 2695 | The ad set creation reached its campaign group(ios14) limit. |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |

#### /act_{ad_account_id}/adsets
You can make a POST request to *adsets* edge from the following paths:

- [/act_{ad_account_id}/adsets](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/adsets)

When posting to this edge, an [AdSet](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign) will be created.

##### Example

#### HTTP
```
POST /v25.0/act_<AD_ACCOUNT_ID>/adsets HTTP/1.1
Host: graph.facebook.com

name=My+First+Adset&lifetime_budget=20000&start_time=2026-05-12T10%3A45%3A09-0700&end_time=2026-05-22T10%3A45%3A09-0700&campaign_id=%3CAD_CAMPAIGN_ID%3E&bid_amount=100&billing_event=LINK_CLICKS&optimization_goal=LINK_CLICKS&targeting=%7B%22facebook_positions%22%3A%5B%22feed%22%5D%2C%22geo_locations%22%3A%7B%22countries%22%3A%5B%22US%22%5D%7D%2C%22publisher_platforms%22%3A%5B%22facebook%22%2C%22audience_network%22%5D%7D&status=PAUSED
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->post(
    '/act_<AD_ACCOUNT_ID>/adsets',
    array (
      'name' => 'My First Adset',
      'lifetime_budget' => '20000',
      'start_time' => '2026-05-12T10:45:09-0700',
      'end_time' => '2026-05-22T10:45:09-0700',
      'campaign_id' => '<AD_CAMPAIGN_ID>',
      'bid_amount' => '100',
      'billing_event' => 'LINK_CLICKS',
      'optimization_goal' => 'LINK_CLICKS',
      'targeting' => '{"facebook_positions":["feed"],"geo_locations":{"countries":["US"]},"publisher_platforms":["facebook","audience_network"]}',
      'status' => 'PAUSED',
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
    "/act_<AD_ACCOUNT_ID>/adsets",
    "POST",
    {
        "name": "My First Adset",
        "lifetime_budget": "20000",
        "start_time": "2026-05-12T10:45:09-0700",
        "end_time": "2026-05-22T10:45:09-0700",
        "campaign_id": "<AD_CAMPAIGN_ID>",
        "bid_amount": "100",
        "billing_event": "LINK_CLICKS",
        "optimization_goal": "LINK_CLICKS",
        "targeting": "{\"facebook_positions\":[\"feed\"],\"geo_locations\":{\"countries\":[\"US\"]},\"publisher_platforms\":[\"facebook\",\"audience_network\"]}",
        "status": "PAUSED"
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
params.putString("name", "My First Adset");
params.putString("lifetime_budget", "20000");
params.putString("start_time", "2026-05-12T10:45:09-0700");
params.putString("end_time", "2026-05-22T10:45:09-0700");
params.putString("campaign_id", "<AD_CAMPAIGN_ID>");
params.putString("bid_amount", "100");
params.putString("billing_event", "LINK_CLICKS");
params.putString("optimization_goal", "LINK_CLICKS");
params.putString("targeting", "{\"facebook_positions\":[\"feed\"],\"geo_locations\":{\"countries\":[\"US\"]},\"publisher_platforms\":[\"facebook\",\"audience_network\"]}");
params.putString("status", "PAUSED");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/act_<AD_ACCOUNT_ID>/adsets",
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
  @"name": @"My First Adset",
  @"lifetime_budget": @"20000",
  @"start_time": @"2026-05-12T10:45:09-0700",
  @"end_time": @"2026-05-22T10:45:09-0700",
  @"campaign_id": @"<AD_CAMPAIGN_ID>",
  @"bid_amount": @"100",
  @"billing_event": @"LINK_CLICKS",
  @"optimization_goal": @"LINK_CLICKS",
  @"targeting": @"{\"facebook_positions\":[\"feed\"],\"geo_locations\":{\"countries\":[\"US\"]},\"publisher_platforms\":[\"facebook\",\"audience_network\"]}",
  @"status": @"PAUSED",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/act_<AD_ACCOUNT_ID>/adsets"
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
  -F 'name="My First Adset"' \
  -F 'lifetime_budget=20000' \
  -F 'start_time="2026-05-12T10:45:09-0700"' \
  -F 'end_time="2026-05-22T10:45:09-0700"' \
  -F 'campaign_id="<AD_CAMPAIGN_ID>"' \
  -F 'bid_amount=100' \
  -F 'billing_event="LINK_CLICKS"' \
  -F 'optimization_goal="LINK_CLICKS"' \
  -F 'targeting={
       "facebook_positions": [
         "feed"
       ],
       "geo_locations": {
         "countries": [
           "US"
         ]
       },
       "publisher_platforms": [
         "facebook",
         "audience_network"
       ]
     }' \
  -F 'status="PAUSED"' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/adsets
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=POST&path=act_%3CAD_ACCOUNT_ID%3E%2Fadsets%3Fname%3DMy%2BFirst%2BAdset%26lifetime_budget%3D20000%26start_time%3D2026-05-12T10%253A45%253A09-0700%26end_time%3D2026-05-22T10%253A45%253A09-0700%26campaign_id%3D%253CAD_CAMPAIGN_ID%253E%26bid_amount%3D100%26billing_event%3DLINK_CLICKS%26optimization_goal%3DLINK_CLICKS%26targeting%3D%257B%2522facebook_positions%2522%253A%255B%2522feed%2522%255D%252C%2522geo_locations%2522%253A%257B%2522countries%2522%253A%255B%2522US%2522%255D%257D%252C%2522publisher_platforms%2522%253A%255B%2522facebook%2522%252C%2522audience_network%2522%255D%257D%26status%3DPAUSED&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `adlabels`<br><br>*list<Object>* | Specifies list of labels to be associated with this object. This field is optional<br> |
| `ad_set_goal`<br><br>*Object* | The customer lifecycle strategy for this ad set. Available only for Sales (`OUTCOME_SALES`) ad sets; otherwise the write is rejected with error `1870252`. Writes merge with the existing goal: an omitted sub-field keeps its current value, and the effective `type` is the sent `type` or, if omitted, the existing one. A non-BROAD goal is not allowed on an ad set whose campaign is in a restricted special ad category (housing, employment, credit, financial products & services, education, or online gambling & gaming); such writes are rejected with error `1870261`.<br><br><br>`type` *int64*<br>Required whenever `ad_set_goal` is present (otherwise error `1870258`). Values writable via the API: `0` BROAD, `2` EXCLUDE_EXISTING_CUSTOMERS, `1` EXCLUDE_EXISTING_AND_ENGAGED_CUSTOMERS. Note the mapping: `2` excludes existing customers only, while `1` excludes both existing and engaged customers.<br><br><br>`existing_customers_exclusions` *list<numeric string>*<br>Custom audience IDs of existing customers to exclude. Required for `type` `1` and `2`, unless `existing_customers_audience_label_exclusions` is set or `existing_customers_auto_exclusion_retention_days` is non-zero.<br><br><br>`engaged_audiences_exclusions` *list<numeric string>*<br>Custom audience IDs of engaged audiences to exclude. Required for `type` `1`, unless `engaged_audiences_audience_label_exclusions` is set; not allowed for `type` `0` or `2` (error `1870254`).<br><br><br>`existing_customers_audience_label_exclusions` *list<enum {high_value_customers, low_value_customers, at_risk, disengaged, general_customers}>*<br>Customer audience labels to exclude. Excludes every custom audience in the ad account that carries one of these labels. Allowed for `type` `1` and `2`; only customer labels are accepted (error `1870279`). See [Audience labels](#ad-set-goal-audience-labels).<br><br><br>`engaged_audiences_audience_label_exclusions` *list<enum {qualified_leads, disqualified_leads, app_users, trial_users, engaged_users}>*<br>Engaged audience labels to exclude. Excludes every custom audience in the ad account that carries one of these labels. Allowed for `type` `1` only; only engaged audience labels are accepted (error `1870279`). See [Audience labels](#ad-set-goal-audience-labels).<br><br><br>`existing_customers_auto_exclusion_retention_days` *int64*<br>How many days back to automatically exclude people who purchased from you. Allowed values: `30`, `60`, `90`, `180`, or `730`, or `0` to turn the automatic exclusion off (otherwise error `1870283`). Allowed for `type` `1` and `2` only (error `1870281`). If omitted when the ad set gets a type `1` or `2` goal, no automatic exclusion is applied. See [Automatic exclusion of recent purchasers](#ad-set-goal-auto-exclusion).<br> |
| `adset_schedule`<br><br>*list<Object>* | Ad set schedule, representing a delivery schedule for a single day<br><br><br>`start_minute` *int64*<br>A 0 based minute of the day representing when the schedule starts<br><br>**[required]**<br><br><br>`end_minute` *int64*<br>A 0 based minute of the day representing when the schedule ends<br><br>**[required]**<br><br><br>`days` *list<int64>*<br>Array of ints representing which days the schedule is active. Valid values are 0-6 with 0 representing Sunday, 1 representing Monday, ... and 6 representing Saturday.<br><br>**[required]**<br><br><br>`timezone_type` *enum {USER, ADVERTISER}*<br><br>**Default value: **`USER` |
| `attribution_spec`<br><br>*list<JSON object>* | Conversion attribution spec used for attributing conversions for optimization. Supported window lengths differ by optimization goal and campaign objective.<br><br><br>`event_type` *enum {CLICK_THROUGH, VIEW_THROUGH, ENGAGED_VIDEO_VIEW}*<br>**[required]**<br><br><br>`window_days` *int64*<br>**[required]**<br><br><br>`weight` *float*<br><br>**Default value: **`100` |
| `automatic_manual_state`<br><br>*enum{UNSET, AUTOMATIC, MANUAL}* | automatic_manual_state<br> |
| `bid_amount`<br><br>*integer* | Bid cap or target cost for this ad set. The bid cap used in a *lowest cost bid strategy* is defined as the maximum bid you want to pay for a result based on your `optimization_goal`. The target cost used in a *target cost bid strategy* lets Facebook bid to meet your target on average and keep costs stable as you spend. If an ad level `bid_amount` is specified, updating this value will overwrite the previous ad level bid. Unless you are using [Reach and Frequency](https://developers.facebook.com/docs/marketing-api/reachandfrequency), `bid_amount` is required if `bid_strategy` is set to `LOWEST_COST_WITH_BID_CAP` or `COST_CAP`.<br><br>The bid amount's unit is cents for currencies like USD, EUR, and the basic unit for currencies like JPY, KRW. The bid amount for ads with `IMPRESSION` or `REACH` as `billing_event` is per 1,000 occurrences, and has to be at least 2 US cents or more. For ads with other `billing_event`s, the bid amount is for each occurrence, and has a minimum value 1 US cents. The minimum bid amounts of other currencies are of similar value to the US Dollar values provided.<br> |
| `bid_strategy` This field is only accessible in v3.0 or later.<br><br>*enum{LOWEST_COST_WITHOUT_CAP, LOWEST_COST_WITH_BID_CAP, COST_CAP, LOWEST_COST_WITH_MIN_ROAS}* | Choose bid strategy for this ad set to suit your specific business goals.<br>Each strategy has tradeoffs and may be available for certain `optimization_goal`s:<br><br>`LOWEST_COST_WITHOUT_CAP`: Designed to get the most results for your budget based on<br>your ad set `optimization_goal` without limiting your bid amount. This is the best strategy<br>if you care most about cost efficiency. However with this strategy it may be harder to get<br>stable average costs as you spend. This strategy is also known as *automatic bidding*.<br>Learn more in [Ads Help Center, About bid strategies: Lowest cost](https://www.facebook.com/business/help/721453268045071).<br><br>`LOWEST_COST_WITH_BID_CAP`: Designed to get the most results for your budget based on<br>your ad set `optimization_goal` while limiting actual bid to your specified<br>amount. With a bid cap you have more control over your<br>cost per actual optimization event. However if you set a limit which is too low you may<br>get less ads delivery. If you select this, you must provide<br>a bid cap with the `bid_amount` field.<br>Note: during creation this bid strategy is set if you provide `bid_amount` only.<br>This strategy is also known as *manual maximum-cost bidding*.<br>Learn more in [Ads Help Center, About bid strategies: Lowest cost](https://www.facebook.com/business/help/721453268045071).<br><br><br>Notes:<br><br><br>• If you enable campaign budget optimization, you should set `bid_strategy` at the parent campaign level.<br><br>• `TARGET_COST` bidding strategy has been deprecated with [Marketing API v9](https://developers.facebook.com/docs/graph-api/changelog/version9.0).<br><br> |
| `billing_event`<br><br>*enum{APP_INSTALLS, CLICKS, IMPRESSIONS, LINK_CLICKS, NONE, OFFER_CLAIMS, PAGE_LIKES, POST_ENGAGEMENT, THRUPLAY, PURCHASE, LISTING_INTERACTION}* | The billing event that this ad set is using:<br>APP_INSTALLS: Pay when people install your app.<br>CLICKS: Deprecated.<br>IMPRESSIONS: Pay when the ads are shown to people.<br>LINK_CLICKS: Pay when people click on the link of the ad.<br>OFFER_CLAIMS: Pay when people claim the offer.<br>PAGE_LIKES: Pay when people like your page.<br>POST_ENGAGEMENT: Pay when people engage with your post.<br>VIDEO_VIEWS: Pay when people watch your video ads for at least 10 seconds.<br>THRUPLAY: Pay for ads that are played to completion, or played for at least 15 seconds.<br> |
| `brand_safety_config`<br><br>*JSON object* | Brand safety and suitability campaign configuration options. This feature has limited availability and is available only to select ad accounts. Requests from ineligible ad accounts that include this field return an error.<br><br><br>`comment_moderation_filter` *enum {AD_DISABLED, DEFAULT}*<br>Turn comments on and off for your Facebook and Instagram ads. Turning comments off will hide previous comments. Comments on social issues, elections or politics ads cannot be turned off. By default, anyone who can see your ad can comment on it. Use this setting to turn comments off.<br>`AD_DISABLED`: Fully disable comments on ads.<br>`DEFAULT`: Public — everyone can comment (default value).<br><br>For ad accounts that can use `fb_comment_moderation_filter` and `ig_comment_moderation_filter`, setting this field applies the same value to both. If the request also sets either of those fields, this field is ignored. When read, it returns `AD_DISABLED` only if comments are off on both Facebook and Instagram. Sending the value this field already returns changes nothing. For example, if comments are off only on Facebook, this field returns `DEFAULT`, and sending `DEFAULT` does not turn Facebook comments back on. If your ad account can use `fb_comment_moderation_filter` and `ig_comment_moderation_filter`, use those instead. For other ad accounts, this field controls both platforms.<br><br><br>`fb_comment_moderation_filter` *enum {AD_DISABLED, DEFAULT}*<br>Turn comments on and off for your ads on Facebook only. Turning comments off will hide previous comments. Comments on social issues, elections or politics ads cannot be turned off. If you leave this field out, the current Facebook setting is kept. This field is available only to select ad accounts; for other ad accounts, the value is ignored.<br>`AD_DISABLED`: Fully disable comments on your Facebook ads.<br>`DEFAULT`: Public — everyone can comment (default value).<br><br><br>`ig_comment_moderation_filter` *enum {AD_DISABLED, DEFAULT}*<br>Turn comments on and off for your ads on Instagram only. Turning comments off will hide previous comments. Comments on social issues, elections or politics ads cannot be turned off. If you leave this field out, the current Instagram setting is kept. This field is available only to select ad accounts; for other ad accounts, the value is ignored.<br>`AD_DISABLED`: Fully disable comments on your Instagram ads.<br>`DEFAULT`: Public — everyone can comment (default value).<br><br><br>`threads_comment_moderation_filter` *enum {AD_DISABLED, DEFAULT}*<br>Turn replies on and off for your ads on Threads. This setting is separate from `comment_moderation_filter`, which does not affect Threads. If you leave this field out, the current Threads setting is kept. This field is available only to select ad accounts; for other ad accounts, the value is ignored.<br>`AD_DISABLED`: Turn off replies on your Threads ads.<br>`DEFAULT`: Public — everyone can reply (default value).<br> |
| `budget_schedule_specs`<br><br>*list<JSON or object-like arrays>* | Initial high demand periods to be created with the ad set.<br><br>Provide list of `time_start`, `time_end`,`budget_value`, and `budget_value_type`.<br>For example,<br>-F 'budget_schedule_specs=[{<br><br>"time_start":1699081200,<br><br>"time_end":1699167600,<br><br>"budget_value":100,<br><br>"budget_value_type":"ABSOLUTE"<br><br>}]'<br><br>See [High Demand Period](https://developers.facebook.com/docs/graph-api/reference/high-demand-period) for more details on each field.<br><br><br>`id` *int64*<br><br>`time_start` *datetime*<br><br>`time_end` *datetime*<br><br>`budget_value` *int64*<br><br>`budget_value_type` *enum{ABSOLUTE, MULTIPLIER}*<br><br>`recurrence_type` *enum{ONE_TIME, WEEKLY}*<br><br>`weekly_schedule` *list<JSON or object-like arrays>*<br><br>`days` *list<int64>*<br><br>`minute_start` *int64*<br><br>`minute_end` *int64*<br><br>`timezone_type` *string* |
| `budget_source`<br><br>*enum{NONE, RMN}* | budget_source<br> |
| `budget_split_set_id`<br><br>*numeric string or integer* | budget_split_set_id<br> |
| `campaign_attribution`<br><br>*enum{}* | campaign_attribution<br> |
| `campaign_id`<br><br>*numeric string or integer* | The ad campaign you wish to add this ad set to.<br> |
| `campaign_spec`<br><br>*Campaign spec* | Provide `name`, `objective` and `buying_type` for a campaign you want to create. Otherwise you need to provide `campaign_id` for an existing ad campaign. For example:<br>-F 'campaign_spec={<br>  "name": "Inline created campaign",<br>  "objective": "CONVERSIONS",<br>  "buying_type": "AUCTION"<br>}'<br><br>Please refer to the [Outcome-Driven Ads Experiences mapping table](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group#odax-mapping) to find new objectives and their corresponding destination types, optimization goals and promoted objects.<br> |
| `contextual_bundling_spec`<br><br>*Object* | settings of Contextual Bundle to support ads serving in Facebook contextual surfaces<br><br><br>`status` *enum{OPT_OUT, OPT_IN}* |
| `creative_sequence`<br><br>*list<numeric string or integer>* | Order of the adgroup sequence to be shown to users<br> |
| `daily_budget`<br><br>*int64* | The daily budget defined in your [account currency](https://developers.facebook.com/documentation/ads-commerce/marketing-api), allowed only for ad sets with a duration (difference between `end_time` and `start_time`) longer than 24 hours. <br>Either `daily_budget` or `lifetime_budget` must be greater than 0.<br> |
| `daily_imps`<br><br>*int64* | Daily impressions. Available only for campaigns with `buying_type=FIXED_CPM`<br> |
| `daily_min_spend_target`<br><br>*int64* | Daily minimum spend target of the ad set defined in your account currency. To use this field, daily budget must be specified in the Campaign. This target is not a guarantee but our best effort.<br> |
| `daily_spend_cap`<br><br>*int64* | Daily spend cap of the ad set defined in your account currency. To use this field, daily budget must be specified in the Campaign. Set the value to 922337203685478 to remove the spend cap.<br> |
| `destination_type`<br><br>*enum{WEBSITE, APP, MESSENGER, APPLINKS_AUTOMATIC, WHATSAPP, INSTAGRAM_DIRECT, FACEBOOK, MESSAGING_MESSENGER_WHATSAPP, MESSAGING_INSTAGRAM_DIRECT_MESSENGER, MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP, MESSAGING_INSTAGRAM_DIRECT_WHATSAPP, SHOP_AUTOMATIC, ON_AD, ON_POST, ON_EVENT, ON_VIDEO, ON_PAGE, INSTAGRAM_PROFILE, FACEBOOK_PAGE, INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE, INSTAGRAM_LIVE, FACEBOOK_LIVE, IMAGINE}* | Destination of ads in this Ad Set. Options include: Website, App, Messenger, `INSTAGRAM_DIRECT`, `INSTAGRAM_PROFILE`.<br> |
| `dsa_beneficiary`<br><br>*string* | dsa_beneficiary<br> |
| `dsa_payor`<br><br>*string* | dsa_payor<br> |
| `end_time`<br><br>*datetime* | End time, required when `lifetime_budget` is specified. e.g. `2015-03-12 23:59:59-07:00` or `2015-03-12 23:59:59 PDT`. When creating a set with a daily budget, specify `end_time=0` to set the set to be ongoing and have no end date. UTC UNIX timestamp<br> |
| `execution_options`<br><br>*list<enum{validate_only, include_recommendations}>* | **Default value: **`Set`<br>An execution setting<br> `validate_only`: when this option is specified, the API call will not perform the mutation but will run through the validation rules against values of each field. <br>`include_recommendations`: this option cannot be used by itself. When this option is used, recommendations  for ad object's configuration will be included. A separate section [recommendations](https://developers.facebook.com/docs/marketing-api/reference/ad-recommendation) will be included in the response, but only if recommendations for this specification exist.<br>If the call passes validation or review, response will be `{"success": true}`. If the call does not pass, an error will be returned with more details. These options can be used to improve any UI to display errors to the user much sooner, e.g. as soon as a new value is typed into any field corresponding to this ad object, rather than at the upload/save stage, or after review.<br> |
| `existing_customer_budget_percentage`<br><br>*int64* | existing_customer_budget_percentage<br> |
| `frequency_control_specs`<br><br>*list<Object>* | An array of frequency control specs for this ad set. Writes to this field are only available in ad sets where `REACH` and `THRUPLAY` are the performance goal.<br><br><br>`event` *enum{IMPRESSIONS, VIDEO_VIEWS, VIDEO_VIEWS_2S, VIDEO_VIEWS_15S}*<br>Event name, only `IMPRESSIONS` currently.<br><br>**[required]**<br><br><br>`interval_days` *integer*<br>Interval period in days, between 1 and 90<br>(inclusive)<br><br>**[required]**<br><br><br>`max_frequency` *integer*<br>The maximum frequency, between 1 and 90<br>(inclusive)<br><br>**[required]**<br><br><br>`type` *enum{NONE, CAP, TARGET}* |
| `is_dc_follow_optimized`<br><br>*boolean* | is_dc_follow_optimized<br> |
| `is_dynamic_creative` This field is only accessible in v3.2 or later.<br><br>*boolean* | Indicates the ad set must only be used for dynamic creatives. Dynamic creative ads can be created in this ad set. Defaults to `false`<br> |
| `is_sac_cfca_terms_certified`<br><br>*boolean* | is_sac_cfca_terms_certified<br> |
| `lifetime_budget`<br><br>*int64* | Lifetime budget, defined in  your [account currency](https://developers.facebook.com/documentation/ads-commerce/marketing-api). If specified, you must also specify an `end_time`.<br>Either `daily_budget` or `lifetime_budget` must be greater than 0.<br> |
| `lifetime_imps`<br><br>*int64* | Lifetime impressions. Available only for campaigns with `buying_type=FIXED_CPM`<br> |
| `lifetime_min_spend_target`<br><br>*int64* | Lifetime minimum spend target of the ad set defined in your account currency. To use this field, lifetime budget must be specified in the Campaign. This target is not a guarantee but our best effort.<br> |
| `lifetime_spend_cap`<br><br>*int64* | Lifetime spend cap of the ad set defined in your account currency. To use this field, lifetime budget must be specified in the Campaign. Set the value to 922337203685478 to remove the spend cap.<br> |
| `max_budget_spend_percentage`<br><br>*int64* | max_budget_spend_percentage<br> |
| `min_budget_spend_percentage`<br><br>*int64* | min_budget_spend_percentage<br> |
| `multi_event_conversion_attribution_window_seconds`<br><br>*int64* | multi_event_conversion_attribution_window_seconds<br> |
| `multi_optimization_goal_weight`<br><br>*enum{UNDEFINED, BALANCED, PREFER_INSTALL, PREFER_EVENT}* | multi_optimization_goal_weight<br> |
| `name`<br><br>*string* | Ad set name, max length of 400 characters.<br><br>**[required]**<br><br>**[supports emoji]**<br> |
| `optimization_goal`<br><br>*enum{NONE, APP_INSTALLS, AD_RECALL_LIFT, ENGAGED_USERS, EVENT_RESPONSES, IMPRESSIONS, LEAD_GENERATION, QUALITY_LEAD, LINK_CLICKS, OFFSITE_CONVERSIONS, PAGE_LIKES, POST_ENGAGEMENT, QUALITY_CALL, REACH, LANDING_PAGE_VIEWS, VISIT_INSTAGRAM_PROFILE, ENGAGED_PAGE_VIEWS, VALUE, THRUPLAY, DERIVED_EVENTS, APP_INSTALLS_AND_OFFSITE_CONVERSIONS, CONVERSATIONS, IN_APP_VALUE, MESSAGING_PURCHASE_CONVERSION, MESSAGING_DEEP_CONVERSATION_AND_FOLLOW, SUBSCRIBERS, REMINDERS_SET, MEANINGFUL_CALL_ATTEMPT, PROFILE_VISIT, PROFILE_AND_PAGE_ENGAGEMENT, ADVERTISER_SILOED_VALUE, AUTOMATIC_OBJECTIVE, MESSAGING_APPOINTMENT_CONVERSION}* | What the ad set is optimizing for. <br>`APP_INSTALLS`: Will optimize for people more likely to install your app.<br>`ENGAGED_USERS`: Will optimize for people more likely to take a particular action in your app.<br>`EVENT_RESPONSES`: Will optimize for people more likely to attend your event.<br>`IMPRESSIONS`: Will show the ads as many times as possible.<br>`LEAD_GENERATION`: Will optimize for people more likely to fill out a lead generation form.<br>`LINK_CLICKS`: Will optimize for people more likely to click in the link of the ad.<br>`OFFER_CLAIMS`: Will optimize for people more likely to claim the offer.<br>`OFFSITE_CONVERSIONS`: Will optimize for people more likely to make a conversion in the site<br>`PAGE_ENGAGEMENT`: Will optimize for people more likely to engage with your page.<br>`PAGE_LIKES`: Will optimize for people more likely to like your page.<br>`POST_ENGAGEMENT`: Will optimize for people more likely to engage with your post.<br>`REACH`: Optimize to reach the most unique users of each day or interval specified in `frequency_control_specs`.<br>`SOCIAL_IMPRESSIONS`: Increase the number of impressions with social context. For example, with the names of one or more of the user's friends attached to the ad who have already liked the page or installed the app.<br>`VALUE`: Will optimize for maximum total purchase value within the specified attribution window.<br>`THRUPLAY`: Will optimize delivery of your ads to people are more likely to play your ad to completion, or play it for at least 15 seconds.<br>`AD_RECALL_LIFT`: Optimize for people more likely to remember seeing your ads.<br>`VISIT_INSTAGRAM_PROFILE`: Optimize for visits to the advertiser's instagram profile.<br> |
| `optimization_sub_event`<br><br>*enum{NONE, VIDEO_SOUND_ON, TRIP_CONSIDERATION, TRAVEL_INTENT, TRAVEL_INTENT_NO_DESTINATION_INTENT, TRAVEL_INTENT_BUCKET_01, TRAVEL_INTENT_BUCKET_02, TRAVEL_INTENT_BUCKET_03, TRAVEL_INTENT_BUCKET_04, TRAVEL_INTENT_BUCKET_05, POST_INTERACTION}* | Optimization sub event for a specific optimization goal (ex: Sound-On event for Video-View-2s optimization goal)<br> |
| `pacing_type`<br><br>*list<string>* | Defines the pacing type, standard by default or using [ad scheduling](https://developers.facebook.com/docs/marketing-api/adset/pacing)<br> |
| `promoted_object`<br><br>*Object* | The object this ad set is promoting across all its ads.<br>Required with certain campaign objectives.<br><br>**CONVERSIONS**<br>• `pixel_id` (Conversion pixel ID)<br>• `pixel_id` (Facebook pixel ID) and `custom_event_type`<br>• `pixel_id` (Facebook pixel ID) and `pixel_rule` and `custom_event_type`<br>• `event_id` (Facebook event ID) and `custom_event_type`<br>• `application_id`, `object_store_url`, and `custom_event_type` for<br>mobile app events<br>• `offline_conversion_data_set_id` (Offline dataset ID) and<br>`custom_event_type` for offline conversions<br><br>**PAGE_LIKES**<br>• `page_id`<br><br>**OFFER_CLAIMS**<br>• `page_id`<br><br>**LINK_CLICKS**<br>• `application_id` and `object_store_url` for mobile app or Canvas app engagement link clicks<br><br>**APP_INSTALLS**<br>• `application_id` and `object_store_url`<br><br>**if the `optimization_goal` is `OFFSITE_CONVERSIONS`**<br>• `application_id`, `object_store_url`, and `custom_event_type` (Standard Events)<br>• `application_id`, `object_store_url`, `custom_event_type = OTHER` and `custom_event_str` (Custom Events)<br><br>**PRODUCT_CATALOG_SALES**<br>• `product_set_id`<br>• `product_set_id` and `custom_event_type`<br><br>When `optimization_goal` is `LEAD_GENERATION`, `page_id` needs to be passed as promoted_object.<br><br>Please refer to the [Outcome-Driven Ads Experiences mapping table](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group#odax-mapping) to find new objectives and their corresponding destination types, optimization goals and promoted objects.<br><br>`application_id` *int*<br>The ID of a Facebook Application. Usually related to mobile or canvas games being promoted on Facebook for installs or engagement<br><br><br>`pixel_id` *numeric string or integer*<br>The ID of a Facebook conversion pixel.  Used with offsite conversion campaigns.<br><br><br>`custom_event_type` *enum{AD_IMPRESSION, RATE, TUTORIAL_COMPLETION, CONTACT, CUSTOMIZE_PRODUCT, DONATE, FIND_LOCATION, SCHEDULE, START_TRIAL, SUBMIT_APPLICATION, SUBSCRIBE, ADD_TO_CART, ADD_TO_WISHLIST, INITIATED_CHECKOUT, ADD_PAYMENT_INFO, PURCHASE, LEAD, COMPLETE_REGISTRATION, CONTENT_VIEW, SEARCH, SERVICE_BOOKING_REQUEST, MESSAGING_CONVERSATION_STARTED_7D, LEVEL_ACHIEVED, ACHIEVEMENT_UNLOCKED, SPENT_CREDITS, LISTING_INTERACTION, D2_RETENTION, D7_RETENTION, OTHER}*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`object_store_url` *URL*<br>The uri of the mobile / digital store where an application can be bought / downloaded. This is platform specific. When combined with the "application_id" this uniquely specifies an object which can be the subject of a Facebook advertising campaign.<br><br><br>`object_store_urls` *list<URL>*<br>The vec of uri of the mobile / digital store where an application can be bought / downloaded. This is platform specific. When combined with the "application_id" this uniquely specifies an object which can be the subject of a Facebook advertising campaign.<br><br><br>`offer_id` *numeric string or integer*<br>The ID of an Offer from a Facebook Page.<br><br><br>`page_id` *Page ID*<br>The ID of a Facebook Page<br><br><br>`product_catalog_id` *numeric string or integer*<br>The ID of a Product Catalog. Used with<br>[Dynamic Product Ads](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads).<br><br><br>`product_item_id` *numeric string or integer*<br>The ID of the product item.<br><br><br>`job_listing_id` *numeric string or integer*<br>The ID of the marketplace job listing.<br><br><br>`instagram_profile_id` *numeric string or integer*<br>The ID of the instagram profile id.<br><br><br>`product_set_id` *numeric string or integer*<br>The ID of a Product Set within an Ad Set level Product<br>Catalog. Used with<br>[Dynamic Product Ads](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads).<br><br><br>`event_id` *numeric string or integer*<br>The ID of a Facebook Event<br><br><br>`offline_conversion_data_set_id` *numeric string or integer*<br>The ID of the offline dataset.<br><br><br>`fundraiser_campaign_id` *numeric string or integer*<br>The ID of the fundraiser campaign.<br><br><br>`custom_event_str` *string*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`mcme_conversion_id` *numeric string or integer*<br>The ID of a MCME conversion.<br><br><br>`conversion_goal_id` *numeric string or integer*<br>The ID of a Conversion Goal.<br><br><br>`offsite_conversion_event_id` *numeric string or integer*<br>The ID of a Offsite Conversion Event<br><br><br>`boosted_product_set_id` *numeric string or integer*<br>The ID of the Boosted Product Set within an Ad Set level Product<br>Catalog. Should only be present when the advertiser has<br>opted into Product Set Boosting.<br><br><br>`lead_ads_form_event_source_type` *enum{inferred, meta_source, offsite_crm, offsite_web, onsite_crm, onsite_crm_single_event, onsite_clo_dep_aet, onsite_web, onsite_p2b_call, onsite_messaging, qualified_lead_file}*<br>The event source of lead ads form.<br><br><br>`lead_ads_custom_event_type` *enum{AD_IMPRESSION, RATE, TUTORIAL_COMPLETION, CONTACT, CUSTOMIZE_PRODUCT, DONATE, FIND_LOCATION, SCHEDULE, START_TRIAL, SUBMIT_APPLICATION, SUBSCRIBE, ADD_TO_CART, ADD_TO_WISHLIST, INITIATED_CHECKOUT, ADD_PAYMENT_INFO, PURCHASE, LEAD, COMPLETE_REGISTRATION, CONTENT_VIEW, SEARCH, SERVICE_BOOKING_REQUEST, MESSAGING_CONVERSATION_STARTED_7D, LEVEL_ACHIEVED, ACHIEVEMENT_UNLOCKED, SPENT_CREDITS, LISTING_INTERACTION, D2_RETENTION, D7_RETENTION, OTHER}*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`lead_ads_custom_event_str` *string*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`lead_ads_offsite_conversion_type` *enum{default, clo}*<br>The offsite conversion type for lead ads<br><br><br>`value_semantic_type` *enum {VALUE, MARGIN, LIFETIME_VALUE}*<br>The semantic of the event value to be using for optimization<br><br><br>`variation` *enum {OMNI_CHANNEL_SHOP_AUTOMATIC_DATA_COLLECTION, PRODUCT_SET_AND_APP, PRODUCT_SET_AND_IN_STORE, PRODUCT_SET_AND_OMNICHANNEL, PRODUCT_SET_AND_PHONE_CALL, PRODUCT_SET_AND_WEBSITE, PRODUCT_SET_AND_WEBSITE_AND_PHONE_CALL, PRODUCT_SET_WEBSITE_APP_AND_INSTORE}*<br>Variation of the promoted object for a PCA ad<br><br><br>`passback_pixel_id` *numeric string or integer*<br>ID of the pixel used for tracking passback events<br><br><br>`passback_application_id` *numeric string or integer*<br>ID of the application used for tracking passback events<br><br><br>`product_set_optimization` *enum{enabled, disabled}*<br>Enum defining whether or not the ad should be optimized for the promoted product set<br><br><br>`full_funnel_objective` *enum{OFFER_CLAIMS, PAGE_LIKES, EVENT_RESPONSES, POST_ENGAGEMENT, WEBSITE_CONVERSIONS, LINK_CLICKS, VIDEO_VIEWS, LOCAL_AWARENESS, PRODUCT_CATALOG_SALES, LEAD_GENERATION, BRAND_AWARENESS, STORE_VISITS, REACH, APP_INSTALLS, MESSAGES, OUTCOME_AWARENESS, OUTCOME_ENGAGEMENT, OUTCOME_LEADS, OUTCOME_SALES, OUTCOME_TRAFFIC, OUTCOME_APP_PROMOTION}*<br>Enum defining the full funnel objective of the campaign<br><br><br>`dataset_split_id` *numeric string or integer*<br>ID of the dataset split used to perform additional optimization on the dataset<br><br><br>`dataset_split_ids` *array<numeric string>*<br>IDs of the dataset splits used to perform additional optimization on the dataset<br><br><br>`lead_ads_selected_pixel_id` *numeric string or integer*<br>The selected pixel id for lead ads conversion leads optimization<br><br><br>`custom_attribution_source_ids` *array<numeric string>*<br>IDs of the custom attribution sources used for tracking passback events<br><br><br>`multi_event_product` *int64*<br>Identifies which action-to-action product the advertiser is using<br><br><br>`product_sales_channel` *enum {ONLINE, IN_STORE, OMNI}*<br>ProductSalesChannel of the promoted object for Omni L3 DA SBLI ads<br><br><br>`anchor_event_config` *JSON object*<br>Configuration for anchor event in multi-event optimization campaigns<br><br><br>`multi_event_conversion_info` *JSON object*<br>Configuration for multi-event conversion info in CLO campaigns<br><br><br>`live_video_destination` *string*<br>The live video destination type for live video ads<br><br><br>`smart_pse_enabled` *boolean*<br>Whether Smart Product Set Expansion is enabled for this campaign.<br><br><br>`smart_pse_setting` *enum{ENABLED, DISABLED}*<br>Setting for Smart Product Set Expansion. Uses an enum instead of a boolean to avoid TAO null handling issues.<br><br><br>`lead_ads_follow_up_event` *enum{whatsapp_conversations}*<br>The selected lead follow-up event for lead ads campaigns.<br><br><br>`omnichannel_object` *Object*<br><br>`app` *array<JSON object>*<br><br>`pixel` *array<JSON object>*<br>**[required]**<br><br><br>`onsite` *array<JSON object>*<br><br>`whats_app_business_phone_number_id` *numeric string or integer*<br><br>`whatsapp_phone_number` *string* |
| `regional_regulated_categories`<br><br>*list<enum>* | This param is used to specify `regional_regulated_categories`. Currently it supports `null` and the following values:<br><br><br>• TAIWAN_FINSERV: Use this value to declare a Financial Service ad set if the ad set targets Taiwan Audience<br>• AUSTRALIA_FINSERV: Use this value to declare a Financial Service ad set if the ad set targets Australia Audience<br>• INDIA_FINSERV: Use this value to declare a Securities and Investments ad set if the ad set targets India Audience<br>• TAIWAN_UNIVERSAL: Use this value to declare an ad set if it targets Taiwan Audience<br>• SINGAPORE_UNIVERSAL: Use this value to declare an ad set if it targets Singapore Audience<br>• THAILAND_UNIVERSAL: Use this value to declare an ad set if it targets Thailand Audience and you are seeing "Beneficiary/payer is missing" errors (3858634, 3858636).<br>• AUSTRALIA_UNIVERSAL: Use this value to declare an ad set if it targets Australia Audience and you are seeing "Beneficiary/payer is missing" errors (3858634, 3858636).<br>• MALAYSIA_UNIVERSAL: Use this value to declare an ad set if it targets Malaysia Audience and you are seeing "Beneficiary/payer is missing" errors (3858634, 3858636).<br>• BRAZIL_REGULATION: Use this value to declare an ad set if it targets Brazil Audience and you are seeing "Beneficiary/payer is missing" errors (3858634, 3858636).<br>• US_SECURITIES_LICENSING: Use this value to declare a Securities and Investments ad set if it targets United States audience and you are seeing "Beneficiary/payer is missing" errors (3858634, 3858636).<br><br><br>If an ad set is a Financial Service Ad and it targets Taiwan, it needs to declare both `TAIWAN_FINSERV` and `TAIWAN_UNIVERSAL`.<br><br><br>Example: `null` or `[AUSTRALIA_FINSERV]` or `[TAIWAN_FINSERV, TAIWAN_UNIVERSAL]`<br> |
| `regional_regulation_identities`<br><br>*JSON object* | This param is used to specify `regional_regulation_identities` used to represent the ad set. Currently it supports the following fields:<br><br><br>• taiwan_finserv_beneficiary: used for TAIWAN_FINSERV category<br>• taiwan_finserv_payer: used for TAIWAN_FINSERV category<br>• australia_finserv_beneficiary: used for AUSTRALIA_FINSERV category<br>• australia_finserv_payer: used for AUSTRALIA_FINSERV category<br>• india_finserv_beneficiary: used for INDIA_FINSERV category<br>• india_finserv_payer: used for INDIA_FINSERV category<br>• taiwan_universal_beneficiary: used for TAIWAN_UNIVERSAL category<br>• taiwan_universal_payer: used for TAIWAN_UNIVERSAL category<br>• singapore_universal_beneficiary: used for SINGAPORE_UNIVERSAL category<br>• singapore_universal_payer: used for SINGAPORE_UNIVERSAL category<br>• universal_beneficiary: used for AUSTRALIA_UNIVERSAL, BRAZIL_REGULATION, MALAYSIA_UNIVERSAL, THAILAND_UNIVERSAL, and US_SECURITIES_LICENSING categories<br>• universal_payer: used for AUSTRALIA_UNIVERSAL, BRAZIL_REGULATION, MALAYSIA_UNIVERSAL, THAILAND_UNIVERSAL, and US_SECURITIES_LICENSING categories<br><br><br>For any other beneficiary and payer requirement that doesn't have its own fields in this list, use `universal_beneficiary` and `universal_payer`.<br><br><br>Example:<br><br><br>`regional_regulation_identities: {<br>"taiwan_finserv_beneficiary": <VERIFIED_IDENTITY_ID>,<br>"taiwan_finserv_payer": <VERIFIED_IDENTITY_ID>,<br>"taiwan_universal_beneficiary": <VERIFIED_IDENTITY_ID>,<br>"taiwan_universal_payer": <VERIFIED_IDENTITY_ID>,<br>}`<br><br><br>During creation, the passed identities fields need to correspond to declared categories. Both beneficiary and payer identities must be included, and they can use the same identity ID.<br><br><br>For example:<br><br><br>Upon creation, `regional_regulated_categories` is `[TAIWAN_FINSERV, TAIWAN_UNIVERSAL]` and `regional_regulation_identities` is<br><br><br>`regional_regulation_identities: {<br>"taiwan_finserv_beneficiary": <ID_123>,<br>"taiwan_finserv_payer": <ID_123>,<br>"taiwan_universal_beneficiary": <ID_456>,<br>"taiwan_universal_payer": <ID_456>,<br>}`<br> |
| `relative_value`<br><br>*float* | relative_value<br> |
| `rf_prediction_id`<br><br>*numeric string or integer* | Reach and frequency prediction ID<br> |
| `source_adset_id`<br><br>*numeric string or integer* | The source adset id that this ad is copied from (if applicable).<br> |
| `start_time`<br><br>*datetime* | The start time of the set, e.g. `2015-03-12 23:59:59-07:00` or `2015-03-12 23:59:59 PDT`. UTC UNIX timestamp<br> |
| `status`<br><br>*enum{ACTIVE, PAUSED, DELETED, ARCHIVED}* | Only `ACTIVE` and `PAUSED` are valid for creation. The other statuses<br>can be used for update. If it is set to `PAUSED`, all its active ads<br>will be paused and have an effective status `ADSET_PAUSED`.<br> |
| `targeting`<br><br>*Targeting object* | An ad set's targeting structure.  "countries" is required. See [targeting](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/advanced-targeting).<br> |
| `time_based_ad_rotation_id_blocks`<br><br>*list<list<int64>>* | Specify ad creative that displays at custom date ranges in a campaign<br>as an array. A list of Adgroup IDs. The list of ads to display for each<br>time range in a given schedule. For example display first ad in Adgroup<br>for first date range, second ad for second date range, and so on. You<br>can display more than one ad per date range by providing more than<br>one ad ID per array. For example set<br>`time_based_ad_rotation_id_blocks` to [[1], [2, 3], [1, 4]]. On the<br>first date range show ad 1, on the second date range show ad 2 and ad 3<br>and on the last date range show ad 1 and ad 4. Use with<br>`time_based_ad_rotation_intervals` to specify date ranges.<br> |
| `time_based_ad_rotation_intervals`<br><br>*list<int64>* | Date range when specific ad creative displays during a campaign.<br>Provide date ranges in an array of UNIX timestamps where each<br>timestamp represents the start time for each date range. For example a<br>3-day campaign from May 9 12am to  May 11 11:59PM PST can have three<br>date ranges, the first date range starts from May 9 12:00AM to<br>May 9 11:59PM, second date range starts from May 10 12:00AM to<br>May 10 11:59PM and last starts from  May 11 12:00AM to  May 11 11:59PM.<br>The first timestamp should match the campaign start time. The last<br>timestamp should be at least 1 hour before the campaign end time. You<br>must provide at least two date ranges. All date ranges must cover the<br>whole campaign length, so any date range cannot exceed campaign length.<br>Use with `time_based_ad_rotation_id_blocks` to specify ad creative for<br>each date range.<br> |
| `time_start`<br><br>*datetime* | Time start<br> |
| `time_stop`<br><br>*datetime* | Time stop<br> |
| `tune_for_category`<br><br>*enum{NONE, EMPLOYMENT, HOUSING, CREDIT, ISSUES_ELECTIONS_POLITICS, ONLINE_GAMBLING_AND_GAMING, FINANCIAL_PRODUCTS_SERVICES}* | tune_for_category<br> |
| `value_rule_set_id`<br><br>*numeric string or integer* | Value Rule Set ID<br> |
| `value_rules_applied`<br><br>*boolean* | value_rules_applied<br> |

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
| 200 | Permissions error |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 2695 | The ad set creation reached its campaign group(ios14) limit. |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 2641 | Your ad includes or excludes locations that are currently restricted |
| 190 | Invalid OAuth 2.0 Access Token |
| 900 | No such application exists. |

### Updating

#### Examples {#update-examples}

```html
curl -X POST \
  -F 'billing_event="IMPRESSIONS"' \
  -F 'optimization_goal="LINK_CLICKS"' \
  -F 'bid_amount=200' \
  -F 'targeting={
       "geo_locations": {
         "countries": [
           "US"
         ]
       },
       "facebook_positions": [
         "feed"
       ]
     }' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v27.0/<AD_SET_ID>/
```

To update the `end_time` of an ad set, using ISO-8601 date-time format

#### PHP Business SDK
```
use FacebookAds\Object\AdSet;

$adset = new AdSet('<AD_SET_ID>');
$adset->end_time = '2013-10-02T00:00:00-0700';
$adset->update();
```

#### Python Business SDK
```
from facebookads.objects import AdSet

adset = AdSet('<AD_SET_ID>')
adset[AdSet.Field.end_time] = '2013-10-02T00:00:00-0700'
adset.remote_update()
```

#### cURL
```
curl \
-F "end_time=2013-10-02T00:00:00-0700" \
-F "access_token=<ACCESS_TOKEN>" \
"https://graph.facebook.com/<API_VERSION>/<AD_SET_ID>"
```

To update the status of an ad set to paused

#### PHP Business SDK
```
use FacebookAds\Object\AdSet;

$adset = new AdSet('<AD_SET_ID>');
$adset->campaign_status = AdSet::STATUS_PAUSED;
$adset->update();
```

#### Python Business SDK
```
from facebookads.objects import AdSet

adset = AdSet('<AD_SET_ID>')
adset[AdSet.Field.status] = AdSet.Status.paused
adset.remote_update()
```

#### cURL
```
curl \
-F "campaign_status=PAUSED" \
-F "access_token=<ACCESS_TOKEN>" \
"https://graph.facebook.com/<API_VERSION>/<AD_SET_ID>"
```

To set or change the ad set's customer lifecycle strategy on an existing Sales ad set, send the same `ad_set_goal` object documented under [Creating](#Creating) in a `POST` to `/<AD_SET_ID>`. Writes merge with the existing goal, so you only need to send the sub-fields you want to change.

#### Remarks

An archived ad set can only update two fields: `name` and `campaign_status`. The `campaign_status` field can only be changed to `DELETED`.

A deleted ad set can only change its `name`.

There are two considerations to take into account when adjusting an ad set's budget value or budget type:

- When updating a set's lifetime or daily budget to a lower value, the new value must be at least 10% greater than the current amount spent already. For example: if an ad set has a $1000 lifetime budget and has spend $300 so far, the lowest new lifetime budget would be $330.

- Since `v2.4`, ad sets have a minimum required budget. Any update must take that into consideration. Check the details at the [Create Considerations](#create-considerations) section from this page.

**Note:** When using the Reservation buying type, some fields may not be available to be updated through the API.

You can't perform this operation on this endpoint.

### Deleting

#### Examples {#delete-examples}

```html
curl -X DELETE \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v27.0/<AD_SET_ID>/
```

#### /{ad_set_id}
You can delete an [AdSet](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign) by making a DELETE request to [/{ad_set_id}](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign).

##### Example

#### HTTP
```
DELETE /v25.0/<AD_SET_ID>/ HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->delete(
    '/<AD_SET_ID>/',
    array (),
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
    "/<AD_SET_ID>/",
    "DELETE",
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
    "/<AD_SET_ID>/",
    null,
    HttpMethod.DELETE,
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
                               initWithGraphPath:@"/<AD_SET_ID>/"
                                      parameters:params
                                      HTTPMethod:@"DELETE"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

#### cURL
```
curl -X DELETE -G \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/<AD_SET_ID>/
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=DELETE&path=%3CAD_SET_ID%3E%2F&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

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
| 100 | Invalid parameter |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |

### Ad set goal (`ad_set_goal`) {#ad-set-goal}

`ad_set_goal` lets a Sales (`OUTCOME_SALES`) ad set express a customer lifecycle strategy — for example, excluding existing customers, or excluding both existing and engaged customers. Set it at creation (`POST /act_<ACCOUNT_ID>/adsets`) or on an existing ad set (`POST /<AD_SET_ID>`), and read it back with `GET /<AD_SET_ID>?fields=ad_set_goal`.

**Availability.** `ad_set_goal` is available only for Sales ad sets. A write on an campaign returns error `1870252`.

**Writes merge.** A write updates only the fields you send; omitted fields keep their current value. Sending `{"type":2}` on an ad set that already has a type-2 goal keeps the existing exclusions. A fresh ad set with no existing goal must supply the required audience fields for the type.

**Copy.** Copying an ad set (`POST /<AD_SET_ID>/copies`) gives the copy its own goal with the same type and exclusions, including any audience label exclusions and `existing_customers_auto_exclusion_retention_days`.

**Special ad categories.** A non-BROAD goal is not allowed on an ad set whose campaign is in a restricted special ad category (housing, employment, credit, financial products and services, education, or online gambling and gaming); such writes are rejected with error `1870261` (BROAD is always allowed). If the campaign is switched into one of these categories after a goal is set, the ad set's goal is automatically reset to BROAD. Issues, elections, and politics campaigns are not restricted for goals.

#### Allowed goal type combinations

| `type` | Required audience fields | Optional fields | All other audience fields |
| --- | --- | --- | --- |
| `0` (`BROAD`) | none | none | must be absent or empty |
| `2` (`EXCLUDE_EXISTING_CUSTOMERS`) | `existing_customers_exclusions` | `existing_customers_audience_label_exclusions` and `existing_customers_auto_exclusion_retention_days` | must be absent or empty |
| `1` (`EXCLUDE_EXISTING_AND_ENGAGED_CUSTOMERS`) | `existing_customers_exclusions` and `engaged_audiences_exclusions` | `existing_customers_audience_label_exclusions`, `engaged_audiences_audience_label_exclusions`, and `existing_customers_auto_exclusion_retention_days` | must be absent or empty |

A label exclusion field can stand in for its required custom audience field. See [Audience labels](#ad-set-goal-audience-labels). A non-zero `existing_customers_auto_exclusion_retention_days` can also stand in for `existing_customers_exclusions`. See [Automatic exclusion of recent purchasers](#ad-set-goal-auto-exclusion).

#### Audience labels {#ad-set-goal-audience-labels}

Instead of listing custom audience IDs, you can exclude audiences by their [audience labels](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/custom-audiences). A label exclusion excludes every custom audience in the ad account that carries that label.

| Field | Allowed for `type` | Accepted labels |
| --- | --- | --- |
| `existing_customers_audience_label_exclusions` | `2` and `1` | Customer labels: `high_value_customers`, `low_value_customers`, `at_risk`, `disengaged`, `general_customers` |
| `engaged_audiences_audience_label_exclusions` | `1` | Engaged audience labels: `qualified_leads`, `disqualified_leads`, `app_users`, `trial_users`, `engaged_users` |

Each field accepts only labels from its own group. A customer label in `engaged_audiences_audience_label_exclusions`, or an engaged audience label in `existing_customers_audience_label_exclusions`, is rejected with error `1870279`. A label that's still in beta is accepted only for ad accounts in that beta; other ad accounts get error `1870291`.

**Required audiences.** A label exclusion satisfies its goal type's required audience field when at least one custom audience in the ad account carries one of the labels. For example, a type `2` goal can send `existing_customers_audience_label_exclusions` without `existing_customers_exclusions`. If no custom audience carries any of the labels, the write is rejected: error `1870269` for the existing customers field, and error `1870251` for the engaged audiences field.

**Updating and clearing.** Label exclusions follow the same merge rules as the rest of `ad_set_goal`: omit a label field to keep its current value, or send an empty list (`[]`) to clear it.

**Reading.** Labels are returned as the lowercase strings listed above.

**Example.** Exclude existing customers by custom audience and by label, and engaged audiences by label only:

```bash
curl -i -X POST \
  -d 'ad_set_goal={"type":1,"existing_customers_exclusions":["<CUSTOM_AUDIENCE_ID>"],"existing_customers_audience_label_exclusions":["high_value_customers"],"engaged_audiences_audience_label_exclusions":["disqualified_leads"]}' \
  -d "access_token=<ACCESS_TOKEN>" \
  "https://graph.facebook.com/v27.0/<AD_SET_ID>"
```

#### Automatic exclusion of recent purchasers {#ad-set-goal-auto-exclusion}

For `type` `2` and `1` goals, Meta can also automatically exclude people who purchased from you recently, in addition to the custom audiences you list. `existing_customers_auto_exclusion_retention_days` sets how many days back that exclusion looks.

| Value | Effect |
| --- | --- |
| `30`, `60`, `90`, `180`, or `730` | Excludes people who purchased from you in that many days. |
| `0` | No automatic exclusion. |

Any other value is rejected with error `1870283`. Sending the field with a `type` `0` goal, even as `0`, is rejected with error `1870281`.

**Default.** If you omit the field when creating a type `2` or `1` ad set, or when switching an ad set to one of these types, no automatic exclusion is applied. Send a value to turn it on.

**Required audiences.** A non-zero value satisfies the `existing_customers_exclusions` requirement, so a type `2` goal can send `existing_customers_auto_exclusion_retention_days` without `existing_customers_exclusions`. A type `1` goal still needs `engaged_audiences_exclusions`.

**Updating.** The field follows the same merge rules as the rest of `ad_set_goal`: omit it to keep its current value, or send `0` to turn the automatic exclusion off. Switching the goal to `type` `0` turns it off.

**Reading.** The field is returned for `type` `2` and `1` goals; `0` means the automatic exclusion is off. It isn't returned for `type` `0` goals.

**Example.** Exclude a custom audience of existing customers, plus everyone who purchased in the last 180 days:

```bash
curl -i -X POST \
  -d 'ad_set_goal={"type":2,"existing_customers_exclusions":["<CUSTOM_AUDIENCE_ID>"],"existing_customers_auto_exclusion_retention_days":180}' \
  -d "access_token=<ACCESS_TOKEN>" \
  "https://graph.facebook.com/v27.0/<AD_SET_ID>"
```

#### Error codes

| Code | Meaning |
| --- | --- |
| `1870251` | A required audience field is missing or empty for the goal `type`. |
| `1870252` | `ad_set_goal` not available for this ad account (no goal access). |
| `1870253` | Goal `type` not supported via the API (types 3, 4, 5, and 6). |
| `1870254` | An `ad_set_goal` field isn't allowed for the goal `type`. The message names the fields. |
| `1870258` | `ad_set_goal` present without a `type`. |
| `1870261` | Non-BROAD goal not allowed on a special ad category campaign. |
| `1870269` | The existing customers field has only audience labels, and no custom audience in the ad account carries any of them. |
| `1870279` | An audience label was sent in the wrong label exclusion field. The message names the label and the field. |
| `1870281` | `existing_customers_auto_exclusion_retention_days` was sent with a `type` `0` goal. |
| `1870283` | `existing_customers_auto_exclusion_retention_days` isn't `0`, `30`, `60`, `90`, `180`, or `730`. |
| `1870291` | An audience label isn't available for this ad account, for example a beta label. The message names the label. |

### Outcome-Driven Ads Experiences {#odax}

#### Example

**Outcome-Driven Ads Experiences (Engagement Outcome + `ON_PAGE` destination_type)**

```
curl -i -X POST \
  -d "name=New ODAX Adset" \
  -d "autobid=true" \
  -d "optimization_goal=PAGE_LIKES" \
  -d "destination_type=ON_PAGE" \
  -d "billing_event=IMPRESSIONS" \
  -d "daily_budget=500" \
  -d "targeting={\"geo_locations\": {\"countries\": [\"US\"]}}" \
  -d "promoted_object={\"page_id\": PAGE_ID}" \
  -d "campaign_id=CAMPAIGN_ID" \
  -d "status=PAUSED" \
  -d "access_token=ACCESS_TOKEN" \
  https://graph.facebook.com/v11.0/
  act_AD_ACCOUNT_ID/adsets
```

**Legacy**

```
curl -i -X POST \
  -d "name=New ODAX Adset" \
  -d "autobid=true" \
  -d "optimization_goal=PAGE_LIKES" \
  -d "billing_event=IMPRESSIONS" \
  -d "daily_budget=500" \
  -d "targeting={\"geo_locations\": {\"countries\": [\"US\"]}}" \
  -d "promoted_object={\"page_id\": PAGE_ID}" \
  -d "campaign_id=CAMPAIGN_ID" \
  -d "status=PAUSED" \
  -d "access_token=ACCESS_TOKEN" \
  https://graph.facebook.com/v11.0/
  act_AD_ACCOUNT_ID/adsets
```

#### Restrictions
There will be new restrictions on Outcome-Driven Ads Experiences (ODAX) campaigns as outlined in the table below. Refer to the [Outcome-Driven Ads Experiences mapping table](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group#odax-mapping) to find the new objectives and their corresponding destination types, optimization goals and promoted objects.

| ODAX Objectives | Conversion Location (L2) | Conversion Events (L2) | Optimization Goals (L2) | Legacy Objectives |
| --- | --- | --- | --- | --- |
| **Awareness**<br>*Reach the largest number of people who are likely to remember your ad.* | N/A | N/A | Ad Recall Lift, Reach, Impressions<br><br>API enum {`AD_RECALL_LIFT`, `REACH`, `IMPRESSIONS`} | Reach, Brand Awareness |
| **Traffic**<br>*Send people to a destination like your website, app or Shop.* | Facebook Shops (closed beta) | N/A | Link Clicks<br><br>API enum {`LINK_CLICKS`} | Traffic |
|  | Website | N/A | Landing Page Views, Link Clicks, Impressions, Daily Unique Reach<br><br>API enum {`LANDING_PAGE_VIEWS`, `LINK_CLICKS`, `IMPRESSIONS`, `REACH`} | Traffic |
|  | App | N/A | Link Clicks, Daily Unique Reach<br><br>API enum {`LINK_CLICKS`, `REACH`} | Traffic |
|  | Messenger | N/A | Link Clicks, Impressions, Daily Unique Reach<br><br>API enum {`LINK_CLICKS`, `IMPRESSIONS`, `REACH`} | Traffic |
|  | WhatsApp | N/A | Link Clicks, Impressions, Daily Unique Reach<br><br>API enum {`LINK_CLICKS`, `IMPRESSIONS`, `REACH`} | Traffic |
| **Engagement**<br>*Find people likely to interact with your business online, and take actions like starting a conversation or commenting on posts.* | On Video | N/A | ThruPlay, 2 second continuous view<br><br>API enum {`THRUPLAY`, `TWO_SECOND_CONTINUOUS_VIDEO_VIEWS`} | Video Views |
|  | On Post | N/A | Post Engagement, Impressions, Daily Unique Reach<br><br>API enum {`POST_ENGAGEMENT`, `IMPRESSIONS`, `REACH`} | Post Engagement |
|  | On Event | N/A | Event Response, Impressions, Post Engagement, Daily Unique Reach<br><br>API enum {`EVENT_RESPONSES`, `IMPRESSIONS`, `POST_ENGAGEMENT`, `REACH`} | Event Responses |
|  | Messenger | N/A | Conversations, Link Clicks<br><br>API enum {`CONVERSATIONS`, `LINK_CLICKS`} | Messages |
|  | WhatsApp | N/A | Conversations, Link Clicks<br><br>API enum {`CONVERSATIONS`, `LINK_CLICKS`} | Messages |
|  | Instagram | N/A | Conversations, Link Clicks<br><br>API enum {`CONVERSATIONS`, `LINK_CLICKS`} | Messages |
|  | Website | AddToWishlist, Contact, CustomizeProduct, Donate, FindLocation,, Schedule, Search, StartTrial, SubmitApplication, Subscribe, ViewContent | Conversions, Landing Page Views, Link Clicks, Impressions, Daily Unique Reach<br><br>API enum {`OFFSITE_CONVERSIONS`, `ONSITE_CONVERSIONS`,  `LANDING_PAGE_VIEWS`, `LINK_CLICKS`, `IMPRESSIONS`, `REACH`} | Conversions |
|  | App | Achieve Level, Activate App, Add to Wishlist, Complete Tutorial, Contact, Customize Product, Donate, Find Location, In-App Ad Click, In-App Ad Impression, Rate, Schedule, Search, Spent Credits, Start Trial, Submit Application, Subscribe, Unlock Achievement, View Content | App Events, Link Clicks, Daily Unique Reach<br><br>API enum {`APP_INSTALLS_AND_OFFSITE_CONVERSIONS`, `LINK_CLICKS`, `REACH`} | Conversions |
|  | On Page | N/A | Page Likes<br><br>API enum {`PAGE_LIKES`} | Engagement |
| **Leads**<br>*Find people interested in your business who are likely to share their contact information.* | Website | Lead, CompleteRegistration, Contact, FindLocation, Schedule, StartTrial, SubmitApplication, Subscribe | Conversions, Landing Page Views, Link Clicks, Impressions, Daily Unique Reach<br><br>API enum {`OFFSITE_CONVERSIONS`, `ONSITE_CONVERSIONS`,  `LANDING_PAGE_VIEWS`, `LINK_CLICKS`, `IMPRESSIONS`, `REACH`} | Conversions |
|  | Instant Forms | N/A | Leads<br><br>API enum {`LEAD_GENERATION`, `QUALITY_LEAD`} | Lead Generation |
|  | Messenger | N/A | Leads<br><br>API enum {`LEAD_GENERATION`, `QUALITY_LEAD`} | Messages |
|  | Calls | N/A | Calls<br><br>API enum {`QUALITY_CALL`} | Lead Generation |
|  | App | Complete Registration, Complete Tutorial, Contact, Find Location, Schedule, Start Trial, Submit Application, Subscribe | App Events, Link Clicks, Daily Unique Reach<br><br>API enum {`APP_INSTALLS_AND_OFFSITE_CONVERSIONS`, `LINK_CLICKS`, `REACH`} | Conversions |
| **App Promotion**<br>*Find people likely to install your app.* | N/A | All app events, including all custom events | Non-AAA: Link Clicks, App Installs, App Events, Value<br><br>API enum {`LINK_CLICKS`, `APP_INSTALLS`, `APP_INSTALLS_AND_OFFSITE_CONVERSIONS`, `VALUE`}<br><br>AAA: App Installs, App Installs w/ App Events, App Events, Value<br><br>API enum {`APP_INSTALLS`, `APP_INSTALLS_AND_OFFSITE_CONVERSIONS`, `VALUE`} | App Installs |
| **Sales**<br>*Find people likely to make purchases or take other important actions online or in store.* | Website & Facebook Shops (closed beta) | Purchase, InitiateCheckout, AddPaymentInfo, AddToCart, CompleteRegistration, Donate, StartTrial, Subscribe, ViewContent | (source of truth: same as today's Conversions objective + web and shop)<br><br>API enum {`OFFSITE_CONVERSIONS`, `VALUE`, `LINK_CLICKS`, `LANDING_PAGE_VIEWS`, `LINK_CLICKS`, `IMPRESSIONS`, `REACH`} | Conversions |
|  | Website | Purchase, InitiateCheckout, AddPaymentInfo, AddToCart, CompleteRegistration, Donate, StartTrial, Subscribe, ViewContent | Conversions, Value, Landing Page Views, Link Clicks, Impressions, Daily Unique Reach<br><br>API enum {`OFFSITE_CONVERSIONS`, `VALUE`, `LANDING_PAGE_VIEWS`, `LINK_CLICKS`, `IMPRESSIONS`, `REACH`} | Conversions |
|  | App | Purchase, Initiate Checkout, Add Payment Info, Add to Cart, Complete Registration, Donate, In-App Ad Click, In-App Ad Impression, Spent Credits, Start Trial, Subscribe, View Content | App Events, Link Clicks, Daily Unique Reach<br><br>API enum {`OFFSITE_CONVERSIONS`, `LINK_CLICKS`, `REACH`} | Conversions |
|  | Website & App | Purchase, InitiateCheckout, AddPaymentInfo, AddToCart, CompleteRegistration, Donate, StartTrial, Subscribe, ViewContent | Conversions<br><br>API enum {`OFFSITE_CONVERSIONS`} | Conversions |
|  | Messenger | Purchase, InitiateCheckout, AddPaymentInfo, AddToCart, CompleteRegistration, Donate, StartTrial, Subscribe, ViewContent | Conversations, Conversions, Link Clicks, Impressions, Reach<br><br>API enum {`CONVERSATIONS`, `OFFSITE_CONVERSIONS`, `LINK_CLICKS`, `IMPRESSIONS`, `REACH`} | Conversions |
|  | WhatsApp | Purchase, InitiateCheckout, AddPaymentInfo, AddToCart, CompleteRegistration, Donate, StartTrial, Subscribe, ViewContent | Conversions, Link Clicks, Impressions, Reach<br><br>API enum {`OFFSITE_CONVERSIONS`, `LINK_CLICKS`, `IMPRESSIONS`, `REACH`} | Conversions |

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/activities.md -->

## Ad Campaign Activities

### Reading

#### Event type descriptions

Here is a list of `event_type` by object:

**Ad account related event**

| Name | Description |
| --- | --- |
| ad_account_update_spend_limit | update the spend limit of an ad account |
| ad_account_reset_spend_limit | reset the spend limit of an ad account. |
| ad_account_remove_spend_limit | remove the spend limit of an ad account. You would have unlimited spend limit if you remove spend limit |
| ad_account_set_business_information | set business information for this ad account. |
| ad_account_update_status | update account status, includes: disabled, active, test, unsettled, pending closure, closed, pending risk review, in grace period |
| ad_account_add_user_to_role | add user to ad account |
| ad_account_remove_user_from_role | remove user from ad account |
| add_images | add an image to ad account image library |
| edit_images | edit an image in ad account image library |

**Billing related event**

| Name | Description |
| --- | --- |
| ad_account_billing_charge | charge ad account |
| ad_account_billing_charge_back | undo the charging on ad account per bank's instructions |
| ad_account_billing_charge_back_reversal | reapply the undone charging |
| ad_account_billing_decline | billings was declined |
| ad_account_billing_refund | refund on ad account |
| add_funding_source | add funding source to ad account |
| remove_funding_source | remove funding source from ad account |

**Campaign related event**

| Name | Description |
| --- | --- |
| create_campaign | create campaign |
| update_campaign_name | update campaign friendly name |
| update_campaign_run_status | update campaign run status |

**Ad set related event**

| Name | Description |
| --- | --- |
| create_ad_set | create ad set |
| update_ad_set_bidding | update bid information |
| update_ad_set_target_spec | update ad set targeting |
| update_ad_set_name | update ad set friendly name |
| update_ad_set_run_status | update ad set run status |
| update_ad_set_budget | update ad set budget |
| update_ad_set_duration | update ad set duration |

**Adgroup related event**

| Name | Description |
| --- | --- |
| create_ad | create ad |
| update_ad_creative | update creative of ad, including image/title/text change. |
| update_ad_run_status | update adgroup run status |
| update_ad_friendly_name | update adgroup friendly name |
| ad_review_approved | ad review was approved |
| ad_review_declined | ad review was not approved |

**Other**

| Name | Description |
| --- | --- |
| create_audience | create custom audience |
| delete_audience | delete custom audience |

##### Parameters

| Parameter | Description |
| --- | --- |
| `after`<br><br>*string* | after<br> |
| `business_id`<br><br>*numeric string or integer* | This parameter is a required parameter once the ad account is associated with any business account.<br> |
| `category`<br><br>*enum {ACCOUNT, AD, AD_KEYWORDS, AD_SET, AUDIENCE, BID, BUDGET, CAMPAIGN, DATE, STATUS, TARGETING}* | Filter events by category.<br> |
| `limit`<br><br>*integer* | limit<br> |
| `since`<br><br>*datetime* | The start time to query account history. Default is 7 days prior.<br> |
| `uid`<br><br>*int* | Filter events by the user id.<br> |
| `until`<br><br>*datetime* | The end time to query account history. Default is now.<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [AdActivity](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-activity) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 190 | Invalid OAuth 2.0 Access Token |
| 100 | Invalid parameter |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/ad_studies.md -->

## Ad Campaign Ad Studies

### Reading

AdCampaignAdStudies

##### Example

#### HTTP
```
GET /v25.0/{ad-set-id}/ad_studies HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-set-id}/ad_studies',
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
    "/{ad-set-id}/ad_studies",
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
    "/{ad-set-id}/ad_studies",
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
                               initWithGraphPath:@"/{ad-set-id}/ad_studies"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-set-id%7D%2Fad_studies&version=v25.0)

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
| 200 | Permissions error |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/adcreatives.md -->

## Ad Campaign Adcreatives

### Reading

##### Example

#### HTTP
```
GET /v25.0/{ad-set-id}/adcreatives HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-set-id}/adcreatives',
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
    "/{ad-set-id}/adcreatives",
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
    "/{ad-set-id}/adcreatives",
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
                               initWithGraphPath:@"/{ad-set-id}/adcreatives"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-set-id%7D%2Fadcreatives&version=v25.0)

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

A list of [AdCreative](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-creative) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | Total number of creatives returned by the query<br><br><br>**[default]**<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 100 | Invalid parameter |
| 200 | Permissions error |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/addrafts.md -->

## Ad Campaign Addrafts

### Reading

AdCampaignAdDrafts

##### Example

#### HTTP
```
GET /v25.0/{ad-set-id}/addrafts HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-set-id}/addrafts',
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
    "/{ad-set-id}/addrafts",
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
    "/{ad-set-id}/addrafts",
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
                               initWithGraphPath:@"/{ad-set-id}/addrafts"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-set-id%7D%2Faddrafts&version=v25.0)

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/adrules_governed.md -->

## Ad Campaign Adrules Governed

### Reading

Ad rules that govern this ad set - by default, this only returns rules that either directly mention the ad set by id or indirectly through the set entity_type

##### Example

#### HTTP
```
GET /v25.0/{ad-set-id}/adrules_governed HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-set-id}/adrules_governed',
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
    "/{ad-set-id}/adrules_governed",
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
    "/{ad-set-id}/adrules_governed",
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
                               initWithGraphPath:@"/{ad-set-id}/adrules_governed"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-set-id%7D%2Fadrules_governed&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `pass_evaluation`<br><br>*boolean* | If set, this will further filter the rules to only include those for which the ad set would evaluate to the boolean value of this param<br> |

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
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/ads.md -->

## Ad Campaign Ads

### Reading

The ads under this ad set.

##### Example

#### HTTP
```
GET /v25.0/<AD_SET_ID>/ads?fields=name%2Cid HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/<AD_SET_ID>/ads?fields=name%2Cid',
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
    "/<AD_SET_ID>/ads",
    {
        "fields": "name,id"
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
params.putString("fields", "name,id");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/<AD_SET_ID>/ads",
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
  @"fields": @"name,id",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/<AD_SET_ID>/ads"
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
  -d 'fields="name,id"' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/<AD_SET_ID>/ads
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%3CAD_SET_ID%3E%2Fads%3Ffields%3Dname%252Cid&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `date_preset`<br><br>*enum{today, yesterday, this_month, last_month, this_quarter, maximum, data_maximum, last_3d, last_7d, last_14d, last_28d, last_30d, last_90d, last_week_mon_sun, last_week_sun_sat, last_quarter, last_year, this_week_mon_today, this_week_sun_today, this_year}* | Date ranges container for benchmarking comparison<br> |
| `effective_status`<br><br>*list<string>* | Filter ads by effective status. When unset, defaults to not return deleted or archived ads.<br> |
| `time_range`<br><br>*{'since':YYYY-MM-DD,'until':YYYY-MM-DD}* | Date range used to aggregate insights metrics<br><br><br>`since` *datetime*<br>A date in the format of "YYYY-MM-DD", which means from the beginning midnight of that day.<br><br><br>`until` *datetime*<br>A date in the format of "YYYY-MM-DD", which means to the beginning midnight of the following day.<br> |
| `updated_since`<br><br>*integer* | filter by updated time<br> |

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
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |
| 2500 | Error parsing graph query |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/asyncadrequests.md -->

## Ad Campaign Asyncadrequests

### Reading

##### Example

#### HTTP
```
GET /v25.0/{ad-set-id}/asyncadrequests HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-set-id}/asyncadrequests',
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
    "/{ad-set-id}/asyncadrequests",
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
    "/{ad-set-id}/asyncadrequests",
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
                               initWithGraphPath:@"/{ad-set-id}/asyncadrequests"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-set-id%7D%2Fasyncadrequests&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `statuses`<br><br>*list<enum {INITIAL, IN_PROGRESS, SUCCESS, ERROR, CANCELED, PENDING_DEPENDENCY, CANCELED_DEPENDENCY, ERROR_DEPENDENCY, ERROR_CONFLICTS, USER_CANCELED, USER_CANCELED_DEPENDENCY, PROCESS_BY_EVENT_PROCESSOR, PROCESS_BY_AD_ASYNC_ENGINE}>* | SELF_EXPLANATORY<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdAsyncRequest nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/budget_schedules.md -->

## Ad Campaign Budget Schedules

Budget scheduling allows you to schedule budget increases for your campaign or ad set budget based on days or times when you anticipate higher sales opportunities, peak traffic periods or other promotional time periods. You can find additional information in the [Meta Business Help Center](https://www.facebook.com/business/help/633318028866693) and in the [About budget scheduling](https://developers.facebook.com/docs/graph-api/reference/high-demand-period) section

### Reading

##### Example

#### HTTP
```
GET /v25.0/{ad-set-id}/budget_schedules HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-set-id}/budget_schedules',
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
    "/{ad-set-id}/budget_schedules",
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
    "/{ad-set-id}/budget_schedules",
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
                               initWithGraphPath:@"/{ad-set-id}/budget_schedules"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-set-id%7D%2Fbudget_schedules&version=v25.0)

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
 https://graph.facebook.com/{API_VERSION}/{AD_SET_ID}/budget_schedules?time_start=5
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
 https://graph.facebook.com/{API_VERSION}/{AD_SET_ID}/budget_schedules?time_stop=3
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
| 200 | Permissions error |

### Creating

#### /{ad_set_id}/budget_schedules
You can make a POST request to *budget_schedules* edge from the following paths:

- [/{ad_set_id}/budget_schedules](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/budget_schedules)

When posting to this edge, no Graph object will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `budget_value`<br><br>*int64* | Actual budget increase, unit defined by BudgetValueType (e.g. 140 could be $140 or 140%)<br><br>**[required]**<br> |
| `budget_value_type`<br><br>*enum{ABSOLUTE, MULTIPLIER}* | Type of budget value (e.g. absolute or multiplier)<br><br>**[required]**<br> |
| `time_end`<br><br>*int64* | When the increased budget should end<br><br>**[required]**<br> |
| `time_start`<br><br>*int64* | When the increased budget should start<br><br>**[required]**<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/budget_split_set.md -->

## Ad Campaign Budget Split Set

### Reading

You can't perform this operation on this endpoint.

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/campaign_actions.md -->

## Ad Campaign Campaign Actions

### Reading

Actionable Insights for the specified ad-set, delivered in form of Ad Proposals.

##### Example

#### HTTP
```
GET /v25.0/{ad-set-id}/campaign_actions HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-set-id}/campaign_actions',
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
    "/{ad-set-id}/campaign_actions",
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
    "/{ad-set-id}/campaign_actions",
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
                               initWithGraphPath:@"/{ad-set-id}/campaign_actions"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-set-id%7D%2Fcampaign_actions&version=v25.0)

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

A list of [CampaignActionsData](https://developers.facebook.com/docs/graph-api/reference/campaign-actions-data) nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/copies.md -->

## Ad Campaign Copies

Create a duplicate ad set based on an existing one.

**Note:** The Marketing API has it is own rate limiting logic. If you are encountering errors mentioning a reached limit, see [Rate Limiting](https://developers.facebook.com/documentation/ads-commerce/marketing-api/overview/rate-limiting).

### Reading

Endpoint to read the copies of an Ad Set.

##### Example

#### HTTP
```
GET /v25.0/{ad-set-id}/copies HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-set-id}/copies',
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
    "/{ad-set-id}/copies",
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
    "/{ad-set-id}/copies",
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
                               initWithGraphPath:@"/{ad-set-id}/copies"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-set-id%7D%2Fcopies&version=v25.0)

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
| `insights`<br><br>*Edge<AdsInsights>* | Analytics summary for all objects<br> |
| `total_count`<br><br>*unsigned int32* | Total number of objects<br><br><br>**[default]**<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

**Warning:** If you are copying an adset that already finished, the copy will be scheduled to start at the creation's time with the same duration of the original adset.

#### Asynchronous {#async}

This endpoint supports [asynchronous batch requests](https://developers.facebook.com/docs/graph-api/asynchronous-batch-requests), which enables you to send up to 50 requests in a single HTTP request. If you want to copy large amount of objects, you should use asynchronous batch request. To do so, set `deep_copy` to `true`, and you can copy the adset and all of its ads in one sub-request. For example if you have two adsets and each of them has 50 ads, you can copy 2 adsets and all their ads:

```
curl -F 'access_token=...'\
-F 'asyncbatch=[{ "method":"POST", "relative_url":"<ad-set-id>/copies","name":"async_copy1", body":"name=copy_adset_1&deep_copy=true" },{ "method":"POST", "relative_url":"<ad-set-id>/copies","name":"async_copy2", body": "name=copy_adset_2&deep_copy=true"}]' \
https://graph.facebook.com/<VERSION>
```

#### Targeting DSA Regulated Locations (European Union)

To copy an ad set targeted in the European Union's Digital Services Act (DSA) regulated locations, please set the payor/beneficiary information first. Otherwise the copying request may respond with one of the following errors:

**Payor missing error**

```
{
  "error": {
    "message": "Invalid parameter",
    "type": "FacebookApiException",
    "code": 100,
    "error_data": "{\"blame_field_specs\":[[\"dsa_payor\"]]}",
    "error_subcode": 3858079,
    "is_transient": false,
    "error_user_title": "No payor provided in DSA regulated region",
    "error_user_msg": "The DSA requires ads to provide payor information in regulated regions. Updating/creating ad needs to provide payor of the ad.",
    "fbtrace_id": "fbtrace_id"
  },
  "__fb_trace_id__": "fbtrace_id",
  "__www_request_id__": "request_id"
}
```

**Beneficiary missing error**

```
{
  "error": {
    "message": "Invalid parameter",
    "type": "FacebookApiException",
    "code": 100,
    "error_data": "{\"blame_field_specs\":[[\"dsa_beneficiary\"]]}",
    "error_subcode": 3858081,
    "is_transient": false,
    "error_user_title": "No payor/beneficiary provided in DSA regulated location",
    "error_user_msg": "The DSA requires ads to provide beneficiary information in regulated regions. Updating/creating ad needs to provide beneficiary of the ad.",
    "fbtrace_id": "fbtrace_id"
  },
  "__fb_trace_id__": "fbtrace_id",
  "__www_request_id__": "request_id"
}
```

#### /{ad_set_id}/copies
You can make a POST request to *copies* edge from the following paths:

- [/{ad_set_id}/copies](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/copies)

When posting to this edge, an [AdSet](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `campaign_id`<br><br>*numeric string or integer* | Single ID of a campaign to make parent of the copy. The copy inherits all campaign settings, such as budget from the parent.Ignore if you want to keep the copy under the original campaign parent.<br> |
| `deep_copy`<br><br>*boolean* | **Default value: **`false`<br>Whether to copy all the child ads. Limits: the total number of children ads to copy should not exceed 3 for a synchronous call and 51 for an asynchronous call.<br> |
| `end_time`<br><br>*datetime* | The end time of the set, e.g. `2015-03-12 23:59:59-07:00` or `2015-03-12 23:59:59 PDT`. UTC UNIX timestamp. When creating a set with a daily budget, specify `end_time=0` to set the set to be ongoing without end date. If not set, the copied adset will inherit the end time from the original set<br> |
| `rename_options`<br><br>*JSON or object-like arrays* | Rename options<br><br><br>`rename_strategy` *enum {DEEP_RENAME, ONLY_TOP_LEVEL_RENAME, NO_RENAME}*<br><br>**Default value: **`ONLY_TOP_LEVEL_RENAME`<br>`DEEP_RENAME`: will change this object's name and children's names in the copied object. `ONLY_TOP_LEVEL_RENAME`: will change the this object's name but won't change the children's name in the copied object. `NO_RENAME`: will change no name in the copied object<br><br><br>`rename_prefix` *string*<br>A prefix to copy names. Defaults to null if not provided.<br><br><br>`rename_suffix` *string*<br>A suffix to copy names. Defaults to null if not provided and appends a localized string of `- Copy` based on the ad account locale.<br> |
| `start_time`<br><br>*datetime* | The start time of the set, e.g. `2015-03-12 23:59:59-07:00` or `2015-03-12 23:59:59 PDT`. UTC UNIX timestamp. If not set, the copied adset will inherit the start time from the original set<br> |
| `status_option`<br><br>*enum {ACTIVE, PAUSED, INHERITED_FROM_SOURCE}* | **Default value: **`PAUSED`<br>`ACTIVE`: the copied adset will have active status. `PAUSED`: the copied adset will have paused status. `INHERITED_FROM_SOURCE`: the copied adset will have the status from the original set.<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *copied_adset_id* in the return type.

```
Struct  {
copied_adset_id: numeric string,
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
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |
| 2695 | The ad set creation reached its campaign group(ios14) limit. |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/delivery_estimate.md -->

## Ad Campaign Delivery Estimate

Returns the delivery estimate for a given ad set. You are not able to retrieve this field for [inactive Lookalike Audiences](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/lookalike-audiences#inactive).

### Reading

Delivery estimate for a given ad set. All fields are optional and use the campaigns current settings as the default. You can override the fields to see the delivery estimates if you edit the ad set to the new configuration

The `daily_outcomes_curve` field will only have data when we are able to provide high confidence predictions. When we do not have high confidence predictions we will return an array of 1 point with all 0s.

##### Example

#### HTTP
```
GET /v25.0/{ad-set-id}/delivery_estimate HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-set-id}/delivery_estimate',
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
    "/{ad-set-id}/delivery_estimate",
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
    "/{ad-set-id}/delivery_estimate",
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
                               initWithGraphPath:@"/{ad-set-id}/delivery_estimate"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-set-id%7D%2Fdelivery_estimate&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `optimization_goal`<br><br>*enum{NONE, APP_INSTALLS, AD_RECALL_LIFT, ENGAGED_USERS, EVENT_RESPONSES, IMPRESSIONS, LEAD_GENERATION, QUALITY_LEAD, LINK_CLICKS, OFFSITE_CONVERSIONS, PAGE_LIKES, POST_ENGAGEMENT, QUALITY_CALL, REACH, LANDING_PAGE_VIEWS, VISIT_INSTAGRAM_PROFILE, ENGAGED_PAGE_VIEWS, VALUE, THRUPLAY, DERIVED_EVENTS, APP_INSTALLS_AND_OFFSITE_CONVERSIONS, CONVERSATIONS, IN_APP_VALUE, MESSAGING_PURCHASE_CONVERSION, MESSAGING_DEEP_CONVERSATION_AND_FOLLOW, SUBSCRIBERS, REMINDERS_SET, MEANINGFUL_CALL_ATTEMPT, PROFILE_VISIT, PROFILE_AND_PAGE_ENGAGEMENT, ADVERTISER_SILOED_VALUE, AUTOMATIC_OBJECTIVE, MESSAGING_APPOINTMENT_CONVERSION}* | The optimization goal that you want the estimate for. You will only get action predictions for certain optimization goals where actions make sense. For allowed values please see [optimization_goals](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign)<br> |
| `promoted_object`<br><br>*Object* | The promoted object for the ad set that you want an estimate for. This is the same format as when you [create an ad set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign)<br><br><br>`application_id` *int*<br>The ID of a Facebook Application. Usually related to mobile or canvas games being promoted on Facebook for installs or engagement<br><br><br>`pixel_id` *numeric string or integer*<br>The ID of a Facebook conversion pixel.  Used with offsite conversion campaigns.<br><br><br>`custom_event_type` *enum{AD_IMPRESSION, RATE, TUTORIAL_COMPLETION, CONTACT, CUSTOMIZE_PRODUCT, DONATE, FIND_LOCATION, SCHEDULE, START_TRIAL, SUBMIT_APPLICATION, SUBSCRIBE, ADD_TO_CART, ADD_TO_WISHLIST, INITIATED_CHECKOUT, ADD_PAYMENT_INFO, PURCHASE, LEAD, COMPLETE_REGISTRATION, CONTENT_VIEW, SEARCH, SERVICE_BOOKING_REQUEST, MESSAGING_CONVERSATION_STARTED_7D, LEVEL_ACHIEVED, ACHIEVEMENT_UNLOCKED, SPENT_CREDITS, LISTING_INTERACTION, D2_RETENTION, D7_RETENTION, OTHER}*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`object_store_url` *URL*<br>The uri of the mobile / digital store where an application can be bought / downloaded. This is platform specific. When combined with the "application_id" this uniquely specifies an object which can be the subject of a Facebook advertising campaign.<br><br><br>`object_store_urls` *list<URL>*<br>The vec of uri of the mobile / digital store where an application can be bought / downloaded. This is platform specific. When combined with the "application_id" this uniquely specifies an object which can be the subject of a Facebook advertising campaign.<br><br><br>`offer_id` *numeric string or integer*<br>The ID of an Offer from a Facebook Page.<br><br><br>`page_id` *Page ID*<br>The ID of a Facebook Page<br><br><br>`product_catalog_id` *numeric string or integer*<br>The ID of a Product Catalog. Used with<br>[Dynamic Product Ads](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads).<br><br><br>`product_item_id` *numeric string or integer*<br>The ID of the product item.<br><br><br>`job_listing_id` *numeric string or integer*<br>The ID of the marketplace job listing.<br><br><br>`instagram_profile_id` *numeric string or integer*<br>The ID of the instagram profile id.<br><br><br>`product_set_id` *numeric string or integer*<br>The ID of a Product Set within an Ad Set level Product<br>Catalog. Used with<br>[Dynamic Product Ads](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads).<br><br><br>`event_id` *numeric string or integer*<br>The ID of a Facebook Event<br><br><br>`offline_conversion_data_set_id` *numeric string or integer*<br>The ID of the offline dataset.<br><br><br>`fundraiser_campaign_id` *numeric string or integer*<br>The ID of the fundraiser campaign.<br><br><br>`custom_event_str` *string*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`mcme_conversion_id` *numeric string or integer*<br>The ID of a MCME conversion.<br><br><br>`conversion_goal_id` *numeric string or integer*<br>The ID of a Conversion Goal.<br><br><br>`offsite_conversion_event_id` *numeric string or integer*<br>The ID of a Offsite Conversion Event<br><br><br>`boosted_product_set_id` *numeric string or integer*<br>The ID of the Boosted Product Set within an Ad Set level Product<br>Catalog. Should only be present when the advertiser has<br>opted into Product Set Boosting.<br><br><br>`lead_ads_form_event_source_type` *enum{inferred, meta_source, offsite_crm, offsite_web, onsite_crm, onsite_crm_single_event, onsite_clo_dep_aet, onsite_web, onsite_p2b_call, onsite_messaging, qualified_lead_file}*<br>The event source of lead ads form.<br><br><br>`lead_ads_custom_event_type` *enum{AD_IMPRESSION, RATE, TUTORIAL_COMPLETION, CONTACT, CUSTOMIZE_PRODUCT, DONATE, FIND_LOCATION, SCHEDULE, START_TRIAL, SUBMIT_APPLICATION, SUBSCRIBE, ADD_TO_CART, ADD_TO_WISHLIST, INITIATED_CHECKOUT, ADD_PAYMENT_INFO, PURCHASE, LEAD, COMPLETE_REGISTRATION, CONTENT_VIEW, SEARCH, SERVICE_BOOKING_REQUEST, MESSAGING_CONVERSATION_STARTED_7D, LEVEL_ACHIEVED, ACHIEVEMENT_UNLOCKED, SPENT_CREDITS, LISTING_INTERACTION, D2_RETENTION, D7_RETENTION, OTHER}*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`lead_ads_custom_event_str` *string*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`lead_ads_offsite_conversion_type` *enum{default, clo}*<br>The offsite conversion type for lead ads<br><br><br>`value_semantic_type` *enum {VALUE, MARGIN, LIFETIME_VALUE}*<br>The semantic of the event value to be using for optimization<br><br><br>`variation` *enum {OMNI_CHANNEL_SHOP_AUTOMATIC_DATA_COLLECTION, PRODUCT_SET_AND_APP, PRODUCT_SET_AND_IN_STORE, PRODUCT_SET_AND_OMNICHANNEL, PRODUCT_SET_AND_PHONE_CALL, PRODUCT_SET_AND_WEBSITE, PRODUCT_SET_AND_WEBSITE_AND_PHONE_CALL, PRODUCT_SET_WEBSITE_APP_AND_INSTORE}*<br>Variation of the promoted object for a PCA ad<br><br><br>`passback_pixel_id` *numeric string or integer*<br>ID of the pixel used for tracking passback events<br><br><br>`passback_application_id` *numeric string or integer*<br>ID of the application used for tracking passback events<br><br><br>`product_set_optimization` *enum{enabled, disabled}*<br>Enum defining whether or not the ad should be optimized for the promoted product set<br><br><br>`full_funnel_objective` *enum{OFFER_CLAIMS, PAGE_LIKES, EVENT_RESPONSES, POST_ENGAGEMENT, WEBSITE_CONVERSIONS, LINK_CLICKS, VIDEO_VIEWS, LOCAL_AWARENESS, PRODUCT_CATALOG_SALES, LEAD_GENERATION, BRAND_AWARENESS, STORE_VISITS, REACH, APP_INSTALLS, MESSAGES, OUTCOME_AWARENESS, OUTCOME_ENGAGEMENT, OUTCOME_LEADS, OUTCOME_SALES, OUTCOME_TRAFFIC, OUTCOME_APP_PROMOTION}*<br>Enum defining the full funnel objective of the campaign<br><br><br>`dataset_split_id` *numeric string or integer*<br>ID of the dataset split used to perform additional optimization on the dataset<br><br><br>`dataset_split_ids` *array<numeric string>*<br>IDs of the dataset splits used to perform additional optimization on the dataset<br><br><br>`lead_ads_selected_pixel_id` *numeric string or integer*<br>The selected pixel id for lead ads conversion leads optimization<br><br><br>`custom_attribution_source_ids` *array<numeric string>*<br>IDs of the custom attribution sources used for tracking passback events<br><br><br>`multi_event_product` *int64*<br>Identifies which action-to-action product the advertiser is using<br><br><br>`product_sales_channel` *enum {ONLINE, IN_STORE, OMNI}*<br>ProductSalesChannel of the promoted object for Omni L3 DA SBLI ads<br><br><br>`anchor_event_config` *JSON object*<br>Configuration for anchor event in multi-event optimization campaigns<br><br><br>`multi_event_conversion_info` *JSON object*<br>Configuration for multi-event conversion info in CLO campaigns<br><br><br>`live_video_destination` *string*<br>The live video destination type for live video ads<br><br><br>`smart_pse_enabled` *boolean*<br>Whether Smart Product Set Expansion is enabled for this campaign.<br><br><br>`smart_pse_setting` *enum{ENABLED, DISABLED}*<br>Setting for Smart Product Set Expansion. Uses an enum instead of a boolean to avoid TAO null handling issues.<br><br><br>`lead_ads_follow_up_event` *enum{whatsapp_conversations}*<br>The selected lead follow-up event for lead ads campaigns.<br><br><br>`omnichannel_object` *Object*<br><br>`app` *array<JSON object>*<br><br>`pixel` *array<JSON object>*<br>**[required]**<br><br><br>`onsite` *array<JSON object>*<br><br>`whats_app_business_phone_number_id` *numeric string or integer*<br><br>`whatsapp_phone_number` *string* |
| `targeting_spec`<br><br>*Targeting object* | The targeting specification for delivery estimate. See [targeting](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/advanced-targeting)<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [AdCampaignDeliveryEstimate](https://developers.facebook.com/docs/marketing-api/reference/ad-campaign-delivery-estimate) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |
| 2641 | Your ad includes or excludes locations that are currently restricted |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 200 | Permissions error |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/delivery_stats.md -->

## Ad Campaign Delivery Stats

### Reading

Edge for delivery stats

##### Example

#### HTTP
```
GET /v25.0/{ad-set-id}/delivery_stats HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-set-id}/delivery_stats',
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
    "/{ad-set-id}/delivery_stats",
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
    "/{ad-set-id}/delivery_stats",
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
                               initWithGraphPath:@"/{ad-set-id}/delivery_stats"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-set-id%7D%2Fdelivery_stats&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `bid_recommendation_type`<br><br>*enum {LOWEST_COST_TO_COST_CAP}* | The type of provided bid recommendation. Currently we only support lowest_cost_to_cost_cap, which recommends users to switch from lowest cost to cost cap.<br> |
| `groups`<br><br>*array<enum {LEGACY_ALL, LEARNING_STAGE_COMMON_INFO, BIDDING_RECOMMENDATIONS, LEARNING_STAGE_EXIT, UNSUPPORTED_FEATURES}>* | The groups of fields that being fetched<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdCampaignDeliveryStats nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/insights.md -->

## Ad Campaign Insights

The Insights API can return several metrics which are *estimated* or *in-development*. In some cases a metric may be **both** *estimated and in-development*.

- **Estimated** - Provide directional insights for outcomes that are hard to precisely quantify. They may evolve as we gather more data. See [Ads Help Center, Estimated metrics](https://www.facebook.com/business/help/181058782494426?helpref=faq_content#estimated).

- **In Development** - Still being tested and may change as we improve our methodologies. We encourage you to use it for directional guidance, but please use caution when using it for historical comparisons or strategic planning. See [Ads Help Center, In development metrics](https://www.facebook.com/business/help/181058782494426?helpref=faq_content#indevelopment).

For more information, see [Insights API, Estimated and Deprecated Metrics](https://developers.facebook.com/docs/marketing-api/insights/estimated-in-development)

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

#### Example — Instagram Explore home Ad Set insights breakdown by platform

```
GET /v27.0/<AD_SET_ID>/insights?breakdowns=publisher_platform,platform_position HTTP/1.1
Host: graph.facebook.com

//Or

curl -X GET -G \
  -d 'breakdowns="publisher_platform,platform_position"' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v27.0/<AD_SET_ID>/insights
```

The return object looks like this:

```
{
  "data": [
    {
      "account_id": "<ACCOUNT_ID>",
      "campaign_id": "<AD_CAMPAIGN_ID>",
      "date_start": "2022-08-29",
      "date_stop": "2022-09-27",
      "impressions": "1000",
      "spend": "100.50",
      "publisher_platform": "instagram",
      "platform_position": "instagram_explore_grid_home"
    }
  ],
  "paging": {
    "cursors": {
      "before": "MAZDZD",
      "after": "MAZDZD"
    }
  }
}
```

#### Example - Instagram search results Ad Set insights breakdown by platform

```
GET /v27.0/<AD_SET_ID>/insights?breakdowns=publisher_platform,platform_position HTTP/1.1
Host: graph.facebook.com

//Or

curl -X GET -G \
  -d 'breakdowns="publisher_platform,platform_position"' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v27.0/<AD_SET_ID>/insights
```

The return object looks like this:

```
{
  "data": [
    {
      "account_id": "<ACCOUNT_ID>",
      "campaign_id": "<AD_CAMPAIGN_ID>",
      "date_start": "2023-01-08",
      "date_stop": "2023-02-06",
      "impressions": "1000",
      "spend": "100.50",
      "publisher_platform": "instagram",
      "platform_position": "instagram_search"
    }
  ],
  "paging": {
    "cursors": {
      "before": "MAZDZD",
      "after": "MAZDZD"
    }
  }
}
```

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
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |
| 190 | Invalid OAuth 2.0 Access Token |
| 3018 | The start date of the time range cannot be beyond 37 months from the current date |
| 2642 | Invalid cursors values |
| 200 | Permissions error |
| 2500 | Error parsing graph query |

### Creating

#### /{ad_set_id}/insights
You can make a POST request to *insights* edge from the following paths:

- [/{ad_set_id}/insights](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/insights)

When posting to this edge, an [AdReportRun](https://developers.facebook.com/docs/marketing-api/reference/ad-report-run) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `action_attribution_windows`<br><br>*list<enum{1d_view, 7d_view, 28d_view, 1d_click, 7d_click, 28d_click, 1d_ev, dda, default, 7d_view_first_conversion, 28d_view_first_conversion, 7d_view_all_conversions, 28d_view_all_conversions, skan_view, skan_click, skan_click_second_postback, skan_view_second_postback, skan_click_third_postback, skan_view_third_postback, incrementality, custom, 1d_sequenced, 7d_sequenced, 28d_sequenced}>* | **Default value: **`default`<br>The attribution window for the actions. For example, `28d_click` means the API returns all actions that happened 28 days after someone clicked on the ad. The `default` option means `["7d_view","1d_click"]`.<br> |
| `action_breakdowns`<br><br>*list<enum{action_device, conversion_destination, matched_persona_id, matched_persona_name, signal_source_bucket, standard_event_content_type, action_canvas_component_name, action_carousel_card_id, action_carousel_card_name, action_destination, action_reaction, action_target_id, action_type, action_video_sound, action_video_type, is_business_ai_assisted}>* | **Default value: **`Vec`<br>How to break down action results. Supports more than one breakdowns. Default value is ["action_type"].<br><br><br>Note: you must also include `actions` field whenever `action_breakdowns` is specified.<br> |
| `action_report_time`<br><br>*enum{impression, conversion, mixed, lifetime}* | Determines the report time of action stats. For example, if a person<br>saw the ad on Jan 1st but converted on Jan 2nd, when you query the API<br>with `action_report_time=impression`, you will see a conversion on Jan<br>1st. When you query the API with `action_report_time=conversion`, you<br>will see a conversion on Jan 2nd.<br> |
| `breakdowns`<br><br>*list<enum{ad_extension_domain, ad_extension_url, ad_format_asset, age, app_id, body_asset, breakdown_ad_objective, breakdown_reporting_ad_id, call_to_action_asset, coarse_conversion_value, comscore_market, country, creative_automation_asset_id, creative_relaxation_asset_type, crm_advertiser_l12_territory_ids, crm_advertiser_subvertical_id, crm_advertiser_vertical_id, crm_ult_advertiser_id, description_asset, fidelity_type, flexible_format_asset_type, gen_ai_asset_type, gender, hsid, image_asset, impression_device, instagram_ads_follow_type, instagram_ads_instagram_media_product_type, instagram_ads_time_since_creation_bucket, internal_campaign_id, is_auto_advance, is_conversion_id_modeled, is_rendered_as_delayed_skip_ad, landing_destination, link_url_asset, mdsa_landing_destination, media_asset_url, media_creator, media_destination_url, media_format, media_origin_url, media_text_content, media_type, pa_creator_ig_handle, postback_sequence_index, product_brand_breakdown, product_category_breakdown, product_custom_label_0_breakdown, product_custom_label_1_breakdown, product_custom_label_2_breakdown, product_custom_label_3_breakdown, product_custom_label_4_breakdown, product_group_content_id_breakdown, product_id, redownload, region, rta_ugc_topic, skan_campaign_id, skan_conversion_id, skan_version, sot_attribution_model_type, sot_attribution_window, sot_channel, sot_event_type, sot_source, title_asset, user_persona_id, user_persona_name, video_asset, zip, rule_set_id, rule_set_name, dma, frequency_value, overlap_segment, hourly_stats_aggregated_by_advertiser_time_zone, hourly_stats_aggregated_by_audience_time_zone, mmm, place_page_id, publisher_platform, platform_position, device_platform, standard_event_content_type, conversion_destination, signal_source_bucket, reels_trending_topic, marketing_messages_btn_name, impression_view_time_advertiser_hour_v2}>* | How to break down the result. For more than one breakdown, only certain combinations are available: See "Combining Breakdowns" in the Breakdowns page. The option `impression_device` cannot be used by itself.<br> |
| `date_preset`<br><br>*enum{today, yesterday, this_month, last_month, this_quarter, maximum, data_maximum, last_3d, last_7d, last_14d, last_28d, last_30d, last_90d, last_week_mon_sun, last_week_sun_sat, last_quarter, last_year, this_week_mon_today, this_week_sun_today, this_year}* | **Default value: **`last_30d`<br>Represents a relative time range. This field is ignored if `time_range` or `time_ranges` is specified.<br> |
| `default_summary`<br><br>*boolean* | **Default value: **`false`<br>Determine whether to return a summary. If `summary` is set, this param will be ignored; otherwise, a summary section with the same fields as specified by `fields` will be included in the summary section.<br> |
| `export_columns`<br><br>*list<string>* | Select fields on the exporting report file. It is an optional param. Exporting columns will equals to the param fields if you leave this param blank<br> |
| `export_format`<br><br>*string* | Set the format of exporting report file. If the export_format is set, Report file will be asyncrhonizely generated. It expects ["xls", "csv"].<br> |
| `export_name`<br><br>*string* | Set the file name of the exporting report.<br> |
| `fields`<br><br>*list<string>* | Fields to be retrieved. Default behavior is to return a list of most used fields.<br> |
| `filtering`<br><br>*list<Filter Object>* | **Default value: **`Vec`<br>Filters on the report data. This parameter is an array of filter objects.<br><br><br>`field` *string*<br>**[required]**<br><br><br>`operator` *enum {EQUAL, NOT_EQUAL, GREATER_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN, LESS_THAN_OR_EQUAL, IN_RANGE, NOT_IN_RANGE, CONTAIN, NOT_CONTAIN, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY, STEM_MATCH, IN, NOT_IN, STARTS_WITH, ENDS_WITH, ANY, ALL, AFTER, BEFORE, ON_OR_AFTER, ON_OR_BEFORE, NONE, TOP}*<br>**[required]**<br><br><br>`value` *string*<br>**[required]**<br> |
| `graph_cache`<br><br>*boolean* | **Default value: **`true`<br>graph_cache<br> |
| `level`<br><br>*enum {ad, adset, campaign, account}* | Represents the level of result.<br> |
| `limit`<br><br>*integer* | limit<br> |
| `product_id_limit`<br><br>*integer* | Maximun number of product ids to be returned for each ad when breakdown by product_id<br> |
| `sort`<br><br>*list<string>* | **Default value: **`Vec`<br>Field to sort the result, and direction of sorting. You can specify sorting direction by appending "_ascending" or "_descending" to the sort field. For example, "reach_descending". For actions, you can sort by action type in form of "actions:<action_type>". For example, ["actions:link_click_ascending"]. This array supports no more than one element. By default, the sorting direction is ascending.<br> |
| `summary`<br><br>*list<string>* | If this param is used, a summary section will be included, with the fields listed in this param.<br> |
| `summary_action_breakdowns`<br><br>*list<enum{action_device, conversion_destination, matched_persona_id, matched_persona_name, signal_source_bucket, standard_event_content_type, action_canvas_component_name, action_carousel_card_id, action_carousel_card_name, action_destination, action_reaction, action_target_id, action_type, action_video_sound, action_video_type, is_business_ai_assisted}>* | **Default value: **`Vec`<br>Similar to `action_breakdowns`, but applies to summary. Default value is ["action_type"].<br> |
| `time_increment`<br><br>*enum{monthly, all_days} or integer* | **Default value: **`all_days`<br>If it is an integer, it is the number of days from 1 to 90. After you pick a reporting period by using `time_range` or `date_preset`, you may choose to have the results for the whole period, or have results for smaller time slices. If "all_days" is used, it means one result set for the whole period. If "monthly" is used, you will get one result set for each calendar month in the given period. Or you can have one result set for each N-day period specified by this param. This param is ignored if `time_ranges` is specified.<br> |
| `time_range`<br><br>*{'since':YYYY-MM-DD,'until':YYYY-MM-DD}* | A single time range object. UNIX timestamp not supported. This param is ignored if `time_ranges` is provided.<br><br><br>`since` *datetime*<br>A date in the format of "YYYY-MM-DD", which means from the beginning midnight of that day.<br><br><br>`until` *datetime*<br>A date in the format of "YYYY-MM-DD", which means to the beginning midnight of the following day.<br> |
| `time_ranges`<br><br>*list<{'since':YYYY-MM-DD,'until':YYYY-MM-DD}>* | Array of time range objects. Time ranges can overlap, for example to return cumulative insights. Each time range will have one result set. You cannot have more granular results with `time_increment` setting in this case.If `time_ranges` is specified, `date_preset`, `time_range` and `time_increment` are ignored.<br><br><br>`since` *datetime*<br>A date in the format of "YYYY-MM-DD", which means from the beginning midnight of that day.<br><br><br>`until` *datetime*<br>A date in the format of "YYYY-MM-DD", which means to the beginning midnight of the following day.<br> |
| `use_account_attribution_setting`<br><br>*boolean* | **Default value: **`false`<br>When this parameter is set to true, your ads results will be shown using the attribution settings defined for the ad account.<br> |
| `use_unified_attribution_setting`<br><br>*boolean* | When this parameter is set to true, your ads results will be shown using unified attribution settings defined at ad set level and parameter use_account_attribution_setting will be ignored.<br> |

##### Return Type

```
Struct  {
report_run_id: numeric string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |
| 3018 | The start date of the time range cannot be beyond 37 months from the current date |
| 2500 | Error parsing graph query |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/message_delivery_estimate.md -->

## Ad Campaign Message Delivery Estimate

### Reading

The campaign delivery estimation for marketing messages

##### Example

#### HTTP
```
GET /v25.0/{ad-set-id}/message_delivery_estimate HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-set-id}/message_delivery_estimate',
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
    "/{ad-set-id}/message_delivery_estimate",
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
    "/{ad-set-id}/message_delivery_estimate",
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
                               initWithGraphPath:@"/{ad-set-id}/message_delivery_estimate"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-set-id%7D%2Fmessage_delivery_estimate&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `bid_amount`<br><br>*int64* | The bid amount of this campaign<br> |
| `lifetime_budget`<br><br>*int64* | The lifetime budget of this campaign<br> |
| `lifetime_in_days`<br><br>*int64* | The campaign lifetime duration in days<br> |
| `optimization_goal`<br><br>*enum {NONE, APP_INSTALLS, AD_RECALL_LIFT, ENGAGED_USERS, EVENT_RESPONSES, IMPRESSIONS, LEAD_GENERATION, QUALITY_LEAD, LINK_CLICKS, OFFSITE_CONVERSIONS, PAGE_LIKES, POST_ENGAGEMENT, QUALITY_CALL, REACH, LANDING_PAGE_VIEWS, VISIT_INSTAGRAM_PROFILE, ENGAGED_PAGE_VIEWS, VALUE, THRUPLAY, DERIVED_EVENTS, APP_INSTALLS_AND_OFFSITE_CONVERSIONS, CONVERSATIONS, IN_APP_VALUE, MESSAGING_PURCHASE_CONVERSION, MESSAGING_DEEP_CONVERSATION_AND_FOLLOW, SUBSCRIBERS, REMINDERS_SET, MEANINGFUL_CALL_ATTEMPT, PROFILE_VISIT, PROFILE_AND_PAGE_ENGAGEMENT, ADVERTISER_SILOED_VALUE, AUTOMATIC_OBJECTIVE, MESSAGING_APPOINTMENT_CONVERSION}* | The optimization goal of this campaign<br> |
| `pacing_type`<br><br>*enum {STANDARD, DISABLED, DAY_PARTING, NO_PACING, PROBABILISTIC_PACING, PROBABILISTIC_PACING_V2}* | The pacing type of this campaign<br> |
| `promoted_object`<br><br>*Object* | The promoted object of this campaign<br><br><br>`application_id` *int*<br>The ID of a Facebook Application. Usually related to mobile or canvas games being promoted on Facebook for installs or engagement<br><br><br>`pixel_id` *numeric string or integer*<br>The ID of a Facebook conversion pixel.  Used with offsite conversion campaigns.<br><br><br>`custom_event_type` *enum{AD_IMPRESSION, RATE, TUTORIAL_COMPLETION, CONTACT, CUSTOMIZE_PRODUCT, DONATE, FIND_LOCATION, SCHEDULE, START_TRIAL, SUBMIT_APPLICATION, SUBSCRIBE, ADD_TO_CART, ADD_TO_WISHLIST, INITIATED_CHECKOUT, ADD_PAYMENT_INFO, PURCHASE, LEAD, COMPLETE_REGISTRATION, CONTENT_VIEW, SEARCH, SERVICE_BOOKING_REQUEST, MESSAGING_CONVERSATION_STARTED_7D, LEVEL_ACHIEVED, ACHIEVEMENT_UNLOCKED, SPENT_CREDITS, LISTING_INTERACTION, D2_RETENTION, D7_RETENTION, OTHER}*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`object_store_url` *URL*<br>The uri of the mobile / digital store where an application can be bought / downloaded. This is platform specific. When combined with the "application_id" this uniquely specifies an object which can be the subject of a Facebook advertising campaign.<br><br><br>`object_store_urls` *list<URL>*<br>The vec of uri of the mobile / digital store where an application can be bought / downloaded. This is platform specific. When combined with the "application_id" this uniquely specifies an object which can be the subject of a Facebook advertising campaign.<br><br><br>`offer_id` *numeric string or integer*<br>The ID of an Offer from a Facebook Page.<br><br><br>`page_id` *Page ID*<br>The ID of a Facebook Page<br><br><br>`product_catalog_id` *numeric string or integer*<br>The ID of a Product Catalog. Used with<br>[Dynamic Product Ads](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads).<br><br><br>`product_item_id` *numeric string or integer*<br>The ID of the product item.<br><br><br>`job_listing_id` *numeric string or integer*<br>The ID of the marketplace job listing.<br><br><br>`instagram_profile_id` *numeric string or integer*<br>The ID of the instagram profile id.<br><br><br>`product_set_id` *numeric string or integer*<br>The ID of a Product Set within an Ad Set level Product<br>Catalog. Used with<br>[Dynamic Product Ads](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads).<br><br><br>`event_id` *numeric string or integer*<br>The ID of a Facebook Event<br><br><br>`offline_conversion_data_set_id` *numeric string or integer*<br>The ID of the offline dataset.<br><br><br>`fundraiser_campaign_id` *numeric string or integer*<br>The ID of the fundraiser campaign.<br><br><br>`custom_event_str` *string*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`mcme_conversion_id` *numeric string or integer*<br>The ID of a MCME conversion.<br><br><br>`conversion_goal_id` *numeric string or integer*<br>The ID of a Conversion Goal.<br><br><br>`offsite_conversion_event_id` *numeric string or integer*<br>The ID of a Offsite Conversion Event<br><br><br>`boosted_product_set_id` *numeric string or integer*<br>The ID of the Boosted Product Set within an Ad Set level Product<br>Catalog. Should only be present when the advertiser has<br>opted into Product Set Boosting.<br><br><br>`lead_ads_form_event_source_type` *enum{inferred, meta_source, offsite_crm, offsite_web, onsite_crm, onsite_crm_single_event, onsite_clo_dep_aet, onsite_web, onsite_p2b_call, onsite_messaging, qualified_lead_file}*<br>The event source of lead ads form.<br><br><br>`lead_ads_custom_event_type` *enum{AD_IMPRESSION, RATE, TUTORIAL_COMPLETION, CONTACT, CUSTOMIZE_PRODUCT, DONATE, FIND_LOCATION, SCHEDULE, START_TRIAL, SUBMIT_APPLICATION, SUBSCRIBE, ADD_TO_CART, ADD_TO_WISHLIST, INITIATED_CHECKOUT, ADD_PAYMENT_INFO, PURCHASE, LEAD, COMPLETE_REGISTRATION, CONTENT_VIEW, SEARCH, SERVICE_BOOKING_REQUEST, MESSAGING_CONVERSATION_STARTED_7D, LEVEL_ACHIEVED, ACHIEVEMENT_UNLOCKED, SPENT_CREDITS, LISTING_INTERACTION, D2_RETENTION, D7_RETENTION, OTHER}*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`lead_ads_custom_event_str` *string*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`lead_ads_offsite_conversion_type` *enum{default, clo}*<br>The offsite conversion type for lead ads<br><br><br>`value_semantic_type` *enum {VALUE, MARGIN, LIFETIME_VALUE}*<br>The semantic of the event value to be using for optimization<br><br><br>`variation` *enum {OMNI_CHANNEL_SHOP_AUTOMATIC_DATA_COLLECTION, PRODUCT_SET_AND_APP, PRODUCT_SET_AND_IN_STORE, PRODUCT_SET_AND_OMNICHANNEL, PRODUCT_SET_AND_PHONE_CALL, PRODUCT_SET_AND_WEBSITE, PRODUCT_SET_AND_WEBSITE_AND_PHONE_CALL, PRODUCT_SET_WEBSITE_APP_AND_INSTORE}*<br>Variation of the promoted object for a PCA ad<br><br><br>`passback_pixel_id` *numeric string or integer*<br>ID of the pixel used for tracking passback events<br><br><br>`passback_application_id` *numeric string or integer*<br>ID of the application used for tracking passback events<br><br><br>`product_set_optimization` *enum{enabled, disabled}*<br>Enum defining whether or not the ad should be optimized for the promoted product set<br><br><br>`full_funnel_objective` *enum{OFFER_CLAIMS, PAGE_LIKES, EVENT_RESPONSES, POST_ENGAGEMENT, WEBSITE_CONVERSIONS, LINK_CLICKS, VIDEO_VIEWS, LOCAL_AWARENESS, PRODUCT_CATALOG_SALES, LEAD_GENERATION, BRAND_AWARENESS, STORE_VISITS, REACH, APP_INSTALLS, MESSAGES, OUTCOME_AWARENESS, OUTCOME_ENGAGEMENT, OUTCOME_LEADS, OUTCOME_SALES, OUTCOME_TRAFFIC, OUTCOME_APP_PROMOTION}*<br>Enum defining the full funnel objective of the campaign<br><br><br>`dataset_split_id` *numeric string or integer*<br>ID of the dataset split used to perform additional optimization on the dataset<br><br><br>`dataset_split_ids` *array<numeric string>*<br>IDs of the dataset splits used to perform additional optimization on the dataset<br><br><br>`lead_ads_selected_pixel_id` *numeric string or integer*<br>The selected pixel id for lead ads conversion leads optimization<br><br><br>`custom_attribution_source_ids` *array<numeric string>*<br>IDs of the custom attribution sources used for tracking passback events<br><br><br>`multi_event_product` *int64*<br>Identifies which action-to-action product the advertiser is using<br><br><br>`product_sales_channel` *enum {ONLINE, IN_STORE, OMNI}*<br>ProductSalesChannel of the promoted object for Omni L3 DA SBLI ads<br><br><br>`anchor_event_config` *JSON object*<br>Configuration for anchor event in multi-event optimization campaigns<br><br><br>`multi_event_conversion_info` *JSON object*<br>Configuration for multi-event conversion info in CLO campaigns<br><br><br>`live_video_destination` *string*<br>The live video destination type for live video ads<br><br><br>`smart_pse_enabled` *boolean*<br>Whether Smart Product Set Expansion is enabled for this campaign.<br><br><br>`smart_pse_setting` *enum{ENABLED, DISABLED}*<br>Setting for Smart Product Set Expansion. Uses an enum instead of a boolean to avoid TAO null handling issues.<br><br><br>`lead_ads_follow_up_event` *enum{whatsapp_conversations}*<br>The selected lead follow-up event for lead ads campaigns.<br><br><br>`omnichannel_object` *Object*<br><br>`app` *array<JSON object>*<br><br>`pixel` *array<JSON object>*<br>**[required]**<br><br><br>`onsite` *array<JSON object>*<br><br>`whats_app_business_phone_number_id` *numeric string or integer*<br><br>`whatsapp_phone_number` *string* |
| `targeting_spec`<br><br>*Targeting object* | The targeting setup of this campaign<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of MessageDeliveryEstimate nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/publisher_delivery_report.md -->

## Ad Campaign Publisher Delivery Report

### Reading

Publisher delivery report for a specified ad set.

##### Example

#### HTTP
```
GET /v25.0/{ad-set-id}/publisher_delivery_report HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-set-id}/publisher_delivery_report',
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
    "/{ad-set-id}/publisher_delivery_report",
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
    "/{ad-set-id}/publisher_delivery_report",
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
                               initWithGraphPath:@"/{ad-set-id}/publisher_delivery_report"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-set-id%7D%2Fpublisher_delivery_report&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `end_date`<br><br>*datetime* | The end date for the delivery report<br> |
| `name_contains`<br><br>*string* | What substring the name of publishers returned should contain<br> |
| `platform`<br><br>*enum {AUDIENCE_NETWORK, FACEBOOK, INSTAGRAM, MESSENGER, WHATSAPP, WHATSAPP_STATUS, OCULUS, THREADS, UNKNOWN, HIDDEN_AAA}* | The platform type of the publisher delivery report requested<br><br>**[required]**<br> |
| `position`<br><br>*enum {ALL_PLACEMENTS, AN_CLASSIC, FEED, GROUPS, FACEBOOK_GROUPS_FEED, INSTAGRAM_STORIES, MESSENGER_INBOX, RIGHT_HAND_COLUMN, OTHERS, SEARCH, INSTANT_ARTICLE, INSTREAM_VIDEO, REWARDED_VIDEO, SUGGESTED_VIDEO, MARKETPLACE, FACEBOOK_STORIES, MESSENGER_STORIES, STATUS, INSTAGRAM_EXPLORE, UNKNOWN, VIDEO_FEEDS, INSTAGRAM_IGTV, HIDDEN_AAA, JOBS_BROWSER, OCULUS_TWILIGHT_FEED, STICKERS, INSTAGRAM_REELS, INSTAGRAM_SHOP, OCULUS_VR_APPS, BIZ_DISCO_FEED, OCULUS_REWARDED_VIDEO, OCULUS_TWILIGHT_FEED_SPOTLIGHT, OCULUS_TWILIGHT_SEARCH, OCULUS_TWILIGHT_SEARCH_NULL_STATE, FACEBOOK_REELS, OCULUS_TWILIGHT_DEVELOPER_UPDATE, FACEBOOK_REELS_OVERLAY, INSTAGRAM_REELS_OVERLAY, INSTAGRAM_EFFECT_TRAY, INSTAGRAM_EXPLORE_GRID_HOME, INSTAGRAM_PROFILE_FEED, INSTAGRAM_PROFILE_REELS, FACEBOOK_PROFILE_FEED, INSTAGRAM_SEARCH, ADS_ON_FACEBOOK_REELS, INSTAGRAM_LEAD_GEN_MULTI_SUBMIT, WHATSAPP_MARKETING_MESSAGES, FACEBOOK_PROFILE_REELS, THREADS_FEED, WHATSAPP_CHANNEL, FACEBOOK_NOTIFICATION, MESSENGER_MARKETING_MESSAGES, FACEBOOK_MULTI_ADS, FACEBOOK_REELS_BANNER, FACEBOOK_REELS_POSTLOOP, FACEBOOK_INSTREAM_BANNER, FACEBOOK_INSTREAM_VIDEO, INSTAGRAM_REELS_INSTREAM}* | The position of the publisher delivery report requested<br><br>**[required]**<br> |
| `publisher_status`<br><br>*enum {ALL, PARTNER, NON_PARTNER}* | **Default value: **`"ALL"`<br>An in-stream publisher status to filter<br> |
| `sort_by`<br><br>*enum {URL_ASCENDING, URL_DESCENDING, NAME_ASCENDING, NAME_DESCENDING, IMPRESSIONS_ASCENDING, IMPRESSIONS_DESCENDING}* | **Default value: **`"IMPRESSIONS_DESCENDING"`<br>Which category and direction the report is sorted by<br> |
| `start_date`<br><br>*datetime* | The start date for the delivery report<br> |
| `summary`<br><br>*boolean* | **Default value: **`true`<br>summary<br> |

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

A list of [PublisherDeliveryReport](https://developers.facebook.com/docs/marketing-api/reference/publisher-delivery-report) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `end_date`<br><br>*string* | The end date for the delivery report<br><br><br>**[default]**<br> |
| `non_partner_count`<br><br>*unsigned int32* | Number of rows of non in-stream partner returned<br><br><br>**[default]**<br> |
| `start_date`<br><br>*string* | The start date for the delivery report<br><br><br>**[default]**<br> |
| `total_count`<br><br>*unsigned int32* | Total number of rows in the report<br><br><br>**[default]**<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/targeting_insights.md -->

## Ad Campaign Targeting Insights

### Reading

AdCampaignTargetingInsights

##### Example

#### HTTP
```
GET /v25.0/{ad-set-id}/targeting_insights HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-set-id}/targeting_insights',
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
    "/{ad-set-id}/targeting_insights",
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
    "/{ad-set-id}/targeting_insights",
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
                               initWithGraphPath:@"/{ad-set-id}/targeting_insights"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-set-id%7D%2Ftargeting_insights&version=v25.0)

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

A list of AdsTargetingInsights nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign/targetingsentencelines.md -->

## Ad Campaign Targetingsentencelines

### Reading

##### Example

#### HTTP
```
GET /v25.0/{ad-set-id}/targetingsentencelines HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-set-id}/targetingsentencelines',
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
    "/{ad-set-id}/targetingsentencelines",
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
    "/{ad-set-id}/targetingsentencelines",
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
                               initWithGraphPath:@"/{ad-set-id}/targetingsentencelines"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-set-id%7D%2Ftargetingsentencelines&version=v25.0)

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

A list of [TargetingSentenceLine](https://developers.facebook.com/docs/marketing-api/reference/targeting-sentence-line) nodes.

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
