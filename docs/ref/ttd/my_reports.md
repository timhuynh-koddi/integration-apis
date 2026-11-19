# My Reports

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 12

---

## GET /v3/myreports/reportdelivery/facets

Get the facets of Report Deliveries.

Operation ID: `get-myreports-reportdelivery-facets`

**Response 200** (`application/json`): `MyReports_ReportDeliveryFacets`

---

## GET /v3/myreports/reportexecution/facets

Get the facets of Report Executions.

Operation ID: `get-myreports-reportexecution-facets`

**Response 200** (`application/json`): `MyReports_ReportExecutionFacets`

---

## POST /v3/myreports/reportexecution/query/advertisers

Get a page of Report Executions that match the Advertisers and filters in the specified query.

Operation ID: `post-myreports-reportexecution-query-advertisers`

**Request body** (`application/json`, required): `MyReports_ReportExecutionQueryForAdvertisers`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_ReportExecution_`

---

## GET /v3/myreports/reporttemplate/facets

Get the facets of Report Templates.

Operation ID: `get-myreports-reporttemplate-facets`

**Response 200** (`application/json`): `MyReports_ReportTemplateFacets`

---

## POST /v3/myreports/reporttemplateheader/query

Get a page of Report Template Headers that match the filters in the specified query.

Operation ID: `post-myreports-reporttemplateheader-query`

**Request body** (`application/json`, required): `MyReports_ReportTemplateHeaderQuery`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_ReportTemplateHeader_`

---

## POST /v3/myreports/supportedtailaggregationprofiles/query

Get the tail aggregation profiles that are supported by the Report Template in the specified query.

Operation ID: `post-myreports-supportedtailaggregationprofiles-query`

**Request body** (`application/json`, required): `MyReports_SupportedTailAggregationProfilesQuery`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_SupportedTailAggregationProfile_`

---

## GET /v3/myreports/reportschedule/facets

Get the facets of a Report Schedule.

Operation ID: `get-myreports-reportschedule-facets`

**Response 200** (`application/json`): `MyReports_ReportScheduleFacets`

---

## POST /v3/myreports/reportschedule/query

Get a page of Report Schedules that match the filters in the specified query.

Operation ID: `post-myreports-reportschedule-query`

**Request body** (`application/json`, required): `MyReports_ReportScheduleQuery`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_ReportSchedule_`

---

## POST /v3/myreports/reportschedule

Create a new report schedule.

Operation ID: `post-myreports-reportschedule`

**Request body** (`application/json`, required): `MyReports_ReportSchedule_post`

**Response 200** (`application/json`): `MyReports_ReportSchedule`

---

## GET /v3/myreports/reportschedule/{scheduleId}

Get a report schedule.

Operation ID: `get-myreports-reportschedule-scheduleid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| scheduleId | path | integer (int64) | yes | The ID of the report schedule to retrieve. |

**Response 200** (`application/json`): `MyReports_ReportSchedule`

---

## DELETE /v3/myreports/reportschedule/{scheduleId}

Delete the report schedule.

Operation ID: `delete-myreports-reportschedule-scheduleid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| scheduleId | path | integer (int64) | yes | The ID of the report schedule to delete. |

**Response 200**: OK

---

## POST /v3/myreports/conversionpixelnames

Get a list of conversion pixel names for use in scheduling reports. For details and examples, see [Create and Manage Report Schedules](/v3/portal/reds/doc/AggregatedReportsExecution).

Operation ID: `post-myreports-conversionpixelnames`

**Request body** (`application/json`, required): `MyReports_ConversionPixelNameQuery`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_ConversionPixel_`

---

## Schemas

### `MyReports_ConversionPixelNameQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| ReportTemplateId | integer (int64) | yes | The ID of the report template to use for this report schedule. To look up template ID, use the [POST/myreports/reporttemplateheader/query](/v3/portal/api/ref/post-myreports-reporttemplateheader-query) endpoint. |
| AdGroupIds | array<string> |  | The IDs of the ad groups for which to retrieve conversion pixels. _(nullable)_ |
| AdvertiserIds | array<string> |  | The IDs of the advertisers for which to retrieve conversion pixels. _(nullable)_ |
| CampaignIds | array<string> |  | The IDs of the campaigns for which to retrieve conversion pixels. _(nullable)_ |
| CrossDeviceAttributionModelId | string |  | The ID of the Cross Device vendor by which to filter the list of conversion pixels. _(nullable)_ |
| PartnerIds | array<string> |  | The IDs of the partners for which to retrieve conversion pixels. _(nullable)_ |

### `MyReports_ReportDeliveryFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| ReportDestinations | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ReportDestination_`> |  | The various Report Destinations to which reports may be delivered. This list may be extended at any time, so please design accordingly. |

