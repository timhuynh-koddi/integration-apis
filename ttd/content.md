# Content

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 2

---

## GET /v3/content/genre/query

Retrieve a list of all available content genres.

Operation ID: `get-content-genre-query`

**Response 200** (`application/json`): array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_ContentGenreDetail`>

---

## GET /v3/content/rating/query

Retrieve a list of all available content ratings.

Operation ID: `get-content-rating-query`

**Response 200** (`application/json`): array<`TheTradeDesk.AdPlatform.API.PublicAPI.Models_ContentRatingDetail`>

---

## Schemas

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_ContentGenreDetail`

| Field | Type | Required | Description |
|---|---|---|---|
| GenreId | string |  | The ID of the content genre. _(nullable)_ |
| GenreName | string |  | The name of the content genre. _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_ContentRatingDetail`

| Field | Type | Required | Description |
|---|---|---|---|
| RatingId | string |  | The ID of the content rating. _(nullable)_ |
| RatingName | string |  | The name of the content rating. _(nullable)_ |

