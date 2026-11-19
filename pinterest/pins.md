# Pinterest API v5: Pins

> Source: Pinterest REST API v5 OpenAPI spec (https://github.com/pinterest/api-description, v5.32.0); docs https://developers.pinterest.com/docs/api/v5/. Base URL: https://api.pinterest.com/v5. Fetched 2026-11-19.

Operations: 8

---

## POST /pins

**Create Pin**

Create a Pin on a board or board section owned by the "operation user_account".

 Note: If the current "operation user_account" (defined by the access token) has access to another user's Ad Accounts via Pinterest Business Access, you can modify your request to make use of the current operation_user_account's permissions to those Ad Accounts by including the ad_account_id in the path parameters for the request (e.g. .../?ad_account_id=12345&...).

- This function is intended solely for publishing new content created by the user. If you are interested in saving content created by others to your Pinterest boards, sometimes called 'curated content', please use our [Save button](/docs/web-features/add-ons-overview/) instead. For more tips on creating fresh content for Pinterest, review our [Content App Solutions Guide](/docs/api-features/content-overview/).

**[Learn more](/docs/api-features/creating-boards-and-pins/#creating-video-pins)** about video Pin creation.

**[Learn more](/docs/api-features/creating-boards-and-pins/#creating-image-pins)** about image Pin creation.

Operation ID: `pins/create`

Scopes: pinterest_oauth2: boards:read, boards:write, pins:read, pins:write; client_credentials: boards:read, boards:write, pins:read, pins:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `PinCreate`

**Response 200** (`application/json`): `Pin`

**Response 201** (`application/json`): `Pin`

---

## GET /pins

**List Pins**

Get a list of the Pins owned by the "operation user_account".
    - By default, the "operation user_account" is the token user_account.
    - All Pins owned by the "operation user_account" are included, regardless of who owns the board they are on.

    Optional: Business Access: Specify an `ad_account_id` to use the owner of that ad_account as the "operation user_account".

    Disclaimer: There are known performance issues when filtering by field `creative_type` and including protected pins.
    If your request is timing out in this scenario, we encourage you to use [GET List Pins on Board](/docs/api/v5/#operation/boards/list_pins).

Operation ID: `pins/list`

Scopes: pinterest_oauth2: boards:read, pins:read; client_credentials: boards:read, pins:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| pin_filter | query | `PinFilter` |  | The filter to apply to the pins |
| pin_metrics | query | boolean |  | Specify whether to return 90d and lifetime Pin metrics. Total comments and total reactions are only available with lifetime Pin metrics. If Pin was created before `2023-03-20` lifetime metrics will only be available for Video and Idea Pin formats. Lifetime metrics are available for all Pin formats since then. _(default false)_ |
| include_protected_pins | query | boolean |  | Whether to include protected pins in the results _(default false)_ |
| pin_type | query | `PinType` |  | The type of pins to return, currently only enabled for private pins |
| creative_types | query | array<`CreativeType`> |  | Pin creative types filter. **Note:** SHOP_THE_PIN has been deprecated. Please use COLLECTION instead. |
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |
| domain | query | string |  | Only return pins with links that match the exact domain. Domain should not include 'www.' prefix. For example, 'pinterest.com' is a valid domain, but 'www.pinterest.com' is not (will not match any pins). |
| domains | query | array<string> |  | Only return pins with links whose domain matches any value in the list. Values are joined comma-separated on the wire (e.g. `?domains=instagram.com,jcpenney.com`). |
| include_product_tag_obj | query | boolean |  | Include product tag objects in the response with their associated links. |
| bookmark | query | string |  | Cursor used to fetch the next page of items |
| page_size | query | integer |  | Maximum number of items to include in a single page. See documentation on [Pagination](/docs/reference/pagination/) for more information. _(default 25; minimum 1; maximum 250)_ |

**Response 200** (`application/json`): object{bookmark: string, items: array<`Pin`>}

---

## GET /pins/analytics

**Get multiple Pin analytics**

**This endpoint is currently in beta and not available to all apps. [Learn more](/docs/getting-started/using-beta-and-restricted-features/).**

Get analytics for multiple pins owned by the "operation user_account" - or on a group board that has been shared with this account.
- The maximum number of pins supported in a single request is 100.
- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account:

- For Pins on public or protected boards: Admin, Analyst.
- For Pins on secret boards: Admin.

If Pin was created before `2023-03-20` lifetime metrics will only be available for Video and Idea Pin formats. Lifetime metrics are available for all Pin formats since then.

Operation ID: `multi_pins/analytics`

Scopes: pinterest_oauth2: boards:read, pins:read; client_credentials: boards:read, pins:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| pin_ids | query | array<`Pinterest.Lib.IntegerFormatType`> | yes | List of Pin IDs. |
| start_date | query | string (date) | yes | Metric report start date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days back from today. |
| end_date | query | string (date) | yes | Metric report end date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days past start_date. |
| app_types | query | string enum(ALL, MOBILE, TABLET, WEB) |  | Apps or devices to get data for, default is all. _(default "ALL")_ |
| metric_types | query | array<`MultiPinsAnalyticsMetricTypesItem`> | yes | Pin metric types to get data for. |
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |

**Response 200** (`application/json`): map<string, `PinAnalyticsResponse`>

---

## GET /pins/{pin_id}

**Get Pin**

Get a Pin owned by the "operation user_account" - or on a group board that has been shared with this account.
  - By default, the "operation user_account" is the token user_account.

  Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account:

  - For Pins on public or protected boards: Owner, Admin, Analyst, Campaign Manager.
  - For Pins on secret boards: Owner, Admin.

Operation ID: `pins/get`

Scopes: pinterest_oauth2: boards:read, pins:read; client_credentials: boards:read, pins:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| pin_id | path | string | yes |  |
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |
| pin_metrics | query | boolean |  | Specify whether to return 90d and lifetime Pin metrics. Total comments and total reactions are only available with lifetime Pin metrics. If Pin was created before `2023-03-20` lifetime metrics will only be available for Video and Idea Pin formats. Lifetime metrics are available for all Pin formats since then. _(default false)_ |

**Response 200** (`application/json`): `Pin`

---

## PATCH /pins/{pin_id}

**Update Pin**

Update a pin owned by the "operating user_account".
- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account:

- For Pins on public or protected boards: Owner, Admin, Analyst, Campaign Manager.
- For Pins on secret boards: Owner, Admin.

**This endpoint is currently in beta and not available to all apps. [Learn more](/docs/getting-started/using-beta-and-restricted-features/).**

Operation ID: `pins/update`

Scopes: pinterest_oauth2: boards:read, boards:write, pins:read, pins:write; client_credentials: boards:read, boards:write, pins:read, pins:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| pin_id | path | string | yes |  |
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `PinUpdate`

**Response 200** (`application/json`): `Pin`

---

## DELETE /pins/{pin_id}

**Delete Pin**

Delete a Pins owned by the "operation user_account" - or on a group board that has been shared with this account.
  - By default, the "operation user_account" is the token user_account.

  Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account:

  - For Pins on public or protected boards: Owner, Admin, Analyst, Campaign Manager.
  - For Pins on secret boards: Owner, Admin.

Operation ID: `pins/delete`

Scopes: pinterest_oauth2: boards:read, boards:write, pins:read, pins:write; client_credentials: boards:read, boards:write, pins:read, pins:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| pin_id | path | string | yes |  |
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |

**Response 200** (`application/json`): `Pin`

**Response 204**: Resource deleted successfully.

---

## GET /pins/{pin_id}/analytics

**Get Pin analytics**

Get analytics for a Pin owned by the "operation user_account" - or on a group board that has been shared with this account.
- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account:

- For Pins on public or protected boards: Admin, Analyst.
- For Pins on secret boards: Admin.

If Pin was created before `2023-03-20` lifetime metrics will only be available for Video and Idea Pin formats. Lifetime metrics are available for all Pin formats since then.

Operation ID: `pins/analytics`

Scopes: pinterest_oauth2: boards:read, pins:read; client_credentials: boards:read, pins:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| pin_id | path | string | yes | Unique identifier of a Pin. |
| start_date | query | string (date) | yes | Metric report start date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days back from today. |
| end_date | query | string (date) | yes | Metric report end date (UTC). Format: YYYY-MM-DD. Cannot be more than 90 days past start_date. |
| app_types | query | string enum(ALL, MOBILE, TABLET, WEB) |  | Apps or devices to get data for, default is all. _(default "ALL")_ |
| metric_types | query | array<`QuerypinanalyticsmetrictypesItems`> | yes | Pin metric types to get data for. VIDEO_MRC_VIEW are Video views, VIDEO_V50_WATCH_TIME is Total play time. If Pin was created before `2023-03-20`, Profile visits and Follows will only be available for Idea Pins. These metrics are available for all Pin formats since then. Keep in mind this cannot have ALL if split_field is set to any value other than `NO_SPLIT`. |
| split_field | query | string enum(NO_SPLIT, APP_TYPE) |  | How to split the data into groups. Not including this param means data won't be split. _(default "NO_SPLIT")_ |
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |

**Response 200** (`application/json`): `PinAnalyticsResponse`

---

## POST /pins/{pin_id}/save

**Save Pin**

Save a Pin on a board or board section owned by the "operation user_account".
- By default, the "operation user_account" is the token user_account.
Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account:

- For Pins on public or protected boards: Owner, Admin, Analyst, Campaign Manager.
- For Pins on secret boards: Owner, Admin.

- Any Pin type can be saved: image Pin, video Pin, Idea Pin, product Pin, etc.
- Any public Pin can be saved given a pin ID.

Operation ID: `pins/save`

Scopes: pinterest_oauth2: boards:read, boards:write, pins:read, pins:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| pin_id | path | string | yes | Unique identifier of a Pin. |
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `PinsSaveRequestCreate`

**Response 201** (`application/json`): `Pin`

---

## Schemas

### `CreativeType`

Ad creative type enum.
**Note:** SHOP_THE_PIN has been deprecated. Please use COLLECTION instead.

Type: string enum(REGULAR, VIDEO, SHOPPING, CAROUSEL, MAX_VIDEO, SHOP_THE_PIN, COLLECTION, IDEA, SHOWCASE, QUIZ, COLLAGE, MAX_WIDTH_REGULAR_COLLECTION, MAX_WIDTH_VIDEO_COLLECTION, APP, CTV_VIDEO, SEARCH_TEXT_AD)

### `MultiPinsAnalyticsMetricTypesItem`

Pin metric type for multi-pin analytics

Type: string enum(IMPRESSION, OUTBOUND_CLICK, PIN_CLICK, SAVE, SAVE_RATE, TOTAL_COMMENTS, TOTAL_REACTIONS, USER_FOLLOW, PROFILE_VISIT, VIDEO_MRC_VIEW, VIDEO_10S_VIEW, QUARTILE_95_PERCENT_VIEW, VIDEO_V50_WATCH_TIME, VIDEO_START, VIDEO_AVG_WATCH_TIME)

### `Pin`

Pin model containing properties related to a Pinterest Pin.

| Field | Type | Required | Description |
|---|---|---|---|
| alt_text | string |  | _(nullable; maxLength 500)_ |
| description | string |  | _(nullable; maxLength 800)_ |
| link | string |  | _(nullable; maxLength 2048)_ |
| title | string |  | _(nullable; maxLength 100)_ |

### `PinAnalyticsResponse`

Type: map<string, `PinAnalyticsMetricsResponse`>

### `PinCreate`

Resource create operation model.

| Field | Type | Required | Description |
|---|---|---|---|
| ai_disclosures | `AiDisclosures` |  | AI disclosure declarations the creator has made about this Pin. |
| alt_text | string |  | _(nullable; maxLength 500)_ |
| board_id | string |  | The board to which this Pin belongs. |
| board_section_id | string |  | The board section to which this Pin belongs. _(nullable)_ |
| description | string |  | _(nullable; maxLength 800)_ |
| dominant_color | string |  | Dominant pin color. Hex number, e.g. `#6E7874`. _(nullable)_ |
| is_removable | boolean |  | If you set it to `true`, the Pin becomes ad-only and is automatically added to an "Ad-only Pins" board; so, you do not have to specify a `board_id`. **Note:** Ad-only pins cannot be repinned. _(nullable)_ |
| link | string |  | _(nullable; maxLength 2048)_ |
| media_source | `PinMediaSource` |  |  |
| parent_pin_id | string |  | The source pin id if this pin was saved from another pin. [Learn more](https://help.pinterest.com/article/save-pins-on-pinterest). _(nullable)_ |
| sponsor_id | string |  | The sponsor account id to request paid partnership from.  Currently the field is only available to a list of users in a closed beta. _(nullable)_ |
| title | string |  | _(nullable; maxLength 100)_ |

### `PinFilter`

Type: string enum(exclude_native, exclude_repins, has_been_promoted)

### `PinType`

Type: string enum(PRIVATE)

### `PinUpdate`

Resource create or update operation model.

| Field | Type | Required | Description |
|---|---|---|---|
| ai_disclosures | `AiDisclosuresUpdate` |  | AI disclosure declarations the creator has made about this Pin. |
| alt_text | string |  | _(nullable; maxLength 500)_ |
| board_id | string |  | The board to which this Pin belongs. |
| board_section_id | string |  | The board section to which this Pin belongs. _(nullable)_ |
| carousel_slots | array<`CarouselSlot`> |  | Carousel Pin slots data. |
| description | string |  | _(nullable; maxLength 800)_ |
| link | string |  | _(nullable; maxLength 2048)_ |
| title | string |  | _(nullable; maxLength 100)_ |

### `PinsSaveRequestCreate`

Resource create operation model.

| Field | Type | Required | Description |
|---|---|---|---|
| board_id | string |  | Unique identifier of the board to which the pin will be saved. _(nullable)_ |
| board_section_id | string |  | Unique identifier of the board section to which the pin will be saved. _(nullable)_ |

### `Pinterest.Lib.IntegerFormatType`

Type: string

### `QuerypinanalyticsmetrictypesItems`

Type: `StandardPinMetricTypes` | `VideoPinMetricTypes`

### `PinBase`

| Field | Type | Required | Description |
|---|---|---|---|
| ai_disclosures | `AiDisclosures` |  | AI disclosure declarations the creator has made about this Pin. |
| board_id | string |  | The board to which this Pin belongs. |
| board_owner | `BoardOwner` |  | _(read-only)_ |
| board_section_id | string |  | The board section to which this Pin belongs. _(nullable)_ |
| created_at | string (date-time) |  | _(read-only)_ |
| creative_type | `CreativeType` |  | _(nullable; read-only)_ |
| dominant_color | string |  | Dominant pin color. Hex number, e.g. `#6E7874`. _(nullable)_ |
| has_been_promoted | boolean |  | Whether the Pin has been promoted or not. _(read-only)_ |
| id | string | yes |  |
| is_owner | boolean |  | Whether the "operation user_account" is the Pin owner. _(read-only)_ |
| is_product | boolean |  | Whether the Pin is a product Pin. _(read-only)_ |
| is_removable | boolean |  | If you set it to `true`, the Pin becomes ad-only and is automatically added to an "Ad-only Pins" board; so, you do not have to specify a `board_id`. **Note:** Ad-only pins cannot be repinned. _(nullable)_ |
| is_standard | boolean |  | Whether the Pin is standard or not. See documentation on [Changes to Pin creation](/docs/api-features/content-overview/) for more information. _(read-only)_ |
| media | `PinMedia` |  | _(read-only)_ |
| parent_pin_id | string |  | The source pin id if this pin was saved from another pin. [Learn more](https://help.pinterest.com/article/save-pins-on-pinterest). _(nullable)_ |
| pin_metrics | object |  | Pin metrics with associated time intervals if any. _(nullable; read-only)_ |

### `PinAnalyticsMetricsResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| daily_metrics | array<`PinAnalyticsDailyMetrics`> |  | Array with the requested daily metric records |
| lifetime_metrics | map<string, integer> |  | The lifetime metric name and value. |
| summary_metrics | map<string, number> |  | The metric name and value over the requested period for each requested metric |

### `AiDisclosures`

AI disclosure declarations the creator has made about the Pin.

| Field | Type | Required | Description |
|---|---|---|---|
| values | array<`AiDisclosureItem`> | yes | List of AI disclosure declarations the creator has made about this Pin. |

### `PinMediaSource`

Pin media source that can be an image, video, or a mix of both passed in as a request.

Type: `PinMediaSourceImageBase64` | `PinMediaSourceImageURL` | `PinMediaSourceVideoID` | `PinMediaSourceImagesBase64` | `PinMediaSourceImagesURL` | `PinMediaSourcePinURL`

### `AiDisclosuresUpdate`

AI disclosure declarations the creator has made about the Pin.

| Field | Type | Required | Description |
|---|---|---|---|
| values | array<`AiDisclosureItem`> |  | List of AI disclosure declarations the creator has made about this Pin. |

### `CarouselSlot`

| Field | Type | Required | Description |
|---|---|---|---|
| description | string |  | Carousel Pin slot description. |
| link | string |  | Carousel Pin slot link. |
| title | string |  | Carousel Pin slot title. |

### `StandardPinMetricTypes`

Standard Pin metric types

Type: string enum(IMPRESSION, OUTBOUND_CLICK, PIN_CLICK, SAVE, SAVE_RATE, TOTAL_COMMENTS, TOTAL_REACTIONS, USER_FOLLOW, PROFILE_VISIT)

### `VideoPinMetricTypes`

Video Pin metric types

Type: string enum(IMPRESSION, OUTBOUND_CLICK, PIN_CLICK, SAVE, SAVE_RATE, VIDEO_MRC_VIEW, VIDEO_10S_VIEW, QUARTILE_95_PERCENT_VIEW, VIDEO_V50_WATCH_TIME, VIDEO_START, VIDEO_AVG_WATCH_TIME, TOTAL_COMMENTS, TOTAL_REACTIONS)

### `BoardOwner`

| Field | Type | Required | Description |
|---|---|---|---|
| username | string |  | _(read-only)_ |

### `PinMedia`

Pin media that can be an image, video, or a mix of both.

Type: `PinMediaWithImage` | `PinMediaWithVideo` | `PinMediaWithImages` | `PinMediaWithVideos` | `PinMediaWithImageAndVideo`

### `PinAnalyticsDailyMetrics`

| Field | Type | Required | Description |
|---|---|---|---|
| data_status | `DataStatus` |  |  |
| date | string |  | Metrics date (UTC): YYYY-MM-DD. |
| metrics | map<string, number> |  |  |

### `AiDisclosureItem`

AI disclosure declaration the creator has made about the Pin.

Type: string enum(AI_MODIFIED, SYNTHETIC_PERFORMER)

### `PinMediaSourceImageBase64`

Image Base64-based media source.

| Field | Type | Required | Description |
|---|---|---|---|
| content_type | `ContentType` | yes |  |
| data | string | yes |  |
| is_standard | boolean |  | Set the parameter to false to create the new simplified Pin instead of the standard pin. Currently the field is only available to a list of beta users. _(default true)_ |
| source_type | string enum(image_base64) | yes | The source type of the media. |

### `PinMediaSourceImageURL`

Image URL-based media source.

| Field | Type | Required | Description |
|---|---|---|---|
| is_standard | boolean |  | Set the parameter to false to create the new simplified Pin instead of the standard pin. Currently the field is only available to a list of beta users. _(default true)_ |
| source_type | string enum(image_url) | yes | The source type of the media. |
| url | string | yes |  |

### `PinMediaSourceImagesBase64`

Multiple Base64-based images media source

| Field | Type | Required | Description |
|---|---|---|---|
| index | integer |  | Zero-based index of the carousel card that should appear first when the Pin is shown. Allows advertisers to pick any card (1st, 2nd, 3rd, etc.) as the default start point. Primary use case is starting on the middle card so Pinners can swipe either direction to explore a spectrum. _(minimum 0)_ |
| items | array<`PinMediaSourceImagesBase64Item`> | yes | Array with image objects. |
| source_type | string enum(multiple_image_base64) | yes | The source type of the media. |

### `PinMediaSourceImagesURL`

Multiple URL-based images media source

| Field | Type | Required | Description |
|---|---|---|---|
| index | integer |  | Zero-based index of the carousel card that should appear first when the Pin is shown. Allows advertisers to pick any card (1st, 2nd, 3rd, etc.) as the default start point. Primary use case is starting on the middle card so Pinners can swipe either direction to explore a spectrum. _(minimum 0)_ |
| items | array<`PinMediaSourceImagesURLItem`> | yes | Array with image objects. |
| source_type | string enum(multiple_image_urls) | yes | The source type of the media. |

### `PinMediaSourcePinURL`

Pin URL-based media source for product pin creation. Currently the field is only available to a list of beta users.

| Field | Type | Required | Description |
|---|---|---|---|
| is_affiliate_link | boolean |  | This is an affiliate link or sponsored product. The FTC requires disclosure for paid partnerships and affiliate products. _(default false)_ |
| source_type | string enum(pin_url) | yes |  |

### `PinMediaSourceVideoID`

Video ID-based media source.

| Field | Type | Required | Description |
|---|---|---|---|
| cover_image_content_type | `ContentType` |  | Content type for cover image Base64. |
| cover_image_data | string |  | Cover image Base64. |
| cover_image_key_frame_time | integer |  | Keyframe timestamp for cover image (seconds). If entered time exceeds video duration, the last frame is used. _(minimum 0)_ |
| cover_image_url | string |  | Cover image URL. |
| is_standard | boolean |  | Set the parameter to false to create the new simplified Pin instead of the standard pin. Currently the field is only available to a list of beta users. _(default true)_ |
| media_id | string | yes |  |
| source_type | string enum(video_id) | yes |  |

### `PinMediaWithImage`

Pin with image.

| Field | Type | Required | Description |
|---|---|---|---|
| images | `ImageSize` |  |  |
| media_type | string enum(image) | yes |  |

### `PinMediaWithImageAndVideo`

Pin with a mix of images and videos.

| Field | Type | Required | Description |
|---|---|---|---|
| items | array<`PinMediaMetadata`> |  |  |
| media_type | string enum(multiple_mixed) | yes |  |

### `PinMediaWithImages`

Pin with multiple images.

| Field | Type | Required | Description |
|---|---|---|---|
| items | array<`ImageMetadata`> |  |  |
| media_type | string enum(multiple_images) | yes |  |

### `PinMediaWithVideo`

Pin with video.

| Field | Type | Required | Description |
|---|---|---|---|
| cover_image_url | string |  |  |
| duration | number |  | Duration (in miliseconds). Field maybe null after creation due to video processing time. _(nullable)_ |
| height | integer |  | Height (in pixels). Field maybe null after creation due to video processing time. _(nullable)_ |
| images | `ImageSize` |  |  |
| media_type | string enum(video) | yes |  |
| video_url | string |  | Video url (720p).  **Note:** This field is limited and not available to all apps. _(nullable)_ |
| video_url_hls | string |  | Video url (HLS).  **Note:** This field is limited and not available to all apps. _(nullable)_ |
| width | integer |  | Width (in pixels). Field maybe null after creation due to video processing time. _(nullable)_ |

### `PinMediaWithVideos`

Pin with multiple videos.

| Field | Type | Required | Description |
|---|---|---|---|
| items | array<`VideoMetadataWithItemType`> |  |  |
| media_type | string enum(multiple_videos) | yes |  |

### `DataStatus`

Metrics availablity, e.g., "READY".

Type: string enum(PROCESSING, READY, ESTIMATE, BEFORE_BUSINESS_CREATED, BEFORE_DATA_RETENTION_PERIOD, BEFORE_PIN_DATA_RETENTION_PERIOD, BEFORE_METRIC_START_DATE, BEFORE_CORE_METRIC_START_DATE, BEFORE_PIN_FORMAT_METRIC_START_DATE, BEFORE_AUDIENCE_METRIC_START_DATE, BEFORE_AUDIENCE_MONTHLY_METRIC_START_DATE, BEFORE_VIDEO_METRIC_START_DATE, BEFORE_CONVERSION_METRIC_START_DATE, PURCHASERS_METRIC_SMALLER_THAN_THRESHOLD, IN_BAD_TAG_DATE, BEFORE_PUBLISHED_METRIC_START_DATE, BEFORE_ASSIST_METRIC_START_DATE, BEFORE_PIN_CREATED, BEFORE_ACCOUNT_CLAIMED, BEFORE_DEMOGRAPHIC_FILTERS_START_DATE, AUDIENCE_SEGMENT_SMALLER_THAN_THRESHOLD, AUDIENCE_TOTAL_SMALLER_THAN_THRESHOLD, BEFORE_PRODUCT_GROUP_FILTER_START_DATE)

### `ContentType`

Type: string enum(image/jpeg, image/png)

### `PinMediaSourceImagesBase64Item`

| Field | Type | Required | Description |
|---|---|---|---|
| content_type | `ContentType` | yes |  |
| data | string | yes |  |
| description | string |  |  |
| link | string |  |  |
| title | string |  |  |

### `PinMediaSourceImagesURLItem`

| Field | Type | Required | Description |
|---|---|---|---|
| description | string |  |  |
| link | string |  |  |
| title | string |  |  |
| url | string | yes |  |

### `ImageSize`

| Field | Type | Required | Description |
|---|---|---|---|
| 1200x | `ImageDetails` |  |  |
| 150x150 | `ImageDetails` |  |  |
| 400x300 | `ImageDetails` |  |  |
| 600x | `ImageDetails` |  |  |

### `PinMediaMetadata`

Per-item entry inside `PinMedia.items` for mixed image/video pins. Discriminated by `item_type`.

Type: `ImageMetadata` | `VideoMetadataWithItemType`

### `ImageMetadata`

| Field | Type | Required | Description |
|---|---|---|---|
| description | string |  | _(nullable)_ |
| images | `ImageSize` |  |  |
| item_type | string enum(image) | yes | Discriminator literal identifying this as image metadata inside a `PinMediaMetadata` payload. |
| link | string |  | _(nullable)_ |
| title | string |  | _(nullable)_ |

### `VideoMetadataWithItemType`

| Field | Type | Required | Description |
|---|---|---|---|
| cover_image_url | string |  |  |
| duration | number |  | Duration (in miliseconds). Field maybe null after creation due to video processing time. _(nullable)_ |
| height | integer |  | Height (in pixels). Field maybe null after creation due to video processing time. _(nullable)_ |
| item_type | string enum(video) | yes | Discriminator literal identifying this as video metadata inside a `PinMediaMetadata` payload. |
| video_url | string |  | Video url (720p).  **Note:** This field is limited and not available to all apps. _(nullable)_ |
| video_url_hls | string |  | Video url (HLS).  **Note:** This field is limited and not available to all apps. _(nullable)_ |
| width | integer |  | Width (in pixels). Field maybe null after creation due to video processing time. _(nullable)_ |

### `ImageDetails`

| Field | Type | Required | Description |
|---|---|---|---|
| height | integer | yes | _(nullable)_ |
| url | string | yes |  |
| width | integer | yes | _(nullable)_ |

