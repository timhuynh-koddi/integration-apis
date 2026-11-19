# Tracking

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 12

---

## POST /v3/tracking/trackedappvendor/query

Retrieve a list of supported AppEventTracker vendors.

Operation ID: `post-tracking-trackedappvendor-query`

**Request body** (`application/json`, required): `Tracking_TrackedAppVendorQuery`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_TrackedAppVendor_`

---

## POST /v3/tracking/appeventtrackerwithactivity/advertiser/query

Retrieve a list of AppEventTrackers set up for a particular advertiser, along with some basic activity statistics .

Operation ID: `post-tracking-appeventtrackerwithactivity-advertiser-query`

**Request body** (`application/json`, required): `Tracking_AppEventTrackerWithActivityQueryForAdvertiser`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_AppEventTrackerWithActivity_`

---

## POST /v3/tracking/appeventtracker

Create a new AppEventTracker for an advertiser.

Operation ID: `post-tracking-appeventtracker`

**Request body** (`application/json`, required): `Tracking_AppEventTracker_post`

**Response 200** (`application/json`): `Tracking_AppEventTracker`

---

## PUT /v3/tracking/appeventtracker

Update an existing AppEventTracker.

Operation ID: `put-tracking-appeventtracker`

**Request body** (`application/json`, required): `Tracking_AppEventTracker_put`

**Response 200** (`application/json`): `Tracking_AppEventTracker`

---

## GET /v3/tracking/appeventtracker/{appEventTrackerId}

Get details of a particular AppEventTracker.

Operation ID: `get-tracking-appeventtracker-appeventtrackerid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| appEventTrackerId | path | string | yes |  |

**Response 200** (`application/json`): `Tracking_AppEventTracker`

---

## POST /v3/tracking/universalpixelwithactivity/advertiser/query

Return a list of UniversalPixels set up for the Advertiser along with some basic activity statistics.  
**TIP**: Using the equivalent advertiser GraphQL query, you can enhance performance, customize criteria, and, if needed, expand your search across multiple advertisers.   
For details, see [Look Up Tracking Tags](/v3/portal/api/doc/AdvertiserGQLQueryExamples#tracking-tags).  
**NOTE**: This query always returns a paged result. You may set the `PageSize` property in the query parameters to a maximum of 100.    
This maximum may change at any point in time based on performance considerations, so please design accordingly.

Operation ID: `post-tracking-universalpixelwithactivity-advertiser-query`

**Request body** (`application/json`, required): `Tracking_UniversalPixelWithActivityQueryForAdvertiser`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_UniversalPixelWithActivity_`

---

## POST /v3/tracking/universalpixelmappingwithactivity/universalpixel/query

Return a list of UniversalPixelMappings set up for a UniversalPixel along with some basic activity statistics.  
Note that this query will always return a paged result.  You may set the PageSize using the query parameters to a maximum of 100.  
This maximum may change at any point in time based on performance considerations, so please design accordingly.

Operation ID: `post-tracking-universalpixelmappingwithactivity-universalpixel-query`

**Request body** (`application/json`, required): `Tracking_UniversalPixelMappingWithActivityQuery`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_UniversalPixelMappingWithActivity_`

---

## GET /v3/tracking/universalpixel/{universalPixelId}

Get the details of a particular UniversalPixel.

Operation ID: `get-tracking-universalpixel-universalpixelid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| universalPixelId | path | string | yes |  |

**Response 200** (`application/json`): `Tracking_UniversalPixel`

---

## POST /v3/tracking/universalpixel

Create a new UniversalPixel.

Operation ID: `post-tracking-universalpixel`

**Request body** (`application/json`, required): `Tracking_UniversalPixel_post`

**Response 200** (`application/json`): `Tracking_UniversalPixel`

---

## PUT /v3/tracking/universalpixel

Update an existing UniversalPixel.

Operation ID: `put-tracking-universalpixel`

**Request body** (`application/json`, required): `Tracking_UniversalPixel_put`

**Response 200** (`application/json`): `Tracking_UniversalPixel`

---

## GET /v3/tracking/universalpixel/pixelcode/{universalPixelId}

Get the JavaScript Pixel code for the UniversalPixel.

Operation ID: `get-tracking-universalpixel-pixelcode-universalpixelid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| universalPixelId | path | string | yes |  |

**Response 200** (`application/json`): `Tracking_UniversalPixelCode`

---

## GET /v3/tracking/universalpixel/pixelcode/china/{universalPixelId}

Get the JavaScript Pixel code for the UniversalPixel for China.

Operation ID: `get-tracking-universalpixel-pixelcode-china-universalpixelid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| universalPixelId | path | string | yes |  |

**Response 200** (`application/json`): `Tracking_UniversalPixelCode`

---

## Schemas

### `Tracking_AppEventTracker`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The platform ID of the advertiser that owns this App Event Tracker. |
| AppEventTrackerId | string |  | The ID of the AppEventTracker.     Use this ID in conjunction with the Advertiser ID for setting up AppEventTracking in the TrackedAppVendor's site.   Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| AppEventTrackerName | string |  | The name of the AppEventTracker. |
| TrackedAppOperatingSystem | `Tracking_TrackedAppOSFamilyType` |  | The TrackedAppOperatingSystem for this AppEventTracker. |
| TrackedAppVendorId | integer (int32) |  | The ID of the TrackedAppVendor for this AppEventTracker.   Refer to the tracking/trackedappvendor/query API for a list of valid TrackedAppVendor IDs. |
| TrackedEvents | array<`Tracking_TrackedEvent`> |  | The events that are tracked in the AppEventTracker. _(nullable)_ |
| UseTrackedAppVendorAttribution | boolean |  | Whether or not to enable vendor attribution.   Defaults to false if not specified. |

