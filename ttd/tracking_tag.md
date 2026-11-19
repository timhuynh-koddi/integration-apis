# Tracking Tag

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 5

---

## POST /v3/trackingtag

Create a new tracking tag.

Operation ID: `post-trackingtag`

**Request body** (`application/json`, required): `TrackingTag_TrackingTag_post`

**Response 200** (`application/json`): `TrackingTag_TrackingTag`

---

## PUT /v3/trackingtag

Update an existing tracking tag.  Offline tracking tags are readonly tags and may not be modified using this endpoint.

Operation ID: `put-trackingtag`

**Request body** (`application/json`, required): `TrackingTag_TrackingTag_put`

**Response 200** (`application/json`): `TrackingTag_TrackingTag`

---

## GET /v3/trackingtag/{trackingTagId}

Get a tracking tag.

Operation ID: `get-trackingtag-trackingtagid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| trackingTagId | path | string | yes |  |

**Response 200** (`application/json`): `TrackingTag_TrackingTag`

---

## GET /v3/trackingtag/query/facets

Get the facets of Tracking Tags that can be queried.

Operation ID: `get-trackingtag-query-facets`

**Response 200** (`application/json`): `TrackingTag_TrackingTagFacets`

---

## POST /v3/trackingtag/query/advertiser

Retrieve a paged, filterable list of tracking tags owned by or shared with the specified advertiser.

Operation ID: `post-trackingtag-query-advertiser`

**Request body** (`application/json`, required): `TrackingTag_TrackingTagQueryForAdvertiser`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_TrackingTag_`

---

## Schemas

### `TrackingTag_TrackingTag`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The platform ID of the advertiser that owns this tracking tag. |
| ContainerTagBody | string |  | Additional HTML to be inserted in the IFrame version of the tracking tag. Use this to add additional pixels that will be invoked when this tag is hit. Unless you use schemeless URLs, be careful that the pixels you place in this field use the same URL scheme (HTTP or HTTPS) as the page in which you will place the tracking tag.   This parameter has no effect if you only use the IMG version of the tag.   This property may not be modified for TrackingTags that belong to AppEventTrackerTag or UniversalPixelTag categories. _(nullable)_ |
| Currency | string |  | The units of currency of the `Revenue` property.  Here's what you need to know about this property:   - Supports any value; this is for conversion reporting and has no relationship to the Advertiser's currency code.   - This property may not be modified for TrackingTags that belong to the AppEventTrackerTag category.   - The maximum character length is 3. _(maxLength 3)_ |
| DataEventTypeId | `TTD.Domain.Shared.Http.Metadata.Models_TrackingDataEventTypeId` |  | The ID associated with an event. An event is an action that a user takes, such as viewing a product page, adding something to a shopping cart, or purchasing a product. _(nullable)_ |
| FirstPartyDataId | integer (int64) |  | The first-party data ID for this tracking tag. This ID can be used in data groups to target the data collected by this tracking tag.   This is a read-only property returned by the API. |
| HitCount7Day | integer (int64) |  | Number of hits we received in 7 days.   This is a read-only property returned by the API |
| HouseholdEnabled | boolean |  | Household enabled option. |
| IFrameTag | string |  | IFrame tag   This is a read-only property returned by the API _(nullable)_ |
| ImageTag | string |  | Image tag   This is a read-only property returned by the API _(nullable)_ |
| OfflineDataProviderId | string |  | The name of the offline data provider (if this TrackingTagCategory is an offline attribution tracking tag).   This is a read-only property returned by the API. _(maxLength 32)_ |
| Revenue | string |  | The amount of revenue a single hit to this tag generates. This is string so that a macro may be used if you wish to use the tag in a dynamic context (e.g. where your web site determines and replace the revenue before invoking the tag).   This property may not be modified for TrackingTags that belong to the AppEventTrackerTag category. _(nullable)_ |
| TagRedirectUri | string |  | Tag redirect URI _(nullable)_ |
| TrackingTagAvailability | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability` |  | The availability of the TrackingTag.  This is a read-only property returned by the API. |
| TrackingTagCategory | `TrackingTag_TrackingTagCategory` |  | The TrackingTag category.  This is a read-only property returned by the API.   TrackingTags are classified into categories based on their properties.     The list of categories may be extended at any time so please design accordingly.   Note that some properties of the TrackingTag may not be modified based on the category of the TrackingTag.     Refer to the documentation of each individual property to determine whether they have any restrictions on them.  The API will throw an error if a request violates any of the documented restrictions. |
| TrackingTagId | string |  | The ID of the tracking tag. Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| TrackingTagLocation | string |  | The location where this tracking tag will be deployed to gather tracking data.   This property may not be modified for TrackingTags that belong to AppEventTrackerTag or UniversalPixelTag categories. _(nullable)_ |
| TrackingTagName | string |  | The name of the tracking tag. The maximum character length is 256. _(maxLength 256)_ |
| TrackingTagType | `TrackingTag_TrackingTagType` |  | The type of the tracking tag.   For TrackingTags that belong to AppEventTrackerTag or UniversalPixelTag categories, this may not be set to "Impression". |
| UniversalPixelName | string |  | Name of the universal pixel associated with this tracking tag.  This is only populated if the tracking tag is using universal pixel.   This is a read-only property returned by the API. _(nullable)_ |

### `TrackingTag_TrackingTagFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| SortingFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_TrackingTagSortingField_`> |  | The fields by which Tracking Tags may be sorted in a query. This list may be extended at any time, so please design accordingly. |
| TrackingTagAvailabilities | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_Availability_`> |  | The availabilities of Tracking Tags that can be requested/filtered. This list may be extended at any time, so please design accordingly. |
| TrackingTagTypes | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_TrackingTagType_`> |  | The types of Tracking Tags that can be requested/filtered. This list may be extended at any time, so please design accordingly. |

### `TrackingTag_TrackingTagQueryForAdvertiser`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | Return tracking tags owned by or shared with the advertiser that corresponds to this `AdvertiserId`. |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| IncludeOfflineTrackingTags | boolean |  | The field used to return offline tracking tags in search results.  If not provided, offline tracking tags will not be returned. |
| SearchTerms | array<string> |  | A list of search terms by which to filter the returned Tracking Tags. All terms must be matched in the ID, name or location in order for a Tracking Tag to match.   If not specified, empty, or null, this property is ignored. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_TrackingTagSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed. See GET trackingtag/query/facets for the list of possible sort field IDs for Tracking Tags.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by Name ascending. _(nullable)_ |
| TrackingTagAvailabilities | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability`> |  | The Availability Filter to apply to the returned list of Tracking Tags.  Duplicate values are not allowed.   If not specified, empty, or null, this defaults to returning only available Tracking Tags. _(nullable)_ |
| TrackingTagTypes | array<`TrackingTag_TrackingTagType`> |  | The types of Tracking Tags to return. Duplicate values are not allowed. See GET trackingtag/query/facets for the list of possible types.   If not specified, empty, or null, this defaults to all types. _(nullable)_ |

