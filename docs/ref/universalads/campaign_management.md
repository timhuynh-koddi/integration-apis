# Universal Ads API v1: Campaign Management

> Source: Universal Ads Third Party API OpenAPI spec (v0.1.0), embedded in https://developers.universalads.com/static/campaign-management/campaign-introduction. Base URL: https://api.universalads.com/v1. Fetched 2026-11-19.

Operations: 12

---

## GET /ad

**Get Ads**

Get a list of ads for the specified ad account.
Optionally filter by campaign_ids, adset_ids, ad_ids, or status.

Operation ID: `get_ads_ad_get`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| adaccount_id | query | string (uuid) | yes | Ad account ID |
| campaign_ids | query | array<string (uuid4)> \| null |  | Filter by list of campaign IDs |
| adset_ids | query | array<string (uuid4)> \| null |  | Filter by list of ad set IDs |
| ad_ids | query | array<string (uuid4)> \| null |  | Filter by list of ad IDs |
| include_archived | query | boolean |  | Include archived ads in results _(default false)_ |
| status | query | array<string enum(active, draft, error, pending, paused, deleted, completed, rejected, archived)> \| null |  | Filter by ad status (e.g. active, paused) |
| limit | query | integer |  | Number of items to retrieve per page _(default 10; minimum 1; maximum 100)_ |
| offset | query | integer |  | Pagination offset for retrieving the next set of items _(default 0; minimum 0)_ |

**Response 200** (`application/json`): object{data: array<object{id: string (uuid4), adset_id: string (uuid4), campaign_id: string (uuid4), adaccount_id: string (uuid4), name: string, click_url: string | null, creative_id: string (uuid4) | null, status: string enum(active, draft, error, pending, paused, deleted, completed, rejected, archived), creative_duration: integer | null, created_at: string | null, updated_at: string | null, archived_at: string | null, error_message: string | null}>, count: integer, limit: integer, offset: integer}

---

## POST /ad

**Create Ad**

Create an ad in the given ad set (TPA developer API).

Operation ID: `create_ad_ad_post`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Request body** (`application/json`, required): object{adset_id: string (uuid4), name: string, creative_id: string (uuid4), status: string enum(paused, active)}

**Response 200** (`application/json`): object{id: string (uuid4), adset_id: string (uuid4), campaign_id: string (uuid4), adaccount_id: string (uuid4), name: string, click_url: string | null, creative_id: string (uuid4) | null, status: string enum(active, draft, error, pending, paused, deleted, completed, rejected, archived), creative_duration: integer | null, created_at: string | null, updated_at: string | null, archived_at: string | null, error_message: string | null}

---

## GET /ad/{ad_id}

**Get Ad**

Get a specific ad by its ID.
Returns ad metadata including campaign_id, adaccount_id, creative_id,
creative_duration, and status.

Operation ID: `get_ad_ad__ad_id__get`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_id | path | string (uuid) | yes | Unique identifier of the ad |

**Response 200** (`application/json`): object{id: string (uuid4), adset_id: string (uuid4), campaign_id: string (uuid4), adaccount_id: string (uuid4), name: string, click_url: string | null, creative_id: string (uuid4) | null, status: string enum(active, draft, error, pending, paused, deleted, completed, rejected, archived), creative_duration: integer | null, created_at: string | null, updated_at: string | null, archived_at: string | null, error_message: string | null}

---

## PUT /ad/{ad_id}

**Update Ad**

Update an ad (TPA developer API); immutables enforced on the request body.

Operation ID: `update_ad_ad__ad_id__put`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_id | path | string (uuid) | yes | Unique identifier of the ad |

**Request body** (`application/json`, required): object{name: string, status: string enum(active, paused), adset_id: string (uuid4) | null, creative_id: string (uuid4) | null}

**Response 200** (`application/json`): object{id: string (uuid4), adset_id: string (uuid4), campaign_id: string (uuid4), adaccount_id: string (uuid4), name: string, click_url: string | null, creative_id: string (uuid4) | null, status: string enum(active, draft, error, pending, paused, deleted, completed, rejected, archived), creative_duration: integer | null, created_at: string | null, updated_at: string | null, archived_at: string | null, error_message: string | null}

---

## GET /adset

**Get Ad Sets**

Get a list of ad sets for the specified ad account.
Optionally filter by campaign_ids or adset_ids.

