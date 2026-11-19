# Business

> Source: Meta Marketing API reference (118 pages). Fetched 2026-11-18.


---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business.md -->

## Business

Represent a specific business on Facebook. Make the API call to the business ID.

To find the ID of a business, go to [**Business Manager**](https://business.facebook.com/) > **Business Settings** > **Business Info**. There, you will see information about the business, including the ID.  

### Reading

Represents a business on Facebook. Includes any specified properties and assets belonging to the business.

##### Example

#### HTTP
```
GET /v25.0/{business-id} HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}',
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
    "/{business-id}",
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
    "/{business-id}",
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
                               initWithGraphPath:@"/{business-id}"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

This endpoint doesn't have any parameters.

##### Fields

| Field | Description |
| --- | --- |
| `id`<br><br>*numeric string* | The business account ID.<br><br><br>**[default]**<br> |
| `block_offline_analytics`<br><br>*bool* | Specifies whether offline analytics for business is blocked.<br> |
| `collaborative_ads_managed_partner_business_info`<br><br>*[ManagedPartnerBusiness](https://developers.facebook.com/docs/graph-api/reference/managed-partner-business)* | collaborative_ads_managed_partner_business_info<br> |
| `collaborative_ads_managed_partner_eligibility`<br><br>*BusinessManagedPartnerEligibility* | collaborative_ads_managed_partner_eligibility<br> |
| `created_by`<br><br>*BusinessUser\|SystemUser* | The creator of this business.<br> |
| `created_time`<br><br>*datetime* | The creation time of this business.<br> |
| `extended_updated_time`<br><br>*datetime* | The update time of the extended credits for this business.<br> |
| `is_hidden`<br><br>*bool* | If `true`, indicates the business is hidden.<br> |
| `link`<br><br>*string* | URI for business profile page.<br> |
| `marketing_messages_onboarding_status`<br><br>*MarketingMessagesOnboardingStatus* | marketing_messages_onboarding_status<br> |
| `name`<br><br>*string* | The name of the business.<br><br><br>**[default]**<br> |
| `payment_account_id`<br><br>*numeric string* | The ID for the payment account of this business.<br> |
| `primary_page`<br><br>*[Page](https://developers.facebook.com/docs/graph-api/reference/page)* | The primary Facebook Page for this business.<br> |
| `profile_picture_uri`<br><br>*string* | The profile picture URI of the business.<br> |
| `timezone_id`<br><br>*unsigned int32* | This business's timezone.<br> |
| `two_factor_type`<br><br>*enum* | The two factor type authentication used for this business.<br> |
| `updated_by`<br><br>*BusinessUser\|SystemUser* | The person's name who last updated this business.<br> |
| `updated_time`<br><br>*datetime* | The time when this business was last updated.<br> |
| `verification_status`<br><br>*enum {expired, failed, ineligible, not_verified, pending, pending_need_more_info, pending_submission, rejected, revoked, verified}* | Verification status for this business.<br> |
| `vertical`<br><br>*string* | The vertical industry that this business associates with, or belongs to.<br> |
| `vertical_id`<br><br>*unsigned int32* | The ID for the vertical industry.<br> |
| `whatsapp_business_manager_messaging_limit`<br><br>*enum {TIER_100K, TIER_10K, TIER_250, TIER_2K, TIER_UNLIMITED, UNTIERED}* | Maximum number of unique WhatsApp user phone numbers that your Business Manager account can message, outside of a customer service window, within a moving 24-hour period. This limit is shared across all WhatsApp phone numbers owned by your business.<br> |

##### Edges

| Edge | Description |
| --- | --- |
| [`ad_studies`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/ad_studies)<br><br>*Edge<AdStudy>* | The studies this business has access to, such as any advertising lift studies or split testing studies.<br> |
| [`adnetworkanalytics_results`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/adnetworkanalytics_results)<br><br>*Edge<AdNetworkAnalyticsAsyncQueryResult>* | Obtain the results of an asynchronous Audience Network query for this publisher entity.<br> |
| [`ads_reporting_mmm_reports`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/ads_reporting_mmm_reports)<br><br>*Edge<AdsReportBuilderMMMReport>* | Marketing mix modeling (MMM) reports generated for this business<br> |
| [`ads_reporting_mmm_schedulers`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/ads_reporting_mmm_schedulers)<br><br>*Edge<AdsReportBuilderMMMReportScheduler>* | Marketing mix modeling (MMM) reports schedulers for this business<br> |
| [`adspixels`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/adspixels)<br><br>*Edge<AdsPixel>* | The business has access to these pixels.<br> |
| [`agencies`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/agencies)<br><br>*Edge<Business>* | Agencies associated with this business.<br> |
| [`an_placements`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/an_placements)<br><br>*Edge<AdPlacement>* | Placements used by this Audience Network business.<br> |
| [`business_asset_groups`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/business_asset_groups)<br><br>*Edge<BusinessAssetGroup>* | Business asset groups owned by this business. The business can grant permissions to assets in this group.<br> |
| [`business_invoices`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/business_invoices)<br><br>*Edge<OmegaCustomerTrx>* | The extended credit invoices of this business.<br> |
| [`business_users`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/business_users)<br><br>*Edge<BusinessUser>* | Business users associated with this business. Includes employees and admins at the business.<br> |
| [`client_apps`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/client_apps)<br><br>*Edge<Application>* | This business has access to these client apps.<br> |
| [`client_instagram_assets`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/client_instagram_assets)<br><br>*Edge<InstagramBusinessAsset>* | This business has access to these client Instagram assets.<br> |
| [`client_offsite_signal_container_business_objects`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/client_offsite_signal_container_business_objects)<br><br>*Edge<OffsiteSignalContainerBusinessObject>* | The business has access to these client offsite signal container business objects<br> |
| [`client_pages`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/client_pages)<br><br>*Edge<Page>* | This business has access to these client pages.<br> |
| [`client_pixels`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/client_pixels)<br><br>*Edge<AdsPixel>* | This business has access to these client pixels.<br> |
| [`client_product_catalogs`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/client_product_catalogs)<br><br>*Edge<ProductCatalog>* | This business has access to these client product catalogs.<br> |
| [`client_whatsapp_business_accounts`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/client_whatsapp_business_accounts)<br><br>*Edge<WhatsAppBusinessAccount>* | WhatsApp business accounts that were shared to this business.<br> |
| [`clients`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/clients)<br><br>*Edge<Business>* | Clients of this business.<br> |
| [`collaborative_ads_collaboration_requests`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/collaborative_ads_collaboration_requests)<br><br>*Edge<CPASCollaborationRequest>* | All [Collaborative Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads#collaborative-ads). collaboration requests initiated by the business.<br> |
| [`collaborative_ads_suggested_partners`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/collaborative_ads_suggested_partners)<br><br>*Edge<CPASAdvertiserPartnershipRecommendation>* | [Collaborative Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads#collaborative-ads) suggested partners for a business.<br> |
| [`commerce_merchant_settings`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/commerce_merchant_settings)<br><br>*Edge<CommerceMerchantSettings>* | Commerce Merchant Settings belonging to this business.<br> |
| [`event_source_groups`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/event_source_groups)<br><br>*Edge<EventSourceGroup>* | The business owns these event source groups. Includes various signals sources such as pixels.<br> |
| [`extendedcredits`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/extendedcredits)<br><br>*Edge<ExtendedCredit>* | Extended credits for this business.<br> |
| [`initiated_audience_sharing_requests`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/initiated_audience_sharing_requests)<br><br>*Edge<BusinessAssetSharingAgreement>* | The audience sharing requests initiated by this business.<br> |
| [`instagram_accounts`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/instagram_accounts)<br><br>*Edge<ShadowIGUser>* | This business has access to these Instagram accounts.<br> |
| [`instagram_business_accounts`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/instagram_business_accounts)<br><br>*Edge<ShadowIGUser>* | Instagram accounts already converted into business accounts. These accounts have an associated business user.<br> |
| [`managed_partner_ads_funding_source_details`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/managed_partner_ads_funding_source_details)<br><br>*Edge<FundingSourceDetailsCoupon>* | managed_partner_ads_funding_source_details<br> |
| [`openbridge_configurations`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/openbridge_configurations)<br><br>*Edge<OpenBridgeConfiguration>* | Get all the openbridge configurations associated to this business<br> |
| [`owned_apps`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_apps)<br><br>*Edge<Application>* | This business owns these apps.<br> |
| [`owned_businesses`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_businesses)<br><br>*Edge<Business>* | This business aggregates and manages these client businesses.<br> |
| [`owned_instagram_accounts`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_instagram_accounts)<br><br>*Edge<ShadowIGUser>* | This business owns these Instagram accounts.<br> |
| [`owned_instagram_assets`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_instagram_assets)<br><br>*Edge<InstagramBusinessAsset>* | This business owns these Instagram Business Assets<br> |
| [`owned_offsite_signal_container_business_objects`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_offsite_signal_container_business_objects)<br><br>*Edge<OffsiteSignalContainerBusinessObject>* | owned_offsite_signal_container_business_objects<br> |
| [`owned_pages`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_pages)<br><br>*Edge<Page>* | This business owns these pages.<br> |
| [`owned_pixels`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_pixels)<br><br>*Edge<AdsPixel>* | This business owns these pixels.<br> |
| [`owned_product_catalogs`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_product_catalogs)<br><br>*Edge<ProductCatalog>* | This business owns these product catalogs.<br> |
| [`owned_whatsapp_business_accounts`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_whatsapp_business_accounts)<br><br>*Edge<WhatsAppBusinessAccount>* | This business owns these WhatsApp Business Accounts.<br> |
| [`pending_client_ad_accounts`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/pending_client_ad_accounts)<br><br>*Edge<BusinessAdAccountRequest>* | This business requested access to these client ad accounts and is pending approval.<br> |
| [`pending_client_apps`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/pending_client_apps)<br><br>*Edge<BusinessApplicationRequest>* | This business requested access to these client apps and is pending approval.<br> |
| [`pending_client_pages`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/pending_client_pages)<br><br>*Edge<BusinessPageRequest>* | This business requested access to these client pages and is pending approval.<br> |
| [`pending_owned_ad_accounts`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/pending_owned_ad_accounts)<br><br>*Edge<BusinessAdAccountRequest>* | This business requested ownership of these ad accounts and is pending approval.<br> |
| [`pending_owned_pages`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/pending_owned_pages)<br><br>*Edge<BusinessPageRequest>* | This business requested ownership of these pages and is pending approval.<br> |
| [`pending_shared_offsite_signal_container_business_objects`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/pending_shared_offsite_signal_container_business_objects)<br><br>*Edge<OffsiteSignalContainerBusinessObject>* | This business received sharing requests for these offsite signal container business objects and is pending for approval.<br> |
| [`pending_users`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/pending_users)<br><br>*Edge<BusinessRoleRequest>* | Admin for this business invited this user to the business. Pending user approval.<br> |
| [`preverified_numbers`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/preverified_numbers)<br><br>*Edge<WhatsAppBusinessPreVerifiedPhoneNumber>* | Edge to get list of all pre-created phone numbers for this business<br> |
| [`received_audience_sharing_requests`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/received_audience_sharing_requests)<br><br>*Edge<BusinessAssetSharingAgreement>* | The audience sharing requests received by this business.<br> |
| [`reseller_guidances`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/reseller_guidances)<br><br>*Edge<ResellerGuidance>* | Guidance for a China reseller business.<br> |
| [`self_certified_whatsapp_business_submissions`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/self_certified_whatsapp_business_submissions)<br><br>*Edge<WhatsAppBusinessPartnerClientVerificationSubmission>* | Business Service Providers can submit their client information for verification on WhatsApp Business Platform. This endpoint returns statuses, submitted info, and rejection reasons for the submissions.<br> |
| [`system_users`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/system_users)<br><br>*Edge<SystemUser>* | The business's system users.<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 104 | Incorrect signature |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |
| 200 | Permissions error |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 2500 | Error parsing graph query |
| 2616 | The reporting data you are trying to fetch has too many rows. Please pull data for shorter time periods or use filters to restrict the number of ad IDs |

### Creating

**Note:** To create other Business Managers, your business needs to obtain `BUSINESS_MANAGEMENT` during the [app review process](https://developers.facebook.com/docs/apps/review). If your app is in development mode, you can surpass this requirement, but to create only two child businesses.

#### /{user_id}/businesses
You can make a POST request to *businesses* edge from the following paths:

- [/{user_id}/businesses](https://developers.facebook.com/docs/graph-api/reference/user/businesses)

When posting to this edge, a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `child_business_external_id`<br><br>*string* | child_business_external_id<br> |
| `email`<br><br>*string* | The business email of the business admin<br> |
| `name`<br><br>*string* | Username<br><br>**[required]**<br> |
| `primary_page`<br><br>*numeric string* | Primary Page ID<br> |
| `sales_rep_email`<br><br>*string* | Sales Rep email address<br> |
| `survey_business_type`<br><br>*enum {AGENCY, ADVERTISER, APP_DEVELOPER, PUBLISHER}* | Business Type<br> |
| `survey_num_assets`<br><br>*int64* | Number of Assets in the business<br> |
| `survey_num_people`<br><br>*int64* | Number of People that will work on the business<br> |
| `timezone_id`<br><br>*enum {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592}* | Timezone ID<br> |
| `vertical`<br><br>*enum {NOT_SET, ADVERTISING, AUTOMOTIVE, CONSUMER_PACKAGED_GOODS, ECOMMERCE, EDUCATION, ENERGY_AND_UTILITIES, ENTERTAINMENT_AND_MEDIA, FINANCIAL_SERVICES, GAMING, GOVERNMENT_AND_POLITICS, MARKETING, ORGANIZATIONS_AND_ASSOCIATIONS, PROFESSIONAL_SERVICES, RETAIL, TECHNOLOGY, TELECOM, TRAVEL, NON_PROFIT, RESTAURANT, HEALTH, LUXURY, OTHER}* | Vertical ID<br><br>**[required]**<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *id* in the return type.

```
Struct  {
id: numeric string,
name: string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 3912 | There was a technical issue and the changes you made to your Business Manager weren't saved. Please try again. |
| 3918 | The Facebook Page you've tried to add is already owned by another Business Manager. You can still request access to this Page, but your request will need to be approved by the Business Manager that owns it. |
| 3974 | The name you chose for this Business Manager is not valid. Try a different name. |
| 3947 | You are trying to create a Business Manager with the same name as one you are already a part of. Please pick a different name. |
| 200 | Permissions error |
| 3973 | The name you chose for this Business Manager is not valid. Please choose another. |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |

#### /{business_id}/owned_businesses
You can make a POST request to *owned_businesses* edge from the following paths:

- [/{business_id}/owned_businesses](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_businesses)

When posting to this edge, a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `child_business_external_id`<br><br>*string* | (Optional) An external id that allows you to specify a key for your app to identify the child business. You should query for child businesses using this id because the list API is indexed on this field.<br> |
| `name`<br><br>*string* | (Required) Name of entity for displaying.  It should match the public name of your business or organization, since it will be visible across Meta. It can't contain special characters.<br><br>**[required]**<br> |
| `page_permitted_tasks` This field is only accessible in v3.3 or later.<br><br>*array<enum {MANAGE, CREATE_CONTENT, MODERATE, MESSAGING, ADVERTISE, ANALYZE, MODERATE_COMMUNITY, MANAGE_JOBS, PAGES_MESSAGING, PAGES_MESSAGING_SUBSCRIPTIONS, READ_PAGE_MAILBOXES, VIEW_MONETIZATION_INSIGHTS, MANAGE_LEADS, PROFILE_PLUS_FULL_CONTROL, PROFILE_PLUS_MANAGE, PROFILE_PLUS_FACEBOOK_ACCESS, PROFILE_PLUS_CREATE_CONTENT, PROFILE_PLUS_MODERATE, PROFILE_PLUS_MODERATE_DELEGATE_COMMUNITY, PROFILE_PLUS_MESSAGING, PROFILE_PLUS_ADVERTISE, PROFILE_PLUS_ANALYZE, PROFILE_PLUS_REVENUE, PROFILE_PLUS_MANAGE_LEADS, CASHIER_ROLE, GLOBAL_STRUCTURE_MANAGEMENT, PROFILE_PLUS_GLOBAL_STRUCTURE_MANAGEMENT}>* | (Required) page_permitted_tasks<br> |
| `shared_page_id`<br><br>*numeric string* | (Required) shared_page_id<br> |
| `timezone_id`<br><br>*enum {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592}* | timezone_id<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *id* in the return type.

```
Struct  {
id: numeric string,
name: string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 3913 | It doesn't look like you have permission to create a new Business Manager. |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 100 | Invalid parameter |
| 3947 | You are trying to create a Business Manager with the same name as one you are already a part of. Please pick a different name. |
| 3974 | The name you chose for this Business Manager is not valid. Try a different name. |

#### /{business_id}/china_business_onboarding_attributions
You can make a POST request to *china_business_onboarding_attributions* edge from the following paths:

- [/{business_id}/china_business_onboarding_attributions](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/china_business_onboarding_attributions)

When posting to this edge, a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `advertiser_identifier`<br><br>*string* | [Optional] Advertiser identifiers used to analyze the customer acquisition lifecycle<br> |
| `csi`<br><br>*string* | [Optional] Meta generated tracking id<br> |
| `update_token_id`<br><br>*numeric string* | [Optional] ID for the OE Token to be updated. Providing this ID value will result in updating the existing OE Token instead of creating a new OE Token<br> |
| `utm`<br><br>*string* | [Optional] Marketing campaign name<br> |

##### Return Type

```
Struct  {
id: numeric string,
link_with_id: string,
utm: string,
csi: string,
advertiser_identifier: string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |

### Updating

#### /{business_id}
You can update a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) by making a POST request to [/{business_id}](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business).

##### Parameters

| Parameter | Description |
| --- | --- |
| `entry_point`<br><br>*string* | entry point of claiming BusinessClaimAssetEntryPoint<br> |
| `name`<br><br>*string* | Business's name<br> |
| `primary_page`<br><br>*numeric string or integer* | Primary page of this business<br> |
| `timezone_id`<br><br>*int64* | Timezone id of this business<br> |
| `two_factor_type`<br><br>*enum{none, admin_required, all_required}* | Two-factor type of the business<br> |
| `vertical`<br><br>*enum {NOT_SET, ADVERTISING, AUTOMOTIVE, CONSUMER_PACKAGED_GOODS, ECOMMERCE, EDUCATION, ENERGY_AND_UTILITIES, ENTERTAINMENT_AND_MEDIA, FINANCIAL_SERVICES, GAMING, GOVERNMENT_AND_POLITICS, MARKETING, ORGANIZATIONS_AND_ASSOCIATIONS, PROFESSIONAL_SERVICES, RETAIL, TECHNOLOGY, TELECOM, TRAVEL, NON_PROFIT, RESTAURANT, HEALTH, LUXURY, OTHER}* | Vertical type of the business<br> |

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
| 3974 | The name you chose for this Business Manager is not valid. Try a different name. |
| 3918 | The Facebook Page you've tried to add is already owned by another Business Manager. You can still request access to this Page, but your request will need to be approved by the Business Manager that owns it. |
| 3911 | You need permission to set up a new Business Manager. |
| 3910 | You need permission to edit the details of your Business Manager. Please talk to one of your Business Manager admins about changing your role or editing the Business Manager details. |
| 415 | Two factor authentication required. User have to enter a code from SMS or TOTP code generator to pass 2fac. This could happen when accessing a 2fac-protected asset like a page that is owned by a 2fac-protected business manager. |
| 3947 | You are trying to create a Business Manager with the same name as one you are already a part of. Please pick a different name. |
| 3973 | The name you chose for this Business Manager is not valid. Please choose another. |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 3912 | There was a technical issue and the changes you made to your Business Manager weren't saved. Please try again. |
| 100 | Invalid parameter |

#### /{business_id}/managed_businesses
You can update a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) by making a POST request to [/{business_id}/managed_businesses](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/managed_businesses).

##### Parameters

| Parameter | Description |
| --- | --- |
| `child_business_external_id`<br><br>*string* | child_business_external_id<br> |
| `existing_client_business_id`<br><br>*numeric string* | Existing client business id provided by the client<br> |
| `name`<br><br>*string* | Client business name that's managed by the aggregator business<br> |
| `sales_rep_email`<br><br>*string* | Email of sales representative of the business that's managed by the aggregator business<br> |
| `survey_business_type`<br><br>*enum {AGENCY, ADVERTISER, APP_DEVELOPER, PUBLISHER}* | Business type of surveyed business that's managed by the aggregator business<br> |
| `survey_num_assets`<br><br>*int64* | Number of assets surveyed of business that's managed by the aggregator business<br> |
| `survey_num_people`<br><br>*int64* | Number of people surveyed of business that's managed by the aggregator business<br> |
| `timezone_id`<br><br>*enum {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592}* | Timezone id of business that's managed by the aggregator business<br> |
| `vertical`<br><br>*enum {NOT_SET, ADVERTISING, AUTOMOTIVE, CONSUMER_PACKAGED_GOODS, ECOMMERCE, EDUCATION, ENERGY_AND_UTILITIES, ENTERTAINMENT_AND_MEDIA, FINANCIAL_SERVICES, GAMING, GOVERNMENT_AND_POLITICS, MARKETING, ORGANIZATIONS_AND_ASSOCIATIONS, PROFESSIONAL_SERVICES, RETAIL, TECHNOLOGY, TELECOM, TRAVEL, NON_PROFIT, RESTAURANT, HEALTH, LUXURY, OTHER}* | Business vertical of business that's managed by the aggregator business<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *id* in the return type.

```
Struct  {
id: numeric string,
name: string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 42004 | You couldn't create the client business on behalf your client successfully |
| 200 | Permissions error |
| 100 | Invalid parameter |

### Deleting

#### /{business_id}/agencies
You can dissociate a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) from a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) by making a DELETE request to [/{business_id}/agencies](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/agencies).

##### Parameters

| Parameter | Description |
| --- | --- |
| `business`<br><br>*numeric string or integer* | The agency's business.<br><br>**[required]**<br> |

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

#### /{business_id}/clients
You can dissociate a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) from a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) by making a DELETE request to [/{business_id}/clients](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/clients).

##### Parameters

| Parameter | Description |
| --- | --- |
| `business`<br><br>*numeric string* | The client's business.<br><br>**[required]**<br> |

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

#### /{business_id}/pages
You can dissociate a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) from a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) by making a DELETE request to [/{business_id}/pages](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/pages).

##### Parameters

| Parameter | Description |
| --- | --- |
| `page_id`<br><br>*Page ID* | Page ID.<br><br>**[required]**<br> |

##### Return Type

```
Struct  {
success: bool,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 42001 | This Page can't be removed because it's already linked to an Instagram business profile. To remove this Page from Business Manager, go to Instagram and convert to a personal account or change the Page linked to your business profile. |
| 200 | Permissions error |
| 3996 | The page does not belong to this Business Manager. |
| 415 | Two factor authentication required. User have to enter a code from SMS or TOTP code generator to pass 2fac. This could happen when accessing a 2fac-protected asset like a page that is owned by a 2fac-protected business manager. |
| 100 | Invalid parameter |

#### /{business_id}/instagram_accounts
You can dissociate a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) from a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) by making a DELETE request to [/{business_id}/instagram_accounts](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/instagram_accounts).

