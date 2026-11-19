# Pinterest API v5: Catalogs

> Source: Pinterest REST API v5 OpenAPI spec (https://github.com/pinterest/api-description, v5.32.0); docs https://developers.pinterest.com/docs/api/v5/. Base URL: https://api.pinterest.com/v5. Fetched 2026-11-19.

Operations: 13

---

## GET /catalogs

**List catalogs**

Fetch catalogs owned by the "operation user_account".
- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an ad_account_id (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account: Owner, Admin, Catalogs Manager.

[Learn more](/docs/api-features/shopping-overview/)

Operation ID: `catalogs/list`

Scopes: pinterest_oauth2: catalogs:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |
| bookmark | query | string |  | Cursor used to fetch the next page of items |
| page_size | query | integer |  | Maximum number of items to include in a single page. See documentation on [Pagination](/docs/reference/pagination/) for more information. _(default 25; minimum 1; maximum 250)_ |

**Response 200** (`application/json`): object{bookmark: string, items: array<`Catalog`>}

---

## POST /catalogs

**Create catalog**

Create a new catalog owned by the "operation user_account".
- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an ad_account_id (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account: Owner, Admin, Catalogs Manager.

[Learn more](/docs/api-features/shopping-overview/)

Note: Access to the Product and Creative Assets catalog type is restricted to a specific group of users. If you require access, please reach out to your partner manager.

Operation ID: `catalogs/create`

Scopes: pinterest_oauth2: catalogs:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `CatalogCreate`

**Response 200** (`application/json`): `Catalog`

**Response 201** (`application/json`): `Catalog`

---

## GET /catalogs/available_filter_values

**List available filter values**

Get the available filter attributes and values associated with a given feed or catalog owned by the "operation user_account".
- By default, the "operation user_account" is the token user_account.
- `country`, `language`, and `feed_id` are only used in retail catalogs.
- Note: It is not guaranteed that all available filter values will be returned. Instead this endpoint will return values from a sample of up to 1000 items.

Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account: Owner, Admin, Catalogs Manager.

[Learn more](/docs/api-features/shopping-overview/)

Operation ID: `catalogs/available_filter_values`

Scopes: pinterest_oauth2: catalogs:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| catalog_id | query | string | yes | Filter entities for a given catalog_id. |
| feed_id | query | string |  | Filter entities for a given feed_id. If not given, all feeds are considered. |
| country | query | `Country` |  | Country for the Catalogs Items |
| language | query | `CatalogsLocale` |  | Language for the Catalogs Items |
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |

**Response 200** (`application/json`): `CatalogsAvailableFilterValues`

---

## PATCH /catalogs/{catalog_id}

**Update catalog default country and locale**

Update default country and locale on an existing RETAIL catalog owned by the
"operation user_account" for international (INTL) supplemental feeds (M2.1).

Both `country` and `locale` must be sent together; partial updates with only
one field are not supported. `catalog_type` must match the existing catalog
(currently only `RETAIL` is supported for INTL localization).

- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account: Owner, Admin, Catalogs Manager.

[Learn more](/docs/api-features/shopping-overview/)

Operation ID: `catalogs/update`

Scopes: pinterest_oauth2: catalogs:read, catalogs:write; client_credentials: catalogs:read, catalogs:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| catalog_id | path | string | yes | ID of the catalog entity. |
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `CatalogUpdate`

**Response 200** (`application/json`): `Catalog`

---

## POST /catalogs/{catalog_id}/auto_localization_configs

**Create auto-localization config**

Create an auto-localization config for a Pinterest international product
catalog owned by the "operation user_account".
- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account: Owner, Admin, Catalogs Manager.

A config is scoped to a single `target_country`; only one config may
exist per (catalog, target_country). The server materializes the full
`source_feeds` x `target_locales` cross-product into locale rows and
provisions one generated GBC feed per row. The response returns the
fully materialized config.

Operation ID: `catalogs_auto_localization_configs/create`

Scopes: pinterest_oauth2: catalogs:read, catalogs:write; client_credentials: catalogs:read, catalogs:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| catalog_id | path | string | yes | Unique identifier of a catalog. _(maxLength 19)_ |
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `CatalogsAutoLocalizationConfigCreateRequest`

**Response 200** (`application/json`): `CatalogsAutoLocalizationConfigResponse`

**Response 201** (`application/json`): `CatalogsAutoLocalizationConfigResponse`

---

## GET /catalogs/{catalog_id}/auto_localization_configs/{auto_localization_config_id}

**Get auto-localization config**

Get a single auto-localization config owned by the "operation
user_account".
- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account: Owner, Admin, Catalogs Manager.

The read shape is intentionally materialized and status-rich: it returns
config metadata plus the fully materialized locale rows with their
generated GBC feed linkage and derived review/active state. Returns 404
when the config does not exist or does not belong to the catalog.

Operation ID: `catalogs_auto_localization_configs/get`

Scopes: pinterest_oauth2: catalogs:read; client_credentials: catalogs:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| catalog_id | path | string | yes | Unique identifier of a catalog. _(maxLength 19)_ |
| auto_localization_config_id | path | string | yes | Unique identifier of an auto-localization config. |
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |

**Response 200** (`application/json`): `CatalogsAutoLocalizationConfigResponse`

---

## PUT /catalogs/{catalog_id}/auto_localization_configs/{auto_localization_config_id}

**Update auto-localization config**

Update an auto-localization config owned by the "operation
user_account". This is a full-state write (PUT semantics).
- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account: Owner, Admin, Catalogs Manager.

Locales are upserted per (source_feed, locale): combinations newly
present create a locale row + generated GBC feed; combinations removed
are soft-disabled (translations retained for cheap re-enable);
combinations unchanged are no-ops (reactivated if previously disabled).
`target_country` is the config identity and cannot be changed here;
`approval_status` is managed via the translations review endpoint.

Operation ID: `catalogs_auto_localization_configs/update`

Scopes: pinterest_oauth2: catalogs:read, catalogs:write; client_credentials: catalogs:read, catalogs:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| catalog_id | path | string | yes | Unique identifier of a catalog. _(maxLength 19)_ |
| auto_localization_config_id | path | string | yes | Unique identifier of an auto-localization config. |
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `CatalogsAutoLocalizationConfigUpdateRequestUpdate`

**Response 200** (`application/json`): `CatalogsAutoLocalizationConfigResponse`

**Response 201** (`application/json`): `CatalogsAutoLocalizationConfigResponse`

---

## GET /catalogs/{catalog_id}/auto_localization_configs/{auto_localization_config_id}/translations

**List translations**

List translations produced for an auto-localization config owned by the
"operation user_account".
- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account: Owner, Admin, Catalogs Manager.

Each entry contains the source content, translated content, and the
FX-converted price for one item in one target locale. Use
`target_locales`, `status`, and `merchant_item_id` to scope a review to a
subset, and the `bookmark` cursor for pagination. Returns 404 when the
config does not exist or does not belong to the catalog.

Operation ID: `catalogs_translations/list`

Scopes: pinterest_oauth2: catalogs:read; client_credentials: catalogs:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| catalog_id | path | string | yes | Unique identifier of a catalog. _(maxLength 19)_ |
| auto_localization_config_id | path | string | yes | Unique identifier of an auto-localization config. |
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |
| target_locales | query | array<`CatalogsLocale`> |  | Filter translations to these target locales. Defaults to all locales in the config when omitted. |
| status | query | `CatalogsTranslationItemStatus` |  | Filter translations by per-item review state. |
| merchant_item_id | query | string |  | Filter translations by merchant item id. Matches either the exact id or an id prefix. |
| bookmark | query | string |  | Cursor used to fetch the next page of items |
| page_size | query | integer |  | Maximum number of items to include in a single page. See documentation on [Pagination](/docs/reference/pagination/) for more information. _(default 25; minimum 1; maximum 250)_ |

**Response 200** (`application/json`): object{bookmark: string, items: array<`CatalogsTranslationItem`>}

---

## POST /catalogs/{catalog_id}/auto_localization_configs/{auto_localization_config_id}/translations/review

**Review translations**

Approve or reject translations for an auto-localization config owned by
the "operation user_account". This is a bulk operation scoped by target
locales, merchant item ids, and/or current status.
- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account: Owner, Admin, Catalogs Manager.

Applies `target_status` to every translation matching `scope`. Approving a
locale recomputes its locale-level approval state and, when appropriate,
triggers the downstream GBC feed generation run. `scope.translation_ids`
is reserved for a future per-translation flow and must be `null` today.
The config and requested locales must belong to the catalog, and the
request is rejected if a translation job is in progress for an affected
locale.

Operation ID: `catalogs_translations/review`

Scopes: pinterest_oauth2: catalogs:read, catalogs:write; client_credentials: catalogs:read, catalogs:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| catalog_id | path | string | yes | Unique identifier of a catalog. _(maxLength 19)_ |
| auto_localization_config_id | path | string | yes | Unique identifier of an auto-localization config. |
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `CatalogsTranslationApprovalRequest`

**Response 200** (`application/json`): `CatalogsTranslationApprovalResponse`

---

## GET /catalogs/{catalog_id}/country_locale_mapping

**Get country/locale mapping**

Get the country/locale mapping for a Pinterest international product catalog
owned by the "operation user_account".
- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account: Owner, Admin, Catalogs Manager.

Returns 404 when no mapping exists for the catalog.

Operation ID: `catalogs_country_locale_mapping/get`

Scopes: pinterest_oauth2: catalogs:read; client_credentials: catalogs:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| catalog_id | path | string | yes | Unique identifier of a catalog. _(maxLength 19)_ |
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |

**Response 200** (`application/json`): `CatalogsCountryLocaleMapping`

---

## PUT /catalogs/{catalog_id}/country_locale_mapping

**Replace country/locale mapping**

Replace the country/locale mapping for a Pinterest international product catalog
owned by the "operation user_account". The supplied `country_to_locales` payload
replaces any existing mapping in full (PUT semantics).

- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account: Owner, Admin, Catalogs Manager.

Eligibility:
- The catalog must be a `RETAIL` / `PRODUCT` catalog.
- The catalog must already have both a default `country` and `locale` set.
- At most 5 locales per country are accepted.

Operation ID: `catalogs_country_locale_mapping/replace`

Scopes: pinterest_oauth2: catalogs:read, catalogs:write; client_credentials: catalogs:read, catalogs:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| catalog_id | path | string | yes | Unique identifier of a catalog. _(maxLength 19)_ |
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `CatalogsCountryLocaleMappingUpdate`

**Response 200** (`application/json`): `CatalogsCountryLocaleMapping`

**Response 201** (`application/json`): `CatalogsCountryLocaleMapping`

---

## DELETE /catalogs/{catalog_id}/country_locale_mapping

**Delete country/locale mapping**

Delete (soft-clear) the country/locale mapping for a Pinterest international product
catalog owned by the "operation user_account". The mapping is cleared in place; the
underlying catalog and items are preserved.

- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an `ad_account_id` (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account: Owner, Admin, Catalogs Manager.

Operation ID: `catalogs_country_locale_mapping/delete`

Scopes: pinterest_oauth2: catalogs:read, catalogs:write; client_credentials: catalogs:read, catalogs:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| catalog_id | path | string | yes | Unique identifier of a catalog. _(maxLength 19)_ |
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |

**Response 204**: Resource deleted successfully.

---

## POST /collaborative_catalogs

**Create collaborative catalog**

**This endpoint is currently in beta and not available to all apps. [Learn more](/docs/getting-started/using-beta-and-restricted-features/).**

Create a new collaborative (RMN) catalog owned by the "operation user_account".
- By default, the "operation user_account" is the token user_account.

Optional: Business Access: Specify an ad_account_id (obtained via [List ad accounts](/docs/api/v5/#operation/ad_accounts/list)) to use the owner of that ad_account as the "operation user_account". In order to do this, the token user_account must have one of the following [Business Access](https://help.pinterest.com/en/business/article/share-and-manage-access-to-your-ad-accounts) roles on the ad_account: Owner, Admin, Catalogs Manager.

A collaborative catalog requires a parent retail catalog and product filters.

Operation ID: `collaborative_catalogs/create`

Scopes: pinterest_oauth2: catalogs:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | query | string |  | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `CollaborativeCatalogCreate`

**Response 200** (`application/json`): `CollaborativeCatalog`

**Response 201** (`application/json`): `CollaborativeCatalog`

---

## Schemas

### `Catalog`

Catalog entity

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_type | `CatalogsType` | yes |  |
| country | `Country` |  | Catalog-level default country (ISO 3166-1 alpha-2) for RETAIL international (INTL) catalogs. Only set for `RETAIL` catalogs that opt into INTL behavior; required together with `locale` to enable INTL supplemental feeds. |
| created_at | string (date-time) | yes | _(read-only)_ |
| id | string | yes | ID of the catalog entity. |
| locale | `CatalogsLocale` |  | Catalog-level default locale (normalized BCP-47 tag) for RETAIL international (INTL) catalogs. Only set for `RETAIL` catalogs that opt into INTL behavior; required together with `country` to enable INTL supplemental feeds. |
| name | string | yes | A human-friendly name associated to a catalog entity. |
| updated_at | string (date-time) | yes | _(read-only)_ |

### `CatalogCreate`

Resource create operation model.

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_type | `CatalogsType` | yes |  |
| name | string | yes | A human-friendly name associated to a catalog entity. |

### `CatalogUpdate`

Resource create or update operation model.

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_type | `CatalogsType` |  |  |
| country | `Country` |  | Catalog-level default country (ISO 3166-1 alpha-2) for RETAIL international (INTL) catalogs. Only set for `RETAIL` catalogs that opt into INTL behavior; required together with `locale` to enable INTL supplemental feeds. |
| locale | `CatalogsLocale` |  | Catalog-level default locale (normalized BCP-47 tag) for RETAIL international (INTL) catalogs. Only set for `RETAIL` catalogs that opt into INTL behavior; required together with `country` to enable INTL supplemental feeds. |
| name | string |  | A human-friendly name associated to a catalog entity. |

### `CatalogsAutoLocalizationConfigCreateRequest`

Request body for creating an auto-localization config. Only one config may
exist per (catalog, target_country); creating a second for the same target
country is rejected.

| Field | Type | Required | Description |
|---|---|---|---|
| rounding_rule | `CatalogsAutoLocalizationRoundingRule` | yes | Price rounding rule to apply to converted prices. |
| source_feeds | array<`CatalogsAutoLocalizationSourceFeed`> | yes | Source (PRIMARY) feeds to localize from. The server materializes the full source_feed x target_locale cross-product into locale rows. |
| target_country | `Country` | yes | ISO 3166-1 alpha-2 target country to localize for. Together with the catalog this forms the config identity. |
| target_locales | array<`CatalogsLocale`> | yes | Target locales to generate. Each must be allowed for `target_country`. |

### `CatalogsAutoLocalizationConfigResponse`

Response wrapper for the auto-localization config create, read, and update endpoints.

| Field | Type | Required | Description |
|---|---|---|---|
| auto_localization_config | `CatalogsAutoLocalizationConfig` | yes | The materialized auto-localization config. |

### `CatalogsAutoLocalizationConfigUpdateRequestUpdate`

Resource create or update operation model.

| Field | Type | Required | Description |
|---|---|---|---|
| rounding_rule | `CatalogsAutoLocalizationRoundingRule` |  | Price rounding rule to apply to converted prices. |
| source_feeds | array<`CatalogsAutoLocalizationSourceFeed`> |  | Desired full set of source (PRIMARY) feeds (see model description for upsert semantics). |
| target_locales | array<`CatalogsLocale`> |  | Desired full set of target locales (see model description for upsert semantics). |

### `CatalogsAvailableFilterValues`

Object holding available filter values for each filter key

Type: `CatalogsRetailAvailableFilterValues` | `CatalogsHotelAvailableFilterValues` | `CatalogsCreativeAssetsAvailableFilterValues`

### `CatalogsCountryLocaleMapping`

Country/locale mapping for an international Pinterest product catalog. Each catalog
has at most one mapping that defines the supported (country, locale) pairs for its
items. Only `RETAIL` / `PRODUCT` catalogs that already have both a default `country`
and `locale` set on the catalog itself are eligible.

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_id | string |  | Identifier of the catalog this mapping belongs to. _(read-only)_ |
| country_to_locales | array<`CatalogsCountryLocaleEntry`> | yes | Country -> locales entries supported by the catalog. |
| created_at | integer |  | Unix timestamp (seconds) when the mapping was first created. _(read-only)_ |
| id | string |  | Pinterest-generated unique identifier for this country/locale mapping. _(read-only)_ |
| merchant_id | string |  | Identifier of the merchant that owns the underlying catalog. _(read-only)_ |
| updated_at | integer |  | Unix timestamp (seconds) when the mapping was last updated. _(read-only)_ |

### `CatalogsCountryLocaleMappingUpdate`

Resource create or update operation model.

| Field | Type | Required | Description |
|---|---|---|---|
| country_to_locales | array<`CatalogsCountryLocaleEntry`> |  | Country -> locales entries supported by the catalog. |

### `CatalogsLocale`

Type: string enum(af-ZA, ar-SA, bg-BG, bn-IN, cs-CZ, da-DK, de, el-GR, en-AU, en-CA, en-GB, en-IN, en-US, es-419, es-AR, es-ES, es-MX, fi-FI, fr, fr-CA, he-IL, hi-IN, hr-HR, hu-HU, id-ID, it, ja, ko-KR, ms-MY, nb-NO, nl, pl-PL, pt-BR, pt-PT, ro-RO, ru-RU, sk-SK, sv-SE, te-IN, th-TH, tl-PH, tr, uk-UA, vi-VN, zh-CN, zh-TW)

### `CatalogsTranslationApprovalRequest`

Request body for a bulk approve/reject of translations within an
auto-localization config.

| Field | Type | Required | Description |
|---|---|---|---|
| scope | `CatalogsTranslationApprovalScope` | yes | Selects which translations the review applies to. |
| target_status | `CatalogsTranslationReviewStatus` | yes | Desired review decision to apply to the selected translations (approve or reject only). |

### `CatalogsTranslationApprovalResponse`

Response for the translations review endpoint. The review is accepted and
applied asynchronously (the per-item transition, locale-level latch, and feed
regeneration are performed by a downstream job), so the response conveys
acceptance and intent rather than a synchronous updated-item count.

| Field | Type | Required | Description |
|---|---|---|---|
| affected_locales | array<`CatalogsTranslationApprovalLocaleResult`> | yes | Locales accepted for the review, each with its locale-level approval state. |
| feed_generation_triggered | boolean | yes | Whether the review will trigger a downstream `gbc_feed_generation` run for any affected locale (an approve, or a reject that removes a previously approved/published set). |

### `CatalogsTranslationItem`

A single translated item produced for one target locale of an
auto-localization config, with its source content, translated content, and
FX-converted price.

| Field | Type | Required | Description |
|---|---|---|---|
| last_updated_at | string (date-time) | yes | Timestamp of the most recent update to this translation. |
| market_locale_id | string | yes | Identifier of the source-feed/target-locale row this translation belongs to. A market can target the same language from multiple source feeds, so `(target_locale, merchant_item_id)` is not unique; use `market_locale_id` to distinguish those rows and to scope a review to one source feed's translation. |
| merchant_item_id | string | yes | Merchant-provided item identifier (the `merchant_item_id`/SKU of the source item). |
| price | `CatalogsTranslationPrice` | yes | Source and FX-converted price for this item. |
| source_description | string | yes | Source-language item description. |
| source_title | string | yes | Source-language item title. |
| status | `CatalogsTranslationItemStatus` | yes | Per-item review state. |
| target_country | `Country` | yes | ISO 3166-1 alpha-2 target country of the market this translation serves. |
| target_currency | `Currency` | yes | ISO 4217 currency code served in the target market. |
| target_locale | `CatalogsLocale` | yes | Target locale this translation was produced for (e.g. `fr-CA`). |
| translated_description | string | yes | Translated item description in the target locale. |
| translated_title | string | yes | Translated item title in the target locale. |

### `CatalogsTranslationItemStatus`

Per-item review state of a single translated item within a locale.

Type: string enum(PENDING_REVIEW, APPROVED, REJECTED)

### `CollaborativeCatalog`

Collaborative (RMN) catalog entity

| Field | Type | Required | Description |
|---|---|---|---|
| country | `Country` |  | The collaborative catalog's country. |
| created_at | string (date-time) | yes | _(read-only)_ |
| filters | `CollaborativeCatalogFilters` | yes | Product filters for the collaborative catalog. |
| id | string | yes | ID of the collaborative catalog entity. _(read-only)_ |
| locale | `CatalogsLocale` |  | The collaborative catalog's locale. |
| name | string | yes | A human-friendly name associated to the collaborative catalog. |
| parent_catalog_id | string | yes | Parent retail catalog ID. Must reference an existing retail catalog. |
| updated_at | string (date-time) | yes | _(read-only)_ |

### `CollaborativeCatalogCreate`

Resource create operation model.

| Field | Type | Required | Description |
|---|---|---|---|
| country | `Country` |  | The collaborative catalog's country. |
| filters | `CollaborativeCatalogFilters` | yes | Product filters for the collaborative catalog. |
| locale | `CatalogsLocale` |  | The collaborative catalog's locale. |
| name | string | yes | A human-friendly name associated to the collaborative catalog. |
| parent_catalog_id | string | yes | Parent retail catalog ID. Must reference an existing retail catalog. |

### `Country`

Country ID from ISO 3166-1 alpha-2.

Type: string enum(AD, AE, AF, AG, AI, AL, AM, AO, AQ, AR, AS, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BV, BW, BY, BZ, CA, CC, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CU, CV, CW, CX, CY, CZ, DE, DJ, DK, DM, DO, DZ, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FM, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HM, HN, HR, HT, HU, ID, IE, IL, IM, IN, IO, IQ, IR, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MH, MK, ML, MM, MN, MO, MP, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NF, NG, NI, NL, False, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PW, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SD, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SY, SZ, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, UM, US, UY, UZ, VA, VC, VE, VG, VI, VN, VU, WF, WS, YE, YT, ZA, ZM, ZW)

### `CatalogsType`

Type of the catalog entity.

Type: string enum(RETAIL, HOTEL, CREATIVE_ASSETS)

### `CatalogsAutoLocalizationRoundingRule`

Price rounding rule applied to converted prices in generated GBC feeds.

Type: string enum(NONE, ENDS_IN_99, ENDS_IN_95)

### `CatalogsAutoLocalizationSourceFeed`

A merchant source (PRIMARY) feed used as input for auto-localization, with
per-feed pricing semantics. Supplied on writes; the server fans this out
across `target_locales` to materialize locale rows.

| Field | Type | Required | Description |
|---|---|---|---|
| feed_profile_id | string | yes | Pinterest-generated unique identifier of the source (PRIMARY) feed profile to localize from. |
| price_include_tax | boolean | yes | Whether prices in the source feed already include tax. Controls tax handling when converting prices for the target market. |

### `CatalogsAutoLocalizationConfig`

A fully materialized auto-localization config for a single (catalog,
target_country) pair. Returned by the create, read, and update endpoints.

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_id | string | yes | Identifier of the catalog this config belongs to. |
| id | string | yes | Pinterest-generated unique identifier of this auto-localization config. |
| locales | array<`CatalogsAutoLocalizationConfigLocale`> | yes | Fully materialized source_feed x target_locale rows, each with its generated GBC feed and derived review/active state. |
| rounding_rule | `CatalogsAutoLocalizationRoundingRule` | yes | Price rounding rule applied to converted prices for this market. |
| target_country | `Country` | yes | ISO 3166-1 alpha-2 target country this config localizes for. Together with the catalog this forms the config identity and is immutable once created. |

### `CatalogsCreativeAssetsAvailableFilterValues`

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_type | string enum(CREATIVE_ASSETS) | yes |  |
| filter_values | `CatalogsCreativeAssetsFilterValuesMap` | yes |  |

### `CatalogsHotelAvailableFilterValues`

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_type | string enum(HOTEL) | yes |  |
| filter_values | `CatalogsHotelFilterValuesMap` | yes |  |

### `CatalogsRetailAvailableFilterValues`

| Field | Type | Required | Description |
|---|---|---|---|
| catalog_type | string enum(RETAIL) | yes |  |
| filter_values | `CatalogsRetailFilterValuesMap` | yes |  |

### `CatalogsCountryLocaleEntry`

A single (country -> locales) entry inside a catalog's country/locale mapping.

| Field | Type | Required | Description |
|---|---|---|---|
| country | `Country` | yes | ISO 3166-1 alpha-2 country code. |
| locales | array<`CatalogsLocale`> | yes | Allowed locales for the given country (max 5 unique entries). |

### `CatalogsTranslationApprovalScope`

Selects the set of translations a review applies to. An empty/omitted
`target_locales` defaults to all locales in the config; `merchant_item_ids`
narrows to a subset; `current_status` restricts to translations currently in
that state.

| Field | Type | Required | Description |
|---|---|---|---|
| current_status | `CatalogsTranslationItemStatus` |  | Only review translations currently in this state. |
| merchant_item_ids | array<string> |  | Optional subset of merchant item ids to narrow the review to. |
| target_locales | array<`CatalogsLocale`> |  | Target locales to apply the review to. Defaults to all locales in the config when omitted. |
| translation_ids | array<string> |  | Reserved for a future per-translation review flow. Must be `null` today; selection is expressed via `target_locales`/`merchant_item_ids`/`current_status`. _(nullable)_ |

### `CatalogsTranslationReviewStatus`

Review decision a client may apply to translations via the review endpoint.
Restricted to the terminal approve/reject states: `PENDING_REVIEW` is a
system-assigned state and cannot be set by clients.

Type: string enum(APPROVED, REJECTED)

### `CatalogsTranslationApprovalLocaleResult`

Locale-level approval state for a locale accepted by a review.

| Field | Type | Required | Description |
|---|---|---|---|
| approval_status | `CatalogsAutoLocalizationApprovalStatus` | yes | Locale-level approval state for the locale. The review is applied asynchronously, so this is the intent/best-effort state: a locale being approved (and whose feed is regenerating) is reported as `PENDING_GENERATION`; otherwise it is the current locale-level state at request time. |
| target_locale | `CatalogsLocale` | yes | Target locale (e.g. `fr-CA`). |

### `CatalogsTranslationPrice`

Source and FX-converted price for a translated item. Amounts are expressed
in micros (millionths of a currency unit) as integer strings, e.g.
`"9990000"` represents 9.99 of the currency.

| Field | Type | Required | Description |
|---|---|---|---|
| converted_amount_micros | string | yes | FX-converted price in micros (millionths of `converted_currency`), after applying the config rounding rule. |
| converted_currency | `Currency` | yes | ISO 4217 currency code of the converted price (the target market currency). |
| source_amount_micros | string | yes | Source price in micros (millionths of `source_currency`). |
| source_currency | `Currency` | yes | ISO 4217 currency code of the source price. |

### `Currency`

Currency Codes from ISO 4217

Type: string enum(UNK, USD, GBP, CAD, EUR, AUD, NZD, SEK, ILS, CHF, HKD, JPY, SGD, KRW, NOK, DKK, PLN, RON, HUF, CZK, BRL, MXN, ARS, CLP, COP, INR, TRY)

### `CollaborativeCatalogFilters`

Product filters used to define which items are included in a collaborative catalog.

| Field | Type | Required | Description |
|---|---|---|---|
| conditions | array<`CollaborativeCatalogFilterCondition`> | yes | Filter conditions applied to the parent catalog's products. |
| operator | `CollaborativeCatalogFiltersOperator` | yes | How conditions are combined. ALL means every condition must match. ANY means at least one condition must match. |

### `CatalogsAutoLocalizationConfigLocale`

A single materialized (source_feed x target_locale) row within an
auto-localization config, including its generated GBC feed linkage and
derived review/active state. Returned on reads.

| Field | Type | Required | Description |
|---|---|---|---|
| active_status | `CatalogsAutoLocalizationActiveStatus` | yes | Whether this locale row is active or soft-disabled. |
| approval_status | `CatalogsAutoLocalizationApprovalStatus` | yes | Derived review/lifecycle state for this locale. |
| gbc_feed_profile_id | string | yes | Identifier of the generated GBC feed profile that serves this locale. |
| id | string | yes | Pinterest-generated unique identifier of this locale row. |
| price_include_tax | boolean | yes | Whether the source feed prices for this locale include tax. |
| source_feed_profile_id | string | yes | Identifier of the source (PRIMARY) feed profile this row localizes from. |
| target_locale | `CatalogsLocale` | yes | Target locale produced by this row (e.g. `fr-CA`). |

### `CatalogsCreativeAssetsFilterValuesMap`

A map of filter attributes to their available values.

| Field | Type | Required | Description |
|---|---|---|---|
| custom_label_0 | array<string> |  |  |
| custom_label_1 | array<string> |  |  |
| custom_label_2 | array<string> |  |  |
| custom_label_3 | array<string> |  |  |
| custom_label_4 | array<string> |  |  |
| google_product_category_0 | array<string> |  |  |
| google_product_category_1 | array<string> |  |  |
| google_product_category_2 | array<string> |  |  |
| google_product_category_3 | array<string> |  |  |
| google_product_category_4 | array<string> |  |  |
| google_product_category_5 | array<string> |  |  |
| google_product_category_6 | array<string> |  |  |
| media_type | array<`MediaType`> |  |  |

### `CatalogsHotelFilterValuesMap`

A map of filter attributes to their available values.

| Field | Type | Required | Description |
|---|---|---|---|
| brand | array<string> |  |  |
| custom_label_0 | array<string> |  |  |
| custom_label_1 | array<string> |  |  |
| custom_label_2 | array<string> |  |  |
| custom_label_3 | array<string> |  |  |
| custom_label_4 | array<string> |  |  |

### `CatalogsRetailFilterValuesMap`

A map of filter attributes to their available values.

| Field | Type | Required | Description |
|---|---|---|---|
| ad_image_tags | array<string> |  |  |
| ad_video_tags | array<string> |  |  |
| availability | array<`ProductAvailability`> |  |  |
| brand | array<string> |  |  |
| condition | array<`ProductCondition`> |  |  |
| custom_label_0 | array<string> |  |  |
| custom_label_1 | array<string> |  |  |
| custom_label_2 | array<string> |  |  |
| custom_label_3 | array<string> |  |  |
| custom_label_4 | array<string> |  |  |
| gender | array<`Gender`> |  |  |
| google_product_category_0 | array<string> |  |  |
| google_product_category_1 | array<string> |  |  |
| google_product_category_2 | array<string> |  |  |
| google_product_category_3 | array<string> |  |  |
| google_product_category_4 | array<string> |  |  |
| google_product_category_5 | array<string> |  |  |
| google_product_category_6 | array<string> |  |  |
| media_type | array<`MediaType`> |  |  |
| product_type_0 | array<string> |  |  |
| product_type_1 | array<string> |  |  |
| product_type_2 | array<string> |  |  |
| product_type_3 | array<string> |  |  |
| product_type_4 | array<string> |  |  |

### `CatalogsAutoLocalizationApprovalStatus`

Derived review/lifecycle state of a localized locale within an
auto-localization config. Computed from the underlying per-item translation
statuses; an `APPROVED` locale drives GBC feed generation.

Type: string enum(PENDING_TRANSLATION, READY_FOR_REVIEW, APPROVED, REJECTED, PENDING_GENERATION)

### `CollaborativeCatalogFilterCondition`

A single collaborative catalog filter condition.

Type: `CollaborativeCatalogStringSetFilter` | `CollaborativeCatalogAvailabilityFilter` | `CollaborativeCatalogConditionFilter` | `CollaborativeCatalogGenderFilter` | `CollaborativeCatalogMediaTypeFilter` | `CollaborativeCatalogPinterestProductCategoryFilter` | `CollaborativeCatalogSupplementalItemSegmentFilter` | `CollaborativeCatalogHierarchyFilter` | `CollaborativeCatalogPriceFilter`

### `CollaborativeCatalogFiltersOperator`

Type: string enum(ALL, ANY)

### `CatalogsAutoLocalizationActiveStatus`

Whether a localized locale (and its generated GBC feed) is active or soft-disabled.

Type: string enum(ACTIVE, DISABLED)

### `MediaType`

Type: string enum(IMAGE, VIDEO)

### `Gender`

Type: string enum(FEMALE, MALE, UNISEX)

### `ProductAvailability`

Product availability.

Type: string enum(IN_STOCK, OUT_OF_STOCK, PREORDER)

### `ProductCondition`

Type: string enum(NEW, USED, REFURBISHED)

### `CollaborativeCatalogAvailabilityFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| field | string enum(AVAILABILITY) | yes |  |
| operator | `CollaborativeCatalogSetOperator` | yes |  |
| values | array<`ProductAvailability`> | yes |  |

### `CollaborativeCatalogConditionFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| field | string enum(CONDITION) | yes |  |
| operator | `CollaborativeCatalogSetOperator` | yes |  |
| values | array<`ProductCondition`> | yes |  |

### `CollaborativeCatalogGenderFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| field | string enum(GENDER) | yes |  |
| operator | `CollaborativeCatalogSetOperator` | yes |  |
| values | array<`Gender`> | yes |  |

### `CollaborativeCatalogHierarchyFilter`

Filter for hierarchical product attributes. Each value is one selected hierarchy path.

| Field | Type | Required | Description |
|---|---|---|---|
| field | string enum(GOOGLE_PRODUCT_CATEGORY, PRODUCT_TYPE) | yes |  |
| operator | `CollaborativeCatalogSetOperator` | yes |  |
| values | array<array<string>> | yes | Selected hierarchy paths. Example: [["Furniture", "Chairs"]]. |

### `CollaborativeCatalogMediaTypeFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| field | string enum(MEDIA_TYPE) | yes |  |
| operator | `CollaborativeCatalogSetOperator` | yes |  |
| values | array<`MediaType`> | yes |  |

### `CollaborativeCatalogPinterestProductCategoryFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| field | string enum(PINTEREST_PRODUCT_CATEGORIES) | yes |  |
| operator | `CollaborativeCatalogSetOperator` | yes |  |
| values | array<`ProductCategoryEnum`> | yes |  |

### `CollaborativeCatalogPriceFilter`

Filter for product price.

| Field | Type | Required | Description |
|---|---|---|---|
| currency | `NonNullableCatalogsCurrency` | yes |  |
| field | string enum(PRICE) | yes |  |
| operator | `CollaborativeCatalogPriceOperator` | yes |  |
| value | number | yes | _(minimum 0)_ |

### `CollaborativeCatalogStringSetFilter`

Filter for free-form string product attributes.

| Field | Type | Required | Description |
|---|---|---|---|
| field | string enum(ITEM_ID, ITEM_GROUP_ID, BRAND, TITLE_KEYWORDS) | yes | Product attribute to filter. |
| operator | `CollaborativeCatalogSetOperator` | yes | IS includes matching values. IS_NOT excludes matching values. |
| values | array<string> | yes |  |

### `CollaborativeCatalogSupplementalItemSegmentFilter`

| Field | Type | Required | Description |
|---|---|---|---|
| field | string enum(SUPPLEMENTAL_ITEM_SEGMENTS) | yes |  |
| operator | `CollaborativeCatalogSetOperator` | yes |  |
| values | array<`SupplementalItemSegmentType`> | yes |  |

### `CollaborativeCatalogSetOperator`

Type: string enum(IS, IS_NOT)

### `ProductCategoryEnum`

List of product category details

Type: string enum(ACCENT_TABLES, ACCESSORIES, ANKLETS, APRONS, AREA_RUGS, ARMOIRES_AND_WARDROBES, ART_AND_CRAFT_PAINTS, ART_BRUSHES, ARTIFICIAL_FLORA, ARTWORK, AUDIO, AUDIO_ACCESSORIES, BACKPACKS, BAG_AND_LUGGAGE_ACCESSORIES, BAGS_AND_LUGGAGE, BAKEWARE, BANDANAS, BAR_CARTS, BARWARE, BASKETS, BATH_AND_BODY, BATH_AND_SHOWER, BATH_MATS_AND_RUGS, BATH_TOWELS_AND_WASHCLOTHS, BATHROOM_ACCESSORIES, BATHROOM_ACCESSORY_SETS, BATHROOM_VANITIES, BEACH_TOWELS, BEADS_AND_JEWELRY_MAKING_SUPPLIES, BEAUTY_SUPPLEMENTS, BED_SHEETS, BEDDING, BEDROOM_VANITIES, BEDS_AND_ACCESSORIES, BEDS_AND_BED_FRAMES, BELT_BAGS, BELTS_AND_SUSPENDERS, BENCHES, BEVERAGES, BIRD_SUPPLIES, BLANKETS, BLOUSES, BLUSHES_AND_BRONZERS, BODY_CARE, BODY_JEWELRY, BODY_MAKEUP, BODY_MOISTURIZERS, BODY_WASHES, BOOKCASES_AND_STANDING_SHELVES, BOOKENDS, BOOKS, BOOTS, BRACELETS, BRIDESMAID_DRESSES, BROOCHES_AND_LAPEL_PINS, BROW_MAKEUP, BUFFETS_AND_SIDEBOARDS, BUTTON_DOWN_SHIRTS, CABINET_HARDWARE, CABINETS_AND_STORAGE_FURNITURE, CAKE_DECORATING_SUPPLIES, CAMPING_AND_HIKING, CANDLE_HOLDERS, CANDLES, CARDSTOCK_PAPERS, CASUAL_PANTS, CAT_SUPPLIES, CHAIRS, CHANDELIERS, CHARMS_AND_PENDANTS, CHINA_CABINETS_AND_HUTCHES, CLOGS_AND_MULES, CLOTH_NAPKINS, CLOTHING, CLOTHING_AND_CLOSET_STORAGE, CLOTHING_SETS, COASTERS, COATS_AND_JACKETS, COFFEE_AND_TEA_CUPS, COFFEE_MAKERS_AND_ESPRESSO_MACHINES, COLORING_BOOKS, COMMUNICATIONS, COMPUTER_ACCESSORIES, COOKIE_CUTTERS, COOKWARE, COOKWARE_AND_BAKEWARE, COSMETIC_AND_TOILETRY_BAGS, COSTUMES_AND_ACCESSORIES, CRAFT_ADHESIVES_AND_MAGNETS, CRAFT_CUTTING_TOOLS, CRAFT_MOLDS, CRIBS_AND_TODDLER_BEDS, CURTAIN_AND_DRAPE_RODS, CURTAINS_AND_DRAPES, CUTTING_BOARDS, CYCLING, DECORATIVE_BOWLS, DECORATIVE_JARS, DECORATIVE_TAPESTRIES, DECORATIVE_TRAYS, DEODORANTS_AND_ANTIPERSPIRANTS, DESK_AND_SHELF_CLOCKS, DESKS, DIAPER_BAGS, DINNERWARE, DISHWASHERS, DOG_SUPPLIES, DOOR_MATS, DRAWING_AND_PAINTING, DRESS_PANTS, DRESSERS, DRESSES, DRILLS_AND_SCREWDRIVERS, DRINKWARE, DUFFEL_BAGS, DUVET_COVERS, DVDS_AND_VIDEOS, EARRINGS, ELECTRONICS_ACCESSORIES, ENGAGEMENT_AND_WEDDING_RINGS, ENTERTAINMENT_CENTERS_AND_TV_STANDS, ERASERS, EYE_MAKEUP, EYE_SHADOW, EYELINERS, FABRIC, FACE_COVERINGS, FACE_LOTIONS_AND_CREAMS, FACE_MAKEUP, FACIAL_CLEANSERS, FACIAL_MOISTURIZERS, FALSE_EYELASHES, FIGURINES, FIREPLACE_AND_WOOD_STOVE_ACCESSORIES, FIREPLACES, FISHING, FLAGS_AND_WINDSOCKS, FLATS, FLATWARE, FLOOR_LAMPS, FLOWER_GIRL_DRESSES, FOOD_AND_BEVERAGE_CARRIERS, FOOD_COOKERS_AND_STEAMERS, FOOD_ITEMS, FOOD_MIXERS_AND_BLENDERS, FOOD_STORAGE_CONTAINERS, FOOD_STORAGE_SUPPLIES, FOUNDATIONS_AND_CONCEALERS, FOUNTAINS_AND_PONDS, FRAGRANCE, FURNITURE, FURNITURE_SETS, GAMES, GARDENING, GARDENING_TOOLS, GLOVES_AND_MITTENS, GLUES_AND_TAPES, GROOM_AND_GROOMSMEN_SUITS, HAIR, HAIR_ACCESSORIES, HAIR_CARE, HAIR_COLOR, HAIR_COMBS, HAIR_PINS_CLAWS_AND_CLIPS, HAIR_REMOVAL, HAIR_TOOLS, HAIR_TREATMENT, HAIR_WREATHS, HAND_AND_FOOT_CARE, HAND_SOAPS_AND_SANITIZERS, HANDBAGS, HANDKERCHIEFS, HARDWARE_SUPPLIES, HATS, HEADBOARDS_AND_FOOTBOARDS, HEADWEAR, HIGHLIGHTERS, HOBBIES_AND_CREATIVE_ARTS, HOME_ACCESSORIES, HOME_DECOR_DECALS, HOME_FRAGRANCE_ACCESSORIES, HOME_FRAGRANCES, HOME_IMPROVEMENT_TOOLS_AND_SUPPLIES, HOSIERY, HOUSEHOLD_APPLIANCES, HOUSEHOLD_SUPPLIES, INCENSE, INDOOR_GAMES, JEANS, JEWELRY_AND_WATCH_ACCESSORIES, JEWELRY_AND_WATCHES, JEWELRY_SETS, JUMPSUITS_AND_ROMPERS, KEYCHAINS, KITCHEN_AND_DINING, KITCHEN_AND_DINING_ROOM_TABLES, KITCHEN_APPLIANCES, KITCHEN_KNIVES, KITCHEN_LINENS, KITCHEN_MATS, KITCHEN_ORGANIZERS, KITCHEN_TOOLS_AND_UTENSILS, KITCHEN_TOWELS, KNITTING_AND_CROCHET, KNITTING_AND_CROCHET_TOOLS, LAMP_SHADES, LAMPS, LANYARDS, LAUNDRY_HAMPERS_AND_SUPPLIES, LAWN_AND_GARDEN, LAWN_AND_GARDEN_DECOR, LAWN_ORNAMENTS_AND_GARDEN_SCULPTURES, LEGGINGS, LEOTARDS_AND_UNITARDS, LIGHTING, LIGHTING_ACCESSORIES, LIGHTING_FIXTURES, LIP_BALMS, LIP_CARE, LIP_MAKEUP, LIPSTICKS_AND_LIP_GLOSSES, MAGAZINES_AND_NEWSPAPERS, MAGNETS, MAKEUP, MAKEUP_TOOLS, MASCARAS, MATTRESSES, MEASURES_AND_RULERS, MEASURING_TOOLS_AND_SENSORS, MESSENGER_BAGS, MIRRORS, MUSIC_AND_SOUND_RECORDINGS, NAIL_ART, NAIL_ART_KIT_AND_TOOLS, NAIL_CARE, NAIL_POLISHES, NAILS, NECKLACES, NECKTIES, NIGHT_LIGHTS_AND_AMBIENT_LIGHTING, NIGHTSTANDS, NOVELTY_SIGNS, ONE_PIECES, ONESIES, OTTOMANS, OUTDOOR_FURNITURE, OUTDOOR_FURNITURE_SETS, OUTDOOR_GAMES, OUTDOOR_GRILLS, OUTDOOR_LIVING, OUTDOOR_PLAY_EQUIPMENT, OUTDOOR_RECREATION, OUTDOOR_RUGS, OUTDOOR_SEATING, OUTDOOR_STRUCTURES, OUTDOOR_TABLES, OUTERWEAR, OVENS_AND_COOKTOPS, OVERALLS, OXFORDS_AND_LOAFERS, PAINT_AND_PAINT_TOOLS, PANTS, PAPER_CRAFTS, PARASOLS_AND_RAIN_UMBRELLAS, PARTY_AND_CELEBRATION, PENDANT_LIGHTS, PENS_AND_PENCILS, PERFUMES_AND_COLOGNES, PET_CARRIERS_AND_CRATES, PET_COLLARS_AND_HARNESSES, PET_SUPPLIES, PHOTO_ALBUMS_AND_STORAGE, PICTURE_FRAMES, PILLOWCASES_AND_SHAMS, PINBACK_BUTTONS, PLACEMATS, PLANTS, PONYTAIL_HOLDERS, POOL_AND_SPA_ACCESSORIES, POSTERS_PRINTS_AND_VISUAL_ARTWORK, POTS_AND_PLANTERS, POTTERY_AND_SCULPTING, PRIMERS_AND_MAKEUP_SETTERS, PUMPS, PUZZLES, QUILTS_AND_COMFORTERS, RAZORS_AND_SHAVING_TOOLS, RINGS, RUGS, RUNNER_RUGS, SANDALS, SASHES, SAWS, SCARVES_AND_SHAWLS, SCULPTURES_AND_STATUES, SEASONAL_AND_HOLIDAY_DECORATIONS, SEATING, SERUMS_AND_ESSENCES, SERVEWARE, SEWING_MACHINES, SEWING_PATTERNS, SHAMPOO_AND_CONDITIONER, SHOE_ACCESSORIES, SHOES, SHOPPING_TOTES, SHORTS, SHOWER_CURTAINS, SKINCARE, SKINCARE_MASKS_AND_PEELS, SKIRTS, SLEEPWEAR_AND_LOUNGEWEAR, SLIPCOVERS_AND_CUSHIONS, SLIPPERS, SNEAKERS_AND_ATHLETIC_SHOES, SOCKS_AND_TIGHTS, SOFAS, SPORTS_UNIFORMS, STEMWARE, STOCKINGS, STORAGE_AND_ORGANIZATION, STORAGE_CABINETS_AND_LOCKERS, STORAGE_HOOKS_AND_RACKS, SUITCASES, SUITS, SUITS_AND_SUIT_SEPARATES, GLASSES_AND_SUNGLASSES, SUNSCREEN, SWEATERS_AND_CARDIGANS, SWEATSHIRTS_AND_HOODIES, SWIMWEAR, T_SHIRTS, TABLE_LAMPS, TABLE_RUNNERS, TABLECLOTHS, TABLES, TABLEWARE, TANK_TOPS, TANNING_OILS_AND_LOTIONS, TEETH_WHITENING, TEETH_WHITENING_TOOLS, TELEPHONY, TEXTILE_AND_SEWING, THREAD_AND_YARN, THROW_PILLOWS, TIARAS, TOILET_PAPER_HOLDERS, TONERS_AND_ASTRINGENTS, TOOL_STORAGE_AND_ORGANIZATION, TOOLS, TOPS, TOWEL_RACKS_AND_HOLDERS, TOYS, TRADITIONAL_AND_CEREMONIAL_CLOTHING, TUMBLERS_AND_WATER_BOTTLES, UNIFORMS, VASES, VEHICLE_PARTS_AND_ACCESSORIES, VEILS, WALL_CLOCKS, WALL_LIGHT_FIXTURES, WALL_PAINTS, WALL_SHELVES_AND_LEDGES, WALLETS_AND_CARD_CASES, WALLPAPERS, WATCHES, WATERING_AND_IRRIGATION, WEDDING_CEREMONY_DECOR, WEDDING_CLOTHING, WEDDING_DECOR, WEDDING_DRESS, WEDDING_GIFTS, WEDDING_STATIONERY, WEDDING_TABLE_DECOR, WIGS_AND_HAIR_EXTENSIONS, WINDOW_BLINDS_AND_SHADES, WINDOW_TREATMENT_ACCESSORIES, WINDOW_TREATMENTS, WINE_RACKS, WOOD_BOARDS_AND_PLANKS, WOODWORKING_MATERIALS, WOODWORKING_PLANS, WORK_BENCHES, WREATHS_AND_GARLANDS)

### `CollaborativeCatalogPriceOperator`

Type: string enum(LESS_THAN, LESS_THAN_OR_EQUALS, GREATER_THAN, GREATER_THAN_OR_EQUALS)

### `NonNullableCatalogsCurrency`

Currency Codes from ISO 4217.

Type: string enum(AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF, BMD, BND, BOB, BRL, BSD, BTN, BWP, BYN, BYR, BZD, CAD, CDF, CHF, CLP, CNY, COP, CRC, CUC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ERN, ETB, EUR, FJD, FKP, GBP, GEL, GGP, GHS, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HRK, HTG, HUF, IDR, ILS, IMP, INR, IQD, IRR, ISK, JEP, JMD, JOD, JPY, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MRO, MUR, MVR, MWK, MXN, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SPL, SRD, STD, SVC, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD, TVD, TWD, TZS, UAH, UGX, USD, UYU, UZS, VEF, VND, VUV, WST, XAF, XCD, XDR, XOF, XPF, YER, ZAR, ZMW, ZWD)

### `SupplementalItemSegmentType`

Supplemental item segment categories. Today only LOCAL_INVENTORY is in use; corresponds to the "Location data" filter in the catalogs UI.

Type: string enum(LOCAL_INVENTORY)