### `MyReports_ReportExecutionFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| ReportExecutionStates | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ReportExecutionState_`> |  | The possible states of Report Executions. This list may be extended at any time, so please design accordingly. |
| SortingFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ReportExecutionSortingField_`> |  | The fields by which Report Executions may be sorted in a query. This list may be extended at any time, so please design accordingly. |

### `MyReports_ReportExecutionQueryForAdvertisers`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserIds | array<string> | yes | The platform IDs for the advertisers for which to retrieve Report Executions. Each execution that contains data for at least one of these Advertisers will match the query. |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `NULL` means the maximum number of elements allowed per page.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum value for this property is 25. The maximum limit is 100.   - If a large page size is passed in, fewer items may be returned. Check the total count to see if more items are available.   For example:   - If there are 70 items, `PageStartIndex` is 0, and `PageSize` is 100, only the 70 existing items will be returned.   - If there are 100 items, `PageStartIndex` is 50, and `PageSize` is 50, the last 50 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + ResultCount is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| ExecutionSpansEndDate | string (date-time) |  | Filter report executions to those that match specific date ranges. Specify `ExecutionSpansEndDate` in the request to return report executions where the `ReportStartDateInclusive` is on or before the `ExecutionSpansEndDate` value. If `ExecutionSpansEndDate` is null in the request, the results will not be limited by `ReportStartDateInclusive`.   If a non-null value for `ExecutionSpansStartDate` is also included in the request, the `ExecutionSpansEndDate` must be later than or equal to the `ExecutionSpansStartDate`.   Any timezone offset in this value will be ignored and the relative datetime will be compared to the start and end dates of the execution, which are in the report schedule's timezone.   For example, if you have the following report executions:       - Execution A in UTC with a `ReportStartDateInclusive` of 2015-12-04 and a `ReportEndDateExclusive` of 2015-12-09       - Execution B in PDT (UTC-7) with a `ReportStartDateInclusive` of 2015-12-05 and a `ReportEndDateExclusive` of 2015-12-07       - Execution C in SGT (UTC+8) with a `ReportStartDateInclusive` of 2015-12-07 and a `ReportEndDateExclusive` of 2015-12-09   The following `ExecutionSpansEndDate` values would match the following Report Executions:       - An `ExecutionSpansEndDate` of 2015-12-01 matches nothing       - An `ExecutionSpansEndDate` of 2015-12-05 matches A, B       - An `ExecutionSpansEndDate` of 2015-12-09 matches A, B, C       - An `ExecutionSpansEndDate` of 2015-12-10 matches A, B, C _(nullable)_ |
| ExecutionSpansStartDate | string (date-time) |  | Filter report executions to those that match specific date ranges. Specify `ExecutionSpansStartDate` in the request to return report executions where the `ReportEndDateExclusive` is after the `ExecutionSpansStartDate` value. If `ExecutionSpansStartDate` is null in the request, the results will not be limited by `ReportEndDateExclusive`.   If a non-null value for `ExecutionSpansEndDate` is also included in the request, the `ExecutionSpansStartDate` must be earlier than or equal to the `ExecutionSpansEndDate`.   Any timezone offset in this value will be ignored and the relative datetime will be compared to the start and end dates of the execution, which are in the report schedule's timezone.   For example, if you have the following report executions:       - Execution A in UTC with a `ReportStartDateInclusive` of 2015-12-04 and a `ReportEndDateExclusive` of 2015-12-09       - Execution B in PDT (UTC-7) with a `ReportStartDateInclusive` of 2015-12-05 and a `ReportEndDateExclusive` of 2015-12-07       - Execution C in SGT (UTC+8) with a `ReportStartDateInclusive` of 2015-12-07 and a `ReportEndDateExclusive` of 2015-12-09   The following `ExecutionSpansStartDate` values would match the following report executions:       - An `ExecutionSpansStartDate` of 2015-12-01 matches A, B, C       - An `ExecutionSpansStartDate` of 2015-12-05 matches A, B, C       - An `ExecutionSpansStartDate` of 2015-12-09 matches A, C       - An `ExecutionSpansStartDate` of 2015-12-10 matches nothing _(nullable)_ |
| ExecutionStates | array<`MyReports_ReportExecutionState`> |  | DEPRECATED: Please use ReportExecutionStates instead, that parameter functions identically but is named correctly matching the myreports/reportexecutions/query/facets parameter definition.   When specified, only Report Executions in these states will be returned. Duplicate IDs are ignored. See GET myreports/reportexecutions/query/facets for the list of possible Report Execution State IDs.   If not specified, empty, or null, this defaults to all states. _(nullable)_ |
| ReportExecutionStates | array<`MyReports_ReportExecutionState`> |  | When specified, only Report Executions in these states will be returned. Duplicate IDs are ignored. See GET myreports/reportexecutions/query/facets for the list of possible Report Execution State IDs.   If not specified, empty, or null, this defaults to all states. _(nullable)_ |
| ReportScheduleIds | array<integer (int64)> |  | The Schedule IDs of Report Executions to retrieve. _(nullable)_ |
| ReportScheduleNameContains | string |  | Return Report Executions whose schedule name contains this string, case insensitive. _(nullable)_ |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_ReportExecutionSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed. See GET myreports/reportexecutions/query/facets for the list of possible sort field IDs for Report Executions.   Sorting will happen in the order the sort fields are specified in the list.   If not specified, empty, or null, this defaults to sorting by Name ascending. _(nullable)_ |

### `MyReports_ReportSchedule`

| Field | Type | Required | Description |
|---|---|---|---|
| AcrBrandFilters | array<integer (int32)> |  | The list of AcrBrand Filters on which to filter the report. |
| AdGroupCustomLabelFilters | array<string> |  | Optional list of ad group custom labels on which to filter the report. |
| AdGroupFilters | array<string> |  | The list of ad groups on which to filter the report. Exactly one of PartnerFilters, AdvertiserFilters, CampaignFilters or AdGroupFilters must be set. |
| AdvertiserFilters | array<string> |  | The list of advertisers on which to filter the report. Exactly one of PartnerFilters, AdvertiserFilters, CampaignFilters or AdGroupFilters must be set. |
| AssociatedTailAggregationProfiles | array<`MyReports_SupportedTailAggregationProfile`> |  | Specify a Tail Aggregation Profile to apply to each supported column for the schedule.   Omitting a column will result in the default tail aggregation profile being applied to the column.   Get the supported profiles from the [POST /v3/myreports/supportedtailaggregationprofiles](/v3/portal/api/ref/post-myreports-supportedtailaggregationprofiles-query) query endpoint. _(nullable)_ |
| CampaignCustomLabelFilters | array<string> |  | Optional list of campaign custom labels on which to filter the report. |
| CampaignFilters | array<string> |  | The list of campaigns on which to filter the report. Exactly one of PartnerFilters, AdvertiserFilters, CampaignFilters or AdGroupFilters must be set. |
| ContractFilters | array<string> |  | Optional list of private contracts on which to filter the report. |
| ConversionPixelMessage | string |  | Important information about using conversion pixels when scheduling reports, if available and applicable to the requested report schedule. _(nullable)_ |
| ConversionPixelNames | array<`MyReports_ConversionPixel`> |  | Specify a list of Conversion Pixels to add report columns for. _(nullable)_ |
| CreationDateUtc | string (date-time) |  | The UTC creation date of the Report Schedule. This field is read-only. |
| CrossDeviceAttributionModelFilters | array<string> |  | The cross-device attribution model values by which to filter the report data. |
| DealFilters | array<`Contract_SupplyVendorDeal`> |  | Optional list of supply vendor deals on which to filter the report. |
| EmailAddresses | array<string> |  | The list of emails addresses that will receive the report. |
| GracenoteAcrBrandFilters | array<string> |  | The list of GracenoteAcrBrand Filters on which to filter the report. |
| GracenoteAgeBracketFilters | array<integer> |  | The value of Gracenote Age Filter on which to filter the report. |
| GracenoteGenderFilters | array<string> |  | The value of Gender Filter on which to filter the report. |
| IncludeHeaders | boolean |  | Whether or not to include column headers in the report. Only valid for Text reports. |
| IsCompleted | boolean |  | Whether or not the report schedule has completed. This field is read-only. |
| ISpotNetworkFilters | array<integer (int32)> |  | The iSpot Network value by which to filter the report data |
| LookbackDays | integer (int32) |  | The number of days to look back from the execution date. Only valid when ReportDateRange is LastXDays. _(nullable)_ |
| MerchantFilters | array<string> |  | The value of Merchant on which to filter the report. |
| PartnerFilters | array<string> |  | The list of partners on which to filter the report. Exactly one of PartnerFilters, AdvertiserFilters, CampaignFilters or AdGroupFilters must be set. |
| ReportDateFormat | `MyReports_ReportDateFormat` |  | The format used for dates. |
| ReportDateRange | `MyReports_ReportDateRange` |  | The date range for the report schedule. Here's what you need to know about this property:   - If set to `LastXDays`, you must include the `LookbackDays` value.   - If set to `Custom`, you must include both the `ReportStartDate` and `ReportEndDate` values. |
| ReportEndDateExclusive | string (date-time) |  | The end of the date range the generated report spans. This value is exclusive; a report from 2015-01-01T00:00 to 2015-01-08T00:00 will exclude data from 2015-01-08. Note that only the date   is relevant; the time will be set to midnight.   This value is in the Report Schedule's TimeZone. This must be specified when ReportDateRange is Custom and it is only valid when ReportDateRange is Custom. _(nullable)_ |
| ReportFileFormat | `MyReports_ReportFileFormat` |  | The file format for the report. |
| ReportFrequency | `MyReports_ReportFrequency` |  | The frequency of the report schedule. Once is always valid; Daily and Weekly are valid for all ReportDateRange except LastMonth and Custom;   Month is valid for MonthToDate, QuarterToDate, LastMonth, and YearToDate. |
| ReportNumericFormat | `MyReports_ReportNumericFormat` |  | The format used for numeric values. |
| ReportScheduleId | integer (int64) |  | The ID of the Report Schedule. Please include this in any communication about this Report Schedule. |
| ReportScheduleName | string |  | The name of the Report Schedule. _(maxLength 256)_ |
| ReportScheduleStatus | `MyReports_ReportScheduleStatus` |  | Status of the report schedule. This field is read-only. |
| ReportStartDateInclusive | string (date-time) |  | The start of the date range the generated report spans. This value is inclusive; a report from 2015-01-01T00:00 to 2015-01-08T00:00 will include data from 2015-01-01. Note that only the date   is relevant; the time will be set to midnight.   This value is in the Report Schedule's TimeZone. This must be specified when ReportDateRange is Custom and it is only valid when ReportDateRange is Custom. _(nullable)_ |
| ReportTemplateId | integer (int64) |  | The ID of the report template to use for this report schedule. To look up template ID, use the [POST/myreports/reporttemplateheader/query](/v3/portal/api/ref/post-myreports-reporttemplateheader-query) endpoint. |
| RequestedByUserName | string |  | The requestor of the Report Schedule. This field is read-only. _(nullable)_ |
| ScheduleStartDate | string (date-time) |  | The starting date of the reportFrequency in the timezone specified by TimeZone.   For weekly schedules, this indicates the day of week for the reportFrequency.   For monthly schedules, this indicates the day of month for the reportFrequency. If the day does not recur each month (like the 31st), the report will run on the   nearest date within the next month (the 30th, or, in February, the 29th or 28th). _(nullable)_ |
| SearchTrackingTagFilters | array<string> |  | The UTM source tracking tag values by which to filter the report data. |
| TimeZone | string |  | The Olson timezone of the Report Schedule.   Note that UTC is represented by "UTC" instead of the official Olson timezone string of "Etc/UTC". |
| TrackingTagFilters | array<string> |  | Optional list of conversion tracking tags on which to filter the report. |

### `MyReports_ReportScheduleFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| ReportDateFormats | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ReportDateFormat_`> |  | The possible date formats for a report generated by a Report Schedule. This list may be extended at any time, so please design accordingly. |
| ReportDateRanges | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ReportDateRange_`> |  | The possible date ranges for a report generated by a Report Schedule. This list may be extended at any time, so please design accordingly. |
| ReportDestinations | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ReportDestination_`> |  | The possible destinations for a report generated by a Report Schedule. This list may be extended at any time, so please design accordingly. |
| ReportFileFormats | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ReportFileFormat_`> |  | The possible file formats for a report generated by a Report Schedule. This list may be extended at any time, so please design accordingly. |
| ReportFrequencies | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ReportFrequency_`> |  | The possible execution frequencies of a Report Schedule. This list may be extended at any time, so please design accordingly. |
| ReportNumericFormats | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ReportNumericFormat_`> |  | The possible numeric formats for a report generated by a Report Schedule. This list may be extended at any time, so please design accordingly. |
| ReportScheduleStatuses | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ReportScheduleStatus_`> |  | The possible types of Report Schedule Status. This list may be extended at any time, so please design accordingly. |
| SortingFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ReportScheduleSortingField_`> |  | The fields by which Report Schedules may be sorted in a query. This list may be extended at any time, so please design accordingly. |

