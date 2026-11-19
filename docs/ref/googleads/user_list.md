# User List

> Source: Google Ads API v26 REST Discovery document (https://googleads.googleapis.com/$discovery/rest?version=v26) and Shopping ads guide (https://developers.google.com/google-ads/api/docs/shopping-ads/overview). Fetched 2026-11-19.

Resource schema: `UserList`. Read data via `GoogleAdsService.Search`/`SearchStream` (see google_ads_service.md).

---

## customers.userLists.mutate

`POST https://googleads.googleapis.com/v26/customers/{+customerId}/userLists:mutate`

Creates or updates user lists. Operation statuses are returned. List of thrown errors: AuthenticationError AuthorizationError CollectionSizeError DatabaseError DistinctError FieldError FieldMaskError HeaderError InternalError MutateError NewResourceCreationError NotAllowlistedError NotEmptyError OperationAccessDeniedError QuotaError RangeError RequestError StringFormatError StringLengthError UserListError

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| customerId | path | string | yes | Required. The ID of the customer whose user lists are being modified. |

**Request body**: `MutateUserListsRequest`

**Response**: `MutateUserListsResponse`

---

## Schemas

### `UserList`

A user list. This is a list of users a customer may target. The unique key of a user list consists of the following fields: `id`. Note that the `name` must also be unique for user lists owned by a given customer, except in some cases where `access_reason` is set to `SHARED`. Violating the unique name constraint produces error: `UserListError.INVALID_NAME`.

| Field | Type | Description |
|---|---|---|
| integrationCode | string | An ID from external system. It is used by user list sellers to correlate IDs on their systems. |
| resourceName | string | Immutable. The resource name of the user list. User list resource names have the form: `customers/{customer_id}/userLists/{user_list_id}` |
| eligibleForSearch | boolean | Indicates if this user list is eligible for Google Search Network. |
| similarUserList | `SimilarUserListInfo` | Output only. User list which are similar to users from another UserList. These lists are readonly and automatically created by google. |
| sizeForSearch | string (int64) | Output only. Estimated number of users in this user list in the google.com domain. These are the users available for targeting in Search campaigns. This value is null if the number of users has not yet been determined. This field is read-only. |
| accessReason | string enum(UNSPECIFIED, UNKNOWN, OWNED, SHARED, LICENSED, SUBSCRIBED, AFFILIATED) | Output only. Indicates the reason this account has been granted access to the list. The reason can be SHARED, OWNED, LICENSED or SUBSCRIBED. This field is read-only. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; OWNED - The resource is owned by the user.; SHARED - The resource is shared to the user.; LICENSED - The resource is licensed to the user.; SUBSCRIBED - The user subscribed to the resource.; AFFILIATED - The resource is accessible to the user. |
| name | string | Name of this user list. Unique per user list, except in some cases where a user list of the same name has `access_reason` set to `SHARED`. |
| type | string enum(UNSPECIFIED, UNKNOWN, REMARKETING, LOGICAL, EXTERNAL_REMARKETING, RULE_BASED, SIMILAR, CRM_BASED, LOOKALIKE) | Output only. Type of this list. This field is read-only. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; REMARKETING - UserList represented as a collection of conversion types.; LOGICAL - UserList represented as a combination of other user lists/interests.; EXTERNAL_REMARKETING - UserList created in the Google Ad Manager platform.; RULE_BASED - UserList associated with a rule.; SIMILAR - UserList with users similar to users of another UserList.; CRM_BASED - UserList of first-party CRM data provided by advertiser in the form of emails or other formats.; LOOKALIKE - LookalikeUserlist, composed of users similar to those of a configurable seed (set of UserLists) |
| description | string | Description of this user list. |
| closingReason | string enum(UNSPECIFIED, UNKNOWN, UNUSED) | Indicating the reason why this user list membership status is closed. It is only populated on lists that were automatically closed due to inactivity, and will be cleared once the list membership status becomes open. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; UNUSED - The userlist was closed because of not being used for over one year. |
| id | string (int64) | Output only. Id of the user list. |
| accountUserListStatus | string enum(UNSPECIFIED, UNKNOWN, ENABLED, DISABLED) | Indicates if this share is still enabled. When a UserList is shared with the user this field is set to ENABLED. Later the userList owner can decide to revoke the share and make it DISABLED. The default value of this field is set to ENABLED. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; ENABLED - The access is enabled.; DISABLED - The access is disabled. |
| ruleBasedUserList | `RuleBasedUserListInfo` | User list generated by a rule. |
| basicUserList | `BasicUserListInfo` | User list targeting as a collection of conversion or remarketing actions. |
| sizeRangeForDisplay | string enum(UNSPECIFIED, UNKNOWN, LESS_THAN_FIVE_HUNDRED, LESS_THAN_ONE_THOUSAND, ONE_THOUSAND_TO_TEN_THOUSAND, TEN_THOUSAND_TO_FIFTY_THOUSAND, FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND, ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND, THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND, FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION, ONE_MILLION_TO_TWO_MILLION, TWO_MILLION_TO_THREE_MILLION, THREE_MILLION_TO_FIVE_MILLION, FIVE_MILLION_TO_TEN_MILLION, TEN_MILLION_TO_TWENTY_MILLION, TWENTY_MILLION_TO_THIRTY_MILLION, THIRTY_MILLION_TO_FIFTY_MILLION, OVER_FIFTY_MILLION) | Output only. Size range in terms of number of users of the UserList, on the Google Display Network. This field is read-only. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; LESS_THAN_FIVE_HUNDRED - User list has less than 500 users.; LESS_THAN_ONE_THOUSAND - User list has number of users in range of 500 to 1000.; ONE_THOUSAND_TO_TEN_THOUSAND - User list has number of users in range of 1000 to 10000.; TEN_THOUSAND_TO_FIFTY_THOUSAND - User list has number of users in range of 10000 to 50000.; FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND - User list has number of users in range of 50000 to 100000.; ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND - User list has number of users in range of 100000 to 300000.; THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND - User list has number of users in range of 300000 to 500000.; FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION - User list has number of users in range of 500000 to 1 million.; ONE_MILLION_TO_TWO_MILLION - User list has number of users in range of 1 to 2 millions.; TWO_MILLION_TO_THREE_MILLION - User list has number of users in range of 2 to 3 millions.; THREE_MILLION_TO_FIVE_MILLION - User list has number of users in range of 3 to 5 millions.; FIVE_MILLION_TO_TEN_MILLION - User list has number of users in range of 5 to 10 millions.; TEN_MILLION_TO_TWENTY_MILLION - User list has number of users in range of 10 to 20 millions.; TWENTY_MILLION_TO_THIRTY_MILLION - User list has number of users in range of 20 to 30 millions.; THIRTY_MILLION_TO_FIFTY_MILLION - User list has number of users in range of 30 to 50 millions.; OVER_FIFTY_MILLION - User list has over 50 million users. |
| sizeRangeForSearch | string enum(UNSPECIFIED, UNKNOWN, LESS_THAN_FIVE_HUNDRED, LESS_THAN_ONE_THOUSAND, ONE_THOUSAND_TO_TEN_THOUSAND, TEN_THOUSAND_TO_FIFTY_THOUSAND, FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND, ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND, THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND, FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION, ONE_MILLION_TO_TWO_MILLION, TWO_MILLION_TO_THREE_MILLION, THREE_MILLION_TO_FIVE_MILLION, FIVE_MILLION_TO_TEN_MILLION, TEN_MILLION_TO_TWENTY_MILLION, TWENTY_MILLION_TO_THIRTY_MILLION, THIRTY_MILLION_TO_FIFTY_MILLION, OVER_FIFTY_MILLION) | Output only. Size range in terms of number of users of the UserList, for Search ads. This field is read-only. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; LESS_THAN_FIVE_HUNDRED - User list has less than 500 users.; LESS_THAN_ONE_THOUSAND - User list has number of users in range of 500 to 1000.; ONE_THOUSAND_TO_TEN_THOUSAND - User list has number of users in range of 1000 to 10000.; TEN_THOUSAND_TO_FIFTY_THOUSAND - User list has number of users in range of 10000 to 50000.; FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND - User list has number of users in range of 50000 to 100000.; ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND - User list has number of users in range of 100000 to 300000.; THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND - User list has number of users in range of 300000 to 500000.; FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION - User list has number of users in range of 500000 to 1 million.; ONE_MILLION_TO_TWO_MILLION - User list has number of users in range of 1 to 2 millions.; TWO_MILLION_TO_THREE_MILLION - User list has number of users in range of 2 to 3 millions.; THREE_MILLION_TO_FIVE_MILLION - User list has number of users in range of 3 to 5 millions.; FIVE_MILLION_TO_TEN_MILLION - User list has number of users in range of 5 to 10 millions.; TEN_MILLION_TO_TWENTY_MILLION - User list has number of users in range of 10 to 20 millions.; TWENTY_MILLION_TO_THIRTY_MILLION - User list has number of users in range of 20 to 30 millions.; THIRTY_MILLION_TO_FIFTY_MILLION - User list has number of users in range of 30 to 50 millions.; OVER_FIFTY_MILLION - User list has over 50 million users. |
| membershipLifeSpan | string (int64) | Number of days a user's cookie stays on your list since its most recent addition to the list. This field must be between 0 and 540 inclusive. This field is ignored for `logical_user_list` and `rule_based_user_list` types. Membership to lists of these types depends on the rules defined by the lists. |
| sizeForDisplay | string (int64) | Output only. Estimated number of users in this user list, on the Google Display Network. This value is null if the number of users has not yet been determined. This field is read-only. |
| readOnly | boolean | Output only. An option that indicates if a user may edit a list. Depends on the list ownership and list type. For example, external remarketing user lists are not editable. This field is read-only. |
| eligibleForDisplay | boolean | Output only. Indicates this user list is eligible for Google Display Network. This field is read-only. |
| membershipStatus | string enum(UNSPECIFIED, UNKNOWN, OPEN, CLOSED) | Membership status of this user list. Indicates whether a user list is open or active. Only open user lists can accumulate more users and can be targeted to. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; OPEN - Open status - List is accruing members and can be targeted to.; CLOSED - Closed status - No new members being added. Cannot be used for targeting. |
| logicalUserList | `LogicalUserListInfo` | User list that is a custom combination of user lists and user interests. |
| lookalikeUserList | `LookalikeUserListInfo` | Immutable. Lookalike User List. |
| matchRatePercentage | integer (int32) | Output only. Indicates match rate for Customer Match lists. The range of this field is [0-100]. This will be null for other list types or when it's not possible to calculate the match rate. This field is read-only. |
| crmBasedUserList | `CrmBasedUserListInfo` | User list of CRM users provided by the advertiser. |

### `MutateUserListsRequest`

Request message for UserListService.MutateUserLists.

| Field | Type | Description |
|---|---|---|
| validateOnly | boolean | If true, the request is validated but not executed. Only errors are returned, not results. |
| partialFailure | boolean | If true, successful operations will be carried out and invalid operations will return errors. If false, all operations will be carried out in one transaction if and only if they are all valid. Default is false. |
| operations | array<`UserListOperation`> | Required. The list of operations to perform on individual user lists. |

### `MutateUserListsResponse`

Response message for user list mutate.

| Field | Type | Description |
|---|---|---|
| partialFailureError | `GoogleRpc__Status` | Errors that pertain to operation failures in the partial failure mode. Returned only when partial_failure = true and all errors occur inside the operations. If any errors occur outside the operations (for example, auth errors), we return an RPC level error. |
| results | array<`MutateUserListResult`> | All results for the mutate. |

### `BasicUserListInfo`

User list targeting as a collection of conversions or remarketing actions.

| Field | Type | Description |
|---|---|---|
| actions | array<`UserListActionInfo`> | Actions associated with this user list. |

### `CrmBasedUserListInfo`

UserList of CRM users provided by the advertiser.

| Field | Type | Description |
|---|---|---|
| dataSourceType | string enum(UNSPECIFIED, UNKNOWN, FIRST_PARTY, THIRD_PARTY_CREDIT_BUREAU, THIRD_PARTY_VOTER_FILE, THIRD_PARTY_PARTNER_DATA) | Data source of the list. Default value is FIRST_PARTY. Only customers on the allow-list can create third-party sourced CRM lists. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; FIRST_PARTY - The uploaded data is first-party data.; THIRD_PARTY_CREDIT_BUREAU - The uploaded data is from a third-party credit bureau.; THIRD_PARTY_VOTER_FILE - The uploaded data is from a third-party voter file.; THIRD_PARTY_PARTNER_DATA - The uploaded data is third party partner data. |
| appId | string | A string that uniquely identifies a mobile application from which the data was collected. For iOS, the ID string is the 9 digit string that appears at the end of an App Store URL (for example, "476943146" for "Flood-It! 2" whose App Store link is http://itunes.apple.com/us/app/flood-it!-2/id476943146). For Android, the ID string is the application's package name (for example, "com.labpixies.colordrips" for "Color Drips" given Google Play link https://play.google.com/store/apps/details?id=com.labpixies.colordrips). Required when creating CrmBasedUserList for uploading mobile advertising IDs. |
| uploadKeyType | string enum(UNSPECIFIED, UNKNOWN, CONTACT_INFO, CRM_ID, MOBILE_ADVERTISING_ID) | Matching key type of the list. Mixed data types are not allowed on the same list. This field is required for an ADD operation. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; CONTACT_INFO - Members are matched from customer info such as email address, phone number or physical address.; CRM_ID - Members are matched from a user id generated and assigned by the advertiser.; MOBILE_ADVERTISING_ID - Members are matched from mobile advertising ids. |

### `LogicalUserListInfo`

Represents a user list that is a custom combination of user lists.

| Field | Type | Description |
|---|---|---|
| rules | array<`UserListLogicalRuleInfo`> | Logical list rules that define this user list. The rules are defined as a logical operator (ALL/ANY/NONE) and a list of user lists. All the rules are ANDed when they are evaluated. Required for creating a logical user list. |

### `LookalikeUserListInfo`

LookalikeUserlist, composed of users similar to those of a configurable seed (set of UserLists)

| Field | Type | Description |
|---|---|---|
| countryCodes | array<string> | Countries targeted by the Lookalike. Two-letter country code as defined by ISO-3166 |
| seedUserListIds | array<string (int64)> | Seed UserList ID from which this list is derived, provided by user. |
| expansionLevel | string enum(UNSPECIFIED, UNKNOWN, NARROW, BALANCED, BROAD) | Expansion level, reflecting the size of the lookalike audience Values: UNSPECIFIED - Not specified.; UNKNOWN - Invalid expansion level.; NARROW - Expansion to a small set of users that are similar to the seed lists; BALANCED - Expansion to a medium set of users that are similar to the seed lists. Includes all users of EXPANSION_LEVEL_NARROW, and more.; BROAD - Expansion to a large set of users that are similar to the seed lists. Includes all users of EXPANSION_LEVEL_BALANCED, and more. |

### `RuleBasedUserListInfo`

Representation of a userlist that is generated by a rule.

| Field | Type | Description |
|---|---|---|
| flexibleRuleUserList | `FlexibleRuleUserListInfo` | Flexible rule representation of visitors with one or multiple actions. The flexible user list is defined by two lists of operands – inclusive_operands and exclusive_operands; each operand represents a set of users based on actions they took in a given timeframe. These lists of operands are combined with the AND_NOT operator, so that users represented by the inclusive operands are included in the user list, minus the users represented by the exclusive operands. |
| prepopulationStatus | string enum(UNSPECIFIED, UNKNOWN, REQUESTED, FINISHED, FAILED) | The status of pre-population. The field is default to NONE if not set which means the previous users will not be considered. If set to REQUESTED, past site visitors or app users who match the list definition will be included in the list (works on the Display Network only). This will only add past users from within the last 30 days, depending on the list's membership duration and the date when the remarketing tag is added. The status will be updated to FINISHED once request is processed, or FAILED if the request fails. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; REQUESTED - Prepopoulation is being requested.; FINISHED - Prepopulation is finished.; FAILED - Prepopulation failed. |

### `SimilarUserListInfo`

SimilarUserList is a list of users which are similar to users from another UserList. These lists are read-only and automatically created by Google.

| Field | Type | Description |
|---|---|---|
| seedUserList | string | Seed UserList from which this list is derived. |

### `UserListOperation`

A single operation (create, update) on a user list.

| Field | Type | Description |
|---|---|---|
| updateMask | string (google-fieldmask) | FieldMask that determines which resource fields are modified in an update. |
| update | `UserList` | Update operation: The user list is expected to have a valid resource name. |
| remove | string | Remove operation: A resource name for the removed user list is expected, in this format: `customers/{customer_id}/userLists/{user_list_id}` |
| create | `UserList` | Create operation: No resource name is expected for the new user list. |

### `MutateUserListResult`

The result for the user list mutate.

| Field | Type | Description |
|---|---|---|
| resourceName | string | Returned for successful operations. |

### `GoogleRpc__Status`

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

| Field | Type | Description |
|---|---|---|
| details | array<map<string, any>> | A list of messages that carry the error details. There is a common set of message types for APIs to use. |
| message | string | A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. |
| code | integer (int32) | The status code, which should be an enum value of google.rpc.Code. |

### `UserListActionInfo`

Represents an action type used for building remarketing user lists.

| Field | Type | Description |
|---|---|---|
| remarketingAction | string | A remarketing action. |
| conversionAction | string | A conversion action that's not generated from remarketing. |

### `UserListLogicalRuleInfo`

A user list logical rule. A rule has a logical operator (and/or/not) and a list of user lists as operands.

| Field | Type | Description |
|---|---|---|
| operator | string enum(UNSPECIFIED, UNKNOWN, ALL, ANY, NONE) | The logical operator of the rule. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; ALL - And - all of the operands.; ANY - Or - at least one of the operands.; NONE - Not - none of the operands. |
| ruleOperands | array<`LogicalUserListOperandInfo`> | The list of operands of the rule. |

### `FlexibleRuleUserListInfo`

Flexible rule representation of visitors with one or multiple actions. The flexible user list is defined by two lists of operands – inclusive_operands and exclusive_operands; each operand represents a set of users based on actions they took in a given timeframe. These lists of operands are combined with the AND_NOT operator, so that users represented by the inclusive operands are included in the user list, minus the users represented by the exclusive operands.

| Field | Type | Description |
|---|---|---|
| inclusiveOperands | array<`FlexibleRuleOperandInfo`> | Rules representing users that should be included in the user list. These are located on the left side of the AND_NOT operator, and joined together by either AND/OR as specified by the inclusive_rule_operator. |
| inclusiveRuleOperator | string enum(UNSPECIFIED, UNKNOWN, AND, OR) | Operator that defines how the inclusive operands are combined. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; AND - A AND B.; OR - A OR B. |
| exclusiveOperands | array<`FlexibleRuleOperandInfo`> | Rules representing users that should be excluded from the user list. These are located on the right side of the AND_NOT operator, and joined together by OR. |

### `LogicalUserListOperandInfo`

Operand of logical user list that consists of a user list.

| Field | Type | Description |
|---|---|---|
| userList | string | Resource name of a user list as an operand. |

### `FlexibleRuleOperandInfo`

Flexible rule that wraps the common rule and a lookback window.

| Field | Type | Description |
|---|---|---|
| rule | `UserListRuleInfo` | List of rule item groups that defines this rule. Rule item groups are grouped together. |
| lookbackWindowDays | string (int64) | Lookback window for this rule in days. From now until X days ago. |

### `UserListRuleInfo`

A client defined rule based on custom parameters sent by web sites or uploaded by the advertiser.

| Field | Type | Description |
|---|---|---|
| ruleItemGroups | array<`UserListRuleItemGroupInfo`> | List of rule item groups that defines this rule. Rule item groups are grouped together based on rule_type. |
| ruleType | string enum(UNSPECIFIED, UNKNOWN, AND_OF_ORS, OR_OF_ANDS) | Rule type is used to determine how to group rule items. The default is OR of ANDs (disjunctive normal form). That is, rule items will be ANDed together within rule item groups and the groups themselves will be ORed together. OR of ANDs is the only supported type for FlexibleRuleUserList. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; AND_OF_ORS - Conjunctive normal form.; OR_OF_ANDS - Disjunctive normal form. |

### `UserListRuleItemGroupInfo`

A group of rule items.

| Field | Type | Description |
|---|---|---|
| ruleItems | array<`UserListRuleItemInfo`> | Rule items that will be grouped together based on rule_type. |

### `UserListRuleItemInfo`

An atomic rule item.

| Field | Type | Description |
|---|---|---|
| dateRuleItem | `UserListDateRuleItemInfo` | An atomic rule item composed of a date operation. |
| numberRuleItem | `UserListNumberRuleItemInfo` | An atomic rule item composed of a number operation. |
| name | string | Rule variable name. It should match the corresponding key name fired by the pixel. A name must begin with US-ascii letters or underscore or UTF8 code that is greater than 127 and consist of US-ascii letters or digits or underscore or UTF8 code that is greater than 127. For websites, there are two built-in variable URL (name = 'url__') and referrer URL (name = 'ref_url__'). This field must be populated when creating a new rule item. |
| stringRuleItem | `UserListStringRuleItemInfo` | An atomic rule item composed of a string operation. |

### `UserListDateRuleItemInfo`

A rule item composed of a date operation.

| Field | Type | Description |
|---|---|---|
| operator | string enum(UNSPECIFIED, UNKNOWN, EQUALS, NOT_EQUALS, BEFORE, AFTER) | Date comparison operator. This field is required and must be populated when creating new date rule item. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; EQUALS - Equals.; NOT_EQUALS - Not Equals.; BEFORE - Before.; AFTER - After. |
| value | string | String representing date value to be compared with the rule variable. Supported date format is YYYY-MM-DD. Times are reported in the customer's time zone. |
| offsetInDays | string (int64) | The relative date value of the right hand side denoted by number of days offset from now. The value field will override this field when both are present. |

### `UserListNumberRuleItemInfo`

A rule item composed of a number operation.

| Field | Type | Description |
|---|---|---|
| value | number (double) | Number value to be compared with the variable. This field is required and must be populated when creating a new number rule item. |
| operator | string enum(UNSPECIFIED, UNKNOWN, GREATER_THAN, GREATER_THAN_OR_EQUAL, EQUALS, NOT_EQUALS, LESS_THAN, LESS_THAN_OR_EQUAL) | Number comparison operator. This field is required and must be populated when creating a new number rule item. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; GREATER_THAN - Greater than.; GREATER_THAN_OR_EQUAL - Greater than or equal.; EQUALS - Equals.; NOT_EQUALS - Not equals.; LESS_THAN - Less than.; LESS_THAN_OR_EQUAL - Less than or equal. |

### `UserListStringRuleItemInfo`

A rule item composed of a string operation.

| Field | Type | Description |
|---|---|---|
| value | string | The right hand side of the string rule item. For URLs or referrer URLs, the value can not contain illegal URL chars such as newlines, quotes, tabs, or parentheses. This field is required and must be populated when creating a new string rule item. |
| operator | string enum(UNSPECIFIED, UNKNOWN, CONTAINS, EQUALS, STARTS_WITH, ENDS_WITH, NOT_EQUALS, NOT_CONTAINS, NOT_STARTS_WITH, NOT_ENDS_WITH) | String comparison operator. This field is required and must be populated when creating a new string rule item. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; CONTAINS - Contains.; EQUALS - Equals.; STARTS_WITH - Starts with.; ENDS_WITH - Ends with.; NOT_EQUALS - Not equals.; NOT_CONTAINS - Not contains.; NOT_STARTS_WITH - Not starts with.; NOT_ENDS_WITH - Not ends with. |

---

## Field reference (verbatim from the Google field reference page)

[Help me build a query](https://developers.google.com/google-ads/api/fields/v26/user_list_query_builder.md.txt) [Proto definition ![on GitHub](https://developers.google.com/site-assets/logo-github.svg)](https://github.com/googleapis/googleapis/blob/master/google/ads/googleads/v26/resources/user_list.proto)

A user list. This is a list of users a customer may target.
The unique key of a user list consists of the following fields: `id`.
Note that the `name` must also be unique for user lists owned
by a given customer, except in some cases where
`access_reason` is set to `SHARED`. Violating the unique name constraint
produces error: `UserListError.INVALID_NAME`.

| Attributed resources |
|---|
| [customer](https://developers.google.com/google-ads/api/fields/v26/customer.md.txt) |

Fields from the preceding resources can be selected along with this
resource in your `SELECT` and `WHERE` clauses. These fields do **not** segment
metrics in your `SELECT` clause.

## user_list.access_reason

Field descriptionOutput only. Indicates the reason this account has been granted access to
the list. The reason can be SHARED, OWNED, LICENSED or SUBSCRIBED.

This field is read-only.
Category`ATTRIBUTE` Data Type`ENUM`
`AFFILIATED``LICENSED``OWNED``SHARED``SUBSCRIBED``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.AccessReasonEnum.AccessReason` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

**Resources:** [ad_group_audience_view](https://developers.google.com/google-ads/api/fields/v26/ad_group_audience_view.md.txt), [ad_group_criterion](https://developers.google.com/google-ads/api/fields/v26/ad_group_criterion.md.txt), [campaign_audience_view](https://developers.google.com/google-ads/api/fields/v26/campaign_audience_view.md.txt), [campaign_criterion](https://developers.google.com/google-ads/api/fields/v26/campaign_criterion.md.txt), [offline_user_data_job](https://developers.google.com/google-ads/api/fields/v26/offline_user_data_job.md.txt), [user_list](https://developers.google.com/google-ads/api/fields/v26/user_list.md.txt)

## user_list.account_user_list_status

Field descriptionIndicates if this share is still enabled. When a UserList is shared with
the user this field is set to ENABLED. Later the userList owner can decide
to revoke the share and make it DISABLED.
The default value of this field is set to ENABLED.
Category`ATTRIBUTE` Data Type`ENUM`
`DISABLED``ENABLED``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.UserListAccessStatusEnum.UserListAccessStatus` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.basic_user_list.actions

Field descriptionActions associated with this user list.
Category`ATTRIBUTE` Data Type`MESSAGE` Type URL`google.ads.googleads.v26.common.UserListActionInfo` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: True Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.closing_reason

Field descriptionIndicating the reason why this user list membership status is closed. It is
only populated on lists that were automatically closed due to inactivity,
and will be cleared once the list membership status becomes open.
Category`ATTRIBUTE` Data Type`ENUM`
`UNKNOWN``UNSPECIFIED``UNUSED` Type URL`google.ads.googleads.v26.enums.UserListClosingReasonEnum.UserListClosingReason` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.crm_based_user_list.app_id

Field descriptionA string that uniquely identifies a mobile application from which the data
was collected.
For iOS, the ID string is the 9 digit string that appears at the end of an
App Store URL (for example, "476943146" for "Flood-It! 2" whose App Store
link is <http://itunes.apple.com/us/app/flood-it!-2/id476943146>). For
Android, the ID string is the application's package name (for example,
"com.labpixies.colordrips" for "Color Drips" given Google Play link
<https://play.google.com/store/apps/details?id=com.labpixies.colordrips>).
Required when creating CrmBasedUserList for uploading mobile advertising
IDs.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.crm_based_user_list.data_source_type

Field descriptionData source of the list. Default value is FIRST_PARTY.
Only customers on the allow-list can create third-party sourced CRM lists.
Category`ATTRIBUTE` Data Type`ENUM`
`FIRST_PARTY``THIRD_PARTY_CREDIT_BUREAU``THIRD_PARTY_PARTNER_DATA``THIRD_PARTY_VOTER_FILE``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.UserListCrmDataSourceTypeEnum.UserListCrmDataSourceType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.crm_based_user_list.upload_key_type

Field descriptionMatching key type of the list.
Mixed data types are not allowed on the same list.
This field is required for an ADD operation.
Category`ATTRIBUTE` Data Type`ENUM`
`CONTACT_INFO``CRM_ID``MOBILE_ADVERTISING_ID``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.CustomerMatchUploadKeyTypeEnum.CustomerMatchUploadKeyType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.description

Field descriptionDescription of this user list.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.eligible_for_display

Field descriptionOutput only. Indicates this user list is eligible for Google Display
Network.

This field is read-only.
Category`ATTRIBUTE` Data Type`BOOLEAN` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.eligible_for_search

Field descriptionIndicates if this user list is eligible for Google Search Network.
Category`ATTRIBUTE` Data Type`BOOLEAN` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.id

Field descriptionOutput only. Id of the user list.
Category`ATTRIBUTE` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.integration_code

Field descriptionAn ID from external system. It is used by user list sellers to correlate
IDs on their systems.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.logical_user_list.rules

Field descriptionLogical list rules that define this user list. The rules are defined as a
logical operator (ALL/ANY/NONE) and a list of user lists. All the rules are
ANDed when they are evaluated.

Required for creating a logical user list.
Category`ATTRIBUTE` Data Type`MESSAGE` Type URL`google.ads.googleads.v26.common.UserListLogicalRuleInfo` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: True Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.lookalike_user_list.country_codes

Field descriptionCountries targeted by the Lookalike. Two-letter country code as defined by
ISO-3166
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: True Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.lookalike_user_list.expansion_level

Field descriptionExpansion level, reflecting the size of the lookalike audience
Category`ATTRIBUTE` Data Type`ENUM`
`BALANCED``BROAD``NARROW``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.LookalikeExpansionLevelEnum.LookalikeExpansionLevel` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.lookalike_user_list.seed_user_list_ids

Field descriptionSeed UserList ID from which this list is derived, provided by user.
Category`ATTRIBUTE` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: True Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.match_rate_percentage

Field descriptionOutput only. Indicates match rate for Customer Match lists. The range of
this field is \[0-100\]. This will be null for other list types or when it's
not possible to calculate the match rate.

This field is read-only.
Category`ATTRIBUTE` Data Type`INT32` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.membership_life_span

Field descriptionNumber of days a user's cookie stays on your list since its most recent
addition to the list. This field must be between 0 and 540 inclusive.

This field is ignored for `logical_user_list` and `rule_based_user_list`
types. Membership to lists of these types depends on the rules defined by
the lists.
Category`ATTRIBUTE` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.membership_status

Field descriptionMembership status of this user list. Indicates whether a user list is open
or active. Only open user lists can accumulate more users and can be
targeted to.
Category`ATTRIBUTE` Data Type`ENUM`
`CLOSED``OPEN``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.UserListMembershipStatusEnum.UserListMembershipStatus` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.name

Field descriptionName of this user list.
Unique per user list, except in some cases where a user list of the same
name has `access_reason` set to `SHARED`.
Category`ATTRIBUTE` Data Type`STRING` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.read_only

Field descriptionOutput only. An option that indicates if a user may edit a list. Depends on
the list ownership and list type. For example, external remarketing user
lists are not editable.

This field is read-only.
Category`ATTRIBUTE` Data Type`BOOLEAN` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.resource_name

Field descriptionImmutable. The resource name of the user list.
User list resource names have the form:

`customers/{customer_id}/userLists/{user_list_id}`
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: False  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.rule_based_user_list.flexible_rule_user_list.exclusive_operands

Field descriptionRules representing users that should be excluded from the user list. These
are located on the right side of the AND_NOT operator, and joined together
by OR.
Category`ATTRIBUTE` Data Type`MESSAGE` Type URL`google.ads.googleads.v26.common.FlexibleRuleOperandInfo` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: True Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.rule_based_user_list.flexible_rule_user_list.inclusive_operands

Field descriptionRules representing users that should be included in the user list. These
are located on the left side of the AND_NOT operator, and joined together
by either AND/OR as specified by the inclusive_rule_operator.
Category`ATTRIBUTE` Data Type`MESSAGE` Type URL`google.ads.googleads.v26.common.FlexibleRuleOperandInfo` CapabilitiesSelectable: True  
Filterable: False  
Sortable: False  
Repeated: True Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.rule_based_user_list.flexible_rule_user_list.inclusive_rule_operator

Field descriptionOperator that defines how the inclusive operands are combined.
Category`ATTRIBUTE` Data Type`ENUM`
`AND``OR``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.UserListFlexibleRuleOperatorEnum.UserListFlexibleRuleOperator` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.rule_based_user_list.prepopulation_status

Field descriptionThe status of pre-population. The field is default to NONE if not set which
means the previous users will not be considered. If set to REQUESTED, past
site visitors or app users who match the list definition will be included
in the list (works on the Display Network only). This will only
add past users from within the last 30 days, depending on the
list's membership duration and the date when the remarketing tag is added.
The status will be updated to FINISHED once request is processed, or FAILED
if the request fails.
Category`ATTRIBUTE` Data Type`ENUM`
`FAILED``FINISHED``REQUESTED``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.UserListPrepopulationStatusEnum.UserListPrepopulationStatus` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.similar_user_list.seed_user_list

Field descriptionSeed UserList from which this list is derived.
Category`ATTRIBUTE` Data Type`RESOURCE_NAME` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.size_for_display

Field descriptionOutput only. Estimated number of users in this user list, on the Google
Display Network. This value is null if the number of users has not yet been
determined.

This field is read-only.
Category`ATTRIBUTE` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.size_for_search

Field descriptionOutput only. Estimated number of users in this user list in the google.com
domain. These are the users available for targeting in Search campaigns.
This value is null if the number of users has not yet been determined.

This field is read-only.
Category`ATTRIBUTE` Data Type`INT64` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.size_range_for_display

Field descriptionOutput only. Size range in terms of number of users of the UserList, on the
Google Display Network.

This field is read-only.
Category`ATTRIBUTE` Data Type`ENUM`
`FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND``FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION``FIVE_MILLION_TO_TEN_MILLION``LESS_THAN_FIVE_HUNDRED``LESS_THAN_ONE_THOUSAND``ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND``ONE_MILLION_TO_TWO_MILLION``ONE_THOUSAND_TO_TEN_THOUSAND``OVER_FIFTY_MILLION``TEN_MILLION_TO_TWENTY_MILLION``TEN_THOUSAND_TO_FIFTY_THOUSAND``THIRTY_MILLION_TO_FIFTY_MILLION``THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND``THREE_MILLION_TO_FIVE_MILLION``TWENTY_MILLION_TO_THIRTY_MILLION``TWO_MILLION_TO_THREE_MILLION``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.UserListSizeRangeEnum.UserListSizeRange` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.size_range_for_search

Field descriptionOutput only. Size range in terms of number of users of the UserList, for
Search ads.

This field is read-only.
Category`ATTRIBUTE` Data Type`ENUM`
`FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND``FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION``FIVE_MILLION_TO_TEN_MILLION``LESS_THAN_FIVE_HUNDRED``LESS_THAN_ONE_THOUSAND``ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND``ONE_MILLION_TO_TWO_MILLION``ONE_THOUSAND_TO_TEN_THOUSAND``OVER_FIFTY_MILLION``TEN_MILLION_TO_TWENTY_MILLION``TEN_THOUSAND_TO_FIFTY_THOUSAND``THIRTY_MILLION_TO_FIFTY_MILLION``THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND``THREE_MILLION_TO_FIVE_MILLION``TWENTY_MILLION_TO_THIRTY_MILLION``TWO_MILLION_TO_THREE_MILLION``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.UserListSizeRangeEnum.UserListSizeRange` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.

## user_list.type

Field descriptionOutput only. Type of this list.

This field is read-only.
Category`ATTRIBUTE` Data Type`ENUM`
`CRM_BASED``EXTERNAL_REMARKETING``LOGICAL``LOOKALIKE``REMARKETING``RULE_BASED``SIMILAR``UNKNOWN``UNSPECIFIED` Type URL`google.ads.googleads.v26.enums.UserListTypeEnum.UserListType` CapabilitiesSelectable: True  
Filterable: True  
Sortable: True  
Repeated: False Selectable withThe following fields and resources can be selected with this field:

Same as user_list.access_reason.