### `Tracking_AppEventTrackerWithActivityQueryForAdvertiser`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser whose App Event Trackers need to be retrieved. |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_AppEventTrackerWithActivitySortingField_`> |  | The fields by which to sort the returned data. See AppEventTrackerWithActivitySortingField enum section for the list of possible values.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by AppEventTrackerName ascending. _(nullable)_ |

### `Tracking_AppEventTracker_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser that owns this App Event Tracker. |
| AppEventTrackerName | string | yes | The name of the AppEventTracker. |
| TrackedAppVendorId | integer (int32) | yes | The ID of the TrackedAppVendor for this AppEventTracker.   Refer to the tracking/trackedappvendor/query API for a list of valid TrackedAppVendor IDs. |
| TrackedAppOperatingSystem | `Tracking_TrackedAppOSFamilyType` |  | The TrackedAppOperatingSystem for this AppEventTracker. |
| TrackedEvents | array<`Tracking_TrackedEvent_post`> |  | The events that are tracked in the AppEventTracker. _(nullable)_ |
| UseTrackedAppVendorAttribution | boolean |  | Whether or not to enable vendor attribution.   Defaults to false if not specified. |

### `Tracking_AppEventTracker_put`

| Field | Type | Required | Description |
|---|---|---|---|
| AppEventTrackerId | string | yes | The ID of the AppEventTracker.     Use this ID in conjunction with the Advertiser ID for setting up AppEventTracking in the TrackedAppVendor's site.   Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| AdvertiserId | string |  | The platform ID of the advertiser that owns this App Event Tracker. |
| AppEventTrackerName | string |  | The name of the AppEventTracker. |
| TrackedAppOperatingSystem | `Tracking_TrackedAppOSFamilyType` |  | The TrackedAppOperatingSystem for this AppEventTracker. |
| TrackedAppVendorId | integer (int32) |  | The ID of the TrackedAppVendor for this AppEventTracker.   Refer to the tracking/trackedappvendor/query API for a list of valid TrackedAppVendor IDs. |
| TrackedEvents | array<`Tracking_TrackedEvent_put`> |  | The events that are tracked in the AppEventTracker. _(nullable)_ |
| UseTrackedAppVendorAttribution | boolean |  | Whether or not to enable vendor attribution.   Defaults to false if not specified. |

### `Tracking_TrackedAppVendorQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_TrackedAppVendorSortingField_`> |  | The fields by which to sort the returned data. See TrackedAppVendorSortingField enum section for the list of possible values.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by AppEventTrackerName ascending. _(nullable)_ |

### `Tracking_UniversalPixel`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The platform ID of the advertiser that owns this universal pixel. |
| UniversalPixelId | string |  | The ID of the UniversalPixel.   Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| UniversalPixelMappings | `Tracking_UniversalPixelMappings` |  | The list of mappings for the UniversalPixel.   Mappings may be ExactMatchMappings or WildcardMatchMappings, and are subject to some rules and restrictions.   Please refer to the documentation for individual attributes for details on usage. |
| UniversalPixelName | string |  | The Name of the UniversalPixel. _(maxLength 50)_ |

### `Tracking_UniversalPixelCode`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The platform ID of the advertiser that owns this universal pixel. |
| PixelCode | string |  | The generated JavaScript code for the UniversalPixel. _(nullable)_ |
| UniversalPixelId | string |  | The ID of the UniversalPixel.   Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| UniversalPixelName | string |  | The Name of the UniversalPixel. _(maxLength 50)_ |

### `Tracking_UniversalPixelMappingWithActivityQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `NULL` means the maximum number of elements allowed per page.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum value for this property is 25. The maximum limit is 100.   - If a large page size is passed in, fewer items may be returned. Check the total count to see if more items are available.   For example:   - If there are 70 items, `PageStartIndex` is 0, and `PageSize` is 100, only the 70 existing items will be returned.   - If there are 100 items, `PageStartIndex` is 50, and `PageSize` is 50, the last 50 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + ResultCount is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| UniversalPixelId | string | yes | The ID of the Universal Pixel whose Mappings with activity need to be retrieved. |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_UniversalPixelMappingWithActivitySortingField_`> |  | The fields by which to sort the returned data. See UniversalPixelMappingWithActivitySortField enum section for the list of possible values.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by TrackingTagId ascending. _(nullable)_ |
| UniversalPixelMappingMatchTypeFilter | `Tracking_UniversalPixelMappingMatchTypeFilter` |  | The UniversalPixelMappingMatchType to filter the results by.  See UniversalPixelMappingMatchTypeFilter enum section for the list of possible values.   If not speciifed, this defaults to returning "All" UniversalPixelMappingMatchTypes. |
| UniversalPixelMappingTypeFilter | `Tracking_UniversalPixelMappingTypeFilter` |  | The UniversalPixelMappingType by which the results should be filtered.  See UniversalPixelMappingTypeFilter enum section for the list of possible values.   If not specified, this defaults to returning "All" types of UniversalPixelMappings. |