### `MyReports_ReportScheduleQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `NULL` means the maximum number of elements allowed per page.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum value for this property is 25. The maximum limit is 100.   - If a large page size is passed in, fewer items may be returned. Check the total count to see if more items are available.   For example:   - If there are 70 items, `PageStartIndex` is 0, and `PageSize` is 100, only the 70 existing items will be returned.   - If there are 100 items, `PageStartIndex` is 50, and `PageSize` is 50, the last 50 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + ResultCount is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| IsCompleted | boolean |  | When specified, only Report Schedules that have the matching completed state will be returned.   If not specified, empty, or null, this filter is ignored. |
| NameContains | string |  | Return Report Schedules whose name contains this string, case insensitive. _(nullable)_ |
| ReportScheduleIds | array<integer (int64)> |  | When specified, only Report Schedules with the IDs specified in the list will be returned.   If not specified, empty, or null, this filter is ignored. _(nullable)_ |
| ReportScheduleStatus | `MyReports_ReportScheduleStatus` |  | When specified, only Report Schedules with the selected status will be returned.   If not specified, empty, or null, this filter is ignored. |
| ReportTemplateIds | array<integer (int64)> |  | When specified, only Report Schedules based on the Report Template IDs specified in the list will be returned.   If not specified, empty, or null, this filter is ignored. _(nullable)_ |
| RequestedByUserNameContains | string |  | Return Report Schedules where the 'Requested By' user's name contains this string, case insensitive. _(nullable)_ |
| ShowOnlyRequestedByMe | boolean |  | Return Report Schedules that where requested by the authenticated user. |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_ReportScheduleSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed. See GET myreports/reportschedule/facets for the list of possible sort field IDs for Report Schedules.   Sorting will happen in the order the sort fields are specified in the list.   If not specified, empty, or null, this defaults to sorting by Name ascending. _(nullable)_ |

