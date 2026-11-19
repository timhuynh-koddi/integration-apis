# Factual Proximity Design

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 1

---

## POST /v3/factualproximitydesign/query/partner

Get the FactualProximityDesigns associated with a partner.

Operation ID: `post-factualproximitydesign-query-partner`

**Request body** (`application/json`, required): `FactualProximityDesign_FactualProximityDesignQuery`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_FactualProximityDesign_`

---

## Schemas

### `FactualProximityDesign_FactualProximityDesignQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| PartnerId | string | yes | The ID of the Partner who owns the Factual Proximity Designs. |
| FactualDesignFilter | string |  | Filters the factual proximmity designs to any whose design name equals this value. _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_FactualProximityDesign_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`FactualProximityDesign_FactualProximityDesign`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `FactualProximityDesign_FactualProximityDesign`

| Field | Type | Required | Description |
|---|---|---|---|
| DesignGuid | string (uuid) |  | Factual's ID for the design. |
| DesignId | integer (int32) |  | The Trade Desk's ID for the design. |
| DesignName | string |  | The name of the design. _(nullable)_ |
| TargetingCodeId | integer (int32) |  | The ID associated with this designs targeting code. |
| TargetingCodeName | string |  | The name of the targeting code within the design. _(nullable)_ |

