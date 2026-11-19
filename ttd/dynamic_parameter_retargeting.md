# Dynamic Parameter Retargeting

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 6

---

## GET /v3/dynamicparameterretargeting/query/facets

Get the facets of Dynamic Parameter Retargeting that can be queried.

Operation ID: `get-dynamicparameterretargeting-query-facets`

**Response 200** (`application/json`): `DynamicParameterRetargeting_DynamicParameterRetargetingFacets`

---

## POST /v3/dynamicparameterretargeting

Create a Dynamic Parameter Retargeting rule

Operation ID: `post-dynamicparameterretargeting`

**Request body** (`application/json`, required): `DynamicParameterRetargeting_DynamicParameterRetargetingRule_post`

**Response 200** (`application/json`): `DynamicParameterRetargeting_DynamicParameterRetargetingRule`

---

## PUT /v3/dynamicparameterretargeting

Edit a Dynamic Parameter Retargeting rule

Operation ID: `put-dynamicparameterretargeting`

**Request body** (`application/json`, required): `DynamicParameterRetargeting_DynamicParameterRetargetingRule_put`

**Response 200** (`application/json`): `DynamicParameterRetargeting_DynamicParameterRetargetingRule`

---

## GET /v3/dynamicparameterretargeting/{ruleId}

Get a Dynamic Parameter Retargeting rule.

Operation ID: `get-dynamicparameterretargeting-ruleid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ruleId | path | string | yes | The ID of the dynamic parameter retargeting rule to retrieve. |

**Response 200** (`application/json`): `DynamicParameterRetargeting_DynamicParameterRetargetingRule`

---

## POST /v3/dynamicparameterretargeting/query/advertiser

Query for a page of Dynamic Parameter Retargeting Rules within an Advertiser.

Operation ID: `post-dynamicparameterretargeting-query-advertiser`

**Request body** (`application/json`, required): `DynamicParameterRetargeting_DynamicTrackingRuleQueryForAdvertiser`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_DynamicParameterRetargetingRule_`

---

## POST /v3/dynamicparameterretargeting/archive

Archive Dynamic Parameter Retargeting rules (based on a list of IDs) for a given advertiser.

Operation ID: `post-dynamicparameterretargeting-archive`

**Request body** (`application/json`, required): `DynamicParameterRetargeting_DynamicParameterRetargetingRuleArchiveRequest_post`

**Response 200** (`application/json`): `DynamicParameterRetargeting_DynamicParameterRetargetingRuleArchiveResponse`

---

## Schemas

### `DynamicParameterRetargeting_DynamicParameterRetargetingFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| DynamicTrackingRuleAvailabilities | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_Availability_`> |  | The availabilities of Dynamic Parameter Retargeting Rules that can be requested/filtered. This list may be extended at any time, so please design accordingly. |
| FunctionTypes | array<`DynamicParameterRetargeting_DynamicParameterRetargetingFunction`> |  | The types of Dynamic Parameter Retargeting rule functions that can be requested. This list may be extended at any time, so please design accordingly. |
| SegmentTypes | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_DynamicParameterRetargetingSegmentType_`> |  | The types of Dynamic Parameter Retargeting segment types that can be requested. This list may be extended at any time, so please design accordingly. |
| SortingFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_DynamicParameterRetargetingRuleSortingField_`> |  | The fields by which Dynamic Parameter Retargeting Rules may be sorted in a query. This list may be extended at any time, so please design accordingly. |

### `DynamicParameterRetargeting_DynamicParameterRetargetingRule`

| Field | Type | Required | Description |
|---|---|---|---|
| CreatedAt | string (date-time) |  | The time the dynamic parameter retargeting Rule was created.   This field is read-only. |
| EvaluatedParameter | string |  | A custom dynamic parameter (td1 - td10) that this retargeting rule is to evaluate.   This field accepts only lowercase characters. |
| FunctionId | integer (int32) |  | The ID of the function for the dynamic parameter retargeting Rule.   See GET dynamicparameterretargeting/query/facets for a complete list of possible IDs. |
| IsArchived | boolean |  | Specifies whether the dynamic parameter retargeting Rule is archived or not.   This field is read-only. |
| LastUpdatedAt | string (date-time) |  | The time the dynamic parameter retargeting Rule was last updated.   This field is read-only. |
| NumericParameter | number (double) |  | The numeric parameter for the function.    This field is only valid for numeric functions. _(nullable)_ |
| RuleId | string |  | The ID for the dynamic parameter retargeting Rule.   This field is read-only. _(nullable)_ |
| SecondaryNumericParameter | number (double) |  | The second numeric parameter for the function.    This field is only valid for numeric functions that accept a secondary parameter. _(nullable)_ |
| SegmentName | string |  | The name of the segment populated by the dynamic parameter retargeting Rule. The maximum character length is 248. _(maxLength 248)_ |
| StringParameter | string |  | The string parameter for the function. Here's what you need to know about this property:   - This field is only valid for alphanumeric functions.   - The maximum character length is 64. _(maxLength 64)_ |
| TrackingTagId | string |  | The Tracking Tag this dynamic parameter retargeting Rule will evaluate. _(maxLength 32)_ |