##### Parameters

| Parameter | Description |
| --- | --- |
| `instagram_account`<br><br>*numeric string* | Instagram account ID.<br><br>**[required]**<br> |

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

#### /{business_id}/ad_accounts
You can dissociate a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) from a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) by making a DELETE request to [/{business_id}/ad_accounts](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/ad_accounts).

##### Parameters

| Parameter | Description |
| --- | --- |
| `adaccount_id`<br><br>*string* | Ad account ID.<br><br>**[required]**<br> |

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
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |

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

#### /{user_id}/businesses
You can dissociate a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) from a [User](https://developers.facebook.com/docs/graph-api/reference/user) by making a DELETE request to [/{user_id}/businesses](https://developers.facebook.com/docs/graph-api/reference/user/businesses).

##### Parameters

| Parameter | Description |
| --- | --- |
| `business`<br><br>*numeric string or integer* | Business ID<br> |

##### Return Type

```
Struct  {
success: bool,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 3914 | It looks like you're trying to remove the last admin from this Business Manager. At least one admin is required in Business Manager. |
| 415 | Two factor authentication required. User have to enter a code from SMS or TOTP code generator to pass 2fac. This could happen when accessing a 2fac-protected asset like a page that is owned by a 2fac-protected business manager. |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 200 | Permissions error |

#### /{instagram_business_asset_id}/agencies
You can dissociate a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) from an [InstagramBusinessAsset](https://developers.facebook.com/docs/graph-api/reference/instagram-business-asset) by making a DELETE request to [/{instagram_business_asset_id}/agencies](https://developers.facebook.com/docs/graph-api/reference/instagram-business-asset/agencies).

##### Parameters

| Parameter | Description |
| --- | --- |
| `business`<br><br>*numeric string* | The business ID of the agency that you want to revoke access for the Instagram Business Asset<br><br>**[required]**<br> |

##### Return Type

```
Struct  {
success: bool,
}
```

#### /{business_id}/owned_businesses
You can dissociate a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) from a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) by making a DELETE request to [/{business_id}/owned_businesses](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_businesses).

##### Parameters

| Parameter | Description |
| --- | --- |
| `client_id`<br><br>*numeric string* | ID of the Child Business you want to delete<br><br>**[required]**<br> |

##### Return Type

```
Struct  {
success: bool,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 3912 | There was a technical issue and the changes you made to your Business Manager weren't saved. Please try again. |
| 100 | Invalid parameter |

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/ad_accounts.md -->

## Business Ad Accounts

### Reading

You can't perform this operation on this endpoint.

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

#### /{business_id}/ad_accounts
You can dissociate a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) from a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) by making a DELETE request to [/{business_id}/ad_accounts](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/ad_accounts).

##### Parameters

| Parameter | Description |
| --- | --- |
| `adaccount_id`<br><br>*string* | Ad account ID.<br><br>**[required]**<br> |

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
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/ad_studies.md -->

## Business Ad Studies

### Reading

This business owns these ads-related studies. Includes lift studies, split tests and so on.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/ad_studies HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/ad_studies',
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
    "/{business-id}/ad_studies",
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
    "/{business-id}/ad_studies",
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
                               initWithGraphPath:@"/{business-id}/ad_studies"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fad_studies&version=v25.0)

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
| 200 | Permissions error |
| 100 | Invalid parameter |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 104 | Incorrect signature |

### Creating

#### /{business_id}/ad_studies
You can make a POST request to *ad_studies* edge from the following paths:

- [/{business_id}/ad_studies](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/ad_studies)

When posting to this edge, an [AdStudy](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-study) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `cells`<br><br>*list<Object>* | Describes the cells in the study.<br><br>**[required]**<br><br><br>`description` *string*<br><br>`id` *int64*<br><br>`name` *string*<br><br>`creation_template` *enum {AUTOMATIC_PLACEMENTS, BRAND_AWARENESS, FACEBOOK, FACEBOOK_AUDIENCE_NETWORK, FACEBOOK_INSTAGRAM, FACEBOOK_NEWS_FEED, FACEBOOK_NEWS_FEED_IN_STREAM_VIDEO, IN_STREAM_VIDEO, INSTAGRAM, MOBILE_OPTIMIZED_VIDEO, PAGE_POST_ENGAGEMENT, REACH, TV_COMMERCIAL, TV_FACEBOOK, VIDEO_VIEW_OPTIMIZATION, LOW_FREQUENCY, MEDIUM_FREQUENCY, HIGH_FREQUENCY}*<br><br>`adaccounts` *list<int64>*<br><br>`ads` *list<numeric string or integer>*<br><br>`adsets` *list<numeric string or integer>*<br><br>`campaigns` *list<numeric string or integer>*<br><br>`control_percentage` *float with at most two digits after decimal point*<br><br>`treatment_percentage` *float with at most two digits after decimal point* |
| `client_business`<br><br>*numeric string or integer* | Business associated with the study.<br> |
| `confidence_level`<br><br>*float* | Confidence level used in power calculations and final study report.<br> |
| `cooldown_start_time`<br><br>*integer* | Start of the pre-measurement cool-down period. This period ends when the study period starts.<br> |
| `creative_test_config`<br><br>*JSON object* | (Optional) Configuration for launching a 2-5 cell creative test. Specify either daily_budget or lifetime_budget_percentage to set the budget allocation for the study across the cells' ads. The study's "type" field must also be defined as SPLIT_TEST_V2 when creative_test_config is included in the request.<br> |
| `description`<br><br>*string* | The purpose of the study.<br> |
| `end_time`<br><br>*integer* | Time when the study period ends.<br><br>**[required]**<br> |
| `name`<br><br>*string* | Name of the study.<br><br>**[required]**<br> |
| `objectives`<br><br>*list<Object>* | A vector of objects describing the objectives assigned to this study.<br><br><br>`id` *numeric string or integer*<br><br>`is_primary` *boolean*<br><br>`name` *string*<br><br>`type` *enum {SALES, NONSALES, MAE, TELCO, FTL, MAI, PARTNER, BRANDLIFT, BRAND, MPC_CONVERSION, CONVERSIONS}*<br><br>`offsite_datasets` *list<JSON or object-like arrays>*<br><br>`id` *numeric string or integer*<br>**[required]**<br><br><br>`event_names` *list<string>*<br><br>`adspixels` *list<JSON or object-like arrays>*<br><br>`id` *numeric string or integer*<br>**[required]**<br><br><br>`event_names` *list<string>*<br><br>`customconversions` *list<JSON or object-like arrays>*<br><br>`id` *numeric string or integer*<br>**[required]**<br><br><br>`event_names` *list<string>*<br><br>`applications` *list<JSON or object-like arrays>*<br><br>`id` *numeric string or integer*<br>**[required]**<br><br><br>`event_names` *list<string>*<br><br>`offline_conversion_data_sets` *list<JSON or object-like arrays>*<br><br>`id` *numeric string or integer*<br>**[required]**<br><br><br>`event_names` *list<string>*<br><br>`product_sets` *list<JSON or object-like arrays>*<br><br>`id` *numeric string or integer*<br>**[required]**<br><br><br>`event_names` *list<string>*<br><br>`product_catalogs` *list<JSON or object-like arrays>*<br><br>`id` *numeric string or integer*<br>**[required]**<br><br><br>`event_names` *list<string>* |
| `observation_end_time`<br><br>*integer* | The end of the observation period for this study. This period starts when the study period ends.<br> |
| `start_time`<br><br>*integer* | The time when the study period starts.<br><br>**[required]**<br> |
| `type`<br><br>*enum {LIFT, SPLIT_TEST, CONTINUOUS_LIFT_CONFIG, GEO_LIFT, BACKEND_AB_TESTING, CREATIVE_SPEND_ENFORCEMENT, PORTFOLIO_OPTIMIZER, VERSION_CONTROL}* | The type of ad study, such as `SPLIT_TEST` or `LIFT`.<br> |
| `viewers`<br><br>*list<int>* | This study is shared with these people.<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/adaccount.md -->

## Business Adaccount

### Reading

You can't perform this operation on this endpoint.

### Creating

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

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/add_phone_numbers.md -->

## Business Add Phone Numbers

Adds a business phone number to a pool of pre-verified business phone numbers on a business. See [Pre-Verified Phone Numbers](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/pre-verified-numbers).

### Reading

You can't perform this operation on this endpoint.

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/adnetworkanalytics.md -->

## Business Adnetworkanalytics

### Reading

Audience Network Insights for this publisher entity

##### Example

#### HTTP
```
GET /v25.0/{business-id}/adnetworkanalytics HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/adnetworkanalytics',
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
    "/{business-id}/adnetworkanalytics",
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
    "/{business-id}/adnetworkanalytics",
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
                               initWithGraphPath:@"/{business-id}/adnetworkanalytics"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fadnetworkanalytics&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `aggregation_period`<br><br>*enum {DAY, TOTAL}* | **Default value: **`"DAY"`<br>The interval to aggregate by<br> |
| `breakdowns`<br><br>*array<enum {AGE, APP, COUNTRY, DELIVERY_METHOD, DISPLAY_FORMAT, DEAL, DEAL_AD, DEAL_PAGE, GENDER, PLACEMENT, PLACEMENT_NAME, AD_SPACE, PLATFORM, PROPERTY, CLICKED_VIEW_TAG, FAIL_REASON, SDK_VERSION, INSTANT_ARTICLE_PAGE_ID, INSTANT_ARTICLE_ID, AD_SERVER_CAMPAIGN_ID, IS_DEAL_BACKFILL}>* | **Default value: **`[]`<br>Optional breakdowns for results<br> |
| `filters`<br><br>*array<JSON object>* | **Default value: **`[]`<br>Additional filters for the query<br><br><br>`field` *enum {AGE, APP, COUNTRY, DELIVERY_METHOD, DISPLAY_FORMAT, DEAL, DEAL_AD, DEAL_PAGE, GENDER, PLACEMENT, PLACEMENT_NAME, AD_SPACE, PLATFORM, PROPERTY, CLICKED_VIEW_TAG, FAIL_REASON, SDK_VERSION, INSTANT_ARTICLE_PAGE_ID, INSTANT_ARTICLE_ID, AD_SERVER_CAMPAIGN_ID, IS_DEAL_BACKFILL}*<br>field<br><br>**[required]**<br><br><br>`operator` *enum {IN, NOT_IN}*<br>operator<br><br>**[required]**<br><br><br>`values` *array<string>*<br>values<br><br>**[required]**<br> |
| `limit`<br><br>*int64* | **Default value: **`2000`<br>Limit the number of rows returned<br> |
| `metrics`<br><br>*array<enum {FB_AD_NETWORK_BIDDING_REQUEST, FB_AD_NETWORK_BIDDING_RESPONSE, FB_AD_NETWORK_BIDDING_BID_RATE, FB_AD_NETWORK_BIDDING_WIN_RATE, FB_AD_NETWORK_REQUEST, FB_AD_NETWORK_FILLED_REQUEST, FB_AD_NETWORK_FILL_RATE, FB_AD_NETWORK_IMP, FB_AD_NETWORK_IMPRESSION_RATE, FB_AD_NETWORK_CLICK, FB_AD_NETWORK_CTR, FB_AD_NETWORK_BIDDING_REVENUE, FB_AD_NETWORK_REVENUE, FB_AD_NETWORK_CPM, FB_AD_NETWORK_VIDEO_GUARANTEE_REVENUE, FB_AD_NETWORK_VIDEO_VIEW, FB_AD_NETWORK_VIDEO_VIEW_RATE, FB_AD_NETWORK_VIDEO_MRC, FB_AD_NETWORK_VIDEO_MRC_RATE, FB_AD_NETWORK_SHOW_RATE}>* | List of metrics to query for<br><br>**[required]**<br> |
| `ordering_column`<br><br>*enum {TIME, VALUE, METRIC}* | **Default value: **`"TIME"`<br>Order results by value (result of the aggregation) or by time.<br> |
| `ordering_type`<br><br>*enum {ASCENDING, DESCENDING}* | **Default value: **`"DESCENDING"`<br>Ascending or descending<br> |
| `should_include_until`<br><br>*boolean* | should_include_until<br> |
| `since`<br><br>*datetime/timestamp* | A unix timestamp or strtotime data value that indicates the start of the data range<br> |
| `until`<br><br>*datetime/timestamp* | A unix timestamp or strtotime data value that indicates the end of the data range<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdNetworkAnalyticsSyncQueryResult nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 3000 | Reading insights of a Page, business, app, domain or event source group not owned by the querying user or application |
| 104 | Incorrect signature |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 613 | Calls to this api have exceeded the rate limit. |
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

#### /{business_id}/adnetworkanalytics
You can make a POST request to *adnetworkanalytics* edge from the following paths:

- [/{business_id}/adnetworkanalytics](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/adnetworkanalytics)

When posting to this edge, an [AnalyticsQueryResult](https://developers.facebook.com/docs/graph-api/reference/analytics-query-result) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `aggregation_period`<br><br>*enum {DAY, TOTAL}* | **Default value: **`DAY`<br>The interval to aggregate by<br> |
| `breakdowns`<br><br>*list<enum {AGE, APP, COUNTRY, DELIVERY_METHOD, DISPLAY_FORMAT, DEAL, DEAL_AD, DEAL_PAGE, GENDER, PLACEMENT, PLACEMENT_NAME, AD_SPACE, PLATFORM, PROPERTY, CLICKED_VIEW_TAG, FAIL_REASON, SDK_VERSION, INSTANT_ARTICLE_PAGE_ID, INSTANT_ARTICLE_ID, AD_SERVER_CAMPAIGN_ID, IS_DEAL_BACKFILL}>* | **Default value: **`Vec`<br>Optional breakdowns for results<br> |
| `filters`<br><br>*list<Object>* | **Default value: **`Vec`<br>Additional filters for the query<br><br><br>`field` *enum {AGE, APP, COUNTRY, DELIVERY_METHOD, DISPLAY_FORMAT, DEAL, DEAL_AD, DEAL_PAGE, GENDER, PLACEMENT, PLACEMENT_NAME, AD_SPACE, PLATFORM, PROPERTY, CLICKED_VIEW_TAG, FAIL_REASON, SDK_VERSION, INSTANT_ARTICLE_PAGE_ID, INSTANT_ARTICLE_ID, AD_SERVER_CAMPAIGN_ID, IS_DEAL_BACKFILL}*<br>Field on which filter is applied. Currently, only valid breakdowns are supported in filters. eg. Country, OS, etc.<br><br>**[required]**<br><br><br>`operator` *enum {IN, NOT_IN}*<br>The intended operation between field and values. eg. IN, etc.<br><br>**[required]**<br><br><br>`values` *list<string>*<br><br>**Default value: **`Vec`<br>Values of corresponding field which must be filtered in result subject to the operator. The results join the different field valuesdisjunctively. eg. For Filters = {"Country", "IN", ["US", UK]} translates to {"Country", "IN", "US"} OR {"Country", "IN", "UK"}<br> |
| `limit`<br><br>*integer* | **Default value: **`20000`<br>Limit the number of rows returned<br> |
| `metrics`<br><br>*list<enum {FB_AD_NETWORK_BIDDING_REQUEST, FB_AD_NETWORK_BIDDING_RESPONSE, FB_AD_NETWORK_BIDDING_BID_RATE, FB_AD_NETWORK_BIDDING_WIN_RATE, FB_AD_NETWORK_REQUEST, FB_AD_NETWORK_FILLED_REQUEST, FB_AD_NETWORK_FILL_RATE, FB_AD_NETWORK_IMP, FB_AD_NETWORK_IMPRESSION_RATE, FB_AD_NETWORK_CLICK, FB_AD_NETWORK_CTR, FB_AD_NETWORK_BIDDING_REVENUE, FB_AD_NETWORK_REVENUE, FB_AD_NETWORK_CPM, FB_AD_NETWORK_VIDEO_GUARANTEE_REVENUE, FB_AD_NETWORK_VIDEO_VIEW, FB_AD_NETWORK_VIDEO_VIEW_RATE, FB_AD_NETWORK_VIDEO_MRC, FB_AD_NETWORK_VIDEO_MRC_RATE, FB_AD_NETWORK_SHOW_RATE}>* | Metrics to return<br><br>**[required]**<br> |
| `ordering_column`<br><br>*enum {TIME, VALUE, METRIC}* | **Default value: **`TIME`<br>Order results by value (result of the aggregation) or by time.<br> |
| `ordering_type`<br><br>*enum {ASCENDING, DESCENDING}* | **Default value: **`DESCENDING`<br>Ascending or descending<br> |
| `since`<br><br>*datetime/timestamp* | A unix timestamp or strtotime data value that indicates the start of the data range<br> |
| `until`<br><br>*datetime/timestamp* | A unix timestamp or strtotime data value that indicates the end of the data range<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
query_id: string,
async_result_link: string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 3000 | Reading insights of a Page, business, app, domain or event source group not owned by the querying user or application |
| 100 | Invalid parameter |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/adnetworkanalytics_export.md -->

## Business Adnetworkanalytics Export

### Reading

Export the query insights data for this publisher entity.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/adnetworkanalytics_export HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/adnetworkanalytics_export',
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
    "/{business-id}/adnetworkanalytics_export",
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
    "/{business-id}/adnetworkanalytics_export",
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
                               initWithGraphPath:@"/{business-id}/adnetworkanalytics_export"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fadnetworkanalytics_export&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `query_ids`<br><br>*array<string>* | **Default value: **`[]`<br>Set of query ids to export results for<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdNetworkAnalyticsAsyncQueryExport nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/adnetworkanalytics_results.md -->

## Business Adnetworkanalytics Results

### Reading

Query insights data for this publisher entity

##### Example

#### HTTP
```
GET /v25.0/{business-id}/adnetworkanalytics_results HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/adnetworkanalytics_results',
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
    "/{business-id}/adnetworkanalytics_results",
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
    "/{business-id}/adnetworkanalytics_results",
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
                               initWithGraphPath:@"/{business-id}/adnetworkanalytics_results"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fadnetworkanalytics_results&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `query_ids`<br><br>*list<string>* | **Default value: **`Vec`<br>Set of query ids to get result for<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdNetworkAnalyticsAsyncQueryResult nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/ads_custom_pivots_preview.md -->

## Business Ads Custom Pivots Preview

### Reading

Provides ad object data of each custom pivot grouping

##### Example

#### HTTP
```
GET /v25.0/{business-id}/ads_custom_pivots_preview HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/ads_custom_pivots_preview',
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
    "/{business-id}/ads_custom_pivots_preview",
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
    "/{business-id}/ads_custom_pivots_preview",
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
                               initWithGraphPath:@"/{business-id}/ads_custom_pivots_preview"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fads_custom_pivots_preview&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `ad_account_ids`<br><br>*array<int64>* | List of ad accounts<br> |
| `date_preset`<br><br>*enum {today, yesterday, this_month, last_month, this_quarter, maximum, data_maximum, last_3d, last_7d, last_14d, last_28d, last_30d, last_90d, last_week_mon_sun, last_week_sun_sat, last_quarter, last_year, this_week_mon_today, this_week_sun_today, this_year}* | The date preset<br> |
| `dimensions`<br><br>*array<string>* | dimensions<br> |
| `group_name`<br><br>*string* | group_name<br> |
| `sorting`<br><br>*array<JSON object>* | sorting<br><br><br>`field` *string*<br>field<br><br>**[required]**<br><br><br>`direction` *enum {asc, desc}*<br><br>**Default value: **`"desc"`<br>direction<br> |
| `time_range`<br><br>*{'since':YYYY-MM-DD,'until':YYYY-MM-DD}* | The time range<br><br><br>`since` *datetime*<br>A date in the format of "YYYY-MM-DD", which means from the beginning midnight of that day.<br><br><br>`until` *datetime*<br>A date in the format of "YYYY-MM-DD", which means to the beginning midnight of the following day.<br> |

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

A list of AdsCustomPivotsPreview nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `counts`<br><br>*list<AdsCustomPivotsPreviewCount>* | counts<br><br><br>**[default]**<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/ads_dataset.md -->

## Business Ads Dataset

Datasets allow advertisers to connect and manage event data from web, app, store, and business messaging event sources to the Conversions API.

Datasets previously had to be created in Ads or Events Manager, or via specific tools like Facebook Login for Business or Meta Business Extension. The Datasets API allows programmatic management instead. With a direct Conversions API integration, you can create and manage datasets programmatically at scale.

> **Allowlist required:** Partners' and businesses' app IDs must be allowlisted to use the Datasets API. Contact your Meta representative to be added to the allowlist.

### Prerequisites

#### App permission

Your app must have the `business_management` permission. More detailed information on permissions and access can be found in the Ad Permissions and Access documentation.

#### Assets

You need access to these assets:

- `business_id`: The business ID that datasets will be associated with.
- `ad_account_id`: The ad account ID owned by the same business associated with the dataset. More information in Ad Accounts - Business Management APIs.
- `app_id`: The app ID owned by the business associated with the dataset. More information in Apps - Business Management APIs.

### Supported Conversions API channels

The Datasets API supports multiple types of Conversions API integrations:

- Conversions API for Web, to send web events.
- Conversions API for Offline, to send offline and physical store events.
- Conversions API for CRM, to send lead events from CRM systems.
- Conversions API for App, to send app events.

This API does not apply to Conversions API for Business Messaging. For that use case, refer to the developer documentation for dataset creation access.

### Creating datasets

To create a dataset, make a `POST` request to the `{business-id}/ads_dataset` endpoint with the following parameters:

| Parameter | Description | Required |
|-----------|-------------|----------|
| `name` | string. The name of the dataset. | Yes |
| `ad_account_id` | string. The ID of the ad account owned by the business that the dataset will be associated with. | No |
| `app_id` | string. The ID of the app owned by the business, indicating whether the dataset is for App. Required for sending CAPI app events. | No |
| `is_crm` | boolean. Whether the dataset is for CRM. Required for sending CAPI-CRM events. | No |

Example:

#### HTTP
```bash
curl -X POST \
  https://graph.facebook.com/v27.0/{business-id}/ads_dataset \
  -F 'name=My New Dataset' \
  -F 'access_token=<ACCESS_TOKEN>'