### `TrackingTag_TrackingTag_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser that owns this tracking tag. |
| TrackingTagName | string | yes | The name of the tracking tag. The maximum character length is 256. _(maxLength 256)_ |
| TrackingTagType | `TrackingTag_TrackingTagType` | yes | The type of the tracking tag.   For TrackingTags that belong to AppEventTrackerTag or UniversalPixelTag categories, this may not be set to "Impression". |
| ContainerTagBody | string |  | Additional HTML to be inserted in the IFrame version of the tracking tag. Use this to add additional pixels that will be invoked when this tag is hit. Unless you use schemeless URLs, be careful that the pixels you place in this field use the same URL scheme (HTTP or HTTPS) as the page in which you will place the tracking tag.   This parameter has no effect if you only use the IMG version of the tag.   This property may not be modified for TrackingTags that belong to AppEventTrackerTag or UniversalPixelTag categories. _(nullable)_ |
| Currency | string |  | The units of currency of the `Revenue` property.  Here's what you need to know about this property:   - Supports any value; this is for conversion reporting and has no relationship to the Advertiser's currency code.   - This property may not be modified for TrackingTags that belong to the AppEventTrackerTag category.   - The maximum character length is 3. _(maxLength 3)_ |
| DataEventTypeId | `TTD.Domain.Shared.Http.Metadata.Models_TrackingDataEventTypeId` |  | The ID associated with an event. An event is an action that a user takes, such as viewing a product page, adding something to a shopping cart, or purchasing a product. _(nullable)_ |
| HouseholdEnabled | boolean |  | Household enabled option. |
| IFrameTag | string |  | IFrame tag   This is a read-only property returned by the API _(nullable)_ |
| ImageTag | string |  | Image tag   This is a read-only property returned by the API _(nullable)_ |
| Revenue | string |  | The amount of revenue a single hit to this tag generates. This is string so that a macro may be used if you wish to use the tag in a dynamic context (e.g. where your web site determines and replace the revenue before invoking the tag).   This property may not be modified for TrackingTags that belong to the AppEventTrackerTag category. _(nullable)_ |
| TagRedirectUri | string |  | Tag redirect URI _(nullable)_ |
| TrackingTagLocation | string |  | The location where this tracking tag will be deployed to gather tracking data.   This property may not be modified for TrackingTags that belong to AppEventTrackerTag or UniversalPixelTag categories. _(nullable)_ |

