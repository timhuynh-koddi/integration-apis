# Pinterest API v5: Conversion Events

> Source: Pinterest REST API v5 OpenAPI spec (https://github.com/pinterest/api-description, v5.32.0); docs https://developers.pinterest.com/docs/api/v5/. Base URL: https://api.pinterest.com/v5. Fetched 2026-11-19.

Operations: 1

---

## POST /ad_accounts/{ad_account_id}/events

**Send conversions**

The Pinterest API offers advertisers a way to send Pinterest their conversion information (including web conversions, in-app conversions, or even offline conversions) based on their `ad_account_id`. The request body should be a JSON object.
- This endpoint requires an `access_token` be generated through Ads Manager. Review the [Conversions Guide](/docs/api-features/conversion-overview/) for more details. (Note that the authorization header required is `Authorization: Bearer <access_token>`).
- The token's `user_account` must either be the Owner of the specified ad account, or have one of the necessary roles granted to them via [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts): Admin, Analyst, Audience, Campaign. (Note that the token can be used across multiple ad accounts under an user ID.)
- This endpoint has a rate limit of 5,000 calls per minute per ad account.
- If the merchant is submitting this information using both Pinterest conversion tags and the Pinterest API, Pinterest will remove duplicate information before reporting. (Note that events that took place offline cannot be deduplicated.)

Operation ID: `events/create`

Scopes: pinterest_oauth2: ads:write; conversion_token: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |
| test | query | boolean |  | Include query param ?test=true to mark the request as a test request. The events will not be recorded but the API will still return the same response messages. Use this mode to verify your requests are working and your events are constructed correctly. Warning: If you use this query parameter, be certain that it is off (set to false or deleted) before sending a legitimate (non-testing) request. |

**Request body** (`application/json`, required): `ConversionEventsCreate`

**Response 200** (`application/json`): `ConversionEvents`

---

## Schemas

### `ConversionEvents`

Conversion events.

| Field | Type | Required | Description |
|---|---|---|---|
| events | array<`ConversionApiResponseEventsItems`> | yes | Specific messages for each event received. The order will match the order in which the events were received in the request. _(read-only)_ |
| num_events_processed | integer | yes | Number of events that were successfully processed from the events. _(read-only)_ |
| num_events_received | integer | yes | Total number of events received in the request. _(read-only)_ |

### `ConversionEventsCreate`

Conversion events.

| Field | Type | Required | Description |
|---|---|---|---|
| data | array<`ConversionEventsDataItems`> | yes | A list of events (one or more) encapsulated by a data object. |

### `ConversionApiResponseEventsItems`

| Field | Type | Required | Description |
|---|---|---|---|
| error_message | string |  | Error message containing more information about why the event failed to be processed. _(nullable)_ |
| status | `EventProcessingStatus` | yes | Whether the event was processed successfully. |
| warning_message | string |  | Warning messages about any fields in the event which are not standard. These are not critical to event processing. _(nullable)_ |

### `ConversionEventsDataItems`

| Field | Type | Required | Description |
|---|---|---|---|
| action_source | string | yes | The source indicating where the conversion event occurred. - `app_android` - `app_ios` - `web` - `offline` |
| app_id | string |  | The app store app ID. _(nullable)_ |
| app_info | `ConversionEventAppInfo` |  |  |
| app_name | string |  | Name of the app. _(nullable)_ |
| app_version | string |  | Version of the app. _(nullable)_ |
| custom_data | `ConversionEventsDataItemsCustomData` |  |  |
| device_brand | string |  | Brand of the user device. _(nullable)_ |
| device_carrier | string |  | User device's mobile carrier. _(nullable)_ |
| device_info | `ConversionEventDeviceInfo` |  |  |
| device_model | string |  | Model of the user device. _(nullable)_ |
| device_type | string |  | Type of the user device. _(nullable)_ |
| event_id | string | yes | A unique id string that identifies this event and can be used for deduping between events ingested via both the conversion API and Pinterest tracking. Without this, event's data is likely to be double counted and will cause report metric inflation. Third-party vendors make sure this field is updated on both Pinterest tag and Conversions API side before rolling out template for Conversions API. |
| event_name | string | yes | The type of the user event. Please use the right event_name; otherwise the event will not be accepted and show up correctly in reports.  - `add_payment_info` - `add_to_cart` - `add_to_wishlist` - `app_install` - `app_open` - `checkout` - `contact` - `custom` - `customize_product` - `find_location` - `initiate_checkout` - `lead` - `page_visit` - `schedule` - `search` - `signup` - `start_trial` - `submit_application` - `subscribe` - `view_category` - `view_content` - `watch_video` |
| event_source_url | string |  | URL of the web conversion event. _(nullable)_ |
| event_time | integer (int64) | yes | The time when the event happened. Unix timestamp in seconds. |
| language | string |  | Two-character ISO-639-1 language code indicating the user's language. _(nullable)_ |
| opt_out | boolean |  | When action_source is web or offline, it defines whether the user has opted out of tracking for web conversion events. While when action_source is app_android or app_ios, it defines whether the user has enabled Limit Ad Tracking on their iOS device, or opted out of Ads Personalization on their Android device. |
| os_version | string |  | Version of the device operating system. _(nullable)_ |
| partner_name | string |  | The third party partner name responsible to send the event to Conversions API on behalf of the advertiser. The naming convention is "ss-partnername" lowercase. E.g 'ss-shopify' _(nullable)_ |
| user_data | `ConversionEventsUserDataProperties` | yes | Object containing customer information data. Note, It is required at least one of 1) em, 2) hashed_maids or 3) pair client_ip_address + client_user_agent. |
| wifi | boolean |  | Whether the event occurred when the user device was connected to wifi. |

