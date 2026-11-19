# Report Results

> Source: Google Ad Manager API (beta, REST v1) Discovery document (https://admanager.googleapis.com/$discovery/rest?version=v1, revision 20261118); release notes https://developers.google.com/ad-manager/api/beta/docs/release-notes. Fetched 2026-11-19. Resource names have the form `networks/{networkCode}/...`.

Used by koddi-offsite via: SOAP `ReportService.getReportDownloadUrlWithOptions`.

---

## networks.reports.results.fetchRows

`GET https://admanager.googleapis.com/v1/{+name}:fetchRows`

Returns the result rows from a completed report. The caller must have previously called `RunReport` and waited for that operation to complete. The rows will be returned according to the order specified by the `sorts` member of the report definition.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | The report result being fetched. Format: `networks/{network_code}/reports/{report_id}/results/{report_result_id}` |
| pageToken | query | string |  | Optional. A page token, received from a previous `FetchReportResultRows` call. Provide this to retrieve the second and subsequent batches of rows. |
| pageSize | query | integer (int32) |  | Optional. The maximum number of rows to return. The service may return fewer than this value. If unspecified, at most 1,000 rows will be returned. The maximum value is 10,000; values greater than 10,000 will be reduced to 10,000. |

**Response**: `FetchReportResultRowsResponse`

---

## Schemas

### `FetchReportResultRowsResponse`

The response message for the fetch report result rows endpoint.

| Field | Type | Description |
|---|---|---|
| totalRowCount | integer (int32) | The total number of rows available from this report. Useful for pagination. Only returned with the first page of results (when page_token is not included in the request). |
| dateRanges | array<`ReportDefinitionDateRange_FixedDateRange`> | The computed fixed date ranges this report includes. Only returned with the first page of results (when page_token is not included in the request). |
| rows | array<`ReportDataTable_Row`> | Up to `page_size` rows of report data. |
| comparisonDateRanges | array<`ReportDefinitionDateRange_FixedDateRange`> | The computed comparison fixed date ranges this report includes. Only returned with the first page of results (when page_token is not included in the request). |
| nextPageToken | string | A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. |
| runTime | string (google-datetime) | The time at which the report was scheduled to run. For non-scheduled reports, this is the time at which the report was requested to be run. |

### `ReportDataTable_Row`

A row of report data.

| Field | Type | Description |
|---|---|---|
| metricValueGroups | array<`ReportDataTable_MetricValueGroup`> | The length of the metric_value_groups field will be equal to the length of the date_ranges field in the fetch response. The metric_value_groups field is ordered such that each index corresponds to the date_range at the same index. For example, given date_ranges [x, y], metric_value_groups will have a length of two. The first entry in metric_value_groups represents the metrics for date x and the second entry in metric_value_groups represents the metrics for date y. |
| dimensionValues | array<`ReportValue`> | The order of the dimension values is the same as the order of the dimensions specified in the request. |

### `ReportDefinitionDateRange_FixedDateRange`

A date range between two fixed dates (inclusive of end date).

| Field | Type | Description |
|---|---|---|
| startDate | `GoogleType__Date` | Required. The start date of this date range. |
| endDate | `GoogleType__Date` | Required. The end date (inclusive) of this date range. |

### `ReportDataTable_MetricValueGroup`

Contains all metric values requested for a single date range and set of column dimension values (returned in the columns field of the response). The order of the metrics in each field corresponds to the order of the metrics specified in the request.

| Field | Type | Description |
|---|---|---|
| comparisonValues | array<`ReportValue`> | Data for the COMPARISON MetricValueType. |
| primaryValues | array<`ReportValue`> | Data for the PRIMARY MetricValueType. |
| flagValues | array<boolean> | If true, the flag's conditions are met. If false, the flag's conditions are not met. flag_values has the same length as flags and index i of flag_values represents the flag at index i of flags. |
| comparisonPercentOfTotalValues | array<`ReportValue`> | Data for the COMPARISON_PERCENT_OF_TOTAL MetricValueType. |
| primaryPercentOfTotalValues | array<`ReportValue`> | Data for the PRIMARY_PERCENT_OF_TOTAL MetricValueType. |
| relativeChangeValues | array<`ReportValue`> | Data for the RELATIVE_CHANGE MetricValueType. |
| absoluteChangeValues | array<`ReportValue`> | Data for the ABSOLUTE_CHANGE MetricValueType. |

### `ReportValue`

Represents a single value in a report.

| Field | Type | Description |
|---|---|---|
| stringValue | string | For string values. |
| intValue | string (int64) | For integer values. |
| intListValue | `ReportValue_IntList` | For lists of integer values. |
| doubleValue | number (double) | For double values. |
| stringListValue | `ReportValue_StringList` | For lists of string values. |
| bytesValue | string (byte) | For bytes values. |
| boolValue | boolean | For boolean values. |
| doubleListValue | `ReportValue_DoubleList` | For lists of double values. |

### `GoogleType__Date`

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp

| Field | Type | Description |
|---|---|---|
| day | integer (int32) | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| month | integer (int32) | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| year | integer (int32) | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

### `ReportValue_DoubleList`

A list of double values.

| Field | Type | Description |
|---|---|---|
| values | array<number (double)> | The values |

### `ReportValue_IntList`

A list of integer values.

| Field | Type | Description |
|---|---|---|
| values | array<string (int64)> | The values |

### `ReportValue_StringList`

A list of string values.

| Field | Type | Description |
|---|---|---|
| values | array<string> | The values |