```

Example for a CRM CAPI dataset:

#### HTTP
```bash
curl -X POST \
  https://graph.facebook.com/v27.0/{business-id}/ads_dataset \
  -F 'name=My New Dataset' \
  -F 'is_crm=true' \
  -F 'access_token=<ACCESS_TOKEN>'
```

Example for an App dataset:

#### HTTP
```bash
curl -X POST \
  https://graph.facebook.com/v27.0/{business-id}/ads_dataset \
  -F 'name=My New Dataset' \
  -F 'app_id=23123348790' \
  -F 'access_token=<ACCESS_TOKEN>'
```

Example for associating a dataset with an ad account:

#### HTTP
```bash
curl -X POST \
  https://graph.facebook.com/v27.0/{business-id}/ads_dataset \
  -F 'name=My New Dataset' \
  -F 'ad_account_id=4523453334879' \
  -F 'access_token=<ACCESS_TOKEN>'
```

#### Sample response

A successful response returns the ID of the newly created dataset:

```json
{
  "id": "23845678901234567"
}
```

An unsuccessful response returns an error object with an explanation. Examples:

```json
{
  "error": {
    "message": "(#200) Permissions error",
    "type": "OAuthException",
    "code": 200,
    "fbtrace_id": "AGkghYUZC5qXod_iumMnoEc"
  }
}
```

```json
{
  "error": {
    "message": "Invalid parameter",
    "type": "OAuthException",
    "code": 100,
    "error_subcode": 3858522,
    "is_transient": false,
    "error_user_title": "Ad Account Not Owned By Business",
    "error_user_msg": "The ad account id parameter needs to be owned by a business making the dataset api request",
    "fbtrace_id": "AGnio45BEnDSg8TnLODiHcI"
  }
}
```

#### Error codes

The following error codes may be returned when creating a dataset:

| Subcode | Description |
|---------|-------------|
| `1349004` | Your app does not have permission to create a dataset. |
| `2282001` | Invalid Business ID. Business ID not recognized. Try again. |
| `1690148` | There aren't any ad accounts that match the ID that you entered. Check that you've entered the ad account ID correctly and try again. |
| `3858522` | The ad account id parameter needs to be owned by a business making the dataset api request. |
| `1349040` | Invalid App ID. The provided app ID does not look like a valid app ID. |
| `3858526` | The app id parameter needs to be owned by a business making the dataset api request. |
| `3858530` | App ID provided in the params is already associated with a dataset. You can only associate 1 app ID with 1 dataset. |

### Reading datasets

To read datasets under a business, make a `GET` request to the `{business-id}/ads_dataset` endpoint with the following parameters:

| Parameter | Description | Required |
|-----------|-------------|----------|
| `id_filter` | string. Retrieve a list of matching datasets based on the dataset ID. | No |
| `name_filter` | string. Retrieve a list of matching datasets based on the dataset name. Case insensitive. | No |
| `sort_by` | enum. One of `LAST_FIRED_TIME` or `NAME`. Retrieve the list of datasets sorted by the applicable fields. | No |

Reading from this edge returns a JSON formatted result with `data` and `paging` nodes, plus a `summary` node when requested via the `summary` param. For pagination details, see the Graph API guide. For `summary`, specify the fields to fetch in the `summary` param (like `summary=total_count`).

Example:

#### HTTP
```bash
curl -X GET \
  https://graph.facebook.com/v27.0/{business-id}/ads_dataset
```

Example for reading datasets with `id_filter`:

#### HTTP
```bash
curl -X GET \
  https://graph.facebook.com/v27.0/{business-id}/ads_dataset?id_filter=211150265112369
```

#### Sample response

```json
{
  "data": [
    {
      "name": "test Feb17",
      "dataset_id": "211150265112369",
      "id": "211150265112369"
    }
  ],
  "paging": {
    "cursors": {
      "before": "QVFIUjlPdWJvcV81VkMweHJqZAEFyOVFqSnUxcGZA4ZAVBiRElrM0k5bHppc2xZAN0o0dS10SC1ieU",
      "after": "QVFIUjlPdWJvcV81VkMweHJqZAEFyOVFqSnUxcGZA4ZAVBiRElrM0k5bHppc2xZAN0o0dS10SC1ieU"
    }
  }
}
```

#### Dataset fields

To read information about a dataset, request the `{business-id}/ads_dataset` endpoint with the following fields:

| Field | Description |
|-------|-------------|
| `id` | ID of the dataset. |
| `name` | string. The name of the dataset. |
| `dataset_id` | string. Same as the ID of the dataset. |
| `creator` | User. The user who created this dataset. |
| `owner_business` | Business. ID of the business that owns this dataset, or null if the dataset has not been claimed by any business yet. |
| `creation_time` | datetime. Time at which the dataset was created. |
| `is_unavailable` | bool. Whether this dataset is unavailable. |
| `is_consolidated_container` | bool. Whether this signal container has unified pixel and offline conversion data set. |
| `last_fired_time` | datetime. Time at which the dataset was last fired. |
| `is_crm` | bool. Whether the dataset is for CRM. |
| `owner_ad_account` | object. The ad account owned by the business that the dataset is associated with. Contains `account_id` and `id`. |
| `enable_automatic_matching` | bool. Whether automatic advanced matching is enabled for the dataset for identity matching purposes. |
| `is_created_by_business` | bool. Whether the dataset was created by a business. |
| `automatic_matching_fields` | list<enum>. Advanced matching fields enabled for automatic advanced matching. |
| `can_proxy` | bool. Whether this dataset can proxy. |
| `code` | string. Dataset code to be placed on the website. |
| `config` | string. The configuration to use for uploads to this dataset. Format determined by the method of upload (for example UI or SDK). |
| `description` | string. Description of the dataset. |
| `duplicate_entries` | integer. Number of duplicate entries for this dataset. |
| `enable_auto_assign_to_accounts` | bool. Whether the dataset is auto assigned and auto tracked for all accounts that the owner business owns. |
| `event_stats` | string. Event stats of this dataset. |
| `event_time_max` | integer. Latest entry of this dataset. |
| `event_time_min` | integer. Earliest entry of this dataset. |
| `first_party_cookie_status` | enum. First party cookie status indicating whether first party cookies can be set for this dataset. |

Example for reading datasets with a fields filter:

#### HTTP
```bash
curl -X GET \
  https://graph.facebook.com/v27.0/{business-id}/ads_dataset?fields=id,dataset_id,name,is_consolidated_container
```

Sample response:

```json
{
  "data": [
    {
      "id": "505648222963903",
      "dataset_id": "505648222963903",
      "name": "Test 1",
      "is_consolidated_container": true,
      "is_crm": false,
      "owner_ad_account": {
        "account_id": "10222203672",
        "id": "act_10222203672"
      }
    },
    {
      "id": "5056482111163903",
      "dataset_id": "5056482111163903",
      "name": "Test 2",
      "is_consolidated_container": true,
      "is_crm": true,
      "owner_ad_account": {
        "account_id": "10111103672",
        "id": "act_10111103672"
      }
    }
  ],
  "paging": {
    "cursors": {
      "before": "QVFIUk9VTU9VRkFtaGp3NG10bDBQNU5KNkJxYsssssl93ZA2U5aGljZAnRyOTRRZA3VnMDY5ZAmYtW",
      "after": "QVFIUkNQU2hQeEh6clVRS1NBMVhMYsssFMc29CM09aREt2U3V0SG5NLU5UcE51aDh6ZAEVneGNZAc2"
    },
    "next": "https://graph.facebook.com/v27.0/10152172211222/ads_dataset?access_token=<ACCESS_TOKEN>"
  }
}
```

#### Dataset edges

| Edge | Description |
|------|-------------|
| `assigned_users` | Edge<AssignedUser>. Users assigned to this dataset. |
| `adaccounts` | Edge<AdAccount>. Ad Accounts that have access to this dataset. |
| `customconversions` | Edge<CustomConversion>. Custom conversions associated with this dataset. |

#### Error codes

The following error codes may be returned when reading datasets:

| Subcode | Description |
|---------|-------------|
| `1349004` | Your app does not have permission to read datasets. |
| `2282001` | Invalid Business ID. Business ID not recognized. Try again. |

An unsuccessful response returns an error object. Examples:

```json
{
  "error": {
    "message": "(#200) Permissions error",
    "type": "OAuthException",
    "code": 200,
    "fbtrace_id": "AGkghYUZC5qXod_iumMnoEc"
  }
}
```

```json
{
  "error": {
    "message": "Invalid parameter",
    "type": "OAuthException",
    "code": 100,
    "error_subcode": 1349004,
    "is_transient": false,
    "error_user_title": "Your app does not have permission to read datasets",
    "error_user_msg": "There was a problem with the parameters of the request.",
    "fbtrace_id": "AGnio41BEnDSg8TnLODiHcI"
  }
}
```

### Other resources

- [Overview of the Graph API](https://developers.facebook.com/docs/graph-api/overview)
- [Ad Permissions and Access](https://developers.facebook.com/docs/marketing-api/overview/authorization#permissions-and-features)
- Assets:
  - [Ad Accounts - Business Management APIs](https://developers.facebook.com/docs/marketing-api/business-asset-management/guides/ad-accounts/)
  - [Apps - Business Management APIs](https://developers.facebook.com/docs/marketing-api/business-asset-management/guides/apps)
- Supported channels:
  - [Conversions API for Web Events](https://developers.facebook.com/docs/marketing-api/conversions-api)
  - [Conversions API for Offline Events](https://developers.facebook.com/docs/marketing-api/conversions-api/offline-events)
  - [Conversions API for CRM](https://developers.facebook.com/docs/marketing-api/conversions-api/guides/conversions-api-for-crm/#conversions-api-for-crm--integrate-as-a-platform)
  - [Conversions API for App Events](https://developers.facebook.com/docs/marketing-api/conversions-api/app-events)
- Business Help Center:
  - [About datasets in Meta Events Manager](https://www.facebook.com/business/help/750785952855662?id=490360542427371)
  - [How to create datasets in Meta Events Manager](https://www.facebook.com/business/help/5818684664831465?id=490360542427371)

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/ads_reporting_exports.md -->

## Business Ads Reporting Exports

### Reading

BusinessAdsReportingExports

##### Example

#### HTTP
```
GET /v25.0/{business-id}/ads_reporting_exports HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/ads_reporting_exports',
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
    "/{business-id}/ads_reporting_exports",
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
    "/{business-id}/ads_reporting_exports",
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
                               initWithGraphPath:@"/{business-id}/ads_reporting_exports"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fads_reporting_exports&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `filtering`<br><br>*Filters used in report builder* | **Default value: **`Vec`<br>filtering<br><br><br>`field` *string*<br>**[required]**<br><br><br>`operator` *enum {EQUAL, NOT_EQUAL, GREATER_THAN, GREATER_THAN_OR_EQUAL, LESS_THAN, LESS_THAN_OR_EQUAL, IN_RANGE, NOT_IN_RANGE, CONTAIN, NOT_CONTAIN, CONTAINS_ANY, CONTAINS_ALL, NOT_CONTAINS_ANY, STEM_MATCH, IN, NOT_IN, STARTS_WITH, ENDS_WITH, ANY, ALL, AFTER, BEFORE, ON_OR_AFTER, ON_OR_BEFORE, NONE, TOP}*<br>**[required]**<br><br><br>`value` *string*<br>**[required]**<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdsReportBuilderExportCore nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 2616 | The reporting data you are trying to fetch has too many rows. Please pull data for shorter time periods or use filters to restrict the number of ad IDs |
| 190 | Invalid OAuth 2.0 Access Token |
| 104 | Incorrect signature |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/ads_reporting_mmm_reports.md -->

## Business Ads Reporting Mmm Reports

### Reading

Edge between business and MMM reports.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/ads_reporting_mmm_reports HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/ads_reporting_mmm_reports',
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
    "/{business-id}/ads_reporting_mmm_reports",
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
    "/{business-id}/ads_reporting_mmm_reports",
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
                               initWithGraphPath:@"/{business-id}/ads_reporting_mmm_reports"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fads_reporting_mmm_reports&version=v25.0)

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
| 2616 | The reporting data you are trying to fetch has too many rows. Please pull data for shorter time periods or use filters to restrict the number of ad IDs |
| 190 | Invalid OAuth 2.0 Access Token |
| 104 | Incorrect signature |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/ads_reporting_mmm_schedulers.md -->

## Business Ads Reporting Mmm Schedulers

### Reading

This edge get all the mmm report schedules under the business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/ads_reporting_mmm_schedulers HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/ads_reporting_mmm_schedulers',
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
    "/{business-id}/ads_reporting_mmm_schedulers",
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
    "/{business-id}/ads_reporting_mmm_schedulers",
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
                               initWithGraphPath:@"/{business-id}/ads_reporting_mmm_schedulers"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fads_reporting_mmm_schedulers&version=v25.0)

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

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/adspixels.md -->

## Business Adspixels

### Reading

This business has access to these Facebook pixels.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/adspixels HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/adspixels',
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
    "/{business-id}/adspixels",
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
    "/{business-id}/adspixels",
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
                               initWithGraphPath:@"/{business-id}/adspixels"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fadspixels&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `id_filter`<br><br>*string* | Retrieve a list of matching pixels based on the pixel ID.<br> |
| `name_filter`<br><br>*string* | Retrieve a list of matching pixels based on the pixel name. Case insensitive.<br> |

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
| `total_count`<br><br>*int32* | Total number of items in this edge.<br><br><br>**[default]**<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 270 | This Ads API request is not allowed for apps with development access level (Development access is by default for all apps, please request for upgrade). Make sure that the access token belongs to a user that is both admin of the app and admin of the ad account |
| 200 | Permissions error |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 104 | Incorrect signature |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/agencies.md -->

## Business Agencies

### Reading

List all businesses that have access to your business's assets.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/agencies HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/agencies',
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
    "/{business-id}/agencies",
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
    "/{business-id}/agencies",
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
                               initWithGraphPath:@"/{business-id}/agencies"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fagencies&version=v25.0)

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
| `adaccount_permissions`<br><br>*list<AdAccountPermission>* | Adaccount_permissions<br><br><br>**[default]**<br> |
| `application_permissions`<br><br>*list<AppPermission>* | Application_permissions<br><br><br>**[default]**<br> |
| `page_permissions`<br><br>*list<PagePermission>* | Page_permissions<br><br><br>**[default]**<br> |
| `productcatalog_permissions`<br><br>*list<ProductCatalogPermission>* | Productcatalog_permissions<br><br><br>**[default]**<br> |
| `shared_ca_count`<br><br>*int32* | Shared_ca_count<br><br><br>**[default]**<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total_count).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*unsigned int32* | Total number of businesses.<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |
| 104 | Incorrect signature |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

#### /{business_id}/agencies
You can dissociate a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) from a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) by making a DELETE request to [/{business_id}/agencies](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/agencies).

##### Parameters

| Parameter | Description |
| --- | --- |
| `business`<br><br>*numeric string or integer* | The agency's business.<br><br>**[required]**<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/an_placements.md -->

## Business An Placements

### Reading

Provides Audience Network placements which are associated with this business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/an_placements HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/an_placements',
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
    "/{business-id}/an_placements",
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
    "/{business-id}/an_placements",
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
                               initWithGraphPath:@"/{business-id}/an_placements"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fan_placements&version=v25.0)

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

A list of AdPlacement nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/an_publisher_blocklist_apps.md -->

## Business An Publisher Blocklist Apps

### Reading

Apps publisher blocklist for AN business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/an_publisher_blocklist_apps HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/an_publisher_blocklist_apps',
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
    "/{business-id}/an_publisher_blocklist_apps",
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
    "/{business-id}/an_publisher_blocklist_apps",
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
                               initWithGraphPath:@"/{business-id}/an_publisher_blocklist_apps"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fan_publisher_blocklist_apps&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `app_ids`<br><br>*array<numeric string>* | List of IDs for which updates are required<br> |

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

A list of AppPublisher nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `an_blocklist_entry_type`<br><br>*enum* | Blocklist entry type - either WHITELISTED or BLACKLISTED<br><br><br>**[default]**<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/an_publisher_blocklist_categories.md -->

## Business An Publisher Blocklist Categories

### Reading

Categories publisher blocklist for AN business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/an_publisher_blocklist_categories HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/an_publisher_blocklist_categories',
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
    "/{business-id}/an_publisher_blocklist_categories",
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
    "/{business-id}/an_publisher_blocklist_categories",
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
                               initWithGraphPath:@"/{business-id}/an_publisher_blocklist_categories"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fan_publisher_blocklist_categories&version=v25.0)

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

A list of ANBlockedBICategory nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `an_blocklist_entry_type`<br><br>*enum* | Blocklist entry type - either WHITELISTED or BLACKLISTED<br><br><br>**[default]**<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/an_publisher_blocklist_domains.md -->

## Business An Publisher Blocklist Domains

### Reading

Domains publisher blocklist for AN business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/an_publisher_blocklist_domains HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/an_publisher_blocklist_domains',
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
    "/{business-id}/an_publisher_blocklist_domains",
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
    "/{business-id}/an_publisher_blocklist_domains",
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
                               initWithGraphPath:@"/{business-id}/an_publisher_blocklist_domains"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fan_publisher_blocklist_domains&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `domain_ids`<br><br>*array<numeric string>* | Returns data only for listed IDs if provided<br> |

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

A list of WebPublisher nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `an_blocklist_entry_type`<br><br>*enum* | Blocklist entry type - either WHITELISTED or BLACKLISTED<br><br><br>**[default]**<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/an_publisher_blocklist_pages.md -->

## Business An Publisher Blocklist Pages

### Reading

Pages publisher blocklist for AN business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/an_publisher_blocklist_pages HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/an_publisher_blocklist_pages',
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
    "/{business-id}/an_publisher_blocklist_pages",
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
    "/{business-id}/an_publisher_blocklist_pages",
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
                               initWithGraphPath:@"/{business-id}/an_publisher_blocklist_pages"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fan_publisher_blocklist_pages&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `page_ids`<br><br>*array<numeric string>* | Returns data only for these IDs if specified<br> |

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

A list of PagePublisher nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `an_blocklist_entry_type`<br><br>*enum* | Blocklist entry type - either WHITELISTED or BLACKLISTED<br><br><br>**[default]**<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/applied_publisher_block_lists.md -->

## Business Applied Publisher Block Lists

### Reading

Publisher Block Lists applied to business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/applied_publisher_block_lists HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/applied_publisher_block_lists',
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
    "/{business-id}/applied_publisher_block_lists",
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
    "/{business-id}/applied_publisher_block_lists",
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
                               initWithGraphPath:@"/{business-id}/applied_publisher_block_lists"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fapplied_publisher_block_lists&version=v25.0)

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/business_asset_groups.md -->

## Business Business Asset Groups

### Reading

Get all business asset groups for a business.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/business_asset_groups HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/business_asset_groups',
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
    "/{business-id}/business_asset_groups",
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
    "/{business-id}/business_asset_groups",
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
                               initWithGraphPath:@"/{business-id}/business_asset_groups"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fbusiness_asset_groups&version=v25.0)

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

A list of BusinessAssetGroup nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | Total number of business asset groups for this business.<br><br><br>**[default]**<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 104 | Incorrect signature |
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/business_invoices.md -->

## Business Business Invoices

### Reading

The monthly invoices sent to the bill-to legal entities associated to a business.

Returns /docs/marketing-api/reference/omega-customer-trx

##### Example

