# Geo Target Constant

> Source: Google Ads API v26 REST Discovery document (https://googleads.googleapis.com/$discovery/rest?version=v26) and Shopping ads guide (https://developers.google.com/google-ads/api/docs/shopping-ads/overview). Fetched 2026-11-19.

Resource schema: `GeoTargetConstant`. Read data via `GoogleAdsService.Search`/`SearchStream` (see google_ads_service.md).

---

## geoTargetConstants.suggest

`POST https://googleads.googleapis.com/v26/geoTargetConstants:suggest`

Returns GeoTargetConstant suggestions by location name or by resource name. List of thrown errors: AuthenticationError AuthorizationError GeoTargetConstantSuggestionError HeaderError InternalError QuotaError RequestError

**Request body**: `SuggestGeoTargetConstantsRequest`

**Response**: `SuggestGeoTargetConstantsResponse`

---

## Schemas

### `GeoTargetConstant`

A geo target constant.

| Field | Type | Description |
|---|---|---|
| targetType | string | Output only. Geo target constant target type. |
| name | string | Output only. Geo target constant English name. |
| countryCode | string | Output only. The ISO-3166-1 alpha-2 country code that is associated with the target. |
| parentGeoTarget | string | Output only. The resource name of the parent geo target constant. Geo target constant resource names have the form: `geoTargetConstants/{parent_geo_target_constant_id}` |
| resourceName | string | Output only. The resource name of the geo target constant. Geo target constant resource names have the form: `geoTargetConstants/{geo_target_constant_id}` |
| status | string enum(UNSPECIFIED, UNKNOWN, ENABLED, REMOVAL_PLANNED) | Output only. Geo target constant status. Values: UNSPECIFIED - No value has been specified.; UNKNOWN - The received value is not known in this version. This is a response-only value.; ENABLED - The geo target constant is valid.; REMOVAL_PLANNED - The geo target constant is obsolete and will be removed. |
| requireEuPoliticalAdvertisingDeclaration | boolean | Output only. Indicates whether changing targeting of this geo requires setting Campaign.contains_eu_political_advertising field. |
| id | string (int64) | Output only. The ID of the geo target constant. |
| canonicalName | string | Output only. The fully qualified English name, consisting of the target's name and that of its parent and country. |

### `SuggestGeoTargetConstantsRequest`

Request message for GeoTargetConstantService.SuggestGeoTargetConstants.

| Field | Type | Description |
|---|---|---|
| locale | string | If possible, returned geo targets are translated using this locale. If not, en is used by default. This is also used as a hint for returned geo targets. |
| geoTargets | `SuggestGeoTargetConstantsRequest_GeoTargets` | The geo target constant resource names to filter by. |
| countryCode | string | Returned geo targets are restricted to this country code. |
| locationNames | `SuggestGeoTargetConstantsRequest_LocationNames` | The location names to search by. At most 25 names can be set. |

### `SuggestGeoTargetConstantsResponse`

Response message for GeoTargetConstantService.SuggestGeoTargetConstants.

| Field | Type | Description |
|---|---|---|
| geoTargetConstantSuggestions | array<`GeoTargetConstantSuggestion`> | Geo target constant suggestions. |

### `SuggestGeoTargetConstantsRequest_GeoTargets`

A list of geo target constant resource names.

| Field | Type | Description |
|---|---|---|
| geoTargetConstants | array<string> | A list of geo target constant resource names. |

### `SuggestGeoTargetConstantsRequest_LocationNames`

A list of location names.

| Field | Type | Description |
|---|---|---|
| names | array<string> | A list of location names. |

### `GeoTargetConstantSuggestion`

A geo target constant suggestion.

| Field | Type | Description |
|---|---|---|
| geoTargetConstantParents | array<`GeoTargetConstant`> | The list of parents of the geo target constant. |
| searchTerm | string | If the request searched by location name, this is the location name that matched the geo target. |
| reach | string (int64) | Approximate user population that will be targeted, rounded to the nearest 100. |
| locale | string | The language this GeoTargetConstantSuggestion is currently translated to. It affects the name of geo target fields. For example, if locale=en, then name=Spain. If locale=es, then name=España. The default locale will be returned if no translation exists for the locale in the request. |
| geoTargetConstant | `GeoTargetConstant` | The GeoTargetConstant result. |

---

## Field reference (verbatim from the Google field reference page)

[Help me build a query](https://developers.google.com/google-ads/api/fields/v26/geo_target_constant_query_builder.md.txt) [Proto definition ![on GitHub](https://developers.google.com/site-assets/logo-github.svg)](https://github.com/googleapis/googleapis/blob/master/google/ads/googleads/v26/resources/geo_target_constant.proto)

A geo target constant.

## geo_target_constant.canonical_name

Field descriptionOutput only. The fully qualified English name, consisting of the target's
name and that of its parent and country.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [geo_target_constant](https://developers.google.com/google-ads/api/fields/v26/geo_target_constant.md.txt)

## geo_target_constant.country_code

Field descriptionOutput only. The ISO-3166-1 alpha-2 country code that is associated with
the target.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [geo_target_constant](https://developers.google.com/google-ads/api/fields/v26/geo_target_constant.md.txt)

## geo_target_constant.id

Field descriptionOutput only. The ID of the geo target constant.
Category`ATTRIBUTE` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [geo_target_constant](https://developers.google.com/google-ads/api/fields/v26/geo_target_constant.md.txt)

## geo_target_constant.name

Field descriptionOutput only. Geo target constant English name.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as geo_target_constant.id.

## geo_target_constant.parent_geo_target

Field descriptionOutput only. The resource name of the parent geo target constant.
Geo target constant resource names have the form:

`geoTargetConstants/{parent_geo_target_constant_id}`
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as geo_target_constant.id.

## geo_target_constant.require_eu_political_advertising_declaration

Field descriptionOutput only. Indicates whether changing targeting of this geo requires
setting Campaign.contains_eu_political_advertising field.
Category`ATTRIBUTE` Data Type`BOOLEAN` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as geo_target_constant.id.

## geo_target_constant.resource_name

Field descriptionOutput only. The resource name of the geo target constant.
Geo target constant resource names have the form:

`geoTargetConstants/{geo_target_constant_id}`
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as geo_target_constant.id.

## geo_target_constant.status

Field descriptionOutput only. Geo target constant status.
Category`ATTRIBUTE` Data Type`ENUM`
`ENABLED``REMOVAL_PLANNED``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.GeoTargetConstantStatusEnum.GeoTargetConstantStatus` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as geo_target_constant.id.

## geo_target_constant.target_type

Field descriptionOutput only. Geo target constant target type.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as geo_target_constant.id.
