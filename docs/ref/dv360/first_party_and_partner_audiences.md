# First Party and Partner Audiences

> Source: Display & Video 360 API v4 REST Discovery document (https://displayvideo.googleapis.com/$discovery/rest?version=v4, revision 20261117); reference https://developers.google.com/display-video/api/reference/rest. Fetched 2026-11-19.

Used by koddi-offsite via: `NewFirstPartyAndPartnerAudiencesService().List` (`service.go`).

---

## firstPartyAndPartnerAudiences.create

`POST https://displayvideo.googleapis.com/v4/firstPartyAndPartnerAudiences`

Creates a FirstPartyAndPartnerAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | query | string (int64) |  | Required. The ID of the advertiser under whom the FirstPartyAndPartnerAudience will be created. |

**Request body**: `FirstPartyAndPartnerAudience`

**Response**: `FirstPartyAndPartnerAudience`

---

## firstPartyAndPartnerAudiences.patch

`PATCH https://displayvideo.googleapis.com/v4/firstPartyAndPartnerAudiences/{+firstPartyAndPartnerAudienceId}`

Updates an existing FirstPartyAndPartnerAudience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| firstPartyAndPartnerAudienceId | path | string (int64) | yes | Identifier. The unique ID of the first party and partner audience. Assigned by the system. |
| updateMask | query | string (google-fieldmask) |  | Required. The mask to control which fields to update. Updates are only supported for the following fields: * `displayName` * `description` * `membershipDurationDays` |
| advertiserId | query | string (int64) |  | Required. The ID of the owner advertiser of the updated FirstPartyAndPartnerAudience. |

**Request body**: `FirstPartyAndPartnerAudience`

**Response**: `FirstPartyAndPartnerAudience`

---

## firstPartyAndPartnerAudiences.editCustomerMatchMembers

`POST https://displayvideo.googleapis.com/v4/firstPartyAndPartnerAudiences/{+firstPartyAndPartnerAudienceId}:editCustomerMatchMembers`

Updates the member list of a Customer Match audience. Only supported for the following audience_type: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID`

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| firstPartyAndPartnerAudienceId | path | string (int64) | yes | Required. The ID of the Customer Match FirstPartyAndPartnerAudience whose members will be edited. |

**Request body**: `EditCustomerMatchMembersRequest`

**Response**: `EditCustomerMatchMembersResponse`

---

## firstPartyAndPartnerAudiences.list

`GET https://displayvideo.googleapis.com/v4/firstPartyAndPartnerAudiences`

Lists first party and partner audiences. The order is defined by the order_by parameter.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| advertiserId | query | string (int64) |  | The ID of the advertiser that has access to the fetched first party and partner audiences. |
| pageToken | query | string |  | Optional. A token identifying a page of results the server should return. Typically, this is the value of next_page_token returned from the previous call to `ListFirstPartyAndPartnerAudiences` method. If not specified, the first page of results will be returned. |
| pageSize | query | integer (int32) |  | Optional. Requested page size. Must be between `1` and `5000`. If unspecified, this value defaults to `5000`. Returns error code `INVALID_ARGUMENT` if an invalid value is specified. |
| partnerId | query | string (int64) |  | The ID of the partner that has access to the fetched first party and partner audiences. |
| filter | query | string |  | Optional. Allows filtering by first party and partner audience fields. Supported syntax: * Filter expressions for first party and partner audiences can only contain at most one restriction. * A restriction has the form of `{field} {operator} {value}`. * All fields must use the `HAS (:)` operator. Supported fields: * `displayName` Examples: * All first party and partner audiences for which the display name contains "Google": `displayName:"Google"`. The length of this field should be no more than 500 characters. Reference our [filter `LIST` requests](/display-video/api/guides/how-tos/filters) guide for more information. |
| orderBy | query | string |  | Optional. Field by which to sort the list. Acceptable values are: * `FirstPartyAndPartnerAudienceId` (default) * `displayName` The default sorting order is ascending. To specify descending order for a field, a suffix "desc" should be added to the field name. Example: `displayName desc`. |

**Response**: `ListFirstPartyAndPartnerAudiencesResponse`

---

## firstPartyAndPartnerAudiences.get

`GET https://displayvideo.googleapis.com/v4/firstPartyAndPartnerAudiences/{+firstPartyAndPartnerAudienceId}`

Gets a first party or partner audience.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| firstPartyAndPartnerAudienceId | path | string (int64) | yes | Required. The ID of the first party and partner audience to fetch. |
| advertiserId | query | string (int64) |  | The ID of the advertiser that has access to the fetched first party and partner audience. |
| partnerId | query | string (int64) |  | The ID of the partner that has access to the fetched first party and partner audience. |

**Response**: `FirstPartyAndPartnerAudience`

---

## Schemas

### `FirstPartyAndPartnerAudience`

Describes a first or partner audience list used for targeting. First party audiences are created via usage of client data. Partner audiences are provided by Third Party data providers and can only be licensed to customers.

| Field | Type | Description |
|---|---|---|
| name | string | Output only. The resource name of the first party and partner audience. |
| appId | string | Optional. The app_id matches with the type of the mobile_device_ids being uploaded. Only applicable to audience_type `CUSTOMER_MATCH_DEVICE_ID` |
| firstPartyAndPartnerAudienceType | string enum(FIRST_PARTY_AND_PARTNER_AUDIENCE_TYPE_UNSPECIFIED, TYPE_FIRST_PARTY, TYPE_PARTNER) | Output only. Whether the audience is a first party and partner audience. Values: FIRST_PARTY_AND_PARTNER_AUDIENCE_TYPE_UNSPECIFIED - Default value when type is not specified or is unknown.; TYPE_FIRST_PARTY - Audience that is created via usage of client data.; TYPE_PARTNER - Audience that is provided by Third Party data providers. |
| displayMobileWebAudienceSize | string (int64) | Output only. The estimated mobile web audience size in Display network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request. |
| displayAudienceSize | string (int64) | Output only. The estimated audience size for the Display network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only returned in GET request. |
| audienceType | string enum(AUDIENCE_TYPE_UNSPECIFIED, CUSTOMER_MATCH_CONTACT_INFO, CUSTOMER_MATCH_DEVICE_ID, CUSTOMER_MATCH_USER_ID, ACTIVITY_BASED, FREQUENCY_CAP, TAG_BASED, YOUTUBE_USERS, THIRD_PARTY, COMMERCE, LINEAR, AGENCY) | Immutable. The type of the audience. Values: AUDIENCE_TYPE_UNSPECIFIED - Default value when type is not specified or is unknown.; CUSTOMER_MATCH_CONTACT_INFO - Audience was generated through matching customers to known contact information.; CUSTOMER_MATCH_DEVICE_ID - Audience was generated through matching customers to known Mobile device IDs.; CUSTOMER_MATCH_USER_ID - Audience was generated through matching customers to known User IDs.; ACTIVITY_BASED - Deprecated: Audience was created based on campaign activity.; FREQUENCY_CAP - Deprecated: Audience was created based on excluding the number of impressions they were served.; TAG_BASED - Audience was created based on custom variables attached to pixel.; YOUTUBE_USERS - Audience was created based on past interactions with videos, YouTube ads, or YouTube channel.; THIRD_PARTY - Audience has been licensed for use from a third party.; COMMERCE - Audience provided by commerce partners for a fee.; LINEAR - Audience for Linear TV content.; AGENCY - Audience provided by an agency. |
| firstPartyAndPartnerAudienceId | string (int64) | Identifier. The unique ID of the first party and partner audience. Assigned by the system. |
| gmailAudienceSize | string (int64) | Output only. The estimated audience size for Gmail network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request. |
| mobileDeviceIdList | `MobileDeviceIdList` | Input only. A list of mobile device IDs to define the initial audience members. Only applicable to audience_type `CUSTOMER_MATCH_DEVICE_ID` |
| displayMobileAppAudienceSize | string (int64) | Output only. The estimated mobile app audience size in Display network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request. |
| audienceSource | string enum(AUDIENCE_SOURCE_UNSPECIFIED, DISPLAY_VIDEO_360, CAMPAIGN_MANAGER, AD_MANAGER, SEARCH_ADS_360, YOUTUBE, ADS_DATA_HUB) | Output only. The source of the audience. Values: AUDIENCE_SOURCE_UNSPECIFIED - Default value when audience source is not specified or is unknown.; DISPLAY_VIDEO_360 - Originated from Display & Video 360.; CAMPAIGN_MANAGER - Originated from Campaign Manager 360.; AD_MANAGER - Originated from Google Ad Manager.; SEARCH_ADS_360 - Originated from Search Ads 360.; YOUTUBE - Originated from Youtube.; ADS_DATA_HUB - Originated from Ads Data Hub. |
| activeDisplayAudienceSize | string (int64) | Output only. The estimated audience size for the Display network in the past month. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only returned in GET request. |
| displayName | string | Optional. The display name of the first party and partner audience. |
| description | string | Optional. The user-provided description of the audience. Only applicable to first party audiences. |
| displayDesktopAudienceSize | string (int64) | Output only. The estimated desktop audience size in Display network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request. |
| membershipDurationDays | string (int64) | Optional. The duration in days that an entry remains in the audience after the qualifying event. The set value must be greater than 0 and less than or equal to 540. Only applicable to first party audiences. This field is required if one of the following audience_type is used: * `CUSTOMER_MATCH_CONTACT_INFO` * `CUSTOMER_MATCH_DEVICE_ID` |
| youtubeAudienceSize | string (int64) | Output only. The estimated audience size for YouTube network. If the size is less than 1000, the number will be hidden and 0 will be returned due to privacy reasons. Otherwise, the number will be rounded off to two significant digits. Only applicable to first party audiences. Only returned in GET request. |
| contactInfoList | `ContactInfoList` | Input only. A list of contact information to define the initial audience members. Only applicable to audience_type `CUSTOMER_MATCH_CONTACT_INFO` |

### `EditCustomerMatchMembersRequest`

Request message for FirstPartyAndPartnerAudienceService.EditCustomerMatchMembers.

| Field | Type | Description |
|---|---|---|
| removedMobileDeviceIdList | `MobileDeviceIdList` | Input only. A list of mobile device IDs to define the members to be removed. |
| addedMobileDeviceIdList | `MobileDeviceIdList` | Input only. A list of mobile device IDs to define the members to be added. |
| removedContactInfoList | `ContactInfoList` | Input only. A list of contact information to define the members to be removed. |
| addedContactInfoList | `ContactInfoList` | Input only. A list of contact information to define the members to be added. |
| advertiserId | string (int64) | Required. The ID of the owner advertiser of the updated Customer Match FirstAndThirdPartyAudience. |

### `EditCustomerMatchMembersResponse`

The response of FirstPartyAndPartnerAudienceService.EditCustomerMatchMembers.

| Field | Type | Description |
|---|---|---|
| firstPartyAndPartnerAudienceId | string (int64) | Required. The ID of the updated Customer Match FirstPartyAndPartnerAudience. |

### `ListFirstPartyAndPartnerAudiencesResponse`

| Field | Type | Description |
|---|---|---|
| firstPartyAndPartnerAudiences | array<`FirstPartyAndPartnerAudience`> | The list of first party and partner audiences. Audience size properties will not be included. This list will be absent if empty. |
| nextPageToken | string | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListFirstPartyAndPartnerAudiences` method to retrieve the next page of results. |

### `ContactInfoList`

Wrapper message for a list of contact information defining Customer Match audience members.

| Field | Type | Description |
|---|---|---|
| contactInfos | array<`ContactInfo`> | Optional. A list of ContactInfo objects defining Customer Match audience members. The size of members after splitting the contact_infos mustn't be greater than 500,000. |
| consent | `Consent` | Input only. The consent setting for the users in contact_infos. Leaving this field unset indicates that consent is not specified. If ad_user_data or ad_personalization fields are set to `CONSENT_STATUS_DENIED`, the request will return an error. |

### `MobileDeviceIdList`

Wrapper message for a list of mobile device IDs defining Customer Match audience members.

| Field | Type | Description |
|---|---|---|
| consent | `Consent` | Input only. The consent setting for the users in mobile_device_ids. Leaving this field unset indicates that consent is not specified. If ad_user_data or ad_personalization fields are set to `CONSENT_STATUS_DENIED`, the request will return an error. |
| mobileDeviceIds | array<string> | Optional. A list of mobile device IDs defining Customer Match audience members. The size of mobile_device_ids mustn't be greater than 500,000. |

### `Consent`

User consent status.

| Field | Type | Description |
|---|---|---|
| adPersonalization | string enum(CONSENT_STATUS_UNSPECIFIED, CONSENT_STATUS_GRANTED, CONSENT_STATUS_DENIED) | Represents consent for ad personalization. Values: CONSENT_STATUS_UNSPECIFIED - Type value is not specified or is unknown in this version.; CONSENT_STATUS_GRANTED - Consent is granted.; CONSENT_STATUS_DENIED - Consent is denied. |
| adUserData | string enum(CONSENT_STATUS_UNSPECIFIED, CONSENT_STATUS_GRANTED, CONSENT_STATUS_DENIED) | Represents consent for ad user data. Values: CONSENT_STATUS_UNSPECIFIED - Type value is not specified or is unknown in this version.; CONSENT_STATUS_GRANTED - Consent is granted.; CONSENT_STATUS_DENIED - Consent is denied. |

### `ContactInfo`

Contact information defining a Customer Match audience member.

| Field | Type | Description |
|---|---|---|
| hashedEmails | array<string> | Optional. A list of SHA256 hashed email of the member. Before hashing, remove all whitespace and make sure the string is all lowercase. |
| hashedLastName | string | Optional. SHA256 hashed last name of the member. Before hashing, remove all whitespace and make sure the string is all lowercase. Must also be set with the following fields: * country_code * hashed_first_name * zip_codes |
| countryCode | string | Optional. Country code of the member. Must also be set with the following fields: * hashed_first_name * hashed_last_name * zip_codes |
| hashedPhoneNumbers | array<string> | Optional. A list of SHA256 hashed phone numbers of the member. Before hashing, all phone numbers must be formatted using the [E.164 format](https://en.wikipedia.org/wiki/E.164) and include the country calling code. |
| hashedFirstName | string | Optional. SHA256 hashed first name of the member. Before hashing, remove all whitespace and make sure the string is all lowercase. Must also be set with the following fields: * country_code * hashed_last_name * zip_codes |
| zipCodes | array<string> | Optional. A list of zip codes of the member. Must also be set with the following fields: * country_code * hashed_first_name * hashed_last_name |

