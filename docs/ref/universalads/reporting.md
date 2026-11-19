# Universal Ads API v1: Reporting

> Source: Universal Ads Third Party API OpenAPI spec (v0.1.0), embedded in https://developers.universalads.com/static/campaign-management/campaign-introduction. Base URL: https://api.universalads.com/v1. Fetched 2026-11-19.

Operations: 5

---

## GET /report/ad

**Get Ad Report**

Get an Ad Report

Operation ID: `get_ad_report_report_ad_get`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| limit | query | integer |  | Limit _(default 10; minimum 1; maximum 20)_ |
| offset | query | integer |  | Offset _(default 0; minimum 0)_ |
| date_aggregation | query | string enum(HOUR, DAY, LIFETIME, TOTAL) |  | Granularity for the report data aggregation _(default "TOTAL")_ |
| adaccount_id | query | string (uuid) | yes | Ad account ID |
| campaign_ids | query | array<string (uuid)> \| null |  | List of campaign IDs |
| adset_ids | query | array<string (uuid)> \| null |  | List of Ad Set IDs |
| ad_ids | query | array<string (uuid)> \| null |  | List of Ad IDs |
| start_date | query | string \| null |  | Start date for the report (YYYY-MM-DDTHH:MM:SS) |
| end_date | query | string \| null |  | End date for the report (YYYY-MM-DDTHH:MM:SS) |
| timezone | query | string |  | Timezone used to interpret request datetimes and render report datetimes. Allowed values: account, UTC, America/New_York, America/Chicago, America/Denver, America/Los_Angeles _(default "account")_ |
| fields | query | array<string> \| null |  | List of performance fields to include in response. Use 'all' for all fields. _(default ["all"])_ |
| attribution_window | query | string enum(1_day, 7_day, 14_day, 30_day) \| null |  | Attribution window for conversion metrics (1_day, 7_day, 14_day, 30_day). If not provided, attribution metrics will not be included. |
| sample | query | boolean \| null |  | When set to true, returns sample fake data instead of real data. _(default false)_ |

