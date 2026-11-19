# Custom Category

> Source: The Trade Desk Platform API reference (REST), generated from the published OpenAPI spec (https://open.thetradedesk.com/advertiser/docsApp/AdvertiserReferences/api/doc/ApiReferencePlatform). Base URL: https://api.thetradedesk.com/v3. Fetched 2026-11-19.

Endpoints: 9

---

## POST /v3/customcategory

Create a contextual custom category. NOTE: This endpoint is only for creating [TTD contextual custom categories](/v3/portal/api/doc/ContextualCategoriesTTD). For third-party contextual custom categories, consider requesting access to the [Contextual Custom Category](/v3/portal/api/area/Contextual%20Custom%20Category) endpoints designated specifically for third-party data providers. Similarly, for direct URL targeting categories, consider requesting access to the [Direct Url Targeting Category](/v3/portal/api/area/Direct%20Url%20Targeting%20Category) endpoints.

Operation ID: `post-customcategory`

**Request body** (`application/json`, required): `CustomCategory_CustomCategory_post`

**Response 200** (`application/json`): `CustomCategory_CustomCategorySummary`

---

## PUT /v3/customcategory

Update the keywords or the language code of an existing contextual custom category.

Operation ID: `put-customcategory`

**Request body** (`application/json`, required): `CustomCategory_CustomCategory_put`

**Response 200** (`application/json`): `CustomCategory_CustomCategorySummary`

---

## GET /v3/customcategory/{customCategoryId}

Get an existing TTD contextual custom category.

Operation ID: `get-customcategory-customcategoryid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| customCategoryId | path | integer (int64) | yes | The platform ID of the TTD contextual custom category that you want to retrieve. |

**Response 200** (`application/json`): `CustomCategory_CustomCategoryAndStatus`

---

## DELETE /v3/customcategory/{customCategoryId}

Delete an existing custom category. Will not remove from any bid lists of ad groups.

Operation ID: `delete-customcategory-customcategoryid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| customCategoryId | path | integer (int64) | yes | The platform ID of the custom category that you want to delete. |

**Response 200** (`application/json`): boolean

---

## GET /v3/customcategory/advertiser/{advertiserId}

Retrieve a list of all TTD contextual custom categories that belong to a specific advertiser.

Operation ID: `get-customcategory-advertiser-advertiserid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | path | string | yes | The platform ID of the advertiser that owns the TTD contextual custom categories you want to retrieve. |

**Response 200** (`application/json`): array<`CustomCategory_CustomCategorySummary`>

---

## POST /v3/customcategory/query

Retrieve a list of all custom categories that belong to a specific partner or advertiser by category type and data provider.

Operation ID: `post-customcategory-query`

**Request body** (`application/json`, required): `CustomCategory_CustomCategoryQuery`

**Response 200** (`application/json`): array<`CustomCategory_CustomCategorySummary`>

---

## GET /v3/customcategory/name/{customCategoryId}

Retrieve the name of a custom category based on its ID.

Operation ID: `get-customcategory-name-customcategoryid`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| customCategoryId | path | integer (int64) | yes | The platform ID of the custom category you want to look up. |

**Response 200** (`application/json`): `TheTradeDesk.AdPlatform.API.PublicAPI.Models_IdName`

---

## POST /v3/customcategory/rename

Rename an existing custom category.

Operation ID: `post-customcategory-rename`

**Request body** (`application/json`, required): `CustomCategory_CustomCategoryRenameQuery_post`

**Response 200** (`application/json`): `CustomCategory_CustomCategorySummary`

---

## GET /v3/customcategory/ttd/languages

Retrieve the names and codes of the supported languages for matching TTD contextual custom category keywords to webpages and apps.

Operation ID: `get-customcategory-ttd-languages`

**Response 200** (`application/json`): array<`CustomCategory_CustomCategoryLanguage`>

---

## Schemas

### `CustomCategory_CustomCategoryAndStatus`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The platform ID of the advertiser that owns this custom category. If the partner ID is provided, this property is optional for TTD contextual custom categories. _(nullable)_ |
| CustomCategoryId | string |  | The platform ID of the custom category. Ignored on create, when The Trade Desk platform generates and returns the ID. _(nullable)_ |
| CustomCategoryName | string |  | The name of the custom category, which appears in the UI. The maximum character length is 100. _(maxLength 100)_ |
| CustomCategoryType | `CustomCategory_CustomCategoryType` |  | Indicates how the category should be used in bid lists. Here's what you need to know about this property:   - Required for TTD Contextual Categories.   - You cannot update this value after you create the category. |
| Keywords | array<`CustomCategory_CustomCategoryKeyword`> |  | A list of keywords that make up the custom category. Here's what you need to know:   - A category must have at least one (1) keyword with the `MatchType` property value set to `ExactMatch` (also known as the `Or` logic type in the UI).   - You can add a maximum of five (5) keywords with the `MatchType` property value set to `ExactRequired` (also known as the `And` logic type in the UI) per category.   - A category can have a maximum of 5,000 keywords total. _(nullable)_ |
| LanguageCode | string |  | The language used for matching webpages and apps with the category keywords. IMPORTANT: This property is required for categories that have keywords with the `MatchApplication` property value set to `Similar`.   **TIP**: To get the list of supported languages and their codes, use the [GET/customcategory/ttd/languages](/v3/portal/api/ref/get-customcategory-ttd-languages) endpoint. _(nullable)_ |
| PartnerId | string |  | The ID of the partner that owns this custom category. If the advertiser ID is provided, this property is optional for TTD contextual custom categories. _(nullable)_ |
| Status | `CustomCategory_CustomCategoryStatus` |  | The status of the Custom Category.   Before a custom category is fully processed and “live”, it’s possible to bid on inventory outside of the included keywords.   We recommend waiting until a category is live before assigning to your ad group |
| TTDContextualCategoryId | string |  | The CustomCategoryId, but formatted to be used within the bidlist API.   Use this value when assigning this category to an adgroup _(nullable)_ |

### `CustomCategory_CustomCategoryLanguage`

| Field | Type | Required | Description |
|---|---|---|---|
| LanguageCode | string |  | The three-letter ISO639-3 language code. _(nullable)_ |
| LanguageName | string |  | The language name. _(nullable)_ |

### `CustomCategory_CustomCategoryQuery`

| Field | Type | Required | Description |
|---|---|---|---|
| CustomCategorySourceType | `CustomCategory_CustomCategorySourceType` | yes | The custom category type and data provider. |
| AdvertiserId | string |  | The platform ID of the advertiser that owns this custom category. _(nullable)_ |
| PartnerId | string |  | The platform ID of the partner that owns this custom category. _(nullable)_ |

### `CustomCategory_CustomCategoryRenameQuery_post`

| Field | Type | Required | Description |
|---|---|---|---|
| NewName | string | yes | The name of the custom category. The maximum character length is 256. _(maxLength 256)_ |

### `CustomCategory_CustomCategorySummary`

| Field | Type | Required | Description |
|---|---|---|---|
| AdvertiserId | string |  | The platform ID of the advertiser that owns the custom category. _(nullable)_ |
| CategoryBidListType | `Contextual_ContextualCategoryBidListType` |  | Indicates how the category should be used in bid lists.   **NOTE**: This value is returned for all categories except TTD contextual categories. |
| CustomCategoryId | string |  | The platform ID of the custom category. _(nullable)_ |
| CustomCategoryName | string |  | The name of the custom category. _(nullable)_ |
| CustomCategoryType | `CustomCategory_CustomCategoryType` |  | Indicates how the category should be used in bid lists.   **NOTE**: This value is returned only for TTD contextual categories. |
| KeywordCount | integer (int64) |  | The total number of keywords in the custom category. |
| LanguageCode | string |  | The language used for matching webpages and apps with the category keywords. _(nullable)_ |
| PartnerId | string |  | The platform ID of the partner that owns the custom category. _(nullable)_ |
| Status | `CustomCategory_CustomCategoryStatus` |  | The current status of the custom category.    **IMPORTANT**: Be sure to wait until the category is live before enabling your ad groups, especially for exclusion categories (with the `CustomCategoryType` property value set to `Block`). It takes up to three hours to process a category, and any bidding on inventory before the category is fully processed may result in not blocking webpages or apps with the specified keywords. |

### `CustomCategory_CustomCategory_post`

| Field | Type | Required | Description |
|---|---|---|---|
| CustomCategoryName | string | yes | The name of the custom category, which appears in the UI. The maximum character length is 100. _(maxLength 100)_ |
| AdvertiserId | string |  | The platform ID of the advertiser that owns this custom category. If the partner ID is provided, this property is optional for TTD contextual custom categories. _(nullable)_ |
| CustomCategoryType | `CustomCategory_CustomCategoryType` |  | Indicates how the category should be used in bid lists. Here's what you need to know about this property:   - Required for TTD Contextual Categories.   - You cannot update this value after you create the category. |
| Keywords | array<`CustomCategory_CustomCategoryKeyword`> |  | A list of keywords that make up the custom category. Here's what you need to know:   - A category must have at least one (1) keyword with the `MatchType` property value set to `ExactMatch` (also known as the `Or` logic type in the UI).   - You can add a maximum of five (5) keywords with the `MatchType` property value set to `ExactRequired` (also known as the `And` logic type in the UI) per category.   - A category can have a maximum of 5,000 keywords total. _(nullable)_ |
| LanguageCode | string |  | The language used for matching webpages and apps with the category keywords. IMPORTANT: This property is required for categories that have keywords with the `MatchApplication` property value set to `Similar`.   **TIP**: To get the list of supported languages and their codes, use the [GET/customcategory/ttd/languages](/v3/portal/api/ref/get-customcategory-ttd-languages) endpoint. _(nullable)_ |
| PartnerId | string |  | The ID of the partner that owns this custom category. If the advertiser ID is provided, this property is optional for TTD contextual custom categories. _(nullable)_ |

### `CustomCategory_CustomCategory_put`

| Field | Type | Required | Description |
|---|---|---|---|
| CustomCategoryId | string | yes | The platform ID of the custom category. Ignored on create, when The Trade Desk platform generates and returns the ID. |
| AdvertiserId | string |  | The platform ID of the advertiser that owns this custom category. If the partner ID is provided, this property is optional for TTD contextual custom categories. _(nullable)_ |
| CustomCategoryName | string |  | The name of the custom category, which appears in the UI. The maximum character length is 100. _(maxLength 100)_ |
| CustomCategoryType | `CustomCategory_CustomCategoryType` |  | Indicates how the category should be used in bid lists. Here's what you need to know about this property:   - Required for TTD Contextual Categories.   - You cannot update this value after you create the category. |
| Keywords | array<`CustomCategory_CustomCategoryKeyword`> |  | A list of keywords that make up the custom category. Here's what you need to know:   - A category must have at least one (1) keyword with the `MatchType` property value set to `ExactMatch` (also known as the `Or` logic type in the UI).   - You can add a maximum of five (5) keywords with the `MatchType` property value set to `ExactRequired` (also known as the `And` logic type in the UI) per category.   - A category can have a maximum of 5,000 keywords total. _(nullable)_ |
| LanguageCode | string |  | The language used for matching webpages and apps with the category keywords. IMPORTANT: This property is required for categories that have keywords with the `MatchApplication` property value set to `Similar`.   **TIP**: To get the list of supported languages and their codes, use the [GET/customcategory/ttd/languages](/v3/portal/api/ref/get-customcategory-ttd-languages) endpoint. _(nullable)_ |
| PartnerId | string |  | The ID of the partner that owns this custom category. If the advertiser ID is provided, this property is optional for TTD contextual custom categories. _(nullable)_ |

### `TheTradeDesk.AdPlatform.API.PublicAPI.Models_IdName`

| Field | Type | Required | Description |
|---|---|---|---|
| Id | string |  | The identifier for the object instance |
| Name | string |  | The name for the object instance |

### `CustomCategory_CustomCategoryKeyword`

| Field | Type | Required | Description |
|---|---|---|---|
| MatchApplication | `CustomCategory_KeywordMatchApplication` |  | The method for matching the keyword to webpages or apps. |
| MatchType | `CustomCategory_KeywordMatchType` |  | The logic to be used for matching the keyword to webpages or apps. |
| Value | string |  | The word or phrase to be searched for on webpages or in apps. Here's what you need to know:    You can use only alphanumeric characters, spaces between words in the middle of a phrase, and apostrophes.    Spaces around keywords (namely, at the beginning or the end of the phrase) will be automatically removed. For example, "cat food" and " cat food " will result in duplicate keywords.    Any special characters and punctuation other than apostrophes will be automatically removed and might result in duplicate keywords.    Keywords are not case-sensitive. For example, "USA" and "usa" will result in duplicate keywords. _(nullable)_ |

### `CustomCategory_CustomCategoryStatus`

Type: string enum(NotReady, Live)

### `CustomCategory_CustomCategoryType`

Type: string enum(Block, Target)

### `CustomCategory_CustomCategorySourceType`

Type: string enum(IntegralContextualCategory, Peer39ContextualCategory, SemasioContextualCategory, TTDContextualCategory, DoubleVerifyContextualCategory, DoubleVerifyBrandSafety, EmetriqContextualCategory, ComscoreContextualCategory, CaptifyContextualCategory, AdFontesContextualCategory, GumGumContextualCategory, NewsGuardContextualCategory, IllumaContextualCategory, AudigentContextualCategory, ShareThisContextualCategory, WeboramaContextualCategory, DstilleryContextualCategory, OSDSContextualCategory, CrossPixelContextualCategory, LumenContextualCategory, AdelaideContextualCategory, QwarryContextualCategory, BarometerContextualCategory, SirdataContextualCategory, MobianContextualCategory, SilverpushContextualCategory, IntegralBrandSafety, IntegralVideoBrandSafety, FourDContextualCategory, AeternaLabsContextualCategory, XplnContextualCategory, AblidaContextualCategory, hyScoreContextualCategory, TrueRelevanceContextualCategory, NanoInteractiveContextualCategory, RaasLabContextualCategory, AnokiIncContextualCategory)

### `Contextual_ContextualCategoryBidListType`

Type: string enum(Both, Block, Target)

### `CustomCategory_KeywordMatchApplication`

Type: string enum(Exact, Similar)

### `CustomCategory_KeywordMatchType`

Type: string enum(ExactMatch, ExactRequired, ExactAvoid)

