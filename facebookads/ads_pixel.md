# Ads Pixel

> Source: Meta Marketing API reference (34 pages). Fetched 2026-11-18.


---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel.md -->

## Ad Pixel

### Reading

A Facebook pixel is a small piece of JavaScript code that an      advertiser places on every page of their website. This piece of code      provides a set of lightweight functionalities for sending user-specific      events and event-specific custom data to Facebook.      Advertisers can use the Facebook pixel to capture intent      information about how people are using their website.      A single Facebook pixel is added to all pages of a website, and is      then used to create [website custom      audiences](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/website-custom-audiences)

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id} HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}',
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
    "/{ads-pixel-id}",
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
    "/{ads-pixel-id}",
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
                               initWithGraphPath:@"/{ads-pixel-id}"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

This endpoint doesn't have any parameters.

##### Fields

| Field | Description |
| --- | --- |
| `id`<br><br>*numeric string* | ID of the pixel<br><br><br>**[default]**<br> |
| `automatic_matching_fields`<br><br>*list<enum>* | Advanced matching fields which are enabled for automatic advanced matching<br> |
| `can_proxy`<br><br>*bool* | can_proxy<br> |
| `code`<br><br>*string* | Pixel code to be placed on the website<br> |
| `config` This field is only accessible in v13.0 or later.<br><br>*string* | The configuration to use for uploads to this dataset. Format determined by the method of upload (eg. UI or SDK)<br> |
| `creation_time`<br><br>*datetime* | Time at which the pixel was created<br> |
| `creator`<br><br>*[User](https://developers.facebook.com/docs/graph-api/reference/user)* | The user who created this pixel<br> |
| `data_use_setting`<br><br>*enum* | Setting to capture how pixel data should be used<br> |
| `description` This field is only accessible in v13.0 or later.<br><br>*string* | SELF_EXPLANATORY<br> |
| `duplicate_entries` This field is only accessible in v13.0 or later.<br><br>*integer* | Number of duplicate entries for this dataset<br> |
| `enable_auto_assign_to_accounts` This field is only accessible in v13.0 or later.<br><br>*bool* | Whether the dataset is auto assigned and auto tracked for all accounts that the owner business owns<br> |
| `enable_automatic_matching`<br><br>*bool* | Represents whether automatic advanced matching is enabled for the pixel for identity matching purposes<br> |
| `event_stats` This field is only accessible in v13.0 or later.<br><br>*string* | Event stats of this dataset<br> |
| `event_time_max` This field is only accessible in v13.0 or later.<br><br>*integer* | Latest entry of this dataset<br> |
| `event_time_min` This field is only accessible in v13.0 or later.<br><br>*integer* | Earliest entry of this dataset<br> |
| `first_party_cookie_status`<br><br>*enum* | First party cookie status to indicate whether first party cookies can be set for this pixel<br> |
| `has_1p_pixel_event`<br><br>*bool* | whether pixel has sent us 1p signals<br> |
| `is_consolidated_container` This field is only accessible in v13.0 or later.<br><br>*bool* | A boolean value indicating whether this signal container has unified pixel and offline conversion data set<br> |
| `is_created_by_business`<br><br>*bool* | Flag stands for if a pixel is created by business<br> |
| `is_crm`<br><br>*bool* | True if a pixel contains lead gen data source config<br> |
| `is_mta_use` This field is only accessible in v13.0 or later.<br><br>*bool* | Whether the dataset is restricted to MTA only<br> |
| `is_restricted_use` This field is only accessible in v13.0 or later.<br><br>*bool* | Whether the dataset is restricted to Lift only<br> |
| `is_unavailable`<br><br>*bool* | Whether this pixel is unavailable<br> |
| `last_fired_time`<br><br>*datetime* | Time at which the pixel was last fired<br> |
| `last_upload_app` This field is only accessible in v13.0 or later.<br><br>*string* | The app that made the most recent upload<br> |
| `last_upload_app_changed_time` This field is only accessible in v13.0 or later.<br><br>*integer* | Time when the app that made the most recent upload last changed<br> |
| `match_rate_approx` This field is only accessible in v13.0 or later.<br><br>*int32* | Approximate match rate percentage for the entries in this dataset<br> |
| `matched_entries` This field is only accessible in v13.0 or later.<br><br>*integer* | Number of matched entries of this dataset<br> |
| `name`<br><br>*string* | Name of the pixel<br> |
| `owner_business`<br><br>*[Business](https://developers.facebook.com/docs/graph-api/reference/business)* | ID of the business that owns this pixel or null if the pixel has not been claimed by any business yet.<br> |
| `usage` This field is only accessible in v13.0 or later.<br><br>*OfflineConversionDataSetUsage* | Usage info for the dataset<br> |
| `valid_entries` This field is only accessible in v13.0 or later.<br><br>*integer* | Number of valid entries of this dataset<br> |

##### Edges

| Edge | Description |
| --- | --- |
| [`assigned_users`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/assigned_users)<br><br>*Edge<AssignedUser>* | assigned_users<br> |
| [`da_checks`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/da_checks)<br><br>*Edge<DACheck>* | A list of results after running Dynamic Ads checks on this pixel.<br> |
| [`offline_event_uploads`](https://developers.facebook.com/docs/marketing-api/reference/ads-pixel/offline_event_uploads) This field is only accessible in v13.0 or later.<br><br>*Edge<OfflineConversionDataSetUpload>* | The offline uploads associated with this event set<br> |
| [`openbridge_configurations`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/openbridge_configurations)<br><br>*Edge<OpenBridgeConfiguration>* | Get all the openbridge configurations associated to this Pixel<br> |
| [`shared_agencies`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/shared_agencies)<br><br>*Edge<Business>* | Agencies or other businesses this pixel is shared with<br> |
| [`stats`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/stats)<br><br>*Edge<AdsPixelStatsResult>* | Stats data for this pixel<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 100 | Invalid parameter |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 190 | Invalid OAuth 2.0 Access Token |
| 2500 | Error parsing graph query |

### Creating

#### /act_{ad_account_id}/adspixels
You can make a POST request to *adspixels* edge from the following paths:

- [/act_{ad_account_id}/adspixels](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/adspixels)

When posting to this edge, an [AdsPixel](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel) will be created.

##### Example

#### HTTP
```
POST /v25.0/act_<AD_ACCOUNT_ID>/adspixels HTTP/1.1
Host: graph.facebook.com

name=My+WCA+Pixel
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->post(
    '/act_<AD_ACCOUNT_ID>/adspixels',
    array (
      'name' => 'My WCA Pixel',
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
    "/act_<AD_ACCOUNT_ID>/adspixels",
    "POST",
    {
        "name": "My WCA Pixel"
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
params.putString("name", "My WCA Pixel");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/act_<AD_ACCOUNT_ID>/adspixels",
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
  @"name": @"My WCA Pixel",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/act_<AD_ACCOUNT_ID>/adspixels"
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
  -F 'name="My WCA Pixel"' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/adspixels
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=POST&path=act_%3CAD_ACCOUNT_ID%3E%2Fadspixels%3Fname%3DMy%2BWCA%2BPixel&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `name`<br><br>*string* | Name of the pixel<br> |

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
| 6202 | More than one pixel exist for this account |
| 6200 | A pixel already exists for this account |
| 100 | Invalid parameter |
| 200 | Permissions error |

### Updating

#### /{ads_pixel_id}
You can update an [AdsPixel](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel) by making a POST request to [/{ads_pixel_id}](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel).

##### Parameters

| Parameter | Description |
| --- | --- |
| `automatic_matching_fields`<br><br>*array<enum {em, fn, ln, ph, ge, zp, ct, st, country, db, external_id}>* | Advanced matching fields for which automatic advanced matching should be enabled<br> |
| `data_use_setting`<br><br>*enum {EMPTY, ADVERTISING_AND_ANALYTICS, ANALYTICS_ONLY}* | Setting to capture how pixel data should be used<br> |
| `enable_automatic_matching`<br><br>*boolean* | Enable automatic advanced matching for the pixel for identity matching purposes<br> |
| `first_party_cookie_status`<br><br>*enum {EMPTY, FIRST_PARTY_COOKIE_ENABLED, FIRST_PARTY_COOKIE_DISABLED}* | First party cookie status to indicate whether first party cookies can be set for this pixel<br> |
| `name`<br><br>*string* | Name of the pixel<br> |
| `server_events_business_ids`<br><br>*array<numeric string>* | server_events_business_ids<br> |
| `server_events_business_ids_add`<br><br>*array<numeric string>* | server_events_business_ids_add<br> |
| `server_events_business_ids_remove`<br><br>*array<numeric string>* | server_events_business_ids_remove<br> |

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
| 190 | Invalid OAuth 2.0 Access Token |
| 100 | Invalid parameter |

### Deleting

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/ads_signal_diagnostic_issues.md -->

## Ads Pixel Ads Signal Diagnostic Issues

### Reading

AdsPixeladsSignalDiagnosticIssues

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/ads_signal_diagnostic_issues HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/ads_signal_diagnostic_issues',
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
    "/{ads-pixel-id}/ads_signal_diagnostic_issues",
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
    "/{ads-pixel-id}/ads_signal_diagnostic_issues",
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
                               initWithGraphPath:@"/{ads-pixel-id}/ads_signal_diagnostic_issues"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fads_signal_diagnostic_issues&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `ad_account_id`<br><br>*int64* | ad_account_id<br><br>**[required]**<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdsSignalDiagnosticIssue nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/agencies.md -->

## Ads Pixel Agencies

### Reading

AdsPixelAgencies

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/agencies HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/agencies',
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
    "/{ads-pixel-id}/agencies",
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
    "/{ads-pixel-id}/agencies",
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
                               initWithGraphPath:@"/{ads-pixel-id}/agencies"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fagencies&version=v25.0)

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

A list of [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `permitted_roles`<br><br>*list<string>* | permitted_roles<br> |
| `permitted_tasks`<br><br>*list<string>* | permitted_tasks<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | total_count<br><br><br>**[default]**<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

### Deleting

### Reference

Refer to [Pixel Agency Sharing](https://developers.facebook.com/docs/marketing-api/business-asset-management/guides/business-pixel-sharing) guide

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/analytics_entity_user_config.md -->

## Ads Pixel Analytics Entity User Config

### Reading

AnalyticsEntityUserConfig

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/analytics_entity_user_config HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/analytics_entity_user_config',
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
    "/{ads-pixel-id}/analytics_entity_user_config",
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
    "/{ads-pixel-id}/analytics_entity_user_config",
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
                               initWithGraphPath:@"/{ads-pixel-id}/analytics_entity_user_config"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fanalytics_entity_user_config&version=v25.0)

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

A list of AnalyticsEntityUserConfig nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/analytics_funnel_query.md -->

## Ads Pixel Analytics Funnel Query

### Reading

Ad hoc funnel query edge.returns query results on GET or query_ids for submitted queries on POST.

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/analytics_funnel_query HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/analytics_funnel_query',
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
    "/{ads-pixel-id}/analytics_funnel_query",
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
    "/{ads-pixel-id}/analytics_funnel_query",
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
                               initWithGraphPath:@"/{ads-pixel-id}/analytics_funnel_query"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fanalytics_funnel_query&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `query_ids`<br><br>*list<string>* | **Default value: **`Vec`<br>Set of funnel query ids for which results can be requested<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AnalyticsFunnelQueryResult nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/analytics_segments.md -->

## Ads Pixel Analytics Segments

### Reading

Analytics segments for an object

##### Feature Permissions

| Name | Description |
| --- | --- |
| Page Public Content Access | This [feature permission](https://developers.facebook.com/docs/apps/review/feature) may be required. |

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/analytics_segments HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/analytics_segments',
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
    "/{ads-pixel-id}/analytics_segments",
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
    "/{ads-pixel-id}/analytics_segments",
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
                               initWithGraphPath:@"/{ads-pixel-id}/analytics_segments"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fanalytics_segments&version=v25.0)

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

A list of AnalyticsSegment nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/assigned_users.md -->

## Ads Pixel Assigned Users

### Reading

Fetch users that are assigned to the pixel.

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/assigned_users HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/assigned_users',
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
    "/{ads-pixel-id}/assigned_users",
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
    "/{ads-pixel-id}/assigned_users",
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
                               initWithGraphPath:@"/{ads-pixel-id}/assigned_users"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fassigned_users&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `business`<br><br>*numeric string or integer* | business<br><br>**[required]**<br> |

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
| `total_count`<br><br>*unsigned int32* | Total number of business and system users assigned to this pixel<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/audiences.md -->

## Ads Pixel Audiences

### Reading

Pixel Audiences

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/audiences HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/audiences',
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
    "/{ads-pixel-id}/audiences",
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
    "/{ads-pixel-id}/audiences",
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
                               initWithGraphPath:@"/{ads-pixel-id}/audiences"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Faudiences&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `action_source`<br><br>*enum {WEBSITE, PHYSICAL_STORE}* | action_source<br> |
| `ad_account`<br><br>*numeric string* | optional ad account ID to filter on<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [CustomAudience](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience) nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/capability_overrides.md -->

## Ads Pixel Capability Overrides

### Reading

Get all capability overrides for the pixel

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/capability_overrides HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/capability_overrides',
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
    "/{ads-pixel-id}/capability_overrides",
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
    "/{ads-pixel-id}/capability_overrides",
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
                               initWithGraphPath:@"/{ads-pixel-id}/capability_overrides"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fcapability_overrides&version=v25.0)

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

A list of AdsPixelCapabilityOverride nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/cloudbridge_dataset_status.md -->

## Ads Pixel Cloudbridge Dataset Status

### Reading

Endpoint for cloud bridge to fetch capi destination status

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/cloudbridge_dataset_status HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/cloudbridge_dataset_status',
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
    "/{ads-pixel-id}/cloudbridge_dataset_status",
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
    "/{ads-pixel-id}/cloudbridge_dataset_status",
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
                               initWithGraphPath:@"/{ads-pixel-id}/cloudbridge_dataset_status"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fcloudbridge_dataset_status&version=v25.0)

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

A list of CloudbridgeDatasetStatus nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/cpas_events_debugging_info.md -->

## Ads Pixel Cpas Events Debugging Info

### Reading

Debugging info for events within the last days, showing counts per (event_name, diagnostic_name)

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/cpas_events_debugging_info HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/cpas_events_debugging_info',
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
    "/{ads-pixel-id}/cpas_events_debugging_info",
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
    "/{ads-pixel-id}/cpas_events_debugging_info",
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
                               initWithGraphPath:@"/{ads-pixel-id}/cpas_events_debugging_info"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fcpas_events_debugging_info&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `action_source`<br><br>*enum {WEBSITE, PHYSICAL_STORE}* | source of origin of conversions<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of ExternalEventSourceCPASEventsDebuggingInfo nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/customconversions.md -->

## Ads Pixel Customconversions

### Reading

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/customconversions HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/customconversions',
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
    "/{ads-pixel-id}/customconversions",
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
    "/{ads-pixel-id}/customconversions",
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
                               initWithGraphPath:@"/{ads-pixel-id}/customconversions"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fcustomconversions&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `ad_account`<br><br>*numeric string* | optional ad account ID to filter on<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": []
}
```

###### data

A list of [CustomConversion](https://developers.facebook.com/docs/marketing-api/reference/custom-conversion) nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/da_checks.md -->

## Ads Pixel Da Checks

### Reading

Runs Dynamic Ads checks and returns their results.

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/da_checks HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/da_checks',
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
    "/{ads-pixel-id}/da_checks",
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
    "/{ads-pixel-id}/da_checks",
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
                               initWithGraphPath:@"/{ads-pixel-id}/da_checks"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fda_checks&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `checks`<br><br>*list<string>* | **Default value: **`Set`<br>A list of Dynamic Ads checks that will be run. If not specified, all checks will be run. Valid values are: `pixel_missing_param_in_events`, `pixel_decline`<br> |
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
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/domain_control_rule.md -->

## Ads Pixel Domain Control Rule

### Reading

This edge provides read access to the domain control rules for a given pixel.

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/domain_control_rule HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/domain_control_rule',
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
    "/{ads-pixel-id}/domain_control_rule",
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
    "/{ads-pixel-id}/domain_control_rule",
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
                               initWithGraphPath:@"/{ads-pixel-id}/domain_control_rule"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fdomain_control_rule&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `type`<br><br>*enum {BLACKLIST, WHITELIST}* | Type of domain control rule<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdsPixelDomainControlRule nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/domain_last_fired_time.md -->

## Ads Pixel Domain Last Fired Time

### Reading

Edge for querying domain last fired time

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/domain_last_fired_time HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/domain_last_fired_time',
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
    "/{ads-pixel-id}/domain_last_fired_time",
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
    "/{ads-pixel-id}/domain_last_fired_time",
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
                               initWithGraphPath:@"/{ads-pixel-id}/domain_last_fired_time"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fdomain_last_fired_time&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `domain_name_list`<br><br>*array<string>* | Domain name list<br><br>**[required]**<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdsPixelDomainLastFiredTime nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/event_last_fired_time.md -->

## Ads Pixel Event Last Fired Time

### Reading

Edge to read last fired times of pixel events

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/event_last_fired_time HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/event_last_fired_time',
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
    "/{ads-pixel-id}/event_last_fired_time",
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
    "/{ads-pixel-id}/event_last_fired_time",
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
                               initWithGraphPath:@"/{ads-pixel-id}/event_last_fired_time"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fevent_last_fired_time&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `event`<br><br>*string* | The pixel event we want to fetch last fired time for<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdsPixelEventLastFiredTime nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/event_rules.md -->

## Ads Pixel Event Rules

### Reading

Edge to read existing rules under pixel data source.

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/event_rules HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/event_rules',
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
    "/{ads-pixel-id}/event_rules",
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
    "/{ads-pixel-id}/event_rules",
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
                               initWithGraphPath:@"/{ads-pixel-id}/event_rules"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fevent_rules&version=v25.0)

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

A list of CalibratorExistingRule nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/events.md -->

## Ads Pixel Events

### Reading

You can't perform this operation on this endpoint.

### Creating

#### /{ads_pixel_id}/events
You can make a POST request to *events* edge from the following paths:

- [/{ads_pixel_id}/events](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/events)

When posting to this edge, no Graph object will be created.

##### Example

#### HTTP
```
POST /v25.0/<PIXEL_ID>/events HTTP/1.1
Host: graph.facebook.com

data=%5B%7B%22event_name%22%3A%22PageView%22%2C%22event_time%22%3A1778607673%2C%22user_data%22%3A%7B%22fbc%22%3A%22fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890%22%2C%22fbp%22%3A%22fb.1.1558571054389.1098115397%22%2C%22em%22%3A%22309a0a5c3e211326ae75ca18196d301a9bdbd1a882a4d2569511033da23f0abd%22%7D%7D%5D
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->post(
    '/<PIXEL_ID>/events',
    array (
      'data' => '[{"event_name":"PageView","event_time":1778607673,"user_data":{"fbc":"fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890","fbp":"fb.1.1558571054389.1098115397","em":"309a0a5c3e211326ae75ca18196d301a9bdbd1a882a4d2569511033da23f0abd"}}]',
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
    "/<PIXEL_ID>/events",
    "POST",
    {
        "data": "[{\"event_name\":\"PageView\",\"event_time\":1778607673,\"user_data\":{\"fbc\":\"fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890\",\"fbp\":\"fb.1.1558571054389.1098115397\",\"em\":\"309a0a5c3e211326ae75ca18196d301a9bdbd1a882a4d2569511033da23f0abd\"}}]"
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
params.putString("data", "[{\"event_name\":\"PageView\",\"event_time\":1778607673,\"user_data\":{\"fbc\":\"fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890\",\"fbp\":\"fb.1.1558571054389.1098115397\",\"em\":\"309a0a5c3e211326ae75ca18196d301a9bdbd1a882a4d2569511033da23f0abd\"}}]");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/<PIXEL_ID>/events",
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
  @"data": @"[{\"event_name\":\"PageView\",\"event_time\":1778607673,\"user_data\":{\"fbc\":\"fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890\",\"fbp\":\"fb.1.1558571054389.1098115397\",\"em\":\"309a0a5c3e211326ae75ca18196d301a9bdbd1a882a4d2569511033da23f0abd\"}}]",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/<PIXEL_ID>/events"
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
  -F 'data=[
       {
         "event_name": "PageView",
         "event_time": 1778607673,
         "user_data": {
           "fbc": "fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890",
           "fbp": "fb.1.1558571054389.1098115397",
           "em": "309a0a5c3e211326ae75ca18196d301a9bdbd1a882a4d2569511033da23f0abd"
         }
       }
     ]' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/<PIXEL_ID>/events
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=POST&path=%3CPIXEL_ID%3E%2Fevents%3Fdata%3D%255B%257B%2522event_name%2522%253A%2522PageView%2522%252C%2522event_time%2522%253A1778607673%252C%2522user_data%2522%253A%257B%2522fbc%2522%253A%2522fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890%2522%252C%2522fbp%2522%253A%2522fb.1.1558571054389.1098115397%2522%252C%2522em%2522%253A%2522309a0a5c3e211326ae75ca18196d301a9bdbd1a882a4d2569511033da23f0abd%2522%257D%257D%255D&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `data`<br><br>*list<JSON-encoded string>* | data<br><br>**[required]**<br> |
| `platforms`<br><br>*array<JSON object>* | platforms<br><br><br>`name` *string*<br>name<br><br>**[required]**<br><br><br>`type` *string*<br>type<br><br>**[required]**<br><br><br>`version` *string*<br>version<br> |
| `progress`<br><br>*Object* | upload progress for offline events<br><br><br>`start_inclusive` *int64*<br><br>`end_exclusive` *int64* |
| `test_event_code`<br><br>*string* | Code that is used to identify server test events<br> |

##### Return Type

```
Struct  {
events_received: integer,
messages:  List  [string],
fbtrace_id: string,
} Or  Struct  {
applink_class: string,
applink_url: string,
applink_args: string,
is_fb: bool,
is_paid: bool,
account_id: ad account id,
ad_id: numeric string,
ad_objective_name: string,
adgroup_id: numeric string,
adgroup_name: string,
campaign_id: numeric string,
campaign_name: string,
campaign_group_id: numeric string,
campaign_group_name: string,
click_time: timestamp,
is_mobile_data_terms_signed: bool,
is_external: bool,
is_instagram: bool,
is_view_through: bool,
is_modeled: bool,
is_same_ip: bool,
device_model: string,
os_version: string,
view_time: timestamp,
is_playable_ad: bool,
is_aaa_campaign: bool,
creative_id: numeric string,
engagement_type: enum,
trace_id: string,
fbclid: string,
event_id: string,
vertical: string,
sub_vertical: string,
advertiser_region: string,
additional_touchpoints:  List  [ Struct  {
ad_id: numeric string,
adgroup_id: numeric string,
adgroup_name: string,
campaign_id: numeric string,
campaign_name: string,
campaign_group_id: numeric string,
campaign_group_name: string,
account_id: ad account id,
is_view_through: bool,
click_time: timestamp,
view_time: timestamp,
engagement_type: enum,
is_external: bool,
is_instagram: bool,
publisher_platform: string,
is_aaa_campaign: bool,
creative_id: numeric string,
vertical: string,
sub_vertical: string,
advertiser_region: string,
}],
video_completion_percent: float,
dwell_ms: unsigned int32,
publisher_platform: string,
platform_position: string,
auditing_token: string,
hashed_ad_network_publisher_app_id: string,
} Or  Struct  {
success: bool,
} Or  Struct  {
claims:  List  [ Struct  {
is_fb: bool,
ad_objective_name: string,
ad_id: numeric string,
adgroup_id: numeric string,
adgroup_name: string,
campaign_id: numeric string,
campaign_name: string,
campaign_group_id: numeric string,
campaign_group_name: string,
account_id: ad account id,
touchpoint_type: string,
touchpoint_ts: timestamp,
auditing_token: string,
exp_id: integer,
publisher_platform: string,
publisher_placement: string,
device_platform: string,
device_model: string,
event_id: string,
event_name: string,
advertiser_direct_amm_metadata:  Map  {
string: string},
claim_storage_type: string,
is_modeled: bool,
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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/extractors.md -->

## Ads Pixel Extractors

### Reading

Extractors used for grabbing parameters in codeless events

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/extractors HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/extractors',
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
    "/{ads-pixel-id}/extractors",
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
    "/{ads-pixel-id}/extractors",
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
                               initWithGraphPath:@"/{ads-pixel-id}/extractors"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fextractors&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `current_domain`<br><br>*URI* | Filter the extractors by a URI domain<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of SignalsIWLExtractor nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/integration_quality.md -->

## Ads Pixel Integration Quality

### Reading

Conversions API events integration quality of the pixel

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/integration_quality HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/integration_quality',
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
    "/{ads-pixel-id}/integration_quality",
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
    "/{ads-pixel-id}/integration_quality",
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
                               initWithGraphPath:@"/{ads-pixel-id}/integration_quality"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fintegration_quality&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `agent_name`<br><br>*string* | agent_name<br> |
| `time_range`<br><br>*string* | time_range<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdsPixelCAPIIntegrationQuality nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/item_price_stats.md -->

## Ads Pixel Item Price Stats

### Reading

Contains the stats for item price cover

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/item_price_stats HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/item_price_stats',
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
    "/{ads-pixel-id}/item_price_stats",
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
    "/{ads-pixel-id}/item_price_stats",
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
                               initWithGraphPath:@"/{ads-pixel-id}/item_price_stats"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fitem_price_stats&version=v25.0)

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

A list of AdsPixelItemPrice nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/microdata_stats.md -->

## Ads Pixel Microdata Stats

### Reading

AdsPixelMicrodataStats

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/microdata_stats HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/microdata_stats',
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
    "/{ads-pixel-id}/microdata_stats",
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
    "/{ads-pixel-id}/microdata_stats",
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
                               initWithGraphPath:@"/{ads-pixel-id}/microdata_stats"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fmicrodata_stats&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `catalog_id`<br><br>*numeric string* | Id of a catalog for which the check is performed<br><br>**[required]**<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdsPixelMicrodataStats nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/openbridge_configurations.md -->

## Ads Pixel Openbridge Configurations

### Reading

Read all the openbridge configurations associated to this pixel

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/openbridge_configurations HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/openbridge_configurations',
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
    "/{ads-pixel-id}/openbridge_configurations",
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
    "/{ads-pixel-id}/openbridge_configurations",
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
                               initWithGraphPath:@"/{ads-pixel-id}/openbridge_configurations"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fopenbridge_configurations&version=v25.0)

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

A list of OpenBridgeConfiguration nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 200 | Permissions error |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/raw_fires.md -->

## Ads Pixel Raw Fires

### Reading

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/raw_fires HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/raw_fires',
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
    "/{ads-pixel-id}/raw_fires",
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
    "/{ads-pixel-id}/raw_fires",
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
                               initWithGraphPath:@"/{ads-pixel-id}/raw_fires"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fraw_fires&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `event`<br><br>*string* | Specify which event to filter raw fire for<br><br>**[required]**<br> |
| `filter`<br><br>*string* | The value coressponding to what you define in filter type<br> |
| `filter_type`<br><br>*enum{device_type, event_detection_method, host, url}* | The filter to filter for raw data, can be any of the following:<br>device_type, host, or url<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdsPixelRawFiresResult nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/real_time_event_log.md -->

## Ads Pixel Real Time Event Log

### Reading

Edge to read list of recent pixel fires for the logged in user

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/real_time_event_log HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/real_time_event_log',
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
    "/{ads-pixel-id}/real_time_event_log",
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
    "/{ads-pixel-id}/real_time_event_log",
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
                               initWithGraphPath:@"/{ads-pixel-id}/real_time_event_log"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Freal_time_event_log&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `end_time`<br><br>*datetime/timestamp* | Do not return pixel fires after this (epoch) time<br> |
| `limit`<br><br>*int64* | **Default value: **`100`<br>latest number of pixel fires at most within a time window<br> |
| `session_key`<br><br>*string* | Unique identifier for a real time logging component<br> |
| `start_time`<br><br>*datetime/timestamp* | Do not return pixel fires before this (epoch) time<br> |
| `trace_id`<br><br>*string* | unique id used to record every individual pixel request<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdsPixelRealTimeEventLogResult nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

### Deleting

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/recent_events.md -->

## Ads Pixel Recent Events

### Reading

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/recent_events HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/recent_events',
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
    "/{ads-pixel-id}/recent_events",
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
    "/{ads-pixel-id}/recent_events",
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
                               initWithGraphPath:@"/{ads-pixel-id}/recent_events"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Frecent_events&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `event`<br><br>*string* | Specify the event whose counts you want<br><br>**[required]**<br> |
| `lookback_window`<br><br>*int64* | The lookback window in seconds specifying how far back you want the event counts from<br><br>**[required]**<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdsPixelRecentEventsResult nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/segments.md -->

## Ads Pixel Segments

### Reading

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/segments HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/segments',
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
    "/{ads-pixel-id}/segments",
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
    "/{ads-pixel-id}/segments",
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
                               initWithGraphPath:@"/{ads-pixel-id}/segments"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fsegments&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `date_preset`<br><br>*string* | friendly range such as last_7_days, instead of start/end date<br> |
| `end_date`<br><br>*datetime* | end date (exclusive) of traffic to analyze<br> |
| `site_cpm`<br><br>*int64* | CPM expected for site-wide ads. Used to project segment-level CPM and revenue.<br> |
| `sort`<br><br>*string* | Field to sort the result, and direction of sorting. You can specify sorting direction by appending "_ascending" or "_descending" to the sort field. By default, the sorting direction is ascending.<br> |
| `start_date`<br><br>*datetime* | first date of traffic to analyze<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdsSegments nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/server_events_permitted_business.md -->

## Ads Pixel Server Events Permitted Business

### Reading

AdsPixelServerEventsPermittedBusiness

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/server_events_permitted_business HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/server_events_permitted_business',
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
    "/{ads-pixel-id}/server_events_permitted_business",
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
    "/{ads-pixel-id}/server_events_permitted_business",
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
                               initWithGraphPath:@"/{ads-pixel-id}/server_events_permitted_business"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fserver_events_permitted_business&version=v25.0)

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/setup_quality.md -->

## Ads Pixel Setup Quality

### Reading

Setup Quality exposes feedback on the given Pixel's Conversions API setup based on computed aggregated metrics, which is calculated based on previous events sent by the calling Partner.

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/setup_quality HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/setup_quality',
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
    "/{ads-pixel-id}/setup_quality",
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
    "/{ads-pixel-id}/setup_quality",
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
                               initWithGraphPath:@"/{ads-pixel-id}/setup_quality"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fsetup_quality&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `agent_name`<br><br>*string* | The platform identifier used for when sending events on behalf of a client. See /documentation/ads-commerce/conversions-api/set-up-conversions-api-as-a-platform#attribute-events-to-your-platform-using-partner-agent for details.<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdsPixelCAPIIntegrationQuality nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/shared_accounts.md -->

## Ads Pixel Shared Accounts

### Reading

**Warning:** At the end of September 2024, the `POST /{pixel-id}/shared_accounts` API (including previous versions) will not support sharing of pixels with an ad account, if a business account does not have access to both pixel and ad account. Refer to the [pixel sharing API solution](https://developers.facebook.com/docs/marketing-api/business-asset-management/guides/business-pixel-sharing) to use `POST /{pixel-id}/agencies` or use `POST {ad_account}/agencies` to share into a business account, then use `POST /{pixel-id}/shared_accounts` to link pixel and ad account

##### Example

#### HTTP
```
GET /v25.0/{pixel-id}/shared_accounts?business=%7Bbusiness-id%7D HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{pixel-id}/shared_accounts?business=%7Bbusiness-id%7D',
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
    "/{pixel-id}/shared_accounts",
    {
        "business": "{business-id}"
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
params.putString("business", "{business-id}");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{pixel-id}/shared_accounts",
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
  @"business": @"{business-id}",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{pixel-id}/shared_accounts"
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
  -d 'business=null' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/{pixel-id}/shared_accounts
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bpixel-id%7D%2Fshared_accounts%3Fbusiness%3D%257Bbusiness-id%257D&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `business`<br><br>*numeric string or integer* | ID of the business whose ad accounts the pixel was shared<br>to are fetched<br><br>**[required]**<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": []
}
```

###### data

A list of [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account) nodes.

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

#### /{ads_pixel_id}/shared_accounts
You can make a POST request to *shared_accounts* edge from the following paths:

- [/{ads_pixel_id}/shared_accounts](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/shared_accounts)

When posting to this edge, no Graph object will be created.

##### Example

#### HTTP
```
POST /v25.0/{pixel-id}/shared_accounts HTTP/1.1
Host: graph.facebook.com

account_id=%7Bad-account-id%7D&business=%7Bbusiness-id%7D
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->post(
    '/{pixel-id}/shared_accounts',
    array (
      'account_id' => '{ad-account-id}',
      'business' => '{business-id}',
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
    "/{pixel-id}/shared_accounts",
    "POST",
    {
        "account_id": "{ad-account-id}",
        "business": "{business-id}"
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
params.putString("account_id", "{ad-account-id}");
params.putString("business", "{business-id}");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/{pixel-id}/shared_accounts",
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
  @"account_id": @"{ad-account-id}",
  @"business": @"{business-id}",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/{pixel-id}/shared_accounts"
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
  -F 'account_id=null' \
  -F 'business=null' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/{pixel-id}/shared_accounts
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=POST&path=%7Bpixel-id%7D%2Fshared_accounts%3Faccount_id%3D%257Bad-account-id%257D%26business%3D%257Bbusiness-id%257D&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `account_id`<br><br>*numeric string* | SELF_EXPLANATORY<br><br>**[required]**<br> |
| `business`<br><br>*numeric string or integer* | SELF_EXPLANATORY<br><br>**[required]**<br> |

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
| 190 | Invalid OAuth 2.0 Access Token |

### Updating

You can't perform this operation on this endpoint.

### Deleting

#### /{ads_pixel_id}/shared_accounts
You can dissociate an [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account) from an [AdsPixel](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel) by making a DELETE request to [/{ads_pixel_id}/shared_accounts](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/shared_accounts).

##### Parameters

| Parameter | Description |
| --- | --- |
| `account_id`<br><br>*numeric string* | SELF_EXPLANATORY<br><br>**[required]**<br> |
| `business`<br><br>*numeric string or integer* | SELF_EXPLANATORY<br><br>**[required]**<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/shared_agencies.md -->

## Ads Pixel Shared Agencies

### Reading

##### Example

#### HTTP
```
GET /v25.0/{pixel-id}/shared_agencies HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{pixel-id}/shared_agencies',
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
    "/{pixel-id}/shared_agencies",
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
    "/{pixel-id}/shared_agencies",
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
                               initWithGraphPath:@"/{pixel-id}/shared_agencies"
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
  https://graph.facebook.com/v25.0/{pixel-id}/shared_agencies
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bpixel-id%7D%2Fshared_agencies&version=v25.0)

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

A list of [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/signals_iwl_feedback_nux.md -->

## Ads Pixel Signals Iwl Feedback Nux

### Reading

AdsPixelSignalsIWLFeedbackNux

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/signals_iwl_feedback_nux HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/signals_iwl_feedback_nux',
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
    "/{ads-pixel-id}/signals_iwl_feedback_nux",
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
    "/{ads-pixel-id}/signals_iwl_feedback_nux",
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
                               initWithGraphPath:@"/{ads-pixel-id}/signals_iwl_feedback_nux"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fsignals_iwl_feedback_nux&version=v25.0)

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

A list of AdsPixelSignalsIWLFeedbackNux nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/signals_iwl_nux.md -->

## Ads Pixel Signals Iwl Nux

### Reading

AdsPixelSignalsIWLNux

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/signals_iwl_nux HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/signals_iwl_nux',
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
    "/{ads-pixel-id}/signals_iwl_nux",
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
    "/{ads-pixel-id}/signals_iwl_nux",
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
                               initWithGraphPath:@"/{ads-pixel-id}/signals_iwl_nux"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fsignals_iwl_nux&version=v25.0)

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

A list of [AdsPixelSignalsIWLNux](https://developers.facebook.com/docs/graph-api/reference/ads-pixel-signals-iwl-nux) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel/stats.md -->

## Ads Pixel Stats

### Reading

AdsPixelStats

##### Example

#### HTTP
```
GET /v25.0/{ads-pixel-id}/stats HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ads-pixel-id}/stats',
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
    "/{ads-pixel-id}/stats",
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
    "/{ads-pixel-id}/stats",
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
                               initWithGraphPath:@"/{ads-pixel-id}/stats"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bads-pixel-id%7D%2Fstats&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `agent`<br><br>*string* | agent<br> |
| `aggregation`<br><br>*enum{browser_type, custom_data_field, device_os, device_type, event, host, match_keys, had_pii, pixel_fire, event_detection_method, url, event_value_count, url_by_rule, event_total_counts, event_source, event_processing_results}* | **Default value: **`event`<br>The aggregation to use for the stats. Default: `event`.<br><br>`browser_type`: Get the number of<br>pixel fires per browser type, broken down by hour.<br><br>`custom_data_field`: Get the number<br>of pixel fires for the top 100 custom data fields of an event broken<br>down by hour.<br><br>`device_os`: Get the number of pixel<br>fires per mobile device OS, broken down by hour.<br><br>`device_type`: Get the number of<br>pixel fires per mobile device type, broken down by hour.<br><br>`event`: Get the number of pixel<br>fires for the top 100 events broken down by hour.<br><br>`host`: Get the number of pixel<br>fires for the top 10,000 hosts broken down by hour.<br><br>`url`: Get the number of pixel<br>fires for the top 10,000 URLs broken down by hour. Please note that<br>query parameters are stripped from the URLs.<br><br>`pixel_fire`: Get the number of pixel<br>fires by hour.<br><br>`event_total_counts`: Get the number<br>of pixel fires for all events over the entire time span.<br> |
| `end_time`<br><br>*datetime/timestamp* | **Default value: **`<request_time>`<br>The end time of the stats, in the format of Unix or ISO 8601<br>timestamp. You can get the data up to seven days from<br>the request time.<br> |
| `event`<br><br>*string* | Specify which event to aggregate on, when the `aggregation` is<br>`custom_data_field`<br> |
| `event_source`<br><br>*string* | Specify WEB_ONLY or SERVER_ONLY to filter the pixel events and stats<br> |
| `start_time`<br><br>*datetime/timestamp* | The start time of the stats, in the format of Unix or ISO 8601<br>timestamp.<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [AdsPixelStatsResult](https://developers.facebook.com/docs/marketing-api/reference/ads-pixel-stats-result) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 200 | Permissions error |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.