### `Tracking_UniversalPixelWithActivityQueryForAdvertiser`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser whose universal pixels need to be retrieved. |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `NULL` means the maximum number of elements allowed per page.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum value for this property is 25. The maximum limit is 100.   - If a large page size is passed in, fewer items may be returned. Check the total count to see if more items are available.   For example:   - If there are 70 items, `PageStartIndex` is 0, and `PageSize` is 100, only the 70 existing items will be returned.   - If there are 100 items, `PageStartIndex` is 50, and `PageSize` is 50, the last 50 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + ResultCount is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_UniversalPixelWithActivitySortingField_`> |  | The fields by which to sort the returned data. See UniversalPixelWithActivitySortingField enum section for the list of possible values.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by UniversalPixelName ascending. _(nullable)_ |

### `Tracking_UniversalPixel_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser that owns this universal pixel. |
| UniversalPixelName | string | yes | The Name of the UniversalPixel. _(maxLength 50)_ |
| UniversalPixelMappings | `Tracking_UniversalPixelMappings_post` |  | The list of mappings for the UniversalPixel.   Mappings may be ExactMatchMappings or WildcardMatchMappings, and are subject to some rules and restrictions.   Please refer to the documentation for individual attributes for details on usage. |

### `Tracking_UniversalPixel_put`

| Field | Type | Required | Description |
|---|---|---|---|
| UniversalPixelId | string | yes | The ID of the UniversalPixel.   Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| AdvertiserId | string |  | The platform ID of the advertiser that owns this universal pixel. |
| UniversalPixelMappings | `Tracking_UniversalPixelMappings_put` |  | The list of mappings for the UniversalPixel.   Mappings may be ExactMatchMappings or WildcardMatchMappings, and are subject to some rules and restrictions.   Please refer to the documentation for individual attributes for details on usage. |
| UniversalPixelName | string |  | The Name of the UniversalPixel. _(maxLength 50)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_AppEventTrackerWithActivity_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`Tracking_AppEventTrackerWithActivity`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_TrackedAppVendor_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`Tracking_TrackedAppVendor`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_UniversalPixelMappingWithActivity_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`Tracking_UniversalPixelMappingWithActivity`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_UniversalPixelWithActivity_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`Tracking_UniversalPixelWithActivity`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `Tracking_TrackedAppOSFamilyType`

Type: string enum(iOS, Android)

### `Tracking_TrackedEvent`

| Field | Type | Required | Description |
|---|---|---|---|
| DataEventTypeId | `TTD.Domain.Shared.Http.Metadata.Models_TrackingDataEventTypeId` |  | The ID associated with an event. An event is an action that a user takes, such as viewing a product page, adding something to a shopping cart, or purchasing a product. _(nullable)_ |
| TrackedEventCode | string |  | The Code of the Event that together with Event Type uniquely identifies the Tracked Event in an AppEventTracker.     Duplicated combination of codes and types are not allowed within an AppEventTracker's events and will result in the API throwing an error. |
| TrackedEventName | string |  | The Name of the Event that is being tracked. |
| TrackedEventType | `Tracking_TrackedEventType` |  | The Type of Event that together with Event Code uniquely identifies the Tracked Event in an AppEventTracker.     Duplicated combination of codes and types are not allowed within an AppEventTracker's events and will result in the API throwing an error. |
| TrackingTagId | string |  | The ID of the TrackingTag that was generated for this Event.   This is a read-only attribute returned by the API.     Use this TrackingTagId to associate with Campaign Conversion Reporting Columns for Campaigns that need to enable this Event in the AppEventTracker.   See the campaign API for details on setting up Campaign Conversion Reporting Columns. _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_AppEventTrackerWithActivitySortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `Tracking_AppEventTrackerWithActivitySortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `Tracking_TrackedEvent_post`

| Field | Type | Required | Description |
|---|---|---|---|
| TrackedEventCode | string | yes | The Code of the Event that together with Event Type uniquely identifies the Tracked Event in an AppEventTracker.     Duplicated combination of codes and types are not allowed within an AppEventTracker's events and will result in the API throwing an error. |
| TrackedEventName | string | yes | The Name of the Event that is being tracked. |
| TrackedEventType | `Tracking_TrackedEventType` | yes | The Type of Event that together with Event Code uniquely identifies the Tracked Event in an AppEventTracker.     Duplicated combination of codes and types are not allowed within an AppEventTracker's events and will result in the API throwing an error. |
| DataEventTypeId | `TTD.Domain.Shared.Http.Metadata.Models_TrackingDataEventTypeId` |  | The ID associated with an event. An event is an action that a user takes, such as viewing a product page, adding something to a shopping cart, or purchasing a product. _(nullable)_ |

### `Tracking_TrackedEvent_put`

| Field | Type | Required | Description |
|---|---|---|---|
| TrackedEventCode | string | yes | The Code of the Event that together with Event Type uniquely identifies the Tracked Event in an AppEventTracker.     Duplicated combination of codes and types are not allowed within an AppEventTracker's events and will result in the API throwing an error. |
| DataEventTypeId | `TTD.Domain.Shared.Http.Metadata.Models_TrackingDataEventTypeId` |  | The ID associated with an event. An event is an action that a user takes, such as viewing a product page, adding something to a shopping cart, or purchasing a product. _(nullable)_ |
| TrackedEventName | string |  | The Name of the Event that is being tracked. |
| TrackedEventType | `Tracking_TrackedEventType` |  | The Type of Event that together with Event Code uniquely identifies the Tracked Event in an AppEventTracker.     Duplicated combination of codes and types are not allowed within an AppEventTracker's events and will result in the API throwing an error. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_TrackedAppVendorSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `Tracking_TrackedAppVendorSortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `Tracking_UniversalPixelMappings`

