# Ad

> Source: Meta Marketing API reference (12 pages). Fetched 2026-11-18.


---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/adgroup.md -->

## Ad

Contains information to display an ad and associate it with an ad set. Each ad is associated with an ad set and all ads in a set have the same daily or lifetime budget, schedule, and targeting. Creating multiple ads in an ad set helps optimize their delivery based on variations in images, links, video, text or placements.

Note that results returned by `synchronous_ad_review` does not represent the final decision made during full review of your ad.

#### Ads with Political Content

To increase transparency of ads on Facebook, we require advertisers running ads with political content to complete authorization. We will begin enforcing this in the next few weeks. You must also indicate that your ad has political content and provide the name of the funding source for the ad:

- Your ad account must be authorized by a Page admin to run political ads for this Page. This is done by a Page admin on the `Issue, Electoral or Political Ads` tab under `Page Settings`.

- Ad account users must go through a verification process.

#### Ads with Page Mentions

With Facebook's ads tools such as [Ads Manager](https://www.facebook.com/ads/manager/accounts) or light-weight interfaces, you can create an ad with a *Page Mention*. This displays a link in your ad which opens an advertiser's Facebook page. **We do not provide this functionality in Marketing API**. If you try to create an ad with the API with a Page Mention it will succeed, however we will deliver the ad without the mention. Instead, use one of Facebook's ads tools.

#### Targeting DSA Regulated Locations (European Union)

To create or copy an ad which is in an ad set targeted in the European Union's Digital Services Act (DSA) regulated locations, please set the payor/beneficiary information first. For your convenience, if the `default_dsa_payor` and `default_dsa_beneficiary` are set in an ad account, during the copying process, even if the original ad set does not set payor or beneficiary, it will be filled with saved default values. For more information on copying ads that target DSA regulated locations in the EU, see the [Ad Copies reference documentation](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/adgroup/copies#targeting-dsa-regulated-locations--european-union-).

#### Targeting Youth in European Union (EU), European Economic Area (EEA), and Switzerland

Meta will stop showing ads to youth in the EU, EEA, and Switzerland as early as the week of November 6, 2023.  When creating new ad sets or updating existing ones that target youth in the EU, EEA, and Switzerland, they will be prevented. Existing ad sets targeting youth in the EU, EEA and Switzerland, will pause delivery as early as the week of November 6, 2023. Existing ad sets targeting youth in the EU, EEA, and Switzerland and in other regions  will see a warning that the ads in the ad sets will no longer be delivered to youth in the EU, EEA, and Switzerland.

#### Examples

Creating an ad:

```html
curl -X POST \
  -F 'name="My Ad"' \
  -F 'adset_id="<AD_SET_ID>"' \
  -F 'creative={
       "creative_id": "<CREATIVE_ID>"
     }' \
  -F 'status="PAUSED"' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v27.0/act_<AD_ACCOUNT_ID>/ads
```

To create a political ad, provide `authorization_category` with the value `POLITICAL`  . For example:

```html
curl -X POST \
  -F 'name="My AdGroup"' \
  -F 'adset_id="<AD_SET_ID>"' \
  -F 'creative={
       "creative_id": "<CREATIVE_ID>"
     }' \
  -F 'status="PAUSED"' \
  -F 'authorization_category="POLITICAL"' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v27.0/act_<AD_ACCOUNT_ID>/ads
```

See:

