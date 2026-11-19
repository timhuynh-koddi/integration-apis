# Geo Event

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 2

---

## PUT /v3/geoevent

Replaces all existing postal codes for the specified geo event segment with the locations  
provided in `GeoEventLocations`. Each call is a full replace - any postal codes not included  
in the request will be removed. To clear all postal codes, submit an empty `GeoEventLocations` array.  
Duplicate `(CountryCode, PostalCode)` pairs within a single request are not allowed and will  
result in a 400 error. Deduplicate your list before submitting.

Operation ID: `put-geoevent`

**Request body** (`application/json`, required): `GeoEvent_GeoEvent_put`

**Response 200** (`application/json`): `GeoEvent_GeoEvent`

---

## GET /v3/geoevent/{providerId}/{geoEventId}

Get an existing geo event

Operation ID: `get-geoevent-providerid-geoeventid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| providerId | path | string | yes |  |
| geoEventId | path | string | yes |  |

**Response 200** (`application/json`): `GeoEvent_GeoEvent`

---

## Schemas

### `GeoEvent_GeoEvent`

An event - locations that have an event (targeting data) associated with them

| Field | Type | Required | Description |
|---|---|---|---|
| GeoEventId | string |  | The name of the geo event (targeting data name) _(maxLength 512)_ |
| GeoEventLocations | array<`GeoEvent_GeoEventLocation`> |  | Country/postal code pairs associated with this geo event. |
| ProviderId | string |  | The name of the data provider for this geo event _(maxLength 32)_ |

### `GeoEvent_GeoEvent_put`

An event - locations that have an event (targeting data) associated with them

| Field | Type | Required | Description |
|---|---|---|---|
| GeoEventId | string | yes | The name of the geo event (targeting data name) _(maxLength 512)_ |
| ProviderId | string | yes | The name of the data provider for this geo event _(maxLength 32)_ |
| GeoEventLocations | array<`GeoEvent_GeoEventLocation_put`> |  | Country/postal code pairs associated with this geo event. |

### `GeoEvent_GeoEventLocation`

Identifies a single location associated with an event

| Field | Type | Required | Description |
|---|---|---|---|
| CountryCode | string |  | The two-digit country code - for the United States this would be 'US' for example _(maxLength 2)_ |
| PostalCode | string |  | The postal code (without extension) - for US this might be '98052' for example _(maxLength 10)_ |

### `GeoEvent_GeoEventLocation_put`

Identifies a single location associated with an event

| Field | Type | Required | Description |
|---|---|---|---|
| CountryCode | string | yes | The two-digit country code - for the United States this would be 'US' for example _(maxLength 2)_ |
| PostalCode | string | yes | The postal code (without extension) - for US this might be '98052' for example _(maxLength 10)_ |