Operation ID: `get_adsets_adset_get`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| adaccount_id | query | string (uuid) | yes | Ad account ID |
| campaign_ids | query | array<string (uuid4)> \| null |  | Filter by list of campaign IDs |
| adset_ids | query | array<string (uuid4)> \| null |  | Filter by list of Ad Set IDs |
| name | query | string \| null |  | Filter by Ad Set name |
| sort | query | string enum(id, -id, campaign_id, -campaign_id, name, -name, start_date, -start_date, end_date, -end_date, lifetime_budget, -lifetime_budget, daily_budget, -daily_budget, status, -status, regulated_content, -regulated_content, bid, -bid, placement, -placement, age, -age, gender, -gender, location, -location, frequency_cap_duration, -frequency_cap_duration, frequency_cap_impressions, -frequency_cap_impressions, demographics, -demographics, device_type, -device_type, pixel_ids, -pixel_ids, segments, -segments, genre, -genre, day_parting, -day_parting) |  | Sorting field. Use '-' prefix for descending order. _(default "id")_ |
| include_archived | query | boolean |  | Include archived ad sets in results _(default false)_ |
| status | query | array<string> \| null |  | Filter by ad set status (e.g. active, paused) |
| limit | query | integer |  | Number of items to retrieve per page _(default 10; minimum 1; maximum 100)_ |
| offset | query | integer |  | Pagination offset for retrieving the next set of items _(default 0; minimum 0)_ |

**Response 200** (`application/json`): object{data: array<object{id: string (uuid4), campaign_id: string (uuid4), adaccount_id: string (uuid4), name: string, status: string, error_message: string | null, bid: number, bid_type: string enum(cpm), daily_budget: number | null, lifetime_budget: number | null, start_date: string | null, end_date: string | null, day_parting: object | null, frequency_cap_impressions: integer | null, frequency_cap_duration: integer | null, pixel_id: string (uuid4) | null, app_tracker_id: string (uuid4) | null, regulated_content: string enum(unregulated, regulated) | null, targeting: object, placement: object | null, content_language: object | null, created_at: string | null, updated_at: string | null, archived_at: string | null}>, count: integer, limit: integer, offset: integer}

---

## POST /adset

**Create Ad Set**

Create an ad set in an existing campaign (TPA developer API).

Operation ID: `create_adset_adset_post`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Request body** (`application/json`, required): object{campaign_id: string (uuid4), name: string, start_date: string (date-time), end_date: string (date-time) | null, status: string enum(paused, active), lifetime_budget: number, daily_budget: number, bid: number, frequency_cap_duration: integer | null, frequency_cap_impressions: integer | null, pixel_id: string (uuid4) | null, app_tracker_id: string (uuid4) | null, day_parting: object{timezone: string enum(viewer, ad_account), details: array<object>} | null, content_language: object{inclusion: array<string>, exclusion: array<string>} | null, targeting: object{location: object, gender: object | null, age: object | null, demographics: object | null, device_type: object | null, segments: object | null, genre: object | null} | null, regulated_content: string enum(unregulated, regulated) | null, placement: object{network_id: string (uuid4) | null, network_name: string | null, placement_ids: array<string (uuid4)> | null, automatic: boolean | null} | null}

**Response 200** (`application/json`): object{id: string (uuid4), campaign_id: string (uuid4), adaccount_id: string (uuid4), name: string, status: string, error_message: string | null, bid: number, bid_type: string enum(cpm), daily_budget: number | null, lifetime_budget: number | null, start_date: string | null, end_date: string | null, day_parting: object{timezone: string enum(viewer, ad_account), details: array<object>} | null, frequency_cap_impressions: integer | null, frequency_cap_duration: integer | null, pixel_id: string (uuid4) | null, app_tracker_id: string (uuid4) | null, regulated_content: string enum(unregulated, regulated) | null, targeting: object{location: object | null, age: object | null, gender: object | null, demographics: object | null, device_type: object | null, segments: object | null, genre: object | object | null}, placement: object{network_id: string (uuid4), network_name: string | null, placement_ids: array<string (uuid4)>, automatic: boolean} | null, content_language: object{inclusion: array<string>, exclusion: array<string>} | null, created_at: string | null, updated_at: string | null, archived_at: string | null}

---

## GET /adset/{adset_id}

**Get Ad Set**

Get a specific ad set by its ID.
Includes pixel_ids for pixels linked to this ad set.

Operation ID: `get_adset_adset__adset_id__get`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| adset_id | path | string (uuid) | yes | Unique identifier of the Ad Set |