### `TrackingTag_TrackingTag_put`

| Field | Type | Required | Description |
|---|---|---|---|
| TrackingTagId | string | yes | The ID of the tracking tag. Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| AdvertiserId | string |  | The platform ID of the advertiser that owns this tracking tag. |
| ContainerTagBody | string |  | Additional HTML to be inserted in the IFrame version of the tracking tag. Use this to add additional pixels that will be invoked when this tag is hit. Unless you use schemeless URLs, be careful that the pixels you place in this field use the same URL scheme (HTTP or HTTPS) as the page in which you will place the tracking tag.   This parameter has no effect if you only use the IMG version of the tag.   This property may not be modified for TrackingTags that belong to AppEventTrackerTag or UniversalPixelTag categories. _(nullable)_ |
| Currency | string |  | The units of currency of the `Revenue` property.  Here's what you need to know about this property:   - Supports any value; this is for conversion reporting and has no relationship to the Advertiser's currency code.   - This property may not be modified for TrackingTags that belong to the AppEventTrackerTag category.   - The maximum character length is 3. _(maxLength 3)_ |
| DataEventTypeId | `TTD.Domain.Shared.Http.Metadata.Models_TrackingDataEventTypeId` |  | The ID associated with an event. An event is an action that a user takes, such as viewing a product page, adding something to a shopping cart, or purchasing a product. _(nullable)_ |
| HouseholdEnabled | boolean |  | Household enabled option. |
| IFrameTag | string |  | IFrame tag   This is a read-only property returned by the API _(nullable)_ |
| ImageTag | string |  | Image tag   This is a read-only property returned by the API _(nullable)_ |
| Revenue | string |  | The amount of revenue a single hit to this tag generates. This is string so that a macro may be used if you wish to use the tag in a dynamic context (e.g. where your web site determines and replace the revenue before invoking the tag).   This property may not be modified for TrackingTags that belong to the AppEventTrackerTag category. _(nullable)_ |
| TagRedirectUri | string |  | Tag redirect URI _(nullable)_ |
| TrackingTagLocation | string |  | The location where this tracking tag will be deployed to gather tracking data.   This property may not be modified for TrackingTags that belong to AppEventTrackerTag or UniversalPixelTag categories. _(nullable)_ |
| TrackingTagName | string |  | The name of the tracking tag. The maximum character length is 256. _(maxLength 256)_ |
| TrackingTagType | `TrackingTag_TrackingTagType` |  | The type of the tracking tag.   For TrackingTags that belong to AppEventTrackerTag or UniversalPixelTag categories, this may not be set to "Impression". |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_TrackingTag_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`TrackingTag_TrackingTag`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TTD.Domain.Shared.Http.Metadata.Models_TrackingDataEventTypeId`

Type: string enum(AddToCart, Purchase, ViewItem, SearchItem, SearchCategory, Login, MessageBusiness, Direction, StartCheckout, ViewCart, SiteVisit, WishListItem, SubscribeToNewsletter, LoyaltyMembers, Other)

### `TrackingTag_TrackingTagCategory`

Type: string enum(StaticTag, AppEventTrackerTag, UniversalPixelTag, OfflineTag)

### `TrackingTag_TrackingTagType`

Type: string enum(Impression, Retargeting, Conversion)

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability`

Type: string enum(Available, Archived)

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_Availability_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_TrackingTagSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `TrackingTag_TrackingTagSortingField` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_TrackingTagType_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `TrackingTag_TrackingTagType` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_TrackingTagSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `TrackingTag_TrackingTagSortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `TrackingTag_TrackingTagSortingField`

Type: string enum(Name, TagLocation)

