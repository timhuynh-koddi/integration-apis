# Merchant API accounts_v1: accounts.businessInfo

> Source: Merchant API `accounts_v1` REST Discovery document (https://merchantapi.googleapis.com/$discovery/rest?version=accounts_v1); overview https://developers.google.com/merchant/api/overview. Fetched 2026-11-19.

---

## accounts.businessInfo.getBusinessInfo

`GET https://merchantapi.googleapis.com/accounts/v1/{+name}`

Retrieves the business info of an account.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The resource name of the business info. Format: `accounts/{account}/businessInfo`. For example, `accounts/123456/businessInfo`. |

**Response**: `BusinessInfo`

---

## accounts.businessInfo.updateBusinessInfo

`PATCH https://merchantapi.googleapis.com/accounts/v1/{+name}`

Updates the business info of an account. Executing this method requires admin access.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Identifier. The resource name of the business info. Format: `accounts/{account}/businessInfo` |
| updateMask | query | string (google-fieldmask) |  | Optional. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `address` - `customer_service` - `korean_business_registration_number` |

**Request body**: `BusinessInfo`

**Response**: `BusinessInfo`

---

## Schemas

### `BusinessInfo`

The `BusinessInfo` message contains essential information about a business. This message captures key business details such as physical address, customer service contacts, and region-specific identifiers. For more information, see [Add your business information](https://support.google.com/merchants/answer/14286818#add_bus_info) and [Update your business information](https://developers.google.com/merchant/api/guides/accounts/create-accounts#update_your_business_information).

| Field | Type | Description |
|---|---|---|
| customerService | `CustomerService` | Optional. The customer service of the business. |
| phoneVerificationState | string enum(PHONE_VERIFICATION_STATE_UNSPECIFIED, PHONE_VERIFICATION_STATE_VERIFIED, PHONE_VERIFICATION_STATE_UNVERIFIED) | Output only. The phone verification state of the business. Values: PHONE_VERIFICATION_STATE_UNSPECIFIED - Default value. This value is unused.; PHONE_VERIFICATION_STATE_VERIFIED - The phone is verified.; PHONE_VERIFICATION_STATE_UNVERIFIED - The phone is unverified. |
| phone | `PhoneNumber` | Output only. The phone number of the business. |
| name | string | Identifier. The resource name of the business info. Format: `accounts/{account}/businessInfo` |
| address | `PostalAddress` | Optional. The address of the business. Only `region_code`, `address_lines`, `postal_code`, `administrative_area` and `locality` fields are supported. All other fields are ignored. |
| koreanBusinessRegistrationNumber | string | Optional. The 10-digit [Korean business registration number](https://support.google.com/merchants/answer/9037766) separated with dashes in the format: XXX-XX-XXXXX. |

### `CustomerService`

Customer service information.

| Field | Type | Description |
|---|---|---|
| uri | string | Optional. The URI where customer service may be found. |
| email | string | Optional. The email address where customer service may be reached. |
| phone | `PhoneNumber` | Optional. The phone number where customer service may be called. |

### `PhoneNumber`

An object representing a phone number, suitable as an API wire format. This representation: - should not be used for locale-specific formatting of a phone number, such as "+1 (650) 253-0000 ext. 123" - is not designed for efficient storage - may not be suitable for dialing - specialized libraries (see references) should be used to parse the number for that purpose To do something meaningful with this number, such as format it for various use-cases, convert it to an `i18n.phonenumbers.PhoneNumber` object first. For instance, in Java this would be: com.google.type.PhoneNumber wireProto = com.google.type.PhoneNumber.newBuilder().build(); com.google.i18n.phonenumbers.Phonenumber.PhoneNumber phoneNumber = PhoneNumberUtil.getInstance().parse(wireProto.getE164Number(), "ZZ"); if (!wireProto.getExtension().isEmpty()) { phoneNumber.setExtension(wireProto.getExtension()); } Reference(s): - https://github.com/google/libphonenumber

| Field | Type | Description |
|---|---|---|
| shortCode | `ShortCode` | A short code. Reference(s): - https://wikipedia.org/wiki/Short_code |
| extension | string | The phone number's extension. The extension is not standardized in ITU recommendations, except for being defined as a series of numbers with a maximum length of 40 digits. Other than digits, some other dialing characters such as ',' (indicating a wait) or '#' may be stored here. Note that no regions currently use extensions with short codes, so this field is normally only set in conjunction with an E.164 number. It is held separately from the E.164 number to allow for short code extensions in the future. |
| e164Number | string | The phone number, represented as a leading plus sign ('+'), followed by a phone number that uses a relaxed ITU E.164 format consisting of the country calling code (1 to 3 digits) and the subscriber number, with no additional spaces or formatting. For example: - correct: "+15552220123" - incorrect: "+1 (555) 222-01234 x123" The ITU E.164 format limits the latter to 12 digits, but in practice not all countries respect that, so we relax that restriction here. National-only numbers are not allowed. References: - https://www.itu.int/rec/T-REC-E.164-201011-I - https://en.wikipedia.org/wiki/E.164. - https://en.wikipedia.org/wiki/List_of_country_calling_codes |

### `PostalAddress`

Represents a postal address, such as for postal delivery or payments addresses. With a postal address, a postal service can deliver items to a premise, P.O. box, or similar. A postal address is not intended to model geographical locations like roads, towns, or mountains. In typical usage, an address would be created by user input or from importing existing data, depending on the type of process. Advice on address input or editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput. - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, see: https://support.google.com/business/answer/6397478.

| Field | Type | Description |
|---|---|---|
| locality | string | Optional. Generally refers to the city or town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave `locality` empty and use `address_lines`. |
| revision | integer (int32) | The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions. |
| recipients | array<string> | Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information. |
| sublocality | string | Optional. Sublocality of the address. For example, this can be a neighborhood, borough, or district. |
| administrativeArea | string | Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. For Spain, this is the province and not the autonomous community (for example, "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. For example, in Switzerland, this should be left unpopulated. |
| languageCode | string | Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en". |
| regionCode | string | Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland. |
| sortingCode | string | Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (for example, "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (Côte d'Ivoire). |
| postalCode | string | Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (for example, state or zip code validation in the United States). |
| addressLines | array<string> | Unstructured address lines describing the lower levels of an address. Because values in `address_lines` do not have type information and may sometimes contain multiple values in a single field (for example, "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country or region of the address. In places where this can vary (for example, Japan), `address_language` is used to make it explicit (for example, "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). In this way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a `region_code` with all remaining information placed in the `address_lines`. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a `region_code` and `address_lines` and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas). |
| organization | string | Optional. The name of the organization at the address. |

### `ShortCode`

An object representing a short code, which is a phone number that is typically much shorter than regular phone numbers and can be used to address messages in MMS and SMS systems, as well as for abbreviated dialing (For example "Text 611 to see how many minutes you have remaining on your plan."). Short codes are restricted to a region and are not internationally dialable, which means the same short code can exist in different regions, with different usage and pricing, even if those regions share the same country calling code (For example: US and CA).

| Field | Type | Description |
|---|---|---|
| number | string | Required. The short code digits, without a leading plus ('+') or country calling code. For example "611". |
| regionCode | string | Required. The BCP-47 region code of the location where calls to this short code can be made, such as "US" and "BB". Reference(s): - http://www.unicode.org/reports/tr35/#unicode_region_subtag |