#### HTTP
```
GET /v25.0/{business-id}/business_invoices HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/business_invoices',
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
    "/{business-id}/business_invoices",
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
    "/{business-id}/business_invoices",
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
                               initWithGraphPath:@"/{business-id}/business_invoices"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fbusiness_invoices&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `end_date`<br><br>*string* | **Default value: **`"2026-05-12"`<br>End date for querying invoices by their billing period timestamp.<br><br><br>The billing period timestamp of an invoice is the first day of the month for which we're invoicing (i.e. a June 2021 invoice will have billing period of May 1st, 2021 = 2021-05-01).<br><br><br>Expected date format: YYYY-MM-DD.<br><br><br>Note: end_date is exclusive.<br> |
| `invoice_id`<br><br>*string* | Corresponds to the invoice number (i.e. the "invoice_id" field on the OmegaCustomerTrx node) for a particular invoice/credit memo.<br><br><br>Used to query for a single invoice. If set, all other filter parameters are ignored.<br> |
| `issue_end_date`<br><br>*string* | **Default value: **`"2026-05-12"`<br>End date for querying invoices by the date in which they're issued.<br><br><br>Expected date format: YYYY-MM-DD.<br><br><br>Note: issue_end_date is exclusive.<br> |
| `issue_start_date`<br><br>*string* | Start date for querying invoices by the date in which they're issued.<br><br><br>Expected date format: YYYY-MM-DD.<br><br><br>Note: issue_start_date is inclusive. Also, this parameter must be set in order to query by the issue date.<br> |
| `root_id`<br><br>*int64* | Corresponds to the id (i.e. the "id" field on the OmegaCustomerTrx node) for a particular invoice/credit memo.<br><br><br>Used to query for a single invoice. If set, all other filter parameters are ignored.<br> |
| `start_date`<br><br>*string* | **Default value: **`"First day of 6 months ago"`<br>Start date for querying invoices by their billing period timestamp.<br><br><br>The billing period timestamp of an invoice is the first day of the month for which we're invoicing (i.e. a June 2021 invoice will have billing period of May 1st, 2021 = 2021-05-01).<br><br><br>Expected date format: YYYY-MM-DD.<br><br><br>Note: start_date is exclusive. Also, start_date and end_date have a default value, so if no parameters are set, invoices are queried by the billing period<br> |
| `type`<br><br>*enum {INV, CM, DM, PRO_FORMA}* | Used to query invoices by their type, which can be 'INV': Invoice or 'CM': Credit Memo.<br> |

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

A list of [OmegaCustomerTrx](https://developers.facebook.com/docs/marketing-api/reference/omega-customer-trx) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total_count).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*unsigned int32* | Total number of invoices. To have this field returned, you must include the summary=true parameter and value in your request.<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 104 | Incorrect signature |
| 200 | Permissions error |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/business_users.md -->

## Business Business Users

### Reading

List all business users associated with this business.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/business_users HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/business_users',
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
    "/{business-id}/business_users",
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
    "/{business-id}/business_users",
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
                               initWithGraphPath:@"/{business-id}/business_users"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fbusiness_users&version=v25.0)

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

A list of [BusinessUser](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-user) nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `role`<br><br>*string* | Role name of the user in the business manager. Note that this field only contains base roles including Admin and Employee<br><br><br>**[default]**<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total_count).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*unsigned int32* | Total number of business users associated with this business.<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 104 | Incorrect signature |
| 200 | Permissions error |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 190 | Invalid OAuth 2.0 Access Token |
| 100 | Invalid parameter |

### Creating

**Warning:** Apps can only target businesses (or child businesses of those businesses) that have claimed them.

#### /{business_id}/business_users
You can make a POST request to *business_users* edge from the following paths:

- [/{business_id}/business_users](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/business_users)

When posting to this edge, a [BusinessUser](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-user) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `email`<br><br>*string* | Email of user to be added to this business.<br><br>**[required]**<br> |
| `invited_user_type`<br><br>*array<enum {FB, MWA}>* | Not passing a value will default to 'FB'.<br><br><br>Use 'MWA' for inviting a user with their Meta account managed by their organization.<br> |
| `role`<br><br>*enum {FINANCE_EDITOR, FINANCE_ANALYST, ADS_RIGHTS_REVIEWER, ADMIN, EMPLOYEE, DEVELOPER, PARTNER_CENTER_ADMIN, PARTNER_CENTER_ANALYST, PARTNER_CENTER_OPERATIONS, PARTNER_CENTER_MARKETING, PARTNER_CENTER_EDUCATION, MANAGE, DEFAULT, FINANCE_EDIT, FINANCE_VIEW}* | Role of user to add to this business.<br> |

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
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 100 | Invalid parameter |
| 613 | Calls to this api have exceeded the rate limit. |
| 457 | The session has an invalid origin |
| 190 | Invalid OAuth 2.0 Access Token |
| 415 | Two factor authentication required. User have to enter a code from SMS or TOTP code generator to pass 2fac. This could happen when accessing a 2fac-protected asset like a page that is owned by a 2fac-protected business manager. |
| 200 | Permissions error |
| 370 | Invalid call to update this page |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/china_business_onboarding_attributions.md -->

## Business China Business Onboarding Attributions

### Reading

You can't perform this operation on this endpoint.

### Creating

#### /{business_id}/china_business_onboarding_attributions
You can make a POST request to *china_business_onboarding_attributions* edge from the following paths:

- [/{business_id}/china_business_onboarding_attributions](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/china_business_onboarding_attributions)

When posting to this edge, a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `advertiser_identifier`<br><br>*string* | [Optional] Advertiser identifiers used to analyze the customer acquisition lifecycle<br> |
| `csi`<br><br>*string* | [Optional] Meta generated tracking id<br> |
| `update_token_id`<br><br>*numeric string* | [Optional] ID for the OE Token to be updated. Providing this ID value will result in updating the existing OE Token instead of creating a new OE Token<br> |
| `utm`<br><br>*string* | [Optional] Marketing campaign name<br> |

##### Return Type

```
Struct  {
id: numeric string,
link_with_id: string,
utm: string,
csi: string,
advertiser_identifier: string,
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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/claim_custom_conversions.md -->

## Business Claim Custom Conversions

### Reading

You can't perform this operation on this endpoint.

### Creating

#### /{business_id}/claim_custom_conversions
You can make a POST request to *claim_custom_conversions* edge from the following paths:

- [/{business_id}/claim_custom_conversions](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/claim_custom_conversions)

When posting to this edge, a [CustomConversion](https://developers.facebook.com/docs/marketing-api/reference/custom-conversion) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `custom_conversion_id`<br><br>*numeric string* | Custom conversion ID the business claims.<br><br>**[required]**<br> |

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

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/client_ad_accounts.md -->

## Business Client Ad Accounts

### Reading

This business can access all these client-owned ad accounts.

**Warning:** At the end of September 2024, the `POST /{pixel-id}/shared_accounts` API (including previous versions) will not support sharing of pixels with an ad account, if a business account does not have access to both pixel and ad account. Refer to the [pixel sharing API solution](https://developers.facebook.com/docs/marketing-api/business-asset-management/guides/business-pixel-sharing) to use `POST /{pixel-id}/agencies` or use `POST {ad_account}/agencies` to share into a business account, then use `POST /{pixel-id}/shared_accounts` to link pixel and ad account

##### Example

#### HTTP
```
GET /v25.0/{business-id}/client_ad_accounts HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/client_ad_accounts',
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
    "/{business-id}/client_ad_accounts",
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
    "/{business-id}/client_ad_accounts",
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
                               initWithGraphPath:@"/{business-id}/client_ad_accounts"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fclient_ad_accounts&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `search_query`<br><br>*string* | search_query<br> |

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
| `permitted_tasks`<br><br>*list<string>* | Tasks that are assignable to this ad account<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | Total number of accounts.<br><br><br>**[default]**<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 190 | Invalid OAuth 2.0 Access Token |
| 200 | Permissions error |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 100 | Invalid parameter |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 104 | Incorrect signature |
| 2500 | Error parsing graph query |

### Creating

**Note:** We are temporarily limiting access to this endpoint. Only apps that have successfully called this endpoint within the last 30 days will continue to have access.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/client_apps.md -->

## Business Client Apps

### Reading

This business can access these client-owned apps.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/client_apps HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/client_apps',
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
    "/{business-id}/client_apps",
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
    "/{business-id}/client_apps",
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
                               initWithGraphPath:@"/{business-id}/client_apps"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fclient_apps&version=v25.0)

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
| `permitted_tasks`<br><br>*list<string>* | Tasks that are assignable to users on this asset<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | Total number of apps.<br><br><br>**[default]**<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |

### Creating

#### /{business_id}/client_apps
You can make a POST request to *client_apps* edge from the following paths:

- [/{business_id}/client_apps](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/client_apps)

When posting to this edge, an [Application](https://developers.facebook.com/docs/graph-api/reference/application) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `app_id`<br><br>** | App ID.<br><br>**[required]**<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
access_status: enum,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Updating

You can't perform this operation on this endpoint.

### Deleting

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/client_business_asset_groups.md -->

## Business Client Business Asset Groups

### Reading

BusinessClientBusinessAssetGroups

##### Example

#### HTTP
```
GET /v25.0/{business-id}/client_business_asset_groups HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/client_business_asset_groups',
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
    "/{business-id}/client_business_asset_groups",
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
    "/{business-id}/client_business_asset_groups",
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
                               initWithGraphPath:@"/{business-id}/client_business_asset_groups"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fclient_business_asset_groups&version=v25.0)

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

A list of BusinessAssetGroup nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
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
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/client_instagram_accounts.md -->

## Business Client Instagram Accounts

### Reading

BusinessClientInstagramAccounts

##### Example

#### HTTP
```
GET /v25.0/{business-id}/client_instagram_accounts HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/client_instagram_accounts',
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
    "/{business-id}/client_instagram_accounts",
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
    "/{business-id}/client_instagram_accounts",
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
                               initWithGraphPath:@"/{business-id}/client_instagram_accounts"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fclient_instagram_accounts&version=v25.0)

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

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `permitted_tasks`<br><br>*list<string>* | permitted_tasks<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/client_instagram_assets.md -->

## Business Client Instagram Assets

### Reading

BusinessClientInstagramAssets

##### Example

#### HTTP
```
GET /v25.0/{business-id}/client_instagram_assets HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/client_instagram_assets',
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
    "/{business-id}/client_instagram_assets",
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
    "/{business-id}/client_instagram_assets",
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
                               initWithGraphPath:@"/{business-id}/client_instagram_assets"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fclient_instagram_assets&version=v25.0)

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

A list of [InstagramBusinessAsset](https://developers.facebook.com/docs/graph-api/reference/instagram-business-asset) nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/client_objects.md -->

## Business Client Objects

### Reading

All client objects of the business.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/client_objects HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/client_objects',
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
    "/{business-id}/client_objects",
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
    "/{business-id}/client_objects",
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
                               initWithGraphPath:@"/{business-id}/client_objects"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fclient_objects&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `owner_biz_id`<br><br>*Business ID* | if present filter on owner business of the objects<br> |
| `type`<br><br>*enum {page, profile-plus, ad-account, ad-draft-workspace, product-catalog, app, pixel, system-user, brand, user, project, instagram-account, instagram-account-v2, funding-source, legal-entity, legacy-login, business_request, example-cat, monetization-property, grp-plan, credit-partition, payout-method, ad-study, saved-audience, shared-audience, shared-platform-audience, event-source-group, offline-event-set, ad-image, photo, block-list, finance, ip, credit-partition-config, video-asset, business-unit, page-locations, ad-account-creation-request, reseller_vetting_oe_request, registered-trademark, custom-conversion, leads-access, spaco-ds-data-collection, owned-domain, whatsapp-business-account, whatsapp-business-presence, business-resource-group, hotel-price-fetcher-pull-config, news-page, place_page_set, business-locations-wrapper, sliced-event-source-group, business-creative-asset, business-creative-folder, business-image, business-video, ads-event-source, seller-profile, bank, credit_card, receipt, credential_share_request, advanced-analytics-instance, signal_segment, business_loyalty_program, events-dataset, cloud_playable_asset, creator-seller-profile, caipt-asset, business-franchise-config, events-dataset-and-pixel, events-dataset-new, offsite-email-account, creator-marketplace-brand-profile, signals-event-name, business-payout-account, unknown, messaging_dataset, instagram_business_asset, nme_business_subscription_asset, mv4b-billable-account, marketplace-partner-billable-account, business-person, content-block-list, whatsapp_marketing-message-subscriber-pool, biz-ai-billable-account, threads-account, whatsapp-account, messenger-marketing-message-subscriber-pool}* | type of objects to be returned<br><br>**[required]**<br> |

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

A list of BusinessObject nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `permitted_tasks`<br><br>*list<string>* | Tasks that are assignable to users on this asset<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/client_offsite_signal_container_business_objects.md -->

## Business Client Offsite Signal Container Business Objects

### Reading

BusinessClientOffsiteSignalContainerBusinessObjects

##### Example

#### HTTP
```
GET /v25.0/{business-id}/client_offsite_signal_container_business_objects HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/client_offsite_signal_container_business_objects',
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
    "/{business-id}/client_offsite_signal_container_business_objects",
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
    "/{business-id}/client_offsite_signal_container_business_objects",
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
                               initWithGraphPath:@"/{business-id}/client_offsite_signal_container_business_objects"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fclient_offsite_signal_container_business_objects&version=v25.0)

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

A list of OffsiteSignalContainerBusinessObject nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `permitted_tasks`<br><br>*list<string>* | Tasks that are assignable to users on this asset<br> |

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
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/client_pages.md -->

## Business Client Pages

### Reading

This business has access to these client-owned pages.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/client_pages HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/client_pages',
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
    "/{business-id}/client_pages",
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
    "/{business-id}/client_pages",
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
                               initWithGraphPath:@"/{business-id}/client_pages"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fclient_pages&version=v25.0)

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
| `permitted_tasks`<br><br>*list<string>* | Tasks that are assignable to this page<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | Total number of pages.<br><br><br>**[default]**<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |
| 104 | Incorrect signature |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/client_pixels.md -->

## Business Client Pixels

### Reading

This business has access to these client-owned pixels.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/client_pixels HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/client_pixels',
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
    "/{business-id}/client_pixels",
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
    "/{business-id}/client_pixels",
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
                               initWithGraphPath:@"/{business-id}/client_pixels"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fclient_pixels&version=v25.0)

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
| `permitted_tasks`<br><br>*list<string>* | Tasks that are assignable to users on this asset<br> |

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
| 270 | This Ads API request is not allowed for apps with development access level (Development access is by default for all apps, please request for upgrade). Make sure that the access token belongs to a user that is both admin of the app and admin of the ad account |
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/client_product_catalogs.md -->

## Business Client Product Catalogs

### Reading

This business has access to these client-owned catalogs.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/client_product_catalogs HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/client_product_catalogs',
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
    "/{business-id}/client_product_catalogs",
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
    "/{business-id}/client_product_catalogs",
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
                               initWithGraphPath:@"/{business-id}/client_product_catalogs"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fclient_product_catalogs&version=v25.0)

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
| `permitted_roles`<br><br>*list<string>* | Roles that are assignable to this product catalog<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | Total number of catalogs.<br><br><br>**[default]**<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 100 | Invalid parameter |
| 104 | Incorrect signature |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/client_publisher_block_lists.md -->

## Business Client Publisher Block Lists

### Reading

This business has access to these client-owned publisher block lists.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/client_publisher_block_lists HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/client_publisher_block_lists',
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
    "/{business-id}/client_publisher_block_lists",
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
    "/{business-id}/client_publisher_block_lists",
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
                               initWithGraphPath:@"/{business-id}/client_publisher_block_lists"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fclient_publisher_block_lists&version=v25.0)

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
| `permitted_tasks`<br><br>*list<string>* | Tasks that are assignable to users on this asset<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/client_whatsapp_business_accounts.md -->

## Business Client Whatsapp Business Accounts

### Reading

Get a list of WhatsApp Business Accounts on a Business.

#### Example

Requirements

- whatsapp_business_management permission

- whatsapp_business_messaging permission

- public_profile permission

- BUSINESS ID (also referred to as BUSINESS MANAGER ID in Business Settings)

- ADMIN SYSTEM USER ACCESS TOKEN for the business

Request

#### cURL
```
       curl -i -X GET \
'https://graph.facebook.com/LATEST-VERSION/BUSINESS-ID/client_whatsapp_business_accounts' \
-H 'Authorization: Bearer USER-ACCESS-TOKEN'
```

#### Android SDK
```
GraphRequest request = GraphRequest.newGraphPathRequest(
  accessToken,
  "/BUSINESS-ID/client_whatsapp_business_accounts",
  new GraphRequest.Callback() {
    @Override
    public void onCompleted(GraphResponse response) {
      // Insert your code here
    }
});

request.executeAsync();
```

#### Objective-C
```
            FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
    initWithGraphPath:@"/BUSINESS-ID/client_whatsapp_business_accounts"
           parameters:nil
           HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection, id result, NSError *error) {
    // Insert your code here
}];
```

Response  

```
{
  "data": [
  ]
}
```

Request with Filtering

#### cURL
```
        curl -i -X GET \
"https://graph.facebook.com/LATEST-VERSION/BUSINESS-ID/client_whatsapp_business_accounts \
   ?fields=id,name,ownership_type \
   &filtering=[{'field':'ownership_type', 'operator': 'IN', 'value': ['SELF', 'CLIENT_OWNED']}]" \
-H 'Authorization: Bearer USER-ACCESS-TOKEN'
```

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

A list of [WhatsAppBusinessAccount](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account) nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `permitted_tasks`<br><br>*list<string>* | Tasks that are assignable to users on this asset<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 80008 | There have been too many calls to this WhatsApp Business account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting. |
| 104 | Incorrect signature |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/clients.md -->

## Business Clients

### Reading

List all businesses that gave you access to one or more of their assets.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/clients HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/clients',
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
    "/{business-id}/clients",
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
    "/{business-id}/clients",
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
                               initWithGraphPath:@"/{business-id}/clients"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fclients&version=v25.0)

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
| `adaccount_permissions`<br><br>*list<AdAccountPermission>* | Adaccount_permissions<br><br><br>**[default]**<br> |
| `application_permissions`<br><br>*list<AppPermission>* | Application_permissions<br><br><br>**[default]**<br> |
| `page_permissions`<br><br>*list<PagePermission>* | Page_permissions<br><br><br>**[default]**<br> |
| `productcatalog_permissions`<br><br>*list<ProductCatalogPermission>* | Productcatalog_permissions<br><br><br>**[default]**<br> |
| `shared_ca_count`<br><br>*int32* | Shared_ca_count<br><br><br>**[default]**<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total_count).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*unsigned int32* | Total number of businesses.<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

#### /{business_id}/clients
You can dissociate a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) from a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) by making a DELETE request to [/{business_id}/clients](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/clients).

##### Parameters

| Parameter | Description |
| --- | --- |
| `business`<br><br>*numeric string* | The client's business.<br><br>**[required]**<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/collaborative_ads_collaboration_requests.md -->

## Business Collaborative Ads Collaboration Requests

### Reading

All collaborative ads collaboration requests initiated by the business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/collaborative_ads_collaboration_requests HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/collaborative_ads_collaboration_requests',
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
    "/{business-id}/collaborative_ads_collaboration_requests",
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
    "/{business-id}/collaborative_ads_collaboration_requests",
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
                               initWithGraphPath:@"/{business-id}/collaborative_ads_collaboration_requests"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fcollaborative_ads_collaboration_requests&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `request_role`<br><br>*enum {SENDER, RECEIVER}* | **Default value: **`"SENDER"`<br>Requesting as sender or receiver business<br> |
| `since`<br><br>*datetime/timestamp* | Start time for range of requests<br> |
| `status`<br><br>*string* | status<br> |
| `until`<br><br>*datetime/timestamp* | End time for range of requests<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [CPASCollaborationRequest](https://developers.facebook.com/docs/marketing-api/reference/cpas-collaboration-request) nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/collaborative_ads_suggested_partners.md -->

## Business Collaborative Ads Suggested Partners

### Reading

Suggested [Collaborative Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/collaborative-ads#collaborative-ads) partners for a business.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/collaborative_ads_suggested_partners HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/collaborative_ads_suggested_partners',
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
    "/{business-id}/collaborative_ads_suggested_partners",
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
    "/{business-id}/collaborative_ads_suggested_partners",
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
                               initWithGraphPath:@"/{business-id}/collaborative_ads_suggested_partners"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fcollaborative_ads_suggested_partners&version=v25.0)

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

A list of [CPASAdvertiserPartnershipRecommendation](https://developers.facebook.com/docs/graph-api/reference/cpas-advertiser-partnership-recommendation) nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/commerce_merchant_settings.md -->

## Business Commerce Merchant Settings

### Reading

Commerce Merchant Settings belonging to this business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/commerce_merchant_settings HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/commerce_merchant_settings',
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
    "/{business-id}/commerce_merchant_settings",
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
    "/{business-id}/commerce_merchant_settings",
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
                               initWithGraphPath:@"/{business-id}/commerce_merchant_settings"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fcommerce_merchant_settings&version=v25.0)

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

A list of [CommerceMerchantSettings](https://developers.facebook.com/docs/graph-api/reference/commerce-merchant-settings) nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/content_block_lists.md -->

## Business Content Block Lists

### Reading

Content block lists that this business owns.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/content_block_lists HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/content_block_lists',
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
    "/{business-id}/content_block_lists",
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
    "/{business-id}/content_block_lists",
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
                               initWithGraphPath:@"/{business-id}/content_block_lists"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fcontent_block_lists&version=v25.0)

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

A list of [ContentBlockList](https://developers.facebook.com/docs/graph-api/reference/content-block-list) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | Total count.<br><br><br>**[default]**<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 104 | Incorrect signature |

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/creative_asset_tags.md -->

## Business Creative Asset Tags

### Reading

BusinessCreativeAssetTags

##### Example

#### HTTP
```
GET /v25.0/{business-id}/creative_asset_tags HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/creative_asset_tags',
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
    "/{business-id}/creative_asset_tags",
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
    "/{business-id}/creative_asset_tags",
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
                               initWithGraphPath:@"/{business-id}/creative_asset_tags"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fcreative_asset_tags&version=v25.0)

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

A list of CreativeAssetTag nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/creative_folders.md -->

## Business Creative Folders

### Reading

Returns a list of Business Creative Folders a business can access.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/creative_folders HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/creative_folders',
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
    "/{business-id}/creative_folders",
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
    "/{business-id}/creative_folders",
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
                               initWithGraphPath:@"/{business-id}/creative_folders"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fcreative_folders&version=v25.0)

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
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/creatives.md -->

## Business Creatives

### Reading

Returns a list of Business Image or Business Video objects.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/creatives HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/creatives',
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
    "/{business-id}/creatives",
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
    "/{business-id}/creatives",
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
                               initWithGraphPath:@"/{business-id}/creatives"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fcreatives&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `creative_folder_id`<br><br>*numeric string* | ID of Business Creative Folder<br> |

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

A list of BusinessCreative nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/custom_pivots.md -->

## Business Custom Pivots

### Reading

This edge returns all custom pivots linked to business level.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/custom_pivots HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/custom_pivots',
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
    "/{business-id}/custom_pivots",
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
    "/{business-id}/custom_pivots",
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
                               initWithGraphPath:@"/{business-id}/custom_pivots"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fcustom_pivots&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `creator_id`<br><br>*UID* | creator_id<br> |
| `permission`<br><br>*enum {private, shared}* | permission<br> |
| `saved_report_id`<br><br>*numeric string or integer* | Save report ID<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AdsPivotRules nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |
| 104 | Incorrect signature |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/customconversions.md -->

## Business Customconversions

### Reading

This business has access to these custom conversions.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/customconversions HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/customconversions',
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
    "/{business-id}/customconversions",
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
    "/{business-id}/customconversions",
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
                               initWithGraphPath:@"/{business-id}/customconversions"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fcustomconversions&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `include_archived`<br><br>*boolean* | **Default value: **`true`<br>Include archived custom conversions in results.<br> |

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

A list of [CustomConversion](https://developers.facebook.com/docs/marketing-api/reference/custom-conversion) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | Total number of conversions for this business.<br><br><br>**[default]**<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/event_source_groups.md -->

## Business Event Source Groups

### Reading

Get event source groups owned by this business.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/event_source_groups HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/event_source_groups',
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
    "/{business-id}/event_source_groups",
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
    "/{business-id}/event_source_groups",
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
                               initWithGraphPath:@"/{business-id}/event_source_groups"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fevent_source_groups&version=v25.0)

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

A list of EventSourceGroup nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 270 | This Ads API request is not allowed for apps with development access level (Development access is by default for all apps, please request for upgrade). Make sure that the access token belongs to a user that is both admin of the app and admin of the ad account |
| 200 | Permissions error |
| 100 | Invalid parameter |

### Creating

#### /{business_id}/event_source_groups
You can make a POST request to *event_source_groups* edge from the following paths:

- [/{business_id}/event_source_groups](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/event_source_groups)

