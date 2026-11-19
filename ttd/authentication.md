# Authentication

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 1

---

## POST /v3/authentication

Create and retrieve a short-lived API token with an expiration of up to 24 hours (1440 minutes). To create a long-lived API token, use the interactive UI experience available through the [Manage API Tokens](/v3/tokens) option under the User Profile menu at the top-right of the Developer Portal.  
For details about API token management, see [Authentication](/v3/portal/api/doc/Authentication).

Operation ID: `post-authentication`

**Request body** (`application/json`, required): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_TokenRequest_post`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_AuthToken`

---

## Schemas

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_AuthToken`

Contains an authentication token that can be used to access restricted API methods as the user who obtained the token.

| Field | Type | Required | Description |
|---|---|---|---|
| Token | string |  | The authentication token |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_TokenRequest_post`

The information necessary to grant a short-lived authentication token.

| Field | Type | Required | Description |
|---|---|---|---|
| Login | string | yes | The platform username of the user requesting the token. |
| Password | string | yes | The platform password of the user requesting the token. |
| TokenExpirationInMinutes | integer (int32) |  | The token lifetime in minutes. If this parameter is not set, the expriration will be set to `1440` (24 hours) by default. |

