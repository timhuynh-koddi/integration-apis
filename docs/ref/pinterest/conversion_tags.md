# Pinterest API v5: Conversion Tags

> Source: Pinterest REST API v5 OpenAPI spec (https://github.com/pinterest/api-description, v5.32.0); docs https://developers.pinterest.com/docs/api/v5/. Base URL: https://api.pinterest.com/v5. Fetched 2026-11-19.

Operations: 5

---

## POST /ad_accounts/{ad_account_id}/conversion_tags

**Create conversion tag**

Create a conversion tag, also known as [Pinterest tag](https://help.pinterest.com/en/business/article/set-up-the-pinterest-tag), with the option to enable enhanced match.

The Pinterest Tag tracks actions people take on the ad account's website after they view the ad account's ad on Pinterest. The advertiser needs to customize this tag to track conversions.

For more information, see:

[Set up the Pinterest tag](https://help.pinterest.com/en/business/article/set-up-the-pinterest-tag)

[Pinterest Tag](/docs/track-conversions/pinterest-tag/)

[Enhanced match](/docs/track-conversions/pinterest-tag/#enhanced-match)

Operation ID: `conversion_tags/create`

Scopes: pinterest_oauth2: ads:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `ConversionTagCreate`

**Response 200** (`application/json`): `ConversionTag`

**Response 201** (`application/json`): `ConversionTag`

---

## GET /ad_accounts/{ad_account_id}/conversion_tags

**List conversion tags**

List conversion tags associated with an ad account.

Operation ID: `conversion_tags/list`

Scopes: pinterest_oauth2: ads:read; client_credentials: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| filter_deleted | query | boolean |  | Filter by deleted status _(default false)_ |
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Response 200** (`application/json`): object{items: array<`ConversionTag`>}

---

## GET /ad_accounts/{ad_account_id}/conversion_tags/ocpm_eligible

**Get Ocpm eligible conversion tags**

Get Ocpm eligible conversion tag events for an ad account.

Operation ID: `ocpm_eligible_conversion_tags/get`

Scopes: pinterest_oauth2: ads:read; client_credentials: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Response 200** (`application/json`): `ConversionTagsOcpmEligibleResponse`

---

## GET /ad_accounts/{ad_account_id}/conversion_tags/page_visit

**Get page visit conversion tags**

Get all page visit conversion tag events for an ad account.

Operation ID: `page_visit_conversion_tags/get`

Scopes: pinterest_oauth2: ads:read; client_credentials: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| bookmark | query | string |  | Cursor used to fetch the next page of items |
| page_size | query | integer |  | Maximum number of items to include in a single page. See documentation on [Pagination](/docs/reference/pagination/) for more information. _(default 25; minimum 1; maximum 250)_ |
| order | query | `Pinterest.Lib.PaginationOrder` |  | The order in which to sort the items returned: "ASCENDING" or "DESCENDING" by ID. Note that higher-value IDs are associated with more-recently added items. _(default "ASCENDING")_ |
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Response 200** (`application/json`): object{bookmark: string, items: array<`ConversionEventResponse`>}

---

## GET /ad_accounts/{ad_account_id}/conversion_tags/{conversion_tag_id}

**Get conversion tag**

Get information about an existing conversion tag.

Operation ID: `conversion_tags/get`

Scopes: pinterest_oauth2: ads:read; client_credentials: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |
| conversion_tag_id | path | string | yes | Id of the conversion tag. _(maxLength 18)_ |

**Response 200** (`application/json`): `ConversionTag`

---

## Schemas

### `ConversionEventResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| ad_account_id | string |  | Id of the ad account. |
| conversion_event | `ConversionTagType` |  |  |
| conversion_tag_id | string |  | Id of the tag. |
| created_time | integer |  | Creation date in epoch format. |
| reporting_conversion_event | string |  | For advertiser-defined events, the reporting event label shown in optimization UIs. |

### `ConversionTag`

| Field | Type | Required | Description |
|---|---|---|---|
| ad_account_id | string | yes | Ad account ID. _(read-only)_ |
| status | `EntityStatus` |  | _(read-only)_ |

### `ConversionTagCreate`

Resource create operation model.

| Field | Type | Required | Description |
|---|---|---|---|
| aem_db_enabled | boolean |  | Whether Automatic Enhanced Match birthdate is enabled. See [Enhanced match](https://help.pinterest.com/en/business/article/enhanced-match) for more information. _(nullable)_ |
| aem_enabled | boolean |  | Whether Automatic Enhanced Match email is enabled. See [Enhanced match](https://help.pinterest.com/en/business/article/enhanced-match) for more information. _(nullable)_ |
| aem_external_id_enabled | boolean |  | Whether Automatic Enhanced Match external ID is enabled. See [Enhanced match](https://help.pinterest.com/en/business/article/enhanced-match) for more information. _(nullable)_ |
| aem_fnln_enabled | boolean |  | Whether Automatic Enhanced Match name is enabled. See [Enhanced match](https://help.pinterest.com/en/business/article/enhanced-match) for more information. _(nullable)_ |
| aem_ge_enabled | boolean |  | Whether Automatic Enhanced Match gender is enabled. See [Enhanced match](https://help.pinterest.com/en/business/article/enhanced-match) for more information. _(nullable)_ |
| aem_loc_enabled | boolean |  | Whether Automatic Enhanced Match location is enabled. See [Enhanced match](https://help.pinterest.com/en/business/article/enhanced-match) for more information. _(nullable)_ |
| aem_ph_enabled | boolean |  | Whether Automatic Enhanced Match phone is enabled. See [Enhanced match](https://help.pinterest.com/en/business/article/enhanced-match) for more information. _(nullable)_ |
| aem_product_metadata_enabled | boolean |  | Whether Automatic Enhanced Match product metadata is enabled. Product metadata may include details such as product ID, product category, order value, and order ID. See [Enhanced match](https://help.pinterest.com/en/business/article/enhanced-match) for the current list and more information. _(nullable)_ |
| md_frequency | number |  | Metadata ingestion frequency. _(nullable; default 1)_ |
| name | string | yes | Conversion tag name. |

### `ConversionTagsOcpmEligibleResponse`

Response for OCPM eligible conversion tags endpoint.
 Maps ad_account_id to an array of ConversionEventResponse.

Type: map<string, array<`ConversionEventResponse`>>

### `Pinterest.Lib.PaginationOrder`

Type: string enum(ASCENDING, DESCENDING)

### `ConversionTagType`

conversion tag type

Type: string enum(PAGE_LOAD, UNKNOWN, INITIALIZED, PAGE_VISIT, SIGNUP, CHECKOUT, CUSTOM, VIEW_CATEGORY, SEARCH, ADD_TO_CART, WATCH_VIDEO, LEAD, APP_INSTALL, WEB_SESSION, EXTERNAL_MEASUREMENT, ADD_PAYMENT_INFO, ADD_TO_WISHLIST, INITIATE_CHECKOUT, SUBSCRIBE, VIEW_CONTENT, ADVERTISER_DEFINED_EVENT, APP_OPEN, CONTACT, SCHEDULE, FIND_LOCATION, CUSTOMIZE_PRODUCT, SUBMIT_APPLICATION, START_TRIAL, APP_INSTALL_CHECKOUT, APP_INSTALL_ADD_TO_CART)

### `ConversionTagCommon`

| Field | Type | Required | Description |
|---|---|---|---|
| code_snippet | string |  | Tag code snippet. _(read-only)_ |
| configs | `ConversionTagConfigs` |  | _(read-only)_ |
| enhanced_match_status | `EnhancedMatchStatusType` |  | The enhanced match status of the tag _(nullable; read-only)_ |
| id | string |  | Tag ID. |
| last_fired_time_ms | number |  | Time for the last event fired. _(nullable; read-only)_ |
| name | string | yes | Conversion tag name. |
| version | string |  | Version number. _(read-only)_ |

### `EntityStatus`

Entity status

Type: string enum(ACTIVE, PAUSED, ARCHIVED, DRAFT, DELETED_DRAFT)

### `ConversionTagConfigs`

| Field | Type | Required | Description |
|---|---|---|---|
| aem_db_enabled | boolean |  | Whether Automatic Enhanced Match birthdate is enabled. See [Enhanced match](https://help.pinterest.com/en/business/article/enhanced-match) for more information. _(nullable; default false)_ |
| aem_enabled | boolean |  | Whether Automatic Enhanced Match email is enabled. See [Enhanced match](https://help.pinterest.com/en/business/article/enhanced-match) for more information. _(nullable; default false)_ |
| aem_external_id_enabled | boolean |  | Whether Automatic Enhanced Match external ID is enabled. See [Enhanced match](https://help.pinterest.com/en/business/article/enhanced-match) for more information. _(nullable; default false)_ |
| aem_fnln_enabled | boolean |  | Whether Automatic Enhanced Match name is enabled. See [Enhanced match](https://help.pinterest.com/en/business/article/enhanced-match) for more information. _(nullable; default false)_ |
| aem_ge_enabled | boolean |  | Whether Automatic Enhanced Match gender is enabled. See [Enhanced match](https://help.pinterest.com/en/business/article/enhanced-match) for more information. _(nullable; default false)_ |
| aem_loc_enabled | boolean |  | Whether Automatic Enhanced Match location is enabled. See [Enhanced match](https://help.pinterest.com/en/business/article/enhanced-match) for more information. _(nullable; default false)_ |
| aem_ph_enabled | boolean |  | Whether Automatic Enhanced Match phone is enabled. See [Enhanced match](https://help.pinterest.com/en/business/article/enhanced-match) for more information. _(nullable; default false)_ |
| aem_product_metadata_enabled | boolean |  | Whether Automatic Enhanced Match product metadata is enabled. Product metadata may include details such as product ID, product category, order value, and order ID. See [Enhanced match](https://help.pinterest.com/en/business/article/enhanced-match) for the current list and more information. _(nullable; default false)_ |
| md_frequency | number |  | Metadata ingestion frequency. _(nullable; default 1)_ |
| no_code_capi_domains | array<string> |  | List of advertiser subdomains configured for NoCodeCAPI calls. |

### `EnhancedMatchStatusType`

Type: string enum(UNKNOWN, NOT_VALIDATED, VALIDATING_IN_PROGRESS, VALIDATION_COMPLETE)

