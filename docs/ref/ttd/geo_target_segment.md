# Geo Target Segment

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 5

---

## POST /v3/geotargetsegment/addgeotargets/{providerId}/{providerElementId}

Add specified points or polygons to a geo target segment. Limits to 10k points or polygons per request.  
Have multiple requests to this endpoint to add more than 10k to a geo target segment.

Operation ID: `post-geotargetsegment-addgeotargets-providerid-providerelementid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| providerId | path | string | yes |  |
| providerElementId | path | string | yes |  |

**Request body** (`application/json`, required): `GeoTargetSegment_GeoTargetSegment_post`

**Response 200** (`application/json`): `GeoTargetSegment_GeoTargetSegment`

---

## POST /v3/geotargetsegment/deletegeotargets/{providerId}/{providerElementId}

Delete specified points or polygons from a geo target segment. Limits to 10k points or polygons per request.  
Have multiple requests to this endpoint to delete more than 10k to a geo target segment.

Operation ID: `post-geotargetsegment-deletegeotargets-providerid-providerelementid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| providerId | path | string | yes |  |
| providerElementId | path | string | yes |  |

**Request body** (`application/json`, required): `GeoTargetSegment_GeoTargetSegment_post`

**Response 200** (`application/json`): `GeoTargetSegment_GeoTargetSegment`

---

## GET /v3/geotargetsegment/{providerId}/{providerElementId}

Get an existing geo target segment

Operation ID: `get-geotargetsegment-providerid-providerelementid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| providerId | path | string | yes |  |
| providerElementId | path | string | yes |  |

**Response 200** (`application/json`): `GeoTargetSegment_GeoTargetSegment`

---

## POST /v3/geotargetsegment/cleargeotargets/{providerId}/{providerElementId}

Clear all points or polygons from a geo target segment.

Operation ID: `post-geotargetsegment-cleargeotargets-providerid-providerelementid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| providerId | path | string | yes |  |
| providerElementId | path | string | yes |  |

**Response 200** (`application/json`): `GeoTargetSegment_GeoTargetSegment`

---

## POST /v3/geotargetsegment/generatepolygonfileuploadurl/{providerId}/{fileName}

Get an AWS S3 upload URL for adding the polygon file. For polygon file requirements, rate limits, and other details, see [Geotargeting Data Integration](/v3/portal/data/doc/GeoStore).

Operation ID: `post-geotargetsegment-generatepolygonfileuploadurl-providerid-filename`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| providerId | path | string | yes | The platform ID of the third-party data provider that owns the segment. |
| fileName | path | string | yes | The name of the polygon file with the required prefix. |

**Response 200** (`application/json`): `GeoTargetSegment_PolygonUploadUrlAttributes`

---

## Schemas

### `GeoTargetSegment_GeoTargetSegment`

A segment with associated geospatial targets.

| Field | Type | Required | Description |
|---|---|---|---|
| Count | integer (int32) |  |  |
| Geometries | array<`GeoTargetSegment_GeoTargetPolygon`> |  | The polygon data. _(nullable)_ |
| OnlyShowChanges | boolean |  | If set to `true`, only addition or deletion changes are returned. In other words, the response includes only the changes of points or polygons with the `GeoTargetPoint.Status` or `Polygon.Status` values.   If set to `false` (default value), the response includes all points or polygons that belong to the element you specified in the URL, without the `GeoTargetPoint.Status` or `Polygon.Status` values. |
| Points | array<`GeoTargetSegment_GeoTargetPoint`> |  | The point data. _(nullable)_ |

### `GeoTargetSegment_GeoTargetSegment_post`

A segment with associated geospatial targets.

| Field | Type | Required | Description |
|---|---|---|---|
| Count | integer (int32) |  |  |
| Geometries | array<`GeoTargetSegment_GeoTargetPolygon_post`> |  | The polygon data. _(nullable)_ |
| OnlyShowChanges | boolean |  | If set to `true`, only addition or deletion changes are returned. In other words, the response includes only the changes of points or polygons with the `GeoTargetPoint.Status` or `Polygon.Status` values.   If set to `false` (default value), the response includes all points or polygons that belong to the element you specified in the URL, without the `GeoTargetPoint.Status` or `Polygon.Status` values. |
| Points | array<`GeoTargetSegment_GeoTargetPoint_post`> |  | The point data. _(nullable)_ |

### `GeoTargetSegment_PolygonUploadUrlAttributes`

| Field | Type | Required | Description |
|---|---|---|---|
| ContentType | string |  | The content type for uploading the file to the AWS S3 bucket. For example, application/gzip. |
| ExpirationDateUtc | string |  | The URL expiration date in UTC. |
| PolygonUploadUrl | string |  | The URL for uploading the polygon file to a cloud platform. IMPORTANT: The URL is temporary and expires after a preset period of time.   For example, to upload the file to an AWS S3 bucket, see the [Amazon Web Services documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html), which details the properties returned in the URL. |

### `GeoTargetSegment_GeoTargetPoint`

