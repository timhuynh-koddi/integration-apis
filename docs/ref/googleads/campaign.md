# Campaign

> Source: Google Ads API v26 REST Discovery document (https://googleads.googleapis.com/$discovery/rest?version=v26) and Shopping ads guide (https://developers.google.com/google-ads/api/docs/shopping-ads/overview). Fetched 2026-11-19.

Resource schema: `Campaign`. Read data via `GoogleAdsService.Search`/`SearchStream` (see google_ads_service.md).

---

## customers.campaigns.mutate

`POST https://googleads.googleapis.com/v26/customers/{+customerId}/campaigns:mutate`

Creates, updates, or removes campaigns. Operation statuses are returned. List of thrown errors: AdxError AuthenticationError AuthorizationError BiddingError BiddingStrategyError CampaignBudgetError CampaignError ContextError DatabaseError DateError DateRangeError DistinctError FieldError FieldMaskError HeaderError IdError InternalError ListOperationError MutateError NewResourceCreationError NotAllowlistedError NotEmptyError NullError OperationAccessDeniedError OperatorError QuotaError RangeError RegionCodeError RequestError ResourceCountLimitExceededError SettingError SizeLimitError StringFormatError StringLengthError UrlFieldError

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| customerId | path | string | yes | Required. The ID of the customer whose campaigns are being modified. |

**Request body**: `MutateCampaignsRequest`

**Response**: `MutateCampaignsResponse`

---

## customers.campaigns.enablePMaxBrandGuidelines

`POST https://googleads.googleapis.com/v26/customers/{+customerId}/campaigns:enablePMaxBrandGuidelines`

Enables Brand Guidelines for Performance Max campaigns. List of thrown errors: AuthenticationError AssetError AssetLinkError AuthorizationError BrandGuidelinesMigrationError CampaignError HeaderError InternalError MutateError QuotaError RequestError ResourceCountLimitExceededError

**Parameters**

| Name | In | Type | Required | Description |
|---|---|---|---|---|
| customerId | path | string | yes | Required. The ID of the customer whose campaigns are being enabled. |

**Request body**: `EnablePMaxBrandGuidelinesRequest`

**Response**: `EnablePMaxBrandGuidelinesResponse`

---

## Schemas

### `Campaign`

A campaign.

| Field | Type | Description |
|---|---|---|
| percentCpc | `PercentCpc` | Standard Percent Cpc bidding strategy where bids are a fraction of the advertised price for some good or service. |
| trackingUrlTemplate | string | The URL template for constructing a tracking URL. |
| containsEuPoliticalAdvertising | string enum(UNSPECIFIED, UNKNOWN, CONTAINS_EU_POLITICAL_ADVERTISING, DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING) | The advertiser should self-declare whether this campaign contains political advertising content targeted towards the European Union. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; CONTAINS_EU_POLITICAL_ADVERTISING - The campaign contains political advertising targeted towards the EU. The campaign will be restricted from serving ads in the EU.; DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING - The campaign does not contain political advertising targeted towards the EU. No additional serving restrictions will apply. |
| frequencyCaps | array<`FrequencyCapEntry`> | A list that limits how often each user will see this campaign's ads. |
| appCampaignSetting | `Campaign_AppCampaignSetting` | The setting related to App Campaign. |
| targetImpressionShare | `TargetImpressionShare` | Target Impression Share bidding strategy. An automated bidding strategy that sets bids to achieve a chosen percentage of impressions. |
| geoTargetTypeSetting | `Campaign_GeoTargetTypeSetting` | The setting for ads geotargeting. |
| targetingSetting | `TargetingSetting` | Setting for targeting related features. |
| biddingStrategySystemStatus | string enum(UNSPECIFIED, UNKNOWN, ENABLED, LEARNING_NEW, LEARNING_SETTING_CHANGE, LEARNING_BUDGET_CHANGE, LEARNING_COMPOSITION_CHANGE, LEARNING_CONVERSION_TYPE_CHANGE, LEARNING_CONVERSION_SETTING_CHANGE, LIMITED_BY_CPC_BID_CEILING, LIMITED_BY_CPC_BID_FLOOR, LIMITED_BY_DATA, LIMITED_BY_BUDGET, LIMITED_BY_LOW_PRIORITY_SPEND, LIMITED_BY_LOW_QUALITY, LIMITED_BY_INVENTORY, MISCONFIGURED_ZERO_ELIGIBILITY, MISCONFIGURED_CONVERSION_TYPES, MISCONFIGURED_CONVERSION_SETTINGS, MISCONFIGURED_SHARED_BUDGET, MISCONFIGURED_STRATEGY_TYPE, PAUSED, UNAVAILABLE, MULTIPLE_LEARNING, MULTIPLE_LIMITED, MULTIPLE_MISCONFIGURED, MULTIPLE) | Output only. The system status of the campaign's bidding strategy. Values: UNSPECIFIED - Signals that an unexpected error occurred, for example, no bidding strategy type was found, or no status information was found.; UNKNOWN - Used for return value only. Represents value unknown in this version.; ENABLED - The bid strategy is active, and AdWords cannot find any specific issues with the strategy.; LEARNING_NEW - The bid strategy is learning because it has been recently created or recently reactivated.; LEARNING_SETTING_CHANGE - The bid strategy is learning because of a recent setting change.; LEARNING_BUDGET_CHANGE - The bid strategy is learning because of a recent budget change.; LEARNING_COMPOSITION_CHANGE - The bid strategy is learning because of recent change in number of campaigns, ad groups or keywords attached to it.; LEARNING_CONVERSION_TYPE_CHANGE - The bid strategy depends on conversion reporting and the customer recently modified conversion types that were relevant to the bid strategy.; LEARNING_CONVERSION_SETTING_CHANGE - The bid strategy depends on conversion reporting and the customer recently changed their conversion settings.; LIMITED_BY_CPC_BID_CEILING - The bid strategy is limited by its bid ceiling.; LIMITED_BY_CPC_BID_FLOOR - The bid strategy is limited by its bid floor.; LIMITED_BY_DATA - The bid strategy is limited because there was not enough conversion traffic over the past weeks.; LIMITED_BY_BUDGET - A significant fraction of keywords in this bid strategy are limited by budget.; LIMITED_BY_LOW_PRIORITY_SPEND - The bid strategy cannot reach its target spend because its spend has been de-prioritized.; LIMITED_BY_LOW_QUALITY - A significant fraction of keywords in this bid strategy have a low Quality Score.; LIMITED_BY_INVENTORY - The bid strategy cannot fully spend its budget because of narrow targeting.; MISCONFIGURED_ZERO_ELIGIBILITY - Missing conversion tracking (no pings present) and/or remarketing lists for SSC.; MISCONFIGURED_CONVERSION_TYPES - The bid strategy depends on conversion reporting and the customer is lacking conversion types that might be reported against this strategy.; MISCONFIGURED_CONVERSION_SETTINGS - The bid strategy depends on conversion reporting and the customer's conversion settings are misconfigured.; MISCONFIGURED_SHARED_BUDGET - There are campaigns outside the bid strategy that share budgets with campaigns included in the strategy.; MISCONFIGURED_STRATEGY_TYPE - The campaign has an invalid strategy type and is not serving.; PAUSED - The bid strategy is not active. Either there are no active campaigns, ad groups or keywords attached to the bid strategy. Or there are no active budgets connected to the bid strategy.; UNAVAILABLE - This bid strategy currently does not support status reporting.; MULTIPLE_LEARNING - There were multiple LEARNING_* system statuses for this bid strategy during the time in question.; MULTIPLE_LIMITED - There were multiple LIMITED_* system statuses for this bid strategy during the time in question.; MULTIPLE_MISCONFIGURED - There were multiple MISCONFIGURED_* system statuses for this bid strategy during the time in question.; MULTIPLE - There were multiple system statuses for this bid strategy during the time in question. |
| excludedParentAssetSetTypes | array<string enum(UNSPECIFIED, UNKNOWN, PAGE_FEED, DYNAMIC_EDUCATION, MERCHANT_CENTER_FEED, DYNAMIC_REAL_ESTATE, DYNAMIC_CUSTOM, DYNAMIC_HOTELS_AND_RENTALS, DYNAMIC_FLIGHTS, DYNAMIC_TRAVEL, DYNAMIC_LOCAL, DYNAMIC_JOBS, LOCATION_SYNC, BUSINESS_PROFILE_DYNAMIC_LOCATION_GROUP, CHAIN_DYNAMIC_LOCATION_GROUP, STATIC_LOCATION_GROUP, HOTEL_PROPERTY, TRAVEL_FEED)> | The asset set types that should be excluded from this campaign. Asset set links with these types will not be inherited by this campaign from the upper level. Location group types (GMB_DYNAMIC_LOCATION_GROUP, CHAIN_DYNAMIC_LOCATION_GROUP, and STATIC_LOCATION_GROUP) are child types of LOCATION_SYNC. Therefore, if LOCATION_SYNC is set for this field, all location group asset sets are not allowed to be linked to this campaign, and all Location Extension (LE) and Affiliate Location Extensions (ALE) will not be served under this campaign. Only LOCATION_SYNC is currently supported. |
| optimizationGoalSetting | `Campaign_OptimizationGoalSetting` | Optimization goal setting for this campaign, which includes a set of optimization goal types. |
| manualCpa | `ManualCpa` | Standard Manual CPA bidding strategy. Manual bidding strategy that allows advertiser to set the bid per advertiser-specified action. Supported only for Local Services campaigns. |
| networkSettings | `Campaign_NetworkSettings` | The network settings for the campaign. |
| biddingStrategy | string | The resource name of the portfolio bidding strategy used by the campaign. |
| aiMaxSetting | `Campaign_AiMaxSetting` | Settings for AI Max in Search and Shopping campaigns. |
| finalUrlSuffix | string | Suffix used to append query parameters to landing pages that are served with parallel tracking. |
| listingType | string enum(UNSPECIFIED, UNKNOWN, VEHICLES) | Immutable. Listing type of ads served for this campaign. Field is restricted for usage with Performance Max and Shopping campaigns. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; VEHICLES - This campaign serves vehicle ads. |
| audienceSetting | `Campaign_AudienceSetting` | Immutable. Setting for audience related features. |
| excludedParentAssetFieldTypes | array<string enum(UNSPECIFIED, UNKNOWN, HEADLINE, DESCRIPTION, MANDATORY_AD_TEXT, MARKETING_IMAGE, MEDIA_BUNDLE, YOUTUBE_VIDEO, BOOK_ON_GOOGLE, LEAD_FORM, PROMOTION, CALLOUT, STRUCTURED_SNIPPET, SITELINK, MOBILE_APP, HOTEL_CALLOUT, CALL, PRICE, LONG_HEADLINE, BUSINESS_NAME, SQUARE_MARKETING_IMAGE, PORTRAIT_MARKETING_IMAGE, LOGO, LANDSCAPE_LOGO, VIDEO, CALL_TO_ACTION_SELECTION, AD_IMAGE, BUSINESS_LOGO, HOTEL_PROPERTY, DEMAND_GEN_CAROUSEL_CARD, BUSINESS_MESSAGE, TALL_PORTRAIT_MARKETING_IMAGE, RELATED_YOUTUBE_VIDEOS, LANDING_PAGE_PREVIEW, LONG_DESCRIPTION, CALL_TO_ACTION, CLASSIC_DISPLAY_IMAGE, TEXT_DISCLAIMER)> | The asset field types that should be excluded from this campaign. Asset links with these field types will not be inherited by this campaign from the upper level. |
| travelCampaignSettings | `Campaign_TravelCampaignSettings` | Settings for Travel campaign. |
| primaryStatusReasons | array<string enum(UNSPECIFIED, UNKNOWN, CAMPAIGN_REMOVED, CAMPAIGN_PAUSED, CAMPAIGN_PENDING, CAMPAIGN_ENDED, CAMPAIGN_DRAFT, BIDDING_STRATEGY_MISCONFIGURED, BIDDING_STRATEGY_LIMITED, BIDDING_STRATEGY_LEARNING, BIDDING_STRATEGY_CONSTRAINED, BUDGET_CONSTRAINED, BUDGET_MISCONFIGURED, SEARCH_VOLUME_LIMITED, AD_GROUPS_PAUSED, NO_AD_GROUPS, KEYWORDS_PAUSED, NO_KEYWORDS, AD_GROUP_ADS_PAUSED, NO_AD_GROUP_ADS, HAS_ADS_LIMITED_BY_POLICY, HAS_ADS_DISAPPROVED, MOST_ADS_UNDER_REVIEW, MISSING_LEAD_FORM_EXTENSION, MISSING_CALL_EXTENSION, LEAD_FORM_EXTENSION_UNDER_REVIEW, LEAD_FORM_EXTENSION_DISAPPROVED, CALL_EXTENSION_UNDER_REVIEW, CALL_EXTENSION_DISAPPROVED, NO_MOBILE_APPLICATION_AD_GROUP_CRITERIA, CAMPAIGN_GROUP_PAUSED, CAMPAIGN_GROUP_ALL_GROUP_BUDGETS_ENDED, APP_NOT_RELEASED, APP_PARTIALLY_RELEASED, HAS_ASSET_GROUPS_DISAPPROVED, HAS_ASSET_GROUPS_LIMITED_BY_POLICY, MOST_ASSET_GROUPS_UNDER_REVIEW, NO_ASSET_GROUPS, ASSET_GROUPS_PAUSED, MISSING_LOCATION_TARGETING, CAMPAIGN_NOT_BOOKED, BOOKING_HOLD_EXPIRING, BOOKING_HOLD_EXPIRED, BOOKING_CANCELLED)> | Output only. The primary status reasons of the campaign. Provides insight into why a campaign is not serving or not serving optimally. These reasons are aggregated to determine an overall CampaignPrimaryStatus. |
| endDateTime | string | The last day and time of the campaign in serving customer's timezone in "yyyy-MM-dd HH:mm:ss" format. Set the time component to 23:59:59 for daily granularity, time granularity is only supported for some campaign types. On create, defaults to running indefinitely. To set an existing campaign to run indefinitely, clear this field. |
| broadMatchMigrationDateTime | string | Output only. The timestamp when the Broad Match campaign was migrated to AI Max. The timestamp is in the customer's timezone and in "yyyy-MM-dd HH:mm:ss" format. |
| paymentMode | string enum(UNSPECIFIED, UNKNOWN, CLICKS, CONVERSION_VALUE, CONVERSIONS, GUEST_STAY) | Payment mode for the campaign. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; CLICKS - Pay per interaction.; CONVERSION_VALUE - Pay per conversion value. This mode is only supported by campaigns with AdvertisingChannelType.HOTEL, BiddingStrategyType.COMMISSION, and BudgetType.STANDARD.; CONVERSIONS - Pay per conversion. This mode is only supported by campaigns with AdvertisingChannelType.DISPLAY (excluding AdvertisingChannelSubType.DISPLAY_GMAIL), BiddingStrategyType.TARGET_CPA, and BudgetType.FIXED_CPA. The customer must also be eligible for this mode. See Customer.eligibility_failure_reasons for details.; GUEST_STAY - Pay per guest stay value. This mode is only supported by campaigns with AdvertisingChannelType.HOTEL, BiddingStrategyType.COMMISSION, and BudgetType.STANDARD. |
| hotelSetting | `Campaign_HotelSettingInfo` | The hotel setting for the campaign. |
| targetCpm | `TargetCpm` | A bidding strategy that automatically optimizes cost per thousand impressions. |
| fixedCpm | `FixedCpm` | A manual bidding strategy with a fixed CPM. |
| hotelPropertyAssetSet | string | Immutable. The resource name for a set of hotel properties for Performance Max for travel goals campaigns. |
| targetCpc | `TargetCpc` | An automated bidding strategy that sets bids to help get as many clicks as possible at the target cost-per-click (CPC) you set. |
| assetAutomationSettings | array<`Campaign_AssetAutomationSetting`> | Contains the opt-in/out status of each AssetAutomationType. See documentation of each asset automation type enum for default opt in/out behavior. |
| accessibleBiddingStrategy | string | Output only. Resource name of AccessibleBiddingStrategy, a read-only view of the unrestricted attributes of the attached portfolio bidding strategy identified by 'bidding_strategy'. Empty, if the campaign does not use a portfolio strategy. Unrestricted strategy attributes are available to all customers with whom the strategy is shared and are read from the AccessibleBiddingStrategy resource. In contrast, restricted attributes are only available to the owner customer of the strategy and their managers. Restricted attributes can only be read from the BiddingStrategy resource. |
| advertisingChannelType | string enum(UNSPECIFIED, UNKNOWN, SEARCH, DISPLAY, SHOPPING, HOTEL, VIDEO, MULTI_CHANNEL, LOCAL, SMART, PERFORMANCE_MAX, LOCAL_SERVICES, TRAVEL, DEMAND_GEN) | Immutable. The primary serving target for ads within the campaign. The targeting options can be refined in `network_settings`. This field is required and should not be empty when creating new campaigns. Can be set only when creating campaigns. After the campaign is created, the field can not be changed. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; SEARCH - Search Network. Includes display bundled, and Search+ campaigns.; DISPLAY - Google Display Network only.; SHOPPING - Shopping campaigns serve on the shopping property and on google.com search results.; HOTEL - Hotel Ads campaigns.; VIDEO - Video campaigns.; MULTI_CHANNEL - App Campaigns, and App Campaigns for Engagement, that run across multiple channels.; LOCAL - Local ads campaigns.; SMART - Smart campaigns.; PERFORMANCE_MAX - Performance Max campaigns.; LOCAL_SERVICES - Local services campaigns.; TRAVEL - Travel campaigns.; DEMAND_GEN - Demand Gen campaigns. |
| maximizeConversions | `MaximizeConversions` | Standard Maximize Conversions bidding strategy that automatically maximizes number of conversions while spending your budget. |
| manualCpv | `ManualCpv` | A bidding strategy that pays a configurable amount per video view. |
| biddingStrategyType | string enum(UNSPECIFIED, UNKNOWN, COMMISSION, ENHANCED_CPC, FIXED_CPM, FIXED_SHARE_OF_VOICE, INVALID, MANUAL_CPA, MANUAL_CPC, MANUAL_CPM, MANUAL_CPV, MAXIMIZE_CONVERSIONS, MAXIMIZE_CONVERSION_VALUE, PAGE_ONE_PROMOTED, PERCENT_CPC, TARGET_CPA, TARGET_CPC, TARGET_CPM, TARGET_CPV, TARGET_IMPRESSION_SHARE, TARGET_OUTRANK_SHARE, TARGET_ROAS, TARGET_SPEND) | Output only. The type of bidding strategy. A bidding strategy can be created by setting either the bidding scheme to create a standard bidding strategy or the `bidding_strategy` field to create a portfolio bidding strategy. This field is read-only. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; COMMISSION - Commission is an automatic bidding strategy in which the advertiser pays a certain portion of the conversion value.; ENHANCED_CPC - Enhanced CPC is a bidding strategy that raises bids for clicks that seem more likely to lead to a conversion and lowers them for clicks where they seem less likely.; FIXED_CPM - Fixed CPM is a manual bidding strategy with a fixed CPM.; FIXED_SHARE_OF_VOICE - Fixed share of voice is a manual bidding strategy for YouTube Sponsorships that bills either on CPM or a fixed cost per day.; INVALID - Used for return value only. Indicates that a campaign does not have a bidding strategy. This prevents the campaign from serving. For example, a campaign may be attached to a manager bidding strategy and the serving account is subsequently unlinked from the manager account. In this case the campaign will automatically be detached from the now inaccessible manager bidding strategy and transition to the INVALID bidding strategy type.; MANUAL_CPA - Manual bidding strategy that allows advertiser to set the bid per advertiser-specified action.; MANUAL_CPC - Manual click based bidding where user pays per click.; MANUAL_CPM - Manual impression based bidding where user pays per thousand impressions.; MANUAL_CPV - A bidding strategy that pays a configurable amount per video view.; MAXIMIZE_CONVERSIONS - A bidding strategy that automatically maximizes number of conversions given a daily budget.; MAXIMIZE_CONVERSION_VALUE - An automated bidding strategy that automatically sets bids to maximize revenue while spending your budget.; PAGE_ONE_PROMOTED - Page-One Promoted bidding scheme, which sets max cpc bids to target impressions on page one or page one promoted slots on google.com. This enum value is deprecated.; PERCENT_CPC - Percent Cpc is bidding strategy where bids are a fraction of the advertised price for some good or service.; TARGET_CPA - Target CPA is an automated bid strategy that sets bids to help get as many conversions as possible at the target cost-per-acquisition (CPA) you set.; TARGET_CPC - Target CPC is an automated bid strategy that sets bids to help get as many clicks as possible at the target cost-per-click (CPC) you set.; TARGET_CPM - Target CPM is an automated bid strategy that sets bids to help get as many impressions as possible at the target cost per one thousand impressions (CPM) you set.; TARGET_CPV - Target CPV is an automated bidding strategy that sets bids to optimize performance given the average target cost per view.; TARGET_IMPRESSION_SHARE - An automated bidding strategy that sets bids so that a certain percentage of search ads are shown at the top of the first page (or other targeted location).; TARGET_OUTRANK_SHARE - Target Outrank Share is an automated bidding strategy that sets bids based on the target fraction of auctions where the advertiser should outrank a specific competitor. This enum value is deprecated.; TARGET_ROAS - Target ROAS is an automated bidding strategy that helps you maximize revenue while averaging a specific target Return On Average Spend (ROAS).; TARGET_SPEND - Target Spend is an automated bid strategy that sets your bids to help get as many clicks as possible within your budget. |
| feedTypes | array<string enum(UNSPECIFIED, UNKNOWN, PAGE_FEED, DYNAMIC_EDUCATION, MERCHANT_CENTER_FEED, DYNAMIC_REAL_ESTATE, DYNAMIC_CUSTOM, DYNAMIC_HOTELS_AND_RENTALS, DYNAMIC_FLIGHTS, DYNAMIC_TRAVEL, DYNAMIC_LOCAL, DYNAMIC_JOBS, LOCATION_SYNC, BUSINESS_PROFILE_DYNAMIC_LOCATION_GROUP, CHAIN_DYNAMIC_LOCATION_GROUP, STATIC_LOCATION_GROUP, HOTEL_PROPERTY, TRAVEL_FEED)> | Output only. Types of feeds that are attached directly to this campaign. |
| advertisingChannelSubType | string enum(UNSPECIFIED, UNKNOWN, SEARCH_MOBILE_APP, DISPLAY_MOBILE_APP, SEARCH_EXPRESS, DISPLAY_EXPRESS, SHOPPING_SMART_ADS, DISPLAY_GMAIL_AD, DISPLAY_SMART_CAMPAIGN, VIDEO_ACTION, VIDEO_NON_SKIPPABLE, APP_CAMPAIGN, APP_CAMPAIGN_FOR_ENGAGEMENT, LOCAL_CAMPAIGN, SHOPPING_COMPARISON_LISTING_ADS, SMART_CAMPAIGN, VIDEO_SEQUENCE, APP_CAMPAIGN_FOR_PRE_REGISTRATION, VIDEO_REACH_TARGET_FREQUENCY, TRAVEL_ACTIVITIES, YOUTUBE_AUDIO) | Immutable. Optional refinement to `advertising_channel_type`. Must be a valid sub-type of the parent channel type. Can be set only when creating campaigns. After campaign is created, the field can not be changed. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used as a return value only. Represents value unknown in this version.; SEARCH_MOBILE_APP - Mobile app campaigns for Search.; DISPLAY_MOBILE_APP - Mobile app campaigns for Display.; SEARCH_EXPRESS - AdWords express campaigns for search.; DISPLAY_EXPRESS - AdWords Express campaigns for display.; SHOPPING_SMART_ADS - Smart Shopping campaigns. New Smart Shopping campaigns cannot be created.; DISPLAY_GMAIL_AD - Gmail Ad campaigns.; DISPLAY_SMART_CAMPAIGN - Smart display campaigns. New campaigns of this sub type cannot be created.; VIDEO_ACTION - Video TrueView for Action campaigns.; VIDEO_NON_SKIPPABLE - Video campaigns with non-skippable video ads.; APP_CAMPAIGN - App Campaign that lets you easily promote your Android or iOS app across Google's top properties including Search, Play, YouTube, and the Google Display Network.; APP_CAMPAIGN_FOR_ENGAGEMENT - App Campaign for engagement, focused on driving re-engagement with the app across several of Google's top properties including Search, YouTube, and the Google Display Network.; LOCAL_CAMPAIGN - Campaigns specialized for local advertising.; SHOPPING_COMPARISON_LISTING_ADS - Shopping Comparison Listing campaigns.; SMART_CAMPAIGN - Standard Smart campaigns.; VIDEO_SEQUENCE - Video campaigns with sequence video ads.; APP_CAMPAIGN_FOR_PRE_REGISTRATION - App Campaign for pre registration, specialized for advertising mobile app pre-registration, that targets multiple advertising channels across Google Play, YouTube and Display Network. See https://support.google.com/google-ads/answer/9441344 to learn more.; VIDEO_REACH_TARGET_FREQUENCY - Video reach campaign with Target Frequency bidding strategy.; TRAVEL_ACTIVITIES - Travel Activities campaigns.; YOUTUBE_AUDIO - YouTube Audio campaigns. |
| status | string enum(UNSPECIFIED, UNKNOWN, ENABLED, PAUSED, REMOVED) | The status of the campaign. When a new campaign is added, the status defaults to ENABLED. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; ENABLED - Campaign is active and can show ads.; PAUSED - Campaign has been paused by the user.; REMOVED - Campaign has been removed. |
| brandGuidelines | `Campaign_BrandGuidelines` | These settings control how your brand appears in automatically generated assets and formats within this campaign. Note: These settings can only be used for Performance Max campaigns that have Brand Guidelines enabled. |
| targetCpv | `TargetCpv` | An automated bidding strategy that sets bids to optimize performance given the target CPV you set. |
| pmaxCampaignSettings | `Campaign_PmaxCampaignSettings` | Settings for Performance Max campaign. |
| optimizationScore | number (double) | Output only. Optimization score of the campaign. Optimization score is an estimate of how well a campaign is set to perform. It ranges from 0% (0.0) to 100% (1.0), with 100% indicating that the campaign is performing at full potential. This field is null for unscored campaigns. See "About optimization score" at https://support.google.com/google-ads/answer/9061546. This field is read-only. |
| localCampaignSetting | `Campaign_LocalCampaignSetting` | The setting for local campaign. |
| labels | array<string> | Output only. The resource names of labels attached to this campaign. |
| targetRoas | `TargetRoas` | Standard Target ROAS bidding strategy that automatically maximizes revenue while averaging a specific target return on ad spend (ROAS). |
| localServicesCampaignSettings | `Campaign_LocalServicesCampaignSettings` | The Local Services Campaign related settings. |
| realTimeBiddingSetting | `RealTimeBiddingSetting` | Settings for Real-Time Bidding, a feature only available for campaigns targeting the Ad Exchange network. |
| startDateTime | string | The date and time when campaign started in serving. The timestamp is in the customer's time zone and in "yyyy-MM-dd HH:mm:ss" format. Set the time component to 00:00:00 for daily granularity, time granularity is only supported for some campaign types. |
| missingEuPoliticalAdvertisingDeclaration | boolean | Output only. Indicates whether this campaign is missing a declaration about whether it contains political advertising targeted towards the EU and is ineligible for any exemptions. If this field is true, use the contains_eu_political_advertising field to add the required declaration. This field is read-only. |
| targetCpa | `TargetCpa` | Standard Target CPA bidding strategy that automatically sets bids to help get as many conversions as possible at the target cost-per-acquisition (CPA) you set. |
| performanceMaxUpgrade | `Campaign_PerformanceMaxUpgrade` | Output only. Information about campaigns being upgraded to Performance Max. |
| campaignGroup | string | The resource name of the campaign group that this campaign belongs to. |
| vanityPharma | `Campaign_VanityPharma` | Describes how unbranded pharma ads will be displayed. |
| urlCustomParameters | array<`CustomParameter`> | The list of mappings used to substitute custom parameter tags in a `tracking_url_template`, `final_urls`, or `mobile_final_urls`. |
| manualCpc | `ManualCpc` | Standard Manual CPC bidding strategy. Manual click-based bidding where user pays per click. |
| videoCampaignSettings | `Campaign_VideoCampaignSettings` | Settings for Video campaign. |
| experimentType | string enum(UNSPECIFIED, UNKNOWN, BASE, DRAFT, EXPERIMENT) | Output only. The type of campaign: normal, draft, or experiment. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; BASE - This is a regular campaign.; DRAFT - This is a draft version of a campaign. It has some modifications from a base campaign, but it does not serve or accrue metrics.; EXPERIMENT - This is an experiment version of a campaign. It has some modifications from a base campaign, and a percentage of traffic is being diverted from the BASE campaign to this experiment campaign. |
| selectiveOptimization | `Campaign_SelectiveOptimization` | Selective optimization setting for this campaign, which includes a set of conversion actions to optimize this campaign towards. This feature only applies to app campaigns that use MULTI_CHANNEL as AdvertisingChannelType and APP_CAMPAIGN or APP_CAMPAIGN_FOR_ENGAGEMENT as AdvertisingChannelSubType. |
| manualCpm | `ManualCpm` | Standard Manual CPM bidding strategy. Manual impression-based bidding where user pays per thousand impressions. |
| resourceName | string | Immutable. The resource name of the campaign. Campaign resource names have the form: `customers/{customer_id}/campaigns/{campaign_id}` |
| campaignBudget | string | The resource name of the campaign budget of the campaign. |
| adServingOptimizationStatus | string enum(UNSPECIFIED, UNKNOWN, OPTIMIZE, CONVERSION_OPTIMIZE, ROTATE, ROTATE_INDEFINITELY, UNAVAILABLE) | The ad serving optimization status of the campaign. Values: UNSPECIFIED - No value has been specified.; UNKNOWN - The received value is not known in this version. This is a response-only value.; OPTIMIZE - Ad serving is optimized based on clickthrough rate (CTR) for the campaign.; CONVERSION_OPTIMIZE - Ad serving is optimized based on clickthrough rate (CTR) * Conversion for the campaign. If the campaign is not in the conversion optimizer bidding strategy, it will default to OPTIMIZED.; ROTATE - Ads are rotated evenly for 90 days, then optimized for clicks.; ROTATE_INDEFINITELY - Show lower performing ads more evenly with higher performing ads, and do not optimize.; UNAVAILABLE - Ad serving optimization status is not available. |
| maximizeConversionValue | `MaximizeConversionValue` | Standard Maximize Conversion Value bidding strategy that automatically sets bids to maximize revenue while spending your budget. |
| textGuidelines | `Campaign_TextGuidelines` | Settings to control automatically generated text assets. Only available in Performance Max and Search campaigns (Brand Guidelines does not need to be enabled). |
| thirdPartyIntegrationPartners | `CampaignThirdPartyIntegrationPartners` | Third-Party integration partners. |
| name | string | The name of the campaign. This field is required and should not be empty when creating new campaigns. It must not contain any null (code point 0x0), NL line feed (code point 0xA) or carriage return (code point 0xD) characters. |
| liftMeasurementConfig | string | Output only. The resource name of the lift measurement configuration for this campaign. This is the most recently linked configuration, which can be active or inactive. If the campaign has run multiple lift experiments, this corresponds to the most recent one. |
| baseCampaign | string | Output only. The resource name of the base campaign of a draft or experiment campaign. For base campaigns, this is equal to `resource_name`. This field is read-only. |
| commission | `Commission` | Commission is an automatic bidding strategy in which the advertiser pays a certain portion of the conversion value. |
| trackingSetting | `Campaign_TrackingSetting` | Output only. Campaign-level settings for tracking information. |
| demandGenCampaignSettings | `Campaign_DemandGenCampaignSettings` | Settings for Demand Gen campaign. |
| primaryStatus | string enum(UNSPECIFIED, UNKNOWN, ELIGIBLE, PAUSED, REMOVED, ENDED, PENDING, MISCONFIGURED, LIMITED, LEARNING, NOT_ELIGIBLE) | Output only. The primary status of the campaign. Provides insight into why a campaign is not serving or not serving optimally. Modification to the campaign and its related entities might take a while to be reflected in this status. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; ELIGIBLE - The campaign is eligible to serve.; PAUSED - The user-specified campaign status is paused.; REMOVED - The user-specified campaign status is removed.; ENDED - The user-specified time for this campaign to end has passed.; PENDING - The campaign may serve in the future.; MISCONFIGURED - The campaign or its associated entities have incorrect user-specified settings.; LIMITED - The campaign or its associated entities are limited by user-specified settings.; LEARNING - The automated bidding system is adjusting to user-specified changes to the campaign or associated entities.; NOT_ELIGIBLE - The campaign is not eligible to serve. |
| dynamicSearchAdsSetting | `Campaign_DynamicSearchAdsSetting` | The setting for controlling Dynamic Search Ads (DSA). |
| servingStatus | string enum(UNSPECIFIED, UNKNOWN, SERVING, NONE, ENDED, PENDING, SUSPENDED) | Output only. The ad serving status of the campaign. Values: UNSPECIFIED - No value has been specified.; UNKNOWN - The received value is not known in this version. This is a response-only value.; SERVING - Serving.; NONE - None.; ENDED - Ended.; PENDING - Pending.; SUSPENDED - Suspended. |
| brandGuidelinesEnabled | boolean | Immutable. Whether Brand Guidelines are enabled for this Campaign. Only applicable to Performance Max campaigns. If enabled, business name and logo assets must be linked as CampaignAssets instead of AssetGroupAssets. Writable only at campaign creation. Set to true to enable Brand Guidelines when creating a new Performance Max campaign. Immutable after creation. This field cannot be modified using standard update operations after the campaign has been created. For existing campaigns: To enable Brand Guidelines on a campaign after it has been created, use the CampaignService.EnablePMaxBrandGuidelines method, which is a separate operation. It is not possible to disable Brand Guidelines for an existing campaign. Incompatible with Travel Goals: This feature is not supported for Performance Max campaigns with Travel Goals. Attempting to set this field to true for a Travel Goals campaign will result in an error. |
| targetSpend | `TargetSpend` | Standard Target Spend bidding strategy that automatically sets your bids to help get as many clicks as possible within your budget. |
| shoppingSetting | `Campaign_ShoppingSetting` | The setting for controlling Shopping campaigns. |
| viewThroughConversionOptimizationEnabled | boolean | Whether VTC (View-through Conversion) optimization is enabled for this campaign. Only allowed for certain Demand Gen and App Campaigns. |
| id | string (int64) | Output only. The ID of the campaign. |
| acaMigrationDateTime | string | Output only. The timestamp when the ACA campaign was migrated to AI Max. The timestamp is in the customer's timezone and in "yyyy-MM-dd HH:mm:ss" format. |
| keywordMatchType | string enum(UNSPECIFIED, UNKNOWN, BROAD) | Keyword match type of Campaign. Set to BROAD to set broad matching for all keywords in a campaign. Values: UNSPECIFIED - No value has been specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; BROAD - Campaign level broad match. |

### `MutateCampaignsRequest`

Request message for CampaignService.MutateCampaigns.

| Field | Type | Description |
|---|---|---|
| operations | array<`CampaignOperation`> | Required. The list of operations to perform on individual campaigns. |
| partialFailure | boolean | If true, successful operations will be carried out and invalid operations will return errors. If false, all operations will be carried out in one transaction if and only if they are all valid. Default is false. |
| responseContentType | string enum(UNSPECIFIED, RESOURCE_NAME_ONLY, MUTABLE_RESOURCE) | The response content type setting. Determines whether the mutable resource or just the resource name should be returned post mutation. Values: UNSPECIFIED - Not specified. Will return the resource name only in the response.; RESOURCE_NAME_ONLY - The mutate response will be the resource name.; MUTABLE_RESOURCE - The mutate response will contain the resource name and the resource with mutable fields if possible. Otherwise, only the resource name will be returned. |
| validateOnly | boolean | If true, the request is validated but not executed. Only errors are returned, not results. |

### `MutateCampaignsResponse`

Response message for campaign mutate.

| Field | Type | Description |
|---|---|---|
| results | array<`MutateCampaignResult`> | All results for the mutate. |
| partialFailureError | `GoogleRpc__Status` | Errors that pertain to operation failures in the partial failure mode. Returned only when partial_failure = true and all errors occur inside the operations. If any errors occur outside the operations (for example, auth errors), we return an RPC level error. |

### `EnablePMaxBrandGuidelinesRequest`

Request to enable Brand Guidelines for a Performance Max campaign.

| Field | Type | Description |
|---|---|---|
| operations | array<`EnableOperation`> | Required. The list of individual campaign operations. A maximum of 10 enable operations can be executed in a request. |

### `EnablePMaxBrandGuidelinesResponse`

Brand Guidelines campaign enablement response.

| Field | Type | Description |
|---|---|---|
| results | array<`EnablementResult`> | Campaign enablement results per campaign. |

### `CampaignThirdPartyIntegrationPartners`

Container for Campaign level third party integration partners.

| Field | Type | Description |
|---|---|---|
| reachIntegrationPartners | array<`CampaignThirdPartyReachIntegrationPartner`> | Third party integration partners for reach verification for this Campaign. |
| viewabilityIntegrationPartners | array<`CampaignThirdPartyViewabilityIntegrationPartner`> | Third party integration partners for YouTube viewability verification for this Campaign. |
| brandSafetyIntegrationPartners | array<`CampaignThirdPartyBrandSafetyIntegrationPartner`> | Third party integration partners for brand safety verification for this Campaign. |
| brandLiftIntegrationPartners | array<`CampaignThirdPartyBrandLiftIntegrationPartner`> | Third party integration partners for Brand Lift verification for this Campaign. |
| conversionAttributionIntegrationPartners | array<`CampaignThirdPartyConversionAttributionIntegrationPartner`> | Third party integration partners for YouTube conversion attribution verification for this Campaign. |

### `Commission`

Commission is an automatic bidding strategy in which the advertiser pays a certain portion of the conversion value.

| Field | Type | Description |
|---|---|---|
| commissionRateMicros | string (int64) | Commission rate defines the portion of the conversion value that the advertiser will be billed. A commission rate of x should be passed into this field as (x * 1,000,000). For example, 106,000 represents a commission rate of 0.106 (10.6%). |

### `CustomParameter`

A mapping that can be used by custom parameter tags in a `tracking_url_template`, `final_urls`, or `mobile_final_urls`.

| Field | Type | Description |
|---|---|---|
| value | string | The value to be substituted. |
| key | string | The key matching the parameter tag name. |

### `FixedCpm`

Fixed CPM (cost per thousand impression) bidding strategy. A manual bidding strategy with a fixed CPM.

| Field | Type | Description |
|---|---|---|
| targetFrequencyInfo | `FixedCpmTargetFrequencyGoalInfo` | Target frequency bidding goal details. |
| goal | string enum(UNSPECIFIED, UNKNOWN, REACH, TARGET_FREQUENCY) | Fixed CPM bidding goal. Determines the exact bidding optimization parameters. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; REACH - Maximize reach, that is the number of users who saw the ads in this campaign.; TARGET_FREQUENCY - Target Frequency CPM bidder. Optimize bidding to reach a single user with the requested frequency. |

### `FrequencyCapEntry`

A rule specifying the maximum number of times an ad (or some set of ads) can be shown to a user over a particular time period.

| Field | Type | Description |
|---|---|---|
| key | `FrequencyCapKey` | The key of a particular frequency cap. There can be no more than one frequency cap with the same key. |
| cap | integer (int32) | Maximum number of events allowed during the time range by this cap. |

### `ManualCpa`

Manual bidding strategy that allows advertiser to set the bid per advertiser-specified action.

Type: object

### `ManualCpc`

Manual click-based bidding where user pays per click.

| Field | Type | Description |
|---|---|---|
| enhancedCpcEnabled | boolean | Whether bids are to be enhanced based on conversion optimizer data. |

### `ManualCpm`

Manual impression-based bidding where user pays per thousand impressions.

Type: object

### `ManualCpv`

View based bidding where user pays per video view.

Type: object

### `MaximizeConversionValue`

An automated bidding strategy to help get the most conversion value for your campaigns while spending your budget.

| Field | Type | Description |
|---|---|---|
| targetRoas | number (double) | The target return on ad spend (ROAS) option. If set, the bid strategy will maximize revenue while averaging the target return on ad spend. If the target ROAS is high, the bid strategy may not be able to spend the full budget. If the target ROAS is not set, the bid strategy will aim to achieve the highest possible ROAS for the budget. |
| cpcBidFloorMicros | string (int64) | Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only. Note that for Google Ads Search campaigns, bid limits are not supported and are disregarded by the bidding system. |
| cpcBidCeilingMicros | string (int64) | Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only. Note that for Google Ads Search campaigns, bid limits are not supported and are disregarded by the bidding system. |
| targetRoasTolerancePercentMillis | string (int64) | The percent of ROAS(return on advertising spend) degradation tolerance allowed to increase traffic diversity and conversion volume, specified in millis (for example, 10,000 = 10%). A value of 10,000 means that the advertiser can expect ROAS degradation of up to 10% of the specified target ROAS. |

### `MaximizeConversions`

An automated bidding strategy to help get the most conversions for your campaigns while spending your budget.

| Field | Type | Description |
|---|---|---|
| cpcBidFloorMicros | string (int64) | Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only. Note that for Google Ads Search campaigns, bid limits are not supported and are disregarded by the bidding system. |
| targetCpaMicros | string (int64) | The target cost-per-action (CPA) option. This is the average amount that you would like to spend per conversion action specified in micro units of the bidding strategy's currency. If set, the bid strategy will get as many conversions as possible at or below the target cost-per-action. If the target CPA is not set, the bid strategy will aim to achieve the lowest possible CPA given the budget. |
| cpcBidCeilingMicros | string (int64) | Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. Mutable for portfolio bidding strategies only. Note that for Google Ads Search campaigns, bid limits are not supported and are disregarded by the bidding system. |

### `PercentCpc`

A bidding strategy where bids are a fraction of the advertised price for some good or service.

| Field | Type | Description |
|---|---|---|
| enhancedCpcEnabled | boolean | Adjusts the bid for each auction upward or downward, depending on the likelihood of a conversion. Individual bids may exceed cpc_bid_ceiling_micros, but the average bid amount for a campaign should not. |
| cpcBidCeilingMicros | string (int64) | Maximum bid limit that can be set by the bid strategy. This is an optional field entered by the advertiser and specified in local micros. Note: A zero value is interpreted in the same way as having bid_ceiling undefined. |

### `RealTimeBiddingSetting`

Settings for Real-Time Bidding, a feature only available for campaigns targeting the Ad Exchange network.

| Field | Type | Description |
|---|---|---|
| optIn | boolean | Whether the campaign is opted in to real-time bidding. |

### `TargetCpa`

An automated bid strategy that sets bids to help get as many conversions as possible at the target cost-per-acquisition (CPA) you set.

| Field | Type | Description |
|---|---|---|
| cpcBidFloorMicros | string (int64) | Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies. |
| targetCpaMicros | string (int64) | Average CPA target. This target should be greater than or equal to minimum billable unit based on the currency for the account. |
| cpcBidCeilingMicros | string (int64) | Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies. |

### `TargetCpc`

An automated bidding strategy that sets bids to help get as many clicks as possible at the target cost-per-click (CPC) you set.

| Field | Type | Description |
|---|---|---|
| targetCpcMicros | string (int64) | Average CPC target. This target should be greater than or equal to minimum billable unit based on the currency for the account. |

### `TargetCpm`

Target CPM (cost per thousand impressions) is an automated bidding strategy that sets bids to optimize performance given the target CPM you set.

| Field | Type | Description |
|---|---|---|
| targetFrequencyGoal | `TargetCpmTargetFrequencyGoal` | Target Frequency bidding goal details. |

### `TargetCpv`

Target CPV (cost per view) bidding strategy. An automated bidding strategy that sets bids to optimize performance given the target CPV you set.

Type: object

### `TargetImpressionShare`

An automated bidding strategy that sets bids so that a certain percentage of search ads are shown at the top of the first page (or other targeted location).

| Field | Type | Description |
|---|---|---|
| cpcBidCeilingMicros | string (int64) | The highest CPC bid the automated bidding system is permitted to specify. This is a required field entered by the advertiser that sets the ceiling and specified in local micros. |
| locationFractionMicros | string (int64) | The chosen fraction of ads to be shown in the targeted location in micros. For example, 1% equals 10,000. |
| location | string enum(UNSPECIFIED, UNKNOWN, ANYWHERE_ON_PAGE, TOP_OF_PAGE, ABSOLUTE_TOP_OF_PAGE) | The targeted location on the search results page. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; ANYWHERE_ON_PAGE - Any location on the web page.; TOP_OF_PAGE - Top box of ads.; ABSOLUTE_TOP_OF_PAGE - Top slot in the top box of ads. |

### `TargetRoas`

An automated bidding strategy that helps you maximize revenue while averaging a specific target return on ad spend (ROAS).

| Field | Type | Description |
|---|---|---|
| targetRoas | number (double) | Required. The chosen revenue (based on conversion data) per unit of spend. Value must be between 0.01 and 1000.0, inclusive. |
| cpcBidFloorMicros | string (int64) | Minimum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies. |
| cpcBidCeilingMicros | string (int64) | Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. This should only be set for portfolio bid strategies. |
| targetRoasTolerancePercentMillis | string (int64) | The percent of ROAS(return on advertising spend) degradation tolerance allowed to increase traffic diversity and conversion volume, specified in millis (for example, 10,000 = 10%). A value of 10,000 means that the advertiser can expect ROAS degradation of up to 10% of the specified target ROAS. This field is only mutable for portfolio bidding strategies. |

### `TargetSpend`

An automated bid strategy that sets your bids to help get as many clicks as possible within your budget.

| Field | Type | Description |
|---|---|---|
| cpcBidCeilingMicros | string (int64) | Maximum bid limit that can be set by the bid strategy. The limit applies to all keywords managed by the strategy. |
| targetSpendMicros | string (int64) | Deprecated: The spend target under which to maximize clicks. A TargetSpend bidder will attempt to spend the smaller of this value or the natural throttling spend amount. If not specified, the budget is used as the spend target. This field is deprecated and should no longer be used. See https://ads-developers.googleblog.com/2020/05/reminder-about-sunset-creation-of.html for details. |

### `TargetingSetting`

Settings for the targeting-related features, at the campaign and ad group levels. For more details about the targeting setting, visit https://support.google.com/google-ads/answer/7365594

| Field | Type | Description |
|---|---|---|
| targetRestrictions | array<`TargetRestriction`> | The per-targeting-dimension setting to restrict the reach of your campaign or ad group. |
| targetRestrictionOperations | array<`TargetRestrictionOperation`> | The list of operations changing the target restrictions. Adding a target restriction with a targeting dimension that already exists causes the existing target restriction to be replaced with the new value. |

### `Campaign_AiMaxSetting`

Settings for AI Max in Search and Shopping campaigns.

| Field | Type | Description |
|---|---|---|
| enableAiMax | boolean | Controls whether or not AI Max features are served for this campaign. Individual AI Max features are enabled or disabled by their respective settings. But if enable_ai_max is set to false or cleared, then no AI Max features will serve for this campaign, regardless of the other settings. Supported in Search and Shopping campaigns. For Search campaigns, Search Term Matching is enabled by default when AI Max is enabled, and can be disabled at the ad group level. For Shopping campaigns, Text customization is always enabled when AI Max is enabled. |
| bundlingRequired | string enum(UNSPECIFIED, UNKNOWN, NOT_REQUIRED, REQUIRED) | Output only. Search campaigns only. Indicates whether a campaign has adopted AI Max before, and is required to have AI Max enabled to adopt campaign-level text asset automation and brand list targeting in all API versions. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; NOT_REQUIRED - Search campaign is using text asset automation or brand list targeting, and AI Max is not required to be enabled to serve these features.; REQUIRED - AI Max is required to be enabled for this search campaign to serve existing text asset automation and brand list targeting, or to add new text asset automation and brand list targeting settings. |

### `Campaign_AppCampaignSetting`

Campaign-level settings for App Campaigns.

| Field | Type | Description |
|---|---|---|
| biddingStrategyGoalType | string enum(UNSPECIFIED, UNKNOWN, OPTIMIZE_INSTALLS_TARGET_INSTALL_COST, OPTIMIZE_IN_APP_CONVERSIONS_TARGET_INSTALL_COST, OPTIMIZE_IN_APP_CONVERSIONS_TARGET_CONVERSION_COST, OPTIMIZE_RETURN_ON_ADVERTISING_SPEND, OPTIMIZE_PRE_REGISTRATION_CONVERSION_VOLUME, OPTIMIZE_INSTALLS_WITHOUT_TARGET_INSTALL_COST, OPTIMIZE_IN_APP_CONVERSIONS_WITHOUT_TARGET_CPA, OPTIMIZE_TOTAL_VALUE_WITHOUT_TARGET_ROAS) | Represents the goal which the bidding strategy of this app campaign should optimize towards. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; OPTIMIZE_INSTALLS_TARGET_INSTALL_COST - Aim to maximize the number of app installs. The cpa bid is the target cost per install.; OPTIMIZE_IN_APP_CONVERSIONS_TARGET_INSTALL_COST - Aim to maximize the long term number of selected in-app conversions from app installs. The cpa bid is the target cost per install.; OPTIMIZE_IN_APP_CONVERSIONS_TARGET_CONVERSION_COST - Aim to maximize the long term number of selected in-app conversions from app installs. The cpa bid is the target cost per in-app conversion. Note that the actual cpa may seem higher than the target cpa at first, since the long term conversions haven't happened yet.; OPTIMIZE_RETURN_ON_ADVERTISING_SPEND - Aim to maximize all conversions' value, for example, install + selected in-app conversions while achieving or exceeding target return on advertising spend.; OPTIMIZE_PRE_REGISTRATION_CONVERSION_VOLUME - Aim to maximize the pre-registration of the app.; OPTIMIZE_INSTALLS_WITHOUT_TARGET_INSTALL_COST - Aim to maximize installation of the app without target cost-per-install.; OPTIMIZE_IN_APP_CONVERSIONS_WITHOUT_TARGET_CPA - Aim to maximize the selected in-app conversion's volume while spending the full budget. No advertiser-specific target CPA.; OPTIMIZE_TOTAL_VALUE_WITHOUT_TARGET_ROAS - Aim to maximize total conversion value, such as install and selected in-app conversions, while spending the full budget. No advertiser-specified target ROAS. |
| appId | string | Immutable. A string that uniquely identifies a mobile application. |
| appStore | string enum(UNSPECIFIED, UNKNOWN, APPLE_APP_STORE, GOOGLE_APP_STORE) | Immutable. The application store that distributes this specific app. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; APPLE_APP_STORE - Apple app store.; GOOGLE_APP_STORE - Google play. |

### `Campaign_AssetAutomationSetting`

Asset automation setting contains pair of AssetAutomationType and the asset automation opt-in/out status

| Field | Type | Description |
|---|---|---|
| automatedVideoCrawlSetting | `CampaignAssetAutomationSetting_AutomatedVideoCrawlSetting` | Settings for automated video crawling. |
| assetAutomationType | string enum(UNSPECIFIED, UNKNOWN, TEXT_ASSET_AUTOMATION, GENERATE_VERTICAL_YOUTUBE_VIDEOS, GENERATE_SHORTER_YOUTUBE_VIDEOS, GENERATE_LANDING_PAGE_PREVIEW, GENERATE_LANDING_PAGE_TEXT, GENERATE_ENHANCED_YOUTUBE_VIDEOS, GENERATE_IMAGE_ENHANCEMENT, GENERATE_IMAGE_EXTRACTION, GENERATE_DESIGN_VERSIONS_FOR_IMAGES, FINAL_URL_EXPANSION_TEXT_ASSET_AUTOMATION, GENERATE_VIDEOS_FROM_OTHER_ASSETS, GENERATE_ANIMATED_IMAGES_FROM_OTHER_ASSETS, AUTOMATED_VIDEO_CRAWL, OVERLAY_TEXT_ON_VIDEOS) | The asset automation type advertiser would like to opt-in/out. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used as a return value only. Represents value unknown in this version.; TEXT_ASSET_AUTOMATION - Text asset automation (text customization) includes headlines and descriptions, allowing Google to create customized text assets using your existing ads, landing page copy, and generative AI across your campaign's ads. By default, advertisers are opted-in for Performance Max and opted-out for Search. Contrast this with `FINAL_URL_EXPANSION_TEXT_ASSET_AUTOMATION`, which dynamically generates text assets to match the content of dynamically selected landing pages when final URL expansion is active.; GENERATE_VERTICAL_YOUTUBE_VIDEOS - Converts horizontal video assets to vertical orientation using content-aware technology. By default, advertisers are opted in for DemandGenVideoResponsiveAdInfo.; GENERATE_SHORTER_YOUTUBE_VIDEOS - Shortens video assets to better capture user attention using content-aware technology. By default, advertisers are opted in for DemandGenVideoResponsiveAdInfo.; GENERATE_LANDING_PAGE_PREVIEW - Generates a preview of the landing page shown in the engagement panel. By using this feature, you confirm that you own all legal rights to the images on the landing page used by this account (or you have permission to share the images with Google). You hereby instruct Google to publish these images on your behalf for advertising or other commercial purposes.; GENERATE_LANDING_PAGE_TEXT - Generates text information from the landing page to be shown in the engagement panel. Opted in by default for DemandGenVideoResponsiveAdInfo.; GENERATE_ENHANCED_YOUTUBE_VIDEOS - Generates video enhancements (vertical and shorter videos) for PMax campaigns. Opted in by default.; GENERATE_IMAGE_ENHANCEMENT - Generates image enhancements (AutoCrop and AutoEnhance). Opted in by default for pmax.; GENERATE_IMAGE_EXTRACTION - Generates image extraction. It defaults to account level Dynamic Image Extension control value.; GENERATE_DESIGN_VERSIONS_FOR_IMAGES - Adds design elements and embeds text assets into image assets to create images with different aspect ratios. By default, advertisers are opted in for DemandGenMultiAssetAd.; FINAL_URL_EXPANSION_TEXT_ASSET_AUTOMATION - Controls automation for text assets related to Final URL expansion. This includes automatically creating dynamic landing pages from the final URL and generating text assets from the content of those landing pages. This setting is turned OFF by default for Search campaigns, but it is turned ON by default for Performance Max campaigns. Enabling final URL expansion also enables text asset automation. There is no way to opt out of text asset automation and still use final URL expansion. Contrast this with standard `TEXT_ASSET_AUTOMATION` (text customization), which customizes copy across all ads in the campaign even when final URL expansion does not occur.; GENERATE_VIDEOS_FROM_OTHER_ASSETS - Generates videos using other Assets as input, such as images and text. By default, advertisers are opted in for DemandGenMultiAssetAd.; GENERATE_ANIMATED_IMAGES_FROM_OTHER_ASSETS - Generates animated images using other Assets as input, such as images and text. By default, advertisers are opted in for DemandGenMultiAssetAd.; AUTOMATED_VIDEO_CRAWL - Automated video crawl.; OVERLAY_TEXT_ON_VIDEOS - Overlays text taken from associated text Assets (such as headlines) on top of video Assets. By default, advertisers are opted in for DemandGenVideoResponsiveAd. |
| assetAutomationStatus | string enum(UNSPECIFIED, UNKNOWN, OPTED_IN, OPTED_OUT) | The opt-in/out status of asset automation type. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used as a return value only. Represents value unknown in this version.; OPTED_IN - Opted-in will enable generating and serving an asset automation type.; OPTED_OUT - Opted-out will stop generating and serving an asset automation type. |

### `Campaign_AudienceSetting`

Settings for the audience targeting.

| Field | Type | Description |
|---|---|---|
| useAudienceGrouped | boolean | Immutable. If true, this campaign uses an Audience resource for audience targeting. If false, this campaign may use audience segment criteria instead. |

### `Campaign_BrandGuidelines`

Settings that control the visual appearance of your brand in a campaign's automatically generated assets and formats. Only applicable to Performance Max campaigns.

| Field | Type | Description |
|---|---|---|
| accentColor | string | The accent brand color, entered as a hex code (e.g., #00ff00). You must provide the accent_color if you provide a main_color. |
| mainColor | string | The main brand color, entered as a hex code (e.g., #00ff00). You must provide the main_color if you provide an accent_color. |
| predefinedFontFamily | string | The brand's font family. Must be one of the following Google Fonts (case sensitive): Open Sans, Roboto, Montserrat, Poppins, Lato, Oswald, Playfair Display, Roboto Slab. |

### `Campaign_DemandGenCampaignSettings`

Settings for Demand Gen campaign.

| Field | Type | Description |
|---|---|---|
| upgradedTargeting | boolean | Immutable. Specifies whether this campaign uses upgraded targeting options. When this field is set to `true`, you can use location and language targeting at the ad group level as opposed to the standard campaign-level targeting. This field defaults to `true`, and can only be set when creating a campaign. |

### `Campaign_DynamicSearchAdsSetting`

The setting for controlling Dynamic Search Ads (DSA).

| Field | Type | Description |
|---|---|---|
| useSuppliedUrlsOnly | boolean | Whether the campaign uses advertiser supplied URLs exclusively. |
| domainName | string | Required. The Internet domain name that this setting represents, for example, "google.com" or "www.google.com". |
| languageCode | string | Required. The language code specifying the language of the domain, for example, "en". |

### `Campaign_GeoTargetTypeSetting`

Represents a collection of settings related to ads geotargeting.

| Field | Type | Description |
|---|---|---|
| positiveGeoTargetType | string enum(UNSPECIFIED, UNKNOWN, PRESENCE_OR_INTEREST, SEARCH_INTEREST, PRESENCE) | The setting used for positive geotargeting in this particular campaign. Values: UNSPECIFIED - Not specified.; UNKNOWN - The value is unknown in this version.; PRESENCE_OR_INTEREST - Specifies that an ad is triggered if the user is in, or shows interest in, advertiser's targeted locations.; SEARCH_INTEREST - Specifies that an ad is triggered if the user searches for advertiser's targeted locations. This can only be used with Search and standard Shopping campaigns.; PRESENCE - Specifies that an ad is triggered if the user is in or regularly in advertiser's targeted locations. |
| negativeGeoTargetType | string enum(UNSPECIFIED, UNKNOWN, PRESENCE_OR_INTEREST, PRESENCE) | The setting used for negative geotargeting in this particular campaign. Values: UNSPECIFIED - Not specified.; UNKNOWN - The value is unknown in this version.; PRESENCE_OR_INTEREST - Specifies that a user is excluded from seeing the ad if they are in, or show interest in, advertiser's excluded locations.; PRESENCE - Specifies that a user is excluded from seeing the ad if they are in advertiser's excluded locations. |

### `Campaign_HotelSettingInfo`

Campaign-level settings for hotel ads.

| Field | Type | Description |
|---|---|---|
| disableHotelSetting | boolean | Disable the optional hotel setting. This field is currently supported only for Demand Gen campaigns. |
| hotelCenterId | string (int64) | The linked Hotel Center account. |

### `Campaign_LocalCampaignSetting`

Campaign setting for local campaigns.

| Field | Type | Description |
|---|---|---|
| locationSourceType | string enum(UNSPECIFIED, UNKNOWN, GOOGLE_MY_BUSINESS, AFFILIATE) | The location source type for this local campaign. Values: UNSPECIFIED - No value has been specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; GOOGLE_MY_BUSINESS - Locations associated with the customer's linked Business Profile.; AFFILIATE - Affiliate (chain) store locations. For example, Best Buy store locations. |

### `Campaign_LocalServicesCampaignSettings`

Settings for LocalServicesCampaign subresource.

| Field | Type | Description |
|---|---|---|
| categoryBids | array<`Campaign_CategoryBid`> | Categorical level bids associated with MANUAL_CPA bidding strategy. |

### `Campaign_NetworkSettings`

The network settings for the campaign.

| Field | Type | Description |
|---|---|---|
| targetYoutube | boolean | Whether ads will be served on YouTube. |
| targetContentNetwork | boolean | Whether ads will be served on specified placements in the Google Display Network. Placements are specified using the Placement criterion. |
| targetGoogleTvNetwork | boolean | Whether ads will be served on the Google TV network. |
| targetPartnerSearchNetwork | boolean | Whether ads will be served on the partner network. This is available only to some select partner accounts. Unless you have been instructed to use this field, it likely does not apply to your account. This does not control whether ads will be served on Google Search Partners Network; use `target_search_network` for that instead. |
| targetSearchNetwork | boolean | Whether ads will be served on sites in the Google Search Partners Network (requires `target_google_search` to also be `true`). |
| targetGoogleSearch | boolean | Whether ads will be served with google.com search results. |

### `Campaign_OptimizationGoalSetting`

Optimization goal setting for this campaign, which includes a set of optimization goal types.

| Field | Type | Description |
|---|---|---|
| optimizationGoalTypes | array<string enum(UNSPECIFIED, UNKNOWN, CALL_CLICKS, DRIVING_DIRECTIONS, APP_PRE_REGISTRATION)> | The list of optimization goal types. |

### `Campaign_PerformanceMaxUpgrade`

Information about a campaign being upgraded to Performance Max.

| Field | Type | Description |
|---|---|---|
| preUpgradeCampaign | string | Output only. The resource name of the legacy campaign upgraded to Performance Max. |
| performanceMaxCampaign | string | Output only. The resource name of the Performance Max campaign the campaign is upgraded to. |
| status | string enum(UNSPECIFIED, UNKNOWN, UPGRADE_IN_PROGRESS, UPGRADE_COMPLETE, UPGRADE_FAILED, UPGRADE_ELIGIBLE) | Output only. The upgrade status of a campaign requested to be upgraded to Performance Max. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; UPGRADE_IN_PROGRESS - The upgrade to a Performance Max campaign is in progress.; UPGRADE_COMPLETE - The upgrade to a Performance Max campaign is complete.; UPGRADE_FAILED - The upgrade to a Performance Max campaign failed. The campaign will still serve as it was before upgrade was attempted.; UPGRADE_ELIGIBLE - The campaign is eligible for upgrade to a Performance Max campaign. |

### `Campaign_PmaxCampaignSettings`

Settings for Performance Max campaigns.

| Field | Type | Description |
|---|---|---|
| localServicesPmaxCampaignSettings | `Campaign_LocalServicesPmaxCampaignSettings` | The Local Services Campaign related settings. Only updates are available for existing Local Services Pmax campaigns. |
| localServicesEnabled | boolean | Immutable. Indicates whether the Performance Max campaign is a Local Services campaign. |
| brandTargetingOverrides | `CampaignPmaxCampaignSettings_BrandTargetingOverrides` | Overrides of brand targeting for various ad types. |

### `Campaign_SelectiveOptimization`

Selective optimization setting for this campaign, which includes a set of conversion actions to optimize this campaign towards. This feature only applies to app campaigns that use MULTI_CHANNEL as AdvertisingChannelType and APP_CAMPAIGN or APP_CAMPAIGN_FOR_ENGAGEMENT as AdvertisingChannelSubType.

| Field | Type | Description |
|---|---|---|
| conversionActions | array<string> | The selected set of resource names for conversion actions for optimizing this campaign. |

### `Campaign_ShoppingSetting`

The setting for Shopping campaigns. Defines the universe of products that can be advertised by the campaign, and how this campaign interacts with other Shopping campaigns.

| Field | Type | Description |
|---|---|---|
| disableProductFeed | boolean | Disable the optional product feed. This field is currently supported only for Demand Gen campaigns. See https://support.google.com/google-ads/answer/13721750 to learn more about this feature. |
| merchantId | string (int64) | ID of the Merchant Center account. This field is required for create operations. This field is immutable for Shopping campaigns. |
| ignoreBrandExclusionInShoppingAds | boolean | If true, brand exclusions are ignored for Shopping ads. Only supported for Shopping campaigns. |
| useVehicleInventory | boolean | Immutable. Whether to target Vehicle Listing inventory. This field is no longer supported. Use Performance Max or Shopping campaigns with `listing_type` to target Vehicle Listing inventory. |
| feedLabel | string | Feed label of products to include in the campaign. Valid feed labels may contain a maximum of 20 characters including uppercase letters, numbers, hyphens, and underscores. If you previously used the deprecated `sales_country` in the two-letter country code (`XX`) format, the `feed_label` field should be used instead. For more information see the [feed label](https://support.google.com/merchants/answer/12453549) support article. |
| enableLocal | boolean | Whether to include local products. |
| campaignPriority | integer (int32) | Priority of the campaign. Campaigns with numerically higher priorities take precedence over those with lower priorities. This field is required for Shopping campaigns, with values between 0 and 2, inclusive. |
| advertisingPartnerIds | array<string (int64)> | The list of Google Ads accounts IDs of advertising partners cooperating within the campaign. This feature is currently available only for accounts having an advertising partner link. Once set, the field is immutable. This feature is currently supported only for Performance Max, Shopping, Search and Demand Gen campaign types. |

### `Campaign_TextGuidelines`

Settings to control automatically generated text assets.

| Field | Type | Description |
|---|---|---|
| messagingRestrictions | array<`Campaign_MessagingRestriction`> | Freeform instructions that will be used to guide text asset generation using LLM inference. At most 40 restrictions may be provided. |
| termExclusions | array<string> | Exact words or phrases that will be excluded from generated text assets. At most 25 exclusions may be provided. Valid exclusions may contain a maximum of 30 characters. |

### `Campaign_TrackingSetting`

Campaign-level settings for tracking information.

| Field | Type | Description |
|---|---|---|
| trackingUrl | string | Output only. The url used for dynamic tracking. |

### `Campaign_TravelCampaignSettings`

Settings for Travel campaign.

| Field | Type | Description |
|---|---|---|
| travelAccountId | string (int64) | Immutable. The Travel account ID associated with the Travel campaign. |

### `Campaign_VanityPharma`

Describes how unbranded pharma ads will be displayed.

| Field | Type | Description |
|---|---|---|
| vanityPharmaDisplayUrlMode | string enum(UNSPECIFIED, UNKNOWN, MANUFACTURER_WEBSITE_URL, WEBSITE_DESCRIPTION) | The display mode for vanity pharma URLs. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; MANUFACTURER_WEBSITE_URL - Replace vanity pharma URL with manufacturer website url.; WEBSITE_DESCRIPTION - Replace vanity pharma URL with description of the website. |
| vanityPharmaText | string enum(UNSPECIFIED, UNKNOWN, PRESCRIPTION_TREATMENT_WEBSITE_EN, PRESCRIPTION_TREATMENT_WEBSITE_ES, PRESCRIPTION_DEVICE_WEBSITE_EN, PRESCRIPTION_DEVICE_WEBSITE_ES, MEDICAL_DEVICE_WEBSITE_EN, MEDICAL_DEVICE_WEBSITE_ES, PREVENTATIVE_TREATMENT_WEBSITE_EN, PREVENTATIVE_TREATMENT_WEBSITE_ES, PRESCRIPTION_CONTRACEPTION_WEBSITE_EN, PRESCRIPTION_CONTRACEPTION_WEBSITE_ES, PRESCRIPTION_VACCINE_WEBSITE_EN, PRESCRIPTION_VACCINE_WEBSITE_ES) | The text that will be displayed in display URL of the text ad when website description is the selected display mode for vanity pharma URLs. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; PRESCRIPTION_TREATMENT_WEBSITE_EN - Prescription treatment website with website content in English.; PRESCRIPTION_TREATMENT_WEBSITE_ES - Prescription treatment website with website content in Spanish (Sitio de tratamientos con receta).; PRESCRIPTION_DEVICE_WEBSITE_EN - Prescription device website with website content in English.; PRESCRIPTION_DEVICE_WEBSITE_ES - Prescription device website with website content in Spanish (Sitio de dispositivos con receta).; MEDICAL_DEVICE_WEBSITE_EN - Medical device website with website content in English.; MEDICAL_DEVICE_WEBSITE_ES - Medical device website with website content in Spanish (Sitio de dispositivos médicos).; PREVENTATIVE_TREATMENT_WEBSITE_EN - Preventative treatment website with website content in English.; PREVENTATIVE_TREATMENT_WEBSITE_ES - Preventative treatment website with website content in Spanish (Sitio de tratamientos preventivos).; PRESCRIPTION_CONTRACEPTION_WEBSITE_EN - Prescription contraception website with website content in English.; PRESCRIPTION_CONTRACEPTION_WEBSITE_ES - Prescription contraception website with website content in Spanish (Sitio de anticonceptivos con receta).; PRESCRIPTION_VACCINE_WEBSITE_EN - Prescription vaccine website with website content in English.; PRESCRIPTION_VACCINE_WEBSITE_ES - Prescription vaccine website with website content in Spanish (Sitio de vacunas con receta). |

### `Campaign_VideoCampaignSettings`

Settings for Video campaign.

| Field | Type | Description |
|---|---|---|
| bookingDetails | `CampaignVideoCampaignSettings_BookingDetails` | Output only. Booking information for campaigns with the FIXED_CPM or FIXED_SHARE_OF_VOICE bidding strategies. |
| reservationAdCategorySelfDisclosure | `CampaignVideoCampaignSettings_ReservationAdCategorySelfDisclosure` | Ad category self-disclosure for campaigns with the FIXED_CPM or FIXED_SHARE_OF_VOICE bidding strategies. |
| videoAdInventoryControl | `CampaignVideoCampaignSettings_VideoAdInventoryControl` | Inventory control for video responsive ads in reach campaigns. |
| videoAdSequence | `CampaignVideoCampaignSettings_VideoAdSequence` | Container for video ads sequencing definition. |
| videoAdFormatControl | `CampaignVideoCampaignSettings_VideoAdFormatControl` | Format-restricting control enabling usage of video responsive ads in format defined Video campaigns (for example, non-skippable). |

### `CampaignOperation`

A single operation (create, update, remove) on a campaign.

| Field | Type | Description |
|---|---|---|
| update | `Campaign` | Update operation: The campaign is expected to have a valid resource name. |
| remove | string | Remove operation: A resource name for the removed campaign is expected, in this format: `customers/{customer_id}/campaigns/{campaign_id}` |
| updateMask | string (google-fieldmask) | FieldMask that determines which resource fields are modified in an update. |
| create | `Campaign` | Create operation: No resource name is expected for the new campaign. |

### `MutateCampaignResult`

The result for the campaign mutate.

| Field | Type | Description |
|---|---|---|
| campaign | `Campaign` | The mutated campaign with only mutable fields after mutate. The field will only be returned when response_content_type is set to "MUTABLE_RESOURCE". |
| resourceName | string | Returned for successful operations. |

### `GoogleRpc__Status`

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

| Field | Type | Description |
|---|---|---|
| details | array<map<string, any>> | A list of messages that carry the error details. There is a common set of message types for APIs to use. |
| message | string | A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. |
| code | integer (int32) | The status code, which should be an enum value of google.rpc.Code. |

### `EnableOperation`

A single enable operation of a campaign.

| Field | Type | Description |
|---|---|---|
| finalUriDomain | string | Optional. The domain of the final uri. |
| campaign | string | Required. The resource name of the campaign to enable. |
| brandAssets | `BrandCampaignAssets` | Optional. The brand assets linked to the campaign. This field is required when the value of auto_populate_brand_assets is false. |
| fontFamily | string | Optional. The font family is specified as a string, and must be one of the following: "Open Sans", "Roboto", "Roboto Slab", "Montserrat", "Poppins", "Lato", "Oswald", or "Playfair Display". |
| mainColor | string | Optional. Hex code representation of the main brand color, for example #00ff00. main_color is required when accent color is specified. |
| autoPopulateBrandAssets | boolean | Required. The switch to automatically populate top-performing brand assets. This field is required. If true, top-performing brand assets will be automatically populated. If false, the brand_assets field is required. |
| accentColor | string | Optional. Hex code representation of the accent brand color, for example #00ff00. accent_color is required when main_color is specified. |

### `EnablementResult`

A single enablement result of a campaign.

| Field | Type | Description |
|---|---|---|
| campaign | string | This indicates the campaign for which enablement was tried, regardless of the outcome. |
| enablementError | `GoogleRpc__Status` | Details of the error when enablement fails. |

### `CampaignThirdPartyBrandLiftIntegrationPartner`

Container for third party Brand Lift integration data for Campaign.

| Field | Type | Description |
|---|---|---|
| brandLiftIntegrationPartnerData | `ThirdPartyIntegrationPartnerData` | Third party partner data for YouTube Brand Lift verification. This is optional metadata for partners to join or attach data to Ads campaigns. |
| brandLiftIntegrationPartner | string enum(UNSPECIFIED, UNKNOWN, KANTAR_MILLWARD_BROWN, DYNATA, INTAGE, MACROMILL) | Allowed third party integration partners for Brand Lift verification. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; KANTAR_MILLWARD_BROWN - Kantar; DYNATA - Dynata; INTAGE - Intage; MACROMILL - Macromill |
| shareCost | boolean | If true, then cost data will be shared with this vendor. |

### `CampaignThirdPartyBrandSafetyIntegrationPartner`

Container for third party brand safety integration data for Campaign.

| Field | Type | Description |
|---|---|---|
| brandSafetyIntegrationPartnerData | `ThirdPartyIntegrationPartnerData` | Third party partner data for YouTube brand safety verification. This is optional metadata for partners to join or attach data to Ads campaigns. |
| brandSafetyIntegrationPartner | string enum(UNSPECIFIED, UNKNOWN, DOUBLE_VERIFY, INTEGRAL_AD_SCIENCE, ZEFR) | Allowed third party integration partners for brand safety verification. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; DOUBLE_VERIFY - DoubleVerify.; INTEGRAL_AD_SCIENCE - Integral Ad Science.; ZEFR - Zefr. |

### `CampaignThirdPartyConversionAttributionIntegrationPartner`

Container for third party YouTube conversion attribution integration data for Campaign.

| Field | Type | Description |
|---|---|---|
| conversionAttributionIntegrationPartnerData | `ThirdPartyIntegrationPartnerData` | Third party partner data for YouTube conversion attribution verification. |
| conversionAttributionIntegrationPartner | string enum(UNSPECIFIED, UNKNOWN, TRANSUNION) | Allowed third party integration partners for YouTube conversion attribution verification. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; TRANSUNION - Transunion. |

### `CampaignThirdPartyReachIntegrationPartner`

Container for third party reach integration data for Campaign.

| Field | Type | Description |
|---|---|---|
| reachIntegrationPartner | string enum(UNSPECIFIED, UNKNOWN, NIELSEN, COMSCORE, KANTAR_MILLWARD_BROWN, VIDEO_RESEARCH, GEMIUS, MEDIA_SCOPE, AUDIENCE_PROJECT, VIDEO_AMP, ISPOT_TV) | Allowed third party integration partners for reach verification. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; NIELSEN - Nielsen.; COMSCORE - Comscore.; KANTAR_MILLWARD_BROWN - Kantar.; VIDEO_RESEARCH - Video Research.; GEMIUS - Gemius.; MEDIA_SCOPE - MediaScope.; AUDIENCE_PROJECT - AudienceProject; VIDEO_AMP - VideoAmp; ISPOT_TV - iSpot.tv |
| reachIntegrationPartnerData | `ThirdPartyIntegrationPartnerData` | Third party partner data for YouTube Reach verification. This is optional metadata for partners to join or attach data to Ads campaigns. |
| shareCost | boolean | If true, then cost data will be shared with this vendor. |

### `CampaignThirdPartyViewabilityIntegrationPartner`

Container for third party viewability integration data for Campaign.

| Field | Type | Description |
|---|---|---|
| viewabilityIntegrationPartnerData | `ThirdPartyIntegrationPartnerData` | Third party partner data for YouTube viewability verification. This is optional metadata for partners to join or attach data to Ads campaigns. |
| viewabilityIntegrationPartner | string enum(UNSPECIFIED, UNKNOWN, DOUBLE_VERIFY, INTEGRAL_AD_SCIENCE, ZEFR) | Allowed third party integration partners for YouTube viewability verification. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; DOUBLE_VERIFY - DoubleVerify.; INTEGRAL_AD_SCIENCE - Integral Ad Science.; ZEFR - Zefr. |
| shareCost | boolean | If true, then cost data will be shared with this vendor. |

### `FixedCpmTargetFrequencyGoalInfo`

Target frequency bidding goal details for Fixed CPM bidding strategy. Only relevant if the goal of the bidding strategy is `TARGET_FREQUENCY`.

| Field | Type | Description |
|---|---|---|
| timeUnit | string enum(UNSPECIFIED, UNKNOWN, MONTHLY) | Time window expressing the period over which you want to reach the specified target_count. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; MONTHLY - Optimize bidding to reach target frequency in 30 days. |
| targetCount | string (int64) | Target frequency count represents the number of times an advertiser wants to show the ad to target a single user. |

### `FrequencyCapKey`

A group of fields used as keys for a frequency cap. There can be no more than one frequency cap with the same key.

| Field | Type | Description |
|---|---|---|
| timeLength | integer (int32) | Number of time units the cap lasts. |
| timeUnit | string enum(UNSPECIFIED, UNKNOWN, DAY, WEEK, MONTH) | Unit of time the cap is defined at (for example, day, week). Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; DAY - The cap would define limit per one day.; WEEK - The cap would define limit per one week.; MONTH - The cap would define limit per one month. |
| level | string enum(UNSPECIFIED, UNKNOWN, AD_GROUP_AD, AD_GROUP, CAMPAIGN) | The level on which the cap is to be applied (for example, ad group ad, ad group). The cap is applied to all the entities of this level. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; AD_GROUP_AD - The cap is applied at the ad group ad level.; AD_GROUP - The cap is applied at the ad group level.; CAMPAIGN - The cap is applied at the campaign level. |
| eventType | string enum(UNSPECIFIED, UNKNOWN, IMPRESSION, VIDEO_VIEW) | The type of event that the cap applies to (for example, impression). Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; IMPRESSION - The cap applies on ad impressions.; VIDEO_VIEW - The cap applies on video ad views. |

### `TargetCpmTargetFrequencyGoal`

Target Frequency bidding goal details.

| Field | Type | Description |
|---|---|---|
| targetCount | string (int64) | Target Frequency count representing how many times you want to reach a single user. |
| timeUnit | string enum(UNSPECIFIED, UNKNOWN, WEEKLY, MONTHLY) | Time window expressing the period over which you want to reach the specified target_count. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; WEEKLY - Optimize bidding to reach Target Frequency in a week.; MONTHLY - Optimize bidding to reach Target Frequency in a month. |

### `TargetRestriction`

The list of per-targeting-dimension targeting settings.

| Field | Type | Description |
|---|---|---|
| targetingDimension | string enum(UNSPECIFIED, UNKNOWN, KEYWORD, AUDIENCE, TOPIC, GENDER, AGE_RANGE, PLACEMENT, PARENTAL_STATUS, INCOME_RANGE) | The targeting dimension that these settings apply to. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; KEYWORD - Keyword criteria, for example, 'mars cruise'. KEYWORD may be used as a custom bid dimension. Keywords are always a targeting dimension, so may not be set as a target "ALL" dimension with TargetRestriction.; AUDIENCE - Audience criteria, which include user list, user interest, custom affinity, and custom in market.; TOPIC - Topic criteria for targeting categories of content, for example, 'category::Animals>Pets' Used for Display and Video targeting.; GENDER - Criteria for targeting gender.; AGE_RANGE - Criteria for targeting age ranges.; PLACEMENT - Placement criteria, which include websites like 'www.flowers4sale.com', as well as mobile applications, mobile app categories, YouTube videos, and YouTube channels.; PARENTAL_STATUS - Criteria for parental status targeting.; INCOME_RANGE - Criteria for income range targeting. |
| bidOnly | boolean | Indicates whether to restrict your ads to show only for the criteria you have selected for this targeting_dimension, or to target all values for this targeting_dimension and show ads based on your targeting in other TargetingDimensions. A value of `true` means that these criteria will only apply bid modifiers, and not affect targeting. A value of `false` means that these criteria will restrict targeting as well as applying bid modifiers. |

### `TargetRestrictionOperation`

Operation to be performed on a target restriction list in a mutate.

| Field | Type | Description |
|---|---|---|
| value | `TargetRestriction` | The target restriction being added to or removed from the list. |
| operator | string enum(UNSPECIFIED, UNKNOWN, ADD, REMOVE) | Type of list operation to perform. Values: UNSPECIFIED - Unspecified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; ADD - Add the restriction to the existing restrictions.; REMOVE - Remove the restriction from the existing restrictions. |

### `CampaignAssetAutomationSetting_AutomatedVideoCrawlSetting`

Represents the settings for automated video crawling for a campaign.

| Field | Type | Description |
|---|---|---|
| automatedVideoCrawlInfos | array<`CampaignAssetAutomationSetting_AutomatedVideoCrawlInfo`> | The list of info to be included for crawling. |

### `Campaign_CategoryBid`

Category bids in LocalServicesReportingCampaignSettings.

| Field | Type | Description |
|---|---|---|
| targetCpaBidMicros | string (int64) | Target CPA bid for the category. Value is in micros and in the advertiser's currency. |
| categoryId | string | Category for which the bid will be associated with. For example, xcat:service_area_business_plumber. |
| manualCpaBidMicros | string (int64) | Manual CPA bid for the category. Bid must be greater than the reserve price associated for that category. Value is in micros and in the advertiser's currency. |

### `CampaignPmaxCampaignSettings_BrandTargetingOverrides`

Overrides of brand targeting for various ad types.

| Field | Type | Description |
|---|---|---|
| ignoreExclusionsForShoppingAds | boolean | If true, brand exclusions are ignored for Shopping ads. |

### `Campaign_LocalServicesPmaxCampaignSettings`

Settings for Local Services Performance Max Campaign subresource.

| Field | Type | Description |
|---|---|---|
| listingId | string (int64) | Required. Immutable. Listing ID of the Business Profile linked to the campaign. |
| phoneNumbers | array<`LocalServicesPhoneNumber`> | List of phone numbers associated with the provider. |
| countryCode | string | Required. Immutable. Country code of the Local Services Ad. Set once during Ad Creation and used to determine verification requirements and validate location criterion selection; upper-case, two-letter codes as defined by ISO-3166. |
| navigationalQueryLeadsEnabled | boolean | Whether to use navigational query filter. |
| foundingYear | string (int64) | Founding year of the business. |

### `Campaign_MessagingRestriction`

Freeform instructions that will be used to guide text asset generation using LLM inference.

| Field | Type | Description |
|---|---|---|
| restrictionText | string | Freeform instructions to guide text asset generation using LLM inference. Valid instructions may contain a maximum of 300 characters. |
| restrictionType | string enum(UNSPECIFIED, UNKNOWN, RESTRICTION_BASED_EXCLUSION) | Determines how the guideline is applied. Only `RESTRICTION_BASED_EXCLUSION` is currently supported. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; RESTRICTION_BASED_EXCLUSION - Exclude text assets that are not compliant with this restriction. |

### `CampaignVideoCampaignSettings_BookingDetails`

Container for booking details for campaigns with the FIXED_CPM or FIXED_SHARE_OF_VOICE bidding strategies.

| Field | Type | Description |
|---|---|---|
| status | string enum(UNSPECIFIED, UNKNOWN, BOOKED, HELD, CAMPAIGN_ENDED, HOLD_EXPIRED, BOOKING_CANCELLED) | Output only. The status of the booking. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; BOOKED - The booking is active and holds inventory for the campaign.; HELD - The campaign is holding inventory, but the booking is not confirmed.; CAMPAIGN_ENDED - The campaign has ended and is no longer holding inventory.; HOLD_EXPIRED - The hold on the inventory has expired.; BOOKING_CANCELLED - The campaign was booked, but was in a non-servable state for too long and the booking was cancelled by the system. |
| cancellationDateTime | string | Output only. Time when the booked inventory of this campaign will be cancelled or has been cancelled. Available for primary status NOT_ELIGIBLE if the campaign will be cancelled and for primary status reason BOOKING_CANCELLED. Format is "yyyy-MM-dd HH:mm:ss" in the customer's time zone. |
| holdExpirationDateTime | string | Output only. Time until which booked inventory will be held or has been held for this campaign. Available for status HELD and HOLD_EXPIRED. Format is "yyyy-MM-dd HH:mm:ss" in the customer's time zone. |

### `CampaignVideoCampaignSettings_ReservationAdCategorySelfDisclosure`

Container for ad category self-disclosure for campaigns with the FIXED_CPM or FIXED_SHARE_OF_VOICE bidding strategies.

| Field | Type | Description |
|---|---|---|
| politics | boolean | The campaign is expected to contain politics-related ads. |
| gambling | boolean | The campaign is expected to contain gambling-related ads. |
| alcohol | boolean | The campaign is expected to contain alcohol-related ads. |

### `CampaignVideoCampaignSettings_VideoAdFormatControl`

Format-restricting control enabling usage of video responsive ads in format defined Video campaigns (for example, non-skippable).

| Field | Type | Description |
|---|---|---|
| nonSkippableInStreamRestrictions | `CampaignVideoCampaignSettings_NonSkippableInStreamRestrictions` | Restrictions for non-skippable format. |
| formatRestriction | string enum(UNSPECIFIED, UNKNOWN, NON_SKIPPABLE_IN_STREAM) | All contained responsive ads are expected to respect this restriction. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; NON_SKIPPABLE_IN_STREAM - Non-skippable in-stream video responsive ad. |

### `CampaignVideoCampaignSettings_VideoAdInventoryControl`

For campaigns using video responsive ads inventory controls determine on which inventories the ads can be shown. This only applies for campaigns with the bidding strategies TARGET_CPM and FIXED_CPM.

| Field | Type | Description |
|---|---|---|
| allowInStream | boolean | Determine if video responsive ads can be used for in-stream video ads. |
| allowNonSkippableInStream | boolean | Determine if video responsive ads can be used for non-skippable in-stream ads. This is only available for campaigns that allow mixing of non-skippable with other formats (Video reach campaign with Target Frequency bidding strategy goal). |
| allowInFeed | boolean | Determine if video responsive ads can be used for in-feed video ads. |
| allowShorts | boolean | Determine if video responsive ads can be used as shorts format. |

### `CampaignVideoCampaignSettings_VideoAdSequence`

Container for video ads sequencing definition.

| Field | Type | Description |
|---|---|---|
| steps | array<`CampaignVideoCampaignSettings_VideoAdSequenceStep`> | The list of sequence steps and data associated with them. |
| minimumDuration | string enum(UNSPECIFIED, UNKNOWN, WEEK, MONTH) | Users are eligible to repeat sequence after this period. Defaults to WEEK if not specified. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; WEEK - Users are eligible to restart a sequence once they have completed the sequence and at least 7 days have passed since sequence start.; MONTH - Users are eligible to restart a sequence once at least 30 days have passed since sequence start. Users are eligible to start the sequence again even if they haven't completed the sequence. |

### `BrandCampaignAssets`

Assets linked at the campaign level. A business_name and at least one logo_asset are required.

| Field | Type | Description |
|---|---|---|
| logoAsset | array<string> | Required. The resource name of square logo assets. |
| landscapeLogoAsset | array<string> | Optional. The resource name of landscape logo assets. |
| businessNameAsset | string | Required. The resource name of the business name text asset. |

### `ThirdPartyIntegrationPartnerData`

Contains third party measurement partner related data for video campaigns.

| Field | Type | Description |
|---|---|---|
| thirdPartyPlacementId | string | The third party placement ID that maps the measurement partner data with a campaign (or a group of related campaigns) specific data. |
| clientId | string | The client ID that allows the measurement partner to join multiple campaigns for a particular advertiser. |

### `CampaignAssetAutomationSetting_AutomatedVideoCrawlInfo`

Represents the info for a single URL source for automated video crawling.

| Field | Type | Description |
|---|---|---|
| url | string | The URL to be included for crawling. |
| enabled | boolean | Whether the user has checked this source and opted in for automated video crawling. |
| sourcePlatform | string enum(UNSPECIFIED, UNKNOWN, LANDING_PAGE, SOCIAL, YOUTUBE) | The type of source this info block represents. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used as a return value only. Represents value unknown in this version.; LANDING_PAGE - Landing page: Videos on advertiser's landing page.; SOCIAL - Organic Social Video: Videos found from social URLs linked in advertiser landing page (Facebook, Instagram, X, LinkedIn, TikTok).; YOUTUBE - YouTube Channel Organic Videos: Videos from the advertiser's channel. |

### `LocalServicesPhoneNumber`

Phone number associated with the provider.

| Field | Type | Description |
|---|---|---|
| phoneNumber | string | The phone number. |
| countryCode | string | Upper-case, two-letter codes as defined by ISO-3166. |
| phoneNumberType | string enum(UNSPECIFIED, UNKNOWN, DESTINATION_PHONE_NUMBER_FOR_ADS, DESTINATION_PHONE_NUMBER_FOR_SMS_ONLY, DESTINATION_PHONE_NUMBER_FOR_WHATSAPP_ONLY) | The type of the phone number. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; DESTINATION_PHONE_NUMBER_FOR_ADS - Provider-provided destination number to use for calls originating from a GLS ad unit. This is the default.; DESTINATION_PHONE_NUMBER_FOR_SMS_ONLY - Destination phone number that supports SMS.; DESTINATION_PHONE_NUMBER_FOR_WHATSAPP_ONLY - Destination phone number for a provider's WhatsApp account. |

### `CampaignVideoCampaignSettings_NonSkippableInStreamRestrictions`

Restrictions for non-skippable format.

| Field | Type | Description |
|---|---|---|
| minDuration | string enum(UNSPECIFIED, UNKNOWN, MIN_DURATION_FIVE_SECONDS, MIN_DURATION_SEVEN_SECONDS, MIN_DURATION_SIXTEEN_SECONDS, MIN_DURATION_THIRTY_ONE_SECONDS) | The minimum allowed duration for non-skippable ads. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; MIN_DURATION_FIVE_SECONDS - Indicates that non-skippable ads must be at least 5 seconds long.; MIN_DURATION_SEVEN_SECONDS - Indicates that non-skippable ads must be at least 7 seconds long.; MIN_DURATION_SIXTEEN_SECONDS - Indicates that non-skippable ads must be at least 16 seconds long.; MIN_DURATION_THIRTY_ONE_SECONDS - Indicates that non-skippable ads must be at least 31 seconds long. |
| maxDuration | string enum(UNSPECIFIED, UNKNOWN, MAX_DURATION_FIFTEEN_SECONDS, MAX_DURATION_THIRTY_SECONDS, MAX_DURATION_SIXTY_SECONDS) | The maximum allowed duration for non-skippable ads. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; MAX_DURATION_FIFTEEN_SECONDS - Indicates that non-skippable ads must be at most 15 seconds long.; MAX_DURATION_THIRTY_SECONDS - Indicates that non-skippable ads must be at most 30 seconds long.; MAX_DURATION_SIXTY_SECONDS - Indicates that non-skippable ads must be at most 60 seconds long. |

### `CampaignVideoCampaignSettings_VideoAdSequenceStep`

Information about a step within a video sequence.

| Field | Type | Description |
|---|---|---|
| previousStepInteractionType | string enum(UNSPECIFIED, UNKNOWN, PAID_VIEW, SKIP, IMPRESSION, ENGAGED_IMPRESSION) | Type of interaction *on the previous step* required in order for the user to advance to this step. As with the previous step ID, it's required for every step except for the first one. Values: UNSPECIFIED - Not specified.; UNKNOWN - Used for return value only. Represents value unknown in this version.; PAID_VIEW - The viewer engaged with or watched at least 30 seconds of the ad (or the entire ad, if it was less than 30 seconds). Only available for campaigns using Target CPM as the bidding strategy and skippable in-stream ads as the ad format.; SKIP - The viewer skipped the ad. Only available for campaigns using Target CPM as the bidding strategy and skippable in-stream ads as the ad format.; IMPRESSION - The ad was shown to the viewer.; ENGAGED_IMPRESSION - An ad impression that was not immediately skipped, but didn't reach the billable event either. |
| adGroupType | string enum(UNSPECIFIED, UNKNOWN, SEARCH_STANDARD, DISPLAY_STANDARD, SHOPPING_PRODUCT_ADS, HOTEL_ADS, SHOPPING_SMART_ADS, VIDEO_BUMPER, VIDEO_TRUE_VIEW_IN_STREAM, VIDEO_TRUE_VIEW_IN_DISPLAY, VIDEO_NON_SKIPPABLE_IN_STREAM, SEARCH_DYNAMIC_ADS, SHOPPING_COMPARISON_LISTING_ADS, PROMOTED_HOTEL_ADS, VIDEO_RESPONSIVE, VIDEO_EFFICIENT_REACH, SMART_CAMPAIGN_ADS, TRAVEL_ADS, YOUTUBE_AUDIO) | The ad group type for this step (denoting the video format). Values: UNSPECIFIED - The type has not been specified.; UNKNOWN - The received value is not known in this version. This is a response-only value.; SEARCH_STANDARD - The default ad group type for Search campaigns.; DISPLAY_STANDARD - The default ad group type for Display campaigns.; SHOPPING_PRODUCT_ADS - The ad group type for Shopping campaigns serving standard product ads.; HOTEL_ADS - The default ad group type for Hotel campaigns.; SHOPPING_SMART_ADS - The type for ad groups in Smart Shopping campaigns. New Smart Shopping campaigns cannot be created.; VIDEO_BUMPER - Short unskippable in-stream video ads.; VIDEO_TRUE_VIEW_IN_STREAM - TrueView (skippable) in-stream video ads.; VIDEO_TRUE_VIEW_IN_DISPLAY - TrueView in-display video ads.; VIDEO_NON_SKIPPABLE_IN_STREAM - Unskippable in-stream video ads.; SEARCH_DYNAMIC_ADS - Ad group type for Dynamic Search Ads ad groups.; SHOPPING_COMPARISON_LISTING_ADS - The type for ad groups in Shopping Comparison Listing campaigns.; PROMOTED_HOTEL_ADS - The ad group type for Promoted Hotel ad groups.; VIDEO_RESPONSIVE - Video responsive ad groups.; VIDEO_EFFICIENT_REACH - Video efficient reach ad groups.; SMART_CAMPAIGN_ADS - Ad group type for Smart campaigns.; TRAVEL_ADS - Ad group type for Travel campaigns.; YOUTUBE_AUDIO - Ad group type for YouTube Audio campaigns. |
| videoAdSequenceStepId | string (int64) | The ID of this sequence step. |
| previousStepId | string (int64) | The ID of the previous step. This field is required for all steps except the first one. It must point to a step that appears in the step definition list before this step. |
| assetId | string (int64) | The ID of the Asset for this step. The asset must be type YOUTUBE_VIDEO. |