### `DynamicParameterRetargeting_DynamicParameterRetargetingRuleArchiveRequest_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser that is making the request. |
| RuleIds | array<string> | yes | The Dynamic Parameter Retargeting Rule Ids to archive. |

### `DynamicParameterRetargeting_DynamicParameterRetargetingRuleArchiveResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| Error | string |  | The error that occurred in the event of an unsuccesful archive request _(nullable)_ |
| RuleIds | array<string> |  | The list of Dynamic Parameter Retargeting Rule Ids that were archived _(nullable)_ |
| Successful | boolean |  | Indicates whether the response was successful |

### `DynamicParameterRetargeting_DynamicParameterRetargetingRule_post`

| Field | Type | Required | Description |
|---|---|---|---|
| EvaluatedParameter | string | yes | A custom dynamic parameter (td1 - td10) that this retargeting rule is to evaluate.   This field accepts only lowercase characters. |
| FunctionId | integer (int32) | yes | The ID of the function for the dynamic parameter retargeting Rule.   See GET dynamicparameterretargeting/query/facets for a complete list of possible IDs. |
| SegmentName | string | yes | The name of the segment populated by the dynamic parameter retargeting Rule. The maximum character length is 248. _(maxLength 248)_ |
| TrackingTagId | string | yes | The Tracking Tag this dynamic parameter retargeting Rule will evaluate. _(maxLength 32)_ |
| NumericParameter | number (double) |  | The numeric parameter for the function.    This field is only valid for numeric functions. _(nullable)_ |
| SecondaryNumericParameter | number (double) |  | The second numeric parameter for the function.    This field is only valid for numeric functions that accept a secondary parameter. _(nullable)_ |
| StringParameter | string |  | The string parameter for the function. Here's what you need to know about this property:   - This field is only valid for alphanumeric functions.   - The maximum character length is 64. _(maxLength 64)_ |

### `DynamicParameterRetargeting_DynamicParameterRetargetingRule_put`

| Field | Type | Required | Description |
|---|---|---|---|
| EvaluatedParameter | string |  | A custom dynamic parameter (td1 - td10) that this retargeting rule is to evaluate.   This field accepts only lowercase characters. |
| FunctionId | integer (int32) |  | The ID of the function for the dynamic parameter retargeting Rule.   See GET dynamicparameterretargeting/query/facets for a complete list of possible IDs. |
| NumericParameter | number (double) |  | The numeric parameter for the function.    This field is only valid for numeric functions. _(nullable)_ |
| SecondaryNumericParameter | number (double) |  | The second numeric parameter for the function.    This field is only valid for numeric functions that accept a secondary parameter. _(nullable)_ |
| SegmentName | string |  | The name of the segment populated by the dynamic parameter retargeting Rule. The maximum character length is 248. _(maxLength 248)_ |
| StringParameter | string |  | The string parameter for the function. Here's what you need to know about this property:   - This field is only valid for alphanumeric functions.   - The maximum character length is 64. _(maxLength 64)_ |
| TrackingTagId | string |  | The Tracking Tag this dynamic parameter retargeting Rule will evaluate. _(maxLength 32)_ |

### `DynamicParameterRetargeting_DynamicTrackingRuleQueryForAdvertiser`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The platform ID of the advertiser that owns the dynamic parameter retargeting rules. |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| SearchTerms | array<string> |  | A list of search terms by which to filter the returned Dynamic Parameter Retargeting Rules. All terms must be matched in the name or id in order for a Dynamic Parameter Retargeting Rule to match.   If not specified, empty, or null, this property is ignored. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_DynamicParameterRetargetingRuleSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed. See GET dynamicparameterretargeting/query/facets for the list of possible sort field IDs for Dynamic Parameter Retargeting Rules.   Sorting will happen in the order the sort fields are specified in the list. Duplicate field IDs are not allowed.   If not specified, empty, or null, this defaults to sorting by Name ascending. _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_DynamicParameterRetargetingRule_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`DynamicParameterRetargeting_DynamicParameterRetargetingRule`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `DynamicParameterRetargeting_DynamicParameterRetargetingFunction`

| Field | Type | Required | Description |
|---|---|---|---|
| FunctionId | integer (int32) |  |  |
| IsNumeric | boolean |  |  |
| Name | string |  | _(nullable)_ |
| ParameterCount | integer (int32) |  |  |
| TakesSecondaryParameter | boolean |  |  |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_Availability_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_DynamicParameterRetargetingRuleSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `DynamicParameterRetargeting_DynamicParameterRetargetingRuleSortingField` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_DynamicParameterRetargetingSegmentType_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `TheTradeDesk.AdPlatform.Shared.PlatformModels_DynamicParameterRetargetingSegmentType` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_DynamicParameterRetargetingRuleSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `DynamicParameterRetargeting_DynamicParameterRetargetingRuleSortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability`

Type: string enum(Available, Archived)

### `DynamicParameterRetargeting_DynamicParameterRetargetingRuleSortingField`

Type: string enum(TrackingTagId, TrackingTagName, Name, SegmentType)

### `TheTradeDesk.AdPlatform.Shared.PlatformModels_DynamicParameterRetargetingSegmentType`

Type: string enum(Revenue, DynamicParameter)