### `EventProcessingStatus`

Status of a single event in the response.

Type: string enum(failed, processed)

### `ConversionEventAppInfo`

Object containing information about the application where event occurred.

| Field | Type | Required | Description |
|---|---|---|---|
| app_id | string |  | App ID in Google Play Store, AppStore or other stores. _(maxLength 200)_ |
| app_name | string |  | Name of the app. Primarily used for Mobile Apps. _(maxLength 200)_ |
| app_package_name | string |  | App package name _(maxLength 200)_ |
| app_store | string |  | The name of the app distributor or store from which the app was installed. Some options: Samsung Galaxy Store, Google Play Store, Amazon Store, Apple App Store, F-Droid, Aptoide, Obtanium, Huawei AppGallery, Xiaomi Mi GetApps _(maxLength 100)_ |
| app_version | string |  | App version. Primarily used for mobile apps _(maxLength 100)_ |
| install_time | integer |  | App install time. Unix timestamp in seconds _(minimum 0)_ |
| user_agent | string |  | User Agent request header. Primarily used for Web events _(maxLength 16384)_ |
| window_height | integer |  | Inner height of the window or viewport. _(minimum 0; maximum 30720)_ |
| window_width | integer |  | Inner width of the window or viewport. _(minimum 0; maximum 30720)_ |

### `ConversionEventDeviceInfo`

Object containing information about the device where event occurred.

| Field | Type | Required | Description |
|---|---|---|---|
| battery_level | integer |  | Battery charge level percentage _(minimum 0; maximum 100)_ |
| brand | string |  | Device brand _(maxLength 100)_ |
| carrier | string |  | User device's mobile carrier. _(maxLength 100)_ |
| cpu_cores | integer |  | Number of CPU cores _(minimum 0; maximum 1152)_ |
| external_storage_free_space | integer |  | External storage size in GB _(minimum 0; maximum 1048576)_ |
| external_storage_size | integer |  | External storage size in GB _(minimum 0; maximum 1048576)_ |
| form_factor | `FormFactor` |  | Device form factor |
| kernel_version | string |  | Kernel version. Examples: Linux: 6.15. Obtain by running: uname -r MacOS: 24.3.0. Obtain by running: sysctl kern.version Android: 6.6. Obtain from OS.uname().release _(maxLength 100)_ |
| languages | array<string> |  | List of user installed languages. ISO 639-1 format |
| locale | string |  | Device locale BCP-47 format _(maxLength 35)_ |
| model | string |  | Device model name _(maxLength 100)_ |
| network_type | `NetworkType` |  | Network type: 4G, 5G, ethernet, wifi In Android: NetworkCapabilities.getNetworkCapabilities() |
| os_family | `OsFamily` |  | OS Family |
| os_name | string |  | Short name of the OS. This value if specific to os family. Examples: Windows: 10, 11; Android: 16; iOS: 18; MacOS: 15; Linux: Debian, Ubuntu, Arch _(maxLength 100)_ |
| os_release_name | string |  | Marketing name for the release version iOS: Dawn Android: Baklava MacOS: Sequoia Ubuntu Linux: Plucky Puffin _(maxLength 100)_ |
| os_version | string |  | Full name of the version. Examples: iOS: 18.3 Android: 16.1 MacOS: 15.5 Windows: 24H2 Ubuntu Linux: 25.04 _(maxLength 100)_ |
| screen_density | integer |  | Screen density, PPI _(minimum 0; maximum 100000)_ |
| screen_height | integer |  | Screen height in pixels _(minimum 0; maximum 30720)_ |
| screen_width | integer |  | Screen width in pixels _(minimum 0; maximum 30720)_ |
| storage_free_space | integer |  | Internal storage size in GB _(minimum 0; maximum 1048576)_ |
| storage_size | integer |  | Internal storage size in GB _(minimum 0; maximum 1048576)_ |
| timezone | string |  | Device timezone _(maxLength 40)_ |
| timezone_abbr | string |  | Timezone abbreviation _(maxLength 5)_ |
| type | string |  | Device type _(maxLength 100)_ |

