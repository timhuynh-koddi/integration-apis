# Mobile Application

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 1

---

## GET /v3/application/name/{applicationId}

Get the mobile application and platform names for the specified ID.

Operation ID: `get-application-name-applicationid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| applicationId | path | string | yes | The ID of the mobile application for which to retrieve the information. |

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_MobileApplication`

---

## Schemas

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_MobileApplication`

| Field | Type | Required | Description |
|---|---|---|---|
| Id | string |  | The mobile application ID. _(nullable)_ |
| MobilePlatform | `TheTradeDesk.AdPlatform.Shared.DB.Provisioning_MobilePlatform` |  | The mobile application platform name. |
| Name | string |  | The mobile application name. _(nullable)_ |

### `TheTradeDesk.AdPlatform.Shared.DB.Provisioning_MobilePlatform`

Type: string enum(None, Apple, Google, Tencent, Roku, Amazon, Firetv, tvOS, Samsung, LGTV, Vizio, GoogleTV, SamsungGalaxy)

