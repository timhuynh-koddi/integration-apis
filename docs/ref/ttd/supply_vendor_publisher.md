# Supply Vendor Publisher

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 1

---

## GET /v3/supplyvendorpublisher/{supplyVendorId}/{supplyVendorPublisherId}

Get the supply vendor publisher information for given platform IDs.

Operation ID: `get-supplyvendorpublisher-supplyvendorid-supplyvendorpublisherid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| supplyVendorId | path | string | yes |  |
| supplyVendorPublisherId | path | string | yes |  |

**Response 200** (`application/json`): `SupplyVendorPublisher_SupplyVendorPublisher`

---

## Schemas

### `SupplyVendorPublisher_SupplyVendorPublisher`

| Field | Type | Required | Description |
|---|---|---|---|
| SellerDomain | string |  | The domain of the seller. _(nullable)_ |
| SellerName | string |  | The name of the seller. _(nullable)_ |
| SupplyVendorId | string |  | The platform ID of the supply vendor. |
| SupplyVendorName | string |  | The name of the supply vendor. _(nullable)_ |
| SupplyVendorPublisherId | string |  | The platform ID of the supply vendor publisher. |

