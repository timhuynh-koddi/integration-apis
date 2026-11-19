# Ad Units

> Source: Google Ad Manager API (beta, REST v1) Discovery document (https://admanager.googleapis.com/$discovery/rest?version=v1, revision 20261118); release notes https://developers.google.com/ad-manager/api/beta/docs/release-notes. Fetched 2026-11-19. Resource names have the form `networks/{networkCode}/...`.

Used by koddi-offsite via: SOAP `InventoryService.getAdUnitsByStatement`; PQL `Ad_Unit`.

---

## networks.adUnits.batchArchive

`POST https://admanager.googleapis.com/v1/{+parent}/adUnits:batchArchive`

Archives a list of `AdUnit` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. Format: `networks/{network_code}` |

**Request body**: `BatchArchiveAdUnitsRequest`

**Response**: `BatchArchiveAdUnitsResponse`

---

## networks.adUnits.get

`GET https://admanager.googleapis.com/v1/{+name}`

Retrieves an `AdUnit` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The resource name of the AdUnit. Format: `networks/{network_code}/adUnits/{ad_unit_id}` |

**Response**: `AdUnit`

---

## networks.adUnits.batchActivate

`POST https://admanager.googleapis.com/v1/{+parent}/adUnits:batchActivate`

Batch activates `AdUnit` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. Format: `networks/{network_code}` |

**Request body**: `BatchActivateAdUnitsRequest`

**Response**: `BatchActivateAdUnitsResponse`

---

## networks.adUnits.patch

`PATCH https://admanager.googleapis.com/v1/{+name}`

Updates an `AdUnit` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Identifier. The resource name of the AdUnit. Format: `networks/{network_code}/adUnits/{ad_unit_id}` |
| updateMask | query | string (google-fieldmask) |  | Optional. The list of fields to update. |

**Request body**: `AdUnit`

**Response**: `AdUnit`

---

## networks.adUnits.batchDeactivate

`POST https://admanager.googleapis.com/v1/{+parent}/adUnits:batchDeactivate`

Deactivates a list of `AdUnit` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. Format: `networks/{network_code}` |

**Request body**: `BatchDeactivateAdUnitsRequest`

**Response**: `BatchDeactivateAdUnitsResponse`

---

## networks.adUnits.batchCreate

`POST https://admanager.googleapis.com/v1/{+parent}/adUnits:batchCreate`

Creates `AdUnit` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `AdUnits` will be created. Format: `networks/{network_code}` The parent field in the CreateAdUnitRequest must match this field. |

**Request body**: `BatchCreateAdUnitsRequest`

**Response**: `BatchCreateAdUnitsResponse`

---

## networks.adUnits.batchUpdate

`POST https://admanager.googleapis.com/v1/{+parent}/adUnits:batchUpdate`

Batch updates `AdUnit` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `AdUnits` will be updated. Format: `networks/{network_code}` The parent field in the UpdateAdUnitRequest must match this field. |

**Request body**: `BatchUpdateAdUnitsRequest`

**Response**: `BatchUpdateAdUnitsResponse`

---

## networks.adUnits.create

`POST https://admanager.googleapis.com/v1/{+parent}/adUnits`

Creates an `AdUnit` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where this `AdUnit` will be created. Format: `networks/{network_code}` |

**Request body**: `AdUnit`

**Response**: `AdUnit`

---

## networks.adUnits.list

`GET https://admanager.googleapis.com/v1/{+parent}/adUnits`

Lists `AdUnit` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of AdUnits. Format: `networks/{network_code}` |
| orderBy | query | string |  | Optional. Expression to specify sorting order. See syntax details at https://developers.google.com/ad-manager/api/beta/filters#order |
| pageToken | query | string |  | Optional. A page token, received from a previous `ListAdUnits` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAdUnits` must match the call that provided the page token. |
| skip | query | integer (int32) |  | Optional. Number of individual resources to skip while paginating. |
| filter | query | string |  | Optional. Expression to filter the response. See syntax details at https://developers.google.com/ad-manager/api/beta/filters Syntax summary: double-quoted `"..."` (never `'...'`) strings and RFC 3339 timestamps, full resource names on reference fields (for example, `order = "networks/123/orders/456"`, not `*Id` or bare IDs), prefix or suffix `*` wildcards with `=` (`displayName = "foo*"`), `:` for substring or repeated-field matching, unquoted enums and booleans, uppercase `AND`/`OR`/`NOT`, and standalone `IN(field, SET(v1, v2))` (not `field IN (...)`). **Filterable fields:** * `adUnitCode` * `displayName` * `effectiveAdsenseEnabled` * `explicitlyTargeted` * `externalSetTopBoxChannelId` * `hasChildren` * `name` * `parentAdUnit` * `status` * `teams` * `updateTime` |
| pageSize | query | integer (int32) |  | Optional. The maximum number of AdUnits to return. The service may return fewer than this value. If unspecified, at most 50 ad units will be returned. The maximum value is 1000; values greater than 1000 will be coerced to 1000. |

**Response**: `ListAdUnitsResponse`

---

## Schemas

### `BatchArchiveAdUnitsRequest`

Request object for `BatchArchiveAdUnits` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The resource names of the `AdUnit`s to archive. Format: `networks/{network_code}/adUnits/{ad_unit_id}` |

### `BatchArchiveAdUnitsResponse`

Response object for `BatchArchiveAdUnits` method.

Type: object

### `AdUnit`

The AdUnit resource.

| Field | Type | Description |
|---|---|---|
| appliedTargetWindow | string enum(TARGET_WINDOW_UNSPECIFIED, TOP, BLANK) | Optional. The target window directly applied to this AdUnit. If this field is not set, this AdUnit uses the target window specified in effectiveTargetWindow. Values: TARGET_WINDOW_UNSPECIFIED - Default value. This value is unused.; TOP - Specifies that the link should open in the full body of the page.; BLANK - Specifies that the link should open in a new window. |
| parentAdUnit | string | Required. Immutable. The AdUnit's parent. Every ad unit has a parent except for the root ad unit, which is created by Google. Format: "networks/{network_code}/adUnits/{ad_unit_id}" |
| effectiveAppliedLabels | array<`AppliedLabel`> | Output only. Contains the set of labels applied directly to the ad unit as well as those inherited from the parent ad units. If a label has been negated, only the negated label is returned. This attribute is assigned by Google. |
| effectiveLabelFrequencyCaps | array<`LabelFrequencyCap`> | Output only. The label frequency caps applied directly to the ad unit as well as those inherited from parent ad units. |
| displayName | string | Required. The display name of the ad unit. Its maximum length is 255 characters. |
| status | string enum(AD_UNIT_STATUS_UNSPECIFIED, ACTIVE, INACTIVE, ARCHIVED) | Output only. The status of this ad unit. It defaults to ACTIVE. Values: AD_UNIT_STATUS_UNSPECIFIED - Default value. This value is unused.; ACTIVE - The ad unit is active, available for targeting, and serving.; INACTIVE - The ad unit will be visible in the UI, but ignored by serving.; ARCHIVED - The ad unit will be hidden in the UI and ignored by serving. |
| externalSetTopBoxChannelId | string | Optional. Determines what set top box video on demand channel this ad unit corresponds to in an external set top box ad campaign system. |
| adUnitSizes | array<`AdUnitSize`> | Optional. The sizes that can be served inside this ad unit. |
| appliedLabelFrequencyCaps | array<`LabelFrequencyCap`> | Optional. The set of label frequency caps applied directly to this ad unit. There is a limit of 10 label frequency caps per ad unit. |
| effectiveAdsenseEnabled | boolean | Output only. Specifies whether or not the AdUnit is enabled for serving ads from the AdSense content network. This attribute defaults to the ad unit's parent or ancestor's setting if one has been set. If no ancestor of the ad unit has set appliedAdsenseEnabled, the attribute is defaulted to true. |
| hasChildren | boolean | Output only. This field is set to true if the ad unit has any children. |
| explicitlyTargeted | boolean | Optional. If this field is set to true, then the AdUnit will not be implicitly targeted when its parent is. Traffickers must explicitly target such an AdUnit or else no line items will serve to it. This feature is only available for Ad Manager 360 accounts. |
| adUnitCode | string | Optional. Immutable. A string used to uniquely identify the ad unit for the purposes of serving the ad. This attribute can be set during ad unit creation. If it is not provided, it will be assigned by Google based on the ad unit ID. |
| updateTime | string (google-datetime) | Output only. The time this AdUnit was last modified. |
| description | string | Optional. A description of the ad unit. The maximum length is 65,535 characters. |
| refreshDelay | string (google-duration) | Optional. The duration after which an Ad Unit will automatically refresh. This is only valid for ad units in mobile apps. If not set, the ad unit will not refresh. |
| appliedAdsenseEnabled | boolean | Optional. The value of AdSense enabled directly applied to this ad unit. If not specified this ad unit will inherit the value of effectiveAdsenseEnabled from its ancestors. |
| name | string | Identifier. The resource name of the AdUnit. Format: `networks/{network_code}/adUnits/{ad_unit_id}` |
| teams | array<string> | Output only. The resource names of all Teams that this AdUnit is on as well as those inherited from parent AdUnits. Format: "networks/{network_code}/teams/{team_id}" |
| adUnitId | string (int64) | Output only. Deprecated: AdUnit ID. |
| appliedTeams | array<string> | Optional. The resource names of Teams directly applied to this AdUnit. Format: "networks/{network_code}/teams/{team_id}" |
| parentPath | array<`AdUnitParent`> | Output only. The path to this AdUnit in the ad unit hierarchy represented as a list from the root to this ad unit's parent. For root ad units, this list is empty. |
| refreshRateType | string enum(REFRESH_RATE_TYPE_UNSPECIFIED, DISABLED, OPTIMIZED, FIXED_INTERVAL) | Optional. Non-empty default. Defines the type of refresh rate control for this ad unit. This field defaults to `DISABLED`. Values: REFRESH_RATE_TYPE_UNSPECIFIED - Default value. This value is unused.; DISABLED - Indicates refresh is disabled.; OPTIMIZED - Represents the Google optimized refresh rate.; FIXED_INTERVAL - Represents a fixed interval refresh rate. |
| appliedLabels | array<`AppliedLabel`> | Optional. The set of labels applied directly to this ad unit. |
| effectiveTargetWindow | string enum(TARGET_WINDOW_UNSPECIFIED, TOP, BLANK) | Output only. Non-empty default. The target window of this AdUnit. This value is inherited from ancestor AdUnits and defaults to TOP if no AdUnit in the hierarchy specifies it. Values: TARGET_WINDOW_UNSPECIFIED - Default value. This value is unused.; TOP - Specifies that the link should open in the full body of the page.; BLANK - Specifies that the link should open in a new window. |
| smartSizeMode | string enum(SMART_SIZE_MODE_UNSPECIFIED, NONE, SMART_BANNER, DYNAMIC_SIZE, RESPONSIVE) | Optional. Non-empty default. The smart size mode for this ad unit. This attribute defaults to SmartSizeMode.NONE for fixed sizes. Values: SMART_SIZE_MODE_UNSPECIFIED - Default value. This value is unused.; NONE - Fixed size mode (default).; SMART_BANNER - The height is fixed for the request, the width is a range.; DYNAMIC_SIZE - Height and width are ranges.; RESPONSIVE - Automatically adjusts the ad unit size to fit the space available. Called "Auto size" in the Ad Manager UI. Once an ad unit is saved with this mode, its smart size mode and ad unit sizes can't be changed. |

### `BatchActivateAdUnitsRequest`

Request object for `BatchActivateAdUnits` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The resource names of the `AdUnit`s to activate. Format: `networks/{network_code}/adUnits/{ad_unit_id}` |

### `BatchActivateAdUnitsResponse`

Response object for `BatchActivateAdUnits` method.

Type: object

### `BatchDeactivateAdUnitsRequest`

Request object for `BatchDeactivateAdUnits` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The resource names of the `AdUnit`s to deactivate. Format: `networks/{network_code}/adUnits/{ad_unit_id}` |

### `BatchDeactivateAdUnitsResponse`

Response object for `BatchDeactivateAdUnits` method.

Type: object

### `BatchCreateAdUnitsRequest`

Request object for `BatchCreateAdUnits` method.

| Field | Type | Description |
|---|---|---|
| requests | array<`CreateAdUnitRequest`> | Required. The `AdUnit` objects to create. A maximum of 100 objects can be created in a batch. |

### `BatchCreateAdUnitsResponse`

Response object for `BatchCreateAdUnits` method.

| Field | Type | Description |
|---|---|---|
| adUnits | array<`AdUnit`> | The `AdUnit` objects created. |

### `BatchUpdateAdUnitsRequest`

Request object for `BatchUpdateAdUnits` method.

| Field | Type | Description |
|---|---|---|
| requests | array<`UpdateAdUnitRequest`> | Required. The `AdUnit` objects to update. A maximum of 100 objects can be updated in a batch. |

### `BatchUpdateAdUnitsResponse`

Response object for `BatchUpdateAdUnits` method.

| Field | Type | Description |
|---|---|---|
| adUnits | array<`AdUnit`> | The `AdUnit` objects updated. |

### `ListAdUnitsResponse`

Response object for ListAdUnitsRequest containing matching AdUnit resources.

| Field | Type | Description |
|---|---|---|
| adUnits | array<`AdUnit`> | The AdUnit from the specified network. |
| totalSize | integer (int32) | Total number of AdUnits. If a filter was included in the request, this reflects the total number after the filtering is applied. `total_size` won't be calculated in the response unless it has been included in a response field mask. The response field mask can be provided to the method by using the URL parameter `$fields` or `fields`, or by using the HTTP/gRPC header `X-Goog-FieldMask`. For more information, see https://developers.google.com/ad-manager/api/beta/field-masks |
| nextPageToken | string | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. |

### `AdUnitParent`

The summary of a parent AdUnit.

| Field | Type | Description |
|---|---|---|
| adUnitCode | string | Output only. A string used to uniquely identify the ad unit for the purposes of serving the ad. |
| displayName | string | Output only. The display name of the parent AdUnit. |
| parentAdUnit | string | Output only. The parent of the current AdUnit Format: `networks/{network_code}/adUnits/{ad_unit_id}` |

### `AdUnitSize`

Represents the size, environment, and companions of an ad in an ad unit.

| Field | Type | Description |
|---|---|---|
| size | `Size` | Required. The Size of the AdUnit. |
| environmentType | string enum(ENVIRONMENT_TYPE_UNSPECIFIED, BROWSER, VIDEO_PLAYER) | Required. The EnvironmentType of the AdUnit Values: ENVIRONMENT_TYPE_UNSPECIFIED - No value specified; BROWSER - A regular web browser.; VIDEO_PLAYER - Video players. |
| companions | array<`Size`> | The companions for this ad unit size. Companions are only valid if the environment is VIDEO_PLAYER. |

### `AppliedLabel`

Represents a Label that can be applied to an entity.

| Field | Type | Description |
|---|---|---|
| label | string | Required. The label to be applied. Format: "networks/{network_code}/labels/{label_id}" |
| negated | boolean | Specifies whether or not to negate the effects of the label. |

### `LabelFrequencyCap`

Frequency cap using a label.

| Field | Type | Description |
|---|---|---|
| label | string | Required. The label to used for frequency capping. Format: "networks/{network_code}/labels/{label_id}" |
| frequencyCap | `FrequencyCap` | The frequency cap. |

### `CreateAdUnitRequest`

Request object for `CreateAdUnit` method.

| Field | Type | Description |
|---|---|---|
| parent | string | Required. The parent resource where this `AdUnit` will be created. Format: `networks/{network_code}` |
| adUnit | `AdUnit` | Required. The `AdUnit` to create. |

### `UpdateAdUnitRequest`

Request object for `UpdateAdUnit` method.

| Field | Type | Description |
|---|---|---|
| updateMask | string (google-fieldmask) | Optional. The list of fields to update. |
| adUnit | `AdUnit` | Required. The `AdUnit` to update. The `AdUnit`'s name is used to identify the `AdUnit` to update. Format: `networks/{network_code}/adUnits/{ad_unit_id}` |

### `Size`

Represents the dimensions of an AdUnit, LineItem, or Creative.

| Field | Type | Description |
|---|---|---|
| sizeType | string enum(SIZE_TYPE_UNSPECIFIED, PIXEL, ASPECT_RATIO, INTERSTITIAL, IGNORED, NATIVE, FLUID, AUDIO) | Required. The SizeType of the Creative, AdUnit, or LineItem. Values: SIZE_TYPE_UNSPECIFIED - Default value. This value is unused.; PIXEL - Dimension based size, an actual height and width in pixels.; ASPECT_RATIO - Size is expressed as a ratio. For example, 4:1 could be met by a 100 x 25 sized image.; INTERSTITIAL - Out-of-page (Interstitial) size that is not related to the slot it is served. This must be used with 1x1 size.; IGNORED - Size is ignored. This must be used with 1x1 size.; NATIVE - Native size, which is a function of the how the client renders the creative. This must be used with 1x1 size.; FLUID - Fluid size. Automatically sizes the ad by filling the width of the enclosing column and adjusting the height as appropriate. This must be used with 1x1 size.; AUDIO - Audio size. Used with audio ads. This must be used with 1x1 size. |
| width | integer (int32) | Required. The width of the Creative, AdUnit, or LineItem. |
| height | integer (int32) | Required. The height of the Creative, AdUnit, or LineItem. |

### `FrequencyCap`

Represents a Frequency Cap that can be applied to an entity.

| Field | Type | Description |
|---|---|---|
| timeUnit | string enum(TIME_UNIT_UNSPECIFIED, MINUTE, HOUR, DAY, WEEK, MONTH, LIFETIME, POD, STREAM) | The units of time of this frequency cap. Values: TIME_UNIT_UNSPECIFIED - Default value. This value is unused.; MINUTE - Minute; HOUR - Hour; DAY - Day; WEEK - Week; MONTH - Month; LIFETIME - Lifetime; POD - Per pod of ads in a video stream. Only valid for entities in a VIDEO_PLAYER environment.; STREAM - Per video stream. Only valid for entities in a VIDEO_PLAYER environment. |
| maxImpressions | string (int64) | The maximum number of impressions for this frequency cap. |
| timeAmount | string (int64) | The number of time units over which the frequency cap is effective. |

