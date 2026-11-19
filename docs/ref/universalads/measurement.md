# Universal Ads API v1: Measurement

> Source: Universal Ads Third Party API OpenAPI spec (v0.1.0), embedded in https://developers.universalads.com/static/campaign-management/campaign-introduction. Base URL: https://api.universalads.com/v1. Fetched 2026-11-19.

Operations: 9

---

## GET /app_trackers

**Get App Trackers**

List active app trackers for the specified ad account.

Operation ID: `get_app_trackers_app_trackers_get`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| adaccount_id | query | string (uuid) | yes | Ad account ID |
| limit | query | integer |  | Number of items to retrieve per page _(default 10; minimum 1; maximum 100)_ |
| offset | query | integer |  | Pagination offset for retrieving the next set of items _(default 0; minimum 0)_ |

**Response 200** (`application/json`): object{data: array<object{id: string (uuid4), adaccount_id: string (uuid4), name: string, mmp: string enum(appsflyer, kochava, adjust, singular, branch), ios_app_store_id: string | null, android_package_name: string | null, app_name: string, tracking_pixels: array<object>, status: string enum(active, archived)}>, count: integer, limit: integer, offset: integer}

---

## POST /app_trackers

**Create App Tracker**

Create an app tracker (developer API).

Operation ID: `create_app_tracker_app_trackers_post`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Request body** (`application/json`, required): object{adaccount_id: string (uuid4), name: string, mmp: string enum(appsflyer, kochava, adjust, singular, branch), ios_app_store_id: string | null, android_package_name: string | null, app_name: string, tracking_pixels: array<object{impression_tracking_url: string, platform: string enum(ios, android, both)}>}

**Response 201** (`application/json`): object{id: string (uuid4), adaccount_id: string (uuid4), name: string, mmp: string enum(appsflyer, kochava, adjust, singular, branch), ios_app_store_id: string | null, android_package_name: string | null, app_name: string, tracking_pixels: array<object{id: string (uuid4), impression_tracking_url: string, platform: string enum(ios, android, both), status: string enum(active, archived)}>, status: string enum(active, archived)}

---

## GET /app_trackers/{app_tracker_id}

**Get App Tracker**

Get a specific app tracker by its ID.

Operation ID: `get_app_tracker_app_trackers__app_tracker_id__get`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| app_tracker_id | path | string (uuid) | yes | Unique identifier of the app tracker |

**Response 200** (`application/json`): object{id: string (uuid4), adaccount_id: string (uuid4), name: string, mmp: string enum(appsflyer, kochava, adjust, singular, branch), ios_app_store_id: string | null, android_package_name: string | null, app_name: string, tracking_pixels: array<object{id: string (uuid4), impression_tracking_url: string, platform: string enum(ios, android, both), status: string enum(active, archived)}>, status: string enum(active, archived)}

---

## GET /pixels

**Get Pixels**

Get a list of pixels for the specified ad account.
Returns only active pixels.

Operation ID: `get_pixels_pixels_get`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| adaccount_id | query | string (uuid) | yes | Ad account ID |
| limit | query | integer |  | Number of items to retrieve per page _(default 10; minimum 1; maximum 100)_ |
| offset | query | integer |  | Pagination offset for retrieving the next set of items _(default 0; minimum 0)_ |

**Response 200** (`application/json`): object{data: array<object{id: string (uuid4), name: string, status: string, access_token: string, script: string, adaccount_id: string (uuid4)}>, count: integer, limit: integer, offset: integer}

---

## POST /pixels

**Create Pixel**

Create an enhanced pixel (developer API).

Operation ID: `create_pixel_pixels_post`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Request body** (`application/json`, required): object{adaccount_id: string (uuid4), name: string}

**Response 201** (`application/json`): object{id: string (uuid4), name: string, status: string, access_token: string, script: string, adaccount_id: string (uuid4)}

---

## GET /pixels/{pixel_id}

**Get Pixel**

Get a specific pixel by its ID.
Returns pixels with any status (pending, active, error).

Operation ID: `get_pixel_pixels__pixel_id__get`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| pixel_id | path | string (uuid) | yes | Unique identifier of the pixel |

**Response 200** (`application/json`): object{id: string (uuid4), name: string, status: string, access_token: string, script: string, adaccount_id: string (uuid4)}

---

## PUT /pixels/{pixel_id}

**Update Pixel**

Update a pixel (TPA developer API); path carries pixel id, body is name only.

Operation ID: `update_pixel_pixels__pixel_id__put`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| pixel_id | path | string (uuid) | yes | Unique identifier of the pixel |

**Request body** (`application/json`, required): object{name: string}

**Response 200** (`application/json`): object{id: string (uuid4), name: string, status: string, access_token: string, script: string, adaccount_id: string (uuid4)}

---

## GET /pixels/{pixel_id}/events

**Get Pixel Events**

Return the pixel's tracked standard events (enum names), in stored order.

Operation ID: `get_pixel_events_pixels__pixel_id__events_get`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| pixel_id | path | string (uuid) | yes | Unique identifier of the pixel |

**Response 200** (`application/json`): object{events: array<string>}

---

## PUT /pixels/{pixel_id}/events

**Replace Pixel Events**

Full replace of tracked events; response matches GET /events shape and order.

Operation ID: `replace_pixel_events_pixels__pixel_id__events_put`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| pixel_id | path | string (uuid) | yes | Unique identifier of the pixel |

**Request body** (`application/json`, required): object{events: array<string enum(content_view, product_view, search, sign_in, schedule_appointment, sign_up, start_trial, view_cart, wish_list, purchase, checkout_start, add_to_cart, add_payment_info, add_address_info, subscribe, custom_event_1, custom_event_2)>}

**Response 200** (`application/json`): object{events: array<string>}