**Response 200** (`application/json`): object{id: string (uuid4), campaign_id: string (uuid4), adaccount_id: string (uuid4), name: string, status: string, error_message: string | null, bid: number, bid_type: string enum(cpm), daily_budget: number | null, lifetime_budget: number | null, start_date: string | null, end_date: string | null, day_parting: object{timezone: string enum(viewer, ad_account), details: array<object>} | null, frequency_cap_impressions: integer | null, frequency_cap_duration: integer | null, pixel_id: string (uuid4) | null, app_tracker_id: string (uuid4) | null, regulated_content: string enum(unregulated, regulated) | null, targeting: object{location: object | null, age: object | null, gender: object | null, demographics: object | null, device_type: object | null, segments: object | null, genre: object | object | null}, placement: object{network_id: string (uuid4), network_name: string | null, placement_ids: array<string (uuid4)>, automatic: boolean} | null, content_language: object{inclusion: array<string>, exclusion: array<string>} | null, created_at: string | null, updated_at: string | null, archived_at: string | null}

---

## PUT /adset/{adset_id}

**Update Ad Set**

Update an ad set (TPA developer API).

Operation ID: `update_adset_adset__adset_id__put`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| adset_id | path | string (uuid) | yes | Unique identifier of the Ad Set |

**Request body** (`application/json`, required): object{campaign_id: string (uuid4), name: string, start_date: string (date-time), end_date: string (date-time) | null, status: string enum(paused, active), lifetime_budget: number, daily_budget: number, bid: number, frequency_cap_duration: integer | null, frequency_cap_impressions: integer | null, pixel_id: string (uuid4) | null, app_tracker_id: string (uuid4) | null, day_parting: object{timezone: string enum(viewer, ad_account), details: array<object>} | null, content_language: object{inclusion: array<string>, exclusion: array<string>} | null, targeting: object{location: object, gender: object | null, age: object | null, demographics: object | null, device_type: object | null, segments: object | null, genre: object | null} | null, regulated_content: string enum(unregulated, regulated) | null, placement: object{network_id: string (uuid4) | null, network_name: string | null, placement_ids: array<string (uuid4)> | null, automatic: boolean | null} | null}

**Response 200** (`application/json`): object{id: string (uuid4), campaign_id: string (uuid4), adaccount_id: string (uuid4), name: string, status: string, error_message: string | null, bid: number, bid_type: string enum(cpm), daily_budget: number | null, lifetime_budget: number | null, start_date: string | null, end_date: string | null, day_parting: object{timezone: string enum(viewer, ad_account), details: array<object>} | null, frequency_cap_impressions: integer | null, frequency_cap_duration: integer | null, pixel_id: string (uuid4) | null, app_tracker_id: string (uuid4) | null, regulated_content: string enum(unregulated, regulated) | null, targeting: object{location: object | null, age: object | null, gender: object | null, demographics: object | null, device_type: object | null, segments: object | null, genre: object | object | null}, placement: object{network_id: string (uuid4), network_name: string | null, placement_ids: array<string (uuid4)>, automatic: boolean} | null, content_language: object{inclusion: array<string>, exclusion: array<string>} | null, created_at: string | null, updated_at: string | null, archived_at: string | null}

---

## GET /campaign

**Get Campaigns**

Get a list of campaigns for the specified ad account.
Excludes storefront campaigns.

Operation ID: `get_campaigns_campaign_get`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| adaccount_id | query | string (uuid) | yes | Ad account ID |
| campaign_ids | query | array<string (uuid4)> \| null |  | Filter by list of campaign IDs |
| name | query | string \| null |  | Filter by campaign name |
| status | query | array<string> \| null |  | Filter by campaign status (e.g. active, paused) |
| campaign_type | query | string enum(performance, content_select) \| null |  | Filter by campaign type: performance, content_select |
| sort | query | string enum(id, -id, name, -name, status, -status, start_date, -start_date, end_date, -end_date, lifetime_budget, -lifetime_budget, daily_budget, -daily_budget, objective, -objective, frequency_cap_duration, -frequency_cap_duration, frequency_cap_impressions, -frequency_cap_impressions, campaign_type, -campaign_type, network_id, -network_id) |  | Sorting field. Use '-' prefix for descending order. _(default "id")_ |
| include_archived | query | boolean |  | Include archived campaigns in results _(default false)_ |
| limit | query | integer |  | Number of items to retrieve per page _(default 10; minimum 1; maximum 100)_ |
| offset | query | integer |  | Pagination offset for retrieving the next set of items _(default 0; minimum 0)_ |

