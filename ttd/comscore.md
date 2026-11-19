# Comscore

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 1

---

## GET /v3/comscore/populationdemographicmembers

Get the populations and the demographic members within them that might be targeted using Comscore.

Operation ID: `get-comscore-populationdemographicmembers`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_ComscorePopulation_`

---

## Schemas

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_ComscorePopulation_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`Comscore_ComscorePopulation`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `Comscore_ComscorePopulation`

| Field | Type | Required | Description |
|---|---|---|---|
| ComscoreDemographicMembers | array<`Comscore_ComscoreDemographicMember`> |  | The list of the demographic segment within the Comscore population on which Comscore metrics must/can be reported.   At least one demographic member must be specified while enabling Comscore reporting on Ad Groups. _(nullable)_ |
| Id | integer (int32) |  | The Id of the population across which Comscore metrics must/can be reported. |
| Name | string |  | The descriptive name of the Comscore population. _(nullable)_ |

### `Comscore_ComscoreDemographicMember`

| Field | Type | Required | Description |
|---|---|---|---|
| Id | integer (int32) |  | The Comscore Id of the demographic member.   Use this Id when associating demographic members with Comscore settings in AdGroups. |
| IsMobileDemographic | boolean |  | Indicate if the Comscore Id belongs to Mobile or PC.   True: Mobile, False: PC |
| Name | string |  | The descriptive name of the Comscore demographic member. _(nullable)_ |

