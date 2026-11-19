# Inventory Classification

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 3

---

## POST /v3/inventoryclassification/query

Retrieve a list of domains, apps, or app names that match the `SearchTerm`, along with their statuses. The list returns a maximum of 500 results.

Operation ID: `post-inventoryclassification-query`

**Request body** (`application/json`, required): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_InventoryClassificationSearch_post`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_InventoryClassificationDetail_`

---

## POST /v3/inventoryclassification/domainclasses/query

Retrieve a list of domain classes.  
**IMPORTANT**: Per our Marketplace Quality policies, we do not allow for the enumeration of this data. You can use this endpoint only to check a single entry, not to retrieve the entire list.  
Domain classes allow restricting spend on specific types of inventory unless the buyer explicitly opts in.  
This is a more transparent and flexible option than putting a site on an exclusion list.  
Classes are added to a domain semi-manually and can be set to block spend or to be used only for reporting purposes.  
If an domain has a class that is set to block spend, only ad groups that utilize domain targeting, seller targeting, or use a  
single-publisher private contract can bid on it.

Operation ID: `post-inventoryclassification-domainclasses-query`

**Request body** (`application/json`, required): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_DomainClassSearch`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_DomainClassDetail_`

---

## GET /v3/inventoryclassification/name/{domainClassId}

Get the identifier and name for a DomainClass based on identifier

Operation ID: `get-inventoryclassification-name-domainclassid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| domainClassId | path | string | yes |  |

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_IdName`

---

## Schemas

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_DomainClassSearch`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| SearchTerm | string |  | Specify a string (4-256 characters long) to search for in the `DomainClass.Name` property. _(maxLength 256)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_IdName`

| Field | Type | Required | Description |
|---|---|---|---|
| Id | string |  | The identifier for the object instance |
| Name | string |  | The name for the object instance |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_InventoryClassificationSearch_post`

| Field | Type | Required | Description |
|---|---|---|---|
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| SearchTerm | string | yes | Specify a domain ID, an app ID, or an app name to search for in the `DomainApp` and `AppName` properties. The search string must be 4 to 100 characters long. _(maxLength 100)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_DomainClassDetail_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_DomainClassDetail`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_InventoryClassificationDetail_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_InventoryClassificationDetail`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_DomainClassDetail`

| Field | Type | Required | Description |
|---|---|---|---|
| Description | string |  | The domain class description. _(nullable)_ |
| DomainClassId | integer (int32) |  | The domain class ID. |
| Name | string |  | The domain class name. _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_InventoryClassificationDetail`

| Field | Type | Required | Description |
|---|---|---|---|
| AdsTxtStatus | boolean |  | `AdsTxtStatus` indicates the state of ads.txt scanning for the returned `DomainApp`. A value of `true` means that a valid ads.txt file was scanned for this domain or app. A value of `false` indicates that an ads.txt file does not exist, was not valid, or we were unable to scan it. |
| AppName | string |  | If `IsApp` is `true`, this property will return the name of the app, if a name is available. If a name is not available, or `IsApp` is `false`, this property will be `null`. _(nullable)_ |
| DomainApp | string |  | The domain name or app id _(nullable)_ |
| DomainClasses | array<string> |  | A list of the `DomainClasses` assigned to this `DomainApp`.    \| `DomainClass` \| Description \|   \| :--- \| :--- \|   \| `Ad Arbitrage` \| Domains or apps where the majority of the site's traffic is ad-driven. \|   \| `Controversial Political` \| Domains or apps based on potentially controversial political subjects. \|   \| `Incentivised Traffic` \| Domains or apps that reward ad-viewers with cash or a currency that can be exchanged for cash. \|   \| `Rewarded Traffic` \| Domains or apps that reward ad-viewers with virtual currency that cannot be directly exchanged for cash. \| _(nullable)_ |
| IsApp | boolean |  | `IsApp` indicates whether the `DomainApp` is an app, rather than a domain. A value of `true` means that the `DomainApp` is an app. A value of `false` means that the `DomainApp` is a domain. |
| IsBlocked | boolean |  | `IsBlocked` indicates whether the `DomainClasses` assigned to the `DomainApp` result in blocking bidding on the associated domain or app. A value of `true` means that the `DomainApp` is blocked. A value of `false` means that the `DomainApp` is not blocked. |

