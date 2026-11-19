# Campaign Flight

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 4

---

## POST /v3/campaignflight

Create a new campaign flight.  
IMPORTANT: You may not use this API to add flights to campaigns that have no flights defined.

Operation ID: `post-campaignflight`

**Request body** (`application/json`, required): `CampaignFlight_CampaignFlight_post`

**Response 200** (`application/json`): `CampaignFlight_CampaignFlight`

---

## PUT /v3/campaignflight

Update an existing campaign flight.  
Here's what you need to know about updating campaign flights:   
 - You may not modify a past flight (with the end date set to a date in the past).  
 - You may not set the flight end date to a date in the past.  
 - You may not change the start date of a flight that has started spending.

Operation ID: `put-campaignflight`

**Request body** (`application/json`, required): `CampaignFlight_CampaignFlight_put`

**Response 200** (`application/json`): `CampaignFlight_CampaignFlight`

---

## GET /v3/campaignflight/{campaignFlightId}

Get an existing campaign flight for the specified ID.  
**TIP**: Using the equivalent campaign flight GraphQL query, you can enhance performance, customize criteria, and, if needed, expand your search across multiple campaigns.   
For details, see [Campaign Flights](/v3/portal/api/doc/CampaignQueryExamplesGQL#campaign-flights).

Operation ID: `get-campaignflight-campaignflightid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| campaignFlightId | path | integer (int64) | yes | The ID of the campaign to retrieve. |

**Response 200** (`application/json`): `CampaignFlight_CampaignFlight`

---

## DELETE /v3/campaignflight/{campaignFlightId}

Delete an existing campaign flight for the specified ID.  
Here's what you need to know about deleting campaign flights:    
 -	The API will only permit deleting flights that are in the past if it is also the last flight defined for the campaign.  
 -	You may not delete the flight if it is the only flight in the campaign.  
 -	You may not delete a flight if the flight has already started spending.   
 -	You may not delete a past flight (with the end date set to a date in the past).

Operation ID: `delete-campaignflight-campaignflightid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| campaignFlightId | path | integer (int64) | yes | The ID of the campaign to delete. |

**Response 200**: OK

---

## Schemas

### `CampaignFlight_CampaignFlight`

| Field | Type | Required | Description |
|---|---|---|---|
| BudgetInAdvertiserCurrency | number (double) |  | The maximum amount the campaign flight may spend. This must be in the currency of the advertiser that owns the campaign. |
| BudgetInImpressions | integer (int64) |  | The maximum amount of impressions the campaign flight should buy. _(nullable)_ |
| CampaignFlightId | integer (int64) |  | The ID of the campaign flight. Ignored on create, as the ID is assigned and returned by The Trade Desk.   **IMPORTANT**: When cloning the campaign, you must provide the ID of the flight if you want the flight to be cloned. |
| CampaignId | string |  | The ID of the Campaign that owns this campaign flight.   This must be specified while adding a Flight for a campaign using the campaign flight API. |
| DailyTargetInAdvertiserCurrency | number (double) |  | The total amount the campaign flight should spend in a single day, if possible. If you do not want to limit the daily spend, you may set it to null.   This must be in the currency of the advertiser that owns the campaign. _(nullable)_ |
| DailyTargetInImpressions | integer (int64) |  | The total number of impressions the campaign flight should buy in a single day, if possible. If you do not want to limit the daily impressions bought, you may set it to null. _(nullable)_ |
| EndDateExclusiveUTC | string (date-time) |  | The date and time (in UTC) when the campaign flight is to stop spending if it has not yet exhausted its budget. To create or update a campaign flight, you may not set this property value to a date in the past. _(nullable)_ |
| StartDateInclusiveUTC | string (date-time) |  | The date and time (in UTC) when the campaign flight is to start spending. |

### `CampaignFlight_CampaignFlight_post`

| Field | Type | Required | Description |
|---|---|---|---|
| BudgetInAdvertiserCurrency | number (double) | yes | The maximum amount the campaign flight may spend. This must be in the currency of the advertiser that owns the campaign. |
| StartDateInclusiveUTC | string (date-time) | yes | The date and time (in UTC) when the campaign flight is to start spending. |
| BudgetInImpressions | integer (int64) |  | The maximum amount of impressions the campaign flight should buy. _(nullable)_ |
| CampaignId | string |  | The ID of the Campaign that owns this campaign flight.   This must be specified while adding a Flight for a campaign using the campaign flight API. |
| DailyTargetInAdvertiserCurrency | number (double) |  | The total amount the campaign flight should spend in a single day, if possible. If you do not want to limit the daily spend, you may set it to null.   This must be in the currency of the advertiser that owns the campaign. _(nullable)_ |
| DailyTargetInImpressions | integer (int64) |  | The total number of impressions the campaign flight should buy in a single day, if possible. If you do not want to limit the daily impressions bought, you may set it to null. _(nullable)_ |
| EndDateExclusiveUTC | string (date-time) |  | The date and time (in UTC) when the campaign flight is to stop spending if it has not yet exhausted its budget. To create or update a campaign flight, you may not set this property value to a date in the past. _(nullable)_ |

### `CampaignFlight_CampaignFlight_put`

| Field | Type | Required | Description |
|---|---|---|---|
| CampaignFlightId | integer (int64) | yes | The ID of the campaign flight. Ignored on create, as the ID is assigned and returned by The Trade Desk.   **IMPORTANT**: When cloning the campaign, you must provide the ID of the flight if you want the flight to be cloned. |
| BudgetInAdvertiserCurrency | number (double) |  | The maximum amount the campaign flight may spend. This must be in the currency of the advertiser that owns the campaign. |
| BudgetInImpressions | integer (int64) |  | The maximum amount of impressions the campaign flight should buy. _(nullable)_ |
| CampaignId | string |  | The ID of the Campaign that owns this campaign flight.   This must be specified while adding a Flight for a campaign using the campaign flight API. |
| DailyTargetInAdvertiserCurrency | number (double) |  | The total amount the campaign flight should spend in a single day, if possible. If you do not want to limit the daily spend, you may set it to null.   This must be in the currency of the advertiser that owns the campaign. _(nullable)_ |
| DailyTargetInImpressions | integer (int64) |  | The total number of impressions the campaign flight should buy in a single day, if possible. If you do not want to limit the daily impressions bought, you may set it to null. _(nullable)_ |
| EndDateExclusiveUTC | string (date-time) |  | The date and time (in UTC) when the campaign flight is to stop spending if it has not yet exhausted its budget. To create or update a campaign flight, you may not set this property value to a date in the past. _(nullable)_ |
| StartDateInclusiveUTC | string (date-time) |  | The date and time (in UTC) when the campaign flight is to start spending. |

