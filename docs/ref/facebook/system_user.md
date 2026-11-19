# System User

> Source: Meta Marketing API reference (12 pages). Fetched 2026-11-18.


---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/system-user.md -->

## System User

### Reading

Represents a system user

##### Example

#### HTTP
```
GET /v25.0/{system-user-id} HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{system-user-id}',
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
    "/{system-user-id}",
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
    "/{system-user-id}",
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
                               initWithGraphPath:@"/{system-user-id}"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bsystem-user-id%7D&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

This endpoint doesn't have any parameters.

##### Fields

| Field | Description |
| --- | --- |
| `id`<br><br>*numeric string* | System user ID.<br><br><br>**[default]**<br> |
| `created_by`<br><br>*[User](https://developers.facebook.com/docs/graph-api/reference/user)* | The creator of this system user.<br> |
| `created_time`<br><br>*datetime* | The creation time of this system user.<br> |
| `finance_permission`<br><br>*string* | Financial permission role of the user in business manager, such as Editor, Analyst, and so on.<br> |
| `ip_permission`<br><br>*string* | Ads right permission role of the user in business manager, such as Reviewer, and so on.<br> |
| `name`<br><br>*string* | Name used to identify this system user.<br><br><br>**[default]**<br> |

##### Edges

| Edge | Description |
| --- | --- |
| [`assigned_business_asset_groups`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/system-user/assigned_business_asset_groups)<br><br>*Edge<BusinessAssetGroup>* | Business asset groups that are assign to this business scoped user<br> |
| [`assigned_pages`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/system-user/assigned_pages)<br><br>*Edge<Page>* | Pages that are assigned to this business scoped user<br> |
| [`assigned_product_catalogs`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/system-user/assigned_product_catalogs)<br><br>*Edge<ProductCatalog>* | Product catalogs that are assigned to this business scoped user<br> |
| [`assigned_whatsapp_business_accounts`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/system-user/assigned_whatsapp_business_accounts)<br><br>*Edge<WhatsAppBusinessAccount>* | WhatsApp business accounts that are assigned to the business user<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 110 | Invalid user id |

### Creating

#### /{business_id}/system_users
You can make a POST request to *system_users* edge from the following paths:

- [/{business_id}/system_users](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/system_users)

When posting to this edge, a [SystemUser](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/system-user) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `name`<br><br>*string* | Name of system user to be added to this business.<br><br>**[required]**<br> |
| `role`<br><br>*enum {FINANCE_EDITOR, FINANCE_ANALYST, ADS_RIGHTS_REVIEWER, ADMIN, EMPLOYEE, DEVELOPER, PARTNER_CENTER_ADMIN, PARTNER_CENTER_ANALYST, PARTNER_CENTER_OPERATIONS, PARTNER_CENTER_MARKETING, PARTNER_CENTER_EDUCATION, MANAGE, DEFAULT, FINANCE_EDIT, FINANCE_VIEW}* | Role of system user to be added to this business.<br> |
| `system_user_id`<br><br>*int* | ID of system user.<br> |

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
| 104001 | In order to create a system user, an app must be part of this business. Please add an app and then try again. |
| 100 | Invalid parameter |
| 3949 | This Business Manager has reached maximum number of system user limit. |
| 3965 | This Business Manager has reached maximum number of admin system user limit. |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/system-user/assigned_ad_accounts.md -->

## System User Assigned Ad Accounts

### Reading

Ad accounts that are assigned to this business scoped user.

**Warning:** At the end of September 2024, the `POST /{pixel-id}/shared_accounts` API (including previous versions) will not support sharing of pixels with an ad account, if a business account does not have access to both pixel and ad account. Refer to the [pixel sharing API solution](https://developers.facebook.com/docs/marketing-api/business-asset-management/guides/business-pixel-sharing) to use `POST /{pixel-id}/agencies` or use `POST {ad_account}/agencies` to share into a business account, then use `POST /{pixel-id}/shared_accounts` to link pixel and ad account

##### Example

#### HTTP
```
GET /v25.0/{system-user-id}/assigned_ad_accounts HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{system-user-id}/assigned_ad_accounts',
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
    "/{system-user-id}/assigned_ad_accounts",
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
    "/{system-user-id}/assigned_ad_accounts",
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
                               initWithGraphPath:@"/{system-user-id}/assigned_ad_accounts"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bsystem-user-id%7D%2Fassigned_ad_accounts&version=v25.0)

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

A list of [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account) nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `permitted_tasks`<br><br>*list<string>* | Tasks that are assignable on this object<br> |
| `tasks`<br><br>*list<string>* | All unpacked roles/tasks of this particular user on this object<br><br><br>**[default]**<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | Total number of objects on this edge<br><br><br>**[default]**<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/system-user/assigned_ads_pixels.md -->