| Field | Type | Required | Description |
|---|---|---|---|
| ExactMatchMappings | array<`Tracking_ExactMatchMapping`> |  | The list of mappings that have an exact URL to match against.   Currently, there is no limit on the number of ExactMatchMapping elements that may be defined on a Universal Pixel. |
| WildcardMatchMappings | array<`Tracking_WildcardMatchMapping`> |  | The list of mappings that have a URL pattern (Wildcard) to match against.   Currently there is a restriction of 100 maximum WildcardMatchMappings that may be defined on a Universal Pixel.  This is subject to change, so please design accordingly. |

### `Tracking_UniversalPixelMappingMatchTypeFilter`

Type: string enum(ExactMatch, WildcardMatch, All)

### `Tracking_UniversalPixelMappingTypeFilter`

Type: string enum(Conversion, Retargeting, All)

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_UniversalPixelMappingWithActivitySortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `Tracking_UniversalPixelMappingWithActivitySortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_UniversalPixelWithActivitySortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `Tracking_UniversalPixelWithActivitySortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `Tracking_UniversalPixelMappings_post`

| Field | Type | Required | Description |
|---|---|---|---|
| ExactMatchMappings | array<`Tracking_ExactMatchMapping_post`> |  | The list of mappings that have an exact URL to match against.   Currently, there is no limit on the number of ExactMatchMapping elements that may be defined on a Universal Pixel. |
| WildcardMatchMappings | array<`Tracking_WildcardMatchMapping_post`> |  | The list of mappings that have a URL pattern (Wildcard) to match against.   Currently there is a restriction of 100 maximum WildcardMatchMappings that may be defined on a Universal Pixel.  This is subject to change, so please design accordingly. |

### `Tracking_UniversalPixelMappings_put`

| Field | Type | Required | Description |
|---|---|---|---|
| ExactMatchMappings | array<`Tracking_ExactMatchMapping_put`> |  | The list of mappings that have an exact URL to match against.   Currently, there is no limit on the number of ExactMatchMapping elements that may be defined on a Universal Pixel. |
| WildcardMatchMappings | array<`Tracking_WildcardMatchMapping_put`> |  | The list of mappings that have a URL pattern (Wildcard) to match against.   Currently there is a restriction of 100 maximum WildcardMatchMappings that may be defined on a Universal Pixel.  This is subject to change, so please design accordingly. |

### `Tracking_AppEventTrackerWithActivity`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The platform ID of the advertiser that owns this App Event Tracker. |
| AppEventTrackerId | string |  | The ID of the AppEventTracker.     Use this ID in conjunction with the Advertiser ID for setting up AppEventTracking in the TrackedAppVendor's site.   Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| AppEventTrackerName | string |  | The name of the AppEventTracker. |
| TotalHitCount1Day | integer (int64) |  | The total number of hits for the UniversalPixel for the day. |
| TotalHitCount30Day | integer (int64) |  | The total number of hits for the UniversalPixel for the last thirty days. |
| TotalHitCount7Day | integer (int64) |  | The total number of hits for the UniversalPixel for the last seven days. |
| TrackedAppOperatingSystem | `Tracking_TrackedAppOSFamilyType` |  | The TrackedAppOperatingSystem for this AppEventTracker. |
| TrackedAppVendorId | integer (int32) |  | The ID of the TrackedAppVendor for this AppEventTracker.   Refer to the tracking/trackedappvendor/query API for a list of valid TrackedAppVendor IDs. |
| TrackedAppVendorName | string |  | The Name of the TrackedAppVendor for this AppEventTracker. _(nullable)_ |
| TrackedEvents | array<`Tracking_TrackedEvent`> |  | The events that are tracked in the AppEventTracker. _(nullable)_ |
| UseTrackedAppVendorAttribution | boolean |  | Whether or not to enable vendor attribution.   Defaults to false if not specified. |
| DailyTotalHitCount | integer (int64) |  | The total number of hits for the AppEventTracker for the day. _(DEPRECATED)_ |
| DailyUniqueHitCount | integer (int64) |  | The total number of unique hits for the AppEventTracker for the day. _(DEPRECATED)_ |

### `Tracking_TrackedAppVendor`

| Field | Type | Required | Description |
|---|---|---|---|
| TrackedAppVendorId | integer (int32) |  | The ID of the Vendor.  This is the ID that should be used while creating an AppEventTracker. |
| TrackedAppVendorName | string |  | The Name of the Vendor. _(nullable)_ |

### `Tracking_UniversalPixelMappingWithActivity`