**Response 200** (`application/json`): object{data: array<object{entity_id: string (uuid4), name: string, objective: string, status: string, entity_start_date: string (date-time) | null, entity_end_date: string (date-time) | null, start_date: string (date-time) | null, end_date: string (date-time) | null, timezone: string, lifetime_budget: number | null, daily_budget: number | null, frequency_cap_impressions: integer | null, frequency_cap_duration: integer | null, spend: number, impressions: integer, video_q1s: integer, video_q2s: integer, video_q3s: integer, video_completes: integer, cpcv: number, reach: integer, frequency: number, campaign_id: string (uuid4) | null, adset_id: string (uuid4) | null, creative_id: string (uuid4) | null, bid: number | null, bid_type: string | null, error_message: string | null} | object{entity_id: string (uuid4), name: string, objective: string, status: string, entity_start_date: string (date-time) | null, entity_end_date: string (date-time) | null, start_date: string (date-time) | null, end_date: string (date-time) | null, timezone: string, lifetime_budget: number | null, daily_budget: number | null, frequency_cap_impressions: integer | null, frequency_cap_duration: integer | null, spend: number, impressions: integer, video_q1s: integer, video_q2s: integer, video_q3s: integer, video_completes: integer, cpcv: number, reach: integer, frequency: number, attribution_window: string enum(1_day, 7_day, 14_day, 30_day), conversions: integer, cpa: number, ev_page_view: integer, cpe_page_view: number, ev_content_view: integer, cpe_content_view: number, ev_product_view: integer, cpe_product_view: number, ev_search: integer, cpe_search: number, ev_schedule_appt: integer, cpe_schedule_appt: number, ev_sign_up: integer, cpe_sign_up: number, ev_lead: integer, cpe_lead: number, ev_sign_in: integer, cpe_sign_in: number, ev_start_trial: integer, cpe_start_trial: number, ev_view_cart: integer, cpe_view_cart: number, ev_wish_list: integer, cpe_wish_list: number, ev_purchase: integer, cpe_purchase: number, ev_checkout_start: integer, cpe_checkout_start: number, ev_add_to_cart: integer, cpe_add_to_cart: number, ev_add_payment_info: integer, cpe_add_payment_info: number, ev_add_address_info: integer, cpe_add_address_info: number, ev_subscribe: integer, cpe_subscribe: number, ev_custom_1: integer, cpe_custom_1: number, ev_custom_2: integer, cpe_custom_2: number, roas: number, purchase_revenue: number, app_installs: integer, app_cost_per_install: number, app_opens: integer, app_cost_per_app_open: number, app_sign_ups: integer, app_cost_per_sign_up: number, app_leads: integer, app_cost_per_lead: number, app_sign_ins: integer, app_cost_per_sign_in: number, app_trial_starts: integer, app_cost_per_trial_start: number, app_subscriptions: integer, app_cost_per_subscription: number, app_tutorial_completes: integer, app_cost_per_tutorial_complete: number, app_content_views: integer, app_cost_per_content_view: number, app_product_views: integer, app_cost_per_product_view: number, app_searches: integer, app_cost_per_search: number, app_scheduled_appointments: integer, app_cost_per_scheduled_appointment: number, app_add_to_cart: integer, app_cost_per_add_to_cart: number, app_cart_views: integer, app_cost_per_cart_view: number, app_add_to_wishlist: integer, app_cost_per_add_to_wishlist: number, app_checkout_starts: integer, app_cost_per_checkout_start: number, app_add_of_payment_info: integer, app_cost_per_add_of_payment_info: number, app_add_of_address_info: integer, app_cost_per_add_of_address_info: number, app_purchases: integer, app_cost_per_purchase: number, app_purchase_revenue: number, app_purchase_roas: number, app_first_deposits: integer, app_cost_per_first_deposit: number, app_deposits: integer, app_cost_per_deposit: number, app_deposit_revenue: number, app_deposit_roas: number, app_levels_achieved: integer, app_cost_per_level_achieved: number, app_custom_event_1: integer, app_cost_per_custom_event_1: number, app_custom_event_2: integer, app_cost_per_custom_event_2: number, campaign_id: string (uuid4) | null, adset_id: string (uuid4) | null, creative_id: string (uuid4) | null, bid: number | null, bid_type: string | null, error_message: string | null}>, count: integer, limit: integer, offset: integer}

---

## GET /report/adset

**Get Ad Set Report**

Get an Ad Set Report

Operation ID: `get_adset_report_report_adset_get`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| limit | query | integer |  | Limit _(default 10; minimum 1; maximum 20)_ |
| offset | query | integer |  | Offset _(default 0; minimum 0)_ |
| date_aggregation | query | string enum(HOUR, DAY, LIFETIME, TOTAL) |  | Granularity for the report data aggregation _(default "TOTAL")_ |
| adaccount_id | query | string (uuid) | yes | Ad account ID |
| campaign_ids | query | array<string (uuid)> \| null |  | List of campaign IDs |
| adset_ids | query | array<string (uuid)> \| null |  | List of Ad Set IDs |
| ad_ids | query | array<string (uuid)> \| null |  | List of Ad IDs |
| start_date | query | string \| null |  | Start date for the report (YYYY-MM-DDTHH:MM:SS) |
| end_date | query | string \| null |  | End date for the report (YYYY-MM-DDTHH:MM:SS) |
| timezone | query | string |  | Timezone used to interpret request datetimes and render report datetimes. Allowed values: account, UTC, America/New_York, America/Chicago, America/Denver, America/Los_Angeles _(default "account")_ |
| fields | query | array<string> \| null |  | List of performance fields to include in response. Use 'all' for all fields. _(default ["all"])_ |
| attribution_window | query | string enum(1_day, 7_day, 14_day, 30_day) \| null |  | Attribution window for conversion metrics (1_day, 7_day, 14_day, 30_day). If not provided, attribution metrics will not be included. |
| sample | query | boolean \| null |  | When set to true, returns sample fake data instead of real data. _(default false)_ |

