# Merchant API accounts_v1: accounts.automaticImprovements

> Source: Merchant API `accounts_v1` REST Discovery document (https://merchantapi.googleapis.com/$discovery/rest?version=accounts_v1); overview https://developers.google.com/merchant/api/overview. Fetched 2026-11-19.

---

## accounts.automaticImprovements.getAutomaticImprovements

`GET https://merchantapi.googleapis.com/accounts/v1/{+name}`

Retrieves the automatic improvements of an account.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The resource name of the automatic improvements. Format: `accounts/{account}/automaticImprovements` |

**Response**: `AutomaticImprovements`

---

## accounts.automaticImprovements.updateAutomaticImprovements

`PATCH https://merchantapi.googleapis.com/accounts/v1/{+name}`

Updates the automatic improvements of an account.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Identifier. The resource name of the automatic improvements. Format: `accounts/{account}/automaticImprovements`. |
| updateMask | query | string (google-fieldmask) |  | Required. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `item_updates` - `item_updates.account_level_settings` - `image_improvements` - `image_improvements.account_level_settings` - `shipping_improvements` - `shipping_improvements.allow_shipping_improvements` |

**Request body**: `AutomaticImprovements`

**Response**: `AutomaticImprovements`

---

## Schemas

### `AutomaticImprovements`

Collection of information related to the [automatic improvements](https://support.google.com/merchants/answer/12157888) of an account. For more information, see [Enable automatic improvements](https://developers.google.com/merchant/api/guides/automatic-improvements/overview).

| Field | Type | Description |
|---|---|---|
| shippingImprovements | `AutomaticShippingImprovements` | Not available for [advanced accounts](https://support.google.com/merchants/answer/188487). By turning on [automatic shipping improvements](https://support.google.com/merchants/answer/10027038), you are allowing Google to improve the accuracy of your delivery times shown to shoppers using Google. More accurate delivery times, especially when faster, typically lead to better conversion rates. Google will improve your estimated delivery times based on various factors: * Delivery address of an order * Current handling time and shipping time settings * Estimated weekdays or business days * Parcel tracking data This field is only updated (cleared) if provided in the update mask. |
| name | string | Identifier. The resource name of the automatic improvements. Format: `accounts/{account}/automaticImprovements`. |
| itemUpdates | `AutomaticItemUpdates` | Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown. This field is only updated (cleared) if provided in the update mask. |
| imageImprovements | `AutomaticImageImprovements` | This improvement will attempt to automatically correct submitted images if they don't meet the [image requirements](https://support.google.com/merchants/answer/6324350), for example, removing overlays. If successful, the image will be replaced and approved. This improvement is only applied to images of disapproved offers. For more information see: [Automatic image improvements](https://support.google.com/merchants/answer/9242973) This field is only updated (cleared) if provided in the update mask. |

### `AutomaticImageImprovements`

This improvement will attempt to automatically correct submitted images if they don't meet the [image requirements](https://support.google.com/merchants/answer/6324350), for example, removing overlays. If successful, the image will be replaced and approved. This improvement is only applied to images of disapproved offers. For more information see: [Automatic image improvements](https://support.google.com/merchants/answer/9242973)

| Field | Type | Description |
|---|---|---|
| accountImageImprovementsSettings | `ImageImprovementsAccountLevelSettings` | Optional. Determines how the images should be automatically updated. If this field is not present and provided in the update mask, then the settings will be deleted. If there are no settings for subaccount, they are inherited from aggregator. |
| effectiveAllowAutomaticImageImprovements | boolean | Output only. The effective value of allow_automatic_image_improvements. If account_image_improvements_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only. |

### `AutomaticItemUpdates`

Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown.

| Field | Type | Description |
|---|---|---|
| effectiveAllowConditionUpdates | boolean | Output only. The effective value of allow_condition_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. The default value is true if no settings are present. Read-only. |
| effectiveAllowPriceUpdates | boolean | Output only. The effective value of allow_price_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. The default value is true if no settings are present. Read-only. |
| effectiveAllowStrictAvailabilityUpdates | boolean | Output only. The effective value of allow_strict_availability_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. The default value is true if no settings are present. Read-only. |
| effectiveAllowAvailabilityUpdates | boolean | Output only. The effective value of allow_availability_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. The default value is true if no settings are present. Read-only. |
| accountItemUpdatesSettings | `ItemUpdatesAccountLevelSettings` | Optional. Determines which attributes of the items should be automatically updated. If this field is not present and provided in the update mask, then the settings will be deleted. If there are no settings for subaccount, they are inherited from aggregator. |

### `AutomaticShippingImprovements`

Not available for [advanced accounts](https://support.google.com/merchants/answer/188487). By turning on [automatic shipping improvements](https://support.google.com/merchants/answer/10027038), you are allowing Google to improve the accuracy of your delivery times shown to shoppers using Google. More accurate delivery times, especially when faster, typically lead to better conversion rates. Google will improve your estimated delivery times based on various factors: * Delivery address of an order * Current handling time and shipping time settings * Estimated weekdays or business days * Parcel tracking data

| Field | Type | Description |
|---|---|---|
| allowShippingImprovements | boolean | Enables automatic shipping improvements. |

### `ImageImprovementsAccountLevelSettings`

Settings for the Automatic Image Improvements.

| Field | Type | Description |
|---|---|---|
| allowAutomaticImageImprovements | boolean | Enables automatic image improvements. |

### `ItemUpdatesAccountLevelSettings`

Settings for the Automatic Item Updates.

| Field | Type | Description |
|---|---|---|
| allowStrictAvailabilityUpdates | boolean | If `allow_availability_updates` is enabled, items are automatically updated in all your Shopping target countries. By default, availability updates will only be applied to items that are 'out of stock' on your website but 'in stock' on Shopping. Set this to true to also update items that are 'in stock' on your website, but 'out of stock' on Google Shopping. In order for this field to have an effect, you must also set `allow_availability_updates`. |
| allowConditionUpdates | boolean | If condition updates are enabled, Google always updates item condition with the condition detected from the details of your product. |
| allowAvailabilityUpdates | boolean | If availability updates are enabled, any previous availability values get overwritten if Google finds an out-of-stock annotation on the offer's page. If additionally `allow_strict_availability_updates` field is set to true, values get overwritten if Google finds an in-stock annotation on the offer’s page. |
| allowPriceUpdates | boolean | If price updates are enabled, Google always updates the active price with the crawled information. |

