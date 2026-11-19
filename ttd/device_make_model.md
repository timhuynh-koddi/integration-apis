# Device Make Model

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 1

---

## POST /v3/devicemakemodel/query

Get the device makes and models supported by The Trade Desk.

Operation ID: `post-devicemakemodel-query`

**Request body** (`application/json`, required): `DeviceMakeModel_DeviceMakeModelQuery`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_DeviceMakeModel_`

---

## Schemas

### `DeviceMakeModel_DeviceMakeModelQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| DeviceModelNameFilter | string |  | Filters the return devices to any device whose make, model or marketing name contain this value. _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_DeviceMakeModel_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`DeviceMakeModel_DeviceMakeModel`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `DeviceMakeModel_DeviceMakeModel`

| Field | Type | Required | Description |
|---|---|---|---|
| DeviceMakeId | integer (int32) |  | The ID associated with the devices make. |
| DeviceMakeName | string |  | The maker of the device. _(nullable)_ |
| DeviceModelId | integer (int32) |  | The ID associated with the devices model. |
| DeviceModelMarketingName | string |  | The marketing friendly name for the device if it exists. _(nullable)_ |
| DeviceModelName | string |  | The model of the device. _(nullable)_ |

