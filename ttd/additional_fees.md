# Additional Fees

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 6

---

## POST /v3/additionalfees/changelog

Returns a list of changes to the additional fee card made (or scheduled to be made) between the start and end dates for the given owner type/id. Each additional fee card in the returned list represents the card as it was/is/will be between the start and end dates on that card.

Operation ID: `post-additionalfees-changelog`

**Request body** (`application/json`, required): `PassThroughFee_AdditionalFeeCardChangelogQuery`

**Response 200** (`application/json`): array<`PassThroughFee_AdditionalFeeCard`>

---

## POST /v3/additionalfees

Creates an additional fee card with the given properties, including a list of fees to be applied, on the given owner type/id.  
Note that all additional fee card creates/updates must be scheduled at least one hour in the future unless the fee rate card is created within two minutes of campaign/ad group creation.

Operation ID: `post-additionalfees`

**Request body** (`application/json`, required): `PassThroughFee_AdditionalFeeCard`

**Response 200** (`application/json`): `PassThroughFee_AdditionalFeeCard`

---

## PUT /v3/additionalfees

Updates the card with the given owner type/id with the given fees list, scheduled to become active at the given start time. Overwrites any and all fees with the given fee list at that start time. There can only be one pending update at any given time - using this method will overwrite any other pending updates for the given owner type/id, including pending stoppages/enddates. Note that all additional fee card creates/updates must be scheduled at least one hour in the future.

Operation ID: `put-additionalfees`

**Request body** (`application/json`, required): `PassThroughFee_AdditionalFeeCard`

**Response 200** (`application/json`): `PassThroughFee_AdditionalFeeCard`

---

## GET /v3/additionalfees/{ownerType}/{ownerId}

Gets the current fee card for the given owner type/id. Note: in some cases, there will be no current fee card. Use the additionalfees/changelog endpoint instead to view future/past fee cards for this owner type/id.

Operation ID: `get-additionalfees-ownertype-ownerid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ownerType | path | string | yes | The type of owner. Either "adgroup" or "campaign". |
| ownerId | path | string | yes | The ID of the owner. Used in conjunction with a type to look up the current card (if one exists) being applied to this entity. |

**Response 200** (`application/json`): `PassThroughFee_AdditionalFeeCard`

---

## POST /v3/additionalfees/stop

Ends the card at the end date given. Note: if any updates exist after the supplied end date, they will be deleted. This cannot be undone, so only use this endpoint when you're sure you want the card to end forever. Otherwise, use update and pass in an empty list of fees (nullifying the effect of the fee card). Note that all additional fee card ends must be scheduled at least one hour in the future.

Operation ID: `post-additionalfees-stop`

**Request body** (`application/json`, required): `PassThroughFee_AdditionalFeeCardStopQuery`

**Response 200** (`application/json`): `PassThroughFee_AdditionalFeeCard`

---

## GET /v3/additionalfees/defaultfeecard/{advertiserId}

Returns the default fee card for the partner, useful for populating the InitialFeeCard property on the create campaign endpoint.

Operation ID: `get-additionalfees-defaultfeecard-advertiserid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string | yes | The platform ID of the advertiser for which to get the default fee settings. |

**Response 200** (`application/json`): `PassThroughFee_AdditionalFeeCard`

---

## Schemas

### `PassThroughFee_AdditionalFeeCard`

| Field | Type | Required | Description |
|---|---|---|---|
| Fees | array<`PassThroughFee_AdditionalFeeQuery`> |  | The collection of fees to be applied to the entity as of the start date. _(nullable)_ |
| OwnerId | string |  | The ID of the entity that owns the additional fee card. _(nullable)_ |
| OwnerType | string |  | The type of the entity that owns the additional fee card ("campaign" or "adgroup"). _(nullable)_ |
| StartDateUtc | string (date-time) |  | Start Date in UTC. The date and time at which the attached fees will take effect. New fee cards and updates to existing fee cards must have a start date at least an hour into the future. |

### `PassThroughFee_AdditionalFeeCardChangelogQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| EndDateUtc | string (date-time) |  | End Date in UTC.  Include to only return changes to the fee card before this date and time. |
| OwnerId | string |  | The ID of the entity that owns the additional fee card. _(nullable)_ |
| OwnerType | string |  | The type of the entity that owns the additional fee card ("campaign" or "adgroup"). _(nullable)_ |
| StartDateUtc | string (date-time) |  | Start Date in UTC. Include to only return changes to the fee card after this date and time. |

### `PassThroughFee_AdditionalFeeCardStopQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| EndDateUtc | string (date-time) |  | End Date in UTC.  The date and time to end the current fee card. |
| OwnerId | string |  | The ID of the entity that owns the additional fee card. _(nullable)_ |
| OwnerType | string |  | The type of the entity that owns the additional fee card ("campaign" or "adgroup"). _(nullable)_ |

### `PassThroughFee_AdditionalFeeQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| Amount | number (double) |  | The fee amount to be charged (according to the type of fee). Must be nonzero and positive.   If FeeType is one of MediaCostPercentage, DataCostPercentage, MediaPlusDataCostPercentage or PartnerCostPercentage then a value greater than 0 and less than 100.   If FeeType is one of FeeCPM or RateCPM then CPM in advertiser currency. |
| Description | string |  | The description or title of the fee (shown in the UI). _(nullable)_ |
| FeeType | `PassThroughFee_AdditionalFeeType` |  | The fee type that determines how and when to calculate a charge. Fee types include MediaCostPercentage, DataCostPercentage, MediaPlusDataCostPercentage, PartnerCostPercentage, FeeCPM and RateCPM. A flat rate card can only have one fee with fee type RateCPM. |

### `PassThroughFee_AdditionalFeeType`

Type: string enum(None, MediaCostPercentage, DataCostPercentage, MediaPlusDataCostPercentage, PartnerCostPercentage, FeeCPM, RateCPM, RateCPC, CustomPMP_PartnerCostPercentage, MediaDataFeeFeaturesCostPercentage, PartnerDataCostPercentage)

