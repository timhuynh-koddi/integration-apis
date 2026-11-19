# Crm Data

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 10

---

## POST /v3/crmdata/segment

Create a new CRM data segment. For details on using the CRM Data API, see [Integrate CRM Data](/v3/portal/data/doc/DataIntegrateCRMData).

Operation ID: `post-crmdata-segment`

**Request body** (`application/json`, required): `CrmData_PostCrmDataRequest_post`

**Response 200** (`application/json`): `CrmData_PostCrmDataResponse`

---

## POST /v3/crmdata/{segmentType}/segment

Create a new CRM data segment. For details on using the CRM Data API, see [Integrate CRM Data](/v3/portal/data/doc/DataIntegrateCRMData).

Operation ID: `post-crmdata-segmenttype-segment`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| segmentType | path | string | yes | The use case of the segment, for `targeting` or `conversion`. |

**Request body** (`application/json`, required): `CrmData_PostCrmDataRequest_post`

**Response 200** (`application/json`): `CrmData_PostCrmDataResponse`

---

## GET /v3/crmdata/segment/{advertiserId}/{crmDataId}

Retrieve the status of a CRM data segment. For details on using the CRM Data API, see [Integrate CRM Data](/v3/portal/data/doc/DataIntegrateCRMData).

Operation ID: `get-crmdata-segment-advertiserid-crmdataid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string | yes | The platform ID of the advertiser for which to retrieve the status of the specified CRM data segment. |
| crmDataId | path | string | yes | The metadata ID of the CRM data segment for which to retrieve the status. |

**Response 200** (`application/json`): `CrmData_GetCrmDataSegmentStatusResponse`

---

## DELETE /v3/crmdata/segment/{advertiserId}/{crmDataId}

Delete a CRM data segment and purge its data. For details on using the CRM Data API, see [Integrate CRM Data](/v3/portal/data/doc/DataIntegrateCRMData).

Operation ID: `delete-crmdata-segment-advertiserid-crmdataid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string | yes | The platform ID of the advertiser for which to delete the specified CRM data segment. |
| crmDataId | path | string | yes | The metadata ID of the CRM data segment to be deleted. |

**Response 200** (`application/json`): `CrmData_DeleteCrmDataSegmentResponse`

---

## POST /v3/crmdata/segment/{advertiserId}/{crmDataId}

Create a new drop for a CRM data segment. For details on using the CRM Data API, see [Integrate CRM Data](/v3/portal/data/doc/DataIntegrateCRMData).

Operation ID: `post-crmdata-segment-advertiserid-crmdataid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string | yes | The advertiser that owns the CRM data segment. |
| crmDataId | path | string | yes | The metadata ID of the segment for which to create a file drop URL. |

**Request body** (`application/json`, required): `CrmData_PostCrmDataDropRequest`

**Response 200** (`application/json`): `CrmData_PostCrmDataDropResponse`

---

## GET /v3/crmdata/{segmentType}/segment/{advertiserId}/{crmDataId}

Retrieve the status of a CRM data segment. For details on using the CRM Data API, see [Integrate CRM Data](/v3/portal/data/doc/DataIntegrateCRMData).

Operation ID: `get-crmdata-segmenttype-segment-advertiserid-crmdataid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| segmentType | path | string | yes | The use case of the segment, for `targeting` or `conversion`. |
| advertiserId | path | string | yes | The platform ID of the advertiser for which to retrieve the status of the specified CRM data segment. |
| crmDataId | path | string | yes | The metadata ID of the mCRM data segment for which to retrieve the status. |

**Response 200** (`application/json`): `CrmData_GetCrmDataSegmentStatusResponse`

---

## POST /v3/crmdata/{segmentType}/segment/{advertiserId}/{crmDataId}

Create a new drop for a CRM data segment. For details on using the CRM Data API, see [Integrate CRM Data](/v3/portal/data/doc/DataIntegrateCRMData).