### `MyReports_ReportSchedule_post`

| Field | Type | Required | Description |
|---|---|---|---|
| ReportDateFormat | `MyReports_ReportDateFormat` | yes | The format used for dates. |
| ReportDateRange | `MyReports_ReportDateRange` | yes | The date range for the report schedule. Here's what you need to know about this property:   - If set to `LastXDays`, you must include the `LookbackDays` value.   - If set to `Custom`, you must include both the `ReportStartDate` and `ReportEndDate` values. |
| ReportFileFormat | `MyReports_ReportFileFormat` | yes | The file format for the report. |
| ReportFrequency | `MyReports_ReportFrequency` | yes | The frequency of the report schedule. Once is always valid; Daily and Weekly are valid for all ReportDateRange except LastMonth and Custom;   Month is valid for MonthToDate, QuarterToDate, LastMonth, and YearToDate. |
| ReportNumericFormat | `MyReports_ReportNumericFormat` | yes | The format used for numeric values. |
| ReportScheduleName | string | yes | The name of the Report Schedule. _(maxLength 256)_ |
| ReportTemplateId | integer (int64) | yes | The ID of the report template to use for this report schedule. To look up template ID, use the [POST/myreports/reporttemplateheader/query](/v3/portal/api/ref/post-myreports-reporttemplateheader-query) endpoint. |
| TimeZone | string | yes | The Olson timezone of the Report Schedule.   Note that UTC is represented by "UTC" instead of the official Olson timezone string of "Etc/UTC". |
| AcrBrandFilters | array<integer (int32)> |  | The list of AcrBrand Filters on which to filter the report. |
| AdGroupCustomLabelFilters | array<string> |  | Optional list of ad group custom labels on which to filter the report. |
| AdGroupFilters | array<string> |  | The list of ad groups on which to filter the report. Exactly one of PartnerFilters, AdvertiserFilters, CampaignFilters or AdGroupFilters must be set. |
| AdvertiserFilters | array<string> |  | The list of advertisers on which to filter the report. Exactly one of PartnerFilters, AdvertiserFilters, CampaignFilters or AdGroupFilters must be set. |
| AssociatedTailAggregationProfiles | array<`MyReports_SupportedTailAggregationProfile`> |  | Specify a Tail Aggregation Profile to apply to each supported column for the schedule.   Omitting a column will result in the default tail aggregation profile being applied to the column.   Get the supported profiles from the [POST /v3/myreports/supportedtailaggregationprofiles](/v3/portal/api/ref/post-myreports-supportedtailaggregationprofiles-query) query endpoint. _(nullable)_ |
| CampaignCustomLabelFilters | array<string> |  | Optional list of campaign custom labels on which to filter the report. |
| CampaignFilters | array<string> |  | The list of campaigns on which to filter the report. Exactly one of PartnerFilters, AdvertiserFilters, CampaignFilters or AdGroupFilters must be set. |
| ContractFilters | array<string> |  | Optional list of private contracts on which to filter the report. |
| ConversionPixelMessage | string |  | Important information about using conversion pixels when scheduling reports, if available and applicable to the requested report schedule. _(nullable)_ |
| ConversionPixelNames | array<`MyReports_ConversionPixel_post`> |  | Specify a list of Conversion Pixels to add report columns for. _(nullable)_ |
| CreationDateUtc | string (date-time) |  | The UTC creation date of the Report Schedule. This field is read-only. |
| CrossDeviceAttributionModelFilters | array<string> |  | The cross-device attribution model values by which to filter the report data. |
| DealFilters | array<`Contract_SupplyVendorDeal_post`> |  | Optional list of supply vendor deals on which to filter the report. |
| EmailAddresses | array<string> |  | The list of emails addresses that will receive the report. |
| GracenoteAcrBrandFilters | array<string> |  | The list of GracenoteAcrBrand Filters on which to filter the report. |
| GracenoteAgeBracketFilters | array<integer> |  | The value of Gracenote Age Filter on which to filter the report. |
| GracenoteGenderFilters | array<string> |  | The value of Gender Filter on which to filter the report. |
| IncludeHeaders | boolean |  | Whether or not to include column headers in the report. Only valid for Text reports. |
| IsCompleted | boolean |  | Whether or not the report schedule has completed. This field is read-only. |
| ISpotNetworkFilters | array<integer (int32)> |  | The iSpot Network value by which to filter the report data |
| LookbackDays | integer (int32) |  | The number of days to look back from the execution date. Only valid when ReportDateRange is LastXDays. _(nullable)_ |
| MerchantFilters | array<string> |  | The value of Merchant on which to filter the report. |
| PartnerFilters | array<string> |  | The list of partners on which to filter the report. Exactly one of PartnerFilters, AdvertiserFilters, CampaignFilters or AdGroupFilters must be set. |
| ReportEndDateExclusive | string (date-time) |  | The end of the date range the generated report spans. This value is exclusive; a report from 2015-01-01T00:00 to 2015-01-08T00:00 will exclude data from 2015-01-08. Note that only the date   is relevant; the time will be set to midnight.   This value is in the Report Schedule's TimeZone. This must be specified when ReportDateRange is Custom and it is only valid when ReportDateRange is Custom. _(nullable)_ |
| ReportScheduleId | integer (int64) |  | The ID of the Report Schedule. Please include this in any communication about this Report Schedule. |
| ReportScheduleStatus | `MyReports_ReportScheduleStatus` |  | Status of the report schedule. This field is read-only. |
| ReportStartDateInclusive | string (date-time) |  | The start of the date range the generated report spans. This value is inclusive; a report from 2015-01-01T00:00 to 2015-01-08T00:00 will include data from 2015-01-01. Note that only the date   is relevant; the time will be set to midnight.   This value is in the Report Schedule's TimeZone. This must be specified when ReportDateRange is Custom and it is only valid when ReportDateRange is Custom. _(nullable)_ |
| RequestedByUserName | string |  | The requestor of the Report Schedule. This field is read-only. _(nullable)_ |
| ScheduleStartDate | string (date-time) |  | The starting date of the reportFrequency in the timezone specified by TimeZone.   For weekly schedules, this indicates the day of week for the reportFrequency.   For monthly schedules, this indicates the day of month for the reportFrequency. If the day does not recur each month (like the 31st), the report will run on the   nearest date within the next month (the 30th, or, in February, the 29th or 28th). _(nullable)_ |
| SearchTrackingTagFilters | array<string> |  | The UTM source tracking tag values by which to filter the report data. |
| TrackingTagFilters | array<string> |  | Optional list of conversion tracking tags on which to filter the report. |

