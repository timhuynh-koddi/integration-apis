# Weather Condition

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 1

---

## GET /v3/weathercondition/query/available

Get all the available weather condition.

Operation ID: `get-weathercondition-query-available`

**Response 200** (`application/json`): array<`DimensionalBidding_WeatherCondition`>

---

## Schemas

### `DimensionalBidding_WeatherCondition`

| Field | Type | Required | Description |
|---|---|---|---|
| ConditionName | string |  | The name of the weather condition. _(nullable)_ |
| WeatherConditionId | integer (int32) |  | The Id of the weather condition.  Use this id when targeting weather condition dimension. |