Operation ID: `post-crmdata-segmenttype-segment-advertiserid-crmdataid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| segmentType | path | string | yes | The use case of the segment, for `targeting` or `conversion`. |
| advertiserId | path | string | yes | The advertiser that owns the CRM data segment. |
| crmDataId | path | string | yes | The metadata ID of the segment for which to create a file drop URL. |

**Request body** (`application/json`, required): `CrmData_PostCrmDataDropRequest`

**Response 200** (`application/json`): `CrmData_PostCrmDataDropResponse`

---

## GET /v3/crmdata/segment/{advertiserId}

Retrieve all CRM data segments for the specified advertiser. For details on using the CRM Data API, see [Integrate CRM Data](/v3/portal/data/doc/DataIntegrateCRMData).

Operation ID: `get-crmdata-segment-advertiserid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string | yes | The platform ID of the advertiser for which to retrieve data segments. |
| pagingToken | query | string |  | A string returned in a previous call to the same endpoint. You must pass it in subsequent calls to get the next set of results. IMPORTANT: The paging token is not required for the very first call. |

**Response 200** (`application/json`): `CrmData_GetCrmDataSegmentsResponse`

---

## GET /v3/crmdata/segment/{advertiserId}/{crmDataId}/{referenceId}

Check the processing status of a CRM data drop (upload for a segment). For details on using the CRM Data API, see [Integrate CRM Data](/v3/portal/data/doc/DataIntegrateCRMData).

Operation ID: `get-crmdata-segment-advertiserid-crmdataid-referenceid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string | yes | The platform ID of the advertiser for which to retrieve the data drop processing status of the specified CRM data segment. |
| crmDataId | path | string | yes | The metadata ID of the CRM data segment for which to retrieve the data drop processing status. |
| referenceId | path | string | yes | The ID of the CRM data uploaded to a segment through a unique, auto-expiring drop endpoint. |

**Response 200** (`application/json`): `CrmData_GetCrmDataDropStatusResponse`

---

## GET /v3/crmdata/{segmentType}/segment/{advertiserId}/{crmDataId}/{referenceId}

Check the processing status of a CRM data drop (upload for a segment). For details on using the CRM Data API, see [Integrate CRM Data](/v3/portal/data/doc/DataIntegrateCRMData).

Operation ID: `get-crmdata-segmenttype-segment-advertiserid-crmdataid-referenceid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| segmentType | path | string | yes | The use case of the segment, for `targeting` or `conversion`. |
| advertiserId | path | string | yes | The platform ID of the advertiser for which to retrieve the data drop processing status of the specified CRM data segment. |
| crmDataId | path | string | yes | The metadata ID of the CRM data segment for which to retrieve the data drop processing status. |
| referenceId | path | string | yes | The ID of the CRM data uploaded to a segment through a unique, auto-expiring drop endpoint. |

**Response 200** (`application/json`): `CrmData_GetCrmDataDropStatusResponse`

---

## Schemas

### `CrmData_DeleteCrmDataSegmentResponse`

Type: object

### `CrmData_GetCrmDataDropStatusResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| DropInfo | `CrmData_CrmDataDropInfo` |  | Information regarding the processing state of a file drop. _(nullable)_ |

### `CrmData_GetCrmDataSegmentStatusResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| ActiveIds | integer (int64) |  | The number of unique IDs seen in bidding in the last 7 days. _(nullable)_ |
| AdvertiserId | string |  | The platform ID of the advertiser that owns the CRM data segment. _(nullable)_ |
| CrmDataId | string |  | An immutable ID that identifies the CRM data segment for metadata purposes. _(nullable)_ |
| FirstPartyDataId | integer (int64) |  | An immutable ID that identifies the CRM data segment for retargeting purposes. _(nullable)_ |
| LastUpdatedAt | string (date-time) |  | The timestamp when the CRM data segment was last updated. _(nullable)_ |
| LatestActivatedDrop | `CrmData_CrmDataDropInfo` |  | The processing status of the latest activated data drop. _(nullable)_ |
| ReceivedIds | integer (int64) |  | The number of unique IDs ingested during the last 30 days. _(nullable)_ |
| Region | `CrmData_CrmDataRegion` |  | The geographical region of the CRM data segment based on the origin of PII. |
| SegmentName | string |  | The name of the CRM data segment. _(nullable)_ |
| SegmentType | `CrmData_CrmDataSegmentType` |  |  |

### `CrmData_GetCrmDataSegmentsResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| PagingToken | string |  | Token used to fetch the next set of results from this endpoint, included as part of the query string. For example, `?pagingToken={token}`. _(nullable)_ |
| Segments | array<`CrmData_CrmDataSegmentInfo`> |  | A list of CRM data segments that belong to the advertiser. _(nullable)_ |

### `CrmData_PostCrmDataDropRequest`

| Field | Type | Required | Description |
|---|---|---|---|
| MergeMode | `CrmData_CrmDataMergeMode` | yes | The method used to merge the uploaded personally identifiable information (PII) with the existing data. |
| PiiType | `CrmData_CrmDataPiiType` |  | The type of personally identifiable data (PII) sent by the advertiser. _(nullable)_ |
| TtlInMinutes | integer (int64) |  | Time-to-live (TTL) in minutes for the anonymized identifiers generated by the mapping process. Here's what you need to know about this property:   - TTL is capped at 259200 minutes (180 days).   - For email or phone-based segements, this cap is reduced to 129600 minutes (90 days).   - If this value is not provided, the default TTL is 129600 minutes (90 days). _(nullable)_ |

### `CrmData_PostCrmDataDropResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| ReferenceId | string |  | The ID of the CRM data uploaded to a segment via a unique, auto-expiring drop endpoint.    You need this ID to check the data processing status using the [GET /crmdata/segment/{advertiserId}/{crmDataId}/{referenceId}](/v3/portal/api/ref/get-crmdata-segment-advertiserid-crmdataid-referenceid) endpoint. |
| Url | string |  | The signed URL where personally identifiable information (PII) is to be sent securely for processing.    Any tampering with the signed URL will result in the request being rejected.   The PII is sent as plain text, one PII item per line, using a `PUT {dropurl}` request. For details on sending data to the generated drop endpoint, see [Integrate CRM Data](/v3/portal/data/doc/DataIntegrateCRMData). |

### `CrmData_PostCrmDataRequest_post`

The request embedding all possible options for creation of a segment where the client will send personally identifiable information (PII).

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string | yes |  |
| Region | `CrmData_CrmDataRegion` | yes | The geographical region of the CRM data segment based on the origin of PII. |
| SegmentName | string | yes | The name of the segment. |
| DataProviderId | string |  | The DataProviderId, only to be specified by 3rd party integrations - contact your TAM for details. _(nullable)_ |

### `CrmData_PostCrmDataResponse`

The reply embedding all the relevant values associated with the segment being created.

| Field | Type | Required | Description |
|---|---|---|---|
| CrmDataId | string |  | An immutable ID that identifies the CRM data segment for metadata purposes. |
| FirstPartyDataId | integer (int64) |  | An immutable ID that identifies the CRM data segment for retargeting purposes.   Not applicable for conversions _(nullable)_ |

### `CrmData_CrmDataDropInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| CancelledAt | string (date-time) |  | Time when PII processing was cancelled. Null if processing was not cancelled. _(nullable)_ |
| CreatedAt | string (date-time) |  | The timestamp when the drop was created. _(nullable)_ |
| FailedAt | string (date-time) |  | Time when PII processing failed. Null if processing did not fail. _(nullable)_ |
| FailureMessage | string |  | If processing failed, this field can potentially provide a failure message. _(nullable)_ |
| IngestedAt | string (date-time) |  | Time when PII was ingested and data is verified. The segment shows up in the UI in CRM data tile within 24 hours. If the ingestion has not yet been completed or was not successful, the field is `null`. _(nullable)_ |
| MergeMode | `CrmData_CrmDataMergeMode` |  | The method used to merge the uploaded personally identifiable information (PII) with the existing data. |
| PiiTypes | array<`CrmData_CrmDataPiiType`> |  | The types of personally identifiable information (PII) declared on the drop. Empty when no PII type was declared. _(nullable)_ |
| PiiUploadedAt | string (date-time) |  | Time when PII upload was completed. Null if PII was not yet uploaded. _(nullable)_ |
| ProcessingAt | string (date-time) |  | Time when PII processing started. Null if processing did not yet started. _(nullable)_ |
| ReceiptFileUrl | string |  | Signed URL to a receipt file to describe PII processing errors (if any) _(nullable)_ |
| RetentionEnabled | boolean |  | If set to `true`, PII data is retained in hashed form for 90 days and is refreshed daily as UIDs decay.   If set to `false`, PII data is processed once and then discarded. |
| RetentionRemainingInDays | integer (int64) |  | The number of days left before the currently retained PII data is purged. PII data is retained in hashed form for a maximum of 90 days. |
| SegmentType | `CrmData_CrmDataSegmentType` |  | The purpose of a segment specified by the advertiser upon creation. |
| State | `CrmData_CrmDataDropState` |  | The state of the data drop. |
| Statistics | `CrmData_CrmDataDropProcessingStats` |  | Statistics related to the latest drop. If no statistical data is available, the value will be <c>null</c> _(nullable)_ |
| SucceededAt | string (date-time) |  | Time when PII processing was completed successfully. If the processing has not yet been completed or was not successful, this property is set to `null`. _(nullable)_ |
| TtlInMinutes | integer (int64) |  | Time-to-live in minutes for the anonymized identifiers generated by the mapping process. |
| PiiType | `CrmData_CrmDataPiiType` |  | The type of personally identifiable information (PII) sent by the advertiser to the URL provided upon drop creation. _(DEPRECATED; deprecation: This property is deprecated. Use the `PiiTypes` field instead, which lists all PII types declared in the drop. **NOTE**: `PiiType` reflects only the first declared type.)_ |

