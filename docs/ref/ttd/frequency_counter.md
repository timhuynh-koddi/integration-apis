# Frequency Counter

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 4

---

## GET /v3/frequency/counter/{counterId}

Gets the frequency counter definition

Operation ID: `get-frequency-counter-counterid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| counterId | path | string | yes |  |

**Response 200** (`application/json`): `Frequency_FrequencyCounter`

---

## POST /v3/frequency/counter

Create a frequency counter, return the created counter.

Operation ID: `post-frequency-counter`

**Request body** (`application/json`, required): `Frequency_FrequencyCounter_post`

**Response 200** (`application/json`): `Frequency_FrequencyCounter`

---

## PUT /v3/frequency/counter

Update a frequency counter, returning the updated counter.

Operation ID: `put-frequency-counter`

**Request body** (`application/json`, required): `Frequency_FrequencyCounter_put`

**Response 200** (`application/json`): `Frequency_FrequencyCounter`

---

## POST /v3/frequency/counter/query

Retrieve a paged, sorted, and filterable list of frequency counters for a specific advertiser or partner.

Operation ID: `post-frequency-counter-query`

**Request body** (`application/json`, required): `Frequency_FrequencyCounterQuery_post`

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_FrequencyCounter_`

---

## Schemas

### `Frequency_FrequencyCounter`

A frequency counter defines the framework for tracking the number of times a user is served an ad during a specific period of time.

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The platform ID of the advertiser that owns the counter. This property is required when creating a counter if no `PartnerId` value is provided. If you don't see the `PartnerId` property, contact your Account Manager for persmissions.        IMPORTANT: After the counter is created, you cannot update this value. Attempts to update the value will be ignored and return a success response. |
| CounterAttribute | `Frequency_FrequencyCounterAttribute` |  | An optional flag that you can set to configure the counter for special use. The default value is `None`. |
| CounterId | string |  | The platform ID for the frequency counter.    If provided when creating a counter, this value is ignored. On update, this property is required. |
| CounterName | string |  | The counter name.   **IMPORTANT**: If provided, the name must contain only whitespace and alphanumeric characters. _(maxLength 512)_ |
| ResetIntervalInMinutes | integer (int32) |  | The period of time (in minutes) during which the counter tracks a user's frequency count before resetting the count to 0.   For example, if a user received their first increment at 12:00 and this property was set to `5`, the counter will track frequency from 12:00 through 12:05 and then reset the count to 0. The next time a user appears, for example, at 15:15, the counter would track frequency from 15:15-15:20 and then reset the count to 0 again. See also [Frequency](/v3/portal/api/doc/Frequency).   **IMPORTANT**: This property value must be greater than 0. |

### `Frequency_FrequencyCounterQuery_post`

| Field | Type | Required | Description |
|---|---|---|---|
| EntityId | string | yes | Specify the ID of the advertiser or partner for which to retrieve restricted Frequency v2 counters. |
| PageSize | integer (int32) | yes | The size of the page requested. If there are fewer items on the current page than the `PageSize`, only those items will be returned.   - A `PageSize` of `null` means all available elements.   - A `PageSize` of 0 means zero elements (useful if you just want item counts). In this case, the `PageStartIndex` is ignored.   - The recommended minimum and maximum values for this property are 100 and 1000, respectively.   For example:   - If there are 700 items, `PageStartIndex` is 0, and `PageSize` is 1000, only the 700 existing items will be returned.   - If there are 1000 items, `PageStartIndex` is 500, and `PageSize` is 500, the last 500 elements will be returned. _(nullable)_ |
| PageStartIndex | integer (int32) | yes | The zero-based index into the set at which to start the requested page. If you want the first page, this should be 0. If, for example, you want a page starting at the 13th element, this should be 12.   If `PageStartIndex` is equal to or greater than the number of items matching your filters, no items will be returned.   - To find out how many items there are, request the first page at your desired `PageSize`, and the result will tell you how many items in the set match your filters and the total number of items in the set.   - To find out when you've received the last page, check if the sum of `PageStartIndex` + items returned is greater than or equal to items matching filters. If it is, this is the last page (or you've requested an index beyond the last page). |
| EntityType | `Frequency_OwnerEntity` |  | The type of the entity specified in the `EntityId` property.   The default value is `Advertiser`. If the `EntityId` value is a partner ID, specify `Partner` here. |