## System User Assigned Ads Pixels

### Reading

Permitted Ads Pixels

##### Example

#### HTTP
```
GET /v25.0/{system-user-id}/assigned_ads_pixels HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{system-user-id}/assigned_ads_pixels',
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
    "/{system-user-id}/assigned_ads_pixels",
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
    "/{system-user-id}/assigned_ads_pixels",
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
                               initWithGraphPath:@"/{system-user-id}/assigned_ads_pixels"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bsystem-user-id%7D%2Fassigned_ads_pixels&version=v25.0)

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

A list of [AdsPixel](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel) nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `permitted_tasks`<br><br>*list<string>* | Tasks that are assignable on this object<br> |
| `tasks`<br><br>*list<string>* | All unpacked roles/tasks of this particular user on this object<br><br><br>**[default]**<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | Total number of objects on this edge<br><br><br>**[default]**<br> |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/system-user/assigned_apps.md -->

## System User Assigned Apps

### Reading

AssignedApps

##### Example

#### HTTP
```
GET /v25.0/{system-user-id}/assigned_apps HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{system-user-id}/assigned_apps',
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
    "/{system-user-id}/assigned_apps",
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
    "/{system-user-id}/assigned_apps",
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
                               initWithGraphPath:@"/{system-user-id}/assigned_apps"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bsystem-user-id%7D%2Fassigned_apps&version=v25.0)

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

A list of [Application](https://developers.facebook.com/docs/graph-api/reference/application) nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `can_be_removed`<br><br>*bool* | A boolean to allow this object can be removed or not<br> |
| `permitted_tasks`<br><br>*list<string>* | Tasks that are assignable on this object<br> |
| `tasks`<br><br>*list<string>* | Tasks of this particular user on this object<br><br><br>**[default]**<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | Total number of objects on this edge<br><br><br>**[default]**<br> |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/system-user/assigned_business_asset_groups.md -->

## System User Assigned Business Asset Groups

### Reading

Get list of business asset groups for user

##### Example

#### HTTP
```
GET /v25.0/{system-user-id}/assigned_business_asset_groups HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{system-user-id}/assigned_business_asset_groups',
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
    "/{system-user-id}/assigned_business_asset_groups",
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
    "/{system-user-id}/assigned_business_asset_groups",
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
                               initWithGraphPath:@"/{system-user-id}/assigned_business_asset_groups"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bsystem-user-id%7D%2Fassigned_business_asset_groups&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `contained_asset_id`<br><br>*numeric string or integer* | contained_asset_id<br> |

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

A list of BusinessAssetGroup nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `adaccount_tasks`<br><br>*list<string>* | Permission tasks for ad accounts contained in business asset group.<br><br><br>**[default]**<br> |
| `offline_conversion_data_set_tasks`<br><br>*list<string>* | Permission tasks for offline conversion datasets contained in business asset group.<br><br><br>**[default]**<br> |
| `page_tasks`<br><br>*list<string>* | Permission tasks fo pages contained in business asset group.<br><br><br>**[default]**<br> |
| `pixel_tasks`<br><br>*list<string>* | Permission tasks for ads pixels contained in business asset group.<br><br><br>**[default]**<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | Total count of business asset groups<br><br><br>**[default]**<br> |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/system-user/assigned_creative_folders.md -->

## System User Assigned Creative Folders

### Reading

Creative folders that are assigned to this business scoped user

##### Example

#### HTTP
```
GET /v25.0/{system-user-id}/assigned_creative_folders HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{system-user-id}/assigned_creative_folders',
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
    "/{system-user-id}/assigned_creative_folders",
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
    "/{system-user-id}/assigned_creative_folders",
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
                               initWithGraphPath:@"/{system-user-id}/assigned_creative_folders"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bsystem-user-id%7D%2Fassigned_creative_folders&version=v25.0)

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

A list of [BusinessCreativeFolder](https://developers.facebook.com/docs/marketing-api/reference/business-creative-folder) nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `tasks`<br><br>*list<string>* | Tasks of this particular user on this object<br><br><br>**[default]**<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | Total number of objects on this edge<br><br><br>**[default]**<br> |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/system-user/assigned_instagram_accounts.md -->

## System User Assigned Instagram Accounts

### Reading

Permitted instagram accounts

##### Example

#### HTTP
```
GET /v25.0/{system-user-id}/assigned_instagram_accounts HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{system-user-id}/assigned_instagram_accounts',
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
    "/{system-user-id}/assigned_instagram_accounts",
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
    "/{system-user-id}/assigned_instagram_accounts",
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
                               initWithGraphPath:@"/{system-user-id}/assigned_instagram_accounts"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bsystem-user-id%7D%2Fassigned_instagram_accounts&version=v25.0)

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

A list of [IGUser](https://developers.facebook.com/docs/graph-api/reference/shadow-ig-user) nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `permitted_roles`<br><br>*list<string>* | Permitted roles<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | total_count<br><br><br>**[default]**<br> |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/system-user/assigned_monetization_properties.md -->

## System User Assigned Monetization Properties

### Reading

AssignedMonetizationProperties

##### Example

#### HTTP
```
GET /v25.0/{system-user-id}/assigned_monetization_properties HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{system-user-id}/assigned_monetization_properties',
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
    "/{system-user-id}/assigned_monetization_properties",
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
    "/{system-user-id}/assigned_monetization_properties",
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
                               initWithGraphPath:@"/{system-user-id}/assigned_monetization_properties"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bsystem-user-id%7D%2Fassigned_monetization_properties&version=v25.0)

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