**Response 200** (`application/json`): object{data: array<object{entity_id: string (uuid4), name: string, objective: string, status: string, entity_start_date: string (date-time) | null, entity_end_date: string (date-time) | null, start_date: string (date-time) | null, end_date: string (date-time) | null, timezone: string, lifetime_budget: number | null, daily_budget: number | null, frequency_cap_impressions: integer | null, frequency_cap_duration: integer | null, spend: number, impressions: integer, video_q1s: integer, video_q2s: integer, video_q3s: integer, video_completes: integer, cpcv: number, reach: integer, frequency: number, campaign_id: string (uuid4) | null, bid: number | null, bid_type: string | null} | object{entity_id: string (uuid4), name: string, objective: string, status: string, entity_start_date: string (date-time) | null, entity_end_date: string (date-time) | null, start_date: string (date-time) | null, end_date: string (date-time) | null, timezone: string, lifetime_budget: number | null, daily_budget: number | null, frequency_cap_impressions: integer | null, frequency_cap_duration: integer | null, spend: number, impressions: integer, video_q1s: integer, video_q2s: integer, video_q3s: integer, video_completes: integer, cpcv: number, reach: integer, frequency: number, attribution_window: string enum(1_day, 7_day, 14_day, 30_day), conversions: integer, cpa: number, ev_page_view: integer, cpe_page_view: number, ev_content_view: integer, cpe_content_view: number, ev_product_view: integer, cpe_product_view: number, ev_search: integer, cpe_search: number, ev_schedule_appt: integer, cpe_schedule_appt: number, ev_sign_up: integer, cpe_sign_up: number, ev_lead: integer, cpe_lead: number, ev_sign_in: integer, cpe_sign_in: number, ev_start_trial: integer, cpe_start_trial: number, ev_view_cart: integer, cpe_view_cart: number, ev_wish_list: integer, cpe_wish_list: number, ev_purchase: integer, cpe_purchase: number, ev_checkout_start: integer, cpe_checkout_start: number, ev_add_to_cart: integer, cpe_add_to_cart: number, ev_add_payment_info: integer, cpe_add_payment_info: number, ev_add_address_info: integer, cpe_add_address_info: number, ev_subscribe: integer, cpe_subscribe: number, ev_custom_1: integer, cpe_custom_1: number, ev_custom_2: integer, cpe_custom_2: number, roas: number, purchase_revenue: number, app_installs: integer, app_cost_per_install: number, app_opens: integer, app_cost_per_app_open: number, app_sign_ups: integer, app_cost_per_sign_up: number, app_leads: integer, app_cost_per_lead: number, app_sign_ins: integer, app_cost_per_sign_in: number, app_trial_starts: integer, app_cost_per_trial_start: number, app_subscriptions: integer, app_cost_per_subscription: number, app_tutorial_completes: integer, app_cost_per_tutorial_complete: number, app_content_views: integer, app_cost_per_content_view: number, app_product_views: integer, app_cost_per_product_view: number, app_searches: integer, app_cost_per_search: number, app_scheduled_appointments: integer, app_cost_per_scheduled_appointment: number, app_add_to_cart: integer, app_cost_per_add_to_cart: number, app_cart_views: integer, app_cost_per_cart_view: number, app_add_to_wishlist: integer, app_cost_per_add_to_wishlist: number, app_checkout_starts: integer, app_cost_per_checkout_start: number, app_add_of_payment_info: integer, app_cost_per_add_of_payment_info: number, app_add_of_address_info: integer, app_cost_per_add_of_address_info: number, app_purchases: integer, app_cost_per_purchase: number, app_purchase_revenue: number, app_purchase_roas: number, app_first_deposits: integer, app_cost_per_first_deposit: number, app_deposits: integer, app_cost_per_deposit: number, app_deposit_revenue: number, app_deposit_roas: number, app_levels_achieved: integer, app_cost_per_level_achieved: number, app_custom_event_1: integer, app_cost_per_custom_event_1: number, app_custom_event_2: integer, app_cost_per_custom_event_2: number, campaign_id: string (uuid4) | null, bid: number | null, bid_type: string | null}>, count: integer, limit: integer, offset: integer}