### `CrmData_CrmDataRegion`

Type: string enum(US, EU, APAC)

### `CrmData_CrmDataSegmentType`

Type: string enum(Targeting, TargetingNPI, Conversion)

### `CrmData_CrmDataSegmentInfo`

| Field | Type | Required | Description |
|---|---|---|---|
| CrmDataId | string |  | An immutable ID that identifies the CRM data segment for metadata purposes. _(nullable)_ |
| FirstPartyDataId | integer (int64) |  | An immutable ID that identifies the CRM data segment for retargeting purposes. _(nullable)_ |
| Region | `CrmData_CrmDataRegion` |  | The geographical region of the CRM data segment based on the origin of PII. |
| SegmentName | string |  | The name of the CRM data segment. _(nullable)_ |

### `CrmData_CrmDataMergeMode`

Type: string enum(Add, Replace)

### `CrmData_CrmDataPiiType`

Type: string enum(Email, EmailHashedUnifiedId2, Phone, PhoneHashed, UID2, UID2Token, EUID, EUIDToken, IDL, ID5, NetID, FirstId, TDID, DAID, NPI, IPv4)

### `CrmData_CrmDataDropProcessingStats`

| Field | Type | Required | Description |
|---|---|---|---|
| EmailHashRecordsNotBase64EncodedSha256 | integer (int64) |  | The number of hashed email records that were either not base64-encoded or SHA256-encrypted. _(nullable)_ |
| EmailInvalidFormat | integer (int64) |  | The number of email records that were not valid email addresses. _(nullable)_ |
| EmailRecordsNotInAcceptedEmailDomain | integer (int64) |  | The number of email records that used invalid or denylisted domains. _(nullable)_ |
| EmptyRecords | integer (int64) |  | The number of records that were empty or had whitespace. _(nullable)_ |
| FailedRecords | integer (int64) |  | The number of records that were not processed successfully. _(nullable)_ |
| IngestedInvalidCsvFormat | integer (int64) |  | The number of records that did not use a valid CSV format and were discarded. _(nullable)_ |
| IngestedRecords | integer (int64) |  | The raw number of lines (non-empty) that were uploaded for processing. _(nullable)_ |
| SucceededRecords | integer (int64) |  | The number of records that were processed successfully. _(nullable)_ |
| TotalRecords | integer (int64) |  | The total number of records received for processsing. _(nullable)_ |
| UniqueIdDeficit | integer (int64) |  | The number of additional unique records needed to meet the minimum unique threshold. Make sure that the uploaded segments contain at least 5,000 unique users. _(nullable)_ |
| ValidRecords | integer (int64) |  | The total number of records that met all criteria for CRM data. _(nullable)_ |

### `CrmData_CrmDataDropState`

Type: string enum(Unknown, Created, PiiUploaded, Activated, Processing, Succeeded, Cancelled, Failed, Deactivated)