### `MyReports_ReportTemplateFacets`

| Field | Type | Required | Description |
|---|---|---|---|
| Formats | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ReportTemplateFormat_`> |  | The possible formats of a Report Template. This list may be extended at any time, so please design accordingly. |
| SortingFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ReportTemplateSortingField_`> |  | The fields by which Report Templates may be sorted in a query. This list may be extended at any time, so please design accordingly. |
| Types | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ReportTemplateType_`> |  | The possible types of Report Template. This list may be extended at any time, so please design accordingly. |

### `MyReports_ReportTemplateHeaderQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `NULL` means the maximum number of elements allowed per page.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum value for this property is 25. The maximum limit is 100.   - If a large page size is passed in, fewer items may be returned. Check the total count to see if more items are available.   For example:   - If there are 70 items, `PageStartIndex` is 0, and `PageSize` is 100, only the 70 existing items will be returned.   - If there are 100 items, `PageStartIndex` is 50, and `PageSize` is 50, the last 50 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + ResultCount is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| CreatedByContains | string |  | Return Report Templates where the CreatedBy user's name contains this string, case insensitive. _(nullable)_ |
| Format | `MyReports_ReportTemplateFormat` |  | When specified, only Report Templates with this format will be returned. See GET myreports/reporttemplate/facets for the list of possible Report Template Format IDs.   If not specified, empty, or null, this defaults to all formats. |
| NameContains | string |  | Return Report Templates whose name contains this string, case insensitive. _(nullable)_ |
| ReportTemplateIds | array<string> |  | The IDs of Report Templates to retrieve. _(nullable)_ |
| ShowOnlyCreatedByMe | boolean |  | Return Report Templates that where created by the authenticated user. |
| SortFields | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_ReportTemplateSortingField_`> |  | The fields by which to sort the returned data. Duplicate IDs are not allowed. See GET myreports/reporttemplate/facets for the list of possible sort field IDs for Report Templates.   Sorting will happen in the order the sort fields are specified in the list.   If not specified, empty, or null, this defaults to sorting by Name ascending. _(nullable)_ |
| Type | `MyReports_ReportTemplateType` |  | When specified, only Report Templates of this type will be returned. See GET myreports/reporttemplate/facets for the list of possible Report Template Type IDs.   If not specified, empty, or null, this defaults to all types. |

### `MyReports_SupportedTailAggregationProfilesQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| ReportTemplateId | integer (int64) |  | The id of the Report Template for which to retrieve the supported tail aggregation profiles. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_ConversionPixel_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`MyReports_ConversionPixel`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_ReportExecution_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`MyReports_ReportExecution`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_ReportSchedule_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`MyReports_ReportSchedule`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_ReportTemplateHeader_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`MyReports_ReportTemplateHeader`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_SupportedTailAggregationProfile_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`MyReports_SupportedTailAggregationProfile`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ReportDestination_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `MyReports_ReportDestination` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ReportExecutionSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `MyReports_ReportExecutionSortingField` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ReportExecutionState_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `MyReports_ReportExecutionState` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `MyReports_ReportExecutionState`