A list of AdMonetizationProperty nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `tasks`<br><br>*list<string>* | tasks<br><br><br>**[default]**<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | Total number of objects on this edge<br><br><br>**[default]**<br> |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/system-user/assigned_offline_conversion_data_sets.md -->

## System User Assigned Offline Conversion Data Sets

### Reading

Permitted offline conversion data sets

##### Example

#### HTTP
```
GET /v25.0/{system-user-id}/assigned_offline_conversion_data_sets HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{system-user-id}/assigned_offline_conversion_data_sets',
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
    "/{system-user-id}/assigned_offline_conversion_data_sets",
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
    "/{system-user-id}/assigned_offline_conversion_data_sets",
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
                               initWithGraphPath:@"/{system-user-id}/assigned_offline_conversion_data_sets"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bsystem-user-id%7D%2Fassigned_offline_conversion_data_sets&version=v25.0)

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

A list of [OfflineConversionDataSet](https://developers.facebook.com/docs/graph-api/reference/offline-conversion-data-set) nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `permitted_tasks`<br><br>*list<string>* | Tasks that are assignable on this object<br> |
| `tasks`<br><br>*list<string>* | All unpacked roles/tasks of this particular user on this object<br><br><br>**[default]**<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | Total number of objects on this edge<br><br><br>**[default]**<br> |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/system-user/assigned_pages.md -->

## System User Assigned Pages

### Reading

Pages that are assigned to this business scoped user.

##### Example

#### HTTP
```
GET /v25.0/{system-user-id}/assigned_pages HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{system-user-id}/assigned_pages',
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
    "/{system-user-id}/assigned_pages",
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
    "/{system-user-id}/assigned_pages",
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
                               initWithGraphPath:@"/{system-user-id}/assigned_pages"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bsystem-user-id%7D%2Fassigned_pages&version=v25.0)

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

A list of [Page](https://developers.facebook.com/docs/graph-api/reference/page) nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `permitted_tasks`<br><br>*list<string>* | Tasks that are assignable on this object<br> |
| `tasks`<br><br>*list<string>* | All unpacked roles/tasks of this particular user on this object<br><br><br>**[default]**<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | Total number of objects on this edge<br><br><br>**[default]**<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/system-user/assigned_product_catalogs.md -->

## System User Assigned Product Catalogs

### Reading

Product catalogs that is assigned to this business scoped user.

##### Example

#### HTTP
```
GET /v25.0/{system-user-id}/assigned_product_catalogs HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{system-user-id}/assigned_product_catalogs',
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
    "/{system-user-id}/assigned_product_catalogs",
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
    "/{system-user-id}/assigned_product_catalogs",
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
                               initWithGraphPath:@"/{system-user-id}/assigned_product_catalogs"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bsystem-user-id%7D%2Fassigned_product_catalogs&version=v25.0)

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

A list of [ProductCatalog](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog) nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `access_type`<br><br>*string* | Checks if business has owner or agency access on the asset<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | Total number of objects on this edge<br><br><br>**[default]**<br> |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/system-user/assigned_whatsapp_business_accounts.md -->

## System User Assigned Whatsapp Business Accounts

### Reading

WhatsApp business accounts that are assigned to the business user

##### Example

#### HTTP
```
GET /v25.0/{system-user-id}/assigned_whatsapp_business_accounts HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{system-user-id}/assigned_whatsapp_business_accounts',
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
    "/{system-user-id}/assigned_whatsapp_business_accounts",
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
    "/{system-user-id}/assigned_whatsapp_business_accounts",
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
                               initWithGraphPath:@"/{system-user-id}/assigned_whatsapp_business_accounts"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bsystem-user-id%7D%2Fassigned_whatsapp_business_accounts&version=v25.0)

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

A list of [WhatsAppBusinessAccount](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account) nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `tasks`<br><br>*list<string>* | Tasks the user has on the WABA<br><br><br>**[default]**<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total_count).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*unsigned int32* | total_count<br> |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.
