# Ad Creative

> Source: Meta Marketing API reference (4 pages). Fetched 2026-11-18.


---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-creative.md -->

## Ad Creative

Format which provides layout and contains content for the ad. To see available ad creatives, visit [Ads Guide](https://www.facebook.com/business/ads-guide). The guide also contains information on size requirements for each ad unit. See also [Facebook for Business](https://www.facebook.com/business/overview) and [Inline page post creation blog post](https://developers.facebook.com/ads/blog/post/2014/08/28/creative-page-post-api).

#### Ads About Social Issues, Elections, and Politics

Advertisers running ads about social issues, elections, and politics need to specify [`special_ad_categories`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/special-ad-category) while creating an ad campaign. In addition, businesses still have to set `authorization_category` to flag at the ad creative level. [Learn more about the requirements.](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/special-ad-category#issues-elections-politics)

#### Examples

For example, get information about an ad creative, such as the ID of the newly created unpublished page post:

```
curl -G \
  -d 'fields=name,object_story_id' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v27.0/<CREATIVE_ID>
```

Create a link ad:

```
curl \
  -F 'name=Sample Creative' \
  -F 'object_story_spec={
    "link_data": {
      "image_hash": "<IMAGE_HASH>",
      "link": "<URL>",
      "message": "try it out"
    },
    "page_id": "<PAGE_ID>"
  }' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v27.0/act_<AD_ACCOUNT_ID>/adcreatives
```

You can replace `picture` with `image_hash` to specify an image from your ad account's image library. You can also specify image cropping with `image_crops` in `link_data`. See [Image Crop, Reference](https://developers.facebook.com/documentation/ads-commerce/marketing-api/image-crops).

To create a political ad creative, use the field `authorization_category` with value `POLITICAL`. For example:

```
curl \
  -F 'authorization_category=POLITICAL' \
  -F 'object_story_spec={
    ...
  }' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v27.0/act_<AD_ACCOUNT_ID>/adcreatives
```

Beginning January 9, 2024, to create an issue, electoral, or political ad creative that uses media that is digitally created or altered, use the `authorization_category` field with the `POLITICAL_WITH_DIGITALLY_CREATED_MEDIA` value. For example:

```
curl \
  -F 'authorization_category=POLITICAL_WITH_DIGITALLY_CREATED_MEDIA' \
  -F 'object_story_spec={
    ...
  }' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v27.0/act_<AD_ACCOUNT_ID>/adcreatives
```

For guidelines on Facebook ads see [Ad Guidelines](https://www.facebook.com/ad_guidelines.php).

### Related Resources {#resources}

- [App Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/mobile-app-ads)

- [Video & Carousel Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/videoads)

- [Advantage+ Catalog Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/advantage-catalog-ads)

- [Instagram Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/instagramads)

- [Ads that Click to WhatsApp](https://developers.facebook.com/documentation/ads-commerce/marketing-api/ad-creative/messaging-ads/click-to-whatsapp)

- [Lead Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/lead-ads)

### Limits {#limits}

Only returns 50,000 ad creatives, pagination past this is unavailable.

#### Fields-Level Limits

| Limit | Value |
| --- | --- |
| Maximum ad title length | 25 characters, recommended |
| Minimum ad title length | 1 character |
| Maximum ad body length | 90 characters, recommended |
| Minimum ad body length | 1 character |
| Maximum length of a URL | 1000 characters |
| Maximum length of an individual word in title or body | 30 characters, recommended |

#### Title and Body Limits

- Should be between minimum and maximum title and body lengths.

- Cannot start with punctuation `\ / ! . ? - * ( ) , ; :`

- Cannot have consecutive punctuation except of three full-stops `...`

- Words no longer than 30 characters

- Only three 1-character words allowed

The following characters are not allowed:

- IPA Symbols. Except: ə, ɚ, ɛ, ɜ, ɝ, ɞ, ɟ

- Diacritical Marks. Precomposed version of a character + diacritical mark are allowed. Standalone diacritical marks are not allowed.

- Superscript and subscript characters except ™ and ℠

- These characters `^~_={}[]|<>`

#### Exceptions

- **Link Ads** cannot use special characters

- **Page Posts Ads** allow special characters such as `★`

#### Placement {#placement}

See [Placement](https://developers.facebook.com/documentation/ads-commerce/marketing-api/creative#placements) for restrictions on placement of your ad based on creative.

### Reading

An ad creative object is an instance of a specific creative which is being used to define the `creative` field of one or more [ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/adgroup)

#### Read Thumbnail {#read_examples}

Request the thumbnail URL and dimensions:

```
curl -G \
  -d 'thumbnail_width=150' \
  -d 'thumbnail_height=120' \
  -d 'fields=thumbnail_url' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v27.0/<CREATIVE_ID>
```

##### Example

#### HTTP
```
GET /v25.0/<CREATIVE_ID>/?fields=asset_feed_spec HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/<CREATIVE_ID>/?fields=asset_feed_spec',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/<CREATIVE_ID>/",
    {
        "fields": "asset_feed_spec"
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
params.putString("fields", "asset_feed_spec");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/<CREATIVE_ID>/",
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
  @"fields": @"asset_feed_spec",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/<CREATIVE_ID>/"
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
  -d 'fields="asset_feed_spec"' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/<CREATIVE_ID>/
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%3CCREATIVE_ID%3E%2F%3Ffields%3Dasset_feed_spec&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `thumbnail_height`<br><br>*int64* | **Default value: **`64`<br>Rendered height of thumbnails provided in thumbnail_url, in pixels<br> |
| `thumbnail_width`<br><br>*int64* | **Default value: **`64`<br>Rendered width of thumbnails accessible in thumbnail_url, in pixels<br> |

##### Fields

| Field | Description |
| --- | --- |
| `id`<br><br>*numeric string* | Unique ID for an ad creative, numeric string.<br> |
| `account_id`<br><br>*numeric string* | Ad account ID for the account this ad creative belongs to.<br> |
| `actor_id`<br><br>*numeric string* | The actor ID (Page ID) of this creative<br> |
| `ad_disclaimer_spec`<br><br>*[AdCreativeAdDisclaimer](https://developers.facebook.com/docs/marketing-api/reference/ad-creative-ad-disclaimer)* | Ad disclaimer data on creative for additional information on ads.<br> |
| `adlabels`<br><br>*[list<AdLabel>](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label)* | [Ad Labels](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label) associated with this creative. Used to group it with related ad objects.<br> |
| `applink_treatment`<br><br>*enum* | Used for [Dynamic Ads](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads/ads-management). Specify what action should occur if a person clicks a link in the ad, but the business' app is not installed on their device. For example, open a webpage displaying the product, or open the app in an app store on the person's mobile device.<br> |
| `asset_feed_spec`<br><br>*[AdAssetFeedSpec](https://developers.facebook.com/docs/marketing-api/reference/ad-asset-feed-spec)* | Used for [Dynamic Creative](https://developers.facebook.com/documentation/ads-commerce/marketing-api/ad-creative/asset-feed-spec) to automatically experiment and deliver different variations of an ad's creative. Specifies an asset feed with multiple images, text and other assets used to generate variations of an ad. Formatted as a JSON string.<br> |
| `authorization_category`<br><br>*enum* | Specifies whether ad was configured to be labeled as a political ad or not.<br>See [Facebook Advertising Policies](https://www.facebook.com/policies/ads). This field cannot be used for [Dynamic Ads](https://developers.facebook.com/docs/marketing-api/dynamic-ad).<br> |
| `body`<br><br>*string* | The body of the ad. Not supported for video post creatives<br> |
| `branded_content`<br><br>*[AdCreativeBrandedContentAds](https://developers.facebook.com/docs/marketing-api/reference/ad-creative-branded-content-ads)* | branded_content<br> |
| `branded_content_sponsor_page_id`<br><br>*numeric string* | ID for page representing business which runs Branded Content ads. See [Creating Branded Content Ads](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/branded-content).<br> |
| `bundle_folder_id`<br><br>*numeric string* | The [Dynamic Ad's](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads) bundle folder ID<br> |
| `call_to_action`<br><br>*[AdCreativeLinkDataCallToAction](https://developers.facebook.com/docs/marketing-api/reference/ad-creative-link-data-call-to-action)* | Call to action for an ad created from existing Instagram post<br> |
| `call_to_action_type`<br><br>*enum {OPEN_LINK, LIKE_PAGE, SHOP_NOW, PLAY_GAME, INSTALL_APP, USE_APP, CALL, CALL_ME, VIDEO_CALL, INSTALL_MOBILE_APP, USE_MOBILE_APP, MOBILE_DOWNLOAD, BOOK_TRAVEL, LISTEN_MUSIC, WATCH_VIDEO, LEARN_MORE, SIGN_UP, DOWNLOAD, WATCH_MORE, NO_BUTTON, VISIT_PAGES_FEED, CALL_NOW, APPLY_NOW, CONTACT, BUY_NOW, GET_OFFER, GET_OFFER_VIEW, BUY_TICKETS, UPDATE_APP, GET_DIRECTIONS, BUY, SEND_UPDATES, MESSAGE_PAGE, DONATE, SUBSCRIBE, SAY_THANKS, SELL_NOW, SHARE, DONATE_NOW, GET_QUOTE, CONTACT_US, ORDER_NOW, START_ORDER, ADD_TO_CART, VIEW_CART, VIEW_IN_CART, VIDEO_ANNOTATION, RECORD_NOW, INQUIRE_NOW, CONFIRM, REFER_FRIENDS, REQUEST_TIME, GET_SHOWTIMES, LISTEN_NOW, TRY_DEMO, WOODHENGE_SUPPORT, SOTTO_SUBSCRIBE, FOLLOW_USER, RAISE_MONEY, SEE_SHOP, GET_DETAILS, FIND_OUT_MORE, VISIT_WEBSITE, BROWSE_SHOP, EVENT_RSVP, WHATSAPP_MESSAGE, FOLLOW_NEWS_STORYLINE, SEE_MORE, BOOK_NOW, FIND_A_GROUP, FIND_YOUR_GROUPS, PAY_TO_ACCESS, PURCHASE_GIFT_CARDS, FOLLOW_PAGE, SEND_A_GIFT, SWIPE_UP_SHOP, SWIPE_UP_PRODUCT, SEND_GIFT_MONEY, PLAY_GAME_ON_FACEBOOK, GET_STARTED, OPEN_INSTANT_APP, AUDIO_CALL, GET_PROMOTIONS, JOIN_CHANNEL, MAKE_AN_APPOINTMENT, ASK_ABOUT_SERVICES, BOOK_A_CONSULTATION, GET_A_QUOTE, BUY_VIA_MESSAGE, ASK_FOR_MORE_INFO, CHAT_WITH_US, VIEW_PRODUCT, VIEW_CHANNEL, GET_IN_TOUCH, ASK_A_QUESTION, START_A_CHAT, CHAT_NOW, ASK_US, WATCH_LIVE_VIDEO, JOIN_LIVE_VIDEO, SHOP_WITH_AI, TRY_ON_WITH_AI}* | Type of call to action button in your ad. This determines the button text and header text for your ad. See [Ads Guide](https://www.facebook.com/business/ads-guide/) for [campaign objectives](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-campaign-group) and permitted call to action types.<br> |
| `categorization_criteria`<br><br>*enum* | The [Dynamic Category Ad's](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads) categorization field, e.g. brand<br> |
| `category_media_source`<br><br>*enum* | The [Dynamic Ad's](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads) rendering mode for category ads<br> |
| `collaborative_ads_lsb_image_bank_id`<br><br>*numeric string* | Used for CPAS local delivery image bank<br> |
| `contextual_multi_ads`<br><br>*AdCreativeContextualMultiAds* | contextual_multi_ads<br> |
| `creative_sourcing_spec`<br><br>*[AdCreativeSourcingSpec](https://developers.facebook.com/docs/marketing-api/reference/ad-creative-sourcing-spec)* | creative_sourcing_spec<br> |
| `degrees_of_freedom_spec`<br><br>*[AdCreativeDegreesOfFreedomSpec](https://developers.facebook.com/docs/marketing-api/reference/ad-creative-degrees-of-freedom-spec)* | Specifies the types of transformations that are enabled for the given creative<br> |
| `destination_set_id`<br><br>*numeric string* | The ID of the Product Set for a Destination Catalog that will be used to link with Travel Catalogs<br> |
| `dynamic_ad_voice`<br><br>*string* | Used for [Store Traffic Objective inside Dynamic Ads](https://developers.facebook.com/docs/marketing-api/guides/dynamic-ad/store-visits). Allows you to control the voice of your ad. If set to `DYNAMIC`, page name and profile picture in your ad post come from the nearest page location. If set to `STORY_OWNER`, page name and profile picture in your ad post come from the main page location.<br> |
| `effective_authorization_category`<br><br>*enum* | Specifies whether ad is a political ad or not.<br>See [Facebook Advertising Policies](https://www.facebook.com/policies/ads). This field cannot be used for [Dynamic Ads](https://developers.facebook.com/docs/marketing-api/dynamic-ad).<br><br><br>This value can be different than the authorization_category value in case our systems have identified the ad as political even though it was not configured to be labeled as such.<br> |
| `effective_instagram_media_id`<br><br>*numeric string* | The ID of an Instagram post to use in an ad<br> |
| `effective_object_story_id`<br><br>*token with structure: Post ID* | The ID of a page post to use in an ad, regardless of whether it's an organic or unpublished page post<br> |
| `enable_direct_install`<br><br>*bool* | Whether Direct Install should be enabled on supported devices<br> |
| `enable_launch_instant_app`<br><br>*bool* | Whether Instant App should be enabled on supported devices<br> |
| `existing_post_title`<br><br>*string* | existing_post_title<br> |
| `facebook_branded_content`<br><br>*AdCreativeFacebookBrandedContent* | Stores fields for Facebook Branded Content<br> |
| `format_transformation_spec`<br><br>*list<AdCreativeFormatTransformationSpec>* | format_transformation_spec<br> |
| `generative_asset_spec`<br><br>*AdCreativeGenerativeAssetSpec* | generative_asset_spec<br> |
| `image_crops`<br><br>*[AdsImageCrops](https://developers.facebook.com/docs/marketing-api/reference/ads-image-crops)* | A JSON object defining crop dimensions for the image specified. See [image crop reference](https://developers.facebook.com/documentation/ads-commerce/marketing-api/image-crops) for more details<br> |
| `image_hash`<br><br>*string* | Image hash for ad creative. If provided, do not add `image_url`. See [image library](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-image) for more details.<br> |
| `image_url`<br><br>*string* | A URL for the image for this creative. We save the image at this URL to the ad account's image library. If provided, do not include `image_hash`.<br> |
| `instagram_permalink_url`<br><br>*string* | URL for a post on Instagram you want to run as an ad. Also known as Instagram media.<br> |
| `instagram_user_id`<br><br>*numeric string* | Instagram actor ID<br> |
| `interactive_components_spec`<br><br>*[AdCreativeInteractiveComponentsSpec](https://developers.facebook.com/docs/graph-api/reference/ad-creative-interactive-components-spec)* | Specification for all the interactive components that would show up on the ad<br> |
| `link_destination_display_url`<br><br>*string* | Overwrites the display URL for link ads when `object_url` is set to a click tag<br> |
| `link_og_id`<br><br>*numeric string* | The Open Graph (OG) ID for the link in this creative if the landing page has OG tags<br> |
| `link_url`<br><br>*string* | Identify a specific landing tab on your Facebook page by the Page tab's URL. See [connection objects](https://developers.facebook.com/docs/reference/ads-api/connectionobjects) for retrieving Page tab URLs. You can add [app_data](https://developers.facebook.com/documentation/facebook-login/guides/advanced/manual-flow) parameters to the URL to pass data to a Page's tab.<br> |
| `marketing_message_structured_spec`<br><br>*[AdCreativeMarketingMessageStructuredSpec](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-creative-marketing-message-structured-spec)* | Optional customizations for the WhatsApp marketing message delivered with this ad, returned when the ad set includes the WhatsApp `marketing_messages` position. Creatives that do not customize the marketing message have nothing set here; their marketing message is built from `object_story_spec`.<br> |
| `media_sourcing_spec`<br><br>*[AdCreativeMediaSourcingSpec](https://developers.facebook.com/docs/marketing-api/reference/ad-creative-media-sourcing-spec)* | media_sourcing_spec<br> |
| `messenger_sponsored_message`<br><br>*string* | Used for Messenger sponsored message. JSON string with message for this ad creative. See [Messenger Platform, Send API Reference](docs/messenger-platform/reference/send-api).<br> |
| `name`<br><br>*string* | Name of this ad creative as seen in the ad account's library. This field has a limit of 100 characters.<br> |
| `object_id`<br><br>*numeric string* | ID for Facebook object being promoted with ads or relevant to the ad or ad type. For example a page ID if you are running ads to generate Page Likes. See [promoted_object](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-promoted-object).<br> |
| `object_store_url`<br><br>*string* | iTunes or Google Play of the destination of an app ad<br> |
| `object_story_id`<br><br>*token with structure: Post ID* | ID of a Facebook Page post to use in an ad. You can get this ID by [querying the posts of the page](https://developers.facebook.com/docs/graph-api/reference/page/feed). If this post includes an image, it should not exceed 8 MB. Facebook will upload the image from the post to your ad account's [image library](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-image). If you create an unpublished page post via `object_story_spec` at the same time as creating the ad, this ID will be null. However, the `effective_object_story_id` will be the ID of the page post regardless of whether it's an organic or unpublished page post.<br> |
| `object_story_spec`<br><br>*[AdCreativeObjectStorySpec](https://developers.facebook.com/docs/marketing-api/reference/ad-creative-object-story-spec)* | Use if you want to create a new unpublished page post and turn the post into an ad. The Page ID and the content to create a new unpublished page post. Specify `link_data`, `photo_data`, `video_data`, `text_data` or `template_data` with the content.<br> |
| `object_story_spec{whats_app_business_phone_number}`<br><br>*string* | The WhatsApp business phone number that marketing messages are sent from, in human-readable form, for example `+1-650-555-1234`. Request it explicitly with `fields=object_story_spec{whats_app_business_phone_number}`. It is not returned by default. Returns `null` when the creative has no phone number assigned.<br> |
| `object_type`<br><br>*enum {APPLICATION, DOMAIN, EVENT, OFFER, PAGE, PHOTO, SHARE, STATUS, STORE_ITEM, VIDEO, INVALID, PRIVACY_CHECK_FAIL, POST_DELETED}* | The type of Facebook object you want to advertise. Allowed values are:<br>`PAGE`<br>`DOMAIN`<br>`EVENT`<br>`STORE_ITEM`: refers to an iTunes or Google Play store destination<br>`SHARE`: from a page<br>`PHOTO`<br>`STATUS`: of a page<br>`VIDEO`<br>`APPLICATION`: app on Facebook<br>`INVALID`: when an invalid object_id was specified such as a deleted object or if you do not have permission to see the object. In very few cases, this field may be empty if Facebook is unable to identify the type of advertised object<br>`PRIVACY_CHECK_FAIL`: you are missing the permission to load this object type<br>`POST_DELETED`: this object_type has been deleted<br> |
| `object_url`<br><br>*string* | URL that opens if someone clicks your link on a link ad. This URL is not connected to a Facebook page.<br> |
| `page_welcome_message`<br><br>*string* | Page welcome message for CTM ads<br> |
| `photo_album_source_object_story_id`<br><br>*string* | photo_album_source_object_story_id<br> |
| `place_page_set_id`<br><br>*numeric string* | The ID of the page set for this creative. See the[Local Awareness guide](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/event-ads)<br> |
| `platform_customizations`<br><br>*[AdCreativePlatformCustomization](https://developers.facebook.com/docs/marketing-api/reference/ad-creative-platform-customization)* | Use this field to specify the exact media to use on different Facebook [placements](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/reference/advanced-targeting#placement). You can currently use this setting for images and videos. Facebook replaces the media originally defined in ad creative with this media when the ad displays in a specific placements. For example, if you define a media here for `instagram`, Facebook uses that media instead of the media defined in the ad creative when the ad appears on Instagram.<br> |
| `playable_asset_id`<br><br>*numeric string* | The ID of the playable asset in this creative<br> |
| `portrait_customizations`<br><br>*AdCreativePortraitCustomizations* | This field describes the rendering customizations selected for portrait mode ads like IG Stories, FB Stories, IGTV, etc<br> |
| `product_data`<br><br>*list<AdCreativeProductData>* | product_data<br> |
| `product_set_id`<br><br>*numeric string* | Used for [Dynamic Ad](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads). An ID for a product set, which groups related products or other items being advertised.<br> |
| `product_suggestion_settings`<br><br>*AdCreativeProductSuggestionSettings* | product_suggestion_settings<br> |
| `recommender_settings`<br><br>*AdCreativeRecommenderSettings* | Used for [Dynamic Ads](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads). Settings to display Dynamic ads based on product recommendations.<br> |
| `referral_id`<br><br>*numeric string* | The ID of Referral Ad Configuration in this creative<br> |
| `source_facebook_post_id`<br><br>*numeric string* | source_facebook_post_id<br> |
| `source_instagram_media_id`<br><br>*numeric string* | The ID of an Instagram post for creating ads<br> |
| `status`<br><br>*enum {ACTIVE, IN_PROCESS, WITH_ISSUES, DELETED}* | The status of the creative. `WITH_ISSUES` and `IN_PROCESS` are available for 4.0 or higher<br> |
| `template_url`<br><br>*string* | Used for [Dynamic Ads](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads) when you want to use third-party click tracking. See [Dynamic Ads, Click Tracking and Templates](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads/ads-management#adtemplate).<br> |
| `template_url_spec`<br><br>*[AdCreativeTemplateURLSpec](https://developers.facebook.com/docs/marketing-api/reference/ad-creative-template-url-spec)* | Used for [Dynamic Ads](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads) when you want to use third-party click tracking. See [Dynamic Ads, Click Tracking and Templates](https://developers.facebook.com/docs/marketing-api/dynamic-product-ads/ads-management#adtemplate).<br> |
| `threads_media_id`<br><br>*numeric string* | threads_media_id<br> |
| `threads_user_id`<br><br>*numeric string* | threads_user_id<br> |
| `thumbnail_id`<br><br>*numeric string* | thumbnail_id<br> |
| `thumbnail_url`<br><br>*string* | URL for a thumbnail image for this ad creative. You can provide dimensions for this with `thumbnail_width` and `thumbnail_height`. [See example](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-creative#thumbnail-example).<br> |
| `title`<br><br>*string* | Title for link ad, which does not belong to a page.<br> |
| `url_tags`<br><br>*string* | A set of query string parameters which will replace or be appended to urls clicked from page post ads, message of the post, and canvas app install creatives only<br> |
| `use_page_actor_override`<br><br>*bool* | Used for [App Ads](https://developers.facebook.com/docs/app-ads). If `true`, we display the Facebook page associated with the app ads.<br> |
| `video_id`<br><br>*numeric string* | Facebook object ID for video in this ad creative.<br> |
| `wamo_whatsapp_identity_spec`<br><br>*AdCreativeWAMOWhatsAppIdentitySpec* | wamo_whatsapp_identity_spec<br> |

##### Edges

| Edge | Description |
| --- | --- |
| [`previews`](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-creative/previews)<br><br>*Edge<AdPreview>* | The HTML Snippets for previewing this creative<br> |

##### Error Codes

| Error Code | Description |
| --- | --- |
| 2635 | You are calling a deprecated version of the Ads API. Please update to the latest version. |
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 100 | Invalid parameter |
| 613 | Calls to this api have exceeded the rate limit. |
| 2500 | Error parsing graph query |
| 270 | This Ads API request is not allowed for apps with development access level (Development access is by default for all apps, please request for upgrade). Make sure that the access token belongs to a user that is both admin of the app and admin of the ad account |
| 190 | Invalid OAuth 2.0 Access Token |
| 200 | Permissions error |

### Creating

Define creative as part of an ad set or standalone. In either case, we store your ad creative in your ad account's creative library to use in ads. If you try to add an creative that isn't unique, we do not generate it and return the creative ID of the existing ad creative. For example, create a Link Ad with a call to action:

```
curl \
  -F 'name=Sample Creative' \
  -F 'object_story_spec={
    "link_data": {
      "call_to_action": {"type":"SIGN_UP","value":{"link":"<URL>"}},
      "link": "<URL>",
      "message": "try it out"
    },
    "page_id": "<PAGE_ID>"
  }' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v27.0/act_<AD_ACCOUNT_ID>/adcreatives
```

You use `link_caption` to pass the call to action object. By doing this, you can customize the call to action caption. To customize the call to action description, pass `link_description` in the call to action object.

Create a [carousel ad](https://developers.facebook.com/documentation/ads-commerce/marketing-api/guides/videoads)

```
curl \
  -F 'name=Sample Creative' \
  -F 'object_story_spec={
    "link_data": {
      "child_attachments": [
        {
          "description": "$8.99",
          "image_hash": "<IMAGE_HASH>",
          "link": "https:\/\/www.link.com\/product1",
          "name": "Product 1",
          "video_id": "<VIDEO_ID>"
        },
        {
          "description": "$9.99",
          "image_hash": "<IMAGE_HASH>",
          "link": "https:\/\/www.link.com\/product2",
          "name": "Product 2",
          "video_id": "<VIDEO_ID>"
        },
        {
          "description": "$10.99",
          "image_hash": "<IMAGE_HASH>",
          "link": "https:\/\/www.link.com\/product3",
          "name": "Product 3"
        }
      ],
      "link": "<URL>"
    },
    "page_id": "<PAGE_ID>"
  }' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v27.0/act_<AD_ACCOUNT_ID>/adcreatives
```

#### Partnership Ads Posts

As a partnership ads sponsor, you can create ads with posts where your brand is tagged. Create a campaign, ad set, as ads as your normally do. The only difference is in the ad creative.

Set the `sponsor_page_id` field for `facebook_branded_content` and/or the `sponsor_id` field for `instagram_branded_content` in the ad creative.  For example:

```
curl \
 -F 'access_token=<TOKEN>' \
 -F 'facebook_branded_content':{'sponsor_page_id=<PAGE_ID>'}\
 // OR
 -F 'instagram_branded_content':{'sponsor_id=<Instagram_user_ID>'}\
 -F 'object_story_id=<OBJECT_STORY_ID>' \
https://graph.facebook.com/<VERSION>/<ACCOUNT_ID>/adcreatives
```

Where `object_story_id` is the post id in the format of: `postOwnerID_postID`.

#### Inline Page Post Creation {#inline_post}

Most ad creatives rely on page posts for creative content. While you may create page posts separately then reference them by ID, it is easier to create them in the same call you use to provide ad creative. Specify the page post content with `object_story_spec` which creates an unpublished page post. See [Inline Page Post, Blog](https://developers.facebook.com/ads/blog/post/2014/08/28/creative-page-post-api).

You can get the new ID by retrieving `object_story_id` from the ad creative. To get post ids created with `object_story_spec` through [`/promotable_posts`](https://developers.facebook.com/docs/graph-api/reference/page/feed), pass `include_inline=true` in your `HTTP GET`. If `include_inline` value is `false`, we don't return any ids.

#### Get Related Objects {#obtaining_objects}

Many ad creatives require `object_id` for a relevant Facebook object, app ID, or page tab's URL. See [Connection Objects](https://developers.facebook.com/docs/reference/ads-api/connectionobjects) for more information.

#### Examples {#create_example}

Create a Video Page Like ad:

```
curl \
  -F 'name=Sample Creative' \
  -F 'object_story_spec={
    "page_id": "<PAGE_ID>",
    "video_data": {
      "call_to_action": {"type":"LIKE_PAGE","value":{"page":"<PAGE_ID>"}},
      "image_url": "<THUMBNAIL_URL>",
      "video_id": "<VIDEO_ID>"
    }
  }' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v27.0/act_<AD_ACCOUNT_ID>/adcreatives
```

Create an ad from an existing page post

```
curl \
  -F 'name=Sample Promoted Post' \
  -F 'object_story_id=<POST_ID>' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v27.0/act_<AD_ACCOUNT_ID>/adcreatives
```

Create a Photo Ad with [Branded Content](https://www.facebook.com/business/news/branded-content-update) from another page. This is available for photo, video, and link ads.

```
curl \
  -F 'name=Sample Creative' \
  -F 'object_story_spec={
    "page_id": "<PAGE_ID>",
    "photo_data": {
      "branded_content_sponsor_page_id": "<SPONSOR_PAGE_ID>",
      "image_hash": "<IMAGE_HASH>"
    }
  }' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v27.0/act_<AD_ACCOUNT_ID>/adcreatives
```

Adding `url_tags` to an ad

```
curl \
  -F 'object_story_id=<POST_ID>' \
  -F 'url_tags=key1=val1&key2=val2' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v27.0/act_<AD_ACCOUNT_ID>/adcreatives
```

You can't perform this operation on this endpoint.

### Updating

#### Examples {#update_example}

```
curl \
  -F 'name=New creative name 1517287550' \
  -F 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v27.0/<CREATIVE_ID>
```

#### /{ad_creative_id}
You can update an [AdCreative](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-creative) by making a POST request to [/{ad_creative_id}](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-creative).

##### Parameters

| Parameter | Description |
| --- | --- |
| `account_id`<br><br>*numeric string* | Ad account ID for the account this ad creative belongs to.<br> |
| `adlabels`<br><br>*list<Object>* | [Ad Labels](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label) associated with this creative. Used to group it with related ad objects.<br> |
| `name`<br><br>*string* | The name of the creative in the creative library. This field takes a string of up to 100 characters.<br> |
| `status`<br><br>*enum {ACTIVE, IN_PROCESS, WITH_ISSUES, DELETED}* | The status of this ad creative. See [Storing and Retrieving Ad Objects](https://developers.facebook.com/documentation/ads-commerce/marketing-api/best-practices/manage-your-ad-object-status).<br> |

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

### Deleting

#### Examples {#delete_examples}

```
curl -X DELETE \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v27.0/<CREATIVE_ID>/
```

#### /{ad_creative_id}
You can delete an [AdCreative](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-creative) by making a DELETE request to [/{ad_creative_id}](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-creative).

##### Parameters

| Parameter | Description |
| --- | --- |
| `account_id`<br><br>*numeric string* | Ad account ID for the account this ad creative belongs to.<br> |
| `adlabels`<br><br>*list<Object>* | [Ad Labels](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label) associated with this creative. Used to group it with related ad objects.<br> |
| `name`<br><br>*string* | Name of this ad creative as seen in the ad account's library.<br> |
| `status`<br><br>*enum {ACTIVE, IN_PROCESS, WITH_ISSUES, DELETED}* | The status of this ad creative. See [Storing and Retrieving Ad Objects](https://developers.facebook.com/documentation/ads-commerce/marketing-api/best-practices/manage-your-ad-object-status).<br> |

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

---

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-creative/adlabels.md -->

## Ad Creative Adlabels

### Reading

You can't perform this operation on this endpoint.

### Creating

You can't perform this operation on this endpoint.

### Updating

#### /{ad_creative_id}/adlabels
You can update an [AdLabel](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-label) by making a POST request to [/{ad_creative_id}/adlabels](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-creative/adlabels).

##### Parameters

| Parameter | Description |
| --- | --- |
| `adlabels`<br><br>*list<Object>* | Specification of ad labels to be associated with the creative<br><br>**[required]**<br> |

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-creative/creative_insights.md -->

## Ad Creative Creative Insights

### Reading

The edge from AdCreative to query creative insights data

##### Example

#### HTTP
```
GET /v25.0/{ad-creative-id}/creative_insights HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/{ad-creative-id}/creative_insights',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/{ad-creative-id}/creative_insights",
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
    "/{ad-creative-id}/creative_insights",
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
                               initWithGraphPath:@"/{ad-creative-id}/creative_insights"
                                      parameters:params
                                      HTTPMethod:@"GET"];