| Field | Type | Required | Description |
|---|---|---|---|
| Description | `Tracking_UniversalPixelMappingDescription` |  | One of the predefined mapping descriptions, automatically set to "All Traffic" when "*" wildcard used or to "Other" otherwise. |
| HitCount1Day | integer (int64) |  | The total number of hits for the UniversalPixel for the day. |
| HitCount30Day | integer (int64) |  | The total number of hits for the UniversalPixel for the last thirty days. |
| HitCount7Day | integer (int64) |  | The total number of hits for the UniversalPixel for the last seven days. |
| LastHitTimeUtc | string (date-time) |  | The timestamp of the last hit. _(nullable)_ |
| TrackingTagId | string |  | The ID of the TrackingTag that identifies the mapping for the UniversalPixel.     This is generated and returned by the API when the mapping is created.	   This is a read-only attribute returned by the API.   Use this TrackingTagId to associate with Campaign Conversion Reporting Columns for Campaigns. See the campaign API for details on setting up Campaign Conversion Reporting Columns.   When this attribute is specified in a POST (create) request for a UniversalPixel, it will be ignored.   This attribute must be specified if you wish to update an existing mapping for a UniversalPixel - in the PUT request for the UniversalPixel.   When this attribute is absent, the API will proceed to create a new mapping.   Note that this is not a mechanism to associate ANY previously created TrackingTag with a UniversalPixel.     The API will throw an error if you attempt to associate a previously unrelated (or non existent) TrackingTagId with an existing UniversalPixel.   Note also that fluidity between WidcardUniversalPixelMapping and ExactMatchMapping may be achieved by specifiying this ID.     A Mapping that was previously a WildcardMatchMapping may be specified under the ExactMatchMapping list (and vice versa) as long as the URL is specified as expected, and as long as it only appears in one of the lists. |
| UniversalPixelId | string |  | The ID of the UniversalPixel that this UniversalPixelMapping belongs to. _(nullable)_ |
| UniversalPixelMappingMatchType | `Tracking_UniversalPixelMappingMatchType` |  | The MatchType for the UniversalPixelMapping. |
| UniversalPixelMappingName | string |  | The Name of the mapping. _(maxLength 256)_ |
| UniversalPixelMappingType | `Tracking_UniversalPixelMappingType` |  | The type of the mapping. |
| UrlPattern | string |  | The Url or UrlPattern that needs to be matched for this particular UniversalPixelMapping. _(nullable)_ |
| DailyTotalHitCount | integer (int64) |  | The total number of hits for the UniversalPixelMapping for the day. _(DEPRECATED)_ |
| DailyUniqueHitCount | integer (int64) |  | The total number of unique hits for the UniversalPixelMapping for the day. _(DEPRECATED)_ |
| Priority | integer (int32) |  | The position or priority of the UniversalPixelMapping.     This is only relevant for UniversalPixelMappings that are of UniversalPixelMappingMatchType 'WildcardMatch'.    For UniversalPixelMappings of type 'ExactMatch' this value will always be null. _(nullable; DEPRECATED; deprecation: Wildcard mappings no longer have priorities and will be matched when applicable)_ |

### `Tracking_UniversalPixelWithActivity`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The platform ID of the advertiser that owns this universal pixel. |
| TotalHitCount1Day | integer (int64) |  | The total number of hits for the UniversalPixel for the day. |
| TotalHitCount30Day | integer (int64) |  | The total number of hits for the UniversalPixel for the last thirty days. |
| TotalHitCount7Day | integer (int64) |  | The total number of hits for the UniversalPixel for the last seven days. |
| UniversalPixelId | string |  | The ID of the UniversalPixel.   Ignored on create, when an ID will be assigned and returned by The Trade Desk. |
| UniversalPixelName | string |  | The Name of the UniversalPixel. _(maxLength 50)_ |
| DailyTotalHitCount | integer (int64) |  | The total number of hits for the UniversalPixel for the day. _(DEPRECATED)_ |
| DailyUniqueHitCount | integer (int64) |  | The total number of unique hits for the UniversalPixel for the day. _(DEPRECATED)_ |

### `TTD.Domain.Shared.Http.Metadata.Models_TrackingDataEventTypeId`

Type: string enum(AddToCart, Purchase, ViewItem, SearchItem, SearchCategory, Login, MessageBusiness, Direction, StartCheckout, ViewCart, SiteVisit, WishListItem, SubscribeToNewsletter, LoyaltyMembers, Other)

### `Tracking_TrackedEventType`

Type: string enum(Retargeting, Conversion)

### `Tracking_AppEventTrackerWithActivitySortingField`

Type: string enum(AppEventTrackerName, TrackedAppVendorName, AppEventTrackerId)

### `Tracking_TrackedAppVendorSortingField`

Type: string enum(TrackedAppVendorName)

### `Tracking_ExactMatchMapping`