Type: string enum(Pending, InProgress, Complete, Failed, Canceled)

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_ReportExecutionSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `MyReports_ReportExecutionSortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `Contract_SupplyVendorDeal`

| Field | Type | Required | Description |
|---|---|---|---|
| FloorPriceCPM | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | An optional floor price for the deal.   The value is in CPM in the currency of the Contract to which this deal is associated. _(nullable)_ |
| SupplyVendorDealId | string |  | The ID of the deal.   This ID should match the ID in the SupplyVendor or Publisher system. |
| SupplyVendorId | integer (int64) |  | The ID of the SupplyVendor on which this deal will run.   Not all SupplyVendors support running Deals through The Trade Desk. Query supplyvendor/query/partner to discover the Supply Vendors that support Deals |

### `MyReports_ConversionPixel`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The ID of the advertiser to which the pixel belongs. |
| ConversionPixelName | string |  | The display name of the conversion pixel in the UI. _(nullable)_ |
| ConversionType | string |  | The tracking tag ID of the conversion pixel.POST /myreports/reportschedule |
| CrossDeviceAttributionModelId | string |  | Information for each conversion pixel to be added as a report column.   To retrieve a list of conversion pixel names for creating a report schedule, use the [POST /myreports/conversionpixelnames](/v3/portal/api/ref/post-myreports-conversionpixelnames) endpoint. _(nullable)_ |

### `MyReports_ReportDateFormat`

Type: string enum(US, International, Sortable)

### `MyReports_ReportDateRange`

Type: string enum(LastXDays, Custom, Yesterday, Last7Days, Last14Days, Last30Days, MonthToDate, QuarterToDate, YearToDate, LastMonth, LastQuarter, Last3Months, CampaignToDate)

### `MyReports_ReportFileFormat`

Type: string enum(TSV, CSV, ExcelPivot)

### `MyReports_ReportFrequency`

Type: string enum(Once, Daily, Weekly, Monthly, Quarterly)

### `MyReports_ReportNumericFormat`

Type: string enum(US, International)

### `MyReports_ReportScheduleStatus`

Type: string enum(Active, Disabled)

### `MyReports_SupportedTailAggregationProfile`

| Field | Type | Required | Description |
|---|---|---|---|
| ColumnId | integer (int32) |  | The id of the column to which the tail aggregation profile is applied. |
| ColumnName | string |  | The name of the column to which the tail aggregation profile is applied. _(nullable)_ |
| TailAggregationProfileDescription | string |  | The description of the tail aggregation profile that is applied to the column. _(nullable)_ |
| TailAggregationProfileId | integer (int64) |  | The id of the tail aggregation profile that is applied to the column. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ReportDateFormat_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `MyReports_ReportDateFormat` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ReportDateRange_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `MyReports_ReportDateRange` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ReportFileFormat_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `MyReports_ReportFileFormat` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ReportFrequency_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `MyReports_ReportFrequency` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ReportNumericFormat_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `MyReports_ReportNumericFormat` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ReportScheduleSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `MyReports_ReportScheduleSortingField` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ReportScheduleStatus_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `MyReports_ReportScheduleStatus` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_ReportScheduleSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `MyReports_ReportScheduleSortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `Contract_SupplyVendorDeal_post`

