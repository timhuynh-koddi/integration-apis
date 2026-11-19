# Orders

> Source: Google Ad Manager API (beta, REST v1) Discovery document (https://admanager.googleapis.com/$discovery/rest?version=v1, revision 20261118); release notes https://developers.google.com/ad-manager/api/beta/docs/release-notes. Fetched 2026-11-19. Resource names have the form `networks/{networkCode}/...`.

Used by koddi-offsite via: SOAP `OrderService` get/create/update/Pause/Resume.

---

## networks.orders.batchApproveAndOverbook

`POST https://admanager.googleapis.com/v1/{+parent}/orders:batchApproveAndOverbook`

Approves and overbooks a list of `Order` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of Orders. Format: `networks/{network_code}` |

**Request body**: `BatchApproveAndOverbookOrdersRequest`

**Response**: `BatchApproveAndOverbookOrdersResponse`

---

## networks.orders.batchRetractWithoutReservationChanges

`POST https://admanager.googleapis.com/v1/{+parent}/orders:batchRetractWithoutReservationChanges`

Retracts a list of `Order` objects without changing reservation status.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of Orders. Format: `networks/{network_code}` |

**Request body**: `BatchRetractOrdersWithoutReservationChangesRequest`

**Response**: `BatchRetractOrdersWithoutReservationChangesResponse`

---

## networks.orders.batchResumeAndOverbook

`POST https://admanager.googleapis.com/v1/{+parent}/orders:batchResumeAndOverbook`

Resumes and overbooks a list of `Order` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of Orders. Format: `networks/{network_code}` |

**Request body**: `BatchResumeAndOverbookOrdersRequest`

**Response**: `BatchResumeAndOverbookOrdersResponse`

---

## networks.orders.batchArchive

`POST https://admanager.googleapis.com/v1/{+parent}/orders:batchArchive`

Archives a list of `Order` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of Orders. Format: `networks/{network_code}` |

**Request body**: `BatchArchiveOrdersRequest`

**Response**: `BatchArchiveOrdersResponse`

---

## networks.orders.batchDisapproveWithoutReservationChanges

`POST https://admanager.googleapis.com/v1/{+parent}/orders:batchDisapproveWithoutReservationChanges`

Disapproves a list of `Order` objects without changing reservation status.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of Orders. Format: `networks/{network_code}` |

**Request body**: `BatchDisapproveOrdersWithoutReservationChangesRequest`

**Response**: `BatchDisapproveOrdersWithoutReservationChangesResponse`

---

## networks.orders.batchDisapprove

`POST https://admanager.googleapis.com/v1/{+parent}/orders:batchDisapprove`

Disapproves a list of `Order` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of Orders. Format: `networks/{network_code}` |

**Request body**: `BatchDisapproveOrdersRequest`

**Response**: `BatchDisapproveOrdersResponse`

---

## networks.orders.batchDelete

`POST https://admanager.googleapis.com/v1/{+parent}/orders:batchDelete`

Deletes a list of `Order` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of Orders. Format: `networks/{network_code}` |

**Request body**: `BatchDeleteOrdersRequest`

**Response**: `BatchDeleteOrdersResponse`

---

## networks.orders.get

`GET https://admanager.googleapis.com/v1/{+name}`

Retrieves an `Order` object.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The resource name of the Order. Format: `networks/{network_code}/orders/{order_id}` |

**Response**: `Order`

---

## networks.orders.batchCreate

`POST https://admanager.googleapis.com/v1/{+parent}/orders:batchCreate`

Creates `Order` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `Orders` will be created. Format: `networks/{network_code}` The parent field in the CreateOrderRequest must match this field. |

**Request body**: `BatchCreateOrdersRequest`

**Response**: `BatchCreateOrdersResponse`

---

## networks.orders.batchUpdate

`POST https://admanager.googleapis.com/v1/{+parent}/orders:batchUpdate`

Batch updates `Order` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent resource where `Orders` will be updated. Format: `networks/{network_code}` The parent field in the UpdateOrderRequest must match this field. |

**Request body**: `BatchUpdateOrdersRequest`

**Response**: `BatchUpdateOrdersResponse`

---

## networks.orders.batchRetract

`POST https://admanager.googleapis.com/v1/{+parent}/orders:batchRetract`

Retracts a list of `Order` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of Orders. Format: `networks/{network_code}` |

**Request body**: `BatchRetractOrdersRequest`

**Response**: `BatchRetractOrdersResponse`

---

## networks.orders.list

`GET https://admanager.googleapis.com/v1/{+parent}/orders`

Lists `Order` objects. Fields used for literal matching in filter string: * `order_id` * `display_name` * `external_order_id`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of Orders. Format: `networks/{network_code}` |
| skip | query | integer (int32) |  | Optional. Number of individual resources to skip while paginating. |
| orderBy | query | string |  | Optional. Expression to specify sorting order. See syntax details at https://developers.google.com/ad-manager/api/beta/filters#order |
| filter | query | string |  | Optional. Expression to filter the response. See syntax details at https://developers.google.com/ad-manager/api/beta/filters Syntax summary: double-quoted `"..."` (never `'...'`) strings and RFC 3339 timestamps, full resource names on reference fields (for example, `order = "networks/123/orders/456"`, not `*Id` or bare IDs), prefix or suffix `*` wildcards with `=` (`displayName = "foo*"`), `:` for substring or repeated-field matching, unquoted enums and booleans, uppercase `AND`/`OR`/`NOT`, and standalone `IN(field, SET(v1, v2))` (not `field IN (...)`). **Filterable fields:** * `advertiser` * `agency` * `appliedTeams` * `archived` * `creator` * `displayName` * `endTime` * `externalOrderId` * `impressionsDelivered` * `name` * `orderId` * `poNumber` * `programmatic` * `salesperson` * `secondarySalespeople` * `secondaryTraffickers` * `startTime` * `status` * `totalClicksDelivered` * `totalViewableImpressionsDelivered` * `trafficker` * `updateTime` |
| pageSize | query | integer (int32) |  | Optional. The maximum number of `Orders` to return. The service may return fewer than this value. If unspecified, at most 50 `Orders` will be returned. The maximum value is 1000; values greater than 1000 will be coerced to 1000. |
| pageToken | query | string |  | Optional. A page token, received from a previous `ListOrders` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListOrders` must match the call that provided the page token. |

**Response**: `ListOrdersResponse`

---

## networks.orders.batchSubmitForApprovalWithoutReservationChanges

`POST https://admanager.googleapis.com/v1/{+parent}/orders:batchSubmitForApprovalWithoutReservationChanges`

Submits a list of `Order` objects for approval without changing reservation status.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of Orders. Format: `networks/{network_code}` |

**Request body**: `BatchSubmitOrdersForApprovalWithoutReservationChangesRequest`

**Response**: `BatchSubmitOrdersForApprovalWithoutReservationChangesResponse`

---

## networks.orders.batchResume

`POST https://admanager.googleapis.com/v1/{+parent}/orders:batchResume`

Resumes a list of `Order` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of Orders. Format: `networks/{network_code}` |

**Request body**: `BatchResumeOrdersRequest`

**Response**: `BatchResumeOrdersResponse`

---

## networks.orders.batchApproveWithoutReservation

`POST https://admanager.googleapis.com/v1/{+parent}/orders:batchApproveWithoutReservation`

Approves a list of `Order` objects without changing reservation status.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of Orders. Format: `networks/{network_code}` |

**Request body**: `BatchApproveOrdersWithoutReservationRequest`

**Response**: `BatchApproveOrdersWithoutReservationResponse`

---

## networks.orders.batchPause

`POST https://admanager.googleapis.com/v1/{+parent}/orders:batchPause`

Pauses a list of `Order` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of Orders. Format: `networks/{network_code}` |

**Request body**: `BatchPauseOrdersRequest`

**Response**: `BatchPauseOrdersResponse`

---

## networks.orders.batchApprove

`POST https://admanager.googleapis.com/v1/{+parent}/orders:batchApprove`

Approves a list of `Order` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of Orders. Format: `networks/{network_code}` |

**Request body**: `BatchApproveOrdersRequest`

**Response**: `BatchApproveOrdersResponse`

---

## networks.orders.batchSubmitForApproval

`POST https://admanager.googleapis.com/v1/{+parent}/orders:batchSubmitForApproval`

Submits a list of `Order` objects for approval.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of Orders. Format: `networks/{network_code}` |

**Request body**: `BatchSubmitOrdersForApprovalRequest`

**Response**: `BatchSubmitOrdersForApprovalResponse`

---

## networks.orders.batchSubmitForApprovalAndOverbook

`POST https://admanager.googleapis.com/v1/{+parent}/orders:batchSubmitForApprovalAndOverbook`

Submits and overbooks a list of `Order` objects for approval.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. Format: `networks/{network_code}` |

**Request body**: `BatchSubmitOrdersForApprovalAndOverbookRequest`

**Response**: `BatchSubmitOrdersForApprovalAndOverbookResponse`

---

## networks.orders.batchUnarchive

`POST https://admanager.googleapis.com/v1/{+parent}/orders:batchUnarchive`

Unarchives a list of `Order` objects.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| parent | path | string | yes | Required. The parent, which owns this collection of Orders. Format: `networks/{network_code}` |

**Request body**: `BatchUnarchiveOrdersRequest`

**Response**: `BatchUnarchiveOrdersResponse`

---

## Schemas

### `BatchApproveAndOverbookOrdersRequest`

Request message for `BatchApproveAndOverbookOrders` method.

| Field | Type | Description |
|---|---|---|
| skipInventoryCheck | boolean | Optional. Indicates whether the inventory check should be skipped when performing this action. |
| names | array<string> | Required. The resource names of the orders to approve and overbook. Format: `networks/{network_code}/orders/{order_id}` |

### `BatchApproveAndOverbookOrdersResponse`

Response object for `BatchApproveAndOverbookOrders` method.

Type: object

### `BatchRetractOrdersWithoutReservationChangesRequest`

Request message for `BatchRetractOrdersWithoutReservationChanges` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The resource names of the orders to retract. Format: `networks/{network_code}/orders/{order_id}` |

### `BatchRetractOrdersWithoutReservationChangesResponse`

Response object for `BatchRetractOrdersWithoutReservationChanges` method.

Type: object

### `BatchResumeAndOverbookOrdersRequest`

Request message for `BatchResumeAndOverbookOrders` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The resource names of the orders to resume and overbook. Format: `networks/{network_code}/orders/{order_id}` |

### `BatchResumeAndOverbookOrdersResponse`

Response object for `BatchResumeAndOverbookOrders` method.

Type: object

### `BatchArchiveOrdersRequest`

Request message for `BatchArchiveOrders` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The resource names of the orders to archive. Format: `networks/{network_code}/orders/{order_id}` |

### `BatchArchiveOrdersResponse`

Response object for `BatchArchiveOrders` method.

Type: object

### `BatchDisapproveOrdersWithoutReservationChangesRequest`

Request message for `BatchDisapproveOrdersWithoutReservationChanges` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The resource names of the orders to disapprove without reservation changes. Format: `networks/{network_code}/orders/{order_id}` |

### `BatchDisapproveOrdersWithoutReservationChangesResponse`

Response object for `BatchDisapproveOrdersWithoutReservationChanges` method.

Type: object

### `BatchDisapproveOrdersRequest`

Request message for `BatchDisapproveOrders` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The resource names of the orders to disapprove. Format: `networks/{network_code}/orders/{order_id}` |

### `BatchDisapproveOrdersResponse`

Response object for `BatchDisapproveOrders` method.

Type: object

### `BatchDeleteOrdersRequest`

Request message for `BatchDeleteOrders` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The resource names of the orders to delete. Format: `networks/{network_code}/orders/{order_id}` |

### `BatchDeleteOrdersResponse`

Response object for `BatchDeleteOrders` method.

Type: object

### `Order`

The `Order` resource.

| Field | Type | Description |
|---|---|---|
| effectiveAppliedLabels | array<`AppliedLabel`> | Output only. Contains the set of labels applied directly to the order as well as those inherited from the company that owns the order. If a label has been negated, only the negated label is returned. This field is assigned by Google. |
| trafficker | string | Required. The resource name of the User responsible for trafficking the Order. Format: "networks/{network_code}/users/{user_id}" |
| updateTime | string (google-datetime) | Output only. The instant this Order was last modified. |
| effectiveTeams | array<string> | Output only. The resource names of Teams applied to this Order including inherited values. Format: "networks/{network_code}/teams/{team_id}" |
| programmatic | boolean | Optional. Specifies whether or not the Order is a programmatic order. |
| lastModifiedByApp | string | Output only. The application which modified this order. |
| orderId | string (int64) | Output only. Deprecated: Order ID. |
| unlimitedEndTime | boolean | Output only. Deprecated: Indicates whether or not this Order has an end time. |
| salesperson | string | Optional. The resource name of the User responsible for the sales of the Order. Format: "networks/{network_code}/users/{user_id}" |
| agency | string | Optional. The resource name of the Company, which is of type Company.Type.AGENCY, with which this order is associated. Format: "networks/{network_code}/companies/{company_id}" |
| secondaryTraffickers | array<string> | Optional. Unordered list. The resource names of the secondary traffickers associated with the order. Format: "networks/{network_code}/users/{user_id}" |
| advertiser | string | Required. The resource name of the Company, which is of type Company.Type.ADVERTISER, to which this order belongs. Format: "networks/{network_code}/companies/{company_id}" |
| appliedTeams | array<string> | Optional. The resource names of Teams directly applied to this Order. Format: "networks/{network_code}/teams/{team_id}" |
| notes | string | Optional. Provides any additional notes that may annotate the Order. This attribute has a maximum length of 65,535 characters. |
| displayName | string | Required. The display name of the Order. This value has a maximum length of 255 characters. |
| name | string | Identifier. The resource name of the `Order`. Format: `networks/{network_code}/orders/{order_id}` |
| externalOrderId | integer (int32) | Optional. An arbitrary ID to associate to the Order, which can be used as a key to an external system. |
| currencyCode | string | Output only. The ISO 4217 3-letter currency code for the currency used by the Order. This value is the network's currency code. |
| startTime | string (google-datetime) | Output only. The instant at which the Order and its associated Line items are eligible to begin serving. This attribute is derived from the Line item of the order that has the earliest `LineItem.start_time`. |
| creator | string | Output only. The resource name of the User who created the Order on behalf of the advertiser. Format: "networks/{network_code}/users/{user_id}" |
| archived | boolean | Output only. The archival status of the Order. |
| secondarySalespeople | array<string> | Optional. Unordered list. The resource names of the secondary salespeople associated with the order. Format: "networks/{network_code}/users/{user_id}" |
| advertiserContacts | array<string> | Optional. Unordered list. The resource names of Contacts from the advertiser of this Order. Format: "networks/{network_code}/contacts/{contact_id}" |
| totalClicksDelivered | string (int64) | Output only. Total clicks delivered for all Line items of this `Order`. This value is calculated from the associated `LineItem` values. |
| totalViewableImpressionsDelivered | string (int64) | Output only. Total viewable impressions delivered for all Line items of this `Order`. This value is calculated from the associated `LineItem` values. |
| customFieldValues | array<`CustomFieldValue`> | Optional. The set of custom field values to this order. |
| agencyContacts | array<string> | Optional. The resource names of Contacts from the advertising Agency of this Order. Format: "networks/{network_code}/contacts/{contact_id}" |
| endTimeUnlimited | boolean | Output only. Indicates whether or not this Order has an end time. |
| endTime | string (google-datetime) | Output only. The instant at which the Order and its associated Line items stop being served. This attribute is derived from the Line item of the order that has the latest `LineItem.end_time`. |
| poNumber | string | Optional. The purchase order number for the Order. This value has a maximum length of 63 characters. |
| appliedLabels | array<`AppliedLabel`> | Optional. The set of labels applied directly to this order. |
| impressionsDelivered | string (int64) | Output only. The total number of impressions delivered for Line items in this order. |
| status | string enum(ORDER_STATUS_UNSPECIFIED, DRAFT, PENDING_APPROVAL, APPROVED, DISAPPROVED, PAUSED, CANCELED, DELETED) | Output only. The status of the Order. Values: ORDER_STATUS_UNSPECIFIED - Default value. This value is unused.; DRAFT - Indicates that the Order has just been created but no approval has been requested yet.; PENDING_APPROVAL - Indicates that a request for approval for the Order has been made.; APPROVED - Indicates that the Order has been approved and is ready to serve.; DISAPPROVED - Indicates that the Order has been disapproved and is not eligible to serve.; PAUSED - This is a legacy state. Paused status should be checked on LineItems within the order.; CANCELED - Indicates that the Order has been canceled and cannot serve.; DELETED - Indicates that the Order has been deleted. |

### `BatchCreateOrdersRequest`

Request object for `BatchCreateOrders` method.

| Field | Type | Description |
|---|---|---|
| requests | array<`CreateOrderRequest`> | Required. The `Order` objects to create. A maximum of 100 objects can be created in a batch. |

### `BatchCreateOrdersResponse`

Response object for `BatchCreateOrders` method.

| Field | Type | Description |
|---|---|---|
| orders | array<`Order`> | The `Order` objects created. |

### `BatchUpdateOrdersRequest`

Request object for `BatchUpdateOrders` method.

| Field | Type | Description |
|---|---|---|
| requests | array<`UpdateOrderRequest`> | Required. The `Order` objects to update. A maximum of 100 objects can be updated in a batch. |

### `BatchUpdateOrdersResponse`

Response object for `BatchUpdateOrders` method.

| Field | Type | Description |
|---|---|---|
| orders | array<`Order`> | The `Order` objects updated. |

### `BatchRetractOrdersRequest`

Request message for `BatchRetractOrders` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The resource names of the orders to retract. Format: `networks/{network_code}/orders/{order_id}` |

### `BatchRetractOrdersResponse`

Response object for `BatchRetractOrders` method.

Type: object

### `ListOrdersResponse`

Response object for `ListOrdersRequest` containing matching `Order` resources.

| Field | Type | Description |
|---|---|---|
| orders | array<`Order`> | The `Order` from the specified network. |
| nextPageToken | string | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. |
| totalSize | integer (int32) | Total number of `Orders`. If a filter was included in the request, this reflects the total number after the filtering is applied. `total_size` won't be calculated in the response unless it has been included in a response field mask. The response field mask can be provided to the method by using the URL parameter `$fields` or `fields`, or by using the HTTP/gRPC header `X-Goog-FieldMask`. For more information, see https://developers.google.com/ad-manager/api/beta/field-masks |

### `BatchSubmitOrdersForApprovalWithoutReservationChangesRequest`

Request message for `BatchSubmitOrdersForApprovalWithoutReservationChanges` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The resource names of the orders to submit for approval. Format: `networks/{network_code}/orders/{order_id}` |

### `BatchSubmitOrdersForApprovalWithoutReservationChangesResponse`

Response object for `BatchSubmitOrdersForApprovalWithoutReservationChanges` method.

Type: object

### `BatchResumeOrdersRequest`

Request message for `BatchResumeOrders` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The resource names of the orders to resume. Format: `networks/{network_code}/orders/{order_id}` |
| skipInventoryCheck | boolean | Optional. Indicates whether the inventory check should be skipped when performing this action. |

### `BatchResumeOrdersResponse`

Response object for `BatchResumeOrders` method.

Type: object

### `BatchApproveOrdersWithoutReservationRequest`

Request message for `BatchApproveOrdersWithoutReservation` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The resource names of the orders to approve. Format: `networks/{network_code}/orders/{order_id}` |

### `BatchApproveOrdersWithoutReservationResponse`

Response object for `BatchApproveOrdersWithoutReservation` method.

Type: object

### `BatchPauseOrdersRequest`

Request message for `BatchPauseOrders` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The resource names of the orders to pause. Format: `networks/{network_code}/orders/{order_id}` |

### `BatchPauseOrdersResponse`

Response object for `BatchPauseOrders` method.

Type: object

### `BatchApproveOrdersRequest`

Request message for `BatchApproveOrders` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The resource names of the orders to approve. Format: `networks/{network_code}/orders/{order_id}` |
| skipInventoryCheck | boolean | Optional. Indicates whether the inventory check should be skipped when performing this action. |

### `BatchApproveOrdersResponse`

Response object for `BatchApproveOrders` method.

Type: object

### `BatchSubmitOrdersForApprovalRequest`

Request message for `BatchSubmitOrdersForApproval` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The resource names of the orders to submit for approval. Format: `networks/{network_code}/orders/{order_id}` |
| skipInventoryCheck | boolean | Optional. Indicates whether the inventory check should be skipped when performing this action. |

### `BatchSubmitOrdersForApprovalResponse`

Response object for `BatchSubmitOrdersForApproval` method.

Type: object

### `BatchSubmitOrdersForApprovalAndOverbookRequest`

Request message for `BatchSubmitOrdersForApprovalAndOverbook` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The resource names of the orders to submit for approval and overbook. Format: `networks/{network_code}/orders/{order_id}` |

### `BatchSubmitOrdersForApprovalAndOverbookResponse`

Response object for `BatchSubmitOrdersForApprovalAndOverbook` method.

Type: object

### `BatchUnarchiveOrdersRequest`

Request message for `BatchUnarchiveOrders` method.

| Field | Type | Description |
|---|---|---|
| names | array<string> | Required. The resource names of the orders to extract. Format: `networks/{network_code}/orders/{order_id}` |

### `BatchUnarchiveOrdersResponse`

Response object for `BatchUnarchiveOrders` method.

Type: object

### `AppliedLabel`

Represents a Label that can be applied to an entity.

| Field | Type | Description |
|---|---|---|
| label | string | Required. The label to be applied. Format: "networks/{network_code}/labels/{label_id}" |
| negated | boolean | Specifies whether or not to negate the effects of the label. |

### `CustomFieldValue`

A value for a CustomField on a resource.

| Field | Type | Description |
|---|---|---|
| value | `CustomFieldValue_Value` | Required. A typed value representation of the value. |
| customField | string | Required. The custom field for which this is a value. Format: "networks/{network_code}/customFields/{custom_field_id}" |

### `CreateOrderRequest`

Request object for `CreateOrder` method.

| Field | Type | Description |
|---|---|---|
| order | `Order` | Required. The `Order` to create. |
| parent | string | Required. The parent resource where this Order will be created. Format: `networks/{network_code}` |

### `UpdateOrderRequest`

Request object for `UpdateOrder` method.

| Field | Type | Description |
|---|---|---|
| order | `Order` | Required. The `Order` to update. The Order's name is used to identify the order to update. Format: `networks/{network_code}/orders/{order_id}` |
| updateMask | string (google-fieldmask) | Optional. The list of fields to update. |

### `CustomFieldValue_Value`

Represent custom field value type.

| Field | Type | Description |
|---|---|---|
| toggleValue | boolean | The value, if the CustomFieldDataType is TOGGLE. |
| dropdownValue | string (int64) | The custom_field_option_id, if the CustomFieldDataType is DROPDOWN. |
| numberValue | number (double) | The value, if the CustomFieldDataType is NUMBER. |
| stringValue | string | The value, if the CustomFieldDataType is STRING. |