---

## POST /report/advanced_report

**Schedule Report**

Schedule a Report

Operation ID: `schedule_report_report_advanced_report_post`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Request body** (`application/json`, required): object{start_date: string (date-time), end_date: string (date-time), timezone: string enum(account, UTC, America/New_York, America/Chicago, America/Denver, America/Los_Angeles), entity_level: string enum(campaign, adset, ad), adaccount_ids: array<string (uuid)>, campaign_ids: array<string (uuid)> | null, adset_ids: array<string (uuid)> | null, ad_ids: array<string (uuid)> | null, dimensions: array<string> | null, time_aggregation: string enum(hour, day, total) | null, limit: integer | null, attribution_window: string enum(1_day, 7_day, 14_day, 30_day) | null}

**Response 200** (`application/json`): object{scheduled_report_id: string (uuid4), status: string enum(PENDING, PROCESSING, READY, FAILED)}

---

## GET /report/advanced_report/{scheduled_report_id}

**Get Scheduled Report**

Get a Scheduled Report

Operation ID: `get_scheduled_report_report_advanced_report__scheduled_report_id__get`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| scheduled_report_id | path | string (uuid4) | yes |  |

**Response 200** (`application/json`): object{id: string (uuid4), status: string enum(PENDING, PROCESSING, READY, FAILED), result_url: string | null, download_access_until: string (date-time) | null, error_message: string | null, created_at: string (date-time), updated_at: string (date-time)}

---

## GET /report/campaign

**Get Campaign Report**

Get a Campaign Report

Operation ID: `get_campaign_report_report_campaign_get`

Scopes: BearerAuth: ; ApiKeyHeader: ; SignatureHeader: ; TimestampHeader: 

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| limit | query | integer |  | Limit _(default 10; minimum 1; maximum 20)_ |
| offset | query | integer |  | Offset _(default 0; minimum 0)_ |
| date_aggregation | query | string enum(HOUR, DAY, LIFETIME, TOTAL) |  | Granularity for the report data aggregation _(default "TOTAL")_ |
| adaccount_id | query | string (uuid) | yes | Ad account ID |
| campaign_ids | query | array<string (uuid)> \| null |  | List of campaign IDs |
| adset_ids | query | array<string (uuid)> \| null |  | List of Ad Set IDs |
| ad_ids | query | array<string (uuid)> \| null |  | List of Ad IDs |
| start_date | query | string \| null |  | Start date for the report (YYYY-MM-DDTHH:MM:SS) |
| end_date | query | string \| null |  | End date for the report (YYYY-MM-DDTHH:MM:SS) |
| timezone | query | string |  | Timezone used to interpret request datetimes and render report datetimes. Allowed values: account, UTC, America/New_York, America/Chicago, America/Denver, America/Los_Angeles _(default "account")_ |
| fields | query | array<string> \| null |  | List of performance fields to include in response. Use 'all' for all fields. _(default ["all"])_ |
| attribution_window | query | string enum(1_day, 7_day, 14_day, 30_day) \| null |  | Attribution window for conversion metrics (1_day, 7_day, 14_day, 30_day). If not provided, attribution metrics will not be included. |
| sample | query | boolean \| null |  | When set to true, returns sample fake data instead of real data. _(default false)_ |