| Field | Type | Required | Description |
|---|---|---|---|
| SupplyVendorDealId | string | yes | The ID of the deal.   This ID should match the ID in the SupplyVendor or Publisher system. |
| SupplyVendorId | integer (int64) | yes | The ID of the SupplyVendor on which this deal will run.   Not all SupplyVendors support running Deals through The Trade Desk. Query supplyvendor/query/partner to discover the Supply Vendors that support Deals |
| FloorPriceCPM | `TTD.Domain.Shared.Http.Metadata.Models_Money` |  | An optional floor price for the deal.   The value is in CPM in the currency of the Contract to which this deal is associated. _(nullable)_ |

### `MyReports_ConversionPixel_post`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes | The ID of the advertiser to which the pixel belongs. |
| ConversionType | string | yes | The tracking tag ID of the conversion pixel.POST /myreports/reportschedule |
| ConversionPixelName | string |  | The display name of the conversion pixel in the UI. _(nullable)_ |
| CrossDeviceAttributionModelId | string |  | Information for each conversion pixel to be added as a report column.   To retrieve a list of conversion pixel names for creating a report schedule, use the [POST /myreports/conversionpixelnames](/v3/portal/api/ref/post-myreports-conversionpixelnames) endpoint. _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ReportTemplateFormat_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `MyReports_ReportTemplateFormat` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ReportTemplateSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `MyReports_ReportTemplateSortingField` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_EnumValue_ReportTemplateType_`

| Field | Type | Required | Description |
|---|---|---|---|
| DisplayName | string |  | A user-friendly name for the enum value. This may contain spaces or special characters and can be a default value to display to users. This value could potentially change at any time, but would only change in exceptional cases (e.g. a discovered typo or to resolve accidental ambiguity). _(nullable)_ |
| Value | `MyReports_ReportTemplateType` |  | The enum value. This will remain consistent for as long as the enum value exists and will be unique within the enum type definition. |

### `MyReports_ReportTemplateFormat`

Type: string enum(Text, Excel)

### `MyReports_ReportTemplateType`

Type: string enum(Standard, Custom)

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Sorting_ReportTemplateSortingField_`

| Field | Type | Required | Description |
|---|---|---|---|
| FieldId | `MyReports_ReportTemplateSortingField` | yes | The ID of the field by which to sort. |
| Ascending | boolean |  | Whether to sort this field in ascending order (true) or descending order (false). If not specified, this defaults to true. |

### `MyReports_ReportExecution`