**Response 200** (`application/json`): object{data: array<object{id: string (uuid4), adaccount_id: string (uuid4), name: string, objective: string | null, start_date: string | null, end_date: string | null, lifetime_budget: number | null, daily_budget: number | null, status: string enum(active, draft, error, pending, paused, deleted, completed, archived), frequency_cap_impressions: integer | null, frequency_cap_duration: integer | null, network_id: string (uuid4) | null, campaign_type: string enum(performance, content_select), content_select_goal: string enum(olympics, genre, network, mlb, college_football, hispanic_heritage_month, nba, halloween, nfl) | null, network_name: string | null, created_at: string | null, updated_at: string | null, archived_at: string | null}>, count: integer, limit: integer, offset: integer}

---

## POST /campaign

**Create Campaign**

Create a campaign (TPA developer API).

Operation ID: `create_campaign_campaign_post`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Request body** (`application/json`, required): object{adaccount_id: string (uuid4), name: string, campaign_type: string enum(performance, content_select), content_select_goal: string enum(olympics, genre, network, mlb, college_football, hispanic_heritage_month, nba, halloween, nfl) | null, objective: string enum(awareness, web_conversions, app_promotion), start_date: string (date-time), end_date: string (date-time) | null, daily_budget: number | null, lifetime_budget: number | null, frequency_cap_impressions: integer | null, frequency_cap_duration: integer | null, status: string enum(active, paused), network_id: string (uuid4) | null, network_name: string | null}

**Response 200** (`application/json`): object{id: string (uuid4), adaccount_id: string (uuid4), name: string, objective: string | null, start_date: string | null, end_date: string | null, lifetime_budget: number | null, daily_budget: number | null, status: string enum(active, draft, error, pending, paused, deleted, completed, archived), frequency_cap_impressions: integer | null, frequency_cap_duration: integer | null, network_id: string (uuid4) | null, campaign_type: string enum(performance, content_select), content_select_goal: string enum(olympics, genre, network, mlb, college_football, hispanic_heritage_month, nba, halloween, nfl) | null, network_name: string | null, created_at: string | null, updated_at: string | null, archived_at: string | null}

---

## GET /campaign/{campaign_id}

**Get Campaign**

Get a specific campaign by its ID.
Returns 404 for storefront campaigns.

Operation ID: `get_campaign_campaign__campaign_id__get`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| campaign_id | path | string (uuid) | yes | Unique identifier of the campaign |

**Response 200** (`application/json`): object{id: string (uuid4), adaccount_id: string (uuid4), name: string, objective: string | null, start_date: string | null, end_date: string | null, lifetime_budget: number | null, daily_budget: number | null, status: string enum(active, draft, error, pending, paused, deleted, completed, archived), frequency_cap_impressions: integer | null, frequency_cap_duration: integer | null, network_id: string (uuid4) | null, campaign_type: string enum(performance, content_select), content_select_goal: string enum(olympics, genre, network, mlb, college_football, hispanic_heritage_month, nba, halloween, nfl) | null, network_name: string | null, created_at: string | null, updated_at: string | null, archived_at: string | null}

---

## PUT /campaign/{campaign_id}

**Update Campaign**

Update a campaign (TPA developer API); immutables enforced on the request body.

Operation ID: `update_campaign_campaign__campaign_id__put`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| campaign_id | path | string (uuid) | yes | Unique identifier of the campaign |

**Request body** (`application/json`, required): object{adaccount_id: string (uuid4), name: string, campaign_type: string enum(performance, content_select), content_select_goal: string enum(olympics, genre, network, mlb, college_football, hispanic_heritage_month, nba, halloween, nfl) | null, objective: string enum(awareness, web_conversions, app_promotion), start_date: string (date-time), end_date: string (date-time) | null, daily_budget: number | null, lifetime_budget: number | null, frequency_cap_impressions: integer | null, frequency_cap_duration: integer | null, status: string enum(active, paused, deleted), network_id: string (uuid4) | null, network_name: string | null}

**Response 200** (`application/json`): object{id: string (uuid4), adaccount_id: string (uuid4), name: string, objective: string | null, start_date: string | null, end_date: string | null, lifetime_budget: number | null, daily_budget: number | null, status: string enum(active, draft, error, pending, paused, deleted, completed, archived), frequency_cap_impressions: integer | null, frequency_cap_duration: integer | null, network_id: string (uuid4) | null, campaign_type: string enum(performance, content_select), content_select_goal: string enum(olympics, genre, network, mlb, college_football, hispanic_heritage_month, nba, halloween, nfl) | null, network_name: string | null, created_at: string | null, updated_at: string | null, archived_at: string | null}

