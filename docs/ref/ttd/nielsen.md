# Nielsen

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 1

---

## GET /v3/nielsen/reportingcountries

Get the codes and names of countries that might be targeted using Nielsen.

Operation ID: `get-nielsen-reportingcountries`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_NielsenReportingCountry_`

---

## Schemas

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_NielsenReportingCountry_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`Nielsen_NielsenReportingCountry`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `Nielsen_NielsenReportingCountry`

| Field | Type | Required | Description |
|---|---|---|---|
| Code | string |  | The code of the country for which Nielsen reporting can/must be enabled. _(nullable)_ |
| DisplayName | string |  | The name of the country for which Nielsen reporting can/must be enabled. _(nullable)_ |