| Field | Type | Required | Description |
|---|---|---|---|
| Currency | string |  | The units of currency of the Revenue property.  Supports any value; this is for conversion reporting and has no relationship to the Advertiser's currency code. _(maxLength 3)_ |
| DataEventTypeId | `TTD.Domain.Shared.Http.Metadata.Models_TrackingDataEventTypeId` |  | The ID associated with an event. An event is an action that a user takes, such as viewing a product page, adding something to a shopping cart, or purchasing a product. _(nullable)_ |
| Description | `Tracking_UniversalPixelMappingDescription` |  | One of the predefined mapping descriptions, automatically set to "All Traffic" when "*" wildcard used or to "Other" otherwise. |
| HouseholdExtensionEnabled | boolean |  | Indicates whether or not Household extensions should be enabled for this UniversalPixelMapping.   This attribute must be specified when a UniversalPixelMapping is created.   It is recommended that HouseholdExtensions be enabled for UniversalPixelMappings. |
| Revenue | string |  | The amount of revenue a single hit to this UniversalPixelMapping generates. This is string so that a macro may be used if you wish to use the tag in a dynamic context (e.g. where your web site determines and replace the revenue before invoking the tag). _(nullable)_ |
| TrackingTagId | string |  | The ID of the TrackingTag that identifies the mapping for the UniversalPixel.     This is generated and returned by the API when the mapping is created.	   This is a read-only attribute returned by the API.   Use this TrackingTagId to associate with Campaign Conversion Reporting Columns for Campaigns. See the campaign API for details on setting up Campaign Conversion Reporting Columns.   When this attribute is specified in a POST (create) request for a UniversalPixel, it will be ignored.   This attribute must be specified if you wish to update an existing mapping for a UniversalPixel - in the PUT request for the UniversalPixel.   When this attribute is absent, the API will proceed to create a new mapping.   Note that this is not a mechanism to associate ANY previously created TrackingTag with a UniversalPixel.     The API will throw an error if you attempt to associate a previously unrelated (or non existent) TrackingTagId with an existing UniversalPixel.   Note also that fluidity between WidcardUniversalPixelMapping and ExactMatchMapping may be achieved by specifiying this ID.     A Mapping that was previously a WildcardMatchMapping may be specified under the ExactMatchMapping list (and vice versa) as long as the URL is specified as expected, and as long as it only appears in one of the lists. |
| UniversalPixelMappingName | string |  | The Name of the mapping. _(maxLength 256)_ |
| UniversalPixelMappingType | `Tracking_UniversalPixelMappingType` |  | The type of the mapping. |
| Url | string |  | The exact (valid) URL that should be matched.   The URL should be unique within the mappings that are defined for the UniversalPixel, and may not contain any wildcard (*) characters.   The maximum length is 256 characters. _(maxLength 256)_ |

### `Tracking_WildcardMatchMapping`

A UniversalPixelMapping element that has a Wildcard URL Pattern.  
Note that the order of WildcardMatchMapping elements in the list is representative of their priority in matches.    
The item at the top of the list has the highest priority followed by every susbsequent element in the list.    
The priority order determines the order in which your mappings will collect uniques for the targetable data segments in the Data Management Platform.    
Exception to this is the item with URL pattern equal to "*" (a single asterisk), which always has the lowest priority regardless of the position of this item in the list.

| Field | Type | Required | Description |
|---|---|---|---|
| Currency | string |  | The units of currency of the Revenue property.  Supports any value; this is for conversion reporting and has no relationship to the Advertiser's currency code. _(maxLength 3)_ |
| DataEventTypeId | `TTD.Domain.Shared.Http.Metadata.Models_TrackingDataEventTypeId` |  | The ID associated with an event. An event is an action that a user takes, such as viewing a product page, adding something to a shopping cart, or purchasing a product. _(nullable)_ |
| Description | `Tracking_UniversalPixelMappingDescription` |  | One of the predefined mapping descriptions, automatically set to "All Traffic" when "*" wildcard used or to "Other" otherwise. |
| HouseholdExtensionEnabled | boolean |  | Indicates whether or not Household extensions should be enabled for this UniversalPixelMapping.   This attribute must be specified when a UniversalPixelMapping is created.   It is recommended that HouseholdExtensions be enabled for UniversalPixelMappings. |
| Revenue | string |  | The amount of revenue a single hit to this UniversalPixelMapping generates. This is string so that a macro may be used if you wish to use the tag in a dynamic context (e.g. where your web site determines and replace the revenue before invoking the tag). _(nullable)_ |
| TrackingTagId | string |  | The ID of the TrackingTag that identifies the mapping for the UniversalPixel.     This is generated and returned by the API when the mapping is created.	   This is a read-only attribute returned by the API.   Use this TrackingTagId to associate with Campaign Conversion Reporting Columns for Campaigns. See the campaign API for details on setting up Campaign Conversion Reporting Columns.   When this attribute is specified in a POST (create) request for a UniversalPixel, it will be ignored.   This attribute must be specified if you wish to update an existing mapping for a UniversalPixel - in the PUT request for the UniversalPixel.   When this attribute is absent, the API will proceed to create a new mapping.   Note that this is not a mechanism to associate ANY previously created TrackingTag with a UniversalPixel.     The API will throw an error if you attempt to associate a previously unrelated (or non existent) TrackingTagId with an existing UniversalPixel.   Note also that fluidity between WidcardUniversalPixelMapping and ExactMatchMapping may be achieved by specifiying this ID.     A Mapping that was previously a WildcardMatchMapping may be specified under the ExactMatchMapping list (and vice versa) as long as the URL is specified as expected, and as long as it only appears in one of the lists. |
| UniversalPixelMappingName | string |  | The Name of the mapping. _(maxLength 256)_ |
| UniversalPixelMappingType | `Tracking_UniversalPixelMappingType` |  | The type of the mapping. |
| UrlPattern | string |  | The wildcard URL that should be matched. Here's what you need to know about this property:   To qualify as a valid wildcard match URL pattern, the URL must contain an asterisk (*) in it and be unique within mappings defined for the universal pixel.           - The maximum character length is 256. _(maxLength 256)_ |

### `Tracking_UniversalPixelMappingWithActivitySortingField`

Type: string enum(UniversalPixelMappingName, UniversalPixelMappingType, TrackingTagId, Priority, TotalHitCount, UniqueHitCount)

### `Tracking_UniversalPixelWithActivitySortingField`

