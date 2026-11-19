# TikTok Marketing API v1.3: Tools

> Source: TikTok API for Business docs (https://business-api.tiktok.com/portal/docs, doc content API) and the official `tiktok/tiktok-business-api-sdk` OpenAPI files (`yml_files/`). Base URL: https://business-api.tiktok.com/open_api. Auth header: `Access-Token`. Fetched 2026-11-19.

---

## GET /v1.3/tool/interest_category/

**Get general interest categories** (docs: https://business-api.tiktok.com/portal/docs/get-general-interest-categories/v1.3)

Use this endpoint to get general interest category enumeration values.

> <span style="color:DodgerBlue">**Note**</span><br>
> We recommend that you use the Consolidated Interest and Behavior API ([/targeting/search/](https://business-api.tiktok.com/portal/docs?id=1796638342793218)) to search for or list targeting categories and hashtags for interests and behaviors. This API provides a consolidated and efficient approach to access the necessary targeting information.

### Comparing v1.2 and v1.3
 The following table outlines the differences between v1.2 and v1.3 endpoints.
 |Changes|v1.2|v1.3|
|---|---|---|
|Endpoint path|/v1.2/tools/interest_category/|/v1.3/tool/interest_category/|
|Request parameter name|<ul><li>`placement`</li><li>`industry_types`|<ul><li> `placements`</li><li>`special_industries` |
|Request parameter data type |`advertiser_id`: number|`advertiser_id`: string|
|Response parameter name|<ul><li>`name`( in the `interest_categories`object)</li><li>`placement`</li><li>`industry_types`|<ul><li> `interest_category_name`( in the `interest_categories`object)</li><li>`placements`</li><li>`special_industries` |
|Response parameter name and data type|<ul><li>`id`(in the `interest_categories`object): number </li><li>`children`( in the `interest_categories`object): number[]|<ul><li> `interest_category_id`：string</li><li>`sub_category_ids`: string[] |

### Request

**Endpoint**
https://business-api.tiktok.com/open_api/v1.3/tool/interest_category/

**Method** GET

**Header**

|Field|Data Type|Description|
|---|---|---|
|Access-Token (required)|string|Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id=1738373164380162).|


**Parameters**

|Field|Data Type|Description|
|---|---|---|
|advertiser_id (required)|string| Advertiser ID. |
|version |number| Version of interest category. <br><br>Enum values:`1`(`interest_category`), `2` (`interest_category_v2`)。Default: `2`. |
|language|string| Category name language in repsonse. <br><br>Default value: `en`. <br><br> Supported languages: `en`, ` zh`, ` ja`, ` de`, ` es`, ` fr`, ` id`, ` it`, ` ko`, ` ru`, ` th`, ` tr`, ` vi`, ` ar`, ` pt`, ` ms`.<br><br>For details, see [Enumeration - Language Code](https://ads.tiktok.com/marketing_api/docs?id=1737174886619138).|
|placements |string[]|The apps where you want to deliver your ads. For enum values, see [Enumeration - Placement](https://ads.tiktok.com/marketing_api/docs?id=1737174886619138). <br>The interest categories available for different placements may be different, and the field only takes effect when `version` = `2`.</span> |
|special_industries|string[]| Special ad categories. <br><br>Enum values:<ul><li>`HOUSING`: Ads for real estate listings, homeowners insurance, mortgage loans or other related opportunities.</li><li>`EMPLOYMENT`: Ads for job offers, internship, professional certification programs or other related opportunities.</li><li>`CREDIT`: Ads for credit card offers, auto loans, long-term financing or other related opportunities. </li></ul><br><p><span style="color:darkred"><b>Note</b></span>: This field is generally available to advertisers registered in America or Canada. Advertisers who are not registered in America or Canada but want to target these countries with special ad categories need to apply for an additional allowlist.|


#### Example

```xcodeblock
(code curl http)
curl --get -H "Access-Token:xxx" \
--data-urlencode "advertiser_id=ADVERTISER_ID" \
--data-urlencode "version=VERSION" \
https://business-api.tiktok.com/open_api/v1.3/tool/interest_category/
(/code)
```

### Response

|Field|Data Type|Description|
|---|---|---|
|code |number|Return code. For the complete list of response codes and descriptions, see [Appendix-Return codes](https://ads.tiktok.com/marketing_api/docs?id=1737172488964097). |
|message |string|Return message. For details, see [Appendix-Return codes](https://ads.tiktok.com/marketing_api/docs?id=1737172488964097).  |
|data |object|Return Data |
| ↳ interest_categories|object[]| Interest category list. <br>To determine the corresponding names for gaming-related interest category IDs, see [Interest category](https://business-api.tiktok.com/portal/docs?id=1738865030529025).|
| ↳↳ interest_category_id|string| Interest category ID |
| ↳↳ interest_category_name|string| Interest category name |
| ↳↳ level|number| Level |
| ↳↳ sub_category_ids|string[]| Subcategory ID list |
| ↳↳ special_industries|string[]| Special ad categories.  <br><br>Enum values:<ul><li>`HOUSING`: Ads for real estate listings, homeowners insurance, mortgage loans or other related opportunities.</li><li>`EMPLOYMENT`: Ads for job offers, internship, professional certification programs or other related opportunities.</li><li>`CREDIT`: Ads for credit card offers, auto loans, long-term financing or other related opportunities.</li></ul><br><p><span style="color:darkred"><b>Note</b></span>: <ul><li>If the returned value is empty(`[]`), it means that the interest categories do not support any special ad categories. </li></ul>|
| ↳↳ placements |string[]|Available placement for this interest category. Returning an empty list means unlimited. Please refer to [Enumeration-Placement](https://ads.tiktok.com/marketing_api/docs?id=1737174886619138) for details of enum values.|
|request_id |string|The log id of a request, which uniquely identifies the request.|



#### Example

```xcodeblock
(code Success-Response http)
HTTPS/1.1 200 OK
{
    "code": 0,
    "message": "OK",
    "request_id": "202206302233010102452460660B5E36E5",
    "data": {
        "interest_categories": [
            {
                "special_industries": [
                    "HOUSING",
                    "EMPLOYMENT",
                    "CREDIT"
                ],
                "placements": [],
                "interest_category_id": "10",
                "level": 1,
                "interest_category_name": "Education",
                "sub_category_ids": [
                    "10100",
                    "10101",
                    "10102",
                    "10103",
                    "10104",
                    "10105",
                    "10106"
                ]
            },
            {
                "special_industries": [
                    "HOUSING",
                    "EMPLOYMENT",
                    "CREDIT"
                ],
                "placements": [],
                "interest_category_id": "11",
                "level": 1,
                "interest_category_name": "Vehicles & Transportation",
                "sub_category_ids": [
                    "11100",
                    "11101",
                    "11102",
                    "11103",
                    "11104",
                    "11105",
                    "11106",
                    "11107",
                    "11108",
                    "11109",
                    "11111",
                    "11112"
                ]
            },
            ...
        ]
    }
}
(/code);
```

---

## GET /v1.3/search/region/

**Get available locations by advertiser ID** (source: tiktok-business-api-sdk `yml_files/search_region.yml`)

### Parameters

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiser_id | query | string | yes | Advertiser ID. |
| language | query | string |  | The language you want the returned region name to be translated into. Default value: en Currently, we only support zh, fr, es, ko, vi, en, hi, it, tr, ru, ja, id, de, ms, ar, and th Note: If you do not pass in one of the supported values above, it will return as the default en. |
| Access-Token | query | string | yes | Authorized access token. For details, see [Authentication](https://ads.tiktok.com/marketing_api/docs?id=1738373164380162). |

### Response 200 (`application/json`)

| Field | Type | Description |
|---|---|---|
| code | integer (int64) | Response code. For the complete list of response codes and descriptions, see [Appendix - Return Codes](https://ads.tiktok.com/marketing_api/docs?id=1737172488964097). Will be shown only if it is an error request. |
| data | object | Returned data. The response for the SDK can be checked in the document for the API given in the description. |
| message | string | Response message. For details, see [Appendix - Return Codes](https://ads.tiktok.com/marketing_api/docs?id=1737172488964097). |
| request_id | string | The log ID of a request, which uniquely identifies the request. |


