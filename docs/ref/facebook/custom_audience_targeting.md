# Custom Audience Targeting

> Source: Meta Marketing API reference (11 pages). Fetched 2026-11-18.


---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience.md -->

## Custom Audience

**Warning:** Beginning September 2, 2025, we will start to roll out more proactive restrictions on custom audiences that may suggest information not permitted under our terms. For example, any custom audience or lookalike audience suggesting specific health conditions (e.g., "arthritis", "diabetes") or financial status (e.g., "credit score", "high income") will be flagged and prevented from being used to run ad campaigns.

**What these restrictions mean for your campaigns:**

* You won't be able to use flagged custom audiences when creating new campaigns.
* If you have an active campaign using flagged custom audiences, you should edit or pause it and choose a different audience to avoid performance and delivery issues.

**For API developers:**

* Beginning September 2, 2025, `operation_statu`s will return `471` to signal if your custom audiences have been flagged.

More information on this update and how to resolve flagged custom audiences can be found [here](https://www.facebook.com/business/help/1055828013359808).

Build an audience of your customers, website visitors, mobile app visitors or people similar to them. To add or remove users from a custom audience, see the [Custom Audience User reference](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/users).

To use custom audiences, business users must first sign our [Terms Of Service](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/custom-audience-terms-of-service).

To improve how audiences are created and managed, custom audiences that have not been used in any active ad sets in over two years will be deleted on a rolling basis automatically. See the [Custom Audiences: Overview: Deletion](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/overview#custom-audiences-deletion) for more information.

#### Flagged custom and lookalike audiences {#flagged}

If one or more custom or lookalike audience is flagged with an `operation_status` of `471`, the `effective_status` field of the ad set will change to `WITH_ISSUES` and the `issues_info` list will be populated with one issue per flagged audience. The `fields_violating_integrity_policy` field will be populated with the list of flagged fields.

Attempting to edit a flagged custom audience without changing the custom audience fields listed in the `fields_violating_integrity_policy` field will result in an error.

```json
{
  "error": {
    "message": "Invalid parameter",
    "code": 100,
    "error_subcode": 1713231,
    "error_user_title": "Update Restricted Fields and Rule",
    "error_user_msg": "This custom audience has integrity restrictions. To continue, you must update the restricted fields and the rule in your current edit",
  },
}
```

Attempting to edit a flagged lookalike audience or customer file custom audience (DFCA) will result in an error.

```json
{
  "error": {
    "message": "Invalid parameter",
    "code": 100,
    "error_subcode": 1713228,
    "error_user_title": "Custom Audience Cannot Be Edited",
    "error_user_msg": "This audience cannot be edited due to integrity restrictions. Please appeal the restrictions or create a new audience",
  },
}
```

**Example**

```html
{
"account_id": "<OWNER_ACCOUNT_ID>",
"approximate_count": 5000,
"approximate_count_lower_bound": 4900,
"approximate_count_upper_bound": 5100,
"customer_file_source": "USER_PROVIDED_ONLY",
"description": "Audience Description",
"fields_violating_integrity_policy": ["<FIELD>", ...],
"id": "<CUSTOM_AUDIENCE_ID>",
"name": "Audience Name",
"operation_status": {
"code": 471,
"description": "The custom audience or lookalike is blocked because it suggests the use of information (e.g., health, financial) not allowed under Meta's terms, and is restricted from running ads. Review the audience and remove prohibited information, or choose a different one."
},
"retention_days": 0,
"subtype": "CUSTOM",
"time_created": 1755083743,
"time_updated": 1755083943,
"time_content_updated": 1755083943,
"owner_account_info": {
"account_id": "<OWNER_ACCOUNT_ID>",
"account_name": "Account Name",
"business_id": "<OWNER_BUSINESS_ID>",
"business_name": "Business Name"
},
...
}
```

##### To resolve flagged audiences

If your custom or lookalike audiences are flagged, consider these options.

To resolve flagged custom audiences:

* **Review flagged audiences**: Use Audience Manager to review your custom audience along with other information included in an audience, and remove any information that is not allowed under [Meta's terms](https://www.facebook.com/legal/terms/businesstools/).
* **Create new or choose different audiences**: Alternatively, you can create a new custom audience or choose a different existing custom audience and make sure that it does not include information not allowed under our terms and use that to run campaigns.

To resolve flagged lookalike audiences:

* **Resolve issues with the underlying custom audience**: If the underlying custom audience (also known as the seed audience) of your lookalike audience is flagged, you will need to resolve the issue with the underlying custom audience on which the lookalike audience is built. Please refer to the preceding section on how to resolve flagged custom audiences.
* **Create new audiences**: Consider developing new lookalike audiences and make sure that they don't include information that is not allowed under our terms.

###### Request a review

If you believe your custom audience or lookalike audience has been flagged in error and doesn't include non-permitted information, you can request a review via Ads Manager under the campaigns table or, or in Audience Manager by clicking on individual audiences and under the summary tab of the impacted audience.

### Reading

Custom audiences are designed to provide advertisers the ability to target their ads to a specific set of people with whom they have already established a relationship on and off Facebook. Advertisers may choose to define audiences by email address, Facebook User IDs, phone numbers, names, date of birth, gender, locations, [app user IDs](https://developers.facebook.com/docs/app-ads/targeting/mobile-advertiser-ids), Apple's Advertising Identifier (IDFA), [Android's advertising ID](https://developers.google.com/ads/#apps) or by a combination of rules used to identify users who took specific actions on their website.  

When utilizing Facebook User IDs please ensure you comply with [Facebook Platform Terms](https://developers.facebook.com/terms) and [Developer Policies](https://developers.facebook.com/devpolicy). You must accept the [Custom Audience Terms of Service](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/custom-audience-terms-of-service) in order to use custom audiences. You can query which terms have been accepted by checking the `tos_accepted` field of a given ad account. See [Ad Account](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account) for more information.

#### Example

```html
curl -G \
-d 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v27.0/<CUSTOM_AUDIENCE_ID>
```

##### Parameters

| Parameter | Description |
| --- | --- |
| `ad_account_id`<br><br>*numeric string* | ID of the recipient ad account in which custom audience is used.<br> |
| `special_ad_categories`<br><br>*list<string>* | special_ad_categories<br> |
| `special_ad_category_countries`<br><br>*list<string>* | special_ad_category_countries<br> |

##### Fields

| Field | Description |
| --- | --- |
| `id`<br><br>*numeric string* | Custom audience ID<br><br><br>**[default]**<br> |
| `account_id`<br><br>*numeric string* | Ad Account ID<br> |
| `approximate_count_lower_bound`<br><br>*integer* | Lower bound of the approximate number of people in this audience. A call for this field returns `-1` for [inactive lookalikes](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/lookalike-audiences#inactive).<br> |
| `approximate_count_upper_bound`<br><br>*integer* | Upper bound of the approximate number of people in this audience. A call for this field returns `-1` for [inactive lookalikes](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/lookalike-audiences#inactive).<br> |
| `customer_file_source`<br><br>*string* | Source of customer information in the uploaded file<br> |
| `data_source`<br><br>*[CustomAudienceDataSource](https://developers.facebook.com/docs/marketing-api/reference/custom-audience-data-source)* | JSON dictionary of `type`, `sub_type` to indicate by which method the                    custom audience was created.<br> Note: Subtypes `IG_BUSINESS_EVENTS`,                    `FB_EVENT_SIGNALS` and `MULTI_DATA_EVENTS` can only be created through Ads Manager, Audience Manager, and not through the API.<br> |
| `delivery_status`<br><br>*CustomAudienceStatus* | JSON dictionary of `code` and `description`. It indicates whether or not an audience can be used in ads. Possible values include:<br><br><br>• `200`: Returned if the audience is active and ready to be used.<br>• `300`: Returned if the audience is smaller than it should be. This audience is currently inactive and cannot be used.<br>• `400` and above: Returned if the audience is not usable for a variety of reasons, including policy violation.<br> |
| `description`<br><br>*string* | Custom audience description<br> |
| `external_event_source`<br><br>*[AdsPixel](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ads-pixel)* | Read-only JSON dictionary with `id` keys containing the Pixel ID whose traffic generated this custom audience. Will throw an error if the app making the call lacks the required permissions.<br> |
| `fields_violating_integrity_policy`<br><br>*list<string>* | A list of custom audience fields (either name, description or rule) that are flagged for a custom audience that may suggest information not permitted under our terms.<br> |
| `is_value_based`<br><br>*bool* | Whether the audience is used to seed value based lookalike<br> |
| `lookalike_audience_ids`<br><br>*list<numeric string>* | The IDs of the lookalike audiences generated from this audience<br> |
| `lookalike_spec`<br><br>*LookalikeSpec* | Generated only when the subtype is `LOOKALIKE`. More info at [Lookalike Audience](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/lookalike-audiences)<br> |
| `name`<br><br>*string* | Custom audience name<br> |
| `operation_status`<br><br>*CustomAudienceStatus* | JSON dictionary of `code` to int value and `description` to a description string. The operation status represents the status of the last operation performed on an audience. In general, it will have following states:<br><br><br>• `0`: Status not available<br>• `100`: If an audience hasn't been used in an active ad set for over 2 years, it will begin to expire. Expiring audiences that remain unused for 90 days will be deleted.<br>• `200`: Normal. There is no updating or issues found<br>• `400`: Warning. There is some message we would like advertisers to know<br>• `410`: No upload. No file has been uploaded<br>• `411`: Low match rate. Low rate of matched people<br>• `412`: High rate of invalid entries in the last upload session. Customer file has unusable data<br>• `414`: Replace in progress<br>• `415`: Replace failed<br>• `421`: No pixel. Your Facebook pixel hasn't been installed on your website yet<br>• `422`: Pixel not firing. Your Facebook pixel isn't firing<br>• `423`: Invalid pixel. Your Facebook pixel is invalid<br>• `431`: Lookalike Audience refresh failed<br>• `432`: Lookalike Audience build failed<br>• `433`: Lookalike Audience build failed<br>• `434`: Lookalike Audience build retrying<br>• `441`: We're finding people who fit your audience criteria. You can start running ads with this audience right away, but be aware that your audience size will increase as the audience is populated<br>• `442`: Your Custom Audience could not be prefilled<br>• `450`: This audience either hasn't been used in an ad for at least 30 days or was created over 90 days ago and has never been used. For this reason, your audience is out of date.<br>• `470`: The account that created this audience is no longer active<br>• `471`: The audience has been flagged for integrity reasons.<br>• `500`: Error: there is some error and advertisers need to take action items to fix the error<br> |
| `opt_out_link`<br><br>*string* | Your opt-out URL so people can choose not to be targeted<br> |
| `permission_for_actions`<br><br>*AudiencePermissionForActions* | JSON dictionary of permissions (string) to boolean value if the<br>custom audience has that permission<br> |
| `pixel_id`<br><br>*numeric string* | ID of the pixel which is collecting events for this Website Custom audience<br> |
| `retention_days`<br><br>*int32* | Number of days to keep the user in this cluster. You can use any value between 1 and 180 days. Defaults to forever, if not specified. Only available for Customer File Custom Audience, including Custom Audiences created from CRM data.<br> |
| `rule`<br><br>*string* | Audience rules to be applied on the referrer URL<br> |
| `rule_aggregation`<br><br>*string* | Aggregation on top of the rule, examples of aggregations include: count, sum etc<br> |
| `sharing_status`<br><br>*CustomAudienceSharingStatus* | Sharing status of this custom audience for the ad account<br> |
| `subtype`<br><br>*string* | Type of custom audience, derived from original data source. <br>Note: Subtypes `IG_BUSINESS`, `FB_EVENT`, `EXPERIMENTAL` and `MULTI_DATA` can only be created through Ads Manager, Audience Manager, and not through the API.<br> |
| `time_content_updated`<br><br>*unsigned int32* | Last update of people in this custom audience,<br>this field is only supported for Customer List Custom Audiences.<br> |
| `time_created`<br><br>*unsigned int32* | Creation time<br> |
| `time_updated`<br><br>*unsigned int32* | Last time this audience metadata was updated<br> |

##### Edges

| Edge | Description |
| --- | --- |
| [`adaccounts`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/adaccounts)<br><br>*Edge<CustomAudienceAdAccount>* | The ad account ids associated with this custom audience<br> |
| [`ads`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/ads)<br><br>*Edge<Adgroup>* | Ads that are using this custom audience<br> |
| [`health`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/health)<br><br>*Edge<CustomAudienceHealth>* | health<br> |
| [`sessions`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/sessions)<br><br>*Edge<CustomAudienceSession>* | Data upload sessions of this custom audience<br> |
| [`shared_account_info`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/shared_account_info)<br><br>*Edge<CustomAudiencesharedAccountInfo>* | List of Ad Accounts and Businesses this Audience is shared to<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 80003 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#custom-audience. |
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |
| 270 | This Ads API request is not allowed for apps with development access level (Development access is by default for all apps, please request for upgrade). Make sure that the access token belongs to a user that is both admin of the app and admin of the ad account |
| 2500 | Error parsing graph query |

### Creating

#### Limitations

* The `subtype` field for engagement custom audiences is only supported for video.
* Mobile app custom audiences for inclusion targeting is no longer supported for the `POST /{ad-account-id}/adsets` endpoint for iOS 14+ SKAdNetwork campaigns.
* New iOS 14+ app install campaigns will no longer be able to use app connections targeting.

#### Examples

Create a blank audience:

```html
curl \
-F 'name="My new CA"' \
-F 'subtype=CUSTOM' \
-F 'description="People who bought from my website"' \
-F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v27.0/act_<AD_ACCOUNT_ID>/customaudiences
```

You can't perform this operation on this endpoint.

### Updating

If a person opted out of being targeted, you must remove them from all custom audiences in which they appear. To opt-out a person from an audience after they have clicked through to your opt-out URL, make an `HTTP DELETE` call to:

```html
https://graph.facebook.com/v27.0/act_<AD_ACCOUNT_ID>/usersofanyaudience
```

Provide the same fields as you do in a [user update](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/users). This will remove the people you specify from **ALL** custom file custom audiences belonging to the specified ad account.

#### Examples

To update the audience name:

```html
curl \
-F 'name=Updated Name for CA' \
-F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v27.0/<CUSTOM_AUDIENCE_ID>
```

To edit an opt-out link:

```html
curl \
-F 'opt_out_link=http://www.yourdomain.com/optout' \
-F 'access_token=<ACCESS_TOKEN>' \
https://graph.facebook.com/v27.0/<CUSTOM_AUDIENCE_ID>
```

#### /{custom_audience_id}
You can update a [CustomAudience](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience) by making a POST request to [/{custom_audience_id}](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience).

##### Example

#### HTTP
```
POST /v25.0/<CUSTOM_AUDIENCE_ID>/ HTTP/1.1
Host: graph.facebook.com

name=Updated+Name+for+CA
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->post(
    '/<CUSTOM_AUDIENCE_ID>/',
    array (
      'name' => 'Updated Name for CA',
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
    "/<CUSTOM_AUDIENCE_ID>/",
    "POST",
    {
        "name": "Updated Name for CA"
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
params.putString("name", "Updated Name for CA");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/<CUSTOM_AUDIENCE_ID>/",
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
  @"name": @"Updated Name for CA",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/<CUSTOM_AUDIENCE_ID>/"
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
  -F 'name="Updated Name for CA"' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/<CUSTOM_AUDIENCE_ID>/
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=POST&path=%3CCUSTOM_AUDIENCE_ID%3E%2F%3Fname%3DUpdated%2BName%2Bfor%2BCA&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `allowed_domains`<br><br>*list<string>* | A list of domains that the audience is restricted to<br> |
| `claim_objective`<br><br>*enum {AUTOMOTIVE_MODEL, COLLABORATIVE_ADS, HOME_LISTING, MEDIA_TITLE, PRODUCT, TRAVEL, VEHICLE, VEHICLE_OFFER}* | Specifies the objective of audiences with `subtype=CLAIM`<br> |
| `content_type`<br><br>*enum {AUTOMOTIVE_MODEL, DESTINATION, FLIGHT, GENERIC, HOME_LISTING, HOTEL, LOCAL_SERVICE_BUSINESS, MEDIA_TITLE, OFFLINE_PRODUCT, PRODUCT, VEHICLE, VEHICLE_OFFER}* | Specifies a mandatory content type for `claim_objective`: `TRAVEL`, `AUTO_OFFER`, `HOME_LISTING`, `VEHICLE`.<br> |
| `customer_file_source`<br><br>*enum {USER_PROVIDED_ONLY, PARTNER_PROVIDED_ONLY, BOTH_USER_AND_PARTNER_PROVIDED}* | Source of customer information in the uploaded file<br> |
| `description`<br><br>*string* | The description for this custom audience<br> |
| `enable_fetch_or_create`<br><br>*boolean* | Fetch custom audience instead of create new<br>one when there exists custom audience with identical name, claim_objective,<br>content_type, event_source_group/event_sources/sliced_event_source_group,<br>inclusions, exclusions and rule<br> |
| `event_source_group`<br><br>*numeric string or integer* | Specifies a mandatory content type for `claim_objective`: `TRAVEL`, `AUTO_OFFER`, `HOME_LISTING`, `VEHICLE`.<br> |
| `event_sources`<br><br>*array<JSON object>* | Specifies a mandatory content type for `claim_objective`: `TRAVEL`, `AUTO_OFFER`, `HOME_LISTING`, `VEHICLE`.<br><br><br>`id` *int64*<br>id<br><br>**[required]**<br><br><br>`type` *enum {APP, OFFLINE_EVENTS, PAGE, PIXEL}*<br>type<br><br>**[required]**<br> |
| `lookalike_spec`<br><br>*JSON-encoded string* | The specification for creating a<br>[lookalike audience](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/lookalike-audiences)<br> |
| `name`<br><br>*string* | The name of this custom audience<br> |
| `opt_out_link`<br><br>*string* | Your opt-out URL so people can choose not to be targeted<br> |
| `product_set_id`<br><br>*numeric string or integer* | The Product Set to target with this audience<br> |
| `rule`<br><br>*string* | Audience rule to be applied on the referrer URL. Used for [website custom audiences](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/website-custom-audiences#audiencerules), [product audiences](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/dynamic-product-audiences#productaudience), and [video remarketing audiences](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/videoads#remarketing).<br> |
| `rule_aggregation`<br><br>*string* | Aggregation rule<br> |
| `use_for_products`<br><br>*list<enum {ADS, MARKETING_MESSAGES}>* | use_for_products<br> |
| `use_in_campaigns`<br><br>*boolean* | use_in_campaigns<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
success: bool,
message: string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 200 | Permissions error |
| 2650 | Failed to update the custom audience |
| 80003 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#custom-audience. |
| 190 | Invalid OAuth 2.0 Access Token |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |

### Deleting

**Warning:** When you delete a custom audience, it will be permanently removed from your account and your ads using it will stop running. You won't be able to restart any ads that used this audience in the past.

#### /{custom_audience_id}
You can delete a [CustomAudience](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience) by making a DELETE request to [/{custom_audience_id}](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience).

##### Example

#### HTTP
```
DELETE /v25.0/<CUSTOM_AUDIENCE_ID>/ HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->delete(
    '/<CUSTOM_AUDIENCE_ID>/',
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
    "/<CUSTOM_AUDIENCE_ID>/",
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
    "/<CUSTOM_AUDIENCE_ID>/",
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
                               initWithGraphPath:@"/<CUSTOM_AUDIENCE_ID>/"
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
  https://graph.facebook.com/v25.0/<CUSTOM_AUDIENCE_ID>/
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=DELETE&path=%3CCUSTOM_AUDIENCE_ID%3E%2F&version=v25.0)

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
| 2656 | Failed to delete custom audience because associated lookalikes exist |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 100 | Invalid parameter |
| 613 | Calls to this api have exceeded the rate limit. |

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/ad_accounts.md -->

## POST and DELETE Custom Audience Ad Accounts

**Warning:** ### Flagged custom conversions

If a custom conversion is flagged, the `is_unavailable` field will be set to `true`.

```html
{
  "is_unavailable": true,
  "id": "30141209892193360"
}
```

##### To resolve flagged custom conversions

If any of your custom conversions are flagged for suggesting information that is not allowed under our terms, you may want to consider the following options:

To resolve a flagged custom conversion in a new campaign creation:

* **Create new custom conversion**: Use a new custom conversion and make sure that it does not include information that is not allowed under our terms.
* **Choose a different custom conversion**: Select a different existing custom conversion and make sure it does not include information that is not allowed under our terms.

To resolve a flagged custom conversion in an existing campaign:

* **Duplicate your campaign and select an existing custom conversion**: If you have a running campaign that is flagged due to a flagged custom conversion, consider duplicating the campaign and selecting a different custom conversion that is not flagged before publishing the new duplicated campaign. **Note:** Once the campaign is published, you cannot remove or select a different custom conversion.

##### Request a review

If you believe your custom conversion has been flagged in error and doesn't include non-permitted information, you can request a review via Ads Manager under the campaigns table, or in Events Manager under the custom conversions page.

### Reading

You can't perform this operation on this endpoint.

### Creating

#### /{custom_audience_id}/ad_accounts
You can make a POST request to *ad_accounts* edge from the following paths:

- [/{custom_audience_id}/ad_accounts](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/ad_accounts)

When posting to this edge, an [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `adaccounts`<br><br>*list<numeric string>* | Array of new ad account IDs to receive access to the custom audience<br> |
| `permissions`<br><br>*string* | `targeting` or `targeting_and_insights`. If `targeting` the recipient ad account can target the audience in ads.        `targeting_and_insights` also allows recipient account to view the        audience in Audience Insights tool<br> |
| `relationship_type`<br><br>*array<string>* | relationship_type<br> |
| `replace`<br><br>*boolean* | `true` or `false`. If `true` the list of `adaccounts`<br>provided in the call will replace the existing set of ad accounts<br>this audience is shared with.<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
success: bool,
sharing_data:  List  [ Struct  {
ad_acct_id: string,
business_id: numeric string,
audience_share_status: string,
errors:  List  [string],
}],
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |

### Updating

You can't perform this operation on this endpoint.

### Deleting

#### /{custom_audience_id}/ad_accounts
You can dissociate an [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account) from a [CustomAudience](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience) by making a DELETE request to [/{custom_audience_id}/ad_accounts](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/ad_accounts).

##### Parameters

| Parameter | Description |
| --- | --- |
| `adaccounts`<br><br>*list<numeric string>* | Array of ad account IDs to revoke access to the custom audience<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/adaccounts.md -->

## GET Custom Audience Ad Accounts

### Reading

Custom audience ad accounts

##### Example

#### HTTP
```
GET /v25.0/{custom-audience-id}/adaccounts HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{custom-audience-id}/adaccounts',
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
    "/{custom-audience-id}/adaccounts",
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
    "/{custom-audience-id}/adaccounts",
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
                               initWithGraphPath:@"/{custom-audience-id}/adaccounts"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bcustom-audience-id%7D%2Fadaccounts&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `permissions`<br><br>*string* | Optional permission filter for the shared ad account IDs. Values can be `targeting` for getting account IDs with only targeting permissions, or `targeting_and_insights` to get account IDs with both targeting and insights permissions.If not set, it will return all shared ad account IDs.<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [CustomAudienceAdAccount](https://developers.facebook.com/docs/marketing-api/reference/custom-audience-ad-account) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

To share audiences with other ad accounts, a business must claim the owner ad account and recipient ad accounts.

The recipient ad account can include or exclude the shared custom audience in targeting spec. Optionally, the recipient ad account can also have the access to view the audience insights with the insights tool. If the optional permissions parameter is not set, the default is `targeting_and_insights`.

You can share audiences with other ad accounts via the [`ad_accounts`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/ad_accounts#Creating) edge.

**Warning:** The destination account cannot modify the audience or use it as a seed audience to create lookalikes.

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You **can** also unshare an audience with an ad account by specifying [`delete`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/ad_accounts#Deleting) to the same endpoint with the `ad_accounts` field set to the ad account you want to remove access. Any existing ads running from these accounts using this audience will be stopped and cannot be restarted.

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/ads.md -->

## Custom Audience Ads

### Reading

##### Example

#### HTTP
```
GET /v25.0/{custom-audience-id}/ads HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{custom-audience-id}/ads',
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
    "/{custom-audience-id}/ads",
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
    "/{custom-audience-id}/ads",
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
                               initWithGraphPath:@"/{custom-audience-id}/ads"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bcustom-audience-id%7D%2Fads&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `effective_status`<br><br>*list<string>* | Status of the ad<br> |
| `status`<br><br>*list<string>* | The effective status of the ad. The field returns the same value as 'effective_status', and is the suggested one to use.<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [Ad](https://developers.facebook.com/docs/graph-api/reference/adgroup) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 200 | Permissions error |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/capabilities.md -->

## Custom Audience Capabilities

### Reading

Implementation for POST

##### Example

#### HTTP
```
GET /v25.0/{custom-audience-id}/capabilities HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{custom-audience-id}/capabilities',
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
    "/{custom-audience-id}/capabilities",
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
    "/{custom-audience-id}/capabilities",
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
                               initWithGraphPath:@"/{custom-audience-id}/capabilities"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bcustom-audience-id%7D%2Fcapabilities&version=v25.0)

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

A list of [CustomAudienceCapabilities](https://developers.facebook.com/docs/marketing-api/reference/custom-audience-capabilities) nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/health.md -->

## Custom Audience Health

### Reading

This endpoint will expose the aggregated user value data that is shared via Audience API.

##### Example

#### HTTP
```
GET /v25.0/{custom-audience-id}/health HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{custom-audience-id}/health',
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
    "/{custom-audience-id}/health",
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
    "/{custom-audience-id}/health",
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
                               initWithGraphPath:@"/{custom-audience-id}/health"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bcustom-audience-id%7D%2Fhealth&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `calculated_date`<br><br>*string* | The UTC calculated date / click date associated with this information, this will be a string in the format “YYYY-MM-DD” i.e. “2025-01-01”<br> |
| `processed_date`<br><br>*string* | The UTC date on which the data was received, this will be a string in the format “YYYY-MM-DD” i.e. “2025-02-01”<br> |
| `value_aggregation_duration`<br><br>*int64* | The duration over which this value type was calculated<br> |
| `value_country`<br><br>*string* | The country associated to the value field<br> |
| `value_currency`<br><br>*string* | The currency associated to the value field<br> |
| `value_version`<br><br>*int64* | The value version of this calculation (e.g. V1 data, V2 data represented as 1 or 2 respectively)<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of CustomAudienceHealth nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/sessions.md -->

## Custom Audience Sessions

### Reading

##### Example

#### HTTP
```
GET /v25.0/{custom-audience-id}/sessions HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{custom-audience-id}/sessions',
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
    "/{custom-audience-id}/sessions",
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
    "/{custom-audience-id}/sessions",
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
                               initWithGraphPath:@"/{custom-audience-id}/sessions"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bcustom-audience-id%7D%2Fsessions&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `session_id`<br><br>*int64* | Session ID<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [CustomAudienceSession](https://developers.facebook.com/docs/marketing-api/reference/custom-audience-session) nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/shared_account_campaign_info.md -->

## Custom Audience Shared Account Campaign Info

### Reading

CustomAudienceSharedAccountCampaignInfo

##### Example

#### HTTP
```
GET /v25.0/{custom-audience-id}/shared_account_campaign_info HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{custom-audience-id}/shared_account_campaign_info',
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
    "/{custom-audience-id}/shared_account_campaign_info",
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
    "/{custom-audience-id}/shared_account_campaign_info",
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
                               initWithGraphPath:@"/{custom-audience-id}/shared_account_campaign_info"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bcustom-audience-id%7D%2Fshared_account_campaign_info&version=v25.0)

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

A list of CustomAudienceSharedAccountCampaignInfo nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/shared_account_info.md -->

## Custom Audience Shared Account Info

Information specific to each ad account that has access to a custom audience shared with the account. Includes sharing status for the audience, such as `SHARED`, `IN_PROGRESS` and `NOT_SHARED`.

Only audiences shared outside of your business are covered by sharing agreements. Therefore this field is `null` in all other cases to avoid confusion.

For information about sharing a custom audiences between businesse, see [Business Manager API, Sharing Custom Audiences between Business Managers](https://developers.facebook.com/docs/marketing-api/businessmanager/assets#share).

### Reading

CustomAudiencesharedAccountInfo

##### Example

#### HTTP
```
GET /v25.0/{custom-audience-id}/shared_account_info HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{custom-audience-id}/shared_account_info',
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
    "/{custom-audience-id}/shared_account_info",
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
    "/{custom-audience-id}/shared_account_info",
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
                               initWithGraphPath:@"/{custom-audience-id}/shared_account_info"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bcustom-audience-id%7D%2Fshared_account_info&version=v25.0)

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

A list of CustomAudiencesharedAccountInfo nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/users.md -->

## Custom Audience Users

Add people to your ad's audience with a hash of data from your business. See [Custom Audiences from CRM Data](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/custom-audiences).

**You can add an unlimited number of records for an audience, but only a maximum of 10000 at a time. Changes to your Custom Audiences don't happen immediately and usually take up to 24 hours.**

#### Flagged custom and lookalike audiences

If the audience is flagged with an `operation_status` of `471`, you must resolve the restrictions on the customer file custom audience before you can update or delete the user memberships. Attempts to edit user memberships without resolving the restrictions will result in an error.

```json
{
  "error": {
    "message": "Invalid parameter",
    "code": 100,
    "error_subcode": 1713230,
    "error_user_title": "Audience Upload Blocked",
    "error_user_msg": "Before updating user memberships, you must resolve integrity restrictions on this Data File Custom Audience. Go to Audience Manager to appeal the restrictions or create a new audience with updated data",
  },
}
```

### Reading

You can't perform this operation on this endpoint.

### Creating

You can't perform this operation on this endpoint.

### Updating

#### /{custom_audience_id}/users
You can update a [User](https://developers.facebook.com/docs/graph-api/reference/user) by making a POST request to [/{custom_audience_id}/users](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/users).

##### Example

#### HTTP
```
POST /v25.0/<CUSTOM_AUDIENCE_ID>/users HTTP/1.1
Host: graph.facebook.com

payload=%7B%22schema%22%3A%5B%22EMAIL%22%2C%22LOOKALIKE_VALUE%22%5D%2C%22data%22%3A%5B%5B%229b431636bd164765d63c573c346708846af4f68fe3701a77a3bdd7e7e5166254%22%2C44.5%5D%2C%5B%228cc62c145cd0c6dc444168eaeb1b61b351f9b1809a579cc9b4c9e9d7213a39ee%22%2C140%5D%2C%5B%224eaf70b1f7a797962b9d2a533f122c8039012b31e0a52b34a426729319cb792a%22%2C0%5D%2C%5B%2298df8d46f118f8bef552b0ec0a3d729466a912577830212a844b73960777ac56%22%2C0.9%5D%5D%7D
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->post(
    '/<CUSTOM_AUDIENCE_ID>/users',
    array (
      'payload' => '{"schema":["EMAIL","LOOKALIKE_VALUE"],"data":[["9b431636bd164765d63c573c346708846af4f68fe3701a77a3bdd7e7e5166254",44.5],["8cc62c145cd0c6dc444168eaeb1b61b351f9b1809a579cc9b4c9e9d7213a39ee",140],["4eaf70b1f7a797962b9d2a533f122c8039012b31e0a52b34a426729319cb792a",0],["98df8d46f118f8bef552b0ec0a3d729466a912577830212a844b73960777ac56",0.9]]}',
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
    "/<CUSTOM_AUDIENCE_ID>/users",
    "POST",
    {
        "payload": "{\"schema\":[\"EMAIL\",\"LOOKALIKE_VALUE\"],\"data\":[[\"9b431636bd164765d63c573c346708846af4f68fe3701a77a3bdd7e7e5166254\",44.5],[\"8cc62c145cd0c6dc444168eaeb1b61b351f9b1809a579cc9b4c9e9d7213a39ee\",140],[\"4eaf70b1f7a797962b9d2a533f122c8039012b31e0a52b34a426729319cb792a\",0],[\"98df8d46f118f8bef552b0ec0a3d729466a912577830212a844b73960777ac56\",0.9]]}"
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
params.putString("payload", "{\"schema\":[\"EMAIL\",\"LOOKALIKE_VALUE\"],\"data\":[[\"9b431636bd164765d63c573c346708846af4f68fe3701a77a3bdd7e7e5166254\",44.5],[\"8cc62c145cd0c6dc444168eaeb1b61b351f9b1809a579cc9b4c9e9d7213a39ee\",140],[\"4eaf70b1f7a797962b9d2a533f122c8039012b31e0a52b34a426729319cb792a\",0],[\"98df8d46f118f8bef552b0ec0a3d729466a912577830212a844b73960777ac56\",0.9]]}");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/<CUSTOM_AUDIENCE_ID>/users",
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
  @"payload": @"{\"schema\":[\"EMAIL\",\"LOOKALIKE_VALUE\"],\"data\":[[\"9b431636bd164765d63c573c346708846af4f68fe3701a77a3bdd7e7e5166254\",44.5],[\"8cc62c145cd0c6dc444168eaeb1b61b351f9b1809a579cc9b4c9e9d7213a39ee\",140],[\"4eaf70b1f7a797962b9d2a533f122c8039012b31e0a52b34a426729319cb792a\",0],[\"98df8d46f118f8bef552b0ec0a3d729466a912577830212a844b73960777ac56\",0.9]]}",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/<CUSTOM_AUDIENCE_ID>/users"
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
  -F 'payload={
       "schema": [
         "EMAIL",
         "LOOKALIKE_VALUE"
       ],
       "data": [
         [
           "9b431636bd164765d63c573c346708846af4f68fe3701a77a3bdd7e7e5166254",
           44.5
         ],
         [
           "8cc62c145cd0c6dc444168eaeb1b61b351f9b1809a579cc9b4c9e9d7213a39ee",
           140
         ],
         [
           "4eaf70b1f7a797962b9d2a533f122c8039012b31e0a52b34a426729319cb792a",
           0
         ],
         [
           "98df8d46f118f8bef552b0ec0a3d729466a912577830212a844b73960777ac56",
           0.9
         ]
       ]
     }' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/<CUSTOM_AUDIENCE_ID>/users
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=POST&path=%3CCUSTOM_AUDIENCE_ID%3E%2Fusers%3Fpayload%3D%257B%2522schema%2522%253A%255B%2522EMAIL%2522%252C%2522LOOKALIKE_VALUE%2522%255D%252C%2522data%2522%253A%255B%255B%25229b431636bd164765d63c573c346708846af4f68fe3701a77a3bdd7e7e5166254%2522%252C44.5%255D%252C%255B%25228cc62c145cd0c6dc444168eaeb1b61b351f9b1809a579cc9b4c9e9d7213a39ee%2522%252C140%255D%252C%255B%25224eaf70b1f7a797962b9d2a533f122c8039012b31e0a52b34a426729319cb792a%2522%252C0%255D%252C%255B%252298df8d46f118f8bef552b0ec0a3d729466a912577830212a844b73960777ac56%2522%252C0.9%255D%255D%257D&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `payload`<br><br>*Object* | Payload representing users to add<br><br><br>`schema` *string*<br>`EMAIL_SHA256`, `PHONE_SHA256`, `MOBILE_ADVERTISER_ID`. One can also pass an array of multiple keys for multi-key match. Supported key types includes: <br> `EXTERN_ID`<br>`EMAIL`<br>`PHONE`<br>`GEN`<br>`DOBY`<br>`DOBM`<br>`DOBD`<br>`LN`<br>`FN`<br>`FI`<br>`CT`<br>`ST`<br>`ZIP`<br>`MADID`<br>`COUNTRY`<br>The multi-key array is of the form `["EMAIL", "LN", "FN", "ZIP"]`<br><br><br>`is_raw` *boolean*<br>Is the key raw? If the keys are combinational keys like "LN_FN_ZIP", set this to `false`, otherwise set this to `true`. Default to false<br><br><br>`data` *list<JSON array>*<br>Array with users data. If the multi-key feature is used, a two-dimensional array of the form `[["<HASHED_EMAIL>", "<HASHED_FN>", "<HASHED_LN>", "<HASHED_ZIP>"], ["", "<HASHED_FN>", "<HASHED_LN>", "<HASHED_ZIP>"]]` should be passed.In case a key is unknown, it should be left blank.<br><br><br>`app_ids` *list<int>*<br>App ids used by the users being uploaded. This field is required when `schema` is a Facebook UID and the IDs were collected by an App integration. e.g. `[1234,5678]`<br><br><br>`page_ids` *list<Page ID>*<br>Page ids used by the users being uploaded. This field is required when `schema` is a Facebook UID and the IDs were collected by a Page webhook integration. e.g. `[1234,5678]`<br><br><br>`ig_account_ids` *list<numeric string or integer>*<br><br>`data_source` *Object*<br>Indicates by which method the custom audience was created, defined by the `type` and `subtype` of the `data_source`<br><br><br>`type` *enum {UNKNOWN, FILE_IMPORTED, EVENT_BASED, SEED_BASED, THIRD_PARTY_IMPORTED, COPY_PASTE, CONTACT_IMPORTER, HOUSEHOLD_AUDIENCE}*<br>Type of the custom audience<br><br><br>`sub_type` *enum {ANYTHING, NOTHING, HASHES, USER_IDS, HASHES_OR_USER_IDS, MOBILE_ADVERTISER_IDS, EXTERNAL_IDS, MULTI_HASHES, TOKENS, EXTERNAL_IDS_MIX, HOUSEHOLD_EXPANSION, SUBSCRIBER_LIST, WEB_PIXEL_HITS, MOBILE_APP_EVENTS, MOBILE_APP_COMBINATION_EVENTS, VIDEO_EVENTS, WEB_PIXEL_COMBINATION_EVENTS, PLATFORM, MULTI_DATA_EVENTS, IG_BUSINESS_EVENTS, STORE_VISIT_EVENTS, INSTANT_ARTICLE_EVENTS, FB_EVENT_SIGNALS, FACEBOOK_WIFI_EVENTS, AR_EXPERIENCE_EVENTS, AR_EFFECTS_EVENTS, MESSENGER_ONSITE_SUBSCRIPTION, WHATSAPP_SUBSCRIBER_POOL, MARKETPLACE_LISTINGS, AD_CAMPAIGN, GROUP_EVENTS, MESSAGE_CAMPAIGN, ENGAGEMENT_EVENT_USERS, CUSTOM_AUDIENCE_USERS, PAGE_FANS, CONVERSION_PIXEL_HITS, APP_USERS, S_EXPR, DYNAMIC_RULE, CAMPAIGN_CONVERSIONS, WEB_PIXEL_HITS_CUSTOM_AUDIENCE_USERS, MOBILE_APP_CUSTOM_AUDIENCE_USERS, COMBINATION_CUSTOM_AUDIENCE_USERS, VIDEO_EVENT_USERS, FB_PIXEL_HITS, IG_PROMOTED_POST, PLACE_VISITS, OFFLINE_EVENT_USERS, EXPANDED_AUDIENCE, SEED_LIST, PARTNER_CATEGORY_USERS, PAGE_SMART_AUDIENCE, MULTICOUNTRY_COMBINATION, PLATFORM_USERS, MULTI_EVENT_SOURCE, SMART_AUDIENCE, LOOKALIKE_PLATFORM, SIGNAL_SOURCE, MAIL_CHIMP_EMAIL_HASHES, CONSTANT_CONTACTS_EMAIL_HASHES, COPY_PASTE_EMAIL_HASHES, CUSTOM_DATA_TARGETING, CONTACT_IMPORTER, DATA_FILE}*<br>Subtype of the custom audience<br><br><br>`metadata` *Object*<br><br>`calculated_date` *datetime*<br><br>`schema_version` *string* |
| `session`<br><br>*Object* | Information about the session. Sessions are used when you<br>have a lot of users to upload. For example, if you have 1 million users<br>to upload, you need to split them into at least 100 requests because<br>each request can only take 10k users. Specify the session info so that<br>you can track if the session has finished or not.<br><br><br>`session_id` *int64*<br>Advertiser generated session identifier, used to track the session. Needs to be unique in the same ad account.<br><br><br>`estimated_num_total` *int64*<br>Estimated total num of users to be uploaded in this session, used by Facebook systems to better process this session.<br><br><br>`batch_seq` *int64*<br>A 1 based sequence number to identify the request in the session.<br><br><br>`last_batch_flag` *boolean*<br>`true` mean this request is the last request in this session. You must mark the last request otherwise Facebook doesn't know the session has ended<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
audience_id: numeric string,
session_id: numeric string,
num_received: int32,
num_invalid_entries: int32,
invalid_entry_samples:  Map  {
string: string},
subscription_info:  Struct  {
whatsapp:  Struct  {
error:  Struct  {
message: string,
code: int32,
},
num_subscribers_received: int32,
num_subscribers_invalid_entries: int32,
invalid_subscribers_entry_samples:  Map  {
string: string},
},
messenger:  Struct  {
error:  Struct  {
message: string,
code: int32,
},
num_subscribers_received: int32,
num_subscribers_invalid_entries: int32,
invalid_subscribers_entry_samples:  Map  {
string: string},
},
},
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 200 | Permissions error |
| 2650 | Failed to update the custom audience |
| 190 | Invalid OAuth 2.0 Access Token |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |
| 105 | The number of parameters exceeded the maximum for this operation |
| 194 | Missing at least one required parameter |

### Deleting

#### /{custom_audience_id}/users
You can dissociate a [User](https://developers.facebook.com/docs/graph-api/reference/user) from a [CustomAudience](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience) by making a DELETE request to [/{custom_audience_id}/users](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/users).

##### Parameters

| Parameter | Description |
| --- | --- |
| `payload`<br><br>*Object* | Payload representing users to delete<br><br><br>`schema` *string*<br>`EMAIL_SHA256`, `PHONE_SHA256`, `MOBILE_ADVERTISER_ID`. One can also pass an array of multiple keys for multi-key match. Supported key types includes: <br> `EXTERN_ID`<br>`EMAIL`<br>`PHONE`<br>`GEN`<br>`DOBY`<br>`DOBM`<br>`DOBD`<br>`LN`<br>`FN`<br>`FI`<br>`CT`<br>`ST`<br>`ZIP`<br>`MADID`<br>`COUNTRY`<br>The multi-key array is of the form `["EMAIL", "LN", "FN", "ZIP"]`<br><br><br>`is_raw` *boolean*<br>Is the key raw? If the keys are combinational keys like "LN_FN_ZIP", set this to `false`, otherwise set this to `true`. Default to false<br><br><br>`data` *list<JSON array>*<br>Array with users data. If the multi-key feature is used, a two-dimensional array of the form `[["<HASHED_EMAIL>", "<HASHED_FN>", "<HASHED_LN>", "<HASHED_ZIP>"], ["", "<HASHED_FN>", "<HASHED_LN>", "<HASHED_ZIP>"]]` should be passed.In case a key is unknown, it should be left blank.<br><br><br>`app_ids` *list<int>*<br>App ids used by the users being uploaded. This field is required when `schema` is a Facebook UID and the IDs were collected by an App integration. e.g. `[1234,5678]`<br><br><br>`page_ids` *list<Page ID>*<br>Page ids used by the users being uploaded. This field is required when `schema` is a Facebook UID and the IDs were collected by a Page webhook integration. e.g. `[1234,5678]`<br><br><br>`ig_account_ids` *list<numeric string or integer>*<br><br>`data_source` *Object*<br>Indicates by which method the custom audience was created, defined by the `type` and `subtype` of the `data_source`<br><br><br>`type` *enum {UNKNOWN, FILE_IMPORTED, EVENT_BASED, SEED_BASED, THIRD_PARTY_IMPORTED, COPY_PASTE, CONTACT_IMPORTER, HOUSEHOLD_AUDIENCE}*<br>Type of the custom audience<br><br><br>`sub_type` *enum {ANYTHING, NOTHING, HASHES, USER_IDS, HASHES_OR_USER_IDS, MOBILE_ADVERTISER_IDS, EXTERNAL_IDS, MULTI_HASHES, TOKENS, EXTERNAL_IDS_MIX, HOUSEHOLD_EXPANSION, SUBSCRIBER_LIST, WEB_PIXEL_HITS, MOBILE_APP_EVENTS, MOBILE_APP_COMBINATION_EVENTS, VIDEO_EVENTS, WEB_PIXEL_COMBINATION_EVENTS, PLATFORM, MULTI_DATA_EVENTS, IG_BUSINESS_EVENTS, STORE_VISIT_EVENTS, INSTANT_ARTICLE_EVENTS, FB_EVENT_SIGNALS, FACEBOOK_WIFI_EVENTS, AR_EXPERIENCE_EVENTS, AR_EFFECTS_EVENTS, MESSENGER_ONSITE_SUBSCRIPTION, WHATSAPP_SUBSCRIBER_POOL, MARKETPLACE_LISTINGS, AD_CAMPAIGN, GROUP_EVENTS, MESSAGE_CAMPAIGN, ENGAGEMENT_EVENT_USERS, CUSTOM_AUDIENCE_USERS, PAGE_FANS, CONVERSION_PIXEL_HITS, APP_USERS, S_EXPR, DYNAMIC_RULE, CAMPAIGN_CONVERSIONS, WEB_PIXEL_HITS_CUSTOM_AUDIENCE_USERS, MOBILE_APP_CUSTOM_AUDIENCE_USERS, COMBINATION_CUSTOM_AUDIENCE_USERS, VIDEO_EVENT_USERS, FB_PIXEL_HITS, IG_PROMOTED_POST, PLACE_VISITS, OFFLINE_EVENT_USERS, EXPANDED_AUDIENCE, SEED_LIST, PARTNER_CATEGORY_USERS, PAGE_SMART_AUDIENCE, MULTICOUNTRY_COMBINATION, PLATFORM_USERS, MULTI_EVENT_SOURCE, SMART_AUDIENCE, LOOKALIKE_PLATFORM, SIGNAL_SOURCE, MAIL_CHIMP_EMAIL_HASHES, CONSTANT_CONTACTS_EMAIL_HASHES, COPY_PASTE_EMAIL_HASHES, CUSTOM_DATA_TARGETING, CONTACT_IMPORTER, DATA_FILE}*<br>Subtype of the custom audience<br><br><br>`metadata` *Object*<br><br>`calculated_date` *datetime*<br><br>`schema_version` *string* |
| `session`<br><br>*Object* | Information about the session. Sessions are used when you<br>have a lot of users to upload. For example, if you have 1 million users<br>to upload, you need to split them into at least 100 requests because<br>each request can only take 10k users. Specify the session info so that<br>you can track if the session has finished or not.<br><br><br>`session_id` *int64*<br>Advertiser generated session identifier, used to track the session. Needs to be unique in the same ad account.<br><br><br>`estimated_num_total` *int64*<br>Estimated total num of users to be uploaded in this session, used by Facebook systems to better process this session.<br><br><br>`batch_seq` *int64*<br>A 1 based sequence number to identify the request in the session.<br><br><br>`last_batch_flag` *boolean*<br>`true` mean this request is the last request in this session. You must mark the last request otherwise Facebook doesn't know the session has ended<br> |

##### Return Type

```
Struct  {
audience_id: numeric string,
session_id: numeric string,
num_received: int32,
num_invalid_entries: int32,
invalid_entry_samples:  Map  {
string: string},
subscription_info:  Struct  {
whatsapp:  Struct  {
error:  Struct  {
message: string,
code: int32,
},
num_subscribers_received: int32,
num_subscribers_invalid_entries: int32,
invalid_subscribers_entry_samples:  Map  {
string: string},
},
messenger:  Struct  {
error:  Struct  {
message: string,
code: int32,
},
num_subscribers_received: int32,
num_subscribers_invalid_entries: int32,
invalid_subscribers_entry_samples:  Map  {
string: string},
},
},
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 80003 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#custom-audience. |
| 100 | Invalid parameter |
| 200 | Permissions error |
| 2650 | Failed to update the custom audience |
| 190 | Invalid OAuth 2.0 Access Token |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/usersreplace.md -->

## Custom Audience Usersreplace

#### Flagged custom and lookalike audiences

If the audience is flagged with an `operation_status` of `471`, you must resolve the restrictions on the customer file custom audience before you can update or delete the user memberships. Attempts to edit user memberships without resolving the restrictions will result in an error.

```json
{
  "error": {
    "message": "Invalid parameter",
    "code": 100,
    "error_subcode": 1713230,
    "error_user_title": "Audience Upload Blocked",
    "error_user_msg": "Before updating user memberships, you must resolve integrity restrictions on this Data File Custom Audience. Go to Audience Manager to appeal the restrictions or create a new audience with updated data",
  },
}
```

### Reading

You can't perform this operation on this endpoint.

### Creating

#### /{custom_audience_id}/usersreplace
You can make a POST request to *usersreplace* edge from the following paths:

- [/{custom_audience_id}/usersreplace](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/usersreplace)

When posting to this edge, no Graph object will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `namespace`<br><br>*string* | namespace<br> |
| `payload`<br><br>*Object* | payload<br><br>**[required]**<br><br><br>`schema` *string*<br>`EMAIL_SHA256`, `PHONE_SHA256`, `MOBILE_ADVERTISER_ID`. One can also pass an array of multiple keys for multi-key match. Supported key types includes: <br> `EXTERN_ID`<br>`EMAIL`<br>`PHONE`<br>`GEN`<br>`DOBY`<br>`DOBM`<br>`DOBD`<br>`LN`<br>`FN`<br>`FI`<br>`CT`<br>`ST`<br>`ZIP`<br>`MADID`<br>`COUNTRY`<br>The multi-key array is of the form `["EMAIL", "LN", "FN", "ZIP"]`<br><br><br>`is_raw` *boolean*<br>Is the key raw? If the keys are combinational keys like "LN_FN_ZIP", set this to `false`, otherwise set this to `true`. Default to false<br><br><br>`data` *list<JSON array>*<br>Array with users data. If the multi-key feature is used, a two-dimensional array of the form `[["<HASHED_EMAIL>", "<HASHED_FN>", "<HASHED_LN>", "<HASHED_ZIP>"], ["", "<HASHED_FN>", "<HASHED_LN>", "<HASHED_ZIP>"]]` should be passed.In case a key is unknown, it should be left blank.<br><br><br>`app_ids` *list<int>*<br>App ids used by the users being uploaded. This field is required when `schema` is a Facebook UID and the IDs were collected by an App integration. e.g. `[1234,5678]`<br><br><br>`page_ids` *list<Page ID>*<br>Page ids used by the users being uploaded. This field is required when `schema` is a Facebook UID and the IDs were collected by a Page webhook integration. e.g. `[1234,5678]`<br><br><br>`ig_account_ids` *list<numeric string or integer>*<br><br>`data_source` *Object*<br>Indicates by which method the custom audience was created, defined by the `type` and `subtype` of the `data_source`<br><br><br>`type` *enum {UNKNOWN, FILE_IMPORTED, EVENT_BASED, SEED_BASED, THIRD_PARTY_IMPORTED, COPY_PASTE, CONTACT_IMPORTER, HOUSEHOLD_AUDIENCE}*<br>Type of the custom audience<br><br><br>`sub_type` *enum {ANYTHING, NOTHING, HASHES, USER_IDS, HASHES_OR_USER_IDS, MOBILE_ADVERTISER_IDS, EXTERNAL_IDS, MULTI_HASHES, TOKENS, EXTERNAL_IDS_MIX, HOUSEHOLD_EXPANSION, SUBSCRIBER_LIST, WEB_PIXEL_HITS, MOBILE_APP_EVENTS, MOBILE_APP_COMBINATION_EVENTS, VIDEO_EVENTS, WEB_PIXEL_COMBINATION_EVENTS, PLATFORM, MULTI_DATA_EVENTS, IG_BUSINESS_EVENTS, STORE_VISIT_EVENTS, INSTANT_ARTICLE_EVENTS, FB_EVENT_SIGNALS, FACEBOOK_WIFI_EVENTS, AR_EXPERIENCE_EVENTS, AR_EFFECTS_EVENTS, MESSENGER_ONSITE_SUBSCRIPTION, WHATSAPP_SUBSCRIBER_POOL, MARKETPLACE_LISTINGS, AD_CAMPAIGN, GROUP_EVENTS, MESSAGE_CAMPAIGN, ENGAGEMENT_EVENT_USERS, CUSTOM_AUDIENCE_USERS, PAGE_FANS, CONVERSION_PIXEL_HITS, APP_USERS, S_EXPR, DYNAMIC_RULE, CAMPAIGN_CONVERSIONS, WEB_PIXEL_HITS_CUSTOM_AUDIENCE_USERS, MOBILE_APP_CUSTOM_AUDIENCE_USERS, COMBINATION_CUSTOM_AUDIENCE_USERS, VIDEO_EVENT_USERS, FB_PIXEL_HITS, IG_PROMOTED_POST, PLACE_VISITS, OFFLINE_EVENT_USERS, EXPANDED_AUDIENCE, SEED_LIST, PARTNER_CATEGORY_USERS, PAGE_SMART_AUDIENCE, MULTICOUNTRY_COMBINATION, PLATFORM_USERS, MULTI_EVENT_SOURCE, SMART_AUDIENCE, LOOKALIKE_PLATFORM, SIGNAL_SOURCE, MAIL_CHIMP_EMAIL_HASHES, CONSTANT_CONTACTS_EMAIL_HASHES, COPY_PASTE_EMAIL_HASHES, CUSTOM_DATA_TARGETING, CONTACT_IMPORTER, DATA_FILE}*<br>Subtype of the custom audience<br><br><br>`metadata` *Object*<br><br>`calculated_date` *datetime*<br><br>`schema_version` *string* |
| `session`<br><br>*Object* | session<br><br>**[required]**<br><br><br>`session_id` *int64*<br>Advertiser generated session identifier, used to track the session. Needs to be unique in the same ad account.<br><br><br>`estimated_num_total` *int64*<br>Estimated total num of users to be uploaded in this session, used by Facebook systems to better process this session.<br><br><br>`batch_seq` *int64*<br>A 1 based sequence number to identify the request in the session.<br><br><br>`last_batch_flag` *boolean*<br>`true` mean this request is the last request in this session. You must mark the last request otherwise Facebook doesn't know the session has ended<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
audience_id: numeric string,
session_id: numeric string,
num_received: int32,
num_invalid_entries: int32,
invalid_entry_samples:  Map  {
string: string},
subscription_info:  Struct  {
whatsapp:  Struct  {
error:  Struct  {
message: string,
code: int32,
},
num_subscribers_received: int32,
num_subscribers_invalid_entries: int32,
invalid_subscribers_entry_samples:  Map  {
string: string},
},
messenger:  Struct  {
error:  Struct  {
message: string,
code: int32,
},
num_subscribers_received: int32,
num_subscribers_invalid_entries: int32,
invalid_subscribers_entry_samples:  Map  {
string: string},
},
},
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 2650 | Failed to update the custom audience |
| 100 | Invalid parameter |
| 200 | Permissions error |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 190 | Invalid OAuth 2.0 Access Token |
| 80003 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#custom-audience. |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.