Type: string enum(UniversalPixelName, UniversalPixelId, TotalHitCount, UniqueHitCount, TotalHitCount1Day, TotalHitCount7Day, TotalHitCount30Day)

### `Tracking_ExactMatchMapping_post`

| Field | Type | Required | Description |
|---|---|---|---|
| HouseholdExtensionEnabled | boolean | yes | Indicates whether or not Household extensions should be enabled for this UniversalPixelMapping.   This attribute must be specified when a UniversalPixelMapping is created.   It is recommended that HouseholdExtensions be enabled for UniversalPixelMappings. |
| UniversalPixelMappingName | string | yes | The Name of the mapping. _(maxLength 256)_ |
| UniversalPixelMappingType | `Tracking_UniversalPixelMappingType` | yes | The type of the mapping. |
| Url | string | yes | The exact (valid) URL that should be matched.   The URL should be unique within the mappings that are defined for the UniversalPixel, and may not contain any wildcard (*) characters.   The maximum length is 256 characters. _(maxLength 256)_ |
| Currency | string |  | The units of currency of the Revenue property.  Supports any value; this is for conversion reporting and has no relationship to the Advertiser's currency code. _(maxLength 3)_ |
| DataEventTypeId | `TTD.Domain.Shared.Http.Metadata.Models_TrackingDataEventTypeId` |  | The ID associated with an event. An event is an action that a user takes, such as viewing a product page, adding something to a shopping cart, or purchasing a product. _(nullable)_ |
| Description | `Tracking_UniversalPixelMappingDescription` |  | One of the predefined mapping descriptions, automatically set to "All Traffic" when "*" wildcard used or to "Other" otherwise. |
| Revenue | string |  | The amount of revenue a single hit to this UniversalPixelMapping generates. This is string so that a macro may be used if you wish to use the tag in a dynamic context (e.g. where your web site determines and replace the revenue before invoking the tag). _(nullable)_ |

### `Tracking_WildcardMatchMapping_post`

A UniversalPixelMapping element that has a Wildcard URL Pattern.  
Note that the order of WildcardMatchMapping elements in the list is representative of their priority in matches.    
The item at the top of the list has the highest priority followed by every susbsequent element in the list.    
The priority order determines the order in which your mappings will collect uniques for the targetable data segments in the Data Management Platform.    
Exception to this is the item with URL pattern equal to "*" (a single asterisk), which always has the lowest priority regardless of the position of this item in the list.

| Field | Type | Required | Description |
|---|---|---|---|
| HouseholdExtensionEnabled | boolean | yes | Indicates whether or not Household extensions should be enabled for this UniversalPixelMapping.   This attribute must be specified when a UniversalPixelMapping is created.   It is recommended that HouseholdExtensions be enabled for UniversalPixelMappings. |
| UniversalPixelMappingName | string | yes | The Name of the mapping. _(maxLength 256)_ |
| UniversalPixelMappingType | `Tracking_UniversalPixelMappingType` | yes | The type of the mapping. |
| UrlPattern | string | yes | The wildcard URL that should be matched. Here's what you need to know about this property:   To qualify as a valid wildcard match URL pattern, the URL must contain an asterisk (*) in it and be unique within mappings defined for the universal pixel.           - The maximum character length is 256. _(maxLength 256)_ |
| Currency | string |  | The units of currency of the Revenue property.  Supports any value; this is for conversion reporting and has no relationship to the Advertiser's currency code. _(maxLength 3)_ |
| DataEventTypeId | `TTD.Domain.Shared.Http.Metadata.Models_TrackingDataEventTypeId` |  | The ID associated with an event. An event is an action that a user takes, such as viewing a product page, adding something to a shopping cart, or purchasing a product. _(nullable)_ |
| Description | `Tracking_UniversalPixelMappingDescription` |  | One of the predefined mapping descriptions, automatically set to "All Traffic" when "*" wildcard used or to "Other" otherwise. |
| Revenue | string |  | The amount of revenue a single hit to this UniversalPixelMapping generates. This is string so that a macro may be used if you wish to use the tag in a dynamic context (e.g. where your web site determines and replace the revenue before invoking the tag). _(nullable)_ |

### `Tracking_ExactMatchMapping_put`