- [Ad Campaign](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group), [Ad Set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign), and [Ad Creative](https://developers.facebook.com/docs/reference/ads-api/adcreative)

- [Storing Ad Objects](https://developers.facebook.com/documentation/ads-commerce/marketing-api/best-practices/manage-your-ad-object-status)

### Reading

An ad object contains the data necessary to visually display an ad and associate it with a corresponding ad set.

#### By ad ID {#read-ad}

```html
curl -X GET \
  -d 'fields="id,name"' \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v27.0/<AD_ID>/
```

#### By ad account {#read-adaccount}

To read all ads from one ad account:

#### PHP Business SDK
```
use FacebookAds\Object\AdAccount;
use FacebookAds\Object\Fields\AdFields;

$account = new AdAccount($account_id);
$ads = $account->getAds(array(
  AdFields::NAME,
));

// Outputs names of Ads.
foreach ($ads as $ad) {
  echo $ad->name;
}
```

#### Python Business SDK
```
from facebookads.objects import AdAccount, Ad

account_id = 'act_<AD_ACCOUNT_ID>'
ad_account = AdAccount(account_id)
ad_iter = ad_account.get_ads(fields=[Ad.Field.name])
for ad in ad_iter:
    print ad[Ad.Field.name]
```

#### cURL
```
curl -G \
-d "fields=name" \
-d "access_token=<ACCESS_TOKEN>" \
"https://graph.facebook.com/<API_VERSION>/act_<AD_ACCOUNT_ID>/ads"
```

#### By ad campaign {#read-ad-campaign}

Read all ads from a campaign:

```html
curl -X GET \
  -d 'fields="name"' \
  -d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v27.0/<AD_CAMPAIGN_ID>/ads
```

#### By ad set {#read-campaign}

To read all ads from one ad set:

#### PHP Business SDK
```
use FacebookAds\Object\AdSet;
use FacebookAds\Object\Fields\AdSetFields;

$adset = new AdSet($adset_id);
$ads = $adset->getAds(array(
  AdFields::NAME,
));

// Outputs names of Ads .
foreach ($ads as $ad) {
  echo $ad->name;
}
```

#### Python Business SDK
```
from facebookads.objects import AdSet, Ad

adset_id = <AD_SET_ID>
ad_set = AdSet(adset_id)
ad_iter = ad_set.get_ads(fields=[Ad.Field.name])
for ad in ad_iter:
    print ad[Ad.Field.name]
```

#### cURL
```
curl \
-F "fields=name" \
-F "access_token=<ACCESS_TOKEN>" \
"https://graph.facebook.com/<API_VERSION>/<AD_SET_ID>/ads"
```

##### Example

#### HTTP
```
GET /v25.0/<ADGROUP_ID>/?fields=id%2Cname HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/<ADGROUP_ID>/?fields=id%2Cname',
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
    "/<ADGROUP_ID>/",
    {
        "fields": "id,name"
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
params.putString("fields", "id,name");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/<ADGROUP_ID>/",
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
  @"fields": @"id,name",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/<ADGROUP_ID>/"
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
  -d 'fields="id,name"' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/<ADGROUP_ID>/
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%3CADGROUP_ID%3E%2F%3Ffields%3Did%252Cname&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `date_preset`<br><br>*enum{today, yesterday, this_month, last_month, this_quarter, maximum, data_maximum, last_3d, last_7d, last_14d, last_28d, last_30d, last_90d, last_week_mon_sun, last_week_sun_sat, last_quarter, last_year, this_week_mon_today, this_week_sun_today, this_year}* | Date Preset<br> |
| `review_feedback_breakdown`<br><br>*boolean* | **Default value: **`false`<br>review_feedback_breakdown<br> |
| `time_range`<br><br>*{'since':YYYY-MM-DD,'until':YYYY-MM-DD}* | Time Range. Note if time range is invalid, it will be ignored.<br><br><br>`since` *datetime*<br>A date in the format of "YYYY-MM-DD", which means from the beginning midnight of that day.<br><br><br>`until` *datetime*<br>A date in the format of "YYYY-MM-DD", which means to the beginning midnight of the following day.<br> |

##### Fields

| Field | Description |
| --- | --- |
| `id`<br><br>*numeric string* | id<br><br><br>**[default]**<br> |
| `account_id`<br><br>*numeric string* | account_id<br> |
| `ad_active_time`<br><br>*numeric string* | ad_active_time<br> |
| `ad_review_feedback`<br><br>*[AdgroupReviewFeedback](https://developers.facebook.com/docs/marketing-api/reference/adgroup-review-feedback)* | ad_review_feedback<br> |
| `ad_schedule_end_time`<br><br>*datetime* | ad_schedule_end_time<br> |
| `ad_schedule_start_time`<br><br>*datetime* | ad_schedule_start_time<br> |
| `adlabels`<br><br>*[list<AdLabel>](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label)* | adlabels<br> |
| `adset`<br><br>*[AdSet](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign)* | adset<br> |
| `adset_id`<br><br>*numeric string* | adset_id<br> |
| `bid_amount`<br><br>*int32* | bid_amount<br> |
| `bid_info`<br><br>*map<string, unsigned int32>* | bid_info<br> |
| `bid_type`<br><br>*enum {CPC, CPM, MULTI_PREMIUM, ABSOLUTE_OCPM, CPA}* | bid_type<br> |
| `campaign`<br><br>*[Campaign](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group)* | campaign<br> |
| `campaign_id`<br><br>*numeric string* | campaign_id<br> |
| `configured_status`<br><br>*enum {ACTIVE, PAUSED, DELETED, ARCHIVED}* | configured_status<br> |
| `conversion_domain`<br><br>*string* | conversion_domain<br> |
| `conversion_specs`<br><br>*[list<ConversionActionQuery>](https://developers.facebook.com/docs/marketing-api/reference/conversion-action-query)* | conversion_specs<br> |
| `created_time`<br><br>*datetime* | created_time<br> |
| `creative`<br><br>*[AdCreative](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-creative)* | creative<br> |
| `creative_asset_groups_spec`<br><br>*[AdCreativeAssetGroupsSpec](https://developers.facebook.com/docs/marketing-api/reference/ad-creative-asset-groups-spec)* | creative_asset_groups_spec<br> |
| `demolink_hash`<br><br>*string* | demolink_hash<br> |
| `display_sequence`<br><br>*int32* | display_sequence<br> |
| `effective_status`<br><br>*enum {ACTIVE, PAUSED, DELETED, PENDING_REVIEW, DISAPPROVED, PREAPPROVED, PENDING_BILLING_INFO, CAMPAIGN_PAUSED, ARCHIVED, ADSET_PAUSED, IN_PROCESS, WITH_ISSUES}* | effective_status<br> |
| `engagement_audience`<br><br>*bool* | engagement_audience<br> |
| `failed_delivery_checks`<br><br>*[list<DeliveryCheck>](https://developers.facebook.com/docs/marketing-api/adgroup/deliverychecks)* | failed_delivery_checks<br> |
| `is_autobid`<br><br>*bool* | is_autobid<br> |
| `issues_info`<br><br>*[list<AdgroupIssuesInfo>](https://developers.facebook.com/docs/marketing-api/reference/adgroup-issues-info)* | issues_info<br> |
| `last_updated_by_app_id`<br><br>*id* | last_updated_by_app_id<br> |
| `name`<br><br>*string* | name<br> |
| `preview_shareable_link`<br><br>*string* | preview_shareable_link<br> |
| `priority`<br><br>*unsigned int32* | priority<br> |
| `recommendations`<br><br>*list<AdRecommendation>* | recommendations<br> |
| `source_ad`<br><br>*[Ad](https://developers.facebook.com/docs/graph-api/reference/adgroup)* | source_ad<br> |
| `source_ad_id`<br><br>*numeric string* | source_ad_id<br> |
| `special_ad_categories`<br><br>*list<enum>* | special_ad_categories<br> |
| `status`<br><br>*enum {ACTIVE, PAUSED, DELETED, ARCHIVED}* | status<br> |
| `targeting`<br><br>*Targeting* | targeting<br> |
| `tracking_and_conversion_with_defaults`<br><br>*TrackingAndConversionWithDefaults* | tracking_and_conversion_with_defaults<br> |
| `tracking_specs`<br><br>*[list<ConversionActionQuery>](https://developers.facebook.com/docs/marketing-api/reference/conversion-action-query)* | tracking_specs<br> |
| `updated_time`<br><br>*datetime* | updated_time<br> |

##### Edges

| Edge | Description |
| --- | --- |
| [`adcreatives`](https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/adcreatives)<br><br>*Edge<AdCreative>* | adcreatives<br> |
| [`adrules_governed`](https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/adrules_governed)<br><br>*Edge<AdRule>* | adrules_governed<br> |
| [`copies`](https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/copies)<br><br>*Edge<Adgroup>* | copies<br> |
| [`insights`](https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/insights)<br><br>*Edge<AdsInsights>* | insights<br> |
| [`leads`](https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/leads)<br><br>*Edge<UserLeadGenInfo>* | leads<br> |
| [`previews`](https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/previews)<br><br>*Edge<AdPreview>* | previews<br> |
| [`targetingsentencelines`](https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/targetingsentencelines)<br><br>*Edge<TargetingSentenceLine>* | targetingsentencelines<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 613 | Calls to this api have exceeded the rate limit. |
| 190 | Invalid OAuth 2.0 Access Token |
| 104 | Incorrect signature |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |
| 2500 | Error parsing graph query |
| 3018 | The start date of the time range cannot be beyond 37 months from the current date |
| 200 | Permissions error |
| 270 | This Ads API request is not allowed for apps with development access level (Development access is by default for all apps, please request for upgrade). Make sure that the access token belongs to a user that is both admin of the app and admin of the ad account |

### Creating

Before you create an ad, you need an existing [ad set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign) and [ad creative](https://developers.facebook.com/docs/reference/ads-api/adcreative). You can create ads synchronously and asynchronously.

**New ads are in pending state and do not run until Facebook approves or rejects them**. After we approve an ad it runs. If you do not want an ad to automatically run after approval, create it and set its ad set to `paused` (see [ad set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign)). Run the [ad set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign) when you are ready.

**Success:** Due to iOS 14.5 changes, [Deferred Deep Linking](https://developers.facebook.com/docs/app-ads/deep-linking#deferred-deep-linking) is no longer available for [SKAdsNetwork Campaigns](https://developers.facebook.com/docs/audience-network/guides/SKAdNetwork).

#### Synchronous Creation {#syncadcreation}

Creates one ad at a time:

```html
curl -X POST \
  -F 'name="My Ad"' \
  -F 'adset_id="<AD_SET_ID>"' \
  -F 'creative={
       "creative_id": "<CREATIVE_ID>"
     }' \
  -F 'status="PAUSED"' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v27.0/act_<AD_ACCOUNT_ID>/ads
```

#### Asynchronous Creation {#asyncadcreation}

Create multiple ads at a time asynchronously. Receive a notification when all the ads in the request exist. Make an `HTTP POST` to: `https://graph.facebook.com/{API_VERSION}/act_{AD_ACCOUNT_ID}/asyncadrequestsets`

Use these fields:

| Field | Description |
| --- | --- |
| **name**<br><br>type: string | Required.  <br><br>Name of ad set for newly created ads. |
| **ad_specs**<br><br>type: array of ad specs | Required.<br><br>Ads can be created for different ad sets inside the current ad account. To use images in ad creative, provide `image_hash` in ad spec after you upload the image at `https://graph.facebook.com/{API_VERSION}/act_{AD_ACCOUNT_ID}/adimages`.  <br>`image_file` inside ad_specs. |
| **notification_uri**<br><br>type: string | Optional.<br><br>Async job completed. This URI notifies the caller with a `POST` and ad set id. |
| **notification_mode**<br><br>type: string | Optional.<br><br>Notification mode:  <br>`OFF` – No notification  <br>`ON_COMPLETE` – Send notification when all ads for set created. |

For information on asynchronous request sets, see [Asynchronous Requests](https://developers.facebook.com/documentation/ads-commerce/marketing-api/asyncrequests).

#### Limits {#limits}

These are the maximum number of ads per object:

| Limit | Value |
| --- | --- |
| Ads in regular ad account | 5000 non-deleted ads |
| Ads in bulk ad account | 50000 non-deleted ads |
| Ads in an ad set | 50 non-deleted ads |
| Archived ads in an ad account | 100,000 archived ads |

#### Examples

Download details for an ad:

```html
curl -X POST \
  -F 'name="My AdGroup with Redownload"' \
  -F 'adset_id="<AD_SET_ID>"' \
  -F 'creative={
       "creative_id": "<CREATIVE_ID>"
     }' \
  -F 'redownload=1' \
  -F 'status="PAUSED"' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v27.0/act_<AD_ACCOUNT_ID>/ads
```

#### /{ad_id}/copies
You can make a POST request to *copies* edge from the following paths:

- [/{ad_id}/copies](https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/copies)

When posting to this edge, an [Ad](https://developers.facebook.com/docs/graph-api/reference/adgroup) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `adset_id`<br><br>*numeric string or integer* | Single ID of an adset object to make the parent of the copy. Ignore if you want to keep the copy under the original adset parent.<br> |
| `creative_parameters`<br><br>*AdCreative* | Creative inputs which will be used to construct the creative in the new ad.  Overwrites happen at the top level.  If no input is provided, the new ad will be created with an identical ad creative.  If some input is provided, those parameters will be assigned to the ad creative created by this API call.<br><br><br>Accepts all ad creative parameters as specified in /documentation/ads-commerce/marketing-api/reference/ad-account/adcreatives<br><br>**[supports emoji]**<br> |
| `rename_options`<br><br>*JSON or object-like arrays* | Rename options<br><br><br>`rename_strategy` *enum {DEEP_RENAME, ONLY_TOP_LEVEL_RENAME, NO_RENAME}*<br><br>**Default value: **`ONLY_TOP_LEVEL_RENAME`<br>`DEEP_RENAME`: will change this object's name and children's names in the copied object. `ONLY_TOP_LEVEL_RENAME`: will change the this object's name but won't change the children's name in the copied object. `NO_RENAME`: will change no name in the copied object<br><br><br>`rename_prefix` *string*<br>A prefix to copy names. Defaults to null if not provided.<br><br><br>`rename_suffix` *string*<br>A suffix to copy names. Defaults to null if not provided and appends a localized string of `- Copy` based on the ad account locale.<br> |
| `status_option`<br><br>*enum {ACTIVE, PAUSED, INHERITED_FROM_SOURCE}* | **Default value: **`PAUSED`<br>`ACTIVE`: the copied ad will have active status. `PAUSED`: the copied ad will have paused status. `INHERITED_FROM_SOURCE`: the copied ad will have the parent status.<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *copied_ad_id* in the return type.

```
Struct  {
copied_ad_id: numeric string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 200 | Permissions error |

#### /act_{ad_account_id}/ads
You can make a POST request to *ads* edge from the following paths:

- [/act_{ad_account_id}/ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/ads)

When posting to this edge, an [Ad](https://developers.facebook.com/docs/graph-api/reference/adgroup) will be created.

##### Example

#### HTTP
```
POST /v25.0/act_<AD_ACCOUNT_ID>/ads HTTP/1.1
Host: graph.facebook.com

name=My+Ad&adset_id=%3CAD_SET_ID%3E&creative=%7B%22creative_id%22%3A%22%3CCREATIVE_ID%3E%22%7D&status=PAUSED
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->post(
    '/act_<AD_ACCOUNT_ID>/ads',
    array (
      'name' => 'My Ad',
      'adset_id' => '<AD_SET_ID>',
      'creative' => '{"creative_id":"<CREATIVE_ID>"}',
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
    "/act_<AD_ACCOUNT_ID>/ads",
    "POST",
    {
        "name": "My Ad",
        "adset_id": "<AD_SET_ID>",
        "creative": "{\"creative_id\":\"<CREATIVE_ID>\"}",
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
params.putString("name", "My Ad");
params.putString("adset_id", "<AD_SET_ID>");
params.putString("creative", "{\"creative_id\":\"<CREATIVE_ID>\"}");
params.putString("status", "PAUSED");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/act_<AD_ACCOUNT_ID>/ads",
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
  @"name": @"My Ad",
  @"adset_id": @"<AD_SET_ID>",
  @"creative": @"{\"creative_id\":\"<CREATIVE_ID>\"}",
  @"status": @"PAUSED",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/act_<AD_ACCOUNT_ID>/ads"
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
  -F 'name="My Ad"' \
  -F 'adset_id="<AD_SET_ID>"' \
  -F 'creative={
       "creative_id": "<CREATIVE_ID>"
     }' \
  -F 'status="PAUSED"' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/ads
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=POST&path=act_%3CAD_ACCOUNT_ID%3E%2Fads%3Fname%3DMy%2BAd%26adset_id%3D%253CAD_SET_ID%253E%26creative%3D%257B%2522creative_id%2522%253A%2522%253CCREATIVE_ID%253E%2522%257D%26status%3DPAUSED&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `ad_schedule_end_time`<br><br>*datetime* | An optional parameter that defines the end time of an individual ad. If no end time is defined, the ad will run on the campaign’s schedule.<br><br><br>This parameter is only available for sales and app promotion campaigns.<br> |
| `ad_schedule_start_time`<br><br>*datetime* | An optional parameter that defines the start time of an individual ad. If no start time is defined, the ad will run on the campaign’s schedule.<br><br><br>This parameter is only available for sales and app promotion campaigns.<br> |
| `adlabels`<br><br>*list<Object>* | Ad labels associated with this ad<br> |
| `adset_id`<br><br>*int64* | The ID of the ad set, required on creation.<br> |
| `adset_spec`<br><br>*Ad set spec* | The ad set spec for this ad. When the spec is provided, adset_id field is not required.<br> |
| `audience_id`<br><br>*string* | The ID of the audience.<br> |
| `bid_amount`<br><br>*integer* | **Deprecated.** We no longer allow setting the `bid_amount` value on an ad. Please set `bid_amount` for the ad set.<br> |
| `conversion_domain`<br><br>*string* | The domain where conversions happen. Required to create or update an ad in a campaign that shares data with a pixel. This field will be auto-populated for existing ads by inferring from destination URLs . Note that this field should contain only the first and second level domains, and not the full URL. For example `facebook.com`.<br> |
| `creative`<br><br>*AdCreative* | This field is required for create. The ID or creative spec of the ad creative to be used by this ad. You can read more about creatives [here](https://developers.facebook.com/docs/marketing-api/adcreative). You may supply the ID within an object as follows:<br><br>`{"creative_id": <CREATIVE_ID>}`<br>or creative spec as follow:<br><br> `{"creative": {\"name\": \"<NAME>\", \"object_story_spec\": <SPEC>}}`<br><br>**[required]**<br><br>**[supports emoji]**<br> |
| `creative_asset_groups_spec`<br><br>*string (CreativeAssetGroupsSpec)* | creative_asset_groups_spec<br><br>**[supports emoji]**<br> |
| `date_format`<br><br>*string* | The format of the date.<br> |
| `display_sequence`<br><br>*int64* | The sequence of the ad within the same campaign<br> |
| `engagement_audience`<br><br>*boolean* | Flag to create a new audience based on users who engage with this ad<br> |
| `execution_options`<br><br>*list<enum{validate_only, synchronous_ad_review, include_recommendations}>* | **Default value: **`Set`<br>An execution setting<br> `validate_only`: when this option is specified, the API call will not perform the mutation but will run through the validation rules against values of each field. <br>`include_recommendations`: this option cannot be used by itself. When this option is used, recommendations  for ad object's configuration will be included. A separate section [recommendations](https://developers.facebook.com/docs/marketing-api/reference/ad-recommendation) will be included in the response, but only if recommendations for this specification exist.<br>`synchronous_ad_review`: this option should not be used by itself. It should always be specified with `validate_only`. When these options are specified, the API call will perform Ads Integrity validations, which include message language checking, image 20% text rule, and so on, as well as the validation logics.<br>If the call passes validation or review, response will be `{"success": true}`. If the call does not pass, an error will be returned with more details. These options can be used to improve any UI to display errors to the user much sooner, e.g. as soon as a new value is typed into any field corresponding to this ad object, rather than at the upload/save stage, or after review.<br> |
| `include_demolink_hashes`<br><br>*boolean* | Include the demolink hashes.<br> |
| `name`<br><br>*string* | Name of the ad.<br><br>**[required]**<br><br>**[supports emoji]**<br> |
| `priority`<br><br>*int64* | Priority<br> |
| `source_ad_id`<br><br>*numeric string or integer* | ID of the source Ad, if applicable.<br> |
| `status`<br><br>*enum{ACTIVE, PAUSED, DELETED, ARCHIVED}* | Only `ACTIVE` and `PAUSED` are valid during creation. Other statuses<br>can be used for update. When an ad is created, it will first go through<br>ad review, and will have the ad status `PENDING_REVIEW` before it<br>finishes review and reverts back to your selected status of `ACTIVE`<br>or `PAUSED`. During testing, it is recommended to set ads to a `PAUSED`<br>status so as to not incur accidental spend.<br> |
| `tracking_specs`<br><br>*Object* | With Tracking Specs, you log actions taken by people on your ad. See [Tracking and Conversion Specs](https://developers.facebook.com/documentation/ads-commerce/marketing-api/tracking-specs).<br> |

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
| 613 | Calls to this api have exceeded the rate limit. |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 194 | Missing at least one required parameter |
| 500 | Message contains banned content |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |
| 190 | Invalid OAuth 2.0 Access Token |
| 105 | The number of parameters exceeded the maximum for this operation |

### Updating

Update certain fields:

```html
curl -X POST \
  -F 'name="My New Ad"' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v27.0/<AD_ID>/
```

#### Limitations

- Only update fields that were used during ad creation can be updated.

- `adset_id` and `social_prefs` can not be updated.

- Ads with `status = ARCHIVED` have only two mutable fields: `name` and `status`. You can only change the latter to `DELETED`.

- Ads with `status = DELETED` only can have `name` changed.

- Ads in an ad set with `creative_sequence` set cannot be changed to `PAUSED`, `ARCHIVED`, or `DELETED`.

- Trying to duplicate existing objective campaigns to use the new objective values (`OUTCOME_APP_PROMOTION`, `OUTCOME_AWARENESS`, `OUTCOME_ENGAGEMENT`, `OUTCOME_LEADS`, `OUTCOME_SALES`, `OUTCOME_TRAFFIC`) may throw an error.

#### Examples

Update the name:

```html
curl -X POST \
  -F 'name="My New Ad"' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v27.0/<AD_ID>/
```

Update the name and download ad information:

```html
curl -X POST \
  -F 'adgroup_status="PAUSED"' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v27.0/<AD_ID>/
```

Update the status:

```html
curl -X POST \
  -F 'adgroup_status="PAUSED"' \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v27.0/<AD_ID>/
```

You can't perform this operation on this endpoint.

### Deleting

##### Deleting an ad

You can remove values for any optional fields by [updating](#Updating) the value to empty. You cannot delete ads in ad set with `creative_sequence` settings.

```html
curl -X DELETE \
  -F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v27.0/<AD_ID>/
```

#### /{ad_id}
You can delete an [Ad](https://developers.facebook.com/docs/graph-api/reference/adgroup) by making a DELETE request to [/{ad_id}](https://developers.facebook.com/docs/graph-api/reference/adgroup).

##### Example

#### HTTP
```
DELETE /v25.0/<ADGROUP_ID>/ HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->delete(
    '/<ADGROUP_ID>/',
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
    "/<ADGROUP_ID>/",
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
    "/<ADGROUP_ID>/",
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
                               initWithGraphPath:@"/<ADGROUP_ID>/"
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
  https://graph.facebook.com/v25.0/<ADGROUP_ID>/
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=DELETE&path=%3CADGROUP_ID%3E%2F&version=v25.0)

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
| 100 | Invalid parameter |
| 200 | Permissions error |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/ad_studies.md -->

## Ad Ad Studies

### Reading

The ad studies containing this ad

##### Example

#### HTTP
```
GET /v25.0/{ad-id}/ad_studies HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-id}/ad_studies',
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
    "/{ad-id}/ad_studies",
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
    "/{ad-id}/ad_studies",
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
                               initWithGraphPath:@"/{ad-id}/ad_studies"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-id%7D%2Fad_studies&version=v25.0)

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

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/adcreatives.md -->

## Ad Creative

Contains content for an ad, including images, videos and so on.

### Reading

##### Example

#### HTTP
```
GET /v25.0/{ad-id}/adcreatives HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-id}/adcreatives',
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
    "/{ad-id}/adcreatives",
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
    "/{ad-id}/adcreatives",
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
                               initWithGraphPath:@"/{ad-id}/adcreatives"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-id%7D%2Fadcreatives&version=v25.0)

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

A list of [AdCreative](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-creative) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 190 | Invalid OAuth 2.0 Access Token |
| 104 | Incorrect signature |
| 2500 | Error parsing graph query |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/addrafts.md -->

## Ad Drafts

### Reading

AdgroupAdDrafts

##### Example

#### HTTP
```
GET /v25.0/{ad-id}/addrafts HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-id}/addrafts',
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
    "/{ad-id}/addrafts",
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
    "/{ad-id}/addrafts",
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
                               initWithGraphPath:@"/{ad-id}/addrafts"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-id%7D%2Faddrafts&version=v25.0)

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/adlabels.md -->

## Ad Adlabels

### Reading

You can't perform this operation on this endpoint.

### Creating

You can't perform this operation on this endpoint.

### Updating

#### /{ad_id}/adlabels
You can update an [AdLabel](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label) by making a POST request to [/{ad_id}/adlabels](https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/adlabels).

##### Parameters

| Parameter | Description |
| --- | --- |
| `adlabels`<br><br>*list<Object>* | Specification of adlabels to be associated with the ad<br><br>**[required]**<br> |
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

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/adrules_governed.md -->

## Ad Adrules Governed

### Reading

Ad rules that govern this ad - by default, this only returns rules that either directly mention the ad by id or indirectly through the set entity_type

##### Example

#### HTTP
```
GET /v25.0/{ad-id}/adrules_governed HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-id}/adrules_governed',
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
    "/{ad-id}/adrules_governed",
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
    "/{ad-id}/adrules_governed",
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
                               initWithGraphPath:@"/{ad-id}/adrules_governed"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-id%7D%2Fadrules_governed&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `pass_evaluation`<br><br>*boolean* | If set, this will further filter the rules to only include those for which the ad would evaluate to the boolean value of this param<br> |

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
| 104 | Incorrect signature |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/copies.md -->

## Ad Copies

**Note:** The Marketing API has it is own rate limiting logic. If you are encountering errors mentioning a reached limit, see [Rate Limiting](https://developers.facebook.com/documentation/ads-commerce/marketing-api/overview/rate-limiting).

### Reading

The copies of this ad.

##### Example

#### HTTP
```
GET /v25.0/{ad-id}/copies HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-id}/copies',
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
    "/{ad-id}/copies",
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
    "/{ad-id}/copies",
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
                               initWithGraphPath:@"/{ad-id}/copies"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-id%7D%2Fcopies&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `date_preset`<br><br>*enum{today, yesterday, this_month, last_month, this_quarter, maximum, data_maximum, last_3d, last_7d, last_14d, last_28d, last_30d, last_90d, last_week_mon_sun, last_week_sun_sat, last_quarter, last_year, this_week_mon_today, this_week_sun_today, this_year}* | Preset date range used to aggregate insights metrics<br> |
| `effective_status`<br><br>*list<string>* | Filter Ads by effective status<br> |
| `time_range`<br><br>*{'since':YYYY-MM-DD,'until':YYYY-MM-DD}* | Time range used to aggregate insights metrics<br><br><br>`since` *datetime*<br>A date in the format of "YYYY-MM-DD", which means from the beginning midnight of that day.<br><br><br>`until` *datetime*<br>A date in the format of "YYYY-MM-DD", which means to the beginning midnight of the following day.<br> |
| `updated_since`<br><br>*integer* | Filter ads by updated since time<br> |

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
| 104 | Incorrect signature |

### Creating

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

#### Creative Parameters

When making a copy of an ad, you may overwrite fields on the creative spec by using the `creative_parameters` argument. Currently, this supports overwriting the API spec at the top-level parameter level, i.e. when `creative_parameter` supplied, the new creative will use all of the newly provided value for any valid parameter.  Otherwise, the values from the source ad’s creative will be used.

Find out more about the available fields in our [documentation for ad creatives](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/adcreatives).

##### Creative spec overwrite example

Original creative

```
{
  "body": "original ad body",
  "degrees_of_freedom_spec": {
    "creative_features_spec": {
      "text_optimizations": {
        "enroll_status": "OPT_IN"
      },
      "inline_comment": {
        "enroll_status": "OPT_IN"
      }
    }
  },
  "image_url": "https://example.com/my-image-url",
  "name": "original ad name",
  "title": "original ad body"
}
```

Supplied input for copy operation

```
{
  "degrees_of_freedom_spec": {
    "creative_features_spec": {
      "text_optimizations": {
        "enroll_status": "OPT_IN"
      },
      "image_touchups": {
        "enroll_status": "OPT_IN"
      }
    }
  },
  "image_url": "https://example.com/my–other-image-url",
  "url_tags": "source=fb_ad"
}
```

Resulting creative

```
{
  "body": "original ad body",
  "degrees_of_freedom_spec": {
    "creative_features_spec": {
      "text_optimizations": {
        "enroll_status": "OPT_IN"
      },
      "image_touchups": {
        "enroll_status": "OPT_IN"
      }
    }
  },
  "image_url": "https://example.com/my–other-image-url",
  "name": "original ad name",
  "title": "original ad body",
  "url_tags": "source=fb_ad"
}
```

Note the following:

- `body`, `name`, `title` are not supplied in the input spec, so they are carried over from the original

- `url_tags` is defined in the input spec, but not in the original spec.  It is defined in the new spec

- `image_url `is defined in both.  The input value is used in the new spec.

- `degrees_of_freedom_spec` defines opt-ins for `text_optimizations` and `inline_comment` in the original spec, and only `text_optimizations` and `image_touchups` in the new spec.  The input `degrees_of_freedom_spec` completely overrides the old one, and previously defined sub-fields are not used.

#### /{ad_id}/copies
You can make a POST request to *copies* edge from the following paths:

- [/{ad_id}/copies](https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/copies)

When posting to this edge, an [Ad](https://developers.facebook.com/docs/graph-api/reference/adgroup) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `adset_id`<br><br>*numeric string or integer* | Single ID of an adset object to make the parent of the copy. Ignore if you want to keep the copy under the original adset parent.<br> |
| `creative_parameters`<br><br>*AdCreative* | Creative inputs which will be used to construct the creative in the new ad.  Overwrites happen at the top level.  If no input is provided, the new ad will be created with an identical ad creative.  If some input is provided, those parameters will be assigned to the ad creative created by this API call.<br><br><br>Accepts all ad creative parameters as specified in /documentation/ads-commerce/marketing-api/reference/ad-account/adcreatives<br><br>**[supports emoji]**<br> |
| `rename_options`<br><br>*JSON or object-like arrays* | Rename options<br><br><br>`rename_strategy` *enum {DEEP_RENAME, ONLY_TOP_LEVEL_RENAME, NO_RENAME}*<br><br>**Default value: **`ONLY_TOP_LEVEL_RENAME`<br>`DEEP_RENAME`: will change this object's name and children's names in the copied object. `ONLY_TOP_LEVEL_RENAME`: will change the this object's name but won't change the children's name in the copied object. `NO_RENAME`: will change no name in the copied object<br><br><br>`rename_prefix` *string*<br>A prefix to copy names. Defaults to null if not provided.<br><br><br>`rename_suffix` *string*<br>A suffix to copy names. Defaults to null if not provided and appends a localized string of `- Copy` based on the ad account locale.<br> |
| `status_option`<br><br>*enum {ACTIVE, PAUSED, INHERITED_FROM_SOURCE}* | **Default value: **`PAUSED`<br>`ACTIVE`: the copied ad will have active status. `PAUSED`: the copied ad will have paused status. `INHERITED_FROM_SOURCE`: the copied ad will have the parent status.<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *copied_ad_id* in the return type.

```
Struct  {
copied_ad_id: numeric string,
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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/facebook_feedback.md -->

## Ad Facebook Feedback

### Reading

Facebook Feedback for an Ad. It returns feedback objects with a preview link and a list of related comments.

##### Example

#### HTTP
```
GET /v25.0/{ad-id}/facebook_feedback HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-id}/facebook_feedback',
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
    "/{ad-id}/facebook_feedback",
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
    "/{ad-id}/facebook_feedback",
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
                               initWithGraphPath:@"/{ad-id}/facebook_feedback"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-id%7D%2Ffacebook_feedback&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `dynamic_post`<br><br>*numeric string* | A dynamically generated Post ID, used for Dynamic Ad Creatives.<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdgroupFacebookFeedback nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/insights.md -->

## Ad Insights

Provides a single, consistent interface to retrieve an ad's statistics. See [Insights](https://developers.facebook.com/documentation/ads-commerce/marketing-api/insights).

The Ad Insights API can return several metrics which are estimated or in-development. In some cases a metric may be both estimated and in-development.

- **Estimated** - Provide directional insights for outcomes that are hard to precisely quantify. They may evolve as we gather more data. See [Ads Help Center, Estimated metrics](https://www.facebook.com/business/help/181058782494426?helpref=faq_content#estimated).

- **In Development** - Still being tested and may change as we improve our methodologies. We encourage you to use it for directional guidance, but use caution when using it for historical comparisons or strategic planning. See [Ads Help Center, In development metrics](https://www.facebook.com/business/help/181058782494426?helpref=faq_content#indevelopment).

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
| `mobile_app_purchase_roas`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The total return on ad spend (ROAS) from mobile app purchases. This is based on the value that you assigned when you set up the app event.<br> |
| `multi_event_conversion_attribution_setting`<br><br>*string* | multi_event_conversion_attribution_setting<br> |
| `newsfeed_avg_position`<br><br>*numeric string* | The average position where your ad was inserted into news feeds on mobile and desktop. Position 1 is the one at the top of the feed.<br> |
| `newsfeed_clicks`<br><br>*numeric string* | The total number of clicks your ad received in news feed, on mobile and desktop.<br> |
| `newsfeed_impressions`<br><br>*numeric string* | The total number of times your ad was inserted into news feeds, on mobile and desktop.<br> |
| `objective`<br><br>*string* | The objective reflecting the goal you want to achieve with your advertising. It may be different from the selected objective of the campaign in some cases.<br> |
| `objective_result_rate`<br><br>*list<AdsInsightsResult>* | The number of objective results you received divided by the number of impressions.<br> |
| `objective_results`<br><br>*list<AdsInsightsResult>* | The number of responses you wanted to achieve from your ad campaign, based on your selected objective. For example, if you selected promote your Page as your campaign objective, this metric shows the number of Page likes that happened as a result of your ads. Also known as results.<br> |
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
| 3018 | The start date of the time range cannot be beyond 37 months from the current date |
| 2642 | Invalid cursors values |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |
| 190 | Invalid OAuth 2.0 Access Token |
| 200 | Permissions error |
| 104 | Incorrect signature |
| 613 | Calls to this api have exceeded the rate limit. |
| 2500 | Error parsing graph query |

### Creating

#### /{ad_id}/insights
You can make a POST request to *insights* edge from the following paths:

- [/{ad_id}/insights](https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/insights)

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
| 190 | Invalid OAuth 2.0 Access Token |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/leads.md -->

## Ad Leads

Any leads associated with with a Lead Ad. Since these leads belong to a business' Page, not the ad itself, you need to be a Page Admin to access these. Alternately you can have permissions granted to you by the Page Admin. See [Retrieving Leads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/lead-ads/retrieving).

### Reading

GraphAdgroupLeadsEdge

##### Example

#### HTTP
```
GET /v25.0/{adgroup-id}/leads HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{adgroup-id}/leads',
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
    "/{adgroup-id}/leads",
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
    "/{adgroup-id}/leads",
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
                               initWithGraphPath:@"/{adgroup-id}/leads"
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
  https://graph.facebook.com/v25.0/{adgroup-id}/leads
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Badgroup-id%7D%2Fleads&version=v25.0)

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

A list of [UserLeadGenInfo](https://developers.facebook.com/docs/marketing-api/reference/user-lead-gen-info) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |
| 104 | Incorrect signature |

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/previews.md -->

## Ad Preview

Preview your ad.

### Limitations

Only certain combinations of creatives and `ad_format` are supported:

- Link ad not connected to a page: `RIGHT_COLUMN_STANDARD`

- Page like ad: `RIGHT_COLUMN_STANDARD`, `DESKTOP_FEED_STANDARD`, `MOBILE_FEED_STANDARD`

- Event ad: `RIGHT_COLUMN_STANDARD`

- Page like ad: `RIGHT_COLUMN_STANDARD`

- Page post ad: `RIGHT_COLUMN_STANDARD`, `DESKTOP_FEED_STANDARD`, `MOBILE_FEED_STANDARD`, `INSTAGRAM_STANDARD`

- Desktop app ad: `DESKTOP_FEED_STANDARD`

- Mobile app install: `MOBILE_FEED_STANDARD`, `INSTAGRAM_STANDARD`, `MOBILE_BANNER`, `MOBILE_INTERSTITIAL`, `FACEBOOK_STORY_MOBILE`

If you use Page Post with a link to an app on the Google Play Store or on the Apple App Store, we override and import these fields:

- the `name` parameter of the Page Post will be overwritten with the name of the app from the Play Store/App Store.

- the thumbnail icon of the app associated with the Page Post will be imported from the Play Store/App Store.

`FACEBOOK_STORY_MOBILE` only supports single video and single image.

### Reading

Preview of the ad.

##### Example

#### HTTP
```
GET /v25.0/{ad-id}/previews HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-id}/previews',
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
    "/{ad-id}/previews",
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
    "/{ad-id}/previews",
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
                               initWithGraphPath:@"/{ad-id}/previews"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-id%7D%2Fpreviews&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `ad_format`<br><br>*enum{AUDIENCE_NETWORK_INSTREAM_VIDEO, AUDIENCE_NETWORK_INSTREAM_VIDEO_MOBILE, AUDIENCE_NETWORK_OUTSTREAM_VIDEO, AUDIENCE_NETWORK_REWARDED_VIDEO, BIZ_DISCO_FEED_MOBILE, DESKTOP_FEED_STANDARD, FACEBOOK_IFU_REELS_MOBILE, FACEBOOK_PROFILE_FEED_DESKTOP, FACEBOOK_PROFILE_FEED_MOBILE, FACEBOOK_PROFILE_REELS_MOBILE, FACEBOOK_REELS_BANNER, FACEBOOK_REELS_BANNER_DESKTOP, FACEBOOK_REELS_BANNER_FEED_ANDROID, FACEBOOK_REELS_BANNER_FEED_ANDROID_LARGE, FACEBOOK_REELS_BANNER_FULLSCREEN_IOS, FACEBOOK_REELS_BANNER_FULLSCREEN_MOBILE, FACEBOOK_REELS_MOBILE, FACEBOOK_REELS_POSTLOOP, FACEBOOK_REELS_POSTLOOP_FEED, FACEBOOK_REELS_SIMILAR_PRODUCTS_MOBILE, FACEBOOK_REELS_STICKER, FACEBOOK_STORY_MOBILE, FACEBOOK_STORY_STICKER_MOBILE, INSTAGRAM_EXPLORE_CONTEXTUAL, INSTAGRAM_EXPLORE_GRID_HOME, INSTAGRAM_EXPLORE_IMMERSIVE, INSTAGRAM_FEED_WEB, INSTAGRAM_FEED_WEB_M_SITE, INSTAGRAM_LEAD_GEN_MULTI_SUBMIT_ADS, INSTAGRAM_PROFILE_FEED, INSTAGRAM_PROFILE_REELS, INSTAGRAM_REELS, INSTAGRAM_REELS_OVERLAY, INSTAGRAM_REELS_WEB, INSTAGRAM_REELS_WEB_M_SITE, INSTAGRAM_SEARCH_CHAIN, INSTAGRAM_SEARCH_GRID, INSTAGRAM_STANDARD, INSTAGRAM_STORY, INSTAGRAM_STORY_EFFECT_TRAY, INSTAGRAM_STORY_WEB, INSTAGRAM_STORY_WEB_M_SITE, INSTANT_ARTICLE_RECIRCULATION_AD, INSTANT_ARTICLE_STANDARD, INSTREAM_BANNER_DESKTOP, INSTREAM_BANNER_FEED_IOS, INSTREAM_BANNER_FULLSCREEN_IOS, INSTREAM_BANNER_FULLSCREEN_MOBILE, INSTREAM_BANNER_IMMERSIVE_MOBILE, INSTREAM_BANNER_MOBILE, INSTREAM_VIDEO_DESKTOP, INSTREAM_VIDEO_FULLSCREEN_IOS, INSTREAM_VIDEO_FULLSCREEN_MOBILE, INSTREAM_VIDEO_IMAGE, INSTREAM_VIDEO_IMMERSIVE_MOBILE, INSTREAM_VIDEO_MOBILE, JOB_BROWSER_DESKTOP, JOB_BROWSER_MOBILE, MARKETPLACE_MOBILE, MESSENGER_MOBILE_INBOX_MEDIA, MESSENGER_MOBILE_STORY_MEDIA, MOBILE_BANNER, MOBILE_FEED_BASIC, MOBILE_FEED_STANDARD, MOBILE_FULLWIDTH, MOBILE_INTERSTITIAL, MOBILE_MEDIUM_RECTANGLE, MOBILE_NATIVE, RIGHT_COLUMN_STANDARD, SUGGESTED_VIDEO_DESKTOP, SUGGESTED_VIDEO_FULLSCREEN_MOBILE, SUGGESTED_VIDEO_IMMERSIVE_MOBILE, SUGGESTED_VIDEO_MOBILE, WATCH_FEED_HOME, WATCH_FEED_MOBILE, WHATSAPP_STATUS_MEDIA}* | Use this to select what placement on Facebook the ad preview should be for. The API returns an iframe, which is only valid for 24 hours.<br><br>Ad formats for Facebook: `DESKTOP_FEED_STANDARD`, `FACEBOOK_STORY_MOBILE`, `INSTANT_ARTICLE_STANDARD`, `INSTREAM_VIDEO_DESKTOP`, `INSTREAM_VIDEO_MOBILE`, `MARKETPLACE_DESKTOP`,`MARKETPLACE_MOBILE`, `MOBILE_FEED_BASIC`, `MOBILE_FEED_STANDARD`, `RIGHT_COLUMN_STANDARD`, `SUGGESTED_VIDEO_DESKTOP`, `SUGGESTED_VIDEO_MOBILE`, `WATCH_FEED_MOBILE`, `FACEBOOK_REELS_BANNER`, `FACEBOOK_REELS_BANNER_DESKTOP`, `FACEBOOK_REELS_MOBILE`, `FACEBOOK_REELS_POSTLOOP`, `FACEBOOK_REELS_STICKER`, `FACEBOOK_STORY_STICKER_MOBILE`, `WATCH_FEED_HOME`.<br><br>Ad formats for Instagram: `INSTAGRAM_STANDARD`, `INSTAGRAM_STORY`, `INSTAGRAM_EXPLORE_CONTEXTUAL`, `INSTAGRAM_EXPLORE_IMMERSIVE`, `INSTAGRAM_EXPLORE_GRID_HOME`, `INSTAGRAM_FEED_WEB`, `INSTAGRAM_FEED_WEB_M_SITE`, `INSTAGRAM_PROFILE_FEED`, `INSTAGRAM_REELS`, `INSTAGRAM_REELS_OVERLAY`, `INSTAGRAM_SEARCH_CHAIN`, `INSTAGRAM_SEARCH_GRID`, `INSTAGRAM_STORY_CAMERA_TRAY`, `INSTAGRAM_STORY_WEB`, `INSTAGRAM_STORY_WEB_M_SITE`. [Learn more about Instagram placement options](https://developers.facebook.com/documentation/ads-commerce/instagram/ads-api/guides/carousel-ads#adpreview).<br><br>Ad formats for Messenger: `MESSENGER_MOBILE_INBOX_MEDIA`, `MESSENGER_MOBILE_STORY_MEDIA`.<br><br>Ad formats for Audience Network: `AUDIENCE_NETWORK_INSTREAM_VIDEO`, `AUDIENCE_NETWORK_INSTREAM_VIDEO_MOBILE`, `AUDIENCE_NETWORK_OUTSTREAM_VIDEO`, `AUDIENCE_NETWORK_REWARDED_VIDEO`, `MOBILE_BANNER`, `MOBILE_FULLWIDTH`, `MOBILE_INTERSTITIAL`, `MOBILE_MEDIUM_RECTANGLE`, `MOBILE_NATIVE`.<br><br>**[required]**<br> |
| `dynamic_asset_label`<br><br>*string* | Provide a label for rendering specific variation of an asset customization ad<br> |
| `dynamic_creative_spec`<br><br>*Object* | Dynamic creative spec for dynamic ads.<br><br>**[supports emoji]**<br> |
| `dynamic_customization`<br><br>*Object* | For dynamic ads in multiple languages, specify the customization to be applied to the ad<br> |
| `end_date`<br><br>*datetime* | Provide an end date for trip's tag parameters in the creative. See [Template Tags](https://developers.facebook.com/documentation/ads-commerce/marketing-api/flight-ads/template-tags)<br> |
| `height`<br><br>*int64* | Custom height of the resulting iframe, recommended at least 280 x 280 for the large right hand size height.<br>Note: the parameter affects only the size of the iframe containing the preview object. It has no affect on the actual size of the previewed ad.<br> |
| `place_page_id`<br><br>*Page ID* | Place page ID to use when rendering a dynamic local ad preview<br> |
| `post`<br><br>*Object* | Specs for a page post. This field is used when the creative field contains only a Page id as `object_id` in it. Not supported for `ad_format = RIGHT_COLUMN_STANDARD`<br><br><br>`link` *URL*<br>Destination URL of the ad<br><br>**[required]**<br><br><br>`message` *UTF-8 string*<br>Post message<br><br>**[supports emoji]**<br><br><br>`picture` *URL*<br>Image URL<br><br><br>`name` *UTF-8 encoded string*<br>Post name<br><br><br>`caption` *UTF-8 encoded string*<br>Post caption<br><br><br>`description` *UTF-8 encoded string*<br>Post description<br><br><br>`call_to_action` *Object*<br>Call to action<br><br>**[supports emoji]**<br><br><br>`type` *enum{BOOK_TRAVEL, CONTACT_US, DONATE, DONATE_NOW, DOWNLOAD, GET_DIRECTIONS, GO_LIVE, INTERESTED, LEARN_MORE, SEE_DETAILS, LIKE_PAGE, MESSAGE_PAGE, RAISE_MONEY, SAVE, SEND_TIP, SHOP_NOW, SIGN_UP, VIEW_INSTAGRAM_PROFILE, INSTAGRAM_MESSAGE, LOYALTY_LEARN_MORE, PURCHASE_GIFT_CARDS, PAY_TO_ACCESS, SEE_MORE, TRY_IN_CAMERA, WHATSAPP_LINK, GET_IN_TOUCH, TRY_NOW, ASK_A_QUESTION, START_A_CHAT, CHAT_NOW, ASK_US, CHAT_WITH_US, BOOK_NOW, CHECK_AVAILABILITY, ORDER_NOW, WHATSAPP_MESSAGE, GET_MOBILE_APP, INSTALL_MOBILE_APP, USE_MOBILE_APP, INSTALL_APP, USE_APP, PLAY_GAME, TRY_DEMO, WATCH_VIDEO, WATCH_MORE, OPEN_LINK, NO_BUTTON, LISTEN_MUSIC, MOBILE_DOWNLOAD, GET_OFFER, GET_OFFER_VIEW, BUY_NOW, BUY_TICKETS, UPDATE_APP, BET_NOW, ADD_TO_CART, SELL_NOW, GET_SHOWTIMES, LISTEN_NOW, GET_EVENT_TICKETS, REMIND_ME, SEARCH_MORE, PRE_REGISTER, SWIPE_UP_PRODUCT, SWIPE_UP_SHOP, PLAY_GAME_ON_FACEBOOK, VISIT_WORLD, OPEN_INSTANT_APP, JOIN_GROUP, GET_PROMOTIONS, SEND_UPDATES, INQUIRE_NOW, VISIT_PROFILE, CHAT_ON_WHATSAPP, EXPLORE_MORE, CONFIRM, JOIN_CHANNEL, MAKE_AN_APPOINTMENT, ASK_ABOUT_SERVICES, BOOK_A_CONSULTATION, GET_A_QUOTE, BUY_VIA_MESSAGE, ASK_FOR_MORE_INFO, VIEW_PRODUCT, VIEW_CHANNEL, WATCH_LIVE_VIDEO, JOIN_LIVE_VIDEO, IMAGINE, CALL, MISSED_CALL, CALL_NOW, CALL_ME, APPLY_NOW, BUY, GET_QUOTE, SUBSCRIBE, RECORD_NOW, VOTE_NOW, GIVE_FREE_RIDES, REGISTER_NOW, OPEN_MESSENGER_EXT, EVENT_RSVP, CIVIC_ACTION, SEND_INVITES, REFER_FRIENDS, REQUEST_TIME, SEE_MENU, SEARCH, TRY_IT, TRY_ON, LINK_CARD, DIAL_CODE, FIND_YOUR_GROUPS, START_ORDER}*<br>The type of the action. Not all types can be used for all<br>ads. Check<br>[Ads Product Guide](https://www.facebook.com/business/ads-guide)<br>to see which type can be used for based on the `objective` of your<br>campaign.<br><br>**[required]**<br><br><br>`value` *Object*<br><br>**Default value: **`Vec`<br>JSON containing the call to action data.<br><br>**[supports emoji]**<br><br><br>`android_url` *string*<br><br>`ios_url` *string*<br><br>`link` *URL*<br><br>`app_link` *string*<br><br>`page` *numeric string or integer*<br><br>`link_format` *enum {VIDEO_LEAD, VIDEO_LPP, VIDEO_NEKO, VIDEO_NON_LINK, VIDEO_SHOP, WHATSAPP_CATALOG_ATTACHMENT}*<br><br>`application` *numeric string or integer*<br><br>`link_title` *string*<br>**[supports emoji]**<br><br><br>`link_description` *string*<br>**[supports emoji]**<br><br><br>`link_caption` *string*<br><br>`product_link` *string*<br><br>`get_movie_showtimes` *boolean*<br><br>`sponsorship` *Object*<br><br>`link` *URL*<br><br>`image` *URL*<br><br>`video_annotation` *Object*<br><br>`annotations` *list<Object>*<br><br>`start_time_in_sec` *int64*<br><br>`end_time_in_sec` *int64*<br><br>`link` *URL*<br><br>`link_title` *string*<br><br>`link_description` *string*<br><br>`link_caption` *string*<br><br>`image_url` *URL*<br><br>`header_color` *string*<br><br>`logo_url` *URL*<br><br>`post_click_cta_title` *string*<br><br>`post_click_description_title` *string*<br><br>`offer_id` *numeric string or integer*<br><br>`offer_view_id` *numeric string or integer*<br><br>`advanced_data` *Object*<br><br>`offer_id` *numeric string or integer*<br><br>`lead_gen_form_id` *numeric string or integer*<br><br>`referral_id` *numeric string or integer*<br><br>`search_dialog_id` *numeric string or integer*<br><br>`fundraiser_campaign_id` *numeric string or integer*<br><br>`event_id` *numeric string or integer*<br><br>`event_tour_id` *numeric string or integer*<br><br>`app_destination` *enum {MESSENGER, MESSENGER_EXTENSIONS, MESSENGER_GAMES, LINK_CARD, MARKETPLACE, WHATSAPP, INSTAGRAM_DIRECT, INSTAGRAM_LIVE_VIDEO, FACEBOOK_LIVE_VIDEO}*<br><br>`app_destination_page_id` *numeric string or integer*<br><br>`is_canvas_video_transition_enabled` *boolean*<br><br>`whatsapp_number` *string*<br><br>`preinput_text` *string*<br><br>`customized_message_page_cta_text` *string*<br><br>`external_offer_provider_id` *numeric string or integer*<br><br>`origins` *enum {COMPOSER, CAMERA}*<br><br>`object_store_urls` *array<string>*<br><br>`facebook_login_spec` *Object*<br><br>`facebook_login_app_id` *numeric string or integer*<br><br>`offer_type` *enum {NO_OFFER, PERCENTAGE_BASED, AMOUNT_BASED}*<br><br>`offer_pct_call_to_action` *enum {TEN}*<br><br>`offer_amt_call_to_action` *enum {TEN}*<br><br>`product_id` *numeric string or integer*<br><br>`group_id` *numeric string or integer*<br><br>`channel_id` *string*<br><br>`land_on_whatsapp_catalog` *enum{1, 2}*<br><br>`land_on_whatsapp_profile` *string*<br><br>`photo_replacement_preview_fbid` ** |
| `product_item_ids`<br><br>*list<string>* | A list of Product Item IDs to use when rendering a dynamic ad preview.<br> |
| `start_date`<br><br>*datetime* | Provide a start date for trip.* parameters in the creative<br> |
| `width`<br><br>*int64* | Custom width of the resulting iframe, recommended at least 280 x 280 for the large right hand size widths.<br>Note: the parameter affects only the size of the iframe containing the preview object. It has no affect on the actual size of the previewed ad.<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [AdPreview](https://developers.facebook.com/docs/marketing-api/reference/ad-preview) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 190 | Invalid OAuth 2.0 Access Token |
| 104 | Incorrect signature |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/graph-api/reference/adgroup/targetingsentencelines.md -->

## Ad Targeting Sentence Lines

### Reading

##### Example

#### HTTP
```
GET /v25.0/{ad-id}/targetingsentencelines HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-id}/targetingsentencelines',
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
    "/{ad-id}/targetingsentencelines",
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
    "/{ad-id}/targetingsentencelines",
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
                               initWithGraphPath:@"/{ad-id}/targetingsentencelines"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-id%7D%2Ftargetingsentencelines&version=v25.0)

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
