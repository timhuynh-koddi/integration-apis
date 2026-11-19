# Pinterest API v5: Keywords

> Source: Pinterest REST API v5 OpenAPI spec (https://github.com/pinterest/api-description, v5.32.0); docs https://developers.pinterest.com/docs/api/v5/. Base URL: https://api.pinterest.com/v5. Fetched 2026-11-19.

Operations: 5

---

## GET /ad_accounts/{ad_account_id}/keywords

**Get keywords**

Get a list of keywords based on the filters provided. If no filter is provided, it will default to the `ad_account_id` filter, which means it will only return keywords that specifically have `parent_id` set to the `ad_account_id`. Note: Keywords can have `ad_account_ids`, `campaign_ids`, and `ad_group_ids` set as their `parent_ids`. Keywords created through Ads Manager will have their `parent_id` set to an `ad_group_id`, not `ad_account_id`.

    For more information, see [Keyword targeting](https://help.pinterest.com/en/business/article/keyword-targeting).

    **Notes:**
    - Advertisers and campaigns can only be assigned keywords with excluding (`_NEGATIVE`).
    - All keyword match types are available for ad groups.

    For more information on match types, see [match type enums](/docs/api-features/targeting-overview/).

    **Returns:**
    - A successful call returns an object containing an array of new keyword objects and an empty `errors` object array.
    - An unsuccessful call returns an empty keywords array, and instead, inserts the entire object with nulled/negated properties into the `errors` object array:
      ```json
      {
        "keywords": [],
        "errors": [
          {
            "data": {
              "archived": null,
              "match_type": "EXACT",
              "parent_type": null,
              "value": "foobar",
              "parent_id": null,
              "type": "keyword",
              "id": null
            },
            "error_messages": [
              "Advertisers and Campaigns only accept excluded targeting attributes."
            ]
          }
        ]
      }

Operation ID: `keywords/get`

Scopes: pinterest_oauth2: ads:read; client_credentials: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| campaign_id | query | string |  | Campaign Id to use to filter the results. _(maxLength 18)_ |
| ad_group_id | query | string |  | Ad group Id. _(maxLength 18)_ |
| ad_group_ids | query | array<`Pinterest.Lib.IntegerFormatType`> |  | List of Ad group Ids to retrieve keywords from. This feature is currently in BETA and is not available to all users. |
| match_types | query | array<`MatchType`> |  | Keyword [match type](/docs/api-features/targeting-overview/) |
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |
| bookmark | query | string |  | Cursor used to fetch the next page of items |
| page_size | query | integer |  | Maximum number of items to include in a single page. See documentation on [Pagination](/docs/reference/pagination/) for more information. _(default 25; minimum 1; maximum 250)_ |

**Response 200** (`application/json`): object{bookmark: string, items: array<`Keyword`>}

---

## POST /ad_accounts/{ad_account_id}/keywords

**Create keywords**

Create keywords for the following entity types (advertiser, campaign, ad group, or ad). For more information, see [Keyword targeting](https://help.pinterest.com/en/business/article/keyword-targeting).

  **Notes:**
  - Advertisers and campaigns can only be assigned keywords with excluding (`_NEGATIVE`).
  - All keyword match types are available for ad groups.

  For more information on match types, see [match type enums](/docs/api-features/targeting-overview/).

  **Returns:**
  - A successful call returns an object containing an array of new keyword objects and an empty `errors` object array.
  - An unsuccessful call returns an empty keywords array, and instead, inserts the entire object with nulled/negated properties into the `errors` object array:
    ```json
    {
      "keywords": [],
      "errors": [
        {
          "data": {
            "archived": null,
            "match_type": "EXACT",
            "parent_type": null,
            "value": "foobar",
            "parent_id": null,
            "type": "keyword",
            "id": null
          },
          "error_messages": [
            "Advertisers and Campaigns only accept excluded targeting attributes."
          ]
        }
      ]
    }

Operation ID: `keywords/create`

Scopes: pinterest_oauth2: ads:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `KeywordsCreate`

**Response 200** (`application/json`): `Keywords`

**Response 201** (`application/json`): `Keywords`

---

## PATCH /ad_accounts/{ad_account_id}/keywords

**Update keywords**

Update one or more keywords' bid and archived fields. Archiving
  a keyword effectively deletes it - keywords no longer receive metrics and
  are no longer visible within the parent entity's keywords list.

Operation ID: `keywords/update`

Scopes: pinterest_oauth2: ads:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |

**Request body** (`application/json`, required): `KeywordsUpdate`

**Response 200** (`application/json`): `Keywords`

---

## GET /ad_accounts/{ad_account_id}/keywords/metrics

**Get country's keyword metrics**

See keyword metrics for a specified country, aggregated across all of Pinterest.
  (Definitions are available from the "Get delivery metrics definitions"
  [API endpoint](/docs/api/v5/#operation/delivery_metrics/get)).

Operation ID: `country_keywords_metrics/get`

Scopes: pinterest_oauth2: ads:read; client_credentials: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | Unique identifier of an ad account. _(maxLength 18)_ |
| country_code | query | string | yes | Two letter ISO 3166-1 alpha-2 country code. Supported values: `AU`, `CA`, `GB`, `IE`, `NZ`, and `US`. Other codes are not currently supported. |
| keywords | query | array<string> | yes | Comma-separated keywords |

**Response 200** (`application/json`): `KeywordsMetricsArrayResponse`

---

## GET /trends/keywords/{region}/top/{trend_type}

**List trending keywords**

Get the top trending search keywords among the Pinterest user audience.

Trending keywords can be used to inform ad targeting, budget strategy, and creative decisions about which products and Pins will resonate with your audience.

Geographic, demographic and interest-based filters are available to narrow down to the top trends among a specific audience. Multiple trend types are supported that can be used to identify newly-popular, evergreen or seasonal keywords.

For an interactive way to explore this data, please visit [trends.pinterest.com](https://trends.pinterest.com).

Operation ID: `trending_keywords/list`

Scopes: pinterest_oauth2: user_accounts:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| region | path | `TrendsSupportedRegion` | yes | The geographic region of interest. Only top trends within the specified region will be returned.    The `region` parameter is formatted as ISO 3166-2 country codes delimited by `+`, corresponding to the following geographic areas:   - `US` - United States   - `CA` - Canada   - `DE` - Germany   - `FR` - France   - `ES` - Spain   - `IT` - Italy   - `DE+AT+CH` - Germanic countries   - `GB+IE` - Great Britain & Ireland   - `IT+ES+PT+GR+MT` - Southern Europe   - `PL+RO+HU+SK+CZ` - Eastern Europe   - `SE+DK+FI+NO` - Nordic countries   - `NL+BE+LU` - Benelux   - `AR` - Argentina   - `BR` - Brazil   - `CO` - Colombia   - `MX` - Mexico   - `MX+AR+CO+CL` - Hispanic LatAm   - `AU+NZ` - Australasia   - `MY` - Malaysia   - `PH` - Philippines   - `TH` - Thailand   - `EG` - Egypt   - `CR+DO+EC+GT+PE` - Latin America & Caribbean   - `CY+CZ+GR+HU+MT+PL+RO+SK` - Eastern Europe & Mediterranean   - `TR` - Turkey   - `KR` - South Korea   - `AE+KW+QA+OM+BH+EG+IQ+DZ` - Middle East & North Africa (limited availability)   - `IL+NG+PK+ZA+TR+MA` - Multi-Regional Markets (limited availability)    Regions marked limited availability are not yet open to all apps and may return an error. |
| trend_type | path | `TrendType` | yes | The methodology used to rank how trendy a keyword is.   - `growing` trends have high upward growth in search volume over the last quarter   - `monthly` trends have high search volume in the last month   - `yearly` trends have high search volume in the last year   - `seasonal` trends have high upward growth in search volume over the last month and exhibit a seasonal recurring pattern (typically annual) |
| interests | query | array<`TrendsL1Interest`> |  | The list of supported interests is:   - `animals` - Animals   - `architecture` - Architecture   - `art` - Art   - `beauty` - Beauty   - `childrens_fashion` - Children's Fashion   - `design` - Design   - `diy_and_crafts` - DIY & Crafts   - `education` - Education   - `electronics` - Electronics   - `entertainment` - Entertainment   - `event_planning` - Event Planning   - `finance` - Finance   - `food_and_drinks` - Food & Drink   - `gardening` - Gardening   - `health` - Health   - `home_decor` - Home Decor   - `mens_fashion` - Men's Fashion   - `parenting` - Parenting   - `quotes` - Quotes   - `sport` - Sports   - `travel` - Travel   - `vehicles` - Vehicles   - `wedding` - Wedding   - `womens_fashion` - Women's Fashion |
| genders | query | array<`TrendsGenderFilter`> |  | If set, filters the results to trends among users who identify with the specified gender(s). If unset, trends among all genders will be returned. The `unknown` group includes users with unspecified or customized gender profile settings. |
| ages | query | array<`TrendsAgeBucket`> |  | If set, filters the results to trends among users in the specified age range(s). If unset, trends among all age groups will be returned. |
| include_keywords | query | `KeywordList` |  | If set, filters the results to top trends which include at least one of the specified keywords. If unset, no keyword filtering logic is applied. |
| normalize_against_group | query | boolean |  | Governs how the resulting time series data will be normalized to a [0-100] scale.    By default (`false`), the data will be normalized independently for each keyword.  The peak search volume observation in *each* keyword's time series will be represented by the value 100.  This is ideal for analyzing when an individual keyword is expected to peak in interest.    If set to `true`, the data will be normalized as a group.  The peak search volume observation across *all* keywords in the response will be represented by the value 100, and all other values scaled accordingly.  Use this option when you wish to compare relative search volume between multiple keywords. _(default false)_ |
| limit | query | integer |  | The maximum number of trending keywords that will be returned. Keywords are returned in trend-ranked order, so a `limit` of 50 will return the top 50 trends. _(default 50; minimum 1; maximum 50)_ |
| include_demographics | query | boolean |  | Including the age and gender distribution for each keyword. By default (`false`), the response will not include demographics data. _(default false)_ |

**Response 200** (`application/json`): `TrendingKeywordsResponse`

---

## Schemas

### `Keyword`

| Field | Type | Required | Description |
|---|---|---|---|
| archived | boolean |  |  |
| base_keyword_id | string |  | The ID of the Performance+ base keyword that this keyword was duplicated from in its managed set. Read-only output; set by Pinterest when a Performance+ managed set is created. Setting this field on a request has no effect. _(read-only)_ |
| bid | integer |  | **Note:** bid field has been deprecated. Input will not be set and field will return null. Keyword custom bid in microcurrency - null if inherited from parent ad group. _(nullable)_ |
| id | string | yes | Keyword ID . |
| match_type | `MatchType` | yes | Keyword [match type](/docs/api-features/targeting-overview/) _(nullable)_ |
| parent_id | string | yes | Keyword parent entity ID (advertiser, campaign, ad group). _(read-only)_ |
| parent_type | string |  | Parent entity type (advertiser, campaign, ad group). _(read-only)_ |
| type | string |  | Always keyword _(read-only)_ |
| value | string | yes | Keyword value (120 characters maximum). Set the match type to choose the match behavior. Omit Ads Manager's leading hyphen (-), double quotes (" "), and square brackets ([ ]) from the value. Broad negative keywords support up to 10 tokens. Each sequence of ASCII letters or digits counts as one token. Spaces and special characters separate tokens. For example, "summer's t-shirts" counts as 4 tokens. |

### `KeywordList`

Type: array<`KeywordListItems`>

### `Keywords`

| Field | Type | Required | Description |
|---|---|---|---|
| errors | array<`KeywordError`> | yes | Keyword error _(read-only)_ |
| keywords | array<`Keyword`> | yes | Keywords |

### `KeywordsCreate`

Resource create operation model.

| Field | Type | Required | Description |
|---|---|---|---|
| keywords | array<`KeywordCreateItem`> | yes | Keywords |
| parent_id | string | yes | Keyword data |

### `KeywordsMetricsArrayResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| data | array<`KeywordMetricsResponse`> |  |  |

### `KeywordsUpdate`

Resource create or update operation model.

| Field | Type | Required | Description |
|---|---|---|---|
| keywords | array<`KeywordUpdateItem`> |  | Keywords |

### `MatchType`

Keyword match type

Type: string enum(BROAD, PHRASE, EXACT, EXACT_NEGATIVE, PHRASE_NEGATIVE, BROAD_NEGATIVE)

### `Pinterest.Lib.IntegerFormatType`

Type: string

### `TrendType`

Type: string enum(growing, monthly, yearly, seasonal)

### `TrendingKeywordsResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| trends | array<`TrendingKeyword`> |  | The top trending keywords for the specified trend type in the requested region. Results are ordered, with the first element in the array representing the #1 top trend. |

### `TrendsAgeBucket`

Type: string enum(18-24, 25-34, 35-44, 45-49, 50-54, 55-64, 65+)

### `TrendsGenderFilter`

Gender category for trends demographic distribution.

Type: string enum(male, female, unknown)

### `TrendsL1Interest`

L1 interest categories for filtering trends.

Type: string enum(animals, architecture, art, beauty, childrens_fashion, design, diy_and_crafts, education, electronics, entertainment, event_planning, finance, food_and_drinks, gardening, health, home_decor, mens_fashion, parenting, quotes, sport, travel, vehicles, wedding, womens_fashion)

### `TrendsSupportedRegion`

Type: string enum(US, CA, DE, FR, ES, IT, DE+AT+CH, GB+IE, IT+ES+PT+GR+MT, PL+RO+HU+SK+CZ, SE+DK+FI+NO, NL+BE+LU, AR, BR, CO, MX, MX+AR+CO+CL, AU+NZ, MY, PH, TH, EG, CR+DO+EC+GT+PE, CY+CZ+GR+HU+MT+PL+RO+SK, TR, KR, AE+KW+QA+OM+BH+EG+IQ+DZ, IL+NG+PK+ZA+TR+MA)

### `KeywordListItems`

Type: string

### `KeywordError`

| Field | Type | Required | Description |
|---|---|---|---|
| data | `Keyword` |  |  |
| error_messages | array<string> |  |  |

### `KeywordCreateItem`

| Field | Type | Required | Description |
|---|---|---|---|
| bid | integer |  | **Note:** bid field has been deprecated. Input will not be set and field will return null. Keyword custom bid in microcurrency - null if inherited from parent ad group. _(nullable)_ |
| match_type | `MatchType` | yes | Keyword [match type](/docs/api-features/targeting-overview/) _(nullable)_ |
| value | string | yes | Keyword value (120 characters maximum). Set the match type to choose the match behavior. Omit Ads Manager's leading hyphen (-), double quotes (" "), and square brackets ([ ]) from the value. Broad negative keywords support up to 10 tokens. Each sequence of ASCII letters or digits counts as one token. Spaces and special characters separate tokens. For example, "summer's t-shirts" counts as 4 tokens. |

### `KeywordMetricsResponse`

| Field | Type | Required | Description |
|---|---|---|---|
| keyword | string |  | Keyword name, e.g., "keyword":"fashion outfits" |
| metrics | `KeywordMetrics` |  |  |

### `KeywordUpdateItem`

| Field | Type | Required | Description |
|---|---|---|---|
| archived | boolean |  |  |
| bid | integer |  | **Note:** bid field has been deprecated. Input will not be set and field will return null. Keyword custom bid in microcurrency - null if inherited from parent ad group. _(nullable)_ |
| id | string | yes | Keyword ID . |

### `TrendingKeyword`

| Field | Type | Required | Description |
|---|---|---|---|
| demographics | `TrendingKeywordDemographics` |  |  |
| has_prediction | boolean |  | Indicates whether the keyword has a prediction available for the next 90 days. This field is only applicable when `include_prediction` query parameter is set to `true`. By default, the value is `false` and no prediction data is included in the response. |
| keyword | string |  | The keyword that is trending. _(minLength 1)_ |
| pct_growth_mom | integer |  | The month-over-month percent change in search volume for this keyword. For example, a value of "400" would represent a 400% increase in searches in the last 30 days compared to the month prior. **Note**: growth rates are rounded, with a maximum of +/- 10000% change. A value of 10001 indicates that this keyword experienced > 10000% month-over-month growth. |
| pct_growth_wow | integer |  | The week-over-week percent change in search volume for this keyword. For example, a value of "50" would represent a 50% increase in searches in the last seven days compared to the week prior. **Note**: growth rates are rounded, with a maximum of +/- 10000% change. A value of 10001 indicates that this keyword experienced > 10000% week-over-week growth. |
| pct_growth_yoy | integer |  | The year-over-year percent change in search volume for this keyword. For example, a value of "-5" would represent a 5% decrease in searches in the last 365 days compared to the month prior. **Note**: growth rates are rounded, with a maximum of +/- 10000% change. A value of 10001 indicates that this keyword experienced > 10000% year-over-year growth. |
| predicted_time_series | `PredictedTimeSeries` |  | A sequence of weekly observations of the predicted relative search volume for this keyword over the next 3 months. These values are normalized to a [0-100] range, and can be used to visualize the forecasted user interest in this keyword. Similar to the historical `time_series`, normalization is applied independently to the predicted time series of each keyword, but the `normalize_against_group` query parameter can be used in cases where you wish to compare relative predicted volume between keywords.  **Note**: The cut-off date between historical and predicted time series depends on Pinterest data availability. Usually the data needs a few days to be calculated, so the predicted time series may contain some past dates compared to today.  **Note**: The date of each observation is in ISO-8601 format and represents the *end* of the week. For example, a value of `2024-01-07` would include predicted searches for the week ending on `2024-01-07`. |
| time_series | `TimeSeries` |  | A sequence of weekly observations of the relative search volume for this keyword over the past year. These values are normalized to a [0-100] range, and can be used to visualize the history of user interest in this keyword. By default, normalization is applied independently to the time series of each keyword, but the `normalize_against_group` query parameter can be used in cases where you wish to compare relative volume between keywords.  **Note**: The date of each observation is in ISO-8601 format and represents the *end* of the week. For example, a value of `2023-10-31` would include searches that happened between `2023-10-25` and `2023-10-31`. |

### `KeywordMetrics`

Keyword metrics JSON

| Field | Type | Required | Description |
|---|---|---|---|
| keyword_query_volume | string |  | Keyword's search frequency. This value is based on keyword frequency in pepsi client response |

### `PredictedTimeSeries`

| Field | Type | Required | Description |
|---|---|---|---|
| date | string (date) |  |  |

### `TimeSeries`

| Field | Type | Required | Description |
|---|---|---|---|
| date | string (date) |  |  |

### `TrendingKeywordDemographics`

A mapping of demographic dimensions (e.g. "gender", "age") to their category
distributions. For each dimension: Key: The category (e.g., "female", "18-24").
Value: The proportion of search volume (e.g., 0.12 for 12%). Values less than
0.05 are set to 0.04 for privacy. The sum for all categories in a dimension
will approximately equal 1. Only applicable when `include_demographics` query
parameter is set to `true`.

| Field | Type | Required | Description |
|---|---|---|---|
| age_distribution | `TrendsAgeDistribution` |  |  |
| gender_distribution | `TrendsGenderDistribution` |  |  |

### `TrendsAgeDistribution`

This represents a mapping from age bucket to distribution of search volume
for a keyword. The sum of all values in this object should approximately be 1.

| Field | Type | Required | Description |
|---|---|---|---|
| age_distribution | `TrendsAgeBucket` |  |  |

### `TrendsGenderDistribution`

This represents a mapping from gender to distribution of search volume
for a keyword. The sum of all values in this object should approximately be 1.

| Field | Type | Required | Description |
|---|---|---|---|
| gender_distribution | `TrendsGender` |  |  |

### `TrendsGender`

Gender category for trends demographic distribution.

Type: string enum(male, female, unspecified)