### `Frequency_FrequencyCounter_post`

A frequency counter defines the framework for tracking the number of times a user is served an ad during a specific period of time.

| Field | Type | Required | Description |
|---|---|---|---|
| ResetIntervalInMinutes | integer (int32) | yes | The period of time (in minutes) during which the counter tracks a user's frequency count before resetting the count to 0.   For example, if a user received their first increment at 12:00 and this property was set to `5`, the counter will track frequency from 12:00 through 12:05 and then reset the count to 0. The next time a user appears, for example, at 15:15, the counter would track frequency from 15:15-15:20 and then reset the count to 0 again. See also [Frequency](/v3/portal/api/doc/Frequency).   **IMPORTANT**: This property value must be greater than 0. |
| AdvertiserId | string |  | The platform ID of the advertiser that owns the counter. This property is required when creating a counter if no `PartnerId` value is provided. If you don't see the `PartnerId` property, contact your Account Manager for persmissions.        IMPORTANT: After the counter is created, you cannot update this value. Attempts to update the value will be ignored and return a success response. |
| CounterAttribute | `Frequency_FrequencyCounterAttribute` |  | An optional flag that you can set to configure the counter for special use. The default value is `None`. |
| CounterId | string |  | The platform ID for the frequency counter.    If provided when creating a counter, this value is ignored. On update, this property is required. |
| CounterName | string |  | The counter name.   **IMPORTANT**: If provided, the name must contain only whitespace and alphanumeric characters. _(maxLength 512)_ |

### `Frequency_FrequencyCounter_put`

A frequency counter defines the framework for tracking the number of times a user is served an ad during a specific period of time.

| Field | Type | Required | Description |
|---|---|---|---|
| CounterId | string | yes | The platform ID for the frequency counter.    If provided when creating a counter, this value is ignored. On update, this property is required. |
| AdvertiserId | string |  | The platform ID of the advertiser that owns the counter. This property is required when creating a counter if no `PartnerId` value is provided. If you don't see the `PartnerId` property, contact your Account Manager for persmissions.        IMPORTANT: After the counter is created, you cannot update this value. Attempts to update the value will be ignored and return a success response. |
| CounterAttribute | `Frequency_FrequencyCounterAttribute` |  | An optional flag that you can set to configure the counter for special use. The default value is `None`. |
| CounterName | string |  | The counter name.   **IMPORTANT**: If provided, the name must contain only whitespace and alphanumeric characters. _(maxLength 512)_ |
| ResetIntervalInMinutes | integer (int32) |  | The period of time (in minutes) during which the counter tracks a user's frequency count before resetting the count to 0.   For example, if a user received their first increment at 12:00 and this property was set to `5`, the counter will track frequency from 12:00 through 12:05 and then reset the count to 0. The next time a user appears, for example, at 15:15, the counter would track frequency from 15:15-15:20 and then reset the count to 0 again. See also [Frequency](/v3/portal/api/doc/Frequency).   **IMPORTANT**: This property value must be greater than 0. |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_Page_FrequencyCounter_`

| Field | Type | Required | Description |
|---|---|---|---|
| Result | array<`Frequency_FrequencyCounter`> |  | The objects that match the request. |
| ResultCount | integer (int64) |  | The number of objects returned in the result. |
| TotalFilteredCount | integer (int64) |  | The total number of objects available that match the request filters. If not present, then this property is not supported by this interface. |
| TotalUnfilteredCount | integer (int64) |  | The total number of objects available. If not present, then this property is not supported by this interface. |

### `Frequency_FrequencyCounterAttribute`

Type: string enum(None, AllowUIGroupConfiguration, RestrictedFrequencyGroup, RestrictedCampaignInterval, RestrictedCampaignLifetime, CrossDSP)

### `Frequency_OwnerEntity`

Type: string enum(Advertiser, Partner)