When posting to this edge, an [EventSourceGroup](https://developers.facebook.com/docs/graph-api/reference/event-source-group) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `event_sources`<br><br>*list<numeric string or integer>* | Event sources associated with this event source group, such as IDs for pixels.<br><br>**[required]**<br> |
| `name`<br><br>*UTF-8 encoded string* | Name of the event source group.<br><br>**[required]**<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/extendedcredits.md -->

## Business Extended Credits

Represents credit lines that belong to a business.

To find the ID of a business, go to [**Business Manager**](https://business.facebook.com/) > **Business Settings** > **Business Info**. There, you will see information about the business, including the ID.  

### Reading

Fetch extended credit available for this business.

#### Example

Requirements

- whatsapp_business_management permission

- business_management permission

- whatsapp_business_messaging permission

- public_profile permission

- BUSINESS ID (also referred to as BUSINESS MANAGER ID in Business Settings)

- USER ACCESS TOKEN

Request

#### cURL
```
         curl -i -X GET \
"https://graph.facebook.com/LATEST-VERSION/BUSINESS-ID/extendedcredits?access_token=USER-ACCESS-TOKEN"
```

#### Android SDK
```
GraphRequest request = GraphRequest.newGraphPathRequest(
  accessToken,
  "/business-id/extendedcredits",
  new GraphRequest.Callback() {
    @Override
    public void onCompleted(GraphResponse response) {
      // Insert your code here
    }
});

request.executeAsync();
```

#### Objective-C
```
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
    initWithGraphPath:@"/BUSINESS-ID/extendedcredits"
           parameters:nil
           HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection, id result, NSError *error) {
    // Insert your code here
}];
```

Response

```
{
  "data": [
   {
    "id": "EXTENDED-CREDIT-ID"
   }
  ]
}
```

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

A list of [ExtendedCredit](https://developers.facebook.com/docs/marketing-api/reference/extended-credit) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 104 | Incorrect signature |
| 200 | Permissions error |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/finance_permissions.md -->

## Business Finance Permissions

### Reading

Finance permissions of users on business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/finance_permissions HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/finance_permissions',
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
    "/{business-id}/finance_permissions",
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
    "/{business-id}/finance_permissions",
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
                               initWithGraphPath:@"/{business-id}/finance_permissions"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Ffinance_permissions&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `user`<br><br>*UID* | information of a user<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of FinanceObject nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

You can't perform this operation on this endpoint.

### Updating

### Deleting

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/ig_bc_ad_permissions.md -->

## Business Ig Bc Ad Permissions

### Reading

BusinessIGBCAdPermissions

##### Example

#### HTTP
```
GET /v25.0/{business-id}/ig_bc_ad_permissions HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/ig_bc_ad_permissions',
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
    "/{business-id}/ig_bc_ad_permissions",
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
    "/{business-id}/ig_bc_ad_permissions",
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
                               initWithGraphPath:@"/{business-id}/ig_bc_ad_permissions"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fig_bc_ad_permissions&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `brand_instagram_accounts`<br><br>*list<int64>* | Filter the branded content permissions results by the given brand instagram accounts<br> |
| `creator_username`<br><br>*string* | Filter the branded content permissions results by ones that match the given creator username<br> |
| `permission_status`<br><br>*list<int64>* | Used to filter the branded content permissions results by the permission status<br> |

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

A list of IGBCAdsPermission nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `brand_ig_fbid`<br><br>*numeric string* | brand_ig_fbid<br><br><br>**[default]**<br> |
| `brand_ig_user`<br><br>*[IGUser](https://developers.facebook.com/docs/graph-api/reference/shadow-ig-user)* | brand_ig_user<br> |
| `brand_linked_fb_page`<br><br>*[Page](https://developers.facebook.com/docs/graph-api/reference/page)* | brand_linked_fb_page<br> |
| `creator_ig_user`<br><br>*[IGUser](https://developers.facebook.com/docs/graph-api/reference/shadow-ig-user)* | creator_ig_user<br><br><br>**[default]**<br> |
| `creator_linked_fb_page`<br><br>*[Page](https://developers.facebook.com/docs/graph-api/reference/page)* | creator_linked_fb_page<br> |
| `permission_created_time`<br><br>*integer* | permission_created_time<br> |
| `permission_status`<br><br>*integer* | permission_status<br><br><br>**[default]**<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `pending_permission_count`<br><br>*integer* | The count of pending permissions associated with the business<br><br><br>**[default]**<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/images.md -->

## Business Images

### Reading

Get a list of images viewer has access to for this business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/images HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/images',
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
    "/{business-id}/images",
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
    "/{business-id}/images",
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
                               initWithGraphPath:@"/{business-id}/images"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fimages&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `creative_folder_id`<br><br>*numeric string* | ID of the target creative folder<br> |

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

A list of [BusinessImage](https://developers.facebook.com/docs/marketing-api/reference/business-image) nodes.

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
| 190 | Invalid OAuth 2.0 Access Token |
| 100 | Invalid parameter |
| 104 | Incorrect signature |

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/initiated_audience_sharing_requests.md -->

## Business Initiated Audience Sharing Requests

### Reading

These are the audience sharing requests which were initiated by this business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/initiated_audience_sharing_requests HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/initiated_audience_sharing_requests',
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
    "/{business-id}/initiated_audience_sharing_requests",
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
    "/{business-id}/initiated_audience_sharing_requests",
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
                               initWithGraphPath:@"/{business-id}/initiated_audience_sharing_requests"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Finitiated_audience_sharing_requests&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `recipient_id`<br><br>*numeric string* | the id of the recipient business<br> |
| `request_status`<br><br>*enum {APPROVE, DECLINE, IN_PROGRESS, EXPIRED, PENDING, PENDING_INTEGRITY_REVIEW, PENDING_EMAIL_VERIFICATION, CANCELED, MMA_DIRECT_ASSETS_PENDING, MMA_DIRECT_ASSETS_APPROVED, MMA_DIRECT_ASSETS_DECLINED, MMA_DIRECT_ASSETS_EXPIRED}* | the status of the sharing request<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of BusinessAssetSharingAgreement nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `custom_audiences`<br><br>*list<BusinessAssetSharingAgreementSharedAudienceResponseShape>* | Pending custom audiences for sharing agreement<br><br><br>**[default]**<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 104 | Incorrect signature |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/initiated_sharing_agreements.md -->

## Business Initiated Sharing Agreements

**Note:** This endpoint was reintroduced in May 2020. Previously, `/initiated_sharing_agreements` had been deprecated with the launch of [Graph API V6.0](https://developers.facebook.com/docs/graph-api/changelog/2020-02-03-endpoint-deprecations#business).

### Reading

Assets sharing agreements initiated by this business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/initiated_sharing_agreements HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/initiated_sharing_agreements',
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
    "/{business-id}/initiated_sharing_agreements",
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
    "/{business-id}/initiated_sharing_agreements",
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
                               initWithGraphPath:@"/{business-id}/initiated_sharing_agreements"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Finitiated_sharing_agreements&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `receiving_business_id`<br><br>*numeric string or integer* | ReceivingBusinessId<br> |
| `request_status`<br><br>*enum {APPROVE, DECLINE, IN_PROGRESS, EXPIRED, PENDING, PENDING_INTEGRITY_REVIEW, PENDING_EMAIL_VERIFICATION, CANCELED, MMA_DIRECT_ASSETS_PENDING, MMA_DIRECT_ASSETS_APPROVED, MMA_DIRECT_ASSETS_DECLINED, MMA_DIRECT_ASSETS_EXPIRED}* | RequestStatus<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of BusinessAgreement nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/instagram_accounts.md -->

## Business Instagram Accounts

### Reading

This business can access these Instagram accounts.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/instagram_accounts HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/instagram_accounts',
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
    "/{business-id}/instagram_accounts",
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
    "/{business-id}/instagram_accounts",
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
                               initWithGraphPath:@"/{business-id}/instagram_accounts"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Finstagram_accounts&version=v25.0)

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

A list of [IGUser](https://developers.facebook.com/docs/graph-api/reference/shadow-ig-user) nodes.

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

#### /{business_id}/instagram_accounts
You can dissociate a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) from a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) by making a DELETE request to [/{business_id}/instagram_accounts](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/instagram_accounts).

##### Parameters

| Parameter | Description |
| --- | --- |
| `instagram_account`<br><br>*numeric string* | Instagram account ID.<br><br>**[required]**<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/instagram_business_accounts.md -->

## Business Instagram Business Accounts

### Reading

Instagram accounts of a business that have been converted into business instagram accounts. Technically, these accounts have to have a business user representing them

##### Example

#### HTTP
```
GET /v25.0/{business-id}/instagram_business_accounts HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/instagram_business_accounts',
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
    "/{business-id}/instagram_business_accounts",
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
    "/{business-id}/instagram_business_accounts",
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
                               initWithGraphPath:@"/{business-id}/instagram_business_accounts"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Finstagram_business_accounts&version=v25.0)

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
| 100 | Invalid parameter |
| 200 | Permissions error |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/managed_businesses.md -->

## Business Managed Businesses

### Reading

You can't perform this operation on this endpoint.

### Creating

You can't perform this operation on this endpoint.

### Updating

#### /{business_id}/managed_businesses
You can update a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) by making a POST request to [/{business_id}/managed_businesses](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/managed_businesses).

##### Parameters

| Parameter | Description |
| --- | --- |
| `child_business_external_id`<br><br>*string* | child_business_external_id<br> |
| `existing_client_business_id`<br><br>*numeric string* | Existing client business id provided by the client<br> |
| `name`<br><br>*string* | Client business name that's managed by the aggregator business<br> |
| `sales_rep_email`<br><br>*string* | Email of sales representative of the business that's managed by the aggregator business<br> |
| `survey_business_type`<br><br>*enum {AGENCY, ADVERTISER, APP_DEVELOPER, PUBLISHER}* | Business type of surveyed business that's managed by the aggregator business<br> |
| `survey_num_assets`<br><br>*int64* | Number of assets surveyed of business that's managed by the aggregator business<br> |
| `survey_num_people`<br><br>*int64* | Number of people surveyed of business that's managed by the aggregator business<br> |
| `timezone_id`<br><br>*enum {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592}* | Timezone id of business that's managed by the aggregator business<br> |
| `vertical`<br><br>*enum {NOT_SET, ADVERTISING, AUTOMOTIVE, CONSUMER_PACKAGED_GOODS, ECOMMERCE, EDUCATION, ENERGY_AND_UTILITIES, ENTERTAINMENT_AND_MEDIA, FINANCIAL_SERVICES, GAMING, GOVERNMENT_AND_POLITICS, MARKETING, ORGANIZATIONS_AND_ASSOCIATIONS, PROFESSIONAL_SERVICES, RETAIL, TECHNOLOGY, TELECOM, TRAVEL, NON_PROFIT, RESTAURANT, HEALTH, LUXURY, OTHER}* | Business vertical of business that's managed by the aggregator business<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *id* in the return type.

```
Struct  {
id: numeric string,
name: string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 42004 | You couldn't create the client business on behalf your client successfully |
| 200 | Permissions error |
| 100 | Invalid parameter |

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/managed_partner_ads_funding_source_details.md -->

## Business Managed Partner Ads Funding Source Details

### Reading

BusinessManagedPartnerAdsFundingSourceDetails

##### Example

#### HTTP
```
GET /v25.0/{business-id}/managed_partner_ads_funding_source_details HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/managed_partner_ads_funding_source_details',
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
    "/{business-id}/managed_partner_ads_funding_source_details",
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
    "/{business-id}/managed_partner_ads_funding_source_details",
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
                               initWithGraphPath:@"/{business-id}/managed_partner_ads_funding_source_details"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fmanaged_partner_ads_funding_source_details&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `year_quarter`<br><br>*string* | year_quarter<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of FundingSourceDetailsCoupon nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/managed_partner_businesses.md -->

## Business Managed Partner Businesses

### Reading

You can't perform this operation on this endpoint.

### Creating

#### /{business_id}/managed_partner_businesses
You can make a POST request to *managed_partner_businesses* edge from the following paths:

- [/{business_id}/managed_partner_businesses](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/managed_partner_businesses)

When posting to this edge, a [ManagedPartnerBusiness](https://developers.facebook.com/docs/graph-api/reference/managed-partner-business) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `ad_account_currency`<br><br>*string* | ad_account_currency<br> |
| `catalog_id`<br><br>*numeric string* | catalog_id<br><br>**[required]**<br> |
| `child_business_external_id`<br><br>*string* | child_business_external_id<br> |
| `credit_limit`<br><br>*int64* | credit_limit<br> |
| `line_of_credit_id`<br><br>*numeric string* | line_of_credit_id<br> |
| `name`<br><br>*string* | name<br><br>**[required]**<br> |
| `no_ad_account`<br><br>*boolean* | no_ad_account<br> |
| `page_name`<br><br>*string* | page_name<br> |
| `page_profile_image_url`<br><br>*URI* | page_profile_image_url<br> |
| `partner_facebook_page_url`<br><br>*string* | partner_facebook_page_url<br> |
| `partner_registration_countries`<br><br>*array<string>* | partner_registration_countries<br> |
| `sales_rep_email`<br><br>*string* | sales_rep_email<br> |
| `seller_external_website_url`<br><br>*URI* | seller_external_website_url<br><br>**[required]**<br> |
| `seller_targeting_countries`<br><br>*array<string>* | seller_targeting_countries<br><br>**[required]**<br> |
| `skip_partner_page_creation`<br><br>*boolean* | skip_partner_page_creation<br> |
| `survey_business_type`<br><br>*enum {AGENCY, ADVERTISER, APP_DEVELOPER, PUBLISHER}* | survey_business_type<br> |
| `survey_num_assets`<br><br>*int64* | survey_num_assets<br> |
| `survey_num_people`<br><br>*int64* | survey_num_people<br> |
| `timezone_id`<br><br>*enum {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592}* | timezone_id<br> |
| `vertical`<br><br>*enum {NOT_SET, ADVERTISING, AUTOMOTIVE, CONSUMER_PACKAGED_GOODS, ECOMMERCE, EDUCATION, ENERGY_AND_UTILITIES, ENTERTAINMENT_AND_MEDIA, FINANCIAL_SERVICES, GAMING, GOVERNMENT_AND_POLITICS, MARKETING, ORGANIZATIONS_AND_ASSOCIATIONS, PROFESSIONAL_SERVICES, RETAIL, TECHNOLOGY, TELECOM, TRAVEL, NON_PROFIT, RESTAURANT, HEALTH, LUXURY, OTHER}* | vertical<br><br>**[required]**<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *id* in the return type.

```
Struct  {
id: numeric string,
name: string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 1800001 | The vendor ID is already in use |
| 1800002 | The business name does not meet Facebook's business name requirements |
| 100 | Invalid parameter |
| 1800102 | You do not have access to the catalog ID entered |

### Updating

You can't perform this operation on this endpoint.

### Deleting

#### /{business_id}/managed_partner_businesses
You can dissociate a [ManagedPartnerBusiness](https://developers.facebook.com/docs/graph-api/reference/managed-partner-business) from a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) by making a DELETE request to [/{business_id}/managed_partner_businesses](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/managed_partner_businesses).

##### Parameters

| Parameter | Description |
| --- | --- |
| `child_business_external_id`<br><br>*string* | The identifier assigned to the managed partner by the aggregator business<br> |
| `child_business_id`<br><br>*numeric string* | The ID of the managed partner business<br> |

##### Return Type

```
Struct  {
success: bool,
id: numeric string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 1800007 | Unable to find the managed partner business |

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/measurement_reports.md -->

## Business Measurement Reports

### Reading

##### Example

#### HTTP
```
GET /v25.0/{business-id}/measurement_reports HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/measurement_reports',
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
    "/{business-id}/measurement_reports",
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
    "/{business-id}/measurement_reports",
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
                               initWithGraphPath:@"/{business-id}/measurement_reports"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fmeasurement_reports&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `filters`<br><br>*list<Object>* | Filter reports by key-value pairs from metadata<br><br><br>`key` *string*<br>**[required]**<br><br><br>`value` *string*<br>**[required]**<br><br><br>`comparison` *string* |
| `report_type`<br><br>*enum {third_party_mta_report, partner_lift_study_report, mmm_report_v2}* | Filter reports based on the type<br><br>**[required]**<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of MeasurementReport nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/offline_conversion_data_sets.md -->

## Business Offline Conversion Data Sets

### Reading

BusinessOfflineConversionDataSets

##### Example

#### HTTP
```
GET /v25.0/{business-id}/offline_conversion_data_sets HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/offline_conversion_data_sets',
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
    "/{business-id}/offline_conversion_data_sets",
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
    "/{business-id}/offline_conversion_data_sets",
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
                               initWithGraphPath:@"/{business-id}/offline_conversion_data_sets"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Foffline_conversion_data_sets&version=v25.0)

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
| `access_permission`<br><br>*string* | Access permission regarding this data set<br><br><br>**[default]**<br> |
| `access_permission_details`<br><br>*string* | Access permission details regarding this data set<br> |
| `access_type`<br><br>*enum* | "OWNER" if this asset belongs to the referenced business and "AGENCY" if it belongs to the client business, that gave a permission for agency to manage this asset"<br><br><br>**[default]**<br> |
| `is_assigned_to_ad_accounts_in_business`<br><br>*bool* | True if data set is assigned to any ad accounts in given busienss<br><br><br>**[default]**<br> |
| `permitted_roles`<br><br>*list<string>* | Roles given for this asset to the referenced business<br><br><br>**[default]**<br> |

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
| 200 | Permissions error |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/openbridge_configurations.md -->

## Business Openbridge Configurations

### Reading

Read all the openbridge configurations associated to this business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/openbridge_configurations HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/openbridge_configurations',
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
    "/{business-id}/openbridge_configurations",
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
    "/{business-id}/openbridge_configurations",
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
                               initWithGraphPath:@"/{business-id}/openbridge_configurations"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fopenbridge_configurations&version=v25.0)

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
| 190 | Invalid OAuth 2.0 Access Token |
| 200 | Permissions error |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_ad_accounts.md -->

## Business Owned Ad Accounts

### Reading

Information about this business's ad accounts.

**Warning:** At the end of September 2024, the `POST /{pixel-id}/shared_accounts` API (including previous versions) will not support sharing of pixels with an ad account, if a business account does not have access to both pixel and ad account. Refer to the [pixel sharing API solution](https://developers.facebook.com/docs/marketing-api/business-asset-management/guides/business-pixel-sharing) to use `POST /{pixel-id}/agencies` or use `POST {ad_account}/agencies` to share into a business account, then use `POST /{pixel-id}/shared_accounts` to link pixel and ad account

##### Example

#### HTTP
```
GET /v25.0/{business-id}/owned_ad_accounts HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/owned_ad_accounts',
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
    "/{business-id}/owned_ad_accounts",
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
    "/{business-id}/owned_ad_accounts",
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
                               initWithGraphPath:@"/{business-id}/owned_ad_accounts"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fowned_ad_accounts&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `search_query`<br><br>*string* | search_query<br> |

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

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | Total number of accounts for this business.<br><br><br>**[default]**<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 190 | Invalid OAuth 2.0 Access Token |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 200 | Permissions error |
| 104 | Incorrect signature |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |
| 2500 | Error parsing graph query |

### Creating

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

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_apps.md -->

## Business Owned Apps

### Reading

List all apps owned by this business.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/owned_apps HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/owned_apps',
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
    "/{business-id}/owned_apps",
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
    "/{business-id}/owned_apps",
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
                               initWithGraphPath:@"/{business-id}/owned_apps"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fowned_apps&version=v25.0)

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

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 100 | Invalid parameter |

### Creating

#### /{business_id}/owned_apps
You can make a POST request to *owned_apps* edge from the following paths:

- [/{business_id}/owned_apps](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_apps)

When posting to this edge, an [Application](https://developers.facebook.com/docs/graph-api/reference/application) will be created.

##### Parameters

This endpoint doesn't have any parameters.

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
| 200 | Permissions error |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_businesses.md -->

## Business Owned Businesses

### Reading

The client businesses owned.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/owned_businesses HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/owned_businesses',
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
    "/{business-id}/owned_businesses",
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
    "/{business-id}/owned_businesses",
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
                               initWithGraphPath:@"/{business-id}/owned_businesses"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fowned_businesses&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `child_business_external_id`<br><br>*string* | ID defined upon creation by 3P app caller. Used to store custom id as key for lookup using a key defined by the app developer.<br> |
| `client_user_id`<br><br>*UID* | System User from Login ID or User from Login ID. This is the user that was used to create the child buisness<br> |

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
| `relationship`<br><br>*[BusinessAggregatorRelationship](https://developers.facebook.com/docs/graph-api/reference/business-aggregator-relationship)* | relationship<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 200 | Permissions error |
| 104 | Incorrect signature |

### Creating

**Note:** To create other Business Managers, your business needs to obtain `BUSINESS_MANAGEMENT` during the [app review process](https://developers.facebook.com/docs/apps/review). If your app is in development mode, you can surpass this requirement, but to create only two child businesses.

#### /{business_id}/owned_businesses
You can make a POST request to *owned_businesses* edge from the following paths:

- [/{business_id}/owned_businesses](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_businesses)

When posting to this edge, a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `child_business_external_id`<br><br>*string* | (Optional) An external id that allows you to specify a key for your app to identify the child business. You should query for child businesses using this id because the list API is indexed on this field.<br> |
| `name`<br><br>*string* | (Required) Name of entity for displaying.  It should match the public name of your business or organization, since it will be visible across Meta. It can't contain special characters.<br><br>**[required]**<br> |
| `page_permitted_tasks` This field is only accessible in v3.3 or later.<br><br>*array<enum {MANAGE, CREATE_CONTENT, MODERATE, MESSAGING, ADVERTISE, ANALYZE, MODERATE_COMMUNITY, MANAGE_JOBS, PAGES_MESSAGING, PAGES_MESSAGING_SUBSCRIPTIONS, READ_PAGE_MAILBOXES, VIEW_MONETIZATION_INSIGHTS, MANAGE_LEADS, PROFILE_PLUS_FULL_CONTROL, PROFILE_PLUS_MANAGE, PROFILE_PLUS_FACEBOOK_ACCESS, PROFILE_PLUS_CREATE_CONTENT, PROFILE_PLUS_MODERATE, PROFILE_PLUS_MODERATE_DELEGATE_COMMUNITY, PROFILE_PLUS_MESSAGING, PROFILE_PLUS_ADVERTISE, PROFILE_PLUS_ANALYZE, PROFILE_PLUS_REVENUE, PROFILE_PLUS_MANAGE_LEADS, CASHIER_ROLE, GLOBAL_STRUCTURE_MANAGEMENT, PROFILE_PLUS_GLOBAL_STRUCTURE_MANAGEMENT}>* | (Required) page_permitted_tasks<br> |
| `shared_page_id`<br><br>*numeric string* | (Required) shared_page_id<br> |
| `timezone_id`<br><br>*enum {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592}* | timezone_id<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node represented by *id* in the return type.

```
Struct  {
id: numeric string,
name: string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 3913 | It doesn't look like you have permission to create a new Business Manager. |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 100 | Invalid parameter |
| 3947 | You are trying to create a Business Manager with the same name as one you are already a part of. Please pick a different name. |
| 3974 | The name you chose for this Business Manager is not valid. Try a different name. |

### Updating

You can't perform this operation on this endpoint.

### Deleting

**Note:** In order to delete a child Business Manager that has a line of credit, ensure that all ad accounts on it have been switched over to a different payment method in Business Manager. All prior monthly invoices must be fully paid, and the new payment method must be able to pay existing balances, if any.

#### /{business_id}/owned_businesses
You can dissociate a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) from a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) by making a DELETE request to [/{business_id}/owned_businesses](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_businesses).

##### Parameters

| Parameter | Description |
| --- | --- |
| `client_id`<br><br>*numeric string* | ID of the Child Business you want to delete<br><br>**[required]**<br> |

##### Return Type

```
Struct  {
success: bool,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 3912 | There was a technical issue and the changes you made to your Business Manager weren't saved. Please try again. |
| 100 | Invalid parameter |

### Error Codes

| Error | Description |
| --- | --- |
| 1752089 | A User Can Only Create One Business Account At One Time |
| 1690091 | The name provided is not valid. Consider using {business_name} instead. [Learn more about choosing a name.](https://www.facebook.com/help/519912414718764) |
| 1690090 | The name you chose for this Business Manager is not valid. Please choose another. [Learn more about choosing a name.](https://www.facebook.com/help/519912414718764) |
| 1690062 | The name provided is already in use. Please choose a different name. [Learn more about choosing a name.](https://www.facebook.com/help/519912414718764) |
| 1690111 | Your payment account is disabled |
| 1690138 | To create a business using a primary page, you must be an admin of that page. |
| 1690165 | This aggregator business already has an existing client business associated with this user |
| 1690232 | Businesses Do Not Have Primary Pages: Please ensure all Business Managers have a unique Primary Page ID and try again. |
| 1404163 | Your Advertising Access is Restricted: You're no longer allowed to use Facebook Products to advertise. You can't run ads, manage advertising assets or create new ad or business accounts. [Learn More](https://www.facebook.com/accountquality/advertising_access?enforcement=1) |
| 1404006 | Sorry, this feature isn't available right now: An error occurred while processing this request. Please try again later. |
| 1752089 | Can Only Create One Business Account At One Time: A User Can Only Create One Business Account At One Time |
| 2859040 | Action not allowed: You are attempting to create a new Client Business Manager with a shared_page_id owned by a disallowed_business. |
| 1690192 | App is not owned or shared by a business: App must exist and be owned or shared to aggregator business to create client businesses |

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_custom_conversions.md -->

## Business Owned Custom Conversions

### Reading

Custom Conversions owned by this business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/owned_custom_conversions HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/owned_custom_conversions',
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
    "/{business-id}/owned_custom_conversions",
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
    "/{business-id}/owned_custom_conversions",
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
                               initWithGraphPath:@"/{business-id}/owned_custom_conversions"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fowned_custom_conversions&version=v25.0)

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

A list of [CustomConversion](https://developers.facebook.com/docs/marketing-api/reference/custom-conversion) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_domains.md -->

## Business Owned Domains

### Reading

Domains owned by this business.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/owned_domains HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/owned_domains',
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
    "/{business-id}/owned_domains",
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
    "/{business-id}/owned_domains",
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
                               initWithGraphPath:@"/{business-id}/owned_domains"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fowned_domains&version=v25.0)

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

A list of OwnedDomain nodes.

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_instagram_accounts.md -->

## Business Owned Instagram Accounts

### Reading

Instagram accounts owned by this business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/owned_instagram_accounts HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/owned_instagram_accounts',
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
    "/{business-id}/owned_instagram_accounts",
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
    "/{business-id}/owned_instagram_accounts",
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
                               initWithGraphPath:@"/{business-id}/owned_instagram_accounts"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fowned_instagram_accounts&version=v25.0)

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
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 190 | Invalid OAuth 2.0 Access Token |
| 100 | Invalid parameter |
| 200 | Permissions error |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_instagram_assets.md -->

## Business Owned Instagram Assets

### Reading

BusinessOwnedInstagramAssets

##### Example

#### HTTP
```
GET /v25.0/{business-id}/owned_instagram_assets HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/owned_instagram_assets',
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
    "/{business-id}/owned_instagram_assets",
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
    "/{business-id}/owned_instagram_assets",
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
                               initWithGraphPath:@"/{business-id}/owned_instagram_assets"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fowned_instagram_assets&version=v25.0)

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