| Field | Type | Required | Description |
|---|---|---|---|
| LatDeg | number (double) |  | Latitude in degrees (Y). |
| LngDeg | number (double) |  | Longitude in degrees (X). |
| RadMet | integer (int32) |  | Target matches any points within the specified radius in meters. |
| Status | string |  | The status of a given polygon after addition or deletion.   Setting the value of `GeoTargetSegment.OnlyShowChanges` to `true` or `false` determines whether to show status or not.   The default value is null, which indicates that the `GeoTargetSegment.OnlyShowChanges` property value is set to `false`.   If the `GeoTargetSegment.OnlyShowChanges` property value is set to `true` the value should be `Added`, `Deleted`, `Already Exists`, or `Not Found`. _(nullable)_ |
| TimeSlots | array<`GeoTargetSegment_TimeSlot`> |  | The targeted hours of the week in UTC.   For example, if you want to target time slots from 12 PM to 1 PM and from 5 PM to 6 PM hour on Monday, set the `DayOfWeek` value to `Monday` and the `Hours` value to `[12,17]`. _(nullable)_ |

### `GeoTargetSegment_GeoTargetPolygon`

| Field | Type | Required | Description |
|---|---|---|---|
| PolygonFileNamePrefix | string |  | The file name prefix of the polygon file you uploaded.   **NOTE**: The polygon file name format is `FileNamePrefix.Timestamp.wkt.csv.gz` or `FileNamePrefix.Timestamp.geojson.csv.gz`. |
| Polygons | array<`GeoTargetSegment_Polygon`> |  | The list of polygons in the file. _(nullable)_ |

### `GeoTargetSegment_GeoTargetPoint_post`

| Field | Type | Required | Description |
|---|---|---|---|
| LatDeg | number (double) |  | Latitude in degrees (Y). |
| LngDeg | number (double) |  | Longitude in degrees (X). |
| RadMet | integer (int32) |  | Target matches any points within the specified radius in meters. |
| Status | string |  | The status of a given polygon after addition or deletion.   Setting the value of `GeoTargetSegment.OnlyShowChanges` to `true` or `false` determines whether to show status or not.   The default value is null, which indicates that the `GeoTargetSegment.OnlyShowChanges` property value is set to `false`.   If the `GeoTargetSegment.OnlyShowChanges` property value is set to `true` the value should be `Added`, `Deleted`, `Already Exists`, or `Not Found`. _(nullable)_ |
| TimeSlots | array<`GeoTargetSegment_TimeSlot_post`> |  | The targeted hours of the week in UTC.   For example, if you want to target time slots from 12 PM to 1 PM and from 5 PM to 6 PM hour on Monday, set the `DayOfWeek` value to `Monday` and the `Hours` value to `[12,17]`. _(nullable)_ |

### `GeoTargetSegment_GeoTargetPolygon_post`

| Field | Type | Required | Description |
|---|---|---|---|
| PolygonFileNamePrefix | string | yes | The file name prefix of the polygon file you uploaded.   **NOTE**: The polygon file name format is `FileNamePrefix.Timestamp.wkt.csv.gz` or `FileNamePrefix.Timestamp.geojson.csv.gz`. |
| Polygons | array<`GeoTargetSegment_Polygon_post`> |  | The list of polygons in the file. _(nullable)_ |

### `GeoTargetSegment_TimeSlot`

| Field | Type | Required | Description |
|---|---|---|---|
| DayOfWeek | `System_DayOfWeek` |  | The targeted day of the week. |
| Hours | array<integer> |  | The zero-based hour of the day (from 0-23). |

### `GeoTargetSegment_Polygon`

| Field | Type | Required | Description |
|---|---|---|---|
| PolygonId | string |  | The polygon ID in the file. Maximum 32 characters. |
| Status | string |  | The status of a given polygon after addition or deletion.   Setting the value of `GeoTargetSegment.OnlyShowChanges` to `true` or `false` determines whether to show status or not.   The default value is null, which indicates that the `GeoTargetSegment.OnlyShowChanges` property value is set to `false`.   If the `GeoTargetSegment.OnlyShowChanges` property value is set to `true` the value should be `Added`, `Deleted`, `Already Exists`, or `Not Found`. _(nullable)_ |
| TimeSlots | array<`GeoTargetSegment_TimeSlot`> |  | The targeted hours of the week in UTC.   For example, if you want to target time slots from 12 PM to 1 PM and from 5 PM to 6 PM hour on Monday, set the `DayOfWeek` value to `Monday` and the `Hours` value to `[12,17]`. _(nullable)_ |

### `GeoTargetSegment_TimeSlot_post`

| Field | Type | Required | Description |
|---|---|---|---|
| DayOfWeek | `System_DayOfWeek` | yes | The targeted day of the week. |
| Hours | array<integer> | yes | The zero-based hour of the day (from 0-23). |

### `GeoTargetSegment_Polygon_post`

| Field | Type | Required | Description |
|---|---|---|---|
| PolygonId | string | yes | The polygon ID in the file. Maximum 32 characters. |
| Status | string |  | The status of a given polygon after addition or deletion.   Setting the value of `GeoTargetSegment.OnlyShowChanges` to `true` or `false` determines whether to show status or not.   The default value is null, which indicates that the `GeoTargetSegment.OnlyShowChanges` property value is set to `false`.   If the `GeoTargetSegment.OnlyShowChanges` property value is set to `true` the value should be `Added`, `Deleted`, `Already Exists`, or `Not Found`. _(nullable)_ |
| TimeSlots | array<`GeoTargetSegment_TimeSlot_post`> |  | The targeted hours of the week in UTC.   For example, if you want to target time slots from 12 PM to 1 PM and from 5 PM to 6 PM hour on Monday, set the `DayOfWeek` value to `Monday` and the `Hours` value to `[12,17]`. _(nullable)_ |

### `System_DayOfWeek`

Type: string enum(Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday)