**Response 200** (`application/json`): object{data: array<object{entity_id: string (uuid4), name: string, objective: string, status: string, entity_start_date: string (date-time) | null, entity_end_date: string (date-time) | null, start_date: string (date-time) | null, end_date: string (date-time) | null, timezone: string, lifetime_budget: number | null, daily_budget: number | null, frequency_cap_impressions: integer | null, frequency_cap_duration: integer | null, spend: number, impressions: integer, video_q1s: integer, video_q2s: integer, video_q3s: integer, video_completes: integer, cpcv: number, reach: integer, frequency: number} | object{entity_id: string (uuid4), name: string, objective: string, status: string, entity_start_date: string (date-time) | null, entity_end_date: string (date-time) | null, start_date: string (date-time) | null, end_date: string (date-time) | null, timezone: string, lifetime_budget: number | null, daily_budget: number | null, frequency_cap_impressions: integer | null, frequency_cap_duration: integer | null, spend: number, impressions: integer, video_q1s: integer, video_q2s: integer, video_q3s: integer, video_completes: integer, cpcv: number, reach: integer, frequency: number, attribution_window: string enum(1_day, 7_day, 14_day, 30_day), conversions: integer, cpa: number, ev_page_view: integer, cpe_page_view: number, ev_content_view: integer, cpe_content_view: number, ev_product_view: integer, cpe_product_view: number, ev_search: integer, cpe_search: number, ev_schedule_appt: integer, cpe_schedule_appt: number, ev_sign_up: integer, cpe_sign_up: number, ev_lead: integer, cpe_lead: number, ev_sign_in: integer, cpe_sign_in: number, ev_start_trial: integer, cpe_start_trial: number, ev_view_cart: integer, cpe_view_cart: number, ev_wish_list: integer, cpe_wish_list: number, ev_purchase: integer, cpe_purchase: number, ev_checkout_start: integer, cpe_checkout_start: number, ev_add_to_cart: integer, cpe_add_to_cart: number, ev_add_payment_info: integer, cpe_add_payment_info: number, ev_add_address_info: integer, cpe_add_address_info: number, ev_subscribe: integer, cpe_subscribe: number, ev_custom_1: integer, cpe_custom_1: number, ev_custom_2: integer, cpe_custom_2: number, roas: number, purchase_revenue: number, app_installs: integer, app_cost_per_install: number, app_opens: integer, app_cost_per_app_open: number, app_sign_ups: integer, app_cost_per_sign_up: number, app_leads: integer, app_cost_per_lead: number, app_sign_ins: integer, app_cost_per_sign_in: number, app_trial_starts: integer, app_cost_per_trial_start: number, app_subscriptions: integer, app_cost_per_subscription: number, app_tutorial_completes: integer, app_cost_per_tutorial_complete: number, app_content_views: integer, app_cost_per_content_view: number, app_product_views: integer, app_cost_per_product_view: number, app_searches: integer, app_cost_per_search: number, app_scheduled_appointments: integer, app_cost_per_scheduled_appointment: number, app_add_to_cart: integer, app_cost_per_add_to_cart: number, app_cart_views: integer, app_cost_per_cart_view: number, app_add_to_wishlist: integer, app_cost_per_add_to_wishlist: number, app_checkout_starts: integer, app_cost_per_checkout_start: number, app_add_of_payment_info: integer, app_cost_per_add_of_payment_info: number, app_add_of_address_info: integer, app_cost_per_add_of_address_info: number, app_purchases: integer, app_cost_per_purchase: number, app_purchase_revenue: number, app_purchase_roas: number, app_first_deposits: integer, app_cost_per_first_deposit: number, app_deposits: integer, app_cost_per_deposit: number, app_deposit_revenue: number, app_deposit_roas: number, app_levels_achieved: integer, app_cost_per_level_achieved: number, app_custom_event_1: integer, app_cost_per_custom_event_1: number, app_custom_event_2: integer, app_cost_per_custom_event_2: number}>, count: integer, limit: integer, offset: integer}

