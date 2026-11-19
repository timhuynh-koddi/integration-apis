# Merchant API accounts_v1: accounts.emailPreferences

> Source: Merchant API `accounts_v1` REST Discovery document (https://merchantapi.googleapis.com/$discovery/rest?version=accounts_v1); overview https://developers.google.com/merchant/api/overview. Fetched 2026-11-19.

---

## accounts.emailPreferences.updateEmailPreferences

`PATCH https://merchantapi.googleapis.com/accounts/v1/{+name}`

Updates the email preferences for a Merchant Center account user. Advanced account users should specify the advanced account rather than a sub-account of the advanced account. Preferences which are not explicitly selected in the update mask will not be updated. It is invalid for updates to specify an UNCONFIRMED opt-in status value. Use the name=accounts/*/users/me/emailPreferences alias to update preferences for the authenticated user.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Identifier. The name of the EmailPreferences. The endpoint is only supported for the authenticated user. |
| updateMask | query | string (google-fieldmask) |  | Required. List of fields being updated. The following fields are supported (in both `snake_case` and `lowerCamelCase`): - `news_and_tips` |

**Request body**: `EmailPreferences`

**Response**: `EmailPreferences`

---

## accounts.emailPreferences.getEmailPreferences

`GET https://merchantapi.googleapis.com/accounts/v1/{+name}`

Returns the email preferences for a Merchant Center account user. This service only permits retrieving and updating email preferences for the authenticated user. Use the name=accounts/*/users/me/emailPreferences alias to get preferences for the authenticated user.

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| name | path | string | yes | Required. The name of the `EmailPreferences` resource. Format: `accounts/{account}/users/{email}/emailPreferences` |

**Response**: `EmailPreferences`

---

## Schemas

### `EmailPreferences`

The categories of notifications the user opted into / opted out of. The email preferences do not include mandatory announcements as users can't opt out of them. For more information, see [Change your Merchant Center email preferences](https://support.google.com/merchants/answer/9370919) and [Manage Merchant Center email preferences](https://developers.google.com/merchant/api/guides/accounts/email-notifications).

| Field | Type | Description |
|---|---|---|
| newsAndTips | string enum(OPT_IN_STATE_UNSPECIFIED, OPTED_OUT, OPTED_IN, UNCONFIRMED) | Optional. Updates on new features, tips and best practices. Values: OPT_IN_STATE_UNSPECIFIED - Opt-in status is not specified.; OPTED_OUT - User has opted out of receiving this type of email.; OPTED_IN - User has opted in to receiving this type of email.; UNCONFIRMED - User has opted in to receiving this type of email and the confirmation email has been sent, but user has not yet confirmed the opt in (applies only to certain countries). |
| name | string | Identifier. The name of the EmailPreferences. The endpoint is only supported for the authenticated user. |

