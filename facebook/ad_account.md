# Ad Account

> Source: Meta Marketing API reference (79 pages). Fetched 2026-11-18.


---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account.md -->

## Ad Account

Represents a business, person or other entity who creates and manages ads on Facebook. Multiple people can manage an account, and each person can have one or more levels of access to an account, see [Business Manager API](https://developers.facebook.com/docs/marketing-api/business-manager-api).

**Success:** In response to Apple’s new policy, we are announcing breaking changes that will affect SDKAdNetwork, Marketing API and Ads Insights API endpoints.

To learn more about how Apple’s iOS 14.5 requirements will impact Facebook advertising, visit our Business Help Center aricles and changelog:

* [Facebook SDK for iOS, App Events API and Mobile Measurement Partners Updates for Apple's iOS 14 Requirements](https://www.facebook.com/business/help/2750680505215705?id=428636648170202)
* [Facebook Pixel Updates for Apple's iOS 14 Requirements](https://www.facebook.com/business/help/721422165168355)
* [January 19, 2021 - Breaking Changes](https://developers.facebook.com/docs/graph-api/changelog/non-versioned-changes/jan-19-2021)

**Warning:** The `agency_client_declaration` field requires [Admin privileges](https://www.facebook.com/business/help/442345745885606?id=180505742745347) for all operations starting with v10.0 and will be required for all versions on May 25, 2021.

### Ad Volume {#volume}

You can view the volume of ads *running or in review* for your ad accounts. These ads will count against the ads limit per page that we will enact in early 2021. Query the number of ads running or in review for a given ad account.

**Note:** Ad Limit Per Page enforcement begins for when a Page reaches its ad limit enforcement date. Enforcement date can be queried [here](https://developers.facebook.com/documentation/ads-commerce/marketing-api/insights-api/ads-volume).

When a Page is at its ad limit:

- New ads (or ads scheduled to begin at that time) do not publish successfully.
- Actions on existing ads are limited to pausing and archiving until the number of ads running or in review is below the ad limit.

To see the ads volume for your ad account:

```
curl -G
  -d "access_token=<access_token>"
  "https://graph.facebook.com/<API_VERSION>/act_<ad_account_ID>/ads_volume"
```

The response looks like this:

```
{"data":[{"ads_running_or_in_review_count":2}]}
```

For information on managing ads volume, see [About Managing Ad Volume](https://www.facebook.com/business/help/2720085414702598).

#### Running Or In Review
To see if an ad is running or in review, we check `effective_status`, `configured_status`, and the ad account's status:

* If an ad has `effective_status` of `1` - `active`, we consider it a *running* or *in review*.
* If an ad has `configured_status` of `active` and `effective_status` of `9` - `pending review`, or `17` - `pending processing` we consider it a *running* or *in review*.
* The ad can be *running* or *in review* only if the ad account status is in `1` - `active`, `8` - `pending settlement`, `9` - `in grace period`.

We also determine if an ad is running or in review based on the ad set's schedule.

* If start time is before current time, and current time is before end time, then we consider the ad running or in review.
* If start time is before current time and the ad set has no end time, we also consider it running or in review.

For example, if the ad set is scheduled to run in the future, the ads are not running or in review. However if the ad set is scheduled to run from now until three months from now, we consider the ads running or in review.

If you are using special ads scheduling features, such as *day-parting*, we consider the ad running or in review the *whole day*, not just for the part of the day when the ad starts running.

#### Breakdown By Actors {#breakdown-by-actors}

We’ve added the `show_breakdown_by_actor ` parameter to the `act_123/ads_volume` endpoint so you can query ad volume and ad limits-related information for each page. For more details, see [Breakdown by Actors](https://developers.facebook.com/documentation/ads-commerce/marketing-api/insights-api/ads-volume#breakdown-by-actors).

#### Limits {#limits}

| Limit | Value |
| --- | --- |
| Maximum number of ad accounts per person | 25 |
| Maximum number of people with access, per ad account | 25 |
| Maximum number of ads per regular ad account | 6,000 non-archived non-deleted ads |
| Maximum number of ads per bulk ad account | 50,000 non-archived non-deleted ads |
| Maximum number of archived ads per ad account | 100,000 archived ads |
| Maximum number of ad sets per regular ad account | 6,000 non-archived non-deleted ad sets |
| Maximum number of ad sets per bulk ad account | 10,000 non-archived non-deleted ad sets |
| Maximum number of archived ad sets per ad account | 100,000 archived ad sets |
| Maximum number of ad campaigns per regular ad account | 6,000 non-archived non-deleted ad campaigns |
| Maximum number of ad campaigns per bulk ad account | 10,000 non-archived non-deleted ad campaigns |
| Maximum number of archived ad campaigns per ad account | 100,000 archived ad campaigns |
| Maximum number of images per ad account | Unlimited |

### Reading

An ad account is an account used for managing ads on Facebook

#### Digital Services Act Saved Beneficiary/Payor Information

Use the following code examples to download the beneficiary and payor information.

##### Android SDK

```
GraphRequest request = GraphRequest.newGraphPathRequest(
 accessToken,
 "/act_<AD_ACCOUNT_ID>",
 new GraphRequest.Callback() {
   @Override
   public void onCompleted(GraphResponse response) {
     // Insert your code here
   }
});

Bundle parameters = new Bundle();
parameters.putString("fields", "default_dsa_payor,default_dsa_beneficiary");
request.setParameters(parameters);
request.executeAsync();
iOS SDK
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
    initWithGraphPath:@"/act_<AD_ACCOUNT_ID>"
           parameters:@{ @"fields": @"default_dsa_payor,default_dsa_beneficiary",}
           HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection, id result, NSError *error) {
    // Insert your code here
}];
Javascript SDK:
FB.api(
  '/act_<AD_ACCOUNT_ID>',
  'GET',
  {"fields":"default_dsa_payor,default_dsa_beneficiary"},
  function(response) {
      // Insert your code here
  }
);
```

##### cURL

```
curl -X GET \
"https://graph.facebook.com/v27.0/act_<AD_ACCOUNT_ID>?fields=default_dsa_payor%2Cdefault_dsa_beneficiary&access_token=<ACCESS_TOKEN>"
```

The return value is in JSON format. For example:

```
{"default_dsa_payor":"payor2","default_dsa_beneficiary":"bene2","id":"act_426197654150180"}
```

##### Parameters

This endpoint doesn't have any parameters.

##### Fields

| Field | Description |
| --- | --- |
| `id`<br><br>*string* | The string `act_{ad_account_id}`.<br><br><br>**[default]**<br> |
| `account_id`<br><br>*numeric string* | The ID of the Ad Account.<br><br><br>**[default]**<br> |
| `account_status`<br><br>*unsigned int32* | Status of the account: <br>`1 = ACTIVE`<br>`2 = DISABLED`<br>`3 = UNSETTLED`<br>`7 = PENDING_RISK_REVIEW`<br>`8 = PENDING_SETTLEMENT`<br>`9 = IN_GRACE_PERIOD`<br>`100 = PENDING_CLOSURE`<br>`101 = CLOSED`<br>`201 = ANY_ACTIVE`<br>`202 = ANY_CLOSED`<br> |
| `ad_account_promotable_objects`<br><br>*[AdAccountPromotableObjects](https://developers.facebook.com/docs/graph-api/reference/ad-account-promotable-objects)* | Ad Account creation request purchase order fields associated with this Ad Account.<br> |
| `age`<br><br>*float* | Amount of time the ad account has been open, in days.<br> |
| `agency_client_declaration`<br><br>*[AgencyClientDeclaration](https://developers.facebook.com/docs/marketing-api/reference/agency-client-declaration)* | Details of the agency advertising on behalf of this client account, if applicable. Requires Business Manager [Admin](https://www.facebook.com/business/help/442345745885606?id=180505742745347) privileges.<br> |
| `amount_spent`<br><br>*numeric string* | Current amount spent by the account with respect to `spend_cap`. Or total amount in the absence of `spend_cap`. See [why amount spent is different in ad account spending limit](https://business.facebook.com/business/help/196476577203529?id=1792465934137726) for more info.<br> |
| `attribution_spec`<br><br>*list<AttributionSpec>* | **Deprecated due to iOS 14 changes.** Please visit the [changelog](https://developers.facebook.com/docs/graph-api/changelog/non-versioned-changes/jan-19-2021) for more information.<br> |
| `balance`<br><br>*numeric string* | Bill amount due for this Ad Account.<br> |
| `brand_safety_content_filter_levels`<br><br>*list<string>* | Brand safety content filter levels set for in-content ads (Facebook in-stream videos and Ads on Facebook Reels) and Audience Network along with feed ads (Facebook Feed, Instagram feed, Facebook Reels feed and Instagram Reels feed) if applicable.<br><br><br>Refer to [Placement Targeting](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/placement-targeting#placement-targeting) for a list of supported values.<br> |
| `business`<br><br>*[Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business)* | The [Business Manager](https://developers.facebook.com/docs/marketing-api/businessmanager), if this ad account is owned by one<br> |
| `business_city`<br><br>*string* | City for business address<br> |
| `business_country_code`<br><br>*string* | Country code for the business address<br> |
| `business_name`<br><br>*string* | The business name for the account<br> |
| `business_state`<br><br>*string* | State abbreviation for business address<br> |
| `business_street`<br><br>*string* | First line of the business street address for the account<br> |
| `business_street2`<br><br>*string* | Second line of the business street address for the account<br> |
| `business_zip`<br><br>*string* | Zip code for business address<br> |
| `can_create_brand_lift_study`<br><br>*bool* | If we can create a new automated brand lift study under the Ad Account.<br> |
| `capabilities`<br><br>*list<string>* | List of capabilities an Ad Account can have. See [capabilities](https://developers.facebook.com/docs/marketing-api/reference/ad-account/capabilities)<br> |
| `created_time`<br><br>*datetime* | The time the account was created in ISO 8601 format.<br> |
| `currency`<br><br>*string* | The currency used for the account, based on the corresponding value in the account settings. See [supported currencies](https://developers.facebook.com/documentation/ads-commerce/marketing-api/currencies)<br> |
| `default_dsa_beneficiary`<br><br>*string* | This is the default value for creating L2 object of dsa_beneficiary<br> |
| `default_dsa_payor`<br><br>*string* | This is the default value for creating L2 object of dsa_payor<br> |
| `direct_deals_tos_accepted`<br><br>*bool* | Whether DirectDeals ToS are accepted.<br> |
| `disable_reason`<br><br>*unsigned int32* | The reason why the account was disabled. Possible reasons are:<br><br>`0 = NONE`<br><br>`1 = ADS_INTEGRITY_POLICY`<br><br>`2 = ADS_IP_REVIEW`<br><br>`3 = RISK_PAYMENT`<br><br>`4 = GRAY_ACCOUNT_SHUT_DOWN`<br><br>`5 = ADS_AFC_REVIEW`<br><br>`6 = BUSINESS_INTEGRITY_RAR`<br><br>`7 = PERMANENT_CLOSE`<br><br>`8 = UNUSED_RESELLER_ACCOUNT`<br><br>`9 = UNUSED_ACCOUNT`<br><br>`10 = UMBRELLA_AD_ACCOUNT`<br><br>`11 = BUSINESS_MANAGER_INTEGRITY_POLICY`<br><br>`12 = MISREPRESENTED_AD_ACCOUNT`<br><br>`13 = AOAB_DESHARE_LEGAL_ENTITY`<br><br>`14 = CTX_THREAD_REVIEW`<br><br>`15 = COMPROMISED_AD_ACCOUNT`<br> |
| `end_advertiser`<br><br>*numeric string* | The entity the ads will target. Must be a Facebook Page Alias, Facebook Page ID or an Facebook App ID.<br> |
| `end_advertiser_name`<br><br>*string* | The name of the entity the ads will target.<br> |
| `existing_customers`<br><br>*list<string>* | The custom audience ids that are used by advertisers to define their existing customers. This definition is primarily used by Automated Shopping Ads.<br> |
| `expired_funding_source_details`<br><br>*[FundingSourceDetails](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account)* | `ID` = ID of the payment method<br><br>`COUPON` = Details of the Facebook Ads Coupon from the payment method<br><br>`COUPONS` = List of active Facebook Ads Coupon from the ad account<br><br>`COUPON_ID` = ID of the Facebook Ads Coupon<br><br>`AMOUNT` = Amount of Facebook Ads Coupon<br><br>`CURRENCY` = Currency of the Facebook Ads Coupon<br><br>`DISPLAY_AMOUNT` = How the amount of Facebook Ads Coupon is displayed<br><br>`EXPIRATION` = When the coupon expired<br><br>`START_DATE` = When the coupon started<br><br>`DISPLAY_STRING` = How the payment method is shown<br><br>`CAMPAIGN_IDS` = List of campaigns the coupon can be applied to, empty if the coupon is applied on the ad account level.<br><br>`ORIGINAL_AMOUNT` = Amount of Facebook Ads Coupon When Issued<br><br>`ORIGINAL_DISPLAY_AMOUNT` = How the Facebook Ads Coupon displayed When Issued<br><br>`TYPE` = Type of the funding source<br><br>`0 = UNSET`<br><br>`1 = CREDIT_CARD`<br><br>`2 = FACEBOOK_WALLET`<br><br>`3 = FACEBOOK_PAID_CREDIT`<br><br>`4 = FACEBOOK_EXTENDED_CREDIT`<br><br>`5 = ORDER`<br><br>`6 = INVOICE`<br><br>`7 = FACEBOOK_TOKEN`<br><br>`8 = EXTERNAL_FUNDING`<br><br>`9 = FEE`<br><br>`10 = FX`<br><br>`11 = DISCOUNT`<br><br>`12 = PAYPAL_TOKEN`<br><br>`13 = PAYPAL_BILLING_AGREEMENT`<br><br>`14 = FS_NULL`<br><br>`15 = EXTERNAL_DEPOSIT`<br><br>`16 = TAX`<br><br>`17 = DIRECT_DEBIT`<br><br>`18 = DUMMY`<br><br>`19 = ALTPAY`<br><br>`20 = STORED_BALANCE`<br><br><br>To access this field, the user making the API call must have a `MANAGE` task permission for that specific ad account. See [Ad Account, Assigned Users](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/assigned_users) for more information.<br> |
| `extended_credit_invoice_group`<br><br>*[ExtendedCreditInvoiceGroup](https://developers.facebook.com/docs/marketing-api/reference/extended-credit-invoice-group)* | The extended credit invoice group that the ad account belongs to<br> |
| `failed_delivery_checks`<br><br>*[list<DeliveryCheck>](https://developers.facebook.com/docs/marketing-api/adgroup/deliverychecks)* | Failed delivery checks<br> |
| `fb_entity`<br><br>*unsigned int32* | fb_entity<br> |
| `funding_source`<br><br>*numeric string* | ID of the payment method. If the account does not have a payment method it will still be possible to create ads but these ads will get no delivery. Not available if the account is disabled<br> |
| `funding_source_details`<br><br>*[FundingSourceDetails](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account)* | `ID` = ID of the payment method<br><br>`COUPON` = Details of the Facebook Ads Coupon from the payment method<br><br>`COUPONS` = List of active Facebook Ads Coupon from the ad account<br><br>`COUPON_ID` = ID of the Facebook Ads Coupon<br><br>`AMOUNT` = Amount of Facebook Ads Coupon<br><br>`CURRENCY` = Currency of the Facebook Ads Coupon<br><br>`DISPLAY_AMOUNT` = How the amount of Facebook Ads Coupon is displayed<br><br>`EXPIRATION` = When the coupon will expire<br><br>`START_DATE` = When the coupon starts<br><br>`DISPLAY_STRING` = How the payment method is shown<br><br>`CAMPAIGN_IDS` = List of campaigns the coupon can be applied to, empty if the coupon is applied on the ad account level.<br><br>`ORIGINAL_AMOUNT` = Amount of Facebook Ads Coupon When Issued<br><br>`ORIGINAL_DISPLAY_AMOUNT` = How the Facebook Ads Coupon displayed When Issued<br><br>`TYPE` = Type of the funding source<br><br>`0 = UNSET`<br><br>`1 = CREDIT_CARD`<br><br>`2 = FACEBOOK_WALLET`<br><br>`3 = FACEBOOK_PAID_CREDIT`<br><br>`4 = FACEBOOK_EXTENDED_CREDIT`<br><br>`5 = ORDER`<br><br>`6 = INVOICE`<br><br>`7 = FACEBOOK_TOKEN`<br><br>`8 = EXTERNAL_FUNDING`<br><br>`9 = FEE`<br><br>`10 = FX`<br><br>`11 = DISCOUNT`<br><br>`12 = PAYPAL_TOKEN`<br><br>`13 = PAYPAL_BILLING_AGREEMENT`<br><br>`14 = FS_NULL`<br><br>`15 = EXTERNAL_DEPOSIT`<br><br>`16 = TAX`<br><br>`17 = DIRECT_DEBIT`<br><br>`18 = DUMMY`<br><br>`19 = ALTPAY`<br><br>`20 = STORED_BALANCE`<br><br><br>To access this field, the user making the API call must have a `MANAGE` task permission for that specific ad account. See [Ad Account, Assigned Users](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/assigned_users) for more information.<br> |
| `has_migrated_permissions`<br><br>*bool* | Whether this account has migrated permissions<br> |
| `has_page_authorized_adaccount`<br><br>*bool* | Indicates whether a Facebook page has authorized this ad account to place ads with political content. If you try to place an ad with political content using this ad account for this page, and this page has not authorized this ad account for ads with political content, your ad will be disapproved. See [Breaking Changes, Marketing API, Ads with Political Content](https://developers.facebook.com/docs/graph-api/changelog/breaking-changes#4-23-2018) and [Facebook Advertising Policies](https://www.facebook.com/policies/ads)<br> |
| `io_number`<br><br>*numeric string* | The Insertion Order (IO) number.<br> |
| `is_attribution_spec_system_default`<br><br>*bool* | If the attribution specification of ad account is generated from system default values<br> |
| `is_direct_deals_enabled`<br><br>*bool* | Whether the account is enabled to run Direct Deals<br> |
| `is_in_3ds_authorization_enabled_market`<br><br>*bool* | If the account is in a market requiring to go through payment process going through 3DS authorization<br> |
| `is_notifications_enabled`<br><br>*bool* | Get the notifications status of the user for this ad account. This will return true or false depending if notifications are enabled or not<br> |
| `is_personal`<br><br>*unsigned int32* | Indicates if this ad account is being used for private, non-business purposes. This affects how value-added tax (VAT) is assessed. **Note:** This is not related to whether an ad account is attached to a business.<br> |
| `is_prepay_account`<br><br>*bool* | If this ad account is a prepay. Other option would be a postpay account.<br><br><br>To access this field, the user making the API call must have a `ADVERTISE` or `MANAGE` task permission for that specific ad account. See [Ad Account, Assigned Users](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/assigned_users) for more information.<br> |
| `is_tax_id_required`<br><br>*bool* | If tax id for this ad account is required or not.<br><br><br>To access this field, the user making the API call must have a `ADVERTISE` or `MANAGE` task permission for that specific ad account. See [Ad Account, Assigned Users](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/assigned_users) for more information.<br> |
| `line_numbers`<br><br>*list<integer>* | The line numbers<br> |
| `marketing_messages_settings`<br><br>*[AdAccountMarketingMessagesSettings](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account-marketing-messages-settings)* | Marketing messages configuration for the ad account.<br> |
| `media_agency`<br><br>*numeric string* | The agency, this could be your own business. Must be a Facebook Page Alias, Facebook Page ID or an Facebook App ID. In absence of one, you can use `NONE` or `UNFOUND`.<br> |
| `min_campaign_group_spend_cap`<br><br>*numeric string* | The minimum required spend cap of Ad Campaign.<br> |
| `min_daily_budget`<br><br>*unsigned int32* | The minimum daily budget for this Ad Account<br> |
| `name`<br><br>*string* | Name of the account. If not set, the name of the first admin visible to the user will be returned.<br> |
| `offsite_clo_signal_status`<br><br>*int32* | offsite_clo_signal_status<br> |
| `offsite_pixels_tos_accepted`<br><br>*bool* | Indicates whether the offsite pixel Terms Of Service contract was signed. This feature can be accessible before v2.9<br> |
| `opportunity_score`<br><br>*float* | On a 0-100 point scale, this score represents how optimized the ad account's campaigns, ad sets and ads are overall.<br><br><br>See [Opportunity Score](https://web.facebook.com/business/tools/opportunity-score) to learn more.<br> |
| `opportunity_score_weight`<br><br>*integer* | This opportunity score weight represent the remaining budget for the ad account in cents, computed daily. This can be used with other ad accounts within the same business to compute the weighted opportunity score for a business.<br><br><br>See [Opportunity Score](https://web.facebook.com/business/tools/opportunity-score) to learn more about opportunity score.<br> |
| `owner`<br><br>*numeric string* | The ID of the account owner<br> |
| `partner`<br><br>*numeric string* | This could be Facebook Marketing Partner, if there is one. Must be a Facebook Page Alias, Facebook Page ID or an Facebook App ID. In absence of one, you can use `NONE` or `UNFOUND`.<br> |
| `rf_spec`<br><br>*ReachFrequencySpec* | Reach and Frequency limits configuration. [See Reach and Frequency](https://developers.facebook.com/docs/marketing-api/reachandfrequency)<br> |
| `show_checkout_experience`<br><br>*bool* | Whether or not to show the pre-paid checkout experience to an advertiser. If `true`, the advertiser is eligible for checkout, or they are already locked in to checkout and haven't graduated to postpay.<br> |
| `spend_cap`<br><br>*numeric string* | The maximum amount that can be spent by this Ad Account. When the amount is reached, all delivery stops. A value of `0` means no spending-cap. Setting a new spend cap only applies to spend **AFTER** the time at which you set it. Value specified in basic unit of the currency, for example 'cents' for `USD`.<br> |
| `tax_id`<br><br>*string* | Tax ID<br> |
| `tax_id_status`<br><br>*unsigned int32* | VAT status code for the account.<br>`0`: Unknown<br>`1`: VAT not required- US/CA<br>`2`: VAT information required<br>`3`: VAT information submitted<br>`4`: Offline VAT validation failed<br>`5`: Account is a personal account<br> |
| `tax_id_type`<br><br>*string* | Type of Tax ID<br> |
| `timezone_id`<br><br>*unsigned int32* | The [timezone ID](https://developers.facebook.com/docs/marketing-api/reference/ad-account/timezone-ids) of this ad account<br> |
| `timezone_name`<br><br>*string* | Name for the time zone<br> |
| `timezone_offset_hours_utc`<br><br>*float* | Time zone difference from UTC (Coordinated Universal Time).<br> |
| `tos_accepted`<br><br>*map<string, int32>* | Checks if this specific ad account has signed the Terms of Service contracts. Returns `1`, if terms were accepted.<br> |
| `user_tasks`<br><br>*list<string>* | user_tasks<br> |
| `user_tos_accepted`<br><br>*map<string, int32>* | Checks if a user has signed the Terms of Service contracts related to the Business that contains a specific ad account. Must include user's access token to get information. This verification is not valid for [system users](https://developers.facebook.com/docs/marketing-api/businessmanager/systemuser).<br> |

##### Edges

| Edge | Description |
| --- | --- |
| [`account_controls`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/account_controls)<br><br>*Edge<AdAccountBusinessConstraints>* | Account Controls is for Advantage+ shopping campaigns where advertisers can set audience controls for minimum age and excluded geo location.<br> |
| [`activities`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/activities)<br><br>*Edge<AdActivity>* | The activities of this ad account<br> |
| [`adcreatives`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/adcreatives)<br><br>*Edge<AdCreative>* | The ad creatives of this ad account<br> |
| [`ads_reporting_mmm_reports`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/ads_reporting_mmm_reports)<br><br>*Edge<AdsReportBuilderMMMReport>* | Marketing mix modeling (MMM) reports generated for this ad account.<br> |
| [`ads_reporting_mmm_schedulers`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/ads_reporting_mmm_schedulers)<br><br>*Edge<AdsReportBuilderMMMReportScheduler>* | Get all MMM report schedulers by this ad account<br> |
| [`advertisable_applications`](https://developers.facebook.com/docs/marketing-api/reference/ad-account/advertisable_applications) This field is only accessible in v2.4 or later.<br><br>*Edge<Application>* | All advertisable apps associated with this account<br> |
| [`advideos`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/advideos)<br><br>*Edge<Video>* | The videos associated with this account<br> |
| [`applications`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/applications)<br><br>*Edge<Application>* | Applications connected to the ad accounts<br> |
| [`asyncadcreatives`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/asyncadcreatives)<br><br>*Edge<AdAsyncRequestSet>* | The async ad creative creation requests associated with this ad account.<br> |
| [`broadtargetingcategories`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/broadtargetingcategories)<br><br>*Edge<BroadTargetingCategories>* | Broad targeting categories (BCTs) can be used for targeting<br> |
| [`connected_instagram_accounts`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/connected_instagram_accounts)<br><br>*Edge<ShadowIGUser>* | Instagram accounts connected to the ad account<br> |
| [`customaudiences`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/customaudiences)<br><br>*Edge<CustomAudience>* | The custom audiences owned by/shared with this ad account<br> |
| [`customaudiencestos`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/customaudiencestos)<br><br>*Edge<CustomAudiencesTOS>* | The custom audiences term of services available to the ad account<br> |
| [`customconversions`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/customconversions)<br><br>*Edge<CustomConversion>* | The custom conversions owned by/shared with this ad account<br> |
| [`delivery_estimate`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/delivery_estimate)<br><br>*Edge<AdAccountDeliveryEstimate>* | The delivery estimate for a given ad set configuration for this ad account<br> |
| [`deprecatedtargetingadsets`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/deprecatedtargetingadsets)<br><br>*Edge<AdCampaign>* | Ad sets with deprecating targeting options for this ad account<br> |
| [`dsa_recommendations`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/dsa_recommendations)<br><br>*Edge<AdAccountDsaRecommendations>* | dsa_recommendations<br> |
| [`generatepreviews`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/generatepreviews)<br><br>*Edge<AdPreview>* | Generate previews for a creative specification<br> |
| [`impacting_ad_studies`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/impacting_ad_studies)<br><br>*Edge<AdStudy>* | The ad studies that contain this ad account or any of its descendant ad objects<br> |
| [`instagram_accounts`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/instagram_accounts)<br><br>*Edge<ShadowIGUser>* | Instagram accounts connected to the ad accounts<br> |
| [`mcmeconversions`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/mcmeconversions)<br><br>*Edge<AdsMcmeConversion>* | mcmeconversions<br> |
| [`minimum_budgets`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/minimum_budgets)<br><br>*Edge<MinimumBudget>* | Returns minimum daily budget values by currency<br> |
| [`promote_pages`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/promote_pages)<br><br>*Edge<Page>* | All pages that have been promoted under the ad account<br> |
| [`reachestimate`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/reachestimate)<br><br>*Edge<AdAccountReachEstimate>* | The reach estimate of a given [targeting spec](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/advanced-targeting) for this ad                                account<br> |
| [`saved_audiences`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/saved_audiences)<br><br>*Edge<SavedAudience>* | Saved audiences in the account<br> |
| [`targetingbrowse`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/targetingbrowse)<br><br>*Edge<AdAccountTargetingUnified>* | Unified browse<br> |
| [`targetingsearch`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/targetingsearch)<br><br>*Edge<AdAccountTargetingUnified>* | Unified search<br> |
| [`targetingsuggestions`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/targetingsuggestions)<br><br>*Edge<AdAccountTargetingUnified>* | Unified suggestions<br> |
| [`targetingvalidation`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/targetingvalidation)<br><br>*Edge<AdAccountTargetingUnified>* | Unified validation<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 613 | Calls to this api have exceeded the rate limit. |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 3018 | The start date of the time range cannot be beyond 37 months from the current date |
| 2500 | Error parsing graph query |
| 1150 | An unknown error occurred. |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |

### Creating

To create a new ad account for your business you must specify `name`, `currency`, `timezone_id`, `end_advertiser`, `media_agency`, and `partner`. Provide `end_advertiser`, `media_agency`, and `partner`:

- They must be Facebook Page Aliases, Facebook Page ID or an Facebook app ID. For example, to provide your company as an end advertiser you specify my company or `20531316728`.

- The End Advertiser ID is the Facebook primary Page ID or Facebook app ID. Further reference to this field (for formatting and acceptable values) may be found [here](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/adaccount).

- If your ad account has no End Advertiser, Media Agency, or Partner, specify `NONE`.

- If your ad account has an End Advertiser, Media Agency, or Partner, that are not represented on Facebook by Page or app, specify `UNFOUND`.

**Once you set `end_advertiser` to a value other than `NONE` or `UNFOUND` you cannot change it.**

Create an ad account:

```
curl \
-F "name=MyAdAccount" \
-F "currency=USD" \
-F "timezone_id=1" \
-F "end_advertiser=<END_ADVERTISER_ID>" \
-F "media_agency=<MEDIA_AGENCY_ID>" \
-F "partner=NONE" \
-F "access_token=<ACCESS_TOKEN>" \
"https://graph.facebook.com/<API_VERSION>/<BUSINESS_ID>/adaccount"
```

If you have an extended credity line with Facebook, you can set `invoice` to `true` and we associate your new ad account to this credit line.

The response:

```
{
  "id": "act_<ADACCOUNT_ID>",
  "account_id": "<ADACCOUNT_ID>",
  "business_id": "<BUSINESS_ID>",
  "end_advertiser_id": "<END_ADVERTISER_ID>",
  "media_agency_id": "<MEDIA_AGENCY_ID>",
  "partner_id": "NONE"
}
```

#### /act_{ad_account_id}/product_audiences
You can make a POST request to *product_audiences* edge from the following paths:

- [/act_{ad_account_id}/product_audiences](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/product_audiences)

When posting to this edge, an [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account) will be created.

##### Example

#### HTTP
```
POST /v25.0/act_<AD_ACCOUNT_ID>/product_audiences HTTP/1.1
Host: graph.facebook.com

name=Test+Iphone+Product+Audience&product_set_id=%3CPRODUCT_SET_ID%3E&inclusions=%5B%7B%22retention_seconds%22%3A86400%2C%22rule%22%3A%7B%22and%22%3A%5B%7B%22event%22%3A%7B%22eq%22%3A%22AddToCart%22%7D%7D%2C%7B%22userAgent%22%3A%7B%22i_contains%22%3A%22iPhone%22%7D%7D%5D%7D%7D%5D&exclusions=%5B%7B%22retention_seconds%22%3A172800%2C%22rule%22%3A%7B%22event%22%3A%7B%22eq%22%3A%22Purchase%22%7D%7D%7D%5D
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->post(
    '/act_<AD_ACCOUNT_ID>/product_audiences',
    array (
      'name' => 'Test Iphone Product Audience',
      'product_set_id' => '<PRODUCT_SET_ID>',
      'inclusions' => '[{"retention_seconds":86400,"rule":{"and":[{"event":{"eq":"AddToCart"}},{"userAgent":{"i_contains":"iPhone"}}]}}]',
      'exclusions' => '[{"retention_seconds":172800,"rule":{"event":{"eq":"Purchase"}}}]',
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
    "/act_<AD_ACCOUNT_ID>/product_audiences",
    "POST",
    {
        "name": "Test Iphone Product Audience",
        "product_set_id": "<PRODUCT_SET_ID>",
        "inclusions": "[{\"retention_seconds\":86400,\"rule\":{\"and\":[{\"event\":{\"eq\":\"AddToCart\"}},{\"userAgent\":{\"i_contains\":\"iPhone\"}}]}}]",
        "exclusions": "[{\"retention_seconds\":172800,\"rule\":{\"event\":{\"eq\":\"Purchase\"}}}]"
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
params.putString("name", "Test Iphone Product Audience");
params.putString("product_set_id", "<PRODUCT_SET_ID>");
params.putString("inclusions", "[{\"retention_seconds\":86400,\"rule\":{\"and\":[{\"event\":{\"eq\":\"AddToCart\"}},{\"userAgent\":{\"i_contains\":\"iPhone\"}}]}}]");
params.putString("exclusions", "[{\"retention_seconds\":172800,\"rule\":{\"event\":{\"eq\":\"Purchase\"}}}]");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/act_<AD_ACCOUNT_ID>/product_audiences",
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
  @"name": @"Test Iphone Product Audience",
  @"product_set_id": @"<PRODUCT_SET_ID>",
  @"inclusions": @"[{\"retention_seconds\":86400,\"rule\":{\"and\":[{\"event\":{\"eq\":\"AddToCart\"}},{\"userAgent\":{\"i_contains\":\"iPhone\"}}]}}]",
  @"exclusions": @"[{\"retention_seconds\":172800,\"rule\":{\"event\":{\"eq\":\"Purchase\"}}}]",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/act_<AD_ACCOUNT_ID>/product_audiences"
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
  -F 'name="Test Iphone Product Audience"' \
  -F 'product_set_id="<PRODUCT_SET_ID>"' \
  -F 'inclusions=[
       {
         "retention_seconds": 86400,
         "rule": {
           "and": [
             {
               "event": {
                 "eq": "AddToCart"
               }
             },
             {
               "userAgent": {
                 "i_contains": "iPhone"
               }
             }
           ]
         }
       }
     ]' \
  -F 'exclusions=[
       {
         "retention_seconds": 172800,
         "rule": {
           "event": {
             "eq": "Purchase"
           }
         }
       }
     ]' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/product_audiences
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=POST&path=act_%3CAD_ACCOUNT_ID%3E%2Fproduct_audiences%3Fname%3DTest%2BIphone%2BProduct%2BAudience%26product_set_id%3D%253CPRODUCT_SET_ID%253E%26inclusions%3D%255B%257B%2522retention_seconds%2522%253A86400%252C%2522rule%2522%253A%257B%2522and%2522%253A%255B%257B%2522event%2522%253A%257B%2522eq%2522%253A%2522AddToCart%2522%257D%257D%252C%257B%2522userAgent%2522%253A%257B%2522i_contains%2522%253A%2522iPhone%2522%257D%257D%255D%257D%257D%255D%26exclusions%3D%255B%257B%2522retention_seconds%2522%253A172800%252C%2522rule%2522%253A%257B%2522event%2522%253A%257B%2522eq%2522%253A%2522Purchase%2522%257D%257D%257D%255D&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `associated_audience_id`<br><br>*int64* | SELF_EXPLANATORY<br> |
| `creation_params`<br><br>*dictionary { string : <string> }* | SELF_EXPLANATORY<br> |
| `description`<br><br>*string* | SELF_EXPLANATORY<br> |
| `enable_fetch_or_create`<br><br>*boolean* | enable_fetch_or_create<br> |
| `event_sources`<br><br>*array<JSON object>* | event_sources<br><br><br>`id` *int64*<br>id<br><br>**[required]**<br><br><br>`type` *enum {APP, OFFLINE_EVENTS, PAGE, PIXEL}*<br>type<br><br>**[required]**<br> |
| `exclusions`<br><br>*list<Object>* | SELF_EXPLANATORY<br><br><br>`booking_window` *Object*<br><br>`min_seconds` *int64*<br><br>`max_seconds` *int64*<br><br>`count` *Object*<br><br>`event` *string*<br><br>`type` *enum {CUSTOM, PRIMARY, WEBSITE, APP, OFFLINE_CONVERSION, CLAIM, MANAGED, PARTNER, VIDEO, LOOKALIKE, ENGAGEMENT, BAG_OF_ACCOUNTS, STUDY_RULE_AUDIENCE, FOX, MEASUREMENT, REGULATED_CATEGORIES_AUDIENCE, BIDDING, EXCLUSION, MESSENGER_SUBSCRIBER_LIST}*<br><br>`retention` *Object*<br><br>`min_seconds` *integer*<br>**[required]**<br><br><br>`max_seconds` *integer*<br>**[required]**<br><br><br>`retention_days` *int64*<br><br>`retention_seconds` *integer*<br><br>`rule` *Object*<br><br>`pixel_id` *int64* |
| `inclusions`<br><br>*list<Object>* | SELF_EXPLANATORY<br><br><br>`booking_window` *Object*<br><br>`min_seconds` *int64*<br><br>`max_seconds` *int64*<br><br>`count` *Object*<br><br>`event` *string*<br><br>`type` *enum {CUSTOM, PRIMARY, WEBSITE, APP, OFFLINE_CONVERSION, CLAIM, MANAGED, PARTNER, VIDEO, LOOKALIKE, ENGAGEMENT, BAG_OF_ACCOUNTS, STUDY_RULE_AUDIENCE, FOX, MEASUREMENT, REGULATED_CATEGORIES_AUDIENCE, BIDDING, EXCLUSION, MESSENGER_SUBSCRIBER_LIST}*<br><br>`retention` *Object*<br><br>`min_seconds` *integer*<br>**[required]**<br><br><br>`max_seconds` *integer*<br>**[required]**<br><br><br>`retention_days` *int64*<br><br>`retention_seconds` *integer*<br><br>`rule` *Object*<br><br>`pixel_id` *int64* |
| `name`<br><br>*string* | SELF_EXPLANATORY<br><br>**[required]**<br> |
| `opt_out_link`<br><br>*string* | SELF_EXPLANATORY<br> |
| `parent_audience_id`<br><br>*int64* | SELF_EXPLANATORY<br> |
| `product_set_id`<br><br>*numeric string or integer* | SELF_EXPLANATORY<br><br>**[required]**<br> |
| `subtype`<br><br>*enum {CUSTOM, PRIMARY, WEBSITE, APP, OFFLINE_CONVERSION, CLAIM, MANAGED, PARTNER, VIDEO, LOOKALIKE, ENGAGEMENT, BAG_OF_ACCOUNTS, STUDY_RULE_AUDIENCE, FOX, MEASUREMENT, REGULATED_CATEGORIES_AUDIENCE, BIDDING, EXCLUSION, MESSENGER_SUBSCRIBER_LIST}* | SELF_EXPLANATORY<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *id* in the return type.

```
Struct  {
id: numeric string,
message: string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 2654 | Failed to create custom audience |

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

#### /{business_id}/adaccount
You can make a POST request to *adaccount* edge from the following paths:

- [/{business_id}/adaccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/adaccount)

When posting to this edge, an [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `ad_account_created_from_bm_flag`<br><br>*boolean* | ad_account_created_from_bm_flag<br> |
| `currency`<br><br>*ISO 4217 Currency Code* | The currency used for the account<br><br>**[required]**<br> |
| `end_advertiser`<br><br>** | The entity the ads will target. Must be a Facebook Page Alias, Facebook Page ID or an Facebook App ID. In absence of one, you can use `NONE` or `UNFOUND`. Note that once a value other than `NONE` or `UNFOUND` is set, it cannot be modified any more.<br><br>**[required]**<br> |
| `funding_id`<br><br>*numeric string or integer* | ID of the [payment method](https://developers.facebook.com/docs/marketing-api/businessmanager#invoice-funding). If the account does not have a payment method it will still be possible to create ads but these ads will get no delivery.<br> |
| `invoice`<br><br>*boolean* | If business manager has Business Manager Owned Normal Credit Line on file on the FB CRM, it will attach the ad account to that credit line.<br> |
| `invoice_group_id`<br><br>*numeric string* | The ID of the invoice group this adaccount should be enrolled in<br> |
| `invoicing_emails`<br><br>*array<string>* | Emails addressed where invoices will be sent.<br> |
| `io`<br><br>*boolean* | If corporate channel is direct sales.<br> |
| `media_agency`<br><br>*string* | The agency, this could be your own business. Must be a Facebook Page Alias, Facebook Page ID or an Facebook App ID. In absence of one, you can use `NONE` or `UNFOUND`<br><br>**[required]**<br> |
| `name`<br><br>*string* | The name of the ad account<br><br>**[required]**<br> |
| `partner`<br><br>*string* | The advertising partner for this account, if there is one. Must be a Facebook Page Alias, Facebook Page ID or an Facebook App ID. In absence of one, you can use `NONE` or `UNFOUND`.<br><br>**[required]**<br> |
| `po_number`<br><br>*string* | Purchase order number<br> |
| `timezone_id`<br><br>*unsigned int32* | ID for the timezone. See [here](https://developers.facebook.com/docs/marketing-api/reference/ad-account/timezone-ids).<br><br>**[required]**<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *id* in the return type.

```
Struct  {
id: token with structure: AdAccount ID,
account_id: numeric string,
business_id: numeric string,
end_advertiser_id: string,
media_agency_id: string,
partner_id: string,
seer_ad_account_restricted_by_soft_desc_challenge: bool,
soft_desc_challenge_credential_id: string,
soft_desc_challenge_localized_auth_amount: int32,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 3979 | You have exceeded the number of allowed ad accounts for your Business Manager at this time. |
| 3980 | One or more of the ad accounts in your Business Manager are currently in bad standing or in review. All of your accounts must be in good standing in order to create new ad accounts. |
| 415 | Two factor authentication required. User have to enter a code from SMS or TOTP code generator to pass 2fac. This could happen when accessing a 2fac-protected asset like a page that is owned by a 2fac-protected business manager. |
| 3902 | There was a technical issue and your new ad account wasn't created. Please try again. |
| 457 | The session has an invalid origin |
| 190 | Invalid OAuth 2.0 Access Token |
| 23007 | This credit card can't be set as your account's primary payment method, because your account is set up to be billed after your ads have delivered. This setup can't be changed. Please try a different card or payment method. |

#### /{business_id}/owned_ad_accounts
You can make a POST request to *owned_ad_accounts* edge from the following paths:

- [/{business_id}/owned_ad_accounts](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_ad_accounts)

When posting to this edge, an [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `adaccount_id`<br><br>*string* | Ad account ID.<br><br>**[required]**<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
access_status: string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 3979 | You have exceeded the number of allowed ad accounts for your Business Manager at this time. |
| 3994 | Personal accounts that do not have any history of activity are not eligible for migration to a business manager. Instead create an ad account inside your business manager. |
| 100 | Invalid parameter |
| 3980 | One or more of the ad accounts in your Business Manager are currently in bad standing or in review. All of your accounts must be in good standing in order to create new ad accounts. |
| 415 | Two factor authentication required. User have to enter a code from SMS or TOTP code generator to pass 2fac. This could happen when accessing a 2fac-protected asset like a page that is owned by a 2fac-protected business manager. |
| 3936 | You've already tried to claim this ad account. You'll see a notification if your request is accepted. |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 3944 | Your Business Manager already has access to this object. |

### Updating

**Notice:**

* The `default_dsa_payor` and `default_dsa_beneficiary` values can be set to both of them or none of them. The API does not allow only one of them to exist in the data storage.
* To unset the values: pass two empty strings at the same time, the values will be unset in the data storage. It does not allow you to unset only one of them.

#### /act_{ad_account_id}
You can update an [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account) by making a POST request to [/act_{ad_account_id}](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account).

##### Parameters

| Parameter | Description |
| --- | --- |
| `agency_client_declaration`<br><br>*dictionary { string : <string> }* | Details of the agency advertising on behalf of this client account, if applicable. Requires Business Manager [Admin](https://www.facebook.com/business/help/442345745885606?id=180505742745347) privileges.<br> |
| `attribution_spec`<br><br>*list<Object>* | **Deprecated due to iOS 14 changes.** Please visit the [changelog](https://developers.facebook.com/docs/graph-api/changelog/non-versioned-changes/jan-19-2021) for more information.<br><br><br>`event_type` *enum {CLICK_THROUGH, VIEW_THROUGH, ENGAGED_VIDEO_VIEW}*<br>**[required]**<br><br><br>`window_days` *int64*<br>**[required]**<br> |
| `business_info`<br><br>*dictionary { string : <string> }* | Business Info<br> |
| `custom_audience_info`<br><br>*JSON object* | Custom audience info for Automated Shopping Ads.<br><br><br>`new_customer_tag` *string*<br>Label value for new customer in Automated Shoppings Ad's custom audience type URL parameter.<br><br><br>`existing_customer_tag` *string*<br>Label value for existing customer in Automated Shoppings Ad's custom audience type URL parameter.<br><br><br>`audience_type_param_name` *string*<br>field name for audience type in Automated Shoppings Ad's custom audience type UTM parameter.<br> |
| `default_dsa_beneficiary`<br><br>*string* | This is the default value for creating L2 targeting EU's beneficiary.<br> |
| `default_dsa_payor`<br><br>*string* | This is the default value for creating L2 targeting EU's payor.<br> |
| `end_advertiser`<br><br>*string* | The entity the ads will target. Must be a Facebook Page Alias, Facebook Page ID or an Facebook App ID.<br> |
| `is_notifications_enabled`<br><br>*boolean* | If notifications are enabled or not for this account<br> |
| `media_agency`<br><br>*string* | The ID of a Facebook Page or Facebook App. Once it is set to any values other than `NONE` or `UNFOUND`, it cannot be modified any more<br> |
| `name`<br><br>*string* | The name of the ad account<br> |
| `partner`<br><br>*string* | The ID of a Facebook Page or Facebook App. Once it is set to any values other than `NONE` or `UNFOUND`, it cannot be modified any more<br> |
| `spend_cap`<br><br>*float* | The total amount that this account can spend, after which all campaigns will be paused, based on `amount_spent`. A value of 0 signifies no spending-cap and setting a new spend cap only applies to spend AFTER the time at which you set it. Value specified in standard denomination of the currency, e.g. 23.50 for USD $23.50.<br> |
| `spend_cap_action`<br><br>*string* | Setting this parameter to `reset` sets the `amount_spent` back to 0. Setting it to `delete` removes the `spend_cap` from the account.<br> |

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
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 190 | Invalid OAuth 2.0 Access Token |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |

#### /act_{ad_account_id}/assigned_users
You can update an [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account) by making a POST request to [/act_{ad_account_id}/assigned_users](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/assigned_users).

##### Parameters

| Parameter | Description |
| --- | --- |
| `tasks`<br><br>*array<enum {MANAGE, ADVERTISE, ANALYZE, DRAFT, AA_ANALYZE}>* | AdAccount permission tasks to assign this user<br> |
| `user`<br><br>*UID* | Business user id or system user id<br><br>**[required]**<br> |

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
| 2620 | Invalid call to update account permissions |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/aaa_compatible_ad_objects.md -->

## Ad Account Aaa Compatible Ad Objects

### Reading

AdAccountAAACompatibleAdObjects

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/aaa_compatible_ad_objects HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/aaa_compatible_ad_objects',
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
    "/{ad-account-id}/aaa_compatible_ad_objects",
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
    "/{ad-account-id}/aaa_compatible_ad_objects",
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
                               initWithGraphPath:@"/{ad-account-id}/aaa_compatible_ad_objects"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Faaa_compatible_ad_objects&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `adgroup_ids`<br><br>*array<numeric string>* | Array of ID of adgroups that need the A+A eligibility check to duplicated to Advantage+ App Ads<br> |
| `campaign_group_ids`<br><br>*array<numeric string>* | Array of ID of campaign groups that need the A+A eligibility check to duplicated to Advantage+ App Ads<br> |
| `campaign_ids`<br><br>*array<numeric string>* | Array of ID of campaigns that need the A+A eligibility check to duplicated to Advantage+ App Ads<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdAccountAAACompatibleAdObjects nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/account_controls.md -->

## Ad Account Account Controls

### Reading

Get default fields on an [AdAccountBusinessConstraints](https://developers.facebook.com/docs/marketing-api/reference/ad-account-business-constraints) node associated with this [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account). Refer to the [AdAccountBusinessConstraints](https://developers.facebook.com/docs/marketing-api/reference/ad-account-business-constraints) reference for a list of these fields and their descriptions.

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/account_controls HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/account_controls',
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
    "/{ad-account-id}/account_controls",
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
    "/{ad-account-id}/account_controls",
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
                               initWithGraphPath:@"/{ad-account-id}/account_controls"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Faccount_controls&version=v25.0)

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

A list of [AdAccountBusinessConstraints](https://developers.facebook.com/docs/marketing-api/reference/ad-account-business-constraints) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

#### /act_{ad_account_id}/account_controls
You can make a POST request to *account_controls* edge from the following paths:

- [/act_{ad_account_id}/account_controls](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/account_controls)

When posting to this edge, an [AdAccountBusinessConstraints](https://developers.facebook.com/docs/marketing-api/reference/ad-account-business-constraints) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `audience_controls`<br><br>*JSON or object-like arrays* | audience_controls<br><br>**[required]**<br><br><br>`age_min` *int64*<br><br>`geo_locations` *JSON or object-like arrays*<br><br>`excluded_geo_locations` *JSON or object-like arrays*<br><br>`exclusions` *JSON or object-like arrays* |
| `placement_controls`<br><br>*JSON or object-like arrays* | This field contains another field called placement_exclusion that provides information on which placements need to be excluded while targeting. All the other placements will be included. Each placement is denoted by a string that concatenates the publisher platform of the placement and a position inside the publisher platform, separated by an underscore. What is provided as parameter is a list of placements. For e.g. If we want to exclude the rewarded videos position from the audience network publisher platform, we provide the field as follows: { "placement_controls": { "placement_exclusions": ["audience_network_rewarded_video"] } } Only a few placements are allowed to be excluded: audience_network_classic (native, banner & interstitial positions of audience network) audience_network_rewarded_video (rewarded videos of audience network) audience_network_instream_video (instream videos of audience network) facebook_marketplace (marketplace section inside facebook) facebook_rhc (right hand column inside facebook)<br><br><br>`placement_exclusions` *array<enum {AUDIENCE_NETWORK_CLASSIC, AUDIENCE_NETWORK_REWARDED_VIDEO, AUDIENCE_NETWORK_INSTREAM_VIDEO, FACEBOOK_MARKETPLACE, FACEBOOK_RIGHT_HAND_COLUMN}>*<br><br>`campaign_ids_to_set_ap` *array<numeric string>* |

##### Return Type

```
Struct  {
id: string,
success: bool,
error_code: string,
error_message: string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 2641 | Your ad includes or excludes locations that are currently restricted |
| 200 | Permissions error |

### Updating

Use the [`POST /act_<AD_ACCOUNT_ID>/account_controls`](#Creating) endpoint to update the [AdAccountBusinessConstraints](https://developers.facebook.com/docs/marketing-api/reference/ad-account-business-constraints) associated with this [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account).

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/active_adrules.md -->

## Ad Account Active Adrules

### Reading

AdAccountActiveAdRules

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/active_adrules HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/active_adrules',
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
    "/{ad-account-id}/active_adrules",
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
    "/{ad-account-id}/active_adrules",
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
                               initWithGraphPath:@"/{ad-account-id}/active_adrules"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Factive_adrules&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `pass_evaluation`<br><br>*boolean* | pass_evaluation<br> |
| `selected_ids`<br><br>*list<int64>* | selected_ids<br><br>**[required]**<br> |

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
| 190 | Invalid OAuth 2.0 Access Token |
| 200 | Permissions error |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/activities.md -->

## Ad Account Activities

### Reading

Activities related to an Ad Account.

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

A list of [AdActivity](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-activity) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 613 | Calls to this api have exceeded the rate limit. |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 190 | Invalid OAuth 2.0 Access Token |
| 100 | Invalid parameter |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/ad_column_sizes.md -->

## Ad Account Ad Column Sizes

### Reading

Column size information inferred from an application

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/ad_column_sizes HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/ad_column_sizes',
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
    "/{ad-account-id}/ad_column_sizes",
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
    "/{ad-account-id}/ad_column_sizes",
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
                               initWithGraphPath:@"/{ad-account-id}/ad_column_sizes"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fad_column_sizes&version=v25.0)

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

A list of [AdColumnSizes](https://developers.facebook.com/docs/marketing-api/reference/ad-column-sizes) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 190 | Invalid OAuth 2.0 Access Token |
| 100 | Invalid parameter |
| 200 | Permissions error |

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/ad_custom_derived_metrics.md -->

## Ad Account Ad Custom Derived Metrics

### Reading

AdAccountAdCustomDerivedMetrics

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/ad_custom_derived_metrics HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/ad_custom_derived_metrics',
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
    "/{ad-account-id}/ad_custom_derived_metrics",
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
    "/{ad-account-id}/ad_custom_derived_metrics",
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
                               initWithGraphPath:@"/{ad-account-id}/ad_custom_derived_metrics"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fad_custom_derived_metrics&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

This endpoint doesn't have any parameters.

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": []
}
```

###### data

A list of AdCustomDerivedMetrics nodes.

##### Error Codes

| Error Code | Description |
| --- | --- |
| 190 | Invalid OAuth 2.0 Access Token |
| 100 | Invalid parameter |
| 200 | Permissions error |

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/ad_place_page_sets.md -->

## Ad Account Ad Place Page Sets

This endpoint applies to published Pages.

### Reading

The endpoint to retrieve a list of place_page_sets for an ad_account

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/ad_place_page_sets HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/ad_place_page_sets',
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
    "/{ad-account-id}/ad_place_page_sets",
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
    "/{ad-account-id}/ad_place_page_sets",
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
                               initWithGraphPath:@"/{ad-account-id}/ad_place_page_sets"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fad_place_page_sets&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |

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

A list of [AdPlacePageSet](https://developers.facebook.com/docs/marketing-api/reference/ad-place-page-set) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total_count).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*unsigned int32* | Total number of page sets in the ad account<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

#### /act_{ad_account_id}/ad_place_page_sets
You can make a POST request to *ad_place_page_sets* edge from the following paths:

- [/act_{ad_account_id}/ad_place_page_sets](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/ad_place_page_sets)

When posting to this edge, an [AdPlacePageSet](https://developers.facebook.com/docs/marketing-api/reference/ad-place-page-set) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `location_types`<br><br>*list<enum {recent, home}>* | Type of user location the page set targets (e.g., 'recent', 'home')<br> |
| `name`<br><br>*string* | Name of The Place PageSet<br><br>**[required]**<br> |
| `parent_page`<br><br>*numeric string or integer* | The parent page ID for all the locations pages<br><br>**[required]**<br> |

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
| 200 | Permissions error |
| 100 | Invalid parameter |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/ad_place_page_sets_async.md -->

## Ad Account Ad Place Page Sets Async

### Reading

You can't perform this operation on this endpoint.

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/adcreatives.md -->

## Ad Account Ad Creatives

### Reading

The Ad Creatives that belong to this Ad Account.

Contains creative content for an ad account that you can use in your ads. Includes images, videos and so on. Using an ad account creative for a particular ad is subject to validation rules based on the ad type and other rules. See [Facebook Ads Guide](https://www.facebook.com/business/ads-guide?tab0=Mobile%20News%20Feed) and [Validation, Objectives and Creative](https://developers.facebook.com/docs/marketing-api/validation#objective_creative).

##### Example

#### HTTP
```
GET /v25.0/act_<AD_ACCOUNT_ID>/adcreatives?fields=name HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/act_<AD_ACCOUNT_ID>/adcreatives?fields=name',
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
    "/act_<AD_ACCOUNT_ID>/adcreatives",
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
    "/act_<AD_ACCOUNT_ID>/adcreatives",
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
                               initWithGraphPath:@"/act_<AD_ACCOUNT_ID>/adcreatives"
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
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/adcreatives
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=act_%3CAD_ACCOUNT_ID%3E%2Fadcreatives%3Ffields%3Dname&version=v25.0)

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

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total_count).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*unsigned int32* | Total number of creatives in the ad account.<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 100 | Invalid parameter |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 190 | Invalid OAuth 2.0 Access Token |
| 2500 | Error parsing graph query |

### Creating

#### /act_{ad_account_id}/adcreatives
You can make a POST request to *adcreatives* edge from the following paths:

- [/act_{ad_account_id}/adcreatives](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/adcreatives)

When posting to this edge, no Graph object will be created.

#### Limitations

- When creating ad creatives, if the `object_story_id` being used is already in use by an existing creative, then the API will return the value of the existing creative_id instead of creating a new one.

- Using `radius` can cause an error, code: 100, subcode 1815946, when targeting multiple locations. We recommend creating an ad for each location or not using `radius` in your call.

##### Example

#### HTTP
```
POST /v25.0/act_<AD_ACCOUNT_ID>/adcreatives HTTP/1.1
Host: graph.facebook.com

name=Sample+Promoted+Post&object_story_id=%3CPAGE_ID%3E_%3CPOST_ID%3E
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->post(
    '/act_<AD_ACCOUNT_ID>/adcreatives',
    array (
      'name' => 'Sample Promoted Post',
      'object_story_id' => '<PAGE_ID>_<POST_ID>',
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
    "/act_<AD_ACCOUNT_ID>/adcreatives",
    "POST",
    {
        "name": "Sample Promoted Post",
        "object_story_id": "<PAGE_ID>_<POST_ID>"
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
params.putString("name", "Sample Promoted Post");
params.putString("object_story_id", "<PAGE_ID>_<POST_ID>");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/act_<AD_ACCOUNT_ID>/adcreatives",
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
  @"name": @"Sample Promoted Post",
  @"object_story_id": @"<PAGE_ID>_<POST_ID>",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/act_<AD_ACCOUNT_ID>/adcreatives"
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
  -F 'name="Sample Promoted Post"' \
  -F 'object_story_id="<PAGE_ID>_<POST_ID>"' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/adcreatives
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=POST&path=act_%3CAD_ACCOUNT_ID%3E%2Fadcreatives%3Fname%3DSample%2BPromoted%2BPost%26object_story_id%3D%253CPAGE_ID%253E_%253CPOST_ID%253E&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `actor_id`<br><br>*int64* | The actor ID (Page ID) of this creative.<br> |
| `ad_disclaimer_spec`<br><br>*JSON object* | [Disclaimer information](https://developers.facebook.com/docs/graph-api/reference/ad-creative-ad-disclaimer) to attach to your creative.<br><br><br>`title` *enum {DISCLAIMER, HEALTH_DISCLAIMER, IMPORTANT_SAFETY_INFORMATION, MEDICATION_GUIDE, OFFER_DETAILS, PRESCRIBING_INFORMATION, TERMS_AND_CONDITIONS}*<br>**[required]**<br><br><br>`text` *string*<br><br>`url` *URL* |
| `adlabels`<br><br>*list<Object>* | [Ad Labels](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label) associated with this creative. Used to group it with related ad objects.<br> |
| `applink_treatment`<br><br>*enum{automatic, deeplink_with_web_fallback, deeplink_with_appstore_fallback, web_only}* | Used for [Dynamic Ads](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads/ads-management). Specify what action should occur if a person clicks a link in the ad, but the business' app is not installed on their device. For example, open a webpage displaying the product, or open the app in an app store on the person's mobile device.<br> |
| `asset_feed_spec`<br><br>*Object* | Used for [Dynamic Creative](https://developers.facebook.com/documentation/ads-commerce/marketing-api/ad-creative/asset-feed-spec) to automatically experiment and deliver different variations of an ad's creative. Specifies an asset feed with multiple images, text and other assets used to generate variations of an ad. Formatted as a JSON string.<br><br>**[supports emoji]**<br><br><br>`images` *list<Object>*<br><br>`hash` *string*<br><br>`url` *URL*<br><br>`image_crops` *dictionary { enum{191x100, 100x72, 400x150, 600x360, 100x100, 400x500, 90x160, 300x400} : <list<list<int64>>> }*<br><br>`url_tags` *string*<br><br>`adlabels` *list<Object>*<br><br>`tag` *string*<br><br>`videos` *list<Object>*<br><br>`video_id` *int64*<br><br>`thumbnail_id` *int64*<br><br>`thumbnail_url` *URL*<br><br>`thumbnail_hash` *string*<br><br>`caption_ids` *list<numeric string>*<br><br>`url_tags` *string*<br><br>`adlabels` *list<Object>*<br><br>`do_not_clone_flag` *boolean*<br><br>`tag` *string*<br><br>`thumbnail_source` *string*<br><br>`bodies` *list<Object>*<br><br>`text` *string*<br>**[supports emoji]**<br><br><br>`url_tags` *string*<br><br>`adlabels` *list<Object>*<br><br>`translation_confidence` *int64*<br><br>`asset_source` *enum {ACO_TEXT_LIBRARY, TEXT_GEN_INPUT_TEXT, TEXT_GEN_SUGGESTION_DIVERSITY_UNEDITED, TEXT_GEN_SUGGESTION_DIVERSITY_EDITED, TEXT_GEN_SUGGESTION_DIVERSITY_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_DIVERSITY_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_PARAPHRASING_UNEDITED, TEXT_GEN_SUGGESTION_PARAPHRASING_EDITED, TEXT_GEN_SUGGESTION_PARAPHRASING_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_PARAPHRASING_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_UNEDITED, TEXT_GEN_SUGGESTION_LLM_EDITED, TEXT_GEN_SUGGESTION_LLM_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_UNEDITED, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_EDITED, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_1_UNEDITED, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_1_EDITED, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_1_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_1_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_2_UNEDITED, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_2_EDITED, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_2_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_2_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_SINGLE_STAGE_UNEDITED, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_SINGLE_STAGE_EDITED, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_SINGLE_STAGE_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_SINGLE_STAGE_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_BRAND_IDENTITY_UNEDITED, TEXT_GEN_SUGGESTION_BRAND_IDENTITY_EDITED, TEXT_GEN_SUGGESTION_BRAND_IDENTITY_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_BRAND_IDENTITY_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_BRAND_IDENTITY_V_1_1_UNEDITED, TEXT_GEN_SUGGESTION_BRAND_IDENTITY_V_1_1_EDITED, TEXT_GEN_SUGGESTION_BRAND_IDENTITY_V_1_1_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_BRAND_IDENTITY_V_1_1_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_ORCHESTRATOR_V_1_UNEDITED, TEXT_GEN_SUGGESTION_ORCHESTRATOR_V_1_EDITED, TEXT_GEN_SUGGESTION_ORCHESTRATOR_V_1_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_ORCHESTRATOR_V_1_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_ORCHESTRATOR_MULTILINGUAL_UNEDITED, TEXT_GEN_SUGGESTION_ORCHESTRATOR_MULTILINGUAL_EDITED, TEXT_GEN_SUGGESTION_GUIDANCE_LLM_EDITED, TEXT_GEN_SUGGESTION_GUIDANCE_LLM_UNEDITED, TEXT_GEN_SUGGESTION_GUIDANCE_SEMANTIC_VARIATIONS_EDITED, TEXT_GEN_SUGGESTION_GUIDANCE_SEMANTIC_VARIATIONS_UNEDITED, TEXT_GEN_SUGGESTION_GUIDANCE_SEMANTIC_VARIATIONS_V_1_1_EDITED, TEXT_GEN_SUGGESTION_GUIDANCE_SEMANTIC_VARIATIONS_V_1_1_UNEDITED, TEXT_GEN_SUGGESTION_GUIDANCE_SEMANTIC_VARIATIONS_V_1_2_EDITED, TEXT_GEN_SUGGESTION_GUIDANCE_SEMANTIC_VARIATIONS_V_1_2_UNEDITED, TEXT_GEN_SUGGESTION_GUIDANCE_SEMANTIC_VARIATIONS_SINGLE_STAGE_EDITED, TEXT_GEN_SUGGESTION_GUIDANCE_SEMANTIC_VARIATIONS_SINGLE_STAGE_UNEDITED, TEXT_GEN_SUGGESTION_GUIDANCE_BRAND_IDENTITY_EDITED, TEXT_GEN_SUGGESTION_GUIDANCE_BRAND_IDENTITY_UNEDITED, TEXT_GEN_SUGGESTION_GUIDANCE_BRAND_IDENTITY_V_1_1_EDITED, TEXT_GEN_SUGGESTION_GUIDANCE_BRAND_IDENTITY_V_1_1_UNEDITED, TEXT_GEN_SUGGESTION_GUIDANCE_ORCHESTRATOR_V_1_EDITED, TEXT_GEN_SUGGESTION_GUIDANCE_ORCHESTRATOR_V_1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_V2_UNEDITED, TEXT_GEN_SUGGESTION_LLM_V2_EDITED, TEXT_GEN_SUGGESTION_LLM_V2_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_V2_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_V2_DPO_UNEDITED, TEXT_GEN_SUGGESTION_LLM_V2_DPO_EDITED, TEXT_GEN_SUGGESTION_LLM_V2_DPO_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_V2_DPO_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_UNEDITED, TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_EDITED, TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_V2_LONG_UNEDITED, TEXT_GEN_SUGGESTION_LLM_V2_LONG_EDITED, TEXT_GEN_SUGGESTION_LLM_V2_LONG_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_V2_LONG_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_LONG_UNEDITED, TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_LONG_EDITED, TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_LONG_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_LONG_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_V3_UNEDITED, TEXT_GEN_SUGGESTION_LLM_V3_EDITED, TEXT_GEN_SUGGESTION_LLM_V3_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_V3_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_V3_LONG_UNEDITED, TEXT_GEN_SUGGESTION_LLM_V3_LONG_EDITED, TEXT_GEN_SUGGESTION_LLM_V3_LONG_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_V3_LONG_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_LC_PPO_UNEDITED, TEXT_GEN_SUGGESTION_LLM_LC_PPO_EDITED, TEXT_GEN_SUGGESTION_LLM_LC_PPO_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_LC_PPO_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_LC_PPO_LLAMA3_V1_FOR_IG_UNEDITED, TEXT_GEN_SUGGESTION_LLM_LC_PPO_LLAMA3_V1_FOR_IG_EDITED, TEXT_GEN_SUGGESTION_LLM_LC_PPO_V2_UNEDITED, TEXT_GEN_SUGGESTION_LLM_LC_PPO_V2_EDITED, TEXT_GEN_SUGGESTION_LLM_LC_PPO_V2_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_LC_PPO_V2_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_APP_DESCRIPTION_UNEDITED, TEXT_GEN_SUGGESTION_LLM_APP_DESCRIPTION_EDITED, TEXT_GEN_SUGGESTION_LLM_APP_DESCRIPTION_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_APP_DESCRIPTION_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V1_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V1_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V2_UNEDITED, TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V2_EDITED, TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V3_UNEDITED, TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V3_EDITED, TEXT_GEN_SUGGESTION_LLM_LC_PPO_LLAMA3_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_LC_PPO_LLAMA3_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_LC_PPO_LLAMA3_V1_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_LC_PPO_LLAMA3_V1_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_FC_PPO_LLAMA3_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_FC_PPO_LLAMA3_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_FC_PPO_LLAMA3_V1_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_FC_PPO_LLAMA3_V1_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_FC_PPO_LLAMA3_V1_FOR_FB_UNEDITED, TEXT_GEN_SUGGESTION_LLM_FC_PPO_LLAMA3_V1_FOR_FB_EDITED, TEXT_GEN_SUGGESTION_LLM_SFT_LLAMA3_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_SFT_LLAMA3_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_SFT_LLAMA3_V1_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_SFT_LLAMA3_V1_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_ADS_MANAGER_LLM_HEADLINE_HEURISTICS_V1_UNEDITED, TEXT_GEN_SUGGESTION_ADS_MANAGER_LLM_HEADLINE_HEURISTICS_V1_EDITED, TEXT_GEN_SUGGESTION_ADS_MANAGER_LLM_HEADLINE_LLAMA4_HOOKS_UNEDITED, TEXT_GEN_SUGGESTION_ADS_MANAGER_LLM_HEADLINE_LLAMA4_HOOKS_EDITED, TEXT_GEN_SUGGESTION_ADS_MANAGER_LLM_HEADLINE_GPT_OSS_HOOKS_UNEDITED, TEXT_GEN_SUGGESTION_ADS_MANAGER_LLM_HEADLINE_GPT_OSS_HOOKS_EDITED, TEXT_GEN_SUGGESTION_LLM_HEADLINE_ARPG_OSS_BUNDLE_UNEDITED, TEXT_GEN_SUGGESTION_LLM_HEADLINE_ARPG_OSS_BUNDLE_EDITED, TEXT_GEN_SUGGESTION_LLM_HEADLINE_ARPG_L4BASE_BUNDLE_UNEDITED, TEXT_GEN_SUGGESTION_LLM_HEADLINE_ARPG_L4BASE_BUNDLE_EDITED, TEXT_GEN_SUGGESTION_PPO_ORCHESTRATOR_V1_UNEDITED, TEXT_GEN_SUGGESTION_PPO_ORCHESTRATOR_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_BRAND_ALIGNER_UNEDITED, TEXT_GEN_SUGGESTION_LLM_BRAND_ALIGNER_EDITED, TEXT_GEN_SUGGESTION_LLM_IMPLICIT_BRAND_TONE_PRIMARY_TEXT_UNEDITED, TEXT_GEN_SUGGESTION_LLM_IMPLICIT_BRAND_TONE_PRIMARY_TEXT_EDITED, TEXT_GEN_SUGGESTION_LLM_IMPLICIT_BRAND_TONE_HISTORICAL_ADS_UNEDITED, TEXT_GEN_SUGGESTION_LLM_IMPLICIT_BRAND_TONE_HISTORICAL_ADS_EDITED, TEXT_GEN_SUGGESTION_LLM_FREEFORM_BRAND_TONE_UNEDITED, TEXT_GEN_SUGGESTION_LLM_FREEFORM_BRAND_TONE_EDITED, TEXT_GEN_SUGGESTION_LLM_COHORT_LLAMA3_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_COHORT_LLAMA3_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_LIGHTHOUSE_LLAMA3_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_LIGHTHOUSE_LLAMA3_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_PURPOSEFUL_GEN_SP_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PURPOSEFUL_GEN_SP_EDITED, TEXT_GEN_SUGGESTION_LLM_PURPOSEFUL_GEN_EA_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PURPOSEFUL_GEN_EA_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_NON_EN_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_NON_EN_EDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_UNEDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_EDITED, TEXT_GEN_SUGGESTION_LLM_DF_LLAMA4_ARPG_UNEDITED, TEXT_GEN_SUGGESTION_LLM_DF_LLAMA4_ARPG_EDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_TEMPLATE_V0_UNEDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_TEMPLATE_V0_EDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_TEMPLATE_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_TEMPLATE_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_BASED_GEN_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_BASED_GEN_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_SEQUENTIAL_UNEDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_SEQUENTIAL_EDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_MM_UNEDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_MM_EDITED, TEXT_GEN_SUGGESTION_LLM_PPO_TEXT_IMAGE_RM_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PPO_TEXT_IMAGE_RM_EDITED, TEXT_GEN_SUGGESTION_LLM_BRAND_LLAMA4_UNEDITED, TEXT_GEN_SUGGESTION_LLM_BRAND_LLAMA4_EDITED, TEXT_GEN_SUGGESTION_LLM_BRAND_GPT4O_UNEDITED, TEXT_GEN_SUGGESTION_LLM_BRAND_GPT4O_EDITED, TEXT_GEN_SUGGESTION_LLM_BRAND_HISTORICAL_ADS_V2_UNEDITED, TEXT_GEN_SUGGESTION_LLM_BRAND_HISTORICAL_ADS_V2_EDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_V2_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_V2_EDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_V2_COMPOUND_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_V2_COMPOUND_EDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_GPT4O_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_GPT4O_EDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_EDITABLE_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_EDITABLE_EDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_EDITABLE_COMPOUND_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_EDITABLE_COMPOUND_EDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_DEEPER_FUNNEL_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_DEEPER_FUNNEL_EDITED, TEXT_GEN_SUGGESTION_LLM_TARGET_PERSONA_BASED_GEN_BUNDLED_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_TARGET_PERSONA_BASED_GEN_BUNDLED_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_TARGET_PERSONA_BASED_GEN_BUNDLED_V2_UNEDITED, TEXT_GEN_SUGGESTION_LLM_TARGET_PERSONA_BASED_GEN_BUNDLED_V2_EDITED, TEXT_GEN_SUGGESTION_LLM_LLAMA4_SEGMENT_PROMPT_UNEDITED, TEXT_GEN_SUGGESTION_LLM_LLAMA4_SEGMENT_PROMPT_EDITED, TEXT_GEN_SUGGESTION_LLM_CONVERTER_BASED_PERSONA_UNEDITED, TEXT_GEN_SUGGESTION_LLM_CONVERTER_BASED_PERSONA_EDITED, TEXT_GEN_SUGGESTION_LLM_CONVERTER_BASED_PERSONA_COMPOUND_UNEDITED, TEXT_GEN_SUGGESTION_LLM_CONVERTER_BASED_PERSONA_COMPOUND_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_DEEPER_FUNNEL_PPO_LLAMA3_1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_DEEPER_FUNNEL_PPO_LLAMA3_1_EDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_LLAMA4_ARPG_HOOK_BUNDLE_V0_UNEDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_LLAMA4_ARPG_HOOK_BUNDLE_V0_EDITED, TEXT_GEN_SUGGESTION_LLM_IF_MORL_25H2_PERSONA_UNEDITED, TEXT_GEN_SUGGESTION_LLM_IF_MORL_25H2_PERSONA_EDITED, TEXT_GEN_SUGGESTION_LLM_LLAMA4_LANDING_PAGE_CONTEXT_UNEDITED, TEXT_GEN_SUGGESTION_LLM_LLAMA4_LANDING_PAGE_CONTEXT_EDITED, TEXT_GEN_SUGGESTION_LLM_GPT4O_LANDING_PAGE_CONTEXT_UNEDITED, TEXT_GEN_SUGGESTION_LLM_GPT4O_LANDING_PAGE_CONTEXT_EDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_RM_V0_UNEDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_RM_V0_EDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_RM_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_RM_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_DEEPER_FUNNEL_PPO_LLAMA3_V2_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_DEEPER_FUNNEL_PPO_LLAMA3_V2_EDITED, TEXT_GEN_SUGGESTION_LLM_TRANSLATION_V1, TEXT_FIRST_MANUAL_OPTION, TEXT_AUTO_TRANSLATION_MT_V1, TEXT_AUTO_TRANSLATION_LLM_V1, TEXT_TRANSLATIONS_LLAMA4_V1_TITLE, TEXT_TRANSLATIONS_LLAMA4_V1_BODY, TEXT_AD_HIGHLIGHT, PROMINENT_HEADLINE_NO_SHOW, TEXT_LIQUIDITY_BODY_WITH_PROMINENT_HEADLINE_TIER_1, TEXT_LIQUIDITY_BODY_WITH_PROMINENT_HEADLINE_TIER_2, TEXT_LIQUIDITY_BODY_WITH_PROMINENT_HEADLINE_TIER_3, TEXT_LIQUIDITY_BODY_WITH_PROMINENT_HEADLINE_TIER_4, TEXT_LIQUIDITY_BODY_WITH_PROMINENT_HEADLINE_TIER_5, TEXT_LIQUIDITY_BODY_WITH_PROMINENT_HEADLINE_ABSTRACTIVE, TEXT_GEN_AUTOMATION, TEXT_GEN_AUTOMATION_ALPHA_DEEPER_FUNNEL_USER_COHORT_BATCH_GENERATION, TEXT_GEN_AUTOMATION_ALPHA_BRAND_ALIGNER_USER_COHORT_SEQUENTIAL_GENERATION, TEXT_GEN_AUTOMATION_ALPHA_BRAND_ALIGNER_USER_COHORT_BATCH_GENERATION, TEXT_GEN_AUTOMATION_DEEPER_FUNNEL_PPO_SEQUENTIAL_TWO_STAGE_UNEDITED, TEXT_GEN_AUTOMATION_DEEPER_FUNNEL_PPO_SEQUENTIAL_TWO_STAGE_EDITED, TEXT_GEN_AUTOMATION_REVIEWED_DEEPER_FUNNEL_PPO_SEQUENTIAL_TWO_STAGE_UNEDITED, TEXT_GEN_AUTOMATION_REVIEWED_DEEPER_FUNNEL_PPO_SEQUENTIAL_TWO_STAGE_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_PERSONA_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_PERSONA_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_PERSONA_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_PERSONA_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_SELLING_POINT_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_SELLING_POINT_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_SELLING_POINT_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_SELLING_POINT_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_PERSONA_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_PERSONA_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_PERSONA_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_PERSONA_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_SELLING_POINT_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_SELLING_POINT_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_SELLING_POINT_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_SELLING_POINT_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_MARKETING_ANGLE_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_MARKETING_ANGLE_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_MARKETING_ANGLE_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_MARKETING_ANGLE_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_MARKETING_ANGLE_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_MARKETING_ANGLE_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_MARKETING_ANGLE_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_MARKETING_ANGLE_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_MOCK_UNEDITED, TEXT_GEN_SUGGESTION_MOCK_EDITED, TEXT_GEN_SUGGESTION_MOCK_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_MOCK_EDITED_BEFORE_AND_AFTER_ADD}*<br><br>`automation_status` *enum {OPT_IN, OPT_OUT}*<br><br>`uuid` *string*<br>**[supports emoji]**<br><br><br>`text_gen_original_text` *string*<br>**[supports emoji]**<br><br><br>`language` *string*<br><br>`target_audience` *string*<br><br>`tracking_tag` *list<enum {NONE, TEXT_GEN_LLM_PERSONA_EDITED_TAG}>*<br><br>`text_gen_input_text` *string*<br>**[supports emoji]**<br><br><br>`type` *enum {TEMPLATE}*<br><br>`action_type` *enum {DEFAULT_ADD, DEFAULT_ADD_INTERACTION, MANUAL_ADD, STICKY_ADD, STICKY_ADD_INTERACTION, TEXT_AUTOMATION_DEFAULT_ADD, TEXT_AUTOMATION_DEFAULT_ADD_INTERACTION, TEXT_AUTOMATION_MANUAL_ADD, TEXT_AUTOMATION_STICKY_ADD, TEXT_AUTOMATION_STICKY_ADD_INTERACTION}*<br><br>`call_to_action_types` *list<enum{OPEN_LINK, LIKE_PAGE, SHOP_NOW, PLAY_GAME, INSTALL_APP, USE_APP, CALL, CALL_ME, VIDEO_CALL, INSTALL_MOBILE_APP, USE_MOBILE_APP, MOBILE_DOWNLOAD, BOOK_TRAVEL, LISTEN_MUSIC, WATCH_VIDEO, LEARN_MORE, SIGN_UP, DOWNLOAD, WATCH_MORE, NO_BUTTON, VISIT_PAGES_FEED, CALL_NOW, APPLY_NOW, CONTACT, BUY_NOW, GET_OFFER, GET_OFFER_VIEW, BUY_TICKETS, UPDATE_APP, GET_DIRECTIONS, BUY, SEND_UPDATES, MESSAGE_PAGE, DONATE, SUBSCRIBE, SAY_THANKS, SELL_NOW, SHARE, DONATE_NOW, GET_QUOTE, CONTACT_US, ORDER_NOW, START_ORDER, ADD_TO_CART, VIEW_CART, VIEW_IN_CART, VIDEO_ANNOTATION, RECORD_NOW, INQUIRE_NOW, CONFIRM, REFER_FRIENDS, REQUEST_TIME, GET_SHOWTIMES, LISTEN_NOW, TRY_DEMO, WOODHENGE_SUPPORT, SOTTO_SUBSCRIBE, FOLLOW_USER, RAISE_MONEY, SEE_SHOP, GET_DETAILS, FIND_OUT_MORE, VISIT_WEBSITE, BROWSE_SHOP, EVENT_RSVP, WHATSAPP_MESSAGE, FOLLOW_NEWS_STORYLINE, SEE_MORE, BOOK_NOW, FIND_A_GROUP, FIND_YOUR_GROUPS, PAY_TO_ACCESS, PURCHASE_GIFT_CARDS, FOLLOW_PAGE, SEND_A_GIFT, SWIPE_UP_SHOP, SWIPE_UP_PRODUCT, SEND_GIFT_MONEY, PLAY_GAME_ON_FACEBOOK, GET_STARTED, OPEN_INSTANT_APP, AUDIO_CALL, GET_PROMOTIONS, JOIN_CHANNEL, MAKE_AN_APPOINTMENT, ASK_ABOUT_SERVICES, BOOK_A_CONSULTATION, GET_A_QUOTE, BUY_VIA_MESSAGE, ASK_FOR_MORE_INFO, CHAT_WITH_US, VIEW_PRODUCT, VIEW_CHANNEL, GET_IN_TOUCH, ASK_A_QUESTION, START_A_CHAT, CHAT_NOW, ASK_US, WATCH_LIVE_VIDEO, JOIN_LIVE_VIDEO, SHOP_WITH_AI, TRY_ON_WITH_AI}>*<br><br>`descriptions` *list<Object>*<br><br>`text` *string*<br>**[supports emoji]**<br><br><br>`url_tags` *string*<br><br>`adlabels` *list<Object>*<br><br>`translation_confidence` *int64*<br><br>`asset_source` *enum {ACO_TEXT_LIBRARY, TEXT_GEN_INPUT_TEXT, TEXT_GEN_SUGGESTION_DIVERSITY_UNEDITED, TEXT_GEN_SUGGESTION_DIVERSITY_EDITED, TEXT_GEN_SUGGESTION_DIVERSITY_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_DIVERSITY_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_PARAPHRASING_UNEDITED, TEXT_GEN_SUGGESTION_PARAPHRASING_EDITED, TEXT_GEN_SUGGESTION_PARAPHRASING_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_PARAPHRASING_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_UNEDITED, TEXT_GEN_SUGGESTION_LLM_EDITED, TEXT_GEN_SUGGESTION_LLM_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_UNEDITED, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_EDITED, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_1_UNEDITED, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_1_EDITED, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_1_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_1_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_2_UNEDITED, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_2_EDITED, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_2_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_2_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_SINGLE_STAGE_UNEDITED, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_SINGLE_STAGE_EDITED, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_SINGLE_STAGE_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_SINGLE_STAGE_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_BRAND_IDENTITY_UNEDITED, TEXT_GEN_SUGGESTION_BRAND_IDENTITY_EDITED, TEXT_GEN_SUGGESTION_BRAND_IDENTITY_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_BRAND_IDENTITY_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_BRAND_IDENTITY_V_1_1_UNEDITED, TEXT_GEN_SUGGESTION_BRAND_IDENTITY_V_1_1_EDITED, TEXT_GEN_SUGGESTION_BRAND_IDENTITY_V_1_1_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_BRAND_IDENTITY_V_1_1_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_ORCHESTRATOR_V_1_UNEDITED, TEXT_GEN_SUGGESTION_ORCHESTRATOR_V_1_EDITED, TEXT_GEN_SUGGESTION_ORCHESTRATOR_V_1_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_ORCHESTRATOR_V_1_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_ORCHESTRATOR_MULTILINGUAL_UNEDITED, TEXT_GEN_SUGGESTION_ORCHESTRATOR_MULTILINGUAL_EDITED, TEXT_GEN_SUGGESTION_GUIDANCE_LLM_EDITED, TEXT_GEN_SUGGESTION_GUIDANCE_LLM_UNEDITED, TEXT_GEN_SUGGESTION_GUIDANCE_SEMANTIC_VARIATIONS_EDITED, TEXT_GEN_SUGGESTION_GUIDANCE_SEMANTIC_VARIATIONS_UNEDITED, TEXT_GEN_SUGGESTION_GUIDANCE_SEMANTIC_VARIATIONS_V_1_1_EDITED, TEXT_GEN_SUGGESTION_GUIDANCE_SEMANTIC_VARIATIONS_V_1_1_UNEDITED, TEXT_GEN_SUGGESTION_GUIDANCE_SEMANTIC_VARIATIONS_V_1_2_EDITED, TEXT_GEN_SUGGESTION_GUIDANCE_SEMANTIC_VARIATIONS_V_1_2_UNEDITED, TEXT_GEN_SUGGESTION_GUIDANCE_SEMANTIC_VARIATIONS_SINGLE_STAGE_EDITED, TEXT_GEN_SUGGESTION_GUIDANCE_SEMANTIC_VARIATIONS_SINGLE_STAGE_UNEDITED, TEXT_GEN_SUGGESTION_GUIDANCE_BRAND_IDENTITY_EDITED, TEXT_GEN_SUGGESTION_GUIDANCE_BRAND_IDENTITY_UNEDITED, TEXT_GEN_SUGGESTION_GUIDANCE_BRAND_IDENTITY_V_1_1_EDITED, TEXT_GEN_SUGGESTION_GUIDANCE_BRAND_IDENTITY_V_1_1_UNEDITED, TEXT_GEN_SUGGESTION_GUIDANCE_ORCHESTRATOR_V_1_EDITED, TEXT_GEN_SUGGESTION_GUIDANCE_ORCHESTRATOR_V_1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_V2_UNEDITED, TEXT_GEN_SUGGESTION_LLM_V2_EDITED, TEXT_GEN_SUGGESTION_LLM_V2_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_V2_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_V2_DPO_UNEDITED, TEXT_GEN_SUGGESTION_LLM_V2_DPO_EDITED, TEXT_GEN_SUGGESTION_LLM_V2_DPO_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_V2_DPO_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_UNEDITED, TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_EDITED, TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_V2_LONG_UNEDITED, TEXT_GEN_SUGGESTION_LLM_V2_LONG_EDITED, TEXT_GEN_SUGGESTION_LLM_V2_LONG_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_V2_LONG_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_LONG_UNEDITED, TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_LONG_EDITED, TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_LONG_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_LONG_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_V3_UNEDITED, TEXT_GEN_SUGGESTION_LLM_V3_EDITED, TEXT_GEN_SUGGESTION_LLM_V3_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_V3_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_V3_LONG_UNEDITED, TEXT_GEN_SUGGESTION_LLM_V3_LONG_EDITED, TEXT_GEN_SUGGESTION_LLM_V3_LONG_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_V3_LONG_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_LC_PPO_UNEDITED, TEXT_GEN_SUGGESTION_LLM_LC_PPO_EDITED, TEXT_GEN_SUGGESTION_LLM_LC_PPO_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_LC_PPO_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_LC_PPO_LLAMA3_V1_FOR_IG_UNEDITED, TEXT_GEN_SUGGESTION_LLM_LC_PPO_LLAMA3_V1_FOR_IG_EDITED, TEXT_GEN_SUGGESTION_LLM_LC_PPO_V2_UNEDITED, TEXT_GEN_SUGGESTION_LLM_LC_PPO_V2_EDITED, TEXT_GEN_SUGGESTION_LLM_LC_PPO_V2_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_LC_PPO_V2_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_APP_DESCRIPTION_UNEDITED, TEXT_GEN_SUGGESTION_LLM_APP_DESCRIPTION_EDITED, TEXT_GEN_SUGGESTION_LLM_APP_DESCRIPTION_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_APP_DESCRIPTION_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V1_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V1_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V2_UNEDITED, TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V2_EDITED, TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V3_UNEDITED, TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V3_EDITED, TEXT_GEN_SUGGESTION_LLM_LC_PPO_LLAMA3_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_LC_PPO_LLAMA3_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_LC_PPO_LLAMA3_V1_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_LC_PPO_LLAMA3_V1_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_FC_PPO_LLAMA3_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_FC_PPO_LLAMA3_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_FC_PPO_LLAMA3_V1_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_FC_PPO_LLAMA3_V1_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_FC_PPO_LLAMA3_V1_FOR_FB_UNEDITED, TEXT_GEN_SUGGESTION_LLM_FC_PPO_LLAMA3_V1_FOR_FB_EDITED, TEXT_GEN_SUGGESTION_LLM_SFT_LLAMA3_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_SFT_LLAMA3_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_SFT_LLAMA3_V1_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_SFT_LLAMA3_V1_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_ADS_MANAGER_LLM_HEADLINE_HEURISTICS_V1_UNEDITED, TEXT_GEN_SUGGESTION_ADS_MANAGER_LLM_HEADLINE_HEURISTICS_V1_EDITED, TEXT_GEN_SUGGESTION_ADS_MANAGER_LLM_HEADLINE_LLAMA4_HOOKS_UNEDITED, TEXT_GEN_SUGGESTION_ADS_MANAGER_LLM_HEADLINE_LLAMA4_HOOKS_EDITED, TEXT_GEN_SUGGESTION_ADS_MANAGER_LLM_HEADLINE_GPT_OSS_HOOKS_UNEDITED, TEXT_GEN_SUGGESTION_ADS_MANAGER_LLM_HEADLINE_GPT_OSS_HOOKS_EDITED, TEXT_GEN_SUGGESTION_LLM_HEADLINE_ARPG_OSS_BUNDLE_UNEDITED, TEXT_GEN_SUGGESTION_LLM_HEADLINE_ARPG_OSS_BUNDLE_EDITED, TEXT_GEN_SUGGESTION_LLM_HEADLINE_ARPG_L4BASE_BUNDLE_UNEDITED, TEXT_GEN_SUGGESTION_LLM_HEADLINE_ARPG_L4BASE_BUNDLE_EDITED, TEXT_GEN_SUGGESTION_PPO_ORCHESTRATOR_V1_UNEDITED, TEXT_GEN_SUGGESTION_PPO_ORCHESTRATOR_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_BRAND_ALIGNER_UNEDITED, TEXT_GEN_SUGGESTION_LLM_BRAND_ALIGNER_EDITED, TEXT_GEN_SUGGESTION_LLM_IMPLICIT_BRAND_TONE_PRIMARY_TEXT_UNEDITED, TEXT_GEN_SUGGESTION_LLM_IMPLICIT_BRAND_TONE_PRIMARY_TEXT_EDITED, TEXT_GEN_SUGGESTION_LLM_IMPLICIT_BRAND_TONE_HISTORICAL_ADS_UNEDITED, TEXT_GEN_SUGGESTION_LLM_IMPLICIT_BRAND_TONE_HISTORICAL_ADS_EDITED, TEXT_GEN_SUGGESTION_LLM_FREEFORM_BRAND_TONE_UNEDITED, TEXT_GEN_SUGGESTION_LLM_FREEFORM_BRAND_TONE_EDITED, TEXT_GEN_SUGGESTION_LLM_COHORT_LLAMA3_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_COHORT_LLAMA3_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_LIGHTHOUSE_LLAMA3_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_LIGHTHOUSE_LLAMA3_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_PURPOSEFUL_GEN_SP_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PURPOSEFUL_GEN_SP_EDITED, TEXT_GEN_SUGGESTION_LLM_PURPOSEFUL_GEN_EA_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PURPOSEFUL_GEN_EA_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_NON_EN_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_NON_EN_EDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_UNEDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_EDITED, TEXT_GEN_SUGGESTION_LLM_DF_LLAMA4_ARPG_UNEDITED, TEXT_GEN_SUGGESTION_LLM_DF_LLAMA4_ARPG_EDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_TEMPLATE_V0_UNEDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_TEMPLATE_V0_EDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_TEMPLATE_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_TEMPLATE_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_BASED_GEN_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_BASED_GEN_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_SEQUENTIAL_UNEDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_SEQUENTIAL_EDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_MM_UNEDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_MM_EDITED, TEXT_GEN_SUGGESTION_LLM_PPO_TEXT_IMAGE_RM_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PPO_TEXT_IMAGE_RM_EDITED, TEXT_GEN_SUGGESTION_LLM_BRAND_LLAMA4_UNEDITED, TEXT_GEN_SUGGESTION_LLM_BRAND_LLAMA4_EDITED, TEXT_GEN_SUGGESTION_LLM_BRAND_GPT4O_UNEDITED, TEXT_GEN_SUGGESTION_LLM_BRAND_GPT4O_EDITED, TEXT_GEN_SUGGESTION_LLM_BRAND_HISTORICAL_ADS_V2_UNEDITED, TEXT_GEN_SUGGESTION_LLM_BRAND_HISTORICAL_ADS_V2_EDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_V2_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_V2_EDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_V2_COMPOUND_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_V2_COMPOUND_EDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_GPT4O_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_GPT4O_EDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_EDITABLE_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_EDITABLE_EDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_EDITABLE_COMPOUND_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_EDITABLE_COMPOUND_EDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_DEEPER_FUNNEL_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_DEEPER_FUNNEL_EDITED, TEXT_GEN_SUGGESTION_LLM_TARGET_PERSONA_BASED_GEN_BUNDLED_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_TARGET_PERSONA_BASED_GEN_BUNDLED_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_TARGET_PERSONA_BASED_GEN_BUNDLED_V2_UNEDITED, TEXT_GEN_SUGGESTION_LLM_TARGET_PERSONA_BASED_GEN_BUNDLED_V2_EDITED, TEXT_GEN_SUGGESTION_LLM_LLAMA4_SEGMENT_PROMPT_UNEDITED, TEXT_GEN_SUGGESTION_LLM_LLAMA4_SEGMENT_PROMPT_EDITED, TEXT_GEN_SUGGESTION_LLM_CONVERTER_BASED_PERSONA_UNEDITED, TEXT_GEN_SUGGESTION_LLM_CONVERTER_BASED_PERSONA_EDITED, TEXT_GEN_SUGGESTION_LLM_CONVERTER_BASED_PERSONA_COMPOUND_UNEDITED, TEXT_GEN_SUGGESTION_LLM_CONVERTER_BASED_PERSONA_COMPOUND_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_DEEPER_FUNNEL_PPO_LLAMA3_1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_DEEPER_FUNNEL_PPO_LLAMA3_1_EDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_LLAMA4_ARPG_HOOK_BUNDLE_V0_UNEDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_LLAMA4_ARPG_HOOK_BUNDLE_V0_EDITED, TEXT_GEN_SUGGESTION_LLM_IF_MORL_25H2_PERSONA_UNEDITED, TEXT_GEN_SUGGESTION_LLM_IF_MORL_25H2_PERSONA_EDITED, TEXT_GEN_SUGGESTION_LLM_LLAMA4_LANDING_PAGE_CONTEXT_UNEDITED, TEXT_GEN_SUGGESTION_LLM_LLAMA4_LANDING_PAGE_CONTEXT_EDITED, TEXT_GEN_SUGGESTION_LLM_GPT4O_LANDING_PAGE_CONTEXT_UNEDITED, TEXT_GEN_SUGGESTION_LLM_GPT4O_LANDING_PAGE_CONTEXT_EDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_RM_V0_UNEDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_RM_V0_EDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_RM_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_RM_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_DEEPER_FUNNEL_PPO_LLAMA3_V2_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_DEEPER_FUNNEL_PPO_LLAMA3_V2_EDITED, TEXT_GEN_SUGGESTION_LLM_TRANSLATION_V1, TEXT_FIRST_MANUAL_OPTION, TEXT_AUTO_TRANSLATION_MT_V1, TEXT_AUTO_TRANSLATION_LLM_V1, TEXT_TRANSLATIONS_LLAMA4_V1_TITLE, TEXT_TRANSLATIONS_LLAMA4_V1_BODY, TEXT_AD_HIGHLIGHT, PROMINENT_HEADLINE_NO_SHOW, TEXT_LIQUIDITY_BODY_WITH_PROMINENT_HEADLINE_TIER_1, TEXT_LIQUIDITY_BODY_WITH_PROMINENT_HEADLINE_TIER_2, TEXT_LIQUIDITY_BODY_WITH_PROMINENT_HEADLINE_TIER_3, TEXT_LIQUIDITY_BODY_WITH_PROMINENT_HEADLINE_TIER_4, TEXT_LIQUIDITY_BODY_WITH_PROMINENT_HEADLINE_TIER_5, TEXT_LIQUIDITY_BODY_WITH_PROMINENT_HEADLINE_ABSTRACTIVE, TEXT_GEN_AUTOMATION, TEXT_GEN_AUTOMATION_ALPHA_DEEPER_FUNNEL_USER_COHORT_BATCH_GENERATION, TEXT_GEN_AUTOMATION_ALPHA_BRAND_ALIGNER_USER_COHORT_SEQUENTIAL_GENERATION, TEXT_GEN_AUTOMATION_ALPHA_BRAND_ALIGNER_USER_COHORT_BATCH_GENERATION, TEXT_GEN_AUTOMATION_DEEPER_FUNNEL_PPO_SEQUENTIAL_TWO_STAGE_UNEDITED, TEXT_GEN_AUTOMATION_DEEPER_FUNNEL_PPO_SEQUENTIAL_TWO_STAGE_EDITED, TEXT_GEN_AUTOMATION_REVIEWED_DEEPER_FUNNEL_PPO_SEQUENTIAL_TWO_STAGE_UNEDITED, TEXT_GEN_AUTOMATION_REVIEWED_DEEPER_FUNNEL_PPO_SEQUENTIAL_TWO_STAGE_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_PERSONA_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_PERSONA_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_PERSONA_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_PERSONA_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_SELLING_POINT_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_SELLING_POINT_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_SELLING_POINT_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_SELLING_POINT_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_PERSONA_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_PERSONA_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_PERSONA_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_PERSONA_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_SELLING_POINT_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_SELLING_POINT_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_SELLING_POINT_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_SELLING_POINT_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_MARKETING_ANGLE_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_MARKETING_ANGLE_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_MARKETING_ANGLE_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_MARKETING_ANGLE_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_MARKETING_ANGLE_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_MARKETING_ANGLE_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_MARKETING_ANGLE_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_MARKETING_ANGLE_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_MOCK_UNEDITED, TEXT_GEN_SUGGESTION_MOCK_EDITED, TEXT_GEN_SUGGESTION_MOCK_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_MOCK_EDITED_BEFORE_AND_AFTER_ADD}*<br><br>`automation_status` *enum {OPT_IN, OPT_OUT}*<br><br>`tracking_tag` *list<enum {NONE, TEXT_GEN_LLM_PERSONA_EDITED_TAG}>*<br><br>`uuid` *string*<br>**[supports emoji]**<br><br><br>`text_gen_original_text` *string*<br>**[supports emoji]**<br><br><br>`language` *string*<br><br>`target_audience` *string*<br><br>`text_gen_input_text` *string*<br>**[supports emoji]**<br><br><br>`action_type` *enum {DEFAULT_ADD, DEFAULT_ADD_INTERACTION, MANUAL_ADD, STICKY_ADD, STICKY_ADD_INTERACTION, TEXT_AUTOMATION_DEFAULT_ADD, TEXT_AUTOMATION_DEFAULT_ADD_INTERACTION, TEXT_AUTOMATION_MANUAL_ADD, TEXT_AUTOMATION_STICKY_ADD, TEXT_AUTOMATION_STICKY_ADD_INTERACTION}*<br><br>`type` *enum {TEMPLATE}*<br><br>`link_urls` *list<Object>*<br><br>`website_url` *URL*<br><br>`display_url` *string*<br><br>`deeplink_url` *string*<br><br>`carousel_see_more_url` *URL*<br><br>`url_tags` *string*<br><br>`adlabels` *list<Object>*<br><br>`type` *enum {TEMPLATE}*<br><br>`omnichannel_link_spec` *JSON or object-like arrays*<br><br>`web` *JSON or object-like arrays*<br><br>`url` *string*<br><br>`app` *JSON or object-like arrays*<br><br>`application_id` *int64*<br><br>`platform_specs` *Object*<br><br>`android` *Object*<br><br>`app_name` *string*<br><br>`package_name` *string*<br><br>`url` *string*<br><br>`ios` *Object*<br><br>`app_name` *string*<br><br>`app_store_id` *string*<br><br>`url` *string*<br><br>`ipad` *Object*<br><br>`app_name` *string*<br><br>`app_store_id` *string*<br><br>`url` *string*<br><br>`iphone` *Object*<br><br>`app_name` *string*<br><br>`app_store_id` *string*<br><br>`url` *string*<br><br>`object_store_urls` *list<string>*<br><br>`android_url` *string*<br><br>`ios_url` *string*<br><br>`titles` *list<Object>*<br><br>`text` *string*<br>**[supports emoji]**<br><br><br>`url_tags` *string*<br><br>`adlabels` *list<Object>*<br><br>`translation_confidence` *int64*<br><br>`asset_source` *enum {ACO_TEXT_LIBRARY, TEXT_GEN_INPUT_TEXT, TEXT_GEN_SUGGESTION_DIVERSITY_UNEDITED, TEXT_GEN_SUGGESTION_DIVERSITY_EDITED, TEXT_GEN_SUGGESTION_DIVERSITY_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_DIVERSITY_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_PARAPHRASING_UNEDITED, TEXT_GEN_SUGGESTION_PARAPHRASING_EDITED, TEXT_GEN_SUGGESTION_PARAPHRASING_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_PARAPHRASING_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_UNEDITED, TEXT_GEN_SUGGESTION_LLM_EDITED, TEXT_GEN_SUGGESTION_LLM_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_UNEDITED, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_EDITED, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_1_UNEDITED, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_1_EDITED, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_1_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_1_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_2_UNEDITED, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_2_EDITED, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_2_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_V_1_2_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_SINGLE_STAGE_UNEDITED, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_SINGLE_STAGE_EDITED, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_SINGLE_STAGE_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_SEMANTIC_VARIATIONS_SINGLE_STAGE_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_BRAND_IDENTITY_UNEDITED, TEXT_GEN_SUGGESTION_BRAND_IDENTITY_EDITED, TEXT_GEN_SUGGESTION_BRAND_IDENTITY_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_BRAND_IDENTITY_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_BRAND_IDENTITY_V_1_1_UNEDITED, TEXT_GEN_SUGGESTION_BRAND_IDENTITY_V_1_1_EDITED, TEXT_GEN_SUGGESTION_BRAND_IDENTITY_V_1_1_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_BRAND_IDENTITY_V_1_1_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_ORCHESTRATOR_V_1_UNEDITED, TEXT_GEN_SUGGESTION_ORCHESTRATOR_V_1_EDITED, TEXT_GEN_SUGGESTION_ORCHESTRATOR_V_1_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_ORCHESTRATOR_V_1_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_ORCHESTRATOR_MULTILINGUAL_UNEDITED, TEXT_GEN_SUGGESTION_ORCHESTRATOR_MULTILINGUAL_EDITED, TEXT_GEN_SUGGESTION_GUIDANCE_LLM_EDITED, TEXT_GEN_SUGGESTION_GUIDANCE_LLM_UNEDITED, TEXT_GEN_SUGGESTION_GUIDANCE_SEMANTIC_VARIATIONS_EDITED, TEXT_GEN_SUGGESTION_GUIDANCE_SEMANTIC_VARIATIONS_UNEDITED, TEXT_GEN_SUGGESTION_GUIDANCE_SEMANTIC_VARIATIONS_V_1_1_EDITED, TEXT_GEN_SUGGESTION_GUIDANCE_SEMANTIC_VARIATIONS_V_1_1_UNEDITED, TEXT_GEN_SUGGESTION_GUIDANCE_SEMANTIC_VARIATIONS_V_1_2_EDITED, TEXT_GEN_SUGGESTION_GUIDANCE_SEMANTIC_VARIATIONS_V_1_2_UNEDITED, TEXT_GEN_SUGGESTION_GUIDANCE_SEMANTIC_VARIATIONS_SINGLE_STAGE_EDITED, TEXT_GEN_SUGGESTION_GUIDANCE_SEMANTIC_VARIATIONS_SINGLE_STAGE_UNEDITED, TEXT_GEN_SUGGESTION_GUIDANCE_BRAND_IDENTITY_EDITED, TEXT_GEN_SUGGESTION_GUIDANCE_BRAND_IDENTITY_UNEDITED, TEXT_GEN_SUGGESTION_GUIDANCE_BRAND_IDENTITY_V_1_1_EDITED, TEXT_GEN_SUGGESTION_GUIDANCE_BRAND_IDENTITY_V_1_1_UNEDITED, TEXT_GEN_SUGGESTION_GUIDANCE_ORCHESTRATOR_V_1_EDITED, TEXT_GEN_SUGGESTION_GUIDANCE_ORCHESTRATOR_V_1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_V2_UNEDITED, TEXT_GEN_SUGGESTION_LLM_V2_EDITED, TEXT_GEN_SUGGESTION_LLM_V2_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_V2_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_V2_DPO_UNEDITED, TEXT_GEN_SUGGESTION_LLM_V2_DPO_EDITED, TEXT_GEN_SUGGESTION_LLM_V2_DPO_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_V2_DPO_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_UNEDITED, TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_EDITED, TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_V2_LONG_UNEDITED, TEXT_GEN_SUGGESTION_LLM_V2_LONG_EDITED, TEXT_GEN_SUGGESTION_LLM_V2_LONG_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_V2_LONG_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_LONG_UNEDITED, TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_LONG_EDITED, TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_LONG_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_V2_DPO_PPO_LONG_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_V3_UNEDITED, TEXT_GEN_SUGGESTION_LLM_V3_EDITED, TEXT_GEN_SUGGESTION_LLM_V3_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_V3_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_V3_LONG_UNEDITED, TEXT_GEN_SUGGESTION_LLM_V3_LONG_EDITED, TEXT_GEN_SUGGESTION_LLM_V3_LONG_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_V3_LONG_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_LC_PPO_UNEDITED, TEXT_GEN_SUGGESTION_LLM_LC_PPO_EDITED, TEXT_GEN_SUGGESTION_LLM_LC_PPO_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_LC_PPO_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_LC_PPO_LLAMA3_V1_FOR_IG_UNEDITED, TEXT_GEN_SUGGESTION_LLM_LC_PPO_LLAMA3_V1_FOR_IG_EDITED, TEXT_GEN_SUGGESTION_LLM_LC_PPO_V2_UNEDITED, TEXT_GEN_SUGGESTION_LLM_LC_PPO_V2_EDITED, TEXT_GEN_SUGGESTION_LLM_LC_PPO_V2_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_LC_PPO_V2_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_APP_DESCRIPTION_UNEDITED, TEXT_GEN_SUGGESTION_LLM_APP_DESCRIPTION_EDITED, TEXT_GEN_SUGGESTION_LLM_APP_DESCRIPTION_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_APP_DESCRIPTION_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V1_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V1_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V2_UNEDITED, TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V2_EDITED, TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V3_UNEDITED, TEXT_GEN_SUGGESTION_LLM_ORCHESTRATOR_V3_EDITED, TEXT_GEN_SUGGESTION_LLM_LC_PPO_LLAMA3_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_LC_PPO_LLAMA3_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_LC_PPO_LLAMA3_V1_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_LC_PPO_LLAMA3_V1_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_FC_PPO_LLAMA3_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_FC_PPO_LLAMA3_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_FC_PPO_LLAMA3_V1_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_FC_PPO_LLAMA3_V1_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_FC_PPO_LLAMA3_V1_FOR_FB_UNEDITED, TEXT_GEN_SUGGESTION_LLM_FC_PPO_LLAMA3_V1_FOR_FB_EDITED, TEXT_GEN_SUGGESTION_LLM_SFT_LLAMA3_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_SFT_LLAMA3_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_SFT_LLAMA3_V1_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_SFT_LLAMA3_V1_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_ADS_MANAGER_LLM_HEADLINE_HEURISTICS_V1_UNEDITED, TEXT_GEN_SUGGESTION_ADS_MANAGER_LLM_HEADLINE_HEURISTICS_V1_EDITED, TEXT_GEN_SUGGESTION_ADS_MANAGER_LLM_HEADLINE_LLAMA4_HOOKS_UNEDITED, TEXT_GEN_SUGGESTION_ADS_MANAGER_LLM_HEADLINE_LLAMA4_HOOKS_EDITED, TEXT_GEN_SUGGESTION_ADS_MANAGER_LLM_HEADLINE_GPT_OSS_HOOKS_UNEDITED, TEXT_GEN_SUGGESTION_ADS_MANAGER_LLM_HEADLINE_GPT_OSS_HOOKS_EDITED, TEXT_GEN_SUGGESTION_LLM_HEADLINE_ARPG_OSS_BUNDLE_UNEDITED, TEXT_GEN_SUGGESTION_LLM_HEADLINE_ARPG_OSS_BUNDLE_EDITED, TEXT_GEN_SUGGESTION_LLM_HEADLINE_ARPG_L4BASE_BUNDLE_UNEDITED, TEXT_GEN_SUGGESTION_LLM_HEADLINE_ARPG_L4BASE_BUNDLE_EDITED, TEXT_GEN_SUGGESTION_PPO_ORCHESTRATOR_V1_UNEDITED, TEXT_GEN_SUGGESTION_PPO_ORCHESTRATOR_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_BRAND_ALIGNER_UNEDITED, TEXT_GEN_SUGGESTION_LLM_BRAND_ALIGNER_EDITED, TEXT_GEN_SUGGESTION_LLM_IMPLICIT_BRAND_TONE_PRIMARY_TEXT_UNEDITED, TEXT_GEN_SUGGESTION_LLM_IMPLICIT_BRAND_TONE_PRIMARY_TEXT_EDITED, TEXT_GEN_SUGGESTION_LLM_IMPLICIT_BRAND_TONE_HISTORICAL_ADS_UNEDITED, TEXT_GEN_SUGGESTION_LLM_IMPLICIT_BRAND_TONE_HISTORICAL_ADS_EDITED, TEXT_GEN_SUGGESTION_LLM_FREEFORM_BRAND_TONE_UNEDITED, TEXT_GEN_SUGGESTION_LLM_FREEFORM_BRAND_TONE_EDITED, TEXT_GEN_SUGGESTION_LLM_COHORT_LLAMA3_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_COHORT_LLAMA3_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_LIGHTHOUSE_LLAMA3_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_LIGHTHOUSE_LLAMA3_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_PURPOSEFUL_GEN_SP_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PURPOSEFUL_GEN_SP_EDITED, TEXT_GEN_SUGGESTION_LLM_PURPOSEFUL_GEN_EA_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PURPOSEFUL_GEN_EA_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_NON_EN_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_NON_EN_EDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_UNEDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_EDITED, TEXT_GEN_SUGGESTION_LLM_DF_LLAMA4_ARPG_UNEDITED, TEXT_GEN_SUGGESTION_LLM_DF_LLAMA4_ARPG_EDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_TEMPLATE_V0_UNEDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_TEMPLATE_V0_EDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_TEMPLATE_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_TEMPLATE_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_BASED_GEN_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_BASED_GEN_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_SEQUENTIAL_UNEDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_SEQUENTIAL_EDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_MM_UNEDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_MM_EDITED, TEXT_GEN_SUGGESTION_LLM_PPO_TEXT_IMAGE_RM_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PPO_TEXT_IMAGE_RM_EDITED, TEXT_GEN_SUGGESTION_LLM_BRAND_LLAMA4_UNEDITED, TEXT_GEN_SUGGESTION_LLM_BRAND_LLAMA4_EDITED, TEXT_GEN_SUGGESTION_LLM_BRAND_GPT4O_UNEDITED, TEXT_GEN_SUGGESTION_LLM_BRAND_GPT4O_EDITED, TEXT_GEN_SUGGESTION_LLM_BRAND_HISTORICAL_ADS_V2_UNEDITED, TEXT_GEN_SUGGESTION_LLM_BRAND_HISTORICAL_ADS_V2_EDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_V2_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_V2_EDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_V2_COMPOUND_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_V2_COMPOUND_EDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_GPT4O_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_GPT4O_EDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_EDITABLE_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_EDITABLE_EDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_EDITABLE_COMPOUND_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_EDITABLE_COMPOUND_EDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_DEEPER_FUNNEL_UNEDITED, TEXT_GEN_SUGGESTION_LLM_PERSONA_DEEPER_FUNNEL_EDITED, TEXT_GEN_SUGGESTION_LLM_TARGET_PERSONA_BASED_GEN_BUNDLED_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_TARGET_PERSONA_BASED_GEN_BUNDLED_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_TARGET_PERSONA_BASED_GEN_BUNDLED_V2_UNEDITED, TEXT_GEN_SUGGESTION_LLM_TARGET_PERSONA_BASED_GEN_BUNDLED_V2_EDITED, TEXT_GEN_SUGGESTION_LLM_LLAMA4_SEGMENT_PROMPT_UNEDITED, TEXT_GEN_SUGGESTION_LLM_LLAMA4_SEGMENT_PROMPT_EDITED, TEXT_GEN_SUGGESTION_LLM_CONVERTER_BASED_PERSONA_UNEDITED, TEXT_GEN_SUGGESTION_LLM_CONVERTER_BASED_PERSONA_EDITED, TEXT_GEN_SUGGESTION_LLM_CONVERTER_BASED_PERSONA_COMPOUND_UNEDITED, TEXT_GEN_SUGGESTION_LLM_CONVERTER_BASED_PERSONA_COMPOUND_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_DEEPER_FUNNEL_PPO_LLAMA3_1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_DEEPER_FUNNEL_PPO_LLAMA3_1_EDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_LLAMA4_ARPG_HOOK_BUNDLE_V0_UNEDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_LLAMA4_ARPG_HOOK_BUNDLE_V0_EDITED, TEXT_GEN_SUGGESTION_LLM_IF_MORL_25H2_PERSONA_UNEDITED, TEXT_GEN_SUGGESTION_LLM_IF_MORL_25H2_PERSONA_EDITED, TEXT_GEN_SUGGESTION_LLM_LLAMA4_LANDING_PAGE_CONTEXT_UNEDITED, TEXT_GEN_SUGGESTION_LLM_LLAMA4_LANDING_PAGE_CONTEXT_EDITED, TEXT_GEN_SUGGESTION_LLM_GPT4O_LANDING_PAGE_CONTEXT_UNEDITED, TEXT_GEN_SUGGESTION_LLM_GPT4O_LANDING_PAGE_CONTEXT_EDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_RM_V0_UNEDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_RM_V0_EDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_RM_V1_UNEDITED, TEXT_GEN_SUGGESTION_LLM_DEEPER_FUNNEL_PPO_HOOK_RM_V1_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_DEEPER_FUNNEL_PPO_LLAMA3_V2_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_MULTILINGUAL_DEEPER_FUNNEL_PPO_LLAMA3_V2_EDITED, TEXT_GEN_SUGGESTION_LLM_TRANSLATION_V1, TEXT_FIRST_MANUAL_OPTION, TEXT_AUTO_TRANSLATION_MT_V1, TEXT_AUTO_TRANSLATION_LLM_V1, TEXT_TRANSLATIONS_LLAMA4_V1_TITLE, TEXT_TRANSLATIONS_LLAMA4_V1_BODY, TEXT_AD_HIGHLIGHT, PROMINENT_HEADLINE_NO_SHOW, TEXT_LIQUIDITY_BODY_WITH_PROMINENT_HEADLINE_TIER_1, TEXT_LIQUIDITY_BODY_WITH_PROMINENT_HEADLINE_TIER_2, TEXT_LIQUIDITY_BODY_WITH_PROMINENT_HEADLINE_TIER_3, TEXT_LIQUIDITY_BODY_WITH_PROMINENT_HEADLINE_TIER_4, TEXT_LIQUIDITY_BODY_WITH_PROMINENT_HEADLINE_TIER_5, TEXT_LIQUIDITY_BODY_WITH_PROMINENT_HEADLINE_ABSTRACTIVE, TEXT_GEN_AUTOMATION, TEXT_GEN_AUTOMATION_ALPHA_DEEPER_FUNNEL_USER_COHORT_BATCH_GENERATION, TEXT_GEN_AUTOMATION_ALPHA_BRAND_ALIGNER_USER_COHORT_SEQUENTIAL_GENERATION, TEXT_GEN_AUTOMATION_ALPHA_BRAND_ALIGNER_USER_COHORT_BATCH_GENERATION, TEXT_GEN_AUTOMATION_DEEPER_FUNNEL_PPO_SEQUENTIAL_TWO_STAGE_UNEDITED, TEXT_GEN_AUTOMATION_DEEPER_FUNNEL_PPO_SEQUENTIAL_TWO_STAGE_EDITED, TEXT_GEN_AUTOMATION_REVIEWED_DEEPER_FUNNEL_PPO_SEQUENTIAL_TWO_STAGE_UNEDITED, TEXT_GEN_AUTOMATION_REVIEWED_DEEPER_FUNNEL_PPO_SEQUENTIAL_TWO_STAGE_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_PERSONA_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_PERSONA_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_PERSONA_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_PERSONA_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_SELLING_POINT_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_SELLING_POINT_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_SELLING_POINT_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_SELLING_POINT_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_PERSONA_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_PERSONA_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_PERSONA_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_PERSONA_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_SELLING_POINT_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_SELLING_POINT_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_SELLING_POINT_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_SELLING_POINT_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_MARKETING_ANGLE_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_MARKETING_ANGLE_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_MARKETING_ANGLE_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_HEADLINE_WITH_MARKETING_ANGLE_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_MARKETING_ANGLE_UNEDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_MARKETING_ANGLE_EDITED, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_MARKETING_ANGLE_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_LLM_UNIFIED_PRIMARY_TEXT_WITH_MARKETING_ANGLE_EDITED_BEFORE_AND_AFTER_ADD, TEXT_GEN_SUGGESTION_MOCK_UNEDITED, TEXT_GEN_SUGGESTION_MOCK_EDITED, TEXT_GEN_SUGGESTION_MOCK_EDITED_BEFORE_ADD, TEXT_GEN_SUGGESTION_MOCK_EDITED_BEFORE_AND_AFTER_ADD}*<br><br>`automation_status` *enum {OPT_IN, OPT_OUT}*<br><br>`uuid` *string*<br>**[supports emoji]**<br><br><br>`text_gen_original_text` *string*<br>**[supports emoji]**<br><br><br>`language` *string*<br><br>`target_audience` *string*<br><br>`text_gen_input_text` *string*<br>**[supports emoji]**<br><br><br>`action_type` *enum {DEFAULT_ADD, DEFAULT_ADD_INTERACTION, MANUAL_ADD, STICKY_ADD, STICKY_ADD_INTERACTION, TEXT_AUTOMATION_DEFAULT_ADD, TEXT_AUTOMATION_DEFAULT_ADD_INTERACTION, TEXT_AUTOMATION_MANUAL_ADD, TEXT_AUTOMATION_STICKY_ADD, TEXT_AUTOMATION_STICKY_ADD_INTERACTION}*<br><br>`type` *enum {TEMPLATE}*<br><br>`tracking_tag` *list<enum {NONE, TEXT_GEN_LLM_PERSONA_EDITED_TAG}>*<br><br>`captions` *list<Object>*<br><br>`text` *string*<br><br>`url_tags` *string*<br><br>`adlabels` *list<Object>*<br><br>`type` *enum {TEMPLATE}*<br><br>`ad_formats` *list<enum {AUTOMATIC_FORMAT, CAROUSEL, CAROUSEL_IMAGE, CAROUSEL_VIDEO, COLLECTION, SINGLE_IMAGE, SINGLE_VIDEO, POST}>*<br><br>`groups` *list<JSON or object-like arrays>*<br><br>`image_label` *Object*<br><br>`video_label` *Object*<br><br>`body_label` *Object*<br><br>`description_label` *Object*<br><br>`link_url_label` *Object*<br><br>`title_label` *Object*<br><br>`caption_label` *Object*<br><br>`target_rules` *list<JSON or object-like arrays>*<br><br>`targeting` *JSON or object-like arrays*<br><br>`age_min` *int64*<br><br>`age_max` *int64*<br><br>`audience_network_positions` *list<enum{classic, rewarded_video, instream_video}>*<br><br>`device_platforms` *list<enum{desktop, mobile}>*<br><br>`facebook_positions` *list<enum{feed, instant_article, instream_video, marketplace, right_hand_column, search, story, suggested_video, video_feeds, story_sticker, facebook_reels_overlay, biz_disco_feed, facebook_reels, profile_feed, profile_reels, notification}>*<br><br>`instagram_positions` *list<enum{reels, reels_overlay, stream, story, explore, explore_home, ig_search, shop, profile_feed, profile_reels, effect_tray}>*<br><br>`messenger_positions` *list<enum{messenger_home, story, marketing_messages}>*<br><br>`threads_positions` *list<enum{threads_stream}>*<br><br>`genders` *list<int64>*<br><br>`publisher_platforms` *list<enum{facebook, instagram, audience_network, messenger, oculus, whatsapp, threads}>*<br><br>`interests` *list<JSON or object-like arrays>*<br><br>`id` *int64*<br><br>`name` *string*<br><br>`behaviors` *list<JSON or object-like arrays>*<br><br>`id` *int64*<br><br>`name` *string*<br><br>`customization_spec` *JSON or object-like arrays*<br><br>`age_min` *int64*<br><br>`age_max` *int64*<br><br>`audience_network_positions` *list<enum{classic, rewarded_video, instream_video}>*<br><br>`device_platforms` *list<enum{desktop, mobile}>*<br><br>`facebook_positions` *list<enum{feed, instant_article, instream_video, marketplace, right_hand_column, search, story, suggested_video, video_feeds, story_sticker, facebook_reels_overlay, biz_disco_feed, facebook_reels, profile_feed, profile_reels, notification}>*<br><br>`instagram_positions` *list<enum{reels, reels_overlay, stream, story, explore, explore_home, ig_search, shop, profile_feed, profile_reels, effect_tray}>*<br><br>`genders` *list<int64>*<br><br>`publisher_platforms` *list<enum{facebook, instagram, audience_network, messenger, oculus, whatsapp, threads}>*<br><br>`interests` *list<JSON or object-like arrays>*<br><br>`id` *int64*<br><br>`name` *string*<br><br>`behaviors` *list<JSON or object-like arrays>*<br><br>`id` *int64*<br><br>`name` *string*<br><br>`geo_locations` *JSON object*<br><br>`marketing_message_channels` *list<enum{whatsapp, messenger}>*<br><br>`image_label` *Object*<br><br>`video_label` *Object*<br><br>`body_label` *Object*<br><br>`description_label` *Object*<br><br>`link_url_label` *Object*<br><br>`title_label` *Object*<br><br>`caption_label` *Object*<br><br>`call_to_action_label` *Object*<br><br>`carousel_label` *Object*<br><br>`priority` *int64*<br><br>`is_default` *boolean*<br><br>`asset_customization_rules` *list<JSON or object-like arrays>*<br><br>`targeting` *JSON or object-like arrays*<br><br>`age_min` *int64*<br><br>`age_max` *int64*<br><br>`audience_network_positions` *list<enum{classic, rewarded_video, instream_video}>*<br><br>`device_platforms` *list<enum{desktop, mobile}>*<br><br>`facebook_positions` *list<enum{feed, instant_article, instream_video, marketplace, right_hand_column, search, story, suggested_video, video_feeds, story_sticker, facebook_reels_overlay, biz_disco_feed, facebook_reels, profile_feed, profile_reels, notification}>*<br><br>`instagram_positions` *list<enum{reels, reels_overlay, stream, story, explore, explore_home, ig_search, shop, profile_feed, profile_reels, effect_tray}>*<br><br>`messenger_positions` *list<enum{messenger_home, story, marketing_messages}>*<br><br>`threads_positions` *list<enum{threads_stream}>*<br><br>`genders` *list<int64>*<br><br>`publisher_platforms` *list<enum{facebook, instagram, audience_network, messenger, oculus, whatsapp, threads}>*<br><br>`interests` *list<JSON or object-like arrays>*<br><br>`id` *int64*<br><br>`name` *string*<br><br>`behaviors` *list<JSON or object-like arrays>*<br><br>`id` *int64*<br><br>`name` *string*<br><br>`customization_spec` *JSON or object-like arrays*<br><br>`age_min` *int64*<br><br>`age_max` *int64*<br><br>`audience_network_positions` *list<enum{classic, rewarded_video, instream_video}>*<br><br>`device_platforms` *list<enum{desktop, mobile}>*<br><br>`facebook_positions` *list<enum{feed, instant_article, instream_video, marketplace, right_hand_column, search, story, suggested_video, video_feeds, story_sticker, facebook_reels_overlay, biz_disco_feed, facebook_reels, profile_feed, profile_reels, notification}>*<br><br>`instagram_positions` *list<enum{reels, reels_overlay, stream, story, explore, explore_home, ig_search, shop, profile_feed, profile_reels, effect_tray}>*<br><br>`genders` *list<int64>*<br><br>`publisher_platforms` *list<enum{facebook, instagram, audience_network, messenger, oculus, whatsapp, threads}>*<br><br>`interests` *list<JSON or object-like arrays>*<br><br>`id` *int64*<br><br>`name` *string*<br><br>`behaviors` *list<JSON or object-like arrays>*<br><br>`id` *int64*<br><br>`name` *string*<br><br>`geo_locations` *JSON object*<br><br>`marketing_message_channels` *list<enum{whatsapp, messenger}>*<br><br>`image_label` *Object*<br><br>`video_label` *Object*<br><br>`body_label` *Object*<br><br>`description_label` *Object*<br><br>`link_url_label` *Object*<br><br>`title_label` *Object*<br><br>`caption_label` *Object*<br><br>`call_to_action_label` *Object*<br><br>`carousel_label` *Object*<br><br>`priority` *int64*<br><br>`is_default` *boolean*<br><br>`optimization_type` *enum{REGULAR, LANGUAGE, PLACEMENT, BRAND, LOCALIZED_PLACEMENTS, FORMAT_AUTOMATION, DOF_MESSAGING_DESTINATION, ACO_AUTOFLOW, MULTI_CREATOR, UNIFIED_PROFILE_VISIT_DESTINATION}*<br><br>`call_to_actions` *list<Object>*<br><br>`type` *enum{BOOK_TRAVEL, CONTACT_US, DONATE, DONATE_NOW, DOWNLOAD, GET_DIRECTIONS, GO_LIVE, INTERESTED, LEARN_MORE, SEE_DETAILS, LIKE_PAGE, MESSAGE_PAGE, RAISE_MONEY, SAVE, SEND_TIP, SHOP_NOW, SIGN_UP, VIEW_INSTAGRAM_PROFILE, INSTAGRAM_MESSAGE, LOYALTY_LEARN_MORE, PURCHASE_GIFT_CARDS, PAY_TO_ACCESS, SEE_MORE, TRY_IN_CAMERA, WHATSAPP_LINK, GET_IN_TOUCH, TRY_NOW, ASK_A_QUESTION, START_A_CHAT, CHAT_NOW, ASK_US, CHAT_WITH_US, BOOK_NOW, CHECK_AVAILABILITY, ORDER_NOW, WHATSAPP_MESSAGE, GET_MOBILE_APP, INSTALL_MOBILE_APP, USE_MOBILE_APP, INSTALL_APP, USE_APP, PLAY_GAME, TRY_DEMO, WATCH_VIDEO, WATCH_MORE, OPEN_LINK, NO_BUTTON, LISTEN_MUSIC, MOBILE_DOWNLOAD, GET_OFFER, GET_OFFER_VIEW, BUY_NOW, BUY_TICKETS, UPDATE_APP, BET_NOW, ADD_TO_CART, SELL_NOW, GET_SHOWTIMES, LISTEN_NOW, GET_EVENT_TICKETS, REMIND_ME, SEARCH_MORE, PRE_REGISTER, SWIPE_UP_PRODUCT, SWIPE_UP_SHOP, PLAY_GAME_ON_FACEBOOK, VISIT_WORLD, OPEN_INSTANT_APP, JOIN_GROUP, GET_PROMOTIONS, SEND_UPDATES, INQUIRE_NOW, VISIT_PROFILE, CHAT_ON_WHATSAPP, EXPLORE_MORE, CONFIRM, JOIN_CHANNEL, MAKE_AN_APPOINTMENT, ASK_ABOUT_SERVICES, BOOK_A_CONSULTATION, GET_A_QUOTE, BUY_VIA_MESSAGE, ASK_FOR_MORE_INFO, VIEW_PRODUCT, VIEW_CHANNEL, WATCH_LIVE_VIDEO, JOIN_LIVE_VIDEO, IMAGINE, CALL, MISSED_CALL, CALL_NOW, CALL_ME, APPLY_NOW, BUY, GET_QUOTE, SUBSCRIBE, RECORD_NOW, VOTE_NOW, GIVE_FREE_RIDES, REGISTER_NOW, OPEN_MESSENGER_EXT, EVENT_RSVP, CIVIC_ACTION, SEND_INVITES, REFER_FRIENDS, REQUEST_TIME, SEE_MENU, SEARCH, TRY_IT, TRY_ON, LINK_CARD, DIAL_CODE, FIND_YOUR_GROUPS, START_ORDER}*<br>**[required]**<br><br><br>`value` *Object*<br>**[supports emoji]**<br><br><br>`android_url` *string*<br><br>`ios_url` *string*<br><br>`link` *URL*<br><br>`app_link` *string*<br><br>`page` *numeric string or integer*<br><br>`link_format` *enum {VIDEO_LEAD, VIDEO_LPP, VIDEO_NEKO, VIDEO_NON_LINK, VIDEO_SHOP, WHATSAPP_CATALOG_ATTACHMENT}*<br><br>`application` *numeric string or integer*<br><br>`link_title` *string*<br>**[supports emoji]**<br><br><br>`link_description` *string*<br>**[supports emoji]**<br><br><br>`link_caption` *string*<br><br>`product_link` *string*<br><br>`get_movie_showtimes` *boolean*<br><br>`sponsorship` *Object*<br><br>`link` *URL*<br><br>`image` *URL*<br><br>`video_annotation` *Object*<br><br>`annotations` *list<Object>*<br><br>`start_time_in_sec` *int64*<br><br>`end_time_in_sec` *int64*<br><br>`link` *URL*<br><br>`link_title` *string*<br><br>`link_description` *string*<br><br>`link_caption` *string*<br><br>`image_url` *URL*<br><br>`header_color` *string*<br><br>`logo_url` *URL*<br><br>`post_click_cta_title` *string*<br><br>`post_click_description_title` *string*<br><br>`offer_id` *numeric string or integer*<br><br>`offer_view_id` *numeric string or integer*<br><br>`advanced_data` *Object*<br><br>`offer_id` *numeric string or integer*<br><br>`lead_gen_form_id` *numeric string or integer*<br><br>`referral_id` *numeric string or integer*<br><br>`search_dialog_id` *numeric string or integer*<br><br>`fundraiser_campaign_id` *numeric string or integer*<br><br>`event_id` *numeric string or integer*<br><br>`event_tour_id` *numeric string or integer*<br><br>`app_destination` *enum {MESSENGER, MESSENGER_EXTENSIONS, MESSENGER_GAMES, LINK_CARD, MARKETPLACE, WHATSAPP, INSTAGRAM_DIRECT, INSTAGRAM_LIVE_VIDEO, FACEBOOK_LIVE_VIDEO}*<br><br>`app_destination_page_id` *numeric string or integer*<br><br>`is_canvas_video_transition_enabled` *boolean*<br><br>`whatsapp_number` *string*<br><br>`preinput_text` *string*<br><br>`customized_message_page_cta_text` *string*<br><br>`external_offer_provider_id` *numeric string or integer*<br><br>`origins` *enum {COMPOSER, CAMERA}*<br><br>`object_store_urls` *array<string>*<br><br>`facebook_login_spec` *Object*<br><br>`facebook_login_app_id` *numeric string or integer*<br><br>`offer_type` *enum {NO_OFFER, PERCENTAGE_BASED, AMOUNT_BASED}*<br><br>`offer_pct_call_to_action` *enum {TEN}*<br><br>`offer_amt_call_to_action` *enum {TEN}*<br><br>`product_id` *numeric string or integer*<br><br>`group_id` *numeric string or integer*<br><br>`channel_id` *string*<br><br>`land_on_whatsapp_catalog` *enum{1, 2}*<br><br>`land_on_whatsapp_profile` *string*<br><br>`adlabels` *list<Object>*<br><br>`autotranslate` *array<string>*<br><br>`additional_data` *JSON object*<br><br>`carousels` *list<JSON or object-like arrays>*<br><br>`multi_share_end_card` *boolean*<br><br>**Default value: **`false`<br><br>`multi_share_optimized` *boolean*<br><br>**Default value: **`false`<br><br>`child_attachments` *list<JSON or object-like arrays>*<br><br>**Default value: **`Vec`<br>**[required]**<br><br><br>`image_label` *Object*<br><br>`video_label` *Object*<br><br>`body_label` *Object*<br><br>`call_to_action_type_label` *Object*<br><br>`description_label` *Object*<br><br>`link_url_label` *Object*<br><br>`title_label` *Object*<br><br>`phone_data_ids_label` *Object*<br><br>`static_card` *boolean*<br><br>`adlabels` *list<Object>*<br><br>`audios` *list<Object>*<br><br>`type` *enum {OPTED_OUT, RANDOM, SELECTED}*<br><br>`selected_audios` *array<JSON object>*<br><br>`is_audio_swap` *boolean*<br><br>`app_product_page_id` *string*<br><br>`promotional_metadata` *Object*<br><br>`allowed_coupon_code_sources` *array<enum {PROVIDED_BY_MERCHANT, PROVIDED_BY_MERCHANT_OFFER_MANAGEMENT, DETECTED_FROM_MERCHANT_ADS, DETECTED_FROM_MERCHANT_WEBSITE, DETECTED_FROM_MERCHANT_WEBSITE_URL, AD_CREATIVE_PRIMARY_TEXT, AD_CREATIVE_HEADLINE, AD_CREATIVE_DESCRIPTION, AD_CREATIVE_PRIMARY_TEXT_LLM, AD_CREATIVE_HEADLINE_LLM, AD_CREATIVE_DESCRIPTION_LLM, AD_CREATIVE_MANUAL_COUPON_CODES, EMAIL_CAPTURE_SHOPIFY, EMAIL_CAPTURE_NON_SHOPIFY, EMAIL_CAPTURE_GENERIC_CODE, WA_CAPTURE_GENERIC_CODE, DETECTED_FROM_MERCHANT_EMAIL_SIGNUP, PDO_MERCHANT_EMAIL_SIGNUP}>*<br><br>`allowed_promo_offer_ids` *array<numeric string>*<br><br>`product_catalog_id` *numeric string*<br><br>`product_catalog_id_for_email_capture` *numeric string*<br><br>`manual_coupon_codes` *array<string>*<br><br>`is_auto_update_allowed` *boolean*<br><br>`coupon_codes` *JSON object {enum {PROVIDED_BY_MERCHANT, PROVIDED_BY_MERCHANT_OFFER_MANAGEMENT, DETECTED_FROM_MERCHANT_ADS, DETECTED_FROM_MERCHANT_WEBSITE, DETECTED_FROM_MERCHANT_WEBSITE_URL, AD_CREATIVE_PRIMARY_TEXT, AD_CREATIVE_HEADLINE, AD_CREATIVE_DESCRIPTION, AD_CREATIVE_PRIMARY_TEXT_LLM, AD_CREATIVE_HEADLINE_LLM, AD_CREATIVE_DESCRIPTION_LLM, AD_CREATIVE_MANUAL_COUPON_CODES, EMAIL_CAPTURE_SHOPIFY, EMAIL_CAPTURE_NON_SHOPIFY, EMAIL_CAPTURE_GENERIC_CODE, WA_CAPTURE_GENERIC_CODE, DETECTED_FROM_MERCHANT_EMAIL_SIGNUP, PDO_MERCHANT_EMAIL_SIGNUP} : array<string>}*<br><br>`offer_details` *array<JSON object>*<br><br>`excluded_offers` *array<string>*<br><br>`pre_click_ad_containers` *array<enum {FACEBOOK_EBM, INSTAGRAM_REELS_MIDSCENE, INSTAGRAM_STORIES_CTA}>*<br><br>`web_destination_spec` *Object*<br><br>`url` *URL*<br><br>`call_ads_configuration` *Object*<br><br>`agent_greeting` *string*<br><br>`auto_response` *string*<br><br>`bizai_config` *string*<br><br>`greeting_audio_url` *string*<br><br>`call_destination_type` *enum{PHONE, MESSENGER, MESSENGER_AND_PHONE, WEBSITE_AND_CALL, WHATSAPP, WHATSAPP_ORGANIC}*<br><br>`callback_type` *enum{FORM, NOT_ENABLED, MESSENGER}*<br><br>`call_forwarding` *enum{ENABLED, DISABLED}*<br><br>`call_transcript` *enum{ENABLED, DISABLED}*<br><br>`phone_number` *string*<br><br>`recording_consent` *enum{TRANSCRIPTION_ENABLED, DISABLED}*<br><br>`lead_gen_configuration` *Object*<br><br>`is_form_qa_enabled` *boolean*<br><br>`is_work_email_enforcement_enabled` *boolean*<br><br>`verification_type` *enum{NOT_ENABLED, SMS}* |
| `authorization_category`<br><br>*enum{NONE, POLITICAL, POLITICAL_WITH_DIGITALLY_CREATED_MEDIA}* | Specifies whether ad is political or not. If your ad has political content, set this to `POLITICAL`, otherwise it defaults to `null`. Your ad will be disapproved if it contains political content but not labeled `POLITICAL`. See [Facebook Advertising Policies](https://www.facebook.com/policies/ads). This field cannot be used for [Dynamic Ads](https://developers.facebook.com/docs/marketing-api/dynamic-ad).<br> |
| `body`<br><br>*string* | The body of the ad.<br><br>**[supports emoji]**<br> |
| `branded_content`<br><br>*JSON object* | branded_content<br><br><br>`partners` *array<JSON object>*<br>partners<br><br><br>`fb_page_id` *numeric string*<br>fb_page_id<br><br><br>`ig_user_id` *numeric string*<br>ig_user_id<br><br><br>`ig_asset_id` *numeric string*<br>ig_asset_id<br><br><br>`identity_type` *enum {ADVERTISER, PARTNER_BUSINESS, PARTNER_CREATOR}*<br>identity_type<br><br><br>`has_create_ads_access` *boolean*<br>has_create_ads_access<br><br><br>`ui_version` *int64*<br>ui_version<br><br><br>`instagram_boost_post_access_token` *string*<br>instagram_boost_post_access_token<br><br><br>`ad_format` *enum {0, 1, 2, 3}*<br>ad_format<br><br><br>`creator_ad_permission_type` *enum {AUTOMATION_BRIEFS_PERMISSION, FB_ADS_PERMISSION, FB_AFFILIATE_ADS_PERMISSION, FB_ORGANIC_PERMISSION, FB_POST_PERMISSION, FB_PRODUCT_TAG_PERMISSION, IG_ADS_PERMISSION, IG_ADS_PERMISSION_DIRECTION_AGNOSTIC, IG_ORGANIC_PERMISSION, IG_POST_PERMISSION, SAME_BUSINESS_PERMISSION, UGC_CREATOR_PAYMENTS_PERMISSION}*<br>creator_ad_permission_type<br><br><br>`is_mca_internal` *boolean*<br>is_mca_internal<br><br><br>`promoted_page_id` *numeric string*<br>promoted_page_id<br><br><br>`facebook_boost_post_access_token` *string*<br>facebook_boost_post_access_token<br><br><br>`content_search_input` *string*<br>content_search_input<br><br><br>`testimonial` *string*<br>testimonial<br><br><br>`product_set_partner_selection_status` *enum {OPT_IN, OPT_OUT}*<br>product_set_partner_selection_status<br><br><br>`parent_source_instagram_media_id` *numeric string*<br>parent_source_instagram_media_id<br><br><br>`parent_source_facebook_post_id` *numeric string*<br>parent_source_facebook_post_id<br><br><br>`testimonial_locale` *string*<br>testimonial_locale<br><br><br>`acting_business_id` *numeric string*<br>acting_business_id<br><br><br>`deliver_dynamic_partner_content` *boolean*<br>deliver_dynamic_partner_content<br><br><br>`automated_adgroup_creation` *boolean*<br>automated_adgroup_creation<br><br><br>`content_list` *JSON object*<br>content_list<br><br><br>`id` *numeric string*<br>id<br><br><br>`import_time` *datetime/timestamp*<br>import_time<br> |
| `branded_content_sponsor_page_id`<br><br>*numeric string or integer* | ID for page representing business which runs Branded Content ads. See [Creating Branded Content Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/branded-content).<br> |
| `bundle_folder_id`<br><br>*numeric string or integer* | The [Dynamic Ad's](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads) bundle folder ID<br> |
| `call_to_action`<br><br>*Object* | This field promotes an onsite or offsite action.<br><br>**[supports emoji]**<br><br><br>`type` *enum{BOOK_TRAVEL, CONTACT_US, DONATE, DONATE_NOW, DOWNLOAD, GET_DIRECTIONS, GO_LIVE, INTERESTED, LEARN_MORE, SEE_DETAILS, LIKE_PAGE, MESSAGE_PAGE, RAISE_MONEY, SAVE, SEND_TIP, SHOP_NOW, SIGN_UP, VIEW_INSTAGRAM_PROFILE, INSTAGRAM_MESSAGE, LOYALTY_LEARN_MORE, PURCHASE_GIFT_CARDS, PAY_TO_ACCESS, SEE_MORE, TRY_IN_CAMERA, WHATSAPP_LINK, GET_IN_TOUCH, TRY_NOW, ASK_A_QUESTION, START_A_CHAT, CHAT_NOW, ASK_US, CHAT_WITH_US, BOOK_NOW, CHECK_AVAILABILITY, ORDER_NOW, WHATSAPP_MESSAGE, GET_MOBILE_APP, INSTALL_MOBILE_APP, USE_MOBILE_APP, INSTALL_APP, USE_APP, PLAY_GAME, TRY_DEMO, WATCH_VIDEO, WATCH_MORE, OPEN_LINK, NO_BUTTON, LISTEN_MUSIC, MOBILE_DOWNLOAD, GET_OFFER, GET_OFFER_VIEW, BUY_NOW, BUY_TICKETS, UPDATE_APP, BET_NOW, ADD_TO_CART, SELL_NOW, GET_SHOWTIMES, LISTEN_NOW, GET_EVENT_TICKETS, REMIND_ME, SEARCH_MORE, PRE_REGISTER, SWIPE_UP_PRODUCT, SWIPE_UP_SHOP, PLAY_GAME_ON_FACEBOOK, VISIT_WORLD, OPEN_INSTANT_APP, JOIN_GROUP, GET_PROMOTIONS, SEND_UPDATES, INQUIRE_NOW, VISIT_PROFILE, CHAT_ON_WHATSAPP, EXPLORE_MORE, CONFIRM, JOIN_CHANNEL, MAKE_AN_APPOINTMENT, ASK_ABOUT_SERVICES, BOOK_A_CONSULTATION, GET_A_QUOTE, BUY_VIA_MESSAGE, ASK_FOR_MORE_INFO, VIEW_PRODUCT, VIEW_CHANNEL, WATCH_LIVE_VIDEO, JOIN_LIVE_VIDEO, IMAGINE, CALL, MISSED_CALL, CALL_NOW, CALL_ME, APPLY_NOW, BUY, GET_QUOTE, SUBSCRIBE, RECORD_NOW, VOTE_NOW, GIVE_FREE_RIDES, REGISTER_NOW, OPEN_MESSENGER_EXT, EVENT_RSVP, CIVIC_ACTION, SEND_INVITES, REFER_FRIENDS, REQUEST_TIME, SEE_MENU, SEARCH, TRY_IT, TRY_ON, LINK_CARD, DIAL_CODE, FIND_YOUR_GROUPS, START_ORDER}*<br>The type of the action. Not all types can be used for all<br>ads. Check<br>[Ads Product Guide](https://www.facebook.com/business/ads-guide)<br>to see which type can be used for based on the `objective` of your<br>campaign.<br><br>**[required]**<br><br><br>`value` *Object*<br><br>**Default value: **`Vec`<br>JSON containing the call to action data.<br><br>**[supports emoji]**<br><br><br>`android_url` *string*<br><br>`ios_url` *string*<br><br>`link` *URL*<br><br>`app_link` *string*<br><br>`page` *numeric string or integer*<br><br>`link_format` *enum {VIDEO_LEAD, VIDEO_LPP, VIDEO_NEKO, VIDEO_NON_LINK, VIDEO_SHOP, WHATSAPP_CATALOG_ATTACHMENT}*<br><br>`application` *numeric string or integer*<br><br>`link_title` *string*<br>**[supports emoji]**<br><br><br>`link_description` *string*<br>**[supports emoji]**<br><br><br>`link_caption` *string*<br><br>`product_link` *string*<br><br>`get_movie_showtimes` *boolean*<br><br>`sponsorship` *Object*<br><br>`link` *URL*<br><br>`image` *URL*<br><br>`video_annotation` *Object*<br><br>`annotations` *list<Object>*<br><br>`start_time_in_sec` *int64*<br><br>`end_time_in_sec` *int64*<br><br>`link` *URL*<br><br>`link_title` *string*<br><br>`link_description` *string*<br><br>`link_caption` *string*<br><br>`image_url` *URL*<br><br>`header_color` *string*<br><br>`logo_url` *URL*<br><br>`post_click_cta_title` *string*<br><br>`post_click_description_title` *string*<br><br>`offer_id` *numeric string or integer*<br><br>`offer_view_id` *numeric string or integer*<br><br>`advanced_data` *Object*<br><br>`offer_id` *numeric string or integer*<br><br>`lead_gen_form_id` *numeric string or integer*<br><br>`referral_id` *numeric string or integer*<br><br>`search_dialog_id` *numeric string or integer*<br><br>`fundraiser_campaign_id` *numeric string or integer*<br><br>`event_id` *numeric string or integer*<br><br>`event_tour_id` *numeric string or integer*<br><br>`app_destination` *enum {MESSENGER, MESSENGER_EXTENSIONS, MESSENGER_GAMES, LINK_CARD, MARKETPLACE, WHATSAPP, INSTAGRAM_DIRECT, INSTAGRAM_LIVE_VIDEO, FACEBOOK_LIVE_VIDEO}*<br><br>`app_destination_page_id` *numeric string or integer*<br><br>`is_canvas_video_transition_enabled` *boolean*<br><br>`whatsapp_number` *string*<br><br>`preinput_text` *string*<br><br>`customized_message_page_cta_text` *string*<br><br>`external_offer_provider_id` *numeric string or integer*<br><br>`origins` *enum {COMPOSER, CAMERA}*<br><br>`object_store_urls` *array<string>*<br><br>`facebook_login_spec` *Object*<br><br>`facebook_login_app_id` *numeric string or integer*<br><br>`offer_type` *enum {NO_OFFER, PERCENTAGE_BASED, AMOUNT_BASED}*<br><br>`offer_pct_call_to_action` *enum {TEN}*<br><br>`offer_amt_call_to_action` *enum {TEN}*<br><br>`product_id` *numeric string or integer*<br><br>`group_id` *numeric string or integer*<br><br>`channel_id` *string*<br><br>`land_on_whatsapp_catalog` *enum{1, 2}*<br><br>`land_on_whatsapp_profile` *string* |
| `categorization_criteria`<br><br>*enum{brand, category, product_type}* | The [Dynamic Category Ad's](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads) categorization criteria<br> |
| `category_media_source`<br><br>*enum{CATEGORY, MIXED, PRODUCTS_COLLAGE, PRODUCTS_SLIDESHOW}* | The [Dynamic Ad's](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads) rendering mode for category ads<br> |
| `contextual_multi_ads`<br><br>*JSON object* | contextual_multi_ads<br><br><br>`eligibility` *array<enum {}>*<br>eligibility<br><br><br>`enroll_status` *enum {OPT_IN, OPT_OUT}*<br>enroll_status<br><br><br>`action_metadata` *JSON object*<br>action_metadata<br><br><br>`type` *enum {DEFAULT, DEFAULT_OPT_IN, DEFAULT_OPT_OUT, DUPLICATION_UPGRADE, DUPLICATION_UPSELL, MANUAL, STICKY_OPT_IN, STICKY_OPT_OUT}*<br>type<br><br>**[required]**<br> |
| `degrees_of_freedom_spec`<br><br>*JSON object* | Specifies the type of transformation which is enabled for the given creative<br><br><br>`ad_handle_type` *enum{ORIGINAL, DYNAMIC}*<br><br>`degrees_of_freedom_type` *enum{DISABLED, USER_ENROLLED_AUTOFLOW, USER_ENROLLED_LWI_ACO, USER_ENROLLED_NON_DCO, USER_ENROLLED_IMAGE_CROPPING_NON_DCO, USER_ENROLLED, VIDEO_TEMPLATES, FAM_TOGGLE_ON, FAM_TOGGLE_OFF, SMART_CROP_ELIGIBLE_ON, SMART_CROP_ELIGIBLE_OFF, SMART_CROP_INELIGIBLE_ON, SMART_CROP_INELIGIBLE_OFF, VCK_MIXED_FORMAT}*<br>**[required]**<br><br><br>`multi_media_transformation_type` *enum{ADSET_IMAGES_TO_VIDEO, CAROUSEL_IMAGES_TO_VIDEO}*<br><br>`mobile_app_star_rating_enabled` *boolean*<br><br>**Default value: **`false`<br><br>`image_transformation_types` *list<enum{CROPPING, ENHANCEMENT, COLOR_FILTERING, AUTOGEN_MIXED_FORMAT, FB_REELS_IMAGE_DEFAULT, IG_REELS_IMAGE_PORTAL}>*<br><br>`text_transformation_types` *list<enum{TEXT_LIQUIDITY}>*<br><br>`video_transformation_types` *list<enum{CROPPING, CROPPING_ACF, FB_REELS_VIDEO_DEFAULT, IG_REELS_VIDEO_PORTAL}>*<br><br>`stories_transformation_types` *list<enum{SMART_CROP, INSTAGRAM_PROFILE_CARD, INSTAGRAM_END_CARD, INSTAGRAM_MOBILE_APP_INSTALL_CARD, PORTAL}>*<br><br>`creative_features_spec` *JSON object {enum {IG_VIDEO_NATIVE_SUBTITLE, IMAGE_ANIMATION, PRODUCT_BROWSING, PRODUCT_METADATA_AUTOMATION, PROFILE_CARD, STANDARD_ENHANCEMENTS_CATALOG, TEXT_OVERLAY_TRANSLATION} : JSON object}* |
| `destination_set_id`<br><br>*numeric string* | The ID of the Product Set for a Destination Catalog that will be used to link with Travel Catalogs.<br> |
| `dynamic_ad_voice`<br><br>*enum{DYNAMIC, STORY_OWNER}* | Determines the Page voice to be used in [Dynamic Local Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/event-ads)<br> |
| `enable_direct_install`<br><br>*boolean* | Whether Direct Install should be enabled on supported devices.<br> |
| `enable_launch_instant_app`<br><br>*boolean* | Whether Instant App should be enabled on supported devices.<br> |
| `execution_options`<br><br>*list<enum{validate_only}>* | **Default value: **`Set`<br>An execution setting<br> `validate_only`: when this option is specified, the API call will not perform the mutation but will run through the validation rules against values of each field. <br>If the call passes validation or review, response will be `{"success": true}`. If the call does not pass, an error will be returned with more details. These options can be used to improve any UI to display errors to the user much sooner, e.g. as soon as a new value is typed into any field corresponding to this ad object, rather than at the upload/save stage, or after review.<br> |
| `existing_post_title`<br><br>*string* | existing_post_title<br> |
| `facebook_branded_content`<br><br>*JSON object* | Params required for facebook branded content.<br><br><br>`sponsor_page_id` *numeric string*<br>sponsor_page_id<br><br><br>`shared_to_sponsor_status` *enum {NOT_SHARED, ALL_SHARED}*<br>shared_to_sponsor_status<br> |
| `format_transformation_spec`<br><br>*array<JSON object>* | format_transformation_spec<br><br><br>`data_source` *array<enum {APP_INFORMATION, CATALOG, IG_VALIDATION_BYPASS, MANUAL_UPLOADS, NONE, RELATED_MEDIA, SITE_LINKS}>*<br><br>**Default value: **`[]`<br>data_source<br><br><br>`format` *enum {CAROUSEL, COLLAGE, DA_COLLECTION, SA_CAROUSEL, SA_COLLECTION, SINGLE_MEDIA, VIDEO_SLIDESHOW}*<br>format<br><br>**[required]**<br><br><br>`customizations` *array<JSON object>*<br>customizations<br><br><br>`name` *enum {PRESERVE_HERO_MEDIA}*<br>name<br><br>**[required]**<br><br><br>`enroll_status` *enum {OPT_IN, OPT_OUT}*<br>enroll_status<br><br>**[required]**<br><br><br>`scope` *array<enum {APP_INFORMATION, CATALOG, IG_VALIDATION_BYPASS, MANUAL_UPLOADS, NONE, RELATED_MEDIA, SITE_LINKS}>*<br><br>**Default value: **`[]`<br>scope<br> |
| `image_crops`<br><br>*dictionary { enum{191x100, 100x72, 400x150, 600x360, 100x100, 400x500, 90x160, 300x400} : <list<list<int64>>> }* | Crop dimensions for the image specified. See [image crop reference](https://developers.facebook.com/documentation/ads-commerce/marketing-api/image-crops) for more details.<br> |
| `image_file`<br><br>*string* | Reference to a local image file to upload for use in a creative. Not to exceed 8MB in size. If `object_story_spec` or `object_story_id` is specified, this field will be ignored<br> |
| `image_hash`<br><br>*string* | Image hash for an image you have [uploaded](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-image) and can be used in a creative. If `object_story_spec` or `object_story_id` is specified, this field will be ignored<br> |
| `image_url`<br><br>*URL* | URL for the image in this ad creative. Do not use image URLs returned by Facebook. Instead you should host the image on your own servers. Facebook saves the image from your URL to your [ad account's image library](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-image). Images cannot exceed 8 MB. You must also provide one of these three fields: `image_file`, `image_hash`, or `image_url`.<br> |
| `instagram_branded_content`<br><br>*JSON object* | Params required for instagram branded content.<br><br><br>`sponsor_id` *numeric string or integer*<br><br>`sponsor_asset_id` *numeric string or integer* |
| `instagram_permalink_url`<br><br>*URL* | URL for a post on Instagram you want to run as an ad. Also known as Instagram media.<br> |
| `instagram_user_id`<br><br>*numeric string or integer* | Instagram user ID<br> |
| `interactive_components_spec`<br><br>*JSON object* | The specification for interactive component overlay on the media.<br><br>**[supports emoji]**<br><br><br>`child_attachments` *list<JSON object>*<br><br>`components` *list<JSON object>*<br><br>`poll_spec` *JSON object*<br>**[required]**<br><br>**[supports emoji]**<br><br><br>`option_a_text` *string*<br>**[required]**<br><br><br>`option_b_text` *string*<br>**[required]**<br><br><br>`question_text` *string*<br><br>**Default value: **`""`<br><br>`product_tag_spec` *JSON object*<br><br>`position_spec` *JSON object*<br><br>`link_spec` *JSON object*<br><br>`feed_media_spec` *JSON object*<br><br>`product_sticker_spec` *JSON object*<br><br>`cta_sticker_spec` *JSON object*<br><br>`type` *enum {7, 14, 9, 4, 8, 5, 3, 12, 1, 11, 10, 2}*<br>**[required]**<br><br><br>`enroll_status` *enum {OPT_IN, OPT_OUT}*<br><br>`components` *list<JSON object>*<br><br>`poll_spec` *JSON object*<br>**[required]**<br><br>**[supports emoji]**<br><br><br>`option_a_text` *string*<br>**[required]**<br><br><br>`option_b_text` *string*<br>**[required]**<br><br><br>`question_text` *string*<br><br>**Default value: **`""`<br><br>`product_tag_spec` *JSON object*<br><br>`position_spec` *JSON object*<br><br>`link_spec` *JSON object*<br><br>`feed_media_spec` *JSON object*<br><br>`product_sticker_spec` *JSON object*<br><br>`cta_sticker_spec` *JSON object*<br><br>`type` *enum {7, 14, 9, 4, 8, 5, 3, 12, 1, 11, 10, 2}*<br>**[required]**<br><br><br>`enroll_status` *enum {OPT_IN, OPT_OUT}* |
| `link_og_id`<br><br>*string* | The Open Graph (OG) ID for the link in this creative if the landing page has OG tags.<br> |
| `link_url`<br><br>*URL* | Identify a specific landing tab on your Facebook page by the Page tab's URL. See [connection objects](https://developers.facebook.com/docs/reference/ads-api/connectionobjects) for retrieving Page tab URLs. You can add [app_data](https://developers.facebook.com/documentation/facebook-login/guides/advanced/manual-flow) parameters to the URL to pass data to a Page's tab.<br> |
| `marketing_message_structured_spec`<br><br>*JSON object (AdCreativeMarketingMessageStructuredSpec)* | JSON object of [AdCreativeMarketingMessageStructuredSpec](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-creative-marketing-message-structured-spec) type. Optional customizations for the WhatsApp marketing message delivered with your ad. Omit it and the marketing message is built from `object_story_spec`. Pass it only to make the marketing message differ from the rest of your ad, and include only the fields you want to customize: every child parameter is optional and falls back independently to the matching content in `object_story_spec`.<br> |
| `media_sourcing_spec`<br><br>*JSON object* | media sourcing spec for advertiser to specify additional media from various sources<br><br><br>`related_media` *JSON object*<br>related_media<br><br><br>`images` *array<JSON object>*<br>images<br><br><br>`hash` *string*<br>hash<br><br><br>`url` *string*<br>url<br><br><br>`image_crops` *JSON object {string : array<array<int64>>}*<br>image_crops<br><br><br>`source` *enum {CATALOG_PRODUCTS, DCO, GEN_AI, MANUAL, MULTI_MEDIA, PUSH_MODEL, RELATED_MEDIA, REPLACE_MEDIA_TEXT}*<br>source<br><br><br>`group_id` *string*<br>group_id<br><br><br>`text_customizations` *JSON object*<br>text_customizations<br><br><br>`titles` *array<JSON object>*<br>titles<br><br><br>`text` *string*<br>text<br><br><br>`bodies` *array<JSON object>*<br>bodies<br><br><br>`text` *string*<br>text<br><br><br>`descriptions` *array<JSON object>*<br>descriptions<br><br><br>`text` *string*<br>text<br><br><br>`destination_customizations` *array<JSON object>*<br>destination_customizations<br><br><br>`url` *string*<br>url<br><br>**[required]**<br><br><br>`display_url` *string*<br>display_url<br><br><br>`opt_in_status` *enum {OPT_IN, OPT_IN_AS_INFERRED_DA_INTRO_CARD, OPT_OUT}*<br>opt_in_status<br><br><br>`action_metadata` *enum {AI_AGENT, AMA, AUTORULE, CIC_GUIDANCE, CROP_OVERRIDE, DEFAULT, DEFAULT_FOR_PRODUCT_SET, DEFAULT_OFF, DUPLICATION_UPGRADE, MANUAL, PFR_GUIDANCE, PRODUCT_TAG_GUIDED, RECOMMENDATION_COLUMN_GUIDANCE, REFRESH, STICKY, SYD_GUIDANCE, UNKOWN}*<br>action_metadata<br><br><br>`creation_source` *enum {ADVERTISER_UPLOAD, WEBSITE_MEDIA, VIDEO_THUMBNAIL, OTHER}*<br>creation_source<br><br><br>`retriever_sources` *array<enum {AD_CONTEXT, ADS_LLAMA, CREATIVE_GRAPH, PIGGYBACK, SAME_ACCOUNT_MEDIA_SEARCH, VIDEO_THUMBNAIL, WEBSITE_MEDIA}>*<br>retriever_sources<br><br><br>`videos` *array<JSON object>*<br>videos<br><br><br>`video_id` *string*<br>video_id<br><br><br>`source` *enum {CATALOG_PRODUCTS, DCO, GEN_AI, MANUAL, MULTI_MEDIA, PUSH_MODEL, RELATED_MEDIA, REPLACE_MEDIA_TEXT}*<br>source<br><br><br>`group_id` *string*<br>group_id<br><br><br>`text_customizations` *JSON object*<br>text_customizations<br><br><br>`titles` *array<JSON object>*<br>titles<br><br><br>`text` *string*<br>text<br><br><br>`bodies` *array<JSON object>*<br>bodies<br><br><br>`text` *string*<br>text<br><br><br>`descriptions` *array<JSON object>*<br>descriptions<br><br><br>`text` *string*<br>text<br><br><br>`destination_customizations` *array<JSON object>*<br>destination_customizations<br><br><br>`url` *string*<br>url<br><br>**[required]**<br><br><br>`display_url` *string*<br>display_url<br><br><br>`original_video_id` *string*<br>original_video_id<br><br><br>`opt_in_status` *enum {OPT_IN, OPT_IN_AS_INFERRED_DA_INTRO_CARD, OPT_OUT}*<br>opt_in_status<br><br><br>`action_metadata` *enum {AI_AGENT, AMA, AUTORULE, CIC_GUIDANCE, CROP_OVERRIDE, DEFAULT, DEFAULT_FOR_PRODUCT_SET, DEFAULT_OFF, DUPLICATION_UPGRADE, MANUAL, PFR_GUIDANCE, PRODUCT_TAG_GUIDED, RECOMMENDATION_COLUMN_GUIDANCE, REFRESH, STICKY, SYD_GUIDANCE, UNKOWN}*<br>action_metadata<br><br><br>`creation_source` *enum {ADVERTISER_UPLOAD, WEBSITE_MEDIA, VIDEO_THUMBNAIL, OTHER}*<br>creation_source<br><br><br>`retriever_sources` *array<enum {AD_CONTEXT, ADS_LLAMA, CREATIVE_GRAPH, PIGGYBACK, SAME_ACCOUNT_MEDIA_SEARCH, VIDEO_THUMBNAIL, WEBSITE_MEDIA}>*<br>retriever_sources<br><br><br>`titles` *array<JSON object>*<br>titles<br><br><br>`text` *string*<br>text<br><br><br>`bodies` *array<JSON object>*<br>bodies<br><br><br>`text` *string*<br>text<br><br><br>`descriptions` *array<JSON object>*<br>descriptions<br><br><br>`text` *string*<br>text<br><br><br>`images` *array<JSON object>*<br>images<br><br><br>`hash` *string*<br>hash<br><br><br>`url` *string*<br>url<br><br><br>`source` *enum {CATALOG_PRODUCTS, DCO, GEN_AI, MANUAL, MULTI_MEDIA, PUSH_MODEL, RELATED_MEDIA, REPLACE_MEDIA_TEXT}*<br>source<br><br><br>`image_crops` *array<JSON object>*<br>image_crops<br><br><br>`type` *enum {AUTO_CROP, MANUAL, SMART_CROP, SUPER_CROP}*<br>type<br><br>**[required]**<br><br><br>`crop_spec` *JSON object {string : array<array<int64>>}*<br>crop_spec<br><br>**[required]**<br><br><br>`destination_customizations` *array<JSON object>*<br>destination_customizations<br><br><br>`url` *string*<br>url<br><br>**[required]**<br><br><br>`display_url` *string*<br>display_url<br><br><br>`placement_customizations` *array<JSON object>*<br>placement_customizations<br><br><br>`publisher_platform` *enum {FACEBOOK, INSTAGRAM, AUDIENCE_NETWORK, MESSENGER, WHATSAPP, OCULUS, THREADS}*<br>publisher_platform<br><br>**[required]**<br><br><br>`placement_exclusions` *array<string>*<br>placement_exclusions<br><br><br>`text_customizations` *JSON object*<br>text_customizations<br><br><br>`titles` *array<JSON object>*<br>titles<br><br><br>`text` *string*<br>text<br><br><br>`bodies` *array<JSON object>*<br>bodies<br><br><br>`text` *string*<br>text<br><br><br>`descriptions` *array<JSON object>*<br>descriptions<br><br><br>`text` *string*<br>text<br><br><br>`group_id` *string*<br>group_id<br><br><br>`opt_in_status` *enum {OPT_IN, OPT_IN_AS_INFERRED_DA_INTRO_CARD, OPT_OUT}*<br>opt_in_status<br><br><br>`creation_source` *enum {ADVERTISER_UPLOAD, WEBSITE_MEDIA, VIDEO_THUMBNAIL, OTHER}*<br>creation_source<br><br><br>`retriever_sources` *array<enum {AD_CONTEXT, ADS_LLAMA, CREATIVE_GRAPH, PIGGYBACK, SAME_ACCOUNT_MEDIA_SEARCH, VIDEO_THUMBNAIL, WEBSITE_MEDIA}>*<br>retriever_sources<br><br><br>`gen_ai_metadata` *JSON object*<br>gen_ai_metadata<br><br><br>`model_name` *string*<br>model_name<br><br><br>`user_action` *string*<br>user_action<br><br><br>`adoption_entrypoint` *string*<br>adoption_entrypoint<br><br><br>`videos` *array<JSON object>*<br>videos<br><br><br>`video_id` *string*<br>video_id<br><br>**[required]**<br><br><br>`source` *enum {CATALOG_PRODUCTS, DCO, GEN_AI, MANUAL, MULTI_MEDIA, PUSH_MODEL, RELATED_MEDIA, REPLACE_MEDIA_TEXT}*<br>source<br><br><br>`placement_customizations` *array<JSON object>*<br>placement_customizations<br><br><br>`publisher_platform` *enum {FACEBOOK, INSTAGRAM, AUDIENCE_NETWORK, MESSENGER, WHATSAPP, OCULUS, THREADS}*<br>publisher_platform<br><br>**[required]**<br><br><br>`placement_exclusions` *array<string>*<br>placement_exclusions<br><br><br>`text_customizations` *JSON object*<br>text_customizations<br><br><br>`titles` *array<JSON object>*<br>titles<br><br><br>`text` *string*<br>text<br><br><br>`bodies` *array<JSON object>*<br>bodies<br><br><br>`text` *string*<br>text<br><br><br>`descriptions` *array<JSON object>*<br>descriptions<br><br><br>`text` *string*<br>text<br><br><br>`destination_customizations` *array<JSON object>*<br>destination_customizations<br><br><br>`url` *string*<br>url<br><br>**[required]**<br><br><br>`display_url` *string*<br>display_url<br><br><br>`thumbnail_id` *string*<br>thumbnail_id<br><br><br>`thumbnail_url` *string*<br>thumbnail_url<br><br><br>`thumbnail_source` *enum {ASSUMED_CUSTOM, ASSUMED_GENERATED_DEFAULT, CUSTOM, GENERATED_DEFAULT, GENERATED_SELECTED, SCRUBBER_SELECTED, SHARPNESS_ENTROPY_SMART_SELECTED, SMART_SELECTED, THUMBNAIL_TESTING, UNKNOWN}*<br>thumbnail_source<br><br><br>`original_video_id` *string*<br>original_video_id<br><br><br>`opt_in_status` *enum {OPT_IN, OPT_IN_AS_INFERRED_DA_INTRO_CARD, OPT_OUT}*<br>opt_in_status<br><br><br>`creation_source` *enum {ADVERTISER_UPLOAD, WEBSITE_MEDIA, VIDEO_THUMBNAIL, OTHER}*<br>creation_source<br><br><br>`retriever_sources` *array<enum {AD_CONTEXT, ADS_LLAMA, CREATIVE_GRAPH, PIGGYBACK, SAME_ACCOUNT_MEDIA_SEARCH, VIDEO_THUMBNAIL, WEBSITE_MEDIA}>*<br>retriever_sources<br><br><br>`push_metadata_ids` *array<int64>*<br>push_metadata_ids<br> |
| `name`<br><br>*string* | Name of this ad creative as seen in the ad account's library.<br> |
| `object_id`<br><br>*int64* | The Facebook object ID that is relevant to the ad. See [connection objects](https://developers.facebook.com/docs/reference/ads-api/connectionobjects)<br> |
| `object_story_id`<br><br>*post_id* | ID of a Facebook Page post to use in an ad. You can get this ID by [querying the posts of the page](https://developers.facebook.com/docs/graph-api/reference/page/feed). If this post includes an image, it should not exceed 8 MB. Facebook will upload the image from the post to your ad account's [image library](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-image).<br> |
| `object_story_spec`<br><br>*string (ObjectStorySpec)* | JSON string of [AdCreativeObjectStorySpec](https://developers.facebook.com/docs/marketing-api/reference/ad-creative-object-story-spec) type. Use if you want to create a new unpublished page post and turn the post into an ad. The Page ID and the content to create a new unpublished page post. Specify `link_data`, `photo_data`, `video_data`, `text_data` or `template_data` with the content.<br><br>**[supports emoji]**<br> |
| `object_story_spec{whats_app_business_phone_number}`<br><br>*string* | The WhatsApp business phone number to send marketing messages from, in international format, for example `+1-650-555-1234`. The number must already be registered to your business's WhatsApp Business Account, enabled for marketing messages, and owned by the same business as your ad account. If you omit it, your ad uses the default phone number configured during onboarding.<br> |
| `object_type`<br><br>*string* | The type of Facebook object you want to advertise. Allowed values are:<br>`PAGE`<br>`DOMAIN`<br>`EVENT`<br>`STORE_ITEM`: refers to an iTunes or Google Play store destination<br>`OFFER`<br>`SHARE`: from a page<br>`PHOTO`<br>`STATUS`: of a page<br>`VIDEO`<br>`APPLICATION`: app on Facebook<br> |
| `object_url`<br><br>*URL* | URL that opens if someone clicks your link on a link ad. This URL is not connected to a Facebook page.<br> |
| `page_welcome_message`<br><br>*string* | You can create more tailored user experiences for your ads that click to Messenger or to WhatsApp by customizing your ads' greeting message. For ads that clicks to Whatsapp, you can set the the page_welcome_message field under object_story_spec.<br><br><br>Note: If you are using the message received in Whatsapp to trigger any bot flows, please make sure to work with your BSP and agencies to update it so as to ensure flows aren't disrupted.<br><br>**[supports emoji]**<br> |
| `place_page_set_id`<br><br>*numeric string* | The Place Page Set when objective is LOCAL_AWARENESS. Used with Dynamic Local Ads<br> |
| `platform_customizations`<br><br>*JSON or object-like arrays* | Use this field to specify the exact media to use on different Facebook [placements](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/advanced-targeting#placement). You can currently use this setting for images and videos. Facebook replaces the media originally defined in ad creative with this media when the ad displays in a specific placements. For example, if you define a media here for `instagram`, Facebook uses that media instead of the media defined in the ad creative when the ad appears on Instagram.<br><br><br>`instagram` *JSON or object-like arrays*<br>Specify the media to display in an Instagram ad. This displays instead<br>of the media defined in the ad creative.<br><br><br>`image_url` *URL*<br>The URL of the image used for the<br>platform specific media. Either this field or `image_hash` is<br>required.<br><br><br>`image_hash` *string*<br>The<br>[ad image](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-image) used for the<br>platform specific media. Either this field or `image_url` is required.<br><br><br>`image_crops` *dictionary { enum{191x100, 100x72, 400x150, 600x360, 100x100, 400x500, 90x160, 300x400} : <list<list<int64>>> }*<br>A JSON object defining crop<br>dimensions for the image specified. See<br>[Image Crops](https://developers.facebook.com/documentation/ads-commerce/marketing-api/image-crops) for more details.<br> |
| `playable_asset_id`<br><br>*numeric string* | The ID of the playable asset in this creative.<br> |
| `portrait_customizations`<br><br>*JSON object* | Use this field to customizations how ads look in portrait mode format example for IG Stories, Facebook Stories, IGTV, etc<br><br><br>`specifications` *array<JSON object>*<br>specifications<br><br><br>`background_color` *JSON object*<br>background_color<br><br>**[required]**<br><br><br>`bottom_color` *string*<br>bottom_color<br><br>**[required]**<br><br><br>`top_color` *string*<br>top_color<br><br>**[required]**<br><br><br>`carousel_delivery_mode` *enum {fixed_num_cards, optimal_num_cards}*<br>carousel_delivery_mode<br> |
| `product_set_id`<br><br>*numeric string or integer* | Used for [Dynamic Ad](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads). An ID for a product set, which groups related products or other items being advertised.<br> |
| `recommender_settings`<br><br>*JSON object* | The recommender settings that can be used to control recommendations for Dynamic Ads.<br><br><br>`preferred_events` *list<enum{ViewContent, Search, AddToCart, AddToWishlist, InitiateCheckout, AddPaymentInfo, Purchase, Subscribe, RecurringSubscriptionPayment, Lead, CompleteRegistration, CustomConversion, AggregateCustomConversion, Other}>*<br><br>`product_sales_channel` *enum {ONLINE, IN_STORE, OMNI}* |
| `referral_id`<br><br>*numeric string or integer* | The ID of Referral Ad Configuration in this creative.<br> |
| `regional_regulation_disclaimer_spec`<br><br>*JSON object* | regional_regulation_disclaimer_spec<br><br><br>`taiwan_finserv` *JSON object*<br>taiwan_finserv<br><br><br>`taiwan_finserv_funder_id` *numeric string*<br>taiwan_finserv_funder_id<br><br>**[required]**<br><br><br>`australia_finserv` *JSON object*<br>australia_finserv<br><br><br>`australia_finserv_beneficiary_id` *numeric string*<br>australia_finserv_beneficiary_id<br><br>**[required]**<br><br><br>`australia_finserv_payer_id` *numeric string*<br>australia_finserv_payer_id<br><br>**[required]**<br><br><br>`taiwan_universal` *JSON object*<br>taiwan_universal<br><br><br>`taiwan_universal_beneficiary_id` *numeric string*<br>taiwan_universal_beneficiary_id<br><br>**[required]**<br><br><br>`taiwan_universal_payer_id` *numeric string*<br>taiwan_universal_payer_id<br><br>**[required]**<br><br><br>`india_finserv` *JSON object*<br>india_finserv<br><br><br>`india_finserv_beneficiary_id` *numeric string*<br>india_finserv_beneficiary_id<br><br>**[required]**<br><br><br>`india_finserv_payer_id` *numeric string*<br>india_finserv_payer_id<br><br>**[required]**<br><br><br>`singapore_universal` *JSON object*<br>singapore_universal<br><br><br>`singapore_universal_beneficiary_id` *numeric string*<br>singapore_universal_beneficiary_id<br><br>**[required]**<br><br><br>`singapore_universal_payer_id` *numeric string*<br>singapore_universal_payer_id<br><br>**[required]**<br> |
| `source_instagram_media_id`<br><br>*numeric string or integer* | The ID of an Instagram post to use in an ad<br> |
| `template_url`<br><br>*URL* | The product link url, which overrides the one set in [Dynamic Product Ad's](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads) product feeds.<br> |
| `template_url_spec`<br><br>*string (TemplateURLSpec)* | An optional structured collection of templated web and app-link descriptors that override the fallbacks that would otherwise be pulled from a Dynamic Ad's catalog<br><br><br>`android` *Object*<br><br>`app_name` *string*<br><br>`package` *string*<br><br>`url` *string*<br><br>`ios` *Object*<br><br>`app_name` *string*<br><br>`app_store_id` *string*<br><br>`url` *string*<br><br>`ipad` *Object*<br><br>`app_name` *string*<br><br>`app_store_id` *string*<br><br>`url` *string*<br><br>`iphone` *Object*<br><br>`app_name` *string*<br><br>`app_store_id` *string*<br><br>`url` *string*<br><br>`windows_phone` *Object*<br><br>`app_name` *string*<br><br>`app_id` *string*<br><br>`url` *string*<br><br>`web` *Object*<br><br>`url` *URL*<br><br>`should_fallback` *string*<br><br>`config` *Object*<br><br>`app_id` *string*<br><br>`third_party_app_id` *string*<br><br>`enable_third_party_deeplink` *boolean*<br><br>`third_party_dso_ids` *list<string>* |
| `threads_user_id`<br><br>*numeric string or integer* | threads_user_id<br> |
| `thumbnail_url`<br><br>*URL* | URL for a thumbnail image for this ad creative. You can provide dimensions for this with `thumbnail_width` and `thumbnail_height`. [See example](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-creative#thumbnail-example).<br> |
| `title`<br><br>*string* | Title for a Page Likes ad, which appears in the right-hand column on Facebook.<br> |
| `url_tags`<br><br>*string* | A set of query string parameters which will replace or be appended to urls clicked from page post ads, message of the post, and canvas app install creatives only.<br> |
| `use_page_actor_override`<br><br>*boolean* | If `true`, we show the page actor for mobile app ads.<br> |
| `wamo_whatsapp_identity_spec`<br><br>*JSON object* | wamo_whatsapp_identity_spec<br><br><br>`wamo_whatsapp_identity_id` *numeric string*<br>wamo_whatsapp_identity_id<br><br><br>`whatsapp_phone_number` *string*<br>whatsapp_phone_number<br> |

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
| 500 | Message contains banned content |
| 200 | Permissions error |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |
| 613 | Calls to this api have exceeded the rate limit. |
| 1500 | The url you supplied is invalid |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 105 | The number of parameters exceeded the maximum for this operation |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 190 | Invalid OAuth 2.0 Access Token |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/addrafts.md -->

## Ad Account Addrafts

### Reading

Ad Drafts belonging to this Ad Account

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/addrafts HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/addrafts',
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
    "/{ad-account-id}/addrafts",
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
    "/{ad-account-id}/addrafts",
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
                               initWithGraphPath:@"/{ad-account-id}/addrafts"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Faddrafts&version=v25.0)

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
| 190 | Invalid OAuth 2.0 Access Token |
| 200 | Permissions error |

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/adimages.md -->

## Ad Account Ad Images

### Reading

Ad Images that belong to this Ad Account.

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/adimages HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/adimages',
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
    "/{ad-account-id}/adimages",
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
    "/{ad-account-id}/adimages",
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
                               initWithGraphPath:@"/{ad-account-id}/adimages"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fadimages&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `biz_tag_id`<br><br>*int64* | Business tag ID to filter images.<br> |
| `business_id`<br><br>*numeric string or integer* | Optional.<br>Assists with filters such as recently used.<br> |
| `hashes`<br><br>*list<string>* | Hash of the image.<br> |
| `minheight`<br><br>*int64* | Minimum height of the image.<br> |
| `minwidth`<br><br>*int64* | Minimum width of the image.<br> |
| `name`<br><br>*string* | Image name used in image names filter.<br> |

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

A list of [AdImage](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-image) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | Total number of images in the Ad Account.<br><br><br>**[default]**<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

#### /act_{ad_account_id}/adimages
You can make a POST request to *adimages* edge from the following paths:

- [/act_{ad_account_id}/adimages](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/adimages)

When posting to this edge, an [AdImage](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-image) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `bytes`<br><br>*Base64 UTF-8 string* | Image file. Example: `bytes = <image content in bytes format>`<br> |
| `copy_from`<br><br>*JSON or object-like arrays* | This copies the Ad Image from the source to the destination account.<br>`{"source_account_id":"<SOURCE_ACCOUNT_ID>"`, `"hash":"02bee5277ec507b6fd0f9b9ff2f22d9c"}`<br><br><br>`source_account_id` *numeric string*<br><br>`hash` *string* |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *images* in the return type.

```
Map  {
string:  Map  {
string:  Struct  {
hash: string,
url: string,
url_128: string,
url_256: string,
url_256_height: string,
url_256_width: string,
height: int32,
width: int32,
name: string,
}}}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 200 | Permissions error |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 190 | Invalid OAuth 2.0 Access Token |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 613 | Calls to this api have exceeded the rate limit. |

### Updating

You can't perform this operation on this endpoint.

### Deleting

#### /act_{ad_account_id}/adimages
You can dissociate an [AdImage](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-image) from an [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account) by making a DELETE request to [/act_{ad_account_id}/adimages](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/adimages).

##### Parameters

| Parameter | Description |
| --- | --- |
| `hash`<br><br>*string* | Hash of the image you wish to delete.<br><br>**[required]**<br> |
| `image_id`<br><br>*string* | ID of the image you wish to delete.<br> |

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
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/adlabels.md -->

## Ad Account Ad Labels

### Reading

AdAccountAdLabels

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/adlabels HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/adlabels',
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
    "/{ad-account-id}/adlabels",
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
    "/{ad-account-id}/adlabels",
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
                               initWithGraphPath:@"/{ad-account-id}/adlabels"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fadlabels&version=v25.0)

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

A list of [AdLabel](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label) nodes.

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
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 100 | Invalid parameter |

### Creating

#### /act_{ad_account_id}/adlabels
You can make a POST request to *adlabels* edge from the following paths:

- [/act_{ad_account_id}/adlabels](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/adlabels)

When posting to this edge, an [AdLabel](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label) will be created.

##### Example

#### HTTP
```
POST /v25.0/act_<AD_ACCOUNT_ID>/adlabels HTTP/1.1
Host: graph.facebook.com

name=My+Label
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->post(
    '/act_<AD_ACCOUNT_ID>/adlabels',
    array (
      'name' => 'My Label',
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
    "/act_<AD_ACCOUNT_ID>/adlabels",
    "POST",
    {
        "name": "My Label"
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
params.putString("name", "My Label");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/act_<AD_ACCOUNT_ID>/adlabels",
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
  @"name": @"My Label",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/act_<AD_ACCOUNT_ID>/adlabels"
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
  -F 'name="My Label"' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/adlabels
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=POST&path=act_%3CAD_ACCOUNT_ID%3E%2Fadlabels%3Fname%3DMy%2BLabel&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `name`<br><br>*string* | AdLabel name<br><br>**[required]**<br> |

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
| 200 | Permissions error |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/adplayables.md -->

## Ad Account Adplayables

### Reading

The playable assets associated with this account.

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/adplayables HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/adplayables',
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
    "/{ad-account-id}/adplayables",
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
    "/{ad-account-id}/adplayables",
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
                               initWithGraphPath:@"/{ad-account-id}/adplayables"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fadplayables&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

This endpoint doesn't have any parameters.

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": []
}
```

###### data

A list of PlayableContent nodes.

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |
| 200 | Permissions error |

### Creating

#### /act_{ad_account_id}/adplayables
You can make a POST request to *adplayables* edge from the following paths:

- [/act_{ad_account_id}/adplayables](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/adplayables)

When posting to this edge, a [PlayableContent](https://developers.facebook.com/docs/graph-api/reference/playable-content) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `name`<br><br>*string* | The name of the playable asset.<br><br>**[required]**<br> |
| `source`<br><br>*file* | The local file path of the html playable asset.<br> |

##### Return Type

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/adrules_count_by_type.md -->

## Ad Account Adrules Count By Type

### Reading

AdAccountAdRulesCountByType

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/adrules_count_by_type HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/adrules_count_by_type',
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
    "/{ad-account-id}/adrules_count_by_type",
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
    "/{ad-account-id}/adrules_count_by_type",
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
                               initWithGraphPath:@"/{ad-account-id}/adrules_count_by_type"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fadrules_count_by_type&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `statuses`<br><br>*list<enum {ENABLED, DISABLED, DELETED, HAS_ISSUES}>* | statuses<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdAccountAdRulesCountByType nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/adrules_library.md -->

## Ad Account Adrules Library

### Reading

AdAccountAdRulesLibrary

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/adrules_library HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/adrules_library',
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
    "/{ad-account-id}/adrules_library",
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
    "/{ad-account-id}/adrules_library",
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
                               initWithGraphPath:@"/{ad-account-id}/adrules_library"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fadrules_library&version=v25.0)

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

A list of [AdRule](https://developers.facebook.com/docs/marketing-api/reference/ad-rule) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |

### Creating

#### /act_{ad_account_id}/adrules_library
You can make a POST request to *adrules_library* edge from the following paths:

- [/act_{ad_account_id}/adrules_library](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/adrules_library)

When posting to this edge, an [AdRule](https://developers.facebook.com/docs/marketing-api/reference/ad-rule) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `account_id`<br><br>*numeric string* | Ad Account ID. This is inferred from the path.<br> |
| `evaluation_spec`<br><br>*Object* | Defines the evaluation spec upon which a rule will be executed<br><br>**[required]**<br><br><br>`evaluation_type` *enum{SCHEDULE, TRIGGER}*<br>**[required]**<br><br><br>`filters` *list<Object>*<br>**[required]**<br><br><br>`field` *string*<br>**[required]**<br><br><br>`value` *numeric, string, boolean, list<>, or object-like arrays*<br>**[required]**<br><br><br>`operator` *enum{GREATER_THAN, LESS_THAN, EQUAL, NOT_EQUAL, IN_RANGE, NOT_IN_RANGE, IN, NOT_IN, CONTAIN, NOT_CONTAIN, ANY, ALL, NONE}*<br>**[required]**<br><br><br>`trigger` *Object*<br><br>`type` *enum{METADATA_CREATION, METADATA_UPDATE, STATS_MILESTONE, STATS_CHANGE, DELIVERY_INSIGHTS_CHANGE}*<br>**[required]**<br><br><br>`field` *string*<br><br>`value` *numeric, string, boolean, list<>, or object-like arrays*<br><br>`operator` *enum{GREATER_THAN, LESS_THAN, EQUAL, NOT_EQUAL, IN_RANGE, NOT_IN_RANGE, IN, NOT_IN, CONTAIN, NOT_CONTAIN, ANY, ALL, NONE}* |
| `execution_spec`<br><br>*Object* | Defines the execution spec upon which a rule will be executed<br><br>**[required]**<br><br><br>`execution_type` *enum{DCO, PING_ENDPOINT, NOTIFICATION, PAUSE, REBALANCE_BUDGET, CHANGE_BUDGET, CHANGE_BID, ROTATE, UNPAUSE, CHANGE_CAMPAIGN_BUDGET, ADD_INTEREST_RELAXATION, ADD_QUESTIONNAIRE_INTERESTS, INCREASE_RADIUS, UPDATE_CREATIVE, UPDATE_LAX_BUDGET, UPDATE_LAX_DURATION, AUDIENCE_CONSOLIDATION, AUDIENCE_CONSOLIDATION_ASK_FIRST, AD_RECOMMENDATION_APPLY}*<br>**[required]**<br><br><br>`is_once_off` *boolean*<br><br>`execution_options` *list<Object>*<br><br>`field` *string*<br>**[required]**<br><br><br>`value` *numeric, string, boolean, list<>, or object-like arrays*<br>**[required]**<br><br><br>`operator` *enum{EQUAL, IN}*<br>**[required]**<br> |
| `name`<br><br>*string* | The friendly name of a rule, optional for inline rules<br><br>**[required]**<br> |
| `schedule_spec`<br><br>*Object* | Specifies the schedule with which a rule will be evaluated<br><br><br>`schedule_type` *enum{DAILY, HOURLY, SEMI_HOURLY, CUSTOM}*<br>**[required]**<br><br><br>`schedule` *list<Object>*<br><br>`start_minute` *int64*<br><br>`end_minute` *int64*<br><br>`days` *list<int64>* |
| `status`<br><br>*enum {ENABLED, DISABLED, DELETED, HAS_ISSUES}* | The status of a rule<br> |

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
| 200 | Permissions error |
| 100 | Invalid parameter |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 2703 | Rules that turn off ads can't have cost conditions. You need to change the rule's conditions or action. |
| 190 | Invalid OAuth 2.0 Access Token |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/ads.md -->

## Ad Account Ads

Ads belonging to this ad account.

### Reading

Ads belonging to this ad account

```html
curl GET \
https://graph.facebook.com/v27.0/act_<AD_ACCOUNT_ID>/ads
```

##### Parameters

| Parameter | Description |
| --- | --- |
| `date_preset`<br><br>*enum{today, yesterday, this_month, last_month, this_quarter, maximum, data_maximum, last_3d, last_7d, last_14d, last_28d, last_30d, last_90d, last_week_mon_sun, last_week_sun_sat, last_quarter, last_year, this_week_mon_today, this_week_sun_today, this_year}* | Predefine date range used to aggregate insights metrics<br> |
| `effective_status`<br><br>*list<string>* | Filter ads by effective status<br> |
| `time_range`<br><br>*{'since':YYYY-MM-DD,'until':YYYY-MM-DD}* | Date range used to aggregate insights metrics<br><br><br>`since` *datetime*<br>A date in the format of "YYYY-MM-DD", which means from the beginning midnight of that day.<br><br><br>`until` *datetime*<br>A date in the format of "YYYY-MM-DD", which means to the beginning midnight of the following day.<br> |
| `updated_since`<br><br>*integer* | Time since the Ad has been updated.<br> |

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
| `total_count`<br><br>*unsigned int32* | Total number of Ads returned by the query<br><br><br>**[default]**<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 613 | Calls to this api have exceeded the rate limit. |
| 100 | Invalid parameter |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 190 | Invalid OAuth 2.0 Access Token |
| 2500 | Error parsing graph query |
| 3018 | The start date of the time range cannot be beyond 37 months from the current date |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |

### Creating

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

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/ads_reporting_mmm_reports.md -->

## Ad Account Ads Reporting Mmm Reports

### Reading

Edge between ad account and MMM report

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/ads_reporting_mmm_reports HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/ads_reporting_mmm_reports',
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
    "/{ad-account-id}/ads_reporting_mmm_reports",
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
    "/{ad-account-id}/ads_reporting_mmm_reports",
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
                               initWithGraphPath:@"/{ad-account-id}/ads_reporting_mmm_reports"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fads_reporting_mmm_reports&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `filtering`<br><br>*array<JSON object>* | filtering<br><br><br>`field` *string*<br>field<br><br>**[required]**<br><br><br>`operator` *enum {AFTER, ALL, ANY, BEFORE, CONTAIN, EQUAL, GREATER_THAN, GREATER_THAN_OR_EQUAL, IN, IN_RANGE, LESS_THAN, LESS_THAN_OR_EQUAL, NONE, NOT_CONTAIN, NOT_EQUAL, NOT_IN, NOT_IN_RANGE, ON_OR_AFTER, ON_OR_BEFORE, STARTS_WITH, MATCH, STEM_MATCH, TOP, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY}*<br>operator<br><br>**[required]**<br><br><br>`value` *string*<br>value<br><br>**[required]**<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdsReportBuilderMMMReport nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/ads_reporting_mmm_schedulers.md -->

## Ad Account Ads Reporting Mmm Schedulers

### Reading

This edge get all the mmm report schedules under the ad account

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/ads_reporting_mmm_schedulers HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/ads_reporting_mmm_schedulers',
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
    "/{ad-account-id}/ads_reporting_mmm_schedulers",
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
    "/{ad-account-id}/ads_reporting_mmm_schedulers",
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
                               initWithGraphPath:@"/{ad-account-id}/ads_reporting_mmm_schedulers"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fads_reporting_mmm_schedulers&version=v25.0)

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

A list of AdsReportBuilderMMMReportScheduler nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/adsets.md -->

## Ad Account Adsets

**Success:** Due to the iOS 14.5 launch, changes have been made to this endpoint.

* Mobile App Custom Audiences for inclusion targeting is no longer supported for the `POST /{ad-account-id}/adsets` endpoint for iOS 14.5 SKAdNetwork campaigns.
* New iOS 14.5 app install campaigns will no longer be able to use app connections targeting.

### Reading

The adsets of this ad account

##### Example

#### HTTP
```
GET /v25.0/act_<AD_ACCOUNT_ID>/adsets?fields=name%2Cid%2Cstatus HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/act_<AD_ACCOUNT_ID>/adsets?fields=name%2Cid%2Cstatus',
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
    {
        "fields": "name,id,status"
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
params.putString("fields", "name,id,status");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/act_<AD_ACCOUNT_ID>/adsets",
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
  @"fields": @"name,id,status",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/act_<AD_ACCOUNT_ID>/adsets"
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
  -d 'fields="name,id,status"' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/adsets
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=act_%3CAD_ACCOUNT_ID%3E%2Fadsets%3Ffields%3Dname%252Cid%252Cstatus&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `date_preset`<br><br>*enum {TODAY, YESTERDAY, THIS_MONTH, LAST_MONTH, THIS_QUARTER, MAXIMUM, DATA_MAXIMUM, LAST_3D, LAST_7D, LAST_14D, LAST_28D, LAST_30D, LAST_90D, LAST_WEEK_MON_SUN, LAST_WEEK_SUN_SAT, LAST_QUARTER, LAST_YEAR, THIS_WEEK_MON_TODAY, THIS_WEEK_SUN_TODAY, THIS_YEAR}* | Predefine date range used to aggregate insights metrics<br> |
| `effective_status`<br><br>*list<enum{ACTIVE, PAUSED, DELETED, PENDING_REVIEW, DISAPPROVED, PREAPPROVED, PENDING_BILLING_INFO, CAMPAIGN_PAUSED, ARCHIVED, ADSET_PAUSED, IN_PROCESS, WITH_ISSUES}>* | Effective status of adset<br> |
| `is_completed`<br><br>*boolean* | Filter adset by completed status<br> |
| `time_range`<br><br>*{'since':YYYY-MM-DD,'until':YYYY-MM-DD}* | Date range used to aggregate insights metrics<br><br><br>`since` *datetime*<br>A date in the format of "YYYY-MM-DD", which means from the beginning midnight of that day.<br><br><br>`until` *datetime*<br>A date in the format of "YYYY-MM-DD", which means to the beginning midnight of the following day.<br> |
| `updated_since`<br><br>*integer* | Time since the Adset has been updated.<br> |

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
| `insights`<br><br>*Edge<AdsInsights>* | Analytics summary for all objects. Use [nested parameters](https://developers.facebook.com/docs/graph-api/advanced#fieldexpansion) with this field.<br>`insights.time_range({'until':'2018-01-01', 'since':'2017-12-12'}).time_increment(1)`<br> |
| `total_count`<br><br>*unsigned int32* | Total number of objects<br><br><br>**[default]**<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 613 | Calls to this api have exceeded the rate limit. |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 3018 | The start date of the time range cannot be beyond 37 months from the current date |
| 2500 | Error parsing graph query |

### Creating

**Warning:** Mobile App Install CPA Billing will no longer be supported. The [billing event](https://developers.facebook.com/documentation/ads-commerce/marketing-api/bidding/overview/billing-events) cannot be App Install if the Optimization goal is App Install.

#### /act_{ad_account_id}/adsets
You can make a POST request to *adsets* edge from the following paths:

- [/act_{ad_account_id}/adsets](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/adsets)

When posting to this edge, an [AdSet](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign) will be created.

##### Example

#### HTTP
```
POST /v25.0/act_<AD_ACCOUNT_ID>/adsets HTTP/1.1
Host: graph.facebook.com

name=My+First+Adset&lifetime_budget=20000&start_time=2026-05-12T10%3A45%3A01-0700&end_time=2026-05-22T10%3A45%3A01-0700&campaign_id=%3CAD_CAMPAIGN_ID%3E&bid_amount=100&billing_event=LINK_CLICKS&optimization_goal=LINK_CLICKS&targeting=%7B%22facebook_positions%22%3A%5B%22feed%22%5D%2C%22geo_locations%22%3A%7B%22countries%22%3A%5B%22US%22%5D%7D%2C%22publisher_platforms%22%3A%5B%22facebook%22%2C%22audience_network%22%5D%7D&status=PAUSED
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
      'start_time' => '2026-05-12T10:45:01-0700',
      'end_time' => '2026-05-22T10:45:01-0700',
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
        "start_time": "2026-05-12T10:45:01-0700",
        "end_time": "2026-05-22T10:45:01-0700",
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
params.putString("start_time", "2026-05-12T10:45:01-0700");
params.putString("end_time", "2026-05-22T10:45:01-0700");
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
  @"start_time": @"2026-05-12T10:45:01-0700",
  @"end_time": @"2026-05-22T10:45:01-0700",
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
  -F 'start_time="2026-05-12T10:45:01-0700"' \
  -F 'end_time="2026-05-22T10:45:01-0700"' \
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

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=POST&path=act_%3CAD_ACCOUNT_ID%3E%2Fadsets%3Fname%3DMy%2BFirst%2BAdset%26lifetime_budget%3D20000%26start_time%3D2026-05-12T10%253A45%253A01-0700%26end_time%3D2026-05-22T10%253A45%253A01-0700%26campaign_id%3D%253CAD_CAMPAIGN_ID%253E%26bid_amount%3D100%26billing_event%3DLINK_CLICKS%26optimization_goal%3DLINK_CLICKS%26targeting%3D%257B%2522facebook_positions%2522%253A%255B%2522feed%2522%255D%252C%2522geo_locations%2522%253A%257B%2522countries%2522%253A%255B%2522US%2522%255D%257D%252C%2522publisher_platforms%2522%253A%255B%2522facebook%2522%252C%2522audience_network%2522%255D%257D%26status%3DPAUSED&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `adlabels`<br><br>*list<Object>* | Specifies list of labels to be associated with this object. This field is optional<br> |
| `ad_set_goal`<br><br>*Object* | The customer lifecycle strategy for this ad set. Available only for Sales (`OUTCOME_SALES`) ad sets on ad accounts with goal access; otherwise the write is rejected with error `1870252`. Writes merge with the existing goal: an omitted sub-field keeps its current value, and the effective `type` is the sent `type` or, if omitted, the existing one. A non-BROAD goal is not allowed on an ad set whose campaign is in a restricted special ad category (housing, employment, credit, financial products & services, education, or online gambling & gaming); such writes are rejected with error `1870261`.<br><br><br>`type` *int64*<br>Required whenever `ad_set_goal` is present (otherwise error `1870258`). Values writable via the API: `0` BROAD, `2` EXCLUDE_EXISTING_CUSTOMERS, `1` EXCLUDE_EXISTING_AND_ENGAGED_CUSTOMERS. Note the mapping: `2` excludes existing customers only, while `1` excludes both existing and engaged customers.<br><br><br>`existing_customers_exclusions` *list<numeric string>*<br>Custom audience IDs of existing customers to exclude. Required for `type` `1` and `2`, unless `existing_customers_audience_label_exclusions` is set or `existing_customers_auto_exclusion_retention_days` is non-zero.<br><br><br>`engaged_audiences_exclusions` *list<numeric string>*<br>Custom audience IDs of engaged audiences to exclude. Required for `type` `1`, unless `engaged_audiences_audience_label_exclusions` is set; not allowed for `type` `0` or `2` (error `1870254`).<br><br><br>`existing_customers_audience_label_exclusions` *list<enum {high_value_customers, low_value_customers, at_risk, disengaged, general_customers}>*<br>Customer audience labels to exclude. Excludes every custom audience in the ad account that carries one of these labels. Allowed for `type` `1` and `2`; only customer labels are accepted (error `1870279`). See [Audience labels](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign#ad-set-goal-audience-labels).<br><br><br>`engaged_audiences_audience_label_exclusions` *list<enum {qualified_leads, disqualified_leads, app_users, trial_users, engaged_users}>*<br>Engaged audience labels to exclude. Excludes every custom audience in the ad account that carries one of these labels. Allowed for `type` `1` only; only engaged audience labels are accepted (error `1870279`). See [Audience labels](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign#ad-set-goal-audience-labels).<br><br><br>`existing_customers_auto_exclusion_retention_days` *int64*<br>How many days back to automatically exclude people who purchased from you. Allowed values: `30`, `60`, `90`, `180`, or `730`, or `0` to turn the automatic exclusion off (otherwise error `1870283`). Allowed for `type` `1` and `2` only (error `1870281`). If omitted, no automatic exclusion is applied. See [Automatic exclusion of recent purchasers](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign#ad-set-goal-auto-exclusion).<br> |
| `adset_schedule`<br><br>*list<Object>* | Ad set schedule, representing a delivery schedule for a single day<br><br><br>`start_minute` *int64*<br>A 0 based minute of the day representing when the schedule starts<br><br>**[required]**<br><br><br>`end_minute` *int64*<br>A 0 based minute of the day representing when the schedule ends<br><br>**[required]**<br><br><br>`days` *list<int64>*<br>Array of ints representing which days the schedule is active. Valid values are 0-6 with 0 representing Sunday, 1 representing Monday, ... and 6 representing Saturday.<br><br>**[required]**<br><br><br>`timezone_type` *enum {USER, ADVERTISER}*<br><br>**Default value: **`USER` |
| `attribution_spec`<br><br>*list<JSON object>* | Conversion attribution spec used for attributing conversions for optimization. Supported window lengths differ by optimization goal and campaign objective.<br><br><br>`event_type` *enum {CLICK_THROUGH, VIEW_THROUGH, ENGAGED_VIDEO_VIEW}*<br>**[required]**<br><br><br>`window_days` *int64*<br>**[required]**<br><br><br>`weight` *float*<br><br>**Default value: **`100` |
| `automatic_manual_state`<br><br>*enum{UNSET, AUTOMATIC, MANUAL}* | automatic_manual_state<br> |
| `bid_amount`<br><br>*integer* | Bid cap or target cost for this ad set. The bid cap used in a *lowest cost bid strategy* is defined as the maximum bid you want to pay for a result based on your `optimization_goal`. The target cost used in a *target cost bid strategy* lets Facebook bid to meet your target on average and keep costs stable as you spend. If an ad level `bid_amount` is specified, updating this value will overwrite the previous ad level bid. Unless you are using [Reach and Frequency](https://developers.facebook.com/docs/marketing-api/reachandfrequency), `bid_amount` is required if `bid_strategy` is set to `LOWEST_COST_WITH_BID_CAP` or `COST_CAP`.<br><br>The bid amount's unit is cents for currencies like USD, EUR, and the basic unit for currencies like JPY, KRW. The bid amount for ads with `IMPRESSION` or `REACH` as `billing_event` is per 1,000 occurrences, and has to be at least 2 US cents or more. For ads with other `billing_event`s, the bid amount is for each occurrence, and has a minimum value 1 US cents. The minimum bid amounts of other currencies are of similar value to the US Dollar values provided.<br> |
| `bid_strategy` This field is only accessible in v3.0 or later.<br><br>*enum{LOWEST_COST_WITHOUT_CAP, LOWEST_COST_WITH_BID_CAP, COST_CAP, LOWEST_COST_WITH_MIN_ROAS}* | Choose bid strategy for this ad set to suit your specific business goals.<br>Each strategy has tradeoffs and may be available for certain `optimization_goal`s:<br><br>`LOWEST_COST_WITHOUT_CAP`: Designed to get the most results for your budget based on<br>your ad set `optimization_goal` without limiting your bid amount. This is the best strategy<br>if you care most about cost efficiency. However with this strategy it may be harder to get<br>stable average costs as you spend. This strategy is also known as *automatic bidding*.<br>Learn more in [Ads Help Center, About bid strategies: Lowest cost](https://www.facebook.com/business/help/721453268045071).<br><br>`LOWEST_COST_WITH_BID_CAP`: Designed to get the most results for your budget based on<br>your ad set `optimization_goal` while limiting actual bid to your specified<br>amount. With a bid cap you have more control over your<br>cost per actual optimization event. However if you set a limit which is too low you may<br>get less ads delivery. If you select this, you must provide<br>a bid cap with the `bid_amount` field.<br>Note: during creation this bid strategy is set if you provide `bid_amount` only.<br>This strategy is also known as *manual maximum-cost bidding*.<br>Learn more in [Ads Help Center, About bid strategies: Lowest cost](https://www.facebook.com/business/help/721453268045071).<br><br><br>Notes:<br><br><br>• If you enable campaign budget optimization, you should set `bid_strategy` at the parent campaign level.<br><br>• `TARGET_COST` bidding strategy has been deprecated with [Marketing API v9](https://developers.facebook.com/docs/graph-api/changelog/version9.0).<br><br> |
| `billing_event`<br><br>*enum{APP_INSTALLS, CLICKS, IMPRESSIONS, LINK_CLICKS, NONE, OFFER_CLAIMS, PAGE_LIKES, POST_ENGAGEMENT, THRUPLAY, PURCHASE, LISTING_INTERACTION}* | The billing event that this ad set is using:<br>APP_INSTALLS: Pay when people install your app.<br>CLICKS: Deprecated.<br>IMPRESSIONS: Pay when the ads are shown to people.<br>LINK_CLICKS: Pay when people click on the link of the ad.<br>OFFER_CLAIMS: Pay when people claim the offer.<br>PAGE_LIKES: Pay when people like your page.<br>POST_ENGAGEMENT: Pay when people engage with your post.<br>VIDEO_VIEWS: Pay when people watch your video ads for at least 10 seconds.<br>THRUPLAY: Pay for ads that are played to completion, or played for at least 15 seconds.<br> |
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
| `regional_regulated_categories`<br><br>*list<enum>* | This param is used to specify `regional_regulated_categories`. Currently it supports `null` and the following values:<br><br><br>• TAIWAN_FINSERV: Use this value to declare a Financial Service ad set if the ad set targets Taiwan audience<br>• AUSTRALIA_FINSERV: Use this value to declare a Financial Service ad set if the ad set targets Australia audience<br>• INDIA_FINSERV: Use this value to declare a Securities and Investments ad set if the ad set targets India audience<br>• TAIWAN_UNIVERSAL: Use this value to declare an ad set if it targets Taiwan audience<br>• SINGAPORE_UNIVERSAL: Use this value to declare an ad set if it targets Singapore audience<br>• THAILAND_UNIVERSAL: Use this value to declare an ad set if it targets Thailand audience and you are seeing "Beneficiary/payer is missing" errors (3858634, 3858636).<br>• AUSTRALIA_UNIVERSAL: Use this value to declare an ad set if it targets Australia audience and you are seeing "Beneficiary/payer is missing" errors (3858634, 3858636).<br>• MALAYSIA_UNIVERSAL: Use this value to declare an ad set if it targets Malaysia audience and you are seeing "Beneficiary/payer is missing" errors (3858634, 3858636).<br>• BRAZIL_REGULATION: Use this value to declare an ad set if it targets Brazil audience and you are seeing "Beneficiary/payer is missing" errors (3858634, 3858636).<br>• US_SECURITIES_LICENSING: Use this value to declare a Securities and Investments ad set if it targets United States audience and you are seeing "Beneficiary/payer is missing" errors (3858634, 3858636).<br><br><br>If an ad set is a Financial Service ad and it targets Taiwan, it needs to declare both `TAIWAN_FINSERV` and `TAIWAN_UNIVERSAL`.<br><br><br>Example: `null` or `[AUSTRALIA_FINSERV]` or `[TAIWAN_FINSERV, TAIWAN_UNIVERSAL]`<br> |
| `regional_regulation_identities`<br><br>*JSON object* | This param is used to specify `regional_regulation_identities` used to represent the ad set. Currently it supports the following fields:<br><br><br>• taiwan_finserv_beneficiary: used for TAIWAN_FINSERV category<br>• taiwan_finserv_payer: used for TAIWAN_FINSERV category<br>• australia_finserv_beneficiary: used for AUSTRALIA_FINSERV category<br>• australia_finserv_payer: used for AUSTRALIA_FINSERV category<br>• india_finserv_beneficiary: used for INDIA_FINSERV category<br>• india_finserv_payer: used for INDIA_FINSERV category<br>• taiwan_universal_beneficiary: used for TAIWAN_UNIVERSAL category<br>• taiwan_universal_payer: used for TAIWAN_UNIVERSAL category<br>• singapore_universal_beneficiary: used for SINGAPORE_UNIVERSAL category<br>• singapore_universal_payer: used for SINGAPORE_UNIVERSAL category<br>• universal_beneficiary: used for AUSTRALIA_UNIVERSAL, BRAZIL_REGULATION, MALAYSIA_UNIVERSAL, THAILAND_UNIVERSAL, and US_SECURITIES_LICENSING categories<br>• universal_payer: used for AUSTRALIA_UNIVERSAL, BRAZIL_REGULATION, MALAYSIA_UNIVERSAL, THAILAND_UNIVERSAL, and US_SECURITIES_LICENSING categories<br><br><br>For any other beneficiary and payer requirement that doesn't have its own fields in this list, use `universal_beneficiary` and `universal_payer`.<br><br><br>Example:<br><br><br>`regional_regulation_identities: {<br>"taiwan_finserv_beneficiary": <verified_identity_id>,<br>"taiwan_finserv_payer": <verified_identity_id>,<br>"taiwan_universal_beneficiary": <verified_identity_id>,<br>"taiwan_universal_payer": <verified_identity_id><br>}`<br><br><br>During creation, the passed identities fields need to correspond to declared categories. Both beneficiary and payer identities must be included, and they can use the same identity ID.<br><br><br>For example:<br><br><br>Upon creation, `regional_regulated_categories` is `[TAIWAN_FINSERV, TAIWAN_UNIVERSAL]` and `regional_regulation_identities` is<br><br><br>`regional_regulation_identities: {<br>"taiwan_finserv_beneficiary": <id_123>,<br>"taiwan_finserv_payer": <id_123>,<br>"taiwan_universal_beneficiary": <id_456>,<br>"taiwan_universal_payer": <id_456><br>}`<br> |
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

You can't perform this operation on this endpoint.

### Deleting

This operation has been deprecated with [Marketing API V8](https://developers.facebook.com/docs/graph-api/changelog/version8.0#ad-accounts).

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/adspixels.md -->

## Ad Account Adspixels

### Reading

ad account to ads pixels edge

##### Example

#### HTTP
```
GET /v25.0/<PIXEL_ID>/?fields=code HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/<PIXEL_ID>/?fields=code',
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
    "/<PIXEL_ID>/",
    {
        "fields": "code"
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
params.putString("fields", "code");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/<PIXEL_ID>/",
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
  @"fields": @"code",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/<PIXEL_ID>/"
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
  -d 'fields="code"' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/<PIXEL_ID>/
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%3CPIXEL_ID%3E%2F%3Ffields%3Dcode&version=v25.0)

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
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 100 | Invalid parameter |

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

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/advideos.md -->

## Ad Videos

### Reading

GET GraphAdAccountAdVideosEdge

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/advideos HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/advideos',
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
    "/{ad-account-id}/advideos",
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
    "/{ad-account-id}/advideos",
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
                               initWithGraphPath:@"/{ad-account-id}/advideos"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fadvideos&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `max_aspect_ratio`<br><br>*float* | Maximum video aspect ratio to be used in the video aspect ratio filter.<br> |
| `maxheight`<br><br>*int64* | Maximum video height to be used in the video height filter.<br> |
| `maxlength`<br><br>*int64* | Maximum video duration to be used in the video duration filter.<br> |
| `maxwidth`<br><br>*int64* | Maximum video width to be used in the video width filter.<br> |
| `min_aspect_ratio`<br><br>*float* | Minimum video aspect ratio to be used in the video aspect ratio filter.<br> |
| `minheight`<br><br>*int64* | Minimum video height to be used in the video height filter.<br> |
| `minlength`<br><br>*int64* | Minimum video duration to be used in the video duration filter.<br> |
| `minwidth`<br><br>*int64* | Minimum video width to be used in the video width filter.<br> |
| `title`<br><br>*string* | Video name used in the video names filter.<br> |

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

A list of [Video](https://developers.facebook.com/docs/graph-api/reference/video) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total_count).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*unsigned int32* | Total number of videos returned by the query.<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 100 | Invalid parameter |
| 283 | That action requires the extended permission pages_read_engagement and/or pages_read_user_content and/or pages_manage_ads and/or pages_manage_metadata |

### Creating

#### /act_{ad_account_id}/advideos
You can make a POST request to *advideos* edge from the following paths:

- [/act_{ad_account_id}/advideos](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/advideos)

When posting to this edge, a [Video](https://developers.facebook.com/docs/graph-api/reference/video) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `audio_story_wave_animation_handle`<br><br>*string* | Everstore handle of wave animation used to burn audio story video<br> |
| `composer_session_id`<br><br>*string* | SELF_EXPLANATORY<br> |
| `description`<br><br>*UTF-8 string* | SELF_EXPLANATORY<br><br>**[supports emoji]**<br> |
| `edit_description_spec`<br><br>*JSON object* | This represents the schema that the client should send to WWW for the edit description spec during video upload.<br><br><br>`screen_readers` *array<JSON object>* |
| `end_offset` This field is only accessible in v2.3 or later.<br><br>*int64* | end_offset<br> |
| `file_size` This field is only accessible in v2.3 or later.<br><br>*int64* | The size of the video file in bytes. Using during<br>[chunked upload](https://developers.facebook.com/docs/marketing-api/advideo#chunked).<br> |
| `file_url`<br><br>*string* | SELF_EXPLANATORY<br> |
| `fisheye_video_cropped`<br><br>*boolean* | Whether the single fisheye video is cropped or not<br> |
| `front_z_rotation`<br><br>*float* | The front z rotation in degrees on the single fisheye video<br> |
| `name`<br><br>*string* | The name of the video in the library.<br> |
| `og_action_type_id`<br><br>*numeric string or integer* | SELF_EXPLANATORY<br> |
| `og_icon_id`<br><br>*numeric string or integer* | SELF_EXPLANATORY<br> |
| `og_object_id`<br><br>*OG object ID or URL string* | SELF_EXPLANATORY<br> |
| `og_phrase`<br><br>*string* | SELF_EXPLANATORY<br> |
| `og_suggestion_mechanism`<br><br>*string* | SELF_EXPLANATORY<br> |
| `original_fov`<br><br>*int64* | Original field of view of the source camera<br> |
| `original_projection_type` This field is only accessible in v2.3 or later.<br><br>*enum {equirectangular, cubemap, half_equirectangular}* | Original Projection type of the video being uploaded<br> |
| `prompt_id` This field is only accessible in v2.3 or later.<br><br>*string* | SELF_EXPLANATORY<br> |
| `prompt_tracking_string` This field is only accessible in v2.3 or later.<br><br>*string* | SELF_EXPLANATORY<br> |
| `referenced_sticker_id`<br><br>*numeric string or integer* | SELF_EXPLANATORY<br> |
| `selected_audio_spec`<br><br>*JSON object* | selected_audio_spec is params for uploading videos with selected audio when performing audio swap<br><br><br>`audio_asset_id` *string* |
| `source`<br><br>*string* | The video, encoded as form data. See the<br>[Video Format](https://developers.facebook.com/docs/graph-api/reference/video-format) doc for more<br>details on video formats.<br> |
| `source_instagram_media_id`<br><br>*numeric string* | The V2 ID of the Instagram video to upload. Cannot be used with `upload_phase`.<br> |
| `start_offset` This field is only accessible in v2.3 or later.<br><br>*int64* | The start position in byte of the chunk that<br>is being sent, inclusive. Used during<br>[chunked upload](https://developers.facebook.com/docs/marketing-api/advideo#chunked).<br> |
| `time_since_original_post`<br><br>*int64* | SELF_EXPLANATORY<br> |
| `title`<br><br>*UTF-8 string* | The name of the video being uploaded. Must be less than 255 characters. Special characters may count as more than 1 character.<br><br>**[supports emoji]**<br> |
| `transcode_setting_properties` This field is only accessible in v2.3 or later.<br><br>*string* | Properties used in computing transcode settings for the video<br> |
| `unpublished_content_type`<br><br>*enum {SCHEDULED, SCHEDULED_RECURRING, DRAFT, PUBLISH_PENDING, ADS_POST, INLINE_CREATED, PUBLISHED, REVIEWABLE_BRANDED_CONTENT}* | SELF_EXPLANATORY<br> |
| `upload_phase` This field is only accessible in v2.3 or later.<br><br>*enum {start, transfer, finish, cancel}* | The phase during chunked upload. Using during<br>[chunked upload](https://developers.facebook.com/docs/marketing-api/advideo#chunked).<br> |
| `upload_session_id` This field is only accessible in v2.3 or later.<br><br>*numeric string or integer* | The session ID of this chunked upload. Using<br>during [chunked upload](https://developers.facebook.com/docs/marketing-api/advideo#chunked).<br> |
| `video_file_chunk` This field is only accessible in v2.3 or later.<br><br>*string* | The chunk of the video, between `start_offset`<br>and `end_offset`. Using during<br>[chunked upload](https://developers.facebook.com/docs/marketing-api/advideo#chunked).<br> |

##### Return Type

```
Struct  {
id: numeric string,
upload_session_id: numeric string,
video_id: numeric string,
start_offset: numeric string,
end_offset: numeric string,
success: bool,
skip_upload: bool,
upload_domain: string,
region_hint: string,
xpv_asset_id: numeric string,
is_xpv_single_prod: bool,
transcode_bit_rate_bps: numeric string,
transcode_dimension: numeric string,
should_expand_to_transcode_dimension: bool,
action_id: string,
gop_size_seconds: numeric string,
target_video_codec: string,
target_hdr: string,
maximum_frame_rate: numeric string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 100 | Invalid parameter |
| 222 | Video not visible |
| 389 | Unable to fetch video file from URL. |
| 190 | Invalid OAuth 2.0 Access Token |
| 352 | The video file you selected is in a format that we don't support. |
| 6001 | There was a problem uploading your video. Please try again. |
| 382 | The video file you tried to upload is too small. Please try again with a larger file. |
| 351 | There was a problem with your video file. Please try again with another file, |
| 6000 | There was a problem uploading your video file. Please try again with another file. |

### Updating

You can't perform this operation on this endpoint.

### Deleting

#### /act_{ad_account_id}/advideos
You can dissociate a [Video](https://developers.facebook.com/docs/graph-api/reference/video) from an [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account) by making a DELETE request to [/act_{ad_account_id}/advideos](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/advideos).

##### Parameters

| Parameter | Description |
| --- | --- |
| `video_id`<br><br>*video ID* | Ad account library video ID<br><br>**[required]**<br> |

##### Return Type

```
Struct  {
success: bool,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 613 | Calls to this api have exceeded the rate limit. |
| 100 | Invalid parameter |

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/agencies.md -->

## Ad Account Agencies

### Reading

Agencies associated with ad accounts

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/agencies HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/agencies',
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
    "/{ad-account-id}/agencies",
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
    "/{ad-account-id}/agencies",
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
                               initWithGraphPath:@"/{ad-account-id}/agencies"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fagencies&version=v25.0)

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

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `access_requested_time`<br><br>*datetime* | The creation time of the access request<br><br><br>**[default]**<br> |
| `access_status`<br><br>*enum* | The status of the access request<br><br><br>**[default]**<br> |
| `access_updated_time`<br><br>*datetime* | The update time of the access request<br><br><br>**[default]**<br> |
| `permitted_tasks`<br><br>*list<string>* | The permissions of tasks associated with the access request<br><br><br>**[default]**<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

#### /act_{ad_account_id}/agencies
You can dissociate a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) from an [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account) by making a DELETE request to [/act_{ad_account_id}/agencies](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/agencies).

##### Parameters

| Parameter | Description |
| --- | --- |
| `business`<br><br>*numeric string* | SELF_EXPLANATORY<br><br>**[required]**<br> |

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

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/applications.md -->

## Ad Account Applications

### Reading

AdAccountApplications

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/applications HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/applications',
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
    "/{ad-account-id}/applications",
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
    "/{ad-account-id}/applications",
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
                               initWithGraphPath:@"/{ad-account-id}/applications"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fapplications&version=v25.0)

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

A list of [Application](https://developers.facebook.com/docs/graph-api/reference/application) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/applied_publisher_block_lists.md -->

## Ad Account Applied Publisher Block Lists

### Reading

Block Lists applied to ad account or any of its parent businesses

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/applied_publisher_block_lists HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/applied_publisher_block_lists',
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
    "/{ad-account-id}/applied_publisher_block_lists",
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
    "/{ad-account-id}/applied_publisher_block_lists",
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
                               initWithGraphPath:@"/{ad-account-id}/applied_publisher_block_lists"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fapplied_publisher_block_lists&version=v25.0)

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

A list of [PublisherBlockList](https://developers.facebook.com/docs/marketing-api/reference/publisher-block-list) nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `is_applied_to_account`<br><br>*bool* | is_applied_to_account<br><br><br>**[default]**<br> |
| `is_applied_to_business`<br><br>*bool* | is_applied_to_business<br><br><br>**[default]**<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/assigned_users.md -->

## Ad Account, Assigned Users

### Reading

Business and system users assigned to this Ad Account.

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/assigned_users HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/assigned_users',
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
    "/{ad-account-id}/assigned_users",
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
    "/{ad-account-id}/assigned_users",
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
                               initWithGraphPath:@"/{ad-account-id}/assigned_users"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fassigned_users&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `business`<br><br>*numeric string or integer* | The business associated with this Ad Account<br><br>**[required]**<br> |

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
| `total_count`<br><br>*unsigned int32* | Total number of business and system users assigned to this Ad Account<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |
| 100 | Invalid parameter |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |

### Creating

You can't perform this operation on this endpoint.

### Updating

In v3.1 we introduce the new concept of **task-based permissions** to substitute for the current role-based permission. This affects access to ad accounts managed by Business Manager API and Pages. Role-based access to ad accounts and Pages is still available but will be deprecated in the future. This impacts the following roles and provides the equivalent tasks for ad accounts:

- Role: `ADMIN`, Tasks: `['MANAGE', 'ADVERTISE', 'ANALYZE'` - Manage all aspects of ad campaigns, reporting, billing and ad account permissions.

- Role: `GENERAL_USER`, Tasks: `['ADVERTISE', 'ANALYZE']` - Create ads using the funding source associated with the ad account. Run reports.

- Role: `GENERAL_USER`, Tasks: `['ANALYZE']` - Run reports.

This replaces the following roles in Business Manager API with these tasks:

- Role: `MANAGER`, Tasks: `['MANAGE', 'CREATE_CONTENT', 'MODERATE',  'ADVERTISE', 'ANALYZE', 'DRAFT']`

- Role: `CONTENT_CREATOR`, Tasks: `['CREATE_CONTENT', 'MODERATE',  'ADVERTISE', 'ANALYZE', 'DRAFT']`

- Role: `MODERATOR`, Tasks: `['MODERATE',  'ADVERTISE', 'ANALYZE', 'DRAFT']`

- Role: `ADVERTISER`, Tasks: `['ADVERTISE', 'ANALYZE', 'DRAFT']`

- Role: `INSIGHTS_ANALYST`, Tasks: `['ANALYZE', 'DRAFT']`

- Role: `CREATIVE_HUB_MOCKUPS_MANAGER`, Tasks: `['DRAFT']`

#### /act_{ad_account_id}/assigned_users
You can update an [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account) by making a POST request to [/act_{ad_account_id}/assigned_users](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/assigned_users).

##### Parameters

| Parameter | Description |
| --- | --- |
| `tasks`<br><br>*array<enum {MANAGE, ADVERTISE, ANALYZE, DRAFT, AA_ANALYZE}>* | AdAccount permission tasks to assign this user<br> |
| `user`<br><br>*UID* | Business user id or system user id<br><br>**[required]**<br> |

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
| 2620 | Invalid call to update account permissions |

### Deleting

#### /act_{ad_account_id}/assigned_users
You can dissociate a [User](https://developers.facebook.com/docs/graph-api/reference/user) from an [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account) by making a DELETE request to [/act_{ad_account_id}/assigned_users](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/assigned_users).

##### Parameters

| Parameter | Description |
| --- | --- |
| `user`<br><br>*UID* | Business user id or system user id<br><br>**[required]**<br> |

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
| 3919 | There was an unexpected technical issue. Please try again. |
| 190 | Invalid OAuth 2.0 Access Token |

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/async_batch_requests.md -->

## Ad Account Async Batch Requests

### Reading

You can't perform this operation on this endpoint.

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

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/asyncadcopies.md -->

## Ad Account Asyncadcopies

### Reading

You can't perform this operation on this endpoint.

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/asyncadcreatives.md -->

## Ad Account Asyncadcreatives

### Reading

Async ad creative jobs from this Ad Account.

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/asyncadcreatives HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/asyncadcreatives',
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
    "/{ad-account-id}/asyncadcreatives",
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
    "/{ad-account-id}/asyncadcreatives",
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
                               initWithGraphPath:@"/{ad-account-id}/asyncadcreatives"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fasyncadcreatives&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `is_completed`<br><br>*boolean* | If `true`, we only return completed ad request sets.<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [AdAsyncRequestSet](https://developers.facebook.com/documentation/ads-commerce/marketing-api/asyncrequests) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |

### Creating

#### /act_{ad_account_id}/asyncadcreatives
You can make a POST request to *asyncadcreatives* edge from the following paths:

- [/act_{ad_account_id}/asyncadcreatives](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/asyncadcreatives)

When posting to this edge, no Graph object will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `creative_spec`<br><br>*AdCreative* | Specs for ad creative<br><br>**[required]**<br><br>**[supports emoji]**<br> |
| `name`<br><br>*UTF-8 encoded string* | Name of async job<br><br>**[required]**<br> |
| `notification_mode`<br><br>*enum{OFF, ON_COMPLETE}* | Specify `0` for no notifications and `1` for notification on completion.<br> |
| `notification_uri`<br><br>*URL* | If notifications are enabled, specify the URL to send them.<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/asyncadrequestsets.md -->

## Ad Account Asyncadrequestsets

### Reading

Async ad request sets from this Ad Account.

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/asyncadrequestsets HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/asyncadrequestsets',
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
    "/{ad-account-id}/asyncadrequestsets",
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
    "/{ad-account-id}/asyncadrequestsets",
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
                               initWithGraphPath:@"/{ad-account-id}/asyncadrequestsets"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fasyncadrequestsets&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `is_completed`<br><br>*boolean* | If `true`, we only return completed ad request sets.<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [AdAsyncRequestSet](https://developers.facebook.com/documentation/ads-commerce/marketing-api/asyncrequests) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |

### Creating

#### /act_{ad_account_id}/asyncadrequestsets
You can make a POST request to *asyncadrequestsets* edge from the following paths:

- [/act_{ad_account_id}/asyncadrequestsets](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/asyncadrequestsets)

When posting to this edge, no Graph object will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `ad_specs`<br><br>*list<dictionary { non-empty string : <string> }>* | Specs for ads in the request set<br><br>**[required]**<br> |
| `name`<br><br>*UTF-8 encoded string* | Name of the request set<br><br>**[required]**<br> |
| `notification_mode`<br><br>*enum{OFF, ON_COMPLETE}* | Specify `0` for no notifications and `1` for notification on completion.<br> |
| `notification_uri`<br><br>*URL* | If notifications are enabled, specify the URL to send them.<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/broadtargetingcategories.md -->

## Ad Account Broadtargetingcategories

### Reading

The broad targeting categories from this Ad Account.

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/broadtargetingcategories HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/broadtargetingcategories',
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
    "/{ad-account-id}/broadtargetingcategories",
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
    "/{ad-account-id}/broadtargetingcategories",
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
                               initWithGraphPath:@"/{ad-account-id}/broadtargetingcategories"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fbroadtargetingcategories&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `custom_categories_only`<br><br>*boolean* | If `true`, we return only custom categories.<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of BroadTargetingCategories nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/campaign_attribution_options.md -->

## Ad Account Campaign Attribution Options

### Reading

AdAccountCampaignAttributionOptions

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/campaign_attribution_options HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/campaign_attribution_options',
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
    "/{ad-account-id}/campaign_attribution_options",
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
    "/{ad-account-id}/campaign_attribution_options",
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
                               initWithGraphPath:@"/{ad-account-id}/campaign_attribution_options"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fcampaign_attribution_options&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `ad_account_id`<br><br>*int64* | ad_account_id<br> |
| `app_id`<br><br>*numeric string* | app_id<br><br>**[required]**<br> |
| `custom_event_str`<br><br>*string* | An optional custom event string. When this field is used, the event_name field must be set to OTHER.<br> |
| `event_name`<br><br>*enum {JOB_ALERT_SUBSCRIBE, JOB_APPLICATION_CREATE, JOB_APPLICATION_FORM_IMPRESSION, JOB_BROWSER_IMPRESSION, JOB_OPENING_DETAIL_VIEW_IMPRESSION, ACTIVATE_APP, COMPLETE_REGISTRATION, CONTENT_VIEW, ONSITE_APP_CONTENT_VIEW, ONSITE_WEB_CONTENT_VIEW, ONSITE_WEB_APP_CONTENT_VIEW, SEARCH, RATE, TUTORIAL_COMPLETION, CONTACT, CUSTOMIZE_PRODUCT, DONATE, FIND_LOCATION, SCHEDULE, START_TRIAL, SUBMIT_APPLICATION, SUBSCRIBE, RECURRING_SUBSCRIPTION_PAYMENT, CANCEL_SUBSCRIPTION, VISIT_LOCATION, AD_CLICK, AD_IMPRESSION, UPDATE_PLTV, APPEND_VALUE, ADD_TO_CART, ONSITE_APP_ADD_TO_CART, ONSITE_WEB_ADD_TO_CART, ONSITE_WEB_APP_ADD_TO_CART, ADD_TO_WISHLIST, INITIATED_CHECKOUT, ADD_PAYMENT_INFO, PURCHASE, APPEND_CLICK_ATTRIBUTION, ONSITE_APP_PURCHASE, ONSITE_WEB_PURCHASE, ONSITE_WEB_APP_PURCHASE, MESSAGE_TO_BUY, LEAD, LEAD_CUSTOM_EVENT, LEAD_SUBMITTED, ONSITE_WEB_LEAD, PDP_CLICK_TO_OFFSITE, PDP_CLICK_VIEW_IN_CART, PDP_CLICK_TO_CHECKOUT, ORDER_CREATION, CART_IMPRESSION, SHOP_MID_FUNNEL, LEVEL_ACHIEVED, ACHIEVEMENT_UNLOCKED, SPENT_CREDITS, FLOW_COMPLETE, SERVICE_BOOKING_REQUEST, INSTAGRAM_PROFILE_FOLLOW, INSTAGRAM_PROFILE_VIEW, PROFILE_FOLLOW, PROFILE_VIEW, INSTAGRAM_AD_FOLLOW, INSTAGRAM_AD_FOLLOW_QUALITY_SCORE, INSTAGRAM_FOLLOW_QUALITY_SCORE, PROFILE_FOLLOW_QUALITY_SCORE, INSTAGRAM_LEAD_GEN_LAW, UPCOMING_EVENT_REMINDER_SET, UPCOMING_EVENT_REMINDER_UNSET, UPCOMING_EVENT_NOTIFICATION_CLICK, UPCOMING_EVENT_POST_NOTIFICATION_LINK_CLICK, UPCOMING_EVENT_POST_NOTIFICATION_UAS_TAP, IG_RECONSIDERATION_ENTRY_POINT_CLICK, MESSAGING_ACCEPT, MESSAGING_BLOCK, MESSAGING_DELETE_THREAD, MESSAGING_FRX_FEEDBACK, MESSAGING_SCAM_PROACTIVE_WARNING_LEARN_MORE, MESSAGING_SCAM_PROACTIVE_WARNING_LEARN_MORE_EXPERIMENTAL, MESSAGING_IN_THREAD_FEEDBACK_SATISFIED, MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED, MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED_CONFUSING_PROCESS, MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED_NOT_HELPFUL, MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED_SLOW_RESPONSES, MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED_SUSPICIOUS_BEHAVIOR, MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED_TOO_MANY_MESSAGES, MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED_OTHER, MESSAGING_IN_THREAD_DXMA_FEEDBACK_SATISFIED, MESSAGING_IN_THREAD_DXMA_FEEDBACK_DISSATISFIED, MESSAGING_MSGR_BUYER_SATISFIED_WITH_PURCHASE, MESSAGING_MSGR_BUYER_DISSATISFIED_WITH_PURCHASE, MESSAGING_IG_BUYER_SATISFIED_WITH_CONVERSATION, MESSAGING_IG_BUYER_DISSATISFIED_WITH_CONVERSATION, MESSAGING_CONVERSATION_SELLER_FEEDBACK_SATISFIED, MESSAGING_CONVERSATION_SELLER_FEEDBACK_DISSATISFIED, MESSAGING_CONVERSATION_SELLER_FEEDBACK_BAN, MESSAGING_CONVERSATION_SELLER_FEEDBACK_REPORT_SPAM, MESSAGING_MARK_SPAM, MESSAGING_REPLY, MESSAGING_FIRST_REPLY, MESSAGING_FIRST_REPLY_CONTINUATION, MESSAGING_OPEN_THREAD, MESSAGING_IGNORE_REQUEST, MESSAGING_PROMOTIONAL_OFF, MESSAGING_READ_RECEIPT, MESSAGING_DELIVERY_RECEIPT, MESSAGING_DELETE_MESSAGE, MESSAGING_CONVERSATION_STARTED_7D, MESSAGING_DEEP_CONVERSATION, MESSAGING_DEEP_CONVERSATION_SHADOW, MESSAGING_DEDUP_DEEP_CONVERSATION, MESSAGING_SYNTHETIC_DEEP_CONVERSATION, MESSAGING_AUTOMATED_FLOW_COMPLETE, MESSAGING_AUTOMATED_FLOW_CANCELLED, MESSENGER_RECEIPT_TEMPLATE, MESSAGING_PAGE_SEND, MESSAGING_PAGE_SEND_AFTER_USER_SEND, MESSAGING_USER_DEPTH_2_MESSAGE_SEND, MESSAGING_USER_DEPTH_2_MESSAGE_SEND_CONTINUATION, MESSAGING_USER_DEPTH_3_MESSAGE_SEND, MESSAGING_USER_DEPTH_3_MESSAGE_SEND_CONTINUATION, MESSAGING_USER_DEPTH_5_MESSAGE_SEND, MESSAGING_PAGE_DEPTH_2_MESSAGE_SEND, MESSAGING_PAGE_DEPTH_2_MESSAGE_SEND_CONTINUATION, MESSAGING_CONVERSATION_DEPTH, MESSAGING_CONVERSATION_DEPTH_NEW_WHATSAPP_SCHEMA, MESSAGING_QUALIFIED_LEAD, MESSAGING_APPOINTMENT_BOOKED, MESSAGING_PAGE_SEND_NUM_SAME_CONVERSATION, MESSAGING_USER_SEND_NUM_SAME_CONVERSATION, MESSAGING_BUSINESS_CALLING_OPT_IN_SENT, MESSAGING_BUSINESS_CALLING_OPT_IN_ACCEPTED, MESSAGING_BUSINESS_CALLING_OPT_IN_DENIED, MESSAGING_BUSINESS_CALLING_CALL_INITIATED, MESSAGING_BUSINESS_CALLING_CALL_ANSWERED, MESSAGING_BUSINESS_CALLING_CALL_MISSED, MESSAGING_BUSINESS_CALLING_CALL_DENIED, MESSAGING_BUSINESS_LLAMA_CONVERSION_POSITIVE, MESSAGING_BUSINESS_LLAMA_CONVERSION_NEGATIVE, MESSAGING_FIRST_BIZ_REPLY, MESSAGING_FIRST_BIZ_REPLY_CONTINUATION, MESSAGING_FIRST_CALL, MESSAGING_FIRST_LONG_CALL, MESSAGING_USER_PHONE_CALL_DIALOG_CONFIRM_CLICKED, MESSAGING_USER_CALL_ATTEMPTED, MESSAGING_PAGE_CALL_ATTEMPTED, MESSAGING_CONNECTED_CALL_OR_DC, MESSAGING_CALL_ATTEMPT_AND_DC, MESSAGING_CALL_ATTEMPT_AND_PAGE_INTERACTION, MESSAGING_MISSED_CALL, MESSAGING_USER_SUBSCRIBED, MESSAGING_CONVERSATION_ENGAGED, MESSAGING_WELCOME_MESSAGE_VIEW, MESSAGING_CONVERSATION_REPLIED_7D, TOTAL_MESSAGING_CONNECTION, DOWN_FUNNEL_PURCHASE, MESSAGING_DOWN_FUNNEL_PURCHASE, MESSAGING_DOWN_FUNNEL_PURCHASE_VALUE, MESSAGING_EVENT_OPTIMIZATION_LEAD, MESSAGING_SHALLOW_LEAD, MESSAGING_DOWN_FUNNEL_LOW_PRECISION_PURCHASE, REFERRAL_SENDER_INVITES_SENT, REFERRAL_SENDER_MESSAGE_SENT, REFERRAL_RECEIVER_IMPRESSION, REFERRAL_RECEIVER_CLICK, VIDEO_HOME_SELECTED, VIDEO_HOME_WATCHLIST, VIDEO_HOME_EXPLORE, VIDEO_HOME_PLAYER_START, VIDEO_HOME_90_SECOND_VIEW, FUNDRAISER_CREATE, MESSENGER_CONNECTED_CALL, MESSENGER_MISSED_CALL, D2_RETENTION, D7_RETENTION, MOVIE_SHOWTIME_CLICK, LISTING_INTERACTION, PDP_VIEW, CLICK_TO_CALL, CLICK_TO_WEBSITE, POST_SAVE, POST_SHARE, MEANINGFUL_LISTING_INTERACTION, MARKETPLACE_MLI6, MARKETPLACE_MLI9, MARKETPLACE_MARK_AS_SOLD, ONE_PD_LPV, CLICK_TO_JOIN_NEW_CHANNEL_MEMBER, OTHER}* | event_name<br> |
| `optimization_goal`<br><br>*enum{NONE, APP_INSTALLS, AD_RECALL_LIFT, ENGAGED_USERS, EVENT_RESPONSES, IMPRESSIONS, LEAD_GENERATION, QUALITY_LEAD, LINK_CLICKS, OFFSITE_CONVERSIONS, PAGE_LIKES, POST_ENGAGEMENT, QUALITY_CALL, REACH, LANDING_PAGE_VIEWS, VISIT_INSTAGRAM_PROFILE, ENGAGED_PAGE_VIEWS, VALUE, THRUPLAY, DERIVED_EVENTS, APP_INSTALLS_AND_OFFSITE_CONVERSIONS, CONVERSATIONS, IN_APP_VALUE, MESSAGING_PURCHASE_CONVERSION, MESSAGING_DEEP_CONVERSATION_AND_FOLLOW, SUBSCRIBERS, REMINDERS_SET, MEANINGFUL_CALL_ATTEMPT, PROFILE_VISIT, PROFILE_AND_PAGE_ENGAGEMENT, ADVERTISER_SILOED_VALUE, AUTOMATIC_OBJECTIVE, MESSAGING_APPOINTMENT_CONVERSION}* | optimization_goal<br><br>**[required]**<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdAccountCampaignAttributionOptionInfo nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/campaigns.md -->

## Ad Account, Ad Campaigns

The ad campaigns associated with a given ad account.

On May 1, 2018 with the release of Marketing API 3.0 we removed `kpi_custom_conversion_id`, `kpi_type`, and `kpi_results`.

Beginning September 15, 2022, with the release of Marketing API v15.0, advertisers will no longer be allowed to create incremental conversion optimization campaigns. Existing conversion optimization campaigns will behave normally.

#### Ads About Social Issues, Elections, and Politics

**Note:** Beginning with the release of Marketing API v15.0, advertisers will no longer be able to create Special Ad Audiences. See [Special Ad Audiences details here](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/special-ad-category#special-ad-audiences) for more information.

### Reading

Returns the campaigns under this ad account. A request with no filters returns only campaigns that were not archived or deleted.

##### Example

#### HTTP
```
GET /v25.0/act_<AD_ACCOUNT_ID>/campaigns?effective_status=%5B%22ACTIVE%22%2C%22PAUSED%22%5D&fields=name%2Cobjective HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/act_<AD_ACCOUNT_ID>/campaigns?effective_status=%5B%22ACTIVE%22%2C%22PAUSED%22%5D&fields=name%2Cobjective',
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
    {
        "effective_status": "[\"ACTIVE\",\"PAUSED\"]",
        "fields": "name,objective"
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
params.putString("effective_status", "[\"ACTIVE\",\"PAUSED\"]");
params.putString("fields", "name,objective");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/act_<AD_ACCOUNT_ID>/campaigns",
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
  @"effective_status": @"[\"ACTIVE\",\"PAUSED\"]",
  @"fields": @"name,objective",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/act_<AD_ACCOUNT_ID>/campaigns"
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
  -d 'effective_status=[
       "ACTIVE",
       "PAUSED"
     ]' \
  -d 'fields="name,objective"' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/campaigns
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=act_%3CAD_ACCOUNT_ID%3E%2Fcampaigns%3Feffective_status%3D%255B%2522ACTIVE%2522%252C%2522PAUSED%2522%255D%26fields%3Dname%252Cobjective&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `date_preset`<br><br>*enum{today, yesterday, this_month, last_month, this_quarter, maximum, data_maximum, last_3d, last_7d, last_14d, last_28d, last_30d, last_90d, last_week_mon_sun, last_week_sun_sat, last_quarter, last_year, this_week_mon_today, this_week_sun_today, this_year}* | Predefine date range used to aggregate insights metrics.<br> |
| `effective_status`<br><br>*list<enum{ACTIVE, PAUSED, DELETED, PENDING_REVIEW, DISAPPROVED, PREAPPROVED, PENDING_BILLING_INFO, CAMPAIGN_PAUSED, ARCHIVED, ADSET_PAUSED, IN_PROCESS, WITH_ISSUES}>* | **Default value: **`Vec`<br>effective status for the campaigns<br> |
| `is_completed`<br><br>*boolean* | If `true`, we return completed campaigns.<br> |
| `time_range`<br><br>*{'since':YYYY-MM-DD,'until':YYYY-MM-DD}* | Date range used to aggregate insights metrics<br><br><br>`since` *datetime*<br>A date in the format of "YYYY-MM-DD", which means from the beginning midnight of that day.<br><br><br>`until` *datetime*<br>A date in the format of "YYYY-MM-DD", which means to the beginning midnight of the following day.<br> |

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
| 200 | Permissions error |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 613 | Calls to this api have exceeded the rate limit. |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |
| 3018 | The start date of the time range cannot be beyond 37 months from the current date |
| 2500 | Error parsing graph query |

### Creating

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

You can't perform this operation on this endpoint.

### Deleting

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

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/collaborative_ads_partner_businesses.md -->

## Ad Account Collaborative Ads Partner Businesses

### Reading

CollaborativeAdsPartnerBusinesses

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/collaborative_ads_partner_businesses HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/collaborative_ads_partner_businesses',
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
    "/{ad-account-id}/collaborative_ads_partner_businesses",
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
    "/{ad-account-id}/collaborative_ads_partner_businesses",
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
                               initWithGraphPath:@"/{ad-account-id}/collaborative_ads_partner_businesses"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fcollaborative_ads_partner_businesses&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `business_id`<br><br>*numeric string* | The business id the user is acting as if not the same as the one owned by the ad account. To be used for the agency use case when acting as a business which you do not own<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of CollaborativeAdsPartnerBusinesses nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/connected_instagram_accounts.md -->

## Ad Account Connected Instagram Accounts

### Reading

Retrieve instagram accounts associated with this Ad Account

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/connected_instagram_accounts HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/connected_instagram_accounts',
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
    "/{ad-account-id}/connected_instagram_accounts",
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
    "/{ad-account-id}/connected_instagram_accounts",
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
                               initWithGraphPath:@"/{ad-account-id}/connected_instagram_accounts"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fconnected_instagram_accounts&version=v25.0)

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

A list of [IGUser](https://developers.facebook.com/docs/graph-api/reference/shadow-ig-user) nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/customaudiences.md -->

## Ad Account Customaudiences

### Reading

The custom audiences associated with the ad account.

**Note:** To retrieve the IDs of lookalike audiences based on your custom audiences, use the `lookalike_audience_ids` field. See [Lookalike Audiences - Managing Audiences](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/lookalike-audiences#read) for more information.

##### Example

#### HTTP
```
GET /v25.0/act_<AD_ACCOUNT_ID>/customaudiences?fields=id HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/act_<AD_ACCOUNT_ID>/customaudiences?fields=id',
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
    "/act_<AD_ACCOUNT_ID>/customaudiences",
    {
        "fields": "id"
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
params.putString("fields", "id");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/act_<AD_ACCOUNT_ID>/customaudiences",
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
  @"fields": @"id",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/act_<AD_ACCOUNT_ID>/customaudiences"
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
  -d 'fields="id"' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/customaudiences
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=act_%3CAD_ACCOUNT_ID%3E%2Fcustomaudiences%3Ffields%3Did&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `business_id`<br><br>*numeric string or integer* | Optional.<br><br>This param assists with filters, such as recently used.<br> |
| `fetch_primary_audience`<br><br>*boolean* | **Default value: **`false`<br>fetch_primary_audience<br> |
| `fields`<br><br>*list<string>* | Fields to be retrieved. Default behavior is to return only the IDs.<br> |
| `filtering`<br><br>*list<Filter Object>* | Filters on the report data. This parameter is an array of filter objects.<br><br><br>`field` *string*<br>**[required]**<br><br><br>`operator` *enum {EQUAL, NOT_EQUAL, GREATER_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN, LESS_THAN_OR_EQUAL, IN_RANGE, NOT_IN_RANGE, CONTAIN, NOT_CONTAIN, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY, STEM_MATCH, IN, NOT_IN, STARTS_WITH, ENDS_WITH, ANY, ALL, AFTER, BEFORE, ON_OR_AFTER, ON_OR_BEFORE, NONE, TOP}*<br>**[required]**<br><br><br>`value` *string*<br>**[required]**<br> |
| `pixel_id`<br><br>*numeric string* | Optional.<br><br>This param fetches audiences associated to specific pixel.<br> |

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
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |
| 80003 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#custom-audience. |

### Creating

**Note:** Your ability to create custom audiences may be limited.

**Note:** It is expected that you have the same audience capabilities independent of your app's status, which could be *in development* or *live*.

To create a custom audience you'll first need to create a blank audience. Then, you'll want to add people to the blank audience you just created by updating the [users edge](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience/users) of the audience. **You can create a maximum of 500 custom audiences.**

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/customaudiencestos.md -->

## Ad Account Customaudiencestos

### Reading

AdAccountCustomAudiencesTOS

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/customaudiencestos HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/customaudiencestos',
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
    "/{ad-account-id}/customaudiencestos",
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
    "/{ad-account-id}/customaudiencestos",
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
                               initWithGraphPath:@"/{ad-account-id}/customaudiencestos"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fcustomaudiencestos&version=v25.0)

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

A list of [CustomAudiencesTOS](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/custom-audience) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |

### Creating

#### /act_{ad_account_id}/customaudiencestos
You can make a POST request to *customaudiencestos* edge from the following paths:

- [/act_{ad_account_id}/customaudiencestos](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/customaudiencestos)

When posting to this edge, no Graph object will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `business_id`<br><br>*string* | SELF_EXPLANATORY<br> |
| `tos_id`<br><br>*string* | SELF_EXPLANATORY<br><br>**[required]**<br> |

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
| 200 | Permissions error |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/customconversions.md -->

## Ad Account, Custom Conversions

Data on custom conversion events from event sources, such as a Meta Pixel. You can query this data to measure the effectiveness of our ads. Or use it to optimize ad delivery to target people who converted as defined by your customization and rules.

### Reading

Ad Account Custom Conversions

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/customconversions HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/customconversions',
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
    "/{ad-account-id}/customconversions",
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
    "/{ad-account-id}/customconversions",
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
                               initWithGraphPath:@"/{ad-account-id}/customconversions"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fcustomconversions&version=v25.0)

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

A list of [CustomConversion](https://developers.facebook.com/docs/marketing-api/reference/custom-conversion) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 100 | Invalid parameter |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 190 | Invalid OAuth 2.0 Access Token |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |

### Creating

#### /act_{ad_account_id}/customconversions
You can make a POST request to *customconversions* edge from the following paths:

- [/act_{ad_account_id}/customconversions](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/customconversions)

When posting to this edge, a [CustomConversion](https://developers.facebook.com/docs/marketing-api/reference/custom-conversion) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `action_source_type`<br><br>*enum {app, chat, email, other, phone_call, physical_store, system_generated, website, business_messaging}* | Action source type the custom conversion is created from.<br> |
| `advanced_rule`<br><br>*string* | Advanced ruleset for the custom conversion being created allowing multiple sources.<br> |
| `custom_event_type`<br><br>*enum {ADD_PAYMENT_INFO, ADD_TO_CART, ADD_TO_WISHLIST, COMPLETE_REGISTRATION, CONTENT_VIEW, INITIATED_CHECKOUT, LEAD, PURCHASE, SEARCH, CONTACT, CUSTOMIZE_PRODUCT, DONATE, FIND_LOCATION, SCHEDULE, START_TRIAL, SUBMIT_APPLICATION, SUBSCRIBE, LISTING_INTERACTION, FACEBOOK_SELECTED, OTHER}* | The custom event type of the conversion being created.<br> |
| `default_conversion_value`<br><br>*float* | **Default value: **`0`<br>The default conversion value of the conversion being created.<br> |
| `description`<br><br>*string* | The description of the conversion being created.<br> |
| `event_source_id`<br><br>*numeric string or integer* | Event source ID, where event sources are a Pixel, offline event sets and so on. Aggregate custom conversion data from these sources.<br> |
| `name`<br><br>*string* | The name of the conversion being created.<br><br>**[required]**<br> |
| `rule`<br><br>*string* | Only count an event as a custom conversion if it fulfills this rule.<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *id* in the return type.

```
Struct  {
id: numeric string,
is_custom_event_type_predicted: numeric string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 100 | Invalid parameter |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/delivery_estimate.md -->

## Ad Account Delivery Estimate

Returns the delivery estimate for a given ad set configuration in this ad account. You are not able to retrieve this field for [inactive Lookalike Audiences](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/guides/lookalike-audiences#inactive).

### Reading

Delivery estimate for a given ad set configuration in this ad account.

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/delivery_estimate HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/delivery_estimate',
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
    "/{ad-account-id}/delivery_estimate",
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
    "/{ad-account-id}/delivery_estimate",
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
                               initWithGraphPath:@"/{ad-account-id}/delivery_estimate"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fdelivery_estimate&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `optimization_goal`<br><br>*enum{NONE, APP_INSTALLS, AD_RECALL_LIFT, ENGAGED_USERS, EVENT_RESPONSES, IMPRESSIONS, LEAD_GENERATION, QUALITY_LEAD, LINK_CLICKS, OFFSITE_CONVERSIONS, PAGE_LIKES, POST_ENGAGEMENT, QUALITY_CALL, REACH, LANDING_PAGE_VIEWS, VISIT_INSTAGRAM_PROFILE, ENGAGED_PAGE_VIEWS, VALUE, THRUPLAY, DERIVED_EVENTS, APP_INSTALLS_AND_OFFSITE_CONVERSIONS, CONVERSATIONS, IN_APP_VALUE, MESSAGING_PURCHASE_CONVERSION, MESSAGING_DEEP_CONVERSATION_AND_FOLLOW, SUBSCRIBERS, REMINDERS_SET, MEANINGFUL_CALL_ATTEMPT, PROFILE_VISIT, PROFILE_AND_PAGE_ENGAGEMENT, ADVERTISER_SILOED_VALUE, AUTOMATIC_OBJECTIVE, MESSAGING_APPOINTMENT_CONVERSION}* | The optimization goal that you want the estimate for. You only get action predictions for optimization goals where actions make sense. See [optimization_goals](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign) for allowed values.<br><br>**[required]**<br> |
| `promoted_object`<br><br>*Object* | The promoted object for the ad set that you want an estimate for. This is the same format as when you [create an ad set](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign).<br><br><br>`application_id` *int*<br>The ID of a Facebook Application. Usually related to mobile or canvas games being promoted on Facebook for installs or engagement<br><br><br>`pixel_id` *numeric string or integer*<br>The ID of a Facebook conversion pixel.  Used with offsite conversion campaigns.<br><br><br>`custom_event_type` *enum{AD_IMPRESSION, RATE, TUTORIAL_COMPLETION, CONTACT, CUSTOMIZE_PRODUCT, DONATE, FIND_LOCATION, SCHEDULE, START_TRIAL, SUBMIT_APPLICATION, SUBSCRIBE, ADD_TO_CART, ADD_TO_WISHLIST, INITIATED_CHECKOUT, ADD_PAYMENT_INFO, PURCHASE, LEAD, COMPLETE_REGISTRATION, CONTENT_VIEW, SEARCH, SERVICE_BOOKING_REQUEST, MESSAGING_CONVERSATION_STARTED_7D, LEVEL_ACHIEVED, ACHIEVEMENT_UNLOCKED, SPENT_CREDITS, LISTING_INTERACTION, D2_RETENTION, D7_RETENTION, OTHER}*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`object_store_url` *URL*<br>The uri of the mobile / digital store where an application can be bought / downloaded. This is platform specific. When combined with the "application_id" this uniquely specifies an object which can be the subject of a Facebook advertising campaign.<br><br><br>`object_store_urls` *list<URL>*<br>The vec of uri of the mobile / digital store where an application can be bought / downloaded. This is platform specific. When combined with the "application_id" this uniquely specifies an object which can be the subject of a Facebook advertising campaign.<br><br><br>`offer_id` *numeric string or integer*<br>The ID of an Offer from a Facebook Page.<br><br><br>`page_id` *Page ID*<br>The ID of a Facebook Page<br><br><br>`product_catalog_id` *numeric string or integer*<br>The ID of a Product Catalog. Used with<br>[Dynamic Product Ads](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads).<br><br><br>`product_item_id` *numeric string or integer*<br>The ID of the product item.<br><br><br>`job_listing_id` *numeric string or integer*<br>The ID of the marketplace job listing.<br><br><br>`instagram_profile_id` *numeric string or integer*<br>The ID of the instagram profile id.<br><br><br>`product_set_id` *numeric string or integer*<br>The ID of a Product Set within an Ad Set level Product<br>Catalog. Used with<br>[Dynamic Product Ads](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads).<br><br><br>`event_id` *numeric string or integer*<br>The ID of a Facebook Event<br><br><br>`offline_conversion_data_set_id` *numeric string or integer*<br>The ID of the offline dataset.<br><br><br>`fundraiser_campaign_id` *numeric string or integer*<br>The ID of the fundraiser campaign.<br><br><br>`custom_event_str` *string*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`mcme_conversion_id` *numeric string or integer*<br>The ID of a MCME conversion.<br><br><br>`conversion_goal_id` *numeric string or integer*<br>The ID of a Conversion Goal.<br><br><br>`offsite_conversion_event_id` *numeric string or integer*<br>The ID of a Offsite Conversion Event<br><br><br>`boosted_product_set_id` *numeric string or integer*<br>The ID of the Boosted Product Set within an Ad Set level Product<br>Catalog. Should only be present when the advertiser has<br>opted into Product Set Boosting.<br><br><br>`lead_ads_form_event_source_type` *enum{inferred, meta_source, offsite_crm, offsite_web, onsite_crm, onsite_crm_single_event, onsite_clo_dep_aet, onsite_web, onsite_p2b_call, onsite_messaging, qualified_lead_file}*<br>The event source of lead ads form.<br><br><br>`lead_ads_custom_event_type` *enum{AD_IMPRESSION, RATE, TUTORIAL_COMPLETION, CONTACT, CUSTOMIZE_PRODUCT, DONATE, FIND_LOCATION, SCHEDULE, START_TRIAL, SUBMIT_APPLICATION, SUBSCRIBE, ADD_TO_CART, ADD_TO_WISHLIST, INITIATED_CHECKOUT, ADD_PAYMENT_INFO, PURCHASE, LEAD, COMPLETE_REGISTRATION, CONTENT_VIEW, SEARCH, SERVICE_BOOKING_REQUEST, MESSAGING_CONVERSATION_STARTED_7D, LEVEL_ACHIEVED, ACHIEVEMENT_UNLOCKED, SPENT_CREDITS, LISTING_INTERACTION, D2_RETENTION, D7_RETENTION, OTHER}*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`lead_ads_custom_event_str` *string*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`lead_ads_offsite_conversion_type` *enum{default, clo}*<br>The offsite conversion type for lead ads<br><br><br>`value_semantic_type` *enum {VALUE, MARGIN, LIFETIME_VALUE}*<br>The semantic of the event value to be using for optimization<br><br><br>`variation` *enum {OMNI_CHANNEL_SHOP_AUTOMATIC_DATA_COLLECTION, PRODUCT_SET_AND_APP, PRODUCT_SET_AND_IN_STORE, PRODUCT_SET_AND_OMNICHANNEL, PRODUCT_SET_AND_PHONE_CALL, PRODUCT_SET_AND_WEBSITE, PRODUCT_SET_AND_WEBSITE_AND_PHONE_CALL, PRODUCT_SET_WEBSITE_APP_AND_INSTORE}*<br>Variation of the promoted object for a PCA ad<br><br><br>`passback_pixel_id` *numeric string or integer*<br>ID of the pixel used for tracking passback events<br><br><br>`passback_application_id` *numeric string or integer*<br>ID of the application used for tracking passback events<br><br><br>`product_set_optimization` *enum{enabled, disabled}*<br>Enum defining whether or not the ad should be optimized for the promoted product set<br><br><br>`full_funnel_objective` *enum{OFFER_CLAIMS, PAGE_LIKES, EVENT_RESPONSES, POST_ENGAGEMENT, WEBSITE_CONVERSIONS, LINK_CLICKS, VIDEO_VIEWS, LOCAL_AWARENESS, PRODUCT_CATALOG_SALES, LEAD_GENERATION, BRAND_AWARENESS, STORE_VISITS, REACH, APP_INSTALLS, MESSAGES, OUTCOME_AWARENESS, OUTCOME_ENGAGEMENT, OUTCOME_LEADS, OUTCOME_SALES, OUTCOME_TRAFFIC, OUTCOME_APP_PROMOTION}*<br>Enum defining the full funnel objective of the campaign<br><br><br>`dataset_split_id` *numeric string or integer*<br>ID of the dataset split used to perform additional optimization on the dataset<br><br><br>`dataset_split_ids` *array<numeric string>*<br>IDs of the dataset splits used to perform additional optimization on the dataset<br><br><br>`lead_ads_selected_pixel_id` *numeric string or integer*<br>The selected pixel id for lead ads conversion leads optimization<br><br><br>`custom_attribution_source_ids` *array<numeric string>*<br>IDs of the custom attribution sources used for tracking passback events<br><br><br>`multi_event_product` *int64*<br>Identifies which action-to-action product the advertiser is using<br><br><br>`product_sales_channel` *enum {ONLINE, IN_STORE, OMNI}*<br>ProductSalesChannel of the promoted object for Omni L3 DA SBLI ads<br><br><br>`anchor_event_config` *JSON object*<br>Configuration for anchor event in multi-event optimization campaigns<br><br><br>`multi_event_conversion_info` *JSON object*<br>Configuration for multi-event conversion info in CLO campaigns<br><br><br>`live_video_destination` *string*<br>The live video destination type for live video ads<br><br><br>`smart_pse_enabled` *boolean*<br>Whether Smart Product Set Expansion is enabled for this campaign.<br><br><br>`smart_pse_setting` *enum{ENABLED, DISABLED}*<br>Setting for Smart Product Set Expansion. Uses an enum instead of a boolean to avoid TAO null handling issues.<br><br><br>`lead_ads_follow_up_event` *enum{whatsapp_conversations}*<br>The selected lead follow-up event for lead ads campaigns.<br><br><br>`omnichannel_object` *Object*<br><br>`app` *array<JSON object>*<br><br>`pixel` *array<JSON object>*<br>**[required]**<br><br><br>`onsite` *array<JSON object>*<br><br>`whats_app_business_phone_number_id` *numeric string or integer*<br><br>`whatsapp_phone_number` *string* |
| `targeting_spec`<br><br>*Targeting object* | The targeting specification for delivery estimate. See [Advanced Targeting and Placement](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/advanced-targeting).<br><br>**[required]**<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdAccountDeliveryEstimate nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |
| 100 | Invalid parameter |
| 613 | Calls to this api have exceeded the rate limit. |
| 200 | Permissions error |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 2641 | Your ad includes or excludes locations that are currently restricted |
| 190 | Invalid OAuth 2.0 Access Token |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/deprecatedtargetingadsets.md -->

## Ad Account Deprecatedtargetingadsets

### Reading

AdAccountDeprecatedTargetingAdsets

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/deprecatedtargetingadsets HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/deprecatedtargetingadsets',
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
    "/{ad-account-id}/deprecatedtargetingadsets",
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
    "/{ad-account-id}/deprecatedtargetingadsets",
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
                               initWithGraphPath:@"/{ad-account-id}/deprecatedtargetingadsets"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fdeprecatedtargetingadsets&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `type`<br><br>*string* | **Default value: **`deprecating`<br>Query ad sets according to deprecation type. Valid options are `deprecating` and `delivery_paused`.<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [AdSet](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign) nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/direct_debits.md -->

## Ad Account Direct Debits

### Reading

You can't perform this operation on this endpoint.

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/dsa_recommendations.md -->

## Ad Account Dsa Recommendations

As part of the requirements set forth by the European Union (EU) Digital Services Act (DSA), we've begun requiring ads targeting any part of the EU to provide string values defining the beneficiary and payor of the ad being created.  In order to facilitate developers in providing this mandatory information, we're offering a new API that outputs a list of strings that we've identified to likely be the beneficiary/payer, based on recent activity of the ad account. See the [Ad Account DSA Recommendations](https://developers.facebook.com/docs/marketing-api/reference/ad-account-dsa-recommendations) field reference for more information.

**Note:** Even though our data suggests that these predicted values often match up with what advertisers end up manually inputting for their DSA Beneficiary/Payor, we don't guarantee that these will be correct, and users should still review them before publishing their campaigns.

### Reading

AdAccountDsaRecommendations

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/dsa_recommendations HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/dsa_recommendations',
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
    "/{ad-account-id}/dsa_recommendations",
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
    "/{ad-account-id}/dsa_recommendations",
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
                               initWithGraphPath:@"/{ad-account-id}/dsa_recommendations"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fdsa_recommendations&version=v25.0)

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

A list of [AdAccountDsaRecommendations](https://developers.facebook.com/docs/marketing-api/reference/ad-account-dsa-recommendations) nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/generatepreviews.md -->

## Ad Account Generatepreviews

When you use a Page Post which links to an app on the [Google Play Store](https://play.google.com/store/apps/details?id=com.my.app) or an app on the [Apple App Store](https://itunes.apple.com/en/app/myapp/id1234567890) Facebook overrides the following fields:

- We overwrite the `name` parameter of the Page Post with the name of the app from the Play Store or App Store.

- We import the thumbnail icon of the app associated with the Page Post from the Play Store or App Store.

We only support certain combinations of creatives and `ad_format`:

- Link ad not connected to a page - `RIGHT_COLUMN_STANDARD`

- Page like ad - `RIGHT_COLUMN_STANDARD`, `DESKTOP_FEED_STANDARD`, `MOBILE_FEED_STANDARD`

- Event ad: `RIGHT_COLUMN_STANDARD`

- Page like ad - `RIGHT_COLUMN_STANDARD`

- Page post ad - `RIGHT_COLUMN_STANDARD`, `DESKTOP_FEED_STANDARD`, `MOBILE_FEED_STANDARD`, `INSTAGRAM_STANDARD`

- Desktop app ad - `DESKTOP_FEED_STANDARD`

- Mobile app install - `MOBILE_FEED_STANDARD`, `INSTAGRAM_STANDARD`, `MOBILE_BANNER`, `MOBILE_INTERSTITIAL`",

- Collection ads - Standard ads, no ads with product sets.

### Reading

Generate previews for a creative specification

##### Example

#### HTTP
```
GET /v25.0/act_<AD_ACCOUNT_ID>/generatepreviews?creative=%3CCREATIVE_SPEC%3E&ad_format=%3CAD_FORMAT%3E HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/act_<AD_ACCOUNT_ID>/generatepreviews?creative=%3CCREATIVE_SPEC%3E&ad_format=%3CAD_FORMAT%3E',
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
    "/act_<AD_ACCOUNT_ID>/generatepreviews",
    {
        "creative": "<CREATIVE_SPEC>",
        "ad_format": "<AD_FORMAT>"
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
params.putString("creative", "<CREATIVE_SPEC>");
params.putString("ad_format", "<AD_FORMAT>");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/act_<AD_ACCOUNT_ID>/generatepreviews",
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
  @"creative": @"<CREATIVE_SPEC>",
  @"ad_format": @"<AD_FORMAT>",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/act_<AD_ACCOUNT_ID>/generatepreviews"
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
  -d 'creative="<CREATIVE_SPEC>"' \
  -d 'ad_format="<AD_FORMAT>"' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/generatepreviews
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=act_%3CAD_ACCOUNT_ID%3E%2Fgeneratepreviews%3Fcreative%3D%253CCREATIVE_SPEC%253E%26ad_format%3D%253CAD_FORMAT%253E&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `ad_format`<br><br>*enum{AUDIENCE_NETWORK_INSTREAM_VIDEO, AUDIENCE_NETWORK_INSTREAM_VIDEO_MOBILE, AUDIENCE_NETWORK_OUTSTREAM_VIDEO, AUDIENCE_NETWORK_REWARDED_VIDEO, BIZ_DISCO_FEED_MOBILE, DESKTOP_FEED_STANDARD, FACEBOOK_IFU_REELS_MOBILE, FACEBOOK_PROFILE_FEED_DESKTOP, FACEBOOK_PROFILE_FEED_MOBILE, FACEBOOK_PROFILE_REELS_MOBILE, FACEBOOK_REELS_BANNER, FACEBOOK_REELS_BANNER_DESKTOP, FACEBOOK_REELS_BANNER_FEED_ANDROID, FACEBOOK_REELS_BANNER_FEED_ANDROID_LARGE, FACEBOOK_REELS_BANNER_FULLSCREEN_IOS, FACEBOOK_REELS_BANNER_FULLSCREEN_MOBILE, FACEBOOK_REELS_MOBILE, FACEBOOK_REELS_POSTLOOP, FACEBOOK_REELS_POSTLOOP_FEED, FACEBOOK_REELS_SIMILAR_PRODUCTS_MOBILE, FACEBOOK_REELS_STICKER, FACEBOOK_STORY_MOBILE, FACEBOOK_STORY_STICKER_MOBILE, INSTAGRAM_EXPLORE_CONTEXTUAL, INSTAGRAM_EXPLORE_GRID_HOME, INSTAGRAM_EXPLORE_IMMERSIVE, INSTAGRAM_FEED_WEB, INSTAGRAM_FEED_WEB_M_SITE, INSTAGRAM_LEAD_GEN_MULTI_SUBMIT_ADS, INSTAGRAM_PROFILE_FEED, INSTAGRAM_PROFILE_REELS, INSTAGRAM_REELS, INSTAGRAM_REELS_OVERLAY, INSTAGRAM_REELS_WEB, INSTAGRAM_REELS_WEB_M_SITE, INSTAGRAM_SEARCH_CHAIN, INSTAGRAM_SEARCH_GRID, INSTAGRAM_STANDARD, INSTAGRAM_STORY, INSTAGRAM_STORY_EFFECT_TRAY, INSTAGRAM_STORY_WEB, INSTAGRAM_STORY_WEB_M_SITE, INSTANT_ARTICLE_RECIRCULATION_AD, INSTANT_ARTICLE_STANDARD, INSTREAM_BANNER_DESKTOP, INSTREAM_BANNER_FEED_IOS, INSTREAM_BANNER_FULLSCREEN_IOS, INSTREAM_BANNER_FULLSCREEN_MOBILE, INSTREAM_BANNER_IMMERSIVE_MOBILE, INSTREAM_BANNER_MOBILE, INSTREAM_VIDEO_DESKTOP, INSTREAM_VIDEO_FULLSCREEN_IOS, INSTREAM_VIDEO_FULLSCREEN_MOBILE, INSTREAM_VIDEO_IMAGE, INSTREAM_VIDEO_IMMERSIVE_MOBILE, INSTREAM_VIDEO_MOBILE, JOB_BROWSER_DESKTOP, JOB_BROWSER_MOBILE, MARKETPLACE_MOBILE, MESSENGER_MOBILE_INBOX_MEDIA, MESSENGER_MOBILE_STORY_MEDIA, MOBILE_BANNER, MOBILE_FEED_BASIC, MOBILE_FEED_STANDARD, MOBILE_FULLWIDTH, MOBILE_INTERSTITIAL, MOBILE_MEDIUM_RECTANGLE, MOBILE_NATIVE, RIGHT_COLUMN_STANDARD, SUGGESTED_VIDEO_DESKTOP, SUGGESTED_VIDEO_FULLSCREEN_MOBILE, SUGGESTED_VIDEO_IMMERSIVE_MOBILE, SUGGESTED_VIDEO_MOBILE, WATCH_FEED_HOME, WATCH_FEED_MOBILE, WHATSAPP_STATUS_MEDIA}* | Use this to select what placement on Facebook the ad preview should be for. The API returns an iframe, which is only valid for 24 hours.<br><br>**[required]**<br> |
| `creative`<br><br>*AdCreative* | [Ad creative spec](https://developers.facebook.com/docs/marketing-api/adcreative)<br><br>**[required]**<br><br>**[supports emoji]**<br> |
| `creative_feature`<br><br>*enum{ig_video_native_subtitle, image_animation, product_browsing, product_metadata_automation, profile_card, standard_enhancements_catalog, text_overlay_translation}* | creative_feature<br> |
| `dynamic_asset_label`<br><br>*string* | Provide a label for rendering specific variation of an asset customization ad<br> |
| `dynamic_creative_spec`<br><br>*Object* | Dynamic creative spec for dynamic ads.<br><br>**[supports emoji]**<br> |
| `dynamic_customization`<br><br>*Object* | For dynamic ads in multiple languages, specify the customization to be applied to the ad<br> |
| `end_date`<br><br>*datetime* | Provide an end date for trip.* parameters in the creative<br> |
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
| 200 | Permissions error |
| 194 | Missing at least one required parameter |
| 1500 | The url you supplied is invalid |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/impacting_ad_studies.md -->

## Ad Account Impacting Ad Studies

### Reading

The ad studies that impact this ad account or any descendant ad objects.

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/impacting_ad_studies HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/impacting_ad_studies',
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
    "/{ad-account-id}/impacting_ad_studies",
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
    "/{ad-account-id}/impacting_ad_studies",
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
                               initWithGraphPath:@"/{ad-account-id}/impacting_ad_studies"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fimpacting_ad_studies&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/insights.md -->

## Ad Account, Insights

The Insights API can return several metrics which are *estimated* or *in-development*. In some cases a metric may be **both ** *estimated and in-development*.

- **Estimated** - Provide directional insights for outcomes that are hard to precisely quantify. They may evolve as we gather more data. See [Ads Help Center, Estimated metrics](https://www.facebook.com/business/help/181058782494426?helpref=faq_content#estimated).

- **In Development** - Still being tested and may change as we improve our methodologies. We encourage you to use it for directional guidance, but please use caution when using it for historical comparisons or strategic planning. See [Ads Help Center, In development metrics](https://www.facebook.com/business/help/181058782494426?helpref=faq_content#indevelopment).

For more information, see [Insights API, Estimated and Deprecated Metrics](https://developers.facebook.com/docs/marketing-api/insights/estimated-in-development)

**Success:** Facebook will no longer be able to aggregate non-inline conversion metric values across iOS 14.5 and non-iOS 14.5 campaigns due to differences in attribution logic. Querying across iOS 14.5 and non-iOS 14.5 campaigns will result in no data getting returned for non-inline conversion metrics such as app installs and purchases. Inline event metrics like impressions, link clicks, and video views, however, can still be aggregated. Please visit our [changelog](https://developers.facebook.com/docs/graph-api/changelog/non-versioned-changes/jan-19-2021) for more information.

**Warning:** The `date_preset = lifetime` parameter is disabled in Graph API v10.0 and replaced with `date_preset = maximum`, which returns a maximum of 37 months of data. For v9.0 and below, `date_preset = maximum` will be enabled on May 25, 2021, and any `lifetime` calls will default to `maximum` and return only 37 months of data.

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
| `mobile_app_purchase_roas`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The total return on ad spend (ROAS) from mobile app purchases. This is based on the value that you assigned when you set up the app event. For information on how it's calculated, please refer to https://www.facebook.com/business/help/1848669175353398<br> |
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
| `purchase_roas`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The total return on ad spend (ROAS) from purchases. This is based on information received from one or more of your connected Facebook Business Tools and attributed to your ads. For information on how it's calculated, please refer to https://www.facebook.com/business/help/274294333328345<br> |
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
| `website_purchase_roas`<br><br>*[list<AdsActionStats>](https://developers.facebook.com/docs/marketing-api/reference/ads-action-stats)* | The total return on ad spend (ROAS) from website purchases. This is based on the value of all conversions recorded by the Facebook pixel on your website and attributed to your ads. For information on how it's calculated, please refer to https://www.facebook.com/business/help/1283504535023899<br> |
| `wish_bid`<br><br>*numeric string* | wish_bid<br> |
| `zip`<br><br>*string* | zip<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 100 | Invalid parameter |
| 3018 | The start date of the time range cannot be beyond 37 months from the current date |
| 613 | Calls to this api have exceeded the rate limit. |
| 2642 | Invalid cursors values |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |
| 190 | Invalid OAuth 2.0 Access Token |
| 2500 | Error parsing graph query |
| 105 | The number of parameters exceeded the maximum for this operation |
| 3001 | Invalid query |

### Creating

#### /act_{ad_account_id}/insights
You can make a POST request to *insights* edge from the following paths:

- [/act_{ad_account_id}/insights](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/insights)

When posting to this edge, an [AdReportRun](https://developers.facebook.com/docs/marketing-api/reference/ad-report-run) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `action_attribution_windows`<br><br>*list<enum{1d_view, 7d_view, 28d_view, 1d_click, 7d_click, 28d_click, 1d_ev, dda, default, 7d_view_first_conversion, 28d_view_first_conversion, 7d_view_all_conversions, 28d_view_all_conversions, skan_view, skan_click, skan_click_second_postback, skan_view_second_postback, skan_click_third_postback, skan_view_third_postback, incrementality, custom, 1d_sequenced, 7d_sequenced, 28d_sequenced}>* | **Default value: **`default`<br>The attribution window for the actions. The attribution window determines the window (e.g. 7d) and engagement type (e.g click) that’s used as a filter to report actions. See [About attribution settings and models](https://www.facebook.com/business/help/460276478298895?id=561906377587030) for examples. The `default` option means `["7d_view","1d_click"]`.<br> |
| `action_breakdowns`<br><br>*list<enum{action_device, conversion_destination, matched_persona_id, matched_persona_name, signal_source_bucket, standard_event_content_type, action_canvas_component_name, action_carousel_card_id, action_carousel_card_name, action_destination, action_reaction, action_target_id, action_type, action_video_sound, action_video_type, is_business_ai_assisted}>* | **Default value: **`Vec`<br>How to break down action results. Supports more than one breakdowns. Default value is ["action_type"]<br><br><br>Note: you must also include `actions` field whenever `action_breakdowns` is specified.<br> |
| `action_report_time`<br><br>*enum{impression, conversion, mixed, lifetime}* | Determines the report time of action stats. For example, if a person            saw the ad on Jan 1st but converted on Jan 2nd, when you query the API            with `action_report_time=impression`, you see a conversion on Jan            1st. When you query the API with `action_report_time=conversion`, you see a conversion on Jan 2nd<br> |
| `breakdowns`<br><br>*list<enum{ad_extension_domain, ad_extension_url, ad_format_asset, age, app_id, body_asset, breakdown_ad_objective, breakdown_reporting_ad_id, call_to_action_asset, coarse_conversion_value, comscore_market, country, creative_automation_asset_id, creative_relaxation_asset_type, crm_advertiser_l12_territory_ids, crm_advertiser_subvertical_id, crm_advertiser_vertical_id, crm_ult_advertiser_id, description_asset, fidelity_type, flexible_format_asset_type, gen_ai_asset_type, gender, hsid, image_asset, impression_device, instagram_ads_follow_type, instagram_ads_instagram_media_product_type, instagram_ads_time_since_creation_bucket, internal_campaign_id, is_auto_advance, is_conversion_id_modeled, is_rendered_as_delayed_skip_ad, landing_destination, link_url_asset, mdsa_landing_destination, media_asset_url, media_creator, media_destination_url, media_format, media_origin_url, media_text_content, media_type, pa_creator_ig_handle, postback_sequence_index, product_brand_breakdown, product_category_breakdown, product_custom_label_0_breakdown, product_custom_label_1_breakdown, product_custom_label_2_breakdown, product_custom_label_3_breakdown, product_custom_label_4_breakdown, product_group_content_id_breakdown, product_id, redownload, region, rta_ugc_topic, skan_campaign_id, skan_conversion_id, skan_version, sot_attribution_model_type, sot_attribution_window, sot_channel, sot_event_type, sot_source, title_asset, user_persona_id, user_persona_name, video_asset, zip, rule_set_id, rule_set_name, dma, frequency_value, overlap_segment, hourly_stats_aggregated_by_advertiser_time_zone, hourly_stats_aggregated_by_audience_time_zone, mmm, place_page_id, publisher_platform, platform_position, device_platform, standard_event_content_type, conversion_destination, signal_source_bucket, reels_trending_topic, marketing_messages_btn_name, impression_view_time_advertiser_hour_v2}>* | How to break down the result. For more than one breakdown, only certain combinations are available: See "Combining Breakdowns" in the Breakdowns page. The option `impression_device` cannot be used by itself<br> |
| `date_preset`<br><br>*enum{today, yesterday, this_month, last_month, this_quarter, maximum, data_maximum, last_3d, last_7d, last_14d, last_28d, last_30d, last_90d, last_week_mon_sun, last_week_sun_sat, last_quarter, last_year, this_week_mon_today, this_week_sun_today, this_year}* | **Default value: **`last_30d`<br>Represents a relative time range. This field is ignored if `time_range` or `time_ranges` is specified<br> |
| `default_summary`<br><br>*boolean* | **Default value: **`false`<br>Determine whether to return a summary. If `summary` is set, this param is ignored; otherwise, a summary section with the same fields as specified by `fields` is included in the summary section<br> |
| `export_columns`<br><br>*list<string>* | Select fields on the exporting report file. It is an optional param. Exporting columns are equal to the param fields if you leave this param blank<br> |
| `export_format`<br><br>*string* | Set the format of exporting report file. If the export_format is set, Report file is asyncrhonizely generated. It expects ["xls", "csv"].<br> |
| `export_name`<br><br>*string* | Set the file name of the exporting report.<br> |
| `fields`<br><br>*list<string>* | Fields to be retrieved. Default behavior is to return a list of most used fields<br> |
| `filtering`<br><br>*list<Filter Object>* | **Default value: **`Vec`<br>Filters on the report data. This parameter is an array of filter objects<br><br><br>`field` *string*<br>**[required]**<br><br><br>`operator` *enum {EQUAL, NOT_EQUAL, GREATER_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN, LESS_THAN_OR_EQUAL, IN_RANGE, NOT_IN_RANGE, CONTAIN, NOT_CONTAIN, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY, STEM_MATCH, IN, NOT_IN, STARTS_WITH, ENDS_WITH, ANY, ALL, AFTER, BEFORE, ON_OR_AFTER, ON_OR_BEFORE, NONE, TOP}*<br>**[required]**<br><br><br>`value` *string*<br>**[required]**<br> |
| `graph_cache`<br><br>*boolean* | **Default value: **`true`<br>[internal use only] This param controls whether the the Graph API level cache should be used for insights endpoint<br> |
| `level`<br><br>*enum {ad, adset, campaign, account}* | Represents the level of result<br> |
| `limit`<br><br>*integer* | limit<br> |
| `product_id_limit`<br><br>*integer* | Maximum number of product ids to be returned for each ad when breakdown by `product_id`.<br> |
| `sort`<br><br>*list<string>* | **Default value: **`Vec`<br>Field to sort the result, and direction of sorting. You can specify sorting direction by appending "_ascending" or "_descending" to the sort field. For example, "reach_descending". For actions, you can sort by action type in form of "actions:<action_type>". For example, ["actions:link_click_ascending"]. This array supports no more than one element. By default, the sorting direction is ascending<br> |
| `summary`<br><br>*list<string>* | If this param is used, a summary section is included, with the fields listed in this param<br> |
| `summary_action_breakdowns`<br><br>*list<enum{action_device, conversion_destination, matched_persona_id, matched_persona_name, signal_source_bucket, standard_event_content_type, action_canvas_component_name, action_carousel_card_id, action_carousel_card_name, action_destination, action_reaction, action_target_id, action_type, action_video_sound, action_video_type, is_business_ai_assisted}>* | **Default value: **`Vec`<br>Similar to `action_breakdowns`, but applies to summary. Default value is ["action_type"]<br> |
| `time_increment`<br><br>*enum{monthly, all_days} or integer* | **Default value: **`all_days`<br>If it is an integer, it is the number of days from 1 to 90. After you pick a reporting period by using `time_range` or `date_preset`, you may choose to have the results for the whole period, or have results for smaller time slices. If "all_days" is used, it means one result set for the whole period. If "monthly" is used, you get one result set for each calendar month in the given period. Or you can have one result set for each N-day period specified by this param. This param is ignored if `time_ranges` is specified<br> |
| `time_range`<br><br>*{'since':YYYY-MM-DD,'until':YYYY-MM-DD}* | A single time range object. UNIX timestamp not supported. This param is ignored if `time_ranges` is provided<br><br><br>`since` *datetime*<br>A date in the format of "YYYY-MM-DD", which means from the beginning midnight of that day.<br><br><br>`until` *datetime*<br>A date in the format of "YYYY-MM-DD", which means to the beginning midnight of the following day.<br> |
| `time_ranges`<br><br>*list<{'since':YYYY-MM-DD,'until':YYYY-MM-DD}>* | Array of time range objects. Time ranges can overlap, for example to return cumulative insights. Each time range has one result set. You cannot have more granular results with `time_increment` setting in this case.If `time_ranges` is specified, `date_preset`, `time_range` and `time_increment` are ignored<br><br><br>`since` *datetime*<br>A date in the format of "YYYY-MM-DD", which means from the beginning midnight of that day.<br><br><br>`until` *datetime*<br>A date in the format of "YYYY-MM-DD", which means to the beginning midnight of the following day.<br> |
| `use_account_attribution_setting`<br><br>*boolean* | **Default value: **`false`<br>When this parameter is set to true, your ads results are shown using the attribution settings defined for the ad account<br> |
| `use_unified_attribution_setting`<br><br>*boolean* | When this parameter is set to `true`, your ads results will be shown using unified attribution settings defined at ad set level and parameter `use_account_attribution_setting` will be ignored.<br><br>**Note:** Please set this to `true` to get the same behavior as in the Ads Manager.<br> |

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
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |
| 190 | Invalid OAuth 2.0 Access Token |
| 3018 | The start date of the time range cannot be beyond 37 months from the current date |
| 200 | Permissions error |
| 2500 | Error parsing graph query |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/instagram_accounts.md -->

## Ad Account Instagram Accounts

### Reading

Retrieve instagram accounts associated with this Ad Account

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/instagram_accounts HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/instagram_accounts',
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
    "/{ad-account-id}/instagram_accounts",
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
    "/{ad-account-id}/instagram_accounts",
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
                               initWithGraphPath:@"/{ad-account-id}/instagram_accounts"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Finstagram_accounts&version=v25.0)

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

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total_count).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | Total number of objects on this edge<br><br><br>**[default]**<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |
| 80002 | There have been too many calls to this Instagram account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting. |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |
| 100 | Invalid parameter |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/locationclusters.md -->

## Ad Account Locationclusters

### Reading

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/mcmeconversions.md -->

## Ad Account Mcmeconversions

### Reading

Ad Account MCME Conversions

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/mcmeconversions HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/mcmeconversions',
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
    "/{ad-account-id}/mcmeconversions",
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
    "/{ad-account-id}/mcmeconversions",
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
                               initWithGraphPath:@"/{ad-account-id}/mcmeconversions"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fmcmeconversions&version=v25.0)

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

A list of [AdsMcmeConversion](https://developers.facebook.com/docs/marketing-api/reference/ads-mcme-conversion) nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/message_delivery_estimate.md -->

## Ad Account Message Delivery Estimate

### Reading

AdAccountMessageDeliveryEstimate

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/message_delivery_estimate HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/message_delivery_estimate',
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
    "/{ad-account-id}/message_delivery_estimate",
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
    "/{ad-account-id}/message_delivery_estimate",
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
                               initWithGraphPath:@"/{ad-account-id}/message_delivery_estimate"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fmessage_delivery_estimate&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `bid_amount`<br><br>*int64* | bid amount of campaign set up<br> |
| `lifetime_budget`<br><br>*int64* | campaign's budget to spend in lifetime<br> |
| `lifetime_in_days`<br><br>*int64* | campaign's life time duration in days<br> |
| `optimization_goal`<br><br>*enum {NONE, APP_INSTALLS, AD_RECALL_LIFT, ENGAGED_USERS, EVENT_RESPONSES, IMPRESSIONS, LEAD_GENERATION, QUALITY_LEAD, LINK_CLICKS, OFFSITE_CONVERSIONS, PAGE_LIKES, POST_ENGAGEMENT, QUALITY_CALL, REACH, LANDING_PAGE_VIEWS, VISIT_INSTAGRAM_PROFILE, ENGAGED_PAGE_VIEWS, VALUE, THRUPLAY, DERIVED_EVENTS, APP_INSTALLS_AND_OFFSITE_CONVERSIONS, CONVERSATIONS, IN_APP_VALUE, MESSAGING_PURCHASE_CONVERSION, MESSAGING_DEEP_CONVERSATION_AND_FOLLOW, SUBSCRIBERS, REMINDERS_SET, MEANINGFUL_CALL_ATTEMPT, PROFILE_VISIT, PROFILE_AND_PAGE_ENGAGEMENT, ADVERTISER_SILOED_VALUE, AUTOMATIC_OBJECTIVE, MESSAGING_APPOINTMENT_CONVERSION}* | the optimization goal of the marketing message campaign<br> |
| `pacing_type`<br><br>*enum {STANDARD, DISABLED, DAY_PARTING, NO_PACING, PROBABILISTIC_PACING, PROBABILISTIC_PACING_V2}* | pacing type of the marketing message campaign<br> |
| `promoted_object`<br><br>*Object* | promoted object of the marketing message campaign<br><br>**[required]**<br><br><br>`application_id` *int*<br>The ID of a Facebook Application. Usually related to mobile or canvas games being promoted on Facebook for installs or engagement<br><br><br>`pixel_id` *numeric string or integer*<br>The ID of a Facebook conversion pixel.  Used with offsite conversion campaigns.<br><br><br>`custom_event_type` *enum{AD_IMPRESSION, RATE, TUTORIAL_COMPLETION, CONTACT, CUSTOMIZE_PRODUCT, DONATE, FIND_LOCATION, SCHEDULE, START_TRIAL, SUBMIT_APPLICATION, SUBSCRIBE, ADD_TO_CART, ADD_TO_WISHLIST, INITIATED_CHECKOUT, ADD_PAYMENT_INFO, PURCHASE, LEAD, COMPLETE_REGISTRATION, CONTENT_VIEW, SEARCH, SERVICE_BOOKING_REQUEST, MESSAGING_CONVERSATION_STARTED_7D, LEVEL_ACHIEVED, ACHIEVEMENT_UNLOCKED, SPENT_CREDITS, LISTING_INTERACTION, D2_RETENTION, D7_RETENTION, OTHER}*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`object_store_url` *URL*<br>The uri of the mobile / digital store where an application can be bought / downloaded. This is platform specific. When combined with the "application_id" this uniquely specifies an object which can be the subject of a Facebook advertising campaign.<br><br><br>`object_store_urls` *list<URL>*<br>The vec of uri of the mobile / digital store where an application can be bought / downloaded. This is platform specific. When combined with the "application_id" this uniquely specifies an object which can be the subject of a Facebook advertising campaign.<br><br><br>`offer_id` *numeric string or integer*<br>The ID of an Offer from a Facebook Page.<br><br><br>`page_id` *Page ID*<br>The ID of a Facebook Page<br><br><br>`product_catalog_id` *numeric string or integer*<br>The ID of a Product Catalog. Used with<br>[Dynamic Product Ads](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads).<br><br><br>`product_item_id` *numeric string or integer*<br>The ID of the product item.<br><br><br>`job_listing_id` *numeric string or integer*<br>The ID of the marketplace job listing.<br><br><br>`instagram_profile_id` *numeric string or integer*<br>The ID of the instagram profile id.<br><br><br>`product_set_id` *numeric string or integer*<br>The ID of a Product Set within an Ad Set level Product<br>Catalog. Used with<br>[Dynamic Product Ads](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads).<br><br><br>`event_id` *numeric string or integer*<br>The ID of a Facebook Event<br><br><br>`offline_conversion_data_set_id` *numeric string or integer*<br>The ID of the offline dataset.<br><br><br>`fundraiser_campaign_id` *numeric string or integer*<br>The ID of the fundraiser campaign.<br><br><br>`custom_event_str` *string*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`mcme_conversion_id` *numeric string or integer*<br>The ID of a MCME conversion.<br><br><br>`conversion_goal_id` *numeric string or integer*<br>The ID of a Conversion Goal.<br><br><br>`offsite_conversion_event_id` *numeric string or integer*<br>The ID of a Offsite Conversion Event<br><br><br>`boosted_product_set_id` *numeric string or integer*<br>The ID of the Boosted Product Set within an Ad Set level Product<br>Catalog. Should only be present when the advertiser has<br>opted into Product Set Boosting.<br><br><br>`lead_ads_form_event_source_type` *enum{inferred, meta_source, offsite_crm, offsite_web, onsite_crm, onsite_crm_single_event, onsite_clo_dep_aet, onsite_web, onsite_p2b_call, onsite_messaging, qualified_lead_file}*<br>The event source of lead ads form.<br><br><br>`lead_ads_custom_event_type` *enum{AD_IMPRESSION, RATE, TUTORIAL_COMPLETION, CONTACT, CUSTOMIZE_PRODUCT, DONATE, FIND_LOCATION, SCHEDULE, START_TRIAL, SUBMIT_APPLICATION, SUBSCRIBE, ADD_TO_CART, ADD_TO_WISHLIST, INITIATED_CHECKOUT, ADD_PAYMENT_INFO, PURCHASE, LEAD, COMPLETE_REGISTRATION, CONTENT_VIEW, SEARCH, SERVICE_BOOKING_REQUEST, MESSAGING_CONVERSATION_STARTED_7D, LEVEL_ACHIEVED, ACHIEVEMENT_UNLOCKED, SPENT_CREDITS, LISTING_INTERACTION, D2_RETENTION, D7_RETENTION, OTHER}*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`lead_ads_custom_event_str` *string*<br>The event from an App Event of a mobile app,<br>not in the standard event list.<br><br><br>`lead_ads_offsite_conversion_type` *enum{default, clo}*<br>The offsite conversion type for lead ads<br><br><br>`value_semantic_type` *enum {VALUE, MARGIN, LIFETIME_VALUE}*<br>The semantic of the event value to be using for optimization<br><br><br>`variation` *enum {OMNI_CHANNEL_SHOP_AUTOMATIC_DATA_COLLECTION, PRODUCT_SET_AND_APP, PRODUCT_SET_AND_IN_STORE, PRODUCT_SET_AND_OMNICHANNEL, PRODUCT_SET_AND_PHONE_CALL, PRODUCT_SET_AND_WEBSITE, PRODUCT_SET_AND_WEBSITE_AND_PHONE_CALL, PRODUCT_SET_WEBSITE_APP_AND_INSTORE}*<br>Variation of the promoted object for a PCA ad<br><br><br>`passback_pixel_id` *numeric string or integer*<br>ID of the pixel used for tracking passback events<br><br><br>`passback_application_id` *numeric string or integer*<br>ID of the application used for tracking passback events<br><br><br>`product_set_optimization` *enum{enabled, disabled}*<br>Enum defining whether or not the ad should be optimized for the promoted product set<br><br><br>`full_funnel_objective` *enum{OFFER_CLAIMS, PAGE_LIKES, EVENT_RESPONSES, POST_ENGAGEMENT, WEBSITE_CONVERSIONS, LINK_CLICKS, VIDEO_VIEWS, LOCAL_AWARENESS, PRODUCT_CATALOG_SALES, LEAD_GENERATION, BRAND_AWARENESS, STORE_VISITS, REACH, APP_INSTALLS, MESSAGES, OUTCOME_AWARENESS, OUTCOME_ENGAGEMENT, OUTCOME_LEADS, OUTCOME_SALES, OUTCOME_TRAFFIC, OUTCOME_APP_PROMOTION}*<br>Enum defining the full funnel objective of the campaign<br><br><br>`dataset_split_id` *numeric string or integer*<br>ID of the dataset split used to perform additional optimization on the dataset<br><br><br>`dataset_split_ids` *array<numeric string>*<br>IDs of the dataset splits used to perform additional optimization on the dataset<br><br><br>`lead_ads_selected_pixel_id` *numeric string or integer*<br>The selected pixel id for lead ads conversion leads optimization<br><br><br>`custom_attribution_source_ids` *array<numeric string>*<br>IDs of the custom attribution sources used for tracking passback events<br><br><br>`multi_event_product` *int64*<br>Identifies which action-to-action product the advertiser is using<br><br><br>`product_sales_channel` *enum {ONLINE, IN_STORE, OMNI}*<br>ProductSalesChannel of the promoted object for Omni L3 DA SBLI ads<br><br><br>`anchor_event_config` *JSON object*<br>Configuration for anchor event in multi-event optimization campaigns<br><br><br>`multi_event_conversion_info` *JSON object*<br>Configuration for multi-event conversion info in CLO campaigns<br><br><br>`live_video_destination` *string*<br>The live video destination type for live video ads<br><br><br>`smart_pse_enabled` *boolean*<br>Whether Smart Product Set Expansion is enabled for this campaign.<br><br><br>`smart_pse_setting` *enum{ENABLED, DISABLED}*<br>Setting for Smart Product Set Expansion. Uses an enum instead of a boolean to avoid TAO null handling issues.<br><br><br>`lead_ads_follow_up_event` *enum{whatsapp_conversations}*<br>The selected lead follow-up event for lead ads campaigns.<br><br><br>`omnichannel_object` *Object*<br><br>`app` *array<JSON object>*<br><br>`pixel` *array<JSON object>*<br>**[required]**<br><br><br>`onsite` *array<JSON object>*<br><br>`whats_app_business_phone_number_id` *numeric string or integer*<br><br>`whatsapp_phone_number` *string* |
| `targeting_spec`<br><br>*Targeting object* | targeting setup of the campaign<br><br>**[required]**<br> |

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
| 200 | Permissions error |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/minimum_budgets.md -->

## Ad Account Minimum Budgets

### Reading

The minimum daily budget value for an ad set in an Auction campaign, given the bid_amount if use manual bid

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/minimum_budgets HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/minimum_budgets',
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
    "/{ad-account-id}/minimum_budgets",
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
    "/{ad-account-id}/minimum_budgets",
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
                               initWithGraphPath:@"/{ad-account-id}/minimum_budgets"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fminimum_budgets&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `bid_amount`<br><br>*integer* | Provide this value if you want to get values for manual bid.<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [MinimumBudget](https://developers.facebook.com/docs/marketing-api/reference/minimum-budget) nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/naming_templates.md -->

## Ad Account Naming Templates

### Reading

Edge between template and Ad Account.

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/naming_templates HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/naming_templates',
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
    "/{ad-account-id}/naming_templates",
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
    "/{ad-account-id}/naming_templates",
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
                               initWithGraphPath:@"/{ad-account-id}/naming_templates"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fnaming_templates&version=v25.0)

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

A list of AdsNamingTemplate nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 190 | Invalid OAuth 2.0 Access Token |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/offline_conversion_data_sets.md -->

## Ad Account Offline Conversion Data Sets

### Reading

offline conversion sets the current user has permissions on

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/offline_conversion_data_sets HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/offline_conversion_data_sets',
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
    "/{ad-account-id}/offline_conversion_data_sets",
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
    "/{ad-account-id}/offline_conversion_data_sets",
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
                               initWithGraphPath:@"/{ad-account-id}/offline_conversion_data_sets"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Foffline_conversion_data_sets&version=v25.0)

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

A list of [OfflineConversionDataSet](https://developers.facebook.com/docs/graph-api/reference/offline-conversion-data-set) nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `auto_track_for_ads`<br><br>*bool* | Whether all ads under the ad account is auto tracked by the data set.<br><br><br>**[default]**<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/optimization_goals_aemv2_eligibility.md -->

## Ad Account Optimization Goals Aemv2 Eligibility

### Reading

AdAccountOptimizationGoalsAEMv2Eligibility

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/optimization_goals_aemv2_eligibility HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/optimization_goals_aemv2_eligibility',
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
    "/{ad-account-id}/optimization_goals_aemv2_eligibility",
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
    "/{ad-account-id}/optimization_goals_aemv2_eligibility",
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
                               initWithGraphPath:@"/{ad-account-id}/optimization_goals_aemv2_eligibility"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Foptimization_goals_aemv2_eligibility&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `ad_account_id`<br><br>*int64* | ad_account_id<br> |
| `app_id`<br><br>*numeric string* | app_id<br><br>**[required]**<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdAccountOptimizationGoalsAEMv2Eligibility nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/prepay_fund.md -->

## Ad Account Prepay Fund

### Reading

You can't perform this operation on this endpoint.

### Creating

You can't perform this operation on this endpoint.

### Updating

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/product_audiences.md -->

## Ad Account Product Audiences

### Reading

You can't perform this operation on this endpoint.

### Creating

#### /act_{ad_account_id}/product_audiences
You can make a POST request to *product_audiences* edge from the following paths:

- [/act_{ad_account_id}/product_audiences](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/product_audiences)

When posting to this edge, an [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account) will be created.

##### Example

#### HTTP
```
POST /v25.0/act_<AD_ACCOUNT_ID>/product_audiences HTTP/1.1
Host: graph.facebook.com

name=Test+Iphone+Product+Audience&product_set_id=%3CPRODUCT_SET_ID%3E&inclusions=%5B%7B%22retention_seconds%22%3A86400%2C%22rule%22%3A%7B%22and%22%3A%5B%7B%22event%22%3A%7B%22eq%22%3A%22AddToCart%22%7D%7D%2C%7B%22userAgent%22%3A%7B%22i_contains%22%3A%22iPhone%22%7D%7D%5D%7D%7D%5D&exclusions=%5B%7B%22retention_seconds%22%3A172800%2C%22rule%22%3A%7B%22event%22%3A%7B%22eq%22%3A%22Purchase%22%7D%7D%7D%5D
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->post(
    '/act_<AD_ACCOUNT_ID>/product_audiences',
    array (
      'name' => 'Test Iphone Product Audience',
      'product_set_id' => '<PRODUCT_SET_ID>',
      'inclusions' => '[{"retention_seconds":86400,"rule":{"and":[{"event":{"eq":"AddToCart"}},{"userAgent":{"i_contains":"iPhone"}}]}}]',
      'exclusions' => '[{"retention_seconds":172800,"rule":{"event":{"eq":"Purchase"}}}]',
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
    "/act_<AD_ACCOUNT_ID>/product_audiences",
    "POST",
    {
        "name": "Test Iphone Product Audience",
        "product_set_id": "<PRODUCT_SET_ID>",
        "inclusions": "[{\"retention_seconds\":86400,\"rule\":{\"and\":[{\"event\":{\"eq\":\"AddToCart\"}},{\"userAgent\":{\"i_contains\":\"iPhone\"}}]}}]",
        "exclusions": "[{\"retention_seconds\":172800,\"rule\":{\"event\":{\"eq\":\"Purchase\"}}}]"
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
params.putString("name", "Test Iphone Product Audience");
params.putString("product_set_id", "<PRODUCT_SET_ID>");
params.putString("inclusions", "[{\"retention_seconds\":86400,\"rule\":{\"and\":[{\"event\":{\"eq\":\"AddToCart\"}},{\"userAgent\":{\"i_contains\":\"iPhone\"}}]}}]");
params.putString("exclusions", "[{\"retention_seconds\":172800,\"rule\":{\"event\":{\"eq\":\"Purchase\"}}}]");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/act_<AD_ACCOUNT_ID>/product_audiences",
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
  @"name": @"Test Iphone Product Audience",
  @"product_set_id": @"<PRODUCT_SET_ID>",
  @"inclusions": @"[{\"retention_seconds\":86400,\"rule\":{\"and\":[{\"event\":{\"eq\":\"AddToCart\"}},{\"userAgent\":{\"i_contains\":\"iPhone\"}}]}}]",
  @"exclusions": @"[{\"retention_seconds\":172800,\"rule\":{\"event\":{\"eq\":\"Purchase\"}}}]",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/act_<AD_ACCOUNT_ID>/product_audiences"
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
  -F 'name="Test Iphone Product Audience"' \
  -F 'product_set_id="<PRODUCT_SET_ID>"' \
  -F 'inclusions=[
       {
         "retention_seconds": 86400,
         "rule": {
           "and": [
             {
               "event": {
                 "eq": "AddToCart"
               }
             },
             {
               "userAgent": {
                 "i_contains": "iPhone"
               }
             }
           ]
         }
       }
     ]' \
  -F 'exclusions=[
       {
         "retention_seconds": 172800,
         "rule": {
           "event": {
             "eq": "Purchase"
           }
         }
       }
     ]' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/product_audiences
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=POST&path=act_%3CAD_ACCOUNT_ID%3E%2Fproduct_audiences%3Fname%3DTest%2BIphone%2BProduct%2BAudience%26product_set_id%3D%253CPRODUCT_SET_ID%253E%26inclusions%3D%255B%257B%2522retention_seconds%2522%253A86400%252C%2522rule%2522%253A%257B%2522and%2522%253A%255B%257B%2522event%2522%253A%257B%2522eq%2522%253A%2522AddToCart%2522%257D%257D%252C%257B%2522userAgent%2522%253A%257B%2522i_contains%2522%253A%2522iPhone%2522%257D%257D%255D%257D%257D%255D%26exclusions%3D%255B%257B%2522retention_seconds%2522%253A172800%252C%2522rule%2522%253A%257B%2522event%2522%253A%257B%2522eq%2522%253A%2522Purchase%2522%257D%257D%257D%255D&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `associated_audience_id`<br><br>*int64* | SELF_EXPLANATORY<br> |
| `creation_params`<br><br>*dictionary { string : <string> }* | SELF_EXPLANATORY<br> |
| `description`<br><br>*string* | SELF_EXPLANATORY<br> |
| `enable_fetch_or_create`<br><br>*boolean* | enable_fetch_or_create<br> |
| `event_sources`<br><br>*array<JSON object>* | event_sources<br><br><br>`id` *int64*<br>id<br><br>**[required]**<br><br><br>`type` *enum {APP, OFFLINE_EVENTS, PAGE, PIXEL}*<br>type<br><br>**[required]**<br> |
| `exclusions`<br><br>*list<Object>* | SELF_EXPLANATORY<br><br><br>`booking_window` *Object*<br><br>`min_seconds` *int64*<br><br>`max_seconds` *int64*<br><br>`count` *Object*<br><br>`event` *string*<br><br>`type` *enum {CUSTOM, PRIMARY, WEBSITE, APP, OFFLINE_CONVERSION, CLAIM, MANAGED, PARTNER, VIDEO, LOOKALIKE, ENGAGEMENT, BAG_OF_ACCOUNTS, STUDY_RULE_AUDIENCE, FOX, MEASUREMENT, REGULATED_CATEGORIES_AUDIENCE, BIDDING, EXCLUSION, MESSENGER_SUBSCRIBER_LIST}*<br><br>`retention` *Object*<br><br>`min_seconds` *integer*<br>**[required]**<br><br><br>`max_seconds` *integer*<br>**[required]**<br><br><br>`retention_days` *int64*<br><br>`retention_seconds` *integer*<br><br>`rule` *Object*<br><br>`pixel_id` *int64* |
| `inclusions`<br><br>*list<Object>* | SELF_EXPLANATORY<br><br><br>`booking_window` *Object*<br><br>`min_seconds` *int64*<br><br>`max_seconds` *int64*<br><br>`count` *Object*<br><br>`event` *string*<br><br>`type` *enum {CUSTOM, PRIMARY, WEBSITE, APP, OFFLINE_CONVERSION, CLAIM, MANAGED, PARTNER, VIDEO, LOOKALIKE, ENGAGEMENT, BAG_OF_ACCOUNTS, STUDY_RULE_AUDIENCE, FOX, MEASUREMENT, REGULATED_CATEGORIES_AUDIENCE, BIDDING, EXCLUSION, MESSENGER_SUBSCRIBER_LIST}*<br><br>`retention` *Object*<br><br>`min_seconds` *integer*<br>**[required]**<br><br><br>`max_seconds` *integer*<br>**[required]**<br><br><br>`retention_days` *int64*<br><br>`retention_seconds` *integer*<br><br>`rule` *Object*<br><br>`pixel_id` *int64* |
| `name`<br><br>*string* | SELF_EXPLANATORY<br><br>**[required]**<br> |
| `opt_out_link`<br><br>*string* | SELF_EXPLANATORY<br> |
| `parent_audience_id`<br><br>*int64* | SELF_EXPLANATORY<br> |
| `product_set_id`<br><br>*numeric string or integer* | SELF_EXPLANATORY<br><br>**[required]**<br> |
| `subtype`<br><br>*enum {CUSTOM, PRIMARY, WEBSITE, APP, OFFLINE_CONVERSION, CLAIM, MANAGED, PARTNER, VIDEO, LOOKALIKE, ENGAGEMENT, BAG_OF_ACCOUNTS, STUDY_RULE_AUDIENCE, FOX, MEASUREMENT, REGULATED_CATEGORIES_AUDIENCE, BIDDING, EXCLUSION, MESSENGER_SUBSCRIBER_LIST}* | SELF_EXPLANATORY<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *id* in the return type.

```
Struct  {
id: numeric string,
message: string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 2654 | Failed to create custom audience |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/promote_pages.md -->

## Ad Account Promote Pages

### Reading

Get all the promoted Pages for an Ad Account.

#### Requirements

- The `pages_show_list` permission - to get access to your app user's Pages

- The `pages_manage_ads` permission - to get access to create and manage ads for your app user's Pages

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/promote_pages HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/promote_pages',
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
    "/{ad-account-id}/promote_pages",
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
    "/{ad-account-id}/promote_pages",
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
                               initWithGraphPath:@"/{ad-account-id}/promote_pages"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fpromote_pages&version=v25.0)

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

A list of [Page](https://developers.facebook.com/docs/graph-api/reference/page) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/proposals.md -->

## Ad Account Proposals

### Reading

Get all proposals for an ad account

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/proposals HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/proposals',
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
    "/{ad-account-id}/proposals",
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
    "/{ad-account-id}/proposals",
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
                               initWithGraphPath:@"/{ad-account-id}/proposals"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fproposals&version=v25.0)

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

A list of AdProposal nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/publisher_block_lists.md -->

## Ad Account Publisher Block Lists

### Reading

returns blocklists for the account

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/publisher_block_lists HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/publisher_block_lists',
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
    "/{ad-account-id}/publisher_block_lists",
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
    "/{ad-account-id}/publisher_block_lists",
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
                               initWithGraphPath:@"/{ad-account-id}/publisher_block_lists"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fpublisher_block_lists&version=v25.0)

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

A list of [PublisherBlockList](https://developers.facebook.com/docs/marketing-api/reference/publisher-block-list) nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `is_auto_blocking_on`<br><br>*bool* | Auto blocking field for this blocklist.<br><br><br>**[default]**<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |
| 100 | Invalid parameter |

### Creating

#### /act_{ad_account_id}/publisher_block_lists
You can make a POST request to *publisher_block_lists* edge from the following paths:

- [/act_{ad_account_id}/publisher_block_lists](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/publisher_block_lists)

When posting to this edge, a [PublisherBlockList](https://developers.facebook.com/docs/marketing-api/reference/publisher-block-list) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `name`<br><br>*string* | Name of the block list<br> |

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
| 200 | Permissions error |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/reachestimate.md -->

## Ad Account Reachestimate

### Reading

Used to get the audience size estimation based on a targeting specification using this ad account. This endpoint returns a range-based size in the form of two fields: `users_lower_bound` and `users_upper_bound`.

#### Limitations

Reach estimates for custom audiences may not be available for certain businesses. When unavailable, the endpoint returns -1 for the estimate fields. This does not indicate an empty audience or prevent ad delivery.

##### Example

#### HTTP
```
GET /v25.0/act_<AD_ACCOUNT_ID>/reachestimate?targeting_spec=%7B%22geo_locations%22%3A%7B%22countries%22%3A%5B%22US%22%5D%7D%2C%22age_min%22%3A20%2C%22age_max%22%3A40%7D HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/act_<AD_ACCOUNT_ID>/reachestimate?targeting_spec=%7B%22geo_locations%22%3A%7B%22countries%22%3A%5B%22US%22%5D%7D%2C%22age_min%22%3A20%2C%22age_max%22%3A40%7D',
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
    "/act_<AD_ACCOUNT_ID>/reachestimate",
    {
        "targeting_spec": "{\"geo_locations\":{\"countries\":[\"US\"]},\"age_min\":20,\"age_max\":40}"
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
params.putString("targeting_spec", "{\"geo_locations\":{\"countries\":[\"US\"]},\"age_min\":20,\"age_max\":40}");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/act_<AD_ACCOUNT_ID>/reachestimate",
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
  @"targeting_spec": @"{\"geo_locations\":{\"countries\":[\"US\"]},\"age_min\":20,\"age_max\":40}",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/act_<AD_ACCOUNT_ID>/reachestimate"
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
  -d 'targeting_spec={
       "geo_locations": {
         "countries": [
           "US"
         ]
       },
       "age_min": 20,
       "age_max": 40
     }' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/act_<AD_ACCOUNT_ID>/reachestimate
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=act_%3CAD_ACCOUNT_ID%3E%2Freachestimate%3Ftargeting_spec%3D%257B%2522geo_locations%2522%253A%257B%2522countries%2522%253A%255B%2522US%2522%255D%257D%252C%2522age_min%2522%253A20%252C%2522age_max%2522%253A40%257D&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `object_store_url`<br><br>*string* | Used in mobile app campaign. The url of the app in the app store.<br> |
| `targeting_spec`<br><br>*Targeting object* | The targeting structure for reach estimate. `countries` is required. See [targeting](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/advanced-targeting).<br><br>**[required]**<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A single [AdAccountReachEstimate](https://developers.facebook.com/docs/graph-api/reference/ad-account-reach-estimate) node.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 613 | Calls to this api have exceeded the rate limit. |
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |
| 2641 | Your ad includes or excludes locations that are currently restricted |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/reachfrequencypredictions.md -->

## Ad Account Reach and Frequency Prediction

**Warning:** Beginning with v23.0, the `instagram_destination_id` field will return the `ig_user_id` rather than the `instagram_actor_id`. The `instagram_actor_id` is also no longer supported in the `destination_ids` parameter; update your API calls to use the `ig_user_id` instead.

### Reading

Reach frequency predictions for the ad account.

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/reachfrequencypredictions HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/reachfrequencypredictions',
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
    "/{ad-account-id}/reachfrequencypredictions",
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
    "/{ad-account-id}/reachfrequencypredictions",
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
                               initWithGraphPath:@"/{ad-account-id}/reachfrequencypredictions"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Freachfrequencypredictions&version=v25.0)

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

A list of [ReachFrequencyPrediction](https://developers.facebook.com/docs/marketing-api/reference/reach-frequency-prediction) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

#### /act_{ad_account_id}/reachfrequencypredictions
You can make a POST request to *reachfrequencypredictions* edge from the following paths:

- [/act_{ad_account_id}/reachfrequencypredictions](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/reachfrequencypredictions)

When posting to this edge, a [ReachFrequencyPrediction](https://developers.facebook.com/docs/marketing-api/reference/reach-frequency-prediction) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `budget`<br><br>*int64* | Expected lifetime budget in cents in the currency for the ad account. Must be greater than the default budget limit.<br> |
| `campaign_group_id`<br><br>*numeric string or integer* | The ID of the campaign which this prediction belongs to.<br> |
| `day_parting_schedule`<br><br>*list<Object>* | Ad set schedule, representing a delivery schedule for a single day<br><br>Example:<br>`[{"start_minute":360,"end_minute":1440,"days":[0,1,2,3,4,5,6]}]`<br><br> The day part should be same for all week days. There needs to be at least 3 hours of delivery each day.<br><br><br>`start_minute` *int64*<br>A 0 based minute of the day representing when the schedule starts<br><br>**[required]**<br><br><br>`end_minute` *int64*<br>A 0 based minute of the day representing when the schedule ends<br><br>**[required]**<br><br><br>`days` *list<int64>*<br>Array of ints representing which days the schedule is active. Valid values are 0-6 with 0 representing Sunday, 1 representing Monday, ... and 6 representing Saturday.<br><br>**[required]**<br><br><br>`timezone_type` *enum {USER, ADVERTISER}*<br><br>**Default value: **`USER` |
| `deal_id`<br><br>*numeric string or integer* | The ID of the deal which this prediction belongs to.<br> |
| `destination_id`<br><br>*int64* | The ID of the Page or the ID of the app which the ad promotes.<br><br><br>Using the correct advertiser Page or app ID makes your predictions more accurate. Reach and cost predictions for feed are specific to a given ID. They take into account other ads running from the same Page, as well as the past creative quality of ads from the Page, which impacts cost.<br><br><br>If the ad set has `desktopfeed` or `mobilefeed` placement, specify `destination_id` or pass app or Page ID in `destination_ids` field. We recommend using  `destination_ids`.<br> |
| `destination_ids`<br><br>*list<numeric string or integer>* | Array of ID's of the Facebook Page or App which the ad promotes. Also include the Instagram account ID if `instagramstream` placement is used.<br><br><br>If the `objective` is `MOBILE_APP_INSTALLS`, provide only the app ID. In this case, do not provide Instagram account ID, even with `instagramstream` placement.<br> |
| `end_time`<br><br>*int64* | Same as `stop_time`.<br> |
| `frequency_cap`<br><br>*int64* | If `interval_frequency_cap_reset_period` is specified, this field represents the frequency cap to be set for a custom period. For example: show ad 3 times per user every 48 hours.<br><br><br>However when you read the values back, this represents the lifetime frequency cap for the campaign duration. A separate read-only field called `interval_frequency_cap` provides the frequency cap value originally set for the custom period.<br><br><br>If `interval_frequency_cap_reset_period` is not specified, this field represents the lifetime frequency cap set for the campaign duration.<br><br><br>Target Frequency equivalent is `target_frequency`. You must also set `is_balanced_frequency` to `true`.<br> |
| `instream_packages`<br><br>*array<enum {NORMAL, PREMIUM, SPORTS, ENTERTAINMENT, BEAUTY, FOOD, SPANISH, REGULAR_ANIMALS_PETS, REGULAR_FOOD, REGULAR_GAMES, REGULAR_POLITICS, REGULAR_SPORTS, REGULAR_STYLE, REGULAR_TV_MOVIES}>* | Instream package of the campaign. Reserve buying campaigns and self-serve contextual package campaigns need to set the targeting packages here. Those campaigns will only deliver to pages included in the targeting packages<br> |
| `interval_frequency_cap_reset_period`<br><br>*int64* | Custom period to reset frequency cap. In hours. Expressed as multiples of 24.<br><br><br>For example, to show ad no more than 3 times every 48 hours, reset period should be set to 48 (hours) and `frequency_cap` should be set to 3. Implemented using a rolling window.<br><br><br>Target Frequency equivalent is `target_frequency_reset_period.` You must also set `is_balanced_frequency` to `true`.<br> |
| `num_curve_points`<br><br>*int64* | **Default value: **`400`<br>How many grid points to return from the curve.<br>If the value is not specified, the default value (800) is used. <br>If the value is larger than 800 then 800 will be used.<br> |
| `objective`<br><br>*string* | **Default value: **`REACH`<br>Objective of your reach and frequency campaign. Facebook uses this to create an optimized bid based on your objective. This does not modify you objective set at the ad campaign level. Of all possible ad objectives, you can only use these values in Facebook Reach and Frequency campaigns: `BRAND_AWARENESS`, `LINK_CLICKS`, `POST_ENGAGEMENT`, `MOBILE_APP_INSTALLS`, `WEBSITE_CONVERSIONS`, `REACH`, and `VIDEO_VIEWS`.<br> |
| `optimization_goal`<br><br>*string* | optimization_goal<br> |
| `prediction_mode`<br><br>*int64* | Set `0` to create a prediction of budget based on expected reach. `reach` value must be provided. <br> <br>  Set `1` to create a prediction of reach based on expected budget. `budget` value must be provided.<br> |
| `reach`<br><br>*int64* | The desired reach of the set, must be at least the minimum reach for the target country. This number is 1,000,000, in most cases.<br> |
| `rf_prediction_id_to_share`<br><br>*numeric string or integer* | ID of a previously created prediction. The new prediction will also use the audience from the given prediction.<br> |
| `start_time`<br><br>*int64* | Unix timestamp for the set start time.<br> |
| `stop_time`<br><br>*int64* | Unix timestamp for the set stop time. Must be no greater than 8 weeks ahead of the current time. It should end after 6AM on the last day, in the ad account's timezone.<br> |
| `story_event_type`<br><br>*int64* | Whether or not to include mobile devices that cannot display different ad formats: <br>- Use `256`, to run canvas ads<br>- Use `128` to run video ads<br>- Use `0` if you do not include video or canvas ads<br>- Use `384` (256 + 128), to include both canvas and video.<br><br><br>You cannot create video ads if you set this flag to `0` during prediction. You can create non-video ads if the flag is set to `128`. This field is required if you target all mobile devices.<br><br>You cannot create canvas ads if this flag is set to `0` during prediction. However, you can create non-canvas ads even the flag is set to `256`.<br> |
| `target_spec`<br><br>*Targeting object* | [Targeting spec](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/advanced-targeting) for reach and frequency prediction. The length of JSON serialized API targeting spec should not exceed 65000  characters after internal reformatting.<br><br><br>You cannot:<br><br>- Use `rightcolumn` together with any feed for placement. <br><br>- Specify more than one country.<br><br>- Provide minimal iOS version for `user_os`.<br><br><br>Website Custom Audiences and `friends_of_connection` are not supported.<br> |
| `trending_topics_spec`<br><br>*JSON object* | Describe your Reels Trending Ads configuration.<br><br><br>`is_all_trending` *boolean*<br><br>**Default value: **`false`<br>is_all_trending<br><br><br>`is_special_budget_alloc` *boolean*<br><br>**Default value: **`false`<br>is_special_budget_alloc<br><br><br>`trending_topics` *array<enum {TRENDING_ALL, TRENDING_FASHION, TRENDING_BEAUTY, TRENDING_SPORTS, TRENDING_FOOD, TRENDING_CARS, TRENDING_BEAUTY_FASHION, TRENDING_FITNESS, TRENDING_MOVIES, TRENDING_PETS_ANIMALS, TRENDING_VIDEO_GAMING, TRENDING_ALL_VERIFIED, TRENDING_MUSIC, TRENDING_SUPERBOWL, TRENDING_NBC_WINTER_OLYMPICS, TRENDING_BASKETBALL, TRENDING_TRAVEL, TRENDING_BUSINESS_FINANCE, TRENDING_BASKETBALL_NBA_PLAYOFFS, TRENDING_DISNEY_WOMENS_MARCH_MADNESS_2026, TRENDING_DISNEY_SPORTS, TRENDING_VANITY_FAIR_OSCARS_2026, TRENDING_VANITY_FAIR_ALL, TRENDING_SOCCER, TRENDING_ELECTRONICS_TECHNOLOGY, TRENDING_HEALTH_WELLNESS, TRENDING_DISNEY_NBA_2026, TRENDING_VOGUE_METGALA_2026, TRENDING_CONDE_METGALA_2026, TRENDING_CONDE_ALL, POE_SPORTS}>*<br><br>**Default value: **`[]`<br>trending_topics<br> |

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
| 2625 | The request for a reach frequency campaign is invalid. |
| 613 | Calls to this api have exceeded the rate limit. |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 2641 | Your ad includes or excludes locations that are currently restricted |
| 190 | Invalid OAuth 2.0 Access Token |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/report_specs.md -->

## Ad Account Report Specs

### Reading

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/reporting.md -->

## Ad Account Reporting

### Reading

Provides the Report Builder's response.

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/reporting HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/reporting',
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
    "/{ad-account-id}/reporting",
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
    "/{ad-account-id}/reporting",
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
                               initWithGraphPath:@"/{ad-account-id}/reporting"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Freporting&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `action_report_time`<br><br>*enum {impression, conversion, mixed, lifetime}* | action_report_time<br> |
| `attribution_windows`<br><br>*array<enum {1d_view, 7d_view, 28d_view, 1d_click, 7d_click, 28d_click, 1d_ev, dda, default, 7d_view_first_conversion, 28d_view_first_conversion, 7d_view_all_conversions, 28d_view_all_conversions, skan_view, skan_click, skan_click_second_postback, skan_view_second_postback, skan_click_third_postback, skan_view_third_postback}>* | Attribution window for the actions.<br> |
| `comparison_time_range`<br><br>*{'since':YYYY-MM-DD,'until':YYYY-MM-DD}* | Map of time range objects for comparison.<br><br><br>`since` *datetime*<br>A date in the format of "YYYY-MM-DD", which means from the beginning midnight of that day.<br><br><br>`until` *datetime*<br>A date in the format of "YYYY-MM-DD", which means to the beginning midnight of the following day.<br> |
| `date_preset`<br><br>*enum {today, yesterday, this_month, last_month, this_quarter, maximum, data_maximum, last_3d, last_7d, last_14d, last_28d, last_30d, last_90d, last_week_mon_sun, last_week_sun_sat, last_quarter, last_year, this_week_mon_today, this_week_sun_today, this_year}* | The date preset. Represents a relative time range.<br> |
| `default_summary`<br><br>*boolean* | Determine whether to return a summary. If this param is used, a summary section will be included with the metrics.<br> |
| `dimension_groups`<br><br>*array<array<string>>* | The groups of dimensions, where each group is treated one dimension.<br> |
| `dimensions`<br><br>*array<string>* | The dimensions required in the report.<br> |
| `filtering`<br><br>*Filters used in report builder* | **Default value: **`Vec`<br>Fields for the report to be filtered on.<br><br><br>`field` *string*<br>**[required]**<br><br><br>`operator` *enum {EQUAL, NOT_EQUAL, GREATER_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN, LESS_THAN_OR_EQUAL, IN_RANGE, NOT_IN_RANGE, CONTAIN, NOT_CONTAIN, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY, STEM_MATCH, IN, NOT_IN, STARTS_WITH, ENDS_WITH, ANY, ALL, AFTER, BEFORE, ON_OR_AFTER, ON_OR_BEFORE, NONE, TOP}*<br>**[required]**<br><br><br>`value` *string*<br>**[required]**<br> |
| `formatting`<br><br>*JSON object {string : array<JSON object>}* | conditional formatting<br> |
| `last_dimension`<br><br>*JSON object {string : string}* | Last dimesion values returned in previous request. If provided, API will seek from this poistion in saved pagination.<br> |
| `last_report_snapshot_id`<br><br>*int64* | The last report snapshot ID.<br> |
| `limit`<br><br>*integer* | The limit on number of data rows requested.<br> |
| `locked_dimensions`<br><br>*int64* | **Default value: **`0`<br>The locked dimensions.<br> |
| `metrics`<br><br>*array<string>* | The metrics whose values are required.<br> |
| `offset`<br><br>*int64* | Indicates the offset.<br> |
| `pagination_key`<br><br>*string* | Internal application pagination key. If provided, API will seek saved pagination.<br> |
| `sorting`<br><br>*array<JSON object>* | Represents the sorting fields and their sort directions.<br><br><br>`field` *string*<br>field<br><br>**[required]**<br><br><br>`direction` *enum {asc, desc}*<br><br>**Default value: **`"desc"`<br>direction<br> |
| `summary_count`<br><br>*boolean* | Determine whether to return the count of all rows.<br> |
| `time_range`<br><br>*{'since':YYYY-MM-DD,'until':YYYY-MM-DD}* | The time range.<br><br><br>`since` *datetime*<br>A date in the format of "YYYY-MM-DD", which means from the beginning midnight of that day.<br><br><br>`until` *datetime*<br>A date in the format of "YYYY-MM-DD", which means to the beginning midnight of the following day.<br> |

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

A list of AdsReportBuilder nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `headers`<br><br>*AdsReportBuilderHeader* | Contains the header information (includes dimensions, columns etc)<br><br><br>**[default]**<br> |
| `rows`<br><br>*list<AdsReportBuilderRow>* | Contains data rows.<br><br><br>**[default]**<br> |
| `total_count`<br><br>*int32* | Total number of rows<br><br><br>**[default]**<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 2616 | The reporting data you are trying to fetch has too many rows. Please pull data for shorter time periods or use filters to restrict the number of ad IDs |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |
| 200 | Permissions error |

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/saved_audiences.md -->

## Ad Account Saved Audiences

### Reading

saved audiences

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/saved_audiences HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/saved_audiences',
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
    "/{ad-account-id}/saved_audiences",
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
    "/{ad-account-id}/saved_audiences",
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
                               initWithGraphPath:@"/{ad-account-id}/saved_audiences"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fsaved_audiences&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `business_id`<br><br>*numeric string or integer* | optional param assist with filters such as recently used<br> |
| `fields`<br><br>*list<string>* | Fields to be retrieved. Default behavior is to return only the ids.<br> |
| `filtering`<br><br>*list<Filter Object>* | Filters on the report data. This parameter is an array of filter objects.<br><br><br>`field` *string*<br>**[required]**<br><br><br>`operator` *enum {EQUAL, NOT_EQUAL, GREATER_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN, LESS_THAN_OR_EQUAL, IN_RANGE, NOT_IN_RANGE, CONTAIN, NOT_CONTAIN, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY, STEM_MATCH, IN, NOT_IN, STARTS_WITH, ENDS_WITH, ANY, ALL, AFTER, BEFORE, ON_OR_AFTER, ON_OR_BEFORE, NONE, TOP}*<br>**[required]**<br><br><br>`value` *string*<br>**[required]**<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [SavedAudience](https://developers.facebook.com/docs/marketing-api/reference/saved-audience) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/site_links.md -->

## Ad Account Site Links

### Reading

Get all site links for this ad account

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/site_links HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/site_links',
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
    "/{ad-account-id}/site_links",
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
    "/{ad-account-id}/site_links",
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
                               initWithGraphPath:@"/{ad-account-id}/site_links"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fsite_links&version=v25.0)

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

A list of SiteLink nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/smart_suggested_ads.md -->

## Ad Account Smart Suggested Ads

### Reading

AdAccountSmartSuggestedAds

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/smart_suggested_ads HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/smart_suggested_ads',
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
    "/{ad-account-id}/smart_suggested_ads",
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
    "/{ad-account-id}/smart_suggested_ads",
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
                               initWithGraphPath:@"/{ad-account-id}/smart_suggested_ads"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fsmart_suggested_ads&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `custom_event_type`<br><br>*enum {JOB_ALERT_SUBSCRIBE, JOB_APPLICATION_CREATE, JOB_APPLICATION_FORM_IMPRESSION, JOB_BROWSER_IMPRESSION, JOB_OPENING_DETAIL_VIEW_IMPRESSION, ACTIVATE_APP, COMPLETE_REGISTRATION, CONTENT_VIEW, ONSITE_APP_CONTENT_VIEW, ONSITE_WEB_CONTENT_VIEW, ONSITE_WEB_APP_CONTENT_VIEW, SEARCH, RATE, TUTORIAL_COMPLETION, CONTACT, CUSTOMIZE_PRODUCT, DONATE, FIND_LOCATION, SCHEDULE, START_TRIAL, SUBMIT_APPLICATION, SUBSCRIBE, RECURRING_SUBSCRIPTION_PAYMENT, CANCEL_SUBSCRIPTION, VISIT_LOCATION, AD_CLICK, AD_IMPRESSION, UPDATE_PLTV, APPEND_VALUE, ADD_TO_CART, ONSITE_APP_ADD_TO_CART, ONSITE_WEB_ADD_TO_CART, ONSITE_WEB_APP_ADD_TO_CART, ADD_TO_WISHLIST, INITIATED_CHECKOUT, ADD_PAYMENT_INFO, PURCHASE, APPEND_CLICK_ATTRIBUTION, ONSITE_APP_PURCHASE, ONSITE_WEB_PURCHASE, ONSITE_WEB_APP_PURCHASE, MESSAGE_TO_BUY, LEAD, LEAD_CUSTOM_EVENT, LEAD_SUBMITTED, ONSITE_WEB_LEAD, PDP_CLICK_TO_OFFSITE, PDP_CLICK_VIEW_IN_CART, PDP_CLICK_TO_CHECKOUT, ORDER_CREATION, CART_IMPRESSION, SHOP_MID_FUNNEL, LEVEL_ACHIEVED, ACHIEVEMENT_UNLOCKED, SPENT_CREDITS, FLOW_COMPLETE, SERVICE_BOOKING_REQUEST, INSTAGRAM_PROFILE_FOLLOW, INSTAGRAM_PROFILE_VIEW, PROFILE_FOLLOW, PROFILE_VIEW, INSTAGRAM_AD_FOLLOW, INSTAGRAM_AD_FOLLOW_QUALITY_SCORE, INSTAGRAM_FOLLOW_QUALITY_SCORE, PROFILE_FOLLOW_QUALITY_SCORE, INSTAGRAM_LEAD_GEN_LAW, UPCOMING_EVENT_REMINDER_SET, UPCOMING_EVENT_REMINDER_UNSET, UPCOMING_EVENT_NOTIFICATION_CLICK, UPCOMING_EVENT_POST_NOTIFICATION_LINK_CLICK, UPCOMING_EVENT_POST_NOTIFICATION_UAS_TAP, IG_RECONSIDERATION_ENTRY_POINT_CLICK, MESSAGING_ACCEPT, MESSAGING_BLOCK, MESSAGING_DELETE_THREAD, MESSAGING_FRX_FEEDBACK, MESSAGING_SCAM_PROACTIVE_WARNING_LEARN_MORE, MESSAGING_SCAM_PROACTIVE_WARNING_LEARN_MORE_EXPERIMENTAL, MESSAGING_IN_THREAD_FEEDBACK_SATISFIED, MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED, MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED_CONFUSING_PROCESS, MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED_NOT_HELPFUL, MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED_SLOW_RESPONSES, MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED_SUSPICIOUS_BEHAVIOR, MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED_TOO_MANY_MESSAGES, MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED_OTHER, MESSAGING_IN_THREAD_DXMA_FEEDBACK_SATISFIED, MESSAGING_IN_THREAD_DXMA_FEEDBACK_DISSATISFIED, MESSAGING_MSGR_BUYER_SATISFIED_WITH_PURCHASE, MESSAGING_MSGR_BUYER_DISSATISFIED_WITH_PURCHASE, MESSAGING_IG_BUYER_SATISFIED_WITH_CONVERSATION, MESSAGING_IG_BUYER_DISSATISFIED_WITH_CONVERSATION, MESSAGING_CONVERSATION_SELLER_FEEDBACK_SATISFIED, MESSAGING_CONVERSATION_SELLER_FEEDBACK_DISSATISFIED, MESSAGING_CONVERSATION_SELLER_FEEDBACK_BAN, MESSAGING_CONVERSATION_SELLER_FEEDBACK_REPORT_SPAM, MESSAGING_MARK_SPAM, MESSAGING_REPLY, MESSAGING_FIRST_REPLY, MESSAGING_FIRST_REPLY_CONTINUATION, MESSAGING_OPEN_THREAD, MESSAGING_IGNORE_REQUEST, MESSAGING_PROMOTIONAL_OFF, MESSAGING_READ_RECEIPT, MESSAGING_DELIVERY_RECEIPT, MESSAGING_DELETE_MESSAGE, MESSAGING_CONVERSATION_STARTED_7D, MESSAGING_DEEP_CONVERSATION, MESSAGING_DEEP_CONVERSATION_SHADOW, MESSAGING_DEDUP_DEEP_CONVERSATION, MESSAGING_SYNTHETIC_DEEP_CONVERSATION, MESSAGING_AUTOMATED_FLOW_COMPLETE, MESSAGING_AUTOMATED_FLOW_CANCELLED, MESSENGER_RECEIPT_TEMPLATE, MESSAGING_PAGE_SEND, MESSAGING_PAGE_SEND_AFTER_USER_SEND, MESSAGING_USER_DEPTH_2_MESSAGE_SEND, MESSAGING_USER_DEPTH_2_MESSAGE_SEND_CONTINUATION, MESSAGING_USER_DEPTH_3_MESSAGE_SEND, MESSAGING_USER_DEPTH_3_MESSAGE_SEND_CONTINUATION, MESSAGING_USER_DEPTH_5_MESSAGE_SEND, MESSAGING_PAGE_DEPTH_2_MESSAGE_SEND, MESSAGING_PAGE_DEPTH_2_MESSAGE_SEND_CONTINUATION, MESSAGING_CONVERSATION_DEPTH, MESSAGING_CONVERSATION_DEPTH_NEW_WHATSAPP_SCHEMA, MESSAGING_QUALIFIED_LEAD, MESSAGING_APPOINTMENT_BOOKED, MESSAGING_PAGE_SEND_NUM_SAME_CONVERSATION, MESSAGING_USER_SEND_NUM_SAME_CONVERSATION, MESSAGING_BUSINESS_CALLING_OPT_IN_SENT, MESSAGING_BUSINESS_CALLING_OPT_IN_ACCEPTED, MESSAGING_BUSINESS_CALLING_OPT_IN_DENIED, MESSAGING_BUSINESS_CALLING_CALL_INITIATED, MESSAGING_BUSINESS_CALLING_CALL_ANSWERED, MESSAGING_BUSINESS_CALLING_CALL_MISSED, MESSAGING_BUSINESS_CALLING_CALL_DENIED, MESSAGING_BUSINESS_LLAMA_CONVERSION_POSITIVE, MESSAGING_BUSINESS_LLAMA_CONVERSION_NEGATIVE, MESSAGING_FIRST_BIZ_REPLY, MESSAGING_FIRST_BIZ_REPLY_CONTINUATION, MESSAGING_FIRST_CALL, MESSAGING_FIRST_LONG_CALL, MESSAGING_USER_PHONE_CALL_DIALOG_CONFIRM_CLICKED, MESSAGING_USER_CALL_ATTEMPTED, MESSAGING_PAGE_CALL_ATTEMPTED, MESSAGING_CONNECTED_CALL_OR_DC, MESSAGING_CALL_ATTEMPT_AND_DC, MESSAGING_CALL_ATTEMPT_AND_PAGE_INTERACTION, MESSAGING_MISSED_CALL, MESSAGING_USER_SUBSCRIBED, MESSAGING_CONVERSATION_ENGAGED, MESSAGING_WELCOME_MESSAGE_VIEW, MESSAGING_CONVERSATION_REPLIED_7D, TOTAL_MESSAGING_CONNECTION, DOWN_FUNNEL_PURCHASE, MESSAGING_DOWN_FUNNEL_PURCHASE, MESSAGING_DOWN_FUNNEL_PURCHASE_VALUE, MESSAGING_EVENT_OPTIMIZATION_LEAD, MESSAGING_SHALLOW_LEAD, MESSAGING_DOWN_FUNNEL_LOW_PRECISION_PURCHASE, REFERRAL_SENDER_INVITES_SENT, REFERRAL_SENDER_MESSAGE_SENT, REFERRAL_RECEIVER_IMPRESSION, REFERRAL_RECEIVER_CLICK, VIDEO_HOME_SELECTED, VIDEO_HOME_WATCHLIST, VIDEO_HOME_EXPLORE, VIDEO_HOME_PLAYER_START, VIDEO_HOME_90_SECOND_VIEW, FUNDRAISER_CREATE, MESSENGER_CONNECTED_CALL, MESSENGER_MISSED_CALL, D2_RETENTION, D7_RETENTION, MOVIE_SHOWTIME_CLICK, LISTING_INTERACTION, PDP_VIEW, CLICK_TO_CALL, CLICK_TO_WEBSITE, POST_SAVE, POST_SHARE, MEANINGFUL_LISTING_INTERACTION, MARKETPLACE_MLI6, MARKETPLACE_MLI9, MARKETPLACE_MARK_AS_SOLD, ONE_PD_LPV, CLICK_TO_JOIN_NEW_CHANNEL_MEMBER, OTHER}* | custom_event_type<br> |
| `destination_type`<br><br>*enum {WEBSITE, APP, MESSENGER, APPLINKS_AUTOMATIC, WHATSAPP, INSTAGRAM_DIRECT, FACEBOOK, MESSAGING_MESSENGER_WHATSAPP, MESSAGING_INSTAGRAM_DIRECT_MESSENGER, MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP, MESSAGING_INSTAGRAM_DIRECT_WHATSAPP, SHOP_AUTOMATIC, ON_AD, ON_POST, ON_EVENT, ON_VIDEO, ON_PAGE, INSTAGRAM_PROFILE, FACEBOOK_PAGE, INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE, INSTAGRAM_LIVE, FACEBOOK_LIVE, IMAGINE}* | destination_type<br> |
| `objective`<br><br>*enum{APP_INSTALLS, BRAND_AWARENESS, CONVERSIONS, EVENT_RESPONSES, LEAD_GENERATION, LINK_CLICKS, LOCAL_AWARENESS, MESSAGES, OFFER_CLAIMS, OUTCOME_APP_PROMOTION, OUTCOME_AWARENESS, OUTCOME_ENGAGEMENT, OUTCOME_LEADS, OUTCOME_SALES, OUTCOME_TRAFFIC, PAGE_LIKES, POST_ENGAGEMENT, PRODUCT_CATALOG_SALES, REACH, STORE_VISITS, VIDEO_VIEWS}* | objective<br> |
| `optimization_goal`<br><br>*enum{NONE, APP_INSTALLS, AD_RECALL_LIFT, ENGAGED_USERS, EVENT_RESPONSES, IMPRESSIONS, LEAD_GENERATION, QUALITY_LEAD, LINK_CLICKS, OFFSITE_CONVERSIONS, PAGE_LIKES, POST_ENGAGEMENT, QUALITY_CALL, REACH, LANDING_PAGE_VIEWS, VISIT_INSTAGRAM_PROFILE, ENGAGED_PAGE_VIEWS, VALUE, THRUPLAY, DERIVED_EVENTS, APP_INSTALLS_AND_OFFSITE_CONVERSIONS, CONVERSATIONS, IN_APP_VALUE, MESSAGING_PURCHASE_CONVERSION, MESSAGING_DEEP_CONVERSATION_AND_FOLLOW, SUBSCRIBERS, REMINDERS_SET, MEANINGFUL_CALL_ATTEMPT, PROFILE_VISIT, PROFILE_AND_PAGE_ENGAGEMENT, ADVERTISER_SILOED_VALUE, AUTOMATIC_OBJECTIVE, MESSAGING_APPOINTMENT_CONVERSION}* | optimization_goal<br> |
| `pixel_id`<br><br>*numeric string* | pixel_id<br> |
| `product_set_id`<br><br>*numeric string* | product_set_id<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdAccountSmartSuggestedAds nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/start_your_day_widgets.md -->

## Ad Account Start Your Day Widgets

### Reading

AdAccountStartYourDayWidgets

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/start_your_day_widgets HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/start_your_day_widgets',
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
    "/{ad-account-id}/start_your_day_widgets",
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
    "/{ad-account-id}/start_your_day_widgets",
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
                               initWithGraphPath:@"/{ad-account-id}/start_your_day_widgets"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fstart_your_day_widgets&version=v25.0)

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

A list of AdsStartYourDayWidget nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/subscribed_apps.md -->

## Ad Account Subscribed Apps

### Reading

Get list of apps subscribed to the ad account

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/subscribed_apps HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/subscribed_apps',
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
    "/{ad-account-id}/subscribed_apps",
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
    "/{ad-account-id}/subscribed_apps",
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
                               initWithGraphPath:@"/{ad-account-id}/subscribed_apps"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fsubscribed_apps&version=v25.0)

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

A list of AdAccountSubscribedApps nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |

### Creating

You can't perform this operation on this endpoint.

### Updating

#### /act_{ad_account_id}/subscribed_apps
You can update an [Application](https://developers.facebook.com/docs/graph-api/reference/application) by making a POST request to [/act_{ad_account_id}/subscribed_apps](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/subscribed_apps).

##### Parameters

| Parameter | Description |
| --- | --- |
| `app_id`<br><br>*string* | the id of app to be subscribed from ad account<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *id* in the return type.

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

### Deleting

#### /act_{ad_account_id}/subscribed_apps
You can dissociate an [Application](https://developers.facebook.com/docs/graph-api/reference/application) from an [AdAccount](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account) by making a DELETE request to [/act_{ad_account_id}/subscribed_apps](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/subscribed_apps).

##### Parameters

| Parameter | Description |
| --- | --- |
| `app_id`<br><br>*string* | the id of app to be unsubscribed from ad account<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/suggested_ads.md -->

## Ad Account Suggested Ads

### Reading

AdAccountSuggestedAds

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/suggested_ads HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/suggested_ads',
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
    "/{ad-account-id}/suggested_ads",
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
    "/{ad-account-id}/suggested_ads",
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
                               initWithGraphPath:@"/{ad-account-id}/suggested_ads"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fsuggested_ads&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `application_id`<br><br>*numeric string* | application_id<br> |
| `cms_id`<br><br>*numeric string* | cms_id<br> |
| `countries`<br><br>*array<string>* | countries<br> |
| `limit`<br><br>*int64* | **Default value: **`20`<br>limit<br> |
| `objective`<br><br>*string* | objective<br> |
| `optimization_event`<br><br>*enum {JOB_ALERT_SUBSCRIBE, JOB_APPLICATION_CREATE, JOB_APPLICATION_FORM_IMPRESSION, JOB_BROWSER_IMPRESSION, JOB_OPENING_DETAIL_VIEW_IMPRESSION, ACTIVATE_APP, COMPLETE_REGISTRATION, CONTENT_VIEW, ONSITE_APP_CONTENT_VIEW, ONSITE_WEB_CONTENT_VIEW, ONSITE_WEB_APP_CONTENT_VIEW, SEARCH, RATE, TUTORIAL_COMPLETION, CONTACT, CUSTOMIZE_PRODUCT, DONATE, FIND_LOCATION, SCHEDULE, START_TRIAL, SUBMIT_APPLICATION, SUBSCRIBE, RECURRING_SUBSCRIPTION_PAYMENT, CANCEL_SUBSCRIPTION, VISIT_LOCATION, AD_CLICK, AD_IMPRESSION, UPDATE_PLTV, APPEND_VALUE, ADD_TO_CART, ONSITE_APP_ADD_TO_CART, ONSITE_WEB_ADD_TO_CART, ONSITE_WEB_APP_ADD_TO_CART, ADD_TO_WISHLIST, INITIATED_CHECKOUT, ADD_PAYMENT_INFO, PURCHASE, APPEND_CLICK_ATTRIBUTION, ONSITE_APP_PURCHASE, ONSITE_WEB_PURCHASE, ONSITE_WEB_APP_PURCHASE, MESSAGE_TO_BUY, LEAD, LEAD_CUSTOM_EVENT, LEAD_SUBMITTED, ONSITE_WEB_LEAD, PDP_CLICK_TO_OFFSITE, PDP_CLICK_VIEW_IN_CART, PDP_CLICK_TO_CHECKOUT, ORDER_CREATION, CART_IMPRESSION, SHOP_MID_FUNNEL, LEVEL_ACHIEVED, ACHIEVEMENT_UNLOCKED, SPENT_CREDITS, FLOW_COMPLETE, SERVICE_BOOKING_REQUEST, INSTAGRAM_PROFILE_FOLLOW, INSTAGRAM_PROFILE_VIEW, PROFILE_FOLLOW, PROFILE_VIEW, INSTAGRAM_AD_FOLLOW, INSTAGRAM_AD_FOLLOW_QUALITY_SCORE, INSTAGRAM_FOLLOW_QUALITY_SCORE, PROFILE_FOLLOW_QUALITY_SCORE, INSTAGRAM_LEAD_GEN_LAW, UPCOMING_EVENT_REMINDER_SET, UPCOMING_EVENT_REMINDER_UNSET, UPCOMING_EVENT_NOTIFICATION_CLICK, UPCOMING_EVENT_POST_NOTIFICATION_LINK_CLICK, UPCOMING_EVENT_POST_NOTIFICATION_UAS_TAP, IG_RECONSIDERATION_ENTRY_POINT_CLICK, MESSAGING_ACCEPT, MESSAGING_BLOCK, MESSAGING_DELETE_THREAD, MESSAGING_FRX_FEEDBACK, MESSAGING_SCAM_PROACTIVE_WARNING_LEARN_MORE, MESSAGING_SCAM_PROACTIVE_WARNING_LEARN_MORE_EXPERIMENTAL, MESSAGING_IN_THREAD_FEEDBACK_SATISFIED, MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED, MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED_CONFUSING_PROCESS, MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED_NOT_HELPFUL, MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED_SLOW_RESPONSES, MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED_SUSPICIOUS_BEHAVIOR, MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED_TOO_MANY_MESSAGES, MESSAGING_IN_THREAD_FEEDBACK_DISSATISFIED_OTHER, MESSAGING_IN_THREAD_DXMA_FEEDBACK_SATISFIED, MESSAGING_IN_THREAD_DXMA_FEEDBACK_DISSATISFIED, MESSAGING_MSGR_BUYER_SATISFIED_WITH_PURCHASE, MESSAGING_MSGR_BUYER_DISSATISFIED_WITH_PURCHASE, MESSAGING_IG_BUYER_SATISFIED_WITH_CONVERSATION, MESSAGING_IG_BUYER_DISSATISFIED_WITH_CONVERSATION, MESSAGING_CONVERSATION_SELLER_FEEDBACK_SATISFIED, MESSAGING_CONVERSATION_SELLER_FEEDBACK_DISSATISFIED, MESSAGING_CONVERSATION_SELLER_FEEDBACK_BAN, MESSAGING_CONVERSATION_SELLER_FEEDBACK_REPORT_SPAM, MESSAGING_MARK_SPAM, MESSAGING_REPLY, MESSAGING_FIRST_REPLY, MESSAGING_FIRST_REPLY_CONTINUATION, MESSAGING_OPEN_THREAD, MESSAGING_IGNORE_REQUEST, MESSAGING_PROMOTIONAL_OFF, MESSAGING_READ_RECEIPT, MESSAGING_DELIVERY_RECEIPT, MESSAGING_DELETE_MESSAGE, MESSAGING_CONVERSATION_STARTED_7D, MESSAGING_DEEP_CONVERSATION, MESSAGING_DEEP_CONVERSATION_SHADOW, MESSAGING_DEDUP_DEEP_CONVERSATION, MESSAGING_SYNTHETIC_DEEP_CONVERSATION, MESSAGING_AUTOMATED_FLOW_COMPLETE, MESSAGING_AUTOMATED_FLOW_CANCELLED, MESSENGER_RECEIPT_TEMPLATE, MESSAGING_PAGE_SEND, MESSAGING_PAGE_SEND_AFTER_USER_SEND, MESSAGING_USER_DEPTH_2_MESSAGE_SEND, MESSAGING_USER_DEPTH_2_MESSAGE_SEND_CONTINUATION, MESSAGING_USER_DEPTH_3_MESSAGE_SEND, MESSAGING_USER_DEPTH_3_MESSAGE_SEND_CONTINUATION, MESSAGING_USER_DEPTH_5_MESSAGE_SEND, MESSAGING_PAGE_DEPTH_2_MESSAGE_SEND, MESSAGING_PAGE_DEPTH_2_MESSAGE_SEND_CONTINUATION, MESSAGING_CONVERSATION_DEPTH, MESSAGING_CONVERSATION_DEPTH_NEW_WHATSAPP_SCHEMA, MESSAGING_QUALIFIED_LEAD, MESSAGING_APPOINTMENT_BOOKED, MESSAGING_PAGE_SEND_NUM_SAME_CONVERSATION, MESSAGING_USER_SEND_NUM_SAME_CONVERSATION, MESSAGING_BUSINESS_CALLING_OPT_IN_SENT, MESSAGING_BUSINESS_CALLING_OPT_IN_ACCEPTED, MESSAGING_BUSINESS_CALLING_OPT_IN_DENIED, MESSAGING_BUSINESS_CALLING_CALL_INITIATED, MESSAGING_BUSINESS_CALLING_CALL_ANSWERED, MESSAGING_BUSINESS_CALLING_CALL_MISSED, MESSAGING_BUSINESS_CALLING_CALL_DENIED, MESSAGING_BUSINESS_LLAMA_CONVERSION_POSITIVE, MESSAGING_BUSINESS_LLAMA_CONVERSION_NEGATIVE, MESSAGING_FIRST_BIZ_REPLY, MESSAGING_FIRST_BIZ_REPLY_CONTINUATION, MESSAGING_FIRST_CALL, MESSAGING_FIRST_LONG_CALL, MESSAGING_USER_PHONE_CALL_DIALOG_CONFIRM_CLICKED, MESSAGING_USER_CALL_ATTEMPTED, MESSAGING_PAGE_CALL_ATTEMPTED, MESSAGING_CONNECTED_CALL_OR_DC, MESSAGING_CALL_ATTEMPT_AND_DC, MESSAGING_CALL_ATTEMPT_AND_PAGE_INTERACTION, MESSAGING_MISSED_CALL, MESSAGING_USER_SUBSCRIBED, MESSAGING_CONVERSATION_ENGAGED, MESSAGING_WELCOME_MESSAGE_VIEW, MESSAGING_CONVERSATION_REPLIED_7D, TOTAL_MESSAGING_CONNECTION, DOWN_FUNNEL_PURCHASE, MESSAGING_DOWN_FUNNEL_PURCHASE, MESSAGING_DOWN_FUNNEL_PURCHASE_VALUE, MESSAGING_EVENT_OPTIMIZATION_LEAD, MESSAGING_SHALLOW_LEAD, MESSAGING_DOWN_FUNNEL_LOW_PRECISION_PURCHASE, REFERRAL_SENDER_INVITES_SENT, REFERRAL_SENDER_MESSAGE_SENT, REFERRAL_RECEIVER_IMPRESSION, REFERRAL_RECEIVER_CLICK, VIDEO_HOME_SELECTED, VIDEO_HOME_WATCHLIST, VIDEO_HOME_EXPLORE, VIDEO_HOME_PLAYER_START, VIDEO_HOME_90_SECOND_VIEW, FUNDRAISER_CREATE, MESSENGER_CONNECTED_CALL, MESSENGER_MISSED_CALL, D2_RETENTION, D7_RETENTION, MOVIE_SHOWTIME_CLICK, LISTING_INTERACTION, PDP_VIEW, CLICK_TO_CALL, CLICK_TO_WEBSITE, POST_SAVE, POST_SHARE, MEANINGFUL_LISTING_INTERACTION, MARKETPLACE_MLI6, MARKETPLACE_MLI9, MARKETPLACE_MARK_AS_SOLD, ONE_PD_LPV, CLICK_TO_JOIN_NEW_CHANNEL_MEMBER, OTHER}* | optimization_event<br> |
| `optimization_goal`<br><br>*enum{NONE, APP_INSTALLS, AD_RECALL_LIFT, ENGAGED_USERS, EVENT_RESPONSES, IMPRESSIONS, LEAD_GENERATION, QUALITY_LEAD, LINK_CLICKS, OFFSITE_CONVERSIONS, PAGE_LIKES, POST_ENGAGEMENT, QUALITY_CALL, REACH, LANDING_PAGE_VIEWS, VISIT_INSTAGRAM_PROFILE, ENGAGED_PAGE_VIEWS, VALUE, THRUPLAY, DERIVED_EVENTS, APP_INSTALLS_AND_OFFSITE_CONVERSIONS, CONVERSATIONS, IN_APP_VALUE, MESSAGING_PURCHASE_CONVERSION, MESSAGING_DEEP_CONVERSATION_AND_FOLLOW, SUBSCRIBERS, REMINDERS_SET, MEANINGFUL_CALL_ATTEMPT, PROFILE_VISIT, PROFILE_AND_PAGE_ENGAGEMENT, ADVERTISER_SILOED_VALUE, AUTOMATIC_OBJECTIVE, MESSAGING_APPOINTMENT_CONVERSION}* | optimization_goal<br> |
| `pixel_id`<br><br>*numeric string* | pixel_id<br> |
| `promoted_object_page_id`<br><br>*numeric string* | promoted_object_page_id<br> |
| `promoted_object_product_set_id`<br><br>*numeric string* | promoted_object_product_set_id<br> |
| `rank_by`<br><br>*string* | **Default value: **`"ads_revenue"`<br>rank_by<br> |
| `use_case`<br><br>*enum {AD_STRATEGIES, AUTOMATED_APP_ADS, AUTOMATED_SHOPPING_ADS, AUTOMATED_SHOPPING_ADS_MDSA, LEAD_GEN_ASC_ADS, MANUAL_FLOW_APP_ADS, MANUAL_FLOW_SHOPS_ADS, MANUAL_FLOW_WEBSITE_ADS, MANUAL_FLOW_WEBSITE_AND_APP_ADS, SALES_WEB_APP_ADS}* | **Default value: **`"AUTOMATED_SHOPPING_ADS"`<br>use_case<br> |

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
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/targetingbrowse.md -->

## Ad Account Targetingbrowse

### Reading

Unified browse tree as a flat list. Use parent key to recreate the tree.

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/targetingbrowse HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/targetingbrowse',
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
    "/{ad-account-id}/targetingbrowse",
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
    "/{ad-account-id}/targetingbrowse",
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
                               initWithGraphPath:@"/{ad-account-id}/targetingbrowse"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Ftargetingbrowse&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `include_nodes`<br><br>*boolean* | Include searchable nodes, for example, work/edu entries. This parameter is set as false by default. Also it is for internal use only<br> |
| `limit_type`<br><br>*enum {interests, education_schools, education_majors, work_positions, work_employers, relationship_statuses, interested_in, user_adclusters, college_years, education_statuses, family_statuses, industries, life_events, politics, behaviors, income, net_worth, home_type, home_ownership, home_value, ethnic_affinity, generation, household_composition, moms, office_type, location_categories}* | Limit the type of audience to retrieve<br> |
| `regulated_categories`<br><br>*array<enum {NONE, EMPLOYMENT, HOUSING, CREDIT, ISSUES_ELECTIONS_POLITICS, ONLINE_GAMBLING_AND_GAMING, FINANCIAL_PRODUCTS_SERVICES}>* | The regulated categories of the campaign<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdAccountTargetingUnified nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 190 | Invalid OAuth 2.0 Access Token |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/targetingsearch.md -->

## Ad Account Targetingsearch

### Reading

Unified search endpoint to get targeting descriptors with query

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/targetingsearch HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/targetingsearch',
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
    "/{ad-account-id}/targetingsearch",
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
    "/{ad-account-id}/targetingsearch",
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
                               initWithGraphPath:@"/{ad-account-id}/targetingsearch"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Ftargetingsearch&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `allow_only_fat_head_interests`<br><br>*boolean* | Allow only pre vetted interests<br> |
| `app_store`<br><br>*enum {all_app_stores_for_android_and_ios, amazon_app_store, google_play, itunes, itunes_ipad, fb_canvas, fb_gameroom, windows_store, fb_android_store, windows_10_store, roku_channel_store, instant_game, oculus_app_store, horizon_world, galaxy_store, neon_android_store, digital_turbine_store, apk_pure, apk_monk, apk_mirror, xiaomi, oppo, vivo, bemobi_mobile_store, aptoide_a1_store, uptodown, does_not_exist, none}* | The app store for which this ad is being promoted. This is typically only for app install campaign objectives.<br> |
| `limit_type`<br><br>*enum {adgroup_id, genders, age_min, age_max, age_range, country_groups, countries, country, cities, city_keys, radius, regions, region_keys, zips, interests, location_cluster_ids, keywords, education_schools, education_majors, work_positions, work_employers, relationship_statuses, interested_in, locales, user_adclusters, excluded_user_adclusters, conjunctive_user_adclusters, custom_audiences, excluded_custom_audiences, cafe_ca_expansion_targeting_signal, cafe_ca_contraction_targeting_signal, expanded_implicit_custom_audiences, tafe_ca_mitigation_strategy, college_years, education_statuses, connections, excluded_connections, friends_of_connections, user_event, dynamic_audience_ids, excluded_dynamic_audience_ids, rtb_flag, site_category, geo_locations, excluded_geo_locations, timezones, place_page_set_ids, location_expansion, page_types, publisher_platforms, effective_publisher_platforms, facebook_positions, effective_facebook_positions, instagram_positions, effective_instagram_positions, messenger_positions, effective_messenger_positions, device_platforms, effective_device_platforms, audience_network_positions, effective_audience_network_positions, whatsapp_positions, effective_whatsapp_positions, oculus_positions, effective_oculus_positions, threads_positions, effective_threads_positions, excluded_publisher_categories, excluded_publisher_list_ids, user_device, mobile_device_model, excluded_user_device, excluded_mobile_device_model, user_os, wireless_carrier, marketing_message_channels, subscriber_universe, user_age_unknown, audience_concepts, family_statuses, industries, life_events, political_views, politics, behaviors, income, net_worth, home_type, home_ownership, home_value, ethnic_affinity, generation, household_composition, moms, office_type, household_income, targeting_optimization, direct_install_devices, targeting_automation, targeting_relaxation_types, engagement_specs, excluded_engagement_specs, product_audience_specs, excluded_product_audience_specs, exclusions, flexible_spec, dt_consolidation_state, exclude_reached_since, exclude_previous_days, app_install_state, install_state_application, fb_deal_id, interest_defaults_source, alternate_auto_targeting_option, contextual_targeting_categories, topic, format, trending, gatekeepers, follow_profiles, follow_profiles_negative, location_categories, user_page_threads, user_page_threads_excluded, is_whatsapp_destination_ad, marketplace_product_categories, instream_video_sponsorship_placements, prospecting_audience, brand_safety_content_severity_levels, catalog_based_targeting, brand_safety_content_filter_levels, excluded_brand_safety_content_types, id, is_instagram_destination_ad, hashtag_interactions, instagram_hashtags, instream_video_skippable_excluded, effective_brand_safety_content_filter_levels}* | Limit the type of audience to retrieve<br> |
| `objective`<br><br>*enum{APP_INSTALLS, BRAND_AWARENESS, CONVERSIONS, EVENT_RESPONSES, LEAD_GENERATION, LINK_CLICKS, LOCAL_AWARENESS, MESSAGES, OFFER_CLAIMS, OUTCOME_APP_PROMOTION, OUTCOME_AWARENESS, OUTCOME_ENGAGEMENT, OUTCOME_LEADS, OUTCOME_SALES, OUTCOME_TRAFFIC, PAGE_LIKES, POST_ENGAGEMENT, PRODUCT_CATALOG_SALES, REACH, STORE_VISITS, VIDEO_VIEWS}* | The objective of the ad campaign.<br> |
| `q`<br><br>*string* | Search query<br><br>**[required]**<br> |
| `regulated_categories`<br><br>*array<enum {NONE, EMPLOYMENT, HOUSING, CREDIT, ISSUES_ELECTIONS_POLITICS, ONLINE_GAMBLING_AND_GAMING, FINANCIAL_PRODUCTS_SERVICES}>* | The regulated categories of the campaign.<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdAccountTargetingUnified nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/targetingsuggestions.md -->

## Ad Account Targetingsuggestions

### Reading

Retrieve suggestions for given targeting specs.

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/targetingsuggestions HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/targetingsuggestions',
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
    "/{ad-account-id}/targetingsuggestions",
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
    "/{ad-account-id}/targetingsuggestions",
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
                               initWithGraphPath:@"/{ad-account-id}/targetingsuggestions"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Ftargetingsuggestions&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `app_store`<br><br>*enum {all_app_stores_for_android_and_ios, amazon_app_store, google_play, itunes, itunes_ipad, fb_canvas, fb_gameroom, windows_store, fb_android_store, windows_10_store, roku_channel_store, instant_game, oculus_app_store, horizon_world, galaxy_store, neon_android_store, digital_turbine_store, apk_pure, apk_monk, apk_mirror, xiaomi, oppo, vivo, bemobi_mobile_store, aptoide_a1_store, uptodown, does_not_exist, none}* | The app store for which this ad is being promoted. This is typically only for app install campaign objectives.<br> |
| `limit_type`<br><br>*enum {interests, user_adclusters, behaviors, family_statuses, home_value, income, industries, life_events, interested_in, relationship_statuses, education_statuses, college_years, work_employers, work_positions, education_majors, education_schools, location_categories}* | Used to limit the type of audience to be retrieved.<br> |
| `regulated_categories`<br><br>*array<enum {NONE, EMPLOYMENT, HOUSING, CREDIT, ISSUES_ELECTIONS_POLITICS, ONLINE_GAMBLING_AND_GAMING, FINANCIAL_PRODUCTS_SERVICES}>* | The regulated categories of the campaign<br> |
| `targeting_list`<br><br>*list<JSON or object-like arrays>* | List of targeting specs. Example: [{"type":"interests", "id":1}, {"type":"interests", "id":2}, {"type":"behaviors", "id":3}]<br><br><br>`type` *enum {interests, user_adclusters, behaviors, family_statuses, home_value, income, industries, life_events, interested_in, relationship_statuses, education_statuses, college_years, work_employers, work_positions, education_majors, education_schools, location_categories}*<br><br>`id` *int64* |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdAccountTargetingUnified nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 190 | Invalid OAuth 2.0 Access Token |
| 200 | Permissions error |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/targetingvalidation.md -->

## Ad Account Targetingvalidation

### Reading

Query the ads framework for validation

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/targetingvalidation HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/targetingvalidation',
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
    "/{ad-account-id}/targetingvalidation",
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
    "/{ad-account-id}/targetingvalidation",
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
                               initWithGraphPath:@"/{ad-account-id}/targetingvalidation"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Ftargetingvalidation&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `id_list`<br><br>*list<int64>* | List of IDs to validate. Supports interest and categories.<br> |
| `is_exclusion`<br><br>*boolean* | **Default value: **`false`<br>Whether the targeting IDs can be used in exclusion.<br> |
| `name_list`<br><br>*list<string>* | List of names to validate. Supports interest and categories.<br> |
| `targeting_list`<br><br>*list<JSON or object-like arrays>* | List with targeting type and ID pairs<br><br><br>`type` *enum {interests, education_statuses, education_schools, education_majors, work_positions, work_employers, interested_in, relationship_statuses, college_years, family_statuses, industries, life_events, political_views, politics, behaviors, income, net_worth, home_type, home_ownership, home_value, ethnic_affinity, generation, household_composition, moms, office_type, user_adclusters}*<br><br>`id` *int64* |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdAccountTargetingUnified nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/tax_info.md -->

## Ad Account Tax Info

### Reading

You can't perform this operation on this endpoint.

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/tracking.md -->

## Ad Account Tracking

### Reading

AdAccountTracking

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/tracking HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/tracking',
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
    "/{ad-account-id}/tracking",
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
    "/{ad-account-id}/tracking",
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
                               initWithGraphPath:@"/{ad-account-id}/tracking"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Ftracking&version=v25.0)

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

A list of AdAccountTrackingData nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |
| 200 | Permissions error |

### Creating

#### /act_{ad_account_id}/tracking
You can make a POST request to *tracking* edge from the following paths:

- [/act_{ad_account_id}/tracking](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/tracking)

When posting to this edge, no Graph object will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `tracking_specs`<br><br>*Object* | Tracking specs to add to the account level<br><br>**[required]**<br> |

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

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/urls_for_asset_extraction.md -->

## Ad Account Urls For Asset Extraction

### Reading

Get the URLs for this ad account that should be either suggested to the user or used for text/image/video asset auto extraction.

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/urls_for_asset_extraction HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/urls_for_asset_extraction',
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
    "/{ad-account-id}/urls_for_asset_extraction",
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
    "/{ad-account-id}/urls_for_asset_extraction",
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
                               initWithGraphPath:@"/{ad-account-id}/urls_for_asset_extraction"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Furls_for_asset_extraction&version=v25.0)

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

A list of AdAccountURLForAssetExtraction nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/users.md -->

## Ad Account Users

### Reading

Ad Users on an Ad Account

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/users HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/users',
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
    "/{ad-account-id}/users",
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
    "/{ad-account-id}/users",
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
                               initWithGraphPath:@"/{ad-account-id}/users"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fusers&version=v25.0)

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

A list of [AdAccountUser](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account-user) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |
| 100 | Invalid parameter |

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/website_creative_assets.md -->

## Ad Account Website Creative Assets

### Reading

Auto-extracted creative assets for a given ad account

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/website_creative_assets HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/website_creative_assets',
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
    "/{ad-account-id}/website_creative_assets",
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
    "/{ad-account-id}/website_creative_assets",
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
                               initWithGraphPath:@"/{ad-account-id}/website_creative_assets"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fwebsite_creative_assets&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `link_url`<br><br>*URI* | Link URL from which creative assets are auto-extracted.<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of WebsiteCreativeAssetSuggestions nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/website_creative_info.md -->

## Ad Account Website Creative Info

### Reading

Get all website creative information for this ad account

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/website_creative_info HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/website_creative_info',
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
    "/{ad-account-id}/website_creative_info",
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
    "/{ad-account-id}/website_creative_info",
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
                               initWithGraphPath:@"/{ad-account-id}/website_creative_info"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fwebsite_creative_info&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `link_url`<br><br>*URI* | This is the website creative information's input URL<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of WebsiteCreativeInfo nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-account/youth_ads_advertiser.md -->

## Ad Account Youth Ads Advertiser

### Reading

AdAccountYouthAdsAdvertiser

##### Example

#### HTTP
```
GET /v25.0/{ad-account-id}/youth_ads_advertiser HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-account-id}/youth_ads_advertiser',
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
    "/{ad-account-id}/youth_ads_advertiser",
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
    "/{ad-account-id}/youth_ads_advertiser",
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
                               initWithGraphPath:@"/{ad-account-id}/youth_ads_advertiser"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-account-id%7D%2Fyouth_ads_advertiser&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `objective`<br><br>*enum {OFFER_CLAIMS, PAGE_LIKES, EVENT_RESPONSES, POST_ENGAGEMENT, WEBSITE_CONVERSIONS, LINK_CLICKS, VIDEO_VIEWS, LOCAL_AWARENESS, PRODUCT_CATALOG_SALES, LEAD_GENERATION, BRAND_AWARENESS, STORE_VISITS, REACH, APP_INSTALLS, MESSAGES, OUTCOME_AWARENESS, OUTCOME_ENGAGEMENT, OUTCOME_LEADS, OUTCOME_SALES, OUTCOME_TRAFFIC, OUTCOME_APP_PROMOTION}* | objective<br><br>**[required]**<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdAccountYouthAdsAdvertiser nodes.

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