A list of [InstagramBusinessAsset](https://developers.facebook.com/docs/graph-api/reference/instagram-business-asset) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |
| 2500 | Error parsing graph query |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_offsite_signal_container_business_objects.md -->

## Business Owned Offsite Signal Container Business Objects

### Reading

Owned Offsite Signal Container Business Objects under Business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/owned_offsite_signal_container_business_objects HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/owned_offsite_signal_container_business_objects',
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
    "/{business-id}/owned_offsite_signal_container_business_objects",
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
    "/{business-id}/owned_offsite_signal_container_business_objects",
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
                               initWithGraphPath:@"/{business-id}/owned_offsite_signal_container_business_objects"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fowned_offsite_signal_container_business_objects&version=v25.0)

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

A list of OffsiteSignalContainerBusinessObject nodes.

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
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_pages.md -->

## Business Owned Pages

### Reading

Get all Facebook pages owned by this business.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/owned_pages HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/owned_pages',
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
    "/{business-id}/owned_pages",
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
    "/{business-id}/owned_pages",
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
                               initWithGraphPath:@"/{business-id}/owned_pages"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fowned_pages&version=v25.0)

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

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | Total number of pages for this business.<br><br><br>**[default]**<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |
| 104 | Incorrect signature |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 100 | Invalid parameter |
| 80002 | There have been too many calls to this Instagram account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting. |

### Creating

#### /{business_id}/owned_pages
You can make a POST request to *owned_pages* edge from the following paths:

- [/{business_id}/owned_pages](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_pages)

When posting to this edge, a [Page](https://developers.facebook.com/docs/graph-api/reference/page) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `entry_point`<br><br>*string* | entry point of claiming BusinessClaimAssetEntryPoint<br> |
| `page_id`<br><br>*Page ID* | Page ID.<br><br>**[required]**<br> |

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
| 3944 | Your Business Manager already has access to this object. |
| 3977 | To claim a Page in Business Manager, you must already be an Admin of the Page. |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 190 | Invalid OAuth 2.0 Access Token |
| 415 | Two factor authentication required. User have to enter a code from SMS or TOTP code generator to pass 2fac. This could happen when accessing a 2fac-protected asset like a page that is owned by a 2fac-protected business manager. |
| 100 | Invalid parameter |
| 42001 | This Page can't be removed because it's already linked to an Instagram business profile. To remove this Page from Business Manager, go to Instagram and convert to a personal account or change the Page linked to your business profile. |
| 200 | Permissions error |
| 413 | Invalid password |
| 3982 | You do not have sufficient permissions to import this asset into the given Business Manager. |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_pixels.md -->

## Business Owned Pixels

### Reading

Pixels the business owns.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/owned_pixels HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/owned_pixels',
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
    "/{business-id}/owned_pixels",
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
    "/{business-id}/owned_pixels",
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
                               initWithGraphPath:@"/{business-id}/owned_pixels"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fowned_pixels&version=v25.0)

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

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 100 | Invalid parameter |
| 270 | This Ads API request is not allowed for apps with development access level (Development access is by default for all apps, please request for upgrade). Make sure that the access token belongs to a user that is both admin of the app and admin of the ad account |
| 190 | Invalid OAuth 2.0 Access Token |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_product_catalogs.md -->

## Business Owned Product Catalogs

### Reading

Product catalogs owned by this business.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/owned_product_catalogs HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/owned_product_catalogs',
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
    "/{business-id}/owned_product_catalogs",
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
    "/{business-id}/owned_product_catalogs",
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
                               initWithGraphPath:@"/{business-id}/owned_product_catalogs"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fowned_product_catalogs&version=v25.0)

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

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 100 | Invalid parameter |
| 80009 | There have been too many calls to this Catalog account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting. |
| 190 | Invalid OAuth 2.0 Access Token |
| 104 | Incorrect signature |

### Creating

#### /{business_id}/owned_product_catalogs
You can make a POST request to *owned_product_catalogs* edge from the following paths:

- [/{business_id}/owned_product_catalogs](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_product_catalogs)

When posting to this edge, a [ProductCatalog](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/product-catalog) will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `additional_vertical_option`<br><br>*enum {LOCAL_DA_CATALOG, LOCAL_PRODUCTS}* | Additional catalog configurations that does not introduce either new verticals or subverticals<br> |
| `business_metadata`<br><br>*JSON object* | business_metadata<br><br><br>`page_id` *numeric string*<br>page_id<br><br>**[required]**<br><br><br>`external_business_id` *string*<br>external_business_id<br> |
| `catalog_segment_filter`<br><br>*A JSON-encoded rule* | Provide filter for catalog to create a catalog segment.<br> |
| `da_display_settings`<br><br>*Object* | Dynamic Ads display settings.<br><br><br>`carousel_ad` *Object*<br>**[required]**<br><br><br>`transformation_type` *enum{background_cropping_and_padding, background_padding, none}*<br>**[required]**<br><br><br>`single_ad` *Object*<br>**[required]**<br><br><br>`transformation_type` *enum{background_cropping_and_padding, background_padding, none}*<br>**[required]**<br> |
| `destination_catalog_settings`<br><br>*JSON object* | Destination catalog settings.<br><br><br>`generate_items_from_pages` *boolean*<br><br>**Default value: **`false` |
| `flight_catalog_settings`<br><br>*JSON object* | Flight catalog settings.<br><br><br>`generate_items_from_events` *boolean*<br><br>**Default value: **`false` |
| `name`<br><br>*UTF-8 encoded string* | Name of the catalog.<br><br>**[required]**<br> |
| `parent_catalog_id`<br><br>*numeric string or integer* | Parent catalog ID.<br> |
| `partner_integration`<br><br>*JSON object* | Partner integration settings<br><br><br>`external_access_token` *string*<br>External access token<br><br><br>`external_merchant_id` *string*<br>External merchant identifier<br> |
| `store_catalog_settings`<br><br>*JSON object* | Store catalog settings.<br><br><br>`page_id` *numeric string*<br>page_id<br><br>**[required]**<br> |
| `vertical`<br><br>*enum {adoptable_pets, apps_and_software, articles_and_publications, commerce, destinations, flights, generic, home_listings, hotels, local_service_businesses, media_titles, offer_items, services, offline_commerce, transactable_items, vehicles}* | **Default value: **`commerce`<br>The catalog's industry or vertical, such as `commerce`.<br> |

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
| 190 | Invalid OAuth 2.0 Access Token |
| 804 | Specified object already exists |
| 102 | Session key invalid or no longer valid |
| 200 | Permissions error |
| 2310019 | The business of this catalog is not onboarded to Collaborative Ads |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_publisher_block_lists.md -->

## Business Owned Publisher Block Lists

### Reading

The Publisher Block Lists that the Business owns

##### Example

#### HTTP
```
GET /v25.0/{business-id}/owned_publisher_block_lists HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/owned_publisher_block_lists',
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
    "/{business-id}/owned_publisher_block_lists",
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
    "/{business-id}/owned_publisher_block_lists",
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
                               initWithGraphPath:@"/{business-id}/owned_publisher_block_lists"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fowned_publisher_block_lists&version=v25.0)

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/owned_whatsapp_business_accounts.md -->

## Business Owned Whatsapp Business Accounts

Represents a collection of [WhatsApp Business Accounts](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account) owned by a business.

To find the ID of a business, go to [**Business Manager**](https://business.facebook.com/) > **Business Settings** > **Business Info**. There, you will see information about the business, including the ID.  

### Reading

Get a list of [WhatsApp Business Accounts](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account) owned by this business. Supports [filtering](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/manage-accounts#filter-wabas-by-creation-time) and [sorting](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/manage-accounts#sort-wabas-by-creation-time).

#### Example

Requirements

- whatsapp_business_management permission

- business_management permission

- whatsapp_business_messaging permission

- public_profile permission

- BUSINESS ID (also referred to as BUSINESS MANAGER ID in Business Settings)

- ADMIN SYSTEM USER ACCESS TOKEN for the business

Request

#### cURL
```
        curl -i -X GET \
'https://graph.facebook.com/LATEST-VERSION/BUSINESS-ID/owned_whatsapp_business_accounts' \
 -H 'Authorization: Bearer USER-ACCESS-TOKEN'
```

#### Android SDK
```
GraphRequest request = GraphRequest.newGraphPathRequest(
  accessToken,
  "/BUSINESS-ID/owned_whatsapp_business_accounts",
  new GraphRequest.Callback() {
    @Override
    public void onCompleted(GraphResponse response) {
      // Insert your code here
    }
});

request.executeAsync();
```

#### Objective-C
```
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
    initWithGraphPath:@"/BUSINESS-ID/owned_whatsapp_business_accounts"
           parameters:nil
           HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection, id result, NSError *error) {
    // Insert your code here
}];
```

Response

```
{
  "data": [
    {
      "id": "WHATSAPP-BUSINESS-ACCOUNT-ID",
      "name": "Test WhatsApp Business Account",
      "timezone_id": "1",
      "message_template_namespace": "MESSAGE-TEMPLATE-NAMESPACE"
    }
  ],
  "paging": {
    "cursors": {
      "before": "BEFORE-CURSOR",
      "after": "AFTER-CURSOR"
    }
  }
}
```

Request with Filtering

#### cURL
```
       curl -i -X GET \
"https://graph.facebook.com/LATEST-VERSION/BUSINESS-ID/owned_whatsapp_business_accounts \
?fields=id,name,creation_time \
&filtering=[{'field':'creation_time', 'operator': 'IN_RANGE', 'value': ['1569783261', '1604542049']}]"
 -H 'Authorization: Bearer USER-ACCESS-TOKEN'
```

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

A list of [WhatsAppBusinessAccount](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 190 | Invalid OAuth 2.0 Access Token |
| 104 | Incorrect signature |
| 80008 | There have been too many calls to this WhatsApp Business account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting. |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/pages.md -->

## Business Pages

### Reading

You can't perform this operation on this endpoint.

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

#### /{business_id}/pages
You can dissociate a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) from a [Business](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business) by making a DELETE request to [/{business_id}/pages](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/pages).

##### Parameters

| Parameter | Description |
| --- | --- |
| `page_id`<br><br>*Page ID* | Page ID.<br><br>**[required]**<br> |

##### Return Type

```
Struct  {
success: bool,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 42001 | This Page can't be removed because it's already linked to an Instagram business profile. To remove this Page from Business Manager, go to Instagram and convert to a personal account or change the Page linked to your business profile. |
| 200 | Permissions error |
| 3996 | The page does not belong to this Business Manager. |
| 415 | Two factor authentication required. User have to enter a code from SMS or TOTP code generator to pass 2fac. This could happen when accessing a 2fac-protected asset like a page that is owned by a 2fac-protected business manager. |
| 100 | Invalid parameter |

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/parent_advertiser_infos.md -->

## Business Parent Advertiser Infos

### Reading

BusinessParentAdvertiserInfos

##### Example

#### HTTP
```
GET /v25.0/{business-id}/parent_advertiser_infos HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/parent_advertiser_infos',
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
    "/{business-id}/parent_advertiser_infos",
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
    "/{business-id}/parent_advertiser_infos",
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
                               initWithGraphPath:@"/{business-id}/parent_advertiser_infos"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fparent_advertiser_infos&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `ad_account_id`<br><br>*numeric string or integer* | ad_account_id<br> |
| `parent_advertiser_id`<br><br>*string* | parent_advertiser_id<br> |
| `user_id`<br><br>*numeric string or integer* | user_id<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of ALMEndAdvertiserInfo nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/partner_account_linking.md -->

## Business Partner Account Linking

### Reading

get partner_account_linking for specific business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/partner_account_linking HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/partner_account_linking',
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
    "/{business-id}/partner_account_linking",
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
    "/{business-id}/partner_account_linking",
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
                               initWithGraphPath:@"/{business-id}/partner_account_linking"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fpartner_account_linking&version=v25.0)

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

A list of [PartnerAccountLinking](https://developers.facebook.com/docs/graph-api/reference/partner-account-linking) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/partner_center_export_files.md -->

## Business Partner Center Export Files

### Reading

PartnerCenterExportFiles

##### Example

#### HTTP
```
GET /v25.0/{business-id}/partner_center_export_files HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/partner_center_export_files',
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
    "/{business-id}/partner_center_export_files",
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
    "/{business-id}/partner_center_export_files",
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
                               initWithGraphPath:@"/{business-id}/partner_center_export_files"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fpartner_center_export_files&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `report_ds`<br><br>*ISO 8601 Date* | report_ds<br> |
| `report_type`<br><br>*enum {REVENUE, DISABLED_AD_ACCOUNTS, PROMOTABLE_OBJECTS_CONSISTENCY_VIOLATION_AD_ACCOUNTS, AEM_OPPORTUNITIES, RESELLER_PARTITION_CREDIT_ACCOUNTS_DAILY_SUMMARY, RESELLER_PARTITION_CREDIT_ACCOUNTS_DAILY_STATUS_SUMMARY, CAPI_OPPORTUNITIES, RESELLER_REBATE_PRODUCT_ADOPTION_REPORT_QTD, RESELLER_REBATE_PRODUCT_ADOPTION_REPORT_1D, RESELLER_REBATE_PRODUCT_ADOPTION_REPORT_7D, DISAPPROVED_ADS_1D, DISAPPROVED_ADS_7D, DISAPPROVED_ADS_QTD, DISABLED_AD_ACCOUNTS_1D, DISABLED_AD_ACCOUNTS_7D, DISABLED_AD_ACCOUNTS_QTD}* | report_type<br><br>**[required]**<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": []
}
```

###### data

A list of PartnerCenterExportFile nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/partner_relationships.md -->

## Business Partner Relationships

### Reading

The edge to describe the relationship of all the partner businesses which is connected to given business.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/partner_relationships HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/partner_relationships',
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
    "/{business-id}/partner_relationships",
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
    "/{business-id}/partner_relationships",
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
                               initWithGraphPath:@"/{business-id}/partner_relationships"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fpartner_relationships&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `exclude_declined_requests`<br><br>*boolean* | Exclude the partner requests which are already declined.<br> |

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
| `relationship`<br><br>*list<BusinessPartnerRelationshipType>* | Relationship data<br><br><br>**[default]**<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `filtered_total_count`<br><br>*int32* | Filtered total number of objects on this edge<br><br><br>**[default]**<br> |
| `total_count`<br><br>*int32* | Total number of objects on this edge<br><br><br>**[default]**<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/partners.md -->

## Business Partners

### Reading

Other businesses which work with this business as partners.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/partners HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/partners',
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
    "/{business-id}/partners",
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
    "/{business-id}/partners",
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
                               initWithGraphPath:@"/{business-id}/partners"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fpartners&version=v25.0)

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

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `filtered_total_count`<br><br>*int32* | Filtered total number of objects on this edge<br><br><br>**[default]**<br> |
| `total_count`<br><br>*int32* | Total number of objects on this edge<br><br><br>**[default]**<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/pending_client_ad_accounts.md -->

## Business Pending Client Ad Accounts

### Reading

The business requested access to these ad accounts and is still waiting for approval by a client.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/pending_client_ad_accounts HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/pending_client_ad_accounts',
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
    "/{business-id}/pending_client_ad_accounts",
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
    "/{business-id}/pending_client_ad_accounts",
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
                               initWithGraphPath:@"/{business-id}/pending_client_ad_accounts"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fpending_client_ad_accounts&version=v25.0)

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

A list of BusinessAdAccountRequest nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `permitted_tasks`<br><br>*list<string>* | Tasks that are assignable to users on this asset<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |
| 100 | Invalid parameter |
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/pending_client_apps.md -->

## Business Pending Client Apps

### Reading

The business requested access to these client apps waits for approval.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/pending_client_apps HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/pending_client_apps',
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
    "/{business-id}/pending_client_apps",
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
    "/{business-id}/pending_client_apps",
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
                               initWithGraphPath:@"/{business-id}/pending_client_apps"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fpending_client_apps&version=v25.0)

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

A list of BusinessApplicationRequest nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `is_requested`<br><br>*bool* | True if the business requested access to the app and false if the app is being shared to the business<br> |
| `permitted_tasks`<br><br>*list<string>* | permitted_tasks<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/pending_client_pages.md -->

## Business Pending Client Pages

### Reading

The business requested access to these pages and waits for client approval.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/pending_client_pages HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/pending_client_pages',
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
    "/{business-id}/pending_client_pages",
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
    "/{business-id}/pending_client_pages",
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
                               initWithGraphPath:@"/{business-id}/pending_client_pages"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fpending_client_pages&version=v25.0)

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

A list of BusinessPageRequest nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `permitted_tasks`<br><br>*list<string>* | permitted_tasks<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/pending_offline_conversion_data_sets.md -->

## Business Pending Offline Conversion Data Sets

### Reading

Api end point to get pending OfflineConversionDataSets in a Business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/pending_offline_conversion_data_sets HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/pending_offline_conversion_data_sets',
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
    "/{business-id}/pending_offline_conversion_data_sets",
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
    "/{business-id}/pending_offline_conversion_data_sets",
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
                               initWithGraphPath:@"/{business-id}/pending_offline_conversion_data_sets"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fpending_offline_conversion_data_sets&version=v25.0)

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/pending_owned_ad_accounts.md -->

## Business Pending Owned Ad Accounts

### Reading

This business requested ownership of these ad accounts. And the requests are still pending approval.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/pending_owned_ad_accounts HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/pending_owned_ad_accounts',
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
    "/{business-id}/pending_owned_ad_accounts",
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
    "/{business-id}/pending_owned_ad_accounts",
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
                               initWithGraphPath:@"/{business-id}/pending_owned_ad_accounts"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fpending_owned_ad_accounts&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

This endpoint doesn't have any parameters.

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"summary": {}
}
```

###### data

A list of BusinessAdAccountRequest nodes.

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | Total number of accounts.<br><br><br>**[default]**<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/pending_owned_pages.md -->

## Business Pending Owned Pages

### Reading

This business requested ownership for these pages. The requests are still pending approval.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/pending_owned_pages HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/pending_owned_pages',
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
    "/{business-id}/pending_owned_pages",
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
    "/{business-id}/pending_owned_pages",
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
                               initWithGraphPath:@"/{business-id}/pending_owned_pages"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fpending_owned_pages&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

