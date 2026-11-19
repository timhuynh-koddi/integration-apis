# Interest Targeting

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 1

---

## GET /v3/interesttargeting/query

Get the codes and names of targetable Interest Categories.

Operation ID: `get-interesttargeting-query`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_TargetInterestSettings_`

---

## Schemas

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_TargetInterestSettings_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`InterestTargeting_TargetInterestSettings`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `InterestTargeting_TargetInterestSettings`

| Field | Type | Required | Description |
|---|---|---|---|
| CategoryId | string |  | The ID of the interest category. The [GET /interesttargeting/query](/v3/portal/api/ref/get-interesttargeting-query) endpoint returns a list of all interest category IDs. |
| CategoryName | string |  | The name of the interest category. The [GET /interesttargeting/query](/v3/portal/api/ref/get-interesttargeting-query) endpoint returns a list of all interest category names. _(nullable)_ |

