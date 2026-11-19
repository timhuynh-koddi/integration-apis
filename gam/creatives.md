# Creatives

> Source: Google Ad Manager API (beta, REST v1) Discovery document (https://admanager.googleapis.com/$discovery/rest?version=v1, revision 20261118); release notes https://developers.google.com/ad-manager/api/beta/docs/release-notes. Fetched 2026-11-19. Resource names have the form `networks/{networkCode}/...`.

Used by koddi-offsite via: SOAP `CreativeService` get/create/update.

---

## networks.creatives.create

`POST https://admanager.googleapis.com/v1/{+parent}/creatives`

Creates a `Creative` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where this `Creative` will be created. Format: `networks/{network_code}` |

**Request body**: `Creative`

**Response**: `Creative`

---

## networks.creatives.batchActivate

`POST https://admanager.googleapis.com/v1/{+parent}/creatives:batchActivate`

Batch activates `Creative` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. Format: `networks/{network_code}` |

**Request body**: `BatchActivateCreativesRequest`

**Response**: `BatchActivateCreativesResponse`

---

## networks.creatives.batchDeactivate

`POST https://admanager.googleapis.com/v1/{+parent}/creatives:batchDeactivate`

Deactivates a list of `Creative` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. Format: `networks/{network_code}` |

**Request body**: `BatchDeactivateCreativesRequest`

**Response**: `BatchDeactivateCreativesResponse`

---

## networks.creatives.list

`GET https://admanager.googleapis.com/v1/{+parent}/creatives`

Lists `Creative` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of Creatives. Format: networks/{network_code} |
| orderBy | query | string |  | Optional. Expression to specify sorting order. See syntax details at https://developers.google.com/ad-manager/api/beta/filters#order |
| skip | query | integer (int32) |  | Optional. Number of individual resources to skip while paginating. |
| pageSize | query | integer (int32) |  | Optional. The maximum number of Creatives to return. The service may return fewer than this value. If unspecified, at most 50 creatives will be returned. The maximum value is 1000; values greater than 1000 will be coerced to 1000. |
| pageToken | query | string |  | Optional. A page token, received from a previous `ListCreatives` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCreatives` must match the call that provided the page token. |
| filter | query | string |  | Optional. Expression to filter the response. See syntax details at https://developers.google.com/ad-manager/api/beta/filters Syntax summary: double-quoted `"..."` (never `'...'`) strings and RFC 3339 timestamps, full resource names on reference fields (for example, `order = "networks/123/orders/456"`, not `*Id` or bare IDs), prefix or suffix `*` wildcards with `=` (`displayName = "foo*"`), `:` for substring or repeated-field matching, unquoted enums and booleans, uppercase `AND`/`OR`/`NOT`, and standalone `IN(field, SET(v1, v2))` (not `field IN (...)`). **Filterable fields:** * `advertiser` * `displayName` * `name` * `scannedRichMediaAdsCompanies` * `thirdPartyDataDeclarationStatus` * `updateTime` |

**Response**: `ListCreativesResponse`

---

## networks.creatives.get

`GET https://admanager.googleapis.com/v1/{+name}`

Retrieves a `Creative` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The resource name of the Creative. Format: `networks/{network_code}/creatives/{creative_id}` |

**Response**: `Creative`

---

## networks.creatives.patch

`PATCH https://admanager.googleapis.com/v1/{+name}`

Updates a `Creative` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Identifier. The resource name of the Creative. Format: `networks/{network_code}/creatives/{creative_id}` |
| updateMask | query | string (google-fieldmask) |  | Optional. The list of fields to update. |

**Request body**: `Creative`

**Response**: `Creative`

---

## networks.creatives.batchCreate

`POST https://admanager.googleapis.com/v1/{+parent}/creatives:batchCreate`

Creates `Creative` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `Creatives` will be created. Format: `networks/{network_code}` The parent field in the CreateCreativeRequest must match this field. |

**Request body**: `BatchCreateCreativesRequest`

**Response**: `BatchCreateCreativesResponse`

---

## networks.creatives.batchUpdate

`POST https://admanager.googleapis.com/v1/{+parent}/creatives:batchUpdate`

Batch updates `Creative` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `Creatives` will be updated. Format: `networks/{network_code}` The parent field in the UpdateCreativeRequest must match this field. |

**Request body**: `BatchUpdateCreativesRequest`

**Response**: `BatchUpdateCreativesResponse`

---

## Schemas

### `Creative`

The Creative resource.

| Field | Type | Description |
|---|---|---|
| customCreative | `CustomCreativeDetails` | Optional. A Creative that contains a custom HTML snippet and file assets. |
| richMediaStudioCreative | `RichMediaStudioCreativeDetails` | Optional. A Creative that is created by a Rich Media Studio. You cannot create this creative, but you can update some fields of this creative. |
| appliedLabels | array<`AppliedLabel`> | Optional. The set of labels applied directly to this creative. |
| adSenseCreative | `AdSenseCreativeDetails` | Optional. An AdSense dynamic allocation creative. |
| clickTrackingCreative | `ClickTrackingCreativeDetails` | Optional. A creative that is used for tracking clicks on ads that are served directly from the customers' web servers or media servers. NOTE: The size attribute is not used for click tracking creative and it will not be persisted upon save. |
| audioRedirectCreative | `AudioRedirectCreativeDetails` | Optional. A Creative that contains externally hosted audio ads and is served via VAST XML. |
| previewUrl | string | Output only. The URL of the creative for previewing the media. |
| advertiser | string | Required. The resource name of the Company, which is of type Company.Type.ADVERTISER, to which this Creative belongs. Format: "networks/{network_code}/companies/{company_id}" |
| thirdPartyDataDeclarationStatus | string enum(CREATIVE_THIRD_PARTY_DATA_DECLARATION_STATUS_UNSPECIFIED, COMPLETE, INCOMPLETE, UNSCANNED) | Output only. The status of the publisher's `ThirdPartyDataDeclaration`, when compared with the set of third party companies detected via automated scanning. For example, if automated scanning detects more companies than have been declared, this status will be CreativeThirdPartyDataDeclarationStatus.INCOMPLETE. Values: CREATIVE_THIRD_PARTY_DATA_DECLARATION_STATUS_UNSPECIFIED - Default value. This value is unused.; COMPLETE - All companies detected in scanning exist in the associated ThirdPartyDataDeclaration. This could be because there were no detected companies, or all the detected companies exist in the associated declaration.; INCOMPLETE - There are companies detected in scanning that do not exist in the associated ThirdPartyDataDeclaration. This could be because there is no declaration, at either the creative level or network level, or the declaration is missing companies.; UNSCANNED - This entity has not been recently scanned. This can happen either because there is no scanning data for this creative, or the scanning data is stale (because the creative is not associated with any active line items / eligible to serve). |
| imageCreative | `ImageCreativeDetails` | Optional. A Creative that displays an image. |
| selfDeclaredEuropeanUnionPoliticalContent | boolean | Optional. Whether this creative contains self-declared European Union political content. |
| name | string | Identifier. The resource name of the Creative. Format: `networks/{network_code}/creatives/{creative_id}` |
| imageRedirectOverlayCreative | `ImageRedirectOverlayCreativeDetails` | Optional. An overlay Creative that loads an image asset from a specified URL and is served via VAST XML. Overlays cover part of the video content they are displayed on top of. This creative is read only. |
| legacyDfpCreative | `LegacyDfpCreativeDetails` | Optional. A Creative that isn't supported by Google DFP, but was migrated from DART. Creatives of this type cannot be created or modified. |
| updateTime | string (google-datetime) | Output only. The instant this Creative was last modified. |
| thirdPartyDataDeclaration | `ThirdPartyDataDeclaration` | Optional. The third party companies associated with this creative. This is distinct from any associated companies that Google may detect programmatically. |
| audioCreative | `AudioCreativeDetails` | Optional. A Creative that contains Ad Manager hosted audio ads and is served via VAST XML. |
| imageOverlayCreative | `ImageOverlayCreativeDetails` | Optional. An overlay Creative that displays an image and is served via VAST 2.0 XML. Overlays cover part of the video content they are displayed on top of. |
| vastRedirectCreative | `VastRedirectCreativeDetails` | Optional. A Creative that points to an externally hosted VAST ad and is served via VAST XML as a VAST Wrapper. |
| imageRedirectCreative | `ImageRedirectCreativeDetails` | Optional. A Creative that loads an image asset from a specified URL. |
| videoRedirectCreative | `VideoRedirectCreativeDetails` | Optional. A Creative that contains externally hosted video ads and is served via VAST XML. |
| html5Creative | `Html5CreativeDetails` | Optional. A Creative that contains a zipped HTML5 bundle asset, a list of third party impression trackers, and a third party click tracker. |
| adExchangeCreative | `AdExchangeCreativeDetails` | Optional. An Ad Exchange dynamic allocation creative. |
| displayName | string | Required. Display name of the `Creative`. This attribute has a maximum length of 255 characters. |
| templateCreative | `TemplateCreativeDetails` | Optional. A Creative that is created by the specified creative template. |
| size | `Size` | Required. Immutable. The Size of the creative. |
| buyerPlacementConfig | `BuyerPlacementConfig` | Optional. The buyer placement configuration for this creative. |
| setTopBoxCreative | `SetTopBoxCreativeDetails` | Optional. A Creative that will be served into cable set-top boxes. There are no assets for this creative type, as they are hosted by external cable systems. |
| adBadgingEnabled | boolean | Optional. Non-empty default. Whether the creative has ad badging enabled. Defaults to false for VastRedirectCreative, ThirdPartyCreative, AudioRedirectCreative, ProgrammaticCreative, LegacyDfpMobileCreative, FlashOverlayCreative, GraphicalInterstitialCreative, LegacyDfpCreative, MobileAdNetworkCreative, MobileVideoInterstitialCreative, SdkMediationCreative, and FlashCreative types. Defaults to true for all other creative types. |
| customFieldValues | array<`CustomFieldValue`> | Optional. The values of the custom fields associated with this creative. |
| thirdPartyCreative | `ThirdPartyCreativeDetails` | Optional. A Creative that is served by a 3rd-party vendor. |
| scannedRichMediaAdsCompanies | array<string> | Output only. The set of RichMediaAdsCompany resources that were found during automated scanning of this creative. Format: `networks/{network_code}/richMediaAdsCompanies/{rich_media_ads_company}` This is distinct from any associated companies that the publisher has declared via the `ThirdPartyDataDeclaration`. |
| aspectRatioImageCreative | `AspectRatioImageCreativeDetails` | Optional. A Creative intended for mobile platforms that displays an image, whose size is defined as an aspect ratio. It can have multiple images whose dimensions conform to that aspect ratio. |
| internalRedirectCreative | `InternalRedirectCreativeDetails` | Optional. A Creative hosted by Campaign Manager 360. Similar to third-party creatives, a Campaign Manager 360 tag is used to retrieve a creative asset. However, Campaign Manager 360 tags are not sent to the user's browser. Instead, they are processed internally within the Google Marketing Platform system. |
| videoCreative | `VideoCreativeDetails` | Optional. A Creative that contains Ad Manager hosted video ads and is served via VAST XML. |
| programmaticCreative | `ProgrammaticCreativeDetails` | Optional. A Creative used for programmatic trafficking. This creative will be auto-created with the right approval from the buyer. This creative cannot be created through the API. This creative can be updated. |

### `BatchActivateCreativesRequest`

Request object for `BatchActivateCreatives` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The resource names of the `Creative`s to activate. Format: `networks/{network_code}/creatives/{creative_id}` |

### `BatchActivateCreativesResponse`

Response object for `BatchActivateCreatives` method.

Type: object

### `BatchDeactivateCreativesRequest`

Request object for `BatchDeactivateCreatives` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The resource names of the `Creative`s to deactivate. Format: `networks/{network_code}/creatives/{creative_id}` |

### `BatchDeactivateCreativesResponse`

Response object for `BatchDeactivateCreatives` method.

Type: object

### `ListCreativesResponse`

Response object for `ListCreativesRequest` containing matching `Creative` objects.

| Field | Type | Description |
|---|---|---|
| nextPageToken | string | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. |
| creatives | array<`Creative`> | The `Creative` objects from the specified network. |
| totalSize | integer (int32) | Total number of Creatives. If a filter was included in the request, this reflects the total number after the filtering is applied. `total_size` won't be calculated in the response unless it has been included in a response field mask. The response field mask can be provided to the method by using the URL parameter `$fields` or `fields`, or by using the HTTP/gRPC header `X-Goog-FieldMask`. For more information, see https://developers.google.com/ad-manager/api/beta/field-masks |

### `BatchCreateCreativesRequest`

Request object for `BatchCreateCreatives` method.

| Field | Type | Description |
|---|---|---|
| requests | array<`CreateCreativeRequest`> | Required. The `Creative` objects to create. A maximum of 100 objects can be created in a batch. |

### `BatchCreateCreativesResponse`

Response object for `BatchCreateCreatives` method.

| Field | Type | Description |
|---|---|---|
| creatives | array<`Creative`> | The `Creative` objects created. |

### `BatchUpdateCreativesRequest`

Request object for `BatchUpdateCreatives` method.

| Field | Type | Description |
|---|---|---|
| requests | array<`UpdateCreativeRequest`> | Required. The `Creative` objects to update. A maximum of 100 objects can be updated in a batch. |

### `BatchUpdateCreativesResponse`

Response object for `BatchUpdateCreatives` method.

| Field | Type | Description |
|---|---|---|
| creatives | array<`Creative`> | The `Creative` objects updated. |

### `AdExchangeCreativeDetails`

An Ad Exchange dynamic allocation creative.

| Field | Type | Description |
|---|---|---|
| interstitial | boolean | Optional. True if this creative is interstitial. An interstitial creative will not consider an impression served until it is fully rendered in the browser. |
| backfillSnippet | string | Optional. The code snippet (ad tag) from Ad Exchange or AdSense to traffic the dynamic allocation creative. Only valid Ad Exchange or AdSense parameters will be considered. Any extraneous HTML or JavaScript will be ignored. |
| allowsAllRequestedSizes | boolean | Optional. True if this creative is eligible for all requested sizes. |
| nativeEligible | boolean | Optional. Whether this creative is eligible for native ad-serving. This value is optional and defaults to false. |
| slotId | string | Output only. The ID of ad slot (inventory) that an advertiser might want to target. |

### `AdSenseCreativeDetails`

An AdSense dynamic allocation creative.

| Field | Type | Description |
|---|---|---|
| slotId | string | Output only. The ID of ad slot (inventory) that an advertiser might want to target. |
| backfillSnippet | string | Optional. The code snippet (ad tag) from Ad Exchange or AdSense to traffic the dynamic allocation creative. Only valid Ad Exchange or AdSense parameters will be considered. Any extraneous HTML or JavaScript will be ignored. |

### `AppliedLabel`

Represents a Label that can be applied to an entity.

| Field | Type | Description |
|---|---|---|
| label | string | Required. The label to be applied. Format: "networks/{network_code}/labels/{label_id}" |
| negated | boolean | Specifies whether or not to negate the effects of the label. |

### `AspectRatioImageCreativeDetails`

A Creative intended for mobile platforms that displays an image, whose size is defined as an aspect ratio. It can have multiple images whose dimensions conform to that aspect ratio.

| Field | Type | Description |
|---|---|---|
| altText | string | Optional. The text that is served along with the image creative, primarily for accessibility. If no suitable image size is available for the device, this text replaces the image completely. This field is optional and has a maximum length of 500 characters. |
| destinationUrl | string | Optional. The URL that the user is directed to if they click on the creative. This attribute is required unless the `destinationUrlType` is `NONE`, and has a maximum length of 1024 characters. |
| destinationUrlType | string enum(CREATIVE_DESTINATION_URL_TYPE_UNSPECIFIED, CLICK_TO_APP, CLICK_TO_CALL, CLICK_TO_WEB, NONE) | Optional. The action that should be performed if the user clicks on the creative. This attribute defaults to `CLICK_TO_WEB`. Values: CREATIVE_DESTINATION_URL_TYPE_UNSPECIFIED - Default value. This value is unused.; CLICK_TO_APP - Start an application.; CLICK_TO_CALL - Make a phone call.; CLICK_TO_WEB - Navigate to a web page. (a.k.a. "Click-through URL").; NONE - Destination URL not present. Useful for video creatives where a landing page or a product isn't necessarily applicable. |
| imageAssets | array<`CreativeAsset`> | Required. The images associated with this creative. The ad server will choose one based on the capabilities of the device. Each asset should have a size which is of the same aspect ratio as the Creative.size. This attribute is required and must have at least one asset. |
| thirdPartyImpressionTrackingUrls | array<string> | Optional. Third party impression tracking URLs to ping when this creative is displayed. |

### `AudioCreativeDetails`

A Creative that contains Ad Manager hosted audio ads and is served via VAST XML.

| Field | Type | Description |
|---|---|---|
| vastInfo | `VastInfo` | Optional. Fields common to Video Ad Serving Template (VAST) creatives |
| sourceUrl | string | Optional. A URL that points to the source media that will be used for transcoding. |

### `AudioRedirectCreativeDetails`

A Creative that contains externally hosted audio ads and is served via VAST XML.

| Field | Type | Description |
|---|---|---|
| vastInfo | `VastInfo` | Optional. Fields common to Video Ad Serving Template (VAST) creatives |

### `BuyerPlacementConfig`

Represents the buyer placement configuration for a creative.

| Field | Type | Description |
|---|---|---|
| placementId | string | Optional. The ID of the buyer placement. |
| placementDisplayName | string | Optional. The name of the buyer placement. |

### `ClickTrackingCreativeDetails`

A creative that is used for tracking clicks on ads that are served directly from the customers' web servers or media servers. NOTE: The size attribute is not used for click tracking creative and it will not be persisted upon save.

| Field | Type | Description |
|---|---|---|
| clickTrackingUrl | string | Optional. The click tracking URL. |

### `CustomCreativeDetails`

A Creative that contains a custom HTML snippet and file assets.

| Field | Type | Description |
|---|---|---|
| destinationUrl | string | Optional. The URL that the user is directed to if they click on the creative. This attribute is required unless the `destinationUrlType` is `NONE`, and has a maximum length of 1024 characters. |
| customCreativeAssets | array<`CustomCreativeAsset`> | Optional. File assets that are associated with this creative, and can be referenced in the snippet. |
| effectiveSafeFrameCompatible | boolean | Output only. The effective value of whether the creative is compatible for SafeFrame rendering, as decided by the service. |
| destinationUrlType | string enum(CREATIVE_DESTINATION_URL_TYPE_UNSPECIFIED, CLICK_TO_APP, CLICK_TO_CALL, CLICK_TO_WEB, NONE) | Optional. The action that should be performed if the user clicks on the creative. This attribute defaults to `CLICK_TO_WEB`. Values: CREATIVE_DESTINATION_URL_TYPE_UNSPECIFIED - Default value. This value is unused.; CLICK_TO_APP - Start an application.; CLICK_TO_CALL - Make a phone call.; CLICK_TO_WEB - Navigate to a web page. (a.k.a. "Click-through URL").; NONE - Destination URL not present. Useful for video creatives where a landing page or a product isn't necessarily applicable. |
| thirdPartyImpressionTrackingUrls | array<string> | Optional. Impression tracking URLs to ping when this creative is displayed. |
| htmlSnippet | string | Required. The HTML snippet that this creative delivers. |
| lockedOrientation | string enum(CREATIVE_LOCKED_ORIENTATION_UNSPECIFIED, LANDSCAPE, PORTRAIT, FREE) | Optional. A locked orientation for this creative to be displayed in. Values: CREATIVE_LOCKED_ORIENTATION_UNSPECIFIED - Default value. This value is unused.; LANDSCAPE - Landscape orientation.; PORTRAIT - Portrait orientation.; FREE - Free orientation. |
| ampHtmlSnippet | string | The AMP HTML snippet that this creative delivers. |
| interstitial | boolean | Whether this custom creative is an interstitial. An interstitial creative will not consider an impression served until it is fully rendered in the browser. |
| safeFrameCompatible | boolean | Input only. Whether the creative is compatible for SafeFrame rendering. |

### `CustomFieldValue`

A value for a CustomField on a resource.

| Field | Type | Description |
|---|---|---|
| value | `CustomFieldValue_Value` | Required. A typed value representation of the value. |
| customField | string | Required. The custom field for which this is a value. Format: "networks/{network_code}/customFields/{custom_field_id}" |

### `Html5CreativeDetails`

A Creative that contains a zipped HTML5 bundle asset, a list of third party impression trackers, and a third party click tracker.

| Field | Type | Description |
|---|---|---|
| thirdPartyImpressionTrackingUrls | array<string> | Optional. Impression tracking URLs to ping when this creative is displayed. |
| lockedOrientation | string enum(CREATIVE_LOCKED_ORIENTATION_UNSPECIFIED, LANDSCAPE, PORTRAIT, FREE) | Optional. A locked orientation for this creative to be displayed in. Values: CREATIVE_LOCKED_ORIENTATION_UNSPECIFIED - Default value. This value is unused.; LANDSCAPE - Landscape orientation.; PORTRAIT - Portrait orientation.; FREE - Free orientation. |
| thirdPartyClickTrackingUrl | string | Optional. A click tracking URL to ping when this creative is clicked. |
| html5Asset | `CreativeAsset` | Required. The HTML5 asset. To preview the HTML5 asset, use the `CreativeAsset.asset_url`. In this field, the `CreativeAsset.asset_byte_array` must be a zip bundle and the `CreativeAsset.file_name` must have a zip extension. |
| overrideSize | boolean | Optional. Allows the creative size to differ from the actual HTML5 asset size. |
| safeFrameCompatible | boolean | Optional. Whether the creative is compatible for SafeFrame rendering. |

### `ImageCreativeDetails`

A Creative that displays an image.

| Field | Type | Description |
|---|---|---|
| destinationUrlType | string enum(CREATIVE_DESTINATION_URL_TYPE_UNSPECIFIED, CLICK_TO_APP, CLICK_TO_CALL, CLICK_TO_WEB, NONE) | Optional. The action that should be performed if the user clicks on the creative. This attribute defaults to `CLICK_TO_WEB`. Values: CREATIVE_DESTINATION_URL_TYPE_UNSPECIFIED - Default value. This value is unused.; CLICK_TO_APP - Start an application.; CLICK_TO_CALL - Make a phone call.; CLICK_TO_WEB - Navigate to a web page. (a.k.a. "Click-through URL").; NONE - Destination URL not present. Useful for video creatives where a landing page or a product isn't necessarily applicable. |
| overrideSize | boolean | Optional. Allows the creative size to differ from the actual image asset size. |
| primaryImageAsset | `CreativeAsset` | The primary image asset associated with this creative. This attribute is required. |
| altText | string | Alternative text to be rendered along with the creative used mainly for accessibility. This field has a maximum length of 500 characters. |
| ampDestinationUrl | string | Optional. The AMP destination URL for this creative. This must be a valid URL, including the `http://` or `https://` scheme. |
| lockedOrientation | string enum(CREATIVE_LOCKED_ORIENTATION_UNSPECIFIED, LANDSCAPE, PORTRAIT, FREE) | Optional. A locked orientation for this creative to be displayed in. Values: CREATIVE_LOCKED_ORIENTATION_UNSPECIFIED - Default value. This value is unused.; LANDSCAPE - Landscape orientation.; PORTRAIT - Portrait orientation.; FREE - Free orientation. |
| secondaryImageAssets | array<`CreativeAsset`> | Secondary image assets associated with this creative. This attribute is optional. Secondary image assets can be used to store different resolution versions of the primary asset for use on non-standard density screens. |
| thirdPartyImpressionTrackingUrls | array<string> | Optional. Impression tracking URLs to ping when this creative is displayed. |
| destinationUrl | string | Optional. The URL that the user is directed to if they click on the creative. This attribute is required unless the `destinationUrlType` is `NONE`, and has a maximum length of 1024 characters. |

### `ImageOverlayCreativeDetails`

An overlay Creative that displays an image and is served via VAST 2.0 XML. Overlays cover part of the video content they are displayed on top of.

| Field | Type | Description |
|---|---|---|
| companionCreatives | array<string> | Output only. The resource names of the companion creatives that are associated with this creative. Format: "networks/{network_code}/creatives/{creative_id}" |
| lockedOrientation | string enum(CREATIVE_LOCKED_ORIENTATION_UNSPECIFIED, LANDSCAPE, PORTRAIT, FREE) | Optional. A locked orientation for this creative to be displayed in. Values: CREATIVE_LOCKED_ORIENTATION_UNSPECIFIED - Default value. This value is unused.; LANDSCAPE - Landscape orientation.; PORTRAIT - Portrait orientation.; FREE - Free orientation. |
| destinationUrlType | string enum(CREATIVE_DESTINATION_URL_TYPE_UNSPECIFIED, CLICK_TO_APP, CLICK_TO_CALL, CLICK_TO_WEB, NONE) | Optional. The action that should be performed if the user clicks on the creative. This attribute defaults to `CLICK_TO_WEB`. Values: CREATIVE_DESTINATION_URL_TYPE_UNSPECIFIED - Default value. This value is unused.; CLICK_TO_APP - Start an application.; CLICK_TO_CALL - Make a phone call.; CLICK_TO_WEB - Navigate to a web page. (a.k.a. "Click-through URL").; NONE - Destination URL not present. Useful for video creatives where a landing page or a product isn't necessarily applicable. |
| creativeSet | string | Output only. The resource name of the creative set. Format: "networks/{network_code}/creativeSets/{creative_set_id}" |
| destinationUrl | string | Optional. The URL that the user is directed to if they click on the creative. This attribute is required unless the `destinationUrlType` is `NONE`, and has a maximum length of 1024 characters. |
| expectedCompanions | array<`CreativePlaceholder`> | Optional. `CreativePlaceholder` objects a creative set should fulfill. |
| creativeSetDisplayName | string | Output only. The display name of the creative set. |
| overrideSize | boolean | Optional. Allows the creative size to differ from the actual image asset size. |
| customParameters | string | Optional. A comma separated key=value list of parameters that will be supplied to the creative, written into the VAST `AdParameters` node. |
| vastPreviewUrl | string | Output only. An ad tag URL that will return a preview of the VAST XML response specific to this creative. |
| duration | string (google-duration) | Optional. Minimum suggested duration. |
| primaryImageAsset | `CreativeAsset` | Required. The primary image asset associated with this creative. |
| trackingUrls | array<`VideoTrackingUrl`> | Optional. URLs that will be pinged when conversion events happen. |
| expectedCompanionDeliveryOption | string enum(COMPANION_DELIVERY_OPTION_UNSPECIFIED, OPTIONAL, AT_LEAST_ONE, ALL) | Output only. The companion delivery option this set will be served with. Values: COMPANION_DELIVERY_OPTION_UNSPECIFIED - No value specified.; OPTIONAL - Companions are not required to serve a CreativeSet. The creative set can serve to inventory that has zero or more matching companions.; AT_LEAST_ONE - At least one companion must be served in order for the creative set to be used.; ALL - All companions in the set must be served in order for the creative set to be used. This can still serve to inventory that has more companions than can be filled. |

### `ImageRedirectCreativeDetails`

A Creative that loads an image asset from a specified URL.

| Field | Type | Description |
|---|---|---|
| destinationUrlType | string enum(CREATIVE_DESTINATION_URL_TYPE_UNSPECIFIED, CLICK_TO_APP, CLICK_TO_CALL, CLICK_TO_WEB, NONE) | Optional. The action that should be performed if the user clicks on the creative. This attribute defaults to `CLICK_TO_WEB`. Values: CREATIVE_DESTINATION_URL_TYPE_UNSPECIFIED - Default value. This value is unused.; CLICK_TO_APP - Start an application.; CLICK_TO_CALL - Make a phone call.; CLICK_TO_WEB - Navigate to a web page. (a.k.a. "Click-through URL").; NONE - Destination URL not present. Useful for video creatives where a landing page or a product isn't necessarily applicable. |
| destinationUrl | string | Optional. The URL that the user is directed to if they click on the creative. This attribute is required unless the `destinationUrlType` is `NONE`, and has a maximum length of 1024 characters. |
| altText | string | Optional. Alternative text to be rendered along with the creative used mainly for accessibility. This field has a maximum length of 500 characters. |
| thirdPartyImpressionTrackingUrls | array<string> | Optional. Impression tracking URLs to ping when this creative is displayed. Each string has a maximum length of 1024 characters. |
| imageUrl | string | Required. The URL where the actual asset resides. This field has a maximum length of 1024 characters. |

### `ImageRedirectOverlayCreativeDetails`

An overlay Creative that loads an image asset from a specified URL and is served via VAST XML. Overlays cover part of the video content they are displayed on top of. This creative is read only.

| Field | Type | Description |
|---|---|---|
| vastPreviewUrl | string | Output only. An ad tag URL that will return a preview of the VAST XML response specific to this creative. |
| expectedCompanions | array<`CreativePlaceholder`> | Optional. `CreativePlaceholder` objects a creative set should fulfill. |
| trackingUrls | array<`VideoTrackingUrl`> | Optional. URLs that will be pinged when conversion events happen. |
| destinationUrl | string | Optional. The URL that the user is directed to if they click on the creative. This attribute is required unless the `destinationUrlType` is `NONE`, and has a maximum length of 1024 characters. |
| expectedCompanionDeliveryOption | string enum(COMPANION_DELIVERY_OPTION_UNSPECIFIED, OPTIONAL, AT_LEAST_ONE, ALL) | Output only. The companion delivery option this set will be served with. Values: COMPANION_DELIVERY_OPTION_UNSPECIFIED - No value specified.; OPTIONAL - Companions are not required to serve a CreativeSet. The creative set can serve to inventory that has zero or more matching companions.; AT_LEAST_ONE - At least one companion must be served in order for the creative set to be used.; ALL - All companions in the set must be served in order for the creative set to be used. This can still serve to inventory that has more companions than can be filled. |
| companionCreatives | array<string> | Optional. The companion creatives that are associated with this creative. Format: "networks/{network_code}/creatives/{creative_id}" |
| creativeSet | string | Output only. The resource name of the creative set. Format: "networks/{network_code}/creativeSets/{creative_set_id}" |
| customParameters | string | Optional. A comma separated key=value list of parameters that will be supplied to the creative, written into the VAST `AdParameters` node. |
| creativeSetDisplayName | string | Output only. The display name of the creative set. |
| duration | string (google-duration) | Optional. Minimum suggested duration. |
| imageUrl | string | Required. The URL where the actual image asset resides. This attribute is required and has a maximum length of 1024 characters. |
| assetSize | `Size` | Optional. The size of the image asset. Note that this may differ from the creative size if the asset is not expected to fill the entire video player. |
| destinationUrlType | string enum(CREATIVE_DESTINATION_URL_TYPE_UNSPECIFIED, CLICK_TO_APP, CLICK_TO_CALL, CLICK_TO_WEB, NONE) | Optional. The action that should be performed if the user clicks on the creative. This attribute defaults to `CLICK_TO_WEB`. Values: CREATIVE_DESTINATION_URL_TYPE_UNSPECIFIED - Default value. This value is unused.; CLICK_TO_APP - Start an application.; CLICK_TO_CALL - Make a phone call.; CLICK_TO_WEB - Navigate to a web page. (a.k.a. "Click-through URL").; NONE - Destination URL not present. Useful for video creatives where a landing page or a product isn't necessarily applicable. |

### `InternalRedirectCreativeDetails`

A Creative hosted by Campaign Manager 360. Similar to third-party creatives, a Campaign Manager 360 tag is used to retrieve a creative asset. However, Campaign Manager 360 tags are not sent to the user's browser. Instead, they are processed internally within the Google Marketing Platform system.

| Field | Type | Description |
|---|---|---|
| sslScanResult | string enum(CREATIVE_SSL_SCAN_RESULT_UNSPECIFIED, SCANNED_NON_SSL, SCANNED_SSL, UNSCANNED) | Output only. The SSL compatibility scan result of this creative. Values: CREATIVE_SSL_SCAN_RESULT_UNSPECIFIED - Default value. This value is unused.; SCANNED_NON_SSL - The creative was scanned and found to be SSL-incompatible.; SCANNED_SSL - The creative was scanned and found to be SSL-compatible.; UNSCANNED - The creative has not been scanned for SSL compatibility. |
| overrideSize | boolean | Optional. Allows the creative size to differ from the actual size specified in the internal redirect's url. |
| sslManualOverride | string enum(CREATIVE_SSL_OVERRIDE_UNSPECIFIED, NOT_SSL_COMPATIBLE, NO_OVERRIDE, SSL_COMPATIBLE) | Optional. The manual override for the SSL compatibility of this creative. Values: CREATIVE_SSL_OVERRIDE_UNSPECIFIED - Default value. This value is unused.; NOT_SSL_COMPATIBLE - The creative is manually overridden to be SSL-incompatible.; NO_OVERRIDE - The creative's SSL compatibility is determined by the scan result.; SSL_COMPATIBLE - The creative is manually overridden to be SSL-compatible. |
| thirdPartyImpressionTrackingUrls | array<string> | Optional. Impression tracking URLs to ping when this creative is displayed. |
| assetSize | `Size` | Output only. The asset size of an internal redirect creative. Note that this may differ from `size` if users set `override_size` to true. |
| internalRedirectUrl | string | Required. The internal redirect URL of the Campaign Manager 360 hosted creative. This attribute has a maximum length of 1024 characters. |
| lockedOrientation | string enum(CREATIVE_LOCKED_ORIENTATION_UNSPECIFIED, LANDSCAPE, PORTRAIT, FREE) | Optional. A locked orientation for this creative to be displayed in. Values: CREATIVE_LOCKED_ORIENTATION_UNSPECIFIED - Default value. This value is unused.; LANDSCAPE - Landscape orientation.; PORTRAIT - Portrait orientation.; FREE - Free orientation. |
| interstitial | boolean | Optional. Whether this creative is interstitial. |

### `LegacyDfpCreativeDetails`

A Creative that isn't supported by Google DFP, but was migrated from DART. Creatives of this type cannot be created or modified.

Type: object

### `ProgrammaticCreativeDetails`

A Creative used for programmatic trafficking. This creative will be auto-created with the right approval from the buyer. This creative cannot be created through the API. This creative can be updated.

Type: object

### `RichMediaStudioCreativeDetails`

A Creative that is created by a Rich Media Studio. You cannot create this creative, but you can update some fields of this creative.

| Field | Type | Description |
|---|---|---|
| creativeFormat | string enum(RICH_MEDIA_STUDIO_CREATIVE_FORMAT_UNSPECIFIED, EXPANDING, FLASH_IN_FLASH, FLASH_IN_FLASH_EXPANDING, FLOATING, IM_EXPANDING, IN_APP, IN_PAGE, IN_PAGE_WITH_FLOATING, PEEL_DOWN, VPAID_LINEAR, VPAID_NON_LINEAR) | Optional. The creative format of the Rich Media Studio creative. Values: RICH_MEDIA_STUDIO_CREATIVE_FORMAT_UNSPECIFIED - Default value. This value is unused.; EXPANDING - Expanding creatives expand/collapse on user interaction such as mouse over. It consists of an initial, or collapsed and an expanded creative area.; FLASH_IN_FLASH - A Flash ad that renders in a Flash environment. The adserver will serve this using VAST, but it is not a proper VAST XML ad. It's an amalgamation of the proprietary InStream protocol, rendered inside VAST so that we can capture some standard behavior such as companions.; FLASH_IN_FLASH_EXPANDING - An expanding flash ad that renders in a Flash environment. The adserver will serve this using VAST, but it is not a proper VAST XML ad. It's an amalgamation of the proprietary InStream protocol, rendered inside VAST so that we can capture some standard behavior such as companions.; FLOATING - Floating creatives float on top of publishers page and can be closed with a close button.; IM_EXPANDING - Creatives that are served in an instant messenger application such as AOL Instant Messanger or Yahoo! Messenger. This can also be used in desktop applications such as weatherbug.; IN_APP - In-app creatives are served into an ad slot within a publisher's app. In-app implies that they maintain a static size, e.g., 468x60 and do not break out of these dimensions.; IN_PAGE - In-page creatives are served into an ad slot on publishers page. In-page implies that they maintain a static size, e.g., 468x60 and do not break out of these dimensions.; IN_PAGE_WITH_FLOATING - An In-Page with Floating creative is a dual-asset creative consisting of an in-page asset and a floating asset. This creative type lets you deliver a static primary ad to a webpage, while inviting a user to find out more through a floating asset delivered when the user interacts with the creative.; PEEL_DOWN - Peel-down creatives show a glimpse of your ad in the corner of a web page. When the user interacts, the rest of the ad peels down to reveal the full message.; VPAID_LINEAR - A creative format that follows the VPAID 2.0 protocol. The ad appears in the publisher's video player, and allows user interactivity with the video ad. The linear format runs pre-roll, post-roll, or interrupts the publisher's video content.; VPAID_NON_LINEAR - A creative format that follows the VPAID 2.0 protocol. The ad appears in the publisher's video player, and allows user interactivity with the video ad. The non-linear format runs parallel to the publisher's video content. |
| duration | string (google-duration) | Optional. The duration of the creative. |
| sslScanResult | string enum(CREATIVE_SSL_SCAN_RESULT_UNSPECIFIED, SCANNED_NON_SSL, SCANNED_SSL, UNSCANNED) | Output only. The SSL compatibility scan result of this creative. Values: CREATIVE_SSL_SCAN_RESULT_UNSPECIFIED - Default value. This value is unused.; SCANNED_NON_SSL - The creative was scanned and found to be SSL-incompatible.; SCANNED_SSL - The creative was scanned and found to be SSL-compatible.; UNSCANNED - The creative has not been scanned for SSL compatibility. |
| lockedOrientation | string enum(CREATIVE_LOCKED_ORIENTATION_UNSPECIFIED, LANDSCAPE, PORTRAIT, FREE) | Optional. A locked orientation for this creative to be displayed in. Values: CREATIVE_LOCKED_ORIENTATION_UNSPECIFIED - Default value. This value is unused.; LANDSCAPE - Landscape orientation.; PORTRAIT - Portrait orientation.; FREE - Free orientation. |
| surveyUrl | string | Optional. The survey URL for this creative. |
| allImpressionsUrl | string | Optional. The tracking URL to be triggered when an ad starts to play, whether Rich Media or backup content is displayed. Behaves like the /imp URL that DART used to track impressions. This URL can't exceed 1024 characters and must start with http:// or https://. |
| requiredFlashPluginVersion | string | Output only. The Flash plugin version required to view this creative; e.g. `Flash 10.2/AS 3`. |
| customKeyValues | array<string> | Optional. Custom key values. |
| richMediaStudioChildAssetProperties | array<`RichMediaStudioChildAssetProperty`> | Output only. Child assets associated with this creative. |
| adTagKeys | array<string> | Optional. Ad tag keys. |
| overrideCss | string | Optional. The override CSS. You can put custom CSS code here to repair creative styling; e.g. `tr td { background-color:#FBB; }`. |
| backupImageImpressionsUrl | string | Optional. The tracking URL to be triggered when the Rich Media backup image is served. |
| sslManualOverride | string enum(CREATIVE_SSL_OVERRIDE_UNSPECIFIED, NOT_SSL_COMPATIBLE, NO_OVERRIDE, SSL_COMPATIBLE) | Optional. The manual override for the SSL compatibility of this creative. Values: CREATIVE_SSL_OVERRIDE_UNSPECIFIED - Default value. This value is unused.; NOT_SSL_COMPATIBLE - The creative is manually overridden to be SSL-incompatible.; NO_OVERRIDE - The creative's SSL compatibility is determined by the scan result.; SSL_COMPATIBLE - The creative is manually overridden to be SSL-compatible. |
| billingAttribute | string enum(RICH_MEDIA_STUDIO_CREATIVE_BILLING_ATTRIBUTE_UNSPECIFIED, FLASH_IN_FLASH, FLOATING_EXPANDING, IN_PAGE, VIDEO) | Optional. The billing attribute associated with this creative. Values: RICH_MEDIA_STUDIO_CREATIVE_BILLING_ATTRIBUTE_UNSPECIFIED - Default value. This value is unused.; FLASH_IN_FLASH - Applies to any RichMediaStudioCreativeFormatEnum.RichMediaStudioCreativeFormat.FLASH_IN_FLASH, without Video.; FLOATING_EXPANDING - Applies to any of the following RichMediaStudioCreativeFormatEnum.RichMediaStudioCreativeFormat values, without Video: * RichMediaStudioCreativeFormatEnum.RichMediaStudioCreativeFormat.EXPANDING * RichMediaStudioCreativeFormatEnum.RichMediaStudioCreativeFormat.IM_EXPANDING * RichMediaStudioCreativeFormatEnum.RichMediaStudioCreativeFormat.FLOATING * RichMediaStudioCreativeFormatEnum.RichMediaStudioCreativeFormat.PEEL_DOWN * RichMediaStudioCreativeFormatEnum.RichMediaStudioCreativeFormat.IN_PAGE_WITH_FLOATING; IN_PAGE - Applies to any RichMediaStudioCreativeFormatEnum.RichMediaStudioCreativeFormat.IN_PAGE, without Video.; VIDEO - Applies to any creatives that includes a video. |
| studioCreativeId | string (int64) | Output only. The creative ID as known by Rich Media Studio creative. |
| totalFileSize | string (int64) | Output only. The total size of all assets in bytes. |
| richMediaImpressionsUrl | string | Optional. The tracking URL to be triggered when any rich media artwork is displayed in an ad. Behaves like the /imp URL that DART used to track impressions. This URL can't exceed 1024 characters and must start with http:// or https://. |

### `SetTopBoxCreativeDetails`

A Creative that will be served into cable set-top boxes. There are no assets for this creative type, as they are hosted by external cable systems.

| Field | Type | Description |
|---|---|---|
| vastInfo | `VastInfo` | Optional. Fields common to Video Ad Serving Template (VAST) creatives |

### `Size`

Represents the dimensions of an AdUnit, LineItem, or Creative.

| Field | Type | Description |
|---|---|---|
| sizeType | string enum(SIZE_TYPE_UNSPECIFIED, PIXEL, ASPECT_RATIO, INTERSTITIAL, IGNORED, NATIVE, FLUID, AUDIO) | Required. The SizeType of the Creative, AdUnit, or LineItem. Values: SIZE_TYPE_UNSPECIFIED - Default value. This value is unused.; PIXEL - Dimension based size, an actual height and width in pixels.; ASPECT_RATIO - Size is expressed as a ratio. For example, 4:1 could be met by a 100 x 25 sized image.; INTERSTITIAL - Out-of-page (Interstitial) size that is not related to the slot it is served. This must be used with 1x1 size.; IGNORED - Size is ignored. This must be used with 1x1 size.; NATIVE - Native size, which is a function of the how the client renders the creative. This must be used with 1x1 size.; FLUID - Fluid size. Automatically sizes the ad by filling the width of the enclosing column and adjusting the height as appropriate. This must be used with 1x1 size.; AUDIO - Audio size. Used with audio ads. This must be used with 1x1 size. |
| width | integer (int32) | Required. The width of the Creative, AdUnit, or LineItem. |
| height | integer (int32) | Required. The height of the Creative, AdUnit, or LineItem. |

### `TemplateCreativeDetails`

A Creative that is created by the specified creative template.

| Field | Type | Description |
|---|---|---|
| nativeEligible | boolean | Output only. Whether this template creative is eligible for native adserving. This value is based on the CreativeTemplate. |
| sslManualOverride | string enum(CREATIVE_SSL_OVERRIDE_UNSPECIFIED, NOT_SSL_COMPATIBLE, NO_OVERRIDE, SSL_COMPATIBLE) | Optional. The manual override for the SSL compatibility of this creative. Values: CREATIVE_SSL_OVERRIDE_UNSPECIFIED - Default value. This value is unused.; NOT_SSL_COMPATIBLE - The creative is manually overridden to be SSL-incompatible.; NO_OVERRIDE - The creative's SSL compatibility is determined by the scan result.; SSL_COMPATIBLE - The creative is manually overridden to be SSL-compatible. |
| sslScanResult | string enum(CREATIVE_SSL_SCAN_RESULT_UNSPECIFIED, SCANNED_NON_SSL, SCANNED_SSL, UNSCANNED) | Output only. The SSL compatibility scan result of this creative. Values: CREATIVE_SSL_SCAN_RESULT_UNSPECIFIED - Default value. This value is unused.; SCANNED_NON_SSL - The creative was scanned and found to be SSL-incompatible.; SCANNED_SSL - The creative was scanned and found to be SSL-compatible.; UNSCANNED - The creative has not been scanned for SSL compatibility. |
| creativeTemplate | string | Required. Immutable. The resource name of the CreativeTemplate that this creative is created from. Format: `networks/{network_code}/creativeTemplates/{creative_template_id}` |
| safeFrameCompatible | boolean | Output only. Whether the Creative is compatible for SafeFrame rendering. This value is based on the CreativeTemplate. |
| destinationUrlType | string enum(CREATIVE_DESTINATION_URL_TYPE_UNSPECIFIED, CLICK_TO_APP, CLICK_TO_CALL, CLICK_TO_WEB, NONE) | Optional. The action that should be performed if the user clicks on the creative. This attribute defaults to `CLICK_TO_WEB`. Values: CREATIVE_DESTINATION_URL_TYPE_UNSPECIFIED - Default value. This value is unused.; CLICK_TO_APP - Start an application.; CLICK_TO_CALL - Make a phone call.; CLICK_TO_WEB - Navigate to a web page. (a.k.a. "Click-through URL").; NONE - Destination URL not present. Useful for video creatives where a landing page or a product isn't necessarily applicable. |
| creativeTemplateVariableValues | array<`CreativeTemplateVariableValue`> | Optional. The values of the variables in the CreativeTemplate. |
| destinationUrl | string | Optional. The URL that the user is directed to if they click on the creative. This attribute is required unless the `destinationUrlType` is `NONE`, and has a maximum length of 1024 characters. |
| ampDestinationUrl | string | Optional. The AMP destination URL for this creative. This must be a valid URL, including the `http://` or `https://` scheme. |
| lockedOrientation | string enum(CREATIVE_LOCKED_ORIENTATION_UNSPECIFIED, LANDSCAPE, PORTRAIT, FREE) | Optional. A locked orientation for this creative to be displayed in. Values: CREATIVE_LOCKED_ORIENTATION_UNSPECIFIED - Default value. This value is unused.; LANDSCAPE - Landscape orientation.; PORTRAIT - Portrait orientation.; FREE - Free orientation. |

### `ThirdPartyCreativeDetails`

A Creative that is served by a 3rd-party vendor.

| Field | Type | Description |
|---|---|---|
| expandedSnippet | string | Output only. The HTML snippet that this creative delivers with macros expanded. |
| destinationUrlType | string enum(CREATIVE_DESTINATION_URL_TYPE_UNSPECIFIED, CLICK_TO_APP, CLICK_TO_CALL, CLICK_TO_WEB, NONE) | Optional. The action that should be performed if the user clicks on the creative. This attribute defaults to `CLICK_TO_WEB`. Values: CREATIVE_DESTINATION_URL_TYPE_UNSPECIFIED - Default value. This value is unused.; CLICK_TO_APP - Start an application.; CLICK_TO_CALL - Make a phone call.; CLICK_TO_WEB - Navigate to a web page. (a.k.a. "Click-through URL").; NONE - Destination URL not present. Useful for video creatives where a landing page or a product isn't necessarily applicable. |
| ampRedirectUrl | string | Optional. The URL of the AMP creative. |
| destinationUrl | string | Optional. The URL that the user is directed to if they click on the creative. This attribute is required unless the `destinationUrlType` is `NONE`, and has a maximum length of 1024 characters. |
| lockedOrientation | string enum(CREATIVE_LOCKED_ORIENTATION_UNSPECIFIED, LANDSCAPE, PORTRAIT, FREE) | Optional. A locked orientation for this creative to be displayed in. Values: CREATIVE_LOCKED_ORIENTATION_UNSPECIFIED - Default value. This value is unused.; LANDSCAPE - Landscape orientation.; PORTRAIT - Portrait orientation.; FREE - Free orientation. |
| sslScanResult | string enum(CREATIVE_SSL_SCAN_RESULT_UNSPECIFIED, SCANNED_NON_SSL, SCANNED_SSL, UNSCANNED) | Output only. The SSL compatibility scan result of this creative. Values: CREATIVE_SSL_SCAN_RESULT_UNSPECIFIED - Default value. This value is unused.; SCANNED_NON_SSL - The creative was scanned and found to be SSL-incompatible.; SCANNED_SSL - The creative was scanned and found to be SSL-compatible.; UNSCANNED - The creative has not been scanned for SSL compatibility. |
| safeFrameCompatible | boolean | Optional. Whether the Creative is compatible for SafeFrame rendering. |
| sslManualOverride | string enum(CREATIVE_SSL_OVERRIDE_UNSPECIFIED, NOT_SSL_COMPATIBLE, NO_OVERRIDE, SSL_COMPATIBLE) | Optional. The manual override for the SSL compatibility of this creative. Values: CREATIVE_SSL_OVERRIDE_UNSPECIFIED - Default value. This value is unused.; NOT_SSL_COMPATIBLE - The creative is manually overridden to be SSL-incompatible.; NO_OVERRIDE - The creative's SSL compatibility is determined by the scan result.; SSL_COMPATIBLE - The creative is manually overridden to be SSL-compatible. |
| snippet | string | The HTML snippet that this creative delivers. |
| thirdPartyImpressionTrackingUrls | array<string> | Optional. A list of impression tracking URLs to ping when this creative is displayed. |

### `ThirdPartyDataDeclaration`

Represents a set of declarations about what (if any) third party companies are associated with a given creative. This can also be set on the Network to serve as a default for those creatives that don't have such field set.

| Field | Type | Description |
|---|---|---|
| richMediaAdsCompanies | array<string> | Optional. A list of RichMediaAdsCompany resources associated with this entity. Format: `networks/{network_code}/richMediaAdsCompanies/{rich_media_ads_company}` |
| declarationType | string enum(THIRD_PARTY_DATA_DECLARATION_TYPE_UNSPECIFIED, DECLARED, NONE) | Optional. The declaration about third party data usage on the associated entity. Values: THIRD_PARTY_DATA_DECLARATION_TYPE_UNSPECIFIED - Default value. This value is unused.; DECLARED - There is a set of ThirdPartyCompanies associated with this entity.; NONE - There are no companies associated. Functionally the same as DECLARED, combined with an empty company list. |
| thirdPartyCompanies | array<string> | Optional. Deprecated: Use richMediaAdsCompanies instead. This field is populated with the same companies as `rich_media_ads_companies`. If both fields are set in a request, `rich_media_ads_companies` takes precedence. A list of ThirdPartyCompanies associated with this entity. Format: "networks/{network_code}/thirdPartyCompanies/{third_party_company}" |

### `VastRedirectCreativeDetails`

A Creative that points to an externally hosted VAST ad and is served via VAST XML as a VAST Wrapper.

| Field | Type | Description |
|---|---|---|
| vastRedirectType | string enum(VAST_REDIRECT_TYPE_UNSPECIFIED, LINEAR, LINEAR_AND_NON_LINEAR, NON_LINEAR) | Required. The type of VAST ad that this redirects to. Values: VAST_REDIRECT_TYPE_UNSPECIFIED - Default value. This value is unused.; LINEAR - The VAST XML contains only linear ads.; LINEAR_AND_NON_LINEAR - The VAST XML contains both linear and nonlinear ads.; NON_LINEAR - The VAST XML contains only nonlinear ads. |
| vastXmlUrl | string | Required. The URL where the 3rd party VAST XML is hosted. |
| destinationUrlType | string enum(CREATIVE_DESTINATION_URL_TYPE_UNSPECIFIED, CLICK_TO_APP, CLICK_TO_CALL, CLICK_TO_WEB, NONE) | Optional. The action that should be performed if the user clicks on the creative. This attribute defaults to `CLICK_TO_WEB`. Values: CREATIVE_DESTINATION_URL_TYPE_UNSPECIFIED - Default value. This value is unused.; CLICK_TO_APP - Start an application.; CLICK_TO_CALL - Make a phone call.; CLICK_TO_WEB - Navigate to a web page. (a.k.a. "Click-through URL").; NONE - Destination URL not present. Useful for video creatives where a landing page or a product isn't necessarily applicable. |
| destinationUrl | string | Optional. The URL that the user is directed to if they click on the creative. This attribute is required unless the `destinationUrlType` is `NONE`, and has a maximum length of 1024 characters. |
| serverSideUnwrappingDisabled | boolean | Optional. Whether server-side unwrapping is disabled. |
| audio | boolean | Optional. Whether the 3rd party VAST XML points to an audio ad. When true, `size` will always be 1x1. |
| duration | string (google-duration) | Required. The duration of the VAST ad. |
| programmaticDemandSource | boolean | Optional. Whether this is a redirect to a programmatic demand source. |
| trackingUrls | array<`VideoTrackingUrl`> | Optional. URLs that will be pinged when conversion events happen. |
| vastPreviewUrl | string | Output only. An ad tag URL that will return a preview of the VAST XML response specific to this creative. |
| vastPricingEnabled | boolean | Optional. Whether pricing information from the VAST response will be used during ad selection. |

### `VideoCreativeDetails`

A Creative that contains Ad Manager hosted video ads and is served via VAST XML.

| Field | Type | Description |
|---|---|---|
| sourceUrl | string | Optional. A URL that points to the source media that will be used for transcoding. |
| vastInfo | `VastInfo` | Optional. Fields common to Video Ad Serving Template (VAST) creatives |

### `VideoRedirectCreativeDetails`

A Creative that contains externally hosted video ads and is served via VAST XML.

| Field | Type | Description |
|---|---|---|
| vastInfo | `VastInfo` | Optional. Fields common to Video Ad Serving Template (VAST) creatives |

### `CreateCreativeRequest`

Request object for `CreateCreative` method.

| Field | Type | Description |
|---|---|---|
| creative | `Creative` | Required. The `Creative` to create. |
| parent | string | Required. The parent resource where this `Creative` will be created. Format: `networks/{network_code}` |

### `UpdateCreativeRequest`

Request object for `UpdateCreative` method.

| Field | Type | Description |
|---|---|---|
| creative | `Creative` | Required. The `Creative` to update. The `Creative`'s name is used to identify the `Creative` to update. Format: `networks/{network_code}/creatives/{creative_id}` |
| updateMask | string (google-fieldmask) | Optional. The list of fields to update. |

### `CreativeAsset`

A CreativeAsset is an asset that can be used in creatives.

| Field | Type | Description |
|---|---|---|
| assetByteArray | string (byte) | Input only. The content of the asset as a byte array. This attribute is required when creating the creative that contains this asset if `asset` is not provided. When updating the content, pass a new byte array, and set `asset` to null. Otherwise, this field can be null. The `asset_byte_array` will be null when the creative is retrieved. |
| fileSize | string (int64) | Output only. The file size of the asset in bytes. |
| imageDensity | string enum(ASSET_IMAGE_DENSITY_UNSPECIFIED, ONE_TO_ONE, THREE_TO_TWO, TWO_TO_ONE) | Non-empty default. The display density of the image. This is the ratio between a dimension in pixels of the image and the dimension in pixels that it should occupy in device-independent pixels when displayed. This attribute defaults to ONE_TO_ONE. Values: ASSET_IMAGE_DENSITY_UNSPECIFIED - Default value. This value is unused.; ONE_TO_ONE - Indicates that there is a 1:1 ratio between the dimensions of the raw image and the dimensions that it should be displayed at in device-independent pixels.; THREE_TO_TWO - Indicates that there is a 3:2 ratio between the dimensions of the raw image and the dimensions that it should be displayed at in device-independent pixels.; TWO_TO_ONE - Indicates that there is a 2:1 ratio between the dimensions of the raw image and the dimensions that it should be displayed at in device-independent pixels. |
| fileName | string | Optional. The file name of the asset. This attribute is required when creating a new asset (e.g. when asset_byte_array is not null). |
| asset | string | Required. The resource name of the asset. This attribute is generated by Google upon creation. Format: `networks/{network_code}/assets/{asset}` |
| clickTags | array<`ClickTag`> | Output only. The click tags of the asset. |
| assetUrl | string | Output only. A URL where the asset can be previewed. |
| size | `Size` | Optional. The size of the asset. Note that this may not always reflect the actual physical size of the asset, but may reflect the expected size. |

### `VastInfo`

Fields common to Video Ad Serving Template (VAST) creatives.

| Field | Type | Description |
|---|---|---|
| destinationUrlType | string enum(CREATIVE_DESTINATION_URL_TYPE_UNSPECIFIED, CLICK_TO_APP, CLICK_TO_CALL, CLICK_TO_WEB, NONE) | Optional. The action that should be performed if the user clicks on the creative. This attribute defaults to `CLICK_TO_WEB`. Values: CREATIVE_DESTINATION_URL_TYPE_UNSPECIFIED - Default value. This value is unused.; CLICK_TO_APP - Start an application.; CLICK_TO_CALL - Make a phone call.; CLICK_TO_WEB - Navigate to a web page. (a.k.a. "Click-through URL").; NONE - Destination URL not present. Useful for video creatives where a landing page or a product isn't necessarily applicable. |
| destinationUrl | string | Optional. The URL that the user is directed to if they click on the creative. This attribute is required unless the `destinationUrlType` is `NONE`, and has a maximum length of 1024 characters. |
| creativeSetDisplayName | string | Output only. The display name of the creative set. |
| trackingUrls | array<`VideoTrackingUrl`> | Optional. URLs that will be pinged when conversion events happen. |
| customParameters | string | Optional. A comma separated key=value list of parameters that will be supplied to the creative, written into the VAST `AdParameters` node. |
| adIdType | string enum(VAST_AD_ID_TYPE_UNSPECIFIED, AD_ID, ARPP, CLEARCAST, CUSV, NONE) | Optional. The registry which the ad id of this creative belongs to. This field defaults to `NONE`. Values: VAST_AD_ID_TYPE_UNSPECIFIED - Default value. This value is unused.; AD_ID - Ad ID.; ARPP - The ad ID is registered with ARPP Pub-ID.; CLEARCAST - The ad ID is registered with clearcast.co.uk.; CUSV - The ad ID is registered with Auditel Spot ID.; NONE - None. |
| companionCreatives | array<string> | Optional. The companion creatives that are associated with this creative. Format: "networks/{network_code}/creatives/{creative_id}" |
| vastPreviewUrl | string | Output only. An ad tag URL that will return a preview of the VAST XML response specific to this creative. |
| allowDurationOverride | boolean | Optional. Allows the creative duration to differ from the actual asset durations. |
| creativeSet | string | Output only. The resource name of the creative set. Format: "networks/{network_code}/creativeSets/{creative_set_id}" |
| adId | string | Optional. The ad id associated with the video as defined by the `adIdType` registry. This field is required if `adIdType` is not `NONE`. |
| duration | string (google-duration) | Optional. The expected duration of this creative. |
| skippableAdType | string enum(SKIPPABLE_AD_TYPE_UNSPECIFIED, ANY, DISABLED, ENABLED, INSTREAM_SELECT) | Optional. The type of skippable ad. Values: SKIPPABLE_AD_TYPE_UNSPECIFIED - Default value. This value is unused.; ANY - Any skippable or not skippable. This is only for programmatic case when the creative skippability is decided by the buyside.; DISABLED - The ad is not skippable.; ENABLED - The ad is skippable.; INSTREAM_SELECT - The ad is an instream select ad. |

### `CustomCreativeAsset`

A `CustomCreativeAsset` is an association between a `CustomCreative` and an asset. Any assets that are associated with a creative can be inserted into its HTML snippet.

| Field | Type | Description |
|---|---|---|
| macroName | string | Optional. The name by which the associated asset will be referenced. For example, if the value is "foo", then the asset can be inserted into an HTML snippet using the macro: "%%FILE:foo%%". |
| asset | `CreativeAsset` | Required. The asset. To view the asset, use `CreativeAsset.asset_url`. |

### `CustomFieldValue_Value`

Represent custom field value type.

| Field | Type | Description |
|---|---|---|
| toggleValue | boolean | The value, if the CustomFieldDataType is TOGGLE. |
| dropdownValue | string (int64) | The custom_field_option_id, if the CustomFieldDataType is DROPDOWN. |
| numberValue | number (double) | The value, if the CustomFieldDataType is NUMBER. |
| stringValue | string | The value, if the CustomFieldDataType is STRING. |

### `CreativePlaceholder`

Describes a slot that a creative is expected to fill. This is used in forecasting and to validate that the correct creatives are associated with the line item.

| Field | Type | Description |
|---|---|---|
| appliedLabels | array<`AppliedLabel`> | Optional. Set of labels applied directly to this CreativePlaceholder. |
| companions | array<`CreativePlaceholderCompanion`> | Optional. The companions that the creative is expected to have. This attribute can only be set if the line item it belongs to has an EnvironmentType of VIDEO_PLAYER or roadblockingType of CREATIVE_SET. |
| size | `Size` | Required. The size that the creative is expected to have. |
| ampOnly | boolean | Optional. Non-empty default. Indicates if the expected creative of this placeholder has an AMP only variant. This is used to improve the accuracy of forecasting and has no effect on serving. By default, the value is false. |
| creativeTargetingDisplayName | string | Optional. The display name of the creative targeting that this CreativePlaceholder represents. |
| expectedCreativeCount | integer (int32) | Optional. Non-empty default. Expected number of creatives that will be uploaded corresponding to this creative placeholder. This estimate is used to improve the accuracy of forecasting; for example, if label frequency capping limits the number of times a creative may be served. By default, the expected creative count is set to 1. |

### `VideoTrackingUrl`

Represents a ConversionEvent to URL pair that will be pinged when the event happens.

| Field | Type | Description |
|---|---|---|
| conversionEvent | string enum(CONVERSION_EVENT_UNSPECIFIED, ACCEPT_INVITATION, CLICK_TRACKING, CLOSE, COLLAPSE, COMPLETE, CREATIVE_VIEW, CUSTOM_CLICK, ENGAGED_VIEW, EXPAND, FIRST_QUARTILE, FULLSCREEN, FULLY_VIEWABLE_AUDIBLE_HALF_DURATION_IMPRESSION, MEASURABLE_IMPRESSION, MIDPOINT, MUTE, PAUSE, RESUME, REWIND, SKIPPED, SKIP_SHOWN, START, SURVEY, THIRD_QUARTILE, UNMUTE, VIDEO_ABANDON, VIEWABLE_IMPRESSION) | Required. All possible tracking event types. Values: CONVERSION_EVENT_UNSPECIFIED - Default value. This value is unused.; ACCEPT_INVITATION - Corresponds to the `acceptInvitation` tracking event.; CLICK_TRACKING - Corresponds to the `Linear.VideoClicks.ClickTracking` node.; CLOSE - Corresponds to the `close` tracking event.; COLLAPSE - Corresponds to the `collapse` tracking event.; COMPLETE - Corresponds to the `complete` tracking event.; CREATIVE_VIEW - Corresponds to the `creativeView` tracking event.; CUSTOM_CLICK - Corresponds to the `Linear.VideoClicks.CustomClick` node.; ENGAGED_VIEW - An event that is fired after 30 seconds of viewing the video or when the video finished (if the video duration is less than 30 seconds). This event does not correspond to any VAST element and is implemented using an extension.; EXPAND - Corresponds to the `expand` tracking event.; FIRST_QUARTILE - Corresponds to the `firstQuartile` tracking event.; FULLSCREEN - Corresponds to the `fullscreen` tracking event.; FULLY_VIEWABLE_AUDIBLE_HALF_DURATION_IMPRESSION - Corresponds to the `fullyViewableAudibleHalfDurationImpression` tracking event.; MEASURABLE_IMPRESSION - Corresponds to the `measurableImpression` tracking event.; MIDPOINT - Corresponds to the `midpoint` tracking event.; MUTE - Corresponds to the `mute` tracking event.; PAUSE - Corresponds to the `pause` tracking event.; RESUME - Corresponds to the `resume` tracking event.; REWIND - Corresponds to the `rewind` tracking event.; SKIPPED - An event that is fired when a video was skipped. This event does not correspond to any VAST element and is implemented using an extension.; SKIP_SHOWN - An event that is fired when a video skip button is shown, usually after 5 seconds of viewing the video. This event does not correspond to any VAST element and is implemented using an extension.; START - Corresponds to the `start` tracking event.; SURVEY - Corresponds to the `InLine.Survey` node.; THIRD_QUARTILE - Corresponds to the `thirdQuartile` tracking event.; UNMUTE - Corresponds to the `unmute` tracking event.; VIDEO_ABANDON - Corresponds to the `abandon` tracking event.; VIEWABLE_IMPRESSION - Corresponds to the `viewableImpression` tracking event. |
| url | string | Optional. A URL that should be pinged for the conversion event. |

### `RichMediaStudioChildAssetProperty`

Represents a child asset in RichMediaStudioCreative.

| Field | Type | Description |
|---|---|---|
| height | integer (int32) | Output only. Height of the widget in pixels. |
| width | integer (int32) | Output only. Width of the widget in pixels. |
| url | string | Output only. The URL of the asset. |
| displayName | string | Output only. The name of the asset as known by Rich Media Studio. |
| totalFileSize | string (int64) | Output only. The total size of the asset in bytes. |
| type | string enum(RICH_MEDIA_STUDIO_CHILD_ASSET_TYPE_UNSPECIFIED, DATA, FLASH, IMAGE, VIDEO) | Output only. Required file type of the asset. Values: RICH_MEDIA_STUDIO_CHILD_ASSET_TYPE_UNSPECIFIED - Default value. This value is unused.; DATA - The rest of the supported file types .txt, .xml, etc.; FLASH - SWF files; IMAGE - Image files; VIDEO - FLVS and any other video file types |

### `CreativeTemplateVariableValue`

Represents a value for a variable in a creative template.

| Field | Type | Description |
|---|---|---|
| uniqueName | string | Required. The unique name of the variable. |
| creativeAsset | `CreativeAsset` | Optional. The asset value of the variable. |
| stringValue | string | Optional. The string value of the variable, used for string and list variables. |
| urlValue | string | Optional. The URL value of the variable. |
| longValue | string (int64) | Optional. The long value of the variable. |

### `ClickTag`

Click tags define click-through URLs for each exit on an HTML5 creative. An exit is any area that can be clicked that directs the browser to a landing page. Each click tag defines the click-through URL for a different exit. In Ad Manager, tracking pixels are attached to the click tags if URLs are valid.

| Field | Type | Description |
|---|---|---|
| displayName | string | Optional. Name of the click tag. Must match the regular expression `clickTag\d*`. |
| url | string | Optional. URL of the click tag. |

### `CreativePlaceholderCompanion`

An individual companion to a CreativePlaceholder.

| Field | Type | Description |
|---|---|---|
| size | `Size` | Required. The size of the companion to a CreativePlaceholder. |