This endpoint doesn't have any parameters.

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"summary": {}
}
```

###### data

A list of BusinessPageRequest nodes.

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | Total number of pages.<br><br><br>**[default]**<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/pending_shared_offsite_signal_container_business_objects.md -->

## Business Pending Shared Offsite Signal Container Business Objects

### Reading

BusinessPendingSharedOffsiteSignalContainerBusinessObjects

##### Example

#### HTTP
```
GET /v25.0/{business-id}/pending_shared_offsite_signal_container_business_objects HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/pending_shared_offsite_signal_container_business_objects',
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
    "/{business-id}/pending_shared_offsite_signal_container_business_objects",
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
    "/{business-id}/pending_shared_offsite_signal_container_business_objects",
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
                               initWithGraphPath:@"/{business-id}/pending_shared_offsite_signal_container_business_objects"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fpending_shared_offsite_signal_container_business_objects&version=v25.0)

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

A list of OffsiteSignalContainerBusinessObject nodes.

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
| 368 | The action attempted has been deemed abusive or is otherwise disallowed |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/pending_shared_pixels.md -->

## Business Pending Shared Pixels

### Reading

The pixels that the business has received sharing request and is pending for approval

##### Example

#### HTTP
```
GET /v25.0/{business-id}/pending_shared_pixels HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/pending_shared_pixels',
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
    "/{business-id}/pending_shared_pixels",
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
    "/{business-id}/pending_shared_pixels",
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
                               initWithGraphPath:@"/{business-id}/pending_shared_pixels"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fpending_shared_pixels&version=v25.0)

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
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/pending_users.md -->

## Business Pending Users

### Reading

List all users invited to access this business, who have not yet accepted their invitation.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/pending_users HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/pending_users',
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
    "/{business-id}/pending_users",
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
    "/{business-id}/pending_users",
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
                               initWithGraphPath:@"/{business-id}/pending_users"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fpending_users&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `email`<br><br>*string* | Email of person invited to access this business.<br> |

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

A list of [BusinessRoleRequest](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-role-request) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | Total number of objects on this edge.<br><br><br>**[default]**<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/preverified_numbers.md -->

## Business Preverified Numbers

Represents a collection of [WhatsApp Business Pre-Verified Phone Numbers](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-pre-verified-phone-number) on a business. See [Pre-Verified Phone Numbers](https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/pre-verified-numbers).

### Reading

Get a list of [WhatsApp Business Pre-Verified Phone Numbers](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-pre-verified-phone-number) on a business.

#### Requirements

| Type | Description |
| --- | --- |
| [Access Token](https://developers.facebook.com/documentation/facebook-login/guides/access-tokens) | [User](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#user-access-tokens) or [System User](https://developers.facebook.com/documentation/business-messaging/whatsapp/access-tokens#system-user-access-tokens) |
| [Permissions](https://developers.facebook.com/docs/permissions/reference) | [business_management](https://developers.facebook.com/docs/permissions#b) |

#### Request Syntax

```http
GET https://graph.facebook.com/<API_VERSION>/<BUSINESS_ACCOUNT_ID>/preverified_numbers
  ?fields=<FIELDS>
```

#### Path Parameters

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<API_VERSION>` | **Optional.**<br><br>API [version](https://developers.facebook.com/docs/graph-api/guides/versioning). | v27.0 |
| `<BUSINESS_ACCOUNT_ID>` | Business account ID. | `506914307656634` |

#### Query String Parameters

| Placeholder | Description | Sample Value |
| --- | --- | --- |
| `<FIELDS>` | **Optional.**<br><br>A comma-separated list of [fields](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-pre-verified-phone-number#fields) you want returned on each WhatsApp Business Pre-Verified Phone Number in the result set. | `phone_number,code_verification_time,code_verification_status,verification_expiry_time` |

#### Response

A collection of [WhatsApp Business Pre-Verified Phone Numbers](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-pre-verified-phone-number) and their default fields on the business.

```json
{
  "data": [
    {
      "phone_number": "<PHONE_NUMBER>",
      "code_verification_status": "<CODE_VERIFICATION_STATUS>",
      "verification_expiry_time": "<VERIFICATION_EXPIRY_TIME>",
      "id": "<ID>"
    },
    ...
  ],
  "paging": {
    "cursors": {
      "before": "QVFIU...",
      "after": "QVFIU..."
    }
  }
}
```

#### Sample Request

```curl
curl -X GET 'https://graph.facebook.com/v27.0/506914307656634/preverified_numbers' \
-H 'Authorization: Bearer EAAJB...'
```

#### Sample Response

```json
{
  "data": [
    {
      "phone_number": "+1 211-555-5105",
      "code_verification_status": "VERIFIED",
      "verification_expiry_time": "2023-04-14T22:12:31+0000",
      "id": "5745365898905902"
    },
    {
      "phone_number": "+1 211-555-7165",
      "code_verification_status": "VERIFIED",
      "verification_expiry_time": "2023-04-14T22:10:57+0000",
      "id": "9010077509033461"
    },
    ...
  ],
  "paging": {
    "cursors": {
      "before": "QVFIU...",
      "after": "QVFIU..."
    }
  }
}
```

##### Parameters

| Parameter | Description |
| --- | --- |
| `code_verification_status`<br><br>*enum {VERIFIED, NOT_VERIFIED, EXPIRED}* | Indicates verification status. Values can be:<br><br><br>• `EXPIRED` — Phone number number was verified more than 14 days ago.<br>• `NOT_VERIFIED` — Phone number has never been verified.<br>• `VERIFIED` — Phone number number was verified in the last 14 days.<br> |
| `phone_number`<br><br>*string* | The business pre-verified phone number's display phone number.<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [WhatsAppBusinessPreVerifiedPhoneNumber](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-pre-verified-phone-number) nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/publisher_block_lists.md -->

## Business Publisher Block Lists

### Reading

This business has access to these publisher block lists.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/publisher_block_lists HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/publisher_block_lists',
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
    "/{business-id}/publisher_block_lists",
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
    "/{business-id}/publisher_block_lists",
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
                               initWithGraphPath:@"/{business-id}/publisher_block_lists"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fpublisher_block_lists&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `search_query`<br><br>*string* | Search Query containing the block list name to filter<br> |
| `sort_by`<br><br>*enum {BLOCK_LIST_NAME_ASCENDING, BLOCK_LIST_NAME_DESCENDING, LAST_UPDATED_ASCENDING, LAST_UPDATED_DESCENDING}* | **Default value: **`"LAST_UPDATED_DESCENDING"`<br>Sort type for block lists<br> |

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

A list of [PublisherBlockList](https://developers.facebook.com/docs/marketing-api/reference/publisher-block-list) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | the number of publisher block lists owned by the business<br><br><br>**[default]**<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/received_audience_permissions.md -->

## Business Received Audience Permissions

### Reading

These are the shared audiences which were received by this business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/received_audience_permissions HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/received_audience_permissions',
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
    "/{business-id}/received_audience_permissions",
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
    "/{business-id}/received_audience_permissions",
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
                               initWithGraphPath:@"/{business-id}/received_audience_permissions"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Freceived_audience_permissions&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `partner_id`<br><br>*numeric string* | The business you have received shared audiences from.<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AudiencePermission nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/received_audience_sharing_requests.md -->

## Business Received Audience Sharing Requests

### Reading

These are the audience sharing requests which are received by this business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/received_audience_sharing_requests HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/received_audience_sharing_requests',
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
    "/{business-id}/received_audience_sharing_requests",
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
    "/{business-id}/received_audience_sharing_requests",
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
                               initWithGraphPath:@"/{business-id}/received_audience_sharing_requests"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Freceived_audience_sharing_requests&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `initiator_id`<br><br>*numeric string* | The id of the initiator business<br> |
| `request_status`<br><br>*enum {APPROVE, DECLINE, IN_PROGRESS, EXPIRED, PENDING, PENDING_INTEGRITY_REVIEW, PENDING_EMAIL_VERIFICATION, CANCELED, MMA_DIRECT_ASSETS_PENDING, MMA_DIRECT_ASSETS_APPROVED, MMA_DIRECT_ASSETS_DECLINED, MMA_DIRECT_ASSETS_EXPIRED}* | The status of the request<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of BusinessAssetSharingAgreement nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `custom_audiences`<br><br>*list<BusinessAssetSharingAgreementSharedAudienceResponseShape>* | Pending custom audiences for sharing agreement<br><br><br>**[default]**<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/received_inprogress_onbehalf_requests.md -->

## Business Received Inprogress Onbehalf Requests

### Reading

IN_PROGRESS on behalf requests received by the business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/received_inprogress_onbehalf_requests HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/received_inprogress_onbehalf_requests',
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
    "/{business-id}/received_inprogress_onbehalf_requests",
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
    "/{business-id}/received_inprogress_onbehalf_requests",
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
                               initWithGraphPath:@"/{business-id}/received_inprogress_onbehalf_requests"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Freceived_inprogress_onbehalf_requests&version=v25.0)

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

A list of BusinessOwnedObjectOnBehalfOfRequest nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/received_inprogress_transfer_ownership_agreements.md -->

## Business Received Inprogress Transfer Ownership Agreements

### Reading

BusinessReceivedInProgressTransferOwnershipAgreements

##### Example

#### HTTP
```
GET /v25.0/{business-id}/received_inprogress_transfer_ownership_agreements HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/received_inprogress_transfer_ownership_agreements',
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
    "/{business-id}/received_inprogress_transfer_ownership_agreements",
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
    "/{business-id}/received_inprogress_transfer_ownership_agreements",
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
                               initWithGraphPath:@"/{business-id}/received_inprogress_transfer_ownership_agreements"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Freceived_inprogress_transfer_ownership_agreements&version=v25.0)

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

A list of BusinessObjectTransferOwnershipAgreement nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 190 | Invalid OAuth 2.0 Access Token |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/received_sharing_agreements.md -->

## Business Received Sharing Agreements

**Note:** This endpoint was reintroduced in May 2020. Previously, `/received_sharing_agreements` had been deprecated with the launch of [Graph API V6.0](https://developers.facebook.com/docs/graph-api/changelog/2020-02-03-endpoint-deprecations#business).

### Reading

Assets sharing agreements received by this business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/received_sharing_agreements HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/received_sharing_agreements',
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
    "/{business-id}/received_sharing_agreements",
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
    "/{business-id}/received_sharing_agreements",
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
                               initWithGraphPath:@"/{business-id}/received_sharing_agreements"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Freceived_sharing_agreements&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `request_status`<br><br>*enum {APPROVE, DECLINE, IN_PROGRESS, EXPIRED, PENDING, PENDING_INTEGRITY_REVIEW, PENDING_EMAIL_VERIFICATION, CANCELED, MMA_DIRECT_ASSETS_PENDING, MMA_DIRECT_ASSETS_APPROVED, MMA_DIRECT_ASSETS_DECLINED, MMA_DIRECT_ASSETS_EXPIRED}* | RequestStatus<br> |
| `requesting_business_id`<br><br>*numeric string or integer* | RequestingBusinessId<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of BusinessAgreement nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/reseller_events.md -->

## Business Reseller Events

### Reading

reseller_events

##### Example

#### HTTP
```
GET /v25.0/{business-id}/reseller_events HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/reseller_events',
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
    "/{business-id}/reseller_events",
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
    "/{business-id}/reseller_events",
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
                               initWithGraphPath:@"/{business-id}/reseller_events"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Freseller_events&version=v25.0)

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

A list of ALMEvent nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/reseller_guidances.md -->

## Business Reseller Guidances

### Reading

Guidance data for a China reseller

##### Example

#### HTTP
```
GET /v25.0/{business-id}/reseller_guidances HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/reseller_guidances',
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
    "/{business-id}/reseller_guidances",
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
    "/{business-id}/reseller_guidances",
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
                               initWithGraphPath:@"/{business-id}/reseller_guidances"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Freseller_guidances&version=v25.0)

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

A list of ResellerGuidance nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/resellervettingrequests.md -->

## Business Resellervettingrequests

### Reading

Vetting requests from clients under a reseller

##### Example

#### HTTP
```
GET /v25.0/{business-id}/resellervettingrequests HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/resellervettingrequests',
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
    "/{business-id}/resellervettingrequests",
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
    "/{business-id}/resellervettingrequests",
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
                               initWithGraphPath:@"/{business-id}/resellervettingrequests"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fresellervettingrequests&version=v25.0)

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

A list of ChinaBusinessOnboardingVettingRequest nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/salesrights_inventory_management.md -->

## Business Salesrights Inventory Management

### Reading

SalesRightsInventoryManagement

##### Example

#### HTTP
```
GET /v25.0/{business-id}/salesrights_inventory_management HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/salesrights_inventory_management',
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
    "/{business-id}/salesrights_inventory_management",
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
    "/{business-id}/salesrights_inventory_management",
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
                               initWithGraphPath:@"/{business-id}/salesrights_inventory_management"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fsalesrights_inventory_management&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `age_buckets`<br><br>*array<string>* | age_buckets<br><br>**[required]**<br> |
| `countries`<br><br>*array<string>* | countries<br> |
| `frequency_cap`<br><br>*JSON object* | frequency_cap<br><br><br>`maxImpressions` *int64*<br>maxImpressions<br><br>**[required]**<br><br><br>`numTimeUnits` *int64*<br>numTimeUnits<br><br>**[required]**<br><br><br>`timeUnit` *enum {UNKNOWN, MINUTE, HOUR, DAY, WEEK, MONTH, LIFETIME, POD, STREAM}*<br>timeUnit<br><br>**[required]**<br> |
| `genders`<br><br>*array<string>* | genders<br><br>**[required]**<br> |
| `page_ids`<br><br>*array<numeric string>* | page_ids<br><br>**[required]**<br> |
| `since`<br><br>*datetime/timestamp* | since<br><br>**[required]**<br> |
| `until`<br><br>*datetime/timestamp* | until<br><br>**[required]**<br> |
| `version`<br><br>*int64* | **Default value: **`2`<br>version<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [SalesRightsInventoryManagement](https://developers.facebook.com/docs/graph-api/reference/sales-rights-inventory-management) nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/self_certified_whatsapp_business_submissions.md -->

## Business Self Certified Whatsapp Business Submissions

### Reading

Get a list of WhatsApp Business Partner-Client Verification Submissions submitted by a business.

##### Parameters

| Parameter | Description |
| --- | --- |
| `end_business_id`<br><br>*numeric string* | End client business ID.<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [WhatsAppBusinessPartnerClientVerificationSubmission](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-partner-client-verification-submission) nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/self_certify_whatsapp_business.md -->

## Business Self Certify Whatsapp Business

This endpoint allows **Select Solution** and **Premier** Solution Partners to submit an onboarded business customer's business for business verification.

See [Partner-led Business Verification](https://developers.facebook.com/documentation/business-messaging/whatsapp/solution-providers/partner-led-business-verification).

### Reading

You can't perform this operation on this endpoint.

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/sent_inprogress_onbehalf_requests.md -->

## Business Sent Inprogress Onbehalf Requests

### Reading

IN_PROGRESS on behalf requests sent by the business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/sent_inprogress_onbehalf_requests HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/sent_inprogress_onbehalf_requests',
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
    "/{business-id}/sent_inprogress_onbehalf_requests",
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
    "/{business-id}/sent_inprogress_onbehalf_requests",
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
                               initWithGraphPath:@"/{business-id}/sent_inprogress_onbehalf_requests"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fsent_inprogress_onbehalf_requests&version=v25.0)

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

A list of BusinessOwnedObjectOnBehalfOfRequest nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/share_preverified_numbers.md -->

## Business Share Preverified Numbers

### Reading

You can't perform this operation on this endpoint.

### Creating

You can't perform this operation on this endpoint.

### Updating

### Deleting

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/shared_audience_permissions.md -->

## Business Shared Audience Permissions

### Reading

These are the shared audiences which were initiated by this business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/shared_audience_permissions HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/shared_audience_permissions',
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
    "/{business-id}/shared_audience_permissions",
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
    "/{business-id}/shared_audience_permissions",
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
                               initWithGraphPath:@"/{business-id}/shared_audience_permissions"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fshared_audience_permissions&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `partner_id`<br><br>*numeric string or integer* | The business you have shared audiences with.<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of AudiencePermission nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/sso_migrated_business_users.md -->

## Business Sso Migrated Business Users

### Reading

BusinessSSOMigratedBusinessUsers

##### Example

#### HTTP
```
GET /v25.0/{business-id}/sso_migrated_business_users HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/sso_migrated_business_users',
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
    "/{business-id}/sso_migrated_business_users",
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
    "/{business-id}/sso_migrated_business_users",
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
                               initWithGraphPath:@"/{business-id}/sso_migrated_business_users"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fsso_migrated_business_users&version=v25.0)

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

A list of [BusinessUser](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-user) nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `role`<br><br>*string* | Role name of the user in the business manager. Note that this field only contains base roles including Admin and Employee<br><br><br>**[default]**<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total_count).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*unsigned int32* | number of users<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/sso_unmigrated_business_users.md -->

## Business Sso Unmigrated Business Users

### Reading

BusinessSSOUnmigratedBusinessUsers

##### Example

#### HTTP
```
GET /v25.0/{business-id}/sso_unmigrated_business_users HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/sso_unmigrated_business_users',
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
    "/{business-id}/sso_unmigrated_business_users",
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
    "/{business-id}/sso_unmigrated_business_users",
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
                               initWithGraphPath:@"/{business-id}/sso_unmigrated_business_users"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fsso_unmigrated_business_users&version=v25.0)

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

A list of [BusinessUser](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business-user) nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `role`<br><br>*string* | Role name of the user in the business manager. Note that this field only contains base roles including Admin and Employee<br><br><br>**[default]**<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total_count).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*unsigned int32* | number of users<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/system_user_access_tokens.md -->

## Business System User Access Tokens

### Reading

You can't perform this operation on this endpoint.

### Creating

#### /{business_id}/system_user_access_tokens
You can make a POST request to *system_user_access_tokens* edge from the following paths:

- [/{business_id}/system_user_access_tokens](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/system_user_access_tokens)

When posting to this edge, no Graph object will be created.

##### Parameters

| Parameter | Description |
| --- | --- |
| `asset`<br><br>*array<int64>* | asset<br> |
| `fetch_only`<br><br>*boolean* | fetch_only<br> |
| `scope`<br><br>*List<Permission>* | scope<br> |
| `set_token_expires_in_60_days`<br><br>*boolean* | set_token_expires_in_60_days<br> |
| `system_user_id`<br><br>*int64* | system_user_id<br> |

##### Return Type

This endpoint supports [read-after-write](https://developers.facebook.com/docs/graph-api/overview#read-after-write) and will read the node to which you POSTed.

```
Struct  {
access_token: string,
}
```

##### Error Codes

| Error Code | Description |
| --- | --- |
| 3962 | Provided permission is not valid. Check your spelling and syntax. |
| 452 | Session key invalid. This could be because the session key has an incorrect format, or because the user has revoked this session |
| 200 | Permissions error |

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/system_users.md -->

## Business System Users

### Reading

List all system users for this business.

##### Example

#### HTTP
```
GET /v25.0/{business-id}/system_users HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/system_users',
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
    "/{business-id}/system_users",
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
    "/{business-id}/system_users",
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
                               initWithGraphPath:@"/{business-id}/system_users"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fsystem_users&version=v25.0)

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

A list of [SystemUser](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/system-user) nodes.

The following fields will be added to each node that is returned:

| Field | Description |
| --- | --- |
| `role`<br><br>*string* | Role name of the user in the business manager. Note that this field only contains base roles including Admin and Employee<br><br><br>**[default]**<br> |

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

###### summary

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=total_count).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*unsigned int32* | Total number of system users for this business.<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |
| 104 | Incorrect signature |
| 100 | Invalid parameter |

### Creating

**Warning:** Apps can only target businesses (or child businesses of those businesses) that have claimed them.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/third_party_partner_lift_requests.md -->

## Business Third Party Partner Lift Requests

### Reading

BusinessThirdPartyPartnerLiftRequests

##### Example

