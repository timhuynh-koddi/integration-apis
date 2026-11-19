# Custom Label

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 3

---

## GET /v3/label/{customLabelId}

Gets a Custom Label.

Operation ID: `get-label-customlabelid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| customLabelId | path | string | yes |  |

**Response 200** (`application/json`): `CustomLabel_CustomLabel`

---

## POST /v3/label/query/partner

Gets all Custom Labels for a Partner.

Operation ID: `post-label-query-partner`

**Request body** (`application/json`, required): `CustomLabel_CustomLabelQueryForPartner`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_CustomLabel_`

---

## POST /v3/label

Creates a new Custom Label.  
Once added, these labels can be applied to Advertisers, Campaigns, and Ad Groups via their respective POST/PUT endpoints.

Operation ID: `post-label`

**Request body** (`application/json`, required): `CustomLabel_CustomLabel_post`

**Response 200** (`application/json`): `CustomLabel_CustomLabel`

---

## Schemas

### `CustomLabel_CustomLabel`

| Field | Type | Required | Description |
|---|---|---|---|
| CustomLabelId | string |  | The ID of the label. _(nullable)_ |
| LabelName | string |  | The label string. The maximum character length is 40. _(maxLength 40)_ |
| PartnerId | string |  | The ID of the partner with which the label is associated. _(nullable)_ |

### `CustomLabel_CustomLabelQueryForPartner`

| Field | Type | Required | Description |
|---|---|---|---|
| PartnerId | string |  | The partner ID to query. If not specified, the user's primary partner ID will be used. _(nullable)_ |
| SearchTerms | array<string> |  | A list of search terms by which to filter the returned Labels. At least one of terms must be matched in the name in order for a Label to match.   If not specified, empty, or null, this property is ignored _(nullable)_ |

### `CustomLabel_CustomLabel_post`

| Field | Type | Required | Description |
|---|---|---|---|
| LabelName | string | yes | The label string. The maximum character length is 40. _(maxLength 40)_ |
| CustomLabelId | string |  | The ID of the label. _(nullable)_ |
| PartnerId | string |  | The ID of the partner with which the label is associated. _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_CustomLabel_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`CustomLabel_CustomLabel`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

