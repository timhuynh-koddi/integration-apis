# Pinterest API v5: Customer Lists

> Source: Pinterest REST API v5 OpenAPI spec (https://github.com/pinterest/api-description, v5.32.0); docs https://developers.pinterest.com/docs/api/v5/. Base URL: https://api.pinterest.com/v5. Fetched 2026-11-19.

Operations: 4

---

## GET /ad_accounts/{ad_account_id}/customer_lists

**Get customer lists**

Get a set of customer lists including id and name based on the filters provided.

(Customer lists are a type of audience.) For more information, see [Audience targeting](https://help.pinterest.com/en/business/article/audience-targeting) or the [Audiences](/docs/api-features/targeting-overview/) section of the ads management guide.

Operation ID: `customer_lists/list`

Scopes: pinterest_oauth2: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | _(maxLength 18)_ |
| bookmark | query | string |  | Cursor used to fetch the next page of items |
| page_size | query | integer |  | Maximum number of items to include in a single page. See documentation on [Pagination](/docs/reference/pagination/) for more information. _(default 25; minimum 1; maximum 250)_ |
| order | query | `Pinterest.Lib.PaginationOrder` |  | The order in which to sort the items returned: "ASCENDING" or "DESCENDING" by ID. Note that higher-value IDs are associated with more-recently added items. _(default "ASCENDING")_ |
| exclude_nca | query | boolean |  | When true, excludes customer lists uploaded for new customer acquisition (expanded matching) from the result. Defaults to false (include all). _(default false)_ |

**Response 200** (`application/json`): object{bookmark: string, items: array<`CustomerList`>}

---

## POST /ad_accounts/{ad_account_id}/customer_lists

**Create customer lists**

Create a customer list from your records (hashed or plain-text email addresses, or hashed MAIDs or IDFAs).

A customer list is one of the four types of Pinterest audiences: for more information, see [Audience targeting](https://help.pinterest.com/en/business/article/audience-targeting) or the [Audiences](/docs/api-features/targeting-overview/) section of the ads management guide.

**Please review our [requirements](https://help.pinterest.com/en/business/article/audience-targeting#section-13341) for what type of information is allowed when uploading a customer list.**
 
When you create a customer list, the system scans the list for existing Pinterest accounts; the list must include at least 100 Pinterest accounts. Your original list will be deleted when the matching process is complete. The filtered list – containing only the Pinterest accounts that were included in your starting list – is what will be used to create the audience.
 
To use your customer list after creating it, convert it into a customer list audience by passing the `CUSTOMER_LIST` audience type at the [create audience endpoint](https://developer.pinterest.com/docs/api/v5/audiences-create).

Operation ID: `customer_lists/create`

Scopes: pinterest_oauth2: ads:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | _(maxLength 18)_ |

**Request body** (`application/json`, required): `CustomerListCreate`

**Response 200** (`application/json`): `CustomerList`

**Response 201** (`application/json`): `CustomerList`

---

## GET /ad_accounts/{ad_account_id}/customer_lists/{customer_list_id}

**Get customer list**

Gets a specific customer list given the customer list ID.

Operation ID: `customer_lists/get`

Scopes: pinterest_oauth2: ads:read; client_credentials: ads:read

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | _(maxLength 18)_ |
| customer_list_id | path | string | yes | Customer list ID. _(maxLength 18)_ |

**Response 200** (`application/json`): `CustomerList`

---

## PATCH /ad_accounts/{ad_account_id}/customer_lists/{customer_list_id}

**Update customer list**

Append or remove records to/from an existing customer list. (A customer list is one of the four types of Pinterest audiences.)

When you add records to an existing customer list, the system scans the additions for existing Pinterest accounts; those are the records that will be added to your "CUSTOMER_LIST" audience. Your original list of records to add will be deleted when the matching process is complete.

For more information, see [Audience targeting](https://help.pinterest.com/en/business/article/audience-targeting) or the [Audiences](/docs/api-features/targeting-overview/) section of the ads management guide.

Operation ID: `customer_lists/update`

Scopes: pinterest_oauth2: ads:write

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| ad_account_id | path | string | yes | _(maxLength 18)_ |
| customer_list_id | path | string | yes | Customer list ID. _(maxLength 18)_ |

**Request body** (`application/json`, required): `CustomerListUpdateWithRequiredBody`

**Response 200** (`application/json`): `CustomerList`

---

## Schemas

### `CustomerList`

| Field | Type | Required | Description |
|---|---|---|---|
| ad_account_id | string |  | Associated ad account ID. _(read-only)_ |
| created_time | number |  | Creation time. Unix timestamp in seconds. _(read-only)_ |
| exceptions | object |  | Customer list errors. _(read-only)_ |
| id | string | yes | Customer list ID. _(read-only; maxLength 18)_ |
| is_nca | boolean |  | Whether the list was uploaded for new customer acquisition (expanded matching). Immutable after creation. |
| name | string | yes | Customer list name. |
| num_batches | number |  | Total number of list updates. List creation counts as one batch. Each [Append](/docs/redoc/#operation/ads_v3_customer_list_add_handler_PUT) or [Remove API](/docs/redoc/#operation/ads_v3_customer_list_remove_handler_PUT) call counts as another. List creation via the **Ads Manager** UI could result in more than one batch since the UI breaks up large lists. _(read-only)_ |
| num_removed_user_records | number |  | Number of removed user records. In a [Remove API](/docs/redoc/#operation/ads_v3_customer_list_remove_handler_PUT) call, this counter increases even if the user is not found in the list. _(read-only)_ |
| num_uploaded_user_records | number |  | Number of uploaded user records. In an [Append API](/docs/redoc/#operation/ads_v3_customer_list_add_handler_PUT) call, this counter increases even if the uploaded user is already in the list. _(read-only)_ |
| status | `CustomerListStatus` |  | Customer list status. `TOO_SMALL` means the list has fewer than 100 Pinterest users. _(read-only)_ |
| type | string |  | Always `customerlist`. _(read-only)_ |
| updated_time | number |  | Last update time. Unix timestamp in seconds. _(read-only)_ |

### `CustomerListCreate`

Resource create operation model.

| Field | Type | Required | Description |
|---|---|---|---|
| is_nca | boolean |  | Whether the list was uploaded for new customer acquisition (expanded matching). Immutable after creation. |
| list_type | `UserListType` |  | Type of customer list (e.g., EMAIL, IDFA, MAID). _(default "EMAIL")_ |
| name | string | yes | Customer list name. |
| records | string |  | Records list. Can be any combination of emails, MAIDs, or IDFAs. Emails must be lowercase and can be plain text or hashed using SHA1, SHA256, or MD5. MAIDs and IDFAs must be hashed with SHA1, SHA256, or MD5.  Provide exactly one of `records` or `records_v2`. |
| records_v2 | array<`CustomerListRecordRow`> |  | [**Restricted**](/docs/getting-started/using-beta-and-restricted-features/)   Multi-field record format. Array of objects with optional `email`, `maid`, `ip_address`, `user_agent`, `external_id`, `hashed_pinner_id`, `hashed_phone_number`, and `liveramp_envelope` per row.   Provide exactly one of `records` or `records_v2`.   This parameter is supported only if `is_nca` is set to `true`. |

### `CustomerListUpdateWithRequiredBody`

Resource create or update operation model with required body fields (no OptionalProperties).

| Field | Type | Required | Description |
|---|---|---|---|
| operation_type | `UserListOperationType` | yes | Customer list update operation type (add or remove). Only valid in update request body. |
| records | string |  | Records list. Can be any combination of emails, MAIDs, or IDFAs. Emails must be lowercase and can be plain text or hashed using SHA1, SHA256, or MD5. MAIDs and IDFAs must be hashed with SHA1, SHA256, or MD5.  Provide exactly one of `records` or `records_v2`. |
| records_v2 | array<`CustomerListRecordRow`> |  | [**Restricted**](/docs/getting-started/using-beta-and-restricted-features/)   Multi-field record format. Array of objects with optional `email`, `maid`, `ip_address`, `user_agent`, `external_id`, `hashed_pinner_id`, `hashed_phone_number`, and `liveramp_envelope` per row.   Provide exactly one of `records` or `records_v2`.   This parameter is supported only if `is_nca` is set to `true`. |

### `Pinterest.Lib.PaginationOrder`

Type: string enum(ASCENDING, DESCENDING)

### `CustomerListStatus`

Customer list status. `TOO_SMALL` means the list has fewer than 100 Pinterest users.

Type: string enum(PROCESSING, READY, TOO_SMALL, UPLOADING)

### `CustomerListRecordRow`

A single row in a multi-field customer list (v2 format).

| Field | Type | Required | Description |
|---|---|---|---|
| email | string |  | Email address (plain or hashed with SHA1, SHA256, or MD5). |
| external_id | string |  | External ID identifier (not hashed). |
| hashed_phone_number | string |  | Hashed phone number (hashed with SHA1, SHA256, or MD5). |
| hashed_pinner_id | string |  | Hashed pinner ID (hashed with SHA1, SHA256, or MD5). |
| ip_address | string |  | IP address (not hashed). |
| liveramp_envelope | string |  | LiveRamp envelope identifier (Base64-encoded, not hashed). |
| maid | string |  | Mobile advertising ID (plain or hashed with SHA1, SHA256, or MD5). |
| user_agent | string |  | User agent string (not hashed). |

### `UserListType`

User list type

Type: string enum(EMAIL, IDFA, MAID, LR_ID, DLX_ID, HASHED_PINNER_ID)

### `UserListOperationType`

User list operation type (add or remove)

Type: string enum(ADD, REMOVE)