#### HTTP
```
GET /v25.0/{business-id}/third_party_partner_lift_requests HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/third_party_partner_lift_requests',
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
    "/{business-id}/third_party_partner_lift_requests",
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
    "/{business-id}/third_party_partner_lift_requests",
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
                               initWithGraphPath:@"/{business-id}/third_party_partner_lift_requests"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fthird_party_partner_lift_requests&version=v25.0)

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

A list of [ThirdPartyPartnerLiftRequest](https://developers.facebook.com/docs/graph-api/reference/third-party-partner-lift-request) nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/third_party_partner_panel_recurring_requests.md -->

## Business Third Party Partner Panel Recurring Requests

### Reading

Retrieve all existing panel recurring requests related to a business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/third_party_partner_panel_recurring_requests HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/third_party_partner_panel_recurring_requests',
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
    "/{business-id}/third_party_partner_panel_recurring_requests",
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
    "/{business-id}/third_party_partner_panel_recurring_requests",
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
                               initWithGraphPath:@"/{business-id}/third_party_partner_panel_recurring_requests"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fthird_party_partner_panel_recurring_requests&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `cadence`<br><br>*string* | Optional filter on the request cadence.<br><br><br>Cadence has the form "+[quantity] [day\|week\|month]"<br><br><br>Valid input examples:<br><br><br>• cadence=+1 day<br>• cadence='+1 day'<br> |
| `country`<br><br>*array<string>* | Optional filter on the request country.<br><br><br>From a valid ISO2 country codes (2-letter).<br><br><br>Can enter a single country or an array of countries. The array filter is a set contains, e.g. if a business has a request with country 'US', a request with country 'GB', and has filter country=['US', 'GB'], then both requests will be returned.<br><br><br>Valid input examples:<br><br><br>• country=US<br><br>• country=['US', 'GB']<br><br><br><br>Invalid input examples:<br><br><br>• country='US'<br><br>• country=[US, GB]<br><br> |
| `description`<br><br>*string* | Optional filter on the request description.<br><br><br>This is a case-insensitive, substring search on the field.<br><br><br>Ex: Suppose we have 3 requests with descriptions of:<br><br><br>• "my test study #1"<br><br>• "my test study #2"<br><br>• "my test study #3".<br><br><br><br>Then both of the following filters will return all 3 requests:<br><br><br>• description=test study<br><br>• description='test study'<br><br> |
| `end_time`<br><br>*JSON object* | Optional filter on the request end time (unix-timestamp).<br><br><br>For comparisons (comp => function):<br><br><br>• 'EQ' => 'equals'<br><br>• 'GT => 'greater than'<br><br>• 'GEQ' => 'greater than or equals'<br><br>• 'LT' => 'less than'<br><br>• 'LEQ' => 'less than or equals'<br><br><br><br>end_time={'comp': [comp], 'ts': [ts]}<br><br><br>Ex: end_time={'comp': 'GEQ', 'ts': 1684972800}<br>which is end_time <= 1684972800<br><br><br>For comp 'BW' => 'between'<br><br><br>end_time={'comp': 'BW', 'ts': [ts], 'ts2': [ts2]}<br><br><br>Ex: end_time={'comp': 'BW', 'ts': 1684972800, 'ts2': 1685145599}<br>which is 1684972800 <= end_time <= 1685145599<br><br><br>`comp` *enum {BW, EQ, GEQ, GT, LEQ, LT}*<br>comp<br><br>**[required]**<br><br><br>`ts` *datetime/timestamp*<br>ts<br><br>**[required]**<br><br><br>`ts2` *datetime/timestamp*<br>ts2<br> |
| `owner_instance_id`<br><br>*array<numeric string>* | Optional filter on the request owner instance ID.<br><br><br>From a valid instance ID.<br><br><br>Can enter a single instance ID or an array of instance ID. The array filter is a set contains, e.g. if a business has a request with instance ID 1234, a request with instance ID 5678, and has filter owner_instance_id =[1234, 5678], then both requests will be returned.<br><br><br>Valid input examples:<br><br><br>• owner_instance_id=1234<br><br>• owner_instance_id=[1234, 5678]<br><br>• owner_instance_id=['1234', '5678']<br><br><br><br>Invalid input examples:<br><br><br>• owner_instance_id='1234'<br> |
| `owner_panel_id`<br><br>*array<numeric string>* | Optional filter on the request owner panel ID.<br><br><br>From a valid panel ID.<br><br><br>Can enter a single panel ID or an array of panel ID. The array filter is a set contains, e.g. if a business has a request with panel ID 4321, a request with panel ID 8765, and has filter owner_panel_id =[4321, 8765], then both requests will be returned.<br><br><br>If this filter is used in conjunction with owner_panel_name, it will filter out panels based on the union of the owner_panel_id's and owner_panel_name's, e.g. for a panel (id, name), if a business has a request with panel (4321, 'alpha') and a request with panel (8765, 'omega'), and has filters owner_panel_id=4321 and owner_panel_name='omega', then both requests will be returned.<br><br><br>Valid input examples:<br><br><br>• owner_panel_id=4321<br><br>• owner_panel_id=[4321, 8765]<br><br>• owner_panel_id=['4321', '8765']<br><br><br><br>Invalid input examples:<br><br><br>• owner_panel_id='4321'<br> |
| `owner_panel_name`<br><br>*array<string>* | Optional filter on the request owner panel name.<br><br><br>This is a case-insensitive, substring search on the field.<br><br><br>Ex: Suppose we have 3 panels with descriptions of:<br><br><br>• "my test panel 1"<br><br>• "my test panel 2"<br><br>• "my test panel 3".<br><br><br><br>Then the following filters will both return all 3 requests:<br><br><br>• owner_panel_name=test panel<br><br>• owner_panel_name='test panel'<br><br><br><br>Can enter a single panel name or an array of panel names. The array filter is a set contains,, e.g. if a business has a request with panel name 'alpha', a request with panel name 'omega', and has filter owner_panel_name =['alpha', 'omega'], then both requests will be returned.<br><br><br>If this filter is used in conjunction with owner_panel_name, it will filter out panels based on the union of the owner_panel_id's and owner_panel_name's, e.g. for a panel (id, name), if a business has a request with panel (4321, 'alpha') and a request with panel (8765, 'omega'), and has filters owner_panel_id=4321 and owner_panel_name='omega', then both requests will be returned.<br><br><br>Valid input examples:<br><br><br>• owner_panel_name=test panel 1<br><br>• owner_panel_name='test panel 1'<br><br>• owner_panel_name=['test panel 1', 'test panel 2']<br><br><br><br>Invalid input examples:<br><br><br>• owner_panel_name=[test panel 1, test panel 2]<br> |
| `start_time`<br><br>*JSON object* | Optional filter on the request start time (unix-timestamp).<br><br><br>For comparisons (comp => function):<br><br><br>• 'EQ' => 'equals'<br><br>• 'GT => 'greater than'<br><br>• 'GEQ' => 'greater than or equals'<br><br>• 'LT' => 'less than'<br><br>• 'LEQ' => 'less than or equals'<br><br><br><br>start_time={'comp': [comp], 'ts': [ts]}<br><br><br>Ex: start_time={'comp': 'GEQ', 'ts': 1684972800}<br>which is start_time <= 1684972800<br><br><br>For comp 'BW' => 'between'<br><br><br>start_time={'comp': 'BW', 'ts': [ts], 'ts2': [ts2]}<br><br><br>Ex: start_time={'comp': 'BW', 'ts': 1684972800, 'ts2': 1685145599}<br>which is 1684972800 <= start_time <= 1685145599<br><br><br>`comp` *enum {BW, EQ, GEQ, GT, LEQ, LT}*<br>comp<br><br>**[required]**<br><br><br>`ts` *datetime/timestamp*<br>ts<br><br>**[required]**<br><br><br>`ts2` *datetime/timestamp*<br>ts2<br> |
| `status`<br><br>*array<enum {CANCELLED, CREATED, FINISHED, ONGOING}>* | Optional filter on the request status.<br><br><br>From the set { CANCELLED, CREATED, FINISHED, ONGOING }<br><br><br>Can enter a single study type or an array of statuses. The array filter is a set contains, e.g. if a business has a request with 'CREATED', a request with 'FINISHED', and has filter status=['CREATED', 'FINISHED'], then both requests will be returned.<br><br><br>Valid input examples:<br><br><br>• status=CREATED<br><br>• status=['CREATED', 'FINISHED']<br><br><br><br>Invalid input examples:<br><br><br>• country='CREATED'<br><br>• country=[CREATED, FINISHED]<br><br> |
| `study_type`<br><br>*array<enum {BRAND_LIFT, PANEL_SALES_ATTRIBUTION, REACH}>* | Optional filter on the request study type.<br><br><br>From the set { BRAND_LIFT, PANEL_SALES_ATTRIBUTION, REACH }<br><br><br>Can enter a single study type or an array of study types. The array filter is a set contains, e.g. if a business has a request with study type 'BRAND_LIFT', a request with study type 'REACH', and has filter study_type=['BRAND_LIFT', 'REACH'], then both requests will be returned.<br><br><br>Valid input examples:<br><br><br>• study_type=BRAND_LIFT<br><br>• study_type=['BRAND_LIFT', 'REACH']<br><br><br><br>Invalid input examples:<br><br><br>• study_type='BRAND_LIFT'<br><br>• study_type=[BRAND_LIFT, REACH]<br><br> |
| `submitted_time`<br><br>*JSON object* | Optional filter on the request submission time (unix-timestamp).<br><br><br>For comparisons (comp => function):<br><br><br>• 'EQ' => 'equals'<br><br>• 'GT => 'greater than'<br><br>• 'GEQ' => 'greater than or equals'<br><br>• 'LT' => 'less than'<br><br>• 'LEQ' => 'less than or equals'<br><br><br><br>submitted_time={'comp': [comp], 'ts': [ts]}<br><br><br>Ex: submitted_time={'comp': 'GEQ', 'ts': 1684972800}<br>which is submitted_time <= 1684972800<br><br><br>For comp 'b/w' => 'between'<br><br><br>submitted_time={'comp': 'BW', 'ts': [ts], 'ts2': [ts2]}<br><br><br>Ex: submitted_time={'comp': 'BW', 'ts': 1684972800, 'ts2': 1685145599}<br>which is 1684972800 <= submitted_time <= 1685145599<br><br><br>`comp` *enum {BW, EQ, GEQ, GT, LEQ, LT}*<br>comp<br><br>**[required]**<br><br><br>`ts` *datetime/timestamp*<br>ts<br><br>**[required]**<br><br><br>`ts2` *datetime/timestamp*<br>ts2<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [ThirdPartyPartnerPanelScheduled](https://developers.facebook.com/docs/graph-api/reference/third-party-partner-panel-scheduled) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 100 | Invalid parameter |

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/third_party_partner_panel_requests.md -->

## Business Third Party Partner Panel Requests

### Reading

Retrieve all existing panel study requests related to a business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/third_party_partner_panel_requests HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/third_party_partner_panel_requests',
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
    "/{business-id}/third_party_partner_panel_requests",
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
    "/{business-id}/third_party_partner_panel_requests",
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
                               initWithGraphPath:@"/{business-id}/third_party_partner_panel_requests"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fthird_party_partner_panel_requests&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `country`<br><br>*array<string>* | Optional filter on the request country.<br><br><br>From a valid ISO2 country codes (2-letter).<br><br><br>Can enter a single country or an array of countries. The array filter is a set contains, e.g. if a business has a request with country 'US', a request with country 'GB', and has filter country=['US', 'GB'], then both requests will be returned.<br><br><br>Valid input examples:<br><br><br>• country=US<br><br>• country=['US', 'GB']<br><br><br><br>Invalid input examples:<br><br><br>• country='US'<br><br>• country=[US, GB]<br><br> |
| `description`<br><br>*string* | Optional filter on the request description.<br><br><br>This is a case-insensitive, substring search on the field.<br><br><br>Ex: Suppose we have 3 requests with descriptions of:<br><br><br>• "my test study #1"<br><br>• "my test study #2"<br><br>• "my test study #3".<br><br><br><br>Then both of the following filters will return all 3 requests:<br><br><br>• description=test study<br><br>• description='test study'<br><br> |
| `end_time`<br><br>*JSON object* | Optional filter on the request end time (unix-timestamp).<br><br><br>For comparisons (comp => function):<br><br><br>• 'EQ' => 'equals'<br><br>• 'GT => 'greater than'<br><br>• 'GEQ' => 'greater than or equals'<br><br>• 'LT' => 'less than'<br><br>• 'LEQ' => 'less than or equals'<br><br><br><br>end_time={'comp': [comp], 'ts': [ts]}<br><br><br>Ex: end_time={'comp': 'GEQ', 'ts': 1684972800}<br>which is end_time <= 1684972800<br><br><br>For comp 'BW' => 'between'<br><br><br>end_time={'comp': 'BW', 'ts': [ts], 'ts2': [ts2]}<br><br><br>Ex: end_time={'comp': 'BW', 'ts': 1684972800, 'ts2': 1685145599}<br>which is 1684972800 <= end_time <= 1685145599<br><br><br>`comp` *enum {BW, EQ, GEQ, GT, LEQ, LT}*<br>comp<br><br>**[required]**<br><br><br>`ts` *datetime/timestamp*<br>ts<br><br>**[required]**<br><br><br>`ts2` *datetime/timestamp*<br>ts2<br> |
| `owner_instance_id`<br><br>*array<numeric string>* | Optional filter on the request owner instance ID.<br><br><br>From a valid instance ID.<br><br><br>Can enter a single instance ID or an array of instance ID. The array filter is a set contains, e.g. if a business has a request with instance ID 1234, a request with instance ID 5678, and has filter owner_instance_id =[1234, 5678], then both requests will be returned.<br><br><br>Valid input examples:<br><br><br>• owner_instance_id=1234<br><br>• owner_instance_id=[1234, 5678]<br><br>• owner_instance_id=['1234', '5678']<br><br><br><br>Invalid input examples:<br><br><br>• owner_instance_id='1234'<br> |
| `owner_panel_id`<br><br>*array<numeric string>* | Optional filter on the request owner panel ID.<br><br><br>From a valid panel ID.<br><br><br>Can enter a single panel ID or an array of panel ID. The array filter is a set contains, e.g. if a business has a request with panel ID 4321, a request with panel ID 8765, and has filter owner_panel_id =[4321, 8765], then both requests will be returned.<br><br><br>If this filter is used in conjunction with owner_panel_name, it will filter out panels based on the union of the owner_panel_id's and owner_panel_name's, e.g. for a panel (id, name), if a business has a request with panel (4321, 'alpha') and a request with panel (8765, 'omega'), and has filters owner_panel_id=4321 and owner_panel_name='omega', then both requests will be returned.<br><br><br>Valid input examples:<br><br><br>• owner_panel_id=4321<br><br>• owner_panel_id=[4321, 8765]<br><br>• owner_panel_id=['4321', '8765']<br><br><br><br>Invalid input examples:<br><br><br>• owner_panel_id='4321'<br> |
| `owner_panel_name`<br><br>*array<string>* | Optional filter on the request owner panel name.<br><br><br>This is a case-insensitive, substring search on the field.<br><br><br>Ex: Suppose we have 3 panels with descriptions of:<br><br><br>• "my test panel 1"<br><br>• "my test panel 2"<br><br>• "my test panel 3".<br><br><br><br>Then the following filters will both return all 3 requests:<br><br><br>• owner_panel_name=test panel<br><br>• owner_panel_name='test panel'<br><br><br><br>Can enter a single panel name or an array of panel names. The array filter is a set contains,, e.g. if a business has a request with panel name 'alpha', a request with panel name 'omega', and has filter owner_panel_name =['alpha', 'omega'], then both requests will be returned.<br><br><br>If this filter is used in conjunction with owner_panel_name, it will filter out panels based on the union of the owner_panel_id's and owner_panel_name's, e.g. for a panel (id, name), if a business has a request with panel (4321, 'alpha') and a request with panel (8765, 'omega'), and has filters owner_panel_id=4321 and owner_panel_name='omega', then both requests will be returned.<br><br><br>Valid input examples:<br><br><br>• owner_panel_name=test panel 1<br><br>• owner_panel_name='test panel 1'<br><br>• owner_panel_name=['test panel 1', 'test panel 2']<br><br><br><br>Invalid input examples:<br><br><br>• owner_panel_name=[test panel 1, test panel 2]<br> |
| `start_time`<br><br>*JSON object* | Optional filter on the request start time (unix-timestamp).<br><br><br>For comparisons (comp => function):<br><br><br>• 'EQ' => 'equals'<br><br>• 'GT => 'greater than'<br><br>• 'GEQ' => 'greater than or equals'<br><br>• 'LT' => 'less than'<br><br>• 'LEQ' => 'less than or equals'<br><br><br><br>start_time={'comp': [comp], 'ts': [ts]}<br><br><br>Ex: start_time={'comp': 'GEQ', 'ts': 1684972800}<br>which is start_time <= 1684972800<br><br><br>For comp 'BW' => 'between'<br><br><br>start_time={'comp': 'BW', 'ts': [ts], 'ts2': [ts2]}<br><br><br>Ex: start_time={'comp': 'BW', 'ts': 1684972800, 'ts2': 1685145599}<br>which is 1684972800 <= start_time <= 1685145599<br><br><br>`comp` *enum {BW, EQ, GEQ, GT, LEQ, LT}*<br>comp<br><br>**[required]**<br><br><br>`ts` *datetime/timestamp*<br>ts<br><br>**[required]**<br><br><br>`ts2` *datetime/timestamp*<br>ts2<br> |
| `status`<br><br>*array<enum {CREATED, FAILURE, IN_PROGRESS, SCHEDULED, SUCCESS}>* | Optional filter on the request status.<br><br><br>From the set { CREATED, FAILURE, IN_PROGRESS, SCHEDULED, SUCCESS }<br><br><br>Can enter a single study type or an array of statuses. The array filter is a set contains, e.g. if a business has a request with 'CREATED', a request with 'SUCCESS', and has filter status=['CREATED', 'SUCCESS'], then both requests will be returned.<br><br><br>Valid input examples:<br><br><br>• status=CREATED<br><br>• status=['CREATED', 'SUCCESS']<br><br><br><br>Invalid input examples:<br><br><br>• country='CREATED'<br><br>• country=[CREATED, SUCCESS]<br><br> |
| `study_type`<br><br>*array<enum {BRAND_LIFT, PANEL_SALES_ATTRIBUTION, REACH}>* | Optional filter on the request study type.<br><br><br>From the set { BRAND_LIFT, PANEL_SALES_ATTRIBUTION, REACH }<br><br><br>Can enter a single study type or an array of study types. The array filter is a set contains, e.g. if a business has a request with study type 'BRAND_LIFT', a request with study type 'REACH', and has filter study_type=['BRAND_LIFT', 'REACH'], then both requests will be returned.<br><br><br>Valid input examples:<br><br><br>• study_type=BRAND_LIFT<br><br>• study_type=['BRAND_LIFT', 'REACH']<br><br><br><br>Invalid input examples:<br><br><br>• study_type='BRAND_LIFT'<br><br>• study_type=[BRAND_LIFT, REACH]<br><br> |
| `submitted_time`<br><br>*JSON object* | Optional filter on the request submission time (unix-timestamp).<br><br><br>For comparisons (comp => function):<br><br><br>• 'EQ' => 'equals'<br><br>• 'GT => 'greater than'<br><br>• 'GEQ' => 'greater than or equals'<br><br>• 'LT' => 'less than'<br><br>• 'LEQ' => 'less than or equals'<br><br><br><br>submitted_time={'comp': [comp], 'ts': [ts]}<br><br><br>Ex: submitted_time={'comp': 'GEQ', 'ts': 1684972800}<br>which is submitted_time <= 1684972800<br><br><br>For comp 'b/w' => 'between'<br><br><br>submitted_time={'comp': 'BW', 'ts': [ts], 'ts2': [ts2]}<br><br><br>Ex: submitted_time={'comp': 'BW', 'ts': 1684972800, 'ts2': 1685145599}<br>which is 1684972800 <= submitted_time <= 1685145599<br><br><br>`comp` *enum {BW, EQ, GEQ, GT, LEQ, LT}*<br>comp<br><br>**[required]**<br><br><br>`ts` *datetime/timestamp*<br>ts<br><br>**[required]**<br><br><br>`ts2` *datetime/timestamp*<br>ts2<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [ThirdPartyPartnerPanelRequest](https://developers.facebook.com/docs/graph-api/reference/third-party-partner-panel-request) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 200 | Permissions error |

### Creating

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/third_party_partner_viewability_requests.md -->

## Business Third Party Partner Viewability Requests

### Reading

Retrieve all existing Viewability reports related to a business

##### Example

#### HTTP
```
GET /v25.0/{business-id}/third_party_partner_viewability_requests HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/third_party_partner_viewability_requests',
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
    "/{business-id}/third_party_partner_viewability_requests",
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
    "/{business-id}/third_party_partner_viewability_requests",
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
                               initWithGraphPath:@"/{business-id}/third_party_partner_viewability_requests"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fthird_party_partner_viewability_requests&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `end_ds`<br><br>*string* | Required filter for daily request.  The ending datestamp for a time range of reports. Return reports where start_ds <= ds <= end_ds.<br> |
| `end_ts`<br><br>*datetime/timestamp* | Required filter for hourly request. The ending unix timestamp for a time range of reports. Return reports where start_ts <= hour <= end_ts.<br><br><br>Example:<br><br><br>• end_ts = 1706774400<br> |
| `platform`<br><br>*enum {AUDIENCE_NETWORK, FACEBOOK, INSTAGRAM}* | Optional filter on platform of the report.<br><br><br>From the set {AUDIENCE_NETWORK, FACEBOOK, INSTAGRAM, INVALID}.<br><br><br>Valid input example:<br><br><br>• platform=FACEBOOK<br><br><br>Invalid input example:<br><br><br>• platform='FACEBOOK'<br>• platform=['FACEBOOK'. 'INSTAGRAM']<br> |
| `start_ds`<br><br>*string* | Required filter for daily request.  The starting datestamp for a time range of reports. Return reports where start_ds <= ds <= end_ds.<br> |
| `start_ts`<br><br>*datetime/timestamp* | Required filter for hourly request. The staring unix timestamp for a time range of reports. Return reports where start_ts <= hour <= end_ts.<br><br><br>Example:<br><br><br>• start_ts = 1704096000<br> |
| `type`<br><br>*enum {DISPLAY_EVENT, IMPRESSION, VIDEO_EVENT}* | Optional filter on metrics type of the report.<br><br><br>From the set {DISPLAY_EVENT, IMPRESSION, INVALID, VIDEO_EVENT}.<br><br><br>Valid input example:<br><br><br>• type=DISPLAY_EVENT<br><br><br>Invalid input example:<br><br><br>• type='DISPLAY_EVENT'<br>• type=['DISPLAY_EVENT'. 'FULL_VIEW']<br> |

##### Fields

Reading from this edge will return a JSON formatted result:

```
{
"data": [],
"paging": {}
}
```

###### data

A list of [ThirdPartyPartnerViewabilityRequest](https://developers.facebook.com/docs/graph-api/reference/third-party-partner-viewability-request) nodes.

###### paging

For more details about pagination, see the [Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api#paging).

##### Error Codes

| Error Code | Description |
| --- | --- |
| 2500 | Error parsing graph query |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/videos.md -->

## Business Videos

### Reading

BusinessVideos

##### Example

#### HTTP
```
GET /v25.0/{business-id}/videos HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{business-id}/videos',
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
    "/{business-id}/videos",
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
    "/{business-id}/videos",
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
                               initWithGraphPath:@"/{business-id}/videos"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bbusiness-id%7D%2Fvideos&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `creative_folder_id`<br><br>*numeric string* | ID of the target creative folder<br> |
| `max_aspect_ratio`<br><br>*float* | max_aspect_ratio<br> |
| `maxheight`<br><br>*int64* | maxheight<br> |
| `maxlength`<br><br>*int64* | maxlength<br> |
| `maxwidth`<br><br>*int64* | maxwidth<br> |
| `min_aspect_ratio`<br><br>*float* | min_aspect_ratio<br> |
| `minheight`<br><br>*int64* | minheight<br> |
| `minlength`<br><br>*int64* | minlength<br> |
| `minwidth`<br><br>*int64* | minwidth<br> |
| `title`<br><br>*string* | title<br> |

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

Aggregated information about the edge, such as counts. Specify the fields to fetch in the summary param (like summary=__type__).

| Field | Description |
| --- | --- |
| `total_count`<br><br>*int32* | total_count<br><br><br>**[default]**<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 190 | Invalid OAuth 2.0 Access Token |
| 100 | Invalid parameter |

### Creating

You can't perform this operation on this endpoint.

### Updating

### Deleting

You can't perform this operation on this endpoint.

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/business/whatsapp_business_accounts.md -->

## Business Whatsapp Business Accounts

### Reading

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

A list of [WhatsAppBusinessAccount](https://developers.facebook.com/docs/graph-api/reference/whats-app-business-account) nodes.

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