| Field | Type | Required | Description |
|---|---|---|---|
| Currency | string |  | The units of currency of the Revenue property.  Supports any value; this is for conversion reporting and has no relationship to the Advertiser's currency code. _(maxLength 3)_ |
| DataEventTypeId | `TTD.Domain.Shared.Http.Metadata.Models_TrackingDataEventTypeId` |  | The ID associated with an event. An event is an action that a user takes, such as viewing a product page, adding something to a shopping cart, or purchasing a product. _(nullable)_ |
| Description | `Tracking_UniversalPixelMappingDescription` |  | One of the predefined mapping descriptions, automatically set to "All Traffic" when "*" wildcard used or to "Other" otherwise. |
| HouseholdExtensionEnabled | boolean |  | Indicates whether or not Household extensions should be enabled for this UniversalPixelMapping.   This attribute must be specified when a UniversalPixelMapping is created.   It is recommended that HouseholdExtensions be enabled for UniversalPixelMappings. |
| Revenue | string |  | The amount of revenue a single hit to this UniversalPixelMapping generates. This is string so that a macro may be used if you wish to use the tag in a dynamic context (e.g. where your web site determines and replace the revenue before invoking the tag). _(nullable)_ |
| TrackingTagId | string |  | The ID of the TrackingTag that identifies the mapping for the UniversalPixel.     This is generated and returned by the API when the mapping is created.	   This is a read-only attribute returned by the API.   Use this TrackingTagId to associate with Campaign Conversion Reporting Columns for Campaigns. See the campaign API for details on setting up Campaign Conversion Reporting Columns.   When this attribute is specified in a POST (create) request for a UniversalPixel, it will be ignored.   This attribute must be specified if you wish to update an existing mapping for a UniversalPixel - in the PUT request for the UniversalPixel.   When this attribute is absent, the API will proceed to create a new mapping.   Note that this is not a mechanism to associate ANY previously created TrackingTag with a UniversalPixel.     The API will throw an error if you attempt to associate a previously unrelated (or non existent) TrackingTagId with an existing UniversalPixel.   Note also that fluidity between WidcardUniversalPixelMapping and ExactMatchMapping may be achieved by specifiying this ID.     A Mapping that was previously a WildcardMatchMapping may be specified under the ExactMatchMapping list (and vice versa) as long as the URL is specified as expected, and as long as it only appears in one of the lists. |
| UniversalPixelMappingName | string |  | The Name of the mapping. _(maxLength 256)_ |
| UniversalPixelMappingType | `Tracking_UniversalPixelMappingType` |  | The type of the mapping. |
| Url | string |  | The exact (valid) URL that should be matched.   The URL should be unique within the mappings that are defined for the UniversalPixel, and may not contain any wildcard (*) characters.   The maximum length is 256 characters. _(maxLength 256)_ |

### `Tracking_WildcardMatchMapping_put`

A UniversalPixelMapping element that has a Wildcard URL Pattern.  
Note that the order of WildcardMatchMapping elements in the list is representative of their priority in matches.    
The item at the top of the list has the highest priority followed by every susbsequent element in the list.    
The priority order determines the order in which your mappings will collect uniques for the targetable data segments in the Data Management Platform.    
Exception to this is the item with URL pattern equal to "*" (a single asterisk), which always has the lowest priority regardless of the position of this item in the list.

| Field | Type | Required | Description |
|---|---|---|---|
| Currency | string |  | The units of currency of the Revenue property.  Supports any value; this is for conversion reporting and has no relationship to the Advertiser's currency code. _(maxLength 3)_ |
| DataEventTypeId | `TTD.Domain.Shared.Http.Metadata.Models_TrackingDataEventTypeId` |  | The ID associated with an event. An event is an action that a user takes, such as viewing a product page, adding something to a shopping cart, or purchasing a product. _(nullable)_ |
| Description | `Tracking_UniversalPixelMappingDescription` |  | One of the predefined mapping descriptions, automatically set to "All Traffic" when "*" wildcard used or to "Other" otherwise. |
| HouseholdExtensionEnabled | boolean |  | Indicates whether or not Household extensions should be enabled for this UniversalPixelMapping.   This attribute must be specified when a UniversalPixelMapping is created.   It is recommended that HouseholdExtensions be enabled for UniversalPixelMappings. |
| Revenue | string |  | The amount of revenue a single hit to this UniversalPixelMapping generates. This is string so that a macro may be used if you wish to use the tag in a dynamic context (e.g. where your web site determines and replace the revenue before invoking the tag). _(nullable)_ |
| TrackingTagId | string |  | The ID of the TrackingTag that identifies the mapping for the UniversalPixel.     This is generated and returned by the API when the mapping is created.	   This is a read-only attribute returned by the API.   Use this TrackingTagId to associate with Campaign Conversion Reporting Columns for Campaigns. See the campaign API for details on setting up Campaign Conversion Reporting Columns.   When this attribute is specified in a POST (create) request for a UniversalPixel, it will be ignored.   This attribute must be specified if you wish to update an existing mapping for a UniversalPixel - in the PUT request for the UniversalPixel.   When this attribute is absent, the API will proceed to create a new mapping.   Note that this is not a mechanism to associate ANY previously created TrackingTag with a UniversalPixel.     The API will throw an error if you attempt to associate a previously unrelated (or non existent) TrackingTagId with an existing UniversalPixel.   Note also that fluidity between WidcardUniversalPixelMapping and ExactMatchMapping may be achieved by specifiying this ID.     A Mapping that was previously a WildcardMatchMapping may be specified under the ExactMatchMapping list (and vice versa) as long as the URL is specified as expected, and as long as it only appears in one of the lists. |
| UniversalPixelMappingName | string |  | The Name of the mapping. _(maxLength 256)_ |
| UniversalPixelMappingType | `Tracking_UniversalPixelMappingType` |  | The type of the mapping. |
| UrlPattern | string |  | The wildcard URL that should be matched. Here's what you need to know about this property:   To qualify as a valid wildcard match URL pattern, the URL must contain an asterisk (*) in it and be unique within mappings defined for the universal pixel.           - The maximum character length is 256. _(maxLength 256)_ |

### `Tracking_UniversalPixelMappingDescription`

Type: string enum(AllTraffic, Confirmation, CheckoutProcess, ShoppingCart, ProductAndPromotionalPage, Homepage, Other)

### `Tracking_UniversalPixelMappingMatchType`

Type: string enum(ExactMatch, WildcardMatch)

### `Tracking_UniversalPixelMappingType`

Type: string enum(Retargeting, Conversion)