| Field | Type | Required | Description |
|---|---|---|---|
| DisabledReason | string |  | If this is not null, either the governing Report Schedule or Report Template has been disabled and this Report Execution will not run. See the contents of this reason for further details. |
| LastStateChangeUTC | string (date-time) |  | The last time (UTC) the state of the execution changed. |
| ReportDeliveries | array<`MyReports_ReportDelivery`> |  | The set of Report Deliveries for the execution, telling you the places where the final report was delivered and when. |
| ReportEndDateExclusive | string (date-time) |  | The end of the date range this execution spans. This value is exlusive; a report from 2015-01-01 to 2015-01-08 will NOT include data from 2015-01-08.   This value is in the execution's Timezone. |
| ReportExecutionId | integer (int64) |  | The ID of the Report Execution. Please include this in any communication about this Report Execution. |
| ReportExecutionState | `MyReports_ReportExecutionState` |  | The state of the Report Execution. See GET myreports/reportexecutions/query/facets for the list of possible Report Execution State IDs. |
| ReportScheduleId | integer (int64) |  | The ID of the Report Schedule governing this execution. |
| ReportScheduleName | string |  | The name of the Report Schedule governing this execution. |
| ReportStartDateInclusive | string (date-time) |  | The start of the date range this execution spans. This value is inclusive; a report from 2015-01-01 to 2015-01-08 will include data from 2015-01-01.   This value is in the execution's Timezone. |
| Timezone | string |  | The Olson timezone of the Report Execution. This is inherited from the Report Schedule.   Note that UTC is represented by "UTC" instead of the official Olson timezone string of "Etc/UTC". |

### `MyReports_ReportTemplateHeader`

| Field | Type | Required | Description |
|---|---|---|---|
| CreatedByUserName | string |  | The name of user that created the Report Template. |
| Format | `MyReports_ReportTemplateFormat` |  | The format of the Report Template. See GET myreports/reporttemplates/query/facets for the list of possible Report Template Format IDs. |
| Name | string |  | The name of the Report Template. |
| ReportTemplateId | integer (int64) |  | The ID of the Report Template. Please include this in any communication about this Report Template. |
| Type | `MyReports_ReportTemplateType` |  | The type of Report Template. See GET myreports/reporttemplates/query/facets for the list of possible Report Template Type IDs. |

### `MyReports_ReportDestination`

Type: string enum(S3, EmailedS3Link, FTP, SFTP, Azure, EmailedAzureLink)

### `MyReports_ReportExecutionSortingField`

Type: string enum(Name, Timezone, ReportStartDateInclusive, ReportEndDateExclusive, LastStatusChangeUTC)

### `TTD.Domain.Shared.Http.Metadata.Models_Money`

Describes an amount of money in a specific currency.

| Field | Type | Required | Description |
|---|---|---|---|
| Amount | number (double) | yes | The money amount, specified as a decimal, for example, 1.5 for $1.50. |
| CurrencyCode | `TheTradeDesk_CurrencyCode` | yes | The currency of the money value specified in the `Amount`, for example, "USD" for $1.50 US dollars.   Unless you've arranged different terms during onboarding, your partner account and all its associated advertisers use the same currency, namely, USD.   If you you need to use another currency, please contact your Account Manager.   If multi-currency support is enabled for your account, see the Currency API for the full set of supported currencies and their codes. |

### `MyReports_ReportScheduleSortingField`

Type: string enum(Name, CreationDate)

### `MyReports_ReportTemplateSortingField`

Type: string enum(Name, CreatedBy)

### `MyReports_ReportDelivery`

| Field | Type | Required | Description |
|---|---|---|---|
| DeliveredPath | string |  | The path where the report was delivered to the destination. For example, when the ReportDestination is S3 or EmailedS3Link, this will be the full S3 path where the report was written.   This will be null if the report has not yet been delivered or a path is not relevant to the delivery.   This url will expire. Please do not cache. |
| DeliveredUTC | string (date-time) |  | The UTC date and time the report was delivered.   This will be null if the report has not yet been delivered. _(nullable)_ |
| DownloadURL | string |  | A URL at which the report can be retrieved from this delivery's location. For example, when the ReportDestination is S3 or EmailedS3Link, this will be a pre-signed HTTPS URL.   This will be null if the report has not yet been delivered or this destination does not support direct downloading. |
| DownloadURLExpirationUTC | string (date-time) |  | The UTC date and time the download URL expires.   This will be null if the report has not yet been delivered, if a download URL does not apply to this delivery, or if the download URL does not expire. _(nullable)_ |
| ReportDestination | `MyReports_ReportDestination` |  | The type of destination where the report was delivered.  See GET myreports/reportdelivery/facets for more details. |

### `TheTradeDesk_CurrencyCode`

Type: string enum(None, AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF, BMD, BND, BOB, BRL, BSD, BTN, BWP, BYR, BZD, CAD, CDF, CHF, CLF, CLP, CNH, CNY, COP, CRC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ERN, ETB, EUR, FJD, FKP, GBP, GEL, GHS, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HRK, HTG, HUF, IDR, ILS, INR, IQD, IRR, ISK, JMD, JOD, JPY, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LTL, LVL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MRO, MUR, MVR, MWK, MXN, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SRD, STD, SVC, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD, TWD, TZS, UAH, UGX, USD, UYU, UZS, VEF, VND, VUV, WST, XAF, XCD, XDR, XOF, XPF, YER, ZAR, ZMW, ZWL)