[request startWithCompletionHandler:^(FBSDKGraphRequestConnection *connection,
                                      id result,
                                      NSError *error) {
    // Handle the result
}];
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Bad-creative-id%7D%2Fcreative_insights&version=v25.0)

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

A list of [AdCreativeInsights](https://developers.facebook.com/docs/graph-api/reference/ad-creative-insights) nodes.

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

<!-- source: https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-creative/previews.md -->

## Ad Creative, Preview

Preview your ad's creative.

#### Breaking Change: Event Ads, Link Ads not Associated with Valid Page

We recently announced an initiative to make the Facebook Advertising platform more transparent to Facebook users. Read more about this in the [Facebook press release](https://newsroom.fb.com/news/2017/10/improving-enforcement-and-transparency/)

**To support this initiative, we are deprecating deprecating Event Ads and Link Ads that are not connected to a valid page from Marketing API.**

This breaking change impacts all supported API versions, including the upcoming Marketing API version v2.11, and v2.10 and v2.9 which are available but will be deprecated. This breaking change will take effect the second week of November 2017.

**You will no longer be able to create or edit Event Ads and Link Ads that are not connected to a valid page. Requests will do so return the error:**
`ErrorCode::ADPRO2__AD_MUST_HAVE_PAGE (1885833)`

The following ad options used together will fail:

- Event Ads

- Objective: `EVENT_RESPONSES`

- Creative fields: `body`, `object_id`

- Link Ads

- Objective: `LINK_CLICKS`

- Creative fields: `title`, `body`, `object_url` containing `image_file` or `image_hash`

You can still create Event Ads and Link Ads if you provide a valid `actor_id` in the ad creative's `object_story_id` or `object_story_spec` fields

These options used together are valid:

- Event Ads

- Objective: `EVENT_RESPONSES`

- Creative fields: `object_story_id` or `object_story_spec`

- Link Ads

- Objective: `LINK_CLICKS`

- Creative fields: `object_story_id` or `object_story_spec`

The nodes, edges and requests impacted are:

- [`ad_ACCOUNT_ID/ads`, Create](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/adgroup)

- [`ad_ACCOUNT_ID/adcreatives`, Create](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/ad-creative)

- [`/ad_ID`, Update](https://developers.facebook.com/documentation/ads-commerce/marketing-api/reference/adgroup)

Any pre-existing Event or Link Ads continue to run but you cannnot modify these ad's creatives or create new ads with the invalid options once the change goes in effect.

### Reading

The HTML Snippets for previewing this creative

**Warning:** When using a Page Post whose link points to an app on the Google Play Store e.g. (https://play.google.com/store/apps/details?id=com.my.app) or an app on the Apple App Store eg  (https://itunes.apple.com/en/app/myapp/id1234567890) Facebook will override/import the following fields:

- the `name` parameter of the Page Post will be overwritten with the name of the app from the Play Store/App Store.

- the thumbnail icon of the app associated with the Page Post will be imported from the Play Store/App Store.

**Note:** Only certain combinations of creatives and `ad_format` are supported:

- Link ad not connected to a page: RIGHT_COLUMN_STANDARD

- Page like ad: RIGHT_COLUMN_STANDARD, DESKTOP_FEED_STANDARD, MOBILE_FEED_STANDARD

- Event ad: RIGHT_COLUMN_STANDARD

- Page like ad: RIGHT_COLUMN_STANDARD

- Page post ad: RIGHT_COLUMN_STANDARD, DESKTOP_FEED_STANDARD, MOBILE_FEED_STANDARD, INSTAGRAM_STANDARD, INSTAGRAM_STORY

- Desktop app ad: DESKTOP_FEED_STANDARD

- Mobile app install: MOBILE_FEED_STANDARD, INSTAGRAM_STANDARD, INSTAGRAM_STORY, MOBILE_BANNER, MOBILE_INTERSTITIAL

##### Example

#### HTTP
```
GET /v25.0/<CREATIVE_ID>/previews?ad_format=DESKTOP_FEED_STANDARD&product_item_ids=%5B%22%3CPRODUCT_ITEM_ID%3E%22%5D HTTP/1.1
Host: graph.facebook.com
```

#### PHP SDK
```
/* PHP SDK v5.0.0 */
/* make the API call */
try {
  // Returns a `Facebook\FacebookResponse` object
  $response = $fb->get(
    '/<CREATIVE_ID>/previews?ad_format=DESKTOP_FEED_STANDARD&product_item_ids=%5B%22%3CPRODUCT_ITEM_ID%3E%22%5D',
    '{access-token}'
  );
} catch(Facebook\Exceptions\FacebookResponseException $e) {
  echo 'Graph returned an error: ' . $e->getMessage();
  exit;
} catch(Facebook\Exceptions\FacebookSDKException $e) {
  echo 'Facebook SDK returned an error: ' . $e->getMessage();
  exit;
}
$graphNode = $response->getGraphNode();
/* handle the result */
```

#### JavaScript SDK
```
/* make the API call */
FB.api(
    "/<CREATIVE_ID>/previews",
    {
        "ad_format": "DESKTOP_FEED_STANDARD",
        "product_item_ids": "[\"<PRODUCT_ITEM_ID>\"]"
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
params.putString("ad_format", "DESKTOP_FEED_STANDARD");
params.putString("product_item_ids", "[\"<PRODUCT_ITEM_ID>\"]");
/* make the API call */
new GraphRequest(
    AccessToken.getCurrentAccessToken(),
    "/<CREATIVE_ID>/previews",
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
  @"ad_format": @"DESKTOP_FEED_STANDARD",
  @"product_item_ids": @"[\"<PRODUCT_ITEM_ID>\"]",
};
/* make the API call */
FBSDKGraphRequest *request = [[FBSDKGraphRequest alloc]
                               initWithGraphPath:@"/<CREATIVE_ID>/previews"
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
  -d 'ad_format="DESKTOP_FEED_STANDARD"' \
  -d 'product_item_ids=[
       "<PRODUCT_ITEM_ID>"
     ]' \
  -d 'access_token=<ACCESS_TOKEN>' \
  https://graph.facebook.com/v25.0/<CREATIVE_ID>/previews
```

Try it in [Graph API Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%3CCREATIVE_ID%3E%2Fpreviews%3Fad_format%3DDESKTOP_FEED_STANDARD%26product_item_ids%3D%255B%2522%253CPRODUCT_ITEM_ID%253E%2522%255D&version=v25.0)

If you want to learn how to use the Graph API, read our [Using Graph API guide](https://developers.facebook.com/docs/graph-api/using-graph-api)

##### Parameters

| Parameter | Description |
| --- | --- |
| `ad_format`<br><br>*enum{AUDIENCE_NETWORK_INSTREAM_VIDEO, AUDIENCE_NETWORK_INSTREAM_VIDEO_MOBILE, AUDIENCE_NETWORK_OUTSTREAM_VIDEO, AUDIENCE_NETWORK_REWARDED_VIDEO, BIZ_DISCO_FEED_MOBILE, DESKTOP_FEED_STANDARD, FACEBOOK_IFU_REELS_MOBILE, FACEBOOK_PROFILE_FEED_DESKTOP, FACEBOOK_PROFILE_FEED_MOBILE, FACEBOOK_PROFILE_REELS_MOBILE, FACEBOOK_REELS_BANNER, FACEBOOK_REELS_BANNER_DESKTOP, FACEBOOK_REELS_BANNER_FEED_ANDROID, FACEBOOK_REELS_BANNER_FEED_ANDROID_LARGE, FACEBOOK_REELS_BANNER_FULLSCREEN_IOS, FACEBOOK_REELS_BANNER_FULLSCREEN_MOBILE, FACEBOOK_REELS_MOBILE, FACEBOOK_REELS_POSTLOOP, FACEBOOK_REELS_POSTLOOP_FEED, FACEBOOK_REELS_SIMILAR_PRODUCTS_MOBILE, FACEBOOK_REELS_STICKER, FACEBOOK_STORY_MOBILE, FACEBOOK_STORY_STICKER_MOBILE, INSTAGRAM_EXPLORE_CONTEXTUAL, INSTAGRAM_EXPLORE_GRID_HOME, INSTAGRAM_EXPLORE_IMMERSIVE, INSTAGRAM_FEED_WEB, INSTAGRAM_FEED_WEB_M_SITE, INSTAGRAM_LEAD_GEN_MULTI_SUBMIT_ADS, INSTAGRAM_PROFILE_FEED, INSTAGRAM_PROFILE_REELS, INSTAGRAM_REELS, INSTAGRAM_REELS_OVERLAY, INSTAGRAM_REELS_WEB, INSTAGRAM_REELS_WEB_M_SITE, INSTAGRAM_SEARCH_CHAIN, INSTAGRAM_SEARCH_GRID, INSTAGRAM_STANDARD, INSTAGRAM_STORY, INSTAGRAM_STORY_EFFECT_TRAY, INSTAGRAM_STORY_WEB, INSTAGRAM_STORY_WEB_M_SITE, INSTANT_ARTICLE_RECIRCULATION_AD, INSTANT_ARTICLE_STANDARD, INSTREAM_BANNER_DESKTOP, INSTREAM_BANNER_FEED_IOS, INSTREAM_BANNER_FULLSCREEN_IOS, INSTREAM_BANNER_FULLSCREEN_MOBILE, INSTREAM_BANNER_IMMERSIVE_MOBILE, INSTREAM_BANNER_MOBILE, INSTREAM_VIDEO_DESKTOP, INSTREAM_VIDEO_FULLSCREEN_IOS, INSTREAM_VIDEO_FULLSCREEN_MOBILE, INSTREAM_VIDEO_IMAGE, INSTREAM_VIDEO_IMMERSIVE_MOBILE, INSTREAM_VIDEO_MOBILE, JOB_BROWSER_DESKTOP, JOB_BROWSER_MOBILE, MARKETPLACE_MOBILE, MESSENGER_MOBILE_INBOX_MEDIA, MESSENGER_MOBILE_STORY_MEDIA, MOBILE_BANNER, MOBILE_FEED_BASIC, MOBILE_FEED_STANDARD, MOBILE_FULLWIDTH, MOBILE_INTERSTITIAL, MOBILE_MEDIUM_RECTANGLE, MOBILE_NATIVE, RIGHT_COLUMN_STANDARD, SUGGESTED_VIDEO_DESKTOP, SUGGESTED_VIDEO_FULLSCREEN_MOBILE, SUGGESTED_VIDEO_IMMERSIVE_MOBILE, SUGGESTED_VIDEO_MOBILE, WATCH_FEED_HOME, WATCH_FEED_MOBILE, WHATSAPP_STATUS_MEDIA}* | Use this to select what placement on Facebook the ad preview should be for. The API returns an iframe, which is only valid for 24 hours.<br><br>**[required]**<br> |
| `creative_feature`<br><br>*enum{ig_video_native_subtitle, image_animation, product_browsing, product_metadata_automation, profile_card, standard_enhancements_catalog, text_overlay_translation}* | Creative feature to see previews for<br> |
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
| 80004 | There have been too many calls to this ad-account. Wait a bit and try again. For more info, please refer to /docs/graph-api/overview/rate-limiting#ads-management. |
| 100 | Invalid parameter |
| 200 | Permissions error |

### Creating

You can't perform this operation on this endpoint.

### Updating

You can't perform this operation on this endpoint.

### Deleting

You can't perform this operation on this endpoint.
