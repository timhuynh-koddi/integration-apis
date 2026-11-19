# Overview

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 2

---

## GET /v3/overview/partner/{partnerId}

Get a partner overview. A partner overview returns the hierarchy of descendant relationships and essential properties for those descendants.  
The overview endpoints reduce API payload and simplify the processes of hierarchy traversal and name or identifier retrieval.  
In alignment with lightweight processing, these overviews do not contain the full object detail for each descendant.  
Use the GET endpoints designed for the descendant entities to retrieve full detail.

Operation ID: `get-overview-partner-partnerid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| partnerId | path | string | yes |  |

**Response 200** (`application/json`): `Overviews_PartnerOverview`

---

## GET /v3/overview/advertiser/{advertiserId}

Get an advertiser overview. An advertiser overview returns the hierarchy of descendant relationships and essential properties for those descendants.  
The overview endpoints reduce API payload and simplify the processes of hierarchy traversal and name or identifier retrieval.  
In alignment with lightweight processing, these overviews do not contain the full object detail for each descendant.  
Use the GET endpoints designed for the descendant entities to retrieve full detail.

Operation ID: `get-overview-advertiser-advertiserid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string | yes |  |

**Response 200** (`application/json`): `Overviews_AdvertiserOverview`

---

## Schemas

### `Overviews_AdvertiserOverview`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The platform ID of the advertiser. |
| AdvertiserName | string |  | The name of the Advertiser. |
| Campaigns | array<`Overviews_CampaignOverview`> |  | Overviews of the Campaigns owned by this Advertiser. |
| Creatives | array<`Overviews_CreativeOverview`> |  | Overviews of the Creatives owned by this Advertiser. |
| Description | string |  | The description of the Advertiser. _(nullable)_ |

### `Overviews_PartnerOverview`

| Field | Type | Required | Description |
|---|---|---|---|
| Advertisers | array<`Overviews_AdvertiserOverview`> |  | Overviews of the Advertisers owned by the Partner. |
| PartnerId | string |  | The ID of the Partner. |
| PartnerName | string |  | The name of the Partner. |

### `Overviews_CampaignOverview`

| Field | Type | Required | Description |
|---|---|---|---|
| AdGroups | array<`Overviews_AdGroupOverview`> |  | Overviews of the Ad Groups within the Campaign. |
| Availability | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability` |  | Availability state of the Campaign. |
| CampaignId | string |  | The ID of the Campaign. |
| CampaignName | string |  | The name of the Campaign. |
| Description | string |  | The description of the Campaign. _(nullable)_ |
| EnddateUTC | string (date-time) |  | The date and time (in UTC) that the Campaign should stop spending if it has not yet exhausted its budget. _(nullable)_ |
| StartDateUTC | string (date-time) |  | The date and time (in UTC) that the Campaign should start spending. |

### `Overviews_CreativeOverview`

| Field | Type | Required | Description |
|---|---|---|---|
| CreativeId | string |  | The ID of the Creative. |
| CreativeName | string |  | The name of the Creative. |
| Description | string |  | The description of the Creative. _(nullable)_ |

### `Overviews_AdGroupOverview`

| Field | Type | Required | Description |
|---|---|---|---|
| AdGroupId | string |  | The ID of the Ad Group. |
| AdGroupName | string |  | The name of the Ad Group. |
| Availability | `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability` |  | Whether the Ad Group is active and available for normal operation or archived and hidden from normal view. |
| Creatives | array<`Overviews_CreativeOverview`> |  | Overviews of the Creatives used by this Ad Group. |
| Description | string |  | The description of the Ad Group. _(nullable)_ |
| IsEnabled | boolean |  | Whether the Ad Group is enabled to spend. If this is not specified on create, the Ad Group will be disabled until it is explicitly enabled. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Availability`

Type: string enum(Available, Archived)