### `ConversionEventsDataItemsCustomData`

Object containing other custom data.

| Field | Type | Required | Description |
|---|---|---|---|
| content_brand | string |  | The brand of the content associated with the event. _(nullable)_ |
| content_category | string |  | The category of the content associated with the event. _(nullable)_ |
| content_ids | array<string> |  | List of products IDs. We recommend using this if you are a merchant for PageVisit, AddToCart and Checkouts. For detail, please check [here](https://help.pinterest.com/en/business/article/before-you-get-started-with-catalogs) (Install the Pinterest tag section). |
| content_name | string |  | The name of the page or product associated with the event. _(nullable)_ |
| contents | array<`ConversionEventsDataItemsCustomDataContentsItems`> |  | A list of objects containing information about products, such as price and quantity. We recommend using this if you are a merchant for PageVisit, AddToCart and Checkouts. For detail, please check [here](https://help.pinterest.com/en/business/article/before-you-get-started-with-catalogs) (Install the Pinterest tag section). |
| currency | string |  | The ISO-4217 currency code. If not provided, we will default to the advertiser's currency set during account creation. Your campaign performance needs this field to report right ROAS/CPA. _(nullable)_ |
| custom_fields | string |  | A field for arbitrarily structured data. Accepted as a JSON string or a URL-encoded JSON string. Recognized keys are remapped to their corresponding standard fields; unknown shapes are ignored. _(nullable)_ |
| external_measurement_id | string |  | Only use when instructed. _(nullable)_ |
| external_measurement_vendor_id | integer |  | Only use when instructed. _(nullable)_ |
| np | string |  | Named partner. Not required, this is for Pinterest internal use only. Please do not use this unless specifically guided. _(nullable)_ |
| num_items | integer (int64) |  | Total number of products of the event. For example, the total number of items purchased in a checkout event. We recommend using this if you are a merchant for AddToCart and Checkouts. For detail, please check [here](https://help.pinterest.com/en/business/article/before-you-get-started-with-catalogs) (Install the Pinterest tag section). |
| opt_out_type | string |  | Flags for different privacy rights laws to opt out users of sharing personal information. Separate values with commas. See the Help Center article about [limited data processing](https://help.pinterest.com/en/business/article/limited-data-processing) and the developer's guide for [tracking conversion events](/docs/track-conversions/track-conversions-in-the-api/#whether-the-user-has-opted-out-of-web-or-offline-conversion-events) for help with using this parameter. _(nullable)_ |
| order_id | string |  | The order ID. We recommend sending order_id to help us deduplicate events when necessary. This also helps to run other measurement products at Pinterest. _(nullable)_ |
| predicted_ltv | string |  | Predicted lifetime value of user associated with the event. Accepted as a string in the request; it will be parsed into a double. _(nullable)_ |
| search_string | string |  | The search string related to the user conversion event. _(nullable)_ |
| value | string |  | Total value of the event. Accepted as a string in the request; it will be parsed into a double. For example, if there are two items in a checkout event, the value should be the total price. We recommend to use pre-tax, pre-shipping final value. _(nullable)_ |

### `ConversionEventsUserDataProperties`

| Field | Type | Required | Description |
|---|---|---|---|
| click_id | string |  | The unique identifier stored in _epik cookie on your domain or &epik= query parameter in the URL. We highly recommend this on checkout events at least. It may improve reporting performance such as ROAS/CPA. _(nullable)_ |
| client_ip_address | string |  | The user's IP address, which can be either in IPv4 or IPv6 format. Used for matching. We highly recommend this for all events. It may improve reporting performance such as ROAS/CPA. |
| client_user_agent | string |  | The user agent string of the user's web browser. We highly recommend this for all events. It may improve reporting performance such as ROAS/CPA. |
| country | array<string> |  | Sha256 hashes of two-character ISO-3166 country code indicating the user's country, in lowercase. The string should be in the UTF-8 format. |
| ct | array<string> |  | Sha256 hashes of user's city, in lowercase, and without spaces or punctuation. User residency city (mostly billing). The string should be in the UTF-8 format. |
| customer_type | `CustomerType` |  | Indicates the type of user, e.g. new to the business or a returning customer. |
| db | array<string> |  | Sha256 hashes of user's date of birthday, given as year, month, and day. The string should be in the UTF-8 format. |
| em | array<string> |  | Sha256 hashes of lowercase version of user's email addresses. Used for matching. We highly recommend this on checkout events at least. It may improve reporting performance such as ROAS/CPA. The string should be in the UTF-8 format. |
| external_id | array<string> |  | Sha256 hashes of the unique id from the advertiser that identifies a user in their space, e.g. user id, loyalty id, etc. We highly recommend this on all events. It may improve reporting performance such as ROAS/CPA. The string should be in the UTF-8 format. |
| fn | array<string> |  | Sha256 hashes of user's first name, in lowercase. We highly recommend this on checkout events at least. It may improve reporting performance such as ROAS/CPA. The string should be in the UTF-8 format. |
| ge | array<string> |  | Sha256 hashes of user's gender, in lowercase. Either "f" or "m" or "n" for non-binary gender. The string should be in the UTF-8 format. |
| hashed_maids | array<string> |  | Sha256 hashes of user's "Google Advertising IDs" (GAIDs) or "Apple's Identifier for Advertisers" (IDFAs). Used for matching. We highly recommend this on checkout events at least. It may improve reporting performance such as ROAS/CPA. The string should be in the UTF-8 format. |
| ln | array<string> |  | Sha256 hashes of user's last name, in lowercase. We highly recommend this on checkout events at least. It may improve reporting performance such as ROAS/CPA. The string should be in the UTF-8 format. |
| partner_id | string |  | A unique identifier of visitors' information defined by third party partners. e.g RampID _(nullable)_ |
| ph | array<string> |  | Sha256 hashes of user's phone numbers, only digits with country code, area code, and number. Remove any symbols, letters, spaces and leading zeros. We highly recommend this on checkout events at least. It may improve reporting performance such as ROAS/CPA. The string should be in the UTF-8 format. |
| st | array<string> |  | Sha256 hashes of user's state, given as a two-letter code in lowercase. User residency state (mostly billing). The string should be in the UTF-8 format. |
| zp | array<string> |  | Sha256 hashes of user's zipcode, only digits. User residency zipcode (mostly billing). The string should be in the UTF-8 format. |

### `FormFactor`

Device form factor

Type: string enum(desktop, laptop, cellphone, tablet, smartwatch, tv, vr, console, other)

### `NetworkType`

Type of network connection.

Type: string enum(wifi, cellular_2g, cellular_3g, cellular_4g, cellular_5g, cellular_6g, ethernet, unknown)

### `OsFamily`

Operating system family.

Type: string enum(ios, android, macos, windows, linux, bsd, other)

### `ConversionEventsDataItemsCustomDataContentsItems`

| Field | Type | Required | Description |
|---|---|---|---|
| id | string |  | The id of a product. We recommend using this if you are a merchant for AddToCart and Checkouts. For detail, please check [here](https://help.pinterest.com/en/business/article/before-you-get-started-with-catalogs) (Install the Pinterest tag section). |
| item_brand | string |  | The brand of a product. |
| item_brand_id | string |  | The brand ID of a product. _(maxLength 64)_ |
| item_category | string |  | The category of a product. |
| item_name | string |  | The name of a product. |
| item_price | string |  | The price of a product. Accepted as a string in the request; it will be parsed into a double. This is the original item value before any discount. We recommend using this if you are a merchant for PageVisit, AddToCart and Checkouts. For detail, please check [here](https://help.pinterest.com/en/business/article/before-you-get-started-with-catalogs) (Install the Pinterest tag section). |
| quantity | integer (int64) |  | The amount of a product. We recommend using this if you are a merchant for AddToCart and Checkouts. For detail, please check [here](https://help.pinterest.com/en/business/article/before-you-get-started-with-catalogs) (Install the Pinterest tag section). |

### `CustomerType`

Customer type

Type: string enum(new, returning)

