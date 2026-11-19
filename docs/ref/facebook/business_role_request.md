# Business Role Request

> Source: Meta Marketing API reference (3 pages). Fetched 2026-11-18.


---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-role-request.md -->

## Business Role Request

### Reading

Represents a business user request. See the requests from an admin of the Business for people to join as member of this business.

##### Example

#### HTTP
```
GET /v25.0/{business-role-request-id} HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-role-request-id}',
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
    "/{business-role-request-id}",
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
    "/{business-role-request-id}",
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
                               initWithGraphPath:@"/{business-role-request-id}"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-role-request-id%7D&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

This endpoint doesn't have any parameters.

##### Fields

| Field | Description |
| --- | --- |
| `id`<br><br>*numeric string* | Business role invitation request ID.<br><br><br>**[default]**<br> |
| `created_by`<br><br>*BusinessUser\|SystemUser* | User who sent the invitation to join this business.<br> |
| `created_time`<br><br>*datetime* | Admin sent this request to someone to join a business at this time.<br> |
| `email`<br><br>*string* | Email of user invited to join the business.<br><br><br>**[default]**<br> |
| `expiration_time`<br><br>*datetime* | Invitation to join business expires at this time.<br> |
| `finance_role`<br><br>*enum* | When you invite someone to join business, pre-assign the Finance role.<br> |
| `invited_user_type`<br><br>*list<enum>* | Invited user type of this role request<br> |
| `owner`<br><br>*[Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business)* | Invite someone to join this business.<br> |
| `role`<br><br>*enum* | Business role for user invited to the business.<br><br><br>**[default]**<br> |
| `status`<br><br>*enum* | Status of the invitation, such as accepted, declined, expired and so on.<br><br><br>**[default]**<br> |
| `updated_by`<br><br>*BusinessUser\|SystemUser* | User who updated the invitation.<br> |
| `updated_time`<br><br>*datetime* | Time invitation updated.<br> |

##### Edges

| Edge | Description |
| --- | --- |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

#### /{business_role_request_id}
You can update a [BusinessRoleRequest](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-role-request) by making a POST request to [/{business_role_request_id}](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-role-request).

##### Parameters

| Parameter | Description |
| --- | --- |
| `role`<br><br>*enum {FINANCE_EDITOR, FINANCE_ANALYST, ADS_RIGHTS_REVIEWER, ADMIN, EMPLOYEE, DEVELOPER, PARTNER_CENTER_ADMIN, PARTNER_CENTER_ANALYST, PARTNER_CENTER_OPERATIONS, PARTNER_CENTER_MARKETING, PARTNER_CENTER_EDUCATION, MANAGE, DEFAULT, FINANCE_EDIT, FINANCE_VIEW}* | Update invitation to include this role, such as `ADMIN`.<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
id: numeric string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Deleting

#### /{business_role_request_id}
You can delete a [BusinessRoleRequest](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-role-request) by making a DELETE request to [/{business_role_request_id}](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-role-request).

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
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 190 | Invalid OAuth 2.0 Access Token |
| 200 | Permissions error |

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-role-request/assigned_client_assets.md -->

## Business Role Request Assigned Client Assets

### Reading

List of client assets assigned to this role invitation.

##### Example

#### HTTP
```
GET /v25.0/{business-role-request-id}/assigned_client_assets HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-role-request-id}/assigned_client_assets',
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
    "/{business-role-request-id}/assigned_client_assets",
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
    "/{business-role-request-id}/assigned_client_assets",
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
                               initWithGraphPath:@"/{business-role-request-id}/assigned_client_assets"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-role-request-id%7D%2Fassigned_client_assets&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `asset_type`<br><br>*enum {PAGE, PROFILE_PLUS, AD_ACCOUNT, AD_DRAFT_WORKSPACE, PRODUCT_CATALOG, APP, PIXEL, SYSTEM_USER, BRAND, USER, PROJECT, INSTAGRAM_ACCOUNT, INSTAGRAM_ACCOUNT_V2, FUNDING_SOURCE, LEGAL_ENTITY, LEGACY_LOGIN, BUSINESS_REQUEST, EXAMPLE_CAT, MONETIZATION_PROPERTY, GRP_PLAN, CREDIT_PARTITION, PAYOUT_ACCOUNT, AD_STUDY, SAVED_AUDIENCE, CUSTOM_AUDIENCE, PLATFORM_CUSTOM_AUDIENCE, EVENT_SOURCE_GROUP, OFFLINE_CONVERSION_DATA_SET, AD_IMAGE, PHOTO, BLOCK_LIST, FINANCE, IP, CREDIT_PARTITION_CONFIG, VIDEO_ASSET, BUSINESS_UNIT, PAGE_FOR_LOCATIONS, AD_ACCOUNT_CREATION_REQUEST, RESELLER_VETTING_OE_REQUEST, REGISTERED_TRADEMARK, CUSTOM_CONVERSION, LEADS_ACCESS, SPACO_DS_DATA_COLLECTION, OWNED_DOMAIN, WHATSAPP_BUSINESS_ACCOUNT, WHATSAPP_BUSINESS_PRESENCE, BUSINESS_RESOURCE_GROUP, HOTEL_PRICE_FETCHER_PULL_CONFIG, NEWS_PAGE, PLACE_PAGE_SET, BUSINESS_LOCATIONS_WRAPPER, SLICED_EVENT_SOURCE_GROUP, BUSINESS_CREATIVE_ASSET, BUSINESS_CREATIVE_FOLDER, BUSINESS_IMAGE, BUSINESS_VIDEO, ADS_EVENT_SOURCE, SELLER_PROFILE, BANK, CREDIT_CARD, RECEIPT, CREDENTIAL_SHARE_REQUEST, ADVANCED_ANALYTICS_INSTANCE, SIGNAL_SEGMENT, BUSINESS_LOYALTY_PROGRAM, EVENTS_DATASET, CLOUD_PLAYABLE_ASSET, CREATOR_SELLER_PROFILE, CAIPT_ASSET, BUSINESS_FRANCHISE_CONFIG, EVENTS_DATASET_AND_PIXEL, EVENTS_DATASET_NEW, OFFSITE_EMAIL_ACCOUNT, CREATOR_MARKETPLACE_BRAND_PROFILE, SIGNALS_EVENT_NAME, BUSINESS_PAYOUT_ACCOUNT, UNKNOWN, MESSAGING_DATASET, INSTAGRAM_BUSINESS_ASSET, NME_BUSINESS_SUBSCRIPTION_ASSET, MV4B_BILLABLE_ACCOUNT, MARKETPLACE_PARTNER_BILLABLE_ACCOUNT, BUSINESS_PERSON, CONTENT_BLOCK_LIST, WHATSAPP_MARKETING_MESSAGE_SUBSCRIBER_POOL, BIZ_AI_BILLABLE_ACCOUNT, THREADS_ACCOUNT, WHATSAPP_ACCOUNT, MESSENGER_MARKETING_MESSAGE_SUBSCRIBER_POOL}* | Business asset type to be filtered on<br><br>**[required]**<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"summary": {}
}
```

###### data

A list of BusinessPermissionProxy nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `permitted_roles`<br><br>*list<string>* | Roles that are assignable on this object<br> |
| `permitted_tasks`<br><br>*list<string>* | Tasks that are assignable on this object<br> |
| `role`<br><br>*string* | The role the user is assigned<br><br><br>**[default]**<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-role-request/assigned_owned_assets.md -->

## Business Role Request Assigned Owned Assets

### Reading

List of owned assets assigned to this role invitation.

##### Example

#### HTTP
```
GET /v25.0/{business-role-request-id}/assigned_owned_assets HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-role-request-id}/assigned_owned_assets',
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
    "/{business-role-request-id}/assigned_owned_assets",
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
    "/{business-role-request-id}/assigned_owned_assets",
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
                               initWithGraphPath:@"/{business-role-request-id}/assigned_owned_assets"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-role-request-id%7D%2Fassigned_owned_assets&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `asset_type`<br><br>*enum {PAGE, PROFILE_PLUS, AD_ACCOUNT, AD_DRAFT_WORKSPACE, PRODUCT_CATALOG, APP, PIXEL, SYSTEM_USER, BRAND, USER, PROJECT, INSTAGRAM_ACCOUNT, INSTAGRAM_ACCOUNT_V2, FUNDING_SOURCE, LEGAL_ENTITY, LEGACY_LOGIN, BUSINESS_REQUEST, EXAMPLE_CAT, MONETIZATION_PROPERTY, GRP_PLAN, CREDIT_PARTITION, PAYOUT_ACCOUNT, AD_STUDY, SAVED_AUDIENCE, CUSTOM_AUDIENCE, PLATFORM_CUSTOM_AUDIENCE, EVENT_SOURCE_GROUP, OFFLINE_CONVERSION_DATA_SET, AD_IMAGE, PHOTO, BLOCK_LIST, FINANCE, IP, CREDIT_PARTITION_CONFIG, VIDEO_ASSET, BUSINESS_UNIT, PAGE_FOR_LOCATIONS, AD_ACCOUNT_CREATION_REQUEST, RESELLER_VETTING_OE_REQUEST, REGISTERED_TRADEMARK, CUSTOM_CONVERSION, LEADS_ACCESS, SPACO_DS_DATA_COLLECTION, OWNED_DOMAIN, WHATSAPP_BUSINESS_ACCOUNT, WHATSAPP_BUSINESS_PRESENCE, BUSINESS_RESOURCE_GROUP, HOTEL_PRICE_FETCHER_PULL_CONFIG, NEWS_PAGE, PLACE_PAGE_SET, BUSINESS_LOCATIONS_WRAPPER, SLICED_EVENT_SOURCE_GROUP, BUSINESS_CREATIVE_ASSET, BUSINESS_CREATIVE_FOLDER, BUSINESS_IMAGE, BUSINESS_VIDEO, ADS_EVENT_SOURCE, SELLER_PROFILE, BANK, CREDIT_CARD, RECEIPT, CREDENTIAL_SHARE_REQUEST, ADVANCED_ANALYTICS_INSTANCE, SIGNAL_SEGMENT, BUSINESS_LOYALTY_PROGRAM, EVENTS_DATASET, CLOUD_PLAYABLE_ASSET, CREATOR_SELLER_PROFILE, CAIPT_ASSET, BUSINESS_FRANCHISE_CONFIG, EVENTS_DATASET_AND_PIXEL, EVENTS_DATASET_NEW, OFFSITE_EMAIL_ACCOUNT, CREATOR_MARKETPLACE_BRAND_PROFILE, SIGNALS_EVENT_NAME, BUSINESS_PAYOUT_ACCOUNT, UNKNOWN, MESSAGING_DATASET, INSTAGRAM_BUSINESS_ASSET, NME_BUSINESS_SUBSCRIPTION_ASSET, MV4B_BILLABLE_ACCOUNT, MARKETPLACE_PARTNER_BILLABLE_ACCOUNT, BUSINESS_PERSON, CONTENT_BLOCK_LIST, WHATSAPP_MARKETING_MESSAGE_SUBSCRIBER_POOL, BIZ_AI_BILLABLE_ACCOUNT, THREADS_ACCOUNT, WHATSAPP_ACCOUNT, MESSENGER_MARKETING_MESSAGE_SUBSCRIBER_POOL}* | Business asset type to be filtered on<br><br>**[required]**<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"summary": {}
}
```

###### data

A list of BusinessObject nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `permitted_roles`<br><br>*list<string>* | Roles that are assignable on this object<br> |
| `permitted_tasks`<br><br>*list<string>* | Tasks that are assignable on this object<br> |
| `role`<br><br>*string* | The role the user is assigned<br><br><br>**[default]**<br> |

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
